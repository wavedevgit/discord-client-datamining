// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
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
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var3 = var5.bind(var0)(var1);
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = function arg0() {
        var2 = this;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot4;
        var4 = _closure1_slot5;
        var0 = undefined;
        var4 = var5.bind(var0)(var2, var4);
        var4 = null;
        var2._nativeEventSubscription = var4;
        var5 = global;
        var5 = var5.Set;
        var6 = var5.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var5
            }
        });
        var11 = var6;
        var5 = new var11[var5](var10);
        var5 = var5 instanceof Object ? var5 : var6;
        var2._subscriptions = var5;
        var2._latestState = var4;
        var4 = function(arg0) { // Environment: var3
            var3 = arg0;
            var1 = _closure2_slot0;
            var4 = var1._internetReachability;
            var2 = var4.update;
            var2 = var2.bind(var4)(var3);
            var2 = var1._convertState;
            var2 = var2.bind(var1)(var3);
            var _closure3_slot0 = var2;
            var1._latestState = var2;
            var2 = var1._subscriptions;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = arg0;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2._handleNativeStateUpdate = var4;
        var4 = function(arg0) { // Environment: var3
            _fun16741: for (var _fun16741_ip = 0;;) switch (_fun16741_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var2 = var2._latestState;
                    if (!var2) {
                        _fun16741_ip = 91;
                        continue _fun16741
                    }
                case 18:
                    var2 = global;
                    var6 = var2.Object;
                    var5 = var6.assign;
                    var1 = _closure2_slot0;
                    var4 = var1._latestState;
                    var3 = {};
                    var2 = arg0;
                    var3.isInternetReachable = var2;
                    var2 = {};
                    var2 = var5.bind(var6)(var2, var4, var3);
                    var _closure3_slot0 = var2;
                    var1._latestState = var2;
                    var2 = var1._subscriptions;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 91:
                    var0 = undefined;
                    return var0;
            }
        };
        var2._handleInternetReachabilityUpdate = var4;
        var4 = function() { // Environment: var3
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun16745: for (var _fun16745_ip = 0;;) switch (_fun16745_ip) {
                        case 0:
                            StartGenerator();
                            var5 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun16745_ip = 144;
                                continue _fun16745
                            }
                        case 15:
                            var4 = undefined;
                            var _closure5_slot0 = var4;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 3;
                            var1 = var6[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.getCurrentState;
                            var1 = var1.bind(var2)(var5);
                            SaveGenerator(address = 59);
                        case 57:
                            return var1;
                        case 59:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun16745_ip = 141;
                                continue _fun16745
                            }
                        case 65:
                            var6 = _closure2_slot0;
                            var7 = var6._internetReachability;
                            var2 = var7.update;
                            var2 = var2.bind(var7)(var1);
                            var2 = var6._convertState;
                            var2 = var2.bind(var6)(var1);
                            _closure5_slot0 = var2;
                            if (var5) {
                                _fun16745_ip = 138;
                                continue _fun16745
                            }
                        case 107:
                            var4 = _closure2_slot0;
                            var4._latestState = var2;
                            var5 = var4._subscriptions;
                            var4 = var5.forEach;
                            var3 = function(arg0) { // Environment: var3
                                var2 = _closure5_slot0;
                                var1 = arg0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                        case 138:
                            return var2;
                        case 141:
                            return var1;
                        case 144:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function(arg0) { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var4 = var4.bind(var0)();
        var2._fetchCurrentState = var4;
        var4 = function(arg0) { // Environment: var3
            _fun16748: for (var _fun16748_ip = 0;;) switch (_fun16748_ip) {
                case 0:
                    var5 = arg0;
                    var0 = var5.isInternetReachable;
                    var2 = 'boolean';
                    var1 = typeof var0;
                    var0 = var5;
                    if (!(var2 !== var1)) {
                        _fun16748_ip = 75;
                        continue _fun16748
                    }
                case 23:
                    var1 = global;
                    var4 = var1.Object;
                    var3 = var4.assign;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var6 = var1._internetReachability;
                    var1 = var6.currentState;
                    var1 = var1.bind(var6)();
                    var2.isInternetReachable = var1;
                    var1 = {};
                    var0 = var3.bind(var4)(var1, var5, var2);
                case 75:
                    return var0;
            }
        };
        var2._convertState = var4;
        var4 = function(arg0) { // Environment: var3
            _fun16749: for (var _fun16749_ip = 0;;) switch (_fun16749_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    if (var3) {
                        _fun16749_ip = 69;
                        continue _fun16749
                    }
                case 13:
                    var0 = var2._latestState;
                    if (var0) {
                        _fun16749_ip = 38;
                        continue _fun16749
                    }
                case 22:
                    var4 = _closure2_slot0;
                    var0 = var4._fetchCurrentState;
                    var0 = var0.bind(var4)();
                    _fun16749_ip = 67;
                    continue _fun16749;
                case 38:
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.resolve;
                    var1 = _closure2_slot0;
                    var1 = var1._latestState;
                    var0 = var4.bind(var5)(var1);
                case 67:
                    _fun16749_ip = 80;
                    continue _fun16749;
                case 69:
                    var1 = var2._fetchCurrentState;
                    var0 = var1.bind(var2)(var3);
                case 80:
                    return var0;
            }
        };
        var2.latest = var4;
        var4 = function(arg0) { // Environment: var3
            _fun16750: for (var _fun16750_ip = 0;;) switch (_fun16750_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure2_slot0;
                    var4 = var1._subscriptions;
                    var3 = var4.add;
                    var3 = var3.bind(var4)(var2);
                    var1 = var1._latestState;
                    var0 = _closure2_slot0;
                    if (var1) {
                        _fun16750_ip = 61;
                        continue _fun16750
                    }
                case 39:
                    var1 = var0.latest;
                    var3 = var1.bind(var0)();
                    var1 = var3.then;
                    var1 = var1.bind(var3)(var2);
                    _fun16750_ip = 74;
                    continue _fun16750;
                case 61:
                    var1 = var0._latestState;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 74:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.add = var4;
        var4 = function(arg0) { // Environment: var3
            var0 = _closure2_slot0;
            var2 = var0._subscriptions;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2.remove = var4;
        var3 = function() { // Environment: var3
            _fun16752: for (var _fun16752_ip = 0;;) switch (_fun16752_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var1 = var1._internetReachability;
                    if (!var1) {
                        _fun16752_ip = 36;
                        continue _fun16752
                    }
                case 16:
                    var1 = _closure2_slot0;
                    var2 = var1._internetReachability;
                    var1 = var2.tearDown;
                    var1 = var1.bind(var2)();
                case 36:
                    var1 = _closure2_slot0;
                    var1 = var1._nativeEventSubscription;
                    if (!var1) {
                        _fun16752_ip = 69;
                        continue _fun16752
                    }
                case 49:
                    var1 = _closure2_slot0;
                    var2 = var1._nativeEventSubscription;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                case 69:
                    var0 = _closure2_slot0;
                    var1 = var0._subscriptions;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var2.tearDown = var3;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 4;
        var3 = var6[var3];
        var8 = var4.bind(var0)(var3);
        var9 = var2._handleInternetReachabilityUpdate;
        var3 = var8.prototype;
        var5 = Object.create(var3, {
            constructor: {
                value: var8
            }
        });
        var10 = arg0;
        var11 = var5;
        var3 = new var11[var8](var10, var9, var8);
        var3 = var3 instanceof Object ? var3 : var5;
        var2._internetReachability = var3;
        var3 = 3;
        var3 = var6[var3];
        var3 = var4.bind(var0)(var3);
        var5 = var3.eventEmitter;
        var4 = var5.addListener;
        var3 = _closure1_slot1;
        var1 = 5;
        var1 = var6[var1];
        var1 = var3.bind(var0)(var1);
        var3 = var1.DEVICE_CONNECTIVITY_EVENT;
        var1 = var2._handleNativeStateUpdate;
        var1 = var4.bind(var5)(var3, var1);
        var2._nativeEventSubscription = var1;
        var1 = var2._fetchCurrentState;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot5 = var1;
    var1 = var3.bind(var0)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7, 6, 1449, 1451, 1452]);