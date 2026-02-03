// modules/user_settings/native/defs/UploadDebugLogsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun85789: for (var _fun85789_ip = 0;;) switch (_fun85789_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun85789_ip = 420;
                            continue _fun85789
                        }
                    case 12:
                        var3 = undefined;
                        var1 = undefined;
                        var4 = function() {
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.batchUpdates;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot7;
                                var1 = var2.setState;
                                var0 = {
                                    'isDisabled': true,
                                    'isUploading': true
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var4.bind(var3)();
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 6;
                        var4 = var7[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.isIOS;
                        var4 = var4.bind(var5)();
                        var5 = _closure1_slot5;
                        if (var4) {
                            _fun85789_ip = 75;
                            continue _fun85789
                        }
                    case 67:
                        var4 = var5.ANDROID_APP;
                        _fun85789_ip = 81;
                        continue _fun85789;
                    case 75:
                        var4 = var5.IOS_APP;
                    case 81:
                        var1 = var4;
                    case 84: // try_start_0 // try_start_1
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 7;
                        var4 = var7[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.uploadDebugLogFiles;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 119);
                    case 117:
                        return var1;
                    case 119:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun85789_ip = 255;
                            continue _fun85789
                        }
                    case 128:
                        var5 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var4 = 8;
                        var4 = var12[var4];
                        var7 = var5.bind(var3)(var4);
                        var5 = var7.open;
                        var4 = {};
                        var8 = 'USER_SETTINGS_CACHES_CLEARED';
                        var4.key = var8;
                        var11 = _closure1_slot0;
                        var8 = 9;
                        var8 = var12[var8];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.CircleInformationIcon;
                        var4.IconComponent = var8;
                        var8 = 10;
                        var9 = var12[var8];
                        var9 = var11.bind(var3)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.t;
                        var8 = var8.BvyxE7;
                        var8 = var9.bind(var10)(var8);
                        var4.content = var8;
                        var4 = var5.bind(var7)(var4);
                    case 250: // try_end0
                        _fun85789_ip = 391;
                        continue _fun85789;
                    case 255: // try_end1
                        var4 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.batchUpdates;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot7;
                                var1 = var2.setState;
                                var0 = {
                                    'isDisabled': true,
                                    'isUploading': false
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.batchUpdates;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot7;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = false;
                                    var0.isDisabled = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = 5000;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var4 = var4.bind(var3)();
                        return var1;
                    case 269: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var1 = 8;
                        var1 = var10[var1];
                        var5 = var4.bind(var3)(var1);
                        var4 = var5.open;
                        var1 = {};
                        var7 = 'USER_SETTINGS_CACHES_CLEARED';
                        var1.key = var7;
                        var9 = _closure1_slot0;
                        var6 = 9;
                        var6 = var10[var6];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.CircleInformationIcon;
                        var1.IconComponent = var6;
                        var6 = 10;
                        var7 = var10[var6];
                        var7 = var9.bind(var3)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.t;
                        var6 = var6.VzHcSm;
                        var6 = var7.bind(var8)(var6);
                        var1.content = var6;
                        var1 = var4.bind(var5)(var1);
                    case 391: // try_end2
                        var1 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.batchUpdates;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot7;
                                var1 = var2.setState;
                                var0 = {
                                    'isDisabled': true,
                                    'isUploading': false
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.batchUpdates;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot7;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = false;
                                    var0.isDisabled = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = 5000;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var1 = var1.bind(var3)();
                        return var3;
                    case 405: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var2 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.batchUpdates;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot7;
                                var1 = var2.setState;
                                var0 = {
                                    'isDisabled': true,
                                    'isUploading': false
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.batchUpdates;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot7;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = false;
                                    var0.isDisabled = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = 5000;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2 = var2.bind(var3)();
                        throw var1;
                    case 420:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var1 = var1.DebugLogCategory;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.create;
    var1 = function() { // Environment: var7
        var0 = {
            'isDisabled': false,
            'isUploading': false
        };
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var _closure1_slot7 = var1;
    var1 = 11;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var8 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 10;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.aY1OH2;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var8;
    var8 = null;
    var1.parent = var8;
    var8 = 9;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.CircleInformationIcon;
    var1.IconComponent = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.onPress = var8;
    var8 = function() {
        _fun85807: for (var _fun85807_ip = 0;;) switch (_fun85807_ip) {
            case 0:
                var0 = _closure1_slot7;
                var4 = undefined;
                var0 = var0.bind(var4)();
                var2 = var0.isUploading;
                var0 = null;
                if (!var2) {
                    _fun85807_ip = 40;
                    continue _fun85807
                }
            case 24:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 40:
                return var0;
        }
    };
    var1.useTrailing = var8;
    var7 = function() {
        var1 = _closure1_slot7;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.isDisabled;
        return var0;
    };
    var1.useIsDisabled = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/UploadDebugLogsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 660, 33, 629, 802, 478, 8807, 3139, 3257, 1234, 8977, 2]);