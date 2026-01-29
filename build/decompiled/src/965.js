// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun9927: for (var _fun9927_ip = 0;;) switch (_fun9927_ip) {
        case 0:
            var0 = module;
            var2 = require;
            var _closure1_slot0 = var2;
            var2 = dependencyMap;
            var _closure1_slot1 = var2;
            var2 = function(arg0) { // Original name: AsyncGenerator, environment: var1
                _fun9928: for (var _fun9928_ip = 0;;) switch (_fun9928_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = this;
                        var _closure2_slot0 = var0;
                        var3 = function(arg0, arg1) { // Original name: resume, environment: var2
                            _fun9929: for (var _fun9929_ip = 0;;) switch (_fun9929_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0;
                                    var _closure3_slot0 = var0;
                                    var2 = arg1;
                                    var0 = undefined;
                                    var5 = undefined;
                                case 19: // try_start_0
                                    var4 = _closure2_slot0;
                                    var3 = var4[var3];
                                    var2 = var3.bind(var4)(var2);
                                    var _closure3_slot1 = var2;
                                    var3 = var2.value;
                                    var5 = var3;
                                    var _closure3_slot2 = var3;
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot1;
                                    var2 = 0;
                                    var2 = var6[var2];
                                    var2 = var4.bind(var0)(var2);
                                    var2 = var3 instanceof var2;
                                    var _closure3_slot3 = var2;
                                    var3 = global;
                                    var4 = var3.Promise;
                                    var3 = var4.resolve;
                                    if (var2) {
                                        _fun9929_ip = 103;
                                        continue _fun9929
                                    }
                                case 98:
                                    var2 = var5;
                                    _fun9929_ip = 108;
                                    continue _fun9929;
                                case 103:
                                    var2 = var5.v;
                                case 108:
                                    var4 = var3.bind(var4)(var2);
                                    var3 = var4.then;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun9930: for (var _fun9930_ip = 0;;) switch (_fun9930_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var1 = _closure3_slot3;
                                                var5 = var3;
                                                if (!var1) {
                                                    _fun9930_ip = 76;
                                                    continue _fun9930
                                                }
                                            case 16:
                                                var4 = _closure3_slot0;
                                                var2 = 'next';
                                                var1 = 'return';
                                                if (!(var1 === var4)) {
                                                    _fun9930_ip = 35;
                                                    continue _fun9930
                                                }
                                            case 32:
                                                var2 = var1;
                                            case 35:
                                                var1 = _closure3_slot2;
                                                var1 = var1.k;
                                                if (!var1) {
                                                    _fun9930_ip = 113;
                                                    continue _fun9930
                                                }
                                            case 47:
                                                var1 = var3.done;
                                                if (var1) {
                                                    _fun9930_ip = 113;
                                                    continue _fun9930
                                                }
                                            case 55:
                                                var4 = _closure2_slot0;
                                                var1 = var4[var2];
                                                var1 = var1.bind(var4)(var3);
                                                var5 = var1.value;
                                            case 76:
                                                var4 = _closure2_slot4;
                                                var0 = _closure3_slot1;
                                                var0 = var0.done;
                                                var1 = 'normal';
                                                if (!var0) {
                                                    _fun9930_ip = 103;
                                                    continue _fun9930
                                                }
                                            case 99:
                                                var1 = 'return';
                                            case 103:
                                                var0 = undefined;
                                                var1 = var4.bind(var0)(var1, var5);
                                                return var0;
                                            case 113:
                                                var1 = _closure2_slot3;
                                                var0 = undefined;
                                                var1 = var1.bind(var0)(var2, var3);
                                                return var0;
                                        }
                                    };
                                    var1 = function(arg0) { // Environment: var1
                                        var3 = _closure2_slot3;
                                        var0 = undefined;
                                        var2 = 'throw';
                                        var1 = arg0;
                                        var1 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    var1 = var3.bind(var4)(var2, var1);
                                case 134: // try_end0
                                    _fun9929_ip = 155;
                                    continue _fun9929;
                                case 136: // catch_target0
                                    CatchBlockStart(arg_register = 3);
                                    var2 = _closure2_slot4;
                                    var1 = 'throw';
                                    var1 = var2.bind(var0)(var1, var3);
                                case 155:
                                    return var0;
                            }
                        };
                        var _closure2_slot3 = var3;
                        var3 = function(arg0, arg1) { // Original name: settle, environment: var2
                            _fun9932: for (var _fun9932_ip = 0;;) switch (_fun9932_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = arg1;
                                    var0 = 'return';
                                    if (!(var0 !== var1)) {
                                        _fun9932_ip = 74;
                                        continue _fun9932
                                    }
                                case 14:
                                    var0 = 'throw';
                                    if (!(var0 !== var1)) {
                                        _fun9932_ip = 54;
                                        continue _fun9932
                                    }
                                case 22:
                                    var2 = _closure2_slot1;
                                    var1 = var2.resolve;
                                    var0 = {};
                                    var0.value = var3;
                                    var4 = false;
                                    var0.done = var4;
                                    var0 = var1.bind(var2)(var0);
                                    _fun9932_ip = 104;
                                    continue _fun9932;
                                case 54:
                                    var1 = _closure2_slot1;
                                    var0 = var1.reject;
                                    var0 = var0.bind(var1)(var3);
                                    _fun9932_ip = 104;
                                    continue _fun9932;
                                case 74:
                                    var2 = _closure2_slot1;
                                    var1 = var2.resolve;
                                    var0 = {};
                                    var0.value = var3;
                                    var3 = true;
                                    var0.done = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 104:
                                    var1 = _closure2_slot1;
                                    var1 = var1.next;
                                    var _closure2_slot1 = var1;
                                    if (var1) {
                                        _fun9932_ip = 131;
                                        continue _fun9932
                                    }
                                case 123:
                                    var1 = null;
                                    var _closure2_slot2 = var1;
                                    _fun9932_ip = 162;
                                    continue _fun9932;
                                case 131:
                                    var3 = _closure2_slot3;
                                    var1 = _closure2_slot1;
                                    var2 = var1.key;
                                    var0 = _closure2_slot1;
                                    var1 = var0.arg;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                case 162:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot4 = var3;
                        var2 = function(arg0, arg1) { // Environment: var2
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = function(arg0, arg1) { // Environment: var0
                                _fun9934: for (var _fun9934_ip = 0;;) switch (_fun9934_ip) {
                                    case 0:
                                        var1 = {};
                                        var0 = _closure3_slot0;
                                        var1.key = var0;
                                        var0 = _closure3_slot1;
                                        var1.arg = var0;
                                        var0 = arg0;
                                        var1.resolve = var0;
                                        var0 = arg1;
                                        var1.reject = var0;
                                        var0 = null;
                                        var1.next = var0;
                                        var3 = _closure2_slot2;
                                        if (var3) {
                                            _fun9934_ip = 84;
                                            continue _fun9934
                                        }
                                    case 54:
                                        _closure2_slot2 = var1;
                                        _closure2_slot1 = var1;
                                        var5 = _closure2_slot3;
                                        var4 = _closure3_slot0;
                                        var3 = _closure3_slot1;
                                        var2 = undefined;
                                        var2 = var5.bind(var2)(var4, var3);
                                        _fun9934_ip = 98;
                                        continue _fun9934;
                                    case 84:
                                        var2 = _closure2_slot2;
                                        var2.next = var1;
                                        _closure2_slot2 = var1;
                                    case 98:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var1._invoke = var2;
                        var0 = var0.return;
                        var2 = 'function';
                        var0 = typeof var0;
                        if (!(var2 !== var0)) {
                            _fun9928_ip = 65;
                            continue _fun9928
                        }
                    case 57:
                        var0 = undefined;
                        var1.return = var0;
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot2 = var2;
            var5 = var2.prototype;
            var3 = global;
            var4 = var3.Symbol;
            var6 = 'function';
            var4 = typeof var4;
            var4 = var6 === var4;
            if (!var4) {
                _fun9927_ip = 66;
                continue _fun9927
            }
        case 54:
            var3 = var3.Symbol;
            var4 = var3.asyncIterator;
        case 66:
            if (var4) {
                _fun9927_ip = 75;
                continue _fun9927
            }
        case 69:
            var4 = '@@asyncIterator';
        case 75:
            var3 = function() { // Environment: var1
                var0 = this;
                return var0;
            };
            var5[var4] = var3;
            var4 = var2.prototype;
            var3 = function(arg0) { // Environment: var1
                var3 = this;
                var2 = var3._invoke;
                var1 = 'next';
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var4.next = var3;
            var4 = var2.prototype;
            var3 = function(arg0) { // Environment: var1
                var3 = this;
                var2 = var3._invoke;
                var1 = 'throw';
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var4.throw = var3;
            var3 = var2.prototype;
            var2 = function(arg0) { // Environment: var1
                var3 = this;
                var2 = var3._invoke;
                var1 = 'return';
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var3.return = var2;
            var1 = function(arg0) { // Original name: _wrapAsyncGenerator, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var2 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var3 = var4.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var6 = var3.bind(var4)(var0, var1);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var1;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                return var0;
            };
            var0.exports = var1;
            var2 = var0.exports;
            var1 = true;
            var2.__esModule = var1;
            var1 = var0.exports;
            var0 = var0.exports;
            var1.default = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [964]);