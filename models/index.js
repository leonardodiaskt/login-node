( async () => {

    const database = require('../db');
    const Login = require('./project');
    await database.sync();

    const newLogin = await Login.create({
        login: 'aaaaaa',
        password: '1233223'
    })
    console.log(newLogin);

})();