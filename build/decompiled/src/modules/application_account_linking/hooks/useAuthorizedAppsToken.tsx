// modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun56778: for (var _fun56778_ip = 0;;) switch (_fun56778_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun56778_ip = 46;
                    continue _fun56778
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun56778_ip = 55;
                    continue _fun56778
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun56778_ip = 343;
                    continue _fun56778
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun56778_ip = 323;
                    continue _fun56778
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun56778_ip = 283;
                    continue _fun56778
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun56778_ip = 270;
                    continue _fun56778
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
                    _fun56778_ip = 163;
                    continue _fun56778
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun56778_ip = 179;
                    continue _fun56778
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun56778_ip = 249;
                    continue _fun56778
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun56778_ip = 249;
                    continue _fun56778
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun56778_ip = 234;
                    continue _fun56778
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun56778_ip = 247;
                    continue _fun56778
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun56778_ip = 265;
                continue _fun56778;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun56778_ip = 283;
                continue _fun56778;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun56778_ip = 323;
                    continue _fun56778
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
                    _fun56778_ip = 330;
                    continue _fun56778
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun56779: for (var _fun56779_ip = 0;;) switch (_fun56779_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun56779_ip = 56;
                                continue _fun56779
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
                            _fun56779_ip = 67;
                            continue _fun56779;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun56780: for (var _fun56780_ip = 0;;) switch (_fun56780_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun56780_ip = 23;
                    continue _fun56780
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun56780_ip = 33;
                    continue _fun56780
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
                    _fun56780_ip = 70;
                    continue _fun56780
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun56780_ip = 55;
                    continue _fun56780
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = function arg0, arg1() {
        _fun56781: for (var _fun56781_ip = 0;;) switch (_fun56781_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var4;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun56781_ip = 20;
                    continue _fun56781
                }
            case 18:
                var1 = {};
            case 20:
                var1 = var1.disableFetch;
                var8 = undefined;
                var7 = var8 !== var1;
                if (!var7) {
                    _fun56781_ip = 40;
                    continue _fun56781
                }
            case 37:
                var7 = var1;
            case 40:
                var _closure2_slot1 = var7;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 2;
                var1 = var9[var5];
                var12 = var6.bind(var8)(var1);
                var11 = var12.useStateFromStoresArray;
                var1 = _closure1_slot4;
                var10 = new Array(1);
                var10[0] = var1;
                var2 = new Array(1);
                var2[0] = var4;
                var1 = function() { // Environment: var0
                    _fun56782: for (var _fun56782_ip = 0;;) switch (_fun56782_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 == var0;
                            var6 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun56782_ip = 80;
                                continue _fun56782
                            }
                        case 20:
                            var4 = _closure2_slot0;
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var2
                                var2 = _closure1_slot4;
                                var1 = var2.getNewestTokenForApplication;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.filter;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 3;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.isNotNullish;
                            var0 = var3.bind(var4)(var2);
                        case 80:
                            if (!(var1 == var0)) {
                                _fun56782_ip = 88;
                                continue _fun56782
                            }
                        case 84:
                            var0 = new Array(0);
                        case 88:
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var10, var1, var2);
                var1 = var9[var5];
                var13 = var6.bind(var8)(var1);
                var12 = var13.useStateFromStores;
                var1 = _closure1_slot4;
                var11 = new Array(1);
                var11[0] = var1;
                var10 = new Array(1);
                var10[0] = var4;
                var1 = function() { // Environment: var0
                    _fun56784: for (var _fun56784_ip = 0;;) switch (_fun56784_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var3 = var0 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun56784_ip = 40;
                                continue _fun56784
                            }
                        case 18:
                            var4 = _closure2_slot0;
                            var3 = var4.every;
                            var2 = function(arg0) { // Environment: var2
                                var3 = _closure1_slot4;
                                var2 = var3.getFetchStateForApplication;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                                var0 = _closure1_slot5;
                                var0 = var0.FETCHED;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2);
                        case 40:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun56784_ip = 50;
                                continue _fun56784
                            }
                        case 47:
                            var0 = var1;
                        case 50:
                            return var0;
                    }
                };
                var1 = var12.bind(var13)(var11, var1, var10);
                var5 = var9[var5];
                var9 = var6.bind(var8)(var5);
                var8 = var9.useStateFromStoresArray;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    _fun56786: for (var _fun56786_ip = 0;;) switch (_fun56786_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun56786_ip = 39;
                                continue _fun56786
                            }
                        case 18:
                            var4 = _closure2_slot0;
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var2
                                var3 = _closure1_slot4;
                                var2 = var3.getFetchStateForApplication;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                                var0 = _closure1_slot5;
                                var0 = var0.NOT_FETCHED;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2);
                        case 39:
                            if (!(var1 == var0)) {
                                _fun56786_ip = 47;
                                continue _fun56786
                            }
                        case 43:
                            var0 = new Array(0);
                        case 47:
                            return var0;
                    }
                };
                var6 = var8.bind(var9)(var6, var4, var5);
                var _closure2_slot2 = var6;
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var0 = function() { // Environment: var0
                    _fun56788: for (var _fun56788_ip = 0;;) switch (_fun56788_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun56788_ip = 106;
                                continue _fun56788
                            }
                        case 10:
                            var1 = _closure2_slot2;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun56788_ip = 106;
                                continue _fun56788
                            }
                        case 25:
                            var1 = _closure1_slot6;
                            var0 = _closure2_slot2;
                            var4 = undefined;
                            var3 = var1.bind(var4)(var0);
                            var1 = var3.bind(var4)();
                            var0 = var1.done;
                            var2 = 4;
                            if (var0) {
                                _fun56788_ip = 106;
                                continue _fun56788
                            }
                        case 58:
                            var7 = var1.value;
                            var6 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var0 = var0[var2];
                            var6 = var6.bind(var4)(var0);
                            var0 = var6.fetchByApplicationId;
                            var0 = var0.bind(var6)(var7);
                            var6 = var3.bind(var4)();
                            var0 = var6.done;
                            var1 = var6;
                            if (!var0) {
                                _fun56788_ip = 58;
                                continue _fun56788
                            }
                        case 106:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = {};
                var0.tokens = var2;
                var0.fetched = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.FetchState;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useAuthorizedAppsTokens = var3;
    var1 = function arg0, arg1() {
        _fun56789: for (var _fun56789_ip = 0;;) switch (_fun56789_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot8;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun56790: for (var _fun56790_ip = 0;;) switch (_fun56790_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun56790_ip = 31;
                                continue _fun56790
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 31:
                            return var0;
                    }
                };
                var2 = var2.bind(var4)(var0, var1);
                var1 = undefined;
                var0 = arg1;
                var0 = var3.bind(var1)(var2, var0);
                var4 = var0.tokens;
                var1 = var0.fetched;
                var0 = {};
                var2 = var4.length;
                var3 = 0;
                var5 = var2 > var3;
                var2 = null;
                if (!var5) {
                    _fun56789_ip = 89;
                    continue _fun56789
                }
            case 85:
                var2 = var4[var3];
            case 89:
                var0.token = var2;
                var0.fetched = var1;
                return var0;
        }
    };
    var2.useAuthorizedAppsToken = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4586, 566, 1304, 5351, 2]);