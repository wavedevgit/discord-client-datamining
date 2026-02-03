// modules/errors/CommonSentryInitUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var3 = var1.AnalyticEvents;
    var6 = var3.START_SPEAKING;
    var1 = new Array(7);
    var1[0] = var6;
    var6 = var3.START_LISTENING;
    var1[1] = var6;
    var6 = var3.APP_OPENED;
    var1[2] = var6;
    var6 = var3.NOTIFICATION_CLICKED;
    var1[3] = var6;
    var6 = var3.EXPERIMENT_USER_TRIGGERED;
    var1[4] = var6;
    var6 = var3.EXPERIMENT_DM_TRIGGERED;
    var1[5] = var6;
    var3 = var3.EXPERIMENT_GUILD_TRIGGERED;
    var1[6] = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/CommonSentryInitUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.IGNORE_ANALYTICS_BREADCRUMB_EVENTS = var1;
    var1 = function arg0() {
        var1 = arg0;
        var2 = var1.maxBudgetMinute;
        var _closure2_slot0 = var2;
        var1 = var1.maxBudgetHour;
        var _closure2_slot1 = var1;
        var1 = {};
        var2 = {
            'slot': 0,
            'budgetUsed': 0
        };
        var1.minute = var2;
        var2 = {
            'slot': 0,
            'budgetUsed': 0
        };
        var1.hour = var2;
        var _closure2_slot2 = var1;
        var0 = function() { // Environment: var0
            _fun96751: for (var _fun96751_ip = 0;;) switch (_fun96751_ip) {
                case 0:
                    var1 = global;
                    var2 = var1.Date;
                    var0 = var2.now;
                    var5 = var0.bind(var2)();
                    var6 = var1.Math;
                    var4 = var6.round;
                    var0 = 1000;
                    var2 = var5 / var0;
                    var3 = 60;
                    var2 = var2 / var3;
                    var4 = var4.bind(var6)(var2);
                    var2 = var1.Math;
                    var1 = var2.round;
                    var0 = var5 / var0;
                    var0 = var0 / var3;
                    var0 = var0 / var3;
                    var3 = var1.bind(var2)(var0);
                    var0 = _closure2_slot2;
                    var0 = var0.minute;
                    var0 = var0.slot;
                    if (!(var0 !== var4)) {
                        _fun96751_ip = 131;
                        continue _fun96751
                    }
                case 101:
                    var0 = _closure2_slot2;
                    var2 = var0.minute;
                    var2.slot = var4;
                    var2 = var0.minute;
                    var0 = 0;
                    var2.budgetUsed = var0;
                case 131:
                    var0 = _closure2_slot2;
                    var0 = var0.hour;
                    var0 = var0.slot;
                    if (!(var0 !== var3)) {
                        _fun96751_ip = 181;
                        continue _fun96751
                    }
                case 151:
                    var0 = _closure2_slot2;
                    var2 = var0.hour;
                    var2.slot = var3;
                    var2 = var0.hour;
                    var0 = 0;
                    var2.budgetUsed = var0;
                case 181:
                    var0 = _closure2_slot2;
                    var0 = var0.minute;
                    var2 = var0.budgetUsed;
                    var0 = _closure2_slot0;
                    var0 = var2 < var0;
                    if (!var0) {
                        _fun96751_ip = 253;
                        continue _fun96751
                    }
                case 208:
                    var2 = _closure2_slot2;
                    var4 = var2.minute;
                    var3 = var4.budgetUsed;
                    var3 = var3 + 1;
                    var4.budgetUsed = var3;
                    var2 = var2.hour;
                    var3 = var2.budgetUsed;
                    var2 = _closure2_slot1;
                    var0 = var3 < var2;
                case 253:
                    if (!var0) {
                        _fun96751_ip = 283;
                        continue _fun96751
                    }
                case 256:
                    var1 = _closure2_slot2;
                    var2 = var1.hour;
                    var1 = var2.budgetUsed;
                    var1 = var1 + 1;
                    var2.budgetUsed = var1;
                    var0 = true;
                case 283:
                    return var0;
            }
        };
        return var0;
    };
    var2.filterThrottle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);