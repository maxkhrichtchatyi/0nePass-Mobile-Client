/*!
 * 0nePass v1.0.0
 * http://0nepass.com/
 *
 * Copyright 2012 0nePass
 * Released under the MIT license
 * http://0nepass.com/license.html
 *
 * Date: Thu Apr 25 2012 11:17:22 GMT-0400 (Eastern Daylight Time)
 */

// global
Ti.include('global.js');

// langs
Ti.include('langs/en.js');

// database
var db = Ti.Database.open('base');
db.execute('CREATE TABLE IF NOT EXISTS onepass (hash TEXT, res TEXT)');
db.execute('CREATE TABLE IF NOT EXISTS logs (hash TEXT)');

if ((globalConfig.width == "800" && globalConfig.height == "480") || (globalConfig.width == "480" && globalConfig.height == "800")) {

	globalConfig.status = true;

    // global path
	globalConfig.path = '800_480';

    // fonts
	globalConfig.font_fields_size = 24;
	globalConfig.font_bottoms_size = 24;

    // top
	globalConfig.top_bg_width = 800;
	globalConfig.top_bg_height = 200;

    // auth & general input style
	globalConfig.input_email_top = 130;
	globalConfig.input_password_top = 230;
	globalConfig.input_height = 70;
	globalConfig.input_right = 170;
	globalConfig.input_width = 380;
    
    // inputs' icons
    globalConfig.input_icon_top = 10;
    globalConfig.input_icon_width = 50;
    globalConfig.input_icon_height = 50;
    globalConfig.input_icon_left = 20;

    // buttons
    globalConfig.button_width = 150;

    // password score
    globalConfig.password_score_width = '80%';
    globalConfig.password_score_bottom = 113;
    globalConfig.password_score_left = '10%';
    globalConfig.password_score_right = '10%';

    // bottom
    globalConfig.bottom_bg_width = 800;
    globalConfig.bottom_bg_height = 80;
    globalConfig.copyright_font_size = 20;

	// info
	globalConfig.info_close_width = 40;
	globalConfig.info_close_height = 40;
	globalConfig.info_close_top = 30;
	globalConfig.info_close_right = 30;
	
    /* user */

    // top user
    globalConfig.top_user_bg_width = 800;
    globalConfig.top_user_bg_height = 200;

	// icon home
    globalConfig.icon_home_width = 40;
    globalConfig.icon_home_height = 40;
    globalConfig.icon_home_top = 20;
    globalConfig.icon_home_right = 240;

	// icon history
    globalConfig.icon_history_width = 40;
    globalConfig.icon_history_height = 40;
    globalConfig.icon_history_top = 20;
    globalConfig.icon_history_right = 170;
    
	// icon reload
    globalConfig.icon_reload_width = 40;
    globalConfig.icon_reload_height = 40;
    globalConfig.icon_reload_top = 20;
    globalConfig.icon_reload_right = 100;

	// icon exit
    globalConfig.icon_exit_width = 40;
    globalConfig.icon_exit_height = 40;
    globalConfig.icon_exit_top = 20;
    globalConfig.icon_exit_right = 30;

	// history scroll
	globalConfig.history_scroll_view_height = 200;

    // buttom menu
    globalConfig.btnWidth = 50;
    globalConfig.btnHeight = 50;

	// buttom views
	globalConfig.btn_view_height = 50;
    globalConfig.btn_view_bottom = 13;
}

/* functions list */

function trim(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function passwordUp(str) {

    var char_count = [];

    for (var key in str) {
        if (!in_array(str[key], char_count)) {
            char_count.push(str[key]);
        }
        else {

            if (str[key] == 'a') {
                char_count.push('#');
            }
            else if (str[key] == 'b') {
                char_count.push('@');
            }
            else if (str[key] == 'c') {
                char_count.push('*');
            }
            else if (str[key] == 'd') {
                char_count.push('&');
            }
            else if (str[key] == 'e') {
                char_count.push('!');
            }
            else if (str[key] == '0') {
                char_count.push('f');
            }
            else if (str[key] == '1') {
                char_count.push('g');
            }
            else if (str[key] == '2') {
                char_count.push('h');
            }
            else if (str[key] == '3') {
                char_count.push('m');
            }
            else if (str[key] == '4') {
                char_count.push('n');
            }
            else if (str[key] == '5') {
                char_count.push('g');
            }
            else if (str[key] == '6') {
                char_count.push('x');
            }
            else if (str[key] == '7') {
                char_count.push('u');
            }
            else if (str[key] == '8') {
                char_count.push('w');
            }
            else if (str[key] == '9') {
                char_count.push('z');
            }
        }
    }

    return char_count.join('');
}

function in_array(needle, haystack, strict) {

    var found = false, key, strict = !!strict;

    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found = true;
            break;
        }
    }

    return found;
}

function info(win) {
	
	if (!globalConfig.info) {

		globalConfig.info = true;

	    privacyFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "PRIVACY");
	    
	    var blob = privacyFile.read();
	    var privacyReadText = blob.text;
	    
	    var privacyScrollView = Ti.UI.createScrollView({
	      contentWidth: 'auto',
	      contentHeight: 'auto',
	      showVerticalScrollIndicator: true,
	      showHorizontalScrollIndicator: false,
	      height: '95%',
	      width: '95%'
	    });
	    
	    var privacyTextArea = Ti.UI.createTextArea({
	      width : '100%',
	      height: 'auto',
	      top: 10,
	      left: 10,
	      right: 10,
	      bottom: 10,
	      editable: false,
	      backgroundColor: '#000000',
	      font : {
	            fontFamily: 'Arial',
	            fontWeight: 'bold',  
	            fontSize: 20
	       },
	      color : '#888',
	      textAlign : 'left'
	    });
	    
	    privacyTextArea.setValue(privacyReadText);
	    privacyScrollView.add(privacyTextArea);
	    win.add(privacyScrollView);
	
	    var privacyClose = Ti.UI.createView({
	        right: globalConfig.info_close_right,
	        top: globalConfig.info_close_top,
	        width: globalConfig.info_close_width,
	        height: globalConfig.info_close_height,
	        backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_exit.png',
	        backgroundRepeat: false,
	    });
	    
	    win.add(privacyClose);
	
	    privacyClose.addEventListener('click', function(e) {
	        privacyScrollView.hide();
	        privacyClose.hide();
	        globalConfig.info = false;
	    });
	
	    privacyFile = null;
	    blob = null;  
	}
}

function validateUrl(str) {
	var re = /^((https?|ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
	return re.test(str);
}

function validateEmail(str) { 
	var re = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    return re.test(str);
}

function validateMoney(str) {
	var re = /^[a-z0-9]+$/i
	return re.test(str);
}

function authTest(authKey) {
	
	if (!authKey) {
		authKey = '';
	}

    /* DataBase Connect */
   
   var db = Ti.Database.open('base');
    //var db = Ti.Database.install('base.sqlite', 'logs');

    var lastHash = '';
    var theData = db.execute('SELECT hash FROM logs LIMIT 1');

    if (theData.isValidRow()) {  
        lastHash = theData.fieldByName('hash');
    }
    
    theData.close();
    db.close();
    
    if (lastHash) {
        if (lastHash != authKey) {
	 		return false;
        }
    }    

    return true;
}

function deleteRows(hash, res) {

    hash = trim(hash);

    if (hash && res) {

    	/* DataBase Connect */
    	var db = Ti.Database.open('base');
    	//var db = Ti.Database.install('base.sqlite', 'onepass');

        var theData = db.execute('DELETE FROM onepass WHERE hash = ? AND res = ?', hash, res);

        theData;
        
        db.close();
        
        return true;
    }
    else {
        return false;
    }
}

function insertRows(hash, res) {

    res = trim(res);

    if (hash && res) {

    	/* DataBase Connect */
    	var db = Ti.Database.open('base');
    	//var db = Ti.Database.install('base.sqlite', 'onepass');

        var theDataDelete = db.execute('DELETE FROM onepass WHERE hash = ? AND res = ?', hash, res);
        theDataDelete;
    	
        var theDataInsert = db.execute('INSERT INTO onepass (hash, res) VALUES(?, ?)', hash, res);
        theDataInsert;
        
        db.close();
        
        return true;
    }
    else {
        return false;
    }
}

function substrPassword(str) {
    return passwordUp(str.substring(0, 12));
}

function substrMinus(str) {
    return str.substring(0, str.length - 1);
}


function substrCount(haystack, needle, offset, length) {
	
	var pos = 0, cnt = 0;

	if (isNaN(offset)) offset = 0;
	
	if (isNaN(length)) length = 0;
	
	offset--;

	while ((offset = haystack.indexOf(needle, offset + 1)) != -1) {
		if (length > 0 && (offset + needle.length) > length) {
			return false;
		}
		else {
			cnt++;
		}
	}

	return cnt;
}

function getDomain(str) {

    str = str.replace('http://','');
    str = str.replace('https://','');
    
    if (str.indexOf('wwww.') === false) {
    	str = str.replace('www.','');
    }
  
	var ch = str.indexOf(':');
	
	if (ch > 0) {
		str = str.substr(0, ch);
	}
    else {

		ch = str.indexOf('/');
		
		if (ch > 0) {
			str = str.substr(0, ch);
		}
        else {
        	str = str.substr(0, str.length);
        }
    }
  
    return str;
}

function history_res(cat) {

	/* DataBase Connect */
	var db = Ti.Database.open('base');
	//var db = Ti.Database.install('base.sqlite', 'onepass');
	
    var theData = db.execute('SELECT res FROM onepass WHERE hash = ?', Ti.Utils.sha1(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1(cat))));

    while (theData.isValidRow()) {
    	if (trim(theData.field(0)) != '') {
			historyScrollView.add(history_field(theData.fieldByName('res'), cat));
		}
		
		theData.next();
	};
      
    theData.close();
    db.close();
    
    historyScrollView.setVisible(true);

    return historyScrollView;
}

function history_field(title, cat) {

    var row = Ti.UI.createView({
		backgroundColor: '#111111',
	    height: 40,
	    top: 2,
	    bottom: 2,
	    left: 20,
	    right: 20,
	    width: globalConfig.width - 40,
	    height: 50
    });
  
	var inputTextField = Ti.UI.createLabel({
		text: title,
		left: 20,
		font: {
			fontSize: globalConfig.font_fields_size,
			fontWeight: 'bold'
		}
	});
  
  	row.add(inputTextField);
  
  	row.addEventListener('click', function (e) {
		alert(lang.copied);
	    Ti.UI.Clipboard.setText(substrPassword(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1(title) + Ti.Utils.sha1(cat))));
    });
    
    return row;
}


function synch(global_sha_email_password) {

    // prefixes of the categories
    where_www = Ti.Utils.sha1(Ti.Utils.sha1(global_sha_email_password + Ti.Utils.sha1('web')));
    where_email = Ti.Utils.sha1(Ti.Utils.sha1(global_sha_email_password + Ti.Utils.sha1('mail')));
    where_account = Ti.Utils.sha1(Ti.Utils.sha1(global_sha_email_password + Ti.Utils.sha1('account')));
    where_other = Ti.Utils.sha1(Ti.Utils.sha1(global_sha_email_password + Ti.Utils.sha1('other')));

    // count of synch
    var synchCount = 0;
    var errorHave = false;

    /* DataBase Connect */
    var db = Ti.Database.open('base');
    //var db = Ti.Database.install('base.sqlite', 'onepass');

    /* web synch */

    var theData = db.execute('SELECT * FROM onepass WHERE hash = ?', where_www);
    var cont_www = '';

    while (theData.isValidRow()) {
        cont_www = cont_www + theData.fieldByName('res') + '+';
        theData.next();
    }
    
    theData.close();

    var www_synch = Ti.Network.createHTTPClient({
    	onload : function(e) {
		    if (www_synch.status == 300) {
			    synchCound = synchCound + 1;
			}
		},
 		onerror : function(e) {
 			if (errorHave == false) {
 				errorHave = true;
     			alert(lang.cloudError);
     		}
 		},
 		timeout : 5000
 	});

    www_synch.open("POST", globalConfig.api + "?hash=" + where_www);

	if (cont_www != '') {
		
	    var params = {
	        data: Ti.Utils.base64encode(substrMinus(cont_www)).toString()
	    };

	    www_synch.send(params);
	}
	else {
		www_synch.send();
	}    

    www_synch.onload = function() {
        
        var doc = Ti.XML.parseString(this.responseText);
        var type = doc.getElementsByTagName("status").item(0).getAttribute("type");

        if (type != "error" && type != "empty") {
        
            var resources = Ti.Utils.base64decode(type).toString();

            if (substrCount(resources, '+') >= 1) {

                resources = resources.split('+');
                
                for (id in resources) {
                    deleteRows(where_www, resources[id]);
                    insertRows(where_www, resources[id]);
                }
            }
            else {
                deleteRows(where_www, resources);
                insertRows(where_www, resources);
            }
        }
    }

    /* mail synch */

    var theData = db.execute('SELECT * FROM onepass WHERE hash = ?', where_email);
    var cont_email = '';

    while (theData.isValidRow()) {  
        cont_email = cont_email + theData.fieldByName('res') + '+';
        theData.next();
    };

    theData.close();

    var email_synch = Ti.Network.createHTTPClient({
    	onload : function(e) {
		    if (email_synch.status == 300) {
			    synchCound = synchCound + 1;
			}
		},
 		onerror : function(e) {
 			if (errorHave == false) {
 				errorHave = true;
     			alert(lang.cloudError);
     		}
 		},
 		timeout : 5000
 	});

    email_synch.open("POST", globalConfig.api + "?hash=" + where_email);

	if (cont_email != '') {
		
        var params = {
            data: Ti.Utils.base64encode(substrMinus(cont_email)).toString()
        };

        email_synch.send(params);
	}
	else {
		email_synch.send();
	}
	
    email_synch.onload = function() {
        
        var doc = Ti.XML.parseString(this.responseText);
        var type = doc.getElementsByTagName("status").item(0).getAttribute("type");
   
        if (type != "error" && type != "empty") {
        
            var resources = Ti.Utils.base64decode(type).toString();

            if (substrCount(resources, '+') >= 1) {

                resources = resources.split('+');
                
                for (id in resources) {
                    deleteRows(where_email, resources[id]);
                    insertRows(where_email, resources[id]);
                }
            }
            else {
                deleteRows(where_email, resources);
                insertRows(where_email, resources);
            }
        }
    }

    /* account synch */

    var theData = db.execute('SELECT * FROM onepass WHERE hash = ?', where_account);
    var cont_account = '';

    while (theData.isValidRow()) {  
        cont_account = cont_account + theData.fieldByName('res') + '+';
        theData.next();
    };

    theData.close();

    var account_synch = Ti.Network.createHTTPClient({
    	onload : function(e) {
		    if (account_synch.status == 300) {
			    synchCound = synchCound + 1;
			}
		},
 		onerror : function(e) {
 			if (errorHave == false) {
 				errorHave = true;
     			alert(lang.cloudError);
     		}
 		},
 		timeout : 5000
 	});

    account_synch.open("POST", globalConfig.api + "?hash=" + where_account);

	if (cont_account != '') {
    
    	var params = {
        	data: Ti.Utils.base64encode(substrMinus(cont_account)).toString()
    	};

    	account_synch.send(params);
	}
	else {
		account_synch.send();
	}
	
    account_synch.onload = function() {
        
        var doc = Ti.XML.parseString(this.responseText);
        var type = doc.getElementsByTagName("status").item(0).getAttribute("type");
        
        if (type != "error" && type != "empty") {
        
            var resources = Ti.Utils.base64decode(type).toString();

            if (substrCount(resources, '+') >= 1) {

                resources = resources.split('+');
                
                for (id in resources) {
                    deleteRows(where_account, resources[id]);
                    insertRows(where_account, resources[id]);
                }
            }
            else {
                deleteRows(where_account, resources);
                insertRows(where_account, resources);
            }
        }
    }

    /* other synch */

    var theData = db.execute('SELECT * FROM onepass WHERE hash = ?', where_other);
    var cont_other = '';

    while (theData.isValidRow()) {  
        cont_other = cont_other + theData.fieldByName('res') + '+';
        theData.next();
    };

    theData.close();

    var other_synch = Ti.Network.createHTTPClient({
    	onload : function(e) {
		    if (other_synch.status == 300) {
			    synchCound = synchCound + 1;
			}
		},
 		onerror : function(e) {
 			if (errorHave == false) {
 				errorHave = true;
     			alert(lang.cloudError);
     		}
 		},
 		timeout : 5000
 	});

    other_synch.open("POST", globalConfig.api + "?hash=" + where_other);

	if (cont_other != '') {
    
    	var params = {
        	data: Ti.Utils.base64encode(substrMinus(cont_other)).toString()
    	};

    	other_synch.send(params);
	}
	else {
		other_synch.send();
	}
	
    other_synch.onload = function() {
        
        var doc = Ti.XML.parseString(this.responseText);
        var type = doc.getElementsByTagName("status").item(0).getAttribute("type");
        
        if (type != "error" && type != "empty") {
        
            var resources = Ti.Utils.base64decode(type).toString();

            if (substrCount(resources, '+') >= 1) {

                resources = resources.split('+');
                
                for (id in resources) {
                    deleteRows(where_other, resources[id]);
                    insertRows(where_other, resources[id]);
                }
            }
            else {
                deleteRows(where_other, resources);
                insertRows(where_other, resources);
            }
        }
    }
    
    db.close();
    
    return true;
}

function historyMenuCreateRow(title, cat) {
	
	/* DataBase Connect */
	var db = Ti.Database.open('base');
	//var db = Ti.Database.install('base.sqlite', 'onepass');
	
    var theData = db.execute('SELECT COUNT(*) FROM onepass WHERE hash = ?', Ti.Utils.sha1(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1(cat))));
	var count = 0;
    
    if (theData.isValidRow()) {
        count = theData.field(0);
    }

    theData;        
    db.close();

    var row = Ti.UI.createView({
	    height: 40,
	    top: 2,
	    bottom: 2,
	    left: 20,
	    right: 20,
	    width: globalConfig.width - 40,
	    height: 50
    });
  
	var inputTextField = Ti.UI.createLabel({
		text: title + ' / ' + count,
		left: 20,
		color: '#fff',
		font: {
			fontSize: globalConfig.font_fields_size,
			fontWeight: 'bold'
		}
	});

	row.add(inputTextField);

	if (count > 0) {
	  	
	  	row.setBackgroundColor('#111111');
	  	
	  	row.addEventListener('click', function (e) {		  		
	  		historyMenuScrollView.setVisible(false);
			user_window.add(history_res(cat));
	    });
   	}
   	else {
   		row.setBackgroundColor('#222222');
   	}

    return row;
}

if (globalConfig.status == true) {
  
    var win = Titanium.UI.createWindow({
        exitOnClose: true,
        fullscreen: false,
        navBarHidden: true,
        orientationModes: [
            Titanium.UI.LANDSCAPE_LEFT,
            Titanium.UI.LANDSCAPE_RIGHT
        ]
    });
    
    win.open();

    var win_bg = Ti.UI.createView({
        backgroundImage: 'ui/' + globalConfig.path + '/bg.png',
        backgroundRepeat: true,
    });
    
    win.add(win_bg);

    //top
    var top_ui = Ti.UI.createImageView({
        image: 'ui/' + globalConfig.path + '/top_and_logo.png',
        width: globalConfig.top_bg_width,
        height: globalConfig.top_bg_height,
        top: 0,
        left: 0
    });
    
    win.add(top_ui);
	    
	//info icon
	var info_icon = Ti.UI.createImageView({
	    image: 'ui/' + globalConfig.path + '/icons/icon_info.png',
	    width: 40,
	    height: 40,
	    top: 20,
	    right: 90
	});
	
	win.add(info_icon);

    info_icon.addEventListener('click', function(e) {
        info(win);
    });

	//exit icon
	var exit_icon = Ti.UI.createImageView({
	    image: 'ui/' + globalConfig.path + '/icons/icon_exit.png',
	    width: 40,
	    height: 40,
	    top: 20,
	    right: 30
	});
	
	win.add(exit_icon);

    exit_icon.addEventListener('click', function(e) {

	    var dialogExit = Ti.UI.createAlertDialog({
	        cancel: 0,
	        buttonNames: [lang.cancel, lang.ok],
	        message: lang.exitAttention,
	        title: lang.attention
	    });

	    dialogExit.addEventListener('click', function(e) {
	        if (e.index !== e.source.cancel) {
	        	win.close();
	        }
	    });

		dialogExit.show();
    });

    var login_email_view = Ti.UI.createView({
        top: globalConfig.input_email_top,
        left: '10%',
        right: '10%',
        width: '80%',
        height: globalConfig.input_height,
        borderColor: '#171717',
        borderWidth: 2,
        backgroundColor: '#282828'
    });
    
    var login_email_icon = Ti.UI.createView({
        top: 10,
        width: 50,
        height: 50,
        left: 20,
        backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_mail.png',
        backgroundRepeat: false,
        opacity: 0.5,
    });
    
    login_email_view.add(login_email_icon);

    var login_email_hidden = Ti.UI.createTextField({
        top: 2,
        right: globalConfig.input_right,
        width: globalConfig.input_width,
        height: globalConfig.input_height - 4,
        zIndex: 10,
        editable: false
    });
    
    login_email_view.add(login_email_hidden);
    
    var login_email = Ti.UI.createTextField({
        top: 2,
        right: globalConfig.input_right,
        width: globalConfig.input_width,
        height: globalConfig.input_height - 4,
        color: '#595959',
        backgroundColor: '#282828',
        backgroundFocusedColor: '#222222',
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        value: lang.email,
        hintText: lang.email,
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        font: {
            fontFamily: 'Arial',
            fontSize: globalConfig.font_fields_size
        },
        zIndex: 100
    });
    
    login_email_view.add(login_email);
        
    login_email.addEventListener('focus', function(e) {
        
        if (trim(login_email.value) == lang.email) {
            login_email.value = '';
        }

        if (login_email_icon.opacity < 1) {
            login_email_icon.setOpacity('1');
            login_email_view.setBackgroundColor('#222222');
        }
    });
    
    login_email.addEventListener('blur', function(e) {
        
        if (trim(login_email.value) == '') {
            login_email.value = lang.email;
        }
    
        if (login_email_icon.opacity == 1) {
            login_email_icon.setOpacity('0.5');
            login_email_view.setBackgroundColor('#282828');
        }
    });
    
    win.add(login_email_view);
    
    var login_password_view = Ti.UI.createView({
        top: globalConfig.input_password_top,
        left: '10%',
        right: '10%',
        width: '80%',
        height: globalConfig.input_height,
        borderColor: '#171717',
        borderWidth: 2,
        backgroundColor: '#282828'
    });
    
    var login_password_icon = Ti.UI.createView({
        top: 10,
        width: 50,
        height: 50,
        left: 20,
        backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_password.png',
        backgroundRepeat: false,
        opacity: 0.5,
    });
    
    login_password_view.add(login_password_icon);
    
    var login_password = Ti.UI.createTextField({
        top: 2,
        right: globalConfig.input_right,
        width: globalConfig.input_width,
        height: globalConfig.input_height - 4,
        color: '#595959',
        backgroundColor: '#282828',
        backgroundFocusedColor: '#222222',
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        value: lang.password,
        hintText: lang.password,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        font: {
            fontFamily: 'Arial',
            fontSize: globalConfig.font_fields_size
        }
    });
    
    login_password_view.add(login_password);
    
    var button = Titanium.UI.createButton({
        title: lang.enter,
        top: 2,
        right: 2,
        width: globalConfig.button_width,
        height: globalConfig.input_height - 4,
        backgroundImage: 'ui/' + globalConfig.path + '/button_nactive.png',
        backgroundFocusedImage: 'ui/' + globalConfig.path + '/button_nunactive.png',
        font: {
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: globalConfig.font_bottoms_size
        }
    });
    
    login_password_view.add(button);
    
    var password_score = Ti.UI.createView({
        bottom: globalConfig.password_score_bottom,
        width: globalConfig.password_score_width,
        height: 2,
        left: globalConfig.password_score_left,
        right: globalConfig.password_score_right,
        backgroundColor: '#333333',
        opacity: 0.5,
    });
    
    win.add(password_score);
    
	win.addEventListener('click', function(e){
	    login_email_hidden.focus();
    });

    button.addEventListener('click', function(e) {

        if (trim(login_email.value) == lang.email) {
            alert(lang.emptyEmail);
        }
        else if (!validateEmail(trim(login_email.value))) {
            alert(lang.validEmail);
        }
        else if (!trim(login_password.value) || login_password.value == lang.password) {
            alert(lang.enterPassword);
        }
        else {
        	
    		globalConfig.global_sha_email_password = Ti.Utils.sha1(Ti.Utils.sha1(trim(login_email.value.toLowerCase())) + Ti.Utils.sha1(trim(login_password.value)));
    		globalConfig.authKey = Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1(Ti.Platform.getId()));

			if (!authTest(globalConfig.authKey)) {

			    var dialogAuthKey = Ti.UI.createAlertDialog({
			        cancel: 0,
			        buttonNames: [lang.cancel, lang.ok],
			        message: lang.authAttention,
			        title: lang.attention
			    });
			  
			    dialogAuthKey.addEventListener('click', function(e) {
			        if (e.index === e.source.cancel) {

						// reset fields' values
						login_email.value = lang.email;
						login_password.value = lang.password
			        }
			        else {

	        	    	/* DataBase Connect */
				    	var db = Ti.Database.open('base');
				    	//var db = Ti.Database.install('base.sqlite', 'logs');
				    	
				    	var theData = db.execute('DELETE FROM logs');
				    	theData;
				    	
				        var theData = db.execute('INSERT INTO logs (hash) VALUES(?)', globalConfig.authKey);
				        theData;        
				        db.close();
				        
				        Ti.include('user.js');
			        }
			    });
	  
	    		dialogAuthKey.show();
			}
			else {
		
    	    	/* DataBase Connect */
    	    	var db = Ti.Database.open('base');
		    	//var db = Ti.Database.install('base.sqlite', 'logs');
		    	
		    	var theData = db.execute('DELETE FROM logs');
		    	theData;
		    	
		        var theData = db.execute('INSERT INTO logs (hash) VALUES(?)', globalConfig.authKey);
		        theData;
		        db.close();
				
				Ti.include('user.js');
			}
		}
    });

    login_password.addEventListener('change', function(e) {

        var strPassword;
        var charPassword;
        var minPasswordLength = 8;
        var baseScore = 0, score = 0;
        
        var num = {};
        num.Excess = 0;
        num.Upper = 0;
        num.Numbers = 0;
        num.Symbols = 0;
    
        var bonus = {};
        bonus.Excess = 3;
        bonus.Upper = 4;
        bonus.Numbers = 1;
        bonus.Symbols = 5;
        bonus.Combo = 0; 
        bonus.FlatLower = 0;
        bonus.FlatNumber = 0;
    
        strPassword = trim(login_password.value);
        charPassword = strPassword.split('');
        
        if ((charPassword.length >= minPasswordLength) && (strPassword != lang.password)) {
            
            baseScore = 50; 
    
            for (i = 0; i < charPassword.length; i++) {
                
                if (charPassword[i].match(/[A-Z]/g)) {
                    num.Upper++;
                }
    
                if (charPassword[i].match(/[0-9]/g)) {
                    num.Numbers++;
                }
    
                if (charPassword[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) {
                    num.Symbols++;
                } 
            }
        
            num.Excess = charPassword.length - minPasswordLength;
        
            if (num.Upper && num.Numbers && num.Symbols) {
                bonus.Combo = 25; 
            }
            else if ((num.Upper && num.Numbers) || (num.Upper && num.Symbols) || (num.Numbers && num.Symbols)) {
                bonus.Combo = 15; 
            }
        
            if (strPassword.match(/^[\sa-z]+$/)) { 
                bonus.FlatLower = -15;
            }
        
            if (strPassword.match(/^[\s0-9]+$/)) { 
                bonus.FlatNumber = -35;
            }
    
            score = baseScore + (num.Excess * bonus.Excess) + (num.Upper * bonus.Upper) + (num.Numbers * bonus.Numbers) + (num.Symbols * bonus.Symbols) + bonus.Combo + bonus.FlatLower + bonus.FlatNumber; 
        }
        
        if (score == 0) {
            password_score.setBackgroundColor('#333333');
        }
        else if (score < 65) {
            password_score.setBackgroundColor('#ff4040');
        }
        else if (score >= 65 && score < 90) {
            password_score.setBackgroundColor('#ff6200');
        }
        else if (score >= 90 && score < 100) {
            password_score.setBackgroundColor('#cff93e');
        }
        else if (score >= 100) {
            password_score.setBackgroundColor('#92f23c');
        }
    });
    
    login_password.addEventListener('focus', function(e) {      
        
        if (trim(login_password.value) == lang.password) {
            login_password.setPasswordMask(true);
            login_password.value = '';
        }
    
        if (login_password_icon.opacity < 1) {
            login_password_icon.setOpacity('1');
            login_password_view.setBackgroundColor('#222222');
        }
    });
    
    login_password.addEventListener('blur', function(e) {
        
        if (trim(login_password.value) == '') {
            login_password.setPasswordMask(false);
            login_password.value = lang.password;
        }
        
        if (login_password_icon.opacity == 1) {
            login_password_icon.setOpacity('0.5');
            login_password_view.setBackgroundColor('#282828');
        }
    });
    
    win.add(login_password_view);
    
    var bottom_cont = Ti.UI.createView({
        backgroundImage: 'ui/' + globalConfig.path + '/bottom.png',
        backgroundRepeat: false,
        width: globalConfig.bottom_bg_width,
        height: globalConfig.bottom_bg_height,
        left: 0,
        bottom: 0
    });
    
    var copyrights = Ti.UI.createLabel({
        color: '#eee',
        font: {
            fontFamily: 'Arial',
            fontSize: globalConfig.copyright_font_size
            },
        text: lang.copyright,
        height: 'auto',
        width: 'auto'
    });
    
    copyrights.addEventListener('click', function(e) {
        Ti.Platform.openURL('http://0nepass.com');
    });

    bottom_cont.add(copyrights);
    win.add(bottom_cont);
    win.add(copyrights);
}
else {

    var win = Titanium.UI.createWindow({ 
        backgroundColor: '#000000',
        exitOnClose: true,
        navBarHidden: true,
    });
    
    win.open();
    
    var error_support_label = Ti.UI.createLabel({
        text: lang.dontSupport,
        color: '#ffcc00',
        font: {
            fontSize: '40%',
            fontWeight: 'bold'
        },
        textAlign: 'center'
    });

    win.add(error_support_label);
}