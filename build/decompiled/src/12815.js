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
    var2.assertHasLoggerPlugin = var0;
    var2.default = var0;
    var2.hasLoggerPlugin = var0;
    var3 = function() {
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = {};
            var1 = {};
            var3 = function() {
                _fun98194: for (var _fun98194_ip = 0;;) switch (_fun98194_ip) {
                    case 0:
                        var0 = undefined;
                        var5 = undefined;
                        var4 = arguments.length;
                        var1 = global;
                        var1 = var1.Array;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var10 = var2;
                        var9 = var4;
                        var1 = new var10[var1](var9, var8);
                        var3 = var1 instanceof Object ? var1 : var2;
                        var2 = 0;
                        var6 = var2 < var4;
                        var1 = 0;
                        if (!var6) {
                            _fun98194_ip = 64;
                            continue _fun98194
                        }
                    case 49:
                        var6 = arguments[var1];
                        var3[var1] = var6;
                        var1 = var1 + 1;
                        if (var1 < var4) {
                            _fun98194_ip = 49;
                            continue _fun98194
                        }
                    case 64:
                        var5 = var3.length;
                        var4 = 1;
                        var1 = var3;
                        if (!(var4 === var5)) {
                            _fun98194_ip = 83;
                            continue _fun98194
                        }
                    case 79:
                        var1 = var3[var2];
                    case 83:
                        var5 = _closure3_slot0;
                        var4 = var5.send;
                        var3 = {};
                        var2 = 'debug';
                        var3.level = var2;
                        var3.message = var1;
                        var2 = 'log';
                        var1 = false;
                        var1 = var4.bind(var5)(var2, var3, var1);
                        return var0;
                }
            };
            var1.log = var3;
            var3 = function() {
                _fun98195: for (var _fun98195_ip = 0;;) switch (_fun98195_ip) {
                    case 0:
                        var0 = undefined;
                        var5 = undefined;
                        var4 = arguments.length;
                        var1 = global;
                        var1 = var1.Array;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var10 = var2;
                        var9 = var4;
                        var1 = new var10[var1](var9, var8);
                        var3 = var1 instanceof Object ? var1 : var2;
                        var2 = 0;
                        var6 = var2 < var4;
                        var1 = 0;
                        if (!var6) {
                            _fun98195_ip = 64;
                            continue _fun98195
                        }
                    case 49:
                        var6 = arguments[var1];
                        var3[var1] = var6;
                        var1 = var1 + 1;
                        if (var1 < var4) {
                            _fun98195_ip = 49;
                            continue _fun98195
                        }
                    case 64:
                        var5 = var3.length;
                        var4 = 1;
                        var1 = var3;
                        if (!(var4 === var5)) {
                            _fun98195_ip = 83;
                            continue _fun98195
                        }
                    case 79:
                        var1 = var3[var2];
                    case 83:
                        var5 = _closure3_slot0;
                        var4 = var5.send;
                        var3 = {};
                        var2 = 'debug';
                        var3.level = var2;
                        var3.message = var1;
                        var2 = 'log';
                        var1 = true;
                        var1 = var4.bind(var5)(var2, var3, var1);
                        return var0;
                }
            };
            var1.logImportant = var3;
            var3 = function arg0() {
                _fun98196: for (var _fun98196_ip = 0;;) switch (_fun98196_ip) {
                    case 0:
                        var4 = undefined;
                        var2 = undefined;
                        var0 = arguments.length;
                        var1 = 1;
                        var0 = var0 > var1;
                        if (!var0) {
                            _fun98196_ip = 25;
                            continue _fun98196
                        }
                    case 17:
                        var3 = arguments[var1];
                        var0 = var4 !== var3;
                    case 25:
                        if (!var0) {
                            _fun98196_ip = 32;
                            continue _fun98196
                        }
                    case 28:
                        var0 = arguments[var1];
                    case 32:
                        var4 = _closure3_slot0;
                        var3 = var4.send;
                        var2 = {};
                        var1 = 'debug';
                        var2.level = var1;
                        var1 = arg0;
                        var2.message = var1;
                        var0 = !var0;
                        var1 = 'log';
                        var0 = !var0;
                        var0 = var3.bind(var4)(var1, var2, var0);
                        return var0;
                }
            };
            var1.debug = var3;
            var3 = function arg0() {
                var4 = _closure3_slot0;
                var3 = var4.send;
                var2 = {};
                var0 = 'warn';
                var2.level = var0;
                var0 = arg0;
                var2.message = var0;
                var1 = 'log';
                var0 = true;
                var0 = var3.bind(var4)(var1, var2, var0);
                return var0;
            };
            var1.warn = var3;
            var2 = function arg0, arg1() {
                var4 = _closure3_slot0;
                var3 = var4.send;
                var2 = {};
                var0 = 'error';
                var2.level = var0;
                var0 = arg0;
                var2.message = var0;
                var0 = arg1;
                var2.stack = var0;
                var1 = 'log';
                var0 = true;
                var0 = var3.bind(var4)(var1, var2, var0);
                return var0;
            };
            var1.error = var2;
            var0.features = var1;
            return var0;
        };
        return var0;
    };
    var2.default = var3;
    var3 = function arg0() {
        _fun98199: for (var _fun98199_ip = 0;;) switch (_fun98199_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                if (!var0) {
                    _fun98199_ip = 17;
                    continue _fun98199
                }
            case 9:
                var2 = 'log';
                var0 = var2 in var1;
            case 17:
                if (!var0) {
                    _fun98199_ip = 37;
                    continue _fun98199
                }
            case 20:
                var2 = var1.log;
                var3 = 'function';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 37:
                if (!var0) {
                    _fun98199_ip = 48;
                    continue _fun98199
                }
            case 40:
                var2 = 'logImportant';
                var0 = var2 in var1;
            case 48:
                if (!var0) {
                    _fun98199_ip = 68;
                    continue _fun98199
                }
            case 51:
                var2 = var1.logImportant;
                var3 = 'function';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 68:
                if (!var0) {
                    _fun98199_ip = 79;
                    continue _fun98199
                }
            case 71:
                var2 = 'debug';
                var0 = var2 in var1;
            case 79:
                if (!var0) {
                    _fun98199_ip = 99;
                    continue _fun98199
                }
            case 82:
                var2 = var1.debug;
                var3 = 'function';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 99:
                if (!var0) {
                    _fun98199_ip = 110;
                    continue _fun98199
                }
            case 102:
                var2 = 'warn';
                var0 = var2 in var1;
            case 110:
                if (!var0) {
                    _fun98199_ip = 129;
                    continue _fun98199
                }
            case 113:
                var2 = var1.warn;
                var3 = 'function';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 129:
                if (!var0) {
                    _fun98199_ip = 140;
                    continue _fun98199
                }
            case 132:
                var2 = 'error';
                var0 = var2 in var1;
            case 140:
                if (!var0) {
                    _fun98199_ip = 159;
                    continue _fun98199
                }
            case 143:
                var1 = var1.error;
                var2 = 'function';
                var1 = typeof var1;
                var0 = var2 === var1;
            case 159:
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var2.hasLoggerPlugin = var3;
    var1 = function arg0() {
        _fun98200: for (var _fun98200_ip = 0;;) switch (_fun98200_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                if (var1) {
                    _fun98200_ip = 56;
                    continue _fun98200
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
                var4 = 'This Reactotron client has not had the logger plugin applied to it. Make sure that you add `use(logger())` before adding this plugin.';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 56:
                return var0;
        }
    };
    var2.assertHasLoggerPlugin = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);