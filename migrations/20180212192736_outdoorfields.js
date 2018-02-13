exports.up = function(knex, Promise) {
  return knex.schema.createTable("outdoorfields", table => {
    table.increments("id").primary();
    table.text("name");
    table.text("city");
    table.integer("fields");
    table.float("latitude");
    table.float("longitude");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("outdoorfields");
};