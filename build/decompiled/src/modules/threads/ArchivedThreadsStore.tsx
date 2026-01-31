// modules/threads/ArchivedThreadsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun53237: for (var _fun53237_ip = 0;;) switch (_fun53237_ip) {
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
            case 70: // try_end0
                _fun53237_ip = 74;
                continue _fun53237;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun53240: for (var _fun53240_ip = 0;;) switch (_fun53240_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun53240_ip = 46;
                    continue _fun53240
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun53240_ip = 55;
                    continue _fun53240
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun53240_ip = 343;
                    continue _fun53240
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun53240_ip = 323;
                    continue _fun53240
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun53240_ip = 283;
                    continue _fun53240
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun53240_ip = 270;
                    continue _fun53240
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
                    _fun53240_ip = 163;
                    continue _fun53240
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun53240_ip = 179;
                    continue _fun53240
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun53240_ip = 249;
                    continue _fun53240
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun53240_ip = 249;
                    continue _fun53240
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun53240_ip = 234;
                    continue _fun53240
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun53240_ip = 247;
                    continue _fun53240
                }
            case 234:
                var8 = _closure1_slot25;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun53240_ip = 265;
                continue _fun53240;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun53240_ip = 283;
                continue _fun53240;
            case 270:
                var6 = _closure1_slot25;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun53240_ip = 323;
                    continue _fun53240
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
                    _fun53240_ip = 330;
                    continue _fun53240
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun53241: for (var _fun53241_ip = 0;;) switch (_fun53241_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun53241_ip = 56;
                                continue _fun53241
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
                            _fun53241_ip = 67;
                            continue _fun53241;
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
    var _closure1_slot24 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun53242: for (var _fun53242_ip = 0;;) switch (_fun53242_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun53242_ip = 23;
                    continue _fun53242
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun53242_ip = 33;
                    continue _fun53242
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
                    _fun53242_ip = 70;
                    continue _fun53242
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun53242_ip = 55;
                    continue _fun53242
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var8 = function() { // Original name: reset, environment: var3
        var0 = false;
        _closure1_slot13 = var0;
        var1 = true;
        _closure1_slot14 = var1;
        _closure1_slot15 = var0;
        _closure1_slot16 = var0;
        var0 = null;
        _closure1_slot17 = var0;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 9;
        var1 = var4[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var1 = var1.ThreadSortOrder;
        var1 = var1.LATEST_ACTIVITY;
        _closure1_slot18 = var1;
        var1 = global;
        var1 = var1.Set;
        var5 = var1.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var1
            }
        });
        var7 = var5;
        var1 = new var7[var1](var6);
        var1 = var1 instanceof Object ? var1 : var5;
        var _closure1_slot12 = var1;
        var1 = 0;
        _closure1_slot20 = var1;
        var1 = new Array(0);
        _closure1_slot19 = var1;
        var1 = 10;
        var1 = var4[var1];
        var1 = var3.bind(var0)(var1);
        var1 = var1.ThreadSearchTagSetting;
        var1 = var1.MATCH_SOME;
        _closure1_slot21 = var1;
        return var0;
    };
    var _closure1_slot26 = var8;
    var0 = function(arg0, arg1) { // Original name: getSortValue, environment: var3
        _fun53244: for (var _fun53244_ip = 0;;) switch (_fun53244_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.ThreadSortOrder;
                var3 = var0.LATEST_ACTIVITY;
                var0 = arg1;
                if (!(var0 !== var3)) {
                    _fun53244_ip = 54;
                    continue _fun53244
                }
            case 47:
                var0 = var1.id;
                _fun53244_ip = 74;
                continue _fun53244;
            case 54:
                var3 = _closure1_slot10;
                var2 = var3.lastMessageId;
                var1 = var1.id;
                var0 = var2.bind(var3)(var1);
            case 74:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() { // Original name: resort, environment: var3
        _fun53245: for (var _fun53245_ip = 0;;) switch (_fun53245_ip) {
            case 0:
                var3 = _closure1_slot17;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun53245_ip = 224;
                    continue _fun53245
                }
            case 18:
                var3 = _closure1_slot15;
                var3 = !var3;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot9;
                var4 = var5.getChannel;
                var6 = _closure1_slot19;
                var7 = var6.length;
                var3 = 1;
                var3 = var7 - var3;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var3 = var0 == var6;
                var0 = null;
                if (var3) {
                    _fun53245_ip = 88;
                    continue _fun53245
                }
            case 72:
                var5 = _closure1_slot27;
                var4 = _closure1_slot18;
                var3 = undefined;
                var0 = var5.bind(var3)(var6, var4);
            case 88:
                var _closure2_slot1 = var0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 13;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var6 = _closure1_slot9;
                var5 = var6.getAllThreadsForParent;
                var3 = _closure1_slot17;
                var3 = var5.bind(var6)(var3);
                var5 = var4.bind(var0)(var3);
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.isArchivedThread;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var1
                    _fun53247: for (var _fun53247_ip = 0;;) switch (_fun53247_ip) {
                        case 0:
                            var8 = arg0;
                            var0 = _closure1_slot12;
                            var0 = var0.size;
                            var2 = 0;
                            if (!(var2 !== var0)) {
                                _fun53247_ip = 243;
                                continue _fun53247
                            }
                        case 24:
                            var4 = _closure1_slot21;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 10;
                            var0 = var0[var6];
                            var1 = undefined;
                            var0 = var5.bind(var1)(var0);
                            var0 = var0.ThreadSearchTagSetting;
                            var0 = var0.MATCH_SOME;
                            if (!(var4 !== var0)) {
                                _fun53247_ip = 202;
                                continue _fun53247
                            }
                        case 69:
                            var4 = _closure1_slot21;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var6];
                            var0 = var5.bind(var1)(var0);
                            var0 = var0.ThreadSearchTagSetting;
                            var0 = var0.MATCH_ALL;
                            if (!(var4 === var0)) {
                                _fun53247_ip = 243;
                                continue _fun53247
                            }
                        case 109:
                            var4 = _closure1_slot24;
                            var5 = _closure1_slot12;
                            var0 = var5.values;
                            var0 = var0.bind(var5)();
                            var7 = var4.bind(var1)(var0);
                            var4 = var7.bind(var1)();
                            var0 = var4.done;
                            var6 = true;
                            var5 = null;
                            if (var0) {
                                _fun53247_ip = 243;
                                continue _fun53247
                            }
                        case 147:
                            var11 = var4.value;
                            var10 = var8.appliedTags;
                            var9 = var5 == var10;
                            var0 = undefined;
                            if (var9) {
                                _fun53247_ip = 177;
                                continue _fun53247
                            }
                        case 167:
                            var9 = var10.includes;
                            var0 = var9.bind(var10)(var11);
                        case 177:
                            if (!(var6 === var0)) {
                                _fun53247_ip = 198;
                                continue _fun53247
                            }
                        case 181:
                            var9 = var7.bind(var1)();
                            var0 = var9.done;
                            var4 = var9;
                            if (var0) {
                                _fun53247_ip = 243;
                                continue _fun53247
                            }
                        case 196:
                            _fun53247_ip = 147;
                            continue _fun53247;
                        case 198:
                            var0 = false;
                            return var0;
                        case 202:
                            var5 = var8.appliedTags;
                            var0 = null;
                            var0 = var0 == var5;
                            var1 = undefined;
                            if (var0) {
                                _fun53247_ip = 237;
                                continue _fun53247
                            }
                        case 219:
                            var4 = var5.some;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot12;
                                var1 = var2.has;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var4.bind(var5)(var0);
                        case 237:
                            var0 = true;
                            if (!(var0 === var1)) {
                                _fun53247_ip = 343;
                                continue _fun53247
                            }
                        case 243:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun53247_ip = 339;
                                continue _fun53247
                            }
                        case 253:
                            var4 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun53247_ip = 339;
                                continue _fun53247
                            }
                        case 263:
                            var4 = var0 == var8;
                            var5 = null;
                            if (var4) {
                                _fun53247_ip = 288;
                                continue _fun53247
                            }
                        case 272:
                            var7 = _closure1_slot27;
                            var6 = _closure1_slot18;
                            var4 = undefined;
                            var5 = var7.bind(var4)(var8, var6);
                        case 288:
                            var0 = var0 != var5;
                            if (!var0) {
                                _fun53247_ip = 337;
                                continue _fun53247
                            }
                        case 295:
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 14;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var6.bind(var3)(var4);
                            var3 = var4.compare;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var5, var1);
                            var0 = var1 >= var2;
                        case 337:
                            return var0;
                        case 339:
                            var0 = true;
                            return var0;
                        case 343:
                            var0 = false;
                            return var0;
                    }
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.sort;
                var3 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var1);
                    var2 = var3.compare;
                    var5 = _closure1_slot27;
                    var4 = _closure1_slot18;
                    var1 = arg0;
                    var1 = var5.bind(var6)(var1, var4);
                    var4 = _closure1_slot18;
                    var0 = arg1;
                    var0 = var5.bind(var6)(var0, var4);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var3 = var3.bind(var4)(var1);
                var1 = var3.reverse;
                var3 = var1.bind(var3)();
                var1 = var3.value;
                var1 = var1.bind(var3)();
                _closure1_slot19 = var1;
                return var0;
            case 224:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0) { // Original name: removeThreadId, environment: var3
        _fun53251: for (var _fun53251_ip = 0;;) switch (_fun53251_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot19;
                var2 = var3.indexOf;
                var3 = var2.bind(var3)(var4);
                var2 = 0;
                if (!(!(var3 >= var2))) {
                    _fun53251_ip = 37;
                    continue _fun53251
                }
            case 33:
                var2 = false;
                return var2;
            case 37:
                var3 = _closure1_slot19;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                _closure1_slot19 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var9 = true;
    var1.value = var9;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ALL_CHANNEL_TYPES;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = false;
    var _closure1_slot13 = var7;
    var _closure1_slot14 = var9;
    var _closure1_slot15 = var7;
    var _closure1_slot16 = var7;
    var7 = null;
    var _closure1_slot17 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ThreadSortOrder;
    var7 = var7.LATEST_ACTIVITY;
    var _closure1_slot18 = var7;
    var7 = new Array(0);
    var _closure1_slot19 = var7;
    var _closure1_slot20 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ThreadSearchTagSetting;
    var1 = var1.MATCH_SOME;
    var _closure1_slot21 = var1;
    var1 = new Array(0);
    var _closure1_slot22 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ArchivedThreadsStore, environment: var5
            _fun53254: for (var _fun53254_ip = 0;;) switch (_fun53254_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun53254_ip = 69;
                        continue _fun53254
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun53254_ip = 105;
                    continue _fun53254;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot9;
            var1 = _closure1_slot11;
            var0 = _closure1_slot10;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'canLoadMore';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun53256: for (var _fun53256_ip = 0;;) switch (_fun53256_ip) {
                case 0:
                    var0 = _closure1_slot15;
                    if (!var0) {
                        _fun53256_ip = 17;
                        continue _fun53256
                    }
                case 10:
                    var2 = _closure1_slot13;
                    var0 = !var2;
                case 17:
                    if (!var0) {
                        _fun53256_ip = 27;
                        continue _fun53256
                    }
                case 20:
                    var1 = _closure1_slot16;
                    var0 = !var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'nextOffset';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot20;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isInitialLoad';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isLoading';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun53259: for (var _fun53259_ip = 0;;) switch (_fun53259_ip) {
                case 0:
                    var2 = _closure1_slot17;
                    var0 = arg0;
                    if (!(var2 === var0)) {
                        _fun53259_ip = 80;
                        continue _fun53259
                    }
                case 14:
                    var2 = _closure1_slot18;
                    var0 = arg1;
                    if (!(var2 === var0)) {
                        _fun53259_ip = 80;
                        continue _fun53259
                    }
                case 25:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.areSetsEqual;
                    var2 = _closure1_slot12;
                    var0 = arg2;
                    var0 = var3.bind(var4)(var2, var0);
                    if (!var0) {
                        _fun53259_ip = 80;
                        continue _fun53259
                    }
                case 69:
                    var2 = _closure1_slot21;
                    var0 = arg3;
                    if (!(var2 !== var0)) {
                        _fun53259_ip = 94;
                        continue _fun53259
                    }
                case 80:
                    var2 = _closure1_slot26;
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                    var0 = false;
                    _fun53259_ip = 98;
                    continue _fun53259;
                case 94:
                    var0 = _closure1_slot13;
                case 98:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getThreads';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun53260: for (var _fun53260_ip = 0;;) switch (_fun53260_ip) {
                case 0:
                    var2 = _closure1_slot17;
                    var0 = arg0;
                    if (!(var2 === var0)) {
                        _fun53260_ip = 80;
                        continue _fun53260
                    }
                case 14:
                    var2 = _closure1_slot18;
                    var0 = arg1;
                    if (!(var2 === var0)) {
                        _fun53260_ip = 80;
                        continue _fun53260
                    }
                case 25:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.areSetsEqual;
                    var2 = _closure1_slot12;
                    var0 = arg2;
                    var0 = var3.bind(var4)(var2, var0);
                    if (!var0) {
                        _fun53260_ip = 80;
                        continue _fun53260
                    }
                case 69:
                    var2 = _closure1_slot21;
                    var0 = arg3;
                    if (!(var2 !== var0)) {
                        _fun53260_ip = 86;
                        continue _fun53260
                    }
                case 80:
                    var0 = _closure1_slot22;
                    _fun53260_ip = 90;
                    continue _fun53260;
                case 86:
                    var0 = _closure1_slot19;
                case 90:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ArchivedThreadsStore';
    var7.displayName = var1;
    var1 = 17;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleThreadDelete, environment: var3
        var0 = arg0;
        var0 = var0.channel;
        var2 = _closure1_slot29;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1.THREAD_DELETE = var8;
    var8 = function(arg0) { // Original name: handleThreadUpdate, environment: var3
        _fun53262: for (var _fun53262_ip = 0;;) switch (_fun53262_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var1 = _closure1_slot17;
                var0 = var2.parent_id;
                var0 = var1 === var0;
                if (!var0) {
                    _fun53262_ip = 94;
                    continue _fun53262
                }
            case 28:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var1 = var4[var1];
                var4 = undefined;
                var6 = var5.bind(var4)(var1);
                var5 = var6.isForumPostPinned;
                var1 = var2.id;
                var1 = var5.bind(var6)(var1);
                var5 = !var1;
                var1 = !var5;
                if (var5) {
                    _fun53262_ip = 91;
                    continue _fun53262
                }
            case 75:
                var3 = _closure1_slot29;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1 = undefined;
            case 91:
                var0 = var1;
            case 94:
                return var0;
        }
    };
    var1.THREAD_UPDATE = var8;
    var8 = function(arg0) { // Original name: handleChannelDelete, environment: var3
        _fun53263: for (var _fun53263_ip = 0;;) switch (_fun53263_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.id;
                var1 = _closure1_slot17;
                if (!(var2 === var1)) {
                    _fun53263_ip = 36;
                    continue _fun53263
                }
            case 24:
                var1 = _closure1_slot26;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 36:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_DELETE = var8;
    var8 = function(arg0) { // Original name: handleLoadArchivedThreads, environment: var3
        _fun53264: for (var _fun53264_ip = 0;;) switch (_fun53264_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = _closure1_slot17;
                var2 = var3 === var2;
                if (!var2) {
                    _fun53264_ip = 36;
                    continue _fun53264
                }
            case 22:
                var4 = var0.sortOrder;
                var3 = _closure1_slot18;
                var2 = var4 === var3;
            case 36:
                if (!var2) {
                    _fun53264_ip = 83;
                    continue _fun53264
                }
            case 39:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 11;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.areSetsEqual;
                var4 = var0.tagFilter;
                var3 = _closure1_slot12;
                var2 = var5.bind(var6)(var4, var3);
            case 83:
                if (!var2) {
                    _fun53264_ip = 100;
                    continue _fun53264
                }
            case 86:
                var4 = var0.tagSetting;
                var3 = _closure1_slot21;
                var2 = var4 === var3;
            case 100:
                if (var2) {
                    _fun53264_ip = 113;
                    continue _fun53264
                }
            case 103:
                var3 = _closure1_slot26;
                var2 = undefined;
                var2 = var3.bind(var2)();
            case 113:
                var2 = var0.channelId;
                _closure1_slot17 = var2;
                var2 = var0.sortOrder;
                _closure1_slot18 = var2;
                var4 = var0.tagFilter;
                var2 = global;
                var3 = var2.Set;
                var3 = var4 instanceof var3;
                if (var3) {
                    _fun53264_ip = 187;
                    continue _fun53264
                }
            case 153:
                var4 = var2.Set;
                var8 = var0.tagFilter;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var3;
                var2 = new var9[var4](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                _fun53264_ip = 193;
                continue _fun53264;
            case 187:
                var2 = var0.tagFilter;
            case 193:
                _closure1_slot12 = var2;
                var0 = var0.tagSetting;
                _closure1_slot21 = var0;
                var0 = true;
                _closure1_slot13 = var0;
                var0 = false;
                _closure1_slot14 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.LOAD_ARCHIVED_THREADS = var8;
    var8 = function(arg0) { // Original name: handleLoadArchivedThreadsSuccess, environment: var3
        _fun53265: for (var _fun53265_ip = 0;;) switch (_fun53265_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.channelId;
                var0 = _closure1_slot17;
                if (!(var4 === var0)) {
                    _fun53265_ip = 365;
                    continue _fun53265
                }
            case 24:
                var4 = var1.sortOrder;
                var0 = _closure1_slot18;
                if (!(var4 === var0)) {
                    _fun53265_ip = 365;
                    continue _fun53265
                }
            case 41:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var4 = var4[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var4);
                var6 = var7.areSetsEqual;
                var5 = var1.tagFilter;
                var4 = _closure1_slot12;
                var4 = var6.bind(var7)(var5, var4);
                if (!var4) {
                    _fun53265_ip = 365;
                    continue _fun53265
                }
            case 91:
                var5 = var1.tagSetting;
                var4 = _closure1_slot21;
                if (!(var5 === var4)) {
                    _fun53265_ip = 365;
                    continue _fun53265
                }
            case 108:
                var6 = var1.threads;
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot8;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.type;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var4 = _closure1_slot19;
                var3 = var4.concat;
                var3 = var3.bind(var4)(var5);
                _closure1_slot19 = var3;
                var5 = _closure1_slot9;
                var4 = var5.getChannel;
                var3 = _closure1_slot17;
                var6 = var4.bind(var5)(var3);
                var3 = null;
                var3 = var3 != var6;
                if (!var3) {
                    _fun53265_ip = 199;
                    continue _fun53265
                }
            case 189:
                var4 = var6.isForumLikeChannel;
                var3 = var4.bind(var6)();
            case 199:
                if (!var3) {
                    _fun53265_ip = 318;
                    continue _fun53265
                }
            case 202:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 12;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.trackForumMorePostsLoaded;
                var3 = {};
                var7 = var6.guild_id;
                var3.guildId = var7;
                var6 = var6.id;
                var3.channelId = var6;
                var6 = _closure1_slot19;
                var6 = var6.length;
                var3.numArchivedThreads = var6;
                var6 = var1.hasMore;
                var3.hasMoreThreads = var6;
                var6 = global;
                var8 = var6.Array;
                var7 = var8.from;
                var6 = var1.tagFilter;
                var6 = var7.bind(var8)(var6);
                var3.filterTagIds = var6;
                var6 = var1.sortOrder;
                var3.sortOrder = var6;
                var3 = var4.bind(var5)(var3);
            case 318:
                var3 = _closure1_slot28;
                var3 = var3.bind(var0)();
                var3 = var1.hasMore;
                _closure1_slot15 = var3;
                var3 = var1.offset;
                var1 = 25;
                var1 = var3 + var1;
                _closure1_slot20 = var1;
                var1 = false;
                _closure1_slot13 = var1;
                _closure1_slot14 = var1;
                return var0;
            case 365:
                var0 = false;
                return var0;
        }
    };
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleLoadArchivedThreadsFail, environment: var3
        _fun53268: for (var _fun53268_ip = 0;;) switch (_fun53268_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.channelId;
                var0 = _closure1_slot17;
                if (!(var3 === var0)) {
                    _fun53268_ip = 112;
                    continue _fun53268
                }
            case 19:
                var3 = var1.sortOrder;
                var0 = _closure1_slot18;
                if (!(var3 === var0)) {
                    _fun53268_ip = 112;
                    continue _fun53268
                }
            case 33:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var3 = var3[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var5 = var6.areSetsEqual;
                var4 = var1.tagFilter;
                var3 = _closure1_slot12;
                var3 = var5.bind(var6)(var4, var3);
                if (!var3) {
                    _fun53268_ip = 112;
                    continue _fun53268
                }
            case 80:
                var3 = var1.tagSetting;
                var1 = _closure1_slot21;
                if (!(var3 === var1)) {
                    _fun53268_ip = 112;
                    continue _fun53268
                }
            case 94:
                var1 = false;
                _closure1_slot13 = var1;
                var3 = true;
                _closure1_slot16 = var3;
                _closure1_slot14 = var1;
                return var0;
            case 112:
                var0 = false;
                return var0;
        }
    };
    var1.LOAD_ARCHIVED_THREADS_FAIL = var8;
    var3 = function(arg0) { // Original name: handleResortThreads, environment: var3
        _fun53269: for (var _fun53269_ip = 0;;) switch (_fun53269_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot17;
                var4 = null;
                var0 = var4 == var0;
                if (var0) {
                    _fun53269_ip = 28;
                    continue _fun53269
                }
            case 19:
                var3 = var2.channelId;
                var0 = var4 == var3;
            case 28:
                if (var0) {
                    _fun53269_ip = 44;
                    continue _fun53269
                }
            case 31:
                var3 = _closure1_slot17;
                var2 = var2.channelId;
                var0 = var3 === var2;
            case 44:
                if (!var0) {
                    _fun53269_ip = 57;
                    continue _fun53269
                }
            case 47:
                var2 = _closure1_slot28;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 57:
                return var0;
        }
    };
    var1.RESORT_THREADS = var3;
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
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ArchivedThreadsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = 25;
    var2.PAGE_SIZE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 1372, 3906, 3052, 1381, 1383, 1413, 6431, 22, 21, 6439, 566, 806, 2]);