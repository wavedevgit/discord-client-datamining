// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5.value = var1;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var8 = var7[var0];
    var5 = metroImportDefault;
    var0 = undefined;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot2 = var5;
    var _closure1_slot3 = var1;
    var1 = {
        'height': 0,
        'duration': 0,
        'timestamp': null,
        'target': 4294967295,
        'type': 'default',
        'appearance': 'light'
    };
    var4 = var4.Date;
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var13 = var5;
    var4 = new var13[var4](var12);
    var5 = var4 instanceof Object ? var4 : var5;
    var4 = var5.getTime;
    var4 = var4.bind(var5)();
    var1.timestamp = var4;
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
                _fun68525: for (var _fun68525_ip = 0;;) switch (_fun68525_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun68525_ip = 122;
                            continue _fun68525
                        }
                    case 12:
                        var3 = undefined;
                        var _closure4_slot0 = var3;
                        var _closure4_slot1 = var3;
                        var2 = null;
                        var5 = var2 == var4;
                        var6 = undefined;
                        if (var5) {
                            _fun68525_ip = 41;
                            continue _fun68525
                        }
                    case 33:
                        var6 = var4.keepFocus;
                    case 41:
                        var5 = var2 != var6;
                        if (!var5) {
                            _fun68525_ip = 51;
                            continue _fun68525
                        }
                    case 48:
                        var5 = var6;
                    case 51:
                        _closure4_slot0 = var5;
                        var5 = var2 == var4;
                        var3 = undefined;
                        if (var5) {
                            _fun68525_ip = 70;
                            continue _fun68525
                        }
                    case 64:
                        var3 = var4.animated;
                    case 70:
                        var2 = var2 == var3;
                        if (var2) {
                            _fun68525_ip = 80;
                            continue _fun68525
                        }
                    case 77:
                        var2 = var3;
                    case 80:
                        _closure4_slot1 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var8 = function(arg0) { // Environment: var1
                            _fun68526: for (var _fun68526_ip = 0;;) switch (_fun68526_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var2 = _closure1_slot3;
                                    if (var2) {
                                        _fun68526_ip = 116;
                                        continue _fun68526
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
                                    var4 = var0.KeyboardControllerNative;
                                    var3 = var4.dismiss;
                                    var2 = _closure4_slot0;
                                    var0 = _closure4_slot1;
                                    var0 = var3.bind(var4)(var2, var0);
                                    _fun68526_ip = 122;
                                    continue _fun68526;
                                case 116:
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 122:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var9 = var2;
                        var1 = new var9[var3](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    case 122:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function arg0() {
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
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.KeyboardControllerNative;
    var8 = var8.setFocusTo;
    var1.setFocusTo = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.KeyboardControllerNative;
    var5 = var5.preload;
    var1.preload = var5;
    var1.dismiss = var4;
    var4 = function() {
        var0 = _closure1_slot3;
        var0 = !var0;
        return var0;
    };
    var1.isVisible = var4;
    var3 = function() {
        var0 = _closure1_slot4;
        return var0;
    };
    var1.state = var3;
    var2.KeyboardController = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 8544]);