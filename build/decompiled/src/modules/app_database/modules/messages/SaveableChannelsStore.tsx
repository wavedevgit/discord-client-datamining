// modules/app_database/modules/messages/SaveableChannelsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var0 = function arg0, arg1() {
        _fun40132: for (var _fun40132_ip = 0;;) switch (_fun40132_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40132_ip = 46;
                    continue _fun40132
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40132_ip = 55;
                    continue _fun40132
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40132_ip = 343;
                    continue _fun40132
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40132_ip = 323;
                    continue _fun40132
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40132_ip = 283;
                    continue _fun40132
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40132_ip = 270;
                    continue _fun40132
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
                    _fun40132_ip = 163;
                    continue _fun40132
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40132_ip = 179;
                    continue _fun40132
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40132_ip = 249;
                    continue _fun40132
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40132_ip = 249;
                    continue _fun40132
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40132_ip = 234;
                    continue _fun40132
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40132_ip = 247;
                    continue _fun40132
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40132_ip = 265;
                continue _fun40132;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40132_ip = 283;
                continue _fun40132;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40132_ip = 323;
                    continue _fun40132
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
                    _fun40132_ip = 330;
                    continue _fun40132
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40133: for (var _fun40133_ip = 0;;) switch (_fun40133_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40133_ip = 56;
                                continue _fun40133
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
                            _fun40133_ip = 67;
                            continue _fun40133;
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
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun40134: for (var _fun40134_ip = 0;;) switch (_fun40134_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40134_ip = 23;
                    continue _fun40134
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40134_ip = 33;
                    continue _fun40134
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
                    _fun40134_ip = 70;
                    continue _fun40134
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40134_ip = 55;
                    continue _fun40134
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        _fun40135: for (var _fun40135_ip = 0;;) switch (_fun40135_ip) {
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
                _fun40135_ip = 74;
                continue _fun40135;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        _fun40138: for (var _fun40138_ip = 0;;) switch (_fun40138_ip) {
            case 0:
                var2 = _closure1_slot9;
                var1 = var2.getChannelId;
                var2 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var2)) {
                    _fun40138_ip = 38;
                    continue _fun40138
                }
            case 23:
                var1 = _closure1_slot15;
                var0 = var1.recordChannel;
                var0 = var0.bind(var1)(var2);
            case 38:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var2 = _closure1_slot15;
        var0 = var2.dropUnreachableChannels;
        var0 = var0.bind(var2)();
        var3 = _closure1_slot15;
        var2 = var3.replaceLru;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 15;
        var4 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var4);
        var5 = var6.withFallbacks;
        var4 = _closure1_slot12;
        var1 = 1250;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun40140: for (var _fun40140_ip = 0;;) switch (_fun40140_ip) {
            case 0:
                var5 = arg0;
                var3 = var5.id;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 13;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.isReadableChannel;
                var2 = var2.bind(var4)(var5);
                var5 = _closure1_slot9;
                var4 = var5.getChannelId;
                var5 = var4.bind(var5)();
                var4 = var2;
                if (!var4) {
                    _fun40140_ip = 68;
                    continue _fun40140
                }
            case 64:
                var4 = var3 === var5;
            case 68:
                if (!var4) {
                    _fun40140_ip = 86;
                    continue _fun40140
                }
            case 71:
                var5 = _closure1_slot15;
                var4 = var5.recordChannel;
                var4 = var4.bind(var5)(var3);
            case 86:
                if (var2) {
                    _fun40140_ip = 104;
                    continue _fun40140
                }
            case 89:
                var2 = _closure1_slot15;
                var1 = var2.deleteChannel;
                var1 = var1.bind(var2)(var3);
            case 104:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun40141: for (var _fun40141_ip = 0;;) switch (_fun40141_ip) {
            case 0:
                var2 = _closure1_slot16;
                var0 = arg0;
                var1 = var0.channels;
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun40141_ip = 64;
                    continue _fun40141
                }
            case 35:
                var5 = _closure1_slot21;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun40141_ip = 35;
                    continue _fun40141
                }
            case 64:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot15;
        var1 = var2.deleteChannel;
        var0 = arg0;
        var0 = var0.channel;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot21;
        var0 = arg0;
        var1 = var0.channel;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot15;
        var1 = var2.deleteChannel;
        var0 = arg0;
        var0 = var0.channel;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun40145: for (var _fun40145_ip = 0;;) switch (_fun40145_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guild;
                var0 = var0.unavailable;
                var0 = !var0;
                if (!var0) {
                    _fun40145_ip = 50;
                    continue _fun40145
                }
            case 20:
                var3 = _closure1_slot15;
                var2 = var3.deleteGuild;
                var1 = var1.guild;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 50:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var2 = _closure1_slot12;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot13;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = false;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var0 = true;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot28 = var0;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var4 = var8[var3];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var8[var4];
    var9 = var5.bind(var0)(var4);
    var4 = 8;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var5 = var1.Math;
    var1 = var5.max;
    var4 = 25;
    var1 = var1.bind(var5)(var4, var4, var3);
    var5 = null;
    var _closure1_slot11 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var12 = var5.ExtendedMemoryLru;
    var5 = var12.prototype;
    var10 = Object.create(var5, {
        constructor: {
            value: var12
        }
    });
    var15 = 750;
    var14 = 500;
    var16 = var10;
    var5 = new var16[var12](var15, var14, var13);
    var5 = var5 instanceof Object ? var5 : var10;
    var _closure1_slot12 = var5;
    var5 = 11;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var11 = var5.Lru;
    var5 = var11.prototype;
    var10 = Object.create(var5, {
        constructor: {
            value: var11
        }
    });
    var15 = 15;
    var16 = var10;
    var5 = new var16[var11](var15, var14);
    var5 = var5 instanceof Object ? var5 : var10;
    var _closure1_slot13 = var5;
    var5 = false;
    var _closure1_slot14 = var5;
    var5 = function(arg0) { // Environment: var6
        var4 = function() {
            _fun40149: for (var _fun40149_ip = 0;;) switch (_fun40149_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = {};
                    var6 = _closure1_slot28;
                    var0.CACHE_LOADED_LAZY_NO_CACHE = var6;
                    var6 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.loadCache;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.CACHE_LOADED_LAZY = var6;
                    var6 = _closure1_slot23;
                    var0.CHANNEL_DELETE = var6;
                    var6 = _closure1_slot22;
                    var0.CHANNEL_UPDATES = var6;
                    var6 = _closure1_slot20;
                    var0.CONNECTION_OPEN_SUPPLEMENTAL = var6;
                    var6 = _closure1_slot26;
                    var0.GUILD_DELETE = var6;
                    var6 = _closure1_slot27;
                    var0.LOGIN_SUCCESS = var6;
                    var6 = _closure1_slot25;
                    var0.THREAD_DELETE = var6;
                    var6 = _closure1_slot24;
                    var0.THREAD_UPDATE = var6;
                    var9 = new Array(1);
                    var9[0] = var0;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun40149_ip = 156;
                        continue _fun40149
                    }
                case 143:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun40149_ip = 190;
                    continue _fun40149;
                case 156:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 190:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot3;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var1 = var2.bind(var3)(var1);
            var2 = var3.waitFor;
            var1 = _closure1_slot9;
            var1 = var2.bind(var3)(var1);
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var4 = var3.syncWith;
            var1 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() { // Environment: var1
                var0 = true;
                return var0;
            };
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var4 = _closure1_slot9;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot19;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'loadCache';
        var0.key = var5;
        var5 = function() {
            _fun40153: for (var _fun40153_ip = 0;;) switch (_fun40153_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.readSnapshot;
                    var1 = _closure2_slot0;
                    var1 = var1.LATEST_SNAPSHOT_VERSION;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun40153_ip = 59;
                        continue _fun40153
                    }
                case 33:
                    var1 = true;
                    _closure1_slot14 = var1;
                    var1 = _closure2_slot0;
                    var0 = var1.mergeSnapshot;
                    var0 = var0.bind(var1)(var2);
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'canEvictOrphans';
        var0.key = var5;
        var5 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'saveLimit';
        var0.key = var5;
        var5 = function arg0() {
            _fun40155: for (var _fun40155_ip = 0;;) switch (_fun40155_ip) {
                case 0:
                    var5 = arg0;
                    var1 = _closure1_slot7;
                    var0 = var1.getBasicChannel;
                    var3 = var0.bind(var1)(var5);
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun40155_ip = 66;
                        continue _fun40155
                    }
                case 27:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 12;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var0 = var4.isPrivateChannel;
                    var4 = var0.bind(var4)(var3);
                    var0 = 25;
                    if (var4) {
                        _fun40155_ip = 120;
                        continue _fun40155
                    }
                case 66:
                    if (!(var1 != var3)) {
                        _fun40155_ip = 114;
                        continue _fun40155
                    }
                case 70:
                    var3 = _closure1_slot9;
                    var1 = var3.getChannelId;
                    var4 = var1.bind(var3)();
                    var3 = 25;
                    var1 = var3;
                    if (!(var4 !== var5)) {
                        _fun40155_ip = 117;
                        continue _fun40155
                    }
                case 94:
                    var4 = _closure1_slot12;
                    var2 = var4.has;
                    var2 = var2.bind(var4)(var5);
                    var1 = var3;
                    if (var2) {
                        _fun40155_ip = 117;
                        continue _fun40155
                    }
                case 114:
                    var1 = 1;
                case 117:
                    var0 = var1;
                case 120:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getSaveableChannels';
        var0.key = var5;
        var5 = function() {
            _fun40156: for (var _fun40156_ip = 0;;) switch (_fun40156_ip) {
                case 0:
                    var1 = _closure1_slot7;
                    var0 = var1.getChannelIds;
                    var4 = null;
                    var2 = var0.bind(var1)(var4);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var1 = null;
                        var0.guildId = var1;
                        var1 = arg0;
                        var0.channelId = var1;
                        return var0;
                    };
                    var5 = var1.bind(var2)(var0);
                    var0 = _closure1_slot10;
                    var0 = var0.isLowDisk;
                    if (var0) {
                        _fun40156_ip = 88;
                        continue _fun40156
                    }
                case 50:
                    var0 = new Array(0);
                    var7 = 0;
                    var9 = var0;
                    var8 = var5;
                    var7 = arraySpread(var9, var8, var7);
                    var6 = _closure1_slot12;
                    var1 = var6.values;
                    var8 = var1.bind(var6)();
                    var9 = var0;
                    var1 = arraySpread(var9, var8, var7);
                    _fun40156_ip = 137;
                    continue _fun40156;
                case 88:
                    var2 = _closure1_slot11;
                    var1 = var5;
                    if (!(var4 != var2)) {
                        _fun40156_ip = 134;
                        continue _fun40156
                    }
                case 99:
                    var2 = new Array(1);
                    var7 = 0;
                    var9 = var2;
                    var8 = var5;
                    var4 = arraySpread(var9, var8, var7);
                    var3 = _closure1_slot11;
                    var2[var4] = var3;
                    var3 = 1;
                    var3 = var4 + var3;
                    var1 = var2;
                case 134:
                    var0 = var1;
                case 137:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'takeSnapshot';
        var0.key = var5;
        var5 = function() {
            var0 = {};
            var1 = _closure2_slot0;
            var1 = var1.LATEST_SNAPSHOT_VERSION;
            var0.version = var1;
            var1 = {};
            var4 = _closure1_slot12;
            var3 = var4.allValues;
            var8 = var3.bind(var4)();
            var6 = new Array(0);
            var9 = var6;
            var7 = 0;
            var3 = arraySpread(var9, var8, var7);
            var4 = var6.filter;
            var3 = function(arg0) { // Environment: var3
                var0 = arg0;
                var0 = var0.fallback;
                var0 = !var0;
                return var0;
            };
            var3 = var4.bind(var6)(var3);
            var1.channels = var3;
            var4 = _closure1_slot13;
            var3 = var4.keys;
            var8 = var3.bind(var4)();
            var3 = new Array(0);
            var9 = var3;
            var4 = arraySpread(var9, var8, var7);
            var1.penalized = var3;
            var2 = _closure1_slot11;
            var1.lastChannel = var2;
            var0.data = var1;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var5 = {};
        var0 = 'mergeSnapshot';
        var5.key = var0;
        var0 = function arg0() {
            _fun40160: for (var _fun40160_ip = 0;;) switch (_fun40160_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot12;
                    var6 = _closure1_slot13;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 10;
                    var2 = var7[var0];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var10 = var2.ExtendedMemoryLru;
                    var2 = _closure1_slot12;
                    var16 = var2.primaryCapacity;
                    var2 = _closure1_slot12;
                    var15 = var2.extendedCapacity;
                    var8 = var10.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var10
                        }
                    });
                    var17 = var8;
                    var2 = new var17[var10](var16, var15, var14);
                    var2 = var2 instanceof Object ? var2 : var8;
                    _closure1_slot12 = var2;
                    var2 = 11;
                    var2 = var7[var2];
                    var2 = var4.bind(var0)(var2);
                    var7 = var2.Lru;
                    var2 = _closure1_slot13;
                    var16 = var2.capacity;
                    var4 = var7.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var7
                        }
                    });
                    var17 = var4;
                    var2 = new var17[var7](var16, var15);
                    var2 = var2 instanceof Object ? var2 : var4;
                    _closure1_slot13 = var2;
                    var2 = _closure1_slot11;
                    var4 = null;
                    if (!(var4 == var2)) {
                        _fun40160_ip = 156;
                        continue _fun40160
                    }
                case 148:
                    var2 = var1.lastChannel;
                    _fun40160_ip = 160;
                    continue _fun40160;
                case 156:
                    var2 = _closure1_slot11;
                case 160:
                    _closure1_slot11 = var2;
                    var2 = var1.channels;
                    var9 = new Array(2);
                    var9[0] = var2;
                    var2 = var3.values;
                    var2 = var2.bind(var3)();
                    var9[1] = var2;
                    var2 = var9.length;
                    var3 = 0;
                    var2 = var3 < var2;
                    var8 = 0;
                    var7 = undefined;
                    if (!var2) {
                        _fun40160_ip = 299;
                        continue _fun40160
                    }
                case 209:
                    var10 = _closure1_slot16;
                    var2 = var9[var8];
                    var11 = var10.bind(var0)(var2);
                    var10 = var11.bind(var0)();
                    var2 = var10.done;
                    if (var2) {
                        _fun40160_ip = 287;
                        continue _fun40160
                    }
                case 234:
                    var12 = var10.value;
                    var2 = var12.fallback;
                    if (var2) {
                        _fun40160_ip = 269;
                        continue _fun40160
                    }
                case 248:
                    var14 = _closure1_slot12;
                    var13 = var14.put;
                    var2 = var12.channelId;
                    var2 = var13.bind(var14)(var2, var12);
                case 269:
                    var13 = var11.bind(var0)();
                    var2 = var13.done;
                    var10 = var13;
                    var7 = var12;
                    if (!var2) {
                        _fun40160_ip = 234;
                        continue _fun40160
                    }
                case 287:
                    var8 = var8 + 1;
                    var2 = var9.length;
                    if (var8 < var2) {
                        _fun40160_ip = 209;
                        continue _fun40160
                    }
                case 299:
                    var1 = var1.penalized;
                    var2 = new Array(2);
                    var2[0] = var1;
                    var1 = var6.keys;
                    var1 = var1.bind(var6)();
                    var2[1] = var1;
                    var1 = var2.length;
                    var1 = var3 < var1;
                    var3 = 0;
                    if (!var1) {
                        _fun40160_ip = 413;
                        continue _fun40160
                    }
                case 340:
                    var6 = _closure1_slot16;
                    var1 = var2[var3];
                    var7 = var6.bind(var0)(var1);
                    var6 = var7.bind(var0)();
                    var1 = var6.done;
                    if (var1) {
                        _fun40160_ip = 401;
                        continue _fun40160
                    }
                case 365:
                    var9 = var6.value;
                    var8 = _closure1_slot13;
                    var1 = var8.put;
                    var1 = var1.bind(var8)(var9, var4);
                    var8 = var7.bind(var0)();
                    var1 = var8.done;
                    var6 = var8;
                    if (!var1) {
                        _fun40160_ip = 365;
                        continue _fun40160
                    }
                case 401:
                    var3 = var3 + 1;
                    var1 = var2.length;
                    if (var3 < var1) {
                        _fun40160_ip = 340;
                        continue _fun40160
                    }
                case 413:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(7);
        var0[0] = var5;
        var5 = {};
        var7 = 'recordChannel';
        var5.key = var7;
        var7 = function arg0() {
            _fun40161: for (var _fun40161_ip = 0;;) switch (_fun40161_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot7;
                    var1 = var3.getBasicChannel;
                    var5 = var1.bind(var3)(var2);
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun40161_ip = 194;
                        continue _fun40161
                    }
                case 30:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 13;
                    var1 = var6[var1];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var1);
                    var1 = var4.isReadableChannel;
                    var1 = var1.bind(var4)(var5);
                    if (!var1) {
                        _fun40161_ip = 194;
                        continue _fun40161
                    }
                case 69:
                    var7 = {};
                    var4 = var5.guild_id;
                    var8 = var3 != var4;
                    var1 = null;
                    if (!var8) {
                        _fun40161_ip = 88;
                        continue _fun40161
                    }
                case 85:
                    var1 = var4;
                case 88:
                    var7.guildId = var1;
                    var7.channelId = var2;
                    var1 = var5.type;
                    var7.channelType = var1;
                    _closure1_slot11 = var7;
                    var4 = _closure1_slot12;
                    var1 = var4.put;
                    var1 = var1.bind(var4)(var2, var7);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 14;
                    var1 = var7[var1];
                    var4 = var4.bind(var6)(var1);
                    var1 = var4.isLimitedChannel;
                    var1 = var1.bind(var4)(var5);
                    if (!var1) {
                        _fun40161_ip = 194;
                        continue _fun40161
                    }
                case 160:
                    var4 = _closure1_slot13;
                    var1 = var4.put;
                    var1 = var1.bind(var4)(var2, var3);
                    if (!(var3 != var1)) {
                        _fun40161_ip = 194;
                        continue _fun40161
                    }
                case 180:
                    var1 = _closure1_slot12;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                case 194:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var7;
        var0[1] = var5;
        var5 = {};
        var7 = 'deleteChannel';
        var5.key = var7;
        var7 = function arg0() {
            var2 = _closure1_slot12;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var5.value = var7;
        var0[2] = var5;
        var5 = {};
        var7 = 'deleteGuild';
        var5.key = var7;
        var7 = function arg0() {
            _fun40163: for (var _fun40163_ip = 0;;) switch (_fun40163_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot16;
                    var1 = _closure1_slot12;
                    var0 = var1.allValues;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun40163_ip = 91;
                        continue _fun40163
                    }
                case 43:
                    var1 = var2.value;
                    var6 = var1.guildId;
                    if (!(var6 === var5)) {
                        _fun40163_ip = 76;
                        continue _fun40163
                    }
                case 57:
                    var7 = _closure1_slot12;
                    var6 = var7.delete;
                    var1 = var1.channelId;
                    var1 = var6.bind(var7)(var1);
                case 76:
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun40163_ip = 43;
                        continue _fun40163
                    }
                case 91:
                    return var0;
            }
        };
        var5.value = var7;
        var0[3] = var5;
        var5 = {};
        var7 = 'dropUnreachableChannels';
        var5.key = var7;
        var7 = function() {
            _fun40164: for (var _fun40164_ip = 0;;) switch (_fun40164_ip) {
                case 0:
                    var2 = _closure1_slot16;
                    var1 = _closure1_slot12;
                    var0 = var1.keys;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var2 = var5.bind(var0)();
                    var1 = var2.done;
                    var3 = 13;
                    if (var1) {
                        _fun40164_ip = 126;
                        continue _fun40164
                    }
                case 45:
                    var8 = var2.value;
                    var7 = _closure1_slot7;
                    var1 = var7.getBasicChannel;
                    var9 = var1.bind(var7)(var8);
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var7 = var7.bind(var0)(var1);
                    var1 = var7.isReadableChannel;
                    var1 = var1.bind(var7)(var9);
                    if (var1) {
                        _fun40164_ip = 111;
                        continue _fun40164
                    }
                case 96:
                    var7 = _closure2_slot0;
                    var1 = var7.deleteChannel;
                    var1 = var1.bind(var7)(var8);
                case 111:
                    var7 = var5.bind(var0)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun40164_ip = 45;
                        continue _fun40164
                    }
                case 126:
                    return var0;
            }
        };
        var5.value = var7;
        var0[4] = var5;
        var5 = {};
        var7 = 'deleteUnreadableGuildChannels';
        var5.key = var7;
        var7 = function arg0() {
            _fun40165: for (var _fun40165_ip = 0;;) switch (_fun40165_ip) {
                case 0:
                    var7 = arg0;
                    var2 = _closure1_slot16;
                    var1 = _closure1_slot12;
                    var0 = var1.values;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var2 = var5.bind(var0)();
                    var1 = var2.done;
                    var3 = 13;
                    if (var1) {
                        _fun40165_ip = 136;
                        continue _fun40165
                    }
                case 48:
                    var1 = var2.value;
                    var8 = var1.guildId;
                    var8 = var7 !== var8;
                    if (var8) {
                        _fun40165_ip = 98;
                        continue _fun40165
                    }
                case 65:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var3];
                    var11 = var10.bind(var0)(var9);
                    var10 = var11.isReadableChannelId;
                    var9 = var1.channelId;
                    var8 = var10.bind(var11)(var9);
                case 98:
                    if (var8) {
                        _fun40165_ip = 121;
                        continue _fun40165
                    }
                case 101:
                    var9 = _closure2_slot0;
                    var8 = var9.deleteChannel;
                    var1 = var1.channelId;
                    var1 = var8.bind(var9)(var1);
                case 121:
                    var8 = var5.bind(var0)();
                    var1 = var8.done;
                    var2 = var8;
                    if (!var1) {
                        _fun40165_ip = 48;
                        continue _fun40165
                    }
                case 136:
                    return var0;
            }
        };
        var5.value = var7;
        var0[5] = var5;
        var5 = {};
        var7 = 'replaceLru';
        var5.key = var7;
        var6 = function arg0() {
            var0 = arg0;
            _closure1_slot12 = var0;
            var0 = undefined;
            return var0;
        };
        var5.value = var6;
        var0[6] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var5 = var5.bind(var0)(var9);
    var _closure1_slot15 = var5;
    var6 = 'SaveableChannelsStore';
    var5.displayName = var6;
    var5.LATEST_SNAPSHOT_VERSION = var3;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var16 = var6;
    var5 = new var16[var5](var15);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/app_database/modules/messages/SaveableChannelsStore.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.MAXIMUM_MESSAGES_PER_CHANNEL_DM = var4;
    var2.MAXIMUM_MESSAGES_PER_CHANNEL_NON_DM = var4;
    var2.MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT = var3;
    var2.MAXIMUM_MESSAGES_PER_CHANNEL_EVER = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1599, 1218, 1670, 4368, 4369, 4370, 4372, 4373, 4374, 4375, 2]);