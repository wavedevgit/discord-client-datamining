// modules/user_settings/native/family_center/UserSettingsFamilyCenter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = _closure1_slot19;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot16;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 10;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Stack;
        var0 = {
            'justify': 'center',
            'align': 'center'
        };
        var5 = var5.loadingContainer;
        var0.style = var5;
        var6 = _closure1_slot16;
        var5 = _closure1_slot7;
        var4 = {};
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        _fun82245: for (var _fun82245_ip = 0;;) switch (_fun82245_ip) {
            case 0:
                var0 = _closure1_slot19;
                var4 = undefined;
                var19 = var0.bind(var4)();
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 13;
                var0 = var11[var1];
                var2 = var10.bind(var4)(var0);
                var0 = 14;
                var0 = var11[var0];
                var0 = var10.bind(var4)(var0);
                var0 = var0.FAMILY_CENTER;
                var0 = var2.bind(var4)(var0);
                var5 = var0.analyticsLocations;
                var26 = _closure1_slot0;
                var0 = 15;
                var0 = var11[var0];
                var2 = var26.bind(var4)(var0);
                var0 = var2.useAcceptedRequestsCount;
                var14 = var0.bind(var2)();
                var0 = 16;
                var0 = var11[var0];
                var0 = var10.bind(var4)(var0);
                var15 = var0.bind(var4)();
                var0 = 17;
                var0 = var11[var0];
                var0 = var10.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var12 = var0.selectedTab;
                var0 = 18;
                var0 = var11[var0];
                var2 = var26.bind(var4)(var0);
                var0 = var2.useSelectedTeenId;
                var9 = var0.bind(var2)();
                var0 = 19;
                var0 = var11[var0];
                var6 = var26.bind(var4)(var0);
                var3 = var6.useStateFromStoresObject;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var7
                    var0 = {};
                    var3 = _closure1_slot8;
                    var2 = var3.getIsInitialized;
                    var2 = var2.bind(var3)();
                    var0.familyCenterInitialized = var2;
                    var2 = _closure1_slot8;
                    var1 = var2.isLoading;
                    var1 = var1.bind(var2)();
                    var0.isLoading = var1;
                    return var0;
                };
                var0 = var3.bind(var6)(var2, var0);
                var6 = var0.familyCenterInitialized;
                var _closure2_slot0 = var6;
                var17 = var0.isLoading;
                var _closure2_slot1 = var17;
                var2 = _closure1_slot9;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var0 = null;
                var2 = var0 != var15;
                var _closure2_slot2 = var2;
                var16 = _closure1_slot4;
                var13 = var16.useState;
                var8 = 0;
                var20 = var13.bind(var16)(var8);
                var16 = _closure1_slot3;
                var13 = 2;
                var13 = var16.bind(var4)(var20, var13);
                var21 = var13[var8];
                var8 = 1;
                var8 = var13[var8];
                var _closure2_slot3 = var8;
                var20 = _closure1_slot4;
                var16 = var20.useCallback;
                var13 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var8 = new Array(0);
                var8 = var16.bind(var20)(var13, var8);
                var13 = 20;
                var13 = var11[var13];
                var20 = var26.bind(var4)(var13);
                var16 = var20.useSegmentedControlState;
                var13 = {};
                var23 = {};
                var25 = 21;
                var22 = var11[var25];
                var22 = var26.bind(var4)(var22);
                var28 = var22.intl;
                var27 = var28.string;
                var24 = 22;
                var22 = var11[var24];
                var22 = var10.bind(var4)(var22);
                var22 = var22.bdBmqy;
                var22 = var27.bind(var28)(var22);
                var23.label = var22;
                var22 = _closure1_slot15;
                var22 = var22.ACTIVITY;
                var23.id = var22;
                var28 = _closure1_slot16;
                var22 = 23;
                var22 = var11[var22];
                var27 = var10.bind(var4)(var22);
                var22 = {};
                var22 = var28.bind(var4)(var27, var22);
                var23.page = var22;
                var22 = new Array(2);
                var22[0] = var23;
                var23 = {};
                var25 = var11[var25];
                var25 = var26.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var11[var24];
                var24 = var10.bind(var4)(var24);
                var24 = var24["gVWG+6"];
                var24 = var25.bind(var26)(var24);
                var23.label = var24;
                var24 = _closure1_slot15;
                var24 = var24.REQUESTS;
                var23.id = var24;
                var26 = _closure1_slot16;
                var24 = 24;
                var24 = var11[var24];
                var25 = var10.bind(var4)(var24);
                var24 = {};
                var24 = var26.bind(var4)(var25, var24);
                var23.page = var24;
                var22[1] = var23;
                var13.items = var22;
                var22 = function arg0() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.selectTab;
                    var3 = _closure1_slot18;
                    var0 = arg0;
                    var0 = var3[var0];
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13.onPageChange = var22;
                var13.pageWidth = var21;
                var22 = _closure1_slot18;
                var21 = var22.indexOf;
                var21 = var21.bind(var22)(var12);
                var13.defaultIndex = var21;
                var21 = var16.bind(var20)(var13);
                var13 = {};
                var13.ageGroup = var15;
                var13.numOfAcceptedRequests = var14;
                var13.selectedTab = var12;
                var13.selectedTeenId = var9;
                var _closure2_slot4 = var13;
                var12 = _closure1_slot4;
                var9 = var12.useRef;
                var9 = var9.bind(var12)(var13);
                var _closure2_slot5 = var9;
                var13 = _closure1_slot4;
                var12 = var13.useEffect;
                var9 = function() { // Environment: var7
                    var1 = _closure2_slot5;
                    var0 = _closure2_slot4;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var9 = var12.bind(var13)(var9);
                var14 = _closure1_slot4;
                var13 = var14.useEffect;
                var12 = new Array(2);
                var12[0] = var6;
                var12[1] = var2;
                var9 = function() { // Environment: var7
                    _fun82250: for (var _fun82250_ip = 0;;) switch (_fun82250_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun82250_ip = 217;
                                continue _fun82250
                            }
                        case 13:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun82250_ip = 217;
                                continue _fun82250
                            }
                        case 23:
                            var0 = _closure2_slot5;
                            var0 = var0.current;
                            var12 = var0.ageGroup;
                            var10 = var0.numOfAcceptedRequests;
                            var9 = var0.selectedTab;
                            var8 = var0.selectedTeenId;
                            var1 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 26;
                            var0 = var6[var0];
                            var5 = undefined;
                            var7 = var1.bind(var5)(var0);
                            var4 = var7.track;
                            var0 = _closure1_slot10;
                            var2 = var0.FAMILY_CENTER_VIEWED;
                            var0 = {};
                            var11 = 'adult';
                            var11 = var11 === var12;
                            var0.is_considered_adult = var11;
                            var0.num_of_accepted_links = var10;
                            var0.selected_teen_id = var8;
                            var8 = _closure1_slot14;
                            var8 = var8[var9];
                            var0.initial_page = var8;
                            var8 = _closure1_slot13;
                            var8 = var8.SETTINGS;
                            var0.source = var8;
                            var0 = var4.bind(var7)(var2, var0);
                            var0 = 27;
                            var0 = var6[var0];
                            var2 = var1.bind(var5)(var0);
                            var1 = var2.increment;
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = 28;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.MetricEvents;
                            var3 = var3.FAMILY_CENTER_VIEW;
                            var0.name = var3;
                            var0 = var1.bind(var2)(var0);
                        case 217:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var13.bind(var14)(var9, var12);
                var9 = 29;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var7 = function() { // Environment: var7
                    _fun82251: for (var _fun82251_ip = 0;;) switch (_fun82251_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 30;
                            var2 = var6[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                            var2 = 31;
                            var2 = var6[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.DismissibleContent;
                            var3 = var2.FAMILY_CENTER_NEW_BADGE;
                            var2 = {};
                            var6 = _closure1_slot12;
                            var6 = var6.AUTO;
                            var2.dismissAction = var6;
                            var6 = true;
                            var2.forceTrack = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure2_slot1;
                            var2 = !var2;
                            if (!var2) {
                                _fun82251_ip = 114;
                                continue _fun82251
                            }
                        case 98:
                            var4 = _closure1_slot8;
                            var3 = var4.canRefetch;
                            var2 = var3.bind(var4)();
                        case 114:
                            if (!var2) {
                                _fun82251_ip = 147;
                                continue _fun82251
                            }
                        case 117:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 25;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.initialPageLoad;
                            var1 = var1.bind(var2)();
                        case 147:
                            return var0;
                    }
                };
                var7 = var9.bind(var4)(var7);
                if (!var6) {
                    _fun82245_ip = 751;
                    continue _fun82245
                }
            case 696:
                if (!(var0 != var3)) {
                    _fun82245_ip = 751;
                    continue _fun82245
                }
            case 700:
                if (var2) {
                    _fun82245_ip = 751;
                    continue _fun82245
                }
            case 703:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 32;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.openAgeGateModal;
                var2 = _closure1_slot11;
                var2 = var2.FAMILY_CENTER;
                var2 = var3.bind(var6)(var2);
                var0 = null;
                _fun82245_ip = 1057;
                continue _fun82245;
            case 751:
                var3 = _closure1_slot16;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = var20[var1];
                var1 = var16.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var7 = _closure1_slot17;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var19.container;
                var5.style = var9;
                var5.onLayout = var8;
                var10 = _closure1_slot16;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var19.segmentedControlContainer;
                var8.style = var11;
                var13 = _closure1_slot16;
                var11 = 33;
                var11 = var20[var11];
                var11 = var16.bind(var4)(var11);
                var12 = var11.SegmentedControl;
                var11 = {};
                var11.state = var21;
                var11 = var13.bind(var4)(var12, var11);
                var8.children = var11;
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot16;
                var10 = _closure1_slot5;
                var9 = {};
                var12 = var19.container;
                var9.style = var12;
                var14 = _closure1_slot16;
                var13 = _closure1_slot6;
                var12 = {};
                var15 = 34;
                var15 = var20[var15];
                var15 = var16.bind(var4)(var15);
                var16 = var15.SafeAreaPaddingView;
                var15 = {};
                var20 = true;
                var15.bottom = var20;
                var19 = var19.content;
                var15.style = var19;
                var20 = _closure1_slot16;
                if (var17) {
                    _fun82245_ip = 991;
                    continue _fun82245
                }
            case 951:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 35;
                var17 = var22[var17];
                var17 = var19.bind(var4)(var17);
                var19 = var17.SegmentedControlPages;
                var17 = {};
                var17.state = var21;
                var17 = var20.bind(var4)(var19, var17);
                _fun82245_ip = 1003;
                continue _fun82245;
            case 991:
                var19 = _closure1_slot20;
                var18 = {};
                var17 = var20.bind(var4)(var19, var18);
            case 1003:
                var15.children = var17;
                var15 = var14.bind(var4)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var4)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1057:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var6 = var3.ScrollView;
    var _closure1_slot6 = var6;
    var3 = var3.ActivityIndicator;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AgeGateSource;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.FamilyCenterPageLocationAnalyticsIds;
    var _closure1_slot13 = var6;
    var6 = var3.FamilyCenterSubPageAnalyticsIds;
    var _closure1_slot14 = var6;
    var6 = var3.FamilyCenterSubPages;
    var _closure1_slot15 = var6;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot16 = var7;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var7 = var6.ACTIVITY;
    var3 = new Array(2);
    var3[0] = var7;
    var6 = var6.REQUESTS;
    var3[1] = var6;
    var _closure1_slot18 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flex': 1
    };
    var3.container = var8;
    var8 = {};
    var9 = 12;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.segmentedControlContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingBottom = var9;
    var3.content = var8;
    var8 = {};
    var9 = '100%';
    var8.minHeight = var9;
    var3.loadingContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/family_center/UserSettingsFamilyCenter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot16;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 36;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.RedesignCompat;
        var0 = {};
        var6 = _closure1_slot16;
        var5 = _closure1_slot21;
        var4 = {};
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4593, 1621, 660, 1219, 1369, 4594, 33, 4080, 1297, 671, 5730, 5583, 6529, 10506, 10507, 6531, 632, 7817, 1234, 1858, 10508, 10560, 4595, 795, 4261, 4266, 4103, 3212, 1358, 4556, 8210, 4736, 7825, 4899, 2]);