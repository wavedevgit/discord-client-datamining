// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Environment: var0
        _fun97484: for (var _fun97484_ip = 0;;) switch (_fun97484_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = {};
                if (var2) {
                    _fun97484_ip = 42;
                    continue _fun97484
                }
            case 14:
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = var4;
                var3 = new var5[var3](var4);
                var2 = var3 instanceof Object ? var3 : var4;
            case 42:
                _closure2_slot0 = var2;
                var0.all = var2;
                var2 = function arg0, arg1() {
                    _fun97485: for (var _fun97485_ip = 0;;) switch (_fun97485_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = arg1;
                            var3 = _closure2_slot0;
                            var1 = var3.get;
                            var1 = var1.bind(var3)(var5);
                            if (var1) {
                                _fun97485_ip = 51;
                                continue _fun97485
                            }
                        case 26:
                            var4 = _closure2_slot0;
                            var3 = var4.set;
                            var0 = new Array(1);
                            var0[0] = var2;
                            var0 = var3.bind(var4)(var5, var0);
                            _fun97485_ip = 61;
                            continue _fun97485;
                        case 51:
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.on = var2;
                var2 = function arg0, arg1() {
                    _fun97486: for (var _fun97486_ip = 0;;) switch (_fun97486_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = arg1;
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var3 = var2.bind(var3)(var5);
                            if (!var3) {
                                _fun97486_ip = 82;
                                continue _fun97486
                            }
                        case 26:
                            if (var1) {
                                _fun97486_ip = 50;
                                continue _fun97486
                            }
                        case 29:
                            var4 = _closure2_slot0;
                            var2 = var4.set;
                            var0 = new Array(0);
                            var0 = var2.bind(var4)(var5, var0);
                            _fun97486_ip = 82;
                            continue _fun97486;
                        case 50:
                            var2 = var3.splice;
                            var0 = var3.indexOf;
                            var1 = var0.bind(var3)(var1);
                            var0 = 0;
                            var1 = var1 >>> var0;
                            var0 = 1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.off = var2;
                var1 = function arg0, arg1() {
                    _fun97487: for (var _fun97487_ip = 0;;) switch (_fun97487_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var3 = var2.bind(var3)(var4);
                            if (!var3) {
                                _fun97487_ip = 62;
                                continue _fun97487
                            }
                        case 36:
                            var2 = var3.slice;
                            var4 = var2.bind(var3)();
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot1;
                                var1 = arg0;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                        case 62:
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var1 = '*';
                            var2 = var2.bind(var3)(var1);
                            if (!var2) {
                                _fun97487_ip = 109;
                                continue _fun97487
                            }
                        case 83:
                            var1 = var2.slice;
                            var2 = var1.bind(var2)();
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var3 = _closure3_slot0;
                                var2 = _closure3_slot1;
                                var1 = arg0;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var3, var2);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 109:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.emit = var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);