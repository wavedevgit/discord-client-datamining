// design/components/Pile/native/GuildIconPile.native.tsx
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
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Pile/native/GuildIconPile.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62296: for (var _fun62296_ip = 0;;) switch (_fun62296_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.size;
                var10 = var0.totalCount;
                var15 = var0.names;
                var5 = var0.children;
                var0 = _closure1_slot2;
                var2 = var0.Children;
                var0 = var2.count;
                var9 = var0.bind(var2)(var5);
                var8 = _closure1_slot0;
                var13 = _closure1_slot1;
                var7 = 2;
                var0 = var13[var7];
                var3 = undefined;
                var0 = var8.bind(var3)(var0);
                var0 = var0.ImageSizes;
                var12 = var0[var1];
                var2 = _closure1_slot4;
                var11 = 3;
                var0 = var13[var11];
                var0 = var8.bind(var3)(var0);
                var1 = var0.Pile;
                var0 = {};
                var4 = 4;
                var4 = var13[var4];
                var14 = var8.bind(var3)(var4);
                var4 = var14.getListSummaryLabel;
                var4 = var4.bind(var14)(var15, var10);
                var0['aria-label'] = var4;
                var4 = 5;
                var4 = var13[var4];
                var4 = var8.bind(var3)(var4);
                var4 = var4.CutoutShape;
                var4 = var4.RoundedRect;
                var0.shape = var4;
                var0.size = var12;
                var4 = 40;
                var8 = var12 <= var4;
                var4 = var11;
                if (!var8) {
                    _fun62296_ip = 182;
                    continue _fun62296
                }
            case 179:
                var4 = var7;
            case 182:
                var0.gap = var4;
                var4 = 0.25;
                var0.depthX = var4;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                var5 = var5 != var10;
                if (!var5) {
                    _fun62296_ip = 222;
                    continue _fun62296
                }
            case 218:
                var5 = var9 < var10;
            case 222:
                if (!var5) {
                    _fun62296_ip = 283;
                    continue _fun62296
                }
            case 225:
                var8 = _closure1_slot3;
                var7 = _closure1_slot0;
                var13 = _closure1_slot1;
                var6 = 6;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.PileOverflow;
                var6 = {};
                var6.size = var12;
                var11 = var12 / var11;
                var6.borderRadius = var11;
                var9 = var10 - var9;
                var6.value = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 283:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildIconPile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 7420, 7833, 7835, 5462, 7834, 2]);