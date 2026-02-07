// modules/soundboard/useSoundboardSoundPlayer.native.tsx
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
    var3 = var3.SoundOutputChannel;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/useSoundboardSoundPlayer.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun69205: for (var _fun69205_ip = 0;;) switch (_fun69205_ip) {
            case 0:
                var8 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var3;
                var0 = arguments[2];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun69205_ip = 85;
                    continue _fun69205
                }
            case 25:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var0 = var2.bind(var5)(var0);
                var2 = var0.SoundboardSettings;
                var0 = var2.getSetting;
                var4 = var0.bind(var2)();
                var2 = null;
                var6 = var2 == var4;
                var0 = undefined;
                if (var6) {
                    _fun69205_ip = 81;
                    continue _fun69205
                }
            case 75:
                var0 = var4.volume;
            case 81:
                var0 = var2 != var0;
            case 85:
                var0 = arguments[3];
                if (!(var0 === var5)) {
                    _fun69205_ip = 105;
                    continue _fun69205
                }
            case 92:
                var0 = _closure1_slot5;
                var0 = var0.DEFAULT;
            case 105:
                var _closure2_slot2 = var5;
                var6 = _closure1_slot3;
                var4 = var6.useContext;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var2 = var7.bind(var5)(var2);
                var2 = var4.bind(var6)(var2);
                var7 = var2.audioRef;
                _closure2_slot2 = var7;
                var4 = _closure1_slot0;
                var2 = 5;
                var2 = var9[var2];
                var9 = var4.bind(var5)(var2);
                var5 = var9.useStateFromStores;
                var0 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var0;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.isPlayingSound;
                    var0 = _closure2_slot0;
                    var0 = var0.soundId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var5.bind(var9)(var4, var0, var2);
                var0 = {};
                var5 = var6.useCallback;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var7;
                var4[2] = var3;
                var3 = function(arg0) { // Environment: var1
                    _fun69207: for (var _fun69207_ip = 0;;) switch (_fun69207_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var1 = var1.current;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun69207_ip = 37;
                                continue _fun69207
                            }
                        case 18:
                            var1 = _closure2_slot2;
                            var3 = var1.current;
                            var1 = var3.pause;
                            var1 = var1.bind(var3)();
                        case 37:
                            var1 = _closure2_slot1;
                            if (!(var2 != var1)) {
                                _fun69207_ip = 94;
                                continue _fun69207
                            }
                        case 45:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.playSound;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = arg0;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var0.playSoundboardSound = var3;
                var0.isPlayingSound = var2;
                var1 = function() {
                    var0 = global;
                    var1 = var0.Promise;
                    var0 = var1.resolve;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.previewSound = var1;
                var1 = false;
                var0.isPreviewingSound = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3956, 8281, 1348, 8642, 566, 5740, 2]);