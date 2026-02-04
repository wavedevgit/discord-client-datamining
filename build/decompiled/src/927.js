// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun9678: for (var _fun9678_ip = 0;;) switch (_fun9678_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var3 = arg2;
                var4 = arg3;
                var _closure2_slot0 = var5;
                var6 = 'boolean';
                var1 = typeof var3;
                if (!(var6 === var1)) {
                    _fun9678_ip = 219;
                    continue _fun9678
                }
            case 32:
                var1 = var2.length;
                if (!(!(var1 > var4))) {
                    _fun9678_ip = 125;
                    continue _fun9678
                }
            case 41:
                var1 = var2.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.flag;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var6 = var1.bind(var2)(var0);
                var0 = -1;
                if (!(var0 !== var6)) {
                    _fun9678_ip = 82;
                    continue _fun9678
                }
            case 67:
                var1 = var2.splice;
                var0 = 1;
                var0 = var1.bind(var2)(var6, var0);
            case 82:
                var0 = var2.length;
                if (!(var0 === var4)) {
                    _fun9678_ip = 101;
                    continue _fun9678
                }
            case 91:
                var0 = var2.shift;
                var0 = var0.bind(var2)();
            case 101:
                var1 = var2.push;
                var0 = {};
                var0.flag = var5;
                var0.result = var3;
                var0 = var1.bind(var2)(var0);
                _fun9678_ip = 219;
                continue _fun9678;
            case 125:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun9678_ip = 219;
                    continue _fun9678
                }
            case 159:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.debug;
                var1 = var2.error;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = '[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=';
                var0 = var3.bind(var0)(var4);
                var0 = var1.bind(var2)(var0);
            case 219:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var4 = 100;
    var2._INTERNAL_FLAG_BUFFER_SIZE = var4;
    var4 = 10;
    var2._INTERNAL_MAX_FLAGS_PER_SPAN = var4;
    var4 = function arg0, arg1() {
        _fun9680: for (var _fun9680_ip = 0;;) switch (_fun9680_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var0 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 2;
                var3 = var3 > var1;
                var5 = 10;
                var8 = var5;
                if (!var3) {
                    _fun9680_ip = 44;
                    continue _fun9680
                }
            case 29:
                var3 = arguments[var1];
                var8 = var5;
                if (!(var0 !== var3)) {
                    _fun9680_ip = 44;
                    continue _fun9680
                }
            case 40:
                var8 = arguments[var1];
            case 44:
                var2 = 'boolean';
                var1 = typeof var4;
                if (!(var2 === var1)) {
                    _fun9680_ip = 268;
                    continue _fun9680
                }
            case 58:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 4;
                var2 = var2[var5];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getActiveSpan;
                var3 = var2.bind(var3)();
                if (!var3) {
                    _fun9680_ip = 268;
                    continue _fun9680
                }
            case 97:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var2 = var2.bind(var0)(var1);
                var1 = var2.spanToJSON;
                var1 = var1.bind(var2)(var3);
                var10 = var1.data;
                var1 = global;
                var2 = var1.HermesInternal;
                var2 = var2.concat;
                var6 = '';
                var5 = 'flag.evaluation.';
                var2 = var2.bind(var6)(var5, var7);
                var2 = var2 in var10;
                if (var2) {
                    _fun9680_ip = 239;
                    continue _fun9680
                }
            case 166:
                var9 = var1.Object;
                var2 = var9.keys;
                var10 = var2.bind(var9)(var10);
                var9 = var10.filter;
                var2 = function(arg0) { // Environment: var2
                    var2 = arg0;
                    var1 = var2.startsWith;
                    var0 = 'flag.evaluation.';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var9.bind(var10)(var2);
                var2 = var2.length;
                if (!(var2 < var8)) {
                    _fun9680_ip = 268;
                    continue _fun9680
                }
            case 208:
                var8 = var3.setAttribute;
                var2 = var1.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var6)(var5, var7);
                var2 = var8.bind(var3)(var2, var4);
                _fun9680_ip = 268;
                continue _fun9680;
            case 239:
                var2 = var3.setAttribute;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var6)(var5, var7);
                var1 = var2.bind(var3)(var1, var4);
            case 268:
                return var0;
        }
    };
    var2._INTERNAL_addFeatureFlagToActiveSpan = var4;
    var4 = function arg0() {
        _fun9682: for (var _fun9682_ip = 0;;) switch (_fun9682_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.getCurrentScope;
                var2 = var1.bind(var2)();
                var1 = var2.getScopeData;
                var1 = var1.bind(var2)();
                var1 = var1.contexts;
                var1 = var1.flags;
                if (var1) {
                    _fun9682_ip = 68;
                    continue _fun9682
                }
            case 62:
                var4 = new Array(0);
                _fun9682_ip = 73;
                continue _fun9682;
            case 68:
                var4 = var1.values;
            case 73:
                var1 = var4.length;
                if (!var1) {
                    _fun9682_ip = 126;
                    continue _fun9682
                }
            case 81:
                var1 = var0.contexts;
                if (!(var5 === var1)) {
                    _fun9682_ip = 99;
                    continue _fun9682
                }
            case 91:
                var1 = {};
                var0.contexts = var1;
            case 99:
                var2 = var0.contexts;
                var1 = {};
                var3 = _closure1_slot2;
                var3 = var3.bind(var5)(var4);
                var1.values = var3;
                var2.flags = var1;
            case 126:
                return var0;
        }
    };
    var2._INTERNAL_copyFlagsFromScopeToEvent = var4;
    var3 = function arg0, arg1() {
        _fun9683: for (var _fun9683_ip = 0;;) switch (_fun9683_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 2;
                var3 = var3 > var1;
                var4 = 100;
                var5 = var4;
                if (!var3) {
                    _fun9683_ip = 38;
                    continue _fun9683
                }
            case 23:
                var3 = arguments[var1];
                var5 = var4;
                if (!(var0 !== var3)) {
                    _fun9683_ip = 38;
                    continue _fun9683
                }
            case 34:
                var5 = arguments[var1];
            case 38:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getCurrentScope;
                var3 = var1.bind(var3)();
                var1 = var3.getScopeData;
                var1 = var1.bind(var3)();
                var1 = var1.contexts;
                var3 = var1.flags;
                if (var3) {
                    _fun9683_ip = 111;
                    continue _fun9683
                }
            case 95:
                var3 = {};
                var4 = new Array(0);
                var3.values = var4;
                var1.flags = var3;
            case 111:
                var4 = _closure1_slot3;
                var1 = var1.flags;
                var9 = var1.values;
                var8 = arg0;
                var7 = arg1;
                var10 = undefined;
                var6 = var5;
                var1 = var10[var4](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2._INTERNAL_insertFlagToScope = var3;
    var2._INTERNAL_insertToFlagBuffer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 847, 823, 824, 819]);