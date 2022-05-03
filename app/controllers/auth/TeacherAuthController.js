const TeacherService = require("../../services/TeacherService");
const config = require("../../../config/appconfig");
const jwt = require("jsonwebtoken");
/**
 * @class TeacherAuthController.js
 * @author Rizky Adji Pangestu
 */
class TeacherAuthController {
  static register(req, res) {
    TeacherService.register(
      req.body.email,
      req.body.password,
      req.body.fullname,
      req.body.phone
    )
      .then((result) => {
        if (result.status) {
          res.status(result.code).json({
            code: result.code,
            message: "Account successfully created",
            data: result.data,
          });
        } else {
          res.status(result.code).json({
            code: result.code,
            message: result.data,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      });
  }
  static login(req, res) {
    TeacherService.login(req.body.email, req.body.password)
      .then((result) => {
        if (result.status) {
          res.status(result.code).json({
            code: result.code,
            message: "Login successfully",
            data: result.data,
          });
        } else {
          res.status(result.code).json({
            code: result.code,
            message: result.data,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      });
  }
  static logout(req, res) {
    TeacherService.logout(req.params.id)
      .then((result) => {
        if (result.status) {
          res.status(result.code).json({
            code: result.code,
            message: result.data,
          });
        } else {
          res.status(result.code).json({
            code: result.code,
            message: result.data,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      });
  }
  static Authorization(req, res, next) {
    TeacherService.getToken(req.params.id)
      .then((result) => {
        if (!result) return res.sendStatus(404); // Not found
        const header = req.header("Authorization");
        if (!header) throw res.sendStatus(401); // Unauthorized
        const token = header.split(" ")[1];
        // Cek apakah token ada dan sesuai dengan pemiliknya
        if (!token || token !== result) return res.sendStatus(403); // Forbidden
        jwt.verify(token, config.app.jwtSecret);
        return next();
      })
      .catch((error) => {
        console.error(error);
        return res.sendStatus(500); // Internal Server Error
      });
  }
}

module.exports = TeacherAuthController;
