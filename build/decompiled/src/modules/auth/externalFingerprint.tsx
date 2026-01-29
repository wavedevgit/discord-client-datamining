// modules/auth/externalFingerprint.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/externalFingerprint.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: externalFingerprint, environment: var1
        _fun118305: for (var _fun118305_ip = 0;;) switch (_fun118305_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.isAuthenticated;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun118305_ip = 133;
                    continue _fun118305
                }
            case 20:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var3 = var6[var1];
                var2 = undefined;
                var4 = var5.bind(var2)(var3);
                var3 = var4.parse;
                var1 = var6[var1];
                var6 = var5.bind(var2)(var1);
                var5 = var6.extract;
                var1 = arg0;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var1);
                var3 = var1.fingerprint;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun118305_ip = 133;
                    continue _fun118305
                }
            case 88:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'FINGERPRINT';
                var0.type = var4;
                var0.fingerprint = var3;
                var0 = var1.bind(var2)(var0);
            case 133:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3299, 806, 2]);