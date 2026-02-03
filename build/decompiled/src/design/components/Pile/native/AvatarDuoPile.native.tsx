// design/components/Pile/native/AvatarDuoPile.native.tsx
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
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Pile/native/AvatarDuoPile.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88281: for (var _fun88281_ip = 0;;) switch (_fun88281_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.size;
                var4 = var2.children;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.size = var0;
                var1.children = var0;
                var13 = {};
                var12 = var2;
                var11 = var1;
                var7 = copyDataProperties(var13, var12, var11);
                var3 = _closure1_slot2;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.Pile;
                var0 = {
                    'aria-label': null,
                    'shape': null,
                    'size': null,
                    'gap': 4,
                    'depthX': 0.5,
                    'depthY': 0.5
                };
                var6 = 'aria-label';
                var6 = var6 in var7;
                if (var6) {
                    _fun88281_ip = 138;
                    continue _fun88281
                }
            case 100:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 3;
                var6 = var10[var6];
                var10 = var9.bind(var2)(var6);
                var9 = var10.getListSummaryLabel;
                var6 = var7.names;
                var6 = var9.bind(var10)(var6);
                _fun88281_ip = 144;
                continue _fun88281;
            case 138:
                var6 = var7["aria-label"];
            case 144:
                var0['aria-label'] = var6;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 4;
                var6 = var9[var6];
                var6 = var7.bind(var2)(var6);
                var6 = var6.CutoutShape;
                var6 = var6.Circle;
                var0.shape = var6;
                var6 = 5;
                var6 = var9[var6];
                var7 = var7.bind(var2)(var6);
                var6 = var7.isArray;
                var6 = var6.bind(var7)(var8);
                if (var6) {
                    _fun88281_ip = 245;
                    continue _fun88281
                }
            case 213:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 6;
                var5 = var7[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.AVATAR_SIZE_MAP;
                var5 = var5[var8];
                _fun88281_ip = 264;
                continue _fun88281;
            case 245:
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.AVATAR_SIZE_MAP;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var5 = var7.bind(var8)(var6);
            case 264:
                var0.size = var5;
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.AvatarDuoPile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 7801, 7803, 5452, 22, 5449, 2]);