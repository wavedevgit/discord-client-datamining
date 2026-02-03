// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = function arg0() {
        _fun16246: for (var _fun16246_ip = 0;;) switch (_fun16246_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var4 = _closure1_slot1;
                var4 = var2 instanceof var4;
                if (var4) {
                    _fun16246_ip = 57;
                    continue _fun16246
                }
            case 21:
                var4 = global;
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = "Constructor PseudoMap requires 'new'";
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 57:
                var4 = var2.clear;
                var4 = var4.bind(var2)();
                if (!var3) {
                    _fun16246_ip = 202;
                    continue _fun16246
                }
            case 73:
                var1 = _closure1_slot1;
                var1 = var3 instanceof var1;
                if (var1) {
                    _fun16246_ip = 186;
                    continue _fun16246
                }
            case 84:
                var1 = global;
                var4 = var1.Map;
                var5 = 'function';
                var4 = typeof var4;
                if (!(var5 === var4)) {
                    _fun16246_ip = 115;
                    continue _fun16246
                }
            case 102:
                var4 = var1.Map;
                var4 = var3 instanceof var4;
                if (var4) {
                    _fun16246_ip = 186;
                    continue _fun16246
                }
            case 115:
                var5 = var1.Array;
                var4 = var5.isArray;
                var4 = var4.bind(var5)(var3);
                if (var4) {
                    _fun16246_ip = 168;
                    continue _fun16246
                }
            case 134:
                var5 = var1.TypeError;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = 'invalid argument';
                var9 = var4;
                var1 = new var9[var5](var8, var7);
                var1 = var1 instanceof Object ? var1 : var4;
                throw var1;
            case 168:
                var4 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var3 = this;
                    var2 = var3.set;
                    var0 = 0;
                    var1 = var4[var0];
                    var0 = 1;
                    var0 = var4[var0];
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var4.bind(var3)(var1, var2);
                _fun16246_ip = 202;
                continue _fun16246;
            case 186:
                var1 = var3.forEach;
                var0 = function(arg0, arg1) { // Environment: var0
                    var3 = this;
                    var2 = var3.set;
                    var1 = arg1;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var3)(var0, var2);
            case 202:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot1 = var3;
    var1 = function arg0, arg1() {
        _fun16249: for (var _fun16249_ip = 0;;) switch (_fun16249_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = var1 === var2;
                if (var0) {
                    _fun16249_ip = 27;
                    continue _fun16249
                }
            case 13:
                var1 = var1 != var1;
                if (!var1) {
                    _fun16249_ip = 24;
                    continue _fun16249
                }
            case 20:
                var1 = var2 != var2;
            case 24:
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function arg0, arg1, arg2() {
        var1 = this;
        var0 = arg0;
        var1.key = var0;
        var0 = arg1;
        var1.value = var0;
        var0 = arg2;
        var1._index = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot3 = var1;
    var1 = function arg0, arg1() {
        _fun16251: for (var _fun16251_ip = 0;;) switch (_fun16251_ip) {
            case 0:
                var1 = arg0;
                var8 = arg1;
                var0 = '_';
                var7 = var0 + var8;
                var2 = _closure1_slot0;
                var0 = var2.call;
                var0 = var0.bind(var2)(var1, var7);
                var2 = undefined;
                var5 = 0;
                var4 = var7;
                if (!var0) {
                    _fun16251_ip = 98;
                    continue _fun16251
                }
            case 42:
                var3 = _closure1_slot2;
                var0 = var1[var4];
                var0 = var0.key;
                var3 = var3.bind(var2)(var0, var8);
                var0 = var4;
                if (var3) {
                    _fun16251_ip = 100;
                    continue _fun16251
                }
            case 67:
                var3 = parseFloat(var5);
                var5 = var3 + 1;
                var9 = var7 + var3;
                var10 = _closure1_slot0;
                var3 = var10.call;
                var3 = var3.bind(var10)(var1, var9);
                var4 = var9;
                if (var3) {
                    _fun16251_ip = 42;
                    continue _fun16251
                }
            case 98:
                return var2;
            case 100:
                var0 = var1[var0];
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var2 = var1.Object;
    var2 = var2.prototype;
    var2 = var2.hasOwnProperty;
    var _closure1_slot0 = var2;
    var2 = arg4;
    var2.exports = var3;
    var4 = var3.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16252: for (var _fun16252_ip = 0;;) switch (_fun16252_ip) {
            case 0:
                var1 = arg1;
                var3 = this;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var1;
                if (var1) {
                    _fun16252_ip = 24;
                    continue _fun16252
                }
            case 21:
                var1 = var3;
            case 24:
                _closure2_slot1 = var1;
                var1 = global;
                var4 = var1.Object;
                var2 = var4.keys;
                var1 = var3._data;
                var2 = var2.bind(var4)(var1);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun16253: for (var _fun16253_ip = 0;;) switch (_fun16253_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = this;
                            var1 = 'size';
                            if (!(var1 !== var5)) {
                                _fun16253_ip = 66;
                                continue _fun16253
                            }
                        case 13:
                            var4 = _closure2_slot0;
                            var3 = var4.call;
                            var2 = _closure2_slot1;
                            var1 = var0._data;
                            var1 = var1[var5];
                            var1 = var1.value;
                            var0 = var0._data;
                            var0 = var0[var5];
                            var0 = var0.key;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0, var3);
                var0 = undefined;
                return var0;
        }
    };
    var4.forEach = var2;
    var4 = var3.prototype;
    var2 = function(arg0) { // Environment: var0
        var3 = _closure1_slot4;
        var0 = this;
        var2 = var0._data;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var2, var0);
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var4.has = var2;
    var4 = var3.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun16255: for (var _fun16255_ip = 0;;) switch (_fun16255_ip) {
            case 0:
                var3 = _closure1_slot4;
                var0 = this;
                var2 = var0._data;
                var1 = undefined;
                var0 = arg0;
                var1 = var3.bind(var1)(var2, var0);
                var0 = var1;
                if (!var0) {
                    _fun16255_ip = 37;
                    continue _fun16255
                }
            case 32:
                var0 = var1.value;
            case 37:
                return var0;
        }
    };
    var4.get = var2;
    var4 = var3.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16256: for (var _fun16256_ip = 0;;) switch (_fun16256_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var0 = this;
                var3 = var0._data;
                var0 = '_';
                var10 = var0 + var7;
                var1 = _closure1_slot0;
                var0 = var1.call;
                var1 = var0.bind(var1)(var3, var10);
                var0 = undefined;
                var9 = 0;
                var8 = var10;
                var5 = var8;
                if (!var1) {
                    _fun16256_ip = 112;
                    continue _fun16256
                }
            case 53:
                var6 = _closure1_slot2;
                var1 = var3[var8];
                var1 = var1.key;
                var6 = var6.bind(var0)(var1, var7);
                var1 = var8;
                if (var6) {
                    _fun16256_ip = 165;
                    continue _fun16256
                }
            case 78:
                var6 = parseFloat(var9);
                var9 = var6 + 1;
                var11 = var10 + var6;
                var12 = _closure1_slot0;
                var6 = var12.call;
                var6 = var6.bind(var12)(var3, var11);
                var8 = var11;
                var5 = var8;
                if (var6) {
                    _fun16256_ip = 53;
                    continue _fun16256
                }
            case 112:
                var6 = var3.size;
                var6 = var6 + 1;
                var3.size = var6;
                var4 = _closure1_slot3;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var6;
                var15 = var7;
                var14 = var2;
                var13 = var5;
                var4 = new var16[var4](var15, var14, var13, var12);
                var4 = var4 instanceof Object ? var4 : var6;
                var3[var5] = var4;
                _fun16256_ip = 175;
                continue _fun16256;
            case 165:
                var1 = var3[var1];
                var1.value = var2;
            case 175:
                return var0;
        }
    };
    var4.set = var2;
    var4 = var3.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun16257: for (var _fun16257_ip = 0;;) switch (_fun16257_ip) {
            case 0:
                var1 = this;
                var4 = _closure1_slot4;
                var3 = var1._data;
                var0 = undefined;
                var2 = arg0;
                var2 = var4.bind(var0)(var3, var2);
                if (!var2) {
                    _fun16257_ip = 65;
                    continue _fun16257
                }
            case 29:
                var3 = var1._data;
                var2 = var2._index;
                var2 = delete var3[var2];
                var2 = var1._data;
                var1 = var2.size;
                var1 = var1 - 1;
                var2.size = var1;
            case 65:
                return var0;
        }
    };
    var4.delete = var2;
    var4 = var3.prototype;
    var2 = function() { // Environment: var0
        var1 = global;
        var3 = var1.Object;
        var2 = var3.create;
        var0 = null;
        var0 = var2.bind(var3)(var0);
        var2 = 0;
        var0.size = var2;
        var4 = var1.Object;
        var3 = var4.defineProperty;
        var2 = {
            'value': null,
            'enumerable': false,
            'configurable': true,
            'writable': false
        };
        var2.value = var0;
        var1 = this;
        var0 = '_data';
        var0 = var3.bind(var4)(var1, var0, var2);
        var0 = undefined;
        return var0;
    };
    var4.clear = var2;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = var3.prototype;
    var2 = {};
    var1 = function() {
        var0 = this;
        var0 = var0._data;
        var0 = var0.size;
        return var0;
    };
    var2.get = var1;
    var1 = function arg0() {
        var0 = undefined;
        return var0;
    };
    var2.set = var1;
    var1 = true;
    var2.enumerable = var1;
    var2.configurable = var1;
    var1 = 'size';
    var1 = var5.bind(var6)(var4, var1, var2);
    var1 = var3.prototype;
    var2 = var3.prototype;
    var3 = var3.prototype;
    var0 = function() { // Environment: var0
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'iterators are not implemented in this version';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var3.entries = var0;
    var2.keys = var0;
    var1.values = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);