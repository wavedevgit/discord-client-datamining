// modules/native_permissions/NativePermissionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun37261: for (var _fun37261_ip = 0;;) switch (_fun37261_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun37261_ip = 74;
                continue _fun37261;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativePermissionStates;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = {};
    var3.permissionStates = var7;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.DeviceSettingsStore;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun37265: for (var _fun37265_ip = 0;;) switch (_fun37265_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 7;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var9 = new Array(2);
                    var9[0] = var0;
                    var0 = {};
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleSetNativePermission;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.SET_NATIVE_PERMISSION = var6;
                    var9[1] = var0;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun37265_ip = 108;
                        continue _fun37265
                    }
                case 95:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun37265_ip = 142;
                    continue _fun37265;
                case 108:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 142:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun37267: for (var _fun37267_ip = 0;;) switch (_fun37267_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun37267_ip = 16;
                        continue _fun37267
                    }
                case 9:
                    var1 = _closure1_slot9;
                case 16:
                    _closure1_slot9 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasPermission';
        var4.key = var6;
        var6 = function arg0() {
            _fun37269: for (var _fun37269_ip = 0;;) switch (_fun37269_ip) {
                case 0:
                    var0 = _closure1_slot9;
                    var2 = var0.permissionStates;
                    var0 = arg0;
                    var2 = var2[var0];
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun37269_ip = 43;
                        continue _fun37269
                    }
                case 29:
                    var1 = _closure1_slot7;
                    var1 = var1.ACCEPTED;
                    var0 = var2 === var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleSetNativePermission';
        var4.key = var6;
        var5 = function arg0() {
            _fun37270: for (var _fun37270_ip = 0;;) switch (_fun37270_ip) {
                case 0:
                    var0 = arg0;
                    var6 = var0.state;
                    var7 = var0.permissionType;
                    var0 = _closure1_slot9;
                    var0 = var0.permissionStates;
                    var4 = var0[var7];
                    var0[var7] = var6;
                    if (!(var4 !== var6)) {
                        _fun37270_ip = 115;
                        continue _fun37270
                    }
                case 39:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.track;
                    var0 = _closure1_slot8;
                    var1 = var0.PERMISSIONS_ACKED;
                    var0 = {};
                    var0.type = var7;
                    var0.action = var6;
                    var6 = null;
                    if (!(var6 == var4)) {
                        _fun37270_ip = 102;
                        continue _fun37270
                    }
                case 92:
                    var5 = _closure1_slot7;
                    var4 = var5.NONE;
                case 102:
                    var0.previous_action = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 115:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 'NativePermissionStore';
    var1.displayName = var3;
    var3 = 'NativePermissionsStore';
    var1.persistKey = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/native_permissions/NativePermissionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4014, 660, 806, 795, 566, 2]);