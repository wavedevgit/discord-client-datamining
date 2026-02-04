// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function arg0() {
        _fun12889: for (var _fun12889_ip = 0;;) switch (_fun12889_ip) {
            case 0:
                var0 = arg0;
                var5 = undefined;
                var4 = undefined;
                var _closure2_slot0 = var0;
                var2 = arguments.length;
                var3 = 1;
                if (!(var2 > var3)) {
                    _fun12889_ip = 31;
                    continue _fun12889
                }
            case 23:
                var2 = arguments[var3];
                if (!(var5 === var2)) {
                    _fun12889_ip = 35;
                    continue _fun12889
                }
            case 31:
                var2 = {};
                _fun12889_ip = 39;
                continue _fun12889;
            case 35:
                var2 = arguments[var3];
            case 39:
                var _closure2_slot1 = var2;
                var3 = 'function';
                var2 = typeof var0;
                if (!(var3 === var2)) {
                    _fun12889_ip = 59;
                    continue _fun12889
                }
            case 54:
                var0 = function() { // Environment: var1
                    _fun12890: for (var _fun12890_ip = 0;;) switch (_fun12890_ip) {
                        case 0:
                            var0 = undefined;
                            var2 = undefined;
                        case 4: // try_start_0
                            var5 = _closure2_slot0;
                            var4 = var5.apply;
                            var2 = arguments;
                            var1 = var2;
                            var1 = var4.bind(var5)(var0, var1);
                        case 27: // try_end0
                            return var1;
                        case 29: // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 0;
                            var4 = var4[var1];
                            var4 = var5.bind(var0)(var4);
                            var6 = var4.debug;
                            var5 = var6.error;
                            var4 = _closure2_slot1;
                            var4 = var4.loggerMessage;
                            if (var4) {
                                _fun12890_ip = 122;
                                continue _fun12890
                            }
                        case 80:
                            var4 = _closure2_slot0;
                            var10 = var4.name;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var9 = var4.concat;
                            var8 = 'The ';
                            var4 = ' callback threw an error';
                            var4 = var9.bind(var8)(var10, var4);
                            _fun12890_ip = 132;
                            continue _fun12890;
                        case 122:
                            var7 = _closure2_slot1;
                            var4 = var7.loggerMessage;
                        case 132:
                            var3 = var5.bind(var6)(var4, var3);
                            var3 = arguments.length;
                            var3 = var3 <= var1;
                            var0 = undefined;
                            if (var3) {
                                _fun12890_ip = 154;
                                continue _fun12890
                            }
                        case 150:
                            var0 = arguments[var1];
                        case 154:
                            return var0;
                    }
                };
            case 59:
                return var0;
        }
    };
    var1.safeFactory = var2;
    var0 = function arg0() {
        _fun12891: for (var _fun12891_ip = 0;;) switch (_fun12891_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                if (!var0) {
                    _fun12891_ip = 17;
                    continue _fun12891
                }
            case 12:
                var0 = function() { // Environment: var1
                    _fun12892: for (var _fun12892_ip = 0;;) switch (_fun12892_ip) {
                        case 0:
                            var3 = undefined;
                            var0 = undefined;
                        case 4: // try_start_0
                            var2 = _closure2_slot0;
                            var1 = var2.apply;
                            var0 = arguments;
                            var0 = var1.bind(var2)(var3, var0);
                        case 24: // try_end0
                            return var0;
                        case 26: // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 0;
                            var1 = var1[var0];
                            var1 = var2.bind(var3)(var1);
                            var3 = var1.debug;
                            var2 = var3.error;
                            var1 = 'The tracesSampler callback threw an error';
                            var1 = var2.bind(var3)(var1, var4);
                            return var0;
                    }
                };
            case 17:
                return var0;
        }
    };
    var1.safeTracesSampler = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);