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
    var1 = function arg0() {
        var3 = _closure1_slot1;
        var4 = var3.useState;
        var2 = arg0;
        var5 = var4.bind(var3)(var2);
        var4 = _closure1_slot0;
        var2 = undefined;
        var1 = 2;
        var2 = var4.bind(var2)(var5, var1);
        var1 = 0;
        var6 = var2[var1];
        var _closure2_slot0 = var6;
        var1 = 1;
        var5 = var2[var1];
        var _closure2_slot1 = var5;
        var4 = var3.useCallback;
        var2 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var2 = _closure2_slot1;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                _fun75224: for (var _fun75224_ip = 0;;) switch (_fun75224_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = null;
                        var0 = var2;
                        if (!(var1 != var0)) {
                            _fun75224_ip = 43;
                            continue _fun75224
                        }
                    case 12:
                        var1 = {};
                        var5 = var1;
                        var4 = var2;
                        var2 = copyDataProperties(var5, var4);
                        var3 = _closure3_slot0;
                        var2 = 'revision';
                        var1[var2] = var3;
                        var0 = var1;
                    case 43:
                        return var0;
                }
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = new Array(0);
        var4 = var4.bind(var3)(var2, var1);
        var _closure2_slot2 = var4;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun75225: for (var _fun75225_ip = 0;;) switch (_fun75225_ip) {
                case 0:
                    var0 = {};
                    var1 = _closure2_slot0;
                    var0.order = var1;
                    var3 = _closure2_slot1;
                    var0.setOrder = var3;
                    var3 = _closure2_slot2;
                    var0.setRevision = var3;
                    var4 = null;
                    var5 = var4 == var1;
                    var3 = undefined;
                    if (var5) {
                        _fun75225_ip = 52;
                        continue _fun75225
                    }
                case 43:
                    var5 = _closure2_slot0;
                    var3 = var5.id;
                case 52:
                    var0.orderId = var3;
                    var3 = _closure2_slot0;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if (var5) {
                        _fun75225_ip = 109;
                        continue _fun75225
                    }
                case 70:
                    var5 = _closure2_slot0;
                    var6 = var5.order_line_items;
                    var5 = var4 == var6;
                    var3 = undefined;
                    if (var5) {
                        _fun75225_ip = 109;
                        continue _fun75225
                    }
                case 89:
                    var5 = 0;
                    var5 = var6[var5];
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun75225_ip = 109;
                        continue _fun75225
                    }
                case 104:
                    var3 = var5.id;
                case 109:
                    var0.orderLineItemId = var3;
                    var3 = _closure2_slot0;
                    var3 = var4 == var3;
                    var1 = undefined;
                    if (var3) {
                        _fun75225_ip = 137;
                        continue _fun75225
                    }
                case 127:
                    var2 = _closure2_slot0;
                    var1 = var2.revision;
                case 137:
                    var0.revision = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOrderContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 2]);