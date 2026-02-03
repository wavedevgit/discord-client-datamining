// modules/guild_role_subscriptions/useTrialIntervalOptions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TIER_TRIAL_INTERVALS;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionIntervalTypes;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/useTrialIntervalOptions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun84686: for (var _fun84686_ip = 0;;) switch (_fun84686_ip) {
                case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var3
                        _fun84687: for (var _fun84687_ip = 0;;) switch (_fun84687_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = {};
                                var0.value = var2;
                                var4 = var2.interval;
                                var3 = _closure1_slot4;
                                var3 = var3.DAY;
                                if (!(var4 === var3)) {
                                    _fun84687_ip = 45;
                                    continue _fun84687
                                }
                            case 32:
                                var4 = var2.interval_count;
                                var3 = 7;
                                if (!(var3 !== var4)) {
                                    _fun84687_ip = 80;
                                    continue _fun84687
                                }
                            case 45:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var3 = 4;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.formatPlanIntervalDuration;
                                var3 = var3.bind(var4)(var2);
                                _fun84687_ip = 172;
                                continue _fun84687;
                            case 80:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var4 = 3;
                                var5 = var11[var4];
                                var9 = undefined;
                                var5 = var10.bind(var9)(var5);
                                var7 = var5.intl;
                                var6 = var7.formatToPlainString;
                                var4 = var11[var4];
                                var4 = var10.bind(var9)(var4);
                                var4 = var4.t;
                                var5 = var4.XfSsr1;
                                var4 = {};
                                var8 = 4;
                                var8 = var11[var8];
                                var9 = var10.bind(var9)(var8);
                                var8 = var9.formatPlanIntervalDuration;
                                var8 = var8.bind(var9)(var2);
                                var4.defaultLimit = var8;
                                var3 = var6.bind(var7)(var5, var4);
                            case 172:
                                var0.label = var3;
                                var3 = var2.interval;
                                var1 = _closure1_slot4;
                                var1 = var1.DAY;
                                var1 = var3 === var1;
                                if (!var1) {
                                    _fun84687_ip = 212;
                                    continue _fun84687
                                }
                            case 199:
                                var3 = var2.interval_count;
                                var2 = 7;
                                var1 = var2 === var3;
                            case 212:
                                var0.isDefault = var1;
                                return var0;
                        }
                    };
                    var2 = var1.bind(var2)(var0);
                    var4 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 == var4)) {
                        _fun84686_ip = 45;
                        continue _fun84686
                    }
                case 39:
                    var1 = _closure2_slot0;
                    _fun84686_ip = 79;
                    continue _fun84686;
                case 45:
                    var4 = var2.find;
                    var3 = function(arg0) { // Environment: var3
                        _fun84688: for (var _fun84688_ip = 0;;) switch (_fun84688_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.value;
                                var0 = null;
                                var0 = var0 != var2;
                                if (!var0) {
                                    _fun84688_ip = 45;
                                    continue _fun84688
                                }
                            case 17:
                                var2 = var1.value;
                                var3 = var2.interval;
                                var2 = _closure2_slot0;
                                var2 = var2.interval;
                                var0 = var3 === var2;
                            case 45:
                                if (!var0) {
                                    _fun84688_ip = 76;
                                    continue _fun84688
                                }
                            case 48:
                                var1 = var1.value;
                                var2 = var1.interval_count;
                                var1 = _closure2_slot0;
                                var1 = var1.interval_count;
                                var0 = var2 === var1;
                            case 76:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var2)(var3);
                    var4 = var0 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun84686_ip = 76;
                        continue _fun84686
                    }
                case 71:
                    var0 = var3.value;
                case 76:
                    var1 = var0;
                case 79:
                    var0 = {};
                    var0.options = var2;
                    var0.selectedOption = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5635, 1623, 1234, 10826, 2]);