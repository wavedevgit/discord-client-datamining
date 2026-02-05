// actions/GiftCodeActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun56695: for (var _fun56695_ip = 0;;) switch (_fun56695_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arguments[1];
                        var1 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun56695_ip = 449;
                            continue _fun56695
                        }
                    case 16:
                        var6 = arg0;
                        var5 = undefined;
                        if (!(var7 === var5)) {
                            _fun56695_ip = 27;
                            continue _fun56695
                        }
                    case 25:
                        var7 = false;
                    case 27:
                        var4 = var7;
                        if (!(var1 === var5)) {
                            _fun56695_ip = 36;
                            continue _fun56695
                        }
                    case 34:
                        var1 = false;
                    case 36:
                        var2 = var1;
                        var9 = undefined;
                        SaveGenerator(address = 45);
                    case 43:
                        return var5;
                    case 45:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun56695_ip = 446;
                            continue _fun56695
                        }
                    case 54:
                        var10 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var7 = 4;
                        var8 = var8[var7];
                        var11 = var10.bind(var5)(var8);
                        var10 = var11.dispatch;
                        var8 = {};
                        var12 = 'GIFT_CODE_RESOLVE';
                        var8.type = var12;
                        var12 = var6;
                        var8.code = var12;
                        var8 = var10.bind(var11)(var8);
                    case 104: // try_start_1
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 5;
                        var8 = var11[var8];
                        var11 = var10.bind(var5)(var8);
                        var10 = var11.resolveGiftCode;
                        var8 = var6;
                        var2 = var10.bind(var11)(var8, var4, var2);
                        SaveGenerator(address = 144);
                    case 142:
                        return var2;
                    case 144:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun56695_ip = 392;
                            continue _fun56695
                        }
                    case 153:
                        var9 = var2;
                        var4 = var2.application_id;
                        var8 = null;
                        if (!(var8 != var4)) {
                            _fun56695_ip = 270;
                            continue _fun56695
                        }
                    case 168:
                        var4 = var9;
                        var10 = var4.application_id;
                        var4 = _closure1_slot8;
                        if (!(var10 !== var4)) {
                            _fun56695_ip = 270;
                            continue _fun56695
                        }
                    case 185:
                        var11 = _closure1_slot4;
                        var10 = var11.getApplication;
                        var4 = var9;
                        var4 = var4.application_id;
                        var4 = var10.bind(var11)(var4);
                        if (!(var8 == var4)) {
                            _fun56695_ip = 270;
                            continue _fun56695
                        }
                    case 213: // try_start_0
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = 6;
                        var4 = var10[var4];
                        var10 = var8.bind(var5)(var4);
                        var8 = var10.fetchApplication;
                        var4 = var9;
                        var4 = var4.application_id;
                        var4 = var8.bind(var10)(var4);
                        SaveGenerator(address = 257);
                    case 255:
                        return var4;
                    case 257:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun56695_ip = 265;
                            continue _fun56695
                        }
                    case 263: // try_end0
                        _fun56695_ip = 270;
                        continue _fun56695;
                    case 265: // try_end1
                        return var4;
                    case 268: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 4);
                    case 270:
                        var4 = var9;
                        var8 = var4.application_id;
                        var4 = _closure1_slot5;
                        if (!(var8 === var4)) {
                            _fun56695_ip = 337;
                            continue _fun56695
                        }
                    case 287:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 7;
                        var4 = var10[var4];
                        var10 = var8.bind(var5)(var4);
                        var8 = var10.fetchCollectiblesProduct;
                        var4 = var9;
                        var4 = var4.sku_id;
                        var4 = var8.bind(var10)(var4);
                        SaveGenerator(address = 331);
                    case 329:
                        return var4;
                    case 331:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun56695_ip = 389;
                            continue _fun56695
                        }
                    case 337:
                        var10 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var7];
                        var11 = var10.bind(var5)(var8);
                        var10 = var11.dispatch;
                        var8 = {};
                        var12 = 'GIFT_CODE_RESOLVE_SUCCESS';
                        var8.type = var12;
                        var8.giftCode = var9;
                        var8 = var10.bind(var11)(var8);
                        var8 = {};
                        var8.giftCode = var9;
                    case 386: // try_end2
                        return var8;
                    case 389:
                        return var4;
                    case 392:
                        return var2;
                    case 395: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GIFT_CODE_RESOLVE_FAILURE';
                        var3.type = var7;
                        var3.code = var6;
                        var3.error = var2;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 446:
                        return var1;
                    case 449:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot5 = var7;
    var7 = var3.Endpoints;
    var _closure1_slot6 = var7;
    var3 = var3.RPCCommands;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot8 = var3;
    var3 = {};
    var3.resolveGiftCode = var1;
    var7 = function arg0() {
        _fun56696: for (var _fun56696_ip = 0;;) switch (_fun56696_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun56696_ip = 20;
                    continue _fun56696
                }
            case 18:
                var2 = null;
            case 20:
                var _closure2_slot1 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun56698: for (var _fun56698_ip = 0;;) switch (_fun56698_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun56698_ip = 309;
                                    continue _fun56698
                                }
                            case 10:
                                var5 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var4 = 4;
                                var3 = var1[var4];
                                var1 = undefined;
                                var7 = var5.bind(var1)(var3);
                                var6 = var7.dispatch;
                                var3 = {};
                                var5 = 'GIFT_CODES_FETCH';
                                var3.type = var5;
                                var8 = _closure2_slot0;
                                var3.skuId = var8;
                                var8 = _closure2_slot1;
                                var3.subscriptionPlanId = var8;
                                var3 = var6.bind(var7)(var3);
                            case 78: // try_start_0
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 8;
                                var3 = var7[var3];
                                var3 = var6.bind(var1)(var3);
                                var7 = var3.HTTP;
                                var6 = var7.get;
                                var3 = {};
                                var8 = _closure1_slot6;
                                var8 = var8.USER_GIFT_CODES;
                                var3.url = var8;
                                var8 = {};
                                var9 = _closure2_slot0;
                                var8.sku_id = var9;
                                var9 = _closure2_slot1;
                                var8.subscription_plan_id = var9;
                                var3.query = var8;
                                var8 = true;
                                var3.oldFormErrors = var8;
                                var3.rejectWithError = var8;
                                var3 = var6.bind(var7)(var3);
                                SaveGenerator(address = 169);
                            case 167:
                                return var3;
                            case 169:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun56698_ip = 244;
                                    continue _fun56698
                                }
                            case 175:
                                var7 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var6 = var6[var4];
                                var8 = var7.bind(var1)(var6);
                                var7 = var8.dispatch;
                                var6 = {};
                                var9 = 'GIFT_CODES_FETCH_SUCCESS';
                                var6.type = var9;
                                var9 = var3.body;
                                var6.giftCodes = var9;
                                var9 = _closure2_slot0;
                                var6.skuId = var9;
                                var9 = _closure2_slot1;
                                var6.subscriptionPlanId = var9;
                                var6 = var7.bind(var8)(var6);
                            case 242: // try_end0
                                _fun56698_ip = 306;
                                continue _fun56698;
                            case 244:
                                return var3;
                            case 247: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var2 = var2[var4];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var6 = 'GIFT_CODES_FETCH_FAILURE';
                                var2.type = var6;
                                var6 = _closure2_slot0;
                                var2.skuId = var6;
                                var5 = _closure2_slot1;
                                var2.subscriptionPlanId = var5;
                                var2 = var3.bind(var4)(var2);
                            case 306:
                                return var1;
                            case 309:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3.fetchUserGiftCodesForSKU = var7;
    var7 = function arg0() {
        _fun56699: for (var _fun56699_ip = 0;;) switch (_fun56699_ip) {
            case 0:
                var3 = arguments[1];
                var2 = arguments[2];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun56699_ip = 23;
                    continue _fun56699
                }
            case 21:
                var3 = null;
            case 23:
                var _closure2_slot1 = var3;
                if (!(var2 === var1)) {
                    _fun56699_ip = 33;
                    continue _fun56699
                }
            case 31:
                var2 = null;
            case 33:
                var _closure2_slot2 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun56701: for (var _fun56701_ip = 0;;) switch (_fun56701_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun56701_ip = 306;
                                    continue _fun56701
                                }
                            case 10:
                                var5 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var4 = 4;
                                var3 = var1[var4];
                                var1 = undefined;
                                var7 = var5.bind(var1)(var3);
                                var6 = var7.dispatch;
                                var3 = {};
                                var5 = 'GIFT_CODE_CREATE_START';
                                var3.type = var5;
                                var8 = _closure2_slot0;
                                var3.skuId = var8;
                                var8 = _closure2_slot1;
                                var3.subscriptionPlanId = var8;
                                var3 = var6.bind(var7)(var3);
                            case 78: // try_start_0
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 8;
                                var3 = var7[var3];
                                var3 = var6.bind(var1)(var3);
                                var7 = var3.HTTP;
                                var6 = var7.post;
                                var3 = {};
                                var8 = _closure1_slot6;
                                var8 = var8.USER_GIFT_CODE_CREATE;
                                var3.url = var8;
                                var8 = {};
                                var9 = _closure2_slot0;
                                var8.sku_id = var9;
                                var9 = _closure2_slot1;
                                var8.subscription_plan_id = var9;
                                var9 = _closure2_slot2;
                                var8.gift_style = var9;
                                var3.body = var8;
                                var8 = true;
                                var3.oldFormErrors = var8;
                                var3.rejectWithError = var8;
                                var3 = var6.bind(var7)(var3);
                                SaveGenerator(address = 178);
                            case 176:
                                return var3;
                            case 178:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun56701_ip = 241;
                                    continue _fun56701
                                }
                            case 184:
                                var7 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var6 = var6[var4];
                                var8 = var7.bind(var1)(var6);
                                var7 = var8.dispatch;
                                var6 = {};
                                var9 = 'GIFT_CODE_CREATE_SUCCESS';
                                var6.type = var9;
                                var9 = var3.body;
                                var6.giftCode = var9;
                                var6 = var7.bind(var8)(var6);
                                var6 = var3.body;
                            case 238: // try_end0
                                return var6;
                            case 241:
                                return var3;
                            case 244: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var2 = var2[var4];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var6 = 'GIFT_CODE_CREATE_FAILURE';
                                var2.type = var6;
                                var6 = _closure2_slot0;
                                var2.skuId = var6;
                                var5 = _closure2_slot1;
                                var2.subscriptionPlanId = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            case 306:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3.createGiftCode = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun56704: for (var _fun56704_ip = 0;;) switch (_fun56704_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun56704_ip = 253;
                            continue _fun56704
                        }
                    case 10:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 4;
                        var3 = var1[var4];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var5 = 'GIFT_CODE_REVOKE';
                        var3.type = var5;
                        var8 = _closure2_slot0;
                        var3.code = var8;
                        var3 = var6.bind(var7)(var3);
                    case 68: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 8;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.del;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var10 = _closure1_slot6;
                        var9 = var10.USER_GIFT_CODE_REVOKE;
                        var8 = _closure2_slot0;
                        var8 = var9.bind(var10)(var8);
                        var3.url = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 143);
                    case 141:
                        return var3;
                    case 143:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun56704_ip = 198;
                            continue _fun56704
                        }
                    case 149:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'GIFT_CODE_REVOKE_SUCCESS';
                        var6.type = var9;
                        var9 = _closure2_slot0;
                        var6.code = var9;
                        var6 = var7.bind(var8)(var6);
                    case 196: // try_end0
                        _fun56704_ip = 250;
                        continue _fun56704;
                    case 198:
                        return var3;
                    case 201: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GIFT_CODE_REVOKE_FAILURE';
                        var2.type = var6;
                        var5 = _closure2_slot0;
                        var2.code = var5;
                        var2 = var3.bind(var4)(var2);
                    case 250:
                        return var1;
                    case 253:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.revokeGiftCode = var7;
    var4 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.openNativeAppModal;
        var1 = _closure1_slot7;
        var2 = var1.GIFT_CODE_BROWSER;
        var1 = arg0;
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var3.openNativeGiftCodeModal = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var11 = var4.default;
    var12 = var3;
    var4 = copyDataProperties(var12, var11);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/GiftCodeActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.resolveGiftCode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3454, 660, 1623, 806, 3348, 5348, 4597, 507, 6888, 6889, 2]);