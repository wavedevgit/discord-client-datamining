// modules/payments/web/stores/OrderStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun79560: for (var _fun79560_ip = 0;;) switch (_fun79560_ip) {
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
                _fun79560_ip = 76;
                continue _fun79560;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun79564: for (var _fun79564_ip = 0;;) switch (_fun79564_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 5;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var9 = new Array(2);
                    var9[0] = var0;
                    var0 = {};
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOrderCreateStart;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.ORDER_CREATE_START = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOrderCreateSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.ORDER_CREATE_SUCCESS = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOrderCreateFail;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.ORDER_CREATE_FAIL = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOrderUpdateStart;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.ORDER_UPDATE_START = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOrderUpdateSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.ORDER_UPDATE_SUCCESS = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOrderUpdateFail;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.ORDER_UPDATE_FAIL = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOrderDiscardSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.ORDER_DISCARD_SUCCESS = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handlePaymentModalOpen;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.PAYMENT_MODAL_OPEN = var6;
                    var9[1] = var0;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun79564_ip = 210;
                        continue _fun79564
                    }
                case 197:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun79564_ip = 244;
                    continue _fun79564;
                case 210:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 244:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = false;
                    var0._isCreatingOrder = var1;
                    var0._isUpdatingOrder = var1;
                    var1 = null;
                    var0._order = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'isCreatingOrder';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0._isCreatingOrder;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'currentOrderId';
        var4.key = var6;
        var6 = function() {
            _fun79574: for (var _fun79574_ip = 0;;) switch (_fun79574_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._order;
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun79574_ip = 25;
                        continue _fun79574
                    }
                case 20:
                    var1 = var2.id;
                case 25:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun79574_ip = 37;
                        continue _fun79574
                    }
                case 34:
                    var0 = var1;
                case 37:
                    return var0;
            }
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'currentOrder';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._order;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'currentPaymentGateway';
        var4.key = var6;
        var6 = function() {
            _fun79576: for (var _fun79576_ip = 0;;) switch (_fun79576_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._order;
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun79576_ip = 41;
                        continue _fun79576
                    }
                case 20:
                    var2 = var2.billing_facet;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun79576_ip = 41;
                        continue _fun79576
                    }
                case 35:
                    var1 = var2.payment_gateway;
                case 41:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun79576_ip = 53;
                        continue _fun79576
                    }
                case 50:
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleOrderCreateStart';
        var4.key = var6;
        var6 = function arg0() {
            _fun79577: for (var _fun79577_ip = 0;;) switch (_fun79577_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var1 != var0)) {
                        _fun79577_ip = 24;
                        continue _fun79577
                    }
                case 9:
                    var2 = true;
                    var0 = this;
                    var0._isCreatingOrder = var2;
                    var0 = undefined;
                    return var0;
                case 24:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var1;
                    var0 = throwTypeError(var4, var3);
                    var0 = undefined;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleOrderCreateSuccess';
        var4.key = var6;
        var6 = function arg0() {
            _fun79578: for (var _fun79578_ip = 0;;) switch (_fun79578_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var0.orderId;
                    var2 = var0.order;
                    var0 = false;
                    var1._isCreatingOrder = var0;
                    var0 = null;
                    var3 = var0 != var2;
                    if (!var3) {
                        _fun79578_ip = 38;
                        continue _fun79578
                    }
                case 35:
                    var0 = var2;
                case 38:
                    var1._order = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleOrderCreateFail';
        var4.key = var6;
        var6 = function arg0() {
            _fun79579: for (var _fun79579_ip = 0;;) switch (_fun79579_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var1 != var0)) {
                        _fun79579_ip = 24;
                        continue _fun79579
                    }
                case 9:
                    var2 = false;
                    var0 = this;
                    var0._isCreatingOrder = var2;
                    var0 = undefined;
                    return var0;
                case 24:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var1;
                    var0 = throwTypeError(var4, var3);
                    var0 = undefined;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleOrderUpdateStart';
        var4.key = var6;
        var6 = function arg0() {
            _fun79580: for (var _fun79580_ip = 0;;) switch (_fun79580_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var1 != var0)) {
                        _fun79580_ip = 24;
                        continue _fun79580
                    }
                case 9:
                    var2 = true;
                    var0 = this;
                    var0._isUpdatingOrder = var2;
                    var0 = undefined;
                    return var0;
                case 24:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var1;
                    var0 = throwTypeError(var4, var3);
                    var0 = undefined;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleOrderUpdateSuccess';
        var4.key = var6;
        var6 = function arg0() {
            _fun79581: for (var _fun79581_ip = 0;;) switch (_fun79581_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var1 != var0)) {
                        _fun79581_ip = 24;
                        continue _fun79581
                    }
                case 9:
                    var2 = false;
                    var0 = this;
                    var0._isUpdatingOrder = var2;
                    var0 = undefined;
                    return var0;
                case 24:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var1;
                    var0 = throwTypeError(var4, var3);
                    var0 = undefined;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleOrderUpdateFail';
        var4.key = var6;
        var6 = function arg0() {
            _fun79582: for (var _fun79582_ip = 0;;) switch (_fun79582_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var1 != var0)) {
                        _fun79582_ip = 24;
                        continue _fun79582
                    }
                case 9:
                    var2 = false;
                    var0 = this;
                    var0._isUpdatingOrder = var2;
                    var0 = undefined;
                    return var0;
                case 24:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var1;
                    var0 = throwTypeError(var4, var3);
                    var0 = undefined;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleOrderDiscardSuccess';
        var4.key = var6;
        var6 = function arg0() {
            _fun79583: for (var _fun79583_ip = 0;;) switch (_fun79583_ip) {
                case 0:
                    var2 = this;
                    var0 = arg0;
                    var4 = var0.orderId;
                    var5 = var2._order;
                    var1 = null;
                    var6 = var1 == var5;
                    var0 = undefined;
                    var3 = undefined;
                    if (var6) {
                        _fun79583_ip = 36;
                        continue _fun79583
                    }
                case 31:
                    var3 = var5.id;
                case 36:
                    if (!(var3 === var4)) {
                        _fun79583_ip = 48;
                        continue _fun79583
                    }
                case 40:
                    var2._order = var1;
                    return var0;
                case 48:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'handlePaymentModalOpen';
        var4.key = var6;
        var5 = function arg0() {
            _fun79584: for (var _fun79584_ip = 0;;) switch (_fun79584_ip) {
                case 0:
                    var1 = arg0;
                    var2 = null;
                    if (!(var1 != var2)) {
                        _fun79584_ip = 22;
                        continue _fun79584
                    }
                case 9:
                    var0 = this;
                    var0._order = var2;
                    var0 = undefined;
                    return var0;
                case 22:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var1;
                    var0 = throwTypeError(var4, var3);
                    var0 = undefined;
                    throw var0;
            }
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 'OrderStore';
    var1.displayName = var3;
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/payments/web/stores/OrderStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 806, 566, 2]);