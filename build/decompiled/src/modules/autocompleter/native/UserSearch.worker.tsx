// modules/autocompleter/native/UserSearch.worker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var5 = metroImportDefault;
    var3 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun55010: for (var _fun55010_ip = 0;;) switch (_fun55010_ip) {
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
                _fun55010_ip = 74;
                continue _fun55010;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var3[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var3[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var3[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var3[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var3[var4];
    var4 = var2.bind(var0)(var4);
    var5 = var4.NativeModules;
    var4 = var4.NativeEventEmitter;
    var5 = var5.UserSearchWorkerManager;
    var _closure1_slot5 = var5;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: UserSearchWorker, environment: var5
            _fun55014: for (var _fun55014_ip = 0;;) switch (_fun55014_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot5;
                    var9 = new Array(1);
                    var9[0] = var0;
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun55014_ip = 76;
                        continue _fun55014
                    }
                case 63:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun55014_ip = 110;
                    continue _fun55014;
                case 76:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 110:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = global;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.handlers = var2;
                    var2 = null;
                    var0.subscription = var2;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = _closure3_slot0;
                        var2 = var1.handlers;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var2 = {};
                            var0 = _closure4_slot0;
                            var2.data = var0;
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleCallback = var1;
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
        var0 = 'postMessage';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun55017: for (var _fun55017_ip = 0;;) switch (_fun55017_ip) {
                case 0:
                    var4 = arg0;
                    var0 = global;
                    if (var4) {
                        _fun55017_ip = 42;
                        continue _fun55017
                    }
                case 8:
                    var3 = var0.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = 'Invalid data';
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 42:
                    var2 = _closure1_slot5;
                    var1 = var2.onmessage;
                    var3 = var0.JSON;
                    var0 = var3.stringify;
                    var0 = var0.bind(var3)(var4);
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'addEventListener';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun55018: for (var _fun55018_ip = 0;;) switch (_fun55018_ip) {
                case 0:
                    var0 = this;
                    var2 = 'message';
                    var1 = arg0;
                    if (!(var2 === var1)) {
                        _fun55018_ip = 75;
                        continue _fun55018
                    }
                case 14:
                    var2 = var0.subscription;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun55018_ip = 56;
                        continue _fun55018
                    }
                case 26:
                    var3 = var0.addListener;
                    var2 = var0.handleCallback;
                    var1 = 'ReturnResults';
                    var1 = var3.bind(var0)(var1, var2);
                    var0.subscription = var1;
                case 56:
                    var2 = var0.handlers;
                    var1 = var2.add;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                case 75:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'removeEventListener';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun55019: for (var _fun55019_ip = 0;;) switch (_fun55019_ip) {
                case 0:
                    var1 = this;
                    var2 = 'message';
                    var0 = arg0;
                    if (!(var2 === var0)) {
                        _fun55019_ip = 78;
                        continue _fun55019
                    }
                case 14:
                    var3 = var1.handlers;
                    var2 = var3.delete;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1.handlers;
                    var2 = var0.size;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun55019_ip = 78;
                        continue _fun55019
                    }
                case 50:
                    var3 = var1.subscription;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun55019_ip = 72;
                        continue _fun55019
                    }
                case 62:
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
                case 72:
                    var1.subscription = var0;
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'terminate';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot5;
            var0 = var1.terminate;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var4);
    var4 = var1.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var1
        }
    });
    var7 = var4;
    var1 = new var7[var1](var6);
    var4 = var1 instanceof Object ? var1 : var4;
    var1 = arg4;
    var1.exports = var4;
    var1 = 6;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/autocompleter/native/UserSearch.worker.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 27, 2]);