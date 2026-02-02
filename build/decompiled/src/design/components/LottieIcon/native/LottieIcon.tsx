// design/components/LottieIcon/native/LottieIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun67884: for (var _fun67884_ip = 0;;) switch (_fun67884_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.animation;
                var _closure2_slot0 = var2;
                var9 = var1.dotLottie;
                var13 = var1.size;
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun67884_ip = 36;
                    continue _fun67884
                }
            case 32:
                var13 = 'md';
            case 36:
                var10 = var1.color;
                if (!(var10 === var3)) {
                    _fun67884_ip = 79;
                    continue _fun67884
                }
            case 45:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 3;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var10 = var2.INTERACTIVE_TEXT_DEFAULT;
            case 79:
                var8 = var1.opacity;
                if (!(var8 === var3)) {
                    _fun67884_ip = 91;
                    continue _fun67884
                }
            case 88:
                var8 = 1;
            case 91:
                var12 = var1.markers;
                var2 = var1.layers;
                var _closure2_slot1 = var2;
                var20 = var1.width;
                var6 = var1.height;
                var14 = var1.autoPlay;
                var _closure2_slot2 = var14;
                var11 = var1.useLottieDefaultColors;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 4;
                var1 = var7[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.ICON_SIZE;
                var5 = var1[var13];
                var7 = var12.find;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var7.bind(var12)(var1);
                var15 = var1.start;
                _closure2_slot3 = var15;
                var1 = var1.duration;
                var17 = var15 + var1;
                _closure2_slot4 = var17;
                var7 = var12.find;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = 'easteregg';
                    var0 = var0 === var1;
                    return var0;
                };
                var18 = var7.bind(var12)(var1);
                var12 = null;
                var1 = var12 == var18;
                var7 = undefined;
                if (var1) {
                    _fun67884_ip = 270;
                    continue _fun67884
                }
            case 265:
                var7 = var18.start;
            case 270:
                var19 = var12 != var7;
                var1 = -1;
                var16 = var1;
                if (!var19) {
                    _fun67884_ip = 289;
                    continue _fun67884
                }
            case 286:
                var16 = var7;
            case 289:
                _closure2_slot5 = var16;
                var19 = var12 == var18;
                var7 = undefined;
                if (var19) {
                    _fun67884_ip = 307;
                    continue _fun67884
                }
            case 302:
                var7 = var18.duration;
            case 307:
                var18 = var12 != var7;
                if (!var18) {
                    _fun67884_ip = 317;
                    continue _fun67884
                }
            case 314:
                var1 = var7;
            case 317:
                var1 = var16 + var1;
                _closure2_slot6 = var1;
                var19 = _closure1_slot3;
                var7 = var19.useRef;
                var12 = var7.bind(var19)(var12);
                _closure2_slot7 = var12;
                var18 = var19.useContext;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var7 = 5;
                var7 = var22[var7];
                var7 = var21.bind(var3)(var7);
                var7 = var7.AccessibilityPreferencesContext;
                var7 = var18.bind(var19)(var7);
                var7 = var7.reducedMotion;
                var18 = var7.enabled;
                _closure2_slot8 = var18;
                var7 = 'custom';
                var13 = var7 === var13;
                var7 = {};
                var19 = var5;
                if (!var13) {
                    _fun67884_ip = 414;
                    continue _fun67884
                }
            case 411:
                var19 = var20;
            case 414:
                var7.width = var19;
                if (!var13) {
                    _fun67884_ip = 424;
                    continue _fun67884
                }
            case 421:
                var5 = var6;
            case 424:
                var7.height = var5;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 6;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.useToken;
                var19 = var5.bind(var6)(var10);
                _closure2_slot9 = var19;
                var5 = _closure1_slot3;
                var10 = var5.useMemo;
                var6 = new Array(2);
                var6[0] = var19;
                var6[1] = var2;
                var2 = function() { // Environment: var0
                    _fun67887: for (var _fun67887_ip = 0;;) switch (_fun67887_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun67887_ip = 41;
                                continue _fun67887
                            }
                        case 18:
                            var3 = _closure2_slot1;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = {};
                                var1 = arg0;
                                var0.keypath = var1;
                                var1 = _closure2_slot9;
                                var0.color = var1;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 41:
                            return var0;
                    }
                };
                var10 = var10.bind(var5)(var2, var6);
                var6 = var5.useCallback;
                var2 = new Array(5);
                var2[0] = var18;
                var2[1] = var15;
                var2[2] = var17;
                var2[3] = var16;
                var2[4] = var1;
                var1 = function() { // Environment: var0
                    _fun67889: for (var _fun67889_ip = 0;;) switch (_fun67889_ip) {
                        case 0:
                            var0 = global;
                            var1 = var0.Math;
                            var0 = var1.random;
                            var1 = var0.bind(var1)();
                            var0 = 0.05;
                            var1 = var1 < var0;
                            var2 = _closure2_slot8;
                            if (var2) {
                                _fun67889_ip = 129;
                                continue _fun67889
                            }
                        case 42:
                            if (!var1) {
                                _fun67889_ip = 55;
                                continue _fun67889
                            }
                        case 45:
                            var2 = _closure2_slot5;
                            var1 = 0;
                            if (!(!(var2 >= var1))) {
                                _fun67889_ip = 92;
                                continue _fun67889
                            }
                        case 55:
                            var1 = _closure2_slot7;
                            var4 = var1.current;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun67889_ip = 160;
                                continue _fun67889
                            }
                        case 70:
                            var3 = var4.play;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot4;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun67889_ip = 160;
                            continue _fun67889;
                        case 92:
                            var1 = _closure2_slot7;
                            var4 = var1.current;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun67889_ip = 160;
                                continue _fun67889
                            }
                        case 107:
                            var3 = var4.play;
                            var2 = _closure2_slot5;
                            var1 = _closure2_slot6;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun67889_ip = 160;
                            continue _fun67889;
                        case 129:
                            var1 = _closure2_slot7;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67889_ip = 160;
                                continue _fun67889
                            }
                        case 144:
                            var1 = var2.play;
                            var0 = _closure2_slot4;
                            var0 = var1.bind(var2)(var0, var0);
                        case 160:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var6.bind(var5)(var1, var2);
                _closure2_slot10 = var6;
                var17 = var5.useImperativeHandle;
                var16 = new Array(1);
                var16[0] = var6;
                var2 = arg1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var1 = function() {
                        var1 = _closure2_slot10;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    var0.play = var1;
                    return var0;
                };
                var1 = var17.bind(var5)(var2, var1, var16);
                var2 = var5.useCallback;
                var1 = new Array(3);
                var1[0] = var15;
                var1[1] = var14;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun67892: for (var _fun67892_ip = 0;;) switch (_fun67892_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun67892_ip = 43;
                                continue _fun67892
                            }
                        case 10:
                            var1 = _closure2_slot7;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun67892_ip = 53;
                                continue _fun67892
                            }
                        case 25:
                            var2 = var3.play;
                            var1 = _closure2_slot3;
                            var1 = var2.bind(var3)(var1, var1);
                            _fun67892_ip = 53;
                            continue _fun67892;
                        case 43:
                            var1 = _closure2_slot10;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var7;
                var5 = _closure1_slot1;
                var4 = 7;
                var4 = var13[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.ref = var12;
                var4.source = var9;
                var9 = undefined;
                if (var11) {
                    _fun67884_ip = 656;
                    continue _fun67884
                }
            case 653:
                var9 = var10;
            case 656:
                var4.colorFilters = var9;
                var9 = true;
                var4.hardwareAccelerationAndroid = var9;
                var9 = false;
                var4.loop = var9;
                var4.onAnimationLoaded = var6;
                var6 = 'cover';
                var4.resizeMode = var6;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var7.opacity = var8;
                var6[1] = var7;
                var4.style = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/LottieIcon/native/LottieIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var2.LottieIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 671, 5369, 3126, 3112, 6564, 2]);