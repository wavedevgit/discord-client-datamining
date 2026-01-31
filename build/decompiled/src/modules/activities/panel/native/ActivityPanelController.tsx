// modules/activities/panel/native/ActivityPanelController.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var0 = function(arg0) { // Original name: useActivityOrientationState, environment: var3
        _fun110261: for (var _fun110261_ip = 0;;) switch (_fun110261_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.isConnected;
                var _closure2_slot0 = var9;
                var8 = var0.selectedMode;
                var _closure2_slot1 = var8;
                var3 = var0.isVoicePanelFullscreen;
                var _closure2_slot2 = var3;
                var10 = var0.applicationId;
                var7 = var0.orientationLockStateForApp;
                var0 = undefined;
                var _closure2_slot3 = var0;
                var2 = null;
                if (!(var2 == var7)) {
                    _fun110261_ip = 71;
                    continue _fun110261
                }
            case 58:
                var2 = _closure1_slot11;
                var7 = var2.UNLOCKED;
            case 71:
                _closure2_slot3 = var7;
                var6 = _closure1_slot5;
                var5 = var6.useLayoutEffect;
                var4 = new Array(5);
                var4[0] = var10;
                var4[1] = var9;
                var4[2] = var8;
                var4[3] = var7;
                var4[4] = var3;
                var3 = function() { // Environment: var1
                    _fun110262: for (var _fun110262_ip = 0;;) switch (_fun110262_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun110262_ip = 306;
                                continue _fun110262
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot14;
                            var2 = var2.PANEL;
                            if (!(var3 !== var2)) {
                                _fun110262_ip = 55;
                                continue _fun110262
                            }
                        case 34:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot14;
                            var2 = var2.LAUNCHING_WITH_ORIENTATION_CHANGE;
                            if (!(var3 === var2)) {
                                _fun110262_ip = 274;
                                continue _fun110262
                            }
                        case 55:
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun110262_ip = 274;
                                continue _fun110262
                            }
                        case 65:
                            var2 = _closure2_slot3;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 11;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var1);
                            var1 = var4.isIpadOS;
                            var1 = var1.bind(var4)();
                            if (var1) {
                                _fun110262_ip = 306;
                                continue _fun110262
                            }
                        case 107:
                            var1 = _closure1_slot11;
                            var1 = var1.UNLOCKED;
                            if (!(var1 !== var2)) {
                                _fun110262_ip = 232;
                                continue _fun110262
                            }
                        case 121:
                            var1 = _closure1_slot11;
                            var1 = var1.PORTRAIT;
                            if (!(var1 !== var2)) {
                                _fun110262_ip = 192;
                                continue _fun110262
                            }
                        case 135:
                            var1 = _closure1_slot11;
                            var1 = var1.LANDSCAPE;
                            if (!(var1 === var2)) {
                                _fun110262_ip = 306;
                                continue _fun110262
                            }
                        case 152:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 12;
                            var1 = var4[var1];
                            var5 = var2.bind(var3)(var1);
                            var4 = var5.lockOrientation;
                            var2 = 'LANDSCAPE';
                            var1 = true;
                            var1 = var4.bind(var5)(var2, var1);
                            _fun110262_ip = 306;
                            continue _fun110262;
                        case 192:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 12;
                            var1 = var4[var1];
                            var5 = var2.bind(var3)(var1);
                            var4 = var5.lockOrientation;
                            var2 = 'PORTRAIT';
                            var1 = true;
                            var1 = var4.bind(var5)(var2, var1);
                            _fun110262_ip = 306;
                            continue _fun110262;
                        case 232:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 12;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.unlockOrientation;
                            var1 = {};
                            var4 = true;
                            var1.unlockAfterRotatingToPreviousLock = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun110262_ip = 306;
                            continue _fun110262;
                        case 274:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.restoreDefaultOrientation;
                            var0 = var0.bind(var1)();
                        case 306:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure1_slot5;
                var3 = var4.useLayoutEffect;
                var2 = function() { // Environment: var1
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.restoreDefaultOrientation;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var1 = function(arg0) { // Original name: BaseActivityPanelController, environment: var3
        _fun110265: for (var _fun110265_ip = 0;;) switch (_fun110265_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.children;
                var0 = var1.context;
                var16 = var1.orientationLockStateForApp;
                var14 = var1.mode;
                var _closure2_slot0 = var14;
                var7 = var1.hasConnectedActivity;
                var17 = var1.connectedActivityAppId;
                var _closure2_slot1 = var17;
                var19 = var1.currentApp;
                var11 = var1.updateActivityPanelMode;
                var _closure2_slot2 = var11;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var5 = 15;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.bind(var3)();
                var6 = 16;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var15 = var6.bind(var3)();
                var8 = _closure1_slot0;
                var6 = 14;
                var12 = var10[var6];
                var18 = var8.bind(var3)(var12);
                var13 = var18.useSharedValue;
                var12 = {
                    'x': 4294967295,
                    'y': 4294967295
                };
                var12 = var13.bind(var18)(var12);
                var _closure2_slot3 = var12;
                var13 = 17;
                var13 = var10[var13];
                var13 = var9.bind(var3)(var13);
                var13 = var13.bind(var3)(var5);
                var _closure2_slot4 = var13;
                var6 = var10[var6];
                var18 = var8.bind(var3)(var6);
                var8 = var18.useSharedValue;
                var6 = _closure1_slot16;
                var8 = var8.bind(var18)(var6);
                var _closure2_slot5 = var8;
                var18 = _closure1_slot5;
                var6 = var18.useRef;
                var6 = var6.bind(var18)(var14);
                var _closure2_slot6 = var6;
                var6 = 18;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var10 = var6.bind(var3)();
                var _closure2_slot7 = var10;
                var9 = null;
                var6 = var16;
                if (!(var9 == var6)) {
                    _fun110265_ip = 287;
                    continue _fun110265
                }
            case 256:
                var18 = _closure1_slot0;
                var20 = _closure1_slot3;
                var9 = 19;
                var9 = var20[var9];
                var18 = var18.bind(var3)(var9);
                var9 = var18.getDefaultOrientationLockState;
                var6 = var9.bind(var18)(var19);
            case 287:
                _closure2_slot8 = var6;
                var9 = _closure1_slot17;
                var5 = var5.top;
                var9 = var9.bind(var3)(var15, var5, var6);
                _closure2_slot9 = var9;
                var15 = _closure1_slot5;
                var5 = var15.useRef;
                var5 = var5.bind(var15)(var17);
                _closure2_slot10 = var5;
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var5 = 20;
                var5 = var19[var5];
                var15 = var18.bind(var3)(var5);
                var5 = var15.useIsVoicePanelFullscreen;
                var5 = var5.bind(var15)();
                var20 = _closure1_slot1;
                var15 = 21;
                var15 = var19[var15];
                var15 = var20.bind(var3)(var15);
                var15 = var15.bind(var3)();
                var15 = 22;
                var15 = var19[var15];
                var19 = var18.bind(var3)(var15);
                var18 = var19.useNavigatorBackPressHandler;
                var15 = function() { // Environment: var2
                    _fun110266: for (var _fun110266_ip = 0;;) switch (_fun110266_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var0 = _closure1_slot14;
                            var0 = var0.PANEL;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun110266_ip = 50;
                                continue _fun110266
                            }
                        case 27:
                            var3 = _closure2_slot2;
                            var1 = _closure1_slot14;
                            var2 = var1.PIP;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var0 = true;
                        case 50:
                            return var0;
                    }
                };
                var15 = var18.bind(var19)(var15);
                var19 = _closure1_slot5;
                var18 = var19.useEffect;
                var15 = new Array(5);
                var15[0] = var17;
                var15[1] = var6;
                var15[2] = var14;
                var6 = var9.isWindowLandscape;
                var15[3] = var6;
                var15[4] = var11;
                var6 = function() { // Environment: var2
                    _fun110267: for (var _fun110267_ip = 0;;) switch (_fun110267_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun110267_ip = 29;
                                continue _fun110267
                            }
                        case 13:
                            var1 = _closure2_slot10;
                            var1 = var1.current;
                            if (!(var2 != var1)) {
                                _fun110267_ip = 174;
                                continue _fun110267
                            }
                        case 29:
                            var1 = _closure2_slot1;
                            if (!(var2 == var1)) {
                                _fun110267_ip = 50;
                                continue _fun110267
                            }
                        case 37:
                            var1 = _closure2_slot10;
                            var1 = var1.current;
                            if (!(var2 == var1)) {
                                _fun110267_ip = 148;
                                continue _fun110267
                            }
                        case 50:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot14;
                            var2 = var2.LAUNCHING_WITH_ORIENTATION_CHANGE;
                            var2 = var3 === var2;
                            if (!var2) {
                                _fun110267_ip = 116;
                                continue _fun110267
                            }
                        case 74:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 23;
                            var3 = var5[var3];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var3);
                            var3 = _closure2_slot9;
                            var4 = var3.isWindowLandscape;
                            var3 = _closure2_slot8;
                            var2 = var5.bind(var6)(var4, var3);
                        case 116:
                            if (!var2) {
                                _fun110267_ip = 295;
                                continue _fun110267
                            }
                        case 122:
                            var3 = _closure2_slot2;
                            var1 = _closure1_slot14;
                            var2 = var1.PANEL;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun110267_ip = 295;
                            continue _fun110267;
                        case 148:
                            var3 = _closure2_slot2;
                            var1 = _closure1_slot14;
                            var2 = var1.DISCONNECTED;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun110267_ip = 295;
                            continue _fun110267;
                        case 174:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 23;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var2 = _closure2_slot9;
                            var4 = var2.isWindowLandscape;
                            var2 = _closure2_slot8;
                            var2 = var5.bind(var3)(var4, var2);
                            if (var2) {
                                _fun110267_ip = 276;
                                continue _fun110267
                            }
                        case 222:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 11;
                            var2 = var5[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.isIpadOS;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun110267_ip = 276;
                                continue _fun110267
                            }
                        case 255:
                            var4 = _closure2_slot2;
                            var2 = _closure1_slot14;
                            var2 = var2.LAUNCHING_WITH_ORIENTATION_CHANGE;
                            var2 = var4.bind(var3)(var2);
                            _fun110267_ip = 295;
                            continue _fun110267;
                        case 276:
                            var2 = _closure2_slot2;
                            var1 = _closure1_slot14;
                            var1 = var1.PANEL;
                            var1 = var2.bind(var3)(var1);
                        case 295:
                            var1 = _closure2_slot10;
                            var0 = _closure2_slot1;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var18.bind(var19)(var6, var15);
                var19 = _closure1_slot5;
                var18 = var19.useEffect;
                var15 = new Array(2);
                var15[0] = var14;
                var15[1] = var8;
                var6 = function() { // Environment: var2
                    _fun110268: for (var _fun110268_ip = 0;;) switch (_fun110268_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot14;
                            var2 = var2.PANEL;
                            var2 = var3 === var2;
                            if (!var2) {
                                _fun110268_ip = 50;
                                continue _fun110268
                            }
                        case 27:
                            var3 = _closure2_slot6;
                            var4 = var3.current;
                            var3 = _closure1_slot14;
                            var3 = var3.PANEL;
                            var2 = var4 !== var3;
                        case 50:
                            if (!var2) {
                                _fun110268_ip = 103;
                                continue _fun110268
                            }
                        case 53:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 24;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.dismissKeyboard;
                            var2 = var2.bind(var3)();
                            var3 = _closure2_slot5;
                            var2 = var3.set;
                            var1 = _closure1_slot16;
                            var1 = var2.bind(var3)(var1);
                        case 103:
                            var1 = _closure2_slot6;
                            var0 = _closure2_slot0;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var18.bind(var19)(var6, var15);
                var15 = _closure1_slot20;
                var6 = {};
                var6.isConnected = var7;
                var6.selectedMode = var14;
                var6.isVoicePanelFullscreen = var5;
                var6.applicationId = var17;
                var6.orientationLockStateForApp = var16;
                var6 = var15.bind(var3)(var6);
                var6 = {};
                var6.isActivityConnected = var7;
                if (!var7) {
                    _fun110265_ip = 554;
                    continue _fun110265
                }
            case 540:
                var15 = _closure1_slot14;
                var15 = var15.PANEL;
                var7 = var14 === var15;
            case 554:
                var6.isActivityFocused = var7;
                var6.isVoicePanelFullscreen = var5;
                var5 = function(arg0) { // Original name: useSafeAreaLock, environment: var2
                    var1 = arg0;
                    var6 = var1.isActivityConnected;
                    var _closure3_slot0 = var6;
                    var5 = var1.isActivityFocused;
                    var _closure3_slot1 = var5;
                    var4 = var1.isVoicePanelFullscreen;
                    var _closure3_slot2 = var4;
                    var3 = _closure1_slot5;
                    var2 = var3.useId;
                    var7 = var2.bind(var3)();
                    var _closure3_slot3 = var7;
                    var3 = _closure1_slot5;
                    var2 = var3.useLayoutEffect;
                    var1 = new Array(4);
                    var1[0] = var7;
                    var1[1] = var6;
                    var1[2] = var5;
                    var1[3] = var4;
                    var0 = function() { // Environment: var0
                        _fun110270: for (var _fun110270_ip = 0;;) switch (_fun110270_ip) {
                            case 0:
                                var1 = _closure3_slot2;
                                var0 = undefined;
                                if (var1) {
                                    _fun110270_ip = 79;
                                    continue _fun110270
                                }
                            case 12:
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                if (!var2) {
                                    _fun110270_ip = 77;
                                    continue _fun110270
                                }
                            case 21:
                                var3 = _closure1_slot8;
                                var2 = var3.getState;
                                var4 = var2.bind(var3)();
                                var3 = var4.requestSafeAreaDisableLock;
                                var2 = {};
                                var6 = _closure3_slot3;
                                var2.key = var6;
                                var5 = _closure3_slot1;
                                var2.lockEnabled = var5;
                                var2 = var3.bind(var4)(var2);
                                var1 = function() { // Environment: var2
                                    var1 = _closure1_slot8;
                                    var0 = var1.getState;
                                    var2 = var0.bind(var1)();
                                    var1 = var2.requestSafeAreaDisableLock;
                                    var0 = {};
                                    var3 = _closure3_slot3;
                                    var0.key = var3;
                                    var3 = false;
                                    var0.lockEnabled = var3;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                            case 77:
                                return var1;
                            case 79:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var5 = var5.bind(var3)(var6);
                var5 = function(arg0) { // Original name: useAppFreeze, environment: var2
                    var10 = arg0;
                    var _closure3_slot0 = var10;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var0 = 13;
                    var3 = var14[var0];
                    var0 = undefined;
                    var4 = var13.bind(var0)(var3);
                    var3 = var4.useIsActivityPanelFullscreen;
                    var7 = var3.bind(var4)();
                    var _closure3_slot1 = var7;
                    var5 = _closure1_slot5;
                    var4 = var5.useState;
                    var3 = false;
                    var5 = var4.bind(var5)(var3);
                    var4 = _closure1_slot4;
                    var3 = 2;
                    var4 = var4.bind(var0)(var5, var3);
                    var3 = 0;
                    var6 = var4[var3];
                    var _closure3_slot2 = var6;
                    var3 = 1;
                    var11 = var4[var3];
                    var _closure3_slot3 = var11;
                    var4 = _closure1_slot5;
                    var3 = var4.useId;
                    var5 = var3.bind(var4)();
                    var _closure3_slot4 = var5;
                    var12 = 14;
                    var3 = var14[var12];
                    var9 = var13.bind(var0)(var3);
                    var8 = var9.useAnimatedReaction;
                    var4 = function() { // Original name: l, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        var0 = var0.gestureActive;
                        return var0;
                    };
                    var3 = {};
                    var3.wrapperOffset = var10;
                    var4.__closure = var3;
                    var3 = 5299695936442.0;
                    var4.__workletHash = var3;
                    var3 = _closure1_slot18;
                    var4.__initData = var3;
                    var3 = function(arg0, arg1) { // Original name: s, environment: var1
                        _fun110274: for (var _fun110274_ip = 0;;) switch (_fun110274_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = arg1;
                                if (!(var2 !== var0)) {
                                    _fun110274_ip = 57;
                                    continue _fun110274
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 14;
                                var0 = var1[var0];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var0);
                                var3 = var4.runOnJS;
                                var0 = _closure3_slot3;
                                var0 = var3.bind(var4)(var0);
                                var0 = var0.bind(var1)(var2);
                            case 57:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var10 = {};
                    var12 = var14[var12];
                    var12 = var13.bind(var0)(var12);
                    var12 = var12.runOnJS;
                    var10.runOnJS = var12;
                    var10.setWrapperGestureInProgress = var11;
                    var3.__closure = var10;
                    var10 = 5831467313798.0;
                    var3.__workletHash = var10;
                    var10 = _closure1_slot19;
                    var3.__initData = var10;
                    var3 = var8.bind(var9)(var4, var3);
                    var4 = _closure1_slot5;
                    var3 = var4.useEffect;
                    var2 = new Array(3);
                    var2[0] = var7;
                    var2[1] = var6;
                    var2[2] = var5;
                    var1 = function() { // Environment: var1
                        _fun110275: for (var _fun110275_ip = 0;;) switch (_fun110275_ip) {
                            case 0:
                                var1 = _closure1_slot7;
                                var0 = var1.getState;
                                var2 = var0.bind(var1)();
                                var1 = var2.requestFreezeLock;
                                var0 = {};
                                var4 = _closure3_slot1;
                                if (!var4) {
                                    _fun110275_ip = 39;
                                    continue _fun110275
                                }
                            case 35:
                                var4 = _closure3_slot2;
                            case 39:
                                var0.lockEnabled = var4;
                                var3 = _closure3_slot4;
                                var0.key = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = function() { // Environment: var0
                                    var1 = _closure1_slot7;
                                    var0 = var1.getState;
                                    var2 = var0.bind(var1)();
                                    var1 = var2.requestFreezeLock;
                                    var0 = {};
                                    var3 = false;
                                    var0.lockEnabled = var3;
                                    var3 = _closure3_slot4;
                                    var0.key = var3;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var5 = var5.bind(var3)(var8);
                var7 = _closure1_slot5;
                var6 = var7.useMemo;
                var5 = new Array(7);
                var5[0] = var14;
                var5[1] = var13;
                var5[2] = var12;
                var5[3] = var11;
                var5[4] = var10;
                var5[5] = var9;
                var5[6] = var8;
                var2 = function() { // Environment: var2
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.mode = var2;
                    var2 = _closure2_slot2;
                    var0.setMode = var2;
                    var2 = _closure2_slot9;
                    var0.wrapperDimensions = var2;
                    var2 = _closure2_slot3;
                    var0.pipState = var2;
                    var2 = _closure2_slot4;
                    var0.pipAvoidanceSpecs = var2;
                    var2 = _closure2_slot5;
                    var0.wrapperOffset = var2;
                    var1 = _closure2_slot7;
                    var0.useActivityWebViewLock = var1;
                    return var0;
                };
                var5 = var6.bind(var7)(var2, var5);
                var2 = _closure1_slot15;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.OrientationLockState;
    var _closure1_slot11 = var7;
    var7 = var4.ACTIVITY_PORTRAIT_ASPECT_RATIO;
    var _closure1_slot12 = var7;
    var4 = var4.ACTIVITY_LANDSCAPE_ASPECT_RATIO;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot15 = var4;
    var4 = {
        'x': 0,
        'y': 0,
        'gestureActive': false
    };
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.cachedFunction;
    var4 = function(arg0, arg1, arg2) { // Environment: var3
        _fun110278: for (var _fun110278_ip = 0;;) switch (_fun110278_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var6 = arg2;
                var5 = var0.width;
                var4 = var0.height;
                var1 = var5 > var4;
                var0 = _closure1_slot11;
                var0 = var0.LANDSCAPE;
                if (!(var0 !== var6)) {
                    _fun110278_ip = 254;
                    continue _fun110278
                }
            case 43:
                var0 = _closure1_slot11;
                var0 = var0.PORTRAIT;
                if (!(var0 !== var6)) {
                    _fun110278_ip = 106;
                    continue _fun110278
                }
            case 57:
                var0 = _closure1_slot11;
                var0 = var0.UNLOCKED;
                var0 = {};
                var0.width = var5;
                var6 = var4;
                if (var1) {
                    _fun110278_ip = 83;
                    continue _fun110278
                }
            case 79:
                var6 = var4 - var3;
            case 83:
                var0.height = var6;
                var0.isLandscape = var1;
                var6 = false;
                var0.isLetterboxed = var6;
                var0.isWindowLandscape = var1;
                return var0;
            case 106:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 11;
                var6 = var6[var0];
                var0 = undefined;
                var6 = var7.bind(var0)(var6);
                var0 = var6.isIpadOS;
                var0 = var0.bind(var6)();
                if (!var0) {
                    _fun110278_ip = 144;
                    continue _fun110278
                }
            case 141:
                if (var1) {
                    _fun110278_ip = 212;
                    continue _fun110278
                }
            case 144:
                var0 = {
                    'width': null,
                    'height': null,
                    'isLandscape': false,
                    'isLetterboxed': false,
                    'isWindowLandscape': false
                };
                var6 = global;
                var8 = var6.Math;
                var7 = var8.min;
                var7 = var7.bind(var8)(var5, var4);
                var0.width = var7;
                var7 = var6.Math;
                var6 = var7.max;
                var6 = var6.bind(var7)(var4, var5);
                var6 = var6 - var3;
                var0.height = var6;
                _fun110278_ip = 252;
                continue _fun110278;
            case 212:
                var6 = {};
                var7 = _closure1_slot12;
                var7 = var4 * var7;
                var6.width = var7;
                var6.height = var4;
                var7 = false;
                var6.isLandscape = var7;
                var7 = true;
                var6.isLetterboxed = var7;
                var6.isWindowLandscape = var1;
                var0 = var6;
            case 252:
                return var0;
            case 254:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 11;
                var6 = var6[var0];
                var0 = undefined;
                var6 = var7.bind(var0)(var6);
                var0 = var6.isIpadOS;
                var0 = var0.bind(var6)();
                if (!var0) {
                    _fun110278_ip = 333;
                    continue _fun110278
                }
            case 289:
                if (var1) {
                    _fun110278_ip = 333;
                    continue _fun110278
                }
            case 292:
                var0 = {};
                var0.width = var5;
                var2 = _closure1_slot13;
                var2 = var5 * var2;
                var2 = var2 - var3;
                var0.height = var2;
                var2 = true;
                var0.isLandscape = var2;
                var0.isLetterboxed = var2;
                var0.isWindowLandscape = var1;
                _fun110278_ip = 398;
                continue _fun110278;
            case 333:
                var1 = {
                    'width': null,
                    'height': null,
                    'isLetterboxed': false,
                    'isLandscape': true,
                    'isWindowLandscape': true
                };
                var2 = global;
                var6 = var2.Math;
                var3 = var6.max;
                var3 = var3.bind(var6)(var5, var4);
                var1.width = var3;
                var3 = var2.Math;
                var2 = var3.min;
                var2 = var2.bind(var3)(var4, var5);
                var1.height = var2;
                var0 = var1;
            case 398:
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}';
    var4.code = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}';
    var4.code = var7;
    var _closure1_slot19 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelController.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: ActivityPanelController, environment: var3
        var1 = arg0;
        var4 = var1.children;
        var2 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 25;
        var1 = var7[var1];
        var3 = undefined;
        var9 = var2.bind(var3)(var1);
        var8 = var9.useStateFromStoresObject;
        var1 = _closure1_slot10;
        var6 = new Array(2);
        var6[0] = var1;
        var1 = _closure1_slot6;
        var6[1] = var1;
        var2 = function() { // Environment: var0
            _fun110280: for (var _fun110280_ip = 0;;) switch (_fun110280_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var0 = var1.getActivityPanelMode;
                    var7 = var0.bind(var1)();
                    var0 = var1.getConnectedActivityLocation;
                    var9 = var0.bind(var1)();
                    var0 = var1.getSelfEmbeddedActivityForLocation;
                    var6 = var0.bind(var1)(var9);
                    var3 = null;
                    var0 = var3 == var6;
                    var1 = undefined;
                    var4 = undefined;
                    if (var0) {
                        _fun110280_ip = 56;
                        continue _fun110280
                    }
                case 51:
                    var4 = var6.applicationId;
                case 56:
                    var0 = var3 != var4;
                    var5 = undefined;
                    if (!var0) {
                        _fun110280_ip = 80;
                        continue _fun110280
                    }
                case 65:
                    var8 = _closure1_slot6;
                    var0 = var8.getApplication;
                    var5 = var0.bind(var8)(var4);
                case 80:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var0 = 26;
                    var0 = var10[var0];
                    var8 = var8.bind(var1)(var0);
                    var0 = var8.getEmbeddedActivityLocationChannelId;
                    var8 = var0.bind(var8)(var9);
                    var0 = {};
                    var0.mode = var7;
                    var9 = var3 == var8;
                    var7 = undefined;
                    if (var9) {
                        _fun110280_ip = 159;
                        continue _fun110280
                    }
                case 126:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var9 = 27;
                    var9 = var11[var9];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.bind(var1)(var8);
                    var7 = undefined;
                    if (var9) {
                        _fun110280_ip = 159;
                        continue _fun110280
                    }
                case 156:
                    var7 = var8;
                case 159:
                    var0.connectedActivityInTextChannelId = var7;
                    var6 = var3 != var6;
                    var0.hasConnectedActivity = var6;
                    var0.connectedActivityAppId = var4;
                    var0.currentApp = var5;
                    var3 = var3 == var4;
                    var1 = undefined;
                    if (var3) {
                        _fun110280_ip = 207;
                        continue _fun110280
                    }
                case 192:
                    var3 = _closure1_slot10;
                    var2 = var3.getOrientationLockStateForApp;
                    var1 = var2.bind(var3)(var4);
                case 207:
                    var0.orientationLockStateForApp = var1;
                    return var0;
            }
        };
        var1 = new Array(0);
        var1 = var8.bind(var9)(var6, var2, var1);
        var10 = var1.mode;
        var _closure2_slot0 = var10;
        var13 = var1.connectedActivityInTextChannelId;
        var _closure2_slot1 = var13;
        var9 = var1.hasConnectedActivity;
        var8 = var1.connectedActivityAppId;
        var6 = var1.currentApp;
        var11 = var1.orientationLockStateForApp;
        var12 = _closure1_slot5;
        var2 = var12.useEffect;
        var1 = new Array(2);
        var1[0] = var10;
        var1[1] = var13;
        var0 = function() { // Environment: var0
            _fun110281: for (var _fun110281_ip = 0;;) switch (_fun110281_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot14;
                    var2 = var2.PANEL;
                    if (!(var3 === var2)) {
                        _fun110281_ip = 131;
                        continue _fun110281
                    }
                case 24:
                    var3 = _closure1_slot9;
                    var2 = var3.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var0);
                    var3 = undefined;
                    if (!(var3 !== var0)) {
                        _fun110281_ip = 131;
                        continue _fun110281
                    }
                case 48:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 28;
                    var2 = var4[var2];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.selectChannel;
                    var2 = {};
                    var7 = var0.guild_id;
                    var2.guildId = var7;
                    var7 = var0.id;
                    var2.channelId = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot0;
                    var1 = 29;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.transitionToChannel;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                case 131:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var12)(var0, var1);
        var2 = _closure1_slot15;
        var1 = _closure1_slot21;
        var0 = {};
        var13 = _closure1_slot1;
        var12 = 30;
        var12 = var7[var12];
        var12 = var13.bind(var3)(var12);
        var0.context = var12;
        var0.orientationLockStateForApp = var11;
        var0.mode = var10;
        var0.hasConnectedActivity = var9;
        var0.connectedActivityAppId = var8;
        var0.currentApp = var6;
        var6 = _closure1_slot2;
        var5 = 31;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.updateActivityPanelMode;
        var0.updateActivityPanelMode = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.BaseActivityPanelController = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3413, 13566, 8038, 1372, 1371, 3416, 7876, 33, 1671, 1309, 7779, 14156, 3679, 1568, 1464, 14157, 14160, 8016, 7842, 14161, 4671, 8018, 3677, 566, 3040, 7918, 4195, 3902, 14162, 7874, 2]);