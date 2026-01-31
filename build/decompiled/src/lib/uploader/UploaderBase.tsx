// lib/uploader/UploaderBase.tsx
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
        _fun54677: for (var _fun54677_ip = 0;;) switch (_fun54677_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun54677_ip = 46;
                    continue _fun54677
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun54677_ip = 55;
                    continue _fun54677
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun54677_ip = 343;
                    continue _fun54677
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun54677_ip = 323;
                    continue _fun54677
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun54677_ip = 283;
                    continue _fun54677
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun54677_ip = 270;
                    continue _fun54677
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
                    _fun54677_ip = 163;
                    continue _fun54677
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun54677_ip = 179;
                    continue _fun54677
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun54677_ip = 249;
                    continue _fun54677
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun54677_ip = 249;
                    continue _fun54677
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun54677_ip = 234;
                    continue _fun54677
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun54677_ip = 247;
                    continue _fun54677
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun54677_ip = 265;
                continue _fun54677;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun54677_ip = 283;
                continue _fun54677;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun54677_ip = 323;
                    continue _fun54677
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
                    _fun54677_ip = 330;
                    continue _fun54677
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun54678: for (var _fun54678_ip = 0;;) switch (_fun54678_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun54678_ip = 56;
                                continue _fun54678
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
                            _fun54678_ip = 67;
                            continue _fun54678;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun54679: for (var _fun54679_ip = 0;;) switch (_fun54679_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun54679_ip = 23;
                    continue _fun54679
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun54679_ip = 33;
                    continue _fun54679
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
                    _fun54679_ip = 70;
                    continue _fun54679
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun54679_ip = 55;
                    continue _fun54679
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        _fun54680: for (var _fun54680_ip = 0;;) switch (_fun54680_ip) {
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
                _fun54680_ip = 74;
                continue _fun54680;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AbortCodes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FileUploadErrorTypes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'UploaderBase.tsx';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot11 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EventEmitter;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun54684: for (var _fun54684_ip = 0;;) switch (_fun54684_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot4;
                    var4 = _closure2_slot2;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var5, var4);
                    var0 = _closure1_slot7;
                    var10 = var0.bind(var2)(var4);
                    var4 = _closure1_slot6;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54684_ip = 64;
                        continue _fun54684
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var2);
                    _fun54684_ip = 102;
                    continue _fun54684;
                case 64:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var2)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 102:
                    var0 = var4.bind(var2)(var5, var0);
                    var _closure3_slot0 = var0;
                    var4 = false;
                    var0._aborted = var4;
                    var0._errored = var4;
                    var5 = new Array(0);
                    var0.files = var5;
                    var5 = 0;
                    var0._lastUpdate = var5;
                    var0._loaded = var5;
                    var0.alreadyStarted = var4;
                    var4 = function(arg0) { // Environment: var3
                        _fun54685: for (var _fun54685_ip = 0;;) switch (_fun54685_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = arg0;
                                var1._cancel = var2;
                                var1 = var1.alreadyStarted;
                                if (var1) {
                                    _fun54685_ip = 51;
                                    continue _fun54685
                                }
                            case 25:
                                var4 = _closure3_slot0;
                                var3 = var4.emit;
                                var2 = var4._file;
                                var1 = 'start';
                                var1 = var3.bind(var4)(var1, var2);
                            case 51:
                                var1 = _closure3_slot0;
                                var0 = true;
                                var1.alreadyStarted = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleStart = var4;
                    var4 = function(arg0, arg1, arg2) { // Environment: var3
                        _fun54686: for (var _fun54686_ip = 0;;) switch (_fun54686_ip) {
                            case 0:
                                var1 = arg0;
                                var6 = arg1;
                                var9 = arg2;
                                var _closure4_slot0 = var9;
                                var4 = global;
                                var2 = var4.Date;
                                var0 = var2.now;
                                var3 = var0.bind(var2)();
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 9;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var5.bind(var0)(var2);
                                var2 = var5.calculateProgress;
                                var2 = var2.bind(var5)(var1, var6);
                                var10 = var4.Math;
                                var8 = var10.floor;
                                var5 = _closure3_slot0;
                                var11 = var5._loaded;
                                var11 = var1 - var11;
                                var5 = var5._lastUpdate;
                                var12 = var3 - var5;
                                var5 = 1000;
                                var5 = var12 / var5;
                                var5 = var11 / var5;
                                var5 = var8.bind(var10)(var5);
                                var8 = null;
                                if (!(var8 != var9)) {
                                    _fun54686_ip = 167;
                                    continue _fun54686
                                }
                            case 133:
                                var9 = _closure3_slot0;
                                var9 = var9._file;
                                var9 = var9.items;
                                if (!(var8 != var9)) {
                                    _fun54686_ip = 167;
                                    continue _fun54686
                                }
                            case 152:
                                var8 = var9.forEach;
                                var7 = function(arg0) { // Environment: var7
                                    var0 = arg0;
                                    var1 = var0.item;
                                    var2 = _closure4_slot0;
                                    var0 = var0.id;
                                    var0 = var2[var0];
                                    var1.progress = var0;
                                    var0 = undefined;
                                    return var0;
                                };
                                var7 = var8.bind(var9)(var7);
                            case 167:
                                var4 = _closure3_slot0;
                                var4._lastUpdate = var3;
                                var4._loaded = var1;
                                var1 = {};
                                var13 = var4._file;
                                var14 = var1;
                                var3 = copyDataProperties(var14, var13);
                                var3 = 'currentSize';
                                var1[var3] = var6;
                                var3 = 'progress';
                                var1[var3] = var2;
                                var2 = 'rate';
                                var1[var2] = var5;
                                var4._file = var1;
                                var2 = var4.emit;
                                var1 = var4._file;
                                var1 = var2.bind(var4)(var3, var1);
                                return var0;
                        }
                    };
                    var0._handleProgress = var4;
                    var4 = function(arg0) { // Environment: var3
                        var5 = arg0;
                        var2 = _closure3_slot0;
                        var1 = var2._handleError;
                        var0 = {};
                        var3 = {};
                        var4 = _closure1_slot10;
                        var4 = var4.ERROR_SOURCE_UNKNOWN;
                        var3.type = var4;
                        var4 = var5.toString;
                        var4 = var4.bind(var5)();
                        var3.msg = var4;
                        var0.reason = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleException = var4;
                    var4 = function() { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = var1.clearProcessingMessageInterval;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleAborted = var4;
                    var4 = function(arg0) { // Environment: var3
                        _fun54690: for (var _fun54690_ip = 0;;) switch (_fun54690_ip) {
                            case 0:
                                var0 = arg0;
                                var6 = var0.code;
                                var5 = var0.reason;
                                var4 = var0.body;
                                var1 = _closure3_slot0;
                                var2 = var1.clearProcessingMessageInterval;
                                var2 = var2.bind(var1)();
                                var1 = var1._aborted;
                                if (var1) {
                                    _fun54690_ip = 179;
                                    continue _fun54690
                                }
                            case 48:
                                var1 = _closure3_slot0;
                                var0 = true;
                                var1._errored = var0;
                                var3 = _closure1_slot11;
                                var2 = var3.log;
                                var0 = global;
                                var8 = var0.JSON;
                                var7 = var8.stringify;
                                var14 = var7.bind(var8)(var5);
                                var12 = var1.id;
                                var0 = var0.HermesInternal;
                                var9 = var0.concat;
                                var17 = '_handleError: ';
                                var15 = ' (';
                                var13 = ') for ';
                                var16 = var6;
                                var0 = var17[var9](var16, var15, var14, var13, var12, var11);
                                var0 = var2.bind(var3)(var0);
                                var3 = var1.emit;
                                var15 = var1._file;
                                var16 = 'error';
                                var17 = var1;
                                var14 = var6;
                                var13 = var4;
                                var12 = var5;
                                var0 = var17[var3](var16, var15, var14, var13, var12, var11);
                                var0 = var1.removeAllListeners;
                                var0 = var0.bind(var1)();
                            case 179:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleError = var4;
                    var3 = function(arg0) { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = var1.clearProcessingMessageInterval;
                        var0 = var0.bind(var1)();
                        var3 = _closure1_slot11;
                        var2 = var3.log;
                        var5 = var1.id;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var4 = var0.concat;
                        var0 = '_handleComplete for ';
                        var0 = var4.bind(var0)(var5);
                        var0 = var2.bind(var3)(var0);
                        var4 = var1.emit;
                        var3 = var1._file;
                        var2 = 'complete';
                        var0 = arg0;
                        var0 = var4.bind(var1)(var2, var3, var0);
                        var0 = var1.removeAllListeners;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleComplete = var3;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.uniqueId;
                    var1 = 'Uploader';
                    var1 = var3.bind(var4)(var1);
                    var0.id = var1;
                    var1 = {
                        'id': null,
                        'currentSize': 0,
                        'totalPreCompressionSize': 0,
                        'compressionProgress': 0,
                        'progress': 0,
                        'rate': 0,
                        'hasImage': false,
                        'hasVideo': false,
                        'attachmentsCount': 0
                    };
                    var3 = var0.id;
                    var1.id = var3;
                    var1.items = var2;
                    var0._file = var1;
                    return var0;
            }
        };
        var _closure2_slot2 = var3;
        var1 = _closure1_slot8;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = '_fileSize';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var3 = var0.files;
            var2 = var3.reduce;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun54693: for (var _fun54693_ip = 0;;) switch (_fun54693_ip) {
                    case 0:
                        var0 = arg1;
                        var0 = var0.currentSize;
                        var1 = null;
                        var2 = var1 != var0;
                        var1 = 0;
                        if (!var2) {
                            _fun54693_ip = 23;
                            continue _fun54693
                        }
                    case 20:
                        var1 = var0;
                    case 23:
                        var0 = arg0;
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var0 = 0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var7 = 'compressAndCheckFileSize';
        var4.key = var7;
        var7 = _closure1_slot3;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54695: for (var _fun54695_ip = 0;;) switch (_fun54695_ip) {
                    case 0:
                        StartGenerator();
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54695_ip = 687;
                            continue _fun54695
                        }
                    case 13:
                        var10 = undefined;
                        var1 = undefined;
                        var11 = undefined;
                        var12 = undefined;
                        var13 = undefined;
                        var14 = undefined;
                        var15 = undefined;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 11;
                        var2 = var6[var2];
                        var6 = var5.bind(var10)(var2);
                        var5 = var6.getUploadTarget;
                        var2 = var3.files;
                        var9 = 0;
                        var7 = var2[var9];
                        var8 = null;
                        var16 = var8 == var7;
                        var2 = undefined;
                        if (var16) {
                            _fun54695_ip = 99;
                            continue _fun54695
                        }
                    case 79:
                        var7 = var7.item;
                        var16 = var8 == var7;
                        var2 = undefined;
                        if (var16) {
                            _fun54695_ip = 99;
                            continue _fun54695
                        }
                    case 93:
                        var2 = var7.target;
                    case 99:
                        var6 = var5.bind(var6)(var2);
                        var1 = var6;
                        var2 = var3.files;
                        var5 = var2.length;
                        var2 = var6.getMaxAttachmentsCount;
                        var2 = var2.bind(var6)();
                        if (!(!(var5 > var2))) {
                            _fun54695_ip = 612;
                            continue _fun54695
                        }
                    case 137:
                        var6 = _closure1_slot11;
                        var5 = var6.log;
                        var17 = var3.id;
                        var7 = global;
                        var2 = var7.HermesInternal;
                        var16 = var2.concat;
                        var2 = 'compressing files for ';
                        var2 = var16.bind(var2)(var17);
                        var2 = var5.bind(var6)(var2);
                        var5 = _closure1_slot12;
                        var2 = var3.files;
                        var2 = var5.bind(var10)(var2);
                        var12 = var2;
                        var2 = var2.bind(var10)();
                        var11 = var2;
                        var2 = var2.done;
                        var6 = 'compressAndCheckFileSize() file has been cancelled for compression - ';
                        if (var2) {
                            _fun54695_ip = 525;
                            continue _fun54695
                        }
                    case 222:
                        var2 = var11;
                        var13 = var2.value;
                    case 230: // try_start_0
                        var5 = var13;
                        var2 = var5.reactNativeCompressAndExtractData;
                        var2 = var2.bind(var5)();
                        SaveGenerator(address = 247);
                    case 245:
                        return var2;
                    case 247:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun54695_ip = 504;
                            continue _fun54695
                        }
                    case 256:
                        var16 = var13;
                        var5 = var16.isCancelled;
                        var5 = var5.bind(var16)();
                        if (var5) {
                            _fun54695_ip = 443;
                            continue _fun54695
                        }
                    case 275:
                        var5 = var13;
                        var5 = var5.currentSize;
                        var14 = var5;
                        var16 = var8 != var5;
                        var5 = 0;
                        if (!var16) {
                            _fun54695_ip = 299;
                            continue _fun54695
                        }
                    case 296:
                        var5 = var14;
                    case 299:
                        if (!(var9 !== var5)) {
                            _fun54695_ip = 411;
                            continue _fun54695
                        }
                    case 303:
                        var5 = var13;
                        var5 = var5.currentSize;
                        var15 = var5;
                        var5 = var8 != var5;
                        var16 = 0;
                        if (!var5) {
                            _fun54695_ip = 327;
                            continue _fun54695
                        }
                    case 324:
                        var16 = var15;
                    case 327:
                        var18 = var1;
                        var17 = var18.getMaxFileSize;
                        var5 = var13;
                        var5 = var5.channelId;
                        var5 = var17.bind(var18)(var5);
                        if (!(!(var16 > var5))) {
                            _fun54695_ip = 358;
                            continue _fun54695
                        }
                    case 353: // try_end0
                        _fun54695_ip = 481;
                        continue _fun54695;
                    case 358: // try_start_1
                        var16 = var3._handleError;
                        var5 = {};
                        var17 = _closure1_slot9;
                        var17 = var17.ENTITY_TOO_LARGE;
                        var5.code = var17;
                        var17 = {};
                        var18 = _closure1_slot10;
                        var18 = var18.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                        var17.type = var18;
                        var5.reason = var17;
                        var5 = var16.bind(var3)(var5);
                    case 406: // try_end1
                        var5 = false;
                        return var5;
                    case 411: // try_start_2
                        var16 = var3._handleError;
                        var5 = {};
                        var17 = _closure1_slot9;
                        var17 = var17.ENTITY_EMPTY;
                        var5.code = var17;
                        var5 = var16.bind(var3)(var5);
                    case 438: // try_end2
                        var5 = false;
                        return var5;
                    case 443: // try_start_3
                        var17 = _closure1_slot11;
                        var16 = var17.log;
                        var5 = var13;
                        var18 = var5.id;
                        var5 = var7.HermesInternal;
                        var5 = var5.concat;
                        var5 = var5.bind(var6)(var18);
                        var5 = var16.bind(var17)(var5);
                    case 481: // try_end3
                        var5 = var12;
                        var5 = var5.bind(var10)();
                        var11 = var5;
                        var5 = var5.done;
                        if (var5) {
                            _fun54695_ip = 525;
                            continue _fun54695
                        }
                    case 499:
                        _fun54695_ip = 222;
                        continue _fun54695;
                    case 504:
                        return var2;
                    case 507: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                        CatchBlockStart(arg_register = 5);
                        var2 = var3._handleException;
                        var2 = var2.bind(var3)(var5);
                        var2 = false;
                        return var2;
                    case 525:
                        var2 = var3._fileSize;
                        var2 = var2.bind(var3)();
                        var5 = var1;
                        var1 = var5.getMaxTotalAttachmentSize;
                        var1 = var1.bind(var5)();
                        var1 = var2 > var1;
                        if (!var1) {
                            _fun54695_ip = 606;
                            continue _fun54695
                        }
                    case 555:
                        var5 = var3._handleError;
                        var2 = {};
                        var6 = _closure1_slot9;
                        var6 = var6.ENTITY_TOO_LARGE;
                        var2.code = var6;
                        var6 = {};
                        var7 = _closure1_slot10;
                        var7 = var7.POSTCOMPRESSION_SUM_TOO_LARGE;
                        var6.type = var7;
                        var2.reason = var6;
                        var2 = var5.bind(var3)(var2);
                        var1 = 1;
                    case 606:
                        var1 = !var1;
                        return var1;
                    case 612:
                        var5 = _closure1_slot11;
                        var2 = var5.log;
                        var7 = var3.id;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var1 = 'Too many attachments for ';
                        var1 = var6.bind(var1)(var7);
                        var1 = var2.bind(var5)(var1);
                        var2 = var3._handleError;
                        var1 = {};
                        var4 = _closure1_slot9;
                        var4 = var4.TOO_MANY_ATTACHMENTS;
                        var1.code = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = false;
                        return var1;
                    case 687:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
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
        var6 = 'setUploadingTextForUI';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var4 = var1.files;
            var3 = var4.some;
            var2 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isImage;
                return var0;
            };
            var3 = var3.bind(var4)(var2);
            var4 = var1.files;
            var2 = var4.some;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isVideo;
                return var0;
            };
            var4 = var2.bind(var4)(var0);
            var0 = var1._fileSize;
            var5 = var0.bind(var1)();
            var6 = _closure1_slot11;
            var2 = var6.log;
            var0 = var1.files;
            var14 = var0.length;
            var12 = var1.id;
            var0 = global;
            var0 = var0.HermesInternal;
            var9 = var0.concat;
            var17 = 'setUploadingTextForUI - total content: ';
            var15 = ' bytes and ';
            var13 = ' attachments for ';
            var16 = var5;
            var0 = var17[var9](var16, var15, var14, var13, var12, var11);
            var0 = var2.bind(var6)(var0);
            var0 = {};
            var15 = var1._file;
            var16 = var0;
            var2 = copyDataProperties(var16, var15);
            var2 = 'totalPostCompressionSize';
            var0[var2] = var5;
            var2 = 'currentSize';
            var0[var2] = var5;
            var2 = 'hasVideo';
            var0[var2] = var4;
            var2 = 'hasImage';
            var0[var2] = var3;
            var2 = var1.files;
            var3 = var2.length;
            var2 = 'attachmentsCount';
            var0[var2] = var3;
            var3 = var1.files;
            var2 = 'items';
            var0[var2] = var3;
            var1._file = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '_recomputeProgress';
        var4.key = var6;
        var6 = function() {
            var4 = this;
            var0 = var4._recomputeProgressTotal;
            var0 = var0.bind(var4)();
            var3 = var0.loaded;
            var2 = var0.total;
            var0 = var4._recomputeProgressByFile;
            var1 = var0.bind(var4)();
            var0 = var4._handleProgress;
            var0 = var0.bind(var4)(var3, var2, var1);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = '_recomputeProgressTotal';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var0 = var2._fileSize;
            var1 = var0.bind(var2)();
            var0 = {};
            var5 = var2.files;
            var4 = var5.reduce;
            var3 = function(arg0, arg1) { // Environment: var2
                _fun54702: for (var _fun54702_ip = 0;;) switch (_fun54702_ip) {
                    case 0:
                        var0 = arg1;
                        var0 = var0.loaded;
                        var1 = null;
                        var2 = var1 != var0;
                        var1 = 0;
                        if (!var2) {
                            _fun54702_ip = 23;
                            continue _fun54702
                        }
                    case 20:
                        var1 = var0;
                    case 23:
                        var0 = arg0;
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var2 = 0;
            var2 = var4.bind(var5)(var3, var2);
            var0.loaded = var2;
            var0.total = var1;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = '_recomputeProgressByFile';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var _closure3_slot0 = var0;
            var2 = this;
            var3 = var2.files;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var1 = arg0;
                var3 = _closure3_slot0;
                var2 = var1.id;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var4 = var4[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.calculateProgress;
                var4 = var1.loaded;
                var1 = var1.currentSize;
                var1 = var5.bind(var6)(var4, var1);
                var3[var2] = var1;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = '_addAttachmentsToPayload';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            var4 = arg1;
            var3 = {};
            var10 = arg0;
            var11 = var3;
            var0 = copyDataProperties(var11, var10);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 10;
            var2 = var6[var0];
            var1 = undefined;
            var8 = var5.bind(var1)(var2);
            var7 = var8.get;
            var2 = new Array(0);
            var10 = var7.bind(var8)(var3, var4, var2);
            var2 = new Array(0);
            var9 = 0;
            var11 = var2;
            var9 = arraySpread(var11, var10, var9);
            var10 = arg2;
            var11 = var2;
            var7 = arraySpread(var11, var10, var9);
            var0 = var6[var0];
            var1 = var5.bind(var1)(var0);
            var0 = var1.set;
            var0 = var0.bind(var1)(var3, var4, var2);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'clearProcessingMessageInterval';
        var4.key = var6;
        var6 = function() {
            _fun54706: for (var _fun54706_ip = 0;;) switch (_fun54706_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.processingMessageChangeInterval;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun54706_ip = 42;
                        continue _fun54706
                    }
                case 15:
                    var0 = global;
                    var3 = var0.clearInterval;
                    var2 = var1.processingMessageChangeInterval;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1.processingMessageChangeInterval = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'cancel';
        var4.key = var6;
        var6 = function() {
            _fun54707: for (var _fun54707_ip = 0;;) switch (_fun54707_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot11;
                    var2 = var3.log;
                    var5 = var1.id;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var0 = 'cancel() for ';
                    var0 = var4.bind(var0)(var5);
                    var0 = var2.bind(var3)(var0);
                    var0 = var1._aborted;
                    if (var0) {
                        _fun54707_ip = 121;
                        continue _fun54707
                    }
                case 58:
                    var0 = true;
                    var1._aborted = var0;
                    var2 = var1._cancel;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun54707_ip = 88;
                        continue _fun54707
                    }
                case 78:
                    var0 = var2.call;
                    var0 = var0.bind(var2)(var1);
                case 88:
                    var3 = var1.files;
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.cancel;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var0 = var1._handleComplete;
                    var0 = var0.bind(var1)();
                case 121:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'cancelItem';
        var4.key = var6;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun54710: for (var _fun54710_ip = 0;;) switch (_fun54710_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54710_ip = 355;
                            continue _fun54710
                        }
                    case 18:
                        var _closure4_slot0 = var10;
                        var6 = _closure1_slot11;
                        var5 = var6.log;
                        var9 = var3.id;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var8 = var4.concat;
                        var7 = 'Cancel called for ';
                        var4 = ' for item ';
                        var4 = var8.bind(var7)(var9, var4, var10);
                        var4 = var5.bind(var6)(var4);
                        var5 = var3.files;
                        var4 = var5.find;
                        var2 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var5 = var4.bind(var5)(var2);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun54710_ip = 350;
                            continue _fun54710
                        }
                    case 106:
                        var2 = var5.isCancelled;
                        var2 = var2.bind(var5)();
                        if (var2) {
                            _fun54710_ip = 350;
                            continue _fun54710
                        }
                    case 122:
                        var4 = var3.files;
                        var2 = var4.indexOf;
                        var10 = var2.bind(var4)(var5);
                        var6 = var3.files;
                        var2 = var6.slice;
                        var4 = 0;
                        var12 = var2.bind(var6)(var4, var10);
                        var2 = new Array(0);
                        var13 = var2;
                        var11 = 0;
                        var11 = arraySpread(var13, var12, var11);
                        var9 = var3.files;
                        var8 = var9.slice;
                        var6 = 1;
                        var6 = var10 + var6;
                        var12 = var8.bind(var9)(var6);
                        var13 = var2;
                        var6 = arraySpread(var13, var12, var11);
                        var3.files = var2;
                        var2 = {};
                        var12 = var3._file;
                        var13 = var2;
                        var6 = copyDataProperties(var13, var12);
                        var7 = var3.files;
                        var6 = 'items';
                        var2[var6] = var7;
                        var3._file = var2;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var6.bind(var1)(var2);
                        var1 = var2.cancelGetAttachmentFile;
                        var1 = var1.bind(var2)(var5);
                        SaveGenerator(address = 280);
                    case 278:
                        return var1;
                    case 280:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54710_ip = 347;
                            continue _fun54710
                        }
                    case 286:
                        var2 = var5.cancel;
                        var2 = var2.bind(var5)();
                        var6 = var3.emit;
                        var5 = var3._file;
                        var2 = 'cancel-upload-item';
                        var2 = var6.bind(var3)(var2, var5);
                        var2 = var3.files;
                        var2 = var2.length;
                        if (!(var4 === var2)) {
                            _fun54710_ip = 350;
                            continue _fun54710
                        }
                    case 335:
                        var2 = var3.cancel;
                        var2 = var2.bind(var3)();
                        _fun54710_ip = 350;
                        continue _fun54710;
                    case 347:
                        return var1;
                    case 350:
                        var1 = undefined;
                        return var1;
                    case 355:
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
        var0[9] = var4;
        var4 = {};
        var6 = 'upload';
        var4.key = var6;
        var5 = function arg0() {
            _fun54713: for (var _fun54713_ip = 0;;) switch (_fun54713_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._cancel;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun54713_ip = 88;
                        continue _fun54713
                    }
                case 15:
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1._lastUpdate = var0;
                    var0 = 0;
                    var1._loaded = var0;
                    var0 = {
                        'id': null,
                        'currentSize': 0,
                        'totalPreCompressionSize': 0,
                        'compressionProgress': 0,
                        'progress': 0,
                        'rate': 0,
                        'hasImage': false,
                        'hasVideo': false,
                        'attachmentsCount': 0
                    };
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = arg0;
                    var0.items = var2;
                    var1._file = var0;
                    var0 = undefined;
                    return var0;
                case 88:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'Uploader.upload(...): An upload is already in progress.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/uploader/UploaderBase.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 660, 1346, 3, 3970, 22, 4089, 3971, 639, 2]);