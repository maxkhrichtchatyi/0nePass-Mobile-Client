var globalConfig = {};

globalConfig.osname = Ti.Platform.osname;

// 0nePass Cloud Server
globalConfig.api = 'http://0nepass.com/api.php';

// default status
globalConfig.status = false;

// width & height of display
if (Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight) {
	globalConfig.width = Ti.Platform.displayCaps.platformWidth;
	globalConfig.height = Ti.Platform.displayCaps.platformHeight;
}
else {
	globalConfig.width = Ti.Platform.displayCaps.platformHeight;
	globalConfig.height = Ti.Platform.displayCaps.platformWidth;	
}

// default category
globalConfig.cat = 'web';

// default info
globalConfig.info = false;

// history main status
globalConfig.history_main = false;

// history res status
globalConfig.history_res = false;