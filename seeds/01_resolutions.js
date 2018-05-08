const resolutions = require('../resolutionsdata')



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "resolution"; ALTER SEQUENCE resolution_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('resolution').insert(resolutions)
    });
};


