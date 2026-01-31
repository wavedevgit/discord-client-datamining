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
    var2 = [200, 500];
    var _closure1_slot2 = var2;
    var1.INPThresholds = var2;
    var0 = function(arg0) { // Original name: onINP, environment: var0
        _fun10815: for (var _fun10815_ip = 0;;) switch (_fun10815_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = arguments.length;
                var4 = 1;
                if (!(var2 > var4)) {
                    _fun10815_ip = 31;
                    continue _fun10815
                }
            case 23:
                var2 = arguments[var4];
                if (!(var0 === var2)) {
                    _fun10815_ip = 35;
                    continue _fun10815
                }
            case 31:
                var2 = {};
                _fun10815_ip = 39;
                continue _fun10815;
            case 35:
                var2 = arguments[var4];
            case 39:
                var _closure2_slot1 = var2;
                var2 = global;
                var3 = var2.globalThis;
                var3 = var3.PerformanceEventTiming;
                if (!var3) {
                    _fun10815_ip = 143;
                    continue _fun10815
                }
            case 60:
                var2 = var2.PerformanceEventTiming;
                var3 = var2.prototype;
                var2 = 'interactionId';
                var2 = var2 in var3;
                if (!var2) {
                    _fun10815_ip = 143;
                    continue _fun10815
                }
            case 82:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 0;
                var5 = var2[var5];
                var6 = var3.bind(var0)(var5);
                var5 = var6.getVisibilityWatcher;
                var5 = var5.bind(var6)();
                var _closure2_slot2 = var5;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.whenActivated;
                var1 = function() { // Environment: var1
                    _fun10816: for (var _fun10816_ip = 0;;) switch (_fun10816_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var0 = 2;
                            var2 = var6[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var2);
                            var2 = var4.initInteractionCountPolyfill;
                            var2 = var2.bind(var4)();
                            var2 = 3;
                            var2 = var6[var2];
                            var7 = var5.bind(var0)(var2);
                            var4 = var7.initMetric;
                            var2 = 'INP';
                            var9 = var4.bind(var7)(var2);
                            var _closure3_slot1 = var9;
                            var2 = 4;
                            var2 = var6[var2];
                            var10 = var5.bind(var0)(var2);
                            var8 = var10.initUnique;
                            var7 = _closure2_slot1;
                            var4 = 5;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.InteractionManager;
                            var4 = var8.bind(var10)(var7, var4);
                            var _closure3_slot2 = var4;
                            var8 = function(arg0) { // Original name: handleEntries, environment: var1
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 6;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.whenIdleOrHidden;
                                var1 = function() { // Environment: var1
                                    _fun10818: for (var _fun10818_ip = 0;;) switch (_fun10818_ip) {
                                        case 0:
                                            var0 = _closure4_slot0;
                                            var2 = var0;
                                            var3 = var2[Symbol.iterator];
                                            var2 = var3().next;
                                            var0 = undefined;
                                        case 18:
                                            var6 = var2().value;
                                            var4 = var3;
                                            if (!(var4 !== var0)) {
                                                _fun10818_ip = 53;
                                                continue _fun10818
                                            }
                                        case 29: // try_start_0
                                            var5 = _closure3_slot2;
                                            var4 = var5._processEntry;
                                            var4 = var4.bind(var5)(var6);
                                        case 44: // try_end0
                                            _fun10818_ip = 18;
                                            continue _fun10818;
                                        case 46: // catch_target0
                                            CatchBlockStart(arg_register = 2);
                                            var3.return();
                                            throw var2;
                                        case 53:
                                            var3 = _closure3_slot2;
                                            var2 = var3._estimateP98LongestInteraction;
                                            var2 = var2.bind(var3)();
                                            var3 = var2;
                                            if (!var3) {
                                                _fun10818_ip = 92;
                                                continue _fun10818
                                            }
                                        case 73:
                                            var5 = var2._latency;
                                            var4 = _closure3_slot1;
                                            var4 = var4.value;
                                            var3 = var5 !== var4;
                                        case 92:
                                            if (!var3) {
                                                _fun10818_ip = 131;
                                                continue _fun10818
                                            }
                                        case 95:
                                            var3 = _closure3_slot1;
                                            var4 = var2._latency;
                                            var3.value = var4;
                                            var2 = var2.entries;
                                            var3.entries = var2;
                                            var1 = _closure3_slot0;
                                            var1 = var1.bind(var0)();
                                        case 131:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var _closure3_slot3 = var8;
                            var4 = 7;
                            var4 = var6[var4];
                            var7 = var5.bind(var0)(var4);
                            var6 = var7.observe;
                            var5 = {};
                            var4 = _closure2_slot1;
                            var10 = var4.durationThreshold;
                            var4 = null;
                            var11 = var4 != var10;
                            var4 = 40;
                            if (!var11) {
                                _fun10816_ip = 177;
                                continue _fun10816
                            }
                        case 174:
                            var4 = var10;
                        case 177:
                            var5.durationThreshold = var4;
                            var4 = 'event';
                            var5 = var6.bind(var7)(var4, var8, var5);
                            var _closure3_slot4 = var5;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var4 = 8;
                            var4 = var7[var4];
                            var8 = var6.bind(var0)(var4);
                            var7 = var8.bindReporter;
                            var15 = _closure2_slot0;
                            var13 = _closure1_slot2;
                            var3 = _closure2_slot1;
                            var12 = var3.reportAllChanges;
                            var16 = var8;
                            var14 = var9;
                            var3 = var16[var7](var15, var14, var13, var12, var11);
                            var _closure3_slot0 = var3;
                            if (!var5) {
                                _fun10816_ip = 299;
                                continue _fun10816
                            }
                        case 258:
                            var4 = var5.observe;
                            var3 = {
                                'type': 'first-input',
                                'buffered': true
                            };
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot2;
                            var2 = var3.onHidden;
                            var1 = function() { // Environment: var1
                                var3 = _closure3_slot3;
                                var2 = _closure3_slot4;
                                var0 = var2.takeRecords;
                                var2 = var0.bind(var2)();
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure3_slot0;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 299:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 143:
                return var0;
        }
    };
    var1.onINP = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1037, 1035, 1054, 1041, 1046, 1055, 1050, 1043, 1044]);