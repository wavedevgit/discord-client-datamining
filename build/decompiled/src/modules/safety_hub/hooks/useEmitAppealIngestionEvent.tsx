// modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx
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
    var3 = var3.SafetyHubAnalyticsActionSource;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var6;
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun79531: for (var _fun79531_ip = 0;;) switch (_fun79531_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var8 = 4;
                var1 = var4[var8];
                var7 = undefined;
                var9 = var3.bind(var7)(var1);
                var6 = var9.useStateFromStores;
                var1 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getAppealClassificationId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var6.bind(var9)(var5, var1);
                var _closure2_slot0 = var6;
                var1 = 5;
                var1 = var4[var1];
                var4 = var3.bind(var7)(var1);
                var3 = var4.useSafetyHubClassification;
                var5 = null;
                var1 = var6;
                if (!(var5 == var1)) {
                    _fun79531_ip = 92;
                    continue _fun79531
                }
            case 88:
                var1 = _closure1_slot6;
            case 92:
                var5 = var3.bind(var4)(var1);
                var _closure2_slot1 = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var9 = var4.bind(var7)(var1);
                var1 = var9.useSafetyHubAccountStanding;
                var1 = var1.bind(var9)();
                var _closure2_slot2 = var1;
                var3 = var3[var8];
                var8 = var4.bind(var7)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getIsDsaEligible;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var7.bind(var8)(var4, var3);
                var _closure2_slot3 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var7 = var1.state;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function(arg0) { // Environment: var0
                    _fun79534: for (var _fun79534_ip = 0;;) switch (_fun79534_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot7;
                            var2 = var1.SAFETY_HUB_ACTION;
                            var1 = {};
                            var5 = arg0;
                            var1.action = var5;
                            var7 = _closure2_slot2;
                            var7 = var7.state;
                            var1.account_standing = var7;
                            var8 = _closure2_slot0;
                            var7 = null;
                            var8 = var7 != var8;
                            if (!var8) {
                                _fun79534_ip = 107;
                                continue _fun79534
                            }
                        case 79:
                            var8 = global;
                            var9 = var8.Number;
                            var8 = _closure2_slot0;
                            var9 = var9.bind(var0)(var8);
                            var8 = new Array(1);
                            var8[0] = var9;
                            var7 = var8;
                        case 107:
                            var1.classification_ids = var7;
                            var6 = _closure1_slot5;
                            var6 = var6.AppealIngestion;
                            var1.source = var6;
                            var6 = _closure2_slot3;
                            var1.is_dsa_eligible = var6;
                            var5 = _closure2_slot1;
                            var5 = var5.violationType;
                            var1.violation_type = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useEmitAppealIngestionEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 10054, 5903, 660, 566, 10060, 10062, 795, 2]);