// design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx
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
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useAccessibilityViewIsModalToggle, environment: var1
        _fun37241: for (var _fun37241_ip = 0;;) switch (_fun37241_ip) {
            case 0:
                var2 = arg0;
                var6 = var2.accessibilityViewIsModal;
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun37241_ip = 19;
                    continue _fun37241
                }
            case 17:
                var6 = false;
            case 19:
                var _closure2_slot0 = var6;
                var2 = var2.nativeID;
                var _closure2_slot1 = var2;
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var0;
                var4 = _closure1_slot2;
                var3 = var4.useRef;
                var3 = var3.bind(var4)(var0);
                _closure2_slot2 = var3;
                var5 = var4.useCallback;
                var3 = new Array(2);
                var3[0] = var6;
                var3[1] = var2;
                var2 = function() { // Environment: var1
                    _fun37242: for (var _fun37242_ip = 0;;) switch (_fun37242_ip) {
                        case 0:
                            var1 = arguments[0];
                            var0 = undefined;
                            if (!(var1 === var0)) {
                                _fun37242_ip = 16;
                                continue _fun37242
                            }
                        case 9:
                            var1 = _closure2_slot0;
                        case 16:
                            if (var1) {
                                _fun37242_ip = 96;
                                continue _fun37242
                            }
                        case 22:
                            var1 = _closure2_slot2;
                            var5 = var1.current;
                            var1 = null;
                            if (!(var1 != var5)) {
                                _fun37242_ip = 181;
                                continue _fun37242
                            }
                        case 40:
                            var1 = _closure2_slot2;
                            var1.current = var0;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 1;
                            var1 = var4[var1];
                            var4 = var3.bind(var0)(var1);
                            var3 = var4.disableAccessibilityFocusLock;
                            var1 = new Array(1);
                            var1[0] = var5;
                            var1 = var3.bind(var4)(var1);
                            _fun37242_ip = 181;
                            continue _fun37242;
                        case 96:
                            var3 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun37242_ip = 183;
                                continue _fun37242
                            }
                        case 106:
                            var1 = _closure2_slot2;
                            var3 = var1.current;
                            var1 = _closure2_slot1;
                            if (!(var3 !== var1)) {
                                _fun37242_ip = 181;
                                continue _fun37242
                            }
                        case 123:
                            var1 = _closure2_slot2;
                            var4 = _closure2_slot1;
                            var1.current = var4;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 1;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.enableAccessibilityFocusLock;
                            var1 = new Array(1);
                            var1[0] = var4;
                            var1 = var2.bind(var3)(var1);
                        case 181:
                            return var0;
                        case 183:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = 'Must have a unique nativeID when accessibilityViewIsModal is enabled.';
                            var7 = var1;
                            var0 = new var7[var2](var6, var5);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var5 = var5.bind(var4)(var2, var3);
                _closure2_slot3 = var5;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot3;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4021, 2]);