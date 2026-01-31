// modules/billing/hooks/useSubscriptionPlansLoaded.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun59365: for (var _fun59365_ip = 0;;) switch (_fun59365_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun59365_ip = 46;
                    continue _fun59365
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun59365_ip = 55;
                    continue _fun59365
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun59365_ip = 343;
                    continue _fun59365
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun59365_ip = 323;
                    continue _fun59365
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun59365_ip = 283;
                    continue _fun59365
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun59365_ip = 270;
                    continue _fun59365
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
                    _fun59365_ip = 163;
                    continue _fun59365
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun59365_ip = 179;
                    continue _fun59365
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun59365_ip = 249;
                    continue _fun59365
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun59365_ip = 249;
                    continue _fun59365
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun59365_ip = 234;
                    continue _fun59365
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun59365_ip = 247;
                    continue _fun59365
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun59365_ip = 265;
                continue _fun59365;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun59365_ip = 283;
                continue _fun59365;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun59365_ip = 323;
                    continue _fun59365
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
                    _fun59365_ip = 330;
                    continue _fun59365
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun59366: for (var _fun59366_ip = 0;;) switch (_fun59366_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun59366_ip = 56;
                                continue _fun59366
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
                            _fun59366_ip = 67;
                            continue _fun59366;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun59367: for (var _fun59367_ip = 0;;) switch (_fun59367_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun59367_ip = 23;
                    continue _fun59367
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun59367_ip = 33;
                    continue _fun59367
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
                    _fun59367_ip = 70;
                    continue _fun59367
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun59367_ip = 55;
                    continue _fun59367
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var1 = function() {
        _fun59368: for (var _fun59368_ip = 0;;) switch (_fun59368_ip) {
            case 0:
                var6 = arguments[0];
                var0 = arguments[1];
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun59368_ip = 35;
                    continue _fun59368
                }
            case 12:
                var11 = _closure1_slot5;
                var1 = new Array(0);
                var10 = 0;
                var12 = var1;
                var2 = arraySpread(var12, var11, var10);
                var6 = var1;
            case 35:
                if (!(var0 === var5)) {
                    _fun59368_ip = 73;
                    continue _fun59368
                }
            case 39:
                var3 = _closure1_slot2;
                var1 = new Array(3);
                var1[0] = var3;
                var3 = _closure1_slot3;
                var1[1] = var3;
                var2 = _closure1_slot4;
                var1[2] = var2;
                var0 = var1;
            case 73:
                var3 = var0;
                var1 = var3[Symbol.iterator];
                var3 = var1().next;
                var4 = var3().value;
                var0 = var1;
                var2 = var0 === var5;
                var0 = undefined;
                if (var2) {
                    _fun59368_ip = 98;
                    continue _fun59368
                }
            case 95:
                var0 = var4;
            case 98:
                var4 = undefined;
                if (var2) {
                    _fun59368_ip = 128;
                    continue _fun59368
                }
            case 103:
                var8 = var3().value;
                var7 = var1;
                var7 = var7 === var5;
                var4 = undefined;
                var2 = var7;
                if (var7) {
                    _fun59368_ip = 128;
                    continue _fun59368
                }
            case 122:
                var4 = var8;
                var2 = var7;
            case 128:
                var7 = undefined;
                if (var2) {
                    _fun59368_ip = 158;
                    continue _fun59368
                }
            case 133:
                var8 = var3().value;
                var3 = var1;
                var3 = var3 === var5;
                var7 = undefined;
                var2 = var3;
                if (var3) {
                    _fun59368_ip = 158;
                    continue _fun59368
                }
            case 152:
                var7 = var8;
                var2 = var3;
            case 158:
                if (var2) {
                    _fun59368_ip = 164;
                    continue _fun59368
                }
            case 161:
                var1.return();
            case 164:
                var2 = var0.paymentSourceIds;
                var3 = var0.defaultPaymentSourceId;
                var0 = var4.isLoadedForSKUs;
                var0 = var0.bind(var4)(var6);
                var1 = var7.getPremiumTypeSubscription;
                var7 = var1.bind(var7)();
                var1 = null;
                var9 = var1 == var7;
                var8 = undefined;
                if (var9) {
                    _fun59368_ip = 216;
                    continue _fun59368
                }
            case 210:
                var8 = var7.paymentSourceId;
            case 216:
                if (!(var1 != var8)) {
                    _fun59368_ip = 239;
                    continue _fun59368
                }
            case 220:
                var7 = var4.hasPaymentSourceForSKUIds;
                var7 = var7.bind(var4)(var8, var6);
                if (var7) {
                    _fun59368_ip = 239;
                    continue _fun59368
                }
            case 235:
                var7 = false;
                return var7;
            case 239:
                if (!(var1 != var3)) {
                    _fun59368_ip = 262;
                    continue _fun59368
                }
            case 243:
                var1 = var4.hasPaymentSourceForSKUIds;
                var1 = var1.bind(var4)(var3, var6);
                if (var1) {
                    _fun59368_ip = 262;
                    continue _fun59368
                }
            case 258:
                var1 = false;
                return var1;
            case 262:
                var1 = _closure1_slot6;
                var3 = var1.bind(var5)(var2);
                var2 = var3.bind(var5)();
                var1 = var2.done;
                if (var1) {
                    _fun59368_ip = 325;
                    continue _fun59368
                }
            case 286:
                var7 = var2.value;
                var1 = var4.hasPaymentSourceForSKUIds;
                var1 = var1.bind(var4)(var7, var6);
                if (var1) {
                    _fun59368_ip = 310;
                    continue _fun59368
                }
            case 306:
                var1 = false;
                return var1;
            case 310:
                var7 = var3.bind(var5)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun59368_ip = 286;
                    continue _fun59368
                }
            case 325:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var13 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = 'useSubscriptionPlansLoaded';
    var4 = new var13[var8](var12, var11);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/hooks/useSubscriptionPlansLoaded.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        _fun59369: for (var _fun59369_ip = 0;;) switch (_fun59369_ip) {
            case 0:
                var5 = arguments[0];
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun59369_ip = 34;
                    continue _fun59369
                }
            case 11:
                var8 = _closure1_slot5;
                var1 = new Array(0);
                var7 = 0;
                var9 = var1;
                var2 = arraySpread(var9, var8, var7);
                var5 = var1;
            case 34:
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 5;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStores;
                var6 = _closure1_slot2;
                var2 = new Array(3);
                var2[0] = var6;
                var6 = _closure1_slot3;
                var2[1] = var6;
                var1 = _closure1_slot4;
                var2[2] = var1;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot8;
                    var2 = _closure2_slot0;
                    var4 = _closure1_slot2;
                    var1 = new Array(3);
                    var1[0] = var4;
                    var4 = _closure1_slot3;
                    var1[1] = var4;
                    var0 = _closure1_slot4;
                    var1[2] = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.useSubscriptionPlansLoaded = var3;
    var2.getSubscriptionPlansLoaded = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3071, 3075, 3076, 1615, 3, 566, 2]);