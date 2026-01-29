// modules/push_notifications/native/PushNotificationCacheManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun114427: for (var _fun114427_ip = 0;;) switch (_fun114427_ip) {
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
                _fun114427_ip = 76;
                continue _fun114427;
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
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: PushNotificationCacheManager, environment: var0
            _fun114431: for (var _fun114431_ip = 0;;) switch (_fun114431_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114431_ip = 86;
                        continue _fun114431
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114431_ip = 120;
                    continue _fun114431;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function() { // Original name: POST_CONNECTION_OPEN, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleUserUpdate;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function() { // Original name: CURRENT_USER_UPDATE, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleUserUpdate;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.CURRENT_USER_UPDATE = var3;
                    var3 = function() { // Original name: LOGOUT, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleLogout;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.LOGOUT = var3;
                    var0.actions = var2;
                    var2 = function() { // Environment: var1
                        _fun114435: for (var _fun114435_ip = 0;;) switch (_fun114435_ip) {
                            case 0:
                                var2 = _closure1_slot7;
                                var0 = var2.getCurrentUser;
                                var0 = var0.bind(var2)();
                                var4 = null;
                                if (!(var4 == var0)) {
                                    _fun114435_ip = 58;
                                    continue _fun114435
                                }
                            case 22:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 6;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var5.bind(var2)(var3);
                                var2 = var3.setCurrentUser;
                                var2 = var2.bind(var3)(var4, var4);
                                _fun114435_ip = 102;
                                continue _fun114435;
                            case 58:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 6;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.setCurrentUser;
                                var1 = var0.username;
                                var0 = var0.id;
                                var0 = var2.bind(var3)(var1, var0);
                            case 102:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleUserUpdate = var2;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.clearPushNotificationLogs;
                        var1 = var1.bind(var2)();
                        var2 = _closure3_slot0;
                        var1 = var2.handleUserUpdate;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var0.handleLogout = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/push_notifications/native/PushNotificationCacheManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1613, 8569, 4256, 2]);