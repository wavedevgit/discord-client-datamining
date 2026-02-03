// stores/game_store/SKUStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun30837: for (var _fun30837_ip = 0;;) switch (_fun30837_ip) {
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
                _fun30837_ip = 74;
                continue _fun30837;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun30840: for (var _fun30840_ip = 0;;) switch (_fun30840_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun30840_ip = 46;
                    continue _fun30840
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun30840_ip = 55;
                    continue _fun30840
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun30840_ip = 343;
                    continue _fun30840
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun30840_ip = 323;
                    continue _fun30840
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun30840_ip = 283;
                    continue _fun30840
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun30840_ip = 270;
                    continue _fun30840
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
                    _fun30840_ip = 163;
                    continue _fun30840
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun30840_ip = 179;
                    continue _fun30840
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun30840_ip = 249;
                    continue _fun30840
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun30840_ip = 249;
                    continue _fun30840
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun30840_ip = 234;
                    continue _fun30840
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun30840_ip = 247;
                    continue _fun30840
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun30840_ip = 265;
                continue _fun30840;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun30840_ip = 283;
                continue _fun30840;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun30840_ip = 323;
                    continue _fun30840
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
                    _fun30840_ip = 330;
                    continue _fun30840
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun30841: for (var _fun30841_ip = 0;;) switch (_fun30841_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun30841_ip = 56;
                                continue _fun30841
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
                            _fun30841_ip = 67;
                            continue _fun30841;
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
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun30842: for (var _fun30842_ip = 0;;) switch (_fun30842_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun30842_ip = 23;
                    continue _fun30842
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun30842_ip = 33;
                    continue _fun30842
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
                    _fun30842_ip = 70;
                    continue _fun30842
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun30842_ip = 55;
                    continue _fun30842
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun30843: for (var _fun30843_ip = 0;;) switch (_fun30843_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var6 = _closure1_slot12;
                var5 = var6.set;
                var4 = var0.id;
                var7 = _closure1_slot6;
                var3 = var7.createFromServer;
                var3 = var3.bind(var7)(var0);
                var3 = var5.bind(var6)(var4, var3);
                var5 = _closure1_slot10;
                var4 = var5.delete;
                var3 = var0.id;
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot11;
                var4 = var5.delete;
                var3 = var0.id;
                var3 = var4.bind(var5)(var3);
                var4 = var0.bundled_sku_ids;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun30843_ip = 112;
                    continue _fun30843
                }
            case 97:
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    var3 = _closure1_slot9;
                    var2 = var3.set;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
            case 112:
                var4 = _closure1_slot13;
                var3 = var4.has;
                var2 = var0.application_id;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun30843_ip = 184;
                    continue _fun30843
                }
            case 135:
                var5 = _closure1_slot13;
                var4 = var5.set;
                var3 = var0.application_id;
                var2 = global;
                var2 = var2.Set;
                var6 = var2.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var6;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var6;
                var2 = var4.bind(var5)(var3, var2);
            case 184:
                var3 = _closure1_slot13;
                var2 = var3.get;
                var1 = var0.application_id;
                var2 = var2.bind(var3)(var1);
                var1 = var2.add;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot18;
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun30846: for (var _fun30846_ip = 0;;) switch (_fun30846_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot18;
                var3 = var2.sku;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var2.child_skus;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun30846_ip = 58;
                    continue _fun30846
                }
            case 37:
                var6 = var2.child_skus;
                var5 = var6.forEach;
                var3 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot18;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
            case 58:
                var3 = var2.alternative_skus;
                if (!(var4 != var3)) {
                    _fun30846_ip = 89;
                    continue _fun30846
                }
            case 68:
                var3 = var2.alternative_skus;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot18;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 89:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var3 = function arg0() {
        _fun30849: for (var _fun30849_ip = 0;;) switch (_fun30849_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entitlements;
                var1 = _closure1_slot16;
                var0 = undefined;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = null;
                if (var1) {
                    _fun30849_ip = 82;
                    continue _fun30849
                }
            case 37:
                var1 = var2.value;
                var6 = var1.sku;
                if (!(var3 != var6)) {
                    _fun30849_ip = 67;
                    continue _fun30849
                }
            case 52:
                var6 = _closure1_slot18;
                var1 = var1.sku;
                var1 = var6.bind(var0)(var1);
            case 67:
                var6 = var4.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun30849_ip = 37;
                    continue _fun30849
                }
            case 82:
                return var0;
        }
    };
    var7 = function() {
        var0 = global;
        var1 = var0.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var4 = var2;
        var1 = new var4[var1](var3);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot9 = var2;
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
        _closure1_slot10 = var2;
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
        _closure1_slot11 = var2;
        var2 = var0.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        _closure1_slot12 = var2;
        var2 = var0.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        _closure1_slot13 = var2;
        var0 = var0.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var4 = var2;
        var0 = new var4[var0](var3);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot21 = var7;
    var0 = function() {
        _fun30851: for (var _fun30851_ip = 0;;) switch (_fun30851_ip) {
            case 0:
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var1 = var1.locale;
                if (!(var2 !== var1)) {
                    _fun30851_ip = 47;
                    continue _fun30851
                }
            case 21:
                var1 = _closure1_slot5;
                var1 = var1.locale;
                var _closure1_slot8 = var1;
                var1 = _closure1_slot21;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 47:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 7;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = var1.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot9 = var6;
    var6 = var1.Set;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot10 = var6;
    var6 = var1.Set;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot11 = var6;
    var6 = var1.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot12 = var6;
    var6 = var1.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot13 = var6;
    var1 = var1.Map;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var14 = var6;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot14 = var1;
    var1 = 8;
    var6 = var4[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var6);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var8
        var3 = function() {
            _fun30853: for (var _fun30853_ip = 0;;) switch (_fun30853_ip) {
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
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30853_ip = 69;
                        continue _fun30853
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30853_ip = 105;
                    continue _fun30853;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot5;
            var0 = _closure1_slot7;
            var0 = var3.bind(var4)(var2, var0);
            var3 = var4.syncWith;
            var0 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var0;
            var0 = _closure1_slot22;
            var0 = var3.bind(var4)(var2, var0);
            var0 = _closure1_slot5;
            var0 = var0.locale;
            _closure1_slot8 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'get';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getForApplication';
        var4.key = var6;
        var6 = function arg0() {
            _fun30856: for (var _fun30856_ip = 0;;) switch (_fun30856_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun30856_ip = 63;
                        continue _fun30856
                    }
                case 26:
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.from;
                    var2 = var0.bind(var1)(var2);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot12;
                        var1 = var2.get;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    _fun30856_ip = 67;
                    continue _fun30856;
                case 63:
                    var0 = new Array(0);
                case 67:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot10;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSKUs';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.fromEntries;
            var0 = _closure1_slot12;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getParentSKU';
        var4.key = var6;
        var6 = function arg0() {
            _fun30860: for (var _fun30860_ip = 0;;) switch (_fun30860_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot9;
                    var1 = var3.get;
                    var0 = arg0;
                    var1 = var1.bind(var3)(var0);
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun30860_ip = 33;
                        continue _fun30860
                    }
                case 29:
                    var0 = undefined;
                    return var0;
                case 33:
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'didFetchingSkuFail';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot11;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'SKUStore';
    var6.displayName = var1;
    var1 = 9;
    var1 = var4[var1];
    var13 = var5.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.skuId;
        var1 = _closure1_slot10;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.STORE_LISTINGS_FETCH_START = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.skuId;
        var3 = _closure1_slot10;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var2);
        var1 = _closure1_slot11;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.STORE_LISTINGS_FETCH_FAIL = var9;
    var9 = function arg0() {
        _fun30864: for (var _fun30864_ip = 0;;) switch (_fun30864_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.storeListings;
                var1 = _closure1_slot16;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun30864_ip = 64;
                    continue _fun30864
                }
            case 35:
                var5 = _closure1_slot20;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun30864_ip = 35;
                    continue _fun30864
                }
            case 64:
                return var0;
        }
    };
    var1.STORE_LISTINGS_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.storeListing;
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.STORE_LISTING_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        _fun30866: for (var _fun30866_ip = 0;;) switch (_fun30866_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.giftCode;
                var2 = var0.store_listing;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun30866_ip = 49;
                    continue _fun30866
                }
            case 21:
                var2 = _closure1_slot18;
                var0 = var0.store_listing;
                var1 = var0.sku;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 49:
                var0 = false;
                return var0;
        }
    };
    var1.GIFT_CODE_RESOLVE_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.skuId;
        var1 = _closure1_slot10;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.SKU_FETCH_START = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.sku;
        var1 = _closure1_slot19;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.SKU_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.skuId;
        var3 = _closure1_slot10;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var2);
        var1 = _closure1_slot11;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.SKU_FETCH_FAIL = var9;
    var8 = function arg0() {
        _fun30870: for (var _fun30870_ip = 0;;) switch (_fun30870_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var7 = var0.skus;
                var2 = _closure1_slot16;
                var0 = undefined;
                var5 = var2.bind(var0)(var7);
                var3 = var5.bind(var0)();
                var2 = var3.done;
                if (var2) {
                    _fun30870_ip = 69;
                    continue _fun30870
                }
            case 40:
                var6 = _closure1_slot19;
                var2 = var3.value;
                var2 = var6.bind(var0)(var2);
                var6 = var5.bind(var0)();
                var2 = var6.done;
                var3 = var6;
                if (!var2) {
                    _fun30870_ip = 40;
                    continue _fun30870
                }
            case 69:
                var2 = null;
                if (!(var2 != var4)) {
                    _fun30870_ip = 135;
                    continue _fun30870
                }
            case 75:
                var3 = _closure1_slot14;
                var2 = var3.set;
                var1 = global;
                var6 = var1.Set;
                var5 = var7.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var9 = var5.bind(var7)(var1);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var5;
                var1 = new var10[var6](var9, var8);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var2.bind(var3)(var4, var1);
            case 135:
                return var0;
        }
    };
    var1.SKUS_FETCH_SUCCESS = var8;
    var1.ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS = var3;
    var1.APPLICATION_STORE_CLEAR_DATA = var7;
    var1.APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS = var3;
    var1.ENTITLEMENTS_FETCH_FOR_USER_SUCCESS = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var6](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/game_store/SKUStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1676, 3483, 3475, 566, 806, 2]);