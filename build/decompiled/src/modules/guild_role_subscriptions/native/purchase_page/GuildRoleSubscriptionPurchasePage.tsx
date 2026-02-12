// modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun105355: for (var _fun105355_ip = 0;;) switch (_fun105355_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.iconSource;
                var12 = var0.text;
                var4 = var0.onPress;
                var0 = _closure1_slot16;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var0 = null;
                var5 = var0 != var4;
                var2 = _closure1_slot14;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var9.socialBadge;
                var0.style = var6;
                var6 = 1;
                if (!var5) {
                    _fun105355_ip = 74;
                    continue _fun105355
                }
            case 64:
                var6 = 0.5;
            case 74:
                var0.activeOpacity = var6;
                var0.onPress = var4;
                var10 = _closure1_slot13;
                var8 = _closure1_slot1;
                var13 = _closure1_slot3;
                var6 = 11;
                var4 = var13[var6];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var4.source = var11;
                var11 = var9.socialBadgeIcon;
                var4.style = var11;
                var11 = 'contain';
                var4.resizeMode = var11;
                var11 = true;
                var4.disableColor = var11;
                var8 = var10.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var11 = _closure1_slot13;
                var10 = _closure1_slot0;
                var8 = 12;
                var8 = var13[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.Text;
                var8 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var8.children = var12;
                var8 = var11.bind(var3)(var10, var8);
                var4[1] = var8;
                if (!var5) {
                    _fun105355_ip = 263;
                    continue _fun105355
                }
            case 208:
                var8 = _closure1_slot13;
                var11 = _closure1_slot1;
                var12 = _closure1_slot3;
                var6 = var12[var6];
                var7 = var11.bind(var3)(var6);
                var6 = {};
                var10 = 13;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var6.source = var10;
                var9 = var9.socialBadgeArrow;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 263:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var9 = var3.ActivityIndicator;
    var7 = var3.TouchableOpacity;
    var _closure1_slot4 = var7;
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var13 = 3;
    var3 = var5[var13];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticsLocations;
    var _closure1_slot10 = var7;
    var7 = var3.GuildFeatures;
    var _closure1_slot11 = var7;
    var3 = var3.MarketingURLs;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot13 = var7;
    var8 = var3.jsxs;
    var _closure1_slot14 = var8;
    var3 = var3.Fragment;
    var _closure1_slot15 = var3;
    var3 = 7;
    var3 = var5[var3];
    var14 = var4.bind(var0)(var3);
    var10 = var14.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var12 = 8;
    var11 = var5[var12];
    var11 = var6.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {
        'aspectRatio': 4,
        'width': '100%'
    };
    var3.heroImage = var8;
    var8 = {
        'borderWidth': 3,
        'borderRadius': null,
        'alignSelf': 'flex-start',
        'top': 4294967261,
        'left': 16,
        'borderColor': null,
        'position': 'absolute'
    };
    var11 = var5[var12];
    var11 = var6.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var11 = 16;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var8.borderColor = var15;
    var3.guildIconContainer = var8;
    var8 = {};
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var8.borderRadius = var15;
    var3.guildIcon = var8;
    var8 = {
        'flex': 1,
        'backgroundColor': null,
        'paddingTop': 47,
        'paddingHorizontal': 16,
        'borderTopLeftRadius': null,
        'borderTopRightRadius': null,
        'marginTop': 4294967281
    };
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var15;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var8.borderTopLeftRadius = var15;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var8.borderTopRightRadius = var15;
    var3.contentCard = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'paddingBottom': 40
    };
    var3.loadingContainer = var8;
    var8 = {};
    var15 = 'row';
    var8.flexDirection = var15;
    var3.socialContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'backgroundColor': null,
        'borderRadius': null,
        'paddingVertical': 4,
        'paddingHorizontal': 8,
        'alignItems': 'center'
    };
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var15;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xl;
    var8.borderRadius = var15;
    var3.socialBadge = var8;
    var8 = 24;
    var15 = {
        'height': 24,
        'marginRight': 6
    };
    var3.socialBadgeIcon = var15;
    var15 = {
        'height': 24,
        'marginLeft': 6
    };
    var16 = var5[var12];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_TEXT_DEFAULT;
    var15.tintColor = var16;
    var3.socialBadgeArrow = var15;
    var15 = {
        'width': '100%',
        'height': 1,
        'backgroundColor': null,
        'marginVertical': 24
    };
    var16 = var5[var12];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_BACKGROUND_HOVER;
    var15.backgroundColor = var16;
    var3.separator = var15;
    var15 = {
        'marginVertical': 64,
        'alignSelf': 'center',
        'backgroundColor': 'transparent'
    };
    var3.moneyBirbPlaceholder = var15;
    var15 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 4294967292
    };
    var3.gatedChannel = var15;
    var15 = {};
    var16 = var5[var12];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_DEFAULT;
    var15.tintColor = var16;
    var3.gatedChannelIcon = var15;
    var3 = var10.bind(var14)(var3);
    var _closure1_slot16 = var3;
    var3 = {};
    var10 = 'large';
    var3.size = var10;
    var3 = var7.bind(var0)(var9, var3);
    var _closure1_slot17 = var3;
    var3 = 14;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var13;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot18 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var13;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot19 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var12;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot20 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var8;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot21 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var11;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot22 = var9;
    var10 = function() {
        var3 = _closure1_slot13;
        var5 = _closure1_slot0;
        var9 = _closure1_slot3;
        var0 = 9;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.TextWithIOSLinkWorkaround;
        var0 = {
            'variant': 'text-xs/normal',
            'color': 'text-muted'
        };
        var4 = 10;
        var6 = var9[var4];
        var6 = var5.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var4 = var9[var4];
        var4 = var5.bind(var2)(var4);
        var4 = var4.t;
        var5 = var4.FSPTDI;
        var4 = {};
        var9 = _closure1_slot12;
        var9 = var9.TERMS;
        var4.termsURL = var9;
        var8 = _closure1_slot12;
        var8 = var8.PAID_TERMS;
        var4.paidURL = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var9 = {};
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot23 = var9;
    var10 = function() {
        var1 = _closure1_slot16;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot13;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var4.separator;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9 = {};
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot24 = var9;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot25 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun105356: for (var _fun105356_ip = 0;;) switch (_fun105356_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var _closure2_slot0 = var11;
                var1 = var0.gatedChannelId;
                var _closure2_slot1 = var1;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot16;
                var5 = var0.bind(var3)();
                var _closure2_slot2 = var5;
                var6 = _closure1_slot1;
                var0 = _closure1_slot3;
                var2 = 15;
                var2 = var0[var2];
                var6 = var6.bind(var3)(var2);
                var2 = {};
                var7 = true;
                var2.forceRestore = var7;
                var2 = var6.bind(var3)(var2);
                var8 = _closure1_slot0;
                var18 = 16;
                var2 = var0[var18];
                var6 = var8.bind(var3)(var2);
                var2 = var6.useGroupListingsForGuild;
                var6 = var2.bind(var6)(var11);
                var2 = 0;
                var6 = var6[var2];
                var2 = 17;
                var2 = var0[var2];
                var7 = var8.bind(var3)(var2);
                var2 = var7.useGroupListingsFetchContext;
                var7 = var2.bind(var7)();
                var2 = var0[var18];
                var9 = var8.bind(var3)(var2);
                var2 = var9.useSubscriptionsSettings;
                var2 = var2.bind(var9)(var11);
                var10 = 18;
                var9 = var0[var10];
                var14 = var8.bind(var3)(var9);
                var13 = var14.useStateFromStores;
                var9 = _closure1_slot9;
                var12 = new Array(1);
                var12[0] = var9;
                var9 = function() { // Environment: var17
                    var2 = _closure1_slot9;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var28 = var13.bind(var14)(var12, var9);
                var0 = var0[var18];
                var12 = var8.bind(var3)(var0);
                var9 = var12.useSubscriptionListingsForGroup;
                var31 = null;
                var0 = var31 == var6;
                var8 = undefined;
                if (var0) {
                    _fun105356_ip = 231;
                    continue _fun105356
                }
            case 226:
                var8 = var6.id;
            case 231:
                var0 = {};
                var13 = false;
                var0.includeUnpublished = var13;
                var9 = var9.bind(var12)(var8, var0);
                var8 = var9.map;
                var0 = function(arg0) { // Environment: var17
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var19 = var8.bind(var9)(var0);
                if (!(var31 == var1)) {
                    _fun105356_ip = 279;
                    continue _fun105356
                }
            case 267:
                var0 = _closure1_slot10;
                var9 = var0.ROLE_SUBSCRIPTIONS_TAB;
                _fun105356_ip = 289;
                continue _fun105356;
            case 279:
                var0 = _closure1_slot10;
                var9 = var0.ROLE_SUBSCRIPTION_GATED_CHANNEL;
            case 289:
                var8 = _closure1_slot1;
                var12 = _closure1_slot3;
                var0 = 19;
                var0 = var12[var0];
                var8 = var8.bind(var3)(var0);
                var0 = {};
                var0.guildId = var11;
                var12 = var31 == var6;
                var11 = undefined;
                if (var12) {
                    _fun105356_ip = 329;
                    continue _fun105356
                }
            case 324:
                var11 = var6.id;
            case 329:
                var0.groupListingId = var11;
                var0.location = var9;
                var0.relevantSubscriptionListingIds = var19;
                var0 = var8.bind(var3)(var0);
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = var8[var10];
                var14 = var9.bind(var3)(var0);
                var13 = var14.useStateFromStores;
                var0 = _closure1_slot8;
                var12 = new Array(1);
                var12[0] = var0;
                var11 = new Array(1);
                var11[0] = var1;
                var0 = function() { // Environment: var17
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var13.bind(var14)(var12, var0, var11);
                _closure2_slot3 = var0;
                var8 = var8[var10];
                var12 = var9.bind(var3)(var8);
                var11 = var12.useStateFromStores;
                var8 = _closure1_slot7;
                var10 = new Array(1);
                var10[0] = var8;
                var8 = function() { // Environment: var17
                    var0 = _closure1_slot7;
                    var1 = var0.theme;
                    var0 = 'light';
                    var0 = var0 === var1;
                    return var0;
                };
                var8 = var11.bind(var12)(var10, var8);
                var11 = _closure1_slot3;
                if (var8) {
                    _fun105356_ip = 463;
                    continue _fun105356
                }
            case 454:
                var8 = 21;
                var8 = var11[var8];
                _fun105356_ip = 470;
                continue _fun105356;
            case 463:
                var10 = 20;
                var8 = var11[var10];
            case 470:
                var10 = var9.bind(var3)(var8);
                if (!var7) {
                    _fun105356_ip = 1688;
                    continue _fun105356
                }
            case 481:
                if (!(var31 != var2)) {
                    _fun105356_ip = 1688;
                    continue _fun105356
                }
            case 488:
                if (!(var31 != var28)) {
                    _fun105356_ip = 1688;
                    continue _fun105356
                }
            case 495:
                if (!(var31 != var6)) {
                    _fun105356_ip = 1688;
                    continue _fun105356
                }
            case 502:
                var7 = _closure1_slot2;
                var8 = _closure1_slot3;
                var6 = 22;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.getCoverImageURI;
                var9 = var6.bind(var7)(var2);
                var20 = var2.description;
                var8 = var28.features;
                var7 = var8.has;
                var6 = _closure1_slot11;
                var6 = var6.PARTNERED;
                var29 = var7.bind(var8)(var6);
                var30 = var2.store_page_trailer_url;
                _closure2_slot4 = var30;
                if (!(var31 != var1)) {
                    _fun105356_ip = 584;
                    continue _fun105356
                }
            case 580:
                if (!(var31 == var0)) {
                    _fun105356_ip = 643;
                    continue _fun105356
                }
            case 584:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 10;
                var1 = var7[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["mPHb1/"];
                var21 = var1.bind(var2)(var0);
                _fun105356_ip = 717;
                continue _fun105356;
            case 643:
                var1 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 10;
                var2 = var7[var0];
                var2 = var1.bind(var3)(var2);
                var6 = var2.intl;
                var2 = var6.format;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.A1L1hU;
                var0 = {};
                var7 = function() {
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var0 = var6.gatedChannel;
                    var1.style = var0;
                    var0 = _closure1_slot18;
                    var4 = new Array(4);
                    var4[0] = var0;
                    var11 = _closure1_slot13;
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var12 = 11;
                    var7 = var9[var12];
                    var0 = undefined;
                    var10 = var13.bind(var0)(var7);
                    var7 = {};
                    var12 = var9[var12];
                    var12 = var13.bind(var0)(var12);
                    var12 = var12.Sizes;
                    var12 = var12.SMALL_20;
                    var7.size = var12;
                    var6 = var6.gatedChannelIcon;
                    var7.style = var6;
                    var6 = _closure1_slot0;
                    var12 = 23;
                    var12 = var9[var12];
                    var14 = var6.bind(var0)(var12);
                    var13 = var14.getChannelIcon;
                    var12 = _closure2_slot3;
                    var12 = var13.bind(var14)(var12);
                    var7.source = var12;
                    var7 = var11.bind(var0)(var10, var7);
                    var4[1] = var7;
                    var7 = _closure1_slot19;
                    var4[2] = var7;
                    var7 = _closure1_slot13;
                    var5 = 12;
                    var5 = var9[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.Text;
                    var5 = {
                        'variant': 'text-xs/semibold',
                        'color': 'text-default'
                    };
                    var8 = _closure2_slot3;
                    var8 = var8.name;
                    var5.children = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var4[3] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.unlockHook = var7;
                var21 = var2.bind(var6)(var1, var0);
            case 717:
                var2 = _closure1_slot14;
                var1 = _closure1_slot6;
                var0 = {};
                var6 = var5.container;
                var0.style = var6;
                var6 = {};
                var7 = 1;
                var6.right = var7;
                var0.scrollIndicatorInsets = var6;
                var8 = _closure1_slot13;
                var16 = _closure1_slot1;
                var22 = _closure1_slot3;
                var11 = 24;
                var6 = var22[var11];
                var7 = var16.bind(var3)(var6);
                var6 = {};
                var6.source = var9;
                var9 = var5.heroImage;
                var6.style = var9;
                var7 = var8.bind(var3)(var7, var6);
                var6 = new Array(3);
                var6[0] = var7;
                var12 = _closure1_slot14;
                var9 = _closure1_slot5;
                var8 = {};
                var7 = var5.contentCard;
                var8.style = var7;
                var14 = _closure1_slot13;
                var13 = _closure1_slot5;
                var7 = {};
                var15 = var5.guildIconContainer;
                var7.style = var15;
                var24 = _closure1_slot13;
                var25 = 25;
                var15 = var22[var25];
                var23 = var16.bind(var3)(var15);
                var16 = {};
                var15 = _closure1_slot0;
                var25 = var22[var25];
                var25 = var15.bind(var3)(var25);
                var25 = var25.GuildIconSizes;
                var25 = var25.XLARGE;
                var16.size = var25;
                var16.guild = var28;
                var25 = var5.guildIcon;
                var16.style = var25;
                var16 = var24.bind(var3)(var23, var16);
                var7.children = var16;
                var7 = var14.bind(var3)(var13, var7);
                var13 = new Array(11);
                var13[0] = var7;
                var23 = _closure1_slot13;
                var14 = 12;
                var7 = var22[var14];
                var7 = var15.bind(var3)(var7);
                var16 = var7.Text;
                var7 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var38 = 10;
                var24 = var22[var38];
                var24 = var15.bind(var3)(var24);
                var27 = var24.intl;
                var26 = var27.format;
                var24 = var22[var38];
                var24 = var15.bind(var3)(var24);
                var24 = var24.t;
                var25 = var24.mqCkpl;
                var24 = {};
                var28 = var28.name;
                var24.serverName = var28;
                var24 = var26.bind(var27)(var25, var24);
                var7.children = var24;
                var7 = var23.bind(var3)(var16, var7);
                var13[1] = var7;
                var7 = _closure1_slot20;
                var13[2] = var7;
                var16 = _closure1_slot13;
                var7 = 26;
                var7 = var22[var7];
                var7 = var15.bind(var3)(var7);
                var15 = var7.TruncatedText;
                var7 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default',
                    'lineClamp': 3
                };
                var7.children = var20;
                var7 = var16.bind(var3)(var15, var7);
                var13[3] = var7;
                var7 = var29;
                if (var29) {
                    _fun105356_ip = 1108;
                    continue _fun105356
                }
            case 1104:
                var7 = var31 != var30;
            case 1108:
                if (!var7) {
                    _fun105356_ip = 1455;
                    continue _fun105356
                }
            case 1114:
                var20 = _closure1_slot14;
                var16 = _closure1_slot15;
                var15 = {};
                var23 = _closure1_slot21;
                var22 = new Array(2);
                var22[0] = var23;
                var25 = _closure1_slot13;
                var24 = _closure1_slot5;
                var23 = {};
                var26 = var5.socialContainer;
                var23.style = var26;
                var28 = _closure1_slot14;
                var27 = _closure1_slot0;
                var32 = _closure1_slot3;
                var26 = 27;
                var26 = var32[var26];
                var26 = var27.bind(var3)(var26);
                var27 = var26.GappedList;
                var26 = {};
                var32 = 8;
                var26.gap = var32;
                var32 = var29;
                if (!var32) {
                    _fun105356_ip = 1296;
                    continue _fun105356
                }
            case 1201:
                var34 = _closure1_slot13;
                var33 = _closure1_slot26;
                var29 = {};
                var37 = _closure1_slot1;
                var35 = _closure1_slot3;
                var36 = 28;
                var36 = var35[var36];
                var36 = var37.bind(var3)(var36);
                var29.iconSource = var36;
                var39 = _closure1_slot0;
                var36 = var35[var38];
                var36 = var39.bind(var3)(var36);
                var37 = var36.intl;
                var36 = var37.string;
                var35 = var35[var38];
                var35 = var39.bind(var3)(var35);
                var35 = var35.t;
                var35 = var35["2MhjUV"];
                var35 = var36.bind(var37)(var35);
                var29.text = var35;
                var32 = var34.bind(var3)(var33, var29);
            case 1296:
                var29 = new Array(2);
                var29[0] = var32;
                var30 = var31 != var30;
                if (!var30) {
                    _fun105356_ip = 1417;
                    continue _fun105356
                }
            case 1311:
                var33 = _closure1_slot13;
                var32 = _closure1_slot26;
                var31 = {};
                var36 = _closure1_slot1;
                var34 = _closure1_slot3;
                var35 = 29;
                var35 = var34[var35];
                var35 = var36.bind(var3)(var35);
                var31.iconSource = var35;
                var37 = _closure1_slot0;
                var35 = var34[var38];
                var35 = var37.bind(var3)(var35);
                var36 = var35.intl;
                var35 = var36.string;
                var34 = var34[var38];
                var34 = var37.bind(var3)(var34);
                var34 = var34.t;
                var34 = var34["4PGeGA"];
                var34 = var35.bind(var36)(var34);
                var31.text = var34;
                var34 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openURL;
                    var0 = _closure2_slot4;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var31.onPress = var34;
                var30 = var33.bind(var3)(var32, var31);
            case 1417:
                var29[1] = var30;
                var26.children = var29;
                var26 = var28.bind(var3)(var27, var26);
                var23.children = var26;
                var23 = var25.bind(var3)(var24, var23);
                var22[1] = var23;
                var15.children = var22;
                var7 = var20.bind(var3)(var16, var15);
            case 1455:
                var13[4] = var7;
                var7 = _closure1_slot22;
                var13[5] = var7;
                var7 = _closure1_slot23;
                var13[6] = var7;
                var7 = _closure1_slot24;
                var13[7] = var7;
                var20 = _closure1_slot13;
                var15 = _closure1_slot0;
                var7 = _closure1_slot3;
                var14 = var7[var14];
                var14 = var15.bind(var3)(var14);
                var16 = var14.Text;
                var14 = {
                    'variant': 'text-xs/semibold',
                    'color': 'text-muted'
                };
                var22 = {};
                var23 = 'uppercase';
                var22.textTransform = var23;
                var14.style = var22;
                var14.children = var21;
                var14 = var20.bind(var3)(var16, var14);
                var13[8] = var14;
                var14 = _closure1_slot25;
                var13[9] = var14;
                var16 = _closure1_slot13;
                var14 = 27;
                var14 = var7[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.GappedList;
                var14 = {};
                var14.gap = var18;
                var18 = var19.map;
                var17 = function(arg0) { // Environment: var17
                    var4 = arg0;
                    var3 = _closure1_slot13;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 31;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.listingId = var4;
                    var5 = _closure2_slot0;
                    var0.guildId = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var17 = var18.bind(var19)(var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[10] = var14;
                var8.children = var13;
                var8 = var12.bind(var3)(var9, var8);
                var6[1] = var8;
                var9 = _closure1_slot13;
                var8 = _closure1_slot1;
                var7 = var7[var11];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.source = var10;
                var10 = var5.moneyBirbPlaceholder;
                var7.style = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[2] = var7;
                var0.children = var6;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1688:
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var5.loadingContainer;
                var0.style = var5;
                var4 = _closure1_slot17;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3198, 1372, 1410, 660, 33, 1297, 671, 5384, 1234, 4092, 3938, 10353, 8880, 10661, 10663, 10664, 632, 13708, 13710, 13711, 13712, 4783, 5426, 7356, 13713, 9356, 13716, 13717, 3146, 13718, 2]);