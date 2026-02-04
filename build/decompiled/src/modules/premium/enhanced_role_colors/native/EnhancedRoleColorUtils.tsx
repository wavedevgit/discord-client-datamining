// modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        _fun55540: for (var _fun55540_ip = 0;;) switch (_fun55540_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot6;
                var2 = var1.theme;
                var1 = _closure1_slot7;
                var1 = var1.LIGHT;
                if (!(var2 === var1)) {
                    _fun55540_ip = 169;
                    continue _fun55540
                }
            case 33:
                var1 = null;
                if (!(var1 != var3)) {
                    _fun55540_ip = 169;
                    continue _fun55540
                }
            case 42:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var7 = var2.bind(var4)(var3);
                var2 = var7.hsl;
                var8 = var2.bind(var7)();
                var7 = _closure1_slot3;
                var2 = 3;
                var9 = var7.bind(var4)(var8, var2);
                var2 = 0;
                var8 = var9[var2];
                var2 = 1;
                var7 = var9[var2];
                var2 = 2;
                var9 = var9[var2];
                var2 = _closure1_slot5;
                var1 = var6[var1];
                var6 = var5.bind(var4)(var1);
                var5 = var6.hsl;
                var1 = 0.85;
                var1 = var1 * var9;
                var5 = var5.bind(var6)(var8, var7, var1);
                var1 = var5.hex;
                var1 = var1.bind(var5)();
                var1 = var2.bind(var4)(var1);
                return var1;
            case 169:
                var2 = _closure1_slot5;
                var0 = null;
                var4 = var0 != var3;
                var1 = undefined;
                var0 = undefined;
                if (!var4) {
                    _fun55540_ip = 189;
                    continue _fun55540
                }
            case 186:
                var0 = var3;
            case 189:
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var4 = function arg0() {
        _fun55541: for (var _fun55541_ip = 0;;) switch (_fun55541_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun55541_ip = 13;
                    continue _fun55541
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = {};
                var3 = _closure1_slot8;
                var4 = var1.primaryColor;
                var2 = undefined;
                var4 = var3.bind(var2)(var4);
                var0.primaryColor = var4;
                var4 = var1.secondaryColor;
                var4 = var3.bind(var2)(var4);
                var0.secondaryColor = var4;
                var1 = var1.tertiaryColor;
                var1 = var3.bind(var2)(var1);
                var0.tertiaryColor = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function arg0() {
        _fun55542: for (var _fun55542_ip = 0;;) switch (_fun55542_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun55542_ip = 95;
                    continue _fun55542
                }
            case 9:
                var1 = _closure1_slot9;
                var4 = undefined;
                var1 = var1.bind(var4)(var2);
                var3 = var1.primaryColor;
                var2 = new Array(3);
                var2[0] = var3;
                var3 = var1.secondaryColor;
                var2[1] = var3;
                var1 = var1.tertiaryColor;
                var2[2] = var1;
                var1 = var2.filter;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.isNotNullish;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 95:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.processColor;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.processColorStrings = var4;
    var2.processColorStringsArray = var3;
    var3 = function arg0() {
        _fun55543: for (var _fun55543_ip = 0;;) switch (_fun55543_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var6 = null;
                var1 = var6 == var5;
                var7 = undefined;
                if (var1) {
                    _fun55543_ip = 38;
                    continue _fun55543
                }
            case 32:
                var7 = var5.primaryColor;
            case 38:
                var1 = new Array(3);
                var1[0] = var7;
                var8 = var6 == var5;
                var7 = undefined;
                if (var8) {
                    _fun55543_ip = 61;
                    continue _fun55543
                }
            case 55:
                var7 = var5.secondaryColor;
            case 61:
                var1[1] = var7;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun55543_ip = 80;
                    continue _fun55543
                }
            case 74:
                var4 = var5.tertiaryColor;
            case 80:
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot10;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useProcessColorStringsArray = var3;
    var3 = function arg0, arg1, arg2() {
        _fun55545: for (var _fun55545_ip = 0;;) switch (_fun55545_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.getHasEnhancedRoleColors;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                if (!var0) {
                    _fun55545_ip = 57;
                    continue _fun55545
                }
            case 46:
                var2 = 'hidden';
                var1 = arg2;
                var0 = var2 !== var1;
            case 57:
                return var0;
        }
    };
    var2.isNativeMessageEligibleForEnhancedRoleColors = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun55546: for (var _fun55546_ip = 0;;) switch (_fun55546_ip) {
            case 0:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                if (!var0) {
                    _fun55546_ip = 51;
                    continue _fun55546
                }
            case 40:
                var2 = 'hidden';
                var1 = arg2;
                var0 = var2 !== var1;
            case 51:
                if (!var0) {
                    _fun55546_ip = 69;
                    continue _fun55546
                }
            case 54:
                var1 = arg3;
                var2 = var1.length;
                var1 = 1;
                var0 = var2 > var1;
            case 69:
                return var0;
        }
    };
    var2.useIsRoleStyleAndRoleColorsEligibleForERC = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3196, 483, 669, 1304, 4789, 2]);