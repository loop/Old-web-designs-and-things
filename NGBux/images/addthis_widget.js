
var _atu="undefined",_atd="http://www.addthis.com/",_atr="http://s7.addthis.com/",_euc=encodeURIComponent,_atc={ver:152,note:"",samp:0.05,addr:-1};if(typeof(addthis_conf)===_atu){var addthis_conf={};}
for(i in addthis_conf){_atc[i]=addthis_conf[i];}
if(typeof(_ate)===_atu){var _ate={ab:"-",bro:{},clck:1,show:1,samp:_atc.samp-Math.random(),scnt:1,seqn:1,inst:1,wait:500,tmot:null,cvt:[],svt:[],sttm:new Date().getTime(),max:268435455,pix:"tev",sid:0,sub:typeof(at_sub)!==_atu,uid:null,swf:"http://bin.clearspring.com/at/v/1/button1.swf",evu:"http://e1.clearspring.com/at/",mun:function(s){var mv=291;for(var i=0;i<s.length;i++){mv=(mv*(s.charCodeAt(i)+i)+3)&1048575;}
return(mv&16777215).toString(32);},off:function(){return Math.floor((new Date().getTime()-_ate.sttm)/100).toString(16);},ran:function(){return Math.floor(Math.random()*4294967295).toString(36);},cst:function(c){return"CXNID=2000001.521545608054043907"+(c||2)+"NXC";},img:function(i,c){if(typeof(at_sub)===_atu){new Image().src=_atr+"live/t00/"+i+".gif?"+_ate.ran()+"&"+_ate.cst(c);}},cuid:function(){return(_ate.sttm&_ate.max).toString(16)+(Math.floor(Math.random()*_ate.max)).toString(16);},ssid:function(){if(_ate.sid===0){_ate.sid=_ate.cuid();}
return _ate.sid;},sev:function(id,_8){_ate.pix="sev-"+(typeof(id)!=="number"?_euc(id):id);_ate.svt.push(id+";"+_ate.off());if(_8===1){_ate.xmi(true);}else{_ate.sxm(true);}},cev:function(k,v){_ate.pix="cev-"+_euc(k);_ate.cvt.push(_euc(k)+"="+_euc(v)+";"+_ate.off());_ate.sxm(true);},sxm:function(b){if(_ate.tmot!==null){clearTimeout(_ate.tmot);}
if(b){_ate.tmot=_ate.sto("_ate.xmi(false)",_ate.wait);}},sto:function(c,t){return setTimeout(c,t);},sta:function(){var a=_ate;return"AT-"+(typeof(addthis_pub)!==_atu?_euc(addthis_pub):"unknown")+"/-/"+a.ab+"/"+a.ssid()+"/"+(a.seqn++)+(a.uid!==null?"/"+a.uid:"");},xmi:function(_f){var a=_ate;if(!a.uid){a.dck("X"+a.cuid());}
if(a.cvt.length+a.svt.length>0){a.sxm(false);if(a.seqn===1){a.cev("pin",a.inst);}
var url=a.evu+a.pix+"-"+a.ran()+".png?ev="+_ate.sta()+"&se="+a.svt.join(",")+"&ce="+a.cvt.join(",");a.cvt=[];a.svt=[];if(_atc.xtr){return;}
if(_f){var d=document,i=d.createElement("iframe");i.id="_atf";i.src=url;_ate.opp(i.style);d.body.appendChild(i);i=d.getElementById("_atf");}else{new Image().src=url;}}},opp:function(st){st.width="1px";st.height="1px";st.position="absolute";st.zIndex=100000;},lod:function(arg){var a=_ate,f=arg===1;if(!f){if(a.samp>=0&&!a.sub){a.sev("20");a.cev("plo",1/_atc.samp);}
a.img(_atc.ver+"lo","2");}
var d=document,n=navigator,u=n.userAgent.toLowerCase(),b={saf:/webkit/.test(u),msi:/msie/.test(u)&&!(/opera/.test(u))};_ate.bro=b;if(!_atc.xfl&&(f||a.uid===null)&&a.swf){var _1c=function(o,n,v){var c=d.createElement("param");c.name=n;c.value=v;o.appendChild(c);};var o=d.createElement("object");a.opp(o.style);o.id="atff";if(b.msi){o.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";_1c(o,"movie",a.swf);}else{o.data=a.swf;o.quality="high";o.type="application/x-shockwave-flash";}
_1c(o,"wmode","transparent");_1c(o,"allowScriptAccess","always");d.body.insertBefore(o,d.body.firstChild);if(b.msi){o.outerHTML+=" ";}}},unl:function(){var a=_ate;if(a.samp>=0&&!a.sub){a.sev("21",1);a.cev("pun",1/_atc.samp);}
return true;},dck:function(c){_ate.uid=c;var p=_atw.pub(),x="usagov,loc_webservices,massgov,govgab1".split(",");for(i in x){if(p==x[i]){return;}}
if(!_atc.xck){document.cookie="_csuid="+c+"; expires=Wed, 04 Oct 2028 03:19:53 GMT; path=/";}},fcl:null,asetup:function(x){var a=_ate;try{if(x!==null&&x!==_atu){a.dck(x);}
if(a.fcl){a.fcl();}}
catch(e){}
return x;}};(function(){var a=_ate,d=document,w=window,wa=w.addEventListener,we=w.attachEvent;if(wa){wa("load",a.lod,false);wa("unload",a.unl,false);}else{if(we){we("onload",a.lod);we("onunload",a.unl);}else{w.onload=a.lod;w.onunload=a.unl;}}
if(d.cookie){var ck=d.cookie.split(";");for(var i=0;i<ck.length;i++){var c=ck[i];var x=c.indexOf("_csuid=");if(x>=0){_ate.uid=c.substring(x+7);}}}})();}else{_ate.inst++;}
if(typeof _atw===_atu){var _atw={lang:function(m,i){var l=m||navigator.language,o=[[["fr","fra","fre"],"Ajouter aux favoris / Partager","en savoir plus","envoyer &#224; un ami"],[["de","ger","deu"],"Lesezeichen / Weitersagen","Mehr"],[["it","ita"],"Aggiungi ai Preferiti / Condividi","visualizza altri"],[["pt","por"],"Adicionar aos favoritos / Partilhar","mais"],[["es","esp","spa"],"Favorito / Compartir","m&#225;s"],[["ja","jpn"],"&#12362;&#27671;&#12395;&#20837;&#12426;&#12395;&#30331;&#37682; / &#20849;&#26377;","&#12418;&#12387;&#12392;&#35211;&#12427;"],[["zh-tw","chi-tw","zho-tw"],"&#21152;&#20837;&#26360;&#31844; / &#20998;&#20139;"],[["zh","chi","zho"],"&#28155;&#21152;&#21040;&#25910;&#34255;&#22841; / &#20849;&#20139;","&#26597;&#30475;&#26356;&#22810;"],[["ko","kor"],"&#48513;&#47560;&#53356;&#54616;&#44592; / &#44277;&#50976;&#54616;&#44592;","&#45908; &#48372;&#44592;"],[["sv","sve","swe"],"Bokm&auml;rk / Dela","mer"],[["no","nno"],"Legg til som bokmerke / Del","mer"],[["da","dan"],"Bogm&aelig;rk / Publicer","mere"],[["nl","dut","nld"],"Bookmarken / Delen"],[["fi","fin"],"Kirjanmerkki / Jaa","lis&#228;&#228;"],[["ru","rus"],"&#1044;&#1086;&#1073;&#1072;&#1074;&#1080;&#1090;&#1100; &#1074; &#1080;&#1079;&#1073;&#1088;&#1072;&#1085;&#1085;&#1086;&#1077; / &#1054;&#1090;&#1087;&#1088;&#1072;&#1074;&#1080;&#1090;&#1100; &#1076;&#1088;&#1091;&#1075;&#1091;","&#1077;&#1097;&#1077;","&#1054;&#1090;&#1087;&#1088;&#1072;&#1074;&#1080;&#1090;&#1100; &#1076;&#1088;&#1091;&#1075;&#1091;"],[["pl","pol"],"Zak&#322;adka / Akcja warto&#347;ciowa","zobacz wi&#281;cej"],[["tr","tur"],"Yer imi / Payla&#351;mak"],[["he","heb"],"&#1500;&#1505;&#1502;&#1503; / &#1500;&#1513;&#1514;&#1507;"]];for(var q in o){for(var r in o[q][0]){if(o[q][0][r]===l&&o[q].length>i&&o[q][i]){return o[q][i];}}}
return["Bookmark &amp; Share","More ...","Email a Friend"][i-1];},list:{"aim":"AIM","aolfav":"myAOL","ask":"Ask","backflip":"Backflip","ballhype":"BallHype","blinklist":"BlinkList","blogmarks":"Blogmarks","bluedot":"Faves","delicious":"Del.icio.us","digg":"Digg","diigo":"Diigo","email":"Email","facebook":"Facebook","favorites":"Favorites","fark":"Fark","feedmelinks":"FeedMeLinks","furl":"Furl","google":"Google","kaboodle":"Kaboodle","kirtsy":"kIRTSY","linkagogo":"Link-a-Gogo","linkedin":"LinkedIn","live":"Live","magnolia":"Magnolia","misterwong":"Mister Wong","mixx":"Mixx","multiply":"Multiply","myspace":"MySpace","myweb":"Yahoo MyWeb","netscape":"Propeller","netvouz":"Netvouz","newsvine":"Newsvine","reddit":"Reddit","segnalo":"Segnalo","sharedstuff":"Shared Stuff","simpy":"Simpy","skrt":"Sk*rt","slashdot":"Slashdot","spurl":"Spurl","stumbleupon":"StumbleUpon","stylehive":"Stylehive","tailrank":"Tailrank","technorati":"Technorati","thisnext":"ThisNext","twitter":"Twitter","yardbarker":"Yardbarker","yahoobkm":"Yahoo Bookmarks"},div:null,pub:function(){return typeof(addthis_pub)!==_atu?_euc(addthis_pub):"";},get:function(id){return document.getElementById(id);},xwa:function(){if(_atw.cwa!==null){clearTimeout(_atw.cwa);}},cwa:null,ost:false,did:"addthis_dropdown15",sli:function(_38){for(var i=0;i<_atw.sin.length;i++){var sio=_atw.sin[i];if(sio.pos>=sio.end){_atw.sin.splice(i,1);}else{sio.pos+=sio.inc;sio.obj.style.height=sio.pos+"px";}}
if(_atw.sin.length>0){_ate.sto("_atw.sli("+_38+")",_38);}},sla:function(obj,end,_3d,inc,_3f){_atw.sin.push({"obj":obj,"pos":0,"end":end,"inc":inc});_ate.sto("_atw.sli("+_3d+")",_3f);},sin:[],clo:function(){var _40=_atw.get(_atw.did);if(_40){_40.style.display="none";}
var e=document.getElementsByTagName("embed");if(e&&addthis_hide_embed){for(i=0;i<e.length;i++){if(e[i].addthis_hidden){e[i].style.visibility="visible";}}}
return false;},cof:function(obj){obj.style.color="#000000";if(obj.value==" email address"){obj.value="";}},sho:function(_43){var a=_ate,_45=_atw.get("at_share"),_46=_atw.get("at_email"),_47=_atw.get("at_caption"),_48=_atw.get("at_success");_48.innerHTML="";if(_43=="share"||_43==""){_46.style.display="none";_45.style.display="block";_47.innerHTML=addthis_caption_share;_43="share";}else{_45.style.display="none";_46.style.display="block";_47.innerHTML=addthis_caption_email;_43="email";}
if(a.show-->0){a.sev("40");a.cev("sho",_43);a.img(_atc.ver+"sh","3");}},trim:function(s){try{return s.replace(/^\s+|\s+$/g,"");}
catch(e){return s;}},uadd:function(svc){return"pub="+_atw.pub()+"&s="+svc+"&url="+_euc(addthis_url)+"&title="+_euc(this.trim(addthis_title))+"&logo="+_euc(addthis_logo)+"&logobg="+addthis_logo_background+"&logocolor="+addthis_logo_color+"&ate="+_ate.sta()+"&adt="+_atw.addt+"&content="+_euc(addthis_content);},genurl:function(svc){return _atd+"bookmark.php?v=15&winname=addthis&"+_atw.uadd(svc)+"&"+_ate.cst(4);},abpos:function(a){var b=0,c=0;do{b+=a.offsetTop||0;c+=a.offsetLeft||0;a=a.offsetParent;}while(a);return[c,b];},area:function(){var w=window,d=document,de=d.documentElement,db=d.body;if(typeof(w.innerWidth)=="number"){return[w.innerWidth,w.innerHeight];}else{if(de&&(de.clientWidth||de.clientHeight)){return[de.clientWidth,de.clientHeight];}else{if(db&&(db.clientWidth||db.clientHeight)){return[db.clientWidth,db.clientHeight];}else{return[0,0];}}}},spos:function(){var w=window,d=document,de=d.documentElement,db=d.body;if(typeof(w.pageYOffset)=="number"){return[w.pageXOffset,w.pageYOffset];}else{if(db&&(db.scrollLeft||db.scrollTop)){return[db.scrollLeft,db.scrollTop];}else{if(de&&(de.scrollLeft||de.scrollTop)){return[de.scrollLeft,de.scrollTop];}else{return[0,0];}}}},evar:function(){try{function x(v,n){return eval("("+v+"=(typeof "+v+" === '"+_atu+"' ? "+(typeof n==="string"?"'"+n+"'":n)+" : "+v+"))");}
var a="addthis_",l=a+"logo",c=a+"caption_",o=a+"offset_",al=x(a+"language","");_atw.list["more"]=x(a+"more",_atw.lang(al,2));x(a+"caption",_atw.lang(al,1));x(a+"url","");x(a+"brand","");x(a+"title","");x(a+"content","");x(a+"options","favorites,digg,delicious,google,myspace,facebook,reddit,newsvine,live,more");x(l,"");x(l+"_background","");x(l+"_color","");x(c+"share",addthis_caption);x(c+"email",_atw.lang(al,3),true);x(o+"top",0);x(o+"left",0);x(a+"hide_embed",true);}
catch(e){}}};function addthis_to(s){return addthis_sendto(s);}
function addthis_onmouseover(elt,e,_61,_62,_63,_64,_65){addthis_content=_65||"";return addthis_open(elt,"share",_61,_62);}
function addthis_onmouseout(){return addthis_close();}
function addthis_open(elt,_67,_68,_69){var a=_ate,w=_atw,d=document;if(!w.ost){w.evar();for(i in addthis_conf){_atc[i]=addthis_conf[i];}
w.addr=_atc.addr-Math.random();w.addt=_atc.addt>=0?_atc.addt:Math.floor(3*Math.random());if(w.pub()=="perfspot"||w.pub()=="webs"){w.addr=1;}
var n="&nbsp;",i1="<tr><td class=\"at_email_label\"",i2="class=\"at_email_input\" value=\" email address\" onfocus=\"_atw.cof(this)\" /></td></tr>",s="<div id=\""+w.did+"\" onmouseover=\"_atw.xwa()\" onmouseout=\"addthis_close()\" style=\"z-index:1000000;position:absolute;display:none\">";s+="<table width=\"100%\" cellpadding=\"2\" cellspacing=\"0\" id=\"at_tb1\">";s+="<tr><td id=\"at_tb1_td_1\"><span id=\"at_caption\">"+addthis_caption_share+"</span></td><td align=\"right\" id=\"at_tb1_td_2\">"+addthis_brand+"</td></tr></table>";var _72=false,o=addthis_options.replace(/\s/g,"").replace(/\*/,"").split(",");s+="<div id=\"at_share\"><table id=\"addthis_services\" width=\"100%\" cellpadding=\"0\"><tr><td colspan=\"2\" style=\"height:0px\"></td></tr>";for(var i=0;i<o.length;i++){var sv=o[i],_75=w.list;if(sv in _75){if(!_72){s+="<tr>";}
s+="<td><a href=\"/\" onclick=\"return addthis_sendto('"+sv+"');\"><span class=\"at_tiles at_tile_"+sv+"\"></span>"+n+_75[sv]+"</a></td>";if(_72){s+="</tr>";}
_72=!_72;}}
if(_72){s+="<td></td></tr>";}
s+="<tr><td colspan=\"2\" style=\"height:2px\"></td></tr></table></div>";s+="<div id=\"at_email\" style=\"display:none\"><table border=\"0\">";s+=i1+">To:</td><td><input id=\"at_to\" type=\"text\" "+i2;s+=i1+">From:</td><td><input id=\"at_from\" type=\"text\" "+i2;s+=i1+" valign=\"top\">Note:</td><td><textarea id=\"at_msg\"/>"+_atc.note+"</textarea></td></tr>";s+="<tr><td colspan=\"2\" align=\"right\"><span id=\"at_success\"></span>"+n+n+n+n+n+"<input id=\"at_send\" type=\"button\" value=\"Send\" onclick=\"return addthis_send()\"/></td></tr>";s+="</table></div>";if(w.addr>=0){s+="<iframe style=\"border-top:1px solid #eeeeee;width:100%;height:0px\" id=\"at_plus\" src=\"\" scrolling=\"no\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\"></iframe>";}
s+="<table id=\"at_foot\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">";s+="<tr><td colspan=\"2\" align=\"right\" id=\"at_foot_l\"><a href=\""+_atd+"\" target=\"_blank\" id=\"at_foot_a\"><div class=\"at_mini\"></div></a></td></tr>";s+="</table></div>";w.div=d.createElement("div");w.div.innerHTML=s;d.body.insertBefore(w.div,d.body.firstChild);w.div.style.zIndex=1000000;w.div=null;}
w.xwa();addthis_url=_68;addthis_title=_69;if(addthis_url===""||addthis_url==="[URL]"){addthis_url=location.href;}
if(addthis_title===""||addthis_title==="[TITLE]"){addthis_title=d.title;}
var _76=16,_77=elt.getElementsByTagName("img");if(_77&&_77[0]){elt=_77[0];_76=0;}
w.sho(_67);var _78=w.abpos(elt),_79=_78[0]+addthis_offset_left,_7a=_78[1]+_76+1+addthis_offset_top,_7b=w.area(),_7c=w.spos(),_7d=w.get(w.did),_7e=_7d.style,dir=0;_7e.display="block";var _80=_7d.clientWidth,_81=_7d.clientHeight;if(_79-_7c[0]+_80+20>_7b[0]){_79=_79-_80+50;dir++;}
if(_7a-_7c[1]+_81+elt.clientHeight+20>_7b[1]){_7a=_7a-_81-20;dir+=2;}
if(a.show>=0){a.cev("dir",dir);}
_7e.left=_79+"px";_7e.top=(_7a+elt.clientHeight)+"px";if(addthis_hide_embed){var _82=_79+_80,_83=_7a+_81,e=d.getElementsByTagName("embed"),_85=0,_86=0,_87=0;for(i=0;i<e.length;i++){_85=w.abpos(e[i]);_86=_85[0];_87=_85[1];if(_79<_86+e[i].clientWidth&&_7a<_87+e[i].clientHeight){if(_82>_86&&_83>_87){if(e[i].style.visibility!="hidden"){e[i].addthis_hidden=true;e[i].style.visibility="hidden";}}}}}
if(!w.ost){if(w.addr>=0){a.ab=w.addt;var nl=(a.ab===2?65:2);var _89=nl,pxl=_89*23,atf=w.get("at_plus");if(_89>3){pxl=_89;}
if(_89>250){_7d.style.width="310px";}else{if(_89>50&&_89<100){_7d.style.width="240px";}}
if(a.ab){atf.src=_atd+"ads.php?r="+a.ran()+"&url="+_euc(addthis_url)+"&ate="+a.sta()+"&adt="+w.addt+"&pub="+w.pub()+"&lnz="+_89+"&key="+(_atc.skey||"");}
switch(a.ab){case 1:w.sla(atf,pxl,5,pxl/16,0);break;case 2:w.sla(atf,pxl,5,pxl/16,0);break;}}else{a.ab="~";}}
w.ost=true;return false;}
function addthis_close(){_atw.cwa=_ate.sto("_atw.clo()",500);}
function addthis_sendto(s){var w=window,a=_atw,e=_ate;if(s==="email"){a.sho(s);return false;}
a.clo();if(s==="favorites"){try{if(e.bro.saf){alert("Press <Command>+D to bookmark in Safari");}else{if(document.all){w.external.AddFavorite(addthis_url,addthis_title);}else{w.sidebar.addPanel(addthis_title,addthis_url,"");}}
return false;}
catch(e){}}
w.open(a.genurl(s),"addthis","scrollbars=yes,menubar=no,width=625,height=480,resizable=yes,toolbar=no,location=no,status=no");if(s){e.cev("sct",e.scnt++);}else{e.cev("clk",e.clck++);}
return false;}
function addthis_send(){var _90=_atw.get("at_from"),_91=_atw.get("at_to"),_92=_atw.get("at_success"),_93=_atw.get("at_msg");if(_90.value.indexOf("@")<0||_91.value.indexOf("@")<0||_90.value.indexOf(".")<0||_91.value.indexOf(".")<0){alert("Please enter a valid email address!");return;}
new Image().src=_atd+"tellfriend.php?&fromname=aaa&fromemail="+_euc(_90.value)+"&tofriend="+_euc(_91.value)+"&note="+_euc(_93.value)+"&"+_atw.uadd("e");_92.innerHTML="Message Sent!";_atw.cwa=_ate.sto("_atw.clo()",1200);return false;}
try{var d=document,l=d.createElement("link");l.rel="stylesheet";l.type="text/css";l.href=_atr+"static/r01/widget.css";l.media="all";d.getElementsByTagName("head")[0].appendChild(l);}
catch(e){}}
try{if(_atc.ver===120){_atw.evar();document.write("<a href=\""+_atw.genurl("")+"\" onmouseover=\"return addthis_open(this, 'share', '"+addthis_url+"', '"+addthis_title.replace(/'/g,"\\'")+"')\" onmouseout=\"addthis_close()\" onclick=\"return addthis_to()\" class=\"snap_noshots\"><img src=\""+_atr+"button1-bm.gif\" width=\"125\" height=\"16\" border=\"0\" style=\"border: none; padding: 0px\" alt=\"addthis\" /></a>");}}
catch(e){}