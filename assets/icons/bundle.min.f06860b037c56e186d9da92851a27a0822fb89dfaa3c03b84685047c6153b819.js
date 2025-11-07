(() => {
  // node_modules/@fortawesome/fontawesome-svg-core/index.mjs
  function _arrayLikeToArray(r2, a2) {
    (null == a2 || a2 > r2.length) && (a2 = r2.length);
    for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
    return n2;
  }
  function _arrayWithHoles(r2) {
    if (Array.isArray(r2)) return r2;
  }
  function _arrayWithoutHoles(r2) {
    if (Array.isArray(r2)) return _arrayLikeToArray(r2);
  }
  function _classCallCheck(a2, n2) {
    if (!(a2 instanceof n2)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e2, r2) {
    for (var t2 = 0; t2 < r2.length; t2++) {
      var o2 = r2[t2];
      o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, _toPropertyKey(o2.key), o2);
    }
  }
  function _createClass(e2, r2, t2) {
    return r2 && _defineProperties(e2.prototype, r2), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", {
      writable: false
    }), e2;
  }
  function _createForOfIteratorHelper(r2, e2) {
    var t2 = "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
    if (!t2) {
      if (Array.isArray(r2) || (t2 = _unsupportedIterableToArray(r2)) || e2 && r2 && "number" == typeof r2.length) {
        t2 && (r2 = t2);
        var n2 = 0, F2 = function() {
        };
        return {
          s: F2,
          n: function() {
            return n2 >= r2.length ? {
              done: true
            } : {
              done: false,
              value: r2[n2++]
            };
          },
          e: function(r3) {
            throw r3;
          },
          f: F2
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, a2 = true, u2 = false;
    return {
      s: function() {
        t2 = t2.call(r2);
      },
      n: function() {
        var r3 = t2.next();
        return a2 = r3.done, r3;
      },
      e: function(r3) {
        u2 = true, o2 = r3;
      },
      f: function() {
        try {
          a2 || null == t2.return || t2.return();
        } finally {
          if (u2) throw o2;
        }
      }
    };
  }
  function _defineProperty(e2, r2, t2) {
    return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
      value: t2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e2[r2] = t2, e2;
  }
  function _iterableToArray(r2) {
    if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
  }
  function _iterableToArrayLimit(r2, l2) {
    var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
    if (null != t2) {
      var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
      try {
        if (i2 = (t2 = t2.call(r2)).next, 0 === l2) {
          if (Object(t2) !== t2) return;
          f2 = false;
        } else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
      } catch (r3) {
        o2 = true, n2 = r3;
      } finally {
        try {
          if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2)) return;
        } finally {
          if (o2) throw n2;
        }
      }
      return a2;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e2, r2) {
    var t2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e2);
      r2 && (o2 = o2.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
      })), t2.push.apply(t2, o2);
    }
    return t2;
  }
  function _objectSpread2(e2) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t2 = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
        _defineProperty(e2, r3, t2[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
        Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
      });
    }
    return e2;
  }
  function _slicedToArray(r2, e2) {
    return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
  }
  function _toConsumableArray(r2) {
    return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
  }
  function _toPrimitive(t2, r2) {
    if ("object" != typeof t2 || !t2) return t2;
    var e2 = t2[Symbol.toPrimitive];
    if (void 0 !== e2) {
      var i2 = e2.call(t2, r2 || "default");
      if ("object" != typeof i2) return i2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t2);
  }
  function _toPropertyKey(t2) {
    var i2 = _toPrimitive(t2, "string");
    return "symbol" == typeof i2 ? i2 : i2 + "";
  }
  function _typeof(o2) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
      return typeof o3;
    } : function(o3) {
      return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
    }, _typeof(o2);
  }
  function _unsupportedIterableToArray(r2, a2) {
    if (r2) {
      if ("string" == typeof r2) return _arrayLikeToArray(r2, a2);
      var t2 = {}.toString.call(r2).slice(8, -1);
      return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
    }
  }
  var noop = function noop2() {
  };
  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };
  try {
    if (typeof window !== "undefined") _WINDOW = window;
    if (typeof document !== "undefined") _DOCUMENT = document;
    if (typeof MutationObserver !== "undefined") _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== "undefined") _PERFORMANCE = performance;
  } catch (e2) {
  }
  var _ref = _WINDOW.navigator || {};
  var _ref$userAgent = _ref.userAgent;
  var userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
  var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
  var _dt;
  var E = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/;
  var _ = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;
  var q = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands"
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin"
    },
    slab: {
      "fa-regular": "regular",
      faslr: "regular"
    },
    "slab-press": {
      "fa-regular": "regular",
      faslpr: "regular"
    },
    thumbprint: {
      "fa-light": "light",
      fatl: "light"
    },
    whiteboard: {
      "fa-semibold": "semibold",
      fawsb: "semibold"
    },
    notdog: {
      "fa-solid": "solid",
      fans: "solid"
    },
    "notdog-duo": {
      "fa-solid": "solid",
      fands: "solid"
    },
    etch: {
      "fa-solid": "solid",
      faes: "solid"
    },
    jelly: {
      "fa-regular": "regular",
      fajr: "regular"
    },
    "jelly-fill": {
      "fa-regular": "regular",
      fajfr: "regular"
    },
    "jelly-duo": {
      "fa-regular": "regular",
      fajdr: "regular"
    },
    chisel: {
      "fa-regular": "regular",
      facr: "regular"
    },
    utility: {
      "fa-semibold": "semibold",
      fausb: "semibold"
    },
    "utility-duo": {
      "fa-semibold": "semibold",
      faudsb: "semibold"
    },
    "utility-fill": {
      "fa-semibold": "semibold",
      faufsb: "semibold"
    }
  };
  var H = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  };
  var Q = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"];
  var i = "classic";
  var t = "duotone";
  var d = "sharp";
  var l = "sharp-duotone";
  var f = "chisel";
  var n = "etch";
  var h = "jelly";
  var o = "jelly-duo";
  var u = "jelly-fill";
  var g = "notdog";
  var s = "notdog-duo";
  var y = "slab";
  var m = "slab-press";
  var e = "thumbprint";
  var p = "utility";
  var a = "utility-duo";
  var w = "utility-fill";
  var x = "whiteboard";
  var b = "Classic";
  var c = "Duotone";
  var I = "Sharp";
  var F = "Sharp Duotone";
  var v = "Chisel";
  var S = "Etch";
  var A = "Jelly";
  var P = "Jelly Duo";
  var j = "Jelly Fill";
  var B = "Notdog";
  var N = "Notdog Duo";
  var k = "Slab";
  var D = "Slab Press";
  var T = "Thumbprint";
  var C = "Utility";
  var W = "Utility Duo";
  var K = "Utility Fill";
  var R = "Whiteboard";
  var rt = [i, t, d, l, f, n, h, o, u, g, s, y, m, e, p, a, w, x];
  var dt = (_dt = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dt, i, b), t, c), d, I), l, F), f, v), n, S), h, A), o, P), u, j), g, B), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dt, s, N), y, k), m, D), e, T), p, C), a, W), w, K), x, R));
  var gt = {
    classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    duotone: {
      900: "fad",
      400: "fadr",
      300: "fadl",
      100: "fadt"
    },
    sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    },
    "sharp-duotone": {
      900: "fasds",
      400: "fasdr",
      300: "fasdl",
      100: "fasdt"
    },
    slab: {
      400: "faslr"
    },
    "slab-press": {
      400: "faslpr"
    },
    whiteboard: {
      600: "fawsb"
    },
    thumbprint: {
      300: "fatl"
    },
    notdog: {
      900: "fans"
    },
    "notdog-duo": {
      900: "fands"
    },
    etch: {
      900: "faes"
    },
    chisel: {
      400: "facr"
    },
    jelly: {
      400: "fajr"
    },
    "jelly-fill": {
      400: "fajfr"
    },
    "jelly-duo": {
      400: "fajdr"
    },
    utility: {
      600: "fausb"
    },
    "utility-duo": {
      600: "faudsb"
    },
    "utility-fill": {
      600: "faufsb"
    }
  };
  var Ct = {
    "Font Awesome 7 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 7 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    "Font Awesome 7 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 7 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt"
    },
    "Font Awesome 7 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast"
    },
    "Font Awesome 7 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt"
    },
    "Font Awesome 7 Jelly": {
      400: "fajr",
      normal: "fajr"
    },
    "Font Awesome 7 Jelly Fill": {
      400: "fajfr",
      normal: "fajfr"
    },
    "Font Awesome 7 Jelly Duo": {
      400: "fajdr",
      normal: "fajdr"
    },
    "Font Awesome 7 Slab": {
      400: "faslr",
      normal: "faslr"
    },
    "Font Awesome 7 Slab Press": {
      400: "faslpr",
      normal: "faslpr"
    },
    "Font Awesome 7 Thumbprint": {
      300: "fatl",
      normal: "fatl"
    },
    "Font Awesome 7 Notdog": {
      900: "fans",
      normal: "fans"
    },
    "Font Awesome 7 Notdog Duo": {
      900: "fands",
      normal: "fands"
    },
    "Font Awesome 7 Etch": {
      900: "faes",
      normal: "faes"
    },
    "Font Awesome 7 Chisel": {
      400: "facr",
      normal: "facr"
    },
    "Font Awesome 7 Whiteboard": {
      600: "fawsb",
      normal: "fawsb"
    },
    "Font Awesome 7 Utility": {
      600: "fausb",
      normal: "fausb"
    },
    "Font Awesome 7 Utility Duo": {
      600: "faudsb",
      normal: "faudsb"
    },
    "Font Awesome 7 Utility Fill": {
      600: "faufsb",
      normal: "faufsb"
    }
  };
  var Ut = /* @__PURE__ */ new Map([["classic", {
    defaultShortPrefixId: "fas",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin", "brands"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["duotone", {
    defaultShortPrefixId: "fad",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp", {
    defaultShortPrefixId: "fass",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp-duotone", {
    defaultShortPrefixId: "fasds",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["chisel", {
    defaultShortPrefixId: "facr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["etch", {
    defaultShortPrefixId: "faes",
    defaultStyleId: "solid",
    styleIds: ["solid"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["jelly", {
    defaultShortPrefixId: "fajr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["jelly-duo", {
    defaultShortPrefixId: "fajdr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["jelly-fill", {
    defaultShortPrefixId: "fajfr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["notdog", {
    defaultShortPrefixId: "fans",
    defaultStyleId: "solid",
    styleIds: ["solid"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["notdog-duo", {
    defaultShortPrefixId: "fands",
    defaultStyleId: "solid",
    styleIds: ["solid"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["slab", {
    defaultShortPrefixId: "faslr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["slab-press", {
    defaultShortPrefixId: "faslpr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["thumbprint", {
    defaultShortPrefixId: "fatl",
    defaultStyleId: "light",
    styleIds: ["light"],
    futureStyleIds: [],
    defaultFontWeight: 300
  }], ["utility", {
    defaultShortPrefixId: "fausb",
    defaultStyleId: "semibold",
    styleIds: ["semibold"],
    futureStyleIds: [],
    defaultFontWeight: 600
  }], ["utility-duo", {
    defaultShortPrefixId: "faudsb",
    defaultStyleId: "semibold",
    styleIds: ["semibold"],
    futureStyleIds: [],
    defaultFontWeight: 600
  }], ["utility-fill", {
    defaultShortPrefixId: "faufsb",
    defaultStyleId: "semibold",
    styleIds: ["semibold"],
    futureStyleIds: [],
    defaultFontWeight: 600
  }], ["whiteboard", {
    defaultShortPrefixId: "fawsb",
    defaultStyleId: "semibold",
    styleIds: ["semibold"],
    futureStyleIds: [],
    defaultFontWeight: 600
  }]]);
  var _t = {
    chisel: {
      regular: "facr"
    },
    classic: {
      brands: "fab",
      light: "fal",
      regular: "far",
      solid: "fas",
      thin: "fat"
    },
    duotone: {
      light: "fadl",
      regular: "fadr",
      solid: "fad",
      thin: "fadt"
    },
    etch: {
      solid: "faes"
    },
    jelly: {
      regular: "fajr"
    },
    "jelly-duo": {
      regular: "fajdr"
    },
    "jelly-fill": {
      regular: "fajfr"
    },
    notdog: {
      solid: "fans"
    },
    "notdog-duo": {
      solid: "fands"
    },
    sharp: {
      light: "fasl",
      regular: "fasr",
      solid: "fass",
      thin: "fast"
    },
    "sharp-duotone": {
      light: "fasdl",
      regular: "fasdr",
      solid: "fasds",
      thin: "fasdt"
    },
    slab: {
      regular: "faslr"
    },
    "slab-press": {
      regular: "faslpr"
    },
    thumbprint: {
      light: "fatl"
    },
    utility: {
      semibold: "fausb"
    },
    "utility-duo": {
      semibold: "faudsb"
    },
    "utility-fill": {
      semibold: "faufsb"
    },
    whiteboard: {
      semibold: "fawsb"
    }
  };
  var Yt = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
  var qt = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  };
  var Ht = ["kit"];
  var L = "kit";
  var r = "kit-duotone";
  var U = "Kit";
  var J = "Kit Duotone";
  var $t = _defineProperty(_defineProperty({}, L, U), r, J);
  var ol = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  };
  var dl = {
    "Font Awesome Kit": {
      400: "fak",
      normal: "fak"
    },
    "Font Awesome Kit Duotone": {
      400: "fakd",
      normal: "fakd"
    }
  };
  var fl = {
    kit: {
      fak: "fa-kit"
    },
    "kit-duotone": {
      fakd: "fa-kit-duotone"
    }
  };
  var ul = {
    kit: {
      kit: "fak"
    },
    "kit-duotone": {
      "kit-duotone": "fakd"
    }
  };
  var _ml;
  var l$1 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  };
  var f$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"];
  var n$1 = "classic";
  var o$1 = "duotone";
  var u$1 = "sharp";
  var s$1 = "sharp-duotone";
  var h$1 = "chisel";
  var g$1 = "etch";
  var y$1 = "jelly";
  var e$1 = "jelly-duo";
  var m$1 = "jelly-fill";
  var p$1 = "notdog";
  var a$1 = "notdog-duo";
  var w$1 = "slab";
  var b$1 = "slab-press";
  var r$1 = "thumbprint";
  var c$1 = "utility";
  var i$1 = "utility-duo";
  var x$1 = "utility-fill";
  var I$1 = "whiteboard";
  var F$1 = "Classic";
  var v$1 = "Duotone";
  var S$1 = "Sharp";
  var A$1 = "Sharp Duotone";
  var P$1 = "Chisel";
  var j$1 = "Etch";
  var B$1 = "Jelly";
  var N$1 = "Jelly Duo";
  var k$1 = "Jelly Fill";
  var D$1 = "Notdog";
  var C$1 = "Notdog Duo";
  var T$1 = "Slab";
  var L$1 = "Slab Press";
  var W$1 = "Thumbprint";
  var R$1 = "Utility";
  var K$1 = "Utility Duo";
  var U$1 = "Utility Fill";
  var J$1 = "Whiteboard";
  var ml$1 = (_ml = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ml, n$1, F$1), o$1, v$1), u$1, S$1), s$1, A$1), h$1, P$1), g$1, j$1), y$1, B$1), e$1, N$1), m$1, k$1), p$1, D$1), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ml, a$1, C$1), w$1, T$1), b$1, L$1), r$1, W$1), c$1, R$1), i$1, K$1), x$1, U$1), I$1, J$1));
  var E$1 = "kit";
  var d$1 = "kit-duotone";
  var _$1 = "Kit";
  var M$1 = "Kit Duotone";
  var rt$1 = _defineProperty(_defineProperty({}, E$1, _$1), d$1, M$1);
  var $t$1 = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    duotone: {
      "fa-regular": "fadr",
      "fa-light": "fadl",
      "fa-thin": "fadt"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt"
    },
    slab: {
      "fa-regular": "faslr"
    },
    "slab-press": {
      "fa-regular": "faslpr"
    },
    whiteboard: {
      "fa-semibold": "fawsb"
    },
    thumbprint: {
      "fa-light": "fatl"
    },
    notdog: {
      "fa-solid": "fans"
    },
    "notdog-duo": {
      "fa-solid": "fands"
    },
    etch: {
      "fa-solid": "faes"
    },
    jelly: {
      "fa-regular": "fajr"
    },
    "jelly-fill": {
      "fa-regular": "fajfr"
    },
    "jelly-duo": {
      "fa-regular": "fajdr"
    },
    chisel: {
      "fa-regular": "facr"
    },
    utility: {
      "fa-semibold": "fausb"
    },
    "utility-duo": {
      "fa-semibold": "faudsb"
    },
    "utility-fill": {
      "fa-semibold": "faufsb"
    }
  };
  var z = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
    slab: ["faslr"],
    "slab-press": ["faslpr"],
    whiteboard: ["fawsb"],
    thumbprint: ["fatl"],
    notdog: ["fans"],
    "notdog-duo": ["fands"],
    etch: ["faes"],
    jelly: ["fajr"],
    "jelly-fill": ["fajfr"],
    "jelly-duo": ["fajdr"],
    chisel: ["facr"],
    utility: ["fausb"],
    "utility-duo": ["faudsb"],
    "utility-fill": ["faufsb"]
  };
  var Ht$1 = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    duotone: {
      fadr: "fa-regular",
      fadl: "fa-light",
      fadt: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin"
    },
    slab: {
      faslr: "fa-regular"
    },
    "slab-press": {
      faslpr: "fa-regular"
    },
    whiteboard: {
      fawsb: "fa-semibold"
    },
    thumbprint: {
      fatl: "fa-light"
    },
    notdog: {
      fans: "fa-solid"
    },
    "notdog-duo": {
      fands: "fa-solid"
    },
    etch: {
      faes: "fa-solid"
    },
    jelly: {
      fajr: "fa-regular"
    },
    "jelly-fill": {
      fajfr: "fa-regular"
    },
    "jelly-duo": {
      fajdr: "fa-regular"
    },
    chisel: {
      facr: "fa-regular"
    },
    utility: {
      fausb: "fa-semibold"
    },
    "utility-duo": {
      faudsb: "fa-semibold"
    },
    "utility-fill": {
      faufsb: "fa-semibold"
    }
  };
  var Y$1 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"];
  var Zt$1 = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(f$1, Y$1);
  var G$1 = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"];
  var O$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var V$1 = O$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var $$1 = ["aw", "fw", "pull-left", "pull-right"];
  var to = [].concat(_toConsumableArray(Object.keys(z)), G$1, $$1, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", l$1.GROUP, l$1.SWAP_OPACITY, l$1.PRIMARY, l$1.SECONDARY]).concat(O$1.map(function(t2) {
    return "".concat(t2, "x");
  })).concat(V$1.map(function(t2) {
    return "w-".concat(t2);
  }));
  var ro = {
    "Font Awesome 5 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 5 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal"
    },
    "Font Awesome 5 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 5 Duotone": {
      900: "fad"
    }
  };
  var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
  var UNITS_IN_GRID = 16;
  var DEFAULT_CSS_PREFIX = "fa";
  var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
  var DATA_FA_I2SVG = "data-fa-i2svg";
  var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
  var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
  var DATA_PREFIX = "data-prefix";
  var DATA_ICON = "data-icon";
  var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
  var MUTATION_APPROACH_ASYNC = "async";
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
  var PSEUDO_ELEMENTS = ["::before", "::after", ":before", ":after"];
  var PRODUCTION = (function() {
    try {
      return false;
    } catch (e$$1) {
      return false;
    }
  })();
  function familyProxy(obj) {
    return new Proxy(obj, {
      get: function get2(target, prop) {
        return prop in target ? target[prop] : target[i];
      }
    });
  }
  var _PREFIX_TO_STYLE = _objectSpread2({}, q);
  _PREFIX_TO_STYLE[i] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    "fa-duotone": "duotone"
  }), q[i]), qt["kit"]), qt["kit-duotone"]);
  var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  var _STYLE_TO_PREFIX = _objectSpread2({}, _t);
  _STYLE_TO_PREFIX[i] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    duotone: "fad"
  }), _STYLE_TO_PREFIX[i]), ul["kit"]), ul["kit-duotone"]);
  var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  var _PREFIX_TO_LONG_STYLE = _objectSpread2({}, Ht$1);
  _PREFIX_TO_LONG_STYLE[i] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[i]), fl["kit"]);
  var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  var _LONG_STYLE_TO_PREFIX = _objectSpread2({}, $t$1);
  _LONG_STYLE_TO_PREFIX[i] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[i]), ol["kit"]);
  var LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  var ICON_SELECTION_SYNTAX_PATTERN = E;
  var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
  var FONT_FAMILY_PATTERN = _;
  var _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, gt);
  var FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
  var DUOTONE_CLASSES = H;
  var RESERVED_CLASSES = [].concat(_toConsumableArray(Ht), _toConsumableArray(to));
  var initial = WINDOW.FontAwesomeConfig || {};
  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector("script[" + attr + "]");
    if (element) {
      return element.getAttribute(attr);
    }
  }
  function coerce(val) {
    if (val === "") return true;
    if (val === "false") return false;
    if (val === "true") return true;
    return val;
  }
  if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
    attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
    attrs.forEach(function(_ref2) {
      var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
      var val = coerce(getAttrConfig(attr));
      if (val !== void 0 && val !== null) {
        initial[key] = val;
      }
    });
  }
  var attrs;
  var _default = {
    styleDefault: "solid",
    familyDefault: i,
    cssPrefix: DEFAULT_CSS_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    searchPseudoElements: false,
    searchPseudoElementsWarnings: true,
    searchPseudoElementsFullScan: false,
    observeMutations: true,
    mutateApproach: "async",
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };
  if (initial.familyPrefix) {
    initial.cssPrefix = initial.familyPrefix;
  }
  var _config = _objectSpread2(_objectSpread2({}, _default), initial);
  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  var config = {};
  Object.keys(_default).forEach(function(key) {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function set2(val) {
        _config[key] = val;
        _onChangeCb.forEach(function(cb) {
          return cb(config);
        });
      },
      get: function get2() {
        return _config[key];
      }
    });
  });
  Object.defineProperty(config, "familyPrefix", {
    enumerable: true,
    set: function set(val) {
      _config.cssPrefix = val;
      _onChangeCb.forEach(function(cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config.cssPrefix;
    }
  });
  WINDOW.FontAwesomeConfig = config;
  var _onChangeCb = [];
  function onChange(cb) {
    _onChangeCb.push(cb);
    return function() {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }
  var d$2 = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function insertCss(css2) {
    if (!css2 || !IS_DOM) {
      return;
    }
    var style = DOCUMENT.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerHTML = css2;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;
    for (var i2 = headChildren.length - 1; i2 > -1; i2--) {
      var child = headChildren[i2];
      var tagName = (child.tagName || "").toUpperCase();
      if (["STYLE", "LINK"].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }
    DOCUMENT.head.insertBefore(style, beforeChild);
    return css2;
  }
  var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function nextUniqueId() {
    var size = 12;
    var id = "";
    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }
    return id;
  }
  function toArray(obj) {
    var array = [];
    for (var i2 = (obj || []).length >>> 0; i2--; ) {
      array[i2] = obj[i2];
    }
    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute("class") || "").split(" ").filter(function(i2) {
        return i2;
      });
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
      return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
    }, "").trim();
  }
  function joinStyles(styles2) {
    return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
    }, "");
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref2) {
    var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer,
      inner,
      path
    };
  }
  function transformForCss(_ref2) {
    var transform = _ref2.transform, _ref2$width = _ref2.width, width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = "";
    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
    }
    val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }
  var baseStyles = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;
  function css() {
    var dcp = DEFAULT_CSS_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.cssPrefix;
    var rc = config.replacementClass;
    var s2 = baseStyles;
    if (fp !== dcp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
      var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
      var rPatt = new RegExp("\\.".concat(drc), "g");
      s2 = s2.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }
    return s2;
  }
  var _cssInserted = false;
  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }
  var InjectCSS = {
    mixout: function mixout() {
      return {
        dom: {
          css,
          insertCss: ensureCss
        }
      };
    },
    hooks: function hooks() {
      return {
        beforeDOMElementCreation: function beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg: function beforeI2svg() {
          ensureCss();
        }
      };
    }
  };
  var w$2 = WINDOW || {};
  if (!w$2[NAMESPACE_IDENTIFIER]) w$2[NAMESPACE_IDENTIFIER] = {};
  if (!w$2[NAMESPACE_IDENTIFIER].styles) w$2[NAMESPACE_IDENTIFIER].styles = {};
  if (!w$2[NAMESPACE_IDENTIFIER].hooks) w$2[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w$2[NAMESPACE_IDENTIFIER].shims) w$2[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w$2[NAMESPACE_IDENTIFIER];
  var functions = [];
  var _listener = function listener() {
    DOCUMENT.removeEventListener("DOMContentLoaded", _listener);
    loaded = 1;
    functions.map(function(fn) {
      return fn();
    });
  };
  var loaded = false;
  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener("DOMContentLoaded", _listener);
  }
  function domready(fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }
  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
    if (typeof abstractNodes === "string") {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
    }
  }
  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix,
        iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }
  var bindInternal4 = function bindInternal42(func, thisContext) {
    return function(a2, b2, c2, d2) {
      return func.call(thisContext, a2, b2, c2, d2);
    };
  };
  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i2, key, result;
    if (initialValue === void 0) {
      i2 = 1;
      result = subject[keys[0]];
    } else {
      i2 = 0;
      result = initialValue;
    }
    for (; i2 < length; i2++) {
      key = keys[i2];
      result = iterator(result, subject[key], key, subject);
    }
    return result;
  };
  function toHex(unicode) {
    if (_toConsumableArray(unicode).length !== 1) return null;
    return unicode.codePointAt(0).toString(16);
  }
  function normalizeIcons(icons3) {
    return Object.keys(icons3).reduce(function(acc, iconName) {
      var icon3 = icons3[iconName];
      var expanded = !!icon3.icon;
      if (expanded) {
        acc[icon3.iconName] = icon3.icon;
      } else {
        acc[iconName] = icon3;
      }
      return acc;
    }, {});
  }
  function defineIcons(prefix, icons3) {
    var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons3);
    if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons3));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    if (prefix === "fas") {
      defineIcons("fa", icons3);
    }
  }
  var styles = namespace.styles;
  var shims = namespace.shims;
  var FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
  var PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce(function(acc, familyId) {
    acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
    return acc;
  }, {});
  var _defaultUsablePrefix = null;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var _byOldUnicode = {};
  var _byAlias = {};
  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }
  function getIconName(cssPrefix, cls) {
    var parts = cls.split("-");
    var prefix = parts[0];
    var iconName = parts.slice(1).join("-");
    if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  var build = function build2() {
    var lookup = function lookup2(reducer) {
      return reduce(styles, function(o$$1, style, prefix) {
        o$$1[prefix] = reduce(style, reducer, {});
        return o$$1;
      }, {});
    };
    _byUnicode = lookup(function(acc, icon3, iconName) {
      if (icon3[3]) {
        acc[icon3[3]] = iconName;
      }
      if (icon3[2]) {
        var aliases = icon3[2].filter(function(a$$1) {
          return typeof a$$1 === "number";
        });
        aliases.forEach(function(alias) {
          acc[alias.toString(16)] = iconName;
        });
      }
      return acc;
    });
    _byLigature = lookup(function(acc, icon3, iconName) {
      acc[iconName] = iconName;
      if (icon3[2]) {
        var aliases = icon3[2].filter(function(a$$1) {
          return typeof a$$1 === "string";
        });
        aliases.forEach(function(alias) {
          acc[alias] = iconName;
        });
      }
      return acc;
    });
    _byAlias = lookup(function(acc, icon3, iconName) {
      var aliases = icon3[2];
      acc[iconName] = iconName;
      aliases.forEach(function(alias) {
        acc[alias] = iconName;
      });
      return acc;
    });
    var hasRegular = "far" in styles || config.autoFetchSvg;
    var shimLookups = reduce(shims, function(acc, shim) {
      var maybeNameMaybeUnicode = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];
      if (prefix === "far" && !hasRegular) {
        prefix = "fas";
      }
      if (typeof maybeNameMaybeUnicode === "string") {
        acc.names[maybeNameMaybeUnicode] = {
          prefix,
          iconName
        };
      }
      if (typeof maybeNameMaybeUnicode === "number") {
        acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix,
          iconName
        };
      }
      return acc;
    }, {
      names: {},
      unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
      family: config.familyDefault
    });
  };
  onChange(function(c$$1) {
    _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
      family: config.familyDefault
    });
  });
  build();
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  function byOldUnicode(unicode) {
    var oldUnicode = _byOldUnicode[unicode];
    var newUnicode = byUnicode("fas", unicode);
    return oldUnicode || (newUnicode ? {
      prefix: "fas",
      iconName: newUnicode
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  var emptyCanonicalIcon = function emptyCanonicalIcon2() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getFamilyId(values) {
    var family = i;
    var famProps = FAMILY_NAMES.reduce(function(acc, familyId) {
      acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
      return acc;
    }, {});
    rt.forEach(function(familyId) {
      if (values.includes(famProps[familyId]) || values.some(function(v$$1) {
        return PREFIXES_FOR_FAMILY[familyId].includes(v$$1);
      })) {
        family = familyId;
      }
    });
    return family;
  }
  function getCanonicalPrefix(styleOrPrefix) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _params$family = params.family, family = _params$family === void 0 ? i : _params$family;
    var style = PREFIX_TO_STYLE[family][styleOrPrefix];
    if (family === t && !styleOrPrefix) {
      return "fad";
    }
    var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
    var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    var result = prefix || defined || null;
    return result;
  }
  function moveNonFaClassesToRest(classNames) {
    var rest = [];
    var iconName = null;
    classNames.forEach(function(cls) {
      var result = getIconName(config.cssPrefix, cls);
      if (result) {
        iconName = result;
      } else if (cls) {
        rest.push(cls);
      }
    });
    return {
      iconName,
      rest
    };
  }
  function sortedUniqueValues(arr) {
    return arr.sort().filter(function(value, index, arr2) {
      return arr2.indexOf(value) === index;
    });
  }
  var _faCombinedClasses = Zt$1.concat(Yt);
  function getCanonicalIcon(values) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
    var givenPrefix = null;
    var faStyleOrFamilyClasses = sortedUniqueValues(values.filter(function(cls) {
      return _faCombinedClasses.includes(cls);
    }));
    var nonStyleOrFamilyClasses = sortedUniqueValues(values.filter(function(cls) {
      return !_faCombinedClasses.includes(cls);
    }));
    var faStyles = faStyleOrFamilyClasses.filter(function(cls) {
      givenPrefix = cls;
      return !Q.includes(cls);
    });
    var _faStyles = _slicedToArray(faStyles, 1), _faStyles$ = _faStyles[0], styleFromValues = _faStyles$ === void 0 ? null : _faStyles$;
    var family = getFamilyId(faStyleOrFamilyClasses);
    var canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
      prefix: getCanonicalPrefix(styleFromValues, {
        family
      })
    });
    return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
      values,
      family,
      styles,
      config,
      canonical,
      givenPrefix
    })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
  }
  function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
    var prefix = canonical.prefix, iconName = canonical.iconName;
    if (skipLookups || !prefix || !iconName) {
      return {
        prefix,
        iconName
      };
    }
    var shim = givenPrefix === "fa" ? byOldName(iconName) : {};
    var aliasIconName = byAlias(prefix, iconName);
    iconName = shim.iconName || aliasIconName || iconName;
    prefix = shim.prefix || prefix;
    if (prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
      prefix = "fas";
    }
    return {
      prefix,
      iconName
    };
  }
  var newCanonicalFamilies = rt.filter(function(familyId) {
    return familyId !== i || familyId !== t;
  });
  var newCanonicalStyles = Object.keys(Ht$1).filter(function(key) {
    return key !== i;
  }).map(function(key) {
    return Object.keys(Ht$1[key]);
  }).flat();
  function getDefaultCanonicalPrefix(prefixOptions) {
    var values = prefixOptions.values, family = prefixOptions.family, canonical = prefixOptions.canonical, _prefixOptions$givenP = prefixOptions.givenPrefix, givenPrefix = _prefixOptions$givenP === void 0 ? "" : _prefixOptions$givenP, _prefixOptions$styles = prefixOptions.styles, styles2 = _prefixOptions$styles === void 0 ? {} : _prefixOptions$styles, _prefixOptions$config = prefixOptions.config, config$$1 = _prefixOptions$config === void 0 ? {} : _prefixOptions$config;
    var isDuotoneFamily = family === t;
    var valuesHasDuotone = values.includes("fa-duotone") || values.includes("fad");
    var defaultFamilyIsDuotone = config$$1.familyDefault === "duotone";
    var canonicalPrefixIsDuotone = canonical.prefix === "fad" || canonical.prefix === "fa-duotone";
    if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
      canonical.prefix = "fad";
    }
    if (values.includes("fa-brands") || values.includes("fab")) {
      canonical.prefix = "fab";
    }
    if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
      var validPrefix = Object.keys(styles2).find(function(key) {
        return newCanonicalStyles.includes(key);
      });
      if (validPrefix || config$$1.autoFetchSvg) {
        var defaultPrefix = Ut.get(family).defaultShortPrefixId;
        canonical.prefix = defaultPrefix;
        canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
      }
    }
    if (canonical.prefix === "fa" || givenPrefix === "fa") {
      canonical.prefix = getDefaultUsablePrefix() || "fas";
    }
    return canonical;
  }
  var Library = /* @__PURE__ */ (function() {
    function Library2() {
      _classCallCheck(this, Library2);
      this.definitions = {};
    }
    return _createClass(Library2, [{
      key: "add",
      value: function add() {
        var _this = this;
        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }
        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function(key) {
          _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
          defineIcons(key, additions[key]);
          var longPrefix = PREFIX_TO_LONG_STYLE[i][key];
          if (longPrefix) defineIcons(longPrefix, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function(key) {
          var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon3 = _normalized$key.icon;
          var aliases = icon3[2];
          if (!additions[prefix]) additions[prefix] = {};
          if (aliases.length > 0) {
            aliases.forEach(function(alias) {
              if (typeof alias === "string") {
                additions[prefix][alias] = icon3;
              }
            });
          }
          additions[prefix][iconName] = icon3;
        });
        return additions;
      }
    }]);
  })();
  var _plugins = [];
  var _hooks = {};
  var providers = {};
  var defaultProviderKeys = Object.keys(providers);
  function registerPlugins(nextPlugins, _ref2) {
    var obj = _ref2.mixoutsTo;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach(function(k2) {
      if (defaultProviderKeys.indexOf(k2) === -1) {
        delete providers[k2];
      }
    });
    _plugins.forEach(function(plugin) {
      var mixout8 = plugin.mixout ? plugin.mixout() : {};
      Object.keys(mixout8).forEach(function(tk) {
        if (typeof mixout8[tk] === "function") {
          obj[tk] = mixout8[tk];
        }
        if (_typeof(mixout8[tk]) === "object") {
          Object.keys(mixout8[tk]).forEach(function(sk) {
            if (!obj[tk]) {
              obj[tk] = {};
            }
            obj[tk][sk] = mixout8[tk][sk];
          });
        }
      });
      if (plugin.hooks) {
        var hooks8 = plugin.hooks();
        Object.keys(hooks8).forEach(function(hook) {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }
          _hooks[hook].push(hooks8[hook]);
        });
      }
      if (plugin.provides) {
        plugin.provides(providers);
      }
    });
    return obj;
  }
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function(hookFn) {
      accumulator = hookFn.apply(null, [accumulator].concat(args));
    });
    return accumulator;
  }
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function(hookFn) {
      hookFn.apply(null, args);
    });
    return void 0;
  }
  function callProvided() {
    var hook = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : void 0;
  }
  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === "fa") {
      iconLookup.prefix = "fas";
    }
    var iconName = iconLookup.iconName;
    var prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }
  var library = new Library();
  var noAuto = function noAuto2() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks("noAuto");
  };
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (IS_DOM) {
        callHooks("beforeI2svg", params);
        callProvided("pseudoElements2svg", params);
        return callProvided("i2svg", params);
      } else {
        return Promise.reject(new Error("Operation requires a DOM of some kind."));
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }
      config.observeMutations = true;
      domready(function() {
        autoReplace({
          autoReplaceSvgRoot
        });
        callHooks("watch", params);
      });
    }
  };
  var parse = {
    icon: function icon(_icon) {
      if (_icon === null) {
        return null;
      }
      if (_typeof(_icon) === "object" && _icon.prefix && _icon.iconName) {
        return {
          prefix: _icon.prefix,
          iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
        };
      }
      if (Array.isArray(_icon) && _icon.length === 2) {
        var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1];
        var prefix = getCanonicalPrefix(_icon[0]);
        return {
          prefix,
          iconName: byAlias(prefix, iconName) || iconName
        };
      }
      if (typeof _icon === "string" && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }
      if (typeof _icon === "string") {
        var _prefix = getDefaultUsablePrefix();
        return {
          prefix: _prefix,
          iconName: byAlias(_prefix, _icon) || _icon
        };
      }
    }
  };
  var api = {
    noAuto,
    config,
    dom,
    parse,
    library,
    findIconDefinition,
    toHtml
  };
  var autoReplace = function autoReplace2() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };
  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, "abstract", {
      get: abstractCreator
    });
    Object.defineProperty(val, "html", {
      get: function get2() {
        return val.abstract.map(function(a2) {
          return toHtml(a2);
        });
      }
    });
    Object.defineProperty(val, "node", {
      get: function get2() {
        if (!IS_DOM) return void 0;
        var container = DOCUMENT.createElement("div");
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }
  function asIcon(_ref2) {
    var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width, height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes["style"] = joinStyles(_objectSpread2(_objectSpread2({}, styles2), {}, {
        "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }
    return [{
      tag: "svg",
      attributes,
      children
    }];
  }
  function asSymbol(_ref2) {
    var prefix = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: "svg",
      attributes: {
        style: "display: none;"
      },
      children: [{
        tag: "symbol",
        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
          id
        }),
        children
      }]
    }];
  }
  function isLabeled(attributes) {
    var labels = ["aria-label", "aria-labelledby", "title", "role"];
    return labels.some(function(label) {
      return label in attributes;
    });
  }
  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, maskId = params.maskId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
    var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
    var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter(function(c2) {
      return extra.classes.indexOf(c2) === -1;
    }).filter(function(c2) {
      return c2 !== "" || !!c2;
    }).concat(extra.classes).join(" ");
    var content = {
      children: [],
      attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
        "data-prefix": prefix,
        "data-icon": iconName,
        "class": attrClass,
        "role": extra.attributes.role || "img",
        "viewBox": "0 0 ".concat(width, " ").concat(height)
      })
    };
    if (!isLabeled(extra.attributes) && !extra.attributes["aria-hidden"]) {
      content.attributes["aria-hidden"] = "true";
    }
    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = "";
    }
    var args = _objectSpread2(_objectSpread2({}, content), {}, {
      prefix,
      iconName,
      main,
      mask,
      maskId,
      transform,
      symbol,
      styles: _objectSpread2({}, extra.styles)
    });
    var _ref22 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
      children: [],
      attributes: {}
    } : callProvided("generateAbstractIcon", args) || {
      children: [],
      attributes: {}
    }, children = _ref22.children, attributes = _ref22.attributes;
    args.children = children;
    args.attributes = attributes;
    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    var content = params.content, width = params.width, height = params.height, transform = params.transform, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
    var attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      class: extra.classes.join(" ")
    });
    if (watchable) {
      attributes[DATA_FA_I2SVG] = "";
    }
    var styles2 = _objectSpread2({}, extra.styles);
    if (transformIsMeaningful(transform)) {
      styles2["transform"] = transformForCss({
        transform,
        startCentered: true,
        width,
        height
      });
      styles2["-webkit-transform"] = styles2["transform"];
    }
    var styleString = joinStyles(styles2);
    if (styleString.length > 0) {
      attributes["style"] = styleString;
    }
    var val = [];
    val.push({
      tag: "span",
      attributes,
      children: [content]
    });
    return val;
  }
  function makeLayersCounterAbstract(params) {
    var content = params.content, extra = params.extra;
    var attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      class: extra.classes.join(" ")
    });
    var styleString = joinStyles(extra.styles);
    if (styleString.length > 0) {
      attributes["style"] = styleString;
    }
    var val = [];
    val.push({
      tag: "span",
      attributes,
      children: [content]
    });
    return val;
  }
  var styles$1 = namespace.styles;
  function asFoundIcon(icon3) {
    var width = icon3[0];
    var height = icon3[1];
    var _icon$slice = icon3.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
    var element = null;
    if (Array.isArray(vectorData)) {
      element = {
        tag: "g",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: "path",
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: "currentColor",
            d: vectorData[0]
          }
        }, {
          tag: "path",
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: "currentColor",
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: vectorData
        }
      };
    }
    return {
      found: true,
      width,
      height,
      icon: element
    };
  }
  var missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
  };
  function maybeNotifyMissing(iconName, prefix) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
      console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
    }
  }
  function findIcon(iconName, prefix) {
    var givenPrefix = prefix;
    if (prefix === "fa" && config.styleDefault !== null) {
      prefix = getDefaultUsablePrefix();
    }
    return new Promise(function(resolve, reject) {
      if (givenPrefix === "fa") {
        var shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix = shim.prefix || prefix;
      }
      if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
        var icon3 = styles$1[prefix][iconName];
        return resolve(asFoundIcon(icon3));
      }
      maybeNotifyMissing(iconName, prefix);
      resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
        icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
      }));
    });
  }
  var noop$1 = function noop3() {
  };
  var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = 'FA "7.1.0"';
  var begin = function begin2(name) {
    p$2.mark("".concat(preamble, " ").concat(name, " begins"));
    return function() {
      return end(name);
    };
  };
  var end = function end2(name) {
    p$2.mark("".concat(preamble, " ").concat(name, " ends"));
    p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };
  var perf = {
    begin,
    end
  };
  var noop$2 = function noop4() {
  };
  function isWatched(node) {
    var i2svg2 = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg2 === "string";
  }
  function hasPrefixAndIcon(node) {
    var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    var icon3 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix && icon3;
  }
  function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
  }
  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }
    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }
  function createElementNS(tag) {
    return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
  }
  function createElement(tag) {
    return DOCUMENT.createElement(tag);
  }
  function convertSVG(abstractObj) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? createElementNS : createElement : _params$ceFn;
    if (typeof abstractObj === "string") {
      return DOCUMENT.createTextNode(abstractObj);
    }
    var tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function(key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    var children = abstractObj.children || [];
    children.forEach(function(child) {
      tag.appendChild(convertSVG(child, {
        ceFn
      }));
    });
    return tag;
  }
  function nodeAsComment(node) {
    var comment = " ".concat(node.outerHTML, " ");
    comment = "".concat(comment, "Font Awesome fontawesome.com ");
    return comment;
  }
  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];
      if (node.parentNode) {
        mutation[1].forEach(function(abstract) {
          node.parentNode.insertBefore(convertSVG(abstract), node);
        });
        if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
          var comment = DOCUMENT.createComment(nodeAsComment(node));
          node.parentNode.replaceChild(comment, node);
        } else {
          node.remove();
        }
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var abstract = mutation[1];
      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }
      var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
      delete abstract[0].attributes.id;
      if (abstract[0].attributes.class) {
        var splitClasses = abstract[0].attributes.class.split(" ").reduce(function(acc, cls) {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }
          return acc;
        }, {
          toNode: [],
          toSvg: []
        });
        abstract[0].attributes.class = splitClasses.toSvg.join(" ");
        if (splitClasses.toNode.length === 0) {
          node.removeAttribute("class");
        } else {
          node.setAttribute("class", splitClasses.toNode.join(" "));
        }
      }
      var newInnerHTML = abstract.map(function(a2) {
        return toHtml(a2);
      }).join("\n");
      node.setAttribute(DATA_FA_I2SVG, "");
      node.innerHTML = newInnerHTML;
    }
  };
  function performOperationSync(op) {
    op();
  }
  function perform(mutations, callback) {
    var callbackFunction = typeof callback === "function" ? callback : noop$2;
    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;
      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }
      frame(function() {
        var mutator = getMutator();
        var mark = perf.begin("mutate");
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }
    if (!config.observeMutations) {
      return;
    }
    var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function(objects) {
      if (disabled) return;
      var defaultPrefix = getDefaultUsablePrefix();
      toArray(objects).forEach(function(mutationRecord) {
        if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }
          treeCallback(mutationRecord.target);
        }
        if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback([mutationRecord.target], true);
        }
        if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
            mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
          } else if (hasBeenReplaced(mutationRecord.target)) {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }
  function styleParser(node) {
    var style = node.getAttribute("style");
    var val = [];
    if (style) {
      val = style.split(";").reduce(function(acc, style2) {
        var styles2 = style2.split(":");
        var prop = styles2[0];
        var value = styles2.slice(1);
        if (prop && value.length > 0) {
          acc[prop] = value.join(":").trim();
        }
        return acc;
      }, {});
    }
    return val;
  }
  function classParser(node) {
    var existingPrefix = node.getAttribute("data-prefix");
    var existingIconName = node.getAttribute("data-icon");
    var innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
    var val = getCanonicalIcon(classArray(node));
    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }
    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }
    if (val.iconName && val.prefix) {
      return val;
    }
    if (val.prefix && innerText.length > 0) {
      val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }
    if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
      val.iconName = node.firstChild.data;
    }
    return val;
  }
  function attributesParser(node) {
    var extraAttributes = toArray(node.attributes).reduce(function(acc, attr) {
      if (acc.name !== "class" && acc.name !== "style") {
        acc[attr.name] = attr.value;
      }
      return acc;
    }, {});
    return extraAttributes;
  }
  function blankMeta() {
    return {
      iconName: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    var parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      styleParser: true
    };
    var _classParser = classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest;
    var extraAttributes = attributesParser(node);
    var pluginMeta = chainHooks("parseNodeAttributes", {}, node);
    var extraStyles = parser.styleParser ? styleParser(node) : [];
    return _objectSpread2({
      iconName,
      prefix,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    }, pluginMeta);
  }
  var styles$2 = namespace.styles;
  function generateMutation(node) {
    var nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
      styleParser: false
    }) : parseMeta(node);
    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided("generateLayersText", node, nodeMeta);
    } else {
      return callProvided("generateSvgReplacementMutation", node, nodeMeta);
    }
  }
  function getKnownPrefixes() {
    return [].concat(_toConsumableArray(Yt), _toConsumableArray(Zt$1));
  }
  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    var htmlClassList = DOCUMENT.documentElement.classList;
    var hclAdd = function hclAdd2(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };
    var hclRemove = function hclRemove2(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };
    var prefixes = config.autoFetchSvg ? getKnownPrefixes() : Q.concat(Object.keys(styles$2));
    if (!prefixes.includes("fa")) {
      prefixes.push("fa");
    }
    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function(p$$1) {
      return ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(", ");
    if (prefixesDomQuery.length === 0) {
      return Promise.resolve();
    }
    var candidates = [];
    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e$$1) {
    }
    if (candidates.length > 0) {
      hclAdd("pending");
      hclRemove("complete");
    } else {
      return Promise.resolve();
    }
    var mark = perf.begin("onTree");
    var mutations = candidates.reduce(function(acc, node) {
      try {
        var mutation = generateMutation(node);
        if (mutation) {
          acc.push(mutation);
        }
      } catch (e$$1) {
        if (!PRODUCTION) {
          if (e$$1.name === "MissingIcon") {
            console.error(e$$1);
          }
        }
      }
      return acc;
    }, []);
    return new Promise(function(resolve, reject) {
      Promise.all(mutations).then(function(resolvedMutations) {
        perform(resolvedMutations, function() {
          hclAdd("active");
          hclAdd("complete");
          hclRemove("pending");
          if (typeof callback === "function") callback();
          mark();
          resolve();
        });
      }).catch(function(e$$1) {
        mark();
        reject(e$$1);
      });
    });
  }
  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    generateMutation(node).then(function(mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }
  function resolveIcons(next) {
    return function(maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;
      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }
      return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
        mask
      }));
    };
  }
  var render = function render2(iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon3 = iconDefinition.icon;
    return domVariants(_objectSpread2({
      type: "icon"
    }, iconDefinition), function() {
      callHooks("beforeDOMElementCreation", {
        iconDefinition,
        params
      });
      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon3),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix,
        iconName,
        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
        symbol,
        maskId,
        extra: {
          attributes,
          styles: styles2,
          classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout: function mixout2() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks: function hooks2() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.i2svg = function(params) {
        var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {
        } : _params$callback;
        return onTree(node, callback);
      };
      providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
        var iconName = nodeMeta.iconName, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
        return new Promise(function(resolve, reject) {
          Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
            found: false,
            width: 512,
            height: 512,
            icon: {}
          })]).then(function(_ref2) {
            var _ref22 = _slicedToArray(_ref2, 2), main = _ref22[0], mask2 = _ref22[1];
            resolve([node, makeInlineSvgAbstract({
              icons: {
                main,
                mask: mask2
              },
              prefix,
              iconName,
              transform,
              symbol,
              maskId,
              extra,
              watchable: true
            })]);
          }).catch(reject);
        });
      };
      providers$$1.generateAbstractIcon = function(_ref3) {
        var children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles2 = _ref3.styles;
        var styleString = joinStyles(styles2);
        if (styleString.length > 0) {
          attributes["style"] = styleString;
        }
        var nextChild;
        if (transformIsMeaningful(transform)) {
          nextChild = callProvided("generateAbstractTransformGrouping", {
            main,
            transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }
        children.push(nextChild || main.icon);
        return {
          children,
          attributes
        };
      };
    }
  };
  var Layers = {
    mixout: function mixout3() {
      return {
        layer: function layer2(assembler) {
          var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
          return domVariants({
            type: "layer"
          }, function() {
            callHooks("beforeDOMElementCreation", {
              assembler,
              params
            });
            var children = [];
            assembler(function(args) {
              Array.isArray(args) ? args.map(function(a2) {
                children = children.concat(a2.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: "span",
              attributes: {
                class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(" ")
              },
              children
            }];
          });
        }
      };
    }
  };
  var LayersCounter = {
    mixout: function mixout4() {
      return {
        counter: function counter2(content) {
          var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: "counter",
            content
          }, function() {
            callHooks("beforeDOMElementCreation", {
              content,
              params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title,
              extra: {
                attributes,
                styles: styles2,
                classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    }
  };
  var LayersText = {
    mixout: function mixout5() {
      return {
        text: function text2(content) {
          var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: "text",
            content
          }, function() {
            callHooks("beforeDOMElementCreation", {
              content,
              params
            });
            return makeLayersTextAbstract({
              content,
              transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
              extra: {
                attributes,
                styles: styles2,
                classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    },
    provides: function provides2(providers$$1) {
      providers$$1.generateLayersText = function(node, nodeMeta) {
        var transform = nodeMeta.transform, extra = nodeMeta.extra;
        var width = null;
        var height = null;
        if (IS_IE) {
          var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          var boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }
        return Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width,
          height,
          transform,
          extra,
          watchable: true
        })]);
      };
    }
  };
  var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
  var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
  var _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    FontAwesome: {
      normal: "fas",
      400: "fas"
    }
  }), Ct), ro), dl);
  var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce(function(acc, key) {
    acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
    return acc;
  }, {});
  var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce(function(acc, fontFamily) {
    var weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
    acc[fontFamily] = weights[900] || _toConsumableArray(Object.entries(weights))[0][1];
    return acc;
  }, {});
  function hexValueFromContent(content) {
    var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
    return toHex(_toConsumableArray(cleaned)[0] || "");
  }
  function isSecondaryLayer(styles2) {
    var hasStylisticSet = styles2.getPropertyValue("font-feature-settings").includes("ss01");
    var content = styles2.getPropertyValue("content");
    var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
    var codePoint = cleaned.codePointAt(0);
    var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return isPrependTen || isDoubled || hasStylisticSet;
  }
  function getPrefix(fontFamily, fontWeight) {
    var fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, "").toLowerCase();
    var fontWeightInteger = parseInt(fontWeight);
    var fontWeightSanitized = isNaN(fontWeightInteger) ? "normal" : fontWeightInteger;
    return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
  }
  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
    return new Promise(function(resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        return resolve();
      }
      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function(c$$1) {
        return c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles2 = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles2.getPropertyValue("font-family");
      var fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
      var fontWeight = styles2.getPropertyValue("font-weight");
      var content = styles2.getPropertyValue("content");
      if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamilyMatch && content !== "none" && content !== "") {
        var _content = styles2.getPropertyValue("content");
        var prefix = getPrefix(fontFamily, fontWeight);
        var hexValue = hexValueFromContent(_content);
        var isV4 = fontFamilyMatch[0].startsWith("FontAwesome");
        var isSecondary = isSecondaryLayer(styles2);
        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName;
        if (isV4) {
          var iconName4 = byOldUnicode(hexValue);
          if (iconName4.iconName && iconName4.prefix) {
            iconName = iconName4.iconName;
            prefix = iconName4.prefix;
          }
        }
        if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);
          if (alreadyProcessedPseudoElement) {
            node.removeChild(alreadyProcessedPseudoElement);
          }
          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function(main) {
            var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
              icons: {
                main,
                mask: emptyCanonicalIcon()
              },
              prefix,
              iconName: iconIdentifier,
              extra,
              watchable: true
            }));
            var element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
            if (position === "::before") {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }
            element.outerHTML = abstract.map(function(a$$1) {
              return toHtml(a$$1);
            }).join("\n");
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }
  function replace2(node) {
    return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
  }
  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
  }
  var hasPseudoElement = function hasPseudoElement2(selector) {
    return !!selector && PSEUDO_ELEMENTS.some(function(pseudoSelector) {
      return selector.includes(pseudoSelector);
    });
  };
  var parseCSSRuleForPseudos = function parseCSSRuleForPseudos2(selectorText) {
    if (!selectorText) return [];
    var selectorSet = /* @__PURE__ */ new Set();
    var selectors = selectorText.split(/,(?![^()]*\))/).map(function(s$$1) {
      return s$$1.trim();
    });
    selectors = selectors.flatMap(function(selector2) {
      return selector2.includes("(") ? selector2 : selector2.split(",").map(function(s$$1) {
        return s$$1.trim();
      });
    });
    var _iterator = _createForOfIteratorHelper(selectors), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var selector = _step.value;
        if (hasPseudoElement(selector)) {
          var selectorWithoutPseudo = PSEUDO_ELEMENTS.reduce(function(acc, pseudoSelector) {
            return acc.replace(pseudoSelector, "");
          }, selector);
          if (selectorWithoutPseudo !== "" && selectorWithoutPseudo !== "*") {
            selectorSet.add(selectorWithoutPseudo);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return selectorSet;
  };
  function searchPseudoElements(root) {
    var useAsNodeList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!IS_DOM) return;
    var nodeList;
    if (useAsNodeList) {
      nodeList = root;
    } else if (config.searchPseudoElementsFullScan) {
      nodeList = root.querySelectorAll("*");
    } else {
      var selectorSet = /* @__PURE__ */ new Set();
      var _iterator2 = _createForOfIteratorHelper(document.styleSheets), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var stylesheet = _step2.value;
          try {
            var _iterator3 = _createForOfIteratorHelper(stylesheet.cssRules), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var rule = _step3.value;
                var parsedSelectors = parseCSSRuleForPseudos(rule.selectorText);
                var _iterator4 = _createForOfIteratorHelper(parsedSelectors), _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                    var selector = _step4.value;
                    selectorSet.add(selector);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } catch (e$$1) {
            if (config.searchPseudoElementsWarnings) {
              console.warn("Font Awesome: cannot parse stylesheet: ".concat(stylesheet.href, " (").concat(e$$1.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'));
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (!selectorSet.size) return;
      var cleanSelectors = Array.from(selectorSet).join(", ");
      try {
        nodeList = root.querySelectorAll(cleanSelectors);
      } catch (_unused) {
      }
    }
    return new Promise(function(resolve, reject) {
      var operations = toArray(nodeList).filter(processable).map(replace2);
      var end3 = perf.begin("searchPseudoElements");
      disableObservation();
      Promise.all(operations).then(function() {
        end3();
        enableObservation();
        resolve();
      }).catch(function() {
        end3();
        enableObservation();
        reject();
      });
    });
  }
  var PseudoElements = {
    hooks: function hooks3() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides: function provides3(providers2) {
      providers2.pseudoElements2svg = function(params) {
        var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node;
        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };
  var _unwatched = false;
  var MutationObserver$1 = {
    mixout: function mixout6() {
      return {
        dom: {
          unwatch: function unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks: function hooks4() {
      return {
        bootstrap: function bootstrap() {
          observe(chainHooks("mutationObserverCallbacks", {}));
        },
        noAuto: function noAuto3() {
          disconnect();
        },
        watch: function watch2(params) {
          var observeMutationsRoot = params.observeMutationsRoot;
          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks("mutationObserverCallbacks", {
              observeMutationsRoot
            }));
          }
        }
      };
    }
  };
  var parseTransformString = function parseTransformString2(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(" ").reduce(function(acc, n2) {
      var parts = n2.toLowerCase().split("-");
      var first = parts[0];
      var rest = parts.slice(1).join("-");
      if (first && rest === "h") {
        acc.flipX = true;
        return acc;
      }
      if (first && rest === "v") {
        acc.flipY = true;
        return acc;
      }
      rest = parseFloat(rest);
      if (isNaN(rest)) {
        return acc;
      }
      switch (first) {
        case "grow":
          acc.size = acc.size + rest;
          break;
        case "shrink":
          acc.size = acc.size - rest;
          break;
        case "left":
          acc.x = acc.x - rest;
          break;
        case "right":
          acc.x = acc.x + rest;
          break;
        case "up":
          acc.y = acc.y - rest;
          break;
        case "down":
          acc.y = acc.y + rest;
          break;
        case "rotate":
          acc.rotate = acc.rotate + rest;
          break;
      }
      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout: function mixout7() {
      return {
        parse: {
          transform: function transform(transformString) {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks: function hooks5() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var transformString = node.getAttribute("data-fa-transform");
          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }
          return accumulator;
        }
      };
    },
    provides: function provides4(providers2) {
      providers2.generateAbstractTransformGrouping = function(_ref2) {
        var main = _ref2.main, transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
        var outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        var inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        var path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        var operations = {
          outer,
          inner,
          path
        };
        return {
          tag: "g",
          attributes: _objectSpread2({}, operations.outer),
          children: [{
            tag: "g",
            attributes: _objectSpread2({}, operations.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
            }]
          }]
        };
      };
    }
  };
  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
  };
  function fillBlack(abstract) {
    var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = "black";
    }
    return abstract;
  }
  function deGroup(abstract) {
    if (abstract.tag === "g") {
      return abstract.children;
    } else {
      return [abstract];
    }
  }
  var Masks = {
    hooks: function hooks6() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var maskData = node.getAttribute("data-fa-mask");
          var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map(function(i2) {
            return i2.trim();
          }));
          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }
          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute("data-fa-mask-id");
          return accumulator;
        }
      };
    },
    provides: function provides5(providers2) {
      providers2.generateAbstractMask = function(_ref2) {
        var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform;
        var mainWidth = main.width, mainPath = main.icon;
        var maskWidth = mask.width, maskPath = mask.icon;
        var trans = transformForSvg({
          transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        var maskRect = {
          tag: "rect",
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            fill: "white"
          })
        };
        var maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        var maskInnerGroup = {
          tag: "g",
          attributes: _objectSpread2({}, trans.inner),
          children: [fillBlack(_objectSpread2({
            tag: mainPath.tag,
            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        var maskOuterGroup = {
          tag: "g",
          attributes: _objectSpread2({}, trans.outer),
          children: [maskInnerGroup]
        };
        var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        var maskTag = {
          tag: "mask",
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            id: maskId,
            maskUnits: "userSpaceOnUse",
            maskContentUnits: "userSpaceOnUse"
          }),
          children: [maskRect, maskOuterGroup]
        };
        var defs = {
          tag: "defs",
          children: [{
            tag: "clipPath",
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: "rect",
          attributes: _objectSpread2({
            "fill": "currentColor",
            "clip-path": "url(#".concat(clipId, ")"),
            "mask": "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children,
          attributes
        };
      };
    }
  };
  var MissingIconIndicator = {
    provides: function provides6(providers2) {
      var reduceMotion = false;
      if (WINDOW.matchMedia) {
        reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
      }
      providers2.missingIconAbstract = function() {
        var gChildren = [];
        var FILL = {
          fill: "currentColor"
        };
        var ANIMATION_BASE = {
          attributeType: "XML",
          repeatCount: "indefinite",
          dur: "2s"
        };
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
          })
        });
        var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
          attributeName: "opacity"
        });
        var dot = {
          tag: "circle",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            cx: "256",
            cy: "364",
            r: "28"
          }),
          children: []
        };
        if (!reduceMotion) {
          dot.children.push({
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
              attributeName: "r",
              values: "28;14;28;28;14;28;"
            })
          }, {
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: "1;0;1;1;0;1;"
            })
          });
        }
        gChildren.push(dot);
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: "1",
            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
          }),
          children: reduceMotion ? [] : [{
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: "1;0;0;0;0;1;"
            })
          }]
        });
        if (!reduceMotion) {
          gChildren.push({
            tag: "path",
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              opacity: "0",
              d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            }),
            children: [{
              tag: "animate",
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: "0;0;1;1;0;0;"
              })
            }]
          });
        }
        return {
          tag: "g",
          attributes: {
            class: "missing"
          },
          children: gChildren
        };
      };
    }
  };
  var SvgSymbols = {
    hooks: function hooks7() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var symbolData = node.getAttribute("data-fa-symbol");
          var symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
          accumulator["symbol"] = symbol;
          return accumulator;
        }
      };
    }
  };
  var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
  registerPlugins(plugins, {
    mixoutsTo: api
  });
  var noAuto$1 = api.noAuto;
  var config$1 = api.config;
  var library$1 = api.library;
  var dom$1 = api.dom;
  var parse$1 = api.parse;
  var findIconDefinition$1 = api.findIconDefinition;
  var toHtml$1 = api.toHtml;
  var icon2 = api.icon;
  var layer = api.layer;
  var text = api.text;
  var counter = api.counter;

  // node_modules/@fortawesome/free-brands-svg-icons/index.mjs
  var faQuora = {
    prefix: "fab",
    iconName: "quora",
    icon: [448, 512, [], "f2c4", "M440.7 386.7l-29.3 0c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153 .1-117.5-96.6-196.7-198.4-196.7-99.7 0-197.7 79.7-197.7 196.7 0 134.1 131.3 221.6 249 189 19.7 33.6 45.7 62.3 95.2 62.3 81.8 0 90.8-75.3 89-93.3zM297.2 329.2c-19.5-29.2-43.7-52.2-91.5-52.2-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7 0-104.4 32.5-157.9 107.5-157.9 76.2 0 108.7 53.5 108.7 157.7 .1 41.8-5.4 75.6-16.7 100.5z"]
  };
  var faStackOverflow = {
    prefix: "fab",
    iconName: "stack-overflow",
    icon: [384, 512, [], "f16c", "M291 311l-195.7-41.3-8.2 39.3 195.7 41 8.2-39zm51-87L188.5 95.7 163 126.5 316.5 254.8 342 224zm-31.2 39.7L129.5 179 112.8 215.5 294 300 310.8 263.7zM262.3 32l-32 24 119.3 160.3 32-24-119.3-160.3zm20.5 328l-200 0 0 39.7 200 0 0-39.7zm39.7 80l-279.5 0 0-120-40 0 0 160 359.5 0 0-160-40 0 0 120z"]
  };
  var faReddit = {
    prefix: "fab",
    iconName: "reddit",
    icon: [512, 512, [], "f1a1", "M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256 397.4 512 256 512L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1-10.1-7.8-22.8-12.5-36.5-12.5-33 0-59.8 26.8-59.8 59.8 0 24 14.1 44.6 34.4 54.1 2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54 0-33-26.8-59.8-59.8-59.8-13.7 0-26.3 4.6-36.4 12.4-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9 4.4 18.8 21.3 32.8 41.5 32.8l.1 .2zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6-31.4-8.8-30.4-30.5 15.4-38.3 32.1-38.3l.1-.1zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6 11.8-39.3 28.5-39.3 31.2 16.6 32.1 38.3l.1 .1zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5 18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z"]
  };
  var faXing = {
    prefix: "fab",
    iconName: "xing",
    icon: [384, 512, [], "f168", "M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5L9.8 346c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3L26.4 134.4c-4.3-7.8 .3-14.1 8.5-14.1l65.1 0c7.3 0 13.3 4.1 18 12.2L162.7 210zM382.6 46.1l-144 253 0 .3 91.6 166.6c3.9 7.1 .2 14.1-8.5 14.1l-65.2 0c-7.6 0-13.6-4-18-12.2L146.1 299.4c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2l65.7 0c8 0 12.3 6.7 8.5 14.1z"]
  };
  var faZhihu = {
    prefix: "fab",
    iconName: "zhihu",
    icon: [640, 512, [], "f63f", "M170.5 148.1l0 217.5 23.4 0 7.7 26.4 42-26.4 49.5 0 0-217.5-122.7 0zm97.8 193.9l-27.9 0-27.9 17.5-5.1-17.5-11.9 0 0-170.3 72.8 0 0 170.3zM149.8 247.7l-52.3 0c1.7-27.1 2.2-51.6 2.2-73.5l51.2 0s2-22.6-8.6-22.3l-88.5 0c3.5-13.1 7.9-26.7 13.1-40.7 0 0-24.1 0-32.3 21.6-3.4 8.9-13.2 43.1-30.7 78.1 5.9-.6 25.4-1.2 36.8-22.2 2.1-5.9 2.5-6.7 5.1-14.5l28.9 0c0 10.5-1.2 66.9-1.7 73.4l-52.3 0c-11.7 0-15.6 23.6-15.6 23.6l65.6 0c-4.4 49.9-28 91.9-70.8 125.1 20.5 5.9 40.9-.9 51-9.9 0 0 23-20.9 35.6-69.3l54 64.9s7.9-26.9-1.2-40c-7.6-8.9-28.1-33.1-36.8-41.8L87.9 312c4.4-14 7-27.6 7.9-40.7l61.6 0s-.1-23.6-7.6-23.6l0 0zm412-1.6c20.8-25.6 45-58.6 45-58.6s-18.6-14.8-27.4-4.1c-6 8.2-36.8 48.2-36.8 48.2l19.2 14.4zM411.8 187c-9-8.2-25.9 2.1-25.9 2.1s39.5 55 41.1 57.4l19.5-13.7s-25.7-37.6-34.7-45.9l0 0 0 0zM640 258.4c-19.8 0-130.9 .9-131.1 .9l0-101c4.8 0 12.4-.4 22.8-1.2 40.9-2.4 70.1-4 87.8-4.8 0 0 12.2-27.2-.6-33.4-3.1-1.2-23.2 4.6-23.2 4.6s-165.2 16.5-232.4 18c1.6 8.8 7.6 17.1 15.8 19.6 13.3 3.5 22.7 1.7 49.2 .9 24.8-1.6 43.7-2.4 56.5-2.4l0 99.8-133.5 0s2.8 22.3 25.5 22.9l107.9 0 0 70.9c0 14-11.2 22-24.5 21.1-14.1 .1-26.1-1.1-41.7-1.8 2 4 6.3 14.4 19.3 21.8 9.9 4.8 16.2 6.6 26 6.6 29.6 0 45.7-17.3 44.9-45.3l0-73.3 122.4 0c9.7 0 8.7-23.8 8.7-23.8l0 0z"]
  };
  var faCreativeCommonsBy = {
    prefix: "fab",
    iconName: "creative-commons-by",
    icon: [512, 512, [], "f4e7", "M322.9 194.4l0 101.4-28.3 0 0 120.5-77.1 0 0-120.4-28.3 0 0-101.5c0-4.4 1.6-8.2 4.6-11.3 3.1-3.1 6.9-4.7 11.3-4.7l101.9 0c4.1 0 7.8 1.6 11.1 4.7 3.1 3.2 4.8 6.9 4.8 11.3zm-32.5-64.5a34.5 34.5 0 1 1 -69 .8 34.5 34.5 0 1 1 69-.8zM255.6 8C397.4 8 504 118.1 504 256 504 403.1 385.5 504 255.6 504 121.6 504 8 394.5 8 256 8 123.1 112.7 8 255.6 8zm.8 44.7c-118.2 0-203.7 97.9-203.7 203.3 0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8 .1-113.8-90.2-203.3-202.8-203.3z"]
  };
  var faFacebookF = {
    prefix: "fab",
    iconName: "facebook-f",
    icon: [320, 512, [], "f39e", "M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"]
  };
  var faItchIo = {
    prefix: "fab",
    iconName: "itch-io",
    icon: [512, 512, [], "f83a", "M71.9 34.8C50.2 47.7 7.4 96.8 7 109.7l0 21.3c0 27.1 25.3 50.8 48.2 50.8 27.6 0 50.5-22.8 50.5-50 0 27.1 22.2 50 49.8 50s49-22.8 49-50c0 27.1 23.6 50 51.2 50l.5 0c27.6 0 51.2-22.8 51.2-50 0 27.1 21.5 50 49 50s49.8-22.8 49.8-50c0 27.1 23 50 50.5 50 23 0 48.3-23.8 48.3-50.8l0-21.3c-.4-12.9-43.2-62.1-64.9-75-67.4-2.3-114.2-2.7-184-2.7S91.1 33.1 71.9 34.8zM204.2 169.2c-22 38.4-77.9 38.7-99.8 .2-13.2 23.1-43.2 32.1-56 27.7-3.9 40.2-13.7 237.1 17.7 269.2 80 18.7 302.1 18.1 379.8 0 31.6-32.3 21.3-232 17.7-269.2-12.9 4.4-42.9-4.6-56-27.7-22 38.5-77.8 38.1-99.8-.2-7.1 12.5-23 28.9-51.8 28.9-10.4 .3-20.8-2.2-29.9-7.3s-16.7-12.6-21.9-21.6l0 0zm-41.6 53.8c16.5 0 31.1 0 49.2 19.8 29.3-3 58.9-3 88.2 0 18.2-19.7 32.8-19.7 49.2-19.7 52.3 0 65.2 77.5 83.9 144.4 17.3 62.2-5.5 63.7-34 63.7-42.1-1.6-65.5-32.2-65.5-62.8-39.3 6.4-101.9 8.8-155.6 0 0 30.6-23.3 61.2-65.5 62.8-28.4-.1-51.2-1.6-33.9-63.7 18.7-67 31.6-144.4 83.9-144.4l0-.1zM256 270.8s-44.4 40.8-52.4 55.2l29-1.2 0 25.3c0 1.5 21.3 .2 23.3 .2 11.6 .5 23.3 1 23.3-.2l0-25.3 29 1.2c-8-14.5-52.4-55.2-52.4-55.2l.1 0z"]
  };
  var faDiscord = {
    prefix: "fab",
    iconName: "discord",
    icon: [576, 512, [], "f392", "M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z"]
  };
  var faWeixin = {
    prefix: "fab",
    iconName: "weixin",
    icon: [576, 512, [], "f1d7", "M385.2 167.6c6.4 0 12.6 .3 18.8 1.1-16.6-78.4-100.7-136.7-196.3-136.7-107.2 0-194.7 72.8-194.7 165.4 0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zM280.7 114.7c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2 .1-14.7 14.6-24.4 29.3-24.4zM144.3 163.3c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zM343.9 294.9c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3 .1 10-9.9 19.6-24.4 19.6z"]
  };
  var faPinterest = {
    prefix: "fab",
    iconName: "pinterest",
    icon: [512, 512, [], "f0d2", "M504 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2C161.5 437.2 163.5 467.4 165.6 487 73.4 450.9 8 361.1 8 256 8 119 119 8 256 8S504 119 504 256z"]
  };
  var faYoutube = {
    prefix: "fab",
    iconName: "youtube",
    icon: [576, 512, [61802], "f167", "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]
  };
  var faPaypal = {
    prefix: "fab",
    iconName: "paypal",
    icon: [384, 512, [], "f1ed", "M111.9 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5l-74.6 0c-7.6 0-13.1-6.6-12.1-13.9L59.3 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.6 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9l63.5 0c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"]
  };
  var faLastfm = {
    prefix: "fab",
    iconName: "lastfm",
    icon: [512, 512, [], "f202", "M225.8 367.1l-18.8-51s-30.5 34-76.2 34c-40.5 0-69.2-35.2-69.2-91.5 0-72.1 36.4-97.9 72.1-97.9 66.5 0 74.8 53.3 100.9 134.9 18.8 56.9 54 102.6 155.4 102.6 72.7 0 122-22.3 122-80.9 0-72.9-62.7-80.6-115-92.1-25.8-5.9-33.4-16.4-33.4-34 0-19.9 15.8-31.7 41.6-31.7 28.2 0 43.4 10.6 45.7 35.8l58.6-7c-4.7-52.8-41.1-74.5-100.9-74.5-52.8 0-104.4 19.9-104.4 83.9 0 39.9 19.4 65.1 68 76.8 44.9 10.6 79.8 13.8 79.8 45.7 0 21.7-21.1 30.5-61 30.5-59.2 0-83.9-31.1-97.9-73.9-32-96.8-43.6-163-161.3-163-86.1 0-131.8 54.5-131.8 147.2 0 89.1 45.7 137.2 127.9 137.2 66.2 0 97.9-31.1 97.9-31.1z"]
  };
  var faBitbucket = {
    prefix: "fab",
    iconName: "bitbucket",
    icon: [512, 512, [61810], "f171", "M22.2 32c-2.1 0-4.2 .4-6.1 1.1s-3.7 1.9-5.2 3.4-2.7 3.2-3.5 5.1-1.3 4-1.3 6.1c0 .9 .1 1.9 .2 2.8L74.1 462.7c.8 5.1 3.4 9.7 7.3 13s8.8 5.2 14 5.2l325.7 0c3.8 .1 7.5-1.3 10.5-3.7s4.9-5.9 5.5-9.7L505 50.7c.7-4.2-.3-8.4-2.8-11.9s-6.2-5.7-10.4-6.4c-.9-.1-1.9-.2-2.8-.2L22.2 32zM308.1 329.8l-104 0-28.1-147 157.3 0-25.2 147z"]
  };
  var faGithub = {
    prefix: "fab",
    iconName: "github",
    icon: [512, 512, [], "f09b", "M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]
  };
  var faCreativeCommonsNc = {
    prefix: "fab",
    iconName: "creative-commons-nc",
    icon: [512, 512, [], "f4e8", "M255.6 8C395.4 8 504 115.9 504 256 504 403.2 385.5 504 255.6 504 121.1 504 8 393.2 8 256 8 123.1 112.7 8 255.6 8zM63.8 189.1c-7.4 20.4-11.1 42.7-11.1 66.9 0 110.9 92.1 202.4 203.7 202.4 122.4 0 177.2-101.8 178.5-104.1l-93.4-41.6c-7.7 37.1-41.2 53-68.2 55.4l0 38.1-28.8 0 0-38.2c-27.5-.3-52.6-10.2-75.3-29.7l34.1-34.5c31.7 29.4 86.4 31.8 86.4-2.2 0-6.2-2.2-11.2-6.6-15.1-14.2-6-1.8-.1-219.3-97.4zM256.4 52.3C218 52.3 144 61 85.9 145.3l94.8 42.5c10-31.3 40.4-42.9 63.8-44.3l0-38.1 28.8 0 0 38.1c22.7 1.2 43.4 8.9 62 23L303 199.7c-42.7-29.9-83.5-8-70 11.1 53.4 24.1 43.8 19.8 93 41.6l127.1 56.7c4.1-17.4 6.2-35.1 6.2-53.1 0-57-19.8-105-59.3-143.9-39.3-39.9-87.2-59.8-143.6-59.8z"]
  };
  var faGitlab = {
    prefix: "fab",
    iconName: "gitlab",
    icon: [512, 512, [], "f296", "M504 204.6l-.7-1.8-69.7-181.8c-1.4-3.6-3.9-6.6-7.2-8.6-2.4-1.6-5.1-2.5-8-2.8s-5.7 .1-8.4 1.1-5.1 2.7-7.1 4.8c-1.9 2.1-3.3 4.7-4.1 7.4l-47 144-190.5 0-47.1-144c-.8-2.8-2.2-5.3-4.1-7.4-2-2.1-4.4-3.7-7.1-4.8-2.6-1-5.5-1.4-8.4-1.1s-5.6 1.2-8 2.8c-3.2 2-5.8 5.1-7.2 8.6L9.8 202.8 9 204.6c-10 26.2-11.3 55-3.5 82 7.7 26.9 24 50.7 46.4 67.6l.3 .2 .6 .4 106 79.5c38.5 29.1 66.7 50.3 84.6 63.9 3.7 1.9 8.3 4.3 13 4.3s9.3-2.4 13-4.3c17.9-13.5 46.1-34.9 84.6-63.9l106.7-79.9 .3-.3c22.4-16.9 38.7-40.6 45.6-67.5 8.6-27 7.4-55.8-2.6-82z"]
  };
  var faQq = {
    prefix: "fab",
    iconName: "qq",
    icon: [448, 512, [], "f1d6", "M434.1 420.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.1 72.2-51 101.8 16.8 5.2 54.8 19.2 45.8 34.4-7.3 12.3-125.5 7.9-159.6 4-34.1 3.8-152.3 8.3-159.6-4-9-15.2 28.9-29.2 45.8-34.4-34.9-29.5-51.1-70.4-51.1-101.8 0 0-33.3 54.1-44.9 52.7-5.4-.6-12.4-29.6 9.3-99.7 10.3-33 22-60.5 40.1-105.8-3.1-116.9 45.2-215 160.3-215 113.7 0 163.2 96.1 160.3 215 18.1 45.2 29.9 72.9 40.1 105.8 21.8 70.1 14.7 99.1 9.3 99.7z"]
  };
  var faCreativeCommonsSa = {
    prefix: "fab",
    iconName: "creative-commons-sa",
    icon: [512, 512, [], "f4ef", "M255.6 8C397.4 8 504 118.1 504 256 504 403.1 385.5 504 255.6 504 121.6 504 8 394.5 8 256 8 123.1 112.7 8 255.6 8zm.8 44.7c-118.2 0-203.7 97.9-203.7 203.3 0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8 .1-113.8-90.2-203.3-202.8-203.3zM145.7 221c13-83.9 80.5-95.7 108.9-95.7 99.8 0 127.5 82.5 127.5 134.2 0 63.6-41 132.9-128.9 132.9-38.9 0-99.1-20-109.4-97l62.5 0c1.5 30.1 19.6 45.2 54.5 45.2 23.3 0 58-18.2 58-82.8 0-82.5-49.1-80.6-56.7-80.6-33.1 0-51.7 14.6-55.8 43.8l18.2 0-49.2 49.2-49-49.2 19.4 0z"]
  };
  var faMedium = {
    prefix: "fab",
    iconName: "medium",
    icon: [448, 512, [62407, "medium-m"], "f23a", "M369.4 32c43.4 0 78.6 35.2 78.6 78.6l0 83.8c-1.9-.1-3.8-.2-5.7-.2l-.4 0c-10 0-22.3 2.4-31.1 6.8-10 4.6-18.7 11.5-26 20.6-11.8 14.6-18.9 34.3-20.6 56.4-.1 .7-.1 1.3-.2 2s-.1 1.2-.1 1.9c-.1 1.2-.1 2.4-.1 3.6 0 1.9-.1 3.8 0 5.8 1.2 50.1 28.2 90.2 76.3 90.2 2.7 0 5.3-.1 7.9-.4l0 20.4c0 43.4-35.2 78.6-78.6 78.6L78.6 480C35.2 480 0 444.8 0 401.4L0 110.6C0 67.2 35.2 32 78.6 32l290.8 0zM82.3 138.9l.3 .1c13.2 3 19.8 7.4 19.8 23.4l0 187.2c0 16-6.7 20.4-19.9 23.4l-.3 .1 0 2.8 52.8 0 0-2.8-.3-.1c-13.2-3-19.9-7.4-19.9-23.4l0-176.3 86.1 202.5 4.9 0 88.6-208.2 0 186.6c-1.1 12.6-7.8 16.5-19.7 19.2l-.3 .1 0 2.7 91.9 0 0-2.7-.3-.1c-11.9-2.7-18.7-6.6-19.9-19.2l-.1-191.8 .1 0c0-16 6.7-20.4 19.9-23.4l.3-.1 0-2.7-72.2 0-67 157.4-67-157.4-77.8 0 0 2.7zM448 340.3c-25.1-7.4-43-35.1-41.2-67.8l0 0 41.1 0 0 67.8zm-6.4-135.6c2.3 0 4.4 .3 6.4 .9l0 57.4-40.2 0c1.5-33.6 13.6-57.9 33.8-58.3z"]
  };
  var faMediumM = faMedium;
  var faTumblr = {
    prefix: "fab",
    iconName: "tumblr",
    icon: [320, 512, [], "f173", "M309.9 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6l0-144-47.5 0c-5.5 0-10-4.5-10-10l0-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1 .8-11 6.5-16.3 16.1-16.3l70.9 0c5.5 0 10 4.5 10 10l0 115.2 83 0c5.5 0 10 4.4 10 9.9l0 81.7c0 5.5-4.5 10-10 10l-83.4 0 0 133.2c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5 .9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"]
  };
  var faMastodon = {
    prefix: "fab",
    iconName: "mastodon",
    icon: [448, 512, [], "f4f6", "M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54-.6-4.6-.9-9.3-.9-13.9 85.6 20.9 158.7 9.1 178.7 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zM357.9 304.3l-46.6 0 0-114.2c0-49.7-64-51.6-64 6.9l0 62.5-46.3 0 0-62.5c0-58.5-64-56.6-64-6.9l0 114.2-46.7 0c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175l0 0z"]
  };
  var faDocker = {
    prefix: "fab",
    iconName: "docker",
    icon: [640, 512, [], "f395", "M349.9 236.3l-66.1 0 0-59.4 66.1 0 0 59.4zm0-204.3l-66.1 0 0 60.7 66.1 0 0-60.7zm78.2 144.8l-66.1 0 0 59.4 66.1 0 0-59.4zM271.8 104.7l-66.1 0 0 60.1 66.1 0 0-60.1zm78.1 0l-66.1 0 0 60.1 66.1 0 0-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7l-434.7 0c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zM115.6 176.8l-66 0 0 59.4 66.1 0 0-59.4-.1 0zm78.1 0l-66.1 0 0 59.4 66.1 0 0-59.4zm78.1 0l-66.1 0 0 59.4 66.1 0 0-59.4zm-78.1-72.1l-66.1 0 0 60.1 66.1 0 0-60.1z"]
  };
  var faCreativeCommonsNd = {
    prefix: "fab",
    iconName: "creative-commons-nd",
    icon: [512, 512, [], "f4eb", "M255.6 8C397.4 8 504 118.1 504 256 504 403.1 385.5 504 255.6 504 121.6 504 8 394.5 8 256 8 123.1 112.7 8 255.6 8zm.8 44.7c-118.2 0-203.7 97.9-203.7 203.3 0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8 .1-113.8-90.2-203.3-202.8-203.3zm94 144.3l0 42.5-180.3 0 0-42.5 180.3 0zm0 79.8l0 42.5-180.3 0 0-42.5 180.3 0z"]
  };
  var faTiktok = {
    prefix: "fab",
    iconName: "tiktok",
    icon: [448, 512, [], "e07b", "M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"]
  };
  var faInstagram = {
    prefix: "fab",
    iconName: "instagram",
    icon: [448, 512, [], "f16d", "M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
  };
  var faCreativeCommonsZero = {
    prefix: "fab",
    iconName: "creative-commons-zero",
    icon: [512, 512, [], "f4f3", "M255.6 8C397.4 8 504 118.1 504 256 504 403.1 385.5 504 255.6 504 121.6 504 8 394.5 8 256 8 123.1 112.7 8 255.6 8zm.8 44.7c-118.2 0-203.7 97.9-203.7 203.3 0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8 .1-113.8-90.2-203.3-202.8-203.3zm-.4 60.5c-81.9 0-102.5 77.3-102.5 142.8S174.1 398.8 256 398.8 358.5 321.5 358.5 256 337.9 113.2 256 113.2zm0 53.9c3.3 0 6.4 .5 9.2 1.2 5.9 5.1 8.8 12.1 3.1 21.9L213.8 290.4c-1.7-12.7-1.9-25.1-1.9-34.4 0-28.8 2-88.9 44.1-88.9zm40.8 46.2c2.9 15.4 3.3 31.4 3.3 42.7 0 28.9-2 88.9-44.1 88.9-13.5 0-32.6-7.7-20.1-26.4l60.9-105.2z"]
  };
  var faCreativeCommons = {
    prefix: "fab",
    iconName: "creative-commons",
    icon: [512, 512, [], "f25e", "M253.8 214.9l-33.2 17.3c-9.4-19.6-25.2-19.9-27.5-19.9-22.1 0-33.2 14.6-33.2 43.8 0 23.6 9.2 43.8 33.2 43.8 14.5 0 24.6-7.1 30.6-21.3l30.6 15.5c-6.2 11.5-25.7 39-65.1 39-22.6 0-74-10.3-74-77 0-58.7 43-77.1 72.6-77.1 30.7 0 52.7 11.9 66 35.9zm143 0l-32.8 17.3c-9.5-19.8-25.7-19.9-27.9-19.9-22.1 0-33.2 14.6-33.2 43.8 0 23.5 9.2 43.8 33.2 43.8 14.4 0 24.6-7.1 30.5-21.3l31 15.5c-2.1 3.8-21.4 39-65.1 39-22.7 0-74-9.9-74-77 0-58.7 43-77.1 72.6-77.1 30.7 0 52.6 11.9 65.6 35.9zM255.6 8C112.7 8 8 123.1 8 256.1 8 394.5 121.6 504.1 255.6 504.1 385.5 504.1 504 403.2 504 256.1 504 118.2 397.4 8 255.6 8zm.9 450.8c-112.5 0-203.7-93-203.7-202.8 0-105.4 85.4-203.3 203.7-203.3 112.5 0 202.8 89.5 202.8 203.3 0 121.7-99.7 202.8-202.8 202.8z"]
  };
  var faLinkedinIn = {
    prefix: "fab",
    iconName: "linkedin-in",
    icon: [448, 512, [], "f0e1", "M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"]
  };
  var faTwitter = {
    prefix: "fab",
    iconName: "twitter",
    icon: [512, 512, [], "f099", "M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]
  };
  var faArtstation = {
    prefix: "fab",
    iconName: "artstation",
    icon: [512, 512, [], "f77a", "M2.1 377.4l43 74.3c4.3 8.5 10.8 15.7 18.9 20.7s17.4 7.6 27 7.6l285.4 0-59.2-102.6-315.1 0zM501.9 350L335.7 59.3c-4.4-8.2-10.9-15.1-18.9-20S299.7 32 290.4 32l-88.4 0 257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM275.2 304.5l-115.5-200-115.5 200 231 0z"]
  };
  var faTelegram = {
    prefix: "fab",
    iconName: "telegram",
    icon: [512, 512, [62462, "telegram-plane"], "f2c6", "M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z"]
  };
  var faTelegramPlane = faTelegram;
  var faKaggle = {
    prefix: "fab",
    iconName: "kaggle",
    icon: [320, 512, [], "f5fa", "M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5l-69.2 0c-3.5 0-7 1.8-10.5 5.3l-132.3 133.7 0-306c0-5-2.5-7.5-7.5-7.5L21.5 0C16.5 0 14 2.5 14 7.5l0 497c0 5 2.5 7.5 7.5 7.5l51.9 0c5 0 7.5-2.5 7.5-7.5l0-109 30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3l66.9 0c3.5 0 5.5-1 6-3l-1.4-7.6z"]
  };
  var faPatreon = {
    prefix: "fab",
    iconName: "patreon",
    icon: [512, 512, [], "f3d9", "M490 153.8c-.1-65.4-51-119-110.7-138.3-74.2-24-172-20.5-242.9 12.9-85.8 40.5-112.8 129.3-113.8 217.8-.8 72.8 6.4 264.4 114.6 265.8 80.3 1 92.3-102.5 129.5-152.3 26.4-35.5 60.5-45.5 102.4-55.9 72-17.8 121.1-74.7 121-150l-.1 0z"]
  };
  var faAlipay = {
    prefix: "fab",
    iconName: "alipay",
    icon: [448, 512, [], "f642", "M377.7 32L70.3 32C31.4 32 0 63.4 0 102.3L0 409.7C0 448.6 31.4 480 70.3 480l307.5 0c38.5 0 69.8-31.1 70.3-69.6-46-25.6-110.6-60.3-171.6-88.4-32.1 44-84.1 81-148.6 81-70.6 0-93.7-45.3-97-76.4-4-39 14.9-81.5 99.5-81.5 35.4 0 79.4 10.2 127.1 25 16.5-30.1 26.5-60.3 26.5-60.3l-178.2 0 0-16.7 92.1 0 0-31.2-109.4 0 0-19 109.4 0 0-50.4 50.9 0 0 50.4 109.4 0 0 19-109.4 0 0 31.2 88.8 0s-15.2 46.6-38.3 90.9c48.9 16.7 100 36 148.6 52.7l0-234.4c.2-38.7-31.2-70.3-69.9-70.3zM47.3 323c1 20.2 10.2 53.7 69.9 53.7 52.1 0 92.6-39.7 117.9-72.9-44.6-18.7-84.5-31.4-109.4-31.4-67.4 0-79.4 33.1-78.4 50.6z"]
  };
  var faWeibo = {
    prefix: "fab",
    iconName: "weibo",
    icon: [512, 512, [], "f18a", "M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7c-106.3 0-214.8-51.4-214.8-136.3 0-44.3 28-95.4 76.3-143.7 99.7-99.7 203.2-100.9 173.6-5.7-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zM358.5 300.4c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8 .3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4 .6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"]
  };
  var faDiscourse = {
    prefix: "fab",
    iconName: "discourse",
    icon: [448, 512, [], "f393", "M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2C348.6 479.8 448 377.5 448 255.9S348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392 111.4 317c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"]
  };
  var faSquareFacebook = {
    prefix: "fab",
    iconName: "square-facebook",
    icon: [448, 512, ["facebook-square"], "f082", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
  };
  var faFacebookSquare = faSquareFacebook;

  // node_modules/@fortawesome/free-regular-svg-icons/index.mjs
  var faStar = {
    prefix: "far",
    iconName: "star",
    icon: [576, 512, [11088, 61446], "f005", "M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"]
  };

  // node_modules/@fortawesome/free-solid-svg-icons/index.mjs
  var faQuestion = {
    prefix: "fas",
    iconName: "question",
    icon: [320, 512, [10067, 10068, 61736], "3f", "M64 160c0-53 43-96 96-96s96 43 96 96c0 42.7-27.9 78.9-66.5 91.4-28.4 9.2-61.5 35.3-61.5 76.6l0 24c0 17.7 14.3 32 32 32s32-14.3 32-32l0-24c0-1.7 .6-4.1 3.5-7.3 3-3.3 7.9-6.5 13.7-8.4 64.3-20.7 110.8-81 110.8-152.3 0-88.4-71.6-160-160-160S0 71.6 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm96 352c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z"]
  };
  var faEnvelope = {
    prefix: "fas",
    iconName: "envelope",
    icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]
  };
  var faShareNodes = {
    prefix: "fas",
    iconName: "share-nodes",
    icon: [512, 512, ["share-alt"], "f1e0", "M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z"]
  };
  var faShareAlt = faShareNodes;
  var faEllipsis = {
    prefix: "fas",
    iconName: "ellipsis",
    icon: [448, 512, ["ellipsis-h"], "f141", "M0 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm168 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]
  };
  var faEllipsisH = faEllipsis;
  var faFileZipper = {
    prefix: "fas",
    iconName: "file-zipper",
    icon: [384, 512, ["file-archive"], "f1c6", "M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM64 72c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 48C74.7 48 64 58.7 64 72zm0 96c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zm64 72l-32 0c-17.7 0-32 14.3-32 32l0 48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-48c0-17.7-14.3-32-32-32zm-16 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]
  };
  var faFileArchive = faFileZipper;
  var faRss = {
    prefix: "fas",
    iconName: "rss",
    icon: [448, 512, ["feed"], "f09e", "M0 64c0-17.7 14.3-32 32-32 229.8 0 416 186.2 416 416 0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96 14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM32 160c159.1 0 288 128.9 288 288 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
  };
  var faMagnifyingGlass = {
    prefix: "fas",
    iconName: "magnifying-glass",
    icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
  };
  var faSearch = faMagnifyingGlass;
  var faReply = {
    prefix: "fas",
    iconName: "reply",
    icon: [512, 512, [61714, "mail-reply"], "f3e5", "M204.2 18.4c12 5 19.8 16.6 19.8 29.6l0 80 112 0c97.2 0 176 78.8 176 176 0 113.3-81.5 163.9-100.2 174.1-2.5 1.4-5.3 1.9-8.1 1.9-10.9 0-19.7-8.9-19.7-19.7 0-7.5 4.3-14.4 9.8-19.5 9.4-8.8 22.2-26.4 22.2-56.7 0-53-43-96-96-96l-96 0 0 80c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-160-160c-12.5-12.5-12.5-32.8 0-45.3l160-160c9.2-9.2 22.9-11.9 34.9-6.9z"]
  };
  var faPalette = {
    prefix: "fas",
    iconName: "palette",
    icon: [512, 512, [127912], "f53f", "M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
  };
  var faExpand = {
    prefix: "fas",
    iconName: "expand",
    icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
  };
  var faTableColumns = {
    prefix: "fas",
    iconName: "table-columns",
    icon: [448, 512, ["columns"], "f0db", "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"]
  };
  var faColumns = faTableColumns;
  var faPenToSquare = {
    prefix: "fas",
    iconName: "pen-to-square",
    icon: [512, 512, ["edit"], "f044", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]
  };
  var faEdit = faPenToSquare;
  var faCircleHalfStroke = {
    prefix: "fas",
    iconName: "circle-half-stroke",
    icon: [512, 512, [9680, "adjust"], "f042", "M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]
  };
  var faAdjust = faCircleHalfStroke;
  var faRocket = {
    prefix: "fas",
    iconName: "rocket",
    icon: [512, 512, [], "f135", "M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]
  };
  var faEyeDropper = {
    prefix: "fas",
    iconName: "eye-dropper",
    icon: [512, 512, ["eye-dropper-empty", "eyedropper"], "f1fb", "M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"]
  };
  var faSun = {
    prefix: "fas",
    iconName: "sun",
    icon: [576, 512, [9728], "f185", "M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]
  };
  var faCode = {
    prefix: "fas",
    iconName: "code",
    icon: [576, 512, [], "f121", "M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]
  };
  var faThumbtack = {
    prefix: "fas",
    iconName: "thumbtack",
    icon: [384, 512, [128204, 128392, "thumb-tack"], "f08d", "M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]
  };
  var faFolder = {
    prefix: "fas",
    iconName: "folder",
    icon: [512, 512, [128193, 128447, 61716, "folder-blank"], "f07b", "M64 448l384 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64L298.7 80c-6.9 0-13.7-2.2-19.2-6.4L241.1 44.8C230 36.5 216.5 32 202.7 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64z"]
  };
  var faCircleExclamation = {
    prefix: "fas",
    iconName: "circle-exclamation",
    icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]
  };
  var faExclamationCircle = faCircleExclamation;
  var faLink = {
    prefix: "fas",
    iconName: "link",
    icon: [576, 512, [128279, "chain"], "f0c1", "M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]
  };
  var faRectangleList = {
    prefix: "fas",
    iconName: "rectangle-list",
    icon: [512, 512, ["list-alt"], "f022", "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm96 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm120-56l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
  };
  var faListAlt = faRectangleList;
  var faBuilding = {
    prefix: "fas",
    iconName: "building",
    icon: [384, 512, [127970, 61687], "f1ad", "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]
  };
  var faGear = {
    prefix: "fas",
    iconName: "gear",
    icon: [512, 512, [9881, "cog"], "f013", "M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]
  };
  var faCog = faGear;
  var faCircleQuestion = {
    prefix: "fas",
    iconName: "circle-question",
    icon: [512, 512, [62108, "question-circle"], "f059", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
  };
  var faQuestionCircle = faCircleQuestion;
  var faUpRightAndDownLeftFromCenter = {
    prefix: "fas",
    iconName: "up-right-and-down-left-from-center",
    icon: [512, 512, ["expand-alt"], "f424", "M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2S34.1 320.2 41 327l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S177.7 512 168 512z"]
  };
  var faExpandAlt = faUpRightAndDownLeftFromCenter;
  var faCopyright = {
    prefix: "fas",
    iconName: "copyright",
    icon: [512, 512, [169], "f1f9", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM205.1 306.9c28.1 28.1 73.7 28.1 101.8 0 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-46.9 46.9-122.8 46.9-169.7 0s-46.9-122.8 0-169.7 122.8-46.9 169.7 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-28.1-28.1-73.7-28.1-101.8 0s-28.1 73.7 0 101.8z"]
  };
  var faHouse = {
    prefix: "fas",
    iconName: "house",
    icon: [512, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]
  };
  var faHome = faHouse;
  var faSpinner = {
    prefix: "fas",
    iconName: "spinner",
    icon: [512, 512, [], "f110", "M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z"]
  };
  var faSquareUpRight = {
    prefix: "fas",
    iconName: "square-up-right",
    icon: [448, 512, [8599, "external-link-square-alt"], "f360", "M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM168 160c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l35 35-67 67c-9.4 9.4-9.4 24.6 0 33.9l24 24c9.4 9.4 24.6 9.4 33.9 0l67-67 35 35c6.9 6.9 17.2 8.9 26.2 5.2S320 321.7 320 312l0-128c0-13.3-10.7-24-24-24l-128 0z"]
  };
  var faExternalLinkSquareAlt = faSquareUpRight;
  var faUser = {
    prefix: "fas",
    iconName: "user",
    icon: [448, 512, [128100, 62144, 62470, "user-alt", "user-large"], "f007", "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]
  };
  var faSkullCrossbones = {
    prefix: "fas",
    iconName: "skull-crossbones",
    icon: [448, 512, [128369, 9760], "f714", "M384 144C384 64.5 312.4 0 224 0S64 64.5 64 144c0 47.1 25.1 88.9 64 115.2l0 28.8c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-28.8c38.9-26.3 64-68.1 64-115.2zM160 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM445.5 339.7c-6.8-16.3-25.5-24-41.8-17.2L224 397.3 44.3 322.5c-16.3-6.8-35 .9-41.8 17.2s.9 35 17.2 41.8L140.8 432 19.7 482.5C3.4 489.3-4.3 508 2.5 524.3s25.5 24 41.8 17.2L224 466.7 403.7 541.5c16.3 6.8 35-.9 41.8-17.2s-.9-35-17.2-41.8L307.2 432 428.3 381.5c16.3-6.8 24-25.5 17.2-41.8z"]
  };
  var faXmark = {
    prefix: "fas",
    iconName: "xmark",
    icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]
  };
  var faTimes = faXmark;
  var faFileLines = {
    prefix: "fas",
    iconName: "file-lines",
    icon: [384, 512, [128441, 128462, 61686, "file-alt", "file-text"], "f15c", "M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]
  };
  var faFileAlt = faFileLines;
  var faComments = {
    prefix: "fas",
    iconName: "comments",
    icon: [576, 512, [128490, 61670], "f086", "M384 144c0 97.2-86 176-192 176-26.7 0-52.1-5-75.2-14L35.2 349.2c-9.3 4.9-20.7 3.2-28.2-4.2s-9.2-18.9-4.2-28.2l35.6-67.2C14.3 220.2 0 183.6 0 144 0 46.8 86-32 192-32S384 46.8 384 144zm0 368c-94.1 0-172.4-62.1-188.8-144 120-1.5 224.3-86.9 235.8-202.7 83.3 19.2 145 88.3 145 170.7 0 39.6-14.3 76.2-38.4 105.6l35.6 67.2c4.9 9.3 3.2 20.7-4.2 28.2s-18.9 9.2-28.2 4.2L459.2 498c-23.1 9-48.5 14-75.2 14z"]
  };
  var faTags = {
    prefix: "fas",
    iconName: "tags",
    icon: [576, 512, [], "f02c", "M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7 45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
  };
  var faCircleCheck = {
    prefix: "fas",
    iconName: "circle-check",
    icon: [512, 512, [61533, "check-circle"], "f058", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]
  };
  var faCheckCircle = faCircleCheck;
  var faMoon = {
    prefix: "fas",
    iconName: "moon",
    icon: [512, 512, [127769, 9214], "f186", "M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]
  };
  var faCirclePlay = {
    prefix: "fas",
    iconName: "circle-play",
    icon: [512, 512, [61469, "play-circle"], "f144", "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]
  };
  var faPlayCircle = faCirclePlay;
  var faRotateRight = {
    prefix: "fas",
    iconName: "rotate-right",
    icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]
  };
  var faRedoAlt = faRotateRight;
  var faList = {
    prefix: "fas",
    iconName: "list",
    icon: [512, 512, ["list-squares"], "f03a", "M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]
  };
  var faChevronDown = {
    prefix: "fas",
    iconName: "chevron-down",
    icon: [448, 512, [], "f078", "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
  };
  var faClockRotateLeft = {
    prefix: "fas",
    iconName: "clock-rotate-left",
    icon: [576, 512, ["history"], "f1da", "M288 64c106 0 192 86 192 192S394 448 288 448c-65.2 0-122.9-32.5-157.6-82.3-10.1-14.5-30.1-18-44.6-7.9s-18 30.1-7.9 44.6C124.1 468.6 201 512 288 512 429.4 512 544 397.4 544 256S429.4 0 288 0C202.3 0 126.5 42.1 80 106.7L80 80c0-17.7-14.3-32-32-32S16 62.3 16 80l0 112c0 17.7 14.3 32 32 32l24.6 0c.5 0 1 0 1.5 0l86 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-38.3 0C154.9 102.6 217 64 288 64zm24 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1z"]
  };
  var faHistory = faClockRotateLeft;
  var faTv = {
    prefix: "fas",
    iconName: "tv",
    icon: [576, 512, [63717, "television", "tv-alt"], "f26c", "M64 96l0 240 448 0 0-240-448 0zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 240c0 35.3-28.7 64-64 64L64 400c-35.3 0-64-28.7-64-64L0 96zM160 448l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
  };
  var faTriangleExclamation = {
    prefix: "fas",
    iconName: "triangle-exclamation",
    icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]
  };
  var faExclamationTriangle = faTriangleExclamation;
  var faMugSaucer = {
    prefix: "fas",
    iconName: "mug-saucer",
    icon: [576, 512, ["coffee"], "f0f4", "M64 64c0-17.7 14.3-32 32-32l352 0c70.7 0 128 57.3 128 128S518.7 288 448 288c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L64 64zm448 96c0-35.3-28.7-64-64-64l0 128c35.3 0 64-28.7 64-64zM64 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
  };
  var faCoffee = faMugSaucer;
  var faFont = {
    prefix: "fas",
    iconName: "font",
    icon: [512, 512, [], "f031", "M285.1 50.7C279.9 39.3 268.5 32 256 32s-23.9 7.3-29.1 18.7L59.5 416 48 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-6.1 0 22-48 208.3 0 22 48-6.1 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-11.5 0-167.4-365.3zM330.8 304L181.2 304 256 140.8 330.8 304z"]
  };
  var faLanguage = {
    prefix: "fas",
    iconName: "language",
    icon: [576, 512, [], "f1ab", "M160 0c17.7 0 32 14.3 32 32l0 32 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-9.6 0-8.4 23.1c-16.4 45.2-41.1 86.5-72.2 122 14.2 8.8 29 16.6 44.4 23.5l50.4 22.4 62.2-140c5.1-11.6 16.6-19 29.2-19s24.1 7.4 29.2 19l128 288c7.2 16.2-.1 35.1-16.2 42.2s-35.1-.1-42.2-16.2l-20-45-157.5 0-20 45c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l39.8-89.5-50.4-22.4c-23-10.2-45-22.4-65.8-36.4-21.3 17.2-44.6 32.2-69.5 44.7L78.3 380.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l34.5-17.3c16.3-8.2 31.8-17.7 46.4-28.3-13.8-12.7-26.8-26.4-38.9-40.9L81.6 224.7c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l10.2 12.2c11.5 13.9 24.1 26.8 37.4 38.7 27.5-30.4 49.2-66.1 63.5-105.4l.5-1.2-210.3 0C14.3 128 0 113.7 0 96S14.3 64 32 64l96 0 0-32c0-17.7 14.3-32 32-32zM416 270.8L365.7 384 466.3 384 416 270.8z"]
  };
  var faGlobe = {
    prefix: "fas",
    iconName: "globe",
    icon: [512, 512, [127760], "f0ac", "M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]
  };
  var faCircleChevronDown = {
    prefix: "fas",
    iconName: "circle-chevron-down",
    icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
  };
  var faChevronCircleDown = faCircleChevronDown;
  var faCopy = {
    prefix: "fas",
    iconName: "copy",
    icon: [448, 512, [], "f0c5", "M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]
  };
  var faArrowRotateLeft = {
    prefix: "fas",
    iconName: "arrow-rotate-left",
    icon: [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", "M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"]
  };
  var faUndo = faArrowRotateLeft;
  var faLocationDot = {
    prefix: "fas",
    iconName: "location-dot",
    icon: [384, 512, ["map-marker-alt"], "f3c5", "M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]
  };
  var faMapMarkerAlt = faLocationDot;
  var faBars = {
    prefix: "fas",
    iconName: "bars",
    icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
  };
  var faUpDown = {
    prefix: "fas",
    iconName: "up-down",
    icon: [512, 512, [8597, 11021, "arrows-alt-v"], "f338", "M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"]
  };
  var faArrowsAltV = faUpDown;
  var faTableCellsLarge = {
    prefix: "fas",
    iconName: "table-cells-large",
    icon: [448, 512, ["th-large"], "f009", "M384 96l-128 0 0 128 128 0 0-128zm64 128l0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 128zM64 288l0 128 128 0 0-128-128 0zm128-64l0-128-128 0 0 128 128 0zm64 64l0 128 128 0 0-128-128 0z"]
  };
  var faThLarge = faTableCellsLarge;
  var faCircleInfo = {
    prefix: "fas",
    iconName: "circle-info",
    icon: [512, 512, ["info-circle"], "f05a", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
  };
  var faInfoCircle = faCircleInfo;

  // ns-hugo-imp:/home/edani/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.13.2/assets/icons/custom.js
  var icons = [];
  var custom_default = icons;

  // ns-hugo-imp:/home/edani/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.13.2/assets/icons/icons/faBilibili.js
  var faBilibili_default = {
    prefix: "fab",
    iconName: "bilibili",
    icon: [
      24,
      24,
      [],
      "e001",
      "M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"
    ]
  };

  // ns-hugo-imp:/home/edani/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.13.2/assets/icons/icons/faCodeberg.js
  var faCodeberg_default = {
    prefix: "fab",
    iconName: "codeberg",
    icon: [
      24,
      24,
      [],
      "e005",
      "M11.955.49A12 12 0 0 0 0 12.49a12 12 0 0 0 1.832 6.373L11.838 5.928a.187.14 0 0 1 .324 0l10.006 12.935A12 12 0 0 0 24 12.49a12 12 0 0 0-12-12 12 12 0 0 0-.045 0zm.375 6.467l4.416 16.553a12 12 0 0 0 5.137-4.213z"
    ]
  };

  // ns-hugo-imp:/home/edani/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.13.2/assets/icons/icons/faLiberapay.js
  var faLiberapay_default = {
    prefix: "fab",
    iconName: "liberapay",
    icon: [
      80,
      80,
      [],
      "e002",
      [
        "m25.91,63.04c-3.571,0 -6.373,-0.466 -8.41,-1.396c-2.037,-0.93 -3.495,-2.199 -4.375,-3.809c-0.88,-1.609 -1.308,-3.457 -1.282,-5.544c0.025,-2.086 0.313,-4.311 0.868,-6.675l9.579,-40.05l11.69,-1.81l-10.484,43.44c-0.202,0.905 -0.314,1.735 -0.339,2.489c-0.026,0.754 0.113,1.421 0.415,1.999c0.302,0.579 0.817,1.044 1.546,1.395c0.729,0.353 1.747,0.579 3.055,0.679l-2.263,9.278",
        "m68.15,38.08c0,3.671 -0.604,7.03 -1.811,10.07c-1.207,3.043 -2.879,5.669 -5.01,7.881c-2.138,2.213 -4.702,3.935 -7.693,5.167c-2.992,1.231 -6.248,1.848 -9.767,1.848c-1.71,0 -3.42,-0.151 -5.129,-0.453l-3.394,13.651l-11.162,0l12.52,-52.19c2.01,-0.603 4.311,-1.143 6.901,-1.622c2.589,-0.477 5.393,-0.716 8.41,-0.716c2.815,0 5.242,0.428 7.278,1.282c2.037,0.855 3.708,2.024 5.02,3.507c1.307,1.484 2.274,3.219 2.904,5.205c0.627,1.987 0.942,4.11 0.942,6.373m-27.378,15.461c0.854,0.202 1.91,0.302 3.167,0.302c1.961,0 3.746,-0.364 5.355,-1.094c1.609,-0.728 2.979,-1.747 4.111,-3.055c1.131,-1.307 2.01,-2.877 2.64,-4.714c0.628,-1.835 0.943,-3.858 0.943,-6.071c0,-2.161 -0.479,-3.998 -1.433,-5.506c-0.956,-1.508 -2.615,-2.263 -4.978,-2.263c-1.61,0 -3.118,0.151 -4.525,0.453l-5.28,21.948"
      ]
    ]
  };

  // ns-hugo-imp:/home/edani/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.13.2/assets/icons/icons/faOffline.js
  var faOffline_default = {
    prefix: "fas",
    iconName: "offline",
    icon: [
      16,
      16,
      [],
      "e003",
      "M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z"
    ]
  };

  // ns-hugo-imp:/home/edani/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.13.2/assets/icons/icons/faTipeee.js
  var faTipeee_default = {
    prefix: "fab",
    iconName: "tipeee",
    icon: [
      2160,
      1680,
      [],
      "e001",
      [
        "M115.66 277.232C51.585 277.232 0 328.815 0 392.89v1006.22c0 64.075 51.585 115.658 115.66 115.658h2072.68c64.075 0 115.66-51.583 115.66-115.658V392.89c0-64.075-51.585-115.658-115.66-115.658zM756.499 529.52c57.679 0 91.95 46.812 91.95 85.265.001 45.976-32.6 84.43-91.95 84.43-52.664 0-90.281-44.305-90.281-84.43 0-38.453 31.766-85.265 90.28-85.265zm915.45 40.962h199.787v158.827l-44.303 210.654H1717.09l-45.141-210.654zM534.227 610.606v126.226h79.413v108.67h-79.413v148.795c0 28.422-5.852 66.874 26.75 66.874 10.866 0 36.78-7.523 52.663-14.21v106.998c-25.078 10.031-81.92 15.884-101.147 15.884-125.389 0-129.57-68.547-132.077-175.546V845.502h-45.139v-108.67h45.139v-76.906zm677.792 119.538c130.405 0 197.28 100.31 197.28 219.012 0 132.913-82.757 214.836-190.591 214.836-69.382 0-102.821-27.588-108.673-32.603v84.43h45.141v109.505H905.234v-109.505h35.108v-367.81h-35.108V736.833h191.426l14.211 29.257c15.883-11.703 50.992-35.945 101.147-35.945zm-569.206 6.688h193.935v308.457h40.125v109.507h-234.06V1045.29h35.108V845.502h-35.108zm526.575 111.178c-32.601 0-62.696 40.96-59.353 106.998 0 56.843 28.423 100.311 60.188 100.311 35.109 0 59.35-40.96 59.35-104.49 0-50.156-23.404-102.82-60.185-102.82zm594.516 132.912c59.351 0 99.475 40.961 99.475 88.61 0 46.811-38.452 86.1-99.475 86.1-54.335 0-95.297-42.632-95.297-86.1 0-41.797 35.11-88.61 95.297-88.61z"
      ]
    ]
  };

  // ns-hugo-imp:/home/edani/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/razonyang/hugo-theme-bootstrap@v1.13.2/assets/icons/icons/faXTwitter.js
  var faXTwitter_default = {
    prefix: "fab",
    iconName: "x-twitter",
    icon: [
      512,
      512,
      [],
      "e61b",
      [
        "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      ]
    ]
  };

  // <stdin>
  var icons2 = [
    // Solid Icons
    faAdjust,
    faArrowsAltV,
    faBars,
    faBuilding,
    faCheckCircle,
    faChevronDown,
    faChevronCircleDown,
    faCode,
    faCoffee,
    faCog,
    faComments,
    faColumns,
    faCopy,
    faCopyright,
    faEdit,
    faEllipsisH,
    faEnvelope,
    faExclamationCircle,
    faExclamationTriangle,
    faExpand,
    faExpandAlt,
    faEyeDropper,
    faFont,
    faFileAlt,
    faFileArchive,
    faFolder,
    faHistory,
    faHome,
    faInfoCircle,
    faPlayCircle,
    faLanguage,
    faLink,
    faList,
    faListAlt,
    faMapMarkerAlt,
    faPalette,
    faQuestion,
    faQuestionCircle,
    faRedoAlt,
    faReply,
    faRocket,
    faRss,
    faSearch,
    faShareAlt,
    faSkullCrossbones,
    faGlobe,
    faSpinner,
    faTags,
    faThLarge,
    faThumbtack,
    faTimes,
    faTv,
    faUndo,
    faUser,
    faExternalLinkSquareAlt,
    faSun,
    faMoon,
    // Regular Icons
    faStar,
    // Brands
    faAlipay,
    faArtstation,
    faBitbucket,
    faCreativeCommons,
    faCreativeCommonsBy,
    faCreativeCommonsNc,
    faCreativeCommonsNd,
    faCreativeCommonsSa,
    faCreativeCommonsZero,
    faDiscord,
    faDiscourse,
    faDocker,
    faFacebookF,
    faFacebookSquare,
    faGithub,
    faGitlab,
    faInstagram,
    faItchIo,
    faKaggle,
    faLastfm,
    faLinkedinIn,
    faMastodon,
    faMediumM,
    faPaypal,
    faPatreon,
    faPinterest,
    faQq,
    faQuora,
    faReddit,
    faStackOverflow,
    faTelegramPlane,
    faTiktok,
    faTumblr,
    faTwitter,
    faXing,
    faYoutube,
    faWeibo,
    faWeixin,
    faZhihu,
    // Custom Icons
    faBilibili_default,
    faCodeberg_default,
    faLiberapay_default,
    faOffline_default,
    faTipeee_default,
    faXTwitter_default
  ];
  config$1.searchPseudoElements = false;
  library$1.add(...icons2.concat(custom_default));
  dom$1.watch();
})();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-brands-svg-icons/index.mjs:
@fortawesome/free-regular-svg-icons/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2025 Fonticons, Inc.
   *)
*/
