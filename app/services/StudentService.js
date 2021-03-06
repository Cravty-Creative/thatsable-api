const StudentRepository = require("../repositories/StudentRepository");
const randomize = require("../../utils/randomize");
const config = require("../../config/appconfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @class StudentService.js
 * @author Rizky Adji Pangestu
 */
class StudentService {
  static async register(email, password, fullname, phone) {
    if (!email || !password || !fullname || !phone) {
      return {
        status: false,
        code: 400,
        data: "All fields are required",
      };
    } else {
      if (await StudentRepository.checkEmail(email)) {
        return {
          status: false,
          code: 400,
          data: "Email already registered",
        };
      } else {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const student = {
          id: randomize.randomID(),
          ut_id: 2, // Student Role
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
          sdt_user_id: student.id,
          sdt_fullname: fullname,
          sdt_contact: phone,
          sdt_date_joined: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        return await StudentRepository.create(student, detail);
      }
    }
  }
  static async login(email, password) {
    const student = await StudentRepository.checkEmail(email);
    if (!student) {
      return {
        status: false,
        code: 400,
        data: "Email or password is incorrect",
      };
    } else {
      const check = await bcrypt.compare(password, student.password);
      if (check) {
        // Buat dan sign jwt token
        let payload = {
          id: student.id,
          email: student.email,
          role: student.ut_id,
        };
        const token = jwt.sign(payload, config.app.jwtSecret);
        await StudentRepository.update(student.id, {
          access_token: token,
          online_status: true,
          last_login: new Date(),
        });
        student.access_token = token;
        return {
          status: true,
          code: 200,
          data: student,
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
    const student = await StudentRepository.read(id);
    if (!student) {
      return {
        status: false,
        code: 404,
        data: "Student not found",
      };
    } else {
      await StudentRepository.update(student.id, {
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
    return StudentRepository.read(id);
  }
  static async getToken(id) {
    const student = await StudentRepository.read(id);
    if (!student) {
      return null;
    } else {
      return student.access_token;
    }
  }
}

module.exports = StudentService;
