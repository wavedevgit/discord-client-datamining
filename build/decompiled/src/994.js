// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun10178: for (var _fun10178_ip = 0;;) switch (_fun10178_ip) {
        case 0:
            var8 = require;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var8;
            var _closure1_slot1 = var9;
            var0 = global;
            var5 = var0.Object;
            var3 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var5)(var2, var0, var1);
            var0 = 0;
            var1 = var9[var0];
            var0 = undefined;
            var1 = var8.bind(var0)(var1);
            var3 = var1.AppRegistry;
            var7 = var1.Platform;
            var5 = var1.TurboModuleRegistry;
            var1 = {};
            var6 = {};
            var10 = function(arg0) { // Original name: parseErrorStack, environment: var4
                _fun10179: for (var _fun10179_ip = 0;;) switch (_fun10179_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.default;
                        if (!var1) {
                            _fun10179_ip = 52;
                            continue _fun10179
                        }
                    case 36:
                        var1 = var2.default;
                        var4 = 'function';
                        var1 = typeof var1;
                        if (!(var4 !== var1)) {
                            _fun10179_ip = 59;
                            continue _fun10179
                        }
                    case 52:
                        var0 = var2.bind(var0)(var3);
                        _fun10179_ip = 69;
                        continue _fun10179;
                    case 59:
                        var1 = var2.default;
                        var0 = var1.bind(var2)(var3);
                    case 69:
                        return var0;
                }
            };
            var6.parseErrorStack = var10;
            var10 = function(arg0, arg1) { // Original name: symbolicateStackTrace, environment: var4
                _fun10180: for (var _fun10180_ip = 0;;) switch (_fun10180_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = arg1;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.default;
                        if (!var1) {
                            _fun10180_ip = 55;
                            continue _fun10180
                        }
                    case 39:
                        var1 = var2.default;
                        var5 = 'function';
                        var1 = typeof var1;
                        if (!(var5 !== var1)) {
                            _fun10180_ip = 63;
                            continue _fun10180
                        }
                    case 55:
                        var0 = var2.bind(var0)(var4, var3);
                        _fun10180_ip = 74;
                        continue _fun10180;
                    case 63:
                        var1 = var2.default;
                        var0 = var1.bind(var2)(var4, var3);
                    case 74:
                        return var0;
                }
            };
            var6.symbolicateStackTrace = var10;
            var10 = function() { // Original name: getDevServer, environment: var4
                _fun10181: for (var _fun10181_ip = 0;;) switch (_fun10181_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 3;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.default;
                        if (!var1) {
                            _fun10181_ip = 49;
                            continue _fun10181
                        }
                    case 33:
                        var1 = var2.default;
                        var3 = 'function';
                        var1 = typeof var1;
                        if (!(var3 !== var1)) {
                            _fun10181_ip = 55;
                            continue _fun10181
                        }
                    case 49:
                        var0 = var2.bind(var0)();
                        _fun10181_ip = 64;
                        continue _fun10181;
                    case 55:
                        var1 = var2.default;
                        var0 = var1.bind(var2)();
                    case 64:
                        return var0;
                }
            };
            var6.getDevServer = var10;
            var1.Devtools = var6;
            var6 = 4;
            var6 = var9[var6];
            var6 = var8.bind(var0)(var6);
            var1.Promise = var6;
            var6 = {};
            var8 = function(arg0, arg1) { // Original name: polyfillGlobal, environment: var4
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.polyfillGlobal;
                var2 = arg0;
                var1 = arg1;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var6.polyfillGlobal = var8;
            var1.Utilities = var6;
            var6 = {};
            var8 = var7.constants;
            var9 = null;
            var7 = undefined;
            if (!(var9 !== var8)) {
                _fun10178_ip = 182;
                continue _fun10178
            }
        case 170:
            var7 = undefined;
            if (!(var7 !== var8)) {
                _fun10178_ip = 182;
                continue _fun10178
            }
        case 176:
            var7 = var8.reactNativeVersion;
        case 182:
            var6.version = var7;
            var1.ReactNativeVersion = var6;
            var1.TurboModuleRegistry = var5;
            var1.AppRegistry = var3;
            var3 = {};
            var4 = function(arg0) { // Original name: requireNativeComponent, environment: var4
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.requireNativeComponent;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3.requireNativeComponent = var4;
            var1.ReactNative = var3;
            var2.ReactNativeLibraries = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 184, 995, 996, 170, 126]);