// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0() {
            _fun38047: for (var _fun38047_ip = 0;;) switch (_fun38047_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var4 = 'object';
                    var3 = typeof var1;
                    var3 = var4 !== var3;
                    if (var3) {
                        _fun38047_ip = 51;
                        continue _fun38047
                    }
                case 42:
                    var4 = var1.length;
                    var3 = var0 === var4;
                case 51:
                    if (var3) {
                        _fun38047_ip = 64;
                        continue _fun38047
                    }
                case 54:
                    var4 = var1.readUInt8;
                    var3 = var0 === var4;
                case 64:
                    if (var3) {
                        _fun38047_ip = 77;
                        continue _fun38047
                    }
                case 67:
                    var4 = var1.readUInt16LE;
                    var3 = var0 === var4;
                case 77:
                    if (var3) {
                        _fun38047_ip = 90;
                        continue _fun38047
                    }
                case 80:
                    var4 = var1.readUInt16BE;
                    var3 = var0 === var4;
                case 90:
                    if (var3) {
                        _fun38047_ip = 103;
                        continue _fun38047
                    }
                case 93:
                    var4 = var1.readUInt32LE;
                    var3 = var0 === var4;
                case 103:
                    if (var3) {
                        _fun38047_ip = 116;
                        continue _fun38047
                    }
                case 106:
                    var4 = var1.readUInt32BE;
                    var3 = var0 === var4;
                case 116:
                    if (var3) {
                        _fun38047_ip = 129;
                        continue _fun38047
                    }
                case 119:
                    var4 = var1.readInt32LE;
                    var3 = var0 === var4;
                case 129:
                    if (var3) {
                        _fun38047_ip = 142;
                        continue _fun38047
                    }
                case 132:
                    var4 = var1.readInt32BE;
                    var3 = var0 === var4;
                case 142:
                    if (var3) {
                        _fun38047_ip = 170;
                        continue _fun38047
                    }
                case 145:
                    var2.buffer = var1;
                    var1 = var2.buffer;
                    var1 = var1.length;
                    var2.byteLength = var1;
                    return var0;
                case 170:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = 'DataView: Passed buffer type is unsupported.';
                    var7 = var1;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getUint8';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var2 = var0.buffer;
            var1 = var2.readUInt8;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'getUint16';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun38049: for (var _fun38049_ip = 0;;) switch (_fun38049_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0.buffer;
                    var0 = arg1;
                    if (var0) {
                        _fun38049_ip = 31;
                        continue _fun38049
                    }
                case 18:
                    var0 = var2.readUInt16BE;
                    var0 = var0.bind(var2)(var3);
                    _fun38049_ip = 42;
                    continue _fun38049;
                case 31:
                    var1 = var2.readUInt16LE;
                    var0 = var1.bind(var2)(var3);
                case 42:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getUint32';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun38050: for (var _fun38050_ip = 0;;) switch (_fun38050_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0.buffer;
                    var0 = arg1;
                    if (var0) {
                        _fun38050_ip = 31;
                        continue _fun38050
                    }
                case 18:
                    var0 = var2.readUInt32BE;
                    var0 = var0.bind(var2)(var3);
                    _fun38050_ip = 42;
                    continue _fun38050;
                case 31:
                    var1 = var2.readUInt32LE;
                    var0 = var1.bind(var2)(var3);
                case 42:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getInt32';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun38051: for (var _fun38051_ip = 0;;) switch (_fun38051_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0.buffer;
                    var0 = arg1;
                    if (var0) {
                        _fun38051_ip = 31;
                        continue _fun38051
                    }
                case 18:
                    var0 = var2.readInt32BE;
                    var0 = var0.bind(var2)(var3);
                    _fun38051_ip = 42;
                    continue _fun38051;
                case 31:
                    var1 = var2.readInt32LE;
                    var0 = var1.bind(var2)(var3);
                case 42:
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7]);