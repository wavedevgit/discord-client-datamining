// modules/lobbies/LobbyUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun73061: for (var _fun73061_ip = 0;;) switch (_fun73061_ip) {
            case 0:
                var5 = arg0;
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun73061_ip = 19;
                    continue _fun73061
                }
            case 12:
                var4 = _closure1_slot2;
            case 19:
                var2 = null;
                var0 = var2 != var5;
                if (!var0) {
                    _fun73061_ip = 125;
                    continue _fun73061
                }
            case 28:
                var1 = var5.linkedLobby;
                var1 = var2 != var1;
                if (!var1) {
                    _fun73061_ip = 66;
                    continue _fun73061
                }
            case 41:
                var3 = var4.can;
                var2 = _closure1_slot3;
                var2 = var2.MANAGE_CHANNELS;
                var1 = var3.bind(var4)(var2, var5);
            case 66:
                if (!var1) {
                    _fun73061_ip = 94;
                    continue _fun73061
                }
            case 69:
                var3 = var4.can;
                var2 = _closure1_slot3;
                var2 = var2.VIEW_CHANNEL;
                var1 = var3.bind(var4)(var2, var5);
            case 94:
                if (!var1) {
                    _fun73061_ip = 122;
                    continue _fun73061
                }
            case 97:
                var3 = var4.can;
                var2 = _closure1_slot3;
                var2 = var2.SEND_MESSAGES;
                var1 = var3.bind(var4)(var2, var5);
            case 122:
                var0 = var1;
            case 125:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/lobbies/LobbyUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.canUnlinkLobbyChannel = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = _closure2_slot0;
            var1 = _closure1_slot2;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanUnlinkLobbyChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3093, 660, 566, 2]);