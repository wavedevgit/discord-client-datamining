// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot1;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = false;
            var2._isCancelled = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'cancel';
        var0.key = var1;
        var1 = function() {
            var1 = true;
            var0 = this;
            var0._isCancelled = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'isCancelled';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var0 = var0._isCancelled;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot2 = var1;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun46326: for (var _fun46326_ip = 0;;) switch (_fun46326_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var1 = arg3;
                var _closure2_slot3 = var1;
                var1 = arg4;
                var _closure2_slot4 = var1;
                var1 = arguments.length;
                var2 = 5;
                var5 = var1 > var2;
                var6 = 1;
                var1 = var6;
                if (!var5) {
                    _fun46326_ip = 75;
                    continue _fun46326
                }
            case 60:
                var5 = arguments[var2];
                var1 = var6;
                if (!(var4 !== var5)) {
                    _fun46326_ip = 75;
                    continue _fun46326
                }
            case 71:
                var1 = arguments[var2];
            case 75:
                var _closure2_slot5 = var1;
                var1 = arguments.length;
                var2 = 6;
                if (!(var1 > var2)) {
                    _fun46326_ip = 97;
                    continue _fun46326
                }
            case 89:
                var1 = arguments[var2];
                if (!(var4 === var1)) {
                    _fun46326_ip = 126;
                    continue _fun46326
                }
            case 97:
                var1 = _closure1_slot2;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var4;
                var1 = new var8[var1](var7);
                var1 = var1 instanceof Object ? var1 : var4;
                _fun46326_ip = 130;
                continue _fun46326;
            case 126:
                var1 = arguments[var2];
            case 130:
                var _closure2_slot6 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = function(arg0) { // Environment: var0
                    _fun46327: for (var _fun46327_ip = 0;;) switch (_fun46327_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var6 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var5 = _closure2_slot2;
                            var0 = undefined;
                            var3 = false;
                            var3 = var6.bind(var0)(var4, var5, var3);
                            var5 = _closure2_slot5;
                            var3 = 7;
                            var3 = var3 * var5;
                            var _closure3_slot1 = var3;
                            var3 = _closure2_slot3;
                            var5 = var3 > var4;
                            var3 = -1;
                            var4 = var3;
                            if (!var5) {
                                _fun46327_ip = 73;
                                continue _fun46327
                            }
                        case 70:
                            var4 = 1;
                        case 73:
                            var _closure3_slot2 = var4;
                            var5 = _closure2_slot4;
                            var4 = _closure2_slot2;
                            var4 = var5 > var4;
                            if (!var4) {
                                _fun46327_ip = 95;
                                continue _fun46327
                            }
                        case 92:
                            var3 = 1;
                        case 95:
                            var _closure3_slot3 = var3;
                            var4 = _closure2_slot3;
                            var3 = _closure2_slot1;
                            if (!(!(var4 > var3))) {
                                _fun46327_ip = 126;
                                continue _fun46327
                            }
                        case 111:
                            var3 = global;
                            var3 = var3.Math;
                            var3 = var3.max;
                            _fun46327_ip = 139;
                            continue _fun46327;
                        case 126:
                            var4 = global;
                            var4 = var4.Math;
                            var3 = var4.min;
                        case 139:
                            var _closure3_slot4 = var3;
                            var4 = _closure2_slot4;
                            var3 = _closure2_slot2;
                            if (!(!(var4 > var3))) {
                                _fun46327_ip = 170;
                                continue _fun46327
                            }
                        case 155:
                            var3 = global;
                            var3 = var3.Math;
                            var3 = var3.max;
                            _fun46327_ip = 183;
                            continue _fun46327;
                        case 170:
                            var4 = global;
                            var4 = var4.Math;
                            var3 = var4.min;
                        case 183:
                            var _closure3_slot5 = var3;
                            var3 = global;
                            var4 = var3.Date;
                            var3 = var4.now;
                            var3 = var3.bind(var4)();
                            var _closure3_slot6 = var3;
                            var3 = _closure2_slot1;
                            var _closure3_slot7 = var3;
                            var1 = _closure2_slot2;
                            var _closure3_slot8 = var1;
                            var1 = function() {
                                var0 = global;
                                var2 = var0.requestAnimationFrame;
                                var0 = undefined;
                                var1 = function() { // Environment: var1
                                    _fun46329: for (var _fun46329_ip = 0;;) switch (_fun46329_ip) {
                                        case 0:
                                            var2 = _closure2_slot6;
                                            var0 = var2.isCancelled;
                                            var2 = var0.bind(var2)();
                                            if (var2) {
                                                _fun46329_ip = 213;
                                                continue _fun46329
                                            }
                                        case 26:
                                            var2 = global;
                                            var3 = var2.Date;
                                            var2 = var3.now;
                                            var3 = var2.bind(var3)();
                                            var4 = _closure3_slot1;
                                            var2 = _closure3_slot6;
                                            var2 = var3 - var2;
                                            var7 = var4 * var2;
                                            var4 = _closure3_slot8;
                                            var2 = _closure3_slot3;
                                            var2 = var7 * var2;
                                            var2 = var4 + var2;
                                            _closure3_slot8 = var2;
                                            var8 = _closure2_slot0;
                                            var6 = _closure3_slot4;
                                            var4 = _closure2_slot3;
                                            var5 = _closure3_slot7;
                                            var2 = _closure3_slot2;
                                            var2 = var7 * var2;
                                            var5 = var5 + var2;
                                            _closure3_slot7 = var5;
                                            var2 = undefined;
                                            var7 = var6.bind(var2)(var4, var5);
                                            var9 = _closure3_slot5;
                                            var6 = _closure2_slot4;
                                            var5 = _closure3_slot8;
                                            var6 = var9.bind(var2)(var6, var5);
                                            var5 = false;
                                            var5 = var8.bind(var2)(var7, var6, var5);
                                            _closure3_slot6 = var3;
                                            var5 = _closure3_slot4;
                                            var3 = _closure3_slot7;
                                            var3 = var5.bind(var2)(var4, var3);
                                            if (!(var3 === var4)) {
                                                _fun46329_ip = 203;
                                                continue _fun46329
                                            }
                                        case 168:
                                            var4 = _closure3_slot5;
                                            var3 = _closure2_slot4;
                                            var1 = _closure3_slot8;
                                            var1 = var4.bind(var2)(var3, var1);
                                            if (!(var1 === var3)) {
                                                _fun46329_ip = 203;
                                                continue _fun46329
                                            }
                                        case 190:
                                            var3 = _closure3_slot0;
                                            var1 = true;
                                            var1 = var3.bind(var2)(var1);
                                            _fun46329_ip = 226;
                                            continue _fun46329;
                                        case 203:
                                            var1 = _closure3_slot9;
                                            var1 = var1.bind(var2)();
                                            return var1;
                                        case 213:
                                            var2 = _closure3_slot0;
                                            var1 = undefined;
                                            var0 = false;
                                            var0 = var2.bind(var1)(var0);
                                        case 226:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var _closure3_slot9 = var1;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.autoScroll = var3;
    var2.Cancellable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5102, 5103]);