// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8688: for (var _fun8688_ip = 0;;) switch (_fun8688_ip) {
        case 0:
            var1 = exports;
            var4 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
            var0 = function() { // Original name: getDevServer, environment: var2
                _fun8689: for (var _fun8689_ip = 0;;) switch (_fun8689_ip) {
                    case 0:
                        var0 = undefined;
                        var2 = undefined;
                    case 4: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 2;
                        var1 = var4[var1];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.ReactNativeLibraries;
                        var4 = var1.Devtools;
                        var2 = var4;
                        var3 = null;
                        var1 = undefined;
                        if (!(var3 !== var4)) {
                            _fun8689_ip = 72;
                            continue _fun8689
                        }
                    case 50:
                        var3 = var2;
                        var1 = undefined;
                        if (!(var1 !== var3)) {
                            _fun8689_ip = 72;
                            continue _fun8689
                        }
                    case 59:
                        var3 = var2;
                        var2 = var3.getDevServer;
                        var1 = var2.bind(var3)();
                    case 72: // try_end0
                        return var1;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        return var0;
                }
            };
            var _closure1_slot3 = var0;
            var3 = global;
            var7 = var3.Object;
            var6 = var7.defineProperty;
            var5 = {};
            var3 = true;
            var5.value = var3;
            var3 = '__esModule';
            var3 = var6.bind(var7)(var1, var3, var5);
            var3 = var4;
            if (!var3) {
                _fun8688_ip = 75;
                continue _fun8688
            }
        case 69:
            var3 = var4.__awaiter;
        case 75:
            if (var3) {
                _fun8688_ip = 83;
                continue _fun8688
            }
        case 78:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                _fun8690: for (var _fun8690_ip = 0;;) switch (_fun8690_ip) {
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
                            _fun8690_ip = 48;
                            continue _fun8690
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
                            _fun8691: for (var _fun8691_ip = 0;;) switch (_fun8691_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function(arg0) { // Original name: fulfilled, environment: var0
                                        _fun8692: for (var _fun8692_ip = 0;;) switch (_fun8692_ip) {
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
                                                _fun8692_ip = 52;
                                                continue _fun8692;
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
                                        _fun8693: for (var _fun8693_ip = 0;;) switch (_fun8693_ip) {
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
                                                _fun8693_ip = 53;
                                                continue _fun8693;
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
                                        _fun8694: for (var _fun8694_ip = 0;;) switch (_fun8694_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun8694_ip = 54;
                                                    continue _fun8694
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function(arg0) { // Original name: adopt, environment: var1
                                                    _fun8695: for (var _fun8695_ip = 0;;) switch (_fun8695_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun8695_ip = 52;
                                                                continue _fun8695
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
                                                _fun8694_ip = 73;
                                                continue _fun8694;
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
                                        _fun8691_ip = 70;
                                        continue _fun8691
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
        case 83:
            var _closure1_slot2 = var3;
            var3 = function(arg0) { // Original name: fetchSourceContext, environment: var2
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot2;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun8699: for (var _fun8699_ip = 0;;) switch (_fun8699_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun8699_ip = 45;
                                    continue _fun8699
                                }
                            case 7:
                                var1 = global;
                                var3 = var1.Promise;
                                var1 = var3.prototype;
                                var2 = Object.create(var1, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = function(arg0) { // Environment: var1
                                    _fun8700: for (var _fun8700_ip = 0;;) switch (_fun8700_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0;
                                            var _closure5_slot0 = var0;
                                            var0 = undefined;
                                            var3 = undefined;
                                            var4 = undefined;
                                        case 18: // try_start_0
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot1;
                                            var6 = 0;
                                            var6 = var8[var6];
                                            var7 = var7.bind(var0)(var6);
                                            var6 = var7.createStealthXhr;
                                            var6 = var6.bind(var7)();
                                            var3 = var6;
                                            var _closure5_slot1 = var6;
                                            if (var6) {
                                                _fun8700_ip = 79;
                                                continue _fun8700
                                            }
                                        case 60:
                                            var7 = var1;
                                            var6 = _closure2_slot0;
                                            var6 = var7.bind(var0)(var6);
                                        case 75: // try_end0
                                            var6 = undefined;
                                            return var6;
                                        case 79: // try_start_1
                                            var6 = _closure1_slot3;
                                            var7 = var6.bind(var0)();
                                            var6 = undefined;
                                            if (!var7) {
                                                _fun8700_ip = 126;
                                                continue _fun8700
                                            }
                                        case 92:
                                            var10 = var7.url;
                                            var7 = global;
                                            var7 = var7.HermesInternal;
                                            var9 = var7.concat;
                                            var8 = '';
                                            var7 = '__sentry/context';
                                            var6 = var9.bind(var8)(var10, var7);
                                        case 126:
                                            var4 = var6;
                                            if (var6) {
                                                _fun8700_ip = 193;
                                                continue _fun8700
                                            }
                                        case 132:
                                            var6 = _closure1_slot0;
                                            var7 = _closure1_slot1;
                                            var5 = 1;
                                            var5 = var7[var5];
                                            var5 = var6.bind(var0)(var5);
                                            var7 = var5.debug;
                                            var6 = var7.error;
                                            var5 = 'Could not fetch source context. No dev server URL found.';
                                            var5 = var6.bind(var7)(var5);
                                            var6 = var1;
                                            var5 = _closure2_slot0;
                                            var5 = var6.bind(var0)(var5);
                                        case 189: // try_end1
                                            var5 = undefined;
                                            return var5;
                                        case 193: // try_start_2
                                            var7 = var3.open;
                                            var6 = var4;
                                            var5 = 'POST';
                                            var4 = true;
                                            var4 = var7.bind(var3)(var5, var6, var4);
                                            var6 = var3.setRequestHeader;
                                            var5 = 'Content-Type';
                                            var4 = 'application/json';
                                            var4 = var6.bind(var3)(var5, var4);
                                            var5 = var3.send;
                                            var4 = global;
                                            var7 = var4.JSON;
                                            var6 = var7.stringify;
                                            var4 = {};
                                            var8 = _closure2_slot0;
                                            var4.stack = var8;
                                            var4 = var6.bind(var7)(var4);
                                            var4 = var5.bind(var3)(var4);
                                            var4 = function() { // Environment: var2
                                                _fun8701: for (var _fun8701_ip = 0;;) switch (_fun8701_ip) {
                                                    case 0:
                                                        var0 = undefined;
                                                        var2 = undefined;
                                                        var3 = _closure5_slot1;
                                                        var4 = var3.readyState;
                                                        var5 = _closure1_slot0;
                                                        var6 = _closure1_slot1;
                                                        var3 = 0;
                                                        var3 = var6[var3];
                                                        var3 = var5.bind(var0)(var3);
                                                        var3 = var3.XHR_READYSTATE_DONE;
                                                        if (!(var4 === var3)) {
                                                            _fun8701_ip = 190;
                                                            continue _fun8701
                                                        }
                                                    case 52:
                                                        var3 = _closure5_slot1;
                                                        var4 = var3.status;
                                                        var3 = 200;
                                                        if (!(var3 !== var4)) {
                                                            _fun8701_ip = 84;
                                                            continue _fun8701
                                                        }
                                                    case 68:
                                                        var4 = _closure5_slot0;
                                                        var3 = _closure2_slot0;
                                                        var3 = var4.bind(var0)(var3);
                                                    case 84: // try_start_0
                                                        var4 = global;
                                                        var6 = var4.JSON;
                                                        var5 = var6.parse;
                                                        var3 = _closure5_slot1;
                                                        var3 = var3.responseText;
                                                        var3 = var5.bind(var6)(var3);
                                                        var2 = var3;
                                                        var5 = var4.Array;
                                                        var4 = var5.isArray;
                                                        var3 = var3.stack;
                                                        var4 = var4.bind(var5)(var3);
                                                        var3 = _closure5_slot0;
                                                        if (var4) {
                                                            _fun8701_ip = 159;
                                                            continue _fun8701
                                                        }
                                                    case 145:
                                                        var4 = _closure2_slot0;
                                                        var4 = var3.bind(var0)(var4);
                                                        _fun8701_ip = 170;
                                                        continue _fun8701;
                                                    case 159:
                                                        var2 = var2.stack;
                                                        var2 = var3.bind(var0)(var2);
                                                    case 170: // try_end0
                                                        _fun8701_ip = 190;
                                                        continue _fun8701;
                                                    case 172: // catch_target0
                                                        CatchBlockStart(arg_register = 2);
                                                        var2 = _closure5_slot0;
                                                        var1 = _closure2_slot0;
                                                        var1 = var2.bind(var0)(var1);
                                                    case 190:
                                                        return var0;
                                                }
                                            };
                                            var3.onreadystatechange = var4;
                                            var2 = function() { // Environment: var2
                                                var2 = _closure5_slot0;
                                                var1 = _closure2_slot0;
                                                var0 = undefined;
                                                var1 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            var3.onerror = var2;
                                        case 303: // try_end2
                                            _fun8700_ip = 368;
                                            continue _fun8700;
                                        case 305: // catch_target0 // catch_target1 // catch_target2
                                            CatchBlockStart(arg_register = 5);
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var2 = 1;
                                            var2 = var4[var2];
                                            var2 = var3.bind(var0)(var2);
                                            var4 = var2.debug;
                                            var3 = var4.error;
                                            var2 = 'Could not fetch source context.';
                                            var2 = var3.bind(var4)(var2, var5);
                                            var2 = var1;
                                            var1 = _closure2_slot0;
                                            var1 = var2.bind(var0)(var1);
                                        case 368:
                                            return var0;
                                    }
                                };
                                var5 = var2;
                                var1 = new var5[var3](var4, var3);
                                var1 = var1 instanceof Object ? var1 : var2;
                                return var1;
                            case 45:
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
            var1.fetchSourceContext = var3;
            var3 = function(arg0) { // Original name: parseErrorStack, environment: var2
                _fun8703: for (var _fun8703_ip = 0;;) switch (_fun8703_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var3 = 2;
                        var1 = var1[var3];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var1 = var1.ReactNativeLibraries;
                        var1 = var1.Devtools;
                        if (var1) {
                            _fun8703_ip = 76;
                            continue _fun8703
                        }
                    case 40:
                        var1 = global;
                        var5 = var1.Error;
                        var1 = var5.prototype;
                        var4 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = 'React Native Devtools not available.';
                        var7 = var4;
                        var1 = new var7[var5](var6, var5);
                        var1 = var1 instanceof Object ? var1 : var4;
                        throw var1;
                    case 76:
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var0 = var0[var3];
                        var0 = var1.bind(var2)(var0);
                        var0 = var0.ReactNativeLibraries;
                        var2 = var0.Devtools;
                        var1 = var2.parseErrorStack;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var1.parseErrorStack = var3;
            var2 = function(arg0, arg1) { // Original name: symbolicateStackTrace, environment: var2
                _fun8704: for (var _fun8704_ip = 0;;) switch (_fun8704_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var3 = 2;
                        var1 = var1[var3];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var1 = var1.ReactNativeLibraries;
                        var1 = var1.Devtools;
                        if (var1) {
                            _fun8704_ip = 76;
                            continue _fun8704
                        }
                    case 40:
                        var1 = global;
                        var5 = var1.Error;
                        var1 = var5.prototype;
                        var4 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var7 = 'React Native Devtools not available.';
                        var8 = var4;
                        var1 = new var8[var5](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var4;
                        throw var1;
                    case 76:
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var0 = var0[var3];
                        var0 = var1.bind(var2)(var0);
                        var0 = var0.ReactNativeLibraries;
                        var3 = var0.Devtools;
                        var2 = var3.symbolicateStackTrace;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1.symbolicateStackTrace = var2;
            var1.getDevServer = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [815, 817, 994]);