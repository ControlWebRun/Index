/*
Template Name:
*/

jQuery("#btnDoc").click(function () 
{
 settings=
"directories=no,menubar=no,toolbar=no,location=no,directories=no,"+
"status=no,menubar=no,scrollbars=no,"+
"resizable=no,"+
"left="+500+",top="+100+",width="+400+",height="+500;
MyNewWindow=window.open("Login/LDindex.html","Login",settings);
window.location.href = 'Admin/indexD.html';
});

jQuery("#btnAuto").click(function () 
{
 settings=
"directories=no,menubar=no,toolbar=no,location=no,directories=no,"+
"status=no,menubar=no,scrollbars=no,"+
"resizable=no,"+
"left="+500+",top="+100+",width="+400+",height="+500;
MyNewWindow=window.open("Login/LAindex.html","Login",settings);
window.location.href = 'Source/index.html';
});


jQuery("#backtotop").click(function () 
{
alert("aqui");
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});