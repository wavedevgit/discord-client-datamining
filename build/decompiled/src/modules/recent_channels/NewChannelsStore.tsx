// modules/recent_channels/NewChannelsStore.tsx
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
        _fun41426: for (var _fun41426_ip = 0;;) switch (_fun41426_ip) {
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
                _fun41426_ip = 74;
                continue _fun41426;
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
    var0 = function(arg0, arg1) { // Original name: maybeAckViewedChannel, environment: var3
        _fun41429: for (var _fun41429_ip = 0;;) switch (_fun41429_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var6;
                var2 = _closure1_slot21;
                var7 = var2[var5];
                var4 = null;
                var2 = var4 != var7;
                if (!var2) {
                    _fun41429_ip = 36;
                    continue _fun41429
                }
            case 32:
                var2 = var4 != var6;
            case 36:
                if (!var2) {
                    _fun41429_ip = 49;
                    continue _fun41429
                }
            case 39:
                var3 = var7.has;
                var2 = var3.bind(var7)(var6);
            case 49:
                if (!var2) {
                    _fun41429_ip = 170;
                    continue _fun41429
                }
            case 52:
                var3 = _closure1_slot16;
                var2 = var3.isOptInEnabled;
                var2 = var2.bind(var3)(var5);
                var2 = !var2;
                if (var2) {
                    _fun41429_ip = 107;
                    continue _fun41429
                }
            case 73:
                var5 = _closure1_slot10;
                var3 = var5.getChannel;
                var7 = var3.bind(var5)(var6);
                var3 = var4 != var7;
                if (!var3) {
                    _fun41429_ip = 104;
                    continue _fun41429
                }
            case 94:
                var5 = var7.isThread;
                var3 = var5.bind(var7)();
            case 104:
                var2 = var3;
            case 107:
                if (var2) {
                    _fun41429_ip = 129;
                    continue _fun41429
                }
            case 110:
                var5 = _closure1_slot15;
                var3 = var5.ackMessageId;
                var3 = var3.bind(var5)(var6);
                var2 = var4 != var3;
            case 129:
                if (var2) {
                    _fun41429_ip = 170;
                    continue _fun41429
                }
            case 132:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.wait;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var1 = var7[var1];
                    var6 = undefined;
                    var5 = var2.bind(var6)(var1);
                    var4 = var5.ack;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = _closure1_slot17;
                    var1 = var1.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED;
                    var2.object = var1;
                    var1 = _closure1_slot18;
                    var1 = var1.ACK_AUTOMATIC;
                    var2.objectType = var1;
                    var1 = _closure1_slot1;
                    var0 = 18;
                    var0 = var7[var0];
                    var1 = var1.bind(var6)(var0);
                    var0 = var1.atPreviousMillisecond;
                    var8 = var0.bind(var1)(var3);
                    var13 = var5;
                    var12 = var3;
                    var11 = var2;
                    var10 = true;
                    var9 = true;
                    var0 = var13[var4](var12, var11, var10, var9, var8, var7);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 170:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: initializeNewChannels, environment: var3
        _fun41431: for (var _fun41431_ip = 0;;) switch (_fun41431_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = _closure1_slot21;
                var4 = var0[var2];
                var0 = null;
                if (!(var0 == var4)) {
                    _fun41431_ip = 281;
                    continue _fun41431
                }
            case 29:
                var5 = _closure1_slot11;
                var4 = var5.getChannels;
                var5 = var4.bind(var5)(var2);
                var4 = _closure1_slot12;
                var6 = var5[var4];
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.channel;
                    var0 = var0.id;
                    return var0;
                };
                var7 = var5.bind(var6)(var4);
                var6 = _closure1_slot13;
                var5 = var6.getMember;
                var8 = _closure1_slot9;
                var4 = var8.getId;
                var4 = var4.bind(var8)();
                var4 = var5.bind(var6)(var2, var4);
                var5 = var0 == var4;
                var6 = undefined;
                if (var5) {
                    _fun41431_ip = 112;
                    continue _fun41431
                }
            case 106:
                var6 = var4.joinedAt;
            case 112:
                if (!(var0 != var6)) {
                    _fun41431_ip = 281;
                    continue _fun41431
                }
            case 119:
                var5 = _closure1_slot21;
                var0 = global;
                var4 = var0.Set;
                var8 = var4.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var8;
                var4 = new var11[var4](var10);
                var4 = var4 instanceof Object ? var4 : var8;
                var5[var2] = var4;
                var4 = var0.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var5;
                var10 = var6;
                var4 = new var11[var4](var10, var9);
                var5 = var4 instanceof Object ? var4 : var5;
                var4 = var5.getTime;
                var4 = var4.bind(var5)();
                var _closure2_slot1 = var4;
                var5 = var7.length;
                var4 = 0;
                if (!(var4 !== var5)) {
                    _fun41431_ip = 281;
                    continue _fun41431
                }
            case 209:
                var4 = _closure1_slot21;
                var6 = var0.Set;
                var5 = var7.filter;
                var3 = function(arg0) { // Environment: var3
                    _fun41433: for (var _fun41433_ip = 0;;) switch (_fun41433_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 18;
                            var0 = var3[var0];
                            var7 = undefined;
                            var2 = var2.bind(var7)(var0);
                            var0 = var2.extractTimestamp;
                            var3 = var0.bind(var2)(var4);
                            var2 = _closure1_slot15;
                            var0 = var2.getTrackedAckMessageId;
                            var2 = var0.bind(var2)(var4);
                            var0 = null;
                            var0 = var0 == var2;
                            if (!var0) {
                                _fun41433_ip = 120;
                                continue _fun41433
                            }
                        case 63:
                            var2 = global;
                            var5 = var2.Date;
                            var2 = var5.now;
                            var5 = var2.bind(var5)();
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var2 = 14;
                            var2 = var8[var2];
                            var2 = var6.bind(var7)(var2);
                            var2 = var2.Millis;
                            var2 = var2.WEEK;
                            var2 = var5 - var2;
                            var0 = var3 > var2;
                        case 120:
                            if (!var0) {
                                _fun41433_ip = 149;
                                continue _fun41433
                            }
                        case 123:
                            var6 = _closure1_slot8;
                            var5 = var6.getGuildRecentsDismissedAt;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            var0 = var3 > var2;
                        case 149:
                            if (!var0) {
                                _fun41433_ip = 163;
                                continue _fun41433
                            }
                        case 152:
                            var2 = _closure2_slot1;
                            var0 = var3 > var2;
                        case 163:
                            if (!var0) {
                                _fun41433_ip = 192;
                                continue _fun41433
                            }
                        case 166:
                            var3 = _closure1_slot16;
                            var2 = var3.isChannelOrParentOptedIn;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1, var4);
                            var0 = !var1;
                        case 192:
                            return var0;
                    }
                };
                var10 = var5.bind(var7)(var3);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var5;
                var3 = new var11[var6](var10, var9);
                var3 = var3 instanceof Object ? var3 : var5;
                var4[var2] = var3;
                var1 = _closure1_slot22;
                var3 = var0.Date;
                var0 = var3.now;
                var0 = var0.bind(var3)();
                var1[var2] = var0;
            case 281:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function() { // Original name: pruneNewChannels, environment: var3
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 18;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.keys;
        var1 = _closure1_slot21;
        var3 = var2.bind(var3)(var1);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = arg0;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot21;
            var8 = var3[var2];
            var1 = _closure1_slot21;
            var3 = global;
            var4 = var3.Set;
            var5 = new Array(0);
            var7 = 0;
            var9 = var5;
            var3 = arraySpread(var9, var8, var7);
            var3 = var5.filter;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot16;
                var2 = var3.isChannelOrParentOptedIn;
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                var0 = !var0;
                return var0;
            };
            var9 = var3.bind(var5)(var0);
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var10 = var3;
            var0 = new var10[var4](var9, var8);
            var0 = var0 instanceof Object ? var0 : var3;
            var1[var2] = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
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
    var7 = var6.bind(var0)(var7);
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
    var8 = var5[var7];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot11 = var8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot15 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot16 = var7;
    var7 = 13;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.AnalyticsObjects;
    var _closure1_slot17 = var8;
    var8 = var7.AnalyticsObjectTypes;
    var _closure1_slot18 = var8;
    var7 = var7.GuildFeatures;
    var _closure1_slot19 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot20 = var1;
    var1 = {};
    var _closure1_slot21 = var1;
    var1 = {};
    var _closure1_slot22 = var1;
    var1 = 19;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: NewChannelsStore, environment: var5
            _fun41438: for (var _fun41438_ip = 0;;) switch (_fun41438_ip) {
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
                        _fun41438_ip = 69;
                        continue _fun41438
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun41438_ip = 105;
                    continue _fun41438;
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
            var18 = _closure1_slot9;
            var17 = _closure1_slot10;
            var16 = _closure1_slot11;
            var15 = _closure1_slot13;
            var14 = _closure1_slot14;
            var13 = _closure1_slot15;
            var12 = _closure1_slot16;
            var11 = _closure1_slot8;
            var19 = var3;
            var1 = var19[var10](var18, var17, var16, var15, var14, var13, var12, var11, var10);
            var2 = var3.syncWith;
            var4 = _closure1_slot16;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot26;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getNewChannelIds';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun41440: for (var _fun41440_ip = 0;;) switch (_fun41440_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    var0 = var1 != var2;
                    if (!var0) {
                        _fun41440_ip = 27;
                        continue _fun41440
                    }
                case 12:
                    var3 = _closure1_slot21;
                    var3 = var3[var2];
                    var0 = var1 == var3;
                case 27:
                    if (!var0) {
                        _fun41440_ip = 44;
                        continue _fun41440
                    }
                case 30:
                    var3 = _closure1_slot25;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                case 44:
                    if (!(var1 != var2)) {
                        _fun41440_ip = 63;
                        continue _fun41440
                    }
                case 48:
                    var0 = _closure1_slot21;
                    var0 = var0[var2];
                    if (!(var1 == var0)) {
                        _fun41440_ip = 70;
                        continue _fun41440
                    }
                case 63:
                    var0 = _closure1_slot20;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'shouldIndicateNewChannel';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun41441: for (var _fun41441_ip = 0;;) switch (_fun41441_ip) {
                case 0:
                    var4 = arg0;
                    var5 = arg1;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun41441_ip = 161;
                        continue _fun41441
                    }
                case 15:
                    var1 = _closure1_slot14;
                    var0 = var1.getGuild;
                    var0 = var0.bind(var1)(var4);
                    var1 = var3 == var0;
                    if (var1) {
                        _fun41441_ip = 68;
                        continue _fun41441
                    }
                case 39:
                    var7 = var0.features;
                    var6 = var7.has;
                    var0 = _closure1_slot19;
                    var0 = var0.COMMUNITY;
                    var0 = var6.bind(var7)(var0);
                    var1 = !var0;
                case 68:
                    var0 = !var1;
                    if (var1) {
                        _fun41441_ip = 159;
                        continue _fun41441
                    }
                case 74:
                    var1 = var3 != var4;
                    if (!var1) {
                        _fun41441_ip = 93;
                        continue _fun41441
                    }
                case 81:
                    var6 = _closure1_slot21;
                    var6 = var6[var4];
                    var1 = var3 == var6;
                case 93:
                    if (!var1) {
                        _fun41441_ip = 107;
                        continue _fun41441
                    }
                case 96:
                    var6 = _closure1_slot25;
                    var1 = undefined;
                    var1 = var6.bind(var1)(var4);
                case 107:
                    var1 = _closure1_slot21;
                    var6 = var1[var4];
                    var4 = var3 == var6;
                    var1 = undefined;
                    if (var4) {
                        _fun41441_ip = 134;
                        continue _fun41441
                    }
                case 124:
                    var4 = var6.has;
                    var1 = var4.bind(var6)(var5);
                case 134:
                    if (!var1) {
                        _fun41441_ip = 156;
                        continue _fun41441
                    }
                case 137:
                    var4 = _closure1_slot15;
                    var2 = var4.getTrackedAckMessageId;
                    var2 = var2.bind(var4)(var5);
                    var1 = var3 == var2;
                case 156:
                    var0 = var1;
                case 159:
                    return var0;
                case 161:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'NewChannelsStore';
    var7.displayName = var1;
    var1 = 16;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleBulkClearRecents, environment: var3
        _fun41442: for (var _fun41442_ip = 0;;) switch (_fun41442_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var4 = var0.channelIds;
                var3 = _closure1_slot21;
                var5 = var3[var1];
                var3 = null;
                if (!(var3 != var5)) {
                    _fun41442_ip = 83;
                    continue _fun41442
                }
            case 37:
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    var1 = _closure1_slot21;
                    var0 = _closure2_slot0;
                    var2 = var1[var0];
                    var1 = var2.delete;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot21;
                var2 = var2[var1];
                var3 = var2.size;
                var2 = 0;
                if (!(var2 === var3)) {
                    _fun41442_ip = 79;
                    continue _fun41442
                }
            case 71:
                var0 = _closure1_slot21;
                var0 = delete var0[var1];
            case 79:
                var0 = undefined;
                return var0;
            case 83:
                var0 = false;
                return var0;
        }
    };
    var1.BULK_CLEAR_RECENTS = var8;
    var8 = function() { // Original name: CHANNEL_ACK, environment: var3
        var0 = true;
        return var0;
    };
    var1.CHANNEL_ACK = var8;
    var8 = function(arg0) { // Original name: handleChannelSelect, environment: var3
        _fun41445: for (var _fun41445_ip = 0;;) switch (_fun41445_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var7 = var0.channelId;
                var1 = null;
                var0 = var1 != var4;
                if (!var0) {
                    _fun41445_ip = 143;
                    continue _fun41445
                }
            case 22:
                var3 = _closure1_slot21;
                var3 = var3[var4];
                if (!(var1 != var3)) {
                    _fun41445_ip = 127;
                    continue _fun41445
                }
            case 37:
                var3 = _closure1_slot22;
                var5 = var3[var4];
                var3 = global;
                var6 = var3.Date;
                var3 = var6.now;
                var8 = var3.bind(var6)();
                var9 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 14;
                var3 = var6[var3];
                var6 = undefined;
                var3 = var9.bind(var6)(var3);
                var3 = var3.Millis;
                var3 = var3.HOUR;
                var3 = var8 - var3;
                if (!(!(var5 < var3))) {
                    _fun41445_ip = 127;
                    continue _fun41445
                }
            case 104:
                var5 = var1 != var7;
                var1 = false;
                if (!var5) {
                    _fun41445_ip = 140;
                    continue _fun41445
                }
            case 113:
                var5 = _closure1_slot24;
                var5 = var5.bind(var6)(var4, var7);
                var1 = false;
                _fun41445_ip = 140;
                continue _fun41445;
            case 127:
                var3 = _closure1_slot25;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1 = true;
            case 140:
                var0 = var1;
            case 143:
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var8;
    var8 = function(arg0) { // Original name: handleSidebarViewChannel, environment: var3
        _fun41446: for (var _fun41446_ip = 0;;) switch (_fun41446_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = var0.channelId;
                var4 = var0.sidebarType;
                var0 = null;
                var0 = var0 == var3;
                if (var0) {
                    _fun41446_ip = 69;
                    continue _fun41446
                }
            case 28:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 15;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.SidebarType;
                var1 = var1.VIEW_CHANNEL;
                var0 = var4 !== var1;
            case 69:
                if (var0) {
                    _fun41446_ip = 87;
                    continue _fun41446
                }
            case 72:
                var1 = _closure1_slot24;
                var0 = undefined;
                var0 = var1.bind(var0)(var3, var2);
            case 87:
                var0 = false;
                return var0;
        }
    };
    var1.SIDEBAR_VIEW_CHANNEL = var8;
    var8 = function(arg0) { // Original name: handleSidebarViewGuild, environment: var3
        _fun41447: for (var _fun41447_ip = 0;;) switch (_fun41447_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = var0.baseChannelId;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun41447_ip = 35;
                    continue _fun41447
                }
            case 20:
                var1 = _closure1_slot24;
                var0 = undefined;
                var0 = var1.bind(var0)(var3, var2);
            case 35:
                var0 = false;
                return var0;
        }
    };
    var1.SIDEBAR_VIEW_GUILD = var8;
    var8 = function(arg0) { // Original name: handleGuildDelete, environment: var3
        var0 = arg0;
        var0 = var0.guild;
        var1 = _closure1_slot21;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DELETE = var8;
    var3 = function(arg0) { // Original name: handleChannelCreate, environment: var3
        _fun41449: for (var _fun41449_ip = 0;;) switch (_fun41449_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var1 = var0.isVocal;
                var1 = var1.bind(var0)();
                if (var1) {
                    _fun41449_ip = 112;
                    continue _fun41449
                }
            case 21:
                var4 = _closure1_slot21;
                var3 = var0.guild_id;
                var5 = _closure1_slot21;
                var2 = var0.guild_id;
                var2 = var5[var2];
                var5 = null;
                if (!(var5 == var2)) {
                    _fun41449_ip = 80;
                    continue _fun41449
                }
            case 52:
                var5 = global;
                var5 = var5.Set;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var6;
                var5 = new var8[var5](var7);
                var2 = var5 instanceof Object ? var5 : var6;
            case 80:
                var4[var3] = var2;
                var2 = _closure1_slot21;
                var1 = var0.guild_id;
                var2 = var2[var1];
                var1 = var2.add;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
            case 112:
                var0 = undefined;
                return var0;
        }
    };
    var1.CHANNEL_CREATE = var3;
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
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/recent_channels/NewChannelsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 1216, 1372, 1662, 1672, 1410, 3906, 4267, 660, 667, 4191, 806, 4538, 21, 566, 2]);