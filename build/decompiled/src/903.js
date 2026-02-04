// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var0 = var0.Symbol;
    var2 = var0.toStringTag;
    var0 = {};
    var5 = 'Module';
    var0.value = var5;
    var0 = var3.bind(var4)(var1, var2, var0);
    var0 = function arg0, arg1, arg2() {
        _fun9494: for (var _fun9494_ip = 0;;) switch (_fun9494_ip) {
            case 0:
                var9 = arg1;
                var4 = arg2;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var9;
                var0 = function() {
                    var0 = _closure2_slot8;
                    var2 = undefined;
                    var0 = var0.bind(var2)();
                    var0 = _closure2_slot0;
                    var0 = var0.bind(var2)();
                    var _closure2_slot2 = var0;
                    return var0;
                };
                var _closure2_slot7 = var0;
                var2 = function() {
                    _fun9496: for (var _fun9496_ip = 0;;) switch (_fun9496_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun9496_ip = 30;
                                continue _fun9496
                            }
                        case 13:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var2 = _closure2_slot3;
                            var2 = var3.bind(var0)(var2);
                        case 30:
                            var2 = _closure2_slot4;
                            if (!(var0 !== var2)) {
                                _fun9496_ip = 55;
                                continue _fun9496
                            }
                        case 38:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var2 = _closure2_slot4;
                            var2 = var3.bind(var0)(var2);
                        case 55:
                            var _closure2_slot4 = var0;
                            var _closure2_slot3 = var0;
                            return var0;
                    }
                };
                var _closure2_slot8 = var2;
                var0 = function() {
                    _fun9497: for (var _fun9497_ip = 0;;) switch (_fun9497_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun9497_ip = 29;
                                continue _fun9497
                            }
                        case 10:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 29:
                            var3 = _closure2_slot6;
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot1;
                            var4 = undefined;
                            var1 = var3.bind(var4)(var2, var1);
                            _closure2_slot3 = var1;
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun9497_ip = 68;
                                continue _fun9497
                            }
                        case 60:
                            var2 = _closure2_slot4;
                            var1 = var4 === var2;
                        case 68:
                            if (!var1) {
                                _fun9497_ip = 93;
                                continue _fun9497
                            }
                        case 71:
                            var3 = _closure2_slot6;
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot5;
                            var1 = var3.bind(var4)(var2, var1);
                            _closure2_slot4 = var1;
                        case 93:
                            var0 = _closure2_slot2;
                            return var0;
                    }
                };
                var3 = null;
                var6 = var3 != var4;
                var5 = 0;
                if (!var6) {
                    _fun9494_ip = 89;
                    continue _fun9494
                }
            case 53:
                var6 = var4.maxWait;
                var5 = 0;
                if (!var6) {
                    _fun9494_ip = 89;
                    continue _fun9494
                }
            case 64:
                var6 = global;
                var8 = var6.Math;
                var7 = var8.max;
                var6 = var4.maxWait;
                var5 = var7.bind(var8)(var6, var9);
            case 89:
                var _closure2_slot5 = var5;
                var5 = var3 == var4;
                var3 = undefined;
                if (var5) {
                    _fun9494_ip = 108;
                    continue _fun9494
                }
            case 102:
                var3 = var4.setTimeoutImpl;
            case 108:
                if (var3) {
                    _fun9494_ip = 119;
                    continue _fun9494
                }
            case 111:
                var4 = global;
                var3 = var4.setTimeout;
            case 119:
                var _closure2_slot6 = var3;
                var0.cancel = var2;
                var1 = function() {
                    _fun9498: for (var _fun9498_ip = 0;;) switch (_fun9498_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var2 = undefined;
                            if (!(var2 === var0)) {
                                _fun9498_ip = 27;
                                continue _fun9498
                            }
                        case 13:
                            var0 = _closure2_slot4;
                            if (!(var2 === var0)) {
                                _fun9498_ip = 27;
                                continue _fun9498
                            }
                        case 21:
                            var0 = _closure2_slot2;
                            _fun9498_ip = 35;
                            continue _fun9498;
                        case 27:
                            var1 = _closure2_slot7;
                            var0 = var1.bind(var2)();
                        case 35:
                            return var0;
                    }
                };
                var0.flush = var1;
                return var0;
        }
    };
    var1.debounce = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);