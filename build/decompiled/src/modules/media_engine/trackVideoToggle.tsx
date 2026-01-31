// modules/media_engine/trackVideoToggle.tsx
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
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/trackVideoToggle.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2() {
        _fun93951: for (var _fun93951_ip = 0;;) switch (_fun93951_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var1 = var3[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.VideoHealthManager;
                var1 = var1.defaultConfig;
                var7 = var1.featureEnabled;
                var11 = var1.windowLength;
                var10 = var1.allowedPoorFpsRatio;
                var9 = var1.fpsThreshold;
                var6 = var1.backoffTimeSec;
                var2 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.VIDEO_TOGGLED;
                var1 = {};
                var5 = arg1;
                var1.video_toggle_reason = var5;
                var5 = arg0;
                var1.toggled_user_id = var5;
                var8 = _closure1_slot3;
                var5 = null;
                var13 = var5 == var8;
                var8 = undefined;
                if (var13) {
                    _fun93951_ip = 143;
                    continue _fun93951
                }
            case 135:
                var13 = _closure1_slot3;
                var8 = var13.bind(var0)();
            case 143:
                var1.rtc_connection_id = var8;
                var8 = _closure1_slot4;
                var13 = var5 == var8;
                var8 = undefined;
                if (var13) {
                    _fun93951_ip = 169;
                    continue _fun93951
                }
            case 161:
                var12 = _closure1_slot4;
                var8 = var12.bind(var0)();
            case 169:
                var1.media_session_id = var8;
                var8 = null;
                if (!var7) {
                    _fun93951_ip = 182;
                    continue _fun93951
                }
            case 179:
                var8 = var11;
            case 182:
                var1.video_health_manager_window_length = var8;
                var8 = null;
                if (!var7) {
                    _fun93951_ip = 197;
                    continue _fun93951
                }
            case 194:
                var8 = var10;
            case 197:
                var1.video_health_manager_poor_fps_ratio = var8;
                var8 = null;
                if (!var7) {
                    _fun93951_ip = 212;
                    continue _fun93951
                }
            case 209:
                var8 = var9;
            case 212:
                var1.video_health_manager_fps_threshold = var8;
                var8 = arg2;
                var1.is_video_shown = var8;
                var5 = null;
                if (!var7) {
                    _fun93951_ip = 237;
                    continue _fun93951
                }
            case 234:
                var5 = var6;
            case 237:
                var1.video_health_manager_backoff_time_seconds = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0, arg1() {
        var0 = arg0;
        var _closure1_slot3 = var0;
        var0 = arg1;
        var _closure1_slot4 = var0;
        var0 = undefined;
        return var0;
    };
    var2.setVideoToggleAnalyticsParams = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 12225, 795, 2]);