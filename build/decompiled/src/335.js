// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var4 = this;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var5.bind(var0)(var4, var3);
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var5 = var3.bind(var0)(var2);
            var2 = var5.prototype;
            var3 = Object.create(var2, {
                constructor: {
                    value: var5
                }
            });
            var7 = null;
            var8 = var3;
            var2 = new var8[var5](var7, var6);
            var2 = var2 instanceof Object ? var2 : var3;
            var4._emitter = var2;
            var5 = var4.addListener;
            var3 = 'keyboardDidShow';
            var2 = function(arg0) { // Environment: var1
                var1 = _closure3_slot0;
                var0 = arg0;
                var1._currentlyShowing = var0;
                var0 = undefined;
                return var0;
            };
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.addListener;
            var2 = 'keyboardDidHide';
            var1 = function(arg0) { // Environment: var1
                var1 = _closure3_slot0;
                var0 = null;
                var1._currentlyShowing = var0;
                var0 = undefined;
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addListener';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            var0 = this;
            var3 = var0._emitter;
            var2 = var3.addListener;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'removeAllListeners';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0._emitter;
            var1 = var2.removeAllListeners;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'dismiss';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'isVisible';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._currentlyShowing;
            var0 = !var0;
            var0 = !var0;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'metrics';
        var0.key = var5;
        var5 = function() {
            _fun4962: for (var _fun4962_ip = 0;;) switch (_fun4962_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._currentlyShowing;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun4962_ip = 26;
                        continue _fun4962
                    }
                case 20:
                    var0 = var1.endCoordinates;
                case 26:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'scheduleLayoutAnimation';
        var0.key = var5;
        var4 = function arg0() {
            _fun4963: for (var _fun4963_ip = 0;;) switch (_fun4963_ip) {
                case 0:
                    var0 = arg0;
                    var7 = var0.duration;
                    var6 = var0.easing;
                    var4 = null;
                    var0 = var4 != var7;
                    if (!var0) {
                        _fun4963_ip = 29;
                        continue _fun4963
                    }
                case 23:
                    var1 = 0;
                    var0 = var1 !== var7;
                case 29:
                    if (!var0) {
                        _fun4963_ip = 130;
                        continue _fun4963
                    }
                case 32:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var9 = 4;
                    var0 = var0[var9];
                    var8 = undefined;
                    var2 = var1.bind(var8)(var0);
                    var1 = var2.configureNext;
                    var0 = {};
                    var0.duration = var7;
                    var3 = {};
                    var3.duration = var7;
                    var4 = var4 != var6;
                    if (!var4) {
                        _fun4963_ip = 109;
                        continue _fun4963
                    }
                case 82:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.Types;
                    var4 = var5[var6];
                case 109:
                    if (var4) {
                        _fun4963_ip = 116;
                        continue _fun4963
                    }
                case 112:
                    var4 = 'keyboard';
                case 116:
                    var3.type = var4;
                    var0.update = var3;
                    var0 = var1.bind(var2)(var0);
                case 130:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[5] = var0;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 209, 294, 334]);