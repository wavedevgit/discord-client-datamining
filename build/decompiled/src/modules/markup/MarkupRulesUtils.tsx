// modules/markup/MarkupRulesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/MarkupRulesUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2() {
        _fun62459: for (var _fun62459_ip = 0;;) switch (_fun62459_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.content;
                var2 = 'string';
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun62459_ip = 49;
                    continue _fun62459
                }
            case 19:
                var0 = var1.content;
                var4 = undefined;
                if (!(var4 !== var0)) {
                    _fun62459_ip = 49;
                    continue _fun62459
                }
            case 30:
                var3 = var1.content;
                var2 = arg1;
                var0 = arg2;
                var0 = var2.bind(var4)(var3, var0);
                _fun62459_ip = 54;
                continue _fun62459;
            case 49:
                var0 = var1.content;
            case 54:
                return var0;
        }
    };
    var2.smartOutput = var3;
    var1 = function arg0() {
        _fun62460: for (var _fun62460_ip = 0;;) switch (_fun62460_ip) {
            case 0:
                var2 = arg0;
                var0 = 'home';
                var0 = var0 === var2;
                if (var0) {
                    _fun62460_ip = 24;
                    continue _fun62460
                }
            case 14:
                var1 = 'browse';
                var0 = var1 === var2;
            case 24:
                if (var0) {
                    _fun62460_ip = 37;
                    continue _fun62460
                }
            case 27:
                var1 = 'customize';
                var0 = var1 === var2;
            case 37:
                if (var0) {
                    _fun62460_ip = 50;
                    continue _fun62460
                }
            case 40:
                var1 = 'guide';
                var0 = var1 === var2;
            case 50:
                if (var0) {
                    _fun62460_ip = 63;
                    continue _fun62460
                }
            case 53:
                var1 = 'linked-roles';
                var0 = var1 === var2;
            case 63:
                return var0;
        }
    };
    var2.isStaticRouteIconType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);