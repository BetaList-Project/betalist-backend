'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
// get count of country
async countryCount(ctx) {
    
    const result = await strapi.query('start-up-post').model.count({ columns: ['country'] }) 
    ctx.send(result);

},

async marketCount(ctx) {
    
    const result = await strapi.query('start-up-post').model.count({ columns: ['market'] }) 
    ctx.send(result);

}

};
