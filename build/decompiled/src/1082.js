// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: applySourceContextToFrame, environment: var1
        _fun11056: for (var _fun11056_ip = 0;;) switch (_fun11056_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var2 = var0.filename;
                var1 = arg2;
                if (!(var2 === var1)) {
                    _fun11056_ip = 77;
                    continue _fun11056
                }
            case 19:
                var1 = var0.lineno;
                if (!var1) {
                    _fun11056_ip = 77;
                    continue _fun11056
                }
            case 28:
                var1 = var4.length;
                if (!var1) {
                    _fun11056_ip = 77;
                    continue _fun11056
                }
            case 36:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.addContextToFrame;
                var1 = arg3;
                var1 = var2.bind(var3)(var4, var0, var1);
            case 77:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var4 = var4.Symbol;
    var7 = var4.toStringTag;
    var4 = {};
    var10 = 'Module';
    var4.value = var10;
    var4 = var8.bind(var9)(var2, var7, var4);
    var4 = 1;
    var4 = var6[var4];
    var5 = var5.bind(var0)(var4);
    var4 = var5.defineIntegration;
    var1 = function() { // Original name: _contextLinesIntegration, environment: var1
        _fun11057: for (var _fun11057_ip = 0;;) switch (_fun11057_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var0 = 0;
                if (!(var2 > var0)) {
                    _fun11057_ip = 23;
                    continue _fun11057
                }
            case 15:
                var2 = arguments[var0];
                if (!(var4 === var2)) {
                    _fun11057_ip = 27;
                    continue _fun11057
                }
            case 23:
                var2 = {};
                _fun11057_ip = 31;
                continue _fun11057;
            case 27:
                var2 = arguments[var0];
            case 31:
                var3 = var2.frameContextLines;
                var0 = null;
                var3 = var0 != var3;
                var0 = 7;
                if (!var3) {
                    _fun11057_ip = 55;
                    continue _fun11057
                }
            case 49:
                var0 = var2.frameContextLines;
            case 55:
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'ContextLines';
                var0.name = var2;
                var1 = function(arg0) { // Original name: processEvent, environment: var1
                    var0 = arg0;
                    var3 = _closure2_slot0;
                    var2 = function(arg0, arg1) { // Original name: addSourceContext, environment: var1
                        _fun11059: for (var _fun11059_ip = 0;;) switch (_fun11059_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = arg1;
                                var _closure4_slot0 = var2;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var10 = 1;
                                var4 = var3[var10];
                                var7 = undefined;
                                var4 = var5.bind(var7)(var4);
                                var4 = var4.GLOBAL_OBJ;
                                var4 = var4.document;
                                var3 = var3[var10];
                                var3 = var5.bind(var7)(var3);
                                var3 = var3.GLOBAL_OBJ;
                                var3 = var3.location;
                                if (!var3) {
                                    _fun11059_ip = 126;
                                    continue _fun11059
                                }
                            case 72:
                                var9 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var6 = var5[var10];
                                var8 = var9.bind(var7)(var6);
                                var6 = var8.stripUrlQueryAndFragment;
                                var5 = var5[var10];
                                var5 = var9.bind(var7)(var5);
                                var5 = var5.GLOBAL_OBJ;
                                var5 = var5.location;
                                var5 = var5.href;
                                var3 = var6.bind(var8)(var5);
                            case 126:
                                var _closure4_slot1 = var3;
                                if (!var4) {
                                    _fun11059_ip = 136;
                                    continue _fun11059
                                }
                            case 133:
                                if (var3) {
                                    _fun11059_ip = 138;
                                    continue _fun11059
                                }
                            case 136:
                                return var0;
                            case 138:
                                var6 = var0.exception;
                                var5 = null;
                                var8 = var5 == var6;
                                var3 = undefined;
                                if (var8) {
                                    _fun11059_ip = 160;
                                    continue _fun11059
                                }
                            case 155:
                                var3 = var6.values;
                            case 160:
                                if (!(var5 != var3)) {
                                    _fun11059_ip = 264;
                                    continue _fun11059
                                }
                            case 164:
                                var5 = var3.length;
                                if (!var5) {
                                    _fun11059_ip = 264;
                                    continue _fun11059
                                }
                            case 172:
                                var4 = var4.documentElement;
                                var9 = var4.innerHTML;
                                if (var9) {
                                    _fun11059_ip = 189;
                                    continue _fun11059
                                }
                            case 187:
                                return var0;
                            case 189:
                                var6 = ['<!DOCTYPE html>', '<html>'];
                                var5 = var6.concat;
                                var4 = _closure1_slot2;
                                var8 = var9.split;
                                var2 = '\n';
                                var2 = var8.bind(var9)(var2);
                                var4 = var4.bind(var7)(var2);
                                var2 = ['</html>'];
                                var2 = var5.bind(var6)(var4, var2);
                                var _closure4_slot2 = var2;
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    _fun11060: for (var _fun11060_ip = 0;;) switch (_fun11060_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0.stacktrace;
                                            var0 = null;
                                            var0 = var0 != var1;
                                            if (!var0) {
                                                _fun11060_ip = 24;
                                                continue _fun11060
                                            }
                                        case 18:
                                            var0 = var1.frames;
                                        case 24:
                                            if (!var0) {
                                                _fun11060_ip = 56;
                                                continue _fun11060
                                            }
                                        case 27:
                                            var3 = var1.frames;
                                            var2 = var3.map;
                                            var0 = function(arg0) { // Environment: var0
                                                var0 = arg0;
                                                var5 = _closure1_slot3;
                                                var8 = _closure4_slot2;
                                                var7 = _closure4_slot1;
                                                var6 = _closure4_slot0;
                                                var10 = undefined;
                                                var9 = var0;
                                                var1 = var10[var5](var9, var8, var7, var6, var5);
                                                return var0;
                                            };
                                            var0 = var2.bind(var3)(var0);
                                            var1.frames = var0;
                                        case 56:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            case 264:
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)(var0, var3);
                    return var0;
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var1 = var4.bind(var5)(var1);
    var2.applySourceContextToFrame = var3;
    var2.contextLinesIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 817]);