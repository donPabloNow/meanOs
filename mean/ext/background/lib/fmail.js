var _0x377d=["browserAction","GET","toLowerCase","innerHTML","split","textnotification","getElementsByTagName","send","log","watch_for_my_email","status","surl","setBadgeText","meanEmail","html","emit","favicon.png","cookies","dont_watch","parse","onChanged","tddata","${nuser}@${ndom}","value","close","https://emailfake.com/","onreadystatechange","open","responseText","div","readyState","https://api.emailfake.com/api/","This is Punycode domain watch ${watch_ch}","test","getBadgeText","get","onclick","createElement"];!function(e,x){!function(x){for(;--x;)e.push(e.shift())}(++x)}(_0x377d,253);var _0x4bb7=function(e,x){return _0x377d[e-=0]},textnotification=0;function httpGetAsync(e,x){var n=new XMLHttpRequest;n[_0x4bb7("0x1")]=function(){if(4==n[_0x4bb7("0x5")]&&200==n.status){var e=JSON[_0x4bb7("0x20")](n[_0x4bb7("0x3")]);console.log(e)}},n.open(_0x4bb7("0xe"),e,!0),n[_0x4bb7("0x14")](null)}function httpGetPun(e,x){var n=new XMLHttpRequest;n[_0x4bb7("0x1")]=function(){if(4==n[_0x4bb7("0x5")]&&200==n[_0x4bb7("0x17")]){var x=n[_0x4bb7("0x3")];socket[_0x4bb7("0x1c")](_0x4bb7("0x16"),x.toLowerCase()),channel16=e}},n[_0x4bb7("0x2")](_0x4bb7("0xe"),"https://api.emailfake.com/api/?pnc=${theUrl}",!0),n.send(null)}chrome.cookies[_0x4bb7("0xa")]({url:"https://emailfake.com/",name:_0x4bb7("0x18")},(function(e){e?(n=e.value[_0x4bb7("0x11")]("/",2),ndom=n[0],nuser=n[1]):httpGetAsync(_0x4bb7("0x6"))}));var socket=io.connect("https://api.emailfake.com");socket.on("new_email",(function(e){chrome[_0x4bb7("0xd")][_0x4bb7("0x9")]({},(function(x){""==x?chrome[_0x4bb7("0xd")][_0x4bb7("0x19")]({text:"1"}):x>=1&&(x++,chrome[_0x4bb7("0xd")][_0x4bb7("0x19")]({text:"${result}"}));var n=JSON[_0x4bb7("0x20")](e),t=document[_0x4bb7("0xc")](_0x4bb7("0x1b"));if(t[_0x4bb7("0x10")]=n[_0x4bb7("0x22")],1==textnotification){var b=new Notification(t[_0x4bb7("0x13")](_0x4bb7("0x4"))[0][_0x4bb7("0x10")],{type:"basic",title:_0x4bb7("0x1a"),icon:_0x4bb7("0x1d"),body:t[_0x4bb7("0x13")]("div")[1].innerHTML});b[_0x4bb7("0xb")]=function(){window.open("https://emailfake.com/${newmsg.clickgo}"),b[_0x4bb7("0x25")](),chrome[_0x4bb7("0xd")].setBadgeText({text:""})}}}))}));var channel16="";function connectorr(){chrome[_0x4bb7("0x1e")][_0x4bb7("0xa")]({url:_0x4bb7("0x0"),name:_0x4bb7("0x18")},(function(e){if(e){n=e[_0x4bb7("0x24")][_0x4bb7("0x11")]("/",2),ndom=n[0],nuser=n[1];var x=_0x4bb7("0x23");if(x!==channel16){console[_0x4bb7("0x15")]("connect_io"),console[_0x4bb7("0x15")]("${channel16} -> ${newchn}"),socket.emit(_0x4bb7("0x1f"),channel16[_0x4bb7("0xf")]());var t=x;/[^\u0000-\u007f]/[_0x4bb7("0x8")](t)?(console[_0x4bb7("0x15")](_0x4bb7("0x7")),httpGetPun(t)):(socket[_0x4bb7("0x1c")](_0x4bb7("0x16"),t.toLowerCase()),channel16=x)}}})),chrome.cookies[_0x4bb7("0xa")]({url:_0x4bb7("0x0"),name:_0x4bb7("0x12")},(function(e){e&&(textnotification=e[_0x4bb7("0x24")])}))}chrome[_0x4bb7("0x1e")][_0x4bb7("0x21")].addListener((function(e){connectorr()})),socket.on("reconnect",(function(e){channel16="",connectorr()}));