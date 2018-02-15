exports.up = function(knex, Promise) {
  return knex.schema.createTable("outdoorfields", table => {
    table.text("name");
    table.text("city");
    table.integer("fields");
    table.increments("id").primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("outdoorfields");
};