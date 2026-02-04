// ../discord_common/js/packages/http-utils/convertSkemaError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = '../discord_common/js/packages/http-utils/convertSkemaError.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun6796: for (var _fun6796_ip = 0;;) switch (_fun6796_ip) {
            case 0:
                var11 = arg0;
                var0 = {};
                var9 = var11;
                var4 = global;
                var3 = 0;
                var2 = null;
                var1 = '_errors';
                var5 = undefined;
                for (var6 in var9)
                    case 33: {
                        case 45: var15 = var6;
                        var17 = var11[var15];
                        if (var2 == var17) {
                            _fun6796_ip = 33;
                            continue _fun6796
                        }
                        case 56: if (!(var15 === var1)) {
                            _fun6796_ip = 85;
                            continue _fun6796
                        }
                        case 60: var16 = var11[var15];
                        var14 = var16.map;
                        var13 = function(arg0) { // Environment: var12
                            var0 = arg0;
                            var0 = var0.message;
                            return var0;
                        };
                        var13 = var14.bind(var16)(var13);
                        var0._misc = var13;
                        case 85: var14 = var4.Array;
                        var13 = var14.isArray;
                        var13 = var13.bind(var14)(var17);
                        if (var13) {
                            _fun6796_ip = 33;
                            continue _fun6796
                        }
                        case 104: var13 = var17._errors;
                        if (!(var2 == var13)) {
                            _fun6796_ip = 144;
                            continue _fun6796
                        }
                        case 114: var16 = var4.Object;
                        var14 = var16.keys;
                        var14 = var14.bind(var16)(var17);
                        var16 = var14[var3];
                        var14 = new Array(1);
                        var14[0] = var16;
                        _fun6796_ip = 159;
                        continue _fun6796;
                        case 144: var17 = var13.map;
                        var16 = function(arg0) { // Environment: var12
                            var0 = arg0;
                            var0 = var0.message;
                            return var0;
                        };
                        var14 = var17.bind(var13)(var16);
                        case 159: var0[var15] = var14;
                        var5 = var13;
                        _fun6796_ip = 33;
                        continue _fun6796;
                    }
            case 171:
                return var0;
        }
    };
    var2.convertSkemaError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);