// modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HelpdeskArticles;
    var _closure1_slot9 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot10 = var6;
    var6 = var3.GuildSettingsSections;
    var _closure1_slot11 = var6;
    var3 = var3.Permissions;
    var _closure1_slot12 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot13 = var7;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var10 = '100%';
    var9 = {
        'height': '100%',
        'padding': 16
    };
    var3.container = var9;
    var12 = 'center';
    var9 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.header = var9;
    var9 = {};
    var9.textAlign = var12;
    var3.body = var9;
    var9 = {};
    var9.textAlign = var12;
    var3.details = var9;
    var9 = {};
    var9.width = var10;
    var3.headerImage = var9;
    var9 = {
        'marginTop': 24,
        'marginBottom': 24
    };
    var3.button = var9;
    var9 = {
        'marginTop': 32,
        'marginBottom': 32
    };
    var3.features = var9;
    var9 = {
        'backgroundColor': null,
        'flex': 1,
        'flexDirection': 'row',
        'padding': 16,
        'borderRadius': null,
        'marginTop': 8,
        'alignItems': 'flex-start'
    };
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_BACKGROUND_DEFAULT;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var3.featureCard = var9;
    var9 = {
        'backgroundColor': null,
        'borderRadius': 40,
        'marginRight': 16,
        'padding': 8
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_STRONG;
    var9.backgroundColor = var10;
    var3.featureIcon = var9;
    var9 = {
        'overflow': 'hidden',
        'flex': 1
    };
    var3.featureDescription = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.icon;
        var13 = var0.header;
        var10 = var0.body;
        var0 = _closure1_slot15;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot14;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var7.featureCard;
        var0.style = var4;
        var9 = _closure1_slot13;
        var4 = {};
        var8 = var7.featureIcon;
        var4.style = var8;
        var5 = var5.bind(var3)();
        var4.children = var5;
        var5 = var9.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var7 = var7.featureDescription;
        var5.style = var7;
        var8 = _closure1_slot0;
        var11 = _closure1_slot2;
        var7 = 10;
        var6 = var11[var7];
        var6 = var8.bind(var3)(var6);
        var12 = var6.Text;
        var6 = {
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var6.children = var13;
        var12 = var9.bind(var3)(var12, var6);
        var6 = new Array(2);
        var6[0] = var12;
        var7 = var11[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var6[1] = var7;
        var5.children = var6;
        var5 = var2.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NavScrim;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot17 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var0 = var1.guildId;
        var _closure2_slot0 = var0;
        var0 = var1.onClose;
        var _closure2_slot1 = var0;
        var7 = var1.contentContainerStyle;
        var1 = _closure1_slot15;
        var3 = undefined;
        var12 = var1.bind(var3)();
        var17 = _closure1_slot0;
        var18 = _closure1_slot2;
        var1 = 14;
        var1 = var18[var1];
        var2 = var17.bind(var3)(var1);
        var1 = var2.useNavigation;
        var6 = var1.bind(var2)();
        var _closure2_slot2 = var6;
        var1 = 15;
        var2 = var18[var1];
        var9 = var17.bind(var3)(var2);
        var8 = var9.useStateFromStores;
        var2 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var11
            var2 = _closure1_slot7;
            var1 = var2.getGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var8.bind(var9)(var4, var2);
        var _closure2_slot3 = var8;
        var1 = var18[var1];
        var9 = var17.bind(var3)(var1);
        var4 = var9.useStateFromStores;
        var1 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var11
            _fun117639: for (var _fun117639_ip = 0;;) switch (_fun117639_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun117639_ip = 49;
                        continue _fun117639
                    }
                case 16:
                    var4 = _closure1_slot8;
                    var3 = var4.can;
                    var2 = _closure1_slot12;
                    var2 = var2.ADMINISTRATOR;
                    var1 = _closure2_slot3;
                    var0 = var3.bind(var4)(var2, var1);
                case 49:
                    return var0;
            }
        };
        var15 = var4.bind(var9)(var2, var1);
        var _closure2_slot4 = var15;
        var4 = _closure1_slot3;
        var2 = var4.useEffect;
        var1 = new Array(3);
        var1[0] = var8;
        var1[1] = var6;
        var1[2] = var0;
        var0 = function() { // Environment: var11
            _fun117640: for (var _fun117640_ip = 0;;) switch (_fun117640_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun117640_ip = 49;
                        continue _fun117640
                    }
                case 16:
                    var1 = _closure2_slot3;
                    var3 = var1.features;
                    var2 = var3.has;
                    var1 = _closure1_slot10;
                    var1 = var1.COMMUNITY;
                    var0 = var2.bind(var3)(var1);
                case 49:
                    if (!var0) {
                        _fun117640_ip = 133;
                        continue _fun117640
                    }
                case 52:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.setSection;
                        var0 = _closure1_slot11;
                        var0 = var0.COMMUNITY;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot2;
                    var2 = var3.replace;
                    var0 = _closure1_slot11;
                    var1 = var0.COMMUNITY;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.onClose = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 133:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var0 = 18;
        var0 = var18[var0];
        var1 = var17.bind(var3)(var0);
        var0 = var1.useIntroHeaderSource;
        var9 = var0.bind(var1)();
        var2 = _closure1_slot14;
        var0 = 19;
        var0 = var18[var0];
        var0 = var17.bind(var3)(var0);
        var1 = var0.RedesignCompat;
        var0 = {};
        var6 = _closure1_slot6;
        var4 = {};
        var8 = var12.container;
        var4.style = var8;
        var4.contentContainerStyle = var7;
        var10 = _closure1_slot13;
        var8 = _closure1_slot5;
        var7 = {};
        var13 = 'contain';
        var7.resizeMode = var13;
        var7.source = var9;
        var9 = var12.headerImage;
        var7.style = var9;
        var8 = var10.bind(var3)(var8, var7);
        var7 = new Array(6);
        var7[0] = var8;
        var8 = 10;
        var9 = var18[var8];
        var9 = var17.bind(var3)(var9);
        var13 = var9.Text;
        var9 = {
            'style': null,
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var14 = var12.header;
        var9.style = var14;
        var14 = 9;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var20 = var16.intl;
        var19 = var20.string;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16["M/gBcA"];
        var16 = var19.bind(var20)(var16);
        var9.children = var16;
        var9 = var10.bind(var3)(var13, var9);
        var7[1] = var9;
        var9 = 20;
        var9 = var18[var9];
        var9 = var17.bind(var3)(var9);
        var13 = var9.TextWithIOSLinkWorkaround;
        var9 = {
            'style': null,
            'variant': 'text-md/medium',
            'color': 'text-default'
        };
        var16 = var12.body;
        var9.style = var16;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var22 = var16.intl;
        var21 = var22.format;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var16 = var16.t;
        var20 = var16["52EgsM"];
        var16 = {};
        var19 = _closure1_slot1;
        var23 = 21;
        var23 = var18[var23];
        var25 = var19.bind(var3)(var23);
        var24 = var25.getArticleURL;
        var23 = _closure1_slot9;
        var23 = var23.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES;
        var23 = var24.bind(var25)(var23);
        var16.helpdeskArticle = var23;
        var16 = var21.bind(var22)(var20, var16);
        var9.children = var16;
        var9 = var10.bind(var3)(var13, var9);
        var7[2] = var9;
        var16 = 22;
        var9 = var18[var16];
        var13 = var19.bind(var3)(var9);
        var9 = {};
        var20 = var18[var14];
        var20 = var17.bind(var3)(var20);
        var22 = var20.intl;
        var21 = var22.string;
        var20 = var18[var14];
        var20 = var17.bind(var3)(var20);
        var20 = var20.t;
        var20 = var20.LhlgY9;
        var20 = var21.bind(var22)(var20);
        var9.text = var20;
        var16 = var18[var16];
        var16 = var19.bind(var3)(var16);
        var16 = var16.Colors;
        var16 = var16.BRAND;
        var9.color = var16;
        var16 = function() {
            _fun117642: for (var _fun117642_ip = 0;;) switch (_fun117642_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    if (var1) {
                        _fun117642_ip = 47;
                        continue _fun117642
                    }
                case 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.communityAdminOnly;
                    var1 = var1.bind(var2)();
                    _fun117642_ip = 79;
                    continue _fun117642;
                case 47:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.open;
                    var0 = var0.bind(var1)();
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var9.onPress = var16;
        var16 = var12.button;
        var9.style = var16;
        var15 = !var15;
        var9.disabled = var15;
        var9 = var10.bind(var3)(var13, var9);
        var7[3] = var9;
        var8 = var18[var8];
        var8 = var17.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var13 = var12.details;
        var8.style = var13;
        var13 = var18[var14];
        var13 = var17.bind(var3)(var13);
        var16 = var13.intl;
        var15 = var16.string;
        var13 = var18[var14];
        var13 = var17.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.HgTI2N;
        var13 = var15.bind(var16)(var13);
        var8.children = var13;
        var8 = var10.bind(var3)(var9, var8);
        var7[4] = var8;
        var9 = _closure1_slot4;
        var8 = {};
        var12 = var12.features;
        var8.style = var12;
        var12 = {};
        var13 = function() {
            var3 = _closure1_slot13;
            var1 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 8;
            var0 = var6[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.AnalyticsIcon;
            var0 = {};
            var5 = _closure1_slot1;
            var4 = 7;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.unsafe_rawColors;
            var4 = var4.GREEN_360;
            var0.color = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var12.icon = var13;
        var13 = var18[var14];
        var13 = var17.bind(var3)(var13);
        var16 = var13.intl;
        var15 = var16.string;
        var13 = var18[var14];
        var13 = var17.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.oVQF2y;
        var13 = var15.bind(var16)(var13);
        var12.header = var13;
        var13 = var18[var14];
        var13 = var17.bind(var3)(var13);
        var19 = var13.intl;
        var16 = var19.format;
        var13 = var18[var14];
        var13 = var17.bind(var3)(var13);
        var13 = var13.t;
        var15 = var13.A6G7ak;
        var13 = {};
        var20 = function arg0() {
            var3 = _closure1_slot13;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.Text;
            var0 = {
                'variant': 'text-sm/semibold',
                'color': 'mobile-text-heading-primary'
            };
            var4 = arg0;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var13.featureHook = var20;
        var13 = var16.bind(var19)(var15, var13);
        var12.body = var13;
        var13 = new Array(3);
        var13[0] = var12;
        var12 = {};
        var15 = function() {
            var3 = _closure1_slot13;
            var1 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 11;
            var0 = var6[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.LightbulbIcon;
            var0 = {};
            var5 = _closure1_slot1;
            var4 = 7;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.unsafe_rawColors;
            var4 = var4.YELLOW_300;
            var0.color = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var12.icon = var15;
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var19 = var15.intl;
        var16 = var19.string;
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15["0rJl9y"];
        var15 = var16.bind(var19)(var15);
        var12.header = var15;
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var20 = var15.intl;
        var19 = var20.format;
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var15 = var15.t;
        var16 = var15.XsCNky;
        var15 = {};
        var21 = function() {
            var0 = null;
            return var0;
        };
        var15.infoHook = var21;
        var21 = function arg0() {
            var3 = _closure1_slot13;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.Text;
            var0 = {
                'variant': 'text-sm/semibold',
                'color': 'mobile-text-heading-primary'
            };
            var4 = arg0;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var15.featureHook = var21;
        var15 = var19.bind(var20)(var16, var15);
        var12.body = var15;
        var13[1] = var12;
        var12 = {};
        var15 = function() {
            var3 = _closure1_slot13;
            var1 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 12;
            var0 = var6[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.CircleInformationIcon;
            var0 = {};
            var5 = _closure1_slot1;
            var4 = 7;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.unsafe_rawColors;
            var4 = var4.PARTNER;
            var0.color = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var12.icon = var15;
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var19 = var15.intl;
        var16 = var19.string;
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.W2kLJC;
        var15 = var16.bind(var19)(var15);
        var12.header = var15;
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var18[var14];
        var14 = var17.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.hyNkHz;
        var14 = var15.bind(var16)(var14);
        var12.body = var14;
        var13[2] = var12;
        var12 = var13.map;
        var11 = function(arg0, arg1) { // Environment: var11
            var4 = _closure1_slot13;
            var3 = _closure1_slot16;
            var2 = {};
            var6 = arg0;
            var7 = var2;
            var0 = copyDataProperties(var7, var6);
            var1 = undefined;
            var0 = arg1;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var11 = var12.bind(var13)(var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[5] = var8;
        var4.children = var7;
        var6 = var2.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var5 = _closure1_slot17;
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 3093, 660, 33, 1297, 671, 9396, 1234, 3938, 13538, 3267, 5224, 1469, 566, 806, 8284, 14994, 4875, 5384, 1686, 4849, 14998, 3149, 2]);