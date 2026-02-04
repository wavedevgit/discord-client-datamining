// ../discord_common/js/packages/shallow-equal/shallowEqual.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = {};
    var _closure1_slot0 = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/shallow-equal/shallowEqual.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2() {
        _fun7091: for (var _fun7091_ip = 0;;) switch (_fun7091_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var5 = arg2;
                var0 = arguments[3];
                var1 = undefined;
                if (!(var0 === var1)) {
                    _fun7091_ip = 25;
                    continue _fun7091
                }
            case 18:
                var0 = _closure1_slot0;
            case 25:
                var2 = var0.shouldWarnLargeObjects;
                var0 = var0.logCallback;
                var0 = var7 === var6;
                if (var0) {
                    _fun7091_ip = 184;
                    continue _fun7091
                }
            case 47:
                if (!(var1 !== var7)) {
                    _fun7091_ip = 182;
                    continue _fun7091
                }
            case 54:
                if (!(var1 !== var6)) {
                    _fun7091_ip = 182;
                    continue _fun7091
                }
            case 61:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var4 = var2.bind(var3)(var7);
                var2 = var1.Object;
                var1 = var2.keys;
                var1 = var1.bind(var2)(var6);
                var2 = var4.length;
                var1 = var1.length;
                if (!(var2 === var1)) {
                    _fun7091_ip = 178;
                    continue _fun7091
                }
            case 109:
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                var2 = null;
                if (!var1) {
                    _fun7091_ip = 170;
                    continue _fun7091
                }
            case 125:
                var8 = var4[var3];
                var9 = var7[var8];
                var1 = var6[var8];
                if (!(var9 !== var1)) {
                    _fun7091_ip = 158;
                    continue _fun7091
                }
            case 141:
                if (!(var2 != var5)) {
                    _fun7091_ip = 174;
                    continue _fun7091
                }
            case 145:
                var1 = var5.includes;
                var1 = var1.bind(var5)(var8);
                if (!var1) {
                    _fun7091_ip = 174;
                    continue _fun7091
                }
            case 158:
                var3 = var3 + 1;
                var1 = var4.length;
                if (var3 < var1) {
                    _fun7091_ip = 125;
                    continue _fun7091
                }
            case 170:
                var1 = true;
                return var1;
            case 174:
                var1 = false;
                return var1;
            case 178:
                var1 = false;
                return var1;
            case 182:
                return var0;
            case 184:
                var0 = true;
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0, arg1() {
        _fun7092: for (var _fun7092_ip = 0;;) switch (_fun7092_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = arguments[2];
                var _closure2_slot0 = var2;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun7092_ip = 28;
                    continue _fun7092
                }
            case 21:
                var0 = _closure1_slot0;
            case 28:
                var4 = var0.logCallback;
                var0 = var0.shouldWarnLargeObjects;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun7092_ip = 63;
                    continue _fun7092
                }
            case 49:
                var4 = var3.length;
                var2 = var2.length;
                var0 = var4 === var2;
            case 63:
                if (!var0) {
                    _fun7092_ip = 82;
                    continue _fun7092
                }
            case 66:
                var2 = var3.every;
                var1 = function(arg0, arg1) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg1;
                    var1 = var1[var0];
                    var0 = arg0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 82:
                return var0;
        }
    };
    var2.areArraysShallowEqual = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);