// modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var6 = var3.InstantInviteSources;
    var _closure1_slot6 = var6;
    var3 = var3.RelationshipTypes;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'add';
    var3.ADD = var6;
    var _closure1_slot9 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108703: for (var _fun108703_ip = 0;;) switch (_fun108703_ip) {
            case 0:
                var5 = arg0;
                var10 = var5.suggestedFriend;
                var _closure2_slot0 = var10;
                var2 = var5.added;
                var _closure2_slot1 = var2;
                var0 = var5.onAddSuggestion;
                var _closure2_slot2 = var0;
                var4 = {
                    'suggestedFriend': 0,
                    'added': 0,
                    'onAddSuggestion': 0
                };
                var16 = null;
                var21 = var4;
                var20 = null;
                var1 = silentSetPrototypeOf(var21, var20);
                var1 = 0;
                var21 = {};
                var20 = var5;
                var19 = var4;
                var6 = copyDataProperties(var21, var20, var19);
                var _closure2_slot3 = var6;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var4 = var10.friendSuggestionName;
                if (!(var16 != var4)) {
                    _fun108703_ip = 109;
                    continue _fun108703
                }
            case 94:
                var4 = var10.friendSuggestionName;
                var4 = var4.length;
                if (!(!(var4 > var1))) {
                    _fun108703_ip = 150;
                    continue _fun108703
                }
            case 109:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 4;
                var4 = var7[var4];
                var7 = var5.bind(var3)(var4);
                var5 = var7.getName;
                var4 = var10.user;
                var12 = var5.bind(var7)(var4);
                _fun108703_ip = 156;
                continue _fun108703;
            case 150:
                var12 = var10.friendSuggestionName;
            case 156:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = 5;
                var9 = var7[var9];
                var13 = var5.bind(var3)(var9);
                var11 = var13.useSharedValue;
                var9 = false;
                var9 = var11.bind(var13)(var9);
                _closure2_slot4 = var9;
                var11 = _closure1_slot3;
                var15 = var11.useEffect;
                var14 = new Array(2);
                var14[0] = var2;
                var14[1] = var9;
                var13 = function() { // Environment: var8
                    var2 = _closure2_slot4;
                    var1 = var2.set;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var13 = var15.bind(var11)(var13, var14);
                var14 = var11.useMemo;
                var13 = new Array(1);
                var13[0] = var2;
                var2 = function() { // Environment: var8
                    _fun108705: for (var _fun108705_ip = 0;;) switch (_fun108705_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun108705_ip = 100;
                                continue _fun108705
                            }
                        case 10:
                            var1 = {};
                            var2 = _closure1_slot9;
                            var2 = var2.ADD;
                            var1.name = var2;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 6;
                            var2 = var6[var0];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var0 = var6[var0];
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.t;
                            var0 = var0["ed99+i"];
                            var0 = var2.bind(var3)(var0);
                            var1.label = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            _fun108705_ip = 104;
                            continue _fun108705;
                        case 100:
                            var0 = new Array(0);
                        case 104:
                            return var0;
                    }
                };
                var15 = var14.bind(var11)(var2, var13);
                var2 = 7;
                var2 = var7[var2];
                var13 = var5.bind(var3)(var2);
                var7 = var13.useStateFromStores;
                var2 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var8
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var7 = var7.bind(var13)(var5, var2);
                var5 = var11.useCallback;
                var2 = new Array(3);
                var2[0] = var9;
                var2[1] = var0;
                var0 = var10.user;
                var2[2] = var0;
                var0 = function(arg0) { // Environment: var8
                    _fun108707: for (var _fun108707_ip = 0;;) switch (_fun108707_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var2 = var0.actionName;
                            var0 = _closure1_slot9;
                            var0 = var0.ADD;
                            if (!(var2 !== var0)) {
                                _fun108707_ip = 36;
                                continue _fun108707
                            }
                        case 32:
                            var0 = undefined;
                            return var0;
                        case 36:
                            var4 = _closure2_slot4;
                            var3 = var4.set;
                            var2 = true;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var2 = var0.user;
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 8;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.addContactSuggestion;
                            var0 = var0.user;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var14 = var5.bind(var11)(var0, var2);
                var2 = var16 == var10;
                var0 = undefined;
                if (var2) {
                    _fun108703_ip = 352;
                    continue _fun108703
                }
            case 346:
                var0 = var10.mutualFriendsCount;
            case 352:
                var11 = var16 != var0;
                if (!var11) {
                    _fun108703_ip = 378;
                    continue _fun108703
                }
            case 359:
                var2 = var16 == var10;
                var0 = undefined;
                if (var2) {
                    _fun108703_ip = 374;
                    continue _fun108703
                }
            case 368:
                var0 = var10.mutualFriendsCount;
            case 374:
                var11 = var0 > var1;
            case 378:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getSuggestedContactNameForSuggestion;
                var17 = var0.bind(var1)(var12, var10);
                if (!(var16 == var17)) {
                    _fun108703_ip = 452;
                    continue _fun108703
                }
            case 414:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getUserTag;
                var0 = var10.user;
                var5 = var1.bind(var2)(var0);
                _fun108703_ip = 518;
                continue _fun108703;
            case 452:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getUserTag;
                var0 = var10.user;
                var13 = var1.bind(var2)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ' · ';
                var5 = var2.bind(var1)(var13, var0, var17);
            case 518:
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 10;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var21 = var0;
                var20 = var6;
                var6 = copyDataProperties(var21, var20);
                var17 = var10.user;
                var6 = 'user';
                var0[var6] = var17;
                var6 = _closure1_slot7;
                var17 = var6.SUGGESTION;
                var6 = 'type';
                var0[var6] = var17;
                var6 = 'accessibilityActions';
                var0[var6] = var15;
                var6 = 'onAccessibilityAction';
                var0[var6] = var14;
                var14 = 1;
                var6 = 'labelLineClamp';
                var0[var6] = var14;
                var6 = 'subLabelLineClamp';
                var0[var6] = var14;
                var6 = 'label';
                var0[var6] = var12;
                var12 = _closure1_slot0;
                var6 = 11;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var12 = var6.ActionStatusSubLabel;
                var6 = {};
                var6.actioned = var9;
                var6.label = var5;
                var5 = undefined;
                if (!var11) {
                    _fun108703_ip = 765;
                    continue _fun108703
                }
            case 673:
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 6;
                var14 = var17[var11];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.formatToPlainString;
                var11 = var17[var11];
                var11 = var13.bind(var3)(var11);
                var11 = var11.t;
                var13 = var11.z7y34b;
                var11 = {};
                var18 = var16 == var10;
                var17 = undefined;
                if (var18) {
                    _fun108703_ip = 740;
                    continue _fun108703
                }
            case 734:
                var17 = var10.mutualFriendsCount;
            case 740:
                var18 = var16 != var17;
                var16 = '';
                if (!var18) {
                    _fun108703_ip = 754;
                    continue _fun108703
                }
            case 751:
                var16 = var17;
            case 754:
                var11.count = var16;
                var5 = var14.bind(var15)(var13, var11);
            case 765:
                var6.secondaryLabel = var5;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var13 = 6;
                var14 = var11[var13];
                var14 = var5.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var11[var13];
                var13 = var5.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.Kzyxm9;
                var13 = var14.bind(var15)(var13);
                var6.actionStatus = var13;
                var13 = !var7;
                var6.animate = var13;
                var12 = var2.bind(var3)(var12, var6);
                var6 = 'subLabel';
                var0[var6] = var12;
                var6 = _closure1_slot8;
                var4 = 12;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ContactSuggestionActions;
                var4 = {};
                var10 = var10.user;
                var4.user = var10;
                var4.added = var9;
                var8 = function arg0() {
                    _fun108708: for (var _fun108708_ip = 0;;) switch (_fun108708_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var1);
                            var5 = var6.track;
                            var1 = _closure1_slot5;
                            var4 = var1.FRIEND_SUGGESTION_ADDED;
                            var3 = {};
                            var1 = var2.id;
                            var3.suggested_user_id = var1;
                            var7 = _closure2_slot0;
                            var7 = var7.source;
                            var3.suggestion_source = var7;
                            var7 = _closure2_slot3;
                            var7 = var7.location;
                            var9 = null;
                            if (!(var9 == var7)) {
                                _fun108708_ip = 97;
                                continue _fun108708
                            }
                        case 87:
                            var8 = _closure1_slot6;
                            var7 = var8.ADD_FRIENDS_MODAL;
                        case 97:
                            var3.location = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var4.onAddSuggestion = var8;
                var7 = !var7;
                var4.animate = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'trailing';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ContactSuggestionRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 660, 33, 3236, 3720, 1234, 632, 13237, 13236, 9121, 13540, 13541, 795, 2]);