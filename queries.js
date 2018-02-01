const database = require("./database-connection");

module.exports = {
  list(path) {
    return database(path).select();
  },
  //get 
  read(id, path) {
    return database(path)
      .select()
      .where("id", id);
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
  update(id, body, path) {
    return database(path)
      .update(body)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id, path) {
    return database(path)
      .delete()
      .where("id", id);
  }
};

