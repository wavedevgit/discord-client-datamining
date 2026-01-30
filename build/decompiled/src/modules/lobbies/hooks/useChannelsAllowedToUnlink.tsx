// modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0) { // Original name: getChannelsAllowedToUnlink, environment: var1
        _fun115246: for (var _fun115246_ip = 0;;) switch (_fun115246_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var1 = arguments[2];
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun115246_ip = 24;
                    continue _fun115246
                }
            case 17:
                var2 = _closure1_slot2;
            case 24:
                if (!(var1 === var4)) {
                    _fun115246_ip = 35;
                    continue _fun115246
                }
            case 28:
                var1 = _closure1_slot4;
            case 35:
                var _closure2_slot0 = var1;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun115246_ip = 103;
                    continue _fun115246
                }
            case 45:
                var1 = var2.getChannels;
                var2 = var1.bind(var2)(var3);
                var1 = _closure1_slot3;
                var3 = var2[var1];
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.canUnlinkLobbyChannel;
                    var0 = arg0;
                    var1 = var0.channel;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.channel;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun115246_ip = 107;
                continue _fun115246;
            case 103:
                var0 = new Array(0);
            case 107:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var4 = 0;
    var8 = var6[var4];
    var0 = undefined;
    var8 = var7.bind(var0)(var8);
    var _closure1_slot2 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getChannelsAllowedToUnlink = var3;
    var1 = function(arg0) { // Original name: useChannelsAllowedToUnlink, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresArray;
        var5 = _closure1_slot4;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot2;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var2 = _closure1_slot2;
            var1 = _closure1_slot4;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useChannelsAllowedToUnlink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1662, 3050, 9083, 566, 2]);