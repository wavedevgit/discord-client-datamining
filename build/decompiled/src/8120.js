// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var4 = var3.NativeModules;
    var _closure1_slot3 = var4;
    var4 = var3.Platform;
    var4 = var3.TurboModuleRegistry;
    var _closure1_slot4 = var4;
    var3 = var3.requireNativeComponent;
    var _closure1_slot5 = var3;
    var3 = function() {
        _fun65572: for (var _fun65572_ip = 0;;) switch (_fun65572_ip) {
            case 0: // try_start_0
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = 'RNDatePicker';
                var0 = var2.bind(var1)(var0);
            case 20: // try_end0
                return var0;
            case 22: // catch_target0
                CatchBlockStart(arg_register = 0);
                var1 = _closure1_slot0;
                var1 = var1.ignoreDatePickerWarning;
                if (var1) {
                    _fun65572_ip = 87;
                    continue _fun65572
                }
            case 40:
                var1 = global;
                var2 = var1.Error;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 1;
                var0 = var1[var0];
                var1 = undefined;
                var3 = var3.bind(var1)(var0);
                var0 = var3.getInstallationErrorMessage;
                var0 = var0.bind(var3)();
                var0 = var2.bind(var1)(var0);
                throw var0;
            case 87:
                var0 = null;
                return var0;
        }
    };
    var2.getNativeComponent = var3;
    var1 = function() {
        _fun65573: for (var _fun65573_ip = 0;;) switch (_fun65573_ip) {
            case 0: // try_start_0
                var0 = _closure1_slot4;
                if (var0) {
                    _fun65573_ip = 24;
                    continue _fun65573
                }
            case 10:
                var0 = _closure1_slot3;
                var0 = var0.RNDatePicker;
                _fun65573_ip = 44;
                continue _fun65573;
            case 24:
                var3 = _closure1_slot4;
                var2 = var3.get;
                var1 = 'RNDatePicker';
                var0 = var2.bind(var3)(var1);
            case 44: // try_end0
                return var0;
            case 46: // catch_target0
                CatchBlockStart(arg_register = 0);
                var1 = _closure1_slot0;
                var1 = var1.ignoreDatePickerWarning;
                if (var1) {
                    _fun65573_ip = 111;
                    continue _fun65573
                }
            case 64:
                var1 = global;
                var2 = var1.Error;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 1;
                var0 = var1[var0];
                var1 = undefined;
                var3 = var3.bind(var1)(var0);
                var0 = var3.getInstallationErrorMessage;
                var0 = var0.bind(var3)();
                var0 = var2.bind(var1)(var0);
                throw var0;
            case 111:
                var0 = null;
                return var0;
        }
    };
    var2.getNativeModule = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 8121]);