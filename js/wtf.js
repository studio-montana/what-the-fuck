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

	/**
	 * On Scroll
	 */
	$(document).ready(function() {
    	let last_scroll_position = 0;
	    $(window).scroll(function() {
	    	if ($(document).scrollTop() > 200) {
	    		$('body').addClass('scrolled');
		    	if ($(document).scrollTop() > last_scroll_position){
		    		if (($(document).scrollTop() - last_scroll_position) > 30){
		    			/* user's scrolling up */
		    			$('body').addClass('scrolled-up');
		    			$('body').removeClass('scrolled-down');
		    		}
	    		}else{
	    			if ((last_scroll_position - $(document).scrollTop()) > 30){
	    				/* user's scrolling down */
		    			$('body').addClass('scrolled-down');
	    				$('body').removeClass('scrolled-up');
	    			}
	    		}
	    	}else{
	            $('body').removeClass('scrolled');
	    	}
	    	/** scrollto top */
	        if ($(document).scrollTop() > 600) {
	            $("*[data-action='scrollto-top']").fadeIn();
	        }
	        else {
	        	$("*[data-action='scrollto-top']").fadeOut();
	        }
	    });
	});

	/**
	 * Main Menu (toggle/open/close)
	 */
	$(document).ready(function(){
		$("body").on('click', "*[data-action='toggle-main-menu']", function(e) {
			if ($("body").hasClass("main-menu-opened")) {
				$("body").removeClass("main-menu-opened");
			} else {
				$("body").addClass("main-menu-opened");
			}
			if ($("*[data-item='main-menu']").length > 0) {
				if ($("*[data-item='main-menu']")){
					$("*[data-item='main-menu']").removeClass("opened");
				} else {
					$("*[data-item='main-menu']").addClass("opened");
				}
			}
		});
		$("body").on('click', "*[data-action='close-main-menu']", function(e) {
			$("body").removeClass("main-menu-opened");
			if ($("*[data-item='main-menu']").length > 0) {
				$("*[data-item='main-menu']").removeClass("opened");
			}
		});
		$("body").on('click', "*[data-action='open-main-menu']", function(e) {
			$("body").addClass("main-menu-opened");
			if ($("*[data-item='main-menu']").length > 0) {
				$("*[data-item='main-menu']").addClass("opened");
			}
		});
		$("body").on("keydown", function(e) {
			if (e.keyCode == 13 || e.keyCode == 32) {
				$("body").removeClass("main-menu-opened");
				if ($("*[data-item='main-menu']").length > 0) {
					$("*[data-item='main-menu']").removeClass("opened");
				}
			}
		});
		$("body").on('click', function(e){
			if (
					!$("*[data-action='toggle-main-menu']").is(e.target) &&
					$("*[data-action='toggle-main-menu']").has(e.target).length === 0 &&
					!$("*[data-action='close-main-menu']").is(e.target) &&
					$("*[data-action='close-main-menu']").has(e.target).length === 0 &&
					!$("*[data-action='open-main-menu']").is(e.target) &&
					$("*[data-action='open-main-menu']").has(e.target).length === 0 &&
					!$("*[data-item='main-menu']").is(e.target) &&
					$("*[data-item='main-menu']").has(e.target).length === 0) {
				$("body").removeClass("main-menu-opened");
				if ($("*[data-item='main-menu']").length > 0) {
					$("*[data-item='main-menu']").removeClass("opened");
				}
		    }
		});
	});

})(jQuery);
