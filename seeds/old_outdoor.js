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
          fields: 1,
          latitude: 55.22,
          longitude: -33.33
        },
        {
          name: "Denver High ",
          city: "Wash Park",
          fields: 2,
          latitude: 23.0,
          longitude: -55.22
        }
      ]);
    });
};
