// utils/AnalyticsFeedItemSeenManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var0 = function arg0, arg1() {
        _fun71266: for (var _fun71266_ip = 0;;) switch (_fun71266_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun71266_ip = 46;
                    continue _fun71266
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun71266_ip = 55;
                    continue _fun71266
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun71266_ip = 345;
                    continue _fun71266
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun71266_ip = 323;
                    continue _fun71266
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun71266_ip = 283;
                    continue _fun71266
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun71266_ip = 270;
                    continue _fun71266
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
                    _fun71266_ip = 163;
                    continue _fun71266
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun71266_ip = 179;
                    continue _fun71266
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun71266_ip = 249;
                    continue _fun71266
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun71266_ip = 249;
                    continue _fun71266
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun71266_ip = 234;
                    continue _fun71266
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun71266_ip = 247;
                    continue _fun71266
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun71266_ip = 265;
                continue _fun71266;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun71266_ip = 283;
                continue _fun71266;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun71266_ip = 323;
                    continue _fun71266
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
                    _fun71266_ip = 330;
                    continue _fun71266
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun71267: for (var _fun71267_ip = 0;;) switch (_fun71267_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun71267_ip = 56;
                                continue _fun71267
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
                            _fun71267_ip = 67;
                            continue _fun71267;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun71268: for (var _fun71268_ip = 0;;) switch (_fun71268_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun71268_ip = 23;
                    continue _fun71268
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun71268_ip = 33;
                    continue _fun71268
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
                    _fun71268_ip = 70;
                    continue _fun71268
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun71268_ip = 55;
                    continue _fun71268
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
        var2 = function() {
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
        var1 = function arg0() {
            _fun71271: for (var _fun71271_ip = 0;;) switch (_fun71271_ip) {
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
                        _fun71271_ip = 50;
                        continue _fun71271
                    }
                case 40:
                    var2 = var2.endTimeMillis;
                    var0 = var3 != var2;
                case 50:
                    if (!var0) {
                        _fun71271_ip = 81;
                        continue _fun71271
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
        var5 = function arg0() {
            _fun71272: for (var _fun71272_ip = 0;;) switch (_fun71272_ip) {
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
                        _fun71272_ip = 50;
                        continue _fun71272
                    }
                case 40:
                    var1 = var2.endTimeMillis;
                    var0 = var3 == var1;
                case 50:
                    if (!var0) {
                        _fun71272_ip = 64;
                        continue _fun71272
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
        var5 = function() {
            _fun71273: for (var _fun71273_ip = 0;;) switch (_fun71273_ip) {
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
                        _fun71273_ip = 48;
                        continue _fun71273
                    }
                case 42:
                    var0 = var3.startTimeMillis;
                case 48:
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun71273_ip = 74;
                        continue _fun71273
                    }
                case 55:
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun71273_ip = 70;
                        continue _fun71273
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
        var4 = function arg0() {
            _fun71274: for (var _fun71274_ip = 0;;) switch (_fun71274_ip) {
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
                        _fun71274_ip = 178;
                        continue _fun71274
                    }
                case 56:
                    var5 = var8.value;
                    var12 = var5.endTimeMillis;
                    if (!(var9 != var12)) {
                        _fun71274_ip = 93;
                        continue _fun71274
                    }
                case 71:
                    var13 = var5.endTimeMillis;
                    var12 = var5.startTimeMillis;
                    var12 = var13 - var12;
                    var12 = var6 + var12;
                    _fun71274_ip = 157;
                    continue _fun71274;
                case 93:
                    if (var11) {
                        _fun71274_ip = 111;
                        continue _fun71274
                    }
                case 96:
                    var13 = var1.push;
                    var13 = var13.bind(var1)(var5);
                    var12 = var6;
                    _fun71274_ip = 157;
                    continue _fun71274;
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
                        _fun71274_ip = 56;
                        continue _fun71274
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
        var2 = function arg0() {
            _fun71276: for (var _fun71276_ip = 0;;) switch (_fun71276_ip) {
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
                        _fun71277: for (var _fun71277_ip = 0;;) switch (_fun71277_ip) {
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
                                    _fun71277_ip = 212;
                                    continue _fun71277
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
                        _fun71278: for (var _fun71278_ip = 0;;) switch (_fun71278_ip) {
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
                                    _fun71278_ip = 212;
                                    continue _fun71278
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
                        _fun71279: for (var _fun71279_ip = 0;;) switch (_fun71279_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.id;
                                var2 = var0.force;
                                var1 = _closure3_slot0;
                                var1 = var1._id;
                                if (!(var1 === var3)) {
                                    _fun71279_ip = 46;
                                    continue _fun71279
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
                        _fun71280: for (var _fun71280_ip = 0;;) switch (_fun71280_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.id;
                                var5 = var0.timestampMillis;
                                var2 = var0.feedItemId;
                                var0 = _closure3_slot0;
                                var0 = var0._id;
                                if (!(var3 === var0)) {
                                    _fun71280_ip = 126;
                                    continue _fun71280
                                }
                            case 37:
                                var0 = _closure3_slot0;
                                var3 = var0._paused;
                                var0 = _closure3_slot0;
                                if (var3) {
                                    _fun71280_ip = 110;
                                    continue _fun71280
                                }
                            case 54:
                                var3 = var0.getTrackedFeedItem;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.maybeMarkSeen;
                                var5 = var3.bind(var4)(var5);
                                var4 = var0.onFeedItemSeen;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun71280_ip = 126;
                                    continue _fun71280
                                }
                            case 92:
                                var3 = var4.call;
                                var1 = _closure3_slot0;
                                var1 = var3.bind(var4)(var1, var2, var5);
                                _fun71280_ip = 126;
                                continue _fun71280;
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
                        _fun71281: for (var _fun71281_ip = 0;;) switch (_fun71281_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.id;
                                var4 = var0.timestampMillis;
                                var5 = var0.feedItemId;
                                var1 = _closure3_slot0;
                                var1 = var1._id;
                                if (!(var2 === var1)) {
                                    _fun71281_ip = 142;
                                    continue _fun71281
                                }
                            case 37:
                                var1 = _closure3_slot0;
                                var1 = var1._paused;
                                if (!var1) {
                                    _fun71281_ip = 70;
                                    continue _fun71281
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
                                    _fun71281_ip = 128;
                                    continue _fun71281
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
                        _fun71282: for (var _fun71282_ip = 0;;) switch (_fun71282_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = _closure3_slot0;
                                var2 = var2.trackedFeedItems;
                                var3 = var2[var1];
                                var2 = null;
                                if (!(var2 == var3)) {
                                    _fun71282_ip = 67;
                                    continue _fun71282
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
                            _fun71284: for (var _fun71284_ip = 0;;) switch (_fun71284_ip) {
                                case 0:
                                    var0 = _closure3_slot0;
                                    var1 = var0.trackedFeedItems;
                                    var0 = arg0;
                                    var2 = var1[var0];
                                    var0 = null;
                                    var1 = var0 == var2;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun71284_ip = 41;
                                        continue _fun71284
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
                        _fun71285: for (var _fun71285_ip = 0;;) switch (_fun71285_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.state;
                                var0 = 'active';
                                var0 = var0 === var1;
                                if (!var0) {
                                    _fun71285_ip = 32;
                                    continue _fun71285
                                }
                            case 19:
                                var2 = _closure3_slot0;
                                var0 = var2._isReactNavigationFocused;
                            case 32:
                                if (!var0) {
                                    _fun71285_ip = 52;
                                    continue _fun71285
                                }
                            case 35:
                                var2 = _closure3_slot0;
                                var0 = var2.resume;
                                var0 = var0.bind(var2)();
                            case 52:
                                var0 = 'background';
                                if (!(var0 === var1)) {
                                    _fun71285_ip = 118;
                                    continue _fun71285
                                }
                            case 60:
                                var1 = _closure3_slot0;
                                var1 = var1._isReactNavigationFocused;
                                if (!var1) {
                                    _fun71285_ip = 90;
                                    continue _fun71285
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
                        _fun71287: for (var _fun71287_ip = 0;;) switch (_fun71287_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1._paused;
                                if (var1) {
                                    _fun71287_ip = 63;
                                    continue _fun71287
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
                        _fun71289: for (var _fun71289_ip = 0;;) switch (_fun71289_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1._paused;
                                if (!var1) {
                                    _fun71289_ip = 63;
                                    continue _fun71289
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
                        _fun71291: for (var _fun71291_ip = 0;;) switch (_fun71291_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = arg0;
                                var0._isReactNavigationFocused = var2;
                                var0 = var0._isReactNavigationFocused;
                                var1 = _closure3_slot0;
                                if (var0) {
                                    _fun71291_ip = 41;
                                    continue _fun71291
                                }
                            case 29:
                                var0 = var1.pause;
                                var0 = var0.bind(var1)();
                                _fun71291_ip = 51;
                                continue _fun71291;
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
                        _fun71292: for (var _fun71292_ip = 0;;) switch (_fun71292_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = _closure3_slot0;
                                var3 = var2._windowId;
                                var2 = var0.windowId;
                                if (!(var3 === var2)) {
                                    _fun71292_ip = 61;
                                    continue _fun71292
                                }
                            case 26:
                                var0 = var0.focused;
                                var1 = _closure3_slot0;
                                if (var0) {
                                    _fun71292_ip = 51;
                                    continue _fun71292
                                }
                            case 39:
                                var0 = var1.pause;
                                var0 = var0.bind(var1)();
                                _fun71292_ip = 61;
                                continue _fun71292;
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
                        _fun71276_ip = 286;
                        continue _fun71276
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
        var1 = function arg0() {
            _fun71293: for (var _fun71293_ip = 0;;) switch (_fun71293_ip) {
                case 0:
                    var5 = arg0;
                    var7 = this;
                    var6 = null;
                    if (!(var6 == var5)) {
                        _fun71293_ip = 54;
                        continue _fun71293
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
                        _fun71293_ip = 298;
                        continue _fun71293
                    }
                case 54:
                    var1 = _closure1_slot5;
                    var1 = var1.IMMEDIATE_WITH_COOLDOWN;
                    if (!(var5 === var1)) {
                        _fun71293_ip = 111;
                        continue _fun71293
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
                        _fun71293_ip = 280;
                        continue _fun71293
                    }
                case 111:
                    var4 = var7.createFlushSeenItemsFunction;
                    var4 = var4.bind(var7)(var5);
                    var _closure3_slot0 = var4;
                    if (!(var6 != var4)) {
                        _fun71293_ip = 260;
                        continue _fun71293
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
                        _fun71293_ip = 219;
                        continue _fun71293
                    }
                case 170:
                    var2 = _closure1_slot5;
                    var2 = var2.IMMEDIATE_WITH_COOLDOWN;
                    if (!(var5 !== var2)) {
                        _fun71293_ip = 219;
                        continue _fun71293
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
                                _fun71300: for (var _fun71300_ip = 0;;) switch (_fun71300_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun71300_ip = 47;
                                            continue _fun71300
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
                                            _fun71300_ip = 44;
                                            continue _fun71300
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
                    _fun71293_ip = 258;
                    continue _fun71293;
                case 219:
                    var5 = var4.Promise;
                    var4 = function() { // Environment: var3
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun71296: for (var _fun71296_ip = 0;;) switch (_fun71296_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun71296_ip = 43;
                                            continue _fun71296
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
                                            _fun71296_ip = 40;
                                            continue _fun71296
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
                    _fun71293_ip = 278;
                    continue _fun71293;
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