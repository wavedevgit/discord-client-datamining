// modules/guild_home/native/components/GuildFeedBanner.tsx
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var13 = 4;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var12 = var3.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
    var _closure1_slot8 = var12;
    var3 = var3.GUILD_FEED_MIN_BANNER_HEIGHT;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'borderRadius': null,
        'height': 64,
        'width': 64
    };
    var10 = 8;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var9.borderRadius = var14;
    var3.avatar = var9;
    var9 = {};
    var14 = 24;
    var9.paddingBottom = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var14;
    var3.container = var9;
    var9 = {};
    var9.marginTop = var13;
    var3.description = var9;
    var9 = {
        'marginTop': null,
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var9.marginTop = var12;
    var12 = 'center';
    var3.textContainer = var9;
    var9 = {};
    var13 = '100%';
    var9.width = var13;
    var3.content = var9;
    var9 = {};
    var9.marginLeft = var10;
    var3.icon = var9;
    var9 = {};
    var9.alignItems = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var3.headerContainer = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderTopRightRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderTopLeftRadius = var12;
    var12 = -16;
    var9.marginTop = var12;
    var3.headerBorder = var9;
    var9 = {
        'padding': 4,
        'borderRadius': null,
        'alignSelf': 'flex-start'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var3.guildIconContainer = var9;
    var9 = {
        'width': 4,
        'height': 4,
        'borderRadius': null,
        'marginRight': 4
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var9.backgroundColor = var12;
    var3.dotOnline = var9;
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
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PRIMARY_400;
    var9.backgroundColor = var10;
    var3.dotOffline = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginRight': 12
    };
    var3.publicInfo = var9;
    var9 = {
        'marginRight': 4,
        'width': 14,
        'height': 14
    };
    var3.publicIcon = var9;
    var9 = {
        'marginTop': 4,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.memberInfo = var9;
    var9 = {};
    var10 = '90%';
    var9.maxWidth = var10;
    var3.title = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = function(arg0) { // Original name: GuildFeedBanner, environment: var1
        _fun105165: for (var _fun105165_ip = 0;;) switch (_fun105165_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.guild;
                var _closure2_slot0 = var14;
                var16 = var0.description;
                var1 = var0.hideDescription;
                var12 = var0.hideMemberCount;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var0 = _closure1_slot13;
                var25 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 9;
                var4 = var5[var0];
                var7 = var2.bind(var3)(var4);
                var6 = var7.useSharedValue;
                var4 = 0;
                var7 = var6.bind(var7)(var4);
                var _closure2_slot1 = var7;
                var0 = var5[var0];
                var4 = var2.bind(var3)(var0);
                var2 = var4.useAnimatedStyle;
                var0 = function() { // Original name: R, environment: var20
                    var0 = {};
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var6 = {};
                var6.opacity = var7;
                var0.__closure = var6;
                var6 = 10872399645496.0;
                var0.__workletHash = var6;
                var6 = _closure1_slot14;
                var0.__initData = var6;
                var11 = var2.bind(var4)(var0);
                var4 = _closure1_slot1;
                var0 = 10;
                var2 = var5[var0];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var6 = var2.height;
                var2 = global;
                var8 = var2.Math;
                var7 = var8.max;
                var2 = 0.22;
                var6 = var2 * var6;
                var2 = _closure1_slot9;
                var10 = var7.bind(var8)(var6, var2);
                var2 = 11;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var19 = var2.bind(var3)();
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var14;
                var2 = function() { // Environment: var20
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fetchGuildForPopout;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var4);
                var5 = var6.useMemo;
                var4 = new Array(1);
                var4[0] = var14;
                var2 = function() { // Environment: var20
                    _fun105168: for (var _fun105168_ip = 0;;) switch (_fun105168_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.features;
                            var2 = var3.has;
                            var0 = _closure1_slot10;
                            var0 = var0.ANIMATED_BANNER;
                            var7 = var2.bind(var3)(var0);
                            if (!var7) {
                                _fun105168_ip = 74;
                                continue _fun105168
                            }
                        case 39:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var0 = var2.isAndroid;
                            var0 = var0.bind(var2)();
                            var7 = !var0;
                        case 74:
                            var0 = _closure2_slot0;
                            var0 = var0.banner;
                            var3 = null;
                            var0 = var3 != var0;
                            var5 = null;
                            if (!var0) {
                                _fun105168_ip = 155;
                                continue _fun105168
                            }
                        case 95:
                            var6 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var2);
                            var2 = var6.getGuildBannerSource;
                            var0 = {};
                            var8 = _closure2_slot0;
                            var9 = var8.id;
                            var0.id = var9;
                            var8 = var8.banner;
                            var0.banner = var8;
                            var5 = var2.bind(var6)(var0, var7);
                        case 155:
                            var2 = _closure2_slot0;
                            var0 = var5;
                            if (!(var3 != var2)) {
                                _fun105168_ip = 242;
                                continue _fun105168
                            }
                        case 166:
                            var2 = _closure2_slot0;
                            var2 = var2.homeHeader;
                            var0 = var5;
                            if (!(var3 != var2)) {
                                _fun105168_ip = 242;
                                continue _fun105168
                            }
                        case 183:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getGuildHomeHeaderSource;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var5 = var4.id;
                            var1.id = var5;
                            var4 = var4.homeHeader;
                            var1.homeHeader = var4;
                            var0 = var2.bind(var3)(var1);
                        case 242:
                            return var0;
                    }
                };
                var9 = var5.bind(var6)(var2, var4);
                var15 = var14.name;
                var18 = null;
                if (!(var18 == var16)) {
                    _fun105165_ip = 312;
                    continue _fun105165
                }
            case 307:
                var16 = var14.description;
            case 312:
                if (!var1) {
                    _fun105165_ip = 317;
                    continue _fun105165
                }
            case 315:
                var16 = undefined;
            case 317:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 15;
                var4 = var2[var4];
                var5 = var1.bind(var3)(var4);
                var4 = var5.getGuildBadgeSource;
                var24 = var4.bind(var5)(var14);
                var8 = function() { // Original name: handleLoad, environment: var20
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 16;
                    var1 = var7[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var1);
                    var5 = var6.withTiming;
                    var1 = 17;
                    var1 = var7[var1];
                    var1 = var4.bind(var0)(var1);
                    var4 = var1.timingSlow;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = 18;
                var4 = var2[var4];
                var13 = var1.bind(var3)(var4);
                var7 = var13.useStateFromStoresObject;
                var4 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var4;
                var5 = new Array(1);
                var5[0] = var14;
                var4 = function() { // Environment: var20
                    var0 = {};
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.discoverableGuild = var1;
                    return var0;
                };
                var4 = var7.bind(var13)(var6, var4, var5);
                var28 = var4.discoverableGuild;
                var4 = _closure1_slot1;
                var5 = 19;
                var5 = var2[var5];
                var5 = var4.bind(var3)(var5);
                var5 = var5.bind(var3)();
                _closure2_slot2 = var5;
                var0 = var2[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var7 = var0.width;
                _closure2_slot3 = var7;
                var6 = var0.height;
                _closure2_slot4 = var6;
                var0 = 20;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useDrawerWidth;
                var0 = var0.bind(var1)();
                _closure2_slot5 = var0;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var0;
                var0 = function() { // Environment: var20
                    _fun105171: for (var _fun105171_ip = 0;;) switch (_fun105171_ip) {
                        case 0:
                            var1 = global;
                            var5 = var1.Math;
                            var4 = var5.min;
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot4;
                            var3 = var4.bind(var5)(var3, var2);
                            var2 = _closure2_slot2;
                            if (var2) {
                                _fun105171_ip = 57;
                                continue _fun105171
                            }
                        case 37:
                            var4 = _closure1_slot8;
                            var2 = 2;
                            var2 = var2 * var4;
                            var2 = var3 - var2;
                            return var2;
                        case 57:
                            var6 = var1.Math;
                            var5 = var6.max;
                            var4 = _closure2_slot3;
                            var2 = _closure2_slot4;
                            var4 = var5.bind(var6)(var4, var2);
                            var2 = var1.Math;
                            var1 = var2.min;
                            var0 = _closure2_slot5;
                            var0 = var4 - var0;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var25.container;
                var0.style = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot5;
                if (!(var18 == var9)) {
                    _fun105165_ip = 680;
                    continue _fun105165
                }
            case 567:
                var4 = {};
                var17 = {};
                var17.height = var10;
                var7 = '100%';
                var17.width = var7;
                var7 = new Array(2);
                var7[0] = var17;
                var7[1] = var11;
                var4.style = var7;
                var17 = _closure1_slot0;
                var21 = _closure1_slot2;
                var7 = 21;
                var7 = var21[var7];
                var17 = var17.bind(var3)(var7);
                var7 = var17.isThemeDark;
                var7 = var7.bind(var17)(var19);
                var19 = _closure1_slot1;
                var21 = _closure1_slot2;
                if (var7) {
                    _fun105165_ip = 657;
                    continue _fun105165
                }
            case 643:
                var7 = 23;
                var7 = var21[var7];
                var7 = var19.bind(var3)(var7);
                _fun105165_ip = 669;
                continue _fun105165;
            case 657:
                var17 = 22;
                var17 = var21[var17];
                var7 = var19.bind(var3)(var17);
            case 669:
                var4.source = var7;
                var4.onLoad = var8;
                _fun105165_ip = 726;
                continue _fun105165;
            case 680:
                var7 = {};
                var17 = {};
                var17.height = var10;
                var10 = '100%';
                var17.width = var10;
                var10 = new Array(2);
                var10[0] = var17;
                var10[1] = var11;
                var7.style = var10;
                var7.source = var9;
                var7.onLoad = var8;
                var4 = var7;
            case 726:
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var25.headerContainer;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var25.headerBorder;
                var8[1] = var9;
                var5.style = var8;
                var9 = _closure1_slot12;
                var8 = {};
                var11 = var25.content;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var11.width = var13;
                var13 = -32;
                var11.marginTop = var13;
                var10[1] = var11;
                var8.style = var10;
                var10 = {};
                var11 = var25.guildIconContainer;
                var10.style = var11;
                var17 = _closure1_slot1;
                var13 = _closure1_slot2;
                var19 = 24;
                var11 = var13[var19];
                var17 = var17.bind(var3)(var11);
                var11 = {};
                var21 = var25.avatar;
                var11.style = var21;
                var11.guild = var14;
                var14 = _closure1_slot0;
                var19 = var13[var19];
                var19 = var14.bind(var3)(var19);
                var19 = var19.GuildIconSizes;
                var19 = var19.XLARGE;
                var11.size = var19;
                var23 = true;
                var11.animate = var23;
                var11 = var7.bind(var3)(var17, var11);
                var10.children = var11;
                var11 = var7.bind(var3)(var6, var10);
                var10 = new Array(4);
                var10[0] = var11;
                var11 = {};
                var17 = var25.textContainer;
                var11.style = var17;
                var21 = 25;
                var13 = var13[var21];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'lineClamp': 1,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var25.title;
                var13.style = var17;
                var13.children = var15;
                var14 = var7.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var15 = var18 != var24;
                var14 = null;
                if (!var15) {
                    _fun105165_ip = 1058;
                    continue _fun105165
                }
            case 1008:
                var19 = _closure1_slot11;
                var17 = _closure1_slot1;
                var26 = _closure1_slot2;
                var15 = 26;
                var15 = var26[var15];
                var17 = var17.bind(var3)(var15);
                var15 = {};
                var26 = var25.icon;
                var15.style = var26;
                var15.source = var24;
                var15.disableColor = var23;
                var14 = var19.bind(var3)(var17, var15);
            case 1058:
                var13[1] = var14;
                var11.children = var13;
                var11 = var9.bind(var3)(var6, var11);
                var10[1] = var11;
                var13 = var18 != var16;
                var11 = null;
                if (!var13) {
                    _fun105165_ip = 1146;
                    continue _fun105165
                }
            case 1085:
                var15 = _closure1_slot11;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var21];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var17 = var25.description;
                var13.style = var17;
                var13.children = var16;
                var11 = var15.bind(var3)(var14, var13);
            case 1146:
                var10[2] = var11;
                var11 = var18 != var28;
                if (!var11) {
                    _fun105165_ip = 1160;
                    continue _fun105165
                }
            case 1157:
                var11 = !var12;
            case 1160:
                if (!var11) {
                    _fun105165_ip = 1686;
                    continue _fun105165
                }
            case 1166:
                var14 = _closure1_slot12;
                var13 = _closure1_slot4;
                var12 = {};
                var15 = var25.memberInfo;
                var12.style = var15;
                var17 = var28.features;
                var16 = var17.has;
                var15 = _closure1_slot10;
                var15 = var15.DISCOVERABLE;
                var15 = var16.bind(var17)(var15);
                var16 = null;
                if (!var15) {
                    _fun105165_ip = 1444;
                    continue _fun105165
                }
            case 1220:
                var19 = _closure1_slot12;
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var15 = 27;
                var15 = var32[var15];
                var15 = var31.bind(var3)(var15);
                var17 = var15.PressableOpacity;
                var15 = {};
                var23 = var25.publicInfo;
                var15.style = var23;
                var23 = 'button';
                var15.accessibilityRole = var23;
                var20 = function() { // Original name: onPress, environment: var20
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 28;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO';
                    var1.key = var5;
                    var7 = _closure1_slot0;
                    var4 = 29;
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
                var15.onPress = var20;
                var26 = _closure1_slot11;
                var27 = _closure1_slot1;
                var20 = 26;
                var20 = var32[var20];
                var23 = var27.bind(var3)(var20);
                var20 = {};
                var24 = var25.publicIcon;
                var20.style = var24;
                var24 = 30;
                var24 = var32[var24];
                var24 = var27.bind(var3)(var24);
                var20.source = var24;
                var23 = var26.bind(var3)(var23, var20);
                var20 = new Array(2);
                var20[0] = var23;
                var23 = var32[var21];
                var23 = var31.bind(var3)(var23);
                var24 = var23.Text;
                var23 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var27 = 29;
                var29 = var32[var27];
                var29 = var31.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var27 = var32[var27];
                var27 = var31.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27["B/vjCu"];
                var27 = var29.bind(var30)(var27);
                var23.children = var27;
                var23 = var26.bind(var3)(var24, var23);
                var20[1] = var23;
                var15.children = var20;
                var16 = var19.bind(var3)(var17, var15);
            case 1444:
                var15 = new Array(2);
                var15[0] = var16;
                var16 = var28.presenceCount;
                var17 = var18 != var16;
                var16 = null;
                if (!var17) {
                    _fun105165_ip = 1672;
                    continue _fun105165
                }
            case 1470:
                var17 = var28.memberCount;
                var17 = var18 != var17;
                var16 = null;
                if (!var17) {
                    _fun105165_ip = 1672;
                    continue _fun105165
                }
            case 1488:
                var19 = _closure1_slot12;
                var17 = _closure1_slot3;
                var18 = var17.Fragment;
                var17 = {};
                var23 = _closure1_slot11;
                var24 = _closure1_slot4;
                var20 = {};
                var25 = var25.dotOnline;
                var20.style = var25;
                var24 = var23.bind(var3)(var24, var20);
                var20 = new Array(2);
                var20[0] = var24;
                var25 = _closure1_slot0;
                var29 = _closure1_slot2;
                var21 = var29[var21];
                var21 = var25.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var24 = 29;
                var26 = var29[var24];
                var26 = var25.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.format;
                var24 = var29[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.t;
                var25 = var24.QCNv6P;
                var24 = {};
                var29 = var28.presenceCount;
                var24.online = var29;
                var28 = var28.memberCount;
                var24.offline = var28;
                var24 = var26.bind(var27)(var25, var24);
                var21.children = var24;
                var21 = var23.bind(var3)(var22, var21);
                var20[1] = var21;
                var17.children = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 1672:
                var15[1] = var16;
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 1686:
                var10[3] = var11;
                var8.children = var10;
                var8 = var9.bind(var3)(var6, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun105173: for (var _fun105173_ip = 0;;) switch (_fun105173_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var7 = var1.description;
                var6 = var1.hideDescription;
                var5 = var1.hideMemberCount;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 18;
                var2 = var4[var2];
                var4 = undefined;
                var8 = var3.bind(var4)(var2);
                var3 = var8.useStateFromStores;
                var9 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var3.bind(var8)(var2, var0);
                var0 = null;
                var2 = var0 == var8;
                if (var2) {
                    _fun105173_ip = 129;
                    continue _fun105173
                }
            case 95:
                var3 = _closure1_slot11;
                var2 = _closure1_slot15;
                var1 = {};
                var1.guild = var8;
                var1.description = var7;
                var1.hideDescription = var6;
                var1.hideMemberCount = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 129:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_home/native/components/GuildFeedBanner.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 12576, 1410, 13669, 660, 33, 1297, 671, 3677, 1464, 3205, 11063, 478, 1417, 7412, 4050, 4837, 566, 7645, 9762, 3165, 13670, 13671, 7353, 3895, 4039, 4858, 3107, 1234, 12580, 2]);