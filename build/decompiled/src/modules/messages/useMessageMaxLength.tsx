// modules/messages/useMessageMaxLength.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun61512: for (var _fun61512_ip = 0;;) switch (_fun61512_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.canUseIncreasedMessageLength;
                var0 = var4.getCurrentUser;
                var0 = var0.bind(var4)();
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun61512_ip = 57;
                    continue _fun61512
                }
            case 51:
                var0 = _closure1_slot5;
                _fun61512_ip = 61;
                continue _fun61512;
            case 57:
                var0 = _closure1_slot4;
            case 61:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_MESSAGE_LENGTH_PREMIUM;
    var _closure1_slot4 = var6;
    var3 = var3.MAX_MESSAGE_LENGTH;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/useMessageMaxLength.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = _closure1_slot3;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function() {
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.getMaxMessageLength = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 660, 3068, 566, 2]);