// modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() { // Original name: Separator, environment: var1
        var1 = _closure1_slot17;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot14;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var4.separator;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() { // Original name: LegalDisclaimer, environment: var1
        var3 = _closure1_slot14;
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
        var9 = _closure1_slot13;
        var9 = var9.TERMS;
        var4.termsURL = var9;
        var8 = _closure1_slot13;
        var8 = var8.PAID_TERMS;
        var4.paidURL = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: SocialBadge, environment: var1
        _fun105334: for (var _fun105334_ip = 0;;) switch (_fun105334_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.iconSource;
                var12 = var0.text;
                var4 = var0.onPress;
                var0 = _closure1_slot17;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var0 = null;
                var5 = var0 != var4;
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var9.socialBadge;
                var0.style = var6;
                var6 = 1;
                if (!var5) {
                    _fun105334_ip = 74;
                    continue _fun105334
                }
            case 64:
                var6 = 0.5;
            case 74:
                var0.activeOpacity = var6;
                var0.onPress = var4;
                var10 = _closure1_slot14;
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
                var11 = _closure1_slot14;
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
                    _fun105334_ip = 263;
                    continue _fun105334
                }
            case 208:
                var8 = _closure1_slot14;
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
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot4 = var6;
    var6 = var3.TouchableOpacity;
    var _closure1_slot5 = var6;
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsLocations;
    var _closure1_slot11 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot12 = var6;
    var3 = var3.MarketingURLs;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var6 = var3.jsxs;
    var _closure1_slot15 = var6;
    var3 = var3.Fragment;
    var _closure1_slot16 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 8;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
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
    var3.guildIconContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
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
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderTopLeftRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderTopRightRadius = var11;
    var3.contentCard = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'paddingBottom': 40
    };
    var3.loadingContainer = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var3.socialContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'backgroundColor': null,
        'borderRadius': null,
        'paddingVertical': 4,
        'paddingHorizontal': 8,
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xl;
    var8.borderRadius = var11;
    var3.socialBadge = var8;
    var8 = {
        'height': 24,
        'marginRight': 6
    };
    var3.socialBadgeIcon = var8;
    var8 = {
        'height': 24,
        'marginLeft': 6
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var8.tintColor = var11;
    var3.socialBadgeArrow = var8;
    var8 = {
        'width': '100%',
        'height': 1,
        'backgroundColor': null,
        'marginVertical': 24
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_BACKGROUND_HOVER;
    var8.backgroundColor = var11;
    var3.separator = var8;
    var8 = {
        'marginVertical': 64,
        'alignSelf': 'center',
        'backgroundColor': 'transparent'
    };
    var3.moneyBirbPlaceholder = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 4294967292
    };
    var3.gatedChannel = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_DEFAULT;
    var8.tintColor = var9;
    var3.gatedChannelIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildRoleSubscriptionPurchasePage, environment: var1
        _fun105335: for (var _fun105335_ip = 0;;) switch (_fun105335_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var _closure2_slot0 = var11;
                var1 = var0.gatedChannelId;
                var _closure2_slot1 = var1;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot17;
                var5 = var0.bind(var3)();
                var _closure2_slot2 = var5;
                var2 = _closure1_slot1;
                var9 = _closure1_slot3;
                var0 = 14;
                var0 = var9[var0];
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var6 = true;
                var0.forceRestore = var6;
                var0 = var2.bind(var3)(var0);
                var8 = _closure1_slot0;
                var0 = 15;
                var2 = var9[var0];
                var6 = var8.bind(var3)(var2);
                var2 = var6.useGroupListingsForGuild;
                var6 = var2.bind(var6)(var11);
                var2 = 0;
                var6 = var6[var2];
                var19 = 16;
                var2 = var9[var19];
                var7 = var8.bind(var3)(var2);
                var2 = var7.useGroupListingsFetchContext;
                var7 = var2.bind(var7)();
                var2 = var9[var0];
                var10 = var8.bind(var3)(var2);
                var2 = var10.useSubscriptionsSettings;
                var2 = var2.bind(var10)(var11);
                var10 = 17;
                var12 = var9[var10];
                var15 = var8.bind(var3)(var12);
                var14 = var15.useStateFromStores;
                var12 = _closure1_slot10;
                var13 = new Array(1);
                var13[0] = var12;
                var12 = function() { // Environment: var18
                    var2 = _closure1_slot10;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var29 = var14.bind(var15)(var13, var12);
                var0 = var9[var0];
                var12 = var8.bind(var3)(var0);
                var9 = var12.useSubscriptionListingsForGroup;
                var32 = null;
                var0 = var32 == var6;
                var8 = undefined;
                if (var0) {
                    _fun105335_ip = 231;
                    continue _fun105335
                }
            case 226:
                var8 = var6.id;
            case 231:
                var0 = {};
                var13 = false;
                var0.includeUnpublished = var13;
                var9 = var9.bind(var12)(var8, var0);
                var8 = var9.map;
                var0 = function(arg0) { // Environment: var18
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var20 = var8.bind(var9)(var0);
                if (!(var32 == var1)) {
                    _fun105335_ip = 279;
                    continue _fun105335
                }
            case 267:
                var0 = _closure1_slot11;
                var9 = var0.ROLE_SUBSCRIPTIONS_TAB;
                _fun105335_ip = 289;
                continue _fun105335;
            case 279:
                var0 = _closure1_slot11;
                var9 = var0.ROLE_SUBSCRIPTION_GATED_CHANNEL;
            case 289:
                var8 = _closure1_slot1;
                var12 = _closure1_slot3;
                var0 = 18;
                var0 = var12[var0];
                var8 = var8.bind(var3)(var0);
                var0 = {};
                var0.guildId = var11;
                var12 = var32 == var6;
                var11 = undefined;
                if (var12) {
                    _fun105335_ip = 329;
                    continue _fun105335
                }
            case 324:
                var11 = var6.id;
            case 329:
                var0.groupListingId = var11;
                var0.location = var9;
                var0.relevantSubscriptionListingIds = var20;
                var0 = var8.bind(var3)(var0);
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = var8[var10];
                var14 = var9.bind(var3)(var0);
                var13 = var14.useStateFromStores;
                var0 = _closure1_slot9;
                var12 = new Array(1);
                var12[0] = var0;
                var11 = new Array(1);
                var11[0] = var1;
                var0 = function() { // Environment: var18
                    var2 = _closure1_slot9;
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
                var8 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var8;
                var8 = function() { // Environment: var18
                    var0 = _closure1_slot8;
                    var1 = var0.theme;
                    var0 = 'light';
                    var0 = var0 === var1;
                    return var0;
                };
                var8 = var11.bind(var12)(var10, var8);
                var11 = _closure1_slot3;
                if (var8) {
                    _fun105335_ip = 463;
                    continue _fun105335
                }
            case 454:
                var8 = 20;
                var8 = var11[var8];
                _fun105335_ip = 470;
                continue _fun105335;
            case 463:
                var10 = 19;
                var8 = var11[var10];
            case 470:
                var10 = var9.bind(var3)(var8);
                if (!var7) {
                    _fun105335_ip = 1803;
                    continue _fun105335
                }
            case 481:
                if (!(var32 != var2)) {
                    _fun105335_ip = 1803;
                    continue _fun105335
                }
            case 488:
                if (!(var32 != var29)) {
                    _fun105335_ip = 1803;
                    continue _fun105335
                }
            case 495:
                if (!(var32 != var6)) {
                    _fun105335_ip = 1803;
                    continue _fun105335
                }
            case 502:
                var7 = _closure1_slot2;
                var8 = _closure1_slot3;
                var6 = 21;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.getCoverImageURI;
                var9 = var6.bind(var7)(var2);
                var21 = var2.description;
                var8 = var29.features;
                var7 = var8.has;
                var6 = _closure1_slot12;
                var6 = var6.PARTNERED;
                var30 = var7.bind(var8)(var6);
                var31 = var2.store_page_trailer_url;
                _closure2_slot4 = var31;
                if (!(var32 != var1)) {
                    _fun105335_ip = 584;
                    continue _fun105335
                }
            case 580:
                if (!(var32 == var0)) {
                    _fun105335_ip = 643;
                    continue _fun105335
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
                var23 = var1.bind(var2)(var0);
                _fun105335_ip = 717;
                continue _fun105335;
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
                var7 = function() { // Original name: unlockHook, environment: var18
                    var3 = _closure1_slot15;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var0 = var6.gatedChannel;
                    var1.style = var0;
                    var13 = _closure1_slot14;
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 22;
                    var4 = var9[var7];
                    var0 = undefined;
                    var11 = var10.bind(var0)(var4);
                    var4 = {};
                    var12 = 3;
                    var4.size = var12;
                    var11 = var13.bind(var0)(var11, var4);
                    var4 = new Array(4);
                    var4[0] = var11;
                    var14 = _closure1_slot14;
                    var15 = 11;
                    var11 = var9[var15];
                    var13 = var10.bind(var0)(var11);
                    var11 = {};
                    var15 = var9[var15];
                    var15 = var10.bind(var0)(var15);
                    var15 = var15.Sizes;
                    var15 = var15.SMALL_20;
                    var11.size = var15;
                    var6 = var6.gatedChannelIcon;
                    var11.style = var6;
                    var6 = _closure1_slot0;
                    var15 = 23;
                    var15 = var9[var15];
                    var17 = var6.bind(var0)(var15);
                    var16 = var17.getChannelIcon;
                    var15 = _closure2_slot3;
                    var15 = var16.bind(var17)(var15);
                    var11.source = var15;
                    var11 = var14.bind(var0)(var13, var11);
                    var4[1] = var11;
                    var11 = _closure1_slot14;
                    var7 = var9[var7];
                    var10 = var10.bind(var0)(var7);
                    var7 = {};
                    var7.size = var12;
                    var7 = var11.bind(var0)(var10, var7);
                    var4[2] = var7;
                    var7 = _closure1_slot14;
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
                var23 = var2.bind(var6)(var1, var0);
            case 717:
                var2 = _closure1_slot15;
                var1 = _closure1_slot7;
                var0 = {};
                var6 = var5.container;
                var0.style = var6;
                var6 = {};
                var7 = 1;
                var6.right = var7;
                var0.scrollIndicatorInsets = var6;
                var8 = _closure1_slot14;
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
                var13 = _closure1_slot15;
                var12 = _closure1_slot6;
                var9 = {};
                var7 = var5.contentCard;
                var9.style = var7;
                var15 = _closure1_slot14;
                var14 = _closure1_slot6;
                var7 = {};
                var8 = var5.guildIconContainer;
                var7.style = var8;
                var25 = _closure1_slot14;
                var26 = 25;
                var8 = var22[var26];
                var24 = var16.bind(var3)(var8);
                var17 = {};
                var8 = _closure1_slot0;
                var26 = var22[var26];
                var26 = var8.bind(var3)(var26);
                var26 = var26.GuildIconSizes;
                var26 = var26.XLARGE;
                var17.size = var26;
                var17.guild = var29;
                var26 = var5.guildIcon;
                var17.style = var26;
                var17 = var25.bind(var3)(var24, var17);
                var7.children = var17;
                var7 = var15.bind(var3)(var14, var7);
                var14 = new Array(11);
                var14[0] = var7;
                var24 = _closure1_slot14;
                var17 = 12;
                var7 = var22[var17];
                var7 = var8.bind(var3)(var7);
                var15 = var7.Text;
                var7 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var39 = 10;
                var25 = var22[var39];
                var25 = var8.bind(var3)(var25);
                var28 = var25.intl;
                var27 = var28.format;
                var25 = var22[var39];
                var25 = var8.bind(var3)(var25);
                var25 = var25.t;
                var26 = var25.mqCkpl;
                var25 = {};
                var29 = var29.name;
                var25.serverName = var29;
                var25 = var27.bind(var28)(var26, var25);
                var7.children = var25;
                var7 = var24.bind(var3)(var15, var7);
                var14[1] = var7;
                var24 = _closure1_slot14;
                var15 = 22;
                var7 = var22[var15];
                var16 = var16.bind(var3)(var7);
                var7 = {};
                var33 = 8;
                var7.size = var33;
                var7 = var24.bind(var3)(var16, var7);
                var14[2] = var7;
                var16 = _closure1_slot14;
                var7 = 26;
                var7 = var22[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.TruncatedText;
                var7 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default',
                    'lineClamp': 3
                };
                var7.children = var21;
                var7 = var16.bind(var3)(var8, var7);
                var14[3] = var7;
                var7 = var30;
                if (var30) {
                    _fun105335_ip = 1135;
                    continue _fun105335
                }
            case 1131:
                var7 = var32 != var31;
            case 1135:
                if (!var7) {
                    _fun105335_ip = 1504;
                    continue _fun105335
                }
            case 1141:
                var21 = _closure1_slot15;
                var16 = _closure1_slot16;
                var8 = {};
                var25 = _closure1_slot14;
                var24 = _closure1_slot1;
                var34 = _closure1_slot3;
                var22 = var34[var15];
                var24 = var24.bind(var3)(var22);
                var22 = {};
                var22.size = var11;
                var24 = var25.bind(var3)(var24, var22);
                var22 = new Array(2);
                var22[0] = var24;
                var26 = _closure1_slot14;
                var25 = _closure1_slot6;
                var24 = {};
                var27 = var5.socialContainer;
                var24.style = var27;
                var29 = _closure1_slot15;
                var28 = _closure1_slot0;
                var27 = 27;
                var27 = var34[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.GappedList;
                var27 = {};
                var27.gap = var33;
                var33 = var30;
                if (!var33) {
                    _fun105335_ip = 1345;
                    continue _fun105335
                }
            case 1250:
                var35 = _closure1_slot14;
                var34 = _closure1_slot20;
                var30 = {};
                var38 = _closure1_slot1;
                var36 = _closure1_slot3;
                var37 = 28;
                var37 = var36[var37];
                var37 = var38.bind(var3)(var37);
                var30.iconSource = var37;
                var40 = _closure1_slot0;
                var37 = var36[var39];
                var37 = var40.bind(var3)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var36[var39];
                var36 = var40.bind(var3)(var36);
                var36 = var36.t;
                var36 = var36["2MhjUV"];
                var36 = var37.bind(var38)(var36);
                var30.text = var36;
                var33 = var35.bind(var3)(var34, var30);
            case 1345:
                var30 = new Array(2);
                var30[0] = var33;
                var31 = var32 != var31;
                if (!var31) {
                    _fun105335_ip = 1466;
                    continue _fun105335
                }
            case 1360:
                var34 = _closure1_slot14;
                var33 = _closure1_slot20;
                var32 = {};
                var37 = _closure1_slot1;
                var35 = _closure1_slot3;
                var36 = 29;
                var36 = var35[var36];
                var36 = var37.bind(var3)(var36);
                var32.iconSource = var36;
                var38 = _closure1_slot0;
                var36 = var35[var39];
                var36 = var38.bind(var3)(var36);
                var37 = var36.intl;
                var36 = var37.string;
                var35 = var35[var39];
                var35 = var38.bind(var3)(var35);
                var35 = var35.t;
                var35 = var35["4PGeGA"];
                var35 = var36.bind(var37)(var35);
                var32.text = var35;
                var35 = function() { // Original name: onPress, environment: var18
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
                var32.onPress = var35;
                var31 = var34.bind(var3)(var33, var32);
            case 1466:
                var30[1] = var31;
                var27.children = var30;
                var27 = var29.bind(var3)(var28, var27);
                var24.children = var27;
                var24 = var26.bind(var3)(var25, var24);
                var22[1] = var24;
                var8.children = var22;
                var7 = var21.bind(var3)(var16, var8);
            case 1504:
                var14[4] = var7;
                var22 = _closure1_slot14;
                var8 = _closure1_slot1;
                var7 = _closure1_slot3;
                var16 = var7[var15];
                var21 = var8.bind(var3)(var16);
                var16 = {};
                var16.size = var19;
                var16 = var22.bind(var3)(var21, var16);
                var14[5] = var16;
                var22 = _closure1_slot14;
                var21 = _closure1_slot19;
                var16 = {};
                var16 = var22.bind(var3)(var21, var16);
                var14[6] = var16;
                var22 = _closure1_slot14;
                var21 = _closure1_slot18;
                var16 = {};
                var16 = var22.bind(var3)(var21, var16);
                var14[7] = var16;
                var22 = _closure1_slot14;
                var16 = _closure1_slot0;
                var17 = var7[var17];
                var17 = var16.bind(var3)(var17);
                var21 = var17.Text;
                var17 = {
                    'variant': 'text-xs/semibold',
                    'color': 'text-muted'
                };
                var24 = {};
                var25 = 'uppercase';
                var24.textTransform = var25;
                var17.style = var24;
                var17.children = var23;
                var17 = var22.bind(var3)(var21, var17);
                var14[8] = var17;
                var21 = _closure1_slot14;
                var15 = var7[var15];
                var17 = var8.bind(var3)(var15);
                var15 = {};
                var15.size = var11;
                var15 = var21.bind(var3)(var17, var15);
                var14[9] = var15;
                var17 = _closure1_slot14;
                var15 = 27;
                var15 = var7[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.GappedList;
                var15 = {};
                var15.gap = var19;
                var19 = var20.map;
                var18 = function(arg0) { // Environment: var18
                    var4 = arg0;
                    var3 = _closure1_slot14;
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
                var18 = var19.bind(var20)(var18);
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[10] = var15;
                var9.children = var14;
                var9 = var13.bind(var3)(var12, var9);
                var6[1] = var9;
                var9 = _closure1_slot14;
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
            case 1803:
                var2 = _closure1_slot14;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = var5.loadingContainer;
                var0.style = var5;
                var6 = _closure1_slot14;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = 'large';
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3155, 1372, 1410, 660, 33, 1297, 671, 5293, 1234, 4045, 3901, 8405, 10704, 10706, 10707, 632, 13677, 13679, 13680, 13681, 9224, 4769, 4666, 7356, 13682, 9286, 13685, 13686, 3103, 13687, 2]);