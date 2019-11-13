
jQuery("#btnSingIn").click(function () 
{
window.close();
});

jQuery("#btnDoc").click(function () 
{
 settings=
"directories=no,menubar=no,toolbar=no,location=no,"+
"status=no,scrollbars=no,channelmode=no,titlebar=no,"+
"resizable=no,"+
"left="+500+",top="+100+",width="+400+",height="+400;
MyNewWindow=window.open("../Login/LDindex.html","Login",settings);
return true;
});