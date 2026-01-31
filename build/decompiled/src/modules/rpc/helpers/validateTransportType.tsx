// modules/rpc/helpers/validateTransportType.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.TransportTypes;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RPCErrors;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/helpers/validateTransportType.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: validateTransportType, environment: var1
        _fun98184: for (var _fun98184_ip = 0;;) switch (_fun98184_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot2;
                var1 = var1.IPC;
                if (!(var1 !== var2)) {
                    _fun98184_ip = 34;
                    continue _fun98184
                }
            case 20:
                var1 = _closure1_slot2;
                var1 = var1.POST_MESSAGE;
                if (!(var1 === var2)) {
                    _fun98184_ip = 38;
                    continue _fun98184
                }
            case 34:
                var1 = undefined;
                return var1;
            case 38:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot3;
                var0 = var0.INVALID_COMMAND;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'Invalid transport.';
                var6 = var1;
                var5 = var2;
                var0 = new var6[var3](var5, var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.validateTransportType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3315, 660, 7889, 2]);