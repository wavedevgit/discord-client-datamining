// modules/profile_effects/native/ProfileEffect.tsx
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
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var7 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var7);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.View;
    var _closure1_slot5 = var7;
    var7 = var1.Dimensions;
    var _closure1_slot6 = var7;
    var1 = var1.Image;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot10 = var1;
    var1 = 6;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var9 = 'absolute';
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'top': 0,
        'bottom': 0,
        'left': 0,
        'right': 0,
        'flex': 1,
        'justifyContent': 'flex-start'
    };
    var1.profileEffects = var8;
    var8 = {};
    var8.position = var9;
    var1.effect = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot11 = var1;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Set;
            var3 = _closure2_slot0;
            var1 = var3.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.src;
                return var0;
            };
            var4 = var1.bind(var3)(var0);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var5 = var1;
            var0 = new var5[var2](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var _closure2_slot1 = var1;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var1);
        var _closure2_slot2 = var2;
        var3 = var4.useRef;
        var2 = false;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot3 = var2;
        var5 = var4.useEffect;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure2_slot2;
            var0 = _closure2_slot1;
            var2.current = var0;
            var1 = _closure2_slot3;
            var2 = var0.size;
            var0 = 0;
            var0 = var0 === var2;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var5.bind(var4)(var1, var3);
        var3 = var4.useCallback;
        var1 = function(arg0) { // Environment: var0
            _fun56877: for (var _fun56877_ip = 0;;) switch (_fun56877_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var1 = var1.current;
                    if (var1) {
                        _fun56877_ip = 65;
                        continue _fun56877
                    }
                case 15:
                    var1 = _closure2_slot2;
                    var4 = var1.current;
                    var3 = var4.delete;
                    var2 = arg0;
                    var2 = var3.bind(var4)(var2);
                    var1 = var1.current;
                    var2 = var1.size;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun56877_ip = 65;
                        continue _fun56877
                    }
                case 53:
                    var1 = _closure2_slot3;
                    var0 = true;
                    var1.current = var0;
                case 65:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = new Array(0);
        var1 = var3.bind(var4)(var1, var0);
        var0 = {};
        var0.loaded = var2;
        var0.onLayerLoaded = var1;
        return var0;
    };
    var _closure1_slot12 = var1;
    var4 = function() {
        var5 = _closure1_slot4;
        var3 = var5.useState;
        var2 = 0;
        var7 = var3.bind(var5)(var2);
        var6 = _closure1_slot3;
        var4 = undefined;
        var3 = 2;
        var4 = var6.bind(var4)(var7, var3);
        var2 = var4[var2];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var3 = var4.get;
        var1 = 'window';
        var1 = var3.bind(var4)(var1);
        var3 = var1.height;
        var4 = var5.useCallback;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var2 = var0.width;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = new Array(0);
        var1 = var4.bind(var5)(var1, var0);
        var0 = {};
        var0.height = var3;
        var0.width = var2;
        var0.onLayout = var1;
        return var0;
    };
    var _closure1_slot13 = var4;
    var4 = function arg0() {
        _fun56880: for (var _fun56880_ip = 0;;) switch (_fun56880_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.profileEffectConfig;
                var _closure2_slot0 = var1;
                var14 = var0.replayOnNavigationFocus;
                var3 = undefined;
                if (!(var14 === var3)) {
                    _fun56880_ip = 29;
                    continue _fun56880
                }
            case 27:
                var14 = false;
            case 29:
                var _closure2_slot1 = var14;
                var8 = var0.style;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var2 = _closure1_slot11;
                var7 = var2.bind(var3)();
                var2 = _closure1_slot13;
                var2 = var2.bind(var3)();
                var5 = var2.width;
                _closure2_slot2 = var5;
                var5 = var2.onLayout;
                var2 = var1.accessibilityLabel;
                _closure2_slot3 = var2;
                var12 = _closure1_slot4;
                var6 = var12.useMemo;
                var1 = var1.effects;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.sortEffectLayers;
                    var0 = _closure2_slot0;
                    var0 = var0.effects;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var12)(var1, var2);
                var1 = _closure1_slot12;
                var2 = var1.bind(var3)(var6);
                var1 = var2.loaded;
                _closure2_slot4 = var1;
                var2 = var2.onLayerLoaded;
                _closure2_slot5 = var2;
                var11 = var12.useState;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 8;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.PROFILE_EFFECT_INTRO_DELAY;
                var2 = -var2;
                var13 = var11.bind(var12)(var2);
                var11 = _closure1_slot3;
                var2 = 2;
                var11 = var11.bind(var3)(var13, var2);
                var2 = 0;
                var2 = var11[var2];
                _closure2_slot6 = var2;
                var2 = 1;
                var2 = var11[var2];
                _closure2_slot7 = var2;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var10[var2];
                var2 = var11.bind(var3)(var2);
                var13 = var12.useCallback;
                var11 = new Array(1);
                var11[0] = var1;
                var1 = function(arg0) { // Environment: var4
                    _fun56882: for (var _fun56882_ip = 0;;) switch (_fun56882_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            if (!var2) {
                                _fun56882_ip = 40;
                                continue _fun56882
                            }
                        case 24:
                            var2 = _closure2_slot7;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var0 + var1;
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var13.bind(var12)(var1, var11);
                var1 = var2.bind(var3)(var1);
                var13 = var1.stop;
                _closure2_slot8 = var13;
                var1 = var1.reset;
                _closure2_slot9 = var1;
                var2 = 10;
                var2 = var10[var2];
                var16 = var9.bind(var3)(var2);
                var15 = var16.useStateFromStores;
                var2 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var2;
                var2 = function() { // Environment: var4
                    var1 = _closure1_slot9;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var15.bind(var16)(var11, var2);
                _closure2_slot10 = var2;
                var15 = var12.useRef;
                var11 = null;
                var11 = var15.bind(var12)(var11);
                _closure2_slot11 = var11;
                var15 = var12.useEffect;
                var11 = new Array(3);
                var11[0] = var2;
                var11[1] = var13;
                var11[2] = var1;
                var2 = function() { // Environment: var4
                    _fun56885: for (var _fun56885_ip = 0;;) switch (_fun56885_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 === var2)) {
                                _fun56885_ip = 34;
                                continue _fun56885
                            }
                        case 18:
                            var2 = _closure2_slot11;
                            var1 = _closure2_slot10;
                            var2.current = var1;
                            _fun56885_ip = 128;
                            continue _fun56885;
                        case 34:
                            var1 = _closure2_slot11;
                            var2 = var1.current;
                            var1 = _closure2_slot10;
                            if (!(var2 !== var1)) {
                                _fun56885_ip = 128;
                                continue _fun56885
                            }
                        case 51:
                            var3 = _closure2_slot10;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = var1.AppStates;
                            var1 = var1.ACTIVE;
                            if (!(var3 !== var1)) {
                                _fun56885_ip = 106;
                                continue _fun56885
                            }
                        case 96:
                            var1 = _closure2_slot8;
                            var1 = var1.bind(var2)();
                            _fun56885_ip = 114;
                            continue _fun56885;
                        case 106:
                            var1 = _closure2_slot9;
                            var1 = var1.bind(var2)();
                        case 114:
                            var1 = _closure2_slot11;
                            var0 = _closure2_slot10;
                            var1.current = var0;
                        case 128:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var15.bind(var12)(var2, var11);
                var2 = 12;
                var2 = var10[var2];
                var9 = var9.bind(var3)(var2);
                var2 = var9.useFocusEffect;
                var11 = var12.useCallback;
                var10 = new Array(3);
                var10[0] = var14;
                var10[1] = var13;
                var10[2] = var1;
                var1 = function() { // Environment: var4
                    _fun56886: for (var _fun56886_ip = 0;;) switch (_fun56886_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun56886_ip = 61;
                                continue _fun56886
                            }
                        case 10:
                            var3 = _closure2_slot7;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.PROFILE_EFFECT_INTRO_DELAY;
                            var2 = -var2;
                            var2 = var3.bind(var1)(var2);
                            var0 = _closure2_slot9;
                            var0 = var0.bind(var1)();
                        case 61:
                            var0 = function() { // Environment: var0
                                var1 = _closure2_slot8;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var11.bind(var12)(var1, var10);
                var1 = var2.bind(var9)(var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var9 = var7.profileEffects;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var0.style = var7;
                var7 = 'none';
                var0.pointerEvents = var7;
                var0.onLayout = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var7 = arg0;
                    var1 = var7.src;
                    var0 = arg1;
                    var4 = var1 + var0;
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 13;
                    var1 = var8[var1];
                    var3 = undefined;
                    var6 = var2.bind(var3)(var1);
                    var2 = var6.shouldAnimate;
                    var1 = _closure2_slot6;
                    var6 = var2.bind(var6)(var7, var1);
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var0 = 14;
                    var0 = var8[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = {};
                    var0.layerConfig = var7;
                    var0.animate = var6;
                    var6 = _closure2_slot2;
                    var0.width = var6;
                    var6 = _closure2_slot3;
                    var0.accessibilityLabel = var6;
                    var6 = _closure2_slot5;
                    var0.onLoad = var6;
                    var5 = _closure2_slot4;
                    var5 = var5.current;
                    var0.loaded = var5;
                    var0 = var2.bind(var3)(var1, var0, var4);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function arg0() {
        _fun56889: for (var _fun56889_ip = 0;;) switch (_fun56889_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.config;
                var12 = var1.bannerAdjustment;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun56889_ip = 24;
                    continue _fun56889
                }
            case 22:
                var12 = 0;
            case 24:
                var17 = var1.useThumbnail;
                var _closure2_slot0 = var17;
                var1 = var1.thumbnailUrlOverride;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var5 = _closure1_slot11;
                var6 = var5.bind(var3)();
                var15 = var2.reducedMotionSrc;
                _closure2_slot1 = var15;
                var16 = var2.thumbnailPreviewSrc;
                var9 = var2.accessibilityLabel;
                var2 = _closure1_slot13;
                var2 = var2.bind(var3)();
                var14 = var2.width;
                _closure2_slot2 = var14;
                var5 = var2.onLayout;
                var7 = _closure1_slot4;
                var2 = var7.useState;
                var11 = 0;
                var8 = var2.bind(var7)(var11);
                var7 = _closure1_slot3;
                var2 = 2;
                var7 = var7.bind(var3)(var8, var2);
                var13 = var7[var11];
                var2 = 1;
                var2 = var7[var2];
                _closure2_slot3 = var2;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun56889_ip = 164;
                    continue _fun56889
                }
            case 161:
                var16 = var1;
            case 164:
                _closure2_slot4 = var16;
                var7 = _closure1_slot4;
                var2 = var7.useEffect;
                var1 = new Array(4);
                var1[0] = var15;
                var1[1] = var16;
                var1[2] = var14;
                var1[3] = var17;
                var0 = function() { // Environment: var0
                    _fun56890: for (var _fun56890_ip = 0;;) switch (_fun56890_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = 0;
                            if (!(var2 !== var3)) {
                                _fun56890_ip = 62;
                                continue _fun56890
                            }
                        case 15:
                            var4 = _closure1_slot7;
                            var3 = var4.getSize;
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun56890_ip = 41;
                                continue _fun56890
                            }
                        case 35:
                            var2 = _closure2_slot1;
                            _fun56890_ip = 45;
                            continue _fun56890;
                        case 41:
                            var2 = _closure2_slot4;
                        case 45:
                            var1 = function(arg0, arg1) { // Environment: var0
                                var2 = _closure2_slot3;
                                var1 = _closure2_slot2;
                                var0 = arg0;
                                var1 = var1 / var0;
                                var0 = arg1;
                                var1 = var0 * var1;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot3;
                                var3 = _closure2_slot2;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.DEFAULT_PROFILE_EFFECT_WH_RATIO;
                                var1 = var3 / var1;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                if (!(var11 !== var13)) {
                    _fun56889_ip = 368;
                    continue _fun56889
                }
            case 223:
                var0 = {};
                var7 = var6.profileEffects;
                var0.style = var7;
                var7 = 'none';
                var0.pointerEvents = var7;
                var0.onLayout = var5;
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 16;
                var4 = var10[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {
                    'resizeMode': 'cover',
                    'resizeMethod': 'resize',
                    'enableAnimation': true
                };
                var10 = {};
                if (!var17) {
                    _fun56889_ip = 295;
                    continue _fun56889
                }
            case 292:
                var15 = var16;
            case 295:
                var10.uri = var15;
                var4.source = var10;
                var4.alt = var9;
                var4.height = var13;
                var4.width = var14;
                var10 = var6.effect;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var10.width = var14;
                var10.height = var13;
                var11 = var11 - var12;
                var10.top = var11;
                var9[1] = var10;
                var4.style = var9;
                var4 = var8.bind(var3)(var7, var4);
                var0.children = var4;
                _fun56889_ip = 397;
                continue _fun56889;
            case 368:
                var4 = {};
                var6 = var6.profileEffects;
                var4.style = var6;
                var6 = 'none';
                var4.pointerEvents = var6;
                var4.onLayout = var5;
                var0 = var4;
            case 397:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/native/ProfileEffect.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun56893: for (var _fun56893_ip = 0;;) switch (_fun56893_ip) {
            case 0:
                var6 = arg0;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 17;
                var0 = var3[var0];
                var5 = undefined;
                var3 = var1.bind(var5)(var0);
                var1 = var3.useProfileEffectPreset;
                var0 = var6.skuId;
                var1 = var1.bind(var3)(var0);
                var0 = null;
                var3 = var0 == var1;
                var7 = undefined;
                if (var3) {
                    _fun56893_ip = 61;
                    continue _fun56893
                }
            case 56:
                var7 = var1.config;
            case 61:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var10 = var4.bind(var5)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var1
                    var0 = _closure1_slot8;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var1 = var9.bind(var10)(var3, var1);
                var3 = 7;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.usePotentiallyRandomizedConfig;
                var7 = var3.bind(var4)(var7);
                var3 = var0 == var7;
                var0 = null;
                if (var3) {
                    _fun56893_ip = 244;
                    continue _fun56893
                }
            case 143:
                if (var1) {
                    _fun56893_ip = 188;
                    continue _fun56893
                }
            case 146:
                var1 = var6.useThumbnail;
                if (var1) {
                    _fun56893_ip = 188;
                    continue _fun56893
                }
            case 155:
                var4 = _closure1_slot10;
                var3 = _closure1_slot14;
                var1 = {};
                var1.profileEffectConfig = var7;
                var12 = var1;
                var11 = var6;
                var8 = copyDataProperties(var12, var11);
                var1 = var4.bind(var5)(var3, var1);
                _fun56893_ip = 241;
                continue _fun56893;
            case 188:
                var4 = _closure1_slot10;
                var3 = _closure1_slot15;
                var2 = {};
                var2.config = var7;
                var7 = var6.bannerAdjustment;
                var2.bannerAdjustment = var7;
                var7 = var6.useThumbnail;
                var2.useThumbnail = var7;
                var6 = var6.thumbnailUrlOverride;
                var2.thumbnailUrlOverride = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 241:
                var0 = var1;
            case 244:
                return var0;
        }
    };
    var2.default = var3;
    var2.usePreloadProfileEffect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 5284, 33, 1297, 6907, 6908, 6909, 566, 670, 1470, 6910, 6912, 6911, 4704, 6914, 2]);