// design/components/Button/native/useToggleButtonProps.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Button/native/useToggleButtonProps.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun87675: for (var _fun87675_ip = 0;;) switch (_fun87675_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = {};
                if (var1) {
                    _fun87675_ip = 19;
                    continue _fun87675
                }
            case 11:
                var2 = var3.off;
                _fun87675_ip = 25;
                continue _fun87675;
            case 19:
                var2 = var3.on;
            case 25:
                var6 = var0;
                var5 = var2;
                var2 = copyDataProperties(var6, var5);
                var3 = 'togglebutton';
                var2 = 'accessibilityRole';
                var0[var2] = var3;
                var2 = {};
                var2.checked = var1;
                var1 = 'accessibilityState';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.useToggleButtonProps = var3;
    var1 = function arg0, arg1() {
        _fun87676: for (var _fun87676_ip = 0;;) switch (_fun87676_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = {};
                if (var1) {
                    _fun87676_ip = 19;
                    continue _fun87676
                }
            case 11:
                var2 = var3.off;
                _fun87676_ip = 25;
                continue _fun87676;
            case 19:
                var2 = var3.on;
            case 25:
                var6 = var0;
                var5 = var2;
                var2 = copyDataProperties(var6, var5);
                var3 = 'togglebutton';
                var2 = 'accessibilityRole';
                var0[var2] = var3;
                var2 = {};
                var2.checked = var1;
                var1 = 'accessibilityState';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.useToggleIconButtonProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);