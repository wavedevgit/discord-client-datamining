// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var2 = var1.Object;
    var2 = var2.prototype;
    var2 = var2.toString;
    var _closure1_slot2 = var2;
    var1 = var1.Object;
    var1 = var1.prototype;
    var1 = var1.hasOwnProperty;
    var _closure1_slot3 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun16416: for (var _fun16416_ip = 0;;) switch (_fun16416_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var1 = arg2;
                var0 = undefined;
                var2 = undefined;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var4 = 0;
                var3 = var3[var4];
                var3 = var8.bind(var0)(var3);
                var3 = var3.bind(var0)(var6);
                if (var3) {
                    _fun16416_ip = 79;
                    continue _fun16416
                }
            case 43:
                var3 = global;
                var9 = var3.TypeError;
                var3 = var9.prototype;
                var8 = Object.create(var3, {
                    constructor: {
                        value: var9
                    }
                });
                var18 = 'iterator must be a function';
                var19 = var8;
                var3 = new var19[var9](var18, var17);
                var3 = var3 instanceof Object ? var3 : var8;
                throw var3;
            case 79:
                var3 = arguments.length;
                var2 = 3;
                var2 = var3 >= var2;
                var3 = undefined;
                if (!var2) {
                    _fun16416_ip = 97;
                    continue _fun16416
                }
            case 94:
                var3 = var1;
            case 97:
                var2 = _closure1_slot2;
                var1 = var2.call;
                var2 = var1.bind(var2)(var7);
                var1 = '[object Array]';
                if (!(var1 !== var2)) {
                    _fun16416_ip = 310;
                    continue _fun16416
                }
            case 122:
                var2 = 'string';
                var1 = typeof var7;
                if (!(var2 !== var1)) {
                    _fun16416_ip = 226;
                    continue _fun16416
                }
            case 133:
                var10 = var7;
                var1 = null;
                for (var2 in var10)
                    case 149: {
                        case 161: var13 = var2;
                        var14 = _closure1_slot3;
                        var12 = var14.call;
                        var12 = var12.bind(var14)(var7, var13);
                        if (!var12) {
                            _fun16416_ip = 149;
                            continue _fun16416
                        }
                        case 182: if (!(var1 != var3)) {
                            _fun16416_ip = 213;
                            continue _fun16416
                        }
                        case 186: var14 = var6.call;
                        var17 = var7[var13];
                        var19 = var6;
                        var18 = var3;
                        var16 = var13;
                        var15 = var7;
                        var12 = var19[var14](var18, var17, var16, var15, var14);
                        _fun16416_ip = 149;
                        continue _fun16416;
                        case 213: var12 = var7[var13];
                        var12 = var6.bind(var0)(var12, var13, var7);
                        _fun16416_ip = 149;
                        continue _fun16416;
                        case 226: var8 = var7.length;
                        var9 = var4 < var8;
                        var2 = null;
                        var1 = 0;
                        if (!var9) {
                            _fun16416_ip = 396;
                            continue _fun16416
                        }
                        case 245: if (!(var2 != var3)) {
                            _fun16416_ip = 283;
                            continue _fun16416
                        }
                        case 249: var10 = var6.call;
                        var9 = var7.charAt;
                        var17 = var9.bind(var7)(var1);
                        var19 = var6;
                        var18 = var3;
                        var16 = var1;
                        var15 = var7;
                        var9 = var19[var10](var18, var17, var16, var15, var14);
                        _fun16416_ip = 301;
                        continue _fun16416;
                        case 283: var9 = var7.charAt;
                        var9 = var9.bind(var7)(var1);
                        var9 = var6.bind(var0)(var9, var1, var7);
                        case 301: var1 = var1 + 1;
                        if (var1 < var8) {
                            _fun16416_ip = 245;
                            continue _fun16416
                        }
                        case 308: _fun16416_ip = 396;
                        continue _fun16416;
                        case 310: var2 = var7.length;
                        var8 = var4 < var2;
                        var1 = null;
                        var4 = 0;
                        if (!var8) {
                            _fun16416_ip = 396;
                            continue _fun16416
                        }
                        case 326: var9 = _closure1_slot3;
                        var8 = var9.call;
                        var9 = var8.bind(var9)(var7, var4);
                        var8 = var4;
                        if (!var9) {
                            _fun16416_ip = 389;
                            continue _fun16416
                        }
                        case 347: if (!(var1 != var3)) {
                            _fun16416_ip = 378;
                            continue _fun16416
                        }
                        case 351: var10 = var6.call;
                        var17 = var7[var8];
                        var19 = var6;
                        var18 = var3;
                        var16 = var8;
                        var15 = var7;
                        var9 = var19[var10](var18, var17, var16, var15, var14);
                        _fun16416_ip = 389;
                        continue _fun16416;
                        case 378: var9 = var7[var8];
                        var9 = var6.bind(var0)(var9, var8, var7);
                        case 389: var4 = var8 + 1;
                        if (var4 < var2) {
                            _fun16416_ip = 326;
                            continue _fun16416
                        }
                    }
            case 396:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1402]);