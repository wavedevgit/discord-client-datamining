// modules/icymi/ICYMIUnreadStateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun70907: for (var _fun70907_ip = 0;;) switch (_fun70907_ip) {
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
                _fun70907_ip = 76;
                continue _fun70907;
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
    var0 = function arg0, arg1() {
        _fun70910: for (var _fun70910_ip = 0;;) switch (_fun70910_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun70910_ip = 46;
                    continue _fun70910
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun70910_ip = 55;
                    continue _fun70910
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun70910_ip = 345;
                    continue _fun70910
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun70910_ip = 323;
                    continue _fun70910
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun70910_ip = 283;
                    continue _fun70910
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun70910_ip = 270;
                    continue _fun70910
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
                    _fun70910_ip = 163;
                    continue _fun70910
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun70910_ip = 179;
                    continue _fun70910
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun70910_ip = 249;
                    continue _fun70910
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun70910_ip = 249;
                    continue _fun70910
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun70910_ip = 234;
                    continue _fun70910
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun70910_ip = 247;
                    continue _fun70910
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun70910_ip = 265;
                continue _fun70910;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun70910_ip = 283;
                continue _fun70910;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun70910_ip = 323;
                    continue _fun70910
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
                    _fun70910_ip = 330;
                    continue _fun70910
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun70911: for (var _fun70911_ip = 0;;) switch (_fun70911_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun70911_ip = 56;
                                continue _fun70911
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
                            _fun70911_ip = 67;
                            continue _fun70911;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun70912: for (var _fun70912_ip = 0;;) switch (_fun70912_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun70912_ip = 23;
                    continue _fun70912
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun70912_ip = 33;
                    continue _fun70912
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
                    _fun70912_ip = 70;
                    continue _fun70912
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun70912_ip = 55;
                    continue _fun70912
                }
            case 70:
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
    var1 = var6.bind(var0)(var1);
    var1 = var1.Millis;
    var7 = var1.DAY;
    var1 = 7;
    var1 = var1 * var7;
    var _closure1_slot7 = var1;
    var1 = {};
    var7 = {};
    var1.readIdToTimestampMap = var7;
    var _closure1_slot8 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.DeviceSettingsStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun70914: for (var _fun70914_ip = 0;;) switch (_fun70914_ip) {
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
                        _fun70914_ip = 69;
                        continue _fun70914
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun70914_ip = 105;
                    continue _fun70914;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun70915: for (var _fun70915_ip = 0;;) switch (_fun70915_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun70915_ip = 21;
                        continue _fun70915
                    }
                case 11:
                    var1 = var3.readIdToTimestampMap;
                    if (!(var2 == var1)) {
                        _fun70915_ip = 32;
                        continue _fun70915
                    }
                case 21:
                    var1 = {};
                    var2 = {};
                    var1.readIdToTimestampMap = var2;
                    _fun70915_ip = 48;
                    continue _fun70915;
                case 32:
                    var2 = {};
                    var3 = var3.readIdToTimestampMap;
                    var2.readIdToTimestampMap = var3;
                    var1 = var2;
                case 48:
                    _closure1_slot8 = var1;
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var2 = var3 - var2;
                    var _closure3_slot0 = var2;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var1 = _closure1_slot8;
                    var1 = var1.readIdToTimestampMap;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var0 = _closure1_slot8;
                        var1 = var0.readIdToTimestampMap;
                        var0 = arg0;
                        var1 = var1[var0];
                        var0 = _closure3_slot0;
                        var0 = var1 < var0;
                        return var0;
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = _closure1_slot10;
                    var0 = undefined;
                    var3 = var1.bind(var0)(var2);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun70915_ip = 184;
                        continue _fun70915
                    }
                case 150:
                    var5 = var2.value;
                    var1 = _closure1_slot8;
                    var1 = var1.readIdToTimestampMap;
                    var1 = delete var1[var5];
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun70915_ip = 150;
                        continue _fun70915
                    }
                case 184:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getReadTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            var0 = _closure1_slot8;
            var1 = var0.readIdToTimestampMap;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ICYMIUnreadStateStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var1 = arg0;
        var2 = var1.items;
        var1 = var1.override;
        var _closure2_slot0 = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun70921: for (var _fun70921_ip = 0;;) switch (_fun70921_ip) {
                case 0:
                    var0 = arg0;
                    var3 = null;
                    var1 = var3 != var0;
                    if (!var1) {
                        _fun70921_ip = 51;
                        continue _fun70921
                    }
                case 12:
                    var2 = _closure1_slot8;
                    var4 = var2.readIdToTimestampMap;
                    var2 = var0.id;
                    var2 = var4[var2];
                    var2 = var3 == var2;
                    if (var2) {
                        _fun70921_ip = 48;
                        continue _fun70921
                    }
                case 41:
                    var2 = _closure2_slot0;
                case 48:
                    var1 = var2;
                case 51:
                    if (!var1) {
                        _fun70921_ip = 82;
                        continue _fun70921
                    }
                case 54:
                    var1 = _closure1_slot8;
                    var2 = var1.readIdToTimestampMap;
                    var1 = var0.id;
                    var0 = var0.timestamp;
                    var2[var1] = var0;
                case 82:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.ICYMI_ACK_ITEMS = var8;
    var8 = function arg0() {
        _fun70922: for (var _fun70922_ip = 0;;) switch (_fun70922_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.items;
                var1 = _closure1_slot10;
                var0 = undefined;
                var8 = var1.bind(var0)(var2);
                var2 = var8.bind(var0)();
                var1 = var2.done;
                var7 = 0;
                var6 = 7;
                var5 = null;
                var4 = 6;
                var3 = var2;
                var2 = undefined;
                if (var1) {
                    _fun70922_ip = 262;
                    continue _fun70922
                }
            case 52:
                var1 = var3.value;
                var12 = var1.type;
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var4];
                var10 = var11.bind(var0)(var10);
                var10 = var10.ICYMIItemTypes;
                var11 = var10.MESSAGE;
                var10 = var2;
                if (!(var12 === var11)) {
                    _fun70922_ip = 241;
                    continue _fun70922
                }
            case 101:
                var11 = _closure1_slot8;
                var12 = var11.readIdToTimestampMap;
                var11 = var1.id;
                var11 = var12[var11];
                var11 = var5 != var11;
                if (var11) {
                    _fun70922_ip = 160;
                    continue _fun70922
                }
            case 127:
                var12 = var1.data;
                var12 = var12.message_context;
                var14 = var5 == var12;
                var13 = undefined;
                if (var14) {
                    _fun70922_ip = 153;
                    continue _fun70922
                }
            case 147:
                var13 = var12.external_content_application_id;
            case 153:
                var11 = var5 != var13;
                var2 = var12;
            case 160:
                if (var11) {
                    _fun70922_ip = 213;
                    continue _fun70922
                }
            case 163:
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var6];
                var15 = var13.bind(var0)(var12);
                var14 = var15.isItemUnreadInChannel;
                var12 = var1.data;
                var13 = var12.channel_id;
                var12 = var1.data;
                var12 = var12.message_id;
                var11 = var14.bind(var15)(var13, var12);
            case 213:
                var10 = var2;
                if (var11) {
                    _fun70922_ip = 241;
                    continue _fun70922
                }
            case 219:
                var11 = _closure1_slot8;
                var11 = var11.readIdToTimestampMap;
                var1 = var1.id;
                var11[var1] = var7;
                var10 = var2;
            case 241:
                var11 = var8.bind(var0)();
                var1 = var11.done;
                var2 = var10;
                var3 = var11;
                if (!var1) {
                    _fun70922_ip = 52;
                    continue _fun70922
                }
            case 262:
                return var0;
        }
    };
    var1.LOAD_ICYMI_DEHYDRATED = var8;
    var3 = function() {
        var1 = _closure1_slot8;
        var0 = {};
        var1.readIdToTimestampMap = var0;
        var0 = undefined;
        return var0;
    };
    var1.CLEAR_ICYMI_READ_STATES = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/ICYMIUnreadStateStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 667, 6621, 8887, 566, 806, 2]);