// stores/native/IAPStore.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun42316: for (var _fun42316_ip = 0;;) switch (_fun42316_ip) {
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
                _fun42316_ip = 74;
                continue _fun42316;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun42319: for (var _fun42319_ip = 0;;) switch (_fun42319_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.currencyCode;
                var0 = var2.toLowerCase;
                var3 = var0.bind(var2)();
                var2 = var1.price;
                var0 = 100;
                var6 = var2 / var0;
                var4 = _closure1_slot19;
                var2 = 'BG';
                if (!(var2 === var4)) {
                    _fun42319_ip = 61;
                    continue _fun42319
                }
            case 47:
                var2 = _closure1_slot9;
                var2 = var2.EUR;
                if (!(var3 !== var2)) {
                    _fun42319_ip = 107;
                    continue _fun42319
                }
            case 61:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.formatSingleCurrencyPrice;
                var2 = {};
                var7 = false;
                var2.convertToMajorUnits = var7;
                var2 = var4.bind(var5)(var6, var3, var2);
                _fun42319_ip = 150;
                continue _fun42319;
            case 107:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 7;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.formatDualPriceForBG;
                var0 = {};
                var7 = false;
                var0.convertToMajorUnits = var7;
                var2 = var4.bind(var5)(var6, var0);
            case 150:
                var0 = {};
                var10 = var0;
                var9 = var1;
                var4 = copyDataProperties(var10, var9);
                var4 = var1.price;
                var1 = 'price';
                var0[var1] = var4;
                var1 = 'currencyCode';
                var0[var1] = var3;
                var1 = 'priceString';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var8 = function arg0() {
        _fun42320: for (var _fun42320_ip = 0;;) switch (_fun42320_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.skus;
                var1 = var0.skusType;
                var0 = undefined;
                var4 = undefined;
                var7 = undefined;
                var5 = var6.forEach;
                var2 = function(arg0) { // Environment: var3
                    var3 = arg0;
                    var2 = _closure1_slot12;
                    var1 = var2.set;
                    var0 = var3.identifier;
                    var0 = var1.bind(var2)(var0, var3);
                    var0 = undefined;
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                var2 = global;
                var8 = var2.Array;
                var6 = var8.from;
                var9 = _closure1_slot12;
                var5 = var9.values;
                var5 = var5.bind(var9)();
                var10 = var6.bind(var8)(var5);
                var6 = null;
                var5 = var6 == var10;
                var9 = undefined;
                if (var5) {
                    _fun42320_ip = 98;
                    continue _fun42320
                }
            case 83:
                var8 = var10.filter;
                var5 = function(arg0) { // Environment: var3
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var9 = var8.bind(var10)(var5);
            case 98:
                _closure1_slot11 = var9;
                if (!(var6 != var9)) {
                    _fun42320_ip = 121;
                    continue _fun42320
                }
            case 106:
                var8 = var9.forEach;
                var5 = function(arg0) { // Environment: var3
                    _fun42323: for (var _fun42323_ip = 0;;) switch (_fun42323_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = null;
                            var4 = var1 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun42323_ip = 22;
                                continue _fun42323
                            }
                        case 16:
                            var3 = var2.offerIds;
                        case 22:
                            if (!(var1 != var3)) {
                                _fun42323_ip = 43;
                                continue _fun42323
                            }
                        case 26:
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot13;
                                var1 = var2.add;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var5);
            case 121: // try_start_0
                var5 = _closure1_slot11;
                var7 = var5;
                var8 = var6 == var5;
                var5 = undefined;
                if (var8) {
                    _fun42320_ip = 154;
                    continue _fun42320
                }
            case 137:
                var9 = var7;
                var8 = var9.map;
                var7 = _closure1_slot21;
                var5 = var8.bind(var9)(var7);
            case 154:
                _closure1_slot11 = var5;
            case 158: // try_end0
                _fun42320_ip = 193;
                continue _fun42320;
            case 160: // catch_target0
                CatchBlockStart(arg_register = 8);
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 8;
                var5 = var9[var5];
                var7 = var7.bind(var0)(var5);
                var5 = var7.captureBillingException;
                var5 = var5.bind(var7)(var8);
            case 193:
                var5 = _closure1_slot11;
                var4 = var5;
                if (!(var6 != var5)) {
                    _fun42320_ip = 222;
                    continue _fun42320
                }
            case 204:
                var5 = var4;
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var3
                    var3 = arg0;
                    var2 = _closure1_slot12;
                    var1 = var2.set;
                    var0 = var3.identifier;
                    var0 = var1.bind(var2)(var0, var3);
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
            case 222:
                var3 = var1;
                var1 = _closure1_slot8;
                var1 = var1.IN_APP;
                if (!(var1 !== var3)) {
                    _fun42320_ip = 261;
                    continue _fun42320
                }
            case 239:
                var1 = _closure1_slot8;
                var1 = var1.SUBSCRIPTION;
                if (!(var1 === var3)) {
                    _fun42320_ip = 267;
                    continue _fun42320
                }
            case 253:
                var1 = false;
                _closure1_slot18 = var1;
                _fun42320_ip = 267;
                continue _fun42320;
            case 261:
                var1 = false;
                _closure1_slot17 = var1;
            case 267:
                return var0;
        }
    };
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var9 = var4.bind(var0)(var1);
    var1 = var9.GPlayConnectionState;
    var _closure1_slot7 = var1;
    var9 = var9.GPlaySkusType;
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.CurrencyCodes;
    var _closure1_slot9 = var9;
    var1 = var1.DISCONNECTED;
    var _closure1_slot10 = var1;
    var1 = null;
    var _closure1_slot11 = var1;
    var9 = var7.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot12 = var9;
    var9 = var7.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot13 = var9;
    var7 = var7.Set;
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot14 = var7;
    var _closure1_slot15 = var1;
    var7 = false;
    var _closure1_slot16 = var7;
    var _closure1_slot17 = var7;
    var _closure1_slot18 = var7;
    var _closure1_slot19 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun42327: for (var _fun42327_ip = 0;;) switch (_fun42327_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun42327_ip = 69;
                        continue _fun42327
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun42327_ip = 105;
                    continue _fun42327;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'getProducts';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'getOfferIds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getProduct';
        var4.key = var6;
        var6 = function arg0() {
            _fun42330: for (var _fun42330_ip = 0;;) switch (_fun42330_ip) {
                case 0:
                    var2 = _closure1_slot12;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun42330_ip = 32;
                        continue _fun42330
                    }
                case 29:
                    var0 = var1;
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isBusy';
        var4.key = var6;
        var6 = function() {
            _fun42331: for (var _fun42331_ip = 0;;) switch (_fun42331_ip) {
                case 0:
                    var0 = _closure1_slot14;
                    var2 = var0.size;
                    var0 = 0;
                    var0 = var2 > var0;
                    if (var0) {
                        _fun42331_ip = 25;
                        continue _fun42331
                    }
                case 21:
                    var0 = _closure1_slot16;
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isPurchasingProduct';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot14;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isReady';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot10;
            var0 = _closure1_slot7;
            var0 = var0.CONNECTED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasConnectionError';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot10;
            var0 = _closure1_slot7;
            var0 = var0.ERROR;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getPendingDowngrade';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isFetchingGoogleSkus';
        var4.key = var6;
        var6 = function() {
            _fun42336: for (var _fun42336_ip = 0;;) switch (_fun42336_ip) {
                case 0:
                    var0 = _closure1_slot18;
                    if (var0) {
                        _fun42336_ip = 14;
                        continue _fun42336
                    }
                case 10:
                    var0 = _closure1_slot17;
                case 14:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isFetchingProducts';
        var4.key = var6;
        var6 = function() {
            _fun42337: for (var _fun42337_ip = 0;;) switch (_fun42337_ip) {
                case 0:
                    var0 = _closure1_slot18;
                    if (var0) {
                        _fun42337_ip = 14;
                        continue _fun42337
                    }
                case 10:
                    var0 = _closure1_slot17;
                case 14:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getUserCountry';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'IAPStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.connectionState;
        _closure1_slot10 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GPLAY_UPDATE_CONNECTION_STATE = var9;
    var9 = function() {
        var0 = true;
        _closure1_slot18 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GPLAY_FETCH_SUBSCRIPTION_SKUS_START = var9;
    var1.GPLAY_SUBSCRIPTION_SKUS_LOADED = var8;
    var9 = function() {
        var0 = false;
        _closure1_slot18 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED = var9;
    var9 = function() {
        var0 = true;
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GPLAY_FETCH_IN_APP_SKUS_START = var9;
    var1.GPLAY_IN_APP_SKUS_LOADED = var8;
    var8 = function() {
        var0 = false;
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GPLAY_FETCH_IN_APP_SKUS_FAILED = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.productId;
        var1 = _closure1_slot14;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.GPLAY_VERIFICATION_START = var8;
    var8 = function arg0() {
        _fun42345: for (var _fun42345_ip = 0;;) switch (_fun42345_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.productId;
                var3 = _closure1_slot14;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun42345_ip = 81;
                    continue _fun42345
                }
            case 29:
                var1 = global;
                var4 = var1.Error;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = 'Tried verifying product without initialization: ';
                var5 = var3.bind(var1)(var2);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 81:
                var1 = _closure1_slot14;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.GPLAY_VERIFICATION_END = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.pendingDowngrade;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GPLAY_UPDATE_PENDING_DOWNGRADE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.isDowngrading;
        _closure1_slot16 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GPLAY_UPDATE_IS_DOWNGRADING = var8;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.countryCode;
        _closure1_slot19 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GPLAY_SET_USER_COUNTRY = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/native/IAPStore.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4612, 483, 4606, 3125, 566, 806, 2]);