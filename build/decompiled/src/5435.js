// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var2);
    var2 = {
        'meet': 0,
        'slice': 1,
        'none': 2
    };
    var _closure1_slot0 = var2;
    var6 = ['xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid', 'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax', 'none'];
    var5 = var6.reduce;
    var4 = function(arg0, arg1) { // Environment: var3
        var0 = arg0;
        var1 = arg1;
        var0[var1] = var1;
        return var0;
    };
    var0 = {};
    var0 = var5.bind(var6)(var4, var0);
    var _closure1_slot1 = var0;
    var4 = /\s+/;
    var _closure1_slot2 = var4;
    var3 = function arg0() {
        _fun48339: for (var _fun48339_ip = 0;;) switch (_fun48339_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.viewBox;
                var4 = var0.preserveAspectRatio;
                if (var3) {
                    _fun48339_ip = 22;
                    continue _fun48339
                }
            case 18:
                var0 = null;
                return var0;
            case 22:
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                var5 = var3;
                if (var1) {
                    _fun48339_ip = 104;
                    continue _fun48339
                }
            case 46:
                var1 = var3.trim;
                var7 = var1.bind(var3)();
                var6 = var7.replace;
                var2 = /,/g;
                var1 = ' ';
                var6 = var6.bind(var7)(var2, var1);
                var2 = var6.split;
                var1 = _closure1_slot2;
                var5 = var2.bind(var6)(var1);
            case 104:
                var2 = var5.map;
                var1 = var0.Number;
                var6 = var2.bind(var5)(var1);
                var2 = var6.length;
                var1 = 4;
                if (!(var1 === var2)) {
                    _fun48339_ip = 296;
                    continue _fun48339
                }
            case 135:
                var2 = var6.some;
                var1 = var0.isNaN;
                var1 = var2.bind(var6)(var1);
                if (var1) {
                    _fun48339_ip = 296;
                    continue _fun48339
                }
            case 158:
                if (var4) {
                    _fun48339_ip = 167;
                    continue _fun48339
                }
            case 161:
                var1 = new Array(0);
                _fun48339_ip = 194;
                continue _fun48339;
            case 167:
                var2 = var4.trim;
                var5 = var2.bind(var4)();
                var4 = var5.split;
                var2 = _closure1_slot2;
                var1 = var4.bind(var5)(var2);
            case 194:
                var4 = 0;
                var7 = var1[var4];
                var2 = 1;
                var5 = var1[var2];
                var1 = {};
                var8 = var6[var4];
                var1.minX = var8;
                var2 = var6[var2];
                var1.minY = var2;
                var2 = 2;
                var2 = var6[var2];
                var1.vbWidth = var2;
                var2 = 3;
                var2 = var6[var2];
                var1.vbHeight = var2;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                if (var6) {
                    _fun48339_ip = 271;
                    continue _fun48339
                }
            case 265:
                var6 = 'xMidYMid';
            case 271:
                var1.align = var6;
                var2 = _closure1_slot0;
                var2 = var2[var5];
                if (var2) {
                    _fun48339_ip = 289;
                    continue _fun48339
                }
            case 287:
                var2 = 0;
            case 289:
                var1.meetOrSlice = var2;
                return var1;
            case 296:
                var2 = var0.console;
                var1 = var2.warn;
                var0 = 'Invalid `viewBox` prop:';
                var0 = var0 + var3;
                var0 = var1.bind(var2)(var0);
                var0 = null;
                return var0;
        }
    };
    var1.default = var3;
    var1.meetOrSliceTypes = var2;
    var1.alignEnum = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);