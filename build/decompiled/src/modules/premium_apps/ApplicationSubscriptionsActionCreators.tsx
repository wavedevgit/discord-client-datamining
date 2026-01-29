// modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun98538: for (var _fun98538_ip = 0;;) switch (_fun98538_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun98538_ip = 45;
                    continue _fun98538
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun98538_ip = 54;
                    continue _fun98538
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun98538_ip = 344;
                    continue _fun98538
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun98538_ip = 322;
                    continue _fun98538
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun98538_ip = 282;
                    continue _fun98538
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun98538_ip = 269;
                    continue _fun98538
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun98538_ip = 162;
                    continue _fun98538
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun98538_ip = 178;
                    continue _fun98538
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun98538_ip = 248;
                    continue _fun98538
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun98538_ip = 248;
                    continue _fun98538
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun98538_ip = 233;
                    continue _fun98538
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun98538_ip = 246;
                    continue _fun98538
                }
            case 233:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun98538_ip = 264;
                continue _fun98538;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun98538_ip = 282;
                continue _fun98538;
            case 269:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun98538_ip = 322;
                    continue _fun98538
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun98538_ip = 329;
                    continue _fun98538
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun98539: for (var _fun98539_ip = 0;;) switch (_fun98539_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun98539_ip = 56;
                                continue _fun98539
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun98539_ip = 67;
                            continue _fun98539;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun98540: for (var _fun98540_ip = 0;;) switch (_fun98540_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun98540_ip = 23;
                    continue _fun98540
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun98540_ip = 33;
                    continue _fun98540
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun98540_ip = 70;
                    continue _fun98540
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun98540_ip = 55;
                    continue _fun98540
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: transformSubscriptionListingToSku, environment: var3
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var3 = _closure1_slot5;
        var3 = var3.SUBSCRIPTION;
        var0.type = var3;
        var3 = var1.application_id;
        var0.application_id = var3;
        var2 = _closure1_slot4;
        var2 = var2.APPLICATION;
        var0.product_line = var2;
        var2 = var1.name;
        var0.name = var2;
        var2 = '';
        var0.summary = var2;
        var3 = var1.description;
        var0.description = var3;
        var3 = var1.sku_flags;
        var0.flags = var3;
        var3 = new Array(0);
        var0.manifests = var3;
        var3 = new Array(0);
        var0.available_regions = var3;
        var0.legal_notice = var2;
        var1 = var1.soft_deleted;
        var0.deleted = var1;
        var1 = 0;
        var0.price_tier = var1;
        var1 = false;
        var0.show_age_gate = var1;
        var0.restricted = var1;
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0) { // Original name: transformSubscriptionListingToStoreListing, environment: var3
        _fun98542: for (var _fun98542_ip = 0;;) switch (_fun98542_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.id;
                var0.id = var2;
                var3 = _closure1_slot8;
                var2 = undefined;
                var2 = var3.bind(var2)(var1);
                var0.sku = var2;
                var2 = var1.description;
                var0.summary = var2;
                var2 = var1.description;
                var0.description = var2;
                var2 = var1.store_listing_benefits;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun98542_ip = 70;
                    continue _fun98542
                }
            case 66:
                var2 = new Array(0);
            case 70:
                var0.benefits = var2;
                var2 = var1.image_asset;
                var0.thumbnail = var2;
                var1 = var1.published;
                var0.published = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: dispatchCompat, environment: var3
        _fun98543: for (var _fun98543_ip = 0;;) switch (_fun98543_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 2;
                var4 = var1[var5];
                var0 = undefined;
                var8 = var3.bind(var0)(var4);
                var7 = var8.dispatch;
                var4 = {};
                var9 = 'SKUS_FETCH_SUCCESS';
                var4.type = var9;
                var10 = var2.map;
                var9 = _closure1_slot8;
                var9 = var10.bind(var2)(var9);
                var4.skus = var9;
                var4 = var7.bind(var8)(var4);
                var1 = var1[var5];
                var4 = var3.bind(var0)(var1);
                var3 = var4.dispatch;
                var1 = {};
                var7 = 'STORE_LISTINGS_FETCH_SUCCESS';
                var1.type = var7;
                var8 = var2.map;
                var7 = _closure1_slot9;
                var7 = var8.bind(var2)(var7);
                var1.storeListings = var7;
                var1 = var3.bind(var4)(var1);
                var1 = _closure1_slot6;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
                if (var1) {
                    _fun98543_ip = 218;
                    continue _fun98543
                }
            case 144:
                var9 = var2.value;
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var8 = var7.bind(var0)(var1);
                var7 = var8.dispatch;
                var1 = {};
                var1.type = var3;
                var10 = var9.id;
                var1.skuId = var10;
                var9 = var9.subscription_plans;
                var1.subscriptionPlans = var9;
                var1 = var7.bind(var8)(var1);
                var7 = var4.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun98543_ip = 144;
                    continue _fun98543
                }
            case 218:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: _fetchAllSubscriptionListingsDataForApplication, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun98546: for (var _fun98546_ip = 0;;) switch (_fun98546_ip) {
                    case 0:
                        StartGenerator();
                        var12 = arg0;
                        var11 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98546_ip = 268;
                            continue _fun98546
                        }
                    case 16:
                        var5 = var12;
                        var3 = var11;
                        var1 = undefined;
                        var9 = undefined;
                        var6 = undefined;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 2;
                        var7 = var7[var4];
                        var10 = var8.bind(var1)(var7);
                        var8 = var10.dispatch;
                        var7 = {};
                        var13 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS';
                        var7.type = var13;
                        var7.applicationId = var12;
                        var7.groupListingId = var11;
                        var7 = var8.bind(var10)(var7);
                    case 82: // try_start_0
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 3;
                        var7 = var10[var7];
                        var10 = var8.bind(var1)(var7);
                        var8 = var10.getApplicationSubscriptionGroupListingsForApplication;
                        var7 = var5;
                        var3 = var8.bind(var10)(var7, var3);
                        SaveGenerator(address = 121);
                    case 119:
                        return var3;
                    case 121:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun98546_ip = 217;
                            continue _fun98546
                        }
                    case 127:
                        var6 = var3;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var4];
                        var10 = var8.bind(var1)(var7);
                        var8 = var10.dispatch;
                        var7 = {};
                        var11 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS';
                        var7.type = var11;
                        var11 = var5;
                        var7.applicationId = var11;
                        var7.groupListing = var3;
                        var7 = var8.bind(var10)(var7);
                        var8 = _closure1_slot10;
                        var10 = var3.subscription_listings;
                        var9 = var10;
                        var7 = null;
                        if (!(var7 == var10)) {
                            _fun98546_ip = 206;
                            continue _fun98546
                        }
                    case 200:
                        var7 = new Array(0);
                        _fun98546_ip = 209;
                        continue _fun98546;
                    case 206:
                        var7 = var9;
                    case 209:
                        var7 = var8.bind(var1)(var7);
                    case 214: // try_end0
                        return var6;
                    case 217:
                        return var3;
                    case 220: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE';
                        var2.type = var6;
                        var2.applicationId = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 268:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: _fetchEntitlementsForGuild, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun98549: for (var _fun98549_ip = 0;;) switch (_fun98549_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98549_ip = 213;
                            continue _fun98549
                        }
                    case 13:
                        var5 = var8;
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = 2;
                        var3 = var1[var4];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var9 = 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS';
                        var3.type = var9;
                        var3.guildId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 67: // try_start_0
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 3;
                        var3 = var7[var3];
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.getEntitlementsForGuild;
                        var3 = var5;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 105);
                    case 103:
                        return var3;
                    case 105:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun98549_ip = 162;
                            continue _fun98549
                        }
                    case 111:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS';
                        var6.type = var9;
                        var9 = var5;
                        var6.guildId = var9;
                        var6.entitlements = var3;
                        var6 = var7.bind(var8)(var6);
                    case 160: // try_end0
                        _fun98549_ip = 210;
                        continue _fun98549;
                    case 162:
                        return var3;
                    case 165: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE';
                        var2.type = var6;
                        var2.guildId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 210:
                        return var1;
                    case 213:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var1 = function() { // Original name: fetchSubscriptionListingForPlan, environment: var3
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var1;
    var0 = function() { // Original name: _fetchSubscriptionListingForPlan, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun98553: for (var _fun98553_ip = 0;;) switch (_fun98553_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun98553_ip = 374;
                            continue _fun98553
                        }
                    case 18:
                        var2 = var3;
                        var _closure4_slot0 = var3;
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun98553_ip = 33;
                            continue _fun98553
                        }
                    case 31:
                        var1 = 0;
                    case 33:
                        var6 = var1;
                        var10 = undefined;
                        var9 = undefined;
                        SaveGenerator(address = 44);
                    case 42:
                        return var3;
                    case 44:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun98553_ip = 371;
                            continue _fun98553
                        }
                    case 53:
                        var11 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var13 = 2;
                        var7 = var7[var13];
                        var12 = var11.bind(var3)(var7);
                        var11 = var12.dispatch;
                        var7 = {};
                        var14 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN';
                        var7.type = var14;
                        var14 = var2;
                        var7.planId = var14;
                        var7 = var11.bind(var12)(var7);
                    case 106: // try_start_0
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var7 = 3;
                        var7 = var12[var7];
                        var12 = var11.bind(var3)(var7);
                        var11 = var12.getSubscriptionGroupForSubscriptionPlan;
                        var7 = var2;
                        var7 = var11.bind(var12)(var7);
                        SaveGenerator(address = 144);
                    case 142:
                        return var7;
                    case 144:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 11);
                        if (var11) {
                            _fun98553_ip = 284;
                            continue _fun98553
                        }
                    case 153:
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var13];
                        var13 = var12.bind(var3)(var11);
                        var12 = var13.dispatch;
                        var11 = {};
                        var14 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS';
                        var11.type = var14;
                        var11.groupListing = var7;
                        var11 = var12.bind(var13)(var11);
                        var12 = var7.subscription_listings;
                        var10 = var12;
                        var11 = null;
                        if (!(var11 == var12)) {
                            _fun98553_ip = 218;
                            continue _fun98553
                        }
                    case 212:
                        var13 = new Array(0);
                        _fun98553_ip = 221;
                        continue _fun98553;
                    case 218:
                        var13 = var10;
                    case 221:
                        var9 = var13;
                        var10 = global;
                        var11 = var10.Promise;
                        var10 = var11.all;
                        var12 = var13.map;
                        var8 = function(arg0) { // Environment: var8
                            _fun98554: for (var _fun98554_ip = 0;;) switch (_fun98554_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.subscription_plans;
                                    var1 = 0;
                                    var1 = var2[var1];
                                    var2 = var1.id;
                                    var1 = _closure4_slot0;
                                    if (!(var2 !== var1)) {
                                        _fun98554_ip = 35;
                                        continue _fun98554
                                    }
                                case 31:
                                    var1 = undefined;
                                    return var1;
                                case 35:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 4;
                                    var1 = var3[var1];
                                    var4 = undefined;
                                    var3 = var2.bind(var4)(var1);
                                    var2 = var3.fetchSubscriptionPlansForSKU;
                                    var8 = var0.id;
                                    var5 = true;
                                    var9 = var3;
                                    var7 = undefined;
                                    var6 = undefined;
                                    var0 = var9[var2](var8, var7, var6, var5, var4);
                                    return var0;
                            }
                        };
                        var8 = var12.bind(var13)(var8);
                        var8 = var10.bind(var11)(var8);
                        SaveGenerator(address = 264);
                    case 262:
                        return var8;
                    case 264:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 10);
                        if (var10) {
                            _fun98553_ip = 281;
                            continue _fun98553
                        }
                    case 270:
                        var10 = _closure1_slot10;
                        var9 = var10.bind(var3)(var9);
                    case 279: // try_end0
                        _fun98553_ip = 365;
                        continue _fun98553;
                    case 281:
                        return var8;
                    case 284:
                        return var7;
                    case 287: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var5 = var8;
                        var7 = 'status';
                        var7 = var7 in var8;
                        if (!var7) {
                            _fun98553_ip = 331;
                            continue _fun98553
                        }
                    case 303:
                        var7 = var5;
                        var8 = var7.status;
                        var7 = 429;
                        if (!(var7 === var8)) {
                            _fun98553_ip = 331;
                            continue _fun98553
                        }
                    case 321:
                        var8 = var6;
                        var7 = 10;
                        if (!(!(var8 < var7))) {
                            _fun98553_ip = 333;
                            continue _fun98553
                        }
                    case 331:
                        throw var5;
                    case 333:
                        var5 = _closure1_slot13;
                        var4 = var2;
                        var2 = var6;
                        var2 = var2 + 1;
                        var6 = var2;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address = 359);
                    case 357:
                        return var2;
                    case 359:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun98553_ip = 368;
                            continue _fun98553
                        }
                    case 365:
                        return var3;
                    case 368:
                        return var2;
                    case 371:
                        return var1;
                    case 374:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.SKUProductLines;
    var _closure1_slot4 = var7;
    var4 = var4.SKUTypes;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: fetchAllSubscriptionListingsDataForApplication, environment: var3
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchAllSubscriptionListingsDataForApplication = var4;
    var4 = function() { // Original name: fetchEntitlementsForGuild, environment: var3
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchEntitlementsForGuild = var4;
    var3 = function(arg0) { // Original name: dismissApplicationSubscriptionExpirationNotice, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.dismissApplicationSubscriptionExpirationNotice = var3;
    var2.fetchSubscriptionListingForPlan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 7928, 5584, 2]);