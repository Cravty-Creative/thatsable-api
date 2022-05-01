/**
 * @file server index.js
 * @author Rizky Adji Pangestu
 */

const Express = require("express");
const BodyParser = require("body-parser");
const cors = require("cors");
const config = require("../config/appconfig");
const app = Express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.set("config", config);
app.use(BodyParser.json({ limit: "50mb" }));
app.use(BodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.2",
    info: {
      title: "thatsable-api Docs",
      description: "API Service Documentation for Thatsable App",
      contact: {
        name: "Rizky Adji Pangestu",
        email: "rizkyadji21@gmail.com",
        url: "https://github.com/Tsucie",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://${process.env.SERVER || config.app.server}:${
          process.env.PORT || config.app.port
        }`,
        description: "Application Server",
      },
    ],
  },
  apis: ["./router/api/*.js", "./router/auth/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.set("port", config.app.port);
app.use(require("../router"));

app.listen(process.env.PORT || config.app.port, () => {
  console.log(
    `Service online at http://${process.env.SERVER || config.app.server}:${
      process.env.PORT || config.app.port
    }`
  );
  if (process.env.NODE_ENV !== "development") {
    console.log(
      `For API Docs & Testing, go to http://${
        process.env.SERVER || config.app.server
      }:${process.env.PORT || config.app.port}/docs`
    );
  }
});
