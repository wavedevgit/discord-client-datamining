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
    var2 = [2500, 4000];
    var _closure1_slot2 = var2;
    var1.LCPThresholds = var2;
    var0 = function arg0() {
        _fun10793: for (var _fun10793_ip = 0;;) switch (_fun10793_ip) {
            case 0:
                var0 = undefined;
                var4 = undefined;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = arguments.length;
                var3 = 1;
                if (!(var2 > var3)) {
                    _fun10793_ip = 31;
                    continue _fun10793
                }
            case 23:
                var2 = arguments[var3];
                if (!(var0 === var2)) {
                    _fun10793_ip = 35;
                    continue _fun10793
                }
            case 31:
                var2 = {};
                _fun10793_ip = 39;
                continue _fun10793;
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
                    _fun10794: for (var _fun10794_ip = 0;;) switch (_fun10794_ip) {
                        case 0:
                            var0 = undefined;
                            var6 = undefined;
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var1 = 1;
                            var1 = var7[var1];
                            var3 = var4.bind(var0)(var1);
                            var1 = var3.getVisibilityWatcher;
                            var1 = var1.bind(var3)();
                            var _closure3_slot1 = var1;
                            var1 = 2;
                            var1 = var7[var1];
                            var8 = var4.bind(var0)(var1);
                            var3 = var8.initMetric;
                            var1 = 'LCP';
                            var11 = var3.bind(var8)(var1);
                            var _closure3_slot2 = var11;
                            var1 = 3;
                            var1 = var7[var1];
                            var10 = var4.bind(var0)(var1);
                            var9 = var10.initUnique;
                            var8 = _closure2_slot1;
                            var3 = 4;
                            var3 = var7[var3];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.LCPEntryManager;
                            var3 = var9.bind(var10)(var8, var3);
                            var _closure3_slot3 = var3;
                            var8 = function arg0() {
                                _fun10795: for (var _fun10795_ip = 0;;) switch (_fun10795_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = undefined;
                                        var8 = undefined;
                                        var1 = _closure2_slot1;
                                        var2 = var1.reportAllChanges;
                                        var1 = var4;
                                        if (var2) {
                                            _fun10795_ip = 42;
                                            continue _fun10795
                                        }
                                    case 26:
                                        var3 = var4.slice;
                                        var2 = -1;
                                        var1 = var3.bind(var4)(var2);
                                    case 42:
                                        var7 = var1;
                                        var2 = var7[Symbol.iterator];
                                        var7 = var2().next;
                                        var5 = global;
                                        var3 = 5;
                                        var1 = 0;
                                    case 61:
                                        var9 = var7().value;
                                        var10 = var2;
                                        if (!(var10 !== var0)) {
                                            _fun10795_ip = 214;
                                            continue _fun10795
                                        }
                                    case 75: // try_start_0
                                        var8 = var9;
                                        var11 = _closure3_slot3;
                                        var10 = var11._processEntry;
                                        var10 = var10.bind(var11)(var9);
                                        var10 = var9.startTime;
                                        var9 = _closure3_slot1;
                                        var9 = var9.firstHiddenTime;
                                        if (!(var10 < var9)) {
                                            _fun10795_ip = 202;
                                            continue _fun10795
                                        }
                                    case 113:
                                        var10 = _closure3_slot2;
                                        var13 = var5.Math;
                                        var12 = var13.max;
                                        var11 = var8;
                                        var14 = var11.startTime;
                                        var15 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var9 = var9[var3];
                                        var15 = var15.bind(var0)(var9);
                                        var9 = var15.getActivationStart;
                                        var9 = var9.bind(var15)();
                                        var9 = var14 - var9;
                                        var9 = var12.bind(var13)(var9, var1);
                                        var10.value = var9;
                                        var9 = new Array(1);
                                        var9[0] = var11;
                                        var10.entries = var9;
                                        var9 = _closure3_slot0;
                                        var9 = var9.bind(var0)();
                                    case 202: // try_end0
                                        _fun10795_ip = 61;
                                        continue _fun10795;
                                    case 207: // catch_target0
                                        CatchBlockStart(arg_register = 1);
                                        var2.return();
                                        throw var1;
                                    case 214:
                                        return var0;
                                }
                            };
                            var _closure3_slot4 = var8;
                            var3 = 6;
                            var3 = var7[var3];
                            var7 = var4.bind(var0)(var3);
                            var4 = var7.observe;
                            var3 = 'largest-contentful-paint';
                            var3 = var4.bind(var7)(var3, var8);
                            var _closure3_slot5 = var3;
                            if (!var3) {
                                _fun10794_ip = 358;
                                continue _fun10794
                            }
                        case 178:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var7 = 7;
                            var7 = var4[var7];
                            var10 = var3.bind(var0)(var7);
                            var9 = var10.bindReporter;
                            var16 = _closure2_slot0;
                            var14 = _closure1_slot2;
                            var1 = _closure2_slot1;
                            var13 = var1.reportAllChanges;
                            var17 = var10;
                            var15 = var11;
                            var1 = var17[var9](var16, var15, var14, var13, var12);
                            var _closure3_slot0 = var1;
                            var1 = 8;
                            var1 = var4[var1];
                            var4 = var3.bind(var0)(var1);
                            var3 = var4.runOnce;
                            var1 = function() { // Environment: var2
                                var4 = _closure3_slot4;
                                var3 = _closure3_slot5;
                                var0 = var3.takeRecords;
                                var2 = var0.bind(var3)();
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var2 = var3.disconnect;
                                var2 = var2.bind(var3)();
                                var2 = _closure3_slot0;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1);
                            var _closure3_slot6 = var1;
                            var1 = function arg0() {
                                _fun10797: for (var _fun10797_ip = 0;;) switch (_fun10797_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.isTrusted;
                                        if (!var0) {
                                            _fun10797_ip = 98;
                                            continue _fun10797
                                        }
                                    case 12:
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var0 = 9;
                                        var0 = var5[var0];
                                        var3 = undefined;
                                        var7 = var4.bind(var3)(var0);
                                        var6 = var7.whenIdleOrHidden;
                                        var2 = _closure3_slot6;
                                        var2 = var6.bind(var7)(var2);
                                        var2 = 10;
                                        var2 = var5[var2];
                                        var4 = var4.bind(var3)(var2);
                                        var3 = var4.removePageListener;
                                        var2 = var1.type;
                                        var1 = _closure3_slot7;
                                        var0 = {};
                                        var5 = true;
                                        var0.capture = var5;
                                        var0 = var3.bind(var4)(var2, var1, var0);
                                    case 98:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var6 = var1;
                            var _closure3_slot7 = var1;
                            var4 = ['keydown', 'click', 'visibilitychange'];
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var3 = 10;
                            var1 = true;
                        case 298:
                            var11 = var4().value;
                            var7 = var2;
                            if (!(var7 !== var0)) {
                                _fun10794_ip = 358;
                                continue _fun10794
                            }
                        case 309: // try_start_0
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var7 = var7[var3];
                            var10 = var8.bind(var0)(var7);
                            var9 = var10.addPageListener;
                            var8 = var6;
                            var7 = {};
                            var7.capture = var1;
                            var7 = var9.bind(var10)(var11, var8, var7);
                        case 349: // try_end0
                            _fun10794_ip = 298;
                            continue _fun10794;
                        case 351: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 358:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.onLCP = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1035, 1037, 1041, 1046, 1049, 1039, 1043, 1044, 1045, 1050, 1038]);