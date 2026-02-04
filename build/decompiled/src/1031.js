// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun10724: for (var _fun10724_ip = 0;;) switch (_fun10724_ip) {
            case 0:
                var2 = arg0;
                var10 = var2;
                var11 = arg1;
                var0 = undefined;
                var12 = undefined;
                var1 = _closure1_slot6;
                var1 = var1[var2];
                var2 = null;
                if (!(var2 != var1)) {
                    _fun10724_ip = 235;
                    continue _fun10724
                }
            case 33:
                var2 = var1.length;
                if (!var2) {
                    _fun10724_ip = 235;
                    continue _fun10724
                }
            case 44:
                var8 = var1;
                var2 = var8[Symbol.iterator];
                var8 = var2().next;
                var7 = 1;
                var6 = global;
                var5 = 'Error while triggering instrumentation handler.\nType: ';
                var4 = '\nName: ';
                var3 = '\nError:';
                var1 = 0;
            case 75:
                var14 = var8().value;
                var15 = var2;
                if (!(var15 !== var0)) {
                    _fun10724_ip = 235;
                    continue _fun10724
                }
            case 89: // try_start_1
                var12 = var14;
            case 92: // try_start_0
                var15 = var12;
                var14 = var11;
                var14 = var15.bind(var0)(var14);
            case 103: // try_end0
                _fun10724_ip = 223;
                continue _fun10724;
            case 105: // catch_target0
                CatchBlockStart(arg_register = 13);
                var15 = _closure1_slot0;
                var14 = _closure1_slot1;
                var14 = var14[var1];
                var14 = var15.bind(var0)(var14);
                var14 = var14.DEBUG_BUILD;
                if (!var14) {
                    _fun10724_ip = 223;
                    continue _fun10724
                }
            case 133:
                var15 = _closure1_slot0;
                var14 = _closure1_slot1;
                var16 = var14[var7];
                var16 = var15.bind(var0)(var16);
                var17 = var16.debug;
                var16 = var17.error;
                var18 = var10;
                var14 = var14[var7];
                var19 = var15.bind(var0)(var14);
                var15 = var19.getFunctionName;
                var14 = var12;
                var21 = var15.bind(var19)(var14);
                var14 = var6.HermesInternal;
                var14 = var14.concat;
                var24 = var5;
                var23 = var18;
                var22 = var4;
                var20 = var3;
                var15 = var24[var14](var23, var22, var21, var20, var19);
                var14 = var13;
                var14 = var16.bind(var17)(var15, var14);
            case 223: // try_end1
                _fun10724_ip = 75;
                continue _fun10724;
            case 228: // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 235:
                return var0;
        }
    };
    var _closure1_slot8 = var2;
    var2 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.onCLS;
        var1 = {};
        var0 = true;
        var1.reportAllChanges = var0;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var5 = _closure1_slot8;
            var4 = {};
            var4.metric = var2;
            var0 = undefined;
            var3 = 'cls';
            var3 = var5.bind(var0)(var3, var4);
            var _closure1_slot2 = var2;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var2;
    var2 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.onLCP;
        var1 = {};
        var0 = true;
        var1.reportAllChanges = var0;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var5 = _closure1_slot8;
            var4 = {};
            var4.metric = var2;
            var0 = undefined;
            var3 = 'lcp';
            var3 = var5.bind(var0)(var3, var4);
            var _closure1_slot3 = var2;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var2;
    var2 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.onTTFB;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var5 = _closure1_slot8;
            var4 = {};
            var4.metric = var2;
            var0 = undefined;
            var3 = 'ttfb';
            var3 = var5.bind(var0)(var3, var4);
            var _closure1_slot4 = var2;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot11 = var2;
    var2 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.onINP;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var5 = _closure1_slot8;
            var4 = {};
            var4.metric = var2;
            var0 = undefined;
            var3 = 'inp';
            var3 = var5.bind(var0)(var3, var4);
            var _closure1_slot5 = var2;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var2;
    var2 = function arg0, arg1, arg2, arg3() {
        _fun10733: for (var _fun10733_ip = 0;;) switch (_fun10733_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var7 = arg3;
                var2 = undefined;
                var1 = undefined;
                var5 = arguments.length;
                var0 = 4;
                var6 = var5 > var0;
                if (!var6) {
                    _fun10733_ip = 34;
                    continue _fun10733
                }
            case 26:
                var5 = arguments[var0];
                var6 = var2 !== var5;
            case 34:
                if (!var6) {
                    _fun10733_ip = 41;
                    continue _fun10733
                }
            case 37:
                var6 = arguments[var0];
            case 41:
                var1 = _closure1_slot14;
                var1 = var1.bind(var2)(var4, var3);
                var1 = _closure1_slot7;
                var1 = var1[var4];
                var5 = undefined;
                if (var1) {
                    _fun10733_ip = 84;
                    continue _fun10733
                }
            case 67:
                var1 = arg2;
                var5 = var1.bind(var2)();
                var9 = _closure1_slot7;
                var8 = true;
                var9[var4] = var8;
            case 84:
                if (!var7) {
                    _fun10733_ip = 99;
                    continue _fun10733
                }
            case 87:
                var1 = {};
                var1.metric = var7;
                var1 = var3.bind(var2)(var1);
            case 99:
                var1 = _closure1_slot15;
                var0 = undefined;
                if (!var6) {
                    _fun10733_ip = 111;
                    continue _fun10733
                }
            case 108:
                var0 = var5;
            case 111:
                var0 = var1.bind(var2)(var4, var3, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var2;
    var2 = function arg0, arg1() {
        _fun10734: for (var _fun10734_ip = 0;;) switch (_fun10734_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot6;
                var2 = var3[var1];
                if (var2) {
                    _fun10734_ip = 21;
                    continue _fun10734
                }
            case 17:
                var2 = new Array(0);
            case 21:
                var3[var1] = var2;
                var0 = _closure1_slot6;
                var2 = var0[var1];
                var1 = var2.push;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot14 = var2;
    var2 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var0 = function() { // Environment: var0
            _fun10736: for (var _fun10736_ip = 0;;) switch (_fun10736_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun10736_ip = 20;
                        continue _fun10736
                    }
                case 10:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 20:
                    var2 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var3 = var2[var1];
                    if (!var3) {
                        _fun10736_ip = 78;
                        continue _fun10736
                    }
                case 38:
                    var1 = var3.indexOf;
                    var0 = _closure2_slot1;
                    var2 = var1.bind(var3)(var0);
                    var0 = -1;
                    if (!(var0 !== var2)) {
                        _fun10736_ip = 78;
                        continue _fun10736
                    }
                case 63:
                    var1 = var3.splice;
                    var0 = 1;
                    var0 = var1.bind(var3)(var2, var0);
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot15 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = {};
    var _closure1_slot6 = var2;
    var2 = {};
    var _closure1_slot7 = var2;
    var2 = function arg0() {
        _fun10737: for (var _fun10737_ip = 0;;) switch (_fun10737_ip) {
            case 0:
                var6 = undefined;
                var1 = undefined;
                var5 = _closure1_slot13;
                var4 = _closure1_slot9;
                var3 = _closure1_slot2;
                var2 = arguments.length;
                var0 = 1;
                var2 = var2 > var0;
                if (!var2) {
                    _fun10737_ip = 40;
                    continue _fun10737
                }
            case 32:
                var7 = arguments[var0];
                var2 = var6 !== var7;
            case 40:
                if (!var2) {
                    _fun10737_ip = 47;
                    continue _fun10737
                }
            case 43:
                var2 = arguments[var0];
            case 47:
                var12 = 'cls';
                var11 = arg0;
                var13 = undefined;
                var10 = var4;
                var9 = var3;
                var8 = var2;
                var0 = var13[var5](var12, var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var1.addClsInstrumentationHandler = var2;
    var2 = function arg0() {
        var5 = _closure1_slot13;
        var7 = _closure1_slot12;
        var6 = _closure1_slot5;
        var10 = undefined;
        var9 = 'inp';
        var8 = arg0;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var1.addInpInstrumentationHandler = var2;
    var2 = function arg0() {
        _fun10739: for (var _fun10739_ip = 0;;) switch (_fun10739_ip) {
            case 0:
                var6 = undefined;
                var1 = undefined;
                var5 = _closure1_slot13;
                var4 = _closure1_slot10;
                var3 = _closure1_slot3;
                var2 = arguments.length;
                var0 = 1;
                var2 = var2 > var0;
                if (!var2) {
                    _fun10739_ip = 40;
                    continue _fun10739
                }
            case 32:
                var7 = arguments[var0];
                var2 = var6 !== var7;
            case 40:
                if (!var2) {
                    _fun10739_ip = 47;
                    continue _fun10739
                }
            case 43:
                var2 = arguments[var0];
            case 47:
                var12 = 'lcp';
                var11 = arg0;
                var13 = undefined;
                var10 = var4;
                var9 = var3;
                var8 = var2;
                var0 = var13[var5](var12, var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var1.addLcpInstrumentationHandler = var2;
    var2 = function arg0, arg1() {
        _fun10740: for (var _fun10740_ip = 0;;) switch (_fun10740_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = _closure1_slot14;
                var1 = undefined;
                var4 = var4.bind(var1)(var3, var2);
                var4 = _closure1_slot7;
                var4 = var4[var3];
                if (var4) {
                    _fun10740_ip = 54;
                    continue _fun10740
                }
            case 32:
                var4 = function arg0() {
                    _fun10741: for (var _fun10741_ip = 0;;) switch (_fun10741_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var4 = {};
                            var0 = 'event';
                            if (!(var0 === var5)) {
                                _fun10741_ip = 27;
                                continue _fun10741
                            }
                        case 19:
                            var0 = 0;
                            var4.durationThreshold = var0;
                        case 27:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.observe;
                            var1 = function(arg0) { // Environment: var1
                                var3 = _closure1_slot8;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var0 = arg0;
                                var1.entries = var0;
                                var0 = undefined;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var5, var1, var4);
                            return var0;
                    }
                };
                var4 = var4.bind(var1)(var3);
                var5 = _closure1_slot7;
                var4 = true;
                var5[var3] = var4;
            case 54:
                var0 = _closure1_slot15;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var1.addPerformanceInstrumentationHandler = var2;
    var2 = function arg0() {
        var5 = _closure1_slot13;
        var7 = _closure1_slot11;
        var6 = _closure1_slot4;
        var10 = undefined;
        var9 = 'ttfb';
        var8 = arg0;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var1.addTtfbInstrumentationHandler = var2;
    var0 = function arg0() {
        var1 = 'duration';
        var0 = arg0;
        var0 = var1 in var0;
        return var0;
    };
    var1.isPerformanceEventTiming = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1032, 817, 1033, 1048, 1052, 1053, 1043]);