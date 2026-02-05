// components_native/common/ActionButton.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/ActionButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72809: for (var _fun72809_ip = 0;;) switch (_fun72809_ip) {
            case 0:
                var8 = arg0;
                var10 = var8.IconComponent;
                var1 = var8.type;
                var7 = 'tertiary';
                var0 = 'positive';
                if (!(var0 === var1)) {
                    _fun72809_ip = 29;
                    continue _fun72809
                }
            case 25:
                var7 = 'active';
            case 29:
                var5 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 3;
                var1 = var9[var1];
                var3 = undefined;
                var2 = var5.bind(var3)(var1);
                var1 = var2.useButtonTextColorStyles;
                var1 = var1.bind(var2)(var7);
                var6 = var1.color;
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var8.styles;
                var0.style = var4;
                var4 = 4;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.IconButton;
                var4 = {};
                var9 = {};
                var9.color = var6;
                var6 = 'sm';
                var9.size = var6;
                var9 = var2.bind(var3)(var10, var9);
                var4.icon = var9;
                var9 = var8.onPress;
                var4.onPress = var9;
                var8 = var8.accessibilityLabel;
                var4.accessibilityLabel = var8;
                var4.variant = var7;
                var4.size = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4089, 7530, 2]);