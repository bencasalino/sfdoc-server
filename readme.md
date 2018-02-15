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
          longitude: -33.33,
          id: 1
        },
        {
          name: "Pepsi Center",
          city: "Lo do",
          fields: 2,
          latitude: 23.08,
          longitude: -55.22,
          id: 2
        },
        {
          name: "Convention Center",
          city: "Downtown",
          fields: 4,
          latitude: 55.22,
          longitude: -33.33,
          id: 3
        },
        {
          name: "Rec Center",
          city: "River North",
          fields: 7,
          latitude: 55.22,
          longitude: -33.33,
          id: 4
        }
      ]);
    })
    .then(() => {
      // starts the next index at 5
      return knex.raw("ALTER SEQUENCE indoorfields_id_seq RESTART WITH 10;");
    });
};
 




 ////// 




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
          longitude: -13.33,
          id: 1001
        },
        {
          name: "Denvah High",
          city: "Five Points",
          fields: 10,
          latitude: 23.08,
          longitude: -55.22,
          id: 1002
        },
        {
          name: "Platte River Park",
          city: "Highlands",
          fields: 10,
          latitude: 23.08,
          longitude: -55.22,
          id: 1003
        },
        {
          name: "Cheeseman",
          city: "Cap Hill",
          fields: 99,
          latitude: -99.99,
          longitude: -22.22,
          id: 1004
        }
      ]);
    })
    .then(() => {
      // starts the next index at 4
      return knex.raw("ALTER SEQUENCE outdoorfields_id_seq RESTART WITH 1010;");
    });
};
