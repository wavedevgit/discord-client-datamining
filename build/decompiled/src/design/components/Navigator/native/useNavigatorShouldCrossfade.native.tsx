// design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun50997: for (var _fun50997_ip = 0;;) switch (_fun50997_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.useContext;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var0 = var0.AccessibilityPreferencesContext;
                var0 = var1.bind(var2)(var0);
                var1 = var0.reducedMotion;
                var1 = var1.enabled;
                var0 = var0.prefersCrossfades;
                var2 = 1;
                var2 = var5[var2];
                var3 = var4.bind(var3)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun50997_ip = 91;
                    continue _fun50997
                }
            case 88:
                var0 = var1;
            case 91:
                return var0;
        }
    };
    var2.useNavigatorShouldCrossfade = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 478, 3124, 2]);