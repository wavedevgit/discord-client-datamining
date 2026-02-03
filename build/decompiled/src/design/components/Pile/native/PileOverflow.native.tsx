// design/components/Pile/native/PileOverflow.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = metroImportAll;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot2 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsxs;
    var _closure1_slot4 = var7;
    var6 = var6.jsx;
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': null,
        'flexShrink': 0
    };
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_STRONG;
    var9.backgroundColor = var10;
    var6.container = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var7 = var3.Map;
    var3 = new Array(6);
    var6 = [64, 'text-lg/semibold'];
    var3[0] = var6;
    var6 = [48, 'text-md/semibold'];
    var3[1] = var6;
    var6 = [40, 'text-md/semibold'];
    var3[2] = var6;
    var6 = [30, 'text-sm/semibold'];
    var3[3] = var6;
    var6 = [24, 'text-xs/semibold'];
    var3[4] = var6;
    var6 = [16, 'text-xxs/semibold'];
    var3[5] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var15 = var6;
    var14 = var3;
    var3 = new var15[var7](var14, var13);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Pile/native/PileOverflow.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62234: for (var _fun62234_ip = 0;;) switch (_fun62234_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.size;
                var6 = var0.borderRadius;
                var10 = var0.value;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 6;
                var0 = var2[var0];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var0 = var0.locale;
                    return var0;
                };
                var9 = var2.bind(var4)(var1, var0);
                var0 = _closure1_slot6;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = var4.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var5.borderRadius = var6;
                var5.minWidth = var12;
                var5.height = var12;
                var6 = 32;
                var8 = var12 >= var6;
                var6 = 4;
                if (!var8) {
                    _fun62234_ip = 135;
                    continue _fun62234
                }
            case 132:
                var6 = 8;
            case 135:
                var5.paddingHorizontal = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 7;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 2
                };
                var11 = _closure1_slot7;
                var8 = var11.get;
                var11 = var8.bind(var11)(var12);
                var8 = null;
                var12 = var8 != var11;
                var8 = 'text-md/semibold';
                if (!var12) {
                    _fun62234_ip = 220;
                    continue _fun62234
                }
            case 217:
                var8 = var11;
            case 220:
                var4.variant = var8;
                var8 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 8;
                var7 = var11[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.humanizeValue;
                var8 = var7.bind(var8)(var10, var9);
                var7 = ['+'];
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PileOverflow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1685, 33, 1297, 671, 632, 3941, 1604, 2]);