// modules/rpc/server/commands/store.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() { // Original name: getSubscriptionSkusViaListings, environment: var7
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: _getSubscriptionSkusViaListings, environment: var7
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun98509: for (var _fun98509_ip = 0;;) switch (_fun98509_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98509_ip = 127;
                            continue _fun98509
                        }
                    case 12:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var4;
                        var7 = undefined;
                        var _closure4_slot2 = var7;
                        var2 = var4.filter;
                        var1 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var1 = var0.type;
                            var0 = _closure1_slot9;
                            var0 = var0.SUBSCRIPTION_GROUP;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var6 = var2.bind(var4)(var1);
                        var1 = global;
                        var4 = var1.Promise;
                        var2 = var4.all;
                        var5 = var6.map;
                        var1 = function() { // Environment: var3
                            var3 = _closure1_slot4;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun98513: for (var _fun98513_ip = 0;;) switch (_fun98513_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun98513_ip = 75;
                                                continue _fun98513
                                            }
                                        case 7:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot3;
                                            var1 = 5;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var4 = var3.bind(var1)(var2);
                                            var3 = var4.fetchAllSubscriptionListingsDataForApplication;
                                            var2 = _closure4_slot0;
                                            var1 = arg0;
                                            var1 = var1.id;
                                            var1 = var3.bind(var4)(var2, var1);
                                            SaveGenerator(address = 63);
                                        case 61:
                                            return var1;
                                        case 63:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun98513_ip = 72;
                                                continue _fun98513
                                            }
                                        case 69:
                                            return var1;
                                        case 72:
                                            return var1;
                                        case 75:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure5_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                var3 = _closure5_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var1 = var1.bind(var7)();
                        var1 = var5.bind(var6)(var1);
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 90);
                    case 88:
                        return var1;
                    case 90:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun98509_ip = 124;
                            continue _fun98509
                        }
                    case 96:
                        var2 = new Array(0);
                        _closure4_slot2 = var2;
                        var4 = var1.forEach;
                        var3 = function(arg0) { // Environment: var3
                            _fun98515: for (var _fun98515_ip = 0;;) switch (_fun98515_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun98515_ip = 86;
                                        continue _fun98515
                                    }
                                case 11:
                                    var5 = var2.subscription_listings;
                                    if (!(var0 != var5)) {
                                        _fun98515_ip = 84;
                                        continue _fun98515
                                    }
                                case 21:
                                    var4 = new Array(0);
                                    var _closure5_slot0 = var4;
                                    var3 = var5.forEach;
                                    var2 = function(arg0) { // Environment: var1
                                        var1 = arg0;
                                        var _closure6_slot0 = var1;
                                        var2 = var1.subscription_plans;
                                        var1 = var2.forEach;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun98517: for (var _fun98517_ip = 0;;) switch (_fun98517_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var _closure7_slot0 = var4;
                                                    var1 = null;
                                                    var3 = var1 == var4;
                                                    var0 = undefined;
                                                    var5 = undefined;
                                                    if (var3) {
                                                        _fun98517_ip = 28;
                                                        continue _fun98517
                                                    }
                                                case 22:
                                                    var5 = var4.price;
                                                case 28:
                                                    var6 = _closure4_slot1;
                                                    var3 = var6.find;
                                                    var2 = function(arg0) { // Environment: var2
                                                        var0 = arg0;
                                                        var1 = var0.id;
                                                        var0 = _closure7_slot0;
                                                        var0 = var0.sku_id;
                                                        var0 = var1 === var0;
                                                        return var0;
                                                    };
                                                    var2 = var3.bind(var6)(var2);
                                                    if (!(var1 != var2)) {
                                                        _fun98517_ip = 187;
                                                        continue _fun98517
                                                    }
                                                case 59:
                                                    var3 = {};
                                                    var4 = var4.sku_id;
                                                    var3.id = var4;
                                                    var4 = var2.name;
                                                    var3.name = var4;
                                                    var4 = var2.type;
                                                    var3.type = var4;
                                                    var4 = {};
                                                    var4.amount = var5;
                                                    var5 = _closure1_slot7;
                                                    var5 = var5.USD;
                                                    var4.currency = var5;
                                                    var3.price = var4;
                                                    var4 = _closure6_slot0;
                                                    var5 = var4.application_id;
                                                    var3.application_id = var5;
                                                    var4 = var4.sku_flags;
                                                    var3.flags = var4;
                                                    var2 = var2.release_date;
                                                    var4 = var1 != var2;
                                                    var1 = null;
                                                    if (!var4) {
                                                        _fun98517_ip = 165;
                                                        continue _fun98517
                                                    }
                                                case 162:
                                                    var1 = var2;
                                                case 165:
                                                    var3.release_date = var1;
                                                    var2 = _closure5_slot0;
                                                    var1 = var2.push;
                                                    var1 = var1.bind(var2)(var3);
                                                case 187:
                                                    return var0;
                                            }
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var2 = var3.bind(var5)(var2);
                                    var3 = var4.filter;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun98519: for (var _fun98519_ip = 0;;) switch (_fun98519_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var1 = null;
                                                var3 = var1 == var2;
                                                var0 = undefined;
                                                if (var3) {
                                                    _fun98519_ip = 20;
                                                    continue _fun98519
                                                }
                                            case 14:
                                                var0 = var2.price;
                                            case 20:
                                                var0 = var1 != var0;
                                                return var0;
                                        }
                                    };
                                    var3 = var3.bind(var4)(var2);
                                    var2 = var3.forEach;
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = _closure4_slot2;
                                        var1 = var2.push;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var1 = undefined;
                                    return var1;
                                case 84:
                                    return var0;
                                case 86:
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var1)(var3);
                        return var2;
                    case 124:
                        return var1;
                    case 127:
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
    var14 = function() { // Original name: getSkusHandler, environment: var7
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var14;
    var0 = function() { // Original name: _getSkusHandler, environment: var7
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun98524: for (var _fun98524_ip = 0;;) switch (_fun98524_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98524_ip = 485;
                            continue _fun98524
                        }
                    case 12:
                        var1 = arg0;
                        var3 = var1.socket;
                        var5 = undefined;
                        SaveGenerator(address = 27);
                    case 25:
                        return var5;
                    case 27:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun98524_ip = 482;
                            continue _fun98524
                        }
                    case 36:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 6;
                        var4 = var8[var4];
                        var8 = var7.bind(var5)(var4);
                        var7 = var8.validateTransportType;
                        var4 = var3.transport;
                        var4 = var7.bind(var8)(var4);
                        var3 = var3.application;
                        var7 = var3.id;
                        var3 = null;
                        if (!(var3 != var7)) {
                            _fun98524_ip = 414;
                            continue _fun98524
                        }
                    case 95:
                        var4 = _closure1_slot6;
                        var3 = var4.inTestModeForApplication;
                        var3 = var3.bind(var4)(var7);
                        if (var3) {
                            _fun98524_ip = 301;
                            continue _fun98524
                        }
                    case 116:
                        var4 = _closure1_slot5;
                        var3 = var4.inDevModeForApplication;
                        var3 = var3.bind(var4)(var7);
                        if (var3) {
                            _fun98524_ip = 301;
                            continue _fun98524
                        }
                    case 137:
                        var4 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var3 = 9;
                        var3 = var8[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.fetchAllStoreListingsForApplication;
                        var3 = var3.bind(var4)(var7);
                        SaveGenerator(address = 172);
                    case 170:
                        return var3;
                    case 172:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun98524_ip = 298;
                            continue _fun98524
                        }
                    case 178:
                        var8 = var3.filter;
                        var4 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var0 = var0.sku;
                            var1 = var0.type;
                            var0 = _closure1_slot9;
                            var0 = var0.SUBSCRIPTION_GROUP;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var9 = var8.bind(var3)(var4);
                        var8 = var9.map;
                        var4 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var0 = var0.sku;
                            return var0;
                        };
                        var9 = var8.bind(var9)(var4);
                        var8 = var9.filter;
                        var4 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var1 = var0.price;
                            var0 = null;
                            var0 = var0 != var1;
                            return var0;
                        };
                        var13 = var8.bind(var9)(var4);
                        var8 = new Array(0);
                        var12 = 0;
                        var14 = var8;
                        var9 = arraySpread(var14, var13, var12);
                        var10 = _closure1_slot10;
                        var11 = var3.map;
                        var4 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var0 = var0.sku;
                            return var0;
                        };
                        var4 = var11.bind(var3)(var4);
                        var4 = var10.bind(var5)(var7, var4);
                        SaveGenerator(address = 273);
                    case 271:
                        return var4;
                    case 273:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 10);
                        if (var10) {
                            _fun98524_ip = 295;
                            continue _fun98524
                        }
                    case 279:
                        var14 = var8;
                        var13 = var4;
                        var12 = var9;
                        var9 = arraySpread(var14, var13, var12);
                        return var8;
                    case 295:
                        return var4;
                    case 298:
                        return var3;
                    case 301:
                        var4 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var3 = 8;
                        var3 = var8[var3];
                        var8 = var4.bind(var5)(var3);
                        var4 = var8.fetchTestSKUsForApplication;
                        var3 = false;
                        var3 = var4.bind(var8)(var7, var3);
                        SaveGenerator(address = 339);
                    case 337:
                        return var3;
                    case 339:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun98524_ip = 411;
                            continue _fun98524
                        }
                    case 345:
                        var4 = _closure1_slot10;
                        var4 = var4.bind(var5)(var7, var3);
                        SaveGenerator(address = 359);
                    case 357:
                        return var4;
                    case 359:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun98524_ip = 408;
                            continue _fun98524
                        }
                    case 365:
                        var7 = var3.filter;
                        var6 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var1 = var0.price;
                            var0 = null;
                            var0 = var0 != var1;
                            return var0;
                        };
                        var13 = var7.bind(var3)(var6);
                        var6 = new Array(0);
                        var12 = 0;
                        var14 = var6;
                        var12 = arraySpread(var14, var13, var12);
                        var14 = var6;
                        var13 = var4;
                        var7 = arraySpread(var14, var13, var12);
                        return var6;
                    case 408:
                        return var4;
                    case 411:
                        return var3;
                    case 414:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 7;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = {};
                        var2 = _closure1_slot8;
                        var2 = var2.INVALID_COMMAND;
                        var4.errorCode = var2;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var13 = 'No application.';
                        var15 = var3;
                        var14 = var4;
                        var2 = new var15[var5](var14, var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 482:
                        return var1;
                    case 485:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var13 = function(arg0) { // Original name: getEntitlementsHandler, environment: var7
        _fun98530: for (var _fun98530_ip = 0;;) switch (_fun98530_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.socket;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 6;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var4.bind(var3)(var2);
                var4 = var5.validateTransportType;
                var2 = var1.transport;
                var2 = var4.bind(var5)(var2);
                var1 = var1.application;
                var4 = var1.id;
                var1 = null;
                if (!(var1 != var4)) {
                    _fun98530_ip = 100;
                    continue _fun98530
                }
            case 67:
                var2 = _closure1_slot2;
                var5 = _closure1_slot3;
                var1 = 10;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.fetchUserEntitlementsForApplication;
                var1 = var1.bind(var2)(var4);
                return var1;
            case 100:
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 7;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot8;
                var0 = var0.INVALID_COMMAND;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = 'No application.';
                var8 = var1;
                var7 = var2;
                var0 = new var8[var3](var7, var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot14 = var13;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var12 = var1.RPC_AUTHENTICATED_SCOPE;
    var11 = var1.RPC_LOCAL_SCOPE;
    var9 = var1.RPC_SCOPE_CONFIG;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.CurrencyCodes;
    var _closure1_slot7 = var3;
    var3 = var1.RPCCommands;
    var6 = var1.RPCErrors;
    var _closure1_slot8 = var6;
    var1 = var1.SKUTypes;
    var _closure1_slot9 = var1;
    var1 = {};
    var10 = var3.GET_SKUS;
    var6 = {};
    var15 = var9.ANY;
    var8 = new Array(2);
    var8[0] = var12;
    var8[1] = var11;
    var6[var15] = var8;
    var8 = 'handler';
    var6[var8] = var14;
    var1[var10] = var6;
    var10 = var3.GET_ENTITLEMENTS;
    var6 = {};
    var15 = var9.ANY;
    var14 = new Array(2);
    var14[0] = var12;
    var14[1] = var11;
    var6[var15] = var14;
    var6[var8] = var13;
    var1[var10] = var6;
    var10 = var3.GET_SKUS_EMBEDDED;
    var6 = {};
    var14 = var9.ANY;
    var13 = new Array(2);
    var13[0] = var12;
    var13[1] = var11;
    var6[var14] = var13;
    var13 = function(arg0) { // Original name: handler, environment: var7
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun98533: for (var _fun98533_ip = 0;;) switch (_fun98533_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98533_ip = 51;
                            continue _fun98533
                        }
                    case 7:
                        var2 = {};
                        var4 = _closure1_slot12;
                        var3 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        SaveGenerator(address = 34);
                    case 32:
                        return var1;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun98533_ip = 48;
                            continue _fun98533
                        }
                    case 40:
                        var2.skus = var1;
                        return var2;
                    case 48:
                        return var1;
                    case 51:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var6[var8] = var13;
    var1[var10] = var6;
    var6 = var3.GET_ENTITLEMENTS_EMBEDDED;
    var3 = {};
    var10 = var9.ANY;
    var9 = new Array(2);
    var9[0] = var12;
    var9[1] = var11;
    var3[var10] = var9;
    var7 = function(arg0) { // Original name: handler, environment: var7
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun98536: for (var _fun98536_ip = 0;;) switch (_fun98536_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98536_ip = 51;
                            continue _fun98536
                        }
                    case 7:
                        var2 = {};
                        var4 = _closure1_slot14;
                        var3 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        SaveGenerator(address = 34);
                    case 32:
                        return var1;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun98536_ip = 48;
                            continue _fun98536
                        }
                    case 40:
                        var2.entitlements = var1;
                        return var2;
                    case 48:
                        return var1;
                    case 51:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3[var8] = var7;
    var1[var6] = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/store.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7181, 7182, 3315, 660, 12806, 12807, 7887, 7180, 12808, 4610, 2]);