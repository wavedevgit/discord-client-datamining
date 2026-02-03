// modules/go_live/utils/trackStreamProblem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/go_live/utils/trackStreamProblem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68684: for (var _fun68684_ip = 0;;) switch (_fun68684_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.problem;
                var9 = var1.stream;
                var6 = var1.feedback;
                var10 = var1.streamApplication;
                var5 = var1.analyticsData;
                var8 = var1.location;
                var7 = var1.rating;
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun68684_ip = 52;
                    continue _fun68684
                }
            case 50:
                var7 = null;
            case 52:
                var12 = var1.category;
                var11 = var1.variant;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot2;
                var2 = var1.STREAM_REPORT_PROBLEM;
                var1 = {};
                var1.reason = var13;
                var1.category = var12;
                var1.reason_variant = var11;
                var11 = var9.ownerId;
                var1.streamer_user_id = var11;
                var11 = var9.channelId;
                var1.stream_channel_id = var11;
                var9 = var9.guildId;
                var1.guild_id = var9;
                var9 = null;
                var12 = var9 != var10;
                var11 = null;
                if (!var12) {
                    _fun68684_ip = 168;
                    continue _fun68684
                }
            case 163:
                var11 = var10.id;
            case 168:
                var1.application_id = var11;
                var11 = var9 != var10;
                var9 = null;
                if (!var11) {
                    _fun68684_ip = 187;
                    continue _fun68684
                }
            case 182:
                var9 = var10.name;
            case 187:
                var1.application_name = var9;
                var1.location = var8;
                var1.rating = var7;
                var1.feedback = var6;
                var15 = var1;
                var14 = var5;
                var5 = copyDataProperties(var15, var14);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 2]);