// modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: CommunityPill, environment: var1
        _fun97158: for (var _fun97158_ip = 0;;) switch (_fun97158_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildVisibility;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var0 = _closure1_slot12;
                var10 = var0.bind(var3)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var12 = 10;
                var0 = var7[var12];
                var0 = var6.bind(var3)(var0);
                var8 = var0.intl;
                var2 = var8.string;
                var0 = var7[var12];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.TME4LJ;
                var0 = var2.bind(var8)(var0);
                var _closure2_slot1 = var0;
                var2 = _closure1_slot1;
                var0 = 11;
                var0 = var7[var0];
                var9 = var2.bind(var3)(var0);
                var0 = 12;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.GuildVisibility;
                var0 = var0.PUBLIC;
                if (!(var1 === var0)) {
                    _fun97158_ip = 225;
                    continue _fun97158
                }
            case 131:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = var2[var12];
                var0 = var1.bind(var3)(var0);
                var7 = var0.intl;
                var6 = var7.string;
                var0 = var2[var12];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.op2cJ6;
                var0 = var6.bind(var7)(var0);
                _closure2_slot1 = var0;
                var0 = 13;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.GlobeEarthIcon;
                _closure2_slot0 = var0;
                var1 = _closure1_slot1;
                var0 = 14;
                var0 = var2[var0];
                var9 = var1.bind(var3)(var0);
            case 225:
                var2 = _closure1_slot11;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 15;
                var0 = var8[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var6 = var10.communityPill;
                var0.style = var6;
                var6 = 'button';
                var0.accessibilityRole = var6;
                var4 = function() { // Original name: onPress, environment: var4
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var4 = 'SERVER_BADGE_DESCRIPTION_INVITE_ONLY';
                    var1.key = var4;
                    var5 = _closure2_slot1;
                    var1.content = var5;
                    var4 = _closure2_slot0;
                    var1.IconComponent = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var4 = 17;
                var4 = var8[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var10 = var10.communityPillIcon;
                var4.style = var10;
                var4.source = var9;
                var9 = true;
                var4.disableColor = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot10;
                var5 = 18;
                var5 = var8[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var9 = var8[var12];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var12];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.K7iRig;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.View;
    var _closure1_slot4 = var7;
    var6 = var6.Image;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.GuildFeatures;
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot10 = var7;
    var6 = var6.jsxs;
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var10 = 16;
    var9.padding = var10;
    var6.content = var9;
    var9 = {
        'borderRadius': 14.117647058823529,
        'height': 60,
        'width': 60
    };
    var6.avatar = var9;
    var9 = {};
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var6.headerContainer = var9;
    var9 = {
        'height': 68,
        'width': 68,
        'marginBottom': 12,
        'marginLeft': 4294967292,
        'padding': 4,
        'borderRadius': 16,
        'alignContent': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var6.avatarBackground = var9;
    var9 = {
        'position': 'absolute',
        'top': 2
    };
    var6.icon = var9;
    var9 = {};
    var9.marginTop = var10;
    var6.description = var9;
    var9 = {
        'marginTop': 16,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.memberInfo = var9;
    var9 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'marginRight': 4
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_STATUS_ONLINE;
    var9.backgroundColor = var12;
    var6.dotOnline = var9;
    var9 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'marginRight': 4,
        'marginLeft': 16
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_STATUS_OFFLINE;
    var9.backgroundColor = var12;
    var6.dotOffline = var9;
    var9 = {
        'marginLeft': 16,
        'marginRight': 4,
        'width': 14,
        'height': 14
    };
    var6.publicIcon = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.publicInfo = var9;
    var9 = {
        'flexDirection': 'row',
        'marginTop': 8
    };
    var6.nameRow = var9;
    var9 = {
        'marginRight': 16,
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'paddingTop': 4,
        'paddingRight': 8,
        'paddingBottom': 4,
        'paddingLeft': 6
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_BACKGROUND_HOVER;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var6.communityPill = var9;
    var9 = {
        'width': 16,
        'height': 16,
        'marginRight': 6
    };
    var6.communityPillIcon = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var9.backgroundColor = var12;
    var6.toastContainer = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9.color = var10;
    var6.toastIcon = var9;
    var9 = {
        'position': 'absolute',
        'left': '50%',
        'top': 0
    };
    var6.guildBanner = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot12 = var6;
    var7 = var3.Set;
    var6 = 9;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BadgeCategory;
    var8 = var3.VERIFIED;
    var3 = new Array(3);
    var3[0] = var8;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var8 = var8.PARTNERED;
    var3[1] = var8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.BadgeCategory;
    var6 = var6.VERIFIED_AND_PARTNERED;
    var3[2] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var16 = var6;
    var15 = var3;
    var3 = new var16[var7](var15, var14);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot13 = var3;
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildActionSheetHeader, environment: var1
        _fun97160: for (var _fun97160_ip = 0;;) switch (_fun97160_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var _closure2_slot0 = var0;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot12;
                var22 = var1.bind(var3)();
                var _closure2_slot1 = var22;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 20;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var4 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var1 = 21;
                var5 = var7[var1];
                var9 = var2.bind(var3)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var17
                    var2 = _closure1_slot8;
                    var1 = var2.isSubscribedToAnyGuildChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var8.bind(var9)(var6, var5);
                var _closure2_slot2 = var6;
                var10 = _closure1_slot3;
                var9 = var10.useEffect;
                var8 = new Array(2);
                var8[0] = var0;
                var8[1] = var6;
                var5 = function() { // Environment: var17
                    _fun97162: for (var _fun97162_ip = 0;;) switch (_fun97162_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var1 = !var1;
                            if (!var1) {
                                _fun97162_ip = 53;
                                continue _fun97162
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 22;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.isGuildRecord;
                            var2 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2);
                        case 53:
                            if (!var1) {
                                _fun97162_ip = 101;
                                continue _fun97162
                            }
                        case 56:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 23;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchGuildForPopout;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 101:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var9.bind(var10)(var5, var8);
                var5 = var7[var1];
                var10 = var2.bind(var3)(var5);
                var9 = var10.useStateFromStores;
                var5 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var17
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var9.bind(var10)(var8, var5);
                var1 = var7[var1];
                var8 = var2.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var17
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var1);
                var16 = null;
                var1 = var2;
                if (!(var16 != var5)) {
                    _fun97160_ip = 237;
                    continue _fun97160
                }
            case 234:
                var1 = var5;
            case 237:
                if (!(var16 != var1)) {
                    _fun97160_ip = 244;
                    continue _fun97160
                }
            case 241:
                var0 = var1;
            case 244:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 24;
                var1 = var7[var1];
                var1 = var5.bind(var3)(var1);
                var15 = var1.bind(var3)(var0);
                var5 = _closure1_slot0;
                var1 = 25;
                var1 = var7[var1];
                var7 = var5.bind(var3)(var1);
                var5 = var7.useGuildHeaderCounts;
                var1 = var0.id;
                var1 = var5.bind(var7)(var1);
                var13 = var0;
                var0 = undefined;
                var5 = undefined;
                if (!var6) {
                    _fun97160_ip = 323;
                    continue _fun97160
                }
            case 311:
                var0 = var1.onlineCount;
                var5 = var1.memberCount;
            case 323:
                var28 = var0;
                var29 = var5;
                if (!(var16 != var2)) {
                    _fun97160_ip = 365;
                    continue _fun97160
                }
            case 333:
                var1 = var0;
                if (!(var0 == var16)) {
                    _fun97160_ip = 346;
                    continue _fun97160
                }
            case 340:
                var1 = var2.presenceCount;
            case 346:
                var0 = var5;
                if (!(var5 == var16)) {
                    _fun97160_ip = 359;
                    continue _fun97160
                }
            case 353:
                var0 = var2.memberCount;
            case 359:
                var29 = var0;
                var28 = var1;
            case 365:
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 26;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.width;
                _closure2_slot3 = var0;
                var2 = _closure1_slot0;
                var1 = 22;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isGuildRecord;
                var1 = var1.bind(var2)(var13);
                if (var1) {
                    _fun97160_ip = 638;
                    continue _fun97160
                }
            case 431:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 28;
                var1 = var1[var2];
                var6 = var5.bind(var3)(var1);
                var5 = var6.getGuildIconSource;
                var1 = {};
                var7 = var13.id;
                var1.id = var7;
                var7 = var13.icon;
                var1.icon = var7;
                var7 = true;
                var1.canAnimate = var7;
                var7 = 68;
                var1.size = var7;
                var7 = var5.bind(var6)(var1);
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var1 = {};
                var8 = var22.avatar;
                var1.style = var8;
                var1.source = var7;
                var1 = var6.bind(var3)(var5, var1);
                var5 = var13.splash;
                var5 = var16 == var5;
                var11 = null;
                if (var5) {
                    _fun97160_ip = 630;
                    continue _fun97160
                }
            case 541:
                var11 = null;
                if (var4) {
                    _fun97160_ip = 630;
                    continue _fun97160
                }
            case 546:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = var9[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.getGuildSplashSource;
                var2 = {};
                var7 = var13.id;
                var2.id = var7;
                var7 = var13.splash;
                var2.splash = var7;
                var8 = _closure1_slot0;
                var7 = 29;
                var7 = var9[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.getDevicePixelRatio;
                var7 = var7.bind(var8)();
                var7 = var0 * var7;
                var2.size = var7;
                var11 = var5.bind(var6)(var2);
            case 630:
                var9 = var1;
                _fun97160_ip = 870;
                continue _fun97160;
            case 638:
                var5 = var13.features;
                var2 = var5.has;
                var1 = _closure1_slot9;
                var1 = var1.ANIMATED_BANNER;
                var7 = var2.bind(var5)(var1);
                var5 = _closure1_slot10;
                var2 = _closure1_slot4;
                var1 = {
                    'style': null,
                    'accessibilityElementsHidden': true,
                    'importantForAccessibility': 'no-hide-descendants',
                    'accessibilityRole': 'none'
                };
                var6 = var22.avatarBackground;
                var1.style = var6;
                var12 = true;
                var10 = _closure1_slot10;
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var14 = 27;
                var6 = var20[var14];
                var8 = var8.bind(var3)(var6);
                var6 = {};
                var18 = var22.avatar;
                var6.style = var18;
                var6.guild = var13;
                var18 = _closure1_slot0;
                var14 = var20[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.GuildIconSizes;
                var14 = var14.XLARGE;
                var6.size = var14;
                var6.animate = var12;
                var6 = var10.bind(var3)(var8, var6);
                var1.children = var6;
                var2 = var5.bind(var3)(var2, var1);
                var1 = var13.banner;
                var5 = var16 == var1;
                var1 = null;
                if (var5) {
                    _fun97160_ip = 864;
                    continue _fun97160
                }
            case 805:
                var1 = null;
                if (var4) {
                    _fun97160_ip = 864;
                    continue _fun97160
                }
            case 810:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 28;
                var4 = var6[var4];
                var6 = var5.bind(var3)(var4);
                var5 = var6.getGuildBannerSource;
                var4 = {};
                var8 = var13.id;
                var4.id = var8;
                var8 = var13.banner;
                var4.banner = var8;
                var1 = var5.bind(var6)(var4, var7);
            case 864:
                var11 = var1;
                var9 = var2;
            case 870:
                var26 = var13.name;
                var14 = var13.description;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 30;
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var1 = var6.getGuildBadgeSource;
                var5 = true;
                var6 = var1.bind(var6)(var13, var5);
                var1 = 12;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getGuildTraits;
                var23 = var1.bind(var2)(var13);
                if (var15) {
                    _fun97160_ip = 1001;
                    continue _fun97160
                }
            case 940:
                var1 = var16 != var6;
                var25 = null;
                if (!var1) {
                    _fun97160_ip = 999;
                    continue _fun97160
                }
            case 949:
                var4 = _closure1_slot10;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 17;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var22.icon;
                var1.style = var7;
                var1.source = var6;
                var1.disableColor = var5;
                var25 = var4.bind(var3)(var2, var1);
            case 999:
                _fun97160_ip = 1099;
                continue _fun97160;
            case 1001:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getBadgeCategory;
                var4 = var1.bind(var2)(var23);
                var2 = _closure1_slot13;
                var1 = var2.has;
                var2 = var1.bind(var2)(var4);
                var1 = null;
                if (!var2) {
                    _fun97160_ip = 1096;
                    continue _fun97160
                }
            case 1051:
                var5 = _closure1_slot10;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 19;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = {};
                var2.guild = var13;
                var6 = var22.icon;
                var2.style = var6;
                var1 = var5.bind(var3)(var4, var2);
            case 1096:
                var25 = var1;
            case 1099:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 31;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useClientThemesOverride;
                var5 = var1.bind(var2)();
                var1 = 0.56;
                var18 = var1 * var0;
                _closure2_slot4 = var18;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var6 = var22.guildBanner;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var0;
                var1[2] = var18;
                var0 = function() { // Environment: var17
                    var0 = {};
                    var2 = _closure2_slot1;
                    var4 = var2.guildBanner;
                    var5 = var0;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure2_slot3;
                    var2 = 'width';
                    var0[var2] = var3;
                    var3 = _closure2_slot4;
                    var2 = 'height';
                    var0[var2] = var3;
                    var1 = _closure2_slot3;
                    var2 = -var1;
                    var1 = 2;
                    var2 = var2 / var1;
                    var1 = 'marginLeft';
                    var0[var1] = var2;
                    return var0;
                };
                var8 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var22.headerContainer;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var5 = var16 != var11;
                if (!var5) {
                    _fun97160_ip = 1270;
                    continue _fun97160
                }
            case 1230:
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 32;
                var4 = var10[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.style = var8;
                var4.source = var11;
                var5 = var7.bind(var3)(var6, var4);
            case 1270:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot4;
                var5 = {};
                var10 = var22.content;
                var8 = new Array(2);
                var8[0] = var10;
                var10 = {};
                var12 = var16 != var11;
                var11 = 0;
                if (!var12) {
                    _fun97160_ip = 1319;
                    continue _fun97160
                }
            case 1312:
                var12 = 48;
                var11 = var18 - var12;
            case 1319:
                var10.marginTop = var11;
                var8[1] = var10;
                var5.style = var8;
                var8 = new Array(4);
                var8[0] = var9;
                var11 = _closure1_slot11;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var22.nameRow;
                var9.style = var12;
                var12 = new Array(2);
                var12[0] = var25;
                var24 = _closure1_slot11;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var18 = 18;
                var20 = var20[var18];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'lineClamp': 2,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var25 = var16 != var25;
                var27 = null;
                if (!var25) {
                    _fun97160_ip = 1425;
                    continue _fun97160
                }
            case 1419:
                var27 = '      ';
            case 1425:
                var25 = new Array(2);
                var25[0] = var27;
                var25[1] = var26;
                var20.children = var25;
                var20 = var24.bind(var3)(var21, var20);
                var12[1] = var20;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var10 = var16 != var14;
                var9 = null;
                if (!var10) {
                    _fun97160_ip = 1535;
                    continue _fun97160
                }
            case 1474:
                var12 = _closure1_slot10;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var18];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var20 = var22.description;
                var10.style = var20;
                var10.children = var14;
                var9 = var12.bind(var3)(var11, var10);
            case 1535:
                var8[2] = var9;
                var11 = _closure1_slot11;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var22.memberInfo;
                var9.style = var12;
                var14 = null;
                if (!var15) {
                    _fun97160_ip = 1602;
                    continue _fun97160
                }
            case 1564:
                var12 = var23.community;
                var14 = null;
                if (!var12) {
                    _fun97160_ip = 1602;
                    continue _fun97160
                }
            case 1575:
                var21 = _closure1_slot10;
                var20 = _closure1_slot14;
                var12 = {};
                var23 = var23.visibility;
                var12.guildVisibility = var23;
                var14 = var21.bind(var3)(var20, var12);
            case 1602:
                var12 = new Array(3);
                var12[0] = var14;
                var23 = _closure1_slot11;
                var21 = _closure1_slot4;
                var20 = {};
                var14 = 15;
                var24 = {
                    'gap': 15,
                    'flexDirection': 'row'
                };
                var20.style = var24;
                var25 = var16 != var28;
                if (!var25) {
                    _fun97160_ip = 1693;
                    continue _fun97160
                }
            case 1648:
                var27 = _closure1_slot10;
                var26 = _closure1_slot1;
                var30 = _closure1_slot2;
                var24 = 33;
                var24 = var30[var24];
                var26 = var26.bind(var3)(var24);
                var24 = {};
                var30 = 'online';
                var24.type = var30;
                var24.count = var28;
                var25 = var27.bind(var3)(var26, var24);
            case 1693:
                var24 = new Array(2);
                var24[0] = var25;
                var25 = var16 != var29;
                if (!var25) {
                    _fun97160_ip = 1753;
                    continue _fun97160
                }
            case 1708:
                var28 = _closure1_slot10;
                var27 = _closure1_slot1;
                var30 = _closure1_slot2;
                var26 = 33;
                var26 = var30[var26];
                var27 = var27.bind(var3)(var26);
                var26 = {};
                var30 = 'total';
                var26.type = var30;
                var26.count = var29;
                var25 = var28.bind(var3)(var27, var26);
            case 1753:
                var24[1] = var25;
                var20.children = var24;
                var20 = var23.bind(var3)(var21, var20);
                var12[1] = var20;
                var21 = var13.features;
                var20 = var21.has;
                var13 = _closure1_slot9;
                var13 = var13.DISCOVERABLE;
                var20 = var20.bind(var21)(var13);
                var13 = null;
                if (!var20) {
                    _fun97160_ip = 2038;
                    continue _fun97160
                }
            case 1805:
                var13 = null;
                if (var15) {
                    _fun97160_ip = 2038;
                    continue _fun97160
                }
            case 1813:
                var16 = _closure1_slot11;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var14 = var25[var14];
                var14 = var24.bind(var3)(var14);
                var15 = var14.PressableOpacity;
                var14 = {};
                var20 = var22.publicInfo;
                var14.style = var20;
                var20 = 'button';
                var14.accessibilityRole = var20;
                var17 = function() { // Original name: onPress, environment: var17
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 16;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO';
                    var1.key = var5;
                    var7 = _closure1_slot0;
                    var4 = 10;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.O8lDI2;
                    var4 = var5.bind(var6)(var4);
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var14.onPress = var17;
                var21 = _closure1_slot10;
                var23 = _closure1_slot1;
                var17 = 17;
                var17 = var25[var17];
                var20 = var23.bind(var3)(var17);
                var17 = {};
                var22 = var22.publicIcon;
                var17.style = var22;
                var22 = 34;
                var22 = var25[var22];
                var22 = var23.bind(var3)(var22);
                var17.source = var22;
                var20 = var21.bind(var3)(var20, var17);
                var17 = new Array(2);
                var17[0] = var20;
                var20 = _closure1_slot10;
                var18 = var25[var18];
                var18 = var24.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var21 = 10;
                var22 = var25[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["emP/5T"];
                var21 = var22.bind(var23)(var21);
                var18.children = var21;
                var18 = var20.bind(var3)(var19, var18);
                var17[1] = var18;
                var14.children = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 2038:
                var12[2] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[3] = var9;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 12601, 1410, 5608, 660, 33, 1297, 671, 7355, 1234, 7362, 7354, 5403, 7365, 4864, 3107, 4045, 3901, 7358, 7648, 566, 1598, 11069, 12602, 12603, 1464, 7356, 1417, 1443, 7415, 8857, 4666, 8987, 12605, 2]);