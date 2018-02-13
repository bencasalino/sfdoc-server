exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("indoorfields")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("indoorfields").insert([
        {
          id: 1,
          name: "Da Denver Dome",
          city: "Denver",
          fields: 1,
          latitude: 55.22,
          longitude: -33.33
        },
        {
          id: 2,
          name: "Pepsi Center",
          city: "Lo do",
          fields: 2,
          latitude: 23.08,
          longitude: -55.22
        },
        {
          id: 3,
          name: "Convention Center",
          city: "Downtown",
          fields: 4,
          latitude: 55.22,
          longitude: -33.33
        },
        {
          id: 4,
          name: "Rec Center",
          city: "River North",
          fields: 7,
          latitude: 55.22,
          longitude: -33.33
        }
      ]);
    })
    .then(() => {
      // starts the next index at 4
      return knex.raw("ALTER SEQUENCE indoorfields_id_seq RESTART WITH 5;");
    });
};
