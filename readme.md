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




/// mig 


exports.up = function(knex, Promise) {
  return knex.schema.createTable("indoorfields", table => {
    table.text("name");
    table.text("city");
    table.integer("fields");
    table.float("latitude");
    table.float("longitude");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("indoorfields");
};
