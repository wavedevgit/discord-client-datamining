// lib/uploader/native/CloudUploader.tsx
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
        _fun54736: for (var _fun54736_ip = 0;;) switch (_fun54736_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun54736_ip = 46;
                    continue _fun54736
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun54736_ip = 55;
                    continue _fun54736
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun54736_ip = 343;
                    continue _fun54736
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun54736_ip = 323;
                    continue _fun54736
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun54736_ip = 283;
                    continue _fun54736
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun54736_ip = 270;
                    continue _fun54736
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
                    _fun54736_ip = 163;
                    continue _fun54736
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun54736_ip = 179;
                    continue _fun54736
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun54736_ip = 249;
                    continue _fun54736
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun54736_ip = 249;
                    continue _fun54736
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun54736_ip = 234;
                    continue _fun54736
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun54736_ip = 247;
                    continue _fun54736
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun54736_ip = 265;
                continue _fun54736;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun54736_ip = 283;
                continue _fun54736;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun54736_ip = 323;
                    continue _fun54736
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
                    _fun54736_ip = 330;
                    continue _fun54736
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun54737: for (var _fun54737_ip = 0;;) switch (_fun54737_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun54737_ip = 56;
                                continue _fun54737
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
                            _fun54737_ip = 67;
                            continue _fun54737;
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
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun54738: for (var _fun54738_ip = 0;;) switch (_fun54738_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun54738_ip = 23;
                    continue _fun54738
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun54738_ip = 33;
                    continue _fun54738
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
                    _fun54738_ip = 70;
                    continue _fun54738
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun54738_ip = 55;
                    continue _fun54738
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        _fun54739: for (var _fun54739_ip = 0;;) switch (_fun54739_ip) {
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
                _fun54739_ip = 74;
                continue _fun54739;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.NativeEventEmitter;
    var3 = var3.NativeModules;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.AbortCodes;
    var _closure1_slot10 = var9;
    var7 = var7.NOOP;
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
    var _closure1_slot12 = var9;
    var7 = var7.FileUploadErrorTypes;
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var5[var7];
    var10 = var6.bind(var0)(var7);
    var7 = var10.prototype;
    var9 = Object.create(var7, {
        constructor: {
            value: var10
        }
    });
    var13 = 'CloudUploader(Native).tsx';
    var14 = var9;
    var7 = new var14[var10](var13, var12);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot14 = var7;
    var13 = var3.MediaManager;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var14 = var7;
    var3 = new var14[var8](var13, var12);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot15 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun54743: for (var _fun54743_ip = 0;;) switch (_fun54743_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot4;
                    var1 = _closure2_slot2;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot7;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54743_ip = 84;
                        continue _fun54743
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun54743_ip = 118;
                    continue _fun54743;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot7;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = global;
                    var2 = var1.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var3;
                    var2 = new var12[var2](var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.mediaEventSubscriptions = var2;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var12 = var2;
                    var1 = new var12[var1](var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.uploadItems = var1;
                    var1 = new Array(0);
                    var0.preCompressionFileSizes = var1;
                    return var0;
            }
        };
        var _closure2_slot2 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var6 = 'uploadFiles';
        var4.key = var6;
        var7 = _closure1_slot3;
        var0 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun54745: for (var _fun54745_ip = 0;;) switch (_fun54745_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                        if (var5) {
                            _fun54745_ip = 820;
                            continue _fun54745
                        }
                    case 18:
                        var _closure4_slot0 = var4;
                        var6 = var2;
                        var _closure4_slot1 = var2;
                        var8 = undefined;
                        var _closure4_slot3 = var8;
                        var _closure4_slot4 = var8;
                        var1 = undefined;
                        var11 = undefined;
                        var12 = undefined;
                        var13 = undefined;
                        var14 = undefined;
                        var15 = undefined;
                        var _closure4_slot2 = var4;
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 11;
                        var2 = var9[var2];
                        var2 = var7.bind(var8)(var2);
                        var2 = var2.backgroundTaskIdentifierInvalid;
                        _closure4_slot3 = var2;
                        var9 = var4.once;
                        var7 = _closure1_slot3;
                        var2 = function*() { // Environment: var3
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun54747: for (var _fun54747_ip = 0;;) switch (_fun54747_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun54747_ip = 238;
                                            continue _fun54747
                                        }
                                    case 10:
                                        var3 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var6 = 11;
                                        var1 = var9[var6];
                                        var2 = undefined;
                                        var7 = var3.bind(var2)(var1);
                                        var5 = var7.startBackgroundTask;
                                        var1 = {};
                                        var8 = _closure1_slot0;
                                        var3 = 12;
                                        var10 = var9[var3];
                                        var10 = var8.bind(var2)(var10);
                                        var12 = var10.intl;
                                        var11 = var12.string;
                                        var10 = var9[var3];
                                        var10 = var8.bind(var2)(var10);
                                        var10 = var10.t;
                                        var10 = var10["B/HSDd"];
                                        var10 = var11.bind(var12)(var10);
                                        var1.title = var10;
                                        var10 = var9[var3];
                                        var10 = var8.bind(var2)(var10);
                                        var11 = var10.intl;
                                        var10 = var11.formatToPlainString;
                                        var3 = var9[var3];
                                        var3 = var8.bind(var2)(var3);
                                        var3 = var3.t;
                                        var9 = var3.D0noUt;
                                        var8 = {};
                                        var12 = _closure4_slot1;
                                        var12 = var12.length;
                                        var8.count = var12;
                                        var8 = var10.bind(var11)(var9, var8);
                                        var1.content = var8;
                                        var1 = var5.bind(var7)(var1);
                                        SaveGenerator(address = 177);
                                    case 175:
                                        return var1;
                                    case 177:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun54747_ip = 235;
                                            continue _fun54747
                                        }
                                    case 183:
                                        _closure4_slot3 = var1;
                                        var5 = _closure4_slot2;
                                        var5 = var5._aborted;
                                        if (!var5) {
                                            _fun54747_ip = 232;
                                            continue _fun54747
                                        }
                                    case 200:
                                        var5 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var4 = var4[var6];
                                        var5 = var5.bind(var2)(var4);
                                        var4 = var5.endBackgroundTask;
                                        var3 = _closure4_slot3;
                                        var3 = var4.bind(var5)(var3);
                                    case 232:
                                        return var2;
                                    case 235:
                                        return var1;
                                    case 238:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var7 = var7.bind(var8)(var2);
                        var2 = 'start';
                        var2 = var9.bind(var4)(var2, var7);
                        var9 = function() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.endBackgroundTask;
                            var2 = _closure4_slot3;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure4_slot0;
                            var5 = var4.removeListener;
                            var3 = _closure4_slot4;
                            var2 = 'complete';
                            var2 = var5.bind(var4)(var2, var3);
                            var3 = var4.removeListener;
                            var2 = _closure4_slot4;
                            var1 = 'error';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                        };
                        _closure4_slot4 = var9;
                        var7 = var4.once;
                        var2 = 'error';
                        var2 = var7.bind(var4)(var2, var9);
                        var7 = var4.once;
                        var2 = 'complete';
                        var2 = var7.bind(var4)(var2, var9);
                        var2 = global;
                        var10 = var2.Promise;
                        var7 = var10.prototype;
                        var9 = Object.create(var7, {
                            constructor: {
                                value: var10
                            }
                        });
                        var23 = function(arg0, arg1) { // Environment: var3
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = arg1;
                            var _closure5_slot1 = var1;
                            var3 = _closure4_slot0;
                            var4 = var3.once;
                            var2 = 'error';
                            var1 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                                var2 = _closure5_slot1;
                                var1 = {};
                                var0 = arg0;
                                var1.file = var0;
                                var0 = arg1;
                                var1.code = var0;
                                var0 = arg2;
                                var1.responseBody = var0;
                                var0 = arg3;
                                var1.reason = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var4.bind(var3)(var2, var1);
                            var2 = var3.once;
                            var1 = 'complete';
                            var0 = function() { // Environment: var0
                                _fun54751: for (var _fun54751_ip = 0;;) switch (_fun54751_ip) {
                                    case 0:
                                        var1 = _closure4_slot0;
                                        var1 = var1._errored;
                                        if (var1) {
                                            _fun54751_ip = 40;
                                            continue _fun54751
                                        }
                                    case 16:
                                        var2 = _closure5_slot0;
                                        var0 = _closure4_slot0;
                                        var1 = var0.files;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 40:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var24 = var9;
                        var7 = new var24[var10](var23, var22);
                        var1 = var7 instanceof Object ? var7 : var9;
                    case 192: // try_start_0
                        var4.files = var6;
                        var23 = _closure2_slot2;
                        var10 = function arg0, arg1, arg2, arg3() {
                            _fun54752: for (var _fun54752_ip = 0;;) switch (_fun54752_ip) {
                                case 0:
                                    var4 = arg0;
                                    var6 = arg2;
                                    var _closure5_slot0 = var6;
                                    var5 = _closure1_slot8;
                                    var3 = _closure1_slot7;
                                    var0 = 1;
                                    var2 = 3;
                                    var7 = var0 & var2;
                                    var0 = var4;
                                    if (!var7) {
                                        _fun54752_ip = 44;
                                        continue _fun54752
                                    }
                                case 39:
                                    var0 = var4.prototype;
                                case 44:
                                    var4 = undefined;
                                    var3 = var3.bind(var4)(var0);
                                    var0 = 'upload';
                                    var4 = var5.bind(var4)(var3, var0, var6);
                                    var _closure5_slot1 = var4;
                                    var0 = 2;
                                    var2 = var0 & var2;
                                    var0 = var4;
                                    if (!var2) {
                                        _fun54752_ip = 98;
                                        continue _fun54752
                                    }
                                case 79:
                                    var3 = 'function';
                                    var2 = typeof var4;
                                    var0 = var4;
                                    if (!(var3 === var2)) {
                                        _fun54752_ip = 98;
                                        continue _fun54752
                                    }
                                case 93:
                                    var0 = function(arg0) { // Environment: var1
                                        var3 = _closure5_slot1;
                                        var2 = var3.apply;
                                        var1 = _closure5_slot0;
                                        var0 = arg0;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                case 98:
                                    return var0;
                            }
                        };
                        var22 = 'upload';
                        var20 = 3;
                        var24 = undefined;
                        var21 = var4;
                        var9 = var24[var10](var23, var22, var21, var20, var19);
                        var7 = new Array(1);
                        var7[0] = var6;
                        var7 = var9.bind(var8)(var7);
                        var7 = var4._file;
                        var6 = var6.length;
                        var7.attachmentsCount = var6;
                        var6 = var4._handleStart;
                        var6 = var6.bind(var4)(var8);
                        var12 = 0;
                        var7 = _closure1_slot16;
                        var6 = var4.files;
                        var6 = var7.bind(var8)(var6);
                        var13 = var6;
                        var6 = var6.bind(var8)();
                        var11 = var6;
                        var6 = var6.done;
                        var10 = 14;
                        var9 = 13;
                        if (var6) {
                            _fun54745_ip = 669;
                            continue _fun54745
                        }
                    case 311:
                        var6 = var11;
                        var6 = var6.value;
                        var14 = var6;
                        var16 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var16 = var16.bind(var8)(var7);
                        var7 = var16.getFileSize;
                        var6 = var6.item;
                        var6 = var6.uri;
                        var6 = var7.bind(var16)(var6);
                        SaveGenerator(address = 364);
                    case 362:
                        return var6;
                    case 364:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun54745_ip = 666;
                            continue _fun54745
                        }
                    case 373:
                        var16 = var4.preCompressionFileSizes;
                        var7 = var16.push;
                        var7 = var7.bind(var16)(var6);
                        var7 = var14;
                        var7.preCompressionSize = var6;
                        var16 = var12;
                        var17 = var16 + var6;
                        var12 = var17;
                        var16 = var4._file;
                        var16.totalPreCompressionSize = var17;
                        var16 = var4._file;
                        var16.currentSize = var17;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var16 = var16[var10];
                        var18 = var17.bind(var8)(var16);
                        var17 = var18.getUploadTarget;
                        var16 = var7.item;
                        var16 = var16.target;
                        var19 = var17.bind(var18)(var16);
                        var15 = var19;
                        var18 = var2.Math;
                        var17 = var18.max;
                        var16 = var19.getMaxFileSize;
                        var7 = var7.channelId;
                        var16 = var16.bind(var19)(var7);
                        var7 = _closure1_slot12;
                        var7 = var17.bind(var18)(var16, var7);
                        if (!(!(var6 > var7))) {
                            _fun54745_ip = 612;
                            continue _fun54745
                        }
                    case 515:
                        var16 = var12;
                        var17 = var15;
                        var7 = var17.getMaxTotalAttachmentSize;
                        var7 = var7.bind(var17)();
                        if (!(!(var16 > var7))) {
                            _fun54745_ip = 558;
                            continue _fun54745
                        }
                    case 535:
                        var7 = var13;
                        var7 = var7.bind(var8)();
                        var11 = var7;
                        var7 = var7.done;
                        if (var7) {
                            _fun54745_ip = 669;
                            continue _fun54745
                        }
                    case 553:
                        _fun54745_ip = 311;
                        continue _fun54745;
                    case 558:
                        var9 = var4._handleError;
                        var7 = {};
                        var10 = _closure1_slot10;
                        var10 = var10.ENTITY_TOO_LARGE;
                        var7.code = var10;
                        var10 = {};
                        var11 = _closure1_slot13;
                        var11 = var11.PRECOMPRESSION_SUM_TOO_LARGE;
                        var10.type = var11;
                        var7.reason = var10;
                        var7 = var9.bind(var4)(var7);
                        var7 = var1;
                    case 609: // try_end0
                        return var7;
                    case 612: // try_start_1
                        var9 = var4._handleError;
                        var7 = {};
                        var10 = _closure1_slot10;
                        var10 = var10.ENTITY_TOO_LARGE;
                        var7.code = var10;
                        var10 = {};
                        var11 = _closure1_slot13;
                        var11 = var11.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                        var10.type = var11;
                        var7.reason = var10;
                        var7 = var9.bind(var4)(var7);
                        var7 = var1;
                    case 663: // try_end1
                        return var7;
                    case 666:
                        return var6;
                    case 669: // try_start_2
                        var9 = _closure1_slot14;
                        var7 = var9.log;
                        var12 = var4.id;
                        var6 = var2.HermesInternal;
                        var11 = var6.concat;
                        var10 = '';
                        var6 = ' queued';
                        var6 = var11.bind(var10)(var12, var6);
                        var6 = var7.bind(var9)(var6);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 15;
                        var6 = var9[var6];
                        var7 = var7.bind(var8)(var6);
                        var6 = var7.enqueue;
                        var3 = function() { // Environment: var3
                            var0 = _closure4_slot0;
                            var1 = var0.startUpload;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var3 = var6.bind(var7)(var3);
                        var3 = var1;
                    case 754: // try_end2
                        return var3;
                    case 757: // catch_target0 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 3);
                        var6 = _closure1_slot14;
                        var5 = var6.log;
                        var9 = var4.id;
                        var2 = var2.HermesInternal;
                        var8 = var2.concat;
                        var7 = '';
                        var2 = ' failed in CloudUploader uploadFiles ';
                        var2 = var8.bind(var7)(var9, var2, var3);
                        var2 = var5.bind(var6)(var2);
                        var2 = var4._handleException;
                        var2 = var2.bind(var4)(var3);
                        return var1;
                    case 820:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var7.bind(var2)(var0);
        var _closure2_slot1 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'startUpload';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54757: for (var _fun54757_ip = 0;;) switch (_fun54757_ip) {
                    case 0:
                        StartGenerator();
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54757_ip = 527;
                            continue _fun54757
                        }
                    case 15:
                        var1 = undefined;
                        var7 = undefined;
                        var2 = var3._aborted;
                        if (var2) {
                            _fun54757_ip = 514;
                            continue _fun54757
                        }
                    case 31:
                        var4 = var3._handleStart;
                        var2 = _closure1_slot11;
                        var2 = var4.bind(var3)(var2);
                    case 49: // try_start_0
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 16;
                        var2 = var8[var2];
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.isAndroid;
                        var2 = var2.bind(var4)();
                        if (!var2) {
                            _fun54757_ip = 101;
                            continue _fun54757
                        }
                    case 82:
                        var4 = var3.observeCompressionProgress;
                        var2 = var3.files;
                        var2 = var4.bind(var3)(var2);
                    case 101:
                        var2 = var3.compressAndCheckFileSize;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 117);
                    case 115:
                        return var2;
                    case 117:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54757_ip = 496;
                            continue _fun54757
                        }
                    case 126:
                        if (var2) {
                            _fun54757_ip = 132;
                            continue _fun54757
                        }
                    case 129: // try_end0
                        return var1;
                    case 132: // try_start_1
                        var4 = var3.setUploadingTextForUI;
                        var4 = var4.bind(var3)();
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 17;
                        var4 = var9[var4];
                        var10 = var8.bind(var1)(var4);
                        var9 = var3.files;
                        var8 = var3._recomputeProgress;
                        var4 = var8.bind;
                        var8 = var4.bind(var8)(var3);
                        var4 = true;
                        var4 = var10.bind(var1)(var9, var4, var8);
                        SaveGenerator(address = 201);
                    case 199:
                        return var4;
                    case 201:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun54757_ip = 493;
                            continue _fun54757
                        }
                    case 210:
                        var8 = var3.files;
                        var9 = var8.length;
                        var8 = 0;
                        if (!(var8 !== var9)) {
                            _fun54757_ip = 435;
                            continue _fun54757
                        }
                    case 230:
                        var10 = var3.files;
                        var9 = var10.every;
                        var8 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var1 = var0.status;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 18;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.CloudUploadStatus;
                            var0 = var0.COMPLETED;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var8 = var9.bind(var10)(var8);
                        if (var8) {
                            _fun54757_ip = 291;
                            continue _fun54757
                        }
                    case 255:
                        var8 = global;
                        var10 = var8.Error;
                        var8 = var10.prototype;
                        var9 = Object.create(var8, {
                            constructor: {
                                value: var10
                            }
                        });
                        var13 = 'Not all attachments were uploaded successfully';
                        var14 = var9;
                        var8 = new var14[var10](var13, var12);
                        var8 = var8 instanceof Object ? var8 : var9;
                        throw var8;
                    case 291:
                        var8 = var3._file;
                        var9 = var8.items;
                        var7 = var9;
                        var8 = null;
                        if (!(var8 != var9)) {
                            _fun54757_ip = 329;
                            continue _fun54757
                        }
                    case 311:
                        var8 = var7;
                        var7 = var8.forEach;
                        var6 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var1 = var0.item;
                            var0 = 100;
                            var1.progress = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var7.bind(var8)(var6);
                    case 329:
                        var6 = {};
                        var12 = var3._file;
                        var13 = var6;
                        var7 = copyDataProperties(var13, var12);
                        var7 = 100;
                        var8 = 'progress';
                        var6[var8] = var7;
                        var3._file = var6;
                        var7 = var3.emit;
                        var6 = var3._file;
                        var6 = var7.bind(var3)(var8, var6);
                        var8 = _closure1_slot14;
                        var7 = var8.log;
                        var10 = var3.id;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var9 = var6.concat;
                        var6 = 'All uploads complete for ';
                        var6 = var9.bind(var6)(var10);
                        var6 = var7.bind(var8)(var6);
                        var6 = var3._handleComplete;
                        var6 = var6.bind(var3)();
                    case 433: // try_end1
                        _fun54757_ip = 524;
                        continue _fun54757;
                    case 435: // try_start_2
                        var7 = _closure1_slot14;
                        var6 = var7.log;
                        var9 = var3.id;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var8 = var5.concat;
                        var5 = 'All uploads cancelled for ';
                        var5 = var8.bind(var5)(var9);
                        var5 = var6.bind(var7)(var5);
                        var5 = var3._handleComplete;
                        var5 = var5.bind(var3)();
                    case 488: // try_end2
                        var5 = undefined;
                        return var5;
                    case 493:
                        return var4;
                    case 496:
                        return var2;
                    case 499: // catch_target0 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 4);
                        var2 = var3._handleException;
                        var2 = var2.bind(var3)(var4);
                        _fun54757_ip = 524;
                        continue _fun54757;
                    case 514:
                        var2 = var3._handleAborted;
                        var2 = var2.bind(var3)();
                    case 524:
                        return var1;
                    case 527:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'observeCompressionProgress';
        var4.key = var6;
        var5 = function arg0() {
            var4 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = function() {
                _fun54762: for (var _fun54762_ip = 0;;) switch (_fun54762_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var3 = var1.mediaEventSubscriptions;
                        var2 = var3.get;
                        var1 = var1._file;
                        var1 = var1.id;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun54762_ip = 50;
                            continue _fun54762
                        }
                    case 40:
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                    case 50:
                        var0 = _closure3_slot0;
                        var3 = var0.mediaEventSubscriptions;
                        var2 = var3.delete;
                        var1 = var0._file;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = var0.uploadItems;
                        var0 = var1.clear;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot1 = var2;
            var3 = var4.forEach;
            var2 = function(arg0) { // Environment: var0
                _fun54763: for (var _fun54763_ip = 0;;) switch (_fun54763_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.item;
                        var2 = var4.platform;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 19;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.UploadPlatform;
                        var1 = var1.REACT_NATIVE;
                        if (!(var2 === var1)) {
                            _fun54763_ip = 92;
                            continue _fun54763
                        }
                    case 55:
                        var1 = 0;
                        var4.compressionProgress = var1;
                        var1 = _closure3_slot0;
                        var3 = var1.uploadItems;
                        var2 = var3.set;
                        var1 = var4.uri;
                        var1 = var2.bind(var3)(var1, var4);
                    case 92:
                        return var0;
                }
            };
            var2 = var3.bind(var4)(var2);
            var3 = var1.mediaEventSubscriptions;
            var2 = var3.set;
            var1 = var1._file;
            var1 = var1.id;
            var6 = _closure1_slot15;
            var5 = var6.addListener;
            var4 = 'compression-progress';
            var0 = function(arg0) { // Environment: var0
                _fun54764: for (var _fun54764_ip = 0;;) switch (_fun54764_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.uri;
                        var3 = var0.progress;
                        var1 = _closure3_slot0;
                        var2 = var1.uploadItems;
                        var1 = var2.has;
                        var1 = var1.bind(var2)(var5);
                        if (!var1) {
                            _fun54764_ip = 281;
                            continue _fun54764
                        }
                    case 43:
                        var1 = _closure3_slot0;
                        var4 = var1.uploadItems;
                        var2 = var4.get;
                        var2 = var2.bind(var4)(var5);
                        var2.compressionProgress = var3;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 20;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var3 = var5.meanBy;
                        var4 = var1.uploadItems;
                        var1 = var4.values;
                        var9 = var1.bind(var4)();
                        var1 = new Array(0);
                        var8 = 0;
                        var10 = var1;
                        var4 = arraySpread(var10, var9, var8);
                        var4 = 'compressionProgress';
                        var6 = var3.bind(var5)(var1, var4);
                        var3 = 100;
                        if (!(!(var6 >= var3))) {
                            _fun54764_ip = 177;
                            continue _fun54764
                        }
                    case 145:
                        var5 = _closure3_slot0;
                        var1 = {};
                        var9 = var5._file;
                        var10 = var1;
                        var7 = copyDataProperties(var10, var9);
                        var1[var4] = var6;
                        var5._file = var1;
                        _fun54764_ip = 253;
                        continue _fun54764;
                    case 177:
                        var1 = _closure3_slot1;
                        var1 = var1.bind(var2)();
                        var1 = _closure3_slot0;
                        var1 = var1._file;
                        var5 = var1.items;
                        var1 = null;
                        if (!(var1 != var5)) {
                            _fun54764_ip = 223;
                            continue _fun54764
                        }
                    case 206:
                        var2 = var5.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.item;
                            var0 = 100;
                            var1.compressionProgress = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var2.bind(var5)(var1);
                    case 223:
                        var2 = _closure3_slot0;
                        var1 = {};
                        var9 = var2._file;
                        var10 = var1;
                        var5 = copyDataProperties(var10, var9);
                        var1[var4] = var3;
                        var2._file = var1;
                    case 253:
                        var3 = _closure3_slot0;
                        var2 = var3.emit;
                        var1 = var3._file;
                        var0 = 'compression-progress';
                        var0 = var2.bind(var3)(var0, var1);
                    case 281:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var5.bind(var6)(var4, var0);
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/uploader/native/CloudUploader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 102, 18, 27, 660, 1346, 3, 6541, 1234, 4004, 4121, 6611, 478, 6612, 3995, 3997, 22, 6613, 2]);