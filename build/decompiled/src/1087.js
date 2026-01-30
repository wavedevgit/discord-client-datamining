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
    var2 = function(arg0) { // Original name: baggageHeaderHasSentryValues, environment: var0
        var2 = arg0;
        var1 = var2.split;
        var0 = ',';
        var2 = var1.bind(var2)(var0);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.trim;
            var2 = var0.bind(var1)();
            var1 = var2.startsWith;
            var0 = 'sentry-';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.baggageHeaderHasSentryValues = var2;
    var2 = function(arg0) { // Original name: createHeadersSafely, environment: var0
        _fun11955: for (var _fun11955_ip = 0;;) switch (_fun11955_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = global;
                var2 = var1.Headers;
                var3 = var0;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
            case 34: // try_end0
                return var0;
            case 36: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = undefined;
                return var0;
        }
    };
    var1.createHeadersSafely = var2;
    var2 = function(arg0) { // Original name: getFullURL, environment: var0
        _fun11956: for (var _fun11956_ip = 0;;) switch (_fun11956_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = global;
                var3 = var1.URL;
                var2 = var0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var1);
                var0 = var0.WINDOW;
                var0 = var0.location;
                var5 = var0.origin;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var1;
                var6 = var2;
                var0 = new var7[var3](var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                var0 = var0.href;
            case 84: // try_end0
                return var0;
            case 86: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = undefined;
                return var0;
        }
    };
    var1.getFullURL = var2;
    var0 = function(arg0) { // Original name: isPerformanceResourceTiming, environment: var0
        _fun11957: for (var _fun11957_ip = 0;;) switch (_fun11957_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.entryType;
                var0 = 'resource';
                var0 = var0 === var1;
                if (!var0) {
                    _fun11957_ip = 28;
                    continue _fun11957
                }
            case 20:
                var1 = 'initiatorType';
                var0 = var1 in var2;
            case 28:
                if (!var0) {
                    _fun11957_ip = 48;
                    continue _fun11957
                }
            case 31:
                var1 = var2.nextHopProtocol;
                var3 = 'string';
                var1 = typeof var1;
                var0 = var3 === var1;
            case 48:
                if (!var0) {
                    _fun11957_ip = 87;
                    continue _fun11957
                }
            case 51:
                var3 = var2.initiatorType;
                var1 = 'fetch';
                var1 = var1 === var3;
                if (var1) {
                    _fun11957_ip = 84;
                    continue _fun11957
                }
            case 68:
                var3 = var2.initiatorType;
                var2 = 'xmlhttprequest';
                var1 = var2 === var3;
            case 84:
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var1.isPerformanceResourceTiming = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1025]);