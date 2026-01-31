// stores/views/PrivateChannelSortStore.tsx
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
        _fun67164: for (var _fun67164_ip = 0;;) switch (_fun67164_ip) {
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
                _fun67164_ip = 76;
                continue _fun67164;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var0 = function(arg0) { // Original name: makeSortedChannel, environment: var3
        _fun67167: for (var _fun67167_ip = 0;;) switch (_fun67167_ip) {
            case 0:
                var1 = arg0;
                var2 = arguments[1];
                var7 = undefined;
                if (!(var2 === var7)) {
                    _fun67167_ip = 165;
                    continue _fun67167
                }
            case 15:
                var5 = _closure1_slot14;
                var4 = var5.lastMessageId;
                var0 = var1.id;
                var4 = var4.bind(var5)(var0);
                var6 = null;
                if (!(var6 == var4)) {
                    _fun67167_ip = 50;
                    continue _fun67167
                }
            case 44:
                var4 = var1.lastMessageId;
            case 50:
                if (!(var6 == var4)) {
                    _fun67167_ip = 59;
                    continue _fun67167
                }
            case 54:
                var4 = var1.id;
            case 59:
                var5 = var1.isMessageRequestTimestamp;
                var0 = var4;
                if (!(var6 != var5)) {
                    _fun67167_ip = 162;
                    continue _fun67167
                }
            case 72:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 16;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var5 = var3.bind(var7)(var5);
                var3 = var5.valueOf;
                var10 = var3.bind(var5)();
                var5 = 14;
                var3 = var8[var5];
                var9 = var6.bind(var7)(var3);
                var3 = var9.fromTimestamp;
                var3 = var3.bind(var9)(var10);
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.compare;
                var6 = var5.bind(var6)(var4, var3);
                var5 = 0;
                if (!(var6 > var5)) {
                    _fun67167_ip = 159;
                    continue _fun67167
                }
            case 156:
                var3 = var4;
            case 159:
                var0 = var3;
            case 162:
                var2 = var0;
            case 165:
                var0 = {};
                var3 = var1.id;
                var0.channelId = var3;
                var0.lastMessageId = var2;
                var5 = _closure1_slot15;
                var4 = var5.isMessagesFavorite;
                var3 = var1.id;
                var3 = var4.bind(var5)(var3);
                var0.isFavorite = var3;
                var5 = _closure1_slot8;
                var4 = var5.isMessageRequest;
                var3 = var1.id;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun67167_ip = 252;
                    continue _fun67167
                }
            case 232:
                var6 = _closure1_slot9;
                var5 = var6.isSpam;
                var4 = var1.id;
                var3 = var5.bind(var6)(var4);
            case 252:
                var0.isRequest = var3;
                var3 = _closure1_slot10;
                var2 = var3.getNudgeTimestamp;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var0.nudgeTimestamp = var1;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var9 = function() { // Original name: handleConnectionOpen, environment: var3
        var2 = _closure1_slot18;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var3 = _closure1_slot12;
        var0 = var3.getMutablePrivateChannels;
        var0 = var0.bind(var3)();
        var2 = var1.bind(var2)(var0);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var5 = arg0;
            var4 = _closure1_slot18;
            var3 = var4.set;
            var2 = var5.id;
            var1 = _closure1_slot24;
            var0 = undefined;
            var1 = var1.bind(var0)(var5);
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot25 = var9;
    var8 = function() { // Original name: handleCacheLoaded, environment: var3
        _fun67170: for (var _fun67170_ip = 0;;) switch (_fun67170_ip) {
            case 0:
                var1 = _closure1_slot12;
                var0 = var1.getMutablePrivateChannels;
                var6 = var0.bind(var1)();
                var4 = var6;
                var0 = undefined;
                for (var1 in var4)
                    case 30: {
                        case 39: var11 = var1;
                        var10 = _closure1_slot18;
                        var9 = var10.set;
                        var12 = _closure1_slot24;
                        var8 = var6[var11];
                        var8 = var12.bind(var0)(var8);
                        var8 = var9.bind(var10)(var11, var8);
                        _fun67170_ip = 30;
                        continue _fun67170;
                    }
            case 72:
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.isPrivate;
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = {};
    var7 = 'DEFAULT';
    var1.DEFAULT = var7;
    var7 = 'FAVORITE';
    var1.FAVORITE = var7;
    var _closure1_slot17 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var11 = var1.SecondaryIndexMap;
    var1 = var11.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var11
        }
    });
    var14 = function(arg0) { // Environment: var3
        _fun67171: for (var _fun67171_ip = 0;;) switch (_fun67171_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isRequest;
                var1 = var1.isFavorite;
                if (var0) {
                    _fun67171_ip = 52;
                    continue _fun67171
                }
            case 18:
                var0 = _closure1_slot17;
                if (var1) {
                    _fun67171_ip = 36;
                    continue _fun67171
                }
            case 28:
                var1 = var0.DEFAULT;
                _fun67171_ip = 42;
                continue _fun67171;
            case 36:
                var1 = var0.FAVORITE;
            case 42:
                var0 = new Array(1);
                var0[0] = var1;
                _fun67171_ip = 56;
                continue _fun67171;
            case 52:
                var0 = new Array(0);
            case 56:
                return var0;
        }
    };
    var13 = function(arg0) { // Environment: var3
        _fun67172: for (var _fun67172_ip = 0;;) switch (_fun67172_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.lastMessageId;
                var4 = var0.nudgeTimestamp;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.extractTimestamp;
                var3 = var0.bind(var1)(var2);
                var0 = global;
                var2 = var0.Math;
                var1 = var2.max;
                var0 = null;
                var5 = var0 != var4;
                var0 = 0;
                if (!var5) {
                    _fun67172_ip = 78;
                    continue _fun67172
                }
            case 75:
                var0 = var4;
            case 78:
                var0 = var1.bind(var2)(var3, var0);
                var0 = -var0;
                return var0;
        }
    };
    var15 = var7;
    var1 = new var15[var11](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot18 = var1;
    var1 = new Array(0);
    var _closure1_slot19 = var1;
    var1 = new Array(0);
    var _closure1_slot20 = var1;
    var1 = new Array(0);
    var _closure1_slot21 = var1;
    var1 = function() { // Environment: var3
        _fun67173: for (var _fun67173_ip = 0;;) switch (_fun67173_ip) {
            case 0:
                var5 = _closure1_slot18;
                var4 = var5.values;
                var1 = _closure1_slot17;
                var3 = var1.FAVORITE;
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot18;
                var4 = var5.values;
                var1 = var1.DEFAULT;
                var1 = var4.bind(var5)(var1);
                var4 = _closure1_slot19;
                var4 = var4 === var3;
                if (!var4) {
                    _fun67173_ip = 68;
                    continue _fun67173
                }
            case 60:
                var5 = _closure1_slot20;
                var4 = var5 === var1;
            case 68:
                if (var4) {
                    _fun67173_ip = 121;
                    continue _fun67173
                }
            case 71:
                var4 = new Array(0);
                _closure1_slot21 = var4;
                var5 = var3.forEach;
                var4 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var2 = var0.channelId;
                    var1 = _closure1_slot21;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var4 = var5.bind(var3)(var4);
                _closure1_slot19 = var3;
                var3 = var1.forEach;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var2 = var0.channelId;
                    var1 = _closure1_slot21;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var2 = var3.bind(var1)(var2);
                _closure1_slot20 = var1;
            case 121:
                var0 = _closure1_slot21;
                return var0;
        }
    };
    var _closure1_slot22 = var1;
    var1 = 18;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: PrivateChannelSortStore, environment: var5
            _fun67177: for (var _fun67177_ip = 0;;) switch (_fun67177_ip) {
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
                        _fun67177_ip = 69;
                        continue _fun67177
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun67177_ip = 105;
                    continue _fun67177;
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
            var3 = this;
            var10 = var3.waitFor;
            var18 = _closure1_slot12;
            var17 = _closure1_slot13;
            var16 = _closure1_slot8;
            var15 = _closure1_slot14;
            var14 = _closure1_slot9;
            var13 = _closure1_slot15;
            var12 = _closure1_slot16;
            var11 = _closure1_slot10;
            var19 = var3;
            var1 = var19[var10](var18, var17, var16, var15, var14, var13, var12, var11, var10);
            var2 = var3.syncWith;
            var4 = _closure1_slot15;
            var1 = new Array(3);
            var1[0] = var4;
            var4 = _closure1_slot8;
            var1[1] = var4;
            var4 = _closure1_slot10;
            var1[2] = var4;
            var0 = _closure1_slot25;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getPrivateChannelIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot22;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSortedChannels';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var4 = _closure1_slot18;
            var3 = var4.values;
            var1 = _closure1_slot17;
            var0 = var1.FAVORITE;
            var3 = var3.bind(var4)(var0);
            var0 = new Array(2);
            var0[0] = var3;
            var3 = _closure1_slot18;
            var2 = var3.values;
            var1 = var1.DEFAULT;
            var1 = var2.bind(var3)(var1);
            var0[1] = var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'serializeForOverlay';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = {};
            var _closure3_slot0 = var0;
            var3 = _closure1_slot18;
            var2 = var3.values;
            var3 = var2.bind(var3)();
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var2 = var0.channelId;
                var1 = var0.lastMessageId;
                var0 = _closure3_slot0;
                var0[var2] = var1;
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'PrivateChannelSortStore';
    var7.displayName = var1;
    var1 = 19;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var9;
    var1.CONNECTION_OPEN_SUPPLEMENTAL = var9;
    var1.OVERLAY_INITIALIZE = var9;
    var1.CACHE_LOADED = var8;
    var1.CACHE_LOADED_LAZY = var8;
    var8 = function(arg0) { // Original name: handleChannelUpdates, environment: var3
        var0 = arg0;
        var2 = var0.channels;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun67184: for (var _fun67184_ip = 0;;) switch (_fun67184_ip) {
                case 0:
                    var5 = arg0;
                    var3 = _closure1_slot11;
                    var2 = var5.type;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    if (var2) {
                        _fun67184_ip = 44;
                        continue _fun67184
                    }
                case 25:
                    var6 = _closure1_slot18;
                    var4 = var6.has;
                    var3 = var5.id;
                    var2 = var4.bind(var6)(var3);
                case 44:
                    if (!var2) {
                        _fun67184_ip = 76;
                        continue _fun67184
                    }
                case 47:
                    var4 = _closure1_slot18;
                    var3 = var4.set;
                    var2 = var5.id;
                    var1 = _closure1_slot24;
                    var1 = var1.bind(var0)(var5);
                    var1 = var3.bind(var4)(var2, var1);
                case 76:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CHANNEL_UPDATES = var8;
    var8 = function(arg0) { // Original name: handleChannelCreate, environment: var3
        _fun67185: for (var _fun67185_ip = 0;;) switch (_fun67185_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channel;
                var1 = _closure1_slot11;
                var0 = var7.type;
                var6 = undefined;
                var0 = var1.bind(var6)(var0);
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun67185_ip = 108;
                    continue _fun67185
                }
            case 36:
                var3 = var7.id;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 17;
                var1 = var5[var1];
                var1 = var4.bind(var6)(var1);
                var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun67185_ip = 105;
                    continue _fun67185
                }
            case 74:
                var5 = _closure1_slot18;
                var4 = var5.set;
                var3 = var7.id;
                var2 = _closure1_slot24;
                var2 = var2.bind(var6)(var7);
                var2 = var4.bind(var5)(var3, var2);
                var1 = undefined;
            case 105:
                var0 = var1;
            case 108:
                return var0;
        }
    };
    var1.CHANNEL_CREATE = var8;
    var8 = function(arg0) { // Original name: handleChannelDelete, environment: var3
        var0 = arg0;
        var0 = var0.channel;
        var2 = _closure1_slot18;
        var1 = var2.delete;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.CHANNEL_DELETE = var8;
    var8 = function(arg0) { // Original name: handleMessageCreate, environment: var3
        _fun67187: for (var _fun67187_ip = 0;;) switch (_fun67187_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var1 = var0.message;
                var2 = _closure1_slot18;
                var0 = var2.has;
                var0 = var0.bind(var2)(var4);
                if (var0) {
                    _fun67187_ip = 37;
                    continue _fun67187
                }
            case 33:
                var0 = false;
                return var0;
            case 37:
                var2 = _closure1_slot12;
                var0 = var2.getChannel;
                var7 = var0.bind(var2)(var4);
                var0 = null;
                var0 = var0 != var7;
                if (!var0) {
                    _fun67187_ip = 92;
                    continue _fun67187
                }
            case 60:
                var3 = _closure1_slot18;
                var2 = var3.set;
                var6 = _closure1_slot24;
                var5 = var1.id;
                var1 = undefined;
                var1 = var6.bind(var1)(var7, var5);
                var0 = var2.bind(var3)(var4, var1);
            case 92:
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var8;
    var8 = function(arg0) { // Original name: handleReplyNudgeSet, environment: var3
        _fun67188: for (var _fun67188_ip = 0;;) switch (_fun67188_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var2 = _closure1_slot18;
                var0 = var2.has;
                var0 = var0.bind(var2)(var4);
                if (var0) {
                    _fun67188_ip = 32;
                    continue _fun67188
                }
            case 28:
                var0 = false;
                return var0;
            case 32:
                var2 = _closure1_slot12;
                var0 = var2.getChannel;
                var6 = var0.bind(var2)(var4);
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun67188_ip = 81;
                    continue _fun67188
                }
            case 55:
                var3 = _closure1_slot18;
                var2 = var3.set;
                var5 = _closure1_slot24;
                var1 = undefined;
                var1 = var5.bind(var1)(var6);
                var0 = var2.bind(var3)(var4, var1);
            case 81:
                return var0;
        }
    };
    var1.REPLY_NUDGE_SET = var8;
    var8 = function(arg0) { // Original name: handleGuildCreate, environment: var3
        var0 = arg0;
        var0 = var0.guild;
        var2 = var0.id;
        var1 = _closure1_slot18;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.GUILD_CREATE = var8;
    var3 = function() { // Original name: handleLogout, environment: var3
        var1 = _closure1_slot18;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
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
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/views/PrivateChannelSortStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3923, 3928, 8293, 1376, 1372, 1410, 3906, 4267, 1613, 21, 3046, 3004, 5606, 566, 806, 2]);