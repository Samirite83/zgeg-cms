module.exports = {
  io: {
    enabled: true,
    config: {
      IOServerOptions: {
        cors: { origin: "*", methods: ["GET"] },
      },
      contentTypes: {
        kill: "*",
        server: "*",
      },
      publicRoleName: "Public",
      events: [
        {
          name: "connection",
          handler: ({ strapi }, socket) => {
            strapi.log.info(`[io] new connection with id ${socket.id}`);
            console.log(`[io] new connection with id ${socket.id}`);
          },
        },
      ],
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
