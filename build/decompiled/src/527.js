// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6616: for (var _fun6616_ip = 0;;) switch (_fun6616_ip) {
        case 0:
            var6 = require;
            var3 = module;
            var5 = dependencyMap;
            var1 = undefined;
            var10 = undefined;
            var4 = undefined;
            var8 = undefined;
        case 19: // try_start_0
            var2 = new Array(0);
            var9 = var2.__proto__;
            var2 = global;
            var2 = var2.Array;
            var2 = var2.prototype;
            var10 = var9 === var2;
        case 46: // try_end0
            _fun6616_ip = 114;
            continue _fun6616;
        case 48: // catch_target0
            CatchBlockStart(arg_register = 2);
            var0 = var2;
            if (!var2) {
                _fun6616_ip = 301;
                continue _fun6616
            }
        case 59:
            var2 = var0;
            var9 = 'object';
            var2 = typeof var2;
            if (!(var9 === var2)) {
                _fun6616_ip = 301;
                continue _fun6616
            }
        case 76:
            var9 = var0;
            var2 = 'code';
            var2 = var2 in var9;
            if (!var2) {
                _fun6616_ip = 301;
                continue _fun6616
            }
        case 93:
            var2 = var0;
            var9 = var2.code;
            var2 = 'ERR_PROTO_ACCESS';
            if (!(var2 === var9)) {
                _fun6616_ip = 301;
                continue _fun6616
            }
        case 114:
            var11 = !var10;
            var9 = !var11;
            if (!var10) {
                _fun6616_ip = 140;
                continue _fun6616
            }
        case 123:
            var11 = var6;
            var12 = var5;
            var10 = 0;
            var10 = var12[var10];
            var9 = var11.bind(var1)(var10);
        case 140:
            var2 = var9;
            if (!var9) {
                _fun6616_ip = 186;
                continue _fun6616
            }
        case 146:
            var10 = var6;
            var11 = var5;
            var9 = 0;
            var9 = var11[var9];
            var11 = var10.bind(var1)(var9);
            var9 = global;
            var9 = var9.Object;
            var10 = var9.prototype;
            var9 = '__proto__';
            var2 = var11.bind(var1)(var10, var9);
        case 186:
            var4 = var2;
            var9 = global;
            var9 = var9.Object;
            var _closure1_slot0 = var9;
            var9 = var9.getPrototypeOf;
            var8 = var9;
            var _closure1_slot1 = var9;
            if (!var2) {
                _fun6616_ip = 236;
                continue _fun6616
            }
        case 217:
            var2 = var4;
            var2 = var2.get;
            var9 = 'function';
            var2 = typeof var2;
            if (!(var9 !== var2)) {
                _fun6616_ip = 260;
                continue _fun6616
            }
        case 236:
            var9 = 'function';
            var8 = typeof var8;
            var8 = var9 === var8;
            var2 = var8;
            if (!var8) {
                _fun6616_ip = 258;
                continue _fun6616
            }
        case 253:
            var2 = function arg0() {
                _fun6617: for (var _fun6617_ip = 0;;) switch (_fun6617_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot1;
                        var3 = null;
                        var1 = var4;
                        if (!(var3 != var1)) {
                            _fun6617_ip = 30;
                            continue _fun6617
                        }
                    case 19:
                        var3 = _closure1_slot0;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var4);
                    case 30:
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                }
            };
        case 258:
            _fun6616_ip = 293;
            continue _fun6616;
        case 260:
            var7 = var5;
            var5 = 1;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var6 = var4.get;
            var4 = new Array(1);
            var4[0] = var6;
            var2 = var5.bind(var1)(var4);
        case 293:
            var3.exports = var2;
            return var1;
        case 301:
            throw var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [519, 528]);