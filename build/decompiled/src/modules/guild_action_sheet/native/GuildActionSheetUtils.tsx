// modules/guild_action_sheet/native/GuildActionSheetUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_action_sheet/native/GuildActionSheetUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun80686: for (var _fun80686_ip = 0;;) switch (_fun80686_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun80686_ip = 142;
                        continue _fun80686
                    }
                case 16:
                    var0 = {};
                    var6 = _closure1_slot2;
                    var3 = var6.canAccessGuildSettings;
                    var5 = _closure2_slot0;
                    var3 = var3.bind(var6)(var5);
                    var0.canAccessSettings = var3;
                    var4 = var6.can;
                    var3 = _closure1_slot3;
                    var3 = var3.CHANGE_NICKNAME;
                    var3 = var4.bind(var6)(var3, var5);
                    if (var3) {
                        _fun80686_ip = 100;
                        continue _fun80686
                    }
                case 70:
                    var7 = _closure1_slot2;
                    var6 = var7.can;
                    var4 = _closure1_slot3;
                    var5 = var4.MANAGE_NICKNAMES;
                    var4 = _closure2_slot0;
                    var3 = var6.bind(var7)(var5, var4);
                case 100:
                    var0.canEditNickname = var3;
                    var4 = _closure1_slot2;
                    var3 = var4.can;
                    var2 = _closure1_slot3;
                    var2 = var2.MANAGE_CHANNELS;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.canManageChannels = var1;
                    _fun80686_ip = 156;
                    continue _fun80686;
                case 142:
                    var0 = {
                        'canAccessSettings': false,
                        'canEditNickname': false,
                        'canManageChannels': false
                    };
                case 156:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGuildActionSheetPermissions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3050, 660, 566, 2]);