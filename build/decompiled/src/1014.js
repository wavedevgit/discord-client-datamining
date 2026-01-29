// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() { // Original name: getPromisePolyfill, environment: var0
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot2 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var3 = function() { // Original name: polyfillPromise, environment: var0
        _fun10370: for (var _fun10370_ip = 0;;) switch (_fun10370_ip) {
            case 0:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 0;
                var3 = var0[var4];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = var3.ReactNativeLibraries;
                var3 = var3.Utilities;
                if (var3) {
                    _fun10370_ip = 85;
                    continue _fun10370
                }
            case 41:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var3 = var6[var3];
                var3 = var5.bind(var0)(var3);
                var6 = var3.debug;
                var5 = var6.warn;
                var3 = 'Could not polyfill Promise. React Native Libraries Utilities not found.';
                var3 = var5.bind(var6)(var3);
                _fun10370_ip = 171;
                continue _fun10370;
            case 85:
                var3 = _closure1_slot2;
                var3 = var3.bind(var0)();
                var _closure2_slot0 = var3;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 2;
                var5 = var2[var5];
                var5 = var3.bind(var0)(var5);
                var5 = 3;
                var5 = var2[var5];
                var5 = var3.bind(var0)(var5);
                var2 = var2[var4];
                var2 = var3.bind(var0)(var2);
                var2 = var2.ReactNativeLibraries;
                var4 = var2.Utilities;
                var3 = var4.polyfillGlobal;
                var2 = 'Promise';
                var1 = function() { // Environment: var1
                    var0 = _closure2_slot0;
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
            case 171:
                return var0;
        }
    };
    var1.polyfillPromise = var3;
    var1.getPromisePolyfill = var2;
    var2 = function() { // Original name: requireRejectionTracking, environment: var0
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1.requireRejectionTracking = var2;
    var0 = function() { // Original name: checkPromiseAndWarn, environment: var0
        _fun10373: for (var _fun10373_ip = 0;;) switch (_fun10373_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
            case 4: // try_start_0
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 0;
                var3 = var6[var3];
                var3 = var5.bind(var0)(var3);
                var3 = var3.ReactNativeLibraries;
                var4 = var3.Promise;
                var3 = 4;
                var3 = var6[var3];
                var3 = var5.bind(var0)(var3);
                var5 = _closure1_slot2;
                var2 = var5.bind(var0)();
                if (!(var4 !== var3)) {
                    _fun10373_ip = 103;
                    continue _fun10373
                }
            case 61:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.debug;
                var4 = var5.warn;
                var3 = 'You appear to have multiple versions of the "promise" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.';
                var3 = var4.bind(var5)(var3);
            case 103:
                var3 = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 6;
                var2 = var5[var2];
                var2 = var4.bind(var0)(var2);
                var2 = var2.RN_GLOBAL_OBJ;
                var2 = var2.Promise;
                if (!(var3 === var2)) {
                    _fun10373_ip = 185;
                    continue _fun10373
                }
            case 141:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.debug;
                var3 = var4.log;
                var2 = 'Unhandled promise rejections will be caught by Sentry.';
                var2 = var3.bind(var4)(var2);
                _fun10373_ip = 227;
                continue _fun10373;
            case 185:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.debug;
                var2 = var3.warn;
                var1 = 'Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.';
                var1 = var2.bind(var3)(var1);
            case 227: // try_end0
                _fun10373_ip = 276;
                continue _fun10373;
            case 229: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.debug;
                var2 = var3.warn;
                var1 = 'Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.';
                var1 = var2.bind(var3)(var1);
            case 276:
                return var0;
        }
    };
    var1.checkPromiseAndWarn = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [994, 817, 1015, 1017, 1018, 1019, 816]);