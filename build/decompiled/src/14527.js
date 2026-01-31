// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var1 = module;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun113646: for (var _fun113646_ip = 0;;) switch (_fun113646_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun113646_ip = 76;
                continue _fun113646;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = 0;
    var2 = var5[var0];
    var0 = undefined;
    var2 = var4.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var4.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var4.bind(var0)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var4.bind(var0)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var4.bind(var0)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var5[var2];
    var4 = var4.bind(var0)(var2);
    var2 = global;
    var2 = var2.Error;
    var4 = var4.bind(var0)(var2);
    var2 = function(arg0) { // Environment: var3
        var2 = function(arg0) { // Original name: TimeoutError, environment: var0
            _fun113650: for (var _fun113650_ip = 0;;) switch (_fun113650_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var8 = new Array(1);
                    var0 = arg0;
                    var8[0] = var0;
                    var0 = _closure1_slot5;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun113650_ip = 73;
                        continue _fun113650
                    }
                case 60:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun113650_ip = 107;
                    continue _fun113650;
                case 73:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 107:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = 'TimeoutError';
                    var0.name = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var2 = var2.bind(var0)(var4);
    var _closure1_slot7 = var2;
    var4 = function(arg0, arg1, arg2) { // Original name: pTimeout, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun113652: for (var _fun113652_ip = 0;;) switch (_fun113652_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var2 = _closure2_slot1;
                    var3 = 'number';
                    var2 = typeof var2;
                    if (!(var3 === var2)) {
                        _fun113652_ip = 164;
                        continue _fun113652
                    }
                case 37:
                    var3 = _closure2_slot1;
                    var2 = 0;
                    if (!(!(var3 < var2))) {
                        _fun113652_ip = 164;
                        continue _fun113652
                    }
                case 47:
                    var3 = _closure2_slot1;
                    var2 = inf;
                    if (!(var3 === var2)) {
                        _fun113652_ip = 78;
                        continue _fun113652
                    }
                case 65:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    _fun113652_ip = 160;
                    continue _fun113652;
                case 78:
                    var2 = global;
                    var7 = var2.setTimeout;
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        _fun113653: for (var _fun113653_ip = 0;;) switch (_fun113653_ip) {
                            case 0:
                                var1 = _closure2_slot2;
                                var3 = 'function';
                                var1 = typeof var1;
                                if (!(var3 === var1)) {
                                    _fun113653_ip = 66;
                                    continue _fun113653
                                }
                            case 18: // try_start_0
                                var4 = _closure3_slot0;
                                var1 = _closure2_slot2;
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                var1 = var4.bind(var2)(var1);
                            case 40: // try_end0
                                _fun113653_ip = 220;
                                continue _fun113653;
                            case 45: // catch_target0
                                CatchBlockStart(arg_register = 4);
                                var2 = _closure3_slot1;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var4);
                                _fun113653_ip = 220;
                                continue _fun113653;
                            case 66:
                                var4 = _closure2_slot2;
                                var1 = global;
                                var2 = var1.Error;
                                var2 = var4 instanceof var2;
                                if (var2) {
                                    _fun113653_ip = 171;
                                    continue _fun113653
                                }
                            case 85:
                                var4 = _closure1_slot7;
                                var2 = _closure2_slot2;
                                var5 = 'string';
                                var2 = typeof var2;
                                if (!(var5 !== var2)) {
                                    _fun113653_ip = 142;
                                    continue _fun113653
                                }
                            case 107:
                                var6 = _closure2_slot1;
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var2 = 'Promise timed out after ';
                                var1 = ' milliseconds';
                                var1 = var5.bind(var2)(var6, var1);
                                _fun113653_ip = 146;
                                continue _fun113653;
                            case 142:
                                var1 = _closure2_slot2;
                            case 146:
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var9 = var2;
                                var8 = var1;
                                var1 = new var9[var4](var8, var7);
                                var2 = var1 instanceof Object ? var1 : var2;
                                _fun113653_ip = 175;
                                continue _fun113653;
                            case 171:
                                var2 = _closure2_slot2;
                            case 175:
                                var1 = _closure2_slot0;
                                var1 = var1.cancel;
                                var1 = typeof var1;
                                if (!(var3 === var1)) {
                                    _fun113653_ip = 206;
                                    continue _fun113653
                                }
                            case 192:
                                var1 = _closure2_slot0;
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                            case 206:
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 220:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var7.bind(var3)(var2, var4);
                    var _closure3_slot2 = var2;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var2 = var7[var2];
                    var2 = var4.bind(var3)(var2);
                    var4 = _closure2_slot0;
                    var1 = var4.then;
                    var1 = var1.bind(var4)(var6, var5);
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot2;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                case 160:
                    var0 = undefined;
                    return var0;
                case 164:
                    var0 = global;
                    var2 = var0.TypeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = 'Expected `milliseconds` to be a positive number';
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.exports = var4;
    var3 = var1.exports;
    var3.default = var4;
    var1 = var1.exports;
    var1.TimeoutError = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 162, 14528]);