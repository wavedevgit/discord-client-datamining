// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() {
        _fun58827: for (var _fun58827_ip = 0;;) switch (_fun58827_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.GLOBAL_OBJ;
                var0 = 'fetch';
                var0 = var0 in var1;
                if (var0) {
                    _fun58827_ip = 45;
                    continue _fun58827
                }
            case 41:
                var0 = false;
                return var0;
            case 45: // try_start_0
                var0 = global;
                var2 = var0.Headers;
                var1 = var2.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var1 = new var5[var2](var4);
                var3 = var0.Request;
                var1 = var3.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'http://www.example.com';
                var1 = new var5[var3](var4, var3);
                var1 = var0.Response;
                var0 = var1.prototype;
                var5 = Object.create(var0, {
                    constructor: {
                        value: var1
                    }
                });
                var0 = new var5[var1](var4);
            case 110: // try_end0
                var0 = true;
                return var0;
            case 114: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var3 = function arg0() {
        _fun58828: for (var _fun58828_ip = 0;;) switch (_fun58828_ip) {
            case 0:
                var4 = arg0;
                var0 = var4;
                if (!var0) {
                    _fun58828_ip = 42;
                    continue _fun58828
                }
            case 9:
                var3 = /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/;
                var2 = var3.test;
                var1 = var4.toString;
                var1 = var1.bind(var4)();
                var0 = var2.bind(var3)(var1);
            case 42:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var1, var4, var5);
    var1.isNativeFunction = var3;
    var3 = function() {
        _fun58829: for (var _fun58829_ip = 0;;) switch (_fun58829_ip) {
            case 0: // try_start_0
                var0 = global;
                var2 = var0.DOMError;
                var0 = var2.prototype;
                var4 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = '';
                var0 = new var4[var2](var3, var2);
            case 25: // try_end0
                var0 = true;
                return var0;
            case 29: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var1.supportsDOMError = var3;
    var3 = function() {
        _fun58830: for (var _fun58830_ip = 0;;) switch (_fun58830_ip) {
            case 0: // try_start_0
                var0 = global;
                var2 = var0.DOMException;
                var0 = var2.prototype;
                var4 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = '';
                var0 = new var4[var2](var3, var2);
            case 25: // try_end0
                var0 = true;
                return var0;
            case 29: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var1.supportsDOMException = var3;
    var3 = function() {
        _fun58831: for (var _fun58831_ip = 0;;) switch (_fun58831_ip) {
            case 0: // try_start_0
                var0 = global;
                var2 = var0.ErrorEvent;
                var0 = var2.prototype;
                var4 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = '';
                var0 = new var4[var2](var3, var2);
            case 25: // try_end0
                var0 = true;
                return var0;
            case 29: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var1.supportsErrorEvent = var3;
    var1.supportsFetch = var2;
    var2 = function() {
        _fun58832: for (var _fun58832_ip = 0;;) switch (_fun58832_ip) {
            case 0:
                var4 = undefined;
                var0 = undefined;
                var5 = undefined;
                var3 = undefined;
                var2 = global;
                var2 = var2.EdgeRuntime;
                var6 = 'string';
                var2 = typeof var2;
                if (!(var6 !== var2)) {
                    _fun58832_ip = 359;
                    continue _fun58832
                }
            case 30:
                var6 = _closure1_slot2;
                var6 = var6.bind(var4)();
                if (var6) {
                    _fun58832_ip = 48;
                    continue _fun58832
                }
            case 44:
                var6 = false;
                return var6;
            case 48:
                var7 = _closure1_slot3;
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var8 = 0;
                var6 = var6[var8];
                var6 = var9.bind(var4)(var6);
                var6 = var6.GLOBAL_OBJ;
                var6 = var6.fetch;
                var6 = var7.bind(var4)(var6);
                if (var6) {
                    _fun58832_ip = 355;
                    continue _fun58832
                }
            case 94:
                var0 = false;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var6 = var7.bind(var4)(var6);
                var6 = var6.GLOBAL_OBJ;
                var6 = var6.document;
                var5 = var6;
                if (!var6) {
                    _fun58832_ip = 353;
                    continue _fun58832
                }
            case 134:
                var6 = var5;
                var6 = var6.createElement;
                var7 = 'function';
                var6 = typeof var6;
                if (!(var7 === var6)) {
                    _fun58832_ip = 353;
                    continue _fun58832
                }
            case 157: // try_start_0
                var6 = var5;
                var8 = var6.createElement;
                var7 = 'iframe';
                var7 = var8.bind(var6)(var7);
                var3 = var7;
                var8 = true;
                var7.hidden = var8;
                var8 = var6.head;
                var6 = var8.appendChild;
                var6 = var6.bind(var8)(var7);
                var7 = var7.contentWindow;
                var6 = var7;
                if (!var7) {
                    _fun58832_ip = 230;
                    continue _fun58832
                }
            case 215:
                var7 = var3;
                var7 = var7.contentWindow;
                var6 = var7.fetch;
            case 230:
                if (!var6) {
                    _fun58832_ip = 257;
                    continue _fun58832
                }
            case 233:
                var7 = _closure1_slot3;
                var6 = var3;
                var6 = var6.contentWindow;
                var6 = var6.fetch;
                var0 = var7.bind(var4)(var6);
            case 257:
                var6 = var5.head;
                var5 = var6.removeChild;
                var3 = var5.bind(var6)(var3);
            case 274: // try_end0
                _fun58832_ip = 353;
                continue _fun58832;
            case 276: // catch_target0
                CatchBlockStart(arg_register = 1);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun58832_ip = 353;
                    continue _fun58832
                }
            case 307:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.logger;
                var3 = var4.warn;
                var2 = var1;
                var1 = 'Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ';
                var1 = var3.bind(var4)(var1, var2);
            case 353:
                return var0;
            case 355:
                var0 = true;
                return var0;
            case 359:
                var0 = true;
                return var0;
        }
    };
    var1.supportsNativeFetch = var2;
    var2 = function() {
        _fun58833: for (var _fun58833_ip = 0;;) switch (_fun58833_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = undefined;
                var0 = var1.bind(var0)();
                if (var0) {
                    _fun58833_ip = 20;
                    continue _fun58833
                }
            case 16:
                var0 = false;
                return var0;
            case 20: // try_start_0
                var0 = global;
                var3 = var0.Request;
                var2 = {};
                var0 = 'origin';
                var2.referrerPolicy = var0;
                var0 = var3.prototype;
                var6 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = '_';
                var4 = var2;
                var0 = new var6[var3](var5, var4, var3);
            case 59: // try_end0
                var0 = true;
                return var0;
            case 63: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var1.supportsReferrerPolicy = var2;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.GLOBAL_OBJ;
        var0 = 'ReportingObserver';
        var0 = var0 in var1;
        return var0;
    };
    var1.supportsReportingObserver = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7170, 7174, 7173]);