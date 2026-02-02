// modules/interaction_components/SearchableSelectActionComponentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0, arg1() {
        _fun56253: for (var _fun56253_ip = 0;;) switch (_fun56253_ip) {
            case 0:
                var3 = arg0;
                var0 = arguments[2];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun56253_ip = 18;
                    continue _fun56253
                }
            case 14:
                var0 = new Array(0);
            case 18:
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var4;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun56253_ip = 34;
                    continue _fun56253
                }
            case 32:
                return var4;
            case 34:
                var6 = _closure1_slot6;
                var5 = var6.getGuild;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                _closure2_slot1 = var2;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun56254: for (var _fun56254_ip = 0;;) switch (_fun56254_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 10;
                            var1 = var1[var5];
                            var6 = undefined;
                            var1 = var3.bind(var6)(var1);
                            var1 = var1.SnowflakeSelectDefaultValueTypes;
                            var1 = var1.USER;
                            if (!(var1 !== var2)) {
                                _fun56254_ip = 404;
                                continue _fun56254
                            }
                        case 52:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var3.bind(var6)(var1);
                            var1 = var1.SnowflakeSelectDefaultValueTypes;
                            var1 = var1.ROLE;
                            if (!(var1 !== var2)) {
                                _fun56254_ip = 289;
                                continue _fun56254
                            }
                        case 88:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var3.bind(var6)(var1);
                            var1 = var1.SnowflakeSelectDefaultValueTypes;
                            var1 = var1.CHANNEL;
                            if (!(var1 !== var2)) {
                                _fun56254_ip = 123;
                                continue _fun56254
                            }
                        case 121:
                            return var6;
                        case 123:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun56254_ip = 287;
                                continue _fun56254
                            }
                        case 139:
                            var7 = _closure1_slot3;
                            var5 = var7.getChannel;
                            var2 = var0.id;
                            var5 = var5.bind(var7)(var2);
                            var7 = var1 == var5;
                            var2 = null;
                            if (var7) {
                                _fun56254_ip = 285;
                                continue _fun56254
                            }
                        case 167:
                            var8 = var5.guild_id;
                            var7 = _closure2_slot1;
                            var7 = var7.id;
                            var2 = null;
                            if (!(var8 === var7)) {
                                _fun56254_ip = 285;
                                continue _fun56254
                            }
                        case 187:
                            var7 = _closure2_slot0;
                            var8 = var7.length;
                            var7 = 0;
                            if (!(var8 > var7)) {
                                _fun56254_ip = 226;
                                continue _fun56254
                            }
                        case 202:
                            var8 = _closure2_slot0;
                            var7 = var8.includes;
                            var3 = var5.type;
                            var3 = var7.bind(var8)(var3);
                            var2 = null;
                            if (!var3) {
                                _fun56254_ip = 285;
                                continue _fun56254
                            }
                        case 226:
                            var3 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 9;
                            var7 = var9[var7];
                            var7 = var8.bind(var6)(var7);
                            var7 = var7.SelectOptionType;
                            var7 = var7.CHANNEL;
                            var3.type = var7;
                            var7 = var5.id;
                            var3.value = var7;
                            var5 = var5.name;
                            var3.label = var5;
                            var2 = var3;
                        case 285:
                            return var2;
                        case 287:
                            return var1;
                        case 289:
                            var3 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun56254_ip = 402;
                                continue _fun56254
                            }
                        case 302:
                            var7 = _closure1_slot5;
                            var5 = var7.getRole;
                            var2 = _closure2_slot1;
                            var3 = var2.id;
                            var2 = var0.id;
                            var5 = var5.bind(var7)(var3, var2);
                            var3 = var1 == var5;
                            var2 = null;
                            if (var3) {
                                _fun56254_ip = 400;
                                continue _fun56254
                            }
                        case 341:
                            var3 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 9;
                            var7 = var9[var7];
                            var7 = var8.bind(var6)(var7);
                            var7 = var7.SelectOptionType;
                            var7 = var7.ROLE;
                            var3.type = var7;
                            var7 = var5.id;
                            var3.value = var7;
                            var5 = var5.name;
                            var3.label = var5;
                            var2 = var3;
                        case 400:
                            return var2;
                        case 402:
                            return var1;
                        case 404:
                            var2 = _closure1_slot7;
                            var1 = var2.getUser;
                            var0 = var0.id;
                            var3 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun56254_ip = 548;
                                continue _fun56254
                            }
                        case 430:
                            var2 = _closure2_slot1;
                            var5 = var0 != var2;
                            var2 = undefined;
                            if (!var5) {
                                _fun56254_ip = 476;
                                continue _fun56254
                            }
                        case 446:
                            var8 = _closure1_slot4;
                            var7 = var8.getNick;
                            var1 = _closure2_slot1;
                            var5 = var1.id;
                            var1 = var3.id;
                            var2 = var7.bind(var8)(var5, var1);
                        case 476:
                            var1 = {};
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 9;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.SelectOptionType;
                            var4 = var4.USER;
                            var1.type = var4;
                            var4 = var3.id;
                            var1.value = var4;
                            if (!(var0 == var2)) {
                                _fun56254_ip = 533;
                                continue _fun56254
                            }
                        case 527:
                            var2 = var3.globalName;
                        case 533:
                            if (!(var0 == var2)) {
                                _fun56254_ip = 542;
                                continue _fun56254
                            }
                        case 537:
                            var2 = var3.username;
                        case 542:
                            var1.label = var2;
                            return var1;
                        case 548:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.filter;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.isNotNullish;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/SearchableSelectActionComponentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 1000;
    var2.MIN_REREQUEST_TIME = var4;
    var4 = function arg0, arg1, arg2() {
        _fun56255: for (var _fun56255_ip = 0;;) switch (_fun56255_ip) {
            case 0:
                var7 = arg0;
                var4 = arg2;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var4 = var2.bind(var3)(var4);
                var _closure2_slot1 = var4;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun56255_ip = 340;
                    continue _fun56255
                }
            case 42:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 6;
                var2 = var2[var9];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.USER_SELECT;
                var6 = var7 === var2;
                if (var6) {
                    _fun56255_ip = 116;
                    continue _fun56255
                }
            case 83:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.MENTIONABLE_SELECT;
                var6 = var7 === var2;
            case 116:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.ROLE_SELECT;
                var5 = var7 === var2;
                if (var5) {
                    _fun56255_ip = 185;
                    continue _fun56255
                }
            case 152:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.MENTIONABLE_SELECT;
                var5 = var7 === var2;
            case 185:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var3 = var2.bind(var3)(var0);
                var2 = var3.queryMentionResults;
                var0 = {};
                var7 = arg1;
                var0.query = var7;
                var0.channel = var4;
                var4 = false;
                var0.canMentionEveryone = var4;
                var0.canMentionHere = var4;
                var0.canMentionUsers = var6;
                var0.canMentionRoles = var5;
                var5 = true;
                var0.includeAllGuildUsers = var5;
                var0.includeNonMentionableRoles = var5;
                var0.checkRecentlyTalkedOnEmptyQuery = var4;
                var4 = 15;
                var0.limit = var4;
                var0 = var2.bind(var3)(var0);
                var3 = var0.users;
                var4 = var0.roles;
                var2 = var3.map;
                var0 = function(arg0) { // Environment: var1
                    _fun56256: for (var _fun56256_ip = 0;;) switch (_fun56256_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 8;
                            var0 = var6[var0];
                            var5 = undefined;
                            var8 = var1.bind(var5)(var0);
                            var7 = var8.getNickname;
                            var4 = _closure2_slot1;
                            var1 = var4.getGuildId;
                            var4 = var1.bind(var4)();
                            var1 = _closure2_slot0;
                            var0 = var2.user;
                            var1 = var7.bind(var8)(var4, var1, var0);
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = 9;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.SelectOptionType;
                            var3 = var3.USER;
                            var0.type = var3;
                            var3 = var2.user;
                            var3 = var3.id;
                            var0.value = var3;
                            var3 = null;
                            if (!(var3 == var1)) {
                                _fun56256_ip = 132;
                                continue _fun56256
                            }
                        case 121:
                            var4 = var2.user;
                            var1 = var4.globalName;
                        case 132:
                            if (!(var3 == var1)) {
                                _fun56256_ip = 146;
                                continue _fun56256
                            }
                        case 136:
                            var2 = var2.user;
                            var1 = var2.username;
                        case 146:
                            var0.label = var1;
                            return var0;
                    }
                };
                var11 = var2.bind(var3)(var0);
                var0 = new Array(0);
                var10 = 0;
                var12 = var0;
                var10 = arraySpread(var12, var11, var10);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.SelectOptionType;
                    var2 = var2.ROLE;
                    var0.type = var2;
                    var2 = var1.id;
                    var0.value = var2;
                    var1 = var1.name;
                    var0.label = var1;
                    return var0;
                };
                var11 = var3.bind(var4)(var1);
                var12 = var0;
                var1 = arraySpread(var12, var11, var10);
                return var0;
            case 340:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.queryMentionables = var4;
    var4 = function arg0, arg1, arg2() {
        _fun56258: for (var _fun56258_ip = 0;;) switch (_fun56258_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun56258_ip = 113;
                    continue _fun56258
                }
            case 26:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.queryApplicationCommandChannelResults;
                var0 = {};
                var4 = arg0;
                var0.query = var4;
                var0.channel = var3;
                var3 = arg2;
                var0.channelTypes = var3;
                var3 = 15;
                var0.limit = var3;
                var0 = var1.bind(var2)(var0);
                var2 = var0.channels;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.SelectOptionType;
                    var2 = var2.CHANNEL;
                    var0.type = var2;
                    var2 = var1.id;
                    var0.value = var2;
                    var1 = var1.name;
                    var0.label = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun56258_ip = 117;
                continue _fun56258;
            case 113:
                var0 = new Array(0);
            case 117:
                return var0;
        }
    };
    var2.queryChannels = var4;
    var3 = function arg0, arg1, arg2() {
        _fun56260: for (var _fun56260_ip = 0;;) switch (_fun56260_ip) {
            case 0:
                var0 = arg0;
                var5 = _closure1_slot8;
                var4 = var5.getInteractionComponentState;
                var2 = var0.id;
                var1 = arg1;
                var2 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot9;
                var4 = var0.defaultValues;
                var9 = var0.type;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 6;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var8.bind(var6)(var1);
                var1 = var1.ComponentType;
                var8 = var1.CHANNEL_SELECT;
                var1 = undefined;
                if (!(var9 === var8)) {
                    _fun56260_ip = 91;
                    continue _fun56260
                }
            case 85:
                var1 = var0.channelTypes;
            case 91:
                var0 = arg2;
                var0 = var5.bind(var6)(var4, var0, var1);
                var1 = null;
                var4 = var1 == var2;
                var5 = undefined;
                if (var4) {
                    _fun56260_ip = 117;
                    continue _fun56260
                }
            case 112:
                var5 = var2.type;
            case 117:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.ComponentType;
                var4 = var4.USER_SELECT;
                if (!(var5 !== var4)) {
                    _fun56260_ip = 294;
                    continue _fun56260
                }
            case 153:
                var4 = var1 == var2;
                var5 = undefined;
                if (var4) {
                    _fun56260_ip = 167;
                    continue _fun56260
                }
            case 162:
                var5 = var2.type;
            case 167:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.ComponentType;
                var4 = var4.ROLE_SELECT;
                if (!(var5 !== var4)) {
                    _fun56260_ip = 294;
                    continue _fun56260
                }
            case 200:
                var4 = var1 == var2;
                var5 = undefined;
                if (var4) {
                    _fun56260_ip = 214;
                    continue _fun56260
                }
            case 209:
                var5 = var2.type;
            case 214:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.ComponentType;
                var4 = var4.MENTIONABLE_SELECT;
                if (!(var5 !== var4)) {
                    _fun56260_ip = 294;
                    continue _fun56260
                }
            case 247:
                var5 = var1 == var2;
                var4 = undefined;
                if (var5) {
                    _fun56260_ip = 261;
                    continue _fun56260
                }
            case 256:
                var4 = var2.type;
            case 261:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.ComponentType;
                var3 = var3.CHANNEL_SELECT;
                if (!(var4 === var3)) {
                    _fun56260_ip = 300;
                    continue _fun56260
                }
            case 294:
                var0 = var2.selectedOptions;
            case 300:
                if (!(var1 == var0)) {
                    _fun56260_ip = 308;
                    continue _fun56260
                }
            case 304:
                var0 = new Array(0);
            case 308:
                return var0;
        }
    };
    var2.getInitialSnowflakeSelectOptions = var3;
    var2.getSnowflakeSelectDefaultValues = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1672, 1665, 1410, 1613, 6787, 1636, 5555, 3922, 3939, 6793, 1304, 2]);