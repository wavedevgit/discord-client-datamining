// modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: getNavigatorCurrentRoute, environment: var1
        _fun61772: for (var _fun61772_ip = 0;;) switch (_fun61772_ip) {
            case 0:
                var3 = arguments[0];
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun61772_ip = 41;
                    continue _fun61772
                }
            case 9:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var2 = var2.bind(var1)(var0);
                var0 = var2.getRootNavigationRef;
                var3 = var0.bind(var2)();
            case 41:
                var2 = null;
                var0 = var2 == var3;
                var5 = undefined;
                if (var0) {
                    _fun61772_ip = 62;
                    continue _fun61772
                }
            case 52:
                var0 = var3.isReady;
                var5 = var0.bind(var3)();
            case 62:
                var4 = true;
                var0 = undefined;
                if (!(var4 === var5)) {
                    _fun61772_ip = 92;
                    continue _fun61772
                }
            case 70:
                var2 = var2 == var3;
                var1 = undefined;
                if (var2) {
                    _fun61772_ip = 89;
                    continue _fun61772
                }
            case 79:
                var2 = var3.getCurrentRoute;
                var1 = var2.bind(var3)();
            case 89:
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3879, 2]);