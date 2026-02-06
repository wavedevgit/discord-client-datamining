// modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.EVERYONE_CHANNEL_ID;
    var _closure1_slot7 = var9;
    var8 = var8.MemberListRowTypes;
    var _closure1_slot8 = var8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.RelationshipTypes;
    var _closure1_slot14 = var7;
    var3 = var3.StatusTypes;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot16 = var7;
    var7 = var3.Fragment;
    var _closure1_slot17 = var7;
    var3 = var3.jsxs;
    var _closure1_slot18 = var3;
    var3 = new Array(0);
    var _closure1_slot19 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105857: for (var _fun105857_ip = 0;;) switch (_fun105857_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.searchable;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun105857_ip = 19;
                    continue _fun105857
                }
            case 17:
                var4 = false;
            case 19:
                var2 = var0.searchableEmptyState;
                var30 = var0.channelId;
                var _closure2_slot0 = var30;
                var38 = var0.guildId;
                var _closure2_slot1 = var38;
                var1 = var0.roleId;
                var _closure2_slot2 = var1;
                var19 = var0.headerShown;
                if (!(var19 === var3)) {
                    _fun105857_ip = 65;
                    continue _fun105857
                }
            case 63:
                var19 = true;
            case 65:
                var32 = var0.onUserPress;
                var _closure2_slot3 = var32;
                var27 = var0.onUserLongPress;
                var _closure2_slot4 = var27;
                var31 = var0.opensUserProfileOnUserPress;
                if (!(var31 === var3)) {
                    _fun105857_ip = 97;
                    continue _fun105857
                }
            case 95:
                var31 = true;
            case 97:
                var _closure2_slot5 = var31;
                var14 = var0.disableStickySections;
                var13 = var0.inActionSheet;
                var12 = var0.disableThemedGradient;
                var11 = var0.listStyleOverride;
                var10 = var0.disableBottomSafeZone;
                var5 = var0.insetEnd;
                var8 = var0.isNameplatedList;
                var _closure2_slot6 = var8;
                var0 = var0.canShowDisplayNameStylesFont;
                if (!(var0 === var3)) {
                    _fun105857_ip = 159;
                    continue _fun105857
                }
            case 157:
                var0 = false;
            case 159:
                var _closure2_slot7 = var0;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var17 = _closure1_slot1;
                var18 = _closure1_slot3;
                var7 = 14;
                var7 = var18[var7];
                var7 = var17.bind(var3)(var7);
                var7 = var7.bind(var3)();
                var20 = var7.analyticsLocations;
                _closure2_slot8 = var20;
                var40 = _closure1_slot5;
                var7 = var40.useRef;
                var25 = null;
                var26 = var7.bind(var40)(var25);
                var7 = {};
                var7.guildId = var38;
                var7.listRef = var26;
                var7.searchable = var4;
                var7.searchableEmptyState = var2;
                var2 = function arg0() {
                    var2 = arg0;
                    var1 = var2.guildId;
                    var _closure3_slot0 = var1;
                    var3 = var2.listRef;
                    var _closure3_slot1 = var3;
                    var11 = var2.searchable;
                    var _closure3_slot2 = var11;
                    var10 = var2.searchableEmptyState;
                    var _closure3_slot3 = var10;
                    var7 = _closure1_slot5;
                    var5 = var7.useRef;
                    var2 = null;
                    var2 = var5.bind(var7)(var2);
                    var _closure3_slot4 = var2;
                    var5 = var7.useState;
                    var6 = '';
                    var5 = var5.bind(var7)(var6);
                    var16 = _closure1_slot4;
                    var15 = undefined;
                    var14 = 2;
                    var5 = var16.bind(var15)(var5, var14);
                    var9 = 0;
                    var8 = var5[var9];
                    var _closure3_slot5 = var8;
                    var13 = 1;
                    var5 = var5[var13];
                    var _closure3_slot6 = var5;
                    var5 = var7.useState;
                    var4 = _closure1_slot19;
                    var4 = var5.bind(var7)(var4);
                    var5 = var16.bind(var15)(var4, var14);
                    var4 = var5[var9];
                    var _closure3_slot7 = var4;
                    var5 = var5[var13];
                    var _closure3_slot8 = var5;
                    var12 = var7.useState;
                    var5 = function() { // Environment: var0
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var0 = 10;
                        var3 = var2[var0];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var1 = _closure1_slot0;
                        var0 = var2[var0];
                        var0 = var1.bind(var5)(var0);
                        var0 = var0.AutocompleterResultTypes;
                        var0 = var0.USER;
                        var3 = new Array(1);
                        var3[0] = var0;
                        var2 = {};
                        var0 = {};
                        var1 = _closure3_slot0;
                        var0.guild = var1;
                        var1 = true;
                        var0.strict = var1;
                        var2.userFilters = var0;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var9 = function(arg0, arg1) { // Environment: var0
                            _fun105860: for (var _fun105860_ip = 0;;) switch (_fun105860_ip) {
                                case 0:
                                    var1 = arg1;
                                    var0 = var1.trim;
                                    var1 = var0.bind(var1)();
                                    var0 = '';
                                    if (!(var0 !== var1)) {
                                        _fun105860_ip = 40;
                                        continue _fun105860
                                    }
                                case 21:
                                    var2 = _closure3_slot8;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    _fun105860_ip = 61;
                                    continue _fun105860;
                                case 40:
                                    var2 = _closure3_slot8;
                                    var1 = _closure1_slot19;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 61:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var10 = var1;
                        var8 = var3;
                        var7 = undefined;
                        var6 = var2;
                        var0 = new var10[var4](var9, var8, var7, var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var5 = var12.bind(var7)(var5);
                    var5 = var16.bind(var15)(var5, var13);
                    var12 = var5[var9];
                    var _closure3_slot9 = var12;
                    var18 = var7.useEffect;
                    var17 = new Array(2);
                    var17[0] = var11;
                    var17[1] = var12;
                    var5 = function() { // Environment: var0
                        _fun105861: for (var _fun105861_ip = 0;;) switch (_fun105861_ip) {
                            case 0:
                                var1 = _closure3_slot2;
                                if (var1) {
                                    _fun105861_ip = 67;
                                    continue _fun105861
                                }
                            case 10:
                                var2 = _closure3_slot6;
                                var1 = undefined;
                                var3 = '';
                                var1 = var2.bind(var1)(var3);
                                var2 = _closure3_slot9;
                                var1 = var2.clean;
                                var1 = var1.bind(var2)();
                                var1 = _closure3_slot4;
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun105861_ip = 81;
                                    continue _fun105861
                                }
                            case 54:
                                var1 = var2.setText;
                                var1 = var1.bind(var2)(var3);
                                _fun105861_ip = 81;
                                continue _fun105861;
                            case 67:
                                var1 = _closure3_slot9;
                                var0 = var1.createSearchContext;
                                var0 = var0.bind(var1)();
                            case 81:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5 = var18.bind(var7)(var5, var17);
                    var5 = var8.trim;
                    var5 = var5.bind(var8)();
                    var5 = var6 !== var5;
                    var _closure3_slot10 = var5;
                    var6 = var7.useState;
                    var6 = var6.bind(var7)(var11);
                    var6 = var16.bind(var15)(var6, var14);
                    var9 = var6[var9];
                    var _closure3_slot11 = var9;
                    var6 = var6[var13];
                    var _closure3_slot12 = var6;
                    var14 = var7.useEffect;
                    var13 = new Array(2);
                    var13[0] = var4;
                    var13[1] = var5;
                    var6 = function() { // Environment: var0
                        _fun105862: for (var _fun105862_ip = 0;;) switch (_fun105862_ip) {
                            case 0:
                                var2 = _closure3_slot7;
                                var3 = var2.length;
                                var2 = 0;
                                if (!(!(var3 > var2))) {
                                    _fun105862_ip = 69;
                                    continue _fun105862
                                }
                            case 20:
                                var2 = _closure3_slot10;
                                if (!var2) {
                                    _fun105862_ip = 69;
                                    continue _fun105862
                                }
                            case 27:
                                var2 = global;
                                var5 = var2.setTimeout;
                                var4 = undefined;
                                var3 = function() { // Environment: var1
                                    var2 = _closure3_slot12;
                                    var0 = undefined;
                                    var1 = false;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var2 = 300;
                                var2 = var5.bind(var4)(var3, var2);
                                var _closure4_slot0 = var2;
                                var1 = function() { // Environment: var1
                                    var0 = global;
                                    var2 = var0.clearTimeout;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                return var1;
                            case 69:
                                var2 = _closure3_slot12;
                                var0 = undefined;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var6 = var14.bind(var7)(var6, var13);
                    var13 = var7.useLayoutEffect;
                    var6 = new Array(2);
                    var6[0] = var3;
                    var6[1] = var8;
                    var3 = function() { // Environment: var0
                        _fun105865: for (var _fun105865_ip = 0;;) switch (_fun105865_ip) {
                            case 0:
                                var0 = _closure3_slot1;
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun105865_ip = 31;
                                    continue _fun105865
                                }
                            case 18:
                                var1 = var2.scrollToTop;
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                            case 31:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var13.bind(var7)(var3, var6);
                    var6 = var7.useCallback;
                    var3 = new Array(2);
                    var3[0] = var12;
                    var3[1] = var1;
                    var1 = function(arg0) { // Environment: var0
                        _fun105866: for (var _fun105866_ip = 0;;) switch (_fun105866_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = _closure3_slot9;
                                var0 = var2.search;
                                var0 = var0.bind(var2)(var4);
                                var2 = _closure3_slot6;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var4);
                                var2 = var4.trim;
                                var3 = var2.bind(var4)();
                                var2 = '';
                                if (!(var2 !== var3)) {
                                    _fun105866_ip = 89;
                                    continue _fun105866
                                }
                            case 50:
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var2 = 11;
                                var2 = var5[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.requestMembers;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1, var4);
                            case 89:
                                return var0;
                        }
                    };
                    var3 = var6.bind(var7)(var1, var3);
                    var6 = var7.useMemo;
                    var1 = new Array(4);
                    var1[0] = var11;
                    var1[1] = var10;
                    var1[2] = var9;
                    var1[3] = var8;
                    var0 = function() { // Environment: var0
                        _fun105867: for (var _fun105867_ip = 0;;) switch (_fun105867_ip) {
                            case 0:
                                var1 = _closure3_slot2;
                                var3 = null;
                                var0 = null;
                                if (!var1) {
                                    _fun105867_ip = 54;
                                    continue _fun105867
                                }
                            case 14:
                                var1 = _closure3_slot11;
                                var0 = null;
                                if (var1) {
                                    _fun105867_ip = 54;
                                    continue _fun105867
                                }
                            case 23:
                                var1 = _closure3_slot3;
                                var3 = var3 == var1;
                                var4 = undefined;
                                var1 = undefined;
                                if (var3) {
                                    _fun105867_ip = 51;
                                    continue _fun105867
                                }
                            case 38:
                                var3 = _closure3_slot3;
                                var2 = _closure3_slot5;
                                var1 = var3.bind(var4)(var2);
                            case 51:
                                var0 = var1;
                            case 54:
                                return var0;
                        }
                    };
                    var1 = var6.bind(var7)(var0, var1);
                    var0 = {};
                    var0.hasQuery = var5;
                    var0.queryResults = var4;
                    var0.onChangeText = var3;
                    var0.searchBarRef = var2;
                    var0.searchBarEmptyState = var1;
                    return var0;
                };
                var2 = var2.bind(var3)(var7);
                var9 = var2.hasQuery;
                _closure2_slot9 = var9;
                var35 = var2.onChangeText;
                var23 = var2.queryResults;
                _closure2_slot10 = var23;
                var34 = var2.searchBarRef;
                var29 = var2.searchBarEmptyState;
                var7 = _closure1_slot0;
                var2 = 15;
                var15 = var18[var2];
                var24 = var7.bind(var3)(var15);
                var22 = var24.useStateFromStoresObject;
                var15 = _closure1_slot9;
                var16 = new Array(1);
                var16[0] = var15;
                var15 = function() { // Environment: var21
                    _fun105868: for (var _fun105868_ip = 0;;) switch (_fun105868_ip) {
                        case 0:
                            var3 = _closure1_slot9;
                            var2 = var3.getProps;
                            var1 = _closure2_slot1;
                            var6 = _closure2_slot0;
                            var5 = _closure1_slot7;
                            var0 = null;
                            if (!(var6 !== var5)) {
                                _fun105868_ip = 38;
                                continue _fun105868
                            }
                        case 34:
                            var0 = _closure2_slot0;
                        case 38:
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var24 = var22.bind(var24)(var16, var15);
                var36 = var24.groups;
                _closure2_slot11 = var36;
                var37 = var24.rows;
                _closure2_slot12 = var37;
                var15 = var18[var2];
                var28 = var7.bind(var3)(var15);
                var22 = var28.useStateFromStores;
                var15 = _closure1_slot10;
                var16 = new Array(1);
                var16[0] = var15;
                var15 = function() { // Environment: var21
                    _fun105869: for (var _fun105869_ip = 0;;) switch (_fun105869_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot7;
                            if (!(var3 === var2)) {
                                _fun105869_ip = 22;
                                continue _fun105869
                            }
                        case 18:
                            var2 = undefined;
                            return var2;
                        case 22:
                            var2 = _closure1_slot10;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var39 = var22.bind(var28)(var16, var15);
                _closure2_slot13 = var39;
                var2 = var18[var2];
                var16 = var7.bind(var3)(var2);
                var15 = var16.useStateFromStores;
                var2 = _closure1_slot13;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var21
                    var1 = _closure1_slot13;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var28 = var15.bind(var16)(var7, var2);
                _closure2_slot14 = var28;
                var2 = 16;
                var2 = var18[var2];
                var2 = var17.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var16 = var40.useMemo;
                var15 = new Array(1);
                var15[0] = var38;
                var7 = function() { // Environment: var21
                    _fun105871: for (var _fun105871_ip = 0;;) switch (_fun105871_ip) {
                        case 0:
                            var3 = _closure1_slot12;
                            var2 = var3.getGuild;
                            var0 = _closure2_slot1;
                            var3 = var2.bind(var3)(var0);
                            var0 = null;
                            var2 = var0 != var3;
                            var4 = undefined;
                            var0 = undefined;
                            if (!var2) {
                                _fun105871_ip = 68;
                                continue _fun105871
                            }
                        case 37:
                            var2 = _closure1_slot2;
                            var5 = _closure1_slot3;
                            var1 = 17;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.getGuildVisualOwnerId;
                            var0 = var1.bind(var2)(var3);
                        case 68:
                            return var0;
                    }
                };
                var33 = var16.bind(var40)(var7, var15);
                _closure2_slot15 = var33;
                var7 = var40.useRef;
                var16 = 0;
                var15 = var7.bind(var40)(var16);
                _closure2_slot16 = var15;
                var7 = var40.useRef;
                var16 = var7.bind(var40)(var16);
                _closure2_slot17 = var16;
                var7 = {};
                var7.guildId = var38;
                var7.channelId = var30;
                var7.hasQuery = var9;
                var7.listRef = var26;
                var7.scrollOffsetRef = var16;
                var7.heightRef = var15;
                var7.scaledRowHeight = var2;
                var2 = function arg0() {
                    var1 = arg0;
                    var9 = var1.guildId;
                    var _closure3_slot0 = var9;
                    var10 = var1.channelId;
                    var _closure3_slot1 = var10;
                    var8 = var1.hasQuery;
                    var _closure3_slot2 = var8;
                    var5 = var1.listRef;
                    var _closure3_slot3 = var5;
                    var4 = var1.scrollOffsetRef;
                    var _closure3_slot4 = var4;
                    var6 = var1.heightRef;
                    var _closure3_slot5 = var6;
                    var7 = var1.scaledRowHeight;
                    var _closure3_slot6 = var7;
                    var3 = _closure1_slot5;
                    var2 = var3.useMemo;
                    var1 = new Array(7);
                    var1[0] = var10;
                    var1[1] = var9;
                    var1[2] = var8;
                    var1[3] = var7;
                    var1[4] = var6;
                    var1[5] = var5;
                    var1[6] = var4;
                    var0 = function() { // Environment: var0
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var0 = 12;
                        var0 = var2[var0];
                        var3 = undefined;
                        var2 = var1.bind(var3)(var0);
                        var1 = function() { // Environment: var0
                            _fun105874: for (var _fun105874_ip = 0;;) switch (_fun105874_ip) {
                                case 0:
                                    var0 = _closure3_slot3;
                                    var0 = var0.current;
                                    var4 = null;
                                    var0 = var4 == var0;
                                    if (var0) {
                                        _fun105874_ip = 25;
                                        continue _fun105874
                                    }
                                case 21:
                                    var0 = _closure3_slot2;
                                case 25:
                                    if (var0) {
                                        _fun105874_ip = 71;
                                        continue _fun105874
                                    }
                                case 28:
                                    var5 = _closure3_slot1;
                                    var1 = _closure1_slot7;
                                    var1 = var5 !== var1;
                                    if (!var1) {
                                        _fun105874_ip = 68;
                                        continue _fun105874
                                    }
                                case 46:
                                    var6 = _closure1_slot10;
                                    var5 = var6.getChannel;
                                    var2 = _closure3_slot1;
                                    var2 = var5.bind(var6)(var2);
                                    var1 = var4 == var2;
                                case 68:
                                    var0 = var1;
                                case 71:
                                    if (var0) {
                                        _fun105874_ip = 163;
                                        continue _fun105874
                                    }
                                case 74:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 13;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.subscribeChannelDimensions;
                                    var0 = {};
                                    var4 = _closure3_slot0;
                                    var0.guildId = var4;
                                    var4 = _closure3_slot1;
                                    var0.channelId = var4;
                                    var4 = _closure3_slot4;
                                    var4 = var4.current;
                                    var0.y = var4;
                                    var4 = _closure3_slot5;
                                    var4 = var4.current;
                                    var0.height = var4;
                                    var3 = _closure3_slot6;
                                    var0.rowHeight = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 163:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = 50;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var2 = var2.bind(var3)(var7);
                _closure2_slot18 = var2;
                var16 = var40.useCallback;
                var15 = new Array(1);
                var15[0] = var2;
                var7 = function(arg0) { // Environment: var21
                    var2 = _closure2_slot16;
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var1 = var1.height;
                    var2.current = var1;
                    var1 = _closure2_slot18;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var16 = var16.bind(var40)(var7, var15);
                var22 = var40.useCallback;
                var15 = new Array(1);
                var15[0] = var2;
                var7 = function(arg0) { // Environment: var21
                    var2 = _closure2_slot17;
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var1.contentOffset;
                    var1 = var1.y;
                    var2.current = var1;
                    var1 = _closure2_slot18;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var15 = var22.bind(var40)(var7, var15);
                var7 = 18;
                var7 = var18[var7];
                var17 = var17.bind(var3)(var7);
                var7 = {};
                var7.channel = var39;
                var18 = var9;
                if (var18) {
                    _fun105857_ip = 694;
                    continue _fun105857
                }
            case 691:
                var18 = !var19;
            case 694:
                var7.disable = var18;
                var7 = var17.bind(var3)(var7);
                var18 = var7.listActionRenderer;
                var17 = var7.listActionHeight;
                var7 = _closure1_slot5;
                var22 = var7.useEffect;
                var19 = new Array(2);
                var19[0] = var39;
                var19[1] = var2;
                var2 = function() { // Environment: var21
                    _fun105877: for (var _fun105877_ip = 0;;) switch (_fun105877_ip) {
                        case 0:
                            var2 = _closure2_slot13;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun105877_ip = 23;
                                continue _fun105877
                            }
                        case 13:
                            var1 = _closure2_slot18;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var22.bind(var7)(var2, var19);
                var19 = var7.useMemo;
                var2 = new Array(5);
                var2[0] = var38;
                var2[1] = var1;
                var2[2] = var37;
                var2[3] = var9;
                var2[4] = var23;
                var1 = function() { // Environment: var21
                    _fun105878: for (var _fun105878_ip = 0;;) switch (_fun105878_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var4 = null;
                            if (!(var4 != var0)) {
                                _fun105878_ip = 126;
                                continue _fun105878
                            }
                        case 15:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 19;
                            var3 = var3[var0];
                            var0 = undefined;
                            var7 = var5.bind(var0)(var3);
                            var6 = var7.isEveryoneRoleId;
                            var5 = _closure2_slot1;
                            var3 = _closure2_slot2;
                            var3 = var6.bind(var7)(var5, var3);
                            if (var3) {
                                _fun105878_ip = 126;
                                continue _fun105878
                            }
                        case 63:
                            var3 = _closure2_slot9;
                            if (var3) {
                                _fun105878_ip = 93;
                                continue _fun105878
                            }
                        case 70:
                            var6 = _closure2_slot12;
                            var5 = var6.filter;
                            var3 = function(arg0) { // Environment: var1
                                _fun105881: for (var _fun105881_ip = 0;;) switch (_fun105881_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.type;
                                        var0 = 'MEMBER';
                                        var0 = var0 === var2;
                                        if (!var0) {
                                            _fun105881_ip = 50;
                                            continue _fun105881
                                        }
                                    case 19:
                                        var3 = var1.roles;
                                        var2 = var3.find;
                                        var1 = function(arg0) { // Environment: var1
                                            var1 = _closure2_slot2;
                                            var0 = arg0;
                                            var0 = var0 === var1;
                                            return var0;
                                        };
                                        var2 = var2.bind(var3)(var1);
                                        var1 = null;
                                        var0 = var1 != var2;
                                    case 50:
                                        return var0;
                                }
                            };
                            var3 = var5.bind(var6)(var3);
                            return var3;
                        case 93:
                            var3 = _closure2_slot10;
                            if (!(var4 != var3)) {
                                _fun105878_ip = 124;
                                continue _fun105878
                            }
                        case 101:
                            var3 = _closure2_slot10;
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                _fun105879: for (var _fun105879_ip = 0;;) switch (_fun105879_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.record;
                                        var3 = _closure1_slot11;
                                        var2 = var3.getMember;
                                        var1 = _closure2_slot1;
                                        var0 = var0.id;
                                        var2 = var2.bind(var3)(var1, var0);
                                        var1 = null;
                                        var4 = var1 == var2;
                                        var0 = undefined;
                                        if (var4) {
                                            _fun105879_ip = 85;
                                            continue _fun105879
                                        }
                                    case 51:
                                        var4 = var2.roles;
                                        var2 = var1 == var4;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun105879_ip = 85;
                                            continue _fun105879
                                        }
                                    case 66:
                                        var3 = var4.find;
                                        var2 = function(arg0) { // Environment: var2
                                            var1 = _closure2_slot2;
                                            var0 = arg0;
                                            var0 = var0 === var1;
                                            return var0;
                                        };
                                        var0 = var3.bind(var4)(var2);
                                    case 85:
                                        var0 = var1 != var0;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 124:
                            return var0;
                        case 126:
                            var0 = undefined;
                            return var0;
                    }
                };
                var22 = var19.bind(var7)(var1, var2);
                _closure2_slot19 = var22;
                var19 = var7.useCallback;
                var2 = new Array(2);
                var2[0] = var36;
                var2[1] = var23;
                var1 = function(arg0) { // Environment: var21
                    _fun105883: for (var _fun105883_ip = 0;;) switch (_fun105883_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(!(var2 > var1))) {
                                _fun105883_ip = 152;
                                continue _fun105883
                            }
                        case 21:
                            var2 = _closure2_slot11;
                            var0 = arg0;
                            var0 = var2[var0];
                            var2 = var0.id;
                            var7 = var0.title;
                            var6 = var0.count;
                            var0 = null;
                            var4 = var0 != var7;
                            var0 = undefined;
                            if (!var4) {
                                _fun105883_ip = 150;
                                continue _fun105883
                            }
                        case 59:
                            var0 = undefined;
                            if (!(var1 !== var6)) {
                                _fun105883_ip = 150;
                                continue _fun105883
                            }
                        case 65:
                            var1 = _closure1_slot15;
                            var1 = var1.UNKNOWN;
                            if (!(var2 !== var1)) {
                                _fun105883_ip = 134;
                                continue _fun105883
                            }
                        case 82:
                            var1 = {};
                            var2 = 'section';
                            var1.type = var2;
                            var2 = {};
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var4 = '';
                            var3 = ' — ';
                            var3 = var5.bind(var4)(var7, var3, var6);
                            var2.title = var3;
                            var1.props = var2;
                            _fun105883_ip = 147;
                            continue _fun105883;
                        case 134:
                            var2 = {};
                            var3 = 'placeholder';
                            var2.type = var3;
                            var1 = var2;
                        case 147:
                            var0 = var1;
                        case 150:
                            return var0;
                        case 152:
                            var0 = {};
                            var1 = 'section';
                            var0.type = var1;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var2 = 20;
                            var3 = var7[var2];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2["zkoeq/"];
                            var2 = var3.bind(var4)(var2);
                            var1.title = var2;
                            var0.props = var1;
                            return var0;
                    }
                };
                var19 = var19.bind(var7)(var1, var2);
                var2 = var7.useCallback;
                var1 = new Array(15);
                var1[0] = var22;
                var1[1] = var9;
                var1[2] = var23;
                var1[3] = var38;
                var1[4] = var37;
                var1[5] = var36;
                var1[6] = var33;
                var1[7] = var32;
                var1[8] = var31;
                var1[9] = var30;
                var1[10] = var28;
                var1[11] = var27;
                var1[12] = var20;
                var1[13] = var8;
                var1[14] = var0;
                var0 = function(arg0, arg1) { // Environment: var21
                    _fun105884: for (var _fun105884_ip = 0;;) switch (_fun105884_ip) {
                        case 0:
                            var8 = arg0;
                            var7 = arg1;
                            var _closure3_slot0 = var8;
                            var _closure3_slot1 = var7;
                            var0 = function() {
                                _fun105885: for (var _fun105885_ip = 0;;) switch (_fun105885_ip) {
                                    case 0:
                                        var1 = _closure2_slot19;
                                        var0 = null;
                                        if (!(var0 == var1)) {
                                            _fun105885_ip = 82;
                                            continue _fun105885
                                        }
                                    case 13:
                                        var0 = _closure2_slot9;
                                        if (var0) {
                                            _fun105885_ip = 82;
                                            continue _fun105885
                                        }
                                    case 20:
                                        var2 = _closure3_slot0;
                                        var1 = 0;
                                        var2 = var1 < var2;
                                        var4 = 0;
                                        var3 = 0;
                                        if (!var2) {
                                            _fun105885_ip = 72;
                                            continue _fun105885
                                        }
                                    case 40:
                                        var2 = _closure2_slot11;
                                        var2 = var2[var3];
                                        var2 = var2.count;
                                        var4 = var4 + var2;
                                        var3 = var3 + 1;
                                        var2 = _closure3_slot0;
                                        var1 = var4;
                                        if (var3 < var2) {
                                            _fun105885_ip = 40;
                                            continue _fun105885
                                        }
                                    case 72:
                                        var0 = _closure3_slot1;
                                        var0 = var1 + var0;
                                        return var0;
                                    case 82:
                                        var0 = _closure3_slot1;
                                        return var0;
                                }
                            };
                            var _closure3_slot2 = var0;
                            var0 = _closure2_slot19;
                            var9 = null;
                            if (!(var9 != var0)) {
                                _fun105884_ip = 153;
                                continue _fun105884
                            }
                        case 40:
                            var0 = _closure2_slot19;
                            var0 = var0.length;
                            var0 = var7 < var0;
                            var3 = undefined;
                            if (!var0) {
                                _fun105884_ip = 66;
                                continue _fun105884
                            }
                        case 58:
                            var0 = _closure2_slot19;
                            var3 = var0[var7];
                        case 66:
                            var1 = var9 != var3;
                            var0 = undefined;
                            if (!var1) {
                                _fun105884_ip = 408;
                                continue _fun105884
                            }
                        case 78:
                            var2 = var3.type;
                            var1 = _closure1_slot8;
                            var1 = var1.MEMBER;
                            var0 = undefined;
                            if (!(var2 === var1)) {
                                _fun105884_ip = 408;
                                continue _fun105884
                            }
                        case 105:
                            var1 = _closure2_slot19;
                            var2 = var1.length;
                            var1 = 1;
                            var2 = var2 - var1;
                            var1 = {};
                            var5 = var3.user;
                            var1.user = var5;
                            var1.memberListMember = var3;
                            var2 = var7 === var2;
                            var1.end = var2;
                            var0 = var1;
                            _fun105884_ip = 408;
                            continue _fun105884;
                        case 153:
                            var1 = _closure2_slot9;
                            if (var1) {
                                _fun105884_ip = 281;
                                continue _fun105884
                            }
                        case 160:
                            var3 = _closure2_slot12;
                            var1 = _closure2_slot11;
                            var1 = var1[var8];
                            var1 = var1.index;
                            var2 = 1;
                            var1 = var1 + var2;
                            var1 = var1 + var7;
                            var3 = var3[var1];
                            var1 = var9 != var3;
                            var0 = undefined;
                            if (!var1) {
                                _fun105884_ip = 408;
                                continue _fun105884
                            }
                        case 204:
                            var5 = var3.type;
                            var1 = _closure1_slot8;
                            var1 = var1.MEMBER;
                            var0 = undefined;
                            if (!(var5 === var1)) {
                                _fun105884_ip = 408;
                                continue _fun105884
                            }
                        case 231:
                            var1 = _closure2_slot11;
                            var1 = var1[var8];
                            var1 = var1.count;
                            var2 = var1 - var2;
                            var1 = {};
                            var5 = var3.user;
                            var1.user = var5;
                            var1.memberListMember = var3;
                            var2 = var7 === var2;
                            var1.end = var2;
                            var0 = var1;
                            _fun105884_ip = 408;
                            continue _fun105884;
                        case 281:
                            var1 = _closure2_slot10;
                            var2 = var1.length;
                            var1 = 1;
                            var2 = var2 - var1;
                            var1 = _closure2_slot10;
                            var1 = var1.length;
                            var3 = var7 < var1;
                            var1 = undefined;
                            if (!var3) {
                                _fun105884_ip = 323;
                                continue _fun105884
                            }
                        case 315:
                            var3 = _closure2_slot10;
                            var1 = var3[var7];
                        case 323:
                            var3 = var9 == var1;
                            var0 = undefined;
                            if (var3) {
                                _fun105884_ip = 408;
                                continue _fun105884
                            }
                        case 332:
                            var10 = var1.record;
                            var3 = var1.comparator;
                            var13 = _closure1_slot11;
                            var12 = var13.getMember;
                            var5 = _closure2_slot1;
                            var1 = var10.id;
                            var5 = var12.bind(var13)(var5, var1);
                            var1 = var9 == var5;
                            var0 = undefined;
                            if (var1) {
                                _fun105884_ip = 408;
                                continue _fun105884
                            }
                        case 381:
                            var1 = {};
                            var1.user = var10;
                            var1.guildMember = var5;
                            var1.comparator = var3;
                            var2 = var7 === var2;
                            var1.end = var2;
                            var0 = var1;
                        case 408:
                            var1 = 0;
                            var3 = var1 === var7;
                            if (!(var9 == var0)) {
                                _fun105884_ip = 469;
                                continue _fun105884
                            }
                        case 418:
                            var1 = {};
                            var2 = 'placeholder';
                            var1.type = var2;
                            var2 = {};
                            var2.start = var3;
                            var5 = _closure2_slot11;
                            var5 = var5[var8];
                            var8 = var5.count;
                            var5 = 1;
                            var5 = var8 - var5;
                            var5 = var7 === var5;
                            var2.end = var5;
                            var1.props = var2;
                            return var1;
                        case 469:
                            var7 = var0.user;
                            var _closure3_slot3 = var7;
                            var8 = var0.memberListMember;
                            var _closure3_slot4 = var8;
                            var12 = var0.guildMember;
                            var11 = var0.comparator;
                            var2 = var0.end;
                            var0 = {};
                            var1 = 'user';
                            var0.type = var1;
                            var1 = {};
                            var5 = _closure1_slot14;
                            var5 = var5.NONE;
                            var1.type = var5;
                            var1.user = var7;
                            var13 = var9 == var8;
                            var5 = undefined;
                            var10 = undefined;
                            if (var13) {
                                _fun105884_ip = 555;
                                continue _fun105884
                            }
                        case 549:
                            var10 = var8.nick;
                        case 555:
                            if (!(var9 == var10)) {
                                _fun105884_ip = 601;
                                continue _fun105884
                            }
                        case 559:
                            if (!(var9 != var11)) {
                                _fun105884_ip = 580;
                                continue _fun105884
                            }
                        case 563:
                            var13 = '';
                            if (!(var13 !== var11)) {
                                _fun105884_ip = 580;
                                continue _fun105884
                            }
                        case 571:
                            var13 = var7.id;
                            if (!(var11 === var13)) {
                                _fun105884_ip = 598;
                                continue _fun105884
                            }
                        case 580:
                            var14 = var9 == var12;
                            var13 = undefined;
                            if (var14) {
                                _fun105884_ip = 595;
                                continue _fun105884
                            }
                        case 589:
                            var13 = var12.nick;
                        case 595:
                            var11 = var13;
                        case 598:
                            var10 = var11;
                        case 601:
                            var1.nickname = var10;
                            var11 = var9 == var8;
                            var10 = undefined;
                            if (var11) {
                                _fun105884_ip = 621;
                                continue _fun105884
                            }
                        case 615:
                            var10 = var8.colorString;
                        case 621:
                            if (!(var9 == var10)) {
                                _fun105884_ip = 643;
                                continue _fun105884
                            }
                        case 625:
                            var13 = var9 == var12;
                            var11 = undefined;
                            if (var13) {
                                _fun105884_ip = 640;
                                continue _fun105884
                            }
                        case 634:
                            var11 = var12.colorString;
                        case 640:
                            var10 = var11;
                        case 643:
                            var1.usernameColor = var10;
                            var11 = var9 == var8;
                            var10 = undefined;
                            if (var11) {
                                _fun105884_ip = 663;
                                continue _fun105884
                            }
                        case 657:
                            var10 = var8.colorStrings;
                        case 663:
                            if (!(var9 == var10)) {
                                _fun105884_ip = 685;
                                continue _fun105884
                            }
                        case 667:
                            var13 = var9 == var12;
                            var11 = undefined;
                            if (var13) {
                                _fun105884_ip = 682;
                                continue _fun105884
                            }
                        case 676:
                            var11 = var12.colorStrings;
                        case 682:
                            var10 = var11;
                        case 685:
                            var1.roleColors = var10;
                            var10 = _closure2_slot6;
                            var1.isNameplatedRow = var10;
                            var10 = var9 == var8;
                            var11 = undefined;
                            if (var10) {
                                _fun105884_ip = 714;
                                continue _fun105884
                            }
                        case 708:
                            var11 = var8.premiumSince;
                        case 714:
                            if (!(var9 == var11)) {
                                _fun105884_ip = 736;
                                continue _fun105884
                            }
                        case 718:
                            var13 = var9 == var12;
                            var10 = undefined;
                            if (var13) {
                                _fun105884_ip = 733;
                                continue _fun105884
                            }
                        case 727:
                            var10 = var12.premiumSince;
                        case 733:
                            var11 = var10;
                        case 736:
                            var12 = var9 != var11;
                            var10 = undefined;
                            if (!var12) {
                                _fun105884_ip = 748;
                                continue _fun105884
                            }
                        case 745:
                            var10 = var11;
                        case 748:
                            var1.premiumSince = var10;
                            if (!(var9 == var8)) {
                                _fun105884_ip = 772;
                                continue _fun105884
                            }
                        case 757:
                            var9 = _closure2_slot15;
                            var7 = var7.id;
                            var7 = var9 === var7;
                            _fun105884_ip = 778;
                            continue _fun105884;
                        case 772:
                            var7 = var8.isOwner;
                        case 778:
                            var1.isOwner = var7;
                            var7 = _closure2_slot1;
                            var1.guildId = var7;
                            var6 = _closure2_slot7;
                            var1.canShowDisplayNameStylesFont = var6;
                            var6 = function arg0() {
                                _fun105886: for (var _fun105886_ip = 0;;) switch (_fun105886_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = _closure2_slot3;
                                        var6 = null;
                                        if (!(var6 != var0)) {
                                            _fun105886_ip = 48;
                                            continue _fun105886
                                        }
                                    case 16:
                                        var2 = _closure2_slot3;
                                        var1 = {};
                                        var1.user = var5;
                                        var4 = _closure3_slot2;
                                        var0 = undefined;
                                        var4 = var4.bind(var0)();
                                        var1.index = var4;
                                        var0 = var2.bind(var0)(var1);
                                    case 48:
                                        var0 = _closure2_slot5;
                                        if (!var0) {
                                            _fun105886_ip = 162;
                                            continue _fun105886
                                        }
                                    case 55:
                                        var1 = _closure1_slot1;
                                        var2 = _closure1_slot3;
                                        var0 = 21;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = {};
                                        var5 = var5.id;
                                        var0.userId = var5;
                                        var5 = _closure2_slot0;
                                        var4 = _closure1_slot7;
                                        if (!(var5 === var4)) {
                                            _fun105886_ip = 109;
                                            continue _fun105886
                                        }
                                    case 103:
                                        var4 = _closure2_slot14;
                                        _fun105886_ip = 113;
                                        continue _fun105886;
                                    case 109:
                                        var4 = _closure2_slot0;
                                    case 113:
                                        var0.channelId = var4;
                                        var4 = _closure3_slot4;
                                        var6 = var6 == var4;
                                        var4 = undefined;
                                        if (var6) {
                                            _fun105886_ip = 143;
                                            continue _fun105886
                                        }
                                    case 133:
                                        var5 = _closure3_slot4;
                                        var4 = var5.colorRoleId;
                                    case 143:
                                        var0.roleId = var4;
                                        var3 = _closure2_slot8;
                                        var0.sourceAnalyticsLocations = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 162:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.onPress = var6;
                            var4 = function() { // Environment: var4
                                _fun105887: for (var _fun105887_ip = 0;;) switch (_fun105887_ip) {
                                    case 0:
                                        var1 = _closure2_slot4;
                                        var0 = null;
                                        if (!(var0 == var1)) {
                                            _fun105887_ip = 17;
                                            continue _fun105887
                                        }
                                    case 13:
                                        var0 = undefined;
                                        return var0;
                                    case 17:
                                        var0 = function() { // Environment: var0
                                            var2 = _closure2_slot4;
                                            var1 = {};
                                            var3 = _closure3_slot3;
                                            var1.user = var3;
                                            var3 = _closure3_slot2;
                                            var0 = undefined;
                                            var3 = var3.bind(var0)();
                                            var1.index = var3;
                                            var0 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        return var0;
                                }
                            };
                            var4 = var4.bind(var5)();
                            var1.onLongPress = var4;
                            var1.start = var3;
                            var1.end = var2;
                            var0.props = var1;
                            return var0;
                    }
                };
                var20 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot18;
                var1 = _closure1_slot17;
                var0 = {};
                var7 = null;
                if (!var4) {
                    _fun105857_ip = 1066;
                    continue _fun105857
                }
            case 926:
                var27 = _closure1_slot18;
                var8 = _closure1_slot17;
                var4 = {};
                var31 = _closure1_slot16;
                var30 = _closure1_slot6;
                var28 = {};
                var32 = {};
                var37 = _closure1_slot1;
                var36 = _closure1_slot3;
                var33 = 22;
                var33 = var36[var33];
                var33 = var37.bind(var3)(var33);
                var33 = var33.spacing;
                var33 = var33.PX_16;
                var32.marginHorizontal = var33;
                var28.style = var32;
                var33 = _closure1_slot0;
                var32 = 23;
                var32 = var36[var32];
                var32 = var33.bind(var3)(var32);
                var33 = var32.SearchField;
                var32 = {};
                var36 = 'md';
                var32.size = var36;
                var32.onChange = var35;
                var32.ref = var34;
                var32 = var31.bind(var3)(var33, var32);
                var28.children = var32;
                var30 = var31.bind(var3)(var30, var28);
                var28 = new Array(2);
                var28[0] = var30;
                var28[1] = var29;
                var4.children = var28;
                var7 = var27.bind(var3)(var8, var4);
            case 1066:
                var4 = new Array(2);
                var4[0] = var7;
                var8 = _closure1_slot16;
                var7 = _closure1_slot0;
                var27 = _closure1_slot3;
                var6 = 24;
                var6 = var27[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.UsersFastList;
                var6 = {};
                var6.ref = var26;
                if (!(var25 == var22)) {
                    _fun105857_ip = 1160;
                    continue _fun105857
                }
            case 1114:
                if (var9) {
                    _fun105857_ip = 1142;
                    continue _fun105857
                }
            case 1117:
                var25 = var24.groups;
                var24 = var25.map;
                var21 = function(arg0) { // Environment: var21
                    var0 = arg0;
                    var0 = var0.count;
                    return var0;
                };
                var21 = var24.bind(var25)(var21);
                _fun105857_ip = 1158;
                continue _fun105857;
            case 1142:
                var24 = var23.length;
                var23 = new Array(1);
                var23[0] = var24;
                var21 = var23;
            case 1158:
                _fun105857_ip = 1176;
                continue _fun105857;
            case 1160:
                var23 = var22.length;
                var22 = new Array(1);
                var22[0] = var23;
                var21 = var22;
            case 1176:
                var6.sections = var21;
                var6.getItemProps = var20;
                var6.getSectionProps = var19;
                var6.renderListHeader = var18;
                var6.listHeaderSize = var17;
                var6.onLayout = var16;
                var6.onScroll = var15;
                var6.disableStickySections = var14;
                var6.inActionSheet = var13;
                var6.disableThemedGradient = var12;
                var6.listStyleOverride = var11;
                var6.disableBottomSafeZone = var10;
                var6.insetEnd = var5;
                var5 = 'guild-channel-user-list';
                if (!var9) {
                    _fun105857_ip = 1256;
                    continue _fun105857
                }
            case 1250:
                var5 = 'guild-channel-user-list-search-results';
            case 1256:
                var5 = var8.bind(var3)(var7, var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5660, 1372, 1681, 1410, 1670, 660, 33, 6649, 5608, 13809, 7771, 5734, 566, 7586, 3098, 13810, 8161, 1234, 7377, 671, 7037, 9123, 2]);