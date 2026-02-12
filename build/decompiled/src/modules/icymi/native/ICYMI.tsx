// modules/icymi/native/ICYMI.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 33;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.hydrateNextPage;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun104062: for (var _fun104062_ip = 0;;) switch (_fun104062_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.inNestedNavigator;
                var0 = _closure1_slot18;
                var3 = undefined;
                var23 = var0.bind(var3)();
                var11 = _closure1_slot1;
                var30 = _closure1_slot2;
                var0 = 39;
                var0 = var30[var0];
                var0 = var11.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var4 = var0.height;
                var32 = var0.width;
                var _closure2_slot0 = var32;
                var0 = 40;
                var0 = var30[var0];
                var0 = var11.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var2 = var0.top;
                var29 = _closure1_slot0;
                var6 = 41;
                var0 = var30[var6];
                var1 = var29.bind(var3)(var0);
                var0 = var1.useIsFocused;
                var15 = var0.bind(var1)();
                var _closure2_slot1 = var15;
                var5 = _closure1_slot4;
                var1 = var5.useLayoutEffect;
                var0 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 42;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackAppUIViewed;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = var1.bind(var5)(var0);
                var0 = 43;
                var1 = var30[var0];
                var10 = var29.bind(var3)(var1);
                var8 = var10.useStateFromStores;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var13
                    var0 = _closure1_slot7;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var5 = var8.bind(var10)(var5, var1);
                var _closure2_slot2 = var5;
                var1 = var30[var0];
                var14 = var29.bind(var3)(var1);
                var12 = var14.useStateFromStores;
                var1 = _closure1_slot11;
                var10 = new Array(1);
                var10[0] = var1;
                var8 = function() { // Environment: var13
                    var1 = _closure1_slot11;
                    var0 = var1.notificationItem;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var12 = var12.bind(var14)(var10, var8, var1);
                var1 = 44;
                var1 = var30[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var14 = var1.showDot;
                var16 = _closure1_slot4;
                var10 = var16.useEffect;
                var8 = new Array(1);
                var8[0] = var15;
                var1 = function() { // Environment: var13
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setTabFocused;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var10.bind(var16)(var1, var8);
                var1 = 45;
                var1 = var30[var1];
                var10 = var29.bind(var3)(var1);
                var8 = var10.useSharedICYMILogic;
                var1 = {};
                var1.showDot = var14;
                var1.notificationItem = var12;
                var8 = var8.bind(var10)(var1);
                var20 = var8.data;
                var _closure2_slot3 = var20;
                var14 = var8.loading;
                var10 = var8.version;
                var1 = var8.visibleItemIds;
                var _closure2_slot4 = var1;
                var28 = var8.endVisible;
                var _closure2_slot5 = var28;
                var24 = var8.isRefreshing;
                var27 = var8.handleOnRefresh;
                var _closure2_slot6 = var27;
                var17 = var8.stickyHeaderIndices;
                var16 = var8.viewabilityConfigCallbackPairs;
                var8 = 46;
                var8 = var30[var8];
                var12 = var29.bind(var3)(var8);
                var8 = var12.useICYMIEmptyLoadingAnalytics;
                var8 = var8.bind(var12)(var14, var15);
                var8 = 47;
                var8 = var30[var8];
                var15 = var29.bind(var3)(var8);
                var12 = var15.useGetDismissibleContent;
                var8 = 48;
                var8 = var30[var8];
                var8 = var29.bind(var3)(var8);
                var8 = var8.DismissibleContent;
                var18 = var8.ICYMI_ALPHA_UPSELL;
                var8 = new Array(1);
                var8[0] = var18;
                var15 = var12.bind(var15)(var8);
                var12 = _closure1_slot3;
                var8 = 2;
                var8 = var12.bind(var3)(var15, var8);
                var25 = 0;
                var22 = var8[var25];
                var _closure2_slot7 = var22;
                var15 = 1;
                var21 = var8[var15];
                var _closure2_slot8 = var21;
                var8 = var30[var0];
                var19 = var29.bind(var3)(var8);
                var18 = var19.useStateFromStores;
                var8 = _closure1_slot9;
                var12 = new Array(1);
                var12[0] = var8;
                var8 = function() { // Environment: var13
                    var1 = _closure1_slot9;
                    var0 = var1.getGuildCount;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var18.bind(var19)(var12, var8);
                var _closure2_slot9 = var8;
                var19 = _closure1_slot4;
                var18 = var19.useEffect;
                var12 = new Array(3);
                var12[0] = var22;
                var12[1] = var21;
                var12[2] = var8;
                var8 = function() { // Environment: var13
                    _fun104068: for (var _fun104068_ip = 0;;) switch (_fun104068_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun104068_ip = 87;
                                continue _fun104068
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 21;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.pushICYMIInfoModal;
                            var3 = {};
                            var7 = _closure2_slot9;
                            var6 = _closure1_slot12;
                            var6 = var7 <= var6;
                            var3.extendedOnboarding = var6;
                            var3 = var4.bind(var5)(var3);
                            var1 = _closure2_slot8;
                            var0 = _closure1_slot13;
                            var0 = var0.USER_DISMISS;
                            var0 = var1.bind(var2)(var0);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var18.bind(var19)(var8, var12);
                var19 = _closure1_slot4;
                var18 = var19.useEffect;
                var12 = new Array(1);
                var12[0] = var28;
                var8 = function() { // Environment: var13
                    _fun104069: for (var _fun104069_ip = 0;;) switch (_fun104069_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            if (!var0) {
                                _fun104069_ip = 29;
                                continue _fun104069
                            }
                        case 10:
                            var2 = _closure1_slot11;
                            var1 = var2.hasOpenedEnoughTimes;
                            var0 = var1.bind(var2)();
                        case 29:
                            if (!var0) {
                                _fun104069_ip = 112;
                                continue _fun104069
                            }
                        case 32:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var2 = 17;
                            var2 = var0[var2];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.openLazy;
                            var2 = _closure1_slot0;
                            var1 = 19;
                            var1 = var0[var1];
                            var2 = var2.bind(var5)(var1);
                            var1 = 49;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var5)(var1, var0);
                            var1 = 'ICYMIFeedbackSheet';
                            var0 = {};
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 112:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var18.bind(var19)(var8, var12);
                var18 = _closure1_slot4;
                var12 = var18.useRef;
                var8 = null;
                var22 = var12.bind(var18)(var8);
                var _closure2_slot10 = var22;
                var18 = _closure1_slot4;
                var12 = var18.useRef;
                var8 = {};
                var19 = function() {
                    _fun104070: for (var _fun104070_ip = 0;;) switch (_fun104070_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun104070_ip = 50;
                                continue _fun104070
                            }
                        case 18:
                            var1 = var2.scrollToOffset;
                            var0 = {};
                            var4 = 0;
                            var0.offset = var4;
                            var3 = _closure2_slot2;
                            var3 = !var3;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.scrollToTop = var19;
                var12 = var12.bind(var18)(var8);
                var _closure2_slot11 = var12;
                var6 = var30[var6];
                var8 = var29.bind(var3)(var6);
                var6 = var8.useScrollToTop;
                var6 = var6.bind(var8)(var12);
                var6 = var30[var0];
                var18 = var29.bind(var3)(var6);
                var12 = var18.useStateFromStores;
                var6 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var13
                    var1 = _closure1_slot10;
                    var0 = var1.getDoubleTapBehavior;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var12.bind(var18)(var8, var6);
                var _closure2_slot12 = var19;
                var6 = 50;
                var6 = var30[var6];
                var8 = var29.bind(var3)(var6);
                var6 = var8.useNavigation;
                var6 = var6.bind(var8)();
                var18 = _closure1_slot4;
                var12 = var18.useEffect;
                var8 = new Array(3);
                var8[0] = var19;
                var8[1] = var6;
                var8[2] = var5;
                var6 = function() { // Environment: var13
                    _fun104072: for (var _fun104072_ip = 0;;) switch (_fun104072_ip) {
                        case 0:
                            var4 = _closure2_slot12;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 51;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.GravityICYMIDoubleTapBehavior;
                            var2 = var2.DEFAULT;
                            if (!(var4 !== var2)) {
                                _fun104072_ip = 76;
                                continue _fun104072
                            }
                        case 50:
                            var4 = _closure2_slot11;
                            var2 = {};
                            var5 = function() {
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 52;
                                var3 = var1[var0];
                                var0 = undefined;
                                var6 = var4.bind(var0)(var3);
                                var5 = var6.pushLazy;
                                var3 = _closure1_slot0;
                                var2 = 19;
                                var2 = var1[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = 53;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var10 = var3.bind(var0)(var2, var1);
                                var3 = {};
                                var1 = 'modal';
                                var3.presentation = var1;
                                var9 = {};
                                var8 = 'for-later-modal';
                                var11 = var6;
                                var7 = var3;
                                var1 = var11[var5](var10, var9, var8, var7, var6);
                                return var0;
                            };
                            var2.scrollToTop = var5;
                            var4.current = var2;
                            _fun104072_ip = 100;
                            continue _fun104072;
                        case 76:
                            var2 = _closure2_slot11;
                            var1 = {};
                            var3 = function() {
                                _fun104073: for (var _fun104073_ip = 0;;) switch (_fun104073_ip) {
                                    case 0:
                                        var0 = _closure2_slot10;
                                        var2 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun104073_ip = 50;
                                            continue _fun104073
                                        }
                                    case 18:
                                        var1 = var2.scrollToOffset;
                                        var0 = {};
                                        var4 = 0;
                                        var0.offset = var4;
                                        var3 = _closure2_slot2;
                                        var3 = !var3;
                                        var0.animated = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 50:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.scrollToTop = var3;
                            var2.current = var1;
                        case 100:
                            return var0;
                    }
                };
                var6 = var12.bind(var18)(var6, var8);
                var12 = _closure1_slot4;
                var8 = var12.useCallback;
                var6 = new Array(2);
                var6[0] = var22;
                var6[1] = var5;
                var5 = function() { // Environment: var13
                    _fun104075: for (var _fun104075_ip = 0;;) switch (_fun104075_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun104075_ip = 50;
                                continue _fun104075
                            }
                        case 18:
                            var1 = var2.scrollToOffset;
                            var0 = {};
                            var4 = 0;
                            var0.offset = var4;
                            var3 = _closure2_slot2;
                            var3 = !var3;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var8.bind(var12)(var5, var6);
                var _closure2_slot13 = var5;
                var4 = var4 - var2;
                var2 = 32;
                var5 = var4 - var2;
                var2 = 54;
                var2 = var30[var2];
                var4 = var29.bind(var3)(var2);
                var2 = var4.useMainTabsHeight;
                var4 = var2.bind(var4)();
                var2 = 24;
                var2 = var5 - var2;
                var33 = var2 - var4;
                var _closure2_slot14 = var33;
                var5 = _closure1_slot14;
                var2 = 55;
                var2 = var30[var2];
                var4 = var11.bind(var3)(var2);
                var2 = {};
                var2.visible = var28;
                var2 = var5.bind(var3)(var4, var2);
                var _closure2_slot15 = var2;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var28;
                var1 = function(arg0) { // Environment: var13
                    _fun104076: for (var _fun104076_ip = 0;;) switch (_fun104076_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.item;
                            var _closure3_slot0 = var5;
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'message';
                            if (!(var0 !== var1)) {
                                _fun104076_ip = 523;
                                continue _fun104076
                            }
                        case 35:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'contentInventory';
                            if (!(var0 !== var1)) {
                                _fun104076_ip = 432;
                                continue _fun104076
                            }
                        case 58:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'loading';
                            if (!(var0 !== var1)) {
                                _fun104076_ip = 423;
                                continue _fun104076
                            }
                        case 79:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'bottomLoading';
                            if (!(var0 !== var1)) {
                                _fun104076_ip = 414;
                                continue _fun104076
                            }
                        case 102:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'end';
                            if (!(var0 !== var1)) {
                                _fun104076_ip = 405;
                                continue _fun104076
                            }
                        case 123:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'guildEvent';
                            if (!(var0 !== var1)) {
                                _fun104076_ip = 347;
                                continue _fun104076
                            }
                        case 144:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'recommendedGuilds';
                            if (!(var0 !== var1)) {
                                _fun104076_ip = 335;
                                continue _fun104076
                            }
                        case 167:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'icymiHeader';
                            if (!(var0 !== var1)) {
                                _fun104076_ip = 326;
                                continue _fun104076
                            }
                        case 190:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'forumThread';
                            if (!(var0 === var1)) {
                                _fun104076_ip = 322;
                                continue _fun104076
                            }
                        case 210:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 61;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ICYMIForumThreadRow;
                            var0 = {};
                            var4 = var5.data;
                            var4 = var4.message;
                            var0.message = var4;
                            var4 = var5.data;
                            var4 = var4.threadChannel;
                            var0.channel = var4;
                            var8 = _closure2_slot4;
                            var6 = var8.find;
                            var4 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var0 = var0.item;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var6 = var6.bind(var8)(var4);
                            var4 = null;
                            var4 = var4 != var6;
                            var0.visible = var4;
                            var4 = var3.bind(var2)(var1, var0);
                            _fun104076_ip = 764;
                            continue _fun104076;
                        case 322:
                            var0 = null;
                            return var0;
                        case 326:
                            var0 = _closure1_slot30;
                            return var0;
                        case 335:
                            var4 = _closure1_slot29;
                            _fun104076_ip = 764;
                            continue _fun104076;
                        case 347:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 60;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var6 = var5.data;
                            var6 = var6.eventId;
                            var0.eventId = var6;
                            var4 = var3.bind(var2)(var1, var0);
                            _fun104076_ip = 764;
                            continue _fun104076;
                        case 405:
                            var0 = _closure2_slot15;
                            return var0;
                        case 414:
                            var0 = _closure1_slot28;
                            return var0;
                        case 423:
                            var0 = _closure1_slot27;
                            return var0;
                        case 432:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 59;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var9 = _closure2_slot4;
                            var8 = var9.find;
                            var6 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var0 = var0.item;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var8 = var8.bind(var9)(var6);
                            var6 = null;
                            var6 = var6 != var8;
                            var0.visible = var6;
                            var6 = var5.data;
                            var6 = var6.content;
                            var0.content = var6;
                            var4 = var3.bind(var2)(var1, var0);
                            _fun104076_ip = 764;
                            continue _fun104076;
                        case 523:
                            var2 = var5.channelType;
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 56;
                            var0 = var6[var0];
                            var6 = undefined;
                            var0 = var3.bind(var6)(var0);
                            var0 = var0.ChannelTypes;
                            var0 = var0.GUILD_ANNOUNCEMENT;
                            if (!(var2 !== var0)) {
                                _fun104076_ip = 669;
                                continue _fun104076
                            }
                        case 570:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 58;
                            var0 = var8[var0];
                            var2 = var2.bind(var6)(var0);
                            var0 = {};
                            var8 = var5.data;
                            var8 = var8.message;
                            var0.message = var8;
                            var8 = var5.data;
                            var8 = var8.messageContext;
                            var0.messageContext = var8;
                            var10 = _closure2_slot4;
                            var9 = var10.find;
                            var8 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var0 = var0.item;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var9 = var9.bind(var10)(var8);
                            var8 = null;
                            var8 = var8 != var9;
                            var0.visible = var8;
                            var0 = var3.bind(var6)(var2, var0);
                            _fun104076_ip = 761;
                            continue _fun104076;
                        case 669:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 57;
                            var1 = var8[var1];
                            var2 = var2.bind(var6)(var1);
                            var1 = {};
                            var8 = var5.unread;
                            var1.unread = var8;
                            var8 = var5.data;
                            var8 = var8.message;
                            var1.message = var8;
                            var9 = _closure2_slot4;
                            var8 = var9.find;
                            var7 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var0 = var0.item;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var8 = var8.bind(var9)(var7);
                            var7 = null;
                            var7 = var7 != var8;
                            var1.visible = var7;
                            var0 = var3.bind(var6)(var2, var1);
                        case 761:
                            var4 = var0;
                        case 764:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 62;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.CardHeightMeasurer;
                            var0 = {};
                            var5 = var5.id;
                            var0.itemId = var5;
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var19 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot4;
                var4 = var5.useMemo;
                var2 = function() { // Environment: var13
                    var0 = {};
                    var1 = 'transparent';
                    var0.backgroundColor = var1;
                    return var0;
                };
                var1 = new Array(0);
                var21 = var4.bind(var5)(var2, var1);
                var5 = _closure1_slot4;
                var4 = var5.useMemo;
                var2 = new Array(3);
                var2[0] = var33;
                var1 = var20.length;
                var2[1] = var1;
                var2[2] = var32;
                var1 = function() { // Environment: var13
                    _fun104082: for (var _fun104082_ip = 0;;) switch (_fun104082_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var1 = var0.length;
                            var0 = 0;
                            var1 = var1 > var0;
                            var0 = undefined;
                            if (!var1) {
                                _fun104082_ip = 44;
                                continue _fun104082
                            }
                        case 23:
                            var1 = {};
                            var3 = _closure2_slot14;
                            var1.height = var3;
                            var2 = _closure2_slot0;
                            var1.width = var2;
                            var0 = var1;
                        case 44:
                            return var0;
                    }
                };
                var18 = var4.bind(var5)(var1, var2);
                var1 = 63;
                var1 = var30[var1];
                var2 = var29.bind(var3)(var1);
                var1 = var2.useClientThemesOverride;
                var12 = var1.bind(var2)();
                var0 = var30[var0];
                var5 = var29.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot11;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var13
                    var1 = _closure1_slot11;
                    var0 = var1.hasNewContent;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var26 = var4.bind(var5)(var2, var1, var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var23.containerInPanels;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var23.containerBackground;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot26;
                var4 = {};
                var4.inNestedNavigator = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot16;
                var6 = _closure1_slot5;
                var5 = {};
                var31 = var23.flashListWrapper;
                var8 = new Array(3);
                var8[0] = var31;
                var31 = {};
                var31.height = var33;
                var31.width = var32;
                var32 = 'auto';
                var31.marginHorizontal = var32;
                var8[1] = var31;
                var8[2] = var12;
                var5.style = var8;
                var12 = _closure1_slot14;
                var8 = 64;
                var8 = var30[var8];
                var11 = var11.bind(var3)(var8);
                var8 = {};
                var13 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var4 = var3[var1];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var4);
                    var6 = var7.itemInteracted;
                    var5 = 'refresh_button';
                    var4 = 'press_refresh_button';
                    var4 = var6.bind(var7)(var5, var5, var4);
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.feedPageActioned;
                    var1 = {};
                    var4 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'new_content_pill',
                        'actionIntentType': 'refresh',
                        'actionDestinationType': null
                    };
                    var1.actionParameters = var4;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot13;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8.onPress = var13;
                var8.isRefreshing = var24;
                var11 = var12.bind(var3)(var11, var8);
                var8 = new Array(3);
                var8[0] = var11;
                var13 = _closure1_slot14;
                var11 = 65;
                var11 = var30[var11];
                var11 = var29.bind(var3)(var11);
                var12 = var11.FlashList;
                var11 = {};
                var11.ref = var22;
                var22 = !var14;
                var11.scrollEnabled = var22;
                var22 = {};
                var22.endVisible = var28;
                var11.extraData = var22;
                var11.contentContainerStyle = var21;
                var21 = 23;
                var22 = var30[var21];
                var22 = var29.bind(var3)(var22);
                var28 = var22.intl;
                var22 = var28.string;
                var21 = var30[var21];
                var21 = var29.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.OIgYlQ;
                var21 = var22.bind(var28)(var21);
                var11.accessibilityLabel = var21;
                var11.data = var20;
                var11.refreshing = var24;
                var22 = _closure1_slot14;
                var21 = _closure1_slot6;
                var20 = {};
                var20.onRefresh = var27;
                var20.refreshing = var24;
                var23 = var23.refreshing;
                var23 = var23.color;
                var20.tintColor = var23;
                var23 = {};
                var24 = var15;
                if (!var26) {
                    _fun104062_ip = 1397;
                    continue _fun104062
                }
            case 1395:
                var24 = 0;
            case 1397:
                var23.opacity = var24;
                var20.style = var23;
                var20 = var22.bind(var3)(var21, var20);
                var11.refreshControl = var20;
                var20 = 3;
                var11.onEndReachedThreshold = var20;
                var20 = _closure1_slot33;
                var11.onEndReached = var20;
                var20 = _closure1_slot35;
                var11.keyExtractor = var20;
                var11.renderItem = var19;
                var19 = 200;
                var11.estimatedItemSize = var19;
                var11.estimatedListSize = var18;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var18 = 33;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.itemToType;
                var11.getItemType = var18;
                var18 = 66;
                var18 = var20[var18];
                var19 = var19.bind(var3)(var18);
                var18 = var19.isAndroid;
                var18 = var18.bind(var19)();
                var18 = 100;
                var11.drawDistance = var18;
                var11.stickyHeaderIndices = var17;
                var11.viewabilityConfigCallbackPairs = var16;
                if (var14) {
                    _fun104062_ip = 1537;
                    continue _fun104062
                }
            case 1534:
                var15 = var10;
            case 1537:
                var10 = global;
                var10 = var10.HermesInternal;
                var14 = var10.concat;
                var10 = 'Version-';
                var10 = var14.bind(var10)(var15);
                var10 = var13.bind(var3)(var12, var11, var10);
                var8[1] = var10;
                var9 = _closure1_slot31;
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.id;
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var10 = var3.bind(var0)(var7);
    var _closure1_slot4 = var10;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.RefreshControl;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NUM_GUILDS_EXTENDED_ONBOARDING;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var9 = var3.Fragment;
    var _closure1_slot15 = var9;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var9 = var11.createStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 12;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOWEST;
        var1.backgroundColor = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_8;
        var1.paddingHorizontal = var2;
        var2 = 'hidden';
        var1.overflow = var2;
        var2 = 1;
        var1.flex = var2;
        var2 = arg0;
        var1.paddingTop = var2;
        var0.containerOuterTablet = var1;
        return var0;
    };
    var3 = var9.bind(var11)(var3);
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var9 = var11.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {
            'flex': 1,
            'flexShrink': 1,
            'flexGrow': 1
        };
        var0.container = var1;
        var1 = {
            'flex': 1,
            'flexShrink': 1,
            'flexGrow': 1,
            'overflow': 'hidden'
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 12;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.sm;
        var1.borderTopLeftRadius = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.sm;
        var1.borderTopRightRadius = var6;
        var0.containerInPanels = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var6;
        var0.containerBackground = var1;
        var1 = {
            'backgroundColor': null,
            'minHeight': 2,
            'flex': 1
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var6;
        var0.flashListWrapper = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.INTERACTIVE_TEXT_DEFAULT;
        var1.color = var6;
        var0.refreshing = var1;
        var1 = {
            'backgroundColor': null,
            'position': 'relative',
            'overflow': 'hidden',
            'width': '100%'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var6;
        var0.header = var1;
        var6 = 'center';
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var0.headerLeft = var1;
        var1 = {};
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var1.marginRight = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_32;
        var1.height = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_32;
        var1.width = var7;
        var1.alignItems = var6;
        var1.justifyContent = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.lg;
        var1.borderRadius = var6;
        var0.headerClose = var1;
        var1 = {
            'height': 56,
            'marginHorizontal': null,
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between'
        };
        var6 = arg0;
        var6 = var6.margin;
        var1.marginHorizontal = var6;
        var0.headerTitle = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'gap': 4
        };
        var0.headerText = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.gap = var6;
        var0.headerActions = var1;
        var1 = {
            'height': 18,
            'width': 18
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.round;
        var1.borderRadius = var6;
        var0.notificationBadge = var1;
        var1 = {
            'flex': 1,
            'justifyContent': 'center'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_96;
        var1.paddingTop = var6;
        var0.loading = var1;
        var1 = {
            'position': 'absolute',
            'bottom': 0,
            'left': 0,
            'right': 0,
            'backgroundColor': null,
            'height': 1
        };
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.BORDER_SUBTLE;
        var1.backgroundColor = var2;
        var0.headerBorder = var1;
        return var0;
    };
    var3 = var9.bind(var11)(var3);
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.FiltersHorizontalIcon;
    var3 = {};
    var11 = 'sm';
    var3.size = var11;
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot19 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.CircleInformationIcon;
    var3 = {};
    var3.size = var11;
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot20 = var3;
    var3 = 24;
    var3 = var5[var3];
    var9 = var6.bind(var0)(var3);
    var3 = {};
    var3.includeNotificationsCount = var8;
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot21 = var3;
    var3 = 25;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ArrowLargeLeftIcon;
    var3 = 26;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.XSmallIcon;
    var3 = {};
    var11 = 'interactive-text-default';
    var3.color = var11;
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot22 = var3;
    var9 = function() {
        var1 = _closure1_slot18;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var6 = _closure1_slot4;
        var4 = var6.useMemo;
        var2 = function() { // Environment: var1
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot14;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 22;
            var4 = var12[var5];
            var0 = undefined;
            var4 = var11.bind(var0)(var4);
            var7 = var4.Text;
            var4 = {
                'color': 'mobile-text-heading-primary',
                'variant': 'heading-lg/bold',
                'maxFontSizeMultiplier': 1.75,
                'accessibilityRole': 'header'
            };
            var8 = 23;
            var10 = var12[var8];
            var10 = var11.bind(var0)(var10);
            var14 = var10.intl;
            var13 = var14.string;
            var10 = var12[var8];
            var10 = var11.bind(var0)(var10);
            var10 = var10.t;
            var10 = var10.SY4sdZ;
            var10 = var13.bind(var14)(var10);
            var4.children = var10;
            var7 = var9.bind(var0)(var7, var4);
            var4 = new Array(2);
            var4[0] = var7;
            var7 = _closure1_slot14;
            var5 = var12[var5];
            var5 = var11.bind(var0)(var5);
            var6 = var5.Text;
            var5 = {
                'color': 'text-brand',
                'variant': 'text-xs/bold'
            };
            var9 = {};
            var10 = 4;
            var9.marginTop = var10;
            var5.style = var9;
            var9 = var12[var8];
            var9 = var11.bind(var0)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var0)(var8);
            var8 = var8.t;
            var8 = var8.Ac2OZA;
            var8 = var9.bind(var10)(var8);
            var5.children = var8;
            var5 = var7.bind(var0)(var6, var5);
            var4[1] = var5;
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1 = new Array(0);
        var4 = var4.bind(var6)(var2, var1);
        var2 = _closure1_slot14;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var5.headerText;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot23 = var3;
    var9 = function() {
        var3 = _closure1_slot14;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 15;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {
            'accessibilityLabel': 'button',
            'variant': 'tertiary',
            'size': 'sm'
        };
        var4 = _closure1_slot20;
        var0.icon = var4;
        var4 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 16;
            var5 = var3[var2];
            var0 = undefined;
            var8 = var4.bind(var0)(var5);
            var7 = var8.itemInteracted;
            var6 = 'info_button';
            var5 = 'press_info_button';
            var5 = var7.bind(var8)(var6, var6, var5);
            var2 = var3[var2];
            var5 = var4.bind(var0)(var2);
            var4 = var5.feedPageActioned;
            var2 = {};
            var6 = {
                'actionGestureType': 'press',
                'actionTargetElement': 'info_button',
                'actionIntentType': 'open',
                'actionDestinationType': null
            };
            var2.actionParameters = var6;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot0;
            var1 = 21;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.pushICYMIInfoModal;
            var1 = {};
            var4 = true;
            var1.extendedOnboarding = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot24 = var3;
    var9 = function() {
        var3 = _closure1_slot14;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 15;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {
            'accessibilityLabel': 'button',
            'variant': 'tertiary',
            'size': 'sm'
        };
        var4 = _closure1_slot19;
        var0.icon = var4;
        var4 = function() {
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 16;
            var5 = var1[var3];
            var0 = undefined;
            var8 = var4.bind(var0)(var5);
            var7 = var8.itemInteracted;
            var6 = 'filters_button';
            var5 = 'press_info_button';
            var5 = var7.bind(var8)(var6, var6, var5);
            var3 = var1[var3];
            var6 = var4.bind(var0)(var3);
            var5 = var6.feedPageActioned;
            var3 = {};
            var7 = {
                'actionGestureType': 'press',
                'actionTargetElement': 'settings_button',
                'actionIntentType': 'open',
                'actionDestinationType': null
            };
            var3.actionParameters = var7;
            var3 = var5.bind(var6)(var3);
            var3 = 17;
            var3 = var1[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot0;
            var2 = 19;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 18;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var0)(var2, var1);
            var2 = 'ICYMISettingsActionSheet';
            var1 = {};
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot25 = var3;
    var9 = var10.memo;
    var3 = function(arg0) { // Environment: var1
        _fun104088: for (var _fun104088_ip = 0;;) switch (_fun104088_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.inNestedNavigator;
                var0 = _closure1_slot18;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 27;
                var0 = var12[var0];
                var0 = var6.bind(var3)(var0);
                var13 = var0.bind(var3)();
                var2 = _closure1_slot16;
                var11 = _closure1_slot0;
                var0 = 28;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = !var13;
                var0.top = var4;
                var4 = var8.header;
                var0.style = var4;
                var7 = _closure1_slot14;
                var4 = 29;
                var4 = var12[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {
                    'absolute': true,
                    'wide': true,
                    'tall': true,
                    'mix': true
                };
                var9 = {};
                var10 = 30;
                var14 = var12[var10];
                var14 = var11.bind(var3)(var14);
                var14 = var14.OverlayOpacity;
                var14 = var14.LEVEL_7;
                var9.dark = var14;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.OverlayOpacity;
                var10 = var10.LEVEL_8;
                var9.light = var10;
                var4.mixAmount = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var9 = _closure1_slot16;
                var7 = _closure1_slot5;
                var6 = {};
                var10 = var8.headerTitle;
                var6.style = var10;
                var12 = _closure1_slot16;
                var11 = _closure1_slot5;
                var10 = {};
                var14 = var8.headerLeft;
                var10.style = var14;
                if (var13) {
                    _fun104088_ip = 247;
                    continue _fun104088
                }
            case 239:
                var14 = null;
                if (!var17) {
                    _fun104088_ip = 385;
                    continue _fun104088
                }
            case 247:
                var16 = _closure1_slot14;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 31;
                var13 = var20[var13];
                var13 = var19.bind(var3)(var13);
                var15 = var13.PressableOpacity;
                var13 = {};
                var18 = var8.headerClose;
                var13.style = var18;
                var18 = 23;
                var21 = var20[var18];
                var21 = var19.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["13/7kX"];
                var18 = var21.bind(var22)(var18);
                var13.accessibilityLabel = var18;
                var18 = 32;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.goBack;
                var13.onPress = var18;
                if (var17) {
                    _fun104088_ip = 371;
                    continue _fun104088
                }
            case 365:
                var17 = _closure1_slot22;
                _fun104088_ip = 375;
                continue _fun104088;
            case 371:
                var17 = _closure1_slot21;
            case 375:
                var13.children = var17;
                var14 = var16.bind(var3)(var15, var13);
            case 385:
                var13 = new Array(2);
                var13[0] = var14;
                var14 = _closure1_slot23;
                var13[1] = var14;
                var10.children = var13;
                var11 = var12.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot16;
                var12 = _closure1_slot5;
                var11 = {};
                var14 = var8.headerActions;
                var11.style = var14;
                var15 = _closure1_slot24;
                var14 = new Array(2);
                var14[0] = var15;
                var15 = _closure1_slot25;
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var6.children = var10;
                var6 = var9.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot14;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var8.headerBorder;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var9.bind(var10)(var3);
    var _closure1_slot26 = var3;
    var3 = 34;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.ICYMILoading;
    var3 = {};
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot27 = var3;
    var3 = 35;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.ICYMIBottomLoading;
    var3 = {};
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot28 = var3;
    var3 = 36;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.ICYMIServerRecommendationRow;
    var3 = {};
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot29 = var3;
    var3 = 37;
    var3 = var5[var3];
    var9 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot30 = var3;
    var3 = 38;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.TTIFirstContentfulPaint;
    var3 = {};
    var10 = 'icymi';
    var3.label = var10;
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot31 = var3;
    var3 = 29;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3.absolute = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot32 = var3;
    var3 = 71;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ICYMI.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104089: for (var _fun104089_ip = 0;;) switch (_fun104089_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.route;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 67;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var16 = var2.bind(var3)();
                var6 = _closure1_slot0;
                var2 = 43;
                var2 = var5[var2];
                var8 = var6.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var7.bind(var8)(var6, var2);
                var2 = 27;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var10 = var2.bind(var3)();
                var _closure2_slot0 = var10;
                var2 = 40;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var2 = var2.top;
                var4 = null;
                var5 = var4 == var1;
                var14 = undefined;
                if (var5) {
                    _fun104089_ip = 163;
                    continue _fun104089
                }
            case 142:
                var1 = var1.params;
                var4 = var4 == var1;
                var14 = undefined;
                if (var4) {
                    _fun104089_ip = 163;
                    continue _fun104089
                }
            case 157:
                var14 = var1.inNestedNavigator;
            case 163:
                var1 = _closure1_slot17;
                var5 = var1.bind(var3)(var2);
                _closure2_slot1 = var5;
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var10;
                var5 = var5.containerOuterTablet;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun104091: for (var _fun104091_ip = 0;;) switch (_fun104091_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            if (!var2) {
                                _fun104091_ip = 22;
                                continue _fun104091
                            }
                        case 12:
                            var1 = _closure2_slot1;
                            var0 = var1.containerOuterTablet;
                        case 22:
                            return var0;
                    }
                };
                var12 = var2.bind(var4)(var0, var1);
                if (var10) {
                    _fun104089_ip = 231;
                    continue _fun104089
                }
            case 219:
                var0 = _closure1_slot4;
                var9 = var0.Fragment;
                _fun104089_ip = 235;
                continue _fun104089;
            case 231:
                var9 = _closure1_slot5;
            case 235:
                var2 = _closure1_slot14;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 68;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = _closure1_slot14;
                var5 = _closure1_slot0;
                var4 = 69;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ICYMIContextProvider;
                var4 = {};
                var8 = _closure1_slot16;
                var7 = {};
                if (var10) {
                    _fun104089_ip = 302;
                    continue _fun104089
                }
            case 298:
                var10 = {};
                _fun104089_ip = 311;
                continue _fun104089;
            case 302:
                var11 = {};
                var11.style = var12;
                var10 = var11;
            case 311:
                var22 = var7;
                var21 = var10;
                var10 = copyDataProperties(var22, var21);
                var10 = _closure1_slot32;
                var11 = new Array(2);
                var11[0] = var10;
                var13 = _closure1_slot14;
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 70;
                var10 = var17[var10];
                var10 = var12.bind(var3)(var10);
                var12 = var10.ThemeContextProvider;
                var10 = {};
                var10.gradient = var16;
                var17 = _closure1_slot14;
                var16 = _closure1_slot34;
                var15 = {};
                var15.inNestedNavigator = var14;
                var14 = global;
                var14 = var14.HermesInternal;
                var18 = var14.concat;
                var14 = '';
                var14 = var18.bind(var14)(var19);
                var14 = var17.bind(var3)(var16, var15, var14);
                var10.children = var14;
                var10 = var13.bind(var3)(var12, var10);
                var11[1] = var10;
                var10 = 'children';
                var7[var10] = var11;
                var7 = var8.bind(var3)(var9, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ICYMITab = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1216, 1410, 7671, 7662, 13568, 1369, 33, 1297, 671, 13569, 10553, 7585, 7678, 3279, 13571, 1307, 3267, 13582, 3938, 1234, 13492, 5837, 5234, 7259, 4754, 7690, 3197, 4880, 13521, 7677, 13602, 13605, 13606, 13607, 9570, 1464, 1568, 1470, 4370, 566, 13487, 13608, 13611, 6518, 1358, 13601, 1469, 6714, 4567, 9482, 5252, 13612, 790, 13613, 13617, 13622, 13641, 13642, 13643, 7718, 13644, 5812, 478, 3243, 13645, 13570, 3161, 2]);