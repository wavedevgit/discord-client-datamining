// modules/user_profile/native/UserProfileMutualsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var2 = arg0;
        var0 = var2.mutualFriend;
        var0 = var0.user;
        var _closure2_slot0 = var0;
        var11 = var2.guildId;
        var8 = var2.onPress;
        var6 = var2.start;
        var5 = var2.end;
        var2 = _closure1_slot11;
        var4 = undefined;
        var10 = var2.bind(var4)();
        var20 = _closure1_slot0;
        var12 = _closure1_slot2;
        var2 = 8;
        var2 = var12[var2];
        var3 = var20.bind(var4)(var2);
        var2 = var3.useAvatarDecoration;
        var18 = var2.bind(var3)(var0);
        var2 = 9;
        var2 = var12[var2];
        var9 = var20.bind(var4)(var2);
        var3 = var9.useStateFromStoresObject;
        var13 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var13;
        var1 = function() { // Environment: var1
            var0 = {};
            var5 = _closure1_slot7;
            var4 = var5.getStatus;
            var1 = _closure2_slot0;
            var3 = var1.id;
            var3 = var4.bind(var5)(var3);
            var0.status = var3;
            var5 = _closure1_slot7;
            var4 = var5.isMobileOnline;
            var3 = var1.id;
            var3 = var4.bind(var5)(var3);
            var0.isMobileOnline = var3;
            var3 = _closure1_slot7;
            var2 = var3.isVROnline;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var0.isVROnline = var1;
            return var0;
        };
        var1 = var3.bind(var9)(var2, var1);
        var17 = var1.status;
        var16 = var1.isMobileOnline;
        var15 = var1.isVROnline;
        var3 = _closure1_slot9;
        var1 = 10;
        var1 = var12[var1];
        var1 = var20.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1.onPress = var8;
        var14 = _closure1_slot9;
        var8 = _closure1_slot1;
        var19 = 11;
        var9 = var12[var19];
        var13 = var8.bind(var4)(var9);
        var9 = {};
        var9.user = var0;
        var19 = var12[var19];
        var19 = var20.bind(var4)(var19);
        var19 = var19.AvatarSizes;
        var19 = var19.REFRESH_MEDIUM_32;
        var9.size = var19;
        var9.avatarDecoration = var18;
        var9.status = var17;
        var9.guildId = var11;
        var9.isMobileOnline = var16;
        var9.isVROnline = var15;
        var15 = true;
        var9.autoStatusCutout = var15;
        var9 = var14.bind(var4)(var13, var9);
        var1.icon = var9;
        var9 = 12;
        var9 = var12[var9];
        var13 = var8.bind(var4)(var9);
        var9 = var13.getName;
        var9 = var9.bind(var13)(var11, var4, var0);
        var1.label = var9;
        var9 = _closure1_slot9;
        var7 = 13;
        var7 = var12[var7];
        var8 = var8.bind(var4)(var7);
        var7 = {};
        var12 = var0.id;
        var7.userId = var12;
        var7.guildId = var11;
        var10 = var10.activityStatusText;
        var7.textStyle = var10;
        var7 = var9.bind(var4)(var8, var7);
        var1.subLabel = var7;
        var1.start = var6;
        var1.end = var5;
        var0 = var0.id;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var1 = function arg0() {
        _fun62052: for (var _fun62052_ip = 0;;) switch (_fun62052_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.mutualGuild;
                var0 = var2.guild;
                var14 = var2.nick;
                var15 = var1.user;
                var7 = var1.onPress;
                var6 = var1.start;
                var5 = var1.end;
                var1 = _closure1_slot11;
                var4 = undefined;
                var10 = var1.bind(var4)();
                var2 = var15.hasAvatarForGuild;
                var1 = var0.id;
                var13 = var2.bind(var15)(var1);
                var3 = _closure1_slot9;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 10;
                var1 = var17[var1];
                var1 = var16.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1.onPress = var7;
                var9 = _closure1_slot9;
                var8 = _closure1_slot1;
                var11 = 14;
                var7 = var17[var11];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.guild = var0;
                var11 = var17[var11];
                var11 = var16.bind(var4)(var11);
                var11 = var11.GuildIconSizes;
                var11 = var11.SMALL_32;
                var7.size = var11;
                var7 = var9.bind(var4)(var8, var7);
                var1.icon = var7;
                var7 = var0.name;
                var1.label = var7;
                var9 = _closure1_slot10;
                var8 = _closure1_slot5;
                var7 = {};
                var10 = var10.mutualGuildSubLabel;
                var7.style = var10;
                var11 = var13;
                if (!var13) {
                    _fun62052_ip = 275;
                    continue _fun62052
                }
            case 201:
                var17 = _closure1_slot9;
                var16 = _closure1_slot1;
                var20 = _closure1_slot2;
                var18 = 11;
                var10 = var20[var18];
                var16 = var16.bind(var4)(var10);
                var10 = {};
                var19 = _closure1_slot0;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.AvatarSizes;
                var18 = var18.SIZE_16;
                var10.size = var18;
                var10.user = var15;
                var18 = var0.id;
                var10.guildId = var18;
                var11 = var17.bind(var4)(var16, var10);
            case 275:
                var10 = new Array(3);
                var10[0] = var11;
                var11 = null;
                var16 = var11 != var14;
                if (!var16) {
                    _fun62052_ip = 345;
                    continue _fun62052
                }
            case 292:
                var19 = _closure1_slot9;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var17 = 15;
                var17 = var20[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var17.children = var14;
                var16 = var19.bind(var4)(var18, var17);
            case 345:
                var10[1] = var16;
                var11 = var11 == var14;
                if (!var11) {
                    _fun62052_ip = 359;
                    continue _fun62052
                }
            case 356:
                var11 = var13;
            case 359:
                if (!var11) {
                    _fun62052_ip = 420;
                    continue _fun62052
                }
            case 362:
                var14 = _closure1_slot9;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 15;
                var12 = var16[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var15 = var15.username;
                var12.children = var15;
                var11 = var14.bind(var4)(var13, var12);
            case 420:
                var10[2] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var1.subLabel = var7;
                var1.start = var6;
                var1.end = var5;
                var0 = var0.id;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'flex': 1,
        'gap': 20
    };
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.paddingTop = var12;
    var4.container = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.paddingTop = var12;
    var12 = 'center';
    var9.alignItems = var12;
    var4.loadingState = var9;
    var9 = {};
    var9.alignItems = var12;
    var4.emptyState = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_SUBTLE;
    var9.color = var12;
    var4.activityStatusText = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9.gap = var10;
    var4.mutualGuildSubLabel = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileMutualsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun62053: for (var _fun62053_ip = 0;;) switch (_fun62053_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.user;
                var _closure2_slot0 = var2;
                var11 = var1.section;
                var3 = var1.guildId;
                var _closure2_slot1 = var3;
                var3 = var1.onPressMutualFriend;
                var _closure2_slot2 = var3;
                var1 = var1.onPressMutualGuild;
                var _closure2_slot3 = var1;
                var1 = _closure1_slot11;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var4 = _closure1_slot4;
                var1 = var4.useState;
                var9 = 0;
                var5 = var1.bind(var4)(var9);
                var4 = _closure1_slot3;
                var1 = 2;
                var1 = var4.bind(var3)(var5, var1);
                var5 = var1[var9];
                var6 = 1;
                var1 = var1[var6];
                var _closure2_slot4 = var1;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                var14 = var1.mutualFriends;
                var12 = var1.mutualGuilds;
                var2 = _closure1_slot0;
                var1 = 17;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useSegmentedControlState;
                var1 = {};
                var1.pageWidth = var5;
                var5 = _closure1_slot8;
                var7 = var5.MUTUAL_GUILDS;
                var5 = 0;
                if (!(var11 === var7)) {
                    _fun62053_ip = 190;
                    continue _fun62053
                }
            case 187:
                var5 = var6;
            case 190:
                var1.defaultIndex = var5;
                var6 = {};
                var5 = 'mutual-friends';
                var6.id = var5;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 18;
                var5 = var11[var5];
                var11 = var7.bind(var3)(var5);
                var7 = null;
                var13 = var7 == var14;
                var5 = undefined;
                if (var13) {
                    _fun62053_ip = 243;
                    continue _fun62053
                }
            case 238:
                var5 = var14.length;
            case 243:
                var5 = var11.bind(var3)(var5);
                var6.label = var5;
                if (!(var7 != var14)) {
                    _fun62053_ip = 402;
                    continue _fun62053
                }
            case 259:
                var5 = var14.length;
                if (!(var9 !== var5)) {
                    _fun62053_ip = 332;
                    continue _fun62053
                }
            case 268:
                var13 = _closure1_slot9;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 20;
                var5 = var15[var5];
                var5 = var11.bind(var3)(var5);
                var11 = var5.UserProfileStackedActionSheetList;
                var5 = {};
                var5.data = var14;
                var14 = function arg0() {
                    var0 = arg0;
                    var0 = var0.user;
                    var0 = var0.id;
                    return var0;
                };
                var5.keyExtractor = var14;
                var14 = function arg0() {
                    var0 = arg0;
                    var6 = var0.item;
                    var _closure3_slot0 = var6;
                    var4 = var0.start;
                    var0 = var0.end;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot12;
                    var1 = {};
                    var1.mutualFriend = var6;
                    var6 = _closure2_slot1;
                    var1.guildId = var6;
                    var5 = function() {
                        var2 = _closure2_slot2;
                        var0 = _closure3_slot0;
                        var0 = var0.user;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var5;
                    var1.start = var4;
                    var1.end = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.renderItem = var14;
                var5 = var13.bind(var3)(var11, var5);
                _fun62053_ip = 400;
                continue _fun62053;
            case 332:
                var14 = _closure1_slot9;
                var13 = _closure1_slot5;
                var11 = {};
                var15 = var10.emptyState;
                var11.style = var15;
                var17 = _closure1_slot9;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var15 = 19;
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.NoMutualFriends;
                var15 = {};
                var15 = var17.bind(var3)(var16, var15);
                var11.children = var15;
                var5 = var14.bind(var3)(var13, var11);
            case 400:
                _fun62053_ip = 448;
                continue _fun62053;
            case 402:
                var14 = _closure1_slot9;
                var13 = _closure1_slot5;
                var11 = {};
                var15 = var10.loadingState;
                var11.style = var15;
                var17 = _closure1_slot9;
                var16 = _closure1_slot6;
                var15 = {};
                var15 = var17.bind(var3)(var16, var15);
                var11.children = var15;
                var5 = var14.bind(var3)(var13, var11);
            case 448:
                var6.page = var5;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var11 = 'mutual-guilds';
                var6.id = var11;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 21;
                var11 = var14[var11];
                var13 = var13.bind(var3)(var11);
                var14 = var7 == var12;
                var11 = undefined;
                if (var14) {
                    _fun62053_ip = 507;
                    continue _fun62053
                }
            case 502:
                var11 = var12.length;
            case 507:
                var11 = var13.bind(var3)(var11);
                var6.label = var11;
                if (!(var7 != var12)) {
                    _fun62053_ip = 666;
                    continue _fun62053
                }
            case 523:
                var7 = var12.length;
                if (!(var9 !== var7)) {
                    _fun62053_ip = 596;
                    continue _fun62053
                }
            case 532:
                var11 = _closure1_slot9;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 20;
                var7 = var13[var7];
                var7 = var9.bind(var3)(var7);
                var9 = var7.UserProfileStackedActionSheetList;
                var7 = {};
                var7.data = var12;
                var12 = function arg0() {
                    var0 = arg0;
                    var0 = var0.guild;
                    var0 = var0.id;
                    return var0;
                };
                var7.keyExtractor = var12;
                var12 = function arg0() {
                    var0 = arg0;
                    var6 = var0.item;
                    var _closure3_slot0 = var6;
                    var4 = var0.start;
                    var0 = var0.end;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.user = var7;
                    var1.mutualGuild = var6;
                    var5 = function() {
                        var2 = _closure2_slot3;
                        var0 = _closure3_slot0;
                        var0 = var0.guild;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var5;
                    var1.start = var4;
                    var1.end = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var7.renderItem = var12;
                var7 = var11.bind(var3)(var9, var7);
                _fun62053_ip = 664;
                continue _fun62053;
            case 596:
                var12 = _closure1_slot9;
                var11 = _closure1_slot5;
                var9 = {};
                var13 = var10.emptyState;
                var9.style = var13;
                var15 = _closure1_slot9;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 22;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.NoMutualServers;
                var13 = {};
                var13 = var15.bind(var3)(var14, var13);
                var9.children = var13;
                var7 = var12.bind(var3)(var11, var9);
            case 664:
                _fun62053_ip = 712;
                continue _fun62053;
            case 666:
                var12 = _closure1_slot9;
                var11 = _closure1_slot5;
                var9 = {};
                var13 = var10.loadingState;
                var9.style = var13;
                var15 = _closure1_slot9;
                var14 = _closure1_slot6;
                var13 = {};
                var13 = var15.bind(var3)(var14, var13);
                var9.children = var13;
                var7 = var12.bind(var3)(var11, var9);
            case 712:
                var6.page = var7;
                var5[1] = var6;
                var1.items = var5;
                var11 = var2.bind(var4)(var1);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = new Array(0);
                var7 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 20;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = true;
                var0.scrollable = var4;
                var9 = _closure1_slot0;
                var4 = 23;
                var5 = var12[var4];
                var5 = var9.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var12[var4];
                var4 = var9.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["l2/aLi"];
                var4 = var5.bind(var6)(var4);
                var0.title = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var10 = var10.container;
                var4.style = var10;
                var4.onLayout = var7;
                var13 = _closure1_slot9;
                var10 = _closure1_slot5;
                var7 = {};
                var14 = 24;
                var14 = var12[var14];
                var14 = var9.bind(var3)(var14);
                var15 = var14.Tabs;
                var14 = {};
                var14.state = var11;
                var14 = var13.bind(var3)(var15, var14);
                var7.children = var14;
                var10 = var13.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var10 = _closure1_slot9;
                var8 = 25;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.SegmentedControlPages;
                var8 = {};
                var8.state = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.MutualGuildRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3610, 6975, 33, 1297, 671, 3962, 566, 4898, 5452, 3961, 7760, 7393, 3941, 7749, 7795, 7796, 7797, 7747, 7754, 7755, 1234, 7801, 7803, 2]);