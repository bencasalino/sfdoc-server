exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("outdoorfields")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("outdoorfields").insert([
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
        },
              {
          name: "Platte River Park",
          city: "Highlands",
          fields: 10,
          latitude: 23.08,
          longitude: -55.22
        },
              {
          name: "Cheeseman",
          city: "Cap Hill",
          fields: 99,
          latitude: -99.99,
          longitude: -22.22
        }
      ]);
    });
};
