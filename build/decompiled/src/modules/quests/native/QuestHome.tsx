// modules/quests/native/QuestHome.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 11;
        var1 = var12[var1];
        var3 = undefined;
        var2 = var11.bind(var3)(var1);
        var1 = var2.useNavigation;
        var6 = var1.bind(var2)();
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var2 = var5.useCallback;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            var1 = _closure2_slot0;
            var0 = var1.goBack;
            var0 = var0.bind(var1)();
            return var0;
        };
        var7 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot10;
        var1 = _closure1_slot1;
        var0 = 12;
        var0 = var12[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var6 = _closure1_slot10;
        var4 = 13;
        var4 = var12[var4];
        var4 = var11.bind(var3)(var4);
        var5 = var4.Button;
        var4 = {};
        var8 = 'secondary';
        var4.variant = var8;
        var8 = 14;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["/g10LC"];
        var8 = var9.bind(var10)(var8);
        var4.text = var8;
        var4.onPress = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.action = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var10 = var0.onClearFilters;
        var3 = _closure1_slot10;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 12;
        var0 = var8[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var9 = _closure1_slot10;
        var7 = _closure1_slot0;
        var4 = 13;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var6 = var4.Button;
        var5 = {};
        var4 = 'secondary';
        var5.variant = var4;
        var4 = 14;
        var11 = var8[var4];
        var11 = var7.bind(var2)(var11);
        var13 = var11.intl;
        var12 = var13.string;
        var11 = var8[var4];
        var11 = var7.bind(var2)(var11);
        var11 = var11.t;
        var11 = var11.urZl31;
        var11 = var12.bind(var13)(var11);
        var5.text = var11;
        var5.onPress = var10;
        var5 = var9.bind(var2)(var6, var5);
        var0.action = var5;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.PBfFnx;
        var5 = var6.bind(var9)(var5);
        var0.title = var5;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.nwdKFC;
        var4 = var5.bind(var6)(var4);
        var0.subtitle = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot5 = var8;
    var8 = var3.ActivityIndicator;
    var _closure1_slot6 = var8;
    var10 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.spacing;
    var3 = var3.PX_16;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var11;
    var3.container = var9;
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var11 = 'center';
    var10 = 'justifyContent';
    var9[var10] = var11;
    var10 = 'alignItems';
    var9[var10] = var11;
    var3.loadingContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun83257: for (var _fun83257_ip = 0;;) switch (_fun83257_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.containerStyle;
                var3 = var0.isNavigationComplete;
                var24 = var0.scrollToQuestId;
                var _closure2_slot0 = var24;
                var2 = var0.filters;
                var _closure2_slot1 = var2;
                var18 = var0.sortMethod;
                var _closure2_slot2 = var18;
                var9 = var0.onClearFilters;
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 15;
                var0 = var17[var0];
                var5 = undefined;
                var4 = var10.bind(var5)(var0);
                var1 = var4.useIsEligibleForQuests;
                var0 = {};
                var7 = _closure1_slot8;
                var7 = var7.QUEST_HOME_MOBILE;
                var0.location = var7;
                var4 = var1.bind(var4)(var0);
                var _closure2_slot3 = var4;
                var0 = _closure1_slot12;
                var7 = var0.bind(var5)();
                var23 = _closure1_slot1;
                var11 = 16;
                var0 = var17[var11];
                var0 = var23.bind(var5)(var0);
                var0 = var0.bind(var5)();
                var20 = var0.bottom;
                var0 = 17;
                var1 = var17[var0];
                var14 = var10.bind(var5)(var1);
                var13 = var14.useFilteredQuests;
                var1 = var17[var0];
                var1 = var10.bind(var5)(var1);
                var1 = var1.QuestTabs;
                var12 = var1.ALL;
                var21 = _closure1_slot4;
                var19 = var21.useMemo;
                var16 = new Array(2);
                var16[0] = var2;
                var16[1] = var18;
                var1 = function() { // Environment: var15
                    var0 = {};
                    var2 = _closure2_slot1;
                    var0.filters = var2;
                    var1 = _closure2_slot2;
                    var0.sortMethod = var1;
                    return var0;
                };
                var1 = var19.bind(var21)(var1, var16);
                var13 = var13.bind(var14)(var12, var1);
                var16 = var13.quests;
                var _closure2_slot4 = var16;
                var12 = var13.excludedQuests;
                var _closure2_slot5 = var12;
                var1 = var13.isFetchingCurrentQuests;
                var21 = var13.hasFetched;
                var _closure2_slot6 = var21;
                var13 = var17[var0];
                var14 = var10.bind(var5)(var13);
                var13 = var14.useShouldShowPreviewToolTab;
                var13 = var13.bind(var14)();
                var _closure2_slot7 = var13;
                var13 = {};
                var22 = _closure1_slot4;
                var19 = var22.useMemo;
                var14 = new Array(3);
                var14[0] = var24;
                var14[1] = var16;
                var14[2] = var12;
                var12 = function() { // Environment: var15
                    _fun83268: for (var _fun83268_ip = 0;;) switch (_fun83268_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun83268_ip = 102;
                                continue _fun83268
                            }
                        case 15:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 18;
                            var4 = var4[var1];
                            var1 = undefined;
                            var7 = var5.bind(var1)(var4);
                            var6 = var7.findQuestOrReplacement;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot4;
                            var1 = _closure2_slot5;
                            var1 = var6.bind(var7)(var5, var4, var1);
                            var _closure3_slot0 = var1;
                            var4 = var0 == var1;
                            var1 = null;
                            if (var4) {
                                _fun83268_ip = 100;
                                continue _fun83268
                            }
                        case 78:
                            var4 = _closure2_slot4;
                            var3 = var4.findIndex;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2);
                        case 100:
                            return var1;
                        case 102:
                            return var0;
                    }
                };
                var12 = var19.bind(var22)(var12, var14);
                var13.scrollToIndex = var12;
                var12 = function(arg0) { // Environment: var15
                    var1 = arg0;
                    var11 = var1.scrollToIndex;
                    var _closure3_slot0 = var11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var13 = undefined;
                    var4 = var2.bind(var13)(var1);
                    var3 = var4.useStateFromStores;
                    var1 = _closure1_slot7;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot7;
                        var0 = var0.useReducedMotion;
                        return var0;
                    };
                    var12 = var3.bind(var4)(var2, var1);
                    var _closure3_slot1 = var12;
                    var3 = _closure1_slot4;
                    var2 = var3.useRef;
                    var1 = null;
                    var6 = var2.bind(var3)(var1);
                    var _closure3_slot2 = var6;
                    var4 = _closure1_slot4;
                    var2 = var4.useRef;
                    var1 = {};
                    var5 = {};
                    var3 = 0;
                    var5.scrollY = var3;
                    var1.parent = var5;
                    var5 = {};
                    var1.children = var5;
                    var1 = var2.bind(var4)(var1);
                    var _closure3_slot3 = var1;
                    var8 = _closure1_slot4;
                    var5 = var8.useCallback;
                    var4 = function(arg0) { // Environment: var0
                        _fun83261: for (var _fun83261_ip = 0;;) switch (_fun83261_ip) {
                            case 0:
                                var7 = arg0;
                                var0 = global;
                                var2 = var0.Object;
                                var1 = var2.keys;
                                var0 = _closure3_slot3;
                                var0 = var0.current;
                                var0 = var0.children;
                                var5 = var1.bind(var2)(var0);
                                var0 = var5.length;
                                var4 = 0;
                                var1 = var4 < var0;
                                var0 = undefined;
                                var3 = null;
                                var2 = undefined;
                                if (!var1) {
                                    _fun83261_ip = 139;
                                    continue _fun83261
                                }
                            case 58:
                                var9 = var5[var4];
                                var1 = var3 != var7;
                                if (!var1) {
                                    _fun83261_ip = 73;
                                    continue _fun83261
                                }
                            case 69:
                                var1 = var9 !== var7;
                            case 73:
                                if (var1) {
                                    _fun83261_ip = 101;
                                    continue _fun83261
                                }
                            case 76:
                                var8 = _closure3_slot3;
                                var8 = var8.current;
                                var8 = var8.children;
                                var8 = var8[var9];
                                var1 = var3 == var8;
                                var2 = var8;
                            case 101:
                                if (var1) {
                                    _fun83261_ip = 114;
                                    continue _fun83261
                                }
                            case 104:
                                var8 = var2.calculateVisibility;
                                var1 = var3 == var8;
                            case 114:
                                if (var1) {
                                    _fun83261_ip = 127;
                                    continue _fun83261
                                }
                            case 117:
                                var1 = var2.calculateVisibility;
                                var1 = var1.bind(var2)();
                            case 127:
                                var4 = var4 + 1;
                                var1 = var5.length;
                                if (var4 < var1) {
                                    _fun83261_ip = 58;
                                    continue _fun83261
                                }
                            case 139:
                                return var0;
                        }
                    };
                    var2 = new Array(0);
                    var2 = var5.bind(var8)(var4, var2);
                    var _closure3_slot4 = var2;
                    var9 = _closure1_slot4;
                    var8 = var9.useCallback;
                    var5 = new Array(1);
                    var5[0] = var2;
                    var4 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot3;
                        var1 = var1.current;
                        var2 = var1.parent;
                        var1 = arg0;
                        var1 = var1.nativeEvent;
                        var1 = var1.contentOffset;
                        var1 = var1.y;
                        var2.scrollY = var1;
                        var1 = _closure3_slot4;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var5 = var8.bind(var9)(var4, var5);
                    var10 = _closure1_slot4;
                    var9 = var10.useCallback;
                    var8 = new Array(1);
                    var8[0] = var2;
                    var4 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot3;
                        var1 = var1.current;
                        var2 = var1.parent;
                        var1 = arg0;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var2.layout = var1;
                        var1 = _closure3_slot4;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var4 = var9.bind(var10)(var4, var8);
                    var10 = _closure1_slot4;
                    var9 = var10.useState;
                    var8 = false;
                    var10 = var9.bind(var10)(var8);
                    var9 = _closure1_slot3;
                    var8 = 2;
                    var8 = var9.bind(var13)(var10, var8);
                    var13 = var8[var3];
                    var _closure3_slot5 = var13;
                    var3 = 1;
                    var3 = var8[var3];
                    var _closure3_slot6 = var3;
                    var10 = _closure1_slot4;
                    var9 = var10.useCallback;
                    var8 = function() { // Environment: var0
                        var2 = _closure3_slot6;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = new Array(0);
                    var3 = var9.bind(var10)(var8, var3);
                    var10 = _closure1_slot4;
                    var9 = var10.useCallback;
                    var8 = new Array(1);
                    var8[0] = var2;
                    var2 = function(arg0, arg1) { // Environment: var0
                        var2 = arg1;
                        var4 = _closure3_slot3;
                        var1 = var4.current;
                        var3 = var1.children;
                        var1 = {};
                        var4 = var4.current;
                        var4 = var4.children;
                        var6 = var4[var2];
                        var7 = var1;
                        var4 = copyDataProperties(var7, var6);
                        var4 = arg0;
                        var4 = var4.nativeEvent;
                        var5 = var4.layout;
                        var4 = 'layout';
                        var1[var4] = var5;
                        var3[var2] = var1;
                        var1 = _closure3_slot4;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var2 = var9.bind(var10)(var2, var8);
                    var14 = _closure1_slot4;
                    var10 = var14.useCallback;
                    var9 = new Array(1);
                    var9[0] = var12;
                    var8 = function(arg0) { // Environment: var0
                        _fun83266: for (var _fun83266_ip = 0;;) switch (_fun83266_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun83266_ip = 100;
                                    continue _fun83266
                                }
                            case 18:
                                var0 = _closure3_slot2;
                                var2 = var0.current;
                                var1 = var2.scrollToIndex;
                                var0 = {};
                                var4 = arg0;
                                var0.index = var4;
                                var3 = _closure3_slot1;
                                var3 = !var3;
                                var0.animated = var3;
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 7;
                                var4 = var4[var3];
                                var3 = undefined;
                                var3 = var5.bind(var3)(var4);
                                var3 = var3.spacing;
                                var3 = var3.PX_8;
                                var0.viewOffset = var3;
                                var0 = var1.bind(var2)(var0);
                            case 100:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var10 = var10.bind(var14)(var8, var9);
                    var _closure3_slot7 = var10;
                    var9 = _closure1_slot4;
                    var8 = var9.useEffect;
                    var7 = new Array(4);
                    var7[0] = var13;
                    var7[1] = var12;
                    var7[2] = var11;
                    var7[3] = var10;
                    var0 = function() { // Environment: var0
                        _fun83267: for (var _fun83267_ip = 0;;) switch (_fun83267_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = null;
                                var1 = var1 != var2;
                                if (!var1) {
                                    _fun83267_ip = 30;
                                    continue _fun83267
                                }
                            case 16:
                                var3 = _closure3_slot0;
                                var2 = -1;
                                var1 = var2 !== var3;
                            case 30:
                                if (!var1) {
                                    _fun83267_ip = 37;
                                    continue _fun83267
                                }
                            case 33:
                                var1 = _closure3_slot5;
                            case 37:
                                if (!var1) {
                                    _fun83267_ip = 99;
                                    continue _fun83267
                                }
                            case 40:
                                var1 = _closure3_slot7;
                                var0 = _closure3_slot0;
                                var3 = undefined;
                                var0 = var1.bind(var3)(var0);
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 10;
                                var1 = var4[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.clearSubsection;
                                var0 = _closure1_slot9;
                                var0 = var0.QUESTS;
                                var0 = var1.bind(var2)(var0);
                            case 99:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var8.bind(var9)(var0, var7);
                    var0 = {};
                    var0.scrollViewRef = var6;
                    var0.handleListScroll = var5;
                    var0.handleListLayout = var4;
                    var0.handleListLoad = var3;
                    var0.handleQuestCardLayout = var2;
                    var0.visibilityRef = var1;
                    return var0;
                };
                var22 = var12.bind(var5)(var13);
                var19 = var22.scrollViewRef;
                var _closure2_slot8 = var19;
                var13 = var22.handleListScroll;
                var14 = var22.handleListLayout;
                var12 = var22.handleListLoad;
                var24 = var22.handleQuestCardLayout;
                var _closure2_slot9 = var24;
                var22 = var22.visibilityRef;
                var _closure2_slot10 = var22;
                var22 = 19;
                var22 = var17[var22];
                var23 = var23.bind(var5)(var22);
                var22 = {};
                var24 = 20;
                var25 = var17[var24];
                var25 = var10.bind(var5)(var25);
                var25 = var25.ImpressionNames;
                var25 = var25.QUEST_HOME;
                var22.name = var25;
                var24 = var17[var24];
                var24 = var10.bind(var5)(var24);
                var24 = var24.ImpressionTypes;
                var24 = var24.VIEW;
                var22.type = var24;
                var24 = {};
                var25 = var17[var0];
                var25 = var10.bind(var5)(var25);
                var25 = var25.QuestTabs;
                var25 = var25.ALL;
                var24.tab = var25;
                var22.properties = var24;
                var22 = var23.bind(var5)(var22);
                var25 = _closure1_slot4;
                var24 = var25.useEffect;
                var23 = new Array(1);
                var23[0] = var4;
                var22 = function() { // Environment: var15
                    _fun83270: for (var _fun83270_ip = 0;;) switch (_fun83270_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun83270_ip = 51;
                                continue _fun83270
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 21;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var1 = var0.QuestHomeOpenTriggerPoint;
                            var0 = var1.trigger;
                            var0 = var0.bind(var1)();
                        case 51:
                            var0 = undefined;
                            return var0;
                    }
                };
                var22 = var24.bind(var25)(var22, var23);
                var24 = _closure1_slot4;
                var23 = var24.useEffect;
                var22 = new Array(4);
                var22[0] = var2;
                var22[1] = var18;
                var22[2] = var21;
                var22[3] = var19;
                var21 = function() { // Environment: var15
                    _fun83271: for (var _fun83271_ip = 0;;) switch (_fun83271_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var2 = var1.current;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun83271_ip = 25;
                                continue _fun83271
                            }
                        case 21:
                            var1 = _closure2_slot6;
                        case 25:
                            if (!var1) {
                                _fun83271_ip = 58;
                                continue _fun83271
                            }
                        case 28:
                            var0 = _closure2_slot8;
                            var2 = var0.current;
                            var1 = var2.scrollToOffset;
                            var0 = {
                                'offset': 0,
                                'animated': false
                            };
                            var0 = var1.bind(var2)(var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var21 = var23.bind(var24)(var21, var22);
                var0 = var17[var0];
                var17 = var10.bind(var5)(var0);
                var10 = var17.useQuestHomeSortingFilteringAnalytics;
                var0 = {};
                var0.selectedSortMethod = var18;
                var0.selectedFilters = var2;
                var18 = var16.length;
                var0.numQuestsVisible = var18;
                var0 = var10.bind(var17)(var0);
                var18 = _closure1_slot4;
                var17 = var18.useCallback;
                var10 = function() { // Environment: var15
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 22;
                    var1 = var3[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.popAll;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot0;
                    var1 = 23;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openUserSettings;
                    var1 = {};
                    var4 = _closure1_slot9;
                    var4 = var4.QUEST_PREVIEW_TOOL_2;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var17.bind(var18)(var10, var0);
                var _closure2_slot11 = var0;
                var0 = null;
                if (!var4) {
                    _fun83257_ip = 1026;
                    continue _fun83257
                }
            case 642:
                if (!var3) {
                    _fun83257_ip = 958;
                    continue _fun83257
                }
            case 648:
                if (!var1) {
                    _fun83257_ip = 665;
                    continue _fun83257
                }
            case 651:
                var3 = var16.length;
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun83257_ip = 958;
                    continue _fun83257
                }
            case 665:
                var1 = var16.length;
                var3 = 0;
                if (!(var3 !== var1)) {
                    _fun83257_ip = 905;
                    continue _fun83257
                }
            case 679:
                var10 = _closure1_slot10;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = 24;
                var1 = var18[var1];
                var1 = var17.bind(var5)(var1);
                var4 = var1.FlashList;
                var1 = {};
                var1.ref = var19;
                var19 = {};
                var21 = _closure1_slot11;
                var19.padding = var21;
                var19.paddingBottom = var20;
                var1.contentContainerStyle = var19;
                var20 = var7.container;
                var19 = new Array(2);
                var19[0] = var20;
                var19[1] = var8;
                var1.style = var19;
                var19 = 14;
                var20 = var18[var19];
                var20 = var17.bind(var5)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var18[var19];
                var19 = var17.bind(var5)(var19);
                var19 = var19.t;
                var19 = var19.JALI2K;
                var19 = var20.bind(var21)(var19);
                var1.accessibilityLabel = var19;
                var1.data = var16;
                var16 = function arg0() {
                    var1 = arg0;
                    var0 = var1.item;
                    var _closure3_slot0 = var0;
                    var1 = var1.index;
                    var _closure3_slot1 = var1;
                    var4 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 25;
                    var1 = var8[var1];
                    var3 = undefined;
                    var1 = var7.bind(var3)(var1);
                    var2 = var1.QuestContentImpressionTrackerNative;
                    var1 = {};
                    var1.questOrQuests = var0;
                    var6 = 26;
                    var9 = var8[var6];
                    var9 = var7.bind(var3)(var9);
                    var9 = var9.QuestContent;
                    var9 = var9.QUEST_HOME_MOBILE;
                    var1.questContent = var9;
                    var9 = false;
                    var1.trackGuildAndChannelMetadata = var9;
                    var9 = _closure2_slot10;
                    var1.visibilityRef = var9;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_HOME_MOBILE;
                    var1.sourceQuestContent = var6;
                    var5 = function() {
                        var4 = _closure1_slot10;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 27;
                        var0 = var7[var0];
                        var3 = undefined;
                        var0 = var6.bind(var3)(var0);
                        var2 = var0.QuestCard;
                        var1 = {};
                        var0 = _closure3_slot0;
                        var1.quest = var0;
                        var8 = _closure3_slot1;
                        var1.questContentPosition = var8;
                        var5 = _closure1_slot11;
                        var1.containerPadding = var5;
                        var5 = 26;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.QuestContent;
                        var5 = var5.QUEST_HOME_MOBILE;
                        var1.sourceQuestContent = var5;
                        var0 = var0.id;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var1.children = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var1.renderItem = var16;
                var16 = 27;
                var16 = var18[var16];
                var16 = var17.bind(var5)(var16);
                var16 = var16.ESTIMATED_CARD_HEIGHT;
                var1.estimatedItemSize = var16;
                var16 = false;
                var1.showsHorizontalScrollIndicator = var16;
                var16 = function() {
                    _fun83275: for (var _fun83275_ip = 0;;) switch (_fun83275_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            if (!var0) {
                                _fun83275_ip = 194;
                                continue _fun83275
                            }
                        case 13:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var6 = {};
                            var9 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var1 = 7;
                            var7 = var12[var1];
                            var1 = undefined;
                            var7 = var9.bind(var1)(var7);
                            var7 = var7.spacing;
                            var7 = var7.PX_16;
                            var6.paddingBottom = var7;
                            var7 = 'transparent';
                            var6.backgroundColor = var7;
                            var2.style = var6;
                            var7 = _closure1_slot10;
                            var11 = _closure1_slot0;
                            var5 = 13;
                            var5 = var12[var5];
                            var5 = var11.bind(var1)(var5);
                            var6 = var5.Button;
                            var5 = {
                                'grow': true,
                                'onPress': null,
                                'variant': 'primary'
                            };
                            var8 = _closure2_slot11;
                            var5.onPress = var8;
                            var8 = 14;
                            var9 = var12[var8];
                            var9 = var11.bind(var1)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var12[var8];
                            var8 = var11.bind(var1)(var8);
                            var8 = var8.t;
                            var8 = var8.tx5Ax5;
                            var8 = var9.bind(var10)(var8);
                            var5.text = var8;
                            var5 = var7.bind(var1)(var6, var5);
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 194:
                            return var0;
                    }
                };
                var1.ListHeaderComponent = var16;
                var15 = function arg0() {
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 24;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.CellContainer;
                    var0 = {};
                    var7 = var0;
                    var6 = var5;
                    var5 = copyDataProperties(var7, var6);
                    var5 = function arg0() {
                        _fun83277: for (var _fun83277_ip = 0;;) switch (_fun83277_ip) {
                            case 0:
                                var2 = arg0;
                                var4 = _closure2_slot4;
                                var1 = _closure3_slot0;
                                var1 = var1.index;
                                var1 = var4[var1];
                                var4 = null;
                                if (!(var4 != var1)) {
                                    _fun83277_ip = 49;
                                    continue _fun83277
                                }
                            case 32:
                                var4 = _closure2_slot9;
                                var3 = var1.id;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var2, var3);
                            case 49:
                                var1 = _closure3_slot0;
                                var0 = var1.onLayout;
                                var0 = var0.bind(var1)(var2);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = 'onLayout';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.CellRendererComponent = var15;
                var1.onLayout = var14;
                var1.onScroll = var13;
                var1.onLoad = var12;
                var1.scrollEventThrottle = var11;
                var1 = var10.bind(var5)(var4, var1);
                _fun83257_ip = 956;
                continue _fun83257;
            case 905:
                var2 = var2.length;
                if (!(var3 !== var2)) {
                    _fun83257_ip = 937;
                    continue _fun83257
                }
            case 914:
                var4 = _closure1_slot10;
                var3 = _closure1_slot14;
                var2 = {};
                var2.onClearFilters = var9;
                var2 = var4.bind(var5)(var3, var2);
                _fun83257_ip = 953;
                continue _fun83257;
            case 937:
                var9 = _closure1_slot10;
                var4 = _closure1_slot13;
                var3 = {};
                var2 = var9.bind(var5)(var4, var3);
            case 953:
                var1 = var2;
            case 956:
                _fun83257_ip = 1023;
                continue _fun83257;
            case 958:
                var4 = _closure1_slot10;
                var3 = _closure1_slot5;
                var2 = {};
                var9 = var7.loadingContainer;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var2.style = var7;
                var8 = _closure1_slot10;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = true;
                var6.animating = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 1023:
                var0 = var1;
            case 1026:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestHome.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 5228, 660, 33, 671, 1297, 566, 7227, 1469, 10711, 4084, 1234, 5314, 1568, 5313, 5238, 5214, 481, 10713, 4561, 5922, 5753, 10056, 5230, 10714, 2]);