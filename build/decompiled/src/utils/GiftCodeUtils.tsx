// utils/GiftCodeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var11;
    var6 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /[^A-Za-z0-9]/g;
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun28904: for (var _fun28904_ip = 0;;) switch (_fun28904_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arguments[1];
                        var1 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun28904_ip = 432;
                            continue _fun28904
                        }
                    case 16:
                        var10 = arg0;
                        var5 = undefined;
                        if (!(var3 === var5)) {
                            _fun28904_ip = 27;
                            continue _fun28904
                        }
                    case 25:
                        var3 = false;
                    case 27:
                        var9 = var3;
                        if (!(var1 === var5)) {
                            _fun28904_ip = 36;
                            continue _fun28904
                        }
                    case 34:
                        var1 = false;
                    case 36:
                        var8 = var1;
                        SaveGenerator(address = 43);
                    case 41:
                        return var5;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun28904_ip = 429;
                            continue _fun28904
                        }
                    case 52: // try_start_0
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var2 = var6[var2];
                        var6 = var3.bind(var5)(var2);
                        var3 = var6.httpGetWithCountryCodeQuery;
                        var2 = {};
                        var12 = _closure1_slot7;
                        var11 = var12.GIFT_CODE_RESOLVE;
                        var7 = var10;
                        var7 = var11.bind(var12)(var7);
                        var2.url = var7;
                        var7 = {};
                        var7.with_application = var9;
                        var7.with_subscription_plan = var8;
                        var2.query = var7;
                        var11 = true;
                        var2.oldFormErrors = var11;
                        var7 = false;
                        var2.rejectWithError = var7;
                        var2 = var3.bind(var6)(var2);
                        SaveGenerator(address = 146);
                    case 144:
                        return var2;
                    case 146:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun28904_ip = 329;
                            continue _fun28904
                        }
                    case 155:
                        var3 = var2.body;
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 9;
                        var6 = var8[var6];
                        var9 = var7.bind(var5)(var6);
                        var8 = var9.track;
                        var4 = _closure1_slot8;
                        var7 = var4.GIFT_CODE_RESOLVED;
                        var6 = {};
                        var6.resolved = var11;
                        var4 = var3.code;
                        var6.gift_code = var4;
                        var4 = var3.max_uses;
                        var6.gift_code_max_uses = var4;
                        var4 = var3.store_listing;
                        var4 = var4.sku;
                        var4 = var4.id;
                        var6.sku_id = var4;
                        var4 = var3.store_listing;
                        var4 = var4.sku;
                        var4 = var4.type;
                        var6.sku_type = var4;
                        var4 = var3.store_listing;
                        var4 = var4.sku;
                        var4 = var4.application_id;
                        var6.application_id = var4;
                        var4 = var3.store_listing;
                        var4 = var4.sku;
                        var4 = var4.name;
                        var6.store_title = var4;
                        var4 = {};
                        var4.flush = var11;
                        var4 = var8.bind(var9)(var7, var6, var4);
                    case 326: // try_end0
                        return var3;
                    case 329:
                        return var2;
                    case 332: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var7 = 9;
                        var7 = var6[var7];
                        var9 = var3.bind(var5)(var7);
                        var8 = var9.track;
                        var2 = _closure1_slot8;
                        var7 = var2.GIFT_CODE_RESOLVED;
                        var2 = {};
                        var11 = false;
                        var2.resolved = var11;
                        var2.gift_code = var10;
                        var2 = var8.bind(var9)(var7, var2);
                        var2 = 10;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var16 = var3;
                        var15 = var4;
                        var2 = new var16[var2](var15, var14);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 429:
                        return var1;
                    case 432:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var5 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var2 = var3.match;
        var5 = var2.bind(var3)(var4);
        var4 = var5.with;
        var3 = {};
        var2 = _closure1_slot14;
        var2 = var2.MONTH;
        var3.interval = var2;
        var2 = _closure1_slot13;
        var2 = var2.TIER_2;
        var3.premiumSubscriptionType = var2;
        var2 = function() { // Environment: var0
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 12;
            var0 = var9[var4];
            var7 = undefined;
            var0 = var8.bind(var7)(var0);
            var3 = var0.intl;
            var2 = var3.formatToPlainString;
            var0 = var9[var4];
            var0 = var8.bind(var7)(var0);
            var0 = var0.t;
            var1 = var0["vFfV+J"];
            var0 = {};
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.FPybU7;
            var4 = var5.bind(var6)(var4);
            var0.timeInterval = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var4.bind(var5)(var3, var2);
        var4 = var5.with;
        var3 = {};
        var2 = _closure1_slot14;
        var2 = var2.YEAR;
        var3.interval = var2;
        var2 = _closure1_slot13;
        var2 = var2.TIER_2;
        var3.premiumSubscriptionType = var2;
        var2 = function() { // Environment: var0
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 12;
            var0 = var9[var4];
            var7 = undefined;
            var0 = var8.bind(var7)(var0);
            var3 = var0.intl;
            var2 = var3.formatToPlainString;
            var0 = var9[var4];
            var0 = var8.bind(var7)(var0);
            var0 = var0.t;
            var1 = var0["vFfV+J"];
            var0 = {};
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.tfqrhj;
            var4 = var5.bind(var6)(var4);
            var0.timeInterval = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var4.bind(var5)(var3, var2);
        var4 = var5.with;
        var3 = {};
        var2 = _closure1_slot14;
        var2 = var2.MONTH;
        var3.interval = var2;
        var2 = _closure1_slot13;
        var2 = var2.TIER_1;
        var3.premiumSubscriptionType = var2;
        var2 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var0 = 12;
            var2 = var5[var0];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var3 = var2.intl;
            var2 = var3.formatToPlainString;
            var0 = var5[var0];
            var0 = var4.bind(var1)(var0);
            var0 = var0.t;
            var1 = var0.gjKbF4;
            var0 = {};
            var4 = _closure2_slot0;
            var4 = var4.intervalCount;
            var0.intervalCount = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4 = var4.bind(var5)(var3, var2);
        var3 = var4.with;
        var2 = {};
        var5 = _closure1_slot14;
        var5 = var5.YEAR;
        var2.interval = var5;
        var1 = _closure1_slot13;
        var1 = var1.TIER_1;
        var2.premiumSubscriptionType = var1;
        var1 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var0 = 12;
            var2 = var5[var0];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var3 = var2.intl;
            var2 = var3.formatToPlainString;
            var0 = var5[var0];
            var0 = var4.bind(var1)(var0);
            var0 = var0.t;
            var1 = var0.GIe7Bw;
            var0 = {};
            var4 = _closure2_slot0;
            var4 = var4.intervalCount;
            var0.intervalCount = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.otherwise;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var0 = 12;
            var1 = var5[var0];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.intl;
            var1 = var2.string;
            var0 = var5[var0];
            var0 = var4.bind(var3)(var0);
            var0 = var0.t;
            var0 = var0["5ayf7w"];
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot21 = var5;
    var4 = function arg0, arg1, arg2, arg3, arg4() {
        _fun28911: for (var _fun28911_ip = 0;;) switch (_fun28911_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var4 = undefined;
                var1 = arg2;
                var3 = undefined;
                if (var1) {
                    _fun28911_ip = 27;
                    continue _fun28911
                }
            case 16:
                var1 = arg3;
                var3 = undefined;
                if (var1) {
                    _fun28911_ip = 27;
                    continue _fun28911
                }
            case 24:
                var3 = var0;
            case 27:
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 12;
                var6 = var8[var0];
                var6 = var1.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.format;
                var0 = var8[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.t;
                var1 = var0["5zyz9y"];
                var0 = {};
                var8 = arg4;
                var0.onGoToLibrary = var8;
                var0 = var6.bind(var7)(var1, var0);
                var1 = null;
                if (!(var1 == var3)) {
                    _fun28911_ip = 139;
                    continue _fun28911
                }
            case 104:
                var3 = var1 == var5;
                var1 = null;
                if (var3) {
                    _fun28911_ip = 136;
                    continue _fun28911
                }
            case 113:
                var3 = _closure1_slot23;
                var6 = _closure1_slot6;
                var2 = var6.getCurrentUser;
                var2 = var2.bind(var6)();
                var1 = var3.bind(var4)(var5, var2);
            case 136:
                var0 = var1;
            case 139:
                return var0;
        }
    };
    var _closure1_slot22 = var4;
    var1 = function arg0, arg1() {
        _fun28912: for (var _fun28912_ip = 0;;) switch (_fun28912_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.code;
                var1 = _closure1_slot9;
                var1 = var1.INVALID_GIFT_SELF_REDEMPTION;
                if (!(var1 !== var2)) {
                    _fun28912_ip = 821;
                    continue _fun28912
                }
            case 28:
                var1 = _closure1_slot9;
                var1 = var1.INVALID_GIFT_REDEMPTION_EXHAUSTED;
                if (!(var1 !== var2)) {
                    _fun28912_ip = 760;
                    continue _fun28912
                }
            case 45:
                var1 = _closure1_slot9;
                var1 = var1.INVALID_GIFT_REDEMPTION_OWNED;
                if (!(var1 !== var2)) {
                    _fun28912_ip = 701;
                    continue _fun28912
                }
            case 62:
                var1 = _closure1_slot9;
                var1 = var1.UNKNOWN_GIFT_CODE;
                if (!(var1 !== var2)) {
                    _fun28912_ip = 640;
                    continue _fun28912
                }
            case 79:
                var1 = _closure1_slot9;
                var1 = var1.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE;
                if (!(var1 !== var2)) {
                    _fun28912_ip = 466;
                    continue _fun28912
                }
            case 96:
                var1 = _closure1_slot9;
                var1 = var1.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED;
                if (!(var1 !== var2)) {
                    _fun28912_ip = 405;
                    continue _fun28912
                }
            case 113:
                var1 = _closure1_slot9;
                var1 = var1.INVALID_GIFT_REDEMPTION_INVOICE_OPEN;
                if (!(var1 !== var2)) {
                    _fun28912_ip = 344;
                    continue _fun28912
                }
            case 130:
                var1 = _closure1_slot9;
                var1 = var1.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED;
                if (!(var1 !== var2)) {
                    _fun28912_ip = 283;
                    continue _fun28912
                }
            case 147:
                var1 = _closure1_slot9;
                var1 = var1.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE;
                if (!(var1 !== var2)) {
                    _fun28912_ip = 222;
                    continue _fun28912
                }
            case 161:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["s9+XlB"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 222:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.mXMmWE;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 283:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.ypuSd8;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 344:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["U26WX+"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 405:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["9i1J30"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 466:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var11 = 12;
                var1 = var7[var11];
                var10 = undefined;
                var1 = var6.bind(var10)(var1);
                var4 = var1.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var11];
                var1 = var6.bind(var10)(var1);
                var1 = var1.t;
                var2 = var1["4YTHKw"];
                var1 = {};
                var5 = 16;
                var5 = var7[var5];
                var8 = var6.bind(var10)(var5);
                var7 = var8.isPremiumExactly;
                var5 = _closure1_slot13;
                var6 = var5.TIER_2;
                var5 = arg1;
                var5 = var7.bind(var8)(var5, var6);
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var11];
                var7 = var9.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var11];
                var6 = var9.bind(var10)(var6);
                var6 = var6.t;
                if (var5) {
                    _fun28912_ip = 616;
                    continue _fun28912
                }
            case 603:
                var5 = var6.FSOz78;
                var5 = var7.bind(var8)(var5);
                _fun28912_ip = 627;
                continue _fun28912;
            case 616:
                var6 = var6.lG6a5x;
                var5 = var7.bind(var8)(var6);
            case 627:
                var1.planName = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 640:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.roztIr;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 701:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.mdLtb5;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 760:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Iw2TUW;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 821:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.wa9h7F;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot23 = var1;
    var7 = global;
    var12 = var7.Object;
    var9 = var12.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var12)(var2, var0, var8);
    var13 = 0;
    var8 = var11[var13];
    var0 = undefined;
    var8 = var14.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var12 = 1;
    var8 = var11[var12];
    var8 = var14.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var9 = 2;
    var8 = var11[var9];
    var8 = var14.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var17 = 3;
    var8 = var11[var17];
    var8 = var14.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var19 = 4;
    var8 = var11[var19];
    var8 = var10.bind(var0)(var8);
    var15 = var8.Endpoints;
    var _closure1_slot7 = var15;
    var15 = var8.AnalyticEvents;
    var _closure1_slot8 = var15;
    var15 = var8.AbortCodes;
    var _closure1_slot9 = var15;
    var15 = var8.GiftCodeModalStates;
    var _closure1_slot10 = var15;
    var15 = var8.MessageEmbedTypes;
    var _closure1_slot11 = var15;
    var8 = var8.MessageTypes;
    var _closure1_slot12 = var8;
    var16 = 5;
    var8 = var11[var16];
    var8 = var10.bind(var0)(var8);
    var15 = var8.PremiumTypes;
    var _closure1_slot13 = var15;
    var8 = var8.SubscriptionIntervalTypes;
    var _closure1_slot14 = var8;
    var18 = 6;
    var8 = var11[var18];
    var15 = var14.bind(var0)(var8);
    var14 = var15.escape;
    var8 = var7.window;
    var8 = var8.GLOBAL_ENV;
    var8 = var8.GIFT_CODE_HOST;
    var8 = var14.bind(var15)(var8);
    var14 = new Array(1);
    var14[0] = var8;
    var20 = ['discordapp.com/gifts', 'discord.com/gifts'];
    var15 = var20.map;
    var8 = function(arg0) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.escape;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var25 = var15.bind(var20)(var8);
    var26 = var14;
    var24 = var12;
    var8 = arraySpread(var26, var25, var24);
    var8 = var14.join;
    var15 = '|';
    var21 = var8.bind(var14)(var15);
    var20 = var7.RegExp;
    var8 = var7.HermesInternal;
    var14 = var8.concat;
    var23 = '(?: |^|https?://)(?:';
    var8 = ')/([a-z0-9-]+)';
    var26 = var14.bind(var23)(var21, var8);
    var14 = var20.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var20
        }
    });
    var21 = 'gi';
    var27 = var14;
    var25 = var21;
    var8 = new var27[var20](var26, var25, var24);
    var8 = var8 instanceof Object ? var8 : var14;
    var _closure1_slot15 = var8;
    var20 = ['discord.com/billing/promotions', 'promos.discord.gg'];
    var14 = var20.map;
    var8 = function(arg0) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.escape;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var25 = var14.bind(var20)(var8);
    var14 = new Array(0);
    var26 = var14;
    var24 = 0;
    var8 = arraySpread(var26, var25, var24);
    var8 = var14.join;
    var22 = var8.bind(var14)(var15);
    var20 = var7.RegExp;
    var8 = var7.HermesInternal;
    var14 = var8.concat;
    var8 = ')(/|(/)?\\?code=)([a-z0-9-]+)';
    var26 = var14.bind(var23)(var22, var8);
    var8 = var20.prototype;
    var27 = Object.create(var8, {
        constructor: {
            value: var20
        }
    });
    var25 = var21;
    var8 = new var27[var20](var26, var25, var24);
    var8 = function(arg0, arg1) { // Environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Array;
        var3 = undefined;
        var1 = arg1;
        var2 = var2.bind(var3)(var1);
        var1 = var2.fill;
        var2 = var1.bind(var2)(var3);
        var1 = var2.map;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = '[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{';
            var0 = '}';
            var0 = var2.bind(var1)(var3, var0);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '-?';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var20 = var8.bind(var0)(var19, var19);
    var14 = new Array(4);
    var14[0] = var20;
    var18 = var8.bind(var0)(var19, var18);
    var14[1] = var18;
    var8 = var8.bind(var0)(var16, var17);
    var14[2] = var8;
    var8 = '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}';
    var14[3] = var8;
    var8 = var14.join;
    var16 = var8.bind(var14)(var15);
    var14 = var7.RegExp;
    var7 = var7.HermesInternal;
    var15 = var7.concat;
    var8 = '^(WUMP-?)?(';
    var7 = ')$';
    var26 = var15.bind(var8)(var16, var7);
    var8 = var14.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var14
        }
    });
    var27 = var8;
    var7 = new var27[var14](var26, var25);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot16 = var7;
    var8 = {};
    var8.DEFAULT = var13;
    var7 = 'DEFAULT';
    var8[var13] = var7;
    var8.CUSTOM_STYLE = var12;
    var7 = 'CUSTOM_STYLE';
    var8[var12] = var7;
    var8.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = var9;
    var7 = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD';
    var8[var9] = var7;
    var _closure1_slot17 = var8;
    var7 = function arg0, arg1() {
        _fun28917: for (var _fun28917_ip = 0;;) switch (_fun28917_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 7;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.isMobile;
                if (var0) {
                    _fun28917_ip = 99;
                    continue _fun28917
                }
            case 34:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.isTablet;
                if (var0) {
                    _fun28917_ip = 99;
                    continue _fun28917
                }
            case 60:
                var2 = null;
                var0 = arg0;
                if (!(var2 == var0)) {
                    _fun28917_ip = 87;
                    continue _fun28917
                }
            case 69:
                var0 = arg1;
                if (var0) {
                    _fun28917_ip = 87;
                    continue _fun28917
                }
            case 75:
                var0 = _closure1_slot17;
                var0 = var0.CUSTOM_STYLE;
                _fun28917_ip = 97;
                continue _fun28917;
            case 87:
                var2 = _closure1_slot17;
                var0 = var2.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
            case 97:
                _fun28917_ip = 109;
                continue _fun28917;
            case 99:
                var1 = _closure1_slot17;
                var0 = var1.DEFAULT;
            case 109:
                return var0;
        }
    };
    var _closure1_slot18 = var7;
    var9 = 17;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'utils/GiftCodeUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var2.GiftExperience = var8;
    var2.getGiftExperience = var7;
    var7 = function(arg0) { // Environment: var3
        var3 = _closure1_slot18;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var0 = _closure1_slot17;
        var0 = var0.DEFAULT;
        var0 = var1 !== var0;
        return var0;
    };
    var2.shouldShowCustomGiftExperience = var7;
    var7 = function arg0() {
        _fun28919: for (var _fun28919_ip = 0;;) switch (_fun28919_ip) {
            case 0:
                var2 = arguments[1];
                var0 = arguments[2];
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun28919_ip = 14;
                    continue _fun28919
                }
            case 12:
                var2 = null;
            case 14:
                var1 = null;
                var3 = var1 != var2;
                var5 = '';
                var4 = var5;
                if (!var3) {
                    _fun28919_ip = 33;
                    continue _fun28919
                }
            case 30:
                var4 = var2;
            case 33:
                var1 = var1 != var0;
                var3 = var5;
                if (!var1) {
                    _fun28919_ip = 46;
                    continue _fun28919
                }
            case 43:
                var3 = var0;
            case 46:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var10 = arg0;
                var0 = ':';
                var11 = var5;
                var9 = var0;
                var8 = var4;
                var7 = var0;
                var6 = var3;
                var0 = var11[var2](var10, var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2.makeComboId = var7;
    var7 = function arg0() {
        _fun28920: for (var _fun28920_ip = 0;;) switch (_fun28920_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = ':';
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var3 = undefined;
                var0 = 3;
                var2 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var1 = var2[var0];
                var0 = 1;
                var6 = var2[var0];
                var0 = 2;
                var4 = var2[var0];
                var0 = {};
                var0.skuId = var1;
                var2 = null;
                var5 = '';
                var1 = null;
                if (!(var5 !== var6)) {
                    _fun28920_ip = 77;
                    continue _fun28920
                }
            case 74:
                var1 = var6;
            case 77:
                var0.subscriptionPlanId = var1;
                var1 = undefined;
                if (!(var5 !== var4)) {
                    _fun28920_ip = 116;
                    continue _fun28920
                }
            case 88:
                var2 = var2 != var4;
                var1 = undefined;
                if (!var2) {
                    _fun28920_ip = 116;
                    continue _fun28920
                }
            case 97:
                var2 = global;
                var3 = var2.Number;
                var2 = var3.parseInt;
                var1 = var2.bind(var3)(var4);
            case 116:
                var0.giftStyle = var1;
                return var0;
        }
    };
    var2.parseComboId = var7;
    var2.cleanCode = var6;
    var6 = function(arg0) { // Environment: var3
        _fun28921: for (var _fun28921_ip = 0;;) switch (_fun28921_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                var0 = var4 == var3;
                var5 = undefined;
                if (var0) {
                    _fun28921_ip = 19;
                    continue _fun28921
                }
            case 14:
                var5 = var3.type;
            case 19:
                var0 = _closure1_slot12;
                var0 = var0.CUSTOM_GIFT;
                var0 = var5 === var0;
                if (!var0) {
                    _fun28921_ip = 75;
                    continue _fun28921
                }
            case 39:
                var5 = var4 == var3;
                var6 = undefined;
                if (var5) {
                    _fun28921_ip = 68;
                    continue _fun28921
                }
            case 48:
                var5 = var3.embeds;
                var7 = var4 == var5;
                var6 = undefined;
                if (var7) {
                    _fun28921_ip = 68;
                    continue _fun28921
                }
            case 63:
                var6 = var5.length;
            case 68:
                var5 = 1;
                var0 = var5 === var6;
            case 75:
                if (!var0) {
                    _fun28921_ip = 118;
                    continue _fun28921
                }
            case 78:
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun28921_ip = 104;
                    continue _fun28921
                }
            case 87:
                var4 = var3.embeds;
                var3 = 0;
                var3 = var4[var3];
                var2 = var3.type;
            case 104:
                var1 = _closure1_slot11;
                var1 = var1.GIFT;
                var0 = var2 === var1;
            case 118:
                return var0;
        }
    };
    var2.isGiftCodeEmbed = var6;
    var6 = function(arg0) { // Environment: var3
        _fun28922: for (var _fun28922_ip = 0;;) switch (_fun28922_ip) {
            case 0:
                var9 = arg0;
                var8 = null;
                if (!(var8 != var9)) {
                    _fun28922_ip = 151;
                    continue _fun28922
                }
            case 12:
                var0 = global;
                var1 = var0.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var13 = var2;
                var1 = new var13[var1](var12);
                var2 = var1 instanceof Object ? var1 : var2;
                var3 = _closure1_slot15;
                var1 = var3.exec;
                var3 = var1.bind(var3)(var9);
                if (!(var8 != var3)) {
                    _fun28922_ip = 133;
                    continue _fun28922
                }
            case 62:
                var1 = var2.size;
                var6 = 3;
                var5 = 1;
                var4 = undefined;
                if (!(var1 < var6)) {
                    _fun28922_ip = 133;
                    continue _fun28922
                }
            case 79:
                var10 = var2.add;
                var11 = _closure1_slot19;
                var1 = var3[var5];
                var1 = var11.bind(var4)(var1);
                var1 = var10.bind(var2)(var1);
                var10 = _closure1_slot15;
                var1 = var10.exec;
                var10 = var1.bind(var10)(var9);
                if (!(var8 != var10)) {
                    _fun28922_ip = 133;
                    continue _fun28922
                }
            case 121:
                var1 = var2.size;
                var3 = var10;
                if (var1 < var6) {
                    _fun28922_ip = 79;
                    continue _fun28922
                }
            case 133:
                var1 = var0.Array;
                var0 = var1.from;
                var0 = var0.bind(var1)(var2);
                return var0;
            case 151:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.findGiftCodes = var6;
    var6 = function() {
        _fun28923: for (var _fun28923_ip = 0;;) switch (_fun28923_ip) {
            case 0:
                var6 = arguments[0];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun28923_ip = 13;
                    continue _fun28923
                }
            case 9:
                var6 = '';
            case 13:
                var0 = global;
                var1 = var0.window;
                var1 = var1.GLOBAL_ENV;
                var1 = var1.GIFT_CODE_HOST;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun28923_ip = 75;
                    continue _fun28923
                }
            case 39:
                var2 = var0.location;
                var5 = var2.host;
                var2 = var0.HermesInternal;
                var3 = var2.concat;
                var2 = '/gifts/';
                var4 = var3.bind(var2)(var6);
                _fun28923_ip = 98;
                continue _fun28923;
            case 75:
                var2 = var0.HermesInternal;
                var3 = var2.concat;
                var2 = '/';
                var4 = var3.bind(var2)(var6);
                var5 = var1;
            case 98:
                var1 = var0.location;
                var10 = var1.protocol;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var11 = '';
                var9 = '//';
                var8 = var5;
                var7 = var4;
                var0 = var11[var2](var10, var9, var8, var7, var6);
                return var0;
        }
    };
    var2.getGiftCodeURL = var6;
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.resolveGiftCode = var6;
    var6 = function arg0, arg1() {
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 9;
        var2 = var7[var0];
        var0 = undefined;
        var4 = var6.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.GIFT_CODE_COPIED;
        var1 = {};
        var5 = 11;
        var5 = var7[var5];
        var7 = var6.bind(var0)(var5);
        var6 = arg1;
        var5 = false;
        var9 = var7.bind(var0)(var6, var5, var5);
        var10 = var1;
        var5 = copyDataProperties(var10, var9);
        var5 = arg0;
        var9 = var5.analyticsData;
        var10 = var1;
        var5 = copyDataProperties(var10, var9);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackGiftCodeCopy = var6;
    var6 = function arg0, arg1, arg2() {
        _fun28926: for (var _fun28926_ip = 0;;) switch (_fun28926_ip) {
            case 0:
                var2 = arg0;
                var1 = arg2;
                var6 = var1.error;
                var3 = var1.accepted;
                var0 = var1.accepting;
                var4 = var1.opened;
                var5 = var1.isCustomGift;
                var1 = null;
                if (!(var1 == var6)) {
                    _fun28926_ip = 130;
                    continue _fun28926
                }
            case 41:
                if (var3) {
                    _fun28926_ip = 51;
                    continue _fun28926
                }
            case 44:
                if (var0) {
                    _fun28926_ip = 51;
                    continue _fun28926
                }
            case 47:
                if (!(var1 == var2)) {
                    _fun28926_ip = 130;
                    continue _fun28926
                }
            case 51:
                if (!var5) {
                    _fun28926_ip = 78;
                    continue _fun28926
                }
            case 54:
                if (var4) {
                    _fun28926_ip = 78;
                    continue _fun28926
                }
            case 57:
                if (var3) {
                    _fun28926_ip = 78;
                    continue _fun28926
                }
            case 60:
                if (var0) {
                    _fun28926_ip = 78;
                    continue _fun28926
                }
            case 63:
                var0 = _closure1_slot10;
                var0 = var0.OPEN;
                _fun28926_ip = 128;
                continue _fun28926;
            case 78:
                if (!var3) {
                    _fun28926_ip = 97;
                    continue _fun28926
                }
            case 81:
                var3 = arg1;
                var3 = var3.isSubscription;
                if (var3) {
                    _fun28926_ip = 112;
                    continue _fun28926
                }
            case 93:
                if (!(var1 == var2)) {
                    _fun28926_ip = 112;
                    continue _fun28926
                }
            case 97:
                var1 = _closure1_slot10;
                var1 = var1.CONFIRM;
                _fun28926_ip = 125;
                continue _fun28926;
            case 112:
                var2 = _closure1_slot10;
                var1 = var2.SUCCESS;
            case 125:
                var0 = var1;
            case 128:
                _fun28926_ip = 143;
                continue _fun28926;
            case 130:
                var1 = _closure1_slot10;
                var0 = var1.ERROR;
            case 143:
                return var0;
        }
    };
    var2.getStep = var6;
    var6 = function arg0, arg1, arg2() {
        _fun28927: for (var _fun28927_ip = 0;;) switch (_fun28927_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var6 = arg2;
                var2 = _closure1_slot10;
                var2 = var2.ERROR;
                if (!(var2 !== var3)) {
                    _fun28927_ip = 286;
                    continue _fun28927
                }
            case 29:
                var2 = _closure1_slot10;
                var2 = var2.SUCCESS;
                if (!(var2 !== var3)) {
                    _fun28927_ip = 173;
                    continue _fun28927
                }
            case 46:
                var2 = _closure1_slot10;
                var2 = var2.CONFIRM;
                var2 = var1.isSubscription;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 12;
                var5 = var9[var3];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var7 = var5.intl;
                if (var2) {
                    _fun28927_ip = 126;
                    continue _fun28927
                }
            case 92:
                var5 = var7.string;
                var2 = var9[var3];
                var2 = var8.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.RmamAI;
                var2 = var5.bind(var7)(var2);
                _fun28927_ip = 171;
                continue _fun28927;
            case 126:
                var5 = var7.formatToPlainString;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3["2VN4N9"];
                var3 = {};
                var8 = var6.name;
                var3.skuName = var8;
                var2 = var5.bind(var7)(var4, var3);
            case 171:
                return var2;
            case 173:
                var1 = var1.isSubscription;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var4 = var8[var2];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var5 = var4.intl;
                if (var1) {
                    _fun28927_ip = 241;
                    continue _fun28927
                }
            case 209:
                var4 = var5.string;
                var1 = var8[var2];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["+BNMcF"];
                var1 = var4.bind(var5)(var1);
                _fun28927_ip = 284;
                continue _fun28927;
            case 241:
                var4 = var5.formatToPlainString;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2["1C2BG/"];
                var2 = {};
                var6 = var6.name;
                var2.skuName = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 284:
                return var1;
            case 286:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var2 = var5[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToMarkdownString;
                var0 = var5[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.JUvC0s;
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getHeaderText = var6;
    var6 = function arg0, arg1, arg2() {
        _fun28928: for (var _fun28928_ip = 0;;) switch (_fun28928_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var0 = arg2;
                var1 = var0.isCustomGift;
                var3 = _closure1_slot10;
                var3 = var3.ERROR;
                if (!(var3 !== var4)) {
                    _fun28928_ip = 451;
                    continue _fun28928
                }
            case 35:
                var3 = _closure1_slot10;
                var3 = var3.SUCCESS;
                if (!(var3 !== var4)) {
                    _fun28928_ip = 390;
                    continue _fun28928
                }
            case 52:
                var3 = _closure1_slot10;
                var3 = var3.OPEN;
                if (!(var3 !== var4)) {
                    _fun28928_ip = 329;
                    continue _fun28928
                }
            case 69:
                var3 = _closure1_slot10;
                var3 = var3.CONFIRM;
                var3 = null;
                if (!(var3 != var1)) {
                    _fun28928_ip = 91;
                    continue _fun28928
                }
            case 85:
                if (var1) {
                    _fun28928_ip = 268;
                    continue _fun28928
                }
            case 91:
                var1 = var2.giftStyle;
                if (!(var3 == var1)) {
                    _fun28928_ip = 184;
                    continue _fun28928
                }
            case 101:
                var1 = var2.isSubscription;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 12;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                if (var1) {
                    _fun28928_ip = 169;
                    continue _fun28928
                }
            case 156:
                var1 = var3.OgpR0c;
                var1 = var4.bind(var5)(var1);
                _fun28928_ip = 182;
                continue _fun28928;
            case 169:
                var3 = var3.wQ1FHy;
                var1 = var4.bind(var5)(var3);
            case 182:
                _fun28928_ip = 266;
                continue _fun28928;
            case 184:
                var2 = var2.isClaimed;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 12;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                if (var2) {
                    _fun28928_ip = 252;
                    continue _fun28928
                }
            case 239:
                var2 = var3["2BWscv"];
                var2 = var4.bind(var5)(var2);
                _fun28928_ip = 263;
                continue _fun28928;
            case 252:
                var3 = var3.OgpR0c;
                var2 = var4.bind(var5)(var3);
            case 263:
                var1 = var2;
            case 266:
                _fun28928_ip = 327;
                continue _fun28928;
            case 268:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 12;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.n6I6k4;
                var1 = var3.bind(var4)(var2);
            case 327:
                return var1;
            case 329:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.F8ktci;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 390:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.zW87EM;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 451:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.w19zb6;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getButtonText = var6;
    var2.getSubscriptionGiftSuccessText = var5;
    var5 = function arg0, arg1() {
        _fun28929: for (var _fun28929_ip = 0;;) switch (_fun28929_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 12;
                var4 = var9[var0];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var10 = var4.intl;
                var7 = var10.string;
                var4 = var9[var0];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.FPybU7;
                var4 = var7.bind(var10)(var4);
                var _closure2_slot1 = var4;
                var4 = var9[var0];
                var4 = var8.bind(var6)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var0 = var9[var0];
                var0 = var8.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.tfqrhj;
                var0 = var4.bind(var7)(var0);
                var _closure2_slot2 = var0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun28929_ip = 381;
                    continue _fun28929
                }
            case 133:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var3 = var3.bind(var6)(var0);
                var0 = var3.match;
                var7 = var0.bind(var3)(var5);
                var4 = var7.with;
                var3 = {};
                var0 = _closure1_slot14;
                var0 = var0.MONTH;
                var3.interval = var0;
                var0 = _closure1_slot13;
                var0 = var0.TIER_2;
                var3.premiumSubscriptionType = var0;
                var0 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0["408Xt7"];
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.timeInterval = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7 = var4.bind(var7)(var3, var0);
                var4 = var7.with;
                var3 = {};
                var0 = _closure1_slot14;
                var0 = var0.YEAR;
                var3.interval = var0;
                var0 = _closure1_slot13;
                var0 = var0.TIER_2;
                var3.premiumSubscriptionType = var0;
                var0 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0["408Xt7"];
                    var0 = {};
                    var4 = _closure2_slot2;
                    var0.timeInterval = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7 = var4.bind(var7)(var3, var0);
                var4 = var7.with;
                var3 = {};
                var0 = _closure1_slot14;
                var0 = var0.MONTH;
                var3.interval = var0;
                var0 = _closure1_slot13;
                var0 = var0.TIER_0;
                var3.premiumSubscriptionType = var0;
                var0 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.e9l3JU;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.timeInterval = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7 = var4.bind(var7)(var3, var0);
                var4 = var7.with;
                var3 = {};
                var0 = _closure1_slot14;
                var0 = var0.YEAR;
                var3.interval = var0;
                var0 = _closure1_slot13;
                var0 = var0.TIER_0;
                var3.premiumSubscriptionType = var0;
                var0 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.e9l3JU;
                    var0 = {};
                    var4 = _closure2_slot2;
                    var0.timeInterval = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var4.bind(var7)(var3, var0);
                var3 = var4.otherwise;
                var0 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.hrnGng;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                _fun28929_ip = 624;
                continue _fun28929;
            case 381:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 13;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.match;
                var6 = var3.bind(var4)(var5);
                var5 = var6.with;
                var4 = {};
                var3 = _closure1_slot14;
                var3 = var3.MONTH;
                var4.interval = var3;
                var3 = _closure1_slot13;
                var3 = var3.TIER_2;
                var4.premiumSubscriptionType = var3;
                var3 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0["0UR0u4"];
                    var0 = {};
                    var5 = _closure2_slot0;
                    var0.sender = var5;
                    var4 = _closure2_slot1;
                    var0.timeInterval = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.with;
                var4 = {};
                var3 = _closure1_slot14;
                var3 = var3.YEAR;
                var4.interval = var3;
                var3 = _closure1_slot13;
                var3 = var3.TIER_2;
                var4.premiumSubscriptionType = var3;
                var3 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0["0UR0u4"];
                    var0 = {};
                    var5 = _closure2_slot0;
                    var0.sender = var5;
                    var4 = _closure2_slot2;
                    var0.timeInterval = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.with;
                var4 = {};
                var3 = _closure1_slot14;
                var3 = var3.MONTH;
                var4.interval = var3;
                var3 = _closure1_slot13;
                var3 = var3.TIER_0;
                var4.premiumSubscriptionType = var3;
                var3 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.sXpBon;
                    var0 = {};
                    var5 = _closure2_slot0;
                    var0.sender = var5;
                    var4 = _closure2_slot1;
                    var0.timeInterval = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var4, var3);
                var4 = var5.with;
                var3 = {};
                var6 = _closure1_slot14;
                var6 = var6.YEAR;
                var3.interval = var6;
                var2 = _closure1_slot13;
                var2 = var2.TIER_0;
                var3.premiumSubscriptionType = var2;
                var2 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.sXpBon;
                    var0 = {};
                    var5 = _closure2_slot0;
                    var0.sender = var5;
                    var4 = _closure2_slot2;
                    var0.timeInterval = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var3, var2);
                var2 = var3.otherwise;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.td2m3W;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.sender = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 624:
                return var0;
        }
    };
    var2.getSubscriptionGiftStartHeaderText = var5;
    var5 = function arg0() {
        _fun28940: for (var _fun28940_ip = 0;;) switch (_fun28940_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.step;
                var12 = var0.sku;
                var6 = var0.libraryApplication;
                var5 = var0.error;
                var4 = var0.accepted;
                var3 = var0.accepting;
                var2 = var0.onGoToLibrary;
                var9 = var0.subscriptionPlan;
                var1 = undefined;
                if (!(var9 === var1)) {
                    _fun28940_ip = 58;
                    continue _fun28940
                }
            case 56:
                var9 = null;
            case 58:
                var7 = _closure1_slot10;
                var7 = var7.ERROR;
                if (!(var7 !== var8)) {
                    _fun28940_ip = 421;
                    continue _fun28940
                }
            case 78:
                var7 = _closure1_slot10;
                var7 = var7.SUCCESS;
                if (!(var7 !== var8)) {
                    _fun28940_ip = 332;
                    continue _fun28940
                }
            case 95:
                var7 = _closure1_slot10;
                var7 = var7.CONFIRM;
                var7 = null;
                if (!(var7 == var9)) {
                    _fun28940_ip = 183;
                    continue _fun28940
                }
            case 111:
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 12;
                var10 = var13[var7];
                var10 = var8.bind(var1)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var7 = var13[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.t;
                var8 = var7.l6Ea4Z;
                var7 = {};
                var13 = var12.name;
                var7.skuName = var13;
                var7 = var10.bind(var11)(var8, var7);
                return var7;
            case 183:
                var8 = var9.interval;
                var7 = _closure1_slot14;
                var7 = var7.MONTH;
                if (!(var8 !== var7)) {
                    _fun28940_ip = 238;
                    continue _fun28940
                }
            case 203:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 12;
                var7 = var10[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.t;
                var11 = var7.d8rUdy;
                _fun28940_ip = 271;
                continue _fun28940;
            case 238:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 12;
                var7 = var10[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.t;
                var11 = var7.P9eTKt;
            case 271:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 12;
                var7 = var10[var7];
                var7 = var8.bind(var1)(var7);
                var10 = var7.intl;
                var8 = var10.format;
                var7 = {};
                var13 = var12.name;
                var7.skuName = var13;
                var13 = var9.intervalCount;
                var7.intervalCount = var13;
                var7 = var8.bind(var10)(var11, var7);
                return var7;
            case 332:
                var7 = null;
                if (!(var7 == var9)) {
                    _fun28940_ip = 410;
                    continue _fun28940
                }
            case 338:
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 12;
                var10 = var13[var7];
                var10 = var8.bind(var1)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var7 = var13[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.t;
                var8 = var7["3CPsbo"];
                var7 = {};
                var12 = var12.name;
                var7.skuName = var12;
                var7 = var10.bind(var11)(var8, var7);
                _fun28940_ip = 419;
                continue _fun28940;
            case 410:
                var8 = _closure1_slot21;
                var7 = var8.bind(var1)(var9);
            case 419:
                return var7;
            case 421:
                var0 = _closure1_slot22;
                var19 = undefined;
                var18 = var6;
                var17 = var5;
                var16 = var4;
                var15 = var3;
                var14 = var2;
                var0 = var19[var0](var18, var17, var16, var15, var14, var13);
                return var0;
        }
    };
    var2.getBodyText = var5;
    var2.getErrorMessage = var4;
    var4 = function arg0, arg1, arg2() {
        _fun28941: for (var _fun28941_ip = 0;;) switch (_fun28941_ip) {
            case 0:
                var0 = arg0;
                var2 = arg2;
                var _closure2_slot0 = var2;
                var2 = arg1;
                var4 = var2.applicationId;
                var _closure2_slot1 = var4;
                var3 = var0.length;
                var2 = 0;
                if (!(!(var3 > var2))) {
                    _fun28941_ip = 46;
                    continue _fun28941
                }
            case 35:
                var3 = new Array(1);
                var3[0] = var4;
                var0 = var3;
            case 46:
                var3 = var0.map;
                var1 = function(arg0) { // Environment: var1
                    var4 = _closure2_slot0;
                    var3 = var4.getLibraryApplication;
                    var2 = _closure2_slot1;
                    var1 = arg0;
                    var0 = true;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var4 = var3.bind(var0)(var1);
                var3 = var4.filter;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.isNotNullish;
                var1 = var3.bind(var4)(var1);
                var4 = var1.length;
                var3 = var0.length;
                var0 = null;
                if (!(var4 === var3)) {
                    _fun28941_ip = 122;
                    continue _fun28941
                }
            case 118:
                var0 = var1[var2];
            case 122:
                return var0;
        }
    };
    var2.firstLibraryApplicationForGiftCode = var4;
    var4 = function arg0() {
        _fun28943: for (var _fun28943_ip = 0;;) switch (_fun28943_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.trim;
                var2 = var0.bind(var1)();
                var1 = var2.split;
                var0 = '/';
                var1 = var1.bind(var2)(var0);
                var0 = var1.pop;
                var3 = var0.bind(var1)();
                var2 = var3.match;
                var0 = _closure1_slot16;
                var4 = var2.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var4)) {
                    _fun28943_ip = 158;
                    continue _fun28943
                }
            case 61:
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = 3;
                var2 = var3.bind(var2)(var4, var1);
                var1 = 0;
                var1 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var1 = 2;
                var5 = var2[var1];
                var2 = var0 == var5;
                var1 = null;
                if (var2) {
                    _fun28943_ip = 156;
                    continue _fun28943
                }
            case 105:
                var4 = var5.replace;
                var2 = global;
                var7 = var2.RegExp;
                var2 = var7.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = '-';
                var8 = 'g';
                var10 = var3;
                var2 = new var10[var7](var9, var8, var7);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = '';
                var1 = var4.bind(var5)(var3, var2);
            case 156:
                return var1;
            case 158:
                return var0;
        }
    };
    var2.processGiftCodeInput = var4;
    var4 = function(arg0, arg1) { // Environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 15;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun28945: for (var _fun28945_ip = 0;;) switch (_fun28945_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun28945_ip = 68;
                        continue _fun28945
                    }
                case 13:
                    var2 = _closure2_slot1;
                    if (!var2) {
                        _fun28945_ip = 68;
                        continue _fun28945
                    }
                case 20:
                    var3 = _closure1_slot5;
                    var2 = var3.getGiftCode;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var3 = var0 == var2;
                    var1 = null;
                    if (var3) {
                        _fun28945_ip = 66;
                        continue _fun28945
                    }
                case 53:
                    var3 = '';
                    var1 = null;
                    if (!(var3 !== var2)) {
                        _fun28945_ip = 66;
                        continue _fun28945
                    }
                case 63:
                    var1 = var2;
                case 66:
                    return var1;
                case 68:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useGetGiftCode = var4;
    var3 = function(arg0) { // Environment: var3
        _fun28946: for (var _fun28946_ip = 0;;) switch (_fun28946_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.step;
                var8 = var0.giftCode;
                var11 = var0.customMessage;
                var7 = var0.emojiName;
                var6 = var0.soundId;
                var5 = var0.productLine;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot8;
                var2 = var1.GIFT_ACCEPT_STEP;
                var1 = {};
                var1.to_step = var9;
                var9 = var8.giftStyle;
                var12 = null;
                var9 = var12 != var9;
                var1.has_custom_message = var9;
                var9 = var8.giftStyle;
                var9 = var12 != var9;
                if (!var9) {
                    _fun28946_ip = 177;
                    continue _fun28946
                }
            case 118:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 12;
                var12 = var15[var10];
                var12 = var14.bind(var0)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var15[var10];
                var10 = var14.bind(var0)(var10);
                var10 = var10.t;
                var10 = var10.ZkOo1U;
                var10 = var12.bind(var13)(var10);
                var9 = var11 !== var10;
            case 177:
                var1.is_custom_message_edited = var9;
                var9 = var8.giftStyle;
                var1.gift_style = var9;
                var8 = var8.code;
                var1.gift_code = var8;
                var1.emoji_name = var7;
                var1.sound_id = var6;
                var1.product_line = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackStep = var3;
    var2.getGiftCodeRedeemError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 3349, 1621, 660, 1623, 3326, 3360, 3361, 795, 3351, 3453, 1234, 3459, 1304, 566, 3109, 2]);