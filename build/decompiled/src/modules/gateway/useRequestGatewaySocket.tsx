// modules/gateway/useRequestGatewaySocket.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportAll;
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/useRequestGatewaySocket.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.useCanUIRequestGatewaySocket;
        var5 = var3.bind(var4)();
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun99888: for (var _fun99888_ip = 0;;) switch (_fun99888_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun99888_ip = 14;
                        continue _fun99888
                    }
                case 10:
                    var1 = undefined;
                    return var1;
                case 14:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.setRequestedBy;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.stopRequest;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useRequestGatewaySocket = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5283, 659, 2]);