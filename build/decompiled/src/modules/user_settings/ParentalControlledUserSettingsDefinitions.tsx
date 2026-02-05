// modules/user_settings/ParentalControlledUserSettingsDefinitions.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/ParentalControlledUserSettingsDefinitions.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2, arg3() {
        _fun81847: for (var _fun81847_ip = 0;;) switch (_fun81847_ip) {
            case 0:
                var2 = arguments[4];
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = arg2;
                var _closure2_slot2 = var0;
                var0 = arg3;
                var _closure2_slot3 = var0;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun81847_ip = 41;
                    continue _fun81847
                }
            case 39:
                var2 = {};
            case 41:
                var2 = var2.comparator;
                if (!(var2 === var0)) {
                    _fun81847_ip = 58;
                    continue _fun81847
                }
            case 51:
                var2 = function arg0, arg1() {
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var1 === var0;
                    return var0;
                };
            case 58:
                var _closure2_slot4 = var2;
                var _closure2_slot5 = var0;
                var _closure2_slot6 = var0;
                var2 = function arg0() {
                    _fun81849: for (var _fun81849_ip = 0;;) switch (_fun81849_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var4 = _closure1_slot3;
                            var1 = var4.getSettings;
                            var0 = arg0;
                            var6 = var1.bind(var4)(var0);
                            var5 = null;
                            var4 = var5 == var6;
                            var1 = undefined;
                            var0 = undefined;
                            if (var4) {
                                _fun81849_ip = 66;
                                continue _fun81849
                            }
                        case 41:
                            var4 = _closure2_slot0;
                            var4 = var6[var4];
                            var5 = var5 == var4;
                            var0 = undefined;
                            if (var5) {
                                _fun81849_ip = 66;
                                continue _fun81849
                            }
                        case 58:
                            var3 = _closure2_slot1;
                            var0 = var4[var3];
                        case 66:
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var _closure2_slot7 = var2;
                var0 = {};
                var0.getControlledSetting = var2;
                _closure2_slot5 = var2;
                var2 = function arg0, arg1() {
                    _fun81850: for (var _fun81850_ip = 0;;) switch (_fun81850_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = arg1;
                            var _closure3_slot0 = var1;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun81850_ip = 72;
                                continue _fun81850
                            }
                        case 18:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 1;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.updateTeenSettings;
                            var1 = _closure2_slot0;
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
                            var0 = var2.bind(var3)(var4, var1, var0);
                            _fun81850_ip = 90;
                            continue _fun81850;
                        case 72:
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.resolve;
                            var0 = var1.bind(var2)();
                        case 90:
                            return var0;
                    }
                };
                _closure2_slot6 = var2;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun81852: for (var _fun81852_ip = 0;;) switch (_fun81852_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = arg1;
                            var2 = _closure2_slot6;
                            var6 = 'function';
                            var4 = typeof var5;
                            var1 = var5;
                            if (!(var6 === var4)) {
                                _fun81852_ip = 43;
                                continue _fun81852
                            }
                        case 27:
                            var0 = _closure2_slot5;
                            var4 = undefined;
                            var0 = var0.bind(var4)(var3);
                            var1 = var5.bind(var4)(var0);
                        case 43:
                            var0 = undefined;
                            var0 = var2.bind(var0)(var3, var1);
                            return var0;
                    }
                };
                var0.updateControlledSetting = var2;
                var1 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.useStateFromStores;
                    var2 = _closure1_slot3;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var6 = _closure2_slot4;
                    var8 = function() { // Environment: var0
                        var2 = _closure2_slot7;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var10 = var5;
                    var9 = var3;
                    var7 = var2;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0.useControlledSetting = var1;
                return var0;
        }
    };
    var2.defineParentalControlledSetting = var3;
    var1 = function arg0() {
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
        var2 = function arg0() {
            _fun81856: for (var _fun81856_ip = 0;;) switch (_fun81856_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.getControlledSetting;
                    var0 = arg0;
                    var0 = var1.bind(var3)(var0);
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun81856_ip = 75;
                        continue _fun81856
                    }
                case 27:
                    var1 = _closure2_slot5;
                    if (!(var3 != var1)) {
                        _fun81856_ip = 45;
                        continue _fun81856
                    }
                case 35:
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                case 45:
                    var1 = _closure2_slot1;
                    var3 = undefined;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun81856_ip = 64;
                        continue _fun81856
                    }
                case 58:
                    var1 = _closure2_slot4;
                    _fun81856_ip = 72;
                    continue _fun81856;
                case 64:
                    var2 = _closure2_slot3;
                    var1 = var2.bind(var3)();
                case 72:
                    var0 = var1;
                case 75:
                    return var0;
            }
        };
        var0.getControlledSetting = var2;
        var2 = function arg0() {
            _fun81857: for (var _fun81857_ip = 0;;) switch (_fun81857_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.useControlledSetting;
                    var0 = arg0;
                    var0 = var1.bind(var3)(var0);
                    var1 = _closure2_slot2;
                    var3 = undefined;
                    var1 = var1.bind(var3)();
                    var5 = null;
                    if (!(var5 == var0)) {
                        _fun81857_ip = 73;
                        continue _fun81857
                    }
                case 37:
                    var4 = _closure2_slot5;
                    if (!(var5 != var4)) {
                        _fun81857_ip = 53;
                        continue _fun81857
                    }
                case 45:
                    var4 = _closure2_slot5;
                    var4 = var4.bind(var3)();
                case 53:
                    if (var1) {
                        _fun81857_ip = 62;
                        continue _fun81857
                    }
                case 56:
                    var1 = _closure2_slot4;
                    _fun81857_ip = 70;
                    continue _fun81857;
                case 62:
                    var2 = _closure2_slot3;
                    var1 = var2.bind(var3)();
                case 70:
                    var0 = var1;
                case 73:
                    return var0;
            }
        };
        var0.useControlledSetting = var2;
        var1 = function arg0, arg1() {
            var3 = _closure2_slot0;
            var2 = var3.updateControlledSetting;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.updateControlledSetting = var1;
        return var0;
    };
    var2.wrapParentalControlledSettingWithExperimentDefaults = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4596, 4595, 566, 2]);