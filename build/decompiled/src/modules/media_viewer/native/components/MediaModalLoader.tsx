// modules/media_viewer/native/components/MediaModalLoader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var16.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var12 = var3.StyleSheet;
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.ActivityIndicator;
    var _closure1_slot6 = var3;
    var8 = 3;
    var3 = var5[var8];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var7 = var12.create;
    var3 = {};
    var13 = {};
    var19 = var12.absoluteFillObject;
    var20 = var13;
    var14 = copyDataProperties(var20, var19);
    var14 = 'flex';
    var13[var14] = var10;
    var14 = 'center';
    var15 = 'alignItems';
    var13[var15] = var14;
    var15 = 'justifyContent';
    var13[var15] = var14;
    var17 = 'rgba(0, 0, 0, 0.7)';
    var15 = 'backgroundColor';
    var13[var15] = var17;
    var3.loader = var13;
    var13 = {};
    var15 = 4;
    var15 = var5[var15];
    var15 = var16.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var13.marginTop = var15;
    var3.loaderIndicator = var13;
    var13 = {};
    var13.textAlign = var14;
    var3.loaderText = var13;
    var3 = var7.bind(var12)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var3.None = var11;
    var7 = 'None';
    var3[var11] = var7;
    var3.Loading = var10;
    var7 = 'Loading';
    var3[var10] = var7;
    var3.Loaded = var9;
    var7 = 'Loaded';
    var3[var9] = var7;
    var3.Error = var8;
    var7 = 'Error';
    var3[var8] = var7;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun76619: for (var _fun76619_ip = 0;;) switch (_fun76619_ip) {
            case 0:
                var5 = arg0;
                var7 = var5.Component;
                var8 = var5.style;
                var21 = var5.onLoadStart;
                var _closure2_slot0 = var21;
                var2 = var5.onLoad;
                var _closure2_slot1 = var2;
                var20 = var5.onError;
                var _closure2_slot2 = var20;
                var11 = var5.index;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun76619_ip = 59;
                    continue _fun76619
                }
            case 57:
                var11 = 0;
            case 59:
                var10 = var5.source;
                var3 = {
                    'Component': 0,
                    'style': 0,
                    'onLoadStart': 0,
                    'onLoad': 0,
                    'onError': 0,
                    'index': 0,
                    'source': 0
                };
                var14 = null;
                var25 = var3;
                var24 = null;
                var0 = silentSetPrototypeOf(var25, var24);
                var15 = 0;
                var25 = {};
                var24 = var5;
                var23 = var3;
                var12 = copyDataProperties(var25, var24, var23);
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var3 = _closure1_slot4;
                var9 = var3.useState;
                var0 = _closure1_slot10;
                var6 = var0.None;
                var6 = var9.bind(var3)(var6);
                var17 = _closure1_slot3;
                var16 = 2;
                var6 = var17.bind(var4)(var6, var16);
                var9 = var6[var15];
                _closure2_slot3 = var9;
                var13 = 1;
                var6 = var6[var13];
                _closure2_slot4 = var6;
                var6 = var3.useState;
                var6 = var6.bind(var3)(var15);
                var6 = var17.bind(var4)(var6, var16);
                var19 = var6[var15];
                var6 = var6[var13];
                _closure2_slot5 = var6;
                var6 = var3.useRef;
                var6 = var6.bind(var3)(var14);
                _closure2_slot6 = var6;
                var15 = var3.useCallback;
                var13 = function() { // Environment: var1
                    var1 = _closure2_slot6;
                    var0 = global;
                    var4 = var0.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot4;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            _fun76622: for (var _fun76622_ip = 0;;) switch (_fun76622_ip) {
                                case 0:
                                    var0 = _closure1_slot10;
                                    var2 = var0.None;
                                    var0 = arg0;
                                    if (!(var0 !== var2)) {
                                        _fun76622_ip = 32;
                                        continue _fun76622
                                    }
                                case 20:
                                    var0 = _closure1_slot10;
                                    var0 = var0.None;
                                    _fun76622_ip = 42;
                                    continue _fun76622;
                                case 32:
                                    var1 = _closure1_slot10;
                                    var0 = var1.Loading;
                                case 42:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = 1000;
                    var0 = var4.bind(var3)(var2, var0);
                    var1.current = var0;
                    return var0;
                };
                var6 = new Array(0);
                var17 = var15.bind(var3)(var13, var6);
                var15 = var3.useCallback;
                var13 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var3 = var0.loaded;
                    var1 = var0.total;
                    var2 = _closure2_slot5;
                    var0 = 100;
                    var0 = var0 * var3;
                    var1 = var0 / var1;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = new Array(0);
                var16 = var15.bind(var3)(var13, var6);
                var15 = var3.useCallback;
                var13 = function() { // Environment: var1
                    var2 = _closure2_slot4;
                    var0 = _closure1_slot10;
                    var1 = var0.Loaded;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = new Array(0);
                var15 = var15.bind(var3)(var13, var6);
                var18 = var3.useCallback;
                var13 = function() { // Environment: var1
                    var2 = _closure2_slot4;
                    var0 = _closure1_slot10;
                    var1 = var0.Error;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = new Array(0);
                var13 = var18.bind(var3)(var13, var6);
                var18 = var3.useEffect;
                var6 = new Array(4);
                var6[0] = var9;
                var6[1] = var21;
                var6[2] = var20;
                var6[3] = var2;
                var2 = function() { // Environment: var1
                    _fun76626: for (var _fun76626_ip = 0;;) switch (_fun76626_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var3 = _closure1_slot10;
                            var3 = var3.Loading;
                            if (!(var3 !== var2)) {
                                _fun76626_ip = 95;
                                continue _fun76626
                            }
                        case 24:
                            var3 = _closure1_slot10;
                            var3 = var3.Error;
                            if (!(var3 !== var2)) {
                                _fun76626_ip = 73;
                                continue _fun76626
                            }
                        case 37:
                            var1 = _closure1_slot10;
                            var1 = var1.Loaded;
                            if (!(var1 === var2)) {
                                _fun76626_ip = 115;
                                continue _fun76626
                            }
                        case 51:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun76626_ip = 115;
                                continue _fun76626
                            }
                        case 61:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun76626_ip = 115;
                            continue _fun76626;
                        case 73:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun76626_ip = 115;
                                continue _fun76626
                            }
                        case 83:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun76626_ip = 115;
                            continue _fun76626;
                        case 95:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun76626_ip = 115;
                                continue _fun76626
                            }
                        case 105:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 115:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var18.bind(var3)(var2, var6);
                var2 = var3.useEffect;
                var1 = function() { // Environment: var1
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure2_slot6;
                        var1 = var0.current;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = var0.Error;
                if (!(var9 !== var0)) {
                    _fun76619_ip = 831;
                    continue _fun76619
                }
            case 375:
                var2 = _closure1_slot8;
                var0 = _closure1_slot4;
                var1 = var0.Fragment;
                var0 = {};
                var6 = _closure1_slot7;
                var3 = {};
                var25 = var3;
                var24 = var12;
                var12 = copyDataProperties(var25, var24);
                var12 = 'style';
                var3[var12] = var8;
                var12 = 'source';
                var3[var12] = var10;
                var12 = 'onLoadStart';
                var3[var12] = var17;
                var12 = 'onProgress';
                var3[var12] = var16;
                var12 = 'onLoad';
                var3[var12] = var15;
                var12 = 'onError';
                var3[var12] = var13;
                var13 = 'image';
                var12 = 'accessibilityRole';
                var3[var12] = var13;
                var12 = var10.description;
                var15 = var14 != var12;
                var13 = undefined;
                if (!var15) {
                    _fun76619_ip = 491;
                    continue _fun76619
                }
            case 488:
                var13 = var12;
            case 491:
                var12 = 'accessibilityLabel';
                var3[var12] = var13;
                var13 = true;
                var12 = 'loop';
                var3[var12] = var13;
                var6 = var6.bind(var4)(var7, var3);
                var3 = new Array(3);
                var3[0] = var6;
                var6 = _closure1_slot10;
                var7 = var6.Loading;
                var6 = null;
                if (!(var9 === var7)) {
                    _fun76619_ip = 764;
                    continue _fun76619
                }
            case 544:
                var12 = _closure1_slot8;
                var9 = _closure1_slot5;
                var7 = {};
                var13 = _closure1_slot9;
                var15 = var13.loader;
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var8;
                var7.style = var13;
                var13 = var10.videoURI;
                var13 = var14 == var13;
                var14 = null;
                if (!var13) {
                    _fun76619_ip = 698;
                    continue _fun76619
                }
            case 595:
                var16 = _closure1_slot8;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 5;
                var13 = var17[var13];
                var13 = var15.bind(var4)(var13);
                var15 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'always-white'
                };
                var17 = _closure1_slot9;
                var17 = var17.loaderText;
                var13.style = var17;
                var17 = global;
                var18 = var17.Math;
                var17 = var18.round;
                var18 = var17.bind(var18)(var19);
                var17 = new Array(2);
                var17[0] = var18;
                var18 = '%';
                var17[1] = var18;
                var13.children = var17;
                var14 = var16.bind(var4)(var15, var13);
            case 698:
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot7;
                var15 = _closure1_slot6;
                var14 = {
                    'color': 'white',
                    'style': null,
                    'size': 'large'
                };
                var17 = _closure1_slot9;
                var17 = var17.loaderIndicator;
                var14.style = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var7.children = var13;
                var6 = var12.bind(var4)(var9, var7);
            case 764:
                var3[1] = var6;
                var9 = _closure1_slot7;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 7;
                var6 = var12[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6.style = var8;
                var6.index = var11;
                var6.source = var10;
                var6 = var9.bind(var4)(var7, var6);
                var3[2] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun76619_ip = 987;
                continue _fun76619;
            case 831:
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var1 = {};
                var7 = _closure1_slot9;
                var9 = var7.loader;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var8;
                var1.style = var6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 5;
                var5 = var11[var5];
                var5 = var10.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'always-white'
                };
                var7 = var7.loaderText;
                var5.style = var7;
                var7 = 6;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["+ITMYX"];
                var7 = var8.bind(var9)(var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 987:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaModalLoader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 671, 3943, 1234, 9781, 2]);