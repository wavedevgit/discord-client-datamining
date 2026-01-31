// modules/request_to_stream/useCanFulfillStreamRequest.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function arg0() {
        _fun78340: for (var _fun78340_ip = 0;;) switch (_fun78340_ip) {
            case 0:
                var8 = arg0;
                var0 = arguments[1];
                var2 = arguments[2];
                var5 = arguments[3];
                var10 = arguments[4];
                var1 = arguments[6];
                var12 = undefined;
                if (!(var0 === var12)) {
                    _fun78340_ip = 28;
                    continue _fun78340
                }
            case 26:
                var0 = false;
            case 28:
                var _closure2_slot0 = var0;
                if (!(var2 === var12)) {
                    _fun78340_ip = 43;
                    continue _fun78340
                }
            case 36:
                var2 = _closure1_slot3;
            case 43:
                if (!(var5 === var12)) {
                    _fun78340_ip = 54;
                    continue _fun78340
                }
            case 47:
                var5 = _closure1_slot5;
            case 54:
                if (!(var10 === var12)) {
                    _fun78340_ip = 65;
                    continue _fun78340
                }
            case 58:
                var10 = _closure1_slot8;
            case 65:
                if (!(var1 === var12)) {
                    _fun78340_ip = 76;
                    continue _fun78340
                }
            case 69:
                var1 = _closure1_slot9;
            case 76:
                var _closure2_slot1 = var12;
                var _closure2_slot2 = var12;
                var4 = var5.getChannel;
                var0 = var8.channel_id;
                var7 = var4.bind(var5)(var0);
                var5 = null;
                if (!(var5 != var7)) {
                    _fun78340_ip = 488;
                    continue _fun78340
                }
            case 108:
                var0 = var1.getChannelId;
                var4 = var0.bind(var1)();
                var0 = var8.channel_id;
                var1 = var2.getCurrentUserActiveStream;
                var1 = var1.bind(var2)();
                var6 = var5 != var1;
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var9 = var9.bind(var12)(var2);
                var2 = var9.getVideoPermission;
                var2 = var2.bind(var9)(var7);
                var9 = var8.application;
                var11 = var5 == var9;
                var8 = undefined;
                if (var11) {
                    _fun78340_ip = 190;
                    continue _fun78340
                }
            case 185:
                var8 = var9.id;
            case 190:
                _closure2_slot1 = var8;
                var9 = _closure1_slot10;
                var9 = var9.DESKTOP;
                _closure2_slot2 = var9;
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var9 = 10;
                var9 = var13[var9];
                var11 = var11.bind(var12)(var9);
                var9 = var11.isAndroid;
                var9 = var9.bind(var11)();
                var11 = _closure1_slot10;
                if (var9) {
                    _fun78340_ip = 253;
                    continue _fun78340
                }
            case 245:
                var9 = var11.IOS;
                _fun78340_ip = 259;
                continue _fun78340;
            case 253:
                var9 = var11.ANDROID;
            case 259:
                _closure2_slot2 = var9;
                if (!(var5 != var8)) {
                    _fun78340_ip = 462;
                    continue _fun78340
                }
            case 270:
                var9 = var10.getActivities;
                var11 = _closure1_slot4;
                var8 = var11.getId;
                var8 = var8.bind(var11)();
                var7 = var7.guild_id;
                var8 = var9.bind(var10)(var8, var7);
                var7 = var8.some;
                var3 = function(arg0) { // Environment: var3
                    _fun78341: for (var _fun78341_ip = 0;;) switch (_fun78341_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.type;
                            var0 = _closure1_slot11;
                            var0 = var0.PLAYING;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun78341_ip = 45;
                                continue _fun78341
                            }
                        case 28:
                            var2 = var3.application_id;
                            var1 = _closure2_slot1;
                            var0 = var2 === var1;
                        case 45:
                            if (!var0) {
                                _fun78341_ip = 78;
                                continue _fun78341
                            }
                        case 48:
                            var1 = _closure2_slot0;
                            var1 = !var1;
                            if (var1) {
                                _fun78341_ip = 75;
                                continue _fun78341
                            }
                        case 61:
                            var3 = var3.platform;
                            var2 = _closure2_slot2;
                            var1 = var3 === var2;
                        case 75:
                            var0 = var1;
                        case 78:
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var3);
                if (var6) {
                    _fun78340_ip = 433;
                    continue _fun78340
                }
            case 322:
                if (!(var4 !== var0)) {
                    _fun78340_ip = 352;
                    continue _fun78340
                }
            case 326:
                var0 = new Array(2);
                var4 = false;
                var0[0] = var4;
                var4 = _closure1_slot12;
                var4 = var4.NOT_IN_VOICE_CHANNEL;
                var0[1] = var4;
                _fun78340_ip = 431;
                continue _fun78340;
            case 352:
                var4 = new Array(2);
                if (var2) {
                    _fun78340_ip = 384;
                    continue _fun78340
                }
            case 359:
                var2 = false;
                var4[0] = var2;
                var2 = _closure1_slot12;
                var2 = var2.NO_PERMISSION;
                var4[1] = var2;
                var2 = var4;
                _fun78340_ip = 428;
                continue _fun78340;
            case 384:
                if (var3) {
                    _fun78340_ip = 412;
                    continue _fun78340
                }
            case 387:
                var3 = false;
                var4[0] = var3;
                var3 = _closure1_slot12;
                var3 = var3.NOT_RUNNING_GAME;
                var4[1] = var3;
                var3 = var4;
                _fun78340_ip = 425;
                continue _fun78340;
            case 412:
                var6 = true;
                var4[0] = var6;
                var4[1] = var5;
                var3 = var4;
            case 425:
                var2 = var3;
            case 428:
                var0 = var2;
            case 431:
                _fun78340_ip = 460;
                continue _fun78340;
            case 433:
                var2 = new Array(2);
                var3 = false;
                var2[0] = var3;
                var3 = _closure1_slot12;
                var3 = var3.ALREADY_STREAMING;
                var2[1] = var3;
                var0 = var2;
            case 460:
                return var0;
            case 462:
                var0 = new Array(2);
                var2 = false;
                var0[0] = var2;
                var1 = _closure1_slot12;
                var1 = var1.NOT_RUNNING_GAME;
                var0[1] = var1;
                return var0;
            case 488:
                var0 = new Array(2);
                var1 = false;
                var0[0] = var1;
                var1 = _closure1_slot12;
                var1 = var1.NOT_IN_VOICE_CHANNEL;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.ActivityGamePlatforms;
    var _closure1_slot10 = var5;
    var3 = var3.ActivityTypes;
    var _closure1_slot11 = var3;
    var3 = {};
    var5 = 'NOT_IN_VOICE_CHANNEL';
    var3.NOT_IN_VOICE_CHANNEL = var5;
    var5 = 'NOT_RUNNING_GAME';
    var3.NOT_RUNNING_GAME = var5;
    var5 = 'ALREADY_STREAMING';
    var3.ALREADY_STREAMING = var5;
    var5 = 'NO_PERMISSION';
    var3.NO_PERMISSION = var5;
    var5 = 'PENDING_REQUEST';
    var3.PENDING_REQUEST = var5;
    var5 = 'EXPIRED';
    var3.EXPIRED = var5;
    var _closure1_slot12 = var3;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/request_to_stream/useCanFulfillStreamRequest.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun78342: for (var _fun78342_ip = 0;;) switch (_fun78342_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun78342_ip = 20;
                    continue _fun78342
                }
            case 18:
                var1 = false;
            case 20:
                var _closure2_slot1 = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 11;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.useStateFromStores;
                var5 = _closure1_slot3;
                var1 = new Array(7);
                var1[0] = var5;
                var5 = _closure1_slot5;
                var1[1] = var5;
                var5 = _closure1_slot8;
                var1[2] = var5;
                var5 = _closure1_slot2;
                var1[3] = var5;
                var5 = _closure1_slot9;
                var1[4] = var5;
                var5 = _closure1_slot6;
                var1[5] = var5;
                var4 = _closure1_slot7;
                var1[6] = var4;
                var0 = function() { // Environment: var0
                    var10 = _closure1_slot13;
                    var19 = _closure2_slot0;
                    var18 = _closure2_slot1;
                    var17 = _closure1_slot3;
                    var16 = _closure1_slot5;
                    var15 = _closure1_slot8;
                    var14 = _closure1_slot2;
                    var13 = _closure1_slot9;
                    var12 = _closure1_slot6;
                    var11 = _closure1_slot7;
                    var20 = undefined;
                    var0 = var20[var10](var19, var18, var17, var16, var15, var14, var13, var12, var11, var10);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.StreamRequestUnfulfillableReason = var3;
    var2.canFulfillStreamRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3442, 3673, 1216, 1372, 1410, 3050, 3569, 3477, 660, 8411, 478, 566, 2]);