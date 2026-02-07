// modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx
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
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun67107: for (var _fun67107_ip = 0;;) switch (_fun67107_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun67107_ip = 68;
                    continue _fun67107
                }
            case 38:
                var2 = _closure1_slot3;
                var3 = var2.AudioRoutePicker;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun67107_ip = 156;
                    continue _fun67107
                }
            case 54:
                var2 = var3.showAudioPicker;
                var2 = var2.bind(var3)();
                _fun67107_ip = 156;
                continue _fun67107;
            case 68:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 3;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var6 = _closure1_slot0;
                var3 = 5;
                var3 = var2[var3];
                var6 = var6.bind(var0)(var3);
                var3 = 4;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var6.bind(var0)(var3, var2);
                var2 = _closure1_slot4;
                var1 = {};
                var6 = arg0;
                var1.channelId = var6;
                var6 = arg1;
                var1.isConnectedToVoiceChannel = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
            case 156:
                return var0;
        }
    };
    var2.showAudioOutputSelector = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 8299, 478, 3279, 8300, 1307, 2]);