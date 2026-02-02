// design/components/Modal/native/ModalScreen.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var10;
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
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexDirection': 'column'
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Modal/native/ModalScreen.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun52950: for (var _fun52950_ip = 0;;) switch (_fun52950_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.backgroundColor;
                var4 = var0.children;
                var1 = _closure1_slot4;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 5;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var7 = var1.insets;
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var6 = var9.container;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var10 = null;
                if (!(var10 == var8)) {
                    _fun52950_ip = 97;
                    continue _fun52950
                }
            case 87:
                var9 = var9.container;
                var8 = var9.backgroundColor;
            case 97:
                var6.backgroundColor = var8;
                var8 = var7.left;
                var6.paddingLeft = var8;
                var8 = var7.right;
                var6.paddingRight = var8;
                var7 = var7.bottom;
                var6.paddingBottom = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ModalScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4858, 2]);