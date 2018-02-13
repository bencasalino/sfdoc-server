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


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("outdoor")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("outdoor").insert([
        {
          name: "Boulder High",
          city: "Boulder",
          fields: 4,
          latitude: -55.22,
          longitude: -13.33
        },
        {
          name: "Denvah High",
          city: "Five Points",
          fields: 10,
          latitude: 23.08,
          longitude: -55.22
        }
      ]);
    });
};