var db = require('../core/db');

function getApplicationList(req, res) {

    db.execSQL('Select * from maintain.application',

        function(data, err) {

            if (err) {
                res.writeHead(500, 'Internal Error occurred', {
                    'Content-Type': 'text/html'
                });
                res.write("<html><head><title>500</title></head><body>500: Internal Error.Details:" + err + "</body>");
            } else {

                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(data)); //Serialize the data

            }

            res.end();

        });
}
module.exports = {
    getApplicationList: getApplicationList
};