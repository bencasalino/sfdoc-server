exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("outdoor")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("outdoor").insert([
        {
          id: 1,
          name: "North High School",
          city: "Denver",
          fields: 1,
          url: "http://google.com/",
          latitude: 55.22,
          longitude: -33.33
        },
        {
          id: 2,
          name: "South High School",
          city: "Cherry Creek",
          fields: 2,
          url: "http://www.soccer.com/",
          latitude: 23.0,
          longitude: -55.22
        }
      ]);
    });
};
