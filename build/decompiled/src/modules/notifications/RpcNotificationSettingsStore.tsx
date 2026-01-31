// modules/notifications/RpcNotificationSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun69617: for (var _fun69617_ip = 0;;) switch (_fun69617_ip) {
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
            case 72: // try_end0
                _fun69617_ip = 76;
                continue _fun69617;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var3 = var8.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2025-03_slayer_notif_supression_killswitch',
        'label': 'Disable suppressing notifications with slayer game active'
    };
    var9 = {};
    var10 = false;
    var9.enabled = var10;
    var1.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Disable suppressing'
    };
    var9 = {};
    var9.enabled = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var1.treatments = var9;
    var1 = var3.bind(var8)(var1);
    var _closure1_slot7 = var1;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: RpcNotificationSettingsStore, environment: var5
            _fun69621: for (var _fun69621_ip = 0;;) switch (_fun69621_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun69621_ip = 69;
                        continue _fun69621
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun69621_ip = 105;
                    continue _fun69621;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'areSlayerNotificationsSuppressed';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun69623: for (var _fun69623_ip = 0;;) switch (_fun69623_ip) {
                case 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getCurrentConfig;
                    var2 = {};
                    var0 = 'Store';
                    var2.location = var0;
                    var1 = {};
                    var0 = false;
                    var1.autoTrackExposure = var0;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = var1.enabled;
                    if (var1) {
                        _fun69623_ip = 102;
                        continue _fun69623
                    }
                case 46:
                    var6 = _closure1_slot6;
                    for (var3 in var6)
                        case 58: {
                            case 67: var2 = var3;
                            var1 = _closure1_slot6;
                            var2 = var1[var2];
                            var9 = _closure1_slot5;
                            var1 = var9.getId;
                            var1 = var1.bind(var9)();
                            if (var2 !== var1) {
                                _fun69623_ip = 58;
                                continue _fun69623
                            }
                            case 96: var1 = true;
                            return var1;
                        }
                case 100:
                    return var0;
                case 102:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'RpcNotificationSettingsStore';
    var8.displayName = var3;
    var3 = 8;
    var3 = var6[var3];
    var14 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function(arg0) { // Original name: handleRpcAppDisconnected, environment: var4
        var1 = _closure1_slot6;
        var0 = arg0;
        var0 = var0.socketId;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var3.RPC_APP_DISCONNECTED = var9;
    var4 = function(arg0) { // Original name: handleSetRpcNotificationSettings, environment: var4
        _fun69625: for (var _fun69625_ip = 0;;) switch (_fun69625_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot6;
                var2 = var0.socketId;
                var2 = delete var3[var2];
                var2 = var0.suppressNotifications;
                if (!var2) {
                    _fun69625_ip = 51;
                    continue _fun69625
                }
            case 31:
                var2 = _closure1_slot6;
                var1 = var0.socketId;
                var0 = var0.targetUserId;
                var2[var1] = var0;
            case 51:
                var0 = undefined;
                return var0;
        }
    };
    var3.SET_RPC_NOTIFICATION_SETTINGS = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var15 = var4;
    var13 = var3;
    var3 = new var15[var8](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/RpcNotificationSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.Killswitch = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 3074, 566, 806, 2]);