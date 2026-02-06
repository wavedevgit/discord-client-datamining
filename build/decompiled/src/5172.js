// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = undefined;
    var2.AutoScroll = var0;
    var1 = function() { // Environment: var1
        var0 = function() {
            var0 = undefined;
            return var0;
        };
        var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
            _fun46246: for (var _fun46246_ip = 0;;) switch (_fun46246_ip) {
                case 0:
                    var2 = arg5;
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var1 = arg2;
                    var _closure3_slot2 = var1;
                    var1 = arg3;
                    var _closure3_slot3 = var1;
                    var1 = arg4;
                    var _closure3_slot4 = var1;
                    var _closure3_slot5 = var2;
                    var1 = undefined;
                    if (!(var1 === var2)) {
                        _fun46246_ip = 57;
                        continue _fun46246
                    }
                case 50:
                    var1 = 1;
                    _closure3_slot5 = var1;
                case 57:
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var6 = _closure3_slot0;
                        var5 = var6.scrollToOffset;
                        var2 = _closure3_slot1;
                        var1 = _closure3_slot2;
                        var4 = false;
                        var4 = var5.bind(var6)(var2, var1, var4);
                        var4 = _closure3_slot5;
                        var3 = 0.1;
                        var3 = var3 * var4;
                        var _closure4_slot1 = var3;
                        var3 = global;
                        var4 = var3.Date;
                        var3 = var4.now;
                        var3 = var3.bind(var4)();
                        var _closure4_slot2 = var3;
                        var _closure4_slot3 = var2;
                        var _closure4_slot4 = var1;
                        var1 = function() {
                            var0 = global;
                            var2 = var0.requestAnimationFrame;
                            var0 = undefined;
                            var1 = function() { // Environment: var1
                                _fun46249: for (var _fun46249_ip = 0;;) switch (_fun46249_ip) {
                                    case 0:
                                        var2 = global;
                                        var1 = var2.Date;
                                        var0 = var1.now;
                                        var3 = var0.bind(var1)();
                                        var4 = _closure4_slot1;
                                        var1 = _closure4_slot2;
                                        var1 = var3 - var1;
                                        var4 = var4 * var1;
                                        var1 = _closure4_slot3;
                                        var1 = var1 + var4;
                                        _closure4_slot3 = var1;
                                        var1 = _closure4_slot4;
                                        var1 = var1 + var4;
                                        _closure4_slot4 = var1;
                                        var9 = _closure3_slot0;
                                        var8 = var9.scrollToOffset;
                                        var7 = var2.Math;
                                        var6 = var7.min;
                                        var4 = _closure3_slot3;
                                        var5 = _closure4_slot3;
                                        var7 = var6.bind(var7)(var4, var5);
                                        var11 = var2.Math;
                                        var10 = var11.min;
                                        var6 = _closure3_slot4;
                                        var5 = _closure4_slot4;
                                        var6 = var10.bind(var11)(var6, var5);
                                        var5 = false;
                                        var5 = var8.bind(var9)(var7, var6, var5);
                                        _closure4_slot2 = var3;
                                        var6 = var2.Math;
                                        var5 = var6.min;
                                        var3 = _closure4_slot3;
                                        var3 = var5.bind(var6)(var4, var3);
                                        if (!(var3 === var4)) {
                                            _fun46249_ip = 190;
                                            continue _fun46249
                                        }
                                    case 161:
                                        var4 = var2.Math;
                                        var3 = var4.min;
                                        var2 = _closure3_slot4;
                                        var1 = _closure4_slot4;
                                        var1 = var3.bind(var4)(var2, var1);
                                        if (!(var1 !== var2)) {
                                            _fun46249_ip = 202;
                                            continue _fun46249
                                        }
                                    case 190:
                                        var2 = _closure4_slot5;
                                        var1 = undefined;
                                        var1 = var2.bind(var1)();
                                        _fun46249_ip = 212;
                                        continue _fun46249;
                                    case 202:
                                        var1 = _closure4_slot0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 212:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var _closure4_slot5 = var1;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.scrollNow = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.AutoScroll = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);