// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.assertHasStateResponsePlugin = var0;
    var2.default = var0;
    var2.hasStateResponsePlugin = var0;
    var3 = function() {
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = {};
            var1 = {};
            var3 = function arg0, arg1() {
                _fun97691: for (var _fun97691_ip = 0;;) switch (_fun97691_ip) {
                    case 0:
                        var4 = undefined;
                        var2 = undefined;
                        var0 = arguments.length;
                        var1 = 2;
                        var0 = var0 > var1;
                        if (!var0) {
                            _fun97691_ip = 25;
                            continue _fun97691
                        }
                    case 17:
                        var3 = arguments[var1];
                        var0 = var4 !== var3;
                    case 25:
                        if (!var0) {
                            _fun97691_ip = 32;
                            continue _fun97691
                        }
                    case 28:
                        var0 = arguments[var1];
                    case 32:
                        var4 = _closure3_slot0;
                        var3 = var4.send;
                        var2 = {};
                        var1 = arg0;
                        var2.name = var1;
                        var1 = arg1;
                        var2.action = var1;
                        var0 = !var0;
                        var1 = 'state.action.complete';
                        var0 = !var0;
                        var0 = var3.bind(var4)(var1, var2, var0);
                        return var0;
                }
            };
            var1.stateActionComplete = var3;
            var3 = function arg0, arg1() {
                _fun97692: for (var _fun97692_ip = 0;;) switch (_fun97692_ip) {
                    case 0:
                        var4 = undefined;
                        var2 = undefined;
                        var0 = arguments.length;
                        var1 = 2;
                        var3 = var0 > var1;
                        if (!var3) {
                            _fun97692_ip = 25;
                            continue _fun97692
                        }
                    case 17:
                        var0 = arguments[var1];
                        var3 = var4 !== var0;
                    case 25:
                        var0 = !var3;
                        if (!var3) {
                            _fun97692_ip = 35;
                            continue _fun97692
                        }
                    case 31:
                        var0 = arguments[var1];
                    case 35:
                        var3 = _closure3_slot0;
                        var2 = var3.send;
                        var1 = {};
                        var4 = arg0;
                        var1.path = var4;
                        var4 = arg1;
                        var1.value = var4;
                        var1.valid = var0;
                        var0 = 'state.values.response';
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var1.stateValuesResponse = var3;
            var3 = function arg0, arg1() {
                _fun97693: for (var _fun97693_ip = 0;;) switch (_fun97693_ip) {
                    case 0:
                        var4 = undefined;
                        var2 = undefined;
                        var0 = arguments.length;
                        var1 = 2;
                        var3 = var0 > var1;
                        if (!var3) {
                            _fun97693_ip = 25;
                            continue _fun97693
                        }
                    case 17:
                        var0 = arguments[var1];
                        var3 = var4 !== var0;
                    case 25:
                        var0 = !var3;
                        if (!var3) {
                            _fun97693_ip = 35;
                            continue _fun97693
                        }
                    case 31:
                        var0 = arguments[var1];
                    case 35:
                        var3 = _closure3_slot0;
                        var2 = var3.send;
                        var1 = {};
                        var4 = arg0;
                        var1.path = var4;
                        var4 = arg1;
                        var1.keys = var4;
                        var1.valid = var0;
                        var0 = 'state.keys.response';
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var1.stateKeysResponse = var3;
            var3 = function arg0() {
                _fun97694: for (var _fun97694_ip = 0;;) switch (_fun97694_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.length;
                        var0 = 0;
                        var0 = var2 > var0;
                        if (!var0) {
                            _fun97694_ip = 49;
                            continue _fun97694
                        }
                    case 17:
                        var4 = _closure3_slot0;
                        var3 = var4.send;
                        var2 = {};
                        var2.changes = var1;
                        var1 = 'state.values.change';
                        var0 = var3.bind(var4)(var1, var2);
                    case 49:
                        return var0;
                }
            };
            var1.stateValuesChange = var3;
            var2 = function arg0() {
                var3 = _closure3_slot0;
                var2 = var3.send;
                var1 = {};
                var0 = arg0;
                var1.state = var0;
                var0 = 'state.backup.response';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1.stateBackupResponse = var2;
            var0.features = var1;
            return var0;
        };
        return var0;
    };
    var2.default = var3;
    var3 = function arg0() {
        _fun97696: for (var _fun97696_ip = 0;;) switch (_fun97696_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                if (!var0) {
                    _fun97696_ip = 17;
                    continue _fun97696
                }
            case 9:
                var2 = 'stateActionComplete';
                var0 = var2 in var1;
            case 17:
                if (!var0) {
                    _fun97696_ip = 37;
                    continue _fun97696
                }
            case 20:
                var2 = var1.stateActionComplete;
                var3 = 'function';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 37:
                if (!var0) {
                    _fun97696_ip = 48;
                    continue _fun97696
                }
            case 40:
                var2 = 'stateValuesResponse';
                var0 = var2 in var1;
            case 48:
                if (!var0) {
                    _fun97696_ip = 68;
                    continue _fun97696
                }
            case 51:
                var2 = var1.stateValuesResponse;
                var3 = 'function';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 68:
                if (!var0) {
                    _fun97696_ip = 79;
                    continue _fun97696
                }
            case 71:
                var2 = 'stateKeysResponse';
                var0 = var2 in var1;
            case 79:
                if (!var0) {
                    _fun97696_ip = 99;
                    continue _fun97696
                }
            case 82:
                var2 = var1.stateKeysResponse;
                var3 = 'function';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 99:
                if (!var0) {
                    _fun97696_ip = 110;
                    continue _fun97696
                }
            case 102:
                var2 = 'stateValuesChange';
                var0 = var2 in var1;
            case 110:
                if (!var0) {
                    _fun97696_ip = 130;
                    continue _fun97696
                }
            case 113:
                var2 = var1.stateValuesChange;
                var3 = 'function';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 130:
                if (!var0) {
                    _fun97696_ip = 141;
                    continue _fun97696
                }
            case 133:
                var2 = 'stateBackupResponse';
                var0 = var2 in var1;
            case 141:
                if (!var0) {
                    _fun97696_ip = 161;
                    continue _fun97696
                }
            case 144:
                var1 = var1.stateBackupResponse;
                var2 = 'function';
                var1 = typeof var1;
                var0 = var2 === var1;
            case 161:
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var2.hasStateResponsePlugin = var3;
    var1 = function arg0() {
        _fun97697: for (var _fun97697_ip = 0;;) switch (_fun97697_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                if (var1) {
                    _fun97697_ip = 56;
                    continue _fun97697
                }
            case 20:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'This Reactotron client has not had the state responses plugin applied to it. Make sure that you add `use(stateResponse())` before adding this plugin.';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 56:
                return var0;
        }
    };
    var2.assertHasStateResponsePlugin = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);