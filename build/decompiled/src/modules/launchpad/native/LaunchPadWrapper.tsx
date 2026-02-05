// modules/launchpad/native/LaunchPadWrapper.tsx
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
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var6 = var3.Pressable;
    var _closure1_slot6 = var6;
    var6 = var3.TouchableOpacity;
    var _closure1_slot7 = var6;
    var3 = var3.StyleSheet;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.LaunchPadTypes;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot10 = var6;
    var3 = var3.ComponentActions;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': '100%',
        'width': '100%'
    };
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingTop = var11;
    var3.modalWrapper = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'width': '100%'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.height = var9;
    var3.a11yDismiss = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/LaunchPadWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109985: for (var _fun109985_ip = 0;;) switch (_fun109985_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.launchPadType;
                var _closure2_slot0 = var7;
                var14 = var1.gestureState;
                var2 = var1.launchPadShown;
                var18 = var1.launchPadSharedState;
                var13 = var1.launchPadPullTabState;
                var12 = var1.updaters;
                var _closure2_slot1 = var12;
                var1 = _closure1_slot14;
                var3 = undefined;
                var20 = var1.bind(var3)();
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var6 = var5.bind(var3)(var1);
                var1 = {};
                var1.launchPadSharedState = var18;
                var1.launchPadShown = var2;
                var1.gestureState = var14;
                var1 = var6.bind(var3)(var1);
                var8 = var1.launchPadCoverStyles;
                var9 = var1.launchPadStyles;
                var1 = 11;
                var1 = var4[var1];
                var1 = var5.bind(var3)(var1);
                var19 = var1.bind(var3)(var2);
                var _closure2_slot2 = var19;
                var11 = _closure1_slot4;
                var6 = var11.useRef;
                var1 = !var19;
                var1 = var6.bind(var11)(var1);
                var _closure2_slot3 = var1;
                var10 = var11.useState;
                var6 = {};
                var16 = var10.bind(var11)(var6);
                var10 = _closure1_slot3;
                var6 = 2;
                var10 = var10.bind(var3)(var16, var6);
                var6 = 1;
                var6 = var10[var6];
                var _closure2_slot4 = var6;
                var16 = var11.useEffect;
                var10 = new Array(1);
                var10[0] = var19;
                var6 = function() { // Environment: var0
                    _fun109986: for (var _fun109986_ip = 0;;) switch (_fun109986_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            if (var2) {
                                _fun109986_ip = 54;
                                continue _fun109986
                            }
                        case 12:
                            var2 = global;
                            var5 = var2.setTimeout;
                            var4 = undefined;
                            var3 = function() { // Environment: var1
                                var2 = _closure2_slot3;
                                var1 = true;
                                var2.current = var1;
                                var2 = _closure2_slot4;
                                var0 = undefined;
                                var1 = {};
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = 1000;
                            var2 = var5.bind(var4)(var3, var2);
                            var _closure3_slot0 = var2;
                            var1 = function() { // Environment: var1
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var1;
                        case 54:
                            var1 = _closure2_slot3;
                            var0 = false;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var16.bind(var11)(var6, var10);
                var16 = var11.useCallback;
                var10 = new Array(1);
                var10[0] = var12;
                var6 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.setLaunchPadPosition;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var21 = var16.bind(var11)(var6, var10);
                var _closure2_slot5 = var21;
                var16 = var11.useEffect;
                var10 = new Array(1);
                var10[0] = var19;
                var6 = function() { // Environment: var0
                    _fun109990: for (var _fun109990_ip = 0;;) switch (_fun109990_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun109990_ip = 55;
                                continue _fun109990
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.track;
                            var0 = _closure1_slot10;
                            var0 = var0.LAUNCHPAD_OPENED;
                            var0 = var1.bind(var2)(var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var16.bind(var11)(var6, var10);
                var16 = var11.useEffect;
                var10 = new Array(2);
                var10[0] = var7;
                var10[1] = var19;
                var6 = function() { // Environment: var0
                    _fun109991: for (var _fun109991_ip = 0;;) switch (_fun109991_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot9;
                            var2 = var2.PULL_TAB;
                            if (!(var3 === var2)) {
                                _fun109991_ip = 117;
                                continue _fun109991
                            }
                        case 24:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 13;
                            var2 = var4[var2];
                            var5 = undefined;
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.setLaunchPadPullTabExclusionRect;
                            var2 = var2.bind(var3)();
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun109991_ip = 149;
                                continue _fun109991
                            }
                        case 63:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 14;
                            var2 = var6[var1];
                            var3 = var4.bind(var5)(var2);
                            var2 = var3.triggerHapticFeedback;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var2.bind(var3)(var1);
                            _fun109991_ip = 149;
                            continue _fun109991;
                        case 117:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.clearLaunchPadPullTabExclusionRect;
                            var0 = var0.bind(var1)();
                        case 149:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var16.bind(var11)(var6, var10);
                var10 = var11.useEffect;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 13;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.clearLaunchPadPullTabExclusionRect;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var2 = var10.bind(var11)(var2, var6);
                var2 = 15;
                var2 = var4[var2];
                var6 = var5.bind(var3)(var2);
                var2 = function() { // Environment: var0
                    _fun109994: for (var _fun109994_ip = 0;;) switch (_fun109994_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun109994_ip = 20;
                                continue _fun109994
                            }
                        case 10:
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 20:
                            var0 = _closure2_slot2;
                            return var0;
                    }
                };
                var2 = var6.bind(var3)(var2);
                var0 = function arg0() {
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot4;
                    var2 = var3.useEffect;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var2 = var6[var2];
                        var5 = undefined;
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.addRouteChangeListener;
                        var2 = function() { // Environment: var0
                            var2 = _closure3_slot0;
                            var1 = var2.setLaunchPadPosition;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var3.bind(var4)(var2);
                        var _closure4_slot0 = var2;
                        var10 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.setLaunchPadShown;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                            var1 = var2.setLaunchPadPosition;
                            var0 = 1;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var _closure4_slot1 = var10;
                        var4 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.setLaunchPadShown;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                            var1 = var2.setLaunchPadPosition;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var _closure4_slot2 = var4;
                        var3 = _closure1_slot0;
                        var2 = 9;
                        var7 = var6[var2];
                        var7 = var3.bind(var5)(var7);
                        var9 = var7.ComponentDispatch;
                        var8 = var9.subscribe;
                        var1 = _closure1_slot11;
                        var7 = var1.LAUNCH_PAD_SHOW;
                        var7 = var8.bind(var9)(var7, var10);
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.ComponentDispatch;
                        var2 = var3.subscribe;
                        var1 = var1.LAUNCH_PAD_HIDE;
                        var1 = var2.bind(var3)(var1, var4);
                        var0 = function() { // Environment: var0
                            var2 = _closure4_slot0;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 9;
                            var6 = var5[var3];
                            var6 = var4.bind(var0)(var6);
                            var9 = var6.ComponentDispatch;
                            var8 = var9.unsubscribe;
                            var2 = _closure1_slot11;
                            var7 = var2.LAUNCH_PAD_SHOW;
                            var6 = _closure4_slot1;
                            var6 = var8.bind(var9)(var7, var6);
                            var3 = var5[var3];
                            var3 = var4.bind(var0)(var3);
                            var4 = var3.ComponentDispatch;
                            var3 = var4.unsubscribe;
                            var2 = var2.LAUNCH_PAD_HIDE;
                            var1 = _closure4_slot2;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var0 = var0.bind(var3)(var12);
                var0 = 16;
                var0 = var4[var0];
                var0 = var5.bind(var3)(var0);
                var17 = var0.bind(var3)(var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = _closure1_slot8;
                var6 = var6.absoluteFill;
                var0.style = var6;
                var6 = 'box-none';
                var0.pointerEvents = var6;
                var6 = _closure1_slot12;
                var10 = 17;
                var4 = var4[var10];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var4.style = var8;
                var8 = 'none';
                var4.pointerEvents = var8;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = _closure1_slot9;
                var6 = var5.PULL_TAB;
                var5 = null;
                if (!(var7 === var6)) {
                    _fun109985_ip = 538;
                    continue _fun109985
                }
            case 486:
                var11 = _closure1_slot12;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var6 = 18;
                var6 = var16[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.gestureState = var14;
                var6.launchPadSharedState = var18;
                var6.launchPadPullTabState = var13;
                var6.updaters = var12;
                var5 = var11.bind(var3)(var7, var6);
            case 538:
                var4[1] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var5.style = var9;
                if (!var19) {
                    _fun109985_ip = 579;
                    continue _fun109985
                }
            case 577:
                var8 = undefined;
            case 579:
                var5.pointerEvents = var8;
                var10 = _closure1_slot13;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 19;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.AccessibilityView;
                var8 = {};
                var11 = 'launch-pad';
                var8.nativeID = var11;
                var11 = var20.modalWrapper;
                var8.style = var11;
                var8.onAccessibilityEscape = var21;
                var8.accessibilityViewIsModal = var19;
                var14 = _closure1_slot12;
                var12 = _closure1_slot6;
                var11 = {};
                var13 = 'no';
                if (!var19) {
                    _fun109985_ip = 670;
                    continue _fun109985
                }
            case 664:
                var13 = 'yes';
            case 670:
                var11.importantForAccessibility = var13;
                var13 = 'button';
                var11.accessibilityRole = var13;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var22 = 20;
                var23 = var16[var22];
                var23 = var13.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var16[var22];
                var22 = var13.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.WAI6xu;
                var22 = var23.bind(var24)(var22);
                var11.accessibilityLabel = var22;
                var11.onPress = var21;
                var20 = var20.a11yDismiss;
                var11.style = var20;
                var12 = var14.bind(var3)(var12, var11);
                var11 = new Array(3);
                var11[0] = var12;
                var14 = _closure1_slot12;
                var20 = _closure1_slot7;
                var12 = {
                    'accessible': false,
                    'aria-hidden': true
                };
                var12.onPress = var21;
                var21 = _closure1_slot8;
                var21 = var21.absoluteFillObject;
                var12.style = var21;
                var12 = var14.bind(var3)(var20, var12);
                var11[1] = var12;
                var12 = 21;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Freeze;
                var12 = {};
                var16 = !var19;
                if (!var16) {
                    _fun109985_ip = 845;
                    continue _fun109985
                }
            case 842:
                var16 = var17;
            case 845:
                var12.freeze = var16;
                var17 = _closure1_slot12;
                var16 = _closure1_slot1;
                var20 = _closure1_slot2;
                var15 = 22;
                var15 = var20[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var15.visible = var19;
                var15.sharedState = var18;
                var15 = var17.bind(var3)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9865, 660, 33, 1297, 671, 12881, 1229, 14174, 8212, 795, 14171, 3279, 4079, 4737, 3720, 14176, 4066, 1234, 4040, 14178, 2]);