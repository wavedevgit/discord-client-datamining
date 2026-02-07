// components_native/common/VoiceSensitivity.tsx
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
    var11 = 1;
    var3 = var5[var11];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var7 = var3.StyleSheet;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppStates;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativePermissionTypes;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'position': 'relative',
        'height': 20
    };
    var3.sensitivity = var8;
    var8 = {
        'position': 'absolute',
        'top': 7,
        'left': 0,
        'right': 0,
        'bottom': 7,
        'flexDirection': 'row'
    };
    var3.sensitivityBar = var8;
    var8 = {
        'position': 'absolute',
        'backgroundColor': null,
        'opacity': 0.5,
        'top': 7,
        'left': 0,
        'right': 0,
        'bottom': 7
    };
    var9 = 10;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.WHITE;
    var8.backgroundColor = var12;
    var3.sensitivityFill = var8;
    var8 = {
        'height': 6,
        'borderRadius': 3
    };
    var3.sensitivityCommon = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.YELLOW_300;
    var8.backgroundColor = var12;
    var3.sensitivityMin = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var8.backgroundColor = var12;
    var3.sensitivityMax = var8;
    var8 = {};
    var8.flex = var11;
    var12 = 11;
    var12 = var5[var12];
    var15 = var4.bind(var0)(var12);
    var14 = var15.hexWithOpacity;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var13 = var12.PRIMARY_400;
    var12 = 0.6;
    var12 = var14.bind(var15)(var13, var12);
    var8.backgroundColor = var12;
    var3.sensitivityDefault = var8;
    var8 = {};
    var8.flex = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.GREEN_360;
    var8.backgroundColor = var9;
    var3.sensitivitySpeaking = var8;
    var8 = {
        'flex': 1,
        'backgroundColor': 'transparent',
        'marginVertical': 4294967286
    };
    var3.sensitivitySlider = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/VoiceSensitivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68660: for (var _fun68660_ip = 0;;) switch (_fun68660_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.auto;
                var _closure2_slot0 = var0;
                var1 = var2.threshold;
                var2 = var2.onThresholdChange;
                var _closure2_slot1 = var2;
                var9 = 100;
                var12 = var1 + var9;
                var7 = _closure1_slot5;
                var1 = var7.useRef;
                var2 = null;
                var14 = var1.bind(var7)(var2);
                var1 = var7.useRef;
                var16 = var1.bind(var7)(var2);
                var1 = var7.useRef;
                var8 = var1.bind(var7)(var2);
                var2 = var7.useState;
                var3 = _closure1_slot8;
                var1 = var3.isCurrentUserSpeaking;
                var1 = var1.bind(var3)();
                var1 = var2.bind(var7)(var1);
                var17 = _closure1_slot4;
                var3 = undefined;
                var15 = 2;
                var2 = var17.bind(var3)(var1, var15);
                var13 = 0;
                var1 = var2[var13];
                var19 = 1;
                var2 = var2[var19];
                var _closure2_slot2 = var2;
                var4 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 12;
                var2 = var11[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var4 = var2.width;
                var _closure2_slot3 = var4;
                var6 = _closure1_slot0;
                var2 = 13;
                var2 = var11[var2];
                var20 = var6.bind(var3)(var2);
                var18 = var20.useStateFromStores;
                var2 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var2;
                var6 = function() { // Environment: var10
                    var1 = _closure1_slot9;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = new Array(0);
                var2 = var18.bind(var20)(var11, var6, var2);
                var _closure2_slot4 = var2;
                var6 = var7.useState;
                var6 = var6.bind(var7)(var13);
                var6 = var17.bind(var3)(var6, var15);
                var11 = var6[var13];
                var _closure2_slot5 = var11;
                var6 = var6[var19];
                var _closure2_slot6 = var6;
                var6 = var7.useState;
                var6 = var6.bind(var7)(var12);
                var18 = var17.bind(var3)(var6, var15);
                var6 = var18[var13];
                var _closure2_slot7 = var6;
                var18 = var18[var19];
                var _closure2_slot8 = var18;
                var18 = var7.useState;
                var9 = var6 / var9;
                var9 = var18.bind(var7)(var9);
                var9 = var17.bind(var3)(var9, var15);
                var18 = var9[var13];
                var9 = var9[var19];
                var _closure2_slot9 = var9;
                var20 = var7.useState;
                var9 = -100;
                var9 = var11 / var9;
                var9 = var19 - var9;
                var9 = var4 * var9;
                var9 = var20.bind(var7)(var9);
                var9 = var17.bind(var3)(var9, var15);
                var15 = var9[var13];
                var9 = var9[var19];
                var _closure2_slot10 = var9;
                var13 = var7.useEffect;
                var9 = new Array(2);
                var9[0] = var0;
                var9[1] = var6;
                var6 = function() { // Environment: var10
                    _fun68662: for (var _fun68662_ip = 0;;) switch (_fun68662_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun68662_ip = 32;
                                continue _fun68662
                            }
                        case 10:
                            var2 = _closure2_slot9;
                            var1 = _closure2_slot7;
                            var0 = 100;
                            var1 = var1 / var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var13.bind(var7)(var6, var9);
                var9 = var7.useEffect;
                var6 = new Array(3);
                var6[0] = var0;
                var6[1] = var11;
                var6[2] = var4;
                var4 = function() { // Environment: var10
                    _fun68663: for (var _fun68663_ip = 0;;) switch (_fun68663_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun68663_ip = 50;
                                continue _fun68663
                            }
                        case 10:
                            var2 = _closure2_slot10;
                            var1 = _closure2_slot3;
                            var3 = _closure2_slot5;
                            var0 = -100;
                            var3 = var3 / var0;
                            var0 = 1;
                            var0 = var0 - var3;
                            var1 = var1 * var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var9.bind(var7)(var4, var6);
                var9 = var7.useCallback;
                var6 = function(arg0, arg1) { // Environment: var10
                    var3 = _closure2_slot2;
                    var0 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot6;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = new Array(0);
                var9 = var9.bind(var7)(var6, var4);
                var _closure2_slot11 = var9;
                var11 = var7.useCallback;
                var6 = function(arg0) { // Environment: var10
                    var2 = _closure2_slot8;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = new Array(0);
                var11 = var11.bind(var7)(var6, var4);
                var6 = var7.useEffect;
                var4 = new Array(2);
                var4[0] = var9;
                var4[1] = var2;
                var2 = function() { // Environment: var10
                    _fun68666: for (var _fun68666_ip = 0;;) switch (_fun68666_ip) {
                        case 0:
                            var1 = function() {
                                var3 = undefined;
                                var0 = undefined;
                                var2 = _closure1_slot3;
                                var1 = function*() { // Environment: var1
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun68669: for (var _fun68669_ip = 0;;) switch (_fun68669_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun68669_ip = 166;
                                                    continue _fun68669
                                                }
                                            case 10:
                                                var4 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var1 = 14;
                                                var1 = var2[var1];
                                                var2 = undefined;
                                                var6 = var4.bind(var2)(var1);
                                                var5 = var6.hasPermission;
                                                var1 = _closure1_slot11;
                                                var4 = var1.AUDIO;
                                                var1 = {};
                                                var7 = false;
                                                var1.showAuthorizationError = var7;
                                                var1 = var5.bind(var6)(var4, var1);
                                                SaveGenerator(address = 70);
                                            case 68:
                                                return var1;
                                            case 70:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun68669_ip = 163;
                                                    continue _fun68669
                                                }
                                            case 76:
                                                var4 = var1;
                                                if (!var4) {
                                                    _fun68669_ip = 92;
                                                    continue _fun68669
                                                }
                                            case 82:
                                                var5 = _closure3_slot0;
                                                var4 = !var5;
                                            case 92:
                                                if (!var4) {
                                                    _fun68669_ip = 160;
                                                    continue _fun68669
                                                }
                                            case 95:
                                                var5 = _closure1_slot7;
                                                var4 = var5.getMediaEngine;
                                                var6 = var4.bind(var5)();
                                                var5 = var6.on;
                                                var4 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var3 = 15;
                                                var3 = var7[var3];
                                                var3 = var4.bind(var2)(var3);
                                                var3 = var3.MediaEngineEvent;
                                                var4 = var3.VoiceActivity;
                                                var3 = _closure2_slot11;
                                                var3 = var5.bind(var6)(var4, var3);
                                            case 160:
                                                return var2;
                                            case 163:
                                                return var1;
                                            case 166:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var3 = var2.bind(var3)(var1);
                                _closure3_slot1 = var3;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var _closure3_slot1 = var1;
                            var2 = _closure2_slot4;
                            var1 = _closure1_slot10;
                            var1 = var1.ACTIVE;
                            if (!(var2 !== var1)) {
                                _fun68666_ip = 41;
                                continue _fun68666
                            }
                        case 37:
                            var1 = undefined;
                            return var1;
                        case 41:
                            var1 = false;
                            var _closure3_slot0 = var1;
                            var2 = function() {
                                var0 = undefined;
                                var3 = _closure3_slot1;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            var0 = function() { // Environment: var0
                                var0 = true;
                                _closure3_slot0 = var0;
                                var2 = _closure1_slot7;
                                var1 = var2.getMediaEngine;
                                var4 = var1.bind(var2)();
                                var3 = var4.removeListener;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.MediaEngineEvent;
                                var2 = var1.VoiceActivity;
                                var1 = _closure2_slot11;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var2, var4);
                if (var0) {
                    _fun68660_ip = 820;
                    continue _fun68660
                }
            case 511:
                var4 = _closure1_slot13;
                var2 = _closure1_slot6;
                var0 = {};
                var13 = _closure1_slot14;
                var6 = var13.sensitivity;
                var0.style = var6;
                var6 = {};
                var7 = var13.sensitivityBar;
                var6.style = var7;
                var9 = _closure1_slot12;
                var7 = {};
                var7.ref = var14;
                var17 = var13.sensitivityCommon;
                var14 = new Array(3);
                var14[0] = var17;
                var17 = var13.sensitivityMin;
                var14[1] = var17;
                var17 = {};
                var17.flex = var18;
                var14[2] = var17;
                var7.style = var14;
                var14 = var9.bind(var3)(var2, var7);
                var7 = new Array(2);
                var7[0] = var14;
                var14 = {};
                var14.ref = var16;
                var17 = var13.sensitivityCommon;
                var16 = new Array(3);
                var16[0] = var17;
                var17 = var13.sensitivityMax;
                var16[1] = var17;
                var17 = {};
                var18 = var19 - var18;
                var17.flex = var18;
                var16[2] = var17;
                var14.style = var16;
                var14 = var9.bind(var3)(var2, var14);
                var7[1] = var14;
                var6.children = var7;
                var7 = var4.bind(var3)(var2, var6);
                var6 = new Array(3);
                var6[0] = var7;
                var7 = {};
                var7.ref = var8;
                var14 = var13.sensitivityFill;
                var8 = new Array(2);
                var8[0] = var14;
                var14 = {};
                var14.left = var15;
                var8[1] = var14;
                var7.style = var8;
                var7 = var9.bind(var3)(var2, var7);
                var6[1] = var7;
                var8 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 18;
                var7 = var14[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {
                    'style': null,
                    'value': null,
                    'minimumValue': 0,
                    'maximumValue': 100,
                    'minimumTrackTintColor': 'transparent',
                    'maximumTrackTintColor': 'transparent'
                };
                var13 = var13.sensitivitySlider;
                var7.style = var13;
                var7.value = var12;
                var7.onValueChange = var11;
                var10 = function arg0() {
                    var2 = _closure2_slot1;
                    var1 = 100;
                    var0 = arg0;
                    var3 = var1 - var0;
                    var0 = undefined;
                    var1 = -1;
                    var1 = var1 * var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7.onSlidingComplete = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[2] = var7;
                var0.children = var6;
                var0 = var4.bind(var3)(var2, var0);
                return var0;
            case 820:
                var0 = _closure1_slot14;
                if (var1) {
                    _fun68660_ip = 835;
                    continue _fun68660
                }
            case 827:
                var10 = var0.sensitivityDefault;
                _fun68660_ip = 841;
                continue _fun68660;
            case 835:
                var10 = var0.sensitivitySpeaking;
            case 841:
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var7 = _closure1_slot12;
                var4 = {};
                var9 = _closure1_slot14;
                var6 = var9.sensitivity;
                var4.style = var6;
                var6 = {};
                var8 = var9.sensitivityBar;
                var6.style = var8;
                var8 = {};
                var11 = var9.sensitivityCommon;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var8.style = var9;
                var8 = var7.bind(var3)(var1, var8);
                var6.children = var8;
                var6 = var7.bind(var3)(var1, var6);
                var4.children = var6;
                var6 = var7.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 16;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.FormHint;
                var5 = {};
                var8 = true;
                var5.inset = var8;
                var8 = 17;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.W3K5Im;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3477, 3950, 5336, 660, 4013, 33, 671, 3241, 1464, 566, 4014, 3634, 5430, 1234, 5479, 2]);