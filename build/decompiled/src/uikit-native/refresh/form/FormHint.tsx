// uikit-native/refresh/form/FormHint.tsx
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'fontSize': 14,
        'marginBottom': 0
    };
    var9 = 4;
    var10 = var5[var9];
    var9 = metroImportDefault;
    var9 = var9.bind(var0)(var10);
    var9 = var9.colors;
    var9 = var9.TEXT_MUTED;
    var8.color = var9;
    var3.formHintText = var8;
    var8 = {};
    var9 = 12;
    var8.paddingHorizontal = var9;
    var3.redesignHorizontalPadding = var8;
    var8 = {};
    var9 = 16;
    var8.paddingHorizontal = var9;
    var3.horizonatalPadding = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormHint.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun47899: for (var _fun47899_ip = 0;;) switch (_fun47899_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.inset;
                var4 = undefined;
                if (!(var8 === var4)) {
                    _fun47899_ip = 17;
                    continue _fun47899
                }
            case 15:
                var8 = false;
            case 17:
                var7 = var0.style;
                var5 = var0.children;
                var0 = _closure1_slot4;
                var6 = var0.bind(var4)();
                var3 = _closure1_slot2;
                var2 = var3.useContext;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 5;
                var0 = var10[var0];
                var0 = var9.bind(var4)(var0);
                var0 = var0.RedesignCompatContext;
                var0 = var2.bind(var3)(var0);
                var3 = _closure1_slot3;
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                if (var0) {
                    _fun47899_ip = 164;
                    continue _fun47899
                }
            case 94:
                var0 = 7;
                var0 = var9[var0];
                var0 = var2.bind(var4)(var0);
                var1 = var0.LegacyText;
                var0 = {};
                var11 = var6.formHintText;
                var10 = new Array(3);
                var10[0] = var11;
                var11 = !var8;
                if (!var11) {
                    _fun47899_ip = 140;
                    continue _fun47899
                }
            case 134:
                var11 = var6.horizonatalPadding;
            case 140:
                var10[1] = var11;
                var10[2] = var7;
                var0.style = var10;
                var0.children = var5;
                var0 = var3.bind(var4)(var1, var0);
                _fun47899_ip = 233;
                continue _fun47899;
            case 164:
                var1 = 6;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var8 = !var8;
                if (!var8) {
                    _fun47899_ip = 207;
                    continue _fun47899
                }
            case 201:
                var8 = var6.redesignHorizontalPadding;
            case 207:
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 233:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4860, 3900, 4839, 2]);