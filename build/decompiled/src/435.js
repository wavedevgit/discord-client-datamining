// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = function() { // Original name: getState, environment: var0
        _fun5986: for (var _fun5986_ip = 0;;) switch (_fun5986_ip) {
            case 0:
                var1 = _closure1_slot3;
                var4 = null;
                if (!(var4 == var1)) {
                    _fun5986_ip = 206;
                    continue _fun5986
                }
            case 18:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 0;
                var1 = var6[var1];
                var7 = undefined;
                var1 = var2.bind(var7)(var1);
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var2;
                var1 = new var11[var1](var10);
                var2 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var1 = 1;
                var1 = var6[var1];
                var1 = var5.bind(var7)(var1);
                var6 = var1.default;
                if (!(var4 != var6)) {
                    _fun5986_ip = 181;
                    continue _fun5986
                }
            case 88:
                var1 = {};
                var1.NativeAppearance = var6;
                var1.appearance = var4;
                var1.eventEmitter = var2;
                var _closure2_slot1 = var1;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 2;
                var4 = var8[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var5;
                var10 = var6;
                var4 = new var11[var4](var10, var9);
                var6 = var4 instanceof Object ? var4 : var5;
                var5 = var6.addListener;
                var4 = 'appearanceChanged';
                var3 = function(arg0) { // Environment: var3
                    var3 = _closure2_slot1;
                    var2 = {};
                    var5 = _closure1_slot5;
                    var0 = arg0;
                    var4 = var0.colorScheme;
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var2.colorScheme = var4;
                    var3.appearance = var2;
                    var4 = _closure2_slot0;
                    var3 = var4.emit;
                    var1 = _closure2_slot1;
                    var2 = var1.appearance;
                    var1 = 'change';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var3 = var5.bind(var6)(var4, var3);
                var _closure1_slot3 = var1;
                _fun5986_ip = 200;
                continue _fun5986;
            case 181:
                var1 = {
                    'NativeAppearance': null,
                    'appearance': null
                };
                var1.eventEmitter = var2;
                _closure1_slot3 = var1;
            case 200:
                var1 = _closure1_slot3;
                return var1;
            case 206:
                var0 = _closure1_slot3;
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var2 = function(arg0) { // Original name: toColorScheme, environment: var0
        _fun5988: for (var _fun5988_ip = 0;;) switch (_fun5988_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var1 = 'dark';
                var2 = var1 === var0;
                if (var2) {
                    _fun5988_ip = 47;
                    continue _fun5988
                }
            case 39:
                var1 = 'light';
                var2 = var1 === var0;
            case 47:
                if (var2) {
                    _fun5988_ip = 56;
                    continue _fun5988
                }
            case 50:
                var1 = null;
                var2 = var1 == var0;
            case 56:
                var1 = "Unrecognized color scheme. Did you mean 'dark', 'light' or null?";
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot5 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function() { // Original name: getColorScheme, environment: var0
        _fun5989: for (var _fun5989_ip = 0;;) switch (_fun5989_ip) {
            case 0:
                var0 = _closure1_slot4;
                var5 = undefined;
                var1 = var0.bind(var5)();
                var6 = var1.NativeAppearance;
                var4 = null;
                var2 = var4 != var6;
                var0 = null;
                if (!var2) {
                    _fun5989_ip = 84;
                    continue _fun5989
                }
            case 30:
                var2 = var1.appearance;
                if (!(var4 == var2)) {
                    _fun5989_ip = 72;
                    continue _fun5989
                }
            case 40:
                var2 = {};
                var4 = _closure1_slot5;
                var3 = var6.getColorScheme;
                var3 = var3.bind(var6)();
                var4 = var4.bind(var5)(var3);
                var2.colorScheme = var3;
                var1.appearance = var2;
            case 72:
                var1 = var1.appearance;
                var0 = var1.colorScheme;
            case 84:
                return var0;
        }
    };
    var1.getColorScheme = var2;
    var2 = function(arg0) { // Original name: setColorScheme, environment: var0
        _fun5990: for (var _fun5990_ip = 0;;) switch (_fun5990_ip) {
            case 0:
                var6 = arg0;
                var1 = _closure1_slot4;
                var0 = undefined;
                var2 = var1.bind(var0)();
                var5 = var2.NativeAppearance;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun5990_ip = 87;
                    continue _fun5990
                }
            case 28:
                var4 = var5.setColorScheme;
                var7 = var1 != var6;
                var1 = 'unspecified';
                if (!var7) {
                    _fun5990_ip = 50;
                    continue _fun5990
                }
            case 47:
                var1 = var6;
            case 50:
                var1 = var4.bind(var5)(var1);
                var1 = {};
                var4 = _closure1_slot5;
                var3 = var5.getColorScheme;
                var3 = var3.bind(var5)();
                var4 = var4.bind(var0)(var3);
                var1.colorScheme = var3;
                var2.appearance = var1;
            case 87:
                return var0;
        }
    };
    var1.setColorScheme = var2;
    var0 = function(arg0) { // Original name: addChangeListener, environment: var0
        var1 = _closure1_slot4;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var3 = var0.eventEmitter;
        var2 = var3.addListener;
        var1 = 'change';
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.addChangeListener = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [98, 436, 209, 44]);