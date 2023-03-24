module.exports = {
  routes: [
    {
      method: "GET",
      path: "/killfeed",
      handler: "killfeed.getKillFeed",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
