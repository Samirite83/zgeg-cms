module.exports = {
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
  "users-permissions": {
    providers: [
      {
        provider: "steam",
        name: "Steam",
        clientId: "AE72558353B655E9E1688E89A26DA125",
        clientSecret: "ZGEG",
        scope: ["user:read:email"],
        // Vérifiez l'URL de redirection dans les paramètres de l'application Steam
        redirectUri: "http://localhost:1337/connect/steam/callback",
        customRoutes: {
          steam: "/connect/steam",
          callback: "/connect/steam/callback",
        },
      },
    ],
  },
  //   io: {
  //     enabled: true,
  //     config: {
  //       IOServerOptions: {
  //         cors: { origin: "*", methods: ["GET"] },
  //       },
  //       contentTypes: {
  //         message: "*",
  //         chat: ["create"],
  //       },
  //       events: [
  //         {
  //           name: "connection",
  //           handler: ({ strapi }, socket) => {
  //             strapi.log.info(`[io] new connection with id ${socket.id}`);
  //           },
  //         },
  //       ],
  //     },
  //   },
};
