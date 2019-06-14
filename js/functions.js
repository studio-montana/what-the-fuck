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
	 * Menu toggle
	 */
	$('.hamburger-nav').on('click', function(e) {
		if ($("nav").hasClass("menu-toggle")) {
			$("nav").removeClass("menu-toggle");
		} else {
			$("nav").addClass("menu-toggle");
		}
	});

  $('.close-nav').on('click', function(e) {
    if ($("nav").hasClass("menu-toggle")) {
      $("nav").removeClass("menu-toggle");
    }
  });



})(jQuery);
