// modules/screen/useWindowDimensions.native.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = {};
    var5 = false;
    var3.ignoreKeyboard = var5;
    var _closure1_slot1 = var3;
    var3 = function(arg0) { // Original name: WINDOW_DIMENSIONS_GETTER, environment: var1
        var0 = arg0;
        var0 = var0.windowDimensions;
        return var0;
    };
    var _closure1_slot2 = var3;
    var3 = function(arg0) { // Original name: WINDOW_DIMENSIONS_GETTER_IGNORING_KEYBOARD, environment: var1
        var0 = arg0;
        var0 = var0.windowDimensionsIgnoringKeyboard;
        return var0;
    };
    var _closure1_slot3 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/screen/useWindowDimensions.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useWindowDimensions, environment: var1
        _fun16918: for (var _fun16918_ip = 0;;) switch (_fun16918_ip) {
            case 0:
                var0 = arguments[0];
                var2 = undefined;
                if (!(var0 === var2)) {
                    _fun16918_ip = 16;
                    continue _fun16918
                }
            case 9:
                var0 = _closure1_slot1;
            case 16:
                var0 = var0.ignoreKeyboard;
                if (!(var0 === var2)) {
                    _fun16918_ip = 28;
                    continue _fun16918
                }
            case 26:
                var0 = false;
            case 28:
                var1 = _closure1_slot0;
                if (var0) {
                    _fun16918_ip = 44;
                    continue _fun16918
                }
            case 38:
                var0 = _closure1_slot2;
                _fun16918_ip = 48;
                continue _fun16918;
            case 44:
                var0 = _closure1_slot3;
            case 48:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function() { // Original name: getWindowDimensions, environment: var1
        _fun16919: for (var _fun16919_ip = 0;;) switch (_fun16919_ip) {
            case 0:
                var0 = arguments[0];
                var1 = undefined;
                if (!(var0 === var1)) {
                    _fun16919_ip = 16;
                    continue _fun16919
                }
            case 9:
                var0 = _closure1_slot1;
            case 16:
                var0 = var0.ignoreKeyboard;
                if (!(var0 === var1)) {
                    _fun16919_ip = 28;
                    continue _fun16919
                }
            case 26:
                var0 = false;
            case 28:
                var2 = _closure1_slot0;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                if (var0) {
                    _fun16919_ip = 56;
                    continue _fun16919
                }
            case 48:
                var0 = var1.windowDimensions;
                _fun16919_ip = 62;
                continue _fun16919;
            case 56:
                var0 = var1.windowDimensionsIgnoringKeyboard;
            case 62:
                return var0;
        }
    };
    var2.getWindowDimensions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1465, 2]);