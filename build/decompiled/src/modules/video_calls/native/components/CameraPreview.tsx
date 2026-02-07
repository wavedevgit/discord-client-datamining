// modules/video_calls/native/components/CameraPreview.tsx
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
        _fun63409: for (var _fun63409_ip = 0;;) switch (_fun63409_ip) {
            case 0:
                var0 = arg0;
                var25 = var0.channel;
                var23 = var0.nonSelfPipParticipant;
                var24 = var0.selfParticipant;
                var10 = var0.participantScreenIsFocused;
                var _closure2_slot0 = var10;
                var3 = undefined;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 17;
                var0 = var7[var5];
                var4 = var6.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot12;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var18
                    var1 = _closure1_slot12;
                    var0 = var1.isReactingToThermalState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var22 = var2.bind(var4)(var1, var0);
                var _closure2_slot1 = var22;
                var8 = _closure1_slot1;
                var0 = 18;
                var0 = var7[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.bind(var3)();
                var0 = _closure1_slot3;
                var4 = 2;
                var0 = var0.bind(var3)(var1, var4);
                var1 = 0;
                var29 = var0[var1];
                var13 = 1;
                var28 = var0[var13];
                var _closure2_slot2 = var28;
                var9 = _closure1_slot4;
                var2 = var9.useContext;
                var0 = 19;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.RevealContext;
                var0 = var2.bind(var9)(var0);
                var14 = var0.reveal;
                var _closure2_slot3 = var14;
                var0 = 20;
                var0 = var7[var0];
                var0 = var8.bind(var3)(var0);
                var9 = var0.bind(var3)();
                var _closure2_slot4 = var9;
                var0 = _closure1_slot9;
                var11 = var0.bind(var3)();
                var _closure2_slot5 = var11;
                var0 = 21;
                var0 = var7[var0];
                var2 = var8.bind(var3)(var0);
                var0 = var25.id;
                var2 = var2.bind(var3)(var0);
                var _closure2_slot6 = var2;
                var0 = 22;
                var0 = var7[var0];
                var12 = var6.bind(var3)(var0);
                var0 = var12.useIsScreenLandscape;
                var12 = var0.bind(var12)();
                var0 = 23;
                var0 = var7[var0];
                var0 = var8.bind(var3)(var0);
                var15 = var0.bind(var3)();
                var0 = var15.bottom;
                var _closure2_slot7 = var0;
                var8 = var15.top;
                var _closure2_slot8 = var8;
                var32 = var15.left;
                var31 = var15.right;
                var15 = 24;
                var15 = var7[var15];
                var17 = var6.bind(var3)(var15);
                var16 = var17.useIsViewingActivity;
                var15 = {};
                var19 = var25.id;
                var15.channelId = var19;
                var21 = var16.bind(var17)(var15);
                var5 = var7[var5];
                var15 = var6.bind(var3)(var5);
                var7 = var15.useStateFromStores;
                var5 = _closure1_slot12;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var18
                    var1 = _closure1_slot12;
                    var0 = var1.getVoiceCallOverlayLayoutStates;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var7.bind(var15)(var6, var5);
                var5 = _closure1_slot17;
                var5 = var5.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
                var7 = var6[var5];
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 25;
                var5 = var15[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.OrientationType;
                if (var12) {
                    _fun63409_ip = 456;
                    continue _fun63409
                }
            case 448:
                var15 = var5.PORTRAIT;
                _fun63409_ip = 462;
                continue _fun63409;
            case 456:
                var15 = var5.LANDSCAPE;
            case 462:
                _closure2_slot9 = var15;
                var6 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 26;
                var5 = var16[var5];
                var5 = var6.bind(var3)(var5);
                var16 = var5.bind(var3)(var15);
                var5 = null;
                var17 = var15;
                if (!(var5 == var16)) {
                    _fun63409_ip = 518;
                    continue _fun63409
                }
            case 500:
                var15 = var5 == var7;
                var6 = undefined;
                if (var15) {
                    _fun63409_ip = 515;
                    continue _fun63409
                }
            case 509:
                var6 = var7.screenOrientation;
            case 515:
                var16 = var6;
            case 518:
                _closure2_slot10 = var16;
                var15 = _closure1_slot4;
                var7 = var15.useEffect;
                var6 = new Array(4);
                var6[0] = var17;
                var6[1] = var16;
                var6[2] = var2;
                var6[3] = var28;
                var2 = function() { // Environment: var18
                    _fun63412: for (var _fun63412_ip = 0;;) switch (_fun63412_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun63412_ip = 28;
                                continue _fun63412
                            }
                        case 16:
                            var3 = _closure2_slot10;
                            var2 = _closure2_slot9;
                            var1 = var3 !== var2;
                        case 28:
                            if (!var1) {
                                _fun63412_ip = 35;
                                continue _fun63412
                            }
                        case 31:
                            var1 = _closure2_slot6;
                        case 35:
                            if (!var1) {
                                _fun63412_ip = 78;
                                continue _fun63412
                            }
                        case 38:
                            var2 = _closure2_slot2;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 27;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var0.DEFAULT_PIP_POSITION;
                            var0 = var2.bind(var1)(var0);
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var15)(var2, var6);
                var7 = _closure1_slot4;
                var6 = var7.useState;
                var2 = _closure1_slot16;
                var2 = var8 + var2;
                var6 = var6.bind(var7)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var6, var4);
                var17 = var2[var1];
                _closure2_slot11 = var17;
                var2 = var2[var13];
                _closure2_slot12 = var2;
                var7 = _closure1_slot4;
                var6 = var7.useState;
                var2 = _closure1_slot16;
                var2 = var0 + var2;
                var6 = var6.bind(var7)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var6, var4);
                var15 = var2[var1];
                _closure2_slot13 = var15;
                var2 = var2[var13];
                _closure2_slot14 = var2;
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var2 = new Array(6);
                var2[0] = var14;
                var2[1] = var11;
                var2[2] = var10;
                var2[3] = var9;
                var2[4] = var8;
                var2[5] = var0;
                var0 = function() { // Environment: var18
                    _fun63413: for (var _fun63413_ip = 0;;) switch (_fun63413_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var0 = _closure1_slot16;
                            var3 = var2 + var0;
                            var2 = _closure2_slot7;
                            var0 = _closure1_slot16;
                            var0 = var2 + var0;
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun63413_ip = 62;
                                continue _fun63413
                            }
                        case 37:
                            var4 = _closure2_slot5;
                            var2 = _closure2_slot7;
                            var4 = var4 + var2;
                            var2 = _closure1_slot16;
                            var2 = var4 + var2;
                            var4 = var3;
                            _fun63413_ip = 146;
                            continue _fun63413;
                        case 62:
                            var6 = _closure2_slot3;
                            if (!var6) {
                                _fun63413_ip = 113;
                                continue _fun63413
                            }
                        case 69:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 28;
                            var7 = var7[var6];
                            var6 = undefined;
                            var6 = var8.bind(var6)(var7);
                            var7 = var6.NAV_BAR_HEIGHT;
                            var6 = _closure2_slot8;
                            var7 = var7 + var6;
                            var6 = _closure1_slot16;
                            var3 = var7 + var6;
                        case 113:
                            var6 = _closure2_slot3;
                            if (!var6) {
                                _fun63413_ip = 140;
                                continue _fun63413
                            }
                        case 120:
                            var7 = _closure2_slot4;
                            var6 = _closure2_slot7;
                            var6 = var7 + var6;
                            var5 = _closure1_slot16;
                            var0 = var6 + var5;
                        case 140:
                            var2 = var0;
                            var4 = var3;
                        case 146:
                            var3 = _closure2_slot12;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var4);
                            var1 = _closure2_slot14;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var0, var2);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 15;
                var0 = var11[var9];
                var6 = var10.bind(var3)(var0);
                var2 = var6.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 29;
                    var2 = var6[var3];
                    var4 = undefined;
                    var10 = var5.bind(var4)(var2);
                    var9 = var10.withTiming;
                    var8 = _closure2_slot11;
                    var7 = _closure1_slot25;
                    var7 = var9.bind(var10)(var8, var7);
                    var0.marginTop = var7;
                    var3 = var6[var3];
                    var4 = var5.bind(var4)(var3);
                    var3 = var4.withTiming;
                    var2 = _closure2_slot13;
                    var1 = _closure1_slot25;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.marginBottom = var1;
                    return var0;
                };
                var7 = {};
                var8 = 29;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.withTiming;
                var7.withTiming = var8;
                var7.marginTopState = var17;
                var8 = _closure1_slot25;
                var7.TIMING_CONFIG = var8;
                var7.marginBottomState = var15;
                var0.__closure = var7;
                var7 = 17411027531876.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot27;
                var0.__initData = var7;
                var14 = var2.bind(var6)(var0);
                var2 = _closure1_slot4;
                var0 = var2.useRef;
                var26 = var0.bind(var2)(var5);
                var2 = _closure1_slot4;
                var0 = var2.useState;
                var2 = var0.bind(var2)(var5);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var2, var4);
                var4 = var0[var1];
                var0 = var0[var13];
                _closure2_slot15 = var0;
                var0 = _closure1_slot26;
                var0 = var0.HIDE_PIP;
                if (!(var0 !== var4)) {
                    _fun63409_ip = 1004;
                    continue _fun63409
                }
            case 884:
                var0 = _closure1_slot26;
                var0 = var0.HANDLE_THERMAL_EVENT;
                if (!(var0 !== var4)) {
                    _fun63409_ip = 907;
                    continue _fun63409
                }
            case 898:
                var19 = new Array(0);
                _fun63409_ip = 1088;
                continue _fun63409;
            case 907:
                var1 = {};
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 31;
                var7 = var6[var0];
                var7 = var2.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var0 = var6[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["1fRDnT"];
                var0 = var7.bind(var8)(var0);
                var1.text = var0;
                var0 = 32;
                var0 = var6[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.openIgnoreThermalStateAlert;
                var1.onClick = var0;
                var0 = new Array(1);
                var0[0] = var1;
                var19 = var0;
                _fun63409_ip = 1088;
                continue _fun63409;
            case 1004:
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 31;
                var2 = var8[var0];
                var2 = var7.bind(var3)(var2);
                var6 = var2.intl;
                var2 = var6.string;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.L3I0Jr;
                var0 = var2.bind(var6)(var0);
                var1.text = var0;
                var0 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setPipEnabledWhileFocusedOnActivityOrStream;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.onClick = var0;
                var0 = new Array(1);
                var0[0] = var1;
                var19 = var0;
            case 1088:
                var0 = function arg0() {
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot4;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        _fun63417: for (var _fun63417_ip = 0;;) switch (_fun63417_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.current;
                                var2 = null;
                                var2 = var2 == var1;
                                var7 = undefined;
                                var5 = undefined;
                                if (var2) {
                                    _fun63417_ip = 33;
                                    continue _fun63417
                                }
                            case 27:
                                var5 = var1.close;
                            case 33:
                                var _closure4_slot0 = var5;
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 14;
                                var1 = var8[var1];
                                var1 = var6.bind(var7)(var1);
                                var2 = var1.Gesture;
                                var1 = var2.Tap;
                                var2 = var1.bind(var2)();
                                var1 = var2.onTouchesUp;
                                var0 = function() {
                                    _fun63418: for (var _fun63418_ip = 0;;) switch (_fun63418_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun63418_ip = 56;
                                                continue _fun63418
                                            }
                                        case 13:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var1 = 15;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var3 = var3.bind(var1)(var2);
                                            var2 = var3.runOnJS;
                                            var0 = _closure4_slot0;
                                            var0 = var2.bind(var3)(var0);
                                            var0 = var0.bind(var1)();
                                        case 56:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var4 = {};
                                var4.closeFunc = var5;
                                var5 = 15;
                                var5 = var8[var5];
                                var5 = var6.bind(var7)(var5);
                                var5 = var5.runOnJS;
                                var4.runOnJS = var5;
                                var0.__closure = var4;
                                var4 = 9707001557651.0;
                                var0.__workletHash = var4;
                                var3 = _closure1_slot24;
                                var0.__initData = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var8 = var0.bind(var3)(var26);
                var2 = _closure1_slot23;
                var1 = _closure1_slot22;
                var0 = {};
                var4 = var5 == var4;
                var5 = null;
                if (var4) {
                    _fun63409_ip = 1194;
                    continue _fun63409
                }
            case 1117:
                var7 = _closure1_slot21;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 14;
                var4 = var10[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.GestureDetector;
                var4 = {};
                var4.gesture = var8;
                var11 = _closure1_slot21;
                var10 = _closure1_slot6;
                var8 = {};
                var16 = _closure1_slot5;
                var16 = var16.absoluteFill;
                var8.style = var16;
                var8 = var11.bind(var3)(var10, var8);
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 1194:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot21;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = _closure1_slot5;
                var8 = var8.absoluteFill;
                var5.style = var8;
                var8 = 'box-none';
                var5.pointerEvents = var8;
                var11 = _closure1_slot21;
                var16 = _closure1_slot1;
                var27 = _closure1_slot2;
                var9 = var27[var9];
                var9 = var16.bind(var3)(var9);
                var10 = var9.View;
                var9 = {};
                var30 = {};
                var30.flex = var13;
                var13 = _closure1_slot15;
                var13 = var32 + var13;
                var30.marginLeft = var13;
                var13 = _closure1_slot15;
                var13 = var31 + var13;
                var30.marginRight = var13;
                var13 = new Array(2);
                var13[0] = var30;
                var13[1] = var14;
                var9.style = var13;
                var9.pointerEvents = var8;
                var14 = _closure1_slot21;
                var8 = 27;
                var8 = var27[var8];
                var13 = var16.bind(var3)(var8);
                var8 = {};
                var8.channel = var25;
                var8.preferredPosition = var29;
                var8.onMove = var28;
                var28 = true;
                var8.isInCallScreen = var28;
                var8.marginTop = var17;
                var8.marginBottom = var15;
                var17 = _closure1_slot21;
                var15 = 33;
                var15 = var27[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var15.ref = var26;
                if (!var21) {
                    _fun63409_ip = 1395;
                    continue _fun63409
                }
            case 1392:
                var21 = var22;
            case 1395:
                var21 = !var21;
                var15.disabled = var21;
                var22 = _closure1_slot21;
                var21 = _closure1_slot1;
                var26 = _closure1_slot2;
                var20 = 34;
                var20 = var26[var20];
                var21 = var21.bind(var3)(var20);
                var20 = {};
                var20.channel = var25;
                var20.selfParticipant = var24;
                var20.pipParticipant = var23;
                var20 = var22.bind(var3)(var21, var20);
                var15.trigger = var20;
                var15.rows = var19;
                var19 = function() {
                    _fun63419: for (var _fun63419_ip = 0;;) switch (_fun63419_ip) {
                        case 0:
                            var2 = _closure2_slot15;
                            var1 = _closure2_slot1;
                            var0 = _closure1_slot26;
                            if (var1) {
                                _fun63419_ip = 29;
                                continue _fun63419
                            }
                        case 21:
                            var1 = var0.HIDE_PIP;
                            _fun63419_ip = 35;
                            continue _fun63419;
                        case 29:
                            var1 = var0.HANDLE_THERMAL_EVENT;
                        case 35:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var15.onOpen = var19;
                var18 = function() {
                    var2 = _closure2_slot15;
                    var0 = undefined;
                    var1 = null;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onClose = var18;
                var15 = var17.bind(var3)(var16, var15);
                var8.children = var15;
                var8 = var14.bind(var3)(var13, var8);
                var9.children = var8;
                var8 = 'portrait';
                if (!var12) {
                    _fun63409_ip = 1511;
                    continue _fun63409
                }
            case 1507:
                var8 = 'landscape';
            case 1511:
                var8 = var11.bind(var3)(var10, var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var _closure1_slot5 = var7;
    var3 = var3.View;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useBestActiveChatInputContainerHeight;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useChannelCallStore;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.VoiceChatDrawerState;
    var _closure1_slot14 = var6;
    var6 = var3.VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN;
    var _closure1_slot15 = var6;
    var6 = var3.VOICE_CALL_OVERLAY_VERTICAL_MARGIN;
    var _closure1_slot16 = var6;
    var3 = var3.VoiceCallOverlayType;
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationStreamStates;
    var _closure1_slot18 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ParticipantTypes;
    var _closure1_slot19 = var6;
    var3 = var3.isStreamParticipant;
    var _closure1_slot20 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot21 = var6;
    var6 = var3.Fragment;
    var _closure1_slot22 = var6;
    var3 = var3.jsxs;
    var _closure1_slot23 = var3;
    var3 = {};
    var6 = 'function CameraPreviewTsx1(){const{closeFunc,runOnJS}=this.__closure;if(closeFunc!=null){runOnJS(closeFunc)();}}';
    var3.code = var6;
    var _closure1_slot24 = var3;
    var3 = {};
    var6 = 250;
    var3.duration = var6;
    var6 = 16;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.STANDARD_EASING;
    var3.easing = var6;
    var _closure1_slot25 = var3;
    var3 = {};
    var6 = 'HIDE_PIP';
    var3.HIDE_PIP = var6;
    var6 = 'HANDLE_THERMAL_EVENT';
    var3.HANDLE_THERMAL_EVENT = var6;
    var _closure1_slot26 = var3;
    var3 = {};
    var6 = 'function CameraPreviewTsx2(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}';
    var3.code = var6;
    var _closure1_slot27 = var3;
    var3 = 40;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/CameraPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun63421: for (var _fun63421_ip = 0;;) switch (_fun63421_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.channel;
                var _closure2_slot0 = var8;
                var7 = var1.participantScreenIsFocused;
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun63421_ip = 28;
                    continue _fun63421
                }
            case 26:
                var7 = true;
            case 28:
                var _closure2_slot1 = var7;
                var2 = var1.isChannelCallModalOpen;
                if (!(var2 === var4)) {
                    _fun63421_ip = 44;
                    continue _fun63421
                }
            case 42:
                var2 = false;
            case 44:
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 36;
                var3 = var5[var3];
                var3 = var6.bind(var4)(var3);
                var9 = var3.bind(var4)(var8);
                _closure2_slot2 = var9;
                var10 = _closure1_slot0;
                var14 = 17;
                var3 = var5[var14];
                var13 = var10.bind(var4)(var3);
                var12 = var13.useStateFromStores;
                var3 = _closure1_slot8;
                var11 = new Array(3);
                var11[0] = var3;
                var6 = _closure1_slot11;
                var11[1] = var6;
                var6 = _closure1_slot10;
                var11[2] = var6;
                var6 = function() { // Environment: var0
                    _fun63422: for (var _fun63422_ip = 0;;) switch (_fun63422_ip) {
                        case 0:
                            var3 = _closure1_slot11;
                            var0 = var3.getId;
                            var0 = var0.bind(var3)();
                            var _closure3_slot0 = var0;
                            var3 = _closure1_slot10;
                            var0 = var3.getCurrentUserActiveStream;
                            var4 = var0.bind(var3)();
                            var0 = null;
                            var3 = var0 != var4;
                            if (!var3) {
                                _fun63422_ip = 65;
                                continue _fun63422
                            }
                        case 46:
                            var5 = var4.state;
                            var4 = _closure1_slot18;
                            var4 = var4.ACTIVE;
                            var3 = var5 === var4;
                        case 65:
                            var _closure3_slot1 = var3;
                            var5 = _closure1_slot8;
                            var4 = var5.getStreamParticipants;
                            var3 = _closure2_slot0;
                            var3 = var3.id;
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.find;
                            var1 = function(arg0) { // Environment: var1
                                _fun63423: for (var _fun63423_ip = 0;;) switch (_fun63423_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.user;
                                        var2 = var0.id;
                                        var0 = _closure3_slot0;
                                        var0 = var2 === var0;
                                        if (!var0) {
                                            _fun63423_ip = 31;
                                            continue _fun63423
                                        }
                                    case 27:
                                        var0 = _closure3_slot1;
                                    case 31:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1);
                            var3 = _closure2_slot2;
                            if (!(var0 != var3)) {
                                _fun63422_ip = 150;
                                continue _fun63422
                            }
                        case 119:
                            if (!(var0 != var1)) {
                                _fun63422_ip = 150;
                                continue _fun63422
                            }
                        case 123:
                            var3 = _closure2_slot2;
                            var4 = var3.id;
                            var3 = var1.id;
                            if (!(var4 === var3)) {
                                _fun63422_ip = 150;
                                continue _fun63422
                            }
                        case 141:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (var2) {
                                _fun63422_ip = 153;
                                continue _fun63422
                            }
                        case 150:
                            var0 = var1;
                        case 153:
                            return var0;
                    }
                };
                var13 = var12.bind(var13)(var11, var6);
                var11 = _closure1_slot13;
                var6 = function(arg0) { // Environment: var0
                    _fun63424: for (var _fun63424_ip = 0;;) switch (_fun63424_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.voiceChatDrawerState;
                            var0 = _closure1_slot14;
                            var0 = var0.OPEN;
                            var0 = var2 === var0;
                            if (var0) {
                                _fun63424_ip = 43;
                                continue _fun63424
                            }
                        case 29:
                            var1 = _closure1_slot14;
                            var1 = var1.OPENING;
                            var0 = var2 === var1;
                        case 43:
                            return var0;
                    }
                };
                var6 = var11.bind(var4)(var6);
                var5 = var5[var14];
                var11 = var10.bind(var4)(var5);
                var10 = var11.useStateFromStores;
                var5 = new Array(2);
                var5[0] = var3;
                var3 = _closure1_slot7;
                var5[1] = var3;
                var3 = function() { // Environment: var0
                    _fun63425: for (var _fun63425_ip = 0;;) switch (_fun63425_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var0 = var3.getCurrentEmbeddedActivity;
                            var3 = var0.bind(var3)();
                            var _closure3_slot0 = var3;
                            var0 = null;
                            var3 = var0 == var3;
                            if (var3) {
                                _fun63425_ip = 74;
                                continue _fun63425
                            }
                        case 32:
                            var4 = _closure1_slot8;
                            var3 = var4.getParticipants;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.id;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 37;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getEmbeddedActivityParticipantId;
                                var0 = {};
                                var4 = _closure3_slot0;
                                var5 = var4.applicationId;
                                var0.applicationId = var5;
                                var4 = var4.compositeInstanceId;
                                var0.instanceId = var4;
                                var0 = var2.bind(var3)(var0);
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 74:
                            return var0;
                    }
                };
                var5 = var10.bind(var11)(var5, var3);
                var3 = null;
                var11 = var3 != var5;
                if (!var11) {
                    _fun63421_ip = 244;
                    continue _fun63421
                }
            case 212:
                var12 = var3 == var9;
                var10 = undefined;
                if (var12) {
                    _fun63421_ip = 226;
                    continue _fun63421
                }
            case 221:
                var10 = var9.id;
            case 226:
                var12 = var3 == var5;
                var9 = undefined;
                if (var12) {
                    _fun63421_ip = 240;
                    continue _fun63421
                }
            case 235:
                var9 = var5.id;
            case 240:
                var11 = var10 === var9;
            case 244:
                if (!var11) {
                    _fun63421_ip = 250;
                    continue _fun63421
                }
            case 247:
                var11 = !var6;
            case 250:
                _closure2_slot3 = var11;
                var15 = null;
                if (var11) {
                    _fun63421_ip = 262;
                    continue _fun63421
                }
            case 259:
                var15 = var5;
            case 262:
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 38;
                var5 = var16[var5];
                var9 = var17.bind(var4)(var5);
                var6 = var9.useIsStreamFocused;
                var5 = var8.id;
                var10 = var6.bind(var9)(var5);
                var5 = 24;
                var5 = var16[var5];
                var9 = var17.bind(var4)(var5);
                var6 = var9.useIsViewingActivity;
                var5 = {};
                var12 = var8.id;
                var5.channelId = var12;
                var9 = var6.bind(var9)(var5);
                var5 = var16[var14];
                var20 = var17.bind(var4)(var5);
                var19 = var20.useStateFromStores;
                var6 = _closure1_slot8;
                var18 = new Array(2);
                var18[0] = var6;
                var5 = _closure1_slot11;
                var18[1] = var5;
                var12 = function() { // Environment: var0
                    _fun63427: for (var _fun63427_ip = 0;;) switch (_fun63427_ip) {
                        case 0:
                            var2 = _closure1_slot11;
                            var1 = var2.getId;
                            var6 = var1.bind(var2)();
                            var2 = _closure1_slot8;
                            var1 = var2.getParticipant;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var1 = var1.bind(var2)(var0, var6);
                            var0 = null;
                            var4 = var0 == var1;
                            var5 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun63427_ip = 64;
                                continue _fun63427
                            }
                        case 58:
                            var2 = var1.streamId;
                        case 64:
                            if (!(var0 == var2)) {
                                _fun63427_ip = 77;
                                continue _fun63427
                            }
                        case 68:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun63427_ip = 77;
                                continue _fun63427
                            }
                        case 75:
                            return var0;
                        case 77:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun63427_ip = 86;
                                continue _fun63427
                            }
                        case 84:
                            return var1;
                        case 86:
                            var2 = _closure2_slot2;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun63427_ip = 123;
                                continue _fun63427
                            }
                        case 97:
                            var4 = _closure2_slot2;
                            var7 = var0 == var4;
                            var4 = undefined;
                            if (var7) {
                                _fun63427_ip = 119;
                                continue _fun63427
                            }
                        case 110:
                            var7 = _closure2_slot2;
                            var4 = var7.id;
                        case 119:
                            var2 = var4 !== var6;
                        case 123:
                            var4 = _closure2_slot2;
                            if (!(var0 == var4)) {
                                _fun63427_ip = 173;
                                continue _fun63427
                            }
                        case 131:
                            var7 = _closure2_slot0;
                            var4 = var7.isGuildStageVoice;
                            var4 = var4.bind(var7)();
                            if (var4) {
                                _fun63427_ip = 173;
                                continue _fun63427
                            }
                        case 148:
                            var3 = _closure2_slot0;
                            var4 = var3.id;
                            var3 = function arg0, arg1() {
                                _fun63428: for (var _fun63428_ip = 0;;) switch (_fun63428_ip) {
                                    case 0:
                                        var1 = arg1;
                                        var _closure4_slot0 = var1;
                                        var3 = _closure1_slot8;
                                        var2 = var3.getParticipants;
                                        var1 = arg0;
                                        var3 = var2.bind(var3)(var1);
                                        var4 = var3.length;
                                        var2 = 4;
                                        var1 = var3;
                                        if (!(var4 <= var2)) {
                                            _fun63428_ip = 60;
                                            continue _fun63428
                                        }
                                    case 45:
                                        var2 = var3.filter;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun63429: for (var _fun63429_ip = 0;;) switch (_fun63429_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = _closure1_slot20;
                                                    var0 = undefined;
                                                    var0 = var2.bind(var0)(var1);
                                                    if (!var0) {
                                                        _fun63429_ip = 41;
                                                        continue _fun63429
                                                    }
                                                case 20:
                                                    var1 = var1.user;
                                                    var2 = var1.id;
                                                    var1 = _closure4_slot0;
                                                    var0 = var2 === var1;
                                                case 41:
                                                    var0 = !var0;
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var3)(var0);
                                    case 60:
                                        var2 = var1.length;
                                        var0 = 1;
                                        var0 = var2 > var0;
                                        if (!var0) {
                                            _fun63428_ip = 87;
                                            continue _fun63428
                                        }
                                    case 75:
                                        var2 = var1.length;
                                        var1 = 3;
                                        var0 = var2 <= var1;
                                    case 87:
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var5)(var4, var6);
                            if (var3) {
                                _fun63427_ip = 178;
                                continue _fun63427
                            }
                        case 173:
                            var0 = null;
                            if (!var2) {
                                _fun63427_ip = 181;
                                continue _fun63427
                            }
                        case 178:
                            var0 = var1;
                        case 181:
                            return var0;
                    }
                };
                var12 = var19.bind(var20)(var18, var12);
                var18 = var16[var14];
                var20 = var17.bind(var4)(var18);
                var19 = var20.useStateFromStores;
                var18 = new Array(2);
                var18[0] = var5;
                var18[1] = var6;
                var5 = function() { // Environment: var0
                    _fun63430: for (var _fun63430_ip = 0;;) switch (_fun63430_ip) {
                        case 0:
                            var1 = _closure1_slot20;
                            var0 = _closure2_slot2;
                            var2 = undefined;
                            var6 = var1.bind(var2)(var0);
                            var1 = _closure2_slot2;
                            var0 = null;
                            var1 = var0 == var1;
                            var5 = undefined;
                            if (var1) {
                                _fun63430_ip = 45;
                                continue _fun63430
                            }
                        case 36:
                            var1 = _closure2_slot2;
                            var5 = var1.type;
                        case 45:
                            var1 = _closure1_slot19;
                            var1 = var1.USER;
                            var5 = var5 === var1;
                            if (var6) {
                                _fun63430_ip = 65;
                                continue _fun63430
                            }
                        case 62:
                            if (!var5) {
                                _fun63430_ip = 108;
                                continue _fun63430
                            }
                        case 65:
                            var1 = _closure2_slot2;
                            var7 = var0 == var1;
                            var1 = undefined;
                            if (var7) {
                                _fun63430_ip = 88;
                                continue _fun63430
                            }
                        case 78:
                            var7 = _closure2_slot2;
                            var1 = var7.streamId;
                        case 88:
                            if (!(var0 != var1)) {
                                _fun63430_ip = 108;
                                continue _fun63430
                            }
                        case 92:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun63430_ip = 108;
                                continue _fun63430
                            }
                        case 99:
                            var1 = _closure2_slot2;
                            _fun63430_ip = 264;
                            continue _fun63430;
                        case 108:
                            if (!var6) {
                                _fun63430_ip = 156;
                                continue _fun63430
                            }
                        case 111:
                            var6 = _closure2_slot2;
                            var6 = var0 == var6;
                            var7 = undefined;
                            if (var6) {
                                _fun63430_ip = 138;
                                continue _fun63430
                            }
                        case 124:
                            var6 = _closure2_slot2;
                            var6 = var6.user;
                            var7 = var6.id;
                        case 138:
                            var8 = _closure1_slot11;
                            var6 = var8.getId;
                            var6 = var6.bind(var8)();
                            if (!(var7 === var6)) {
                                _fun63430_ip = 204;
                                continue _fun63430
                            }
                        case 156:
                            var1 = undefined;
                            if (!var5) {
                                _fun63430_ip = 264;
                                continue _fun63430
                            }
                        case 161:
                            var7 = _closure1_slot8;
                            var6 = var7.getStreamParticipants;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var7 = var6.bind(var7)(var5);
                            var6 = var7.find;
                            var5 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var0 = var0.user;
                                var1 = var0.id;
                                var0 = _closure2_slot2;
                                var0 = var0.user;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var6.bind(var7)(var5);
                            _fun63430_ip = 264;
                            continue _fun63430;
                        case 204:
                            var6 = _closure1_slot8;
                            var5 = var6.getParticipant;
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var3 = _closure2_slot2;
                            var3 = var3.user;
                            var3 = var3.id;
                            var4 = var5.bind(var6)(var4, var3);
                            var3 = var0 != var4;
                            if (!var3) {
                                _fun63430_ip = 256;
                                continue _fun63430
                            }
                        case 250:
                            var3 = var4.localVideoDisabled;
                        case 256:
                            var1 = var4;
                            if (!var3) {
                                _fun63430_ip = 264;
                                continue _fun63430
                            }
                        case 262:
                            var1 = null;
                        case 264:
                            var3 = var0 == var1;
                            var2 = undefined;
                            if (var3) {
                                _fun63430_ip = 279;
                                continue _fun63430
                            }
                        case 273:
                            var2 = var1.streamId;
                        case 279:
                            var2 = var0 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun63430_ip = 291;
                                continue _fun63430
                            }
                        case 288:
                            var0 = var1;
                        case 291:
                            return var0;
                    }
                };
                var5 = var19.bind(var20)(var18, var5);
                var18 = var8.id;
                _closure2_slot4 = var18;
                var16 = var16[var14];
                var18 = var17.bind(var4)(var16);
                var17 = var18.useStateFromStores;
                var16 = new Array(1);
                var16[0] = var6;
                var6 = function() { // Environment: var0
                    _fun63432: for (var _fun63432_ip = 0;;) switch (_fun63432_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun63432_ip = 42;
                                continue _fun63432
                            }
                        case 16:
                            var4 = _closure1_slot8;
                            var3 = var4.getSelectedParticipant;
                            var1 = _closure2_slot4;
                            var1 = var3.bind(var4)(var1);
                            var0 = var2 != var1;
                        case 42:
                            return var0;
                    }
                };
                var16 = var17.bind(var18)(var16, var6);
                var6 = function arg0, arg1, arg2() {
                    _fun63433: for (var _fun63433_ip = 0;;) switch (_fun63433_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 17;
                            var4 = var6[var2];
                            var2 = undefined;
                            var7 = var5.bind(var2)(var4);
                            var5 = var7.useStateFromStores;
                            var8 = _closure1_slot8;
                            var4 = new Array(1);
                            var4[0] = var8;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot8;
                                var1 = var2.getSelectedParticipant;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var5 = var5.bind(var7)(var4, var1);
                            var4 = _closure1_slot1;
                            var1 = 35;
                            var1 = var6[var1];
                            var1 = var4.bind(var2)(var1);
                            var0 = var0.id;
                            var1 = var1.bind(var2)(var0);
                            var4 = null;
                            var6 = var4 == var1;
                            var0 = null;
                            if (var6) {
                                _fun63433_ip = 171;
                                continue _fun63433
                            }
                        case 99:
                            var6 = var1.user;
                            var6 = var6.id;
                            var7 = _closure1_slot11;
                            var3 = var7.getId;
                            var3 = var3.bind(var7)();
                            var0 = null;
                            if (!(var6 !== var3)) {
                                _fun63433_ip = 171;
                                continue _fun63433
                            }
                        case 129:
                            var3 = arg1;
                            if (!var3) {
                                _fun63433_ip = 143;
                                continue _fun63433
                            }
                        case 135:
                            var3 = arg2;
                            var0 = null;
                            if (!var3) {
                                _fun63433_ip = 171;
                                continue _fun63433
                            }
                        case 143:
                            var3 = var1.id;
                            var6 = var4 == var5;
                            var2 = undefined;
                            if (var6) {
                                _fun63433_ip = 162;
                                continue _fun63433
                            }
                        case 157:
                            var2 = var5.id;
                        case 162:
                            var0 = null;
                            if (!(var3 !== var2)) {
                                _fun63433_ip = 171;
                                continue _fun63433
                            }
                        case 168:
                            var0 = var1;
                        case 171:
                            return var0;
                    }
                };
                var6 = var6.bind(var4)(var8, var7, var16);
                if (!(var3 != var15)) {
                    _fun63421_ip = 475;
                    continue _fun63421
                }
            case 472:
                var13 = var15;
            case 475:
                if (!(var3 != var13)) {
                    _fun63421_ip = 482;
                    continue _fun63421
                }
            case 479:
                var5 = var13;
            case 482:
                if (!(var3 != var5)) {
                    _fun63421_ip = 489;
                    continue _fun63421
                }
            case 486:
                var6 = var5;
            case 489:
                var5 = null;
                if (!(var12 !== var6)) {
                    _fun63421_ip = 498;
                    continue _fun63421
                }
            case 495:
                var5 = var12;
            case 498:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var14];
                var14 = var13.bind(var4)(var12);
                var13 = var14.useStateFromStores;
                var15 = _closure1_slot12;
                var12 = new Array(1);
                var12[0] = var15;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot12;
                    var0 = var1.isPipEnabledWhileFocusedOnActivityOrStream;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var13.bind(var14)(var12, var0);
                if (!var2) {
                    _fun63421_ip = 556;
                    continue _fun63421
                }
            case 546:
                var12 = var8.isGuildStageVoice;
                var2 = var12.bind(var8)();
            case 556:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 39;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.bind(var4)(var8);
                if (var11) {
                    _fun63421_ip = 587;
                    continue _fun63421
                }
            case 584:
                if (!var10) {
                    _fun63421_ip = 595;
                    continue _fun63421
                }
            case 587:
                if (var0) {
                    _fun63421_ip = 595;
                    continue _fun63421
                }
            case 590:
                var0 = null;
                if (!var9) {
                    _fun63421_ip = 648;
                    continue _fun63421
                }
            case 595:
                if (!(var3 == var5)) {
                    _fun63421_ip = 608;
                    continue _fun63421
                }
            case 599:
                var9 = var3 == var6;
                var0 = null;
                if (var9) {
                    _fun63421_ip = 648;
                    continue _fun63421
                }
            case 608:
                var0 = null;
                if (var2) {
                    _fun63421_ip = 648;
                    continue _fun63421
                }
            case 613:
                var3 = _closure1_slot21;
                var2 = _closure1_slot28;
                var1 = {};
                var1.channel = var8;
                var1.participantScreenIsFocused = var7;
                var1.nonSelfPipParticipant = var6;
                var1.selfParticipant = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 648:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 3949, 7965, 3715, 1216, 7966, 7953, 7954, 660, 3524, 33, 4963, 3721, 4886, 566, 7967, 7959, 7975, 7960, 5414, 1568, 7973, 7888, 5358, 7968, 4703, 4097, 8062, 1234, 8063, 8065, 8066, 7970, 7956, 3953, 8143, 8144, 2]);