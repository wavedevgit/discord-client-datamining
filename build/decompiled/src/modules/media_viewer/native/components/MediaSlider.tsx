// modules/media_viewer/native/components/MediaSlider.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun70288: for (var _fun70288_ip = 0;;) switch (_fun70288_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var5;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var3);
            var10 = 0;
            var3 = var5[var10];
            var0 = undefined;
            var3 = var6.bind(var0)(var3);
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
            var7 = var3.StyleSheet;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot6 = var6;
            var3 = var3.jsxs;
            var _closure1_slot7 = var3;
            var6 = var7.create;
            var3 = {};
            var13 = 12;
            var8 = {
                'flex': 1,
                'marginHorizontal': 12,
                'flexDirection': 'row',
                'alignItems': 'center',
                'justifyContent': 'space-between'
            };
            var3.container = var8;
            var8 = {};
            var9 = 16;
            var8.marginRight = var9;
            var3.icon = var8;
            var8 = {};
            var11 = 4;
            var12 = var5[var11];
            var14 = var4.bind(var0)(var12);
            var12 = var14.isAndroid;
            var14 = var12.bind(var14)();
            var12 = undefined;
            if (!var14) {
                _fun70288_ip = 225;
                continue _fun70288
            }
        case 222:
            var12 = var13;
        case 225:
            var8.lineHeight = var12;
            var3.centerText = var8;
            var8 = {
                'flex': 1,
                'marginHorizontal': 16,
                'backgroundColor': 'transparent',
                'zIndex': 0
            };
            var3.downloadProgressTrack = var8;
            var8 = {
                'position': 'relative',
                'flex': 1,
                'marginHorizontal': null,
                'justifyContent': 'center'
            };
            var11 = var5[var11];
            var12 = var4.bind(var0)(var11);
            var11 = var12.isAndroid;
            var11 = var11.bind(var12)();
            if (!var11) {
                _fun70288_ip = 294;
                continue _fun70288
            }
        case 292:
            var9 = 0;
        case 294:
            var8.marginHorizontal = var9;
            var3.sliderContainer = var8;
            var8 = {
                'position': 'relative',
                'flex': 1,
                'marginHorizontal': 0,
                'justifyContent': 'center'
            };
            var3.progressSliderContainer = var8;
            var8 = {
                'position': 'absolute',
                'width': '100%',
                'backgroundColor': 'transparent',
                'zIndex': 0
            };
            var3.timelineBackgroundSlider = var8;
            var8 = {
                'position': 'absolute',
                'width': '100%',
                'backgroundColor': 'transparent',
                'zIndex': 1
            };
            var3.downloadProgressSlider = var8;
            var8 = {
                'position': 'absolute',
                'width': '100%',
                'zIndex': 2
            };
            var3.playbackSlider = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot8 = var3;
            var3 = 17;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/media_viewer/native/components/MediaSlider.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: MediaSlider, environment: var1
                _fun70289: for (var _fun70289_ip = 0;;) switch (_fun70289_ip) {
                    case 0:
                        var1 = arg0;
                        var6 = var1.style;
                        var0 = var1.controls;
                        var _closure2_slot0 = var0;
                        var7 = var1.paused;
                        var _closure2_slot1 = var7;
                        var2 = var1.setPaused;
                        var _closure2_slot2 = var2;
                        var1 = var1.onPlayPress;
                        var _closure2_slot3 = var1;
                        var4 = _closure1_slot4;
                        var2 = var4.useRef;
                        var1 = false;
                        var1 = var2.bind(var4)(var1);
                        var _closure2_slot4 = var1;
                        var1 = var4.useState;
                        var23 = 0;
                        var1 = var1.bind(var4)(var23);
                        var9 = _closure1_slot3;
                        var3 = undefined;
                        var5 = 2;
                        var1 = var9.bind(var3)(var1, var5);
                        var25 = var1[var23];
                        var2 = 1;
                        var1 = var1[var2];
                        var _closure2_slot5 = var1;
                        var1 = var4.useState;
                        var1 = var1.bind(var4)(var23);
                        var1 = var9.bind(var3)(var1, var5);
                        var31 = var1[var23];
                        var1 = var1[var2];
                        var _closure2_slot6 = var1;
                        var1 = var4.useState;
                        var22 = 'transparent';
                        var1 = var1.bind(var4)(var22);
                        var1 = var9.bind(var3)(var1, var5);
                        var28 = var1[var23];
                        var1 = var1[var2];
                        var _closure2_slot7 = var1;
                        var1 = var4.useRef;
                        var8 = var1.bind(var4)(var23);
                        var _closure2_slot8 = var8;
                        var1 = var4.useState;
                        var1 = var1.bind(var4)(var23);
                        var1 = var9.bind(var3)(var1, var5);
                        var18 = var1[var23];
                        var1 = var1[var2];
                        var _closure2_slot9 = var1;
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 5;
                        var5 = var9[var1];
                        var10 = var2.bind(var3)(var5);
                        var5 = function() { // Environment: var12
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.throttle;
                            var1 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot5;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = 100;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var21 = var10.bind(var3)(var5);
                        var _closure2_slot10 = var21;
                        var1 = var9[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = function() { // Environment: var12
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.throttle;
                            var1 = function(arg0) { // Environment: var0
                                _fun70293: for (var _fun70293_ip = 0;;) switch (_fun70293_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = _closure2_slot6;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var4);
                                        var2 = _closure2_slot7;
                                        var1 = 'transparent';
                                        var3 = 1;
                                        if (!(var3 === var4)) {
                                            _fun70293_ip = 97;
                                            continue _fun70293
                                        }
                                    case 32:
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var3 = 7;
                                        var3 = var5[var3];
                                        var4 = var4.bind(var0)(var3);
                                        var3 = '#FFFFFF';
                                        var5 = var4.bind(var0)(var3);
                                        var4 = var5.alpha;
                                        var3 = 0.2;
                                        var4 = var4.bind(var5)(var3);
                                        var3 = var4.hex;
                                        var1 = var3.bind(var4)();
                                    case 97:
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var0 = 100;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        var _closure2_slot11 = var1;
                        var5 = var4.useEffect;
                        var2 = new Array(1);
                        var2[0] = var21;
                        var1 = function() { // Environment: var12
                            var0 = function() { // Environment: var0
                                var1 = _closure2_slot10;
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                        };
                        var1 = var5.bind(var4)(var1, var2);
                        var10 = var0.useSubscribe;
                        var5 = function(arg0, arg1) { // Environment: var12
                            var3 = _closure2_slot10;
                            var0 = undefined;
                            var2 = arg0;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot8;
                            var1 = arg1;
                            var2.current = var1;
                            return var0;
                        };
                        var2 = function(arg0) { // Environment: var12
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var1 = function(arg0) { // Environment: var12
                            var2 = _closure2_slot11;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var1 = var10.bind(var0)(var5, var2, var1);
                        var5 = var4.useCallback;
                        var2 = new Array(2);
                        var2[0] = var0;
                        var2[1] = var7;
                        var1 = function() { // Environment: var12
                            _fun70299: for (var _fun70299_ip = 0;;) switch (_fun70299_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun70299_ip = 37;
                                        continue _fun70299
                                    }
                                case 10:
                                    var3 = _closure2_slot0;
                                    var2 = var3.pause;
                                    var1 = true;
                                    var2 = var2.bind(var3)(var1);
                                    var0 = _closure2_slot4;
                                    var0.current = var1;
                                case 37:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var20 = var5.bind(var4)(var1, var2);
                        var2 = var4.useCallback;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function(arg0) { // Environment: var12
                            _fun70300: for (var _fun70300_ip = 0;;) switch (_fun70300_ip) {
                                case 0:
                                    var3 = _closure2_slot0;
                                    var2 = var3.seek;
                                    var1 = arg0;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = _closure2_slot4;
                                    var1 = var1.current;
                                    if (!var1) {
                                        _fun70300_ip = 60;
                                        continue _fun70300
                                    }
                                case 33:
                                    var3 = _closure2_slot0;
                                    var2 = var3.pause;
                                    var1 = false;
                                    var2 = var2.bind(var3)(var1);
                                    var0 = _closure2_slot4;
                                    var0.current = var1;
                                case 60:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var19 = var2.bind(var4)(var0, var1);
                        var5 = _closure1_slot0;
                        var11 = 8;
                        var0 = var9[var11];
                        var1 = var5.bind(var3)(var0);
                        var0 = var1.getTimeFormat;
                        var15 = var0.bind(var1)(var25);
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot5;
                        var0 = {};
                        var4 = _closure1_slot8;
                        var10 = var4.container;
                        var4 = new Array(2);
                        var4[0] = var10;
                        var4[1] = var6;
                        var0.style = var4;
                        var6 = _closure1_slot6;
                        var4 = 9;
                        var4 = var9[var4];
                        var4 = var5.bind(var3)(var4);
                        var5 = var4.PressableOpacity;
                        var4 = {};
                        var9 = _closure1_slot8;
                        var9 = var9.icon;
                        var4.style = var9;
                        var9 = 'button';
                        var4.accessibilityRole = var9;
                        var10 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var9 = 10;
                        var14 = var17[var9];
                        var14 = var10.bind(var3)(var14);
                        var16 = var14.intl;
                        var14 = var16.string;
                        var9 = var17[var9];
                        var9 = var10.bind(var3)(var9);
                        var10 = var9.t;
                        if (var7) {
                            _fun70289_ip = 561;
                            continue _fun70289
                        }
                    case 548:
                        var9 = var10.ZcgDJX;
                        var9 = var14.bind(var16)(var9);
                        _fun70289_ip = 572;
                        continue _fun70289;
                    case 561:
                        var10 = var10.RscU7I;
                        var9 = var14.bind(var16)(var10);
                    case 572:
                        var4.accessibilityLabel = var9;
                        var9 = function() { // Original name: onPress, environment: var12
                            _fun70301: for (var _fun70301_ip = 0;;) switch (_fun70301_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    if (!var1) {
                                        _fun70301_ip = 20;
                                        continue _fun70301
                                    }
                                case 10:
                                    var2 = _closure2_slot3;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
                                case 20:
                                    var2 = _closure2_slot0;
                                    var1 = var2.pause;
                                    var0 = _closure2_slot1;
                                    var0 = !var0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.onPress = var9;
                        var9 = {
                            'top': 8,
                            'right': 8,
                            'bottom': 8,
                            'left': 8
                        };
                        var4.hitSlop = var9;
                        var10 = _closure1_slot6;
                        var14 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        if (var7) {
                            _fun70289_ip = 641;
                            continue _fun70289
                        }
                    case 621:
                        var7 = 12;
                        var7 = var16[var7];
                        var7 = var14.bind(var3)(var7);
                        var9 = var7.PauseIcon;
                        _fun70289_ip = 659;
                        continue _fun70289;
                    case 641:
                        var7 = 11;
                        var7 = var16[var7];
                        var7 = var14.bind(var3)(var7);
                        var9 = var7.PlayIcon;
                    case 659:
                        var7 = {
                            'size': 'md',
                            'color': 'white'
                        };
                        var7 = var10.bind(var3)(var9, var7);
                        var4.children = var7;
                        var5 = var6.bind(var3)(var5, var4);
                        var4 = new Array(4);
                        var4[0] = var5;
                        var7 = _closure1_slot6;
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 13;
                        var6 = var9[var5];
                        var6 = var10.bind(var3)(var6);
                        var14 = var6.Text;
                        var6 = {
                            'style': null,
                            'tabularNumbers': true,
                            'lineClamp': 1,
                            'color': 'white',
                            'variant': 'text-xs/medium'
                        };
                        var16 = _closure1_slot8;
                        var17 = var16.centerText;
                        var16 = new Array(2);
                        var16[0] = var17;
                        var17 = {};
                        var17.width = var18;
                        var16[1] = var17;
                        var6.style = var16;
                        var6.children = var15;
                        var6 = var7.bind(var3)(var14, var6);
                        var4[1] = var6;
                        var15 = _closure1_slot7;
                        var14 = _closure1_slot5;
                        var6 = {};
                        var16 = _closure1_slot8;
                        var16 = var16.sliderContainer;
                        var6.style = var16;
                        var16 = {};
                        var17 = 'none';
                        var16.pointerEvents = var17;
                        var17 = _closure1_slot8;
                        var17 = var17.progressSliderContainer;
                        var16.style = var17;
                        var24 = _closure1_slot1;
                        var17 = 14;
                        var18 = var9[var17];
                        var26 = var24.bind(var3)(var18);
                        var18 = {
                            'style': null,
                            'value': 1,
                            'minimumValue': 0,
                            'maximumValue': 1,
                            'thumbTintColor': 'transparent'
                        };
                        var27 = _closure1_slot8;
                        var27 = var27.timelineBackgroundSlider;
                        var18.style = var27;
                        var29 = 7;
                        var27 = var9[var29];
                        var27 = var24.bind(var3)(var27);
                        var30 = '#FFFFFF';
                        var32 = var27.bind(var3)(var30);
                        var27 = var32.alpha;
                        var33 = 0.1;
                        var32 = var27.bind(var32)(var33);
                        var27 = var32.hex;
                        var27 = var27.bind(var32)();
                        var18.minimumTrackTintColor = var27;
                        var27 = var9[var29];
                        var27 = var24.bind(var3)(var27);
                        var32 = var27.bind(var3)(var30);
                        var27 = var32.alpha;
                        var32 = var27.bind(var32)(var33);
                        var27 = var32.hex;
                        var27 = var27.bind(var32)();
                        var18.maximumTrackTintColor = var27;
                        var26 = var7.bind(var3)(var26, var18);
                        var18 = new Array(2);
                        var18[0] = var26;
                        var26 = var9[var17];
                        var27 = var24.bind(var3)(var26);
                        var26 = {
                            'style': null,
                            'value': null,
                            'minimumValue': 0,
                            'maximumValue': 1,
                            'thumbTintColor': 'transparent'
                        };
                        var32 = _closure1_slot8;
                        var32 = var32.downloadProgressSlider;
                        var26.style = var32;
                        var26.value = var31;
                        var29 = var9[var29];
                        var29 = var24.bind(var3)(var29);
                        var31 = var29.bind(var3)(var30);
                        var30 = var31.alpha;
                        var29 = 0.2;
                        var30 = var30.bind(var31)(var29);
                        var29 = var30.hex;
                        var29 = var29.bind(var30)();
                        var26.minimumTrackTintColor = var29;
                        var26.maximumTrackTintColor = var28;
                        var26 = var7.bind(var3)(var27, var26);
                        var18[1] = var26;
                        var16.children = var18;
                        var18 = var15.bind(var3)(var14, var16);
                        var16 = new Array(2);
                        var16[0] = var18;
                        var17 = var9[var17];
                        var18 = var24.bind(var3)(var17);
                        var17 = {};
                        var26 = _closure1_slot8;
                        var26 = var26.playbackSlider;
                        var17.style = var26;
                        var17.value = var25;
                        var25 = 15;
                        var25 = var9[var25];
                        var25 = var24.bind(var3)(var25);
                        var17.thumbImage = var25;
                        var17.minimumValue = var23;
                        var23 = var8.current;
                        var17.maximumValue = var23;
                        var23 = 16;
                        var23 = var9[var23];
                        var23 = var24.bind(var3)(var23);
                        var23 = var23.unsafe_rawColors;
                        var23 = var23.WHITE;
                        var17.minimumTrackTintColor = var23;
                        var17.maximumTrackTintColor = var22;
                        var17.onValueChange = var21;
                        var17.onSlidingStart = var20;
                        var17.onSlidingComplete = var19;
                        var17 = var7.bind(var3)(var18, var17);
                        var16[1] = var17;
                        var6.children = var16;
                        var6 = var15.bind(var3)(var14, var6);
                        var4[2] = var6;
                        var5 = var9[var5];
                        var5 = var10.bind(var3)(var5);
                        var6 = var5.Text;
                        var5 = {
                            'style': null,
                            'variant': 'text-xs/medium',
                            'color': 'white',
                            'tabularNumbers': true,
                            'lineClamp': 1
                        };
                        var13 = _closure1_slot8;
                        var13 = var13.centerText;
                        var5.style = var13;
                        var12 = function(arg0) { // Original name: onLayout, environment: var12
                            var2 = _closure2_slot9;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1 = var0.width;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var5.onLayout = var12;
                        var9 = var9[var11];
                        var10 = var10.bind(var3)(var9);
                        var9 = var10.getTimeFormat;
                        var8 = var8.current;
                        var8 = var9.bind(var10)(var8);
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[3] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 478, 4884, 22, 669, 4075, 4858, 1234, 5829, 8807, 3895, 5384, 8809, 671, 2]);