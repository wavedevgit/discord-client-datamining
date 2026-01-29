// modules/messages/MessageViewTrackingManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun73363: for (var _fun73363_ip = 0;;) switch (_fun73363_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun73363_ip = 45;
                    continue _fun73363
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun73363_ip = 54;
                    continue _fun73363
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun73363_ip = 344;
                    continue _fun73363
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun73363_ip = 322;
                    continue _fun73363
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun73363_ip = 282;
                    continue _fun73363
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun73363_ip = 269;
                    continue _fun73363
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
                    _fun73363_ip = 162;
                    continue _fun73363
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun73363_ip = 178;
                    continue _fun73363
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun73363_ip = 248;
                    continue _fun73363
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun73363_ip = 248;
                    continue _fun73363
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun73363_ip = 233;
                    continue _fun73363
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun73363_ip = 246;
                    continue _fun73363
                }
            case 233:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun73363_ip = 264;
                continue _fun73363;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun73363_ip = 282;
                continue _fun73363;
            case 269:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun73363_ip = 322;
                    continue _fun73363
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
                    _fun73363_ip = 329;
                    continue _fun73363
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun73364: for (var _fun73364_ip = 0;;) switch (_fun73364_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun73364_ip = 56;
                                continue _fun73364
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
                            _fun73364_ip = 67;
                            continue _fun73364;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun73365: for (var _fun73365_ip = 0;;) switch (_fun73365_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun73365_ip = 23;
                    continue _fun73365
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun73365_ip = 33;
                    continue _fun73365
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
                    _fun73365_ip = 70;
                    continue _fun73365
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun73365_ip = 55;
                    continue _fun73365
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun73366: for (var _fun73366_ip = 0;;) switch (_fun73366_ip) {
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
                _fun73366_ip = 76;
                continue _fun73366;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: getAnalyticsConfig, environment: var3
        _fun73369: for (var _fun73369_ip = 0;;) switch (_fun73369_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var0 = 'announcement';
                if (!(var0 !== var1)) {
                    _fun73369_ip = 148;
                    continue _fun73369
                }
            case 19:
                var1 = var2.type;
                var0 = 'app_embed';
                if (!(var0 !== var1)) {
                    _fun73369_ip = 70;
                    continue _fun73369
                }
            case 34:
                var0 = global;
                var3 = var0.Error;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'Invalid message type for message view tracking';
                var5 = var1;
                var0 = new var5[var3](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 70:
                var0 = {};
                var1 = _closure1_slot8;
                var1 = var1.APP_EMBED_VIEWED;
                var0.event = var1;
                var1 = {};
                var3 = var2.applicationId;
                var1.application_id = var3;
                var3 = var2.linkType;
                var1.link_type = var3;
                var3 = var2.messageId;
                var1.message_id = var3;
                var3 = var2.channelId;
                var1.channel_id = var3;
                var3 = var2.guildId;
                var1.guild_id = var3;
                var0.properties = var1;
                return var0;
            case 148:
                var0 = {};
                var1 = _closure1_slot8;
                var1 = var1.ANNOUNCEMENT_MESSAGE_VIEWED;
                var0.event = var1;
                var1 = {};
                var3 = var2.messageId;
                var1.message_id = var3;
                var3 = var2.channelId;
                var1.channel_id = var3;
                var3 = var2.guildId;
                var1.guild_id = var3;
                var3 = var2.sourceChannelId;
                var1.source_channel_id = var3;
                var2 = var2.sourceGuildId;
                var1.source_guild_id = var2;
                var0.properties = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot8 = var1;
    var1 = {};
    var4 = 'announcement';
    var1.ANNOUNCEMENT = var4;
    var4 = 'app_embed';
    var1.APP_EMBED = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var3 = function(arg0) { // Environment: var3
        var3 = function(arg0) { // Original name: MessageViewTrackingManager, environment: var5
            _fun73371: for (var _fun73371_ip = 0;;) switch (_fun73371_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun73371_ip = 86;
                        continue _fun73371
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun73371_ip = 120;
                    continue _fun73371;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = {};
                    var0.currentlyVisibleMessageTimers = var3;
                    var3 = global;
                    var3 = var3.Set;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var5;
                    var3 = new var14[var3](var13);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var0.viewsInCurrentChannel = var3;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 7;
                    var1 = var5[var1];
                    var4 = var3.bind(var4)(var1);
                    var1 = var4.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var13 = {
                        'max': 500,
                        'maxAge': 60000
                    };
                    var14 = var3;
                    var1 = new var14[var4](var13, var12);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var0.recentViewTimes = var1;
                    var1 = new Array(0);
                    var0.batchBuffer = var1;
                    var1 = null;
                    var0.batchTimerId = var1;
                    var1 = {};
                    var2 = function() { // Original name: CHANNEL_SELECT, environment: var2
                        var1 = _closure3_slot0;
                        var0 = var1.handleChannelSelect;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.CHANNEL_SELECT = var2;
                    var0.actions = var1;
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
        var0 = 'handleMessageBecameVisible';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun73373: for (var _fun73373_ip = 0;;) switch (_fun73373_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var2;
                    var7 = var2.type;
                    var6 = var2.messageId;
                    var3 = global;
                    var2 = var3.HermesInternal;
                    var5 = var2.concat;
                    var4 = '';
                    var2 = '-';
                    var2 = var5.bind(var4)(var6, var2, var7);
                    var _closure3_slot2 = var2;
                    var4 = var0.currentlyVisibleMessageTimers;
                    var5 = var4[var2];
                    var4 = null;
                    if (!(var4 == var5)) {
                        _fun73373_ip = 179;
                        continue _fun73373
                    }
                case 74:
                    var6 = var0.viewsInCurrentChannel;
                    var5 = var6.has;
                    var5 = var5.bind(var6)(var2);
                    if (var5) {
                        _fun73373_ip = 179;
                        continue _fun73373
                    }
                case 93:
                    var6 = var0.recentViewTimes;
                    var5 = var6.get;
                    var5 = var5.bind(var6)(var2);
                    if (!(var4 != var5)) {
                        _fun73373_ip = 142;
                        continue _fun73373
                    }
                case 113:
                    var6 = var3.Date;
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    var5 = var4 - var5;
                    var4 = 60000;
                    if (!(!(var5 < var4))) {
                        _fun73373_ip = 179;
                        continue _fun73373
                    }
                case 142:
                    var5 = var3.setTimeout;
                    var4 = undefined;
                    var3 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.currentlyVisibleMessageTimers;
                        var5 = _closure3_slot2;
                        var1 = delete var1[var5];
                        var3 = var2.viewsInCurrentChannel;
                        var1 = var3.add;
                        var1 = var1.bind(var3)(var5);
                        var4 = var2.recentViewTimes;
                        var3 = var4.set;
                        var1 = global;
                        var6 = var1.Date;
                        var1 = var6.now;
                        var1 = var1.bind(var6)();
                        var1 = var3.bind(var4)(var5, var1);
                        var1 = var2.bufferViewTrack;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = 1000;
                    var1 = var5.bind(var4)(var3, var1);
                    var0 = var0.currentlyVisibleMessageTimers;
                    var0[var2] = var1;
                case 179:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleMessageLostVisibility';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun73375: for (var _fun73375_ip = 0;;) switch (_fun73375_ip) {
                case 0:
                    var0 = this;
                    var2 = global;
                    var1 = var2.HermesInternal;
                    var6 = var1.concat;
                    var5 = '';
                    var4 = arg0;
                    var3 = '-';
                    var1 = arg1;
                    var1 = var6.bind(var5)(var4, var3, var1);
                    var3 = var0.currentlyVisibleMessageTimers;
                    var4 = var3[var1];
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun73375_ip = 76;
                        continue _fun73375
                    }
                case 53:
                    var3 = var2.clearTimeout;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var0 = var0.currentlyVisibleMessageTimers;
                    var0 = delete var0[var1];
                case 76:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleMessageListVisibilityChange';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun73376: for (var _fun73376_ip = 0;;) switch (_fun73376_ip) {
                case 0:
                    var5 = arg0;
                    var10 = this;
                    var1 = _closure1_slot9;
                    var0 = undefined;
                    var3 = var1.bind(var0)(var5);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun73376_ip = 65;
                        continue _fun73376
                    }
                case 32:
                    var4 = var2.value;
                    var1 = var10.handleMessageBecameVisible;
                    var1 = var1.bind(var10)(var4);
                    var4 = var3.bind(var0)();
                    var1 = var4.done;
                    var2 = var4;
                    if (!var1) {
                        _fun73376_ip = 32;
                        continue _fun73376
                    }
                case 65:
                    var1 = global;
                    var4 = var1.Set;
                    var3 = var5.map;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var4 = var0.messageId;
                        var3 = var0.type;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '';
                        var0 = '-';
                        var0 = var2.bind(var1)(var4, var0, var3);
                        return var0;
                    };
                    var14 = var3.bind(var5)(var2);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var15 = var3;
                    var2 = new var15[var4](var14, var13);
                    var8 = var2 instanceof Object ? var2 : var3;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var1 = var10.currentlyVisibleMessageTimers;
                    var7 = var2.bind(var3)(var1);
                    var1 = var7.length;
                    var6 = 0;
                    var1 = var6 < var1;
                    var5 = '-';
                    var4 = 2;
                    var3 = 1;
                    var2 = 0;
                    if (!var1) {
                        _fun73376_ip = 231;
                        continue _fun73376
                    }
                case 160:
                    var11 = var7[var2];
                    var1 = var8.has;
                    var1 = var1.bind(var8)(var11);
                    if (var1) {
                        _fun73376_ip = 219;
                        continue _fun73376
                    }
                case 177:
                    var1 = var11.split;
                    var11 = var1.bind(var11)(var5);
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var0)(var11, var4);
                    var12 = var1[var6];
                    var11 = var1[var3];
                    var1 = var10.handleMessageLostVisibility;
                    var1 = var1.bind(var10)(var12, var11);
                case 219:
                    var2 = var2 + 1;
                    var1 = var7.length;
                    if (var2 < var1) {
                        _fun73376_ip = 160;
                        continue _fun73376
                    }
                case 231:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleChannelSelect';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun73378: for (var _fun73378_ip = 0;;) switch (_fun73378_ip) {
                case 0:
                    var2 = this;
                    var5 = global;
                    var3 = var5.Object;
                    var1 = var3.values;
                    var0 = var2.currentlyVisibleMessageTimers;
                    var4 = var1.bind(var3)(var0);
                    var0 = var4.length;
                    var3 = 0;
                    var1 = var3 < var0;
                    var0 = undefined;
                    if (!var1) {
                        _fun73378_ip = 70;
                        continue _fun73378
                    }
                case 43:
                    var6 = var4[var3];
                    var1 = var5.clearTimeout;
                    var1 = var1.bind(var0)(var6);
                    var3 = var3 + 1;
                    var1 = var4.length;
                    if (var3 < var1) {
                        _fun73378_ip = 43;
                        continue _fun73378
                    }
                case 70:
                    var1 = {};
                    var2.currentlyVisibleMessageTimers = var1;
                    var3 = var2.viewsInCurrentChannel;
                    var1 = var3.clear;
                    var1 = var1.bind(var3)();
                    var1 = var2.drainBuffer;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'drainBuffer';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun73379: for (var _fun73379_ip = 0;;) switch (_fun73379_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot9;
                    var1 = var2.batchBuffer;
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var3 = var5.bind(var0)();
                    var1 = var3.done;
                    var4 = 8;
                    if (var1) {
                        _fun73379_ip = 107;
                        continue _fun73379
                    }
                case 38:
                    var7 = _closure1_slot12;
                    var1 = var3.value;
                    var1 = var7.bind(var0)(var1);
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var4];
                    var9 = var8.bind(var0)(var7);
                    var8 = var9.track;
                    var7 = var1.event;
                    var1 = var1.properties;
                    var1 = var8.bind(var9)(var7, var1);
                    var7 = var5.bind(var0)();
                    var1 = var7.done;
                    var3 = var7;
                    if (!var1) {
                        _fun73379_ip = 38;
                        continue _fun73379
                    }
                case 107:
                    var1 = new Array(0);
                    var2.batchBuffer = var1;
                    var3 = var2.batchTimerId;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun73379_ip = 154;
                        continue _fun73379
                    }
                case 129:
                    var3 = global;
                    var4 = var3.clearTimeout;
                    var3 = var2.batchTimerId;
                    var3 = var4.bind(var0)(var3);
                    var2.batchTimerId = var1;
                case 154:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'bufferViewTrack';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun73380: for (var _fun73380_ip = 0;;) switch (_fun73380_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.batchBuffer;
                    var3 = var2.length;
                    var2 = 10;
                    if (!(var3 >= var2)) {
                        _fun73380_ip = 37;
                        continue _fun73380
                    }
                case 27:
                    var2 = var1.drainBuffer;
                    var2 = var2.bind(var1)();
                case 37:
                    var4 = var1.batchBuffer;
                    var3 = var4.push;
                    var2 = arg0;
                    var2 = var3.bind(var4)(var2);
                    var3 = var1.batchTimerId;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun73380_ip = 103;
                        continue _fun73380
                    }
                case 68:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.drainBuffer;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = 2000;
                    var0 = var4.bind(var3)(var2, var0);
                    var1.batchTimerId = var0;
                case 103:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MessageViewTrackingManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MessageViewTrackingType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 660, 1386, 795, 4256, 2]);