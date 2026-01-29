// modules/premium/UserOfferActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _fetchUserOffer, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun55228: for (var _fun55228_ip = 0;;) switch (_fun55228_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arguments[1];
                        var1 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55228_ip = 923;
                            continue _fun55228
                        }
                    case 16:
                        var23 = arg0;
                        var2 = undefined;
                        if (!(var3 === var2)) {
                            _fun55228_ip = 27;
                            continue _fun55228
                        }
                    case 25:
                        var3 = true;
                    case 27:
                        if (!(var1 === var2)) {
                            _fun55228_ip = 46;
                            continue _fun55228
                        }
                    case 31:
                        var11 = {};
                        var11.offerId = var2;
                        var11.paymentGatewayOverride = var2;
                        var1 = var11;
                    case 46:
                        var4 = var1;
                        var19 = arguments[3];
                        var10 = arguments[4];
                        var16 = undefined;
                        var15 = undefined;
                        var9 = undefined;
                        var13 = undefined;
                        var17 = undefined;
                        var14 = undefined;
                        var6 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var12 = undefined;
                        SaveGenerator(address = 79);
                    case 77:
                        return var2;
                    case 79:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun55228_ip = 920;
                            continue _fun55228
                        }
                    case 88:
                        if (!var3) {
                            _fun55228_ip = 917;
                            continue _fun55228
                        }
                    case 94:
                        var18 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var5 = 3;
                        var11 = var11[var5];
                        var20 = var18.bind(var2)(var11);
                        var18 = var20.dispatch;
                        var11 = {};
                        var21 = 'BILLING_USER_OFFER_FETCH_START';
                        var11.type = var21;
                        var11 = var18.bind(var20)(var11);
                    case 139: // try_start_0
                        var18 = var23;
                        var11 = null;
                        if (!(var11 != var18)) {
                            _fun55228_ip = 198;
                            continue _fun55228
                        }
                    case 148:
                        var20 = _closure1_slot1;
                        var21 = _closure1_slot2;
                        var18 = 4;
                        var18 = var21[var18];
                        var22 = var20.bind(var2)(var18);
                        var21 = var22.track;
                        var18 = _closure1_slot4;
                        var20 = var18.FETCH_USER_OFFER_STARTED;
                        var18 = {};
                        var18.call_location = var23;
                        var18 = var21.bind(var22)(var20, var18);
                    case 198:
                        var13 = var4.offerId;
                        var4 = var4.paymentGatewayOverride;
                        var17 = var4;
                        if (!(var2 === var4)) {
                            _fun55228_ip = 306;
                            continue _fun55228
                        }
                    case 217:
                        var18 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var20 = 2;
                        var4 = var4[var20];
                        var18 = var18.bind(var2)(var4);
                        var4 = var18.isAndroid;
                        var4 = var4.bind(var18)();
                        if (var4) {
                            _fun55228_ip = 294;
                            continue _fun55228
                        }
                    case 250:
                        var18 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var20];
                        var18 = var18.bind(var2)(var4);
                        var4 = var18.isIOS;
                        var18 = var4.bind(var18)();
                        var4 = null;
                        if (!var18) {
                            _fun55228_ip = 304;
                            continue _fun55228
                        }
                    case 282:
                        var18 = _closure1_slot6;
                        var4 = var18.APPLE;
                        _fun55228_ip = 304;
                        continue _fun55228;
                    case 294:
                        var18 = _closure1_slot6;
                        var4 = var18.GOOGLE;
                    case 304:
                        _fun55228_ip = 309;
                        continue _fun55228;
                    case 306:
                        var4 = var17;
                    case 309:
                        var14 = var4;
                        if (!(var11 == var4)) {
                            _fun55228_ip = 327;
                            continue _fun55228
                        }
                    case 316:
                        var4 = var13;
                        if (!(var11 == var4)) {
                            _fun55228_ip = 327;
                            continue _fun55228
                        }
                    case 323:
                        var18 = {};
                        _fun55228_ip = 345;
                        continue _fun55228;
                    case 327:
                        var4 = {};
                        var4.payment_gateway = var14;
                        var14 = var13;
                        var4.offer_id = var14;
                        var18 = var4;
                    case 345:
                        var14 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var4 = 5;
                        var4 = var17[var4];
                        var4 = var14.bind(var2)(var4);
                        var17 = var4.HTTP;
                        var14 = var17.post;
                        var4 = {};
                        var20 = _closure1_slot5;
                        var20 = var20.USER_OFFER;
                        var4.url = var20;
                        var4.body = var18;
                        var18 = true;
                        var4.rejectWithError = var18;
                        var18 = var19;
                        var20 = var11 != var18;
                        var18 = undefined;
                        if (!var20) {
                            _fun55228_ip = 420;
                            continue _fun55228
                        }
                    case 414:
                        var18 = var19.retries;
                    case 420:
                        var4.retries = var18;
                        var4 = var14.bind(var17)(var4);
                        SaveGenerator(address = 434);
                    case 432:
                        return var4;
                    case 434:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 14);
                        if (var14) {
                            _fun55228_ip = 873;
                            continue _fun55228
                        }
                    case 443:
                        var6 = var4;
                        var14 = var4.body;
                        var14 = var14.user_trial_offer;
                        var16 = var14;
                        var17 = var11 != var14;
                        var14 = null;
                        if (!var17) {
                            _fun55228_ip = 472;
                            continue _fun55228
                        }
                    case 469:
                        var14 = var16;
                    case 472:
                        var8 = var14;
                        var14 = var6;
                        var14 = var14.body;
                        var14 = var14.user_discount;
                        var15 = var14;
                        var16 = var11 != var14;
                        var14 = null;
                        if (!var16) {
                            _fun55228_ip = 504;
                            continue _fun55228
                        }
                    case 501:
                        var14 = var15;
                    case 504:
                        var7 = var14;
                        var6 = var6.body;
                        var6 = var6.user_discount_offer;
                        var9 = var6;
                        var14 = var11 != var6;
                        var6 = null;
                        if (!var14) {
                            _fun55228_ip = 533;
                            continue _fun55228
                        }
                    case 530:
                        var6 = var9;
                    case 533:
                        var12 = var6;
                        var6 = var13;
                        if (!(var11 != var6)) {
                            _fun55228_ip = 569;
                            continue _fun55228
                        }
                    case 543:
                        var6 = var12;
                        if (!(var11 != var6)) {
                            _fun55228_ip = 569;
                            continue _fun55228
                        }
                    case 550:
                        var6 = var12;
                        var9 = var6.discount_id;
                        var6 = var13;
                        if (!(var9 === var6)) {
                            _fun55228_ip = 776;
                            continue _fun55228
                        }
                    case 569:
                        var9 = var8;
                        var9 = var11 == var9;
                        var6 = var9;
                        if (!var9) {
                            _fun55228_ip = 637;
                            continue _fun55228
                        }
                    case 582:
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var9 = 7;
                        var9 = var16[var9];
                        var14 = var15.bind(var2)(var9);
                        var11 = var14.UNSAFE_isDismissibleContentDismissed;
                        var9 = 8;
                        var9 = var16[var9];
                        var9 = var15.bind(var2)(var9);
                        var9 = var9.DismissibleContent;
                        var9 = var9.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                        var6 = var11.bind(var14)(var9);
                    case 637:
                        if (!var6) {
                            _fun55228_ip = 695;
                            continue _fun55228
                        }
                    case 640:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var6 = 9;
                        var6 = var15[var6];
                        var11 = var14.bind(var2)(var6);
                        var9 = var11.removeDismissedContent;
                        var6 = 8;
                        var6 = var15[var6];
                        var6 = var14.bind(var2)(var6);
                        var6 = var6.DismissibleContent;
                        var6 = var6.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                        var6 = var9.bind(var11)(var6);
                    case 695:
                        var9 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var5];
                        var14 = var9.bind(var2)(var6);
                        var11 = var14.dispatch;
                        var6 = {};
                        var9 = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                        var6.type = var9;
                        var9 = var8;
                        var6.userTrialOffer = var9;
                        var8 = var7;
                        var6.userDiscount = var8;
                        var7 = var12;
                        var6.userDiscountOffer = var7;
                        var6 = var11.bind(var14)(var6);
                        var6 = {};
                        var6.userTrialOffer = var9;
                        var6.userDiscount = var8;
                        var6.userDiscountOffer = var7;
                    case 773: // try_end0
                        return var6;
                    case 776: // try_start_1
                        var6 = global;
                        var8 = var6.Error;
                        var6 = var8.prototype;
                        var7 = Object.create(var6, {
                            constructor: {
                                value: var8
                            }
                        });
                        var25 = 'Returned user discount offer does not match offer ID request parameter';
                        var26 = var7;
                        var6 = new var26[var8](var25, var24);
                        var6 = var6 instanceof Object ? var6 : var7;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 6;
                        var7 = var9[var7];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.captureException;
                        var7 = {};
                        var11 = {};
                        var11.offer_id = var13;
                        var11.user_discount_offer = var12;
                        var7.extra = var11;
                        var24 = var10;
                        var25 = var7;
                        var10 = copyDataProperties(var25, var24);
                        var7 = var8.bind(var9)(var6, var7);
                        throw var6;
                    case 873: // try_end1
                        return var4;
                    case 876: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_USER_OFFER_FETCH_FAIL';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                    case 917:
                        return var2;
                    case 920:
                        return var1;
                    case 923:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() { // Original name: _fetchExistingChurnDiscountOffer, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun55231: for (var _fun55231_ip = 0;;) switch (_fun55231_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55231_ip = 251;
                            continue _fun55231
                        }
                    case 10:
                        var1 = undefined;
                        var5 = undefined;
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var4 = 3;
                        var3 = var3[var4];
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var8 = 'BILLING_USER_OFFER_FETCH_START';
                        var3.type = var8;
                        var3 = var6.bind(var7)(var3);
                    case 59: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 5;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.get;
                        var3 = {};
                        var8 = _closure1_slot5;
                        var8 = var8.CHURN_USER_OFFER;
                        var3.url = var8;
                        var8 = true;
                        var3.rejectWithError = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 120);
                    case 118:
                        return var3;
                    case 120:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun55231_ip = 204;
                            continue _fun55231
                        }
                    case 126:
                        var6 = var3.body;
                        var7 = var6.offer;
                        var5 = var7;
                        var6 = null;
                        var7 = var6 != var7;
                        if (!var7) {
                            _fun55231_ip = 152;
                            continue _fun55231
                        }
                    case 149:
                        var6 = var5;
                    case 152:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.dispatch;
                        var5 = {};
                        var9 = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                        var5.type = var9;
                        var5.userDiscountOffer = var6;
                        var5 = var7.bind(var8)(var5);
                        var5 = {};
                        var5.userDiscountOffer = var6;
                    case 201: // try_end0
                        return var5;
                    case 204:
                        return var3;
                    case 207: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_USER_OFFER_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 251:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() { // Original name: _fetchChurnDiscountOffer, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun55234: for (var _fun55234_ip = 0;;) switch (_fun55234_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55234_ip = 180;
                            continue _fun55234
                        }
                    case 10:
                        var5 = undefined;
                        var7 = undefined;
                        var6 = null;
                        var1 = null;
                    case 18: // try_start_0
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 5;
                        var2 = var8[var2];
                        var2 = var4.bind(var5)(var2);
                        var8 = var2.HTTP;
                        var4 = var8.post;
                        var2 = {};
                        var9 = _closure1_slot5;
                        var9 = var9.CHURN_USER_OFFER;
                        var2.url = var9;
                        var9 = true;
                        var2.rejectWithError = var9;
                        var2 = var4.bind(var8)(var2);
                        SaveGenerator(address = 83);
                    case 81:
                        return var2;
                    case 83:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun55234_ip = 172;
                            continue _fun55234
                        }
                    case 89:
                        var4 = var2.body;
                        var4 = var4.offer;
                        var7 = var4;
                        var8 = var6 != var4;
                        var4 = null;
                        if (!var8) {
                            _fun55234_ip = 115;
                            continue _fun55234
                        }
                    case 112:
                        var4 = var7;
                    case 115:
                        var1 = var4;
                        if (!(var6 != var4)) {
                            _fun55234_ip = 170;
                            continue _fun55234
                        }
                    case 122:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 3;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                        var3.type = var6;
                        var6 = var1;
                        var3.userDiscountOffer = var6;
                        var3 = var4.bind(var5)(var3);
                    case 170: // try_end0
                        _fun55234_ip = 177;
                        continue _fun55234;
                    case 172:
                        return var2;
                    case 175: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 177:
                        return var1;
                    case 180:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot4 = var6;
    var6 = var3.Endpoints;
    var _closure1_slot5 = var6;
    var3 = var3.PaymentGateways;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/UserOfferActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: fetchUserOffer, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchUserOffer = var3;
    var3 = function() { // Original name: fetchExistingChurnDiscountOffer, environment: var1
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchExistingChurnDiscountOffer = var3;
    var3 = function() { // Original name: fetchChurnDiscountOffer, environment: var1
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchChurnDiscountOffer = var3;
    var1 = function(arg0, arg1) { // Original name: acknowledgeUserOffer, environment: var1
        _fun55238: for (var _fun55238_ip = 0;;) switch (_fun55238_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var4 = null;
                var5 = var4 != var2;
                var3 = undefined;
                var6 = undefined;
                if (!var5) {
                    _fun55238_ip = 41;
                    continue _fun55238
                }
            case 21:
                var5 = var2.expires_at;
                var5 = var4 == var5;
                var6 = undefined;
                if (!var5) {
                    _fun55238_ip = 41;
                    continue _fun55238
                }
            case 36:
                var6 = var2.id;
            case 41:
                var2 = var4 != var1;
                var5 = undefined;
                if (!var2) {
                    _fun55238_ip = 70;
                    continue _fun55238
                }
            case 50:
                var2 = var1.expires_at;
                var2 = var4 == var2;
                var5 = undefined;
                if (!var2) {
                    _fun55238_ip = 70;
                    continue _fun55238
                }
            case 65:
                var5 = var1.id;
            case 70:
                if (!(var3 === var6)) {
                    _fun55238_ip = 80;
                    continue _fun55238
                }
            case 74:
                if (!(var3 === var5)) {
                    _fun55238_ip = 80;
                    continue _fun55238
                }
            case 78:
                return var3;
            case 80:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var4 = _closure1_slot5;
                var4 = var4.USER_OFFER_ACKNOWLEDGED;
                var1.url = var4;
                var4 = {};
                var4.user_trial_offer_id = var6;
                var4.user_discount_offer_id = var5;
                var1.body = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun55239: for (var _fun55239_ip = 0;;) switch (_fun55239_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS';
                            var1.type = var4;
                            var4 = var5.body;
                            var7 = var4.user_trial_offer;
                            var4 = null;
                            var8 = var4 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun55239_ip = 68;
                                continue _fun55239
                            }
                        case 65:
                            var6 = var7;
                        case 68:
                            var1.userTrialOffer = var6;
                            var6 = var5.body;
                            var7 = var6.user_discount;
                            var8 = var4 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun55239_ip = 96;
                                continue _fun55239
                            }
                        case 93:
                            var6 = var7;
                        case 96:
                            var1.userDiscount = var6;
                            var5 = var5.body;
                            var5 = var5.user_discount_offer;
                            var6 = var4 != var5;
                            var4 = null;
                            if (!var6) {
                                _fun55239_ip = 124;
                                continue _fun55239
                            }
                        case 121:
                            var4 = var5;
                        case 124:
                            var1.userDiscountOffer = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    _fun55240: for (var _fun55240_ip = 0;;) switch (_fun55240_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.status;
                            var0 = 404;
                            if (!(var0 === var1)) {
                                _fun55240_ip = 67;
                                continue _fun55240
                            }
                        case 18:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {
                                'type': 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
                                'userTrialOffer': null,
                                'userDiscount': null,
                                'userDiscountOffer': null
                            };
                            var0 = var1.bind(var2)(var0);
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.acknowledgeUserOffer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 478, 806, 795, 507, 1207, 3171, 1358, 1355, 2]);