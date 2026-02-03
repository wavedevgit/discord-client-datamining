// utils/web/WindowInteractingUtils.tsx
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
    var0 = null;
    var _closure1_slot0 = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/web/WindowInteractingUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'contextmenu'];
    var2.INTERACTION_EVENTS = var3;
    var3 = function() {
        var0 = _closure1_slot0;
        return var0;
    };
    var2.getCurrentlyInteractingWindowId = var3;
    var3 = function arg0() {
        var0 = arg0;
        _closure1_slot0 = var0;
        var0 = undefined;
        return var0;
    };
    var2.setCurrentlyInteractingWindowId = var3;
    var1 = function arg0() {
        _fun60082: for (var _fun60082_ip = 0;;) switch (_fun60082_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = arg0;
                if (!(var2 === var0)) {
                    _fun60082_ip = 20;
                    continue _fun60082
                }
            case 14:
                var0 = null;
                _closure1_slot0 = var0;
            case 20:
                var0 = undefined;
                return var0;
        }
    };
    var2.clearCurrentlyInteractingWindowId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);