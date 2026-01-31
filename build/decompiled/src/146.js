// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = function arg0, arg1() {
        _fun2347: for (var _fun2347_ip = 0;;) switch (_fun2347_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = undefined;
                var9 = undefined;
                var1 = arguments.length;
                var4 = 2;
                var5 = var1 > var4;
                var8 = -1;
                var1 = var8;
                if (!var5) {
                    _fun2347_ip = 47;
                    continue _fun2347
                }
            case 32:
                var5 = arguments[var4];
                var1 = var8;
                if (!(var0 !== var5)) {
                    _fun2347_ip = 47;
                    continue _fun2347
                }
            case 43:
                var1 = arguments[var4];
            case 47:
                var5 = 'number';
                var4 = typeof var1;
                var4 = var5 === var4;
                var7 = var1;
                if (!var4) {
                    _fun2347_ip = 86;
                    continue _fun2347
                }
            case 64:
                var5 = arguments.length;
                var6 = 3;
                var10 = var5 > var6;
                var5 = undefined;
                if (!var10) {
                    _fun2347_ip = 83;
                    continue _fun2347
                }
            case 79:
                var5 = arguments[var6];
            case 83:
                var7 = var5;
            case 86:
                if (!var4) {
                    _fun2347_ip = 92;
                    continue _fun2347
                }
            case 89:
                var8 = var1;
            case 92:
                var6 = 0;
                if (!(var6 !== var8)) {
                    _fun2347_ip = 507;
                    continue _fun2347
                }
            case 101:
                if (!(var3 !== var2)) {
                    _fun2347_ip = 503;
                    continue _fun2347
                }
            case 108:
                var1 = typeof var3;
                var5 = 'function';
                if (!(var5 === var1)) {
                    _fun2347_ip = 129;
                    continue _fun2347
                }
            case 119:
                var4 = typeof var2;
                if (!(var5 !== var4)) {
                    _fun2347_ip = 398;
                    continue _fun2347
                }
            case 129:
                var5 = 'object';
                if (!(var5 === var1)) {
                    _fun2347_ip = 392;
                    continue _fun2347
                }
            case 140:
                var1 = null;
                if (!(var1 !== var3)) {
                    _fun2347_ip = 392;
                    continue _fun2347
                }
            case 149:
                var4 = typeof var2;
                if (!(var5 === var4)) {
                    _fun2347_ip = 388;
                    continue _fun2347
                }
            case 159:
                if (!(var1 !== var2)) {
                    _fun2347_ip = 388;
                    continue _fun2347
                }
            case 166:
                var4 = var3.constructor;
                var1 = var2.constructor;
                if (!(var4 === var1)) {
                    _fun2347_ip = 384;
                    continue _fun2347
                }
            case 183:
                var1 = global;
                var4 = var1.Array;
                var1 = var4.isArray;
                var1 = var1.bind(var4)(var3);
                if (var1) {
                    _fun2347_ip = 308;
                    continue _fun2347
                }
            case 204:
                var12 = var3;
                var4 = 1;
                for (var9 in var12)
                    case 221: {
                        case 230: var1 = var9;
                        var16 = _closure1_slot1;
                        var20 = var3[var1];
                        var19 = var2[var1];
                        var18 = var8 - var4;
                        var21 = undefined;
                        var17 = var7;
                        var1 = var21[var16](var20, var19, var18, var17, var16);
                        if (!var1) {
                            _fun2347_ip = 221;
                            continue _fun2347
                        }
                        case 261: var1 = true;
                        return var1;
                    }
            case 265:
                var10 = var2;
                for (var4 in var10)
                    case 276: {
                        case 285: var1 = var4;
                        var12 = var3[var1];
                        if (var0 !== var12) {
                            _fun2347_ip = 276;
                            continue _fun2347
                        }
                        case 296: var1 = var2[var1];
                        if (var0 === var1) {
                            _fun2347_ip = 276;
                            continue _fun2347
                        }
                        case 304: var1 = true;
                        return var1;
                        case 308: var5 = var3.length;
                        var1 = var2.length;
                        if (!(var1 === var5)) {
                            _fun2347_ip = 380;
                            continue _fun2347
                        }
                        case 322: var9 = var6 < var5;
                        var1 = 1;
                        var6 = 0;
                        if (!var9) {
                            _fun2347_ip = 372;
                            continue _fun2347
                        }
                        case 337: var12 = _closure1_slot1;
                        var20 = var3[var6];
                        var19 = var2[var6];
                        var18 = var8 - var1;
                        var21 = undefined;
                        var17 = var7;
                        var9 = var21[var12](var20, var19, var18, var17, var16);
                        if (var9) {
                            _fun2347_ip = 376;
                            continue _fun2347
                        }
                        case 365: var6 = var6 + 1;
                        if (var6 < var5) {
                            _fun2347_ip = 337;
                            continue _fun2347
                        }
                    }
            case 372:
                var1 = false;
                return var1;
            case 376:
                var1 = true;
                return var1;
            case 380:
                var1 = true;
                return var1;
            case 384:
                var1 = true;
                return var1;
            case 388:
                var1 = true;
                return var1;
            case 392:
                var1 = var3 !== var2;
                return var1;
            case 398:
                var1 = null;
                var4 = var1 == var7;
                var0 = undefined;
                if (var4) {
                    _fun2347_ip = 415;
                    continue _fun2347
                }
            case 409:
                var0 = var7.unsafelyIgnoreFunctions;
            case 415:
                if (!(var1 == var0)) {
                    _fun2347_ip = 498;
                    continue _fun2347
                }
            case 419:
                var1 = _closure1_slot0;
                var5 = !var1;
                if (var5) {
                    _fun2347_ip = 445;
                    continue _fun2347
                }
            case 432:
                var1 = _closure1_slot0;
                var1 = var1.onDifferentFunctionsIgnored;
                var5 = !var1;
            case 445:
                if (var5) {
                    _fun2347_ip = 465;
                    continue _fun2347
                }
            case 448:
                var1 = var7;
                if (!var1) {
                    _fun2347_ip = 462;
                    continue _fun2347
                }
            case 454:
                var6 = 'unsafelyIgnoreFunctions';
                var1 = var6 in var7;
            case 462:
                var5 = var1;
            case 465:
                var0 = true;
                if (var5) {
                    _fun2347_ip = 498;
                    continue _fun2347
                }
            case 470:
                var5 = _closure1_slot0;
                var4 = var5.onDifferentFunctionsIgnored;
                var3 = var3.name;
                var2 = var2.name;
                var2 = var4.bind(var5)(var3, var2);
                var0 = true;
            case 498:
                var0 = !var0;
                return var0;
            case 503:
                var0 = false;
                return var0;
            case 507:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = function arg0() {
        var0 = arg0;
        var _closure1_slot0 = var0;
        var0 = undefined;
        return var0;
    };
    var0.unstable_setLogListeners = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);