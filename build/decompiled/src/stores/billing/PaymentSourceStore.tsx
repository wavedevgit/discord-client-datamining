// stores/billing/PaymentSourceStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun25154: for (var _fun25154_ip = 0;;) switch (_fun25154_ip) {
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
            case 70: // try_end0
                _fun25154_ip = 74;
                continue _fun25154;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun25157: for (var _fun25157_ip = 0;;) switch (_fun25157_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun25157_ip = 46;
                    continue _fun25157
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun25157_ip = 55;
                    continue _fun25157
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun25157_ip = 343;
                    continue _fun25157
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun25157_ip = 323;
                    continue _fun25157
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun25157_ip = 283;
                    continue _fun25157
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun25157_ip = 270;
                    continue _fun25157
                }
            case 110:
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
                    _fun25157_ip = 163;
                    continue _fun25157
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun25157_ip = 179;
                    continue _fun25157
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun25157_ip = 249;
                    continue _fun25157
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun25157_ip = 249;
                    continue _fun25157
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun25157_ip = 234;
                    continue _fun25157
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun25157_ip = 247;
                    continue _fun25157
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun25157_ip = 265;
                continue _fun25157;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun25157_ip = 283;
                continue _fun25157;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun25157_ip = 323;
                    continue _fun25157
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun25157_ip = 330;
                    continue _fun25157
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun25158: for (var _fun25158_ip = 0;;) switch (_fun25158_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun25158_ip = 56;
                                continue _fun25158
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
                            _fun25158_ip = 67;
                            continue _fun25158;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun25159: for (var _fun25159_ip = 0;;) switch (_fun25159_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun25159_ip = 23;
                    continue _fun25159
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun25159_ip = 33;
                    continue _fun25159
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
                    _fun25159_ip = 70;
                    continue _fun25159
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun25159_ip = 55;
                    continue _fun25159
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var7 = function arg0() {
        _fun25160: for (var _fun25160_ip = 0;;) switch (_fun25160_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.paymentSource;
                var2 = {};
                var6 = _closure1_slot6;
                var7 = var2;
                var3 = copyDataProperties(var7, var6);
                var3 = var0.id;
                var2[var3] = var0;
                _closure1_slot6 = var2;
                var2 = var0.isDefault;
                if (var2) {
                    _fun25160_ip = 82;
                    continue _fun25160
                }
            case 48:
                var3 = global;
                var5 = var3.Object;
                var4 = var5.keys;
                var3 = _closure1_slot6;
                var3 = var4.bind(var5)(var3);
                var4 = var3.length;
                var3 = 1;
                var2 = var3 === var4;
            case 82:
                if (!var2) {
                    _fun25160_ip = 94;
                    continue _fun25160
                }
            case 85:
                var0 = var0.id;
                _closure1_slot7 = var0;
            case 94:
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = null;
    var _closure1_slot7 = var1;
    var1 = false;
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun25162: for (var _fun25162_ip = 0;;) switch (_fun25162_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun25162_ip = 69;
                        continue _fun25162
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun25162_ip = 105;
                    continue _fun25162;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'paymentSources';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'paymentSourceIds';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var0 = _closure1_slot6;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'defaultPaymentSourceId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'defaultPaymentSource';
        var4.key = var6;
        var6 = function() {
            _fun25166: for (var _fun25166_ip = 0;;) switch (_fun25166_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun25166_ip = 28;
                        continue _fun25166
                    }
                case 16:
                    var2 = _closure1_slot6;
                    var1 = _closure1_slot7;
                    var0 = var2[var1];
                case 28:
                    return var0;
            }
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasFetchedPaymentSources';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getDefaultBillingCountryCode';
        var4.key = var6;
        var6 = function() {
            _fun25168: for (var _fun25168_ip = 0;;) switch (_fun25168_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.defaultPaymentSource;
                    var0 = null;
                    var2 = var0 == var1;
                    if (var2) {
                        _fun25168_ip = 26;
                        continue _fun25168
                    }
                case 18:
                    var0 = var1.paymentMethodCountry;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getPaymentSource';
        var4.key = var6;
        var5 = function arg0() {
            var1 = _closure1_slot6;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'PaymentSourceStore';
    var6.displayName = var1;
    var1 = 7;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var1.BILLING_PAYMENT_SOURCE_CREATE_SUCCESS = var7;
    var1.BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS = var7;
    var1.BILLING_PAYMENT_SOURCE_FETCH_SUCCESS = var7;
    var7 = function arg0() {
        _fun25170: for (var _fun25170_ip = 0;;) switch (_fun25170_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.paymentSources;
                var0 = {};
                _closure1_slot6 = var0;
                var4 = null;
                _closure1_slot7 = var4;
                var1 = _closure1_slot10;
                var0 = undefined;
                var6 = var1.bind(var0)(var3);
                var5 = var6.bind(var0)();
                var1 = var5.done;
                if (var1) {
                    _fun25170_ip = 112;
                    continue _fun25170
                }
            case 47:
                var1 = var5.value;
                var9 = _closure1_slot6;
                var8 = var1.id;
                var10 = _closure1_slot5;
                var7 = var10.createFromServer;
                var7 = var7.bind(var10)(var1);
                var9[var8] = var7;
                var7 = var1.default;
                if (!var7) {
                    _fun25170_ip = 97;
                    continue _fun25170
                }
            case 88:
                var1 = var1.id;
                _closure1_slot7 = var1;
            case 97:
                var7 = var6.bind(var0)();
                var1 = var7.done;
                var5 = var7;
                if (!var1) {
                    _fun25170_ip = 47;
                    continue _fun25170
                }
            case 112:
                var1 = _closure1_slot7;
                var1 = var4 == var1;
                if (!var1) {
                    _fun25170_ip = 134;
                    continue _fun25170
                }
            case 123:
                var5 = var3.length;
                var4 = 0;
                var1 = var5 > var4;
            case 134:
                if (!var1) {
                    _fun25170_ip = 152;
                    continue _fun25170
                }
            case 137:
                var1 = 0;
                var1 = var3[var1];
                var1 = var1.id;
                _closure1_slot7 = var1;
            case 152:
                var1 = true;
                _closure1_slot8 = var1;
                return var0;
        }
    };
    var1.BILLING_PAYMENT_SOURCES_FETCH_SUCCESS = var7;
    var7 = function arg0() {
        _fun25171: for (var _fun25171_ip = 0;;) switch (_fun25171_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var0 = {};
                var5 = _closure1_slot6;
                var6 = var0;
                var3 = copyDataProperties(var6, var5);
                _closure1_slot6 = var0;
                var0 = delete var0[var2];
                var0 = _closure1_slot7;
                if (!(var0 === var2)) {
                    _fun25171_ip = 83;
                    continue _fun25171
                }
            case 40:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.keys;
                var0 = _closure1_slot6;
                var3 = var2.bind(var3)(var0);
                var4 = var3.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var4)) {
                    _fun25171_ip = 79;
                    continue _fun25171
                }
            case 75:
                var0 = var3[var2];
            case 79:
                _closure1_slot7 = var0;
            case 83:
                var0 = undefined;
                return var0;
        }
    };
    var1.BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS = var7;
    var3 = function() {
        var0 = {};
        _closure1_slot6 = var0;
        var0 = null;
        _closure1_slot7 = var0;
        var0 = false;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/billing/PaymentSourceStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3072, 566, 806, 2]);