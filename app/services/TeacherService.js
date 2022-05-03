const TeacherRepository = require("../repositories/TeacherRepository");
const randomize = require("../../utils/randomize");
const config = require("../../config/appconfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @class TeacherService.js
 * @author Rizky Adji Pangestu
 */
class TeacherService {
  static async register(email, password, fullname, phone) {
    if (!email || !password || !fullname || !phone) {
      return {
        status: false,
        code: 400,
        data: "All fields are required",
      };
    } else {
      if (await TeacherRepository.checkEmail(email)) {
        return {
          status: false,
          code: 400,
          data: "Email already registered",
        };
      } else {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const teacher = {
          id: randomize.randomID(),
          ut_id: 1, // Teacher Role
          email: email,
          password: hash,
          online_status: false,
          status: true,
          createdBy: email,
          updatedBy: email,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        const detail = {
          id: randomize.randomID(),
          tdt_user_id: teacher.id,
          tdt_fullname: fullname,
          tdt_contact: phone,
          tdt_date_joined: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        return await TeacherRepository.create(teacher, detail);
      }
    }
  }
  static async login(email, password) {
    const teacher = await TeacherRepository.checkEmail(email);
    if (!teacher) {
      return {
        status: false,
        code: 400,
        data: "Email or password is incorrect",
      };
    } else {
      const check = await bcrypt.compare(password, teacher.password);
      if (check) {
        // Buat dan sign jwt token
        let payload = {
          id: teacher.id,
          email: teacher.email,
          role: teacher.ut_id,
        };
        const token = jwt.sign(payload, config.app.jwtSecret);
        await TeacherRepository.update(teacher.id, {
          access_token: token,
          online_status: true,
          last_login: new Date(),
        });
        teacher.access_token = token;
        return {
          status: true,
          code: 200,
          data: teacher,
        };
      } else {
        return {
          status: false,
          code: 400,
          data: "Email or password is incorrect",
        };
      }
    }
  }
  static async logout(id) {
    const teacher = await TeacherRepository.read(id);
    if (!teacher) {
      return {
        status: false,
        code: 400,
        data: "Teacher not found",
      };
    } else {
      await TeacherRepository.update(teacher.id, {
        access_token: null,
        online_status: false,
        last_online: new Date(),
      });
      return {
        status: true,
        code: 200,
        data: "Logout success",
      };
    }
  }
  static get(id) {
    return TeacherRepository.read(id);
  }
  static async getToken(id) {
    const teacher = await TeacherRepository.read(id);
    if (!teacher) {
      return null;
    } else {
      return teacher.access_token;
    }
  }
}

module.exports = TeacherService;
