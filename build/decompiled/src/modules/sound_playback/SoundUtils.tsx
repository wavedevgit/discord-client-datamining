// modules/sound_playback/SoundUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0, arg1() {
        _fun67647: for (var _fun67647_ip = 0;;) switch (_fun67647_ip) {
            case 0:
                var5 = arguments[2];
                var4 = arguments[3];
                var2 = undefined;
                if (!(var5 === var2)) {
                    _fun67647_ip = 15;
                    continue _fun67647
                }
            case 12:
                var5 = 1;
            case 15:
                if (!(var4 === var2)) {
                    _fun67647_ip = 32;
                    continue _fun67647
                }
            case 19:
                var0 = _closure1_slot5;
                var4 = var0.DEFAULT;
            case 32:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var3 = var0.MobileAudioSound;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var9 = arg0;
                var8 = arg1;
                var10 = var1;
                var7 = var5;
                var6 = var4;
                var0 = new var10[var3](var9, var8, var7, var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SoundOutputChannel;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = 'SoundUtils';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/sound_playback/SoundUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun67648: for (var _fun67648_ip = 0;;) switch (_fun67648_ip) {
            case 0:
                var5 = arg0;
                var4 = arguments[2];
                var3 = arguments[3];
                var2 = undefined;
                if (!(var4 === var2)) {
                    _fun67648_ip = 18;
                    continue _fun67648
                }
            case 15:
                var4 = 1;
            case 18:
                if (!(var3 === var2)) {
                    _fun67648_ip = 35;
                    continue _fun67648
                }
            case 22:
                var0 = _closure1_slot5;
                var3 = var0.DEFAULT;
            case 35:
                var1 = _closure1_slot7;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var6 = var6.bind(var2)(var0);
                var0 = arg1;
                var0 = var6.bind(var2)(var0);
                var6 = var0[var5];
                var7 = null;
                var0 = var5;
                if (!(var7 != var6)) {
                    _fun67648_ip = 86;
                    continue _fun67648
                }
            case 83:
                var0 = var6;
            case 86:
                var12 = undefined;
                var11 = var0;
                var10 = var5;
                var9 = var4;
                var8 = var3;
                var0 = var12[var1](var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var2.createSoundForPack = var4;
    var2.createSound = var3;
    var1 = function arg0() {
        _fun67649: for (var _fun67649_ip = 0;;) switch (_fun67649_ip) {
            case 0:
                var8 = arg0;
                var7 = arguments[1];
                var4 = arguments[2];
                var13 = arguments[3];
                var6 = arguments[4];
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun67649_ip = 26;
                    continue _fun67649
                }
            case 23:
                var7 = 1;
            case 26:
                var _closure2_slot0 = var4;
                if (!(var6 === var0)) {
                    _fun67649_ip = 47;
                    continue _fun67649
                }
            case 34:
                var1 = _closure1_slot5;
                var6 = var1.DEFAULT;
            case 47:
                var1 = _closure1_slot4;
                var1 = var1.disableSounds;
                if (var1) {
                    _fun67649_ip = 237;
                    continue _fun67649
                }
            case 66:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 4;
                var1 = var9[var1];
                var9 = var3.bind(var0)(var1);
                var3 = null;
                var1 = var13;
                if (!(var3 == var1)) {
                    _fun67649_ip = 109;
                    continue _fun67649
                }
            case 95:
                var11 = _closure1_slot3;
                var10 = var11.getSoundpack;
                var1 = var10.bind(var11)();
            case 109:
                var1 = var9.bind(var0)(var1);
                if (!(var3 == var1)) {
                    _fun67649_ip = 156;
                    continue _fun67649
                }
            case 118:
                var11 = _closure1_slot6;
                var10 = var11.log;
                var9 = global;
                var9 = var9.HermesInternal;
                var12 = var9.concat;
                var9 = 'Unable to find sound for pack name: ';
                var9 = var12.bind(var9)(var13);
                var9 = var10.bind(var11)(var9);
            case 156:
                var5 = _closure1_slot7;
                var9 = var1[var8];
                var1 = var8;
                if (!(var3 != var9)) {
                    _fun67649_ip = 174;
                    continue _fun67649
                }
            case 171:
                var1 = var9;
            case 174:
                var18 = undefined;
                var17 = var1;
                var16 = var8;
                var15 = var7;
                var14 = var6;
                var1 = var18[var5](var17, var16, var15, var14, var13);
                if (!(var3 == var4)) {
                    _fun67649_ip = 208;
                    continue _fun67649
                }
            case 196:
                var3 = var1.play;
                var3 = var3.bind(var1)();
                _fun67649_ip = 235;
                continue _fun67649;
            case 208:
                var3 = var1.playWithListener;
                var4 = var3.bind(var1)();
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var2
                    _fun67650: for (var _fun67650_ip = 0;;) switch (_fun67650_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun67650_ip = 19;
                                continue _fun67650
                            }
                        case 6:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 19:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
            case 235:
                return var1;
            case 237:
                return var0;
        }
    };
    var2.playSound = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8369, 3198, 8172, 3, 8371, 8372, 2]);