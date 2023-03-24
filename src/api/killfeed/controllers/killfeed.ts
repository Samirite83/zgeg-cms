/**
 * A set of functions called "actions" for `killfeed`
 */
const Mustache = require("mustache");

const template = `
  <ul>
    {{#data}}
      <li>{{attacker}} ({{victim}})</li>
    {{/data}}
  </ul>
`;

module.exports = {
  async getKillFeed(ctx, next) {
    try {
      const data = await strapi.service("api::killfeed.killfeed").getKillFeed();
      const output = Mustache.render(template, { data });
      ctx.body = output;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};

//getKillFeed
