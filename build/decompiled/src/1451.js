// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var1);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = function arg0, arg1() {
        var2 = this;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = undefined;
        var3 = var4.bind(var0)(var2, var3);
        var2._isInternetReachable = var0;
        var3 = null;
        var2._currentInternetReachabilityCheckHandler = var3;
        var2._currentTimeoutHandle = var3;
        var3 = function(arg0) { // Environment: var1
            _fun16763: for (var _fun16763_ip = 0;;) switch (_fun16763_ip) {
                case 0:
                    var0 = arg0;
                    var2 = _closure2_slot0;
                    var2 = var2._isInternetReachable;
                    if (!(var2 !== var0)) {
                        _fun16763_ip = 47;
                        continue _fun16763
                    }
                case 20:
                    var2 = _closure2_slot0;
                    var2._isInternetReachable = var0;
                    var1 = var2._listener;
                    var0 = var2._isInternetReachable;
                    var0 = var1.bind(var2)(var0);
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var2._setIsInternetReachable = var3;
        var3 = function(arg0) { // Environment: var1
            _fun16764: for (var _fun16764_ip = 0;;) switch (_fun16764_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var1 = var1._currentInternetReachabilityCheckHandler;
                    var3 = null;
                    if (!(var3 !== var1)) {
                        _fun16764_ip = 45;
                        continue _fun16764
                    }
                case 19:
                    var1 = _closure2_slot0;
                    var4 = var1._currentInternetReachabilityCheckHandler;
                    var2 = var4.cancel;
                    var2 = var2.bind(var4)();
                    var1._currentInternetReachabilityCheckHandler = var3;
                case 45:
                    var1 = _closure2_slot0;
                    var1 = var1._currentTimeoutHandle;
                    if (!(var3 !== var1)) {
                        _fun16764_ip = 90;
                        continue _fun16764
                    }
                case 59:
                    var1 = global;
                    var5 = var1.clearTimeout;
                    var1 = _closure2_slot0;
                    var4 = var1._currentTimeoutHandle;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var1._currentTimeoutHandle = var3;
                case 90:
                    var1 = arg0;
                    if (!var1) {
                        _fun16764_ip = 119;
                        continue _fun16764
                    }
                case 96:
                    var1 = _closure2_slot0;
                    var2 = var1._configuration;
                    var1 = var2.reachabilityShouldRun;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun16764_ip = 138;
                        continue _fun16764
                    }
                case 119:
                    var4 = _closure2_slot0;
                    var2 = var4._setIsInternetReachable;
                    var1 = false;
                    var1 = var2.bind(var4)(var1);
                    _fun16764_ip = 186;
                    continue _fun16764;
                case 138:
                    var1 = _closure2_slot0;
                    var1 = var1._isInternetReachable;
                    if (var1) {
                        _fun16764_ip = 166;
                        continue _fun16764
                    }
                case 151:
                    var2 = _closure2_slot0;
                    var1 = var2._setIsInternetReachable;
                    var1 = var1.bind(var2)(var3);
                case 166:
                    var1 = _closure2_slot0;
                    var0 = var1._checkInternetReachability;
                    var0 = var0.bind(var1)();
                    var1._currentInternetReachabilityCheckHandler = var0;
                case 186:
                    var0 = undefined;
                    return var0;
            }
        };
        var2._setExpectsConnection = var3;
        var3 = function() { // Environment: var1
            var2 = global;
            var0 = var2.AbortController;
            var3 = var0.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var0
                }
            });
            var10 = var3;
            var0 = new var10[var0](var9);
            var0 = var0 instanceof Object ? var0 : var3;
            var _closure3_slot1 = var0;
            var5 = var2.fetch;
            var6 = _closure2_slot0;
            var3 = var6._configuration;
            var4 = var3.reachabilityUrl;
            var3 = {};
            var7 = var6._configuration;
            var7 = var7.reachabilityHeaders;
            var3.headers = var7;
            var6 = var6._configuration;
            var6 = var6.reachabilityMethod;
            var3.method = var6;
            var6 = 'no-cache';
            var3.cache = var6;
            var0 = var0.signal;
            var3.signal = var0;
            var0 = undefined;
            var7 = var5.bind(var0)(var4, var3);
            var4 = var2.Promise;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var9 = function(arg0, arg1) { // Environment: var1
                var0 = arg1;
                var _closure4_slot0 = var0;
                var0 = global;
                var3 = var0.setTimeout;
                var0 = _closure2_slot0;
                var0 = var0._configuration;
                var2 = var0.reachabilityRequestTimeout;
                var0 = undefined;
                var1 = function() { // Environment: var1
                    var2 = _closure4_slot0;
                    var1 = undefined;
                    var0 = 'timedout';
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var2 = var3.bind(var0)(var1, var2);
                var _closure3_slot0 = var2;
                return var0;
            };
            var10 = var3;
            var0 = new var10[var4](var9, var8);
            var6 = var0 instanceof Object ? var0 : var3;
            var0 = function() {
                var0 = undefined;
                return var0;
            };
            var _closure3_slot2 = var0;
            var4 = var2.Promise;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var9 = function(arg0, arg1) { // Environment: var1
                var1 = arg1;
                var _closure4_slot0 = var1;
                var0 = function() {
                    var2 = _closure4_slot0;
                    var1 = undefined;
                    var0 = 'canceled';
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                _closure3_slot2 = var0;
                var0 = undefined;
                return var0;
            };
            var10 = var3;
            var0 = new var10[var4](var9, var8);
            var5 = var0 instanceof Object ? var0 : var3;
            var0 = {};
            var4 = var2.Promise;
            var3 = var4.race;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg0) { // Environment: var1
                var0 = _closure2_slot0;
                var2 = var0._configuration;
                var1 = var2.reachabilityTest;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg0) { // Environment: var1
                _fun16772: for (var _fun16772_ip = 0;;) switch (_fun16772_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var3 = var1._setIsInternetReachable;
                        var2 = arg0;
                        var2 = var3.bind(var1)(var2);
                        var2 = var1._isInternetReachable;
                        var1 = _closure2_slot0;
                        var1 = var1._configuration;
                        if (var2) {
                            _fun16772_ip = 48;
                            continue _fun16772
                        }
                    case 40:
                        var4 = var1.reachabilityShortTimeout;
                        _fun16772_ip = 54;
                        continue _fun16772;
                    case 48:
                        var4 = var1.reachabilityLongTimeout;
                    case 54:
                        var2 = _closure2_slot0;
                        var0 = global;
                        var3 = var0.setTimeout;
                        var1 = var2._checkInternetReachability;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1, var4);
                        var2._currentTimeoutHandle = var1;
                        return var0;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.catch;
            var2 = function(arg0) { // Environment: var1
                _fun16773: for (var _fun16773_ip = 0;;) switch (_fun16773_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 'canceled';
                        if (!(var0 !== var1)) {
                            _fun16773_ip = 98;
                            continue _fun16773
                        }
                    case 11:
                        var0 = 'timedout';
                        if (!(var0 === var1)) {
                            _fun16773_ip = 36;
                            continue _fun16773
                        }
                    case 19:
                        var1 = _closure3_slot1;
                        var0 = var1.abort;
                        var0 = var0.bind(var1)();
                    case 36:
                        var1 = _closure2_slot0;
                        var2 = var1._setIsInternetReachable;
                        var0 = false;
                        var0 = var2.bind(var1)(var0);
                        var0 = global;
                        var4 = var0.setTimeout;
                        var3 = var1._checkInternetReachability;
                        var0 = var1._configuration;
                        var2 = var0.reachabilityShortTimeout;
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3, var2);
                        var1._currentTimeoutHandle = var0;
                        _fun16773_ip = 115;
                        continue _fun16773;
                    case 98:
                        var1 = _closure3_slot1;
                        var0 = var1.abort;
                        var0 = var0.bind(var1)();
                    case 115:
                        var0 = undefined;
                        return var0;
                }
            };
            var5 = var3.bind(var4)(var2);
            var4 = var5.then;
            var3 = function() { // Environment: var1
                var0 = global;
                var2 = var0.clearTimeout;
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var2 = function(arg0) { // Environment: var1
                var0 = global;
                var2 = var0.clearTimeout;
                var1 = _closure3_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = arg0;
                throw var0;
            };
            var2 = var4.bind(var5)(var3, var2);
            var0.promise = var2;
            var1 = _closure3_slot2;
            var0.cancel = var1;
            return var0;
        };
        var2._checkInternetReachability = var3;
        var3 = function(arg0) { // Environment: var1
            _fun16776: for (var _fun16776_ip = 0;;) switch (_fun16776_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.isInternetReachable;
                    var2 = 'boolean';
                    var1 = typeof var1;
                    if (!(var2 === var1)) {
                        _fun16776_ip = 42;
                        continue _fun16776
                    }
                case 20:
                    var2 = _closure2_slot0;
                    var2 = var2._configuration;
                    var2 = var2.useNativeReachability;
                    if (var2) {
                        _fun16776_ip = 68;
                        continue _fun16776
                    }
                case 42:
                    var4 = _closure2_slot0;
                    var3 = var4._setExpectsConnection;
                    var2 = var0.isConnected;
                    var2 = var3.bind(var4)(var2);
                    _fun16776_ip = 89;
                    continue _fun16776;
                case 68:
                    var2 = _closure2_slot0;
                    var1 = var2._setIsInternetReachable;
                    var0 = var0.isInternetReachable;
                    var0 = var1.bind(var2)(var0);
                case 89:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.update = var3;
        var3 = function() { // Environment: var1
            var0 = _closure2_slot0;
            var0 = var0._isInternetReachable;
            return var0;
        };
        var2.currentState = var3;
        var1 = function() { // Environment: var1
            _fun16778: for (var _fun16778_ip = 0;;) switch (_fun16778_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = var1._currentInternetReachabilityCheckHandler;
                    var1 = null;
                    if (!(var1 !== var2)) {
                        _fun16778_ip = 45;
                        continue _fun16778
                    }
                case 19:
                    var2 = _closure2_slot0;
                    var4 = var2._currentInternetReachabilityCheckHandler;
                    var3 = var4.cancel;
                    var3 = var3.bind(var4)();
                    var2._currentInternetReachabilityCheckHandler = var1;
                case 45:
                    var2 = _closure2_slot0;
                    var2 = var2._currentTimeoutHandle;
                    if (!(var1 !== var2)) {
                        _fun16778_ip = 90;
                        continue _fun16778
                    }
                case 59:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var0 = _closure2_slot0;
                    var3 = var0._currentTimeoutHandle;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var0._currentTimeoutHandle = var1;
                case 90:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.tearDown = var1;
        var1 = arg0;
        var2._configuration = var1;
        var1 = arg1;
        var2._listener = var1;
        return var0;
    };
    var _closure1_slot1 = var1;
    var1 = var3.bind(var0)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6]);