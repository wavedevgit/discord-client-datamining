// design/components/Modal/native/ModalActionButton.native.tsx
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
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var6 = var3.Fragment;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 12;
    var8.marginTop = var9;
    var3.spacer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Modal/native/ModalActionButton.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ModalActionButton, environment: var1
        _fun72927: for (var _fun72927_ip = 0;;) switch (_fun72927_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.variant;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.variant = var0;
                var14 = {};
                var13 = var2;
                var12 = var1;
                var8 = copyDataProperties(var14, var13, var12);
                var0 = _closure1_slot6;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = 'secondary';
                var6 = var4 === var9;
                if (!var6) {
                    _fun72927_ip = 91;
                    continue _fun72927
                }
            case 65:
                var10 = _closure1_slot3;
                var7 = _closure1_slot2;
                var4 = {};
                var11 = var11.spacer;
                var4.style = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 91:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot3;
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 4;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var14 = var5;
                var13 = var8;
                var8 = copyDataProperties(var14, var13);
                var8 = 'variant';
                var5[var8] = var9;
                var9 = 'lg';
                var8 = 'size';
                var5[var8] = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ModalActionButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4043, 2]);