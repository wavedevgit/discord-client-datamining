// modules/threads/ActiveThreadsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun38550: for (var _fun38550_ip = 0;;) switch (_fun38550_ip) {
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
                _fun38550_ip = 74;
                continue _fun38550;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var1 = var1.parent_id;
        var0.parentId = var1;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun38554: for (var _fun38554_ip = 0;;) switch (_fun38554_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot10;
                var2 = var1 in var2;
                if (!var2) {
                    _fun38554_ip = 25;
                    continue _fun38554
                }
            case 17:
                var0 = _closure1_slot10;
                var0 = delete var0[var1];
            case 25:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun38555: for (var _fun38555_ip = 0;;) switch (_fun38555_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = var0.threads;
                var2 = null;
                var2 = var2 != var3;
                if (!var2) {
                    _fun38555_ip = 41;
                    continue _fun38555
                }
            case 24:
                var3 = var0.threads;
                var4 = var3.length;
                var3 = 0;
                var2 = var4 > var3;
            case 41:
                if (!var2) {
                    _fun38555_ip = 98;
                    continue _fun38555
                }
            case 44:
                var4 = _closure1_slot10;
                var3 = var0.id;
                var2 = {};
                var4[var3] = var2;
                var4 = var0.threads;
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.type;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot17;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 98:
                var1 = var0.hasThreadsSubscription;
                if (!var1) {
                    _fun38555_ip = 129;
                    continue _fun38555
                }
            case 107:
                var2 = _closure1_slot11;
                var1 = var2.add;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
            case 129:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun38558: for (var _fun38558_ip = 0;;) switch (_fun38558_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var1 = _closure1_slot10;
                var5 = var1[var3];
                var2 = var4.parent_id;
                var1 = var2 in var5;
                if (var1) {
                    _fun38558_ip = 36;
                    continue _fun38558
                }
            case 30:
                var1 = {};
                var5[var2] = var1;
            case 36:
                var1 = _closure1_slot10;
                var1 = var1[var3];
                var3 = var1[var2];
                var2 = var4.id;
                var1 = _closure1_slot14;
                var0 = undefined;
                var1 = var1.bind(var0)(var4);
                var3[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var8 = function arg0() {
        _fun38559: for (var _fun38559_ip = 0;;) switch (_fun38559_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var4 = _closure1_slot7;
                var3 = var4.has;
                var1 = var2.type;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun38559_ip = 37;
                    continue _fun38559
                }
            case 33:
                var1 = false;
                return var1;
            case 37:
                var4 = var2.threadMetadata;
                var3 = null;
                var6 = var3 == var4;
                var1 = undefined;
                var5 = undefined;
                if (var6) {
                    _fun38559_ip = 62;
                    continue _fun38559
                }
            case 56:
                var5 = var4.archived;
            case 62:
                var4 = true;
                if (!(var4 !== var5)) {
                    _fun38559_ip = 163;
                    continue _fun38559
                }
            case 68:
                var5 = _closure1_slot10;
                var4 = var2.guild_id;
                var9 = var5[var4];
                if (!(var3 == var9)) {
                    _fun38559_ip = 87;
                    continue _fun38559
                }
            case 85:
                var9 = {};
            case 87:
                var5 = _closure1_slot10;
                var4 = var2.guild_id;
                var3 = {};
                var11 = var3;
                var10 = var9;
                var6 = copyDataProperties(var11, var10);
                var7 = var2.parent_id;
                var6 = {};
                var8 = var2.parent_id;
                var10 = var9[var8];
                var11 = var6;
                var8 = copyDataProperties(var11, var10);
                var9 = var2.id;
                var8 = _closure1_slot14;
                var8 = var8.bind(var1)(var2);
                var6[var9] = var8;
                var3[var7] = var6;
                var5[var4] = var3;
                return var1;
            case 163:
                var0 = _closure1_slot18;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var0 = function arg0() {
        _fun38560: for (var _fun38560_ip = 0;;) switch (_fun38560_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guild_id;
                var6 = var0.parent_id;
                var8 = var0.id;
                var1 = null;
                var0 = var1 != var7;
                if (!var0) {
                    _fun38560_ip = 32;
                    continue _fun38560
                }
            case 28:
                var0 = var1 != var6;
            case 32:
                if (!var0) {
                    _fun38560_ip = 229;
                    continue _fun38560
                }
            case 38:
                var1 = _closure1_slot10;
                var1 = var7 in var1;
                if (!var1) {
                    _fun38560_ip = 226;
                    continue _fun38560
                }
            case 55:
                var2 = _closure1_slot10;
                var2 = var2[var7];
                var2 = var6 in var2;
                if (!var2) {
                    _fun38560_ip = 223;
                    continue _fun38560
                }
            case 73:
                var3 = _closure1_slot10;
                var3 = var3[var7];
                var3 = var3[var6];
                var3 = var8 in var3;
                if (!var3) {
                    _fun38560_ip = 220;
                    continue _fun38560
                }
            case 95:
                var9 = _closure1_slot10;
                var4 = {};
                var12 = var9[var7];
                var13 = var4;
                var10 = copyDataProperties(var13, var12);
                var10 = {};
                var11 = _closure1_slot10;
                var11 = var11[var7];
                var12 = var11[var6];
                var13 = var10;
                var11 = copyDataProperties(var13, var12);
                var4[var6] = var10;
                var9[var7] = var4;
                var4 = _closure1_slot10;
                var4 = var4[var7];
                var4 = var4[var6];
                var4 = delete var4[var8];
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 7;
                var8 = var8[var4];
                var4 = undefined;
                var9 = var9.bind(var4)(var8);
                var8 = var9.isEmpty;
                var4 = _closure1_slot10;
                var4 = var4[var7];
                var4 = var4[var6];
                var4 = var8.bind(var9)(var4);
                if (!var4) {
                    _fun38560_ip = 218;
                    continue _fun38560
                }
            case 206:
                var5 = _closure1_slot10;
                var5 = var5[var7];
                var4 = delete var5[var6];
            case 218:
                var3 = undefined;
            case 220:
                var2 = var3;
            case 223:
                var1 = var2;
            case 226:
                var0 = var1;
            case 229:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = var9;
    var7 = var7.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun38562: for (var _fun38562_ip = 0;;) switch (_fun38562_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun38562_ip = 69;
                        continue _fun38562
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun38562_ip = 105;
                    continue _fun38562;
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
            var0 = _closure1_slot9;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'isActive';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun38564: for (var _fun38564_ip = 0;;) switch (_fun38564_ip) {
                case 0:
                    var5 = arg0;
                    var4 = this;
                    var2 = null;
                    var0 = var2 != var5;
                    if (!var0) {
                        _fun38564_ip = 41;
                        continue _fun38564
                    }
                case 15:
                    var3 = var4.getThreadsForParent;
                    var1 = arg1;
                    var3 = var3.bind(var4)(var5, var1);
                    var1 = arg2;
                    var1 = var3[var1];
                    var0 = var2 != var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getThreadsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun38565: for (var _fun38565_ip = 0;;) switch (_fun38565_ip) {
                case 0:
                    var2 = _closure1_slot10;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun38565_ip = 24;
                        continue _fun38565
                    }
                case 20:
                    var0 = _closure1_slot12;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getThreadsForParent';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun38566: for (var _fun38566_ip = 0;;) switch (_fun38566_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getThreadsForGuild;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg1;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun38566_ip = 37;
                        continue _fun38566
                    }
                case 30:
                    var0 = _closure1_slot12;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasThreadsForChannel';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var5 = this;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.isEmpty;
            var4 = var5.getThreadsForParent;
            var3 = arg0;
            var0 = arg1;
            var0 = var4.bind(var5)(var3, var0);
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'forEachGuild';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 8;
            var3 = var3[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var3 = var4.keys;
            var2 = _closure1_slot10;
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var3 = arg0;
                var2 = _closure3_slot0;
                var0 = _closure1_slot10;
                var1 = var0[var3];
                var0 = undefined;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasLoaded';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot11;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ActiveThreadsStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = _closure1_slot11;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = arg0;
        var2 = var0.guilds;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot16;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.channels;
        var2 = {};
        _closure1_slot10 = var2;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 7;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var4.bind(var0)(var2);
        var4 = var2.bind(var0)(var3);
        var3 = var4.filter;
        var2 = function(arg0) { // Environment: var1
            var2 = _closure1_slot8;
            var1 = var2.has;
            var0 = arg0;
            var0 = var0.type;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.groupBy;
        var2 = 'guild_id';
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg0, arg1) { // Environment: var1
            var2 = arg0;
            var4 = arg1;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot10;
            var1 = {};
            var3[var4] = var1;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot17;
                var2 = _closure3_slot0;
                var0 = undefined;
                var1 = arg0;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.guild;
        var4 = _closure1_slot15;
        var3 = var2.id;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var1 = _closure1_slot16;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_CREATE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot15;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.GUILD_DELETE = var9;
    var1.THREAD_CREATE = var8;
    var1.THREAD_UPDATE = var8;
    var8 = function arg0() {
        _fun38579: for (var _fun38579_ip = 0;;) switch (_fun38579_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.guildId;
                var _closure2_slot0 = var8;
                var2 = var1.threads;
                var3 = var1.channelIds;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun38579_ip = 49;
                    continue _fun38579
                }
            case 32:
                var3 = _closure1_slot11;
                var1 = var3.add;
                var1 = var1.bind(var3)(var8);
            case 49:
                var9 = _closure1_slot10;
                var1 = {};
                var13 = var9[var8];
                var14 = var1;
                var10 = copyDataProperties(var14, var13);
                var9[var8] = var1;
                var1 = _closure1_slot10;
                var6 = var1[var8];
                for (var1 in var6)
                    case 89: {
                        case 98: var11 = var1;
                        var9 = _closure1_slot10;
                        var10 = var9[var8];
                        var9 = {};
                        var12 = _closure1_slot10;
                        var12 = var12[var8];
                        var13 = var12[var11];
                        var14 = var9;
                        var12 = copyDataProperties(var14, var13);
                        var10[var11] = var9;
                        _fun38579_ip = 89;
                        continue _fun38579;
                    }
            case 136:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.THREAD_LIST_SYNC = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var1 = _closure1_slot18;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.THREAD_DELETE = var8;
    var3 = function arg0() {
        _fun38582: for (var _fun38582_ip = 0;;) switch (_fun38582_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.guild_id;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun38582_ip = 99;
                    continue _fun38582
                }
            case 19:
                var3 = var0.guild_id;
                var2 = _closure1_slot10;
                var2 = var3 in var2;
                if (!var2) {
                    _fun38582_ip = 99;
                    continue _fun38582
                }
            case 38:
                var4 = _closure1_slot10;
                var3 = var0.guild_id;
                var2 = {};
                var6 = _closure1_slot10;
                var5 = var0.guild_id;
                var7 = var6[var5];
                var8 = var2;
                var5 = copyDataProperties(var8, var7);
                var4[var3] = var2;
                var2 = _closure1_slot10;
                var1 = var0.guild_id;
                var1 = var2[var1];
                var0 = var0.id;
                var0 = delete var1[var0];
                var0 = undefined;
                return var0;
            case 99:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_DELETE = var3;
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ActiveThreadsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 1372, 22, 21, 566, 806, 2]);