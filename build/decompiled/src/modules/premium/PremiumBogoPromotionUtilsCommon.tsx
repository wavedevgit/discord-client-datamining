// modules/premium/PremiumBogoPromotionUtilsCommon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun57857: for (var _fun57857_ip = 0;;) switch (_fun57857_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.experimentEnabled;
                var4 = var1.premiumSubscription;
                var7 = var1.mostRecentSubscription;
                var6 = var1.previousPremiumSubscription;
                if (var0) {
                    _fun57857_ip = 34;
                    continue _fun57857
                }
            case 30:
                var0 = false;
                return var0;
            case 34:
                var0 = null;
                if (!(var0 != var7)) {
                    _fun57857_ip = 158;
                    continue _fun57857
                }
            case 40:
                var3 = var7.status;
                var2 = _closure1_slot12;
                var2 = var2.ENDED;
                if (!(var3 === var2)) {
                    _fun57857_ip = 158;
                    continue _fun57857
                }
            case 62:
                var3 = var7.endedAt;
                var5 = var7.hasPremiumAtLeast;
                var2 = _closure1_slot10;
                var2 = var2.TIER_2;
                var2 = var5.bind(var7)(var2);
                if (!(var0 != var3)) {
                    _fun57857_ip = 158;
                    continue _fun57857
                }
            case 93:
                if (!var2) {
                    _fun57857_ip = 158;
                    continue _fun57857
                }
            case 96:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var7 = var1.bind(var2)();
                var5 = var7.subtract;
                var2 = 10;
                var1 = 'days';
                var2 = var5.bind(var7)(var2, var1);
                var1 = var2.isBefore;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun57857_ip = 518;
                    continue _fun57857
                }
            case 158:
                if (!(var0 != var6)) {
                    _fun57857_ip = 280;
                    continue _fun57857
                }
            case 162:
                var3 = var6.status;
                var2 = _closure1_slot12;
                var2 = var2.ENDED;
                if (!(var3 === var2)) {
                    _fun57857_ip = 280;
                    continue _fun57857
                }
            case 184:
                var3 = var6.endedAt;
                var5 = var6.hasPremiumAtLeast;
                var2 = _closure1_slot10;
                var2 = var2.TIER_2;
                var2 = var5.bind(var6)(var2);
                if (!(var0 != var3)) {
                    _fun57857_ip = 280;
                    continue _fun57857
                }
            case 215:
                if (!var2) {
                    _fun57857_ip = 280;
                    continue _fun57857
                }
            case 218:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var6 = var1.bind(var2)();
                var5 = var6.subtract;
                var2 = 10;
                var1 = 'days';
                var2 = var5.bind(var6)(var2, var1);
                var1 = var2.isBefore;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun57857_ip = 514;
                    continue _fun57857
                }
            case 280:
                if (!(var0 != var4)) {
                    _fun57857_ip = 454;
                    continue _fun57857
                }
            case 287:
                var2 = var4.hasPremiumAtLeast;
                var1 = _closure1_slot10;
                var1 = var1.TIER_2;
                var2 = var2.bind(var4)(var1);
                var5 = _closure1_slot4;
                var1 = var5.getCurrentUser;
                var7 = var1.bind(var5)();
                var0 = var0 == var4;
                if (var0) {
                    _fun57857_ip = 340;
                    continue _fun57857
                }
            case 331:
                var1 = var4.hasActiveTrial;
                var0 = !var1;
            case 340:
                var1 = !var0;
                if (var0) {
                    _fun57857_ip = 390;
                    continue _fun57857
                }
            case 346:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 9;
                var5 = var5[var0];
                var0 = undefined;
                var6 = var6.bind(var0)(var5);
                var5 = var6.isPremiumExactly;
                var0 = _closure1_slot10;
                var0 = var0.TIER_0;
                var1 = var5.bind(var6)(var7, var0);
            case 390:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 10;
                var5 = var5[var0];
                var0 = undefined;
                var5 = var6.bind(var0)(var5);
                var0 = var5.isAndroid;
                var0 = var0.bind(var5)();
                if (!var0) {
                    _fun57857_ip = 445;
                    continue _fun57857
                }
            case 425:
                var4 = var4.paymentGateway;
                var3 = _closure1_slot11;
                var3 = var3.GOOGLE;
                var0 = var4 !== var3;
            case 445:
                if (var2) {
                    _fun57857_ip = 510;
                    continue _fun57857
                }
            case 448:
                if (var1) {
                    _fun57857_ip = 510;
                    continue _fun57857
                }
            case 451:
                if (var0) {
                    _fun57857_ip = 510;
                    continue _fun57857
                }
            case 454:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.isMobile;
                var0 = !var0;
                if (var0) {
                    _fun57857_ip = 508;
                    continue _fun57857
                }
            case 491:
                var2 = _closure1_slot7;
                var1 = var2.isFractionalPremiumActive;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 508:
                return var0;
            case 510:
                var0 = false;
                return var0;
            case 514:
                var0 = false;
                return var0;
            case 518:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot13 = var4;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57861: for (var _fun57861_ip = 0;;) switch (_fun57861_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57861_ip = 618;
                            continue _fun57861
                        }
                    case 13:
                        var6 = undefined;
                        if (!(var8 === var6)) {
                            _fun57861_ip = 21;
                            continue _fun57861
                        }
                    case 19:
                        var8 = true;
                    case 21:
                        SaveGenerator(address = 25);
                    case 23:
                        return var6;
                    case 25:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57861_ip = 615;
                            continue _fun57861
                        }
                    case 34:
                        var3 = _closure1_slot4;
                        var2 = var3.getCurrentUser;
                        var4 = var2.bind(var3)();
                        var5 = null;
                        var2 = var5 != var4;
                        if (!var2) {
                            _fun57861_ip = 69;
                            continue _fun57861
                        }
                    case 59:
                        var3 = var4.isClaimed;
                        var2 = var3.bind(var4)();
                    case 69:
                        var11 = !var2;
                        var4 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var2 = 12;
                        var2 = var14[var2];
                        var12 = var4.bind(var6)(var2);
                        var10 = var12.getCurrentConfig;
                        var9 = {};
                        var2 = '153d31_3';
                        var9.location = var2;
                        var3 = {};
                        var2 = false;
                        var3.autoTrackExposure = var2;
                        var3 = var10.bind(var12)(var9, var3);
                        var10 = var3.paymentsBlocked;
                        var13 = _closure1_slot0;
                        var3 = 14;
                        var3 = var14[var3];
                        var9 = var13.bind(var6)(var3);
                        var3 = var9.isBogoPromotionExperimentEnabled;
                        var3 = var3.bind(var9)();
                        var9 = var3.enabled;
                        var3 = 15;
                        var3 = var14[var3];
                        var12 = var13.bind(var6)(var3);
                        var3 = var12.isBogoMobilePromotionExperimentEnabled;
                        var3 = var3.bind(var12)();
                        var12 = var3.enabled;
                        var3 = 20;
                        var3 = var14[var3];
                        var16 = var4.bind(var6)(var3);
                        var15 = var16.getCurrentConfig;
                        var4 = {};
                        var3 = '153d31_4';
                        var4.location = var3;
                        var3 = {};
                        var3.autoTrackExposure = var2;
                        var3 = var15.bind(var16)(var4, var3);
                        var4 = var3.enabled;
                        var3 = 11;
                        var3 = var14[var3];
                        var3 = var13.bind(var6)(var3);
                        var3 = var3.isMobile;
                        var3 = !var3;
                        if (var3) {
                            _fun57861_ip = 264;
                            continue _fun57861
                        }
                    case 261:
                        var3 = var12;
                    case 264:
                        if (var11) {
                            _fun57861_ip = 612;
                            continue _fun57861
                        }
                    case 270:
                        if (var10) {
                            _fun57861_ip = 612;
                            continue _fun57861
                        }
                    case 276:
                        if (!var9) {
                            _fun57861_ip = 612;
                            continue _fun57861
                        }
                    case 282:
                        if (!var8) {
                            _fun57861_ip = 291;
                            continue _fun57861
                        }
                    case 285:
                        if (!var4) {
                            _fun57861_ip = 612;
                            continue _fun57861
                        }
                    case 291:
                        if (!var3) {
                            _fun57861_ip = 612;
                            continue _fun57861
                        }
                    case 297:
                        var4 = _closure1_slot6;
                        var3 = var4.hasFetchedOffer;
                        var3 = var3.bind(var4)();
                        if (!var3) {
                            _fun57861_ip = 356;
                            continue _fun57861
                        }
                    case 314:
                        var4 = _closure1_slot6;
                        var3 = var4.hasAnyUnexpiredOffer;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun57861_ip = 609;
                            continue _fun57861
                        }
                    case 334:
                        var4 = _closure1_slot6;
                        var3 = var4.hasAnyUnexpiredDiscountOffer;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun57861_ip = 609;
                            continue _fun57861
                        }
                    case 356:
                        var4 = _closure1_slot5;
                        var3 = var4.hasFetchedMostRecentPremiumTypeSubscription;
                        var3 = var3.bind(var4)();
                        var3 = !var3;
                        var8 = undefined;
                        if (!var3) {
                            _fun57861_ip = 400;
                            continue _fun57861
                        }
                    case 380:
                        var10 = _closure1_slot4;
                        var4 = var10.getCurrentUser;
                        var4 = var4.bind(var10)();
                        var3 = var5 != var4;
                        var8 = var4;
                    case 400:
                        if (!var3) {
                            _fun57861_ip = 424;
                            continue _fun57861
                        }
                    case 403:
                        var5 = var8.hasPurchasedFlag;
                        var4 = _closure1_slot9;
                        var4 = var4.PREMIUM_TIER_2;
                        var3 = var5.bind(var8)(var4);
                    case 424:
                        if (!var3) {
                            _fun57861_ip = 470;
                            continue _fun57861
                        }
                    case 427:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 21;
                        var3 = var5[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.fetchMostRecentSubscription;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 461);
                    case 459:
                        return var3;
                    case 461:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun57861_ip = 606;
                            continue _fun57861
                        }
                    case 470:
                        var5 = _closure1_slot5;
                        var4 = var5.hasFetchedSubscriptions;
                        var4 = var4.bind(var5)();
                        if (var4) {
                            _fun57861_ip = 530;
                            continue _fun57861
                        }
                    case 487:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 21;
                        var4 = var8[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.fetchSubscriptions;
                        var4 = var4.bind(var5)();
                        SaveGenerator(address = 521);
                    case 519:
                        return var4;
                    case 521:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (!var5) {
                            _fun57861_ip = 530;
                            continue _fun57861
                        }
                    case 527:
                        return var4;
                    case 530:
                        var5 = _closure1_slot5;
                        var4 = var5.getMostRecentPremiumTypeSubscription;
                        var8 = var4.bind(var5)();
                        var5 = _closure1_slot13;
                        var4 = {};
                        var4.experimentEnabled = var9;
                        var10 = _closure1_slot5;
                        var9 = var10.getPremiumTypeSubscription;
                        var9 = var9.bind(var10)();
                        var4.premiumSubscription = var9;
                        var4.mostRecentSubscription = var8;
                        var8 = _closure1_slot5;
                        var7 = var8.getPreviousPremiumTypeSubscription;
                        var7 = var7.bind(var8)();
                        var4.previousPremiumSubscription = var7;
                        var4 = var5.bind(var6)(var4);
                        return var4;
                    case 606:
                        return var3;
                    case 609:
                        return var2;
                    case 612:
                        return var2;
                    case 615:
                        return var1;
                    case 618:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57864: for (var _fun57864_ip = 0;;) switch (_fun57864_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57864_ip = 172;
                            continue _fun57864
                        }
                    case 10:
                        var4 = _closure1_slot14;
                        var2 = undefined;
                        var1 = false;
                        var1 = var4.bind(var2)(var1);
                        SaveGenerator(address = 30);
                    case 28:
                        return var1;
                    case 30:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun57864_ip = 169;
                            continue _fun57864
                        }
                    case 39:
                        if (!var1) {
                            _fun57864_ip = 160;
                            continue _fun57864
                        }
                    case 42:
                        var4 = _closure1_slot8;
                        var5 = var4.bogoPromotion;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun57864_ip = 120;
                            continue _fun57864
                        }
                    case 58:
                        var4 = global;
                        var7 = var4.Date;
                        var8 = var5.endDate;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var9 = var6;
                        var5 = new var9[var7](var8, var7);
                        var6 = var5 instanceof Object ? var5 : var6;
                        var5 = var6.valueOf;
                        var5 = var5.bind(var6)();
                        var6 = var4.Date;
                        var4 = var6.now;
                        var4 = var4.bind(var6)();
                        if (!(!(var5 >= var4))) {
                            _fun57864_ip = 166;
                            continue _fun57864
                        }
                    case 120:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 22;
                        var3 = var5[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.fetchActiveBogoPromotion;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 154);
                    case 152:
                        return var3;
                    case 154:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun57864_ip = 163;
                            continue _fun57864
                        }
                    case 160:
                        return var2;
                    case 163:
                        return var3;
                    case 166:
                        return var2;
                    case 169:
                        return var1;
                    case 172:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.PurchasedFlags;
    var _closure1_slot9 = var8;
    var5 = var5.PremiumTypes;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.PaymentGateways;
    var _closure1_slot11 = var8;
    var5 = var5.SubscriptionStatusTypes;
    var _closure1_slot12 = var5;
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/PremiumBogoPromotionUtilsCommon.tsx';
    var5 = var6.bind(var7)(var5);
    var2.isUserEligibleBasedOnCurrentOrPreviousSubs = var4;
    var4 = function() {
        _fun57865: for (var _fun57865_ip = 0;;) switch (_fun57865_ip) {
            case 0:
                var3 = arguments[0];
                var5 = undefined;
                if (!(var3 === var5)) {
                    _fun57865_ip = 11;
                    continue _fun57865
                }
            case 9:
                var3 = true;
            case 11:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var8 = var6.bind(var5)(var1);
                var7 = var8.useExperiment;
                var2 = {};
                var1 = '153d31_1';
                var2.location = var1;
                var1 = {};
                var9 = false;
                var1.autoTrackExposure = var9;
                var1 = var7.bind(var8)(var2, var1);
                var7 = var1.paymentsBlocked;
                var2 = _closure1_slot0;
                var1 = 13;
                var1 = var4[var1];
                var8 = var2.bind(var5)(var1);
                var1 = var8.useBogoPromotion;
                var1 = var1.bind(var8)();
                var8 = var1.promotion;
                var1 = 14;
                var1 = var4[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.bind(var5)();
                var15 = var1.enabled;
                var1 = 15;
                var1 = var4[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.bind(var5)();
                var11 = var1.enabled;
                var1 = 16;
                var1 = var4[var1];
                var10 = var2.bind(var5)(var1);
                var9 = var10.useStateFromStoresObject;
                var1 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var3 = _closure1_slot5;
                    var2 = var3.getMostRecentPremiumTypeSubscription;
                    var2 = var2.bind(var3)();
                    var0.mostRecentSubscription = var2;
                    var3 = _closure1_slot5;
                    var2 = var3.getPremiumTypeSubscription;
                    var2 = var2.bind(var3)();
                    var0.premiumSubscription = var2;
                    var2 = _closure1_slot5;
                    var1 = var2.getPreviousPremiumTypeSubscription;
                    var1 = var1.bind(var2)();
                    var0.previousPremiumSubscription = var1;
                    return var0;
                };
                var1 = var9.bind(var10)(var6, var1);
                var13 = var1.mostRecentSubscription;
                var14 = var1.premiumSubscription;
                var12 = var1.previousPremiumSubscription;
                var1 = 17;
                var1 = var4[var1];
                var6 = var2.bind(var5)(var1);
                var1 = var6.usePremiumTrialOffer;
                var9 = var1.bind(var6)();
                var1 = 18;
                var1 = var4[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.usePremiumDiscountOffer;
                var6 = var1.bind(var2)();
                var1 = global;
                var16 = var1.Date;
                var2 = null;
                var4 = var2 == var8;
                var10 = undefined;
                if (var4) {
                    _fun57865_ip = 277;
                    continue _fun57865
                }
            case 271:
                var10 = var8.endDate;
            case 277:
                var17 = var2 != var10;
                var4 = 0;
                if (!var17) {
                    _fun57865_ip = 289;
                    continue _fun57865
                }
            case 286:
                var4 = var10;
            case 289:
                var10 = var16.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var16
                    }
                });
                var22 = var10;
                var21 = var4;
                var4 = new var22[var16](var21, var20);
                var10 = var4 instanceof Object ? var4 : var10;
                var4 = var10.valueOf;
                var18 = var4.bind(var10)();
                var4 = var1.Date;
                var1 = var4.now;
                var17 = var1.bind(var4)();
                var4 = var17 > var18;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var1 = 19;
                var1 = var16[var1];
                var10 = var10.bind(var5)(var1);
                var1 = {};
                var16 = -1;
                if (var4) {
                    _fun57865_ip = 375;
                    continue _fun57865
                }
            case 371:
                var16 = var18 - var17;
            case 375:
                var1.delay = var16;
                var1 = var10.bind(var5)(var1);
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 11;
                var1 = var16[var1];
                var1 = var10.bind(var5)(var1);
                var1 = var1.isMobile;
                var1 = !var1;
                if (var1) {
                    _fun57865_ip = 456;
                    continue _fun57865
                }
            case 417:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 10;
                var10 = var17[var10];
                var16 = var16.bind(var5)(var10);
                var10 = var16.isAndroid;
                var10 = var10.bind(var16)();
                if (!var10) {
                    _fun57865_ip = 453;
                    continue _fun57865
                }
            case 450:
                var10 = var11;
            case 453:
                var1 = var10;
            case 456:
                var11 = _closure1_slot13;
                var10 = {};
                var10.experimentEnabled = var15;
                var10.premiumSubscription = var14;
                var10.mostRecentSubscription = var13;
                var10.previousPremiumSubscription = var12;
                var10 = var11.bind(var5)(var10);
                if (!var1) {
                    _fun57865_ip = 493;
                    continue _fun57865
                }
            case 490:
                var1 = var10;
            case 493:
                if (!var1) {
                    _fun57865_ip = 500;
                    continue _fun57865
                }
            case 496:
                var1 = var2 == var9;
            case 500:
                if (!var1) {
                    _fun57865_ip = 507;
                    continue _fun57865
                }
            case 503:
                var1 = var2 != var8;
            case 507:
                if (!var1) {
                    _fun57865_ip = 513;
                    continue _fun57865
                }
            case 510:
                var1 = !var7;
            case 513:
                if (!var1) {
                    _fun57865_ip = 520;
                    continue _fun57865
                }
            case 516:
                var1 = var2 == var6;
            case 520:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 20;
                var0 = var6[var0];
                var6 = var2.bind(var5)(var0);
                var5 = var6.useExperiment;
                var2 = {};
                var0 = '153d31_2';
                var2.location = var0;
                var0 = {};
                var0.autoTrackExposure = var1;
                var7 = !var1;
                var0.disable = var7;
                var0 = var5.bind(var6)(var2, var0);
                var2 = var0.enabled;
                var0 = !var4;
                if (var4) {
                    _fun57865_ip = 599;
                    continue _fun57865
                }
            case 590:
                if (!var3) {
                    _fun57865_ip = 596;
                    continue _fun57865
                }
            case 593:
                var1 = var2;
            case 596:
                var0 = var1;
            case 599:
                return var0;
        }
    };
    var2.useIsEligibleForBogoPromotion = var4;
    var2.isEligibleForBOGOPromotion = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.maybeFetchActiveBogoPromotion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1621, 3117, 6644, 4652, 7077, 1623, 660, 3045, 3109, 478, 3360, 6870, 7096, 7101, 7102, 632, 6653, 6655, 7103, 7104, 3443, 7097, 2]);