// modules/visual_effect_view/native/overrides/VEVOOSlider.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun100367: for (var _fun100367_ip = 0;;) switch (_fun100367_ip) {
        case 0:
            var4 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var10 = 0;
            var6 = var5[var10];
            var3 = metroImportAll;
            var0 = undefined;
            var6 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var7 = var8.createStyles;
            var3 = {};
            var9 = {};
            var11 = 3;
            var11 = var5[var11];
            var13 = var4.bind(var0)(var11);
            var11 = var13.isAndroid;
            var11 = var11.bind(var13)();
            if (!var11) {
                _fun100367_ip = 164;
                continue _fun100367
            }
        case 141:
            var11 = 4;
            var11 = var5[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.spacing;
            var10 = var11.PX_8;
        case 164:
            var9.marginTop = var10;
            var3.slider = var9;
            var3 = var7.bind(var8)(var3);
            var _closure1_slot4 = var3;
            var3 = var6.memo;
            var1 = function(arg0) { // Original name: VEVOOSlider, environment: var1
                _fun100368: for (var _fun100368_ip = 0;;) switch (_fun100368_ip) {
                    case 0:
                        var0 = arg0;
                        var8 = var0.disabled;
                        var12 = var0.disabledOpacity;
                        var3 = undefined;
                        if (!(var12 === var3)) {
                            _fun100368_ip = 22;
                            continue _fun100368
                        }
                    case 20:
                        var12 = false;
                    case 22:
                        var7 = var0.initialValue;
                        var5 = var0.onValueChange;
                        var0 = _closure1_slot4;
                        var6 = var0.bind(var3)();
                        var2 = _closure1_slot3;
                        var1 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var0 = 5;
                        var0 = var9[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var6 = var6.slider;
                        var9 = new Array(2);
                        var9[0] = var6;
                        var10 = {};
                        var6 = 1;
                        var11 = var6;
                        if (!var12) {
                            _fun100368_ip = 106;
                            continue _fun100368
                        }
                    case 96:
                        var11 = 0.5;
                    case 106:
                        var10.opacity = var11;
                        var9[1] = var10;
                        var0.style = var9;
                        var0.disabled = var8;
                        var8 = var7.current;
                        var7 = null;
                        var9 = var7 != var8;
                        var7 = undefined;
                        if (!var9) {
                            _fun100368_ip = 141;
                            continue _fun100368
                        }
                    case 138:
                        var7 = var8;
                    case 141:
                        var0.value = var7;
                        var7 = 0;
                        var0.minimumValue = var7;
                        var0.maximumValue = var6;
                        var8 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var7 = 4;
                        var9 = var6[var7];
                        var9 = var8.bind(var3)(var9);
                        var9 = var9.unsafe_rawColors;
                        var9 = var9.BRAND_500;
                        var0.minimumTrackTintColor = var9;
                        var7 = var6[var7];
                        var7 = var8.bind(var3)(var7);
                        var7 = var7.unsafe_rawColors;
                        var7 = var7.PRIMARY_400;
                        var0.maximumTrackTintColor = var7;
                        var0.onValueChange = var5;
                        var5 = _closure1_slot0;
                        var4 = 3;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.isAndroid;
                        var5 = var4.bind(var5)();
                        var4 = undefined;
                        if (!var5) {
                            _fun100368_ip = 263;
                            continue _fun100368
                        }
                    case 254:
                        var4 = function() { // Environment: var5
                            var0 = true;
                            return var0;
                        };
                    case 263:
                        var0.onResponderGrant = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var3.bind(var6)(var1);
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/visual_effect_view/native/overrides/VEVOOSlider.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 478, 671, 5384, 2]);