// modules/user_profile/native/UserProfileIncomingFriendRequest.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'rowGap': 16,
        'flexWrap': 'wrap'
    };
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'columnGap': 12
    };
    var3.buttons = var8;
    var8 = {};
    var8.paddingTop = var9;
    var3.gameIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileIncomingFriendRequest.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92088: for (var _fun92088_ip = 0;;) switch (_fun92088_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.user;
                var15 = var0.channelId;
                var14 = var0.guildId;
                var12 = var0.isGameRelationship;
                var4 = undefined;
                if (!(var12 === var4)) {
                    _fun92088_ip = 34;
                    continue _fun92088
                }
            case 32:
                var12 = false;
            case 34:
                var _closure2_slot0 = var12;
                var2 = var0.applicationId;
                var6 = var0.style;
                var18 = var0.showUserProfile;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var0 = _closure1_slot7;
                var10 = var0.bind(var4)();
                _closure2_slot1 = var10;
                var11 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var0 = var11.bind(var4)(var0);
                var7 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var0 = 5;
                var0 = var3[var0];
                var5 = var1.bind(var4)(var0);
                var0 = var5.useUserProfileAnalyticsContext;
                var0 = var0.bind(var5)();
                var0 = var0.trackUserProfileAction;
                _closure2_slot2 = var0;
                var5 = 6;
                var5 = var3[var5];
                var5 = var11.bind(var4)(var5);
                var5 = var5.bind(var4)();
                var19 = var5.newestAnalyticsLocation;
                var5 = 7;
                var5 = var3[var5];
                var13 = var1.bind(var4)(var5);
                var8 = var13.useFriendRequestActions;
                var5 = {};
                var20 = var16.id;
                var5.userId = var20;
                var5.applicationId = var2;
                var5.isGameRelationship = var12;
                var5.location = var19;
                var5.onConfirm = var18;
                var5.onCancel = var18;
                var8 = var8.bind(var13)(var5);
                var5 = var8.acceptFriendRequest;
                _closure2_slot3 = var5;
                var13 = var8.cancelFriendRequest;
                _closure2_slot4 = var13;
                var8 = 8;
                var8 = var3[var8];
                var11 = var11.bind(var4)(var8);
                var8 = var11.useName;
                var21 = var8.bind(var11)(var14, var15, var16);
                var11 = _closure1_slot3;
                var14 = var11.useCallback;
                var8 = new Array(3);
                var8[0] = var5;
                var8[1] = var12;
                var8[2] = var0;
                var5 = function() { // Environment: var17
                    _fun92089: for (var _fun92089_ip = 0;;) switch (_fun92089_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var2 = _closure2_slot2;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var3 = 'ACCEPT_FRIEND_REQUEST';
                            if (!var4) {
                                _fun92089_ip = 38;
                                continue _fun92089
                            }
                        case 32:
                            var3 = 'ACCEPT_GAME_FRIEND_REQUEST';
                        case 38:
                            var1.action = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var15 = var14.bind(var11)(var5, var8);
                var8 = var11.useCallback;
                var5 = new Array(3);
                var5[0] = var13;
                var5[1] = var12;
                var5[2] = var0;
                var0 = function() { // Environment: var17
                    _fun92090: for (var _fun92090_ip = 0;;) switch (_fun92090_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var2 = _closure2_slot2;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var3 = 'IGNORE_FRIEND_REQUEST';
                            if (!var4) {
                                _fun92090_ip = 38;
                                continue _fun92090
                            }
                        case 32:
                            var3 = 'IGNORE_GAME_FRIEND_REQUEST';
                        case 38:
                            var1.action = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var13 = var8.bind(var11)(var0, var5);
                var19 = null;
                var22 = var19 != var2;
                var0 = 9;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useGetOrFetchApplication;
                var20 = var0.bind(var1)(var2);
                _closure2_slot5 = var20;
                if (!var22) {
                    _fun92088_ip = 393;
                    continue _fun92088
                }
            case 381:
                var1 = var19 == var20;
                var0 = null;
                if (var1) {
                    _fun92088_ip = 907;
                    continue _fun92088
                }
            case 393:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var8 = var10.container;
                var5 = new Array(3);
                var5[0] = var8;
                var7 = var7.card;
                var5[1] = var7;
                var5[2] = var6;
                var1.style = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 10;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var8 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var18 = 11;
                var14 = var5[var18];
                var14 = var11.bind(var4)(var14);
                var16 = var14.intl;
                var14 = var16.format;
                if (var22) {
                    _fun92088_ip = 551;
                    continue _fun92088
                }
            case 510:
                var5 = var5[var18];
                var5 = var11.bind(var4)(var5);
                var5 = var5.t;
                var11 = var5.uIomXw;
                var5 = {};
                var5.username = var21;
                var5 = var14.bind(var16)(var11, var5);
                var8.children = var5;
                var5 = var8;
                _fun92088_ip = 644;
                continue _fun92088;
            case 551:
                var22 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var18];
                var11 = var22.bind(var4)(var11);
                var11 = var11.t;
                if (var12) {
                    _fun92088_ip = 586;
                    continue _fun92088
                }
            case 576:
                var12 = var11.V15uUI;
                _fun92088_ip = 594;
                continue _fun92088;
            case 586:
                var12 = var11.syHjLL;
            case 594:
                var11 = {};
                var11.username = var21;
                var21 = var19 == var20;
                var19 = undefined;
                if (var21) {
                    _fun92088_ip = 614;
                    continue _fun92088
                }
            case 609:
                var19 = var20.name;
            case 614:
                var11.applicationName = var19;
                var17 = function() {
                    _fun92091: for (var _fun92091_ip = 0;;) switch (_fun92091_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun92091_ip = 164;
                                continue _fun92091
                            }
                        case 19:
                            var5 = _closure1_slot5;
                            var10 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 12;
                            var2 = var8[var6];
                            var4 = undefined;
                            var3 = var10.bind(var4)(var2);
                            var2 = {};
                            var9 = 13;
                            var9 = var8[var9];
                            var11 = var10.bind(var4)(var9);
                            var10 = var11.getApplicationIconSource;
                            var9 = {};
                            var12 = _closure2_slot5;
                            var12 = var12.id;
                            var9.id = var12;
                            var12 = _closure2_slot5;
                            var12 = var12.icon;
                            var9.icon = var12;
                            var9 = var10.bind(var11)(var9);
                            var2.source = var9;
                            var7 = _closure1_slot0;
                            var6 = var8[var6];
                            var6 = var7.bind(var4)(var6);
                            var6 = var6.AvatarSizes;
                            var6 = var6.XXSMALL;
                            var2.size = var6;
                            var6 = _closure2_slot1;
                            var6 = var6.gameIcon;
                            var2.style = var6;
                            var1 = _closure2_slot5;
                            var1 = var1.id;
                            var0 = var5.bind(var4)(var3, var2, var1);
                        case 164:
                            return var0;
                    }
                };
                var11.applicationIcon = var17;
                var11 = var14.bind(var16)(var12, var11);
                var8.children = var11;
                var5 = var8;
            case 644:
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.buttons;
                var6.style = var10;
                var12 = _closure1_slot5;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 14;
                var9 = var14[var10];
                var9 = var17.bind(var4)(var9);
                var11 = var9.Button;
                var9 = {
                    'size': 'sm',
                    'variant': 'primary'
                };
                var16 = var14[var18];
                var16 = var17.bind(var4)(var16);
                var20 = var16.intl;
                var19 = var20.string;
                var16 = var14[var18];
                var16 = var17.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.Zcibdf;
                var16 = var19.bind(var20)(var16);
                var9.text = var16;
                var9.onPress = var15;
                var11 = var12.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var10 = var14[var10];
                var10 = var17.bind(var4)(var10);
                var11 = var10.Button;
                var10 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var15 = var14[var18];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.xuio0C;
                var14 = var15.bind(var16)(var14);
                var10.text = var14;
                var10.onPress = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 907:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 6991, 7001, 5734, 11997, 3961, 6909, 3943, 1234, 5457, 1417, 4085, 2]);