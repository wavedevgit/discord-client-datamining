// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var4 = function arg0() {
        _fun2324: for (var _fun2324_ip = 0;;) switch (_fun2324_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot2;
                var2 = var2 !== var1;
                if (!var2) {
                    _fun2324_ip = 23;
                    continue _fun2324
                }
            case 17:
                var3 = null;
                var2 = var3 != var1;
            case 23:
                if (!var2) {
                    _fun2324_ip = 30;
                    continue _fun2324
                }
            case 26:
                _closure1_slot2 = var1;
            case 30:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var3 = function arg0() {
        _fun2325: for (var _fun2325_ip = 0;;) switch (_fun2325_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot2;
                var0 = var0 === var3;
                if (!var0) {
                    _fun2325_ip = 23;
                    continue _fun2325
                }
            case 17:
                var2 = null;
                var0 = var2 != var3;
            case 23:
                if (!var0) {
                    _fun2325_ip = 32;
                    continue _fun2325
                }
            case 26:
                var0 = null;
                _closure1_slot2 = var0;
            case 32:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var1, var5, var6);
    var5 = null;
    var _closure1_slot2 = var5;
    var0 = var0.Set;
    var5 = var0.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var0
        }
    });
    var12 = var5;
    var0 = new var12[var0](var11);
    var0 = var0 instanceof Object ? var0 : var5;
    var _closure1_slot3 = var0;
    var0 = {};
    var5 = function() {
        var0 = _closure1_slot2;
        return var0;
    };
    var0.currentlyFocusedInput = var5;
    var0.focusInput = var4;
    var0.blurInput = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.findNodeHandle;
        var0 = _closure1_slot2;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.currentlyFocusedField = var3;
    var3 = function arg0() {
        var0 = undefined;
        return var0;
    };
    var0.focusField = var3;
    var3 = function arg0() {
        var0 = undefined;
        return var0;
    };
    var0.blurField = var3;
    var3 = function arg0() {
        _fun2330: for (var _fun2330_ip = 0;;) switch (_fun2330_ip) {
            case 0:
                var2 = arg0;
                var1 = 'number';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun2330_ip = 110;
                    continue _fun2330
                }
            case 14:
                var3 = null;
                if (!(var3 != var2)) {
                    _fun2330_ip = 110;
                    continue _fun2330
                }
            case 20:
                var1 = _closure1_slot2;
                if (!(var1 !== var2)) {
                    _fun2330_ip = 60;
                    continue _fun2330
                }
            case 31:
                var1 = var2.currentProps;
                var5 = var3 == var1;
                var3 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun2330_ip = 54;
                    continue _fun2330
                }
            case 48:
                var4 = var1.editable;
            case 54:
                var1 = false;
                if (!(var1 === var4)) {
                    _fun2330_ip = 64;
                    continue _fun2330
                }
            case 60:
                var1 = undefined;
                return var1;
            case 64:
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var2);
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Commands;
                var0 = var1.focus;
                var0 = var0.bind(var1)(var2);
            case 110:
                var0 = undefined;
                return var0;
        }
    };
    var0.focusTextInput = var3;
    var3 = function arg0() {
        _fun2331: for (var _fun2331_ip = 0;;) switch (_fun2331_ip) {
            case 0:
                var2 = arg0;
                var1 = 'number';
                var0 = typeof var2;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun2331_ip = 28;
                    continue _fun2331
                }
            case 17:
                var1 = _closure1_slot2;
                var0 = var1 === var2;
            case 28:
                if (!var0) {
                    _fun2331_ip = 37;
                    continue _fun2331
                }
            case 31:
                var1 = null;
                var0 = var1 != var2;
            case 37:
                if (!var0) {
                    _fun2331_ip = 91;
                    continue _fun2331
                }
            case 40:
                var1 = _closure1_slot5;
                var3 = undefined;
                var1 = var1.bind(var3)(var2);
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Commands;
                var0 = var1.blur;
                var0 = var0.bind(var1)(var2);
            case 91:
                var0 = undefined;
                return var0;
        }
    };
    var0.blurTextInput = var3;
    var3 = function arg0() {
        _fun2332: for (var _fun2332_ip = 0;;) switch (_fun2332_ip) {
            case 0:
                var2 = arg0;
                var1 = 'number';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun2332_ip = 31;
                    continue _fun2332
                }
            case 14:
                var1 = _closure1_slot3;
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
            case 31:
                var0 = undefined;
                return var0;
        }
    };
    var0.registerInput = var3;
    var3 = function arg0() {
        _fun2333: for (var _fun2333_ip = 0;;) switch (_fun2333_ip) {
            case 0:
                var2 = arg0;
                var1 = 'number';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun2333_ip = 31;
                    continue _fun2333
                }
            case 14:
                var1 = _closure1_slot3;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 31:
                var0 = undefined;
                return var0;
        }
    };
    var0.unregisterInput = var3;
    var2 = function arg0() {
        _fun2334: for (var _fun2334_ip = 0;;) switch (_fun2334_ip) {
            case 0:
                var3 = arg0;
                var1 = 'number';
                var0 = typeof var3;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun2334_ip = 34;
                    continue _fun2334
                }
            case 17:
                var2 = _closure1_slot3;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 34:
                return var0;
        }
    };
    var0.isTextInput = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [117, 144]);