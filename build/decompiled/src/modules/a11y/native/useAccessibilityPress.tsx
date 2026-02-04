// modules/a11y/native/useAccessibilityPress.tsx
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
    var3 = 'modules/a11y/native/useAccessibilityPress.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var1 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useRef;
        var2 = var2.bind(var3)(var1);
        var _closure2_slot2 = var2;
        var5 = var3.useEffect;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot2;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var5.bind(var3)(var1, var2);
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var1 = function arg0() {
                _fun65853: for (var _fun65853_ip = 0;;) switch (_fun65853_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var1 = var0.actionName;
                        var0 = 'activate';
                        if (!(var0 === var1)) {
                            _fun65853_ip = 39;
                            continue _fun65853
                        }
                    case 23:
                        var1 = _closure2_slot2;
                        var0 = var1.current;
                        var0 = var0.bind(var1)();
                    case 39:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onAccessibilityAction = var1;
            var2 = {};
            var1 = 'activate';
            var2.name = var1;
            var1 = _closure2_slot1;
            var2.label = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var0.accessibilityActions = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);