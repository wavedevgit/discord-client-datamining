// modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserRowModes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingBottom = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var3.searchBarContainer = var8;
    var8 = {};
    var8.height = var0;
    var12 = 40;
    var8.minHeight = var12;
    var3.searchBar = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingTop = var12;
    var3.searchBarRowContainer = var8;
    var8 = {};
    var8.flex = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.noResults = var8;
    var8 = {};
    var9 = 8;
    var8.marginTop = var9;
    var3.searchWithPadding = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87235: for (var _fun87235_ip = 0;;) switch (_fun87235_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.selectedUserIds;
                var _closure2_slot0 = var8;
                var26 = var0.disabledUserIds;
                var _closure2_slot1 = var26;
                var25 = var0.onSelectUser;
                var _closure2_slot2 = var25;
                var24 = var0.handleMessage;
                var _closure2_slot3 = var24;
                var29 = var0.actions;
                var3 = undefined;
                if (!(var29 === var3)) {
                    _fun87235_ip = 61;
                    continue _fun87235
                }
            case 57:
                var29 = new Array(0);
            case 61:
                var22 = var0.rowMode;
                if (!(var22 === var3)) {
                    _fun87235_ip = 84;
                    continue _fun87235
                }
            case 71:
                var1 = _closure1_slot7;
                var22 = var1.ACTIONS;
            case 84:
                var _closure2_slot4 = var22;
                var12 = var0.autoFocusSearch;
                if (!(var12 === var3)) {
                    _fun87235_ip = 100;
                    continue _fun87235
                }
            case 98:
                var12 = false;
            case 100:
                var30 = var0.withGuildMembers;
                if (!(var30 === var3)) {
                    _fun87235_ip = 112;
                    continue _fun87235
                }
            case 110:
                var30 = false;
            case 112:
                var28 = var0.withAffinitySuggestions;
                if (!(var28 === var3)) {
                    _fun87235_ip = 124;
                    continue _fun87235
                }
            case 122:
                var28 = true;
            case 124:
                var9 = var0.withFriends;
                if (!(var9 === var3)) {
                    _fun87235_ip = 136;
                    continue _fun87235
                }
            case 134:
                var9 = true;
            case 136:
                var27 = var0.withGameFriends;
                if (!(var27 === var3)) {
                    _fun87235_ip = 148;
                    continue _fun87235
                }
            case 146:
                var27 = false;
            case 148:
                var20 = var0.withFriendRequests;
                if (!(var20 === var3)) {
                    _fun87235_ip = 160;
                    continue _fun87235
                }
            case 158:
                var20 = false;
            case 160:
                var19 = var0.withFriendRequestsIncoming;
                if (!(var19 === var3)) {
                    _fun87235_ip = 172;
                    continue _fun87235
                }
            case 170:
                var19 = false;
            case 172:
                var16 = var0.withFriendRequestsOutgoing;
                if (!(var16 === var3)) {
                    _fun87235_ip = 184;
                    continue _fun87235
                }
            case 182:
                var16 = false;
            case 184:
                var15 = var0.withFriendRequestsSpam;
                if (!(var15 === var3)) {
                    _fun87235_ip = 196;
                    continue _fun87235
                }
            case 194:
                var15 = false;
            case 196:
                var21 = var0.withFriendSuggestions;
                if (!(var21 === var3)) {
                    _fun87235_ip = 208;
                    continue _fun87235
                }
            case 206:
                var21 = false;
            case 208:
                var7 = var0.hideSearchOnDefaultNoResults;
                if (!(var7 === var3)) {
                    _fun87235_ip = 220;
                    continue _fun87235
                }
            case 218:
                var7 = false;
            case 220:
                var23 = var0.defaultNoResultsFound;
                var4 = var0.disableGradient;
                var6 = var0.disableStickySections;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var0 = _closure1_slot11;
                var14 = var0.bind(var3)();
                var18 = _closure1_slot4;
                var1 = var18.useState;
                var0 = '';
                var2 = var1.bind(var18)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var11 = var1.bind(var3)(var2, var0);
                var2 = 0;
                var0 = var11[var2];
                var1 = 1;
                var17 = var11[var1];
                var13 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 8;
                var1 = var11[var1];
                var13 = var13.bind(var3)(var1);
                var1 = {};
                var1.query = var0;
                var1.withGuildMembers = var30;
                var1.withAffinitySuggestions = var28;
                var1.withFriends = var9;
                var1.withGameFriends = var27;
                var1.withFriendSuggestions = var21;
                var1.withFriendRequests = var20;
                var1.withFriendRequestsIncoming = var19;
                var1.withFriendRequestsOutgoing = var16;
                var1.withFriendRequestsSpam = var15;
                var27 = var13.bind(var3)(var1);
                _closure2_slot5 = var27;
                var15 = var18.useMemo;
                var13 = new Array(1);
                var13[0] = var8;
                var1 = function() { // Environment: var5
                    _fun87236: for (var _fun87236_ip = 0;;) switch (_fun87236_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun87236_ip = 19;
                                continue _fun87236
                            }
                        case 13:
                            var3 = new Array(0);
                            _fun87236_ip = 23;
                            continue _fun87236;
                        case 19:
                            var3 = _closure2_slot0;
                        case 23:
                            var2 = var3.map;
                            var1 = _closure1_slot6;
                            var1 = var1.getUser;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.filter;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 9;
                            var1 = var5[var1];
                            var4 = undefined;
                            var1 = var6.bind(var4)(var1);
                            var1 = var1.isNotNullish;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.map;
                            var3 = _closure1_slot1;
                            var0 = 10;
                            var0 = var5[var0];
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var15 = var15.bind(var18)(var1, var13);
                _closure2_slot6 = var15;
                var16 = var18.useCallback;
                var13 = new Array(2);
                var13[0] = var25;
                var13[1] = var15;
                var1 = function(arg0) { // Environment: var5
                    _fun87237: for (var _fun87237_ip = 0;;) switch (_fun87237_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = arg0;
                            var6 = var2[var0];
                            var4 = _closure1_slot6;
                            var3 = var4.getUser;
                            var2 = var6.id;
                            var2 = var3.bind(var4)(var2);
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun87237_ip = 150;
                                continue _fun87237
                            }
                        case 43:
                            var1 = _closure2_slot2;
                            var7 = undefined;
                            var1 = var1.bind(var7)(var2);
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 11;
                            var0 = var8[var0];
                            var0 = var3.bind(var7)(var0);
                            var2 = var0.AccessibilityAnnouncer;
                            var1 = var2.announce;
                            var0 = 12;
                            var4 = var8[var0];
                            var4 = var3.bind(var7)(var4);
                            var5 = var4.intl;
                            var4 = var5.formatToPlainString;
                            var0 = var8[var0];
                            var0 = var3.bind(var7)(var0);
                            var0 = var0.t;
                            var3 = var0.srlxB8;
                            var0 = {};
                            var6 = var6.text;
                            var0.text = var6;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                        case 150:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var16.bind(var18)(var1, var13);
                var19 = var18.useMemo;
                var13 = new Array(1);
                var13[0] = var27;
                var1 = function() { // Environment: var5
                    var2 = _closure2_slot5;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.items;
                        var0 = var0.length;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var21 = var19.bind(var18)(var1, var13);
                var19 = var18.useCallback;
                var13 = new Array(1);
                var13[0] = var27;
                var1 = function(arg0) { // Environment: var5
                    var0 = {};
                    var1 = 'section';
                    var0.type = var1;
                    var1 = {};
                    var3 = _closure2_slot5;
                    var2 = arg0;
                    var2 = var3[var2];
                    var2 = var2.title;
                    var1.title = var2;
                    var0.props = var1;
                    return var0;
                };
                var19 = var19.bind(var18)(var1, var13);
                var1 = var0.trim;
                var1 = var1.bind(var0)();
                var1 = var1.length;
                var1 = var1 > var2;
                var20 = var18.useCallback;
                var13 = new Array(6);
                var13[0] = var27;
                var13[1] = var26;
                var13[2] = var25;
                var13[3] = var24;
                var13[4] = var22;
                var13[5] = var8;
                var8 = function(arg0, arg1) { // Environment: var5
                    _fun87241: for (var _fun87241_ip = 0;;) switch (_fun87241_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = arg1;
                            var0 = _closure2_slot5;
                            var0 = var0[var1];
                            var0 = var0.items;
                            var0 = var0[var3];
                            var5 = var0.type;
                            var7 = var0.user;
                            var8 = var0.firstMatch;
                            var0 = _closure2_slot5;
                            var0 = var0[var1];
                            var0 = var0.items;
                            var1 = var0.length;
                            var0 = 1;
                            var2 = var1 - var0;
                            var0 = {};
                            var1 = 'user';
                            var0.type = var1;
                            var1 = {};
                            var1.type = var5;
                            var1.user = var7;
                            var9 = var7.username;
                            var5 = undefined;
                            if (!(var9 !== var8)) {
                                _fun87241_ip = 101;
                                continue _fun87241
                            }
                        case 98:
                            var5 = var8;
                        case 101:
                            var1.nickname = var5;
                            var5 = _closure2_slot2;
                            var1.onPress = var5;
                            var5 = _closure2_slot3;
                            var1.handleMessage = var5;
                            var8 = _closure2_slot1;
                            var5 = null;
                            var8 = var5 == var8;
                            var9 = undefined;
                            if (var8) {
                                _fun87241_ip = 157;
                                continue _fun87241
                            }
                        case 138:
                            var11 = _closure2_slot1;
                            var10 = var11.includes;
                            var8 = var7.id;
                            var9 = var10.bind(var11)(var8);
                        case 157:
                            var8 = var5 != var9;
                            if (!var8) {
                                _fun87241_ip = 167;
                                continue _fun87241
                            }
                        case 164:
                            var8 = var9;
                        case 167:
                            var1.disabled = var8;
                            var8 = _closure2_slot0;
                            var8 = var5 == var8;
                            var6 = undefined;
                            if (var8) {
                                _fun87241_ip = 203;
                                continue _fun87241
                            }
                        case 184:
                            var9 = _closure2_slot0;
                            var8 = var9.includes;
                            var7 = var7.id;
                            var6 = var8.bind(var9)(var7);
                        case 203:
                            var5 = var5 != var6;
                            if (!var5) {
                                _fun87241_ip = 213;
                                continue _fun87241
                            }
                        case 210:
                            var5 = var6;
                        case 213:
                            var1.selected = var5;
                            var4 = _closure2_slot4;
                            var1.mode = var4;
                            var4 = 0;
                            var4 = var4 === var3;
                            var1.start = var4;
                            var2 = var3 === var2;
                            var1.end = var2;
                            var0.props = var1;
                            return var0;
                    }
                };
                var20 = var20.bind(var18)(var8, var13);
                var13 = var18.useRef;
                var8 = null;
                var22 = var13.bind(var18)(var8);
                _closure2_slot7 = var22;
                var13 = _closure1_slot0;
                var30 = 13;
                var11 = var11[var30];
                var18 = var13.bind(var3)(var11);
                var13 = var18.useUserListActionsProps;
                var11 = {};
                var24 = undefined;
                if (var1) {
                    _fun87235_ip = 611;
                    continue _fun87235
                }
            case 608:
                var24 = var29;
            case 611:
                var11.actions = var24;
                var24 = undefined;
                if (var1) {
                    _fun87235_ip = 632;
                    continue _fun87235
                }
            case 621:
                var24 = undefined;
                if (!var9) {
                    _fun87235_ip = 632;
                    continue _fun87235
                }
            case 626:
                var24 = var14.searchBarRowContainer;
            case 632:
                var11.style = var24;
                var11 = var13.bind(var18)(var11);
                var18 = var11.renderHeader;
                var11 = var11.headerSize;
                var26 = _closure1_slot4;
                var25 = var26.useLayoutEffect;
                var24 = new Array(1);
                var24[0] = var0;
                var13 = function() { // Environment: var5
                    _fun87242: for (var _fun87242_ip = 0;;) switch (_fun87242_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun87242_ip = 31;
                                continue _fun87242
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
                var13 = var25.bind(var26)(var13, var24);
                var13 = var21.some;
                var5 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var13 = var13.bind(var21)(var5);
                var0 = var0.length;
                var0 = var2 === var0;
                if (!var0) {
                    _fun87235_ip = 718;
                    continue _fun87235
                }
            case 714:
                var0 = var8 != var23;
            case 718:
                if (!var7) {
                    _fun87235_ip = 724;
                    continue _fun87235
                }
            case 721:
                var7 = !var13;
            case 724:
                if (!var7) {
                    _fun87235_ip = 730;
                    continue _fun87235
                }
            case 727:
                var7 = !var1;
            case 730:
                var2 = _closure1_slot8;
                if (var13) {
                    _fun87235_ip = 952;
                    continue _fun87235
                }
            case 740:
                var1 = _closure1_slot5;
                var5 = {};
                var25 = var14.noResults;
                if (var0) {
                    _fun87235_ip = 905;
                    continue _fun87235
                }
            case 758:
                var5.style = var25;
                var26 = _closure1_slot8;
                var24 = _closure1_slot1;
                var27 = _closure1_slot2;
                var0 = 15;
                var0 = var27[var0];
                var24 = var24.bind(var3)(var0);
                var0 = {};
                var28 = _closure1_slot0;
                var31 = 12;
                var32 = var27[var31];
                var32 = var28.bind(var3)(var32);
                var33 = var32.intl;
                var32 = var33.string;
                var31 = var27[var31];
                var31 = var28.bind(var3)(var31);
                var31 = var31.t;
                var31 = var31.V6nAfF;
                var31 = var32.bind(var33)(var31);
                var0.title = var31;
                var27 = var27[var30];
                var27 = var28.bind(var3)(var27);
                var28 = var27.UserFlashListActions;
                var27 = {};
                var27.actions = var29;
                var29 = undefined;
                if (!var9) {
                    _fun87235_ip = 876;
                    continue _fun87235
                }
            case 870:
                var29 = var14.searchBarRowContainer;
            case 876:
                var27.style = var29;
                var27 = var26.bind(var3)(var28, var27);
                var0.children = var27;
                var0 = var26.bind(var3)(var24, var0);
                var5.children = var0;
                var0 = var5;
                _fun87235_ip = 944;
                continue _fun87235;
            case 905:
                var24 = new Array(2);
                var24[0] = var25;
                var25 = undefined;
                if (!var9) {
                    _fun87235_ip = 929;
                    continue _fun87235
                }
            case 918:
                var25 = undefined;
                if (var7) {
                    _fun87235_ip = 929;
                    continue _fun87235
                }
            case 923:
                var25 = var14.searchBarRowContainer;
            case 929:
                var24[1] = var25;
                var5.style = var24;
                var5.children = var23;
                var0 = var5;
            case 944:
                var5 = var2.bind(var3)(var1, var0);
                _fun87235_ip = 1028;
                continue _fun87235;
            case 952:
                var1 = _closure1_slot0;
                var23 = _closure1_slot2;
                var0 = 14;
                var0 = var23[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.UsersFastList;
                var0 = {};
                var0.ref = var22;
                var0.sections = var21;
                var0.getItemProps = var20;
                var0.getSectionProps = var19;
                var0.renderListHeader = var18;
                var0.listHeaderSize = var11;
                var11 = 12;
                var0.insetEnd = var11;
                var0.disableStickySections = var6;
                var5 = var2.bind(var3)(var1, var0);
            case 1028:
                var2 = _closure1_slot10;
                var1 = _closure1_slot9;
                var0 = {};
                var6 = !var4;
                if (!var6) {
                    _fun87235_ip = 1083;
                    continue _fun87235
                }
            case 1044:
                var18 = _closure1_slot8;
                var11 = _closure1_slot1;
                var19 = _closure1_slot2;
                var4 = 16;
                var4 = var19[var4];
                var11 = var11.bind(var3)(var4);
                var4 = {};
                var19 = true;
                var4.absolute = var19;
                var6 = var18.bind(var3)(var11, var4);
            case 1083:
                var4 = new Array(3);
                var4[0] = var6;
                var6 = null;
                if (!var9) {
                    _fun87235_ip = 1195;
                    continue _fun87235
                }
            case 1096:
                var6 = null;
                if (var7) {
                    _fun87235_ip = 1195;
                    continue _fun87235
                }
            case 1101:
                var9 = _closure1_slot8;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var14.searchBarContainer;
                var7.style = var11;
                var11 = _closure1_slot1;
                var18 = _closure1_slot2;
                var10 = 17;
                var10 = var18[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.onChangeText = var17;
                var10.onRemove = var16;
                var10.tags = var15;
                var14 = var14.searchBar;
                var10.style = var14;
                if (!var12) {
                    _fun87235_ip = 1174;
                    continue _fun87235
                }
            case 1171:
                var12 = var13;
            case 1174:
                var10.autoFocus = var12;
                var10 = var9.bind(var3)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 1195:
                var4[1] = var6;
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 8842, 33, 1297, 671, 11251, 1304, 11254, 3165, 1234, 11255, 9043, 9118, 8671, 8104, 2]);