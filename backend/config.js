module.exports = {
  port: 3000,
  db: process.env.DATABASE_URL || 'mongodb://localhost/threadit'
};