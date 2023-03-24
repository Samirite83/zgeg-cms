/**
 * killfeed service
 */

module.exports = {
  getKillFeed: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany("api::kill.kill", {
        fields: ["isTeamkill", "isSuicide"],
        sort: { id: "desc" },
        start: 0,
        limit: 3,
        populate: {
          attacker: {
            fields: ["name"],
          },
          victim: {
            fields: ["name"],
          },
        },
      });

      // reduce the data to the format we want to return
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
          acc.push({
            id: item.id,
            teamkill: String(item.isTeamkill),
            suicide: String(item.isSuicide),
            attacker: item.attacker.name || "",
            victim: item.victim.name || "",
          });
          return acc;
        }, []);
      }

      // return the reduced data
      return entriesReduced;
    } catch (err) {
      return err;
    }
  },
};
