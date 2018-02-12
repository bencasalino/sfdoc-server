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
          longitude: -33.33
        },
        {
          name: "Denver Arena",
          city: "Cherry Creek",
          fields: 2,
          latitude: 23.0,
          longitude: -55.22
        }
      ]);
    });
};
