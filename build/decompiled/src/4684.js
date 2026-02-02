// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = ['tintColor', 'style'];
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var3);
    var0 = 0;
    var5 = var6[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var3 = 1;
    var5 = var6[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Animated;
    var _closure1_slot4 = var5;
    var5 = var3.Platform;
    var5 = var3.StyleSheet;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'fontSize': 20,
        'fontFamily': 'sans-serif-medium',
        'fontWeight': 'normal'
    };
    var3.title = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot6 = var3;
    var1 = function arg0() {
        _fun43543: for (var _fun43543_ip = 0;;) switch (_fun43543_ip) {
            case 0:
                var4 = arg0;
                var10 = var4.tintColor;
                var8 = var4.style;
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var3 = undefined;
                var7 = var2.bind(var3)(var4, var1);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useTheme;
                var1 = var1.bind(var2)();
                var11 = var1.colors;
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var1 = var1.Text;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var0 = _closure1_slot6;
                var9 = var0.title;
                var0 = new Array(3);
                var0[0] = var9;
                var9 = {};
                if (!(var3 === var10)) {
                    _fun43543_ip = 124;
                    continue _fun43543
                }
            case 119:
                var10 = var11.text;
            case 124:
                var9.color = var10;
                var0[1] = var9;
                var0[2] = var8;
                var4.style = var0;
                var0 = {
                    'accessibilityRole': 'header',
                    'aria-level': '1',
                    'numberOfLines': 1
                };
                var0 = var5.bind(var6)(var0, var7, var4);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 1470]);