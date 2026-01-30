// actions/ChannelSettingsPermissionsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _updatePermission, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun65554: for (var _fun65554_ip = 0;;) switch (_fun65554_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var8 = arg1;
                        var7 = arg2;
                        var6 = arg3;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65554_ip = 165;
                            continue _fun65554
                        }
                    case 22:
                        var1 = var3.getGuildId;
                        var1 = var1.bind(var3)();
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun65554_ip = 98;
                            continue _fun65554
                        }
                    case 38:
                        if (!(var8 === var1)) {
                            _fun65554_ip = 98;
                            continue _fun65554
                        }
                    case 42:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.checkChattableChannelThresholdMetAfterChannelPermissionDeny;
                        var1 = var1.bind(var2)(var3, var6, var7);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun65554_ip = 162;
                            continue _fun65554
                        }
                    case 90:
                        if (var1) {
                            _fun65554_ip = 98;
                            continue _fun65554
                        }
                    case 93:
                        var2 = false;
                        return var2;
                    case 98:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 2;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var9 = 'CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION';
                        var3.type = var9;
                        var3.id = var8;
                        var3.allow = var7;
                        var3.deny = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 162:
                        return var1;
                    case 165:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: saveAndClearPermissionUpdates, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {
            constructor: {
                value: var3
            }
        });
        var5 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = function() { // Original name: chain, environment: var0
                _fun65557: for (var _fun65557_ip = 0;;) switch (_fun65557_ip) {
                    case 0:
                        var1 = _closure2_slot1;
                        var1 = var1.length;
                        var2 = 0;
                        if (!(var2 === var1)) {
                            _fun65557_ip = 34;
                            continue _fun65557
                        }
                    case 18:
                        var1 = _closure2_slot2;
                        var1 = var1.length;
                        if (!(var2 !== var1)) {
                            _fun65557_ip = 241;
                            continue _fun65557
                        }
                    case 34:
                        var1 = _closure2_slot1;
                        var1 = var1.length;
                        if (!(!(var1 > var2))) {
                            _fun65557_ip = 143;
                            continue _fun65557
                        }
                    case 47:
                        var2 = _closure2_slot2;
                        var1 = var2.pop;
                        var4 = var1.bind(var2)();
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun65557_ip = 128;
                            continue _fun65557
                        }
                    case 67:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.clearPermissionOverwrite;
                        var1 = _closure2_slot0;
                        var3 = var2.bind(var3)(var1, var4);
                        var2 = var3.then;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1, var1);
                        _fun65557_ip = 222;
                        continue _fun65557;
                    case 128:
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    case 143:
                        var2 = _closure2_slot1;
                        var1 = var2.pop;
                        var3 = var1.bind(var2)();
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun65557_ip = 226;
                            continue _fun65557
                        }
                    case 163:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.updatePermissionOverwrite;
                        var0 = _closure2_slot0;
                        var2 = var1.bind(var2)(var0, var3);
                        var1 = var2.then;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0, var0);
                    case 222:
                        var0 = undefined;
                        return var0;
                    case 226:
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    case 241:
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure3_slot1 = var1;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.then;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS';
            var1.type = var4;
            var4 = _closure2_slot3;
            var1.silent = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ChannelSettingsPermissionsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: updatePermission, environment: var3
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updatePermission = var4;
    var4 = function(arg0) { // Original name: selectPermission, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.selectPermission = var4;
    var4 = function(arg0) { // Original name: setAdvancedMode, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE';
        var1.type = var4;
        var4 = arg0;
        var1.advancedMode = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setAdvancedMode = var4;
    var4 = function() { // Original name: init, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_SETTINGS_PERMISSIONS_INIT';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.init = var4;
    var3 = function(arg0, arg1, arg2) { // Original name: savePermissionUpdates, environment: var3
        var5 = _closure1_slot5;
        var10 = undefined;
        var9 = arg0;
        var8 = arg1;
        var7 = new Array(0);
        var6 = arg2;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.savePermissionUpdates = var3;
    var2.saveAndClearPermissionUpdates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 8098, 806, 3905, 2]);