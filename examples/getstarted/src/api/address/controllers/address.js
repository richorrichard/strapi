const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::address.address', ({ service }) => ({
  async find(ctx) {
    const { query } = ctx;

    const { results, pagination } = await service.find(query);
    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(sanitizedResults, { pagination });
  },
}));
