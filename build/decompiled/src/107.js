// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun1592: for (var _fun1592_ip = 0;;) switch (_fun1592_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun1592_ip = 40;
                    continue _fun1592
                }
            case 12:
                if (!(var2 != var1)) {
                    _fun1592_ip = 40;
                    continue _fun1592
                }
            case 16:
                var0 = global;
                var5 = var0.Object;
                var4 = var5.assign;
                var0 = {};
                var0 = var4.bind(var5)(var0, var3, var1);
                _fun1592_ip = 56;
                continue _fun1592;
            case 40:
                if (!(var2 != var3)) {
                    _fun1592_ip = 47;
                    continue _fun1592
                }
            case 44:
                var1 = var3;
            case 47:
                if (!(var2 == var1)) {
                    _fun1592_ip = 53;
                    continue _fun1592
                }
            case 51:
                var1 = {};
            case 53:
                var0 = var1;
            case 56:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.uiViewClassName;
        var0.uiViewClassName = var2;
        var2 = {};
        var0.Commands = var2;
        var4 = _closure1_slot2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 0;
        var7 = var6[var2];
        var3 = undefined;
        var7 = var5.bind(var3)(var7);
        var8 = var7.bubblingEventTypes;
        var7 = var1.bubblingEventTypes;
        var7 = var4.bind(var3)(var8, var7);
        var0.bubblingEventTypes = var7;
        var7 = var6[var2];
        var7 = var5.bind(var3)(var7);
        var8 = var7.directEventTypes;
        var7 = var1.directEventTypes;
        var7 = var4.bind(var3)(var8, var7);
        var0.directEventTypes = var7;
        var2 = var6[var2];
        var2 = var5.bind(var3)(var2);
        var2 = var2.validAttributes;
        var1 = var1.validAttributes;
        var1 = var4.bind(var3)(var2, var1);
        var0.validAttributes = var1;
        return var0;
    };
    var1.createViewConfig = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [108]);