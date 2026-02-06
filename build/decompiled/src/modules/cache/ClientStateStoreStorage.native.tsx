// modules/cache/ClientStateStoreStorage.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/cache/ClientStateStoreStorage.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96750: for (var _fun96750_ip = 0;;) switch (_fun96750_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun96750_ip = 79;
                    continue _fun96750
                }
            case 41:
                var2 = _closure1_slot3;
                var5 = var2.DCDFastConnectManager;
                var4 = var5.setClientState;
                var3 = null;
                var7 = var3 != var6;
                var2 = null;
                if (!var7) {
                    _fun96750_ip = 71;
                    continue _fun96750
                }
            case 68:
                var2 = var6;
            case 71:
                var2 = var4.bind(var5)(var2, var3);
                _fun96750_ip = 143;
                continue _fun96750;
            case 79:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.setClientState;
                var1 = null;
                var5 = var1 == var6;
                var4 = undefined;
                if (var5) {
                    _fun96750_ip = 125;
                    continue _fun96750
                }
            case 116:
                var5 = var6.toString;
                var4 = var5.bind(var6)();
            case 125:
                var5 = var1 != var4;
                var1 = undefined;
                if (!var5) {
                    _fun96750_ip = 137;
                    continue _fun96750
                }
            case 134:
                var1 = var4;
            case 137:
                var1 = var2.bind(var3)(var1, var0);
            case 143:
                return var0;
        }
    };
    var2.setClientState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 480, 2]);