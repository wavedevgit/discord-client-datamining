// modules/icymi/useSharedICYMILogic.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SCROLL_EVENT_THROTTLE_MS;
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/useSharedICYMILogic.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useSharedICYMILogic, environment: var1
        var1 = arg0;
        var9 = var1.showDot;
        var15 = var1.notificationItem;
        var _closure2_slot0 = var15;
        var10 = _closure1_slot4;
        var3 = var10.useState;
        var1 = false;
        var1 = var3.bind(var10)(var1);
        var23 = _closure1_slot3;
        var16 = undefined;
        var22 = 2;
        var1 = var23.bind(var16)(var1, var22);
        var6 = 0;
        var5 = var1[var6];
        var21 = 1;
        var1 = var1[var21];
        var _closure2_slot1 = var1;
        var19 = _closure1_slot1;
        var17 = _closure1_slot2;
        var3 = 4;
        var3 = var17[var3];
        var3 = var19.bind(var16)(var3);
        var3 = var3.bind(var16)();
        var14 = var3.unreadItems;
        var _closure2_slot2 = var14;
        var12 = var3.readItems;
        var _closure2_slot3 = var12;
        var13 = var3.allUnreadItemsHydrated;
        var _closure2_slot4 = var13;
        var3 = _closure1_slot0;
        var18 = 5;
        var4 = var17[var18];
        var20 = var3.bind(var16)(var4);
        var11 = var20.useStateFromStores;
        var2 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var2;
        var7 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getVersion;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = new Array(0);
        var7 = var11.bind(var20)(var8, var7, var4);
        var _closure2_slot5 = var7;
        var4 = var17[var18];
        var20 = var3.bind(var16)(var4);
        var11 = var20.useStateFromStores;
        var8 = new Array(1);
        var8[0] = var2;
        var4 = function() { // Environment: var0
            _fun103895: for (var _fun103895_ip = 0;;) switch (_fun103895_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = var1.isFirstPageHydrated;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun103895_ip = 35;
                        continue _fun103895
                    }
                case 22:
                    var2 = _closure2_slot5;
                    var1 = 0;
                    var0 = var2 > var1;
                case 35:
                    var0 = !var0;
                    return var0;
            }
        };
        var8 = var11.bind(var20)(var8, var4);
        var _closure2_slot6 = var8;
        var20 = var10.useEffect;
        var11 = new Array(1);
        var11[0] = var7;
        var4 = function() { // Environment: var0
            _fun103896: for (var _fun103896_ip = 0;;) switch (_fun103896_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getLoadId;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun103896_ip = 75;
                        continue _fun103896
                    }
                case 23:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ICYMIAnalytics;
                    var1 = var2.trackFeedShown;
                    var0 = {};
                    var3 = 'gravity';
                    var0.homeSessionId = var3;
                    var0 = var1.bind(var2)(var0);
                case 75:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var20.bind(var10)(var4, var11);
        var4 = var17[var18];
        var25 = var3.bind(var16)(var4);
        var24 = var25.useStateFromStores;
        var20 = new Array(1);
        var20[0] = var2;
        var11 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.isRefreshing;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = new Array(0);
        var4 = var24.bind(var25)(var20, var11, var4);
        var _closure2_slot7 = var4;
        var11 = var17[var18];
        var26 = var3.bind(var16)(var11);
        var25 = var26.useStateFromStores;
        var24 = new Array(1);
        var24[0] = var2;
        var20 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.isHydrating;
            var0 = var0.bind(var1)();
            return var0;
        };
        var11 = new Array(0);
        var11 = var25.bind(var26)(var24, var20, var11);
        var _closure2_slot8 = var11;
        var24 = var10.useState;
        var20 = new Array(0);
        var20 = var24.bind(var10)(var20);
        var20 = var23.bind(var16)(var20, var22);
        var6 = var20[var6];
        var20 = var20[var21];
        var _closure2_slot9 = var20;
        var18 = var17[var18];
        var21 = var3.bind(var16)(var18);
        var20 = var21.useStateFromStoresObject;
        var18 = new Array(1);
        var18[0] = var2;
        var2 = function() { // Environment: var0
            var0 = {};
            var2 = _closure1_slot5;
            var1 = var2.getLoadId;
            var1 = var1.bind(var2)();
            var0.loadId = var1;
            var1 = var2.lastScrollEvent;
            var1 = var1.bind(var2)();
            var0.lastScrollEventTimestamp = var1;
            return var0;
        };
        var18 = var20.bind(var21)(var18, var2);
        var2 = var18.loadId;
        var22 = var18.lastScrollEventTimestamp;
        var _closure2_slot10 = var22;
        var20 = var6.filter;
        var18 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.item;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.NON_ELIGIBLE_SCROLL_ITEMS;
            var1 = var2.has;
            var0 = var0.data;
            var0 = var0.kind;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var21 = var20.bind(var6)(var18);
        var20 = var21.map;
        var18 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.item;
            var0 = var0.id;
            return var0;
        };
        var20 = var20.bind(var21)(var18);
        var18 = var20.pop;
        var20 = var18.bind(var20)();
        var _closure2_slot11 = var20;
        var18 = 8;
        var18 = var17[var18];
        var18 = var19.bind(var16)(var18);
        var21 = var18.bind(var16)(var20);
        var _closure2_slot12 = var21;
        var19 = var10.useEffect;
        var18 = new Array(6);
        var18[0] = var4;
        var18[1] = var22;
        var18[2] = var21;
        var18[3] = var20;
        var18[4] = var2;
        var18[5] = var8;
        var2 = function() { // Environment: var0
            _fun103902: for (var _fun103902_ip = 0;;) switch (_fun103902_ip) {
                case 0:
                    var1 = _closure2_slot7;
                    if (var1) {
                        _fun103902_ip = 157;
                        continue _fun103902
                    }
                case 13:
                    var1 = _closure2_slot6;
                    if (var1) {
                        _fun103902_ip = 157;
                        continue _fun103902
                    }
                case 23:
                    var1 = _closure2_slot12;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun103902_ip = 157;
                        continue _fun103902
                    }
                case 36:
                    var1 = _closure2_slot11;
                    if (!(var2 != var1)) {
                        _fun103902_ip = 157;
                        continue _fun103902
                    }
                case 44:
                    var2 = _closure2_slot11;
                    var1 = _closure2_slot12;
                    if (!(var2 !== var1)) {
                        _fun103902_ip = 157;
                        continue _fun103902
                    }
                case 56:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var5 = var1.bind(var2)();
                    var0 = _closure2_slot10;
                    var2 = var5 - var0;
                    var1 = _closure1_slot6;
                    if (!(var2 > var1)) {
                        _fun103902_ip = 157;
                        continue _fun103902
                    }
                case 92:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.gravityScrollEvent;
                    var1 = var1.bind(var4)(var5);
                    var1 = _closure1_slot0;
                    var0 = 6;
                    var0 = var3[var0];
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.ICYMIAnalytics;
                    var0 = var1.trackFeedFirstScrollStarted;
                    var0 = var0.bind(var1)();
                case 157:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var19.bind(var10)(var2, var18);
        var18 = var10.useCallback;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var1;
        var1 = function(arg0) { // Environment: var0
            _fun103903: for (var _fun103903_ip = 0;;) switch (_fun103903_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.viewableItems;
                    var2 = var4.some;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.item;
                        var0 = var0.data;
                        var1 = var0.kind;
                        var0 = 'end';
                        var0 = var0 === var1;
                        return var0;
                    };
                    var0 = var2.bind(var4)(var0);
                    if (!var0) {
                        _fun103903_ip = 48;
                        continue _fun103903
                    }
                case 32:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var0 = true;
                    var0 = var3.bind(var2)(var0);
                case 48:
                    var0 = var4.length;
                    var7 = 0;
                    if (!(var7 !== var0)) {
                        _fun103903_ip = 340;
                        continue _fun103903
                    }
                case 62:
                    var2 = _closure2_slot9;
                    var5 = undefined;
                    var2 = var2.bind(var5)(var4);
                    var9 = new Array(0);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 10;
                    var3 = var8[var3];
                    var6 = var6.bind(var5)(var3);
                    var3 = var6.getViewableFeedItemsArray;
                    var6 = var3.bind(var6)(var4);
                    var3 = global;
                    var8 = var3.Date;
                    var3 = var8.now;
                    var3 = var3.bind(var8)();
                    var10 = var6.length;
                    var8 = 1;
                    var11 = var10 - var8;
                    var10 = 11;
                    var8 = null;
                    if (!(var11 >= var7)) {
                        _fun103903_ip = 237;
                        continue _fun103903
                    }
                case 152:
                    var17 = var6[var11];
                    var12 = var3;
                    if (!(var8 != var17)) {
                        _fun103903_ip = 227;
                        continue _fun103903
                    }
                case 163:
                    var15 = var9.push;
                    var14 = {};
                    var13 = var17.id;
                    var14.id = var13;
                    var16 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var10];
                    var16 = var16.bind(var5)(var13);
                    var13 = var16.typeToString;
                    var13 = var13.bind(var16)(var17);
                    var14.type = var13;
                    var16 = parseFloat(var3);
                    var12 = var16 + 1;
                    var14.timestamp = var16;
                    var14 = var15.bind(var9)(var14);
                case 227:
                    var11 = var11 - 1;
                    var3 = var12;
                    if (var11 >= var7) {
                        _fun103903_ip = 152;
                        continue _fun103903
                    }
                case 237:
                    var3 = var9.length;
                    if (!(var3 > var7)) {
                        _fun103903_ip = 280;
                        continue _fun103903
                    }
                case 246:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 9;
                    var3 = var8[var3];
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.ackGravityItems;
                    var3 = true;
                    var3 = var7.bind(var8)(var9, var3);
                case 280:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.ICYMIAnalytics;
                    var2 = var3.trackItemShortImpression;
                    var5 = var6.map;
                    var1 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var0 = {};
                        var1 = var3.id;
                        var0.id = var1;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.typeToString;
                        var1 = var1.bind(var2)(var3);
                        var0.type = var1;
                        return var0;
                    };
                    var1 = var5.bind(var6)(var1);
                    var0 = _closure2_slot5;
                    var0 = var2.bind(var3)(var4, var1, var0);
                case 340:
                    var0 = undefined;
                    return var0;
            }
        };
        var20 = var18.bind(var10)(var1, var2);
        var _closure2_slot13 = var20;
        var18 = var10.useCallback;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function(arg0) { // Environment: var0
            _fun103906: for (var _fun103906_ip = 0;;) switch (_fun103906_ip) {
                case 0:
                    var1 = arg0;
                    var5 = var1.viewableItems;
                    var2 = var5.length;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun103906_ip = 177;
                        continue _fun103906
                    }
                case 25:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var2);
                    var2 = var7.getViewableFeedItemsArray;
                    var9 = var2.bind(var7)(var5);
                    var2 = 6;
                    var2 = var4[var2];
                    var2 = var6.bind(var3)(var2);
                    var8 = var2.ICYMIAnalytics;
                    var7 = var8.trackItemLongImpression;
                    var6 = var9.map;
                    var2 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var0 = {};
                        var1 = var3.id;
                        var0.id = var1;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.typeToString;
                        var1 = var1.bind(var2)(var3);
                        var0.type = var1;
                        return var0;
                    };
                    var6 = var6.bind(var9)(var2);
                    var2 = _closure2_slot5;
                    var2 = var7.bind(var8)(var5, var6, var2);
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.triggerItemsLongImpression;
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.item;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var2 = var1.NON_ELIGIBLE_SCROLL_ITEMS;
                        var1 = var2.has;
                        var0 = var0.data;
                        var0 = var0.kind;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun103909: for (var _fun103909_ip = 0;;) switch (_fun103909_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.item;
                                var1 = var0.index;
                                var0 = {};
                                var3 = var2.id;
                                var0.itemId = var3;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 10;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.itemToType;
                                var3 = var3.bind(var4)(var2);
                                var0.itemType = var3;
                                var3 = 'list';
                                var0.triggerType = var3;
                                var0.itemFeedIndex = var1;
                                var4 = var2.score;
                                var1 = null;
                                var5 = var1 != var4;
                                var3 = null;
                                if (!var5) {
                                    _fun103909_ip = 100;
                                    continue _fun103909
                                }
                            case 97:
                                var3 = var4;
                            case 100:
                                var0.itemScore = var3;
                                var2 = var2.channelType;
                                var3 = var1 != var2;
                                var1 = null;
                                if (!var3) {
                                    _fun103909_ip = 123;
                                    continue _fun103909
                                }
                            case 120:
                                var1 = var2;
                            case 123:
                                var0.itemChannelType = var1;
                                var1 = false;
                                var0.isInitiallyVisible = var1;
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                case 177:
                    var0 = undefined;
                    return var0;
            }
        };
        var19 = var18.bind(var10)(var1, var2);
        var _closure2_slot14 = var19;
        var18 = var10.useCallback;
        var2 = function(arg0) { // Environment: var0
            var0 = arg0;
            var6 = var0.viewableItems;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 9;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.startItemsDwell;
            var5 = var6.filter;
            var4 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.item;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.NON_ELIGIBLE_SCROLL_ITEMS;
                var1 = var2.has;
                var0 = var0.data;
                var0 = var0.kind;
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                return var0;
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.map;
            var1 = function(arg0) { // Environment: var1
                _fun103912: for (var _fun103912_ip = 0;;) switch (_fun103912_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.item;
                        var1 = var0.index;
                        var0 = {};
                        var3 = var2.id;
                        var0.itemId = var3;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 10;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.itemToType;
                        var3 = var3.bind(var4)(var2);
                        var0.itemType = var3;
                        var3 = 'list';
                        var0.triggerType = var3;
                        var0.itemFeedIndex = var1;
                        var4 = var2.score;
                        var1 = null;
                        var5 = var1 != var4;
                        var3 = null;
                        if (!var5) {
                            _fun103912_ip = 100;
                            continue _fun103912
                        }
                    case 97:
                        var3 = var4;
                    case 100:
                        var0.itemScore = var3;
                        var2 = var2.channelType;
                        var3 = var1 != var2;
                        var1 = null;
                        if (!var3) {
                            _fun103912_ip = 123;
                            continue _fun103912
                        }
                    case 120:
                        var1 = var2;
                    case 123:
                        var0.itemChannelType = var1;
                        var1 = false;
                        var0.isInitiallyVisible = var1;
                        return var0;
                }
            };
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = new Array(0);
        var1 = var18.bind(var10)(var2, var1);
        var _closure2_slot15 = var1;
        var18 = var10.useMemo;
        var2 = new Array(3);
        var2[0] = var20;
        var2[1] = var19;
        var2[2] = var1;
        var1 = function() { // Environment: var0
            var1 = {};
            var0 = {
                'waitForInteraction': false,
                'viewAreaCoveragePercentThreshold': 100,
                'minimumViewTime': 50
            };
            var1.viewabilityConfig = var0;
            var0 = _closure2_slot13;
            var1.onViewableItemsChanged = var0;
            var0 = new Array(3);
            var0[0] = var1;
            var1 = {};
            var3 = {
                'waitForInteraction': false,
                'viewAreaCoveragePercentThreshold': 50,
                'minimumViewTime': 1000
            };
            var1.viewabilityConfig = var3;
            var3 = _closure2_slot14;
            var1.onViewableItemsChanged = var3;
            var0[1] = var1;
            var1 = {};
            var3 = {
                'waitForInteraction': false,
                'viewAreaCoveragePercentThreshold': 50,
                'minimumViewTime': 50
            };
            var1.viewabilityConfig = var3;
            var2 = _closure2_slot15;
            var1.onViewableItemsChanged = var2;
            var0[2] = var1;
            return var0;
        };
        var1 = var18.bind(var10)(var1, var2);
        var19 = var10.useEffect;
        var18 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.openICYMITab;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var2 = var19.bind(var10)(var18, var2);
        var2 = 12;
        var2 = var17[var2];
        var3 = var3.bind(var16)(var2);
        var2 = var3.useICYMIReloadHandler;
        var3 = var2.bind(var3)(var9);
        var9 = var10.useMemo;
        var2 = new Array(6);
        var2[0] = var8;
        var2[1] = var15;
        var2[2] = var14;
        var2[3] = var13;
        var2[4] = var12;
        var2[5] = var11;
        var0 = function() { // Environment: var0
            _fun103915: for (var _fun103915_ip = 0;;) switch (_fun103915_ip) {
                case 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot6;
                    if (!var3) {
                        _fun103915_ip = 30;
                        continue _fun103915
                    }
                case 20:
                    var5 = _closure2_slot0;
                    var4 = null;
                    var3 = var4 != var5;
                case 30:
                    if (!var3) {
                        _fun103915_ip = 83;
                        continue _fun103915
                    }
                case 33:
                    var4 = _closure2_slot0;
                    var5 = var4.type;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var6 = var6[var4];
                    var4 = undefined;
                    var4 = var7.bind(var4)(var6);
                    var4 = var4.ICYMIItemTypes;
                    var4 = var4.CUSTOM_STATUS;
                    var3 = var5 === var4;
                case 83:
                    if (!var3) {
                        _fun103915_ip = 216;
                        continue _fun103915
                    }
                case 89:
                    var4 = var1.push;
                    var3 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var3.id = var6;
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var3.timestamp = var6;
                    var6 = {};
                    var7 = 'contentInventory';
                    var6.kind = var7;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 10;
                    var8 = var8[var7];
                    var7 = undefined;
                    var8 = var9.bind(var7)(var8);
                    var7 = var8.customStatusToContentInventoryEntry;
                    var7 = var7.bind(var8)(var5);
                    var7 = var7.activity;
                    var6.content = var7;
                    var3.data = var6;
                    var5 = var5.score;
                    var3.score = var5;
                    var5 = true;
                    var3.unread = var5;
                    var3 = var4.bind(var1)(var3);
                case 216:
                    var3 = _closure2_slot6;
                    if (var3) {
                        _fun103915_ip = 377;
                        continue _fun103915
                    }
                case 226:
                    var5 = _closure2_slot2;
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var2
                        _fun103916: for (var _fun103916_ip = 0;;) switch (_fun103916_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isItemNSFW;
                                var1 = var1.bind(var2)(var3);
                                if (var1) {
                                    _fun103916_ip = 59;
                                    continue _fun103916
                                }
                            case 42:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                            case 59:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot4;
                    if (!var3) {
                        _fun103915_ip = 292;
                        continue _fun103915
                    }
                case 254:
                    var4 = var1.push;
                    var3 = {
                        'id': 'end',
                        'timestamp': 0,
                        'unread': false
                    };
                    var6 = 'end';
                    var5 = {};
                    var5.kind = var6;
                    var3.data = var5;
                    var3 = var4.bind(var1)(var3);
                case 292:
                    var3 = _closure2_slot3;
                    var4 = var3.length;
                    var3 = 0;
                    if (!(var4 > var3)) {
                        _fun103915_ip = 328;
                        continue _fun103915
                    }
                case 307:
                    var4 = _closure2_slot3;
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var2
                        _fun103917: for (var _fun103917_ip = 0;;) switch (_fun103917_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isItemNSFW;
                                var1 = var1.bind(var2)(var3);
                                if (var1) {
                                    _fun103917_ip = 59;
                                    continue _fun103917
                                }
                            case 42:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                            case 59:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                case 328:
                    var0 = _closure2_slot8;
                    if (!var0) {
                        _fun103915_ip = 415;
                        continue _fun103915
                    }
                case 335:
                    var2 = var1.push;
                    var0 = {
                        'id': 'bottomLoading',
                        'timestamp': 0,
                        'unread': false
                    };
                    var4 = 'bottomLoading';
                    var3 = {};
                    var3.kind = var4;
                    var0.data = var3;
                    var0 = var2.bind(var1)(var0);
                    _fun103915_ip = 415;
                    continue _fun103915;
                case 377:
                    var2 = var1.push;
                    var0 = {
                        'id': 'loading',
                        'timestamp': 0,
                        'unread': false
                    };
                    var4 = 'loading';
                    var3 = {};
                    var3.kind = var4;
                    var0.data = var3;
                    var0 = var2.bind(var1)(var0);
                case 415:
                    var0 = {};
                    var0.data = var1;
                    var1 = new Array(0);
                    var0.stickyHeaderIndices = var1;
                    return var0;
            }
        };
        var0 = var9.bind(var10)(var0, var2);
        var9 = var0.data;
        var2 = var0.stickyHeaderIndices;
        var0 = {};
        var0.data = var9;
        var0.loading = var8;
        var0.version = var7;
        var0.visibleItemIds = var6;
        var0.endVisible = var5;
        var0.isRefreshing = var4;
        var0.handleOnRefresh = var3;
        var0.stickyHeaderIndices = var2;
        var0.viewabilityConfigCallbackPairs = var1;
        return var0;
    };
    var2.useSharedICYMILogic = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 8822, 13487, 13522, 566, 8836, 8833, 7712, 8832, 8831, 6583, 13523, 2]);