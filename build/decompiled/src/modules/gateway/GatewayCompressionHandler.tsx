// modules/gateway/GatewayCompressionHandler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun95245: for (var _fun95245_ip = 0;;) switch (_fun95245_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95245_ip = 46;
                    continue _fun95245
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95245_ip = 55;
                    continue _fun95245
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95245_ip = 345;
                    continue _fun95245
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95245_ip = 323;
                    continue _fun95245
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95245_ip = 283;
                    continue _fun95245
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95245_ip = 270;
                    continue _fun95245
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun95245_ip = 163;
                    continue _fun95245
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95245_ip = 179;
                    continue _fun95245
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95245_ip = 249;
                    continue _fun95245
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95245_ip = 249;
                    continue _fun95245
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95245_ip = 234;
                    continue _fun95245
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95245_ip = 247;
                    continue _fun95245
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95245_ip = 265;
                continue _fun95245;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95245_ip = 283;
                continue _fun95245;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95245_ip = 323;
                    continue _fun95245
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun95245_ip = 330;
                    continue _fun95245
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95246: for (var _fun95246_ip = 0;;) switch (_fun95246_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95246_ip = 56;
                                continue _fun95246
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun95246_ip = 67;
                            continue _fun95246;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun95247: for (var _fun95247_ip = 0;;) switch (_fun95247_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95247_ip = 23;
                    continue _fun95247
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95247_ip = 33;
                    continue _fun95247
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun95247_ip = 70;
                    continue _fun95247
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95247_ip = 55;
                    continue _fun95247
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun95248: for (var _fun95248_ip = 0;;) switch (_fun95248_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot4;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = _closure1_slot14;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun95248_ip = 51;
                    continue _fun95248
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun95248_ip = 92;
                continue _fun95248;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun95248_ip = 71;
                    continue _fun95248
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot4;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        _fun95249: for (var _fun95249_ip = 0;;) switch (_fun95249_ip) {
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
                _fun95249_ip = 76;
                continue _fun95249;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var7 = new Array(0);
    var _closure1_slot9 = var7;
    var3 = function() { // Environment: var1
        var4 = _closure1_slot7;
        var3 = function arg0() {
            var2 = this;
            var3 = _closure1_slot6;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = null;
            var2._onDataReady = var1;
            var1 = arg0;
            var2._gatewayEncoding = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'bindWebSocket';
        var0.key = var2;
        var2 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var2;
        var2 = new Array(3);
        var2[0] = var0;
        var0 = {};
        var5 = 'feed';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'dataReady';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0._onDataReady = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'canUse';
        var0.key = var5;
        var1 = function() {
            var0 = false;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var6 = var3.bind(var0)();
    var8 = var7.push;
    var3 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun95259: for (var _fun95259_ip = 0;;) switch (_fun95259_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var5, var4);
                    var2 = _closure1_slot13;
                    var0 = new Array(1);
                    var6 = arg0;
                    var0[0] = var6;
                    var0 = var2.bind(var3)(var5, var4, var0);
                    var2 = null;
                    var0._decoder = var2;
                    var5 = var0._gatewayEncoding;
                    var4 = var5.wantsString;
                    var4 = var4.bind(var5)();
                    if (var4) {
                        _fun95259_ip = 82;
                        continue _fun95259
                    }
                case 74:
                    var0._decoder = var2;
                    _fun95259_ip = 122;
                    continue _fun95259;
                case 82:
                    var2 = global;
                    var5 = var2.TextDecoder;
                    var2 = var5.prototype;
                    var4 = Object.create(var2, {
                        constructor: {
                            value: var5
                        }
                    });
                    var9 = 'utf-8';
                    var10 = var4;
                    var2 = new var10[var5](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var0._decoder = var2;
                case 122:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.createZstdContextWeb;
                    var1 = var1.bind(var2)();
                    var0._stream = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getAlgorithm';
        var5.key = var1;
        var1 = function() {
            var0 = 'zstd-stream';
            return var0;
        };
        var5.value = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var6 = 'usesLegacyCompression';
        var5.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'feed';
        var5.key = var6;
        var6 = function arg0() {
            _fun95262: for (var _fun95262_ip = 0;;) switch (_fun95262_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var0 = var2._stream;
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun95262_ip = 149;
                        continue _fun95262
                    }
                case 21:
                    var0 = global;
                    var1 = var0.ArrayBuffer;
                    var1 = var4 instanceof var1;
                    if (var1) {
                        _fun95262_ip = 77;
                        continue _fun95262
                    }
                case 36:
                    var5 = var0.Error;
                    var0 = var5.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var5
                        }
                    });
                    var6 = 'Expected array buffer, but got ';
                    var0 = typeof var4;
                    var7 = var6 + var0;
                    var8 = var1;
                    var0 = new var8[var5](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 77:
                    var1 = var2._stream;
                    var0 = var1.decompress;
                    var5 = var0.bind(var1)(var4);
                    var0 = var2._decoder;
                    var1 = var5;
                    if (!(var3 != var0)) {
                        _fun95262_ip = 124;
                        continue _fun95262
                    }
                case 107:
                    var4 = var2._decoder;
                    var0 = var4.decode;
                    var1 = var0.bind(var4)(var5);
                case 124:
                    var0 = var2._onDataReady;
                    if (!(var3 != var0)) {
                        _fun95262_ip = 145;
                        continue _fun95262
                    }
                case 134:
                    var0 = var2._onDataReady;
                    var0 = var0.bind(var2)(var1);
                case 145:
                    var0 = undefined;
                    return var0;
                case 149:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = 'Trying to decompress with zstd but did not initialize with it';
                    var8 = var1;
                    var0 = new var8[var2](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'close';
        var5.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'canUse';
        var5.key = var6;
        var0 = function() {
            var0 = false;
            return var0;
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var3 = var8.bind(var7)(var3);
    var8 = var7.push;
    var3 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun95266: for (var _fun95266_ip = 0;;) switch (_fun95266_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var5, var4);
                    var2 = _closure1_slot13;
                    var0 = new Array(1);
                    var6 = arg0;
                    var0[0] = var6;
                    var0 = var2.bind(var3)(var5, var4, var0);
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var0._pako = var1;
                    var1 = false;
                    var0._usesZstd = var1;
                    var1 = null;
                    var0._zstdDecoder = var1;
                    var0._zstdStream = var1;
                    var1 = var0._pako;
                    var3 = var1.Inflate;
                    var1 = {};
                    var2 = 65536;
                    var1.chunkSize = var2;
                    var4 = var0._gatewayEncoding;
                    var2 = var4.wantsString;
                    var4 = var2.bind(var4)();
                    var2 = '';
                    if (!var4) {
                        _fun95266_ip = 153;
                        continue _fun95266
                    }
                case 149:
                    var2 = 'string';
                case 153:
                    var1.to = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var10 = var2;
                    var9 = var1;
                    var1 = new var10[var3](var9, var8);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0._inflate = var1;
                    var2 = var0._inflate;
                    var3 = var0.handleFlushEnd;
                    var1 = var3.bind;
                    var1 = var1.bind(var3)(var0);
                    var2.onEnd = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getAlgorithm';
        var5.key = var1;
        var1 = function() {
            var0 = 'zlib-stream';
            return var0;
        };
        var5.value = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var6 = 'usesLegacyCompression';
        var5.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'feed';
        var5.key = var6;
        var6 = function arg0() {
            _fun95269: for (var _fun95269_ip = 0;;) switch (_fun95269_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var0 = var4._inflate;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun95269_ip = 247;
                        continue _fun95269
                    }
                case 21:
                    var0 = var4._onDataReady;
                    if (!(var1 !== var0)) {
                        _fun95269_ip = 211;
                        continue _fun95269
                    }
                case 34:
                    var0 = global;
                    var1 = var0.ArrayBuffer;
                    var1 = var3 instanceof var1;
                    if (var1) {
                        _fun95269_ip = 90;
                        continue _fun95269
                    }
                case 49:
                    var5 = var0.Error;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var5
                        }
                    });
                    var6 = 'Expected array buffer, but got ';
                    var1 = typeof var3;
                    var8 = var6 + var1;
                    var9 = var2;
                    var1 = new var9[var5](var8, var7);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 90:
                    var0 = var0.DataView;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var1;
                    var8 = var3;
                    var0 = new var9[var0](var8, var7);
                    var6 = var0 instanceof Object ? var0 : var1;
                    var0 = var6.byteLength;
                    var1 = 4;
                    var5 = var0 >= var1;
                    if (!var5) {
                        _fun95269_ip = 169;
                        continue _fun95269
                    }
                case 135:
                    var2 = var6.getUint32;
                    var0 = var6.byteLength;
                    var1 = var0 - var1;
                    var0 = false;
                    var1 = var2.bind(var6)(var1, var0);
                    var0 = 65535;
                    var5 = var0 === var1;
                case 169:
                    var2 = var4._inflate;
                    var1 = var2.push;
                    var0 = !var5;
                    var0 = !var0;
                    if (!var5) {
                        _fun95269_ip = 201;
                        continue _fun95269
                    }
                case 189:
                    var4 = var4._pako;
                    var0 = var4.Z_SYNC_FLUSH;
                case 201:
                    var0 = var1.bind(var2)(var3, var0);
                    var0 = undefined;
                    return var0;
                case 211:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = 'Cannot feed unless a data ready callback is registered.';
                    var9 = var1;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 247:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = 'Trying to feed to closed compression adapter';
                    var9 = var1;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'close';
        var5.key = var6;
        var6 = function() {
            _fun95270: for (var _fun95270_ip = 0;;) switch (_fun95270_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._inflate;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun95270_ip = 43;
                        continue _fun95270
                    }
                case 15:
                    var2 = var1._inflate;
                    var2.onEnd = var0;
                    var3 = var1._inflate;
                    var2 = new Array(0);
                    var3.chunks = var2;
                case 43:
                    var1._inflate = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'handleFlushEnd';
        var5.key = var6;
        var6 = function arg0() {
            _fun95271: for (var _fun95271_ip = 0;;) switch (_fun95271_ip) {
                case 0:
                    var5 = arg0;
                    var3 = this;
                    var0 = var3._pako;
                    var1 = var3._inflate;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun95271_ip = 96;
                        continue _fun95271
                    }
                case 24:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var6 = var6[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var6);
                    var2 = var7.prototype;
                    var6 = Object.create(var2, {
                        constructor: {
                            value: var7
                        }
                    });
                    var15 = 'GatewayCompressionHandler';
                    var16 = var6;
                    var2 = new var16[var7](var15, var14);
                    var7 = var2 instanceof Object ? var2 : var6;
                    var6 = var7.error;
                    var2 = 'flush end happened on closed compression adapter';
                    var2 = var6.bind(var7)(var2);
                    _fun95271_ip = 337;
                    continue _fun95271;
                case 96:
                    var0 = var0.Z_OK;
                    if (!(var5 === var0)) {
                        _fun95271_ip = 341;
                        continue _fun95271
                    }
                case 109:
                    var6 = var1.chunks;
                    var7 = var6.length;
                    var2 = var3._gatewayEncoding;
                    var0 = var2.wantsString;
                    var2 = var0.bind(var2)();
                    var0 = 1;
                    if (var2) {
                        _fun95271_ip = 279;
                        continue _fun95271
                    }
                case 145:
                    if (!(!(var7 > var0))) {
                        _fun95271_ip = 160;
                        continue _fun95271
                    }
                case 149:
                    var2 = 0;
                    var2 = var6[var2];
                    _fun95271_ip = 308;
                    continue _fun95271;
                case 160:
                    var8 = 0;
                    var12 = var8 < var7;
                    var10 = 0;
                    var9 = 0;
                    var11 = 0;
                    if (!var12) {
                        _fun95271_ip = 198;
                        continue _fun95271
                    }
                case 175:
                    var12 = var6[var9];
                    var12 = var12.length;
                    var10 = var10 + var12;
                    var9 = var9 + 1;
                    var11 = var10;
                    if (var9 < var7) {
                        _fun95271_ip = 175;
                        continue _fun95271
                    }
                case 198:
                    var9 = global;
                    var9 = var9.Uint8Array;
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var9
                        }
                    });
                    var16 = var10;
                    var15 = var11;
                    var9 = new var16[var9](var15, var14);
                    var10 = var9 instanceof Object ? var9 : var10;
                    var11 = var8 < var7;
                    var9 = 0;
                    var8 = 0;
                    var2 = var10;
                    if (!var11) {
                        _fun95271_ip = 308;
                        continue _fun95271
                    }
                case 243:
                    var11 = var6[var8];
                    var12 = var10.set;
                    var12 = var12.bind(var10)(var11, var9);
                    var11 = var11.length;
                    var9 = var9 + var11;
                    var8 = var8 + 1;
                    var2 = var10;
                    if (var8 < var7) {
                        _fun95271_ip = 243;
                        continue _fun95271
                    }
                case 277:
                    _fun95271_ip = 308;
                    continue _fun95271;
                case 279:
                    if (!(!(var7 > var0))) {
                        _fun95271_ip = 291;
                        continue _fun95271
                    }
                case 283:
                    var0 = 0;
                    var0 = var6[var0];
                    _fun95271_ip = 305;
                    continue _fun95271;
                case 291:
                    var8 = var6.join;
                    var7 = '';
                    var0 = var8.bind(var6)(var7);
                case 305:
                    var2 = var0;
                case 308:
                    var0 = 0;
                    var6.length = var0;
                    var0 = var3._onDataReady;
                    if (!(var4 != var0)) {
                        _fun95271_ip = 337;
                        continue _fun95271
                    }
                case 326:
                    var0 = var3._onDataReady;
                    var0 = var0.bind(var3)(var2);
                case 337:
                    var0 = undefined;
                    return var0;
                case 341:
                    var0 = global;
                    var2 = var0.Error;
                    var1 = var1.strm;
                    var4 = var1.msg;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = 'zlib error, ';
                    var0 = ', ';
                    var15 = var3.bind(var1)(var5, var0, var4);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var16 = var1;
                    var0 = new var16[var2](var15, var14);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var5.value = var6;
        var1[4] = var5;
        var5 = {};
        var6 = 'canUse';
        var5.key = var6;
        var0 = function() {
            var0 = false;
            return var0;
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var3 = var8.bind(var7)(var3);
    var8 = var7.push;
    var3 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var0 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = undefined;
            var0 = var0.bind(var3)(var5, var4);
            var2 = _closure1_slot13;
            var0 = new Array(0);
            var10 = var0;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var3)(var5, var4, var0);
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var0._pako = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getAlgorithm';
        var5.key = var1;
        var1 = function() {
            var0 = null;
            return var0;
        };
        var5.value = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var6 = 'usesLegacyCompression';
        var5.key = var6;
        var6 = function() {
            var0 = true;
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'feed';
        var5.key = var6;
        var6 = function arg0() {
            _fun95277: for (var _fun95277_ip = 0;;) switch (_fun95277_ip) {
                case 0:
                    var6 = arg0;
                    var3 = this;
                    var5 = var3._pako;
                    var0 = global;
                    var1 = var0.ArrayBuffer;
                    var1 = var6 instanceof var1;
                    if (!var1) {
                        _fun95277_ip = 43;
                        continue _fun95277
                    }
                case 27:
                    var4 = var3._gatewayEncoding;
                    var2 = var4.wantsString;
                    var1 = var2.bind(var4)();
                case 43:
                    var2 = var6;
                    if (!var1) {
                        _fun95277_ip = 71;
                        continue _fun95277
                    }
                case 49:
                    var4 = var5.inflate;
                    var1 = {};
                    var7 = 'string';
                    var1.to = var7;
                    var2 = var4.bind(var5)(var6, var1);
                case 71:
                    var4 = var3._onDataReady;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun95277_ip = 98;
                        continue _fun95277
                    }
                case 83:
                    var1 = var3._onDataReady;
                    var1 = var1.bind(var3)(var2);
                    var1 = undefined;
                    return var1;
                case 98:
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = 'Cannot feed unless a data ready callback is registered.';
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'close';
        var5.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'canUse';
        var5.key = var6;
        var0 = function() {
            var0 = false;
            return var0;
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var3 = var8.bind(var7)(var3);
    var8 = var7.push;
    var3 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            var4 = this;
            var1 = _closure1_slot6;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot13;
            var0 = new Array(1);
            var5 = arg0;
            var0[0] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            var1 = null;
            var0._socketId = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'bindWebSocket';
        var5.key = var1;
        var1 = function arg0() {
            _fun95282: for (var _fun95282_ip = 0;;) switch (_fun95282_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.close;
                    var0 = var0.bind(var1)();
                    var0 = arg0;
                    var0 = var0._socketId;
                    var1._socketId = var0;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.supportsZstd;
                    var4 = var3.bind(var4)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var5 = var5.bind(var0)(var3);
                    var3 = var5.isAndroid;
                    var3 = var3.bind(var5)();
                    if (var4) {
                        _fun95282_ip = 206;
                        continue _fun95282
                    }
                case 96:
                    if (var3) {
                        _fun95282_ip = 131;
                        continue _fun95282
                    }
                case 99:
                    var4 = _closure1_slot8;
                    var6 = var4.DCDCompressionManager;
                    var5 = var6.enableZlibStreamSupport;
                    var4 = var1._socketId;
                    var4 = var5.bind(var6)(var4);
                    _fun95282_ip = 311;
                    continue _fun95282;
                case 131:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 10;
                    var4 = var4[var6];
                    var4 = var5.bind(var0)(var4);
                    var5 = var4.default;
                    var4 = null;
                    if (!(var4 != var5)) {
                        _fun95282_ip = 311;
                        continue _fun95282
                    }
                case 165:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var4 = var5.bind(var0)(var4);
                    var6 = var4.default;
                    var5 = var6.enableZlibStreamSupport;
                    var4 = var1._socketId;
                    var4 = var5.bind(var6)(var4);
                    _fun95282_ip = 311;
                    continue _fun95282;
                case 206:
                    if (var3) {
                        _fun95282_ip = 241;
                        continue _fun95282
                    }
                case 209:
                    var3 = _closure1_slot8;
                    var6 = var3.DCDCompressionManager;
                    var5 = var6.enableZstdStreamSupport;
                    var4 = var1._socketId;
                    var3 = 0;
                    var3 = var5.bind(var6)(var4, var3);
                    _fun95282_ip = 311;
                    continue _fun95282;
                case 241:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 10;
                    var3 = var3[var4];
                    var3 = var5.bind(var0)(var3);
                    var5 = var3.default;
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun95282_ip = 311;
                        continue _fun95282
                    }
                case 272:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.default;
                    var2 = var3.enableZstdStreamSupport;
                    var1 = var1._socketId;
                    var1 = var2.bind(var3)(var1);
                case 311:
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var6 = 'getAlgorithm';
        var5.key = var6;
        var6 = function() {
            _fun95283: for (var _fun95283_ip = 0;;) switch (_fun95283_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.supportsZstd;
                    var1 = var0.bind(var1)();
                    var0 = 'zlib-stream';
                    if (!var1) {
                        _fun95283_ip = 50;
                        continue _fun95283
                    }
                case 44:
                    var0 = 'zstd-stream';
                case 50:
                    return var0;
            }
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'usesLegacyCompression';
        var5.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'feed';
        var5.key = var6;
        var6 = function arg0() {
            _fun95285: for (var _fun95285_ip = 0;;) switch (_fun95285_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var3 = var1._onDataReady;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun95285_ip = 37;
                        continue _fun95285
                    }
                case 18:
                    if (!(var0 !== var2)) {
                        _fun95285_ip = 33;
                        continue _fun95285
                    }
                case 22:
                    var0 = var1._onDataReady;
                    var0 = var0.bind(var1)(var2);
                case 33:
                    var0 = undefined;
                    return var0;
                case 37:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = 'Cannot feed unless a data ready callback is registered.';
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'close';
        var5.key = var6;
        var6 = function() {
            _fun95286: for (var _fun95286_ip = 0;;) switch (_fun95286_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._socketId;
                    var5 = null;
                    var0._socketId = var5;
                    if (!(var5 !== var2)) {
                        _fun95286_ip = 147;
                        continue _fun95286
                    }
                case 24:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var1);
                    var1 = var4.isAndroid;
                    var1 = var1.bind(var4)();
                    if (var1) {
                        _fun95286_ip = 85;
                        continue _fun95286
                    }
                case 62:
                    var1 = _closure1_slot8;
                    var4 = var1.DCDCompressionManager;
                    var1 = var4.disableZlibStreamSupport;
                    var1 = var1.bind(var4)(var2);
                    _fun95286_ip = 147;
                    continue _fun95286;
                case 85:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 10;
                    var1 = var1[var4];
                    var1 = var6.bind(var3)(var1);
                    var1 = var1.default;
                    if (!(var5 != var1)) {
                        _fun95286_ip = 147;
                        continue _fun95286
                    }
                case 114:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var4];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.default;
                    var0 = var1.disableZlibStreamSupport;
                    var0 = var0.bind(var1)(var2);
                case 147:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var6;
        var1[4] = var5;
        var5 = {};
        var6 = 'canUse';
        var5.key = var6;
        var0 = function() {
            _fun95287: for (var _fun95287_ip = 0;;) switch (_fun95287_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.isAndroid;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95287_ip = 56;
                        continue _fun95287
                    }
                case 38:
                    var0 = _closure1_slot8;
                    var2 = var0.DCDCompressionManager;
                    var0 = null;
                    var0 = var0 != var2;
                    _fun95287_ip = 87;
                    continue _fun95287;
                case 56:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.default;
                    var1 = null;
                    var0 = var1 != var2;
                case 87:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var3 = var8.bind(var7)(var3);
    var3 = function(arg0) { // Environment: var1
        var4 = function() {
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot6;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot13;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getAlgorithm';
        var5.key = var1;
        var1 = function() {
            var0 = null;
            return var0;
        };
        var5.value = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var6 = 'usesLegacyCompression';
        var5.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'feed';
        var5.key = var6;
        var6 = function arg0() {
            _fun95292: for (var _fun95292_ip = 0;;) switch (_fun95292_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._onDataReady;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun95292_ip = 33;
                        continue _fun95292
                    }
                case 15:
                    var1 = var2._onDataReady;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                case 33:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'Cannot feed unless a data ready callback is registered.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'close';
        var5.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'canUse';
        var5.key = var6;
        var0 = function() {
            var0 = true;
            return var0;
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var3 = var7.push;
    var3 = var3.bind(var7)(var6);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/GatewayCompressionHandler.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun95295: for (var _fun95295_ip = 0;;) switch (_fun95295_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var6 = undefined;
                var1 = var3.bind(var6)(var1);
                var3 = var1.ProcessArgs;
                var1 = var3.isDiscordGatewayPlaintextSet;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun95295_ip = 166;
                    continue _fun95295
                }
            case 47:
                var3 = _closure1_slot11;
                var1 = _closure1_slot9;
                var5 = var3.bind(var6)(var1);
                var3 = var5.bind(var6)();
                var1 = var3.done;
                var4 = var3;
                if (var1) {
                    _fun95295_ip = 137;
                    continue _fun95295
                }
            case 75:
                var1 = var4.value;
                var3 = var1.canUse;
                var3 = var3.bind(var1)();
                if (var3) {
                    _fun95295_ip = 112;
                    continue _fun95295
                }
            case 95:
                var7 = var5.bind(var6)();
                var3 = var7.done;
                var4 = var7;
                if (var3) {
                    _fun95295_ip = 137;
                    continue _fun95295
                }
            case 110:
                _fun95295_ip = 75;
                continue _fun95295;
            case 112:
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var3;
                var8 = var2;
                var1 = new var9[var1](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
            case 137:
                var1 = _closure1_slot10;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var3;
                var8 = var2;
                var1 = new var9[var1](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
            case 166:
                var0 = _closure1_slot10;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var1;
                var8 = var2;
                var0 = new var9[var0](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getCompressionHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 27, 12480, 12482, 3, 478, 12481, 4016, 2]);