import { Strapi } from "@strapi/strapi";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Strapi }) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // console.log("YOOLO" + JSON.stringify(strapi.$io));
    // const io = require("socket.io")(strapi.server.httpServer, {
    //   path: "/socket/v1/",
    //   cors: { origin: "*", methods: ["GET"] },
    //   credential: false,
    // });
    // strapi.io = io;
    // io.on("connection", function (socket) {
    //   console.log("New co : " + socket.id);
    // });
  },
};
