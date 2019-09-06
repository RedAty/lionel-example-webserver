const {Lionel} = require("lionel-app/bin/LionelClass");
const Router = Lionel.Router;

Router.route('/index');
Router.route('/home', 'index');
Router.route('/', 'index');
