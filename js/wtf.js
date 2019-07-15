/**
 Theme Name: Woody
 Theme URI: http://lab.studio-montana.com/woody-theme/
 Author: Studio Montana (Sebastien Chandonay / Cyril Tissot)
 Author URI: http://www.studio-montana.com
 License: GNU General Public License v2 or later
 License URI: http://www.gnu.org/licenses/gpl-2.0.html

 This theme, like WordPress, is licensed under the GPL.
 Use it to make something cool, have fun, and share what you've learned with others.
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
