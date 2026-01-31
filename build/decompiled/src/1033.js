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
    var2 = [0.1, 0.25];
    var _closure1_slot2 = var2;
    var1.CLSThresholds = var2;
    var0 = function arg0() {
        _fun10745: for (var _fun10745_ip = 0;;) switch (_fun10745_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = arguments.length;
                var6 = 1;
                if (!(var2 > var6)) {
                    _fun10745_ip = 31;
                    continue _fun10745
                }
            case 23:
                var2 = arguments[var6];
                if (!(var0 === var2)) {
                    _fun10745_ip = 35;
                    continue _fun10745
                }
            case 31:
                var2 = {};
                _fun10745_ip = 39;
                continue _fun10745;
            case 35:
                var2 = arguments[var6];
            case 39:
                var _closure2_slot1 = var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var2 = var4[var2];
                var3 = var5.bind(var0)(var2);
                var2 = var3.onFCP;
                var4 = var4[var6];
                var5 = var5.bind(var0)(var4);
                var4 = var5.runOnce;
                var1 = function() { // Environment: var1
                    _fun10746: for (var _fun10746_ip = 0;;) switch (_fun10746_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 2;
                            var2 = var7[var0];
                            var0 = undefined;
                            var8 = var4.bind(var0)(var2);
                            var6 = var8.initMetric;
                            var3 = 'CLS';
                            var2 = 0;
                            var10 = var6.bind(var8)(var3, var2);
                            var _closure3_slot1 = var10;
                            var2 = 3;
                            var2 = var7[var2];
                            var3 = var4.bind(var0)(var2);
                            var2 = var3.getVisibilityWatcher;
                            var6 = var2.bind(var3)();
                            var2 = 4;
                            var2 = var7[var2];
                            var11 = var4.bind(var0)(var2);
                            var9 = var11.initUnique;
                            var8 = _closure2_slot1;
                            var2 = 5;
                            var2 = var7[var2];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.LayoutShiftManager;
                            var2 = var9.bind(var11)(var8, var2);
                            var _closure3_slot2 = var2;
                            var8 = function arg0() {
                                _fun10747: for (var _fun10747_ip = 0;;) switch (_fun10747_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = var2[Symbol.iterator];
                                        var2 = var3().next;
                                        var0 = undefined;
                                    case 11:
                                        var6 = var2().value;
                                        var4 = var3;
                                        if (!(var4 !== var0)) {
                                            _fun10747_ip = 46;
                                            continue _fun10747
                                        }
                                    case 22: // try_start_0
                                        var5 = _closure3_slot2;
                                        var4 = var5._processEntry;
                                        var4 = var4.bind(var5)(var6);
                                    case 37: // try_end0
                                        _fun10747_ip = 11;
                                        continue _fun10747;
                                    case 39: // catch_target0
                                        CatchBlockStart(arg_register = 2);
                                        var3.return();
                                        throw var2;
                                    case 46:
                                        var2 = _closure3_slot2;
                                        var3 = var2._sessionValue;
                                        var2 = _closure3_slot1;
                                        var2 = var2.value;
                                        if (!(var3 > var2)) {
                                            _fun10747_ip = 109;
                                            continue _fun10747
                                        }
                                    case 69:
                                        var3 = _closure3_slot1;
                                        var2 = _closure3_slot2;
                                        var4 = var2._sessionValue;
                                        var3.value = var4;
                                        var2 = var2._sessionEntries;
                                        var3.entries = var2;
                                        var1 = _closure3_slot0;
                                        var1 = var1.bind(var0)();
                                    case 109:
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var8;
                            var2 = 6;
                            var2 = var7[var2];
                            var7 = var4.bind(var0)(var2);
                            var4 = var7.observe;
                            var2 = 'layout-shift';
                            var2 = var4.bind(var7)(var2, var8);
                            var _closure3_slot4 = var2;
                            if (!var2) {
                                _fun10746_ip = 298;
                                continue _fun10746
                            }
                        case 175:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var7 = 7;
                            var7 = var4[var7];
                            var9 = var2.bind(var0)(var7);
                            var8 = var9.bindReporter;
                            var15 = _closure2_slot0;
                            var13 = _closure1_slot2;
                            var3 = _closure2_slot1;
                            var12 = var3.reportAllChanges;
                            var16 = var9;
                            var14 = var10;
                            var3 = var16[var8](var15, var14, var13, var12, var11);
                            var _closure3_slot0 = var3;
                            var5 = var6.onHidden;
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
                            var1 = var5.bind(var6)(var1);
                            var1 = 8;
                            var1 = var4[var1];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.WINDOW;
                            var5 = null;
                            var1 = var5 == var2;
                            if (var1) {
                                _fun10746_ip = 285;
                                continue _fun10746
                            }
                        case 276:
                            var4 = var2.setTimeout;
                            var1 = var5 == var4;
                        case 285:
                            if (var1) {
                                _fun10746_ip = 298;
                                continue _fun10746
                            }
                        case 288:
                            var1 = var2.setTimeout;
                            var1 = var1.bind(var2)(var3);
                        case 298:
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.onCLS = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1034, 1045, 1041, 1037, 1046, 1047, 1043, 1044, 1036]);