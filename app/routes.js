'use strict';
const { Lionel } = require("lionel-app/bin/LionelClass");
const Router = Lionel.Router;
Router.route('/index');
Router.route('/', 'index');
Router.route('/Home', 'index');
Router.route('/Docs', 'Getting Started');
Router.route('/About', 'About');
Router.route('/Getting Started', 'Getting Started');
Router.route('/Client Helper', 'Client Helper');

Router.route('/LionelClient', 'LionelClient');
Router.route('/Methods', 'Methods');
Router.route('/PHP', 'PHP');

Router.route('/Structure', 'Structure');
