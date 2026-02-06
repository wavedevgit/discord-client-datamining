// modules/stage_channels/StageChannelSelfRichPresenceStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        _fun50425: for (var _fun50425_ip = 0;;) switch (_fun50425_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun50425_ip = 74;
                continue _fun50425;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var8 = function() {
        _fun50428: for (var _fun50428_ip = 0;;) switch (_fun50428_ip) {
            case 0:
                var0 = function() {
                    _fun50429: for (var _fun50429_ip = 0;;) switch (_fun50429_ip) {
                        case 0:
                            var1 = _closure1_slot12;
                            var0 = var1.getVoiceChannelId;
                            var12 = var0.bind(var1)();
                            var0 = null;
                            if (!(var0 != var12)) {
                                _fun50429_ip = 690;
                                continue _fun50429
                            }
                        case 26:
                            var2 = _closure1_slot14;
                            var1 = var2.getStageInstanceByChannel;
                            var11 = var1.bind(var2)(var12);
                            if (!(var0 != var11)) {
                                _fun50429_ip = 688;
                                continue _fun50429
                            }
                        case 48:
                            var2 = _closure1_slot9;
                            var1 = var2.getChannel;
                            var2 = var1.bind(var2)(var12);
                            if (!(var0 != var2)) {
                                _fun50429_ip = 686;
                                continue _fun50429
                            }
                        case 69:
                            var3 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var1 = 13;
                            var1 = var4[var1];
                            var8 = undefined;
                            var4 = var3.bind(var8)(var1);
                            var3 = var4.canEveryone;
                            var1 = _closure1_slot18;
                            var1 = var1.VIEW_CHANNEL;
                            var1 = var3.bind(var4)(var1, var2);
                            if (var1) {
                                _fun50429_ip = 118;
                                continue _fun50429
                            }
                        case 116:
                            return var0;
                        case 118:
                            var4 = _closure1_slot10;
                            var3 = var4.getGuild;
                            var1 = var2.getGuildId;
                            var1 = var1.bind(var2)();
                            var5 = var3.bind(var4)(var1);
                            if (!(var0 != var5)) {
                                _fun50429_ip = 684;
                                continue _fun50429
                            }
                        case 149:
                            var4 = var5.features;
                            var3 = var4.has;
                            var1 = _closure1_slot17;
                            var1 = var1.DISCOVERABLE;
                            var1 = var3.bind(var4)(var1);
                            if (var1) {
                                _fun50429_ip = 180;
                                continue _fun50429
                            }
                        case 178:
                            return var0;
                        case 180:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 14;
                            var1 = var4[var1];
                            var3 = var3.bind(var8)(var1);
                            var1 = var3.packStageChannelPartyId;
                            var3 = var1.bind(var3)(var2, var11);
                            var4 = _closure1_slot20;
                            var6 = var0 == var4;
                            var1 = undefined;
                            if (var6) {
                                _fun50429_ip = 245;
                                continue _fun50429
                            }
                        case 225:
                            var4 = var4.party;
                            var6 = var0 == var4;
                            var1 = undefined;
                            if (var6) {
                                _fun50429_ip = 245;
                                continue _fun50429
                            }
                        case 240:
                            var1 = var4.id;
                        case 245:
                            var10 = null;
                            if (!(var1 === var3)) {
                                _fun50429_ip = 255;
                                continue _fun50429
                            }
                        case 251:
                            var10 = _closure1_slot20;
                        case 255:
                            var7 = _closure1_slot13;
                            var6 = var7.getMutableParticipants;
                            var4 = var2.id;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var1 = 15;
                            var1 = var14[var1];
                            var1 = var13.bind(var8)(var1);
                            var1 = var1.StageChannelParticipantNamedIndex;
                            var1 = var1.SPEAKER;
                            var1 = var6.bind(var7)(var4, var1);
                            var6 = var1.filter;
                            var4 = function(arg0) { // Environment: var4
                                var0 = arg0;
                                var1 = var0.type;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 15;
                                var2 = var2[var0];
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                                var0 = var0.StageChannelParticipantTypes;
                                var0 = var0.STREAM;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var4 = var6.bind(var1)(var4);
                            var6 = var4.length;
                            var1 = var1.length;
                            var4 = var1 - var6;
                            var7 = _closure1_slot13;
                            var1 = var7.getParticipantCount;
                            var1 = var1.bind(var7)(var12);
                            var7 = var1 - var6;
                            var6 = var0 == var10;
                            var1 = undefined;
                            if (var6) {
                                _fun50429_ip = 387;
                                continue _fun50429
                            }
                        case 367:
                            var6 = var10.party;
                            var12 = var0 == var6;
                            var1 = undefined;
                            if (var12) {
                                _fun50429_ip = 387;
                                continue _fun50429
                            }
                        case 382:
                            var1 = var6.size;
                        case 387:
                            var1 = var0 != var1;
                            var6 = 0;
                            if (!var1) {
                                _fun50429_ip = 414;
                                continue _fun50429
                            }
                        case 396:
                            var1 = var10.party;
                            var12 = var1.size;
                            var1 = 1;
                            var6 = var12[var1];
                        case 414:
                            var1 = {};
                            var12 = _closure1_slot15;
                            var1.application_id = var12;
                            var11 = var11.topic;
                            if (!(var0 == var11)) {
                                _fun50429_ip = 441;
                                continue _fun50429
                            }
                        case 435:
                            var11 = var2.topic;
                        case 441:
                            if (!(var0 == var11)) {
                                _fun50429_ip = 450;
                                continue _fun50429
                            }
                        case 445:
                            var11 = var2.name;
                        case 450:
                            var1.name = var11;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot3;
                            var11 = 16;
                            var11 = var13[var11];
                            var12 = var12.bind(var8)(var11);
                            var11 = var12.getStageHasMedia;
                            var2 = var2.id;
                            var2 = var11.bind(var12)(var2);
                            var9 = _closure1_slot16;
                            if (var2) {
                                _fun50429_ip = 505;
                                continue _fun50429
                            }
                        case 497:
                            var2 = var9.LISTENING;
                            _fun50429_ip = 511;
                            continue _fun50429;
                        case 505:
                            var2 = var9.WATCHING;
                        case 511:
                            var1.type = var2;
                            var2 = {};
                            var11 = var0 == var10;
                            var9 = undefined;
                            if (var11) {
                                _fun50429_ip = 546;
                                continue _fun50429
                            }
                        case 526:
                            var10 = var10.timestamps;
                            var11 = var0 == var10;
                            var9 = undefined;
                            if (var11) {
                                _fun50429_ip = 546;
                                continue _fun50429
                            }
                        case 541:
                            var9 = var10.start;
                        case 546:
                            if (!(var0 == var9)) {
                                _fun50429_ip = 588;
                                continue _fun50429
                            }
                        case 550:
                            var10 = global;
                            var10 = var10.Date;
                            var11 = var10.prototype;
                            var11 = Object.create(var11, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var17 = var11;
                            var10 = new var17[var10](var16);
                            var11 = var10 instanceof Object ? var10 : var11;
                            var10 = var11.getTime;
                            var9 = var10.bind(var11)();
                        case 588:
                            var2.start = var9;
                            var1.timestamps = var2;
                            var2 = {};
                            var9 = var5.icon;
                            var10 = var0 != var9;
                            var8 = undefined;
                            if (!var10) {
                                _fun50429_ip = 616;
                                continue _fun50429
                            }
                        case 613:
                            var8 = var9;
                        case 616:
                            var2.small_image = var8;
                            var5 = var5.name;
                            var2.small_text = var5;
                            var1.assets = var2;
                            var2 = {};
                            var2.id = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = global;
                            var5 = var4.Math;
                            var4 = var5.max;
                            var4 = var4.bind(var5)(var7, var6);
                            var3[1] = var4;
                            var2.size = var3;
                            var1.party = var2;
                            return var1;
                        case 684:
                            return var0;
                        case 686:
                            return var0;
                        case 688:
                            return var0;
                        case 690:
                            return var0;
                    }
                };
                var4 = undefined;
                var2 = var0.bind(var4)();
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 17;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = _closure1_slot20;
                var0 = var3.bind(var4)(var2, var0);
                var0 = !var0;
                if (!var0) {
                    _fun50428_ip = 58;
                    continue _fun50428
                }
            case 52:
                _closure1_slot20 = var2;
                var0 = true;
            case 58:
                return var0;
        }
    };
    var _closure1_slot22 = var8;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.STAGE_APPLICATION_ID;
    var _closure1_slot15 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ActivityTypes;
    var _closure1_slot16 = var7;
    var7 = var1.GuildFeatures;
    var _closure1_slot17 = var7;
    var7 = var1.Permissions;
    var _closure1_slot18 = var7;
    var1 = var1.RTCConnectionStates;
    var _closure1_slot19 = var1;
    var1 = null;
    var _closure1_slot20 = var1;
    var1 = 18;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun50432: for (var _fun50432_ip = 0;;) switch (_fun50432_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50432_ip = 69;
                        continue _fun50432
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50432_ip = 105;
                    continue _fun50432;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var7 = this;
            var6 = var7.waitFor;
            var13 = _closure1_slot9;
            var12 = _closure1_slot10;
            var11 = _closure1_slot11;
            var10 = _closure1_slot12;
            var9 = _closure1_slot13;
            var8 = _closure1_slot14;
            var14 = var7;
            var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getActivity';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'StageChannelSelfRichPresenceStore';
    var7.displayName = var1;
    var1 = 19;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var8;
    var1.STAGE_INSTANCE_CREATE = var8;
    var1.STAGE_INSTANCE_UPDATE = var8;
    var1.STAGE_INSTANCE_DELETE = var8;
    var1.VOICE_CHANNEL_SELECT = var8;
    var8 = function arg0() {
        _fun50435: for (var _fun50435_ip = 0;;) switch (_fun50435_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.state;
                var4 = _closure1_slot20;
                var0 = null;
                var6 = var0 == var4;
                var2 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun50435_ip = 64;
                    continue _fun50435
                }
            case 28:
                var4 = var4.party;
                var6 = var0 == var4;
                var3 = undefined;
                if (var6) {
                    _fun50435_ip = 64;
                    continue _fun50435
                }
            case 43:
                var6 = var4.size;
                var4 = var0 == var6;
                var3 = undefined;
                if (var4) {
                    _fun50435_ip = 64;
                    continue _fun50435
                }
            case 57:
                var4 = 1;
                var3 = var6[var4];
            case 64:
                var6 = var0 != var3;
                var4 = 0;
                var0 = 0;
                if (!var6) {
                    _fun50435_ip = 78;
                    continue _fun50435
                }
            case 75:
                var0 = var3;
            case 78:
                var3 = _closure1_slot19;
                var3 = var3.RTC_CONNECTED;
                var3 = var5 !== var3;
                if (var3) {
                    _fun50435_ip = 99;
                    continue _fun50435
                }
            case 95:
                var3 = var0 > var4;
            case 99:
                var0 = !var3;
                if (var3) {
                    _fun50435_ip = 113;
                    continue _fun50435
                }
            case 105:
                var1 = _closure1_slot22;
                var0 = var1.bind(var2)();
            case 113:
                return var0;
        }
    };
    var1.RTC_CONNECTION_STATE = var8;
    var3 = function arg0() {
        _fun50436: for (var _fun50436_ip = 0;;) switch (_fun50436_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.voiceStates;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot20;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun50436_ip = 106;
                    continue _fun50436
                }
            case 30:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 14;
                var2 = var7[var2];
                var7 = var5.bind(var0)(var2);
                var5 = var7.unpackStageChannelParty;
                var2 = _closure1_slot20;
                var2 = var5.bind(var7)(var2);
                _closure2_slot0 = var2;
                var2 = var4 != var2;
                if (!var2) {
                    _fun50436_ip = 95;
                    continue _fun50436
                }
            case 76:
                var5 = var6.find;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.channelId;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
                var2 = var4 != var3;
            case 95:
                if (!var2) {
                    _fun50436_ip = 106;
                    continue _fun50436
                }
            case 98:
                var1 = _closure1_slot22;
                var1 = var1.bind(var0)();
            case 106:
                return var0;
        }
    };
    var1.VOICE_STATE_UPDATES = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/StageChannelSelfRichPresenceStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1410, 3520, 1670, 4246, 1377, 4236, 660, 3098, 5665, 5666, 4245, 644, 566, 806, 2]);