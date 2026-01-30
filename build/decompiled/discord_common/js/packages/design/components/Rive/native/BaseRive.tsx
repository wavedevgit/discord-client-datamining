// ../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ensureImageSource, environment: var1
        _fun27293: for (var _fun27293_ip = 0;;) switch (_fun27293_ip) {
            case 0:
                var3 = arg0;
                var1 = 'number';
                var0 = typeof var3;
                if (!(var1 !== var0)) {
                    _fun27293_ip = 38;
                    continue _fun27293
                }
            case 14:
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var3);
                var0 = var3;
                if (!var1) {
                    _fun27293_ip = 61;
                    continue _fun27293
                }
            case 38:
                var2 = _closure1_slot8;
                var1 = var2.resolveAssetSource;
                var1 = var1.bind(var2)(var3);
                var0 = var1.uri;
            case 61:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var6 = var3.findNodeHandle;
    var _closure1_slot7 = var6;
    var7 = var3.StyleSheet;
    var6 = var3.Image;
    var _closure1_slot8 = var6;
    var3 = var3.Platform;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var8.flexGrow = var10;
    var3.container = var8;
    var8 = {};
    var8.opacity = var9;
    var3.hidden = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 5;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PropertyType;
    var7 = var7.String;
    var3.string = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PropertyType;
    var7 = var7.Color;
    var3.color = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PropertyType;
    var7 = var7.Number;
    var3.number = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PropertyType;
    var7 = var7.Boolean;
    var3.boolean = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PropertyType;
    var7 = var7.Trigger;
    var3.trigger = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PropertyType;
    var7 = var7.Image;
    var3.image = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.PropertyType;
    var6 = var6.Artboard;
    var3.artboard = var6;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: BaseRive, environment: var1
        _fun27294: for (var _fun27294_ip = 0;;) switch (_fun27294_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.src;
                var8 = var1.resourceName;
                var16 = var1.style;
                var13 = var1.artboard;
                var4 = var1.artboardProperties;
                var19 = var1.dataBinding;
                var10 = var1.defaultViewModelInstance;
                var12 = var1.referencedAssets;
                var2 = var1.onDataBindingChange;
                var18 = var1.stateMachine;
                var1 = function() { // Original name: useDefaultRenderer, environment: var0
                    _fun27295: for (var _fun27295_ip = 0;;) switch (_fun27295_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 7;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.useManaContext;
                            var3 = var3.bind(var4)();
                            var4 = var3.experiments;
                            var3 = null;
                            var6 = var3 == var4;
                            var5 = undefined;
                            if (var6) {
                                _fun27295_ip = 85;
                                continue _fun27295
                            }
                        case 54:
                            var6 = var4.enabledExperiments;
                            var3 = var3 == var6;
                            var5 = undefined;
                            if (var3) {
                                _fun27295_ip = 85;
                                continue _fun27295
                            }
                        case 69:
                            var4 = var6.includes;
                            var3 = 'rive-mobile-renderer';
                            var5 = var4.bind(var6)(var3);
                        case 85:
                            var _closure3_slot0 = var5;
                            var4 = _closure1_slot5;
                            var3 = var4.useEffect;
                            var2 = new Array(1);
                            var2[0] = var5;
                            var1 = function() { // Environment: var1
                                _fun27296: for (var _fun27296_ip = 0;;) switch (_fun27296_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var7 = 5;
                                        var1 = var0[var7];
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        var4 = var1.RiveRenderer;
                                        var3 = var4.defaultRenderer;
                                        var2 = _closure3_slot0;
                                        var8 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var6 = var6[var7];
                                        var6 = var8.bind(var0)(var6);
                                        var6 = var6.RiveRendererIOS;
                                        if (var2) {
                                            _fun27296_ip = 80;
                                            continue _fun27296
                                        }
                                    case 72:
                                        var2 = var6.CoreGraphics;
                                        _fun27296_ip = 86;
                                        continue _fun27296;
                                    case 80:
                                        var2 = var6.Rive;
                                    case 86:
                                        var1 = _closure3_slot0;
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var5 = var5[var7];
                                        var5 = var6.bind(var0)(var5);
                                        var5 = var5.RiveRendererAndroid;
                                        if (var1) {
                                            _fun27296_ip = 124;
                                            continue _fun27296
                                        }
                                    case 116:
                                        var1 = var5.Canvas;
                                        _fun27296_ip = 130;
                                        continue _fun27296;
                                    case 124:
                                        var1 = var5.Rive;
                                    case 130:
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var3 = undefined;
                var1 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = 5;
                var1 = var1[var11];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useRive;
                var7 = var1.bind(var5)();
                var5 = _closure1_slot4;
                var1 = 2;
                var5 = var5.bind(var3)(var7, var1);
                var1 = 0;
                var15 = var5[var1];
                var1 = 1;
                var1 = var5[var1];
                var7 = _closure1_slot5;
                var5 = var7.useRef;
                var7 = var5.bind(var7)(var10);
                var5 = function(arg0, arg1, arg2, arg3) { // Original name: useDataBinding, environment: var0
                    _fun27297: for (var _fun27297_ip = 0;;) switch (_fun27297_ip) {
                        case 0:
                            var13 = arg0;
                            var12 = arg1;
                            var11 = arg2;
                            var10 = arg3;
                            var _closure3_slot0 = var13;
                            var _closure3_slot1 = var12;
                            var _closure3_slot2 = var11;
                            var _closure3_slot3 = var10;
                            var8 = _closure1_slot5;
                            var2 = var8.useState;
                            var1 = 0;
                            var6 = var2.bind(var8)(var1);
                            var4 = _closure1_slot4;
                            var5 = undefined;
                            var2 = 2;
                            var2 = var4.bind(var5)(var6, var2);
                            var14 = var2[var1];
                            var1 = 1;
                            var1 = var2[var1];
                            var _closure3_slot4 = var1;
                            var4 = var8.useCallback;
                            var2 = function() { // Environment: var0
                                var2 = _closure3_slot4;
                                var0 = undefined;
                                var1 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var0 = 1;
                                    var0 = var1 + var0;
                                    return var0;
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = new Array(0);
                            var2 = var4.bind(var8)(var2, var1);
                            var4 = var8.useContext;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 6;
                            var1 = var7[var1];
                            var1 = var6.bind(var5)(var1);
                            var1 = var1.AccessibilityPreferencesContext;
                            var1 = var4.bind(var8)(var1);
                            var1 = var1.reducedMotion;
                            var9 = var1.enabled;
                            var _closure3_slot5 = var9;
                            var4 = {};
                            var4.dataBinding = var10;
                            var4.riveRef = var13;
                            var1 = function(arg0) { // Original name: useIsReadyToDisplay, environment: var0
                                var2 = arg0;
                                var1 = var2.dataBinding;
                                var _closure4_slot0 = var1;
                                var3 = var2.riveRef;
                                var4 = _closure1_slot5;
                                var6 = var4.useMemo;
                                var5 = new Array(1);
                                var5[0] = var1;
                                var1 = function() { // Environment: var0
                                    _fun27301: for (var _fun27301_ip = 0;;) switch (_fun27301_ip) {
                                        case 0:
                                            var0 = global;
                                            var2 = var0.Object;
                                            var1 = var2.keys;
                                            var4 = _closure4_slot0;
                                            var0 = null;
                                            if (!(var0 == var4)) {
                                                _fun27301_ip = 30;
                                                continue _fun27301
                                            }
                                        case 26:
                                            var0 = {};
                                            _fun27301_ip = 34;
                                            continue _fun27301;
                                        case 30:
                                            var0 = _closure4_slot0;
                                        case 34:
                                            var0 = var1.bind(var2)(var0);
                                            var1 = var0.length;
                                            var0 = 0;
                                            var0 = var1 > var0;
                                            return var0;
                                    }
                                };
                                var7 = var6.bind(var4)(var1, var5);
                                var _closure4_slot1 = var7;
                                var5 = var4.useState;
                                var1 = !var7;
                                var1 = var5.bind(var4)(var1);
                                var10 = _closure1_slot4;
                                var9 = undefined;
                                var8 = 2;
                                var5 = var10.bind(var9)(var1, var8);
                                var1 = 0;
                                var2 = var5[var1];
                                var6 = 1;
                                var5 = var5[var6];
                                var _closure4_slot2 = var5;
                                var11 = var4.useState;
                                var5 = false;
                                var5 = var11.bind(var4)(var5);
                                var5 = var10.bind(var9)(var5, var8);
                                var1 = var5[var1];
                                var _closure4_slot3 = var1;
                                var5 = var5[var6];
                                var _closure4_slot4 = var5;
                                var6 = var4.useEffect;
                                var5 = new Array(2);
                                var5[0] = var7;
                                var5[1] = var1;
                                var1 = function() { // Environment: var0
                                    _fun27302: for (var _fun27302_ip = 0;;) switch (_fun27302_ip) {
                                        case 0:
                                            var2 = _closure4_slot2;
                                            var1 = _closure4_slot1;
                                            var1 = !var1;
                                            if (var1) {
                                                _fun27302_ip = 21;
                                                continue _fun27302
                                            }
                                        case 17:
                                            var1 = _closure4_slot3;
                                        case 21:
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                    }
                                };
                                var1 = var6.bind(var4)(var1, var5);
                                var1 = null;
                                var1 = var1 != var3;
                                var _closure4_slot5 = var1;
                                var5 = var4.useEffect;
                                var3 = new Array(1);
                                var3[0] = var1;
                                var1 = function() { // Environment: var0
                                    _fun27303: for (var _fun27303_ip = 0;;) switch (_fun27303_ip) {
                                        case 0:
                                            var1 = _closure4_slot5;
                                            var4 = undefined;
                                            if (var1) {
                                                _fun27303_ip = 16;
                                                continue _fun27303
                                            }
                                        case 14:
                                            return var4;
                                        case 16:
                                            var1 = global;
                                            var3 = var1.setTimeout;
                                            var2 = function() { // Environment: var0
                                                var2 = _closure4_slot2;
                                                var0 = undefined;
                                                var1 = true;
                                                var1 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            var1 = 50;
                                            var1 = var3.bind(var4)(var2, var1);
                                            var _closure5_slot0 = var1;
                                            var0 = function() { // Environment: var0
                                                var0 = global;
                                                var2 = var0.clearTimeout;
                                                var1 = _closure5_slot0;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            return var0;
                                    }
                                };
                                var1 = var5.bind(var4)(var1, var3);
                                var3 = var4.useCallback;
                                var1 = function() { // Environment: var0
                                    var2 = _closure4_slot4;
                                    var0 = undefined;
                                    var1 = true;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0 = new Array(0);
                                var1 = var3.bind(var4)(var1, var0);
                                var0 = {};
                                var0.isReadyToDisplay = var2;
                                var0.onDataBindingChange = var1;
                                return var0;
                            };
                            var4 = var1.bind(var5)(var4);
                            var1 = var4.isReadyToDisplay;
                            var8 = var4.onDataBindingChange;
                            var _closure3_slot6 = var8;
                            var4 = 7;
                            var4 = var7[var4];
                            var6 = var6.bind(var5)(var4);
                            var4 = var6.useManaContext;
                            var4 = var4.bind(var6)();
                            var15 = var4.experiments;
                            var4 = function() { // Original name: useRiveImageLoading, environment: var0
                                var3 = _closure1_slot5;
                                var2 = var3.useRef;
                                var1 = {};
                                var1 = var2.bind(var3)(var1);
                                var _closure4_slot0 = var1;
                                var2 = var3.useCallback;
                                var1 = function() { // Environment: var0
                                    var3 = _closure1_slot3;
                                    var2 = undefined;
                                    var1 = function*(arg0) { // Environment: var0
                                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                            _fun27310: for (var _fun27310_ip = 0;;) switch (_fun27310_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    var4 = arg0;
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun27310_ip = 283;
                                                        continue _fun27310
                                                    }
                                                case 13:
                                                    var2 = 'string';
                                                    var1 = typeof var4;
                                                    if (!(var2 !== var1)) {
                                                        _fun27310_ip = 46;
                                                        continue _fun27310
                                                    }
                                                case 24:
                                                    var1 = global;
                                                    var2 = var1.Promise;
                                                    var1 = var2.resolve;
                                                    var1 = var1.bind(var2)(var4);
                                                    return var1;
                                                case 46:
                                                    var2 = _closure4_slot0;
                                                    var2 = var2.current;
                                                    var2 = var2[var4];
                                                    var6 = null;
                                                    if (!(var6 == var2)) {
                                                        _fun27310_ip = 248;
                                                        continue _fun27310
                                                    }
                                                case 71:
                                                    var3 = global;
                                                    var5 = var3.fetch;
                                                    var2 = undefined;
                                                    var7 = var5.bind(var2)(var4);
                                                    var5 = var7.catch;
                                                    var2 = function() { // Environment: var2
                                                        var0 = null;
                                                        return var0;
                                                    };
                                                    var2 = var5.bind(var7)(var2);
                                                    SaveGenerator(address = 108);
                                                case 106:
                                                    return var2;
                                                case 108:
                                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                                    if (var5) {
                                                        _fun27310_ip = 245;
                                                        continue _fun27310
                                                    }
                                                case 117:
                                                    if (!(var6 != var2)) {
                                                        _fun27310_ip = 225;
                                                        continue _fun27310
                                                    }
                                                case 121:
                                                    var5 = var2.ok;
                                                    if (!var5) {
                                                        _fun27310_ip = 225;
                                                        continue _fun27310
                                                    }
                                                case 130:
                                                    var5 = var2.arrayBuffer;
                                                    var5 = var5.bind(var2)();
                                                    SaveGenerator(address = 144);
                                                case 142:
                                                    return var5;
                                                case 144:
                                                    ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                                                    if (var7) {
                                                        _fun27310_ip = 222;
                                                        continue _fun27310
                                                    }
                                                case 150:
                                                    var8 = var3.Buffer;
                                                    var7 = var8.from;
                                                    var9 = var7.bind(var8)(var5);
                                                    var8 = var9.toString;
                                                    var7 = 'base64';
                                                    var9 = var8.bind(var9)(var7);
                                                    var7 = _closure4_slot0;
                                                    var8 = var7.current;
                                                    var8[var4] = var9;
                                                    var9 = var3.Promise;
                                                    var8 = var9.resolve;
                                                    var7 = var7.current;
                                                    var7 = var7[var4];
                                                    var7 = var8.bind(var9)(var7);
                                                    return var7;
                                                case 222:
                                                    return var5;
                                                case 225:
                                                    var5 = var3.Promise;
                                                    var3 = var5.resolve;
                                                    var3 = var3.bind(var5)(var6);
                                                    return var3;
                                                case 245:
                                                    return var2;
                                                case 248:
                                                    var2 = global;
                                                    var3 = var2.Promise;
                                                    var2 = var3.resolve;
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.current;
                                                    var1 = var1[var4];
                                                    var1 = var2.bind(var3)(var1);
                                                    return var1;
                                                case 283:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var1 = var3.bind(var2)(var1);
                                    var _closure5_slot0 = var1;
                                    var0 = function() { // Environment: var0
                                        var0 = undefined;
                                        var3 = _closure5_slot0;
                                        var2 = var3.apply;
                                        var0 = arguments;
                                        var1 = var0;
                                        var0 = this;
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var0 = new Array(0);
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var7 = var4.bind(var5)();
                            var _closure3_slot7 = var7;
                            var4 = null;
                            var16 = var4 == var15;
                            var6 = undefined;
                            if (var16) {
                                _fun27297_ip = 272;
                                continue _fun27297
                            }
                        case 241:
                            var15 = var15.enabledExperiments;
                            var4 = var4 == var15;
                            var6 = undefined;
                            if (var4) {
                                _fun27297_ip = 272;
                                continue _fun27297
                            }
                        case 256:
                            var5 = var15.includes;
                            var4 = 'rive-mobile-base64-image';
                            var6 = var5.bind(var15)(var4);
                        case 272:
                            var _closure3_slot8 = var6;
                            var5 = _closure1_slot5;
                            var4 = var5.useRef;
                            var3 = {};
                            var3 = var4.bind(var5)(var3);
                            var _closure3_slot9 = var3;
                            var4 = var5.useEffect;
                            var3 = new Array(9);
                            var3[0] = var14;
                            var3[1] = var13;
                            var3[2] = var12;
                            var3[3] = var11;
                            var3[4] = var10;
                            var3[5] = var9;
                            var3[6] = var8;
                            var3[7] = var7;
                            var3[8] = var6;
                            var0 = function() { // Environment: var0
                                _fun27313: for (var _fun27313_ip = 0;;) switch (_fun27313_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var4 = null;
                                        if (!(var4 == var1)) {
                                            _fun27313_ip = 19;
                                            continue _fun27313
                                        }
                                    case 15:
                                        var1 = undefined;
                                        return var1;
                                    case 19:
                                        var1 = false;
                                        var _closure4_slot0 = var1;
                                        var6 = _closure3_slot0;
                                        var5 = var6.setBoolean;
                                        var2 = _closure3_slot5;
                                        var1 = 'reducedMotion';
                                        var1 = var5.bind(var6)(var1, var2);
                                        var1 = _closure3_slot3;
                                        if (!(var4 != var1)) {
                                            _fun27313_ip = 95;
                                            continue _fun27313
                                        }
                                    case 57:
                                        var1 = global;
                                        var5 = var1.Object;
                                        var2 = var5.entries;
                                        var1 = _closure3_slot3;
                                        var5 = var2.bind(var5)(var1);
                                        var2 = var5.forEach;
                                        var1 = function(arg0) { // Environment: var0
                                            _fun27314: for (var _fun27314_ip = 0;;) switch (_fun27314_ip) {
                                                case 0:
                                                    var6 = arg0;
                                                    var1 = var6[Symbol.iterator];
                                                    var6 = var1().next;
                                                    var5 = var6().value;
                                                    var3 = var1;
                                                    var0 = undefined;
                                                    var3 = var3 === var0;
                                                    var4 = undefined;
                                                    if (var3) {
                                                        _fun27314_ip = 29;
                                                        continue _fun27314
                                                    }
                                                case 26:
                                                    var4 = var5;
                                                case 29:
                                                    var _closure5_slot0 = var4;
                                                    var5 = undefined;
                                                    if (var3) {
                                                        _fun27314_ip = 63;
                                                        continue _fun27314
                                                    }
                                                case 38:
                                                    var7 = var6().value;
                                                    var6 = var1;
                                                    var6 = var6 === var0;
                                                    var5 = undefined;
                                                    var3 = var6;
                                                    if (var6) {
                                                        _fun27314_ip = 63;
                                                        continue _fun27314
                                                    }
                                                case 57:
                                                    var5 = var7;
                                                    var3 = var6;
                                                case 63:
                                                    if (var3) {
                                                        _fun27314_ip = 69;
                                                        continue _fun27314
                                                    }
                                                case 66:
                                                    var1.return();
                                                case 69:
                                                    var6 = _closure3_slot2;
                                                    var3 = _closure3_slot1;
                                                    var3 = var6[var3];
                                                    var9 = var3[var4];
                                                    var3 = _closure3_slot9;
                                                    var3 = var3.current;
                                                    var3 = var3[var4];
                                                    var3 = var3 !== var5;
                                                    var10 = 'string';
                                                    if (!(var10 !== var9)) {
                                                        _fun27314_ip = 576;
                                                        continue _fun27314
                                                    }
                                                case 116:
                                                    var6 = 'color';
                                                    if (!(var6 !== var9)) {
                                                        _fun27314_ip = 543;
                                                        continue _fun27314
                                                    }
                                                case 127:
                                                    var7 = 'number';
                                                    if (!(var7 !== var9)) {
                                                        _fun27314_ip = 417;
                                                        continue _fun27314
                                                    }
                                                case 138:
                                                    var8 = 'boolean';
                                                    if (!(var8 !== var9)) {
                                                        _fun27314_ip = 374;
                                                        continue _fun27314
                                                    }
                                                case 149:
                                                    var6 = 'trigger';
                                                    if (!(var6 !== var9)) {
                                                        _fun27314_ip = 317;
                                                        continue _fun27314
                                                    }
                                                case 160:
                                                    var6 = 'image';
                                                    if (!(var6 !== var9)) {
                                                        _fun27314_ip = 222;
                                                        continue _fun27314
                                                    }
                                                case 168:
                                                    var6 = 'artboard';
                                                    if (!(var6 === var9)) {
                                                        _fun27314_ip = 607;
                                                        continue _fun27314
                                                    }
                                                case 179:
                                                    var6 = null;
                                                    var6 = var6 != var5;
                                                    if (!var6) {
                                                        _fun27314_ip = 195;
                                                        continue _fun27314
                                                    }
                                                case 188:
                                                    var9 = typeof var5;
                                                    var6 = var10 === var9;
                                                case 195:
                                                    if (!var6) {
                                                        _fun27314_ip = 607;
                                                        continue _fun27314
                                                    }
                                                case 201:
                                                    var9 = _closure3_slot0;
                                                    var6 = var9.setArtboard;
                                                    var6 = var6.bind(var9)(var4, var5);
                                                    _fun27314_ip = 607;
                                                    continue _fun27314;
                                                case 222:
                                                    var6 = null;
                                                    if (!(var6 != var5)) {
                                                        _fun27314_ip = 607;
                                                        continue _fun27314
                                                    }
                                                case 231:
                                                    var6 = _closure3_slot8;
                                                    if (var6) {
                                                        _fun27314_ip = 276;
                                                        continue _fun27314
                                                    }
                                                case 238:
                                                    if (var3) {
                                                        _fun27314_ip = 243;
                                                        continue _fun27314
                                                    }
                                                case 241:
                                                    return var0;
                                                case 243:
                                                    var10 = _closure3_slot0;
                                                    var9 = var10.setImage;
                                                    var6 = _closure1_slot12;
                                                    var6 = var6.bind(var0)(var5);
                                                    var6 = var9.bind(var10)(var4, var6);
                                                    _fun27314_ip = 607;
                                                    continue _fun27314;
                                                case 276:
                                                    var9 = _closure3_slot7;
                                                    var6 = _closure1_slot12;
                                                    var6 = var6.bind(var0)(var5);
                                                    var9 = var9.bind(var0)(var6);
                                                    var6 = var9.then;
                                                    var2 = function(arg0) { // Environment: var2
                                                        _fun27315: for (var _fun27315_ip = 0;;) switch (_fun27315_ip) {
                                                            case 0:
                                                                var3 = arg0;
                                                                var0 = _closure4_slot0;
                                                                if (var0) {
                                                                    _fun27315_ip = 19;
                                                                    continue _fun27315
                                                                }
                                                            case 13:
                                                                var1 = null;
                                                                var0 = var1 == var3;
                                                            case 19:
                                                                if (var0) {
                                                                    _fun27315_ip = 48;
                                                                    continue _fun27315
                                                                }
                                                            case 22:
                                                                var2 = _closure3_slot0;
                                                                var1 = var2.setBase64Image;
                                                                var0 = _closure5_slot0;
                                                                var0 = var1.bind(var2)(var0, var3);
                                                            case 48:
                                                                var0 = undefined;
                                                                return var0;
                                                        }
                                                    };
                                                    var2 = var6.bind(var9)(var2);
                                                    _fun27314_ip = 607;
                                                    continue _fun27314;
                                                case 317:
                                                    var2 = null;
                                                    if (!(var2 != var5)) {
                                                        _fun27314_ip = 607;
                                                        continue _fun27314
                                                    }
                                                case 326:
                                                    var6 = typeof var5;
                                                    var2 = var5;
                                                    if (!(var8 !== var6)) {
                                                        _fun27314_ip = 342;
                                                        continue _fun27314
                                                    }
                                                case 336:
                                                    var6 = 0;
                                                    var2 = var6 !== var5;
                                                case 342:
                                                    if (!var2) {
                                                        _fun27314_ip = 348;
                                                        continue _fun27314
                                                    }
                                                case 345:
                                                    var2 = var3;
                                                case 348:
                                                    if (!var2) {
                                                        _fun27314_ip = 607;
                                                        continue _fun27314
                                                    }
                                                case 354:
                                                    var3 = _closure3_slot0;
                                                    var2 = var3.trigger;
                                                    var2 = var2.bind(var3)(var4);
                                                    _fun27314_ip = 607;
                                                    continue _fun27314;
                                                case 374:
                                                    var2 = null;
                                                    if (!(var2 != var5)) {
                                                        _fun27314_ip = 607;
                                                        continue _fun27314
                                                    }
                                                case 383:
                                                    var6 = _closure3_slot0;
                                                    var3 = var6.setBoolean;
                                                    var2 = global;
                                                    var2 = var2.Boolean;
                                                    var2 = var2.bind(var0)(var5);
                                                    var2 = var3.bind(var6)(var4, var2);
                                                    _fun27314_ip = 607;
                                                    continue _fun27314;
                                                case 417:
                                                    var2 = null;
                                                    if (!(var2 != var5)) {
                                                        _fun27314_ip = 607;
                                                        continue _fun27314
                                                    }
                                                case 426:
                                                    var6 = _closure3_slot0;
                                                    var3 = var6.setNumber;
                                                    var2 = typeof var5;
                                                    if (!(var7 === var2)) {
                                                        _fun27314_ip = 468;
                                                        continue _fun27314
                                                    }
                                                case 443:
                                                    var2 = global;
                                                    var7 = var2.Number;
                                                    var2 = var7.isNaN;
                                                    var7 = var2.bind(var7)(var5);
                                                    var2 = var5;
                                                    if (!var7) {
                                                        _fun27314_ip = 535;
                                                        continue _fun27314
                                                    }
                                                case 468:
                                                    var8 = global;
                                                    var10 = var8.Number;
                                                    var9 = var10.isNaN;
                                                    var11 = var8.parseFloat;
                                                    var7 = var5.toString;
                                                    var7 = var7.bind(var5)();
                                                    var7 = var11.bind(var0)(var7);
                                                    var9 = var9.bind(var10)(var7);
                                                    var7 = 0;
                                                    if (var9) {
                                                        _fun27314_ip = 532;
                                                        continue _fun27314
                                                    }
                                                case 512:
                                                    var9 = var8.parseFloat;
                                                    var8 = var5.toString;
                                                    var8 = var8.bind(var5)();
                                                    var7 = var9.bind(var0)(var8);
                                                case 532:
                                                    var2 = var7;
                                                case 535:
                                                    var2 = var3.bind(var6)(var4, var2);
                                                    _fun27314_ip = 607;
                                                    continue _fun27314;
                                                case 543:
                                                    var2 = null;
                                                    if (!(var2 != var5)) {
                                                        _fun27314_ip = 607;
                                                        continue _fun27314
                                                    }
                                                case 549:
                                                    var6 = _closure3_slot0;
                                                    var3 = var6.setColor;
                                                    var2 = var5.toString;
                                                    var2 = var2.bind(var5)();
                                                    var2 = var3.bind(var6)(var4, var2);
                                                    _fun27314_ip = 607;
                                                    continue _fun27314;
                                                case 576:
                                                    var2 = null;
                                                    if (!(var2 != var5)) {
                                                        _fun27314_ip = 607;
                                                        continue _fun27314
                                                    }
                                                case 582:
                                                    var3 = _closure3_slot0;
                                                    var2 = var3.setString;
                                                    var1 = var5.toString;
                                                    var1 = var1.bind(var5)();
                                                    var1 = var2.bind(var3)(var4, var1);
                                                case 607:
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var5)(var1);
                                    case 95:
                                        var2 = _closure3_slot6;
                                        var1 = undefined;
                                        var1 = var2.bind(var1)();
                                        var1 = _closure3_slot0;
                                        if (!(var4 != var1)) {
                                            _fun27313_ip = 127;
                                            continue _fun27313
                                        }
                                    case 113:
                                        var2 = _closure3_slot0;
                                        var1 = var2.play;
                                        var1 = var1.bind(var2)();
                                    case 127:
                                        var2 = _closure3_slot9;
                                        var1 = _closure3_slot3;
                                        if (!(var4 == var1)) {
                                            _fun27313_ip = 143;
                                            continue _fun27313
                                        }
                                    case 139:
                                        var1 = {};
                                        _fun27313_ip = 147;
                                        continue _fun27313;
                                    case 143:
                                        var1 = _closure3_slot3;
                                    case 147:
                                        var2.current = var1;
                                        var0 = function() { // Environment: var0
                                            var0 = true;
                                            _closure4_slot0 = var0;
                                            var0 = undefined;
                                            return var0;
                                        };
                                        return var0;
                                }
                            };
                            var0 = var4.bind(var5)(var0, var3);
                            var0 = {};
                            var0.onStateUpdated = var2;
                            var0.isReadyToDisplay = var1;
                            return var0;
                    }
                };
                var23 = undefined;
                var22 = var1;
                var21 = var13;
                var20 = var4;
                var5 = var23[var5](var22, var21, var20, var19, var18);
                var14 = var5.onStateUpdated;
                var6 = var5.isReadyToDisplay;
                var0 = function(arg0, arg1, arg2, arg3) { // Original name: useDataBindingCallbacks, environment: var0
                    var7 = arg0;
                    var6 = arg1;
                    var5 = arg2;
                    var4 = arg3;
                    var _closure3_slot0 = var7;
                    var _closure3_slot1 = var6;
                    var _closure3_slot2 = var5;
                    var _closure3_slot3 = var4;
                    var3 = _closure1_slot5;
                    var2 = var3.useEffect;
                    var1 = new Array(4);
                    var1[0] = var7;
                    var1[1] = var6;
                    var1[2] = var5;
                    var1[3] = var4;
                    var0 = function() { // Environment: var0
                        _fun27318: for (var _fun27318_ip = 0;;) switch (_fun27318_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun27318_ip = 113;
                                    continue _fun27318
                                }
                            case 15:
                                var2 = _closure3_slot3;
                                if (!(var3 != var2)) {
                                    _fun27318_ip = 113;
                                    continue _fun27318
                                }
                            case 23:
                                var2 = _closure3_slot0;
                                var4 = var3 == var2;
                                var5 = undefined;
                                var2 = undefined;
                                if (var4) {
                                    _fun27318_ip = 71;
                                    continue _fun27318
                                }
                            case 38:
                                var4 = _closure3_slot0;
                                var4 = var4.internalNativeEmitter;
                                var4 = var3 == var4;
                                var2 = undefined;
                                if (var4) {
                                    _fun27318_ip = 71;
                                    continue _fun27318
                                }
                            case 57:
                                var6 = _closure3_slot0;
                                var4 = var6.internalNativeEmitter;
                                var2 = var4.bind(var6)();
                            case 71:
                                var _closure4_slot0 = var2;
                                if (!(var3 != var2)) {
                                    _fun27318_ip = 170;
                                    continue _fun27318
                                }
                            case 79:
                                var4 = _closure1_slot7;
                                var6 = _closure3_slot0;
                                var2 = var6.viewTag;
                                var2 = var2.bind(var6)();
                                var2 = var4.bind(var5)(var2);
                                var _closure4_slot1 = var2;
                                if (!(var3 == var2)) {
                                    _fun27318_ip = 117;
                                    continue _fun27318
                                }
                            case 113:
                                var2 = undefined;
                                return var2;
                            case 117:
                                var2 = new Array(0);
                                var _closure4_slot2 = var2;
                                var2 = global;
                                var3 = var2.Object;
                                var2 = var3.entries;
                                var1 = _closure3_slot3;
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var0
                                    _fun27320: for (var _fun27320_ip = 0;;) switch (_fun27320_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var3 = var5[Symbol.iterator];
                                            var5 = var3().next;
                                            var2 = var5().value;
                                            var1 = var3;
                                            var0 = undefined;
                                            var4 = var1 === var0;
                                            var1 = undefined;
                                            if (var4) {
                                                _fun27320_ip = 27;
                                                continue _fun27320
                                            }
                                        case 24:
                                            var1 = var2;
                                        case 27:
                                            var2 = undefined;
                                            if (var4) {
                                                _fun27320_ip = 57;
                                                continue _fun27320
                                            }
                                        case 32:
                                            var6 = var5().value;
                                            var5 = var3;
                                            var5 = var5 === var0;
                                            var2 = undefined;
                                            var4 = var5;
                                            if (var5) {
                                                _fun27320_ip = 57;
                                                continue _fun27320
                                            }
                                        case 51:
                                            var2 = var6;
                                            var4 = var5;
                                        case 57:
                                            if (var4) {
                                                _fun27320_ip = 63;
                                                continue _fun27320
                                            }
                                        case 60:
                                            var3.return();
                                        case 63:
                                            var4 = _closure3_slot2;
                                            var3 = _closure3_slot1;
                                            var3 = var4[var3];
                                            var3 = var3[var1];
                                            var4 = null;
                                            if (!(var4 != var3)) {
                                                _fun27320_ip = 183;
                                                continue _fun27320
                                            }
                                        case 88:
                                            if (!(var4 != var2)) {
                                                _fun27320_ip = 183;
                                                continue _fun27320
                                            }
                                        case 92:
                                            var5 = new Array(4);
                                            var5[0] = var1;
                                            var1 = _closure1_slot11;
                                            var1 = var1[var3];
                                            var5[1] = var1;
                                            var3 = _closure4_slot1;
                                            var5[2] = var3;
                                            var5[3] = var2;
                                            var3 = _closure4_slot2;
                                            var2 = var3.push;
                                            var2 = var2.bind(var3)(var5);
                                            var3 = _closure4_slot0;
                                            var2 = var3.addListener;
                                            var1 = new Array(0);
                                            var8 = 0;
                                            var10 = var1;
                                            var9 = var5;
                                            var4 = arraySpread(var10, var9, var8);
                                            var10 = var2;
                                            var9 = var1;
                                            var8 = var3;
                                            var1 = apply(var10, var9, var8);
                                        case 183:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                var1 = function() { // Environment: var0
                                    var2 = _closure4_slot2;
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        var2 = _closure4_slot0;
                                        var1 = var2.removeListener;
                                        var0 = new Array(0);
                                        var6 = arg0;
                                        var5 = 0;
                                        var7 = var0;
                                        var3 = arraySpread(var7, var6, var5);
                                        var7 = var1;
                                        var6 = var0;
                                        var5 = var2;
                                        var0 = apply(var7, var6, var5);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                return var1;
                            case 170:
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var22 = var1;
                var21 = var13;
                var20 = var4;
                var19 = var2;
                var0 = var23[var0](var22, var21, var20, var19, var18);
                var2 = _closure1_slot9;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = _closure1_slot10;
                var5 = var4.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = undefined;
                if (var6) {
                    _fun27294_ip = 243;
                    continue _fun27294
                }
            case 233:
                var6 = _closure1_slot10;
                var5 = var6.hidden;
            case 243:
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var11];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.resourceName = var8;
                var10 = null;
                if (!(var10 == var18)) {
                    _fun27294_ip = 289;
                    continue _fun27294
                }
            case 285:
                var8 = {};
                _fun27294_ip = 299;
                continue _fun27294;
            case 289:
                var17 = {};
                var17.stateMachine = var18;
                var8 = var17;
            case 299:
                var22 = var4;
                var21 = var8;
                var8 = copyDataProperties(var22, var21);
                var8 = 'style';
                var4[var8] = var16;
                var8 = 'ref';
                var4[var8] = var15;
                var8 = 'onStateChanged';
                var4[var8] = var14;
                var8 = 'artboardName';
                var4[var8] = var13;
                if (!(var10 == var12)) {
                    _fun27294_ip = 351;
                    continue _fun27294
                }
            case 349:
                var12 = {};
            case 351:
                var8 = 'referencedAssets';
                var4[var8] = var12;
                var8 = var7.current;
                if (!(var10 == var8)) {
                    _fun27294_ip = 401;
                    continue _fun27294
                }
            case 369:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var11];
                var12 = var10.bind(var3)(var8);
                var10 = var12.AutoBind;
                var8 = true;
                var8 = var10.bind(var12)(var8);
                _fun27294_ip = 434;
                continue _fun27294;
            case 401:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var11];
                var10 = var10.bind(var3)(var9);
                var9 = var10.BindByName;
                var7 = var7.current;
                var8 = var9.bind(var10)(var7);
            case 434:
                var7 = 'dataBinding';
                var4[var7] = var8;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.BaseRive = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 33, 3135, 3124, 3140, 2]);