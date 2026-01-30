// actions/EntitlementActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _fetchUserEntitlements, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun42565: for (var _fun42565_ip = 0;;) switch (_fun42565_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun42565_ip = 331;
                            continue _fun42565
                        }
                    case 13:
                        var4 = var1.withSku;
                        var2 = undefined;
                        if (!(var4 === var2)) {
                            _fun42565_ip = 29;
                            continue _fun42565
                        }
                    case 27:
                        var4 = false;
                    case 29:
                        var12 = var4;
                        var4 = var1.withApplication;
                        if (!(var4 === var2)) {
                            _fun42565_ip = 44;
                            continue _fun42565
                        }
                    case 42:
                        var4 = false;
                    case 44:
                        var11 = var4;
                        var4 = var1.excludeEnded;
                        if (!(var4 === var2)) {
                            _fun42565_ip = 59;
                            continue _fun42565
                        }
                    case 57:
                        var4 = true;
                    case 59:
                        var9 = var4;
                        var10 = var1.entitlementType;
                        SaveGenerator(address = 72);
                    case 70:
                        return var2;
                    case 72:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun42565_ip = 328;
                            continue _fun42565
                        }
                    case 81:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = 2;
                        var4 = var4[var5];
                        var7 = var6.bind(var2)(var4);
                        var6 = var7.dispatch;
                        var4 = {};
                        var8 = 'ENTITLEMENTS_FETCH_FOR_USER_START';
                        var4.type = var8;
                        var4 = var6.bind(var7)(var4);
                    case 126: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 3;
                        var4 = var7[var4];
                        var4 = var6.bind(var2)(var4);
                        var7 = var4.HTTP;
                        var6 = var7.get;
                        var4 = {};
                        var8 = _closure1_slot4;
                        var8 = var8.ENTITLEMENTS_FOR_USER;
                        var4.url = var8;
                        var8 = {};
                        var8.with_sku = var12;
                        var8.with_application = var11;
                        var8.entitlement_type = var10;
                        var10 = var9;
                        var8.exclude_ended = var10;
                        var4.query = var8;
                        var8 = true;
                        var4.rejectWithError = var8;
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address = 221);
                    case 219:
                        return var4;
                    case 221:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun42565_ip = 281;
                            continue _fun42565
                        }
                    case 227:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var5];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'ENTITLEMENTS_FETCH_FOR_USER_SUCCESS';
                        var6.type = var10;
                        var10 = var4.body;
                        var6.entitlements = var10;
                        var6.excludeEnded = var9;
                        var6 = var7.bind(var8)(var6);
                    case 279: // try_end0
                        _fun42565_ip = 325;
                        continue _fun42565;
                    case 281:
                        return var4;
                    case 284: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'ENTITLEMENTS_FETCH_FOR_USER_FAIL';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                    case 325:
                        return var2;
                    case 328:
                        return var1;
                    case 331:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function() { // Original name: _fetchGiftableEntitlements, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun42568: for (var _fun42568_ip = 0;;) switch (_fun42568_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun42568_ip = 216;
                            continue _fun42568
                        }
                    case 10:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 2;
                        var3 = var1[var4];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'ENTITLEMENTS_GIFTABLE_FETCH';
                        var3.type = var7;
                        var3 = var5.bind(var6)(var3);
                    case 57: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 4;
                        var3 = var6[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.httpGetWithCountryCodeQuery;
                        var3 = {};
                        var7 = _closure1_slot4;
                        var7 = var7.ENTITLEMENTS_GIFTABLE;
                        var3.url = var7;
                        var7 = true;
                        var3.rejectWithError = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 114);
                    case 112:
                        return var3;
                    case 114:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun42568_ip = 169;
                            continue _fun42568
                        }
                    case 120:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var8 = 'ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS';
                        var5.type = var8;
                        var8 = var3.body;
                        var5.entitlements = var8;
                        var5 = var6.bind(var7)(var5);
                    case 167: // try_end0
                        _fun42568_ip = 213;
                        continue _fun42568;
                    case 169:
                        return var3;
                    case 172: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'ENTITLEMENTS_GIFTABLE_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                    case 213:
                        return var1;
                    case 216:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/EntitlementActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: fetchUserEntitlementsForApplication, environment: var1
        _fun42569: for (var _fun42569_ip = 0;;) switch (_fun42569_ip) {
            case 0:
                var7 = arg0;
                var6 = arguments[1];
                var _closure2_slot0 = var7;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun42569_ip = 20;
                    continue _fun42569
                }
            case 18:
                var6 = true;
            case 20:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var8 = var2.bind(var3)(var1);
                var2 = var8.wait;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'ENTITLEMENT_FETCH_APPLICATION_START';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.applicationId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var2.bind(var8)(var1);
                var2 = _closure1_slot0;
                var1 = 3;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {};
                var5 = _closure1_slot4;
                var4 = var5.ENTITLEMENTS_FOR_APPLICATION;
                var4 = var4.bind(var5)(var7);
                var1.url = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var5 = {};
                var5.exclude_consumed = var6;
                var1.query = var5;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.applicationId = var4;
                    var4 = var0.body;
                    var1.entitlements = var4;
                    var1 = var2.bind(var3)(var1);
                    var0 = var0.body;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'ENTITLEMENT_FETCH_APPLICATION_FAIL';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.applicationId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.fetchUserEntitlementsForApplication = var3;
    var3 = function() { // Original name: fetchUserEntitlements, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchUserEntitlements = var3;
    var1 = function() { // Original name: fetchGiftableEntitlements, environment: var1
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchGiftableEntitlements = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 507, 3320, 2]);