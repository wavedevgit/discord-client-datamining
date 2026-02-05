// modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useState;
        var0 = false;
        var0 = var3.bind(var4)(var0);
        var10 = _closure1_slot2;
        var9 = undefined;
        var8 = 2;
        var0 = var10.bind(var9)(var0, var8);
        var2 = 0;
        var3 = var0[var2];
        var7 = 1;
        var0 = var0[var7];
        var _closure2_slot2 = var0;
        var0 = var4.useState;
        var0 = var0.bind(var4)(var9);
        var0 = var10.bind(var9)(var0, var8);
        var2 = var0[var2];
        var0 = var0[var7];
        var _closure2_slot3 = var0;
        var0 = {};
        var0.isLoading = var3;
        var0.error = var2;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg0) { // Environment: var1
            _fun102492: for (var _fun102492_ip = 0;;) switch (_fun102492_ip) {
                case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun102492_ip = 141;
                        continue _fun102492
                    }
                case 18:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = arg0;
                    if (var3) {
                        _fun102492_ip = 57;
                        continue _fun102492
                    }
                case 49:
                    var3 = var2.disablePowerupForGuild;
                    _fun102492_ip = 63;
                    continue _fun102492;
                case 57:
                    var3 = var2.enablePowerupForGuild;
                case 63:
                    var5 = _closure2_slot2;
                    var2 = true;
                    var2 = var5.bind(var4)(var2);
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var4)(var4);
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var1.skuId;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.catch;
                    var1 = function(arg0) { // Environment: var0
                        _fun102493: for (var _fun102493_ip = 0;;) switch (_fun102493_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = _closure2_slot3;
                                var1 = var0.body;
                                var4 = var1.message;
                                var1 = null;
                                var5 = var1 != var4;
                                var2 = undefined;
                                var1 = undefined;
                                if (!var5) {
                                    _fun102493_ip = 36;
                                    continue _fun102493
                                }
                            case 33:
                                var1 = var4;
                            case 36:
                                var1 = var3.bind(var2)(var1);
                                throw var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.finally;
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                case 141:
                    var0 = global;
                    var1 = var0.Promise;
                    var0 = var1.resolve;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.onToggle = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 9996, 2]);