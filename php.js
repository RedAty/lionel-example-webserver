'use strict';
const {initLionelServer} = require("lionel-app/bin/initLionelServer");
const { jsFolder, viewFolder, libFolder, port, liveUpdate, mainDirectory, separator, appData, appName} = require("./constants");

/**
 * Start HTTP/HTTS Server
 * @type {Array|*}
 */
initLionelServer(port,{
	appData: appData,
	appName: appName,
	lib:libFolder,
	view:viewFolder,
	js:jsFolder,
	debug:true,
	liveUpdate:liveUpdate,
	mainDirectory:mainDirectory,
	separator:separator,
	phpExport:'./htdocs/'
});
