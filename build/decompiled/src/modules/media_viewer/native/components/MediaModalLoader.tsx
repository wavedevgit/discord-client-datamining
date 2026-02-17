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
    var14 = var3.StyleSheet;
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
    var3 = 4;
    var3 = var5[var3];
    var12 = var4.bind(var0)(var3);
    var7 = var12.createStyles;
    var3 = {};
    var13 = {};
    var19 = var14.absoluteFillObject;
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
    var15 = 5;
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
        _fun76811: for (var _fun76811_ip = 0;;) switch (_fun76811_ip) {
            case 0:
                var5 = arg0;
                var9 = var5.Component;
                var8 = var5.style;
                var22 = var5.onLoadStart;
                var _closure2_slot0 = var22;
                var2 = var5.onLoad;
                var _closure2_slot1 = var2;
                var21 = var5.onError;
                var _closure2_slot2 = var21;
                var12 = var5.index;
                var4 = undefined;
                if (!(var12 === var4)) {
                    _fun76811_ip = 59;
                    continue _fun76811
                }
            case 57:
                var12 = 0;
            case 59:
                var11 = var5.source;
                var3 = {
                    'Component': 0,
                    'style': 0,
                    'onLoadStart': 0,
                    'onLoad': 0,
                    'onError': 0,
                    'index': 0,
                    'source': 0
                };
                var15 = null;
                var26 = var3;
                var25 = null;
                var0 = silentSetPrototypeOf(var26, var25);
                var16 = 0;
                var26 = {};
                var25 = var5;
                var24 = var3;
                var13 = copyDataProperties(var26, var25, var24);
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var0 = _closure1_slot9;
                var7 = var0.bind(var4)();
                var3 = _closure1_slot4;
                var10 = var3.useState;
                var0 = _closure1_slot10;
                var6 = var0.None;
                var6 = var10.bind(var3)(var6);
                var18 = _closure1_slot3;
                var17 = 2;
                var6 = var18.bind(var4)(var6, var17);
                var10 = var6[var16];
                _closure2_slot3 = var10;
                var14 = 1;
                var6 = var6[var14];
                _closure2_slot4 = var6;
                var6 = var3.useState;
                var6 = var6.bind(var3)(var16);
                var6 = var18.bind(var4)(var6, var17);
                var20 = var6[var16];
                var6 = var6[var14];
                _closure2_slot5 = var6;
                var6 = var3.useRef;
                var6 = var6.bind(var3)(var15);
                _closure2_slot6 = var6;
                var16 = var3.useCallback;
                var14 = function() { // Environment: var1
                    var1 = _closure2_slot6;
                    var0 = global;
                    var4 = var0.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot4;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            _fun76814: for (var _fun76814_ip = 0;;) switch (_fun76814_ip) {
                                case 0:
                                    var0 = _closure1_slot10;
                                    var2 = var0.None;
                                    var0 = arg0;
                                    if (!(var0 !== var2)) {
                                        _fun76814_ip = 32;
                                        continue _fun76814
                                    }
                                case 20:
                                    var0 = _closure1_slot10;
                                    var0 = var0.None;
                                    _fun76814_ip = 42;
                                    continue _fun76814;
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
                var18 = var16.bind(var3)(var14, var6);
                var16 = var3.useCallback;
                var14 = function(arg0) { // Environment: var1
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
                var17 = var16.bind(var3)(var14, var6);
                var16 = var3.useCallback;
                var14 = function() { // Environment: var1
                    var2 = _closure2_slot4;
                    var0 = _closure1_slot10;
                    var1 = var0.Loaded;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = new Array(0);
                var16 = var16.bind(var3)(var14, var6);
                var19 = var3.useCallback;
                var14 = function() { // Environment: var1
                    var2 = _closure2_slot4;
                    var0 = _closure1_slot10;
                    var1 = var0.Error;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = new Array(0);
                var14 = var19.bind(var3)(var14, var6);
                var19 = var3.useEffect;
                var6 = new Array(4);
                var6[0] = var10;
                var6[1] = var22;
                var6[2] = var21;
                var6[3] = var2;
                var2 = function() { // Environment: var1
                    _fun76818: for (var _fun76818_ip = 0;;) switch (_fun76818_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var3 = _closure1_slot10;
                            var3 = var3.Loading;
                            if (!(var3 !== var2)) {
                                _fun76818_ip = 95;
                                continue _fun76818
                            }
                        case 24:
                            var3 = _closure1_slot10;
                            var3 = var3.Error;
                            if (!(var3 !== var2)) {
                                _fun76818_ip = 73;
                                continue _fun76818
                            }
                        case 37:
                            var1 = _closure1_slot10;
                            var1 = var1.Loaded;
                            if (!(var1 === var2)) {
                                _fun76818_ip = 115;
                                continue _fun76818
                            }
                        case 51:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun76818_ip = 115;
                                continue _fun76818
                            }
                        case 61:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun76818_ip = 115;
                            continue _fun76818;
                        case 73:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun76818_ip = 115;
                                continue _fun76818
                            }
                        case 83:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun76818_ip = 115;
                            continue _fun76818;
                        case 95:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun76818_ip = 115;
                                continue _fun76818
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
                var2 = var19.bind(var3)(var2, var6);
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
                if (!(var10 !== var0)) {
                    _fun76811_ip = 827;
                    continue _fun76811
                }
            case 383:
                var2 = _closure1_slot8;
                var0 = _closure1_slot4;
                var1 = var0.Fragment;
                var0 = {};
                var6 = _closure1_slot7;
                var3 = {};
                var26 = var3;
                var25 = var13;
                var13 = copyDataProperties(var26, var25);
                var13 = 'style';
                var3[var13] = var8;
                var13 = 'source';
                var3[var13] = var11;
                var13 = 'onLoadStart';
                var3[var13] = var18;
                var13 = 'onProgress';
                var3[var13] = var17;
                var13 = 'onLoad';
                var3[var13] = var16;
                var13 = 'onError';
                var3[var13] = var14;
                var14 = 'image';
                var13 = 'accessibilityRole';
                var3[var13] = var14;
                var13 = var11.description;
                var16 = var15 != var13;
                var14 = undefined;
                if (!var16) {
                    _fun76811_ip = 499;
                    continue _fun76811
                }
            case 496:
                var14 = var13;
            case 499:
                var13 = 'accessibilityLabel';
                var3[var13] = var14;
                var14 = true;
                var13 = 'loop';
                var3[var13] = var14;
                var6 = var6.bind(var4)(var9, var3);
                var3 = new Array(3);
                var3[0] = var6;
                var6 = _closure1_slot10;
                var9 = var6.Loading;
                var6 = null;
                if (!(var10 === var9)) {
                    _fun76811_ip = 760;
                    continue _fun76811
                }
            case 552:
                var13 = _closure1_slot8;
                var10 = _closure1_slot5;
                var9 = {};
                var16 = var7.loader;
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var8;
                var9.style = var14;
                var14 = var11.videoURI;
                var14 = var15 == var14;
                var15 = null;
                if (!var14) {
                    _fun76811_ip = 698;
                    continue _fun76811
                }
            case 599:
                var17 = _closure1_slot8;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 6;
                var14 = var18[var14];
                var14 = var16.bind(var4)(var14);
                var16 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'always-white'
                };
                var18 = var7.loaderText;
                var14.style = var18;
                var18 = global;
                var19 = var18.Math;
                var18 = var19.round;
                var19 = var18.bind(var19)(var20);
                var18 = new Array(2);
                var18[0] = var19;
                var19 = '%';
                var18[1] = var19;
                var14.children = var18;
                var15 = var17.bind(var4)(var16, var14);
            case 698:
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot7;
                var16 = _closure1_slot6;
                var15 = {
                    'color': 'white',
                    'style': null,
                    'size': 'large'
                };
                var18 = var7.loaderIndicator;
                var15.style = var18;
                var15 = var17.bind(var4)(var16, var15);
                var14[1] = var15;
                var9.children = var14;
                var6 = var13.bind(var4)(var10, var9);
            case 760:
                var3[1] = var6;
                var10 = _closure1_slot7;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 8;
                var6 = var13[var6];
                var9 = var9.bind(var4)(var6);
                var6 = {};
                var6.style = var8;
                var6.index = var12;
                var6.source = var11;
                var6 = var10.bind(var4)(var9, var6);
                var3[2] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun76811_ip = 979;
                continue _fun76811;
            case 827:
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var1 = {};
                var9 = var7.loader;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var8;
                var1.style = var6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 6;
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
                var7 = 7;
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
            case 979:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaModalLoader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 3940, 1235, 9758, 2]);