// modules/noise_cancellation/getEffectiveNoiseCancellation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/noise_cancellation/getEffectiveNoiseCancellation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun93974: for (var _fun93974_ip = 0;;) switch (_fun93974_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var1 = arg2;
                var5 = var1.location;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var9 = 0;
                var2 = var2[var9];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun93974_ip = 223;
                    continue _fun93974
                }
            case 54:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isMac;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun93974_ip = 223;
                    continue _fun93974
                }
            case 87:
                var2 = var0;
                if (!var2) {
                    _fun93974_ip = 221;
                    continue _fun93974
                }
            case 96:
                var3 = null;
                var3 = var3 == var6;
                if (var3) {
                    _fun93974_ip = 113;
                    continue _fun93974
                }
            case 105:
                var7 = '';
                var3 = var7 === var6;
            case 113:
                if (var3) {
                    _fun93974_ip = 146;
                    continue _fun93974
                }
            case 116:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var9];
                var8 = var8.bind(var4)(var7);
                var7 = var8.isWindows;
                var7 = var7.bind(var8)();
                var3 = !var7;
            case 146:
                if (var3) {
                    _fun93974_ip = 159;
                    continue _fun93974
                }
            case 149:
                var7 = 'deep_noise_suppression';
                var3 = var6 !== var7;
            case 159:
                if (var3) {
                    _fun93974_ip = 212;
                    continue _fun93974
                }
            case 162:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 2;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.getWindowsAudioEffectsExperimentConfig;
                var7 = {};
                var10 = 'setNoiseCancellation';
                var7.location = var10;
                var7 = var8.bind(var9)(var7);
                var7 = var7.preferSystemEffects;
                var3 = !var7;
            case 212:
                if (!var3) {
                    _fun93974_ip = 218;
                    continue _fun93974
                }
            case 215:
                var3 = var0;
            case 218:
                var2 = var3;
            case 221:
                return var2;
            case 223:
                var2 = null;
                var7 = var2 != var6;
                var2 = '';
                var3 = var2;
                if (!var7) {
                    _fun93974_ip = 242;
                    continue _fun93974
                }
            case 239:
                var3 = var6;
            case 242:
                if (!(var2 !== var3)) {
                    _fun93974_ip = 318;
                    continue _fun93974
                }
            case 246:
                var2 = 'standard';
                if (!(var2 !== var3)) {
                    _fun93974_ip = 318;
                    continue _fun93974
                }
            case 256:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var4 = var1.DisableKrispWithAppleMicrophoneModesExperiment;
                var2 = var4.getConfig;
                var1 = {};
                var1.location = var5;
                var1 = var2.bind(var4)(var1);
                var2 = var1.disabledModes;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun93974_ip = 320;
                    continue _fun93974
                }
            case 318:
                return var0;
            case 320:
                var0 = false;
                return var0;
        }
    };
    var2.default = var1;
    var1 = 'deep_noise_suppression';
    var2.WINDOWS_NOISE_SUPPRESSION_EFFECT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 12237, 12238, 2]);