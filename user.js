var user_window = Titanium.UI.createWindow({
    fullscreen: false,
    exitOnClose: false,
    navBarHidden: true,
    modal: true,
    orientationModes: [
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT
    ]
});

user_window.open();

if (globalConfig.osname == 'android') {
	
	user_window.addEventListener('android:back', function(e) {

		if (historyMenuScrollView.getVisible() == false && historyScrollView.getVisible() == true) {
	
			if (historyScrollView.getVisible() == true) {
				historyScrollView.setVisible(false);
			}
	
			if (historyScrollView.getVisible() == false) {
				if (historyScrollView.children) {
					while (historyScrollView.children.length != 0) {
						var len = historyScrollView.children.length;
				    	historyScrollView.remove(historyScrollView.children[len - 1]);
					}
				}
			}
	
			if (globalConfig.cat == 'web') {
				www_login_view.setVisible(true);
				www_password_view.setVisible(true);
			}
			else {
				www_login_view.setVisible(false);
				www_password_view.setVisible(false);
			}
	
			if (globalConfig.cat == 'mail') {
				email_login_view.setVisible(true);
				email_password_view.setVisible(true);
			}
			else {
				email_login_view.setVisible(false);
				email_password_view.setVisible(false);
			}
			
			if (globalConfig.cat == 'account') {
				account_login_view.setVisible(true);
				account_password_view.setVisible(true);
			}
			else {
				account_login_view.setVisible(false);
				account_password_view.setVisible(false);
			}
	
			if (globalConfig.cat == 'other') {
				other_login_view.setVisible(true);
				other_password_view.setVisible(true);
			}
			else {
				other_login_view.setVisible(false);
				other_password_view.setVisible(false);
			}
			
			view_www.setVisible(true);
			view_email.setVisible(true);
			view_account.setVisible(true);
			view_other.setVisible(true);
		
			history_view_www.setVisible(false);
			history_view_email.setVisible(false);
			history_view_account.setVisible(false);
			history_view_other.setVisible(false);	
		}
		else if (historyMenuScrollView.getVisible() == false) {
			if (historyMenuScrollView.children) {
				while (historyMenuScrollView.children.length != 0) {
					var len = historyMenuScrollView.children.length;
			    	historyMenuScrollView.remove(historyMenuScrollView.children[len - 1]);
				}
			}	
		}
	});
}

var user_window_bg = Ti.UI.createView({
    backgroundImage: 'ui/' + globalConfig.path + '/bg.png',
    backgroundRepeat: true,
});

user_window.add(user_window_bg);

//top_user
var top_user_window_ui = Ti.UI.createImageView({
    image: 'ui/' + globalConfig.path + '/top_and_logo.png',
    width: globalConfig.top_user_bg_width,
    height: globalConfig.top_user_bg_height,
    top: 0,
    left: 0
});

user_window.add(top_user_window_ui);

//home icon
var home_icon = Ti.UI.createImageView({
    image: 'ui/' + globalConfig.path + '/icons/icon_home.png',
    width: globalConfig.icon_home_width,
    height: globalConfig.icon_home_height,
    top: globalConfig.icon_home_top,
    right: globalConfig.icon_home_right,
    visible: false
});

user_window.add(home_icon);

home_icon.addEventListener('click', function(e) {

	home_icon.setVisible(false);

	if (historyMenuScrollView) {
		if (historyMenuScrollView.getVisible() == true) {
		
			historyMenuScrollView.setVisible(false);
			
			user_window.remove(historyMenuScrollView);
			
			if (historyMenuScrollView.children) {
				while (historyMenuScrollView.children.length != 0) {
					var len = historyMenuScrollView.children.length;
			    	historyMenuScrollView.remove(historyMenuScrollView.children[len - 1]);
				}
			}
		}
	}
			
	if (historyScrollView) {
		if (historyScrollView.getVisible() == true) {
			historyScrollView.setVisible(false);
		
			user_window.remove(historyScrollView);
					
			if (historyScrollView.children) {
				while (historyScrollView.children.length != 0) {
					var len = historyScrollView.children.length;
			    	historyScrollView.remove(historyScrollView.children[len - 1]);
				}
			}
		}
	}

	history_view_www.setVisible(false);
	history_view_email.setVisible(false);
	history_view_account.setVisible(false);
	history_view_other.setVisible(false);

	if (globalConfig.cat == 'web') {
		www_login_view.setVisible(true);
		www_password_view.setVisible(true);
	}
	else {
		www_login_view.setVisible(false);
		www_password_view.setVisible(false);
	}

	if (globalConfig.cat == 'mail') {
		email_login_view.setVisible(true);
		email_password_view.setVisible(true);
	}
	else {
		email_login_view.setVisible(false);
		email_password_view.setVisible(false);
	}
	
	if (globalConfig.cat == 'account') {
		account_login_view.setVisible(true);
		account_password_view.setVisible(true);
	}
	else {
		account_login_view.setVisible(false);
		account_password_view.setVisible(false);
	}

	if (globalConfig.cat == 'other') {
		other_login_view.setVisible(true);
		other_password_view.setVisible(true);
	}
	else {
		other_login_view.setVisible(false);
		other_password_view.setVisible(false);
	}
	
	view_www.setVisible(true);
	view_email.setVisible(true);
	view_account.setVisible(true);
	view_other.setVisible(true);
});

//history icon
var history_icon = Ti.UI.createImageView({
    image: 'ui/' + globalConfig.path + '/icons/icon_history.png',
    width: globalConfig.icon_history_width,
    height: globalConfig.icon_history_height,
    top: globalConfig.icon_history_top,
    right: globalConfig.icon_history_right
});

user_window.add(history_icon);

var historyMenuScrollView = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    showVerticalScrollIndicator: true,
    showHorizontalScrollIndicator: false,
    layout: 'vertical',
    height: globalConfig.history_scroll_view_height,
    width: '100%',
    visible: false
});

var historyScrollView = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    showVerticalScrollIndicator: true,
    showHorizontalScrollIndicator: false,
    layout: 'vertical',
    height: globalConfig.history_scroll_view_height,
    width: '100%',
    visible: false
});

history_icon.addEventListener('click', function(e) {

	www_login_view.setVisible(false);
	www_password_view.setVisible(false);
	email_login_view.setVisible(false);
	email_password_view.setVisible(false);
	account_login_view.setVisible(false);
	account_password_view.setVisible(false);	
	other_login_view.setVisible(false);
	other_password_view.setVisible(false);

	view_www.setVisible(false);
	view_email.setVisible(false);
	view_account.setVisible(false);
	view_other.setVisible(false);

	home_icon.setVisible(true);

	history_view_www.setVisible(true);
	history_view_email.setVisible(true);
	history_view_account.setVisible(true);
	history_view_other.setVisible(true);

	if (historyScrollView) {
		historyScrollView.setVisible(false);
		user_window.remove(historyScrollView);
	}
	
	if (historyMenuScrollView) {
		historyMenuScrollView.setVisible(false);
		user_window.remove(historyMenuScrollView);
	}

	if (historyScrollView.children) {
		while (historyScrollView.children.length != 0) {
			var len = historyScrollView.children.length;
	    	historyScrollView.remove(historyScrollView.children[len - 1]);
		}
	}
	
	if (historyMenuScrollView.children) {
		while (historyMenuScrollView.children.length != 0) {
			var len = historyMenuScrollView.children.length;
	    	historyMenuScrollView.remove(historyMenuScrollView.children[len - 1]);
		}
	}
		
	var generalCategories = new Array(lang.websites, lang.emails, lang.accounts, lang.others);
	var generalCategoriesAlt = new Array('web', 'mail', 'account', 'other');

	for (i = 0; i < generalCategories.length; i++) {
		var rowMain = historyMenuCreateRow(generalCategories[i], generalCategoriesAlt[i]);
		
		historyMenuScrollView.add(rowMain);
	}	

	user_window.add(historyMenuScrollView);
	
	historyMenuScrollView.setVisible(true);
});

//reload icon
var reload_icon = Ti.UI.createImageView({
    image: 'ui/' + globalConfig.path + '/icons/icon_reload.png',
    width: globalConfig.icon_reload_width,
    height: globalConfig.icon_reload_height,
    top: globalConfig.icon_reload_top,
    right: globalConfig.icon_reload_right
});

user_window.add(reload_icon);

reload_icon.addEventListener('click', function(e) {
	synch(globalConfig.global_sha_email_password);
});

//exit icon
var exit_icon = Ti.UI.createImageView({
    image: 'ui/' + globalConfig.path + '/icons/icon_exit.png',
    width: globalConfig.icon_exit_width,
    height: globalConfig.icon_exit_height,
    top: globalConfig.icon_exit_top,
    right: globalConfig.icon_exit_right
});

user_window.add(exit_icon);

exit_icon.addEventListener('click', function(e) {
	login_email.value = lang.email;
	login_password.value = lang.password;
    user_window.close();
});

var www_login_view = Ti.UI.createView({
    top: globalConfig.input_email_top,
    left: '10%',
    right: '10%',
    width: '80%',
    height: globalConfig.input_height,
    borderColor: '#171717',
    borderWidth: 2,
    backgroundColor: '#282828',
    visible: true
});

var www_login_icon = Ti.UI.createView({
    top: globalConfig.input_icon_top,
    width: globalConfig.input_icon_width,
    height: globalConfig.input_icon_height,
    left: globalConfig.input_icon_left,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_world.png',
    backgroundRepeat: false,
    opacity: 0.5
});

www_login_view.add(www_login_icon);

var www_login_hidden = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    zIndex: 10,
    editable: false
});

www_login_view.add(www_login_hidden);

var www_login = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    color: '#595959',
    backgroundColor: '#282828',
    backgroundFocusedColor: '#222222',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    value: lang.website,
    hintText: lang.website,
    keyboardType: Ti.UI.KEYBOARD_URL,
    returnKeyType: Ti.UI.RETURNKEY_GO,
    font: {
        fontFamily: 'Arial',
        fontSize: globalConfig.font_fields_size
    },
    zIndex: 100
});

www_login_view.add(www_login);

var www_button_get = Titanium.UI.createButton({
    title: lang.get,
    top: 2,
    right: 2,
    width: globalConfig.button_width,
    height: globalConfig.input_height - 4,
    backgroundColor: '#ffcc00',
    backgroundImage: 'ui/' + globalConfig.path + '/button_nactive.png',
    backgroundFocusedImage: 'ui/' + globalConfig.path + '/button_nunactive.png',
    font: {
        fontFamily: 'Arial',  
        fontWeight: 'bold',  
        fontSize: globalConfig.font_bottoms_size
    }
});

www_login_view.add(www_button_get);

user_window.add(www_login_view);

var www_password_view = Ti.UI.createView({
    top: globalConfig.input_password_top,
    left: '10%',
    right: '10%',
    width: '80%',
    height: globalConfig.input_height,
    borderColor: '#171717',
    borderWidth: 2,
    backgroundColor: '#282828',
    visible: true
});

var www_password_icon = Ti.UI.createView({
    top: globalConfig.input_icon_top,
    width: globalConfig.input_icon_width,
    height: globalConfig.input_icon_height,
    left: globalConfig.input_icon_left,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_password.png',
    backgroundRepeat: false,
    opacity: 0.5,
});

www_password_view.add(www_password_icon);

var www_password = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    color: '#595959',
    backgroundColor: '#282828',
    backgroundFocusedColor: '#222222',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    keyboardType: Ti.UI.KEYBOARD_DEFAULT,
    returnKeyType: Ti.UI.RETURNKEY_DONE,
    font: {
        fontFamily: 'Arial',
        fontSize: globalConfig.font_fields_size
    },
    editable: false
});

www_password_view.add(www_password);

var www_button_copy = Titanium.UI.createButton({
    title: lang.copy,
    top: 2,
    right: 2,
    width: globalConfig.button_width,
    height: globalConfig.input_height - 4,
    backgroundColor: '#ffcc00',
    backgroundImage: 'ui/' + globalConfig.path + '/button_nunactive.png',
    font: {
        fontFamily: 'Arial',  
        fontWeight: 'bold',  
        fontSize: globalConfig.font_bottoms_size
    },
    touchEnabled: false
});

www_password_view.add(www_button_copy);

user_window.add(www_password_view);

www_login.addEventListener('focus', function(e) {

    if (trim(www_login.value) == lang.website) {
        www_login.value = '';
    }

    if (www_login_icon.opacity < 1) {
        www_login_icon.setOpacity('1');
        www_login_view.setBackgroundColor('#222222');
    }
});

www_login.addEventListener('blur', function(e) {

    if (trim(www_login.value) == '') {
        www_login.value = lang.website;
    }

    if (www_login_icon.opacity == 1) {
        www_login_icon.setOpacity('0.5');
        www_login_view.setBackgroundColor('#282828');
    }
});

www_password.addEventListener('focus', function(e) {        
    if (www_password_icon.opacity < 1) {
        www_password_icon.setOpacity('1');
        www_password_view.setBackgroundColor('#222222');
    }
});

www_password.addEventListener('blur', function(e) {
    if (www_password_icon.opacity == 1) {
        www_password_icon.setOpacity('0.5');
        www_password_view.setBackgroundColor('#282828');
    }
}); 

www_button_get.addEventListener('click', function(e) {
	
	if (!www_login.value || www_login.value == lang.website) {
		alert(lang.emptyWeb);
	}
	else if (validateUrl(www_login.value.toLowerCase())) {

    	var password = substrPassword(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1(getDomain(www_login.value.toLowerCase())) + Ti.Utils.sha1('web')));
    
    	www_password.setValue(password);
    	www_button_copy.setTouchEnabled(true);
    	www_button_copy.setBackgroundImage('ui/' + globalConfig.path + '/button_nactive.png');
    	www_button_copy.setBackgroundFocusedImage('ui/' + globalConfig.path + '/button_nunactive.png');
    	insertRows(Ti.Utils.sha1(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1('web'))), getDomain(www_login.value.toLowerCase()));  
	}
	else {
		alert(lang.validWeb);
	}
});

www_button_copy.addEventListener('click', function(e) {
	alert(lang.copied);
	Ti.UI.Clipboard.setText(www_password.value);
});

var email_login_view = Ti.UI.createView({
    top: globalConfig.input_email_top,
    left: '10%',
    right: '10%',
    width: '80%',
    height: globalConfig.input_height,
    borderColor: '#171717',
    borderWidth: 2,
    backgroundColor: '#282828',
    visible: false
});

var email_login_icon = Ti.UI.createView({
    top: globalConfig.input_icon_top,
    width: globalConfig.input_icon_width,
    height: globalConfig.input_icon_height,
    left: globalConfig.input_icon_left,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_mail.png',
    backgroundRepeat: false,
    opacity: 0.5
});

email_login_view.add(email_login_icon);

var email_login_hidden = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    zIndex: 10,
    editable: false
});

email_login_view.add(email_login_hidden);

var email_login = Ti.UI.createTextField({
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

email_login_view.add(email_login);

var email_button_get = Titanium.UI.createButton({
    title: lang.get,
    top: 2,
    right: 2,
    width: globalConfig.button_width,
    height: globalConfig.input_height - 4,
    backgroundColor: '#ffcc00',
    backgroundImage: 'ui/' + globalConfig.path + '/button_nactive.png',
    backgroundFocusedImage: 'ui/' + globalConfig.path + '/button_nunactive.png',
    font: {
        fontFamily: 'Arial',
        fontWeight: 'bold',  
        fontSize: globalConfig.font_bottoms_size
    }
});

email_login_view.add(email_button_get);

user_window.add(email_login_view);

var email_password_view = Ti.UI.createView({
    top: globalConfig.input_password_top,
    left: '10%',
    right: '10%',
    width: '80%',
    height: globalConfig.input_height,
    borderColor: '#171717',
    borderWidth: 2,
    backgroundColor: '#282828',
    visible: false
});

var email_password_icon = Ti.UI.createView({
    top: globalConfig.input_icon_top,
    width: globalConfig.input_icon_width,
    height: globalConfig.input_icon_height,
    left: globalConfig.input_icon_left,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_password.png',
    backgroundRepeat: false,
    opacity: 0.5,
});

email_password_view.add(email_password_icon);

var email_password = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    color: '#595959',
    backgroundColor: '#282828',
    backgroundFocusedColor: '#222222',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    keyboardType: Ti.UI.KEYBOARD_DEFAULT,
    returnKeyType: Ti.UI.RETURNKEY_DONE,
    font: {
        fontFamily: 'Arial',
        fontSize: globalConfig.font_fields_size
    },
    editable: false
});

email_password_view.add(email_password);

var email_button_copy = Titanium.UI.createButton({
    title: lang.copy,
    top: 2,
    right: 2,
    width: globalConfig.button_width,
    height: globalConfig.input_height - 4,
    backgroundColor: '#ffcc00',
    backgroundImage: 'ui/' + globalConfig.path + '/button_nunactive.png',
    font: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: globalConfig.font_bottoms_size
    },
    touchEnabled: false
});

email_password_view.add(email_button_copy);

user_window.add(email_password_view);

email_login.addEventListener('focus', function(e) {

    if (trim(email_login.value) == lang.email) {
        email_login.value = '';
    }

    if (email_login_icon.opacity < 1) {
        email_login_icon.setOpacity('1');
        email_login_view.setBackgroundColor('#222222');
    }
});

email_login.addEventListener('blur', function(e) {

    if (trim(email_login.value) == '') {
        email_login.value = lang.email;
    }

    if (email_login_icon.opacity == 1) {
        email_login_icon.setOpacity('0.5');
        email_login_view.setBackgroundColor('#282828');
    }
});

email_password.addEventListener('focus', function(e) {      
    if (email_password_icon.opacity < 1) {
        email_password_icon.setOpacity('1');
        email_password_view.setBackgroundColor('#222222');
    }
});

email_password.addEventListener('blur', function(e) {
    if (email_password_icon.opacity == 1) {
        email_password_icon.setOpacity('0.5');
        email_password_view.setBackgroundColor('#282828');
    }
}); 

email_button_get.addEventListener('click', function(e) {

	if (!email_login.value || email_login.value == lang.email) {
		alert(lang.emptyEmail);
	}
	else if (validateEmail(email_login.value.toLowerCase())) {

        var password = substrPassword(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1(email_login.value.toLowerCase()) + Ti.Utils.sha1('mail')));

        email_password.setValue(password);
        email_button_copy.setTouchEnabled(true);
        email_button_copy.setBackgroundImage('ui/' + globalConfig.path + '/button_nactive.png');
        email_button_copy.setBackgroundFocusedImage('ui/' + globalConfig.path + '/button_nunactive.png');
        insertRows(Ti.Utils.sha1(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1('mail'))), email_login.value.toLowerCase());  
	}
	else {
		alert(lang.validEmail);
	}
});

email_button_copy.addEventListener('click', function(e) {
    alert(lang.copied);
    Ti.UI.Clipboard.setText(email_password.value);
});

var account_login_view = Ti.UI.createView({
    top: globalConfig.input_email_top,
    left: '10%',
    right: '10%',
    width: '80%',
    height: globalConfig.input_height,
    borderColor: '#171717',
    borderWidth: 2,
    backgroundColor: '#282828',
    visible: false
});

var account_login_icon = Ti.UI.createView({
    top: globalConfig.input_icon_top,
    width: globalConfig.input_icon_width,
    height: globalConfig.input_icon_height,
    left: globalConfig.input_icon_left,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_coin.png',
    backgroundRepeat: false,
    opacity: 0.5,
});

account_login_view.add(account_login_icon);

var account_login_hidden = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    zIndex: 10,
    editable: false
});

account_login_view.add(account_login_hidden);

var account_login = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    color: '#595959',
    backgroundColor: '#282828',
    backgroundFocusedColor: '#222222',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    value: lang.account,
    hintText: lang.account,
    keyboardType: Ti.UI.KEYBOARD_EMAIL,
    returnKeyType: Ti.UI.RETURNKEY_DONE,
    font: {
        fontFamily: 'Arial',
        fontSize: globalConfig.font_fields_size
    },
    zIndex: 100
});

account_login_view.add(account_login);

var account_button_get = Titanium.UI.createButton({
    title: lang.get,
    top: 2,
    right: 2,
    width: globalConfig.button_width,
    height: globalConfig.input_height - 4,
    backgroundColor: '#ffcc00',
    backgroundImage: 'ui/' + globalConfig.path + '/button_nactive.png',
    backgroundFocusedImage: 'ui/' + globalConfig.path + '/button_nunactive.png',
    font: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: globalConfig.font_bottoms_size
    }
});

account_login_view.add(account_button_get);

user_window.add(account_login_view);

var account_password_view = Ti.UI.createView({
    top: globalConfig.input_password_top,
    left: '10%',
    right: '10%',
    width: '80%',
    height: globalConfig.input_height,
    borderColor: '#171717',
    borderWidth: 2,
    backgroundColor: '#282828',
    visible: false
});

var account_password_icon = Ti.UI.createView({
    top: globalConfig.input_icon_top,
    width: globalConfig.input_icon_width,
    height: globalConfig.input_icon_height,
    left: globalConfig.input_icon_left,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_password.png',
    backgroundRepeat: false,
    opacity: 0.5,
});

account_password_view.add(account_password_icon);

var account_password = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    color: '#595959',
    backgroundColor: '#282828',
    backgroundFocusedColor: '#222222',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    keyboardType: Ti.UI.KEYBOARD_DEFAULT,
    returnKeyType: Ti.UI.RETURNKEY_DONE,
    font: {
        fontFamily: 'Arial',
        fontSize: globalConfig.font_fields_size
    },
    editable: false
});

account_password_view.add(account_password);

var account_button_copy = Titanium.UI.createButton({
    title: lang.copy,
    top: 2,
    right: 2,
    width: globalConfig.button_width,
    height: globalConfig.input_height - 4,
    backgroundColor: '#ffcc00',
    backgroundImage: 'ui/' + globalConfig.path + '/button_nunactive.png',
    font: {
        fontFamily: 'Arial',  
        fontWeight: 'bold',  
        fontSize: globalConfig.font_bottoms_size
    },
    touchEnabled: false
});

account_password_view.add(account_button_copy);

user_window.add(account_password_view);

account_login.addEventListener('focus', function(e) {

    if (trim(account_login.value) == lang.account) {
        account_login.value = '';
    }

    if (account_login_icon.opacity < 1) {
        account_login_icon.setOpacity('1');
        account_login_view.setBackgroundColor('#222222');
    }
});

account_login.addEventListener('blur', function(e) {

    if (trim(account_login.value) == '') {
        account_login.value = lang.account;
    }

    if (account_login_icon.opacity == 1) {
        account_login_icon.setOpacity('0.5');
        account_login_view.setBackgroundColor('#282828');
    }
});

account_password.addEventListener('focus', function(e) {      
    if (account_password_icon.opacity < 1) {
        account_password_icon.setOpacity('1');
        account_password_view.setBackgroundColor('#222222');
    }
});

account_password.addEventListener('blur', function(e) {
    if (account_password_icon.opacity == 1) {
        account_password_icon.setOpacity('0.5');
        account_password_view.setBackgroundColor('#282828');
    }
}); 

account_button_get.addEventListener('click', function(e) {

	if (!account_login.value || account_login.value == lang.account) {
		alert(lang.emptyMoney);
	}
	else if (validateMoney(account_login.value.toLowerCase())) {

	    var password = substrPassword(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1(account_login.value) + Ti.Utils.sha1('account')));
	
	    account_password.setValue(password);
	    account_button_copy.setTouchEnabled(true);
	    account_button_copy.setBackgroundImage('ui/' + globalConfig.path + '/button_nactive.png');
	    account_button_copy.setBackgroundFocusedImage('ui/' + globalConfig.path + '/button_nunactive.png');
	    insertRows(Ti.Utils.sha1(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1('account'))), account_login.value);
	}
	else {
		alert(lang.validMoney);
	}
});

account_button_copy.addEventListener('click', function(e) {
    alert(lang.copied);
    Ti.UI.Clipboard.setText(account_password.value);
});

var other_login_view = Ti.UI.createView({
    top: globalConfig.input_email_top,
    left: '10%',
    right: '10%',
    width: '80%',
    height: globalConfig.input_height,
    borderColor: '#171717',
    borderWidth: 2,
    backgroundColor: '#282828',
    visible: false
});

var other_login_icon = Ti.UI.createView({
    top: globalConfig.input_icon_top,
    width: globalConfig.input_icon_width,
    height: globalConfig.input_icon_height,
    left: globalConfig.input_icon_left,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_pyramid.png',
    backgroundRepeat: false,
    opacity: 0.5,
});

other_login_view.add(other_login_icon);

var other_login_hidden = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    zIndex: 10,
    editable: false
});

other_login_view.add(other_login_hidden);

var other_login = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    color: '#595959',
    backgroundColor: '#282828',
    backgroundFocusedColor: '#222222',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    value: lang.other,
    hintText: lang.other,
    keyboardType: Ti.UI.KEYBOARD_EMAIL,
    returnKeyType: Ti.UI.RETURNKEY_DONE,
    font: {
        fontFamily: 'Arial',
        fontSize: globalConfig.font_fields_size
    },
    zIndex: 100
});

other_login_view.add(other_login);

var other_button_get = Titanium.UI.createButton({
    title: lang.get,
    top: 2,
    right: 2,
    width: globalConfig.button_width,
    height: globalConfig.input_height - 4,
    backgroundColor: '#ffcc00',
    backgroundImage: 'ui/' + globalConfig.path + '/button_nactive.png',
    backgroundFocusedImage: 'ui/' + globalConfig.path + '/button_nunactive.png',
    font: {
        fontFamily: 'Arial',  
        fontWeight: 'bold',  
        fontSize: globalConfig.font_bottoms_size
    }
});

other_login_view.add(other_button_get);

user_window.add(other_login_view);

var other_password_view = Ti.UI.createView({
    top: globalConfig.input_password_top,
    left: '10%',
    right: '10%',
    width: '80%',
    height: globalConfig.input_height,
    borderColor: '#171717',
    borderWidth: 2,
    backgroundColor: '#282828',
    visible: false
});

var other_password_icon = Ti.UI.createView({
    top: globalConfig.input_icon_top,
    width: globalConfig.input_icon_width,
    height: globalConfig.input_icon_height,
    left: globalConfig.input_icon_left,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_password.png',
    backgroundRepeat: false,
    opacity: 0.5,
});

other_password_view.add(other_password_icon);

var other_password = Ti.UI.createTextField({
    top: 2,
    right: globalConfig.input_right,
    width: globalConfig.input_width,
    height: globalConfig.input_height - 4,
    color: '#595959',
    backgroundColor: '#282828',
    backgroundFocusedColor: '#222222',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    keyboardType: Ti.UI.KEYBOARD_DEFAULT,
    returnKeyType: Ti.UI.RETURNKEY_DONE,
    font: {
        fontFamily: 'Arial',
        fontSize: globalConfig.font_fields_size
    },
    editable: false
});

other_password_view.add(other_password);

var other_button_copy = Titanium.UI.createButton({
    title: lang.copy,
    top: 2,
    right: 2,
    width: globalConfig.button_width,
    height: globalConfig.input_height - 4,
    backgroundColor: '#ffcc00',
    backgroundImage: 'ui/' + globalConfig.path + '/button_nunactive.png',
    font: {
        fontFamily: 'Arial',  
        fontWeight: 'bold',  
        fontSize: globalConfig.font_bottoms_size
    },
    touchEnabled: false
});

other_password_view.add(other_button_copy);

user_window.add(other_password_view);

other_login.addEventListener('focus', function(e) {

    if (trim(other_login.value) == lang.other) {
        other_login.value = '';
    }

    if (other_login_icon.opacity < 1) {
        other_login_icon.setOpacity('1');
        other_login_view.setBackgroundColor('#222222');
    }
});

other_login.addEventListener('blur', function(e) {

    if (trim(other_login.value) == '') {
        other_login.value = lang.other;
    }

    if (other_login_icon.opacity == 1) {
        other_login_icon.setOpacity('0.5');
        other_login_view.setBackgroundColor('#282828');
    }
});

other_password.addEventListener('focus', function(e) {      
    if (other_password_icon.opacity < 1) {
        other_password_icon.setOpacity('1');
        other_password_view.setBackgroundColor('#222222');
    }
});

other_password.addEventListener('blur', function(e) {
    if (other_password_icon.opacity == 1) {
        other_password_icon.setOpacity('0.5');
        other_password_view.setBackgroundColor('#282828');
    }
}); 

other_button_get.addEventListener('click', function(e) {
    
    if (!other_login.value || other_login.value == lang.other) {
        alert(lang.emptyOther);
    }
    else {

        var password = substrPassword(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1(other_login.value) + Ti.Utils.sha1('other')));

        other_password.setValue(password);
        other_button_copy.setTouchEnabled(true);
        other_button_copy.setBackgroundImage('ui/' + globalConfig.path + '/button_nactive.png');
        other_button_copy.setBackgroundFocusedImage('ui/' + globalConfig.path + '/button_unactive.png');
        insertRows(Ti.Utils.sha1(Ti.Utils.sha1(globalConfig.global_sha_email_password + Ti.Utils.sha1('other'))), other_login.value);
    }
});

other_button_copy.addEventListener('click', function(e) {
	alert(lang.copied);
    Ti.UI.Clipboard.setText(other_password.value);
});

//bottom menu
var button_www = Ti.UI.createButton({
    width: globalConfig.btnWidth,
    height: globalConfig.btnHeight,
    opacity: 1,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_world.png',
    backgroundRepeat: false,
    left: ((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2,
});

var button_email = Ti.UI.createButton({
    width: globalConfig.btnWidth,
    height: globalConfig.btnHeight,
    opacity: 0.5,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_mail.png',
    backgroundRepeat: false,
    left: ((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2
});

var button_account = Ti.UI.createButton({
    width: globalConfig.btnWidth,
    height: globalConfig.btnHeight,
    opacity: 0.5,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_coin.png',
    backgroundRepeat: false,
    left: ((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2
});

var button_other = Ti.UI.createButton({
    width: globalConfig.btnWidth,
    height: globalConfig.btnHeight,
    opacity: 0.5,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_pyramid.png',
    backgroundRepeat: false,
    left: ((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2,
});

Ti.Gesture.addEventListener('orientationchange', function(e) {  
    
    // general
    button_www.setLeft(((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2);
    button_email.setLeft(((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2);
    button_account.setLeft(((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2);
    button_other.setLeft(((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2);
    
    // history
    history_button_www.setLeft(((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2);
    history_button_email.setLeft(((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2);
    history_button_account.setLeft(((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2);
    history_button_other.setLeft(((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2);
});

var bottom_background = Ti.UI.createView({
    backgroundImage: 'ui/' + globalConfig.path + '/bottom.png',
    backgroundRepeat: false,
    width: globalConfig.bottom_bg_width,
    height: globalConfig.bottom_bg_height,
    left: 0,
    bottom: 0
});

var view_www = Ti.UI.createView({
    width: '25%',
    left: 0,
    height: globalConfig.btn_view_height,
    bottom: globalConfig.btn_view_bottom
});

var view_email = Ti.UI.createView({
    width: '25%',
    left: '25%',
    height: globalConfig.btn_view_height,
    bottom: globalConfig.btn_view_bottom
});

var view_account = Ti.UI.createView({
    width: '25%',
    left: '50%',
    height: globalConfig.btn_view_height,
    bottom: globalConfig.btn_view_bottom
});

var view_other = Ti.UI.createView({
    width: '25%',
    left: '75%',
    height: globalConfig.btn_view_height,
    bottom: globalConfig.btn_view_bottom
});

view_www.add(button_www);
view_email.add(button_email);
view_account.add(button_account);
view_other.add(button_other);

user_window.add(bottom_background);
user_window.add(view_www);
user_window.add(view_email);
user_window.add(view_account);
user_window.add(view_other);

button_www.addEventListener('click', function(e) {

    www_button_copy.setTouchEnabled(false);
    www_button_copy.setBackgroundImage('ui/' + globalConfig.path + '/button_nunactive.png');
    www_button_copy.setBackgroundFocusedImage('ui/' + globalConfig.path + '/button_nactive.png');

    button_www.setOpacity('1');
    button_email.setOpacity('0.5');
    button_account.setOpacity('0.5');
    button_other.setOpacity('0.5');

    //hide
    email_login_view.setVisible(false);
    email_password_view.setVisible(false);
    account_login_view.setVisible(false);
    account_password_view.setVisible(false);
    other_login_view.setVisible(false);
    other_password_view.setVisible(false);
    
    //show
    www_login_view.setVisible(true);
    www_login.setValue(lang.website);
    www_password_view.setVisible(true);
    www_password.setPasswordMask(false);
    www_password.value = '';
    
    globalConfig.cat = 'web';
});

button_email.addEventListener('click', function(e) {

    email_button_copy.setTouchEnabled(false);
    email_button_copy.setBackgroundImage('ui/' + globalConfig.path + '/button_nunactive.png');
    email_button_copy.setBackgroundFocusedImage('ui/' + globalConfig.path + '/button_nactive.png');
    
    button_www.setOpacity('0.5');
    button_email.setOpacity('1');
    button_account.setOpacity('0.5');
    button_other.setOpacity('0.5');
    
    //hide
    www_login_view.setVisible(false);
    www_password_view.setVisible(false);
    account_login_view.setVisible(false);
    account_password_view.setVisible(false);
    other_login_view.setVisible(false);
    other_password_view.setVisible(false);
    
    //show
    email_login_view.setVisible(true);
    email_login.setValue(lang.email);
    email_password_view.setVisible(true);
    email_password.setPasswordMask(false);
    email_password.value = '';
    
    globalConfig.cat = 'mail';
});

button_account.addEventListener('click', function(e) {
	
	account_button_copy.setTouchEnabled(false);
    account_button_copy.setBackgroundImage('ui/' + globalConfig.path + '/button_nunactive.png');
    account_button_copy.setBackgroundFocusedImage('ui/' + globalConfig.path + '/button_nactive.png');
	
    button_www.setOpacity('0.5');
    button_email.setOpacity('0.5');
    button_account.setOpacity('1');
    button_other.setOpacity('0.5');

    //hide
    www_login_view.setVisible(false);
    www_password_view.setVisible(false);
    email_login_view.setVisible(false);
    email_password_view.setVisible(false);
    other_login_view.setVisible(false);
    other_password_view.setVisible(false);
    
    //show
    account_login_view.setVisible(true);
    account_login.setValue(lang.account);
    account_password_view.setVisible(true);
    account_password.setPasswordMask(false);
    account_password.value = '';
    
    globalConfig.cat = 'account';
});

button_other.addEventListener('click', function(e) {
    
    other_button_copy.setTouchEnabled(false);
    other_button_copy.setBackgroundImage('ui/' + globalConfig.path + '/button_nunactive.png');
    other_button_copy.setBackgroundFocusedImage('ui/' + globalConfig.path + '/button_nactive.png');
    
    button_www.setOpacity('0.5');
    button_email.setOpacity('0.5');
    button_account.setOpacity('0.5');
    button_other.setOpacity('1');

    //hide
    www_login_view.setVisible(false);
    www_password_view.setVisible(false);
    email_login_view.setVisible(false);
    email_password_view.setVisible(false);
    account_login_view.setVisible(false);
    account_password_view.setVisible(false);
    
    //show
    other_login_view.setVisible(true);
    other_login.setValue(lang.other);
    other_password_view.setVisible(true);
    other_password.setPasswordMask(false);
    other_password.value = '';
    
    globalConfig.cat = 'other';
});

//bottom menu history
var history_button_www = Ti.UI.createButton({
    width: globalConfig.btnWidth,
    height: globalConfig.btnHeight,
    opacity: 0.5,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_hworld.png',
    backgroundRepeat: false,
    left: ((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2,
});

var history_button_email = Ti.UI.createButton({
    width: globalConfig.btnWidth,
    height: globalConfig.btnHeight,
    opacity: 0.5,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_hmail.png',
    backgroundRepeat: false,
    left: ((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2
});

var history_button_account = Ti.UI.createButton({
    width: globalConfig.btnWidth,
    height: globalConfig.btnHeight,
    opacity: 0.5,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_hcoin.png',
    backgroundRepeat: false,
    left: ((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2
});

var history_button_other = Ti.UI.createButton({
    width: globalConfig.btnWidth,
    height: globalConfig.btnHeight,
    opacity: 0.5,
    backgroundImage: 'ui/' + globalConfig.path + '/icons/icon_hpyramid.png',
    backgroundRepeat: false,
    left: ((Ti.Platform.displayCaps.platformWidth / 4) - globalConfig.btnWidth) / 2,
});

var history_view_www = Ti.UI.createView({
    width: '25%',
    left: 0,
    height: globalConfig.btn_view_height,
    bottom: globalConfig.btn_view_bottom,
    visible: false
});

var history_view_email = Ti.UI.createView({
    width: '25%',
    left: '25%',
    height: globalConfig.btn_view_height,
    bottom: globalConfig.btn_view_bottom,
    visible: false
});

var history_view_account = Ti.UI.createView({
    width: '25%',
    left: '50%',
    height: globalConfig.btn_view_height,
    bottom: globalConfig.btn_view_bottom,
    visible: false
});

var history_view_other = Ti.UI.createView({
    width: '25%',
    left: '75%',
    height: globalConfig.btn_view_height,
    bottom: globalConfig.btn_view_bottom,
    visible: false
});

history_view_www.add(history_button_www);
history_view_email.add(history_button_email);
history_view_account.add(history_button_account);
history_view_other.add(history_button_other);

user_window.add(history_view_www);
user_window.add(history_view_email);
user_window.add(history_view_account);
user_window.add(history_view_other);

history_button_www.addEventListener('click', function(e) {
    history_button_www.setOpacity('1');
    history_button_email.setOpacity('0.5');
    history_button_account.setOpacity('0.5');
    history_button_other.setOpacity('0.5');
});

history_button_email.addEventListener('click', function(e) {
    history_button_www.setOpacity('0.5');
    history_button_email.setOpacity('1');
    history_button_account.setOpacity('0.5');
    history_button_other.setOpacity('0.5');
});

history_button_account.addEventListener('click', function(e) {
    history_button_www.setOpacity('0.5');
    history_button_email.setOpacity('0.5');
    history_button_account.setOpacity('1');
    history_button_other.setOpacity('0.5');
});

history_button_other.addEventListener('click', function(e) {
    history_button_www.setOpacity('0.5');
    history_button_email.setOpacity('0.5');
    history_button_account.setOpacity('0.5');
    history_button_other.setOpacity('1');
});