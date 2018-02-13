exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("indoorfields")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("indoorfields").insert([
        {
          name: "Da Denver Dome",
          city: "Denver",
          fields: 1,
          latitude: 55.22,
          longitude: -33.33
        },
        {
          name: "Pepsi Center",
          city: "Lo do",
          fields: 2,
          latitude: 23.08,
          longitude: -55.22
        },
        {
          name: "Convention Center",
          city: "Downtown",
          fields: 4,
          latitude: 55.22,
          longitude: -33.33
        },
        {
          name: "Rec Center",
          city: "River North",
          fields: 7,
          latitude: 55.22,
          longitude: -33.33
        }
      ]);
    });
};
