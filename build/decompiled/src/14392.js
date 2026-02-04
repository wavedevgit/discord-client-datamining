// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun112079: for (var _fun112079_ip = 0;;) switch (_fun112079_ip) {
        case 0:
            var1 = exports;
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
        case 19: // try_start_0
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var2 = 'a';
            var0 = {};
            var0 = var5.bind(var6)(var4, var2, var0);
            var0 = !var0;
            var0 = !var0;
        case 53: // try_end0
            _fun112079_ip = 59;
            continue _fun112079;
        case 55: // catch_target0
            CatchBlockStart(arg_register = 2);
            var0 = false;
        case 59:
            if (var0) {
                _fun112079_ip = 81;
                continue _fun112079
            }
        case 62:
            var2 = global;
            var2 = var2.Object;
            var2 = var2.prototype;
            var2 = var2.__defineGetter__;
        case 81:
            if (var0) {
                _fun112079_ip = 93;
                continue _fun112079
            }
        case 84:
            var2 = function(arg0, arg1, arg2) { // Environment: var3
                _fun112080: for (var _fun112080_ip = 0;;) switch (_fun112080_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var0 = arg2;
                        var1 = 'get';
                        var1 = var1 in var0;
                        if (!var1) {
                            _fun112080_ip = 29;
                            continue _fun112080
                        }
                    case 20:
                        var1 = var3.__defineGetter__;
                        if (var1) {
                            _fun112080_ip = 98;
                            continue _fun112080
                        }
                    case 29:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 0;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var4 = var1.hop;
                        var1 = var4.call;
                        var1 = var1.bind(var4)(var3, var2);
                        if (!var1) {
                            _fun112080_ip = 84;
                            continue _fun112080
                        }
                    case 73:
                        var4 = 'value';
                        var4 = var4 in var0;
                        var1 = !var4;
                    case 84:
                        if (var1) {
                            _fun112080_ip = 115;
                            continue _fun112080
                        }
                    case 87:
                        var1 = var0.value;
                        var3[var2] = var1;
                        _fun112080_ip = 115;
                        continue _fun112080;
                    case 98:
                        var1 = var3.__defineGetter__;
                        var0 = var0.get;
                        var0 = var1.bind(var3)(var2, var0);
                    case 115:
                        var0 = undefined;
                        return var0;
                }
            };
            _fun112079_ip = 106;
            continue _fun112079;
        case 93:
            var0 = global;
            var0 = var0.Object;
            var2 = var0.defineProperty;
        case 106:
            var _closure1_slot2 = var2;
            var0 = global;
            var0 = var0.Object;
            var0 = var0.create;
            if (var0) {
                _fun112079_ip = 133;
                continue _fun112079
            }
        case 126:
            var0 = function(arg0, arg1) { // Environment: var3
                _fun112081: for (var _fun112081_ip = 0;;) switch (_fun112081_ip) {
                    case 0:
                        var9 = arg1;
                        var0 = function() {
                            var0 = undefined;
                            return var0;
                        };
                        var1 = arg0;
                        var0.prototype = var1;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var16 = var1;
                        var0 = new var16[var0](var15);
                        var0 = var0 instanceof Object ? var0 : var1;
                        var7 = var9;
                        var2 = undefined;
                        var1 = 0;
                        for (var4 in var7)
                            case 59: {
                                case 68: var12 = var4;
                                var11 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var10 = var10[var1];
                                var10 = var11.bind(var2)(var10);
                                var11 = var10.hop;
                                var10 = var11.call;
                                var10 = var10.bind(var11)(var9, var12);
                                if (!var10) {
                                    _fun112081_ip = 59;
                                    continue _fun112081
                                }
                                case 108: var11 = _closure1_slot2;
                                var10 = var9[var12];
                                var10 = var11.bind(var2)(var0, var12, var10);
                                _fun112081_ip = 59;
                                continue _fun112081;
                            }
                    case 125:
                        return var0;
                }
            };
        case 133:
            var1.defineProperty = var2;
            var1.objCreate = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [14393]);