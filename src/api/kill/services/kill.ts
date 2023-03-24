/**
 * kill service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::kill.kill');
