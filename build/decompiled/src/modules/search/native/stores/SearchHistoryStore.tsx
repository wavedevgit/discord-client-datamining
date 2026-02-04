// modules/search/native/stores/SearchHistoryStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun105297: for (var _fun105297_ip = 0;;) switch (_fun105297_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun105297_ip = 76;
                continue _fun105297;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun105300: for (var _fun105300_ip = 0;;) switch (_fun105300_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot9;
                var0 = var0[var2];
                var3 = null;
                if (!(var3 == var0)) {
                    _fun105300_ip = 44;
                    continue _fun105300
                }
            case 20:
                var3 = _closure1_slot8;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = var4;
                var3 = new var5[var3](var4);
                var0 = var3 instanceof Object ? var3 : var4;
            case 44:
                var1 = _closure1_slot9;
                var1[var2] = var0;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var7 = var4.bind(var0)(var1);
    var1 = var7.NATIVE_SEARCH_HISTORY_STORAGE_KEY;
    var8 = var7.NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
    var7 = var7.SearchHistoryItemTypes;
    var _closure1_slot7 = var7;
    var7 = function() { // Environment: var3
        var3 = _closure1_slot6;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot5;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2.items = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'deserialize';
        var0.key = var1;
        var1 = function arg0() {
            var4 = arg0;
            var1 = this;
            var3 = var4.slice;
            var2 = 0;
            var0 = 3;
            var0 = var3.bind(var4)(var2, var0);
            var1.items = var0;
            var3 = var1.items;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                _fun105304: for (var _fun105304_ip = 0;;) switch (_fun105304_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.type;
                        var0 = _closure1_slot7;
                        var0 = var0.TEXT;
                        var0 = var2 !== var0;
                        if (var0) {
                            _fun105304_ip = 40;
                            continue _fun105304
                        }
                    case 28:
                        var3 = var1.tags;
                        var2 = null;
                        var0 = var2 == var3;
                    case 40:
                        if (var0) {
                            _fun105304_ip = 69;
                            continue _fun105304
                        }
                    case 43:
                        var3 = var1.tags;
                        var2 = var3.every;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.hasOwnProperty;
                            var1 = arg0;
                            var0 = 'type';
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1);
                    case 69:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0);
            var1.items = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'serialize';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.items;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'add';
        var0.key = var5;
        var5 = function arg0() {
            _fun105307: for (var _fun105307_ip = 0;;) switch (_fun105307_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var3.type;
                    var0 = _closure1_slot7;
                    var0 = var0.TEXT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun105307_ip = 54;
                        continue _fun105307
                    }
                case 31:
                    var4 = var3.text;
                    var2 = var4.trim;
                    var4 = var2.bind(var4)();
                    var2 = '';
                    var0 = var2 === var4;
                case 54:
                    if (!var0) {
                        _fun105307_ip = 92;
                        continue _fun105307
                    }
                case 57:
                    var4 = var3.tags;
                    var2 = null;
                    var2 = var2 == var4;
                    if (var2) {
                        _fun105307_ip = 89;
                        continue _fun105307
                    }
                case 72:
                    var4 = var3.tags;
                    var5 = var4.length;
                    var4 = 0;
                    var2 = var4 === var5;
                case 89:
                    var0 = var2;
                case 92:
                    if (var0) {
                        _fun105307_ip = 149;
                        continue _fun105307
                    }
                case 95:
                    var0 = var1.remove;
                    var0 = var0.bind(var1)(var3);
                    var2 = var1.items;
                    var0 = var2.unshift;
                    var0 = var0.bind(var2)(var3);
                    var4 = var1.items;
                    var3 = var4.slice;
                    var2 = 0;
                    var0 = 3;
                    var0 = var3.bind(var4)(var2, var0);
                    var1.items = var0;
                case 149:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'remove';
        var0.key = var5;
        var4 = function arg0() {
            var1 = this;
            var2 = arg0;
            var _closure3_slot0 = var2;
            var3 = var1.items;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.isEqual;
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                var0 = !var0;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1.items = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var7 = var7.bind(var0)();
    var _closure1_slot8 = var7;
    var7 = {};
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var9 = var7.PersistedStore;
    var7 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun105311: for (var _fun105311_ip = 0;;) switch (_fun105311_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun105311_ip = 69;
                        continue _fun105311
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun105311_ip = 105;
                    continue _fun105311;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'getState';
        var4.key = var0;
        var0 = function() {
            var1 = {};
            var _closure3_slot0 = var1;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = _closure1_slot9;
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun105313: for (var _fun105313_ip = 0;;) switch (_fun105313_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var4 = var5().value;
                        var2 = var1;
                        var0 = undefined;
                        var2 = var2 === var0;
                        var3 = undefined;
                        if (var2) {
                            _fun105313_ip = 27;
                            continue _fun105313
                        }
                    case 24:
                        var3 = var4;
                    case 27:
                        var4 = undefined;
                        if (var2) {
                            _fun105313_ip = 57;
                            continue _fun105313
                        }
                    case 32:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var0;
                        var4 = undefined;
                        var2 = var5;
                        if (var5) {
                            _fun105313_ip = 57;
                            continue _fun105313
                        }
                    case 51:
                        var4 = var6;
                        var2 = var5;
                    case 57:
                        if (var2) {
                            _fun105313_ip = 63;
                            continue _fun105313
                        }
                    case 60:
                        var1.return();
                    case 63:
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun105313_ip = 90;
                            continue _fun105313
                        }
                    case 69:
                        var2 = _closure3_slot0;
                        var1 = var4.serialize;
                        var1 = var1.bind(var4)();
                        var2[var3] = var1;
                    case 90:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0);
            var0 = {};
            var0.searchHistories = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'initialize';
        var4.key = var6;
        var6 = function arg0() {
            _fun105314: for (var _fun105314_ip = 0;;) switch (_fun105314_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    var5 = undefined;
                    if (var3) {
                        _fun105314_ip = 22;
                        continue _fun105314
                    }
                case 16:
                    var5 = var2.searchHistories;
                case 22:
                    if (!(var1 != var5)) {
                        _fun105314_ip = 74;
                        continue _fun105314
                    }
                case 26:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 7;
                    var1 = var4[var1];
                    var4 = var3.bind(var0)(var1);
                    var3 = var4.mapValues;
                    var1 = function(arg0) { // Environment: var1
                        var0 = _closure1_slot8;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var4 = var1;
                        var0 = new var4[var0](var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        var2 = var0.deserialize;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var5, var1);
                    _closure1_slot9 = var1;
                case 74:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSearchHistory';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot11;
            var1 = undefined;
            var0 = arg0;
            var1 = var2.bind(var1)(var0);
            var0 = var1.serialize;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var7.bind(var0)(var9);
    var7.displayName = var8;
    var7.persistKey = var1;
    var1 = 9;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.id;
        var0 = _closure1_slot9;
        var0 = delete var0[var1];
        var0 = undefined;
        return var0;
    };
    var1.SEARCH_HISTORY_NATIVE_CLEAR_ITEMS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.id;
        var3 = var0.item;
        var1 = _closure1_slot11;
        var0 = undefined;
        var2 = var1.bind(var0)(var2);
        var1 = var2.remove;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.SEARCH_HISTORY_NATIVE_REMOVE_ITEM = var8;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.id;
        var3 = var0.item;
        var1 = _closure1_slot11;
        var0 = undefined;
        var2 = var1.bind(var0)(var2);
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.SEARCH_HISTORY_NATIVE_ADD_ITEM = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/stores/SearchHistoryStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 8917, 1385, 22, 566, 806, 2]);