exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("out")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("out").insert([
        {
          name: "Boulder High",
          city: "Boulder",
          fields: 4,
          id: 1001
        },
        {
          name: "Denvah High",
          city: "Five Points",
          fields: 10,
          id: 1002
        },
        {
          name: "Platte River Park",
          city: "Highlands",
          fields: 10,
          id: 1003
        },
        {
          name: "Cheeseman",
          city: "Cap Hill",
          fields: 99,
          id: 1004
        }
      ]);
    })
    .then(() => {
      // starts the next index at 4
      return knex.raw("ALTER SEQUENCE out_id_seq RESTART WITH 1010;");
    });
};
