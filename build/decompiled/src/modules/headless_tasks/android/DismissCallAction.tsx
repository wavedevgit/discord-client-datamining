// modules/headless_tasks/android/DismissCallAction.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var3 = dependencyMap;
    var _closure1_slot0 = var2;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var4 = var2.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 1;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.awaitStorage;
            var1 = function() { // Environment: var1
                _fun118266: for (var _fun118266_ip = 0;;) switch (_fun118266_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        var0 = var0.isFullscreenCallUI;
                        if (!var0) {
                            _fun118266_ip = 120;
                            continue _fun118266
                        }
                    case 18:
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var0 = 2;
                        var0 = var8[var0];
                        var7 = undefined;
                        var4 = var2.bind(var7)(var0);
                        var3 = var4.track;
                        var0 = _closure1_slot3;
                        var2 = var0.CALLKIT_CLICKED;
                        var0 = {};
                        var6 = 'decline';
                        var0.action_type = var6;
                        var6 = _closure1_slot0;
                        var5 = 3;
                        var5 = var8[var5];
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.collectChannelAnalyticsMetadataFromId;
                        var5 = _closure2_slot0;
                        var5 = var5.channelId;
                        var11 = var6.bind(var7)(var5);
                        var12 = var0;
                        var5 = copyDataProperties(var12, var11);
                        var0 = var3.bind(var4)(var2, var0);
                    case 120:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 2;
                        var2 = var4[var0];
                        var0 = undefined;
                        var7 = var3.bind(var0)(var2);
                        var6 = var7.track;
                        var2 = _closure1_slot3;
                        var5 = var2.RING_CALL_DECLINED;
                        var2 = {};
                        var9 = 4;
                        var9 = var4[var9];
                        var9 = var3.bind(var0)(var9);
                        var9 = var9.PUSH_NOTIFICATION;
                        var2.location = var9;
                        var1 = _closure2_slot0;
                        var9 = var1.guildId;
                        var2.guild_id = var9;
                        var9 = var1.userId;
                        var2.ringer_user_id = var9;
                        var9 = _closure1_slot0;
                        var8 = 3;
                        var8 = var4[var8];
                        var10 = var9.bind(var0)(var8);
                        var9 = var10.collectChannelAnalyticsMetadataFromId;
                        var8 = var1.channelId;
                        var11 = var9.bind(var10)(var8);
                        var12 = var2;
                        var8 = copyDataProperties(var12, var11);
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = 5;
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.stopRinging;
                        var1 = var1.channelId;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure3_slot0;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1 = arg4;
    var1.exports = var4;
    var1 = 6;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/headless_tasks/android/DismissCallAction.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 15075, 795, 4302, 5579, 8018, 2]);