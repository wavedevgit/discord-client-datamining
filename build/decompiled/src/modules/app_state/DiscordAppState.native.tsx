// modules/app_state/DiscordAppState.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: canUIRequestGatewaySocket, environment: var3
        _fun47038: for (var _fun47038_ip = 0;;) switch (_fun47038_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun47038_ip = 16;
                    continue _fun47038
                }
            case 9:
                var1 = _closure1_slot2;
            case 16:
                var0 = var1.getState;
                var1 = var0.bind(var1)();
                var0 = 'active';
                var0 = var0 === var1;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = arg2;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot2 = var1;
    var1 = {};
    var6 = function() { // Original name: canUIRequestGatewaySocket, environment: var3
        var1 = _closure1_slot3;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var1.canUIRequestGatewaySocket = var6;
    var6 = function() { // Original name: getState, environment: var3
        var1 = _closure1_slot2;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getState = var6;
    var3 = function() { // Original name: useCanUIRequestGatewaySocket, environment: var3
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = _closure1_slot2;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useCanUIRequestGatewaySocket = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_state/DiscordAppState.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5246, 566, 2]);