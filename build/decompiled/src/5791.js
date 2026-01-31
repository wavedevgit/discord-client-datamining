// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var3 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var3;
    var2 = {};
    var _closure1_slot2 = var2;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.keys;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var4 = var4.bind(var5)(var3);
    var3 = var4.forEach;
    var1 = function(arg0) { // Environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var7 = _closure1_slot2;
        var2 = {};
        var7[var4] = var2;
        var2 = global;
        var12 = var2.Object;
        var11 = var12.defineProperty;
        var10 = var7[var4];
        var9 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 0;
        var8 = var6[var3];
        var0 = undefined;
        var8 = var5.bind(var0)(var8);
        var8 = var8[var4];
        var8 = var8.channels;
        var9.value = var8;
        var8 = 'channels';
        var8 = var11.bind(var12)(var10, var8, var9);
        var10 = var2.Object;
        var9 = var10.defineProperty;
        var8 = var7[var4];
        var7 = {};
        var3 = var6[var3];
        var3 = var5.bind(var0)(var3);
        var3 = var3[var4];
        var3 = var3.labels;
        var7.value = var3;
        var3 = 'labels';
        var3 = var9.bind(var10)(var8, var3, var7);
        var3 = 1;
        var3 = var6[var3];
        var3 = var5.bind(var0)(var3);
        var4 = var3.bind(var0)(var4);
        var _closure2_slot1 = var4;
        var3 = var2.Object;
        var2 = var3.keys;
        var3 = var2.bind(var3)(var4);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var4 = arg0;
            var2 = _closure2_slot1;
            var3 = var2[var4];
            var5 = _closure1_slot2;
            var2 = _closure2_slot0;
            var7 = var5[var2];
            var6 = function(arg0) { // Original name: wrapRounded, environment: var1
                _fun51247: for (var _fun51247_ip = 0;;) switch (_fun51247_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var0 = function() { // Original name: wrappedFn, environment: var0
                            _fun51248: for (var _fun51248_ip = 0;;) switch (_fun51248_ip) {
                                case 0:
                                    var5 = undefined;
                                    var6 = undefined;
                                    var1 = arguments.length;
                                    var4 = global;
                                    var0 = var4.Array;
                                    var2 = var0.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var2;
                                    var8 = var1;
                                    var0 = new var9[var0](var8, var7);
                                    var2 = var0 instanceof Object ? var0 : var2;
                                    var3 = 0;
                                    var7 = var3 < var1;
                                    var0 = 0;
                                    if (!var7) {
                                        _fun51248_ip = 64;
                                        continue _fun51248
                                    }
                                case 49:
                                    var7 = arguments[var0];
                                    var2[var0] = var7;
                                    var0 = var0 + 1;
                                    if (var0 < var1) {
                                        _fun51248_ip = 49;
                                        continue _fun51248
                                    }
                                case 64:
                                    var0 = var2[var3];
                                    var1 = null;
                                    if (!(var1 != var0)) {
                                        _fun51248_ip = 159;
                                        continue _fun51248
                                    }
                                case 74:
                                    var6 = var0.length;
                                    var1 = 1;
                                    if (!(var6 > var1)) {
                                        _fun51248_ip = 89;
                                        continue _fun51248
                                    }
                                case 86:
                                    var2 = var0;
                                case 89:
                                    var1 = _closure4_slot0;
                                    var1 = var1.bind(var5)(var2);
                                    var5 = 'object';
                                    var2 = typeof var1;
                                    if (!(var5 === var2)) {
                                        _fun51248_ip = 157;
                                        continue _fun51248
                                    }
                                case 112:
                                    var2 = var1.length;
                                    var5 = var3 < var2;
                                    var3 = 0;
                                    if (!var5) {
                                        _fun51248_ip = 157;
                                        continue _fun51248
                                    }
                                case 126:
                                    var7 = var4.Math;
                                    var6 = var7.round;
                                    var5 = var1[var3];
                                    var5 = var6.bind(var7)(var5);
                                    var1[var3] = var5;
                                    var3 = var3 + 1;
                                    if (var3 < var2) {
                                        _fun51248_ip = 126;
                                        continue _fun51248
                                    }
                                case 157:
                                    return var1;
                                case 159:
                                    return var0;
                            }
                        };
                        var2 = 'conversion';
                        var2 = var2 in var1;
                        if (!var2) {
                            _fun51247_ip = 37;
                            continue _fun51247
                        }
                    case 25:
                        var1 = var1.conversion;
                        var0.conversion = var1;
                    case 37:
                        return var0;
                }
            };
            var0 = undefined;
            var6 = var6.bind(var0)(var3);
            var7[var4] = var6;
            var2 = var5[var2];
            var2 = var2[var4];
            var1 = function(arg0) { // Original name: wrapRaw, environment: var1
                _fun51249: for (var _fun51249_ip = 0;;) switch (_fun51249_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var0 = function() { // Original name: wrappedFn, environment: var0
                            _fun51250: for (var _fun51250_ip = 0;;) switch (_fun51250_ip) {
                                case 0:
                                    var3 = undefined;
                                    var5 = undefined;
                                    var4 = arguments.length;
                                    var0 = global;
                                    var0 = var0.Array;
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var8 = var1;
                                    var7 = var4;
                                    var0 = new var8[var0](var7, var6);
                                    var2 = var0 instanceof Object ? var0 : var1;
                                    var0 = 0;
                                    var6 = var0 < var4;
                                    var1 = 0;
                                    if (!var6) {
                                        _fun51250_ip = 64;
                                        continue _fun51250
                                    }
                                case 49:
                                    var6 = arguments[var1];
                                    var2[var1] = var6;
                                    var1 = var1 + 1;
                                    if (var1 < var4) {
                                        _fun51250_ip = 49;
                                        continue _fun51250
                                    }
                                case 64:
                                    var1 = var2[var0];
                                    var4 = null;
                                    var0 = var1;
                                    if (!(var4 != var0)) {
                                        _fun51250_ip = 104;
                                        continue _fun51250
                                    }
                                case 77:
                                    var5 = var1.length;
                                    var4 = 1;
                                    if (!(var5 > var4)) {
                                        _fun51250_ip = 92;
                                        continue _fun51250
                                    }
                                case 89:
                                    var2 = var1;
                                case 92:
                                    var1 = _closure4_slot0;
                                    var0 = var1.bind(var3)(var2);
                                case 104:
                                    return var0;
                            }
                        };
                        var2 = 'conversion';
                        var2 = var2 in var1;
                        if (!var2) {
                            _fun51249_ip = 37;
                            continue _fun51249
                        }
                    case 25:
                        var1 = var1.conversion;
                        var0.conversion = var1;
                    case 37:
                        return var0;
                }
            };
            var1 = var1.bind(var0)(var3);
            var2.raw = var1;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1 = var3.bind(var4)(var1);
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5792, 5794]);