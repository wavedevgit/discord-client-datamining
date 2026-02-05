// modules/opt_in_channels/OptInChannelsUtils.tsx
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
        var1 = arg1;
        var0 = arg0;
        var0.index = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Routes;
    var _closure1_slot7 = var6;
    var3 = var3.ChannelTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelFlags;
    var _closure1_slot9 = var6;
    var3 = var3.StaticChannelRoute;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelListGuildActionRow;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReadStateTypes;
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/opt_in_channels/OptInChannelsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2, arg3() {
        var7 = arg1;
        var6 = arg2;
        var2 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var1 = var2.toLowerCase;
        var4 = var1.bind(var2)();
        var _closure2_slot2 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var3);
        var3 = var5.useCanSeeOnboardingHome;
        var1 = arg0;
        var1 = var3.bind(var5)(var1);
        var _closure2_slot3 = var1;
        var3 = _closure1_slot3;
        var5 = var3.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun78156: for (var _fun78156_ip = 0;;) switch (_fun78156_ip) {
                case 0:
                    var4 = arg0;
                    var6 = arg1;
                    var0 = _closure2_slot3;
                    var0 = !var0;
                    if (var0) {
                        _fun78156_ip = 51;
                        continue _fun78156
                    }
                case 19:
                    var3 = var4.channel;
                    var2 = var3.hasFlag;
                    var1 = _closure1_slot9;
                    var1 = var1.IS_GUILD_RESOURCE_CHANNEL;
                    var1 = var2.bind(var3)(var1);
                    var0 = !var1;
                case 51:
                    if (!var0) {
                        _fun78156_ip = 192;
                        continue _fun78156
                    }
                case 57:
                    var1 = var4.channel;
                    var2 = var1.type;
                    var1 = _closure1_slot8;
                    var1 = var1.GUILD_DIRECTORY;
                    var1 = var2 !== var1;
                    if (!var1) {
                        _fun78156_ip = 189;
                        continue _fun78156
                    }
                case 87:
                    var5 = var6.length;
                    var2 = 0;
                    var2 = var2 === var5;
                    if (var2) {
                        _fun78156_ip = 186;
                        continue _fun78156
                    }
                case 101:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var3);
                    var3 = var4.channel;
                    var8 = var3.name;
                    var3 = var8.toLowerCase;
                    var3 = var3.bind(var8)();
                    var3 = var5.bind(var7)(var6, var3);
                    if (var3) {
                        _fun78156_ip = 183;
                        continue _fun78156
                    }
                case 152:
                    var4 = var4.channel;
                    var5 = var4.topic;
                    var4 = var5.toLowerCase;
                    var5 = var4.bind(var5)();
                    var4 = var5.includes;
                    var3 = var4.bind(var5)(var6);
                case 183:
                    var2 = var3;
                case 186:
                    var1 = var2;
                case 189:
                    var0 = var1;
                case 192:
                    return var0;
            }
        };
        var5 = var5.bind(var3)(var1, var2);
        var _closure2_slot4 = var5;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var1 = new Array(0);
            var0.null = var1;
            var1 = new Array(0);
            var0._categories = var1;
            var _closure3_slot0 = var0;
            var5 = _closure2_slot1;
            var4 = _closure1_slot8;
            var4 = var4.GUILD_CATEGORY;
            var6 = var5[var4];
            var5 = var6.forEach;
            var4 = function(arg0) { // Environment: var2
                _fun78158: for (var _fun78158_ip = 0;;) switch (_fun78158_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.channel;
                        var2 = var3.id;
                        var1 = 'null';
                        if (!(var1 === var2)) {
                            _fun78158_ip = 66;
                            continue _fun78158
                        }
                    case 23:
                        var2 = _closure3_slot0;
                        var1 = _closure2_slot0;
                        var5 = var1.null;
                        var4 = var5.filter;
                        var1 = function(arg0) { // Environment: var0
                            var3 = _closure2_slot4;
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var0, var2);
                            return var0;
                        };
                        var1 = var4.bind(var5)(var1);
                        var2.null = var1;
                    case 66:
                        var2 = _closure3_slot0;
                        var1 = var3.id;
                        var4 = _closure2_slot0;
                        var3 = var3.id;
                        var4 = var4[var3];
                        var3 = var4.filter;
                        var0 = function(arg0) { // Environment: var0
                            var3 = _closure2_slot4;
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var0, var2);
                            return var0;
                        };
                        var0 = var3.bind(var4)(var0);
                        var2[var1] = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var4 = var5.bind(var6)(var4);
            var3 = _closure2_slot0;
            var4 = var3._categories;
            var3 = var4.filter;
            var2 = function(arg0) { // Environment: var2
                _fun78161: for (var _fun78161_ip = 0;;) switch (_fun78161_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.channel;
                        var2 = var0.id;
                        var0 = 'null';
                        var0 = var0 === var2;
                        if (var0) {
                            _fun78161_ip = 42;
                            continue _fun78161
                        }
                    case 24:
                        var2 = _closure2_slot2;
                        var3 = var2.length;
                        var2 = 0;
                        var0 = var2 === var3;
                    case 42:
                        if (var0) {
                            _fun78161_ip = 77;
                            continue _fun78161
                        }
                    case 45:
                        var2 = _closure3_slot0;
                        var1 = var1.channel;
                        var1 = var1.id;
                        var1 = var2[var1];
                        var2 = var1.length;
                        var1 = 0;
                        var0 = var2 > var1;
                    case 77:
                        return var0;
                }
            };
            var2 = var3.bind(var4)(var2);
            var0._categories = var2;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var0._categories;
            var3 = var3.bind(var4)(var2, var0);
            var2 = var3.forEach;
            var1 = _closure1_slot13;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useFilterCategoriesByQuery = var3;
    var3 = function arg0() {
        _fun78162: for (var _fun78162_ip = 0;;) switch (_fun78162_ip) {
            case 0:
                var10 = arg0;
                var1 = var10.getSections;
                var0 = false;
                var9 = var1.bind(var10)(var0);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 11;
                var1 = var1[var3];
                var8 = undefined;
                var1 = var2.bind(var8)(var1);
                var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
                var1 = var9[var1];
                var7 = 0;
                if (!(var1 > var7)) {
                    _fun78162_ip = 126;
                    continue _fun78162
                }
            case 57:
                var1 = var10.getGuildActionSection;
                var2 = var1.bind(var10)();
                var1 = var2.getRow;
                var2 = var1.bind(var2)(var7);
                var1 = _closure1_slot11;
                var1 = var1.GUILD_HOME;
                if (!(var1 !== var2)) {
                    _fun78162_ip = 258;
                    continue _fun78162
                }
            case 95:
                var1 = _closure1_slot11;
                var1 = var1.GUILD_ROLE_SUBSCRIPTIONS;
                if (!(var1 !== var2)) {
                    _fun78162_ip = 246;
                    continue _fun78162
                }
            case 112:
                var1 = _closure1_slot11;
                var1 = var1.GUILD_MOD_DASH_MEMBER_SAFETY;
                if (!(var1 !== var2)) {
                    _fun78162_ip = 234;
                    continue _fun78162
                }
            case 126:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var2.bind(var8)(var1);
                var6 = var1.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                var1 = var10.voiceChannelsSectionNumber;
                var1 = var6 < var1;
                var2 = null;
                var5 = undefined;
                var4 = undefined;
                if (!var1) {
                    _fun78162_ip = 225;
                    continue _fun78162
                }
            case 168:
                var1 = var9[var6];
                if (!(var1 > var7)) {
                    _fun78162_ip = 212;
                    continue _fun78162
                }
            case 176:
                var1 = var10.getChannelFromSectionRow;
                var3 = var1.bind(var10)(var6, var7);
                var11 = var2 == var3;
                var1 = undefined;
                if (var11) {
                    _fun78162_ip = 202;
                    continue _fun78162
                }
            case 197:
                var1 = var3.channel;
            case 202:
                var5 = var3;
                var4 = var1;
                if (!(var2 == var4)) {
                    _fun78162_ip = 227;
                    continue _fun78162
                }
            case 212:
                var6 = var6 + 1;
                var3 = var10.voiceChannelsSectionNumber;
                if (var6 < var3) {
                    _fun78162_ip = 168;
                    continue _fun78162
                }
            case 225:
                return var2;
            case 227:
                var1 = var1.id;
                return var1;
            case 234:
                var1 = _closure1_slot10;
                var1 = var1.MEMBER_SAFETY;
                return var1;
            case 246:
                var1 = _closure1_slot10;
                var1 = var1.ROLE_SUBSCRIPTIONS;
                return var1;
            case 258:
                var0 = _closure1_slot10;
                var0 = var0.GUILD_HOME;
                return var0;
        }
    };
    var2.getFirstRouteFor = var3;
    var3 = function arg0, arg1() {
        _fun78163: for (var _fun78163_ip = 0;;) switch (_fun78163_ip) {
            case 0:
                var6 = arg0;
                var8 = arg1;
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun78163_ip = 17;
                    continue _fun78163
                }
            case 15:
                var5 = null;
            case 17:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 12;
                var2 = var4[var2];
                var7 = var3.bind(var0)(var2);
                var2 = var7.bulkClearRecents;
                var2 = var2.bind(var7)(var6, var8);
                var2 = 13;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.bulkAck;
                var7 = var8.map;
                var2 = function(arg0) { // Environment: var2
                    var3 = arg0;
                    var0 = {};
                    var0.channelId = var3;
                    var2 = _closure1_slot12;
                    var2 = var2.CHANNEL;
                    var0.readStateType = var2;
                    var2 = _closure1_slot6;
                    var1 = var2.lastMessageId;
                    var1 = var1.bind(var2)(var3);
                    var0.messageId = var1;
                    return var0;
                };
                var2 = var7.bind(var8)(var2);
                var2 = var3.bind(var4)(var2);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun78163_ip = 147;
                    continue _fun78163
                }
            case 100:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.transitionTo;
                var4 = _closure1_slot7;
                var1 = var4.CHANNEL;
                var1 = var1.bind(var4)(var6, var5);
                var1 = var2.bind(var3)(var1);
            case 147:
                return var0;
        }
    };
    var2.clearRecentChannels = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun78165: for (var _fun78165_ip = 0;;) switch (_fun78165_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var3 = arg3;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var2;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 15;
                var1 = var9[var1];
                var7 = undefined;
                var10 = var8.bind(var7)(var1);
                var6 = var10.UNSAFE_useIsDismissibleContentDismissed;
                var1 = 16;
                var1 = var9[var1];
                var1 = var8.bind(var7)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.CHANNEL_BROWSER_NUX;
                var1 = var6.bind(var10)(var1);
                var6 = 17;
                var6 = var9[var6];
                var8 = var8.bind(var7)(var6);
                var7 = var8.useStateFromStoresObject;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    _fun78166: for (var _fun78166_ip = 0;;) switch (_fun78166_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot4;
                            var2 = var3.getMutableGuildChannelsForGuild;
                            var1 = _closure2_slot0;
                            var10 = var2.bind(var3)(var1);
                            var8 = var10;
                            var3 = 1;
                            var2 = null;
                            var4 = undefined;
                            for (var5 in var8)
                                case 45: {
                                    case 54: var11 = var5;
                                    var11 = var10[var11];
                                    var12 = var11.parent_id;
                                    if (var2 == var12) {
                                        _fun78166_ip = 45;
                                        continue _fun78166
                                    }
                                    case 71: var4 = var0[var12];
                                    var13 = var2 != var4;
                                    var11 = 0;
                                    if (!var13) {
                                        _fun78166_ip = 87;
                                        continue _fun78166
                                    }
                                    case 84: var11 = var4;
                                    case 87: var11 = var11 + var3;
                                    var0[var12] = var11;
                                    _fun78166_ip = 45;
                                    continue _fun78166;
                                }
                        case 97:
                            return var0;
                    }
                };
                var4 = var7.bind(var8)(var6, var4, var5);
                var _closure2_slot3 = var4;
                var4 = var2._categories;
                var2 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    _fun78167: for (var _fun78167_ip = 0;;) switch (_fun78167_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot1;
                            var0 = var3.channel;
                            var0 = var0.id;
                            var1 = var1[var0];
                            var0 = {};
                            var4 = var3.channel;
                            var5 = var4.id;
                            var4 = 'null';
                            if (!(var4 !== var5)) {
                                _fun78167_ip = 71;
                                continue _fun78167
                            }
                        case 44:
                            var4 = _closure2_slot3;
                            var3 = var3.channel;
                            var3 = var3.id;
                            var5 = var4[var3];
                            var3 = 1;
                            var4 = 0;
                            if (!(var4 !== var5)) {
                                _fun78167_ip = 76;
                                continue _fun78167
                            }
                        case 71:
                            var3 = var1.length;
                        case 76:
                            var0.rowCount = var3;
                            var3 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var3)) {
                                _fun78167_ip = 96;
                                continue _fun78167
                            }
                        case 92:
                            var1 = _closure2_slot2;
                        case 96:
                            var0.rowHeight = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0);
                if (var1) {
                    _fun78165_ip = 174;
                    continue _fun78165
                }
            case 168:
                var2 = null;
                var1 = var2 == var3;
            case 174:
                if (var1) {
                    _fun78165_ip = 203;
                    continue _fun78165
                }
            case 177:
                var2 = var0.unshift;
                var1 = {};
                var4 = 1;
                var1.rowCount = var4;
                var1.rowHeight = var3;
                var1 = var2.bind(var0)(var1);
            case 203:
                return var0;
        }
    };
    var2.useChannelBrowserSections = var3;
    var3 = function arg0() {
        _fun78168: for (var _fun78168_ip = 0;;) switch (_fun78168_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.useStateFromStores;
                var4 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getCategories;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var2.bind(var3)(var1, var0);
                var0 = var4._categories;
                var3 = var0.length;
                var1 = var4._categories;
                var0 = var4._categories;
                var0 = var0.length;
                var5 = 1;
                var0 = var0 - var5;
                var2 = var1[var0];
                var0 = null;
                if (!(var0 != var2)) {
                    _fun78168_ip = 218;
                    continue _fun78168
                }
            case 109:
                var1 = var2.channel;
                var7 = var0 == var1;
                var6 = undefined;
                if (var7) {
                    _fun78168_ip = 128;
                    continue _fun78168
                }
            case 123:
                var6 = var1.id;
            case 128:
                var7 = var0 != var6;
                var1 = 'null';
                if (!var7) {
                    _fun78168_ip = 142;
                    continue _fun78168
                }
            case 139:
                var1 = var6;
            case 142:
                var4 = var4[var1];
                var1 = var0 == var4;
                var6 = 0;
                var0 = 0;
                if (var1) {
                    _fun78168_ip = 216;
                    continue _fun78168
                }
            case 157:
                var1 = var4.length;
                if (!(var6 !== var1)) {
                    _fun78168_ip = 197;
                    continue _fun78168
                }
            case 166:
                var1 = var4.length;
                var1 = var1 - var5;
                var1 = var4[var1];
                var4 = var1.index;
                var1 = 2;
                var1 = var4 + var1;
                var1 = var1 - var3;
                _fun78168_ip = 213;
                continue _fun78168;
            case 197:
                var4 = var2.index;
                var2 = 2;
                var2 = var4 + var2;
                var1 = var2 - var3;
            case 213:
                var0 = var1;
            case 216:
                return var0;
            case 218:
                var0 = 0;
                return var0;
        }
    };
    var2.useChannelBrowserChannelCount = var3;
    var1 = function arg0() {
        _fun78170: for (var _fun78170_ip = 0;;) switch (_fun78170_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 18;
                var2 = var10[var0];
                var6 = undefined;
                var2 = var1.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var10[var0];
                var0 = var1.bind(var6)(var0);
                var0 = var0.t;
                var1 = var0["8N0BHR"];
                var0 = {};
                var8 = _closure1_slot1;
                var5 = 19;
                var5 = var10[var5];
                var5 = var8.bind(var6)(var5);
                var7 = 20;
                var7 = var10[var7];
                var8 = var8.bind(var6)(var7);
                var7 = var8.extractTimestamp;
                var10 = _closure1_slot6;
                var9 = var10.lastMessageId;
                var9 = var9.bind(var10)(var4);
                var10 = null;
                if (!(var10 != var9)) {
                    _fun78170_ip = 120;
                    continue _fun78170
                }
            case 117:
                var4 = var9;
            case 120:
                var4 = var7.bind(var8)(var4);
                var5 = var5.bind(var6)(var4);
                var4 = var5.fromNow;
                var4 = var4.bind(var5)();
                var0.timeAgo = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getActiveAgoTimestamp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 4575, 3947, 660, 1379, 4578, 4304, 4580, 5606, 4576, 4569, 9926, 4574, 1220, 3212, 1358, 566, 1234, 3045, 21, 2]);