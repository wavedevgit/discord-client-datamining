// utils/native/NotificationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var6 = true;
    var1.value = var6;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.PermissionStateType;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot5 = var1;
    var1 = {};
    var7 = function() { // Original name: hasPermission, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.requestPermissions;
        var0 = function(arg0) { // Environment: var0
            _fun85165: for (var _fun85165_ip = 0;;) switch (_fun85165_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.alert;
                    var2 = var1.badge;
                    var1 = var1.sound;
                    if (var0) {
                        _fun85165_ip = 27;
                        continue _fun85165
                    }
                case 24:
                    var0 = var2;
                case 27:
                    if (var0) {
                        _fun85165_ip = 33;
                        continue _fun85165
                    }
                case 30:
                    var0 = var1;
                case 33:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.hasPermission = var7;
    var7 = function(arg0) { // Original name: requestPermission, environment: var3
        var0 = arg0;
        var _closure2_slot0 = var0;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 3;
        var3 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var3);
        var5 = var6.setPushPermissionState;
        var3 = _closure1_slot4;
        var3 = var3.REQUESTED;
        var3 = var5.bind(var6)(var3);
        var3 = _closure1_slot1;
        var5 = 4;
        var5 = var4[var5];
        var7 = var3.bind(var0)(var5);
        var6 = var7.track;
        var2 = _closure1_slot5;
        var5 = var2.PERMISSIONS_REQUESTED;
        var2 = {};
        var8 = 'notification';
        var2.type = var8;
        var2 = var6.bind(var7)(var5, var2);
        var2 = 5;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.requestPermissions;
        var3 = var2.bind(var3)();
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            _fun85167: for (var _fun85167_ip = 0;;) switch (_fun85167_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.alert;
                    var1 = var0.sound;
                    var0 = var0.badge;
                    if (var2) {
                        _fun85167_ip = 27;
                        continue _fun85167
                    }
                case 24:
                    var2 = var1;
                case 27:
                    if (var2) {
                        _fun85167_ip = 33;
                        continue _fun85167
                    }
                case 30:
                    var2 = var0;
                case 33:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 4;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.track;
                    var1 = _closure1_slot5;
                    var3 = var1.PERMISSIONS_ACKED;
                    var1 = {};
                    var6 = 'notification';
                    var1.type = var6;
                    var6 = 'denied';
                    if (!var2) {
                        _fun85167_ip = 96;
                        continue _fun85167
                    }
                case 92:
                    var6 = 'accepted';
                case 96:
                    var1.action = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    var4 = null;
                    if (!(var4 != var2)) {
                        _fun85167_ip = 132;
                        continue _fun85167
                    }
                case 112:
                    var3 = _closure2_slot0;
                    if (!(var4 != var3)) {
                        _fun85167_ip = 132;
                        continue _fun85167
                    }
                case 123:
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)(var2);
                case 132:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.requestPermission = var7;
    var7 = function() { // Original name: showNotification, environment: var3
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun85170: for (var _fun85170_ip = 0;;) switch (_fun85170_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun85170_ip = 12;
                            continue _fun85170
                        }
                    case 7:
                        var1 = undefined;
                        return var1;
                    case 12:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.showNotification = var7;
    var1.shouldRequestNotification = var6;
    var3 = function(arg0) { // Original name: playNotificationSound, environment: var3
        _fun85171: for (var _fun85171_ip = 0;;) switch (_fun85171_ip) {
            case 0:
                var5 = arguments[1];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun85171_ip = 12;
                    continue _fun85171
                }
            case 9:
                var5 = 1;
            case 12:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.playSound;
                var9 = arg0;
                var6 = arguments[2];
                var10 = var4;
                var8 = var5;
                var7 = undefined;
                var1 = var10[var3](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var1.playNotificationSound = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/NotificationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 10920, 660, 10923, 795, 8572, 8366, 2]);