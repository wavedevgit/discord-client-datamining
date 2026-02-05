// lib/spellcheck/Spellchecker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun60211: for (var _fun60211_ip = 0;;) switch (_fun60211_ip) {
        case 0:
            var5 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var6;
            var0 = function arg0() {
                _fun60212: for (var _fun60212_ip = 0;;) switch (_fun60212_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 7;
                        var0 = var1[var0];
                        var1 = undefined;
                        var0 = var4.bind(var1)(var0);
                        var0 = var0[var3];
                        var5 = null;
                        if (!(var5 != var0)) {
                            _fun60212_ip = 41;
                            continue _fun60212
                        }
                    case 38:
                        var3 = var0;
                    case 41:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 8;
                        var0 = var6[var0];
                        var7 = var4.bind(var1)(var0);
                        var6 = var7.parse;
                        var8 = var3.replace;
                        var0 = /[_-]/g;
                        var4 = '-';
                        var0 = var8.bind(var3)(var0, var4);
                        var0 = var6.bind(var7)(var0);
                        var8 = var3;
                        if (!(var5 != var0)) {
                            _fun60212_ip = 140;
                            continue _fun60212
                        }
                    case 108:
                        var3 = var0.langtag;
                        var3 = var3.language;
                        if (!(var5 != var3)) {
                            _fun60212_ip = 140;
                            continue _fun60212
                        }
                    case 124:
                        var3 = var0.langtag;
                        var3 = var3.region;
                        if (!(var5 == var3)) {
                            _fun60212_ip = 185;
                            continue _fun60212
                        }
                    case 140:
                        var5 = _closure1_slot8;
                        var3 = var5.error;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var6 = '';
                        var2 = ' is not a valid locale.';
                        var2 = var7.bind(var6)(var8, var2);
                        var2 = var3.bind(var5)(var2);
                        return var1;
                    case 185:
                        var1 = var0.langtag;
                        var0 = var1.language;
                        var1 = var1.region;
                        var2 = var0.language;
                        var0 = var2.toLowerCase;
                        var3 = var0.bind(var2)();
                        var0 = var1.toUpperCase;
                        var2 = var0.bind(var1)();
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '';
                        var0 = var1.bind(var0)(var3, var4, var2);
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60215: for (var _fun60215_ip = 0;;) switch (_fun60215_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60215_ip = 146;
                                    continue _fun60215
                                }
                            case 10:
                                var3 = _closure1_slot9;
                                var1 = var3.getAvailableDictionaries;
                                var1 = var1.bind(var3)();
                                SaveGenerator(address = 33);
                            case 31:
                                return var1;
                            case 33:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun60215_ip = 143;
                                    continue _fun60215
                                }
                            case 39:
                                var3 = null;
                                var5 = var1;
                                if (!(var3 == var5)) {
                                    _fun60215_ip = 52;
                                    continue _fun60215
                                }
                            case 48:
                                var5 = new Array(0);
                            case 52:
                                var4 = var5.map;
                                var3 = _closure1_slot12;
                                var6 = var4.bind(var5)(var3);
                                var5 = var6.filter;
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 12;
                                var3 = var4[var3];
                                var4 = undefined;
                                var3 = var7.bind(var4)(var3);
                                var3 = var3.isNotNullish;
                                var8 = var5.bind(var6)(var3);
                                var2 = _closure1_slot10;
                                var3 = var2.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var9 = var3;
                                var2 = new var9[var2](var8, var7);
                                var2 = var2 instanceof Object ? var2 : var3;
                                var3 = function arg0() {
                                    _fun60216: for (var _fun60216_ip = 0;;) switch (_fun60216_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var _closure5_slot0 = var1;
                                            var1 = global;
                                            var2 = var1.document;
                                            var3 = var2.body;
                                            var2 = null;
                                            if (!(var2 != var3)) {
                                                _fun60216_ip = 65;
                                                continue _fun60216
                                            }
                                        case 28:
                                            var1 = var1.document;
                                            var4 = var1.body;
                                            var3 = var4.addEventListener;
                                            var2 = 'beforeinput';
                                            var1 = function(arg0) { // Environment: var0
                                                var3 = _closure1_slot11;
                                                var2 = _closure5_slot0;
                                                var0 = arg0;
                                                var1 = var0.target;
                                                var0 = undefined;
                                                var0 = var3.bind(var0)(var2, var1);
                                                return var0;
                                            };
                                            var0 = true;
                                            var0 = var3.bind(var4)(var2, var1, var0);
                                        case 65:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var3 = var3.bind(var4)(var2);
                                return var2;
                            case 143:
                                return var1;
                            case 146:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot13 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot13 = var0;
            var0 = global;
            var8 = var0.Object;
            var4 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var8)(var2, var0, var3);
            var0 = 0;
            var3 = var6[var0];
            var0 = undefined;
            var3 = var7.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var6[var3];
            var8 = var7.bind(var0)(var3);
            var3 = var8.prototype;
            var4 = Object.create(var3, {
                constructor: {
                    value: var8
                }
            });
            var12 = 'Spellchecker';
            var13 = var4;
            var3 = new var13[var8](var12, var11);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure1_slot8 = var3;
            var4 = 6;
            var3 = var6[var4];
            var8 = var7.bind(var0)(var3);
            var3 = null;
            var8 = var3 == var8;
            var3 = undefined;
            if (var8) {
                _fun60211_ip = 237;
                continue _fun60211
            }
        case 222:
            var4 = var6[var4];
            var4 = var7.bind(var0)(var4);
            var3 = var4.spellCheck;
        case 237:
            var _closure1_slot9 = var3;
            var3 = function() { // Environment: var1
                var3 = _closure1_slot6;
                var2 = function arg0() {
                    var5 = arg0;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var5;
                    var6 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var6.bind(var0)(var4, var3);
                    var3 = true;
                    var4._enabled = var3;
                    var3 = '';
                    var4.misspelledWord = var3;
                    var3 = new Array(0);
                    var4.corrections = var3;
                    var3 = _closure1_slot7;
                    var7 = var3.locale;
                    var6 = var7.split;
                    var3 = '-';
                    var7 = var6.bind(var7)(var3);
                    var6 = _closure1_slot4;
                    var3 = 2;
                    var6 = var6.bind(var0)(var7, var3);
                    var3 = 0;
                    var7 = var6[var3];
                    var _closure3_slot2 = var7;
                    var3 = 1;
                    var3 = var6[var3];
                    var4.regionPreference = var3;
                    var3 = var4.getAvailableLanguages;
                    var3 = var3.bind(var4)(var5);
                    var _closure3_slot3 = var3;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var6 = var5.bind(var0)(var3);
                    var3 = var6.prototype;
                    var5 = Object.create(var3, {
                        constructor: {
                            value: var6
                        }
                    });
                    var8 = function(arg0) { // Environment: var1
                        _fun60220: for (var _fun60220_ip = 0;;) switch (_fun60220_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot0;
                                var5 = var1.regionPreference;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var4 = var1.concat;
                                var2 = '';
                                var1 = '-';
                                var2 = var4.bind(var2)(var3, var1, var5);
                                var4 = _closure3_slot1;
                                var1 = var4.indexOf;
                                var4 = var1.bind(var4)(var2);
                                var1 = -1;
                                if (!(var1 === var4)) {
                                    _fun60220_ip = 137;
                                    continue _fun60220
                                }
                            case 69:
                                var1 = _closure3_slot3;
                                var4 = var1[var3];
                                var1 = null;
                                if (!(var1 == var4)) {
                                    _fun60220_ip = 116;
                                    continue _fun60220
                                }
                            case 83:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 7;
                                var5 = var5[var3];
                                var3 = undefined;
                                var5 = var6.bind(var3)(var5);
                                var3 = _closure3_slot2;
                                var4 = var5[var3];
                            case 116:
                                if (!(var1 != var4)) {
                                    _fun60220_ip = 152;
                                    continue _fun60220
                                }
                            case 120:
                                var3 = _closure3_slot0;
                                var1 = var3.setLocale;
                                var1 = var1.bind(var3)(var4);
                                _fun60220_ip = 152;
                                continue _fun60220;
                            case 137:
                                var1 = _closure3_slot0;
                                var0 = var1.setLocale;
                                var0 = var0.bind(var1)(var2);
                            case 152:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var10 = var5;
                    var9 = var7;
                    var3 = new var10[var6](var9, var8, var7);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var4.languageDetector = var3;
                    var4 = _closure1_slot9;
                    var3 = var4.on;
                    var2 = 'spellcheck-result';
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun60221: for (var _fun60221_ip = 0;;) switch (_fun60221_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = arg1;
                                var4 = _closure3_slot0;
                                var2 = null;
                                var6 = var2 != var5;
                                var3 = '';
                                if (!var6) {
                                    _fun60221_ip = 29;
                                    continue _fun60221
                                }
                            case 26:
                                var3 = var5;
                            case 29:
                                var4.misspelledWord = var3;
                                var0 = _closure3_slot0;
                                if (!(var2 == var1)) {
                                    _fun60221_ip = 47;
                                    continue _fun60221
                                }
                            case 43:
                                var1 = new Array(0);
                            case 47:
                                var0.corrections = var1;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'enabled';
                var0.key = var1;
                var1 = function() {
                    var0 = this;
                    var0 = var0._enabled;
                    return var0;
                };
                var0.get = var1;
                var1 = function arg0() {
                    var1 = arg0;
                    var0 = this;
                    var0._enabled = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.set = var1;
                var1 = new Array(9);
                var1[0] = var0;
                var0 = {};
                var5 = 'setLearnedWords';
                var0.key = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot9;
                    var1 = var2.setLearnedWords;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'setLocale';
                var0.key = var5;
                var5 = function arg0() {
                    _fun60225: for (var _fun60225_ip = 0;;) switch (_fun60225_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var2 = _closure1_slot9;
                            var1 = var2.setLocale;
                            var2 = var1.bind(var2)(var3);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun60225_ip = 48;
                                continue _fun60225
                            }
                        case 33:
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                _fun60226: for (var _fun60226_ip = 0;;) switch (_fun60226_ip) {
                                    case 0:
                                        var3 = _closure1_slot8;
                                        var2 = var3.info;
                                        var4 = _closure3_slot0;
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var1 = var0.concat;
                                        var0 = 'Switching to ';
                                        var1 = var1.bind(var0)(var4);
                                        var0 = '(unavailable)';
                                        var4 = arg0;
                                        if (!var4) {
                                            _fun60226_ip = 62;
                                            continue _fun60226
                                        }
                                    case 56:
                                        var0 = '(available)';
                                    case 62:
                                        var0 = var2.bind(var3)(var1, var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'setAppLocale';
                var0.key = var5;
                var5 = function arg0() {
                    var2 = arg0;
                    var1 = var2.split;
                    var0 = '-';
                    var1 = var1.bind(var2)(var0);
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = this;
                    var0.regionPreference = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'detectLanguage';
                var0.key = var5;
                var5 = function arg0() {
                    _fun60228: for (var _fun60228_ip = 0;;) switch (_fun60228_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0.enabled;
                            if (!var1) {
                                _fun60228_ip = 31;
                                continue _fun60228
                            }
                        case 11:
                            var2 = var0.languageDetector;
                            var1 = var2.process;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[4] = var0;
                var0 = {};
                var5 = 'getAvailableLanguages';
                var0.key = var5;
                var5 = function arg0() {
                    var3 = arg0;
                    var0 = {};
                    var _closure3_slot0 = var0;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun60230: for (var _fun60230_ip = 0;;) switch (_fun60230_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.split;
                                var0 = '-';
                                var4 = var2.bind(var1)(var0);
                                var3 = _closure1_slot4;
                                var0 = undefined;
                                var2 = 1;
                                var3 = var3.bind(var0)(var4, var2);
                                var2 = 0;
                                var3 = var3[var2];
                                var2 = _closure3_slot0;
                                var4 = var2[var3];
                                var5 = null;
                                if (!(var5 != var4)) {
                                    _fun60230_ip = 61;
                                    continue _fun60230
                                }
                            case 58:
                                var1 = var4;
                            case 61:
                                var2[var3] = var1;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.value = var5;
                var1[5] = var0;
                var0 = {};
                var5 = 'isMisspelled';
                var0.key = var5;
                var5 = function arg0() {
                    _fun60231: for (var _fun60231_ip = 0;;) switch (_fun60231_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1.misspelledWord;
                            var0 = '';
                            var0 = var0 !== var2;
                            if (!var0) {
                                _fun60231_ip = 33;
                                continue _fun60231
                            }
                        case 20:
                            var2 = var1.misspelledWord;
                            var1 = arg0;
                            var0 = var1 === var2;
                        case 33:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[6] = var0;
                var0 = {};
                var5 = 'getCorrectionsForMisspelling';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    _fun60232: for (var _fun60232_ip = 0;;) switch (_fun60232_ip) {
                        case 0:
                            var1 = this;
                            var3 = var1.isMisspelled;
                            var2 = arg0;
                            var0 = arg1;
                            var0 = var3.bind(var1)(var2, var0);
                            if (var0) {
                                _fun60232_ip = 30;
                                continue _fun60232
                            }
                        case 24:
                            var0 = new Array(0);
                            _fun60232_ip = 36;
                            continue _fun60232;
                        case 30:
                            var0 = var1.corrections;
                        case 36:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[7] = var0;
                var0 = {};
                var5 = 'replaceMisspelling';
                var0.key = var5;
                var4 = function arg0() {
                    var2 = _closure1_slot9;
                    var1 = var2.replaceMisspelling;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.value = var4;
                var1[8] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var3 = var3.bind(var0)();
            var _closure1_slot10 = var3;
            var4 = 10;
            var4 = var6[var4];
            var9 = var7.bind(var0)(var4);
            var8 = var9.debounce;
            var7 = function(arg0, arg1) { // Environment: var1
                _fun60234: for (var _fun60234_ip = 0;;) switch (_fun60234_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var0 = null;
                        var4 = var0 == var3;
                        var1 = null;
                        if (var4) {
                            _fun60234_ip = 174;
                            continue _fun60234
                        }
                    case 20:
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var7 = 11;
                        var6 = var5[var7];
                        var5 = undefined;
                        var10 = var8.bind(var5)(var6);
                        var9 = var10.isElement;
                        var6 = global;
                        var8 = var6.HTMLInputElement;
                        var8 = var9.bind(var10)(var3, var8);
                        if (var8) {
                            _fun60234_ip = 169;
                            continue _fun60234
                        }
                    case 68:
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var7];
                        var9 = var9.bind(var5)(var8);
                        var8 = var9.isElement;
                        var6 = var6.HTMLTextAreaElement;
                        var6 = var8.bind(var9)(var3, var6);
                        if (var6) {
                            _fun60234_ip = 169;
                            continue _fun60234
                        }
                    case 106:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.isElement;
                        var4 = var4.bind(var6)(var3);
                        var1 = undefined;
                        if (!var4) {
                            _fun60234_ip = 174;
                            continue _fun60234
                        }
                    case 139:
                        var6 = var3.hasAttribute;
                        var4 = 'contenteditable';
                        var4 = var6.bind(var3)(var4);
                        var1 = undefined;
                        if (!var4) {
                            _fun60234_ip = 174;
                            continue _fun60234
                        }
                    case 161:
                        var1 = var3.textContent;
                        _fun60234_ip = 174;
                        continue _fun60234;
                    case 169:
                        var1 = var3.value;
                    case 174:
                        if (!(var0 != var1)) {
                            _fun60234_ip = 191;
                            continue _fun60234
                        }
                    case 178:
                        var0 = var2.detectLanguage;
                        var0 = var0.bind(var2)(var1);
                    case 191:
                        var0 = undefined;
                        return var0;
                }
            };
            var4 = 250;
            var4 = var8.bind(var9)(var7, var4);
            var _closure1_slot11 = var4;
            var4 = 13;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'lib/spellcheck/Spellchecker.tsx';
            var4 = var5.bind(var6)(var4);
            var2.Spellchecker = var3;
            var1 = function() {
                var0 = undefined;
                var3 = _closure1_slot13;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.install = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 6, 7, 1685, 3, 3074, 7460, 7461, 7462, 22, 1610, 1304, 2]);