// modules/guild_scheduled_events/useEventException.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _getEventException, environment: var1
        _fun65115: for (var _fun65115_ip = 0;;) switch (_fun65115_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = null;
                var2 = var0 == var3;
                var0 = undefined;
                if (var2) {
                    _fun65115_ip = 38;
                    continue _fun65115
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
    var3 = function(arg0, arg1) { // Original name: useEventException, environment: var1
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
            _fun65118: for (var _fun65118_ip = 0;;) switch (_fun65118_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getGuildScheduledEvent;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var2)(var0);
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun65118_ip = 42;
                        continue _fun65118
                    }
                case 36:
                    var0 = var2.guild_scheduled_event_exceptions;
                case 42:
                    if (!(var1 == var0)) {
                        _fun65118_ip = 50;
                        continue _fun65118
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
    var1 = function(arg0, arg1) { // Original name: getEventException, environment: var1
        _fun65119: for (var _fun65119_ip = 0;;) switch (_fun65119_ip) {
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
                    _fun65119_ip = 44;
                    continue _fun65119
                }
            case 38:
                var1 = var4.guild_scheduled_event_exceptions;
            case 44:
                if (!(var0 == var1)) {
                    _fun65119_ip = 52;
                    continue _fun65119
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3293, 566, 2]);