// modules/user_settings/native/notifications/stores/AndroidNotificationSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun85477: for (var _fun85477_ip = 0;;) switch (_fun85477_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun85477_ip = 299;
                            continue _fun85477
                        }
                    case 12:
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 2;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun85477_ip = 296;
                            continue _fun85477
                        }
                    case 69: // try_start_0
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var9 = 3;
                        var2 = var2[var9];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getLightsEnabled;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 103);
                    case 101:
                        return var2;
                    case 103:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun85477_ip = 291;
                            continue _fun85477
                        }
                    case 112:
                        _closure4_slot0 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var9];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getVibrationsEnabled;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 147);
                    case 145:
                        return var3;
                    case 147:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun85477_ip = 288;
                            continue _fun85477
                        }
                    case 156:
                        _closure4_slot1 = var3;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var9];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.getSoundsEnabled;
                        var4 = var4.bind(var5)();
                        SaveGenerator(address = 191);
                    case 189:
                        return var4;
                    case 191:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun85477_ip = 285;
                            continue _fun85477
                        }
                    case 197:
                        _closure4_slot2 = var4;
                        var8 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var9];
                        var8 = var8.bind(var1)(var5);
                        var5 = var8.shouldAndroidNotifyEveryTime;
                        var5 = var5.bind(var8)();
                        SaveGenerator(address = 232);
                    case 230:
                        return var5;
                    case 232:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (var8) {
                            _fun85477_ip = 282;
                            continue _fun85477
                        }
                    case 238:
                        _closure4_slot3 = var5;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 4;
                        var7 = var9[var7];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.batchUpdates;
                        var6 = function() { // Environment: var6
                            var2 = _closure1_slot4;
                            var1 = var2.setState;
                            var0 = {};
                            var4 = _closure4_slot0;
                            var0.isLightsEnabled = var4;
                            var4 = _closure4_slot1;
                            var0.isVibrationsEnabled = var4;
                            var4 = _closure4_slot2;
                            var0.isSoundsEnabled = var4;
                            var3 = _closure4_slot3;
                            var0.isNotifyEveryTime = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var7.bind(var8)(var6);
                    case 280: // try_end0
                        _fun85477_ip = 296;
                        continue _fun85477;
                    case 282:
                        return var5;
                    case 285:
                        return var4;
                    case 288:
                        return var3;
                    case 291:
                        return var2;
                    case 294: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 296:
                        return var1;
                    case 299:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createWithEqualityFn;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = undefined;
        var0.isLightsEnabled = var1;
        var0.isVibrationsEnabled = var1;
        var0.isSoundsEnabled = var1;
        var0.isNotifyEveryTime = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/notifications/stores/AndroidNotificationSettingsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.initializeAndroidNotificationSettingsStore = var3;
    var3 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.isLightsEnabled;
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useAndroidNotificationLightsEnabled = var3;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 4;
        var5 = var4[var0];
        var0 = undefined;
        var6 = var6.bind(var0)(var5);
        var5 = var6.batchUpdates;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.isLightsEnabled = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var5.bind(var6)(var2);
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.setLightsEnabled;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var2.setAndroidNotificationLightsEnabled = var3;
    var3 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.isVibrationsEnabled;
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useAndroidNotificationVibrationsEnabled = var3;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 4;
        var5 = var4[var0];
        var0 = undefined;
        var6 = var6.bind(var0)(var5);
        var5 = var6.batchUpdates;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.isVibrationsEnabled = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var5.bind(var6)(var2);
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.setVibrationsEnabled;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var2.setAndroidNotificationVibrationsEnabled = var3;
    var3 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.isSoundsEnabled;
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useAndroidNotificationSoundsEnabled = var3;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 4;
        var5 = var4[var0];
        var0 = undefined;
        var6 = var6.bind(var0)(var5);
        var5 = var6.batchUpdates;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.isSoundsEnabled = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var5.bind(var6)(var2);
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.setSoundsEnabled;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var2.setAndroidNotificationSoundsEnabled = var3;
    var3 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.isNotifyEveryTime;
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useAndroidMessageNotificationsEnabled = var3;
    var1 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 4;
        var5 = var4[var0];
        var0 = undefined;
        var6 = var6.bind(var0)(var5);
        var5 = var6.batchUpdates;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.isNotifyEveryTime = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var5.bind(var6)(var2);
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.setAndroidNotifyEveryTime;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var2.setAndroidMessageNotificationsEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 797, 478, 8606, 802, 3067, 2]);