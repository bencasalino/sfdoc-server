// seeds 

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("indoor")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("indoor").insert([
        {
          name: "Denver Dome",
          city: "Denver",
          fields: 1,
          latitude: 55.22,
          longitude: -33.33,
        },
        {
          name: "Denver Arena",
          city: "Cherry Creek",
          fields: 2,
          latitude: 23.08,
          longitude: -55.22,
        }
      ]);
    });
};

// mig 

exports.up = function(knex, Promise) {
  return knex.schema.createTable("indoor", table => {
    table.text("name");
    table.text("city");
    table.integer("fields");
    table.float("latitude");
    table.float("longitude");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("indoor");
};
