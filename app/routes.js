'use strict';
const { Lionel } = require("lionel-app/bin/LionelClass");
const Router = Lionel.Router;
Router.route('/index');
Router.route('/', 'index');
Router.route('/Home', 'index');
Router.route('/Docs', 'Docs');
Router.route('/About', 'About');
