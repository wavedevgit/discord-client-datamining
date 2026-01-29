// design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
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
    var _closure1_slot2 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useAccessibilityNativeStackFocusTracking, environment: var1
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = function() { // Environment: var0
            var0 = false;
            var _closure3_slot0 = var0;
            var0 = {};
            var2 = function(arg0) { // Original name: transitionStart, environment: var1
                _fun93266: for (var _fun93266_ip = 0;;) switch (_fun93266_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.data;
                        var0 = var0.closing;
                        if (var0) {
                            _fun93266_ip = 64;
                            continue _fun93266
                        }
                    case 17:
                        var0 = _closure3_slot0;
                        if (!var0) {
                            _fun93266_ip = 93;
                            continue _fun93266
                        }
                    case 27:
                        var0 = false;
                        _closure3_slot0 = var0;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var0 = var1[var0];
                        var1 = undefined;
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                        _fun93266_ip = 93;
                        continue _fun93266;
                    case 64:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var0 = var1[var0];
                        var1 = undefined;
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                    case 93:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.transitionStart = var2;
            var1 = function() { // Original name: beforeRemove, environment: var1
                var0 = true;
                _closure3_slot0 = var0;
                var0 = undefined;
                return var0;
            };
            var0.beforeRemove = var1;
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useAccessibilityNativeStackFocusTracking = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 12184, 12185, 2]);