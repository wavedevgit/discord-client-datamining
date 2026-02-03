// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29150: for (var _fun29150_ip = 0;;) switch (_fun29150_ip) {
        case 0:
            var6 = require;
            var1 = dependencyMap;
            var9 = var6;
            var _closure1_slot0 = var6;
            var2 = module;
            var8 = var1;
            var _closure1_slot1 = var1;
            var1 = undefined;
            var4 = undefined;
            var7 = undefined;
            var3 = {};
        case 33: // try_start_0
            var10 = var3;
            var6 = null;
            var10.__proto__ = var6;
        case 44: // try_end0
            _fun29150_ip = 112;
            continue _fun29150;
        case 46: // catch_target0
            CatchBlockStart(arg_register = 6);
            var0 = var6;
            if (!var6) {
                _fun29150_ip = 291;
                continue _fun29150
            }
        case 57:
            var6 = var0;
            var10 = 'object';
            var6 = typeof var6;
            if (!(var10 === var6)) {
                _fun29150_ip = 291;
                continue _fun29150
            }
        case 74:
            var10 = var0;
            var6 = 'code';
            var6 = var6 in var10;
            if (!var6) {
                _fun29150_ip = 291;
                continue _fun29150
            }
        case 91:
            var6 = var0;
            var10 = var6.code;
            var6 = 'ERR_PROTO_ACCESS';
            if (!(var6 === var10)) {
                _fun29150_ip = 291;
                continue _fun29150
            }
        case 112:
            var6 = var3;
            var3 = 'toString';
            var3 = var3 in var6;
            var4 = !var3;
            var10 = var9;
            var6 = var8;
            var11 = 0;
            var6 = var6[var11];
            var6 = var10.bind(var1)(var6);
            var3 = var6;
            if (!var6) {
                _fun29150_ip = 187;
                continue _fun29150
            }
        case 149:
            var10 = var9;
            var6 = var8;
            var6 = var6[var11];
            var11 = var10.bind(var1)(var6);
            var6 = global;
            var6 = var6.Object;
            var10 = var6.prototype;
            var6 = '__proto__';
            var3 = var11.bind(var1)(var10, var6);
        case 187:
            var7 = var3;
            var3 = var2;
            var2 = var4;
            if (!var4) {
                _fun29150_ip = 283;
                continue _fun29150
            }
        case 199:
            var11 = var7;
            var11 = !var11;
            var10 = !var11;
            if (var11) {
                _fun29150_ip = 230;
                continue _fun29150
            }
        case 211:
            var11 = var7;
            var11 = var11.set;
            var12 = 'function';
            var11 = typeof var11;
            var10 = var12 === var11;
        case 230:
            var6 = var10;
            if (!var10) {
                _fun29150_ip = 269;
                continue _fun29150
            }
        case 236:
            var10 = var8;
            var8 = 1;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var9 = var7.set;
            var7 = new Array(1);
            var7[0] = var9;
            var6 = var8.bind(var1)(var7);
        case 269:
            var4 = var6;
            if (var6) {
                _fun29150_ip = 280;
                continue _fun29150
            }
        case 275:
            var4 = function arg0, arg1() {
                _fun29151: for (var _fun29151_ip = 0;;) switch (_fun29151_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = arg1;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun29151_ip = 20;
                            continue _fun29151
                        }
                    case 12:
                        var1.__proto__ = var0;
                        return var0;
                    case 20:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = 'set Object.prototype.__proto__ called on null or undefined';
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 280:
            var2 = var4;
        case 283:
            var3.exports = var2;
            return var1;
        case 291:
            throw var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [519, 528, 518]);