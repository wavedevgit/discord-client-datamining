// modules/media_viewer/native/components/MediaViewer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot5 = var8;
    var8 = var3.StyleSheet;
    var _closure1_slot6 = var8;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.isAndroid;
    var3 = var3.bind(var7)();
    var _closure1_slot11 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun76314: for (var _fun76314_ip = 0;;) switch (_fun76314_ip) {
            case 0:
                var1 = arg0;
                var21 = var1.entranceAnimationDriver;
                var20 = var1.index;
                var _closure2_slot0 = var20;
                var32 = var1.onLongPress;
                var _closure2_slot1 = var32;
                var19 = var1.originLayout;
                var18 = var1.panGestureConfig;
                var _closure2_slot2 = var18;
                var28 = var1.panGesture;
                var _closure2_slot3 = var28;
                var17 = var1.renderMedia;
                var16 = var1.source;
                var15 = var1.useItemVisible;
                var5 = var1.zoomed;
                var _closure2_slot4 = var5;
                var9 = var1.windowWidth;
                var _closure2_slot5 = var9;
                var2 = var1.windowHeight;
                var _closure2_slot6 = var2;
                var4 = undefined;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var _closure2_slot24 = var4;
                var27 = _closure1_slot4;
                var3 = var27.useRef;
                var3 = var3.bind(var27)(var9);
                var _closure2_slot7 = var3;
                var3 = var27.useRef;
                var3 = var3.bind(var27)(var2);
                var _closure2_slot8 = var3;
                var3 = var27.useState;
                var3 = var3.bind(var27)(var9);
                var24 = _closure1_slot3;
                var13 = 2;
                var3 = var24.bind(var4)(var3, var13);
                var6 = 0;
                var11 = var3[var6];
                var8 = 1;
                var3 = var3[var8];
                var _closure2_slot9 = var3;
                var3 = var27.useState;
                var3 = var3.bind(var27)(var2);
                var3 = var24.bind(var4)(var3, var13);
                var10 = var3[var6];
                var3 = var3[var8];
                var _closure2_slot10 = var3;
                var14 = _closure1_slot0;
                var22 = _closure1_slot2;
                var3 = 6;
                var3 = var22[var3];
                var7 = var14.bind(var4)(var3);
                var3 = var7.useOrientation;
                var25 = var3.bind(var7)();
                var7 = var27.useEffect;
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot9;
                        var4 = _closure2_slot5;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var4);
                        var3 = _closure2_slot10;
                        var2 = _closure2_slot6;
                        var3 = var3.bind(var0)(var2);
                        var3 = _closure2_slot7;
                        var3.current = var4;
                        var1 = _closure2_slot8;
                        var1.current = var2;
                        return var0;
                    };
                    var1 = 20;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var2 = var7.bind(var27)(var2, var3);
                var3 = _closure1_slot1;
                var2 = 7;
                var2 = var22[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)(var11, var10, var16);
                var7 = var2.maximumZoomScale;
                var2 = var27.useRef;
                var3 = null;
                var12 = var2.bind(var27)(var3);
                var _closure2_slot11 = var12;
                var2 = var27.useRef;
                var9 = var2.bind(var27)(var3);
                var _closure2_slot12 = var9;
                var2 = var27.useState;
                var23 = false;
                var2 = var2.bind(var27)(var23);
                var2 = var24.bind(var4)(var2, var13);
                var13 = var2[var6];
                var2 = var2[var8];
                var _closure2_slot13 = var2;
                var24 = var27.useEffect;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dismissKeyboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var2 = new Array(0);
                var2 = var24.bind(var27)(var6, var2);
                var24 = var27.useCallback;
                var6 = function(arg0, arg1) { // Environment: var0
                    _fun76319: for (var _fun76319_ip = 0;;) switch (_fun76319_ip) {
                        case 0:
                            var8 = arg0;
                            var6 = arg1;
                            var1 = _closure2_slot11;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun76319_ip = 79;
                                continue _fun76319
                            }
                        case 24:
                            var2 = _closure2_slot12;
                            var2 = var2.current;
                            if (!(var1 !== var2)) {
                                _fun76319_ip = 199;
                                continue _fun76319
                            }
                        case 40:
                            var2 = _closure2_slot12;
                            var3 = var2.current;
                            if (!(var1 != var3)) {
                                _fun76319_ip = 199;
                                continue _fun76319
                            }
                        case 56:
                            var2 = var3.zoomTo;
                            var1 = {};
                            var1.x = var8;
                            var1.y = var6;
                            var1 = var2.bind(var3)(var1);
                            _fun76319_ip = 199;
                            continue _fun76319;
                        case 79:
                            var1 = {};
                            var2 = _closure2_slot7;
                            var2 = var2.current;
                            var1.width = var2;
                            var2 = _closure2_slot8;
                            var2 = var2.current;
                            var1.height = var2;
                            var2 = var1.width;
                            var5 = 2;
                            var4 = var2 / var5;
                            var1 = var1.height;
                            var3 = var1 / var5;
                            var0 = _closure2_slot11;
                            var1 = var0.current;
                            var0 = var1.getScrollResponder;
                            var2 = var0.bind(var1)();
                            var1 = var2.scrollResponderZoomTo;
                            var0 = {};
                            var7 = var4 / var5;
                            var7 = var8 - var7;
                            var0.x = var7;
                            var5 = var3 / var5;
                            var5 = var6 - var5;
                            var0.y = var5;
                            var0.width = var4;
                            var0.height = var3;
                            var3 = true;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 199:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = new Array(0);
                var33 = var24.bind(var27)(var6, var2);
                var _closure2_slot14 = var33;
                var24 = var27.useCallback;
                var6 = function() { // Environment: var0
                    _fun76320: for (var _fun76320_ip = 0;;) switch (_fun76320_ip) {
                        case 0:
                            var4 = arguments[0];
                            var0 = undefined;
                            if (!(var4 === var0)) {
                                _fun76320_ip = 11;
                                continue _fun76320
                            }
                        case 9:
                            var4 = true;
                        case 11:
                            var2 = _closure2_slot11;
                            var2 = var2.current;
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun76320_ip = 71;
                                continue _fun76320
                            }
                        case 29:
                            var2 = _closure2_slot12;
                            var2 = var2.current;
                            if (!(var3 !== var2)) {
                                _fun76320_ip = 162;
                                continue _fun76320
                            }
                        case 42:
                            var2 = _closure2_slot12;
                            var5 = var2.current;
                            var3 = var5.unzoom;
                            var2 = {};
                            var2.animated = var4;
                            var2 = var3.bind(var5)(var2);
                            _fun76320_ip = 162;
                            continue _fun76320;
                        case 71:
                            var2 = {};
                            var3 = _closure2_slot7;
                            var3 = var3.current;
                            var2.width = var3;
                            var3 = _closure2_slot8;
                            var3 = var3.current;
                            var2.height = var3;
                            var6 = var2.width;
                            var5 = var2.height;
                            var1 = _closure2_slot11;
                            var2 = var1.current;
                            var1 = var2.getScrollResponder;
                            var3 = var1.bind(var2)();
                            var2 = var3.scrollResponderZoomTo;
                            var1 = {
                                'x': 0,
                                'y': 0
                            };
                            var1.width = var6;
                            var1.height = var5;
                            var1.animated = var4;
                            var1 = var2.bind(var3)(var1);
                        case 162:
                            return var0;
                    }
                };
                var2 = new Array(0);
                var26 = var24.bind(var27)(var6, var2);
                var _closure2_slot15 = var26;
                var24 = var27.useCallback;
                var6 = new Array(2);
                var6[0] = var5;
                var6[1] = var18;
                var2 = function(arg0) { // Environment: var0
                    _fun76321: for (var _fun76321_ip = 0;;) switch (_fun76321_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.zoomScale;
                            var0 = 1;
                            var2 = var1 > var0;
                            var3 = _closure2_slot4;
                            var1 = var3.set;
                            var1 = var1.bind(var3)(var2);
                            var1 = _closure2_slot2;
                            var3 = var1.isInteracting;
                            var1 = var3.set;
                            var1 = var1.bind(var3)(var2);
                            var1 = _closure1_slot11;
                            if (var1) {
                                _fun76321_ip = 116;
                                continue _fun76321
                            }
                        case 69:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 9;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var4 = var3.useEntranceAnimationState;
                            var3 = var4.getState;
                            var3 = var3.bind(var4)();
                            var3 = var3.isComplete;
                            var1 = !var3;
                        case 116:
                            if (var1) {
                                _fun76321_ip = 122;
                                continue _fun76321
                            }
                        case 119:
                            var1 = var2;
                        case 122:
                            if (var1) {
                                _fun76321_ip = 167;
                                continue _fun76321
                            }
                        case 125:
                            var1 = _closure2_slot13;
                            var3 = undefined;
                            var0 = true;
                            var0 = var1.bind(var3)(var0);
                            var0 = global;
                            var2 = var0.setTimeout;
                            var1 = function() { // Environment: var0
                                var2 = _closure2_slot13;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = 500;
                            var0 = var2.bind(var3)(var1, var0);
                        case 167:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var24.bind(var27)(var2, var6);
                var2 = 10;
                var2 = var22[var2];
                var14 = var14.bind(var4)(var2);
                var2 = var14.flattenSource;
                var2 = var2.bind(var14)(var16);
                if (!(var3 == var2)) {
                    _fun76314_ip = 526;
                    continue _fun76314
                }
            case 524:
                var2 = {};
            case 526:
                var29 = var2.obscure;
                _closure2_slot16 = var29;
                var27 = var2.channelId;
                var2 = _closure1_slot0;
                var22 = _closure1_slot2;
                var3 = 11;
                var3 = var22[var3];
                var3 = var2.bind(var4)(var3);
                var24 = var3.MediaViewerSourcesStore;
                var14 = var24.useField;
                var3 = 'spoilerIndexes';
                var3 = var14.bind(var24)(var3);
                _closure2_slot17 = var3;
                var24 = _closure1_slot4;
                var30 = var24.useMemo;
                var14 = new Array(2);
                var14[0] = var20;
                var14[1] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure2_slot17;
                    var1 = var2.has;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var30 = var30.bind(var24)(var3, var14);
                _closure2_slot18 = var30;
                var14 = _closure1_slot1;
                var3 = 12;
                var3 = var22[var3];
                var3 = var14.bind(var4)(var3);
                var3 = var3.bind(var4)(var27);
                _closure2_slot19 = var3;
                var31 = var24.useCallback;
                var27 = new Array(4);
                var27[0] = var30;
                var27[1] = var20;
                var27[2] = var32;
                var27[3] = var3;
                var3 = function() { // Environment: var0
                    _fun76324: for (var _fun76324_ip = 0;;) switch (_fun76324_ip) {
                        case 0:
                            var1 = _closure2_slot18;
                            if (var1) {
                                _fun76324_ip = 42;
                                continue _fun76324
                            }
                        case 10:
                            var1 = _closure2_slot19;
                            if (var1) {
                                _fun76324_ip = 27;
                                continue _fun76324
                            }
                        case 17:
                            var3 = _closure2_slot1;
                            var2 = null;
                            var1 = var2 == var3;
                        case 27:
                            if (var1) {
                                _fun76324_ip = 82;
                                continue _fun76324
                            }
                        case 30:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun76324_ip = 82;
                            continue _fun76324;
                        case 42:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.removeSpoiler;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var32 = var31.bind(var24)(var3, var27);
                _closure2_slot20 = var32;
                var31 = var24.useCallback;
                var27 = new Array(2);
                var27[0] = var5;
                var27[1] = var18;
                var3 = function() { // Environment: var0
                    _fun76325: for (var _fun76325_ip = 0;;) switch (_fun76325_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun76325_ip = 57;
                                continue _fun76325
                            }
                        case 19:
                            var0 = _closure2_slot2;
                            var2 = var0.overlayEnabled;
                            var1 = var2.set;
                            var3 = var0.overlayEnabled;
                            var0 = var3.get;
                            var0 = var0.bind(var3)();
                            var0 = !var0;
                            var0 = var1.bind(var2)(var0);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var31.bind(var24)(var3, var27);
                _closure2_slot21 = var3;
                var31 = var24.useCallback;
                var27 = new Array(3);
                var27[0] = var26;
                var27[1] = var33;
                var27[2] = var5;
                var5 = function(arg0) { // Environment: var0
                    _fun76326: for (var _fun76326_ip = 0;;) switch (_fun76326_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.absoluteX;
                            var3 = var0.absoluteY;
                            var2 = _closure2_slot4;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun76326_ip = 64;
                                continue _fun76326
                            }
                        case 34:
                            var2 = _closure2_slot4;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun76326_ip = 74;
                                continue _fun76326
                            }
                        case 50:
                            var2 = _closure2_slot14;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var4, var3);
                            _fun76326_ip = 74;
                            continue _fun76326;
                        case 64:
                            var1 = _closure2_slot15;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 74:
                            var0 = undefined;
                            return var0;
                    }
                };
                var33 = var31.bind(var24)(var5, var27);
                _closure2_slot22 = var33;
                var31 = var24.useCallback;
                var27 = new Array(1);
                var27[0] = var20;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.removeSpoiler;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var31 = var31.bind(var24)(var5, var27);
                _closure2_slot23 = var31;
                var27 = var24.useMemo;
                var5 = new Array(7);
                var5[0] = var33;
                var5[1] = var32;
                var5[2] = var31;
                var5[3] = var30;
                var5[4] = var29;
                var5[5] = var28;
                var5[6] = var3;
                var3 = function() { // Environment: var0
                    _fun76328: for (var _fun76328_ip = 0;;) switch (_fun76328_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var6 = 13;
                            var0 = var2[var6];
                            var5 = undefined;
                            var0 = var4.bind(var5)(var0);
                            var3 = var0.Gesture;
                            var0 = var3.Tap;
                            var3 = var0.bind(var3)();
                            var0 = var3.runOnJS;
                            var8 = true;
                            var9 = var0.bind(var3)(var8);
                            var7 = var9.enabled;
                            var3 = _closure2_slot18;
                            var3 = !var3;
                            var9 = var7.bind(var9)(var3);
                            var7 = var9.numberOfTaps;
                            var3 = 2;
                            var7 = var7.bind(var9)(var3);
                            var3 = var7.maxDistance;
                            var12 = 5;
                            var2 = var2[var12];
                            var4 = var4.bind(var5)(var2);
                            var2 = var4.isAndroid;
                            var9 = var2.bind(var4)();
                            var4 = 10;
                            var2 = var4;
                            if (!var9) {
                                _fun76328_ip = 127;
                                continue _fun76328
                            }
                        case 124:
                            var2 = 20;
                        case 127:
                            var7 = var3.bind(var7)(var2);
                            var3 = var7.onStart;
                            var2 = _closure2_slot22;
                            var10 = var3.bind(var7)(var2);
                            var11 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var6];
                            var3 = var11.bind(var5)(var3);
                            var7 = var3.Gesture;
                            var3 = var7.Tap;
                            var7 = var3.bind(var7)();
                            var3 = var7.runOnJS;
                            var9 = var3.bind(var7)(var8);
                            var7 = var9.enabled;
                            var3 = _closure2_slot18;
                            var3 = !var3;
                            var9 = var7.bind(var9)(var3);
                            var3 = var9.numberOfTaps;
                            var7 = 1;
                            var9 = var3.bind(var9)(var7);
                            var3 = var9.maxDistance;
                            var2 = var2[var12];
                            var11 = var11.bind(var5)(var2);
                            var2 = var11.isAndroid;
                            var11 = var2.bind(var11)();
                            var2 = var4;
                            if (!var11) {
                                _fun76328_ip = 255;
                                continue _fun76328
                            }
                        case 252:
                            var2 = 20;
                        case 255:
                            var9 = var3.bind(var9)(var2);
                            var3 = var9.onStart;
                            var2 = _closure2_slot21;
                            var9 = var3.bind(var9)(var2);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.Gesture;
                            var2 = var3.Tap;
                            var3 = var2.bind(var3)();
                            var2 = var3.runOnJS;
                            var11 = var2.bind(var3)(var8);
                            var3 = var11.enabled;
                            var2 = _closure2_slot18;
                            if (!var2) {
                                _fun76328_ip = 337;
                                continue _fun76328
                            }
                        case 330:
                            var13 = _closure2_slot16;
                            var2 = !var13;
                        case 337:
                            var3 = var3.bind(var11)(var2);
                            var2 = var3.numberOfTaps;
                            var3 = var2.bind(var3)(var7);
                            var2 = var3.maxDistance;
                            var11 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var12];
                            var11 = var11.bind(var5)(var7);
                            var7 = var11.isAndroid;
                            var7 = var7.bind(var11)();
                            if (!var7) {
                                _fun76328_ip = 392;
                                continue _fun76328
                            }
                        case 389:
                            var4 = 20;
                        case 392:
                            var4 = var2.bind(var3)(var4);
                            var3 = var4.onStart;
                            var2 = _closure2_slot23;
                            var7 = var3.bind(var4)(var2);
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var3 = var1[var6];
                            var3 = var2.bind(var5)(var3);
                            var4 = var3.Gesture;
                            var3 = var4.Exclusive;
                            var4 = var3.bind(var4)(var7, var10, var9);
                            var3 = var1[var6];
                            var3 = var2.bind(var5)(var3);
                            var7 = var3.Gesture;
                            var3 = var7.LongPress;
                            var7 = var3.bind(var7)();
                            var3 = var7.runOnJS;
                            var8 = var3.bind(var7)(var8);
                            var7 = var8.enabled;
                            var3 = _closure2_slot18;
                            var3 = !var3;
                            var8 = var7.bind(var8)(var3);
                            var7 = var8.onStart;
                            var3 = _closure2_slot20;
                            var3 = var7.bind(var8)(var3);
                            var1 = var1[var6];
                            var1 = var2.bind(var5)(var1);
                            var2 = var1.Gesture;
                            var1 = var2.Simultaneous;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var4, var3, var0);
                            return var0;
                    }
                };
                var5 = var27.bind(var24)(var3, var5);
                var3 = var24.useRef;
                var3 = var3.bind(var24)(var23);
                _closure2_slot24 = var3;
                var27 = var24.useEffect;
                var23 = new Array(3);
                var23[0] = var26;
                var23[1] = var11;
                var23[2] = var10;
                var3 = function() { // Environment: var0
                    _fun76329: for (var _fun76329_ip = 0;;) switch (_fun76329_ip) {
                        case 0:
                            var2 = _closure2_slot24;
                            var2 = var2.current;
                            if (var2) {
                                _fun76329_ip = 33;
                                continue _fun76329
                            }
                        case 17:
                            var3 = _closure2_slot24;
                            var2 = true;
                            var3.current = var2;
                            var2 = undefined;
                            return var2;
                        case 33:
                            var2 = global;
                            var4 = var2.setTimeout;
                            var3 = _closure2_slot15;
                            var2 = undefined;
                            var1 = 0;
                            var1 = var4.bind(var2)(var3, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var3 = var27.bind(var24)(var3, var23);
                var23 = var24.useEffect;
                var3 = new Array(2);
                var3[0] = var26;
                var3[1] = var25;
                var0 = function() { // Environment: var0
                    _fun76331: for (var _fun76331_ip = 0;;) switch (_fun76331_ip) {
                        case 0:
                            var1 = _closure2_slot24;
                            var1 = var1.current;
                            if (!var1) {
                                _fun76331_ip = 28;
                                continue _fun76331
                            }
                        case 15:
                            var2 = _closure2_slot15;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var23.bind(var24)(var0, var3);
                var3 = _closure1_slot9;
                var0 = 13;
                var0 = var22[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.GestureDetector;
                var0 = {};
                var0.gesture = var5;
                var5 = 14;
                var5 = var22[var5];
                var14 = var14.bind(var4)(var5);
                var5 = {};
                var5.entranceAnimationDriver = var21;
                var5.index = var20;
                var5.originLayout = var19;
                var5.panGestureConfig = var18;
                var5.renderMedia = var17;
                var5.source = var16;
                var5.windowWidth = var11;
                var5.windowHeight = var10;
                var5.useItemVisible = var15;
                var5 = var3.bind(var4)(var14, var5);
                var0.children = var5;
                var5 = var3.bind(var4)(var2, var0);
                var0 = _closure1_slot11;
                var3 = _closure1_slot9;
                if (var0) {
                    _fun76314_ip = 1113;
                    continue _fun76314
                }
            case 1034:
                var2 = _closure1_slot7;
                var0 = {
                    'ref': null,
                    'style': null,
                    'automaticallyAdjustContentInsets': false,
                    'showsHorizontalScrollIndicator': false,
                    'showsVerticalScrollIndicator': false,
                    'minimumZoomScale': 1,
                    'maximumZoomScale': null,
                    'centerContent': true,
                    'scrollEventThrottle': 16
                };
                var0.ref = var12;
                var12 = {};
                var12.width = var11;
                var12.height = var10;
                var0.style = var12;
                var0.maximumZoomScale = var7;
                var0.onScroll = var6;
                var12 = 'auto';
                if (!var13) {
                    _fun76314_ip = 1096;
                    continue _fun76314
                }
            case 1092:
                var12 = 'none';
            case 1096:
                var0.pointerEvents = var12;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun76314_ip = 1178;
                continue _fun76314;
            case 1113:
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 15;
                var1 = var12[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.ref = var9;
                var9 = {};
                var9.width = var11;
                var9.height = var10;
                var1.style = var9;
                var1.minimumZoomScale = var8;
                var1.maximumZoomScale = var7;
                var1.onZoomChanged = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1178:
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var28 = var1.entranceAnimationDriver;
        var _closure2_slot0 = var28;
        var13 = var1.initialScrollItem;
        var6 = var1.onContentSizeChange;
        var27 = var1.onLongPress;
        var _closure2_slot1 = var27;
        var10 = var1.onScroll;
        var26 = var1.originLayout;
        var _closure2_slot2 = var26;
        var25 = var1.panGestureConfig;
        var _closure2_slot3 = var25;
        var23 = var1.renderMedia;
        var _closure2_slot4 = var23;
        var16 = var1.sources;
        var _closure2_slot5 = var16;
        var22 = var1.useItemVisible;
        var _closure2_slot6 = var22;
        var7 = var1.windowWidth;
        var _closure2_slot7 = var7;
        var21 = var1.windowHeight;
        var _closure2_slot8 = var21;
        var18 = var1.ref;
        var1 = var1.zoomed;
        var _closure2_slot9 = var1;
        var5 = _closure1_slot0;
        var19 = _closure1_slot2;
        var9 = 16;
        var2 = var19[var9];
        var3 = undefined;
        var4 = var5.bind(var3)(var2);
        var2 = var4.useSharedValue;
        var12 = false;
        var2 = var2.bind(var4)(var12);
        var _closure2_slot10 = var2;
        var4 = var19[var9];
        var11 = var5.bind(var3)(var4);
        var8 = var11.useDerivedValue;
        var4 = function() { // Original name: O, environment: var0
            _fun76333: for (var _fun76333_ip = 0;;) switch (_fun76333_ip) {
                case 0:
                    var2 = _closure2_slot9;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var0 = !var0;
                    if (!var0) {
                        _fun76333_ip = 38;
                        continue _fun76333
                    }
                case 22:
                    var2 = _closure2_slot10;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0 = !var1;
                case 38:
                    return var0;
            }
        };
        var14 = {};
        var14.zoomed = var1;
        var14.pinching = var2;
        var4.__closure = var14;
        var14 = 9157951736691.0;
        var4.__workletHash = var14;
        var14 = _closure1_slot13;
        var4.__initData = var14;
        var20 = var8.bind(var11)(var4);
        var _closure2_slot11 = var20;
        var11 = _closure1_slot4;
        var14 = var11.useCallback;
        var8 = new Array(1);
        var8[0] = var2;
        var4 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.touches;
            var2 = _closure2_slot10;
            var1 = var2.set;
            var3 = var0.length;
            var0 = 2;
            var0 = var0 === var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var15 = var14.bind(var11)(var4, var8);
        var8 = var11.useCallback;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure2_slot10;
            var1 = var2.set;
            var0 = false;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var14 = var8.bind(var11)(var2, var4);
        var2 = 17;
        var2 = var19[var2];
        var4 = var5.bind(var3)(var2);
        var2 = var4.useMediaViewerPanGesture;
        var2 = var2.bind(var4)(var25, var20);
        var24 = var2.panGestureGenerator;
        var _closure2_slot12 = var24;
        var4 = var2.nativeGesture;
        var8 = var11.useCallback;
        var2 = new Array(11);
        var2[0] = var28;
        var2[1] = var27;
        var2[2] = var26;
        var2[3] = var25;
        var2[4] = var24;
        var2[5] = var23;
        var2[6] = var16;
        var2[7] = var22;
        var2[8] = var21;
        var2[9] = var7;
        var2[10] = var1;
        var1 = function(arg0, arg1) { // Environment: var0
            var6 = arg1;
            var3 = _closure1_slot9;
            var2 = _closure1_slot12;
            var1 = {};
            var0 = _closure2_slot2;
            var1.originLayout = var0;
            var0 = _closure2_slot4;
            var1.renderMedia = var0;
            var0 = _closure2_slot1;
            var1.onLongPress = var0;
            var0 = _closure2_slot7;
            var1.windowWidth = var0;
            var0 = _closure2_slot8;
            var1.windowHeight = var0;
            var0 = _closure2_slot3;
            var1.panGestureConfig = var0;
            var0 = _closure2_slot0;
            var1.entranceAnimationDriver = var0;
            var0 = _closure2_slot5;
            var0 = var0[var6];
            var1.source = var0;
            var1.index = var6;
            var0 = _closure2_slot9;
            var1.zoomed = var0;
            var5 = _closure2_slot12;
            var0 = undefined;
            var5 = var5.bind(var0)(var6);
            var1.panGesture = var5;
            var4 = _closure2_slot6;
            var1.useItemVisible = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var11 = var8.bind(var11)(var1, var2);
        var1 = var19[var9];
        var2 = var5.bind(var3)(var1);
        var1 = var2.useAnimatedProps;
        var0 = function() { // Original name: I, environment: var0
            var0 = {};
            var2 = _closure2_slot11;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.scrollEnabled = var1;
            return var0;
        };
        var8 = {};
        var8.scrollEnabled = var20;
        var0.__closure = var8;
        var8 = 13550782123441.0;
        var0.__workletHash = var8;
        var8 = _closure1_slot14;
        var0.__initData = var8;
        var8 = var1.bind(var2)(var0);
        var2 = _closure1_slot9;
        var0 = 13;
        var0 = var19[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.GestureDetector;
        var0 = {};
        var0.gesture = var4;
        var4 = 18;
        var4 = var19[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.AnimatedFastList;
        var4 = {};
        var4.ref = var18;
        var17 = _closure1_slot6;
        var17 = var17.absoluteFill;
        var4.style = var17;
        var17 = var16.length;
        var16 = new Array(1);
        var16[0] = var17;
        var4.sections = var16;
        var4.onTouchStart = var15;
        var4.onTouchEnd = var14;
        var4.onTouchCancel = var14;
        var4.initialScrollItem = var13;
        var4.automaticallyAdjustContentInsets = var12;
        var4.showsVerticalScrollIndicator = var12;
        var4.showsHorizontalScrollIndicator = var12;
        var4.itemSize = var7;
        var4.renderItem = var11;
        var4.onContentSizeChange = var6;
        var6 = true;
        var4.pagingEnabled = var6;
        var4.onScroll = var10;
        var4.scrollEventThrottle = var9;
        var4.animatedProps = var8;
        var4.disableLegacyGestureHandling = var6;
        var4.chunkBase = var7;
        var4.horizontal = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = "function MediaViewerTsx3(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}";
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = {};
    var7 = "function MediaViewerTsx4(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}";
    var3.code = var7;
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = 'function MediaViewerTsx5(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}';
    var3.code = var7;
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = 'function MediaViewerTsx6(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}';
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = {};
    var7 = "function MediaViewerTsx7(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}";
    var3.code = var7;
    var _closure1_slot20 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: MediaViewer, environment: var1
        _fun76338: for (var _fun76338_ip = 0;;) switch (_fun76338_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.onClose;
                var29 = var0.onLongPress;
                var28 = var0.originLayout;
                var25 = var0.renderMedia;
                var13 = var0.renderOverlay;
                var12 = var0.swipeVelocityThreshold;
                var0 = var0.syncer;
                var23 = var0.index;
                var24 = var0.sources;
                var9 = var0.useViewerProps;
                var8 = var0.zoomed;
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 19;
                var0 = var14[var6];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var0 = 20;
                var0 = var14[var0];
                var0 = var2.bind(var3)(var0);
                var7 = var0.MEDIA_VIEWER;
                var0 = new Array(1);
                var0[0] = var7;
                var0 = var5.bind(var3)(var0);
                var5 = var0.analyticsLocations;
                var35 = _closure1_slot4;
                var7 = var35.useState;
                var0 = true;
                var7 = var7.bind(var35)(var0);
                var34 = _closure1_slot3;
                var0 = 2;
                var0 = var34.bind(var3)(var7, var0);
                var17 = 0;
                var15 = var0[var17];
                var21 = 1;
                var42 = var0[var21];
                var _closure2_slot0 = var42;
                var0 = 21;
                var0 = var14[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var18 = var0.width;
                var19 = var0.height;
                var _closure2_slot1 = var19;
                var0 = 22;
                var0 = var14[var0];
                var7 = var2.bind(var3)(var0);
                var0 = {};
                var0.index = var23;
                var0.onClose = var16;
                var0.sources = var24;
                var0.windowHeight = var19;
                var0.windowWidth = var18;
                var44 = var7.bind(var3)(var0);
                var _closure2_slot2 = var44;
                var7 = _closure1_slot0;
                var38 = 16;
                var0 = var14[var38];
                var10 = var7.bind(var3)(var0);
                var0 = var10.useSharedValue;
                var33 = var0.bind(var10)(var17);
                var _closure2_slot3 = var33;
                var0 = var14[var38];
                var11 = var7.bind(var3)(var0);
                var10 = var11.useSharedValue;
                var0 = false;
                var0 = var10.bind(var11)(var0);
                var _closure2_slot4 = var0;
                var10 = var14[var38];
                var11 = var7.bind(var3)(var10);
                var10 = var11.useAnimatedRef;
                var22 = var10.bind(var11)();
                var _closure2_slot5 = var22;
                var10 = var24.length;
                var10 = var10 > var21;
                var _closure2_slot6 = var10;
                var9 = var9.bind(var3)();
                var26 = var9.ref;
                var30 = var9.onScroll;
                var31 = var9.onContentSizeChange;
                var20 = var9.useItemVisible;
                var11 = var35.useState;
                var9 = var23.get;
                var9 = var9.bind(var23)();
                var9 = var11.bind(var35)(var9);
                var9 = var34.bind(var3)(var9, var21);
                var32 = var9[var17];
                var9 = 17;
                var9 = var14[var9];
                var11 = var7.bind(var3)(var9);
                var9 = var11.useMediaViewerPanGestureConfig;
                var27 = var9.bind(var11)(var44, var12, var16);
                var12 = var27.dismiss;
                var40 = var27.translatePos;
                var _closure2_slot7 = var40;
                var37 = var27.isClosing;
                var _closure2_slot8 = var37;
                var43 = var27.isInteracting;
                var _closure2_slot9 = var43;
                var11 = var27.overlayEnabled;
                var _closure2_slot10 = var11;
                var9 = _closure1_slot6;
                var41 = var9.absoluteFillObject;
                var _closure2_slot11 = var41;
                var16 = var14[var38];
                var36 = var7.bind(var3)(var16);
                var23 = var36.useAnimatedStyle;
                var16 = function() { // Original name: k, environment: var4
                    var0 = {};
                    var11 = _closure2_slot11;
                    var12 = var0;
                    var2 = copyDataProperties(var12, var11);
                    var3 = _closure2_slot1;
                    var2 = 'height';
                    var0[var2] = var3;
                    var3 = 'black';
                    var2 = 'backgroundColor';
                    var0[var2] = var3;
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot3;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 16;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.interpolate;
                    var6 = _closure2_slot7;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var1 = _closure2_slot2;
                    var9 = -var1;
                    var5 = new Array(3);
                    var5[0] = var9;
                    var9 = 0;
                    var5[1] = var9;
                    var5[2] = var1;
                    var1 = [0, 1, 0];
                    var1 = var7.bind(var8)(var6, var5, var1);
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = 'opacity';
                    var0[var1] = var2;
                    return var0;
                };
                var39 = {};
                var39.absoluteFillObject = var41;
                var39.windowHeight = var19;
                var39.entranceAnimationDriver = var33;
                var45 = var14[var38];
                var45 = var7.bind(var3)(var45);
                var45 = var45.interpolate;
                var39.interpolate = var45;
                var39.translatePos = var40;
                var39.closePosition = var44;
                var16.__closure = var39;
                var39 = 10332062530694.0;
                var16.__workletHash = var39;
                var39 = _closure1_slot16;
                var16.__initData = var39;
                var23 = var23.bind(var36)(var16);
                var36 = var35.useState;
                var16 = {};
                var47 = var9.absoluteFillObject;
                var48 = var16;
                var39 = copyDataProperties(var48, var47);
                var44 = 'transparent';
                var39 = 'backgroundColor';
                var16[var39] = var44;
                var16 = var36.bind(var35)(var16);
                var16 = var34.bind(var3)(var16, var21);
                var17 = var16[var17];
                var16 = var14[var38];
                var34 = var7.bind(var3)(var16);
                var21 = var34.useAnimatedStyle;
                var16 = function() { // Original name: A, environment: var4
                    _fun76340: for (var _fun76340_ip = 0;;) switch (_fun76340_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot8;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 0;
                            if (var2) {
                                _fun76340_ip = 323;
                                continue _fun76340
                            }
                        case 26:
                            var3 = _closure2_slot4;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1 = 0;
                            if (var2) {
                                _fun76340_ip = 323;
                                continue _fun76340
                            }
                        case 47:
                            var3 = _closure2_slot10;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun76340_ip = 161;
                                continue _fun76340
                            }
                        case 63:
                            var3 = _closure2_slot9;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun76340_ip = 161;
                                continue _fun76340
                            }
                        case 79:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 23;
                            var2 = var9[var2];
                            var6 = undefined;
                            var5 = var7.bind(var6)(var2);
                            var4 = var5.withTiming;
                            var3 = {};
                            var2 = 16;
                            var2 = var9[var2];
                            var2 = var7.bind(var6)(var2);
                            var2 = var2.Easing;
                            var2 = var2.linear;
                            var3.easing = var2;
                            var2 = 150;
                            var3.duration = var2;
                            var2 = 1;
                            var2 = var4.bind(var5)(var2, var3);
                            _fun76340_ip = 320;
                            continue _fun76340;
                        case 161:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var4 = 23;
                            var4 = var14[var4];
                            var12 = undefined;
                            var7 = var13.bind(var12)(var4);
                            var6 = var7.withTiming;
                            var5 = {};
                            var11 = 16;
                            var4 = var14[var11];
                            var4 = var13.bind(var12)(var4);
                            var4 = var4.Easing;
                            var4 = var4.linear;
                            var5.easing = var4;
                            var4 = 75;
                            var5.duration = var4;
                            var4 = function() { // Original name: t, environment: var4
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 16;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure2_slot0;
                                var2 = var2.bind(var3)(var1);
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var9 = {};
                            var11 = var14[var11];
                            var11 = var13.bind(var12)(var11);
                            var11 = var11.runOnJS;
                            var9.runOnJS = var11;
                            var10 = _closure2_slot0;
                            var9.setShowHeader = var10;
                            var4.__closure = var9;
                            var9 = 11572173694016.0;
                            var4.__workletHash = var9;
                            var3 = _closure1_slot18;
                            var4.__initData = var3;
                            var16 = 'respect-motion-settings';
                            var19 = var7;
                            var18 = 0;
                            var17 = var5;
                            var15 = var4;
                            var2 = var19[var6](var18, var17, var16, var15, var14);
                        case 320:
                            var1 = var2;
                        case 323:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var36 = {};
                var36.isClosing = var37;
                var36.hideRelayoutSharedValue = var0;
                var36.overlayEnabled = var11;
                var36.isInteracting = var43;
                var39 = 23;
                var37 = var14[var39];
                var37 = var7.bind(var3)(var37);
                var37 = var37.withTiming;
                var36.withTiming = var37;
                var37 = var14[var38];
                var37 = var7.bind(var3)(var37);
                var37 = var37.Easing;
                var36.Easing = var37;
                var37 = var14[var38];
                var37 = var7.bind(var3)(var37);
                var37 = var37.runOnJS;
                var36.runOnJS = var37;
                var36.setShowHeader = var42;
                var16.__closure = var36;
                var36 = 14874736878670.0;
                var16.__workletHash = var36;
                var36 = _closure1_slot17;
                var16.__initData = var36;
                var16 = var21.bind(var34)(var16);
                var21 = var14[var38];
                var36 = var7.bind(var3)(var21);
                var34 = var36.useDerivedValue;
                var21 = function() { // Original name: M, environment: var4
                    _fun76342: for (var _fun76342_ip = 0;;) switch (_fun76342_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun76342_ip = 35;
                                continue _fun76342
                            }
                        case 19:
                            var3 = _closure2_slot9;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1 = !var2;
                        case 35:
                            if (!var1) {
                                _fun76342_ip = 84;
                                continue _fun76342
                            }
                        case 38:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var1 = var2[var1];
                            var2 = undefined;
                            var3 = var3.bind(var2)(var1);
                            var1 = var3.runOnJS;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var3)(var0);
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 84:
                            var0 = undefined;
                            return var0;
                    }
                };
                var37 = {};
                var37.overlayEnabled = var11;
                var37.isInteracting = var43;
                var43 = var14[var38];
                var43 = var7.bind(var3)(var43);
                var43 = var43.runOnJS;
                var37.runOnJS = var43;
                var37.setShowHeader = var42;
                var21.__closure = var37;
                var37 = 2199049578465.0;
                var21.__workletHash = var37;
                var37 = _closure1_slot19;
                var21.__initData = var37;
                var21 = var34.bind(var36)(var21);
                var21 = var14[var38];
                var36 = var7.bind(var3)(var21);
                var34 = var36.useAnimatedStyle;
                var21 = function() { // Original name: de, environment: var4
                    _fun76343: for (var _fun76343_ip = 0;;) switch (_fun76343_ip) {
                        case 0:
                            var0 = {};
                            var9 = _closure2_slot11;
                            var10 = var0;
                            var2 = copyDataProperties(var10, var9);
                            var3 = 'center';
                            var2 = 'alignItems';
                            var0[var2] = var3;
                            var2 = 'justifyContent';
                            var0[var2] = var3;
                            var2 = {};
                            var4 = _closure2_slot7;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var2.translateY = var3;
                            var3 = new Array(1);
                            var3[0] = var2;
                            var2 = 'transform';
                            var0[var2] = var3;
                            var2 = _closure2_slot4;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = 0;
                            if (var1) {
                                _fun76343_ip = 170;
                                continue _fun76343
                            }
                        case 93:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 23;
                            var1 = var8[var1];
                            var6 = undefined;
                            var5 = var7.bind(var6)(var1);
                            var4 = var5.withTiming;
                            var3 = {};
                            var1 = 16;
                            var1 = var8[var1];
                            var1 = var7.bind(var6)(var1);
                            var1 = var1.Easing;
                            var1 = var1.linear;
                            var3.easing = var1;
                            var1 = 75;
                            var3.duration = var1;
                            var1 = 1;
                            var2 = var4.bind(var5)(var1, var3);
                        case 170:
                            var1 = 'opacity';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var37 = {};
                var37.absoluteFillObject = var41;
                var37.translatePos = var40;
                var37.hideRelayoutSharedValue = var0;
                var39 = var14[var39];
                var39 = var7.bind(var3)(var39);
                var39 = var39.withTiming;
                var37.withTiming = var39;
                var38 = var14[var38];
                var38 = var7.bind(var3)(var38);
                var38 = var38.Easing;
                var37.Easing = var38;
                var21.__closure = var37;
                var37 = 8244409104374.0;
                var21.__workletHash = var37;
                var37 = _closure1_slot20;
                var21.__initData = var37;
                var21 = var34.bind(var36)(var21);
                var36 = var35.useRef;
                var34 = null;
                var34 = var36.bind(var35)(var34);
                var _closure2_slot12 = var34;
                var36 = var35.useCallback;
                var34 = new Array(3);
                var34[0] = var10;
                var34[1] = var22;
                var34[2] = var0;
                var10 = function() { // Environment: var4
                    _fun76344: for (var _fun76344_ip = 0;;) switch (_fun76344_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            if (!var0) {
                                _fun76344_ip = 25;
                                continue _fun76344
                            }
                        case 10:
                            var2 = _closure2_slot5;
                            var3 = var2.current;
                            var2 = null;
                            var0 = var2 != var3;
                        case 25:
                            if (!var0) {
                                _fun76344_ip = 98;
                                continue _fun76344
                            }
                        case 28:
                            var3 = _closure2_slot4;
                            var2 = var3.set;
                            var0 = true;
                            var0 = var2.bind(var3)(var0);
                            var0 = global;
                            var3 = var0.clearTimeout;
                            var1 = _closure2_slot12;
                            var2 = var1.current;
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var3 = var0.setTimeout;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot4;
                                var1 = var2.set;
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = 250;
                            var0 = var3.bind(var4)(var2, var0);
                            var1.current = var0;
                        case 98:
                            var0 = undefined;
                            return var0;
                    }
                };
                var36 = var36.bind(var35)(var10, var34);
                var _closure2_slot13 = var36;
                var34 = var35.useCallback;
                var10 = new Array(1);
                var10[0] = var0;
                var0 = function() { // Environment: var4
                    var2 = _closure2_slot4;
                    var1 = var2.set;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var34.bind(var35)(var0, var10);
                var37 = var35.useEffect;
                var34 = new Array(1);
                var34[0] = var36;
                var10 = function() { // Environment: var4
                    var2 = _closure1_slot8;
                    var1 = var2.subscribe;
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot13;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var37.bind(var35)(var10, var34);
                var34 = var35.useCallback;
                var10 = new Array(1);
                var10[0] = var36;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun76349: for (var _fun76349_ip = 0;;) switch (_fun76349_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.orientation;
                            var0 = arg1;
                            var0 = var0.orientation;
                            if (!(var1 !== var0)) {
                                _fun76349_ip = 35;
                                continue _fun76349
                            }
                        case 22:
                            var1 = _closure2_slot13;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 35:
                            var1 = _closure1_slot11;
                            if (!var1) {
                                _fun76349_ip = 77;
                                continue _fun76349
                            }
                        case 45:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 24;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.unpauseCurrentVideoIfNeeded;
                            var0 = var0.bind(var1)();
                        case 77:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var34.bind(var35)(var4, var10);
                var4 = 6;
                var4 = var14[var4];
                var7 = var7.bind(var3)(var4);
                var4 = var7.useOrientationListener;
                var4 = var4.bind(var7)(var10);
                var10 = _closure1_slot9;
                var7 = _closure1_slot15;
                var4 = {};
                var4.entranceAnimationDriver = var33;
                var4.initialScrollItem = var32;
                var4.onContentSizeChange = var31;
                var4.onScroll = var30;
                var4.onLongPress = var29;
                var4.originLayout = var28;
                var4.panGestureConfig = var27;
                var4.ref = var26;
                var4.renderMedia = var25;
                var4.sources = var24;
                var4.useItemVisible = var20;
                var4.windowHeight = var19;
                var4.windowWidth = var18;
                var4.zoomed = var8;
                var20 = var10.bind(var3)(var7, var4);
                var8 = _closure1_slot10;
                var7 = _closure1_slot5;
                var4 = {};
                var9 = var9.absoluteFill;
                var4.style = var9;
                var4.onAccessibilityEscape = var12;
                var4.onLayout = var0;
                var0 = 25;
                var0 = var14[var0];
                var9 = var2.bind(var3)(var0);
                var0 = {};
                var18 = 'light-content';
                var0.barStyle = var18;
                var18 = !var15;
                var0.hidden = var18;
                var0 = var10.bind(var3)(var9, var0);
                var9 = new Array(5);
                var9[0] = var0;
                var0 = 26;
                var18 = var14[var0];
                var19 = var2.bind(var3)(var18);
                var18 = {};
                var18.style = var23;
                var18 = var10.bind(var3)(var19, var18);
                var9[1] = var18;
                var18 = var14[var0];
                var19 = var2.bind(var3)(var18);
                var18 = {};
                var18.ref = var22;
                var18.style = var21;
                var18.children = var20;
                var18 = var10.bind(var3)(var19, var18);
                var9[2] = var18;
                var0 = var14[var0];
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var14 = new Array(2);
                var14[0] = var17;
                var14[1] = var16;
                var0.style = var14;
                var14 = 'none';
                if (!var15) {
                    _fun76338_ip = 1416;
                    continue _fun76338
                }
            case 1410:
                var14 = 'box-none';
            case 1416:
                var0.pointerEvents = var14;
                var11 = var13.bind(var3)(var12, var11);
                var0.children = var11;
                var0 = var10.bind(var3)(var2, var0);
                var9[3] = var0;
                var2 = _closure1_slot9;
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var10 = 27;
                var10 = var0[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10 = var2.bind(var3)(var11, var10);
                var9[4] = var10;
                var4.children = var9;
                var4 = var8.bind(var3)(var7, var4);
                var1 = _closure1_slot0;
                var0 = var0[var6];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaViewer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1465, 33, 478, 7780, 9700, 3677, 9701, 8803, 8802, 9148, 4923, 9702, 8000, 3679, 9703, 6417, 5687, 5540, 1464, 9704, 4056, 8808, 7853, 3869, 7855, 2]);