// modules/interaction_components/StringSelectActionComponentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/StringSelectActionComponentUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun56957: for (var _fun56957_ip = 0;;) switch (_fun56957_ip) {
            case 0:
                var2 = arg0;
                var6 = _closure1_slot2;
                var5 = var6.getInteractionComponentState;
                var4 = var2.id;
                var1 = arg1;
                var1 = var5.bind(var6)(var1, var4);
                var4 = null;
                var5 = var4 == var1;
                var6 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun56957_ip = 50;
                    continue _fun56957
                }
            case 45:
                var4 = var1.type;
            case 50:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 1;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.ComponentType;
                var3 = var3.STRING_SELECT;
                if (!(var4 !== var3)) {
                    _fun56957_ip = 123;
                    continue _fun56957
                }
            case 86:
                var4 = var2.options;
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.default;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.value;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                _fun56957_ip = 128;
                continue _fun56957;
            case 123:
                var0 = var1.values;
            case 128:
                return var0;
        }
    };
    var2.getInitialStringSelectOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6897, 1647, 2]);