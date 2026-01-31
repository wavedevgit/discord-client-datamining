// modules/user_profile/native/UserProfileMutualGuilds.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserProfileSections;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'columnGap': 4,
        'flexWrap': 'wrap'
    };
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'columnGap': 6
    };
    var3.section = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileMutualGuilds.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserProfileMutualGuilds, environment: var1
        _fun61841: for (var _fun61841_ip = 0;;) switch (_fun61841_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var _closure2_slot0 = var1;
                var0 = _closure1_slot7;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useUserProfileAnalyticsContext;
                var0 = var0.bind(var2)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot1;
                var0 = 6;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                var10 = var0.mutualGuilds;
                var0 = 7;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                if (!var0) {
                    _fun61841_ip = 449;
                    continue _fun61841
                }
            case 117:
                var0 = null;
                if (!(var0 != var10)) {
                    _fun61841_ip = 449;
                    continue _fun61841
                }
            case 126:
                var0 = var10.length;
                var2 = 0;
                if (!(var2 !== var0)) {
                    _fun61841_ip = 449;
                    continue _fun61841
                }
            case 140:
                var1 = var10.slice;
                var0 = 3;
                var2 = var1.bind(var10)(var2, var0);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var0 = var0.guild;
                    return var0;
                };
                var15 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var7.container;
                var0.style = var4;
                var6 = _closure1_slot6;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 12;
                var4 = var13[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var7 = var7.section;
                var4.style = var7;
                var7 = 'button';
                var4.accessibilityRole = var7;
                var7 = function() { // Original name: onPress, environment: var12
                    var0 = _closure1_slot4;
                    var4 = var0.MUTUAL_GUILDS;
                    var3 = _closure2_slot1;
                    var1 = {};
                    var5 = 'PRESS_SECTION';
                    var1.action = var5;
                    var1.section = var4;
                    var6 = undefined;
                    var1 = var3.bind(var6)(var1);
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 8;
                    var3 = var1[var3];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 10;
                    var2 = var1[var2];
                    var3 = var3.bind(var6)(var2);
                    var2 = 9;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var10 = var3.bind(var6)(var2, var1);
                    var2 = {};
                    var0 = _closure2_slot0;
                    var2.user = var0;
                    var0 = function(arg0) { // Original name: onPressMutualGuild, environment: var0
                        var2 = _closure2_slot1;
                        var1 = {};
                        var0 = 'PRESS_MUTUAL_GUILD';
                        var1.action = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 11;
                        var2 = var3[var2];
                        var5 = var4.bind(var0)(var2);
                        var4 = var5.transitionToGuild;
                        var2 = arg0;
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure1_slot1;
                        var1 = 8;
                        var4 = var3[var1];
                        var5 = var2.bind(var0)(var4);
                        var4 = var5.hideActionSheet;
                        var4 = var4.bind(var5)();
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var2.onPressMutualGuild = var0;
                    var9 = 'UserProfileMutualGuildsActionSheet';
                    var7 = 'stack';
                    var11 = var5;
                    var8 = var2;
                    var0 = var11[var4](var10, var9, var8, var7, var6);
                    var0 = undefined;
                    return var0;
                };
                var4.onPress = var7;
                var7 = 13;
                var7 = var13[var7];
                var7 = var9.bind(var3)(var7);
                var8 = var7.GuildIconPile;
                var7 = {};
                var14 = 14;
                var14 = var13[var14];
                var14 = var9.bind(var3)(var14);
                var14 = var14.GuildIconSizes;
                var14 = var14.XXSMALL;
                var7.size = var14;
                var14 = var15.length;
                var7.totalCount = var14;
                var16 = var15.map;
                var14 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var0 = var0.name;
                    return var0;
                };
                var14 = var16.bind(var15)(var14);
                var7.names = var14;
                var14 = var15.map;
                var12 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 14;
                    var1 = var7[var5];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.guild = var0;
                    var6 = _closure1_slot0;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.GuildIconSizes;
                    var5 = var5.XXSMALL;
                    var1.size = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var12 = var14.bind(var15)(var12);
                var7.children = var12;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = 15;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var12 = _closure1_slot1;
                var11 = 16;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var10 = var10.length;
                var10 = var11.bind(var3)(var10);
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 449:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6937, 33, 1297, 6933, 7711, 7713, 3237, 7715, 1307, 5577, 4865, 7767, 7355, 3900, 7716, 2]);