// modules/premium/native/PremiumPlanSelect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun82408: for (var _fun82408_ip = 0;;) switch (_fun82408_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.premiumTier;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun82408_ip = 215;
                    continue _fun82408
                }
            case 18:
                var1 = var5.numPremiumGuild;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun82408_ip = 171;
                    continue _fun82408
                }
            case 33:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 15;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var3 = var1.intl;
                var2 = var3.formatToPlainString;
                var4 = var5.premiumTier;
                var1 = _closure1_slot16;
                var1 = var1.TIER_1;
                if (!(var4 !== var1)) {
                    _fun82408_ip = 120;
                    continue _fun82408
                }
            case 88:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var4.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.u6dBsN;
                _fun82408_ip = 150;
                continue _fun82408;
            case 120:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var1 = var0.sexoHq;
            case 150:
                var0 = {};
                var4 = var5.numPremiumGuild;
                var0.num = var4;
                var0 = var2.bind(var3)(var1, var0);
                _fun82408_ip = 213;
                continue _fun82408;
            case 171:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getPremiumTypeDisplayName;
                var1 = var5.premiumTier;
                var0 = var2.bind(var3)(var1);
            case 213:
                _fun82408_ip = 289;
                continue _fun82408;
            case 215:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var3 = var7[var1];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.gDsyB9;
                var1 = {};
                var5 = var5.numPremiumGuild;
                var1.numSubscriptions = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 289:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun82409: for (var _fun82409_ip = 0;;) switch (_fun82409_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.plan;
                var _closure2_slot0 = var12;
                var1 = var0.purchase;
                var _closure2_slot1 = var1;
                var8 = var0.style;
                var10 = var0.subscription;
                var _closure2_slot2 = var10;
                var5 = var0.disabled;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun82409_ip = 53;
                    continue _fun82409
                }
            case 51:
                var5 = false;
            case 53:
                var14 = var0.hasBackground;
                if (!(var14 === var3)) {
                    _fun82409_ip = 65;
                    continue _fun82409
                }
            case 63:
                var14 = false;
            case 65:
                var _closure2_slot3 = var3;
                var0 = _closure1_slot27;
                var18 = var0.bind(var3)();
                var1 = _closure1_slot14;
                var0 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.isPurchasing;
                    return var0;
                };
                var7 = var1.bind(var3)(var0);
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 23;
                var0 = var9[var0];
                var6 = var1.bind(var3)(var0);
                var2 = var6.useStateFromStoresArray;
                var0 = _closure1_slot12;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var4
                    var3 = _closure1_slot12;
                    var2 = var3.getProduct;
                    var0 = _closure2_slot0;
                    var0 = var0.productId;
                    var2 = var2.bind(var3)(var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = _closure1_slot12;
                    var1 = var2.isBusy;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var2 = var2.bind(var6)(var1, var0);
                var1 = _closure1_slot4;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var1 = 0;
                var17 = var2[var1];
                var0 = 1;
                var6 = var2[var0];
                var2 = _closure1_slot1;
                var0 = 24;
                var0 = var9[var0];
                var0 = var2.bind(var3)(var0);
                var19 = var0.bind(var3)();
                var2 = var12.premiumTier;
                var0 = _closure1_slot16;
                var0 = var0.TIER_2;
                var15 = null;
                var9 = null;
                if (!(var2 === var0)) {
                    _fun82409_ip = 366;
                    continue _fun82409
                }
            case 220:
                var0 = var12.numPremiumGuild;
                var9 = null;
                if (!(var1 === var0)) {
                    _fun82409_ip = 366;
                    continue _fun82409
                }
            case 235:
                var13 = _closure1_slot24;
                var20 = _closure1_slot0;
                var23 = _closure1_slot2;
                var0 = 25;
                var0 = var23[var0];
                var0 = var20.bind(var3)(var0);
                var2 = var0.LegacyText;
                var0 = {};
                var21 = var18.rowText;
                var16 = new Array(2);
                var16[0] = var21;
                var21 = var18.rowPlanDescriptionSubtext;
                var16[1] = var21;
                var0.style = var16;
                var16 = 15;
                var21 = var23[var16];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var16 = var23[var16];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var20 = var16.he52LA;
                var16 = {};
                var23 = _closure1_slot15;
                var16.num = var23;
                var16 = var21.bind(var22)(var20, var16);
                var0.children = var16;
                var9 = var13.bind(var3)(var2, var0);
            case 366:
                var0 = var12.premiumTier;
                if (!(var15 != var0)) {
                    _fun82409_ip = 570;
                    continue _fun82409
                }
            case 379:
                var0 = var12.numPremiumGuild;
                if (!(var1 === var0)) {
                    _fun82409_ip = 440;
                    continue _fun82409
                }
            case 389:
                var1 = var12.premiumTier;
                var0 = _closure1_slot16;
                var0 = var0.TIER_0;
                if (!(var0 !== var1)) {
                    _fun82409_ip = 548;
                    continue _fun82409
                }
            case 412:
                var0 = _closure1_slot16;
                var0 = var0.TIER_1;
                if (!(var0 !== var1)) {
                    _fun82409_ip = 526;
                    continue _fun82409
                }
            case 426:
                var0 = _closure1_slot16;
                var0 = var0.TIER_2;
                if (!(var0 !== var1)) {
                    _fun82409_ip = 504;
                    continue _fun82409
                }
            case 440:
                var1 = var12.premiumTier;
                var0 = _closure1_slot16;
                var0 = var0.TIER_1;
                if (!(var1 !== var0)) {
                    _fun82409_ip = 482;
                    continue _fun82409
                }
            case 460:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 22;
                var0 = var2[var0];
                var13 = var1.bind(var3)(var0);
                _fun82409_ip = 502;
                continue _fun82409;
            case 482:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 21;
                var0 = var2[var0];
                var13 = var1.bind(var3)(var0);
            case 502:
                _fun82409_ip = 590;
                continue _fun82409;
            case 504:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 20;
                var0 = var2[var0];
                var13 = var1.bind(var3)(var0);
                _fun82409_ip = 590;
                continue _fun82409;
            case 526:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 19;
                var0 = var2[var0];
                var13 = var1.bind(var3)(var0);
                _fun82409_ip = 590;
                continue _fun82409;
            case 548:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 18;
                var0 = var2[var0];
                var13 = var1.bind(var3)(var0);
                _fun82409_ip = 590;
                continue _fun82409;
            case 570:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 17;
                var0 = var2[var0];
                var13 = var1.bind(var3)(var0);
            case 590:
                var1 = var15 != var10;
                var0 = null;
                if (!var1) {
                    _fun82409_ip = 630;
                    continue _fun82409
                }
            case 599:
                var2 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 16;
                var1 = var16[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getPremiumTypeFromSubscription;
                var0 = var1.bind(var2)(var10);
            case 630:
                _closure2_slot3 = var0;
                var2 = _closure1_slot24;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 26;
                var0 = var20[var0];
                var0 = var16.bind(var3)(var0);
                var1 = var0.TouchableHighlight;
                var0 = {
                    'activeOpacity': 0.6,
                    'underlayColor': null,
                    'accessibilityRole': 'button'
                };
                var10 = 27;
                var10 = var20[var10];
                var16 = var16.bind(var3)(var10);
                var10 = var16.isThemeDark;
                var19 = var10.bind(var16)(var19);
                var16 = 'none';
                var10 = var16;
                if (var19) {
                    _fun82409_ip = 748;
                    continue _fun82409
                }
            case 711:
                var10 = var16;
                if (!var14) {
                    _fun82409_ip = 748;
                    continue _fun82409
                }
            case 717:
                var16 = _closure1_slot1;
                var19 = _closure1_slot2;
                var14 = 14;
                var14 = var19[var14];
                var14 = var16.bind(var3)(var14);
                var14 = var14.unsafe_rawColors;
                var10 = var14.PRIMARY_230;
            case 748:
                var0.underlayColor = var10;
                if (var5) {
                    _fun82409_ip = 760;
                    continue _fun82409
                }
            case 757:
                var5 = var7;
            case 760:
                if (var5) {
                    _fun82409_ip = 766;
                    continue _fun82409
                }
            case 763:
                var5 = var6;
            case 766:
                var0.disabled = var5;
                var4 = function() {
                    _fun82412: for (var _fun82412_ip = 0;;) switch (_fun82412_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun82412_ip = 165;
                                continue _fun82412
                            }
                        case 16:
                            var2 = _closure2_slot3;
                            var1 = _closure1_slot16;
                            var1 = var1.TIER_2;
                            if (!(var2 !== var1)) {
                                _fun82412_ip = 55;
                                continue _fun82412
                            }
                        case 37:
                            var2 = _closure2_slot3;
                            var1 = _closure1_slot16;
                            var1 = var1.TIER_1;
                            if (!(var2 === var1)) {
                                _fun82412_ip = 165;
                                continue _fun82412
                            }
                        case 55:
                            var1 = _closure2_slot0;
                            var2 = var1.premiumTier;
                            var1 = _closure1_slot16;
                            var1 = var1.TIER_0;
                            if (!(var2 === var1)) {
                                _fun82412_ip = 165;
                                continue _fun82412
                            }
                        case 79:
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 28;
                            var1 = var6[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var5 = _closure2_slot2;
                            var1.subscription = var5;
                            var5 = _closure1_slot0;
                            var4 = 29;
                            var4 = var6[var4];
                            var4 = var5.bind(var3)(var4);
                            var4 = var4.WhatYouLoseMode;
                            var4 = var4.DOWNGRADE;
                            var1.mode = var4;
                            var4 = function() {
                                var2 = _closure2_slot1;
                                var0 = _closure2_slot0;
                                var1 = var0.productId;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onContinue = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun82412_ip = 186;
                            continue _fun82412;
                        case 165:
                            var2 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var1 = var0.productId;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 186:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var4;
                var6 = _closure1_slot25;
                var5 = _closure1_slot8;
                var4 = {};
                var10 = var18.row;
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var8;
                var4.style = var7;
                var10 = _closure1_slot24;
                var8 = _closure1_slot7;
                var7 = {};
                var14 = _closure1_slot28;
                var14 = var14[var13];
                var14 = var18[var14];
                var7.style = var14;
                var7.source = var13;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(4);
                var7[0] = var8;
                var19 = _closure1_slot24;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 25;
                var10 = var13[var8];
                var10 = var14.bind(var3)(var10);
                var16 = var10.LegacyText;
                var10 = {};
                var21 = var18.rowText;
                var20 = new Array(2);
                var20[0] = var21;
                var21 = var18.rowPlanDescription;
                var20[1] = var21;
                var10.style = var20;
                var20 = _closure1_slot30;
                var20 = var20.bind(var3)(var12);
                var10.children = var20;
                var10 = var19.bind(var3)(var16, var10);
                var7[1] = var10;
                var7[2] = var9;
                var10 = _closure1_slot24;
                var8 = var13[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.LegacyText;
                var8 = {};
                var19 = var18.rowText;
                var16 = new Array(2);
                var16[0] = var19;
                var18 = var18.rowPrice;
                var16[1] = var18;
                var8.style = var16;
                var18 = 15;
                var13 = var13[var18];
                var13 = var14.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var16 = var12.interval;
                var12 = _closure1_slot17;
                var12 = var12.MONTH;
                if (!(var16 !== var12)) {
                    _fun82409_ip = 1065;
                    continue _fun82409
                }
            case 1035:
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var18];
                var12 = var16.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["rS8FA+"];
                _fun82409_ip = 1093;
                continue _fun82409;
            case 1065:
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var18];
                var11 = var16.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11.AbOLNu;
            case 1093:
                var11 = {};
                var18 = var15 == var17;
                var16 = undefined;
                if (var18) {
                    _fun82409_ip = 1110;
                    continue _fun82409
                }
            case 1104:
                var16 = var17.priceString;
            case 1110:
                var17 = var15 != var16;
                var15 = '$...';
                if (!var17) {
                    _fun82409_ip = 1126;
                    continue _fun82409
                }
            case 1123:
                var15 = var16;
            case 1126:
                var11.price = var15;
                var11 = var13.bind(var14)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var5 = var1.plans;
        var2 = var1.purchase;
        var _closure2_slot0 = var2;
        var2 = var1.analyticsLoadId;
        var _closure2_slot1 = var2;
        var2 = var1.trackNewPaymentFlow;
        var _closure2_slot2 = var2;
        var2 = var1.trackPaymentFlowStep;
        var _closure2_slot3 = var2;
        var1 = var1.subscription;
        var _closure2_slot4 = var1;
        var3 = _closure1_slot24;
        var2 = _closure1_slot8;
        var1 = {};
        var4 = var5.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var4 = _closure1_slot24;
            var3 = _closure1_slot31;
            var2 = {};
            var2.plan = var0;
            var1 = _closure2_slot4;
            var2.subscription = var1;
            var1 = function arg0() {
                _fun82416: for (var _fun82416_ip = 0;;) switch (_fun82416_ip) {
                    case 0:
                        var3 = arg0;
                        var _closure4_slot0 = var3;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 30;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.getToggledIntervalProduct;
                        var7 = var0.bind(var1)(var3);
                        var _closure4_slot1 = var7;
                        var1 = null;
                        if (!(var1 != var7)) {
                            _fun82416_ip = 218;
                            continue _fun82416
                        }
                    case 58:
                        var4 = _closure1_slot12;
                        var0 = var4.getProduct;
                        var0 = var0.bind(var4)(var7);
                        if (!(var1 != var0)) {
                            _fun82416_ip = 218;
                            continue _fun82416
                        }
                    case 80:
                        var1 = _closure2_slot3;
                        var0 = {};
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 31;
                        var9 = var4[var7];
                        var9 = var8.bind(var2)(var9);
                        var9 = var9.PaymentFlowStep;
                        var9 = var9.PLAN_SELECT;
                        var0.fromStep = var9;
                        var7 = var4[var7];
                        var7 = var8.bind(var2)(var7);
                        var7 = var7.PaymentFlowStep;
                        var7 = var7.YEARLY_UPSELL;
                        var0.toStep = var7;
                        var0.productId = var3;
                        var0 = var1.bind(var2)(var0);
                        var1 = _closure1_slot1;
                        var0 = 32;
                        var0 = var4[var0];
                        var4 = var1.bind(var2)(var0);
                        var1 = var4.openLazy;
                        var0 = {
                            'importer': null,
                            'hideActionSheet': true,
                            'isDismissable': true
                        };
                        var6 = function() {
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var1 = 34;
                            var1 = var0[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = 33;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var3)(var1, var0);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var1 = var1.default;
                                var _closure6_slot0 = var1;
                                var0 = function(arg0) { // Environment: var0
                                    var3 = _closure1_slot24;
                                    var2 = _closure6_slot0;
                                    var1 = {};
                                    var8 = arg0;
                                    var9 = var1;
                                    var0 = copyDataProperties(var9, var8);
                                    var6 = _closure4_slot1;
                                    var0 = 'productId';
                                    var1[var0] = var6;
                                    var7 = _closure1_slot3;
                                    var0 = undefined;
                                    var6 = function*() { // Environment: var4
                                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                                            _fun82421: for (var _fun82421_ip = 0;;) switch (_fun82421_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun82421_ip = 134;
                                                        continue _fun82421
                                                    }
                                                case 10:
                                                    var5 = _closure2_slot3;
                                                    var3 = {};
                                                    var6 = _closure1_slot0;
                                                    var7 = _closure1_slot2;
                                                    var4 = 31;
                                                    var8 = var7[var4];
                                                    var2 = undefined;
                                                    var8 = var6.bind(var2)(var8);
                                                    var8 = var8.PaymentFlowStep;
                                                    var8 = var8.YEARLY_UPSELL;
                                                    var3.fromStep = var8;
                                                    var4 = var7[var4];
                                                    var4 = var6.bind(var2)(var4);
                                                    var4 = var4.PaymentFlowStep;
                                                    var4 = var4.EXTERNAL_PAYMENT;
                                                    var3.toStep = var4;
                                                    var4 = _closure4_slot0;
                                                    var3.productId = var4;
                                                    var3 = var5.bind(var2)(var3);
                                                    var3 = _closure2_slot0;
                                                    var1 = _closure2_slot1;
                                                    var1 = var3.bind(var2)(var4, var1);
                                                    SaveGenerator(address = 122);
                                                case 120:
                                                    return var1;
                                                case 122:
                                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                    if (var3) {
                                                        _fun82421_ip = 131;
                                                        continue _fun82421
                                                    }
                                                case 128:
                                                    return var2;
                                                case 131:
                                                    return var1;
                                                case 134:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var7 = var7.bind(var0)(var6);
                                    var6 = 'continueWithDefault';
                                    var1[var6] = var7;
                                    var5 = _closure1_slot3;
                                    var4 = function*() { // Environment: var4
                                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                                            _fun82423: for (var _fun82423_ip = 0;;) switch (_fun82423_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun82423_ip = 99;
                                                        continue _fun82423
                                                    }
                                                case 7:
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot2;
                                                    var1 = 31;
                                                    var1 = var2[var1];
                                                    var2 = undefined;
                                                    var3 = var3.bind(var2)(var1);
                                                    var1 = var3.getNewAnalyticsLoadId;
                                                    var4 = var1.bind(var3)();
                                                    var6 = _closure2_slot2;
                                                    var5 = {};
                                                    var5.newFlowAnalyticsLoadId = var4;
                                                    var3 = _closure4_slot1;
                                                    var5.productId = var3;
                                                    var5 = var6.bind(var2)(var5);
                                                    var1 = _closure2_slot0;
                                                    var1 = var1.bind(var2)(var3, var4);
                                                    SaveGenerator(address = 87);
                                                case 85:
                                                    return var1;
                                                case 87:
                                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                    if (var3) {
                                                        _fun82423_ip = 96;
                                                        continue _fun82423
                                                    }
                                                case 93:
                                                    return var2;
                                                case 96:
                                                    return var1;
                                                case 99:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var5 = var5.bind(var0)(var4);
                                    var4 = 'continueWithUpsell';
                                    var1[var4] = var5;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0.importer = var6;
                        var0 = var1.bind(var4)(var0);
                        return var2;
                    case 218:
                        var4 = _closure2_slot3;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 31;
                        var8 = var7[var5];
                        var8 = var6.bind(var2)(var8);
                        var8 = var8.PaymentFlowStep;
                        var8 = var8.PLAN_SELECT;
                        var1.fromStep = var8;
                        var5 = var7[var5];
                        var5 = var6.bind(var2)(var5);
                        var5 = var5.PaymentFlowStep;
                        var5 = var5.EXTERNAL_PAYMENT;
                        var1.toStep = var5;
                        var1.productId = var3;
                        var1 = var4.bind(var2)(var1);
                        var1 = _closure2_slot0;
                        var0 = _closure2_slot1;
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                }
            };
            var2.purchase = var1;
            var1 = var0.productId;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var4.bind(var5)(var0);
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        _fun82424: for (var _fun82424_ip = 0;;) switch (_fun82424_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.subscription;
                var _closure2_slot0 = var11;
                var1 = var0.trackPaymentFlowStep;
                var _closure2_slot1 = var1;
                var1 = var0.trackNewPaymentFlow;
                var _closure2_slot2 = var1;
                var1 = var0.purchase;
                var _closure2_slot3 = var1;
                var1 = var0.analyticsLoadId;
                var _closure2_slot4 = var1;
                var0 = var0.showCurrentPlan;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var1 = _closure1_slot27;
                var7 = var1.bind(var3)();
                if (!var0) {
                    _fun82424_ip = 437;
                    continue _fun82424
                }
            case 88:
                var12 = null;
                if (!(var12 != var11)) {
                    _fun82424_ip = 437;
                    continue _fun82424
                }
            case 97:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 30;
                var1 = var1[var0];
                var4 = var2.bind(var3)(var1);
                var2 = var4.makeExternalPaymentGatewayPlanIdOrThrow;
                var5 = var11.renewalMutations;
                var6 = var12 == var5;
                var1 = undefined;
                if (var6) {
                    _fun82424_ip = 144;
                    continue _fun82424
                }
            case 138:
                var1 = var5.paymentGatewayPlanId;
            case 144:
                if (!(var12 == var1)) {
                    _fun82424_ip = 154;
                    continue _fun82424
                }
            case 148:
                var1 = var11.paymentGatewayPlanId;
            case 154:
                var2 = var2.bind(var4)(var1);
                _closure2_slot5 = var2;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var0];
                var4 = var4.bind(var3)(var1);
                var1 = var4.getPremiumBundledItemsFromProductId;
                var13 = var1.bind(var4)(var2);
                var6 = var13.premiumTier;
                if (!(var12 == var6)) {
                    _fun82424_ip = 213;
                    continue _fun82424
                }
            case 201:
                var1 = _closure1_slot21;
                var4 = var1.PREMIUM_GUILD;
                _fun82424_ip = 244;
                continue _fun82424;
            case 213:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 16;
                var1 = var9[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.getPremiumGradientColor;
                var4 = var1.bind(var5)(var6);
            case 244:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getToggledIntervalProduct;
                var9 = var0.bind(var1)(var2);
                _closure2_slot6 = var9;
                var2 = _closure1_slot24;
                var1 = _closure1_slot1;
                var0 = 35;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var7.currentPlanGradient;
                var0.style = var5;
                var0.colors = var4;
                var4 = _closure1_slot22;
                var4 = var4.START;
                var0.start = var4;
                var4 = _closure1_slot22;
                var4 = var4.END;
                var0.end = var4;
                var6 = _closure1_slot24;
                var5 = _closure1_slot31;
                var4 = {};
                var4.plan = var13;
                var4.subscription = var11;
                var9 = var12 == var9;
                if (!var9) {
                    _fun82424_ip = 386;
                    continue _fun82424
                }
            case 367:
                var11 = var11.status;
                var10 = _closure1_slot23;
                var10 = var10.CANCELED;
                var9 = var11 !== var10;
            case 386:
                var4.disabled = var9;
                var9 = true;
                var4.hasBackground = var9;
                var8 = function() {
                    _fun82425: for (var _fun82425_ip = 0;;) switch (_fun82425_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 30;
                            var0 = var2[var0];
                            var5 = undefined;
                            var3 = var1.bind(var5)(var0);
                            var1 = var3.getProductIdsForBothIntervals;
                            var0 = _closure2_slot5;
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.monthly;
                            var _closure3_slot0 = var1;
                            var3 = var0.yearly;
                            var _closure3_slot1 = var3;
                            var0 = _closure2_slot0;
                            var1 = null;
                            var0 = var1 == var0;
                            var4 = undefined;
                            if (var0) {
                                _fun82425_ip = 89;
                                continue _fun82425
                            }
                        case 80:
                            var0 = _closure2_slot0;
                            var4 = var0.status;
                        case 89:
                            var0 = _closure1_slot23;
                            var0 = var0.CANCELED;
                            if (!(var4 !== var0)) {
                                _fun82425_ip = 256;
                                continue _fun82425
                            }
                        case 106:
                            var0 = _closure2_slot6;
                            var4 = var1 != var0;
                            var0 = undefined;
                            if (!var4) {
                                _fun82425_ip = 251;
                                continue _fun82425
                            }
                        case 122:
                            var9 = _closure1_slot12;
                            var8 = var9.getProduct;
                            var4 = _closure2_slot6;
                            var4 = var8.bind(var9)(var4);
                            var4 = var1 != var4;
                            var0 = undefined;
                            if (!var4) {
                                _fun82425_ip = 251;
                                continue _fun82425
                            }
                        case 150:
                            var8 = _closure2_slot1;
                            var4 = {};
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 31;
                            var12 = var11[var9];
                            var12 = var10.bind(var5)(var12);
                            var12 = var12.PaymentFlowStep;
                            var12 = var12.PLAN_SELECT;
                            var4.fromStep = var12;
                            var9 = var11[var9];
                            var9 = var10.bind(var5)(var9);
                            var9 = var9.PaymentFlowStep;
                            var9 = var9.EXTERNAL_PAYMENT;
                            var4.toStep = var9;
                            var9 = _closure2_slot6;
                            var4.productId = var9;
                            var4 = var8.bind(var5)(var4);
                            var9 = _closure2_slot3;
                            var8 = _closure2_slot6;
                            var4 = _closure2_slot4;
                            var0 = var9.bind(var5)(var8, var4);
                        case 251:
                            _fun82425_ip = 508;
                            continue _fun82425;
                        case 256:
                            if (!(var1 != var3)) {
                                _fun82425_ip = 404;
                                continue _fun82425
                            }
                        case 263:
                            var3 = _closure2_slot1;
                            var1 = {};
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var8 = 31;
                            var10 = var4[var8];
                            var10 = var9.bind(var5)(var10);
                            var10 = var10.PaymentFlowStep;
                            var10 = var10.PLAN_SELECT;
                            var1.fromStep = var10;
                            var8 = var4[var8];
                            var8 = var9.bind(var5)(var8);
                            var8 = var8.PaymentFlowStep;
                            var8 = var8.YEARLY_UPSELL;
                            var1.toStep = var8;
                            var8 = _closure2_slot5;
                            var1.productId = var8;
                            var1 = var3.bind(var5)(var1);
                            var3 = _closure1_slot1;
                            var1 = 32;
                            var1 = var4[var1];
                            var4 = var3.bind(var5)(var1);
                            var3 = var4.openLazy;
                            var1 = {
                                'importer': null,
                                'hideActionSheet': true,
                                'isDismissable': true
                            };
                            var7 = function() {
                                var2 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var1 = 34;
                                var1 = var0[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = 33;
                                var1 = var0[var1];
                                var0 = var0.paths;
                                var2 = var2.bind(var3)(var1, var0);
                                var1 = var2.then;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var1 = var1.default;
                                    var _closure5_slot0 = var1;
                                    var0 = function(arg0) { // Environment: var0
                                        var3 = _closure1_slot24;
                                        var2 = _closure5_slot0;
                                        var1 = {};
                                        var8 = arg0;
                                        var9 = var1;
                                        var0 = copyDataProperties(var9, var8);
                                        var6 = _closure3_slot1;
                                        var0 = 'productId';
                                        var1[var0] = var6;
                                        var7 = _closure1_slot3;
                                        var0 = undefined;
                                        var6 = function*() { // Environment: var4
                                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                _fun82430: for (var _fun82430_ip = 0;;) switch (_fun82430_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun82430_ip = 99;
                                                            continue _fun82430
                                                        }
                                                    case 7:
                                                        var3 = _closure1_slot0;
                                                        var2 = _closure1_slot2;
                                                        var1 = 31;
                                                        var1 = var2[var1];
                                                        var2 = undefined;
                                                        var3 = var3.bind(var2)(var1);
                                                        var1 = var3.getNewAnalyticsLoadId;
                                                        var4 = var1.bind(var3)();
                                                        var6 = _closure2_slot2;
                                                        var5 = {};
                                                        var5.newFlowAnalyticsLoadId = var4;
                                                        var3 = _closure3_slot1;
                                                        var5.productId = var3;
                                                        var5 = var6.bind(var2)(var5);
                                                        var1 = _closure2_slot3;
                                                        var1 = var1.bind(var2)(var3, var4);
                                                        SaveGenerator(address = 87);
                                                    case 85:
                                                        return var1;
                                                    case 87:
                                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                        if (var3) {
                                                            _fun82430_ip = 96;
                                                            continue _fun82430
                                                        }
                                                    case 93:
                                                        return var2;
                                                    case 96:
                                                        return var1;
                                                    case 99:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var7 = var7.bind(var0)(var6);
                                        var6 = 'continueWithUpsell';
                                        var1[var6] = var7;
                                        var5 = _closure1_slot3;
                                        var4 = function*() { // Environment: var4
                                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                _fun82432: for (var _fun82432_ip = 0;;) switch (_fun82432_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun82432_ip = 134;
                                                            continue _fun82432
                                                        }
                                                    case 10:
                                                        var5 = _closure2_slot1;
                                                        var3 = {};
                                                        var6 = _closure1_slot0;
                                                        var7 = _closure1_slot2;
                                                        var4 = 31;
                                                        var8 = var7[var4];
                                                        var2 = undefined;
                                                        var8 = var6.bind(var2)(var8);
                                                        var8 = var8.PaymentFlowStep;
                                                        var8 = var8.YEARLY_UPSELL;
                                                        var3.fromStep = var8;
                                                        var4 = var7[var4];
                                                        var4 = var6.bind(var2)(var4);
                                                        var4 = var4.PaymentFlowStep;
                                                        var4 = var4.EXTERNAL_PAYMENT;
                                                        var3.toStep = var4;
                                                        var4 = _closure3_slot0;
                                                        var3.productId = var4;
                                                        var3 = var5.bind(var2)(var3);
                                                        var3 = _closure2_slot3;
                                                        var1 = _closure2_slot4;
                                                        var1 = var3.bind(var2)(var4, var1);
                                                        SaveGenerator(address = 122);
                                                    case 120:
                                                        return var1;
                                                    case 122:
                                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                        if (var3) {
                                                            _fun82432_ip = 131;
                                                            continue _fun82432
                                                        }
                                                    case 128:
                                                        return var2;
                                                    case 131:
                                                        return var1;
                                                    case 134:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var5 = var5.bind(var0)(var4);
                                        var4 = 'continueWithDefault';
                                        var1[var4] = var5;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1.importer = var7;
                            var1 = var3.bind(var4)(var1);
                            var1 = undefined;
                            _fun82425_ip = 505;
                            continue _fun82425;
                        case 404:
                            var4 = _closure2_slot1;
                            var3 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 31;
                            var9 = var8[var6];
                            var9 = var7.bind(var5)(var9);
                            var9 = var9.PaymentFlowStep;
                            var9 = var9.PLAN_SELECT;
                            var3.fromStep = var9;
                            var6 = var8[var6];
                            var6 = var7.bind(var5)(var6);
                            var6 = var6.PaymentFlowStep;
                            var6 = var6.EXTERNAL_PAYMENT;
                            var3.toStep = var6;
                            var6 = _closure2_slot5;
                            var3.productId = var6;
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure2_slot3;
                            var3 = _closure2_slot5;
                            var2 = _closure2_slot4;
                            var1 = var4.bind(var5)(var3, var2);
                        case 505:
                            var0 = var1;
                        case 508:
                            return var0;
                    }
                };
                var4.purchase = var8;
                var7 = var7.currentPlanRow;
                var4.style = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 437:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.string;
        var1 = _closure1_slot27;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot24;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 25;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.LegacyText;
        var0 = {};
        var5 = var5.header;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun82434: for (var _fun82434_ip = 0;;) switch (_fun82434_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.plans;
                var _closure2_slot0 = var1;
                var14 = var0.subscription;
                var _closure2_slot1 = var14;
                var9 = var0.showCurrentPlan;
                var13 = var0.analyticsLoadId;
                var _closure2_slot2 = var13;
                var11 = var0.trackPaymentFlowStep;
                var _closure2_slot3 = var11;
                var10 = var0.trackNewPaymentFlow;
                var _closure2_slot4 = var10;
                var12 = var0.purchase;
                var _closure2_slot5 = var12;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot27;
                var4 = var0.bind(var3)();
                var0 = null;
                var1 = var0 != var14;
                if (!var1) {
                    _fun82434_ip = 134;
                    continue _fun82434
                }
            case 97:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 30;
                var1 = var7[var1];
                var7 = var2.bind(var3)(var1);
                var2 = var7.makeExternalPaymentGatewayPlanIdOrThrow;
                var1 = var14.paymentGatewayPlanId;
                var0 = var2.bind(var7)(var1);
            case 134:
                _closure2_slot6 = var0;
                var2 = _closure1_slot25;
                var1 = _closure1_slot8;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var8 = _closure1_slot24;
                var7 = _closure1_slot33;
                var4 = {};
                var4.subscription = var14;
                var4.analyticsLoadId = var13;
                var4.purchase = var12;
                var4.trackPaymentFlowStep = var11;
                var4.trackNewPaymentFlow = var10;
                var4.showCurrentPlan = var9;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot29;
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    _fun82435: for (var _fun82435_ip = 0;;) switch (_fun82435_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.getLabel;
                            var2 = var2.predicate;
                            var _closure3_slot0 = var2;
                            var3 = _closure2_slot0;
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                _fun82436: for (var _fun82436_ip = 0;;) switch (_fun82436_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var3 = var1.productId;
                                        var0 = _closure2_slot6;
                                        var0 = var3 !== var0;
                                        if (!var0) {
                                            _fun82436_ip = 73;
                                            continue _fun82436
                                        }
                                    case 23:
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var3 = 30;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var5 = var5.bind(var3)(var4);
                                        var4 = var5.productsHaveSamePerks;
                                        var3 = var1.productId;
                                        var2 = _closure2_slot6;
                                        var2 = var4.bind(var5)(var3, var2);
                                        var0 = !var2;
                                    case 73:
                                        if (!var0) {
                                            _fun82436_ip = 90;
                                            continue _fun82436
                                        }
                                    case 76:
                                        var3 = _closure3_slot0;
                                        var2 = undefined;
                                        var0 = var3.bind(var2)(var1);
                                    case 90:
                                        if (!var0) {
                                            _fun82436_ip = 116;
                                            continue _fun82436
                                        }
                                    case 93:
                                        var2 = var1.premiumTier;
                                        var1 = _closure1_slot16;
                                        var1 = var1.TIER_1;
                                        var0 = var2 !== var1;
                                    case 116:
                                        return var0;
                                }
                            };
                            var10 = var2.bind(var3)(var1);
                            var2 = var10.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun82435_ip = 189;
                                continue _fun82435
                            }
                        case 59:
                            var4 = undefined;
                            var3 = var0.bind(var4)();
                            var2 = _closure1_slot25;
                            var1 = _closure1_slot8;
                            var0 = {};
                            var8 = _closure1_slot24;
                            var7 = _closure1_slot34;
                            var5 = {};
                            var5.string = var3;
                            var7 = var8.bind(var4)(var7, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var8 = _closure1_slot24;
                            var7 = _closure1_slot32;
                            var6 = {};
                            var11 = _closure2_slot3;
                            var6.trackPaymentFlowStep = var11;
                            var11 = _closure2_slot4;
                            var6.trackNewPaymentFlow = var11;
                            var11 = _closure2_slot2;
                            var6.analyticsLoadId = var11;
                            var6.plans = var10;
                            var10 = _closure2_slot5;
                            var6.purchase = var10;
                            var9 = _closure2_slot1;
                            var6.subscription = var9;
                            var6 = var8.bind(var4)(var7, var6);
                            var5[1] = var6;
                            var0.children = var5;
                            var0 = var2.bind(var4)(var1, var0, var3);
                            return var0;
                        case 189:
                            var0 = null;
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var3.Image;
    var _closure1_slot7 = var7;
    var7 = var3.View;
    var _closure1_slot8 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.setIsPurchasing;
    var _closure1_slot13 = var7;
    var3 = var3.usePremiumPlanSelectStore;
    var _closure1_slot14 = var3;
    var12 = 8;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var7 = var3.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot15 = var7;
    var7 = var3.PremiumTypes;
    var _closure1_slot16 = var7;
    var3 = var3.SubscriptionIntervalTypes;
    var _closure1_slot17 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot18 = var7;
    var7 = var3.AnalyticsObjects;
    var _closure1_slot19 = var7;
    var7 = var3.AnalyticsObjectTypes;
    var _closure1_slot20 = var7;
    var15 = var3.Fonts;
    var7 = var3.Gradients;
    var _closure1_slot21 = var7;
    var7 = var3.HorizontalGradient;
    var _closure1_slot22 = var7;
    var7 = var3.SubscriptionStatusTypes;
    var _closure1_slot23 = var7;
    var13 = var3.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot24 = var7;
    var7 = var3.jsxs;
    var _closure1_slot25 = var7;
    var3 = var3.Fragment;
    var _closure1_slot26 = var3;
    var3 = 11;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var7 = {};
    var11 = 12;
    var11 = var5[var11];
    var16 = var8.bind(var0)(var11);
    var14 = var15.DISPLAY_EXTRABOLD;
    var11 = 24;
    var19 = var16.bind(var0)(var14, var0, var11);
    var20 = var7;
    var11 = copyDataProperties(var20, var19);
    var16 = 16;
    var11 = 'marginTop';
    var7[var11] = var16;
    var11 = 13;
    var14 = var5[var11];
    var14 = var4.bind(var0)(var14);
    var17 = var14.DARK_WHITE_500_LIGHT_BLACK_500;
    var14 = 'color';
    var7[var14] = var17;
    var3.header = var7;
    var7 = {
        'marginTop': 7,
        'borderRadius': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingVertical': 12,
        'paddingHorizontal': 12,
        'flexWrap': 'wrap'
    };
    var14 = 14;
    var17 = var5[var14];
    var17 = var8.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var7.borderRadius = var17;
    var17 = var5[var11];
    var17 = var4.bind(var0)(var17);
    var17 = var17.DARK_PRIMARY_630_LIGHT_PRIMARY_230;
    var7.backgroundColor = var17;
    var3.row = var7;
    var7 = {
        'height': 40,
        'width': 40
    };
    var3.imgWumpusNitro = var7;
    var7 = {
        'height': 40,
        'width': 40
    };
    var3.imgBoost = var7;
    var7 = {
        'width': 32,
        'height': 32
    };
    var3.imgWumpusNitroBoost = var7;
    var7 = {
        'width': 40,
        'height': 40
    };
    var3.imgWumpusNitroClassic = var7;
    var7 = {
        'width': 32,
        'height': 32
    };
    var3.imgWumpusNitroClassicBoost = var7;
    var7 = {
        'width': 40,
        'height': 40
    };
    var3.imgWumpusNitroTier0 = var7;
    var7 = {};
    var7.fontSize = var16;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.DARK_WHITE_500_LIGHT_BLACK_500;
    var7.color = var11;
    var3.rowText = var7;
    var11 = {
        'marginLeft': 12,
        'fontFamily': null,
        'lineHeight': 20
    };
    var7 = var15.PRIMARY_SEMIBOLD;
    var11.fontFamily = var7;
    var7 = 20;
    var3.rowPlanDescription = var11;
    var11 = {
        'fontSize': 12,
        'marginLeft': 5,
        'fontFamily': null,
        'fontWeight': '400'
    };
    var15 = var15.PRIMARY_MEDIUM;
    var11.fontFamily = var15;
    var3.rowPlanDescriptionSubtext = var11;
    var11 = {};
    var15 = 'auto';
    var11.marginLeft = var15;
    var3.rowPrice = var11;
    var11 = {
        'marginHorizontal': 14.5,
        'paddingBottom': 10
    };
    var3.container = var11;
    var11 = {};
    var11.marginTop = var7;
    var14 = var5[var14];
    var14 = var8.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11.borderRadius = var14;
    var3.currentPlanGradient = var11;
    var11 = {
        'marginTop': 0.5,
        'marginRight': 0.5,
        'marginLeft': 0.5,
        'marginBottom': 0.5
    };
    var3.currentPlanRow = var11;
    var11 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': '100%'
    };
    var3.loadingSpinnerContainer = var11;
    var11 = {
        'lineHeight': 20,
        'marginTop': 40
    };
    var11.margin = var13;
    var3.offPlatformSubscriptionMessage = var11;
    var11 = {};
    var11.paddingHorizontal = var13;
    var11.marginTop = var12;
    var3.premiumHeaderLabel = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot27 = var3;
    var3 = {};
    var7 = var5[var7];
    var9 = var8.bind(var0)(var7);
    var7 = 'imgWumpusNitro';
    var3[var9] = var7;
    var7 = 22;
    var7 = var5[var7];
    var9 = var8.bind(var0)(var7);
    var7 = 'imgWumpusNitroBoost';
    var3[var9] = var7;
    var7 = 19;
    var7 = var5[var7];
    var9 = var8.bind(var0)(var7);
    var7 = 'imgWumpusNitroClassic';
    var3[var9] = var7;
    var7 = 21;
    var7 = var5[var7];
    var9 = var8.bind(var0)(var7);
    var7 = 'imgWumpusNitroClassicBoost';
    var3[var9] = var7;
    var7 = 18;
    var7 = var5[var7];
    var9 = var8.bind(var0)(var7);
    var7 = 'imgWumpusNitroTier0';
    var3[var9] = var7;
    var7 = 17;
    var7 = var5[var7];
    var8 = var8.bind(var0)(var7);
    var7 = 'imgBoost';
    var3[var8] = var7;
    var _closure1_slot28 = var3;
    var7 = {};
    var3 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 15;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.A4BfLn;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.getLabel = var3;
    var3 = function arg0() {
        _fun82438: for (var _fun82438_ip = 0;;) switch (_fun82438_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.premiumTier;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun82438_ip = 30;
                    continue _fun82438
                }
            case 18:
                var2 = var1.numPremiumGuild;
                var1 = 0;
                var0 = var1 === var2;
            case 30:
                return var0;
        }
    };
    var7.predicate = var3;
    var3 = new Array(3);
    var3[0] = var7;
    var7 = {};
    var8 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 15;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.lyXyD0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.getLabel = var8;
    var8 = function arg0() {
        _fun82440: for (var _fun82440_ip = 0;;) switch (_fun82440_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.premiumTier;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun82440_ip = 30;
                    continue _fun82440
                }
            case 18:
                var2 = var1.numPremiumGuild;
                var1 = 0;
                var0 = var1 !== var2;
            case 30:
                return var0;
        }
    };
    var7.predicate = var8;
    var3[1] = var7;
    var7 = {};
    var8 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 15;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.rPoOQW;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.getLabel = var8;
    var8 = function arg0() {
        _fun82442: for (var _fun82442_ip = 0;;) switch (_fun82442_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.premiumTier;
                var0 = null;
                var0 = var0 == var2;
                if (!var0) {
                    _fun82442_ip = 30;
                    continue _fun82442
                }
            case 18:
                var2 = var1.numPremiumGuild;
                var1 = 0;
                var0 = var1 !== var2;
            case 30:
                return var0;
        }
    };
    var7.predicate = var8;
    var3[2] = var7;
    var _closure1_slot29 = var3;
    var3 = var6.forwardRef;
    var1 = function arg0, arg1() {
        _fun82443: for (var _fun82443_ip = 0;;) switch (_fun82443_ip) {
            case 0:
                var0 = arg0;
                var8 = arg1;
                var18 = var0.predicate;
                var15 = var0.showCurrentPlan;
                var6 = undefined;
                if (!(var15 === var6)) {
                    _fun82443_ip = 28;
                    continue _fun82443
                }
            case 26:
                var15 = true;
            case 28:
                var16 = var0.analyticsLocation;
                var10 = var0.planId;
                var0 = var0.applicationId;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var6;
                var _closure2_slot5 = var6;
                var0 = _closure1_slot27;
                var17 = var0.bind(var6)();
                var12 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 36;
                var0 = var9[var0];
                var0 = var12.bind(var6)(var0);
                var0 = var0.bind(var6)();
                var20 = var0.analyticsLocations;
                var5 = _closure1_slot0;
                var0 = 23;
                var1 = var9[var0];
                var4 = var5.bind(var6)(var1);
                var3 = var4.useStateFromStoresArray;
                var1 = _closure1_slot11;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot10;
                var2[1] = var1;
                var1 = function() { // Environment: var13
                    var2 = _closure1_slot11;
                    var0 = var2.hasFetchedSubscriptions;
                    var2 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = _closure1_slot10;
                    var1 = var2.isLoadedForPremiumSKUs;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var3 = var3.bind(var4)(var2, var1);
                var2 = _closure1_slot4;
                var1 = 2;
                var1 = var2.bind(var6)(var3, var1);
                var4 = 0;
                var3 = var1[var4];
                _closure2_slot1 = var3;
                var11 = 1;
                var1 = var1[var11];
                _closure2_slot2 = var1;
                var21 = _closure1_slot5;
                var19 = var21.useEffect;
                var14 = new Array(1);
                var14[0] = var1;
                var2 = function() { // Environment: var13
                    _fun82445: for (var _fun82445_ip = 0;;) switch (_fun82445_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun82445_ip = 45;
                                continue _fun82445
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 37;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetchPremiumSubscriptionPlans;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var19.bind(var21)(var2, var14);
                var19 = var21.useEffect;
                var14 = new Array(1);
                var14[0] = var3;
                var2 = function() { // Environment: var13
                    _fun82446: for (var _fun82446_ip = 0;;) switch (_fun82446_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun82446_ip = 45;
                                continue _fun82446
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 38;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetchSubscriptions;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var19.bind(var21)(var2, var14);
                var2 = 39;
                var2 = var9[var2];
                var12 = var12.bind(var6)(var2);
                var2 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 31;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getNewAnalyticsLoadId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var12.bind(var6)(var2);
                var2 = 31;
                var2 = var9[var2];
                var9 = var5.bind(var6)(var2);
                var5 = var9.getBasePurchaseFlowAnalyticsFields;
                var2 = {};
                var2.analyticsLoadId = var14;
                var12 = {};
                var19 = _closure1_slot19;
                var19 = var19.BUTTON_CTA;
                var12.object = var19;
                var19 = _closure1_slot20;
                var19 = var19.BUY;
                var12.object_type = var19;
                var29 = var12;
                var28 = var16;
                var16 = copyDataProperties(var29, var28);
                var2.analyticsLocation = var12;
                var2.analyticsLocations = var20;
                var2 = var5.bind(var9)(var2);
                _closure2_slot3 = var2;
                var5 = null;
                if (!(var5 == var10)) {
                    _fun82443_ip = 375;
                    continue _fun82443
                }
            case 371:
                var2 = {};
                _fun82443_ip = 385;
                continue _fun82443;
            case 375:
                var9 = {};
                var9.subscription_plan_id = var10;
                var2 = var9;
            case 385:
                _closure2_slot4 = var2;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 40;
                var10 = var12[var9];
                var16 = var2.bind(var6)(var10);
                var10 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 41;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackPaymentFlowStartedAnalyticsAndCTP;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var7 = var1;
                    var5 = copyDataProperties(var7, var6);
                    var6 = _closure2_slot4;
                    var7 = var1;
                    var5 = copyDataProperties(var7, var6);
                    var5 = _closure2_slot0;
                    var4 = 'application_id';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var16.bind(var6)(var10);
                var10 = _closure1_slot0;
                var0 = var12[var0];
                var21 = var10.bind(var6)(var0);
                var19 = var21.useStateFromStores;
                var0 = _closure1_slot11;
                var16 = new Array(1);
                var16[0] = var0;
                var0 = function() { // Environment: var13
                    var1 = _closure1_slot11;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var19.bind(var21)(var16, var0);
                var0 = 42;
                var0 = var12[var0];
                var19 = var10.bind(var6)(var0);
                var0 = var19.useHandlePremiumPurchase;
                var0 = var0.bind(var19)();
                _closure2_slot5 = var0;
                var0 = 43;
                var0 = var12[var0];
                var21 = var2.bind(var6)(var0);
                var19 = var21.useExperiment;
                var2 = {};
                var0 = 'dd3e49_2';
                var2.location = var0;
                var0 = {};
                var22 = false;
                var0.autoTrackExposure = var22;
                var0 = var19.bind(var21)(var2, var0);
                var2 = var0.paymentsBlocked;
                var0 = 44;
                var0 = var12[var0];
                var12 = var10.bind(var6)(var0);
                var10 = var12.useSubscriptionInvoicePreview;
                if (!(var5 == var16)) {
                    _fun82443_ip = 567;
                    continue _fun82443
                }
            case 563:
                var0 = {};
                _fun82443_ip = 625;
                continue _fun82443;
            case 567:
                var19 = {};
                var21 = var16.id;
                var19.subscriptionId = var21;
                var21 = true;
                var19.renewal = var21;
                var19.analyticsLocations = var20;
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var20 = 45;
                var20 = var22[var20];
                var20 = var21.bind(var6)(var20);
                var20 = var20.PREMIUM_PLAN_SELECT;
                var19.analyticsLocation = var20;
                var0 = var19;
            case 625:
                var10 = var10.bind(var12)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var6)(var10, var11);
                var23 = var0[var4];
                var4 = var5 == var18;
                var0 = null;
                if (var4) {
                    _fun82443_ip = 1348;
                    continue _fun82443
                }
            case 656:
                if (!var3) {
                    _fun82443_ip = 662;
                    continue _fun82443
                }
            case 659:
                if (var1) {
                    _fun82443_ip = 725;
                    continue _fun82443
                }
            case 662:
                var4 = _closure1_slot24;
                var3 = _closure1_slot8;
                var1 = {};
                var10 = var17.loadingSpinnerContainer;
                var1.style = var10;
                var12 = _closure1_slot24;
                var11 = _closure1_slot6;
                var10 = {
                    'animating': true,
                    'size': 'large'
                };
                var10 = var12.bind(var6)(var11, var10);
                var1.children = var10;
                var1 = var4.bind(var6)(var3, var1);
                _fun82443_ip = 1345;
                continue _fun82443;
            case 725:
                if (var2) {
                    _fun82443_ip = 1275;
                    continue _fun82443
                }
            case 731:
                if (!(var5 != var16)) {
                    _fun82443_ip = 1142;
                    continue _fun82443
                }
            case 738:
                var2 = var16.isOnPlatformMatchingExternalPaymentGateway;
                if (!var2) {
                    _fun82443_ip = 819;
                    continue _fun82443
                }
            case 747:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 30;
                var3 = var11[var2];
                var4 = var10.bind(var6)(var3);
                var3 = var4.isValidBundleProductId;
                var2 = var11[var2];
                var11 = var10.bind(var6)(var2);
                var10 = var11.makeExternalPaymentGatewayPlanIdOrThrow;
                var12 = var5 == var16;
                var2 = undefined;
                if (var12) {
                    _fun82443_ip = 803;
                    continue _fun82443
                }
            case 797:
                var2 = var16.paymentGatewayPlanId;
            case 803:
                var2 = var10.bind(var11)(var2);
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun82443_ip = 1142;
                    continue _fun82443
                }
            case 819:
                var4 = _closure1_slot25;
                var3 = _closure1_slot9;
                var2 = {};
                var10 = var5 != var23;
                if (!var10) {
                    _fun82443_ip = 1023;
                    continue _fun82443
                }
            case 839:
                var12 = _closure1_slot25;
                var11 = _closure1_slot26;
                var5 = {};
                var22 = _closure1_slot24;
                var21 = _closure1_slot0;
                var24 = _closure1_slot2;
                var19 = 47;
                var19 = var24[var19];
                var19 = var21.bind(var6)(var19);
                var20 = var19.Text;
                var19 = {
                    'style': null,
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var25 = var17.premiumHeaderLabel;
                var19.style = var25;
                var25 = 15;
                var26 = var24[var25];
                var26 = var21.bind(var6)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var24[var25];
                var25 = var21.bind(var6)(var25);
                var25 = var25.t;
                var25 = var25.ITurwY;
                var25 = var26.bind(var27)(var25);
                var19.children = var25;
                var20 = var22.bind(var6)(var20, var19);
                var19 = new Array(2);
                var19[0] = var20;
                var22 = _closure1_slot24;
                var20 = 48;
                var20 = var24[var20];
                var20 = var21.bind(var6)(var20);
                var21 = var20.PremiumSubscriptionHeader;
                var20 = {};
                var20.subscription = var16;
                var20.renewalInvoicePreview = var23;
                var20 = var22.bind(var6)(var21, var20);
                var19[1] = var20;
                var5.children = var19;
                var10 = var12.bind(var6)(var11, var5);
            case 1023:
                var5 = new Array(2);
                var5[0] = var10;
                var12 = _closure1_slot24;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var10 = 47;
                var10 = var20[var10];
                var10 = var19.bind(var6)(var10);
                var11 = var10.Text;
                var10 = {};
                var17 = var17.offPlatformSubscriptionMessage;
                var10.style = var17;
                var17 = 'text-md/semibold';
                var10.variant = var17;
                var17 = 49;
                var17 = var20[var17];
                var20 = var19.bind(var6)(var17);
                var19 = var20.getExternalManagementMessage;
                var17 = {};
                var21 = true;
                var17.shouldAllowExternalManagement = var21;
                var17 = var19.bind(var20)(var16, var17);
                var10.children = var17;
                var10 = var12.bind(var6)(var11, var10);
                var5[1] = var10;
                var2.children = var5;
                var2 = var4.bind(var6)(var3, var2);
                _fun82443_ip = 1273;
                continue _fun82443;
            case 1142:
                var5 = _closure1_slot24;
                var4 = _closure1_slot9;
                var3 = {};
                var3.ref = var8;
                var12 = _closure1_slot24;
                var11 = _closure1_slot35;
                var10 = {};
                var10.subscription = var16;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var16 = 30;
                var16 = var19[var16];
                var17 = var17.bind(var6)(var16);
                var16 = var17.getPremiumBundlesWithPredicate;
                var16 = var16.bind(var17)(var18);
                var10.plans = var16;
                var10.showCurrentPlan = var15;
                var10.analyticsLoadId = var14;
                var14 = function arg0() {
                    var0 = arg0;
                    var9 = var0.productId;
                    var11 = var0.fromStep;
                    var10 = var0.toStep;
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 50;
                    var1 = var8[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot18;
                    var2 = var1.PAYMENT_FLOW_STEP;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.application_id = var7;
                    var7 = _closure1_slot0;
                    var6 = 31;
                    var6 = var8[var6];
                    var8 = var7.bind(var0)(var6);
                    var7 = var8.getPaymentFlowStepAnalyticsFields;
                    var6 = _closure2_slot3;
                    var5 = {};
                    var5.from_step = var11;
                    var5.to_step = var10;
                    var5.subscription_plan_gateway_plan_id = var9;
                    var12 = var7.bind(var8)(var6, var5);
                    var13 = var1;
                    var5 = copyDataProperties(var13, var12);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var10.trackPaymentFlowStep = var14;
                var14 = function arg0() {
                    var0 = arg0;
                    var6 = var0.newFlowAnalyticsLoadId;
                    var7 = var0.productId;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 41;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackPaymentFlowStartedAnalyticsAndCTP;
                    var1 = {};
                    var8 = _closure2_slot3;
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var5 = 'subscription_plan_gateway_plan_id';
                    var1[var5] = var7;
                    var5 = 'load_id';
                    var1[var5] = var6;
                    var5 = _closure2_slot0;
                    var4 = 'application_id';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10.trackNewPaymentFlow = var14;
                var13 = function() { // Environment: var13
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0, arg1) { // Environment: var0
                        var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                            _fun82454: for (var _fun82454_ip = 0;;) switch (_fun82454_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun82454_ip = 302;
                                        continue _fun82454
                                    }
                                case 10:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var4 = _closure1_slot13;
                                    var1 = undefined;
                                    var3 = true;
                                    var3 = var4.bind(var1)(var3);
                                case 32: // try_start_0
                                    var4 = _closure2_slot5;
                                    var3 = {};
                                    var3.productId = var7;
                                    var7 = _closure2_slot3;
                                    var7 = var7.location;
                                    var3.analyticsLocation = var7;
                                    var3.analyticsLoadId = var6;
                                    var5 = _closure2_slot0;
                                    var3.applicationId = var5;
                                    var3 = var4.bind(var1)(var3);
                                    SaveGenerator(address = 82);
                                case 80:
                                    return var3;
                                case 82:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun82454_ip = 93;
                                        continue _fun82454
                                    }
                                case 88: // try_end0
                                    _fun82454_ip = 288;
                                    continue _fun82454;
                                case 93:
                                    return var3;
                                case 96: // catch_target0
                                    CatchBlockStart(arg_register = 4);
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 51;
                                    var3 = var6[var3];
                                    var3 = var5.bind(var1)(var3);
                                    var3 = var4 instanceof var3;
                                    if (!var3) {
                                        _fun82454_ip = 288;
                                        continue _fun82454
                                    }
                                case 128:
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var3 = 38;
                                    var3 = var10[var3];
                                    var4 = var9.bind(var1)(var3);
                                    var3 = var4.fetchSubscriptions;
                                    var3 = var3.bind(var4)();
                                    var4 = _closure1_slot1;
                                    var3 = 32;
                                    var3 = var10[var3];
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.show;
                                    var3 = {};
                                    var6 = 15;
                                    var7 = var10[var6];
                                    var7 = var9.bind(var1)(var7);
                                    var11 = var7.intl;
                                    var8 = var11.string;
                                    var7 = var10[var6];
                                    var7 = var9.bind(var1)(var7);
                                    var7 = var7.t;
                                    var7 = var7["U+H+kd"];
                                    var7 = var8.bind(var11)(var7);
                                    var3.title = var7;
                                    var7 = var10[var6];
                                    var7 = var9.bind(var1)(var7);
                                    var8 = var7.intl;
                                    var7 = var8.string;
                                    var6 = var10[var6];
                                    var6 = var9.bind(var1)(var6);
                                    var6 = var6.t;
                                    var6 = var6.yyDkbE;
                                    var6 = var7.bind(var8)(var6);
                                    var3.body = var6;
                                    var3 = var4.bind(var5)(var3);
                                case 288:
                                    var3 = _closure1_slot13;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                case 302:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var13 = var13.bind(var6)();
                var10.purchase = var13;
                var10 = var12.bind(var6)(var11, var10);
                var3.children = var10;
                var2 = var5.bind(var6)(var4, var3);
            case 1273:
                _fun82443_ip = 1342;
                continue _fun82443;
            case 1275:
                var5 = _closure1_slot24;
                var4 = _closure1_slot9;
                var3 = {};
                var3.ref = var8;
                var8 = {};
                var8.top = var9;
                var3.contentInset = var8;
                var9 = _closure1_slot24;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 46;
                var7 = var10[var7];
                var8 = var8.bind(var6)(var7);
                var7 = {};
                var7 = var9.bind(var6)(var8, var7);
                var3.children = var7;
                var2 = var5.bind(var6)(var4, var3);
            case 1342:
                var1 = var2;
            case 1345:
                var0 = var1;
            case 1348:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 52;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/PremiumPlanSelect.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3075, 3076, 4575, 7225, 1615, 660, 33, 1297, 4645, 4835, 671, 1234, 3068, 10526, 10527, 10528, 10529, 10530, 10531, 566, 3205, 4839, 4924, 3165, 7212, 7213, 7093, 7064, 3895, 10532, 1307, 4057, 5688, 5588, 3402, 4891, 4062, 7065, 7032, 6827, 7250, 5541, 6833, 3900, 7188, 7255, 795, 7034, 2]);