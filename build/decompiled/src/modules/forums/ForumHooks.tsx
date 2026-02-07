// modules/forums/ForumHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var12;
    var9 = function arg0() {
        _fun71739: for (var _fun71739_ip = 0;;) switch (_fun71739_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var2 = var2 == var1;
                var4 = undefined;
                var5 = undefined;
                if (var2) {
                    _fun71739_ip = 24;
                    continue _fun71739
                }
            case 18:
                var5 = var1.parent_id;
            case 24:
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 20;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStoresObject;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun71740: for (var _fun71740_ip = 0;;) switch (_fun71740_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var3 = undefined;
                            if (var2) {
                                _fun71740_ip = 41;
                                continue _fun71740
                            }
                        case 35:
                            var3 = var1.availableTags;
                        case 41:
                            if (!(var0 == var3)) {
                                _fun71740_ip = 49;
                                continue _fun71740
                            }
                        case 45:
                            var3 = new Array(0);
                        case 49:
                            var2 = var3.reduce;
                            var1 = function(arg0, arg1) { // Environment: var0
                                var2 = arg1;
                                var0 = {};
                                var3 = arg0;
                                var4 = var0;
                                var1 = copyDataProperties(var4, var3);
                                var1 = var2.id;
                                var0[var1] = var2;
                                return var0;
                            };
                            var0 = {};
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var _closure1_slot28 = var9;
    var8 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot28;
        var2 = undefined;
        var5 = var3.bind(var2)(var4);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun71743: for (var _fun71743_ip = 0;;) switch (_fun71743_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var5 = null;
                    var0 = var5 == var0;
                    var4 = undefined;
                    var3 = undefined;
                    if (var0) {
                        _fun71743_ip = 106;
                        continue _fun71743
                    }
                case 20:
                    var0 = _closure2_slot0;
                    var6 = var0.appliedTags;
                    var0 = var5 == var6;
                    var3 = undefined;
                    if (var0) {
                        _fun71743_ip = 106;
                        continue _fun71743
                    }
                case 39:
                    var2 = var6.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot1;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var6 = var2.bind(var6)(var0);
                    var0 = var5 == var6;
                    var3 = undefined;
                    if (var0) {
                        _fun71743_ip = 106;
                        continue _fun71743
                    }
                case 67:
                    var2 = var6.filter;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 24;
                    var0 = var8[var0];
                    var0 = var7.bind(var4)(var0);
                    var0 = var0.isNotNullish;
                    var3 = var2.bind(var6)(var0);
                case 106:
                    if (!(var5 == var3)) {
                        _fun71743_ip = 117;
                        continue _fun71743
                    }
                case 110:
                    var3 = _closure1_slot26;
                case 117:
                    var2 = _closure2_slot0;
                    var0 = var3;
                    if (!(var5 != var2)) {
                        _fun71743_ip = 182;
                        continue _fun71743
                    }
                case 128:
                    var2 = _closure2_slot0;
                    var1 = var2.isModeratorReportChannel;
                    var1 = var1.bind(var2)();
                    var0 = var3;
                    if (!var1) {
                        _fun71743_ip = 182;
                        continue _fun71743
                    }
                case 148:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 25;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.sortedModeratorReportTags;
                    var0 = var1.bind(var2)(var3);
                case 182:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var8;
    var7 = function arg0() {
        _fun71745: for (var _fun71745_ip = 0;;) switch (_fun71745_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var6 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun71745_ip = 24;
                    continue _fun71745
                }
            case 18:
                var4 = var2.defaultReactionEmoji;
            case 24:
                var _closure2_slot0 = var4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 20;
                var3 = var7[var3];
                var5 = var5.bind(var6)(var3);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    _fun71746: for (var _fun71746_ip = 0;;) switch (_fun71746_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun71746_ip = 28;
                                continue _fun71746
                            }
                        case 18:
                            var3 = _closure2_slot0;
                            var2 = var3.emojiId;
                        case 28:
                            var2 = var0 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun71746_ip = 65;
                                continue _fun71746
                            }
                        case 37:
                            var3 = _closure1_slot5;
                            var2 = var3.getUsableCustomEmojiById;
                            var1 = _closure2_slot0;
                            var1 = var1.emojiId;
                            var0 = var2.bind(var3)(var1);
                        case 65:
                            return var0;
                    }
                };
                var3 = var3.bind(var5)(var2, var0);
                var2 = var1 == var4;
                var0 = null;
                if (var2) {
                    _fun71745_ip = 191;
                    continue _fun71745
                }
            case 90:
                var2 = var4.emojiId;
                if (!(var1 != var2)) {
                    _fun71745_ip = 104;
                    continue _fun71745
                }
            case 100:
                if (!(var1 == var3)) {
                    _fun71745_ip = 153;
                    continue _fun71745
                }
            case 104:
                var2 = var4.emojiName;
                var2 = var1 != var2;
                var1 = null;
                if (!var2) {
                    _fun71745_ip = 151;
                    continue _fun71745
                }
            case 119:
                var2 = {};
                var5 = var4.emojiId;
                var2.id = var5;
                var5 = var4.emojiName;
                var2.name = var5;
                var5 = false;
                var2.animated = var5;
                var1 = var2;
            case 151:
                _fun71745_ip = 188;
                continue _fun71745;
            case 153:
                var2 = {};
                var4 = var4.emojiId;
                var2.id = var4;
                var4 = var3.name;
                var2.name = var4;
                var3 = var3.animated;
                var2.animated = var3;
                var1 = var2;
            case 188:
                var0 = var1;
            case 191:
                return var0;
        }
    };
    var _closure1_slot30 = var7;
    var6 = function arg0() {
        _fun71747: for (var _fun71747_ip = 0;;) switch (_fun71747_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot12;
                    var2 = var3.can;
                    var0 = _closure1_slot23;
                    var1 = var0.MANAGE_THREADS;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var6.bind(var7)(var3, var2);
                var _closure2_slot1 = var6;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var6;
                var6 = null;
                var6 = var6 == var5;
                if (var6) {
                    _fun71747_ip = 100;
                    continue _fun71747
                }
            case 94:
                var4 = var5.availableTags;
            case 100:
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    _fun71749: for (var _fun71749_ip = 0;;) switch (_fun71749_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun71749_ip = 28;
                                continue _fun71749
                            }
                        case 18:
                            var3 = _closure2_slot0;
                            var2 = var3.availableTags;
                        case 28:
                            if (!(var1 == var2)) {
                                _fun71749_ip = 36;
                                continue _fun71749
                            }
                        case 32:
                            var2 = new Array(0);
                        case 36:
                            var3 = new Array(0);
                            var4 = 0;
                            var6 = var3;
                            var5 = var2;
                            var1 = arraySpread(var6, var5, var4);
                            var1 = _closure2_slot1;
                            var0 = var3;
                            if (var1) {
                                _fun71749_ip = 81;
                                continue _fun71749
                            }
                        case 62:
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.moderated;
                                var0 = !var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 81:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot31 = var6;
    var5 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot12;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot12;
            var2 = var3.can;
            var0 = _closure1_slot23;
            var1 = var0.READ_MESSAGE_HISTORY;
            var0 = _closure2_slot0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot32 = var5;
    var4 = function arg0() {
        var1 = arg0;
        var1 = var1.channelId;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot18;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var4 = _closure1_slot18;
            var2 = var4.getSearchLoading;
            var3 = _closure2_slot0;
            var2 = var2.bind(var4)(var3);
            var0.isSearchLoading = var2;
            var4 = _closure1_slot18;
            var2 = var4.getSearchQuery;
            var2 = var2.bind(var4)(var3);
            var0.searchQuery = var2;
            var2 = _closure1_slot18;
            var1 = var2.getSearchResults;
            var1 = var1.bind(var2)(var3);
            var0.searchResults = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot33 = var4;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 20;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot6;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = _closure1_slot13;
        var1[1] = var5;
        var4 = _closure1_slot9;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun71756: for (var _fun71756_ip = 0;;) switch (_fun71756_ip) {
                case 0:
                    var3 = _closure1_slot9;
                    var1 = var3.getChannel;
                    var0 = _closure2_slot1;
                    var1 = var1.bind(var3)(var0);
                    var9 = null;
                    if (!(var9 != var1)) {
                        _fun71756_ip = 284;
                        continue _fun71756
                    }
                case 33:
                    var0 = var1.isForumLikeChannel;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun71756_ip = 284;
                        continue _fun71756
                    }
                case 49:
                    var1 = _closure1_slot6;
                    var0 = var1.getActiveJoinedUnreadThreadsForParent;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var11 = var0.bind(var1)(var3, var2);
                    var1 = _closure1_slot6;
                    var0 = var1.getActiveUnjoinedUnreadThreadsForParent;
                    var8 = var0.bind(var1)(var3, var2);
                    var1 = _closure1_slot13;
                    var0 = var1.ackMessageId;
                    var7 = var0.bind(var1)(var2);
                    if (!(var9 != var7)) {
                        _fun71756_ip = 280;
                        continue _fun71756
                    }
                case 113:
                    var5 = var11;
                    var1 = 0;
                    var0 = 0;
                    for (var2 in var5)
                        case 128: {
                            var12 = var1;
                            var0 = var12;
                            case 143: var13 = var2;
                            var13 = var11[var13];
                            var15 = _closure1_slot13;
                            var14 = var15.lastMessageId;
                            var13 = var13.channel;
                            var13 = var13.id;
                            var14 = var14.bind(var15)(var13);
                            var13 = var9 != var14;
                            if (!var13) {
                                _fun71756_ip = 186;
                                continue _fun71756
                            }
                            case 182: var13 = var14 > var7;
                            case 186: var1 = var12;
                            if (!var13) {
                                _fun71756_ip = 128;
                                continue _fun71756
                            }
                            case 192: var1 = var12 + 1;
                            _fun71756_ip = 128;
                            continue _fun71756;
                        }
                case 197:
                    var5 = var8;
                    var1 = var0;
                    var0 = var1;
                    for (var2 in var5)
                        case 214: {
                            var11 = var1;
                            var0 = var11;
                            case 229: var12 = var2;
                            var12 = var8[var12];
                            var14 = _closure1_slot13;
                            var13 = var14.lastMessageId;
                            var12 = var12.id;
                            var13 = var13.bind(var14)(var12);
                            var12 = var9 != var13;
                            if (!var12) {
                                _fun71756_ip = 267;
                                continue _fun71756
                            }
                            case 263: var12 = var13 > var7;
                            case 267: var1 = var11;
                            if (!var12) {
                                _fun71756_ip = 214;
                                continue _fun71756
                            }
                            case 273: var1 = var11 + 1;
                            _fun71756_ip = 214;
                            continue _fun71756;
                        }
                case 278:
                    return var0;
                case 280:
                    var0 = 0;
                    return var0;
                case 284:
                    var0 = 0;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot34 = var3;
    var0 = global;
    var15 = var0.Object;
    var14 = var15.defineProperty;
    var10 = {};
    var0 = true;
    var10.value = var0;
    var0 = '__esModule';
    var0 = var14.bind(var15)(var2, var0, var10);
    var0 = 0;
    var10 = var12[var0];
    var0 = undefined;
    var10 = var13.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var14 = var12[var10];
    var10 = arg3;
    var10 = var10.bind(var0)(var14);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot9 = var10;
    var10 = 7;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot10 = var10;
    var10 = 8;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot11 = var10;
    var10 = 9;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot12 = var10;
    var10 = 10;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot13 = var10;
    var10 = 11;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot14 = var10;
    var10 = 12;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot15 = var10;
    var10 = 13;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot16 = var10;
    var10 = 14;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot17 = var10;
    var10 = 15;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot18 = var10;
    var10 = 16;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.ForumTimestampFormats;
    var _closure1_slot19 = var10;
    var10 = 17;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var13 = var10.AnalyticsObjectTypes;
    var _closure1_slot20 = var13;
    var13 = var10.AnalyticsObjects;
    var _closure1_slot21 = var13;
    var13 = var10.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot22 = var13;
    var10 = var10.Permissions;
    var _closure1_slot23 = var10;
    var10 = 18;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.ChannelFlags;
    var _closure1_slot24 = var10;
    var10 = 19;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.MAX_THREAD_UNREAD_MESSAGE_COUNT;
    var _closure1_slot25 = var10;
    var10 = new Array(0);
    var _closure1_slot26 = var10;
    var10 = {
        'isNew': false,
        'hasUnreads': false
    };
    var _closure1_slot27 = var10;
    var10 = 37;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/forums/ForumHooks.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = function arg0, arg1, arg2, arg3() {
        var9 = arg0;
        var6 = arg1;
        var7 = arg2;
        var5 = arg3;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var7;
        var _closure2_slot3 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 20;
        var3 = var3[var0];
        var0 = undefined;
        var10 = var4.bind(var0)(var3);
        var8 = var10.useStateFromStores;
        var3 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.hasLoaded;
            var0 = _closure2_slot0;
            var0 = var0.guild_id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var8.bind(var10)(var4, var3);
        var _closure2_slot4 = var8;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var10 = var9.id;
        var2 = new Array(6);
        var2[0] = var10;
        var9 = var9.guild_id;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function() { // Environment: var1
            _fun71759: for (var _fun71759_ip = 0;;) switch (_fun71759_ip) {
                case 0:
                    var0 = _closure2_slot4;
                    if (!var0) {
                        _fun71759_ip = 207;
                        continue _fun71759
                    }
                case 15:
                    var9 = _closure1_slot15;
                    var8 = var9.getThreadIds;
                    var2 = _closure2_slot0;
                    var13 = var2.id;
                    var12 = _closure2_slot1;
                    var11 = _closure2_slot2;
                    var10 = _closure2_slot3;
                    var14 = var9;
                    var6 = var14[var8](var13, var12, var11, var10, var9);
                    var5 = _closure1_slot17;
                    var3 = var5.getThreadIdsMissingCounts;
                    var2 = var2.guild_id;
                    var5 = var3.bind(var5)(var2, var6);
                    var3 = var5.filter;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.canDisplayPostUnreadMessageCount;
                        var0 = _closure1_slot13;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var6 = var3.bind(var5)(var2);
                    var5 = var6.slice;
                    var2 = 0;
                    var3 = 180;
                    var5 = var5.bind(var6)(var2, var3);
                    var3 = var5.map;
                    var1 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var0 = {};
                        var0.threadId = var3;
                        var2 = _closure1_slot13;
                        var1 = var2.getTrackedAckMessageId;
                        var1 = var1.bind(var2)(var3);
                        var0.ackMessageId = var1;
                        return var0;
                    };
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.length;
                    if (!(var1 > var2)) {
                        _fun71759_ip = 207;
                        continue _fun71759
                    }
                case 138:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var5 = 'REQUEST_FORUM_UNREADS';
                    var0.type = var5;
                    var4 = _closure2_slot0;
                    var5 = var4.guild_id;
                    var0.guildId = var5;
                    var4 = var4.id;
                    var0.channelId = var4;
                    var0.threads = var3;
                    var0 = var1.bind(var2)(var0);
                case 207:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useLoadForumUnreadCounts = var10;
    var10 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 20;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot7;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot9;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 23;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var6 = _closure1_slot7;
            var5 = var6.getThreadsForParent;
            var1 = _closure2_slot0;
            var4 = var1.guild_id;
            var1 = var1.parent_id;
            var1 = var5.bind(var6)(var4, var1);
            var2 = var2.bind(var3)(var1);
            var1 = var2.keys;
            var3 = var1.bind(var2)();
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var1
                _fun71764: for (var _fun71764_ip = 0;;) switch (_fun71764_ip) {
                    case 0:
                        var3 = _closure1_slot9;
                        var2 = var3.getChannel;
                        var1 = arg0;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if (var2) {
                            _fun71764_ip = 52;
                            continue _fun71764
                        }
                    case 31:
                        var2 = var3.hasFlag;
                        var0 = _closure1_slot24;
                        var0 = var0.PINNED;
                        var1 = var2.bind(var3)(var0);
                    case 52:
                        var0 = true;
                        var0 = var0 === var1;
                        return var0;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.head;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot9;
            var0 = var1.getChannel;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useExistingPin = var10;
    var2.useAvailableTags = var9;
    var2.useAppliedTags = var8;
    var8 = function arg0() {
        _fun71765: for (var _fun71765_ip = 0;;) switch (_fun71765_ip) {
            case 0:
                var4 = arguments[1];
                var5 = undefined;
                if (!(var4 === var5)) {
                    _fun71765_ip = 14;
                    continue _fun71765
                }
            case 11:
                var4 = 1;
            case 14:
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var5;
                var3 = _closure1_slot29;
                var2 = arg0;
                var5 = var3.bind(var5)(var2);
                _closure2_slot1 = var5;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = var2.slice;
                    var5 = _closure2_slot0;
                    var4 = 0;
                    var2 = var0.bind(var2)(var4, var5);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = global;
                    var3 = var2.Math;
                    var2 = var3.max;
                    var1 = _closure2_slot1;
                    var1 = var1.length;
                    var1 = var1 - var5;
                    var1 = var2.bind(var3)(var4, var1);
                    var0[1] = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useSomeAppliedTags = var8;
    var8 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 20;
        var0 = var5[var0];
        var3 = undefined;
        var7 = var4.bind(var3)(var0);
        var6 = var7.useStateFromStoresArray;
        var0 = _closure1_slot14;
        var4 = new Array(1);
        var4[0] = var0;
        var0 = function() { // Environment: var1
            var2 = _closure2_slot1;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot14;
                var1 = var2.getUser;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var1.bind(var2)(var0);
            var1 = var2.filter;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 24;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.isNotNullish;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var6.bind(var7)(var4, var0);
        var _closure2_slot2 = var0;
        var4 = _closure1_slot1;
        var2 = 26;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var1 = function() { // Environment: var1
            var2 = _closure2_slot2;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot10;
                var2 = var3.requestMember;
                var0 = _closure2_slot0;
                var1 = var0.guild_id;
                var0 = arg0;
                var0 = var0.id;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.useFacepileUsers = var8;
    var8 = function arg0, arg1() {
        _fun71772: for (var _fun71772_ip = 0;;) switch (_fun71772_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var2 = arguments[2];
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var6;
                var8 = undefined;
                if (!(var2 === var8)) {
                    _fun71772_ip = 38;
                    continue _fun71772
                }
            case 25:
                var1 = _closure1_slot19;
                var2 = var1.DURATION_AGO;
            case 38:
                var _closure2_slot2 = var2;
                var _closure2_slot3 = var8;
                var _closure2_slot4 = var8;
                var _closure2_slot5 = var8;
                var9 = _closure1_slot4;
                var5 = var9.useMemo;
                var3 = var7.id;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 27;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.extractTimestamp;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var9)(var3, var4);
                _closure2_slot3 = var5;
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 28;
                var3 = var9[var3];
                var4 = var4.bind(var8)(var3);
                var3 = var4.useLastMessageTimestamp;
                var7 = var3.bind(var4)(var7);
                _closure2_slot4 = var7;
                var8 = _closure1_slot4;
                var4 = var8.useMemo;
                var3 = new Array(2);
                var3[0] = var6;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getForumTimestampFormatter;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var4.bind(var8)(var2, var3);
                _closure2_slot5 = var4;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun71775: for (var _fun71775_ip = 0;;) switch (_fun71775_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 29;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.ThreadSortOrder;
                            var0 = var0.CREATION_DATE;
                            if (!(var3 !== var0)) {
                                _fun71775_ip = 90;
                                continue _fun71775
                            }
                        case 48:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 28;
                            var0 = var5[var0];
                            var6 = var3.bind(var4)(var0);
                            var5 = var6.getTimestampString;
                            var3 = _closure2_slot4;
                            var0 = _closure2_slot5;
                            var0 = var5.bind(var6)(var3, var0);
                            _fun71775_ip = 130;
                            continue _fun71775;
                        case 90:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 28;
                            var2 = var5[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.getTimestampString;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 130:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useLastActiveTimestamp = var8;
    var8 = function arg0() {
        _fun71776: for (var _fun71776_ip = 0;;) switch (_fun71776_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var4 = null;
                var5 = var4 == var1;
                var4 = undefined;
                if (var5) {
                    _fun71776_ip = 38;
                    continue _fun71776
                }
            case 32:
                var4 = var1.reactions;
            case 38:
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    _fun71777: for (var _fun71777_ip = 0;;) switch (_fun71777_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.maxBy;
                            var5 = _closure2_slot0;
                            var0 = null;
                            var5 = var0 == var5;
                            if (var5) {
                                _fun71777_ip = 57;
                                continue _fun71777
                            }
                        case 47:
                            var4 = _closure2_slot0;
                            var1 = var4.reactions;
                        case 57:
                            if (!(var0 == var1)) {
                                _fun71777_ip = 65;
                                continue _fun71777
                            }
                        case 61:
                            var1 = new Array(0);
                        case 65:
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = global;
                                var3 = var1.Math;
                                var2 = var3.max;
                                var1 = var0.burst_count;
                                var0 = var0.count;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useMostUsedReaction = var8;
    var2.useDefaultReactionEmoji = var7;
    var7 = function arg0() {
        _fun71779: for (var _fun71779_ip = 0;;) switch (_fun71779_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.message;
                var _closure2_slot0 = var6;
                var5 = var0.parentChannel;
                var7 = var0.count;
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun71779_ip = 35;
                    continue _fun71779
                }
            case 32:
                var7 = 1;
            case 35:
                var0 = var0.sorted;
                if (!(var0 === var4)) {
                    _fun71779_ip = 47;
                    continue _fun71779
                }
            case 45:
                var0 = true;
            case 47:
                var _closure2_slot1 = var0;
                var3 = _closure1_slot30;
                var3 = var3.bind(var4)(var5);
                var9 = _closure1_slot4;
                var8 = var9.useMemo;
                var5 = null;
                var11 = var5 == var6;
                var10 = undefined;
                if (var11) {
                    _fun71779_ip = 89;
                    continue _fun71779
                }
            case 83:
                var10 = var6.reactions;
            case 89:
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var0;
                var0 = function() { // Environment: var1
                    _fun71780: for (var _fun71780_ip = 0;;) switch (_fun71780_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            var2 = var1 == var2;
                            var3 = undefined;
                            var4 = undefined;
                            if (var2) {
                                _fun71780_ip = 30;
                                continue _fun71780
                            }
                        case 20:
                            var2 = _closure2_slot0;
                            var4 = var2.reactions;
                        case 30:
                            if (!(var1 == var4)) {
                                _fun71780_ip = 38;
                                continue _fun71780
                            }
                        case 34:
                            var4 = new Array(0);
                        case 38:
                            var1 = _closure2_slot1;
                            var0 = var4;
                            if (!var1) {
                                _fun71780_ip = 102;
                                continue _fun71780
                            }
                        case 48:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 23;
                            var1 = var5[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.sortBy;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.count;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var4, var1);
                            var1 = var2.reverse;
                            var0 = var1.bind(var2)();
                        case 102:
                            return var0;
                    }
                };
                var0 = var8.bind(var9)(var0, var6);
                var6 = new Array(0);
                if (!(var5 != var3)) {
                    _fun71779_ip = 153;
                    continue _fun71779
                }
            case 122:
                var5 = {
                    'emoji': null,
                    'me': false,
                    'count': 0,
                    'burst_count': 0,
                    'me_burst': false
                };
                var5.emoji = var3;
                var3 = new Array(1);
                var3[0] = var5;
                var6 = var3;
            case 153:
                var3 = var0.length;
                var5 = 0;
                if (!(var3 > var5)) {
                    _fun71779_ip = 167;
                    continue _fun71779
                }
            case 164:
                var6 = var0;
            case 167:
                var0 = {};
                var3 = var6.slice;
                var3 = var3.bind(var6)(var5, var7);
                var0.reactions = var3;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 23;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.sum;
                var5 = var6.slice;
                var4 = var6.length;
                var5 = var5.bind(var6)(var7, var4);
                var4 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.count;
                    var0 = var0.burst_count;
                    var0 = var1 + var0;
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var0.additionalNonUniqueReactionCount = var1;
                return var0;
        }
    };
    var2.useSomeForumPostReactions = var7;
    var7 = function arg0() {
        _fun71783: for (var _fun71783_ip = 0;;) switch (_fun71783_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.containerWidth;
                var11 = var1.reactionEmojiWidth;
                var10 = var1.digitWidth;
                var2 = var1.message;
                var _closure2_slot0 = var2;
                var4 = var1.parentChannel;
                var1 = _closure1_slot30;
                var5 = undefined;
                var1 = var1.bind(var5)(var4);
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var9 = null;
                var6 = var9 == var2;
                if (var6) {
                    _fun71783_ip = 76;
                    continue _fun71783
                }
            case 70:
                var5 = var2.reactions;
            case 76:
                var2 = new Array(1);
                var2[0] = var5;
                var0 = function() { // Environment: var0
                    _fun71784: for (var _fun71784_ip = 0;;) switch (_fun71784_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.sortBy;
                            var5 = _closure2_slot0;
                            var0 = null;
                            var5 = var0 == var5;
                            if (var5) {
                                _fun71784_ip = 57;
                                continue _fun71784
                            }
                        case 47:
                            var4 = _closure2_slot0;
                            var1 = var4.reactions;
                        case 57:
                            if (!(var0 == var1)) {
                                _fun71784_ip = 65;
                                continue _fun71784
                            }
                        case 61:
                            var1 = new Array(0);
                        case 65:
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.count;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1, var0);
                            var0 = var1.reverse;
                            var0 = var0.bind(var1)();
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0, var2);
                var5 = new Array(0);
                if (!(var9 != var1)) {
                    _fun71783_ip = 136;
                    continue _fun71783
                }
            case 105:
                var2 = {
                    'emoji': null,
                    'me': false,
                    'count': 0,
                    'burst_count': 0,
                    'me_burst': false
                };
                var2.emoji = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var5 = var1;
            case 136:
                var1 = var0.length;
                var4 = 0;
                if (!(var1 > var4)) {
                    _fun71783_ip = 150;
                    continue _fun71783
                }
            case 147:
                var5 = var0;
            case 150:
                var0 = var5.length;
                var0 = var4 < var0;
                var6 = 1;
                var8 = global;
                var7 = 0;
                var3 = 0;
                var1 = 0;
                var2 = 0;
                if (!var0) {
                    _fun71783_ip = 287;
                    continue _fun71783
                }
            case 175:
                var0 = var5[var1];
                var13 = var0.count;
                if (!(var9 == var13)) {
                    _fun71783_ip = 195;
                    continue _fun71783
                }
            case 189:
                var13 = var0.burst_count;
            case 195:
                var14 = var9 != var13;
                var0 = 0;
                if (!var14) {
                    _fun71783_ip = 207;
                    continue _fun71783
                }
            case 204:
                var0 = var13;
            case 207:
                var14 = var8.Math;
                var13 = var14.ceil;
                var16 = var8.Math;
                var15 = var16.log10;
                var0 = var0 + var6;
                var0 = var15.bind(var16)(var0);
                var0 = var13.bind(var14)(var0);
                var0 = var10 * var0;
                var0 = var11 + var0;
                var13 = var3 + var0;
                var2 = var7;
                if (!(var13 < var12)) {
                    _fun71783_ip = 287;
                    continue _fun71783
                }
            case 264:
                var3 = var3 + var0;
                var7 = var7 + var6;
                var1 = var1 + 1;
                var0 = var5.length;
                var2 = var7;
                if (var1 < var0) {
                    _fun71783_ip = 175;
                    continue _fun71783
                }
            case 287:
                var0 = var5.length;
                var0 = var0 - var2;
                var3 = var2;
                var1 = var0;
                if (!(var1 > var4)) {
                    _fun71783_ip = 314;
                    continue _fun71783
                }
            case 306:
                var3 = var2 - var6;
                var1 = var0 + var6;
            case 314:
                var0 = {};
                var2 = var5.slice;
                var2 = var2.bind(var5)(var4, var3);
                var0.reactions = var2;
                var0.additionalReactionCount = var1;
                return var0;
        }
    };
    var2.useMaxPossibleForumPostReactions = var7;
    var7 = function arg0() {
        _fun71786: for (var _fun71786_ip = 0;;) switch (_fun71786_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 20;
                var6 = var7[var3];
                var4 = undefined;
                var10 = var5.bind(var4)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var0
                    _fun71787: for (var _fun71787_ip = 0;;) switch (_fun71787_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getCount;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 != var1;
                            var0 = 0;
                            if (!var2) {
                                _fun71787_ip = 44;
                                continue _fun71787
                            }
                        case 41:
                            var0 = var1;
                        case 44:
                            return var0;
                    }
                };
                var6 = var9.bind(var10)(var8, var6);
                var _closure2_slot1 = var6;
                var8 = 30;
                var8 = var7[var8];
                var9 = var5.bind(var4)(var8);
                var8 = var9.getMessageCountText;
                var2 = var2.id;
                var2 = var8.bind(var9)(var6, var2);
                var8 = var7[var3];
                var11 = var5.bind(var4)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot13;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.canDisplayPostUnreadMessageCount;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var4 = _closure1_slot13;
                    var0 = new Array(1);
                    var0[0] = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var10.bind(var11)(var9, var8);
                var _closure2_slot2 = var8;
                var3 = var7[var3];
                var4 = var5.bind(var4)(var3);
                var3 = var4.useStateFromStores;
                var5 = _closure1_slot17;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun71789: for (var _fun71789_ip = 0;;) switch (_fun71789_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun71789_ip = 14;
                                continue _fun71789
                            }
                        case 10:
                            var1 = null;
                            return var1;
                        case 14:
                            var4 = _closure1_slot17;
                            var3 = var4.getCount;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var5 = var3.bind(var4)(var1);
                            var1 = null;
                            if (!(var1 != var5)) {
                                _fun71789_ip = 53;
                                continue _fun71789
                            }
                        case 47:
                            var1 = 0;
                            if (!(!(var5 > var1))) {
                                _fun71789_ip = 61;
                                continue _fun71789
                            }
                        case 53:
                            var1 = '1+';
                            return var1;
                        case 61:
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.min;
                            var0 = _closure2_slot1;
                            var0 = var3.bind(var4)(var5, var0);
                            var3 = _closure1_slot25;
                            if (!(var0 >= var3)) {
                                _fun71789_ip = 121;
                                continue _fun71789
                            }
                        case 92:
                            var4 = _closure1_slot25;
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var2 = '';
                            var1 = '+';
                            var0 = var3.bind(var2)(var4, var1);
                        case 121:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var0);
                var0 = {};
                var0.messageCount = var6;
                var3 = null;
                var3 = var3 != var6;
                if (!var3) {
                    _fun71786_ip = 221;
                    continue _fun71786
                }
            case 195:
                var4 = global;
                var4 = var4.HermesInternal;
                var5 = var4.concat;
                var4 = '';
                var4 = var5.bind(var4)(var6);
                var3 = var4 !== var2;
            case 221:
                var0.isMaxMessageCount = var3;
                var0.messageCountText = var2;
                var0.unreadCount = var1;
                return var0;
        }
    };
    var2.useMessageCount = var7;
    var7 = function arg0, arg1() {
        _fun71790: for (var _fun71790_ip = 0;;) switch (_fun71790_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var2 = null;
                var1 = var2 == var7;
                var3 = undefined;
                var8 = undefined;
                if (var1) {
                    _fun71790_ip = 41;
                    continue _fun71790
                }
            case 21:
                var1 = var7.author;
                var5 = var2 == var1;
                var8 = undefined;
                if (var5) {
                    _fun71790_ip = 41;
                    continue _fun71790
                }
            case 36:
                var8 = var1.id;
            case 41:
                var _closure2_slot0 = var8;
                var1 = var4.getGuildId;
                var9 = var1.bind(var4)();
                var _closure2_slot1 = var9;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 20;
                var1 = var10[var1];
                var12 = var6.bind(var3)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot14;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot14;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var11.bind(var12)(var4, var1);
                var4 = 31;
                var4 = var10[var4];
                var6 = var6.bind(var3)(var4);
                var4 = var6.useNullableMessageAuthor;
                var4 = var4.bind(var6)(var7);
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var8;
                var0 = function() { // Environment: var0
                    _fun71792: for (var _fun71792_ip = 0;;) switch (_fun71792_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun71792_ip = 24;
                                continue _fun71792
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun71792_ip = 54;
                                continue _fun71792
                            }
                        case 27:
                            var3 = _closure1_slot10;
                            var2 = var3.requestMember;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1, var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var0, var5);
                var0 = {};
                var6 = var2 == var4;
                var5 = undefined;
                if (var6) {
                    _fun71790_ip = 186;
                    continue _fun71790
                }
            case 180:
                var5 = var4.nick;
            case 186:
                if (!(var2 == var5)) {
                    _fun71790_ip = 207;
                    continue _fun71790
                }
            case 190:
                var7 = var2 == var1;
                var6 = undefined;
                if (var7) {
                    _fun71790_ip = 204;
                    continue _fun71790
                }
            case 199:
                var6 = var1.username;
            case 204:
                var5 = var6;
            case 207:
                var0.authorName = var5;
                var5 = var2 == var4;
                var6 = undefined;
                if (var5) {
                    _fun71790_ip = 227;
                    continue _fun71790
                }
            case 221:
                var6 = var4.colorString;
            case 227:
                var7 = var2 != var6;
                var5 = null;
                if (!var7) {
                    _fun71790_ip = 239;
                    continue _fun71790
                }
            case 236:
                var5 = var6;
            case 239:
                var0.authorColor = var5;
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun71790_ip = 259;
                    continue _fun71790
                }
            case 253:
                var3 = var4.colorStrings;
            case 259:
                var4 = var2 != var3;
                var2 = null;
                if (!var4) {
                    _fun71790_ip = 271;
                    continue _fun71790
                }
            case 268:
                var2 = var3;
            case 271:
                var0.authorColors = var2;
                var0.user = var1;
                return var0;
        }
    };
    var2.useForumPostMessageAuthor = var7;
    var7 = function arg0() {
        _fun71793: for (var _fun71793_ip = 0;;) switch (_fun71793_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 20;
                var2 = var8[var1];
                var7 = undefined;
                var10 = var5.bind(var7)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot14;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot14;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var0.ownerId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var9.bind(var10)(var4, var2);
                var1 = var8[var1];
                var10 = var5.bind(var7)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot16;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    _fun71795: for (var _fun71795_ip = 0;;) switch (_fun71795_ip) {
                        case 0:
                            var2 = _closure1_slot16;
                            var1 = var2.getMessage;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun71795_ip = 47;
                                continue _fun71795
                            }
                        case 41:
                            var0 = var1.firstMessage;
                        case 47:
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var4, var1);
                var4 = 31;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.useNullableUserAuthor;
                var8 = null;
                var9 = var8 == var1;
                if (var9) {
                    _fun71793_ip = 136;
                    continue _fun71793
                }
            case 130:
                var7 = var1.author;
            case 136:
                var1 = var2;
                if (!(var8 != var7)) {
                    _fun71793_ip = 146;
                    continue _fun71793
                }
            case 143:
                var1 = var7;
            case 146:
                var1 = var4.bind(var5)(var1, var6);
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var7 = var6.guild_id;
                var3 = new Array(2);
                var3[0] = var7;
                var6 = var6.ownerId;
                var3[1] = var6;
                var0 = function() { // Environment: var0
                    _fun71796: for (var _fun71796_ip = 0;;) switch (_fun71796_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.ownerId;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun71796_ip = 53;
                                continue _fun71796
                            }
                        case 19:
                            var3 = _closure1_slot10;
                            var2 = var3.requestMember;
                            var0 = _closure2_slot0;
                            var1 = var0.guild_id;
                            var0 = var0.ownerId;
                            var0 = var2.bind(var3)(var1, var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = {};
                var0.user = var2;
                var0.author = var1;
                return var0;
        }
    };
    var2.useForumPostAuthor = var7;
    var7 = function arg0() {
        _fun71797: for (var _fun71797_ip = 0;;) switch (_fun71797_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot14;
                var1 = var3.getUser;
                var0 = var4.ownerId;
                var1 = var1.bind(var3)(var0);
                var5 = _closure1_slot16;
                var3 = var5.getMessage;
                var0 = var4.id;
                var0 = var3.bind(var5)(var0);
                var6 = null;
                var3 = var6 == var0;
                var5 = undefined;
                var7 = undefined;
                if (var3) {
                    _fun71797_ip = 66;
                    continue _fun71797
                }
            case 60:
                var7 = var0.firstMessage;
            case 66:
                var0 = {};
                var0.user = var1;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 31;
                var2 = var8[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getUserAuthor;
                var8 = var6 == var7;
                var5 = undefined;
                if (var8) {
                    _fun71797_ip = 113;
                    continue _fun71797
                }
            case 107:
                var5 = var7.author;
            case 113:
                if (!(var6 != var5)) {
                    _fun71797_ip = 120;
                    continue _fun71797
                }
            case 117:
                var1 = var5;
            case 120:
                var1 = var2.bind(var3)(var1, var4);
                var0.author = var1;
                return var0;
        }
    };
    var2.getForumPostAuthor = var7;
    var7 = function arg0() {
        _fun71798: for (var _fun71798_ip = 0;;) switch (_fun71798_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.firstMessage;
                var _closure2_slot0 = var4;
                var10 = var1.formatInline;
                var5 = undefined;
                if (!(var10 === var5)) {
                    _fun71798_ip = 29;
                    continue _fun71798
                }
            case 27:
                var10 = true;
            case 29:
                var _closure2_slot1 = var10;
                var9 = var1.noStyleAndInteraction;
                if (!(var9 === var5)) {
                    _fun71798_ip = 45;
                    continue _fun71798
                }
            case 43:
                var9 = true;
            case 45:
                var _closure2_slot2 = var9;
                var2 = var1.hasUnreads;
                if (!(var2 === var5)) {
                    _fun71798_ip = 61;
                    continue _fun71798
                }
            case 59:
                var2 = true;
            case 61:
                var _closure2_slot3 = var5;
                var _closure2_slot4 = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 32;
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var7 = var3.GameMentionsUserExperiment;
                var6 = var7.useExperiment;
                var3 = {};
                var8 = 'modules/forums/ForumHooks';
                var3.location = var8;
                var3 = var6.bind(var7)(var3);
                var8 = var3.enabled;
                _closure2_slot3 = var8;
                var7 = 'text-muted';
                if (!var2) {
                    _fun71798_ip = 145;
                    continue _fun71798
                }
            case 139:
                var7 = 'text-default';
            case 145:
                _closure2_slot4 = var7;
                var6 = _closure1_slot4;
                var3 = var6.useMemo;
                var2 = new Array(5);
                var2[0] = var4;
                var2[1] = var10;
                var2[2] = var9;
                var2[3] = var8;
                var2[4] = var7;
                var0 = function() { // Environment: var0
                    _fun71799: for (var _fun71799_ip = 0;;) switch (_fun71799_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = null;
                            var2 = var1 == var0;
                            var4 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun71799_ip = 29;
                                continue _fun71799
                            }
                        case 20:
                            var2 = _closure2_slot0;
                            var0 = var2.content;
                        case 29:
                            if (!(var1 != var0)) {
                                _fun71799_ip = 50;
                                continue _fun71799
                            }
                        case 33:
                            var0 = _closure2_slot0;
                            var1 = var0.content;
                            var0 = '';
                            if (!(var0 === var1)) {
                                _fun71799_ip = 66;
                                continue _fun71799
                            }
                        case 50:
                            var0 = {
                                'hasSpoilerEmbeds': false,
                                'content': null
                            };
                            _fun71799_ip = 149;
                            continue _fun71799;
                        case 66:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 33;
                            var1 = var3[var1];
                            var3 = var2.bind(var4)(var1);
                            var2 = _closure2_slot0;
                            var1 = {};
                            var6 = _closure2_slot1;
                            var1.formatInline = var6;
                            var6 = _closure2_slot2;
                            var1.noStyleAndInteraction = var6;
                            var6 = true;
                            var1.allowHeading = var6;
                            var1.allowList = var6;
                            var6 = _closure2_slot3;
                            var1.allowGameMentions = var6;
                            var5 = _closure2_slot4;
                            var1.textColor = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 149:
                            return var0;
                    }
                };
                var2 = var3.bind(var6)(var0, var2);
                var3 = var2.hasSpoilerEmbeds;
                var0 = {};
                var0.hasSpoilerEmbeds = var3;
                var2 = var2.content;
                var0.content = var2;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 34;
                var7 = var6[var1];
                var8 = var2.bind(var5)(var7);
                var7 = var8.useFindFirstMediaProperties;
                var7 = var7.bind(var8)(var4, var3);
                var0.firstMedia = var7;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.useFirstMediaIsEmbed;
                var1 = var1.bind(var2)(var4, var3);
                var0.firstMediaIsEmbed = var1;
                return var0;
        }
    };
    var2.useForumPostFirstMessageMarkup = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot12;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot12;
            var2 = var3.can;
            var0 = _closure1_slot23;
            var1 = var0.MANAGE_CHANNELS;
            var0 = _closure2_slot0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanManageChannel = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 20;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresObject;
        var5 = _closure1_slot11;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot13;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun71803: for (var _fun71803_ip = 0;;) switch (_fun71803_ip) {
                case 0:
                    var5 = _closure1_slot11;
                    var4 = var5.getGuild;
                    var3 = _closure2_slot0;
                    var2 = var3.getGuildId;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun71803_ip = 39;
                        continue _fun71803
                    }
                case 35:
                    var3 = _closure1_slot22;
                case 39:
                    var5 = var4.bind(var5)(var3);
                    if (!(var2 != var5)) {
                        _fun71803_ip = 101;
                        continue _fun71803
                    }
                case 48:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getForumPostReadStates;
                    var2 = _closure2_slot0;
                    var6 = _closure1_slot13;
                    var0 = new Array(1);
                    var0[0] = var6;
                    var0 = var3.bind(var4)(var2, var5, var0);
                    _fun71803_ip = 105;
                    continue _fun71803;
                case 101:
                    var0 = _closure1_slot27;
                case 105:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useForumPostReadStates = var7;
    var7 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun71805: for (var _fun71805_ip = 0;;) switch (_fun71805_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 == var0;
                    var3 = '';
                    var0 = var3;
                    if (var2) {
                        _fun71805_ip = 63;
                        continue _fun71805
                    }
                case 23:
                    var2 = _closure2_slot0;
                    var2 = var2.template;
                    var2 = var4 == var2;
                    var0 = var3;
                    if (var2) {
                        _fun71805_ip = 63;
                        continue _fun71805
                    }
                case 43:
                    var1 = _closure2_slot0;
                    var2 = var1.template;
                    var1 = var2.trim;
                    var0 = var1.bind(var2)();
                case 63:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useChannelTemplate = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot6;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var4 = _closure1_slot6;
            var2 = var4.getActiveJoinedThreadsForGuild;
            var3 = _closure2_slot0;
            var2 = var2.bind(var4)(var3);
            var0.activeJoinedThreads = var2;
            var4 = _closure1_slot6;
            var2 = var4.getActiveUnjoinedThreadsForGuild;
            var2 = var2.bind(var4)(var3);
            var0.activeUnjoinedThreads = var2;
            var2 = _closure1_slot6;
            var1 = var2.getNewThreadCountsForGuild;
            var1 = var1.bind(var2)(var3);
            var0.newThreadCounts = var1;
            return var0;
        };
        var1 = var2.bind(var3)(var1, var0);
        var0 = {};
        var2 = var1.activeJoinedThreads;
        var0.activeJoinedThreads = var2;
        var2 = var1.activeUnjoinedThreads;
        var0.activeUnjoinedThreads = var2;
        var1 = var1.newThreadCounts;
        var0.newThreadCounts = var1;
        return var0;
    };
    var2.useForumThreadsForChannelList = var7;
    var2.useVisibleForumTags = var6;
    var6 = function arg0, arg1() {
        var4 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot31;
        var7 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var2 = var3[var2];
        var3 = undefined;
        var10 = var7.bind(var3)(var2);
        var9 = var10.useStateFromStores;
        var2 = _closure1_slot9;
        var8 = new Array(1);
        var8[0] = var2;
        var7 = new Array(1);
        var7[0] = var4;
        var2 = function() { // Environment: var0
            _fun71809: for (var _fun71809_ip = 0;;) switch (_fun71809_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getChannel;
                    var4 = _closure2_slot0;
                    var0 = null;
                    var4 = var0 == var4;
                    var0 = undefined;
                    if (var4) {
                        _fun71809_ip = 40;
                        continue _fun71809
                    }
                case 30:
                    var3 = _closure2_slot0;
                    var0 = var3.parent_id;
                case 40:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var2 = var9.bind(var10)(var8, var2, var7);
        var5 = var5.bind(var3)(var2);
        var _closure2_slot2 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun71810: for (var _fun71810_ip = 0;;) switch (_fun71810_ip) {
                case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot2;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var2.bind(var3)(var0);
                    var4 = _closure2_slot0;
                    var2 = null;
                    var0 = var3;
                    if (!(var2 != var4)) {
                        _fun71810_ip = 95;
                        continue _fun71810
                    }
                case 39:
                    var2 = _closure2_slot0;
                    var1 = var2.isModeratorReportChannel;
                    var1 = var1.bind(var2)();
                    var0 = var3;
                    if (!var1) {
                        _fun71810_ip = 95;
                        continue _fun71810
                    }
                case 59:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.sortedModeratorReportTags;
                    var0 = var1.bind(var2)(var3);
                case 95:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useVisibleAppliedForumTags = var6;
    var2.useCanSearchForumPosts = var5;
    var5 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot12;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot12;
            var2 = var3.can;
            var0 = _closure1_slot23;
            var1 = var0.READ_MESSAGE_HISTORY;
            var0 = _closure2_slot0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanViewArchivedPosts = var5;
    var5 = function arg0() {
        var1 = arg0;
        var1 = var1.channelId;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot18;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun71815: for (var _fun71815_ip = 0;;) switch (_fun71815_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun71815_ip = 38;
                        continue _fun71815
                    }
                case 16:
                    var3 = _closure1_slot18;
                    var2 = var3.getSearchQuery;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useForumSearchQuery = var5;
    var2.useForumSearchState = var4;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot18;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot18;
            var1 = var2.getSearchQuery;
            var0 = _closure2_slot0;
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useHasForumSearchQuery = var4;
    var4 = function arg0, arg1, arg2() {
        _fun71818: for (var _fun71818_ip = 0;;) switch (_fun71818_ip) {
            case 0:
                var10 = arg0;
                var6 = arg1;
                var5 = arg2;
                var9 = arguments[3];
                var _closure2_slot0 = var10;
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var5;
                var0 = undefined;
                if (!(var9 === var0)) {
                    _fun71818_ip = 34;
                    continue _fun71818
                }
            case 32:
                var9 = false;
            case 34:
                var _closure2_slot3 = var9;
                var _closure2_slot4 = var0;
                var _closure2_slot5 = var0;
                var _closure2_slot6 = var0;
                var _closure2_slot7 = var0;
                var _closure2_slot8 = var0;
                var4 = _closure1_slot33;
                var3 = {};
                var7 = var10.id;
                var3.channelId = var7;
                var3 = var4.bind(var0)(var3);
                var8 = var3.isSearchLoading;
                _closure2_slot4 = var8;
                var7 = var3.searchQuery;
                _closure2_slot5 = var7;
                var3 = _closure1_slot32;
                var11 = var3.bind(var0)(var10);
                _closure2_slot6 = var11;
                var12 = _closure1_slot4;
                var4 = var12.useRef;
                var3 = null;
                var3 = var4.bind(var12)(var3);
                _closure2_slot7 = var3;
                var12 = _closure1_slot4;
                var4 = var12.useRef;
                var3 = global;
                var3 = var3.Set;
                var13 = var3.prototype;
                var13 = Object.create(var13, {
                    constructor: {
                        value: var3
                    }
                });
                var16 = var13;
                var3 = new var16[var3](var15);
                var3 = var3 instanceof Object ? var3 : var13;
                var3 = var4.bind(var12)(var3);
                _closure2_slot8 = var3;
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = new Array(8);
                var2[0] = var11;
                var11 = var10.guild_id;
                var2[1] = var11;
                var10 = var10.id;
                var2[2] = var10;
                var2[3] = var9;
                var2[4] = var8;
                var2[5] = var7;
                var2[6] = var6;
                var2[7] = var5;
                var1 = function() { // Environment: var1
                    _fun71819: for (var _fun71819_ip = 0;;) switch (_fun71819_ip) {
                        case 0:
                            var3 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun71819_ip = 31;
                                continue _fun71819
                            }
                        case 15:
                            var3 = _closure2_slot7;
                            var3 = var3.current;
                            if (!(var2 == var3)) {
                                _fun71819_ip = 223;
                                continue _fun71819
                            }
                        case 31:
                            var3 = _closure2_slot5;
                            if (!(var2 != var3)) {
                                _fun71819_ip = 219;
                                continue _fun71819
                            }
                        case 42:
                            var3 = _closure2_slot5;
                            var4 = var3.length;
                            var3 = 0;
                            if (!(var3 !== var4)) {
                                _fun71819_ip = 219;
                                continue _fun71819
                            }
                        case 60:
                            var3 = _closure2_slot3;
                            if (var3) {
                                _fun71819_ip = 219;
                                continue _fun71819
                            }
                        case 70:
                            var3 = _closure2_slot6;
                            if (var3) {
                                _fun71819_ip = 124;
                                continue _fun71819
                            }
                        case 77:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 35;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.clearForumSearch;
                            var3 = _closure2_slot0;
                            var3 = var3.id;
                            var3 = var4.bind(var5)(var3);
                            _fun71819_ip = 219;
                            continue _fun71819;
                        case 124:
                            var3 = _closure2_slot7;
                            var4 = var3.current;
                            var3 = _closure2_slot5;
                            if (!(var4 === var3)) {
                                _fun71819_ip = 158;
                                continue _fun71819
                            }
                        case 141:
                            var3 = _closure2_slot8;
                            var4 = var3.current;
                            var3 = _closure2_slot1;
                            if (!(var4 !== var3)) {
                                _fun71819_ip = 219;
                                continue _fun71819
                            }
                        case 158:
                            var3 = _closure2_slot4;
                            if (var3) {
                                _fun71819_ip = 219;
                                continue _fun71819
                            }
                        case 165:
                            var3 = global;
                            var6 = var3.setTimeout;
                            var4 = _closure1_slot3;
                            var5 = undefined;
                            var3 = function*() { // Environment: var0
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun71821: for (var _fun71821_ip = 0;;) switch (_fun71821_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun71821_ip = 124;
                                                continue _fun71821
                                            }
                                        case 7:
                                            var3 = _closure2_slot7;
                                            var2 = _closure2_slot5;
                                            var3.current = var2;
                                            var3 = _closure2_slot8;
                                            var2 = _closure2_slot1;
                                            var3.current = var2;
                                        case 38: // try_start_0
                                            var4 = _closure1_slot1;
                                            var3 = _closure1_slot2;
                                            var2 = 35;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var7 = var4.bind(var2)(var3);
                                            var6 = var7.searchForumPosts;
                                            var2 = _closure2_slot0;
                                            var12 = var2.guild_id;
                                            var11 = var2.id;
                                            var10 = _closure2_slot5;
                                            var9 = _closure2_slot1;
                                            var8 = _closure2_slot2;
                                            var13 = var7;
                                            var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                                            SaveGenerator(address = 106);
                                        case 104:
                                            return var1;
                                        case 106:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun71821_ip = 114;
                                                continue _fun71821
                                            }
                                        case 112: // try_end0
                                            _fun71821_ip = 119;
                                            continue _fun71821;
                                        case 114:
                                            return var1;
                                        case 117: // catch_target0
                                            CatchBlockStart(arg_register = 1);
                                        case 119:
                                            var1 = undefined;
                                            return var1;
                                        case 124:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var4 = var4.bind(var5)(var3);
                            var3 = 350;
                            var3 = var6.bind(var5)(var4, var3);
                            var _closure3_slot0 = var3;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                        case 219:
                            var0 = undefined;
                            return var0;
                        case 223:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 35;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.clearForumSearch;
                            var3 = _closure2_slot0;
                            var3 = var3.id;
                            var3 = var4.bind(var5)(var3);
                            var1 = _closure2_slot7;
                            var1.current = var2;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useAutomaticForumSearch = var4;
    var2.useUnreadThreadsCountForParent = var3;
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.channel;
        var _closure2_slot0 = var6;
        var2 = var0.sortOrder;
        var _closure2_slot1 = var2;
        var2 = var0.tagFilter;
        var _closure2_slot2 = var2;
        var2 = var0.tagSetting;
        var _closure2_slot3 = var2;
        var9 = var0.shouldAutomaticallyAck;
        var _closure2_slot4 = var9;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 20;
        var0 = var10[var5];
        var7 = undefined;
        var12 = var8.bind(var7)(var0);
        var11 = var12.useStateFromStoresArray;
        var4 = _closure1_slot15;
        var3 = new Array(1);
        var3[0] = var4;
        var0 = function() { // Environment: var1
            var5 = _closure1_slot15;
            var4 = var5.getThreadIds;
            var1 = _closure2_slot0;
            var9 = var1.id;
            var8 = _closure2_slot1;
            var7 = _closure2_slot2;
            var6 = _closure2_slot3;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            return var0;
        };
        var0 = var11.bind(var12)(var3, var0);
        var12 = _closure1_slot34;
        var11 = var6.guild_id;
        var3 = var6.id;
        var3 = var12.bind(var7)(var11, var3);
        var _closure2_slot5 = var3;
        var5 = var10[var5];
        var8 = var8.bind(var7)(var5);
        var7 = var8.useStateFromStores;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(2);
        var4[0] = var9;
        var4[1] = var3;
        var3 = function() { // Environment: var1
            _fun71825: for (var _fun71825_ip = 0;;) switch (_fun71825_ip) {
                case 0:
                    var0 = _closure2_slot4;
                    if (!var0) {
                        _fun71825_ip = 45;
                        continue _fun71825
                    }
                case 10:
                    var2 = _closure2_slot5;
                    var1 = 0;
                    var1 = var2 > var1;
                    if (var1) {
                        _fun71825_ip = 42;
                        continue _fun71825
                    }
                case 23:
                    var3 = _closure1_slot15;
                    var2 = var3.getCanAckThreads;
                    var1 = var2.bind(var3)();
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var5 = var7.bind(var8)(var5, var3, var4);
        var _closure2_slot6 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun71826: for (var _fun71826_ip = 0;;) switch (_fun71826_ip) {
                case 0:
                    var1 = _closure2_slot6;
                    if (!var1) {
                        _fun71826_ip = 83;
                        continue _fun71826
                    }
                case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 36;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.ackChannel;
                    var1 = _closure2_slot0;
                    var0 = {};
                    var5 = _closure1_slot21;
                    var5 = var5.ACK_FORUM_ACTIVE_THREADS;
                    var0.object = var5;
                    var4 = _closure1_slot20;
                    var4 = var4.ACK_AUTOMATIC;
                    var0.objectType = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 83:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useForumActiveThreadIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 4739, 4550, 4224, 6540, 1372, 5714, 1410, 3093, 3948, 1621, 7675, 5697, 8988, 6537, 6545, 660, 1379, 1233, 566, 6544, 806, 22, 1304, 5696, 4103, 21, 6552, 1381, 6729, 3982, 3991, 6856, 8958, 8989, 4574, 2]);