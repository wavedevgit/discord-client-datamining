// design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44359: for (var _fun44359_ip = 0;;) switch (_fun44359_ip) {
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
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var1);
            var0 = 0;
            var7 = var5[var0];
            var1 = metroImportAll;
            var0 = undefined;
            var1 = var1.bind(var0)(var7);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var1.Pressable;
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var1.jsx;
            var _closure1_slot5 = var1;
            var1 = 3;
            var1 = var5[var1];
            var7 = var6.bind(var0)(var1);
            var6 = var7.createAnimatedComponent;
            var1 = 4;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var1.PressableHighlight;
            var1 = var6.bind(var7)(var1);
            var _closure1_slot6 = var1;
            var1 = 8;
            var1 = var5[var1];
            var6 = var4.bind(var0)(var1);
            var1 = var6.isAndroid;
            var1 = var1.bind(var6)();
            if (var1) {
                _fun44359_ip = 198;
                continue _fun44359
            }
        case 191:
            var1 = function(arg0) { // Original name: AnimatedPressableHighlightiOS, environment: var3
                var2 = arg0;
                var5 = var2.children;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.children = var0;
                var12 = {};
                var11 = var2;
                var10 = var1;
                var4 = copyDataProperties(var12, var11, var10);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var6 = var2.bind(var3)(var1);
                var2 = var6.useIOSPressEffects;
                var1 = 4;
                var1 = var2.bind(var6)(var1);
                var8 = var1.onPressIn;
                var6 = var1.onPressOut;
                var7 = var1.pressableStyles;
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var0 = {};
                var9 = 'button';
                var0.accessibilityRole = var9;
                var0.onPressIn = var8;
                var0.onPressOut = var6;
                var12 = var0;
                var11 = var4;
                var6 = copyDataProperties(var12, var11);
                var6 = new Array(2);
                var6[0] = var7;
                var4 = var4.style;
                var6[1] = var4;
                var4 = 'style';
                var0[var4] = var6;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            _fun44359_ip = 203;
            continue _fun44359;
        case 198:
            var1 = function(arg0) { // Original name: AnimatedPressableHighlightAndroid, environment: var3
                _fun44360: for (var _fun44360_ip = 0;;) switch (_fun44360_ip) {
                    case 0:
                        var3 = arg0;
                        var5 = var3.children;
                        var8 = null;
                        var2 = Object.create(var8);
                        var0 = 0;
                        var2.children = var0;
                        var13 = {};
                        var12 = var3;
                        var11 = var2;
                        var4 = copyDataProperties(var13, var12, var11);
                        var _closure2_slot0 = var4;
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 6;
                        var2 = var10[var2];
                        var3 = undefined;
                        var7 = var6.bind(var3)(var2);
                        var6 = var7.useToken;
                        var9 = _closure1_slot1;
                        var2 = 7;
                        var2 = var10[var2];
                        var2 = var9.bind(var3)(var2);
                        var2 = var2.colors;
                        var2 = var2.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE;
                        var9 = var6.bind(var7)(var2);
                        var _closure2_slot1 = var9;
                        var7 = _closure1_slot3;
                        var6 = var7.useMemo;
                        var2 = new Array(2);
                        var2[0] = var9;
                        var9 = var4.androidRippleConfig;
                        var10 = var8 == var9;
                        var8 = undefined;
                        if (var10) {
                            _fun44360_ip = 142;
                            continue _fun44360
                        }
                    case 136:
                        var8 = var9.cornerRadius;
                    case 142:
                        var2[1] = var8;
                        var1 = function() { // Environment: var1
                            _fun44361: for (var _fun44361_ip = 0;;) switch (_fun44361_ip) {
                                case 0:
                                    var0 = {};
                                    var2 = _closure2_slot1;
                                    var0.color = var2;
                                    var1 = _closure2_slot0;
                                    var3 = var1.androidRippleConfig;
                                    var1 = null;
                                    var4 = var1 == var3;
                                    var2 = undefined;
                                    if (var4) {
                                        _fun44361_ip = 40;
                                        continue _fun44361
                                    }
                                case 34:
                                    var2 = var3.cornerRadius;
                                case 40:
                                    var3 = var1 != var2;
                                    var1 = 12;
                                    if (!var3) {
                                        _fun44361_ip = 53;
                                        continue _fun44361
                                    }
                                case 50:
                                    var1 = var2;
                                case 53:
                                    var0.cornerRadius = var1;
                                    return var0;
                            }
                        };
                        var6 = var6.bind(var7)(var1, var2);
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var0.android_ripple = var6;
                        var13 = var0;
                        var12 = var4;
                        var4 = copyDataProperties(var13, var12);
                        var4 = 'children';
                        var0[var4] = var5;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
        case 203:
            var3 = 9;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx';
            var3 = var4.bind(var5)(var3);
            var2.AnimatedPressableHighlight = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3677, 4858, 4860, 3110, 671, 478, 2]);