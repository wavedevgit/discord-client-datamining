// modules/video_calls/native/useTrackActivityVideoPip.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/useTrackActivityVideoPip.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 3;
        var3 = var5[var0];
        var0 = undefined;
        var8 = var4.bind(var0)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var1
            var1 = _closure1_slot4;
            var0 = var1.isPipEnabledWhileFocusedOnActivityOrStream;
            var0 = var0.bind(var1)();
            return var0;
        };
        var8 = var7.bind(var8)(var4, var3);
        var _closure2_slot1 = var8;
        var4 = _closure1_slot1;
        var3 = 4;
        var3 = var5[var3];
        var3 = var4.bind(var0)(var3);
        var7 = var3.bind(var0)(var8);
        var _closure2_slot2 = var7;
        var3 = 5;
        var3 = var5[var3];
        var3 = var4.bind(var0)(var3);
        var5 = var3.bind(var0)();
        var _closure2_slot3 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() { // Environment: var1
            _fun64897: for (var _fun64897_ip = 0;;) switch (_fun64897_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun64897_ip = 149;
                        continue _fun64897
                    }
                case 16:
                    var0 = _closure2_slot2;
                    if (!(var1 != var0)) {
                        _fun64897_ip = 149;
                        continue _fun64897
                    }
                case 27:
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    if (!(var1 !== var0)) {
                        _fun64897_ip = 149;
                        continue _fun64897
                    }
                case 39:
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot5;
                    if (var2) {
                        _fun64897_ip = 61;
                        continue _fun64897
                    }
                case 53:
                    var3 = var1.ACTIVITY_VIDEO_PIP_HIDDEN;
                    _fun64897_ip = 67;
                    continue _fun64897;
                case 61:
                    var3 = var1.ACTIVITY_VIDEO_PIP_SHOWN;
                case 67:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.track;
                    var0 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var0.channel_id = var6;
                    var5 = var5.guild_id;
                    var0.guild_id = var5;
                    var4 = _closure2_slot3;
                    var5 = var4.applicationId;
                    var0.application_id = var5;
                    var4 = var4.compositeInstanceId;
                    var0.activity_session_id = var4;
                    var0 = var1.bind(var2)(var3, var0);
                case 149:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7895, 660, 632, 5306, 8053, 795, 2]);