// modules/user_profile/utils/getHigherContrastColor.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/utils/getHigherContrastColor.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72836: for (var _fun72836_ip = 0;;) switch (_fun72836_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.backgroundColor;
                var3 = var0.colors;
                var1 = _closure1_slot2;
                var7 = undefined;
                var0 = 2;
                var0 = var1.bind(var7)(var3, var0);
                var1 = 0;
                var1 = var0[var1];
                var8 = 1;
                var0 = var0[var8];
                var4 = 'string';
                var3 = typeof var9;
                var6 = var9;
                if (!(var4 === var3)) {
                    _fun72836_ip = 86;
                    continue _fun72836
                }
            case 58:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var8];
                var5 = var5.bind(var7)(var3);
                var3 = var5.hex2int;
                var6 = var3.bind(var5)(var9);
            case 86:
                var3 = typeof var1;
                var10 = var1;
                if (!(var4 === var3)) {
                    _fun72836_ip = 124;
                    continue _fun72836
                }
            case 96:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var8];
                var5 = var5.bind(var7)(var3);
                var3 = var5.hex2int;
                var10 = var3.bind(var5)(var1);
            case 124:
                var3 = typeof var0;
                var5 = var0;
                if (!(var4 === var3)) {
                    _fun72836_ip = 162;
                    continue _fun72836
                }
            case 134:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var8];
                var4 = var4.bind(var7)(var3);
                var3 = var4.hex2int;
                var5 = var3.bind(var4)(var0);
            case 162:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var8];
                var9 = var4.bind(var7)(var3);
                var3 = var9.getContrast;
                var3 = var3.bind(var9)(var6, var10);
                var2 = var2[var8];
                var4 = var4.bind(var7)(var2);
                var2 = var4.getContrast;
                var2 = var2.bind(var4)(var6, var5);
                if (!(var3 > var2)) {
                    _fun72836_ip = 219;
                    continue _fun72836
                }
            case 216:
                var0 = var1;
            case 219:
                return var0;
        }
    };
    var2.getHigherContrastColor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 668, 2]);