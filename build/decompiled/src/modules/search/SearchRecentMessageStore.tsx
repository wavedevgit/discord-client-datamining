// modules/search/SearchRecentMessageStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun71891: for (var _fun71891_ip = 0;;) switch (_fun71891_ip) {
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
                _fun71891_ip = 76;
                continue _fun71891;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var3 = function() {
        var0 = global;
        var0 = var0.Map;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var2 = var1;
        var0 = new var2[var0](var1);
        var1 = var0 instanceof Object ? var0 : var1;
        _closure1_slot7 = var1;
        var0 = undefined;
        return var0;
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot7 = var1;
    var1 = new Array(0);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var8
        var3 = function() {
            _fun71896: for (var _fun71896_ip = 0;;) switch (_fun71896_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun71896_ip = 69;
                        continue _fun71896
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun71896_ip = 105;
                    continue _fun71896;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'getRecentMessageAuthorIds';
        var4.key = var5;
        var0 = function arg0() {
            _fun71897: for (var _fun71897_ip = 0;;) switch (_fun71897_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.get;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun71897_ip = 30;
                        continue _fun71897
                    }
                case 26:
                    var0 = _closure1_slot8;
                case 30:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SearchRecentMessageStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun71898: for (var _fun71898_ip = 0;;) switch (_fun71898_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.guildId;
                var6 = var1.data;
                var1 = undefined;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var1;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun71898_ip = 169;
                    continue _fun71898
                }
            case 38:
                var1 = false;
                _closure2_slot0 = var1;
                var5 = _closure1_slot7;
                var3 = var5.get;
                var5 = var3.bind(var5)(var4);
                if (!(var2 == var5)) {
                    _fun71898_ip = 69;
                    continue _fun71898
                }
            case 65:
                var5 = new Array(0);
            case 69:
                var3 = new Array(0);
                var7 = 0;
                var9 = var3;
                var8 = var5;
                var2 = arraySpread(var9, var8, var7);
                _closure2_slot1 = var3;
                var2 = global;
                var2 = var2.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var5;
                var9 = var3;
                var2 = new var10[var2](var9, var8);
                var2 = var2 instanceof Object ? var2 : var5;
                _closure2_slot2 = var2;
                var5 = var6.forEach;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.messages;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun71900: for (var _fun71900_ip = 0;;) switch (_fun71900_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0[Symbol.iterator];
                                var0 = var1().next;
                                var4 = var0().value;
                                var2 = var1;
                                var0 = undefined;
                                var2 = var2 === var0;
                                var3 = undefined;
                                if (var2) {
                                    _fun71900_ip = 27;
                                    continue _fun71900
                                }
                            case 24:
                                var3 = var4;
                            case 27:
                                if (var2) {
                                    _fun71900_ip = 33;
                                    continue _fun71900
                                }
                            case 30:
                                var1.return();
                            case 33:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 5;
                                var1 = var4[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.createMessageRecord;
                                var1 = var1.bind(var2)(var3);
                                var5 = _closure2_slot2;
                                var4 = var5.has;
                                var3 = var1.author;
                                var3 = var3.id;
                                var3 = var4.bind(var5)(var3);
                                var3 = !var3;
                                if (!var3) {
                                    _fun71900_ip = 117;
                                    continue _fun71900
                                }
                            case 101:
                                var4 = _closure2_slot2;
                                var5 = var4.size;
                                var4 = 15;
                                var3 = var5 < var4;
                            case 117:
                                if (!var3) {
                                    _fun71900_ip = 176;
                                    continue _fun71900
                                }
                            case 120:
                                var5 = _closure2_slot2;
                                var4 = var5.add;
                                var3 = var1.author;
                                var3 = var3.id;
                                var3 = var4.bind(var5)(var3);
                                var4 = _closure2_slot1;
                                var3 = var4.push;
                                var1 = var1.author;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var1);
                                var1 = true;
                                _closure2_slot0 = var1;
                            case 176:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                var2 = _closure2_slot0;
                if (!var2) {
                    _fun71898_ip = 163;
                    continue _fun71898
                }
            case 148:
                var2 = _closure1_slot7;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
            case 163:
                var0 = _closure2_slot0;
                return var0;
            case 169:
                var0 = false;
                return var0;
        }
    };
    var1.SEARCH_MESSAGES_SUCCESS = var8;
    var1.SEARCH_RECENT_MESSAGES_CLEAR = var3;
    var1.CONNECTION_OPEN = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/SearchRecentMessageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3963, 566, 806, 2]);