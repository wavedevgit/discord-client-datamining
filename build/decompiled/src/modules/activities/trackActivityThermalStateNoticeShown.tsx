// modules/activities/trackActivityThermalStateNoticeShown.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/trackActivityThermalStateNoticeShown.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun110589: for (var _fun110589_ip = 0;;) switch (_fun110589_ip) {
            case 0:
                var1 = _closure1_slot5;
                var0 = var1.getCurrentEmbeddedActivity;
                var1 = var0.bind(var1)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.getEmbeddedActivityLocationChannelId;
                var6 = null;
                var7 = var6 == var1;
                var2 = undefined;
                if (var7) {
                    _fun110589_ip = 61;
                    continue _fun110589
                }
            case 56:
                var2 = var1.location;
            case 61:
                var10 = var3.bind(var4)(var2);
                var3 = _closure1_slot3;
                var2 = var3.getBasicChannel;
                var7 = var2.bind(var3)(var10);
                var2 = var6 == var1;
                var8 = undefined;
                if (var2) {
                    _fun110589_ip = 96;
                    continue _fun110589
                }
            case 90:
                var8 = var1.compositeInstanceId;
            case 96:
                var2 = var6 == var1;
                var9 = undefined;
                if (var2) {
                    _fun110589_ip = 110;
                    continue _fun110589
                }
            case 105:
                var9 = var1.applicationId;
            case 110:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot6;
                var2 = var1.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN;
                var1 = {};
                var1.channel_id = var10;
                var1.application_id = var9;
                var1.activity_session_id = var8;
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun110589_ip = 175;
                    continue _fun110589
                }
            case 170:
                var6 = var7.guild_id;
            case 175:
                var1.guild_id = var6;
                var6 = _closure1_slot4;
                var5 = var6.getMediaSessionId;
                var5 = var5.bind(var6)();
                var1.media_session_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackActivityThermalStateNoticeShown = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3509, 1371, 660, 3072, 795, 2]);