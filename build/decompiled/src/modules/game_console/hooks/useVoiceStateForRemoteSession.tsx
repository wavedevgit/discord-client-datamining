// modules/game_console/hooks/useVoiceStateForRemoteSession.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/hooks/useVoiceStateForRemoteSession.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useVoiceStateForRemoteSession, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var0 = _closure1_slot4;
        var2[2] = var0;
        var1 = function() { // Environment: var0
            _fun66863: for (var _fun66863_ip = 0;;) switch (_fun66863_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getId;
                    var3 = var1.bind(var2)();
                    var2 = _closure1_slot4;
                    var1 = var2.getRemoteSessionId;
                    var2 = var1.bind(var2)();
                    var1 = _closure1_slot3;
                    var0 = var1.getVoiceStateForSession;
                    var1 = var0.bind(var1)(var3, var2);
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = undefined;
                    if (!var2) {
                        _fun66863_ip = 61;
                        continue _fun66863
                    }
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3480, 3478, 566, 2]);