// components_native/common/MessageLoadingSpinner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun64747: for (var _fun64747_ip = 0;;) switch (_fun64747_ip) {
        case 0:
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
            var3 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.requireNativeComponent;
            var3 = var3.ActivityIndicator;
            var _closure1_slot0 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot1 = var3;
            var3 = 3;
            var3 = var5[var3];
            var6 = var4.bind(var0)(var3);
            var3 = var6.isAndroid;
            var6 = var3.bind(var6)();
            var3 = null;
            if (var6) {
                _fun64747_ip = 146;
                continue _fun64747
            }
        case 135:
            var6 = 'DCDMessageLoadingSpinner';
            var3 = var7.bind(var0)(var6);
        case 146:
            var _closure1_slot2 = var3;
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'components_native/common/MessageLoadingSpinner.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun64748: for (var _fun64748_ip = 0;;) switch (_fun64748_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot2;
                        var0 = null;
                        if (!(var0 == var3)) {
                            _fun64748_ip = 65;
                            continue _fun64748
                        }
                    case 16:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot0;
                        var3 = {};
                        var0 = var1.animate;
                        var3.animating = var0;
                        var0 = 'large';
                        var3.size = var0;
                        var7 = var3;
                        var6 = var1;
                        var0 = copyDataProperties(var7, var6);
                        var0 = undefined;
                        var0 = var5.bind(var0)(var4, var3);
                        _fun64748_ip = 93;
                        continue _fun64748;
                    case 65:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = {};
                        var7 = var2;
                        var6 = var1;
                        var1 = copyDataProperties(var7, var6);
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2);
                    case 93:
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 2]);