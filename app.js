
const mysql = require("mysql");

//конфигурация

const conn = mysql.createConnection({
  host: 'http://localhost:8080/',
  user: 'root',
  database: 'rct_school_diary',
  pasword: '',
})

conn.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});