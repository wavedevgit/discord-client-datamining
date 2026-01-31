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
    var2 = [1800, 3000];
    var _closure1_slot2 = var2;
    var1.FCPThresholds = var2;
    var0 = function(arg0) { // Original name: onFCP, environment: var0
        _fun10750: for (var _fun10750_ip = 0;;) switch (_fun10750_ip) {
            case 0:
                var0 = undefined;
                var4 = undefined;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = arguments.length;
                var3 = 1;
                if (!(var2 > var3)) {
                    _fun10750_ip = 31;
                    continue _fun10750
                }
            case 23:
                var2 = arguments[var3];
                if (!(var0 === var2)) {
                    _fun10750_ip = 35;
                    continue _fun10750
                }
            case 31:
                var2 = {};
                _fun10750_ip = 39;
                continue _fun10750;
            case 35:
                var2 = arguments[var3];
            case 39:
                var _closure2_slot1 = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.whenActivated;
                var1 = function() { // Environment: var1
                    _fun10751: for (var _fun10751_ip = 0;;) switch (_fun10751_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var0 = 1;
                            var1 = var5[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var1);
                            var1 = var6.getVisibilityWatcher;
                            var1 = var1.bind(var6)();
                            var _closure3_slot1 = var1;
                            var1 = 2;
                            var1 = var5[var1];
                            var7 = var4.bind(var0)(var1);
                            var6 = var7.initMetric;
                            var1 = 'FCP';
                            var7 = var6.bind(var7)(var1);
                            var _closure3_slot2 = var7;
                            var1 = 4;
                            var1 = var5[var1];
                            var6 = var4.bind(var0)(var1);
                            var5 = var6.observe;
                            var4 = 'paint';
                            var1 = function(arg0) { // Original name: handleEntries, environment: var2
                                _fun10752: for (var _fun10752_ip = 0;;) switch (_fun10752_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var10 = undefined;
                                        var9 = arg0;
                                        var2 = var9[Symbol.iterator];
                                        var9 = var2().next;
                                        var7 = global;
                                        var5 = 3;
                                        var4 = 0;
                                        var3 = true;
                                        var1 = 'first-contentful-paint';
                                    case 31:
                                        var11 = var9().value;
                                        var12 = var2;
                                        if (!(var12 !== var0)) {
                                            _fun10752_ip = 201;
                                            continue _fun10752
                                        }
                                    case 45: // try_start_0
                                        var10 = var11;
                                        var11 = var11.name;
                                        if (!(var1 === var11)) {
                                            _fun10752_ip = 189;
                                            continue _fun10752
                                        }
                                    case 60:
                                        var12 = _closure3_slot3;
                                        var11 = var12.disconnect;
                                        var11 = var11.bind(var12)();
                                        var11 = var10;
                                        var12 = var11.startTime;
                                        var11 = _closure3_slot1;
                                        var11 = var11.firstHiddenTime;
                                        if (!(var12 < var11)) {
                                            _fun10752_ip = 189;
                                            continue _fun10752
                                        }
                                    case 97:
                                        var11 = _closure3_slot2;
                                        var15 = var7.Math;
                                        var14 = var15.max;
                                        var13 = var10;
                                        var16 = var13.startTime;
                                        var17 = _closure1_slot0;
                                        var12 = _closure1_slot1;
                                        var12 = var12[var5];
                                        var17 = var17.bind(var0)(var12);
                                        var12 = var17.getActivationStart;
                                        var12 = var12.bind(var17)();
                                        var12 = var16 - var12;
                                        var12 = var14.bind(var15)(var12, var4);
                                        var11.value = var12;
                                        var12 = var11.entries;
                                        var11 = var12.push;
                                        var11 = var11.bind(var12)(var13);
                                        var11 = _closure3_slot0;
                                        var11 = var11.bind(var0)(var3);
                                    case 189: // try_end0
                                        _fun10752_ip = 31;
                                        continue _fun10752;
                                    case 194: // catch_target0
                                        CatchBlockStart(arg_register = 1);
                                        var2.return();
                                        throw var1;
                                    case 201:
                                        return var0;
                                }
                            };
                            var1 = var5.bind(var6)(var4, var1);
                            var _closure3_slot3 = var1;
                            if (!var1) {
                                _fun10751_ip = 175;
                                continue _fun10751
                            }
                        case 114:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 5;
                            var1 = var5[var1];
                            var6 = var4.bind(var0)(var1);
                            var5 = var6.bindReporter;
                            var11 = _closure2_slot0;
                            var9 = _closure1_slot2;
                            var1 = _closure2_slot1;
                            var8 = var1.reportAllChanges;
                            var12 = var6;
                            var10 = var7;
                            var1 = var12[var5](var11, var10, var9, var8, var7);
                            var _closure3_slot0 = var1;
                        case 175:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.onFCP = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1035, 1037, 1041, 1039, 1043, 1044]);