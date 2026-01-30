// utils/PathUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function(arg0, arg1) { // Original name: pathBasename, environment: var1
        _fun30790: for (var _fun30790_ip = 0;;) switch (_fun30790_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var2 = var4.split;
                var0 = /[\/\\]/;
                var2 = var2.bind(var4)(var0);
                var0 = var2.length;
                var3 = 1;
                var0 = var0 - var3;
                var5 = var2[var0];
                var0 = '';
                if (!(var0 !== var5)) {
                    _fun30790_ip = 67;
                    continue _fun30790
                }
            case 54:
                var0 = var2.length;
                var0 = var0 - var3;
                var4 = var2[var0];
            case 67:
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun30790_ip = 87;
                    continue _fun30790
                }
            case 76:
                var0 = var4.endsWith;
                var2 = var0.bind(var4)(var1);
            case 87:
                var0 = var4;
                if (!var2) {
                    _fun30790_ip = 114;
                    continue _fun30790
                }
            case 93:
                var3 = var4.slice;
                var1 = var1.length;
                var2 = -var1;
                var1 = 0;
                var0 = var3.bind(var4)(var1, var2);
            case 114:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 1;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/PathUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: pathJoin, environment: var1
        _fun30791: for (var _fun30791_ip = 0;;) switch (_fun30791_ip) {
            case 0:
                var1 = 0;
                var4 = 0;
                var3 = copyRestArgs(var4);
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = var0[var1];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.isWindows;
                var0 = var0.bind(var1)();
                var2 = '/';
                if (!var0) {
                    _fun30791_ip = 51;
                    continue _fun30791
                }
            case 47:
                var2 = '\\';
            case 51:
                var1 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = var1.join;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.pathJoin = var4;
    var2.pathBasename = var3;
    var1 = function(arg0) { // Original name: pathFilenameWithoutExt, environment: var1
        _fun30793: for (var _fun30793_ip = 0;;) switch (_fun30793_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = undefined;
                var0 = arg0;
                var4 = var2.bind(var1)(var0);
                var1 = var4.lastIndexOf;
                var0 = '.';
                var3 = var1.bind(var4)(var0);
                var2 = 0;
                var0 = var4;
                if (!(!(var3 <= var2))) {
                    _fun30793_ip = 52;
                    continue _fun30793
                }
            case 41:
                var1 = var4.slice;
                var0 = var1.bind(var4)(var2, var3);
            case 52:
                return var0;
        }
    };
    var2.pathFilenameWithoutExt = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 2]);