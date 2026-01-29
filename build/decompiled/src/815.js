// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = 4;
    var1.XHR_READYSTATE_DONE = var2;
    var0 = function() { // Original name: createStealthXhr, environment: var0
        _fun8705: for (var _fun8705_ip = 0;;) switch (_fun8705_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var0 = arguments.length;
                var1 = 0;
                if (!(var0 > var1)) {
                    _fun8705_ip = 21;
                    continue _fun8705
                }
            case 13:
                var0 = arguments[var1];
                if (!(var4 === var0)) {
                    _fun8705_ip = 49;
                    continue _fun8705
                }
            case 21:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var0 = var3.bind(var4)(var0);
                var0 = var0.RN_GLOBAL_OBJ;
                _fun8705_ip = 53;
                continue _fun8705;
            case 49:
                var0 = arguments[var1];
            case 53:
                var1 = var0.XMLHttpRequest;
                if (var1) {
                    _fun8705_ip = 66;
                    continue _fun8705
                }
            case 62:
                var1 = null;
                return var1;
            case 66:
                var0 = var0.XMLHttpRequest;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var6 = var1;
                var0 = new var6[var0](var5);
                var0 = var0 instanceof Object ? var0 : var1;
                var1 = var0.open;
                var1 = var1.__sentry_original__;
                if (!var1) {
                    _fun8705_ip = 125;
                    continue _fun8705
                }
            case 107:
                var1 = var0.open;
                var1 = var1.__sentry_original__;
                var0.open = var1;
            case 125:
                var1 = var0.send;
                var1 = var1.__sentry_original__;
                if (!var1) {
                    _fun8705_ip = 158;
                    continue _fun8705
                }
            case 140:
                var1 = var0.send;
                var1 = var1.__sentry_original__;
                var0.send = var1;
            case 158:
                return var0;
        }
    };
    var1.createStealthXhr = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [816]);