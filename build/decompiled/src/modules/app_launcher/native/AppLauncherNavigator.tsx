// modules/app_launcher/native/AppLauncherNavigator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = ['initialRouteName'];
    var _closure1_slot3 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.createNativeStackNavigator;
    var3 = var3.bind(var7)();
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'backgroundColor': null,
        'paddingTop': 16,
        'overflow': 'visible',
        'flex': 1
    };
    var10 = 7;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var3.navigator = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun107577: for (var _fun107577_ip = 0;;) switch (_fun107577_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.bottomSheetExpandReasonRef;
                var13 = var0.bottomSheetIndex;
                var12 = var0.bottomSheetPosition;
                var27 = var0.context;
                var11 = var0.chatInputRef;
                var24 = var0.contentStyle;
                var10 = var0.entrypoint;
                var _closure2_slot0 = var10;
                var28 = var0.expandBottomSheet;
                var8 = var0.keyboardCloseReasonRef;
                var7 = var0.onActivityItemSelected;
                var6 = var0.width;
                var4 = var0.overrideParams;
                var9 = _closure1_slot1;
                var18 = _closure1_slot2;
                var15 = 8;
                var2 = var18[var15];
                var3 = undefined;
                var5 = var9.bind(var3)(var2);
                var2 = 9;
                var2 = var18[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.APP_LAUNCHER;
                var2 = var5.bind(var3)(var2);
                var17 = var2.analyticsLocations;
                var2 = _closure1_slot11;
                var23 = var2.bind(var3)();
                var16 = _closure1_slot0;
                var2 = 10;
                var2 = var18[var2];
                var9 = var16.bind(var3)(var2);
                var5 = var9.useKeyboardContextForType;
                var2 = 11;
                var2 = var18[var2];
                var2 = var16.bind(var3)(var2);
                var2 = var2.KeyboardTypes;
                var2 = var2.APP_LAUNCHER;
                var2 = var5.bind(var9)(var2);
                var9 = null;
                if (!(var9 != var4)) {
                    _fun107577_ip = 201;
                    continue _fun107577
                }
            case 198:
                var2 = var4;
            case 201:
                var16 = _closure1_slot0;
                var26 = _closure1_slot2;
                var4 = 12;
                var4 = var26[var4];
                var5 = var16.bind(var3)(var4);
                var4 = var5.useAccessibilityNativeStackOptions;
                var22 = var4.bind(var5)();
                var30 = var2.initialRouteName;
                var5 = _closure1_slot4;
                var4 = _closure1_slot3;
                var25 = var5.bind(var3)(var2, var4);
                var18 = _closure1_slot5;
                var5 = var18.useLayoutEffect;
                var4 = new Array(1);
                var4[0] = var10;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot7;
                    var2 = var1.APPLICATION_COMMAND_TOP_OF_FUNNEL;
                    var1 = {};
                    var5 = 'app_launcher';
                    var1.location = var5;
                    var5 = _closure2_slot0;
                    var1.source = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var5.bind(var18)(var1, var4);
                var5 = _closure1_slot8;
                var1 = 14;
                var1 = var26[var1];
                var1 = var16.bind(var3)(var1);
                var4 = var1.NavigationContainer;
                var1 = {};
                var18 = true;
                var1.independent = var18;
                var15 = var26[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.AnalyticsLocationProvider;
                var15 = {};
                var15.value = var17;
                var19 = _closure1_slot9;
                var20 = _closure1_slot10;
                var18 = var20.Navigator;
                var17 = {};
                var17.initialRouteName = var30;
                var21 = {
                    'contentStyle': null,
                    'headerShown': false,
                    'fullScreenGestureEnabled': true
                };
                var29 = var23.navigator;
                var23 = new Array(2);
                var23[0] = var29;
                var23[1] = var24;
                var21.contentStyle = var23;
                var33 = var21;
                var32 = var22;
                var22 = copyDataProperties(var33, var32);
                var17.screenOptions = var21;
                var21 = var20.Screen;
                var20 = {};
                var23 = _closure1_slot6;
                var22 = var23.HOME;
                var20.name = var22;
                var24 = _closure1_slot1;
                var22 = 15;
                var22 = var26[var22];
                var22 = var24.bind(var3)(var22);
                var20.component = var22;
                var22 = {};
                var22.context = var27;
                var26 = var2.initialRouteName;
                var24 = var23.HOME;
                var23 = undefined;
                if (!(var26 === var24)) {
                    _fun107577_ip = 481;
                    continue _fun107577
                }
            case 475:
                var23 = var2.initialSearchQuery;
            case 481:
                var22.initialSearchQuery = var23;
                var20.initialParams = var22;
                var21 = var5.bind(var3)(var21, var20);
                var20 = new Array(4);
                var20[0] = var21;
                var23 = _closure1_slot8;
                var21 = _closure1_slot10;
                var22 = var21.Screen;
                var21 = {};
                var26 = _closure1_slot6;
                var24 = var26.APPLICATION_VIEW;
                var21.name = var24;
                var29 = _closure1_slot1;
                var31 = _closure1_slot2;
                var24 = 16;
                var24 = var31[var24];
                var24 = var29.bind(var3)(var24);
                var21.component = var24;
                var24 = {};
                var24.context = var27;
                var29 = var26.APPLICATION_VIEW;
                var26 = var25;
                if (!(var30 !== var29)) {
                    _fun107577_ip = 581;
                    continue _fun107577
                }
            case 579:
                var26 = {};
            case 581:
                var33 = var24;
                var32 = var26;
                var26 = copyDataProperties(var33, var32);
                var26 = 'expandBottomSheet';
                var24[var26] = var28;
                var21.initialParams = var24;
                var21 = var23.bind(var3)(var22, var21);
                var20[1] = var21;
                var23 = _closure1_slot8;
                var21 = _closure1_slot10;
                var22 = var21.Screen;
                var21 = {};
                var24 = _closure1_slot6;
                var24 = var24.COMMAND_VIEW;
                var21.name = var24;
                var29 = _closure1_slot1;
                var30 = _closure1_slot2;
                var24 = 17;
                var24 = var30[var24];
                var24 = var29.bind(var3)(var24);
                var21.component = var24;
                var24 = {};
                var31 = var27.type;
                var30 = 'channel';
                var29 = undefined;
                if (!(var30 === var31)) {
                    _fun107577_ip = 690;
                    continue _fun107577
                }
            case 687:
                var29 = var27;
            case 690:
                var24.context = var29;
                var31 = var2.initialRouteName;
                var29 = _closure1_slot6;
                var30 = var29.COMMAND_VIEW;
                var29 = var25;
                if (!(var31 !== var30)) {
                    _fun107577_ip = 719;
                    continue _fun107577
                }
            case 717:
                var29 = {};
            case 719:
                var33 = var24;
                var32 = var29;
                var29 = copyDataProperties(var33, var32);
                var24[var26] = var28;
                var21.initialParams = var24;
                var21 = var23.bind(var3)(var22, var21);
                var20[2] = var21;
                var23 = _closure1_slot8;
                var21 = _closure1_slot10;
                var22 = var21.Screen;
                var21 = {};
                var26 = _closure1_slot6;
                var24 = var26.APP_LIST_VIEW;
                var21.name = var24;
                var28 = _closure1_slot1;
                var29 = _closure1_slot2;
                var24 = 18;
                var24 = var29[var24];
                var24 = var28.bind(var3)(var24);
                var21.component = var24;
                var24 = {};
                var24.context = var27;
                var27 = var2.initialRouteName;
                var26 = var26.APP_LIST_VIEW;
                if (!(var27 !== var26)) {
                    _fun107577_ip = 828;
                    continue _fun107577
                }
            case 826:
                var25 = {};
            case 828:
                var33 = var24;
                var32 = var25;
                var25 = copyDataProperties(var33, var32);
                var21.initialParams = var24;
                var21 = var23.bind(var3)(var22, var21);
                var20[3] = var21;
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var15.children = var17;
                var15 = var5.bind(var3)(var16, var15);
                var1.children = var15;
                var4 = var5.bind(var3)(var4, var1);
                var1 = 'customId';
                var1 = var1 in var2;
                if (var1) {
                    _fun107577_ip = 902;
                    continue _fun107577
                }
            case 894:
                var5 = 'referrerId';
                var1 = var5 in var2;
            case 902:
                var9 = null;
                if (!var1) {
                    _fun107577_ip = 934;
                    continue _fun107577
                }
            case 907:
                var1 = {};
                var5 = var2.customId;
                var1.customId = var5;
                var2 = var2.referrerId;
                var1.referrerId = var2;
                var9 = var1;
            case 934:
                var2 = _closure1_slot8;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 19;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.AppLauncherContext;
                var1 = var0.Provider;
                var0 = {};
                var5 = {};
                var5.bottomSheetExpandReasonRef = var14;
                var5.bottomSheetIndex = var13;
                var5.bottomSheetPosition = var12;
                var5.chatInputRef = var11;
                var5.entrypoint = var10;
                var5.entrypointParams = var9;
                var5.keyboardCloseReasonRef = var8;
                var5.onActivityItemSelected = var7;
                var5.width = var6;
                var0.value = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/AppLauncherNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 1468, 660, 33, 9123, 1297, 671, 5726, 5579, 3914, 1567, 5786, 4302, 1470, 13887, 13930, 13950, 13977, 7736, 2]);