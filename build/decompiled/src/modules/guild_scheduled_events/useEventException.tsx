// modules/guild_scheduled_events/useEventException.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun65407: for (var _fun65407_ip = 0;;) switch (_fun65407_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = null;
                var2 = var0 == var3;
                var0 = undefined;
                if (var2) {
                    _fun65407_ip = 38;
                    continue _fun65407
                }
            case 23:
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.event_exception_id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 38:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useEventException.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 1;
        var4 = var4[var2];
        var2 = undefined;
        var5 = var5.bind(var2)(var4);
        var4 = var5.useStateFromStoresArray;
        var6 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            _fun65410: for (var _fun65410_ip = 0;;) switch (_fun65410_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getGuildScheduledEvent;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var2)(var0);
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun65410_ip = 42;
                        continue _fun65410
                    }
                case 36:
                    var0 = var2.guild_scheduled_event_exceptions;
                case 42:
                    if (!(var1 == var0)) {
                        _fun65410_ip = 50;
                        continue _fun65410
                    }
                case 46:
                    var0 = new Array(0);
                case 50:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var1, var0);
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0, arg1() {
        _fun65411: for (var _fun65411_ip = 0;;) switch (_fun65411_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = _closure1_slot2;
                var1 = var2.getGuildScheduledEvent;
                var0 = arg1;
                var4 = var1.bind(var2)(var0);
                var0 = null;
                var5 = var0 == var4;
                var2 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun65411_ip = 44;
                    continue _fun65411
                }
            case 38:
                var1 = var4.guild_scheduled_event_exceptions;
            case 44:
                if (!(var0 == var1)) {
                    _fun65411_ip = 52;
                    continue _fun65411
                }
            case 48:
                var1 = new Array(0);
            case 52:
                var0 = arg0;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.getEventException = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3336, 566, 2]);