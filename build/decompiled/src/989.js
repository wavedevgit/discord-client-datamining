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
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = function arg0, arg1, arg2() {
        _fun10152: for (var _fun10152_ip = 0;;) switch (_fun10152_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var5 = undefined;
                var4 = undefined;
                if (!var6) {
                    _fun10152_ip = 42;
                    continue _fun10152
                }
            case 13:
                var2 = var6.replace;
                var1 = /^file:\\/\\ //;
                var0 = '';
                var4 = var2.bind(var6)(var1, var0);
            case 42:
                var0 = var3.location;
                var0 = var0.columnNumber;
                var2 = undefined;
                if (!var0) {
                    _fun10152_ip = 76;
                    continue _fun10152
                }
            case 58:
                var0 = var3.location;
                var1 = var0.columnNumber;
                var0 = 1;
                var2 = var1 + var0;
            case 76:
                var0 = var3.location;
                var0 = var0.lineNumber;
                var1 = undefined;
                if (!var0) {
                    _fun10152_ip = 110;
                    continue _fun10152
                }
            case 92:
                var0 = var3.location;
                var6 = var0.lineNumber;
                var0 = 1;
                var1 = var6 + var0;
            case 110:
                var0 = {};
                var0.filename = var4;
                var6 = arg2;
                var6 = var6.bind(var5)(var4);
                var0.module = var6;
                var3 = var3.functionName;
                if (var3) {
                    _fun10152_ip = 167;
                    continue _fun10152
                }
            case 139:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 0;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var3 = var6.UNKNOWN_FUNCTION;
            case 167:
                var0.function = var3;
                var0.colno = var2;
                var0.lineno = var1;
                var1 = undefined;
                if (!var4) {
                    _fun10152_ip = 221;
                    continue _fun10152
                }
            case 187:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.filenameIsInApp;
                var1 = var2.bind(var3)(var4);
            case 221:
                var0.in_app = var1;
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
            _fun10154: for (var _fun10154_ip = 0;;) switch (_fun10154_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var0 = var2.getTimeMs;
                    var3 = var0.bind(var2)();
                    var2 = _closure2_slot4;
                    var0 = false;
                    var2 = var0 === var2;
                    if (!var2) {
                        _fun10154_ip = 46;
                        continue _fun10154
                    }
                case 30:
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var4 = var5 + var4;
                    var2 = var3 > var4;
                case 46:
                    if (!var2) {
                        _fun10154_ip = 72;
                        continue _fun10154
                    }
                case 49:
                    var2 = true;
                    _closure2_slot4 = var2;
                    var2 = _closure2_slot5;
                    if (!var2) {
                        _fun10154_ip = 72;
                        continue _fun10154
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
                        _fun10154_ip = 92;
                        continue _fun10154
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [832, 988]);