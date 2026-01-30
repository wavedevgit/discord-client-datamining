// stores/game_store/EntitlementStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun42517: for (var _fun42517_ip = 0;;) switch (_fun42517_ip) {
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
                _fun42517_ip = 74;
                continue _fun42517;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot24 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun42520: for (var _fun42520_ip = 0;;) switch (_fun42520_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun42520_ip = 45;
                    continue _fun42520
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun42520_ip = 54;
                    continue _fun42520
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun42520_ip = 342;
                    continue _fun42520
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun42520_ip = 322;
                    continue _fun42520
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun42520_ip = 282;
                    continue _fun42520
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun42520_ip = 269;
                    continue _fun42520
                }
            case 109:
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
                    _fun42520_ip = 162;
                    continue _fun42520
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun42520_ip = 178;
                    continue _fun42520
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun42520_ip = 248;
                    continue _fun42520
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun42520_ip = 248;
                    continue _fun42520
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun42520_ip = 233;
                    continue _fun42520
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun42520_ip = 246;
                    continue _fun42520
                }
            case 233:
                var8 = _closure1_slot26;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun42520_ip = 264;
                continue _fun42520;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun42520_ip = 282;
                continue _fun42520;
            case 269:
                var6 = _closure1_slot26;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun42520_ip = 322;
                    continue _fun42520
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun42520_ip = 329;
                    continue _fun42520
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun42521: for (var _fun42521_ip = 0;;) switch (_fun42521_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun42521_ip = 56;
                                continue _fun42521
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
                            _fun42521_ip = 67;
                            continue _fun42521;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun42522: for (var _fun42522_ip = 0;;) switch (_fun42522_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun42522_ip = 23;
                    continue _fun42522
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun42522_ip = 33;
                    continue _fun42522
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
                    _fun42522_ip = 70;
                    continue _fun42522
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun42522_ip = 55;
                    continue _fun42522
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0) { // Original name: addEntitlement, environment: var3
        _fun42523: for (var _fun42523_ip = 0;;) switch (_fun42523_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot14;
                var3 = var0.id;
                var5 = _closure1_slot8;
                var2 = var5.createFromServer;
                var2 = var2.bind(var5)(var0);
                var4[var3] = var2;
                var3 = _closure1_slot16;
                var2 = var0.sku_id;
                var2 = var3[var2];
                var3 = null;
                if (!(var3 == var2)) {
                    _fun42523_ip = 96;
                    continue _fun42523
                }
            case 54:
                var5 = _closure1_slot16;
                var4 = var0.sku_id;
                var2 = global;
                var2 = var2.Set;
                var6 = var2.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var6;
                var2 = new var8[var2](var7);
                var2 = var2 instanceof Object ? var2 : var6;
                var5[var4] = var2;
            case 96:
                var4 = _closure1_slot17;
                var2 = var0.application_id;
                var2 = var4[var2];
                if (!(var3 == var2)) {
                    _fun42523_ip = 156;
                    continue _fun42523
                }
            case 114:
                var5 = _closure1_slot17;
                var4 = var0.application_id;
                var2 = global;
                var2 = var2.Set;
                var6 = var2.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var6;
                var2 = new var8[var2](var7);
                var2 = var2 instanceof Object ? var2 : var6;
                var5[var4] = var2;
            case 156:
                var2 = var0.subscription_id;
                if (!(var3 != var2)) {
                    _fun42523_ip = 255;
                    continue _fun42523
                }
            case 166:
                var4 = _closure1_slot23;
                var2 = var0.subscription_id;
                var2 = var4[var2];
                if (!(var3 == var2)) {
                    _fun42523_ip = 226;
                    continue _fun42523
                }
            case 184:
                var4 = _closure1_slot23;
                var3 = var0.subscription_id;
                var2 = global;
                var2 = var2.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var5;
                var2 = new var8[var2](var7);
                var2 = var2 instanceof Object ? var2 : var5;
                var4[var3] = var2;
            case 226:
                var3 = _closure1_slot23;
                var2 = var0.subscription_id;
                var4 = var3[var2];
                var3 = var4.add;
                var2 = var0.id;
                var2 = var3.bind(var4)(var2);
            case 255:
                var3 = _closure1_slot17;
                var2 = var0.application_id;
                var4 = var3[var2];
                var3 = var4.add;
                var2 = var0.id;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot16;
                var1 = var0.sku_id;
                var2 = var2[var1];
                var1 = var2.add;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0) { // Original name: addGiftEntitlement, environment: var3
        var4 = arg0;
        var2 = _closure1_slot15;
        var1 = var4.id;
        var3 = _closure1_slot8;
        var0 = var3.createFromServer;
        var0 = var0.bind(var3)(var4);
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot28 = var0;
    var9 = function(arg0) { // Original name: handlePurchaseSuccess, environment: var3
        _fun42525: for (var _fun42525_ip = 0;;) switch (_fun42525_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entitlements;
                var1 = _closure1_slot25;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun42525_ip = 64;
                    continue _fun42525
                }
            case 35:
                var5 = _closure1_slot27;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun42525_ip = 35;
                    continue _fun42525
                }
            case 64:
                return var0;
        }
    };
    var8 = function(arg0) { // Original name: handleEntitlementUpdate, environment: var3
        var2 = _closure1_slot27;
        var0 = arg0;
        var1 = var0.entitlement;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var10 = var7.EntitlementSourceTypes;
    var _closure1_slot11 = var10;
    var7 = var7.EntitlementTypes;
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot13 = var7;
    var7 = {};
    var _closure1_slot14 = var7;
    var7 = {};
    var _closure1_slot15 = var7;
    var7 = {};
    var _closure1_slot16 = var7;
    var7 = {};
    var _closure1_slot17 = var7;
    var7 = false;
    var _closure1_slot18 = var7;
    var _closure1_slot19 = var7;
    var _closure1_slot20 = var7;
    var7 = var1.Set;
    var10 = var7.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var7
        }
    });
    var15 = var10;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot21 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot22 = var1;
    var1 = {};
    var _closure1_slot23 = var1;
    var1 = 13;
    var7 = var5[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var7);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: EntitlementStore, environment: var5
            _fun42528: for (var _fun42528_ip = 0;;) switch (_fun42528_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot24;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun42528_ip = 69;
                        continue _fun42528
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun42528_ip = 105;
                    continue _fun42528;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.syncWith;
            var0 = _closure1_slot9;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = function() { // Environment: var0
                var0 = true;
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(19);
        var0[0] = var4;
        var4 = {};
        var6 = 'get';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot14;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGiftable';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.values;
            var0 = _closure1_slot15;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getForApplication';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42533: for (var _fun42533_ip = 0;;) switch (_fun42533_ip) {
                case 0:
                    var1 = _closure1_slot17;
                    var0 = arg0;
                    var3 = var1[var0];
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun42533_ip = 111;
                        continue _fun42533
                    }
                case 20:
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var10 = var2;
                    var1 = new var10[var1](var9);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var2 = _closure1_slot25;
                    var5 = undefined;
                    var4 = var2.bind(var5)(var3);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if (var2) {
                        _fun42533_ip = 109;
                        continue _fun42533
                    }
                case 71:
                    var8 = var3.value;
                    var7 = var1.add;
                    var2 = _closure1_slot14;
                    var2 = var2[var8];
                    var2 = var7.bind(var1)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if (!var2) {
                        _fun42533_ip = 71;
                        continue _fun42533
                    }
                case 109:
                    return var1;
                case 111:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getForSku';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42534: for (var _fun42534_ip = 0;;) switch (_fun42534_ip) {
                case 0:
                    var1 = _closure1_slot16;
                    var0 = arg0;
                    var3 = var1[var0];
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun42534_ip = 111;
                        continue _fun42534
                    }
                case 20:
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var10 = var2;
                    var1 = new var10[var1](var9);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var2 = _closure1_slot25;
                    var5 = undefined;
                    var4 = var2.bind(var5)(var3);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if (var2) {
                        _fun42534_ip = 109;
                        continue _fun42534
                    }
                case 71:
                    var8 = var3.value;
                    var7 = var1.add;
                    var2 = _closure1_slot14;
                    var2 = var2[var8];
                    var2 = var7.bind(var1)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if (!var2) {
                        _fun42534_ip = 71;
                        continue _fun42534
                    }
                case 109:
                    return var1;
                case 111:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'fetchingAllEntitlements';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot18;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'fetchedAllEntitlements';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot19;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'fetchedEndedEntitlements';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot20;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'applicationIdsFetching';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot21;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'applicationIdsFetched';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot22;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isFetchingForApplication';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42540: for (var _fun42540_ip = 0;;) switch (_fun42540_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var0 = var2.fetchingAllEntitlements;
                    if (var0) {
                        _fun42540_ip = 45;
                        continue _fun42540
                    }
                case 15:
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun42540_ip = 42;
                        continue _fun42540
                    }
                case 24:
                    var3 = var2.applicationIdsFetching;
                    var2 = var3.has;
                    var1 = var2.bind(var3)(var4);
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'isFetchedForApplication';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42541: for (var _fun42541_ip = 0;;) switch (_fun42541_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var0 = var2.fetchedAllEntitlements;
                    if (var0) {
                        _fun42541_ip = 43;
                        continue _fun42541
                    }
                case 15:
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun42541_ip = 40;
                        continue _fun42541
                    }
                case 24:
                    var3 = var2.applicationIdsFetched;
                    var2 = var3.has;
                    var1 = var2.bind(var3)(var4);
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getForSubscription';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42542: for (var _fun42542_ip = 0;;) switch (_fun42542_ip) {
                case 0:
                    var1 = _closure1_slot23;
                    var0 = arg0;
                    var3 = var1[var0];
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun42542_ip = 111;
                        continue _fun42542
                    }
                case 20:
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var10 = var2;
                    var1 = new var10[var1](var9);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var2 = _closure1_slot25;
                    var5 = undefined;
                    var4 = var2.bind(var5)(var3);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if (var2) {
                        _fun42542_ip = 109;
                        continue _fun42542
                    }
                case 71:
                    var8 = var3.value;
                    var7 = var1.add;
                    var2 = _closure1_slot14;
                    var2 = var2[var8];
                    var2 = var7.bind(var1)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if (!var2) {
                        _fun42542_ip = 71;
                        continue _fun42542
                    }
                case 109:
                    return var1;
                case 111:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'isEntitledToSku';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun42543: for (var _fun42543_ip = 0;;) switch (_fun42543_ip) {
                case 0:
                    var9 = arg0;
                    var6 = arg1;
                    var8 = arg2;
                    var7 = arguments[3];
                    var5 = undefined;
                    if (!(var7 === var5)) {
                        _fun42543_ip = 20;
                        continue _fun42543
                    }
                case 18:
                    var7 = null;
                case 20:
                    var1 = _closure1_slot16;
                    var3 = var1[var6];
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun42543_ip = 116;
                        continue _fun42543
                    }
                case 37:
                    var2 = _closure1_slot25;
                    var4 = var2.bind(var5)(var3);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if (var2) {
                        _fun42543_ip = 116;
                        continue _fun42543
                    }
                case 58:
                    var10 = var3.value;
                    var2 = _closure1_slot14;
                    var11 = var2[var10];
                    if (!(var1 != var11)) {
                        _fun42543_ip = 95;
                        continue _fun42543
                    }
                case 75:
                    var10 = var11.isValid;
                    var2 = _closure1_slot10;
                    var2 = var10.bind(var11)(var9, var2, var7);
                    if (var2) {
                        _fun42543_ip = 112;
                        continue _fun42543
                    }
                case 95:
                    var10 = var4.bind(var5)();
                    var2 = var10.done;
                    var3 = var10;
                    if (var2) {
                        _fun42543_ip = 116;
                        continue _fun42543
                    }
                case 110:
                    _fun42543_ip = 58;
                    continue _fun42543;
                case 112:
                    var2 = true;
                    return var2;
                case 116:
                    var3 = _closure1_slot22;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var8);
                    if (var2) {
                        _fun42543_ip = 239;
                        continue _fun42543
                    }
                case 133:
                    if (!(var1 == var7)) {
                        _fun42543_ip = 154;
                        continue _fun42543
                    }
                case 137:
                    var3 = _closure1_slot9;
                    var2 = var3.getActiveLibraryApplication;
                    var4 = var2.bind(var3)(var8);
                    _fun42543_ip = 170;
                    continue _fun42543;
                case 154:
                    var3 = _closure1_slot9;
                    var2 = var3.getLibraryApplication;
                    var4 = var2.bind(var3)(var8, var7);
                case 170:
                    var2 = var1 == var4;
                    if (var2) {
                        _fun42543_ip = 192;
                        continue _fun42543
                    }
                case 177:
                    var3 = var4.sku;
                    var3 = var3.id;
                    var2 = var3 !== var6;
                case 192:
                    if (var2) {
                        _fun42543_ip = 229;
                        continue _fun42543
                    }
                case 195:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 11;
                    var0 = var6[var0];
                    var3 = var3.bind(var5)(var0);
                    var0 = var3.isUserEntitledToLibraryApplication;
                    var0 = var0.bind(var3)(var4);
                    var2 = !var0;
                case 229:
                    var0 = !var2;
                    if (!var2) {
                        _fun42543_ip = 237;
                        continue _fun42543
                    }
                case 235:
                    var0 = null;
                case 237:
                    return var0;
                case 239:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'hasFetchedForApplicationIds';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = arg0;
            var1 = var2.every;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot22;
                var1 = var2.has;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getReverseTrialEntitlement';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42546: for (var _fun42546_ip = 0;;) switch (_fun42546_ip) {
                case 0:
                    var8 = arg0;
                    var2 = this;
                    var0 = global;
                    var0 = var0.Date;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var13 = var1;
                    var0 = new var13[var0](var12);
                    var7 = var0 instanceof Object ? var0 : var1;
                    var1 = var2.getForApplication;
                    var0 = _closure1_slot13;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun42546_ip = 192;
                        continue _fun42546
                    }
                case 61:
                    var1 = _closure1_slot25;
                    var5 = undefined;
                    var4 = var1.bind(var5)(var2);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = var2;
                    if (var1) {
                        _fun42546_ip = 192;
                        continue _fun42546
                    }
                case 87:
                    var1 = var3.value;
                    var2 = var1.endsAt;
                    var9 = var0 != var2;
                    if (!var9) {
                        _fun42546_ip = 115;
                        continue _fun42546
                    }
                case 105:
                    var2 = var1.endsAt;
                    var9 = var2 < var7;
                case 115:
                    var2 = var1.startsAt;
                    var2 = var0 != var2;
                    var11 = var1.type;
                    var10 = _closure1_slot12;
                    var10 = var10.FRACTIONAL_REDEMPTION;
                    if (!(var11 === var10)) {
                        _fun42546_ip = 173;
                        continue _fun42546
                    }
                case 144:
                    var11 = var1.sourceType;
                    var10 = _closure1_slot11;
                    var10 = var10.REVERSE_TRIAL;
                    if (!(var11 === var10)) {
                        _fun42546_ip = 173;
                        continue _fun42546
                    }
                case 164:
                    if (!var9) {
                        _fun42546_ip = 170;
                        continue _fun42546
                    }
                case 167:
                    if (!var8) {
                        _fun42546_ip = 173;
                        continue _fun42546
                    }
                case 170:
                    if (var2) {
                        _fun42546_ip = 190;
                        continue _fun42546
                    }
                case 173:
                    var9 = var4.bind(var5)();
                    var2 = var9.done;
                    var3 = var9;
                    if (var2) {
                        _fun42546_ip = 192;
                        continue _fun42546
                    }
                case 188:
                    _fun42546_ip = 87;
                    continue _fun42546;
                case 190:
                    return var1;
                case 192:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getFractionalPremium';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun42547: for (var _fun42547_ip = 0;;) switch (_fun42547_ip) {
                case 0:
                    var2 = arguments[0];
                    var4 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun42547_ip = 16;
                        continue _fun42547
                    }
                case 14:
                    var2 = {};
                case 16:
                    var3 = var2.includeEnded;
                    if (!(var3 === var0)) {
                        _fun42547_ip = 28;
                        continue _fun42547
                    }
                case 26:
                    var3 = false;
                case 28:
                    var _closure3_slot0 = var3;
                    var2 = var2.excludeReverseTrial;
                    if (!(var2 === var0)) {
                        _fun42547_ip = 44;
                        continue _fun42547
                    }
                case 42:
                    var2 = false;
                case 44:
                    var _closure3_slot1 = var2;
                    var _closure3_slot3 = var0;
                    var0 = new Array(0);
                    var _closure3_slot2 = var0;
                    var2 = global;
                    var2 = var2.Date;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var3;
                    var2 = new var7[var2](var6);
                    var2 = var2 instanceof Object ? var2 : var3;
                    _closure3_slot3 = var2;
                    var3 = var4.getForApplication;
                    var2 = _closure1_slot13;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun42547_ip = 131;
                        continue _fun42547
                    }
                case 116:
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun42548: for (var _fun42548_ip = 0;;) switch (_fun42548_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.endsAt;
                                var0 = null;
                                var3 = var0 != var1;
                                if (!var3) {
                                    _fun42548_ip = 35;
                                    continue _fun42548
                                }
                            case 18:
                                var1 = var2.endsAt;
                                var0 = _closure3_slot3;
                                var3 = var1 < var0;
                            case 35:
                                var4 = var2.sourceType;
                                var1 = _closure1_slot11;
                                var1 = var1.REVERSE_TRIAL;
                                var1 = var4 === var1;
                                if (!var1) {
                                    _fun42548_ip = 68;
                                    continue _fun42548
                                }
                            case 61:
                                var1 = _closure3_slot1;
                            case 68:
                                var4 = var2.type;
                                var0 = _closure1_slot12;
                                var0 = var0.FRACTIONAL_REDEMPTION;
                                var0 = var4 !== var0;
                                if (var0) {
                                    _fun42548_ip = 106;
                                    continue _fun42548
                                }
                            case 90:
                                if (!var3) {
                                    _fun42548_ip = 103;
                                    continue _fun42548
                                }
                            case 93:
                                var4 = _closure3_slot0;
                                var3 = !var4;
                            case 103:
                                var0 = var3;
                            case 106:
                                if (var0) {
                                    _fun42548_ip = 112;
                                    continue _fun42548
                                }
                            case 109:
                                var0 = var1;
                            case 112:
                                if (var0) {
                                    _fun42548_ip = 132;
                                    continue _fun42548
                                }
                            case 115:
                                var1 = _closure3_slot2;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                            case 132:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 131:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'isFractionalPremiumActive';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun42549: for (var _fun42549_ip = 0;;) switch (_fun42549_ip) {
                case 0:
                    var1 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun42549_ip = 14;
                        continue _fun42549
                    }
                case 12:
                    var1 = {};
                case 14:
                    var3 = var1.excludeReverseTrial;
                    if (!(var3 === var0)) {
                        _fun42549_ip = 26;
                        continue _fun42549
                    }
                case 24:
                    var3 = false;
                case 26:
                    var1 = var2.getFractionalPremium;
                    var0 = {};
                    var4 = false;
                    var0.includeEnded = var4;
                    var0.excludeReverseTrial = var3;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getUnactivatedFractionalPremiumUnits';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun42550: for (var _fun42550_ip = 0;;) switch (_fun42550_ip) {
                case 0:
                    var4 = this;
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var3 = var4.getForApplication;
                    var2 = _closure1_slot13;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun42550_ip = 52;
                        continue _fun42550
                    }
                case 37:
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun42551: for (var _fun42551_ip = 0;;) switch (_fun42551_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.FractionalPremiumSKUsSets;
                                var4 = var1.ACTIVE_FRACTIONAL_PREMIUM_SKUS;
                                var2 = var4.has;
                                var1 = var3.skuId;
                                var1 = var2.bind(var4)(var1);
                                if (!var1) {
                                    _fun42551_ip = 68;
                                    continue _fun42551
                                }
                            case 59:
                                var2 = var3.consumed;
                                var1 = !var2;
                            case 68:
                                if (!var1) {
                                    _fun42551_ip = 88;
                                    continue _fun42551
                                }
                            case 71:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                            case 88:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 52:
                    return var0;
            }
        };
        var4.value = var5;
        var0[18] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'EntitlementStore';
    var7.displayName = var1;
    var1 = 14;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function(arg0) { // Original name: handleEntitlementApplicationStart, environment: var3
        var0 = arg0;
        var2 = var0.applicationId;
        var1 = _closure1_slot21;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.ENTITLEMENT_FETCH_APPLICATION_START = var10;
    var10 = function(arg0) { // Original name: handleEntitlementApplicationFetch, environment: var3
        _fun42553: for (var _fun42553_ip = 0;;) switch (_fun42553_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationId;
                var2 = var0.entitlements;
                var1 = _closure1_slot21;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var3);
                var1 = _closure1_slot22;
                var0 = var1.add;
                var0 = var0.bind(var1)(var3);
                var1 = _closure1_slot25;
                var0 = undefined;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = true;
                if (var1) {
                    _fun42553_ip = 109;
                    continue _fun42553
                }
            case 70:
                var6 = var2.value;
                var1 = var6.consumed;
                if (!(var3 !== var1)) {
                    _fun42553_ip = 94;
                    continue _fun42553
                }
            case 85:
                var1 = _closure1_slot27;
                var1 = var1.bind(var0)(var6);
            case 94:
                var6 = var4.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun42553_ip = 70;
                    continue _fun42553
                }
            case 109:
                return var0;
        }
    };
    var1.ENTITLEMENT_FETCH_APPLICATION_SUCCESS = var10;
    var10 = function() { // Original name: handleEntitlementApplicationFail, environment: var3
        var0 = undefined;
        return var0;
    };
    var1.ENTITLEMENT_FETCH_APPLICATION_FAIL = var10;
    var10 = function(arg0) { // Original name: handleEntitlementsGiftableFetchSuccess, environment: var3
        var0 = arg0;
        var2 = var0.entitlements;
        var1 = {};
        _closure1_slot15 = var1;
        var1 = var2.forEach;
        var0 = _closure1_slot28;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS = var10;
    var1.SKU_PURCHASE_SUCCESS = var9;
    var1.VIRTUAL_CURRENCY_REDEEM_SUCCESS = var9;
    var9 = function(arg0) { // Original name: handleLibraryFetchSuccess, environment: var3
        _fun42556: for (var _fun42556_ip = 0;;) switch (_fun42556_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.libraryApplications;
                var1 = _closure1_slot25;
                var0 = undefined;
                var6 = var1.bind(var0)(var2);
                var2 = var6.bind(var0)();
                var1 = var2.done;
                var5 = null;
                var4 = var2;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun42556_ip = 145;
                    continue _fun42556
                }
            case 44:
                var1 = var4.value;
                var8 = var1.entitlements;
                if (!(var5 != var8)) {
                    _fun42556_ip = 130;
                    continue _fun42556
                }
            case 59:
                var8 = _closure1_slot25;
                var1 = var1.entitlements;
                var9 = var8.bind(var0)(var1);
                var10 = var9.bind(var0)();
                var1 = var10.done;
                var8 = var10;
                var3 = var8;
                var2 = var9;
                if (var1) {
                    _fun42556_ip = 130;
                    continue _fun42556
                }
            case 95:
                var10 = _closure1_slot27;
                var1 = var8.value;
                var1 = var10.bind(var0)(var1);
                var10 = var9.bind(var0)();
                var1 = var10.done;
                var8 = var10;
                var3 = var8;
                var2 = var9;
                if (!var1) {
                    _fun42556_ip = 95;
                    continue _fun42556
                }
            case 130:
                var8 = var6.bind(var0)();
                var1 = var8.done;
                var4 = var8;
                if (!var1) {
                    _fun42556_ip = 44;
                    continue _fun42556
                }
            case 145:
                return var0;
        }
    };
    var1.LIBRARY_FETCH_SUCCESS = var9;
    var1.ENTITLEMENT_CREATE = var8;
    var1.ENTITLEMENT_UPDATE = var8;
    var8 = function(arg0) { // Original name: handleEntitlementDelete, environment: var3
        _fun42557: for (var _fun42557_ip = 0;;) switch (_fun42557_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.entitlement;
                var3 = _closure1_slot14;
                var1 = var0.id;
                var1 = delete var3[var1];
                var3 = _closure1_slot17;
                var1 = var0.application_id;
                var5 = var3[var1];
                var1 = null;
                if (!(var1 != var5)) {
                    _fun42557_ip = 60;
                    continue _fun42557
                }
            case 45:
                var4 = var5.delete;
                var3 = var0.id;
                var3 = var4.bind(var5)(var3);
            case 60:
                var4 = _closure1_slot16;
                var3 = var0.sku_id;
                var5 = var4[var3];
                if (!(var1 != var5)) {
                    _fun42557_ip = 93;
                    continue _fun42557
                }
            case 78:
                var4 = var5.delete;
                var3 = var0.id;
                var3 = var4.bind(var5)(var3);
            case 93:
                var3 = var0.subscription_id;
                if (!(var1 != var3)) {
                    _fun42557_ip = 136;
                    continue _fun42557
                }
            case 103:
                var3 = _closure1_slot23;
                var2 = var0.subscription_id;
                var2 = var3[var2];
                if (!(var1 != var2)) {
                    _fun42557_ip = 136;
                    continue _fun42557
                }
            case 121:
                var1 = var2.delete;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
            case 136:
                var0 = undefined;
                return var0;
        }
    };
    var1.ENTITLEMENT_DELETE = var8;
    var8 = function() { // Original name: handleLogout, environment: var3
        var0 = {};
        _closure1_slot14 = var0;
        var0 = {};
        _closure1_slot16 = var0;
        var0 = {};
        _closure1_slot17 = var0;
        var0 = false;
        _closure1_slot18 = var0;
        _closure1_slot19 = var0;
        _closure1_slot20 = var0;
        var0 = global;
        var2 = var0.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        _closure1_slot21 = var2;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var4 = var2;
        var0 = new var4[var0](var3);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function() { // Original name: handleUserEntitlementsStart, environment: var3
        var0 = true;
        _closure1_slot18 = var0;
        var0 = undefined;
        return var0;
    };
    var1.ENTITLEMENTS_FETCH_FOR_USER_START = var8;
    var8 = function(arg0) { // Original name: handleUserEntitlementsSuccess, environment: var3
        _fun42560: for (var _fun42560_ip = 0;;) switch (_fun42560_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entitlements;
                var0 = var0.excludeEnded;
                var1 = true;
                _closure1_slot19 = var1;
                var1 = false;
                _closure1_slot18 = var1;
                var0 = !var0;
                _closure1_slot20 = var0;
                var1 = _closure1_slot25;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun42560_ip = 89;
                    continue _fun42560
                }
            case 60:
                var5 = _closure1_slot27;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun42560_ip = 60;
                    continue _fun42560
                }
            case 89:
                return var0;
        }
    };
    var1.ENTITLEMENTS_FETCH_FOR_USER_SUCCESS = var8;
    var3 = function() { // Original name: handleUserEntitlementsFail, environment: var3
        var0 = false;
        _closure1_slot19 = var0;
        _closure1_slot18 = var0;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var1.ENTITLEMENTS_FETCH_FOR_USER_FAIL = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/game_store/EntitlementStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3450, 3448, 3458, 660, 1615, 22, 3457, 1617, 566, 806, 2]);