// modules/messages/MediaFormatTesters.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun36663: for (var _fun36663_ip = 0;;) switch (_fun36663_ip) {
        case 0:
            var7 = require;
            var4 = metroImportDefault;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var4;
            var _closure1_slot2 = var8;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var3);
            var0 = 0;
            var3 = var8[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var5 = function arg0, arg1() {
                _fun36664: for (var _fun36664_ip = 0;;) switch (_fun36664_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = arg1;
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun36664_ip = 80;
                            continue _fun36664
                        }
                    case 12:
                        var1 = var4.split;
                        var0 = /\?/;
                        var3 = 1;
                        var5 = var1.bind(var4)(var0, var3);
                        var4 = _closure1_slot3;
                        var1 = undefined;
                        var0 = 2;
                        var0 = var4.bind(var1)(var5, var0);
                        var1 = 0;
                        var1 = var0[var1];
                        var0 = var0[var3];
                        var0 = var2.test;
                        var0 = var0.bind(var2)(var1);
                        return var0;
                    case 80:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot4 = var5;
            var3 = function arg0, arg1() {
                _fun36665: for (var _fun36665_ip = 0;;) switch (_fun36665_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun36665_ip = 63;
                            continue _fun36665
                        }
                    case 9:
                        var1 = var2.split;
                        var0 = '/';
                        var3 = var1.bind(var2)(var0);
                        var2 = _closure1_slot3;
                        var1 = undefined;
                        var0 = 2;
                        var2 = var2.bind(var1)(var3, var0);
                        var0 = 0;
                        var1 = var2[var0];
                        var0 = 1;
                        var0 = var2[var0];
                        var0 = arg1;
                        var0 = var1 === var0;
                        return var0;
                    case 63:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot5 = var3;
            var3 = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i;
            var _closure1_slot6 = var3;
            var3 = /\.(webp|gif|avif)$/i;
            var _closure1_slot7 = var3;
            var3 = 1;
            var4 = var8[var3];
            var6 = var7.bind(var0)(var4);
            var4 = var6.isIOS;
            var4 = var4.bind(var6)();
            if (var4) {
                _fun36663_ip = 208;
                continue _fun36663
            }
        case 154:
            var4 = var8[var3];
            var6 = var7.bind(var0)(var4);
            var4 = var6.isAndroid;
            var4 = var4.bind(var6)();
            if (var4) {
                _fun36663_ip = 192;
                continue _fun36663
            }
        case 176:
            var4 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
            _fun36663_ip = 206;
            continue _fun36663;
        case 192:
            var4 = /\.(mp3|m4a|wav|ogg|opus|flac)$/i;
        case 206:
            _fun36663_ip = 222;
            continue _fun36663;
        case 208:
            var4 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
        case 222:
            var _closure1_slot8 = var4;
            var4 = /\.(webm)$/i;
            var _closure1_slot9 = var4;
            var4 = /\.(riv)$/i;
            var _closure1_slot10 = var4;
            var4 = var8[var3];
            var6 = var7.bind(var0)(var4);
            var4 = var6.isIOS;
            var4 = var4.bind(var6)();
            if (var4) {
                _fun36663_ip = 319;
                continue _fun36663
            }
        case 284:
            var3 = var8[var3];
            var4 = var7.bind(var0)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            var3 = /\.(mp4|webm|mov|qt)$/i;
            _fun36663_ip = 333;
            continue _fun36663;
        case 319:
            var3 = /\.(mp4|mov|qt)$/i;
        case 333:
            var _closure1_slot11 = var3;
            var4 = function arg0() {
                _fun36666: for (var _fun36666_ip = 0;;) switch (_fun36666_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 2;
                        var0 = var3[var0];
                        var4 = undefined;
                        var2 = var2.bind(var4)(var0);
                        var0 = var2.isIOSWithWebM;
                        var0 = var0.bind(var2)();
                        if (!var0) {
                            _fun36666_ip = 84;
                            continue _fun36666
                        }
                    case 38:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 3;
                        var2 = var5[var2];
                        var5 = var3.bind(var4)(var2);
                        var3 = var5.getConfig;
                        var2 = {};
                        var6 = 'isWebPlayerVideoUrl';
                        var2.location = var6;
                        var2 = var3.bind(var5)(var2);
                        var0 = var2.enabled;
                    case 84:
                        if (!var0) {
                            _fun36666_ip = 104;
                            continue _fun36666
                        }
                    case 87:
                        var3 = _closure1_slot4;
                        var2 = _closure1_slot9;
                        var1 = arg0;
                        var0 = var3.bind(var4)(var1, var2);
                    case 104:
                        return var0;
                }
            };
            var _closure1_slot12 = var4;
            var3 = function arg0() {
                _fun36667: for (var _fun36667_ip = 0;;) switch (_fun36667_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun36667_ip = 47;
                            continue _fun36667
                        }
                    case 12:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.isIOSWithWebM;
                        var0 = var1.bind(var2)();
                    case 47:
                        if (!var0) {
                            _fun36667_ip = 101;
                            continue _fun36667
                        }
                    case 50:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.getConfig;
                        var1 = {};
                        var5 = 'isWebPlayerVideoFile';
                        var1.location = var5;
                        var1 = var2.bind(var4)(var1);
                        var0 = var1.enabled;
                    case 101:
                        if (!var0) {
                            _fun36667_ip = 121;
                            continue _fun36667
                        }
                    case 104:
                        var2 = _closure1_slot9;
                        var1 = var2.test;
                        var0 = var1.bind(var2)(var3);
                    case 121:
                        return var0;
                }
            };
            var _closure1_slot13 = var3;
            var6 = 4;
            var6 = var8[var6];
            var8 = var7.bind(var0)(var6);
            var7 = var8.fileFinishedImporting;
            var6 = 'modules/messages/MediaFormatTesters.tsx';
            var6 = var7.bind(var8)(var6);
            var2.urlMatchesFileExtension = var5;
            var5 = function(arg0) { // Environment: var1
                var3 = _closure1_slot4;
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                return var0;
            };
            var2.isImageUrl = var5;
            var5 = function(arg0) { // Environment: var1
                _fun36669: for (var _fun36669_ip = 0;;) switch (_fun36669_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun36669_ip = 29;
                            continue _fun36669
                        }
                    case 12:
                        var2 = _closure1_slot6;
                        var1 = var2.test;
                        var0 = var1.bind(var2)(var3);
                    case 29:
                        return var0;
                }
            };
            var2.isImageFile = var5;
            var5 = function(arg0) { // Environment: var1
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg0;
                var0 = 'image';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.isImageContentType = var5;
            var5 = function(arg0) { // Environment: var1
                var3 = _closure1_slot4;
                var2 = _closure1_slot7;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                return var0;
            };
            var2.isAnimatedImageUrl = var5;
            var5 = function(arg0) { // Environment: var1
                _fun36672: for (var _fun36672_ip = 0;;) switch (_fun36672_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun36672_ip = 29;
                            continue _fun36672
                        }
                    case 12:
                        var2 = _closure1_slot8;
                        var1 = var2.test;
                        var0 = var1.bind(var2)(var3);
                    case 29:
                        return var0;
                }
            };
            var2.isAudioFile = var5;
            var2.isWebPlayerVideoUrl = var4;
            var4 = function(arg0) { // Environment: var1
                _fun36673: for (var _fun36673_ip = 0;;) switch (_fun36673_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = _closure1_slot4;
                        var0 = _closure1_slot11;
                        var2 = undefined;
                        var0 = var4.bind(var2)(var3, var0);
                        if (var0) {
                            _fun36673_ip = 34;
                            continue _fun36673
                        }
                    case 25:
                        var1 = _closure1_slot12;
                        var0 = var1.bind(var2)(var3);
                    case 34:
                        return var0;
                }
            };
            var2.isVideoUrl = var4;
            var2.isWebPlayerVideoFile = var3;
            var3 = function(arg0) { // Environment: var1
                _fun36674: for (var _fun36674_ip = 0;;) switch (_fun36674_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = null;
                        var0 = var0 != var4;
                        if (!var0) {
                            _fun36674_ip = 46;
                            continue _fun36674
                        }
                    case 12:
                        var3 = _closure1_slot11;
                        var1 = var3.test;
                        var1 = var1.bind(var3)(var4);
                        if (var1) {
                            _fun36674_ip = 43;
                            continue _fun36674
                        }
                    case 32:
                        var3 = _closure1_slot13;
                        var2 = undefined;
                        var1 = var3.bind(var2)(var4);
                    case 43:
                        var0 = var1;
                    case 46:
                        return var0;
                }
            };
            var2.isVideoFile = var3;
            var3 = function(arg0) { // Environment: var1
                _fun36675: for (var _fun36675_ip = 0;;) switch (_fun36675_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun36675_ip = 29;
                            continue _fun36675
                        }
                    case 12:
                        var2 = _closure1_slot10;
                        var1 = var2.test;
                        var0 = var1.bind(var2)(var3);
                    case 29:
                        return var0;
                }
            };
            var2.isRiveFile = var3;
            var1 = function(arg0) { // Environment: var1
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg0;
                var0 = 'video';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.isVideoContentType = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 478, 3981, 3982, 2]);