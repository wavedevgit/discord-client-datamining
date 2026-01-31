// modules/video_calls/native/usePipVideoOrStream.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.isStreamParticipant;
    var _closure1_slot11 = var4;
    var4 = var3.isUserParticipant;
    var _closure1_slot12 = var4;
    var3 = var3.ParticipantTypes;
    var _closure1_slot13 = var3;
    var3 = function(arg0) { // Original name: usePipVideoOrStream, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 9;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot10;
        var2[1] = var6;
        var1 = _closure1_slot5;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun62806: for (var _fun62806_ip = 0;;) switch (_fun62806_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun62806_ip = 21;
                        continue _fun62806
                    }
                case 15:
                    var2 = new Array(0);
                    _fun62806_ip = 43;
                    continue _fun62806;
                case 21:
                    var5 = _closure1_slot4;
                    var1 = var5.getVideoParticipants;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var5)(var0);
                case 43:
                    var0 = _closure2_slot0;
                    var0 = var3 != var0;
                    var5 = null;
                    if (!var0) {
                        _fun62806_ip = 78;
                        continue _fun62806
                    }
                case 56:
                    var7 = _closure1_slot4;
                    var1 = var7.getSelectedParticipant;
                    var0 = _closure2_slot0;
                    var5 = var1.bind(var7)(var0);
                case 78:
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var4
                        _fun62807: for (var _fun62807_ip = 0;;) switch (_fun62807_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.type;
                                var0 = _closure1_slot13;
                                var0 = var0.USER;
                                var0 = var2 === var0;
                                if (!var0) {
                                    _fun62807_ip = 37;
                                    continue _fun62807
                                }
                            case 28:
                                var1 = var1.localVideoDisabled;
                                var0 = !var1;
                            case 37:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var8 = _closure1_slot15;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.channelId = var7;
                    var9 = _closure1_slot10;
                    var1.VideoSpeakerStore = var9;
                    var9 = _closure1_slot4;
                    var1.ChannelRTCStore = var9;
                    var9 = undefined;
                    var1 = var8.bind(var9)(var1);
                    if (!(var3 == var7)) {
                        _fun62806_ip = 145;
                        continue _fun62806
                    }
                case 139:
                    var10 = new Array(0);
                    _fun62806_ip = 164;
                    continue _fun62806;
                case 145:
                    var8 = _closure1_slot5;
                    var7 = var8.getAllActiveStreamsForChannel;
                    var6 = _closure2_slot0;
                    var10 = var7.bind(var8)(var6);
                case 164:
                    var _closure3_slot0 = var1;
                    var6 = _closure1_slot11;
                    var6 = var6.bind(var9)(var1);
                    var7 = var1;
                    if (!var6) {
                        _fun62806_ip = 218;
                        continue _fun62806
                    }
                case 183:
                    var8 = var10.filter;
                    var6 = function(arg0) { // Environment: var4
                        _fun62808: for (var _fun62808_ip = 0;;) switch (_fun62808_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.encodeStreamKey;
                                var1 = {};
                                var5 = var4.streamType;
                                var1.streamType = var5;
                                var5 = var4.guildId;
                                var1.guildId = var5;
                                var5 = var4.channelId;
                                var1.channelId = var5;
                                var4 = var4.ownerId;
                                var1.ownerId = var4;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot0;
                                var3 = null;
                                var3 = var3 == var2;
                                if (var3) {
                                    _fun62808_ip = 102;
                                    continue _fun62808
                                }
                            case 97:
                                var0 = var2.id;
                            case 102:
                                var0 = var1 === var0;
                                return var0;
                        }
                    };
                    var6 = var8.bind(var10)(var6);
                    var8 = var6.length;
                    var6 = 0;
                    if (!(!(var8 > var6))) {
                        _fun62806_ip = 215;
                        continue _fun62806
                    }
                case 209:
                    _closure3_slot0 = var9;
                    var1 = undefined;
                case 215:
                    var7 = var1;
                case 218:
                    var1 = var0;
                    if (!(var3 != var7)) {
                        _fun62806_ip = 228;
                        continue _fun62806
                    }
                case 225:
                    var1 = var7;
                case 228:
                    var4 = var3 != var5;
                    if (!var4) {
                        _fun62806_ip = 258;
                        continue _fun62806
                    }
                case 235:
                    var6 = var5.id;
                    var8 = var3 == var7;
                    var5 = undefined;
                    if (var8) {
                        _fun62806_ip = 254;
                        continue _fun62806
                    }
                case 249:
                    var5 = var7.id;
                case 254:
                    var4 = var6 === var5;
                case 258:
                    if (!var4) {
                        _fun62806_ip = 265;
                        continue _fun62806
                    }
                case 261:
                    var4 = var3 != var1;
                case 265:
                    if (!var4) {
                        _fun62806_ip = 291;
                        continue _fun62806
                    }
                case 268:
                    var6 = var1.id;
                    var8 = var3 == var7;
                    var5 = undefined;
                    if (var8) {
                        _fun62806_ip = 287;
                        continue _fun62806
                    }
                case 282:
                    var5 = var7.id;
                case 287:
                    var4 = var6 === var5;
                case 291:
                    if (!var4) {
                        _fun62806_ip = 341;
                        continue _fun62806
                    }
                case 294:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 11;
                    var5 = var10[var5];
                    var7 = var6.bind(var9)(var5);
                    var6 = var7.isModalOpen;
                    var8 = _closure1_slot1;
                    var5 = 12;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var4 = var6.bind(var7)(var5);
                case 341:
                    if (!var4) {
                        _fun62806_ip = 347;
                        continue _fun62806
                    }
                case 344:
                    var1 = var0;
                case 347:
                    var4 = var3 != var1;
                    var0 = null;
                    if (!var4) {
                        _fun62806_ip = 395;
                        continue _fun62806
                    }
                case 356:
                    var4 = var1.type;
                    var2 = _closure1_slot13;
                    var2 = var2.ACTIVITY;
                    var0 = null;
                    if (!(var4 !== var2)) {
                        _fun62806_ip = 395;
                        continue _fun62806
                    }
                case 377:
                    var2 = var1.streamId;
                    var2 = var3 != var2;
                    var0 = null;
                    if (!var2) {
                        _fun62806_ip = 395;
                        continue _fun62806
                    }
                case 392:
                    var0 = var1;
                case 395:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot14 = var3;
    var4 = function(arg0) { // Original name: getVideoOrStreamParticipant, environment: var1
        _fun62809: for (var _fun62809_ip = 0;;) switch (_fun62809_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var7 = var0.VideoSpeakerStore;
                var5 = var0.ChannelRTCStore;
                var0 = null;
                if (!(var0 == var6)) {
                    _fun62809_ip = 32;
                    continue _fun62809
                }
            case 26:
                var3 = new Array(0);
                _fun62809_ip = 43;
                continue _fun62809;
            case 32:
                var1 = var5.getVideoParticipants;
                var3 = var1.bind(var5)(var6);
            case 43:
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    _fun62810: for (var _fun62810_ip = 0;;) switch (_fun62810_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.id;
                            var4 = _closure1_slot6;
                            var0 = var4.getId;
                            var0 = var0.bind(var4)();
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun62810_ip = 58;
                                continue _fun62810
                            }
                        case 32:
                            var3 = _closure1_slot12;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = !var1;
                            if (var1) {
                                _fun62810_ip = 55;
                                continue _fun62810
                            }
                        case 49:
                            var1 = var2.localVideoDisabled;
                        case 55:
                            var0 = var1;
                        case 58:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var3 = var0 != var6;
                var2 = null;
                if (!var3) {
                    _fun62809_ip = 94;
                    continue _fun62809
                }
            case 69:
                var4 = var5.getParticipant;
                var3 = var7.getSpeaker;
                var3 = var3.bind(var7)(var6);
                var2 = var4.bind(var5)(var6, var3);
            case 94:
                if (!(var0 != var2)) {
                    _fun62809_ip = 101;
                    continue _fun62809
                }
            case 98:
                var1 = var2;
            case 101:
                var3 = _closure1_slot12;
                var2 = undefined;
                var2 = var3.bind(var2)(var1);
                if (!var2) {
                    _fun62809_ip = 129;
                    continue _fun62809
                }
            case 118:
                var2 = var1.localVideoDisabled;
                var0 = null;
                if (var2) {
                    _fun62809_ip = 132;
                    continue _fun62809
                }
            case 129:
                var0 = var1;
            case 132:
                return var0;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/usePipVideoOrStream.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        _fun62811: for (var _fun62811_ip = 0;;) switch (_fun62811_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.isActivityViewFocused;
                var _closure2_slot0 = var5;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 9;
                var2 = var2[var8];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var6.bind(var7)(var3, var2);
                var _closure2_slot1 = var7;
                var3 = _closure1_slot14;
                var2 = null;
                var6 = var2 != var7;
                var2 = undefined;
                if (!var6) {
                    _fun62811_ip = 94;
                    continue _fun62811
                }
            case 91:
                var2 = var7;
            case 94:
                var6 = var3.bind(var4)(var2);
                _closure2_slot2 = var6;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStores;
                var8 = _closure1_slot7;
                var2 = new Array(3);
                var2[0] = var8;
                var8 = _closure1_slot3;
                var2[1] = var8;
                var1 = _closure1_slot8;
                var2[2] = var1;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    _fun62813: for (var _fun62813_ip = 0;;) switch (_fun62813_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var2 = var4.getChannel;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var4)(var0);
                            var4 = null;
                            if (!(var4 != var0)) {
                                _fun62813_ip = 132;
                                continue _fun62813
                            }
                        case 30:
                            var2 = _closure1_slot3;
                            var0 = var2.getCurrentEmbeddedActivity;
                            var0 = var0.bind(var2)();
                            var2 = _closure2_slot2;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun62813_ip = 79;
                                continue _fun62813
                            }
                        case 55:
                            var6 = _closure1_slot8;
                            var5 = var6.isLocalVideoDisabled;
                            var1 = _closure2_slot2;
                            var1 = var1.id;
                            var2 = var5.bind(var6)(var1);
                        case 79:
                            var0 = var4 != var0;
                            if (!var0) {
                                _fun62813_ip = 93;
                                continue _fun62813
                            }
                        case 86:
                            var1 = _closure2_slot0;
                            var0 = !var1;
                        case 93:
                            if (var0) {
                                _fun62813_ip = 130;
                                continue _fun62813
                            }
                        case 96:
                            var1 = _closure2_slot2;
                            var1 = var4 != var1;
                            if (!var1) {
                                _fun62813_ip = 121;
                                continue _fun62813
                            }
                        case 107:
                            var3 = _closure2_slot2;
                            var3 = var3.streamId;
                            var1 = var4 != var3;
                        case 121:
                            if (!var1) {
                                _fun62813_ip = 127;
                                continue _fun62813
                            }
                        case 124:
                            var1 = !var2;
                        case 127:
                            var0 = var1;
                        case 130:
                            return var0;
                        case 132:
                            var0 = false;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.useHasPipParticipant = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 3907, 3673, 1216, 1372, 3435, 3477, 7862, 3482, 566, 3464, 3878, 7843, 2]);