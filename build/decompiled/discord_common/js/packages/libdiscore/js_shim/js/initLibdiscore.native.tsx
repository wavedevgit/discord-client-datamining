// ../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot0;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun37683: for (var _fun37683_ip = 0;;) switch (_fun37683_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37683_ip = 12;
                            continue _fun37683
                        }
                    case 7:
                        var1 = undefined;
                        return var1;
                    case 12:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot2 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot1 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var3 = var6.registerTimerPolyfills;
    var3 = var3.bind(var6)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = _closure1_slot1;
        var1 = var0.LibDiscoreModule;
        var0 = undefined;
        var0 = var0 !== var1;
        return var0;
    };
    var2.isLibdiscoreInitialized = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.initLibdiscore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 4118, 2]);