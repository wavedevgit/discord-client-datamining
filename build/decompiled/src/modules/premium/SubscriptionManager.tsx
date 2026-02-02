// modules/premium/SubscriptionManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun114201: for (var _fun114201_ip = 0;;) switch (_fun114201_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun114201_ip = 76;
                continue _fun114201;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot12 = var7;
    var3 = var3.PremiumTypes;
    var _closure1_slot13 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun114205: for (var _fun114205_ip = 0;;) switch (_fun114205_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var5, var4);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var4);
                    var4 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114205_ip = 86;
                        continue _fun114205
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun114205_ip = 120;
                    continue _fun114205;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var4.bind(var3)(var5, var0);
                    var _closure3_slot0 = var0;
                    var4 = {};
                    var5 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.maybeFetchSubscriptions;
                        var0 = var0.bind(var1)();
                        var0 = var1.maybeFetchCountryCode;
                        var0 = var0.bind(var1)();
                        var0 = var1.maybeFetchMostRecentSubscription;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var4.POST_CONNECTION_OPEN = var5;
                    var0.actions = var4;
                    var2 = _closure1_slot2;
                    var4 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun114208: for (var _fun114208_ip = 0;;) switch (_fun114208_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun114208_ip = 257;
                                        continue _fun114208
                                    }
                                case 10:
                                    var3 = _closure1_slot8;
                                    var1 = var3.getCurrentUser;
                                    var6 = var1.bind(var3)();
                                    var1 = _closure1_slot9;
                                    var4 = var1.isSubscriptionFetching;
                                    var5 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var1 = 11;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var5.bind(var1)(var3);
                                    var3 = var5.isPremium;
                                    var3 = var3.bind(var5)(var6);
                                    if (!var3) {
                                        _fun114208_ip = 254;
                                        continue _fun114208
                                    }
                                case 75:
                                    var5 = _closure1_slot10;
                                    var3 = var5.hasFetchedSubscriptions;
                                    var3 = var3.bind(var5)();
                                    if (var3) {
                                        _fun114208_ip = 95;
                                        continue _fun114208
                                    }
                                case 92:
                                    var3 = var4;
                                case 95:
                                    if (var3) {
                                        _fun114208_ip = 141;
                                        continue _fun114208
                                    }
                                case 98:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot1;
                                    var3 = 12;
                                    var3 = var5[var3];
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.fetchSubscriptions;
                                    var3 = var3.bind(var4)();
                                    SaveGenerator(address = 132);
                                case 130:
                                    return var3;
                                case 132:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                    if (!var4) {
                                        _fun114208_ip = 141;
                                        continue _fun114208
                                    }
                                case 138:
                                    return var3;
                                case 141:
                                    var4 = _closure1_slot10;
                                    var3 = var4.getPremiumSubscription;
                                    var5 = var3.bind(var4)();
                                    var4 = null;
                                    var6 = var4 == var5;
                                    var3 = undefined;
                                    if (var6) {
                                        _fun114208_ip = 172;
                                        continue _fun114208
                                    }
                                case 166:
                                    var3 = var5.paymentSourceId;
                                case 172:
                                    var3 = var4 != var3;
                                    if (var3) {
                                        _fun114208_ip = 203;
                                        continue _fun114208
                                    }
                                case 179:
                                    var4 = _closure1_slot11;
                                    var6 = var4.applicationIdsFetched;
                                    var5 = var6.has;
                                    var4 = _closure1_slot12;
                                    var3 = var5.bind(var6)(var4);
                                case 203:
                                    if (var3) {
                                        _fun114208_ip = 254;
                                        continue _fun114208
                                    }
                                case 206:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot1;
                                    var3 = 13;
                                    var3 = var5[var3];
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.fetchUserEntitlementsForApplication;
                                    var2 = _closure1_slot12;
                                    var2 = var3.bind(var4)(var2);
                                    SaveGenerator(address = 245);
                                case 243:
                                    return var2;
                                case 245:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                    if (!var3) {
                                        _fun114208_ip = 254;
                                        continue _fun114208
                                    }
                                case 251:
                                    return var2;
                                case 254:
                                    return var1;
                                case 257:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var4 = var2.bind(var3)(var4);
                    var0.maybeFetchSubscriptions = var4;
                    var4 = function() { // Environment: var1
                        _fun114209: for (var _fun114209_ip = 0;;) switch (_fun114209_ip) {
                            case 0:
                                var2 = _closure1_slot8;
                                var0 = var2.getCurrentUser;
                                var5 = var0.bind(var2)();
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 11;
                                var2 = var2[var0];
                                var0 = undefined;
                                var7 = var3.bind(var0)(var2);
                                var6 = var7.isPremiumAtMost;
                                var2 = null;
                                var4 = var2 == var5;
                                var3 = undefined;
                                if (var4) {
                                    _fun114209_ip = 61;
                                    continue _fun114209
                                }
                            case 55:
                                var3 = var5.premiumType;
                            case 61:
                                var8 = var2 != var3;
                                var4 = null;
                                if (!var8) {
                                    _fun114209_ip = 73;
                                    continue _fun114209
                                }
                            case 70:
                                var4 = var3;
                            case 73:
                                var3 = _closure1_slot13;
                                var3 = var3.TIER_1;
                                var4 = var6.bind(var7)(var4, var3);
                                var6 = _closure1_slot10;
                                var3 = var6.getIsFetchingMostRecentSubscription;
                                var3 = var3.bind(var6)();
                                var2 = var2 != var5;
                                if (!var2) {
                                    _fun114209_ip = 115;
                                    continue _fun114209
                                }
                            case 112:
                                var2 = var4;
                            case 115:
                                if (!var2) {
                                    _fun114209_ip = 128;
                                    continue _fun114209
                                }
                            case 118:
                                var4 = var5.hasHadPremium;
                                var2 = var4.bind(var5)();
                            case 128:
                                if (!var2) {
                                    _fun114209_ip = 134;
                                    continue _fun114209
                                }
                            case 131:
                                var2 = !var3;
                            case 134:
                                if (!var2) {
                                    _fun114209_ip = 167;
                                    continue _fun114209
                                }
                            case 137:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 12;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.fetchMostRecentSubscription;
                                var1 = var1.bind(var2)();
                            case 167:
                                return var0;
                        }
                    };
                    var0.maybeFetchMostRecentSubscription = var4;
                    var4 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun114211: for (var _fun114211_ip = 0;;) switch (_fun114211_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun114211_ip = 108;
                                        continue _fun114211
                                    }
                                case 7:
                                    var2 = _closure1_slot8;
                                    var1 = var2.getCurrentUser;
                                    var5 = var1.bind(var2)();
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var1 = 11;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var1);
                                    var1 = var4.isPremium;
                                    var1 = var1.bind(var4)(var5);
                                    if (!var1) {
                                        _fun114211_ip = 72;
                                        continue _fun114211
                                    }
                                case 59:
                                    var3 = _closure1_slot9;
                                    var3 = var3.ipCountryCodeLoaded;
                                    var1 = !var3;
                                case 72:
                                    if (!var1) {
                                        _fun114211_ip = 102;
                                        continue _fun114211
                                    }
                                case 75:
                                    var3 = _closure3_slot0;
                                    var1 = var3.fetchCountryCode;
                                    var1 = var1.bind(var3)();
                                    SaveGenerator(address = 96);
                                case 94:
                                    return var1;
                                case 96:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun114211_ip = 105;
                                        continue _fun114211
                                    }
                                case 102:
                                    return var2;
                                case 105:
                                    return var1;
                                case 108:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var4 = var2.bind(var3)(var4);
                    var0.maybeFetchCountryCode = var4;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun114213: for (var _fun114213_ip = 0;;) switch (_fun114213_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun114213_ip = 114;
                                        continue _fun114213
                                    }
                                case 7:
                                    var4 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var5 = 12;
                                    var1 = var1[var5];
                                    var3 = undefined;
                                    var4 = var4.bind(var3)(var1);
                                    var1 = var4.fetchIpCountryCode;
                                    var1 = var1.bind(var4)();
                                    SaveGenerator(address = 46);
                                case 44:
                                    return var1;
                                case 46:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun114213_ip = 111;
                                        continue _fun114213
                                    }
                                case 52:
                                    var4 = _closure1_slot9;
                                    var6 = var4.ipCountryCode;
                                    var4 = null;
                                    if (!(var4 != var6)) {
                                        _fun114213_ip = 105;
                                        continue _fun114213
                                    }
                                case 68:
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var2 = var2[var5];
                                    var4 = var4.bind(var3)(var2);
                                    var2 = var4.fetchPaymentSources;
                                    var2 = var2.bind(var4)();
                                    SaveGenerator(address = 99);
                                case 97:
                                    return var2;
                                case 99:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun114213_ip = 108;
                                        continue _fun114213
                                    }
                                case 105:
                                    return var3;
                                case 108:
                                    return var2;
                                case 111:
                                    return var1;
                                case 114:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.fetchCountryCode = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/SubscriptionManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7, 6, 15, 17, 18, 1613, 3072, 3078, 4618, 1615, 1628, 3404, 4619, 4265, 2]);