// modules/auth/native/useLoginReset.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/useLoginReset.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot2;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                _fun60976: for (var _fun60976_ip = 0;;) switch (_fun60976_ip) {
                    case 0:
                        var2 = _closure1_slot3;
                        var1 = var2.isAuthenticated;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun60976_ip = 52;
                            continue _fun60976
                        }
                    case 20:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.loginReset;
                        var0 = var0.bind(var1)();
                    case 52:
                        var0 = undefined;
                        return var0;
                }
            };
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 4557, 2]);