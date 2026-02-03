// modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var4 = var6[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot7 = var4;
    var3 = var3.RelationshipTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot9 = var4;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 7;
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9.paddingHorizontal = var11;
    var3.container = var9;
    var9 = {
        'borderRadius': null,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var9.borderRadius = var11;
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9.padding = var11;
    var3.pressable = var9;
    var9 = {};
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_BACKGROUND_ACTIVE;
    var9.backgroundColor = var11;
    var3.rowActive = var9;
    var9 = {
        'marginRight': null,
        'flexDirection': 'column',
        'alignSelf': 'center',
        'overflow': 'hidden',
        'flexGrow': 1,
        'flexShrink': 1
    };
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9.marginRight = var11;
    var3.textContainer = var9;
    var9 = {};
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9.marginRight = var11;
    var3.avatar = var9;
    var9 = {};
    var11 = 0.8;
    var9.opacity = var11;
    var3.subtitle = var9;
    var9 = {};
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
    var9.backgroundColor = var11;
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var9.borderRadius = var11;
    var11 = 12;
    var9.paddingHorizontal = var11;
    var9.paddingVertical = var10;
    var3.button = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun101319: for (var _fun101319_ip = 0;;) switch (_fun101319_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.height;
                var _closure2_slot0 = var1;
                var12 = var2.onAddFriendSuggestions;
                var _closure2_slot1 = var12;
                var11 = var2.suggestedFriend;
                var _closure2_slot2 = var11;
                var2 = _closure1_slot11;
                var3 = undefined;
                var9 = var2.bind(var3)();
                var _closure2_slot3 = var9;
                var2 = _closure1_slot4;
                var5 = var2.useMemo;
                var4 = new Array(2);
                var4[0] = var9;
                var4[1] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot3;
                    var3 = var1.container;
                    var0 = new Array(3);
                    var0[0] = var3;
                    var1 = var1.pressable;
                    var0[1] = var1;
                    var1 = {};
                    var2 = _closure2_slot0;
                    var1.height = var2;
                    var0[2] = var1;
                    return var0;
                };
                var8 = var5.bind(var2)(var1, var4);
                var5 = var2.useCallback;
                var4 = new Array(1);
                var4[0] = var11;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var2 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = 9;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.default;
                        var1 = {};
                        var0 = _closure2_slot2;
                        var3 = var0.user;
                        var3 = var3.id;
                        var1.userId = var3;
                        var0 = var0.user;
                        var1.localUser = var0;
                        var0 = 'Messages Tab User Profile';
                        var1.location = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var5.bind(var2)(var1, var4);
                var1 = var2.useState;
                var4 = false;
                var5 = var1.bind(var2)(var4);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var5, var1);
                var1 = 0;
                var5 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot4 = var1;
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 11;
                var1 = var10[var1];
                var13 = var2.bind(var3)(var1);
                var10 = var13.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = var3.getRelationshipType;
                    var1 = _closure2_slot2;
                    var1 = var1.user;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0 = _closure1_slot8;
                    var0 = var0.PENDING_OUTGOING;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var10.bind(var13)(var2, var1);
                if (var5) {
                    _fun101319_ip = 209;
                    continue _fun101319
                }
            case 206:
                var5 = var1;
            case 209:
                var10 = _closure1_slot4;
                var13 = var10.useMemo;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() { // Environment: var0
                    _fun101324: for (var _fun101324_ip = 0;;) switch (_fun101324_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var1 = var1.mutualFriendsCount;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun101324_ip = 35;
                                continue _fun101324
                            }
                        case 19:
                            var1 = _closure2_slot2;
                            var3 = var1.mutualFriendsCount;
                            var1 = 0;
                            if (!(!(var3 > var1))) {
                                _fun101324_ip = 82;
                                continue _fun101324
                            }
                        case 35:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getName;
                            var1 = _closure2_slot2;
                            var1 = var1.user;
                            var5 = var3.bind(var4)(var1);
                            _fun101324_ip = 160;
                            continue _fun101324;
                        case 82:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 12;
                            var4 = var8[var1];
                            var3 = undefined;
                            var4 = var7.bind(var3)(var4);
                            var6 = var4.intl;
                            var4 = var6.formatToPlainString;
                            var1 = var8[var1];
                            var1 = var7.bind(var3)(var1);
                            var1 = var1.t;
                            var3 = var1.z7y34b;
                            var1 = {};
                            var7 = _closure2_slot2;
                            var7 = var7.mutualFriendsCount;
                            var1.count = var7;
                            var5 = var4.bind(var6)(var3, var1);
                        case 160:
                            var1 = _closure2_slot2;
                            var1 = var1.friendSuggestionName;
                            if (!(var2 != var1)) {
                                _fun101324_ip = 195;
                                continue _fun101324
                            }
                        case 174:
                            var1 = _closure2_slot2;
                            var1 = var1.friendSuggestionName;
                            var3 = var1.length;
                            var1 = 0;
                            if (!(!(var3 > var1))) {
                                _fun101324_ip = 242;
                                continue _fun101324
                            }
                        case 195:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getName;
                            var1 = _closure2_slot2;
                            var1 = var1.user;
                            var1 = var3.bind(var4)(var1);
                            _fun101324_ip = 252;
                            continue _fun101324;
                        case 242:
                            var3 = _closure2_slot2;
                            var1 = var3.friendSuggestionName;
                        case 252:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 14;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var6.bind(var3)(var4);
                            var3 = var4.getSuggestedContactNameForSuggestion;
                            var0 = _closure2_slot2;
                            var7 = var3.bind(var4)(var1, var0);
                            var0 = {};
                            var2 = var2 != var7;
                            var4 = '';
                            var3 = var4;
                            if (!var2) {
                                _fun101324_ip = 333;
                                continue _fun101324
                            }
                        case 309:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var2 = ' · ';
                            var3 = var6.bind(var2)(var7);
                        case 333:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var2 = var2.concat;
                            var2 = var2.bind(var4)(var5, var3);
                            var0.userStatusLabel = var2;
                            var0.suggestionName = var1;
                            return var0;
                    }
                };
                var1 = var13.bind(var10)(var1, var2);
                var14 = var1.userStatusLabel;
                var17 = var1.suggestionName;
                var2 = var10.useCallback;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var12;
                var0 = function() { // Environment: var0
                    var7 = _closure2_slot2;
                    var8 = var7.user;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 15;
                    var4 = var6[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.addContactSuggestion;
                    var4 = var4.bind(var5)(var8);
                    var5 = _closure1_slot1;
                    var4 = 16;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot7;
                    var4 = var3.FRIEND_SUGGESTION_ADDED;
                    var3 = {};
                    var8 = var8.id;
                    var3.suggested_user_id = var8;
                    var7 = var7.source;
                    var3.suggestion_source = var7;
                    var7 = 'Messages Tab';
                    var3.location = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure2_slot1;
                    var4 = function(arg0) { // Environment: var2
                        var0 = new Array(1);
                        var4 = arg0;
                        var3 = 0;
                        var5 = var0;
                        var2 = arraySpread(var5, var4, var3);
                        var1 = _closure2_slot2;
                        var0[var2] = var1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var0;
                    };
                    var4 = var3.bind(var0)(var4);
                    var2 = function(arg0) { // Environment: var2
                        var2 = arg0;
                        var1 = var2.filter;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.user;
                            var1 = var0.id;
                            var0 = _closure2_slot2;
                            var0 = var0.user;
                            var0 = var0.id;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot4;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10 = var2.bind(var10)(var0, var1);
                var2 = _closure1_slot10;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 17;
                var0 = var15[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var13 = 'button';
                var0.accessibilityRole = var13;
                var0.style = var8;
                var0.onPress = var7;
                var0.collapsable = var4;
                var13 = _closure1_slot9;
                var7 = _closure1_slot1;
                var8 = 18;
                var4 = var15[var8];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var16 = var9.avatar;
                var4.style = var16;
                var11 = var11.user;
                var4.user = var11;
                var4.guildId = var3;
                var8 = var15[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.REFRESH_MEDIUM_32;
                var4.size = var8;
                var7 = var13.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                var8 = _closure1_slot5;
                var7 = {};
                var9 = var9.textContainer;
                var7.style = var9;
                var11 = 19;
                var9 = var15[var11];
                var9 = var12.bind(var3)(var9);
                var16 = var9.Text;
                var9 = {
                    'lineClamp': 1,
                    'variant': 'redesign/channel-title/semibold',
                    'maxFontSizeMultiplier': 2,
                    'color': 'text-default'
                };
                var9.children = var17;
                var16 = var13.bind(var3)(var16, var9);
                var9 = new Array(2);
                var9[0] = var16;
                var11 = var15[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default',
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 2
                };
                if (!var5) {
                    _fun101319_ip = 569;
                    continue _fun101319
                }
            case 514:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 12;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.Kzyxm9;
                var14 = var16.bind(var17)(var15);
            case 569:
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var9[1] = var11;
                var7.children = var9;
                var7 = var2.bind(var3)(var8, var7);
                var4[1] = var7;
                var8 = _closure1_slot9;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                if (var5) {
                    _fun101319_ip = 707;
                    continue _fun101319
                }
            case 612:
                var5 = 20;
                var5 = var9[var5];
                var5 = var7.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {
                    'variant': 'secondary',
                    'size': 'sm'
                };
                var11 = 12;
                var12 = var9[var11];
                var12 = var7.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var9[var11];
                var11 = var7.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.OYkgVk;
                var11 = var12.bind(var13)(var11);
                var5.text = var11;
                var5.onPress = var10;
                var5 = var8.bind(var3)(var6, var5);
                _fun101319_ip = 747;
                continue _fun101319;
            case 707:
                var6 = 21;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.SendMessageIcon;
                var6 = {};
                var9 = {};
                var10 = 8;
                var9.marginHorizontal = var10;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 747:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var7 = arg0;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 8;
        var2 = var4[var1];
        var3 = undefined;
        var8 = var5.bind(var3)(var2);
        var6 = var8.scaleTextLineHeight;
        var2 = 'redesign/channel-title/semibold';
        var2 = var6.bind(var8)(var2, var7);
        var1 = var4[var1];
        var6 = var5.bind(var3)(var1);
        var5 = var6.scaleTextLineHeight;
        var1 = 'text-xs/medium';
        var1 = var5.bind(var6)(var1, var7);
        var1 = var2 + var1;
        var2 = _closure1_slot1;
        var0 = 7;
        var0 = var4[var0];
        var0 = var2.bind(var3)(var0);
        var0 = var0.spacing;
        var0 = var0.PX_16;
        var0 = var1 + var0;
        return var0;
    };
    var2.getMessagesItemSuggestedFriendHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3091, 660, 33, 1297, 671, 6972, 7345, 1307, 632, 1234, 3227, 13207, 13208, 795, 4897, 5447, 3932, 4075, 3247, 2]);