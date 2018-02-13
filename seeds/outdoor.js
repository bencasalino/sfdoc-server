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
