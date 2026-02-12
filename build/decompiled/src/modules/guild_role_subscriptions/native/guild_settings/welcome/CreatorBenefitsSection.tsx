// modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun115975: for (var _fun115975_ip = 0;;) switch (_fun115975_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isThemeDark;
                var0 = arg1;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun115975_ip = 53;
                    continue _fun115975
                }
            case 45:
                var0 = var1.greenTextLightMode;
                _fun115975_ip = 59;
                continue _fun115975;
            case 53:
                var0 = var1.greenTextDarkMode;
            case 59:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var8 = function arg0() {
        var0 = arg0;
        var8 = var0.avatarSource;
        var0 = _closure1_slot7;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var7.benefitAvatarContainer;
        var0.style = var5;
        var6 = _closure1_slot5;
        var5 = _closure1_slot1;
        var9 = _closure1_slot2;
        var4 = 10;
        var4 = var9[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.source = var8;
        var7 = var7.benefitAvatar;
        var4.style = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var8;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot3 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CREATOR_REVENUE_SHARE_PERCENTAGE;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.jsx;
    var _closure1_slot5 = var11;
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = 4;
    var3 = var5[var3];
    var12 = var4.bind(var0)(var3);
    var9 = var12.createStyles;
    var3 = {};
    var13 = {
        'flex': 1,
        'flexDirection': 'row'
    };
    var3.horizontalContainer = var13;
    var13 = {};
    var14 = 20;
    var13.padding = var14;
    var15 = 5;
    var14 = var5[var15];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var13.backgroundColor = var14;
    var14 = var5[var15];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13.borderRadius = var14;
    var14 = 'hidden';
    var13.overflow = var14;
    var3.benefitAvatarContainer = var13;
    var13 = {};
    var14 = 6;
    var13.marginVertical = var14;
    var14 = var5[var15];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var13.backgroundColor = var14;
    var14 = var5[var15];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13.borderRadius = var14;
    var3.benefitCard = var13;
    var13 = {
        'width': 40,
        'height': 40,
        'marginHorizontal': 8,
        'borderRadius': 20,
        'overflow': 'hidden'
    };
    var3.benefitAvatar = var13;
    var14 = 24;
    var13 = {
        'marginHorizontal': 24,
        'marginBottom': 24,
        'justifyContent': 'space-between'
    };
    var3.benefitAvatars = var13;
    var13 = {
        'marginStart': 24,
        'marginEnd': 35,
        'marginVertical': 24
    };
    var3.benefitCardTitle = var13;
    var13 = {
        'shadowColor': null,
        'shadowOffset': null,
        'shadowOpacity': 0.16,
        'shadowRadius': 16,
        'elevation': 4
    };
    var16 = var5[var15];
    var16 = var10.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BLACK;
    var13.shadowColor = var16;
    var16 = {
        'width': 0,
        'height': 8
    };
    var13.shadowOffset = var16;
    var3.earningMetricsShadowContainer = var13;
    var13 = {};
    var16 = 0.24;
    var13.shadowOpacity = var16;
    var3.earningMetricsShadowContainerDarkMode = var13;
    var13 = {
        'marginHorizontal': 24,
        'marginBottom': 24,
        'padding': 16,
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var16 = var5[var15];
    var16 = var10.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var13.borderRadius = var16;
    var3.earningMetrics = var13;
    var13 = {};
    var16 = '#2E3638';
    var13.backgroundColor = var16;
    var3.earningMetricsDarkMode = var13;
    var13 = {};
    var16 = var5[var15];
    var16 = var10.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var13.backgroundColor = var16;
    var3.earningMetricsLightMode = var13;
    var13 = {};
    var16 = var5[var15];
    var16 = var10.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.GREEN_230;
    var13.color = var16;
    var3.greenTextDarkMode = var13;
    var13 = {};
    var15 = var5[var15];
    var15 = var10.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.GREEN_400;
    var13.color = var15;
    var3.greenTextLightMode = var13;
    var13 = {
        'width': 54,
        'height': 54,
        'borderRadius': 27,
        'overflow': 'hidden'
    };
    var3.earningMetricsAvatar = var13;
    var13 = {
        'marginTop': 50,
        'marginStart': 16
    };
    var3.socialIllo = var13;
    var13 = {
        'position': 'absolute',
        'bottom': 25,
        'end': 0
    };
    var3.lanyardIllo = var13;
    var13 = {
        'fontSize': 50,
        'lineHeight': 52
    };
    var3.revenueShare = var13;
    var13 = {};
    var13.padding = var14;
    var3.revenueShareContainer = var13;
    var13 = {
        'marginTop': 15,
        'alignSelf': 'flex-end'
    };
    var3.revenueShareIllo = var13;
    var13 = {};
    var14 = 120;
    var13.marginEnd = var14;
    var3.revenueShareDescription = var13;
    var3 = var9.bind(var12)(var3);
    var _closure1_slot7 = var3;
    var9 = function() {
        _fun115976: for (var _fun115976_ip = 0;;) switch (_fun115976_ip) {
            case 0:
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var19 = var0.bind(var3)();
                var0 = _closure1_slot7;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var6 = var11.earningMetricsShadowContainer;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot0;
                var12 = 6;
                var5 = var5[var12];
                var6 = var6.bind(var3)(var5);
                var5 = var6.isThemeDark;
                var5 = var5.bind(var6)(var19);
                if (!var5) {
                    _fun115976_ip = 97;
                    continue _fun115976
                }
            case 91:
                var5 = var11.earningMetricsShadowContainerDarkMode;
            case 97:
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot3;
                var4 = {};
                var9 = var11.earningMetrics;
                var7 = new Array(3);
                var7[0] = var9;
                var9 = var11.horizontalContainer;
                var7[1] = var9;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var10 = var10.bind(var3)(var9);
                var9 = var10.isThemeDark;
                var9 = var9.bind(var10)(var19);
                if (var9) {
                    _fun115976_ip = 178;
                    continue _fun115976
                }
            case 170:
                var9 = var11.earningMetricsLightMode;
                _fun115976_ip = 184;
                continue _fun115976;
            case 178:
                var9 = var11.earningMetricsDarkMode;
            case 184:
                var7[2] = var9;
                var4.style = var7;
                var10 = _closure1_slot6;
                var9 = _closure1_slot3;
                var7 = {};
                var16 = _closure1_slot5;
                var20 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = 8;
                var12 = var13[var14];
                var12 = var20.bind(var3)(var12);
                var15 = var12.Text;
                var12 = {
                    'variant': 'text-sm/normal',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = 9;
                var18 = var13[var17];
                var18 = var20.bind(var3)(var18);
                var22 = var18.intl;
                var21 = var22.string;
                var18 = var13[var17];
                var18 = var20.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.TXPK7B;
                var18 = var21.bind(var22)(var18);
                var12.children = var18;
                var15 = var16.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                var16 = _closure1_slot5;
                var14 = var13[var14];
                var14 = var20.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {};
                var18 = _closure1_slot12;
                var18 = var18.bind(var3)(var11, var19);
                var14.style = var18;
                var18 = 'heading-lg/extrabold';
                var14.variant = var18;
                var18 = var13[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var13[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.LdjJG5;
                var17 = var18.bind(var19)(var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var12[1] = var14;
                var7.children = var12;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot5;
                var12 = _closure1_slot1;
                var8 = 10;
                var8 = var13[var8];
                var9 = var12.bind(var3)(var8);
                var8 = {};
                var11 = var11.earningMetricsAvatar;
                var8.style = var11;
                var11 = 11;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var8.source = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = {};
    var3 = var11.bind(var0)(var9, var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var9 = 17;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var3.avatarSource = var9;
    var3 = var11.bind(var0)(var8, var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var9 = 18;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var3.avatarSource = var9;
    var3 = var11.bind(var0)(var8, var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var9 = function() {
        _fun115977: for (var _fun115977_ip = 0;;) switch (_fun115977_ip) {
            case 0:
                var1 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 7;
                var0 = var15[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var14 = var0.bind(var3)();
                var0 = _closure1_slot7;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var10.benefitCard;
                var0.style = var4;
                var6 = _closure1_slot5;
                var13 = _closure1_slot0;
                var4 = 8;
                var4 = var15[var4];
                var4 = var13.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'heading-md/medium',
                    'color': 'text-default'
                };
                var7 = var10.benefitCardTitle;
                var4.style = var7;
                var7 = 9;
                var8 = var15[var7];
                var8 = var13.bind(var3)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var7 = var15[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["9CdmS8"];
                var7 = var8.bind(var11)(var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = _closure1_slot8;
                var4[1] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var11 = var10.horizontalContainer;
                var8 = new Array(2);
                var8[0] = var11;
                var10 = var10.benefitAvatars;
                var8[1] = var10;
                var5.style = var8;
                var11 = _closure1_slot5;
                var10 = _closure1_slot13;
                var8 = {};
                var12 = 6;
                var12 = var15[var12];
                var13 = var13.bind(var3)(var12);
                var12 = var13.isThemeDark;
                var12 = var12.bind(var13)(var14);
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                if (var12) {
                    _fun115977_ip = 279;
                    continue _fun115977
                }
            case 265:
                var12 = 13;
                var12 = var15[var12];
                var12 = var14.bind(var3)(var12);
                _fun115977_ip = 291;
                continue _fun115977;
            case 279:
                var13 = 12;
                var13 = var15[var13];
                var12 = var14.bind(var3)(var13);
            case 291:
                var8.avatarSource = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var10 = _closure1_slot10;
                var8[1] = var10;
                var9 = _closure1_slot9;
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var8 = {};
    var9 = var11.bind(var0)(var9, var8);
    var8 = new Array(3);
    var8[0] = var9;
    var10 = function() {
        var0 = _closure1_slot7;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var8.benefitCard;
        var0.style = var4;
        var7 = _closure1_slot5;
        var13 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 8;
        var4 = var10[var4];
        var4 = var13.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'heading-md/medium',
            'color': 'text-default'
        };
        var9 = var8.benefitCardTitle;
        var4.style = var9;
        var9 = 9;
        var11 = var10[var9];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var9 = var10[var9];
        var9 = var13.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.qsKRUQ;
        var9 = var11.bind(var12)(var9);
        var4.children = var9;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var12 = _closure1_slot5;
        var9 = _closure1_slot1;
        var5 = 10;
        var7 = var10[var5];
        var11 = var9.bind(var3)(var7);
        var7 = {};
        var13 = var8.socialIllo;
        var7.style = var13;
        var13 = 14;
        var13 = var10[var13];
        var13 = var9.bind(var3)(var13);
        var7.source = var13;
        var7 = var12.bind(var3)(var11, var7);
        var4[1] = var7;
        var7 = _closure1_slot5;
        var5 = var10[var5];
        var6 = var9.bind(var3)(var5);
        var5 = {};
        var8 = var8.lanyardIllo;
        var5.style = var8;
        var8 = 15;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var5.source = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9 = {};
    var9 = var11.bind(var0)(var10, var9);
    var8[1] = var9;
    var10 = function() {
        var9 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 7;
        var0 = var10[var0];
        var3 = undefined;
        var0 = var9.bind(var3)(var0);
        var14 = var0.bind(var3)();
        var0 = _closure1_slot7;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var6 = var8.benefitCard;
        var4 = new Array(2);
        var4[0] = var6;
        var6 = var8.revenueShareContainer;
        var4[1] = var6;
        var0.style = var4;
        var11 = _closure1_slot5;
        var15 = _closure1_slot0;
        var6 = 8;
        var4 = var10[var6];
        var4 = var15.bind(var3)(var4);
        var7 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'heading-xxl/extrabold',
            'color': 'status-positive'
        };
        var13 = var8.revenueShare;
        var12 = new Array(2);
        var12[0] = var13;
        var13 = _closure1_slot12;
        var13 = var13.bind(var3)(var8, var14);
        var12[1] = var13;
        var4.style = var12;
        var13 = _closure1_slot4;
        var12 = '%';
        var12 = var13 + var12;
        var4.children = var12;
        var7 = var11.bind(var3)(var7, var4);
        var4 = new Array(3);
        var4[0] = var7;
        var11 = _closure1_slot5;
        var6 = var10[var6];
        var6 = var15.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'heading-md/medium',
            'color': 'text-default'
        };
        var12 = var8.revenueShareDescription;
        var6.style = var12;
        var12 = 9;
        var13 = var10[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var10[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.AewsXD;
        var12 = var13.bind(var14)(var12);
        var6.children = var12;
        var6 = var11.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot5;
        var5 = 10;
        var5 = var10[var5];
        var6 = var9.bind(var3)(var5);
        var5 = {};
        var8 = var8.revenueShareIllo;
        var5.style = var8;
        var8 = 16;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var5.source = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9 = {};
    var9 = var11.bind(var0)(var10, var9);
    var8[2] = var9;
    var3.children = var8;
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot11;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5694, 33, 1297, 671, 3207, 3247, 3938, 1234, 5426, 14854, 14855, 14856, 14857, 14858, 14859, 14860, 14861, 2]);