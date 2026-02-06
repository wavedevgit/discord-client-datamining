// modules/parent_tools/native/FamilyCenterTopActivity.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.gap = var12;
    var3.container = var8;
    var8 = {};
    var8.flex = var11;
    var3.section = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'gap': null,
        'flexWrap': 'wrap'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.gap = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingBottom = var11;
    var3.avatarList = var8;
    var8 = {
        'width': '100%',
        'alignItems': 'flex-start'
    };
    var3.touchableHitBox = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.borderColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGHEST;
    var8.backgroundColor = var9;
    var3.guildAvatar = var8;
    var8 = {};
    var9 = 12;
    var8.fontSize = var9;
    var3.guildAvatarText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterTopActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun82466: for (var _fun82466_ip = 0;;) switch (_fun82466_ip) {
            case 0:
                var0 = _closure1_slot9;
                var4 = undefined;
                var16 = var0.bind(var4)();
                var _closure2_slot0 = var16;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var0 = var3[var1];
                var8 = var2.bind(var4)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var0;
                var5 = function() { // Environment: var15
                    var1 = _closure1_slot6;
                    var0 = var1.getTopUserActivities;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var22 = var7.bind(var8)(var6, var5);
                var _closure2_slot1 = var22;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    var1 = _closure1_slot6;
                    var0 = var1.getTopGuildActivities;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var17 = var2.bind(var3)(var1, var0);
                var _closure2_slot2 = var17;
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var22;
                var0 = function() { // Environment: var15
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 10;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 9;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2.topUserActivities = var1;
                    var1 = 'FamilyCenterTopUsers';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var18 = var2.bind(var3)(var0, var1);
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var17;
                var0 = function() { // Environment: var15
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 10;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 11;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = _closure2_slot2;
                    var2.topGuildActivities = var1;
                    var1 = 'FamilyCenterTopServers';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var14 = var2.bind(var3)(var0, var1);
                var0 = var22.length;
                var7 = 0;
                if (!(var7 === var0)) {
                    _fun82466_ip = 193;
                    continue _fun82466
                }
            case 179:
                var1 = var17.length;
                var0 = null;
                if (!(var7 !== var1)) {
                    _fun82466_ip = 802;
                    continue _fun82466
                }
            case 193:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var16.container;
                var1.style = var5;
                var5 = var22.length;
                var6 = var5 > var7;
                if (!var6) {
                    _fun82466_ip = 496;
                    continue _fun82466
                }
            case 227:
                var9 = _closure1_slot7;
                var8 = _closure1_slot4;
                var5 = {};
                var10 = var16.section;
                var5.style = var10;
                var12 = _closure1_slot8;
                var24 = _closure1_slot1;
                var25 = _closure1_slot2;
                var10 = 12;
                var10 = var25[var10];
                var11 = var24.bind(var4)(var10);
                var10 = {};
                var19 = var16.touchableHitBox;
                var10.style = var19;
                var10.onPress = var18;
                var18 = 'button';
                var10.accessibilityRole = var18;
                var23 = _closure1_slot0;
                var21 = 13;
                var18 = var25[var21];
                var18 = var23.bind(var4)(var18);
                var26 = var18.intl;
                var19 = var26.string;
                var20 = 14;
                var18 = var25[var20];
                var18 = var24.bind(var4)(var18);
                var18 = var18.BxbvS7;
                var18 = var19.bind(var26)(var18);
                var10.accessibilityLabel = var18;
                var18 = 15;
                var18 = var25[var18];
                var18 = var23.bind(var4)(var18);
                var19 = var18.Text;
                var18 = {};
                var26 = 'text-sm/semibold';
                var18.variant = var26;
                var21 = var25[var21];
                var21 = var23.bind(var4)(var21);
                var23 = var21.intl;
                var21 = var23.string;
                var20 = var25[var20];
                var20 = var24.bind(var4)(var20);
                var20 = var20.BxbvS7;
                var20 = var21.bind(var23)(var20);
                var18.children = var20;
                var19 = var9.bind(var4)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var19 = {};
                var20 = var16.avatarList;
                var19.style = var20;
                var21 = var22.map;
                var20 = function(arg0) { // Environment: var15
                    _fun82471: for (var _fun82471_ip = 0;;) switch (_fun82471_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getUser;
                            var0 = arg0;
                            var0 = var0.user_id;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            if (var2) {
                                _fun82471_ip = 113;
                                continue _fun82471
                            }
                        case 36:
                            var5 = _closure1_slot7;
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 16;
                            var2 = var8[var6];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var2.user = var1;
                            var7 = _closure1_slot0;
                            var6 = var8[var6];
                            var6 = var7.bind(var4)(var6);
                            var6 = var6.AvatarSizes;
                            var6 = var6.SMALL;
                            var2.size = var6;
                            var2.guildId = var4;
                            var1 = var1.id;
                            var0 = var5.bind(var4)(var3, var2, var1);
                        case 113:
                            return var0;
                    }
                };
                var20 = var21.bind(var22)(var20);
                var19.children = var20;
                var19 = var9.bind(var4)(var8, var19);
                var18[1] = var19;
                var10.children = var18;
                var10 = var12.bind(var4)(var11, var10);
                var5.children = var10;
                var6 = var9.bind(var4)(var8, var5);
            case 496:
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var17.length;
                var6 = var6 > var7;
                if (!var6) {
                    _fun82466_ip = 788;
                    continue _fun82466
                }
            case 519:
                var9 = _closure1_slot7;
                var8 = _closure1_slot4;
                var7 = {};
                var10 = var16.section;
                var7.style = var10;
                var12 = _closure1_slot8;
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var10 = 12;
                var10 = var22[var10];
                var11 = var21.bind(var4)(var10);
                var10 = {};
                var18 = var16.touchableHitBox;
                var10.style = var18;
                var10.onPress = var14;
                var14 = 'button';
                var10.accessibilityRole = var14;
                var20 = _closure1_slot0;
                var19 = 13;
                var13 = var22[var19];
                var13 = var20.bind(var4)(var13);
                var23 = var13.intl;
                var14 = var23.string;
                var18 = 14;
                var13 = var22[var18];
                var13 = var21.bind(var4)(var13);
                var13 = var13.Lq9Set;
                var13 = var14.bind(var23)(var13);
                var10.accessibilityLabel = var13;
                var13 = 15;
                var13 = var22[var13];
                var13 = var20.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {};
                var23 = 'text-sm/semibold';
                var13.variant = var23;
                var19 = var22[var19];
                var19 = var20.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var4)(var18);
                var18 = var18.Lq9Set;
                var18 = var19.bind(var20)(var18);
                var13.children = var18;
                var14 = var9.bind(var4)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = {};
                var16 = var16.avatarList;
                var14.style = var16;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var15
                    _fun82472: for (var _fun82472_ip = 0;;) switch (_fun82472_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getGuild;
                            var0 = arg0;
                            var0 = var0.guild_id;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            if (var2) {
                                _fun82472_ip = 135;
                                continue _fun82472
                            }
                        case 34:
                            var5 = _closure1_slot7;
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 17;
                            var2 = var8[var6];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var9 = _closure2_slot0;
                            var10 = var9.guildAvatar;
                            var2.style = var10;
                            var9 = var9.guildAvatarText;
                            var2.textStyle = var9;
                            var2.guild = var1;
                            var7 = _closure1_slot0;
                            var6 = var8[var6];
                            var6 = var7.bind(var4)(var6);
                            var6 = var6.GuildIconSizes;
                            var6 = var6.SMALL;
                            var2.size = var6;
                            var1 = var1.id;
                            var0 = var5.bind(var4)(var3, var2, var1);
                        case 135:
                            return var0;
                    }
                };
                var15 = var16.bind(var17)(var15);
                var14.children = var15;
                var14 = var9.bind(var4)(var8, var14);
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 788:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 802:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 4594, 33, 1297, 671, 632, 3280, 10552, 1307, 10553, 6808, 1234, 1858, 3943, 5457, 7420, 2]);