const database = require("./database-connection");

module.exports = {
  list(path) {
    return database(path).select();
  },
  //get 
  read(name, path) {
    return database(path)
      .select()
      .where("name", name);
    // .first();
  },
  // post 
  create(body, path) {
    return database(path)
      .insert(body)
      .returning("*")
      .then(record => record[0]);
  },
  // put 
  update(name, body, path) {
    return database(path)
      .update(body)
      .where("name", name)
      .returning("*")
      .then(record => record[0]);
  },
  delete(name, path) {
    return database(path)
      .delete()
      .where("name", name);
  }
};

