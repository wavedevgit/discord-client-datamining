// utils/SentryUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun13149: for (var _fun13149_ip = 0;;) switch (_fun13149_ip) {
            case 0:
                var1 = arg0;
                var2 = 'string';
                var0 = typeof var1;
                var0 = var2 === var0;
                if (!var0) {
                    _fun13149_ip = 28;
                    continue _fun13149
                }
            case 17:
                var2 = var1.length;
                var1 = 0;
                var0 = var2 > var1;
            case 28:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        _fun13150: for (var _fun13150_ip = 0;;) switch (_fun13150_ip) {
            case 0:
                var3 = arguments[0];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun13150_ip = 21;
                    continue _fun13150
                }
            case 9:
                var1 = {};
                var2 = false;
                var1.staff = var2;
                var3 = var1;
            case 21:
                var1 = _closure1_slot4;
                var2 = var1.CrashReportingManager;
                var1 = var2.setUser;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativeModules;
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var7 = var6.bind(var0)(var1);
    var1 = var7.prototype;
    var6 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var11 = 'Sentry';
    var12 = var6;
    var1 = new var12[var7](var11, var10);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var1 = var6.initSentry;
    var1 = var1.bind(var6)();
    var1 = {};
    var6 = function arg0, arg1, arg2, arg3() {
        var2 = {};
        var0 = arg0;
        var2.id = var0;
        var0 = arg1;
        var2.username = var0;
        var0 = arg2;
        var2.email = var0;
        var0 = arg3;
        var2.staff = var0;
        var4 = _closure1_slot2;
        var3 = _closure1_slot3;
        var0 = 3;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.getCurrentScope;
        var4 = var3.bind(var4)();
        var3 = var4.setUser;
        var3 = var3.bind(var4)(var2);
        var1 = _closure1_slot7;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.setUser = var6;
    var6 = function() {
        var3 = _closure1_slot2;
        var2 = _closure1_slot3;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.getCurrentScope;
        var4 = var2.bind(var3)();
        var3 = var4.setUser;
        var2 = null;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot7;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.clearUser = var6;
    var6 = function arg0() {
        var2 = _closure1_slot2;
        var1 = _closure1_slot3;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getCurrentScope;
        var3 = var1.bind(var2)();
        var2 = var3.setTags;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setTags = var6;
    var6 = function arg0() {
        var2 = _closure1_slot2;
        var1 = _closure1_slot3;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getCurrentScope;
        var3 = var1.bind(var2)();
        var2 = var3.setExtras;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setExtra = var6;
    var6 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var0 = 4;
        var3 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var3);
        var5 = var6.getUpdatedOptions;
        var3 = arg1;
        var3 = var5.bind(var6)(var3);
        var _closure2_slot1 = var3;
        var3 = _closure1_slot2;
        var2 = 3;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.withScope;
        var1 = function(arg0) { // Environment: var1
            _fun13156: for (var _fun13156_ip = 0;;) switch (_fun13156_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun13156_ip = 86;
                        continue _fun13156
                    }
                case 16:
                    var0 = _closure2_slot1;
                    var0 = var0.tags;
                    if (!(var2 != var0)) {
                        _fun13156_ip = 51;
                        continue _fun13156
                    }
                case 30:
                    var4 = var3.setTags;
                    var0 = _closure2_slot1;
                    var0 = var0.tags;
                    var0 = var4.bind(var3)(var0);
                case 51:
                    var0 = _closure2_slot1;
                    var0 = var0.extra;
                    if (!(var2 != var0)) {
                        _fun13156_ip = 86;
                        continue _fun13156
                    }
                case 65:
                    var2 = var3.setExtras;
                    var0 = _closure2_slot1;
                    var0 = var0.extra;
                    var0 = var2.bind(var3)(var0);
                case 86:
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.captureException;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.captureException = var6;
    var6 = function arg0, arg1() {
        _fun13157: for (var _fun13157_ip = 0;;) switch (_fun13157_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 4;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var4.bind(var3)(var2);
                var4 = var5.getUpdatedOptions;
                var2 = arg1;
                var4 = var4.bind(var5)(var2);
                var _closure2_slot2 = var4;
                var6 = {};
                var2 = null;
                var7 = var2 == var4;
                var5 = undefined;
                if (var7) {
                    _fun13157_ip = 71;
                    continue _fun13157
                }
            case 65:
                var5 = var4.tags;
            case 71:
                if (!(var2 != var5)) {
                    _fun13157_ip = 93;
                    continue _fun13157
                }
            case 75:
                var5 = var2 == var4;
                var2 = undefined;
                if (var5) {
                    _fun13157_ip = 90;
                    continue _fun13157
                }
            case 84:
                var2 = var4.tags;
            case 90:
                var6 = var2;
            case 93:
                var2 = global;
                var5 = var2.Object;
                var4 = var5.assign;
                var2 = {};
                var7 = 'true';
                var2.crash = var7;
                var2 = var4.bind(var5)(var2, var6);
                var _closure2_slot3 = var2;
                var2 = _closure1_slot2;
                var4 = _closure1_slot3;
                var1 = 3;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.withScope;
                var1 = function(arg0) { // Environment: var0
                    _fun13158: for (var _fun13158_ip = 0;;) switch (_fun13158_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot2;
                            var4 = null;
                            var0 = var4 != var0;
                            if (!var0) {
                                _fun13158_ip = 33;
                                continue _fun13158
                            }
                        case 19:
                            var1 = _closure2_slot2;
                            var1 = var1.extra;
                            var0 = var4 != var1;
                        case 33:
                            if (!var0) {
                                _fun13158_ip = 57;
                                continue _fun13158
                            }
                        case 36:
                            var1 = var3.setExtras;
                            var0 = _closure2_slot2;
                            var0 = var0.extra;
                            var0 = var1.bind(var3)(var0);
                        case 57:
                            var1 = var3.setTags;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var3)(var0);
                            var1 = var3.setLevel;
                            var0 = 'fatal';
                            var0 = var1.bind(var3)(var0);
                            var1 = var3.addEventProcessor;
                            var0 = function(arg0) { // Environment: var0
                                _fun13159: for (var _fun13159_ip = 0;;) switch (_fun13159_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.exception;
                                        var1 = null;
                                        var4 = var1 == var3;
                                        var2 = undefined;
                                        if (var4) {
                                            _fun13159_ip = 40;
                                            continue _fun13159
                                        }
                                    case 20:
                                        var4 = var3.values;
                                        var3 = var1 == var4;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun13159_ip = 40;
                                            continue _fun13159
                                        }
                                    case 34:
                                        var3 = 0;
                                        var2 = var4[var3];
                                    case 40:
                                        if (!(var1 != var2)) {
                                            _fun13159_ip = 76;
                                            continue _fun13159
                                        }
                                    case 44:
                                        var1 = {};
                                        var6 = var2.mechanism;
                                        var7 = var1;
                                        var3 = copyDataProperties(var7, var6);
                                        var4 = false;
                                        var3 = 'handled';
                                        var1[var3] = var4;
                                        var2.mechanism = var1;
                                    case 76:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var3)(var0);
                            var3 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var1);
                            var3 = var4.captureException;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1);
                            var _closure2_slot1 = var1;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = _closure2_slot1;
                return var0;
        }
    };
    var1.captureCrash = var6;
    var6 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var0 = 4;
        var3 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var3);
        var5 = var6.getUpdatedOptions;
        var3 = arg1;
        var3 = var5.bind(var6)(var3);
        var _closure2_slot1 = var3;
        var3 = _closure1_slot2;
        var2 = 3;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.withScope;
        var1 = function(arg0) { // Environment: var1
            _fun13161: for (var _fun13161_ip = 0;;) switch (_fun13161_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure2_slot1;
                    var4 = null;
                    var0 = var4 != var0;
                    if (!var0) {
                        _fun13161_ip = 33;
                        continue _fun13161
                    }
                case 19:
                    var2 = _closure2_slot1;
                    var2 = var2.extra;
                    var0 = var4 != var2;
                case 33:
                    if (!var0) {
                        _fun13161_ip = 57;
                        continue _fun13161
                    }
                case 36:
                    var2 = var3.setExtras;
                    var0 = _closure2_slot1;
                    var0 = var0.extra;
                    var0 = var2.bind(var3)(var0);
                case 57:
                    var0 = _closure2_slot1;
                    var0 = var4 != var0;
                    if (!var0) {
                        _fun13161_ip = 82;
                        continue _fun13161
                    }
                case 68:
                    var2 = _closure2_slot1;
                    var2 = var2.tags;
                    var0 = var4 != var2;
                case 82:
                    if (!var0) {
                        _fun13161_ip = 106;
                        continue _fun13161
                    }
                case 85:
                    var2 = var3.setTags;
                    var0 = _closure2_slot1;
                    var0 = var0.tags;
                    var0 = var2.bind(var3)(var0);
                case 106:
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.captureMessage;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.captureMessage = var6;
    var6 = function arg0() {
        var2 = arg0;
        var4 = _closure1_slot5;
        var3 = var4.verbose;
        var1 = 'Breadcrumb';
        var1 = var3.bind(var4)(var1, var2);
        var3 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.addBreadcrumb = var6;
    var6 = function arg0() {
        _fun13163: for (var _fun13163_ip = 0;;) switch (_fun13163_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot2;
                var3 = _closure1_slot3;
                var0 = 6;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.getConstants;
                var0 = var0.bind(var2)();
                var5 = var0.ReleaseChannel;
                var2 = 'canaryRelease';
                var0 = var4;
                if (!(var2 === var5)) {
                    _fun13163_ip = 99;
                    continue _fun13163
                }
            case 57:
                var2 = _closure1_slot2;
                var5 = _closure1_slot3;
                var1 = 3;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.withProfiler;
                var1 = {
                    'includeRender': true,
                    'includeUpdates': true
                };
                var0 = var2.bind(var3)(var4, var1);
            case 99:
                return var0;
        }
    };
    var1.profiledRootComponent = var6;
    var6 = function() {
        var0 = _closure1_slot4;
        var1 = var0.CrashReportingManager;
        var0 = var1.crash;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.crash = var6;
    var6 = function arg0() {
        _fun13165: for (var _fun13165_ip = 0;;) switch (_fun13165_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                var2 = var1.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun13165_ip = 91;
                    continue _fun13165
                }
            case 17: // try_start_0
                var2 = _closure1_slot4;
                var2 = var2.CrashReportingManager;
                var3 = var2.markCrashHandled;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun13165_ip = 63;
                    continue _fun13165
                }
            case 42:
                var1 = _closure1_slot4;
                var2 = var1.CrashReportingManager;
                var1 = var2.markCrashHandled;
                var0 = var1.bind(var2)(var0);
            case 63: // try_end0
                _fun13165_ip = 91;
                continue _fun13165;
            case 65: // catch_target0
                CatchBlockStart(arg_register = 3);
                var2 = _closure1_slot5;
                var1 = var2.warn;
                var0 = 'Failed to mark crash as handled';
                var0 = var1.bind(var2)(var0, var3);
            case 91:
                var0 = undefined;
                return var0;
        }
    };
    var1.markCrashHandled = var6;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun13167: for (var _fun13167_ip = 0;;) switch (_fun13167_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = _closure1_slot4;
                    var3 = var0.CrashReportingManager;
                    var2 = null;
                    var6 = var2 == var3;
                    var0 = undefined;
                    var5 = undefined;
                    if (var6) {
                        _fun13167_ip = 48;
                        continue _fun13167
                    }
                case 42:
                    var5 = var3.getLastCrashReport;
                case 48:
                    if (!(var2 == var5)) {
                        _fun13167_ip = 59;
                        continue _fun13167
                    }
                case 52:
                    var2 = var4.bind(var0)(var2);
                    _fun13167_ip = 75;
                    continue _fun13167;
                case 59:
                    var2 = var3.getLastCrashReport;
                    var1 = function(arg0) { // Environment: var1
                        _fun13168: for (var _fun13168_ip = 0;;) switch (_fun13168_ip) {
                            case 0:
                                var3 = arg0;
                            case 3: // try_start_0
                                var2 = _closure3_slot0;
                                var1 = var3;
                                var0 = null;
                                var4 = var0 == var1;
                                var1 = null;
                                if (var4) {
                                    _fun13168_ip = 570;
                                    continue _fun13168
                                }
                            case 27:
                                var4 = var3.timestamp;
                                var6 = undefined;
                                var7 = 'number';
                                var4 = typeof var4;
                                var5 = undefined;
                                if (!(var7 === var4)) {
                                    _fun13168_ip = 94;
                                    continue _fun13168
                                }
                            case 48:
                                var4 = global;
                                var8 = var4.Number;
                                var7 = var8.isNaN;
                                var4 = var3.timestamp;
                                var4 = var7.bind(var8)(var4);
                                var5 = undefined;
                                if (var4) {
                                    _fun13168_ip = 94;
                                    continue _fun13168
                                }
                            case 78:
                                var7 = var3.timestamp;
                                var4 = 1000;
                                var5 = var7 / var4;
                            case 94:
                                var7 = var3.level;
                                if (!(var0 == var7)) {
                                    _fun13168_ip = 124;
                                    continue _fun13168
                                }
                            case 104:
                                var8 = var3.is_native;
                                var4 = 'error';
                                if (!var8) {
                                    _fun13168_ip = 121;
                                    continue _fun13168
                                }
                            case 117:
                                var4 = 'fatal';
                            case 121:
                                var7 = var4;
                            case 124:
                                var0 = var0 == var7;
                                var4 = undefined;
                                if (var0) {
                                    _fun13168_ip = 143;
                                    continue _fun13168
                                }
                            case 133:
                                var0 = var7.toLowerCase;
                                var4 = var0.bind(var7)();
                            case 143:
                                var0 = {};
                                var0.type = var6;
                                var7 = var3.event_id;
                                var0.event_id = var7;
                                var0.timestamp = var5;
                                var0.level = var4;
                                var7 = _closure1_slot6;
                                var5 = var3.origin;
                                var7 = var7.bind(var6)(var5);
                                var5 = undefined;
                                if (!var7) {
                                    _fun13168_ip = 209;
                                    continue _fun13168
                                }
                            case 193:
                                var7 = {};
                                var8 = var3.origin;
                                var7['event.origin'] = var8;
                                var5 = var7;
                            case 209:
                                var0.tags = var5;
                                var7 = {};
                                var8 = _closure1_slot6;
                                var5 = var3.error_message;
                                var5 = var8.bind(var6)(var5);
                                if (!var5) {
                                    _fun13168_ip = 258;
                                    continue _fun13168
                                }
                            case 234:
                                var5 = var3.error_message;
                                var0.message = var5;
                                var5 = var3.error_message;
                                var7.persisted_error_message = var5;
                            case 258:
                                var8 = _closure1_slot6;
                                var5 = var3.error_stack;
                                var5 = var8.bind(var6)(var5);
                                if (!var5) {
                                    _fun13168_ip = 288;
                                    continue _fun13168
                                }
                            case 276:
                                var5 = var3.error_stack;
                                var7.persisted_error_stack = var5;
                            case 288:
                                var5 = var3.is_native;
                                if (!var5) {
                                    _fun13168_ip = 510;
                                    continue _fun13168
                                }
                            case 300:
                                var8 = _closure1_slot6;
                                var5 = var3.exit_reason;
                                var5 = var8.bind(var6)(var5);
                                if (!var5) {
                                    _fun13168_ip = 330;
                                    continue _fun13168
                                }
                            case 318:
                                var5 = var3.exit_reason;
                                var7.native_exit_reason = var5;
                            case 330:
                                var8 = _closure1_slot6;
                                var5 = var3.exit_description;
                                var5 = var8.bind(var6)(var5);
                                if (!var5) {
                                    _fun13168_ip = 360;
                                    continue _fun13168
                                }
                            case 348:
                                var5 = var3.exit_description;
                                var7.native_exit_description = var5;
                            case 360:
                                var8 = _closure1_slot6;
                                var5 = var3.tombstone;
                                var5 = var8.bind(var6)(var5);
                                if (!var5) {
                                    _fun13168_ip = 390;
                                    continue _fun13168
                                }
                            case 378:
                                var5 = var3.tombstone;
                                var7.native_tombstone = var5;
                            case 390:
                                var8 = _closure1_slot6;
                                var5 = var3.tombstone_cause;
                                var5 = var8.bind(var6)(var5);
                                if (!var5) {
                                    _fun13168_ip = 420;
                                    continue _fun13168
                                }
                            case 408:
                                var5 = var3.tombstone_cause;
                                var7.native_tombstone_cause = var5;
                            case 420:
                                var8 = _closure1_slot6;
                                var5 = var3.tombstone_hash;
                                var5 = var8.bind(var6)(var5);
                                if (!var5) {
                                    _fun13168_ip = 450;
                                    continue _fun13168
                                }
                            case 438:
                                var5 = var3.tombstone_hash;
                                var7.native_tombstone_hash = var5;
                            case 450:
                                var8 = _closure1_slot6;
                                var5 = var3.tombstone_group_by;
                                var5 = var8.bind(var6)(var5);
                                if (!var5) {
                                    _fun13168_ip = 480;
                                    continue _fun13168
                                }
                            case 468:
                                var5 = var3.tombstone_group_by;
                                var7.native_tombstone_group_by = var5;
                            case 480:
                                var5 = _closure1_slot6;
                                var4 = var3.tombstone_origin;
                                var4 = var5.bind(var6)(var4);
                                if (!var4) {
                                    _fun13168_ip = 510;
                                    continue _fun13168
                                }
                            case 498:
                                var4 = var3.tombstone_origin;
                                var7.native_tombstone_origin = var4;
                            case 510:
                                var4 = var3.is_native;
                                var3 = 'false';
                                if (!var4) {
                                    _fun13168_ip = 527;
                                    continue _fun13168
                                }
                            case 523:
                                var3 = 'true';
                            case 527:
                                var7.native_is_native = var3;
                                var3 = global;
                                var6 = var3.Object;
                                var5 = var6.assign;
                                var4 = var0.extra;
                                var3 = {};
                                var3 = var5.bind(var6)(var3, var4, var7);
                                var0.extra = var3;
                                var1 = var0;
                            case 570:
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 577: // try_end0
                                _fun13168_ip = 595;
                                continue _fun13168;
                            case 579: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 595:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 75:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.getLastCrashReport = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/SentryUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3, 1208, 810, 12649, 809, 1594, 2]);