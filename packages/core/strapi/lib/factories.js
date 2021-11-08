'use strict';

const createController = require('./core-api/controller');

const createCoreController = (uid, cfg) => {
  return ({ strapi }) => {
    const ctx = {
      service: strapi.service(uid),
      contentType: strapi.contentType(uid),
    };

    const baseCtrl = createController(ctx);

    let userCtrl = typeof cfg === 'function' ? cfg({ ...ctx, controller: baseCtrl }) : cfg;

    return Object.assign(baseCtrl, userCtrl);
  };
};

module.exports = {
  createCoreController,
};
