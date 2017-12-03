var mysql = require('mysql');
var settings = require('../settings');

exports.execSQL = function(sql, callback) {

    var con = mysql.createConnection(settings.mysqlConn);

    con.query(sql,

        function(err, data) {
            callback(data, err);
            con.end();
        }

    );

};