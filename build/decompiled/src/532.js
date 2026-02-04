// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = global;
    var2 = var1.Object;
    var2 = var2.prototype;
    var2 = var2.toString;
    var _closure1_slot0 = var2;
    var1 = var1.Math;
    var1 = var1.max;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1() {
        _fun6626: for (var _fun6626_ip = 0;;) switch (_fun6626_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = new Array(0);
                var1 = var5.length;
                var3 = 0;
                var1 = var3 < var1;
                var2 = 1;
                var6 = 0;
                if (!var1) {
                    _fun6626_ip = 50;
                    continue _fun6626
                }
            case 29:
                var1 = var5[var6];
                var0[var6] = var1;
                var6 = var6 + var2;
                var1 = var5.length;
                if (var6 < var1) {
                    _fun6626_ip = 29;
                    continue _fun6626
                }
            case 50:
                var1 = var4.length;
                var1 = var3 < var1;
                var3 = 0;
                if (!var1) {
                    _fun6626_ip = 94;
                    continue _fun6626
                }
            case 64:
                var1 = var5.length;
                var6 = var3 + var1;
                var1 = var4[var3];
                var0[var6] = var1;
                var3 = var3 + var2;
                var1 = var4.length;
                if (var3 < var1) {
                    _fun6626_ip = 64;
                    continue _fun6626
                }
            case 94:
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function arg0() {
        _fun6627: for (var _fun6627_ip = 0;;) switch (_fun6627_ip) {
            case 0:
                var1 = this;
                var4 = undefined;
                var9 = undefined;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var1;
                var3 = 'function';
                var0 = typeof var1;
                if (!(var3 === var0)) {
                    _fun6627_ip = 351;
                    continue _fun6627
                }
            case 34:
                var3 = _closure1_slot0;
                var0 = var3.apply;
                var3 = var0.bind(var3)(var1);
                var0 = '[object Function]';
                if (!(var0 === var3)) {
                    _fun6627_ip = 351;
                    continue _fun6627
                }
            case 62:
                var0 = new Array(0);
                var3 = arguments.length;
                var10 = 1;
                var6 = var10 < var3;
                var3 = 0;
                var8 = var10;
                var7 = 0;
                if (!var6) {
                    _fun6627_ip = 109;
                    continue _fun6627
                }
            case 86:
                var6 = arguments[var8];
                var0[var7] = var6;
                var8 = var8 + var10;
                var7 = var7 + var10;
                var6 = arguments.length;
                if (var8 < var6) {
                    _fun6627_ip = 86;
                    continue _fun6627
                }
            case 109:
                var _closure2_slot3 = var0;
                var5 = _closure1_slot1;
                var6 = var1.length;
                var0 = var0.length;
                var0 = var6 - var0;
                var6 = var5.bind(var4)(var3, var0);
                var9 = new Array(0);
                var7 = var3 < var6;
                var5 = '$';
                var0 = 0;
                if (!var7) {
                    _fun6627_ip = 169;
                    continue _fun6627
                }
            case 154:
                var7 = var5 + var0;
                var9[var0] = var7;
                var0 = var0 + 1;
                if (var0 < var6) {
                    _fun6627_ip = 154;
                    continue _fun6627
                }
            case 169:
                var0 = global;
                var5 = var0.Function;
                var0 = var9.length;
                var0 = var3 < var0;
                var7 = '';
                var8 = ',';
                var3 = 0;
                var6 = var7;
                if (!var0) {
                    _fun6627_ip = 245;
                    continue _fun6627
                }
            case 202:
                var0 = var9[var3];
                var0 = var7 + var0;
                var3 = var3 + var10;
                var12 = var9.length;
                var11 = var0;
                if (!(var3 < var12)) {
                    _fun6627_ip = 230;
                    continue _fun6627
                }
            case 226:
                var11 = var0 + var8;
            case 230:
                var0 = var9.length;
                var7 = var11;
                var6 = var7;
                if (var3 < var0) {
                    _fun6627_ip = 202;
                    continue _fun6627
                }
            case 245:
                var3 = 'binder';
                var0 = 'return function (';
                var6 = var0 + var6;
                var0 = '){ return binder.apply(this,arguments); }';
                var0 = var6 + var0;
                var3 = var5.bind(var4)(var3, var0);
                var0 = function() {
                    _fun6628: for (var _fun6628_ip = 0;;) switch (_fun6628_ip) {
                        case 0:
                            var0 = this;
                            var3 = undefined;
                            var1 = undefined;
                            var2 = _closure2_slot2;
                            var7 = var0 instanceof var2;
                            var4 = _closure2_slot1;
                            var2 = var4.apply;
                            if (var7) {
                                _fun6628_ip = 64;
                                continue _fun6628
                            }
                        case 33:
                            var8 = _closure2_slot0;
                            var10 = _closure1_slot2;
                            var9 = _closure2_slot3;
                            var1 = arguments;
                            var7 = var1;
                            var7 = var10.bind(var3)(var9, var7);
                            var7 = var2.bind(var4)(var8, var7);
                            return var7;
                        case 64:
                            var6 = _closure1_slot2;
                            var5 = _closure2_slot3;
                            var1 = arguments;
                            var1 = var6.bind(var3)(var5, var1);
                            var1 = var2.bind(var4)(var0, var1);
                            var2 = global;
                            var2 = var2.Object;
                            var2 = var2.bind(var3)(var1);
                            if (!(var2 === var1)) {
                                _fun6628_ip = 106;
                                continue _fun6628
                            }
                        case 103:
                            var0 = var1;
                        case 106:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0);
                var _closure2_slot2 = var0;
                var3 = var1.prototype;
                if (!var3) {
                    _fun6627_ip = 349;
                    continue _fun6627
                }
            case 299:
                var3 = function() {
                    var0 = undefined;
                    return var0;
                };
                var2 = var1.prototype;
                var3.prototype = var2;
                var2 = var3.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var15 = var4;
                var2 = new var15[var3](var14);
                var2 = var2 instanceof Object ? var2 : var4;
                var0.prototype = var2;
                var2 = null;
                var3.prototype = var2;
            case 349:
                return var0;
            case 351:
                var0 = global;
                var2 = var0.TypeError;
                var0 = 'Function.prototype.bind called on incompatible ';
                var14 = var0 + var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var1;
                var0 = new var15[var2](var14, var13);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);