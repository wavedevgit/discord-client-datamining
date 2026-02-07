// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var3);
    var3 = 0;
    var7 = var6[var3];
    var5 = metroImportDefault;
    var0 = undefined;
    var5 = var5.bind(var0)(var7);
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Platform;
    var5 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {};
    var7 = 'absolute';
    var6.position = var7;
    var3.absolute = var6;
    var6 = {
        'top': 0,
        'bottom': 0,
        'left': 0,
        'right': 0
    };
    var3.stretch = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot5 = var3;
    var1 = function arg0() {
        _fun69141: for (var _fun69141_ip = 0;;) switch (_fun69141_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.children;
                var6 = var1.visible;
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var3 = undefined;
                var8 = var1.bind(var3)(var2);
                var2 = var8.useWindowDimensions;
                var2 = var2.bind(var8)();
                var10 = var2.height;
                var _closure2_slot0 = var10;
                var2 = var2.width;
                var _closure2_slot1 = var2;
                var8 = _closure1_slot2;
                var9 = new Array(2);
                var9[0] = var10;
                var9[1] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.height = var2;
                    var1 = _closure2_slot1;
                    var0.width = var1;
                    return var0;
                };
                var9 = var8.bind(var3)(var2, var9);
                var2 = new Array(1);
                var2[0] = var9;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var2 = var1.absolute;
                    var0 = new Array(3);
                    var0[0] = var2;
                    var2 = undefined;
                    var0[1] = var2;
                    var1 = var1.stretch;
                    var0[2] = var1;
                    return var0;
                };
                var8 = var8.bind(var3)(var0, var2);
                var2 = _closure1_slot4;
                var0 = 4;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.RCTOverKeyboardView;
                var0 = {};
                var0.visible = var6;
                var5 = _closure1_slot3;
                var4 = {};
                var9 = false;
                var4.collapsable = var9;
                var4.style = var8;
                if (!var6) {
                    _fun69141_ip = 171;
                    continue _fun69141
                }
            case 168:
                var6 = var7;
            case 171:
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 8600, 8588]);