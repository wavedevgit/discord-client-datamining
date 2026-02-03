// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var7 = function arg0() {
        _fun66713: for (var _fun66713_ip = 0;;) switch (_fun66713_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.Number;
                var1 = var2.isSafeInteger;
                var1 = var1.bind(var2)(var3);
                if (!var1) {
                    _fun66713_ip = 35;
                    continue _fun66713
                }
            case 25:
                var1 = 0;
                if (!(!(var3 < var1))) {
                    _fun66713_ip = 35;
                    continue _fun66713
                }
            case 31:
                var1 = undefined;
                return var1;
            case 35:
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'positive integer expected, not ';
                var4 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot0 = var7;
    var6 = function arg0() {
        _fun66714: for (var _fun66714_ip = 0;;) switch (_fun66714_ip) {
            case 0:
                var3 = arg0;
                var1 = 'boolean';
                var0 = typeof var3;
                if (!(var1 === var0)) {
                    _fun66714_ip = 18;
                    continue _fun66714
                }
            case 14:
                var0 = undefined;
                return var0;
            case 18:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'boolean expected, not ';
                var4 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = function arg0() {
        _fun66715: for (var _fun66715_ip = 0;;) switch (_fun66715_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var0 = var0.Uint8Array;
                var0 = var2 instanceof var0;
                if (var0) {
                    _fun66715_ip = 62;
                    continue _fun66715
                }
            case 18:
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun66715_ip = 38;
                    continue _fun66715
                }
            case 27:
                var4 = 'object';
                var3 = typeof var2;
                var1 = var4 === var3;
            case 38:
                if (!var1) {
                    _fun66715_ip = 59;
                    continue _fun66715
                }
            case 41:
                var2 = var2.constructor;
                var3 = var2.name;
                var2 = 'Uint8Array';
                var1 = var2 === var3;
            case 59:
                var0 = var1;
            case 62:
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var5 = function arg0() {
        _fun66716: for (var _fun66716_ip = 0;;) switch (_fun66716_ip) {
            case 0:
                var2 = arg0;
                var0 = undefined;
                var8 = undefined;
                var1 = _closure1_slot1;
                var3 = var1.bind(var0)(var2);
                var1 = global;
                if (var3) {
                    _fun66716_ip = 58;
                    continue _fun66716
                }
            case 24:
                var5 = var1.Error;
                var3 = var5.prototype;
                var4 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var13 = 'Uint8Array expected';
                var14 = var4;
                var3 = new var14[var5](var13, var12);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
            case 58:
                var7 = arguments.length;
                var9 = var1.Array;
                var5 = 1;
                var6 = var7 > var5;
                var4 = 0;
                var3 = 0;
                if (!var6) {
                    _fun66716_ip = 85;
                    continue _fun66716
                }
            case 81:
                var3 = var7 - var5;
            case 85:
                var6 = var9.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var9
                    }
                });
                var14 = var6;
                var13 = var3;
                var3 = new var14[var9](var13, var12);
                var6 = var3 instanceof Object ? var3 : var6;
                var9 = var5 < var7;
                var3 = var5;
                if (!var9) {
                    _fun66716_ip = 137;
                    continue _fun66716
                }
            case 118:
                var10 = var3 - var5;
                var9 = arguments[var3];
                var6[var10] = var9;
                var3 = var3 + 1;
                if (var3 < var7) {
                    _fun66716_ip = 118;
                    continue _fun66716
                }
            case 137:
                var3 = var6.length;
                if (!(var3 > var4)) {
                    _fun66716_ip = 227;
                    continue _fun66716
                }
            case 146:
                var4 = var6.includes;
                var3 = var2.length;
                var3 = var4.bind(var6)(var3);
                if (var3) {
                    _fun66716_ip = 227;
                    continue _fun66716
                }
            case 164:
                var3 = var1.Error;
                var5 = var2.length;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Uint8Array expected of length ';
                var1 = ', not of length=';
                var13 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var14 = var2;
                var1 = new var14[var3](var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 227:
                return var0;
        }
    };
    var _closure1_slot2 = var5;
    var4 = function arg0() {
        _fun66717: for (var _fun66717_ip = 0;;) switch (_fun66717_ip) {
            case 0:
                var1 = arg0;
                var2 = 'function';
                var0 = typeof var1;
                if (!(var2 === var0)) {
                    _fun66717_ip = 59;
                    continue _fun66717
                }
            case 14:
                var0 = var1.create;
                var0 = typeof var0;
                if (!(var2 === var0)) {
                    _fun66717_ip = 59;
                    continue _fun66717
                }
            case 26:
                var2 = _closure1_slot0;
                var3 = var1.outputLen;
                var0 = undefined;
                var3 = var2.bind(var0)(var3);
                var1 = var1.blockLen;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 59:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = 'Hash should be wrapped by utils.wrapConstructor';
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3 = function arg0() {
        _fun66718: for (var _fun66718_ip = 0;;) switch (_fun66718_ip) {
            case 0:
                var1 = arg0;
                var0 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var3 = 1;
                var5 = var2 > var3;
                if (!var5) {
                    _fun66718_ip = 28;
                    continue _fun66718
                }
            case 20:
                var2 = arguments[var3];
                var5 = var0 !== var2;
            case 28:
                var2 = !var5;
                if (!var5) {
                    _fun66718_ip = 38;
                    continue _fun66718
                }
            case 34:
                var2 = arguments[var3];
            case 38:
                var3 = var1.destroyed;
                if (var3) {
                    _fun66718_ip = 97;
                    continue _fun66718
                }
            case 47:
                if (!var2) {
                    _fun66718_ip = 59;
                    continue _fun66718
                }
            case 50:
                var1 = var1.finished;
                if (var1) {
                    _fun66718_ip = 61;
                    continue _fun66718
                }
            case 59:
                return var0;
            case 61:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = 'Hash#digest() has already been called';
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 97:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = 'Hash instance has been destroyed';
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2 = function arg0, arg1() {
        _fun66719: for (var _fun66719_ip = 0;;) switch (_fun66719_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot2;
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var2 = arg1;
                var3 = var2.outputLen;
                var1 = var1.length;
                if (!(!(var1 < var3))) {
                    _fun66719_ip = 37;
                    continue _fun66719
                }
            case 35:
                return var0;
            case 37:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'digestInto() expects output buffer of length at least ';
                var4 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var8 = global;
    var11 = var8.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var8 = true;
    var9.value = var8;
    var8 = '__esModule';
    var8 = var10.bind(var11)(var1, var8, var9);
    var1.isBytes = var0;
    var1.number = var7;
    var1.bool = var6;
    var1.bytes = var5;
    var1.hash = var4;
    var1.exists = var3;
    var1.output = var2;
    var0 = {};
    var0.number = var7;
    var0.bool = var6;
    var0.bytes = var5;
    var0.hash = var4;
    var0.exists = var3;
    var0.output = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);