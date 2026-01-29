// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = function() { // Original name: noop, environment: var0
        var0 = undefined;
        return var0;
    };
    var _closure1_slot2 = var2;
    var1 = function(arg0) { // Original name: Promise, environment: var0
        _fun2518: for (var _fun2518_ip = 0;;) switch (_fun2518_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var1 = 'object';
                var0 = typeof var2;
                if (!(var1 === var0)) {
                    _fun2518_ip = 119;
                    continue _fun2518
                }
            case 17:
                var1 = 'function';
                var0 = typeof var3;
                if (!(var1 === var0)) {
                    _fun2518_ip = 83;
                    continue _fun2518
                }
            case 28:
                var0 = 0;
                var2._x = var0;
                var2._y = var0;
                var0 = null;
                var2._z = var0;
                var2._A = var0;
                var1 = _closure1_slot2;
                if (!(var3 !== var1)) {
                    _fun2518_ip = 79;
                    continue _fun2518
                }
            case 67:
                var1 = _closure1_slot9;
                var0 = undefined;
                var0 = var1.bind(var0)(var3, var2);
            case 79:
                var0 = undefined;
                return var0;
            case 83:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = "Promise constructor's argument is not a function";
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 119:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'Promises must be constructed via new';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot3 = var1;
    var3 = function(arg0, arg1) { // Original name: handle, environment: var0
        _fun2519: for (var _fun2519_ip = 0;;) switch (_fun2519_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var2._y;
                var4 = 3;
                var3 = var2;
                var2 = var3;
                if (!(var4 === var0)) {
                    _fun2519_ip = 47;
                    continue _fun2519
                }
            case 25:
                var5 = var3._z;
                var0 = var5._y;
                var3 = var5;
                var2 = var3;
                if (var4 === var0) {
                    _fun2519_ip = 25;
                    continue _fun2519
                }
            case 47:
                var3 = _closure1_slot3;
                var3 = var3._B;
                if (!var3) {
                    _fun2519_ip = 78;
                    continue _fun2519
                }
            case 63:
                var3 = _closure1_slot3;
                var0 = var3._B;
                var0 = var0.bind(var3)(var2);
            case 78:
                var0 = var2._y;
                var3 = 0;
                if (!(var3 !== var0)) {
                    _fun2519_ip = 107;
                    continue _fun2519
                }
            case 90:
                var4 = function(arg0, arg1) { // Original name: handleResolved, environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = global;
                    var2 = var0.setImmediate;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        _fun2521: for (var _fun2521_ip = 0;;) switch (_fun2521_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0._y;
                                var2 = 1;
                                if (!(var2 !== var0)) {
                                    _fun2521_ip = 32;
                                    continue _fun2521
                                }
                            case 20:
                                var0 = _closure3_slot1;
                                var4 = var0.onRejected;
                                _fun2521_ip = 42;
                                continue _fun2521;
                            case 32:
                                var0 = _closure3_slot1;
                                var4 = var0.onFulfilled;
                            case 42:
                                var0 = null;
                                if (!(var0 === var4)) {
                                    _fun2521_ip = 139;
                                    continue _fun2521
                                }
                            case 48:
                                var0 = _closure3_slot0;
                                var0 = var0._y;
                                if (!(var2 !== var0)) {
                                    _fun2521_ip = 102;
                                    continue _fun2521
                                }
                            case 62:
                                var5 = _closure1_slot6;
                                var0 = _closure3_slot1;
                                var3 = var0.promise;
                                var0 = _closure3_slot0;
                                var2 = var0._z;
                                var0 = undefined;
                                var0 = var5.bind(var0)(var3, var2);
                                _fun2521_ip = 247;
                                continue _fun2521;
                            case 102:
                                var5 = _closure1_slot5;
                                var0 = _closure3_slot1;
                                var3 = var0.promise;
                                var0 = _closure3_slot0;
                                var2 = var0._z;
                                var0 = undefined;
                                var0 = var5.bind(var0)(var3, var2);
                                _fun2521_ip = 247;
                                continue _fun2521;
                            case 139:
                                var0 = _closure3_slot0;
                                var3 = var0._z;
                                var2 = var4;
                                var0 = var3;
                            case 155: // try_start_0
                                var3 = var2;
                                var2 = var0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                            case 168: // try_end0
                                var5 = var0;
                                _fun2521_ip = 186;
                                continue _fun2521;
                            case 173: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                _closure1_slot0 = var2;
                                var5 = _closure1_slot1;
                            case 186:
                                var2 = _closure1_slot1;
                                if (!(var5 !== var2)) {
                                    _fun2521_ip = 221;
                                    continue _fun2521
                                }
                            case 197:
                                var4 = _closure1_slot5;
                                var2 = _closure3_slot1;
                                var3 = var2.promise;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3, var5);
                                _fun2521_ip = 247;
                                continue _fun2521;
                            case 221:
                                var3 = _closure1_slot6;
                                var1 = _closure3_slot1;
                                var2 = var1.promise;
                                var1 = _closure1_slot0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                            case 247:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = undefined;
                var4 = var4.bind(var0)(var2, var1);
                return var0;
            case 107:
                var0 = var2._x;
                if (!(var3 !== var0)) {
                    _fun2519_ip = 187;
                    continue _fun2519
                }
            case 117:
                var3 = var2._x;
                var0 = 1;
                if (!(var0 !== var3)) {
                    _fun2519_ip = 150;
                    continue _fun2519
                }
            case 130:
                var3 = var2._A;
                var0 = var3.push;
                var0 = var0.bind(var3)(var1);
                var0 = undefined;
                _fun2519_ip = 185;
                continue _fun2519;
            case 150:
                var3 = 2;
                var2._x = var3;
                var4 = var2._A;
                var3 = new Array(2);
                var3[0] = var4;
                var3[1] = var1;
                var2._A = var3;
                var0 = undefined;
            case 185:
                _fun2519_ip = 204;
                continue _fun2519;
            case 187:
                var3 = 1;
                var2._x = var3;
                var2._A = var1;
                var0 = undefined;
            case 204:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var3 = function(arg0, arg1) { // Original name: resolve, environment: var0
        _fun2522: for (var _fun2522_ip = 0;;) switch (_fun2522_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                if (!(var1 !== var3)) {
                    _fun2522_ip = 201;
                    continue _fun2522
                }
            case 13:
                if (!var1) {
                    _fun2522_ip = 100;
                    continue _fun2522
                }
            case 16:
                var2 = typeof var1;
                var0 = 'object';
                if (!(var0 !== var2)) {
                    _fun2522_ip = 35;
                    continue _fun2522
                }
            case 27:
                var0 = 'function';
                if (!(var0 === var2)) {
                    _fun2522_ip = 100;
                    continue _fun2522
                }
            case 35:
                var0 = var1;
            case 38: // try_start_0
                var4 = var0.then;
            case 43: // try_end0
                _fun2522_ip = 58;
                continue _fun2522;
            case 45: // catch_target0
                CatchBlockStart(arg_register = 2);
                _closure1_slot0 = var2;
                var4 = _closure1_slot1;
            case 58:
                var2 = _closure1_slot1;
                if (!(var4 !== var2)) {
                    _fun2522_ip = 183;
                    continue _fun2522
                }
            case 69:
                var2 = var3.then;
                if (!(var4 === var2)) {
                    _fun2522_ip = 89;
                    continue _fun2522
                }
            case 78:
                var2 = _closure1_slot3;
                var2 = var1 instanceof var2;
                if (var2) {
                    _fun2522_ip = 155;
                    continue _fun2522
                }
            case 89:
                var5 = 'function';
                var2 = typeof var4;
                if (!(var5 !== var2)) {
                    _fun2522_ip = 131;
                    continue _fun2522
                }
            case 100:
                var2 = 1;
                var3._y = var2;
                var3._z = var1;
                var5 = _closure1_slot7;
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                return var2;
            case 131:
                var5 = _closure1_slot9;
                var2 = var4.bind;
                var4 = var2.bind(var4)(var1);
                var2 = undefined;
                var4 = var5.bind(var2)(var4, var3);
                return var2;
            case 155:
                var2 = 3;
                var3._y = var2;
                var3._z = var1;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            case 183:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            case 201:
                var2 = _closure1_slot6;
                var0 = global;
                var4 = var0.TypeError;
                var0 = var4.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = 'A promise cannot be resolved with itself.';
                var8 = var1;
                var0 = new var8[var4](var7, var6);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = undefined;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = function(arg0, arg1) { // Original name: reject, environment: var0
        _fun2523: for (var _fun2523_ip = 0;;) switch (_fun2523_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = 2;
                var2._y = var0;
                var2._z = var4;
                var1 = _closure1_slot3;
                var1 = var1._C;
                if (!var1) {
                    _fun2523_ip = 53;
                    continue _fun2523
                }
            case 37:
                var3 = _closure1_slot3;
                var1 = var3._C;
                var1 = var1.bind(var3)(var2, var4);
            case 53:
                var1 = _closure1_slot7;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = function(arg0) { // Original name: finale, environment: var0
        _fun2524: for (var _fun2524_ip = 0;;) switch (_fun2524_ip) {
            case 0:
                var1 = arg0;
                var2 = var1._x;
                var0 = 1;
                if (!(var0 === var2)) {
                    _fun2524_ip = 45;
                    continue _fun2524
                }
            case 16:
                var3 = _closure1_slot4;
                var2 = var1._A;
                var0 = undefined;
                var0 = var3.bind(var0)(var1, var2);
                var0 = null;
                var1._A = var0;
            case 45:
                var2 = var1._x;
                var0 = 2;
                if (!(var0 === var2)) {
                    _fun2524_ip = 129;
                    continue _fun2524
                }
            case 58:
                var0 = var1._A;
                var0 = var0.length;
                var4 = 0;
                var0 = var4 < var0;
                var2 = undefined;
                if (!var0) {
                    _fun2524_ip = 121;
                    continue _fun2524
                }
            case 83:
                var5 = _closure1_slot4;
                var0 = var1._A;
                var0 = var0[var4];
                var0 = var5.bind(var2)(var1, var0);
                var4 = var4 + 1;
                var0 = var1._A;
                var0 = var0.length;
                if (var4 < var0) {
                    _fun2524_ip = 83;
                    continue _fun2524
                }
            case 121:
                var0 = null;
                var1._A = var0;
            case 129:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: Handler, environment: var0
        _fun2525: for (var _fun2525_ip = 0;;) switch (_fun2525_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var1 = this;
                var4 = 'function';
                var6 = typeof var5;
                var3 = null;
                if (!(var4 === var6)) {
                    _fun2525_ip = 25;
                    continue _fun2525
                }
            case 22:
                var3 = var5;
            case 25:
                var1.onFulfilled = var3;
                var3 = typeof var2;
                var0 = null;
                if (!(var4 === var3)) {
                    _fun2525_ip = 43;
                    continue _fun2525
                }
            case 40:
                var0 = var2;
            case 43:
                var1.onRejected = var0;
                var0 = arg2;
                var1.promise = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function(arg0, arg1) { // Original name: doResolve, environment: var0
        _fun2526: for (var _fun2526_ip = 0;;) switch (_fun2526_ip) {
            case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var0 = false;
                var _closure2_slot1 = var0;
                var4 = arg0;
                var2 = function(arg0) { // Environment: var1
                    _fun2527: for (var _fun2527_ip = 0;;) switch (_fun2527_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun2527_ip = 38;
                                continue _fun2527
                            }
                        case 10:
                            var1 = true;
                            _closure2_slot1 = var1;
                            var3 = _closure1_slot5;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var2, var0);
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = function(arg0) { // Environment: var1
                    _fun2528: for (var _fun2528_ip = 0;;) switch (_fun2528_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun2528_ip = 38;
                                continue _fun2528
                            }
                        case 10:
                            var1 = true;
                            _closure2_slot1 = var1;
                            var3 = _closure1_slot6;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var2, var0);
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
            case 28: // try_start_0
                var5 = var4;
                var4 = var2;
                var2 = var0;
                var0 = undefined;
                var2 = var5.bind(var0)(var4, var2);
            case 45: // try_end0
                var4 = undefined;
                _fun2526_ip = 62;
                continue _fun2526;
            case 49: // catch_target0
                CatchBlockStart(arg_register = 2);
                _closure1_slot0 = var2;
                var4 = _closure1_slot1;
            case 62:
                var0 = _closure2_slot1;
                if (var0) {
                    _fun2526_ip = 80;
                    continue _fun2526
                }
            case 69:
                var2 = _closure1_slot1;
                var0 = var4 !== var2;
            case 80:
                if (var0) {
                    _fun2526_ip = 108;
                    continue _fun2526
                }
            case 83:
                var0 = true;
                _closure2_slot1 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
            case 108:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = null;
    var _closure1_slot0 = var3;
    var4 = {};
    var _closure1_slot1 = var4;
    var4 = arg4;
    var4.exports = var1;
    var1._B = var3;
    var1._C = var3;
    var1._D = var2;
    var1 = var1.prototype;
    var0 = function(arg0, arg1) { // Environment: var0
        _fun2529: for (var _fun2529_ip = 0;;) switch (_fun2529_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = this;
                var5 = var2.constructor;
                var0 = _closure1_slot3;
                if (!(var5 === var0)) {
                    _fun2529_ip = 100;
                    continue _fun2529
                }
            case 25:
                var6 = _closure1_slot3;
                var9 = _closure1_slot2;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var5;
                var0 = new var10[var6](var9, var8);
                var0 = var0 instanceof Object ? var0 : var5;
                var6 = _closure1_slot4;
                var1 = _closure1_slot8;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var10 = var5;
                var9 = var4;
                var8 = var3;
                var7 = var0;
                var1 = new var10[var1](var9, var8, var7, var6);
                var5 = var1 instanceof Object ? var1 : var5;
                var1 = undefined;
                var1 = var6.bind(var1)(var2, var5);
                return var0;
            case 100:
                var1 = function(arg0, arg1, arg2) { // Original name: safeThen, environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = arg1;
                    var _closure3_slot1 = var2;
                    var2 = arg2;
                    var _closure3_slot2 = var2;
                    var2 = var1.constructor;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure1_slot3;
                        var9 = _closure1_slot2;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var10 = var2;
                        var0 = new var10[var3](var9, var8);
                        var6 = var0 instanceof Object ? var0 : var2;
                        var3 = var6.then;
                        var2 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var6)(var2, var0);
                        var3 = _closure1_slot4;
                        var2 = _closure3_slot0;
                        var5 = _closure1_slot8;
                        var9 = _closure3_slot1;
                        var8 = _closure3_slot2;
                        var1 = var5.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = var1;
                        var7 = var6;
                        var0 = new var10[var5](var9, var8, var7, var6);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var0 = undefined;
                var0 = var1.bind(var0)(var2, var4, var3);
                return var0;
        }
    };
    var1.then = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);