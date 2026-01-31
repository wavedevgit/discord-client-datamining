// modules/user_profile/native/UserProfileYourFriendsCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var12.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var10 = 1;
    var7 = var5[var10];
    var6 = metroImportAll;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.RelationshipTypes;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot10 = var7;
    var6 = var6.jsxs;
    var _closure1_slot11 = var6;
    var7 = var3.Object;
    var6 = var7.freeze;
    var3 = {};
    var8 = 8;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.CutoutDirection;
    var8 = var8.RIGHT;
    var3.direction = var8;
    var8 = -4;
    var3.inset = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'padding': 16
    };
    var9 = 'row';
    var11 = 10;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var3.pressable = var8;
    var8 = {};
    var8.flex = var10;
    var3.label = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginLeft': 'auto',
        'marginRight': 8
    };
    var3.facepile = var8;
    var8 = {};
    var8.flexDirection = var9;
    var3.avatars = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileYourFriendsCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var7 = var1.navigateToFriends;
        var9 = var1.style;
        var1 = _closure1_slot13;
        var3 = undefined;
        var11 = var1.bind(var3)();
        var _closure2_slot0 = var11;
        var5 = _closure1_slot4;
        var2 = var5.useState;
        var1 = new Array(0);
        var6 = var2.bind(var5)(var1);
        var2 = _closure1_slot3;
        var1 = 2;
        var2 = var2.bind(var3)(var6, var1);
        var1 = 0;
        var10 = var2[var1];
        var _closure2_slot1 = var10;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot2 = var1;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 11;
        var2 = var8[var1];
        var14 = var6.bind(var3)(var2);
        var13 = var14.useStateFromStoresArray;
        var2 = _closure1_slot6;
        var12 = new Array(1);
        var12[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.getUserAffinities;
            var2 = var0.bind(var1)();
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.otherUserId;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var14 = var13.bind(var14)(var12, var2);
        var _closure2_slot3 = var14;
        var1 = var8[var1];
        var13 = var6.bind(var3)(var1);
        var12 = var13.useStateFromStoresArray;
        var1 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot7;
            var0 = var1.getFriendIDs;
            var0 = var0.bind(var1)();
            return var0;
        };
        var13 = var12.bind(var13)(var2, var1);
        var _closure2_slot4 = var13;
        var1 = 12;
        var1 = var8[var1];
        var12 = var6.bind(var3)(var1);
        var2 = var12.useGameRelationshipsByType;
        var1 = _closure1_slot9;
        var1 = var1.FRIEND;
        var1 = var2.bind(var12)(var1);
        var _closure2_slot5 = var1;
        var15 = var5.useEffect;
        var12 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.fetchUserAffinitiesV2;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var2 = var15.bind(var5)(var12, var2);
        var12 = var5.useEffect;
        var2 = new Array(3);
        var2[0] = var14;
        var2[1] = var13;
        var2[2] = var1;
        var1 = function() { // Environment: var0
            _fun103469: for (var _fun103469_ip = 0;;) switch (_fun103469_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 14;
                    var1 = var2[var5];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var1);
                    var7 = var8.chain;
                    var3 = _closure2_slot3;
                    var8 = var7.bind(var8)(var3);
                    var7 = var8.filter;
                    var3 = function(arg0) { // Environment: var4
                        var2 = _closure2_slot4;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var7 = var7.bind(var8)(var3);
                    var3 = var7.take;
                    var9 = 5;
                    var8 = var3.bind(var7)(var9);
                    var7 = var8.map;
                    var3 = _closure1_slot8;
                    var3 = var3.getUser;
                    var8 = var7.bind(var8)(var3);
                    var3 = var8.filter;
                    var10 = _closure1_slot0;
                    var7 = 15;
                    var2 = var2[var7];
                    var2 = var10.bind(var0)(var2);
                    var2 = var2.isNotNullish;
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.value;
                    var2 = var2.bind(var3)();
                    var3 = var2.length;
                    if (!(!(var3 >= var9))) {
                        _fun103469_ip = 323;
                        continue _fun103469
                    }
                case 149:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = var3[var5];
                    var10 = var8.bind(var0)(var5);
                    var8 = var10.chain;
                    var5 = _closure2_slot5;
                    var8 = var8.bind(var10)(var5);
                    var5 = var8.map;
                    var4 = function(arg0) { // Environment: var4
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.uniq;
                    var8 = var4.bind(var5)();
                    var5 = var8.take;
                    var4 = var2.length;
                    var4 = var9 - var4;
                    var8 = var5.bind(var8)(var4);
                    var5 = var8.map;
                    var4 = _closure1_slot8;
                    var4 = var4.getUser;
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.filter;
                    var6 = _closure1_slot0;
                    var3 = var3[var7];
                    var3 = var6.bind(var0)(var3);
                    var3 = var3.isNotNullish;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.value;
                    var6 = var3.bind(var4)();
                    var4 = _closure2_slot2;
                    var3 = new Array(0);
                    var11 = 0;
                    var13 = var3;
                    var12 = var2;
                    var11 = arraySpread(var13, var12, var11);
                    var13 = var3;
                    var12 = var6;
                    var5 = arraySpread(var13, var12, var11);
                    var3 = var4.bind(var0)(var3);
                    _fun103469_ip = 332;
                    continue _fun103469;
                case 323:
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)(var2);
                case 332:
                    return var0;
            }
        };
        var1 = var12.bind(var5)(var1, var2);
        var2 = var5.useMemo;
        var1 = new Array(3);
        var1[0] = var10;
        var10 = var11.avatars;
        var1[1] = var10;
        var10 = var11.facepile;
        var1[2] = var10;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var4 = var5.facepile;
            var1.style = var4;
            var4 = {};
            var5 = var5.avatars;
            var4.style = var5;
            var6 = _closure2_slot1;
            var5 = var6.map;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun103473: for (var _fun103473_ip = 0;;) switch (_fun103473_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = arg1;
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot5;
                        var2 = {};
                        var1 = {};
                        var6 = {};
                        var7 = _closure2_slot1;
                        var5 = var7.length;
                        var10 = 1;
                        var5 = var5 - var10;
                        var11 = var5 - var9;
                        var5 = 4;
                        var5 = var5 * var11;
                        var6.translateX = var5;
                        var5 = new Array(1);
                        var5[0] = var6;
                        var1.transform = var5;
                        var2.style = var1;
                        var6 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var11 = 8;
                        var5 = var13[var11];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var5);
                        var5 = {};
                        var5.user = var0;
                        var5.guildId = var1;
                        var12 = _closure1_slot0;
                        var11 = var13[var11];
                        var11 = var12.bind(var1)(var11);
                        var11 = var11.AvatarSizes;
                        var11 = var11.XSMALL;
                        var5.size = var11;
                        var7 = var7.length;
                        var7 = var7 - var10;
                        var9 = var9 < var7;
                        var7 = undefined;
                        if (!var9) {
                            _fun103473_ip = 157;
                            continue _fun103473
                        }
                    case 153:
                        var7 = _closure1_slot12;
                    case 157:
                        var5.cutout = var7;
                        var5 = var4.bind(var1)(var6, var5);
                        var2.children = var5;
                        var0 = var0.id;
                        var0 = var4.bind(var1)(var3, var2, var0);
                        return var0;
                }
            };
            var0 = var5.bind(var6)(var0);
            var4.children = var0;
            var0 = undefined;
            var4 = var3.bind(var0)(var2, var4);
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot11;
        var0 = 16;
        var0 = var8[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var10 = 'button';
        var0.accessibilityRole = var10;
        var10 = 17;
        var12 = var8[var10];
        var12 = var6.bind(var3)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = var8[var10];
        var12 = var6.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.TdEu5X;
        var12 = var13.bind(var14)(var12);
        var0.accessibilityLabel = var12;
        var0.onPress = var7;
        var7 = new Array(2);
        var7[0] = var9;
        var9 = var11.pressable;
        var7[1] = var9;
        var0.style = var7;
        var7 = _closure1_slot10;
        var4 = 18;
        var4 = var8[var4];
        var4 = var6.bind(var3)(var4);
        var9 = var4.Text;
        var4 = {
            'accessibilityRole': 'header',
            'variant': 'text-sm/semibold',
            'color': 'text-default'
        };
        var11 = var11.label;
        var4.style = var11;
        var11 = var8[var10];
        var11 = var6.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var8[var10];
        var10 = var6.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.TdEu5X;
        var10 = var11.bind(var12)(var10);
        var4.children = var10;
        var9 = var7.bind(var3)(var9, var4);
        var4 = new Array(3);
        var4[0] = var9;
        var4[1] = var5;
        var5 = 19;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.ChevronSmallRightIcon;
        var5 = {};
        var8 = 'sm';
        var5.size = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 6935, 3059, 1613, 660, 33, 5416, 1297, 671, 566, 11917, 8309, 22, 1304, 4865, 1234, 3900, 7702, 2]);