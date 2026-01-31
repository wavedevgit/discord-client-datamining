// modules/user_settings/UserSettingDefinitions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: makeUpdateSettingFunction, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun15466: for (var _fun15466_ip = 0;;) switch (_fun15466_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure2_slot1;
                    var5 = 'function';
                    var3 = typeof var4;
                    var1 = var4;
                    if (!(var5 === var3)) {
                        _fun15466_ip = 39;
                        continue _fun15466
                    }
                case 24:
                    var0 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)();
                    var1 = var4.bind(var3)(var0);
                case 39:
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsDelay;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/UserSettingDefinitions.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: defineProtoSetting, environment: var1
        _fun15467: for (var _fun15467_ip = 0;;) switch (_fun15467_ip) {
            case 0:
                var0 = arguments[4];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = arg1;
                var _closure2_slot1 = var2;
                var2 = arg2;
                var _closure2_slot2 = var2;
                var2 = arg3;
                var _closure2_slot3 = var2;
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun15467_ip = 41;
                    continue _fun15467
                }
            case 39:
                var0 = {};
            case 41:
                var2 = var0.delay;
                if (!(var2 === var5)) {
                    _fun15467_ip = 64;
                    continue _fun15467
                }
            case 51:
                var3 = _closure1_slot5;
                var2 = var3.INFREQUENT_USER_ACTION;
            case 64:
                var _closure2_slot4 = var2;
                var0 = var0.comparator;
                if (!(var0 === var5)) {
                    _fun15467_ip = 83;
                    continue _fun15467
                }
            case 78:
                var0 = function(arg0, arg1) { // Original name: o, environment: var1
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var1 === var0;
                    return var0;
                };
            case 83:
                var _closure2_slot5 = var0;
                var4 = function() { // Original name: getSetting, environment: var1
                    _fun15469: for (var _fun15469_ip = 0;;) switch (_fun15469_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = _closure1_slot4;
                            var1 = var0.settings;
                            var0 = _closure2_slot0;
                            var4 = var1[var0];
                            var0 = null;
                            var5 = var0 == var4;
                            var1 = undefined;
                            var0 = undefined;
                            if (var5) {
                                _fun15469_ip = 49;
                                continue _fun15469
                            }
                        case 41:
                            var3 = _closure2_slot1;
                            var0 = var4[var3];
                        case 49:
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var _closure2_slot6 = var4;
                var0 = {};
                var0.getSetting = var4;
                var3 = _closure1_slot6;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var4 = var1.PreloadedUserSettingsActionCreators;
                    var3 = var4.updateAsync;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot4;
                    var0 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var2 = _closure2_slot1;
                        var5 = _closure2_slot3;
                        var4 = _closure3_slot0;
                        var1 = var3[var2];
                        var0 = undefined;
                        var1 = var5.bind(var0)(var4, var1);
                        var3[var2] = var1;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var2 = var3.bind(var5)(var4, var2);
                var0.updateSetting = var2;
                var1 = function() { // Original name: useSetting, environment: var1
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var1 = var3[var1];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var3 = var4.useStateFromStores;
                    var0 = _closure1_slot4;
                    var2 = new Array(1);
                    var2[0] = var0;
                    var8 = _closure2_slot6;
                    var6 = _closure2_slot5;
                    var10 = var4;
                    var9 = var2;
                    var7 = undefined;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0.useSetting = var1;
                return var0;
        }
    };
    var2.defineProtoSetting = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: wrapSettingWithSelectiveSyncing, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var4 = function() { // Original name: getSetting, environment: var1
            _fun15474: for (var _fun15474_ip = 0;;) switch (_fun15474_ip) {
                case 0:
                    var1 = _closure1_slot3;
                    var0 = var1.getState;
                    var2 = var0.bind(var1)();
                    var0 = _closure2_slot1;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun15474_ip = 53;
                        continue _fun15474
                    }
                case 39:
                    var4 = var3.settings;
                    var3 = _closure2_slot2;
                    var0 = var4[var3];
                case 53:
                    if (!(var2 == var0)) {
                        _fun15474_ip = 71;
                        continue _fun15474
                    }
                case 57:
                    var2 = _closure2_slot0;
                    var1 = var2.getSetting;
                    var0 = var1.bind(var2)();
                case 71:
                    return var0;
            }
        };
        var0 = {};
        var0.getSetting = var4;
        var2 = function() { // Original name: useSetting, environment: var1
            _fun15475: for (var _fun15475_ip = 0;;) switch (_fun15475_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = var1.useSetting;
                    var0 = var0.bind(var1)();
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.useStateFromStores;
                    var1 = _closure1_slot3;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = function() { // Environment: var1
                        _fun15476: for (var _fun15476_ip = 0;;) switch (_fun15476_ip) {
                            case 0:
                                var1 = _closure1_slot3;
                                var0 = var1.getState;
                                var2 = var0.bind(var1)();
                                var0 = _closure2_slot1;
                                var2 = var2[var0];
                                var0 = null;
                                var3 = var0 == var2;
                                var0 = undefined;
                                if (var3) {
                                    _fun15476_ip = 53;
                                    continue _fun15476
                                }
                            case 39:
                                var2 = var2.settings;
                                var1 = _closure2_slot2;
                                var0 = var2[var1];
                            case 53:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun15475_ip = 81;
                        continue _fun15475
                    }
                case 78:
                    var0 = var1;
                case 81:
                    return var0;
            }
        };
        var0.useSetting = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function(arg0) { // Environment: var1
            _fun15477: for (var _fun15477_ip = 0;;) switch (_fun15477_ip) {
                case 0:
                    var3 = arg0;
                    var5 = _closure1_slot3;
                    var4 = var5.shouldSync;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var5)(var2);
                    if (var2) {
                        _fun15477_ip = 127;
                        continue _fun15477
                    }
                case 31:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.dispatch;
                    var0 = {};
                    var5 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
                    var0.type = var5;
                    var5 = {};
                    var7 = _closure2_slot1;
                    var6 = {};
                    var8 = {};
                    var9 = _closure2_slot2;
                    var8[var9] = var3;
                    var6.settings = var8;
                    var5[var7] = var6;
                    var0.changes = var5;
                    var0 = var2.bind(var4)(var0);
                    var0 = global;
                    var2 = var0.Promise;
                    var0 = var2.resolve;
                    var0 = var0.bind(var2)();
                    _fun15477_ip = 142;
                    continue _fun15477;
                case 127:
                    var2 = _closure2_slot0;
                    var1 = var2.updateSetting;
                    var0 = var1.bind(var2)(var3);
                case 142:
                    return var0;
            }
        };
        var1 = var3.bind(var2)(var4, var1);
        var0.updateSetting = var1;
        return var0;
    };
    var2.wrapSettingWithSelectiveSyncing = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: wrapSettingWithOverride, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var0 = arg3;
        var _closure2_slot3 = var0;
        var4 = function() { // Original name: getSetting, environment: var1
            _fun15479: for (var _fun15479_ip = 0;;) switch (_fun15479_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun15479_ip = 33;
                        continue _fun15479
                    }
                case 19:
                    var2 = _closure2_slot0;
                    var1 = var2.getSetting;
                    var0 = var1.bind(var2)();
                case 33:
                    return var0;
            }
        };
        var0 = {};
        var0.getSetting = var4;
        var2 = function() { // Original name: useSetting, environment: var1
            _fun15480: for (var _fun15480_ip = 0;;) switch (_fun15480_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = var2.useSetting;
                    var0 = var0.bind(var2)();
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun15480_ip = 36;
                        continue _fun15480
                    }
                case 33:
                    var0 = var1;
                case 36:
                    return var0;
            }
        };
        var0.useSetting = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var0 = 'USER_SETTINGS_OVERRIDE_CLEAR';
            var1.type = var0;
            var5 = _closure2_slot1;
            var4 = new Array(1);
            var4[0] = var5;
            var1.settings = var4;
            var1 = var2.bind(var3)(var1);
            var2 = _closure2_slot0;
            var1 = var2.updateSetting;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var2)(var4, var1);
        var0.updateSetting = var1;
        return var0;
    };
    var2.wrapSettingWithOverride = var3;
    var1 = function(arg0) { // Original name: wrapSettingWithExperimentDefaults, environment: var1
        var0 = arg0;
        var2 = var0.baseSetting;
        var _closure2_slot0 = var2;
        var2 = var0.isEligible;
        var _closure2_slot1 = var2;
        var2 = var0.useIsEligible;
        var _closure2_slot2 = var2;
        var2 = var0.eligibleDefault;
        var _closure2_slot3 = var2;
        var2 = var0.ineligibleDefault;
        var _closure2_slot4 = var2;
        var0 = var0.onUseDefault;
        var _closure2_slot5 = var0;
        var0 = {};
        var2 = function() { // Original name: getSetting, environment: var1
            _fun15483: for (var _fun15483_ip = 0;;) switch (_fun15483_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = var1.getSetting;
                    var0 = var0.bind(var1)();
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun15483_ip = 71;
                        continue _fun15483
                    }
                case 23:
                    var1 = _closure2_slot5;
                    if (!(var3 != var1)) {
                        _fun15483_ip = 41;
                        continue _fun15483
                    }
                case 31:
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                case 41:
                    var1 = _closure2_slot1;
                    var3 = undefined;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun15483_ip = 60;
                        continue _fun15483
                    }
                case 54:
                    var1 = _closure2_slot4;
                    _fun15483_ip = 68;
                    continue _fun15483;
                case 60:
                    var2 = _closure2_slot3;
                    var1 = var2.bind(var3)();
                case 68:
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var0.getSetting = var2;
        var2 = function() { // Original name: useSetting, environment: var1
            _fun15484: for (var _fun15484_ip = 0;;) switch (_fun15484_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = var1.useSetting;
                    var0 = var0.bind(var1)();
                    var1 = _closure2_slot2;
                    var3 = undefined;
                    var1 = var1.bind(var3)();
                    var5 = null;
                    if (!(var5 == var0)) {
                        _fun15484_ip = 69;
                        continue _fun15484
                    }
                case 33:
                    var4 = _closure2_slot5;
                    if (!(var5 != var4)) {
                        _fun15484_ip = 49;
                        continue _fun15484
                    }
                case 41:
                    var4 = _closure2_slot5;
                    var4 = var4.bind(var3)();
                case 49:
                    if (var1) {
                        _fun15484_ip = 58;
                        continue _fun15484
                    }
                case 52:
                    var1 = _closure2_slot4;
                    _fun15484_ip = 66;
                    continue _fun15484;
                case 58:
                    var2 = _closure2_slot3;
                    var1 = var2.bind(var3)();
                case 66:
                    var0 = var1;
                case 69:
                    return var0;
            }
        };
        var0.useSetting = var2;
        var1 = function(arg0) { // Original name: updateSetting, environment: var1
            var2 = _closure2_slot0;
            var1 = var2.updateSetting;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.updateSetting = var1;
        return var0;
    };
    var2.wrapSettingWithExperimentDefaults = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1354, 1310, 665, 1355, 566, 806, 2]);