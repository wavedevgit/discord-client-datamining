// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = 'registry';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = global;
            var6 = var3.Object;
            var5 = var6.defineProperty;
            var3 = _closure1_slot3;
            var4 = {};
            var7 = true;
            var4.writable = var7;
            var4.value = var0;
            var4 = var5.bind(var6)(var2, var3, var4);
            var1 = _closure1_slot2;
            var2 = var1.bind(var0)(var2, var3);
            var1 = {};
            var2[var3] = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addListener';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun1560: for (var _fun1560_ip = 0;;) switch (_fun1560_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var2 = 'function';
                    var0 = typeof var3;
                    if (!(var2 === var0)) {
                        _fun1560_ip = 134;
                        continue _fun1560
                    }
                case 19:
                    var6 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var4 = undefined;
                    var0 = this;
                    var0 = var6.bind(var4)(var0, var2);
                    var4 = var0[var2];
                    var2 = var4[var5];
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun1560_ip = 90;
                        continue _fun1560
                    }
                case 55:
                    var0 = global;
                    var0 = var0.Set;
                    var6 = var0.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var6;
                    var0 = new var9[var0](var8);
                    var0 = var0 instanceof Object ? var0 : var6;
                    var4[var5] = var0;
                    var2 = var0;
                case 90:
                    var _closure3_slot0 = var2;
                    var0 = {};
                    var4 = arg2;
                    var0.context = var4;
                    var0.listener = var3;
                    var3 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.delete;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.remove = var3;
                    var _closure3_slot1 = var0;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var0);
                    return var0;
                case 134:
                    var0 = global;
                    var2 = var0.TypeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = 'EventEmitter.addListener(...): 2nd argument must be a function.';
                    var9 = var1;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'emit';
        var0.key = var5;
        var5 = function arg0() {
            _fun1562: for (var _fun1562_ip = 0;;) switch (_fun1562_ip) {
                case 0:
                    var0 = undefined;
                    var7 = undefined;
                    var3 = undefined;
                    var4 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = this;
                    var1 = var4.bind(var0)(var1, var2);
                    var2 = var1[var2];
                    var1 = arg0;
                    var4 = var2[var1];
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun1562_ip = 195;
                        continue _fun1562
                    }
                case 46:
                    var6 = arguments.length;
                    var1 = global;
                    var9 = var1.Array;
                    var5 = 1;
                    var8 = var6 > var5;
                    var2 = 0;
                    if (!var8) {
                        _fun1562_ip = 73;
                        continue _fun1562
                    }
                case 69:
                    var2 = var6 - var5;
                case 73:
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var13 = var8;
                    var12 = var2;
                    var2 = new var13[var9](var12, var11);
                    var3 = var2 instanceof Object ? var2 : var8;
                    var8 = var5 < var6;
                    var2 = var5;
                    if (!var8) {
                        _fun1562_ip = 128;
                        continue _fun1562
                    }
                case 106:
                    var10 = var3;
                    var9 = var2 - var5;
                    var8 = arguments[var2];
                    var10[var9] = var8;
                    var2 = var2 + 1;
                    if (var2 < var6) {
                        _fun1562_ip = 106;
                        continue _fun1562
                    }
                case 128:
                    var2 = var1.Array;
                    var1 = var2.from;
                    var4 = var1.bind(var2)(var4);
                    var1 = var4;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                case 150:
                    var4 = var1().value;
                    var5 = var2;
                    if (!(var5 !== var0)) {
                        _fun1562_ip = 195;
                        continue _fun1562
                    }
                case 161: // try_start_0
                    var7 = var4.listener;
                    var6 = var7.apply;
                    var5 = var4.context;
                    var4 = var3;
                    var4 = var6.bind(var7)(var5, var4);
                case 186: // try_end0
                    _fun1562_ip = 150;
                    continue _fun1562;
                case 188: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 195:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'removeAllListeners';
        var0.key = var5;
        var5 = function arg0() {
            _fun1563: for (var _fun1563_ip = 0;;) switch (_fun1563_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun1563_ip = 41;
                        continue _fun1563
                    }
                case 12:
                    var4 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2);
                    var0 = var0[var2];
                    var0 = delete var0[var1];
                    _fun1563_ip = 66;
                    continue _fun1563;
                case 41:
                    var1 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var3, var2);
                    var0 = {};
                    var1[var2] = var0;
                case 66:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'listenerCount';
        var0.key = var5;
        var4 = function arg0() {
            _fun1564: for (var _fun1564_ip = 0;;) switch (_fun1564_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var2 = undefined;
                    var0 = this;
                    var0 = var3.bind(var2)(var0, var1);
                    var1 = var0[var1];
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = 0;
                    if (var2) {
                        _fun1564_ip = 49;
                        continue _fun1564
                    }
                case 44:
                    var0 = var1.size;
                case 49:
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 99, 100]);