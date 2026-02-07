// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.assert = var0;
    var2.assertNever = var0;
    var2.assertInt32 = var0;
    var2.assertUInt32 = var0;
    var2.assertFloat32 = var0;
    var3 = function arg0, arg1() {
        _fun14883: for (var _fun14883_ip = 0;;) switch (_fun14883_ip) {
            case 0:
                var0 = arg0;
                if (var0) {
                    _fun14883_ip = 39;
                    continue _fun14883
                }
            case 6:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = arg1;
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 39:
                var0 = undefined;
                return var0;
        }
    };
    var2.assert = var3;
    var3 = function arg0, arg1() {
        _fun14884: for (var _fun14884_ip = 0;;) switch (_fun14884_ip) {
            case 0:
                var2 = arg1;
                var0 = global;
                var0 = var0.Error;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun14884_ip = 30;
                    continue _fun14884
                }
            case 17:
                var3 = 'Unexpected object: ';
                var1 = arg0;
                var2 = var3 + var1;
            case 30:
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var1;
                var4 = var2;
                var0 = new var5[var0](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.assertNever = var3;
    var3 = function arg0() {
        _fun14885: for (var _fun14885_ip = 0;;) switch (_fun14885_ip) {
            case 0:
                var1 = arg0;
                var3 = typeof var1;
                var0 = 'number';
                if (!(var0 === var3)) {
                    _fun14885_ip = 98;
                    continue _fun14885
                }
            case 14:
                var0 = global;
                var4 = var0.Number;
                var2 = var4.isInteger;
                var2 = var2.bind(var4)(var1);
                if (!var2) {
                    _fun14885_ip = 60;
                    continue _fun14885
                }
            case 36:
                var2 = 2147483647;
                if (!(!(var1 > var2))) {
                    _fun14885_ip = 60;
                    continue _fun14885
                }
            case 46:
                var2 = -2147483648;
                if (!(!(var1 < var2))) {
                    _fun14885_ip = 60;
                    continue _fun14885
                }
            case 56:
                var2 = undefined;
                return var2;
            case 60:
                var2 = var0.Error;
                var0 = 'invalid int 32: ';
                var5 = var0 + var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 98:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var0 = 'invalid int 32: ';
                var5 = var0 + var3;
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.assertInt32 = var3;
    var3 = function arg0() {
        _fun14886: for (var _fun14886_ip = 0;;) switch (_fun14886_ip) {
            case 0:
                var1 = arg0;
                var3 = typeof var1;
                var0 = 'number';
                if (!(var0 === var3)) {
                    _fun14886_ip = 98;
                    continue _fun14886
                }
            case 14:
                var0 = global;
                var4 = var0.Number;
                var2 = var4.isInteger;
                var2 = var2.bind(var4)(var1);
                if (!var2) {
                    _fun14886_ip = 60;
                    continue _fun14886
                }
            case 36:
                var2 = 4294967295.0;
                if (!(!(var1 > var2))) {
                    _fun14886_ip = 60;
                    continue _fun14886
                }
            case 50:
                var2 = 0;
                if (!(!(var1 < var2))) {
                    _fun14886_ip = 60;
                    continue _fun14886
                }
            case 56:
                var2 = undefined;
                return var2;
            case 60:
                var2 = var0.Error;
                var0 = 'invalid uint 32: ';
                var5 = var0 + var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 98:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var0 = 'invalid uint 32: ';
                var5 = var0 + var3;
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.assertUInt32 = var3;
    var1 = function arg0() {
        _fun14887: for (var _fun14887_ip = 0;;) switch (_fun14887_ip) {
            case 0:
                var1 = arg0;
                var3 = typeof var1;
                var0 = 'number';
                if (!(var0 === var3)) {
                    _fun14887_ip = 106;
                    continue _fun14887
                }
            case 14:
                var0 = global;
                var4 = var0.Number;
                var2 = var4.isFinite;
                var2 = var2.bind(var4)(var1);
                if (!var2) {
                    _fun14887_ip = 64;
                    continue _fun14887
                }
            case 36:
                var2 = 3.4028234663852886e+38;
                if (!(!(var1 > var2))) {
                    _fun14887_ip = 68;
                    continue _fun14887
                }
            case 50:
                var2 = -3.4028234663852886e+38;
                if (!(!(var1 < var2))) {
                    _fun14887_ip = 68;
                    continue _fun14887
                }
            case 64:
                var2 = undefined;
                return var2;
            case 68:
                var2 = var0.Error;
                var0 = 'invalid float 32: ';
                var5 = var0 + var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 106:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var0 = 'invalid float 32: ';
                var5 = var0 + var3;
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.assertFloat32 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);