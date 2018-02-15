exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("in")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("in").insert([
        {
          name: "Da Denver Dome",
          city: "Denver",
          fields: 1,
          id: 1
        },
        {
          name: "Pepsi Center",
          city: "Lo do",
          fields: 2,
          id: 2
        },
        {
          name: "Convention Center",
          city: "Downtown",
          fields: 4,
          id: 3
        },
        {
          name: "Rec Center",
          city: "River North",
          fields: 7,
          id: 4
        }
      ]);
    })
    .then(() => {
      // starts the next index at 5
      return knex.raw("ALTER SEQUENCE in_id_seq RESTART WITH 10;");
    });
};
