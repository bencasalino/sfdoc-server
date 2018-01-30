
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('indoor').del()
    .then(function () {
      // Inserts seed entries
      return knex("indoor").insert([
        {
          id: 1,
          name: "Boulder Indoor Soccer",
          city: "Boulder",
          fields: 2,
          url: "http://boulderindoorsoccer.com/",
          latitude: 40.195976,
          longitude: -105.122658
        },
        {
          id: 2,
          name: "Denver Sports Center",
          city: "Denver",
          fields: 5,
          url: "http://www.letsplaysoccer.com/facilities/5",
          latitude: 12.0,
          longitude: -42.22
        }
      ]);
    });
};
