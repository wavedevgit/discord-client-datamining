// modules/foreground_service/mobile/ForegroundServiceManager.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun54244: for (var _fun54244_ip = 0;;) switch (_fun54244_ip) {
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
                _fun54244_ip = 74;
                continue _fun54244;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function(arg0) { // Original name: socketToken, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'ForegroundService:';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot8 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = function() { // Original name: ForegroundServiceManager, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot6;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = global;
            var3 = var3.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.serviceNotifications = var3;
            var3 = 1;
            var2.serviceNotificationIdentifier = var3;
            var1 = function() { // Environment: var1
                _fun54250: for (var _fun54250_ip = 0;;) switch (_fun54250_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.serviceNotifications;
                        var1 = var1.size;
                        var4 = 0;
                        if (!(!(var1 > var4))) {
                            _fun54250_ip = 51;
                            continue _fun54250
                        }
                    case 24:
                        var1 = _closure1_slot8;
                        var2 = var1.ForegroundServiceModule;
                        var1 = var2.stopService;
                        var1 = var1.bind(var2)();
                        _fun54250_ip = 109;
                        continue _fun54250;
                    case 51:
                        var1 = _closure1_slot8;
                        var2 = var1.ForegroundServiceModule;
                        var1 = var2.startService;
                        var0 = _closure3_slot0;
                        var3 = var0.serviceNotifications;
                        var0 = var3.values;
                        var6 = var0.bind(var3)();
                        var0 = new Array(0);
                        var7 = var0;
                        var5 = 0;
                        var3 = arraySpread(var7, var6, var5);
                        var0 = var1.bind(var2)(var0);
                    case 109:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleChange = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'terminate';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'addServiceHandler';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0) { // Environment: var0
                var3 = _closure3_slot0;
                var2 = var3.serviceNotificationIdentifier;
                var1 = var3.serviceNotificationIdentifier;
                var1 = var1 + 1;
                var3.serviceNotificationIdentifier = var1;
                var1 = var3.updateServiceHandler;
                var0 = _closure3_slot1;
                var0 = var1.bind(var3)(var2, var0);
                var1 = arg0;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'updateServiceHandler';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun54255: for (var _fun54255_ip = 0;;) switch (_fun54255_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var1 = this;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun54255_ip = 171;
                        continue _fun54255
                    }
                case 18:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var2);
                    var7 = var1.serviceNotifications;
                    var2 = var7.get;
                    var2 = var2.bind(var7)(var3);
                    var2 = var5.bind(var6)(var2, var4);
                    if (var2) {
                        _fun54255_ip = 261;
                        continue _fun54255
                    }
                case 71:
                    var2 = var4.usesGateway;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    if (var2) {
                        _fun54255_ip = 122;
                        continue _fun54255
                    }
                case 100:
                    var7 = var5.stopRequest;
                    var2 = _closure1_slot11;
                    var2 = var2.bind(var6)(var3);
                    var2 = var7.bind(var5)(var2);
                    _fun54255_ip = 142;
                    continue _fun54255;
                case 122:
                    var2 = var5.setRequestedBy;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var6)(var3);
                    var0 = var2.bind(var5)(var0);
                case 142:
                    var2 = var1.serviceNotifications;
                    var0 = var2.set;
                    var0 = var0.bind(var2)(var3, var4);
                    var0 = var1.handleChange;
                    var0 = var0.bind(var1)();
                    _fun54255_ip = 261;
                    continue _fun54255;
                case 171:
                    var2 = var1.serviceNotifications;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (!var0) {
                        _fun54255_ip = 261;
                        continue _fun54255
                    }
                case 190:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.stopRequest;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var5)(var3);
                    var0 = var2.bind(var4)(var0);
                    var2 = var1.serviceNotifications;
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var3);
                    var0 = var1.handleChange;
                    var0 = var0.bind(var1)();
                case 261:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'removeServiceHandler';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var3 = this;
            var2 = var3.updateServiceHandler;
            var1 = arg0;
            var0 = null;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'isForegroundServiceRunning';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            var0 = _closure1_slot8;
            var2 = var0.ForegroundServiceModule;
            var1 = var2.isServiceRunning;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var12 = var7;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: ForegroundServiceLifecycleManager, environment: var5
            _fun54259: for (var _fun54259_ip = 0;;) switch (_fun54259_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54259_ip = 69;
                        continue _fun54259
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54259_ip = 105;
                    continue _fun54259;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
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
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot9;
            var0 = var1.initialize;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot9;
            var0 = var1.terminate;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'addServiceHandler';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot9;
            var1 = var2.addServiceHandler;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'updateServiceHandler';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var3 = _closure1_slot9;
            var2 = var3.updateServiceHandler;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'removeServiceHandler';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot9;
            var1 = var2.removeServiceHandler;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isForegroundServiceRunning';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot9;
            var1 = var2.isForegroundServiceRunning;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/foreground_service/mobile/ForegroundServiceManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 27, 659, 644, 3977, 2]);