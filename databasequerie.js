var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'XXXXXXXXXXXXXX',
	database : 'serofclinic'
})
module.exports = function (callback) {
	connection.connect()
	connection.query('SELECT * FROM CLINICAS',callback)
	connection.end()
}
