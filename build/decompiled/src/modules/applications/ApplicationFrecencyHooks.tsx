// modules/applications/ApplicationFrecencyHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsTypes;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/ApplicationFrecencyHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var1 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var7 = var3.useEffect;
        var6 = function() { // Environment: var0
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 3;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var3 = var2.FrecencyUserSettingsActionCreators;
            var2 = var3.loadIfUncached;
            var1 = _closure1_slot5;
            var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5 = new Array(0);
        var5 = var7.bind(var3)(var6, var5);
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var5 = 4;
        var6 = var6[var5];
        var5 = undefined;
        var7 = var7.bind(var5)(var6);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot4;
            var0 = var1.getApplicationFrecencyWithoutLoadingLatest;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var6.bind(var7)(var5, var2);
        var _closure2_slot2 = var5;
        var7 = var3.useMemo;
        var6 = new Array(2);
        var6[0] = var1;
        var6[1] = var4;
        var2 = function() { // Environment: var0
            _fun108416: for (var _fun108416_ip = 0;;) switch (_fun108416_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun108416_ip = 53;
                        continue _fun108416
                    }
                case 13:
                    var0 = _closure2_slot1;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun108416_ip = 53;
                        continue _fun108416
                    }
                case 28:
                    var3 = _closure2_slot0;
                    var2 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun108417: for (var _fun108417_ip = 0;;) switch (_fun108417_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = {};
                                var7 = var0;
                                var6 = var1;
                                var1 = copyDataProperties(var7, var6);
                                var1 = _closure2_slot1;
                                var2 = null;
                                var5 = var2 == var1;
                                var1 = undefined;
                                if (var5) {
                                    _fun108417_ip = 61;
                                    continue _fun108417
                                }
                            case 39:
                                var5 = _closure2_slot1;
                                var4 = var5.some;
                                var3 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var0 = var0.application;
                                    var1 = var0.id;
                                    var0 = _closure4_slot0;
                                    var0 = var0.id;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1 = var4.bind(var5)(var3);
                            case 61:
                                var2 = var2 != var1;
                                if (!var2) {
                                    _fun108417_ip = 71;
                                    continue _fun108417
                                }
                            case 68:
                                var2 = var1;
                            case 71:
                                var1 = 'isUserApp';
                                var0[var1] = var2;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0);
                    _fun108416_ip = 57;
                    continue _fun108416;
                case 53:
                    var0 = _closure2_slot0;
                case 57:
                    return var0;
            }
        };
        var6 = var7.bind(var3)(var2, var6);
        var _closure2_slot3 = var6;
        var7 = var3.useMemo;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var4;
        var1 = function() { // Environment: var0
            _fun108419: for (var _fun108419_ip = 0;;) switch (_fun108419_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var2 = var0 == var2;
                    var0 = undefined;
                    if (var2) {
                        _fun108419_ip = 41;
                        continue _fun108419
                    }
                case 18:
                    var3 = _closure2_slot1;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure2_slot0;
                        var1 = var2.some;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var0.application;
                            var0 = var0.id;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 41:
                    return var0;
            }
        };
        var1 = var7.bind(var3)(var1, var2);
        var _closure2_slot4 = var1;
        var7 = var3.useMemo;
        var2 = new Array(3);
        var2[0] = var6;
        var2[1] = var5;
        var2[2] = var1;
        var1 = function() { // Environment: var0
            _fun108422: for (var _fun108422_ip = 0;;) switch (_fun108422_ip) {
                case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun108422_ip = 36;
                        continue _fun108422
                    }
                case 15:
                    var5 = _closure2_slot4;
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var1
                        _fun108423: for (var _fun108423_ip = 0;;) switch (_fun108423_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 5;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.extractTimestamp;
                                var2 = var1.id;
                                var5 = var3.bind(var4)(var2);
                                var6 = _closure2_slot2;
                                var4 = var6.getEntry;
                                var3 = var1.application;
                                var3 = var3.id;
                                var4 = var4.bind(var6)(var3);
                                var3 = null;
                                if (!(var3 == var4)) {
                                    _fun108423_ip = 110;
                                    continue _fun108423
                                }
                            case 78:
                                var4 = _closure2_slot2;
                                var3 = var4.track;
                                var1 = var1.application;
                                var2 = var1.id;
                                var1 = {};
                                var1.timestamp = var5;
                                var1 = var3.bind(var4)(var2, var1);
                            case 110:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                case 36:
                    var4 = _closure2_slot2;
                    var3 = var4.compute;
                    var3 = var3.bind(var4)();
                    var3 = _closure2_slot4;
                    var3 = var2 == var3;
                    var5 = undefined;
                    if (var3) {
                        _fun108422_ip = 84;
                        continue _fun108422
                    }
                case 63:
                    var6 = _closure2_slot4;
                    var4 = var6.map;
                    var3 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getApplicationCommandSection;
                        var0 = arg0;
                        var1 = var0.application;
                        var0 = true;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var5 = var4.bind(var6)(var3);
                case 84:
                    if (!(var2 == var5)) {
                        _fun108422_ip = 92;
                        continue _fun108422
                    }
                case 88:
                    var5 = new Array(0);
                case 92:
                    var8 = _closure2_slot3;
                    var0 = new Array(0);
                    var9 = var0;
                    var7 = 0;
                    var2 = arraySpread(var9, var8, var7);
                    var3 = var0.push;
                    var2 = new Array(0);
                    var9 = var2;
                    var8 = var5;
                    var4 = arraySpread(var9, var8, var7);
                    var9 = var3;
                    var8 = var2;
                    var7 = var0;
                    var2 = apply(var9, var8, var7);
                    var2 = var0.sort;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun108425: for (var _fun108425_ip = 0;;) switch (_fun108425_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var4 = _closure2_slot2;
                                var3 = var4.getScore;
                                var0 = var1.id;
                                var6 = var3.bind(var4)(var0);
                                var0 = null;
                                var7 = var0 != var6;
                                var3 = 0;
                                var4 = 0;
                                if (!var7) {
                                    _fun108425_ip = 45;
                                    continue _fun108425
                                }
                            case 42:
                                var4 = var6;
                            case 45:
                                var7 = _closure2_slot2;
                                var6 = var7.getScore;
                                var5 = var2.id;
                                var5 = var6.bind(var7)(var5);
                                var6 = var0 != var5;
                                var0 = 0;
                                if (!var6) {
                                    _fun108425_ip = 77;
                                    continue _fun108425
                                }
                            case 74:
                                var0 = var5;
                            case 77:
                                var0 = var4 - var0;
                                if (!(var3 === var0)) {
                                    _fun108425_ip = 106;
                                    continue _fun108425
                                }
                            case 85:
                                var3 = var2.name;
                                var2 = var3.localeCompare;
                                var1 = var1.name;
                                var0 = var2.bind(var3)(var1);
                            case 106:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var7 = var7.bind(var3)(var1, var2);
        var _closure2_slot5 = var7;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun108426: for (var _fun108426_ip = 0;;) switch (_fun108426_ip) {
                case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun108426_ip = 36;
                        continue _fun108426
                    }
                case 15:
                    var5 = _closure2_slot1;
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var1
                        _fun108427: for (var _fun108427_ip = 0;;) switch (_fun108427_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var2 = var4.extractTimestamp;
                                var1 = var3.id;
                                var2 = var2.bind(var4)(var1);
                                var5 = _closure3_slot1;
                                var4 = null;
                                var4 = var4 == var5;
                                if (var4) {
                                    _fun108427_ip = 68;
                                    continue _fun108427
                                }
                            case 60:
                                var5 = _closure3_slot1;
                                var4 = var2 > var5;
                            case 68:
                                if (!var4) {
                                    _fun108427_ip = 79;
                                    continue _fun108427
                                }
                            case 71:
                                var _closure3_slot0 = var3;
                                var _closure3_slot1 = var2;
                            case 79:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                case 36:
                    var5 = _closure2_slot3;
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var1
                        _fun108428: for (var _fun108428_ip = 0;;) switch (_fun108428_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = global;
                                var4 = var0.Math;
                                var2 = var4.max;
                                var5 = _closure2_slot2;
                                var1 = var5.getEntry;
                                var0 = var3.id;
                                var1 = var1.bind(var5)(var0);
                                var5 = null;
                                var6 = var5 == var1;
                                var0 = undefined;
                                var7 = undefined;
                                if (var6) {
                                    _fun108428_ip = 58;
                                    continue _fun108428
                                }
                            case 52:
                                var7 = var1.recentUses;
                            case 58:
                                if (!(var5 == var7)) {
                                    _fun108428_ip = 66;
                                    continue _fun108428
                                }
                            case 62:
                                var7 = new Array(0);
                            case 66:
                                var1 = new Array(0);
                                var8 = 0;
                                var10 = var1;
                                var9 = var7;
                                var6 = arraySpread(var10, var9, var8);
                                var10 = var2;
                                var9 = var1;
                                var8 = var4;
                                var2 = apply(var10, var9, var8);
                                var4 = _closure3_slot1;
                                var4 = var5 == var4;
                                if (var4) {
                                    _fun108428_ip = 117;
                                    continue _fun108428
                                }
                            case 109:
                                var5 = _closure3_slot1;
                                var4 = var2 > var5;
                            case 117:
                                if (!var4) {
                                    _fun108428_ip = 128;
                                    continue _fun108428
                                }
                            case 120:
                                _closure3_slot0 = var3;
                                _closure3_slot1 = var2;
                            case 128:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure3_slot0;
                    var5 = var2 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun108426_ip = 89;
                        continue _fun108426
                    }
                case 70:
                    var4 = var4.application;
                    var5 = var2 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun108426_ip = 89;
                        continue _fun108426
                    }
                case 84:
                    var3 = var4.id;
                case 89:
                    var4 = var2 != var3;
                    var2 = '';
                    if (!var4) {
                        _fun108426_ip = 103;
                        continue _fun108426
                    }
                case 100:
                    var2 = var3;
                case 103:
                    var _closure3_slot2 = var2;
                    var4 = _closure2_slot5;
                    var2 = var4.filter;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot2;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var8 = var2.bind(var4)(var0);
                    var0 = new Array(0);
                    var7 = 0;
                    var9 = var0;
                    var7 = arraySpread(var9, var8, var7);
                    var3 = var4.filter;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot2;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var8 = var3.bind(var4)(var1);
                    var9 = var0;
                    var1 = arraySpread(var9, var8, var7);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSortApplicationsViaFrecency = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4675, 665, 1355, 566, 21, 4544, 2]);