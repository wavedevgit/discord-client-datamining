// utils/TrackedHTTPUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: makeRequest, environment: var3
        var4 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = var4.trackedActionData;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot3;
        var2 = _closure1_slot2;
        var1 = undefined;
        var2 = var3.bind(var1)(var4, var2);
        var _closure2_slot2 = var2;
        var1 = {};
        var2 = var2.url;
        var1.url = var2;
        var2 = arg2;
        var1.request_method = var2;
        var _closure2_slot3 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var6 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var3 = _closure2_slot0;
            var2 = _closure2_slot2;
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.then;
            var2 = function(arg0) { // Environment: var1
                _fun40709: for (var _fun40709_ip = 0;;) switch (_fun40709_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure2_slot1;
                        var6 = var0.properties;
                        var0 = var0.properties;
                        var1 = 'function';
                        var0 = typeof var0;
                        if (!(var1 === var0)) {
                            _fun40709_ip = 48;
                            continue _fun40709
                        }
                    case 33:
                        var1 = _closure2_slot1;
                        var0 = var1.properties;
                        var6 = var0.bind(var1)(var2);
                    case 48:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var1);
                        var4 = var5.trackNetworkAction;
                        var1 = _closure2_slot1;
                        var3 = var1.event;
                        var1 = {};
                        var8 = var2.status;
                        var1.status_code = var8;
                        var9 = _closure2_slot3;
                        var10 = var1;
                        var7 = copyDataProperties(var10, var9);
                        var10 = var1;
                        var9 = var6;
                        var6 = copyDataProperties(var10, var9);
                        var1 = var4.bind(var5)(var3, var1);
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg0) { // Environment: var1
                _fun40710: for (var _fun40710_ip = 0;;) switch (_fun40710_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure2_slot1;
                        var6 = var0.properties;
                        var0 = var0.properties;
                        var1 = 'function';
                        var0 = typeof var0;
                        if (!(var1 === var0)) {
                            _fun40710_ip = 48;
                            continue _fun40710
                        }
                    case 33:
                        var1 = _closure2_slot1;
                        var0 = var1.properties;
                        var6 = var0.bind(var1)(var2);
                    case 48:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var1);
                        var4 = var5.trackNetworkAction;
                        var1 = _closure2_slot1;
                        var3 = var1.event;
                        var1 = {};
                        var8 = var2.status;
                        var1.status_code = var8;
                        var10 = var2.body;
                        var8 = null;
                        var11 = var8 == var10;
                        var9 = undefined;
                        if (var11) {
                            _fun40710_ip = 122;
                            continue _fun40710
                        }
                    case 117:
                        var9 = var10.code;
                    case 122:
                        var1.error_code = var9;
                        var9 = var2.body;
                        var10 = var8 == var9;
                        var8 = undefined;
                        if (var10) {
                            _fun40710_ip = 146;
                            continue _fun40710
                        }
                    case 141:
                        var8 = var9.message;
                    case 146:
                        var1.error_message = var8;
                        var12 = _closure2_slot3;
                        var13 = var1;
                        var7 = copyDataProperties(var13, var12);
                        var13 = var1;
                        var12 = var6;
                        var6 = copyDataProperties(var13, var12);
                        var1 = var4.bind(var5)(var3, var1);
                        var1 = _closure3_slot1;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var7 = var1;
        var0 = new var7[var2](var6, var5);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = ['trackedActionData'];
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = arg2;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function(arg0) { // Original name: get, environment: var3
        var4 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.HTTP;
        var2 = var0.get;
        var1 = arg0;
        var0 = 'get';
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var1.get = var6;
    var6 = function(arg0) { // Original name: post, environment: var3
        var4 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.HTTP;
        var2 = var0.post;
        var1 = arg0;
        var0 = 'post';
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var1.post = var6;
    var6 = function(arg0) { // Original name: put, environment: var3
        var4 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.HTTP;
        var2 = var0.put;
        var1 = arg0;
        var0 = 'put';
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var1.put = var6;
    var6 = function(arg0) { // Original name: patch, environment: var3
        var4 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.HTTP;
        var2 = var0.patch;
        var1 = arg0;
        var0 = 'patch';
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var1.patch = var6;
    var3 = function(arg0) { // Original name: del, environment: var3
        var4 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.HTTP;
        var2 = var0.del;
        var1 = arg0;
        var0 = 'del';
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var1.delete = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/TrackedHTTPUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 795, 507, 2]);