// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = ['edges'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var6[var3];
    var4 = metroImportAll;
    var4 = var4.bind(var0)(var7);
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {
        'top': 'additive',
        'left': 'additive',
        'bottom': 'additive',
        'right': 'additive'
    };
    var _closure1_slot6 = var3;
    var3 = var4.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        var6 = arg0;
        var5 = var6.edges;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var2 = _closure1_slot2;
        var3 = undefined;
        var7 = var4.bind(var3)(var6, var2);
        var4 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var0 = function() { // Environment: var0
            _fun17588: for (var _fun17588_ip = 0;;) switch (_fun17588_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun17588_ip = 164;
                        continue _fun17588
                    }
                case 16:
                    var0 = global;
                    var4 = var0.Array;
                    var2 = var4.isArray;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var4)(var0);
                    var5 = _closure2_slot0;
                    if (var0) {
                        _fun17588_ip = 50;
                        continue _fun17588
                    }
                case 45:
                    var2 = var5;
                    _fun17588_ip = 71;
                    continue _fun17588;
                case 50:
                    var4 = var5.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        var0 = arg0;
                        var2 = 'additive';
                        var1 = arg1;
                        var0[var1] = var2;
                        return var0;
                    };
                    var0 = {};
                    var2 = var4.bind(var5)(var1, var0);
                case 71:
                    var0 = {};
                    var5 = var2.top;
                    var6 = var3 != var5;
                    var1 = 'off';
                    var4 = var1;
                    if (!var6) {
                        _fun17588_ip = 95;
                        continue _fun17588
                    }
                case 92:
                    var4 = var5;
                case 95:
                    var0.top = var4;
                    var5 = var2.right;
                    var6 = var3 != var5;
                    var4 = var1;
                    if (!var6) {
                        _fun17588_ip = 117;
                        continue _fun17588
                    }
                case 114:
                    var4 = var5;
                case 117:
                    var0.right = var4;
                    var5 = var2.bottom;
                    var6 = var3 != var5;
                    var4 = var1;
                    if (!var6) {
                        _fun17588_ip = 139;
                        continue _fun17588
                    }
                case 136:
                    var4 = var5;
                case 139:
                    var0.bottom = var4;
                    var2 = var2.left;
                    var3 = var3 != var2;
                    if (!var3) {
                        _fun17588_ip = 158;
                        continue _fun17588
                    }
                case 155:
                    var1 = var2;
                case 158:
                    var0.left = var1;
                    return var0;
                case 164:
                    var0 = _closure1_slot6;
                    return var0;
            }
        };
        var0 = var4.bind(var3)(var0, var2);
        var2 = _closure1_slot5;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 3;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var4 = global;
        var6 = var4.Object;
        var5 = var6.assign;
        var4 = {};
        var4.edges = var0;
        var0 = arg1;
        var4.ref = var0;
        var0 = {};
        var0 = var5.bind(var6)(var0, var7, var4);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var4)(var1);
    var2.SafeAreaView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 1576]);