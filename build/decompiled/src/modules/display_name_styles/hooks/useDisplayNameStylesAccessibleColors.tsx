// modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useDisplayNameStylesAccessibleColors, environment: var1
        _fun56765: for (var _fun56765_ip = 0;;) switch (_fun56765_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.displayNameStyles;
                var _closure2_slot0 = var8;
                var4 = var1.backgroundColor;
                var _closure2_slot1 = var4;
                var6 = undefined;
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var6;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var7 = var3.bind(var6)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun56766: for (var _fun56766_ip = 0;;) switch (_fun56766_ip) {
                        case 0:
                            var0 = _closure1_slot4;
                            var2 = var0.desaturateUserColors;
                            var0 = 1;
                            if (!var2) {
                                _fun56766_ip = 29;
                                continue _fun56766
                            }
                        case 19:
                            var1 = _closure1_slot4;
                            var0 = var1.saturation;
                        case 29:
                            return var0;
                    }
                };
                var5 = var5.bind(var7)(var3, var2);
                var _closure2_slot2 = var5;
                var2 = null;
                var3 = var2 == var8;
                var7 = undefined;
                if (var3) {
                    _fun56765_ip = 106;
                    continue _fun56765
                }
            case 100:
                var7 = var8.effectId;
            case 106:
                if (!(var2 == var7)) {
                    _fun56765_ip = 142;
                    continue _fun56765
                }
            case 110:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 3;
                var2 = var9[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.DisplayNameEffect;
                var7 = var2.SOLID;
            case 142:
                _closure2_slot3 = var7;
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.useDisplayNameStylesEffectConfig;
                var6 = var2.bind(var3)(var7);
                _closure2_slot4 = var6;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var8;
                var1[1] = var7;
                var6 = var6.minContrastRatio;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    _fun56767: for (var _fun56767_ip = 0;;) switch (_fun56767_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun56767_ip = 41;
                                continue _fun56767
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            var2 = var0.colors;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun56768: for (var _fun56768_ip = 0;;) switch (_fun56768_ip) {
                                    case 0:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var0 = 5;
                                        var0 = var10[var0];
                                        var7 = undefined;
                                        var2 = var9.bind(var7)(var0);
                                        var1 = var2.getAccessibleForegroundColor;
                                        var0 = {};
                                        var4 = _closure1_slot1;
                                        var8 = 6;
                                        var3 = var10[var8];
                                        var4 = var4.bind(var7)(var3);
                                        var3 = arg0;
                                        var3 = var4.bind(var7)(var3);
                                        var0.foreground = var3;
                                        var6 = _closure2_slot3;
                                        var4 = 3;
                                        var4 = var10[var4];
                                        var4 = var9.bind(var7)(var4);
                                        var4 = var4.DisplayNameEffect;
                                        var4 = var4.TOON;
                                        if (!(var6 !== var4)) {
                                            _fun56768_ip = 125;
                                            continue _fun56768
                                        }
                                    case 97:
                                        var6 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var4 = var4[var8];
                                        var6 = var6.bind(var7)(var4);
                                        var4 = _closure2_slot1;
                                        var4 = var6.bind(var7)(var4);
                                        _fun56768_ip = 153;
                                        continue _fun56768;
                                    case 125:
                                        var6 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var5 = var5[var8];
                                        var6 = var6.bind(var7)(var5);
                                        var5 = '#333';
                                        var4 = var6.bind(var7)(var5);
                                    case 153:
                                        var0.background = var4;
                                        var4 = _closure2_slot4;
                                        var4 = var4.minContrastRatio;
                                        var0.ratio = var4;
                                        var3 = _closure2_slot2;
                                        var0.saturationFactor = var3;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = var1.hex;
                                        var0 = var0.bind(var1)();
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun56767_ip = 45;
                            continue _fun56767;
                        case 41:
                            var0 = new Array(0);
                        case 45:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useDisplayNameStylesAccessibleColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 566, 1625, 6884, 3199, 669, 2]);