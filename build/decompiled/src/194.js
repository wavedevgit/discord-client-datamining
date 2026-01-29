// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = require;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var _closure1_slot3 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var4 = function() { // Original name: BlobManager, environment: var1
            var3 = _closure1_slot4;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var0 = {};
        var2 = 'createFromParts';
        var0.key = var2;
        var2 = function(arg0, arg1) { // Original name: createFromParts, environment: var1
            _fun2799: for (var _fun2799_ip = 0;;) switch (_fun2799_ip) {
                case 0:
                    var9 = arg0;
                    var4 = arg1;
                    var7 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var0 = 2;
                    var0 = var8[var0];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var0);
                    var0 = 3;
                    var2 = var8[var0];
                    var5 = var7.bind(var1)(var2);
                    var2 = 'NativeBlobModule is available.';
                    var2 = var6.bind(var1)(var5, var2);
                    var2 = function() { // Original name: uuidv4, environment: var3
                        var3 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
                        var2 = var3.replace;
                        var1 = /[xy]/g;
                        var0 = function(arg0) { // Environment: var0
                            _fun2801: for (var _fun2801_ip = 0;;) switch (_fun2801_ip) {
                                case 0:
                                    var0 = global;
                                    var1 = var0.Math;
                                    var0 = var1.random;
                                    var0 = var0.bind(var1)();
                                    var2 = 16;
                                    var0 = var2 * var0;
                                    var3 = var0 | 0;
                                    var4 = 'x';
                                    var0 = arg0;
                                    var1 = var3;
                                    if (!(var4 != var0)) {
                                        _fun2801_ip = 56;
                                        continue _fun2801
                                    }
                                case 42:
                                    var0 = 3;
                                    var3 = var0 & var3;
                                    var0 = 8;
                                    var1 = var3 | var0;
                                case 56:
                                    var0 = var1.toString;
                                    var0 = var0.bind(var1)(var2);
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6 = var2.bind(var1)();
                    var5 = var9.map;
                    var2 = function(arg0) { // Environment: var3
                        _fun2802: for (var _fun2802_ip = 0;;) switch (_fun2802_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = global;
                                var1 = var0.ArrayBuffer;
                                var1 = var3 instanceof var1;
                                if (var1) {
                                    _fun2802_ip = 127;
                                    continue _fun2802
                                }
                            case 18:
                                var2 = var0.ArrayBuffer;
                                var1 = var2.isView;
                                var1 = var1.bind(var2)(var3);
                                if (var1) {
                                    _fun2802_ip = 127;
                                    continue _fun2802
                                }
                            case 38:
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var1 = 4;
                                var1 = var4[var1];
                                var4 = undefined;
                                var1 = var2.bind(var4)(var1);
                                var1 = var1.default;
                                var1 = var3 instanceof var1;
                                var2 = {};
                                if (var1) {
                                    _fun2802_ip = 105;
                                    continue _fun2802
                                }
                            case 77:
                                var1 = var0.String;
                                var1 = var1.bind(var4)(var3);
                                var2.data = var1;
                                var1 = 'string';
                                var2.type = var1;
                                var1 = var2;
                                _fun2802_ip = 125;
                                continue _fun2802;
                            case 105:
                                var3 = var3.data;
                                var2.data = var3;
                                var3 = 'blob';
                                var2.type = var3;
                                var1 = var2;
                            case 125:
                                return var1;
                            case 127:
                                var2 = var0.Error;
                                var0 = var2.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var5 = "Creating blobs from 'ArrayBuffer' and 'ArrayBufferView' are not supported";
                                var6 = var1;
                                var0 = new var6[var2](var5, var4);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var2 = var5.bind(var9)(var2);
                    var9 = var2.reduce;
                    var3 = function(arg0, arg1) { // Environment: var3
                        _fun2803: for (var _fun2803_ip = 0;;) switch (_fun2803_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var3 = var1.type;
                                var0 = 'string';
                                if (!(var0 !== var3)) {
                                    _fun2803_ip = 35;
                                    continue _fun2803
                                }
                            case 19:
                                var0 = var1.data;
                                var0 = var0.size;
                                var0 = var2 + var0;
                                _fun2803_ip = 82;
                                continue _fun2803;
                            case 35:
                                var4 = _closure1_slot0;
                                var3 = var4.unescape;
                                var5 = global;
                                var6 = var5.encodeURI;
                                var5 = var1.data;
                                var1 = undefined;
                                var1 = var6.bind(var1)(var5);
                                var1 = var3.bind(var4)(var1);
                                var1 = var1.length;
                                var0 = var2 + var1;
                            case 82:
                                return var0;
                        }
                    };
                    var5 = 0;
                    var3 = var9.bind(var2)(var3, var5);
                    var0 = var8[var0];
                    var1 = var7.bind(var1)(var0);
                    var0 = var1.createFromParts;
                    var0 = var0.bind(var1)(var2, var6);
                    var2 = _closure2_slot0;
                    var1 = var2.createFromOptions;
                    var0 = {};
                    var0.blobId = var6;
                    var0.offset = var5;
                    var0.size = var3;
                    var3 = '';
                    if (!var4) {
                        _fun2799_ip = 162;
                        continue _fun2799
                    }
                case 157:
                    var3 = var4.type;
                case 162:
                    var0.type = var3;
                    if (var4) {
                        _fun2799_ip = 188;
                        continue _fun2799
                    }
                case 169:
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    _fun2799_ip = 194;
                    continue _fun2799;
                case 188:
                    var3 = var4.lastModified;
                case 194:
                    var0.lastModified = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(7);
        var2[0] = var0;
        var0 = {};
        var5 = 'createFromOptions';
        var0.key = var5;
        var5 = function(arg0) { // Original name: createFromOptions, environment: var1
            _fun2804: for (var _fun2804_ip = 0;;) switch (_fun2804_ip) {
                case 0:
                    var9 = arg0;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var0 = 5;
                    var0 = var8[var0];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var0);
                    var1 = var2.register;
                    var0 = var9.blobId;
                    var0 = var1.bind(var2)(var0);
                    var6 = global;
                    var3 = var6.Object;
                    var2 = var3.assign;
                    var4 = var6.Object;
                    var1 = var4.create;
                    var0 = 4;
                    var0 = var8[var0];
                    var0 = var7.bind(var5)(var0);
                    var0 = var0.default;
                    var0 = var0.prototype;
                    var1 = var1.bind(var4)(var0);
                    var0 = {};
                    var7 = var9.__collector;
                    var5 = null;
                    var4 = var9;
                    if (!(var5 == var7)) {
                        _fun2804_ip = 180;
                        continue _fun2804
                    }
                case 113:
                    var8 = var6.Object;
                    var7 = var8.assign;
                    var6 = {};
                    var12 = var9.blobId;
                    var11 = _closure1_slot0;
                    var11 = var11.__blobCollectorProvider;
                    var11 = var5 == var11;
                    var5 = null;
                    if (var11) {
                        _fun2804_ip = 166;
                        continue _fun2804
                    }
                case 151:
                    var11 = _closure1_slot0;
                    var10 = var11.__blobCollectorProvider;
                    var5 = var10.bind(var11)(var12);
                case 166:
                    var6.__collector = var5;
                    var5 = {};
                    var4 = var7.bind(var8)(var5, var9, var6);
                case 180:
                    var0.data = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'release';
        var0.key = var5;
        var5 = function(arg0) { // Original name: release, environment: var1
            _fun2805: for (var _fun2805_ip = 0;;) switch (_fun2805_ip) {
                case 0:
                    var3 = arg0;
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var0 = 2;
                    var2 = var6[var0];
                    var0 = undefined;
                    var7 = var5.bind(var0)(var2);
                    var4 = 3;
                    var2 = var6[var4];
                    var5 = var5.bind(var0)(var2);
                    var2 = 'NativeBlobModule is available.';
                    var2 = var7.bind(var0)(var5, var2);
                    var5 = _closure1_slot1;
                    var2 = 5;
                    var7 = var6[var2];
                    var8 = var5.bind(var0)(var7);
                    var7 = var8.unregister;
                    var7 = var7.bind(var8)(var3);
                    var2 = var6[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.has;
                    var2 = var2.bind(var5)(var3);
                    if (var2) {
                        _fun2805_ip = 129;
                        continue _fun2805
                    }
                case 101:
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var1 = var1[var4];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.release;
                    var1 = var1.bind(var2)(var3);
                case 129:
                    return var0;
            }
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'addNetworkingHandler';
        var0.key = var5;
        var5 = function() { // Original name: addNetworkingHandler, environment: var1
            var2 = _closure1_slot2;
            var3 = _closure1_slot3;
            var0 = 2;
            var1 = var3[var0];
            var0 = undefined;
            var6 = var2.bind(var0)(var1);
            var1 = 3;
            var4 = var3[var1];
            var5 = var2.bind(var0)(var4);
            var4 = 'NativeBlobModule is available.';
            var4 = var6.bind(var0)(var5, var4);
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.addNetworkingHandler;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'addWebSocketHandler';
        var0.key = var5;
        var5 = function(arg0) { // Original name: addWebSocketHandler, environment: var1
            var2 = _closure1_slot2;
            var3 = _closure1_slot3;
            var0 = 2;
            var1 = var3[var0];
            var0 = undefined;
            var6 = var2.bind(var0)(var1);
            var1 = 3;
            var4 = var3[var1];
            var5 = var2.bind(var0)(var4);
            var4 = 'NativeBlobModule is available.';
            var4 = var6.bind(var0)(var5, var4);
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.addWebSocketHandler;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'removeWebSocketHandler';
        var0.key = var5;
        var5 = function(arg0) { // Original name: removeWebSocketHandler, environment: var1
            var2 = _closure1_slot2;
            var3 = _closure1_slot3;
            var0 = 2;
            var1 = var3[var0];
            var0 = undefined;
            var6 = var2.bind(var0)(var1);
            var1 = 3;
            var4 = var3[var1];
            var5 = var2.bind(var0)(var4);
            var4 = 'NativeBlobModule is available.';
            var4 = var6.bind(var0)(var5, var4);
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.removeWebSocketHandler;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var2[5] = var0;
        var0 = {};
        var5 = 'sendOverSocket';
        var0.key = var5;
        var1 = function(arg0, arg1) { // Original name: sendOverSocket, environment: var1
            var2 = _closure1_slot2;
            var3 = _closure1_slot3;
            var0 = 2;
            var1 = var3[var0];
            var0 = undefined;
            var6 = var2.bind(var0)(var1);
            var1 = 3;
            var4 = var3[var1];
            var5 = var2.bind(var0)(var4);
            var4 = 'NativeBlobModule is available.';
            var4 = var6.bind(var0)(var5, var4);
            var1 = var3[var1];
            var4 = var2.bind(var0)(var1);
            var3 = var4.sendOverSocket;
            var1 = arg0;
            var2 = var1.data;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var1;
        var2[6] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = !var3;
    var3 = !var3;
    var1.isAvailable = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 44, 195, 197, 198]);