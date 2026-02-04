// modules/app_launcher/native/AppLauncherKeyboard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var12 = 2;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.KEYBOARD_ANIMATION_CONFIG;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var7 = var3.Fragment;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 7;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderTopLeftRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderTopRightRadius = var13;
    var3.onboardingRoundingView = var9;
    var9 = {
        'borderWidth': 2,
        'borderBottomWidth': 0,
        'borderColor': null,
        'borderBottomColor': 'transparent'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_500;
    var9.borderColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderTopLeftRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderTopRightRadius = var13;
    var3.onboardingHeader = var9;
    var9 = {};
    var9.borderWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BRAND_500;
    var9.borderColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderTopLeftRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderTopRightRadius = var10;
    var3.onboardingNavigatorContent = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 'function AppLauncherKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}';
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun107244: for (var _fun107244_ip = 0;;) switch (_fun107244_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.context;
                var _closure2_slot0 = var16;
                var15 = var1.chatInputRef;
                var _closure2_slot1 = var15;
                var25 = var1.onClose;
                var _closure2_slot2 = var25;
                var5 = var1.transitionState;
                var _closure2_slot3 = var5;
                var12 = var1.entrypoint;
                var31 = _closure1_slot0;
                var23 = _closure1_slot2;
                var1 = 8;
                var1 = var23[var1];
                var3 = undefined;
                var2 = var31.bind(var3)(var1);
                var1 = var2.useDefaultAppLauncherWidth;
                var9 = var1.bind(var2)(var12);
                var24 = _closure1_slot3;
                var2 = var24.useRef;
                var1 = 9;
                var1 = var23[var1];
                var1 = var31.bind(var3)(var1);
                var1 = var1.AppLauncherKeyboardCloseReason;
                var1 = var1.DISMISSED;
                var10 = var2.bind(var24)(var1);
                var _closure2_slot4 = var10;
                var1 = var24.useRef;
                var19 = var1.bind(var24)(var3);
                var _closure2_slot5 = var19;
                var1 = _closure1_slot11;
                var14 = var1.bind(var3)();
                var1 = _closure1_slot1;
                var2 = 10;
                var2 = var23[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var21 = var2.maximum;
                var2 = var2.minimum;
                var _closure2_slot6 = var2;
                var6 = var24.useRef;
                var4 = global;
                var8 = var4.Date;
                var4 = var8.now;
                var4 = var4.bind(var8)();
                var4 = var6.bind(var24)(var4);
                var _closure2_slot7 = var4;
                var6 = var24.useRef;
                var4 = false;
                var4 = var6.bind(var24)(var4);
                var _closure2_slot8 = var4;
                var4 = 11;
                var4 = var23[var4];
                var6 = var31.bind(var3)(var4);
                var4 = var6.useIsScreenReaderEnabled;
                var20 = var4.bind(var6)();
                var _closure2_slot9 = var20;
                var4 = 12;
                var4 = var23[var4];
                var6 = var1.bind(var3)(var4);
                var4 = {};
                var8 = var16.channel;
                var8 = var8.id;
                var4.channelId = var8;
                var4 = var6.bind(var3)(var4);
                var8 = var4.visibleContent;
                var _closure2_slot10 = var8;
                var6 = null;
                var13 = var6 != var8;
                var _closure2_slot11 = var13;
                var30 = 13;
                var4 = var23[var30];
                var17 = var31.bind(var3)(var4);
                var11 = var17.useSharedValue;
                var4 = -1;
                var18 = var11.bind(var17)(var4);
                var _closure2_slot12 = var18;
                var4 = var23[var30];
                var17 = var31.bind(var3)(var4);
                var11 = var17.useSharedValue;
                var4 = 0;
                var17 = var11.bind(var17)(var4);
                var4 = var24.useRef;
                var22 = var4.bind(var24)(var6);
                var _closure2_slot13 = var22;
                var11 = var24.useCallback;
                var6 = new Array(1);
                var6[0] = var22;
                var4 = function() { // Environment: var0
                    _fun107245: for (var _fun107245_ip = 0;;) switch (_fun107245_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            var4 = null;
                            var1 = var4 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun107245_ip = 36;
                                continue _fun107245
                            }
                        case 20:
                            var3 = _closure2_slot13;
                            var3 = var3.current;
                            var1 = var4 == var3;
                            var2 = var3;
                        case 36:
                            if (var1) {
                                _fun107245_ip = 49;
                                continue _fun107245
                            }
                        case 39:
                            var1 = var2.expandActionSheet;
                            var1 = var1.bind(var2)();
                        case 49:
                            return var0;
                    }
                };
                var11 = var11.bind(var24)(var4, var6);
                var26 = var24.useCallback;
                var6 = function(arg0, arg1) { // Environment: var0
                    _fun107246: for (var _fun107246_ip = 0;;) switch (_fun107246_ip) {
                        case 0:
                            var0 = arg1;
                            if (!var0) {
                                _fun107246_ip = 16;
                                continue _fun107246
                            }
                        case 6:
                            var2 = 1;
                            var1 = arg0;
                            var0 = var2 === var1;
                        case 16:
                            if (!var0) {
                                _fun107246_ip = 59;
                                continue _fun107246
                            }
                        case 19:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var0 = _closure1_slot6;
                            var0 = var0.TAKE_ACTION;
                            var0 = var1.bind(var2)(var0);
                        case 59:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = new Array(0);
                var29 = var26.bind(var24)(var6, var4);
                var _closure2_slot14 = var29;
                var26 = var24.useEffect;
                var6 = new Array(3);
                var6[0] = var13;
                var6[1] = var18;
                var6[2] = var29;
                var4 = function() { // Environment: var0
                    var3 = _closure2_slot14;
                    var2 = _closure2_slot12;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot11;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var26.bind(var24)(var4, var6);
                var4 = var23[var30];
                var27 = var31.bind(var3)(var4);
                var26 = var27.useAnimatedReaction;
                var6 = function() {
                    var1 = _closure2_slot12;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = {};
                var4.bottomSheetIndex = var18;
                var6.__closure = var4;
                var4 = 15587451723262.0;
                var6.__workletHash = var4;
                var4 = _closure1_slot12;
                var6.__initData = var4;
                var4 = function arg0, arg1() {
                    _fun107249: for (var _fun107249_ip = 0;;) switch (_fun107249_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            if (!(var3 !== var0)) {
                                _fun107249_ip = 62;
                                continue _fun107249
                            }
                        case 10:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var5 = var1.bind(var2)(var0);
                            var4 = var5.runOnJS;
                            var1 = _closure2_slot14;
                            var1 = var4.bind(var5)(var1);
                            var0 = _closure2_slot11;
                            var0 = var1.bind(var2)(var3, var0);
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var28 = {};
                var30 = var23[var30];
                var30 = var31.bind(var3)(var30);
                var30 = var30.runOnJS;
                var28.runOnJS = var30;
                var28.handleOnboardingParamChange = var29;
                var28.showOnboarding = var13;
                var4.__closure = var28;
                var28 = 14003176039781.0;
                var4.__workletHash = var28;
                var28 = _closure1_slot13;
                var4.__initData = var28;
                var4 = var26.bind(var27)(var6, var4);
                var26 = var24.useLayoutEffect;
                var6 = new Array(1);
                var6[0] = var5;
                var4 = function() { // Environment: var0
                    _fun107250: for (var _fun107250_ip = 0;;) switch (_fun107250_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 15;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            if (!(var3 === var2)) {
                                _fun107250_ip = 83;
                                continue _fun107250
                            }
                        case 48:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure1_slot6;
                            var1 = var1.USER_DISMISS;
                            var1 = var2.bind(var0)(var1);
                        case 83:
                            return var0;
                    }
                };
                var4 = var26.bind(var24)(var4, var6);
                var6 = var24.useCallback;
                var4 = new Array(4);
                var4[0] = var8;
                var4[1] = var16;
                var4[2] = var2;
                var4[3] = var13;
                var2 = function(arg0) { // Environment: var0
                    _fun107251: for (var _fun107251_ip = 0;;) switch (_fun107251_ip) {
                        case 0:
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot9;
                            var1 = {};
                            var6 = _closure1_slot8;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 16;
                            var4 = var4[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var4);
                            var5 = var4.BottomSheetBackdrop;
                            var4 = {};
                            var13 = arg0;
                            var14 = var4;
                            var7 = copyDataProperties(var14, var13);
                            var8 = 'collapse';
                            var7 = 'pressBehavior';
                            var4[var7] = var8;
                            var5 = var6.bind(var0)(var5, var4);
                            var4 = new Array(2);
                            var4[0] = var5;
                            var5 = _closure2_slot11;
                            if (!var5) {
                                _fun107251_ip = 183;
                                continue _fun107251
                            }
                        case 94:
                            var8 = _closure1_slot8;
                            var7 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var6 = 17;
                            var6 = var12[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = {};
                            var11 = _closure2_slot0;
                            var6.context = var11;
                            var11 = _closure2_slot10;
                            var6.visibleContent = var11;
                            var11 = _closure1_slot0;
                            var9 = 18;
                            var9 = var12[var9];
                            var11 = var11.bind(var0)(var9);
                            var9 = var11.isAndroid;
                            var11 = var9.bind(var11)();
                            var9 = 0;
                            if (var11) {
                                _fun107251_ip = 172;
                                continue _fun107251
                            }
                        case 168:
                            var9 = _closure2_slot6;
                        case 172:
                            var6.bottomOffset = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 183:
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var4 = var6.bind(var24)(var2, var4);
                var8 = var24.useCallback;
                var6 = new Array(1);
                var6[0] = var19;
                var2 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun107252: for (var _fun107252_ip = 0;;) switch (_fun107252_ip) {
                        case 0:
                            var3 = arg2;
                            var1 = 1;
                            var0 = arg0;
                            if (!(var1 !== var0)) {
                                _fun107252_ip = 312;
                                continue _fun107252
                            }
                        case 16:
                            var0 = arg1;
                            if (!(var1 === var0)) {
                                _fun107252_ip = 312;
                                continue _fun107252
                            }
                        case 26:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 16;
                            var2 = var1[var5];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.ANIMATION_SOURCE;
                            var2 = var2.KEYBOARD;
                            if (!(var3 !== var2)) {
                                _fun107252_ip = 218;
                                continue _fun107252
                            }
                        case 70:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.ANIMATION_SOURCE;
                            var2 = var2.GESTURE;
                            if (!(var3 !== var2)) {
                                _fun107252_ip = 184;
                                continue _fun107252
                            }
                        case 103:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.ANIMATION_SOURCE;
                            var2 = var2.USER;
                            if (!(var3 === var2)) {
                                _fun107252_ip = 150;
                                continue _fun107252
                            }
                        case 136:
                            var2 = _closure2_slot5;
                            var5 = var2.current;
                            _fun107252_ip = 182;
                            continue _fun107252;
                        case 150:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var2 = var4[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.AppLauncherBottomSheetExpandReason;
                            var5 = var2.OTHER;
                        case 182:
                            _fun107252_ip = 216;
                            continue _fun107252;
                        case 184:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var2 = var4[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.AppLauncherBottomSheetExpandReason;
                            var5 = var2.GESTURE;
                        case 216:
                            _fun107252_ip = 250;
                            continue _fun107252;
                        case 218:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var2 = var4[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.AppLauncherBottomSheetExpandReason;
                            var5 = var2.KEYBOARD;
                        case 250:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 19;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.trackWithMetadata;
                            var0 = _closure1_slot5;
                            var2 = var0.APP_LAUNCHER_EXPANDED;
                            var0 = {};
                            var0.reason = var5;
                            var0 = var3.bind(var4)(var2, var0);
                            var0 = _closure2_slot5;
                            var0.current = var1;
                        case 312:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var8.bind(var24)(var2, var6);
                var6 = var24.useCallback;
                var2 = new Array(4);
                var2[0] = var15;
                var2[1] = var20;
                var2[2] = var10;
                var2[3] = var25;
                var0 = function() { // Environment: var0
                    _fun107253: for (var _fun107253_ip = 0;;) switch (_fun107253_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var0 = var0.current;
                            if (var0) {
                                _fun107253_ip = 113;
                                continue _fun107253
                            }
                        case 15:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 19;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.trackWithMetadata;
                            var0 = _closure1_slot5;
                            var2 = var0.APP_LAUNCHER_CLOSED;
                            var0 = {};
                            var5 = global;
                            var6 = var5.Date;
                            var5 = var6.now;
                            var6 = var5.bind(var6)();
                            var5 = _closure2_slot7;
                            var5 = var5.current;
                            var5 = var6 - var5;
                            var0.time_spent = var5;
                            var5 = _closure2_slot4;
                            var5 = var5.current;
                            var0.reason = var5;
                            var0 = var3.bind(var4)(var2, var0);
                        case 113:
                            var2 = _closure2_slot8;
                            var0 = true;
                            var2.current = var0;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 14;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var2 = _closure1_slot6;
                            var2 = var2.USER_DISMISS;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun107253_ip = 183;
                                continue _fun107253
                            }
                        case 175:
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var0)();
                        case 183:
                            var2 = _closure2_slot9;
                            if (!var2) {
                                _fun107253_ip = 209;
                                continue _fun107253
                            }
                        case 190:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = var2.openSystemKeyboard;
                            var1 = var1.bind(var2)();
                        case 209:
                            return var0;
                    }
                };
                var6 = var6.bind(var24)(var0, var2);
                var2 = _closure1_slot8;
                var0 = 20;
                var0 = var23[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.ref = var22;
                var22 = _closure1_slot7;
                var0.animationConfigs = var22;
                var0.animatedIndex = var18;
                var0.animatedPosition = var17;
                var0.chatInputRef = var15;
                var0.forceMaxHeight = var20;
                var0.onAnimate = var8;
                var0.onClose = var6;
                var0.transitionState = var5;
                var0.backdropComponent = var4;
                var4 = var13;
                if (var13) {
                    _fun107244_ip = 849;
                    continue _fun107244
                }
            case 813:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 21;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.AppLauncherEntrypoint;
                var5 = var5.VOICE;
                var4 = var12 === var5;
            case 849:
                var0.disableHeaderRoundingAnimation = var4;
                var4 = var13;
                if (!var13) {
                    _fun107244_ip = 866;
                    continue _fun107244
                }
            case 860:
                var4 = var14.onboardingRoundingView;
            case 866:
                var0.roundingViewStyle = var4;
                var4 = var13;
                if (!var13) {
                    _fun107244_ip = 883;
                    continue _fun107244
                }
            case 877:
                var4 = var14.onboardingHeader;
            case 883:
                var0.headerStyle = var4;
                var4 = true;
                var0.isAppsKeyboard = var4;
                var5 = _closure1_slot0;
                var20 = _closure1_slot2;
                var4 = 21;
                var4 = var20[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.AppLauncherEntrypoint;
                var4 = var4.VOICE;
                var4 = var12 !== var4;
                var0.rendersHandle = var4;
                var0.width = var9;
                var6 = _closure1_slot8;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = {};
                var22 = 'relative';
                var8.position = var22;
                var8.height = var21;
                var4.style = var8;
                var8 = _closure1_slot1;
                var7 = 22;
                var7 = var20[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.bottomSheetExpandReasonRef = var19;
                var7.bottomSheetIndex = var18;
                var7.bottomSheetPosition = var17;
                var7.context = var16;
                var7.chatInputRef = var15;
                if (!var13) {
                    _fun107244_ip = 1019;
                    continue _fun107244
                }
            case 1013:
                var13 = var14.onboardingNavigatorContent;
            case 1019:
                var7.contentStyle = var13;
                var7.entrypoint = var12;
                var7.expandBottomSheet = var11;
                var7.keyboardCloseReasonRef = var10;
                var7.width = var9;
                var7 = var6.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/AppLauncherKeyboard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 1369, 13853, 33, 1297, 671, 7738, 7736, 11356, 4070, 11735, 3720, 13854, 4028, 4933, 13855, 478, 4302, 13884, 7737, 13886, 2]);