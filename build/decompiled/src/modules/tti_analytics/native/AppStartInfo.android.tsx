// modules/tti_analytics/native/AppStartInfo.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.NativeModules;
    var _closure1_slot2 = var6;
    var1 = var1.Platform;
    var _closure1_slot3 = var1;
    var1 = {};
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function() {
        _fun93290: for (var _fun93290_ip = 0;;) switch (_fun93290_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.getMainActivityCreationTime;
                var4 = var0.bind(var1)();
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun93290_ip = 76;
                    continue _fun93290
                }
            case 44:
                var1 = _closure1_slot4;
                var1 = var1[var4];
                var3 = !var1;
                var1 = !var3;
                if (!var3) {
                    _fun93290_ip = 73;
                    continue _fun93290
                }
            case 61:
                var3 = _closure1_slot4;
                var2 = true;
                var3[var4] = var2;
                var1 = false;
            case 73:
                var0 = var1;
            case 76:
                return var0;
        }
    };
    var1.getAppUIViewed = var6;
    var6 = function arg0() {
        _fun93291: for (var _fun93291_ip = 0;;) switch (_fun93291_ip) {
            case 0:
                var1 = _closure1_slot2;
                var1 = var1.TTIManager;
                var2 = var1.ApplicationStartedTimestamp;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun93291_ip = 133;
                    continue _fun93291
                }
            case 25:
                var1 = 0;
                if (!(!(var2 <= var1))) {
                    _fun93291_ip = 133;
                    continue _fun93291
                }
            case 31:
                var1 = _closure1_slot3;
                var3 = var1.Version;
                var1 = 28;
                if (!(!(var3 < var1))) {
                    _fun93291_ip = 99;
                    continue _fun93291
                }
            case 48:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.wasInitializeCompleteWhenActivityOpened;
                var1 = var0.bind(var1)();
                var0 = 'COLD';
                if (!var1) {
                    _fun93291_ip = 97;
                    continue _fun93291
                }
            case 91:
                var0 = 'WARM';
            case 97:
                _fun93291_ip = 131;
                continue _fun93291;
            case 99:
                var1 = arg0;
                var3 = var1 - var2;
                var1 = 'WARM';
                var2 = 3000;
                if (!(var3 < var2)) {
                    _fun93291_ip = 128;
                    continue _fun93291
                }
            case 122:
                var1 = 'COLD';
            case 128:
                var0 = var1;
            case 131:
                return var0;
            case 133:
                var0 = undefined;
                return var0;
        }
    };
    var1.getAppStartType = var6;
    var3 = function() {
        _fun93292: for (var _fun93292_ip = 0;;) switch (_fun93292_ip) {
            case 0:
                var7 = this;
                var1 = _closure1_slot2;
                var1 = var1.TTIManager;
                var3 = var1.ApplicationStartedTimestamp;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun93292_ip = 193;
                    continue _fun93292
                }
            case 31:
                var2 = 0;
                if (!(!(var3 <= var2))) {
                    _fun93292_ip = 193;
                    continue _fun93292
                }
            case 40:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 1;
                var2 = var2[var6];
                var5 = undefined;
                var4 = var4.bind(var5)(var2);
                var2 = var4.getMainActivityCreationTime;
                var2 = var2.bind(var4)();
                if (!(var1 != var2)) {
                    _fun93292_ip = 157;
                    continue _fun93292
                }
            case 76:
                var1 = {};
                var4 = var7.getAppStartType;
                var4 = var4.bind(var7)(var2);
                var1.app_start_type = var4;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var4 = var4.bind(var5)(var0);
                var0 = var4.getLaunchScenario;
                var0 = var0.bind(var4)();
                var1.app_launch_scenario = var0;
                var0 = var2 - var3;
                var1.android_time_creation_to_create_main_activity = var0;
                var0 = {};
                var0.appCreatedTime = var3;
                var0.appOpenedTime = var2;
                var0.extraProperties = var1;
                return var0;
            case 157:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = "NativeTTIModule.getMainActivityCreationTime() is not defined. That's unexpected!";
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 193:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = "NativeModules.TTIManager.ApplicationStartedTimestamp is not defined. That's unexpected!";
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1.getAppStartInfo = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/tti_analytics/native/AppStartInfo.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AppStartInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 12209, 2]);