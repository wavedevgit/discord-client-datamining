// modules/user_settings/trackVoiceAndVideoSettingsUpdate.tsx
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
    var3 = 'modules/user_settings/trackVoiceAndVideoSettingsUpdate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: trackVoiceAndVideoDebuggingSettingsUpdated, environment: var1
        _fun66305: for (var _fun66305_ip = 0;;) switch (_fun66305_ip) {
            case 0:
                var7 = arg2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var1 = var3[var1];
                var6 = undefined;
                var3 = var2.bind(var6)(var1);
                var2 = var3.track;
                var0 = _closure1_slot2;
                var1 = var0.VOICE_AND_VIDEO_SETTINGS_UPDATED;
                var0 = {};
                var4 = null;
                var5 = var4 != var7;
                var4 = undefined;
                if (!var5) {
                    _fun66305_ip = 69;
                    continue _fun66305
                }
            case 56:
                var5 = global;
                var5 = var5.String;
                var4 = var5.bind(var6)(var7);
            case 69:
                var0.previous_setting_value = var4;
                var5 = arg1;
                var4 = arg0;
                var0[var4] = var5;
                var5 = arg3;
                var4 = 'location_stack';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 2]);