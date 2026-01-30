// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var0 = 0;
    var4 = var7[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot2 = var1;
    var1 = false;
    var _closure1_slot3 = var1;
    var1 = null;
    var _closure1_slot4 = var1;
    var5 = 1;
    var1 = var7[var5];
    var1 = var6.bind(var0)(var1);
    var9 = var1.KeyboardEvents;
    var8 = var9.addListener;
    var4 = 'keyboardDidHide';
    var1 = function(arg0) { // Environment: var3
        var0 = true;
        _closure1_slot3 = var0;
        var0 = arg0;
        _closure1_slot4 = var0;
        var0 = undefined;
        return var0;
    };
    var1 = var8.bind(var9)(var4, var1);
    var1 = var7[var5];
    var1 = var6.bind(var0)(var1);
    var9 = var1.KeyboardEvents;
    var8 = var9.addListener;
    var4 = 'keyboardDidShow';
    var1 = function(arg0) { // Environment: var3
        var0 = false;
        _closure1_slot3 = var0;
        var0 = arg0;
        _closure1_slot4 = var0;
        var0 = undefined;
        return var0;
    };
    var1 = var8.bind(var9)(var4, var1);
    var1 = function() { // Environment: var3
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun68289: for (var _fun68289_ip = 0;;) switch (_fun68289_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun68289_ip = 87;
                            continue _fun68289
                        }
                    case 12:
                        var3 = undefined;
                        var _closure4_slot0 = var3;
                        var2 = null;
                        var5 = var2 == var4;
                        if (var5) {
                            _fun68289_ip = 35;
                            continue _fun68289
                        }
                    case 27:
                        var3 = var4.keepFocus;
                    case 35:
                        var2 = var2 != var3;
                        if (!var2) {
                            _fun68289_ip = 45;
                            continue _fun68289
                        }
                    case 42:
                        var2 = var3;
                    case 45:
                        _closure4_slot0 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var6 = function(arg0) { // Environment: var1
                            _fun68290: for (var _fun68290_ip = 0;;) switch (_fun68290_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var2 = _closure1_slot3;
                                    if (var2) {
                                        _fun68290_ip = 111;
                                        continue _fun68290
                                    }
                                case 19:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var0 = 1;
                                    var5 = var4[var0];
                                    var2 = undefined;
                                    var5 = var3.bind(var2)(var5);
                                    var9 = var5.KeyboardEvents;
                                    var8 = var9.addListener;
                                    var7 = 'keyboardDidHide';
                                    var5 = function() { // Environment: var6
                                        var2 = _closure5_slot0;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var0);
                                        var2 = _closure5_slot1;
                                        var1 = var2.remove;
                                        var1 = var1.bind(var2)();
                                        return var0;
                                    };
                                    var5 = var8.bind(var9)(var7, var5);
                                    var _closure5_slot1 = var5;
                                    var0 = var4[var0];
                                    var0 = var3.bind(var2)(var0);
                                    var3 = var0.KeyboardControllerNative;
                                    var2 = var3.dismiss;
                                    var0 = _closure4_slot0;
                                    var0 = var2.bind(var3)(var0);
                                    _fun68290_ip = 117;
                                    continue _fun68290;
                                case 111:
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 117:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7 = var2;
                        var1 = new var7[var3](var6, var5);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    case 87:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Original name: dismiss, environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var1.bind(var0)();
    var1 = {};
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.KeyboardControllerNative;
    var8 = var8.setDefaultMode;
    var1.setDefaultMode = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.KeyboardControllerNative;
    var8 = var8.setInputMode;
    var1.setInputMode = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.KeyboardControllerNative;
    var5 = var5.setFocusTo;
    var1.setFocusTo = var5;
    var1.dismiss = var4;
    var4 = function() { // Original name: isVisible, environment: var3
        var0 = _closure1_slot3;
        var0 = !var0;
        return var0;
    };
    var1.isVisible = var4;
    var3 = function() { // Original name: state, environment: var3
        var0 = _closure1_slot4;
        return var0;
    };
    var1.state = var3;
    var2.KeyboardController = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 8477]);