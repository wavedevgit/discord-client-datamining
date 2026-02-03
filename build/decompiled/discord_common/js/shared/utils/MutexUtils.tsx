// ../discord_common/js/shared/utils/MutexUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/shared/utils/MutexUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.resolve;
        var1 = null;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                var3 = _closure2_slot0;
                var2 = var3.then;
                var0 = _closure3_slot0;
                var4 = var2.bind(var3)(var0);
                var3 = var4.then;
                var2 = arg0;
                var0 = arg1;
                var0 = var3.bind(var4)(var2, var0);
                _closure2_slot0 = var0;
                var0 = undefined;
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        return var0;
    };
    var2.createLock = var3;
    var1 = function arg0() {
        var0 = arg0;
        var2 = global;
        var4 = var2.Promise;
        var3 = var4.resolve;
        var2 = null;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var2 = new Array(0);
        var _closure2_slot1 = var2;
        var2 = false;
        var _closure2_slot2 = var2;
        var2 = var0.onContention;
        var _closure2_slot3 = var2;
        var2 = var0.onContentionResolved;
        var _closure2_slot4 = var2;
        var2 = var0.onTimeout;
        var _closure2_slot5 = var2;
        var0 = var0.timeoutMs;
        var _closure2_slot6 = var0;
        var0 = function arg0, arg1() {
            _fun99841: for (var _fun99841_ip = 0;;) switch (_fun99841_ip) {
                case 0:
                    var4 = arg1;
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var4;
                    var1 = _closure2_slot1;
                    var3 = var1.length;
                    var1 = 0;
                    if (!(!(var3 > var1))) {
                        _fun99841_ip = 59;
                        continue _fun99841
                    }
                case 34:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun99841_ip = 81;
                        continue _fun99841
                    }
                case 41:
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                    var1 = false;
                    _closure2_slot2 = var1;
                    _fun99841_ip = 81;
                    continue _fun99841;
                case 59:
                    var5 = _closure2_slot3;
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3);
                    var1 = true;
                    _closure2_slot2 = var1;
                case 81:
                    var3 = _closure2_slot1;
                    var1 = var3.push;
                    var1 = var1.bind(var3)(var4);
                    var1 = _closure2_slot6;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = null;
                    if (var3) {
                        _fun99841_ip = 150;
                        continue _fun99841
                    }
                case 110:
                    var3 = _closure2_slot5;
                    var3 = var4 == var3;
                    var1 = null;
                    if (var3) {
                        _fun99841_ip = 150;
                        continue _fun99841
                    }
                case 123:
                    var3 = global;
                    var5 = var3.setTimeout;
                    var4 = _closure2_slot6;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var3 = _closure2_slot5;
                        var2 = _closure3_slot1;
                        var1 = _closure2_slot1;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1 = var5.bind(var3)(var2, var4);
                case 150:
                    var _closure3_slot2 = var1;
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = function(arg0, arg1) { // Environment: var0
                        _fun99843: for (var _fun99843_ip = 0;;) switch (_fun99843_ip) {
                            case 0:
                                var5 = _closure2_slot0;
                                var4 = var5.then;
                                var3 = _closure3_slot0;
                                var6 = var4.bind(var5)(var3);
                                var5 = var6.then;
                                var4 = arg0;
                                var3 = arg1;
                                var5 = var5.bind(var6)(var4, var3);
                                var4 = var5.then;
                                var3 = function() { // Environment: var0
                                    var3 = _closure2_slot1;
                                    var2 = var3.splice;
                                    var1 = 0;
                                    var0 = 1;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var3 = var4.bind(var5)(var3);
                                _closure2_slot0 = var3;
                                var3 = _closure3_slot2;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun99843_ip = 99;
                                    continue _fun99843
                                }
                            case 74:
                                var3 = _closure2_slot0;
                                var2 = var3.then;
                                var0 = function() { // Environment: var0
                                    var0 = global;
                                    var2 = var0.clearTimeout;
                                    var1 = _closure3_slot2;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var0);
                                _closure2_slot0 = var0;
                            case 99:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = var1;
                    var0 = new var8[var2](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var2 = function() { // Environment: var1
            var0 = _closure2_slot1;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.isMutexHeld = var2;
        var1 = function() { // Environment: var1
            var0 = _closure2_slot1;
            return var0;
        };
        var0.getLockHolders = var1;
        return var0;
    };
    var2.createObservableLock = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);