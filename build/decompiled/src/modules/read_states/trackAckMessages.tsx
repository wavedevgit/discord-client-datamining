// modules/read_states/trackAckMessages.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/read_states/trackAckMessages.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun93489: for (var _fun93489_ip = 0;;) switch (_fun93489_ip) {
            case 0:
                var6 = arg0;
                var1 = _closure1_slot2;
                var0 = var1.getChannel;
                var8 = var0.bind(var1)(var6);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot6;
                var2 = var1.ACK_MESSAGES;
                var1 = {};
                var1.channel_id = var6;
                var6 = null;
                var7 = var6 == var8;
                var6 = undefined;
                if (var7) {
                    _fun93489_ip = 85;
                    continue _fun93489
                }
            case 75:
                var7 = var8.getGuildId;
                var6 = var7.bind(var8)();
            case 85:
                var1.guild_id = var6;
                var6 = arg1;
                var1.location = var6;
                var6 = _closure1_slot4;
                var5 = var6.getGuildsArray;
                var7 = var5.bind(var6)();
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var4 = _closure1_slot3;
                    var3 = var4.hasUnread;
                    var2 = var0.id;
                    var14 = var3.bind(var4)(var2);
                    var3 = var4.getMentionCount;
                    var2 = var0.id;
                    var12 = var3.bind(var4)(var2);
                    var2 = _closure1_slot5;
                    var3 = var2.isMuted;
                    var1 = var0.id;
                    var10 = var3.bind(var2)(var1);
                    var1 = var2.resolveGuildUnreadSetting;
                    var8 = var1.bind(var2)(var0);
                    var16 = var0.id;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var17 = '';
                    var0 = ',';
                    var15 = var0;
                    var13 = var0;
                    var11 = var0;
                    var9 = var0;
                    var0 = var17[var2](var16, var15, var14, var13, var12, var11, var10, var9, var8, var7);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.guild_unread_statuses = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 8659, 1410, 4303, 660, 4302, 2]);