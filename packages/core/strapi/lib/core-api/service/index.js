'use strict';

const {
  isSingleType,
  constants: { DP_PUB_STATE_LIVE },
} = require('@strapi/utils').contentTypes;

const createSingleTypeService = require('./single-type');
const createCollectionTypeService = require('./collection-type');

/**
 * Returns a core api for the provided model
 * @param {{ model: object, strapi: object }} context
 * @returns {object}
 */
const createService = ({ contentType, strapi }) => {
  const utils = { getFetchParams };

  if (isSingleType(contentType)) {
    return createSingleTypeService({ contentType, strapi, utils });
  }

  return createCollectionTypeService({ contentType, strapi, utils });
};

/**
 * Create default fetch params
 * @param {*} params
 * @returns
 */
const getFetchParams = (params = {}) => {
  return {
    publicationState: DP_PUB_STATE_LIVE,
    ...params,
  };
};

module.exports = {
  createService,
  getFetchParams,
};
