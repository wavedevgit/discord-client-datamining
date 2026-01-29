// ../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = '../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0, arg1) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0, arg1, arg2) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = arg2;
            var _closure3_slot2 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0) { // Environment: var0
                _fun7310: for (var _fun7310_ip = 0;;) switch (_fun7310_ip) {
                    case 0:
                        var3 = _closure2_slot0;
                        var2 = var3.dispatch;
                        var1 = {};
                        var0 = _closure2_slot1;
                        var1.type = var0;
                        var0 = _closure3_slot0;
                        var1.event = var0;
                        var0 = _closure3_slot1;
                        var1.properties = var0;
                        var0 = _closure3_slot2;
                        var6 = null;
                        var4 = var6 == var0;
                        var0 = undefined;
                        var7 = undefined;
                        if (var4) {
                            _fun7310_ip = 70;
                            continue _fun7310
                        }
                    case 60:
                        var4 = _closure3_slot2;
                        var7 = var4.flush;
                    case 70:
                        var4 = var6 != var7;
                        if (!var4) {
                            _fun7310_ip = 80;
                            continue _fun7310
                        }
                    case 77:
                        var4 = var7;
                    case 80:
                        var1.flush = var4;
                        var4 = _closure3_slot2;
                        var6 = var6 == var4;
                        var4 = undefined;
                        if (var6) {
                            _fun7310_ip = 108;
                            continue _fun7310
                        }
                    case 98:
                        var5 = _closure3_slot2;
                        var4 = var5.fingerprint;
                    case 108:
                        var1.fingerprint = var4;
                        var4 = arg0;
                        var1.resolve = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        return var0;
    };
    var2.queueTrackingEventMaker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);