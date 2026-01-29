// modules/payments/native/hooks/useOrderContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var5 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/payments/native/hooks/useOrderContext.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useOrderContext, environment: var1
        var3 = _closure1_slot1;
        var4 = var3.useState;
        var2 = arg0;
        var5 = var4.bind(var3)(var2);
        var4 = _closure1_slot0;
        var2 = undefined;
        var1 = 2;
        var2 = var4.bind(var2)(var5, var1);
        var1 = 0;
        var5 = var2[var1];
        var _closure2_slot0 = var5;
        var1 = 1;
        var4 = var2[var1];
        var _closure2_slot1 = var4;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun74625: for (var _fun74625_ip = 0;;) switch (_fun74625_ip) {
                case 0:
                    var0 = {};
                    var1 = _closure2_slot0;
                    var0.order = var1;
                    var3 = _closure2_slot1;
                    var0.setOrder = var3;
                    var3 = null;
                    var5 = var3 == var1;
                    var1 = undefined;
                    if (var5) {
                        _fun74625_ip = 43;
                        continue _fun74625
                    }
                case 34:
                    var5 = _closure2_slot0;
                    var1 = var5.id;
                case 43:
                    var0.orderId = var1;
                    var1 = _closure2_slot0;
                    var5 = var3 == var1;
                    var1 = undefined;
                    if (var5) {
                        _fun74625_ip = 100;
                        continue _fun74625
                    }
                case 61:
                    var2 = _closure2_slot0;
                    var5 = var2.order_line_items;
                    var2 = var3 == var5;
                    var1 = undefined;
                    if (var2) {
                        _fun74625_ip = 100;
                        continue _fun74625
                    }
                case 80:
                    var2 = 0;
                    var2 = var5[var2];
                    var3 = var3 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun74625_ip = 100;
                        continue _fun74625
                    }
                case 95:
                    var1 = var2.id;
                case 100:
                    var0.orderLineItemId = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOrderContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 2]);