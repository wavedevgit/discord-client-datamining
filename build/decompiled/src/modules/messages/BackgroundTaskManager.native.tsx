// modules/messages/BackgroundTaskManager.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun54456: for (var _fun54456_ip = 0;;) switch (_fun54456_ip) {
        case 0:
            var8 = require;
            var4 = metroImportDefault;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var8;
            var _closure1_slot1 = var4;
            var _closure1_slot2 = var9;
            var1 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun54459: for (var _fun54459_ip = 0;;) switch (_fun54459_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun54459_ip = 100;
                                    continue _fun54459
                                }
                            case 9:
                                var3 = _closure1_slot5;
                                var _closure4_slot0 = var3;
                            case 20: // try_start_0
                                var5 = _closure1_slot6;
                                var1 = _closure2_slot1;
                                var4 = undefined;
                                var1 = var5.bind(var4)(var1);
                                SaveGenerator(address = 42);
                            case 40:
                                return var1;
                            case 42:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun54459_ip = 79;
                                    continue _fun54459
                                }
                            case 48:
                                _closure4_slot0 = var1;
                            case 52: // try_end0
                                var3 = _closure2_slot0;
                                var4 = var3.bind(var4)();
                                var3 = var4.finally;
                                var2 = function() { // Environment: var2
                                    var2 = _closure1_slot7;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var2 = var3.bind(var4)(var2);
                                return var2;
                            case 79:
                                return var1;
                            case 82: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2 = _closure2_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            case 100:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var0 = global;
            var7 = var0.Object;
            var5 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var9[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var9[var3];
            var3 = var8.bind(var0)(var3);
            var3 = var3.NativeModules;
            var _closure1_slot4 = var3;
            var4 = 2;
            var4 = var9[var4];
            var5 = var8.bind(var0)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            var5 = -1;
            if (var4) {
                _fun54456_ip = 145;
                continue _fun54456
            }
        case 133:
            var3 = var3.DCDBackgroundTaskManager;
            var5 = var3.backgroundTaskIdentifierInvalid;
        case 145:
            var _closure1_slot5 = var5;
            var4 = function arg0() {
                _fun54461: for (var _fun54461_ip = 0;;) switch (_fun54461_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var5 = undefined;
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.isAndroid;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun54461_ip = 63;
                            continue _fun54461
                        }
                    case 41:
                        var1 = _closure1_slot4;
                        var2 = var1.DCDBackgroundTaskManager;
                        var1 = var2.startBackgroundTask;
                        var1 = var1.bind(var2)();
                        return var1;
                    case 63:
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun54461_ip = 187;
                            continue _fun54461
                        }
                    case 69:
                        var7 = var0.title;
                        var4 = var0.content;
                        var1 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 3;
                        var0 = var6[var0];
                        var2 = var1.bind(var5)(var0);
                        var1 = var2.addServiceHandler;
                        var0 = {};
                        var0.title = var7;
                        var0.content = var4;
                        var4 = _closure1_slot0;
                        var3 = 4;
                        var7 = var6[var3];
                        var7 = var4.bind(var5)(var7);
                        var7 = var7.ServiceNotificationPriority;
                        var7 = var7.MEDIUM;
                        var0.priority = var7;
                        var3 = var6[var3];
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.ServiceNotificationType;
                        var3 = var3.FILE_UPLOAD;
                        var0.type = var3;
                        var3 = false;
                        var0.usesGateway = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    case 187:
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var8 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot5;
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var9 = var1;
                        var0 = new var9[var2](var8, var7);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
            var _closure1_slot6 = var4;
            var3 = function arg0() {
                _fun54463: for (var _fun54463_ip = 0;;) switch (_fun54463_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure1_slot5;
                        if (!(var2 !== var1)) {
                            _fun54463_ip = 103;
                            continue _fun54463
                        }
                    case 14:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var1);
                        var1 = var4.isAndroid;
                        var1 = var1.bind(var4)();
                        if (var1) {
                            _fun54463_ip = 72;
                            continue _fun54463
                        }
                    case 49:
                        var1 = _closure1_slot4;
                        var4 = var1.DCDBackgroundTaskManager;
                        var1 = var4.endBackgroundTask;
                        var1 = var1.bind(var4)(var2);
                        _fun54463_ip = 103;
                        continue _fun54463;
                    case 72:
                        var1 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 3;
                        var0 = var4[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.removeServiceHandler;
                        var0 = var0.bind(var1)(var2);
                    case 103:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot7 = var3;
            var6 = {};
            var6.backgroundTaskIdentifierInvalid = var5;
            var6.backgroundify = var1;
            var6.startBackgroundTask = var4;
            var6.endBackgroundTask = var3;
            var7 = 5;
            var7 = var9[var7];
            var9 = var8.bind(var0)(var7);
            var8 = var9.fileFinishedImporting;
            var7 = 'modules/messages/BackgroundTaskManager.native.tsx';
            var7 = var8.bind(var9)(var7);
            var2.default = var6;
            var2.backgroundTaskIdentifierInvalid = var5;
            var2.startBackgroundTask = var4;
            var2.endBackgroundTask = var3;
            var2.backgroundify = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 478, 6571, 6572, 2]);