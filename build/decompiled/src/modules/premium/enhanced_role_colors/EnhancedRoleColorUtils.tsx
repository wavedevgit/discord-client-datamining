// modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun19092: for (var _fun19092_ip = 0;;) switch (_fun19092_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var3 = var2.primary_color;
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun19092_ip = 61;
                    continue _fun19092
                }
            case 17:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.int2hex;
                var1 = var2.primary_color;
                var1 = var3.bind(var4)(var1);
                _fun19092_ip = 68;
                continue _fun19092;
            case 61:
                var1 = _closure1_slot2;
            case 68:
                var0.primaryColor = var1;
                var3 = var2.secondary_color;
                var1 = null;
                var4 = var1 == var3;
                var3 = null;
                if (var4) {
                    _fun19092_ip = 132;
                    continue _fun19092
                }
            case 90:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 1;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.int2hex;
                var4 = var2.secondary_color;
                var3 = var5.bind(var6)(var4);
            case 132:
                var0.secondaryColor = var3;
                var3 = var2.tertiary_color;
                var3 = var1 == var3;
                var1 = null;
                if (var3) {
                    _fun19092_ip = 194;
                    continue _fun19092
                }
            case 152:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.int2hex;
                var2 = var2.tertiary_color;
                var1 = var3.bind(var4)(var2);
            case 194:
                var0.tertiaryColor = var1;
                return var0;
        }
    };
    var2.extractColorStringsFromServerColors = var3;
    var3 = function arg0() {
        _fun19093: for (var _fun19093_ip = 0;;) switch (_fun19093_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun19093_ip = 63;
                    continue _fun19093
                }
            case 12:
                var1 = var2.colorStrings;
                var1 = var3 != var1;
                if (!var1) {
                    _fun19093_ip = 41;
                    continue _fun19093
                }
            case 25:
                var4 = var2.colorStrings;
                var4 = var4.primaryColor;
                var1 = var3 != var4;
            case 41:
                if (!var1) {
                    _fun19093_ip = 60;
                    continue _fun19093
                }
            case 44:
                var2 = var2.colorStrings;
                var2 = var2.secondaryColor;
                var1 = var3 != var2;
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var2.getAuthorHasGradientRole = var3;
    var1 = function arg0() {
        _fun19094: for (var _fun19094_ip = 0;;) switch (_fun19094_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.color;
                var5 = 0;
                var0 = var5 === var0;
                var1 = var2.colors;
                var3 = null;
                var1 = var3 != var1;
                if (!var1) {
                    _fun19094_ip = 43;
                    continue _fun19094
                }
            case 28:
                var4 = var2.colors;
                var4 = var4.primary_color;
                var1 = var5 === var4;
            case 43:
                if (!var1) {
                    _fun19094_ip = 61;
                    continue _fun19094
                }
            case 46:
                var4 = var2.colors;
                var4 = var4.secondary_color;
                var1 = var3 == var4;
            case 61:
                if (!var1) {
                    _fun19094_ip = 79;
                    continue _fun19094
                }
            case 64:
                var2 = var2.colors;
                var2 = var2.tertiary_color;
                var1 = var3 == var2;
            case 79:
                if (var0) {
                    _fun19094_ip = 85;
                    continue _fun19094
                }
            case 82:
                var0 = var1;
            case 85:
                return var0;
        }
    };
    var2.getIsDefaultErc = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 668, 2]);