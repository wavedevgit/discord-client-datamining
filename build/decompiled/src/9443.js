// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var5 = var6.size;
        var _closure2_slot1 = var5;
        var4 = var6.vertical;
        var _closure2_slot2 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var7 = var6.mode;
        var1 = new Array(4);
        var1[0] = var7;
        var6 = var6.modeConfig;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun74978: for (var _fun74978_ip = 0;;) switch (_fun74978_ip) {
                case 0:
                    var3 = {};
                    var1 = _closure2_slot1;
                    var3.size = var1;
                    var1 = _closure2_slot2;
                    var3.vertical = var1;
                    var1 = _closure2_slot0;
                    var2 = var1.mode;
                    var1 = 'parallax';
                    if (!(var1 !== var2)) {
                        _fun74978_ip = 214;
                        continue _fun74978
                    }
                case 42:
                    var1 = 'horizontal-stack';
                    if (!(var1 !== var2)) {
                        _fun74978_ip = 160;
                        continue _fun74978
                    }
                case 52:
                    var1 = 'vertical-stack';
                    if (!(var1 !== var2)) {
                        _fun74978_ip = 106;
                        continue _fun74978
                    }
                case 62:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var2 = var1.Layouts;
                    var1 = var2.normal;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                case 106:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var4 = var1.Layouts;
                    var2 = var4.verticalStack;
                    var1 = _closure2_slot0;
                    var1 = var1.modeConfig;
                    var1 = var2.bind(var4)(var1);
                    return var1;
                case 160:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var4 = var1.Layouts;
                    var2 = var4.horizontalStack;
                    var1 = _closure2_slot0;
                    var1 = var1.modeConfig;
                    var1 = var2.bind(var4)(var1);
                    return var1;
                case 214:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var2 = var1.Layouts;
                    var1 = var2.parallax;
                    var0 = _closure2_slot0;
                    var0 = var0.modeConfig;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useLayoutConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9444]);