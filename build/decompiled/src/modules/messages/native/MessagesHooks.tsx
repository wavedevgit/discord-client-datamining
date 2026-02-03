// modules/messages/native/MessagesHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.findNodeHandle;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.updateShouldShowJumpToPresentButton;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/MessagesHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var0 = {};
            var _closure3_slot0 = var0;
            var3 = _closure2_slot0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun77490: for (var _fun77490_ip = 0;;) switch (_fun77490_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.author;
                        var2 = null;
                        var1 = var2 != var1;
                        if (!var1) {
                            _fun77490_ip = 28;
                            continue _fun77490
                        }
                    case 18:
                        var3 = var0.activity;
                        var1 = var2 != var3;
                    case 28:
                        if (!var1) {
                            _fun77490_ip = 53;
                            continue _fun77490
                        }
                    case 31:
                        var1 = _closure3_slot0;
                        var0 = var0.author;
                        var0 = var0.id;
                        var1[var0] = var2;
                    case 53:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5 = var4.bind(var5)(var2, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var1 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.mapValues;
            var1 = _closure2_slot1;
            var0 = function(arg0, arg1) { // Environment: var0
                var2 = _closure1_slot7;
                var1 = var2.getPrimaryActivity;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useMessageAuthorActivities = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot4;
        var4 = var3.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var2
                }
            });
            var6 = var3;
            var2 = new var6[var2](var5);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure3_slot0 = var2;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun77495: for (var _fun77495_ip = 0;;) switch (_fun77495_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.applicationId;
                        var3 = null;
                        var1 = var3 != var1;
                        if (!var1) {
                            _fun77495_ip = 26;
                            continue _fun77495
                        }
                    case 17:
                        var2 = var0.application;
                        var1 = var3 == var2;
                    case 26:
                        if (!var1) {
                            _fun77495_ip = 51;
                            continue _fun77495
                        }
                    case 29:
                        var2 = _closure3_slot0;
                        var1 = var2.add;
                        var0 = var0.applicationId;
                        var0 = var1.bind(var2)(var0);
                    case 51:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = var0.Array;
            var0 = var1.from;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var4 = var4.bind(var3)(var1, var2);
        var _closure2_slot1 = var4;
        var2 = var3.useRef;
        var1 = new Array(0);
        var1 = var2.bind(var3)(var1);
        var _closure2_slot2 = var1;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun77496: for (var _fun77496_ip = 0;;) switch (_fun77496_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.areArraysShallowEqual;
                    var4 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    var2 = var5.bind(var6)(var4, var2);
                    if (var2) {
                        _fun77496_ip = 172;
                        continue _fun77496
                    }
                case 56:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 8;
                    var2 = var9[var2];
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.fetchApplications;
                    var2 = 6;
                    var2 = var9[var2];
                    var4 = var4.bind(var0)(var2);
                    var2 = _closure2_slot1;
                    var7 = var4.bind(var0)(var2);
                    var4 = var7.filter;
                    var8 = _closure1_slot0;
                    var3 = 9;
                    var3 = var9[var3];
                    var3 = var8.bind(var0)(var3);
                    var3 = var3.isNotNullish;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.uniq;
                    var4 = var3.bind(var4)();
                    var3 = var4.value;
                    var4 = var3.bind(var4)();
                    var3 = false;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot2;
                    var1.current = var2;
                case 172:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useFetchMessageApplications = var3;
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.messages;
        var _closure2_slot0 = var2;
        var2 = var1.isMessagesReady;
        var _closure2_slot1 = var2;
        var2 = var1.oldestUnreadMessageId;
        var _closure2_slot2 = var2;
        var5 = var1.channelId;
        var _closure2_slot3 = var5;
        var4 = var1.screenIndex;
        var _closure2_slot4 = var4;
        var2 = var1.updateRows;
        var _closure2_slot5 = var2;
        var1 = var1.scrollToMessageId;
        var _closure2_slot6 = var1;
        var3 = _closure1_slot4;
        var6 = var3.useEffect;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var3 = var5[var1];
            var0 = undefined;
            var8 = var2.bind(var0)(var3);
            var7 = var8.syncMessageDisplay;
            var6 = {};
            var4 = _closure2_slot0;
            var6.messages = var4;
            var3 = _closure2_slot1;
            var6.isMessagesReady = var3;
            var3 = _closure2_slot2;
            var6.oldestUnreadMessageId = var3;
            var3 = _closure2_slot3;
            var6.channelId = var3;
            var10 = _closure2_slot4;
            var6.screenIndex = var10;
            var10 = _closure2_slot5;
            var6.updateRows = var10;
            var9 = _closure2_slot6;
            var6.scrollToMessageId = var9;
            var6 = var7.bind(var8)(var6);
            var1 = var5[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.recordTimings;
            var1 = var1.bind(var2)(var3, var4);
            return var0;
        };
        var1 = new Array(0);
        var1 = var6.bind(var3)(var2, var1);
        var2 = var3.useEffect;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                var4 = _closure1_slot6;
                var3 = _closure2_slot3;
                var2 = _closure2_slot4;
                var0 = undefined;
                var1 = false;
                var1 = var4.bind(var0)(var3, var2, var1);
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useMessagesLifecycle = var3;
    var3 = function() {
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var2 = {
            'animated': false,
            'hasHandledScroll': false,
            'isAtBottom': false,
            'isNearBottom': false,
            'isNearTop': false,
            'decelerating': false,
            'dragging': false,
            'hasMoreMessagesAfterForLastUpdate': false,
            '_loaded': false
        };
        var5 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var5, var0);
        var0 = 0;
        var2 = var3[var0];
        var0 = 1;
        var0 = var3[var0];
        var _closure2_slot0 = var0;
        var0 = new Array(2);
        var0[0] = var2;
        var3 = var4.useCallback;
        var2 = function(arg0) { // Environment: var1
            var0 = arg0;
            var _closure3_slot0 = var0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                var0 = {};
                var2 = arg0;
                var3 = var0;
                var1 = copyDataProperties(var3, var2);
                var2 = _closure3_slot0;
                var3 = var0;
                var1 = copyDataProperties(var3, var2);
                return var0;
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var0[1] = var1;
        return var0;
    };
    var2.useScrollState = var3;
    var3 = function arg0, arg1() {
        var5 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var0;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var0;
        var0 = function() { // Environment: var1
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var5 = function() { // Environment: var0
                _fun77506: for (var _fun77506_ip = 0;;) switch (_fun77506_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        var2 = var0.current;
                        var0 = null;
                        if (!(var0 !== var2)) {
                            _fun77506_ip = 41;
                            continue _fun77506
                        }
                    case 18:
                        var3 = _closure1_slot5;
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var2);
                    case 41:
                        return var0;
                }
            };
            var4 = function(arg0) { // Environment: var0
                var2 = _closure2_slot1;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var6 = var1;
            var0 = new var6[var3](var5, var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0 = var3.bind(var4)(var0, var2);
        var _closure2_slot2 = var0;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var1 = _closure2_slot2;
                var0 = var1.cleanup;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useChatUpdatesQueue = var3;
    var1 = function() {
        var9 = _closure1_slot4;
        var0 = var9.useState;
        var8 = false;
        var0 = var0.bind(var9)(var8);
        var7 = _closure1_slot3;
        var6 = undefined;
        var2 = 2;
        var0 = var7.bind(var6)(var0, var2);
        var4 = 0;
        var5 = var0[var4];
        var3 = 1;
        var1 = var0[var3];
        var0 = var9.useState;
        var0 = var0.bind(var9)(var8);
        var2 = var7.bind(var6)(var0, var2);
        var0 = {};
        var0.shouldForceRender = var5;
        var4 = var2[var4];
        var0.hasJumpedToOriginalPost = var4;
        var2 = var2[var3];
        var0.setHasJumpedToOriginalPost = var2;
        var0.setShouldForceRender = var1;
        return var0;
    };
    var2.useMessagesState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7894, 3610, 566, 22, 628, 5344, 1304, 9230, 9855, 2]);