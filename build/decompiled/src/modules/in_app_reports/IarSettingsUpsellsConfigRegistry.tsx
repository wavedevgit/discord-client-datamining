// modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = {};
    var4 = 1;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.SettingsUpsells;
    var9 = var7.SAFETY_DM_SPAM_FILTER;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var3[var9] = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.SettingsUpsells;
    var9 = var7.SAFETY_SC_FILTERS_SEXUAL_MEDIA;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var3[var9] = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SettingsUpsells;
    var7 = var4.SAFETY_SC_FILTERS_GRAPHIC_MEDIA;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var3[var7] = var4;
    var _closure1_slot3 = var3;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SettingsUpsellsConfigRegistry = var3;
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun54413: for (var _fun54413_ip = 0;;) switch (_fun54413_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun54413_ip = 34;
                        continue _fun54413
                    }
                case 16:
                    var3 = _closure2_slot0;
                    var2 = function arg0() {
                        _fun54414: for (var _fun54414_ip = 0;;) switch (_fun54414_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = new Array(0);
                                var _closure4_slot1 = var1;
                                var2 = global;
                                var4 = var2.Object;
                                var3 = var4.entries;
                                var2 = _closure1_slot3;
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    _fun54415: for (var _fun54415_ip = 0;;) switch (_fun54415_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var1 = var5[Symbol.iterator];
                                            var5 = var1().next;
                                            var2 = var5().value;
                                            var3 = var1;
                                            var0 = undefined;
                                            var4 = var3 === var0;
                                            var3 = undefined;
                                            if (var4) {
                                                _fun54415_ip = 27;
                                                continue _fun54415
                                            }
                                        case 24:
                                            var3 = var2;
                                        case 27:
                                            var2 = undefined;
                                            if (var4) {
                                                _fun54415_ip = 57;
                                                continue _fun54415
                                            }
                                        case 32:
                                            var6 = var5().value;
                                            var5 = var1;
                                            var5 = var5 === var0;
                                            var2 = undefined;
                                            var4 = var5;
                                            if (var5) {
                                                _fun54415_ip = 57;
                                                continue _fun54415
                                            }
                                        case 51:
                                            var2 = var6;
                                            var4 = var5;
                                        case 57:
                                            if (var4) {
                                                _fun54415_ip = 63;
                                                continue _fun54415
                                            }
                                        case 60:
                                            var1.return();
                                        case 63:
                                            var4 = var2.eligibleReportSubtypes;
                                            var1 = null;
                                            var1 = var1 == var4;
                                            if (var1) {
                                                _fun54415_ip = 101;
                                                continue _fun54415
                                            }
                                        case 78:
                                            var5 = var2.eligibleReportSubtypes;
                                            var4 = var5.includes;
                                            var2 = _closure4_slot0;
                                            var1 = var4.bind(var5)(var2);
                                        case 101:
                                            if (!var1) {
                                                _fun54415_ip = 121;
                                                continue _fun54415
                                            }
                                        case 104:
                                            var2 = _closure4_slot1;
                                            var1 = var2.push;
                                            var1 = var1.bind(var2)(var3);
                                        case 121:
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var0);
                                var3 = var1.length;
                                var2 = 0;
                                var0 = null;
                                if (!(var2 !== var3)) {
                                    _fun54414_ip = 74;
                                    continue _fun54414
                                }
                            case 71:
                                var0 = var1;
                            case 74:
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var0 = var2.bind(var1)(var3);
                case 34:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useIarReportSettingsUpsells = var3;
    var1 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure2_slot1;
                var2 = function arg0, arg1() {
                    _fun54419: for (var _fun54419_ip = 0;;) switch (_fun54419_ip) {
                        case 0:
                            var6 = arg1;
                            var1 = _closure1_slot3;
                            var0 = arg0;
                            var1 = var1[var0];
                            var7 = var1.predicate;
                            var5 = var1.eligibleChannelTypes;
                            var0 = null;
                            var2 = var0 == var7;
                            if (var2) {
                                _fun54419_ip = 59;
                                continue _fun54419
                            }
                        case 38:
                            var8 = var0 == var7;
                            var3 = undefined;
                            var4 = undefined;
                            if (var8) {
                                _fun54419_ip = 53;
                                continue _fun54419
                            }
                        case 49:
                            var4 = var7.bind(var3)();
                        case 53:
                            var3 = true;
                            var2 = var3 === var4;
                        case 59:
                            var3 = var0 == var6;
                            if (var3) {
                                _fun54419_ip = 70;
                                continue _fun54419
                            }
                        case 66:
                            var3 = var0 == var5;
                        case 70:
                            if (var3) {
                                _fun54419_ip = 83;
                                continue _fun54419
                            }
                        case 73:
                            var4 = var5.includes;
                            var3 = var4.bind(var5)(var6);
                        case 83:
                            if (!var2) {
                                _fun54419_ip = 89;
                                continue _fun54419
                            }
                        case 86:
                            var2 = var3;
                        case 89:
                            var0 = null;
                            if (!var2) {
                                _fun54419_ip = 97;
                                continue _fun54419
                            }
                        case 94:
                            var0 = var1;
                        case 97:
                            return var0;
                    }
                };
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0, var3);
                return var0;
            };
            var2 = var1.bind(var2)(var0);
            var1 = var2.filter;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 5;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.isNotNullish;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSettingsUpsellsConfigs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6561, 6572, 6573, 6574, 1304, 2]);