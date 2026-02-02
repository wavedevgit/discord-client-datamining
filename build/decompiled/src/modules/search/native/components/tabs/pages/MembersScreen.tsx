// modules/search/native/components/tabs/pages/MembersScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun105708: for (var _fun105708_ip = 0;;) switch (_fun105708_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.searchContext;
                var _closure2_slot0 = var13;
                var7 = var1.guildId;
                var _closure2_slot1 = var7;
                var2 = _closure1_slot20;
                var4 = undefined;
                var8 = var2.bind(var4)();
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 14;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var2 = var2.analyticsLocations;
                var _closure2_slot2 = var2;
                var3 = _closure1_slot0;
                var6 = 15;
                var6 = var5[var6];
                var9 = var3.bind(var4)(var6);
                var6 = var9.getSearchContextId;
                var6 = var6.bind(var9)(var13);
                var _closure2_slot3 = var6;
                var6 = 16;
                var9 = var5[var6];
                var12 = var3.bind(var4)(var9);
                var11 = var12.useStateFromStores;
                var9 = _closure1_slot11;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getResults;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var11.bind(var12)(var10, var9);
                var _closure2_slot4 = var19;
                var9 = function arg0() {
                    _fun105710: for (var _fun105710_ip = 0;;) switch (_fun105710_ip) {
                        case 0:
                            var4 = _closure1_slot12;
                            var3 = var4.useState;
                            var2 = arg0;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = var1.getChannelIds;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var5 = var3.bind(var4)(var2, var0);
                            var0 = var5.size;
                            var3 = 0;
                            if (!(var3 !== var0)) {
                                _fun105710_ip = 79;
                                continue _fun105710
                            }
                        case 41:
                            var4 = var5.size;
                            var2 = 1;
                            var0 = null;
                            if (!(var2 === var4)) {
                                _fun105710_ip = 77;
                                continue _fun105710
                            }
                        case 55:
                            var2 = global;
                            var4 = var2.Array;
                            var2 = var4.from;
                            var2 = var2.bind(var4)(var5);
                            var0 = var2[var3];
                        case 77:
                            _fun105710_ip = 83;
                            continue _fun105710;
                        case 79:
                            var0 = _closure1_slot6;
                        case 83:
                            return var0;
                    }
                };
                var16 = var9.bind(var4)(var13);
                var _closure2_slot5 = var16;
                var9 = var5[var6];
                var12 = var3.bind(var4)(var9);
                var11 = var12.useStateFromStores;
                var9 = _closure1_slot10;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var11.bind(var12)(var10, var9);
                var _closure2_slot6 = var14;
                var9 = 17;
                var9 = var5[var9];
                var11 = var3.bind(var4)(var9);
                var10 = var11.useFullscreenPlaceholderCount;
                var9 = {};
                var12 = _closure1_slot14;
                var9.placeholderHeight = var12;
                var12 = 1;
                var9.numColumns = var12;
                var15 = var10.bind(var11)(var9);
                var _closure2_slot7 = var15;
                var9 = var5[var6];
                var12 = var3.bind(var4)(var9);
                var11 = var12.useStateFromStores;
                var9 = _closure1_slot9;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var0
                    _fun105713: for (var _fun105713_ip = 0;;) switch (_fun105713_ip) {
                        case 0:
                            var3 = _closure1_slot9;
                            var2 = var3.getGuild;
                            var0 = _closure2_slot1;
                            var3 = var2.bind(var3)(var0);
                            var0 = null;
                            var2 = var0 != var3;
                            var4 = undefined;
                            var0 = undefined;
                            if (!var2) {
                                _fun105713_ip = 68;
                                continue _fun105713
                            }
                        case 37:
                            var2 = _closure1_slot2;
                            var5 = _closure1_slot3;
                            var1 = 18;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.getGuildVisualOwnerId;
                            var0 = var1.bind(var2)(var3);
                        case 68:
                            return var0;
                    }
                };
                var17 = var11.bind(var12)(var10, var9);
                var _closure2_slot8 = var17;
                var9 = var5[var6];
                var12 = var3.bind(var4)(var9);
                var11 = var12.useStateFromStores;
                var9 = _closure1_slot7;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var0
                    _fun105714: for (var _fun105714_ip = 0;;) switch (_fun105714_ip) {
                        case 0:
                            var3 = _closure2_slot5;
                            var2 = _closure1_slot6;
                            if (!(var3 !== var2)) {
                                _fun105714_ip = 85;
                                continue _fun105714
                            }
                        case 18:
                            var3 = _closure1_slot7;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot5;
                            var2 = var2.bind(var3)(var1);
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun105714_ip = 79;
                                continue _fun105714
                            }
                        case 42:
                            var1 = var2.isAnnouncementThread;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun105714_ip = 65;
                                continue _fun105714
                            }
                        case 55:
                            var1 = var2.parent_id;
                            if (!(var3 == var1)) {
                                _fun105714_ip = 71;
                                continue _fun105714
                            }
                        case 65:
                            var1 = _closure2_slot5;
                            _fun105714_ip = 77;
                            continue _fun105714;
                        case 71:
                            var1 = var2.parent_id;
                        case 77:
                            _fun105714_ip = 83;
                            continue _fun105714;
                        case 79:
                            var1 = _closure2_slot5;
                        case 83:
                            return var1;
                        case 85:
                            var0 = _closure2_slot5;
                            return var0;
                    }
                };
                var9 = var11.bind(var12)(var10, var9);
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var10 = new Array(4);
                var10[0] = var13;
                var10[1] = var16;
                var10[2] = var14;
                var10[3] = var2;
                var2 = function(arg0, arg1) { // Environment: var0
                    _fun105715: for (var _fun105715_ip = 0;;) switch (_fun105715_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var0 = 19;
                            var1 = var6[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dismissGlobalKeyboard;
                            var1 = var1.bind(var2)();
                            var2 = _closure1_slot1;
                            var1 = 20;
                            var1 = var6[var1];
                            var8 = var2.bind(var0)(var1);
                            var7 = var8.trackSearchResultClicked;
                            var1 = {};
                            var9 = _closure2_slot0;
                            var1.searchContext = var9;
                            var9 = var5.id;
                            var1.userId = var9;
                            var9 = arg1;
                            var1.index = var9;
                            var9 = _closure1_slot16;
                            var9 = var9.USER;
                            var1.entityType = var9;
                            var1 = var7.bind(var8)(var1);
                            var1 = 21;
                            var1 = var6[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var5 = var5.id;
                            var1.userId = var5;
                            var5 = _closure2_slot5;
                            var4 = _closure1_slot6;
                            if (!(var5 === var4)) {
                                _fun105715_ip = 151;
                                continue _fun105715
                            }
                        case 145:
                            var4 = _closure2_slot6;
                            _fun105715_ip = 155;
                            continue _fun105715;
                        case 151:
                            var4 = _closure2_slot5;
                        case 155:
                            var1.channelId = var4;
                            var3 = _closure2_slot2;
                            var1.sourceAnalyticsLocations = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var16 = var11.bind(var12)(var2, var10);
                var _closure2_slot9 = var16;
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var10 = new Array(1);
                var10[0] = var13;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var7 = var0.user;
                    var6 = var0.index;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 20;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.trackSearchResultClicked;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2.searchContext = var8;
                    var7 = var7.id;
                    var2.userId = var7;
                    var2.index = var6;
                    var6 = _closure1_slot16;
                    var6 = var6.USER;
                    var2.entityType = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot0;
                    var1 = 19;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dismissGlobalKeyboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var11 = var11.bind(var12)(var2, var10);
                var14 = _closure1_slot4;
                var12 = var14.useCallback;
                var10 = new Array(1);
                var10[0] = var16;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = var0.user;
                    var2 = var0.index;
                    var1 = _closure2_slot9;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var3, var2);
                    return var0;
                };
                var10 = var12.bind(var14)(var2, var10);
                var14 = _closure1_slot12;
                var12 = var14.useState;
                var2 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var12.bind(var14)(var13, var2);
                var _closure2_slot10 = var2;
                var6 = var5[var6];
                var18 = var3.bind(var4)(var6);
                var14 = var18.useStateFromStores;
                var6 = _closure1_slot11;
                var12 = new Array(1);
                var12[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getIsFetching;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var14.bind(var18)(var12, var6);
                var _closure2_slot11 = var18;
                var14 = _closure1_slot4;
                var12 = var14.useMemo;
                var6 = new Array(7);
                var6[0] = var19;
                var6[1] = var18;
                var6[2] = var2;
                var6[3] = var7;
                var6[4] = var17;
                var6[5] = var16;
                var6[6] = var15;
                var0 = function() { // Environment: var0
                    _fun105720: for (var _fun105720_ip = 0;;) switch (_fun105720_ip) {
                        case 0:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot4;
                            var2 = var3.forEach;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun105721: for (var _fun105721_ip = 0;;) switch (_fun105721_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var7 = arg1;
                                        var _closure4_slot0 = var7;
                                        var4 = _closure1_slot8;
                                        var3 = var4.getMember;
                                        var2 = _closure2_slot1;
                                        var1 = var9.record;
                                        var1 = var1.id;
                                        var12 = var3.bind(var4)(var2, var1);
                                        var3 = _closure3_slot0;
                                        var2 = var3.push;
                                        var1 = {};
                                        var4 = _closure1_slot15;
                                        var4 = var4.GUILD_CHANNEL_MEMBER;
                                        var1.type = var4;
                                        var4 = {};
                                        var0 = _closure1_slot17;
                                        var0 = var0.NONE;
                                        var4.type = var0;
                                        var0 = var9.record;
                                        var4.user = var0;
                                        var10 = null;
                                        var11 = var10 == var12;
                                        var0 = undefined;
                                        var5 = undefined;
                                        if (var11) {
                                            _fun105721_ip = 122;
                                            continue _fun105721
                                        }
                                    case 116:
                                        var5 = var12.nick;
                                    case 122:
                                        var4.nickname = var5;
                                        var11 = var10 == var12;
                                        var5 = undefined;
                                        if (var11) {
                                            _fun105721_ip = 142;
                                            continue _fun105721
                                        }
                                    case 136:
                                        var5 = var12.colorString;
                                    case 142:
                                        var4.usernameColor = var5;
                                        var11 = var10 == var12;
                                        var5 = undefined;
                                        if (var11) {
                                            _fun105721_ip = 162;
                                            continue _fun105721
                                        }
                                    case 156:
                                        var5 = var12.colorStrings;
                                    case 162:
                                        var4.roleColors = var5;
                                        var5 = true;
                                        var4.isNameplatedRow = var5;
                                        var13 = var10 == var12;
                                        var11 = undefined;
                                        if (var13) {
                                            _fun105721_ip = 189;
                                            continue _fun105721
                                        }
                                    case 183:
                                        var11 = var12.premiumSince;
                                    case 189:
                                        var12 = var10 != var11;
                                        var10 = undefined;
                                        if (!var12) {
                                            _fun105721_ip = 201;
                                            continue _fun105721
                                        }
                                    case 198:
                                        var10 = var11;
                                    case 201:
                                        var4.premiumSince = var10;
                                        var10 = _closure2_slot8;
                                        var9 = var9.record;
                                        var9 = var9.id;
                                        var9 = var10 === var9;
                                        var4.isOwner = var9;
                                        var9 = _closure2_slot1;
                                        var4.guildId = var9;
                                        var9 = function arg0() {
                                            var3 = _closure2_slot9;
                                            var2 = _closure4_slot0;
                                            var1 = undefined;
                                            var0 = arg0;
                                            var0 = var3.bind(var1)(var0, var2);
                                            return var0;
                                        };
                                        var4.onLongPress = var9;
                                        var8 = function arg0() {
                                            var3 = _closure2_slot9;
                                            var2 = _closure4_slot0;
                                            var1 = undefined;
                                            var0 = arg0;
                                            var0 = var3.bind(var1)(var0, var2);
                                            return var0;
                                        };
                                        var4.onPress = var8;
                                        var8 = 0;
                                        var8 = var8 === var7;
                                        var4.start = var8;
                                        var6 = _closure2_slot4;
                                        var8 = var6.length;
                                        var6 = 1;
                                        var6 = var8 - var6;
                                        var6 = var7 === var6;
                                        var4.end = var6;
                                        var4.canShowDisplayNameStylesFont = var5;
                                        var1.props = var4;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = _closure2_slot11;
                            if (var1) {
                                _fun105720_ip = 59;
                                continue _fun105720
                            }
                        case 41:
                            var1 = _closure2_slot10;
                            if (var1) {
                                _fun105720_ip = 140;
                                continue _fun105720
                            }
                        case 48:
                            var2 = var0.length;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun105720_ip = 140;
                                continue _fun105720
                            }
                        case 59:
                            var1 = _closure2_slot7;
                            var5 = 0;
                            var1 = var5 < var1;
                            var3 = global;
                            var2 = 'guild-channel-member-placeholder-';
                            if (!var1) {
                                _fun105720_ip = 140;
                                continue _fun105720
                            }
                        case 83:
                            var7 = var0.push;
                            var1 = {};
                            var8 = _closure1_slot15;
                            var8 = var8.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
                            var1.type = var8;
                            var8 = var3.HermesInternal;
                            var8 = var8.concat;
                            var8 = var8.bind(var2)(var5);
                            var1.key = var8;
                            var1 = var7.bind(var0)(var1);
                            var5 = var5 + 1;
                            var1 = _closure2_slot7;
                            if (var5 < var1) {
                                _fun105720_ip = 83;
                                continue _fun105720
                            }
                        case 140:
                            return var0;
                    }
                };
                var6 = var12.bind(var14)(var0, var6);
                var0 = 22;
                var0 = var5[var0];
                var12 = var3.bind(var4)(var0);
                var0 = var12.useContentContainerStyles;
                var12 = var0.bind(var12)();
                var0 = 23;
                var0 = var5[var0];
                var5 = var3.bind(var4)(var0);
                var3 = var5.useMessageTabCountsErrorText;
                var0 = {};
                var0.searchContext = var13;
                var5 = var3.bind(var5)(var0);
                var0 = null;
                if (!(var0 == var5)) {
                    _fun105708_ip = 770;
                    continue _fun105708
                }
            case 625:
                if (!var2) {
                    _fun105708_ip = 632;
                    continue _fun105708
                }
            case 628:
                if (!(var0 == var9)) {
                    _fun105708_ip = 690;
                    continue _fun105708
                }
            case 632:
                var3 = _closure1_slot19;
                var2 = _closure1_slot1;
                var13 = _closure1_slot3;
                var0 = 26;
                var0 = var13[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var12 = var12.membersContentContainer;
                var0.contentContainerStyle = var12;
                var12 = _closure1_slot13;
                var0.estimatedItemSize = var12;
                var0.data = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun105708_ip = 768;
                continue _fun105708;
            case 690:
                var6 = _closure1_slot19;
                var3 = _closure1_slot1;
                var12 = _closure1_slot3;
                var2 = 25;
                var2 = var12[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.onUserPress = var11;
                var2.onUserLongPress = var10;
                var2.channelId = var9;
                var2.guildId = var7;
                var7 = true;
                var2.disableStickySections = var7;
                var8 = var8.userList;
                var2.listStyleOverride = var8;
                var2.isNameplatedList = var7;
                var2.canShowDisplayNameStylesFont = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 768:
                _fun105708_ip = 806;
                continue _fun105708;
            case 770:
                var3 = _closure1_slot19;
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 24;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.text = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 806:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun105724: for (var _fun105724_ip = 0;;) switch (_fun105724_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.searchContext;
                var7 = var1.channelId;
                var _closure2_slot0 = var7;
                var5 = var1.guildId;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 16;
                var2 = var4[var2];
                var4 = undefined;
                var9 = var3.bind(var4)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun105725: for (var _fun105725_ip = 0;;) switch (_fun105725_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot0;
                            var3 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun105725_ip = 45;
                                continue _fun105725
                            }
                        case 35:
                            var2 = var3.isAnnouncementThread;
                            var1 = var2.bind(var3)();
                        case 45:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun105725_ip = 55;
                                continue _fun105725
                            }
                        case 52:
                            var0 = var1;
                        case 55:
                            return var0;
                    }
                };
                var2 = var8.bind(var9)(var3, var2);
                var8 = _closure1_slot12;
                var3 = var8.useState;
                var0 = function(arg0) { // Environment: var0
                    _fun105726: for (var _fun105726_ip = 0;;) switch (_fun105726_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.isInitialSearchQuery;
                            var0 = var0.bind(var2)();
                            if (!var0) {
                                _fun105726_ip = 29;
                                continue _fun105726
                            }
                        case 16:
                            var1 = var2.isTagsEmpty;
                            var1 = var1.bind(var2)();
                            var0 = !var1;
                        case 29:
                            return var0;
                    }
                };
                var0 = var3.bind(var8)(var6, var0);
                if (var2) {
                    _fun105724_ip = 157;
                    continue _fun105724
                }
            case 105:
                if (!var0) {
                    _fun105724_ip = 157;
                    continue _fun105724
                }
            case 108:
                var3 = _closure1_slot19;
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 27;
                var0 = var8[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.channelId = var7;
                var0.guildId = var5;
                var7 = true;
                var0.disableStickySections = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun105724_ip = 182;
                continue _fun105724;
            case 157:
                var3 = _closure1_slot19;
                var2 = _closure1_slot21;
                var1 = {};
                var1.searchContext = var6;
                var1.guildId = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 182:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var6 = var6.bind(var0)(var3);
    var _closure1_slot4 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EVERYONE_CHANNEL_ID;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CHANNELS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot13 = var7;
    var7 = var3.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot14 = var7;
    var3 = var3.SearchListItemTypes;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchResultContentEntityTypes;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.RelationshipTypes;
    var _closure1_slot17 = var7;
    var3 = var3.SearchTypes;
    var _closure1_slot18 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot19 = var3;
    var3 = 13;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'flexGrow': 1
    };
    var3.container = var9;
    var9 = {
        'flex': 1,
        'flexGrow': 1
    };
    var3.searchContainer = var9;
    var9 = {};
    var10 = 'transparent';
    var9.backgroundColor = var10;
    var3.userList = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot20 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105727: for (var _fun105727_ip = 0;;) switch (_fun105727_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.searchContext;
                var0 = _closure1_slot20;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 14;
                var1 = var5[var0];
                var2 = var4.bind(var3)(var1);
                var1 = 28;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.SEARCH_MEMBERS;
                var1 = var2.bind(var3)(var1);
                var4 = var1.analyticsLocations;
                var2 = var11.type;
                var1 = _closure1_slot18;
                var1 = var1.CHANNEL;
                if (!(var1 !== var2)) {
                    _fun105727_ip = 311;
                    continue _fun105727
                }
            case 93:
                var1 = _closure1_slot18;
                var1 = var1.THREAD;
                if (!(var1 !== var2)) {
                    _fun105727_ip = 270;
                    continue _fun105727
                }
            case 110:
                var1 = _closure1_slot18;
                var1 = var1.GUILD_CHANNEL;
                if (!(var1 !== var2)) {
                    _fun105727_ip = 195;
                    continue _fun105727
                }
            case 124:
                var1 = _closure1_slot18;
                var1 = var1.GUILD;
                if (!(var1 !== var2)) {
                    _fun105727_ip = 195;
                    continue _fun105727
                }
            case 138:
                var1 = global;
                var5 = var1.Error;
                var6 = var11.type;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '[MembersScreen] Unsupported search context type: ';
                var14 = var2.bind(var1)(var6);
                var2 = var5.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var15 = var2;
                var1 = new var15[var5](var14, var13);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 195:
                var5 = _closure1_slot19;
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var0];
                var1 = var2.bind(var3)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var4;
                var9 = _closure1_slot19;
                var8 = _closure1_slot21;
                var6 = {};
                var6.searchContext = var11;
                var12 = var11.guildId;
                var6.guildId = var12;
                var6 = var9.bind(var3)(var8, var6);
                var1.children = var6;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 270:
                var5 = _closure1_slot19;
                var2 = _closure1_slot22;
                var1 = {};
                var1.searchContext = var11;
                var6 = var11.channelId;
                var1.channelId = var6;
                var6 = var11.guildId;
                var1.guildId = var6;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 311:
                var2 = _closure1_slot19;
                var1 = _closure1_slot0;
                var12 = _closure1_slot3;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot19;
                var5 = _closure1_slot5;
                var4 = {};
                var8 = var10.container;
                var4.style = var8;
                var9 = _closure1_slot19;
                var8 = _closure1_slot1;
                var7 = 29;
                var7 = var12[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var11 = var11.channelId;
                var7.channelId = var11;
                var11 = true;
                var7.disableStickySections = var11;
                var10 = var10.userList;
                var7.listStyleOverride = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/MembersScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5620, 1372, 1672, 1410, 1661, 13739, 8927, 8863, 8862, 660, 33, 1297, 5690, 8929, 632, 13686, 3057, 1582, 8926, 7314, 13740, 13737, 13676, 13741, 13690, 13747, 5543, 13749, 2]);