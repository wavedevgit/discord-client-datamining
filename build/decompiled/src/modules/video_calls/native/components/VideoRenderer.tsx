// modules/video_calls/native/components/VideoRenderer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var10 = 0;
    var1 = var6[var10];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var9 = 1;
    var4 = var6[var9];
    var1 = metroImportAll;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var8 = 2;
    var1 = var6[var8];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot5 = var4;
    var4 = var1.StyleSheet;
    var _closure1_slot6 = var4;
    var4 = var1.Dimensions;
    var _closure1_slot7 = var4;
    var1 = var1.ScrollView;
    var _closure1_slot8 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot9 = var4;
    var1 = var1.jsxs;
    var _closure1_slot10 = var1;
    var1 = 4;
    var1 = var6[var1];
    var11 = var5.bind(var0)(var1);
    var4 = var11.createStyles;
    var1 = {};
    var12 = {
        'height': 32,
        'width': 32
    };
    var1.spinner = var12;
    var12 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var1.center = var12;
    var12 = {};
    var12.flex = var9;
    var1.zoomLayoutAndroid = var12;
    var12 = {
        'position': 'absolute',
        'right': 8,
        'top': 8
    };
    var1.liveTag = var12;
    var1 = var4.bind(var11)(var1);
    var _closure1_slot11 = var1;
    var1 = {};
    var1.COVER = var10;
    var4 = 'COVER';
    var1[var10] = var4;
    var1.CONTAIN = var9;
    var4 = 'CONTAIN';
    var1[var9] = var4;
    var1.AUTO = var8;
    var4 = 'AUTO';
    var1[var8] = var4;
    var _closure1_slot12 = var1;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun64661: for (var _fun64661_ip = 0;;) switch (_fun64661_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.streamId;
                var1 = var0.resizeMode;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun64661_ip = 35;
                    continue _fun64661
                }
            case 22:
                var2 = _closure1_slot12;
                var1 = var2.CONTAIN;
            case 35:
                var _closure2_slot0 = var1;
                var12 = var0.gestureEnabled;
                if (!(var12 === var4)) {
                    _fun64661_ip = 51;
                    continue _fun64661
                }
            case 49:
                var12 = false;
            case 51:
                var10 = var0.renderTag;
                var18 = var0.videoSpinnerContext;
                var20 = var0.userId;
                var9 = var0.streamKey;
                var11 = var0.paused;
                if (!(var11 === var4)) {
                    _fun64661_ip = 86;
                    continue _fun64661
                }
            case 84:
                var11 = false;
            case 86:
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var0 = _closure1_slot11;
                var15 = var0.bind(var4)();
                var8 = _closure1_slot4;
                var0 = var8.useState;
                var7 = 0;
                var0 = var0.bind(var8)(var7);
                var22 = _closure1_slot3;
                var13 = 2;
                var0 = var22.bind(var4)(var0, var13);
                var24 = var0[var7];
                _closure2_slot1 = var24;
                var14 = 1;
                var0 = var0[var14];
                _closure2_slot2 = var0;
                var0 = var8.useState;
                var0 = var0.bind(var8)(var7);
                var0 = var22.bind(var4)(var0, var13);
                var23 = var0[var7];
                _closure2_slot3 = var23;
                var0 = var0[var14];
                _closure2_slot4 = var0;
                var0 = var8.useState;
                var0 = var0.bind(var8)(var7);
                var0 = var22.bind(var4)(var0, var13);
                var16 = var0[var7];
                _closure2_slot5 = var16;
                var19 = var0[var14];
                _closure2_slot6 = var19;
                var0 = var8.useState;
                var0 = var0.bind(var8)(var7);
                var2 = var22.bind(var4)(var0, var13);
                var0 = var2[var7];
                _closure2_slot7 = var0;
                var6 = var2[var14];
                _closure2_slot8 = var6;
                var2 = var8.useState;
                var17 = true;
                var2 = var2.bind(var8)(var17);
                var2 = var22.bind(var4)(var2, var13);
                var13 = var2[var7];
                var2 = var2[var14];
                _closure2_slot9 = var2;
                var7 = _closure1_slot1;
                var22 = _closure1_slot2;
                var2 = 5;
                var2 = var22[var2];
                var25 = var7.bind(var4)(var2);
                var2 = {};
                var26 = 'VideoRenderer';
                var2.location = var26;
                var2.videoSpinnerContext = var18;
                var2.userId = var20;
                var2.streamId = var21;
                var2.paused = var11;
                var2.loading = var13;
                var2 = var25.bind(var4)(var2);
                var2 = 6;
                var2 = var22[var2];
                var7 = var7.bind(var4)(var2);
                var2 = {};
                var2.streamId = var21;
                var2.userId = var20;
                var2.videoSpinnerContext = var18;
                var2.paused = var11;
                var2.loading = var13;
                var2.streamKey = var9;
                var2 = var7.bind(var4)(var2);
                var2 = var2.onReady;
                _closure2_slot10 = var2;
                var7 = var8.useRef;
                var9 = null;
                var7 = var7.bind(var8)(var9);
                _closure2_slot11 = var7;
                var11 = var8.useRef;
                var25 = var11.bind(var8)(var9);
                _closure2_slot12 = var25;
                var18 = var8.useCallback;
                var11 = new Array(2);
                var11[0] = var19;
                var11[1] = var6;
                var6 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.nativeEvent;
                    var0 = var1.width;
                    var3 = var1.height;
                    var4 = _closure1_slot7;
                    var1 = var4.get;
                    var2 = 'window';
                    var1 = var1.bind(var4)(var2);
                    var7 = var1.width;
                    var1 = var4.get;
                    var1 = var1.bind(var4)(var2);
                    var1 = var1.height;
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.min;
                    var6 = var2.Math;
                    var2 = var6.sqrt;
                    var7 = var7 * var1;
                    var1 = 4;
                    var7 = var7 * var1;
                    var1 = var0 * var3;
                    var1 = var7 / var1;
                    var2 = var2.bind(var6)(var1);
                    var1 = 1;
                    var1 = var4.bind(var5)(var2, var1);
                    var5 = _closure2_slot6;
                    var4 = var0 * var1;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var2 = _closure2_slot8;
                    var1 = var3 * var1;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var20 = var18.bind(var8)(var6, var11);
                var11 = var8.useCallback;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var3
                    var3 = _closure2_slot9;
                    var0 = undefined;
                    var2 = false;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot10;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var19 = var11.bind(var8)(var2, var6);
                var11 = var8.useCallback;
                var6 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var4 = var0.width;
                    var2 = var0.height;
                    var3 = _closure2_slot2;
                    var0 = undefined;
                    var3 = var3.bind(var0)(var4);
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var2 = new Array(0);
                var6 = var11.bind(var8)(var6, var2);
                var11 = var8.useMemo;
                var2 = new Array(5);
                var2[0] = var24;
                var2[1] = var23;
                var2[2] = var16;
                var2[3] = var0;
                var2[4] = var1;
                var1 = function() { // Environment: var3
                    _fun64665: for (var _fun64665_ip = 0;;) switch (_fun64665_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun64665_ip = 238;
                                continue _fun64665
                            }
                        case 16:
                            var1 = _closure2_slot3;
                            if (!(var0 !== var1)) {
                                _fun64665_ip = 238;
                                continue _fun64665
                            }
                        case 27:
                            var1 = _closure2_slot5;
                            if (!(var0 !== var1)) {
                                _fun64665_ip = 238;
                                continue _fun64665
                            }
                        case 38:
                            var1 = _closure2_slot7;
                            if (!(var0 !== var1)) {
                                _fun64665_ip = 238;
                                continue _fun64665
                            }
                        case 49:
                            var6 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var4 = var2 / var1;
                            var2 = _closure2_slot5;
                            var1 = _closure2_slot7;
                            var2 = var2 / var1;
                            var5 = _closure1_slot12;
                            var5 = var5.AUTO;
                            if (!(var6 === var5)) {
                                _fun64665_ip = 138;
                                continue _fun64665
                            }
                        case 94:
                            var5 = 1;
                            if (!(var4 > var5)) {
                                _fun64665_ip = 105;
                                continue _fun64665
                            }
                        case 101:
                            if (!(!(var2 > var5))) {
                                _fun64665_ip = 125;
                                continue _fun64665
                            }
                        case 105:
                            if (!(var4 < var5)) {
                                _fun64665_ip = 113;
                                continue _fun64665
                            }
                        case 109:
                            if (!(!(var2 < var5))) {
                                _fun64665_ip = 125;
                                continue _fun64665
                            }
                        case 113:
                            var5 = _closure1_slot12;
                            var5 = var5.CONTAIN;
                            _fun64665_ip = 135;
                            continue _fun64665;
                        case 125:
                            var7 = _closure1_slot12;
                            var5 = var7.COVER;
                        case 135:
                            var6 = var5;
                        case 138:
                            var5 = _closure1_slot12;
                            var5 = var5.CONTAIN;
                            if (!(var6 !== var5)) {
                                _fun64665_ip = 203;
                                continue _fun64665
                            }
                        case 152:
                            var1 = _closure1_slot12;
                            var5 = var1.COVER;
                            var1 = 0;
                            if (!(var6 === var5)) {
                                _fun64665_ip = 201;
                                continue _fun64665
                            }
                        case 168:
                            if (!(!(var2 > var4))) {
                                _fun64665_ip = 186;
                                continue _fun64665
                            }
                        case 172:
                            var6 = _closure2_slot1;
                            var5 = _closure2_slot5;
                            var5 = var6 / var5;
                            _fun64665_ip = 198;
                            continue _fun64665;
                        case 186:
                            var7 = _closure2_slot3;
                            var6 = _closure2_slot7;
                            var5 = var7 / var6;
                        case 198:
                            var1 = var5;
                        case 201:
                            _fun64665_ip = 236;
                            continue _fun64665;
                        case 203:
                            if (!(!(var4 > var2))) {
                                _fun64665_ip = 221;
                                continue _fun64665
                            }
                        case 207:
                            var4 = _closure2_slot1;
                            var2 = _closure2_slot5;
                            var2 = var4 / var2;
                            _fun64665_ip = 233;
                            continue _fun64665;
                        case 221:
                            var4 = _closure2_slot3;
                            var3 = _closure2_slot7;
                            var2 = var4 / var3;
                        case 233:
                            var1 = var2;
                        case 236:
                            return var1;
                        case 238:
                            return var0;
                    }
                };
                var11 = var11.bind(var8)(var1, var2);
                _closure2_slot13 = var11;
                var18 = var8.useLayoutEffect;
                var2 = new Array(5);
                var2[0] = var24;
                var2[1] = var23;
                var2[2] = var16;
                var2[3] = var0;
                var2[4] = var11;
                var1 = function() { // Environment: var3
                    _fun64666: for (var _fun64666_ip = 0;;) switch (_fun64666_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var3 = 7;
                            var2 = var0[var3];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.isAndroid;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun64666_ip = 232;
                                continue _fun64666
                            }
                        case 41:
                            var4 = _closure2_slot11;
                            var5 = var4.current;
                            var4 = null;
                            if (!(var4 != var5)) {
                                _fun64666_ip = 232;
                                continue _fun64666
                            }
                        case 62:
                            var4 = _closure2_slot5;
                            var5 = 0;
                            if (!(var5 !== var4)) {
                                _fun64666_ip = 232;
                                continue _fun64666
                            }
                        case 75:
                            var4 = _closure2_slot7;
                            if (!(var5 !== var4)) {
                                _fun64666_ip = 232;
                                continue _fun64666
                            }
                        case 86:
                            var4 = _closure2_slot11;
                            var6 = var4.current;
                            var5 = var6.scrollResponderZoomTo;
                            var4 = {
                                'x': 0,
                                'y': 0,
                                'width': null,
                                'height': null,
                                'animated': false
                            };
                            var7 = global;
                            var11 = var7.Math;
                            var10 = var11.min;
                            var9 = _closure2_slot5;
                            var8 = _closure2_slot13;
                            var9 = var9 * var8;
                            var8 = _closure2_slot1;
                            var8 = var10.bind(var11)(var9, var8);
                            var4.width = var8;
                            var10 = var7.Math;
                            var9 = var10.min;
                            var8 = _closure2_slot7;
                            var7 = _closure2_slot13;
                            var8 = var8 * var7;
                            var7 = _closure2_slot3;
                            var7 = var9.bind(var10)(var8, var7);
                            var4.height = var7;
                            var4 = var5.bind(var6)(var4);
                            var2 = _closure2_slot11;
                            var5 = var2.current;
                            var4 = var5.scrollTo;
                            var2 = {
                                'x': 0,
                                'y': 0,
                                'animated': false
                            };
                            var2 = var4.bind(var5)(var2);
                            _fun64666_ip = 313;
                            continue _fun64666;
                        case 232:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isAndroid;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun64666_ip = 313;
                                continue _fun64666
                            }
                        case 262:
                            var1 = _closure2_slot12;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun64666_ip = 313;
                                continue _fun64666
                            }
                        case 280:
                            var2 = _closure2_slot12;
                            var3 = var2.current;
                            if (!(var1 != var3)) {
                                _fun64666_ip = 313;
                                continue _fun64666
                            }
                        case 293:
                            var2 = var3.unzoom;
                            var1 = {};
                            var4 = false;
                            var1.animated = var4;
                            var1 = var2.bind(var3)(var1);
                        case 313:
                            return var0;
                    }
                };
                var1 = var18.bind(var8)(var1, var2);
                var18 = var8.useMemo;
                var2 = new Array(3);
                var2[0] = var11;
                var2[1] = var16;
                var2[2] = var0;
                var1 = function() { // Environment: var3
                    var0 = {};
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot13;
                    var2 = var3 * var2;
                    var0.width = var2;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot13;
                    var1 = var2 * var1;
                    var0.height = var1;
                    return var0;
                };
                var30 = var18.bind(var8)(var1, var2);
                var18 = var8.useMemo;
                var2 = new Array(3);
                var2[0] = var11;
                var2[1] = var16;
                var2[2] = var0;
                var1 = function() { // Environment: var3
                    var0 = {};
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot13;
                    var2 = var3 * var2;
                    var0.width = var2;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot13;
                    var1 = var2 * var1;
                    var0.height = var1;
                    return var0;
                };
                var18 = var18.bind(var8)(var1, var2);
                var22 = var8.useMemo;
                var2 = new Array(5);
                var2[0] = var16;
                var2[1] = var11;
                var2[2] = var24;
                var2[3] = var0;
                var2[4] = var23;
                var1 = function() { // Environment: var3
                    var0 = {
                        'width': null,
                        'height': null,
                        'alignItems': 'center',
                        'justifyContent': 'center',
                        'overflow': 'hidden'
                    };
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot13;
                    var4 = var4 * var3;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var4, var3);
                    var0.width = var3;
                    var4 = var2.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot7;
                    var2 = _closure2_slot13;
                    var2 = var5 * var2;
                    var1 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.height = var1;
                    return var0;
                };
                var22 = var22.bind(var8)(var1, var2);
                var2 = var8.useMemo;
                var1 = new Array(5);
                var1[0] = var16;
                var1[1] = var11;
                var1[2] = var24;
                var1[3] = var0;
                var1[4] = var23;
                var0 = function() { // Environment: var3
                    var0 = global;
                    var5 = var0.Math;
                    var4 = var5.min;
                    var3 = _closure2_slot7;
                    var1 = _closure2_slot13;
                    var3 = var3 * var1;
                    var1 = _closure2_slot3;
                    var4 = var4.bind(var5)(var3, var1);
                    var5 = var0.Math;
                    var3 = var5.min;
                    var1 = _closure2_slot5;
                    var0 = _closure2_slot13;
                    var1 = var1 * var0;
                    var0 = _closure2_slot1;
                    var3 = var3.bind(var5)(var1, var0);
                    var0 = {};
                    var1 = 'absolute';
                    var0.position = var1;
                    var5 = _closure2_slot3;
                    var1 = 2;
                    var5 = var5 / var1;
                    var4 = var4 / var1;
                    var4 = var5 - var4;
                    var0.top = var4;
                    var2 = _closure2_slot1;
                    var2 = var2 / var1;
                    var1 = var3 / var1;
                    var1 = var2 - var1;
                    var0.right = var1;
                    return var0;
                };
                var8 = var2.bind(var8)(var0, var1);
                var16 = null;
                if (!var13) {
                    _fun64661_ip = 852;
                    continue _fun64661
                }
            case 778:
                var2 = _closure1_slot9;
                var26 = _closure1_slot1;
                var27 = _closure1_slot2;
                var0 = 8;
                var0 = var27[var0];
                var1 = var26.bind(var4)(var0);
                var0 = {};
                var0.animate = var17;
                var11 = var15.spinner;
                var0.style = var11;
                var11 = 9;
                var11 = var27[var11];
                var11 = var26.bind(var4)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.BRAND_500;
                var0.color = var11;
                var16 = var2.bind(var4)(var1, var0);
            case 852:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var11 = var2[var0];
                var26 = var1.bind(var4)(var11);
                var11 = var26.useStore;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.orientation;
                    return var0;
                };
                var3 = var11.bind(var26)(var3);
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.OrientationType;
                var0 = var0.PORTRAIT;
                var11 = var3 === var0;
                var0 = 7;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isAndroid;
                var0 = var0.bind(var1)();
                var3 = _closure1_slot10;
                if (var0) {
                    _fun64661_ip = 1320;
                    continue _fun64661
                }
            case 945:
                if (var12) {
                    _fun64661_ip = 1069;
                    continue _fun64661
                }
            case 948:
                var1 = _closure1_slot5;
                var0 = {};
                var0.onLayout = var6;
                var26 = var15.center;
                var2 = new Array(2);
                var2[0] = var26;
                var26 = _closure1_slot6;
                var26 = var26.absoluteFillObject;
                var2[1] = var26;
                var0.style = var2;
                var27 = _closure1_slot9;
                var26 = _closure1_slot1;
                var28 = _closure1_slot2;
                var2 = 12;
                var2 = var28[var2];
                var26 = var26.bind(var4)(var2);
                var2 = {};
                var2.streamId = var21;
                var2.onSize = var20;
                var2.onReady = var19;
                var2.style = var30;
                var26 = var27.bind(var4)(var26, var2);
                var2 = new Array(2);
                var2[0] = var26;
                var2[1] = var16;
                var0.children = var2;
                var0 = var3.bind(var4)(var1, var0);
                _fun64661_ip = 1315;
                continue _fun64661;
            case 1069:
                var2 = _closure1_slot8;
                var1 = {};
                var1.ref = var7;
                var1.onLayout = var6;
                var7 = _closure1_slot6;
                var7 = var7.absoluteFillObject;
                var1.style = var7;
                var7 = var15.center;
                var1.contentContainerStyle = var7;
                var7 = false;
                var1.bounces = var7;
                var1.centerContent = var17;
                var17 = !var13;
                var1.pinchGestureEnabled = var17;
                var17 = 8;
                var1.maximumZoomScale = var17;
                var1.minimumZoomScale = var14;
                var1.showsVerticalScrollIndicator = var7;
                var1.showsHorizontalScrollIndicator = var7;
                var7 = 16;
                var1.scrollEventThrottle = var7;
                var17 = _closure1_slot5;
                var7 = {};
                var7.style = var22;
                var27 = _closure1_slot9;
                var29 = _closure1_slot1;
                var31 = _closure1_slot2;
                var22 = 13;
                var22 = var31[var22];
                var22 = var29.bind(var4)(var22);
                var26 = var22.View;
                var22 = {};
                var28 = 12;
                var28 = var31[var28];
                var29 = var29.bind(var4)(var28);
                var28 = {};
                var28.streamId = var21;
                var28.onSize = var20;
                var28.onReady = var19;
                var28.style = var30;
                var28 = var27.bind(var4)(var29, var28);
                var22.children = var28;
                var26 = var27.bind(var4)(var26, var22);
                var22 = new Array(2);
                var22[0] = var26;
                var26 = null;
                if (!var11) {
                    _fun64661_ip = 1279;
                    continue _fun64661
                }
            case 1263:
                var28 = var9 == var10;
                var27 = undefined;
                if (var28) {
                    _fun64661_ip = 1276;
                    continue _fun64661
                }
            case 1272:
                var27 = var10.bind(var4)();
            case 1276:
                var26 = var27;
            case 1279:
                var22[1] = var26;
                var7.children = var22;
                var17 = var3.bind(var4)(var17, var7);
                var7 = new Array(2);
                var7[0] = var17;
                var7[1] = var16;
                var1.children = var7;
                var0 = var3.bind(var4)(var2, var1);
            case 1315:
                _fun64661_ip = 1588;
                continue _fun64661;
            case 1320:
                var2 = _closure1_slot5;
                var1 = {};
                var1.onLayout = var6;
                var7 = var15.center;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = _closure1_slot6;
                var7 = var7.absoluteFillObject;
                var6[1] = var7;
                var1.style = var6;
                var7 = _closure1_slot9;
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var5 = 11;
                var5 = var22[var5];
                var6 = var17.bind(var4)(var5);
                var5 = {};
                var5.ref = var25;
                var15 = var15.zoomLayoutAndroid;
                var5.style = var15;
                var5.minimumZoomScale = var14;
                var5.gestureEnabled = var12;
                var14 = {};
                var15 = false;
                var14.collapsable = var15;
                var15 = {};
                var15.width = var24;
                var15.height = var23;
                var23 = 'center';
                var15.alignItems = var23;
                var15.justifyContent = var23;
                var14.style = var15;
                var15 = 12;
                var15 = var22[var15];
                var17 = var17.bind(var4)(var15);
                var15 = {};
                var15.streamId = var21;
                var15.onSize = var20;
                var15.onReady = var19;
                var15.style = var18;
                var17 = var7.bind(var4)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var15[1] = var16;
                var14.children = var15;
                var14 = var3.bind(var4)(var2, var14);
                var5.children = var14;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var6.style = var8;
                var8 = null;
                if (var13) {
                    _fun64661_ip = 1564;
                    continue _fun64661
                }
            case 1538:
                var8 = null;
                if (!var12) {
                    _fun64661_ip = 1564;
                    continue _fun64661
                }
            case 1543:
                var8 = null;
                if (!var11) {
                    _fun64661_ip = 1564;
                    continue _fun64661
                }
            case 1548:
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun64661_ip = 1561;
                    continue _fun64661
                }
            case 1557:
                var9 = var10.bind(var4)();
            case 1561:
                var8 = var9;
            case 1564:
                var6.children = var8;
                var6 = var7.bind(var4)(var2, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1588:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/VideoRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ResizeMode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 8051, 8053, 478, 8058, 671, 7839, 8059, 8061, 3720, 2]);