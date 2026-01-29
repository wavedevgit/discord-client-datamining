// modules/threads/ThreadMessageStore.tsx
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
        _fun53317: for (var _fun53317_ip = 0;;) switch (_fun53317_ip) {
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
                _fun53317_ip = 74;
                continue _fun53317;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun53320: for (var _fun53320_ip = 0;;) switch (_fun53320_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun53320_ip = 45;
                    continue _fun53320
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun53320_ip = 54;
                    continue _fun53320
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun53320_ip = 342;
                    continue _fun53320
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun53320_ip = 322;
                    continue _fun53320
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun53320_ip = 282;
                    continue _fun53320
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun53320_ip = 269;
                    continue _fun53320
                }
            case 109:
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
                    _fun53320_ip = 162;
                    continue _fun53320
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun53320_ip = 178;
                    continue _fun53320
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun53320_ip = 248;
                    continue _fun53320
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun53320_ip = 248;
                    continue _fun53320
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun53320_ip = 233;
                    continue _fun53320
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun53320_ip = 246;
                    continue _fun53320
                }
            case 233:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun53320_ip = 264;
                continue _fun53320;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun53320_ip = 282;
                continue _fun53320;
            case 269:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun53320_ip = 322;
                    continue _fun53320
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun53320_ip = 329;
                    continue _fun53320
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun53321: for (var _fun53321_ip = 0;;) switch (_fun53321_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun53321_ip = 56;
                                continue _fun53321
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
                            _fun53321_ip = 67;
                            continue _fun53321;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun53322: for (var _fun53322_ip = 0;;) switch (_fun53322_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun53322_ip = 23;
                    continue _fun53322
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun53322_ip = 33;
                    continue _fun53322
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
                    _fun53322_ip = 70;
                    continue _fun53322
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun53322_ip = 55;
                    continue _fun53322
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1) { // Original name: updateState, environment: var3
        _fun53323: for (var _fun53323_ip = 0;;) switch (_fun53323_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot8;
                var3 = var4.has;
                var2 = var0.type;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun53323_ip = 142;
                    continue _fun53323
                }
            case 28:
                var3 = _closure1_slot23;
                var4 = var0.id;
                var2 = _closure1_slot17;
                var2 = var4 in var2;
                if (var2) {
                    _fun53323_ip = 118;
                    continue _fun53323
                }
            case 48:
                var5 = _closure1_slot17;
                var4 = var0.id;
                var2 = {};
                var6 = var0.guild_id;
                var2.guildId = var6;
                var6 = var0.parent_id;
                var2.parentId = var6;
                var8 = var0.messageCount;
                var6 = null;
                var9 = var6 != var8;
                var7 = 0;
                if (!var9) {
                    _fun53323_ip = 99;
                    continue _fun53323
                }
            case 96:
                var7 = var8;
            case 99:
                var2.count = var7;
                var2.mostRecentRawMessage = var6;
                var2.mostRecentMessage = var6;
                var5[var4] = var2;
            case 118:
                var1 = _closure1_slot17;
                var0 = var0.id;
                var2 = var1[var0];
                var1 = undefined;
                var0 = arg1;
                var0 = var3.bind(var1)(var2, var0);
            case 142:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0, arg1) { // Original name: updateWithState, environment: var3
        _fun53324: for (var _fun53324_ip = 0;;) switch (_fun53324_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot18;
                var1 = var2.parentId;
                var1 = var3[var1];
                var3 = null;
                var4 = var3 != var1;
                var3 = 0;
                if (!var4) {
                    _fun53324_ip = 34;
                    continue _fun53324
                }
            case 31:
                var3 = var1;
            case 34:
                var1 = 1;
                var3 = var3 + var1;
                var1 = _closure1_slot18;
                var0 = var2.parentId;
                var1[var0] = var3;
                var1 = arg1;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: updateFromGuild, environment: var3
        _fun53325: for (var _fun53325_ip = 0;;) switch (_fun53325_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.threads;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun53325_ip = 32;
                    continue _fun53325
                }
            case 15:
                var3 = var4.forEach;
                var2 = _closure1_slot26;
                var2 = var3.bind(var4)(var2);
            case 32:
                var2 = var1.threadMessages;
                if (!(var0 != var2)) {
                    _fun53325_ip = 59;
                    continue _fun53325
                }
            case 42:
                var1 = var2.forEach;
                var0 = _closure1_slot25;
                var0 = var1.bind(var2)(var0);
            case 59:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: updateFromThreadMessages, environment: var3
        _fun53326: for (var _fun53326_ip = 0;;) switch (_fun53326_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = var2.type;
                var3 = _closure1_slot15;
                var3 = var3.THREAD_STARTER_MESSAGE;
                if (!(var4 !== var3)) {
                    _fun53326_ip = 73;
                    continue _fun53326
                }
            case 31:
                var4 = _closure1_slot12;
                var3 = var4.getChannel;
                var2 = var2.channel_id;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun53326_ip = 73;
                    continue _fun53326
                }
            case 56:
                var2 = _closure1_slot22;
                var1 = undefined;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = _closure2_slot0;
                    var1.mostRecentRawMessage = var0;
                    var0 = null;
                    var1.mostRecentMessage = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var1)(var3, var0);
            case 73:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0) { // Original name: updateFromThread, environment: var3
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot22;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            _fun53329: for (var _fun53329_ip = 0;;) switch (_fun53329_ip) {
                case 0:
                    var1 = arg0;
                    var0 = _closure2_slot0;
                    var2 = var0.messageCount;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun53329_ip = 38;
                        continue _fun53329
                    }
                case 22:
                    var2 = _closure2_slot0;
                    var2 = var2.messageCount;
                    var1.count = var2;
                case 38:
                    var5 = var1.mostRecentRawMessage;
                    if (!(var0 == var5)) {
                        _fun53329_ip = 54;
                        continue _fun53329
                    }
                case 48:
                    var5 = var1.mostRecentMessage;
                case 54:
                    var2 = _closure2_slot0;
                    var2 = var2.lastMessageId;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun53329_ip = 99;
                        continue _fun53329
                    }
                case 71:
                    var6 = var0 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun53329_ip = 85;
                        continue _fun53329
                    }
                case 80:
                    var4 = var5.id;
                case 85:
                    var3 = _closure2_slot0;
                    var3 = var3.lastMessageId;
                    var2 = var4 !== var3;
                case 99:
                    if (!var2) {
                        _fun53329_ip = 114;
                        continue _fun53329
                    }
                case 102:
                    var1.mostRecentRawMessage = var0;
                    var1.mostRecentMessage = var0;
                case 114:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0) { // Original name: updateFromServerThread, environment: var3
        _fun53330: for (var _fun53330_ip = 0;;) switch (_fun53330_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun53330_ip = 66;
                    continue _fun53330
                }
            case 9:
                var4 = var2.id;
                var3 = _closure1_slot17;
                var3 = var4 in var3;
                if (var3) {
                    _fun53330_ip = 66;
                    continue _fun53330
                }
            case 28:
                var4 = _closure1_slot12;
                var3 = var4.getChannel;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                if (!(var1 != var2)) {
                    _fun53330_ip = 66;
                    continue _fun53330
                }
            case 51:
                var1 = _closure1_slot26;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                var0 = true;
                return var0;
            case 66:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var11 = function(arg0) { // Original name: handleThreadCreateOrUpdate, environment: var3
        var0 = arg0;
        var2 = var0.channel;
        var1 = _closure1_slot26;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var10 = function(arg0) { // Original name: handleLoadArchivedThreadsSuccess, environment: var3
        var0 = arg0;
        var2 = var0.threads;
        var1 = var2.forEach;
        var0 = _closure1_slot27;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var8 = function(arg0) { // Original name: handleSearchMessagesSuccess, environment: var3
        var0 = arg0;
        var2 = var0.data;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = var0.messages;
            var2 = var0.threads;
            var1 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot27;
                    var0 = arg0;
                    var1 = var0.thread;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var3)(var0);
            var1 = var2.forEach;
            var0 = _closure1_slot27;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var9 = function() { // Original name: handleRelationshipUpdate, environment: var3
        _fun53337: for (var _fun53337_ip = 0;;) switch (_fun53337_ip) {
            case 0:
                var7 = _closure1_slot17;
                var0 = undefined;
                var2 = null;
                var1 = undefined;
                for (var3 in var7)
                    case 21: {
                        case 30: var13 = var3;
                        var9 = _closure1_slot17;
                        var10 = var9[var13];
                        if (var2 == var10) {
                            _fun53337_ip = 21;
                            continue _fun53337
                        }
                        case 45: var9 = var10.mostRecentMessage;
                        if (var2 == var9) {
                            _fun53337_ip = 21;
                            continue _fun53337
                        }
                        case 55: var12 = _closure1_slot13;
                        var11 = var12.getMessage;
                        var9 = var10.mostRecentMessage;
                        var9 = var9.id;
                        var9 = var11.bind(var12)(var13, var9);
                        var1 = var9;
                        if (var2 == var9) {
                            _fun53337_ip = 21;
                            continue _fun53337
                        }
                        case 89: var10.mostRecentMessage = var9;
                        var1 = var9;
                        _fun53337_ip = 21;
                        continue _fun53337;
                    }
            case 100:
                return var0;
        }
    };
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
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
    var12 = var7.ALL_CHANNEL_TYPES;
    var _closure1_slot8 = var12;
    var7 = var7.THREAD_CHANNEL_TYPES;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.MAX_THREAD_MESSAGE_COUNT;
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.MessageTypes;
    var _closure1_slot15 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var17 = var7;
    var1 = new var17[var1](var16);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot16 = var1;
    var1 = {};
    var _closure1_slot17 = var1;
    var1 = {};
    var _closure1_slot18 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ThreadMessageStore, environment: var5
            _fun53339: for (var _fun53339_ip = 0;;) switch (_fun53339_ip) {
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
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun53339_ip = 69;
                        continue _fun53339
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun53339_ip = 105;
                    continue _fun53339;
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
            var2 = var3.waitFor;
            var1 = _closure1_slot12;
            var0 = _closure1_slot13;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCount';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun53341: for (var _fun53341_ip = 0;;) switch (_fun53341_ip) {
                case 0:
                    var1 = _closure1_slot17;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun53341_ip = 31;
                        continue _fun53341
                    }
                case 25:
                    var1 = var2.count;
                case 31:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun53341_ip = 43;
                        continue _fun53341
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMostRecentMessage';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun53342: for (var _fun53342_ip = 0;;) switch (_fun53342_ip) {
                case 0:
                    var6 = arg0;
                    var0 = _closure1_slot17;
                    var1 = var0[var6];
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun53342_ip = 151;
                        continue _fun53342
                    }
                case 23:
                    var2 = var1.mostRecentMessage;
                    var2 = var0 == var2;
                    if (!var2) {
                        _fun53342_ip = 46;
                        continue _fun53342
                    }
                case 36:
                    var4 = var1.mostRecentRawMessage;
                    var2 = var0 != var4;
                case 46:
                    if (!var2) {
                        _fun53342_ip = 131;
                        continue _fun53342
                    }
                case 49:
                    var5 = _closure1_slot13;
                    var4 = var5.getMessage;
                    var2 = var1.mostRecentRawMessage;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var6, var2);
                    if (!(var0 == var2)) {
                        _fun53342_ip = 119;
                        continue _fun53342
                    }
                case 80:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.createMessageRecord;
                    var3 = var1.mostRecentRawMessage;
                    var2 = var4.bind(var5)(var3);
                case 119:
                    var1.mostRecentMessage = var2;
                    var1.mostRecentRawMessage = var0;
                case 131:
                    var2 = var1.mostRecentMessage;
                    var3 = var0 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun53342_ip = 149;
                        continue _fun53342
                    }
                case 146:
                    var1 = var2;
                case 149:
                    return var1;
                case 151:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getChannelThreadsVersion';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot18;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getInitialOverlayState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ThreadMessageStore';
    var7.displayName = var1;
    var1 = 16;
    var1 = var5[var1];
    var16 = var6.bind(var0)(var1);
    var1 = {};
    var12 = function(arg0) { // Original name: handleConnectionOpen, environment: var3
        var1 = {};
        _closure1_slot18 = var1;
        var2 = _closure1_slot16;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = arg0;
        var2 = var1.guilds;
        var1 = var2.forEach;
        var0 = _closure1_slot24;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var12;
    var12 = function(arg0) { // Original name: handleOverlayInitialize, environment: var3
        _fun53346: for (var _fun53346_ip = 0;;) switch (_fun53346_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.threadMessages;
                var0 = {};
                var16 = var0;
                var15 = var8;
                var1 = copyDataProperties(var16, var15);
                _closure1_slot17 = var0;
                var6 = var0;
                var1 = 'author';
                var0 = null;
                for (var2 in var6)
                    case 45: {
                        case 54: var9 = var2;
                        var10 = var8[var9];
                        var11 = var10.mostRecentMessage;
                        if (var0 == var11) {
                            _fun53346_ip = 45;
                            continue _fun53346
                        }
                        case 71: var10 = var8[var9];
                        var12 = _closure1_slot10;
                        var9 = {};
                        var16 = var9;
                        var15 = var11;
                        var13 = copyDataProperties(var16, var15);
                        var14 = _closure1_slot11;
                        var16 = var11.author;
                        var13 = var14.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var14
                            }
                        });
                        var17 = var13;
                        var11 = new var17[var14](var16, var15);
                        var11 = var11 instanceof Object ? var11 : var13;
                        var9[var1] = var11;
                        var11 = var12.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var12
                            }
                        });
                        var17 = var11;
                        var16 = var9;
                        var9 = new var17[var12](var16, var15);
                        var9 = var9 instanceof Object ? var9 : var11;
                        var10.mostRecentMessage = var9;
                        _fun53346_ip = 45;
                        continue _fun53346;
                    }
            case 157:
                var0 = undefined;
                return var0;
        }
    };
    var1.OVERLAY_INITIALIZE = var12;
    var12 = function(arg0) { // Original name: handleGuildCreate, environment: var3
        var0 = arg0;
        var2 = var0.guild;
        var1 = _closure1_slot24;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_CREATE = var12;
    var12 = function(arg0) { // Original name: handleGuildDelete, environment: var3
        var0 = arg0;
        var0 = var0.guild;
        var2 = var0.id;
        var1 = function(arg0) { // Original name: deleteForGuild, environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 12;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.omitBy;
            var3 = _closure1_slot17;
            var1 = function(arg0) { // Environment: var1
                _fun53350: for (var _fun53350_ip = 0;;) switch (_fun53350_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.guildId;
                        var0 = _closure3_slot0;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun53350_ip = 39;
                            continue _fun53350
                        }
                    case 22:
                        var2 = _closure1_slot18;
                        var1 = var1.parentId;
                        var1 = delete var2[var1];
                    case 39:
                        return var0;
                }
            };
            var1 = var4.bind(var5)(var3, var1);
            _closure1_slot17 = var1;
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_DELETE = var12;
    var1.THREAD_CREATE = var11;
    var1.THREAD_UPDATE = var11;
    var11 = function(arg0) { // Original name: handleThreadListSync, environment: var3
        _fun53351: for (var _fun53351_ip = 0;;) switch (_fun53351_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.threads;
                var2 = var0.mostRecentMessages;
                var1 = var3.forEach;
                var0 = _closure1_slot26;
                var0 = var1.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun53351_ip = 55;
                    continue _fun53351
                }
            case 38:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun53352: for (var _fun53352_ip = 0;;) switch (_fun53352_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var5 = _closure1_slot12;
                            var3 = var5.getChannel;
                            var2 = var4.channel_id;
                            var3 = var3.bind(var5)(var2);
                            var2 = null;
                            var2 = var2 != var3;
                            if (!var2) {
                                _fun53352_ip = 59;
                                continue _fun53352
                            }
                        case 40:
                            var5 = var4.type;
                            var4 = _closure1_slot15;
                            var4 = var4.THREAD_STARTER_MESSAGE;
                            var2 = var5 !== var4;
                        case 59:
                            if (!var2) {
                                _fun53352_ip = 79;
                                continue _fun53352
                            }
                        case 62:
                            var2 = _closure1_slot22;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = _closure3_slot0;
                                var1.mostRecentRawMessage = var0;
                                var0 = null;
                                var1.mostRecentMessage = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var2.bind(var1)(var3, var0);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 55:
                var0 = undefined;
                return var0;
        }
    };
    var1.THREAD_LIST_SYNC = var11;
    var1.LOAD_THREADS_SUCCESS = var10;
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var10;
    var1.RELATIONSHIP_ADD = var9;
    var1.RELATIONSHIP_UPDATE = var9;
    var1.RELATIONSHIP_REMOVE = var9;
    var1.SEARCH_MESSAGES_SUCCESS = var8;
    var1.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleThreadDelete, environment: var3
        var0 = arg0;
        var0 = var0.channel;
        var1 = _closure1_slot17;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.THREAD_DELETE = var8;
    var8 = function(arg0) { // Original name: handleChannelDelete, environment: var3
        var0 = arg0;
        var0 = var0.channel;
        var2 = var0.id;
        var1 = function(arg0) { // Original name: deleteForChannel, environment: var0
            var2 = arg0;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var0 = 12;
            var4 = var4[var0];
            var0 = undefined;
            var6 = var5.bind(var0)(var4);
            var5 = var6.omitBy;
            var4 = _closure1_slot17;
            var3 = function(arg0) { // Environment: var3
                var0 = arg0;
                var1 = var0.parentId;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var3 = var5.bind(var6)(var4, var3);
            _closure1_slot17 = var3;
            var1 = _closure1_slot18;
            var1 = delete var1[var2];
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CHANNEL_DELETE = var8;
    var8 = function(arg0) { // Original name: handleMessageCreate, environment: var3
        _fun53358: for (var _fun53358_ip = 0;;) switch (_fun53358_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.message;
                var _closure2_slot0 = var6;
                var2 = var1.optimistic;
                var0 = var1.isPushNotification;
                var1 = var1.sendMessageOptions;
                if (var2) {
                    _fun53358_ip = 231;
                    continue _fun53358
                }
            case 38:
                if (var0) {
                    _fun53358_ip = 231;
                    continue _fun53358
                }
            case 44:
                var0 = null;
                if (!(var0 == var1)) {
                    _fun53358_ip = 231;
                    continue _fun53358
                }
            case 53:
                var5 = _closure1_slot12;
                var4 = var5.getChannel;
                var1 = var6.channel_id;
                var5 = var4.bind(var5)(var1);
                var1 = var0 == var5;
                if (var1) {
                    _fun53358_ip = 104;
                    continue _fun53358
                }
            case 82:
                var7 = _closure1_slot9;
                var4 = var7.has;
                var0 = var5.type;
                var0 = var4.bind(var7)(var0);
                var1 = !var0;
            case 104:
                var0 = !var1;
                if (var1) {
                    _fun53358_ip = 229;
                    continue _fun53358
                }
            case 110:
                var4 = var6.type;
                var1 = _closure1_slot15;
                var1 = var1.THREAD_STARTER_MESSAGE;
                var4 = var4 !== var1;
                if (!var4) {
                    _fun53358_ip = 198;
                    continue _fun53358
                }
            case 132:
                var1 = var5.isForumPost;
                var1 = var1.bind(var5)();
                var1 = !var1;
                if (var1) {
                    _fun53358_ip = 195;
                    continue _fun53358
                }
            case 148:
                var7 = var6.id;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 13;
                var8 = var8[var6];
                var6 = undefined;
                var9 = var9.bind(var6)(var8);
                var8 = var9.castChannelIdAsMessageId;
                var6 = var5.id;
                var6 = var8.bind(var9)(var6);
                var1 = var7 !== var6;
            case 195:
                var4 = var1;
            case 198:
                var1 = !var4;
                var1 = !var1;
                if (!var4) {
                    _fun53358_ip = 226;
                    continue _fun53358
                }
            case 207:
                var4 = _closure1_slot22;
                var2 = undefined;
                var3 = function(arg0) { // Environment: var3
                    var1 = arg0;
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.min;
                    var2 = var1.count;
                    var0 = 1;
                    var2 = var2 + var0;
                    var0 = _closure1_slot14;
                    var0 = var3.bind(var4)(var2, var0);
                    var1.count = var0;
                    var0 = _closure2_slot0;
                    var1.mostRecentRawMessage = var0;
                    var0 = null;
                    var1.mostRecentMessage = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var2)(var5, var3);
                var1 = undefined;
            case 226:
                var0 = var1;
            case 229:
                return var0;
            case 231:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var8;
    var8 = function(arg0) { // Original name: handleMessageUpdate, environment: var3
        _fun53360: for (var _fun53360_ip = 0;;) switch (_fun53360_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.message;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot17;
                var0 = var4.channel_id;
                var3 = var3[var0];
                var6 = null;
                var7 = var6 == var3;
                var0 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun53360_ip = 49;
                    continue _fun53360
                }
            case 43:
                var5 = var3.mostRecentRawMessage;
            case 49:
                if (!(var6 == var5)) {
                    _fun53360_ip = 71;
                    continue _fun53360
                }
            case 53:
                var8 = var6 == var3;
                var7 = undefined;
                if (var8) {
                    _fun53360_ip = 68;
                    continue _fun53360
                }
            case 62:
                var7 = var3.mostRecentMessage;
            case 68:
                var5 = var7;
            case 71:
                if (!(var6 != var3)) {
                    _fun53360_ip = 110;
                    continue _fun53360
                }
            case 75:
                if (!(var6 != var5)) {
                    _fun53360_ip = 110;
                    continue _fun53360
                }
            case 79:
                var5 = var5.id;
                var4 = var4.id;
                if (!(var5 === var4)) {
                    _fun53360_ip = 110;
                    continue _fun53360
                }
            case 93:
                var2 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    _fun53361: for (var _fun53361_ip = 0;;) switch (_fun53361_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.mostRecentMessage;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun53361_ip = 71;
                                continue _fun53361
                            }
                        case 15:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 14;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.updateMessageRecord;
                            var3 = var1.mostRecentMessage;
                            var0 = _closure2_slot0;
                            var0 = var4.bind(var5)(var3, var0);
                            var1.mostRecentMessage = var0;
                        case 71:
                            var0 = var1.mostRecentRawMessage;
                            if (!(var2 != var0)) {
                                _fun53361_ip = 137;
                                continue _fun53361
                            }
                        case 81:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.updateServerMessage;
                            var2 = var1.mostRecentRawMessage;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var0);
                            var1.mostRecentRawMessage = var0;
                        case 137:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            case 110:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_UPDATE = var8;
    var8 = function(arg0) { // Original name: handleMessageDelete, environment: var3
        _fun53362: for (var _fun53362_ip = 0;;) switch (_fun53362_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.id;
                var _closure2_slot0 = var6;
                var7 = var0.channelId;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var3 = _closure1_slot17;
                var3 = var3[var7];
                var4 = null;
                if (!(var4 != var3)) {
                    _fun53362_ip = 123;
                    continue _fun53362
                }
            case 46:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 13;
                var4 = var8[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.castChannelIdAsMessageId;
                var4 = var4.bind(var5)(var7);
                var4 = var4 !== var6;
                _closure2_slot1 = var4;
                var5 = _closure1_slot16;
                var4 = var5.has;
                var4 = var4.bind(var5)(var6);
                var4 = !var4;
                _closure2_slot2 = var4;
                var2 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    _fun53363: for (var _fun53363_ip = 0;;) switch (_fun53363_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.mostRecentRawMessage;
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun53363_ip = 21;
                                continue _fun53363
                            }
                        case 15:
                            var3 = var2.mostRecentMessage;
                        case 21:
                            var1 = var0 != var3;
                            if (!var1) {
                                _fun53363_ip = 44;
                                continue _fun53363
                            }
                        case 28:
                            var4 = var3.id;
                            var3 = _closure2_slot0;
                            var1 = var4 === var3;
                        case 44:
                            if (!var1) {
                                _fun53363_ip = 59;
                                continue _fun53363
                            }
                        case 47:
                            var2.mostRecentMessage = var0;
                            var2.mostRecentRawMessage = var0;
                        case 59:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun53363_ip = 76;
                                continue _fun53363
                            }
                        case 69:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun53363_ip = 84;
                                continue _fun53363
                            }
                        case 76:
                            var1 = var2.count;
                            _fun53363_ip = 118;
                            continue _fun53363;
                        case 84:
                            var3 = global;
                            var6 = var3.Math;
                            var5 = var6.max;
                            var4 = var2.count;
                            var3 = 1;
                            var4 = var4 - var3;
                            var3 = 0;
                            var1 = var5.bind(var6)(var4, var3);
                        case 118:
                            var2.count = var1;
                            var2 = _closure1_slot16;
                            var1 = var2.add;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            case 123:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_DELETE = var8;
    var8 = function(arg0) { // Original name: handleMessageDeleteBulk, environment: var3
        _fun53364: for (var _fun53364_ip = 0;;) switch (_fun53364_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.ids;
                var _closure2_slot0 = var6;
                var4 = var0.channelId;
                var _closure2_slot1 = var4;
                var0 = undefined;
                var _closure2_slot2 = var0;
                var3 = _closure1_slot17;
                var3 = var3[var4];
                var4 = null;
                if (!(var4 != var3)) {
                    _fun53364_ip = 94;
                    continue _fun53364
                }
            case 47:
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var1
                    _fun53365: for (var _fun53365_ip = 0;;) switch (_fun53365_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.castChannelIdAsMessageId;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var4)(var0);
                            var0 = var0 !== var3;
                            var2 = _closure1_slot16;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            var1 = !var1;
                            if (!var0) {
                                _fun53365_ip = 73;
                                continue _fun53365
                            }
                        case 70:
                            var0 = var1;
                        case 73:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var5 = var4.length;
                _closure2_slot2 = var5;
                var4 = 0;
                if (!(var5 > var4)) {
                    _fun53364_ip = 92;
                    continue _fun53364
                }
            case 77:
                var2 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    _fun53366: for (var _fun53366_ip = 0;;) switch (_fun53366_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.mostRecentRawMessage;
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun53366_ip = 21;
                                continue _fun53366
                            }
                        case 15:
                            var3 = var2.mostRecentMessage;
                        case 21:
                            var1 = var0 != var3;
                            if (!var1) {
                                _fun53366_ip = 50;
                                continue _fun53366
                            }
                        case 28:
                            var5 = _closure2_slot0;
                            var4 = var5.includes;
                            var3 = var3.id;
                            var1 = var4.bind(var5)(var3);
                        case 50:
                            if (!var1) {
                                _fun53366_ip = 65;
                                continue _fun53366
                            }
                        case 53:
                            var2.mostRecentMessage = var0;
                            var2.mostRecentRawMessage = var0;
                        case 65:
                            var3 = var2.count;
                            var1 = _closure2_slot2;
                            var1 = var3 - var1;
                            var2.count = var1;
                            var2 = _closure2_slot0;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot16;
                                var1 = var2.add;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var3, var1);
            case 92:
                return var0;
            case 94:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_DELETE_BULK = var8;
    var3 = function(arg0) { // Original name: handleLoadMessagesSuccess, environment: var3
        _fun53368: for (var _fun53368_ip = 0;;) switch (_fun53368_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot20;
                var0 = var4.messages;
                var1 = undefined;
                var8 = var5.bind(var1)(var0);
                var6 = var8.bind(var1)();
                var5 = var6.done;
                var7 = var6;
                var6 = false;
                var0 = false;
                if (var5) {
                    _fun53368_ip = 95;
                    continue _fun53368
                }
            case 48:
                var9 = _closure1_slot27;
                var5 = var7.value;
                var5 = var5.thread;
                var9 = var9.bind(var1)(var5);
                if (var9) {
                    _fun53368_ip = 74;
                    continue _fun53368
                }
            case 71:
                var9 = var6;
            case 74:
                var10 = var8.bind(var1)();
                var5 = var10.done;
                var6 = var9;
                var7 = var10;
                var0 = var6;
                if (!var5) {
                    _fun53368_ip = 48;
                    continue _fun53368
                }
            case 95:
                var5 = var4.isAfter;
                if (var5) {
                    _fun53368_ip = 188;
                    continue _fun53368
                }
            case 104:
                var5 = var4.isBefore;
                if (var5) {
                    _fun53368_ip = 188;
                    continue _fun53368
                }
            case 113:
                var5 = var4.hasMoreAfter;
                if (var5) {
                    _fun53368_ip = 188;
                    continue _fun53368
                }
            case 122:
                var6 = _closure1_slot12;
                var5 = var6.getChannel;
                var4 = var4.channelId;
                var4 = var5.bind(var6)(var4);
                var5 = null;
                if (!(var5 != var4)) {
                    _fun53368_ip = 186;
                    continue _fun53368
                }
            case 147:
                var7 = _closure1_slot9;
                var6 = var7.has;
                var5 = var4.type;
                var5 = var6.bind(var7)(var5);
                if (!var5) {
                    _fun53368_ip = 186;
                    continue _fun53368
                }
            case 169:
                var3 = _closure1_slot22;
                var2 = function(arg0) { // Environment: var2
                    _fun53369: for (var _fun53369_ip = 0;;) switch (_fun53369_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = _closure2_slot0;
                            var0 = var0.messages;
                            var2 = var0.length;
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun53369_ip = 141;
                                continue _fun53369
                            }
                        case 27:
                            var2 = _closure2_slot0;
                            var2 = var2.messages;
                            var5 = var2[var0];
                            var2 = null;
                            var6 = var2 != var5;
                            var3 = null;
                            if (!var6) {
                                _fun53369_ip = 55;
                                continue _fun53369
                            }
                        case 52:
                            var3 = var5;
                        case 55:
                            var4 = _closure2_slot0;
                            var4 = var4.messages;
                            var6 = var4.length;
                            var5 = _closure1_slot14;
                            if (!(!(var6 >= var5))) {
                                _fun53369_ip = 89;
                                continue _fun53369
                            }
                        case 81:
                            var5 = var1.count;
                            _fun53369_ip = 93;
                            continue _fun53369;
                        case 89:
                            var5 = _closure1_slot14;
                        case 93:
                            var1.count = var5;
                            var6 = var2 == var3;
                            var5 = undefined;
                            if (var6) {
                                _fun53369_ip = 113;
                                continue _fun53369
                            }
                        case 108:
                            var5 = var3.type;
                        case 113:
                            var4 = _closure1_slot15;
                            var4 = var4.THREAD_STARTER_MESSAGE;
                            if (!(var5 !== var4)) {
                                _fun53369_ip = 161;
                                continue _fun53369
                            }
                        case 127:
                            var1.mostRecentRawMessage = var3;
                            var1.mostRecentMessage = var2;
                            _fun53369_ip = 161;
                            continue _fun53369;
                        case 141:
                            var2 = null;
                            var1.mostRecentRawMessage = var2;
                            var1.mostRecentMessage = var2;
                            var1.count = var0;
                        case 161:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var1)(var4, var2);
                return var1;
            case 186:
                return var0;
            case 188:
                return var0;
        }
    };
    var1.LOAD_MESSAGES_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var17 = var3;
    var15 = var1;
    var1 = new var17[var7](var16, var15, var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ThreadMessageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 3060, 1620, 1372, 4207, 1233, 660, 22, 21, 3926, 566, 806, 2]);