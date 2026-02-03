// uikit-native/refresh/Badges.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
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
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var4 = var6[var3];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var11 = {
        'borderRadius': null,
        'paddingHorizontal': 4,
        'paddingVertical': 2
    };
    var9 = 4;
    var12 = var6[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var11.borderRadius = var12;
    var4.base = var11;
    var11 = {};
    var12 = var6[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FEEDBACK_CRITICAL;
    var11.backgroundColor = var12;
    var4.danger = var11;
    var11 = {};
    var12 = var6[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var11.backgroundColor = var12;
    var4.info = var11;
    var11 = {};
    var12 = var6[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BRAND_260;
    var11.backgroundColor = var12;
    var4.brand = var11;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createStyles;
    var3 = {};
    var8 = {
        'textAlign': 'center',
        'textTransform': 'uppercase'
    };
    var3.text = var8;
    var8 = {};
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var8.color = var11;
    var3.dangerText = var8;
    var8 = {};
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var8.color = var11;
    var3.infoText = var8;
    var8 = {};
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.BRAND_560;
    var8.color = var9;
    var3.brandText = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'danger';
    var3.DANGER = var4;
    var4 = 'info';
    var3.INFO = var4;
    var4 = 'brand';
    var3.BRAND = var4;
    var4 = 'normal';
    var3.NORMAL = var4;
    var _closure1_slot6 = var3;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/Badges.tsx';
    var4 = var5.bind(var6)(var4);
    var2.BadgeColors = var3;
    var1 = function arg0() {
        _fun66915: for (var _fun66915_ip = 0;;) switch (_fun66915_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.color;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun66915_ip = 27;
                    continue _fun66915
                }
            case 14:
                var1 = _closure1_slot6;
                var9 = var1.DANGER;
            case 27:
                var10 = var0.style;
                var6 = var0.text;
                var8 = var0.textStyle;
                var0 = _closure1_slot4;
                var5 = var0.bind(var3)();
                var0 = _closure1_slot5;
                var7 = var0.bind(var3)();
                var11 = var5[var9];
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = 'Text';
                var0 = var2.bind(var1)(var9, var0);
                var9 = var7[var0];
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var12 = var5.base;
                var5 = new Array(3);
                var5[0] = var12;
                var5[1] = var11;
                var5[2] = var10;
                var0.style = var5;
                var5 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 5;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var10 = 'text-xs/bold';
                var4.variant = var10;
                var10 = var7.text;
                var7 = new Array(3);
                var7[0] = var10;
                var7[1] = var9;
                var7[2] = var8;
                var4.style = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TextBadge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3932, 2]);