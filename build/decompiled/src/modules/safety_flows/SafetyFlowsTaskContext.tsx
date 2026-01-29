// modules/safety_flows/SafetyFlowsTaskContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var4 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var4);
    var _closure1_slot0 = var6;
    var4 = var6.createContext;
    var3 = null;
    var3 = var4.bind(var6)(var3);
    var _closure1_slot1 = var3;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/SafetyFlowsTaskContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SafetyFlowTaskContext = var3;
    var1 = function() { // Original name: useSafetyFlowTask, environment: var1
        _fun118154: for (var _fun118154_ip = 0;;) switch (_fun118154_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.useContext;
                var0 = _closure1_slot1;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun118154_ip = 30;
                    continue _fun118154
                }
            case 28:
                return var0;
            case 30:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.useSafetyFlowTask = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);