// modules/user_settings/native/premium_marketing/Footer.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.AnalyticsPages;
    var7 = var3.AnalyticsSections;
    var6 = var3.AnalyticsObjectTypes;
    var11 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.SubscriptionIntervalTypes;
    var _closure1_slot4 = var9;
    var3 = var3.PremiumTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.jsx;
    var _closure1_slot6 = var9;
    var9 = var3.Fragment;
    var _closure1_slot7 = var9;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = {};
    var8 = var8.USER_SETTINGS;
    var3.page = var8;
    var7 = var7.SETTINGS_PREMIUM;
    var3.section = var7;
    var6 = var6.BUY;
    var3.objectType = var6;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexDirection': 'column',
        'alignItems': 'center',
        'width': '100%'
    };
    var3.container = var8;
    var8 = {};
    var9 = 24;
    var8.marginBottom = var9;
    var3.footerText = var8;
    var8 = {
        'marginBottom': 40,
        'height': 48
    };
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var3.button = var8;
    var8 = {};
    var12 = 7;
    var12 = var5[var12];
    var12 = var10.bind(var0)(var12);
    var11 = var11.PRIMARY_SEMIBOLD;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var10 = var9.WHITE;
    var9 = 16;
    var14 = var12.bind(var0)(var11, var10, var9);
    var15 = var8;
    var9 = copyDataProperties(var15, var14);
    var3.buttonText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/Footer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92813: for (var _fun92813_ip = 0;;) switch (_fun92813_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.style;
                var6 = var0.showSubscribeButton;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var0 = _closure1_slot10;
                var14 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = 9;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.PREMIUM_MARKETING_FOOTER;
                var0 = var1.bind(var3)(var0);
                var0 = var0.analyticsLocations;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot0;
                var0 = 10;
                var0 = var4[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.usePremiumTrialOffer;
                var2 = var0.bind(var2)();
                var0 = 11;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.usePremiumTrialOfferPremiumType;
                var1 = var0.bind(var1)();
                var _closure2_slot1 = var1;
                var0 = null;
                var4 = var0 == var2;
                var10 = undefined;
                if (var4) {
                    _fun92813_ip = 155;
                    continue _fun92813
                }
            case 149:
                var10 = var2.subscription_trial;
            case 155:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var8 = var4.bind(var3)(var2);
                var4 = var8.formatTrialCtaIntervalDuration;
                var2 = {};
                var11 = var0 == var10;
                var9 = undefined;
                if (var11) {
                    _fun92813_ip = 198;
                    continue _fun92813
                }
            case 192:
                var9 = var10.interval;
            case 198:
                var2.intervalType = var9;
                var11 = var0 == var10;
                var9 = undefined;
                if (var11) {
                    _fun92813_ip = 218;
                    continue _fun92813
                }
            case 212:
                var9 = var10.interval_count;
            case 218:
                var2.intervalCount = var9;
                var15 = var4.bind(var8)(var2);
                var16 = var0 != var1;
                _closure2_slot2 = var16;
                var2 = _closure1_slot8;
                var1 = _closure1_slot3;
                var0 = {};
                var8 = var14.container;
                var4 = new Array(2);
                var4[0] = var8;
                var4[1] = var7;
                var0.style = var4;
                if (!var6) {
                    _fun92813_ip = 567;
                    continue _fun92813
                }
            case 273:
                var8 = _closure1_slot8;
                var7 = _closure1_slot7;
                var4 = {};
                var12 = _closure1_slot6;
                var20 = _closure1_slot0;
                var10 = _closure1_slot2;
                var9 = 13;
                var9 = var10[var9];
                var9 = var20.bind(var3)(var9);
                var11 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var14.footerText;
                var9.style = var17;
                var21 = 14;
                var17 = var10[var21];
                var17 = var20.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var10[var21];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["2bSPbq"];
                var17 = var18.bind(var19)(var17);
                var9.children = var17;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = _closure1_slot1;
                var17 = 15;
                var10 = var10[var17];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var18 = var14.button;
                var10.style = var18;
                if (var16) {
                    _fun92813_ip = 488;
                    continue _fun92813
                }
            case 436:
                var20 = _closure1_slot0;
                var16 = _closure1_slot2;
                var18 = var16[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var16[var21];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["8x0jKT"];
                var15 = var18.bind(var19)(var16);
            case 488:
                var10.text = var15;
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var17];
                var15 = var16.bind(var3)(var15);
                var15 = var15.Colors;
                var15 = var15.BRAND;
                var10.color = var15;
                var14 = var14.buttonText;
                var10.textStyle = var14;
                var13 = function() {
                    _fun92814: for (var _fun92814_ip = 0;;) switch (_fun92814_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var3 = _closure1_slot9;
                            var1.analyticsLocation = var3;
                            var4 = _closure2_slot0;
                            var1.analyticsLocations = var4;
                            var6 = _closure2_slot2;
                            var4 = undefined;
                            if (var6) {
                                _fun92814_ip = 66;
                                continue _fun92814
                            }
                        case 59:
                            var4 = function(arg0) { // Environment: var5
                                _fun92815: for (var _fun92815_ip = 0;;) switch (_fun92815_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.additionalPlans;
                                        var5 = var1.isDeprecated;
                                        var4 = var1.numPremiumGuild;
                                        var3 = var1.interval;
                                        var2 = var1.premiumTier;
                                        var0 = var0.length;
                                        var1 = 0;
                                        var0 = var1 === var0;
                                        if (!var0) {
                                            _fun92815_ip = 50;
                                            continue _fun92815
                                        }
                                    case 47:
                                        var0 = !var5;
                                    case 50:
                                        if (!var0) {
                                            _fun92815_ip = 57;
                                            continue _fun92815
                                        }
                                    case 53:
                                        var0 = var1 === var4;
                                    case 57:
                                        if (!var0) {
                                            _fun92815_ip = 77;
                                            continue _fun92815
                                        }
                                    case 60:
                                        var1 = _closure1_slot4;
                                        var1 = var1.MONTH;
                                        var0 = var3 === var1;
                                    case 77:
                                        if (!var0) {
                                            _fun92815_ip = 97;
                                            continue _fun92815
                                        }
                                    case 80:
                                        var1 = _closure1_slot5;
                                        var1 = var1.TIER_1;
                                        var0 = var2 !== var1;
                                    case 97:
                                        return var0;
                                }
                            };
                        case 66:
                            var1.predicate = var4;
                            var6 = _closure2_slot2;
                            var4 = undefined;
                            if (var6) {
                                _fun92814_ip = 87;
                                continue _fun92814
                            }
                        case 80:
                            var4 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var1 = var0.premiumTier;
                                var0 = _closure1_slot5;
                                var0 = var0.TIER_2;
                                var0 = var1 === var0;
                                return var0;
                            };
                        case 87:
                            var1.initialSelectedCriteria = var4;
                            var3 = _closure2_slot1;
                            var1.premiumType = var3;
                            var3 = false;
                            var1.showFormTitle = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var10.onPress = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var4.children = var9;
                var6 = var8.bind(var3)(var7, var4);
            case 567:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 17;
                var5 = var10[var5];
                var6 = var9.bind(var3)(var5);
                var5 = {};
                var8 = 18;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var5.source = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 1623, 33, 1297, 671, 4682, 5777, 5631, 6720, 7138, 3111, 3942, 1234, 4875, 7122, 4704, 12088, 2]);