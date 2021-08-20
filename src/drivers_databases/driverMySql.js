const mysql = require('mysql');
const connection = mysql. createConnection({
    host: 'localhost',
   user: 'root@localhost' ,
   password: '',
   database: 'gestor cecilia'

});

connection.connect((err) => {
    if (err) throw err;
    console.log('mysql ======> conexion');

});

module.exports = mysql; 
