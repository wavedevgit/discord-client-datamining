// modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_32;
    var8.paddingTop = var10;
    var3.emptyContainer = var8;
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: SuggestedFriendsScreen, environment: var1
        _fun109284: for (var _fun109284_ip = 0;;) switch (_fun109284_ip) {
            case 0:
                var0 = _closure1_slot9;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 6;
                var2 = var6[var0];
                var4 = var5.bind(var3)(var2);
                var2 = 7;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.SUGGESTED_FRIENDS;
                var2 = var4.bind(var3)(var2);
                var4 = var2.analyticsLocations;
                var _closure2_slot0 = var4;
                var8 = _closure1_slot3;
                var10 = var8.useEffect;
                var7 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot5;
                    var2 = var1.FRIEND_ADD_VIEWED;
                    var1 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.FRIENDS_SUGGESTED_FRIENDS_MODAL;
                    var1.friend_add_type = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var10.bind(var8)(var7, var2);
                var2 = 9;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var7 = var2.bind(var3)();
                var12 = var7.added;
                var _closure2_slot1 = var12;
                var2 = var7.setAdded;
                var _closure2_slot2 = var2;
                var14 = var7.friendSuggestions;
                var _closure2_slot3 = var14;
                var11 = var8.useCallback;
                var10 = new Array(1);
                var10[0] = var4;
                var7 = function(arg0) { // Environment: var1
                    var3 = arg0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = var3.id;
                    var1.userId = var4;
                    var1.localUser = var3;
                    var3 = _closure2_slot0;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var11.bind(var8)(var7, var10);
                var _closure2_slot4 = var11;
                var10 = var8.useCallback;
                var7 = new Array(4);
                var7[0] = var12;
                var7[1] = var14;
                var7[2] = var11;
                var7[3] = var2;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun109287: for (var _fun109287_ip = 0;;) switch (_fun109287_ip) {
                        case 0:
                            var3 = arg1;
                            var _closure3_slot0 = var3;
                            var2 = _closure2_slot3;
                            var2 = var2[var3];
                            var _closure3_slot1 = var2;
                            var5 = null;
                            var7 = var5 == var2;
                            var4 = undefined;
                            if (var7) {
                                _fun109287_ip = 41;
                                continue _fun109287
                            }
                        case 35:
                            var4 = var2.mutualFriendsCount;
                        case 41:
                            var4 = var5 != var4;
                            if (!var4) {
                                _fun109287_ip = 69;
                                continue _fun109287
                            }
                        case 48:
                            var5 = var5 == var2;
                            var6 = undefined;
                            if (var5) {
                                _fun109287_ip = 63;
                                continue _fun109287
                            }
                        case 57:
                            var6 = var2.mutualFriendsCount;
                        case 63:
                            var5 = 0;
                            var4 = var6 > var5;
                        case 69:
                            var0 = _closure2_slot3;
                            var5 = var0.length;
                            var0 = 1;
                            var0 = var5 - var0;
                            var0 = var3 === var0;
                            var _closure3_slot2 = var0;
                            var0 = {};
                            var3 = 'custom';
                            var0.type = var3;
                            var3 = 'contactSuggestionNoMutualCount';
                            if (!var4) {
                                _fun109287_ip = 118;
                                continue _fun109287
                            }
                        case 112:
                            var3 = 'contactSuggestionMutualCount';
                        case 118:
                            var0.itemType = var3;
                            var2 = var2.user;
                            var2 = var2.id;
                            var0.key = var2;
                            var1 = function() { // Original name: component, environment: var1
                                var3 = _closure1_slot7;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 11;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.ContactSuggestionRow;
                                var0 = {};
                                var9 = _closure2_slot1;
                                var8 = var9.includes;
                                var7 = _closure3_slot1;
                                var8 = var8.bind(var9)(var7);
                                var0.added = var8;
                                var0.suggestedFriend = var7;
                                var8 = _closure3_slot0;
                                var7 = 0;
                                var7 = var7 === var8;
                                var0.start = var7;
                                var6 = _closure3_slot2;
                                var0.end = var6;
                                var5 = _closure2_slot4;
                                var0.onPress = var5;
                                var5 = function() { // Original name: onAddSuggestion, environment: var5
                                    var2 = _closure2_slot2;
                                    var1 = undefined;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = new Array(1);
                                        var4 = arg0;
                                        var3 = 0;
                                        var5 = var0;
                                        var2 = arraySpread(var5, var4, var3);
                                        var1 = _closure3_slot1;
                                        var0[var2] = var1;
                                        var1 = 1;
                                        var1 = var2 + var1;
                                        return var0;
                                    };
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var0.onAddSuggestion = var5;
                                var4 = _closure1_slot6;
                                var4 = var4.FRIENDS_SUGGESTED_FRIENDS_MODAL;
                                var0.location = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var0.component = var1;
                            return var0;
                    }
                };
                var13 = var10.bind(var8)(var2, var7);
                var7 = var8.useCallback;
                var2 = function() { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var1 = new Array(0);
                var12 = var7.bind(var8)(var2, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot0;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var7 = _closure1_slot7;
                var4 = 12;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var17 = true;
                var4.absolute = var17;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var15.container;
                var5.style = var8;
                var10 = var14.length;
                var8 = 0;
                if (!(var8 === var10)) {
                    _fun109284_ip = 449;
                    continue _fun109284
                }
            case 327:
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var8 = {};
                var15 = var15.emptyContainer;
                var8.style = var15;
                var16 = _closure1_slot1;
                var22 = _closure1_slot2;
                var15 = 14;
                var15 = var22[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var21 = _closure1_slot0;
                var18 = 15;
                var19 = var22[var18];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.pxFW8V;
                var18 = var19.bind(var20)(var18);
                var15.title = var18;
                var15.disableBackgroundOverlay = var17;
                var15 = var11.bind(var3)(var16, var15);
                var8.children = var15;
                var8 = var11.bind(var3)(var10, var8);
                _fun109284_ip = 523;
                continue _fun109284;
            case 449:
                var11 = _closure1_slot7;
                var10 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 13;
                var9 = var15[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.UsersFastList;
                var9 = {};
                var15 = var14.length;
                var14 = new Array(1);
                var14[0] = var15;
                var9.sections = var14;
                var9.getItemProps = var13;
                var9.getSectionProps = var12;
                var12 = 8;
                var9.insetStart = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 523:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 5687, 5540, 795, 13243, 7313, 14040, 8671, 9043, 9115, 1234, 2]);