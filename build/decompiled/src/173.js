// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var6 = function arg0() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var2 = var4[var0];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var0 = var4[var0];
        var0 = var3.bind(var1)(var0);
        var5 = var0._D;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var6 = var1;
        var0 = new var6[var2](var5, var4);
        var0 = var0 instanceof Object ? var0 : var1;
        var1 = 1;
        var0._y = var1;
        var1 = arg0;
        var0._z = var1;
        return var0;
    };
    var _closure1_slot9 = var6;
    var0 = function arg0() {
        var0 = {};
        var1 = 'fulfilled';
        var0.status = var1;
        var1 = arg0;
        var0.value = var1;
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = {};
        var1 = 'rejected';
        var0.status = var1;
        var1 = arg0;
        var0.reason = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun2536: for (var _fun2536_ip = 0;;) switch (_fun2536_ip) {
            case 0:
                var3 = arg0;
                if (!var3) {
                    _fun2536_ip = 108;
                    continue _fun2536
                }
            case 6:
                var1 = typeof var3;
                var0 = 'object';
                if (!(var0 !== var1)) {
                    _fun2536_ip = 25;
                    continue _fun2536
                }
            case 17:
                var0 = 'function';
                if (!(var0 === var1)) {
                    _fun2536_ip = 108;
                    continue _fun2536
                }
            case 25:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 0;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var1 = var3 instanceof var1;
                if (!var1) {
                    _fun2536_ip = 92;
                    continue _fun2536
                }
            case 56:
                var2 = var3.then;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.prototype;
                var1 = var1.then;
                if (!(var2 !== var1)) {
                    _fun2536_ip = 192;
                    continue _fun2536
                }
            case 92:
                var2 = var3.then;
                var4 = 'function';
                var1 = typeof var2;
                if (!(var4 !== var1)) {
                    _fun2536_ip = 124;
                    continue _fun2536
                }
            case 108:
                var4 = _closure1_slot10;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                return var1;
            case 124:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var4 = var4.bind(var5)(var1);
                var1 = var2.bind;
                var8 = var1.bind(var2)(var3);
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var2;
                var1 = new var9[var4](var8, var7);
                var5 = var1 instanceof Object ? var1 : var2;
                var4 = var5.then;
                var2 = _closure1_slot10;
                var1 = _closure1_slot11;
                var1 = var4.bind(var5)(var2, var1);
                return var1;
            case 192:
                var2 = var3.then;
                var1 = _closure1_slot10;
                var0 = _closure1_slot11;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun2537: for (var _fun2537_ip = 0;;) switch (_fun2537_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var1 = var0.AggregateError;
                var2 = 'function';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun2537_ip = 72;
                    continue _fun2537
                }
            case 22:
                var4 = var0.Error;
                var1 = var4.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = 'All promises were rejected';
                var7 = var2;
                var1 = new var7[var4](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                var2 = 'AggregateError';
                var1.name = var2;
                var1.errors = var3;
                return var1;
            case 72:
                var2 = var0.AggregateError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'All promises were rejected';
                var7 = var1;
                var6 = var3;
                var0 = new var7[var2](var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var2 = 0;
    var5 = var4[var2];
    var0 = undefined;
    var7 = var3.bind(var0)(var5);
    var5 = arg4;
    var5.exports = var7;
    var5 = true;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = false;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = null;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = var6.bind(var0)(var0);
    var _closure1_slot5 = var5;
    var5 = var6.bind(var0)(var2);
    var _closure1_slot6 = var5;
    var5 = '';
    var5 = var6.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = var4[var2];
    var6 = var3.bind(var0)(var5);
    var5 = function(arg0) { // Environment: var1
        _fun2538: for (var _fun2538_ip = 0;;) switch (_fun2538_ip) {
            case 0:
                var7 = arg0;
                var3 = var7;
                var5 = undefined;
                var4 = undefined;
                var8 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 0;
                var0 = var0[var6];
                var0 = var8.bind(var5)(var0);
                var7 = var7 instanceof var0;
                var0 = var3;
                if (var7) {
                    _fun2538_ip = 316;
                    continue _fun2538
                }
            case 47:
                var7 = null;
                if (!(var7 !== var0)) {
                    _fun2538_ip = 310;
                    continue _fun2538
                }
            case 56:
                var7 = var3;
                if (!(var5 !== var7)) {
                    _fun2538_ip = 304;
                    continue _fun2538
                }
            case 66:
                var8 = var3;
                var7 = true;
                if (!(var7 !== var8)) {
                    _fun2538_ip = 298;
                    continue _fun2538
                }
            case 78:
                var8 = var3;
                var7 = false;
                if (!(var7 !== var8)) {
                    _fun2538_ip = 292;
                    continue _fun2538
                }
            case 90:
                var7 = var3;
                if (!(var6 !== var7)) {
                    _fun2538_ip = 286;
                    continue _fun2538
                }
            case 100:
                var8 = var3;
                var7 = '';
                if (!(var7 !== var8)) {
                    _fun2538_ip = 280;
                    continue _fun2538
                }
            case 114:
                var7 = var3;
                var8 = 'object';
                var7 = typeof var7;
                if (!(var8 !== var7)) {
                    _fun2538_ip = 142;
                    continue _fun2538
                }
            case 128:
                var7 = var3;
                var8 = 'function';
                var7 = typeof var7;
                if (!(var8 === var7)) {
                    _fun2538_ip = 164;
                    continue _fun2538
                }
            case 142: // try_start_0
                var7 = var3;
                var7 = var7.then;
                var4 = var7;
                var8 = 'function';
                var7 = typeof var7;
                if (!(var8 !== var7)) {
                    _fun2538_ip = 178;
                    continue _fun2538
                }
            case 164: // try_end0
                var8 = _closure1_slot9;
                var7 = var3;
                var7 = var8.bind(var5)(var7);
                return var7;
            case 178: // try_start_1
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var6];
                var7 = var8.bind(var5)(var7);
                var8 = var4;
                var4 = var8.bind;
                var9 = var4.bind(var8)(var3);
                var4 = var7.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var4;
                var3 = new var10[var7](var9, var8);
                var3 = var3 instanceof Object ? var3 : var4;
            case 228: // try_end1
                return var3;
            case 230: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 3);
                var _closure2_slot0 = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var4 = var4.bind(var5)(var3);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = function(arg0, arg1) { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var10 = var3;
                var2 = new var10[var4](var9, var8);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            case 280:
                var2 = _closure1_slot7;
                return var2;
            case 286:
                var2 = _closure1_slot6;
                return var2;
            case 292:
                var2 = _closure1_slot3;
                return var2;
            case 298:
                var2 = _closure1_slot2;
                return var2;
            case 304:
                var2 = _closure1_slot5;
                return var2;
            case 310:
                var1 = _closure1_slot4;
                return var1;
            case 316:
                return var0;
        }
    };
    var6.resolve = var5;
    var5 = function arg0() {
        _fun2540: for (var _fun2540_ip = 0;;) switch (_fun2540_ip) {
            case 0:
                var3 = arg0;
                var1 = global;
                var0 = var1.Array;
                var0 = var0.from;
                var2 = 'function';
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun2540_ip = 69;
                    continue _fun2540
                }
            case 27:
                var0 = function arg0() {
                    var0 = global;
                    var0 = var0.Array;
                    var0 = var0.prototype;
                    var2 = var0.slice;
                    var1 = var2.call;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                _closure1_slot8 = var0;
                var0 = var1.Array;
                var0 = var0.prototype;
                var2 = var0.slice;
                var0 = var2.call;
                var0 = var0.bind(var2)(var3);
                _fun2540_ip = 103;
                continue _fun2540;
            case 69:
                var2 = var1.Array;
                var4 = var2.from;
                _closure1_slot8 = var4;
                var2 = var1.Array;
                var1 = var2.from;
                var0 = var1.bind(var2)(var3);
            case 103:
                return var0;
        }
    };
    var _closure1_slot8 = var5;
    var5 = var4[var2];
    var6 = var3.bind(var0)(var5);
    var5 = function(arg0) { // Environment: var1
        var4 = _closure1_slot8;
        var3 = undefined;
        var2 = arg0;
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 0;
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var5 = function(arg0, arg1) { // Environment: var0
            _fun2543: for (var _fun2543_ip = 0;;) switch (_fun2543_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var5 = function arg0, arg1() {
                        _fun2544: for (var _fun2544_ip = 0;;) switch (_fun2544_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = arg1;
                                var _closure4_slot0 = var4;
                                if (!var1) {
                                    _fun2544_ip = 120;
                                    continue _fun2544
                                }
                            case 15:
                                var3 = typeof var1;
                                var2 = 'object';
                                if (!(var2 !== var3)) {
                                    _fun2544_ip = 34;
                                    continue _fun2544
                                }
                            case 26:
                                var2 = 'function';
                                if (!(var2 === var3)) {
                                    _fun2544_ip = 120;
                                    continue _fun2544
                                }
                            case 34:
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var7 = 0;
                                var5 = var3[var7];
                                var3 = undefined;
                                var5 = var6.bind(var3)(var5);
                                var5 = var1 instanceof var5;
                                if (!var5) {
                                    _fun2544_ip = 104;
                                    continue _fun2544
                                }
                            case 65:
                                var6 = var1.then;
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var5 = var5[var7];
                                var5 = var8.bind(var3)(var5);
                                var5 = var5.prototype;
                                var5 = var5.then;
                                if (!(var6 !== var5)) {
                                    _fun2544_ip = 244;
                                    continue _fun2544
                                }
                            case 104:
                                var5 = var1.then;
                                var8 = 'function';
                                var6 = typeof var5;
                                if (!(var8 !== var6)) {
                                    _fun2544_ip = 170;
                                    continue _fun2544
                                }
                            case 120:
                                var8 = _closure2_slot0;
                                var8[var4] = var1;
                                var9 = _closure3_slot2;
                                var10 = var9 - 1;
                                _closure3_slot2 = var10;
                                var9 = 0;
                                if (!(var9 == var10)) {
                                    _fun2544_ip = 166;
                                    continue _fun2544
                                }
                            case 151:
                                var9 = _closure3_slot0;
                                var8 = _closure2_slot0;
                                var6 = undefined;
                                var6 = var9.bind(var6)(var8);
                            case 166:
                                var6 = undefined;
                                return var6;
                            case 170:
                                var6 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var7];
                                var6 = var6.bind(var3)(var2);
                                var2 = var5.bind;
                                var12 = var2.bind(var5)(var1);
                                var5 = var6.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var13 = var5;
                                var2 = new var13[var6](var12, var11);
                                var7 = var2 instanceof Object ? var2 : var5;
                                var6 = var7.then;
                                var5 = _closure3_slot1;
                                var2 = function(arg0) { // Environment: var0
                                    var3 = _closure3_slot3;
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var2 = var6.bind(var7)(var2, var5);
                                var2 = undefined;
                                return var2;
                            case 244:
                                var2 = var1._y;
                                var6 = 3;
                                var5 = var1;
                                var1 = var5;
                                if (!(var6 === var2)) {
                                    _fun2544_ip = 285;
                                    continue _fun2544
                                }
                            case 263:
                                var7 = var5._z;
                                var2 = var7._y;
                                var5 = var7;
                                var1 = var5;
                                if (var6 === var2) {
                                    _fun2544_ip = 263;
                                    continue _fun2544
                                }
                            case 285:
                                var5 = var1._y;
                                var2 = 1;
                                if (!(var2 !== var5)) {
                                    _fun2544_ip = 356;
                                    continue _fun2544
                                }
                            case 298:
                                var5 = var1._y;
                                var2 = 2;
                                if (!(var2 === var5)) {
                                    _fun2544_ip = 329;
                                    continue _fun2544
                                }
                            case 311:
                                var5 = _closure3_slot1;
                                var2 = var1._z;
                                var2 = var5.bind(var3)(var2);
                            case 329:
                                var5 = var1.then;
                                var2 = _closure3_slot1;
                                var0 = function(arg0) { // Environment: var0
                                    var3 = _closure3_slot3;
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var0 = var5.bind(var1)(var0, var2);
                                var0 = undefined;
                                _fun2544_ip = 375;
                                continue _fun2544;
                            case 356:
                                var2 = _closure3_slot3;
                                var1 = var1._z;
                                var0 = var2.bind(var3)(var4, var1);
                            case 375:
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var5;
                    var0 = _closure2_slot0;
                    var0 = var0.length;
                    var3 = 0;
                    if (!(var3 !== var0)) {
                        _fun2543_ip = 100;
                        continue _fun2543
                    }
                case 43:
                    var0 = _closure2_slot0;
                    var1 = var0.length;
                    var _closure3_slot2 = var1;
                    var0 = var0.length;
                    var1 = var3 < var0;
                    var0 = undefined;
                    var3 = 0;
                    if (!var1) {
                        _fun2543_ip = 98;
                        continue _fun2543
                    }
                case 72:
                    var1 = _closure2_slot0;
                    var6 = var1[var3];
                    var6 = var5.bind(var0)(var3, var6);
                    var3 = var3 + 1;
                    var1 = var1.length;
                    if (var3 < var1) {
                        _fun2543_ip = 72;
                        continue _fun2543
                    }
                case 98:
                    return var0;
                case 100:
                    var1 = undefined;
                    var0 = new Array(0);
                    var0 = var2.bind(var1)(var0);
                    return var0;
            }
        };
        var6 = var1;
        var0 = new var6[var2](var5, var4);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6.all = var5;
    var5 = var4[var2];
    var6 = var3.bind(var0)(var5);
    var5 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 0;
        var1 = var3[var1];
        var5 = undefined;
        var2 = var2.bind(var5)(var1);
        var1 = var2.all;
        var4 = _closure1_slot8;
        var3 = arg0;
        var4 = var4.bind(var5)(var3);
        var3 = var4.map;
        var0 = _closure1_slot12;
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.allSettled = var5;
    var5 = var4[var2];
    var6 = var3.bind(var0)(var5);
    var5 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = function(arg0, arg1) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = arg1;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6.reject = var5;
    var5 = var4[var2];
    var6 = var3.bind(var0)(var5);
    var5 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot8;
            var2 = _closure2_slot0;
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.resolve;
                var1 = arg0;
                var4 = var2.bind(var3)(var1);
                var3 = var4.then;
                var2 = _closure3_slot0;
                var1 = _closure3_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6.race = var5;
    var5 = var4[var2];
    var5 = var3.bind(var0)(var5);
    var6 = var5.prototype;
    var5 = function(arg0) { // Environment: var1
        var3 = this;
        var2 = var3.then;
        var1 = null;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var6.catch = var5;
    var2 = var4[var2];
    var2 = var3.bind(var0)(var2);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = function(arg0, arg1) { // Environment: var0
            _fun2555: for (var _fun2555_ip = 0;;) switch (_fun2555_ip) {
                case 0:
                    var2 = arg1;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var2;
                    var0 = function arg0() {
                        _fun2556: for (var _fun2556_ip = 0;;) switch (_fun2556_ip) {
                            case 0:
                                var1 = _closure3_slot3;
                                if (var1) {
                                    _fun2556_ip = 30;
                                    continue _fun2556
                                }
                            case 10:
                                var1 = true;
                                _closure3_slot3 = var1;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 30:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot5 = var0;
                    var0 = function arg0() {
                        _fun2557: for (var _fun2557_ip = 0;;) switch (_fun2557_ip) {
                            case 0:
                                var3 = _closure3_slot4;
                                var2 = var3.push;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot4;
                                var2 = var1.length;
                                var1 = _closure3_slot2;
                                var1 = var1.length;
                                if (!(var2 === var1)) {
                                    _fun2557_ip = 69;
                                    continue _fun2557
                                }
                            case 42:
                                var2 = _closure3_slot1;
                                var3 = _closure1_slot13;
                                var0 = _closure3_slot4;
                                var1 = undefined;
                                var0 = var3.bind(var1)(var0);
                                var0 = var2.bind(var1)(var0);
                            case 69:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot6 = var0;
                    var5 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var6 = var5.bind(var0)(var3);
                    var _closure3_slot2 = var6;
                    var3 = false;
                    var _closure3_slot3 = var3;
                    var3 = new Array(0);
                    var _closure3_slot4 = var3;
                    var7 = var6.length;
                    var5 = 0;
                    if (!(var5 !== var7)) {
                        _fun2555_ip = 101;
                        continue _fun2555
                    }
                case 84:
                    var5 = var6.forEach;
                    var4 = function(arg0) { // Environment: var4
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 0;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.resolve;
                        var1 = arg0;
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.then;
                        var2 = _closure3_slot5;
                        var1 = _closure3_slot6;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    _fun2555_ip = 115;
                    continue _fun2555;
                case 101:
                    var1 = _closure1_slot13;
                    var1 = var1.bind(var0)(var3);
                    var1 = var2.bind(var0)(var1);
                case 115:
                    return var0;
            }
        };
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.any = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [172]);