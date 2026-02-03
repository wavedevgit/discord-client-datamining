// modules/activities/trackActivityProblem.tsx
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
    var3 = 'modules/activities/trackActivityProblem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun113053: for (var _fun113053_ip = 0;;) switch (_fun113053_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.problem;
                var13 = var1.channel;
                var6 = var1.embeddedActivityLocation;
                var7 = var1.feedback;
                var11 = var1.activityApplication;
                var5 = var1.analyticsData;
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun113053_ip = 46;
                    continue _fun113053
                }
            case 44:
                var5 = {};
            case 46:
                var9 = var1.location;
                var8 = var1.rating;
                if (!(var8 === var0)) {
                    _fun113053_ip = 63;
                    continue _fun113053
                }
            case 61:
                var8 = null;
            case 63:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot2;
                var2 = var1.ACTIVITY_REPORT_PROBLEM;
                var1 = {};
                var1.reason = var10;
                var10 = null;
                var14 = var10 == var13;
                var12 = undefined;
                if (var14) {
                    _fun113053_ip = 129;
                    continue _fun113053
                }
            case 119:
                var14 = var13.getGuildId;
                var12 = var14.bind(var13)();
            case 129:
                var1.guild_id = var12;
                var14 = var10 == var13;
                var12 = undefined;
                if (var14) {
                    _fun113053_ip = 147;
                    continue _fun113053
                }
            case 142:
                var12 = var13.id;
            case 147:
                var1.channel_id = var12;
                var13 = var10 == var11;
                var12 = undefined;
                if (var13) {
                    _fun113053_ip = 165;
                    continue _fun113053
                }
            case 160:
                var12 = var11.id;
            case 165:
                var1.application_id = var12;
                var12 = var10 == var11;
                var10 = undefined;
                if (var12) {
                    _fun113053_ip = 184;
                    continue _fun113053
                }
            case 179:
                var10 = var11.name;
            case 184:
                var1.application_name = var10;
                var1.location = var9;
                var1.rating = var8;
                var1.feedback = var7;
                var6 = var6.kind;
                var1.embedded_activity_location_kind = var6;
                var6 = var5.rtc_connection_id;
                var1.rtc_connection_id = var6;
                var5 = var5.media_session_id;
                var1.media_session_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 2]);