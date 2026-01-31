// design/components/Stack/native/Stack.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot1 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        _fun37373: for (var _fun37373_ip = 0;;) switch (_fun37373_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var2 = '100%';
                var1.width = var2;
                var2 = arg0;
                var1.gap = var2;
                var2 = arg2;
                var1.alignItems = var2;
                var2 = arg3;
                var1.justifyContent = var2;
                var2 = 'column';
                var4 = 'horizontal';
                var3 = arg1;
                if (!(var4 === var3)) {
                    _fun37373_ip = 54;
                    continue _fun37373
                }
            case 50:
                var2 = 'row';
            case 54:
                var1.flexDirection = var2;
                var0.stack = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Stack/native/Stack.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun37374: for (var _fun37374_ip = 0;;) switch (_fun37374_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.spacing;
                var9 = 8;
                var3 = undefined;
                if (!(var3 !== var1)) {
                    _fun37374_ip = 20;
                    continue _fun37374
                }
            case 17:
                var9 = var1;
            case 20:
                var1 = var0.direction;
                var8 = 'vertical';
                if (!(var3 !== var1)) {
                    _fun37374_ip = 37;
                    continue _fun37374
                }
            case 34:
                var8 = var1;
            case 37:
                var1 = var0.align;
                var6 = 'stretch';
                if (!(var3 !== var1)) {
                    _fun37374_ip = 54;
                    continue _fun37374
                }
            case 51:
                var6 = var1;
            case 54:
                var1 = var0.justify;
                var2 = 'flex-start';
                if (!(var3 !== var1)) {
                    _fun37374_ip = 73;
                    continue _fun37374
                }
            case 70:
                var2 = var1;
            case 73:
                var4 = var0.children;
                var7 = var0.style;
                var5 = var0.onLayout;
                var1 = _closure1_slot2;
                var14 = undefined;
                var13 = var9;
                var12 = var8;
                var11 = var6;
                var10 = var2;
                var6 = var14[var1](var13, var12, var11, var10, var9);
                var2 = _closure1_slot1;
                var1 = _closure1_slot0;
                var0 = {};
                var8 = var6.stack;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var0.style = var6;
                var0.onLayout = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.Stack = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 2]);