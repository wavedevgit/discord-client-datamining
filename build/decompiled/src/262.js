// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var1 = {
        '__constants': null,
        'OS': 'android'
    };
    var5 = function() { // Original name: get Version, environment: var3
        var0 = this;
        var0 = var0.constants;
        var0 = var0.Version;
        return var0;
    };
    var0 = undefined;
    var4 = 'Version';
    Object.defineProperty(var1, var4, {
        get: var5,
        set: var0,
        enumerable: true
    });
    var5 = function() { // Original name: get constants, environment: var3
        _fun3357: for (var _fun3357_ip = 0;;) switch (_fun3357_ip) {
            case 0:
                var0 = this;
                var2 = var0.__constants;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun3357_ip = 55;
                    continue _fun3357
                }
            case 15:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getConstants;
                var1 = var1.bind(var2)();
                var0.__constants = var1;
            case 55:
                var0 = var0.__constants;
                return var0;
        }
    };
    var4 = 'constants';
    Object.defineProperty(var1, var4, {
        get: var5,
        set: var0,
        enumerable: true
    });
    var5 = function() { // Original name: get isTesting, environment: var3
        var0 = false;
        return var0;
    };
    var4 = 'isTesting';
    Object.defineProperty(var1, var4, {
        get: var5,
        set: var0,
        enumerable: true
    });
    var5 = function() { // Original name: get isDisableAnimations, environment: var3
        _fun3359: for (var _fun3359_ip = 0;;) switch (_fun3359_ip) {
            case 0:
                var1 = this;
                var0 = var1.constants;
                var0 = var0.isDisableAnimations;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun3359_ip = 27;
                    continue _fun3359
                }
            case 21:
                var0 = var1.isTesting;
            case 27:
                return var0;
        }
    };
    var4 = 'isDisableAnimations';
    Object.defineProperty(var1, var4, {
        get: var5,
        set: var0,
        enumerable: true
    });
    var5 = function() { // Original name: get isTV, environment: var3
        var0 = this;
        var0 = var0.constants;
        var1 = var0.uiMode;
        var0 = 'tv';
        var0 = var0 === var1;
        return var0;
    };
    var4 = 'isTV';
    Object.defineProperty(var1, var4, {
        get: var5,
        set: var0,
        enumerable: true
    });
    var5 = function() { // Original name: get isVision, environment: var3
        var0 = false;
        return var0;
    };
    var4 = 'isVision';
    Object.defineProperty(var1, var4, {
        get: var5,
        set: var0,
        enumerable: true
    });
    var3 = function(arg0) { // Original name: select, environment: var3
        _fun3362: for (var _fun3362_ip = 0;;) switch (_fun3362_ip) {
            case 0:
                var1 = arg0;
                var0 = 'android';
                var0 = var0 in var1;
                if (var0) {
                    _fun3362_ip = 40;
                    continue _fun3362
                }
            case 14:
                var0 = 'native';
                var0 = var0 in var1;
                if (var0) {
                    _fun3362_ip = 32;
                    continue _fun3362
                }
            case 25:
                var0 = var1.default;
                _fun3362_ip = 38;
                continue _fun3362;
            case 32:
                var0 = var1.native;
            case 38:
                _fun3362_ip = 46;
                continue _fun3362;
            case 40:
                var0 = var1.android;
            case 46:
                return var0;
        }
    };
    var1.select = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [263]);