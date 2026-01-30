// utils/EmojiUtilsPlatformed.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var8 = function(arg0) { // Original name: getURL, environment: var3
        _fun54346: for (var _fun54346_ip = 0;;) switch (_fun54346_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun54346_ip = 51;
                    continue _fun54346
                }
            case 9:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.isAndroid;
                var1 = var0.bind(var1)();
                var0 = '';
                if (!var1) {
                    _fun54346_ip = 106;
                    continue _fun54346
                }
            case 51:
                var1 = _closure1_slot7;
                var2 = var1.convert;
                var1 = var2.toCodePoint;
                var4 = var1.bind(var2)(var3);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'asset:/emoji-';
                var1 = '.png';
                var0 = var3.bind(var2)(var4, var1);
            case 106:
                return var0;
        }
    };
    var _closure1_slot8 = var8;
    var0 = function() { // Original name: _getEmojiColors, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun54349: for (var _fun54349_ip = 0;;) switch (_fun54349_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54349_ip = 282;
                            continue _fun54349
                        }
                    case 13:
                        var7 = var2.id;
                        var5 = var2.name;
                        var4 = null;
                        if (!(var4 == var7)) {
                            _fun54349_ip = 45;
                            continue _fun54349
                        }
                    case 29:
                        var3 = _closure1_slot8;
                        var1 = undefined;
                        var6 = var3.bind(var1)(var5);
                        _fun54349_ip = 101;
                        continue _fun54349;
                    case 45:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.getEmojiURL;
                        var1 = {
                            'id': null,
                            'size': 32,
                            'animated': false
                        };
                        var1.id = var7;
                        var6 = var3.bind(var5)(var1);
                    case 101:
                        var1 = '';
                        if (!(var1 === var6)) {
                            _fun54349_ip = 201;
                            continue _fun54349
                        }
                    case 109:
                        var3 = _closure1_slot5;
                        var5 = var3.ImageManager;
                        var3 = var5.getEmojiBase64;
                        var2 = var2.name;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 8;
                        var7 = var7[var1];
                        var1 = undefined;
                        var1 = var8.bind(var1)(var7);
                        var1 = var1.EMOJI_IN_ANIMATION_SIZE;
                        var1 = var3.bind(var5)(var2, var1);
                        SaveGenerator(address = 171);
                    case 169:
                        return var1;
                    case 171:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54349_ip = 279;
                            continue _fun54349
                        }
                    case 177:
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = 'data:image/png;base64,';
                        var6 = var3.bind(var2)(var1);
                    case 201:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.getPaletteForAvatar;
                        var2 = var2.bind(var5)(var6);
                        SaveGenerator(address = 241);
                    case 239:
                        return var2;
                    case 241:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun54349_ip = 276;
                            continue _fun54349
                        }
                    case 247:
                        var4 = var4 == var2;
                        var3 = undefined;
                        if (var4) {
                            _fun54349_ip = 273;
                            continue _fun54349
                        }
                    case 256:
                        var5 = var2.map;
                        var4 = function(arg0) { // Environment: var4
                            var3 = _closure1_slot3;
                            var5 = undefined;
                            var2 = arg0;
                            var1 = 3;
                            var2 = var3.bind(var5)(var2, var1);
                            var1 = 0;
                            var4 = var2[var1];
                            var1 = 1;
                            var3 = var2[var1];
                            var1 = 2;
                            var2 = var2[var1];
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 10;
                            var0 = var6[var0];
                            var1 = var1.bind(var5)(var0);
                            var0 = var1.rgbToHex;
                            var0 = var0.bind(var1)(var4, var3, var2);
                            return var0;
                        };
                        var3 = var5.bind(var2)(var4);
                    case 273:
                        return var3;
                    case 276:
                        return var2;
                    case 279:
                        return var1;
                    case 282:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.NativeModules;
    var _closure1_slot5 = var6;
    var1 = var1.processColor;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var6 = 12;
    var6 = var5[var6];
    var7 = var7.bind(var0)(var6);
    var6 = var7.makeMemoizer;
    var6 = var6.bind(var7)(var8);
    var1.getURL = var6;
    var6 = function(arg0) { // Original name: filterUnsupportedEmojis, environment: var3
        _fun54351: for (var _fun54351_ip = 0;;) switch (_fun54351_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isAndroid;
                var2 = var0.bind(var2)();
                var0 = var4;
                if (var2) {
                    _fun54351_ip = 82;
                    continue _fun54351
                }
            case 44:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    _fun54352: for (var _fun54352_ip = 0;;) switch (_fun54352_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.unicodeVersion;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 4;
                            var0 = var0[var6];
                            var7 = undefined;
                            var1 = var1.bind(var7)(var0);
                            var0 = var1.getSystemVersion;
                            var3 = var0.bind(var1)();
                            var1 = var3.split;
                            var0 = '.';
                            var0 = var1.bind(var3)(var0);
                            var1 = global;
                            var5 = var1.parseInt;
                            var4 = 0;
                            var3 = var0[var4];
                            var3 = var5.bind(var7)(var3);
                            var8 = var0.length;
                            var5 = 1;
                            var8 = var8 > var5;
                            if (!var8) {
                                _fun54352_ip = 106;
                                continue _fun54352
                            }
                        case 91:
                            var1 = var1.parseInt;
                            var0 = var0[var5];
                            var4 = var1.bind(var7)(var0);
                        case 106:
                            var0 = 8;
                            var1 = var2 > var0;
                            var0 = true;
                            if (!var1) {
                                _fun54352_ip = 521;
                                continue _fun54352
                            }
                        case 121:
                            var1 = 9;
                            if (!(var1 !== var2)) {
                                _fun54352_ip = 491;
                                continue _fun54352
                            }
                        case 131:
                            var1 = 10;
                            if (!(var1 !== var2)) {
                                _fun54352_ip = 462;
                                continue _fun54352
                            }
                        case 141:
                            var1 = 11;
                            if (!(var1 !== var2)) {
                                _fun54352_ip = 433;
                                continue _fun54352
                            }
                        case 151:
                            var1 = 12;
                            if (!(var1 !== var2)) {
                                _fun54352_ip = 401;
                                continue _fun54352
                            }
                        case 161:
                            var1 = 12.1;
                            if (!(var1 !== var2)) {
                                _fun54352_ip = 401;
                                continue _fun54352
                            }
                        case 178:
                            var1 = 13;
                            if (!(var1 !== var2)) {
                                _fun54352_ip = 369;
                                continue _fun54352
                            }
                        case 188:
                            var1 = 13.1;
                            if (!(var1 !== var2)) {
                                _fun54352_ip = 334;
                                continue _fun54352
                            }
                        case 205:
                            var1 = 14;
                            if (!(var1 !== var2)) {
                                _fun54352_ip = 302;
                                continue _fun54352
                            }
                        case 212:
                            var1 = 15;
                            if (!(var1 !== var2)) {
                                _fun54352_ip = 270;
                                continue _fun54352
                            }
                        case 219:
                            var0 = false;
                            var1 = 15.1;
                            if (!(var1 === var2)) {
                                _fun54352_ip = 521;
                                continue _fun54352
                            }
                        case 238:
                            var2 = 17;
                            var1 = var3 > var2;
                            if (var1) {
                                _fun54352_ip = 262;
                                continue _fun54352
                            }
                        case 248:
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun54352_ip = 259;
                                continue _fun54352
                            }
                        case 255:
                            var2 = var4 >= var6;
                        case 259:
                            var1 = var2;
                        case 262:
                            var0 = var1;
                            _fun54352_ip = 521;
                            continue _fun54352;
                        case 270:
                            var2 = 16;
                            var1 = var3 > var2;
                            if (var1) {
                                _fun54352_ip = 294;
                                continue _fun54352
                            }
                        case 280:
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun54352_ip = 291;
                                continue _fun54352
                            }
                        case 287:
                            var2 = var4 >= var6;
                        case 291:
                            var1 = var2;
                        case 294:
                            var0 = var1;
                            _fun54352_ip = 521;
                            continue _fun54352;
                        case 302:
                            var2 = 15;
                            var1 = var3 > var2;
                            if (var1) {
                                _fun54352_ip = 326;
                                continue _fun54352
                            }
                        case 312:
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun54352_ip = 323;
                                continue _fun54352
                            }
                        case 319:
                            var2 = var4 >= var6;
                        case 323:
                            var1 = var2;
                        case 326:
                            var0 = var1;
                            _fun54352_ip = 521;
                            continue _fun54352;
                        case 334:
                            var2 = 14;
                            var1 = var3 > var2;
                            if (var1) {
                                _fun54352_ip = 361;
                                continue _fun54352
                            }
                        case 344:
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun54352_ip = 358;
                                continue _fun54352
                            }
                        case 351:
                            var6 = 5;
                            var2 = var4 >= var6;
                        case 358:
                            var1 = var2;
                        case 361:
                            var0 = var1;
                            _fun54352_ip = 521;
                            continue _fun54352;
                        case 369:
                            var2 = 14;
                            var1 = var3 > var2;
                            if (var1) {
                                _fun54352_ip = 396;
                                continue _fun54352
                            }
                        case 379:
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun54352_ip = 393;
                                continue _fun54352
                            }
                        case 386:
                            var6 = 2;
                            var2 = var4 >= var6;
                        case 393:
                            var1 = var2;
                        case 396:
                            var0 = var1;
                            _fun54352_ip = 521;
                            continue _fun54352;
                        case 401:
                            var2 = 13;
                            var1 = var3 > var2;
                            if (var1) {
                                _fun54352_ip = 428;
                                continue _fun54352
                            }
                        case 411:
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun54352_ip = 425;
                                continue _fun54352
                            }
                        case 418:
                            var6 = 2;
                            var2 = var4 >= var6;
                        case 425:
                            var1 = var2;
                        case 428:
                            var0 = var1;
                            _fun54352_ip = 521;
                            continue _fun54352;
                        case 433:
                            var2 = 12;
                            var1 = var3 > var2;
                            if (var1) {
                                _fun54352_ip = 457;
                                continue _fun54352
                            }
                        case 443:
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun54352_ip = 454;
                                continue _fun54352
                            }
                        case 450:
                            var2 = var4 >= var5;
                        case 454:
                            var1 = var2;
                        case 457:
                            var0 = var1;
                            _fun54352_ip = 521;
                            continue _fun54352;
                        case 462:
                            var2 = 11;
                            var1 = var3 > var2;
                            if (var1) {
                                _fun54352_ip = 486;
                                continue _fun54352
                            }
                        case 472:
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun54352_ip = 483;
                                continue _fun54352
                            }
                        case 479:
                            var2 = var4 >= var5;
                        case 483:
                            var1 = var2;
                        case 486:
                            var0 = var1;
                            _fun54352_ip = 521;
                            continue _fun54352;
                        case 491:
                            var2 = 10;
                            var1 = var3 > var2;
                            if (var1) {
                                _fun54352_ip = 518;
                                continue _fun54352
                            }
                        case 501:
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun54352_ip = 515;
                                continue _fun54352
                            }
                        case 508:
                            var3 = 2;
                            var2 = var4 >= var3;
                        case 515:
                            var1 = var2;
                        case 518:
                            var0 = var1;
                        case 521:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var4, var1);
            case 82:
                return var0;
        }
    };
    var1.filterUnsupportedEmojis = var6;
    var6 = function(arg0) { // Original name: applyPlatformToThemedEmojiColorPalette, environment: var3
        _fun54353: for (var _fun54353_ip = 0;;) switch (_fun54353_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.palette;
                var1 = var1.shouldProcessMobileColors;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun54353_ip = 23;
                    continue _fun54353
                }
            case 21:
                var1 = false;
            case 23:
                if (!var1) {
                    _fun54353_ip = 277;
                    continue _fun54353
                }
            case 29:
                var5 = null;
                if (!(var5 != var0)) {
                    _fun54353_ip = 277;
                    continue _fun54353
                }
            case 38:
                var8 = var0.LIGHT;
                var4 = var0.DARK;
                var1 = {};
                var2 = {};
                var9 = _closure1_slot6;
                var10 = var5 == var8;
                var7 = undefined;
                if (var10) {
                    _fun54353_ip = 76;
                    continue _fun54353
                }
            case 70:
                var7 = var8.accentColor;
            case 76:
                var7 = var9.bind(var3)(var7);
                var2.accentColor = var7;
                var9 = _closure1_slot6;
                var10 = var5 == var8;
                var7 = undefined;
                if (var10) {
                    _fun54353_ip = 104;
                    continue _fun54353
                }
            case 99:
                var7 = var8.backgroundColor;
            case 104:
                var7 = var9.bind(var3)(var7);
                var2.backgroundColor = var7;
                var9 = _closure1_slot6;
                var10 = var5 == var8;
                var7 = undefined;
                if (var10) {
                    _fun54353_ip = 132;
                    continue _fun54353
                }
            case 126:
                var7 = var8.highlightColor;
            case 132:
                var7 = var9.bind(var3)(var7);
                var2.highlightColor = var7;
                var9 = var5 == var8;
                var7 = undefined;
                if (var9) {
                    _fun54353_ip = 156;
                    continue _fun54353
                }
            case 151:
                var7 = var8.opacity;
            case 156:
                var2.opacity = var7;
                var1.LIGHT = var2;
                var2 = {};
                var8 = _closure1_slot6;
                var9 = var5 == var4;
                var7 = undefined;
                if (var9) {
                    _fun54353_ip = 186;
                    continue _fun54353
                }
            case 180:
                var7 = var4.accentColor;
            case 186:
                var7 = var8.bind(var3)(var7);
                var2.accentColor = var7;
                var8 = _closure1_slot6;
                var9 = var5 == var4;
                var7 = undefined;
                if (var9) {
                    _fun54353_ip = 214;
                    continue _fun54353
                }
            case 209:
                var7 = var4.backgroundColor;
            case 214:
                var7 = var8.bind(var3)(var7);
                var2.backgroundColor = var7;
                var7 = _closure1_slot6;
                var8 = var5 == var4;
                var6 = undefined;
                if (var8) {
                    _fun54353_ip = 242;
                    continue _fun54353
                }
            case 236:
                var6 = var4.highlightColor;
            case 242:
                var6 = var7.bind(var3)(var6);
                var2.highlightColor = var6;
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun54353_ip = 266;
                    continue _fun54353
                }
            case 261:
                var3 = var4.opacity;
            case 266:
                var2.opacity = var3;
                var1.DARK = var2;
                return var1;
            case 277:
                return var0;
        }
    };
    var1.applyPlatformToThemedEmojiColorPalette = var6;
    var6 = function() { // Original name: getEmojiColors, environment: var3
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.getEmojiColors = var6;
    var3 = function(arg0) { // Original name: triggerFullscreenAnimation, environment: var3
        var0 = arg0;
        var6 = var0.channelId;
        var5 = var0.messageId;
        var4 = var0.emoji;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.openBurstReactionFirstSendActionSheet;
        var1 = {};
        var1.channelId = var6;
        var1.messageId = var5;
        var1.emoji = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.triggerFullscreenAnimation = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/EmojiUtilsPlatformed.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 27, 3064, 1309, 478, 22, 1417, 6517, 1461, 3199, 6556, 6568, 2]);