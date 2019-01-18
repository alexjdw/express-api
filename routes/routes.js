db = require('../db/db.js');

function render_query_results(error, query_results, response) {
    if (error) {
        response.json({message: "There was an error processing this request.", err: error.errmsg});
    }
    else {
        response.json({message: "Success!", results: query_results});
    }
}

module.exports = function(app) {
    app.get('/', function(request, response) {
        db.People.find({}, function(error, results) {
            render_query_results(error, results, response);
        });
    });

    app.get('/:name', function(request, response) {
        db.People.find({name: request.params.name}, function(error, results) {
            render_query_results(error, results, response);
        });
    });

    app.get('/new/:name', function(request, response) {
        db.People.create({name: request.params.name}, function(error, results) {
            render_query_results(error, results, response);
        });
    });

    app.get('/remove/:name', function(request, response) {
        db.People.remove({name: request.params.name}, function(error, results) {
            if (error) { 
                response.json({message: "There was an error processing this request.", error: error});
            }
            response.redirect('/');
        });
    });
}