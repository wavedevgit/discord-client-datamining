// modules/user_settings/native/defs/StaffOnlyFindYourFriendsDeletionSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot6;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.isLoading = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var3 = _closure1_slot6;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 6;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.isLoading;
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun82371: for (var _fun82371_ip = 0;;) switch (_fun82371_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun82371_ip = 261;
                            continue _fun82371
                        }
                    case 10:
                        var1 = undefined;
                        var6 = undefined;
                        var4 = _closure1_slot6;
                        var2 = var4.getState;
                        var2 = var2.bind(var4)();
                        var2 = var2.isLoading;
                        if (var2) {
                            _fun82371_ip = 258;
                            continue _fun82371
                        }
                    case 43:
                        var4 = _closure1_slot7;
                        var2 = true;
                        var2 = var4.bind(var1)(var2);
                    case 54: // try_start_0 // try_start_1
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.adminDeleteContactSync;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address = 88);
                    case 86:
                        return var2;
                    case 88:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun82371_ip = 99;
                            continue _fun82371
                        }
                    case 94: // try_end0
                        _fun82371_ip = 230;
                        continue _fun82371;
                    case 99: // try_end1
                        var5 = _closure1_slot7;
                        var4 = false;
                        var4 = var5.bind(var1)(var4);
                        return var2;
                    case 113: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 8;
                        var2 = var7[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.APIError;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var2
                            }
                        });
                        var9 = var4;
                        var8 = var5;
                        var2 = new var9[var2](var8, var7);
                        var4 = var2 instanceof Object ? var2 : var4;
                        var2 = var4.getAnyErrorMessage;
                        var4 = var2.bind(var4)();
                        var6 = var4;
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun82371_ip = 230;
                            continue _fun82371
                        }
                    case 183:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var5 = var4.bind(var1)(var2);
                        var4 = var5.open;
                        var2 = {};
                        var7 = 'FIND_YOUR_FRIENDS_DELETION';
                        var2.key = var7;
                        var2.content = var6;
                        var2 = var4.bind(var5)(var2);
                    case 230: // try_end2
                        var4 = _closure1_slot7;
                        var2 = false;
                        var2 = var4.bind(var1)(var2);
                        _fun82371_ip = 258;
                        continue _fun82371;
                    case 243: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot7;
                        var3 = false;
                        var3 = var4.bind(var1)(var3);
                        throw var2;
                    case 258:
                        return var1;
                    case 261:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ActivityIndicator;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createWithEqualityFn;
    var1 = function() { // Environment: var7
        var0 = {};
        var1 = false;
        var0.isLoading = var1;
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var _closure1_slot6 = var1;
    var1 = 10;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var9 = 'STAFF ONLY - Find your friends deletion';
    var1.title = var9;
    var8 = var8.CONTENT_AND_SOCIAL_DISCORD;
    var1.parent = var8;
    var8 = function() {
        var1 = _closure1_slot8;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var1.useIsDisabled = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.onPress = var8;
    var8 = 11;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.useStaffOrDeveloperSettingPredicate;
    var1.usePredicate = var8;
    var7 = function() {
        _fun82375: for (var _fun82375_ip = 0;;) switch (_fun82375_ip) {
            case 0:
                var0 = _closure1_slot8;
                var4 = undefined;
                var2 = var0.bind(var4)();
                var0 = null;
                if (!var2) {
                    _fun82375_ip = 34;
                    continue _fun82375
                }
            case 18:
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 34:
                return var0;
        }
    };
    var1.useTrailing = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/StaffOnlyFindYourFriendsDeletionSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 7077, 33, 797, 802, 3078, 10389, 562, 3150, 9067, 10509, 2]);