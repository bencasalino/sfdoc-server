exports.up = function(knex, Promise) {
  return knex.schema.createTable("outdoor", table => {
    table.increments("id").primary();
    table.text("name");
    table.text("city");
    table.integer("fields");
    table.string("url");
    table.float("latitude");
    table.float("longitude");
    table.boolean("fieldType");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("outdoor");
};
