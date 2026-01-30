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
    var2 = 0;
    var _closure1_slot3 = var2;
    var3 = inf;
    var _closure1_slot4 = var3;
    var _closure1_slot5 = var2;
    var2 = function(arg0) { // Original name: updateEstimate, environment: var0
        var2 = arg0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun10820: for (var _fun10820_ip = 0;;) switch (_fun10820_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.interactionId;
                    if (!var1) {
                        _fun10820_ip = 114;
                        continue _fun10820
                    }
                case 12:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.min;
                    var4 = _closure1_slot4;
                    var3 = var0.interactionId;
                    var3 = var5.bind(var6)(var4, var3);
                    _closure1_slot4 = var3;
                    var4 = var2.Math;
                    var3 = var4.max;
                    var2 = _closure1_slot5;
                    var0 = var0.interactionId;
                    var2 = var3.bind(var4)(var2, var0);
                    _closure1_slot5 = var2;
                    var0 = 0;
                    if (!var2) {
                        _fun10820_ip = 110;
                        continue _fun10820
                    }
                case 84:
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot4;
                    var3 = var3 - var2;
                    var2 = 7;
                    var3 = var3 / var2;
                    var2 = 1;
                    var0 = var3 + var2;
                case 110:
                    _closure1_slot3 = var0;
                case 114:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot6 = var2;
    var2 = function() { // Original name: getInteractionCount, environment: var0
        _fun10821: for (var _fun10821_ip = 0;;) switch (_fun10821_ip) {
            case 0:
                var0 = _closure1_slot2;
                if (var0) {
                    _fun10821_ip = 31;
                    continue _fun10821
                }
            case 10:
                var0 = global;
                var0 = var0.performance;
                var0 = var0.interactionCount;
                if (var0) {
                    _fun10821_ip = 29;
                    continue _fun10821
                }
            case 27:
                var0 = 0;
            case 29:
                _fun10821_ip = 35;
                continue _fun10821;
            case 31:
                var0 = _closure1_slot3;
            case 35:
                return var0;
        }
    };
    var1.getInteractionCount = var2;
    var0 = function() { // Original name: initInteractionCountPolyfill, environment: var0
        _fun10822: for (var _fun10822_ip = 0;;) switch (_fun10822_ip) {
            case 0:
                var0 = global;
                var1 = var0.performance;
                var0 = 'interactionCount';
                var0 = var0 in var1;
                if (var0) {
                    _fun10822_ip = 26;
                    continue _fun10822
                }
            case 19:
                var0 = _closure1_slot2;
            case 26:
                if (var0) {
                    _fun10822_ip = 88;
                    continue _fun10822
                }
            case 29:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var4 = var5.observe;
                var3 = _closure1_slot6;
                var2 = 'event';
                var0 = {
                    'type': 'event',
                    'buffered': true,
                    'durationThreshold': 0
                };
                var0 = var4.bind(var5)(var2, var3, var0);
                var _closure1_slot2 = var0;
            case 88:
                var0 = undefined;
                return var0;
        }
    };
    var1.initInteractionCountPolyfill = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1043]);