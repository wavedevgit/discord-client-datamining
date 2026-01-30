// modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot0 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot1 = var3;
    var6 = var7.createContext;
    var3 = null;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: AwaitAnimationContext, environment: var1
        var1 = arg0;
        var0 = var1.children;
        var6 = var1.handleQueuedCallback;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() { // Environment: var2
            var0 = {};
            var1 = _closure2_slot0;
            var0.handleQueuedCallback = var1;
            return var0;
        };
        var4 = var4.bind(var5)(var2, var3);
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var2 = var1.Provider;
        var1 = {};
        var1.value = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.AwaitAnimationContext = var3;
    var1 = function() { // Original name: useAwaitAnimationCompletion, environment: var1
        _fun108724: for (var _fun108724_ip = 0;;) switch (_fun108724_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.useContext;
                var0 = _closure1_slot2;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun108724_ip = 36;
                    continue _fun108724
                }
            case 28:
                var0 = var0.handleQueuedCallback;
                _fun108724_ip = 45;
                continue _fun108724;
            case 36:
                var0 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
            case 45:
                return var0;
        }
    };
    var2.useAwaitAnimationCompletion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 2]);