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
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var2, var1, var5);
    var2.binaryWriteOptions = var0;
    var2.BinaryWriter = var0;
    var1 = {};
    var1.writeUnknownFields = var4;
    var4 = function() {
        var0 = _closure1_slot5;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var2 = var1;
        var0 = new var2[var0](var1);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.writerFactory = var4;
    var _closure1_slot4 = var1;
    var1 = function arg0() {
        _fun14854: for (var _fun14854_ip = 0;;) switch (_fun14854_ip) {
            case 0:
                var4 = arg0;
                if (var4) {
                    _fun14854_ip = 15;
                    continue _fun14854
                }
            case 6:
                var0 = _closure1_slot4;
                _fun14854_ip = 60;
                continue _fun14854;
            case 15:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var7 = var1.Object;
                var6 = var7.assign;
                var5 = _closure1_slot4;
                var1 = {};
                var1 = var6.bind(var7)(var1, var5);
                var0 = var2.bind(var3)(var1, var4);
            case 60:
                return var0;
        }
    };
    var2.binaryWriteOptions = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = function arg0() {
            _fun14856: for (var _fun14856_ip = 0;;) switch (_fun14856_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var3 = new Array(0);
                    var2.stack = var3;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun14856_ip = 72;
                        continue _fun14856
                    }
                case 44:
                    var3 = global;
                    var3 = var3.TextEncoder;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var4;
                    var3 = new var7[var3](var6);
                    var1 = var3 instanceof Object ? var3 : var4;
                case 72:
                    var2.textEncoder = var1;
                    var1 = new Array(0);
                    var2.chunks = var1;
                    var1 = new Array(0);
                    var2.buf = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'finish';
        var0.key = var1;
        var1 = function() {
            _fun14857: for (var _fun14857_ip = 0;;) switch (_fun14857_ip) {
                case 0:
                    var2 = this;
                    var4 = var2.chunks;
                    var3 = var4.push;
                    var0 = global;
                    var6 = var0.Uint8Array;
                    var9 = var2.buf;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = var5;
                    var1 = new var10[var6](var9, var8);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.chunks;
                    var1 = var1.length;
                    var3 = 0;
                    var1 = var3 < var1;
                    var6 = 0;
                    var5 = 0;
                    var4 = 0;
                    if (!var1) {
                        _fun14857_ip = 119;
                        continue _fun14857
                    }
                case 79:
                    var1 = var2.chunks;
                    var1 = var1[var5];
                    var1 = var1.length;
                    var6 = var6 + var1;
                    var5 = var5 + 1;
                    var1 = var2.chunks;
                    var1 = var1.length;
                    var4 = var6;
                    if (var5 < var1) {
                        _fun14857_ip = 79;
                        continue _fun14857
                    }
                case 119:
                    var0 = var0.Uint8Array;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var10 = var1;
                    var9 = var4;
                    var0 = new var10[var0](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var1 = var2.chunks;
                    var1 = var1.length;
                    var1 = var3 < var1;
                    var4 = 0;
                    var3 = 0;
                    if (!var1) {
                        _fun14857_ip = 228;
                        continue _fun14857
                    }
                case 170:
                    var5 = var0.set;
                    var1 = var2.chunks;
                    var1 = var1[var3];
                    var1 = var5.bind(var0)(var1, var4);
                    var1 = var2.chunks;
                    var1 = var1[var3];
                    var1 = var1.length;
                    var4 = var4 + var1;
                    var3 = var3 + 1;
                    var1 = var2.chunks;
                    var1 = var1.length;
                    if (var3 < var1) {
                        _fun14857_ip = 170;
                        continue _fun14857
                    }
                case 228:
                    var1 = new Array(0);
                    var2.chunks = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(20);
        var1[0] = var0;
        var0 = {};
        var5 = 'fork';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var3 = var0.stack;
            var2 = var3.push;
            var1 = {};
            var4 = var0.chunks;
            var1.chunks = var4;
            var4 = var0.buf;
            var1.buf = var4;
            var1 = var2.bind(var3)(var1);
            var1 = new Array(0);
            var0.chunks = var1;
            var1 = new Array(0);
            var0.buf = var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'join';
        var0.key = var5;
        var5 = function() {
            _fun14859: for (var _fun14859_ip = 0;;) switch (_fun14859_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.finish;
                    var1 = var0.bind(var2)();
                    var3 = var2.stack;
                    var0 = var3.pop;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun14859_ip = 68;
                        continue _fun14859
                    }
                case 32:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var6 = 'invalid state, fork stack empty';
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
                case 68:
                    var3 = var0.chunks;
                    var2.chunks = var3;
                    var0 = var0.buf;
                    var2.buf = var0;
                    var3 = var2.uint32;
                    var0 = var1.byteLength;
                    var0 = var3.bind(var2)(var0);
                    var0 = var2.raw;
                    var0 = var0.bind(var2)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'tag';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = this;
            var1 = var2.uint32;
            var3 = arg0;
            var0 = 3;
            var3 = var3 << var0;
            var0 = arg1;
            var3 = var3 | var0;
            var0 = 0;
            var0 = var3 >>> var0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'raw';
        var0.key = var5;
        var5 = function arg0() {
            _fun14861: for (var _fun14861_ip = 0;;) switch (_fun14861_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.buf;
                    var1 = var1.length;
                    if (!var1) {
                        _fun14861_ip = 77;
                        continue _fun14861
                    }
                case 17:
                    var3 = var0.chunks;
                    var2 = var3.push;
                    var1 = global;
                    var5 = var1.Uint8Array;
                    var6 = var0.buf;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var7 = var4;
                    var1 = new var7[var5](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = new Array(0);
                    var0.buf = var1;
                case 77:
                    var3 = var0.chunks;
                    var2 = var3.push;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'uint32';
        var0.key = var5;
        var5 = function arg0() {
            _fun14862: for (var _fun14862_ip = 0;;) switch (_fun14862_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.assertUInt32;
                    var1 = var1.bind(var2)(var3);
                    var5 = 127;
                    var4 = 128;
                    var2 = 7;
                    var1 = var3;
                    var3 = var1;
                    if (!(var3 > var5)) {
                        _fun14862_ip = 96;
                        continue _fun14862
                    }
                case 61:
                    var8 = var0.buf;
                    var7 = var8.push;
                    var6 = var5 & var1;
                    var6 = var6 | var4;
                    var6 = var7.bind(var8)(var6);
                    var1 = var1 >>> var2;
                    var3 = var1;
                    if (var3 > var5) {
                        _fun14862_ip = 61;
                        continue _fun14862
                    }
                case 96:
                    var2 = var0.buf;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'int32';
        var0.key = var5;
        var5 = function arg0() {
            var4 = arg0;
            var0 = this;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var2 = undefined;
            var6 = var3.bind(var2)(var1);
            var1 = var6.assertInt32;
            var1 = var1.bind(var6)(var4);
            var1 = 3;
            var1 = var5[var1];
            var3 = var3.bind(var2)(var1);
            var2 = var3.varint32write;
            var1 = var0.buf;
            var1 = var2.bind(var3)(var4, var1);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'bool';
        var0.key = var5;
        var5 = function arg0() {
            _fun14864: for (var _fun14864_ip = 0;;) switch (_fun14864_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.buf;
                    var2 = var3.push;
                    var4 = arg0;
                    var1 = 0;
                    if (!var4) {
                        _fun14864_ip = 25;
                        continue _fun14864
                    }
                case 22:
                    var1 = 1;
                case 25:
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'bytes';
        var0.key = var5;
        var5 = function arg0() {
            var2 = arg0;
            var1 = this;
            var3 = var1.uint32;
            var0 = var2.byteLength;
            var0 = var3.bind(var1)(var0);
            var0 = var1.raw;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'string';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var3 = var2.textEncoder;
            var1 = var3.encode;
            var0 = arg0;
            var1 = var1.bind(var3)(var0);
            var3 = var2.uint32;
            var0 = var1.byteLength;
            var0 = var3.bind(var2)(var0);
            var0 = var2.raw;
            var0 = var0.bind(var2)(var1);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'float';
        var0.key = var5;
        var5 = function arg0() {
            var6 = arg0;
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var0 = var1.assertFloat32;
            var0 = var0.bind(var1)(var6);
            var0 = global;
            var4 = var0.Uint8Array;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var9 = 4;
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = var0.DataView;
            var9 = var1.buffer;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var10 = var3;
            var0 = new var10[var4](var9, var8);
            var5 = var0 instanceof Object ? var0 : var3;
            var4 = var5.setFloat32;
            var3 = 0;
            var0 = true;
            var0 = var4.bind(var5)(var3, var6, var0);
            var0 = var2.raw;
            var0 = var0.bind(var2)(var1);
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'double';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var0 = global;
            var4 = var0.Uint8Array;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var9 = 8;
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = var0.DataView;
            var9 = var1.buffer;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var10 = var3;
            var0 = new var10[var4](var9, var8);
            var6 = var0 instanceof Object ? var0 : var3;
            var5 = var6.setFloat64;
            var4 = 0;
            var3 = arg0;
            var0 = true;
            var0 = var5.bind(var6)(var4, var3, var0);
            var0 = var2.raw;
            var0 = var0.bind(var2)(var1);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'fixed32';
        var0.key = var5;
        var5 = function arg0() {
            var6 = arg0;
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var0 = var1.assertUInt32;
            var0 = var0.bind(var1)(var6);
            var0 = global;
            var4 = var0.Uint8Array;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var9 = 4;
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = var0.DataView;
            var9 = var1.buffer;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var10 = var3;
            var0 = new var10[var4](var9, var8);
            var5 = var0 instanceof Object ? var0 : var3;
            var4 = var5.setUint32;
            var3 = 0;
            var0 = true;
            var0 = var4.bind(var5)(var3, var6, var0);
            var0 = var2.raw;
            var0 = var0.bind(var2)(var1);
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'sfixed32';
        var0.key = var5;
        var5 = function arg0() {
            var6 = arg0;
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var0 = var1.assertInt32;
            var0 = var0.bind(var1)(var6);
            var0 = global;
            var4 = var0.Uint8Array;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var9 = 4;
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = var0.DataView;
            var9 = var1.buffer;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var10 = var3;
            var0 = new var10[var4](var9, var8);
            var5 = var0 instanceof Object ? var0 : var3;
            var4 = var5.setInt32;
            var3 = 0;
            var0 = true;
            var0 = var4.bind(var5)(var3, var6, var0);
            var0 = var2.raw;
            var0 = var0.bind(var2)(var1);
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'sint32';
        var0.key = var5;
        var5 = function arg0() {
            var2 = arg0;
            var0 = this;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var3 = undefined;
            var5 = var4.bind(var3)(var1);
            var1 = var5.assertInt32;
            var1 = var1.bind(var5)(var2);
            var1 = 1;
            var5 = var2 << var1;
            var1 = 31;
            var1 = var2 >> var1;
            var2 = 3;
            var2 = var6[var2];
            var4 = var4.bind(var3)(var2);
            var3 = var4.varint32write;
            var2 = var0.buf;
            var5 = var5 ^ var1;
            var1 = 0;
            var1 = var5 >>> var1;
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'sfixed64';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var0 = global;
            var4 = var0.Uint8Array;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var11 = 8;
            var12 = var3;
            var1 = new var12[var4](var11, var10);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = var0.DataView;
            var11 = var1.buffer;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var12 = var3;
            var0 = new var12[var4](var11, var10);
            var6 = var0 instanceof Object ? var0 : var3;
            var4 = _closure1_slot0;
            var0 = _closure1_slot1;
            var5 = 4;
            var3 = var0[var5];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var4 = var0.PbLong;
            var3 = var4.from;
            var0 = arg0;
            var0 = var3.bind(var4)(var0);
            var8 = var6.setInt32;
            var7 = var0.lo;
            var3 = 0;
            var4 = true;
            var3 = var8.bind(var6)(var3, var7, var4);
            var3 = var6.setInt32;
            var0 = var0.hi;
            var0 = var3.bind(var6)(var5, var0, var4);
            var0 = var2.raw;
            var0 = var0.bind(var2)(var1);
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'fixed64';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var0 = global;
            var4 = var0.Uint8Array;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var11 = 8;
            var12 = var3;
            var1 = new var12[var4](var11, var10);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = var0.DataView;
            var11 = var1.buffer;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var12 = var3;
            var0 = new var12[var4](var11, var10);
            var6 = var0 instanceof Object ? var0 : var3;
            var4 = _closure1_slot0;
            var0 = _closure1_slot1;
            var5 = 4;
            var3 = var0[var5];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var4 = var0.PbULong;
            var3 = var4.from;
            var0 = arg0;
            var0 = var3.bind(var4)(var0);
            var8 = var6.setInt32;
            var7 = var0.lo;
            var3 = 0;
            var4 = true;
            var3 = var8.bind(var6)(var3, var7, var4);
            var3 = var6.setInt32;
            var0 = var0.hi;
            var0 = var3.bind(var6)(var5, var0, var4);
            var0 = var2.raw;
            var0 = var0.bind(var2)(var1);
            return var0;
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'int64';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var6 = var1.PbLong;
            var2 = var6.from;
            var1 = arg0;
            var1 = var2.bind(var6)(var1);
            var2 = 3;
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.varint64write;
            var3 = var1.lo;
            var2 = var1.hi;
            var1 = var0.buf;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'sint64';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 4;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var3 = var1.PbLong;
            var2 = var3.from;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            var2 = var1.hi;
            var3 = 31;
            var6 = var2 >> var3;
            var2 = var1.lo;
            var9 = 1;
            var2 = var2 << var9;
            var7 = var1.hi;
            var7 = var7 << var9;
            var1 = var1.lo;
            var1 = var1 >>> var3;
            var3 = 3;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var4 = var5.varint64write;
            var3 = var0.buf;
            var2 = var2 ^ var6;
            var1 = var7 | var1;
            var1 = var1 ^ var6;
            var1 = var4.bind(var5)(var2, var1, var3);
            return var0;
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'uint64';
        var0.key = var5;
        var4 = function arg0() {
            var0 = this;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var6 = var1.PbULong;
            var2 = var6.from;
            var1 = arg0;
            var1 = var2.bind(var6)(var1);
            var2 = 3;
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.varint64write;
            var3 = var1.lo;
            var2 = var1.hi;
            var1 = var0.buf;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var0.value = var4;
        var1[19] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot5 = var1;
    var2.BinaryWriter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1322, 1319, 1320]);