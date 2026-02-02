// modules/channel_permissions/native/ChannelPermissionsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_permissions/native/ChannelPermissionsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun90754: for (var _fun90754_ip = 0;;) switch (_fun90754_ip) {
            case 0:
                var7 = arg0;
                var6 = arguments[1];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun90754_ip = 14;
                    continue _fun90754
                }
            case 12:
                var6 = false;
            case 14:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 1;
                var3 = var1[var3];
                var9 = var4.bind(var0)(var3);
                var8 = var9.track;
                var3 = _closure1_slot3;
                var5 = var3.OPEN_POPOUT;
                var3 = {};
                var10 = 'Grant Channel Access';
                var3.type = var10;
                var3 = var8.bind(var9)(var5, var3);
                var3 = 2;
                var3 = var1[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var3 = _closure1_slot0;
                var2 = 4;
                var2 = var1[var2];
                var3 = var3.bind(var0)(var2);
                var2 = 3;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var0)(var2, var1);
                var8 = var7.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'channel-add-members-';
                var2 = var2.bind(var1)(var8);
                var1 = {};
                var1.channel = var7;
                var1.canSkip = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
        }
    };
    var2.openAddMembersActionSheet = var3;
    var1 = function arg0, arg1() {
        var6 = arg0;
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var3 = var1[var0];
        var0 = undefined;
        var8 = var4.bind(var0)(var3);
        var7 = var8.track;
        var3 = _closure1_slot3;
        var5 = var3.OPEN_POPOUT;
        var3 = {};
        var9 = 'Manage Channel Access';
        var3.type = var9;
        var3 = var7.bind(var8)(var5, var3);
        var3 = 2;
        var3 = var1[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var3 = _closure1_slot0;
        var2 = 4;
        var2 = var1[var2];
        var3 = var3.bind(var0)(var2);
        var2 = 5;
        var2 = var1[var2];
        var1 = var1.paths;
        var3 = var3.bind(var0)(var2, var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'channel-members-';
        var2 = var2.bind(var1)(var6);
        var1 = {};
        var1.channelId = var6;
        var6 = arg1;
        var1.guildId = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openChannelMembersActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 3239, 8101, 1307, 11746, 2]);