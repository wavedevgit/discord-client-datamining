// modules/a11y/native/setAccessibilityFocus.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var7 = var3.AccessibilityInfo;
    var _closure1_slot3 = var7;
    var3 = var3.findNodeHandle;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'setAccessibilityFocus';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/a11y/native/setAccessibilityFocus.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun44535: for (var _fun44535_ip = 0;;) switch (_fun44535_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.ref;
                var3 = var0.delay;
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun44535_ip = 24;
                    continue _fun44535
                }
            case 22:
                var3 = 0;
            case 24:
                var _closure2_slot0 = var0;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun44535_ip = 78;
                    continue _fun44535
                }
            case 34:
                var5 = _closure1_slot4;
                var2 = var2.current;
                var2 = var5.bind(var0)(var2);
                _closure2_slot0 = var2;
                if (!(var4 != var2)) {
                    _fun44535_ip = 78;
                    continue _fun44535
                }
            case 59:
                var2 = global;
                var2 = var2.setTimeout;
                var1 = function() { // Environment: var1
                    _fun44536: for (var _fun44536_ip = 0;;) switch (_fun44536_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.isFabric;
                            var3 = var1.bind(var3)();
                            if (var3) {
                                _fun44536_ip = 96;
                                continue _fun44536
                            }
                        case 41:
                            var5 = _closure2_slot0;
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 2;
                            var3 = var6[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.setAccessibilityFocus;
                            var5 = var3.bind(var4)(var5);
                            var4 = var5.catch;
                            var3 = function(arg0) { // Environment: var3
                                var3 = _closure1_slot5;
                                var2 = var3.warn;
                                var1 = 'Failed with reason:';
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            _fun44536_ip = 115;
                            continue _fun44536;
                        case 96:
                            var3 = _closure1_slot3;
                            var2 = var3.setAccessibilityFocus;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 115:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1, var3);
            case 78:
                return var0;
        }
    };
    var2.setAccessibilityFocus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3, 4069, 3912, 2]);