// modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsxs;
    var _closure1_slot11 = var7;
    var3 = var3.jsx;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'PaymentFlowTest.android';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot13 = var3;
    var3 = function arg0() {
        _fun86854: for (var _fun86854_ip = 0;;) switch (_fun86854_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.selectedSkuId;
                var _closure2_slot0 = var15;
                var10 = var0.giftRecipientId;
                var12 = var0.giftMessage;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 10;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var19 = var0.bind(var3)();
                var18 = _closure1_slot5;
                var1 = var18.useState;
                var0 = false;
                var1 = var1.bind(var18)(var0);
                var0 = _closure1_slot4;
                var16 = 2;
                var0 = var0.bind(var3)(var1, var16);
                var5 = 0;
                var1 = var0[var5];
                var _closure2_slot1 = var1;
                var4 = 1;
                var0 = var0[var4];
                var _closure2_slot2 = var0;
                var6 = _closure1_slot7;
                var0 = var6.getCurrentUser;
                var7 = var0.bind(var6)();
                var _closure2_slot3 = var7;
                var6 = var18.useRef;
                var0 = {};
                var0 = var6.bind(var18)(var0);
                var _closure2_slot4 = var0;
                var8 = _closure1_slot0;
                var0 = 11;
                var0 = var14[var0];
                var6 = var8.bind(var3)(var0);
                var0 = var6.useNativeGiftContext;
                var0 = var0.bind(var6)();
                var13 = var0.giftStyle;
                var11 = 12;
                var0 = var14[var11];
                var20 = var8.bind(var3)(var0);
                var17 = var20.useStateFromStores;
                var0 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var2
                    var2 = _closure1_slot8;
                    var1 = var2.get;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var17.bind(var20)(var6, var0);
                var0 = 13;
                var0 = var14[var0];
                var8 = var8.bind(var3)(var0);
                var0 = var8.useFetchCollectiblesProduct;
                var8 = var0.bind(var8)(var15);
                var0 = var8.product;
                var _closure2_slot5 = var0;
                var14 = var8.isFetching;
                var20 = var18.useEffect;
                var17 = new Array(1);
                var17[0] = var15;
                var8 = function() { // Environment: var2
                    _fun86856: for (var _fun86856_ip = 0;;) switch (_fun86856_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun86856_ip = 53;
                                continue _fun86856
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchCollectiblesProduct;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var20.bind(var18)(var8, var17);
                var17 = var18.useMemo;
                var8 = new Array(3);
                var8[0] = var0;
                var8[1] = var7;
                var8[2] = var15;
                var7 = function() { // Environment: var2
                    _fun86857: for (var _fun86857_ip = 0;;) switch (_fun86857_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun86857_ip = 170;
                                continue _fun86857
                            }
                        case 16:
                            var2 = _closure2_slot5;
                            var2 = var2.googleSkuIds;
                            if (!(var1 != var2)) {
                                _fun86857_ip = 170;
                                continue _fun86857
                            }
                        case 33:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 15;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.isPremium;
                            var4 = _closure2_slot3;
                            var3 = _closure1_slot10;
                            var3 = var3.TIER_2;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = _closure2_slot5;
                            var4 = var4.googleSkuIds;
                            var2 = _closure1_slot9;
                            if (var3) {
                                _fun86857_ip = 113;
                                continue _fun86857
                            }
                        case 101:
                            var3 = var2.MOBILE;
                            var3 = var4[var3];
                            _fun86857_ip = 123;
                            continue _fun86857;
                        case 113:
                            var2 = var2.MOBILE_PREMIUM_TIER_2;
                            var3 = var4[var2];
                        case 123:
                            if (!(var1 != var3)) {
                                _fun86857_ip = 157;
                                continue _fun86857
                            }
                        case 127:
                            var1 = global;
                            var4 = var1.Object;
                            var2 = var4.values;
                            var1 = _closure2_slot5;
                            var1 = var1.googleSkuIds;
                            var1 = var2.bind(var4)(var1);
                            _fun86857_ip = 168;
                            continue _fun86857;
                        case 157:
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1 = var2;
                        case 168:
                            return var1;
                        case 170:
                            var2 = _closure1_slot13;
                            var1 = var2.warn;
                            var4 = _closure2_slot0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var0 = 'No googleSkuIds available for product: ';
                            var0 = var3.bind(var0)(var4);
                            var0 = var1.bind(var2)(var0);
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var20 = var17.bind(var18)(var7, var8);
                var _closure2_slot6 = var20;
                var17 = var18.useMemo;
                var8 = new Array(1);
                var8[0] = var20;
                var7 = function() { // Environment: var2
                    var1 = _closure2_slot6;
                    var0 = var1.sort;
                    var2 = var0.bind(var1)();
                    var1 = var2.join;
                    var0 = ',';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var17.bind(var18)(var7, var8);
                var _closure2_slot7 = var7;
                var17 = var18.useEffect;
                var8 = new Array(3);
                var8[0] = var20;
                var8[1] = var1;
                var8[2] = var7;
                var7 = function() { // Environment: var2
                    var1 = function() {
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun86862: for (var _fun86862_ip = 0;;) switch (_fun86862_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun86862_ip = 218;
                                            continue _fun86862
                                        }
                                    case 10:
                                        var2 = _closure2_slot7;
                                        var5 = null;
                                        if (!(var5 != var2)) {
                                            _fun86862_ip = 46;
                                            continue _fun86862
                                        }
                                    case 23:
                                        var2 = _closure2_slot4;
                                        var3 = var2.current;
                                        var2 = _closure2_slot7;
                                        var2 = var3[var2];
                                        if (var2) {
                                            _fun86862_ip = 213;
                                            continue _fun86862
                                        }
                                    case 46:
                                        var2 = _closure2_slot6;
                                        var3 = var2.length;
                                        var2 = 0;
                                        if (!(var2 !== var3)) {
                                            _fun86862_ip = 213;
                                            continue _fun86862
                                        }
                                    case 64:
                                        var2 = _closure2_slot1;
                                        if (var2) {
                                            _fun86862_ip = 213;
                                            continue _fun86862
                                        }
                                    case 74:
                                        var2 = _closure2_slot2;
                                        var3 = undefined;
                                        var6 = true;
                                        var2 = var2.bind(var3)(var6);
                                    case 87: // try_start_0
                                        var4 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var2 = 16;
                                        var2 = var7[var2];
                                        var7 = var4.bind(var3)(var2);
                                        var4 = var7.loadInAppSkus;
                                        var2 = _closure2_slot6;
                                        var2 = var4.bind(var7)(var2);
                                        SaveGenerator(address = 129);
                                    case 127:
                                        return var2;
                                    case 129:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun86862_ip = 173;
                                            continue _fun86862
                                        }
                                    case 135:
                                        var4 = _closure2_slot7;
                                        if (!(var5 != var4)) {
                                            _fun86862_ip = 160;
                                            continue _fun86862
                                        }
                                    case 143:
                                        var4 = _closure2_slot4;
                                        var5 = var4.current;
                                        var4 = _closure2_slot7;
                                        var5[var4] = var6;
                                    case 160:
                                        var5 = _closure2_slot2;
                                        var4 = false;
                                        var4 = var5.bind(var3)(var4);
                                    case 171: // try_end0
                                        _fun86862_ip = 213;
                                        continue _fun86862;
                                    case 173:
                                        return var2;
                                    case 176: // catch_target0
                                        CatchBlockStart(arg_register = 6);
                                        var5 = _closure1_slot13;
                                        var4 = var5.error;
                                        var2 = 'Unable to fetch product IDs from Google Play store:';
                                        var2 = var4.bind(var5)(var2, var6);
                                        var2 = _closure2_slot2;
                                        var1 = false;
                                        var1 = var2.bind(var3)(var1);
                                    case 213:
                                        var1 = undefined;
                                        return var1;
                                    case 218:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot0 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var1 = function() {
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = !var1;
                    return var0;
                };
                var7 = var17.bind(var18)(var7, var8);
                var7 = null;
                var17 = var0;
                if (!(var7 == var17)) {
                    _fun86854_ip = 410;
                    continue _fun86854
                }
            case 393:
                var8 = {};
                var8.skuId = var15;
                var15 = {};
                var8.googleSkuIds = var15;
                var17 = var8;
            case 410:
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                var8 = 17;
                var8 = var18[var8];
                var15 = var15.bind(var3)(var8);
                var8 = {};
                var8.product = var17;
                var17 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var8.onPurchaseComplete = var17;
                var17 = function() {
                    var2 = _closure1_slot13;
                    var1 = var2.error;
                    var0 = 'Purchase error occurred';
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var8.onPurchaseError = var17;
                var17 = function() {
                    var2 = _closure1_slot13;
                    var1 = var2.info;
                    var0 = 'Purchase is pending';
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var8.onPurchasePending = var17;
                var17 = {};
                var18 = true;
                var17.isGift = var18;
                var18 = {};
                var18.recipient_id = var10;
                var18.custom_message = var12;
                var18.gift_style = var13;
                var17.options = var18;
                var8.giftParams = var17;
                var8 = var15.bind(var3)(var8);
                _closure2_slot8 = var8;
                var8 = function() { // Environment: var2
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun86869: for (var _fun86869_ip = 0;;) switch (_fun86869_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun86869_ip = 413;
                                        continue _fun86869
                                    }
                                case 10: // try_start_0
                                    var1 = _closure2_slot5;
                                    var3 = null;
                                    if (!(var3 != var1)) {
                                        _fun86869_ip = 186;
                                        continue _fun86869
                                    }
                                case 26:
                                    var1 = _closure2_slot5;
                                    var1 = var1.googleSkuIds;
                                    if (!(var3 != var1)) {
                                        _fun86869_ip = 83;
                                        continue _fun86869
                                    }
                                case 40:
                                    var1 = _closure2_slot6;
                                    var3 = var1.length;
                                    var1 = 0;
                                    if (!(var1 !== var3)) {
                                        _fun86869_ip = 83;
                                        continue _fun86869
                                    }
                                case 55:
                                    var3 = _closure2_slot8;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)();
                                    SaveGenerator(address = 69);
                                case 67:
                                    return var1;
                                case 69:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun86869_ip = 80;
                                        continue _fun86869
                                    }
                                case 75: // try_end0
                                    _fun86869_ip = 408;
                                    continue _fun86869;
                                case 80:
                                    return var1;
                                case 83: // try_start_1
                                    var4 = _closure1_slot13;
                                    var3 = var4.error;
                                    var2 = _closure2_slot5;
                                    var7 = var2.skuId;
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var6 = var2.concat;
                                    var2 = 'No Google SKU IDs available for product ';
                                    var2 = var6.bind(var2)(var7);
                                    var2 = var3.bind(var4)(var2);
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 19;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.show;
                                    var1 = {
                                        'title': 'Product Not Available',
                                        'body': 'This product is not available for purchase on Google Play.'
                                    };
                                    var1 = var2.bind(var3)(var1);
                                case 181: // try_end1
                                    var1 = undefined;
                                    return var1;
                                case 186: // try_start_2
                                    var4 = _closure1_slot13;
                                    var3 = var4.error;
                                    var2 = 'Cannot proceed with purchase: collectibleProduct is undefined';
                                    var2 = var3.bind(var4)(var2);
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 19;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.show;
                                    var1 = {
                                        'title': 'Product Not Found',
                                        'body': 'The product information could not be loaded. Please try again.'
                                    };
                                    var1 = var2.bind(var3)(var1);
                                case 256: // try_end2
                                    var1 = undefined;
                                    return var1;
                                case 261: // catch_target0 // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 8);
                                    var5 = var8;
                                    var4 = _closure1_slot13;
                                    var3 = var4.warn;
                                    var2 = 'Error creating gift purchase:';
                                    var2 = var3.bind(var4)(var2, var8);
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 19;
                                    var1 = var3[var1];
                                    var6 = undefined;
                                    var3 = var2.bind(var6)(var1);
                                    var2 = var3.show;
                                    var1 = {};
                                    var4 = 'Gift Purchase Failed';
                                    var1.title = var4;
                                    var7 = null;
                                    var7 = var7 == var8;
                                    if (var7) {
                                        _fun86869_ip = 347;
                                        continue _fun86869
                                    }
                                case 339:
                                    var7 = var5;
                                    var6 = var7.message;
                                case 347:
                                    var4 = var6;
                                    if (var6) {
                                        _fun86869_ip = 372;
                                        continue _fun86869
                                    }
                                case 353:
                                    var6 = global;
                                    var7 = var6.JSON;
                                    var6 = var7.stringify;
                                    var4 = var6.bind(var7)(var5);
                                case 372:
                                    var6 = var4;
                                    var4 = global;
                                    var4 = var4.HermesInternal;
                                    var5 = var4.concat;
                                    var4 = 'Error: ';
                                    var4 = var5.bind(var4)(var6);
                                    var1.body = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 408:
                                    var1 = undefined;
                                    return var1;
                                case 413:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() {
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
                var15 = var8.bind(var3)();
                var18 = _closure1_slot5;
                var17 = var18.useMemo;
                var8 = new Array(1);
                var8[0] = var0;
                var2 = function() { // Environment: var2
                    _fun86871: for (var _fun86871_ip = 0;;) switch (_fun86871_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun86871_ip = 95;
                                continue _fun86871
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 20;
                            var0 = var6[var1];
                            var2 = undefined;
                            var7 = var3.bind(var2)(var0);
                            var0 = var7.getFormattedPriceForCollectiblesProduct;
                            var5 = _closure2_slot5;
                            var4 = true;
                            var7 = var0.bind(var7)(var5, var4, var4);
                            var0 = new Array(2);
                            var0[0] = var7;
                            var1 = var6[var1];
                            var3 = var3.bind(var2)(var1);
                            var2 = var3.getFormattedPriceForCollectiblesProduct;
                            var1 = false;
                            var1 = var2.bind(var3)(var5, var1, var4);
                            var0[1] = var1;
                            _fun86871_ip = 105;
                            continue _fun86871;
                        case 95:
                            var0 = ['Loading...', 'Loading...'];
                        case 105:
                            return var0;
                    }
                };
                var8 = var17.bind(var18)(var2, var8);
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var8, var16);
                var17 = var2[var5];
                var18 = var2[var4];
                if (var14) {
                    _fun86854_ip = 582;
                    continue _fun86854
                }
            case 579:
                var14 = var1;
            case 582:
                if (var14) {
                    _fun86854_ip = 589;
                    continue _fun86854
                }
            case 585:
                var14 = var7 == var0;
            case 589:
                var2 = _closure1_slot11;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 21;
                var0 = var4[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var16 = 24;
                var0.spacing = var16;
                var8 = {};
                var20 = var19.top;
                var8.paddingTop = var20;
                var19 = var19.bottom;
                var8.paddingBottom = var19;
                var8.paddingHorizontal = var11;
                var0.style = var8;
                var8 = 22;
                var4 = var4[var8];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-md/medium',
                    'color': 'always-white'
                };
                var19 = var7 == var6;
                var11 = undefined;
                if (var19) {
                    _fun86854_ip = 703;
                    continue _fun86854
                }
            case 698:
                var11 = var6.name;
            case 703:
                var6 = ['Gifting '];
                var6[1] = var11;
                var11 = ' to ';
                var6[2] = var11;
                var6[3] = var10;
                var11 = ' ';
                var6[4] = var11;
                var10 = '\n';
                var6[5] = var10;
                var19 = 'Regular price: ';
                var6[6] = var19;
                var6[7] = var18;
                var6[8] = var11;
                var6[9] = var10;
                var18 = 'Premium price: ';
                var6[10] = var18;
                var6[11] = var17;
                var6[12] = var11;
                var6[13] = var10;
                var10 = var7 != var12;
                var11 = 'No message';
                var7 = var11;
                if (!var10) {
                    _fun86854_ip = 844;
                    continue _fun86854
                }
            case 809:
                var10 = '';
                var7 = var11;
                if (!(var10 !== var12)) {
                    _fun86854_ip = 844;
                    continue _fun86854
                }
            case 820:
                var10 = global;
                var10 = var10.HermesInternal;
                var11 = var10.concat;
                var10 = 'Message: ';
                var7 = var11.bind(var10)(var12);
            case 844:
                var6[14] = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var10 = _closure1_slot12;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 23;
                var6 = var11[var5];
                var6 = var12.bind(var3)(var6);
                var7 = var6.Card;
                var6 = {};
                var11 = var11[var16];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Button;
                var11 = {};
                var16 = 'primary';
                var11.variant = var16;
                var16 = 'Send Gift';
                if (!var14) {
                    _fun86854_ip = 938;
                    continue _fun86854
                }
            case 932:
                var16 = 'Loading...';
            case 938:
                var11.text = var16;
                var11.onPress = var15;
                var11.disabled = var14;
                var11 = var10.bind(var3)(var12, var11);
                var6.children = var11;
                var6 = var10.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot11;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var5];
                var5 = var10.bind(var3)(var5);
                var6 = var5.Card;
                var5 = {};
                var8 = var12[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.Text;
                var8 = {
                    'variant': 'text-md/medium',
                    'color': 'always-white'
                };
                var11 = ['Select style: '];
                var11[1] = var13;
                var8.children = var11;
                var10 = var7.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot12;
                var10 = _closure1_slot1;
                var9 = 25;
                var9 = var12[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = function arg0() {
        _fun86872: for (var _fun86872_ip = 0;;) switch (_fun86872_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.selectedSkuId;
                var13 = var0.requestType;
                var9 = var0.giftRecipientId;
                var8 = var0.giftMessage;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                var _closure2_slot0 = var1;
                var5 = _closure1_slot5;
                var4 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 27;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getBasePurchaseFlowAnalyticsFields;
                    var0 = {};
                    var3 = true;
                    var0.isGift = var3;
                    var3 = _closure2_slot0;
                    var0.analyticsLoadId = var3;
                    var3 = new Array(0);
                    var0.analyticsLocations = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var4.bind(var5)(var1, var2);
                var1 = 'giftSku';
                if (!(var1 === var13)) {
                    _fun86872_ip = 121;
                    continue _fun86872
                }
            case 108:
                var1 = null;
                if (!(var1 != var10)) {
                    _fun86872_ip = 121;
                    continue _fun86872
                }
            case 114:
                if (!(var1 == var9)) {
                    _fun86872_ip = 272;
                    continue _fun86872
                }
            case 121:
                var4 = _closure1_slot11;
                var2 = _closure1_slot6;
                var1 = {};
                var16 = _closure1_slot12;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 22;
                var5 = var14[var11];
                var5 = var12.bind(var3)(var5);
                var15 = var5.Text;
                var5 = {
                    'variant': 'text-lg/bold',
                    'color': 'text-feedback-warning',
                    'children': 'Gift purchasing is the only supported feature on Android in this version.'
                };
                var15 = var16.bind(var3)(var15, var5);
                var5 = new Array(2);
                var5[0] = var15;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'text-md/normal',
                    'color': 'text-feedback-warning'
                };
                var14 = null;
                var15 = var14 != var13;
                var14 = 'none';
                if (!var15) {
                    _fun86872_ip = 232;
                    continue _fun86872
                }
            case 229:
                var14 = var13;
            case 232:
                var13 = ['Request type: '];
                var13[1] = var14;
                var11.children = var13;
                var11 = var4.bind(var3)(var12, var11);
                var5[1] = var11;
                var1.children = var5;
                var4 = var4.bind(var3)(var2, var1);
                _fun86872_ip = 370;
                continue _fun86872;
            case 272:
                var5 = _closure1_slot12;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 11;
                var1 = var11[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.NativeGiftContextProvider;
                var1 = {};
                var1.basePurchaseAnalytics = var7;
                var7 = function() {
                    var0 = undefined;
                    return var0;
                };
                var1.onClose = var7;
                var6 = function() {
                    var0 = undefined;
                    return var0;
                };
                var1.setCurrentAnalyticsStep = var6;
                var7 = _closure1_slot14;
                var6 = {};
                var6.selectedSkuId = var10;
                var6.giftRecipientId = var9;
                var6.giftMessage = var8;
                var6 = var5.bind(var3)(var7, var6);
                var1.children = var6;
                var4 = var5.bind(var3)(var2, var1);
            case 370:
                var2 = _closure1_slot12;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 28;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = _closure1_slot12;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 29;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.NativePaymentContextProvider;
        var0 = {};
        var5 = new Array(0);
        var0.skuIDs = var5;
        var5 = null;
        var0.activeSubscription = var5;
        var5 = _closure1_slot15;
        var4 = {};
        var7 = arg0;
        var8 = var4;
        var6 = copyDataProperties(var8, var7);
        var4 = var3.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1613, 3490, 660, 1615, 33, 3, 1568, 9402, 566, 6875, 4593, 1628, 7101, 11228, 3269, 3927, 4595, 4071, 3932, 4895, 4075, 9482, 491, 7097, 4926, 11229, 2]);