// modules/nuf/native/components/NewUserModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.createNativeStackNavigator;
    var3 = var3.bind(var6)();
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'borderBottomWidth': 0,
        'backgroundColor': null,
        'shadowColor': 'transparent'
    };
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.header = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/components/NewUserModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun114046: for (var _fun114046_ip = 0;;) switch (_fun114046_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.initialRouteName;
                var11 = var0.initialOnboardingStepIndex;
                var0 = _closure1_slot9;
                var3 = undefined;
                var0 = var0.bind(var3)();
                var _closure2_slot0 = var0;
                var10 = _closure1_slot4;
                var0 = var10.useState;
                var0 = var0.bind(var10)(var11);
                var9 = _closure1_slot3;
                var7 = 2;
                var1 = var9.bind(var3)(var0, var7);
                var5 = 0;
                var0 = var1[var5];
                var _closure2_slot1 = var0;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot2 = var1;
                var1 = var10.useState;
                var1 = var1.bind(var10)(var11);
                var1 = var9.bind(var3)(var1, var7);
                var11 = var1[var5];
                var _closure2_slot3 = var11;
                var1 = var1[var2];
                var _closure2_slot4 = var1;
                var1 = var10.useRef;
                var5 = null;
                var1 = var1.bind(var10)(var5);
                var _closure2_slot5 = var1;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 10;
                var7 = var2[var7];
                var9 = var1.bind(var3)(var7);
                var7 = var9.useAccessibilityNativeStackOptions;
                var7 = var7.bind(var9)();
                var _closure2_slot6 = var7;
                var9 = var10.useCallback;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var0;
                var0 = function(arg0) { // Environment: var8
                    _fun114047: for (var _fun114047_ip = 0;;) switch (_fun114047_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.getNextOnboardingStep;
                            var2 = null;
                            var3 = var2 != var1;
                            if (!var3) {
                                _fun114047_ip = 46;
                                continue _fun114047
                            }
                        case 43:
                            var3 = var1;
                        case 46:
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot1;
                            var3 = var4.bind(var5)(var3, var2, var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                _fun114048: for (var _fun114048_ip = 0;;) switch (_fun114048_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var5 = var0.lastShownStepIndex;
                                        var4 = var0.onboardingStepIndex;
                                        var2 = var0.continueNavigation;
                                        var3 = _closure2_slot2;
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var4);
                                        var3 = _closure2_slot4;
                                        var3 = var3.bind(var0)(var5);
                                        if (!var2) {
                                            _fun114048_ip = 62;
                                            continue _fun114048
                                        }
                                    case 47:
                                        var2 = _closure2_slot5;
                                        var3 = var2.current;
                                        var2 = null;
                                        if (!(var2 == var3)) {
                                            _fun114048_ip = 120;
                                            continue _fun114048
                                        }
                                    case 62:
                                        var5 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var3 = 12;
                                        var3 = var7[var3];
                                        var5 = var5.bind(var0)(var3);
                                        var3 = var5.popWithKey;
                                        var6 = _closure1_slot0;
                                        var2 = 13;
                                        var2 = var7[var2];
                                        var2 = var6.bind(var0)(var2);
                                        var2 = var2.NEW_USER_MODAL_KEY;
                                        var2 = var3.bind(var5)(var2);
                                        _fun114048_ip = 164;
                                        continue _fun114048;
                                    case 120:
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var2 = 11;
                                        var2 = var5[var2];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.continueToNextStep;
                                        var1 = _closure2_slot5;
                                        var1 = var1.current;
                                        var1 = var2.bind(var3)(var4, var1);
                                    case 164:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var9 = var9.bind(var10)(var0, var7);
                var _closure2_slot7 = var9;
                var0 = 14;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useNavigatorBackPressHandler;
                var0 = function() { // Environment: var8
                    var0 = _closure1_slot5;
                    var1 = var0.MinimizeApp;
                    var0 = var1.minimizeApp;
                    var0 = var0.bind(var1)();
                    var0 = true;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var0 = _closure1_slot8;
                var1 = var0.Navigator;
                var0 = {};
                var7 = function arg0() {
                    _fun114050: for (var _fun114050_ip = 0;;) switch (_fun114050_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.navigation;
                            var0 = _closure2_slot5;
                            var0.current = var2;
                            var0 = {
                                'headerStyle': null,
                                'headerShadowVisible': false,
                                'title': '',
                                'headerLeft': null,
                                'headerRight': null,
                                'fullScreenGestureEnabled': false
                            };
                            var2 = _closure2_slot0;
                            var2 = var2.header;
                            var0.headerStyle = var2;
                            var2 = false;
                            var4 = function() {
                                var0 = null;
                                return var0;
                            };
                            var0.headerLeft = var4;
                            var3 = function() {
                                var0 = null;
                                return var0;
                            };
                            var0.headerRight = var3;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 15;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.isAndroid;
                            var4 = var3.bind(var4)();
                            var3 = 'card';
                            if (!var4) {
                                _fun114050_ip = 129;
                                continue _fun114050
                            }
                        case 123:
                            var3 = 'transparentModal';
                        case 129:
                            var0.presentation = var3;
                            var3 = 'slide_from_right';
                            var0.animation = var3;
                            var0.headerBackVisible = var2;
                            var6 = _closure2_slot6;
                            var7 = var0;
                            var1 = copyDataProperties(var7, var6);
                            return var0;
                    }
                };
                var0.screenOptions = var7;
                var7 = var5 != var6;
                var11 = 'choose-avatar';
                var5 = var11;
                if (!var7) {
                    _fun114046_ip = 275;
                    continue _fun114046
                }
            case 272:
                var5 = var6;
            case 275:
                var0.initialRouteName = var5;
                var7 = _closure1_slot6;
                var5 = _closure1_slot8;
                var6 = var5.Screen;
                var4 = {};
                var10 = 'enable-notification';
                var4.name = var10;
                var10 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.RedesignNotificationScreen;
                    return var0;
                };
                var4.getComponent = var10;
                var10 = {};
                var10.onComplete = var9;
                var4.initialParams = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var10 = var5.Screen;
                var6 = {};
                var6.name = var11;
                var11 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.default;
                    return var0;
                };
                var6.getComponent = var11;
                var11 = function() {
                    var0 = {};
                    var1 = function arg0() {
                        var3 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 18;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var6 = arg0;
                        var7 = var0;
                        var4 = copyDataProperties(var7, var6);
                        var5 = function() {
                            var2 = _closure2_slot7;
                            var1 = function arg0() {
                                var0 = arg0;
                                var _closure6_slot0 = var0;
                                var3 = _closure1_slot4;
                                var2 = var3.lazy;
                                var0 = function() { // Environment: var6
                                    var2 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var0[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = 7;
                                    var1 = var0[var1];
                                    var0 = var0.paths;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var5 = var2.bind(var3)(var0);
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 9;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.openAlert;
                                var2 = _closure1_slot6;
                                var1 = {};
                                var6 = function() {
                                    var2 = _closure6_slot0;
                                    var1 = undefined;
                                    var0 = true;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var1.onConfirm = var6;
                                var2 = var2.bind(var0)(var5, var1);
                                var1 = 'skip-avatar-upload';
                                var1 = var3.bind(var4)(var1, var2);
                                return var0;
                            };
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var4 = 'onPress';
                        var0[var4] = var5;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerRight = var1;
                    return var0;
                };
                var6.options = var11;
                var11 = {};
                var11.onComplete = var9;
                var6.initialParams = var11;
                var6 = var7.bind(var3)(var10, var6);
                var4[1] = var6;
                var10 = var5.Screen;
                var6 = {};
                var11 = 'contact-sync';
                var6.name = var11;
                var12 = {};
                var11 = false;
                var12.headerShown = var11;
                var6.options = var12;
                var12 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.ContactSyncOnboardingModal;
                    return var0;
                };
                var6.getComponent = var12;
                var12 = {};
                var12.onComplete = var9;
                var6.initialParams = var12;
                var6 = var7.bind(var3)(var10, var6);
                var4[2] = var6;
                var6 = var5.Screen;
                var5 = {};
                var10 = 'discoverability';
                var5.name = var10;
                var10 = {};
                var10.headerShown = var11;
                var5.options = var10;
                var8 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.default;
                    return var0;
                };
                var5.getComponent = var8;
                var8 = {};
                var8.onComplete = var9;
                var5.initialParams = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 9147, 1297, 671, 14636, 1307, 4029, 5794, 14633, 4562, 14634, 4709, 478, 13114, 14637, 10486, 10476, 14638, 2]);