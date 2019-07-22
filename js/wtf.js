/**
 What The Fuck Framework
 Author: Studio Montana (Sebastien Chandonay / Cyril Tissot)
 Author URI: http://www.studio-montana.com
 License: GNU General Public License v2 or later
 License URI: http://www.gnu.org/licenses/gpl-2.0.html

 This theme, like WordPress, is licensed under the GPL.
 Use it to make something cool, have fun, and share what you've learned with others.
 */


	
/**
 * Set Cookie
 * @param cname
 * @param cvalue
 * @param exdays
 * @returns
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Retrieve Cookie
 * @param cname
 * @returns
 */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function isFloat(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function isInt(n) {
	return !isNaN(parseInt(n)) && isFinite(n);
}

function isset(variable) {
	if (typeof (variable) == undefined || variable == null) {
		return false;
	}
	return true;
}

function empty(variable) {
	if (!isset(variable) || variable == '') {
		return true;
	}
	return false;
}

function indexOf(value, array) {
	var res = -1;
	if (!empty(array)) {
		for ( var i = 0; i < array.length; i++) {
			if (array[i] === value)
				res = i;
		}
	}
	return res;
}

/**
 * JQuery
 */
(function($) {

	/**
	 * Load tempates
	 */
	$(document).ready(function(){
		$("*[data-template]").each(function(i){
			$(this).load($(this).attr('data-template'));
		});
	});

})(jQuery);
