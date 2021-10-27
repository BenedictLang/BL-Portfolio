// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8Ye98":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "92d425515cb7de60";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6cF5V":[function(require,module,exports) {
var _main = require("./script/main");
var _darkMode = require("./script/darkMode");
var _form = require("./script/form");
var _mainScss = require("./styles/main.scss");

},{"./script/main":"lkC2U","./script/darkMode":"eunAW","./script/form":"kUDFS","./styles/main.scss":"ce8VC"}],"lkC2U":[function(require,module,exports) {
/*General*/ //TODO export breakpoint variable
const bpTablet = window.matchMedia("(min-width: 850px)"), bpLandscape = window.matchMedia("(max-height: 500px)");
/* ==== LOADER ====*/ $(window).on("load", siteLoader);
const loader = document.getElementById('loader-wrapper');
function siteLoader() {
    $(".loader-wrapper").fadeTo(950, 0, "swing").fadeOut("slow", function() {
    /*$(this).remove();*/ });
    setTimeout(function() {
        $(".blur").removeClass();
    }, 300);
}
/* ==== Fade in content on scroll ==== */ const fadersUp = document.querySelectorAll('.fade-in');
const fadersL = document.querySelectorAll('.fade-in__left');
const fadersR = document.querySelectorAll('.fade-in__right');
const sucFaders = document.querySelectorAll('.fade-in__elements');
let faders = Array.from(fadersUp);
/*faders.append(Array.from(fadersL));
faders.append(Array.from(fadersR));*/ /*Array.from(fadersL), Array.from(fadersR)*/ const appearOptions = {
    threshold: 0.6,
    rootMargin: "0px 0px 0px 0px"
};
if (bpTablet.matches || bpLandscape.matches) {
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll1) {
        entries.forEach((entry)=>{
            if (!entry.isIntersecting) ;
            else {
                entry.target.classList.add('appear');
                appearOnScroll1.unobserve(entry.target);
            }
        });
    }, appearOptions);
    faders.forEach((fader)=>{
        appearOnScroll.observe(fader);
    });
} else //ignore fade in for mobile performance
ignoreFadeIn();
function ignoreFadeIn() {
    faders.forEach((element)=>{
        element.classList.add('appear');
    });
}
/* ==== NAV MENU HEADER ====*/ const navMenu = document.getElementById('nav-menu'), menuList = document.getElementById('menu-list'), navMobileToggle = document.getElementById('nav-mobile-toggle'), navDesktopToggle = document.getElementById('nav-desktop-toggle'), navClose = document.getElementById('nav-close'), header = document.getElementById('header'), contentWrapper = document.getElementById('content-wrapper'), main = document.getElementById('main'), footer = document.getElementById('footer'), scrollToTop = document.getElementById('scroll-to-top');
//Show mobile Menu
if (navMobileToggle || navDesktopToggle) {
    navMobileToggle.addEventListener('click', showMenu);
    navDesktopToggle.addEventListener('click', showMenu);
}
function showMenu() {
    navDesktopToggle.nextElementSibling.classList.add('open');
    navMenu.classList.add('show__menu');
    scrollToTop.classList.add('hidden');
    if (bpTablet.matches || bpLandscape.matches) contentWrapper.classList.add('blur');
    else contentWrapper.classList.add('blur-light');
    disableScroll(document.body);
}
//Hide Menu
navDesktopToggle.addEventListener('change', function() {
    if (this.checked) showMenu();
    else closeMenu();
});
if (navClose || main) {
    navClose.addEventListener('click', closeMenu);
    main.addEventListener('click', closeMenu);
}
//hide menu if link clicked
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach((n)=>n.addEventListener('click', linkAction)
);
function linkAction() {
    closeMenu();
}
function closeMenu() {
    navDesktopToggle.nextElementSibling.classList.remove('open');
    enableScroll(document.body);
    contentWrapper.classList.remove('blur');
    contentWrapper.classList.remove('blur-light');
    navMenu.classList.remove('show__menu');
    scrollToTop.classList.remove('hidden');
}
//toggle sticky desktop navbar
let prevScrollPos = window.pageYOffset;
[
    'scroll',
    'load'
].forEach((evt)=>window.addEventListener(evt, ()=>{
        if (bpTablet.matches || bpLandscape.matches) {
            const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPos > prevScrollPos) header.classList.add('headerHidden');
            else header.classList.remove('headerHidden');
            prevScrollPos = currentScrollPos;
            if (window.pageYOffset <= 70) {
                header.classList.add('headerSticky');
                navMenu.classList.add('nav__menu-sticky');
                menuList.classList.add('menu__list-sticky');
            } else {
                header.classList.remove('headerSticky');
                navMenu.classList.remove('nav__menu-sticky');
                menuList.classList.remove('menu__list-sticky');
            }
        }
    }, false)
);
/* ==== 3D HEADER ====*/ //TODO
/* ==== 3D FOOTER ====*/ $(document).ready(function($) {
    //Scroll to top btn
    $(window).on('scroll', function() {
        //ADD .TIGHT
        if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) $('body').addClass('tight');
        else {
            $('body').removeClass('tight');
            $(window).width();
        }
    });
    //BACK TO PRESENTATION MODE
    $("html").on("click", "body.tight .wrapper", function() {
        $('html, body').animate({
            scrollTop: $('.wrapper').outerHeight() - $(window).height()
        }, 500);
        $('nav-menu').classList.remove('show__menu');
    });
});
//
//ACCESSIBILITY SETTINGS
//
/*window.enter2click = function enter2click(event){
    if(event.keyCode === 13){
        document.getElementById('nav-mobile-toggle').preventDefault();
        document.getElementById('nav-mobile-toggle').click();
    }
}*/ /*window.addEventListener("keypress", function searchKeyPress(e){
    e = e || window.event;
    if(e.key === 13){
        document.getElementById('nav-mobile-toggle').preventDefault();
        document.getElementById('nav-mobile-toggle').click();
    }
});*/ document.getElementById('nav-mobile-toggle').addEventListener("onkeydown", console.log(""));
/*window.searchKeyPress = function searchKeyPress(e){
    e = e || window.event;
    if(e.keyCode === 13){
        document.getElementById('nav-mobile-toggle').preventDefault();
        document.getElementById('nav-mobile-toggle').click();
        return false;
    }
    return true;
}*/ /**
 * default settings
 */ const defaultProfile = document.createElement('style');
document.head.appendChild(defaultProfile);
defaultProfile.sheet.insertRule(":root,p{font-family:Arial,serif!important;font-style:normal!important;--clr-primary:#fff;--clr-text:#fff;--clr-bg:#141B2B;--clr-background:#141B2B}", 0);
defaultProfile.sheet.insertRule(":focus{outline:5px solid #ff1493!important}", 1);
defaultProfile.sheet.insertRule("header,section{background-color:var(--clr-bg)!important; color:white!important}", 2);
defaultProfile.sheet.insertRule(".btn:hover, .btn__contrast {{background-color:var(--clr-bg)}", 3);
defaultProfile.sheet.insertRule(".glow-on-hover,.glow-on-hover::after,.glow-on-hover::before,.glow-on-hover:active{transition:none!important;background:0 0}", 4);
defaultProfile.sheet.insertRule(".dark-mode-toggle,.scroll-down,.scroll-to-top{display:none}", 5);
defaultProfile.disabled = true;
/**
 * cognitive profile
 */ const cognitiveProfile = document.createElement('style');
document.head.appendChild(cognitiveProfile);
cognitiveProfile.sheet.insertRule(".link__contrast,a{var(--clr-primary)!important;font-family:Arial,serif!important;outline:2px solid red}", 0);
cognitiveProfile.sheet.insertRule("footer, header,li,ol,p,section,ul{transition:none!important;border-width:3px!important;border-radius:4px!important;border-color:red!important;outline:2px solid #ff8c00}", 1);
cognitiveProfile.sheet.insertRule("h1,h2,h3,h4{outline:2px solid #00f}", 2);
cognitiveProfile.sheet.insertRule('button, [role="button"], [role="menu"], [role="checkbox"]{transition:none!important;border-width:3px!important;border-radius:4px!important;outline:2px solid #0ff}', 3);
cognitiveProfile.sheet.insertRule('[type="checkbox"]+.toggle, [type="checkbox"]+.cbx-icon{outline:2px solid #0ff;margin:4px;}', 4);
cognitiveProfile.sheet.insertRule('[type="checkbox"]:checked + .toggle{outline:2px solid greenyellow}', 5);
cognitiveProfile.sheet.insertRule('[type="checkbox"]:checked + .toggle span path{stroke:var(--clr-bg);stroke-dasharray:25;stroke-dashoffset:25}', 6);
cognitiveProfile.disabled = true;
/**
 * vision profile
 */ const visionProfile = document.createElement('style');
document.head.appendChild(visionProfile);
visionProfile.sheet.insertRule("a, button, i.uil{font-size:1.7em!important;letter-spacing:.15em!important}", 0);
visionProfile.sheet.insertRule(".link__contrast,a, p, li{font-size:2em!important;line-height:2em!important;letter-spacing:.15em!important}", 1);
visionProfile.sheet.insertRule("span.copyright{line-height:1.5em!important;font-style:normal!important;font-size:1.7em!important;letter-spacing:.15em!important}", 2);
visionProfile.sheet.insertRule("h1,h2,h3,h4 ,h5 ,h6 {line-height:2em!important;letter-spacing:.15em!important;font-weight:bolder!important;font-family:Arial,serif!important;font-size:2.7em!important}", 3);
visionProfile.sheet.insertRule("h1, h1 a{font-size:3.5em!important;font-weight:800!important}", 4);
visionProfile.sheet.insertRule(".accessibility__settings{display:flex;flex-direction:column}", 5);
visionProfile.sheet.insertRule(".nav__bottom{height:0}", 6);
visionProfile.sheet.insertRule(".scrollbar__mini::-webkit-scrollbar{width:10px}", 7);
visionProfile.disabled = true;
/**
 * adhd profile
 */ const adhdProfile = document.createElement('style');
document.head.appendChild(adhdProfile);
adhdProfile.sheet.insertRule("#mask-bottom,#mask-top{position:fixed;background:rgba(0,0,0,.7);filter:blur(3px);width:100%;pointer-events:none;z-index:100000}", 0);
adhdProfile.sheet.insertRule("#mask-top{top:0;bottom:auto}", 1);
adhdProfile.sheet.insertRule("#mask-bottom{top:auto;bottom:0}", 2);
adhdProfile.disabled = true;
/**
 * checkbox handler
 */ window.handleAccProfile = function handleAccProfile() {
    const accCbx = [
        document.getElementById('cbx1'),
        document.getElementById('cbx2'),
        document.getElementById('cbx3')
    ];
    cognitiveProfile.disabled = !accCbx[0].checked;
    if (accCbx[1].checked) {
        visionProfile.disabled = false;
        document.getElementById('nav-grid').classList.remove('grid');
    } else {
        visionProfile.disabled = true;
        document.getElementById('nav-grid').classList.add('grid');
    }
    if (accCbx[2].checked) {
        adhdProfile.disabled = false;
        document.body.classList.add("animation__hidden");
        const mask = document.createElement('div');
        mask.id = 'acc-mask';
        mask.insertAdjacentHTML('afterbegin', '<div id="mask-top" aria-hidden="true"></div><div id="mask-bottom" aria-hidden="true"></div>');
        document.body.parentNode.append(mask);
        const $maskTop = $('#mask-top');
        const $maskBottom = $('#mask-bottom');
        $(document).on('mousemove', function createMask(e) {
            $maskTop.css({
                height: e.clientY - 70
            });
            $maskBottom.css({
                height: window.innerHeight - (e.clientY + 70)
            });
        });
    } else {
        document.body.classList.remove("animation__hidden");
        adhdProfile.disabled = true;
        const mask = document.getElementById('acc-mask');
        if (mask != null) mask.parentNode.removeChild(mask);
    }
    for (let e of accCbx)if (e.checked) {
        defaultProfile.disabled = false;
        ignoreFadeIn();
        break;
    } else defaultProfile.disabled = true;
};
/**
 * Toggle y-scroll
 */ function disableScroll(element) {
    element.classList.add("stop-scroll");
}
function enableScroll(element) {
    element.classList.remove("stop-scroll");
}
//disable animations on resize or orientation change
let resizeTimer;
[
    "resize"
].forEach((evt)=>{
    window.addEventListener(evt, ()=>{
        document.body.classList.add("animation__hidden");
        /*closeMenu();*/ clearTimeout(resizeTimer);
        resizeTimer = setTimeout(()=>{
            document.body.classList.remove("animation__hidden");
        }, 400);
    });
});
//sets current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();

},{}],"eunAW":[function(require,module,exports) {
// Dark mode
darkModeInit();
/*const themeIcon = document.querySelector('.theme-icon').classList;*/ function darkModeInit() {
    let darkMode = null;
    if (typeof Storage !== "undefined") switch(localStorage.getItem("darkMode")){
        case 'true':
            darkMode = true;
            break;
        case 'false':
            darkMode = false;
            break;
    }
    if (darkMode === null) {
        if (window.matchMedia) darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    if (darkMode === true) {
        document.documentElement.classList.add('darkMode');
        document.querySelector('.theme-icon').classList.remove('uil-sun');
        document.querySelector('.theme-icon').classList.add('uil-moon');
    } else if (darkMode === false) {
        document.documentElement.classList.remove('darkMode');
        document.querySelector('.theme-icon').classList.remove('uil-moon');
        document.querySelector('.theme-icon').classList.add('uil-sun');
    }
} /*export function darkModeToggle() {
    document.documentElement.classList.toggle('darkMode');
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("darkMode", document.documentElement.classList.contains('darkMode').toString());
    }
}*/  /*function darkModeIcon() {
    if (document.querySelector('.theme-icon').classList.contains('uil-moon')){
        document.querySelector('.theme-icon').classList.remove('uil-moon');
        document.querySelector('.theme-icon').classList.add('uil-sun');
    } else {
        document.querySelector('.theme-icon').classList.remove('uil-sun');
        document.querySelector('.theme-icon').classList.add('uil-moon');
    }
}*/ 

},{}],"kUDFS":[function(require,module,exports) {
(function($) {
    /*==================================================================
    [ Focus Contact2 ]*/ $('.input2').each(function() {
        $(this).on('blur', function() {
            if ($(this).val().trim() != "") $(this).addClass('has-val');
            else $(this).removeClass('has-val');
        });
    });
    /*==================================================================
    [ Validate ]*/ var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');
    $('.validate-form').on('submit', function() {
        var check = true;
        if ($(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }
        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }
        if ($(message).val().trim() === '') {
            showValidate(message);
            check = false;
        }
        return check;
    });
    $('.validate-form .input2').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);

},{}],"ce8VC":[function() {},{}]},["8Ye98","6cF5V"], "6cF5V", "parcelRequiref023")

//# sourceMappingURL=index.5cb7de60.js.map
