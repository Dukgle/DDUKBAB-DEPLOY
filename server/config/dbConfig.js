const mysql = require("mysql2");

const dbConfig = {
  host: "192.168.53.144",
  user: "newuser1",
  password: "1234",
  database: "ddukbab",
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error("MySQL 연결 오류:", err);
    throw err;
  }
  console.log("MySQL에 연결되었습니다.");
});

module.exports = db;
