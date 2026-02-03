// modules/navbars/native/components/ChannelNavbar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var11 = 1;
    var3 = var6[var11];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.THREAD_CHANNEL_TYPES;
    var _closure1_slot6 = var3;
    var10 = 4;
    var3 = var6[var10];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = var3.ChannelTypes;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.ContentDismissActionType;
    var _closure1_slot14 = var4;
    var3 = var3.DismissibleContentGroupName;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.StatusSizes;
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot17 = var4;
    var3 = var3.jsxs;
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': '100%',
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.navbarTitleContainer = var9;
    var9 = {};
    var14 = 15;
    var14 = var6[var14];
    var17 = var13.bind(var0)(var14);
    var16 = var12.DISPLAY_SEMIBOLD;
    var12 = 16;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var15 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var14 = 18;
    var19 = var17.bind(var0)(var16, var15, var14);
    var20 = var9;
    var14 = copyDataProperties(var20, var19);
    var14 = 'flexShrink';
    var9[var14] = var11;
    var3.navbarTitlePrimaryText = var9;
    var9 = {
        'fontSize': 12,
        'lineHeight': 16,
        'color': null,
        'marginTop': 4294967292
    };
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_MUTED;
    var9.color = var14;
    var3.navbarTitleSecondaryText = var9;
    var9 = {
        'height': 18,
        'width': 18,
        'marginRight': 8
    };
    var3.channelIcon = var9;
    var9 = {};
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.CHANNEL_ICON;
    var9.color = var14;
    var3.channelIconColor = var9;
    var9 = {
        'height': 20,
        'width': 20,
        'tintColor': null,
        'marginTop': 0,
        'marginRight': 8
    };
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var9.tintColor = var12;
    var3.homeIcon = var9;
    var9 = {};
    var9.marginRight = var10;
    var3.premiumIcon = var9;
    var9 = {
        'height': 16,
        'width': 16,
        'marginRight': 4
    };
    var3.channelEmoji = var9;
    var9 = {
        'marginLeft': 1,
        'marginTop': 4
    };
    var3.status = var9;
    var9 = {
        'flex': 1,
        'flexGrow': 1
    };
    var3.channelTextContainer = var9;
    var9 = {};
    var9.flexGrow = var11;
    var3.channelNameContainer = var9;
    var9 = {};
    var11 = 'left';
    var9.textAlign = var11;
    var3.channelName = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.flexRow = var9;
    var9 = {};
    var9.marginStart = var10;
    var3.premiumAccessory = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot19 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun91442: for (var _fun91442_ip = 0;;) switch (_fun91442_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.onPressTitle;
                var11 = var2.channelId;
                var _closure2_slot0 = var11;
                var9 = var2.guildId;
                var0 = var2.threadDraft;
                var _closure2_slot1 = var0;
                var4 = var2.style;
                var2 = _closure1_slot19;
                var3 = undefined;
                var7 = var2.bind(var3)();
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var15 = 17;
                var8 = var10[var15];
                var14 = var2.bind(var3)(var8);
                var13 = var14.useStateFromStores;
                var8 = _closure1_slot5;
                var12 = new Array(1);
                var12[0] = var8;
                var8 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var13.bind(var14)(var12, var8);
                var8 = var10[var15];
                var17 = var2.bind(var3)(var8);
                var16 = var17.useStateFromStores;
                var14 = _closure1_slot7;
                var12 = new Array(1);
                var12[0] = var14;
                var8 = function() { // Environment: var1
                    _fun91444: for (var _fun91444_ip = 0;;) switch (_fun91444_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var0 = _closure1_slot13;
                            var3 = var0.GUILD_HOME;
                            var0 = null;
                            if (!(var4 !== var3)) {
                                _fun91444_ip = 64;
                                continue _fun91444
                            }
                        case 26:
                            var4 = _closure2_slot0;
                            var3 = _closure1_slot13;
                            var3 = var3.MEMBER_SAFETY;
                            var0 = null;
                            if (!(var4 !== var3)) {
                                _fun91444_ip = 64;
                                continue _fun91444
                            }
                        case 46:
                            var3 = _closure1_slot7;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 64:
                            return var0;
                    }
                };
                var12 = var16.bind(var17)(var12, var8);
                var _closure2_slot2 = var12;
                var8 = var10[var15];
                var18 = var2.bind(var3)(var8);
                var17 = var18.useStateFromStores;
                var8 = _closure1_slot8;
                var16 = new Array(1);
                var16[0] = var8;
                var8 = function() { // Environment: var1
                    _fun91445: for (var _fun91445_ip = 0;;) switch (_fun91445_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot2;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun91445_ip = 44;
                                continue _fun91445
                            }
                        case 30:
                            var4 = _closure2_slot2;
                            var3 = var4.getGuildId;
                            var0 = var3.bind(var4)();
                        case 44:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var8 = var17.bind(var18)(var16, var8);
                var15 = var10[var15];
                var17 = var2.bind(var3)(var15);
                var16 = var17.useStateFromStores;
                var15 = new Array(1);
                var15[0] = var14;
                var14 = new Array(2);
                var14[0] = var12;
                var14[1] = var0;
                var1 = function() { // Environment: var1
                    _fun91446: for (var _fun91446_ip = 0;;) switch (_fun91446_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            if (!(var4 != var0)) {
                                _fun91446_ip = 27;
                                continue _fun91446
                            }
                        case 13:
                            var0 = _closure2_slot1;
                            var0 = var0.parentChannelId;
                            if (!(var4 == var0)) {
                                _fun91446_ip = 116;
                                continue _fun91446
                            }
                        case 27:
                            var0 = _closure2_slot2;
                            var2 = var4 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun91446_ip = 114;
                                continue _fun91446
                            }
                        case 40:
                            var2 = _closure2_slot2;
                            var2 = var2.parent_id;
                            var2 = var4 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun91446_ip = 114;
                                continue _fun91446
                            }
                        case 59:
                            var6 = _closure1_slot6;
                            var5 = var6.has;
                            var3 = _closure2_slot2;
                            var3 = var3.type;
                            var3 = var5.bind(var6)(var3);
                            var0 = null;
                            if (!var3) {
                                _fun91446_ip = 114;
                                continue _fun91446
                            }
                        case 90:
                            var4 = _closure1_slot7;
                            var3 = var4.getChannel;
                            var2 = _closure2_slot2;
                            var2 = var2.parent_id;
                            var0 = var3.bind(var4)(var2);
                        case 114:
                            _fun91446_ip = 143;
                            continue _fun91446;
                        case 116:
                            var3 = _closure1_slot7;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot1;
                            var1 = var1.parentChannelId;
                            var0 = var2.bind(var3)(var1);
                        case 143:
                            return var0;
                    }
                };
                var15 = var16.bind(var17)(var15, var1, var14);
                var17 = 21;
                var1 = var10[var17];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useSelectedSpecialNavigationPath;
                var14 = var1.bind(var2)();
                var2 = _closure1_slot1;
                var1 = 22;
                var1 = var10[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var19 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 18;
                var16 = var2[var10];
                var16 = var19.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var2 = var2[var10];
                var2 = var19.bind(var3)(var2);
                var2 = var2.t;
                if (var13) {
                    _fun91442_ip = 337;
                    continue _fun91442
                }
            case 324:
                var13 = var2.ZTNur7;
                var13 = var16.bind(var18)(var13);
                _fun91442_ip = 348;
                continue _fun91442;
            case 337:
                var2 = var2.ai6Lbr;
                var13 = var16.bind(var18)(var2);
            case 348:
                var16 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var17];
                var2 = var16.bind(var3)(var2);
                var2 = var2.SpecialNavigationPath;
                var2 = var2.FRIENDS;
                if (!(var14 !== var2)) {
                    _fun91442_ip = 1940;
                    continue _fun91442
                }
            case 384:
                var2 = _closure1_slot13;
                var2 = var2.GUILD_HOME;
                if (!(var11 !== var2)) {
                    _fun91442_ip = 1762;
                    continue _fun91442
                }
            case 401:
                var2 = _closure1_slot13;
                var2 = var2.MEMBER_SAFETY;
                if (!(var11 !== var2)) {
                    _fun91442_ip = 1584;
                    continue _fun91442
                }
            case 418:
                if (var1) {
                    _fun91442_ip = 1436;
                    continue _fun91442
                }
            case 424:
                var11 = null;
                if (!(var11 != var0)) {
                    _fun91442_ip = 453;
                    continue _fun91442
                }
            case 430:
                if (!(var11 != var12)) {
                    _fun91442_ip = 1150;
                    continue _fun91442
                }
            case 437:
                var1 = var12.isForumLikeChannel;
                var1 = var1.bind(var12)();
                if (!var1) {
                    _fun91442_ip = 1150;
                    continue _fun91442
                }
            case 453:
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 28;
                var1 = var14[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.shouldNSFWGateGuild;
                var1 = var1.bind(var2)(var9);
                if (var1) {
                    _fun91442_ip = 1056;
                    continue _fun91442
                }
            case 490:
                if (!(var11 != var12)) {
                    _fun91442_ip = 1014;
                    continue _fun91442
                }
            case 497:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 29;
                var1 = var9[var1];
                var17 = var2.bind(var3)(var1);
                var16 = var17.computeChannelName;
                var14 = _closure1_slot11;
                var1 = _closure1_slot10;
                var18 = var16.bind(var17)(var12, var14, var1);
                var1 = 19;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getChannelIconWithGuild;
                var17 = var1.bind(var2)(var12, var8);
                var1 = var12.isDM;
                var1 = var1.bind(var12)();
                if (var1) {
                    _fun91442_ip = 815;
                    continue _fun91442
                }
            case 578:
                var1 = var12.isThread;
                var2 = var1.bind(var12)();
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var10];
                var8 = var14.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var1 = var1[var10];
                var1 = var14.bind(var3)(var1);
                var1 = var1.t;
                if (var2) {
                    _fun91442_ip = 707;
                    continue _fun91442
                }
            case 632:
                var14 = var1.UbNmGc;
                var2 = {};
                var2.channelName = var18;
                var21 = var8.bind(var9)(var14, var2);
                var16 = _closure1_slot17;
                var14 = _closure1_slot20;
                var2 = {};
                var2.onPressTitle = var5;
                var2.style = var4;
                var20 = _closure1_slot21;
                var19 = {};
                var19.title = var18;
                var19.accessibleTitle = var21;
                var19.icon = var17;
                var19 = var16.bind(var3)(var20, var19);
                var2.children = var19;
                var2 = var16.bind(var3)(var14, var2);
                return var2;
            case 707:
                var2 = var1["OkzL+Q"];
                var1 = {};
                var1.channelName = var18;
                var16 = var8.bind(var9)(var2, var1);
                var8 = _closure1_slot17;
                var2 = _closure1_slot20;
                var1 = {};
                var1.onPressTitle = var5;
                var1.style = var4;
                var14 = _closure1_slot21;
                var9 = {};
                var9.title = var18;
                var9.accessibleTitle = var16;
                var9.icon = var17;
                var16 = var11 != var15;
                if (!var16) {
                    _fun91442_ip = 792;
                    continue _fun91442
                }
            case 771:
                var20 = _closure1_slot17;
                var19 = _closure1_slot22;
                var18 = {};
                var18.parentChannel = var15;
                var16 = var20.bind(var3)(var19, var18);
            case 792:
                var9.subTitle = var16;
                var9 = var8.bind(var3)(var14, var9);
                var1.children = var9;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 815:
                var1 = var12.getRecipientId;
                var9 = var1.bind(var12)();
                var1 = var12.isSystemDM;
                var1 = var1.bind(var12)();
                var14 = _closure1_slot17;
                var8 = _closure1_slot23;
                var2 = {};
                var2.userId = var9;
                var16 = var7.navbarTitlePrimaryText;
                var2.style = var16;
                var18 = var14.bind(var3)(var8, var2);
                var16 = null;
                if (var1) {
                    _fun91442_ip = 899;
                    continue _fun91442
                }
            case 870:
                var8 = _closure1_slot17;
                var2 = _closure1_slot24;
                var1 = {};
                var1.userId = var9;
                var14 = var7.status;
                var1.style = var14;
                var16 = var8.bind(var3)(var2, var1);
            case 899:
                var8 = _closure1_slot17;
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 20;
                var1 = var14[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.userId = var9;
                var14 = var11 == var12;
                var9 = undefined;
                if (var14) {
                    _fun91442_ip = 943;
                    continue _fun91442
                }
            case 938:
                var9 = var12.guild_id;
            case 943:
                var1.guildId = var9;
                var14 = var8.bind(var3)(var2, var1);
                var8 = _closure1_slot17;
                var2 = _closure1_slot20;
                var1 = {};
                var1.onPressTitle = var5;
                var1.style = var4;
                var12 = _closure1_slot21;
                var9 = {};
                var9.title = var18;
                var9.icon = var17;
                var9.titleSuffix = var16;
                var9.subTitle = var14;
                var9 = var8.bind(var3)(var12, var9);
                var1.children = var9;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 1014:
                var8 = _closure1_slot17;
                var2 = _closure1_slot20;
                var1 = {};
                var1.style = var4;
                var12 = _closure1_slot21;
                var9 = {};
                var9.title = var13;
                var9 = var8.bind(var3)(var12, var9);
                var1.children = var9;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 1056:
                var8 = _closure1_slot17;
                var2 = _closure1_slot20;
                var1 = {};
                var1.style = var4;
                var12 = _closure1_slot21;
                var9 = {};
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var10];
                var14 = var17.bind(var3)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var13 = var13[var10];
                var13 = var17.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.HbPHt1;
                var13 = var14.bind(var16)(var13);
                var9.title = var13;
                var9 = var8.bind(var3)(var12, var9);
                var1.children = var9;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 1150:
                var1 = var0.name;
                if (!(var11 != var1)) {
                    _fun91442_ip = 1175;
                    continue _fun91442
                }
            case 1159:
                var1 = var0.name;
                var2 = var1.length;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun91442_ip = 1229;
                    continue _fun91442
                }
            case 1175:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var10];
                var2 = var9.bind(var3)(var2);
                var8 = var2.intl;
                var2 = var8.string;
                var1 = var1[var10];
                var1 = var9.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["4WNcpu"];
                var14 = var2.bind(var8)(var1);
                _fun91442_ip = 1234;
                continue _fun91442;
            case 1229:
                var14 = var0.name;
            case 1234:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 19;
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getThreadChannelIcon;
                var0 = var0.isPrivate;
                var8 = _closure1_slot12;
                if (var0) {
                    _fun91442_ip = 1281;
                    continue _fun91442
                }
            case 1273:
                var0 = var8.PUBLIC_THREAD;
                _fun91442_ip = 1287;
                continue _fun91442;
            case 1281:
                var0 = var8.PRIVATE_THREAD;
            case 1287:
                var12 = var1.bind(var2)(var0);
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var10];
                var2 = var1.bind(var3)(var2);
                var8 = var2.intl;
                var2 = var8.formatToPlainString;
                var0 = var0[var10];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0["OkzL+Q"];
                var0 = {};
                var0.channelName = var14;
                var13 = var2.bind(var8)(var1, var0);
                var2 = _closure1_slot17;
                var1 = _closure1_slot20;
                var0 = {};
                var0.style = var4;
                var9 = _closure1_slot21;
                var8 = {};
                var8.title = var14;
                var8.accessibleTitle = var13;
                var8.icon = var12;
                var11 = var11 != var15;
                if (!var11) {
                    _fun91442_ip = 1413;
                    continue _fun91442
                }
            case 1392:
                var14 = _closure1_slot17;
                var13 = _closure1_slot22;
                var12 = {};
                var12.parentChannel = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 1413:
                var8.subTitle = var11;
                var8 = var2.bind(var3)(var9, var8);
                var0.children = var8;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1436:
                var2 = _closure1_slot17;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 26;
                var0 = var12[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var8 = 27;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var0.source = var8;
                var8 = var7.premiumIcon;
                var0.style = var8;
                var11 = var2.bind(var3)(var1, var0);
                var1 = _closure1_slot20;
                var0 = {};
                var0.style = var4;
                var9 = _closure1_slot21;
                var8 = {};
                var15 = _closure1_slot0;
                var13 = var12[var10];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var10];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["KzCF/6"];
                var12 = var13.bind(var14)(var12);
                var8.title = var12;
                var8.icon = var11;
                var8 = var2.bind(var3)(var9, var8);
                var0.children = var8;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1584:
                var2 = _closure1_slot17;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 23;
                var0 = var12[var8];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.Sizes;
                var8 = var8.CUSTOM;
                var0.size = var8;
                var8 = 25;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var0.source = var8;
                var8 = var7.homeIcon;
                var0.style = var8;
                var11 = var2.bind(var3)(var1, var0);
                var1 = _closure1_slot20;
                var0 = {};
                var0.onPressTitle = var5;
                var0.style = var4;
                var9 = _closure1_slot21;
                var8 = {};
                var15 = _closure1_slot0;
                var13 = var12[var10];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var10];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["9Oq93m"];
                var12 = var13.bind(var14)(var12);
                var8.title = var12;
                var8.icon = var11;
                var8 = var2.bind(var3)(var9, var8);
                var0.children = var8;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1762:
                var2 = _closure1_slot17;
                var11 = _closure1_slot1;
                var9 = _closure1_slot2;
                var8 = 23;
                var0 = var9[var8];
                var1 = var11.bind(var3)(var0);
                var0 = {};
                var8 = var9[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.Sizes;
                var8 = var8.CUSTOM;
                var0.size = var8;
                var8 = 24;
                var8 = var9[var8];
                var8 = var11.bind(var3)(var8);
                var0.source = var8;
                var7 = var7.homeIcon;
                var0.style = var7;
                var8 = var2.bind(var3)(var1, var0);
                var1 = _closure1_slot20;
                var0 = {};
                var0.onPressTitle = var5;
                var0.style = var4;
                var7 = _closure1_slot21;
                var5 = {};
                var13 = _closure1_slot0;
                var11 = var9[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var10];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.Ym2Ri6;
                var9 = var11.bind(var12)(var9);
                var5.title = var9;
                var5.icon = var8;
                var5 = var2.bind(var3)(var7, var5);
                var0.children = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1940:
                var2 = _closure1_slot17;
                var1 = _closure1_slot20;
                var0 = {};
                var0.style = var4;
                var5 = _closure1_slot21;
                var4 = {};
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var10];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.TdEu5X;
                var6 = var7.bind(var8)(var6);
                var4.title = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = function arg0() {
        _fun91447: for (var _fun91447_ip = 0;;) switch (_fun91447_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.children;
                var8 = var0.onPressTitle;
                var7 = var0.style;
                var0 = _closure1_slot19;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var8)) {
                    _fun91447_ip = 130;
                    continue _fun91447
                }
            case 38:
                var3 = _closure1_slot17;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 30;
                var0 = var9[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.PressableOpacity;
                var0 = {};
                var10 = var6.navbarTitleContainer;
                var9 = new Array(2);
                var9[0] = var10;
                var9[1] = var7;
                var0.style = var9;
                var9 = 'header';
                var0.accessibilityRole = var9;
                var0.onPress = var8;
                var8 = function() {
                    var0 = null;
                    return var0;
                };
                var0.onAccessibilityTap = var8;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun91447_ip = 172;
                continue _fun91447;
            case 130:
                var3 = _closure1_slot17;
                var2 = _closure1_slot4;
                var1 = {};
                var8 = var6.navbarTitleContainer;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 172:
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var4 = function arg0() {
        _fun91449: for (var _fun91449_ip = 0;;) switch (_fun91449_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.title;
                var10 = var0.icon;
                var9 = var0.titleSuffix;
                var7 = var0.subTitle;
                var13 = var0.accessibleTitle;
                var1 = _closure1_slot19;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var5 = null;
                var1 = var5 != var10;
                if (!var1) {
                    _fun91449_ip = 163;
                    continue _fun91449
                }
            case 53:
                var2 = _closure1_slot3;
                var1 = var2.isValidElement;
                var2 = var1.bind(var2)(var10);
                var1 = var10;
                if (var2) {
                    _fun91449_ip = 160;
                    continue _fun91449
                }
            case 74:
                var6 = _closure1_slot17;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 23;
                var2 = var15[var11];
                var4 = var14.bind(var3)(var2);
                var2 = {};
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.Sizes;
                var11 = var11.CUSTOM;
                var2.size = var11;
                var2.source = var10;
                var10 = var8.channelIcon;
                var2.style = var10;
                var10 = var8.channelIconColor;
                var10 = var10.color;
                var2.color = var10;
                var1 = var6.bind(var3)(var4, var2);
            case 160:
                var5 = var1;
            case 163:
                var2 = _closure1_slot3;
                var1 = var2.isValidElement;
                var1 = var1.bind(var2)(var12);
                var10 = var12;
                if (var1) {
                    _fun91449_ip = 281;
                    continue _fun91449
                }
            case 184:
                var4 = _closure1_slot17;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var8.channelNameContainer;
                var1.style = var6;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 31;
                var6 = var14[var6];
                var6 = var11.bind(var3)(var6);
                var11 = var6.Text;
                var6 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'heading-md/bold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityLabel': null,
                    'maxFontSizeMultiplier': 1,
                    'accessibilityRole': 'header'
                };
                var14 = var8.channelName;
                var6.style = var14;
                var6.accessibilityLabel = var13;
                var6.children = var12;
                var6 = var4.bind(var3)(var11, var6);
                var1.children = var6;
                var10 = var4.bind(var3)(var2, var1);
            case 281:
                var2 = _closure1_slot18;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var8.flexRow;
                var0.style = var4;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var6 = var8.channelTextContainer;
                var5.style = var6;
                var6 = {};
                var8 = var8.flexRow;
                var6.style = var8;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var6.children = var8;
                var8 = var2.bind(var3)(var1, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var4;
    var4 = function arg0() {
        var0 = arg0;
        var9 = var0.parentChannel;
        var0 = _closure1_slot19;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot17;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 31;
        var0 = var6[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'lineClamp': 1,
            'style': null,
            'accessibilityLabel': null,
            'maxFontSizeMultiplier': 1,
            'variant': 'text-xs/medium',
            'color': 'text-muted'
        };
        var4 = var4.navbarTitleSecondaryText;
        var0.style = var4;
        var4 = 18;
        var8 = var6[var4];
        var8 = var5.bind(var3)(var8);
        var13 = var8.intl;
        var12 = var13.formatToPlainString;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.t;
        var11 = var4.BjYvHO;
        var10 = {};
        var4 = 29;
        var8 = var6[var4];
        var15 = var5.bind(var3)(var8);
        var14 = var15.computeChannelName;
        var8 = _closure1_slot11;
        var7 = _closure1_slot10;
        var14 = var14.bind(var15)(var9, var8, var7);
        var10.channelName = var14;
        var10 = var12.bind(var13)(var11, var10);
        var0.accessibilityLabel = var10;
        var4 = var6[var4];
        var6 = var5.bind(var3)(var4);
        var5 = var6.computeChannelName;
        var16 = true;
        var20 = var6;
        var19 = var9;
        var18 = var8;
        var17 = var7;
        var4 = var20[var5](var19, var18, var17, var16, var15);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var4;
    var4 = function arg0() {
        var0 = arg0;
        var10 = var0.userId;
        var _closure2_slot0 = var10;
        var5 = var0.style;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 17;
        var2 = var9[var2];
        var3 = undefined;
        var8 = var6.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot11;
        var4 = new Array(2);
        var4[0] = var2;
        var2 = _closure1_slot10;
        var4[1] = var2;
        var2 = new Array(1);
        var2[0] = var10;
        var1 = function() { // Environment: var1
            _fun91452: for (var _fun91452_ip = 0;;) switch (_fun91452_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var0 = var1.getNickname;
                    var4 = _closure2_slot0;
                    var1 = var0.bind(var1)(var4);
                    var3 = _closure1_slot11;
                    var0 = var3.getUser;
                    var4 = var0.bind(var3)(var4);
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun91452_ip = 79;
                        continue _fun91452
                    }
                case 46:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 32;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getName;
                    var1 = var2.bind(var3)(var4);
                case 79:
                    var2 = var0 != var1;
                    var0 = '';
                    if (!var2) {
                        _fun91452_ip = 93;
                        continue _fun91452
                    }
                case 90:
                    var0 = var1;
                case 93:
                    return var0;
            }
        };
        var4 = var7.bind(var8)(var4, var1, var2);
        var2 = _closure1_slot17;
        var0 = 33;
        var0 = var9[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.LegacyText;
        var0 = {
            'numberOfLines': 1,
            'style': null,
            'accessibilityLabel': null,
            'maxFontSizeMultiplier': 1,
            'accessibilityRole': 'header'
        };
        var0.style = var5;
        var5 = 18;
        var7 = var9[var5];
        var7 = var6.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.formatToPlainString;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.t;
        var6 = var5.fYqXVY;
        var5 = {};
        var5.channelName = var4;
        var5 = var7.bind(var8)(var6, var5);
        var0.accessibilityLabel = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var4;
    var4 = function arg0() {
        var1 = arg0;
        var4 = var1.style;
        var1 = var1.userId;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 17;
        var1 = var10[var1];
        var3 = undefined;
        var6 = var2.bind(var3)(var1);
        var2 = var6.useStateFromStoresObject;
        var7 = _closure1_slot9;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            var0 = {};
            var5 = _closure1_slot9;
            var2 = var5.getStatus;
            var4 = _closure2_slot0;
            var2 = var2.bind(var5)(var4);
            var0.status = var2;
            var2 = var5.isMobileOnline;
            var2 = var2.bind(var5)(var4);
            var0.isMobileOnline = var2;
            var2 = var5.isVROnline;
            var2 = var2.bind(var5)(var4);
            var0.isVROnline = var2;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 34;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = var5.getActivities;
            var1 = var1.bind(var5)(var4);
            var1 = var2.bind(var3)(var1);
            var0.streaming = var1;
            return var0;
        };
        var0 = var2.bind(var6)(var1, var0);
        var7 = var0.status;
        var9 = var0.isMobileOnline;
        var8 = var0.isVROnline;
        var6 = var0.streaming;
        var2 = _closure1_slot17;
        var1 = _closure1_slot1;
        var0 = 35;
        var0 = var10[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.isMobileOnline = var9;
        var0.isVROnline = var8;
        var0.status = var7;
        var0.streaming = var6;
        var5 = _closure1_slot16;
        var5 = var5.SMALL;
        var0.size = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/navbars/native/components/ChannelNavbar.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Environment: var1
        _fun91455: for (var _fun91455_ip = 0;;) switch (_fun91455_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.onPressTitle;
                var1 = var1.channelId;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot19;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
                var6 = var7[var1];
                var10 = var2.bind(var3)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var9.bind(var10)(var8, var6);
                var1 = var7[var1];
                var7 = var2.bind(var3)(var1);
                var2 = var7.useStateFromStores;
                var8 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var2.bind(var7)(var1, var0);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 18;
                var1 = var9[var0];
                var1 = var8.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var9[var0];
                var0 = var8.bind(var3)(var0);
                var0 = var0.t;
                if (var7) {
                    _fun91455_ip = 182;
                    continue _fun91455
                }
            case 169:
                var7 = var0.ZTNur7;
                var12 = var1.bind(var2)(var7);
                _fun91455_ip = 193;
                continue _fun91455;
            case 182:
                var0 = var0.ai6Lbr;
                var12 = var1.bind(var2)(var0);
            case 193:
                var7 = null;
                var0 = var7 != var6;
                var8 = null;
                if (!var0) {
                    _fun91455_ip = 235;
                    continue _fun91455
                }
            case 204:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getChannelIcon;
                var8 = var0.bind(var1)(var6);
            case 235:
                if (!(var7 != var6)) {
                    _fun91455_ip = 252;
                    continue _fun91455
                }
            case 239:
                var0 = var6.isDM;
                var0 = var0.bind(var6)();
                if (var0) {
                    _fun91455_ip = 320;
                    continue _fun91455
                }
            case 252:
                var2 = _closure1_slot17;
                var1 = _closure1_slot20;
                var0 = {};
                var0.onPressTitle = var5;
                var10 = _closure1_slot21;
                var9 = {};
                var14 = var7 == var6;
                var13 = undefined;
                if (var14) {
                    _fun91455_ip = 287;
                    continue _fun91455
                }
            case 282:
                var13 = var6.name;
            case 287:
                if (!(var7 != var13)) {
                    _fun91455_ip = 294;
                    continue _fun91455
                }
            case 291:
                var12 = var13;
            case 294:
                var9.title = var12;
                var9.icon = var8;
                var9 = var2.bind(var3)(var10, var9);
                var0.children = var9;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 320:
                var0 = var6.getRecipientId;
                var10 = var0.bind(var6)();
                var0 = var6.isSystemDM;
                var0 = var0.bind(var6)();
                var9 = _closure1_slot17;
                var2 = _closure1_slot23;
                var1 = {};
                var1.userId = var10;
                var12 = var11.navbarTitlePrimaryText;
                var1.style = var12;
                var9 = var9.bind(var3)(var2, var1);
                var7 = null;
                if (var0) {
                    _fun91455_ip = 404;
                    continue _fun91455
                }
            case 375:
                var2 = _closure1_slot17;
                var1 = _closure1_slot24;
                var0 = {};
                var0.userId = var10;
                var11 = var11.status;
                var0.style = var11;
                var7 = var2.bind(var3)(var1, var0);
            case 404:
                var2 = _closure1_slot17;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 20;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.userId = var10;
                var6 = var6.guild_id;
                var0.guildId = var6;
                var6 = var2.bind(var3)(var1, var0);
                var1 = _closure1_slot20;
                var0 = {};
                var0.onPressTitle = var5;
                var5 = _closure1_slot21;
                var4 = {};
                var4.title = var9;
                var4.icon = var8;
                var4.titleSuffix = var7;
                var4.subTitle = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ChannelTitleWithoutRoute = var4;
    var2.ChannelTitle = var3;
    var1 = function(arg0) { // Environment: var1
        _fun91458: for (var _fun91458_ip = 0;;) switch (_fun91458_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.buttons;
                var0 = var0.style;
                var3 = _closure1_slot17;
                var2 = _closure1_slot4;
                var1 = {};
                var1.style = var0;
                var0 = null;
                var5 = var0 == var7;
                var0 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun91458_ip = 63;
                    continue _fun91458
                }
            case 44:
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    _fun91459: for (var _fun91459_ip = 0;;) switch (_fun91459_ip) {
                        case 0:
                            var0 = arg0;
                            var14 = var0.onPress;
                            var _closure3_slot0 = var14;
                            var13 = var0.onLongPress;
                            var15 = var0.source;
                            var16 = var0.color;
                            var11 = var0.style;
                            var17 = var0.accessibilityLabel;
                            var8 = var0.children;
                            var12 = var0.disabled;
                            var6 = var0.hasActivitiesPrivateChannelTooltip;
                            var4 = _closure1_slot18;
                            var3 = _closure1_slot4;
                            var2 = {};
                            var7 = _closure1_slot17;
                            var5 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 36;
                            var0 = var1[var0];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var0);
                            var0 = {};
                            var18 = 'button';
                            var0.accessibilityRole = var18;
                            var0.accessibilityLabel = var17;
                            var0.color = var16;
                            var0.source = var15;
                            if (!var6) {
                                _fun91459_ip = 129;
                                continue _fun91459
                            }
                        case 122:
                            var14 = function(arg0) { // Environment: var9
                                _fun91460: for (var _fun91460_ip = 0;;) switch (_fun91460_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun91460_ip = 27;
                                            continue _fun91460
                                        }
                                    case 13:
                                        var2 = _closure3_slot0;
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var2.bind(var1)(var0);
                                    case 27:
                                        var2 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var0 = 37;
                                        var1 = var6[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                                        var1 = 38;
                                        var1 = var6[var1];
                                        var1 = var2.bind(var0)(var1);
                                        var1 = var1.DismissibleContent;
                                        var2 = var1.ACTIVITY_GDM_CALL_TOOLTIP;
                                        var1 = {};
                                        var5 = _closure1_slot14;
                                        var5 = var5.AUTO;
                                        var1.dismissAction = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                        case 129:
                            var0.onPress = var14;
                            var0.onLongPress = var13;
                            var0.disabled = var12;
                            var0.style = var11;
                            var0.children = var8;
                            var5 = var7.bind(var1)(var5, var0);
                            var0 = new Array(2);
                            var0[0] = var5;
                            var5 = null;
                            if (!var6) {
                                _fun91459_ip = 268;
                                continue _fun91459
                            }
                        case 169:
                            var8 = _closure1_slot17;
                            var7 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var6 = 39;
                            var6 = var13[var6];
                            var7 = var7.bind(var1)(var6);
                            var6 = {};
                            var12 = _closure1_slot0;
                            var11 = 38;
                            var11 = var13[var11];
                            var11 = var12.bind(var1)(var11);
                            var11 = var11.DismissibleContent;
                            var12 = var11.ACTIVITY_GDM_CALL_TOOLTIP;
                            var11 = new Array(1);
                            var11[0] = var12;
                            var6.contentTypes = var11;
                            var10 = _closure1_slot15;
                            var10 = var10.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
                            var6.groupName = var10;
                            var9 = function arg0() {
                                _fun91461: for (var _fun91461_ip = 0;;) switch (_fun91461_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.visibleContent;
                                        var0 = var0.markAsDismissed;
                                        var _closure4_slot0 = var0;
                                        var2 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var0 = 38;
                                        var0 = var4[var0];
                                        var4 = undefined;
                                        var0 = var2.bind(var4)(var0);
                                        var0 = var0.DismissibleContent;
                                        var2 = var0.ACTIVITY_GDM_CALL_TOOLTIP;
                                        var0 = null;
                                        if (!(var3 === var2)) {
                                            _fun91461_ip = 108;
                                            continue _fun91461
                                        }
                                    case 64:
                                        var3 = _closure1_slot17;
                                        var2 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var1 = 40;
                                        var1 = var6[var1];
                                        var2 = var2.bind(var4)(var1);
                                        var1 = {};
                                        var5 = function() {
                                            var2 = _closure4_slot0;
                                            var0 = _closure1_slot14;
                                            var1 = var0.UNKNOWN;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var1.onClosePress = var5;
                                        var0 = var3.bind(var4)(var2, var1);
                                    case 108:
                                        return var0;
                                }
                            };
                            var6.children = var9;
                            var5 = var8.bind(var1)(var7, var6);
                        case 268:
                            var0[1] = var5;
                            var2.children = var0;
                            var0 = arg1;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var5);
            case 63:
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.ChannelButtons = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3474, 1376, 1372, 1410, 3610, 3100, 1621, 660, 1379, 1369, 5453, 33, 1297, 4682, 671, 566, 1234, 4807, 7760, 11881, 11882, 4086, 9033, 11883, 4704, 9031, 9045, 4792, 4902, 3941, 3236, 4876, 5736, 5755, 6779, 3212, 1358, 5957, 11884, 2]);