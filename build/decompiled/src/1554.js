// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0, arg1() {
        _fun17524: for (var _fun17524_ip = 0;;) switch (_fun17524_ip) {
            case 0:
                var16 = arg1;
                var0 = undefined;
                var17 = undefined;
                var18 = undefined;
                var19 = undefined;
                var1 = undefined;
                var3 = undefined;
                var14 = arg0;
                var2 = var14[Symbol.iterator];
                var14 = var2().next;
                var13 = global;
                var11 = 0;
                var10 = '^';
                var5 = '';
                var9 = '/';
                var8 = '.';
                var7 = '\\.';
                var6 = '(/)*';
                var4 = null;
            case 60:
                var22 = var14().value;
                var20 = var2;
                if (!(var20 !== var0)) {
                    _fun17524_ip = 436;
                    continue _fun17524
                }
            case 74: // try_start_0
                var17 = var22;
                var21 = var22.match;
                var20 = /^[^:]+:/;
                var20 = var21.bind(var22)(var20);
                var19 = var20;
                var21 = var4 == var20;
                var20 = undefined;
                if (var21) {
                    _fun17524_ip = 121;
                    continue _fun17524
                }
            case 114:
                var21 = var19;
                var20 = var21[var11];
            case 121:
                var18 = var20;
                var20 = var4 != var20;
                var23 = var5;
                if (!var20) {
                    _fun17524_ip = 137;
                    continue _fun17524
                }
            case 134:
                var23 = var18;
            case 137:
                var25 = var17;
                var22 = var25.replace;
                var27 = var13.RegExp;
                var24 = _closure1_slot0;
                var20 = _closure1_slot1;
                var21 = var20[var11];
                var21 = var24.bind(var0)(var21);
                var26 = var21.bind(var0)(var23);
                var21 = var13.HermesInternal;
                var21 = var21.concat;
                var30 = var21.bind(var10)(var26);
                var26 = var27.prototype;
                var26 = Object.create(var26, {
                    constructor: {
                        value: var27
                    }
                });
                var31 = var26;
                var21 = new var31[var27](var30, var29);
                var21 = var21 instanceof Object ? var21 : var26;
                var25 = var22.bind(var25)(var21, var5);
                var22 = var25.replace;
                var21 = /\\/ + /g;
                var25 = var22.bind(var25)(var21, var9);
                var22 = var25.replace;
                var21 = /^\\/ / ;
                var21 = var22.bind(var25)(var21, var5);
                var22 = var13.RegExp;
                var20 = var20[var11];
                var20 = var24.bind(var0)(var20);
                var23 = var20.bind(var0)(var23);
                var20 = var21.split;
                var24 = var20.bind(var21)(var8);
                var21 = var24.map;
                var20 = function(arg0) { // Environment: var15
                    _fun17525: for (var _fun17525_ip = 0;;) switch (_fun17525_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = '[^/]+';
                            var1 = '*';
                            if (!(var1 !== var3)) {
                                _fun17525_ip = 46;
                                continue _fun17525
                            }
                        case 17:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 0;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var0 = var1.bind(var2)(var3);
                        case 46:
                            return var0;
                    }
                };
                var21 = var21.bind(var24)(var20);
                var20 = var21.join;
                var21 = var20.bind(var21)(var7);
                var20 = var13.HermesInternal;
                var20 = var20.concat;
                var30 = var20.bind(var10)(var23, var6, var21);
                var21 = var22.prototype;
                var21 = Object.create(var21, {
                    constructor: {
                        value: var22
                    }
                });
                var31 = var21;
                var20 = new var31[var22](var30, var29);
                var22 = var20 instanceof Object ? var20 : var21;
                var1 = var22;
                var23 = var16;
                var21 = var23.replace;
                var20 = /\\/ + /g;
                var21 = var21.bind(var23)(var20, var9);
                var3 = var21;
                var20 = var22.test;
                var20 = var20.bind(var22)(var21);
                if (var20) {
                    _fun17524_ip = 410;
                    continue _fun17524
                }
            case 405: // try_end0
                _fun17524_ip = 60;
                continue _fun17524;
            case 410: // try_start_1
                var4 = var3;
                var3 = var4.replace;
                var1 = var3.bind(var4)(var1, var5);
            case 424: // try_end1
                var2.return();
                return var1;
            case 429: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 436:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1514]);