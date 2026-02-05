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
    var2 = function arg0, arg1, arg2() {
        _fun99092: for (var _fun99092_ip = 0;;) switch (_fun99092_ip) {
            case 0:
                var8 = arg0;
                var3 = arg1;
                var7 = undefined;
                var6 = undefined;
                if (!var3) {
                    _fun99092_ip = 42;
                    continue _fun99092
                }
            case 13:
                var2 = var3.replace;
                var1 = /^file:\\/\\ //;
                var0 = '';
                var6 = var2.bind(var3)(var1, var0);
            case 42:
                var0 = var8.location;
                var0 = var0.columnNumber;
                var5 = undefined;
                if (!var0) {
                    _fun99092_ip = 76;
                    continue _fun99092
                }
            case 58:
                var0 = var8.location;
                var1 = var0.columnNumber;
                var0 = 1;
                var5 = var1 + var0;
            case 76:
                var0 = var8.location;
                var0 = var0.lineNumber;
                var3 = undefined;
                if (!var0) {
                    _fun99092_ip = 110;
                    continue _fun99092
                }
            case 92:
                var0 = var8.location;
                var1 = var0.lineNumber;
                var0 = 1;
                var3 = var1 + var0;
            case 110:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var2 = var1.bind(var7)(var0);
                var1 = var2.dropUndefinedKeys;
                var0 = {};
                var0.filename = var6;
                var9 = arg2;
                var9 = var9.bind(var7)(var6);
                var0.module = var9;
                var8 = var8.functionName;
                if (var8) {
                    _fun99092_ip = 193;
                    continue _fun99092
                }
            case 167:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var9 = 1;
                var9 = var11[var9];
                var9 = var10.bind(var7)(var9);
                var8 = var9.UNKNOWN_FUNCTION;
            case 193:
                var0.function = var8;
                var0.colno = var5;
                var0.lineno = var3;
                var3 = undefined;
                if (!var6) {
                    _fun99092_ip = 244;
                    continue _fun99092
                }
            case 213:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 2;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.filenameIsInApp;
                var3 = var4.bind(var5)(var6);
            case 244:
                var0.in_app = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.callFrameToStackFrame = var2;
    var0 = function arg0, arg1, arg2, arg3() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = arg2;
        var _closure2_slot1 = var0;
        var0 = arg3;
        var _closure2_slot2 = var0;
        var0 = arg0;
        var4 = undefined;
        var0 = var0.bind(var4)();
        var _closure2_slot3 = var0;
        var0 = false;
        var _closure2_slot4 = var0;
        var0 = true;
        var _closure2_slot5 = var0;
        var0 = global;
        var3 = var0.setInterval;
        var2 = function() { // Environment: var1
            _fun99094: for (var _fun99094_ip = 0;;) switch (_fun99094_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var0 = var2.getTimeMs;
                    var3 = var0.bind(var2)();
                    var2 = _closure2_slot4;
                    var0 = false;
                    var2 = var0 === var2;
                    if (!var2) {
                        _fun99094_ip = 46;
                        continue _fun99094
                    }
                case 30:
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var4 = var5 + var4;
                    var2 = var3 > var4;
                case 46:
                    if (!var2) {
                        _fun99094_ip = 72;
                        continue _fun99094
                    }
                case 49:
                    var2 = true;
                    _closure2_slot4 = var2;
                    var2 = _closure2_slot5;
                    if (!var2) {
                        _fun99094_ip = 72;
                        continue _fun99094
                    }
                case 62:
                    var4 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
                case 72:
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var4 + var2;
                    if (!(var3 < var2)) {
                        _fun99094_ip = 92;
                        continue _fun99094
                    }
                case 88:
                    _closure2_slot4 = var0;
                case 92:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = 20;
        var0 = var3.bind(var4)(var2, var0);
        var0 = {};
        var2 = function() {
            var1 = _closure2_slot3;
            var0 = var1.reset;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.poll = var2;
        var1 = function arg0() {
            var0 = arg0;
            _closure2_slot5 = var0;
            var0 = undefined;
            return var0;
        };
        var0.enabled = var1;
        return var0;
    };
    var1.watchdogTimer = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12902, 12901, 12922]);