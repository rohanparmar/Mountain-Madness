document.addEventListener("DOMContentLoaded", function(){
    var darkHrefs = document.querySelectorAll('[data-dark-src]')
    darkHrefs.forEach((elem, idx) => {
        elem.dataset.lightSrc = elem.src
    })
});
let sunAnim;
// Vanilla hover logic for sun/moon selector
let selector = document.getElementById("sun-moon-selector");
selector.addEventListener("mouseover", function() {
    if (selector.src.indexOf("sun") !== -1) {
        selector.style.boxShadow = "0px 0px 30px rgba(255, 153, 0, 0.795)";
        selector.style.cursor = "pointer";
    } else {
        selector.src = "./assets/main/dark/new_glow_moon.svg";
    }
}, false);
selector.addEventListener("mouseleave", function() {
    if (selector.src.indexOf("sun") !== -1) {
        selector.style.boxShadow = "none";
    } else {
        selector.src = "./assets/main/dark/moon.svg";
    }
}, false);

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById('sun-moon-selector').style.boxShadow = "none";
    var darkHrefs = document.querySelectorAll('[data-dark-src]');
    darkHrefs.forEach((elem, idx) => {
        elem.src = elem.dataset.darkSrc;
    });
    document.getElementById("twt").href="#twitter"; 
    document.getElementById("twt").target="_self";

    let speakerNavbar = document.getElementsByClassName('speakers-tab-button')
    for (let i = 0; i < speakerNavbar.length; i++) {
        if (speakerNavbar[i].src.indexOf("light") != -1) {
            speakerNavbar[i].src = "./assets/main/dark/dark_speakercircle.svg";
        } else {
            speakerNavbar[i].src = "./assets/main/light/speakercircle.svg";
        }
    }

    selectSpeaker(currentSpeaker);
}

function lightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var lightHrefs = document.querySelectorAll('[data-dark-src]')
    lightHrefs.forEach((elem, idx) => {
        elem.src = elem.dataset.lightSrc
    })
    document.getElementById("twt").href="https://twitter.com/hackmit"; 
    document.getElementById("twt").target="_blank";

    let speakerNavbar = document.getElementsByClassName('speakers-tab-button')
    console.log(speakerNavbar)
    for (let i = 0; i < speakerNavbar.length; i++) {
        if (speakerNavbar[i].src == "./assets/main/dark/dark_speakercircle.svg") {
            speakerNavbar[i].src == "./assets/main/light/speakercircle.svg"
        }
    }

    selectSpeaker(currentSpeaker);
}

let sun = document.getElementById("sun-moon-selector");
const freakInTheSheets = document.getElementById("freak-in-the-sheets");
const animationTime = 2500;

sun.addEventListener('click', () => {
    sun.classList.add("move");
    freakInTheSheets.classList.add("active");
    sun.style.zIndex = "-100";
    setTimeout(function() {
        sun.classList.remove("move");
        sun.style.zIndex = "4";
        freakInTheSheets.classList.remove("active");
    }, animationTime);

    setTimeout(function() {
        if (document.getElementsByClassName('dark-mode').length > 0) {
            lightMode()
            document.getElementById("sun-moon-selector").src = "./assets/main/light/sun.svg";
        } else {
            darkMode();
            document.getElementById("sun-moon-selector").src = "./assets/main/dark/moon.svg";
        }
    }, animationTime * 0.25);
})

let mobileSwitch = document.getElementById("mobile-switch");
mobileSwitch.addEventListener('click', () => {
    // sun.classList.add("move");
    // freakInTheSheets.classList.add("active");
    // sun.style.zIndex = "-100";
    // setTimeout(function() {
    //     sun.classList.remove("move");
    //     sun.style.zIndex = "4";
    //     freakInTheSheets.classList.remove("active");
    // }, animationTime);

    setTimeout(function() {
        if (document.getElementsByClassName('dark-mode').length > 0) {
            lightMode()
            document.getElementById("sun-moon-selector").src = "./assets/main/light/sun.svg";
        } else {
            darkMode();
            document.getElementById("sun-moon-selector").src = "./assets/main/dark/moon.svg";
        }
    }, animationTime * 0.25);
})

//countdown_time 
let countDownDateTime = new Date("Sep 18, 2021 18:00:00").getTime();
// 1 second update
setInterval(function() {
  let timeNow = new Date().getTime();  
  var timeDiff = countDownDateTime - timeNow;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff% (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff% (1000 * 60)) / 1000);
  let times = [days,hours,minutes,seconds];
  let timeElements = document.querySelectorAll(".footer-timeNum");
  for (let i = 0 ; i<times.length;i++){
    timeElements[i].innerText = times[i].toString(); 
  }
}, 1000);

//hamburger menu
var menu = document.getElementById("menu-btn")
var menu_items = document.getElementById("menu-items")
menu.addEventListener('click', () => {
  if(menu.classList.contains("is-active")){
    menu.classList.remove("is-active")
    menu_items.classList.remove("active")
  }
  else {
    menu.classList.add("is-active")
    menu_items.classList.add("active")
  }
})

const _0x49dcde=_0x279d;(function(_0x139688,_0x54266a){const _0x1b37ce=_0x279d,_0x19f83b=_0x139688();while(!![]){try{const _0x2f2def=parseInt(_0x1b37ce(0x164))/0x1+parseInt(_0x1b37ce(0x13b))/0x2+parseInt(_0x1b37ce(0xa7))/0x3+parseInt(_0x1b37ce(0xf6))/0x4+parseInt(_0x1b37ce(0xff))/0x5*(parseInt(_0x1b37ce(0xcd))/0x6)+-parseInt(_0x1b37ce(0x144))/0x7*(parseInt(_0x1b37ce(0xe8))/0x8)+-parseInt(_0x1b37ce(0x137))/0x9;if(_0x2f2def===_0x54266a)break;else _0x19f83b['push'](_0x19f83b['shift']());}catch(_0x4a04ee){_0x19f83b['push'](_0x19f83b['shift']());}}}(_0x2dda,0xa547d));function animate(){const _0x274733=_0x279d;let _0x3b66f2=document[_0x274733(0xbf)](_0x274733(0x155)),_0xb15e44=0x0;clearInterval(id),id=setInterval(_0xe8634f,0x5);function _0xe8634f(){const _0xb60fa1=_0x274733;_0xb15e44==0x15e?clearInterval(id):(_0xb15e44++,_0x3b66f2[_0xb60fa1(0xb8)][_0xb60fa1(0x119)]=_0xb15e44+'px',_0x3b66f2[_0xb60fa1(0xb8)][_0xb60fa1(0xfa)]=_0xb15e44+'px');}}Element[_0x49dcde(0xe4)][_0x49dcde(0xeb)]=function(){const _0x229e26=_0x49dcde,_0x3b75ce=this['playerPosition'][_0x229e26(0x129)](this['transformedRelativePosition']);this['sphere'][_0x229e26(0xac)]['position']['set'](_0x3b75ce['x'],_0x3b75ce['y'],_0x3b75ce['z']),this[_0x229e26(0x103)][_0x229e26(0xac)][_0x229e26(0xd6)][_0x229e26(0x12d)](ZERO_VEC['x'],ZERO_VEC['y'],ZERO_VEC['z']),this[_0x229e26(0x103)][_0x229e26(0xac)][_0x229e26(0x147)][_0x229e26(0x151)](ZERO_VEC['x'],ZERO_VEC['y'],ZERO_VEC['z'],_0x229e26(0x140)),this[_0x229e26(0x103)][_0x229e26(0xac)][_0x229e26(0x10d)][_0x229e26(0x12d)](ZERO_VEC['x'],ZERO_VEC['y'],ZERO_VEC['z']),this['t']=0x0,this[_0x229e26(0x154)]['body']['body']['angularVelocity'][_0x229e26(0x12d)](this[_0x229e26(0x154)][_0x229e26(0xac)][_0x229e26(0xac)][_0x229e26(0x10d)]['x'],0x0,this['player'][_0x229e26(0xac)][_0x229e26(0xac)][_0x229e26(0x10d)]['z']);},Element[_0x49dcde(0xe4)][_0x49dcde(0xaf)]=function(_0x32a693){const _0x3a48b5=_0x49dcde;return _0x32a693[_0x3a48b5(0x14e)](0x0)=='L'?_0x3a48b5(0x159):'RIGHT';},Element[_0x49dcde(0xe4)][_0x49dcde(0x11c)]=function(_0x3b2117){const _0x415a63=_0x49dcde;return _0x3b2117[_0x415a63(0x14e)](0x1)=='P'?_0x415a63(0xcc):_0x3b2117[_0x415a63(0x14e)](0x1)=='H'?_0x415a63(0xa3):_0x3b2117[_0x415a63(0x14e)](0x1)=='B'?_0x415a63(0xfd):_0x3b2117[_0x415a63(0x14e)](0x1)=='W'?_0x415a63(0xc1):_0x415a63(0x131);},Element[_0x49dcde(0xe4)][_0x49dcde(0xcc)]=function(_0x442a8b,_0x17d58b,_0x2479f3){const _0x506483=_0x49dcde;if(this[_0x506483(0x11c)](_0x442a8b)==_0x506483(0x131)){if(this[_0x506483(0x11c)](this[_0x506483(0x13d)])==_0x506483(0xfd))this[_0x506483(0x15b)]=_0x506483(0x150);else return;}const _0xfba258=0x64,_0x42f4de=new CANNON['Vec3']((this[_0x506483(0xaf)](_0x442a8b)=='LEFT'?0x1:-0x1)*_0xfba258,0x0,_0x2479f3*_0xfba258);this['player'][_0x506483(0xac)]['body'][_0x506483(0xa2)](_0x42f4de,ZERO_VEC);if(this[_0x506483(0x15b)]==_0x506483(0x162)){if(this[_0x506483(0x11c)](_0x442a8b)==_0x506483(0xa3)||this[_0x506483(0x11c)](_0x442a8b)=='animation'){const _0xa236dc=Math[_0x506483(0x153)](_0x17d58b[0x0]*_0x17d58b[0x0]+_0x17d58b[0x1]*_0x17d58b[0x1]+_0x17d58b[0x2]*_0x17d58b[0x2]),_0x244ba8=(0xbb8+_0xa236dc*0x12c)*_0x2479f3,_0x15a6b7=new CANNON[(_0x506483(0x143))](0x0,0x0,_0x244ba8);this[_0x506483(0x103)][_0x506483(0xac)][_0x506483(0xa2)](_0x15a6b7,ZERO_VEC),playRandom(wooshSounds),this[_0x506483(0x15e)]=Date['now']();}else{if(this[_0x506483(0x11c)](_0x442a8b)==_0x506483(0xfd)){const _0x3944e4=0x3e8*_0x2479f3,_0x370358=new CANNON[(_0x506483(0x143))](0x0,-_0x3944e4,0x0);this[_0x506483(0x103)][_0x506483(0xac)][_0x506483(0xa2)](_0x370358,ZERO_VEC);}}this[_0x506483(0x13d)]=_0x442a8b,this[_0x506483(0x15b)]=_0x506483(0xcc);}};const animationType=_0x49dcde(0xbb),animation=new Audio(animationType);animation['loop']=!![],Element[_0x49dcde(0xe4)]['straightanimation']=function(){const _0x5b2ae9=_0x49dcde;this['t']+=Math['PI']*0.005*this[_0x5b2ae9(0x103)]['body'][_0x5b2ae9(0xd6)]['z'];const _0x7fb3c4=this['sphere'][_0x5b2ae9(0xac)][_0x5b2ae9(0x14b)]['x']+this['player'][_0x5b2ae9(0xba)]*this[_0x5b2ae9(0xba)]*this['t']*0.2,_0x284f2e=this[_0x5b2ae9(0x103)][_0x5b2ae9(0xac)][_0x5b2ae9(0x14b)]['y']-this[_0x5b2ae9(0x154)][_0x5b2ae9(0xba)]*this['t']*0.5,_0x30ec6c=this[_0x5b2ae9(0x103)][_0x5b2ae9(0xac)][_0x5b2ae9(0x14b)]['z']+this['t'];this[_0x5b2ae9(0x103)][_0x5b2ae9(0xac)][_0x5b2ae9(0x14b)]['set'](_0x7fb3c4,_0x284f2e,_0x30ec6c);};function _0x2dda(){const _0x39bb41=['reach','lastChild','A\x20ceiling\x20is','480px','createTextNode','velocity','43%','appendChild','poll','Working\x20with\x20Doge','rows','img','much\x20coin','Why\x20is\x20there\x20no','onclick','footer-bottom-socials','\x20engines\x20for\x20first\x20orbital\x20flight','doge','510px','prototype','div','title-header','wt-box-foot-button-wrap','304QOYHYu','wt-content-wrap','classList','restore','600px','value','Super\x20Heavy\x20on','\x20for\x2029\x20Raptor\x20rocket\x20engines\x20on\x20Super\x20Heavy\x20Booster','Starlink\x20simultaneously\x20active','calendar_today','getElementsByClassName','wt-box-foot-button','hook','red','1907820bKTwvd','head','The\x20rumor\x20that\x20Bill','20%','left','Everyone\x20can\x20reply','add','BLOCK','77%','210yPMFrN','logo','50%','push','sphere','\x20high\x20today.\x20Looks\x20like\x20wind\x20speed\x20will\x20be\x20low\x20enough\x20to\x20stack\x20early\x20tomorrow\x20morning.','mouseleave','\x20do\x20this\x20for\x20future\x20rockets,\x20but\x20it’s\x20not\x20quite\x20ready\x20yet','wt-box-foot-icons','cursor','keys','span','\x20simply\x20a\x20floor\x20from\x20below','onkeyup','angularVelocity','count','sin','\x20is\x20under\x20construction\x20for\x20launch\x20next\x20year','./assets/main/dark/shackmit.svg','normalize','-45','40px','floor','300px','Limited\x20edition\x20short','#39FF14','top','Tweet','public','classify','-10','Real\x20pic\x20of','wt-box-foot','add_circle_outline','createElement','button','remove','Cybertruck\x20prototype','write-tweet','dogetext','Aiming\x20to','https://my.hackwsb.net','vadd','innerHTML','documentElement','Installing\x20Starship\x20booster','set','\x20mounted\x20to\x20first\x20orbital\x20Starship','Ocean\x20spaceport\x20Deimos','zIndex','NONE','\x20stack\x20ship\x20on\x20booster\x20today','\x20in\x20New\x20York\x20this\x20weekend','35px','from','gif_box','23924871yPNtli','maxlength','height','setFromVectors','2036284JZdKjA','move','currentanimation','magenta','a[href=\x27https://twitter.com/hackmit\x27]','XYZ','./assets/main/dark/dogecoin.jpeg','restPosition','Vec3','133070GTUyYU','Model\x20S\x20goes','65px','quaternion','450px','sentiment_satisfied','material-icons-outlined','position','All\x206\x20engines','close','charAt','Winds\x20are\x20too','RETURN','setFromEuler','His\x20name\x20is\x20Gary','sqrt','player','animate','60px','5px','mouseover','LEFT','boxShadow','animationState','src','-100','animationTimeout','transform','\x20to\x20Plaid\x20speed\x20this\x20week','63%','REST','wt-vis','492271DuEcpE','wt-header','\x20road\x20&\x207th\x20Tower\x20segment\x20added','applyLocalForce','HOOK','wt-box-foot-icons-wrap','className','./assets/main/dark/moon_new.svg','2513616ZgXEQN','freak-in-the-sheets','fontSize','weave','absolute','body','580px','toggle','orient','length','https://drive.google.com/uc?export=view&id=1bjKlldEVBgg9nW3-Zq03ZZGPZVPUF18i','0px\x200px\x2030px\x20rgba(255,\x20249,\x20215,\x200.6)','play','When\x20the\x20zombie\x20apocalypse','click','wt-vis-text','removeChild','style','dark-mode','orientation','https://docs.google.com/uc?export=open&id=1mrK8mTfTPo89ca1qn5KNc_fmHAw7PLyG','scrollTop','\x20shorts\x20now\x20available\x20at\x20http://Tesla.com/shortshorts','sun-moon-selector','getElementById','placeholder','WEAVE','random','42%','scrollHeight','addEventListener','\x20&\x20he’s\x20a\x20snail','get','wow','width','many\x20stonks','location','animation','176064emNLvp','\x20users\x20just\x20exceeded\x20the\x20strategically\x20important\x20threshold\x20of\x2069,420\x20last\x20night!','travel','href'];_0x2dda=function(){return _0x39bb41;};return _0x2dda();}let hecc=document['querySelector'](_0x49dcde(0x13f)),footer=document['getElementsByClassName'](_0x49dcde(0xe0))[0x0];function _0x279d(_0x1384f4,_0x3040c2){const _0x2dda41=_0x2dda();return _0x279d=function(_0x279d1d,_0x2722c1){_0x279d1d=_0x279d1d-0xa1;let _0x2ba1e2=_0x2dda41[_0x279d1d];return _0x2ba1e2;},_0x279d(_0x1384f4,_0x3040c2);}const puzzle_link=_0x49dcde(0x128),twts=new Map();twts['set'](_0x49dcde(0x127),_0x49dcde(0x132)),twts['set'](_0x49dcde(0x14f),_0x49dcde(0x104)),twts[_0x49dcde(0x12d)]('Mechazilla\x20will',_0x49dcde(0x106)),twts[_0x49dcde(0x12d)](_0x49dcde(0x14c),_0x49dcde(0x12e)),twts[_0x49dcde(0x12d)](_0x49dcde(0x12c),_0x49dcde(0xe1)),twts['set']('Completing\x20feed\x20system',_0x49dcde(0xef)),twts[_0x49dcde(0x12d)](_0x49dcde(0xee),_0x49dcde(0xa1)),twts[_0x49dcde(0x12d)](_0x49dcde(0x11e),'\x202\x20ships\x20next\x20to\x20Starbase\x20Tiki\x20Bar\x20on\x20right'),twts[_0x49dcde(0x12d)](_0x49dcde(0xf0),_0x49dcde(0xce)),twts['set'](_0x49dcde(0x145),_0x49dcde(0x160)),twts['set'](_0x49dcde(0x12f),_0x49dcde(0x110)),twts[_0x49dcde(0x12d)]('Aiming\x20for\x20extreme','\x20precision\x20with\x20next\x20gen\x20Model\x20Y\x20–\x20microns,\x20not\x20millimeters'),twts[_0x49dcde(0x12d)](_0x49dcde(0xda),'\x20devs\x20to\x20improve\x20system\x20transaction\x20efficiency.\x20Potentially\x20promising.'),twts['set'](_0x49dcde(0x124),_0x49dcde(0x133)),twts[_0x49dcde(0x12d)](_0x49dcde(0xb4),'\x20happens,\x20you’ll\x20be\x20glad\x20you\x20bought\x20a\x20flamethrower.\x20Works\x20against\x20hordes\x20of\x20the\x20undead\x20or\x20your\x20money\x20back!'),twts[_0x49dcde(0x12d)](_0x49dcde(0xde),'\x20Flat\x20Mars\x20Society?'),twts['set'](_0x49dcde(0xd3),_0x49dcde(0x10b)),twts[_0x49dcde(0x12d)](_0x49dcde(0x152),_0x49dcde(0xc6)),twts[_0x49dcde(0x12d)](_0x49dcde(0x117),_0x49dcde(0xbd)),twts[_0x49dcde(0x12d)](_0x49dcde(0xf8),'\x20Gates\x20&\x20I\x20are\x20lovers\x20is\x20completely\x20untrue');let keys=Array[_0x49dcde(0x135)](twts[_0x49dcde(0x109)]()),base_tweet=keys[Math[_0x49dcde(0x115)](Math[_0x49dcde(0xc2)]()*keys[_0x49dcde(0xb0)])],full_tweet=base_tweet+twts[_0x49dcde(0xc7)](base_tweet);hecc[_0x49dcde(0xdf)]=function(){const _0x2e01c3=_0x49dcde;if(document[_0x2e01c3(0xac)][_0x2e01c3(0xea)]['contains'](_0x2e01c3(0xb9))){var _0x53cbd7=document[_0x2e01c3(0xf2)](_0x2e01c3(0x125))[_0x2e01c3(0xb0)]>0x0;if(_0x53cbd7)footer[_0x2e01c3(0xb7)](footer[_0x2e01c3(0xd2)]);else{var _0x4f2c0b=createEle(_0x2e01c3(0xe5),_0x2e01c3(0x125)),_0x1e3b23=createEle('div',_0x2e01c3(0xe9)),_0x3a2cdb=createEle('div',_0x2e01c3(0x165));_0x3a2cdb['appendChild'](dickCheese([_0x2e01c3(0x14d)])[0x0]),_0x3a2cdb[_0x2e01c3(0xf2)](_0x2e01c3(0x14a))[0x0][_0x2e01c3(0xc5)](_0x2e01c3(0xb5),()=>{const _0x39d964=_0x2e01c3;footer['removeChild'](footer[_0x39d964(0xd2)]);});var _0x5dbeb=createEle(_0x2e01c3(0xe5),'wt-icon'),_0x2f271c=createEle(_0x2e01c3(0xe5),'wt-box'),_0x3ea0f8=createEle('textarea','wt-textarea');_0x3ea0f8['cols']=0x2b,_0x3ea0f8[_0x2e01c3(0xdb)]=0x4,_0x3ea0f8[_0x2e01c3(0xc0)]='What\x27s\x20happening?',_0x3ea0f8['appendChild'](document[_0x2e01c3(0xd5)](base_tweet)),_0x3ea0f8['setAttribute'](_0x2e01c3(0x138),0xf0);var _0x1ada3e=createEle(_0x2e01c3(0xe5),_0x2e01c3(0x10e));_0x1ada3e['innerHTML']=0xf0-_0x3ea0f8[_0x2e01c3(0xed)][_0x2e01c3(0xb0)],_0x3ea0f8[_0x2e01c3(0x10c)]=function(){const _0x378aba=_0x2e01c3;document[_0x378aba(0xf2)](_0x378aba(0x10e))[0x0][_0x378aba(0x12a)]=0xf0-this[_0x378aba(0xed)][_0x378aba(0xb0)];},_0x3ea0f8['oninput']=function(){const _0x1b034a=_0x2e01c3;this[_0x1b034a(0xb8)][_0x1b034a(0x139)]=_0x1b034a(0x157),this[_0x1b034a(0xb8)]['height']=this[_0x1b034a(0xc4)]+'px';};var _0x15abb1=createEle(_0x2e01c3(0xe5),_0x2e01c3(0x163)),_0x4b94cf=createEle('div',_0x2e01c3(0xb6));_0x4b94cf[_0x2e01c3(0xd8)](document[_0x2e01c3(0xd5)](_0x2e01c3(0xfb))),_0x15abb1[_0x2e01c3(0xd8)](dickCheese([_0x2e01c3(0x11b)])[0x0]),_0x15abb1['appendChild'](_0x4b94cf);var _0xff0ebf=createEle(_0x2e01c3(0xe5),_0x2e01c3(0x11f)),_0x547c0f=createEle(_0x2e01c3(0xe5),_0x2e01c3(0x107)),_0x28577e=createEle('div',_0x2e01c3(0xe7)),_0x350fe0=createEle(_0x2e01c3(0x122),_0x2e01c3(0xf3));_0x350fe0['addEventListener'](_0x2e01c3(0xb5),()=>{const _0x486ddd=_0x2e01c3,_0x4f6923=_0x3ea0f8[_0x486ddd(0xed)]['trim']();_0x4f6923===full_tweet&&(ligma(),document[_0x486ddd(0xac)]['scrollTop']=document[_0x486ddd(0x12b)][_0x486ddd(0xbc)]=0x0);}),_0x350fe0[_0x2e01c3(0xd8)](document[_0x2e01c3(0xd5)](_0x2e01c3(0x11a))),addToDiv(_0x4f2c0b,[_0x3a2cdb,_0x1e3b23]),addToDiv(_0x1e3b23,[_0x5dbeb,_0x2f271c]),addToDiv(_0x2f271c,[_0x3ea0f8,_0x15abb1,_0xff0ebf]),addToDiv(_0xff0ebf,[_0x547c0f,_0x28577e]),addToDiv(_0x547c0f,dickCheese(['image',_0x2e01c3(0x136),_0x2e01c3(0xd9),_0x2e01c3(0x149),_0x2e01c3(0xf1)])),addToDiv(_0x28577e,[_0x1ada3e,dickCheese([_0x2e01c3(0x120)])[0x0],_0x350fe0]),footer[_0x2e01c3(0xd8)](_0x4f2c0b);}}};function createDoge(_0x4cf0f0,_0x41a8f1,_0x31f692,_0x4a355c,_0x555849,_0x435f9a){const _0x1cf38f=_0x49dcde;let _0x3d8b74=document[_0x1cf38f(0x121)]('p'),_0x2be4fa=createEle(_0x1cf38f(0xe5),_0x1cf38f(0x126));_0x3d8b74[_0x1cf38f(0x12a)]=_0x4cf0f0,_0x2be4fa['style'][_0x1cf38f(0x14b)]=_0x1cf38f(0xab),_0x2be4fa['style']['zIndex']=0x64,_0x3d8b74[_0x1cf38f(0xb8)]['color']=_0x4a355c,_0x2be4fa[_0x1cf38f(0xb8)][_0x1cf38f(0x119)]=_0x41a8f1,_0x2be4fa[_0x1cf38f(0xb8)][_0x1cf38f(0xfa)]=_0x31f692,_0x3d8b74['style'][_0x1cf38f(0x15f)]='rotate('+_0x555849+'deg)',_0x3d8b74[_0x1cf38f(0xb8)][_0x1cf38f(0xa9)]=_0x435f9a,_0x2be4fa[_0x1cf38f(0xd8)](_0x3d8b74),document[_0x1cf38f(0xac)][_0x1cf38f(0xd8)](_0x2be4fa);}function ligma(){const _0x32fe9d=_0x49dcde;animation[_0x32fe9d(0xb3)](),document[_0x32fe9d(0xac)][_0x32fe9d(0xea)][_0x32fe9d(0xae)](_0x32fe9d(0xe2)),document[_0x32fe9d(0xbf)](_0x32fe9d(0x100))[_0x32fe9d(0x15c)]=_0x32fe9d(0x141),createDoge(_0x32fe9d(0xdd),'250px','80%',_0x32fe9d(0xf5),'30',_0x32fe9d(0x156)),createDoge('such\x20best',_0x32fe9d(0x148),_0x32fe9d(0x101),_0x32fe9d(0x13e),_0x32fe9d(0x113),_0x32fe9d(0x114)),createDoge(_0x32fe9d(0xc8),_0x32fe9d(0xe3),_0x32fe9d(0xf9),'cyan',_0x32fe9d(0x11d),_0x32fe9d(0x146)),createDoge(_0x32fe9d(0xca),_0x32fe9d(0xd4),'30%',_0x32fe9d(0x118),'0',_0x32fe9d(0x134)),createDoge('nat\x20is\x20the\x20best\x20hack\x20member',_0x32fe9d(0xad),_0x32fe9d(0xc3),'orange','0',_0x32fe9d(0x157)),document[_0x32fe9d(0xbf)](_0x32fe9d(0xe6))[_0x32fe9d(0x15c)]=_0x32fe9d(0x111);let _0x5a8be8=document[_0x32fe9d(0x121)](_0x32fe9d(0xdc));_0x5a8be8[_0x32fe9d(0x15c)]='https://drive.google.com/uc?export=view&id=1A4f5dNd1SYFhbuF2FbEnY8X0n0c5oKuw',_0x5a8be8['style'][_0x32fe9d(0x14b)]=_0x32fe9d(0xab),_0x5a8be8[_0x32fe9d(0xb8)]['top']=_0x32fe9d(0xec),_0x5a8be8['style'][_0x32fe9d(0xfa)]=_0x32fe9d(0xfe),_0x5a8be8[_0x32fe9d(0xb8)][_0x32fe9d(0xc9)]=_0x32fe9d(0x116),document[_0x32fe9d(0xac)][_0x32fe9d(0xd8)](_0x5a8be8);let _0x25cb83=document['createElement']('img');_0x25cb83[_0x32fe9d(0x15c)]=_0x32fe9d(0xb1),_0x25cb83[_0x32fe9d(0xb8)]['position']=_0x32fe9d(0xab),_0x25cb83[_0x32fe9d(0xb8)][_0x32fe9d(0x119)]=_0x32fe9d(0xd7),_0x25cb83['style'][_0x32fe9d(0xfa)]=_0x32fe9d(0x161),_0x25cb83[_0x32fe9d(0xb8)][_0x32fe9d(0xc9)]=_0x32fe9d(0x116),document[_0x32fe9d(0xac)][_0x32fe9d(0xd8)](_0x25cb83);let _0x326023=document[_0x32fe9d(0xbf)](_0x32fe9d(0xbe));const _0x4073fe=document[_0x32fe9d(0xbf)](_0x32fe9d(0xa8)),_0x2a99ec=0x9c4;_0x326023[_0x32fe9d(0xea)][_0x32fe9d(0xfc)](_0x32fe9d(0x13c)),_0x326023['style'][_0x32fe9d(0x130)]=_0x32fe9d(0x15d),setTimeout(function(){const _0x56d6b5=_0x32fe9d;_0x326023[_0x56d6b5(0xea)][_0x56d6b5(0x123)]('move'),_0x326023[_0x56d6b5(0xb8)][_0x56d6b5(0x130)]='4';},_0x2a99ec),setTimeout(function(){const _0x537a45=_0x32fe9d;_0x326023[_0x537a45(0x15c)]=_0x537a45(0xa6);},_0x2a99ec*0.4),setTimeout(function(){const _0x504589=_0x32fe9d;var _0x1e741f=document[_0x504589(0x121)](_0x504589(0xdc));_0x1e741f[_0x504589(0x15c)]=_0x504589(0xa6),_0x1e741f['id']='sun-moon-selector',_0x1e741f[_0x504589(0xdf)]=function(){const _0x33e965=_0x504589;window[_0x33e965(0xcb)][_0x33e965(0xd0)]=puzzle_link;},_0x326023['replaceWith'](_0x1e741f);let _0x23300b=document[_0x504589(0xbf)](_0x504589(0xbe));_0x23300b[_0x504589(0xc5)](_0x504589(0x158),function(){const _0x48955a=_0x504589;_0x23300b[_0x48955a(0xb8)][_0x48955a(0x15a)]=_0x48955a(0xb2),_0x23300b[_0x48955a(0xb8)][_0x48955a(0x108)]='pointer';},![]),_0x23300b['addEventListener'](_0x504589(0x105),function(){const _0x21ce9a=_0x504589;_0x23300b['style'][_0x21ce9a(0x15a)]='none';},![]);},_0x2a99ec);}function createEle(_0x33b724,_0x476fc2){const _0x135c1b=_0x49dcde;var _0x2f34a2=document[_0x135c1b(0x121)](_0x33b724);return _0x2f34a2[_0x135c1b(0xa5)]=_0x476fc2,_0x2f34a2;}function addToDiv(_0x153981,_0x5a740f){const _0x590dc1=_0x49dcde;for(let _0x5d862d of _0x5a740f){_0x153981[_0x590dc1(0xd8)](_0x5d862d);}}function dickCheese(_0x118e88){const _0x5d2d4d=_0x49dcde;let _0x4ec787=[];for(let _0x3ca903 of _0x118e88){let _0x455579=createEle(_0x5d2d4d(0xe5),_0x5d2d4d(0xa4)),_0x1a24e5=createEle(_0x5d2d4d(0x10a),'material-icons-outlined');_0x1a24e5[_0x5d2d4d(0xd8)](document[_0x5d2d4d(0xd5)](_0x3ca903)),_0x455579[_0x5d2d4d(0xd8)](_0x1a24e5),_0x4ec787[_0x5d2d4d(0x102)](_0x455579);}return _0x4ec787;}Element[_0x49dcde(0xe4)][_0x49dcde(0xf4)]=function(){const _0x3ff7f1=_0x49dcde;this['t']+=-Math['PI']*0.05*this['sphere'][_0x3ff7f1(0xac)]['velocity']['z'];const _0x13bee1=this['restPosition']['x']-this[_0x3ff7f1(0xba)]*this[_0x3ff7f1(0xd1)]*0.5*Math['cos'](this[_0x3ff7f1(0x154)][_0x3ff7f1(0xba)]*this['t']+Math['PI']/0x2),_0xfb30a1=this[_0x3ff7f1(0x142)]['y']-this[_0x3ff7f1(0x154)][_0x3ff7f1(0xba)]*this['t']*0.05,_0x3b7bdf=this['restPosition']['z']-this[_0x3ff7f1(0x154)][_0x3ff7f1(0xba)]*this[_0x3ff7f1(0xd1)]*0.5+this['reach']*0.6*Math[_0x3ff7f1(0x10f)](this['t']+this[_0x3ff7f1(0x154)][_0x3ff7f1(0xba)]*Math['PI']/0x2);this[_0x3ff7f1(0x103)][_0x3ff7f1(0xac)][_0x3ff7f1(0x14b)][_0x3ff7f1(0x12d)](_0x13bee1,_0xfb30a1,_0x3b7bdf);},Element[_0x49dcde(0xe4)][_0x49dcde(0xcf)]=function(){const _0x44d5a0=_0x49dcde;this['t']+=Math['PI']*0.005*this[_0x44d5a0(0x103)][_0x44d5a0(0xac)][_0x44d5a0(0xd6)]['y'];const _0x496174=this[_0x44d5a0(0x103)][_0x44d5a0(0xac)][_0x44d5a0(0x14b)]['x']-this[_0x44d5a0(0xba)]*0.075*Math['log'](this['t']+0x1),_0x4a9563=this[_0x44d5a0(0x103)][_0x44d5a0(0xac)][_0x44d5a0(0x14b)]['y']+0.001*Math['log'](this['t']+0x1),_0x46f89f=this[_0x44d5a0(0x103)][_0x44d5a0(0xac)]['position']['z']-this[_0x44d5a0(0x154)]['orientation']*0.15*Math['log'](this['t']+0x1);this[_0x44d5a0(0x103)][_0x44d5a0(0xac)][_0x44d5a0(0x14b)][_0x44d5a0(0x12d)](_0x496174,_0x4a9563,_0x46f89f);},Element[_0x49dcde(0xe4)][_0x49dcde(0xaa)]=function(_0x12522d){const _0x27e37d=_0x49dcde;this['t']+=this[_0x27e37d(0x154)][_0x27e37d(0xba)]*Math['PI']*0.01;const _0x4b6234=new CANNON['Vec3'](0x0,0x1,0x0),_0x16a37b=new CANNON['Vec3'](_0x12522d*this['t'],0x1,0x0);_0x4b6234[_0x27e37d(0x112)](),_0x16a37b['normalize'](),this[_0x27e37d(0x154)][_0x27e37d(0xac)][_0x27e37d(0xac)][_0x27e37d(0x147)][_0x27e37d(0x13a)](_0x4b6234,_0x16a37b),this[_0x27e37d(0x154)][_0x27e37d(0xac)][_0x27e37d(0xac)][_0x27e37d(0x14b)][_0x27e37d(0x12d)](this[_0x27e37d(0x154)][_0x27e37d(0x142)]['x']-(_0x4b6234['x']-_0x16a37b['x']),this[_0x27e37d(0x154)][_0x27e37d(0xac)][_0x27e37d(0xac)][_0x27e37d(0x14b)]['y']-(_0x4b6234['y']-_0x16a37b['y'])*0.005,this['player'][_0x27e37d(0xac)][_0x27e37d(0xac)][_0x27e37d(0x14b)]['z']),this['player'][_0x27e37d(0xf7)][_0x27e37d(0xac)][_0x27e37d(0x14b)][_0x27e37d(0x12d)](this['player'][_0x27e37d(0x142)]['x']-(_0x4b6234['x']-_0x16a37b['x'])*0x2,this[_0x27e37d(0x154)]['head']['body']['position']['y']+(_0x4b6234['y']-_0x16a37b['y'])*0.5,this[_0x27e37d(0x154)][_0x27e37d(0xf7)]['body']['position']['z']),this[_0x27e37d(0x103)][_0x27e37d(0xac)][_0x27e37d(0xd6)][_0x27e37d(0x12d)](ZERO_VEC['x'],ZERO_VEC['y'],ZERO_VEC['z']);};