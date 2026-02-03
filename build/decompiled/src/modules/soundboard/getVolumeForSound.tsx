// modules/soundboard/getVolumeForSound.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/getVolumeForSound.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun98570: for (var _fun98570_ip = 0;;) switch (_fun98570_ip) {
            case 0:
                var4 = arguments[1];
                var5 = undefined;
                if (!(var4 === var5)) {
                    _fun98570_ip = 81;
                    continue _fun98570
                }
            case 9:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var0 = var1.bind(var5)(var0);
                var1 = var0.SoundboardSettings;
                var0 = var1.getSetting;
                var2 = var0.bind(var1)();
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun98570_ip = 65;
                    continue _fun98570
                }
            case 59:
                var1 = var2.volume;
            case 65:
                var2 = var0 != var1;
                var0 = 100;
                if (!var2) {
                    _fun98570_ip = 78;
                    continue _fun98570
                }
            case 75:
                var0 = var1;
            case 78:
                var4 = var0;
            case 81:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 1;
                var0 = var0[var3];
                var2 = var2.bind(var5)(var0);
                var0 = var2.amplitudeToPerceptual;
                var0 = var0.bind(var2)(var4);
                var6 = 100;
                var5 = var0 / var6;
                var0 = global;
                var4 = var0.Math;
                var2 = var4.min;
                var7 = _closure1_slot2;
                var1 = var7.getOutputVolume;
                var1 = var1.bind(var7)();
                var1 = var1 / var6;
                var4 = var2.bind(var4)(var1, var3);
                var2 = var0.Math;
                var1 = var2.min;
                var0 = arg0;
                var0 = var0 * var5;
                var0 = var0 * var4;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun98571: for (var _fun98571_ip = 0;;) switch (_fun98571_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.amplitudeToPerceptual;
                var0 = null;
                var5 = var0 != var4;
                var1 = 100;
                var0 = var1;
                if (!var5) {
                    _fun98571_ip = 52;
                    continue _fun98571
                }
            case 49:
                var0 = var4;
            case 52:
                var0 = var2.bind(var3)(var0);
                var0 = var0 / var1;
                return var0;
        }
    };
    var2.getPerceptualSoundboardVolume = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3476, 3958, 1348, 2]);