module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///db_sfdoc"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
