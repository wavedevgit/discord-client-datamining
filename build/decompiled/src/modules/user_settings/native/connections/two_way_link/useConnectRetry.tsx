// modules/user_settings/native/connections/two_way_link/useConnectRetry.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/two_way_link/useConnectRetry.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useConnectRetry, environment: var1
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun50949: for (var _fun50949_ip = 0;;) switch (_fun50949_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = var2.getState;
                    var0 = var0.bind(var2)();
                    var0 = var0.routes;
                    var3 = var0.findIndex;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.name;
                        var0 = _closure2_slot1;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var3.bind(var0)(var2);
                    var2 = 0;
                    if (!(!(var3 >= var2))) {
                        _fun50949_ip = 63;
                        continue _fun50949
                    }
                case 47:
                    var4 = _closure2_slot0;
                    var2 = var4.popToTop;
                    var2 = var2.bind(var4)();
                    _fun50949_ip = 94;
                    continue _fun50949;
                case 63:
                    var2 = _closure2_slot0;
                    var1 = var2.pop;
                    var0 = var0.length;
                    var3 = var0 - var3;
                    var0 = 1;
                    var0 = var3 - var0;
                    var0 = var1.bind(var2)(var0);
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useConnectRetry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);