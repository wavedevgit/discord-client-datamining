// modules/message_request/hooks/useIsMessageRequest.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/hooks/useIsMessageRequest.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useIsMessageRequest, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot2;
            var1 = var2.isMessageRequest;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useIsMessageRequest = var3;
    var1 = function(arg0) { // Original name: useIsEitherTypeOfMessageRequest, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot2;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun77120: for (var _fun77120_ip = 0;;) switch (_fun77120_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun77120_ip = 63;
                        continue _fun77120
                    }
                case 16:
                    var5 = _closure1_slot2;
                    var4 = var5.isMessageRequest;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    if (var1) {
                        _fun77120_ip = 60;
                        continue _fun77120
                    }
                case 41:
                    var4 = _closure1_slot3;
                    var3 = var4.isSpam;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
                case 60:
                    var0 = var1;
                case 63:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsEitherTypeOfMessageRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3923, 3928, 566, 2]);