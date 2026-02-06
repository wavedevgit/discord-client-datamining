// utils/PremiumUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var15 = require;
    var68 = metroImportDefault;
    var2 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var68;
    var _closure1_slot2 = var16;
    var0 = function arg0, arg1() {
        _fun25119: for (var _fun25119_ip = 0;;) switch (_fun25119_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun25119_ip = 46;
                    continue _fun25119
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun25119_ip = 55;
                    continue _fun25119
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun25119_ip = 343;
                    continue _fun25119
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun25119_ip = 323;
                    continue _fun25119
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun25119_ip = 283;
                    continue _fun25119
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun25119_ip = 270;
                    continue _fun25119
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
                    _fun25119_ip = 163;
                    continue _fun25119
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun25119_ip = 179;
                    continue _fun25119
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun25119_ip = 249;
                    continue _fun25119
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun25119_ip = 249;
                    continue _fun25119
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun25119_ip = 234;
                    continue _fun25119
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun25119_ip = 247;
                    continue _fun25119
                }
            case 234:
                var8 = _closure1_slot60;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun25119_ip = 265;
                continue _fun25119;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun25119_ip = 283;
                continue _fun25119;
            case 270:
                var6 = _closure1_slot60;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun25119_ip = 323;
                    continue _fun25119
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
                    _fun25119_ip = 330;
                    continue _fun25119
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun25120: for (var _fun25120_ip = 0;;) switch (_fun25120_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun25120_ip = 56;
                                continue _fun25120
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
                            _fun25120_ip = 67;
                            continue _fun25120;
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
    var _closure1_slot59 = var0;
    var0 = function arg0, arg1() {
        _fun25121: for (var _fun25121_ip = 0;;) switch (_fun25121_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun25121_ip = 23;
                    continue _fun25121
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun25121_ip = 33;
                    continue _fun25121
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
                    _fun25121_ip = 70;
                    continue _fun25121
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun25121_ip = 55;
                    continue _fun25121
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot60 = var0;
    var67 = function arg0() {
        var0 = arg0;
        var2 = var0.items;
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot32;
            var1 = var2.has;
            var0 = arg0;
            var0 = var0.planId;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot61 = var67;
    var66 = function arg0() {
        _fun25124: for (var _fun25124_ip = 0;;) switch (_fun25124_ip) {
            case 0:
                var6 = arguments[1];
                var5 = arguments[2];
                var0 = arguments[3];
                var4 = arguments[4];
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun25124_ip = 20;
                    continue _fun25124
                }
            case 18:
                var6 = false;
            case 20:
                if (!(var5 === var3)) {
                    _fun25124_ip = 26;
                    continue _fun25124
                }
            case 24:
                var5 = false;
            case 26:
                if (!(var0 === var3)) {
                    _fun25124_ip = 32;
                    continue _fun25124
                }
            case 30:
                var0 = undefined;
            case 32:
                if (!(var4 === var3)) {
                    _fun25124_ip = 38;
                    continue _fun25124
                }
            case 36:
                var4 = true;
            case 38:
                var2 = _closure1_slot7;
                var2 = var2.defaultPaymentSourceId;
                var10 = null;
                var8 = var10 != var2;
                var7 = undefined;
                if (!var8) {
                    _fun25124_ip = 65;
                    continue _fun25124
                }
            case 62:
                var7 = var2;
            case 65:
                var8 = _closure1_slot9;
                var2 = var8.getPremiumTypeSubscription;
                var2 = var2.bind(var8)();
                var8 = var10 != var2;
                if (!var8) {
                    _fun25124_ip = 96;
                    continue _fun25124
                }
            case 86:
                var9 = var2.paymentSourceId;
                var8 = var10 != var9;
            case 96:
                if (!var8) {
                    _fun25124_ip = 105;
                    continue _fun25124
                }
            case 99:
                var7 = var2.paymentSourceId;
            case 105:
                var2 = _closure1_slot63;
                var1 = {};
                var1.paymentSourceId = var7;
                var1.currency = var0;
                var15 = arg0;
                var16 = undefined;
                var14 = var6;
                var13 = var5;
                var12 = var1;
                var11 = var4;
                var0 = var16[var2](var15, var14, var13, var12, var11, var10);
                return var0;
        }
    };
    var _closure1_slot62 = var66;
    var65 = function arg0() {
        _fun25125: for (var _fun25125_ip = 0;;) switch (_fun25125_ip) {
            case 0:
                var7 = arg0;
                var0 = arguments[1];
                var4 = arguments[2];
                var14 = arguments[3];
                var2 = arguments[4];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun25125_ip = 23;
                    continue _fun25125
                }
            case 21:
                var0 = false;
            case 23:
                if (!(var4 === var3)) {
                    _fun25125_ip = 29;
                    continue _fun25125
                }
            case 27:
                var4 = false;
            case 29:
                if (!(var14 === var3)) {
                    _fun25125_ip = 35;
                    continue _fun25125
                }
            case 33:
                var14 = {};
            case 35:
                if (!(var2 === var3)) {
                    _fun25125_ip = 41;
                    continue _fun25125
                }
            case 39:
                var2 = true;
            case 41:
                var8 = var14.paymentSourceId;
                var6 = var14.currency;
                var9 = _closure1_slot8;
                var5 = var9.get;
                var9 = var5.bind(var9)(var7);
                var5 = null;
                if (!(var5 == var9)) {
                    _fun25125_ip = 209;
                    continue _fun25125
                }
            case 79:
                var9 = global;
                var11 = var9.Error;
                var9 = var11.prototype;
                var10 = Object.create(var9, {
                    constructor: {
                        value: var11
                    }
                });
                var18 = 'Plan not found';
                var19 = var10;
                var9 = new var19[var11](var18, var17);
                var9 = var9 instanceof Object ? var9 : var10;
                if (!var2) {
                    _fun25125_ip = 207;
                    continue _fun25125
                }
            case 116:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 12;
                var10 = var12[var10];
                var12 = var11.bind(var3)(var10);
                var11 = var12.captureBillingException;
                var10 = {};
                var13 = {};
                var13.planId = var7;
                var16 = var5 != var6;
                var15 = 'unknown';
                if (!var16) {
                    _fun25125_ip = 165;
                    continue _fun25125
                }
            case 162:
                var15 = var6;
            case 165:
                var13.currency = var15;
                var10.tags = var13;
                var13 = {};
                var18 = var13;
                var17 = var14;
                var14 = copyDataProperties(var18, var17);
                var14 = 'isGift';
                var13[var14] = var4;
                var10.extra = var13;
                var10 = var11.bind(var12)(var9, var10);
            case 207:
                throw var9;
            case 209:
                var9 = _closure1_slot12;
                var9 = var9.DEFAULT;
                if (var4) {
                    _fun25125_ip = 237;
                    continue _fun25125
                }
            case 222:
                if (!var0) {
                    _fun25125_ip = 247;
                    continue _fun25125
                }
            case 225:
                var0 = _closure1_slot12;
                var9 = var0.PREMIUM_TIER_1;
                _fun25125_ip = 247;
                continue _fun25125;
            case 237:
                var0 = _closure1_slot12;
                var9 = var0.GIFT;
            case 247:
                var4 = _closure1_slot66;
                var0 = {};
                var0.paymentSourceId = var8;
                var0.purchaseType = var9;
                var0.currency = var6;
                var0 = var4.bind(var3)(var7, var0);
                if (!(var5 != var0)) {
                    _fun25125_ip = 280;
                    continue _fun25125
                }
            case 278:
                return var0;
            case 280:
                var0 = global;
                var10 = var0.Error;
                var0 = var10.prototype;
                var4 = Object.create(var0, {
                    constructor: {
                        value: var10
                    }
                });
                var18 = "Couldn't find price";
                var19 = var4;
                var0 = new var19[var10](var18, var17);
                var0 = var0 instanceof Object ? var0 : var4;
                if (!var2) {
                    _fun25125_ip = 408;
                    continue _fun25125
                }
            case 317:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.captureBillingException;
                var1 = {};
                var4 = {};
                var4.paymentSourceId = var8;
                var1.extra = var4;
                var4 = {};
                var8 = var9.toString;
                var8 = var8.bind(var9)();
                var4.purchaseType = var8;
                var4.planId = var7;
                var7 = var5 != var6;
                var5 = 'unknown';
                if (!var7) {
                    _fun25125_ip = 392;
                    continue _fun25125
                }
            case 389:
                var5 = var6;
            case 392:
                var4.currency = var5;
                var1.tags = var4;
                var1 = var2.bind(var3)(var0, var1);
            case 408:
                throw var0;
        }
    };
    var _closure1_slot63 = var65;
    var0 = function arg0, arg1() {
        _fun25126: for (var _fun25126_ip = 0;;) switch (_fun25126_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var2 = _closure1_slot8;
                var0 = var2.get;
                var2 = var0.bind(var2)(var5);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun25126_ip = 256;
                    continue _fun25126
                }
            case 32:
                var0 = var2.prices;
                if (!(var3 != var0)) {
                    _fun25126_ip = 197;
                    continue _fun25126
                }
            case 45:
                var0 = var2.prices;
                var0 = var0[var6];
                if (!(var3 != var0)) {
                    _fun25126_ip = 61;
                    continue _fun25126
                }
            case 59:
                return var0;
            case 61:
                var4 = _closure1_slot54;
                var3 = var4.info;
                var0 = global;
                var8 = var0.JSON;
                var7 = var8.stringify;
                var10 = var0.Object;
                var9 = var10.keys;
                var2 = var2.prices;
                var2 = var9.bind(var10)(var2);
                var8 = var7.bind(var8)(var2);
                var2 = var0.HermesInternal;
                var7 = var2.concat;
                var2 = 'Purchase types: ';
                var2 = var7.bind(var2)(var8);
                var2 = var3.bind(var4)(var2);
                var3 = var0.Error;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var2 = 'No prices returned for purchase type ';
                var0 = ' for plan ';
                var13 = var4.bind(var2)(var6, var0, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var14 = var2;
                var0 = new var14[var3](var13, var12);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 197:
                var0 = global;
                var3 = var0.Error;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var2 = 'No prices returned for ';
                var0 = ', is your user in the experiment?';
                var13 = var4.bind(var2)(var5, var0);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var14 = var2;
                var0 = new var14[var3](var13, var12);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 256:
                var0 = global;
                var3 = var0.Error;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = 'Plan not found';
                var14 = var2;
                var0 = new var14[var3](var13, var12);
                var0 = var0 instanceof Object ? var0 : var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.captureBillingException;
                var1 = {};
                var4 = {};
                var4.planId = var5;
                var5 = var6.toString;
                var5 = var5.bind(var6)();
                var4.purchaseType = var5;
                var1.tags = var4;
                var1 = var2.bind(var3)(var0, var1);
                throw var0;
        }
    };
    var _closure1_slot64 = var0;
    var64 = function arg0() {
        _fun25127: for (var _fun25127_ip = 0;;) switch (_fun25127_ip) {
            case 0:
                var5 = arg0;
                var0 = arguments[1];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun25127_ip = 35;
                    continue _fun25127
                }
            case 12:
                var1 = {};
                var2 = _closure1_slot12;
                var2 = var2.DEFAULT;
                var1.purchaseType = var2;
                var0 = var1;
            case 35:
                var10 = var0.paymentSourceId;
                var11 = var0.purchaseType;
                var0 = _closure1_slot64;
                var6 = var0.bind(var3)(var5, var11);
                var2 = null;
                if (!(var2 != var10)) {
                    _fun25127_ip = 318;
                    continue _fun25127
                }
            case 69:
                var0 = var6.paymentSourcePrices;
                var12 = var0[var10];
                if (!(var2 != var12)) {
                    _fun25127_ip = 99;
                    continue _fun25127
                }
            case 83:
                var4 = var12.length;
                var0 = 0;
                if (!(var0 !== var4)) {
                    _fun25127_ip = 318;
                    continue _fun25127
                }
            case 97:
                return var12;
            case 99:
                var8 = _closure1_slot54;
                var7 = var8.info;
                var0 = global;
                var13 = var0.JSON;
                var9 = var13.stringify;
                var15 = var0.Object;
                var14 = var15.keys;
                var4 = var6.paymentSourcePrices;
                var4 = var14.bind(var15)(var4);
                var13 = var9.bind(var13)(var4);
                var4 = var0.HermesInternal;
                var9 = var4.concat;
                var4 = 'Payment sources IDs: ';
                var4 = var9.bind(var4)(var13);
                var4 = var7.bind(var8)(var4);
                var8 = _closure1_slot54;
                var7 = var8.info;
                var4 = var0.HermesInternal;
                var9 = var4.concat;
                var4 = 'prices: ';
                var4 = var9.bind(var4)(var12);
                var4 = var7.bind(var8)(var4);
                var7 = var0.Error;
                var0 = var7.prototype;
                var4 = Object.create(var0, {
                    constructor: {
                        value: var7
                    }
                });
                var17 = 'Missing prices for payment source on subscription plan';
                var18 = var4;
                var0 = new var18[var7](var17, var16);
                var8 = var0 instanceof Object ? var0 : var4;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 12;
                var0 = var7[var0];
                var7 = var4.bind(var3)(var0);
                var4 = var7.captureBillingException;
                var0 = {};
                var9 = {};
                var9.paymentSourceId = var10;
                var0.extra = var9;
                var9 = {};
                var10 = var11.toString;
                var10 = var10.bind(var11)();
                var9.purchaseType = var10;
                var9.planId = var5;
                var0.tags = var9;
                var0 = var4.bind(var7)(var8, var0);
            case 318:
                var0 = var6.countryPrices;
                var0 = var0.prices;
                if (!(var2 != var0)) {
                    _fun25127_ip = 348;
                    continue _fun25127
                }
            case 334:
                var0 = var6.countryPrices;
                var0 = var0.prices;
                return var0;
            case 348:
                var7 = _closure1_slot54;
                var4 = var7.info;
                var0 = global;
                var9 = var0.JSON;
                var8 = var9.stringify;
                var2 = var6.countryPrices;
                var9 = var8.bind(var9)(var2);
                var2 = var0.HermesInternal;
                var8 = var2.concat;
                var2 = 'countryPrices: ';
                var2 = var8.bind(var2)(var9);
                var2 = var4.bind(var7)(var2);
                var4 = var0.Error;
                var0 = var4.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var17 = 'Missing prices for country';
                var18 = var2;
                var0 = new var18[var4](var17, var16);
                var0 = var0 instanceof Object ? var0 : var2;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.captureBillingException;
                var1 = {};
                var4 = {};
                var6 = var6.countryPrices;
                var6 = var6.countryCode;
                var4.countryCode = var6;
                var4.planId = var5;
                var1.tags = var4;
                var1 = var2.bind(var3)(var0, var1);
                throw var0;
        }
    };
    var _closure1_slot65 = var64;
    var63 = function arg0() {
        _fun25128: for (var _fun25128_ip = 0;;) switch (_fun25128_ip) {
            case 0:
                var12 = arg0;
                var0 = arguments[1];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun25128_ip = 37;
                    continue _fun25128
                }
            case 14:
                var2 = {};
                var3 = _closure1_slot12;
                var3 = var3.DEFAULT;
                var2.purchaseType = var3;
                var0 = var2;
            case 37:
                var11 = var0.paymentSourceId;
                var10 = var0.purchaseType;
                var4 = var0.currency;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot65;
                var0 = {};
                var0.paymentSourceId = var11;
                var0.purchaseType = var10;
                var3 = var3.bind(var5)(var12, var0);
                var5 = var3.length;
                var0 = 0;
                if (!(var0 === var5)) {
                    _fun25128_ip = 153;
                    continue _fun25128
                }
            case 95:
                var6 = _closure1_slot54;
                var5 = var6.warn;
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var18 = 'No prices found for planId: ';
                var16 = ', paymentSourceId: ';
                var14 = ', purchaseType: ';
                var17 = var12;
                var15 = var11;
                var13 = var10;
                var2 = var18[var9](var17, var16, var15, var14, var13, var12);
                var2 = var5.bind(var6)(var2);
            case 153:
                var2 = null;
                if (!(var2 == var4)) {
                    _fun25128_ip = 165;
                    continue _fun25128
                }
            case 159:
                var0 = var3[var0];
                _fun25128_ip = 180;
                continue _fun25128;
            case 165:
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.currency;
                    var2 = _closure2_slot0;
                    var0 = var2.toLowerCase;
                    var0 = var0.bind(var2)();
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 180:
                return var0;
        }
    };
    var _closure1_slot66 = var63;
    var62 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.amount;
        var0.amount = var2;
        var2 = var1.currency;
        var0.currency = var2;
        var1 = var1.exponent;
        var0.exponent = var1;
        return var0;
    };
    var _closure1_slot67 = var62;
    var61 = function arg0, arg1, arg2() {
        _fun25131: for (var _fun25131_ip = 0;;) switch (_fun25131_ip) {
            case 0:
                var4 = arg0;
                var10 = arg1;
                var9 = arg2;
                var2 = {
                    'currency': null,
                    'amount': 0,
                    'tax': 0,
                    'taxInclusive': false
                };
                var2.currency = var10;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.getBaseSubscriptionItemForSubscriptionItems;
                var3 = var3.bind(var5)(var4);
                var5 = null;
                var5 = var5 != var3;
                var11 = undefined;
                if (!var5) {
                    _fun25131_ip = 96;
                    continue _fun25131
                }
            case 76:
                var5 = _closure1_slot43;
                var3 = var3.planId;
                var3 = var5[var3];
                var11 = var3.premiumType;
            case 96:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 14;
                var7 = var6[var3];
                var13 = var5.bind(var1)(var7);
                var12 = var13.isPremiumAtLeast;
                var7 = _closure1_slot39;
                var7 = var7.TIER_0;
                var7 = var12.bind(var13)(var11, var7);
                var3 = var6[var3];
                var6 = var5.bind(var1)(var3);
                var5 = var6.isPremiumAtLeast;
                var3 = _closure1_slot39;
                var3 = var3.TIER_2;
                var6 = var5.bind(var6)(var11, var3);
                var3 = _closure1_slot59;
                var5 = var3.bind(var1)(var4);
                var4 = var5.bind(var1)();
                var3 = var4.done;
                if (var3) {
                    _fun25131_ip = 372;
                    continue _fun25131
                }
            case 193:
                var3 = var4.value;
                var13 = _closure1_slot31;
                var12 = var13.has;
                var11 = var3.planId;
                var11 = var12.bind(var13)(var11);
                var14 = var6;
                if (var11) {
                    _fun25131_ip = 256;
                    continue _fun25131
                }
            case 224:
                var13 = _closure1_slot32;
                var12 = var13.has;
                var11 = var3.planId;
                var11 = var12.bind(var13)(var11);
                var11 = !var11;
                if (!var11) {
                    _fun25131_ip = 253;
                    continue _fun25131
                }
            case 250:
                var11 = var7;
            case 253:
                var14 = var11;
            case 256:
                if (!(var1 !== var9)) {
                    _fun25131_ip = 298;
                    continue _fun25131
                }
            case 260:
                var13 = _closure1_slot63;
                var19 = var3.planId;
                var11 = {};
                var11.paymentSourceId = var9;
                var11.currency = var10;
                var20 = undefined;
                var18 = var14;
                var17 = false;
                var16 = var11;
                var12 = var20[var13](var19, var18, var17, var16, var15);
                _fun25131_ip = 322;
                continue _fun25131;
            case 298:
                var13 = _closure1_slot62;
                var19 = var3.planId;
                var20 = undefined;
                var18 = var14;
                var17 = false;
                var16 = var10;
                var12 = var20[var13](var19, var18, var17, var16, var15);
            case 322:
                var11 = var2.amount;
                var12 = var12.amount;
                var3 = var3.quantity;
                var3 = var12 * var3;
                var3 = var11 + var3;
                var2.amount = var3;
                var11 = var5.bind(var1)();
                var3 = var11.done;
                var4 = var11;
                if (!var3) {
                    _fun25131_ip = 193;
                    continue _fun25131
                }
            case 372:
                var0 = _closure1_slot67;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot68 = var61;
    var60 = function arg0() {
        _fun25132: for (var _fun25132_ip = 0;;) switch (_fun25132_ip) {
            case 0:
                var6 = arg0;
                var0 = _closure1_slot43;
                var1 = var0[var6];
                var0 = null;
                if (!(var0 == var1)) {
                    _fun25132_ip = 104;
                    continue _fun25132
                }
            case 20:
                var0 = global;
                var4 = var0.Error;
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = 'Unsupported plan';
                var9 = var3;
                var0 = new var9[var4](var8, var7);
                var0 = var0 instanceof Object ? var0 : var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.captureBillingException;
                var2 = {};
                var5 = {};
                var5.planId = var6;
                var2.tags = var5;
                var2 = var3.bind(var4)(var0, var2);
                throw var0;
            case 104:
                var0 = {};
                var2 = var1.interval;
                var0.intervalType = var2;
                var1 = var1.intervalCount;
                var0.intervalCount = var1;
                return var0;
        }
    };
    var59 = function arg0, arg1, arg2() {
        _fun25133: for (var _fun25133_ip = 0;;) switch (_fun25133_ip) {
            case 0:
                var4 = arg0;
                var9 = arguments[3];
                var2 = arguments[4];
                var3 = arguments[5];
                var5 = undefined;
                if (!(var9 === var5)) {
                    _fun25133_ip = 21;
                    continue _fun25133
                }
            case 18:
                var9 = 1;
            case 21:
                if (!(var2 === var5)) {
                    _fun25133_ip = 27;
                    continue _fun25133
                }
            case 25:
                var2 = false;
            case 27:
                if (!(var3 === var5)) {
                    _fun25133_ip = 44;
                    continue _fun25133
                }
            case 31:
                var0 = _closure1_slot39;
                var3 = var0.TIER_2;
            case 44:
                var0 = arg1;
                if (var0) {
                    _fun25133_ip = 321;
                    continue _fun25133
                }
            case 53:
                var0 = arg2;
                if (var0) {
                    _fun25133_ip = 321;
                    continue _fun25133
                }
            case 62:
                var0 = _closure1_slot42;
                var0 = var0.MONTH;
                if (!(var0 !== var4)) {
                    _fun25133_ip = 188;
                    continue _fun25133
                }
            case 79:
                var0 = _closure1_slot42;
                var0 = var0.YEAR;
                if (!(var0 !== var4)) {
                    _fun25133_ip = 129;
                    continue _fun25133
                }
            case 93:
                var0 = global;
                var7 = var0.Error;
                var0 = var7.prototype;
                var6 = Object.create(var0, {
                    constructor: {
                        value: var7
                    }
                });
                var14 = 'Unexpected interval';
                var15 = var6;
                var0 = new var15[var7](var14, var13);
                var0 = var0 instanceof Object ? var0 : var6;
                throw var0;
            case 129:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 16;
                var6 = var10[var0];
                var6 = var8.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var0 = var10[var0];
                var0 = var8.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0["/Q4HRN"];
                var0 = var6.bind(var7)(var0);
                return var0;
            case 188:
                var0 = 1;
                if (!(var0 === var9)) {
                    _fun25133_ip = 254;
                    continue _fun25133
                }
            case 195:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 16;
                var6 = var10[var0];
                var6 = var8.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var0 = var10[var0];
                var0 = var8.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.DKzs96;
                var0 = var6.bind(var7)(var0);
                _fun25133_ip = 319;
                continue _fun25133;
            case 254:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 16;
                var7 = var10[var1];
                var7 = var6.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var1 = var10[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var6 = var1["0UlZnH"];
                var1 = {};
                var1.intervalCount = var9;
                var0 = var7.bind(var8)(var6, var1);
            case 319:
                return var0;
            case 321:
                var0 = _closure1_slot42;
                var0 = var0.MONTH;
                if (!(var0 !== var4)) {
                    _fun25133_ip = 615;
                    continue _fun25133
                }
            case 341:
                var0 = _closure1_slot42;
                var0 = var0.YEAR;
                if (!(var0 !== var4)) {
                    _fun25133_ip = 391;
                    continue _fun25133
                }
            case 355:
                var0 = global;
                var6 = var0.Error;
                var0 = var6.prototype;
                var4 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var14 = 'Unexpected interval';
                var15 = var4;
                var0 = new var15[var6](var14, var13);
                var0 = var0 instanceof Object ? var0 : var4;
                throw var0;
            case 391:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var9 = 16;
                var0 = var0[var9];
                var0 = var4.bind(var5)(var0);
                var7 = var0.intl;
                var6 = var7.formatToPlainString;
                var0 = _closure1_slot39;
                var0 = var0.TIER_0;
                if (!(var3 !== var0)) {
                    _fun25133_ip = 465;
                    continue _fun25133
                }
            case 435:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var4 = var0.poEovT;
                _fun25133_ip = 493;
                continue _fun25133;
            case 465:
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var0 = var8.bind(var5)(var0);
                var0 = var0.t;
                var4 = var0.NPKsLz;
            case 493:
                var0 = {};
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = var8[var9];
                var10 = var12.bind(var5)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var8[var9];
                var8 = var12.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.tfqrhj;
                var8 = var10.bind(var11)(var8);
                var0.timeInterval = var8;
                var0 = var6.bind(var7)(var4, var0);
                if (var2) {
                    _fun25133_ip = 613;
                    continue _fun25133
                }
            case 561:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = var4[var9];
                var6 = var8.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var4[var9];
                var4 = var8.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.DRgqMo;
                var0 = var6.bind(var7)(var4);
            case 613:
                return var0;
            case 615:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 16;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var7 = var0.intl;
                var4 = var7.formatToPlainString;
                var0 = _closure1_slot39;
                var0 = var0.TIER_0;
                if (!(var3 !== var0)) {
                    _fun25133_ip = 689;
                    continue _fun25133
                }
            case 659:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var3.bind(var5)(var0);
                var0 = var0.t;
                var3 = var0.poEovT;
                _fun25133_ip = 717;
                continue _fun25133;
            case 689:
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var8.bind(var5)(var0);
                var0 = var0.t;
                var3 = var0.NPKsLz;
            case 717:
                var0 = {};
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var6];
                var9 = var11.bind(var5)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var6];
                var8 = var11.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.FPybU7;
                var8 = var9.bind(var10)(var8);
                var0.timeInterval = var8;
                var0 = var4.bind(var7)(var3, var0);
                if (var2) {
                    _fun25133_ip = 837;
                    continue _fun25133
                }
            case 785:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.Mh9bTt;
                var0 = var2.bind(var3)(var1);
            case 837:
                return var0;
        }
    };
    var58 = function arg0() {
        _fun25134: for (var _fun25134_ip = 0;;) switch (_fun25134_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot42;
                var1 = var1.MONTH;
                if (!(var1 !== var2)) {
                    _fun25134_ip = 129;
                    continue _fun25134
                }
            case 20:
                var1 = _closure1_slot42;
                var1 = var1.YEAR;
                if (!(var1 !== var2)) {
                    _fun25134_ip = 70;
                    continue _fun25134
                }
            case 34:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = 'Unexpected interval';
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 70:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.tfqrhj;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 129:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 16;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.FPybU7;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot69 = var58;
    var57 = function arg0() {
        _fun25135: for (var _fun25135_ip = 0;;) switch (_fun25135_ip) {
            case 0:
                var6 = arg0;
                var0 = _closure1_slot43;
                var0 = var0[var6];
                var1 = null;
                if (!(var1 == var0)) {
                    _fun25135_ip = 104;
                    continue _fun25135
                }
            case 20:
                var1 = global;
                var4 = var1.Error;
                var1 = var4.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = 'Unsupported plan';
                var9 = var3;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.captureBillingException;
                var2 = {};
                var5 = {};
                var5.planId = var6;
                var2.tags = var5;
                var2 = var3.bind(var4)(var1, var2);
                throw var1;
            case 104:
                var0 = var0.premiumType;
                return var0;
        }
    };
    var _closure1_slot70 = var57;
    var56 = function arg0() {
        _fun25136: for (var _fun25136_ip = 0;;) switch (_fun25136_ip) {
            case 0:
                var10 = arg0;
                var3 = arguments[1];
                var0 = arguments[2];
                var5 = arguments[3];
                var6 = undefined;
                if (!(var3 === var6)) {
                    _fun25136_ip = 20;
                    continue _fun25136
                }
            case 18:
                var3 = false;
            case 20:
                if (!(var0 === var6)) {
                    _fun25136_ip = 26;
                    continue _fun25136
                }
            case 24:
                var0 = false;
            case 26:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_MONTH_TIER_0;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 1457;
                    continue _fun25136
                }
            case 46:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_YEAR_TIER_0;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 1336;
                    continue _fun25136
                }
            case 63:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_MONTH_TIER_1;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 1259;
                    continue _fun25136
                }
            case 80:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_YEAR_TIER_1;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 1182;
                    continue _fun25136
                }
            case 97:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_MONTH_TIER_2;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 1065;
                    continue _fun25136
                }
            case 114:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_GROUP_MONTH;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 992;
                    continue _fun25136
                }
            case 131:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_YEAR_TIER_2;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 871;
                    continue _fun25136
                }
            case 148:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_3_MONTH_TIER_2;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 812;
                    continue _fun25136
                }
            case 165:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_6_MONTH_TIER_2;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 753;
                    continue _fun25136
                }
            case 182:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_MONTH_GUILD;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 676;
                    continue _fun25136
                }
            case 199:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_YEAR_GUILD;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 599;
                    continue _fun25136
                }
            case 216:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_3_MONTH_GUILD;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 540;
                    continue _fun25136
                }
            case 233:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_6_MONTH_GUILD;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 481;
                    continue _fun25136
                }
            case 250:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_MONTH_LEGACY;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 422;
                    continue _fun25136
                }
            case 267:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_YEAR_LEGACY;
                if (!(var2 !== var10)) {
                    _fun25136_ip = 363;
                    continue _fun25136
                }
            case 281:
                var2 = global;
                var7 = var2.Error;
                var2 = var7.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var14 = 'Unsupported plan';
                var15 = var4;
                var2 = new var15[var7](var14, var13);
                var2 = var2 instanceof Object ? var2 : var4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 12;
                var4 = var8[var4];
                var8 = var7.bind(var6)(var4);
                var7 = var8.captureBillingException;
                var4 = {};
                var9 = {};
                var9.planId = var10;
                var4.tags = var9;
                var4 = var7.bind(var8)(var2, var4);
                throw var2;
            case 363:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var4 = var9[var2];
                var4 = var8.bind(var6)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.LtJgTC;
                var2 = var4.bind(var7)(var2);
                return var2;
            case 422:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var4 = var9[var2];
                var4 = var8.bind(var6)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.PD6k79;
                var2 = var4.bind(var7)(var2);
                return var2;
            case 481:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var4 = var9[var2];
                var4 = var8.bind(var6)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.X2KDO2;
                var2 = var4.bind(var7)(var2);
                return var2;
            case 540:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var4 = var9[var2];
                var4 = var8.bind(var6)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.EZHHB6;
                var2 = var4.bind(var7)(var2);
                return var2;
            case 599:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var7 = var9[var2];
                var7 = var4.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var9[var2];
                var2 = var4.bind(var6)(var2);
                var4 = var2.t;
                if (var0) {
                    _fun25136_ip = 661;
                    continue _fun25136
                }
            case 646:
                var2 = var4.ZHkls0;
                var2 = var7.bind(var8)(var2);
                _fun25136_ip = 674;
                continue _fun25136;
            case 661:
                var4 = var4.YDpAzZ;
                var2 = var7.bind(var8)(var4);
            case 674:
                return var2;
            case 676:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var7 = var9[var2];
                var7 = var4.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var9[var2];
                var2 = var4.bind(var6)(var2);
                var4 = var2.t;
                if (var0) {
                    _fun25136_ip = 738;
                    continue _fun25136
                }
            case 723:
                var2 = var4["h80cx/"];
                var2 = var7.bind(var8)(var2);
                _fun25136_ip = 751;
                continue _fun25136;
            case 738:
                var4 = var4["6ZR3By"];
                var2 = var7.bind(var8)(var4);
            case 751:
                return var2;
            case 753:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var4 = var9[var2];
                var4 = var8.bind(var6)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2["e3/ArU"];
                var2 = var4.bind(var7)(var2);
                return var2;
            case 812:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var4 = var9[var2];
                var4 = var8.bind(var6)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.wCbINr;
                var2 = var4.bind(var7)(var2);
                return var2;
            case 871:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 16;
                var2 = var10[var4];
                var2 = var7.bind(var6)(var2);
                var9 = var2.intl;
                if (var3) {
                    _fun25136_ip = 951;
                    continue _fun25136
                }
            case 899:
                var11 = var9.string;
                var2 = var10[var4];
                var2 = var7.bind(var6)(var2);
                var8 = var2.t;
                if (var0) {
                    _fun25136_ip = 936;
                    continue _fun25136
                }
            case 921:
                var2 = var8["cfu/5d"];
                var2 = var11.bind(var9)(var2);
                _fun25136_ip = 949;
                continue _fun25136;
            case 936:
                var8 = var8.JIq4O1;
                var2 = var11.bind(var9)(var8);
            case 949:
                _fun25136_ip = 990;
                continue _fun25136;
            case 951:
                var8 = var9.format;
                var4 = var10[var4];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var7 = var4["1wBcPi"];
                var4 = {};
                var4.duration = var5;
                var2 = var8.bind(var9)(var7, var4);
            case 990:
                return var2;
            case 992:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var7 = var9[var2];
                var7 = var4.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var9[var2];
                var2 = var4.bind(var6)(var2);
                var4 = var2.t;
                if (var0) {
                    _fun25136_ip = 1052;
                    continue _fun25136
                }
            case 1039:
                var2 = var4.FKYNC6;
                var2 = var7.bind(var8)(var2);
                _fun25136_ip = 1063;
                continue _fun25136;
            case 1052:
                var4 = var4.SmVbHc;
                var2 = var7.bind(var8)(var4);
            case 1063:
                return var2;
            case 1065:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 16;
                var2 = var10[var4];
                var2 = var7.bind(var6)(var2);
                var9 = var2.intl;
                if (var3) {
                    _fun25136_ip = 1141;
                    continue _fun25136
                }
            case 1093:
                var11 = var9.string;
                var2 = var10[var4];
                var2 = var7.bind(var6)(var2);
                var8 = var2.t;
                if (var0) {
                    _fun25136_ip = 1128;
                    continue _fun25136
                }
            case 1115:
                var2 = var8.FKYNC6;
                var2 = var11.bind(var9)(var2);
                _fun25136_ip = 1139;
                continue _fun25136;
            case 1128:
                var8 = var8.SmVbHc;
                var2 = var11.bind(var9)(var8);
            case 1139:
                _fun25136_ip = 1180;
                continue _fun25136;
            case 1141:
                var8 = var9.format;
                var4 = var10[var4];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var7 = var4.aI6QXz;
                var4 = {};
                var4.duration = var5;
                var2 = var8.bind(var9)(var7, var4);
            case 1180:
                return var2;
            case 1182:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var7 = var9[var2];
                var7 = var4.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var9[var2];
                var2 = var4.bind(var6)(var2);
                var4 = var2.t;
                if (var0) {
                    _fun25136_ip = 1244;
                    continue _fun25136
                }
            case 1229:
                var2 = var4.Md5xbi;
                var2 = var7.bind(var8)(var2);
                _fun25136_ip = 1257;
                continue _fun25136;
            case 1244:
                var4 = var4.pdZJaq;
                var2 = var7.bind(var8)(var4);
            case 1257:
                return var2;
            case 1259:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var7 = var9[var2];
                var7 = var4.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var9[var2];
                var2 = var4.bind(var6)(var2);
                var4 = var2.t;
                if (var0) {
                    _fun25136_ip = 1321;
                    continue _fun25136
                }
            case 1306:
                var2 = var4["7O6qSq"];
                var2 = var7.bind(var8)(var2);
                _fun25136_ip = 1334;
                continue _fun25136;
            case 1321:
                var4 = var4["g/dH5g"];
                var2 = var7.bind(var8)(var4);
            case 1334:
                return var2;
            case 1336:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 16;
                var2 = var10[var4];
                var2 = var7.bind(var6)(var2);
                var9 = var2.intl;
                if (var3) {
                    _fun25136_ip = 1416;
                    continue _fun25136
                }
            case 1364:
                var11 = var9.string;
                var2 = var10[var4];
                var2 = var7.bind(var6)(var2);
                var8 = var2.t;
                if (var0) {
                    _fun25136_ip = 1401;
                    continue _fun25136
                }
            case 1386:
                var2 = var8.eoVuBn;
                var2 = var11.bind(var9)(var2);
                _fun25136_ip = 1414;
                continue _fun25136;
            case 1401:
                var8 = var8.UvzqY1;
                var2 = var11.bind(var9)(var8);
            case 1414:
                _fun25136_ip = 1455;
                continue _fun25136;
            case 1416:
                var8 = var9.format;
                var4 = var10[var4];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var7 = var4.eqRhC7;
                var4 = {};
                var4.duration = var5;
                var2 = var8.bind(var9)(var7, var4);
            case 1455:
                return var2;
            case 1457:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var4 = var7[var1];
                var4 = var2.bind(var6)(var4);
                var4 = var4.intl;
                if (var3) {
                    _fun25136_ip = 1537;
                    continue _fun25136
                }
            case 1485:
                var8 = var4.string;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var3 = var3.t;
                if (var0) {
                    _fun25136_ip = 1522;
                    continue _fun25136
                }
            case 1507:
                var0 = var3["0efVPy"];
                var0 = var8.bind(var4)(var0);
                _fun25136_ip = 1535;
                continue _fun25136;
            case 1522:
                var3 = var3["81iAgs"];
                var0 = var8.bind(var4)(var3);
            case 1535:
                _fun25136_ip = 1576;
                continue _fun25136;
            case 1537:
                var3 = var4.format;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1.TZXHNj;
                var1 = {};
                var1.duration = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1576:
                return var0;
        }
    };
    var _closure1_slot71 = var56;
    var55 = function arg0() {
        _fun25137: for (var _fun25137_ip = 0;;) switch (_fun25137_ip) {
            case 0:
                var8 = arg0;
                var1 = _closure1_slot43;
                var2 = var1[var8];
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var5 = undefined;
                if (var4) {
                    _fun25137_ip = 33;
                    continue _fun25137
                }
            case 27:
                var5 = var2.premiumType;
            case 33:
                var4 = var1 != var5;
                var2 = null;
                if (!var4) {
                    _fun25137_ip = 50;
                    continue _fun25137
                }
            case 42:
                var4 = _closure1_slot37;
                var2 = var4[var5];
            case 50:
                if (!(var1 == var2)) {
                    _fun25137_ip = 136;
                    continue _fun25137
                }
            case 54:
                var1 = global;
                var5 = var1.Error;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = 'Unsupported plan';
                var11 = var4;
                var1 = new var11[var5](var10, var9);
                var1 = var1 instanceof Object ? var1 : var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 12;
                var4 = var6[var4];
                var6 = var5.bind(var3)(var4);
                var5 = var6.captureBillingException;
                var4 = {};
                var7 = {};
                var7.planId = var8;
                var4.tags = var7;
                var4 = var5.bind(var6)(var1, var4);
                throw var1;
            case 136:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.intl;
                var0 = var1.string;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var75 = function arg0() {
        _fun25138: for (var _fun25138_ip = 0;;) switch (_fun25138_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.subscription;
                var16 = var0.planId;
                var6 = var0.price;
                var9 = var0.includePremiumGuilds;
                var15 = var0.hasDiscountApplied;
                var23 = var0.activeDiscountInfo;
                var1 = var0.renewalInvoicePreview;
                var5 = var0.hasFractionalPremiumWithSub;
                var0 = _closure1_slot43;
                var0 = var0[var16];
                var4 = _closure1_slot95;
                var8 = _closure1_slot62;
                var3 = var0.id;
                var7 = undefined;
                var3 = var8.bind(var7)(var3);
                var0 = var0.interval;
                var21 = var4.bind(var7)(var3, var0);
                var0 = _closure1_slot85;
                var8 = var0.bind(var7)(var12);
                if (var8) {
                    _fun25138_ip = 173;
                    continue _fun25138
                }
            case 108:
                var0 = var12.paymentSourceId;
                var3 = null;
                var0 = var3 == var0;
                if (!var0) {
                    _fun25138_ip = 132;
                    continue _fun25138
                }
            case 123:
                var4 = var12.isPurchasedExternally;
                var0 = !var4;
            case 132:
                if (!var0) {
                    _fun25138_ip = 170;
                    continue _fun25138
                }
            case 135:
                var10 = _closure1_slot5;
                var4 = var10.getCurrentUser;
                var10 = var4.bind(var10)();
                var3 = var3 != var10;
                if (!var3) {
                    _fun25138_ip = 167;
                    continue _fun25138
                }
            case 155:
                var4 = var10.hasFreePremium;
                var3 = var4.bind(var10)();
            case 167:
                var0 = !var3;
            case 170:
                var8 = var0;
            case 173:
                var3 = null;
                var0 = var3 != var6;
                if (!var0) {
                    _fun25138_ip = 192;
                    continue _fun25138
                }
            case 182:
                var4 = var12.paymentGateway;
                var0 = var3 == var4;
            case 192:
                var10 = var12.status;
                var4 = _closure1_slot13;
                var4 = var4.UNPAID;
                var4 = var10 === var4;
                if (!var4) {
                    _fun25138_ip = 224;
                    continue _fun25138
                }
            case 214:
                var10 = var12.latestInvoice;
                var4 = var3 !== var10;
            case 224:
                if (!var4) {
                    _fun25138_ip = 261;
                    continue _fun25138
                }
            case 227:
                var10 = var12.latestInvoice;
                var13 = var3 == var10;
                var11 = undefined;
                if (var13) {
                    _fun25138_ip = 247;
                    continue _fun25138
                }
            case 242:
                var11 = var10.status;
            case 247:
                var10 = _closure1_slot10;
                var10 = var10.OPEN;
                var4 = var11 === var10;
            case 261:
                if (var8) {
                    _fun25138_ip = 286;
                    continue _fun25138
                }
            case 264:
                if (var4) {
                    _fun25138_ip = 274;
                    continue _fun25138
                }
            case 267:
                var10 = var12.status;
                _fun25138_ip = 284;
                continue _fun25138;
            case 274:
                var4 = _closure1_slot13;
                var10 = var4.UNPAID;
            case 284:
                _fun25138_ip = 296;
                continue _fun25138;
            case 286:
                var4 = _closure1_slot13;
                var10 = var4.CANCELED;
            case 296:
                var8 = var3 == var1;
                var4 = undefined;
                if (var8) {
                    _fun25138_ip = 311;
                    continue _fun25138
                }
            case 305:
                var4 = var1.taxInclusive;
            case 311:
                if (!(var3 == var4)) {
                    _fun25138_ip = 339;
                    continue _fun25138
                }
            case 315:
                var8 = var12.latestInvoice;
                var11 = var3 == var8;
                var1 = undefined;
                if (var11) {
                    _fun25138_ip = 336;
                    continue _fun25138
                }
            case 330:
                var1 = var8.taxInclusive;
            case 336:
                var4 = var1;
            case 339:
                var1 = var3 == var4;
                if (var1) {
                    _fun25138_ip = 349;
                    continue _fun25138
                }
            case 346:
                var1 = var4;
            case 349:
                var8 = _closure1_slot27;
                var4 = 0;
                if (!var9) {
                    _fun25138_ip = 373;
                    continue _fun25138
                }
            case 358:
                var11 = _closure1_slot74;
                var9 = var12.additionalPlans;
                var4 = var11.bind(var7)(var9);
            case 373:
                var19 = var8 + var4;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var8 = 16;
                var4 = var9[var8];
                var4 = var11.bind(var7)(var4);
                var18 = var4.intl;
                if (var0) {
                    _fun25138_ip = 439;
                    continue _fun25138
                }
            case 405:
                var13 = var18.string;
                var4 = var9[var8];
                var4 = var11.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.zYx3Y6;
                var4 = var13.bind(var18)(var4);
                _fun25138_ip = 508;
                continue _fun25138;
            case 439:
                var17 = var18.format;
                var9 = var9[var8];
                var9 = var11.bind(var7)(var9);
                var11 = var9.t;
                if (var1) {
                    _fun25138_ip = 484;
                    continue _fun25138
                }
            case 461:
                var13 = var11.NUkcpF;
                var9 = {};
                var9.price = var6;
                var9 = var17.bind(var18)(var13, var9);
                _fun25138_ip = 505;
                continue _fun25138;
            case 484:
                var13 = var11["cd+hqB"];
                var11 = {};
                var11.price = var6;
                var9 = var17.bind(var18)(var13, var11);
            case 505:
                var4 = var9;
            case 508:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = var11[var8];
                var9 = var13.bind(var7)(var9);
                var20 = var9.intl;
                if (var0) {
                    _fun25138_ip = 567;
                    continue _fun25138
                }
            case 533:
                var17 = var20.string;
                var9 = var11[var8];
                var9 = var13.bind(var7)(var9);
                var9 = var9.t;
                var9 = var9["8rSipI"];
                var9 = var17.bind(var20)(var9);
                _fun25138_ip = 636;
                continue _fun25138;
            case 567:
                var18 = var20.format;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var13 = var11.t;
                if (var1) {
                    _fun25138_ip = 612;
                    continue _fun25138
                }
            case 589:
                var17 = var13.hJ5xEX;
                var11 = {};
                var11.price = var6;
                var11 = var18.bind(var20)(var17, var11);
                _fun25138_ip = 633;
                continue _fun25138;
            case 612:
                var17 = var13.VsKcFB;
                var13 = {};
                var13.price = var6;
                var11 = var18.bind(var20)(var17, var13);
            case 633:
                var9 = var11;
            case 636:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var17 = var11[var8];
                var17 = var13.bind(var7)(var17);
                var22 = var17.intl;
                var20 = var22.format;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var17 = var11.t;
                if (var0) {
                    _fun25138_ip = 703;
                    continue _fun25138
                }
            case 680:
                var13 = var17["U+z/HJ"];
                var11 = {};
                var11.num = var19;
                var11 = var20.bind(var22)(var13, var11);
                _fun25138_ip = 763;
                continue _fun25138;
            case 703:
                if (var1) {
                    _fun25138_ip = 734;
                    continue _fun25138
                }
            case 706:
                var18 = var17.tTNE8M;
                var13 = {};
                var13.price = var6;
                var13.num = var19;
                var13 = var20.bind(var22)(var18, var13);
                _fun25138_ip = 760;
                continue _fun25138;
            case 734:
                var18 = var17["jRy6/J"];
                var17 = {};
                var17.price = var6;
                var17.num = var19;
                var13 = var20.bind(var22)(var18, var17);
            case 760:
                var11 = var13;
            case 763:
                var13 = _closure1_slot44;
                var13 = var13.PREMIUM_MONTH_TIER_0;
                if (!(var13 !== var16)) {
                    _fun25138_ip = 3035;
                    continue _fun25138
                }
            case 780:
                var13 = _closure1_slot44;
                var13 = var13.PREMIUM_YEAR_TIER_0;
                if (!(var13 !== var16)) {
                    _fun25138_ip = 3035;
                    continue _fun25138
                }
            case 797:
                var13 = _closure1_slot44;
                var13 = var13.PREMIUM_MONTH_TIER_1;
                if (!(var13 !== var16)) {
                    _fun25138_ip = 2232;
                    continue _fun25138
                }
            case 814:
                var13 = _closure1_slot44;
                var13 = var13.PREMIUM_YEAR_TIER_1;
                if (!(var13 !== var16)) {
                    _fun25138_ip = 2232;
                    continue _fun25138
                }
            case 831:
                var13 = _closure1_slot44;
                var13 = var13.PREMIUM_MONTH_TIER_2;
                if (!(var13 !== var16)) {
                    _fun25138_ip = 953;
                    continue _fun25138
                }
            case 845:
                var13 = _closure1_slot44;
                var13 = var13.PREMIUM_YEAR_TIER_2;
                if (!(var13 !== var16)) {
                    _fun25138_ip = 953;
                    continue _fun25138
                }
            case 859:
                var13 = _closure1_slot44;
                var13 = var13.PREMIUM_3_MONTH_TIER_2;
                if (!(var13 !== var16)) {
                    _fun25138_ip = 953;
                    continue _fun25138
                }
            case 873:
                var13 = _closure1_slot44;
                var13 = var13.PREMIUM_6_MONTH_TIER_2;
                if (!(var13 !== var16)) {
                    _fun25138_ip = 953;
                    continue _fun25138
                }
            case 887:
                var13 = _closure1_slot44;
                var13 = var13.PREMIUM_GROUP_MONTH;
                if (!(var13 !== var16)) {
                    _fun25138_ip = 953;
                    continue _fun25138
                }
            case 901:
                var13 = global;
                var18 = var13.Error;
                var13 = var13.HermesInternal;
                var17 = var13.concat;
                var13 = 'Invalid planId ';
                var26 = var17.bind(var13)(var16);
                var17 = var18.prototype;
                var17 = Object.create(var17, {
                    constructor: {
                        value: var18
                    }
                });
                var27 = var17;
                var13 = new var27[var18](var26, var25);
                var13 = var13 instanceof Object ? var13 : var17;
                throw var13;
            case 953:
                var13 = _closure1_slot13;
                var13 = var13.CANCELED;
                if (!(var13 !== var10)) {
                    _fun25138_ip = 2103;
                    continue _fun25138
                }
            case 970:
                var13 = _closure1_slot13;
                var13 = var13.ACCOUNT_HOLD;
                if (!(var13 !== var10)) {
                    _fun25138_ip = 1974;
                    continue _fun25138
                }
            case 987:
                var13 = _closure1_slot13;
                var13 = var13.UNPAID;
                if (!(var13 !== var10)) {
                    _fun25138_ip = 1910;
                    continue _fun25138
                }
            case 1004:
                var13 = _closure1_slot13;
                var13 = var13.PAUSE_PENDING;
                if (!(var13 !== var10)) {
                    _fun25138_ip = 1697;
                    continue _fun25138
                }
            case 1021:
                var13 = _closure1_slot13;
                var13 = var13.PAUSED;
                if (!(var13 !== var10)) {
                    _fun25138_ip = 1626;
                    continue _fun25138
                }
            case 1038:
                var13 = _closure1_slot13;
                var13 = var13.BILLING_RETRY;
                if (!(var13 !== var10)) {
                    _fun25138_ip = 1506;
                    continue _fun25138
                }
            case 1055:
                var13 = _closure1_slot13;
                var13 = var13.PAST_DUE;
                if (!(var13 !== var10)) {
                    _fun25138_ip = 1391;
                    continue _fun25138
                }
            case 1072:
                var13 = var11;
                if (!var15) {
                    _fun25138_ip = 1389;
                    continue _fun25138
                }
            case 1081:
                var15 = _closure1_slot44;
                var15 = var15.PREMIUM_YEAR_TIER_2;
                if (!(var16 !== var15)) {
                    _fun25138_ip = 1296;
                    continue _fun25138
                }
            case 1098:
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var17 = var15[var8];
                var17 = var16.bind(var7)(var17);
                var20 = var17.intl;
                var18 = var20.formatToPlainString;
                var15 = var15[var8];
                var15 = var16.bind(var7)(var15);
                var16 = var15.t;
                if (var1) {
                    _fun25138_ip = 1220;
                    continue _fun25138
                }
            case 1142:
                var17 = var16["G6+XOT"];
                var15 = {};
                var24 = var3 == var23;
                var22 = undefined;
                if (var24) {
                    _fun25138_ip = 1167;
                    continue _fun25138
                }
            case 1161:
                var22 = var23.percentage;
            case 1167:
                if (!(var3 == var22)) {
                    _fun25138_ip = 1175;
                    continue _fun25138
                }
            case 1171:
                var22 = _closure1_slot19;
            case 1175:
                var15.percent = var22;
                var15.regularPrice = var21;
                var24 = var3 == var23;
                var22 = undefined;
                if (var24) {
                    _fun25138_ip = 1199;
                    continue _fun25138
                }
            case 1194:
                var22 = var23.duration;
            case 1199:
                if (!(var3 == var22)) {
                    _fun25138_ip = 1207;
                    continue _fun25138
                }
            case 1203:
                var22 = _closure1_slot18;
            case 1207:
                var15.numMonths = var22;
                var15 = var18.bind(var20)(var17, var15);
                _fun25138_ip = 1294;
                continue _fun25138;
            case 1220:
                var17 = var16["3ZiutU"];
                var16 = {};
                var24 = var3 == var23;
                var22 = undefined;
                if (var24) {
                    _fun25138_ip = 1243;
                    continue _fun25138
                }
            case 1237:
                var22 = var23.percentage;
            case 1243:
                if (!(var3 == var22)) {
                    _fun25138_ip = 1251;
                    continue _fun25138
                }
            case 1247:
                var22 = _closure1_slot19;
            case 1251:
                var16.percent = var22;
                var16.regularPrice = var21;
                var24 = var3 == var23;
                var22 = undefined;
                if (var24) {
                    _fun25138_ip = 1275;
                    continue _fun25138
                }
            case 1270:
                var22 = var23.duration;
            case 1275:
                if (!(var3 == var22)) {
                    _fun25138_ip = 1283;
                    continue _fun25138
                }
            case 1279:
                var22 = _closure1_slot18;
            case 1283:
                var16.numMonths = var22;
                var15 = var18.bind(var20)(var17, var16);
            case 1294:
                _fun25138_ip = 1386;
                continue _fun25138;
            case 1296:
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var18 = var16[var8];
                var18 = var17.bind(var7)(var18);
                var20 = var18.intl;
                var18 = var20.format;
                var16 = var16[var8];
                var16 = var17.bind(var7)(var16);
                var16 = var16.t;
                var17 = var16["+qqh6g"];
                var16 = {};
                var24 = var3 == var23;
                var22 = undefined;
                if (var24) {
                    _fun25138_ip = 1362;
                    continue _fun25138
                }
            case 1356:
                var22 = var23.percentage;
            case 1362:
                if (!(var3 == var22)) {
                    _fun25138_ip = 1370;
                    continue _fun25138
                }
            case 1366:
                var22 = _closure1_slot14;
            case 1370:
                var16.percent = var22;
                var16.regularPrice = var21;
                var15 = var18.bind(var20)(var17, var16);
            case 1386:
                var13 = var15;
            case 1389:
                return var13;
            case 1391:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var13 = var21[var8];
                var13 = var20.bind(var7)(var13);
                var17 = var13.intl;
                var16 = var17.format;
                var13 = var21[var8];
                var13 = var20.bind(var7)(var13);
                var13 = var13.t;
                var15 = var13["d+0vwo"];
                var13 = {};
                var18 = 18;
                var18 = var21[var18];
                var22 = var20.bind(var7)(var18);
                var21 = var22.dateFormat;
                var18 = _closure1_slot78;
                var18 = var18.bind(var7)(var12);
                var20 = var18.expiresDate;
                var18 = 'LL';
                var18 = var21.bind(var22)(var20, var18);
                var13.endDate = var18;
                var18 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = 'https://support.discord.com/hc/articles/23082866222871';
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13.onClick = var18;
                var13 = var16.bind(var17)(var15, var13);
                return var13;
            case 1506:
                var15 = _closure1_slot0;
                var21 = _closure1_slot2;
                var13 = var21[var8];
                var13 = var15.bind(var7)(var13);
                var17 = var13.intl;
                var16 = var17.format;
                var13 = var21[var8];
                var13 = var15.bind(var7)(var13);
                var13 = var13.t;
                var15 = var13["IlJ/HV"];
                var13 = {};
                var20 = _closure1_slot1;
                var18 = 17;
                var18 = var21[var18];
                var20 = var20.bind(var7)(var18);
                var18 = var12.currentPeriodStart;
                var22 = var20.bind(var7)(var18);
                var21 = var22.add;
                var20 = _closure1_slot29;
                var18 = 'days';
                var20 = var21.bind(var22)(var20, var18);
                var18 = var20.toDate;
                var18 = var18.bind(var20)();
                var13.endDate = var18;
                var13 = var16.bind(var17)(var15, var13);
                return var13;
            case 1626:
                if (var5) {
                    _fun25138_ip = 1695;
                    continue _fun25138
                }
            case 1629:
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var16 = var13[var8];
                var16 = var15.bind(var7)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var13 = var13[var8];
                var13 = var15.bind(var7)(var13);
                var13 = var13.t;
                var15 = var13["6RTdZA"];
                var13 = {};
                var18 = var12.pauseEndsAt;
                var13.resumeDate = var18;
                var11 = var16.bind(var17)(var15, var13);
            case 1695:
                return var11;
            case 1697:
                var11 = var12.pauseEndsAt;
                var11 = var3 != var11;
                var18 = null;
                if (!var11) {
                    _fun25138_ip = 1765;
                    continue _fun25138
                }
            case 1712:
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 17;
                var11 = var15[var11];
                var13 = var13.bind(var7)(var11);
                var11 = var12.pauseEndsAt;
                var16 = var13.bind(var7)(var11);
                var15 = var16.diff;
                var13 = var12.currentPeriodEnd;
                var11 = 'days';
                var18 = var15.bind(var16)(var13, var11);
            case 1765:
                if (!(var3 == var18)) {
                    _fun25138_ip = 1837;
                    continue _fun25138
                }
            case 1769:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var15 = var11[var8];
                var15 = var13.bind(var7)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var11 = var11.t;
                var13 = var11.VlWufv;
                var11 = {};
                var17 = var12.currentPeriodEnd;
                var11.pauseDate = var17;
                var11 = var15.bind(var16)(var13, var11);
                _fun25138_ip = 1908;
                continue _fun25138;
            case 1837:
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var16 = var13[var8];
                var16 = var15.bind(var7)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var13 = var13[var8];
                var13 = var15.bind(var7)(var13);
                var13 = var13.t;
                var15 = var13.WUfOD5;
                var13 = {};
                var20 = var12.currentPeriodEnd;
                var13.pauseDate = var20;
                var13.pauseDuration = var18;
                var11 = var16.bind(var17)(var15, var13);
            case 1908:
                return var11;
            case 1910:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var15 = var11[var8];
                var15 = var13.bind(var7)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var11 = var11.t;
                var13 = var11["0HopYf"];
                var11 = {};
                var11.num = var19;
                var11 = var15.bind(var16)(var13, var11);
                return var11;
            case 1974:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var15 = var11[var8];
                var15 = var13.bind(var7)(var15);
                var18 = var15.intl;
                var17 = var18.format;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var15 = var11.t;
                if (var0) {
                    _fun25138_ip = 2041;
                    continue _fun25138
                }
            case 2018:
                var13 = var15.ivjxcn;
                var11 = {};
                var11.num = var19;
                var11 = var17.bind(var18)(var13, var11);
                _fun25138_ip = 2101;
                continue _fun25138;
            case 2041:
                if (var1) {
                    _fun25138_ip = 2072;
                    continue _fun25138
                }
            case 2044:
                var16 = var15.xfYkhu;
                var13 = {};
                var13.price = var6;
                var13.num = var19;
                var13 = var17.bind(var18)(var16, var13);
                _fun25138_ip = 2098;
                continue _fun25138;
            case 2072:
                var16 = var15["5C/0QG"];
                var15 = {};
                var15.price = var6;
                var15.num = var19;
                var13 = var17.bind(var18)(var16, var15);
            case 2098:
                var11 = var13;
            case 2101:
                return var11;
            case 2103:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var15 = var11[var8];
                var15 = var13.bind(var7)(var15);
                var18 = var15.intl;
                var17 = var18.format;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var15 = var11.t;
                if (var0) {
                    _fun25138_ip = 2170;
                    continue _fun25138
                }
            case 2147:
                var13 = var15.EcSdRH;
                var11 = {};
                var11.num = var19;
                var11 = var17.bind(var18)(var13, var11);
                _fun25138_ip = 2230;
                continue _fun25138;
            case 2170:
                if (var1) {
                    _fun25138_ip = 2201;
                    continue _fun25138
                }
            case 2173:
                var16 = var15.nXdbKo;
                var13 = {};
                var13.price = var6;
                var13.num = var19;
                var13 = var17.bind(var18)(var16, var13);
                _fun25138_ip = 2227;
                continue _fun25138;
            case 2201:
                var16 = var15.xoFgRh;
                var15 = {};
                var15.price = var6;
                var15.num = var19;
                var13 = var17.bind(var18)(var16, var15);
            case 2227:
                var11 = var13;
            case 2230:
                return var11;
            case 2232:
                var11 = _closure1_slot13;
                var11 = var11.CANCELED;
                if (!(var11 !== var10)) {
                    _fun25138_ip = 2905;
                    continue _fun25138
                }
            case 2249:
                var11 = _closure1_slot13;
                var11 = var11.ACCOUNT_HOLD;
                if (!(var11 !== var10)) {
                    _fun25138_ip = 2791;
                    continue _fun25138
                }
            case 2266:
                var11 = _closure1_slot13;
                var11 = var11.UNPAID;
                if (!(var11 !== var10)) {
                    _fun25138_ip = 2732;
                    continue _fun25138
                }
            case 2283:
                var11 = _closure1_slot13;
                var11 = var11.PAUSE_PENDING;
                if (!(var11 !== var10)) {
                    _fun25138_ip = 2519;
                    continue _fun25138
                }
            case 2300:
                var11 = _closure1_slot13;
                var11 = var11.PAUSED;
                if (!(var11 !== var10)) {
                    _fun25138_ip = 2448;
                    continue _fun25138
                }
            case 2317:
                var11 = _closure1_slot13;
                var11 = var11.PAST_DUE;
                if (!(var11 !== var10)) {
                    _fun25138_ip = 2333;
                    continue _fun25138
                }
            case 2331:
                return var9;
            case 2333:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = var19[var8];
                var11 = var18.bind(var7)(var11);
                var16 = var11.intl;
                var15 = var16.format;
                var11 = var19[var8];
                var11 = var18.bind(var7)(var11);
                var11 = var11.t;
                var13 = var11["d+0vwo"];
                var11 = {};
                var17 = 18;
                var17 = var19[var17];
                var20 = var18.bind(var7)(var17);
                var19 = var20.dateFormat;
                var17 = _closure1_slot78;
                var17 = var17.bind(var7)(var12);
                var18 = var17.expiresDate;
                var17 = 'LL';
                var17 = var19.bind(var20)(var18, var17);
                var11.endDate = var17;
                var17 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = 'https://support.discord.com/hc/articles/23082866222871';
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onClick = var17;
                var11 = var15.bind(var16)(var13, var11);
                return var11;
            case 2448:
                if (var5) {
                    _fun25138_ip = 2517;
                    continue _fun25138
                }
            case 2451:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var15 = var11[var8];
                var15 = var13.bind(var7)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var11 = var11.t;
                var13 = var11["6RTdZA"];
                var11 = {};
                var17 = var12.pauseEndsAt;
                var11.resumeDate = var17;
                var9 = var15.bind(var16)(var13, var11);
            case 2517:
                return var9;
            case 2519:
                var9 = var12.pauseEndsAt;
                var9 = var3 != var9;
                var17 = null;
                if (!var9) {
                    _fun25138_ip = 2587;
                    continue _fun25138
                }
            case 2534:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 17;
                var9 = var13[var9];
                var11 = var11.bind(var7)(var9);
                var9 = var12.pauseEndsAt;
                var15 = var11.bind(var7)(var9);
                var13 = var15.diff;
                var11 = var12.currentPeriodEnd;
                var9 = 'days';
                var17 = var13.bind(var15)(var11, var9);
            case 2587:
                if (!(var3 == var17)) {
                    _fun25138_ip = 2659;
                    continue _fun25138
                }
            case 2591:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var13 = var9[var8];
                var13 = var11.bind(var7)(var13);
                var15 = var13.intl;
                var13 = var15.format;
                var9 = var9[var8];
                var9 = var11.bind(var7)(var9);
                var9 = var9.t;
                var11 = var9.VlWufv;
                var9 = {};
                var16 = var12.currentPeriodEnd;
                var9.pauseDate = var16;
                var9 = var13.bind(var15)(var11, var9);
                _fun25138_ip = 2730;
                continue _fun25138;
            case 2659:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var15 = var11[var8];
                var15 = var13.bind(var7)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var11 = var11.t;
                var13 = var11.WUfOD5;
                var11 = {};
                var18 = var12.currentPeriodEnd;
                var11.pauseDate = var18;
                var11.pauseDuration = var17;
                var9 = var15.bind(var16)(var13, var11);
            case 2730:
                return var9;
            case 2732:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var13 = var9[var8];
                var13 = var11.bind(var7)(var13);
                var15 = var13.intl;
                var13 = var15.format;
                var9 = var9[var8];
                var9 = var11.bind(var7)(var9);
                var9 = var9.t;
                var11 = var9.McIzwj;
                var9 = {};
                var9 = var13.bind(var15)(var11, var9);
                return var9;
            case 2791:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var13 = var9[var8];
                var13 = var11.bind(var7)(var13);
                var17 = var13.intl;
                var16 = var17.format;
                var9 = var9[var8];
                var9 = var11.bind(var7)(var9);
                var13 = var9.t;
                if (var0) {
                    _fun25138_ip = 2853;
                    continue _fun25138
                }
            case 2835:
                var11 = var13["0+/WH7"];
                var9 = {};
                var9 = var16.bind(var17)(var11, var9);
                _fun25138_ip = 2903;
                continue _fun25138;
            case 2853:
                if (var1) {
                    _fun25138_ip = 2879;
                    continue _fun25138
                }
            case 2856:
                var15 = var13.ZsO1Sx;
                var11 = {};
                var11.price = var6;
                var11 = var16.bind(var17)(var15, var11);
                _fun25138_ip = 2900;
                continue _fun25138;
            case 2879:
                var15 = var13.HBkIBi;
                var13 = {};
                var13.price = var6;
                var11 = var16.bind(var17)(var15, var13);
            case 2900:
                var9 = var11;
            case 2903:
                return var9;
            case 2905:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = var11[var8];
                var9 = var13.bind(var7)(var9);
                var17 = var9.intl;
                if (var0) {
                    _fun25138_ip = 2964;
                    continue _fun25138
                }
            case 2930:
                var15 = var17.string;
                var9 = var11[var8];
                var9 = var13.bind(var7)(var9);
                var9 = var9.t;
                var9 = var9.K6tYFa;
                var9 = var15.bind(var17)(var9);
                _fun25138_ip = 3033;
                continue _fun25138;
            case 2964:
                var16 = var17.format;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var13 = var11.t;
                if (var1) {
                    _fun25138_ip = 3009;
                    continue _fun25138
                }
            case 2986:
                var15 = var13["C/XsHt"];
                var11 = {};
                var11.price = var6;
                var11 = var16.bind(var17)(var15, var11);
                _fun25138_ip = 3030;
                continue _fun25138;
            case 3009:
                var15 = var13.cXy8Bp;
                var13 = {};
                var13.price = var6;
                var11 = var16.bind(var17)(var15, var13);
            case 3030:
                var9 = var11;
            case 3033:
                return var9;
            case 3035:
                var9 = _closure1_slot13;
                var9 = var9.CANCELED;
                if (!(var9 !== var10)) {
                    _fun25138_ip = 3708;
                    continue _fun25138
                }
            case 3052:
                var9 = _closure1_slot13;
                var9 = var9.ACCOUNT_HOLD;
                if (!(var9 !== var10)) {
                    _fun25138_ip = 3594;
                    continue _fun25138
                }
            case 3069:
                var9 = _closure1_slot13;
                var9 = var9.UNPAID;
                if (!(var9 !== var10)) {
                    _fun25138_ip = 3535;
                    continue _fun25138
                }
            case 3086:
                var9 = _closure1_slot13;
                var9 = var9.PAUSE_PENDING;
                if (!(var9 !== var10)) {
                    _fun25138_ip = 3322;
                    continue _fun25138
                }
            case 3103:
                var9 = _closure1_slot13;
                var9 = var9.PAUSED;
                if (!(var9 !== var10)) {
                    _fun25138_ip = 3251;
                    continue _fun25138
                }
            case 3120:
                var9 = _closure1_slot13;
                var9 = var9.PAST_DUE;
                if (!(var9 !== var10)) {
                    _fun25138_ip = 3136;
                    continue _fun25138
                }
            case 3134:
                return var4;
            case 3136:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = var17[var8];
                var9 = var16.bind(var7)(var9);
                var13 = var9.intl;
                var11 = var13.format;
                var9 = var17[var8];
                var9 = var16.bind(var7)(var9);
                var9 = var9.t;
                var10 = var9["d+0vwo"];
                var9 = {};
                var15 = 18;
                var15 = var17[var15];
                var18 = var16.bind(var7)(var15);
                var17 = var18.dateFormat;
                var15 = _closure1_slot78;
                var15 = var15.bind(var7)(var12);
                var16 = var15.expiresDate;
                var15 = 'LL';
                var15 = var17.bind(var18)(var16, var15);
                var9.endDate = var15;
                var14 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = 'https://support.discord.com/hc/articles/23082866222871';
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var9.onClick = var14;
                var9 = var11.bind(var13)(var10, var9);
                return var9;
            case 3251:
                if (var5) {
                    _fun25138_ip = 3320;
                    continue _fun25138
                }
            case 3254:
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = var5[var8];
                var10 = var9.bind(var7)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var5 = var5[var8];
                var5 = var9.bind(var7)(var5);
                var5 = var5.t;
                var9 = var5["6RTdZA"];
                var5 = {};
                var13 = var12.pauseEndsAt;
                var5.resumeDate = var13;
                var4 = var10.bind(var11)(var9, var5);
            case 3320:
                return var4;
            case 3322:
                var4 = var12.pauseEndsAt;
                var4 = var3 != var4;
                var11 = null;
                if (!var4) {
                    _fun25138_ip = 3390;
                    continue _fun25138
                }
            case 3337:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 17;
                var4 = var9[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var12.pauseEndsAt;
                var10 = var5.bind(var7)(var4);
                var9 = var10.diff;
                var5 = var12.currentPeriodEnd;
                var4 = 'days';
                var11 = var9.bind(var10)(var5, var4);
            case 3390:
                if (!(var3 == var11)) {
                    _fun25138_ip = 3462;
                    continue _fun25138
                }
            case 3394:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = var3[var8];
                var5 = var4.bind(var7)(var5);
                var9 = var5.intl;
                var5 = var9.format;
                var3 = var3[var8];
                var3 = var4.bind(var7)(var3);
                var3 = var3.t;
                var4 = var3.VlWufv;
                var3 = {};
                var10 = var12.currentPeriodEnd;
                var3.pauseDate = var10;
                var3 = var5.bind(var9)(var4, var3);
                _fun25138_ip = 3533;
                continue _fun25138;
            case 3462:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var9 = var4[var8];
                var9 = var5.bind(var7)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var4 = var4[var8];
                var4 = var5.bind(var7)(var4);
                var4 = var4.t;
                var5 = var4.WUfOD5;
                var4 = {};
                var12 = var12.currentPeriodEnd;
                var4.pauseDate = var12;
                var4.pauseDuration = var11;
                var3 = var9.bind(var10)(var5, var4);
            case 3533:
                return var3;
            case 3535:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = var3[var8];
                var5 = var4.bind(var7)(var5);
                var9 = var5.intl;
                var5 = var9.format;
                var3 = var3[var8];
                var3 = var4.bind(var7)(var3);
                var3 = var3.t;
                var4 = var3.cmkbFB;
                var3 = {};
                var3 = var5.bind(var9)(var4, var3);
                return var3;
            case 3594:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = var3[var8];
                var5 = var4.bind(var7)(var5);
                var11 = var5.intl;
                var10 = var11.format;
                var3 = var3[var8];
                var3 = var4.bind(var7)(var3);
                var5 = var3.t;
                if (var0) {
                    _fun25138_ip = 3656;
                    continue _fun25138
                }
            case 3638:
                var4 = var5.SsLIXS;
                var3 = {};
                var3 = var10.bind(var11)(var4, var3);
                _fun25138_ip = 3706;
                continue _fun25138;
            case 3656:
                if (var1) {
                    _fun25138_ip = 3682;
                    continue _fun25138
                }
            case 3659:
                var9 = var5.nkAEfZ;
                var4 = {};
                var4.price = var6;
                var4 = var10.bind(var11)(var9, var4);
                _fun25138_ip = 3703;
                continue _fun25138;
            case 3682:
                var9 = var5["5mv+2i"];
                var5 = {};
                var5.price = var6;
                var4 = var10.bind(var11)(var9, var5);
            case 3703:
                var3 = var4;
            case 3706:
                return var3;
            case 3708:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var8];
                var4 = var3.bind(var7)(var4);
                var5 = var4.intl;
                if (var0) {
                    _fun25138_ip = 3767;
                    continue _fun25138
                }
            case 3733:
                var4 = var5.string;
                var0 = var2[var8];
                var0 = var3.bind(var7)(var0);
                var0 = var0.t;
                var0 = var0.JshLzq;
                var0 = var4.bind(var5)(var0);
                _fun25138_ip = 3836;
                continue _fun25138;
            case 3767:
                var4 = var5.format;
                var2 = var2[var8];
                var2 = var3.bind(var7)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun25138_ip = 3812;
                    continue _fun25138
                }
            case 3789:
                var3 = var2["FS//l2"];
                var1 = {};
                var1.price = var6;
                var1 = var4.bind(var5)(var3, var1);
                _fun25138_ip = 3833;
                continue _fun25138;
            case 3812:
                var3 = var2["USi/nc"];
                var2 = {};
                var2.price = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 3833:
                var0 = var1;
            case 3836:
                return var0;
        }
    };
    var _closure1_slot72 = var75;
    var54 = function arg0() {
        _fun25142: for (var _fun25142_ip = 0;;) switch (_fun25142_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.skuId;
                var2 = var1.isPremium;
                var3 = var1.multiMonthPlans;
                var5 = var1.currentSubscription;
                var4 = var1.defaultPlanId;
                var1 = undefined;
                var _closure2_slot0 = var1;
                var6 = null;
                if (!(var6 != var10)) {
                    _fun25142_ip = 439;
                    continue _fun25142
                }
            case 54:
                if (!var2) {
                    _fun25142_ip = 439;
                    continue _fun25142
                }
            case 60:
                var2 = undefined;
                if (!(var1 !== var4)) {
                    _fun25142_ip = 92;
                    continue _fun25142
                }
            case 66:
                var7 = _closure1_slot43;
                var7 = var7[var4];
                var7 = var7.skuId;
                var2 = undefined;
                if (!(var10 === var7)) {
                    _fun25142_ip = 92;
                    continue _fun25142
                }
            case 89:
                var2 = var4;
            case 92:
                var7 = _closure1_slot38;
                var7 = var7.TIER_0;
                if (!(var7 !== var10)) {
                    _fun25142_ip = 361;
                    continue _fun25142
                }
            case 112:
                var7 = _closure1_slot38;
                var7 = var7.TIER_1;
                if (!(var7 !== var10)) {
                    _fun25142_ip = 338;
                    continue _fun25142
                }
            case 129:
                var7 = _closure1_slot38;
                var7 = var7.TIER_2;
                if (!(var7 !== var10)) {
                    _fun25142_ip = 195;
                    continue _fun25142
                }
            case 143:
                var7 = global;
                var9 = var7.Error;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = 'Unexpected SKU: ';
                var13 = var8.bind(var7)(var10);
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var14 = var8;
                var7 = new var14[var9](var13, var12);
                var7 = var7 instanceof Object ? var7 : var8;
                throw var7;
            case 195:
                if (!(var6 != var5)) {
                    _fun25142_ip = 283;
                    continue _fun25142
                }
            case 199:
                var5 = var5.items;
                var7 = 0;
                var5 = var5[var7];
                var6 = var5.planId;
                var8 = _closure1_slot26;
                var5 = var8.has;
                var5 = var5.bind(var8)(var6);
                if (var5) {
                    _fun25142_ip = 239;
                    continue _fun25142
                }
            case 233:
                var3 = new Array(0);
                _fun25142_ip = 283;
                continue _fun25142;
            case 239:
                var5 = _closure1_slot43;
                var5 = var5[var6];
                _closure2_slot0 = var5;
                var12 = _closure1_slot26;
                var6 = new Array(0);
                var13 = var6;
                var11 = 0;
                var5 = arraySpread(var13, var12, var11);
                var5 = var6.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun25143: for (var _fun25143_ip = 0;;) switch (_fun25143_ip) {
                        case 0:
                            var2 = _closure1_slot43;
                            var0 = arg0;
                            var2 = var2[var0];
                            var4 = var2.interval;
                            var0 = _closure2_slot0;
                            var0 = var0.interval;
                            var0 = var4 === var0;
                            if (!var0) {
                                _fun25143_ip = 60;
                                continue _fun25143
                            }
                        case 40:
                            var4 = var2.intervalCount;
                            var3 = _closure2_slot0;
                            var3 = var3.intervalCount;
                            var0 = var4 === var3;
                        case 60:
                            if (!var0) {
                                _fun25143_ip = 83;
                                continue _fun25143
                            }
                        case 63:
                            var2 = var2.skuId;
                            var1 = _closure1_slot38;
                            var1 = var1.TIER_2;
                            var0 = var2 === var1;
                        case 83:
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var0);
            case 283:
                var0 = _closure1_slot44;
                var5 = var0.PREMIUM_YEAR_TIER_2;
                var0 = new Array(2);
                var0[0] = var5;
                var5 = 1;
                var13 = var0;
                var12 = var3;
                var11 = var5;
                var3 = arraySpread(var13, var12, var11);
                var6 = _closure1_slot44;
                var6 = var6.PREMIUM_MONTH_TIER_2;
                var0[var3] = var6;
                var3 = var3 + var5;
                _fun25142_ip = 396;
                continue _fun25142;
            case 338:
                var3 = _closure1_slot44;
                var5 = var3.PREMIUM_MONTH_TIER_1;
                var3 = new Array(1);
                var3[0] = var5;
                var0 = var3;
                _fun25142_ip = 396;
                continue _fun25142;
            case 361:
                var3 = _closure1_slot44;
                var5 = var3.PREMIUM_YEAR_TIER_0;
                var3 = new Array(2);
                var3[0] = var5;
                var4 = _closure1_slot44;
                var4 = var4.PREMIUM_MONTH_TIER_0;
                var3[1] = var4;
                var0 = var3;
            case 396:
                if (!(var1 !== var2)) {
                    _fun25142_ip = 437;
                    continue _fun25142
                }
            case 400:
                var1 = var0.indexOf;
                var4 = var1.bind(var0)(var2);
                var3 = var0.splice;
                var1 = 1;
                var1 = var3.bind(var0)(var4, var1);
                var1 = var0.unshift;
                var1 = var1.bind(var0)(var2);
            case 437:
                return var0;
            case 439:
                var0 = new Array(0);
                return var0;
        }
    };
    var74 = function arg0() {
        _fun25144: for (var _fun25144_ip = 0;;) switch (_fun25144_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot43;
                var0 = var0[var5];
                var2 = null;
                if (!(var2 != var0)) {
                    _fun25144_ip = 28;
                    continue _fun25144
                }
            case 20:
                var0 = var0.skuId;
                return var0;
            case 28:
                var0 = global;
                var3 = var0.Error;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = 'Unsupported plan';
                var8 = var2;
                var0 = new var8[var3](var7, var6);
                var0 = var0 instanceof Object ? var0 : var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.captureBillingException;
                var1 = {};
                var4 = {};
                var4.planId = var5;
                var1.tags = var4;
                var1 = var2.bind(var3)(var0, var1);
                throw var0;
        }
    };
    var _closure1_slot73 = var74;
    var53 = function arg0() {
        _fun25145: for (var _fun25145_ip = 0;;) switch (_fun25145_ip) {
            case 0:
                var3 = arg0;
                var5 = _closure1_slot8;
                var4 = var5.getPlanIdsForSkus;
                var2 = _closure1_slot38;
                var6 = var2.GUILD;
                var2 = new Array(1);
                var2[0] = var6;
                var2 = var4.bind(var5)(var2);
                var _closure2_slot0 = var2;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 15;
                var0 = var5[var0];
                var6 = undefined;
                var5 = var4.bind(var6)(var0);
                var0 = null;
                var4 = var0 != var2;
                var2 = 'Missing guildSubscriptionPlanIds';
                var2 = var5.bind(var6)(var4, var2);
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var2 = var0.planId;
                    var1 = _closure2_slot0;
                    var0 = var1.includes;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var2 = var0 != var1;
                var0 = 0;
                if (!var2) {
                    _fun25145_ip = 117;
                    continue _fun25145
                }
            case 111:
                var0 = var1.quantity;
            case 117:
                return var0;
        }
    };
    var _closure1_slot74 = var53;
    var52 = function arg0() {
        var2 = _closure1_slot74;
        var0 = arg0;
        var1 = var0.additionalPlans;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var _closure1_slot75 = var52;
    var51 = function arg0() {
        var2 = _closure1_slot57;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot76 = var51;
    var50 = function arg0() {
        var2 = _closure1_slot31;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot77 = var50;
    var49 = function arg0() {
        _fun25150: for (var _fun25150_ip = 0;;) switch (_fun25150_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.isPurchasedViaApple;
                if (!var0) {
                    _fun25150_ip = 44;
                    continue _fun25150
                }
            case 12:
                var3 = var2.metadata;
                var1 = null;
                var4 = var1 == var3;
                var5 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun25150_ip = 37;
                    continue _fun25150
                }
            case 31:
                var0 = var3.apple_grace_period_expires_date;
            case 37:
                if (!(var1 == var0)) {
                    _fun25150_ip = 563;
                    continue _fun25150
                }
            case 44:
                var0 = var2.isPurchasedViaGoogle;
                if (!var0) {
                    _fun25150_ip = 110;
                    continue _fun25150
                }
            case 53:
                var3 = var2.metadata;
                var1 = null;
                var4 = var1 == var3;
                var6 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun25150_ip = 78;
                    continue _fun25150
                }
            case 72:
                var0 = var3.google_grace_period_expires_date;
            case 78:
                if (!(var1 != var0)) {
                    _fun25150_ip = 110;
                    continue _fun25150
                }
            case 82:
                var3 = var2.metadata;
                var4 = var1 == var3;
                var0 = undefined;
                if (var4) {
                    _fun25150_ip = 103;
                    continue _fun25150
                }
            case 97:
                var0 = var3.google_original_expires_date;
            case 103:
                if (!(var1 == var0)) {
                    _fun25150_ip = 443;
                    continue _fun25150
                }
            case 110:
                var0 = var2.isPurchasedExternally;
                if (var0) {
                    _fun25150_ip = 359;
                    continue _fun25150
                }
            case 122:
                var1 = var2.metadata;
                var3 = null;
                var7 = var3 == var1;
                var4 = undefined;
                var0 = undefined;
                if (var7) {
                    _fun25150_ip = 147;
                    continue _fun25150
                }
            case 141:
                var0 = var1.grace_period_expires_date;
            case 147:
                if (!(var3 == var0)) {
                    _fun25150_ip = 240;
                    continue _fun25150
                }
            case 151:
                var0 = var2.paymentSourceId;
                if (!(var3 != var0)) {
                    _fun25150_ip = 170;
                    continue _fun25150
                }
            case 161:
                var9 = _closure1_slot30;
                _fun25150_ip = 177;
                continue _fun25150;
            case 170:
                var9 = _closure1_slot17;
            case 177:
                var0 = {};
                var0.days = var9;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 17;
                var1 = var8[var1];
                var7 = var7.bind(var4)(var1);
                var1 = var2.currentPeriodStart;
                var8 = var7.bind(var4)(var1);
                var7 = var8.add;
                var1 = 'days';
                var1 = var7.bind(var8)(var9, var1);
                var0.expiresDate = var1;
                return var0;
            case 240:
                var0 = {};
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var7 = 17;
                var8 = var8[var7];
                var8 = var9.bind(var4)(var8);
                var9 = var2.metadata;
                var10 = var3 == var9;
                var3 = undefined;
                if (var10) {
                    _fun25150_ip = 286;
                    continue _fun25150
                }
            case 280:
                var3 = var9.grace_period_expires_date;
            case 286:
                var10 = var8.bind(var4)(var3);
                var9 = var10.diff;
                var8 = var2.currentPeriodStart;
                var3 = 'days';
                var3 = var9.bind(var10)(var8, var3);
                var0.days = var3;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var3 = var3.bind(var4)(var1);
                var1 = var2.metadata;
                var1 = var1.grace_period_expires_date;
                var1 = var3.bind(var4)(var1);
                var0.expiresDate = var1;
                return var0;
            case 359:
                var0 = var2.isPurchasedViaApple;
                if (var0) {
                    _fun25150_ip = 377;
                    continue _fun25150
                }
            case 371:
                var7 = _closure1_slot16;
                _fun25150_ip = 381;
                continue _fun25150;
            case 377:
                var7 = _closure1_slot15;
            case 381:
                var0 = {};
                var0.days = var7;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 17;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var2.currentPeriodStart;
                var4 = var3.bind(var4)(var1);
                var3 = var4.add;
                var1 = 'days';
                var1 = var3.bind(var4)(var7, var1);
                var0.expiresDate = var1;
                return var0;
            case 443:
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 17;
                var0 = var8[var3];
                var1 = var4.bind(var6)(var0);
                var0 = var2.metadata;
                var0 = var0.google_grace_period_expires_date;
                var1 = var1.bind(var6)(var0);
                var0 = var8[var3];
                var7 = var4.bind(var6)(var0);
                var0 = var2.metadata;
                var0 = var0.google_original_expires_date;
                var7 = var7.bind(var6)(var0);
                var0 = {};
                var3 = var8[var3];
                var6 = var4.bind(var6)(var3);
                var4 = var6.duration;
                var3 = var1.diff;
                var3 = var3.bind(var1)(var7);
                var4 = var4.bind(var6)(var3);
                var3 = var4.days;
                var3 = var3.bind(var4)();
                var0.days = var3;
                var0.expiresDate = var1;
                return var0;
            case 563:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 17;
                var0 = var6[var3];
                var1 = var4.bind(var5)(var0);
                var0 = var2.metadata;
                var0 = var0.apple_grace_period_expires_date;
                var1 = var1.bind(var5)(var0);
                var0 = {};
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.duration;
                var5 = var1.diff;
                var2 = var2.currentPeriodStart;
                var2 = var5.bind(var1)(var2);
                var3 = var3.bind(var4)(var2);
                var2 = var3.days;
                var2 = var2.bind(var3)();
                var0.days = var2;
                var0.expiresDate = var1;
                return var0;
        }
    };
    var _closure1_slot78 = var49;
    var48 = function arg0, arg1() {
        _fun25151: for (var _fun25151_ip = 0;;) switch (_fun25151_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var0 = arguments[2];
                var2 = arguments[3];
                var10 = arguments[4];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun25151_ip = 25;
                    continue _fun25151
                }
            case 23:
                var0 = null;
            case 25:
                if (!(var2 === var5)) {
                    _fun25151_ip = 31;
                    continue _fun25151
                }
            case 29:
                var2 = false;
            case 31:
                if (!(var10 === var5)) {
                    _fun25151_ip = 139;
                    continue _fun25151
                }
            case 35:
                var1 = {
                    'isFractionalPremiumActive': false,
                    'fetched': true
                };
                var8 = _closure1_slot23;
                var8 = var8.NONE;
                var1.fractionalState = var8;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = 17;
                var8 = var11[var3];
                var12 = var9.bind(var5)(var8);
                var8 = 0;
                var12 = var12.bind(var5)(var8);
                var1.startsAt = var12;
                var3 = var11[var3];
                var3 = var9.bind(var5)(var3);
                var3 = var3.bind(var5)(var8);
                var1.endsAt = var3;
                var3 = '';
                var1.currentEntitlementId = var3;
                var3 = new Array(0);
                var1.unactivatedUnits = var3;
                var10 = var1;
            case 139:
                var3 = null;
                var1 = var7;
                if (!(var3 !== var0)) {
                    _fun25151_ip = 176;
                    continue _fun25151
                }
            case 148:
                var9 = var4.status;
                var8 = _closure1_slot13;
                var8 = var8.PAST_DUE;
                var1 = var7;
                if (!(var9 === var8)) {
                    _fun25151_ip = 176;
                    continue _fun25151
                }
            case 173:
                var1 = var0;
            case 176:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 20;
                var8 = var11[var8];
                var11 = var9.bind(var5)(var8);
                var8 = var11.formatPrice;
                if (var2) {
                    _fun25151_ip = 228;
                    continue _fun25151
                }
            case 208:
                var12 = var1.total;
                var9 = var1.currency;
                var9 = var8.bind(var11)(var12, var9);
                _fun25151_ip = 295;
                continue _fun25151;
            case 228:
                var14 = var1.invoiceItems;
                var13 = var14.filter;
                var12 = function(arg0) { // Environment: var6
                    var2 = _closure1_slot34;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.subscriptionPlanId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var13.bind(var14)(var12);
                var13 = var14.map;
                var12 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var0 = var0.amount;
                    return var0;
                };
                var14 = var13.bind(var14)(var12);
                var13 = var14.reduce;
                var12 = function(arg0, arg1) { // Environment: var6
                    var1 = arg1;
                    var0 = arg0;
                    var0 = var1 + var0;
                    return var0;
                };
                var6 = 0;
                var6 = var13.bind(var14)(var12, var6);
                var1 = var1.currency;
                var9 = var8.bind(var11)(var6, var1);
            case 295:
                var1 = var4.trialId;
                if (!(var3 != var1)) {
                    _fun25151_ip = 341;
                    continue _fun25151
                }
            case 305:
                var8 = _closure1_slot41;
                var6 = var8.includes;
                var1 = var4.trialId;
                var1 = var6.bind(var8)(var1);
                if (!var1) {
                    _fun25151_ip = 341;
                    continue _fun25151
                }
            case 328:
                var1 = var4.paymentSourceId;
                if (!(var3 != var1)) {
                    _fun25151_ip = 2399;
                    continue _fun25151
                }
            case 341:
                var6 = var4.status;
                var1 = _closure1_slot13;
                var1 = var1.CANCELED;
                if (!(var6 !== var1)) {
                    _fun25151_ip = 2326;
                    continue _fun25151
                }
            case 363:
                var6 = var4.status;
                var1 = _closure1_slot13;
                var1 = var1.PAUSE_PENDING;
                if (!(var6 !== var1)) {
                    _fun25151_ip = 2242;
                    continue _fun25151
                }
            case 385:
                var6 = var4.status;
                var1 = _closure1_slot13;
                var1 = var1.PAUSED;
                if (!(var6 !== var1)) {
                    _fun25151_ip = 1802;
                    continue _fun25151
                }
            case 407:
                var6 = var4.status;
                var1 = _closure1_slot13;
                var1 = var1.PAST_DUE;
                if (!(var6 !== var1)) {
                    _fun25151_ip = 1471;
                    continue _fun25151
                }
            case 429:
                var6 = var4.status;
                var1 = _closure1_slot13;
                var1 = var1.BILLING_RETRY;
                if (!(var6 !== var1)) {
                    _fun25151_ip = 1345;
                    continue _fun25151
                }
            case 451:
                var6 = var4.status;
                var1 = _closure1_slot13;
                var1 = var1.ACCOUNT_HOLD;
                if (!(var6 !== var1)) {
                    _fun25151_ip = 1001;
                    continue _fun25151
                }
            case 473:
                var1 = _closure1_slot80;
                var1 = var1.bind(var5)(var4);
                if (var1) {
                    _fun25151_ip = 926;
                    continue _fun25151
                }
            case 488:
                var6 = var4.status;
                var1 = _closure1_slot13;
                var1 = var1.UNPAID;
                if (!(var6 !== var1)) {
                    _fun25151_ip = 853;
                    continue _fun25151
                }
            case 510:
                var1 = var4.isPurchasedExternally;
                if (var1) {
                    _fun25151_ip = 734;
                    continue _fun25151
                }
            case 522:
                var1 = global;
                var8 = var1.Date;
                var20 = var7.subscriptionPeriodStart;
                var6 = var8.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var8
                    }
                });
                var21 = var6;
                var1 = new var21[var8](var20, var19);
                var8 = var1 instanceof Object ? var1 : var6;
                var1 = var4.isBoostOnly;
                var13 = var8;
                if (var1) {
                    _fun25151_ip = 584;
                    continue _fun25151
                }
            case 568:
                var6 = _closure1_slot79;
                var1 = var10.unactivatedUnits;
                var13 = var6.bind(var5)(var8, var1);
            case 584:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 16;
                var1 = var18[var14];
                var1 = var17.bind(var5)(var1);
                var12 = var1.intl;
                var11 = var12.format;
                var1 = var18[var14];
                var1 = var17.bind(var5)(var1);
                var6 = var1.t;
                if (var2) {
                    _fun25151_ip = 657;
                    continue _fun25151
                }
            case 631:
                var8 = var6.Q18lRK;
                var1 = {};
                var1.renewalDate = var13;
                var1.price = var9;
                var1 = var11.bind(var12)(var8, var1);
                _fun25151_ip = 732;
                continue _fun25151;
            case 657:
                var8 = var6.Vl3cED;
                var6 = {};
                var15 = var18[var14];
                var15 = var17.bind(var5)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var5)(var14);
                var14 = var14.t;
                var14 = var14.Ipxkog;
                var14 = var15.bind(var16)(var14);
                var6.planName = var14;
                var6.renewalDate = var13;
                var6.price = var9;
                var1 = var11.bind(var12)(var8, var6);
            case 732:
                return var1;
            case 734:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 16;
                var8 = var12[var1];
                var8 = var6.bind(var5)(var8);
                var11 = var8.intl;
                var8 = var11.format;
                var1 = var12[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var6 = var1.ZlWXgR;
                var1 = {};
                var12 = var7.subscriptionPeriodStart;
                var1.renewalDate = var12;
                var13 = _closure1_slot50;
                var12 = var4.paymentGateway;
                var12 = var13[var12];
                var1.paymentGatewayName = var12;
                var14 = _closure1_slot90;
                var13 = var4.paymentGateway;
                var12 = 'SUBSCRIPTION_MANAGEMENT';
                var12 = var14.bind(var5)(var13, var12);
                var1.subscriptionManagementLink = var12;
                var1 = var8.bind(var11)(var6, var1);
                return var1;
            case 853:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 16;
                var8 = var12[var1];
                var8 = var6.bind(var5)(var8);
                var11 = var8.intl;
                var8 = var11.format;
                var1 = var12[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var6 = var1.CzTKom;
                var1 = {};
                var12 = _closure1_slot25;
                var1.maxProcessingTimeInDays = var12;
                var1 = var8.bind(var11)(var6, var1);
                return var1;
            case 926:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 16;
                var8 = var12[var1];
                var8 = var6.bind(var5)(var8);
                var11 = var8.intl;
                var8 = var11.format;
                var1 = var12[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var6 = var1.awpB0C;
                var1 = {};
                var12 = var4.currentPeriodEnd;
                var1.prepaidEndDate = var12;
                var1 = var8.bind(var11)(var6, var1);
                return var1;
            case 1001:
                var1 = var4.isPurchasedViaGoogle;
                if (!var1) {
                    _fun25151_ip = 1219;
                    continue _fun25151
                }
            case 1013:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 21;
                var1 = var8[var1];
                var6 = var6.bind(var5)(var1);
                var1 = var6.isAndroid;
                var1 = var1.bind(var6)();
                if (var1) {
                    _fun25151_ip = 1219;
                    continue _fun25151
                }
            case 1049:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 16;
                var8 = var14[var1];
                var8 = var6.bind(var5)(var8);
                var11 = var8.intl;
                var8 = var11.format;
                var1 = var14[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var6 = var1["dtcxw+"];
                var1 = {};
                var13 = _closure1_slot1;
                var12 = 17;
                var12 = var14[var12];
                var13 = var13.bind(var5)(var12);
                var12 = var4.currentPeriodStart;
                var15 = var13.bind(var5)(var12);
                var14 = var15.add;
                var13 = _closure1_slot24;
                var12 = 'days';
                var13 = var14.bind(var15)(var13, var12);
                var12 = var13.toDate;
                var12 = var12.bind(var13)();
                var1.endDate = var12;
                var13 = _closure1_slot50;
                var12 = var4.paymentGateway;
                var12 = var13[var12];
                var1.paymentGatewayName = var12;
                var14 = _closure1_slot90;
                var13 = var4.paymentGateway;
                var12 = 'PAYMENT_SOURCE_MANAGEMENT';
                var12 = var14.bind(var5)(var13, var12);
                var1.paymentSourceLink = var12;
                var1 = var8.bind(var11)(var6, var1);
                _fun25151_ip = 1343;
                continue _fun25151;
            case 1219:
                var8 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 16;
                var11 = var15[var6];
                var11 = var8.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var6 = var15[var6];
                var6 = var8.bind(var5)(var6);
                var6 = var6.t;
                var8 = var6.EMTLOT;
                var6 = {};
                var14 = _closure1_slot1;
                var13 = 17;
                var13 = var15[var13];
                var14 = var14.bind(var5)(var13);
                var13 = var4.currentPeriodStart;
                var16 = var14.bind(var5)(var13);
                var15 = var16.add;
                var14 = _closure1_slot24;
                var13 = 'days';
                var14 = var15.bind(var16)(var14, var13);
                var13 = var14.toDate;
                var13 = var13.bind(var14)();
                var6.endDate = var13;
                var6.price = var9;
                var1 = var11.bind(var12)(var8, var6);
            case 1343:
                return var1;
            case 1345:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 16;
                var8 = var14[var1];
                var8 = var6.bind(var5)(var8);
                var11 = var8.intl;
                var8 = var11.format;
                var1 = var14[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var6 = var1.EMTLOT;
                var1 = {};
                var13 = _closure1_slot1;
                var12 = 17;
                var12 = var14[var12];
                var13 = var13.bind(var5)(var12);
                var12 = var4.currentPeriodStart;
                var15 = var13.bind(var5)(var12);
                var14 = var15.add;
                var13 = _closure1_slot29;
                var12 = 'days';
                var13 = var14.bind(var15)(var13, var12);
                var12 = var13.toDate;
                var12 = var12.bind(var13)();
                var1.endDate = var12;
                var1.price = var9;
                var1 = var8.bind(var11)(var6, var1);
                return var1;
            case 1471:
                var1 = _closure1_slot78;
                var1 = var1.bind(var5)(var4);
                var14 = var1.expiresDate;
                var1 = var4.isPurchasedViaGoogle;
                if (!var1) {
                    _fun25151_ip = 1520;
                    continue _fun25151
                }
            case 1495:
                var8 = var4.metadata;
                var11 = var3 == var8;
                var6 = undefined;
                if (var11) {
                    _fun25151_ip = 1516;
                    continue _fun25151
                }
            case 1510:
                var6 = var8.google_grace_period_expires_date;
            case 1516:
                var1 = var3 != var6;
            case 1520:
                if (!var1) {
                    _fun25151_ip = 1560;
                    continue _fun25151
                }
            case 1523:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 17;
                var1 = var8[var1];
                var6 = var6.bind(var5)(var1);
                var1 = var4.metadata;
                var1 = var1.google_grace_period_expires_date;
                var14 = var6.bind(var5)(var1);
            case 1560:
                var1 = var4.isPurchasedViaApple;
                if (!var1) {
                    _fun25151_ip = 1594;
                    continue _fun25151
                }
            case 1569:
                var8 = var4.metadata;
                var11 = var3 == var8;
                var6 = undefined;
                if (var11) {
                    _fun25151_ip = 1590;
                    continue _fun25151
                }
            case 1584:
                var6 = var8.apple_grace_period_expires_date;
            case 1590:
                var1 = var3 != var6;
            case 1594:
                if (!var1) {
                    _fun25151_ip = 1634;
                    continue _fun25151
                }
            case 1597:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 17;
                var1 = var8[var1];
                var6 = var6.bind(var5)(var1);
                var1 = var4.metadata;
                var1 = var1.apple_grace_period_expires_date;
                var14 = var6.bind(var5)(var1);
            case 1634:
                var1 = var4.isPurchasedExternally;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 16;
                var11 = var13[var6];
                var11 = var8.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var6 = var13[var6];
                var6 = var8.bind(var5)(var6);
                var6 = var6.t;
                if (var1) {
                    _fun25151_ip = 1725;
                    continue _fun25151
                }
            case 1687:
                var8 = var6.qEIzyi;
                var1 = {};
                var13 = var14.toDate;
                var13 = var13.bind(var14)();
                var1.endDate = var13;
                var1.price = var9;
                var1 = var11.bind(var12)(var8, var1);
                _fun25151_ip = 1800;
                continue _fun25151;
            case 1725:
                var8 = var6.U2hb3W;
                var6 = {};
                var13 = var14.toDate;
                var13 = var13.bind(var14)();
                var6.endDate = var13;
                var14 = _closure1_slot50;
                var13 = var4.paymentGateway;
                var13 = var14[var13];
                var6.paymentGatewayName = var13;
                var15 = _closure1_slot90;
                var14 = var4.paymentGateway;
                var13 = 'PAYMENT_SOURCE_MANAGEMENT';
                var13 = var15.bind(var5)(var14, var13);
                var6.paymentSourceLink = var13;
                var1 = var11.bind(var12)(var8, var6);
            case 1800:
                return var1;
            case 1802:
                var6 = var10.fractionalState;
                var1 = _closure1_slot23;
                var1 = var1.NONE;
                if (!(var6 === var1)) {
                    _fun25151_ip = 2156;
                    continue _fun25151
                }
            case 1825:
                var1 = var4.pauseEndsAt;
                if (!(var3 != var1)) {
                    _fun25151_ip = 2000;
                    continue _fun25151
                }
            case 1838:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 16;
                var1 = var16[var12];
                var1 = var15.bind(var5)(var1);
                var11 = var1.intl;
                var8 = var11.format;
                var1 = var16[var12];
                var1 = var15.bind(var5)(var1);
                var3 = var1.t;
                if (var2) {
                    _fun25151_ip = 1914;
                    continue _fun25151
                }
            case 1885:
                var6 = var3["V8+l6k"];
                var1 = {};
                var13 = var4.pauseEndsAt;
                var1.resumeDate = var13;
                var1 = var8.bind(var11)(var6, var1);
                _fun25151_ip = 1995;
                continue _fun25151;
            case 1914:
                var6 = var3.zcgtzf;
                var3 = {};
                var13 = var16[var12];
                var13 = var15.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.Ipxkog;
                var12 = var13.bind(var14)(var12);
                var3.planName = var12;
                var12 = var4.pauseEndsAt;
                var3.resumeDate = var12;
                var3.price = var9;
                var1 = var8.bind(var11)(var6, var3);
            case 1995:
                _fun25151_ip = 2154;
                continue _fun25151;
            case 2000:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 16;
                var3 = var16[var12];
                var3 = var15.bind(var5)(var3);
                var11 = var3.intl;
                if (var2) {
                    _fun25151_ip = 2062;
                    continue _fun25151
                }
            case 2028:
                var3 = var11.string;
                var2 = var16[var12];
                var2 = var15.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.fMz6Lg;
                var2 = var3.bind(var11)(var2);
                _fun25151_ip = 2151;
                continue _fun25151;
            case 2062:
                var8 = var11.format;
                var3 = var16[var12];
                var3 = var15.bind(var5)(var3);
                var3 = var3.t;
                var6 = var3.KTYQCg;
                var3 = {};
                var13 = var16[var12];
                var13 = var15.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.Ipxkog;
                var12 = var13.bind(var14)(var12);
                var3.planName = var12;
                var3.price = var9;
                var2 = var8.bind(var11)(var6, var3);
            case 2151:
                var1 = var2;
            case 2154:
                _fun25151_ip = 2240;
                continue _fun25151;
            case 2156:
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 16;
                var6 = var11[var2];
                var6 = var3.bind(var5)(var6);
                var8 = var6.intl;
                var6 = var8.format;
                var2 = var11[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2.Q18lRK;
                var2 = {};
                var11 = var10.endsAt;
                var10 = var11.toDate;
                var10 = var10.bind(var11)();
                var2.renewalDate = var10;
                var2.price = var9;
                var1 = var6.bind(var8)(var3, var2);
            case 2240:
                return var1;
            case 2242:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 16;
                var3 = var8[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.format;
                var1 = var8[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.uBLUGU;
                var1 = {};
                var8 = var4.currentPeriodEnd;
                var1.pauseDate = var8;
                var8 = var4.pauseEndsAt;
                var1.resumeDate = var8;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 2326:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 16;
                var3 = var8[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.format;
                var1 = var8[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1["Whp/qk"];
                var1 = {};
                var7 = var7.subscriptionPeriodStart;
                var1.endDate = var7;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 2399:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 16;
                var2 = var6[var0];
                var2 = var1.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.format;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.t;
                var1 = var0["7ZS2m1"];
                var0 = {};
                var4 = var4.currentPeriodEnd;
                var0.trialEnd = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var47 = function arg0, arg1, arg2, arg3() {
        _fun25155: for (var _fun25155_ip = 0;;) switch (_fun25155_ip) {
            case 0:
                var4 = arg0;
                var8 = arg1;
                var7 = arg2;
                var5 = arg3;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 17;
                var0 = var0[var6];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = undefined;
                if (var5) {
                    _fun25155_ip = 45;
                    continue _fun25155
                }
            case 42:
                var0 = var4;
            case 45:
                var10 = var1.bind(var3)(var0);
                var1 = var8.length;
                var0 = 0;
                var4 = var10;
                if (!(var1 > var0)) {
                    _fun25155_ip = 88;
                    continue _fun25155
                }
            case 64:
                var1 = _closure1_slot98;
                var9 = var1.bind(var3)(var8);
                var8 = var10.add;
                var1 = 'hours';
                var4 = var8.bind(var10)(var9, var1);
            case 88:
                var1 = var4;
                if (var5) {
                    _fun25155_ip = 159;
                    continue _fun25155
                }
            case 94:
                var1 = var4;
                if (!(var3 !== var7)) {
                    _fun25155_ip = 159;
                    continue _fun25155
                }
            case 101:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var3)(var2);
                var6 = var2.bind(var3)();
                var5 = var7.diff;
                var3 = 'hours';
                var2 = true;
                var2 = var5.bind(var7)(var6, var3, var2);
                var1 = var4;
                if (!(var2 > var0)) {
                    _fun25155_ip = 159;
                    continue _fun25155
                }
            case 148:
                var0 = var4.add;
                var1 = var0.bind(var4)(var2, var3);
            case 159:
                var0 = var1.toDate;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot79 = var47;
    var46 = function arg0() {
        _fun25156: for (var _fun25156_ip = 0;;) switch (_fun25156_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot98;
                var1 = var0.unactivatedUnits;
                var4 = undefined;
                var11 = var3.bind(var4)(var1);
                var10 = 0;
                if (!(var11 > var10)) {
                    _fun25156_ip = 49;
                    continue _fun25156
                }
            case 29:
                var1 = var0.fractionalState;
                var0 = _closure1_slot23;
                var0 = var0.NONE;
                if (!(var1 !== var0)) {
                    _fun25156_ip = 55;
                    continue _fun25156
                }
            case 49:
                var0 = '';
                return var0;
            case 55:
                var3 = {};
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 16;
                var6 = var5[var0];
                var6 = var1.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.fYmirx;
                var3.days = var6;
                var6 = var5[var0];
                var6 = var1.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["C3RO+g"];
                var3.hours = var6;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.r77oHc;
                var3.minutes = var0;
                var0 = 22;
                var0 = var5[var0];
                var7 = var1.bind(var4)(var0);
                var6 = var7.roundFPCountdownUnits;
                var0 = 18;
                var8 = var5[var0];
                var9 = var1.bind(var4)(var8);
                var8 = var9.diffAsUnits;
                var12 = _closure1_slot1;
                var2 = 23;
                var2 = var5[var2];
                var2 = var12.bind(var4)(var2);
                var2 = var2.Millis;
                var2 = var2.HOUR;
                var2 = var11 * var2;
                var2 = var8.bind(var9)(var10, var2);
                var2 = var6.bind(var7)(var2);
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.unitsAsStrings;
                var0 = var0.bind(var1)(var2, var3);
                return var0;
        }
    };
    var45 = function arg0() {
        _fun25157: for (var _fun25157_ip = 0;;) switch (_fun25157_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.renewalMutations;
                var3 = null;
                var0 = var3 != var0;
                if (var0) {
                    _fun25157_ip = 28;
                    continue _fun25157
                }
            case 18:
                var2 = var1.trialEndsAt;
                var0 = var3 != var2;
            case 28:
                if (var0) {
                    _fun25157_ip = 53;
                    continue _fun25157
                }
            case 31:
                var2 = var1.status;
                var1 = _closure1_slot13;
                var1 = var1.PAST_DUE;
                var0 = var2 === var1;
            case 53:
                return var0;
        }
    };
    var44 = function arg0() {
        _fun25158: for (var _fun25158_ip = 0;;) switch (_fun25158_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.renewalMutations;
                var2 = null;
                var3 = var2 != var0;
                var0 = null;
                if (!var3) {
                    _fun25158_ip = 174;
                    continue _fun25158
                }
            case 23:
                var3 = var1.renewalMutations;
                var4 = var3.planId;
                var3 = var1.planId;
                if (!(var4 === var3)) {
                    _fun25158_ip = 109;
                    continue _fun25158
                }
            case 45:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 16;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["9dLQ0/"];
                var3 = var4.bind(var5)(var3);
                _fun25158_ip = 171;
                continue _fun25158;
            case 109:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 16;
                var5 = var9[var4];
                var7 = undefined;
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4["0rzJ4J"];
                var3 = var5.bind(var6)(var4);
            case 171:
                var0 = var3;
            case 174:
                var1 = var1.trialEndsAt;
                if (!(var2 != var1)) {
                    _fun25158_ip = 246;
                    continue _fun25158
                }
            case 184:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.a9Mdb3;
                var0 = var2.bind(var3)(var1);
            case 246:
                return var0;
        }
    };
    var43 = function arg0() {
        _fun25159: for (var _fun25159_ip = 0;;) switch (_fun25159_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.paymentSourceId;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun25159_ip = 38;
                    continue _fun25159
                }
            case 18:
                var3 = _closure1_slot81;
                var2 = var1.paymentSourceId;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 38:
                return var0;
        }
    };
    var _closure1_slot80 = var43;
    var42 = function arg0() {
        _fun25160: for (var _fun25160_ip = 0;;) switch (_fun25160_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun25160_ip = 57;
                    continue _fun25160
                }
            case 9:
                var3 = _closure1_slot7;
                var1 = var3.getPaymentSource;
                var1 = var1.bind(var3)(var4);
                var0 = var0 != var1;
                if (!var0) {
                    _fun25160_ip = 55;
                    continue _fun25160
                }
            case 36:
                var3 = _closure1_slot51;
                var2 = var3.has;
                var1 = var1.type;
                var0 = var2.bind(var3)(var1);
            case 55:
                return var0;
            case 57:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot81 = var42;
    var41 = function arg0() {
        _fun25161: for (var _fun25161_ip = 0;;) switch (_fun25161_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.renewalMutations;
                var3 = var1.additionalPlans;
                var4 = var1.status;
                var2 = _closure1_slot74;
                var6 = undefined;
                var3 = var2.bind(var6)(var3);
                var5 = null;
                var2 = var5 != var0;
                if (!var2) {
                    _fun25161_ip = 58;
                    continue _fun25161
                }
            case 43:
                var2 = _closure1_slot74;
                var0 = var0.additionalPlans;
                var5 = var2.bind(var6)(var0);
            case 58:
                var2 = 0;
                var0 = var4;
                if (!(var2 === var5)) {
                    _fun25161_ip = 84;
                    continue _fun25161
                }
            case 67:
                var0 = var4;
                if (!(var2 !== var3)) {
                    _fun25161_ip = 84;
                    continue _fun25161
                }
            case 74:
                var1 = _closure1_slot13;
                var0 = var1.CANCELED;
            case 84:
                return var0;
        }
    };
    var _closure1_slot82 = var41;
    var40 = function arg0() {
        _fun25162: for (var _fun25162_ip = 0;;) switch (_fun25162_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.isPurchasedExternally;
                if (var0) {
                    _fun25162_ip = 42;
                    continue _fun25162
                }
            case 15:
                var3 = _closure1_slot82;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var0 = _closure1_slot13;
                var0 = var0.CANCELED;
                var0 = var3 === var0;
                _fun25162_ip = 61;
                continue _fun25162;
            case 42:
                var2 = var2.status;
                var1 = _closure1_slot13;
                var1 = var1.CANCELED;
                var0 = var2 === var1;
            case 61:
                return var0;
        }
    };
    var _closure1_slot83 = var40;
    var39 = function arg0, arg1, arg2() {
        _fun25163: for (var _fun25163_ip = 0;;) switch (_fun25163_ip) {
            case 0:
                var1 = arg0;
                var7 = arg1;
                var6 = arguments[3];
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun25163_ip = 17;
                    continue _fun25163
                }
            case 15:
                var6 = false;
            case 17:
                var0 = null;
                if (!(var0 == var7)) {
                    _fun25163_ip = 46;
                    continue _fun25163
                }
            case 23:
                var3 = _closure1_slot62;
                var2 = var1.id;
                var0 = false;
                var2 = var3.bind(var5)(var2, var0, var6);
                _fun25163_ip = 72;
                continue _fun25163;
            case 46:
                var4 = _closure1_slot63;
                var11 = var1.id;
                var10 = false;
                var12 = undefined;
                var9 = var6;
                var8 = var7;
                var2 = var12[var4](var11, var10, var9, var8, var7);
            case 72:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 20;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.formatPrice;
                var3 = var2.amount;
                var2 = var2.currency;
                var3 = var4.bind(var5)(var3, var2);
                var1 = var1.currency;
                var0 = _closure1_slot49;
                var0 = var0.USD;
                var1 = var1 !== var0;
                if (!var1) {
                    _fun25163_ip = 151;
                    continue _fun25163
                }
            case 142:
                var2 = true;
                var0 = arg2;
                var1 = var2 === var0;
            case 151:
                var0 = var3;
                if (!var1) {
                    _fun25163_ip = 171;
                    continue _fun25163
                }
            case 157:
                var2 = var3.concat;
                var1 = '*';
                var0 = var2.bind(var3)(var1);
            case 171:
                return var0;
        }
    };
    var _closure1_slot84 = var39;
    var38 = function arg0, arg1() {
        _fun25164: for (var _fun25164_ip = 0;;) switch (_fun25164_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var2.planId;
                var5 = var2.status;
                var4 = _closure1_slot13;
                var4 = var4.CANCELED;
                if (!(var5 !== var4)) {
                    _fun25164_ip = 192;
                    continue _fun25164
                }
            case 37:
                var5 = var2.status;
                var4 = _closure1_slot13;
                var4 = var4.PAUSE_PENDING;
                if (!(var5 !== var4)) {
                    _fun25164_ip = 192;
                    continue _fun25164
                }
            case 59:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 15;
                var4 = var6[var4];
                var6 = undefined;
                var8 = var5.bind(var6)(var4);
                var4 = null;
                var7 = var4 != var1;
                var5 = 'Expected invoicePreview';
                var5 = var8.bind(var6)(var7, var5);
                var7 = var1.invoiceItems;
                var5 = var7.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var2 = var0.subscriptionPlanId;
                    var1 = _closure1_slot76;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var1 = var5.bind(var7)(var1);
                if (!(var4 != var1)) {
                    _fun25164_ip = 184;
                    continue _fun25164
                }
            case 126:
                var5 = _closure1_slot4;
                var3 = var1.subscriptionPlanId;
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun25164_ip = 184;
                    continue _fun25164
                }
            case 144:
                var3 = var2.renewalMutations;
                if (!(var4 != var3)) {
                    _fun25164_ip = 176;
                    continue _fun25164
                }
            case 154:
                var3 = var2.renewalMutations;
                var4 = var3.planId;
                var3 = var2.planId;
                if (!(var4 === var3)) {
                    _fun25164_ip = 184;
                    continue _fun25164
                }
            case 176:
                var1 = var1.subscriptionPlanId;
                _fun25164_ip = 190;
                continue _fun25164;
            case 184:
                var1 = var2.planId;
            case 190:
                return var1;
            case 192:
                return var0;
        }
    };
    var37 = function arg0, arg1() {
        _fun25166: for (var _fun25166_ip = 0;;) switch (_fun25166_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = var3.status;
                var5 = var3.status;
                var4 = _closure1_slot13;
                var4 = var4.CANCELED;
                if (!(var5 !== var4)) {
                    _fun25166_ip = 158;
                    continue _fun25166
                }
            case 36:
                var4 = var3.status;
                var3 = _closure1_slot13;
                var3 = var3.PAUSE_PENDING;
                if (!(var4 !== var3)) {
                    _fun25166_ip = 158;
                    continue _fun25166
                }
            case 55:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 15;
                var3 = var5[var3];
                var5 = undefined;
                var7 = var4.bind(var5)(var3);
                var3 = null;
                var6 = var3 != var1;
                var4 = 'Expected invoicePreview';
                var4 = var7.bind(var5)(var6, var4);
                var6 = var1.invoiceItems;
                var4 = var6.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var2 = var0.subscriptionPlanId;
                    var1 = _closure1_slot76;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var1 = var4.bind(var6)(var1);
                var3 = var3 == var1;
                if (var3) {
                    _fun25166_ip = 140;
                    continue _fun25166
                }
            case 125:
                var4 = _closure1_slot4;
                var1 = var1.subscriptionPlanId;
                var3 = var4.bind(var5)(var1);
            case 140:
                var1 = var0;
                if (!var3) {
                    _fun25166_ip = 156;
                    continue _fun25166
                }
            case 146:
                var2 = _closure1_slot13;
                var1 = var2.CANCELED;
            case 156:
                return var1;
            case 158:
                return var0;
        }
    };
    var36 = function arg0() {
        _fun25168: for (var _fun25168_ip = 0;;) switch (_fun25168_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.status;
                var3 = var2.renewalMutations;
                var0 = _closure1_slot13;
                var0 = var0.CANCELED;
                var0 = var1 === var0;
                if (var0) {
                    _fun25168_ip = 75;
                    continue _fun25168
                }
            case 34:
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun25168_ip = 60;
                    continue _fun25168
                }
            case 43:
                var5 = _closure1_slot4;
                var4 = var3.planId;
                var3 = undefined;
                var1 = var5.bind(var3)(var4);
            case 60:
                if (!var1) {
                    _fun25168_ip = 72;
                    continue _fun25168
                }
            case 63:
                var2 = var2.isPurchasedExternally;
                var1 = !var2;
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot85 = var36;
    var35 = function arg0() {
        _fun25169: for (var _fun25169_ip = 0;;) switch (_fun25169_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot13;
                var0 = var0.PAST_DUE;
                var0 = var2 === var0;
                if (var0) {
                    _fun25169_ip = 37;
                    continue _fun25169
                }
            case 23:
                var3 = _closure1_slot13;
                var3 = var3.ACCOUNT_HOLD;
                var0 = var2 === var3;
            case 37:
                if (var0) {
                    _fun25169_ip = 54;
                    continue _fun25169
                }
            case 40:
                var1 = _closure1_slot13;
                var1 = var1.BILLING_RETRY;
                var0 = var2 === var1;
            case 54:
                return var0;
        }
    };
    var _closure1_slot86 = var35;
    var34 = function arg0, arg1, arg2() {
        _fun25170: for (var _fun25170_ip = 0;;) switch (_fun25170_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = arg2;
                var4 = var1.findInvoiceItemByPlanId;
                var3 = var0.id;
                var3 = var4.bind(var1)(var3);
                var4 = null;
                if (!(var4 != var3)) {
                    _fun25170_ip = 41;
                    continue _fun25170
                }
            case 33:
                var6 = var3.amount;
                _fun25170_ip = 96;
                continue _fun25170;
            case 41:
                var7 = _closure1_slot63;
                var12 = var0.id;
                var4 = {};
                var3 = var2.paymentSourceId;
                var4.paymentSourceId = var3;
                var2 = var2.currency;
                var4.currency = var2;
                var13 = undefined;
                var11 = false;
                var10 = false;
                var9 = var4;
                var2 = var13[var7](var12, var11, var10, var9, var8);
                var6 = var2.amount;
            case 96:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 20;
                var3 = var8[var2];
                var5 = undefined;
                var4 = var7.bind(var5)(var3);
                var3 = var4.formatRate;
                var2 = var8[var2];
                var5 = var7.bind(var5)(var2);
                var2 = var5.formatPrice;
                var1 = var1.currency;
                var2 = var2.bind(var5)(var6, var1);
                var1 = var0.interval;
                var0 = var0.intervalCount;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot87 = var34;
    var33 = function arg0, arg1, arg2, arg3() {
        _fun25171: for (var _fun25171_ip = 0;;) switch (_fun25171_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var1 = arg2;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun25171_ip = 44;
                    continue _fun25171
                }
            case 15:
                var7 = {};
                var0 = _closure1_slot6;
                var0 = var0.ipCountryCodeWithFallback;
                var7.country = var0;
                var7.currency = var1;
                _fun25171_ip = 59;
                continue _fun25171;
            case 44:
                var0 = {};
                var0.paymentSourceId = var3;
                var0.currency = var1;
                var7 = var0;
            case 59:
                var3 = _closure1_slot8;
                var0 = var3.get;
                var0 = var0.bind(var3)(var5);
                if (!(var2 != var0)) {
                    _fun25171_ip = 271;
                    continue _fun25171
                }
            case 83:
                var8 = _closure1_slot8;
                var6 = var8.getForSkuAndInterval;
                var3 = _closure1_slot38;
                var4 = var3.GUILD;
                var3 = var0.interval;
                var0 = var0.intervalCount;
                var0 = var6.bind(var8)(var4, var3, var0);
                if (!(var2 != var0)) {
                    _fun25171_ip = 187;
                    continue _fun25171
                }
            case 126:
                var6 = _closure1_slot63;
                var4 = var0.id;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 14;
                var0 = var3[var0];
                var3 = undefined;
                var8 = var2.bind(var3)(var0);
                var2 = var8.isPremium;
                var0 = arg3;
                var11 = var2.bind(var8)(var0);
                var10 = false;
                var13 = undefined;
                var12 = var4;
                var9 = var7;
                var0 = var13[var6](var12, var11, var10, var9, var8);
                return var0;
            case 187:
                var0 = global;
                var3 = var0.Error;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = 'Unsupported plan';
                var13 = var2;
                var0 = new var13[var3](var12, var11);
                var0 = var0 instanceof Object ? var0 : var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.captureBillingException;
                var2 = {};
                var6 = {};
                var6.planId = var5;
                var2.tags = var6;
                var2 = var3.bind(var4)(var0, var2);
                throw var0;
            case 271:
                var0 = global;
                var3 = var0.Error;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = 'Unsupported plan';
                var13 = var2;
                var0 = new var13[var3](var12, var11);
                var0 = var0 instanceof Object ? var0 : var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.captureBillingException;
                var1 = {};
                var4 = {};
                var4.planId = var5;
                var1.tags = var4;
                var1 = var2.bind(var3)(var0, var1);
                throw var0;
        }
    };
    var _closure1_slot88 = var33;
    var32 = function arg0, arg1, arg2() {
        _fun25172: for (var _fun25172_ip = 0;;) switch (_fun25172_ip) {
            case 0:
                var7 = arg1;
                var1 = arg2;
                var9 = var7.id;
                var2 = null;
                var0 = arg0;
                if (!(var2 != var0)) {
                    _fun25172_ip = 145;
                    continue _fun25172
                }
            case 23:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_MONTH_TIER_0;
                if (!(var2 !== var9)) {
                    _fun25172_ip = 1490;
                    continue _fun25172
                }
            case 43:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_YEAR_TIER_0;
                if (!(var2 !== var9)) {
                    _fun25172_ip = 1429;
                    continue _fun25172
                }
            case 60:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_MONTH_TIER_1;
                if (!(var2 !== var9)) {
                    _fun25172_ip = 1368;
                    continue _fun25172
                }
            case 77:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_YEAR_TIER_1;
                if (!(var2 !== var9)) {
                    _fun25172_ip = 1307;
                    continue _fun25172
                }
            case 94:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_MONTH_TIER_2;
                if (!(var2 !== var9)) {
                    _fun25172_ip = 1246;
                    continue _fun25172
                }
            case 111:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_GROUP_MONTH;
                if (!(var2 !== var9)) {
                    _fun25172_ip = 1246;
                    continue _fun25172
                }
            case 128:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_YEAR_TIER_2;
                if (!(var2 !== var9)) {
                    _fun25172_ip = 1185;
                    continue _fun25172
                }
            case 145:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_MONTH_TIER_0;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 1108;
                    continue _fun25172
                }
            case 165:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_YEAR_TIER_0;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 1031;
                    continue _fun25172
                }
            case 182:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_MONTH_TIER_1;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 954;
                    continue _fun25172
                }
            case 199:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_YEAR_TIER_1;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 877;
                    continue _fun25172
                }
            case 216:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_MONTH_TIER_2;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 802;
                    continue _fun25172
                }
            case 233:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_GROUP_MONTH;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 723;
                    continue _fun25172
                }
            case 250:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_YEAR_TIER_2;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 648;
                    continue _fun25172
                }
            case 267:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_3_MONTH_TIER_2;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 573;
                    continue _fun25172
                }
            case 284:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_6_MONTH_TIER_2;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 573;
                    continue _fun25172
                }
            case 301:
                var3 = _closure1_slot44;
                var3 = var3.NONE_MONTH;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 512;
                    continue _fun25172
                }
            case 318:
                var3 = _closure1_slot44;
                var3 = var3.NONE_YEAR;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 512;
                    continue _fun25172
                }
            case 335:
                var3 = _closure1_slot44;
                var3 = var3.NONE_3_MONTH;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 512;
                    continue _fun25172
                }
            case 352:
                var3 = _closure1_slot44;
                var3 = var3.NONE_6_MONTH;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 512;
                    continue _fun25172
                }
            case 369:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_MONTH_GUILD;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 512;
                    continue _fun25172
                }
            case 386:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_YEAR_GUILD;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 512;
                    continue _fun25172
                }
            case 400:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_3_MONTH_GUILD;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 512;
                    continue _fun25172
                }
            case 414:
                var3 = _closure1_slot44;
                var3 = var3.PREMIUM_6_MONTH_GUILD;
                if (!(var3 !== var9)) {
                    _fun25172_ip = 512;
                    continue _fun25172
                }
            case 428:
                var3 = global;
                var5 = var3.Error;
                var3 = var5.prototype;
                var4 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = 'User is purchasing an unsupported plan';
                var12 = var4;
                var3 = new var12[var5](var11, var10);
                var3 = var3 instanceof Object ? var3 : var4;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 12;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.captureBillingException;
                var4 = {};
                var8 = {};
                var8.planId = var9;
                var4.tags = var8;
                var4 = var5.bind(var6)(var3, var4);
                throw var3;
            case 512:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 16;
                var4 = var9[var3];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var9[var3];
                var3 = var8.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.eUEeCt;
                var3 = var4.bind(var5)(var3);
                return var3;
            case 573:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 16;
                var5 = var9[var3];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.BCD4fT;
                var3 = {};
                var7 = var7.intervalCount;
                var3.intervalCount = var7;
                var3 = var5.bind(var6)(var4, var3);
                return var3;
            case 648:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 16;
                var5 = var8[var3];
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var4 = var3.t;
                if (var1) {
                    _fun25172_ip = 710;
                    continue _fun25172
                }
            case 697:
                var3 = var4["0nfg1x"];
                var3 = var5.bind(var6)(var3);
                _fun25172_ip = 721;
                continue _fun25172;
            case 710:
                var4 = var4.cRCCJ3;
                var3 = var5.bind(var6)(var4);
            case 721:
                return var3;
            case 723:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 16;
                var3 = var7[var3];
                var8 = undefined;
                var3 = var4.bind(var8)(var3);
                var6 = var3.intl;
                var5 = var6.formatToPlainString;
                var4 = _closure1_slot1;
                var3 = 24;
                var3 = var7[var3];
                var3 = var4.bind(var8)(var3);
                var4 = var3.LwdrNi;
                var3 = {};
                var7 = _closure1_slot48;
                var7 = var7.bind(var8)();
                var3.premiumGroupProductName = var7;
                var3 = var5.bind(var6)(var4, var3);
                return var3;
            case 802:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 16;
                var5 = var8[var3];
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var4 = var3.t;
                if (var1) {
                    _fun25172_ip = 864;
                    continue _fun25172
                }
            case 851:
                var3 = var4.LQVQIq;
                var3 = var5.bind(var6)(var3);
                _fun25172_ip = 875;
                continue _fun25172;
            case 864:
                var4 = var4.cRCCJ3;
                var3 = var5.bind(var6)(var4);
            case 875:
                return var3;
            case 877:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 16;
                var5 = var8[var3];
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var4 = var3.t;
                if (var1) {
                    _fun25172_ip = 941;
                    continue _fun25172
                }
            case 926:
                var3 = var4["MhH/vW"];
                var3 = var5.bind(var6)(var3);
                _fun25172_ip = 952;
                continue _fun25172;
            case 941:
                var4 = var4.cRCCJ3;
                var3 = var5.bind(var6)(var4);
            case 952:
                return var3;
            case 954:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 16;
                var5 = var8[var3];
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var4 = var3.t;
                if (var1) {
                    _fun25172_ip = 1018;
                    continue _fun25172
                }
            case 1003:
                var3 = var4.gueLg5;
                var3 = var5.bind(var6)(var3);
                _fun25172_ip = 1029;
                continue _fun25172;
            case 1018:
                var4 = var4.cRCCJ3;
                var3 = var5.bind(var6)(var4);
            case 1029:
                return var3;
            case 1031:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 16;
                var5 = var8[var3];
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var4 = var3.t;
                if (var1) {
                    _fun25172_ip = 1095;
                    continue _fun25172
                }
            case 1080:
                var3 = var4["2eQpsL"];
                var3 = var5.bind(var6)(var3);
                _fun25172_ip = 1106;
                continue _fun25172;
            case 1095:
                var4 = var4.cRCCJ3;
                var3 = var5.bind(var6)(var4);
            case 1106:
                return var3;
            case 1108:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun25172_ip = 1172;
                    continue _fun25172
                }
            case 1157:
                var1 = var2["/G3aKw"];
                var1 = var3.bind(var4)(var1);
                _fun25172_ip = 1183;
                continue _fun25172;
            case 1172:
                var2 = var2.cRCCJ3;
                var1 = var3.bind(var4)(var2);
            case 1183:
                return var1;
            case 1185:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.G0mISV;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 1246:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["5l1MuV"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 1307:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["D/l7Yt"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 1368:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.uph4Jx;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 1429:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["jm+ZQw"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 1490:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 16;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["0ggVqN"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var31 = function arg0() {
        var0 = arg0;
        var1 = var0.invoiceItems;
        var0 = 0;
        var0 = var1[var0];
        var3 = var0.subscriptionPlanId;
        var2 = _closure1_slot8;
        var1 = var2.get;
        var1 = var1.bind(var2)(var3);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 15;
        var0 = var3[var0];
        var4 = undefined;
        var3 = var2.bind(var4)(var0);
        var0 = null;
        var2 = var0 != var1;
        var0 = 'Missing subscriptionPlan';
        var0 = var3.bind(var4)(var2, var0);
        var0 = {};
        var2 = var1.interval;
        var0.intervalType = var2;
        var1 = var1.intervalCount;
        var0.intervalCount = var1;
        return var0;
    };
    var30 = function arg0() {
        _fun25174: for (var _fun25174_ip = 0;;) switch (_fun25174_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.intervalType;
                var8 = undefined;
                if (!(var3 === var8)) {
                    _fun25174_ip = 28;
                    continue _fun25174
                }
            case 15:
                var4 = _closure1_slot42;
                var3 = var4.MONTH;
            case 28:
                var0 = var3;
                var1 = var1.intervalCount;
                if (!(var1 === var8)) {
                    _fun25174_ip = 44;
                    continue _fun25174
                }
            case 41:
                var1 = 1;
            case 44:
                var6 = var1;
                var2 = undefined;
                var5 = undefined;
                var3 = _closure1_slot49;
                var2 = var3.USD;
            case 64: // try_start_0
                var7 = _closure1_slot62;
                var3 = _closure1_slot44;
                var14 = var3.PREMIUM_MONTH_TIER_2;
                var15 = undefined;
                var13 = false;
                var12 = false;
                var11 = undefined;
                var10 = false;
                var3 = var15[var7](var14, var13, var12, var11, var10, var9);
                var2 = var3.currency;
            case 98: // try_end0
                _fun25174_ip = 102;
                continue _fun25174;
            case 100: // catch_target0
                CatchBlockStart(arg_register = 3);
            case 102:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 20;
                var3 = var7[var3];
                var9 = var4.bind(var8)(var3);
                var7 = var9.formatPrice;
                var4 = var2;
                var2 = 0;
                var3 = {
                    'maximumFractionDigits': 0,
                    'minimumFractionDigits': 0
                };
                var5 = var7.bind(var9)(var2, var4, var3);
                var3 = var0;
                var0 = _closure1_slot42;
                var0 = var0.DAY;
                if (!(var0 !== var3)) {
                    _fun25174_ip = 397;
                    continue _fun25174
                }
            case 174:
                var0 = _closure1_slot42;
                var0 = var0.MONTH;
                if (!(var0 !== var3)) {
                    _fun25174_ip = 319;
                    continue _fun25174
                }
            case 191:
                var0 = _closure1_slot42;
                var0 = var0.YEAR;
                if (!(var0 !== var3)) {
                    _fun25174_ip = 241;
                    continue _fun25174
                }
            case 205:
                var0 = global;
                var4 = var0.Error;
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var14 = 'Unsupported interval duration.';
                var15 = var3;
                var0 = new var15[var4](var14, var13);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 241:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 16;
                var4 = var9[var0];
                var4 = var3.bind(var8)(var4);
                var7 = var4.intl;
                var4 = var7.formatToPlainString;
                var0 = var9[var0];
                var0 = var3.bind(var8)(var0);
                var0 = var0.t;
                var3 = var0.xzAcST;
                var0 = {};
                var9 = var6;
                var0.years = var9;
                var9 = var5;
                var0.price = var9;
                var0 = var4.bind(var7)(var3, var0);
                return var0;
            case 319:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 16;
                var4 = var9[var0];
                var4 = var3.bind(var8)(var4);
                var7 = var4.intl;
                var4 = var7.formatToPlainString;
                var0 = var9[var0];
                var0 = var3.bind(var8)(var0);
                var0 = var0.t;
                var3 = var0["8FZfNo"];
                var0 = {};
                var9 = var6;
                var0.months = var9;
                var9 = var5;
                var0.price = var9;
                var0 = var4.bind(var7)(var3, var0);
                return var0;
            case 397:
                var0 = var6;
                var7 = 7;
                if (!(var0 >= var7)) {
                    _fun25174_ip = 418;
                    continue _fun25174
                }
            case 407:
                var0 = var6;
                var0 = var0 % var7;
                if (!(var0 !== var2)) {
                    _fun25174_ip = 496;
                    continue _fun25174
                }
            case 418:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 16;
                var3 = var9[var0];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var9[var0];
                var0 = var2.bind(var8)(var0);
                var0 = var0.t;
                var2 = var0.cR9ifw;
                var0 = {};
                var9 = var6;
                var0.days = var9;
                var9 = var5;
                var0.price = var9;
                var0 = var3.bind(var4)(var2, var0);
                _fun25174_ip = 570;
                continue _fun25174;
            case 496:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 16;
                var3 = var9[var1];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var9[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.C6i5Jt;
                var1 = {};
                var6 = var6 / var7;
                var1.weeks = var6;
                var1.price = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 570:
                return var0;
        }
    };
    var _closure1_slot89 = var30;
    var29 = function arg0, arg1() {
        _fun25175: for (var _fun25175_ip = 0;;) switch (_fun25175_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var2 = _closure1_slot11;
                var2 = var2.APPLE_PARTNER;
                if (!(var2 !== var5)) {
                    _fun25175_ip = 127;
                    continue _fun25175
                }
            case 23:
                var2 = _closure1_slot11;
                var2 = var2.APPLE_ADVANCED_COMMERCE;
                if (!(var2 !== var5)) {
                    _fun25175_ip = 127;
                    continue _fun25175
                }
            case 37:
                var2 = _closure1_slot11;
                var2 = var2.APPLE;
                if (!(var2 !== var5)) {
                    _fun25175_ip = 127;
                    continue _fun25175
                }
            case 51:
                var2 = _closure1_slot11;
                var2 = var2.GOOGLE;
                if (!(var2 !== var5)) {
                    _fun25175_ip = 117;
                    continue _fun25175
                }
            case 65:
                var2 = global;
                var4 = var2.Error;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Invalid external payment gateway ';
                var6 = var3.bind(var2)(var5);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var3;
                var2 = new var7[var4](var6, var5);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 117:
                var2 = _closure1_slot53;
                var2 = var2[var1];
                return var2;
            case 127:
                var0 = _closure1_slot52;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot90 = var29;
    var28 = function arg0, arg1() {
        _fun25176: for (var _fun25176_ip = 0;;) switch (_fun25176_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = new Array(0);
                var4 = var3.renewalMutations;
                var1 = null;
                var6 = var1 == var4;
                var5 = undefined;
                if (var6) {
                    _fun25176_ip = 35;
                    continue _fun25176
                }
            case 30:
                var5 = var4.items;
            case 35:
                if (!(var1 == var5)) {
                    _fun25176_ip = 44;
                    continue _fun25176
                }
            case 39:
                var5 = var3.items;
            case 44:
                var4 = var5.find;
                var3 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot32;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.planId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                if (!(var1 != var3)) {
                    _fun25176_ip = 73;
                    continue _fun25176
                }
            case 63:
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
            case 73:
                var3 = var2.push;
                var1 = new Array(0);
                var8 = arg1;
                var7 = 0;
                var9 = var1;
                var4 = arraySpread(var9, var8, var7);
                var9 = var3;
                var8 = var1;
                var7 = var2;
                var1 = apply(var9, var8, var7);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun25178: for (var _fun25178_ip = 0;;) switch (_fun25178_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure1_slot59;
                            var1 = _closure2_slot0;
                            var1 = var1.items;
                            var5 = undefined;
                            var4 = var2.bind(var5)(var1);
                            var2 = var4.bind(var5)();
                            var1 = var2.done;
                            var3 = var2;
                            if (var1) {
                                _fun25178_ip = 106;
                                continue _fun25178
                            }
                        case 44:
                            var2 = var3.value;
                            var6 = var0.planId;
                            var1 = var2.planId;
                            if (!(var6 !== var1)) {
                                _fun25178_ip = 82;
                                continue _fun25178
                            }
                        case 65:
                            var6 = var4.bind(var5)();
                            var1 = var6.done;
                            var3 = var6;
                            if (var1) {
                                _fun25178_ip = 106;
                                continue _fun25178
                            }
                        case 80:
                            _fun25178_ip = 44;
                            continue _fun25178;
                        case 82:
                            var1 = {};
                            var8 = var1;
                            var7 = var2;
                            var2 = copyDataProperties(var8, var7);
                            var8 = var1;
                            var7 = var0;
                            var2 = copyDataProperties(var8, var7);
                            return var1;
                        case 106:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot91 = var28;
    var27 = function arg0() {
        var2 = arg0;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot32;
            var1 = var2.has;
            var0 = arg0;
            var0 = var0.planId;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot92 = var27;
    var26 = function arg0, arg1, arg2, arg3() {
        _fun25181: for (var _fun25181_ip = 0;;) switch (_fun25181_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var5 = arg2;
                var3 = arg3;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var3;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 15;
                var2 = var7[var2];
                var7 = undefined;
                var4 = var4.bind(var7)(var2);
                var2 = var3.has;
                var3 = var2.bind(var3)(var6);
                var2 = 'Expected planId in group';
                var2 = var4.bind(var7)(var3, var2);
                var2 = false;
                var _closure2_slot3 = var2;
                var2 = var1.renewalMutations;
                var4 = null;
                var3 = var4 == var2;
                if (var3) {
                    _fun25181_ip = 99;
                    continue _fun25181
                }
            case 94:
                var7 = var2.items;
            case 99:
                if (!(var4 == var7)) {
                    _fun25181_ip = 108;
                    continue _fun25181
                }
            case 103:
                var7 = var1.items;
            case 108:
                var3 = var7.map;
                var2 = function(arg0) { // Environment: var0
                    _fun25182: for (var _fun25182_ip = 0;;) switch (_fun25182_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure2_slot2;
                            var1 = var4.has;
                            var0 = var3.planId;
                            var1 = var1.bind(var4)(var0);
                            var0 = var3;
                            if (!var1) {
                                _fun25182_ip = 79;
                                continue _fun25182
                            }
                        case 32:
                            var1 = true;
                            _closure2_slot3 = var1;
                            var1 = {};
                            var6 = var1;
                            var5 = var3;
                            var3 = copyDataProperties(var6, var5);
                            var4 = _closure2_slot1;
                            var3 = 'quantity';
                            var1[var3] = var4;
                            var3 = _closure2_slot0;
                            var2 = 'planId';
                            var1[var2] = var3;
                            var0 = var1;
                        case 79:
                            return var0;
                    }
                };
                var2 = var3.bind(var7)(var2);
                var3 = _closure2_slot3;
                if (var3) {
                    _fun25181_ip = 187;
                    continue _fun25181
                }
            case 130:
                var3 = {};
                var3.planId = var6;
                var3.quantity = var5;
                var6 = var1.items;
                var5 = var6.find;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.planId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var5.bind(var6)(var1);
                if (!(var4 != var1)) {
                    _fun25181_ip = 177;
                    continue _fun25181
                }
            case 166:
                var1 = var1.id;
                var3.id = var1;
            case 177:
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
            case 187:
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.quantity;
                    var0 = 0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot93 = var26;
    var25 = function arg0() {
        _fun25185: for (var _fun25185_ip = 0;;) switch (_fun25185_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var2 = var0 == var1;
                if (var2) {
                    _fun25185_ip = 34;
                    continue _fun25185
                }
            case 12:
                var3 = var1.items;
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot31;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.planId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 34:
                return var0;
        }
    };
    var _closure1_slot94 = var25;
    var24 = function arg0() {
        _fun25187: for (var _fun25187_ip = 0;;) switch (_fun25187_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                var0 = var2 != var4;
                if (!var0) {
                    _fun25187_ip = 30;
                    continue _fun25187
                }
            case 12:
                var3 = _closure1_slot61;
                var1 = undefined;
                var1 = var3.bind(var1)(var4);
                var0 = var2 == var1;
            case 30:
                if (!var0) {
                    _fun25187_ip = 51;
                    continue _fun25187
                }
            case 33:
                var3 = _closure1_slot94;
                var1 = undefined;
                var1 = var3.bind(var1)(var4);
                var0 = var2 != var1;
            case 51:
                return var0;
        }
    };
    var23 = function arg0() {
        _fun25188: for (var _fun25188_ip = 0;;) switch (_fun25188_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var2 = var0 != var4;
                var1 = null;
                if (!var2) {
                    _fun25188_ip = 28;
                    continue _fun25188
                }
            case 14:
                var3 = _closure1_slot61;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
            case 28:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun25188_ip = 57;
                    continue _fun25188
                }
            case 37:
                var3 = _closure1_slot73;
                var2 = var1.planId;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 57:
                return var0;
        }
    };
    var22 = function arg0() {
        _fun25189: for (var _fun25189_ip = 0;;) switch (_fun25189_ip) {
            case 0:
                var4 = arg0;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun25189_ip = 27;
                    continue _fun25189
                }
            case 9:
                var0 = _closure1_slot61;
                var2 = undefined;
                var0 = var0.bind(var2)(var4);
                if (!(var3 == var0)) {
                    _fun25189_ip = 31;
                    continue _fun25189
                }
            case 27:
                var3 = undefined;
                return var3;
            case 31:
                var1 = _closure1_slot70;
                var0 = var0.planId;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var21 = function arg0() {
        _fun25190: for (var _fun25190_ip = 0;;) switch (_fun25190_ip) {
            case 0:
                var0 = arg0;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun25190_ip = 43;
                    continue _fun25190
                }
            case 9:
                var1 = var0.renewalMutations;
                if (!(var3 != var1)) {
                    _fun25190_ip = 43;
                    continue _fun25190
                }
            case 19:
                var4 = _closure1_slot61;
                var0 = var0.renewalMutations;
                var2 = undefined;
                var0 = var4.bind(var2)(var0);
                if (!(var3 == var0)) {
                    _fun25190_ip = 47;
                    continue _fun25190
                }
            case 43:
                var3 = undefined;
                return var3;
            case 47:
                var1 = _closure1_slot70;
                var0 = var0.planId;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var20 = function arg0() {
        _fun25191: for (var _fun25191_ip = 0;;) switch (_fun25191_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot39;
                var1 = var1.TIER_0;
                if (!(var1 !== var2)) {
                    _fun25191_ip = 124;
                    continue _fun25191
                }
            case 20:
                var1 = _closure1_slot39;
                var1 = var1.TIER_1;
                if (!(var1 !== var2)) {
                    _fun25191_ip = 88;
                    continue _fun25191
                }
            case 34:
                var1 = _closure1_slot39;
                var1 = var1.TIER_2;
                if (!(var1 !== var2)) {
                    _fun25191_ip = 52;
                    continue _fun25191
                }
            case 48:
                var1 = undefined;
                return var1;
            case 52:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Gradients;
                var1 = var1.PREMIUM_TIER_2;
                return var1;
            case 88:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Gradients;
                var1 = var1.PREMIUM_TIER_1;
                return var1;
            case 124:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 27;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Gradients;
                var0 = var0.PREMIUM_TIER_0;
                return var0;
        }
    };
    var18 = function arg0, arg1() {
        var1 = arg0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.formatPrice;
        var3 = var1.amount;
        var1 = var1.currency;
        var4 = var4.bind(var5)(var3, var1);
        var1 = _closure1_slot69;
        var0 = arg1;
        var3 = var1.bind(var2)(var0);
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '/';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot95 = var18;
    var17 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var13 = function arg0() {
        _fun25194: for (var _fun25194_ip = 0;;) switch (_fun25194_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var1 = var0 != var4;
                var2 = 2;
                var0 = var2;
                if (!var1) {
                    _fun25194_ip = 44;
                    continue _fun25194
                }
            case 18:
                var3 = _closure1_slot28;
                var1 = var3.includes;
                var1 = var1.bind(var3)(var4);
                var0 = var2;
                if (!var1) {
                    _fun25194_ip = 44;
                    continue _fun25194
                }
            case 41:
                var0 = 1;
            case 44:
                return var0;
        }
    };
    var12 = function arg0() {
        _fun25195: for (var _fun25195_ip = 0;;) switch (_fun25195_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun25195_ip = 20;
                    continue _fun25195
                }
            case 12:
                var1 = 'trial_id';
                var0 = var1 in var2;
            case 20:
                return var0;
        }
    };
    var _closure1_slot96 = var12;
    var11 = function arg0() {
        _fun25196: for (var _fun25196_ip = 0;;) switch (_fun25196_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun25196_ip = 20;
                    continue _fun25196
                }
            case 12:
                var1 = 'discount_id';
                var0 = var1 in var2;
            case 20:
                return var0;
        }
    };
    var _closure1_slot97 = var11;
    var10 = function arg0() {
        _fun25197: for (var _fun25197_ip = 0;;) switch (_fun25197_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot42;
                var1 = var1.YEAR;
                if (!(var4 !== var1)) {
                    _fun25197_ip = 148;
                    continue _fun25197
                }
            case 23:
                var1 = _closure1_slot42;
                var1 = var1.MONTH;
                if (!(var4 !== var1)) {
                    _fun25197_ip = 89;
                    continue _fun25197
                }
            case 37:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Invalid interval type: ';
                var7 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 89:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.FPybU7;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 148:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 16;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.tfqrhj;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var9 = function arg0() {
        _fun25198: for (var _fun25198_ip = 0;;) switch (_fun25198_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun25198_ip = 21;
                    continue _fun25198
                }
            case 12:
                var2 = var1.isProvisional;
                var0 = !var2;
            case 21:
                if (!var0) {
                    _fun25198_ip = 33;
                    continue _fun25198
                }
            case 24:
                var1 = var1.bot;
                var0 = !var1;
            case 33:
                return var0;
        }
    };
    var8 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot99;
        var1 = var3.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.skuId;
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot98 = var8;
    var7 = function arg0() {
        var3 = arg0;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun25202: for (var _fun25202_ip = 0;;) switch (_fun25202_ip) {
                case 0:
                    var4 = _closure1_slot3;
                    var1 = _closure1_slot21;
                    var0 = arg1;
                    var3 = var1[var0];
                    var1 = undefined;
                    var0 = 2;
                    var0 = var4.bind(var1)(var3, var0);
                    var1 = 0;
                    var3 = var0[var1];
                    var4 = 1;
                    var1 = var0[var4];
                    var0 = _closure1_slot22;
                    var5 = var0.HOUR;
                    var0 = var4;
                    if (!(var5 !== var3)) {
                        _fun25202_ip = 79;
                        continue _fun25202
                    }
                case 59:
                    var2 = _closure1_slot22;
                    var2 = var2.DAY;
                    var0 = var4;
                    if (!(var2 === var3)) {
                        _fun25202_ip = 79;
                        continue _fun25202
                    }
                case 76:
                    var0 = 24;
                case 79:
                    var1 = var0 * var1;
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
            }
        };
        var0 = 0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot99 = var7;
    var4 = function arg0() {
        _fun25203: for (var _fun25203_ip = 0;;) switch (_fun25203_ip) {
            case 0:
                var1 = arg0;
                var6 = arguments[1];
                var5 = arguments[2];
                var2 = undefined;
                if (!(var6 === var2)) {
                    _fun25203_ip = 17;
                    continue _fun25203
                }
            case 15:
                var6 = false;
            case 17:
                if (!(var5 === var2)) {
                    _fun25203_ip = 23;
                    continue _fun25203
                }
            case 21:
                var5 = {};
            case 23:
                var4 = var1.interval;
                var0 = _closure1_slot42;
                var0 = var0.YEAR;
                if (!(var4 === var0)) {
                    _fun25203_ip = 113;
                    continue _fun25203
                }
            case 46:
                var4 = _closure1_slot58;
                var0 = {};
                var0.subscriptionPlan = var1;
                var0.isGift = var6;
                var0.priceOptions = var5;
                var0 = var4.bind(var2)(var0);
                var4 = null;
                if (!(var4 != var0)) {
                    _fun25203_ip = 113;
                    continue _fun25203
                }
            case 78:
                var4 = _closure1_slot63;
                var11 = var1.id;
                var10 = false;
                var12 = undefined;
                var9 = var6;
                var8 = var5;
                var1 = var12[var4](var11, var10, var9, var8, var7);
                var4 = var0.amount;
                var3 = 0;
                if (!(var3 === var4)) {
                    _fun25203_ip = 115;
                    continue _fun25203
                }
            case 113:
                return var2;
            case 115:
                var1 = var1.amount;
                var2 = var0.amount;
                var0 = 12;
                var0 = var0 * var2;
                var4 = var1 / var0;
                var0 = global;
                var2 = var0.Math;
                var1 = var2.floor;
                var3 = 100;
                var0 = 1;
                var0 = var0 - var4;
                var0 = var3 * var0;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3 = function arg0() {
        _fun25204: for (var _fun25204_ip = 0;;) switch (_fun25204_ip) {
            case 0:
                var9 = arg0;
                var0 = null;
                var1 = var0 == var9;
                var4 = 0;
                var0 = 0;
                if (var1) {
                    _fun25204_ip = 127;
                    continue _fun25204
                }
            case 16:
                var1 = global;
                var3 = var1.Math;
                var2 = var3.max;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 18;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.differenceInCalendarDays;
                var5 = var1.Date;
                var8 = var5.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var5
                    }
                });
                var12 = var8;
                var5 = new var12[var5](var11);
                var5 = var5 instanceof Object ? var5 : var8;
                var1 = var1.Date;
                var8 = var1.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var1
                    }
                });
                var12 = var8;
                var11 = var9;
                var1 = new var12[var1](var11, var10);
                var1 = var1 instanceof Object ? var1 : var8;
                var1 = var6.bind(var7)(var5, var1);
                var0 = var2.bind(var3)(var1, var4);
            case 127:
                return var0;
        }
    };
    var1 = function arg0() {
        var0 = global;
        var3 = var0.Math;
        var2 = var3.max;
        var4 = var0.Math;
        var1 = var4.ceil;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var5 = 18;
        var6 = var6[var5];
        var5 = undefined;
        var7 = var7.bind(var5)(var6);
        var6 = var7.differenceInDays;
        var9 = var0.Date;
        var5 = arg0;
        var11 = var5.currentPeriodEnd;
        var8 = var9.prototype;
        var8 = Object.create(var8, {
            constructor: {
                value: var9
            }
        });
        var12 = var8;
        var5 = new var12[var9](var11, var10);
        var5 = var5 instanceof Object ? var5 : var8;
        var0 = var0.Date;
        var8 = var0.prototype;
        var8 = Object.create(var8, {
            constructor: {
                value: var0
            }
        });
        var12 = var8;
        var0 = new var12[var0](var11);
        var0 = var0 instanceof Object ? var0 : var8;
        var0 = var6.bind(var7)(var5, var0);
        var1 = var1.bind(var4)(var0);
        var0 = 1;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var14 = global;
    var69 = var14.Object;
    var19 = var69.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var19.bind(var69)(var2, var0, var6);
    var0 = 0;
    var6 = var16[var0];
    var0 = undefined;
    var6 = var68.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var16[var6];
    var6 = var15.bind(var0)(var6);
    var73 = var6.isNoneSubscription;
    var _closure1_slot4 = var73;
    var6 = 2;
    var6 = var16[var6];
    var6 = var68.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var16[var6];
    var6 = var68.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var16[var6];
    var6 = var68.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var16[var6];
    var6 = var68.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var16[var6];
    var6 = var68.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var16[var6];
    var6 = var15.bind(var0)(var6);
    var19 = var6.InvoiceStatusTypes;
    var _closure1_slot10 = var19;
    var19 = var6.PaymentGateways;
    var _closure1_slot11 = var19;
    var19 = var6.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot12 = var19;
    var6 = var6.SubscriptionStatusTypes;
    var _closure1_slot13 = var6;
    var6 = 8;
    var6 = var16[var6];
    var6 = var15.bind(var0)(var6);
    var19 = var6.ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot14 = var19;
    var19 = var6.DEFAULT_APPLE_GRACE_PERIOD_DAYS;
    var _closure1_slot15 = var19;
    var19 = var6.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
    var _closure1_slot16 = var19;
    var19 = var6.DEFAULT_MAX_GRACE_PERIOD_DAYS;
    var _closure1_slot17 = var19;
    var19 = var6.DISCOUNT_DURATION_FALLBACK;
    var _closure1_slot18 = var19;
    var19 = var6.DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot19 = var19;
    var19 = var6.DiscountUserUsageLimitIntervalTypes;
    var _closure1_slot20 = var19;
    var19 = var6.FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS;
    var _closure1_slot21 = var19;
    var19 = var6.FractionalPremiumIntervalTypes;
    var _closure1_slot22 = var19;
    var19 = var6.FractionalPremiumStates;
    var _closure1_slot23 = var19;
    var19 = var6.MAX_ACCOUNT_HOLD_DAYS;
    var _closure1_slot24 = var19;
    var19 = var6.MAX_PAYMENT_PROCESSING_TIME_DAYS;
    var _closure1_slot25 = var19;
    var19 = var6.MULTI_MONTH_PLANS;
    var _closure1_slot26 = var19;
    var19 = var6.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot27 = var19;
    var19 = var6.ONE_WEEK_REVERSE_TRIAL_IDS;
    var _closure1_slot28 = var19;
    var19 = var6.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS;
    var _closure1_slot29 = var19;
    var19 = var6.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
    var _closure1_slot30 = var19;
    var19 = var6.PREMIUM_GUILD_SUBSCRIPTION_PLANS;
    var _closure1_slot31 = var19;
    var19 = var6.PREMIUM_PLANS;
    var _closure1_slot32 = var19;
    var19 = var6.PREMIUM_SKU_TO_MONTHLY_PLAN;
    var _closure1_slot33 = var19;
    var19 = var6.PREMIUM_TIER_2_PLANS;
    var _closure1_slot34 = var19;
    var19 = var6.PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
    var _closure1_slot35 = var19;
    var19 = var6.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot36 = var19;
    var19 = var6.PREMIUM_TYPE_DISPLAY_NAME;
    var _closure1_slot37 = var19;
    var19 = var6.PremiumSubscriptionSKUs;
    var _closure1_slot38 = var19;
    var19 = var6.PremiumTypes;
    var _closure1_slot39 = var19;
    var19 = var6.PremiumUserLimits;
    var _closure1_slot40 = var19;
    var19 = var6.REVERSE_TRIAL_IDS;
    var _closure1_slot41 = var19;
    var19 = var6.SubscriptionIntervalTypes;
    var _closure1_slot42 = var19;
    var19 = var6.SubscriptionPlanInfo;
    var _closure1_slot43 = var19;
    var19 = var6.SubscriptionPlans;
    var _closure1_slot44 = var19;
    var69 = var6.TRIAL_FOR_EVERYONE_OFFER_EXPIRES_APPROACHING_THRESHOLD;
    var _closure1_slot45 = var69;
    var69 = var6.USER_PREMIUM_OFFER_EXPIRES_APPROACHING_4_DAY_THRESHOLD;
    var _closure1_slot46 = var69;
    var6 = var6.USER_PREMIUM_OFFER_EXPIRES_APPROACHING_5_DAY_THRESHOLD;
    var _closure1_slot47 = var6;
    var6 = 9;
    var6 = var16[var6];
    var6 = var15.bind(var0)(var6);
    var6 = var6.getPremiumGroupProductName;
    var _closure1_slot48 = var6;
    var6 = 10;
    var6 = var16[var6];
    var6 = var15.bind(var0)(var6);
    var69 = var6.CurrencyCodes;
    var _closure1_slot49 = var69;
    var69 = var6.PaymentGatewayToFriendlyName;
    var _closure1_slot50 = var69;
    var6 = var6.PREPAID_PAYMENT_SOURCES;
    var _closure1_slot51 = var6;
    var6 = {
        'PAYMENT_SOURCE_MANAGEMENT': 'https://support.apple.com/HT201266',
        'BILLING_HISTORY': 'https://support.apple.com/HT201266',
        'SUBSCRIPTION_MANAGEMENT': 'https://support.apple.com/HT202039'
    };
    var _closure1_slot52 = var6;
    var6 = {
        'SUBSCRIPTION_MANAGEMENT': 'https://play.google.com/store/account/subscriptions',
        'PAYMENT_SOURCE_MANAGEMENT': 'https://play.google.com/store/paymentmethods',
        'BILLING_HISTORY': 'https://play.google.com/store/account/orderhistory'
    };
    var _closure1_slot53 = var6;
    var6 = 11;
    var6 = var16[var6];
    var69 = var68.bind(var0)(var6);
    var6 = var69.prototype;
    var68 = Object.create(var6, {
        constructor: {
            value: var69
        }
    });
    var79 = 'PremiumUtils.tsx';
    var80 = var68;
    var6 = new var80[var69](var79, var78);
    var6 = var6 instanceof Object ? var6 : var68;
    var _closure1_slot54 = var6;
    var69 = {};
    var6 = 'bundle';
    var69.BUNDLE = var6;
    var6 = 'tier_0';
    var69.TIER_0 = var6;
    var6 = 'tier_1';
    var69.TIER_1 = var6;
    var6 = 'tier_2';
    var69.TIER_2 = var6;
    var6 = 'premium_guild';
    var69.PREMIUM_GUILD = var6;
    var _closure1_slot55 = var69;
    var68 = {};
    var6 = 'mid';
    var68.MID = var6;
    var6 = 'high';
    var68.HIGH = var6;
    var _closure1_slot56 = var68;
    var70 = var14.Set;
    var71 = var19.NONE_MONTH;
    var6 = new Array(13);
    var6[0] = var71;
    var71 = var19.NONE_3_MONTH;
    var6[1] = var71;
    var71 = var19.NONE_6_MONTH;
    var6[2] = var71;
    var71 = var19.NONE_YEAR;
    var6[3] = var71;
    var71 = var19.PREMIUM_MONTH_TIER_0;
    var6[4] = var71;
    var71 = var19.PREMIUM_MONTH_TIER_1;
    var6[5] = var71;
    var71 = var19.PREMIUM_MONTH_TIER_2;
    var6[6] = var71;
    var71 = var19.PREMIUM_YEAR_TIER_0;
    var6[7] = var71;
    var71 = var19.PREMIUM_YEAR_TIER_1;
    var6[8] = var71;
    var71 = var19.PREMIUM_YEAR_TIER_2;
    var6[9] = var71;
    var71 = var19.PREMIUM_3_MONTH_TIER_2;
    var6[10] = var71;
    var71 = var19.PREMIUM_6_MONTH_TIER_2;
    var6[11] = var71;
    var19 = var19.PREMIUM_GROUP_MONTH;
    var6[12] = var19;
    var19 = var70.prototype;
    var19 = Object.create(var19, {
        constructor: {
            value: var70
        }
    });
    var80 = var19;
    var79 = var6;
    var6 = new var80[var70](var79, var78);
    var6 = var6 instanceof Object ? var6 : var19;
    var _closure1_slot57 = var6;
    var19 = function arg0() {
        _fun25206: for (var _fun25206_ip = 0;;) switch (_fun25206_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun25206_ip = 63;
                    continue _fun25206
                }
            case 12:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var3 = var1.createdAt;
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var2 = var2 - var1;
                var1 = 2592000000.0;
                var0 = var2 < var1;
            case 63:
                return var0;
        }
    };
    var6 = function arg0() {
        _fun25207: for (var _fun25207_ip = 0;;) switch (_fun25207_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.subscriptionPlan;
                var6 = var1.isGift;
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun25207_ip = 23;
                    continue _fun25207
                }
            case 21:
                var6 = false;
            case 23:
                var4 = var1.priceOptions;
                if (!(var4 === var5)) {
                    _fun25207_ip = 35;
                    continue _fun25207
                }
            case 33:
                var4 = {};
            case 35:
                var2 = _closure1_slot33;
                var0 = var0.skuId;
                var3 = var2[var0];
                var0 = null;
                var2 = var0 == var3;
                if (var2) {
                    _fun25207_ip = 82;
                    continue _fun25207
                }
            case 61:
                var2 = _closure1_slot63;
                var9 = false;
                var11 = undefined;
                var10 = var3;
                var8 = var6;
                var7 = var4;
                var0 = var11[var2](var10, var9, var8, var7, var6);
            case 82:
                return var0;
        }
    };
    var _closure1_slot58 = var6;
    var72 = var14.Object;
    var71 = var72.freeze;
    var70 = {};
    var70.isNewUser = var19;
    var14 = 14;
    var76 = var16[var14];
    var76 = var15.bind(var0)(var76);
    var76 = var76.isPremiumAtLeast;
    var70.isPremiumAtLeast = var76;
    var76 = var16[var14];
    var76 = var15.bind(var0)(var76);
    var76 = var76.isPremium;
    var70.isPremium = var76;
    var76 = var16[var14];
    var76 = var15.bind(var0)(var76);
    var76 = var76.isPremiumExactly;
    var70.isPremiumExactly = var76;
    var70.isPremiumEligible = var9;
    var70.getPrice = var65;
    var70.getDefaultPrice = var66;
    var70.getInterval = var60;
    var70.getIntervalString = var59;
    var70.getIntervalStringAsNoun = var58;
    var70.getPremiumType = var57;
    var70.getTierDisplayNameByPlanId = var55;
    var70.getDisplayName = var56;
    var70.getPremiumPlanOptions = var54;
    var70.getReverseTrialWeeks = var13;
    var70.formatInterval = var10;
    var70.getPlanDescription = var75;
    var75 = function arg0() {
        _fun25208: for (var _fun25208_ip = 0;;) switch (_fun25208_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot38;
                var0 = var0.TIER_0;
                var0 = var2 === var0;
                if (var0) {
                    _fun25208_ip = 37;
                    continue _fun25208
                }
            case 23:
                var3 = _closure1_slot38;
                var3 = var3.TIER_1;
                var0 = var2 === var3;
            case 37:
                if (var0) {
                    _fun25208_ip = 54;
                    continue _fun25208
                }
            case 40:
                var1 = _closure1_slot38;
                var1 = var1.TIER_2;
                var0 = var2 === var1;
            case 54:
                return var0;
        }
    };
    var70.isPremiumSku = var75;
    var75 = function arg0, arg1() {
        _fun25209: for (var _fun25209_ip = 0;;) switch (_fun25209_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var2 = _closure1_slot42;
                var2 = var2.MONTH;
                if (!(var5 !== var2)) {
                    _fun25209_ip = 103;
                    continue _fun25209
                }
            case 23:
                var1 = _closure1_slot42;
                var1 = var1.YEAR;
                if (!(var5 !== var1)) {
                    _fun25209_ip = 94;
                    continue _fun25209
                }
            case 37:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = '';
                var1 = ' interval subscription period not implemented';
                var7 = var4.bind(var2)(var5, var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 94:
                var1 = 12;
                var1 = var1 * var0;
                return var1;
            case 103:
                return var0;
        }
    };
    var70.getIntervalMonths = var75;
    var75 = 30;
    var75 = var16[var75];
    var75 = var15.bind(var0)(var75);
    var75 = var75.getUserMaxFileSize;
    var70.getUserMaxFileSize = var75;
    var70.getSkuIdForPlan = var74;
    var74 = function arg0() {
        _fun25210: for (var _fun25210_ip = 0;;) switch (_fun25210_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot39;
                var1 = var1.TIER_0;
                if (!(var1 !== var2)) {
                    _fun25210_ip = 76;
                    continue _fun25210
                }
            case 20:
                var1 = _closure1_slot39;
                var1 = var1.TIER_1;
                if (!(var1 !== var2)) {
                    _fun25210_ip = 64;
                    continue _fun25210
                }
            case 34:
                var1 = _closure1_slot39;
                var1 = var1.TIER_2;
                if (!(var1 !== var2)) {
                    _fun25210_ip = 52;
                    continue _fun25210
                }
            case 48:
                var1 = undefined;
                return var1;
            case 52:
                var1 = _closure1_slot38;
                var1 = var1.TIER_2;
                return var1;
            case 64:
                var1 = _closure1_slot38;
                var1 = var1.TIER_1;
                return var1;
            case 76:
                var0 = _closure1_slot38;
                var0 = var0.TIER_0;
                return var0;
        }
    };
    var70.getSkuIdForPremiumType = var74;
    var74 = function arg0() {
        _fun25211: for (var _fun25211_ip = 0;;) switch (_fun25211_ip) {
            case 0:
                var3 = _closure1_slot70;
                var2 = undefined;
                var0 = arg0;
                var3 = var3.bind(var2)(var0);
                var0 = _closure1_slot39;
                var2 = var0.TIER_2;
                var0 = 0;
                if (!(var3 === var2)) {
                    _fun25211_ip = 37;
                    continue _fun25211
                }
            case 33:
                var0 = _closure1_slot27;
            case 37:
                return var0;
        }
    };
    var70.getNumIncludedPremiumGuildSubscriptionSlots = var74;
    var70.getBillingInformationString = var48;
    var70.extendDateWithUnconsumedFractionalPremium = var47;
    var70.getUnactivatedFractionalPremiumDurationString = var46;
    var70.isSwitchingPlansDisabled = var45;
    var70.getSwitchingPlansDisabledMessage = var44;
    var70.isNoneSubscription = var73;
    var70.getPlanIdFromInvoice = var38;
    var70.getStatusFromInvoice = var37;
    var70.isBaseSubscriptionCanceled = var36;
    var70.getPremiumGuildIntervalPrice = var33;
    var73 = function arg0() {
        _fun25212: for (var _fun25212_ip = 0;;) switch (_fun25212_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun25212_ip = 23;
                    continue _fun25212
                }
            case 12:
                var2 = var3.size;
                var1 = 0;
                var0 = var1 !== var2;
            case 23:
                if (!var0) {
                    _fun25212_ip = 62;
                    continue _fun25212
                }
            case 26:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.from;
                var3 = var1.bind(var2)(var3);
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun25213: for (var _fun25213_ip = 0;;) switch (_fun25213_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.subscriptionPlanId;
                            var3 = var1.parentId;
                            var1 = var1.consumed;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun25213_ip = 34;
                                continue _fun25213
                            }
                        case 30:
                            var0 = var2 != var3;
                        case 34:
                            if (!var0) {
                                _fun25213_ip = 40;
                                continue _fun25213
                            }
                        case 37:
                            var0 = !var1;
                        case 40:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 62:
                return var0;
        }
    };
    var70.hasAccountCredit = var73;
    var73 = function arg0, arg1() {
        _fun25214: for (var _fun25214_ip = 0;;) switch (_fun25214_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var2 = null;
                var0 = var2 != var4;
                if (!var0) {
                    _fun25214_ip = 32;
                    continue _fun25214
                }
            case 21:
                var6 = var4.size;
                var5 = 0;
                var0 = var5 !== var6;
            case 32:
                if (!var0) {
                    _fun25214_ip = 39;
                    continue _fun25214
                }
            case 35:
                var0 = var2 != var3;
            case 39:
                if (!var0) {
                    _fun25214_ip = 76;
                    continue _fun25214
                }
            case 42:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.from;
                var3 = var2.bind(var3)(var4);
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun25215: for (var _fun25215_ip = 0;;) switch (_fun25215_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.subscriptionPlanId;
                            var4 = var0.parentId;
                            var1 = var0.consumed;
                            var3 = null;
                            var0 = var3 != var2;
                            if (!var0) {
                                _fun25215_ip = 34;
                                continue _fun25215
                            }
                        case 30:
                            var0 = var3 != var4;
                        case 34:
                            if (!var0) {
                                _fun25215_ip = 40;
                                continue _fun25215
                            }
                        case 37:
                            var0 = !var1;
                        case 40:
                            if (!var0) {
                                _fun25215_ip = 54;
                                continue _fun25215
                            }
                        case 43:
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 54:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 76:
                return var0;
        }
    };
    var70.hasUnconsumedGiftForSubscriptionPlan = var73;
    var70.getBillingReviewSubheader = var32;
    var70.getIntervalForInvoice = var31;
    var70.getPremiumPlanItem = var67;
    var70.getGuildBoostPlanItem = var25;
    var70.isBoostOnlySubscription = var24;
    var70.getPremiumSkuIdForSubscription = var23;
    var70.getPremiumTypeFromSubscription = var22;
    var70.getPremiumTypeFromSubscriptionRenewalMutations = var21;
    var70.getPremiumGradientColor = var20;
    var70.getUnactivatedFractionalPremiumHours = var8;
    var70.castPremiumSubscriptionAsSkuId = var17;
    var70.calculateDiscountPercentageForYearlyPlan = var4;
    var70.getDaysSincePremium = var3;
    var70.getDaysRemainingUntilSubscriptionCurrentPeriodEnds = var1;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.ANIMATED_EMOJIS;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseAnimatedEmojis = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.EMOJIS_EVERYWHERE;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseEmojisEverywhere = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.SOUNDBOARD_EVERYWHERE;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseSoundboardEverywhere = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.CUSTOM_CALL_SOUNDS;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseCustomCallSounds = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.UPLOAD_LARGE_FILES;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUploadLargeFiles = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.PROFILE_BADGES;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseBadges = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.INCREASED_VIDEO_UPLOAD_QUALITY;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseHighVideoUploadQuality = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.CUSTOM_DISCRIMINATOR;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canEditDiscriminator = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.BOOST_DISCOUNT;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.hasBoostDiscount = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.ANIMATED_AVATAR;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseAnimatedAvatar = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.FANCY_VOICE_CHANNEL_REACTIONS;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseFancyVoiceChannelReactions = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.INSTALL_PREMIUM_APPLICATIONS;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canInstallPremiumApplications = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.INCREASED_MESSAGE_LENGTH;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseIncreasedMessageLength = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.INCREASED_GUILD_LIMIT;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseIncreasedGuildCap = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.REDEEM_PREMIUM_PERKS;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canRedeemPremiumPerks = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.PROFILE_PREMIUM_FEATURES;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUsePremiumProfileCustomization = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.APP_ICONS;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUsePremiumAppIcons = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.PREMIUM_GUILD_MEMBER_PROFILE;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUsePremiumGuildMemberProfile = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.CLIENT_THEMES;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseClientThemes = var73;
    var73 = function arg0, arg1() {
        _fun25235: for (var _fun25235_ip = 0;;) switch (_fun25235_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = _closure1_slot56;
                var0 = var0.HIGH;
                if (!(var2 !== var0)) {
                    _fun25235_ip = 91;
                    continue _fun25235
                }
            case 23:
                var0 = _closure1_slot56;
                var0 = var0.MID;
                var0 = var2 === var0;
                if (!var0) {
                    _fun25235_ip = 89;
                    continue _fun25235
                }
            case 40:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 28;
                var3 = var8[var2];
                var6 = undefined;
                var5 = var7.bind(var6)(var3);
                var3 = var5.canUserUse;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.STREAM_MID_QUALITY;
                var0 = var3.bind(var5)(var2, var4);
            case 89:
                _fun25235_ip = 140;
                continue _fun25235;
            case 91:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 28;
                var2 = var7[var1];
                var5 = undefined;
                var3 = var6.bind(var5)(var2);
                var2 = var3.canUserUse;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.STREAM_HIGH_QUALITY;
                var0 = var2.bind(var3)(var1, var4);
            case 140:
                return var0;
        }
    };
    var70.canStreamQuality = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.FREE_BOOSTS;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.hasFreeBoosts = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.STICKERS_EVERYWHERE;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseCustomStickersEverywhere = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.VIDEO_FILTER_ASSETS;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseCustomBackgrounds = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.COLLECTIBLES;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUseCollectibles = var73;
    var73 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 28;
        var2 = var5[var0];
        var1 = undefined;
        var3 = var4.bind(var1)(var2);
        var2 = var3.canUserUse;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.PREMIUM_VOICE_FILTERS;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var70.canUsePremiumVoiceFilters = var73;
    var70.formatPriceString = var18;
    var70.StreamQuality = var68;
    var70 = var71.bind(var72)(var70);
    var71 = 31;
    var71 = var16[var71];
    var73 = var15.bind(var0)(var71);
    var72 = var73.fileFinishedImporting;
    var71 = 'utils/PremiumUtils.tsx';
    var71 = var72.bind(var73)(var71);
    var2.default = var70;
    var2.Branding = var69;
    var2.StreamQuality = var68;
    var68 = function arg0() {
        _fun25241: for (var _fun25241_ip = 0;;) switch (_fun25241_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.planId;
                var3 = _closure1_slot32;
                var0 = var3.has;
                var0 = var0.bind(var3)(var2);
                if (!var0) {
                    _fun25241_ip = 46;
                    continue _fun25241
                }
            case 29:
                var3 = _closure1_slot75;
                var0 = undefined;
                var0 = var3.bind(var0)(var4);
                if (var0) {
                    _fun25241_ip = 209;
                    continue _fun25241
                }
            case 46:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_MONTH_TIER_0;
                if (!(var2 !== var0)) {
                    _fun25241_ip = 197;
                    continue _fun25241
                }
            case 63:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_YEAR_TIER_0;
                if (!(var2 !== var0)) {
                    _fun25241_ip = 197;
                    continue _fun25241
                }
            case 77:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_MONTH_TIER_1;
                if (!(var2 !== var0)) {
                    _fun25241_ip = 185;
                    continue _fun25241
                }
            case 91:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_YEAR_TIER_1;
                if (!(var2 !== var0)) {
                    _fun25241_ip = 185;
                    continue _fun25241
                }
            case 105:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_MONTH_TIER_2;
                if (!(var2 !== var0)) {
                    _fun25241_ip = 173;
                    continue _fun25241
                }
            case 119:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_YEAR_TIER_2;
                if (!(var2 !== var0)) {
                    _fun25241_ip = 173;
                    continue _fun25241
                }
            case 133:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_3_MONTH_TIER_2;
                if (!(var2 !== var0)) {
                    _fun25241_ip = 173;
                    continue _fun25241
                }
            case 147:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_6_MONTH_TIER_2;
                if (!(var2 !== var0)) {
                    _fun25241_ip = 173;
                    continue _fun25241
                }
            case 161:
                var0 = _closure1_slot55;
                var0 = var0.PREMIUM_GUILD;
                _fun25241_ip = 183;
                continue _fun25241;
            case 173:
                var2 = _closure1_slot55;
                var0 = var2.TIER_2;
            case 183:
                _fun25241_ip = 195;
                continue _fun25241;
            case 185:
                var2 = _closure1_slot55;
                var0 = var2.TIER_1;
            case 195:
                _fun25241_ip = 207;
                continue _fun25241;
            case 197:
                var2 = _closure1_slot55;
                var0 = var2.TIER_0;
            case 207:
                _fun25241_ip = 219;
                continue _fun25241;
            case 209:
                var1 = _closure1_slot55;
                var0 = var1.BUNDLE;
            case 219:
                return var0;
        }
    };
    var2.getPremiumBranding = var68;
    var2.getPremiumPlanItem = var67;
    var2.getDefaultPrice = var66;
    var2.getPrice = var65;
    var65 = function arg0() {
        _fun25242: for (var _fun25242_ip = 0;;) switch (_fun25242_ip) {
            case 0:
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun25242_ip = 22;
                    continue _fun25242
                }
            case 9:
                var0 = _closure1_slot12;
                var3 = var0.DEFAULT;
            case 22:
                var1 = _closure1_slot64;
                var0 = arg0;
                var0 = var1.bind(var2)(var0, var3);
                var0 = var0.countryPrices;
                return var0;
        }
    };
    var2.getCountryPrices = var65;
    var2.experimentalGetPrices = var64;
    var2.experimentalGetPrice = var63;
    var2.getServerPriceFromClientPrice = var62;
    var2.getItemPlansTotalServerPrice = var61;
    var61 = function arg0, arg1, arg2, arg3() {
        _fun25243: for (var _fun25243_ip = 0;;) switch (_fun25243_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var1 = null;
                if (!(var1 === var2)) {
                    _fun25243_ip = 57;
                    continue _fun25243
                }
            case 12:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 15;
                var0 = var4[var0];
                var6 = undefined;
                var4 = var3.bind(var6)(var0);
                var3 = var1 !== var5;
                var0 = "Subscription can't be null";
                var0 = var4.bind(var6)(var3, var0);
                var2 = new Array(0);
            case 57:
                var4 = _closure1_slot68;
                if (!(var1 === var5)) {
                    _fun25243_ip = 81;
                    continue _fun25243
                }
            case 68:
                var3 = _closure1_slot92;
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                _fun25243_ip = 93;
                continue _fun25243;
            case 81:
                var1 = _closure1_slot91;
                var0 = undefined;
                var3 = var1.bind(var0)(var5, var2);
            case 93:
                var2 = undefined;
                var1 = arg2;
                var0 = arg3;
                var0 = var4.bind(var2)(var3, var1, var0);
                return var0;
        }
    };
    var2.getSubscriptionWithNewPlansTotalServerPrice = var61;
    var2.getInterval = var60;
    var60 = function arg0() {
        _fun25244: for (var _fun25244_ip = 0;;) switch (_fun25244_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot20;
                var1 = var1.MONTH;
                if (!(var1 !== var2)) {
                    _fun25244_ip = 156;
                    continue _fun25244
                }
            case 23:
                var1 = _closure1_slot20;
                var1 = var1.YEAR;
                if (!(var1 !== var2)) {
                    _fun25244_ip = 97;
                    continue _fun25244
                }
            case 37:
                var1 = _closure1_slot20;
                var1 = var1.DAY;
                if (!(var1 !== var2)) {
                    _fun25244_ip = 61;
                    continue _fun25244
                }
            case 51:
                var1 = _closure1_slot20;
                var1 = var1.WEEK;
            case 61:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = 'Unexpected interval';
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 97:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.tfqrhj;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 156:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 16;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.FPybU7;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getDiscountIntervalString = var60;
    var2.getIntervalString = var59;
    var2.getIntervalStringAsNoun = var58;
    var2.getPremiumType = var57;
    var2.getDisplayName = var56;
    var56 = function arg0() {
        _fun25245: for (var _fun25245_ip = 0;;) switch (_fun25245_ip) {
            case 0:
                var6 = arg0;
                var1 = _closure1_slot38;
                var1 = var1.TIER_0;
                if (!(var1 !== var6)) {
                    _fun25245_ip = 256;
                    continue _fun25245
                }
            case 23:
                var1 = _closure1_slot38;
                var1 = var1.TIER_1;
                if (!(var1 !== var6)) {
                    _fun25245_ip = 197;
                    continue _fun25245
                }
            case 40:
                var1 = _closure1_slot38;
                var1 = var1.TIER_2;
                if (!(var1 !== var6)) {
                    _fun25245_ip = 138;
                    continue _fun25245
                }
            case 54:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = 'Unsupported sku';
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.captureBillingException;
                var2 = {};
                var5 = {};
                var5.skuId = var6;
                var2.tags = var5;
                var2 = var3.bind(var4)(var1, var2);
                throw var1;
            case 138:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.lG6a5x;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 197:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.FSOz78;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 256:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 16;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["t9uG/o"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getDisplayNameFromSku = var56;
    var2.getTierDisplayNameByPlanId = var55;
    var55 = function arg0() {
        _fun25246: for (var _fun25246_ip = 0;;) switch (_fun25246_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var5 = undefined;
                if (!(var2 === var5)) {
                    _fun25246_ip = 14;
                    continue _fun25246
                }
            case 12:
                var2 = false;
            case 14:
                var0 = _closure1_slot39;
                var0 = var0.TIER_0;
                if (!(var0 !== var3)) {
                    _fun25246_ip = 187;
                    continue _fun25246
                }
            case 34:
                var0 = _closure1_slot39;
                var0 = var0.TIER_1;
                if (!(var0 !== var3)) {
                    _fun25246_ip = 121;
                    continue _fun25246
                }
            case 48:
                var0 = _closure1_slot39;
                var0 = var0.TIER_2;
                if (!(var0 !== var3)) {
                    _fun25246_ip = 64;
                    continue _fun25246
                }
            case 62:
                return var5;
            case 64:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 16;
                var3 = var7[var0];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var0 = var7[var0];
                var0 = var6.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.lG6a5x;
                var0 = var3.bind(var4)(var0);
                return var0;
            case 121:
                var0 = 'Classic';
                if (var2) {
                    _fun25246_ip = 185;
                    continue _fun25246
                }
            case 130:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 16;
                var4 = var8[var3];
                var4 = var7.bind(var5)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.FSOz78;
                var0 = var4.bind(var6)(var3);
            case 185:
                return var0;
            case 187:
                var0 = 'Basic';
                if (var2) {
                    _fun25246_ip = 249;
                    continue _fun25246
                }
            case 194:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["t9uG/o"];
                var0 = var2.bind(var3)(var1);
            case 249:
                return var0;
        }
    };
    var2.getPremiumTypeDisplayName = var55;
    var55 = function arg0() {
        _fun25247: for (var _fun25247_ip = 0;;) switch (_fun25247_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.renewalInvoicePreview;
                var10 = var0.subscription;
                var9 = var0.planId;
                var7 = var0.includePremiumGuilds;
                var2 = undefined;
                if (!(var7 === var2)) {
                    _fun25247_ip = 35;
                    continue _fun25247
                }
            case 33:
                var7 = false;
            case 35:
                var6 = var0.hasDiscountApplied;
                if (!(var6 === var2)) {
                    _fun25247_ip = 47;
                    continue _fun25247
                }
            case 45:
                var6 = false;
            case 47:
                var5 = var0.activeDiscountInfo;
                var3 = var0.hasFractionalPremiumWithSub;
                if (!(var3 === var2)) {
                    _fun25247_ip = 65;
                    continue _fun25247
                }
            case 63:
                var3 = false;
            case 65:
                var1 = _closure1_slot8;
                var0 = var1.get;
                var9 = var0.bind(var1)(var9);
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 15;
                var0 = var11[var0];
                var11 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 != var9;
                var0 = 'Missing plan';
                var0 = var11.bind(var2)(var1, var0);
                var1 = _closure1_slot72;
                var0 = {};
                var0.subscription = var10;
                var11 = var9.id;
                var0.planId = var11;
                var8 = _closure1_slot87;
                var8 = var8.bind(var2)(var4, var10, var9);
                var0.price = var8;
                var0.includePremiumGuilds = var7;
                var0.hasDiscountApplied = var6;
                var0.activeDiscountInfo = var5;
                var0.renewalInvoicePreview = var4;
                var0.hasFractionalPremiumWithSub = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getPlanDescriptionFromInvoice = var55;
    var55 = function arg0() {
        _fun25248: for (var _fun25248_ip = 0;;) switch (_fun25248_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.planId;
                var4 = var0.additionalPlans;
                var1 = _closure1_slot4;
                var6 = undefined;
                var2 = var1.bind(var6)(var3);
                var1 = null;
                var5 = null;
                if (var2) {
                    _fun25248_ip = 45;
                    continue _fun25248
                }
            case 36:
                var2 = _closure1_slot71;
                var5 = var2.bind(var6)(var3);
            case 45:
                var2 = var1 == var4;
                var10 = undefined;
                if (var2) {
                    _fun25248_ip = 71;
                    continue _fun25248
                }
            case 54:
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var2 = var0.planId;
                    var1 = _closure1_slot31;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var10 = var3.bind(var4)(var2);
            case 71:
                var2 = var1 == var10;
                var3 = undefined;
                if (var2) {
                    _fun25248_ip = 86;
                    continue _fun25248
                }
            case 80:
                var3 = var10.planId;
            case 86:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_MONTH_GUILD;
                if (!(var3 !== var2)) {
                    _fun25248_ip = 131;
                    continue _fun25248
                }
            case 100:
                var2 = var1 == var10;
                var3 = undefined;
                if (var2) {
                    _fun25248_ip = 115;
                    continue _fun25248
                }
            case 109:
                var3 = var10.planId;
            case 115:
                var2 = _closure1_slot44;
                var2 = var2.PREMIUM_YEAR_GUILD;
                var8 = null;
                if (!(var3 === var2)) {
                    _fun25248_ip = 164;
                    continue _fun25248
                }
            case 131:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 16;
                var2 = var4[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.t;
                var8 = var2.Pi5yMJ;
            case 164:
                var2 = var1 != var8;
                var4 = undefined;
                if (!var2) {
                    _fun25248_ip = 231;
                    continue _fun25248
                }
            case 173:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var2 = var7[var2];
                var2 = var3.bind(var6)(var2);
                var7 = var2.intl;
                var3 = var7.formatToPlainString;
                var2 = {};
                var11 = var1 == var10;
                var9 = undefined;
                if (var11) {
                    _fun25248_ip = 220;
                    continue _fun25248
                }
            case 214:
                var9 = var10.quantity;
            case 220:
                var2.num = var9;
                var4 = var3.bind(var7)(var8, var2);
            case 231:
                if (!(var1 != var5)) {
                    _fun25248_ip = 239;
                    continue _fun25248
                }
            case 235:
                if (!(var1 == var4)) {
                    _fun25248_ip = 287;
                    continue _fun25248
                }
            case 239:
                if (!(var1 == var5)) {
                    _fun25248_ip = 285;
                    continue _fun25248
                }
            case 243:
                if (!(var1 == var4)) {
                    _fun25248_ip = 283;
                    continue _fun25248
                }
            case 247:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = 'Subscription without premium or premium guild subscription';
                var14 = var2;
                var1 = new var14[var3](var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 283:
                return var4;
            case 285:
                return var5;
            case 287:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 16;
                var2 = var7[var0];
                var2 = var1.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var7[var0];
                var0 = var1.bind(var6)(var0);
                var0 = var0.t;
                var1 = var0.FN5T9r;
                var0 = {};
                var0.premiumDescription = var5;
                var0.premiumGuildDescription = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getExternalPlanDisplayName = var55;
    var2.getPremiumPlanOptions = var54;
    var54 = function arg0, arg1() {
        _fun25250: for (var _fun25250_ip = 0;;) switch (_fun25250_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var0 = global;
                var6 = var0.Set;
                var3 = _closure1_slot42;
                var4 = var3.MONTH;
                var3 = new Array(2);
                var3[0] = var4;
                var4 = _closure1_slot42;
                var4 = var4.YEAR;
                var3[1] = var4;
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = var4;
                var7 = var3;
                var3 = new var8[var6](var7, var6);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = var4.has;
                var3 = var3.bind(var4)(var2);
                if (var3) {
                    _fun25250_ip = 135;
                    continue _fun25250
                }
            case 85:
                var6 = var0.Error;
                var3 = var0.HermesInternal;
                var4 = var3.concat;
                var3 = 'Unsupported plan interval for gifting premium type: ';
                var7 = var4.bind(var3)(var2);
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = var4;
                var3 = new var8[var6](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
            case 135:
                var3 = _closure1_slot39;
                var3 = var3.TIER_0;
                if (!(var5 !== var3)) {
                    _fun25250_ip = 251;
                    continue _fun25250
                }
            case 149:
                var3 = _closure1_slot39;
                var3 = var3.TIER_2;
                if (!(var5 !== var3)) {
                    _fun25250_ip = 213;
                    continue _fun25250
                }
            case 163:
                var4 = var0.Error;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'Unsupported gifting premium type: ';
                var7 = var3.bind(var0)(var5);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var0 = new var8[var4](var7, var6);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 213:
                var0 = _closure1_slot42;
                var0 = var0.MONTH;
                if (!(var2 !== var0)) {
                    _fun25250_ip = 239;
                    continue _fun25250
                }
            case 227:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_YEAR_TIER_2;
                _fun25250_ip = 249;
                continue _fun25250;
            case 239:
                var3 = _closure1_slot44;
                var0 = var3.PREMIUM_MONTH_TIER_2;
            case 249:
                return var0;
            case 251:
                var0 = _closure1_slot42;
                var0 = var0.MONTH;
                if (!(var2 !== var0)) {
                    _fun25250_ip = 277;
                    continue _fun25250
                }
            case 265:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_YEAR_TIER_0;
                _fun25250_ip = 287;
                continue _fun25250;
            case 277:
                var1 = _closure1_slot44;
                var0 = var1.PREMIUM_MONTH_TIER_0;
            case 287:
                return var0;
        }
    };
    var2.getPlanIdForPremiumType = var54;
    var2.getNumPremiumGuildSubscriptions = var53;
    var2.subscriptionHasPremiumGuildPlan = var52;
    var2.isPremiumBaseSubscriptionPlan = var51;
    var2.isPremiumGuildSubscriptionPlan = var50;
    var50 = function arg0() {
        _fun25251: for (var _fun25251_ip = 0;;) switch (_fun25251_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot76;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun25251_ip = 29;
                    continue _fun25251
                }
            case 20:
                var1 = _closure1_slot77;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var2.isPremiumSubscriptionPlan = var50;
    var50 = function arg0() {
        _fun25252: for (var _fun25252_ip = 0;;) switch (_fun25252_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun25252_ip = 29;
                    continue _fun25252
                }
            case 12:
                var1 = _closure1_slot44;
                var1 = var1.PREMIUM_GROUP_MONTH;
                var0 = var2 === var1;
            case 29:
                return var0;
        }
    };
    var2.isPremiumGroupSubscriptionPlan = var50;
    var2.getBillingGracePeriodDaysAndExpiresDate = var49;
    var2.getBillingInformationString = var48;
    var2.extendDateWithUnconsumedFractionalPremium = var47;
    var2.getUnactivatedFractionalPremiumDurationString = var46;
    var2.isSwitchingPlansDisabled = var45;
    var2.getSwitchingPlansDisabledMessage = var44;
    var2.isSubscriptionPrepaidPaymentSource = var43;
    var2.isPrepaidPaymentSource = var42;
    var2.getCoercedPremiumGuildSubscriptionStatus = var41;
    var2.isPremiumGuildSubscriptionCanceled = var40;
    var40 = function arg0() {
        _fun25253: for (var _fun25253_ip = 0;;) switch (_fun25253_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.subscription;
                var20 = var1.user;
                var11 = var1.price;
                var0 = var1.renewalInvoicePreview;
                var3 = var1.fractionalPremiumInfo;
                var7 = var2.planId;
                var6 = var2.additionalPlans;
                var5 = _closure1_slot8;
                var4 = var5.get;
                var7 = var4.bind(var5)(var7);
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 15;
                var4 = var8[var4];
                var10 = undefined;
                var9 = var5.bind(var10)(var4);
                var4 = null;
                var8 = var4 != var7;
                var5 = 'Missing plan';
                var5 = var9.bind(var10)(var8, var5);
                var5 = _closure1_slot74;
                var5 = var5.bind(var10)(var6);
                var12 = _closure1_slot88;
                var23 = var2.planId;
                var22 = var2.paymentSourceId;
                var21 = var2.currency;
                var24 = undefined;
                var6 = var24[var12](var23, var22, var21, var20, var19);
                var6 = var6.amount;
                var8 = var6 * var5;
                var12 = var8;
                if (!(var4 != var0)) {
                    _fun25253_ip = 191;
                    continue _fun25253
                }
            case 155:
                var13 = var0.invoiceItems;
                var9 = var13.find;
                var6 = function(arg0) { // Environment: var6
                    var2 = _closure1_slot31;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.subscriptionPlanId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var9.bind(var13)(var6);
                var12 = var8;
                if (!(var4 != var6)) {
                    _fun25253_ip = 191;
                    continue _fun25253
                }
            case 185:
                var12 = var6.amount;
            case 191:
                if (!(var4 == var11)) {
                    _fun25253_ip = 233;
                    continue _fun25253
                }
            case 195:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 20;
                var6 = var9[var6];
                var9 = var8.bind(var10)(var6);
                var8 = var9.formatPrice;
                var6 = var2.currency;
                var11 = var8.bind(var9)(var12, var6);
            case 233:
                var8 = var4 == var0;
                var6 = undefined;
                if (var8) {
                    _fun25253_ip = 248;
                    continue _fun25253
                }
            case 242:
                var6 = var0.taxInclusive;
            case 248:
                if (!(var4 == var6)) {
                    _fun25253_ip = 276;
                    continue _fun25253
                }
            case 252:
                var8 = var2.latestInvoice;
                var9 = var4 == var8;
                var0 = undefined;
                if (var9) {
                    _fun25253_ip = 273;
                    continue _fun25253
                }
            case 267:
                var0 = var8.taxInclusive;
            case 273:
                var6 = var0;
            case 276:
                var0 = var4 == var6;
                if (var0) {
                    _fun25253_ip = 286;
                    continue _fun25253
                }
            case 283:
                var0 = var6;
            case 286:
                var6 = _closure1_slot83;
                var6 = var6.bind(var10)(var2);
                if (var6) {
                    _fun25253_ip = 931;
                    continue _fun25253
                }
            case 301:
                var8 = var2.status;
                var6 = _closure1_slot13;
                var6 = var6.ACCOUNT_HOLD;
                if (!(var6 !== var8)) {
                    _fun25253_ip = 704;
                    continue _fun25253
                }
            case 323:
                var6 = _closure1_slot13;
                var6 = var6.PAUSE_PENDING;
                if (!(var6 !== var8)) {
                    _fun25253_ip = 567;
                    continue _fun25253
                }
            case 340:
                var6 = _closure1_slot13;
                var6 = var6.PAUSED;
                if (!(var6 !== var8)) {
                    _fun25253_ip = 567;
                    continue _fun25253
                }
            case 357:
                var6 = var2.isPurchasedViaGoogle;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 16;
                var9 = var17[var8];
                var9 = var16.bind(var10)(var9);
                var13 = var9.intl;
                var12 = var13.format;
                var8 = var17[var8];
                var8 = var16.bind(var10)(var8);
                var8 = var8.t;
                if (var6) {
                    _fun25253_ip = 546;
                    continue _fun25253
                }
            case 413:
                if (var0) {
                    _fun25253_ip = 481;
                    continue _fun25253
                }
            case 416:
                var9 = var8.ijSDcI;
                var6 = {};
                var6.quantity = var5;
                var14 = 20;
                var14 = var17[var14];
                var19 = var16.bind(var10)(var14);
                var18 = var19.formatRate;
                var15 = var7.interval;
                var14 = var7.intervalCount;
                var14 = var18.bind(var19)(var11, var15, var14);
                var6.rate = var14;
                var6 = var12.bind(var13)(var9, var6);
                _fun25253_ip = 544;
                continue _fun25253;
            case 481:
                var14 = var8.eDwrLA;
                var9 = {};
                var9.quantity = var5;
                var15 = 20;
                var15 = var17[var15];
                var18 = var16.bind(var10)(var15);
                var17 = var18.formatRate;
                var16 = var7.interval;
                var15 = var7.intervalCount;
                var15 = var17.bind(var18)(var11, var16, var15);
                var9.rate = var15;
                var6 = var12.bind(var13)(var14, var9);
            case 544:
                _fun25253_ip = 565;
                continue _fun25253;
            case 546:
                var9 = var8["5iud9s"];
                var8 = {};
                var8.quantity = var5;
                var6 = var12.bind(var13)(var9, var8);
            case 565:
                return var6;
            case 567:
                if (!(var4 != var3)) {
                    _fun25253_ip = 639;
                    continue _fun25253
                }
            case 571:
                var3 = var3.isFractionalPremiumActive;
                if (var3) {
                    _fun25253_ip = 639;
                    continue _fun25253
                }
            case 580:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 16;
                var4 = var9[var3];
                var4 = var8.bind(var10)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var3 = var9[var3];
                var3 = var8.bind(var10)(var3);
                var3 = var3.t;
                var3 = var3.CduWAm;
                var3 = var4.bind(var6)(var3);
                _fun25253_ip = 702;
                continue _fun25253;
            case 639:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 16;
                var8 = var12[var4];
                var8 = var6.bind(var10)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var4 = var12[var4];
                var4 = var6.bind(var10)(var4);
                var4 = var4.t;
                var6 = var4["5iud9s"];
                var4 = {};
                var4.quantity = var5;
                var3 = var8.bind(var9)(var6, var4);
            case 702:
                return var3;
            case 704:
                var3 = var2.isPurchasedViaGoogle;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 16;
                var6 = var15[var4];
                var6 = var14.bind(var10)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var4 = var15[var4];
                var4 = var14.bind(var10)(var4);
                var4 = var4.t;
                if (var3) {
                    _fun25253_ip = 903;
                    continue _fun25253
                }
            case 760:
                if (var0) {
                    _fun25253_ip = 833;
                    continue _fun25253
                }
            case 763:
                var6 = var4["0QxOAi"];
                var3 = {};
                var3.quantity = var5;
                var3.boostQuantity = var5;
                var12 = 20;
                var12 = var15[var12];
                var17 = var14.bind(var10)(var12);
                var16 = var17.formatRate;
                var13 = var7.interval;
                var12 = var7.intervalCount;
                var12 = var16.bind(var17)(var11, var13, var12);
                var3.rate = var12;
                var3 = var8.bind(var9)(var6, var3);
                _fun25253_ip = 901;
                continue _fun25253;
            case 833:
                var12 = var4.oiRy7v;
                var6 = {};
                var6.quantity = var5;
                var6.boostQuantity = var5;
                var13 = 20;
                var13 = var15[var13];
                var16 = var14.bind(var10)(var13);
                var15 = var16.formatRate;
                var14 = var7.interval;
                var13 = var7.intervalCount;
                var13 = var15.bind(var16)(var11, var14, var13);
                var6.rate = var13;
                var3 = var8.bind(var9)(var12, var6);
            case 901:
                _fun25253_ip = 929;
                continue _fun25253;
            case 903:
                var6 = var4.Nlf3nc;
                var4 = {};
                var4.quantity = var5;
                var4.boostQuantity = var5;
                var3 = var8.bind(var9)(var6, var4);
            case 929:
                return var3;
            case 931:
                var2 = var2.isPurchasedViaGoogle;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 16;
                var3 = var12[var1];
                var3 = var9.bind(var10)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var12[var1];
                var1 = var9.bind(var10)(var1);
                var1 = var1.t;
                if (var2) {
                    _fun25253_ip = 1120;
                    continue _fun25253
                }
            case 987:
                if (var0) {
                    _fun25253_ip = 1055;
                    continue _fun25253
                }
            case 990:
                var2 = var1["yjsv/s"];
                var0 = {};
                var0.quantity = var5;
                var6 = 20;
                var6 = var12[var6];
                var14 = var9.bind(var10)(var6);
                var13 = var14.formatRate;
                var8 = var7.interval;
                var6 = var7.intervalCount;
                var6 = var13.bind(var14)(var11, var8, var6);
                var0.rate = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun25253_ip = 1118;
                continue _fun25253;
            case 1055:
                var6 = var1["0ozBSB"];
                var2 = {};
                var2.quantity = var5;
                var8 = 20;
                var8 = var12[var8];
                var10 = var9.bind(var10)(var8);
                var9 = var10.formatRate;
                var8 = var7.interval;
                var7 = var7.intervalCount;
                var7 = var9.bind(var10)(var11, var8, var7);
                var2.rate = var7;
                var0 = var3.bind(var4)(var6, var2);
            case 1118:
                _fun25253_ip = 1141;
                continue _fun25253;
            case 1120:
                var2 = var1["3/WTrI"];
                var1 = {};
                var1.quantity = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1141:
                return var0;
        }
    };
    var2.getPremiumGuildHeaderDescription = var40;
    var2.getFormattedPriceForPlan = var39;
    var39 = function arg0, arg1, arg2() {
        var0 = arg0;
        var5 = _closure1_slot84;
        var3 = undefined;
        var4 = arg1;
        var2 = arg2;
        var4 = var5.bind(var3)(var0, var4, var2);
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 20;
        var1 = var5[var1];
        var3 = var2.bind(var3)(var1);
        var2 = var3.formatRate;
        var1 = var0.interval;
        var0 = var0.intervalCount;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var2.getFormattedRateForPlan = var39;
    var2.getPlanIdFromInvoice = var38;
    var2.getStatusFromInvoice = var37;
    var2.isBaseSubscriptionCanceled = var36;
    var2.isSubscriptionStatusFailedPayment = var35;
    var2.getFormattedPlanPriceFromInvoice = var34;
    var2.getPremiumGuildIntervalPrice = var33;
    var2.getBillingReviewSubheader = var32;
    var2.getIntervalForInvoice = var31;
    var31 = function arg0() {
        _fun25256: for (var _fun25256_ip = 0;;) switch (_fun25256_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.intervalType;
                var8 = undefined;
                if (!(var3 === var8)) {
                    _fun25256_ip = 28;
                    continue _fun25256
                }
            case 15:
                var1 = _closure1_slot42;
                var3 = var1.MONTH;
            case 28:
                var7 = var0.intervalCount;
                if (!(var7 === var8)) {
                    _fun25256_ip = 41;
                    continue _fun25256
                }
            case 38:
                var7 = 1;
            case 41:
                var1 = var0.capitalize;
                if (!(var1 === var8)) {
                    _fun25256_ip = 53;
                    continue _fun25256
                }
            case 51:
                var1 = false;
            case 53:
                var0 = _closure1_slot42;
                var0 = var0.DAY;
                if (!(var0 !== var3)) {
                    _fun25256_ip = 326;
                    continue _fun25256
                }
            case 73:
                var0 = _closure1_slot42;
                var0 = var0.MONTH;
                if (!(var0 !== var3)) {
                    _fun25256_ip = 233;
                    continue _fun25256
                }
            case 90:
                var0 = _closure1_slot42;
                var0 = var0.YEAR;
                if (!(var0 !== var3)) {
                    _fun25256_ip = 140;
                    continue _fun25256
                }
            case 104:
                var0 = global;
                var4 = var0.Error;
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = 'Unsupported interval duration.';
                var13 = var3;
                var0 = new var13[var4](var12, var11);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 140:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var5 = var4[var0];
                var5 = var3.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var0 = var4[var0];
                var0 = var3.bind(var8)(var0);
                var3 = var0.t;
                if (var1) {
                    _fun25256_ip = 210;
                    continue _fun25256
                }
            case 187:
                var4 = var3["9DFiHk"];
                var0 = {};
                var0.years = var7;
                var0 = var5.bind(var6)(var4, var0);
                _fun25256_ip = 231;
                continue _fun25256;
            case 210:
                var4 = var3["h+63yl"];
                var3 = {};
                var3.years = var7;
                var0 = var5.bind(var6)(var4, var3);
            case 231:
                return var0;
            case 233:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var5 = var4[var0];
                var5 = var3.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var0 = var4[var0];
                var0 = var3.bind(var8)(var0);
                var3 = var0.t;
                if (var1) {
                    _fun25256_ip = 303;
                    continue _fun25256
                }
            case 280:
                var4 = var3["4SEnCZ"];
                var0 = {};
                var0.months = var7;
                var0 = var5.bind(var6)(var4, var0);
                _fun25256_ip = 324;
                continue _fun25256;
            case 303:
                var4 = var3.x5MgxS;
                var3 = {};
                var3.months = var7;
                var0 = var5.bind(var6)(var4, var3);
            case 324:
                return var0;
            case 326:
                var6 = 7;
                if (!(var7 >= var6)) {
                    _fun25256_ip = 343;
                    continue _fun25256
                }
            case 333:
                var3 = var7 % var6;
                var0 = 0;
                if (!(var3 !== var0)) {
                    _fun25256_ip = 436;
                    continue _fun25256
                }
            case 343:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var5 = var4[var0];
                var5 = var3.bind(var8)(var5);
                var9 = var5.intl;
                var5 = var9.formatToPlainString;
                var0 = var4[var0];
                var0 = var3.bind(var8)(var0);
                var3 = var0.t;
                if (var1) {
                    _fun25256_ip = 413;
                    continue _fun25256
                }
            case 390:
                var4 = var3["kbBj/h"];
                var0 = {};
                var0.days = var7;
                var0 = var5.bind(var9)(var4, var0);
                _fun25256_ip = 434;
                continue _fun25256;
            case 413:
                var4 = var3["6Cdzoy"];
                var3 = {};
                var3.days = var7;
                var0 = var5.bind(var9)(var4, var3);
            case 434:
                _fun25256_ip = 538;
                continue _fun25256;
            case 436:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var4 = var9[var2];
                var4 = var3.bind(var8)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var9[var2];
                var2 = var3.bind(var8)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun25256_ip = 510;
                    continue _fun25256
                }
            case 483:
                var3 = var2.EIpHEj;
                var1 = {};
                var8 = var7 / var6;
                var1.weeks = var8;
                var1 = var4.bind(var5)(var3, var1);
                _fun25256_ip = 535;
                continue _fun25256;
            case 510:
                var3 = var2.fRNBRX;
                var2 = {};
                var6 = var7 / var6;
                var2.weeks = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 535:
                var0 = var1;
            case 538:
                return var0;
        }
    };
    var2.formatTrialOfferIntervalDuration = var31;
    var2.formatTrialCtaIntervalDuration = var30;
    var30 = function arg0, arg1() {
        _fun25257: for (var _fun25257_ip = 0;;) switch (_fun25257_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun25257_ip = 38;
                    continue _fun25257
                }
            case 9:
                var2 = var0.subscription_trial;
                if (!(var1 != var2)) {
                    _fun25257_ip = 38;
                    continue _fun25257
                }
            case 19:
                var2 = var0.subscription_trial;
                var3 = var2.sku_id;
                var2 = arg1;
                if (!(var3 !== var2)) {
                    _fun25257_ip = 40;
                    continue _fun25257
                }
            case 38:
                return var1;
            case 40:
                var0 = var0.subscription_trial;
                var2 = _closure1_slot89;
                var1 = {};
                var3 = var0.interval;
                var1.intervalType = var3;
                var0 = var0.interval_count;
                var1.intervalCount = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.formatTrialCtaIntervalDurationFromTrialOffer = var30;
    var30 = function arg0() {
        _fun25258: for (var _fun25258_ip = 0;;) switch (_fun25258_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.intervalType;
                var8 = undefined;
                if (!(var3 === var8)) {
                    _fun25258_ip = 28;
                    continue _fun25258
                }
            case 15:
                var1 = _closure1_slot42;
                var3 = var1.MONTH;
            case 28:
                var7 = var0.intervalCount;
                if (!(var7 === var8)) {
                    _fun25258_ip = 41;
                    continue _fun25258
                }
            case 38:
                var7 = 1;
            case 41:
                var1 = var0.capitalize;
                if (!(var1 === var8)) {
                    _fun25258_ip = 53;
                    continue _fun25258
                }
            case 51:
                var1 = false;
            case 53:
                var0 = _closure1_slot42;
                var0 = var0.DAY;
                if (!(var0 !== var3)) {
                    _fun25258_ip = 318;
                    continue _fun25258
                }
            case 73:
                var0 = _closure1_slot42;
                var0 = var0.MONTH;
                if (!(var0 !== var3)) {
                    _fun25258_ip = 229;
                    continue _fun25258
                }
            case 90:
                var0 = _closure1_slot42;
                var0 = var0.YEAR;
                if (!(var0 !== var3)) {
                    _fun25258_ip = 140;
                    continue _fun25258
                }
            case 104:
                var0 = global;
                var4 = var0.Error;
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = 'Unsupported interval duration.';
                var13 = var3;
                var0 = new var13[var4](var12, var11);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 140:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var5 = var4[var0];
                var5 = var3.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var0 = var4[var0];
                var0 = var3.bind(var8)(var0);
                var3 = var0.t;
                if (var1) {
                    _fun25258_ip = 208;
                    continue _fun25258
                }
            case 187:
                var4 = var3.PClsrw;
                var0 = {};
                var0.years = var7;
                var0 = var5.bind(var6)(var4, var0);
                _fun25258_ip = 227;
                continue _fun25258;
            case 208:
                var4 = var3.IfYQVC;
                var3 = {};
                var3.years = var7;
                var0 = var5.bind(var6)(var4, var3);
            case 227:
                return var0;
            case 229:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var5 = var4[var0];
                var5 = var3.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var0 = var4[var0];
                var0 = var3.bind(var8)(var0);
                var3 = var0.t;
                if (var1) {
                    _fun25258_ip = 297;
                    continue _fun25258
                }
            case 276:
                var4 = var3.kridzK;
                var0 = {};
                var0.months = var7;
                var0 = var5.bind(var6)(var4, var0);
                _fun25258_ip = 316;
                continue _fun25258;
            case 297:
                var4 = var3.erUSmA;
                var3 = {};
                var3.months = var7;
                var0 = var5.bind(var6)(var4, var3);
            case 316:
                return var0;
            case 318:
                var6 = 7;
                if (!(var7 >= var6)) {
                    _fun25258_ip = 335;
                    continue _fun25258
                }
            case 325:
                var3 = var7 % var6;
                var0 = 0;
                if (!(var3 !== var0)) {
                    _fun25258_ip = 424;
                    continue _fun25258
                }
            case 335:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var5 = var4[var0];
                var5 = var3.bind(var8)(var5);
                var9 = var5.intl;
                var5 = var9.formatToPlainString;
                var0 = var4[var0];
                var0 = var3.bind(var8)(var0);
                var3 = var0.t;
                if (var1) {
                    _fun25258_ip = 403;
                    continue _fun25258
                }
            case 382:
                var4 = var3["k2UNz+"];
                var0 = {};
                var0.days = var7;
                var0 = var5.bind(var9)(var4, var0);
                _fun25258_ip = 422;
                continue _fun25258;
            case 403:
                var4 = var3.jzH70Z;
                var3 = {};
                var3.days = var7;
                var0 = var5.bind(var9)(var4, var3);
            case 422:
                _fun25258_ip = 522;
                continue _fun25258;
            case 424:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var4 = var9[var2];
                var4 = var3.bind(var8)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var9[var2];
                var2 = var3.bind(var8)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun25258_ip = 496;
                    continue _fun25258
                }
            case 471:
                var3 = var2.EmoBD2;
                var1 = {};
                var8 = var7 / var6;
                var1.weeks = var8;
                var1 = var4.bind(var5)(var3, var1);
                _fun25258_ip = 519;
                continue _fun25258;
            case 496:
                var3 = var2.iVZYyl;
                var2 = {};
                var6 = var7 / var6;
                var2.weeks = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 519:
                var0 = var1;
            case 522:
                return var0;
        }
    };
    var2.formatIntervalDuration = var30;
    var2.getExternalSubscriptionMethodUrl = var29;
    var29 = function arg0, arg1() {
        _fun25259: for (var _fun25259_ip = 0;;) switch (_fun25259_ip) {
            case 0:
                var4 = arg1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 14;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var2 = var5.isPremium;
                var0 = arg0;
                var0 = var2.bind(var5)(var0);
                if (var0) {
                    _fun25259_ip = 70;
                    continue _fun25259
                }
            case 45:
                var2 = _closure1_slot86;
                var1 = null;
                var5 = var1 == var4;
                var1 = undefined;
                if (var5) {
                    _fun25259_ip = 65;
                    continue _fun25259
                }
            case 60:
                var1 = var4.status;
            case 65:
                var0 = var2.bind(var3)(var1);
            case 70:
                return var0;
        }
    };
    var2.hasPremiumSubscriptionToDisplay = var29;
    var29 = function() {
        _fun25260: for (var _fun25260_ip = 0;;) switch (_fun25260_ip) {
            case 0:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 25;
                var4 = var6[var5];
                var3 = undefined;
                var9 = var2.bind(var3)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var8.bind(var9)(var7, var4);
                var5 = var6[var5];
                var8 = var2.bind(var3)(var5);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var9;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var7.bind(var8)(var5, var0);
                var0 = 14;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.isPremium;
                var0 = var0.bind(var2)(var5);
                if (var0) {
                    _fun25260_ip = 143;
                    continue _fun25260
                }
            case 118:
                var2 = _closure1_slot86;
                var1 = null;
                var5 = var1 == var4;
                var1 = undefined;
                if (var5) {
                    _fun25260_ip = 138;
                    continue _fun25260
                }
            case 133:
                var1 = var4.status;
            case 138:
                var0 = var2.bind(var3)(var1);
            case 143:
                return var0;
        }
    };
    var2.useHasPremiumSubscriptionToDisplay = var29;
    var2.getItemsFromNewAdditionalPlans = var28;
    var2.getItemsWithoutPremiumPlanItem = var27;
    var2.getItemsWithUpsertedPlanIdForGroup = var26;
    var26 = function arg0, arg1() {
        var5 = _closure1_slot93;
        var6 = _closure1_slot32;
        var10 = undefined;
        var9 = arg0;
        var8 = arg1;
        var7 = 1;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.getItemsWithUpsertedPremiumPlanId = var26;
    var26 = function arg0, arg1, arg2() {
        var5 = _closure1_slot93;
        var6 = _closure1_slot31;
        var10 = undefined;
        var9 = arg0;
        var8 = arg2;
        var7 = arg1;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.getItemsWithUpsertedPremiumGuildPlan = var26;
    var26 = function arg0() {
        _fun25265: for (var _fun25265_ip = 0;;) switch (_fun25265_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.find;
                var0 = function(arg0) { // Environment: var1
                    var1 = 'id';
                    var0 = arg0;
                    var0 = var1 in var0;
                    var0 = !var0;
                    return var0;
                };
                var2 = var2.bind(var3)(var0);
                var4 = null;
                if (!(var4 == var2)) {
                    _fun25265_ip = 41;
                    continue _fun25265
                }
            case 26:
                var5 = var3.find;
                var0 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot32;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.planId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var5.bind(var3)(var0);
            case 41:
                var _closure2_slot0 = var2;
                var0 = var3;
                if (!(var4 != var2)) {
                    _fun25265_ip = 132;
                    continue _fun25265
                }
            case 52:
                var7 = _closure1_slot8;
                var6 = var7.get;
                var2 = var2.planId;
                var2 = var6.bind(var7)(var2);
                var _closure2_slot1 = var2;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 15;
                var5 = var6[var5];
                var6 = undefined;
                var5 = var7.bind(var6)(var5);
                var4 = var4 != var2;
                var2 = 'Missing plan';
                var2 = var5.bind(var6)(var4, var2);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun25268: for (var _fun25268_ip = 0;;) switch (_fun25268_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = _closure2_slot0;
                            if (!(var0 !== var1)) {
                                _fun25268_ip = 226;
                                continue _fun25268
                            }
                        case 17:
                            var5 = _closure1_slot8;
                            var4 = var5.get;
                            var1 = var0.planId;
                            var4 = var4.bind(var5)(var1);
                            var7 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var6 = 15;
                            var1 = var1[var6];
                            var5 = undefined;
                            var9 = var7.bind(var5)(var1);
                            var1 = null;
                            var8 = var1 != var4;
                            var7 = 'Missing plan';
                            var7 = var9.bind(var5)(var8, var7);
                            var7 = _closure2_slot1;
                            var8 = var7.interval;
                            var7 = var4.interval;
                            if (!(var8 === var7)) {
                                _fun25268_ip = 120;
                                continue _fun25268
                            }
                        case 100:
                            var7 = _closure2_slot1;
                            var8 = var7.intervalCount;
                            var7 = var4.intervalCount;
                            if (!(var8 !== var7)) {
                                _fun25268_ip = 224;
                                continue _fun25268
                            }
                        case 120:
                            var9 = _closure1_slot8;
                            var8 = var9.getForSkuAndInterval;
                            var7 = var4.skuId;
                            var4 = _closure2_slot1;
                            var4 = var4.interval;
                            var2 = _closure2_slot1;
                            var2 = var2.intervalCount;
                            var2 = var8.bind(var9)(var7, var4, var2);
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var4 = var4.bind(var5)(var3);
                            var3 = var1 != var2;
                            var1 = 'Missing planForInterval';
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = {};
                            var12 = var1;
                            var11 = var0;
                            var3 = copyDataProperties(var12, var11);
                            var3 = var2.id;
                            var2 = 'planId';
                            var1[var2] = var3;
                            return var1;
                        case 224:
                            return var0;
                        case 226:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 132:
                return var0;
        }
    };
    var2.coerceExistingItemsToNewItemInterval = var26;
    var26 = function arg0() {
        _fun25269: for (var _fun25269_ip = 0;;) switch (_fun25269_ip) {
            case 0:
                var4 = arguments[1];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun25269_ip = 21;
                    continue _fun25269
                }
            case 9:
                var0 = {};
                var1 = true;
                var0.useSpace = var1;
                var4 = var0;
            case 21:
                var2 = _closure1_slot40;
                var1 = arg0;
                var1 = var2[var1];
                var1 = var1.fileSize;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 26;
                var0 = var5[var0];
                var3 = var2.bind(var3)(var0);
                var2 = var3.formatSize;
                var0 = 1024;
                var1 = var1 / var0;
                var0 = {};
                var5 = true;
                var0.useKibibytes = var5;
                var4 = var4.useSpace;
                var0.useSpace = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getMaxFileSizeForPremiumType = var26;
    var2.getGuildBoostPlanItem = var25;
    var2.isBoostOnlySubscription = var24;
    var2.getPremiumSkuIdForSubscription = var23;
    var2.getPremiumTypeFromSubscription = var22;
    var2.getPremiumTypeFromSubscriptionRenewalMutations = var21;
    var2.getPremiumGradientColor = var20;
    var2.isNewUser = var19;
    var2.formatPriceString = var18;
    var2.castPremiumSubscriptionAsSkuId = var17;
    var17 = function arg0() {
        _fun25270: for (var _fun25270_ip = 0;;) switch (_fun25270_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_MONTH_TIER_0;
                if (!(var0 !== var4)) {
                    _fun25270_ip = 236;
                    continue _fun25270
                }
            case 23:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_YEAR_TIER_0;
                if (!(var0 !== var4)) {
                    _fun25270_ip = 202;
                    continue _fun25270
                }
            case 40:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_MONTH_TIER_2;
                if (!(var0 !== var4)) {
                    _fun25270_ip = 168;
                    continue _fun25270
                }
            case 54:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_GROUP_MONTH;
                if (!(var0 !== var4)) {
                    _fun25270_ip = 168;
                    continue _fun25270
                }
            case 68:
                var0 = _closure1_slot44;
                var0 = var0.PREMIUM_YEAR_TIER_2;
                if (!(var0 !== var4)) {
                    _fun25270_ip = 134;
                    continue _fun25270
                }
            case 82:
                var0 = global;
                var3 = var0.Error;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = 'Unsupported gifting planId: ';
                var5 = var2.bind(var0)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var0 = new var6[var3](var5, var4);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 134:
                var0 = {};
                var2 = _closure1_slot39;
                var2 = var2.TIER_2;
                var0.premiumType = var2;
                var2 = _closure1_slot42;
                var2 = var2.YEAR;
                var0.planInterval = var2;
                return var0;
            case 168:
                var0 = {};
                var2 = _closure1_slot39;
                var2 = var2.TIER_2;
                var0.premiumType = var2;
                var2 = _closure1_slot42;
                var2 = var2.MONTH;
                var0.planInterval = var2;
                return var0;
            case 202:
                var0 = {};
                var2 = _closure1_slot39;
                var2 = var2.TIER_0;
                var0.premiumType = var2;
                var2 = _closure1_slot42;
                var2 = var2.YEAR;
                var0.planInterval = var2;
                return var0;
            case 236:
                var0 = {};
                var2 = _closure1_slot39;
                var2 = var2.TIER_0;
                var0.premiumType = var2;
                var1 = _closure1_slot42;
                var1 = var1.MONTH;
                var0.planInterval = var1;
                return var0;
        }
    };
    var2.getPremiumTypeFromPlanId = var17;
    var17 = function arg0() {
        var1 = 'isNitroLocked';
        var0 = arg0;
        var0 = var1 in var0;
        return var0;
    };
    var2.isNitroLockedState = var17;
    var17 = var16[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.isPremiumAtLeast;
    var2.isPremiumAtLeast = var17;
    var17 = var16[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.isPremiumAtMost;
    var2.isPremiumAtMost = var17;
    var17 = var16[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.isPremium;
    var2.isPremium = var17;
    var14 = var16[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.isPremiumExactly;
    var2.isPremiumExactly = var14;
    var14 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 25;
        var1 = var5[var1];
        var2 = undefined;
        var7 = var4.bind(var2)(var1);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var3 = var6.bind(var7)(var3, var1);
        var1 = 14;
        var1 = var5[var1];
        var2 = var4.bind(var2)(var1);
        var1 = var2.isPremiumExactly;
        var0 = _closure1_slot39;
        var0 = var0.TIER_2;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.useHasTier2Premium = var14;
    var2.getReverseTrialWeeks = var13;
    var13 = function arg0() {
        _fun25274: for (var _fun25274_ip = 0;;) switch (_fun25274_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 29;
                var0 = var4[var0];
                var4 = undefined;
                var5 = var1.bind(var4)(var0);
                var1 = var5.getOfferNoticeTimingExperimentThreshold;
                var0 = 'getOfferNoticeThreshold';
                var0 = var1.bind(var5)(var0);
                var1 = 0;
                if (!(var1 === var0)) {
                    _fun25274_ip = 131;
                    continue _fun25274
                }
            case 49:
                var1 = _closure1_slot96;
                var1 = var1.bind(var4)(var2);
                if (var1) {
                    _fun25274_ip = 87;
                    continue _fun25274
                }
            case 61:
                var1 = _closure1_slot97;
                var1 = var1.bind(var4)(var2);
                var4 = _closure1_slot47;
                if (var1) {
                    _fun25274_ip = 82;
                    continue _fun25274
                }
            case 77:
                var1 = var4;
                _fun25274_ip = 85;
                continue _fun25274;
            case 82:
                var1 = var4;
            case 85:
                _fun25274_ip = 128;
                continue _fun25274;
            case 87:
                var4 = var2.trial_id;
                var2 = _closure1_slot35;
                if (!(var4 !== var2)) {
                    _fun25274_ip = 121;
                    continue _fun25274
                }
            case 101:
                var2 = _closure1_slot36;
                if (!(var4 !== var2)) {
                    _fun25274_ip = 115;
                    continue _fun25274
                }
            case 109:
                var2 = _closure1_slot47;
                _fun25274_ip = 119;
                continue _fun25274;
            case 115:
                var2 = _closure1_slot45;
            case 119:
                _fun25274_ip = 125;
                continue _fun25274;
            case 121:
                var2 = _closure1_slot46;
            case 125:
                var1 = var2;
            case 128:
                var0 = var1;
            case 131:
                return var0;
        }
    };
    var2.getOfferNoticeThreshold = var13;
    var2.isTrialOffer = var12;
    var2.isDiscountOffer = var11;
    var2.formatInterval = var10;
    var2.isPremiumEligible = var9;
    var2.getFractionalPremiumUnitsHours = var8;
    var2.getFractionalPremiumUnitsHoursFromSkuIds = var7;
    var2.getMonthlyPrice = var6;
    var5 = function arg0() {
        _fun25275: for (var _fun25275_ip = 0;;) switch (_fun25275_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.subscriptionPlan;
                var6 = var0.isGift;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun25275_ip = 23;
                    continue _fun25275
                }
            case 21:
                var6 = false;
            case 23:
                var5 = var0.priceOptions;
                if (!(var5 === var4)) {
                    _fun25275_ip = 35;
                    continue _fun25275
                }
            case 33:
                var5 = {};
            case 35:
                var1 = var3.interval;
                var0 = _closure1_slot42;
                var0 = var0.DAY;
                if (!(var1 !== var0)) {
                    _fun25275_ip = 185;
                    continue _fun25275
                }
            case 61:
                var1 = var3.interval;
                var0 = _closure1_slot42;
                var0 = var0.MONTH;
                if (!(var1 === var0)) {
                    _fun25275_ip = 94;
                    continue _fun25275
                }
            case 81:
                var1 = var3.intervalCount;
                var0 = 1;
                if (!(var0 !== var1)) {
                    _fun25275_ip = 181;
                    continue _fun25275
                }
            case 94:
                var1 = _closure1_slot58;
                var0 = {};
                var0.subscriptionPlan = var3;
                var0.isGift = var6;
                var0.priceOptions = var5;
                var1 = var1.bind(var4)(var0);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun25275_ip = 179;
                    continue _fun25275
                }
            case 126:
                var4 = var3.interval;
                var2 = _closure1_slot42;
                var2 = var2.MONTH;
                if (!(var4 !== var2)) {
                    _fun25275_ip = 161;
                    continue _fun25275
                }
            case 146:
                var4 = var3.intervalCount;
                var2 = 12;
                var2 = var2 * var4;
                _fun25275_ip = 167;
                continue _fun25275;
            case 161:
                var2 = var3.intervalCount;
            case 167:
                var1 = var1.amount;
                var1 = var1 * var2;
                return var1;
            case 179:
                return var0;
            case 181:
                var0 = null;
                return var0;
            case 185:
                var0 = null;
                return var0;
        }
    };
    var2.calculateMonthlyPriceEquivalentTotal = var5;
    var2.calculateDiscountPercentageForYearlyPlan = var4;
    var2.getDaysSincePremium = var3;
    var2.getDaysRemainingUntilSubscriptionCurrentPeriodEnds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3112, 1621, 3113, 3114, 3118, 3119, 660, 1623, 3126, 483, 3, 3127, 3125, 1638, 44, 1234, 3047, 3134, 3140, 4607, 478, 9990, 667, 2436, 566, 3359, 670, 12621, 12625, 7696, 2]);