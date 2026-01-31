// hooks/useIsSpeaking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun35926: for (var _fun35926_ip = 0;;) switch (_fun35926_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var1 = arg2;
                if (var0) {
                    _fun35926_ip = 15;
                    continue _fun35926
                }
            case 12:
                var0 = var2;
            case 15:
                if (var0) {
                    _fun35926_ip = 21;
                    continue _fun35926
                }
            case 18:
                var0 = var1;
            case 21:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/useIsSpeaking.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun35927: for (var _fun35927_ip = 0;;) switch (_fun35927_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.userId;
                var _closure2_slot0 = var1;
                var1 = var2.checkSoundSharing;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun35927_ip = 28;
                    continue _fun35927
                }
            case 26:
                var1 = false;
            case 28:
                var _closure2_slot1 = var1;
                var1 = var2.checkSoundboardSounds;
                if (!(var1 === var4)) {
                    _fun35927_ip = 44;
                    continue _fun35927
                }
            case 42:
                var1 = true;
            case 44:
                var _closure2_slot2 = var1;
                var1 = var2.checkIsMuted;
                if (!(var1 === var4)) {
                    _fun35927_ip = 60;
                    continue _fun35927
                }
            case 58:
                var1 = false;
            case 60:
                var2 = var2.context;
                var _closure2_slot3 = var2;
                var _closure2_slot4 = var4;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 4;
                var2 = var2[var8];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = _closure1_slot3;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    _fun35928: for (var _fun35928_ip = 0;;) switch (_fun35928_ip) {
                        case 0:
                            var2 = _closure1_slot3;
                            var0 = var2.getVoiceChannelId;
                            var4 = var0.bind(var2)();
                            var0 = null;
                            var2 = var0 != var4;
                            if (!var2) {
                                _fun35928_ip = 49;
                                continue _fun35928
                            }
                        case 26:
                            var3 = _closure1_slot5;
                            var2 = var3.getVoiceStateForChannel;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var4, var1);
                        case 49:
                            return var0;
                    }
                };
                var6 = var6.bind(var7)(var3, var2);
                if (!var1) {
                    _fun35927_ip = 176;
                    continue _fun35927
                }
            case 135:
                var3 = null;
                var7 = var3 == var6;
                var2 = undefined;
                if (var7) {
                    _fun35927_ip = 152;
                    continue _fun35927
                }
            case 146:
                var2 = var6.mute;
            case 152:
                if (var2) {
                    _fun35927_ip = 173;
                    continue _fun35927
                }
            case 155:
                var7 = var3 == var6;
                var3 = undefined;
                if (var7) {
                    _fun35927_ip = 170;
                    continue _fun35927
                }
            case 164:
                var3 = var6.selfMute;
            case 170:
                var2 = var3;
            case 173:
                var1 = var2;
            case 176:
                _closure2_slot4 = var1;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = var6[var8];
                var10 = var7.bind(var4)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = function() { // Environment: var0
                    _fun35929: for (var _fun35929_ip = 0;;) switch (_fun35929_ip) {
                        case 0:
                            var4 = _closure1_slot4;
                            var3 = var4.isSpeaking;
                            var2 = _closure2_slot0;
                            var0 = _closure2_slot3;
                            var0 = var3.bind(var4)(var2, var0);
                            if (!var0) {
                                _fun35929_ip = 40;
                                continue _fun35929
                            }
                        case 33:
                            var1 = _closure2_slot4;
                            var0 = !var1;
                        case 40:
                            return var0;
                    }
                };
                var3 = var9.bind(var10)(var3, var2);
                var2 = var6[var8];
                var10 = var7.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun35930: for (var _fun35930_ip = 0;;) switch (_fun35930_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var2 = var3.isSoundSharing;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            if (!var0) {
                                _fun35930_ip = 32;
                                continue _fun35930
                            }
                        case 28:
                            var0 = _closure2_slot1;
                        case 32:
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var2, var1);
                var1 = _closure1_slot6;
                var6 = var6[var8];
                var7 = var7.bind(var4)(var6);
                var6 = var7.useStateFromStores;
                var8 = _closure1_slot2;
                var5 = new Array(1);
                var5[0] = var8;
                var0 = function() { // Environment: var0
                    _fun35931: for (var _fun35931_ip = 0;;) switch (_fun35931_ip) {
                        case 0:
                            var3 = _closure1_slot2;
                            var2 = var3.isUserPlayingSounds;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            if (!var0) {
                                _fun35931_ip = 32;
                                continue _fun35931
                            }
                        case 28:
                            var0 = _closure2_slot2;
                        case 32:
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var5, var0);
                var0 = var1.bind(var4)(var3, var0, var2);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun35932: for (var _fun35932_ip = 0;;) switch (_fun35932_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var7 = var3.userId;
                var0 = var3.checkSoundSharing;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun35932_ip = 25;
                    continue _fun35932
                }
            case 23:
                var0 = false;
            case 25:
                var5 = var3.checkSoundboardSounds;
                if (!(var5 === var4)) {
                    _fun35932_ip = 37;
                    continue _fun35932
                }
            case 35:
                var5 = true;
            case 37:
                var1 = var3.checkIsMuted;
                if (!(var1 === var4)) {
                    _fun35932_ip = 49;
                    continue _fun35932
                }
            case 47:
                var1 = false;
            case 49:
                var8 = var3.context;
                if (!(var2 === var4)) {
                    _fun35932_ip = 100;
                    continue _fun35932
                }
            case 58:
                var9 = _closure1_slot5;
                var3 = new Array(4);
                var3[0] = var9;
                var9 = _closure1_slot3;
                var3[1] = var9;
                var9 = _closure1_slot4;
                var3[2] = var9;
                var6 = _closure1_slot2;
                var3[3] = var6;
                var2 = var3;
            case 100:
                var11 = var2;
                var3 = var11[Symbol.iterator];
                var11 = var3().next;
                var2 = var11().value;
                var6 = var3;
                var10 = var6 === var4;
                var12 = undefined;
                if (var10) {
                    _fun35932_ip = 125;
                    continue _fun35932
                }
            case 122:
                var12 = var2;
            case 125:
                var9 = undefined;
                if (var10) {
                    _fun35932_ip = 155;
                    continue _fun35932
                }
            case 130:
                var6 = var11().value;
                var2 = var3;
                var2 = var2 === var4;
                var9 = undefined;
                var10 = var2;
                if (var2) {
                    _fun35932_ip = 155;
                    continue _fun35932
                }
            case 149:
                var9 = var6;
                var10 = var2;
            case 155:
                var2 = undefined;
                if (var10) {
                    _fun35932_ip = 185;
                    continue _fun35932
                }
            case 160:
                var13 = var11().value;
                var6 = var3;
                var6 = var6 === var4;
                var2 = undefined;
                var10 = var6;
                if (var6) {
                    _fun35932_ip = 185;
                    continue _fun35932
                }
            case 179:
                var2 = var13;
                var10 = var6;
            case 185:
                var6 = undefined;
                if (var10) {
                    _fun35932_ip = 215;
                    continue _fun35932
                }
            case 190:
                var13 = var11().value;
                var11 = var3;
                var11 = var11 === var4;
                var6 = undefined;
                var10 = var11;
                if (var11) {
                    _fun35932_ip = 215;
                    continue _fun35932
                }
            case 209:
                var6 = var13;
                var10 = var11;
            case 215:
                if (var10) {
                    _fun35932_ip = 221;
                    continue _fun35932
                }
            case 218:
                var3.return();
            case 221:
                var3 = var9.getVoiceChannelId;
                var11 = var3.bind(var9)();
                var9 = null;
                var3 = var9 != var11;
                var10 = null;
                if (!var3) {
                    _fun35932_ip = 254;
                    continue _fun35932
                }
            case 242:
                var3 = var12.getVoiceStateForChannel;
                var10 = var3.bind(var12)(var11, var7);
            case 254:
                if (!var1) {
                    _fun35932_ip = 296;
                    continue _fun35932
                }
            case 257:
                var11 = var9 == var10;
                var3 = undefined;
                if (var11) {
                    _fun35932_ip = 272;
                    continue _fun35932
                }
            case 266:
                var3 = var10.mute;
            case 272:
                if (var3) {
                    _fun35932_ip = 293;
                    continue _fun35932
                }
            case 275:
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun35932_ip = 290;
                    continue _fun35932
                }
            case 284:
                var9 = var10.selfMute;
            case 290:
                var3 = var9;
            case 293:
                var1 = var3;
            case 296:
                var3 = var2.isSpeaking;
                var3 = var3.bind(var2)(var7, var8);
                if (!var3) {
                    _fun35932_ip = 314;
                    continue _fun35932
                }
            case 311:
                var3 = !var1;
            case 314:
                var1 = var2.isSoundSharing;
                var2 = var1.bind(var2)(var7);
                if (!var2) {
                    _fun35932_ip = 331;
                    continue _fun35932
                }
            case 328:
                var2 = var0;
            case 331:
                var1 = _closure1_slot6;
                var0 = var6.isUserPlayingSounds;
                var0 = var0.bind(var6)(var7);
                if (!var0) {
                    _fun35932_ip = 355;
                    continue _fun35932
                }
            case 352:
                var0 = var5;
            case 355:
                var0 = var1.bind(var4)(var3, var0, var2);
                return var0;
        }
    };
    var2.getIsSpeaking = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3915, 1661, 3908, 3480, 566, 2]);