// modules/premium/native/launchPremiumPlanSelect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot3 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/launchPremiumPlanSelect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: launchPremiumPlanSelect, environment: var1
        _fun59264: for (var _fun59264_ip = 0;;) switch (_fun59264_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.predicate;
                var _closure2_slot0 = var0;
                var5 = var3.navigation;
                var10 = var3.showCurrentPlan;
                var0 = undefined;
                if (!(var10 === var0)) {
                    _fun59264_ip = 35;
                    continue _fun59264
                }
            case 33:
                var10 = true;
            case 35:
                var12 = var3.analyticsLocation;
                var11 = var3.analyticsLocations;
                var9 = var3.planId;
                var8 = var3.applicationId;
                var2 = var3.onBack;
                var7 = var3.onPaymentSuccess;
                var6 = var3.onPaymentDismiss;
                var13 = function(arg0) { // Original name: wrappedPredicate, environment: var1
                    _fun59265: for (var _fun59265_ip = 0;;) switch (_fun59265_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 1;
                            var0 = var2[var0];
                            var4 = undefined;
                            var1 = var1.bind(var4)(var0);
                            var0 = var1.shouldAlwaysExcludeFromPlanSelect;
                            var0 = var0.bind(var1)(var5);
                            var0 = !var0;
                            if (!var0) {
                                _fun59265_ip = 85;
                                continue _fun59265
                            }
                        case 45:
                            var2 = _closure2_slot0;
                            var1 = null;
                            var6 = var1 == var2;
                            var2 = undefined;
                            if (var6) {
                                _fun59265_ip = 72;
                                continue _fun59265
                            }
                        case 63:
                            var3 = _closure2_slot0;
                            var2 = var3.bind(var4)(var5);
                        case 72:
                            var1 = var1 == var2;
                            if (var1) {
                                _fun59265_ip = 82;
                                continue _fun59265
                            }
                        case 79:
                            var1 = var2;
                        case 82:
                            var0 = var1;
                        case 85:
                            return var0;
                    }
                };
                var3 = _closure1_slot3;
                var4 = var3.PREMIUM_PLAN_SELECT;
                var3 = null;
                if (!(var3 == var5)) {
                    _fun59264_ip = 241;
                    continue _fun59264
                }
            case 103:
                var14 = _closure1_slot1;
                var18 = _closure1_slot2;
                var3 = 2;
                var3 = var18[var3];
                var16 = var14.bind(var0)(var3);
                var15 = var16.pushLazy;
                var17 = _closure1_slot0;
                var3 = 4;
                var3 = var18[var3];
                var19 = var17.bind(var0)(var3);
                var3 = 3;
                var14 = var18[var3];
                var3 = var18.paths;
                var14 = var19.bind(var0)(var14, var3);
                var3 = {};
                var3.initialRoute = var4;
                var3.analyticsLocation = var12;
                var3.analyticsLocations = var11;
                var3.predicate = var13;
                var3.showCurrentPlan = var10;
                var3.planId = var9;
                var3.applicationId = var8;
                var3.onBack = var2;
                var3.onPaymentSuccess = var7;
                var3.onPaymentDismiss = var6;
                var2 = 5;
                var2 = var18[var2];
                var2 = var17.bind(var0)(var2);
                var2 = var2.PREMIUM_KEY;
                var2 = var15.bind(var16)(var14, var3, var2);
                _fun59264_ip = 293;
                continue _fun59264;
            case 241:
                var3 = var5.push;
                var2 = {};
                var2.predicate = var13;
                var2.analyticsLocation = var12;
                var2.analyticsLocations = var11;
                var2.showCurrentPlan = var10;
                var2.planId = var9;
                var2.applicationId = var8;
                var2.onPaymentSuccess = var7;
                var2.onPaymentDismiss = var6;
                var2 = var3.bind(var5)(var4, var2);
            case 293:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.trackUserSettingsPaneViewed;
                var1 = {};
                var1.destinationPane = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.launchPremiumPlanSelect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 7093, 4525, 7006, 1307, 7006, 7187, 2]);