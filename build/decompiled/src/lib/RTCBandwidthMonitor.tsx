// lib/RTCBandwidthMonitor.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun39808: for (var _fun39808_ip = 0;;) switch (_fun39808_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun39808_ip = 46;
                    continue _fun39808
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun39808_ip = 55;
                    continue _fun39808
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun39808_ip = 343;
                    continue _fun39808
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun39808_ip = 323;
                    continue _fun39808
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun39808_ip = 283;
                    continue _fun39808
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun39808_ip = 270;
                    continue _fun39808
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
                    _fun39808_ip = 163;
                    continue _fun39808
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun39808_ip = 179;
                    continue _fun39808
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun39808_ip = 249;
                    continue _fun39808
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun39808_ip = 249;
                    continue _fun39808
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun39808_ip = 234;
                    continue _fun39808
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun39808_ip = 247;
                    continue _fun39808
                }
            case 234:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun39808_ip = 265;
                continue _fun39808;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun39808_ip = 283;
                continue _fun39808;
            case 270:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun39808_ip = 323;
                    continue _fun39808
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
                    _fun39808_ip = 330;
                    continue _fun39808
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun39809: for (var _fun39809_ip = 0;;) switch (_fun39809_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun39809_ip = 56;
                                continue _fun39809
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
                            _fun39809_ip = 67;
                            continue _fun39809;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun39810: for (var _fun39810_ip = 0;;) switch (_fun39810_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun39810_ip = 23;
                    continue _fun39810
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun39810_ip = 33;
                    continue _fun39810
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
                    _fun39810_ip = 70;
                    continue _fun39810
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun39810_ip = 55;
                    continue _fun39810
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = new Array(0);
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var4 = function() { // Original name: RTCBandwidthMonitor, environment: var1
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = {};
            var2.bytes = var3;
            var1 = function(arg0) { // Environment: var1
                _fun39813: for (var _fun39813_ip = 0;;) switch (_fun39813_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun39813_ip = 346;
                            continue _fun39813
                        }
                    case 12:
                        var1 = var0.rtp;
                        var17 = var1.inbound;
                        var7 = undefined;
                        var5 = 0;
                        var4 = global;
                        var13 = 'inbound-';
                        var12 = '-';
                        var11 = undefined;
                        var10 = undefined;
                        for (var14 in var17)
                            case 61: {
                                case 73: var9 = var14;
                                var3 = _closure1_slot5;
                                var2 = var0.rtp;
                                var2 = var2.inbound;
                                var2 = var2[var9];
                                var8 = var3.bind(var7)(var2);
                                var3 = var8.bind(var7)();
                                var2 = var3.done;
                                if (var2) {
                                    _fun39813_ip = 61;
                                    continue _fun39813
                                }
                                case 113: var11 = var3.value;
                                var19 = var11.type;
                                var2 = var4.HermesInternal;
                                var2 = var2.concat;
                                var20 = var2.bind(var13)(var9, var12, var19);
                                var2 = _closure3_slot0;
                                var2 = var2.bytes;
                                var2 = var20 in var2;
                                if (var2) {
                                    _fun39813_ip = 172;
                                    continue _fun39813
                                }
                                case 158: var2 = _closure3_slot0;
                                var2 = var2.bytes;
                                var2[var20] = var5;
                                case 172: var2 = _closure3_slot0;
                                var19 = var2.bytes;
                                var2 = var11.bytesReceived;
                                var19[var20] = var2;
                                var19 = var8.bind(var7)();
                                var2 = var19.done;
                                var10 = var20;
                                var3 = var19;
                                if (var2) {
                                    _fun39813_ip = 61;
                                    continue _fun39813
                                }
                                case 213: _fun39813_ip = 113;
                                continue _fun39813;
                            }
                    case 215:
                        var1 = _closure1_slot5;
                        var0 = var0.rtp;
                        var0 = var0.outbound;
                        var3 = var1.bind(var7)(var0);
                        var1 = var3.bind(var7)();
                        var0 = var1.done;
                        var2 = 'outbound-';
                        if (var0) {
                            _fun39813_ip = 346;
                            continue _fun39813
                        }
                    case 254:
                        var0 = var1.value;
                        var9 = var0.type;
                        var8 = var4.HermesInternal;
                        var8 = var8.concat;
                        var9 = var8.bind(var2)(var9);
                        var8 = _closure3_slot0;
                        var8 = var8.bytes;
                        var8 = var9 in var8;
                        if (var8) {
                            _fun39813_ip = 311;
                            continue _fun39813
                        }
                    case 297:
                        var8 = _closure3_slot0;
                        var8 = var8.bytes;
                        var8[var9] = var5;
                    case 311:
                        var8 = _closure3_slot0;
                        var8 = var8.bytes;
                        var0 = var0.bytesSent;
                        var8[var9] = var0;
                        var8 = var3.bind(var7)();
                        var0 = var8.done;
                        var1 = var8;
                        if (!var0) {
                            _fun39813_ip = 254;
                            continue _fun39813
                        }
                    case 346:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.record = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'getTotalBytes';
        var0.key = var2;
        var2 = function() { // Original name: value, environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.sum;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.values;
            var0 = this;
            var0 = var0.bytes;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var2;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = {};
        var5 = 'create';
        var0.key = var5;
        var1 = function() { // Original name: value, environment: var1
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var4 = var1;
            var0 = new var4[var0](var3);
            var0 = var0 instanceof Object ? var0 : var1;
            var2 = _closure1_slot4;
            var1 = var2.push;
            var1 = var1.bind(var2)(var0);
            var0 = var0.record;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = 3;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/RTCBandwidthMonitor.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function() { // Original name: getRTCTotalBytes, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.sum;
        var4 = _closure1_slot4;
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.getTotalBytes;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getRTCTotalBytes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 22, 2]);