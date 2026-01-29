// utils/AnalyticsFeedItemSeenManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun71083: for (var _fun71083_ip = 0;;) switch (_fun71083_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun71083_ip = 45;
                    continue _fun71083
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun71083_ip = 54;
                    continue _fun71083
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun71083_ip = 344;
                    continue _fun71083
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun71083_ip = 322;
                    continue _fun71083
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun71083_ip = 282;
                    continue _fun71083
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun71083_ip = 269;
                    continue _fun71083
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
                    _fun71083_ip = 162;
                    continue _fun71083
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun71083_ip = 178;
                    continue _fun71083
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun71083_ip = 248;
                    continue _fun71083
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun71083_ip = 248;
                    continue _fun71083
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun71083_ip = 233;
                    continue _fun71083
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun71083_ip = 246;
                    continue _fun71083
                }
            case 233:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun71083_ip = 264;
                continue _fun71083;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun71083_ip = 282;
                continue _fun71083;
            case 269:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun71083_ip = 322;
                    continue _fun71083
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
                    _fun71083_ip = 329;
                    continue _fun71083
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun71084: for (var _fun71084_ip = 0;;) switch (_fun71084_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun71084_ip = 56;
                                continue _fun71084
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
                            _fun71084_ip = 67;
                            continue _fun71084;
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
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun71085: for (var _fun71085_ip = 0;;) switch (_fun71085_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun71085_ip = 23;
                    continue _fun71085
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun71085_ip = 33;
                    continue _fun71085
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
                    _fun71085_ip = 70;
                    continue _fun71085
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun71085_ip = 55;
                    continue _fun71085
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var9 = 0;
    var3 = var7[var9];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var8 = 1;
    var3 = var7[var8];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var6 = 2;
    var3 = var7[var6];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var5 = {};
    var3 = 'forum_channel';
    var5.FORUM_CHANNEL = var3;
    var4 = {};
    var4.IMMEDIATE = var9;
    var3 = 'IMMEDIATE';
    var4[var9] = var3;
    var4.IMMEDIATE_WITH_COOLDOWN = var8;
    var3 = 'IMMEDIATE_WITH_COOLDOWN';
    var4[var8] = var3;
    var4.IMMEDIATE_WITH_DELAY = var6;
    var3 = 'IMMEDIATE_WITH_DELAY';
    var4[var6] = var3;
    var _closure1_slot5 = var4;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() { // Original name: TrackedFeedItem, environment: var4
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2.seenIntervals = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'maybeMarkSeen';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            _fun71088: for (var _fun71088_ip = 0;;) switch (_fun71088_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.seenIntervals;
                    var0 = var1.seenIntervals;
                    var3 = var0.length;
                    var0 = 1;
                    var0 = var3 - var0;
                    var2 = var2[var0];
                    var3 = null;
                    var0 = var3 == var2;
                    if (var0) {
                        _fun71088_ip = 50;
                        continue _fun71088
                    }
                case 40:
                    var2 = var2.endTimeMillis;
                    var0 = var3 != var2;
                case 50:
                    if (!var0) {
                        _fun71088_ip = 81;
                        continue _fun71088
                    }
                case 53:
                    var3 = var1.seenIntervals;
                    var2 = var3.push;
                    var1 = {};
                    var4 = arg0;
                    var1.startTimeMillis = var4;
                    var1 = var2.bind(var3)(var1);
                    var0 = true;
                case 81:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'maybeMarkUnseen';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun71089: for (var _fun71089_ip = 0;;) switch (_fun71089_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.seenIntervals;
                    var0 = var0.seenIntervals;
                    var2 = var0.length;
                    var0 = 1;
                    var0 = var2 - var0;
                    var2 = var1[var0];
                    var3 = null;
                    var0 = var3 != var2;
                    if (!var0) {
                        _fun71089_ip = 50;
                        continue _fun71089
                    }
                case 40:
                    var1 = var2.endTimeMillis;
                    var0 = var3 == var1;
                case 50:
                    if (!var0) {
                        _fun71089_ip = 64;
                        continue _fun71089
                    }
                case 53:
                    var1 = arg0;
                    var2.endTimeMillis = var1;
                    var0 = true;
                case 64:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isVisible';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun71090: for (var _fun71090_ip = 0;;) switch (_fun71090_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.seenIntervals;
                    var0 = var0.seenIntervals;
                    var2 = var0.length;
                    var0 = 1;
                    var0 = var2 - var0;
                    var3 = var1[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun71090_ip = 48;
                        continue _fun71090
                    }
                case 42:
                    var0 = var3.startTimeMillis;
                case 48:
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun71090_ip = 74;
                        continue _fun71090
                    }
                case 55:
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun71090_ip = 70;
                        continue _fun71090
                    }
                case 64:
                    var1 = var3.endTimeMillis;
                case 70:
                    var0 = var2 == var1;
                case 74:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'computeSeenTimeDestructive';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            _fun71091: for (var _fun71091_ip = 0;;) switch (_fun71091_ip) {
                case 0:
                    var11 = arg0;
                    var3 = this;
                    var1 = new Array(0);
                    var2 = _closure1_slot7;
                    var0 = var3.seenIntervals;
                    var7 = undefined;
                    var10 = var2.bind(var7)(var0);
                    var6 = var10.bind(var7)();
                    var5 = var6.done;
                    var0 = global;
                    var9 = null;
                    var8 = var6;
                    var6 = 0;
                    var2 = 0;
                    if (var5) {
                        _fun71091_ip = 178;
                        continue _fun71091
                    }
                case 56:
                    var5 = var8.value;
                    var12 = var5.endTimeMillis;
                    if (!(var9 != var12)) {
                        _fun71091_ip = 93;
                        continue _fun71091
                    }
                case 71:
                    var13 = var5.endTimeMillis;
                    var12 = var5.startTimeMillis;
                    var12 = var13 - var12;
                    var12 = var6 + var12;
                    _fun71091_ip = 157;
                    continue _fun71091;
                case 93:
                    if (var11) {
                        _fun71091_ip = 111;
                        continue _fun71091
                    }
                case 96:
                    var13 = var1.push;
                    var13 = var13.bind(var1)(var5);
                    var12 = var6;
                    _fun71091_ip = 157;
                    continue _fun71091;
                case 111:
                    var14 = var0.Date;
                    var13 = var14.now;
                    var15 = var13.bind(var14)();
                    var5 = var5.startTimeMillis;
                    var5 = var15 - var5;
                    var12 = var6 + var5;
                    var14 = var1.push;
                    var13 = {};
                    var13.startTimeMillis = var15;
                    var13 = var14.bind(var1)(var13);
                case 157:
                    var13 = var10.bind(var7)();
                    var5 = var13.done;
                    var6 = var12;
                    var8 = var13;
                    var2 = var6;
                    if (!var5) {
                        _fun71091_ip = 56;
                        continue _fun71091
                    }
                case 178:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 3;
                    var4 = var6[var4];
                    var6 = var5.bind(var7)(var4);
                    var5 = var1.length;
                    var4 = 2;
                    var5 = var5 < var4;
                    var4 = 'there should only be a single left over data';
                    var4 = var6.bind(var7)(var5, var4);
                    var3.seenIntervals = var1;
                    var1 = var0.Math;
                    var0 = var1.round;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0) { // Original name: AnalyticsFeedItemSeenManager, environment: var1
            _fun71093: for (var _fun71093_ip = 0;;) switch (_fun71093_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var3 = var0.id;
                    var1 = var0.windowId;
                    var4 = var0.isPaused;
                    var7 = _closure1_slot3;
                    var6 = _closure2_slot0;
                    var0 = undefined;
                    var6 = var7.bind(var0)(var2, var6);
                    var6 = function() { // Environment: var5
                        _fun71094: for (var _fun71094_ip = 0;;) switch (_fun71094_ip) {
                            case 0:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var3 = 4;
                                var1 = var5[var3];
                                var0 = undefined;
                                var9 = var4.bind(var0)(var1);
                                var8 = var9.subscribe;
                                var2 = _closure3_slot0;
                                var7 = var2.handleFeedItemSeen;
                                var6 = 'ANALYTICS_FEED_ITEM_SEEN';
                                var6 = var8.bind(var9)(var6, var7);
                                var6 = var5[var3];
                                var9 = var4.bind(var0)(var6);
                                var8 = var9.subscribe;
                                var7 = var2.handleFeedItemUnseen;
                                var6 = 'ANALYTICS_FEED_ITEM_UNSEEN';
                                var6 = var8.bind(var9)(var6, var7);
                                var6 = var5[var3];
                                var9 = var4.bind(var0)(var6);
                                var8 = var9.subscribe;
                                var7 = var2.handleFeedItemFlush;
                                var6 = 'ANALYTICS_FEED_FLUSH';
                                var6 = var8.bind(var9)(var6, var7);
                                var6 = var5[var3];
                                var9 = var4.bind(var0)(var6);
                                var8 = var9.subscribe;
                                var7 = var2.handleAppStateUpdate;
                                var6 = 'APP_STATE_UPDATE';
                                var6 = var8.bind(var9)(var6, var7);
                                var3 = var5[var3];
                                var6 = var4.bind(var0)(var3);
                                var5 = var6.subscribe;
                                var4 = var2.handleWindowFocus;
                                var3 = 'WINDOW_FOCUS';
                                var3 = var5.bind(var6)(var3, var4);
                                var3 = var2.onInitialize;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun71094_ip = 212;
                                    continue _fun71094
                                }
                            case 198:
                                var2 = var3.call;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                            case 212:
                                return var0;
                        }
                    };
                    var2.initialize = var6;
                    var6 = function() { // Environment: var5
                        _fun71095: for (var _fun71095_ip = 0;;) switch (_fun71095_ip) {
                            case 0:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var4 = 4;
                                var2 = var6[var4];
                                var0 = undefined;
                                var10 = var5.bind(var0)(var2);
                                var9 = var10.unsubscribe;
                                var3 = _closure3_slot0;
                                var8 = var3.handleFeedItemSeen;
                                var7 = 'ANALYTICS_FEED_ITEM_SEEN';
                                var7 = var9.bind(var10)(var7, var8);
                                var7 = var6[var4];
                                var10 = var5.bind(var0)(var7);
                                var9 = var10.unsubscribe;
                                var8 = var3.handleFeedItemUnseen;
                                var7 = 'ANALYTICS_FEED_ITEM_UNSEEN';
                                var7 = var9.bind(var10)(var7, var8);
                                var7 = var6[var4];
                                var10 = var5.bind(var0)(var7);
                                var9 = var10.unsubscribe;
                                var8 = var3.handleFeedItemFlush;
                                var7 = 'ANALYTICS_FEED_FLUSH';
                                var7 = var9.bind(var10)(var7, var8);
                                var7 = var6[var4];
                                var10 = var5.bind(var0)(var7);
                                var9 = var10.unsubscribe;
                                var8 = var3.handleAppStateUpdate;
                                var7 = 'APP_STATE_UPDATE';
                                var7 = var9.bind(var10)(var7, var8);
                                var4 = var6[var4];
                                var7 = var5.bind(var0)(var4);
                                var6 = var7.unsubscribe;
                                var5 = var3.handleWindowFocus;
                                var4 = 'WINDOW_FOCUS';
                                var4 = var6.bind(var7)(var4, var5);
                                var5 = var3.onTerminate;
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun71095_ip = 212;
                                    continue _fun71095
                                }
                            case 198:
                                var4 = var5.call;
                                var3 = _closure3_slot0;
                                var3 = var4.bind(var5)(var3);
                            case 212:
                                var3 = _closure3_slot0;
                                var2 = var3.maybeFlushSeenItems;
                                var1 = _closure1_slot5;
                                var1 = var1.IMMEDIATE;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var2.terminate = var6;
                    var6 = function(arg0) { // Environment: var5
                        _fun71096: for (var _fun71096_ip = 0;;) switch (_fun71096_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.id;
                                var2 = var0.force;
                                var1 = _closure3_slot0;
                                var1 = var1._id;
                                if (!(var1 === var3)) {
                                    _fun71096_ip = 46;
                                    continue _fun71096
                                }
                            case 31:
                                var1 = _closure3_slot0;
                                var0 = var1.maybeFlushSeenItems;
                                var0 = var0.bind(var1)(var2);
                            case 46:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.handleFeedItemFlush = var6;
                    var6 = function(arg0) { // Environment: var5
                        _fun71097: for (var _fun71097_ip = 0;;) switch (_fun71097_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.id;
                                var5 = var0.timestampMillis;
                                var2 = var0.feedItemId;
                                var0 = _closure3_slot0;
                                var0 = var0._id;
                                if (!(var3 === var0)) {
                                    _fun71097_ip = 126;
                                    continue _fun71097
                                }
                            case 37:
                                var0 = _closure3_slot0;
                                var3 = var0._paused;
                                var0 = _closure3_slot0;
                                if (var3) {
                                    _fun71097_ip = 110;
                                    continue _fun71097
                                }
                            case 54:
                                var3 = var0.getTrackedFeedItem;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.maybeMarkSeen;
                                var5 = var3.bind(var4)(var5);
                                var4 = var0.onFeedItemSeen;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun71097_ip = 126;
                                    continue _fun71097
                                }
                            case 92:
                                var3 = var4.call;
                                var1 = _closure3_slot0;
                                var1 = var3.bind(var4)(var1, var2, var5);
                                _fun71097_ip = 126;
                                continue _fun71097;
                            case 110:
                                var1 = var0._pausedFeedItemIds;
                                var0 = var1.add;
                                var0 = var0.bind(var1)(var2);
                            case 126:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.handleFeedItemSeen = var6;
                    var6 = function(arg0) { // Environment: var5
                        _fun71098: for (var _fun71098_ip = 0;;) switch (_fun71098_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.id;
                                var4 = var0.timestampMillis;
                                var5 = var0.feedItemId;
                                var1 = _closure3_slot0;
                                var1 = var1._id;
                                if (!(var2 === var1)) {
                                    _fun71098_ip = 142;
                                    continue _fun71098
                                }
                            case 37:
                                var1 = _closure3_slot0;
                                var1 = var1._paused;
                                if (!var1) {
                                    _fun71098_ip = 70;
                                    continue _fun71098
                                }
                            case 50:
                                var1 = _closure3_slot0;
                                var2 = var1._pausedFeedItemIds;
                                var1 = var2.delete;
                                var1 = var1.bind(var2)(var5);
                            case 70:
                                var1 = _closure3_slot0;
                                var2 = var1.getTrackedFeedItem;
                                var3 = var2.bind(var1)(var5);
                                var2 = var3.maybeMarkUnseen;
                                var4 = var2.bind(var3)(var4);
                                var3 = var1.onFeedItemUnseen;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun71098_ip = 128;
                                    continue _fun71098
                                }
                            case 112:
                                var2 = var3.call;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1, var5, var4);
                            case 128:
                                var1 = _closure3_slot0;
                                var0 = var1.maybeFlushSeenItems;
                                var0 = var0.bind(var1)();
                            case 142:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.handleFeedItemUnseen = var6;
                    var6 = function(arg0) { // Environment: var5
                        _fun71099: for (var _fun71099_ip = 0;;) switch (_fun71099_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = _closure3_slot0;
                                var2 = var2.trackedFeedItems;
                                var3 = var2[var1];
                                var2 = null;
                                if (!(var2 == var3)) {
                                    _fun71099_ip = 67;
                                    continue _fun71099
                                }
                            case 26:
                                var2 = _closure3_slot0;
                                var3 = var2.trackedFeedItems;
                                var2 = _closure1_slot6;
                                var4 = var2.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var5 = var4;
                                var2 = new var5[var2](var4);
                                var2 = var2 instanceof Object ? var2 : var4;
                                var3[var1] = var2;
                            case 67:
                                var0 = _closure3_slot0;
                                var0 = var0.trackedFeedItems;
                                var0 = var0[var1];
                                return var0;
                        }
                    };
                    var2.getTrackedFeedItem = var6;
                    var6 = function() { // Environment: var5
                        var0 = global;
                        var3 = var0.Object;
                        var2 = var3.keys;
                        var1 = _closure3_slot0;
                        var1 = var1.trackedFeedItems;
                        var3 = var2.bind(var3)(var1);
                        var2 = var0.Set;
                        var1 = var3.filter;
                        var0 = function(arg0) { // Environment: var0
                            _fun71101: for (var _fun71101_ip = 0;;) switch (_fun71101_ip) {
                                case 0:
                                    var0 = _closure3_slot0;
                                    var1 = var0.trackedFeedItems;
                                    var0 = arg0;
                                    var2 = var1[var0];
                                    var0 = null;
                                    var1 = var0 == var2;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun71101_ip = 41;
                                        continue _fun71101
                                    }
                                case 31:
                                    var1 = var2.isVisible;
                                    var0 = var1.bind(var2)();
                                case 41:
                                    return var0;
                            }
                        };
                        var4 = var1.bind(var3)(var0);
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2.getVisibleFeedItemIds = var6;
                    var6 = function(arg0) { // Environment: var5
                        _fun71102: for (var _fun71102_ip = 0;;) switch (_fun71102_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.state;
                                var0 = 'active';
                                var0 = var0 === var1;
                                if (!var0) {
                                    _fun71102_ip = 32;
                                    continue _fun71102
                                }
                            case 19:
                                var2 = _closure3_slot0;
                                var0 = var2._isReactNavigationFocused;
                            case 32:
                                if (!var0) {
                                    _fun71102_ip = 52;
                                    continue _fun71102
                                }
                            case 35:
                                var2 = _closure3_slot0;
                                var0 = var2.resume;
                                var0 = var0.bind(var2)();
                            case 52:
                                var0 = 'background';
                                if (!(var0 === var1)) {
                                    _fun71102_ip = 118;
                                    continue _fun71102
                                }
                            case 60:
                                var1 = _closure3_slot0;
                                var1 = var1._isReactNavigationFocused;
                                if (!var1) {
                                    _fun71102_ip = 90;
                                    continue _fun71102
                                }
                            case 76:
                                var2 = _closure3_slot0;
                                var1 = var2.pause;
                                var1 = var1.bind(var2)();
                            case 90:
                                var2 = _closure3_slot0;
                                var1 = var2.maybeFlushSeenItems;
                                var0 = _closure1_slot5;
                                var0 = var0.IMMEDIATE;
                                var0 = var1.bind(var2)(var0);
                            case 118:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.handleAppStateUpdate = var6;
                    var6 = function() { // Environment: var5
                        var1 = _closure3_slot0;
                        var0 = global;
                        var0 = var0.Set;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var3 = var2;
                        var0 = new var3[var0](var2);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var1._pausedFeedItemIds = var0;
                        var0 = false;
                        var1._paused = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var2.clearPausedFeedItemIds = var6;
                    var6 = function() { // Environment: var5
                        _fun71104: for (var _fun71104_ip = 0;;) switch (_fun71104_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1._paused;
                                if (var1) {
                                    _fun71104_ip = 63;
                                    continue _fun71104
                                }
                            case 16:
                                var1 = _closure3_slot0;
                                var0 = var1.getVisibleFeedItemIds;
                                var0 = var0.bind(var1)();
                                var3 = var0.forEach;
                                var2 = function(arg0) { // Environment: var2
                                    var2 = _closure3_slot0;
                                    var1 = var2.handleFeedItemUnseen;
                                    var0 = {};
                                    var3 = var2._id;
                                    var0.id = var3;
                                    var3 = arg0;
                                    var0.feedItemId = var3;
                                    var3 = global;
                                    var4 = var3.Date;
                                    var3 = var4.now;
                                    var3 = var3.bind(var4)();
                                    var0.timestampMillis = var3;
                                    var3 = 'ANALYTICS_FEED_ITEM_UNSEEN';
                                    var0.type = var3;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var2 = var3.bind(var0)(var2);
                                var2 = true;
                                var1._paused = var2;
                                var1._pausedFeedItemIds = var0;
                            case 63:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.pause = var6;
                    var6 = function() { // Environment: var5
                        _fun71106: for (var _fun71106_ip = 0;;) switch (_fun71106_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1._paused;
                                if (!var1) {
                                    _fun71106_ip = 63;
                                    continue _fun71106
                                }
                            case 16:
                                var1 = _closure3_slot0;
                                var0 = false;
                                var1._paused = var0;
                                var3 = var1._pausedFeedItemIds;
                                var2 = var3.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure3_slot0;
                                    var1 = var2.handleFeedItemSeen;
                                    var0 = {};
                                    var3 = var2._id;
                                    var0.id = var3;
                                    var3 = arg0;
                                    var0.feedItemId = var3;
                                    var3 = global;
                                    var4 = var3.Date;
                                    var3 = var4.now;
                                    var3 = var3.bind(var4)();
                                    var0.timestampMillis = var3;
                                    var3 = 'ANALYTICS_FEED_ITEM_SEEN';
                                    var0.type = var3;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var0);
                                var0 = var1.clearPausedFeedItemIds;
                                var0 = var0.bind(var1)();
                            case 63:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.resume = var6;
                    var6 = function(arg0) { // Environment: var5
                        _fun71108: for (var _fun71108_ip = 0;;) switch (_fun71108_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = arg0;
                                var0._isReactNavigationFocused = var2;
                                var0 = var0._isReactNavigationFocused;
                                var1 = _closure3_slot0;
                                if (var0) {
                                    _fun71108_ip = 41;
                                    continue _fun71108
                                }
                            case 29:
                                var0 = var1.pause;
                                var0 = var0.bind(var1)();
                                _fun71108_ip = 51;
                                continue _fun71108;
                            case 41:
                                var0 = var1.resume;
                                var0 = var0.bind(var1)();
                            case 51:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.handleReactNavigationFocus = var6;
                    var5 = function(arg0) { // Environment: var5
                        _fun71109: for (var _fun71109_ip = 0;;) switch (_fun71109_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = _closure3_slot0;
                                var3 = var2._windowId;
                                var2 = var0.windowId;
                                if (!(var3 === var2)) {
                                    _fun71109_ip = 61;
                                    continue _fun71109
                                }
                            case 26:
                                var0 = var0.focused;
                                var1 = _closure3_slot0;
                                if (var0) {
                                    _fun71109_ip = 51;
                                    continue _fun71109
                                }
                            case 39:
                                var0 = var1.pause;
                                var0 = var0.bind(var1)();
                                _fun71109_ip = 61;
                                continue _fun71109;
                            case 51:
                                var0 = var1.resume;
                                var0 = var0.bind(var1)();
                            case 61:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.handleWindowFocus = var5;
                    var5 = {};
                    var2.trackedFeedItems = var5;
                    var2._id = var3;
                    var2._windowId = var1;
                    var1 = global;
                    var3 = var1.Set;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var3
                        }
                    });
                    var10 = var5;
                    var3 = new var10[var3](var9);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var2._pausedFeedItemIds = var3;
                    var3 = null;
                    var3 = var3 != var4;
                    if (!var3) {
                        _fun71093_ip = 286;
                        continue _fun71093
                    }
                case 283:
                    var3 = var4;
                case 286:
                    var2._paused = var3;
                    var3 = true;
                    var2._isReactNavigationFocused = var3;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2._lastFlushTimeMillis = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'maybeFlushSeenItems';
        var0.key = var4;
        var1 = function(arg0) { // Original name: value, environment: var1
            _fun71110: for (var _fun71110_ip = 0;;) switch (_fun71110_ip) {
                case 0:
                    var5 = arg0;
                    var7 = this;
                    var6 = null;
                    if (!(var6 == var5)) {
                        _fun71110_ip = 54;
                        continue _fun71110
                    }
                case 14:
                    var0 = global;
                    var2 = var0.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = var7._lastFlushTimeMillis;
                    var2 = var2 - var1;
                    var1 = 60000;
                    if (!(!(var2 < var1))) {
                        _fun71110_ip = 298;
                        continue _fun71110
                    }
                case 54:
                    var1 = _closure1_slot5;
                    var1 = var1.IMMEDIATE_WITH_COOLDOWN;
                    if (!(var5 === var1)) {
                        _fun71110_ip = 111;
                        continue _fun71110
                    }
                case 71:
                    var1 = global;
                    var8 = var1.Date;
                    var4 = var8.now;
                    var8 = var4.bind(var8)();
                    var4 = var7._lastFlushTimeMillis;
                    var8 = var8 - var4;
                    var4 = 3000;
                    if (!(!(var8 < var4))) {
                        _fun71110_ip = 280;
                        continue _fun71110
                    }
                case 111:
                    var4 = var7.createFlushSeenItemsFunction;
                    var4 = var4.bind(var7)(var5);
                    var _closure3_slot0 = var4;
                    if (!(var6 != var4)) {
                        _fun71110_ip = 260;
                        continue _fun71110
                    }
                case 133:
                    var4 = global;
                    var8 = var4.Date;
                    var6 = var8.now;
                    var6 = var6.bind(var8)();
                    var7._lastFlushTimeMillis = var6;
                    var6 = _closure1_slot5;
                    var6 = var6.IMMEDIATE;
                    if (!(var5 !== var6)) {
                        _fun71110_ip = 219;
                        continue _fun71110
                    }
                case 170:
                    var2 = _closure1_slot5;
                    var2 = var2.IMMEDIATE_WITH_COOLDOWN;
                    if (!(var5 !== var2)) {
                        _fun71110_ip = 219;
                        continue _fun71110
                    }
                case 184:
                    var6 = var4.Promise;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = global;
                        var3 = var0.setTimeout;
                        var2 = _closure1_slot2;
                        var0 = undefined;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun71117: for (var _fun71117_ip = 0;;) switch (_fun71117_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun71117_ip = 47;
                                            continue _fun71117
                                        }
                                    case 7:
                                        var1 = _closure3_slot0;
                                        var2 = undefined;
                                        var1 = var1.bind(var2)();
                                        SaveGenerator(address = 24);
                                    case 22:
                                        return var1;
                                    case 24:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun71117_ip = 44;
                                            continue _fun71117
                                        }
                                    case 30:
                                        var3 = _closure4_slot0;
                                        var3 = var3.bind(var2)();
                                        return var2;
                                    case 44:
                                        return var1;
                                    case 47:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var2 = var2.bind(var0)(var1);
                        var1 = 100;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var10 = var5;
                    var2 = new var10[var6](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var5;
                    _fun71110_ip = 258;
                    continue _fun71110;
                case 219:
                    var5 = var4.Promise;
                    var4 = function() { // Environment: var3
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun71113: for (var _fun71113_ip = 0;;) switch (_fun71113_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun71113_ip = 43;
                                            continue _fun71113
                                        }
                                    case 7:
                                        var1 = _closure3_slot0;
                                        var2 = undefined;
                                        var1 = var1.bind(var2)();
                                        SaveGenerator(address = 24);
                                    case 22:
                                        return var1;
                                    case 24:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun71113_ip = 40;
                                            continue _fun71113
                                        }
                                    case 30:
                                        var3 = arg0;
                                        var3 = var3.bind(var2)();
                                        return var2;
                                    case 40:
                                        return var1;
                                    case 43:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var3 = undefined;
                    var9 = var4.bind(var3)();
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var10 = var4;
                    var3 = new var10[var5](var9, var8);
                    var2 = var3 instanceof Object ? var3 : var4;
                case 258:
                    _fun71110_ip = 278;
                    continue _fun71110;
                case 260:
                    var3 = global;
                    var4 = var3.Promise;
                    var3 = var4.resolve;
                    var2 = var3.bind(var4)();
                case 278:
                    return var2;
                case 280:
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var1 = var1.bind(var2)();
                    return var1;
                case 298:
                    var1 = var0.Promise;
                    var0 = var1.resolve;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var6 = 5;
    var7 = var7[var6];
    var6 = arg1;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/AnalyticsFeedItemSeenManager.tsx';
    var6 = var7.bind(var8)(var6);
    var2.AnalyticsFeedTypes = var5;
    var2.ForceFlushType = var4;
    var2.TrackedFeedItem = var3;
    var2.AnalyticsFeedItemSeenManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 44, 806, 2]);