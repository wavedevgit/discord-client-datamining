// modules/guild_progress/GuildProgressHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function(arg0) { // Original name: useGuildChannelCreated, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun80079: for (var _fun80079_ip = 0;;) switch (_fun80079_ip) {
                case 0:
                    var3 = function(arg0) { // Original name: hasNewChannel, environment: var0
                        _fun80080: for (var _fun80080_ip = 0;;) switch (_fun80080_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var0 = null;
                                var0 = var0 != var2;
                                if (!var0) {
                                    _fun80080_ip = 108;
                                    continue _fun80080
                                }
                            case 16:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 12;
                                var2 = var6[var3];
                                var4 = undefined;
                                var8 = var5.bind(var4)(var2);
                                var7 = var8.extractTimestamp;
                                var2 = arg0;
                                var2 = var2.channel;
                                var2 = var2.id;
                                var2 = var7.bind(var8)(var2);
                                var3 = var6[var3];
                                var4 = var5.bind(var4)(var3);
                                var3 = var4.extractTimestamp;
                                var1 = _closure2_slot0;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var1);
                                var2 = var2 - var1;
                                var1 = 500;
                                var0 = var2 > var1;
                            case 108:
                                return var0;
                        }
                    };
                    var4 = _closure1_slot8;
                    var2 = var4.getChannels;
                    var6 = _closure2_slot0;
                    var1 = null;
                    var6 = var1 == var6;
                    var1 = undefined;
                    if (var6) {
                        _fun80079_ip = 49;
                        continue _fun80079
                    }
                case 40:
                    var5 = _closure2_slot0;
                    var1 = var5.id;
                case 49:
                    var1 = var2.bind(var4)(var1);
                    var2 = _closure1_slot7;
                    var2 = var1[var2];
                    var0 = _closure1_slot6;
                    var1 = var1[var0];
                    var0 = var1.some;
                    var0 = var0.bind(var1)(var3);
                    if (var0) {
                        _fun80079_ip = 95;
                        continue _fun80079
                    }
                case 84:
                    var1 = var2.some;
                    var0 = var1.bind(var2)(var3);
                case 95:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot16 = var7;
    var6 = function(arg0) { // Original name: useGuildPopulated, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 10;
        var5 = var7[var2];
        var3 = undefined;
        var10 = var4.bind(var3)(var5);
        var9 = var10.useStateFromStores;
        var5 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var5;
        var5 = function() { // Environment: var0
            _fun80082: for (var _fun80082_ip = 0;;) switch (_fun80082_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var4 = _closure2_slot0;
                    var0 = null;
                    var4 = var0 == var4;
                    var0 = undefined;
                    if (var4) {
                        _fun80082_ip = 40;
                        continue _fun80082
                    }
                case 30:
                    var3 = _closure2_slot0;
                    var0 = var3.systemChannelId;
                case 40:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var5 = var9.bind(var10)(var8, var5);
        var _closure2_slot1 = var5;
        var5 = var7[var2];
        var10 = var4.bind(var3)(var5);
        var9 = var10.useStateFromStoresArray;
        var5 = _closure1_slot12;
        var8 = new Array(1);
        var8[0] = var5;
        var5 = function() { // Environment: var0
            _fun80083: for (var _fun80083_ip = 0;;) switch (_fun80083_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun80083_ip = 19;
                        continue _fun80083
                    }
                case 13:
                    var0 = new Array(0);
                    _fun80083_ip = 56;
                    continue _fun80083;
                case 19:
                    var3 = _closure1_slot12;
                    var2 = var3.getMessages;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.toArray;
                    var0 = var1.bind(var2)();
                case 56:
                    return var0;
            }
        };
        var5 = var9.bind(var10)(var8, var5);
        var _closure2_slot2 = var5;
        var2 = var7[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun80084: for (var _fun80084_ip = 0;;) switch (_fun80084_ip) {
                case 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getMemberCount;
                    var1 = _closure2_slot0;
                    var2 = null;
                    var5 = var2 == var1;
                    var1 = undefined;
                    if (var5) {
                        _fun80084_ip = 40;
                        continue _fun80084
                    }
                case 31:
                    var5 = _closure2_slot0;
                    var1 = var5.id;
                case 40:
                    var1 = var3.bind(var4)(var1);
                    var3 = var2 != var1;
                    var2 = 0;
                    if (!var3) {
                        _fun80084_ip = 57;
                        continue _fun80084
                    }
                case 54:
                    var2 = var1;
                case 57:
                    var3 = _closure2_slot2;
                    var1 = var3.some;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot15;
                        var0 = var0.USER_JOIN;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var1.bind(var3)(var0);
                    var0 = 1;
                    var0 = var2 > var0;
                    if (var0) {
                        _fun80084_ip = 94;
                        continue _fun80084
                    }
                case 91:
                    var0 = var1;
                case 94:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot17 = var6;
    var5 = function(arg0) { // Original name: useGuildPersonalized, environment: var1
        _fun80086: for (var _fun80086_ip = 0;;) switch (_fun80086_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 10;
                var1 = var6[var4];
                var0 = undefined;
                var9 = var5.bind(var0)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot11;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var2
                    var1 = _closure1_slot11;
                    var0 = var1.hasLayers;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var8.bind(var9)(var7, var1);
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() { // Environment: var2
                    _fun80088: for (var _fun80088_ip = 0;;) switch (_fun80088_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun80088_ip = 39;
                                continue _fun80088
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var0 = var3.id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3, var2);
                var2 = null;
                var4 = var2 == var3;
                if (var4) {
                    _fun80086_ip = 117;
                    continue _fun80086
                }
            case 112:
                var0 = var3.icon;
            case 117:
                var0 = var2 != var0;
                if (!var0) {
                    _fun80086_ip = 127;
                    continue _fun80086
                }
            case 124:
                var0 = !var1;
            case 127:
                return var0;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function(arg0) { // Original name: useChannelsMessaged, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 10;
        var6 = var5[var2];
        var3 = undefined;
        var9 = var4.bind(var3)(var6);
        var8 = var9.useStateFromStores;
        var6 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var0
            var1 = _closure1_slot4;
            var0 = var1.getId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var8.bind(var9)(var7, var6);
        var _closure2_slot1 = var6;
        var2 = var5[var2];
        var3 = var4.bind(var3)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot12;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.some;
            var1 = _closure2_slot0;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot12;
                var2 = var3.getMessages;
                var1 = arg0;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = var2.toArray;
                var3 = var1.bind(var2)();
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    _fun80093: for (var _fun80093_ip = 0;;) switch (_fun80093_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.author;
                            var1 = var0.id;
                            var0 = _closure2_slot1;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun80093_ip = 61;
                                continue _fun80093
                            }
                        case 28:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = var1.bind(var2)(var3);
                            var0 = !var1;
                        case 61:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var4;
    var3 = function(arg0) { // Original name: useGuildMessaged, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var1 = var2[var1];
        var2 = undefined;
        var6 = var4.bind(var2)(var1);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() { // Environment: var0
            _fun80095: for (var _fun80095_ip = 0;;) switch (_fun80095_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun80095_ip = 43;
                        continue _fun80095
                    }
                case 16:
                    var3 = _closure1_slot5;
                    var2 = var3.getMutableBasicGuildChannelsForGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = var2.bind(var3)(var1);
                case 43:
                    return var0;
            }
        };
        var6 = var5.bind(var6)(var4, var1);
        var _closure2_slot1 = var6;
        var1 = _closure1_slot19;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var0 = function() { // Environment: var0
            _fun80096: for (var _fun80096_ip = 0;;) switch (_fun80096_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun80096_ip = 54;
                        continue _fun80096
                    }
                case 13:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.values;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    _fun80096_ip = 58;
                    continue _fun80096;
                case 54:
                    var0 = new Array(0);
                case 58:
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot20 = var3;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var12 = var10[var0];
    var8 = arg3;
    var0 = undefined;
    var8 = var8.bind(var0)(var12);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var12 = var10[var8];
    var12 = var9.bind(var0)(var12);
    var13 = var12.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = var13;
    var12 = var12.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot7 = var12;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot10 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot11 = var8;
    var8 = 7;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot12 = var8;
    var8 = 8;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot13 = var8;
    var8 = 9;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.Permissions;
    var _closure1_slot14 = var11;
    var8 = var8.MessageTypes;
    var _closure1_slot15 = var8;
    var8 = 15;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_progress/GuildProgressHooks.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function(arg0, arg1) { // Original name: usePermissions, environment: var1
        var5 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var1 = _closure1_slot13;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun80098: for (var _fun80098_ip = 0;;) switch (_fun80098_ip) {
                case 0:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var6 = var7.canViewInviteModal;
                    var5 = _closure1_slot13;
                    var1 = _closure2_slot1;
                    var4 = _closure2_slot0;
                    var4 = var6.bind(var7)(var5, var1, var4);
                    var0.canInvite = var4;
                    var4 = null;
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun80098_ip = 99;
                        continue _fun80098
                    }
                case 69:
                    var8 = _closure1_slot13;
                    var7 = var8.can;
                    var5 = _closure1_slot14;
                    var6 = var5.MANAGE_GUILD;
                    var5 = _closure2_slot1;
                    var1 = var7.bind(var8)(var6, var5);
                case 99:
                    var0.canManageGuild = var1;
                    var1 = _closure2_slot0;
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun80098_ip = 145;
                        continue _fun80098
                    }
                case 115:
                    var8 = _closure1_slot13;
                    var7 = var8.can;
                    var5 = _closure1_slot14;
                    var6 = var5.SEND_MESSAGES;
                    var5 = _closure2_slot0;
                    var1 = var7.bind(var8)(var6, var5);
                case 145:
                    var0.canMessage = var1;
                    var1 = _closure2_slot1;
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun80098_ip = 193;
                        continue _fun80098
                    }
                case 163:
                    var5 = _closure1_slot13;
                    var4 = var5.can;
                    var3 = _closure1_slot14;
                    var3 = var3.MANAGE_CHANNELS;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
                case 193:
                    var0.canCreateChannel = var1;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.usePermissions = var8;
    var2.useGuildChannelCreated = var7;
    var2.useGuildPopulated = var6;
    var2.useGuildPersonalized = var5;
    var2.useChannelsMessaged = var4;
    var2.useGuildMessaged = var3;
    var1 = function(arg0) { // Original name: useCompletedStates, environment: var1
        var3 = arg0;
        var0 = {};
        var4 = _closure1_slot17;
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var0.guildPopulated = var4;
        var4 = _closure1_slot20;
        var4 = var4.bind(var2)(var3);
        var0.guildMessaged = var4;
        var4 = _closure1_slot18;
        var4 = var4.bind(var2)(var3);
        var0.guildPersonalized = var4;
        var1 = _closure1_slot16;
        var1 = var1.bind(var2)(var3);
        var0.guildChannelCreated = var1;
        return var0;
    };
    var2.useCompletedStates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 1372, 1662, 1599, 1410, 5224, 4213, 3050, 660, 566, 8128, 21, 22, 6634, 2]);