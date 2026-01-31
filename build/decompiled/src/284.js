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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2._listeners = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addListener';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var2 = var0._listeners;
            var1 = var2.push;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'removeListener';
        var0.key = var5;
        var5 = function arg0() {
            _fun4453: for (var _fun4453_ip = 0;;) switch (_fun4453_ip) {
                case 0:
                    var0 = this;
                    var3 = var0._listeners;
                    var2 = var3.indexOf;
                    var1 = arg0;
                    var3 = var2.bind(var3)(var1);
                    var1 = -1;
                    if (!(var3 > var1)) {
                        _fun4453_ip = 54;
                        continue _fun4453
                    }
                case 33:
                    var2 = var0._listeners;
                    var1 = var2.splice;
                    var0 = 1;
                    var0 = var1.bind(var2)(var3, var0);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'emitEvent';
        var0.key = var5;
        var4 = function arg0() {
            _fun4454: for (var _fun4454_ip = 0;;) switch (_fun4454_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._listeners;
                    var3 = var2.length;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun4454_ip = 56;
                        continue _fun4454
                    }
                case 22:
                    var3 = arg0;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    var _closure3_slot0 = var2;
                    var2 = var1._listeners;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7]);