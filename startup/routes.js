const user = require('../routes/user');

module.exports = function(app) {
    app.use('/', user);
}