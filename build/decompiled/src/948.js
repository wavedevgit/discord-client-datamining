// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var8 = var4.bind(var0)(var3);
    var3 = global;
    var9 = var3.Object;
    var7 = var9.defineProperty;
    var3 = var3.Symbol;
    var6 = var3.toStringTag;
    var3 = {};
    var10 = 'Module';
    var3.value = var10;
    var3 = var7.bind(var9)(var2, var6, var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
    var6 = {};
    var3 = 'auto.log.console';
    var3 = var8.bind(var0)(var6, var7, var3);
    var _closure1_slot2 = var3;
    var3 = 8;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        _fun9820: for (var _fun9820_ip = 0;;) switch (_fun9820_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun9820_ip = 23;
                    continue _fun9820
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun9820_ip = 27;
                    continue _fun9820
                }
            case 23:
                var0 = {};
                _fun9820_ip = 31;
                continue _fun9820;
            case 27:
                var0 = arguments[var2];
            case 31:
                var0 = var0.levels;
                if (var0) {
                    _fun9820_ip = 69;
                    continue _fun9820
                }
            case 40:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var0 = var2.CONSOLE_LEVELS;
            case 69:
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'ConsoleLogs';
                var0.name = var2;
                var1 = function arg0() {
                    _fun9821: for (var _fun9821_ip = 0;;) switch (_fun9821_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var0 = var2.getOptions;
                            var2 = var0.bind(var2)();
                            var6 = var2.enableLogs;
                            var4 = var2.normalizeDepth;
                            var5 = 3;
                            var0 = undefined;
                            var3 = var5;
                            if (!(var0 !== var4)) {
                                _fun9821_ip = 46;
                                continue _fun9821
                            }
                        case 43:
                            var3 = var4;
                        case 46:
                            var _closure3_slot1 = var3;
                            var3 = var2.normalizeMaxBreadth;
                            var2 = 1000;
                            if (!(var0 !== var3)) {
                                _fun9821_ip = 69;
                                continue _fun9821
                            }
                        case 66:
                            var2 = var3;
                        case 69:
                            var _closure3_slot2 = var2;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            if (var6) {
                                _fun9821_ip = 149;
                                continue _fun9821
                            }
                        case 87:
                            var5 = var4[var5];
                            var5 = var3.bind(var0)(var5);
                            var5 = var5.DEBUG_BUILD;
                            if (!var5) {
                                _fun9821_ip = 177;
                                continue _fun9821
                            }
                        case 105:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 2;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var6 = var2.debug;
                            var5 = var6.warn;
                            var2 = '`enableLogs` is not enabled, ConsoleLogs integration disabled';
                            var2 = var5.bind(var6)(var2);
                            _fun9821_ip = 177;
                            continue _fun9821;
                        case 149:
                            var2 = 4;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.addConsoleInstrumentationHandler;
                            var1 = function(arg0) { // Environment: var1
                                _fun9822: for (var _fun9822_ip = 0;;) switch (_fun9822_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var10 = var0.args;
                                        var9 = var0.level;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 5;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.getClient;
                                        var2 = var1.bind(var2)();
                                        var1 = _closure3_slot0;
                                        if (!(var2 === var1)) {
                                            _fun9822_ip = 518;
                                            continue _fun9822
                                        }
                                    case 64:
                                        var2 = _closure2_slot0;
                                        var1 = var2.includes;
                                        var1 = var1.bind(var2)(var9);
                                        if (!var1) {
                                            _fun9822_ip = 518;
                                            continue _fun9822
                                        }
                                    case 87:
                                        var2 = 0;
                                        var13 = var10[var2];
                                        var1 = var10.slice;
                                        var3 = 1;
                                        var12 = var1.bind(var10)(var3);
                                        var1 = 'assert';
                                        if (!(var1 === var9)) {
                                            _fun9822_ip = 266;
                                            continue _fun9822
                                        }
                                    case 117:
                                        if (var13) {
                                            _fun9822_ip = 518;
                                            continue _fun9822
                                        }
                                    case 123:
                                        var1 = var12.length;
                                        var1 = var1 > var2;
                                        var8 = 'Assertion failed';
                                        if (!var1) {
                                            _fun9822_ip = 206;
                                            continue _fun9822
                                        }
                                    case 141:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var1 = 6;
                                        var1 = var6[var1];
                                        var11 = var4.bind(var0)(var1);
                                        var6 = var11.formatConsoleArgs;
                                        var4 = _closure3_slot1;
                                        var1 = _closure3_slot2;
                                        var6 = var6.bind(var11)(var12, var4, var1);
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var4 = var1.concat;
                                        var1 = 'Assertion failed: ';
                                        var8 = var4.bind(var1)(var6);
                                    case 206:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var1 = 7;
                                        var1 = var6[var1];
                                        var6 = var4.bind(var0)(var1);
                                        var4 = var6._INTERNAL_captureLog;
                                        var1 = {};
                                        var11 = 'error';
                                        var1.level = var11;
                                        var1.message = var8;
                                        var8 = _closure1_slot2;
                                        var1.attributes = var8;
                                        var1 = var4.bind(var6)(var1);
                                        _fun9822_ip = 518;
                                        continue _fun9822;
                                    case 266:
                                        var1 = 'log';
                                        var6 = var1 === var9;
                                        var1 = var10.length;
                                        var1 = var1 > var3;
                                        if (!var1) {
                                            _fun9822_ip = 301;
                                            continue _fun9822
                                        }
                                    case 286:
                                        var3 = var10[var2];
                                        var4 = 'string';
                                        var3 = typeof var3;
                                        var1 = var4 === var3;
                                    case 301:
                                        if (!var1) {
                                            _fun9822_ip = 342;
                                            continue _fun9822
                                        }
                                    case 304:
                                        var4 = _closure1_slot0;
                                        var8 = _closure1_slot1;
                                        var3 = 6;
                                        var3 = var8[var3];
                                        var4 = var4.bind(var0)(var3);
                                        var3 = var4.hasConsoleSubstitutions;
                                        var2 = var10[var2];
                                        var2 = var3.bind(var4)(var2);
                                        var1 = !var2;
                                    case 342:
                                        var2 = global;
                                        var8 = var2.Object;
                                        var4 = var8.assign;
                                        var3 = _closure1_slot2;
                                        if (var1) {
                                            _fun9822_ip = 366;
                                            continue _fun9822
                                        }
                                    case 362:
                                        var2 = {};
                                        _fun9822_ip = 398;
                                        continue _fun9822;
                                    case 366:
                                        var11 = _closure1_slot0;
                                        var14 = _closure1_slot1;
                                        var1 = 6;
                                        var1 = var14[var1];
                                        var11 = var11.bind(var0)(var1);
                                        var1 = var11.createConsoleTemplateAttributes;
                                        var2 = var1.bind(var11)(var13, var12);
                                    case 398:
                                        var1 = {};
                                        var4 = var4.bind(var8)(var1, var3, var2);
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 7;
                                        var1 = var3[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3._INTERNAL_captureLog;
                                        var1 = {};
                                        var8 = 'info';
                                        if (var6) {
                                            _fun9822_ip = 445;
                                            continue _fun9822
                                        }
                                    case 442:
                                        var8 = var9;
                                    case 445:
                                        var1.level = var8;
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var7 = 6;
                                        var7 = var9[var7];
                                        var9 = var8.bind(var0)(var7);
                                        var8 = var9.formatConsoleArgs;
                                        var7 = _closure3_slot1;
                                        var5 = _closure3_slot2;
                                        var5 = var8.bind(var9)(var10, var7, var5);
                                        var1.message = var5;
                                        var5 = undefined;
                                        if (!var6) {
                                            _fun9822_ip = 503;
                                            continue _fun9822
                                        }
                                    case 500:
                                        var5 = 10;
                                    case 503:
                                        var1.severityNumber = var5;
                                        var1.attributes = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 518:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                        case 177:
                            return var0;
                    }
                };
                var0.setup = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.consoleLoggingIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 838, 824, 823, 916, 847, 949, 875, 881]);