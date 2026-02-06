// modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
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
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.overview = var8;
    var8 = {};
    var9 = 14;
    var8.fontSize = var9;
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_SUBTLE;
    var8.color = var11;
    var3.formHint = var8;
    var11 = '100%';
    var8 = {
        'height': '100%',
        'padding': 16
    };
    var3.container = var8;
    var12 = 'center';
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.header = var8;
    var8 = {};
    var8.textAlign = var12;
    var3.body = var8;
    var8 = {};
    var8.textAlign = var12;
    var3.details = var8;
    var8 = {};
    var8.width = var11;
    var3.headerImage = var8;
    var8 = {
        'marginTop': 24,
        'marginBottom': 24
    };
    var3.button = var8;
    var8 = {
        'marginTop': 32,
        'marginBottom': 32
    };
    var3.features = var8;
    var8 = {
        'backgroundColor': null,
        'flex': 1,
        'flexDirection': 'row',
        'padding': 16,
        'borderRadius': null,
        'marginTop': 8,
        'alignItems': 'flex-start'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CARD_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.featureCard = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': 40,
        'marginRight': 16,
        'padding': 8
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var9;
    var3.featureIcon = var8;
    var8 = {
        'overflow': 'hidden',
        'flex': 1
    };
    var3.featureDescription = var8;
    var3 = var6.bind(var7)(var3);
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
        var13 = var1.bind(var3)();
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 13;
        var1 = var8[var1];
        var2 = var6.bind(var3)(var1);
        var1 = var2.useNavigation;
        var5 = var1.bind(var2)();
        var _closure2_slot2 = var5;
        var1 = 14;
        var2 = var8[var1];
        var11 = var6.bind(var3)(var2);
        var9 = var11.useStateFromStores;
        var2 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var12
            var2 = _closure1_slot7;
            var1 = var2.getGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var9 = var9.bind(var11)(var4, var2);
        var _closure2_slot3 = var9;
        var1 = var8[var1];
        var11 = var6.bind(var3)(var1);
        var4 = var11.useStateFromStores;
        var1 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var12
            _fun116446: for (var _fun116446_ip = 0;;) switch (_fun116446_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun116446_ip = 49;
                        continue _fun116446
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
        var17 = var4.bind(var11)(var2, var1);
        var _closure2_slot4 = var17;
        var4 = _closure1_slot3;
        var2 = var4.useEffect;
        var1 = new Array(3);
        var1[0] = var9;
        var1[1] = var5;
        var1[2] = var0;
        var0 = function() { // Environment: var12
            _fun116447: for (var _fun116447_ip = 0;;) switch (_fun116447_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun116447_ip = 49;
                        continue _fun116447
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
                        _fun116447_ip = 133;
                        continue _fun116447
                    }
                case 52:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 16;
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
        var0 = 17;
        var0 = var8[var0];
        var1 = var6.bind(var3)(var0);
        var0 = var1.useIntroHeaderSource;
        var14 = var0.bind(var1)();
        var2 = _closure1_slot14;
        var0 = 18;
        var0 = var8[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.RedesignCompat;
        var0 = {};
        var5 = _closure1_slot6;
        var4 = {};
        var9 = var13.container;
        var4.style = var9;
        var4.contentContainerStyle = var7;
        var7 = _closure1_slot13;
        var11 = _closure1_slot5;
        var9 = {};
        var15 = 'contain';
        var9.resizeMode = var15;
        var9.source = var14;
        var14 = var13.headerImage;
        var9.style = var14;
        var11 = var7.bind(var3)(var11, var9);
        var9 = new Array(6);
        var9[0] = var11;
        var11 = 10;
        var14 = var8[var11];
        var14 = var6.bind(var3)(var14);
        var16 = var14.Text;
        var14 = {
            'style': null,
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var15 = var13.header;
        var14.style = var15;
        var15 = 9;
        var18 = var8[var15];
        var18 = var6.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var8[var15];
        var18 = var6.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["M/gBcA"];
        var18 = var19.bind(var20)(var18);
        var14.children = var18;
        var14 = var7.bind(var3)(var16, var14);
        var9[1] = var14;
        var14 = 19;
        var14 = var8[var14];
        var14 = var6.bind(var3)(var14);
        var16 = var14.TextWithIOSLinkWorkaround;
        var14 = {
            'style': null,
            'variant': 'text-md/medium',
            'color': 'text-default'
        };
        var18 = var13.body;
        var14.style = var18;
        var18 = var8[var15];
        var18 = var6.bind(var3)(var18);
        var22 = var18.intl;
        var21 = var22.format;
        var18 = var8[var15];
        var18 = var6.bind(var3)(var18);
        var18 = var18.t;
        var20 = var18["52EgsM"];
        var18 = {};
        var19 = _closure1_slot1;
        var23 = 20;
        var23 = var8[var23];
        var25 = var19.bind(var3)(var23);
        var24 = var25.getArticleURL;
        var23 = _closure1_slot9;
        var23 = var23.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES;
        var23 = var24.bind(var25)(var23);
        var18.helpdeskArticle = var23;
        var18 = var21.bind(var22)(var20, var18);
        var14.children = var18;
        var14 = var7.bind(var3)(var16, var14);
        var9[2] = var14;
        var18 = 21;
        var14 = var8[var18];
        var16 = var19.bind(var3)(var14);
        var14 = {};
        var20 = var8[var15];
        var20 = var6.bind(var3)(var20);
        var22 = var20.intl;
        var21 = var22.string;
        var20 = var8[var15];
        var20 = var6.bind(var3)(var20);
        var20 = var20.t;
        var20 = var20.LhlgY9;
        var20 = var21.bind(var22)(var20);
        var14.text = var20;
        var18 = var8[var18];
        var18 = var19.bind(var3)(var18);
        var18 = var18.Colors;
        var18 = var18.BRAND;
        var14.color = var18;
        var18 = function() {
            _fun116449: for (var _fun116449_ip = 0;;) switch (_fun116449_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    if (var1) {
                        _fun116449_ip = 47;
                        continue _fun116449
                    }
                case 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.communityAdminOnly;
                    var1 = var1.bind(var2)();
                    _fun116449_ip = 79;
                    continue _fun116449;
                case 47:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 22;
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
        var14.onPress = var18;
        var18 = var13.button;
        var14.style = var18;
        var17 = !var17;
        var14.disabled = var17;
        var14 = var7.bind(var3)(var16, var14);
        var9[3] = var14;
        var11 = var8[var11];
        var11 = var6.bind(var3)(var11);
        var14 = var11.Text;
        var11 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var16 = var13.details;
        var11.style = var16;
        var16 = var8[var15];
        var16 = var6.bind(var3)(var16);
        var18 = var16.intl;
        var17 = var18.string;
        var16 = var8[var15];
        var16 = var6.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.HgTI2N;
        var16 = var17.bind(var18)(var16);
        var11.children = var16;
        var11 = var7.bind(var3)(var14, var11);
        var9[4] = var11;
        var11 = _closure1_slot4;
        var10 = {};
        var13 = var13.features;
        var10.style = var13;
        var13 = {};
        var14 = function() {
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
        var13.icon = var14;
        var14 = var8[var15];
        var14 = var6.bind(var3)(var14);
        var17 = var14.intl;
        var16 = var17.string;
        var14 = var8[var15];
        var14 = var6.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.oVQF2y;
        var14 = var16.bind(var17)(var14);
        var13.header = var14;
        var14 = var8[var15];
        var14 = var6.bind(var3)(var14);
        var18 = var14.intl;
        var17 = var18.format;
        var14 = var8[var15];
        var14 = var6.bind(var3)(var14);
        var14 = var14.t;
        var16 = var14.A6G7ak;
        var14 = {};
        var19 = function arg0() {
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
        var14.featureHook = var19;
        var14 = var17.bind(var18)(var16, var14);
        var13.body = var14;
        var14 = new Array(3);
        var14[0] = var13;
        var13 = {};
        var16 = function() {
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
        var13.icon = var16;
        var16 = var8[var15];
        var16 = var6.bind(var3)(var16);
        var18 = var16.intl;
        var17 = var18.string;
        var16 = var8[var15];
        var16 = var6.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16["0rJl9y"];
        var16 = var17.bind(var18)(var16);
        var13.header = var16;
        var16 = var8[var15];
        var16 = var6.bind(var3)(var16);
        var19 = var16.intl;
        var18 = var19.format;
        var16 = var8[var15];
        var16 = var6.bind(var3)(var16);
        var16 = var16.t;
        var17 = var16.XsCNky;
        var16 = {};
        var20 = function() {
            var0 = null;
            return var0;
        };
        var16.infoHook = var20;
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
        var16.featureHook = var20;
        var16 = var18.bind(var19)(var17, var16);
        var13.body = var16;
        var14[1] = var13;
        var13 = {};
        var16 = function() {
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
        var13.icon = var16;
        var16 = var8[var15];
        var16 = var6.bind(var3)(var16);
        var18 = var16.intl;
        var17 = var18.string;
        var16 = var8[var15];
        var16 = var6.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.W2kLJC;
        var16 = var17.bind(var18)(var16);
        var13.header = var16;
        var16 = var8[var15];
        var16 = var6.bind(var3)(var16);
        var17 = var16.intl;
        var16 = var17.string;
        var15 = var8[var15];
        var15 = var6.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.hyNkHz;
        var15 = var16.bind(var17)(var15);
        var13.body = var15;
        var14[2] = var13;
        var13 = var14.map;
        var12 = function(arg0, arg1) { // Environment: var12
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
        var12 = var13.bind(var14)(var12);
        var10.children = var12;
        var10 = var7.bind(var3)(var11, var10);
        var9[5] = var10;
        var4.children = var9;
        var5 = var2.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 24;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.NavScrim;
        var5 = {};
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 3093, 660, 33, 1297, 671, 9396, 1234, 3943, 13524, 3268, 1469, 566, 806, 8180, 14852, 4900, 5337, 1684, 4876, 14856, 3149, 5207, 2]);