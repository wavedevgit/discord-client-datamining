// ../discord_common/js/shared/timeRequire.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/shared/timeRequire.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun40358: for (var _fun40358_ip = 0;;) switch (_fun40358_ip) {
            case 0:
                var9 = arg0;
                var1 = global;
                var2 = var1.Date;
                var0 = var2.now;
                var5 = var0.bind(var2)();
                var0 = arg1;
                var4 = undefined;
                var0 = var0.bind(var4)();
                var6 = var1.Date;
                var2 = var6.now;
                var2 = var2.bind(var6)();
                var5 = var2 - var5;
                var2 = 5;
                if (!(var5 >= var2)) {
                    _fun40358_ip = 273;
                    continue _fun40358
                }
            case 60:
                var6 = _closure1_slot0;
                var6 = var6.getModules;
                var7 = 'function';
                var6 = typeof var6;
                if (!(var7 !== var6)) {
                    _fun40358_ip = 147;
                    continue _fun40358
                }
            case 84:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 0;
                var6 = var8[var6];
                var10 = var7.bind(var4)(var6);
                var8 = var10.mark;
                var6 = var1.HermesInternal;
                var7 = var6.concat;
                var6 = 'Require ';
                var7 = var7.bind(var6)(var9);
                var6 = '🏃';
                var6 = var8.bind(var10)(var6, var7, var5);
                _fun40358_ip = 273;
                continue _fun40358;
            case 147:
                var7 = _closure1_slot0;
                var6 = var7.getModules;
                var8 = var6.bind(var7)();
                var _closure2_slot0 = var8;
                var7 = var1.Object;
                var6 = var7.keys;
                var7 = var6.bind(var7)(var8);
                var6 = var7.filter;
                var3 = function(arg0) { // Environment: var3
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var1[var0];
                    var0 = var0.isInitialized;
                    return var0;
                };
                var3 = var6.bind(var7)(var3);
                var12 = var3.length;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 0;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.mark;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var15 = 'Require ';
                var13 = ' (';
                var11 = ' modules)';
                var14 = var9;
                var2 = var15[var7](var14, var13, var12, var11, var10);
                var1 = '🏃';
                var1 = var3.bind(var4)(var1, var2, var5);
            case 273:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [20, 2]);