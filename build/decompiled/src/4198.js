// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var2 = function arg0, arg1() {
        _fun38338: for (var _fun38338_ip = 0;;) switch (_fun38338_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var3 = undefined;
                var2 = undefined;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 0;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var2 = var4;
                if (!(var3 !== var4)) {
                    _fun38338_ip = 144;
                    continue _fun38338
                }
            case 48:
                var4 = var1;
                if (!(var3 !== var4)) {
                    _fun38338_ip = 144;
                    continue _fun38338
                }
            case 55: // try_start_0
                var4 = var2;
                var7 = var1;
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var2;
                var1 = new var8[var4](var7, var6);
                var4 = var1 instanceof Object ? var1 : var2;
                var2 = var4.decode;
                var6 = var0;
                var1 = global;
                var5 = var1.DataView;
                var5 = var6 instanceof var5;
                if (var5) {
                    _fun38338_ip = 126;
                    continue _fun38338
                }
            case 105:
                var6 = var1.Uint8Array;
                var5 = var6.from;
                var1 = var0;
                var1 = var5.bind(var6)(var1);
                _fun38338_ip = 135;
                continue _fun38338;
            case 126:
                var5 = var0;
                var1 = var5.buffer;
            case 135:
                var1 = var2.bind(var4)(var1);
            case 140: // try_end0
                return var1;
            case 142: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 144:
                var2 = var0;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = global;
                    var2 = var0.String;
                    var1 = var2.fromCharCode;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.join;
                var0 = '';
                var0 = var1.bind(var2)(var0);
                var1 = var0;
            case 181: // try_start_1
                var0 = global;
                var2 = var0.decodeURIComponent;
                var4 = var0.escape;
                var0 = var1;
                var0 = var4.bind(var3)(var0);
                var0 = var2.bind(var3)(var0);
            case 208: // try_end1
                _fun38338_ip = 215;
                continue _fun38338;
            case 210: // catch_target1
                CatchBlockStart(arg_register = 2);
                var0 = var1;
            case 215:
                return var0;
        }
    };
    var0.decode = var2;
    var2 = 5;
    var0.TAG_HEADER_SIZE = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4199]);