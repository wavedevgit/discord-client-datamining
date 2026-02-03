// modules/user_settings/native/appearance/components/SettingsAppearanceGradientBackground.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun84903: for (var _fun84903_ip = 0;;) switch (_fun84903_ip) {
        case 0:
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
            var8 = 0;
            var6 = var5[var8];
            var3 = metroImportAll;
            var0 = undefined;
            var6 = var3.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.StyleSheet;
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot6 = var3;
            var3 = 4;
            var9 = var5[var3];
            var11 = var4.bind(var0)(var9);
            var10 = var11.processColor;
            var9 = 'rgba(0, 0, 0, 0)';
            var9 = var10.bind(var11)(var9);
            var10 = null;
            var10 = var10 != var9;
            if (!var10) {
                _fun84903_ip = 178;
                continue _fun84903
            }
        case 175:
            var8 = var9;
        case 178:
            var3 = var5[var3];
            var9 = var7.bind(var0)(var3);
            var7 = var9.createAnimatedComponent;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.LinearGradientNativeComponent;
            var3 = var7.bind(var9)(var3);
            var _closure1_slot7 = var3;
            var3 = {};
            var7 = new Array(2);
            var7[0] = var8;
            var7[1] = var8;
            var3.colors = var7;
            var7 = new Array(0);
            var3.locations = var7;
            var7 = {
                'x': 0,
                'y': 0
            };
            var3.startPoint = var7;
            var7 = {
                'x': 0,
                'y': 0
            };
            var3.endPoint = var7;
            var _closure1_slot8 = var3;
            var3 = {};
            var7 = 'function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}';
            var3.code = var7;
            var _closure1_slot9 = var3;
            var3 = var6.memo;
            var1 = function arg0() {
                var2 = arg0;
                var1 = var2.isDimmed;
                var _closure2_slot0 = var1;
                var7 = var2.themes;
                var _closure2_slot1 = var7;
                var5 = var2.themeIndex;
                var _closure2_slot2 = var5;
                var6 = _closure1_slot3;
                var3 = var6.useMemo;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var5;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun84907: for (var _fun84907_ip = 0;;) switch (_fun84907_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var0 = var1[var0];
                            var1 = undefined;
                            var5 = var2.bind(var1)(var0);
                            var4 = var5.convertThemesToAnimatedThemes;
                            var3 = _closure2_slot1;
                            var7 = _closure2_slot0;
                            var2 = undefined;
                            if (!var7) {
                                _fun84907_ip = 57;
                                continue _fun84907
                            }
                        case 47:
                            var7 = _closure1_slot5;
                            var2 = var7.BACKGROUND_GRADIENT_DARK_OPACITY;
                        case 57:
                            var7 = _closure2_slot0;
                            var1 = undefined;
                            if (!var7) {
                                _fun84907_ip = 76;
                                continue _fun84907
                            }
                        case 66:
                            var6 = _closure1_slot5;
                            var1 = var6.BACKGROUND_GRADIENT_LIGHT_OPACITY;
                        case 76:
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0 = _closure2_slot2;
                            var0 = var1[var0];
                            return var0;
                    }
                };
                var2 = var3.bind(var6)(var1, var2);
                var1 = function arg0() {
                    _fun84905: for (var _fun84905_ip = 0;;) switch (_fun84905_ip) {
                        case 0:
                            var7 = arg0;
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 6;
                            var1 = var4[var1];
                            var5 = undefined;
                            var2 = var2.bind(var5)(var1);
                            var1 = var2.useLaunchWelcomeSystemTheme;
                            var6 = var1.bind(var2)();
                            var2 = var7.theme;
                            var1 = 'system';
                            if (!(var1 === var2)) {
                                _fun84905_ip = 57;
                                continue _fun84905
                            }
                        case 54:
                            var7 = var6;
                        case 57:
                            var _closure3_slot0 = var7;
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 4;
                            var2 = var8[var1];
                            var10 = var4.bind(var5)(var2);
                            var9 = var10.useSharedValue;
                            var2 = {};
                            var2.themePrev = var7;
                            var2.themeCurrent = var7;
                            var2 = var9.bind(var10)(var2);
                            var _closure3_slot1 = var2;
                            var1 = var8[var1];
                            var5 = var4.bind(var5)(var1);
                            var4 = var5.useSharedValue;
                            var1 = 0;
                            var1 = var4.bind(var5)(var1);
                            var _closure3_slot2 = var1;
                            var5 = _closure1_slot3;
                            var4 = var5.useEffect;
                            var3 = new Array(4);
                            var3[0] = var7;
                            var3[1] = var2;
                            var3[2] = var1;
                            var3[3] = var6;
                            var0 = function() { // Environment: var0
                                var3 = _closure3_slot1;
                                var2 = var3.set;
                                var1 = {};
                                var5 = _closure3_slot1;
                                var4 = var5.get;
                                var4 = var4.bind(var5)();
                                var4 = var4.themeCurrent;
                                var1.themePrev = var4;
                                var4 = _closure3_slot0;
                                var1.themeCurrent = var4;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure3_slot2;
                                var2 = var3.set;
                                var1 = 0;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure3_slot2;
                                var2 = var3.set;
                                var4 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 7;
                                var1 = var7[var0];
                                var0 = undefined;
                                var6 = var4.bind(var0)(var1);
                                var5 = var6.withTiming;
                                var1 = 8;
                                var1 = var7[var1];
                                var1 = var4.bind(var0)(var1);
                                var4 = var1.timingStandard;
                                var1 = 1;
                                var1 = var5.bind(var6)(var1, var4);
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0 = var4.bind(var5)(var0, var3);
                            var0 = {};
                            var0.themeState = var2;
                            var0.tweener = var1;
                            return var0;
                    }
                };
                var3 = undefined;
                var1 = var1.bind(var3)(var2);
                var11 = var1.themeState;
                var _closure2_slot3 = var11;
                var10 = var1.tweener;
                var _closure2_slot4 = var10;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 4;
                var1 = var9[var7];
                var5 = var8.bind(var3)(var1);
                var2 = var5.useSharedValue;
                var1 = {
                    'width': 0,
                    'height': 0
                };
                var12 = var2.bind(var5)(var1);
                var _closure2_slot5 = var12;
                var5 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = var0.nativeEvent;
                    var2 = _closure2_slot5;
                    var1 = var2.set;
                    var0 = {};
                    var4 = var3.layout;
                    var4 = var4.width;
                    var0.width = var4;
                    var3 = var3.layout;
                    var3 = var3.height;
                    var0.height = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var6 = var5.bind(var6)(var1, var2);
                var1 = var9[var7];
                var2 = var8.bind(var3)(var1);
                var1 = var2.useAnimatedProps;
                var0 = function() {
                    _fun84909: for (var _fun84909_ip = 0;;) switch (_fun84909_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var7 = var0.width;
                            var3 = var0.height;
                            var6 = 0;
                            if (!(var6 !== var7)) {
                                _fun84909_ip = 349;
                                continue _fun84909
                            }
                        case 37:
                            if (!(var6 !== var3)) {
                                _fun84909_ip = 349;
                                continue _fun84909
                            }
                        case 44:
                            var2 = _closure2_slot3;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var2 = var0.themePrev;
                            var4 = var2.colors;
                            var _closure3_slot0 = var4;
                            var13 = var2.angle;
                            var0 = var0.themeCurrent;
                            var2 = var0.colors;
                            var _closure3_slot1 = var2;
                            var2 = var0.angle;
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 4;
                            var10 = var9[var5];
                            var5 = undefined;
                            var12 = var11.bind(var5)(var10);
                            var11 = var12.interpolate;
                            var10 = _closure2_slot4;
                            var8 = var10.get;
                            var10 = var8.bind(var10)();
                            var8 = new Array(2);
                            var8[0] = var13;
                            var8[1] = var2;
                            var2 = [0, 1];
                            var8 = var11.bind(var12)(var10, var2, var8);
                            var2 = 90;
                            var2 = var2 - var8;
                            var8 = _closure1_slot1;
                            var0 = 9;
                            var0 = var9[var0];
                            var0 = var8.bind(var5)(var0);
                            var5 = var0.bind(var5)(var2, var7, var3);
                            var0 = {};
                            var8 = var4.map;
                            var2 = function(arg0, arg1) { // Environment: var1
                                _fun84910: for (var _fun84910_ip = 0;;) switch (_fun84910_ip) {
                                    case 0:
                                        var7 = arg1;
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var0 = 4;
                                        var1 = var5[var0];
                                        var3 = undefined;
                                        var2 = var4.bind(var3)(var1);
                                        var1 = var2.processColor;
                                        var0 = var5[var0];
                                        var6 = var4.bind(var3)(var0);
                                        var5 = var6.interpolateColor;
                                        var3 = _closure2_slot4;
                                        var0 = var3.get;
                                        var4 = var0.bind(var3)();
                                        var3 = _closure3_slot0;
                                        var3 = var3[var7];
                                        var8 = var3.hex;
                                        var3 = new Array(2);
                                        var3[0] = var8;
                                        var0 = _closure3_slot1;
                                        var0 = var0[var7];
                                        var0 = var0.hex;
                                        var3[1] = var0;
                                        var0 = [0, 1];
                                        var0 = var5.bind(var6)(var4, var0, var3);
                                        var1 = var1.bind(var2)(var0);
                                        var0 = null;
                                        var2 = var0 != var1;
                                        var0 = 0;
                                        if (!var2) {
                                            _fun84910_ip = 144;
                                            continue _fun84910
                                        }
                                    case 141:
                                        var0 = var1;
                                    case 144:
                                        return var0;
                                }
                            };
                            var2 = var8.bind(var4)(var2);
                            var0.colors = var2;
                            var2 = var4.map;
                            var1 = function(arg0, arg1) { // Environment: var1
                                var6 = arg1;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 4;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.interpolate;
                                var1 = _closure2_slot4;
                                var0 = var1.get;
                                var2 = var0.bind(var1)();
                                var1 = _closure3_slot0;
                                var1 = var1[var6];
                                var1 = var1.stop;
                                var5 = 100;
                                var7 = var1 / var5;
                                var1 = new Array(2);
                                var1[0] = var7;
                                var0 = _closure3_slot1;
                                var0 = var0[var6];
                                var0 = var0.stop;
                                var0 = var0 / var5;
                                var1[1] = var0;
                                var0 = [0, 1];
                                var0 = var3.bind(var4)(var2, var0, var1);
                                return var0;
                            };
                            var1 = var2.bind(var4)(var1);
                            var0.locations = var1;
                            var1 = {};
                            var4 = 2;
                            var8 = var7 / var4;
                            var2 = var5[var6];
                            var2 = var8 + var2;
                            var2 = var2 / var7;
                            var1.x = var2;
                            var9 = var3 / var4;
                            var2 = 1;
                            var8 = var5[var2];
                            var8 = var9 - var8;
                            var8 = var8 / var3;
                            var1.y = var8;
                            var0.startPoint = var1;
                            var1 = {};
                            var8 = var7 / var4;
                            var6 = var5[var6];
                            var6 = var8 - var6;
                            var6 = var6 / var7;
                            var1.x = var6;
                            var4 = var3 / var4;
                            var2 = var5[var2];
                            var2 = var4 + var2;
                            var2 = var2 / var3;
                            var1.y = var2;
                            var0.endPoint = var1;
                            return var0;
                        case 349:
                            var0 = _closure1_slot8;
                            return var0;
                    }
                };
                var5 = {};
                var5.gradientSize = var12;
                var12 = _closure1_slot8;
                var5.animatedLinearGradientLoadingProps = var12;
                var5.themeState = var11;
                var11 = var9[var7];
                var11 = var8.bind(var3)(var11);
                var11 = var11.interpolate;
                var5.interpolate = var11;
                var5.tweener = var10;
                var11 = _closure1_slot1;
                var10 = 9;
                var10 = var9[var10];
                var10 = var11.bind(var3)(var10);
                var5.getGradientStartPoint = var10;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.processColor;
                var5.processColor = var10;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.interpolateColor;
                var5.interpolateColor = var7;
                var0.__closure = var5;
                var5 = 5151435414824.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot9;
                var0.__initData = var5;
                var5 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot7;
                var0 = {};
                var7 = _closure1_slot4;
                var7 = var7.absoluteFill;
                var0.style = var7;
                var0.onLayout = var6;
                var13 = _closure1_slot8;
                var14 = var0;
                var4 = copyDataProperties(var14, var13);
                var4 = 'animatedProps';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1 = var3.bind(var6)(var1);
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/user_settings/native/appearance/components/SettingsAppearanceGradientBackground.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10854, 33, 3711, 4089, 10873, 4088, 4876, 10874, 2]);