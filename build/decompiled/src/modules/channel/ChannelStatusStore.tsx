// modules/channel/ChannelStatusStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun41540: for (var _fun41540_ip = 0;;) switch (_fun41540_ip) {
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
                _fun41540_ip = 74;
                continue _fun41540;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = function arg0, arg1() {
        _fun41543: for (var _fun41543_ip = 0;;) switch (_fun41543_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun41543_ip = 46;
                    continue _fun41543
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun41543_ip = 55;
                    continue _fun41543
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun41543_ip = 343;
                    continue _fun41543
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun41543_ip = 323;
                    continue _fun41543
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun41543_ip = 283;
                    continue _fun41543
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun41543_ip = 270;
                    continue _fun41543
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
                    _fun41543_ip = 163;
                    continue _fun41543
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun41543_ip = 179;
                    continue _fun41543
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun41543_ip = 249;
                    continue _fun41543
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun41543_ip = 249;
                    continue _fun41543
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun41543_ip = 234;
                    continue _fun41543
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun41543_ip = 247;
                    continue _fun41543
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun41543_ip = 265;
                continue _fun41543;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun41543_ip = 283;
                continue _fun41543;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun41543_ip = 323;
                    continue _fun41543
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
                    _fun41543_ip = 330;
                    continue _fun41543
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun41544: for (var _fun41544_ip = 0;;) switch (_fun41544_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun41544_ip = 56;
                                continue _fun41544
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
                            _fun41544_ip = 67;
                            continue _fun41544;
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
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun41545: for (var _fun41545_ip = 0;;) switch (_fun41545_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun41545_ip = 23;
                    continue _fun41545
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun41545_ip = 33;
                    continue _fun41545
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
                    _fun41545_ip = 70;
                    continue _fun41545
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun41545_ip = 55;
                    continue _fun41545
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var8 = function() {
        var1 = _closure1_slot8;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var9 = function arg0() {
        var2 = _closure1_slot8;
        var1 = var2.delete;
        var0 = arg0;
        var0 = var0.guild;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
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
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun41549: for (var _fun41549_ip = 0;;) switch (_fun41549_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun41549_ip = 69;
                        continue _fun41549
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun41549_ip = 105;
                    continue _fun41549;
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
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getChannelStatus';
        var4.key = var6;
        var5 = function arg0() {
            _fun41551: for (var _fun41551_ip = 0;;) switch (_fun41551_ip) {
                case 0:
                    var1 = arg0;
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun41551_ip = 64;
                        continue _fun41551
                    }
                case 9:
                    var0 = var1.guild_id;
                    if (!(var3 != var0)) {
                        _fun41551_ip = 64;
                        continue _fun41551
                    }
                case 18:
                    var5 = var1.type;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 6;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.ChannelTypes;
                    var4 = var4.GUILD_VOICE;
                    if (!(var5 !== var4)) {
                        _fun41551_ip = 68;
                        continue _fun41551
                    }
                case 64:
                    var4 = undefined;
                    return var4;
                case 68:
                    var6 = _closure1_slot8;
                    var5 = var6.has;
                    var4 = var1.guild_id;
                    var4 = var5.bind(var6)(var4);
                    if (var4) {
                        _fun41551_ip = 141;
                        continue _fun41551
                    }
                case 90:
                    var6 = _closure1_slot8;
                    var5 = var6.add;
                    var4 = var1.guild_id;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot7;
                    var4 = var5.getSocket;
                    var6 = var4.bind(var5)();
                    var5 = var6.requestChannelStatuses;
                    var4 = var1.guild_id;
                    var4 = var5.bind(var6)(var4);
                case 141:
                    var4 = _closure1_slot9;
                    var2 = var1.guild_id;
                    var2 = var4[var2];
                    var3 = var3 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun41551_ip = 172;
                        continue _fun41551
                    }
                case 163:
                    var1 = var1.id;
                    var0 = var2[var1];
                case 172:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ChannelStatusStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var1.GUILD_CREATE = var9;
    var1.GUILD_DELETE = var9;
    var1.CONNECTION_RESUMED = var8;
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun41552: for (var _fun41552_ip = 0;;) switch (_fun41552_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot9;
                var2 = var0.guildId;
                var3 = var3[var2];
                var2 = null;
                if (!(var2 == var3)) {
                    _fun41552_ip = 40;
                    continue _fun41552
                }
            case 25:
                var4 = _closure1_slot9;
                var3 = var0.guildId;
                var2 = {};
                var4[var3] = var2;
            case 40:
                var2 = _closure1_slot9;
                var1 = var0.guildId;
                var2 = var2[var1];
                var1 = var0.id;
                var0 = var0.status;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.VOICE_CHANNEL_STATUS_UPDATE = var8;
    var3 = function arg0() {
        _fun41553: for (var _fun41553_ip = 0;;) switch (_fun41553_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot9;
                var1 = var5.guildId;
                var0 = {};
                var2[var1] = var0;
                var2 = _closure1_slot11;
                var1 = var5.channels;
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun41553_ip = 97;
                    continue _fun41553
                }
            case 50:
                var1 = var2.value;
                var7 = var1.id;
                var6 = var1.status;
                var8 = _closure1_slot9;
                var1 = var5.guildId;
                var1 = var8[var1];
                var1[var7] = var6;
                var6 = var3.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun41553_ip = 50;
                    continue _fun41553
                }
            case 97:
                return var0;
        }
    };
    var1.CHANNEL_STATUSES = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/ChannelStatusStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3476, 790, 566, 806, 2]);