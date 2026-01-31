// modules/links/native/handleURL.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun26973: for (var _fun26973_ip = 0;;) switch (_fun26973_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun26973_ip = 46;
                    continue _fun26973
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun26973_ip = 55;
                    continue _fun26973
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun26973_ip = 343;
                    continue _fun26973
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun26973_ip = 323;
                    continue _fun26973
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun26973_ip = 283;
                    continue _fun26973
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun26973_ip = 270;
                    continue _fun26973
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun26973_ip = 163;
                    continue _fun26973
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun26973_ip = 179;
                    continue _fun26973
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun26973_ip = 249;
                    continue _fun26973
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun26973_ip = 249;
                    continue _fun26973
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun26973_ip = 234;
                    continue _fun26973
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun26973_ip = 247;
                    continue _fun26973
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun26973_ip = 265;
                continue _fun26973;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun26973_ip = 283;
                continue _fun26973;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun26973_ip = 323;
                    continue _fun26973
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun26973_ip = 330;
                    continue _fun26973
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun26974: for (var _fun26974_ip = 0;;) switch (_fun26974_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun26974_ip = 56;
                                continue _fun26974
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun26974_ip = 67;
                            continue _fun26974;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun26975: for (var _fun26975_ip = 0;;) switch (_fun26975_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun26975_ip = 23;
                    continue _fun26975
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun26975_ip = 33;
                    continue _fun26975
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun26975_ip = 70;
                    continue _fun26975
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun26975_ip = 55;
                    continue _fun26975
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: sanitizeURLPart, environment: var1
        _fun26976: for (var _fun26976_ip = 0;;) switch (_fun26976_ip) {
            case 0:
                var4 = arg0;
                var1 = null;
                var0 = var4;
                if (!(var1 != var0)) {
                    _fun26976_ip = 44;
                    continue _fun26976
                }
            case 12:
                var3 = var4.replace;
                var2 = /[^\x00-\x7F]+/g;
                var1 = function(arg0) { // Environment: var1
                    var0 = global;
                    var2 = var0.encodeURIComponent;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var1);
            case 44:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: _handleURL, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun26980: for (var _fun26980_ip = 0;;) switch (_fun26980_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var1 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun26980_ip = 468;
                            continue _fun26980
                        }
                    case 18:
                        var7 = var2;
                        var _closure4_slot0 = var2;
                        var2 = arg1;
                        var _closure4_slot1 = var2;
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun26980_ip = 40;
                            continue _fun26980
                        }
                    case 38:
                        var1 = {};
                    case 40:
                        var4 = var1.allowExternal;
                        if (!(var4 === var2)) {
                            _fun26980_ip = 52;
                            continue _fun26980
                        }
                    case 50:
                        var4 = true;
                    case 52:
                        var5 = var1.forceExternalBrowser;
                        if (!(var5 === var2)) {
                            _fun26980_ip = 64;
                            continue _fun26980
                        }
                    case 62:
                        var5 = false;
                    case 64:
                        var _closure4_slot2 = var5;
                        SaveGenerator(address = 72);
                    case 70:
                        return var2;
                    case 72:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun26980_ip = 465;
                            continue _fun26980
                        }
                    case 81:
                        var3 = function() { // Original name: openInBrowser, environment: var6
                            _fun26981: for (var _fun26981_ip = 0;;) switch (_fun26981_ip) {
                                case 0:
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var0 = 9;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var6 = var4.bind(var0)(var3);
                                    var4 = var6.sanitizeUrl;
                                    var3 = _closure4_slot0;
                                    var3 = var4.bind(var6)(var3);
                                    var8 = null;
                                    if (!(var8 == var3)) {
                                        _fun26981_ip = 134;
                                        continue _fun26981
                                    }
                                case 51:
                                    var10 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var3 = 10;
                                    var3 = var11[var3];
                                    var6 = var10.bind(var0)(var3);
                                    var4 = var6.presentFailedToast;
                                    var3 = 11;
                                    var7 = var11[var3];
                                    var7 = var10.bind(var0)(var7);
                                    var9 = var7.intl;
                                    var7 = var9.string;
                                    var3 = var11[var3];
                                    var3 = var10.bind(var0)(var3);
                                    var3 = var3.t;
                                    var3 = var3.XiqzAp;
                                    var3 = var7.bind(var9)(var3);
                                    var3 = var4.bind(var6)(var3);
                                    _fun26981_ip = 627;
                                    continue _fun26981;
                                case 134:
                                    var3 = _closure1_slot6;
                                    var4 = var3.SAFARI;
                                    var7 = _closure4_slot0;
                                    var6 = var7.startsWith;
                                    var3 = 'https:';
                                    var3 = var6.bind(var7)(var3);
                                    if (var3) {
                                        _fun26981_ip = 191;
                                        continue _fun26981
                                    }
                                case 166:
                                    var7 = _closure4_slot0;
                                    var6 = var7.startsWith;
                                    var3 = 'http:';
                                    var3 = var6.bind(var7)(var3);
                                    if (!var3) {
                                        _fun26981_ip = 334;
                                        continue _fun26981
                                    }
                                case 191:
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var7[var3];
                                    var6 = var6.bind(var0)(var3);
                                    var3 = var6.getBrowserManagerSelectedBrowser;
                                    var3 = var3.bind(var6)();
                                    var6 = _closure4_slot1;
                                    var7 = var3;
                                    if (!(var8 != var6)) {
                                        _fun26981_ip = 236;
                                        continue _fun26981
                                    }
                                case 232:
                                    var7 = _closure4_slot1;
                                case 236:
                                    var6 = _closure4_slot2;
                                    if (!var6) {
                                        _fun26981_ip = 257;
                                        continue _fun26981
                                    }
                                case 243:
                                    var8 = _closure1_slot6;
                                    var8 = var8.IN_APP;
                                    var6 = var7 === var8;
                                case 257:
                                    var4 = var7;
                                    if (!var6) {
                                        _fun26981_ip = 334;
                                        continue _fun26981
                                    }
                                case 263:
                                    var6 = _closure1_slot6;
                                    var6 = var6.IN_APP;
                                    if (!(var3 === var6)) {
                                        _fun26981_ip = 331;
                                        continue _fun26981
                                    }
                                case 277:
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var6 = 13;
                                    var6 = var8[var6];
                                    var7 = var7.bind(var0)(var6);
                                    var6 = var7.isIOS;
                                    var6 = var6.bind(var7)();
                                    var7 = _closure1_slot6;
                                    if (var6) {
                                        _fun26981_ip = 322;
                                        continue _fun26981
                                    }
                                case 314:
                                    var6 = var7.CHROME;
                                    _fun26981_ip = 328;
                                    continue _fun26981;
                                case 322:
                                    var6 = var7.SAFARI;
                                case 328:
                                    var3 = var6;
                                case 331:
                                    var4 = var3;
                                case 334:
                                    var3 = _closure1_slot6;
                                    var3 = var3.IN_APP;
                                    if (!(var3 !== var4)) {
                                        _fun26981_ip = 493;
                                        continue _fun26981
                                    }
                                case 351:
                                    var3 = _closure1_slot6;
                                    var3 = var3.CHROME;
                                    if (!(var3 !== var4)) {
                                        _fun26981_ip = 426;
                                        continue _fun26981
                                    }
                                case 365:
                                    var3 = _closure1_slot6;
                                    var3 = var3.SAFARI;
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var6[var3];
                                    var7 = var4.bind(var0)(var3);
                                    var6 = var7.browserManagerOpenUrl;
                                    var4 = _closure4_slot0;
                                    var3 = _closure1_slot6;
                                    var3 = var3.SAFARI;
                                    var3 = var6.bind(var7)(var4, var3);
                                    _fun26981_ip = 627;
                                    continue _fun26981;
                                case 426:
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var6[var3];
                                    var7 = var4.bind(var0)(var3);
                                    var6 = var7.browserManagerOpenUrl;
                                    var4 = _closure4_slot0;
                                    var3 = _closure1_slot6;
                                    var3 = var3.CHROME;
                                    var6 = var6.bind(var7)(var4, var3);
                                    var4 = var6.catch;
                                    var3 = function() { // Environment: var2
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var0 = 10;
                                        var1 = var7[var0];
                                        var0 = undefined;
                                        var3 = var6.bind(var0)(var1);
                                        var2 = var3.presentFailedToast;
                                        var1 = 11;
                                        var4 = var7[var1];
                                        var4 = var6.bind(var0)(var4);
                                        var5 = var4.intl;
                                        var4 = var5.string;
                                        var1 = var7[var1];
                                        var1 = var6.bind(var0)(var1);
                                        var1 = var1.t;
                                        var1 = var1.HryVrx;
                                        var7 = var4.bind(var5)(var1);
                                        var6 = _closure4_slot0;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var4 = '';
                                        var1 = ' ';
                                        var1 = var5.bind(var4)(var7, var1, var6);
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var3 = var4.bind(var6)(var3);
                                    _fun26981_ip = 627;
                                    continue _fun26981;
                                case 493:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var6 = 12;
                                    var6 = var4[var6];
                                    var8 = var3.bind(var0)(var6);
                                    var7 = var8.browserManagerOpenUrl;
                                    var6 = _closure4_slot0;
                                    var5 = _closure1_slot6;
                                    var5 = var5.IN_APP;
                                    var6 = var7.bind(var8)(var6, var5);
                                    var5 = var6.catch;
                                    var2 = function() { // Environment: var2
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var0 = 10;
                                        var1 = var7[var0];
                                        var0 = undefined;
                                        var3 = var6.bind(var0)(var1);
                                        var2 = var3.presentFailedToast;
                                        var1 = 11;
                                        var4 = var7[var1];
                                        var4 = var6.bind(var0)(var4);
                                        var5 = var4.intl;
                                        var4 = var5.string;
                                        var1 = var7[var1];
                                        var1 = var6.bind(var0)(var1);
                                        var1 = var1.t;
                                        var1 = var1.HryVrx;
                                        var7 = var4.bind(var5)(var1);
                                        var6 = _closure4_slot0;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var4 = '';
                                        var1 = ' ';
                                        var1 = var5.bind(var4)(var7, var1, var6);
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var2 = var5.bind(var6)(var2);
                                    var2 = 13;
                                    var2 = var4[var2];
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.isIOS;
                                    var2 = var2.bind(var3)();
                                    if (!var2) {
                                        _fun26981_ip = 594;
                                        continue _fun26981
                                    }
                                case 580:
                                    var4 = _closure1_slot5;
                                    var3 = var4.isOpen;
                                    var2 = var3.bind(var4)();
                                case 594:
                                    if (!var2) {
                                        _fun26981_ip = 627;
                                        continue _fun26981
                                    }
                                case 597:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 14;
                                    var1 = var3[var1];
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.hideActionSheet;
                                    var1 = var1.bind(var2)();
                                case 627:
                                    return var0;
                            }
                        };
                        if (var5) {
                            _fun26980_ip = 458;
                            continue _fun26980
                        }
                    case 92:
                        var9 = /^[a-zA-Z0-9+-.]+:/;
                        var8 = var9.test;
                        var5 = var7;
                        var5 = var8.bind(var9)(var5);
                        if (var5) {
                            _fun26980_ip = 142;
                            continue _fun26980
                        }
                    case 122:
                        var8 = var7;
                        var5 = 'https://';
                        var5 = var5 + var8;
                        var7 = var5;
                        _closure4_slot0 = var5;
                    case 142:
                        var9 = /^https?:/i;
                        var8 = var9.test;
                        var5 = var7;
                        var5 = var8.bind(var9)(var5);
                        if (!var5) {
                            _fun26980_ip = 289;
                            continue _fun26980
                        }
                    case 172: // try_start_0
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var5 = 15;
                        var9 = var10[var5];
                        var13 = var8.bind(var2)(var9);
                        var12 = var13.parse;
                        var9 = var7;
                        var9 = var12.bind(var13)(var9);
                        var12 = _closure1_slot10;
                        var11 = var9.pathname;
                        var11 = var12.bind(var2)(var11);
                        var9.pathname = var11;
                        var11 = var9.search;
                        var11 = var12.bind(var2)(var11);
                        var9.search = var11;
                        var11 = var9.hash;
                        var11 = var12.bind(var2)(var11);
                        var9.hash = var11;
                        var5 = var10[var5];
                        var8 = var8.bind(var2)(var5);
                        var5 = var8.format;
                        var5 = var5.bind(var8)(var9);
                        var7 = var5;
                        _closure4_slot0 = var5;
                    case 289: // try_end0
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var5 = 16;
                        var5 = var10[var5];
                        var9 = var8.bind(var2)(var5);
                        var5 = var7;
                        var5 = var9.bind(var2)(var5);
                        var9 = var5.payload;
                        var5 = 17;
                        var5 = var10[var5];
                        var8 = var8.bind(var2)(var5);
                        var5 = {};
                        var5.payload = var9;
                        var9 = true;
                        var5.safe = var9;
                        var5 = var8.bind(var2)(var5);
                        if (var5) {
                            _fun26980_ip = 462;
                            continue _fun26980
                        }
                    case 360:
                        if (!var4) {
                            _fun26980_ip = 462;
                            continue _fun26980
                        }
                    case 363:
                        var5 = var7;
                        var4 = function(arg0) { // Original name: tryHandleUniversalLink, environment: var6
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var _closure6_slot0 = var0;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 5;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.tryOpenUrlAsUniversalLink;
                                var2 = _closure5_slot0;
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.then;
                                var2 = function() { // Environment: var1
                                    var2 = _closure1_slot7;
                                    var1 = var2.info;
                                    var0 = 'Universal link opened successfully.';
                                    var0 = var1.bind(var2)(var0);
                                    var2 = _closure6_slot0;
                                    var0 = undefined;
                                    var1 = true;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.catch;
                                var1 = function() { // Environment: var1
                                    var2 = _closure1_slot7;
                                    var1 = var2.info;
                                    var0 = 'URL is not a handled universal link.';
                                    var0 = var1.bind(var2)(var0);
                                    var2 = _closure6_slot0;
                                    var0 = undefined;
                                    var1 = false;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var4 = var4.bind(var2)(var5);
                        SaveGenerator(address = 380);
                    case 378:
                        return var4;
                    case 380:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun26980_ip = 450;
                            continue _fun26980
                        }
                    case 386:
                        if (var4) {
                            _fun26980_ip = 462;
                            continue _fun26980
                        }
                    case 389:
                        var8 = var7;
                        var5 = function(arg0) { // Original name: tryHandleCustomScheme, environment: var6
                            _fun26988: for (var _fun26988_ip = 0;;) switch (_fun26988_ip) {
                                case 0:
                                    var4 = arg0;
                                    var _closure5_slot0 = var4;
                                    var3 = _closure1_slot8;
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 6;
                                    var2 = var6[var2];
                                    var9 = undefined;
                                    var2 = var5.bind(var9)(var2);
                                    var2 = var2.LINKING_SCHEMAS_VALUES;
                                    var8 = var3.bind(var9)(var2);
                                    var5 = var8.bind(var9)();
                                    var2 = var5.done;
                                    var3 = null;
                                    var7 = 1;
                                    var6 = var4;
                                    var4 = var6;
                                    if (var2) {
                                        _fun26988_ip = 152;
                                        continue _fun26988
                                    }
                                case 72:
                                    var2 = var5.value;
                                    var10 = var2.regex;
                                    var11 = var2.protocol;
                                    var2 = var10.exec;
                                    var12 = var2.bind(var10)(var6);
                                    var13 = var3 == var12;
                                    var10 = var6;
                                    var2 = undefined;
                                    if (var13) {
                                        _fun26988_ip = 116;
                                        continue _fun26988
                                    }
                                case 112:
                                    var2 = var12[var7];
                                case 116:
                                    if (!(var3 != var2)) {
                                        _fun26988_ip = 131;
                                        continue _fun26988
                                    }
                                case 120:
                                    var2 = var11 + var2;
                                    _closure5_slot0 = var2;
                                    var10 = var2;
                                case 131:
                                    var11 = var8.bind(var9)();
                                    var2 = var11.done;
                                    var6 = var10;
                                    var5 = var11;
                                    var4 = var6;
                                    if (!var2) {
                                        _fun26988_ip = 72;
                                        continue _fun26988
                                    }
                                case 152:
                                    var2 = var4.indexOf;
                                    var5 = '://';
                                    var6 = var2.bind(var4)(var5);
                                    var2 = -1;
                                    var3 = null;
                                    if (!(var2 !== var6)) {
                                        _fun26988_ip = 197;
                                        continue _fun26988
                                    }
                                case 181:
                                    var2 = var4.split;
                                    var5 = var2.bind(var4)(var5);
                                    var2 = 0;
                                    var3 = var5[var2];
                                case 197:
                                    var2 = 'http';
                                    if (!(var2 !== var3)) {
                                        _fun26988_ip = 270;
                                        continue _fun26988
                                    }
                                case 205:
                                    var2 = 'https';
                                    if (!(var2 !== var3)) {
                                        _fun26988_ip = 270;
                                        continue _fun26988
                                    }
                                case 213:
                                    var3 = _closure1_slot7;
                                    var2 = var3.info;
                                    var0 = 'tryHandleCustomScheme';
                                    var0 = var2.bind(var3)(var0, var4);
                                    var0 = global;
                                    var3 = var0.Promise;
                                    var0 = var3.prototype;
                                    var2 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var15 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var _closure6_slot0 = var0;
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 5;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var4 = var3.bind(var0)(var2);
                                        var3 = var4.tryOpenScheme;
                                        var2 = _closure5_slot0;
                                        var4 = var3.bind(var4)(var2);
                                        var3 = var4.then;
                                        var2 = function() { // Environment: var1
                                            var2 = _closure1_slot7;
                                            var1 = var2.info;
                                            var0 = 'Custom scheme opened successfully.';
                                            var0 = var1.bind(var2)(var0);
                                            var2 = _closure6_slot0;
                                            var0 = undefined;
                                            var1 = true;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var3 = var3.bind(var4)(var2);
                                        var2 = var3.catch;
                                        var1 = function() { // Environment: var1
                                            var2 = _closure1_slot7;
                                            var1 = var2.info;
                                            var0 = 'Custom scheme failed to open.';
                                            var0 = var1.bind(var2)(var0);
                                            var2 = _closure6_slot0;
                                            var0 = undefined;
                                            var1 = false;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var16 = var2;
                                    var0 = new var16[var3](var15, var14);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    _fun26988_ip = 303;
                                    continue _fun26988;
                                case 270:
                                    var2 = global;
                                    var3 = var2.Promise;
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var15 = function(arg0) { // Environment: var1
                                        var2 = _closure1_slot7;
                                        var1 = var2.info;
                                        var0 = 'URL is not a custom scheme.';
                                        var0 = var1.bind(var2)(var0);
                                        var2 = arg0;
                                        var0 = undefined;
                                        var1 = false;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var16 = var2;
                                    var1 = new var16[var3](var15, var14);
                                    var0 = var1 instanceof Object ? var1 : var2;
                                case 303:
                                    return var0;
                            }
                        };
                        var5 = var5.bind(var2)(var8);
                        SaveGenerator(address = 406);
                    case 404:
                        return var5;
                    case 406:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (var8) {
                            _fun26980_ip = 447;
                            continue _fun26980
                        }
                    case 412:
                        if (var5) {
                            _fun26980_ip = 462;
                            continue _fun26980
                        }
                    case 415:
                        var6 = function(arg0) { // Original name: tryHandleWhitelistedURL, environment: var6
                            _fun26993: for (var _fun26993_ip = 0;;) switch (_fun26993_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var7 = function(arg0) { // Original name: _loop, environment: var0
                                        _fun26994: for (var _fun26994_ip = 0;;) switch (_fun26994_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var _closure6_slot0 = var0;
                                                var3 = _closure5_slot1;
                                                var1 = var3.exec;
                                                var0 = _closure5_slot0;
                                                var3 = var1.bind(var3)(var0);
                                                var1 = null;
                                                var0 = 0;
                                                if (!(var1 !== var3)) {
                                                    _fun26994_ip = 81;
                                                    continue _fun26994
                                                }
                                            case 39:
                                                var1 = {};
                                                var3 = global;
                                                var4 = var3.Promise;
                                                var3 = var4.prototype;
                                                var3 = Object.create(var3, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var5 = function(arg0) { // Environment: var2
                                                    var1 = arg0;
                                                    var _closure7_slot0 = var1;
                                                    var3 = _closure1_slot4;
                                                    var2 = var3.canOpenURL;
                                                    var1 = _closure6_slot0;
                                                    var3 = var2.bind(var3)(var1);
                                                    var2 = var3.then;
                                                    var1 = function(arg0) { // Environment: var0
                                                        _fun26996: for (var _fun26996_ip = 0;;) switch (_fun26996_ip) {
                                                            case 0:
                                                                var1 = arg0;
                                                                if (var1) {
                                                                    _fun26996_ip = 48;
                                                                    continue _fun26996
                                                                }
                                                            case 9:
                                                                var3 = _closure1_slot7;
                                                                var2 = var3.info;
                                                                var1 = 'Whitelisted URL, but cannot be opened (app likely not installed).';
                                                                var1 = var2.bind(var3)(var1);
                                                                var3 = _closure7_slot0;
                                                                var2 = undefined;
                                                                var1 = false;
                                                                var1 = var3.bind(var2)(var1);
                                                                _fun26996_ip = 102;
                                                                continue _fun26996;
                                                            case 48:
                                                                var1 = _closure1_slot1;
                                                                var2 = _closure1_slot2;
                                                                var0 = 7;
                                                                var0 = var2[var0];
                                                                var2 = undefined;
                                                                var3 = var1.bind(var2)(var0);
                                                                var1 = var3.performURLNavigation;
                                                                var0 = _closure5_slot0;
                                                                var0 = var1.bind(var3)(var0);
                                                                var1 = _closure7_slot0;
                                                                var0 = true;
                                                                var0 = var1.bind(var2)(var0);
                                                            case 102:
                                                                var0 = undefined;
                                                                return var0;
                                                        }
                                                    };
                                                    var2 = var2.bind(var3)(var1);
                                                    var1 = var2.catch;
                                                    var0 = function(arg0) { // Environment: var0
                                                        var3 = _closure1_slot7;
                                                        var2 = var3.info;
                                                        var1 = {};
                                                        var0 = arg0;
                                                        var1.error = var0;
                                                        var0 = 'Whitelisted URL encountered an error.';
                                                        var0 = var2.bind(var3)(var0, var1);
                                                        var2 = _closure7_slot0;
                                                        var0 = undefined;
                                                        var1 = false;
                                                        var1 = var2.bind(var0)(var1);
                                                        return var0;
                                                    };
                                                    var0 = var1.bind(var2)(var0);
                                                    var0 = undefined;
                                                    return var0;
                                                };
                                                var6 = var3;
                                                var2 = new var6[var4](var5, var4);
                                                var2 = var2 instanceof Object ? var2 : var3;
                                                var1.v = var2;
                                                var0 = var1;
                                            case 81:
                                                return var0;
                                        }
                                    };
                                    var2 = _closure1_slot8;
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var4[var1];
                                    var6 = undefined;
                                    var1 = var3.bind(var6)(var1);
                                    var1 = var1.LINKING_WHITELIST_VALUES;
                                    var5 = var2.bind(var6)(var1);
                                    var2 = var5.bind(var6)();
                                    var1 = var2.done;
                                    var4 = 0;
                                    var3 = var2;
                                    if (var1) {
                                        _fun26993_ip = 128;
                                        continue _fun26993
                                    }
                                case 71:
                                    var1 = var3.value;
                                    var2 = var1.regex;
                                    var _closure5_slot1 = var2;
                                    var1 = var1.protocol;
                                    var1 = var7.bind(var6)(var1);
                                    if (!(var4 !== var1)) {
                                        _fun26993_ip = 104;
                                        continue _fun26993
                                    }
                                case 101:
                                    if (var1) {
                                        _fun26993_ip = 121;
                                        continue _fun26993
                                    }
                                case 104:
                                    var8 = var5.bind(var6)();
                                    var2 = var8.done;
                                    var3 = var8;
                                    if (var2) {
                                        _fun26993_ip = 128;
                                        continue _fun26993
                                    }
                                case 119:
                                    _fun26993_ip = 71;
                                    continue _fun26993;
                                case 121:
                                    var1 = var1.v;
                                    return var1;
                                case 128:
                                    var1 = global;
                                    var2 = var1.Promise;
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var9 = function(arg0) { // Environment: var0
                                        var2 = _closure1_slot7;
                                        var1 = var2.info;
                                        var0 = 'URL is not whitelisted.';
                                        var0 = var1.bind(var2)(var0);
                                        var2 = arg0;
                                        var0 = undefined;
                                        var1 = false;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var10 = var1;
                                    var0 = new var10[var2](var9, var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var6 = var6.bind(var2)(var7);
                        SaveGenerator(address = 429);
                    case 427:
                        return var6;
                    case 429:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun26980_ip = 444;
                            continue _fun26980
                        }
                    case 435:
                        if (var6) {
                            _fun26980_ip = 462;
                            continue _fun26980
                        }
                    case 438:
                        var7 = var3.bind(var2)();
                        _fun26980_ip = 462;
                        continue _fun26980;
                    case 444:
                        return var6;
                    case 447:
                        return var5;
                    case 450:
                        return var4;
                    case 453: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        return var2;
                    case 458:
                        var3 = var3.bind(var2)();
                    case 462:
                        return var2;
                    case 465:
                        return var1;
                    case 468:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Linking;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.WebBrowserType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'handleURL';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/links/native/handleURL.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: handleURL, environment: var1
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 3099, 660, 3, 3100, 3102, 3103, 3104, 3105, 3106, 1234, 3235, 478, 3237, 1459, 3241, 3430, 2]);