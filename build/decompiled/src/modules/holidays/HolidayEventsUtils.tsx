// modules/holidays/HolidayEventsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var3;
    var5 = function() {
        _fun113361: for (var _fun113361_ip = 0;;) switch (_fun113361_ip) {
            case 0:
                var0 = _closure1_slot4;
                var3 = undefined;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun113361_ip = 79;
                    continue _fun113361
                }
            case 16:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var4 = var1.experiment;
                var3 = var4.getCurrentConfig;
                var2 = {};
                var1 = 'holiday_events_is_eligible';
                var2.location = var1;
                var1 = {};
                var5 = false;
                var1.autoTrackExposure = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0 = var1.enabled;
            case 79:
                return var0;
        }
    };
    var _closure1_slot2 = var5;
    var4 = function() {
        _fun113362: for (var _fun113362_ip = 0;;) switch (_fun113362_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var5 = var1.experiment;
                var4 = var5.useExperiment;
                var3 = {};
                var1 = 'holiday_events_use_eligible';
                var3.location = var1;
                var1 = {};
                var6 = false;
                var1.autoTrackExposure = var6;
                var1 = var4.bind(var5)(var3, var1);
                var1 = var1.enabled;
                var0 = _closure1_slot4;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun113362_ip = 82;
                    continue _fun113362
                }
            case 79:
                var0 = var1;
            case 82:
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var1 = function() {
        _fun113363: for (var _fun113363_ip = 0;;) switch (_fun113363_ip) {
            case 0:
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var2 = var0.bind(var1)();
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.startTimeMs;
                var0 = var2 >= var0;
                if (!var0) {
                    _fun113363_ip = 81;
                    continue _fun113363
                }
            case 54:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.endTimeMs;
                var0 = var2 <= var1;
            case 81:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6.value = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var2, var1, var6);
    var1 = {};
    var6 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var3 = var0.experiment;
        var2 = var3.subscribe;
        var1 = {};
        var0 = 'holiday_events_subscribe';
        var1.location = var0;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.subscribe = var6;
    var1.isEligible = var5;
    var5 = function() {
        _fun113365: for (var _fun113365_ip = 0;;) switch (_fun113365_ip) {
            case 0:
                var0 = _closure1_slot3;
                var4 = undefined;
                var1 = var0.bind(var4)();
                var3 = null;
                var0 = null;
                if (!var1) {
                    _fun113365_ip = 135;
                    continue _fun113365
                }
            case 20:
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 0;
                var1 = var1[var5];
                var1 = var6.bind(var4)(var1);
                var1 = var1.soundpack;
                var0 = null;
                if (!var1) {
                    _fun113365_ip = 135;
                    continue _fun113365
                }
            case 50:
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var6.bind(var4)(var1);
                var1 = var1.soundpackLabel;
                var1 = var3 != var1;
                var0 = null;
                if (!var1) {
                    _fun113365_ip = 135;
                    continue _fun113365
                }
            case 82:
                var1 = {};
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.soundpack;
                var1.soundpack = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.soundpackLabel;
                var1.soundpackLabel = var2;
                var0 = var1;
            case 135:
                return var0;
        }
    };
    var1.useHolidaySoundpack = var5;
    var1.useIsEligible = var4;
    var4 = function() {
        _fun113366: for (var _fun113366_ip = 0;;) switch (_fun113366_ip) {
            case 0:
                var0 = _closure1_slot4;
                var3 = undefined;
                var2 = var0.bind(var3)();
                var0 = null;
                if (!var2) {
                    _fun113366_ip = 43;
                    continue _fun113366
                }
            case 18:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var0 = var1.appSpinnerSources;
            case 43:
                return var0;
        }
    };
    var1.getAppSpinnerSources = var4;
    var4 = function() {
        _fun113367: for (var _fun113367_ip = 0;;) switch (_fun113367_ip) {
            case 0:
                var0 = _closure1_slot4;
                var4 = undefined;
                var1 = var0.bind(var4)();
                var3 = null;
                var0 = null;
                if (!var1) {
                    _fun113367_ip = 84;
                    continue _fun113367
                }
            case 20:
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 0;
                var1 = var1[var5];
                var1 = var6.bind(var4)(var1);
                var1 = var1.getLoadingTips;
                var3 = var3 == var1;
                var1 = undefined;
                if (var3) {
                    _fun113367_ip = 81;
                    continue _fun113367
                }
            case 54:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getLoadingTips;
                var1 = var2.bind(var3)();
            case 81:
                var0 = var1;
            case 84:
                return var0;
        }
    };
    var1.getLoadingTips = var4;
    var0 = function() {
        _fun113368: for (var _fun113368_ip = 0;;) switch (_fun113368_ip) {
            case 0:
                var0 = _closure1_slot2;
                var3 = undefined;
                var2 = var0.bind(var3)();
                var0 = null;
                if (!var2) {
                    _fun113368_ip = 71;
                    continue _fun113368
                }
            case 18:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 0;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.soundpack;
                var0 = null;
                if (!var2) {
                    _fun113368_ip = 71;
                    continue _fun113368
                }
            case 48:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var0 = var1.soundpack;
            case 71:
                return var0;
        }
    };
    var1.getHolidaySoundpack = var0;
    var0 = 1;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/holidays/HolidayEventsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [14534, 2]);