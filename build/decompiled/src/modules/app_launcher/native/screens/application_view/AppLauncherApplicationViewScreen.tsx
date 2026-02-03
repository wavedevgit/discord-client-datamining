// modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun107869: for (var _fun107869_ip = 0;;) switch (_fun107869_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.context;
                var13 = var0.application;
                var _closure2_slot0 = var13;
                var11 = var0.lockableScrollableContentOffsetY;
                var18 = var0.initiallyExpanded;
                var10 = var0.installOnDemand;
                var9 = var0.sectionName;
                var8 = var0.onPressBack;
                var7 = var0.onActivityItemSelected;
                var6 = var0.entrypoint;
                var17 = var0.expandBottomSheet;
                var _closure2_slot1 = var17;
                var5 = var0.onCommandExecuted;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var4 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 7;
                var2 = var15[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useRequiredAppLauncherContext;
                var2 = var2.bind(var4)();
                var16 = var2.bottomSheetExpandReasonRef;
                var _closure2_slot2 = var16;
                var2 = var2.chatInputRef;
                var _closure2_slot3 = var2;
                var14 = _closure1_slot1;
                var4 = 8;
                var4 = var15[var4];
                var4 = var14.bind(var3)(var4);
                var19 = var4.bind(var3)();
                var _closure2_slot4 = var19;
                var4 = null;
                if (!(var4 == var18)) {
                    _fun107869_ip = 197;
                    continue _fun107869
                }
            case 166:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 9;
                var4 = var15[var4];
                var14 = var14.bind(var3)(var4);
                var4 = var14.isEmbeddedApp;
                var18 = var4.bind(var14)(var13);
            case 197:
                _closure2_slot5 = var18;
                var15 = _closure1_slot3;
                var14 = var15.useCallback;
                var4 = new Array(2);
                var4[0] = var13;
                var4[1] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure2_slot3;
                    var3 = var0.current;
                    var2 = var3.openCustomKeyboard;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 10;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.APP_LAUNCHER;
                    var1.type = var4;
                    var4 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.APPLICATION_VIEW;
                    var4.initialRouteName = var6;
                    var5 = _closure2_slot0;
                    var4.application = var5;
                    var1.context = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var14.bind(var15)(var2, var4);
                var15 = _closure1_slot3;
                var14 = var15.useEffect;
                var2 = new Array(4);
                var2[0] = var19;
                var2[1] = var18;
                var2[2] = var17;
                var2[3] = var16;
                var1 = function() { // Environment: var1
                    _fun107871: for (var _fun107871_ip = 0;;) switch (_fun107871_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun107871_ip = 14;
                                continue _fun107871
                            }
                        case 10:
                            var1 = _closure2_slot4;
                        case 14:
                            if (!var1) {
                                _fun107871_ip = 82;
                                continue _fun107871
                            }
                        case 17:
                            var3 = _closure2_slot2;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.AppLauncherBottomSheetExpandReason;
                            var2 = var2.APP_VIEW;
                            var3.current = var2;
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun107871_ip = 82;
                                continue _fun107871
                            }
                        case 74:
                            var0 = _closure2_slot1;
                            var0 = var0.bind(var1)();
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var14.bind(var15)(var1, var2);
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 11;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.application = var13;
                var0.context = var12;
                var0.lockableScrollableContentOffsetY = var11;
                var0.installOnDemand = var10;
                var0.sectionName = var9;
                var0.onPressBack = var8;
                var0.onActivityItemSelected = var7;
                var0.entrypoint = var6;
                var0.onCommandExecuted = var5;
                var0.onAauth2Cancel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AppLauncherRouteName;
    var _closure1_slot7 = var6;
    var10 = var3.SCREEN_BACKGROUND_COLOR;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BuiltInSectionId;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.backgroundColor = var10;
    var8.flex = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107872: for (var _fun107872_ip = 0;;) switch (_fun107872_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.route;
                var2 = var0.params;
                var17 = var2.application;
                var0 = var2.applicationId;
                var3 = var2.onPressBack;
                var _closure2_slot0 = var3;
                var18 = var2.context;
                var _closure2_slot1 = var18;
                var15 = var2.initiallyExpanded;
                var14 = var2.installOnDemand;
                var _closure2_slot2 = var14;
                var13 = var2.sectionName;
                var9 = var2.expandBottomSheet;
                var8 = var2.onCommandExecuted;
                var1 = var1.navigation;
                var _closure2_slot3 = var1;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useRequiredAppLauncherContext;
                var1 = var1.bind(var2)();
                var2 = var1.chatInputRef;
                var _closure2_slot4 = var2;
                var10 = var1.entrypoint;
                var11 = var1.onActivityItemSelected;
                var1 = var1.keyboardCloseReasonRef;
                var _closure2_slot5 = var1;
                var1 = _closure1_slot10;
                var6 = var1.bind(var3)();
                var4 = null;
                var2 = var4 == var17;
                var1 = undefined;
                if (var2) {
                    _fun107872_ip = 185;
                    continue _fun107872
                }
            case 180:
                var1 = var17.id;
            case 185:
                if (!(var4 != var1)) {
                    _fun107872_ip = 192;
                    continue _fun107872
                }
            case 189:
                var0 = var1;
            case 192:
                _closure2_slot6 = var0;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 12;
                var1 = var7[var1];
                var7 = var2.bind(var3)(var1);
                var2 = var7.useGetOrFetchApplication;
                var1 = _closure1_slot8;
                var16 = var1.BUILT_IN;
                var1 = null;
                if (!(var0 !== var16)) {
                    _fun107872_ip = 241;
                    continue _fun107872
                }
            case 238:
                var1 = var0;
            case 241:
                var1 = var2.bind(var7)(var1);
                var2 = _closure1_slot8;
                var2 = var2.BUILT_IN;
                if (!(var0 !== var2)) {
                    _fun107872_ip = 269;
                    continue _fun107872
                }
            case 260:
                if (!(var4 != var1)) {
                    _fun107872_ip = 267;
                    continue _fun107872
                }
            case 264:
                var17 = var1;
            case 267:
                _fun107872_ip = 295;
                continue _fun107872;
            case 269:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var17 = var1.FAKE_BUILT_IN_APP;
            case 295:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 13;
                var1 = var7[var1];
                var7 = var2.bind(var3)(var1);
                var2 = var7.useSharedValue;
                var1 = 0;
                var16 = var2.bind(var7)(var1);
                var7 = _closure1_slot3;
                var2 = var7.useEffect;
                var1 = new Array(3);
                var1[0] = var0;
                var1[1] = var18;
                var1[2] = var14;
                var0 = function() { // Environment: var12
                    _fun107873: for (var _fun107873_ip = 0;;) switch (_fun107873_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun107873_ip = 33;
                                continue _fun107873
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var3 = var2.type;
                            var2 = 'channel';
                            var1 = var2 === var3;
                        case 33:
                            if (!var1) {
                                _fun107873_ip = 40;
                                continue _fun107873
                            }
                        case 36:
                            var1 = _closure2_slot2;
                        case 40:
                            if (!var1) {
                                _fun107873_ip = 82;
                                continue _fun107873
                            }
                        case 43:
                            var3 = _closure1_slot6;
                            var2 = var3.queryInstallOnDemandApp;
                            var1 = _closure2_slot6;
                            var0 = _closure2_slot1;
                            var0 = var0.channel;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var6.container;
                var0.style = var6;
                if (!(var4 == var17)) {
                    _fun107872_ip = 464;
                    continue _fun107872
                }
            case 389:
                var7 = _closure1_slot9;
                var6 = _closure1_slot5;
                var4 = {};
                var19 = {};
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var20 = 14;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.EXPANDED_HEADER_HEIGHT;
                var19.paddingTop = var20;
                var4.style = var19;
                var21 = _closure1_slot9;
                var20 = _closure1_slot4;
                var19 = {};
                var19 = var21.bind(var3)(var20, var19);
                var4.children = var19;
                var4 = var7.bind(var3)(var6, var4);
                _fun107872_ip = 540;
                continue _fun107872;
            case 464:
                var7 = _closure1_slot9;
                var6 = _closure1_slot11;
                var5 = {};
                var5.context = var18;
                var5.application = var17;
                var5.lockableScrollableContentOffsetY = var16;
                var5.initiallyExpanded = var15;
                var5.installOnDemand = var14;
                var5.sectionName = var13;
                var12 = function() {
                    _fun107874: for (var _fun107874_ip = 0;;) switch (_fun107874_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107874_ip = 23;
                                continue _fun107874
                            }
                        case 13:
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
                        case 23:
                            var3 = _closure2_slot3;
                            var2 = var3.canGoBack;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun107874_ip = 112;
                                continue _fun107874
                            }
                        case 40:
                            var3 = _closure2_slot5;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 7;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.AppLauncherKeyboardCloseReason;
                            var2 = var2.BACK;
                            var3.current = var2;
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun107874_ip = 126;
                                continue _fun107874
                            }
                        case 100:
                            var1 = var2.closeCustomKeyboard;
                            var1 = var1.bind(var2)();
                            _fun107874_ip = 126;
                            continue _fun107874;
                        case 112:
                            var1 = _closure2_slot3;
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                        case 126:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onPressBack = var12;
                var5.onActivityItemSelected = var11;
                var5.entrypoint = var10;
                var5.expandBottomSheet = var9;
                var5.onCommandExecuted = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 540:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4674, 1468, 4545, 33, 1297, 7733, 13930, 4673, 1567, 13931, 6879, 3720, 13932, 2]);