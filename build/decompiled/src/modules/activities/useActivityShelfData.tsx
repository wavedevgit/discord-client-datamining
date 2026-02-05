// modules/activities/useActivityShelfData.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useActivityShelfData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90420: for (var _fun90420_ip = 0;;) switch (_fun90420_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var1 = var5[var2];
                var6 = undefined;
                var9 = var4.bind(var6)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = var1.getCurrentUser;
                var1 = var8.bind(var9)(var7, var1);
                var _closure2_slot1 = var1;
                var7 = var5[var2];
                var10 = var4.bind(var6)(var7);
                var9 = var10.useStateFromStoresArray;
                var7 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getShelfActivities;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var10)(var8, var7);
                var _closure2_slot2 = var9;
                var2 = var5[var2];
                var7 = var4.bind(var6)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.testModeEmbeddedApplicationId;
                    return var0;
                };
                var4 = var5.bind(var7)(var4, var2);
                var _closure2_slot3 = var4;
                var5 = var9.map;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.application_id;
                    return var0;
                };
                var10 = var5.bind(var9)(var2);
                var7 = null;
                var5 = var10;
                if (!(var7 != var4)) {
                    _fun90420_ip = 203;
                    continue _fun90420
                }
            case 179:
                var2 = new Array(1);
                var2[0] = var4;
                var11 = 1;
                var13 = var2;
                var12 = var10;
                var8 = arraySpread(var13, var12, var11);
                var5 = var2;
            case 203:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 5;
                var2 = var10[var2];
                var2 = var8.bind(var6)(var2);
                var2 = var2.bind(var6)(var5);
                var _closure2_slot4 = var2;
                var3 = _closure1_slot3;
                var8 = var3.useMemo;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot4;
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var8.bind(var3)(var2, var5);
                var _closure2_slot5 = var2;
                var8 = var3.useMemo;
                var5 = new Array(2);
                var5[0] = var2;
                var5[1] = var4;
                var4 = function() { // Environment: var0
                    _fun90425: for (var _fun90425_ip = 0;;) switch (_fun90425_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun90425_ip = 67;
                                continue _fun90425
                            }
                        case 13:
                            var0 = _closure2_slot5;
                            var0 = var0.length;
                            var3 = 0;
                            if (!(var0 > var3)) {
                                _fun90425_ip = 67;
                                continue _fun90425
                            }
                        case 28:
                            var0 = _closure2_slot5;
                            var0 = var0[var3];
                            var4 = var0.id;
                            var0 = _closure2_slot3;
                            if (!(var4 === var0)) {
                                _fun90425_ip = 67;
                                continue _fun90425
                            }
                        case 49:
                            var0 = _closure2_slot5;
                            var0 = var0[var3];
                            var0 = var0.embeddedActivityConfig;
                            if (!(var2 == var0)) {
                                _fun90425_ip = 73;
                                continue _fun90425
                            }
                        case 67:
                            var0 = new Array(0);
                            _fun90425_ip = 117;
                            continue _fun90425;
                        case 73:
                            var2 = {};
                            var4 = _closure2_slot5;
                            var4 = var4[var3];
                            var4 = var4.embeddedActivityConfig;
                            var2.activity = var4;
                            var1 = _closure2_slot5;
                            var1 = var1[var3];
                            var2.application = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 117:
                            return var0;
                    }
                };
                var4 = var8.bind(var3)(var4, var5);
                var _closure2_slot6 = var4;
                var8 = var3.useMemo;
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun90427: for (var _fun90427_ip = 0;;) switch (_fun90427_ip) {
                            case 0:
                                var3 = arg0;
                                var _closure4_slot0 = var3;
                                var2 = _closure2_slot5;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.id;
                                    var0 = _closure4_slot0;
                                    var0 = var0.application_id;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var2 = var1.bind(var2)(var0);
                                var0 = null;
                                var1 = var0 == var2;
                                if (var1) {
                                    _fun90427_ip = 56;
                                    continue _fun90427
                                }
                            case 42:
                                var1 = {};
                                var1.activity = var3;
                                var1.application = var2;
                                var0 = var1;
                            case 56:
                                return var0;
                        }
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var8.bind(var3)(var2, var5);
                var _closure2_slot7 = var5;
                var2 = var3.useMemo;
                var7 = var7 == var1;
                var6 = undefined;
                if (var7) {
                    _fun90420_ip = 354;
                    continue _fun90420
                }
            case 348:
                var6 = var1.nsfwAllowed;
            case 354:
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    var6 = _closure2_slot6;
                    var3 = new Array(0);
                    var5 = 0;
                    var7 = var3;
                    var5 = arraySpread(var7, var6, var5);
                    var6 = _closure2_slot7;
                    var7 = var3;
                    var1 = arraySpread(var7, var6, var5);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun90430: for (var _fun90430_ip = 0;;) switch (_fun90430_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.activity;
                                var2 = var0.supported_platforms;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun90430_ip = 25;
                                    continue _fun90430
                                }
                            case 21:
                                var2 = new Array(0);
                            case 25:
                                var1 = var2.includes;
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 7;
                                var3 = var6[var3];
                                var4 = undefined;
                                var3 = var5.bind(var4)(var3);
                                var5 = _closure1_slot0;
                                var0 = 8;
                                var0 = var6[var0];
                                var5 = var5.bind(var4)(var0);
                                var0 = var5.getOS;
                                var0 = var0.bind(var5)();
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun90431: for (var _fun90431_ip = 0;;) switch (_fun90431_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.activity;
                                var0 = var0.requires_age_gate;
                                var0 = !var0;
                                if (var0) {
                                    _fun90431_ip = 55;
                                    continue _fun90431
                                }
                            case 21:
                                var3 = _closure2_slot1;
                                var2 = null;
                                var3 = var2 == var3;
                                var2 = undefined;
                                if (var3) {
                                    _fun90431_ip = 49;
                                    continue _fun90431
                                }
                            case 39:
                                var1 = _closure2_slot1;
                                var2 = var1.nsfwAllowed;
                            case 49:
                                var1 = true;
                                var0 = var1 === var2;
                            case 55:
                                if (var0) {
                                    _fun90431_ip = 90;
                                    continue _fun90431
                                }
                            case 58:
                                var1 = _closure2_slot1;
                                var2 = null;
                                var4 = var2 == var1;
                                var1 = undefined;
                                if (var4) {
                                    _fun90431_ip = 86;
                                    continue _fun90431
                                }
                            case 76:
                                var3 = _closure2_slot1;
                                var1 = var3.nsfwAllowed;
                            case 86:
                                var0 = var2 == var1;
                            case 90:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useActivityShelfData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 7244, 1371, 566, 6904, 1304, 7972, 478, 2]);