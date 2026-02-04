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
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function arg0, arg1() {
        _fun9486: for (var _fun9486_ip = 0;;) switch (_fun9486_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var0 = undefined;
                var5 = undefined;
                var3 = arguments.length;
                var1 = 2;
                if (!(var3 > var1)) {
                    _fun9486_ip = 30;
                    continue _fun9486
                }
            case 22:
                var3 = arguments[var1];
                if (!(var0 === var3)) {
                    _fun9486_ip = 40;
                    continue _fun9486
                }
            case 30:
                var6 = new Array(1);
                var6[0] = var8;
                _fun9486_ip = 44;
                continue _fun9486;
            case 40:
                var6 = arguments[var1];
            case 44:
                var1 = arguments.length;
                var3 = 3;
                var7 = var1 > var3;
                var9 = 'npm';
                var1 = var9;
                if (!var7) {
                    _fun9486_ip = 81;
                    continue _fun9486
                }
            case 66:
                var7 = arguments[var3];
                var1 = var9;
                if (!(var0 !== var7)) {
                    _fun9486_ip = 81;
                    continue _fun9486
                }
            case 77:
                var1 = arguments[var3];
            case 81:
                var _closure2_slot0 = var1;
                var1 = var2._metadata;
                if (var1) {
                    _fun9486_ip = 96;
                    continue _fun9486
                }
            case 94:
                var1 = {};
            case 96:
                var3 = var1.sdk;
                if (var3) {
                    _fun9486_ip = 194;
                    continue _fun9486
                }
            case 105:
                var3 = {};
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var5 = 'sentry.javascript.';
                var5 = var7.bind(var5)(var8);
                var3.name = var5;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = {};
                    var5 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var2 = ':@sentry/';
                    var1 = arg0;
                    var1 = var4.bind(var3)(var5, var2, var1);
                    var0.name = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 0;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.SDK_VERSION;
                    var0.version = var1;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var3.packages = var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 0;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.SDK_VERSION;
                var3.version = var4;
                var1.sdk = var3;
            case 194:
                var2._metadata = var1;
                return var0;
        }
    };
    var1.applySdkMetadata = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [826]);