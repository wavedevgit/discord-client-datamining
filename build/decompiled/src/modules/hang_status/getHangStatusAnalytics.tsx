// modules/hang_status/getHangStatusAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hang_status/getHangStatusAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getHangStatusAnalytics, environment: var1
        _fun92318: for (var _fun92318_ip = 0;;) switch (_fun92318_ip) {
            case 0:
                var3 = arg0;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun92318_ip = 91;
                    continue _fun92318
                }
            case 9:
                var0 = {};
                var0.channel_id = var3;
                var5 = _closure1_slot0;
                var4 = var5.getChannel;
                var4 = var4.bind(var5)(var3);
                var5 = var2 == var4;
                var2 = undefined;
                if (var5) {
                    _fun92318_ip = 46;
                    continue _fun92318
                }
            case 41:
                var2 = var4.guild_id;
            case 46:
                var0.guild_id = var2;
                var4 = _closure1_slot1;
                var2 = var4.getMediaSessionId;
                var2 = var2.bind(var4)();
                var0.media_session_id = var2;
                var2 = _closure1_slot2;
                var1 = var2.countVoiceStatesForChannel;
                var1 = var1.bind(var2)(var3);
                var0.call_num_participants = var1;
                _fun92318_ip = 135;
                continue _fun92318;
            case 91:
                var1 = {};
                var2 = undefined;
                var1.channel_id = var2;
                var1.guild_id = var2;
                var3 = _closure1_slot1;
                var2 = var3.getMediaSessionId;
                var2 = var2.bind(var3)();
                var1.media_session_id = var2;
                var2 = 0;
                var1.call_num_participants = var2;
                var0 = var1;
            case 135:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3477, 3485, 2]);