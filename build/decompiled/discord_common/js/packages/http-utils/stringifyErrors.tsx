// ../discord_common/js/packages/http-utils/stringifyErrors.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = function arg0() {
        _fun6800: for (var _fun6800_ip = 0;;) switch (_fun6800_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var5 = null;
                var1 = var5 == var3;
                var2 = '';
                var0 = var2;
                if (var1) {
                    _fun6800_ip = 194;
                    continue _fun6800
                }
            case 28:
                var7 = typeof var3;
                var6 = 'string';
                var1 = var3;
                if (!(var6 !== var7)) {
                    _fun6800_ip = 191;
                    continue _fun6800
                }
            case 45:
                if (!(var5 != var3)) {
                    _fun6800_ip = 60;
                    continue _fun6800
                }
            case 49:
                var5 = var3.message;
                if (var5) {
                    _fun6800_ip = 183;
                    continue _fun6800
                }
            case 60:
                var5 = global;
                var8 = var5.Array;
                var6 = var8.isArray;
                var6 = var6.bind(var8)(var3);
                if (var6) {
                    _fun6800_ip = 144;
                    continue _fun6800
                }
            case 81:
                var6 = 'object';
                if (!(var6 === var7)) {
                    _fun6800_ip = 142;
                    continue _fun6800
                }
            case 89:
                var6 = var5.Object;
                var5 = var6.keys;
                var8 = var5.bind(var6)(var3);
                var7 = var8.reduce;
                var6 = function(arg0, arg1) { // Environment: var4
                    _fun6802: for (var _fun6802_ip = 0;;) switch (_fun6802_ip) {
                        case 0:
                            var3 = arg0;
                            var8 = arg1;
                            var2 = _closure1_slot0;
                            var0 = _closure2_slot0;
                            var1 = var0[var8];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var1);
                            var0 = var3;
                            if (!var7) {
                                _fun6802_ip = 84;
                                continue _fun6802
                            }
                        case 37:
                            var2 = var3.concat;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var13 = '';
                            var11 = ' (';
                            var9 = ')';
                            var12 = var7;
                            var10 = var8;
                            var1 = var13[var6](var12, var11, var10, var9, var8);
                            var0 = var2.bind(var3)(var1);
                        case 84:
                            return var0;
                    }
                };
                var5 = new Array(0);
                var7 = var7.bind(var8)(var6, var5);
                var6 = var7.join;
                var5 = ', ';
                var2 = var6.bind(var7)(var5);
            case 142:
                _fun6800_ip = 181;
                continue _fun6800;
            case 144:
                var6 = var3.reduce;
                var5 = function(arg0, arg1) { // Environment: var4
                    var2 = arg0;
                    var1 = var2.concat;
                    var4 = _closure1_slot0;
                    var3 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = new Array(0);
                var6 = var6.bind(var3)(var5, var4);
                var5 = var6.join;
                var4 = ', ';
                var2 = var5.bind(var6)(var4);
            case 181:
                _fun6800_ip = 188;
                continue _fun6800;
            case 183:
                var2 = var3.message;
            case 188:
                var1 = var2;
            case 191:
                var0 = var1;
            case 194:
                return var0;
        }
    };
    var _closure1_slot0 = var1;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/http-utils/stringifyErrors.tsx';
    var3 = var4.bind(var5)(var3);
    var2.stringifyErrors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);