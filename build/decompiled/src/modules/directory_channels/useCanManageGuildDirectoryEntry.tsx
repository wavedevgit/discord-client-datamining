// modules/directory_channels/useCanManageGuildDirectoryEntry.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/useCanManageGuildDirectoryEntry.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun71981: for (var _fun71981_ip = 0;;) switch (_fun71981_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 4;
                var5 = var6[var2];
                var3 = undefined;
                var9 = var4.bind(var3)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot3;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guildId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var _closure2_slot1 = var5;
                var5 = var6[var2];
                var9 = var4.bind(var3)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot2;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var _closure2_slot2 = var5;
                var5 = var6[var2];
                var9 = var4.bind(var3)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var5;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot4;
                    var2 = var3.can;
                    var0 = _closure1_slot5;
                    var1 = var0.ADMINISTRATOR;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var8.bind(var9)(var7, var1);
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot4;
                    var2 = var3.can;
                    var0 = _closure1_slot5;
                    var1 = var0.MANAGE_MESSAGES;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2, var0);
                var0 = {};
                var0.isEntryAdmin = var1;
                var3 = var1;
                if (var1) {
                    _fun71981_ip = 201;
                    continue _fun71981
                }
            case 198:
                var3 = var2;
            case 201:
                var0.canEdit = var3;
                if (var1) {
                    _fun71981_ip = 212;
                    continue _fun71981
                }
            case 209:
                var1 = var2;
            case 212:
                var0.canRemove = var1;
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = var3.can;
            var0 = _closure1_slot5;
            var1 = var0.SEND_MESSAGES;
            var0 = _closure2_slot0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanCreateOrAddGuildInDirectory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 3093, 660, 566, 2]);