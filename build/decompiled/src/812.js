// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8662: for (var _fun8662_ip = 0;;) switch (_fun8662_ip) {
        case 0:
            var2 = exports;
            var4 = dependencyMap;
            var5 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var4;
            var0 = function(arg0, arg1) { // Original name: processEvent, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot3;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun8665: for (var _fun8665_ip = 0;;) switch (_fun8665_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun8665_ip = 734;
                                    continue _fun8665
                                }
                            case 10:
                                var9 = undefined;
                                var10 = undefined;
                                var11 = undefined;
                                var2 = _closure2_slot0;
                                var3 = var2.exception;
                                var _closure2_slot2 = var3;
                                var12 = null;
                                var2 = undefined;
                                if (!(var12 !== var3)) {
                                    _fun8665_ip = 60;
                                    continue _fun8665
                                }
                            case 41:
                                var3 = _closure2_slot2;
                                var2 = undefined;
                                if (!(var9 !== var3)) {
                                    _fun8665_ip = 60;
                                    continue _fun8665
                                }
                            case 51:
                                var3 = _closure2_slot2;
                                var2 = var3.values;
                            case 60:
                                if (!var2) {
                                    _fun8665_ip = 113;
                                    continue _fun8665
                                }
                            case 63:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var7 = 1;
                                var2 = var2[var7];
                                var4 = var3.bind(var9)(var2);
                                var3 = var4.isErrorLike;
                                var2 = _closure2_slot1;
                                var2 = var2.originalException;
                                var2 = var3.bind(var4)(var2);
                                if (var2) {
                                    _fun8665_ip = 469;
                                    continue _fun8665
                                }
                            case 113:
                                var2 = _closure2_slot1;
                                var2 = var2.syntheticException;
                                if (!var2) {
                                    _fun8665_ip = 727;
                                    continue _fun8665
                                }
                            case 129:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var14 = 1;
                                var2 = var2[var14];
                                var5 = var4.bind(var9)(var2);
                                var4 = var5.isErrorLike;
                                var2 = _closure2_slot1;
                                var2 = var2.syntheticException;
                                var2 = var4.bind(var5)(var2);
                                if (!var2) {
                                    _fun8665_ip = 727;
                                    continue _fun8665
                                }
                            case 179:
                                var5 = _closure1_slot6;
                                var2 = _closure2_slot1;
                                var4 = var2.syntheticException;
                                var4 = var4.stack;
                                var13 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var6 = var6[var14];
                                var13 = var13.bind(var9)(var6);
                                var6 = var13.getFramesToPop;
                                var2 = var2.syntheticException;
                                var2 = var6.bind(var13)(var2);
                                var2 = var5.bind(var9)(var4, var2);
                                SaveGenerator(address = 243);
                            case 241:
                                return var2;
                            case 243:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun8665_ip = 466;
                                    continue _fun8665
                                }
                            case 252:
                                var4 = _closure2_slot0;
                                var4 = var4.exception;
                                if (var4) {
                                    _fun8665_ip = 403;
                                    continue _fun8665
                                }
                            case 268:
                                var4 = _closure2_slot0;
                                var4 = var4.threads;
                                if (!var4) {
                                    _fun8665_ip = 284;
                                    continue _fun8665
                                }
                            case 281:
                                var4 = var2;
                            case 284:
                                if (!var4) {
                                    _fun8665_ip = 727;
                                    continue _fun8665
                                }
                            case 290:
                                var4 = _closure2_slot0;
                                var5 = var4.threads;
                                var13 = undefined;
                                if (!(var12 !== var5)) {
                                    _fun8665_ip = 317;
                                    continue _fun8665
                                }
                            case 306:
                                var13 = undefined;
                                if (!(var9 !== var5)) {
                                    _fun8665_ip = 317;
                                    continue _fun8665
                                }
                            case 312:
                                var13 = var5.values;
                            case 317:
                                var6 = undefined;
                                if (!(var12 !== var13)) {
                                    _fun8665_ip = 335;
                                    continue _fun8665
                                }
                            case 323:
                                var6 = undefined;
                                if (!(var9 !== var13)) {
                                    _fun8665_ip = 335;
                                    continue _fun8665
                                }
                            case 329:
                                var5 = 0;
                                var6 = var13[var5];
                            case 335:
                                var5 = undefined;
                                if (!(var12 !== var6)) {
                                    _fun8665_ip = 353;
                                    continue _fun8665
                                }
                            case 341:
                                var5 = undefined;
                                if (!(var5 !== var6)) {
                                    _fun8665_ip = 353;
                                    continue _fun8665
                                }
                            case 347:
                                var5 = var6.stacktrace;
                            case 353:
                                if (!var5) {
                                    _fun8665_ip = 727;
                                    continue _fun8665
                                }
                            case 359:
                                var4 = var4.threads;
                                var5 = var4.values;
                                var4 = 0;
                                var4 = var5[var4];
                                var5 = var4.stacktrace;
                                var4 = var2.reverse;
                                var4 = var4.bind(var2)();
                                var5.frames = var4;
                                _fun8665_ip = 727;
                                continue _fun8665;
                            case 403:
                                var4 = var2;
                                if (!var4) {
                                    _fun8665_ip = 424;
                                    continue _fun8665
                                }
                            case 409:
                                var5 = _closure2_slot0;
                                var5 = var5.exception;
                                var4 = var5.values;
                            case 424:
                                if (!var4) {
                                    _fun8665_ip = 727;
                                    continue _fun8665
                                }
                            case 430:
                                var4 = _closure1_slot7;
                                var3 = _closure2_slot0;
                                var3 = var3.exception;
                                var5 = var3.values;
                                var3 = 0;
                                var3 = var5[var3];
                                var3 = var4.bind(var9)(var3, var2);
                                _fun8665_ip = 727;
                                continue _fun8665;
                            case 466:
                                return var2;
                            case 469:
                                var2 = _closure2_slot1;
                                var4 = var2.originalException;
                                var3 = new Array(0);
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var7];
                                var5 = var5.bind(var9)(var2);
                                var2 = var5.isErrorLike;
                                var2 = var2.bind(var5)(var4);
                                if (!var2) {
                                    _fun8665_ip = 564;
                                    continue _fun8665
                                }
                            case 514:
                                var2 = var3.push;
                                var2 = var2.bind(var3)(var4);
                                var5 = var4.cause;
                                var6 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var7];
                                var6 = var6.bind(var9)(var2);
                                var2 = var6.isErrorLike;
                                var2 = var2.bind(var6)(var5);
                                var4 = var5;
                                if (var2) {
                                    _fun8665_ip = 514;
                                    continue _fun8665
                                }
                            case 564:
                                var2 = var3.entries;
                                var2 = var2.bind(var3)();
                                var6 = var2;
                                var3 = var6[Symbol.iterator];
                                var6 = var3().next;
                                var5 = 2;
                                var4 = 0;
                            case 585:
                                var12 = var6().value;
                                var2 = var3;
                                if (!(var2 !== var9)) {
                                    _fun8665_ip = 727;
                                    continue _fun8665
                                }
                            case 599: // try_start_0
                                var2 = _closure1_slot2;
                                var2 = var2.bind(var9)(var12, var5);
                                var10 = var2[var4];
                                var15 = var2[var7];
                                var13 = _closure1_slot6;
                                var12 = var15.stack;
                                var14 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var7];
                                var14 = var14.bind(var9)(var2);
                                var2 = var14.getFramesToPop;
                                var2 = var2.bind(var14)(var15);
                                var2 = var13.bind(var9)(var12, var2);
                                SaveGenerator(address = 665);
                            case 663:
                                return var2;
                            case 665:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 12);
                                if (var12) {
                                    _fun8665_ip = 714;
                                    continue _fun8665
                                }
                            case 671:
                                var11 = var2;
                                if (!var2) {
                                    _fun8665_ip = 712;
                                    continue _fun8665
                                }
                            case 677:
                                var14 = _closure1_slot7;
                                var12 = _closure2_slot0;
                                var12 = var12.exception;
                                var13 = var12.values;
                                var12 = var10;
                                var13 = var13[var12];
                                var12 = var11;
                                var12 = var14.bind(var9)(var13, var12);
                            case 712: // try_end0
                                _fun8665_ip = 585;
                                continue _fun8665;
                            case 714:
                                var3.return();
                                return var2;
                            case 720: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var3.return();
                                throw var2;
                            case 727:
                                var1 = _closure2_slot0;
                                return var1;
                            case 734:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var _closure1_slot5 = var0;
            var0 = function(arg0) { // Original name: symbolicate, environment: var1
                _fun8666: for (var _fun8666_ip = 0;;) switch (_fun8666_ip) {
                    case 0:
                        var3 = undefined;
                        var4 = undefined;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arguments.length;
                        var2 = 1;
                        var5 = var1 > var2;
                        var1 = 0;
                        if (!var5) {
                            _fun8666_ip = 42;
                            continue _fun8666
                        }
                    case 28:
                        var5 = arguments[var2];
                        var1 = 0;
                        if (!(var3 !== var5)) {
                            _fun8666_ip = 42;
                            continue _fun8666
                        }
                    case 38:
                        var1 = arguments[var2];
                    case 42:
                        var _closure2_slot1 = var1;
                        var2 = _closure1_slot3;
                        var10 = this;
                        var7 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun8668: for (var _fun8668_ip = 0;;) switch (_fun8668_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun8668_ip = 407;
                                            continue _fun8668
                                        }
                                    case 12:
                                        var5 = undefined;
                                        var11 = undefined;
                                        var9 = undefined;
                                        var6 = undefined;
                                    case 20: // try_start_0
                                        var10 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var7 = 2;
                                        var8 = var1[var7];
                                        var14 = var10.bind(var5)(var8);
                                        var13 = var14.parseErrorStack;
                                        var12 = _closure2_slot0;
                                        var12 = var13.bind(var14)(var12);
                                        var1 = var1[var7];
                                        var10 = var10.bind(var5)(var1);
                                        var1 = var10.symbolicateStackTrace;
                                        var1 = var1.bind(var10)(var12);
                                        SaveGenerator(address = 85);
                                    case 83:
                                        return var1;
                                    case 85:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 10);
                                        if (var10) {
                                            _fun8668_ip = 313;
                                            continue _fun8668
                                        }
                                    case 94:
                                        var11 = var1;
                                        if (var1) {
                                            _fun8668_ip = 147;
                                            continue _fun8668
                                        }
                                    case 100:
                                        var12 = _closure1_slot0;
                                        var13 = _closure1_slot1;
                                        var10 = 3;
                                        var10 = var13[var10];
                                        var10 = var12.bind(var5)(var10);
                                        var13 = var10.debug;
                                        var12 = var13.error;
                                        var10 = 'React Native DevServer could not symbolicate the stack trace.';
                                        var10 = var12.bind(var13)(var10);
                                    case 142: // try_end0
                                        var10 = null;
                                        return var10;
                                    case 147: // try_start_1
                                        var12 = var11;
                                        var10 = 'stack';
                                        var10 = var10 in var12;
                                        if (var10) {
                                            _fun8668_ip = 166;
                                            continue _fun8668
                                        }
                                    case 161:
                                        var10 = var11;
                                        _fun8668_ip = 172;
                                        continue _fun8668;
                                    case 166:
                                        var10 = var11.stack;
                                    case 172:
                                        var9 = var10;
                                        var10 = global;
                                        var12 = var10.Math;
                                        var11 = var12.max;
                                        var10 = _closure2_slot1;
                                        var8 = 1;
                                        var10 = var10 - var8;
                                        var8 = 0;
                                        var8 = var11.bind(var12)(var10, var8);
                                        var6 = var8;
                                        var10 = var9;
                                        if (var8) {
                                            _fun8668_ip = 221;
                                            continue _fun8668
                                        }
                                    case 216:
                                        var9 = var10;
                                        _fun8668_ip = 231;
                                        continue _fun8668;
                                    case 221:
                                        var8 = var10.slice;
                                        var9 = var8.bind(var10)(var6);
                                    case 231:
                                        var8 = var9.filter;
                                        var6 = function(arg0) { // Environment: var2
                                            _fun8669: for (var _fun8669_ip = 0;;) switch (_fun8669_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var0 = var1.file;
                                                    if (!var0) {
                                                        _fun8669_ip = 42;
                                                        continue _fun8669
                                                    }
                                                case 12:
                                                    var3 = var1.file;
                                                    var2 = var3.match;
                                                    var1 = _closure1_slot4;
                                                    var2 = var2.bind(var3)(var1);
                                                    var1 = null;
                                                    var0 = var1 === var2;
                                                case 42:
                                                    return var0;
                                            }
                                        };
                                        var6 = var8.bind(var9)(var6);
                                        var2 = function(arg0) { // Original name: convertReactNativeFramesToSentryFrames, environment: var2
                                            var1 = arg0;
                                            var _closure5_slot0 = var1;
                                            var3 = _closure1_slot3;
                                            var7 = this;
                                            var4 = function*() { // Environment: var0
                                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                    _fun8672: for (var _fun8672_ip = 0;;) switch (_fun8672_ip) {
                                                        case 0:
                                                            StartGenerator();
                                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                                            if (var2) {
                                                                _fun8672_ip = 60;
                                                                continue _fun8672
                                                            }
                                                        case 9:
                                                            var2 = this;
                                                            var _closure7_slot0 = var2;
                                                            var2 = global;
                                                            var3 = var2.Promise;
                                                            var2 = var3.all;
                                                            var5 = _closure5_slot0;
                                                            var4 = var5.map;
                                                            var1 = function(arg0) { // Environment: var1
                                                                var1 = arg0;
                                                                var _closure8_slot0 = var1;
                                                                var3 = _closure1_slot3;
                                                                var7 = _closure7_slot0;
                                                                var4 = function*() { // Environment: var0
                                                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                                        _fun8675: for (var _fun8675_ip = 0;;) switch (_fun8675_ip) {
                                                                            case 0:
                                                                                StartGenerator();
                                                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                                                if (var1) {
                                                                                    _fun8675_ip = 189;
                                                                                    continue _fun8675
                                                                                }
                                                                            case 10:
                                                                                var1 = _closure8_slot0;
                                                                                var1 = var1.column;
                                                                                var1 = !var1;
                                                                                var2 = !var1;
                                                                                if (var1) {
                                                                                    _fun8675_ip = 48;
                                                                                    continue _fun8675
                                                                                }
                                                                            case 32:
                                                                                var1 = _closure8_slot0;
                                                                                var1 = var1.lineNumber;
                                                                                var1 = !var1;
                                                                                var2 = !var1;
                                                                            case 48:
                                                                                if (!var2) {
                                                                                    _fun8675_ip = 67;
                                                                                    continue _fun8675
                                                                                }
                                                                            case 51:
                                                                                var1 = _closure8_slot0;
                                                                                var4 = var1.file;
                                                                                var1 = undefined;
                                                                                var2 = var1 !== var4;
                                                                            case 67:
                                                                                if (!var2) {
                                                                                    _fun8675_ip = 99;
                                                                                    continue _fun8675
                                                                                }
                                                                            case 70:
                                                                                var1 = _closure8_slot0;
                                                                                var5 = var1.file;
                                                                                var4 = var5.includes;
                                                                                var1 = 'node_modules';
                                                                                var1 = var4.bind(var5)(var1);
                                                                                var2 = !var1;
                                                                            case 99:
                                                                                if (!var2) {
                                                                                    _fun8675_ip = 131;
                                                                                    continue _fun8675
                                                                                }
                                                                            case 102:
                                                                                var1 = _closure8_slot0;
                                                                                var5 = var1.file;
                                                                                var4 = var5.includes;
                                                                                var1 = 'native code';
                                                                                var1 = var4.bind(var5)(var1);
                                                                                var2 = !var1;
                                                                            case 131:
                                                                                var1 = {};
                                                                                var3 = _closure8_slot0;
                                                                                var4 = var3.lineNumber;
                                                                                var1.lineno = var4;
                                                                                var4 = var3.column;
                                                                                var1.colno = var4;
                                                                                var4 = var3.file;
                                                                                var1.filename = var4;
                                                                                var3 = var3.methodName;
                                                                                var1.function = var3;
                                                                                var1.in_app = var2;
                                                                                return var1;
                                                                            case 189:
                                                                                return var0;
                                                                        }
                                                                    };
                                                                    return var0;
                                                                };
                                                                var8 = undefined;
                                                                var6 = undefined;
                                                                var5 = undefined;
                                                                var0 = var8[var3](var7, var6, var5, var4, var3);
                                                                return var0;
                                                            };
                                                            var1 = var4.bind(var5)(var1);
                                                            var1 = var2.bind(var3)(var1);
                                                            return var1;
                                                        case 60:
                                                            return var0;
                                                    }
                                                };
                                                return var0;
                                            };
                                            var8 = undefined;
                                            var6 = undefined;
                                            var5 = undefined;
                                            var0 = var8[var3](var7, var6, var5, var4, var3);
                                            return var0;
                                        };
                                        var2 = var2.bind(var5)(var6);
                                        SaveGenerator(address = 260);
                                    case 258:
                                        return var2;
                                    case 260:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                        if (var6) {
                                            _fun8668_ip = 310;
                                            continue _fun8668
                                        }
                                    case 266:
                                        var6 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var3 = var3[var7];
                                        var6 = var6.bind(var5)(var3);
                                        var3 = var6.fetchSourceContext;
                                        var3 = var3.bind(var6)(var2);
                                        SaveGenerator(address = 298);
                                    case 296:
                                        return var3;
                                    case 298:
                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                                        if (var6) {
                                            _fun8668_ip = 307;
                                            continue _fun8668
                                        }
                                    case 304: // try_end1
                                        return var3;
                                    case 307:
                                        return var3;
                                    case 310:
                                        return var2;
                                    case 313:
                                        return var1;
                                    case 316: // catch_target0 // catch_target1
                                        CatchBlockStart(arg_register = 3);
                                        var4 = var3;
                                        var1 = global;
                                        var2 = var1.Error;
                                        var2 = var3 instanceof var2;
                                        if (!var2) {
                                            _fun8668_ip = 402;
                                            continue _fun8668
                                        }
                                    case 336:
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var2 = 3;
                                        var2 = var6[var2];
                                        var2 = var3.bind(var5)(var2);
                                        var3 = var2.debug;
                                        var2 = var3.warn;
                                        var5 = var4.message;
                                        var1 = var1.HermesInternal;
                                        var4 = var1.concat;
                                        var1 = 'Unable to symbolicate stack trace: ';
                                        var1 = var4.bind(var1)(var5);
                                        var1 = var2.bind(var3)(var1);
                                    case 402:
                                        var1 = null;
                                        return var1;
                                    case 407:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var11 = undefined;
                        var9 = undefined;
                        var8 = undefined;
                        var0 = var11[var2](var10, var9, var8, var7, var6);
                        return var0;
                }
            };
            var _closure1_slot6 = var0;
            var0 = function(arg0, arg1) { // Original name: replaceExceptionFramesInException, environment: var1
                _fun8676: for (var _fun8676_ip = 0;;) switch (_fun8676_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = arg1;
                        var0 = null;
                        var4 = var0 == var1;
                        var0 = undefined;
                        var2 = undefined;
                        if (var4) {
                            _fun8676_ip = 25;
                            continue _fun8676
                        }
                    case 19:
                        var2 = var1.stacktrace;
                    case 25:
                        if (!var2) {
                            _fun8676_ip = 50;
                            continue _fun8676
                        }
                    case 28:
                        var2 = var1.stacktrace;
                        var1 = var3.reverse;
                        var1 = var1.bind(var3)();
                        var2.frames = var1;
                    case 50:
                        return var0;
                }
            };
            var _closure1_slot7 = var0;
            var3 = global;
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var6);
            var0 = 0;
            var6 = var4[var0];
            var4 = arg2;
            var0 = undefined;
            var4 = var4.bind(var0)(var6);
            var _closure1_slot2 = var4;
            var4 = var5;
            if (!var4) {
                _fun8662_ip = 113;
                continue _fun8662
            }
        case 107:
            var4 = var5.__awaiter;
        case 113:
            if (var4) {
                _fun8662_ip = 121;
                continue _fun8662
            }
        case 116:
            var4 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun8677: for (var _fun8677_ip = 0;;) switch (_fun8677_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun8677_ip = 48;
                            continue _fun8677
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun8678: for (var _fun8678_ip = 0;;) switch (_fun8678_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function(arg0) { // Original name: fulfilled, environment: var0
                                        _fun8679: for (var _fun8679_ip = 0;;) switch (_fun8679_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun8679_ip = 52;
                                                continue _fun8679;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function(arg0) { // Original name: rejected, environment: var0
                                        _fun8680: for (var _fun8680_ip = 0;;) switch (_fun8680_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun8680_ip = 53;
                                                continue _fun8680;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function(arg0) { // Original name: step, environment: var0
                                        _fun8681: for (var _fun8681_ip = 0;;) switch (_fun8681_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun8681_ip = 54;
                                                    continue _fun8681
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function(arg0) { // Original name: adopt, environment: var1
                                                    _fun8682: for (var _fun8682_ip = 0;;) switch (_fun8682_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun8682_ip = 52;
                                                                continue _fun8682
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun8681_ip = 73;
                                                continue _fun8681;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun8678_ip = 70;
                                        continue _fun8678
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 121:
            var _closure1_slot3 = var4;
            var5 = var3.RegExp;
            var6 = ['ReactNativeRenderer-dev\\.js$', 'MessageQueue\\.js$'];
            var4 = var6.join;
            var3 = '|';
            var11 = var4.bind(var6)(var3);
            var4 = var5.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var5
                }
            });
            var12 = var4;
            var3 = new var12[var5](var11, var10);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure1_slot4 = var3;
            var1 = function() { // Original name: debugSymbolicatorIntegration, environment: var1
                var0 = {};
                var1 = 'DebugSymbolicator';
                var0.name = var1;
                var1 = function() { // Original name: setupOnce, environment: var1
                    var0 = undefined;
                    return var0;
                };
                var0.setupOnce = var1;
                var1 = _closure1_slot5;
                var0.processEvent = var1;
                return var0;
            };
            var2.debugSymbolicatorIntegration = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 813, 814, 817]);