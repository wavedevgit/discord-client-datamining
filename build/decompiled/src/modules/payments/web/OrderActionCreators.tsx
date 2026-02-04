// modules/payments/web/OrderActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79095: for (var _fun79095_ip = 0;;) switch (_fun79095_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79095_ip = 524;
                            continue _fun79095
                        }
                    case 13:
                        var7 = var1.skuId;
                        var11 = var1.paymentSourceId;
                        var10 = var1.paymentGateway;
                        var13 = var1.loadId;
                        var5 = undefined;
                        var4 = undefined;
                        var8 = undefined;
                        SaveGenerator(address = 47);
                    case 45:
                        return var5;
                    case 47:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79095_ip = 521;
                            continue _fun79095
                        }
                    case 56:
                        var12 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 2;
                        var9 = var9[var6];
                        var14 = var12.bind(var5)(var9);
                        var12 = var14.wait;
                        var9 = function() { // Environment: var9
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'ORDER_CREATE_START';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var9 = var12.bind(var14)(var9);
                    case 99: // try_start_0
                        var4 = {};
                        var12 = var11;
                        var9 = null;
                        if (!(var9 != var12)) {
                            _fun79095_ip = 119;
                            continue _fun79095
                        }
                    case 110:
                        var12 = var4;
                        var12.payment_source_id = var11;
                    case 119:
                        var11 = var10;
                        if (!(var9 != var11)) {
                            _fun79095_ip = 135;
                            continue _fun79095
                        }
                    case 126:
                        var11 = var4;
                        var11.payment_gateway = var10;
                    case 135:
                        var11 = {};
                        var14 = {};
                        var14.sku_id = var7;
                        var7 = 1;
                        var14.quantity = var7;
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var12 = 3;
                        var12 = var10[var12];
                        var12 = var7.bind(var5)(var12);
                        var12 = var12.ItemPurchaseType;
                        var12 = var12.ONE_TIME;
                        var14.purchase_type = var12;
                        var12 = new Array(1);
                        var12[0] = var14;
                        var11.order_line_items = var12;
                        var11.billing_facet = var4;
                        var4 = 4;
                        var4 = var10[var4];
                        var4 = var7.bind(var5)(var4);
                        var10 = var4.HTTP;
                        var7 = var10.post;
                        var4 = {};
                        var12 = _closure1_slot4;
                        var12 = var12.ORDER_CREATE;
                        var4.url = var12;
                        var4.body = var11;
                        var11 = var13;
                        var12 = var9 != var11;
                        var11 = undefined;
                        if (!var12) {
                            _fun79095_ip = 285;
                            continue _fun79095
                        }
                    case 262:
                        var14 = var13;
                        var12 = '';
                        var11 = undefined;
                        if (!(var12 !== var14)) {
                            _fun79095_ip = 285;
                            continue _fun79095
                        }
                    case 275:
                        var12 = {};
                        var12.load_id = var13;
                        var11 = var12;
                    case 285:
                        var4.context = var11;
                        var11 = true;
                        var4.rejectWithError = var11;
                        var4 = var7.bind(var10)(var4);
                        SaveGenerator(address = 304);
                    case 302:
                        return var4;
                    case 304:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun79095_ip = 462;
                            continue _fun79095
                        }
                    case 313:
                        var7 = var4.body;
                        var8 = var7;
                        if (!(var9 != var7)) {
                            _fun79095_ip = 426;
                            continue _fun79095
                        }
                    case 325:
                        var7 = var8;
                        var7 = var7.id;
                        if (!(var9 != var7)) {
                            _fun79095_ip = 426;
                            continue _fun79095
                        }
                    case 337:
                        var7 = var8;
                        var9 = var7.id;
                        var7 = '';
                        if (!(var7 !== var9)) {
                            _fun79095_ip = 426;
                            continue _fun79095
                        }
                    case 353:
                        var9 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var6];
                        var10 = var9.bind(var5)(var7);
                        var9 = var10.dispatch;
                        var7 = {};
                        var11 = 'ORDER_CREATE_SUCCESS';
                        var7.type = var11;
                        var11 = var8;
                        var12 = var11.id;
                        var7.orderId = var12;
                        var7.order = var11;
                        var7 = var9.bind(var10)(var7);
                        SaveGenerator(address = 414);
                    case 412:
                        return var7;
                    case 414:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 9);
                        if (var9) {
                            _fun79095_ip = 423;
                            continue _fun79095
                        }
                    case 420: // try_end0
                        return var8;
                    case 423:
                        return var7;
                    case 426: // try_start_1
                        var7 = global;
                        var9 = var7.Error;
                        var7 = var9.prototype;
                        var8 = Object.create(var7, {
                            constructor: {
                                value: var9
                            }
                        });
                        var15 = 'Invalid order response';
                        var16 = var8;
                        var7 = new var16[var9](var15, var14);
                        var7 = var7 instanceof Object ? var7 : var8;
                        throw var7;
                    case 462: // try_end1
                        return var4;
                    case 465: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var5 = var4.bind(var5)(var2);
                        var4 = var5.dispatch;
                        var2 = {};
                        var6 = 'ORDER_CREATE_FAIL';
                        var2.type = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 510);
                    case 508:
                        return var2;
                    case 510:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79095_ip = 518;
                            continue _fun79095
                        }
                    case 516:
                        throw var3;
                    case 518:
                        return var2;
                    case 521:
                        return var1;
                    case 524:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79099: for (var _fun79099_ip = 0;;) switch (_fun79099_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79099_ip = 325;
                            continue _fun79099
                        }
                    case 13:
                        var9 = var1.orderId;
                        var7 = var1.updates;
                        var3 = undefined;
                        var8 = undefined;
                        SaveGenerator(address = 33);
                    case 31:
                        return var3;
                    case 33:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79099_ip = 322;
                            continue _fun79099
                        }
                    case 42:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = 2;
                        var4 = var4[var5];
                        var10 = var6.bind(var3)(var4);
                        var6 = var10.wait;
                        var4 = function() { // Environment: var4
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'ORDER_UPDATE_START';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var6.bind(var10)(var4);
                    case 85: // try_start_0
                        var8 = {};
                        var6 = var7;
                        var4 = 'paymentSourceId';
                        var4 = var4 in var6;
                        if (!var4) {
                            _fun79099_ip = 123;
                            continue _fun79099
                        }
                    case 101:
                        var6 = var8;
                        var4 = {};
                        var7 = var7.paymentSourceId;
                        var4.payment_source_id = var7;
                        var6.billing_facet = var4;
                    case 123:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 4;
                        var4 = var7[var4];
                        var4 = var6.bind(var3)(var4);
                        var7 = var4.HTTP;
                        var6 = var7.patch;
                        var4 = {};
                        var12 = _closure1_slot4;
                        var11 = var12.ORDER_UPDATE;
                        var10 = var9;
                        var10 = var11.bind(var12)(var10);
                        var4.url = var10;
                        var4.body = var8;
                        var8 = true;
                        var4.rejectWithError = var8;
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address = 197);
                    case 195:
                        return var4;
                    case 197:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun79099_ip = 262;
                            continue _fun79099
                        }
                    case 203:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var5];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'ORDER_UPDATE_SUCCESS';
                        var6.type = var10;
                        var6.orderId = var9;
                        var6 = var7.bind(var8)(var6);
                        SaveGenerator(address = 251);
                    case 249:
                        return var6;
                    case 251:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun79099_ip = 259;
                            continue _fun79099
                        }
                    case 257: // try_end0
                        _fun79099_ip = 316;
                        continue _fun79099;
                    case 259:
                        return var6;
                    case 262:
                        return var4;
                    case 265: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.dispatch;
                        var2 = {};
                        var6 = 'ORDER_UPDATE_FAIL';
                        var2.type = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 310);
                    case 308:
                        return var2;
                    case 310:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79099_ip = 319;
                            continue _fun79099
                        }
                    case 316:
                        return var3;
                    case 319:
                        return var2;
                    case 322:
                        return var1;
                    case 325:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79103: for (var _fun79103_ip = 0;;) switch (_fun79103_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79103_ip = 255;
                            continue _fun79103
                        }
                    case 13:
                        var8 = var1.orderId;
                        var2 = var1.expectedRevision;
                        var9 = var1.loadId;
                        var11 = undefined;
                        var7 = undefined;
                        var3 = undefined;
                        SaveGenerator(address = 41);
                    case 39:
                        return var11;
                    case 41:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79103_ip = 252;
                            continue _fun79103
                        }
                    case 50: // try_start_0
                        var7 = {};
                        var4 = var2;
                        var5 = null;
                        if (!(var5 != var4)) {
                            _fun79103_ip = 70;
                            continue _fun79103
                        }
                    case 61:
                        var4 = var7;
                        var4.expected_revision = var2;
                    case 70:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var4.bind(var11)(var2);
                        var6 = var2.HTTP;
                        var4 = var6.post;
                        var2 = {};
                        var12 = _closure1_slot4;
                        var10 = var12.ORDER_SIGN;
                        var8 = var10.bind(var12)(var8);
                        var2.url = var8;
                        var2.body = var7;
                        var7 = var9;
                        var8 = var5 != var7;
                        var7 = undefined;
                        if (!var8) {
                            _fun79103_ip = 164;
                            continue _fun79103
                        }
                    case 141:
                        var10 = var9;
                        var8 = '';
                        var7 = undefined;
                        if (!(var8 !== var10)) {
                            _fun79103_ip = 164;
                            continue _fun79103
                        }
                    case 154:
                        var8 = {};
                        var8.load_id = var9;
                        var7 = var8;
                    case 164:
                        var2.context = var7;
                        var7 = false;
                        var2.rejectWithError = var7;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address = 183);
                    case 181:
                        return var2;
                    case 183:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79103_ip = 245;
                            continue _fun79103
                        }
                    case 189:
                        var3 = var2;
                        var4 = var2.body;
                        if (!(var5 != var4)) {
                            _fun79103_ip = 209;
                            continue _fun79103
                        }
                    case 201:
                        var3 = var3.body;
                    case 206: // try_end0
                        return var3;
                    case 209: // try_start_1
                        var3 = global;
                        var5 = var3.Error;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var13 = 'Invalid sign order response';
                        var14 = var4;
                        var3 = new var14[var5](var13, var12);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 245: // try_end1
                        return var2;
                    case 248: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                        throw var2;
                    case 252:
                        return var1;
                    case 255:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79106: for (var _fun79106_ip = 0;;) switch (_fun79106_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79106_ip = 221;
                            continue _fun79106
                        }
                    case 10:
                        var6 = arg0;
                        var5 = undefined;
                        var3 = undefined;
                    case 17: // try_start_0
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 4;
                        var1 = var7[var1];
                        var1 = var4.bind(var5)(var1);
                        var7 = var1.HTTP;
                        var4 = var7.post;
                        var1 = {};
                        var10 = _closure1_slot4;
                        var9 = var10.ORDER_DISCARD;
                        var8 = var6;
                        var8 = var9.bind(var10)(var8);
                        var1.url = var8;
                        var8 = false;
                        var1.rejectWithError = var8;
                        var1 = var4.bind(var7)(var1);
                        SaveGenerator(address = 90);
                    case 88:
                        return var1;
                    case 90:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79106_ip = 214;
                            continue _fun79106
                        }
                    case 96:
                        var3 = var1;
                        var7 = var1.body;
                        var4 = null;
                        if (!(var4 != var7)) {
                            _fun79106_ip = 178;
                            continue _fun79106
                        }
                    case 110:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 2;
                        var2 = var7[var2];
                        var5 = var4.bind(var5)(var2);
                        var4 = var5.dispatch;
                        var2 = {};
                        var7 = 'ORDER_DISCARD_SUCCESS';
                        var2.type = var7;
                        var2.orderId = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 161);
                    case 159:
                        return var2;
                    case 161:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79106_ip = 175;
                            continue _fun79106
                        }
                    case 167:
                        var3 = var3.body;
                    case 172: // try_end0
                        return var3;
                    case 175:
                        return var2;
                    case 178: // try_start_1
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var11 = 'Invalid discard order response';
                        var12 = var3;
                        var2 = new var12[var4](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 214: // try_end1
                        return var1;
                    case 217: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 1);
                        throw var1;
                    case 221:
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
    var3 = 'modules/payments/web/OrderActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createOrder = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateOrder = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.signOrder = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.discardOrder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 7110, 507, 2]);