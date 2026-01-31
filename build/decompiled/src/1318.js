// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var2, var1, var5);
    var2.binaryReadOptions = var0;
    var2.BinaryReader = var0;
    var1 = {};
    var1.readUnknownField = var4;
    var4 = function(arg0) { // Original name: readerFactory, environment: var3
        var2 = _closure1_slot8;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = arg0;
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.readerFactory = var4;
    var _closure1_slot7 = var1;
    var1 = function(arg0) { // Original name: binaryReadOptions, environment: var3
        _fun14800: for (var _fun14800_ip = 0;;) switch (_fun14800_ip) {
            case 0:
                var4 = arg0;
                if (var4) {
                    _fun14800_ip = 15;
                    continue _fun14800
                }
            case 6:
                var0 = _closure1_slot7;
                _fun14800_ip = 60;
                continue _fun14800;
            case 15:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var7 = var1.Object;
                var6 = var7.assign;
                var5 = _closure1_slot7;
                var1 = {};
                var1 = var6.bind(var7)(var1, var5);
                var0 = var2.bind(var3)(var1, var4);
            case 60:
                return var0;
        }
    };
    var2.binaryReadOptions = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot6;
        var2 = function(arg0, arg1) { // Original name: BinaryReader, environment: var4
            _fun14802: for (var _fun14802_ip = 0;;) switch (_fun14802_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var6 = _closure1_slot5;
                    var5 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var6.bind(var0)(var1, var5);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 5;
                    var7 = var6[var3];
                    var7 = var5.bind(var0)(var7);
                    var7 = var7.varint64read;
                    var1.varint64 = var7;
                    var3 = var6[var3];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.varint32read;
                    var1.uint32 = var3;
                    var1.buf = var4;
                    var3 = var4.length;
                    var1.len = var3;
                    var3 = 0;
                    var1.pos = var3;
                    var3 = global;
                    var8 = var3.DataView;
                    var11 = var4.buffer;
                    var10 = var4.byteOffset;
                    var9 = var4.byteLength;
                    var5 = var8.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var8
                        }
                    });
                    var12 = var5;
                    var4 = new var12[var8](var11, var10, var9, var8);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var1.view = var4;
                    var4 = null;
                    if (!(var4 == var2)) {
                        _fun14802_ip = 209;
                        continue _fun14802
                    }
                case 167:
                    var6 = var3.TextDecoder;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var6
                        }
                    });
                    var11 = 'utf-8';
                    var10 = {
                        'fatal': true,
                        'ignoreBOM': true
                    };
                    var12 = var4;
                    var3 = new var12[var6](var11, var10, var9);
                    var2 = var3 instanceof Object ? var3 : var4;
                case 209:
                    var1.textDecoder = var2;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'tag';
        var0.key = var1;
        var1 = function() { // Original name: tag, environment: var4
            _fun14803: for (var _fun14803_ip = 0;;) switch (_fun14803_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.uint32;
                    var1 = var0.bind(var1)();
                    var0 = 3;
                    var4 = var1 >>> var0;
                    var0 = 7;
                    var3 = var0 & var1;
                    var0 = 0;
                    if (!(!(var4 <= var0))) {
                        _fun14803_ip = 58;
                        continue _fun14803
                    }
                case 33:
                    if (!(!(var3 < var0))) {
                        _fun14803_ip = 58;
                        continue _fun14803
                    }
                case 37:
                    var0 = 5;
                    if (!(!(var3 > var0))) {
                        _fun14803_ip = 58;
                        continue _fun14803
                    }
                case 44:
                    var0 = new Array(2);
                    var0[0] = var4;
                    var0[1] = var3;
                    return var0;
                case 58:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var0 = 'illegal tag: field no ';
                    var4 = var0 + var4;
                    var0 = ' wire type ';
                    var0 = var4 + var0;
                    var5 = var0 + var3;
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var1;
        var1 = new Array(17);
        var1[0] = var0;
        var0 = {};
        var5 = 'skip';
        var0.key = var5;
        var5 = function(arg0) { // Original name: skip, environment: var4
            _fun14804: for (var _fun14804_ip = 0;;) switch (_fun14804_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.pos;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = 6;
                    var1 = var1[var6];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.WireType;
                    var1 = var1.Varint;
                    if (!(var1 !== var2)) {
                        _fun14804_ip = 408;
                        continue _fun14804
                    }
                case 54:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.WireType;
                    var1 = var1.Bit64;
                    if (!(var1 !== var2)) {
                        _fun14804_ip = 370;
                        continue _fun14804
                    }
                case 89:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.WireType;
                    var1 = var1.Bit32;
                    if (!(var1 !== var2)) {
                        _fun14804_ip = 388;
                        continue _fun14804
                    }
                case 124:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var1 !== var2)) {
                        _fun14804_ip = 343;
                        continue _fun14804
                    }
                case 159:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.WireType;
                    var1 = var1.StartGroup;
                    if (!(var1 !== var2)) {
                        _fun14804_ip = 231;
                        continue _fun14804
                    }
                case 191:
                    var1 = global;
                    var4 = var1.Error;
                    var1 = 'cant skip wire type ';
                    var10 = var1 + var2;
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var11 = var2;
                    var1 = new var11[var4](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 231:
                    var1 = var0.tag;
                    var1 = var1.bind(var0)();
                    var4 = 1;
                    var2 = var1[var4];
                    var8 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var8.bind(var5)(var1);
                    var1 = var1.WireType;
                    var1 = var1.EndGroup;
                    if (!(var2 !== var1)) {
                        _fun14804_ip = 479;
                        continue _fun14804
                    }
                case 282:
                    var1 = var0.skip;
                    var1 = var1.bind(var0)(var2);
                    var1 = var0.tag;
                    var1 = var1.bind(var0)();
                    var2 = var1[var4];
                    var8 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var8.bind(var5)(var1);
                    var1 = var1.WireType;
                    var1 = var1.EndGroup;
                    if (var2 !== var1) {
                        _fun14804_ip = 282;
                        continue _fun14804
                    }
                case 338:
                    _fun14804_ip = 479;
                    continue _fun14804;
                case 343:
                    var1 = var0.uint32;
                    var2 = var1.bind(var0)();
                    var1 = var0.pos;
                    var1 = var1 + var2;
                    var0.pos = var1;
                    _fun14804_ip = 479;
                    continue _fun14804;
                case 370:
                    var2 = var0.pos;
                    var1 = 4;
                    var1 = var2 + var1;
                    var0.pos = var1;
                case 388:
                    var2 = var0.pos;
                    var1 = 4;
                    var1 = var2 + var1;
                    var0.pos = var1;
                    _fun14804_ip = 479;
                    continue _fun14804;
                case 408:
                    var2 = var0.buf;
                    var1 = var0.pos;
                    var1 = parseFloat(var1);
                    var4 = var1 + 1;
                    var0.pos = var4;
                    var1 = var2[var1];
                    var2 = 128;
                    var1 = var2 & var1;
                    if (!var1) {
                        _fun14804_ip = 479;
                        continue _fun14804
                    }
                case 445:
                    var4 = var0.buf;
                    var1 = var0.pos;
                    var1 = parseFloat(var1);
                    var5 = var1 + 1;
                    var0.pos = var5;
                    var1 = var4[var1];
                    var1 = var2 & var1;
                    if (var1) {
                        _fun14804_ip = 445;
                        continue _fun14804
                    }
                case 479:
                    var1 = var0.assertBounds;
                    var1 = var1.bind(var0)();
                    var2 = var0.buf;
                    var1 = var2.subarray;
                    var0 = var0.pos;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'assertBounds';
        var0.key = var5;
        var5 = function() { // Original name: assertBounds, environment: var4
            _fun14805: for (var _fun14805_ip = 0;;) switch (_fun14805_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.pos;
                    var0 = var0.len;
                    if (!(!(var1 > var0))) {
                        _fun14805_ip = 22;
                        continue _fun14805
                    }
                case 18:
                    var0 = undefined;
                    return var0;
                case 22:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'premature EOF';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'int32';
        var0.key = var5;
        var5 = function() { // Original name: int32, environment: var4
            var1 = this;
            var0 = var1.uint32;
            var0 = var0.bind(var1)();
            var0 = var0 | 0;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'sint32';
        var0.key = var5;
        var5 = function() { // Original name: sint32, environment: var4
            var1 = this;
            var0 = var1.uint32;
            var2 = var0.bind(var1)();
            var0 = 1;
            var1 = var2 >>> var0;
            var0 = var0 & var2;
            var0 = -var0;
            var0 = var1 ^ var0;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'int64';
        var0.key = var5;
        var5 = function() { // Original name: int64, environment: var4
            var5 = this;
            var3 = _closure1_slot3;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var1 = var1.PbLong;
            var4 = _closure1_slot4;
            var0 = var5.varint64;
            var0 = var0.bind(var5)();
            var0 = var4.bind(var2)(var0);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'uint64';
        var0.key = var5;
        var5 = function() { // Original name: uint64, environment: var4
            var5 = this;
            var3 = _closure1_slot3;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var1 = var1.PbULong;
            var4 = _closure1_slot4;
            var0 = var5.varint64;
            var0 = var0.bind(var5)();
            var0 = var4.bind(var2)(var0);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'sint64';
        var0.key = var5;
        var5 = function() { // Original name: sint64, environment: var4
            var1 = this;
            var0 = var1.varint64;
            var4 = var0.bind(var1)();
            var2 = _closure1_slot2;
            var3 = undefined;
            var0 = 2;
            var0 = var2.bind(var3)(var4, var0);
            var2 = 0;
            var5 = var0[var2];
            var2 = 1;
            var0 = var0[var2];
            var4 = var2 & var5;
            var4 = -var4;
            var5 = var5 >>> var2;
            var6 = var2 & var0;
            var0 = var0 >>> var2;
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.PbLong;
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var2 = 31;
            var2 = var6 << var2;
            var2 = var5 | var2;
            var9 = var2 ^ var4;
            var8 = var0 ^ var4;
            var10 = var1;
            var0 = new var10[var3](var9, var8, var7);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'bool';
        var0.key = var5;
        var5 = function() { // Original name: bool, environment: var4
            _fun14811: for (var _fun14811_ip = 0;;) switch (_fun14811_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.varint64;
                    var3 = var0.bind(var1)();
                    var2 = _closure1_slot2;
                    var1 = undefined;
                    var0 = 2;
                    var3 = var2.bind(var1)(var3, var0);
                    var2 = 0;
                    var0 = var3[var2];
                    var1 = 1;
                    var1 = var3[var1];
                    var0 = var2 !== var0;
                    if (var0) {
                        _fun14811_ip = 55;
                        continue _fun14811
                    }
                case 51:
                    var0 = var2 !== var1;
                case 55:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'fixed32';
        var0.key = var5;
        var5 = function() { // Original name: fixed32, environment: var4
            var4 = this;
            var3 = var4.view;
            var2 = var3.getUint32;
            var0 = var4.pos;
            var1 = 4;
            var0 = var0 + var1;
            var4.pos = var0;
            var1 = var0 - var1;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'sfixed32';
        var0.key = var5;
        var5 = function() { // Original name: sfixed32, environment: var4
            var4 = this;
            var3 = var4.view;
            var2 = var3.getInt32;
            var0 = var4.pos;
            var1 = 4;
            var0 = var0 + var1;
            var4.pos = var0;
            var1 = var0 - var1;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'fixed64';
        var0.key = var5;
        var5 = function() { // Original name: fixed64, environment: var4
            var1 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var3 = var0.PbULong;
            var0 = var1.sfixed32;
            var5 = var0.bind(var1)();
            var0 = var1.sfixed32;
            var4 = var0.bind(var1)();
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var6 = var1;
            var0 = new var6[var3](var5, var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'sfixed64';
        var0.key = var5;
        var5 = function() { // Original name: sfixed64, environment: var4
            var1 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var3 = var0.PbLong;
            var0 = var1.sfixed32;
            var5 = var0.bind(var1)();
            var0 = var1.sfixed32;
            var4 = var0.bind(var1)();
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var6 = var1;
            var0 = new var6[var3](var5, var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'float';
        var0.key = var5;
        var5 = function() { // Original name: float, environment: var4
            var4 = this;
            var3 = var4.view;
            var2 = var3.getFloat32;
            var0 = var4.pos;
            var1 = 4;
            var0 = var0 + var1;
            var4.pos = var0;
            var1 = var0 - var1;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'double';
        var0.key = var5;
        var5 = function() { // Original name: double, environment: var4
            var4 = this;
            var3 = var4.view;
            var2 = var3.getFloat64;
            var0 = var4.pos;
            var1 = 8;
            var0 = var0 + var1;
            var4.pos = var0;
            var1 = var0 - var1;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'bytes';
        var0.key = var5;
        var5 = function() { // Original name: bytes, environment: var4
            var1 = this;
            var0 = var1.uint32;
            var0 = var0.bind(var1)();
            var3 = var1.pos;
            var2 = var1.pos;
            var2 = var2 + var0;
            var1.pos = var2;
            var2 = var1.assertBounds;
            var2 = var2.bind(var1)();
            var2 = var1.buf;
            var1 = var2.subarray;
            var0 = var3 + var0;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'string';
        var0.key = var5;
        var4 = function() { // Original name: string, environment: var4
            var3 = this;
            var2 = var3.textDecoder;
            var1 = var2.decode;
            var0 = var3.bytes;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var4;
        var1[16] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot8 = var1;
    var2.BinaryReader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 164, 65, 6, 7, 1319, 1317, 1320]);