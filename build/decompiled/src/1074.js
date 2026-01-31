// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var3 = function(arg0) { // Original name: _getUnhandledRejectionError, environment: var1
        _fun10995: for (var _fun10995_ip = 0;;) switch (_fun10995_ip) {
            case 0:
                var3 = arg0;
                var0 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.isPrimitive;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun10995_ip = 122;
                    continue _fun10995
                }
            case 44: // try_start_0
                var1 = var0;
                var3 = 'reason';
                var2 = var3 in var1;
                var1 = var0;
                if (var2) {
                    _fun10995_ip = 107;
                    continue _fun10995
                }
            case 61:
                var2 = 'detail';
                var2 = var2 in var1;
                if (!var2) {
                    _fun10995_ip = 88;
                    continue _fun10995
                }
            case 72:
                var2 = var0;
                var2 = var2.detail;
                var2 = var3 in var2;
                if (var2) {
                    _fun10995_ip = 90;
                    continue _fun10995
                }
            case 88: // try_end0
                _fun10995_ip = 117;
                continue _fun10995;
            case 90: // try_start_1
                var2 = var0;
                var2 = var2.detail;
                var2 = var2.reason;
            case 105: // try_end1
                return var2;
            case 107: // try_start_2
                var1 = var1.reason;
            case 113: // try_end2
                return var1;
            case 115: // catch_target0 // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 1);
            case 117:
                var1 = var0;
                return var1;
            case 122:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var4 = function(arg0) { // Original name: _eventFromRejectionWithPrimitive, environment: var1
        var0 = {};
        var1 = {};
        var3 = {};
        var2 = 'UnhandledRejection';
        var3.type = var2;
        var2 = global;
        var6 = var2.String;
        var5 = undefined;
        var4 = arg0;
        var5 = var6.bind(var5)(var4);
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var2 = 'Non-Error promise rejection captured with value: ';
        var2 = var4.bind(var2)(var5);
        var3.value = var2;
        var2 = new Array(1);
        var2[0] = var3;
        var1.values = var2;
        var0.exception = var1;
        return var0;
    };
    var _closure1_slot3 = var4;
    var0 = function(arg0) { // Original name: globalHandlerLog, environment: var1
        _fun10997: for (var _fun10997_ip = 0;;) switch (_fun10997_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun10997_ip = 96;
                    continue _fun10997
                }
            case 34:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.debug;
                var2 = var3.log;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'Global Handler attached: ';
                var1 = arg0;
                var1 = var5.bind(var4)(var1);
                var1 = var2.bind(var3)(var1);
            case 96:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function() { // Original name: getOptions, environment: var1
        _fun10998: for (var _fun10998_ip = 0;;) switch (_fun10998_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getClient;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 == var2;
                if (var1) {
                    _fun10998_ip = 53;
                    continue _fun10998
                }
            case 43:
                var1 = var2.getOptions;
                var0 = var1.bind(var2)();
            case 53:
                if (var0) {
                    _fun10998_ip = 80;
                    continue _fun10998
                }
            case 56:
                var1 = {};
                var2 = function() { // Original name: stackParser, environment: var2
                    var0 = new Array(0);
                    return var0;
                };
                var1.stackParser = var2;
                var2 = false;
                var1.attachStacktrace = var2;
                var0 = var1;
            case 80:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var0 = var0.Symbol;
    var7 = var0.toStringTag;
    var0 = {};
    var10 = 'Module';
    var0.value = var10;
    var0 = var8.bind(var9)(var2, var7, var0);
    var0 = 0;
    var5 = var5[var0];
    var0 = undefined;
    var6 = var6.bind(var0)(var5);
    var5 = var6.defineIntegration;
    var1 = function() { // Original name: _globalHandlersIntegration, environment: var1
        _fun11000: for (var _fun11000_ip = 0;;) switch (_fun11000_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun11000_ip = 23;
                    continue _fun11000
                }
            case 15:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun11000_ip = 27;
                    continue _fun11000
                }
            case 23:
                var4 = {};
                _fun11000_ip = 31;
                continue _fun11000;
            case 27:
                var4 = arguments[var0];
            case 31:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var0 = {
                    'onerror': true,
                    'onunhandledrejection': true
                };
                var0 = var2.bind(var3)(var0, var4);
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'GlobalHandlers';
                var0.name = var2;
                var2 = function() { // Original name: setupOnce, environment: var1
                    var0 = global;
                    var1 = var0.Error;
                    var0 = 50;
                    var1.stackTraceLimit = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.setupOnce = var2;
                var1 = function(arg0) { // Original name: setup, environment: var1
                    _fun11002: for (var _fun11002_ip = 0;;) switch (_fun11002_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot0;
                            var3 = var3.onerror;
                            if (!var3) {
                                _fun11002_ip = 49;
                                continue _fun11002
                            }
                        case 21:
                            var3 = function(arg0) { // Original name: _installGlobalOnErrorHandler, environment: var0
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 0;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.addGlobalErrorInstrumentationHandler;
                                var1 = function(arg0) { // Environment: var1
                                    _fun11004: for (var _fun11004_ip = 0;;) switch (_fun11004_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var2 = _closure1_slot5;
                                            var0 = undefined;
                                            var2 = var2.bind(var0)();
                                            var12 = var2.stackParser;
                                            var11 = var2.attachStacktrace;
                                            var5 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var3 = 0;
                                            var2 = var2[var3];
                                            var5 = var5.bind(var0)(var2);
                                            var2 = var5.getClient;
                                            var5 = var2.bind(var5)();
                                            var2 = _closure4_slot0;
                                            if (!(var5 === var2)) {
                                                _fun11004_ip = 276;
                                                continue _fun11004
                                            }
                                        case 71:
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var2 = 1;
                                            var2 = var6[var2];
                                            var5 = var5.bind(var0)(var2);
                                            var2 = var5.shouldIgnoreOnError;
                                            var2 = var2.bind(var5)();
                                            if (var2) {
                                                _fun11004_ip = 276;
                                                continue _fun11004
                                            }
                                        case 107:
                                            var2 = var4.msg;
                                            var8 = var4.url;
                                            var7 = var4.line;
                                            var6 = var4.column;
                                            var5 = var4.error;
                                            var9 = _closure1_slot0;
                                            var10 = _closure1_slot1;
                                            var4 = 2;
                                            var4 = var10[var4];
                                            var10 = var9.bind(var0)(var4);
                                            var9 = var10.eventFromUnknownInput;
                                            var4 = var5;
                                            if (var4) {
                                                _fun11004_ip = 170;
                                                continue _fun11004
                                            }
                                        case 167:
                                            var4 = var2;
                                        case 170:
                                            var14 = false;
                                            var19 = var10;
                                            var18 = var12;
                                            var17 = var4;
                                            var16 = undefined;
                                            var15 = var11;
                                            var4 = var19[var9](var18, var17, var16, var15, var14, var13);
                                            var2 = function(arg0, arg1, arg2, arg3) { // Original name: _enhanceEventWithInitialFrame, environment: var2
                                                _fun11005: for (var _fun11005_ip = 0;;) switch (_fun11005_ip) {
                                                    case 0:
                                                        var0 = arg0;
                                                        var8 = arg1;
                                                        var2 = var0.exception;
                                                        if (var2) {
                                                            _fun11005_ip = 17;
                                                            continue _fun11005
                                                        }
                                                    case 15:
                                                        var2 = {};
                                                    case 17:
                                                        var0.exception = var2;
                                                        var1 = var2.values;
                                                        if (var1) {
                                                            _fun11005_ip = 35;
                                                            continue _fun11005
                                                        }
                                                    case 31:
                                                        var1 = new Array(0);
                                                    case 35:
                                                        var2.values = var1;
                                                        var7 = 0;
                                                        var2 = var1[var7];
                                                        if (var2) {
                                                            _fun11005_ip = 52;
                                                            continue _fun11005
                                                        }
                                                    case 50:
                                                        var2 = {};
                                                    case 52:
                                                        var1[var7] = var2;
                                                        var1 = var2.stacktrace;
                                                        if (var1) {
                                                            _fun11005_ip = 67;
                                                            continue _fun11005
                                                        }
                                                    case 65:
                                                        var1 = {};
                                                    case 67:
                                                        var2.stacktrace = var1;
                                                        var3 = var1.frames;
                                                        if (var3) {
                                                            _fun11005_ip = 86;
                                                            continue _fun11005
                                                        }
                                                    case 82:
                                                        var3 = new Array(0);
                                                    case 86:
                                                        var1.frames = var3;
                                                        var2 = _closure1_slot0;
                                                        var1 = _closure1_slot1;
                                                        var1 = var1[var7];
                                                        var6 = undefined;
                                                        var2 = var2.bind(var6)(var1);
                                                        var1 = var2.isString;
                                                        var1 = var1.bind(var2)(var8);
                                                        var5 = undefined;
                                                        if (!var1) {
                                                            _fun11005_ip = 270;
                                                            continue _fun11005
                                                        }
                                                    case 133:
                                                        var1 = var8.length;
                                                        var5 = undefined;
                                                        if (!(var7 !== var1)) {
                                                            _fun11005_ip = 270;
                                                            continue _fun11005
                                                        }
                                                    case 147:
                                                        var2 = var8.startsWith;
                                                        var1 = 'data:';
                                                        var1 = var2.bind(var8)(var1);
                                                        var5 = var8;
                                                        if (!var1) {
                                                            _fun11005_ip = 270;
                                                            continue _fun11005
                                                        }
                                                    case 170:
                                                        var2 = var8.match;
                                                        var1 = /^data:([^;]+)/;
                                                        var2 = var2.bind(var8)(var1);
                                                        var10 = 'text/javascript';
                                                        if (!var2) {
                                                            _fun11005_ip = 211;
                                                            continue _fun11005
                                                        }
                                                    case 204:
                                                        var1 = 1;
                                                        var10 = var2[var1];
                                                    case 211:
                                                        var2 = var8.includes;
                                                        var1 = 'base64,';
                                                        var1 = var2.bind(var8)(var1);
                                                        var9 = '';
                                                        if (!var1) {
                                                            _fun11005_ip = 240;
                                                            continue _fun11005
                                                        }
                                                    case 234:
                                                        var9 = ',base64';
                                                    case 240:
                                                        var1 = global;
                                                        var1 = var1.HermesInternal;
                                                        var8 = var1.concat;
                                                        var2 = '<data:';
                                                        var1 = '>';
                                                        var5 = var8.bind(var2)(var10, var9, var1);
                                                    case 270:
                                                        var1 = null;
                                                        if (!(var1 == var5)) {
                                                            _fun11005_ip = 303;
                                                            continue _fun11005
                                                        }
                                                    case 276:
                                                        var2 = _closure1_slot0;
                                                        var1 = _closure1_slot1;
                                                        var1 = var1[var7];
                                                        var2 = var2.bind(var6)(var1);
                                                        var1 = var2.getLocationHref;
                                                        var5 = var1.bind(var2)();
                                                    case 303:
                                                        var1 = var3.length;
                                                        if (!(var7 === var1)) {
                                                            _fun11005_ip = 380;
                                                            continue _fun11005
                                                        }
                                                    case 312:
                                                        var2 = var3.push;
                                                        var1 = {};
                                                        var8 = arg3;
                                                        var1.colno = var8;
                                                        var1.filename = var5;
                                                        var5 = _closure1_slot0;
                                                        var4 = _closure1_slot1;
                                                        var4 = var4[var7];
                                                        var4 = var5.bind(var6)(var4);
                                                        var4 = var4.UNKNOWN_FUNCTION;
                                                        var1.function = var4;
                                                        var4 = true;
                                                        var1.in_app = var4;
                                                        var4 = arg2;
                                                        var1.lineno = var4;
                                                        var1 = var2.bind(var3)(var1);
                                                    case 380:
                                                        return var0;
                                                }
                                            };
                                            var19 = undefined;
                                            var18 = var4;
                                            var17 = var8;
                                            var16 = var7;
                                            var15 = var6;
                                            var2 = var19[var2](var18, var17, var16, var15, var14);
                                            var2 = 'error';
                                            var4.level = var2;
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var1 = var1[var3];
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.captureEvent;
                                            var1 = {};
                                            var1.originalException = var5;
                                            var5 = {
                                                'handled': false,
                                                'type': 'auto.browser.global_handlers.onerror'
                                            };
                                            var1.mechanism = var5;
                                            var1 = var2.bind(var3)(var4, var1);
                                        case 276:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var5 = undefined;
                            var3 = var3.bind(var5)(var1);
                            var4 = _closure1_slot4;
                            var3 = 'onerror';
                            var3 = var4.bind(var5)(var3);
                        case 49:
                            var2 = _closure2_slot0;
                            var2 = var2.onunhandledrejection;
                            if (!var2) {
                                _fun11002_ip = 90;
                                continue _fun11002
                            }
                        case 62:
                            var0 = function(arg0) { // Original name: _installGlobalOnUnhandledRejectionHandler, environment: var0
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 0;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.addGlobalUnhandledRejectionInstrumentationHandler;
                                var1 = function(arg0) { // Environment: var1
                                    _fun11007: for (var _fun11007_ip = 0;;) switch (_fun11007_ip) {
                                        case 0:
                                            var2 = _closure1_slot5;
                                            var0 = undefined;
                                            var2 = var2.bind(var0)();
                                            var8 = var2.stackParser;
                                            var7 = var2.attachStacktrace;
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var3 = 0;
                                            var2 = var2[var3];
                                            var4 = var4.bind(var0)(var2);
                                            var2 = var4.getClient;
                                            var4 = var2.bind(var4)();
                                            var2 = _closure4_slot0;
                                            if (!(var4 === var2)) {
                                                _fun11007_ip = 265;
                                                continue _fun11007
                                            }
                                        case 68:
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var2 = 1;
                                            var2 = var5[var2];
                                            var4 = var4.bind(var0)(var2);
                                            var2 = var4.shouldIgnoreOnError;
                                            var2 = var2.bind(var4)();
                                            if (var2) {
                                                _fun11007_ip = 265;
                                                continue _fun11007
                                            }
                                        case 104:
                                            var4 = _closure1_slot2;
                                            var2 = arg0;
                                            var5 = var4.bind(var0)(var2);
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var2 = var2[var3];
                                            var4 = var4.bind(var0)(var2);
                                            var2 = var4.isPrimitive;
                                            var2 = var2.bind(var4)(var5);
                                            if (var2) {
                                                _fun11007_ip = 195;
                                                continue _fun11007
                                            }
                                        case 147:
                                            var4 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var2 = 2;
                                            var2 = var6[var2];
                                            var6 = var4.bind(var0)(var2);
                                            var4 = var6.eventFromUnknownInput;
                                            var9 = true;
                                            var14 = var6;
                                            var13 = var8;
                                            var12 = var5;
                                            var11 = undefined;
                                            var10 = var7;
                                            var4 = var14[var4](var13, var12, var11, var10, var9, var8);
                                            _fun11007_ip = 204;
                                            continue _fun11007;
                                        case 195:
                                            var2 = _closure1_slot3;
                                            var4 = var2.bind(var0)(var5);
                                        case 204:
                                            var2 = 'error';
                                            var4.level = var2;
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var1 = var1[var3];
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.captureEvent;
                                            var1 = {};
                                            var1.originalException = var5;
                                            var5 = {
                                                'handled': false,
                                                'type': 'auto.browser.global_handlers.onunhandledrejection'
                                            };
                                            var1.mechanism = var5;
                                            var1 = var2.bind(var3)(var4, var1);
                                        case 265:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2 = undefined;
                            var0 = var0.bind(var2)(var1);
                            var1 = _closure1_slot4;
                            var0 = 'onunhandledrejection';
                            var0 = var1.bind(var2)(var0);
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.setup = var1;
                return var0;
        }
    };
    var1 = var5.bind(var6)(var1);
    var2._eventFromRejectionWithPrimitive = var4;
    var2._getUnhandledRejectionError = var3;
    var2.globalHandlersIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1025, 1028, 1073]);