// modules/user_settings/AudioSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var3 = var3.ProtoAudioSettingsContextTypes;
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/AudioSettingsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: snapVolumeToDefault, environment: var1
        _fun66257: for (var _fun66257_ip = 0;;) switch (_fun66257_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 1;
                var1 = var1[var3];
                var8 = undefined;
                var1 = var4.bind(var8)(var1);
                var1 = var1.MediaEngineContextTypes;
                var4 = var1.STREAM;
                var1 = arg1;
                if (!(var1 !== var4)) {
                    _fun66257_ip = 81;
                    continue _fun66257
                }
            case 47:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var4.bind(var8)(var1);
                var1 = var1.AudioSettingsDefaultVolumes;
                var1 = var1.USER;
                _fun66257_ip = 113;
                continue _fun66257;
            case 81:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var4 = var6[var4];
                var4 = var5.bind(var8)(var4);
                var4 = var4.AudioSettingsDefaultVolumes;
                var1 = var4.STREAM;
            case 113:
                var4 = global;
                var5 = var4.Math;
                var4 = var5.abs;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 3;
                var6 = var9[var2];
                var10 = var7.bind(var8)(var6);
                var6 = var10.amplitudeToPerceptual;
                var6 = var6.bind(var10)(var1);
                var2 = var9[var2];
                var7 = var7.bind(var8)(var2);
                var2 = var7.amplitudeToPerceptual;
                var2 = var2.bind(var7)(var0);
                var2 = var6 - var2;
                var2 = var4.bind(var5)(var2);
                if (!(var2 < var3)) {
                    _fun66257_ip = 194;
                    continue _fun66257
                }
            case 191:
                var0 = var1;
            case 194:
                return var0;
        }
    };
    var2.snapVolumeToDefault = var3;
    var1 = function(arg0) { // Original name: coerceAudioContextForProto, environment: var1
        _fun66258: for (var _fun66258_ip = 0;;) switch (_fun66258_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 1;
                var2 = var1[var5];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.MediaEngineContextTypes;
                var2 = var2.DEFAULT;
                if (!(var2 !== var3)) {
                    _fun66258_ip = 91;
                    continue _fun66258
                }
            case 44:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.MediaEngineContextTypes;
                var2 = var2.STREAM;
                if (!(var2 !== var3)) {
                    _fun66258_ip = 79;
                    continue _fun66258
                }
            case 77:
                return var1;
            case 79:
                var1 = _closure1_slot2;
                var1 = var1.STREAM;
                return var1;
            case 91:
                var0 = _closure1_slot2;
                var0 = var0.USER;
                return var0;
        }
    };
    var2.coerceAudioContextForProto = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [665, 3590, 8170, 3912, 2]);