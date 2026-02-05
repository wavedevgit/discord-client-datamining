// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var4 = 0;
    var3 = var6[var4];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var3 = var7.memo;
    var7 = var7.useMemo;
    var _closure1_slot2 = var7;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.StyleSheet;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot5 = var5;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var1 = function arg0() {
        _fun45500: for (var _fun45500_ip = 0;;) switch (_fun45500_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.style;
                var _closure2_slot0 = var1;
                var8 = var2.indicatorStyle;
                var _closure2_slot1 = var8;
                var12 = var2.accessible;
                var3 = undefined;
                if (!(var3 === var12)) {
                    _fun45500_ip = 64;
                    continue _fun45500
                }
            case 35:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var12 = var4.DEFAULT_ACCESSIBLE;
            case 64:
                var11 = var2.accessibilityRole;
                if (!(var3 === var11)) {
                    _fun45500_ip = 102;
                    continue _fun45500
                }
            case 73:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var11 = var4.DEFAULT_ACCESSIBILITY_ROLE;
            case 102:
                var10 = var2.accessibilityLabel;
                if (!(var3 === var10)) {
                    _fun45500_ip = 140;
                    continue _fun45500
                }
            case 111:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var10 = var4.DEFAULT_ACCESSIBILITY_LABEL;
            case 140:
                var7 = var2.accessibilityHint;
                if (!(var3 === var7)) {
                    _fun45500_ip = 179;
                    continue _fun45500
                }
            case 150:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var7 = var4.DEFAULT_ACCESSIBILITY_HINT;
            case 179:
                var5 = var2.children;
                var2 = _closure1_slot2;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.styles;
                    var2 = var0.container;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var3 = _closure1_slot3;
                    var2 = var3.flatten;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var0[1] = var1;
                    return var0;
                };
                var6 = var2.bind(var3)(var1, var6);
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.styles;
                    var2 = var0.indicator;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var3 = _closure1_slot3;
                    var2 = var3.flatten;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    var0[1] = var1;
                    return var0;
                };
                var8 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var6;
                var6 = null;
                var13 = var6 != var12;
                var9 = undefined;
                if (!var13) {
                    _fun45500_ip = 257;
                    continue _fun45500
                }
            case 254:
                var9 = var12;
            case 257:
                var0.accessible = var9;
                var12 = var6 != var11;
                var9 = undefined;
                if (!var12) {
                    _fun45500_ip = 273;
                    continue _fun45500
                }
            case 270:
                var9 = var11;
            case 273:
                var0.accessibilityRole = var9;
                var11 = var6 != var10;
                var9 = undefined;
                if (!var11) {
                    _fun45500_ip = 289;
                    continue _fun45500
                }
            case 286:
                var9 = var10;
            case 289:
                var0.accessibilityLabel = var9;
                var9 = var6 != var7;
                var6 = undefined;
                if (!var9) {
                    _fun45500_ip = 305;
                    continue _fun45500
                }
            case 302:
                var6 = var7;
            case 305:
                var0.accessibilityHint = var6;
                var6 = true;
                var0.collapsable = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var4 = {};
                var4.style = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'BottomSheetHandle';
    var1.displayName = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5076, 5077]);