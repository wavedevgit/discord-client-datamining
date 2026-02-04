// modules/guild_scheduled_events/utils/ShareEventUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/utils/ShareEventUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = var0.guildId;
        var3 = var0.guildEventId;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'https://discord.com/events/';
        var0 = '/';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var2.SHARE_EVENT_DETAILS_LINK = var3;
    var1 = function arg0, arg1, arg2() {
        _fun66156: for (var _fun66156_ip = 0;;) switch (_fun66156_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                if (!var0) {
                    _fun66156_ip = 12;
                    continue _fun66156
                }
            case 9:
                var0 = var1;
            case 12:
                if (!var0) {
                    _fun66156_ip = 24;
                    continue _fun66156
                }
            case 15:
                var2 = null;
                var1 = arg2;
                var0 = var2 != var1;
            case 24:
                return var0;
        }
    };
    var2.canUseInviteModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);