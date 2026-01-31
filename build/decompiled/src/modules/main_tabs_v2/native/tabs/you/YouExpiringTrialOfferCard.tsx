// modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun103451: for (var _fun103451_ip = 0;;) switch (_fun103451_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.PREMIUM_TIER_0_TRIAL_ENDING;
                if (!(var1 !== var4)) {
                    _fun103451_ip = 98;
                    continue _fun103451
                }
            case 20:
                var1 = _closure1_slot10;
                var1 = var1.PREMIUM_TIER_2_TRIAL_ENDING;
                if (!(var1 !== var4)) {
                    _fun103451_ip = 86;
                    continue _fun103451
                }
            case 34:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Unsupported notice type: ';
                var5 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 86:
                var1 = _closure1_slot7;
                var1 = var1.PREMIUM_TIER_2_TRI_COLOR;
                return var1;
            case 98:
                var0 = _closure1_slot7;
                var0 = var0.PREMIUM_TIER_0;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun103452: for (var _fun103452_ip = 0;;) switch (_fun103452_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var5 = arg2;
                var0 = var7.days;
                var1 = 0;
                if (!(!(var0 > var1))) {
                    _fun103452_ip = 232;
                    continue _fun103452
                }
            case 24:
                var0 = var7.hours;
                if (!(!(var0 > var1))) {
                    _fun103452_ip = 144;
                    continue _fun103452
                }
            case 34:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 11;
                var2 = var8[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.format;
                var0 = var8[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.SxXB42;
                var0 = {};
                var4 = global;
                var10 = var4.Math;
                var9 = var10.max;
                var8 = var7.minutes;
                var4 = 1;
                var4 = var9.bind(var10)(var8, var4);
                var0.minutes = var4;
                var0.trialPeriod = var6;
                var0.termsUrl = var5;
                var0 = var2.bind(var3)(var1, var0);
                _fun103452_ip = 230;
                continue _fun103452;
            case 144:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 11;
                var3 = var9[var1];
                var2 = undefined;
                var3 = var8.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.WFMtg1;
                var1 = {};
                var8 = var7.hours;
                var1.hours = var8;
                var1.trialPeriod = var6;
                var1.termsUrl = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 230:
                _fun103452_ip = 318;
                continue _fun103452;
            case 232:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 11;
                var3 = var9[var1];
                var2 = undefined;
                var3 = var8.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.GPqVWT;
                var1 = {};
                var7 = var7.days;
                var1.days = var7;
                var1.trialPeriod = var6;
                var1.termsUrl = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 318:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var6 = var3.Gradients;
    var _closure1_slot7 = var6;
    var6 = var3.HelpdeskArticles;
    var _closure1_slot8 = var6;
    var6 = var3.HorizontalGradient;
    var _closure1_slot9 = var6;
    var3 = var3.NoticeTypes;
    var _closure1_slot10 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var6 = var3.Fragment;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var3 = var3.Millis;
    var6 = var3.SECOND;
    var3 = 10;
    var3 = var3 * var6;
    var _closure1_slot15 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'marginBottom': 16,
        'marginRight': 32
    };
    var3.header = var8;
    var8 = {
        'position': 'absolute',
        'top': 16,
        'right': 16
    };
    var3.closeButton = var8;
    var8 = {};
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var12;
    var3.closeIcon = var8;
    var8 = {
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'overflow': 'hidden'
    };
    var3.linearGradient = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var8.borderRadius = var10;
    var8.gap = var9;
    var3.primaryCTA = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103453: for (var _fun103453_ip = 0;;) switch (_fun103453_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.navigateToPremium;
                var _closure2_slot0 = var1;
                var6 = var0.style;
                var4 = undefined;
                var _closure2_slot5 = var4;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var8 = var0.bind(var4)();
                var7 = var8.add;
                var1 = 5;
                var0 = 'days';
                var0 = var7.bind(var8)(var1, var0);
                var _closure2_slot1 = var0;
                var0 = _closure1_slot16;
                var14 = var0.bind(var4)();
                var _closure2_slot2 = var14;
                var7 = _closure1_slot0;
                var0 = 13;
                var0 = var5[var0];
                var9 = var7.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var12
                    var1 = _closure1_slot5;
                    var0 = var1.getNoticeType;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var8.bind(var9)(var1, var0);
                var _closure2_slot3 = var1;
                var0 = 14;
                var0 = var5[var0];
                var7 = var7.bind(var4)(var0);
                var0 = var7.usePremiumTrialOffer;
                var20 = var0.bind(var7)();
                var _closure2_slot4 = var20;
                var0 = 15;
                var0 = var5[var0];
                var7 = var3.bind(var4)(var0);
                var0 = null;
                var3 = var0 != var20;
                var5 = 0;
                if (!var3) {
                    _fun103453_ip = 226;
                    continue _fun103453
                }
            case 186:
                var3 = var20.expires_at;
                var3 = var0 != var3;
                var5 = 0;
                if (!var3) {
                    _fun103453_ip = 226;
                    continue _fun103453
                }
            case 201:
                var3 = global;
                var9 = var3.Date;
                var8 = var9.parse;
                var3 = var20.expires_at;
                var5 = var8.bind(var9)(var3);
            case 226:
                var3 = _closure1_slot15;
                var17 = var7.bind(var4)(var5, var3);
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 16;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useShouldShowExpiringTrialOfferCard;
                var3 = var3.bind(var5)();
                _closure2_slot5 = var3;
                var9 = _closure1_slot3;
                var8 = var9.useEffect;
                var7 = new Array(3);
                var7[0] = var1;
                var7[1] = var3;
                var7[2] = var20;
                var5 = function() { // Environment: var12
                    _fun103455: for (var _fun103455_ip = 0;;) switch (_fun103455_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun103455_ip = 20;
                                continue _fun103455
                            }
                        case 10:
                            var3 = _closure2_slot3;
                            var2 = null;
                            var1 = var2 != var3;
                        case 20:
                            if (!var1) {
                                _fun103455_ip = 33;
                                continue _fun103455
                            }
                        case 23:
                            var3 = _closure2_slot4;
                            var2 = null;
                            var1 = var2 != var3;
                        case 33:
                            if (!var1) {
                                _fun103455_ip = 108;
                                continue _fun103455
                            }
                        case 36:
                            var5 = _closure2_slot3;
                            var0 = _closure2_slot4;
                            var4 = var0.trial_id;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot6;
                            var1 = var0.APP_NOTICE_VIEWED;
                            var0 = {};
                            var0.notice_type = var5;
                            var0.trial_id = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 108:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var5, var7);
                if (var3) {
                    _fun103453_ip = 313;
                    continue _fun103453
                }
            case 311:
                return var0;
            case 313:
                if (!(var0 != var20)) {
                    _fun103453_ip = 927;
                    continue _fun103453
                }
            case 320:
                if (!(var0 != var1)) {
                    _fun103453_ip = 927;
                    continue _fun103453
                }
            case 327:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 17;
                var1 = var5[var1];
                var5 = var3.bind(var4)(var1);
                var3 = var5.getArticleURL;
                var7 = var20.trial_id;
                var1 = _closure1_slot11;
                if (!(var7 !== var1)) {
                    _fun103453_ip = 379;
                    continue _fun103453
                }
            case 367:
                var1 = _closure1_slot8;
                var1 = var1.PREMIUM_TRIAL;
                _fun103453_ip = 389;
                continue _fun103453;
            case 379:
                var7 = _closure1_slot8;
                var1 = var7.NITRO_TRIAL_FOR_ALL;
            case 389:
                var16 = var3.bind(var5)(var1);
                var8 = _closure1_slot14;
                var5 = _closure1_slot13;
                var1 = {};
                var9 = _closure1_slot12;
                var7 = _closure1_slot4;
                var3 = {};
                var10 = var14.header;
                var3.style = var10;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var10 = 18;
                var10 = var19[var10];
                var10 = var18.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'heading-sm/medium',
                    'color': 'text-default'
                };
                var15 = _closure1_slot18;
                var13 = 19;
                var13 = var19[var13];
                var19 = var18.bind(var4)(var13);
                var18 = var19.formatIntervalDuration;
                var13 = {};
                var22 = var20.subscription_trial;
                var23 = var0 == var22;
                var21 = undefined;
                if (var23) {
                    _fun103453_ip = 507;
                    continue _fun103453
                }
            case 501:
                var21 = var22.interval;
            case 507:
                var13.intervalType = var21;
                var21 = var20.subscription_trial;
                var22 = var0 == var21;
                var20 = undefined;
                if (var22) {
                    _fun103453_ip = 533;
                    continue _fun103453
                }
            case 527:
                var20 = var21.interval_count;
            case 533:
                var13.intervalCount = var20;
                var13 = var18.bind(var19)(var13);
                var13 = var15.bind(var4)(var17, var13, var16);
                var10.children = var13;
                var10 = var9.bind(var4)(var11, var10);
                var3.children = var10;
                var3 = var9.bind(var4)(var7, var3);
                var9 = new Array(3);
                var9[0] = var3;
                var3 = _closure1_slot12;
                var16 = _closure1_slot0;
                var7 = _closure1_slot2;
                var10 = 20;
                var10 = var7[var10];
                var10 = var16.bind(var4)(var10);
                var11 = var10.PressableOpacity;
                var10 = {};
                var13 = var14.closeButton;
                var10.style = var13;
                var13 = 'button';
                var10.accessibilityRole = var13;
                var13 = 11;
                var15 = var7[var13];
                var15 = var16.bind(var4)(var15);
                var18 = var15.intl;
                var17 = var18.string;
                var15 = var7[var13];
                var15 = var16.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.cpT0Cq;
                var15 = var17.bind(var18)(var15);
                var10.accessibilityLabel = var15;
                var15 = {
                    'top': 8,
                    'right': 8,
                    'bottom': 8,
                    'left': 8
                };
                var10.hitSlop = var15;
                var15 = function() {
                    _fun103456: for (var _fun103456_ip = 0;;) switch (_fun103456_ip) {
                        case 0:
                            var6 = _closure2_slot3;
                            var1 = _closure2_slot4;
                            var5 = var1.trial_id;
                            var1 = null;
                            if (!(var1 != var6)) {
                                _fun103456_ip = 81;
                                continue _fun103456
                            }
                        case 23:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 10;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.track;
                            var1 = _closure1_slot6;
                            var2 = var1.APP_NOTICE_CLOSED;
                            var1 = {};
                            var1.notice_type = var6;
                            var1.trial_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 81:
                            var4 = _closure2_slot1;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dismiss;
                            var1 = {};
                            var1.untilAtLeast = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var10.onPress = var15;
                var2 = _closure1_slot1;
                var15 = 21;
                var15 = var7[var15];
                var17 = var2.bind(var4)(var15);
                var15 = {
                    'width': 16,
                    'height': 16
                };
                var18 = var14.closeIcon;
                var18 = var18.color;
                var15.color = var18;
                var15 = var3.bind(var4)(var17, var15);
                var10.children = var15;
                var10 = var3.bind(var4)(var11, var10);
                var9[1] = var10;
                var10 = 22;
                var10 = var7[var10];
                var11 = var2.bind(var4)(var10);
                var10 = {};
                var14 = var14.primaryCTA;
                var10.style = var14;
                var14 = var7[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var7[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.J61px0;
                var13 = var14.bind(var15)(var13);
                var10.text = var13;
                var13 = function() {
                    _fun103457: for (var _fun103457_ip = 0;;) switch (_fun103457_ip) {
                        case 0:
                            var6 = _closure2_slot3;
                            var1 = _closure2_slot4;
                            var5 = var1.trial_id;
                            var1 = null;
                            if (!(var1 != var6)) {
                                _fun103457_ip = 81;
                                continue _fun103457
                            }
                        case 23:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 10;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.track;
                            var1 = _closure1_slot6;
                            var2 = var1.APP_NOTICE_PRIMARY_CTA_OPENED;
                            var1 = {};
                            var1.notice_type = var6;
                            var1.trial_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 81:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var10.onPress = var13;
                var13 = function() {
                    var3 = _closure1_slot12;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.NitroWheelIcon;
                    var0 = {
                        'color': 'white',
                        'size': 'sm'
                    };
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var10.renderIcon = var13;
                var12 = function() {
                    var3 = _closure1_slot12;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 24;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var6 = _closure2_slot2;
                    var7 = var6.linearGradient;
                    var6 = new Array(1);
                    var6[0] = var7;
                    var0.style = var6;
                    var6 = _closure1_slot9;
                    var7 = var6.START;
                    var0.start = var7;
                    var6 = var6.END;
                    var0.end = var6;
                    var5 = _closure1_slot17;
                    var4 = _closure2_slot3;
                    var4 = var5.bind(var2)(var4);
                    var0.colors = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var10.renderLinearGradient = var12;
                var10 = var3.bind(var4)(var11, var10);
                var9[2] = var10;
                var1.children = var9;
                var5 = var8.bind(var4)(var5, var1);
                var1 = 25;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.style = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 927:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 12440, 660, 1615, 33, 667, 1297, 671, 13483, 795, 1234, 3004, 632, 6615, 7021, 13481, 1675, 3900, 3068, 4865, 8667, 7593, 5711, 4057, 7701, 2]);