// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12747: for (var _fun12747_ip = 0;;) switch (_fun12747_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var4);
            var0 = var3;
            if (!var0) {
                _fun12747_ip = 52;
                continue _fun12747
            }
        case 46:
            var0 = var3.__awaiter;
        case 52:
            if (var0) {
                _fun12747_ip = 60;
                continue _fun12747
            }
        case 55:
            var0 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun12748: for (var _fun12748_ip = 0;;) switch (_fun12748_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun12748_ip = 48;
                            continue _fun12748
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun12749: for (var _fun12749_ip = 0;;) switch (_fun12749_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function(arg0) { // Original name: fulfilled, environment: var0
                                        _fun12750: for (var _fun12750_ip = 0;;) switch (_fun12750_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun12750_ip = 52;
                                                continue _fun12750;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function(arg0) { // Original name: rejected, environment: var0
                                        _fun12751: for (var _fun12751_ip = 0;;) switch (_fun12751_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun12751_ip = 53;
                                                continue _fun12751;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function(arg0) { // Original name: step, environment: var0
                                        _fun12752: for (var _fun12752_ip = 0;;) switch (_fun12752_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun12752_ip = 54;
                                                    continue _fun12752
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function(arg0) { // Original name: adopt, environment: var1
                                                    _fun12753: for (var _fun12753_ip = 0;;) switch (_fun12753_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun12753_ip = 52;
                                                                continue _fun12753
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun12752_ip = 73;
                                                continue _fun12752;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun12749_ip = 70;
                                        continue _fun12749
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 60:
            var _closure1_slot0 = var0;
            var3 = arg6;
            var0 = 0;
            var4 = var3[var0];
            var3 = arg1;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var5 = var3.AsyncExpiringMap;
            var3 = {};
            var4 = 60000;
            var3.ttl = var4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var5
                }
            });
            var10 = var4;
            var9 = var3;
            var3 = new var10[var5](var9, var8);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure1_slot1 = var3;
            var3 = function(arg0, arg1) { // Original name: addTimeToInitialDisplayFallback, environment: var1
                var3 = _closure1_slot1;
                var2 = var3.set;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var2.addTimeToInitialDisplayFallback = var3;
            var1 = function(arg0) { // Original name: getTimeToInitialDisplayFallback, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot0;
                var3 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun12758: for (var _fun12758_ip = 0;;) switch (_fun12758_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun12758_ip = 34;
                                    continue _fun12758
                                }
                            case 7:
                                var3 = _closure1_slot1;
                                var2 = var3.get;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 34:
                                return var0;
                        }
                    };
                    return var0;
                };
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var0 = var7[var2](var6, var5, var4, var3, var2);
                return var0;
            };
            var2.getTimeToInitialDisplayFallback = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1162]);