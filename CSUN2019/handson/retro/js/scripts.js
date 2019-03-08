jQuery(document).ready(function ($) {
// add lang=en to html
    $("html").attr("lang", "en")

    // add alt attributes to logo images
  $('.site-logo img').attr('alt', 'e-gov - a divison of WaTech').removeAttr('title');

//and the skip link was broken
$( "<a name='main-content'></a>").insertBefore( ".content" );

//now lets fix some icons
$('.fa-search').attr('aria-hidden', 'true');
$( "<span class='sr-only'>Search</span>").insertAfter( ".fa-search" );

$('.fa-link').attr('aria-hidden', 'true');
$("<span class='sr-only'>Link</span>").insertAfter( ".fa-link" );

$('.fa-align-justify').attr('aria-hidden', 'true');
$( "<span class='sr-only'>Align</span>").insertAfter( ".fa-align-justify" );

});
