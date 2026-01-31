// errors/AppliedGuildBoostError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun28821: for (var _fun28821_ip = 0;;) switch (_fun28821_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun28821_ip = 74;
                continue _fun28821;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0, arg1) { // Original name: AppliedGuildBoostError, environment: var0
            _fun28825: for (var _fun28825_ip = 0;;) switch (_fun28825_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var1);
                    var9 = new Array(2);
                    var9[0] = var2;
                    var0 = arg1;
                    var9[1] = var0;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun28825_ip = 80;
                        continue _fun28825
                    }
                case 67:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun28825_ip = 114;
                    continue _fun28825;
                case 80:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 114:
                    var0 = var1.bind(var3)(var4, var0);
                    var3 = var0.status;
                    var1 = 429;
                    if (!(var1 === var3)) {
                        _fun28825_ip = 154;
                        continue _fun28825
                    }
                case 135:
                    var1 = var0._getMessageFromRateLimit;
                    var1 = var1.bind(var0)(var2);
                    var0.message = var1;
                case 154:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = '_getMessageFromRateLimit';
        var4.key = var5;
        var0 = function(arg0) { // Original name: value, environment: var0
            var0 = arg0;
            var0 = var0.body;
            var2 = var0.retry_after;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var0 = 5;
            var3 = var7[var0];
            var5 = undefined;
            var4 = var6.bind(var5)(var3);
            var3 = var4.diffAsUnits;
            var8 = _closure1_slot1;
            var1 = 6;
            var1 = var7[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.Millis;
            var1 = var1.SECOND;
            var2 = var2 * var1;
            var1 = 0;
            var3 = var3.bind(var4)(var1, var2);
            var0 = var7[var0];
            var2 = var6.bind(var5)(var0);
            var1 = var2.unitsAsStrings;
            var0 = {};
            var4 = 7;
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8["iXc/Ib"];
            var0.days = var8;
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.WW9P57;
            var0.hours = var8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.I7rYev;
            var0.minutes = var4;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'errors/AppliedGuildBoostError.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3091, 667, 1234, 3310, 2]);