// modules/search/native/components/list/rows/MessageRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun105557: for (var _fun105557_ip = 0;;) switch (_fun105557_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.channel;
                var _closure2_slot0 = var7;
                var8 = var1.muted;
                var5 = var1.isFavorite;
                var1 = _closure1_slot13;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var10 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 11;
                var1 = var15[var1];
                var4 = var10.bind(var3)(var1);
                var2 = var4.useStateFromStores;
                var9 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    _fun105558: for (var _fun105558_ip = 0;;) switch (_fun105558_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot0;
                            var0 = var0.guild_id;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun105558_ip = 46;
                                continue _fun105558
                            }
                        case 40:
                            var0 = var1.rulesChannelId;
                        case 46:
                            return var0;
                    }
                };
                var9 = var2.bind(var4)(var1, var0);
                var0 = 12;
                var0 = var15[var0];
                var2 = var10.bind(var3)(var0);
                var1 = var2.getChannelIcon;
                var0 = {};
                var4 = var7.id;
                var4 = var9 === var4;
                var0.isRulesChannel = var4;
                var16 = var1.bind(var2)(var7, var0);
                var17 = _closure1_slot1;
                var0 = 13;
                var0 = var15[var0];
                var0 = var17.bind(var3)(var0);
                var13 = var0.bind(var3)(var7);
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var11.header;
                var0.style = var4;
                var12 = _closure1_slot11;
                var14 = 14;
                var4 = var15[var14];
                var9 = var17.bind(var3)(var4);
                var4 = {};
                var4.source = var16;
                var16 = var15[var14];
                var16 = var17.bind(var3)(var16);
                var16 = var16.Sizes;
                var16 = var16.REFRESH_SMALL_16;
                var4.size = var16;
                var16 = var11.channelIcon;
                var4.style = var16;
                var9 = var12.bind(var3)(var9, var4);
                var4 = new Array(5);
                var4[0] = var9;
                var12 = _closure1_slot11;
                var9 = 15;
                var9 = var15[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'lineClamp': 1,
                    'variant': 'text-sm/semibold',
                    'color': 'interactive-text-default'
                };
                var15 = var11.channelName;
                var9.style = var15;
                var9.children = var13;
                var9 = var12.bind(var3)(var10, var9);
                var4[1] = var9;
                if (!var8) {
                    _fun105557_ip = 382;
                    continue _fun105557
                }
            case 302:
                var12 = _closure1_slot11;
                var15 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = var13[var14];
                var10 = var15.bind(var3)(var9);
                var9 = {};
                var16 = 16;
                var16 = var13[var16];
                var16 = var15.bind(var3)(var16);
                var9.source = var16;
                var13 = var13[var14];
                var13 = var15.bind(var3)(var13);
                var13 = var13.Sizes;
                var13 = var13.EXTRA_SMALL;
                var9.size = var13;
                var13 = var11.channelStatus;
                var9.style = var13;
                var8 = var12.bind(var3)(var10, var9);
            case 382:
                var4[2] = var8;
                if (!var5) {
                    _fun105557_ip = 469;
                    continue _fun105557
                }
            case 389:
                var10 = _closure1_slot11;
                var13 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = var12[var14];
                var9 = var13.bind(var3)(var8);
                var8 = {};
                var15 = 17;
                var15 = var12[var15];
                var15 = var13.bind(var3)(var15);
                var8.source = var15;
                var12 = var12[var14];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Sizes;
                var12 = var12.EXTRA_SMALL;
                var8.size = var12;
                var11 = var11.channelStatus;
                var8.style = var11;
                var5 = var10.bind(var3)(var9, var8);
            case 469:
                var4[3] = var5;
                var5 = var7.isSystemDM;
                var5 = var5.bind(var7)();
                if (!var5) {
                    _fun105557_ip = 550;
                    continue _fun105557
                }
            case 486:
                var8 = _closure1_slot11;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 18;
                var6 = var11[var9];
                var7 = var10.bind(var3)(var6);
                var6 = {};
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.Types;
                var9 = var9.SYSTEM_DM;
                var6.type = var9;
                var9 = true;
                var6.verified = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 550:
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.message;
        var8 = var0.channel;
        var3 = _closure1_slot11;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 19;
        var0 = var7[var5];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var9 = var4.author;
        var0.user = var9;
        var8 = var8.guild_id;
        var0.guildId = var8;
        var6 = _closure1_slot0;
        var5 = var7[var5];
        var5 = var6.bind(var2)(var5);
        var5 = var5.AvatarSizes;
        var5 = var5.LARGE_48;
        var0.size = var5;
        var4 = var4.author;
        var4 = var4.avatarDecoration;
        var0.avatarDecoration = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun105560: for (var _fun105560_ip = 0;;) switch (_fun105560_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.message;
                var _closure2_slot0 = var8;
                var15 = var1.channel;
                var _closure2_slot1 = var15;
                var14 = var1.muted;
                var1 = _closure1_slot13;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var1 = var8.author;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getName;
                    var0 = _closure2_slot0;
                    var0 = var0.author;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var4.bind(var5)(var1, var2);
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var15;
                var0 = function() { // Environment: var0
                    _fun105562: for (var _fun105562_ip = 0;;) switch (_fun105562_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = var2.isDM;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun105562_ip = 34;
                                continue _fun105562
                            }
                        case 20:
                            var3 = _closure2_slot1;
                            var2 = var3.isGroupDM;
                            var1 = var2.bind(var3)();
                        case 34:
                            if (!var1) {
                                _fun105562_ip = 66;
                                continue _fun105562
                            }
                        case 37:
                            var0 = _closure2_slot1;
                            var2 = var0.recipients;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 21;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getUser;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var16 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 22;
                var0 = var10[var0];
                var1 = var16.bind(var3)(var0);
                var0 = var1.useSearchMessageTimestamp;
                var0 = var0.bind(var1)(var8, var15);
                var11 = var0.timestamp;
                var12 = var0.timestampAccessibilityLabel;
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var9.labelContainer;
                var0.style = var4;
                var7 = _closure1_slot12;
                var5 = _closure1_slot4;
                var4 = {};
                var13 = var9.channelName;
                var4.style = var13;
                var17 = _closure1_slot11;
                var13 = 15;
                var10 = var10[var13];
                var10 = var16.bind(var3)(var10);
                var16 = var10.Text;
                var10 = {
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var19 = var9.channelName;
                var10.style = var19;
                var10.children = var18;
                var16 = var17.bind(var3)(var16, var10);
                var10 = new Array(3);
                var10[0] = var16;
                if (!var14) {
                    _fun105560_ip = 341;
                    continue _fun105560
                }
            case 258:
                var18 = _closure1_slot11;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 14;
                var16 = var21[var19];
                var17 = var20.bind(var3)(var16);
                var16 = {};
                var22 = 16;
                var22 = var21[var22];
                var22 = var20.bind(var3)(var22);
                var16.source = var22;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.Sizes;
                var19 = var19.EXTRA_SMALL;
                var16.size = var19;
                var19 = var9.channelStatus;
                var16.style = var19;
                var14 = var18.bind(var3)(var17, var16);
            case 341:
                var10[1] = var14;
                var14 = var15.isSystemDM;
                var14 = var14.bind(var15)();
                if (!var14) {
                    _fun105560_ip = 422;
                    continue _fun105560
                }
            case 358:
                var17 = _closure1_slot11;
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var18 = 18;
                var15 = var20[var18];
                var16 = var19.bind(var3)(var15);
                var15 = {};
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.Types;
                var18 = var18.SYSTEM_DM;
                var15.type = var18;
                var18 = true;
                var15.verified = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 422:
                var10[2] = var14;
                var4.children = var10;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var10 = _closure1_slot11;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var13];
                var5 = var7.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'variant': 'text-xs/medium',
                    'color': 'interactive-text-active',
                    'lineClamp': 1
                };
                var13 = var9.timestamp;
                var5.style = var13;
                var5.accessibilityLabel = var12;
                var5.children = var11;
                var5 = var10.bind(var3)(var7, var5);
                var4[1] = var5;
                var7 = var8.hasFlag;
                var5 = _closure1_slot10;
                var5 = var5.SUPPRESS_NOTIFICATIONS;
                var10 = var7.bind(var8)(var5);
                var7 = null;
                if (!var10) {
                    _fun105560_ip = 594;
                    continue _fun105560
                }
            case 538:
                var12 = _closure1_slot11;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 23;
                var10 = var13[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.BellZIcon;
                var10 = {};
                var13 = 'xs';
                var10.size = var13;
                var13 = var9.suppressNotificationsIcon;
                var10.style = var13;
                var7 = var12.bind(var3)(var11, var10);
            case 594:
                var4[2] = var7;
                var7 = var8.isPoll;
                var7 = var7.bind(var8)();
                var5 = null;
                if (!var7) {
                    _fun105560_ip = 655;
                    continue _fun105560
                }
            case 613:
                var8 = _closure1_slot11;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 24;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var9 = var9.pollBadge;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 655:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun105564: for (var _fun105564_ip = 0;;) switch (_fun105564_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.message;
                var2 = var0.channel;
                var0 = _closure1_slot13;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var7 = var1.bind(var3)(var0);
                var5 = var7.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var13 = var5.bind(var7)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 25;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)(var8);
                var17 = var0.nick;
                var21 = var0.colorString;
                var16 = var0.colorStrings;
                var0 = 'username';
                if (!(var0 === var13)) {
                    _fun105564_ip = 131;
                    continue _fun105564
                }
            case 125:
                var0 = null;
                if (!(var0 == var21)) {
                    _fun105564_ip = 135;
                    continue _fun105564
                }
            case 131:
                var18 = {};
                _fun105564_ip = 144;
                continue _fun105564;
            case 135:
                var0 = {};
                var0.color = var21;
                var18 = var0;
            case 144:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 26;
                var5 = var4[var0];
                var7 = var1.bind(var3)(var5);
                var5 = var7.useProcessColorStringsArray;
                var19 = var5.bind(var7)(var16);
                var0 = var4[var0];
                var10 = var1.bind(var3)(var0);
                var7 = var10.useIsRoleStyleAndRoleColorsEligibleForERC;
                var26 = var2.guild_id;
                var0 = var8.author;
                var25 = var0.id;
                var27 = var10;
                var24 = var13;
                var23 = var19;
                var20 = var27[var7](var26, var25, var24, var23, var22);
                var0 = 22;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useSearchMessageTimestamp;
                var0 = var0.bind(var1)(var8, var2);
                var11 = var0.timestamp;
                var12 = var0.timestampAccessibilityLabel;
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var9.labelContainer;
                var0.style = var4;
                var7 = _closure1_slot12;
                var5 = _closure1_slot4;
                var4 = {};
                var10 = var9.channelName;
                var4.style = var10;
                var10 = 'dot';
                var13 = var10 === var13;
                if (!var13) {
                    _fun105564_ip = 312;
                    continue _fun105564
                }
            case 306:
                var10 = null;
                var13 = var10 != var21;
            case 312:
                if (!var13) {
                    _fun105564_ip = 369;
                    continue _fun105564
                }
            case 315:
                var15 = _closure1_slot11;
                var14 = _closure1_slot0;
                var22 = _closure1_slot2;
                var10 = 27;
                var10 = var22[var10];
                var10 = var14.bind(var3)(var10);
                var14 = var10.RoleDot;
                var10 = {};
                var22 = 'small';
                var10.size = var22;
                var10.color = var21;
                var10.colors = var16;
                var13 = var15.bind(var3)(var14, var10);
            case 369:
                var10 = new Array(2);
                var10[0] = var13;
                var16 = _closure1_slot11;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var13 = 15;
                var14 = var14[var13];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-sm/semibold',
                    'color': 'interactive-text-active',
                    'lineClamp': 1
                };
                var14.style = var18;
                var18 = undefined;
                if (!var20) {
                    _fun105564_ip = 432;
                    continue _fun105564
                }
            case 429:
                var18 = var19;
            case 432:
                var14.gradientColors = var18;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var10[1] = var14;
                var4.children = var10;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var10 = _closure1_slot11;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var13];
                var5 = var7.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default',
                    'lineClamp': 1
                };
                var13 = var9.timestamp;
                var5.style = var13;
                var5.accessibilityLabel = var12;
                var5.children = var11;
                var5 = var10.bind(var3)(var7, var5);
                var4[1] = var5;
                var7 = var8.hasFlag;
                var5 = _closure1_slot10;
                var5 = var5.SUPPRESS_NOTIFICATIONS;
                var10 = var7.bind(var8)(var5);
                var7 = null;
                if (!var10) {
                    _fun105564_ip = 619;
                    continue _fun105564
                }
            case 563:
                var12 = _closure1_slot11;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 23;
                var10 = var13[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.BellZIcon;
                var10 = {};
                var13 = 'xs';
                var10.size = var13;
                var13 = var9.suppressNotificationsIcon;
                var10.style = var13;
                var7 = var12.bind(var3)(var11, var10);
            case 619:
                var4[2] = var7;
                var7 = var8.isPoll;
                var7 = var7.bind(var8)();
                var5 = null;
                if (!var7) {
                    _fun105564_ip = 680;
                    continue _fun105564
                }
            case 638:
                var8 = _closure1_slot11;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 24;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var9 = var9.pollBadge;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 680:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Platform;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageFlags;
    var _closure1_slot10 = var3;
    var11 = 8;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginRight': 5,
        'alignSelf': 'center'
    };
    var3.channelIcon = var9;
    var9 = {
        'marginLeft': 5,
        'alignSelf': 'center'
    };
    var12 = 10;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var9.tintColor = var12;
    var3.channelStatus = var9;
    var12 = 'row';
    var9 = {
        'flexDirection': 'row',
        'width': '100%',
        'marginBottom': 2,
        'alignItems': 'center'
    };
    var3.labelContainer = var9;
    var9 = {};
    var9.flexDirection = var12;
    var3.channelName = var9;
    var9 = {};
    var9.marginLeft = var11;
    var3.timestamp = var9;
    var9 = {
        'marginLeft': 8,
        'opacity': 0.8
    };
    var3.timestampMuted = var9;
    var9 = {
        'flexDirection': 'row',
        'marginRight': 16,
        'marginBottom': 12
    };
    var3.header = var9;
    var9 = {};
    var12 = 'flex-start';
    var9.alignItems = var12;
    var3.body = var9;
    var9 = {};
    var9.marginLeft = var11;
    var3.pollBadge = var9;
    var9 = {};
    var9.marginLeft = var10;
    var3.suppressNotificationsIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105566: for (var _fun105566_ip = 0;;) switch (_fun105566_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.message;
                var _closure2_slot0 = var15;
                var2 = var0.onPress;
                var _closure2_slot1 = var2;
                var11 = var0.lineClamp;
                var10 = var0.messageSizeCacheRef;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var0 = _closure1_slot13;
                var5 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 11;
                var0 = var0[var8];
                var9 = var3.bind(var4)(var0);
                var6 = var9.useStateFromStores;
                var0 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channel_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var6.bind(var9)(var3, var0);
                var _closure2_slot2 = var12;
                var0 = null;
                var6 = var0 == var12;
                var3 = undefined;
                if (var6) {
                    _fun105566_ip = 130;
                    continue _fun105566
                }
            case 125:
                var3 = var12.guild_id;
            case 130:
                _closure2_slot3 = var3;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var9 = var3[var8];
                var16 = var6.bind(var4)(var9);
                var14 = var16.useStateFromStores;
                var9 = _closure1_slot6;
                var13 = new Array(1);
                var13[0] = var9;
                var9 = function() { // Environment: var1
                    _fun105568: for (var _fun105568_ip = 0;;) switch (_fun105568_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun105568_ip = 43;
                                continue _fun105568
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.isFavorite;
                            var1 = _closure2_slot0;
                            var1 = var1.channel_id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var9 = var14.bind(var16)(var13, var9);
                _closure2_slot4 = var9;
                var3 = var3[var8];
                var13 = var6.bind(var4)(var3);
                var8 = var13.useStateFromStores;
                var3 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var1
                    var3 = _closure1_slot9;
                    var2 = var3.isChannelMuted;
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot0;
                    var0 = var0.channel_id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var17 = var8.bind(var13)(var6, var3);
                _closure2_slot5 = var17;
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var13 = var15.channel_id;
                var3 = new Array(3);
                var3[0] = var13;
                var13 = var15.id;
                var3[1] = var13;
                var3[2] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var3 = var0.channel_id;
                    var1.channelId = var3;
                    var0 = var0.id;
                    var1.messageId = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var6.bind(var8)(var2, var3);
                var13 = _closure1_slot3;
                var8 = var13.useMemo;
                var3 = var0 == var12;
                var2 = undefined;
                if (var3) {
                    _fun105566_ip = 299;
                    continue _fun105566
                }
            case 294:
                var2 = var12.guild_id;
            case 299:
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    _fun105571: for (var _fun105571_ip = 0;;) switch (_fun105571_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun105571_ip = 27;
                                continue _fun105571
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var0 = var2.guild_id;
                        case 27:
                            if (!(var1 != var0)) {
                                _fun105571_ip = 40;
                                continue _fun105571
                            }
                        case 31:
                            var0 = _closure1_slot17;
                            _fun105571_ip = 47;
                            continue _fun105571;
                        case 40:
                            var0 = _closure1_slot16;
                        case 47:
                            return var0;
                    }
                };
                var16 = var8.bind(var13)(var2, var3);
                var8 = _closure1_slot3;
                var3 = var8.useMemo;
                var2 = new Array(3);
                var2[0] = var12;
                var2[1] = var9;
                var2[2] = var17;
                var1 = function() { // Environment: var1
                    _fun105572: for (var _fun105572_ip = 0;;) switch (_fun105572_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 == var1;
                            var4 = undefined;
                            var1 = undefined;
                            if (var2) {
                                _fun105572_ip = 29;
                                continue _fun105572
                            }
                        case 20:
                            var2 = _closure2_slot2;
                            var1 = var2.guild_id;
                        case 29:
                            var1 = var0 != var1;
                            var0 = null;
                            if (!var1) {
                                _fun105572_ip = 83;
                                continue _fun105572
                            }
                        case 38:
                            var3 = _closure1_slot11;
                            var2 = _closure1_slot14;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var1.channel = var6;
                            var6 = _closure2_slot5;
                            var1.muted = var6;
                            var5 = _closure2_slot4;
                            var1.isFavorite = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 83:
                            return var0;
                    }
                };
                var8 = var3.bind(var8)(var1, var2);
                var1 = var0 == var12;
                var0 = null;
                if (var1) {
                    _fun105566_ip = 582;
                    continue _fun105566
                }
            case 370:
                var3 = _closure1_slot11;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 28;
                var1 = var14[var1];
                var1 = var13.bind(var4)(var1);
                var2 = var1.SearchListRow;
                var1 = {};
                var1.header = var8;
                var18 = _closure1_slot11;
                var9 = _closure1_slot15;
                var8 = {};
                var8.message = var15;
                var8.channel = var12;
                var8 = var18.bind(var4)(var9, var8);
                var1.icon = var8;
                var9 = _closure1_slot11;
                var8 = {};
                var8.message = var15;
                var8.channel = var12;
                var8.muted = var17;
                var8 = var9.bind(var4)(var16, var8);
                var1.label = var8;
                var9 = _closure1_slot11;
                var7 = 29;
                var7 = var14[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.NativeMessageChannelRowPreview;
                var7 = {};
                var7.message = var15;
                var7.channel = var12;
                var12 = false;
                var7.muted = var12;
                var12 = 30;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.ChannelListLayoutTypes;
                var12 = var12.COZY;
                var7.layout = var12;
                var12 = 'interactive-text-default';
                var7.color = var12;
                var7.lineClamp = var11;
                var7.messageSizeCacheRef = var10;
                var7 = var9.bind(var4)(var8, var7);
                var1.subLabel = var7;
                var1.onPress = var6;
                var5 = var5.body;
                var1.bodyStyle = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 582:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/MessageRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1375, 1372, 1410, 4303, 660, 33, 1297, 671, 566, 4807, 4792, 4086, 3941, 8757, 8580, 5767, 5452, 3236, 6953, 13757, 13173, 13758, 3983, 6677, 8192, 13730, 8789, 8802, 2]);