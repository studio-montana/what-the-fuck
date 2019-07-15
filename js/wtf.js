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
		if ($("header").hasClass("toggled")) {
			$("header").removeClass("toggled");
		} else {
			$("header").addClass("toggled");
		}
	});

  $('.close-nav').on('click', function(e) {
    if ($("header").hasClass("toggled")) {
      $("header").removeClass("toggled");
    }
  });

  /**
	 * Input file
	 */
  document.querySelector("html").classList.add('js');

  var fileInput  = document.querySelector( ".input-file" ),
      button     = document.querySelector( ".input-file-trigger" ),
      the_return = document.querySelector(".file-return");

  button.addEventListener( "keydown", function( event ) {
      if ( event.keyCode == 13 || event.keyCode == 32 ) {
          fileInput.focus();
      }
  });
  button.addEventListener( "click", function( event ) {
     fileInput.focus();
     return false;
  });
  fileInput.addEventListener( "change", function( event ) {
      the_return.innerHTML = this.value;
  });

})(jQuery);
