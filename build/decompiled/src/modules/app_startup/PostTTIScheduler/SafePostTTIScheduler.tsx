// modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: waitSafelyForPostTTI, environment: var1
        _fun93301: for (var _fun93301_ip = 0;;) switch (_fun93301_ip) {
            case 0:
                var1 = arguments[0];
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun93301_ip = 17;
                    continue _fun93301
                }
            case 11:
                var1 = 4000;
            case 17:
                var _closure2_slot0 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = global;
                    var4 = var0.setTimeout;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var2 = var4.bind(var0)(var2, var3);
                    var _closure3_slot1 = var2;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 0;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.schedulePostTTIEvent;
                    var1 = function() { // Environment: var1
                        var0 = global;
                        var3 = var0.clearTimeout;
                        var2 = _closure3_slot1;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.waitSafelyForPostTTI = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9657, 2]);