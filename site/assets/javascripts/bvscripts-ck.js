/*
 * Replace all SVG images with inline SVG
*/jQuery("img.svg").each(function(){var e=jQuery(this),t=e.attr("id"),n=e.attr("class"),r=e.attr("src");jQuery.get(r,function(r){var i=jQuery(r).find("svg");typeof t!="undefined"&&(i=i.attr("id",t));typeof n!="undefined"&&(i=i.attr("class",n+" replaced-svg"));i=i.removeAttr("xmlns:a");e.replaceWith(i)})});$(window).scroll(function(){var e=$(window).scrollTop();$(window).width()>768&&e>$(window).height()-100?$("nav#primary").fadeIn(500):$(window).width()>768&&e<$(window).height()-100?$("nav#primary").fadeOut(500):$("nav#primary").fadeIn(500)});$("#showmenu").click(function(){$("ul#menu").slideToggle("fast",function(){})});