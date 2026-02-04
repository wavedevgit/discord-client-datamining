// modules/collectibles/createUseCollectiblesShopStyles.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = function arg0, arg1() {
        var2 = arg0;
        var1 = arg1;
        var0 = var2.toRgb;
        var3 = var0.bind(var2)();
        var0 = var1.toRgb;
        var0 = var0.bind(var1)();
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var7 = 2;
        var4 = var6[var7];
        var2 = undefined;
        var8 = var5.bind(var2)(var4);
        var5 = var8.getValueInColorGradientByPercentage;
        var9 = var3.r;
        var4 = new Array(3);
        var4[0] = var9;
        var9 = var3.g;
        var4[1] = var9;
        var3 = var3.b;
        var4[2] = var3;
        var9 = var0.r;
        var3 = new Array(3);
        var3[0] = var9;
        var9 = var0.g;
        var3[1] = var9;
        var0 = var0.b;
        var3[2] = var0;
        var0 = 50;
        var4 = var5.bind(var8)(var4, var3, var0);
        var3 = _closure1_slot3;
        var0 = 3;
        var3 = var3.bind(var2)(var4, var0);
        var4 = 0;
        var5 = var3[var4];
        var4 = 1;
        var4 = var3[var4];
        var3 = var3[var7];
        var1 = _closure1_slot1;
        var0 = var6[var0];
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.r = var5;
        var0.g = var4;
        var0.b = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var3;
    var3 = function arg0, arg1() {
        _fun75557: for (var _fun75557_ip = 0;;) switch (_fun75557_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = var4.length;
                var2 = 0;
                if (!(var2 === var0)) {
                    _fun75557_ip = 21;
                    continue _fun75557
                }
            case 17:
                var0 = undefined;
                return var0;
            case 21:
                var0 = var4.length;
                var1 = 1;
                if (!(var1 !== var0)) {
                    _fun75557_ip = 178;
                    continue _fun75557
                }
            case 36:
                var0 = {};
                var5 = var4[var2];
                var0.primary = var5;
                var5 = var4[var1];
                var0.secondary = var5;
                var5 = var4.length;
                var6 = 2;
                var8 = var5 > var6;
                var7 = undefined;
                var5 = undefined;
                if (!var8) {
                    _fun75557_ip = 79;
                    continue _fun75557
                }
            case 75:
                var5 = var4[var6];
            case 79:
                var0.tertiary = var5;
                var6 = _closure1_slot5;
                var8 = var4[var2];
                var5 = var4[var1];
                var9 = var6.bind(var7)(var8, var5);
                var8 = var9.setAlpha;
                var5 = 0.4;
                var5 = var8.bind(var9)(var5);
                var0.border = var5;
                var5 = var4[var2];
                var1 = var4[var1];
                var5 = var6.bind(var7)(var5, var1);
                var1 = var5.isLight;
                var1 = var1.bind(var5)();
                if (var1) {
                    _fun75557_ip = 166;
                    continue _fun75557
                }
            case 158:
                var1 = var3.light;
                _fun75557_ip = 172;
                continue _fun75557;
            case 166:
                var1 = var3.dark;
            case 172:
                var0.label = var1;
                _fun75557_ip = 266;
                continue _fun75557;
            case 178:
                var1 = {};
                var5 = var4[var2];
                var1.primary = var5;
                var5 = var4[var2];
                var1.secondary = var5;
                var7 = var4[var2];
                var6 = var7.setAlpha;
                var5 = 0.4;
                var5 = var6.bind(var7)(var5);
                var1.border = var5;
                var4 = var4[var2];
                var2 = var4.isLight;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun75557_ip = 253;
                    continue _fun75557
                }
            case 245:
                var2 = var3.light;
                _fun75557_ip = 259;
                continue _fun75557;
            case 253:
                var2 = var3.dark;
            case 259:
                var1.label = var2;
                var0 = var1;
            case 266:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = function arg0, arg1() {
        _fun75558: for (var _fun75558_ip = 0;;) switch (_fun75558_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = var4.length;
                var2 = 0;
                if (!(var2 === var0)) {
                    _fun75558_ip = 21;
                    continue _fun75558
                }
            case 17:
                var0 = undefined;
                return var0;
            case 21:
                var0 = var4.length;
                var1 = 1;
                if (!(var1 !== var0)) {
                    _fun75558_ip = 109;
                    continue _fun75558
                }
            case 33:
                var0 = {};
                var5 = var4[var2];
                var0.primary = var5;
                var5 = var4[var1];
                var0.secondary = var5;
                var7 = _closure1_slot5;
                var6 = var4[var2];
                var5 = var4[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var6, var5);
                var1 = var5.isLight;
                var1 = var1.bind(var5)();
                if (var1) {
                    _fun75558_ip = 97;
                    continue _fun75558
                }
            case 89:
                var1 = var3.light;
                _fun75558_ip = 103;
                continue _fun75558;
            case 97:
                var1 = var3.dark;
            case 103:
                var0.text = var1;
                _fun75558_ip = 167;
                continue _fun75558;
            case 109:
                var1 = {};
                var5 = var4[var2];
                var1.primary = var5;
                var5 = var4[var2];
                var1.secondary = var5;
                var4 = var4[var2];
                var2 = var4.isLight;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun75558_ip = 154;
                    continue _fun75558
                }
            case 146:
                var2 = var3.light;
                _fun75558_ip = 160;
                continue _fun75558;
            case 154:
                var2 = var3.dark;
            case 160:
                var1.text = var2;
                var0 = var1;
            case 167:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var0 = var1.toHsl;
        var0 = var0.bind(var1)();
        var4 = var0.h;
        var5 = var0.s;
        var3 = var0.l;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 3;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.h = var4;
        var4 = arg1;
        var4 = var5 * var4;
        var0.s = var4;
        var0.l = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/createUseCollectiblesShopStyles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun75561: for (var _fun75561_ip = 0;;) switch (_fun75561_ip) {
                case 0:
                    var0 = arg0;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var8 = undefined;
                    var6 = var3.bind(var8)(var2);
                    var4 = var6.useStateFromStores;
                    var2 = _closure1_slot4;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure1_slot4;
                        var0 = var0.saturation;
                        return var0;
                    };
                    var7 = var4.bind(var6)(var3, var2);
                    var _closure3_slot0 = var7;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun75561_ip = 464;
                        continue _fun75561
                    }
                case 73:
                    var2 = {};
                    var6 = _closure1_slot6;
                    var9 = _closure2_slot0;
                    var3 = var0.backgroundColors;
                    var3 = var6.bind(var8)(var9, var3);
                    var2.backgroundColors = var3;
                    var6 = _closure1_slot7;
                    var3 = var0.buttonColors;
                    var3 = var6.bind(var8)(var9, var3);
                    var2.buttonColors = var3;
                    var0 = var0.confettiColors;
                    var2.confettiColors = var0;
                    var0 = 1;
                    if (!(var0 !== var7)) {
                        _fun75561_ip = 447;
                        continue _fun75561
                    }
                case 145:
                    var0 = {};
                    var3 = var2.backgroundColors;
                    var6 = var4 != var3;
                    var3 = undefined;
                    if (!var6) {
                        _fun75561_ip = 316;
                        continue _fun75561
                    }
                case 165:
                    var6 = {};
                    var10 = _closure1_slot8;
                    var9 = var2.backgroundColors;
                    var9 = var9.primary;
                    var9 = var10.bind(var8)(var9, var7);
                    var6.primary = var9;
                    var9 = var2.backgroundColors;
                    var9 = var9.secondary;
                    var9 = var10.bind(var8)(var9, var7);
                    var6.secondary = var9;
                    var9 = var2.backgroundColors;
                    var9 = var9.tertiary;
                    var10 = var4 != var9;
                    var9 = undefined;
                    if (!var10) {
                        _fun75561_ip = 260;
                        continue _fun75561
                    }
                case 238:
                    var11 = _closure1_slot8;
                    var10 = var2.backgroundColors;
                    var10 = var10.tertiary;
                    var9 = var11.bind(var8)(var10, var7);
                case 260:
                    var6.tertiary = var9;
                    var10 = _closure1_slot8;
                    var9 = var2.backgroundColors;
                    var9 = var9.border;
                    var9 = var10.bind(var8)(var9, var7);
                    var6.border = var9;
                    var9 = var2.backgroundColors;
                    var9 = var9.label;
                    var9 = var10.bind(var8)(var9, var7);
                    var6.label = var9;
                    var3 = var6;
                case 316:
                    var0.backgroundColors = var3;
                    var3 = var2.buttonColors;
                    var4 = var4 != var3;
                    var3 = undefined;
                    if (!var4) {
                        _fun75561_ip = 412;
                        continue _fun75561
                    }
                case 336:
                    var4 = {};
                    var6 = _closure1_slot8;
                    var5 = var2.buttonColors;
                    var5 = var5.primary;
                    var5 = var6.bind(var8)(var5, var7);
                    var4.primary = var5;
                    var5 = var2.buttonColors;
                    var5 = var5.secondary;
                    var5 = var6.bind(var8)(var5, var7);
                    var4.secondary = var5;
                    var5 = var2.buttonColors;
                    var5 = var5.text;
                    var5 = var6.bind(var8)(var5, var7);
                    var4.text = var5;
                    var3 = var4;
                case 412:
                    var0.buttonColors = var3;
                    var4 = var2.confettiColors;
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        var3 = _closure1_slot8;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var1)(var0, var2);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var0.confettiColors = var1;
                    _fun75561_ip = 462;
                    continue _fun75561;
                case 447:
                    var1 = {};
                    var13 = var1;
                    var12 = var2;
                    var2 = copyDataProperties(var13, var12);
                    var0 = var1;
                case 462:
                    return var0;
                case 464:
                    var0 = {};
                    return var0;
            }
        };
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1298, 6965, 4624, 632, 2]);