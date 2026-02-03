// modules/guilds_bar/useGuildMediaState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun100963: for (var _fun100963_ip = 0;;) switch (_fun100963_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun100963_ip = 46;
                    continue _fun100963
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun100963_ip = 55;
                    continue _fun100963
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun100963_ip = 345;
                    continue _fun100963
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun100963_ip = 323;
                    continue _fun100963
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun100963_ip = 283;
                    continue _fun100963
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun100963_ip = 270;
                    continue _fun100963
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun100963_ip = 163;
                    continue _fun100963
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun100963_ip = 179;
                    continue _fun100963
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun100963_ip = 249;
                    continue _fun100963
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun100963_ip = 249;
                    continue _fun100963
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun100963_ip = 234;
                    continue _fun100963
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun100963_ip = 247;
                    continue _fun100963
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun100963_ip = 265;
                continue _fun100963;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun100963_ip = 283;
                continue _fun100963;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun100963_ip = 323;
                    continue _fun100963
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun100963_ip = 330;
                    continue _fun100963
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun100964: for (var _fun100964_ip = 0;;) switch (_fun100964_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun100964_ip = 56;
                                continue _fun100964
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun100964_ip = 67;
                            continue _fun100964;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun100965: for (var _fun100965_ip = 0;;) switch (_fun100965_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun100965_ip = 23;
                    continue _fun100965
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun100965_ip = 33;
                    continue _fun100965
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun100965_ip = 70;
                    continue _fun100965
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun100965_ip = 55;
                    continue _fun100965
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun100966: for (var _fun100966_ip = 0;;) switch (_fun100966_ip) {
            case 0:
                var4 = arg0;
                var3 = arguments[2];
                var6 = undefined;
                if (!(var3 === var6)) {
                    _fun100966_ip = 19;
                    continue _fun100966
                }
            case 12:
                var3 = _closure1_slot10;
            case 19:
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun100966_ip = 72;
                    continue _fun100966
                }
            case 28:
                var2 = var4.type;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 13;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ChannelTypes;
                var1 = var1.GUILD_STAGE_VOICE;
                var0 = var2 !== var1;
            case 72:
                if (!var0) {
                    _fun100966_ip = 87;
                    continue _fun100966
                }
            case 75:
                var2 = var4.id;
                var1 = arg1;
                var0 = var1 !== var2;
            case 87:
                if (!var0) {
                    _fun100966_ip = 115;
                    continue _fun100966
                }
            case 90:
                var2 = var3.canBasicChannel;
                var1 = _closure1_slot15;
                var1 = var1.VIEW_CHANNEL;
                var0 = var2.bind(var3)(var1, var4);
            case 115:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isVoiceChannel;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BasicPermissions;
    var _closure1_slot15 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/useGuildMediaState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100967: for (var _fun100967_ip = 0;;) switch (_fun100967_ip) {
            case 0:
                var13 = arg0;
                var _closure2_slot0 = var13;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var16 = 14;
                var2 = var5[var16];
                var4 = undefined;
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot13;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot13;
                    var1 = var2.isMuted;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var7.bind(var8)(var6, var2);
                var _closure2_slot1 = var12;
                var2 = 15;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var2 = var6.useGuildActiveEvent;
                var7 = var2.bind(var6)(var13);
                var _closure2_slot2 = var7;
                var2 = var5[var16];
                var9 = var3.bind(var4)(var2);
                var8 = var9.useStateFromStoresArray;
                var2 = _closure1_slot3;
                var6 = new Array(2);
                var6[0] = var2;
                var2 = _closure1_slot11;
                var6[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getEmbeddedActivitiesForGuild;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hasBlockedOrIgnoredUserIds;
                        var1 = arg0;
                        var7 = var1.userIds;
                        var1 = new Array(0);
                        var6 = 0;
                        var8 = var1;
                        var4 = arraySpread(var8, var7, var6);
                        var4 = _closure1_slot11;
                        var0 = var4.getBlockedOrIgnoredIDs;
                        var0 = var0.bind(var4)();
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var9)(var6, var2);
                var _closure2_slot3 = var8;
                var2 = 17;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.getEmbeddedActivityLocationChannelId;
                var2 = 0;
                var6 = var8[var2];
                var2 = null;
                var9 = var2 == var6;
                var2 = undefined;
                if (var9) {
                    _fun100967_ip = 187;
                    continue _fun100967
                }
            case 182:
                var2 = var6.location;
            case 187:
                var9 = var3.bind(var5)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 18;
                var5 = var2[var5];
                var6 = var3.bind(var4)(var5);
                var5 = var6.useIsActivitiesInTextEnabled;
                var9 = var5.bind(var6)(var9);
                var _closure2_slot4 = var9;
                var5 = var2[var16];
                var17 = var3.bind(var4)(var5);
                var11 = var17.useStateFromStoresObject;
                var15 = _closure1_slot12;
                var10 = new Array(5);
                var10[0] = var15;
                var5 = _closure1_slot14;
                var10[1] = var5;
                var5 = _closure1_slot9;
                var10[2] = var5;
                var5 = _closure1_slot10;
                var10[3] = var5;
                var14 = _closure1_slot8;
                var10[4] = var14;
                var6 = new Array(2);
                var6[0] = var13;
                var6[1] = var12;
                var5 = function() { // Environment: var0
                    _fun100971: for (var _fun100971_ip = 0;;) switch (_fun100971_ip) {
                        case 0:
                            var1 = _closure1_slot12;
                            var0 = var1.getVoiceChannelId;
                            var4 = var0.bind(var1)();
                            var5 = _closure1_slot9;
                            var1 = var5.getGuild;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var5)(var0);
                            var1 = null;
                            var5 = var1 == var0;
                            var12 = undefined;
                            var11 = undefined;
                            if (var5) {
                                _fun100971_ip = 57;
                                continue _fun100971
                            }
                        case 51:
                            var11 = var0.afkChannelId;
                        case 57:
                            var9 = _closure1_slot14;
                            var0 = var9.getUsersWithVideo;
                            var8 = _closure2_slot0;
                            var6 = var0.bind(var9)(var8);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 16;
                            var0 = var7[var0];
                            var7 = var5.bind(var12)(var0);
                            var5 = var7.filterBlockedUsersFromVoiceStates;
                            var0 = var9.getVoiceStates;
                            var0 = var0.bind(var9)(var8);
                            var10 = var5.bind(var7)(var0);
                            var0 = {};
                            var7 = _closure2_slot1;
                            var5 = false;
                            if (var7) {
                                _fun100971_ip = 214;
                                continue _fun100971
                            }
                        case 131:
                            var16 = var10;
                            var5 = false;
                            for (var13 in var16)
                                case 144: {
                                    var5 = false;
                                    case 155: var7 = var13;
                                    var20 = _closure1_slot18;
                                    var19 = _closure1_slot8;
                                    var18 = var19.getBasicChannel;
                                    var7 = var10[var7];
                                    var7 = var7.channelId;
                                    var19 = var18.bind(var19)(var7);
                                    var7 = var1 != var11;
                                    var18 = undefined;
                                    if (!var7) {
                                        _fun100971_ip = 198;
                                        continue _fun100971
                                    }
                                    case 195: var18 = var11;
                                    case 198: var7 = _closure1_slot10;
                                    var7 = var20.bind(var12)(var19, var18, var7);
                                    var5 = true;
                                    if (!var7) {
                                        _fun100971_ip = 144;
                                        continue _fun100971
                                    }
                                }
                        case 214:
                            var0.guildHasVoice = var5;
                            var5 = _closure2_slot1;
                            var3 = false;
                            if (var5) {
                                _fun100971_ip = 338;
                                continue _fun100971
                            }
                        case 228:
                            var5 = _closure1_slot16;
                            var8 = var5.bind(var12)(var6);
                            var6 = var8.bind(var12)();
                            var5 = var6.done;
                            var3 = false;
                            if (var5) {
                                _fun100971_ip = 338;
                                continue _fun100971
                            }
                        case 251:
                            var5 = var6.value;
                            var15 = _closure1_slot18;
                            var14 = _closure1_slot8;
                            var13 = var14.getBasicChannel;
                            var16 = var10[var5];
                            var17 = var1 == var16;
                            var5 = undefined;
                            if (var17) {
                                _fun100971_ip = 288;
                                continue _fun100971
                            }
                        case 283:
                            var5 = var16.channelId;
                        case 288:
                            var14 = var13.bind(var14)(var5);
                            var5 = var1 != var11;
                            var13 = undefined;
                            if (!var5) {
                                _fun100971_ip = 305;
                                continue _fun100971
                            }
                        case 302:
                            var13 = var11;
                        case 305:
                            var5 = _closure1_slot10;
                            var5 = var15.bind(var12)(var14, var13, var5);
                            var3 = true;
                            if (var5) {
                                _fun100971_ip = 338;
                                continue _fun100971
                            }
                        case 321:
                            var13 = var8.bind(var12)();
                            var5 = var13.done;
                            var6 = var13;
                            var3 = false;
                            if (!var5) {
                                _fun100971_ip = 251;
                                continue _fun100971
                            }
                        case 338:
                            var0.guildHasVideo = var3;
                            var1 = var1 != var4;
                            if (!var1) {
                                _fun100971_ip = 365;
                                continue _fun100971
                            }
                        case 350:
                            var3 = _closure1_slot14;
                            var2 = var3.hasVideo;
                            var1 = var2.bind(var3)(var4);
                        case 365:
                            var0.selectedVoiceChannelHasVideo = var1;
                            return var0;
                    }
                };
                var10 = var11.bind(var17)(var10, var5, var6);
                var6 = var10.guildHasVoice;
                var _closure2_slot5 = var6;
                var5 = var10.guildHasVideo;
                var _closure2_slot6 = var5;
                var11 = var10.selectedVoiceChannelHasVideo;
                var _closure2_slot7 = var11;
                var17 = _closure1_slot7;
                var10 = var17.getId;
                var10 = var10.bind(var17)();
                var _closure2_slot8 = var10;
                var2 = var2[var16];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStoresObject;
                var2 = new Array(6);
                var2[0] = var15;
                var2[1] = var14;
                var14 = _closure1_slot3;
                var2[2] = var14;
                var14 = _closure1_slot4;
                var2[3] = var14;
                var14 = _closure1_slot6;
                var2[4] = var14;
                var1 = _closure1_slot10;
                var2[5] = var1;
                var1 = new Array(9);
                var1[0] = var13;
                var1[1] = var12;
                var1[2] = var11;
                var1[3] = var10;
                var1[4] = var9;
                var1[5] = var8;
                var1[6] = var7;
                var1[7] = var6;
                var1[8] = var5;
                var0 = function() { // Environment: var0
                    _fun100972: for (var _fun100972_ip = 0;;) switch (_fun100972_ip) {
                        case 0:
                            var2 = _closure1_slot12;
                            var1 = var2.getVoiceChannelId;
                            var11 = var1.bind(var2)();
                            var2 = _closure1_slot8;
                            var1 = var2.getChannel;
                            var1 = var1.bind(var2)(var11);
                            var14 = null;
                            var4 = var14 == var1;
                            var10 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun100972_ip = 51;
                                continue _fun100972
                            }
                        case 46:
                            var2 = var1.guild_id;
                        case 51:
                            var1 = _closure2_slot0;
                            var1 = var2 === var1;
                            if (var1) {
                                _fun100972_ip = 88;
                                continue _fun100972
                            }
                        case 65:
                            var2 = _closure2_slot1;
                            if (!var2) {
                                _fun100972_ip = 88;
                                continue _fun100972
                            }
                        case 72:
                            var2 = {
                                'audio': false,
                                'video': false,
                                'screenshare': false,
                                'liveStage': false,
                                'activeEvent': false,
                                'activity': false,
                                'isCurrentUserConnected': false
                            };
                            return var2;
                        case 88:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 19;
                            var2 = var5[var2];
                            var5 = var4.bind(var10)(var2);
                            var4 = var5.keys;
                            var7 = _closure1_slot4;
                            var6 = var7.getStageInstancesByGuild;
                            var2 = _closure2_slot0;
                            var2 = var6.bind(var7)(var2);
                            var5 = var4.bind(var5)(var2);
                            var4 = var5.some;
                            var2 = function(arg0) { // Environment: var3
                                _fun100973: for (var _fun100973_ip = 0;;) switch (_fun100973_ip) {
                                    case 0:
                                        var3 = _closure1_slot8;
                                        var2 = var3.getChannel;
                                        var0 = arg0;
                                        var4 = var2.bind(var3)(var0);
                                        var0 = null;
                                        var0 = var0 != var4;
                                        if (!var0) {
                                            _fun100973_ip = 73;
                                            continue _fun100973
                                        }
                                    case 29:
                                        var3 = _closure1_slot10;
                                        var2 = var3.can;
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var1 = 20;
                                        var5 = var5[var1];
                                        var1 = undefined;
                                        var1 = var6.bind(var1)(var5);
                                        var1 = var1.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                                        var0 = var2.bind(var3)(var1, var4);
                                    case 73:
                                        return var0;
                                }
                            };
                            var5 = var4.bind(var5)(var2);
                            var2 = var1;
                            var4 = undefined;
                            if (!var1) {
                                _fun100972_ip = 203;
                                continue _fun100972
                            }
                        case 163:
                            var7 = _closure1_slot8;
                            var6 = var7.getChannel;
                            var8 = var6.bind(var7)(var11);
                            var7 = var14 == var8;
                            var6 = undefined;
                            if (var7) {
                                _fun100972_ip = 196;
                                continue _fun100972
                            }
                        case 186:
                            var7 = var8.isGuildStageVoice;
                            var6 = var7.bind(var8)();
                        case 196:
                            var2 = var14 != var6;
                            var4 = var6;
                        case 203:
                            if (!var2) {
                                _fun100972_ip = 209;
                                continue _fun100972
                            }
                        case 206:
                            var2 = var4;
                        case 209:
                            var4 = !var1;
                            var9 = !var4;
                            if (!var1) {
                                _fun100972_ip = 246;
                                continue _fun100972
                            }
                        case 218:
                            var8 = _closure1_slot6;
                            var7 = var8.getActiveStreamForUser;
                            var6 = _closure2_slot8;
                            var4 = _closure2_slot0;
                            var4 = var7.bind(var8)(var6, var4);
                            var9 = var14 != var4;
                        case 246:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 16;
                            var4 = var7[var4];
                            var7 = var6.bind(var10)(var4);
                            var6 = var7.filterOutStreamsByBlockedOwner;
                            var8 = _closure1_slot6;
                            var4 = var8.getAllApplicationStreams;
                            var4 = var4.bind(var8)();
                            var6 = var6.bind(var7)(var4);
                            var4 = var6.some;
                            var3 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var1 = var0.guildId;
                                var0 = _closure2_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var6 = var4.bind(var6)(var3);
                            var3 = _closure2_slot4;
                            if (var3) {
                                _fun100972_ip = 446;
                                continue _fun100972
                            }
                        case 319:
                            var4 = _closure1_slot16;
                            var3 = _closure2_slot3;
                            var16 = var4.bind(var10)(var3);
                            var3 = var16.bind(var10)();
                            var4 = var3.done;
                            var8 = 17;
                            var7 = var3;
                            var3 = false;
                            if (var4) {
                                _fun100972_ip = 461;
                                continue _fun100972
                            }
                        case 352:
                            var4 = var7.value;
                            var18 = _closure1_slot8;
                            var17 = var18.getChannel;
                            var20 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var19 = var19[var8];
                            var20 = var20.bind(var10)(var19);
                            var19 = var20.getEmbeddedActivityLocationChannelId;
                            var4 = var4.location;
                            var4 = var19.bind(var20)(var4);
                            var4 = var17.bind(var18)(var4);
                            if (!(var14 != var4)) {
                                _fun100972_ip = 427;
                                continue _fun100972
                            }
                        case 408:
                            var17 = _closure1_slot5;
                            var4 = var4.type;
                            var4 = var17.bind(var10)(var4);
                            var3 = true;
                            if (var4) {
                                _fun100972_ip = 461;
                                continue _fun100972
                            }
                        case 427:
                            var17 = var16.bind(var10)();
                            var4 = var17.done;
                            var7 = var17;
                            var3 = false;
                            if (var4) {
                                _fun100972_ip = 461;
                                continue _fun100972
                            }
                        case 444:
                            _fun100972_ip = 352;
                            continue _fun100972;
                        case 446:
                            var4 = _closure2_slot3;
                            var7 = var4.length;
                            var4 = 0;
                            var3 = var7 > var4;
                        case 461:
                            var7 = _closure1_slot3;
                            var4 = var7.getEmbeddedActivitiesForGuild;
                            var0 = _closure2_slot0;
                            var0 = var4.bind(var7)(var0);
                            var4 = var0.length;
                            var0 = 0;
                            var0 = var4 > var0;
                            if (var1) {
                                _fun100972_ip = 512;
                                continue _fun100972
                            }
                        case 494:
                            var8 = _closure2_slot5;
                            var4 = _closure2_slot2;
                            var4 = var14 != var4;
                            var7 = _closure2_slot6;
                            _fun100972_ip = 565;
                            continue _fun100972;
                        case 512:
                            var13 = _closure2_slot2;
                            var13 = var14 == var13;
                            var10 = undefined;
                            if (var13) {
                                _fun100972_ip = 534;
                                continue _fun100972
                            }
                        case 525:
                            var13 = _closure2_slot2;
                            var10 = var13.channel_id;
                        case 534:
                            var11 = var10 === var11;
                            var10 = var1;
                            if (!var1) {
                                _fun100972_ip = 548;
                                continue _fun100972
                            }
                        case 544:
                            var10 = _closure2_slot7;
                        case 548:
                            var8 = true;
                            var7 = var10;
                            var4 = var11;
                            var5 = var2;
                            var6 = var9;
                            var3 = var0;
                        case 565:
                            var0 = {};
                            var0.audio = var8;
                            var0.video = var7;
                            var0.screenshare = var6;
                            var0.liveStage = var5;
                            var0.activeEvent = var4;
                            var0.activity = var3;
                            if (var1) {
                                _fun100972_ip = 603;
                                continue _fun100972
                            }
                        case 600:
                            var1 = var2;
                        case 603:
                            var0.isCurrentUserConnected = var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 1377, 1376, 3705, 1216, 1372, 1410, 3082, 3091, 1661, 4299, 3512, 660, 790, 566, 8075, 13155, 3072, 6814, 21, 1380, 2]);