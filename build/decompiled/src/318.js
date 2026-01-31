// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun4851: for (var _fun4851_ip = 0;;) switch (_fun4851_ip) {
        case 0:
            var1 = function arg0, arg1() {
                _fun4852: for (var _fun4852_ip = 0;;) switch (_fun4852_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var1 = var5.length;
                        var0 = var4.length;
                        if (!(var1 === var0)) {
                            _fun4852_ip = 95;
                            continue _fun4852
                        }
                    case 20:
                        var0 = var5.length;
                        var3 = 0;
                        var0 = var3 < var0;
                        var1 = undefined;
                        if (!var0) {
                            _fun4852_ip = 91;
                            continue _fun4852
                        }
                    case 39:
                        var7 = var5[var3];
                        var6 = var4[var3];
                        if (!(var7 !== var6)) {
                            _fun4852_ip = 79;
                            continue _fun4852
                        }
                    case 51:
                        var0 = _closure1_slot0;
                        var0 = var0.bind(var1)(var7);
                        if (!var0) {
                            _fun4852_ip = 75;
                            continue _fun4852
                        }
                    case 63:
                        var0 = _closure1_slot0;
                        var0 = var0.bind(var1)(var6);
                        if (var0) {
                            _fun4852_ip = 79;
                            continue _fun4852
                        }
                    case 75:
                        var0 = false;
                        return var0;
                    case 79:
                        var3 = var3 + 1;
                        var0 = var5.length;
                        if (var3 < var0) {
                            _fun4852_ip = 39;
                            continue _fun4852
                        }
                    case 91:
                        var0 = true;
                        return var0;
                    case 95:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot1 = var1;
            var1 = global;
            var1 = var1.Number;
            var1 = var1.isNaN;
            if (var1) {
                _fun4851_ip = 33;
                continue _fun4851
            }
        case 28:
            var1 = function arg0() {
                _fun4853: for (var _fun4853_ip = 0;;) switch (_fun4853_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = 'number';
                        var0 = typeof var1;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun4853_ip = 21;
                            continue _fun4853
                        }
                    case 17:
                        var0 = var1 != var1;
                    case 21:
                        return var0;
                }
            };
        case 33:
            var _closure1_slot0 = var1;
            var1 = function arg0, arg1() {
                _fun4854: for (var _fun4854_ip = 0;;) switch (_fun4854_ip) {
                    case 0:
                        var2 = arg1;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var _closure2_slot1 = var2;
                        var1 = undefined;
                        if (!(var1 === var2)) {
                            _fun4854_ip = 33;
                            continue _fun4854
                        }
                    case 22:
                        var1 = _closure1_slot1;
                        _closure2_slot1 = var1;
                    case 33:
                        var1 = new Array(0);
                        var _closure2_slot4 = var1;
                        var1 = false;
                        var _closure2_slot5 = var1;
                        var0 = function() {
                            _fun4855: for (var _fun4855_ip = 0;;) switch (_fun4855_ip) {
                                case 0:
                                    var2 = this;
                                    var6 = undefined;
                                    var4 = undefined;
                                    var1 = new Array(0);
                                    var0 = arguments.length;
                                    var3 = 0;
                                    var0 = var3 < var0;
                                    if (!var0) {
                                        _fun4855_ip = 41;
                                        continue _fun4855
                                    }
                                case 23:
                                    var0 = arguments[var3];
                                    var1[var3] = var0;
                                    var3 = var3 + 1;
                                    var0 = arguments.length;
                                    if (var3 < var0) {
                                        _fun4855_ip = 23;
                                        continue _fun4855
                                    }
                                case 41:
                                    var3 = _closure2_slot5;
                                    if (!var3) {
                                        _fun4855_ip = 59;
                                        continue _fun4855
                                    }
                                case 51:
                                    var4 = _closure2_slot2;
                                    var3 = var4 === var2;
                                case 59:
                                    if (!var3) {
                                        _fun4855_ip = 76;
                                        continue _fun4855
                                    }
                                case 62:
                                    var5 = _closure2_slot1;
                                    var4 = _closure2_slot4;
                                    var3 = var5.bind(var6)(var1, var4);
                                case 76:
                                    if (var3) {
                                        _fun4855_ip = 112;
                                        continue _fun4855
                                    }
                                case 79:
                                    var4 = _closure2_slot0;
                                    var3 = var4.apply;
                                    var3 = var3.bind(var4)(var2, var1);
                                    var _closure2_slot3 = var3;
                                    var3 = true;
                                    _closure2_slot5 = var3;
                                    var _closure2_slot2 = var2;
                                    _closure2_slot4 = var1;
                                case 112:
                                    var0 = _closure2_slot3;
                                    return var0;
                            }
                        };
                        return var0;
                }
            };
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);