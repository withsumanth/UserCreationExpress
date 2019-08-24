module.exports = (app) => {
    const user = require('../controller/userController');

    app.post('/user',user.create);
    app.get('/user/:userName/:password',user.getUser);
    app.delete('/user/:userName',user.delete);
}