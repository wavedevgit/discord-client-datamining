// modules/tooltip/useCanShowTooltip.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/tooltip/useCanShowTooltip.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun68815: for (var _fun68815_ip = 0;;) switch (_fun68815_ip) {
            case 0:
                var5 = arg0;
                var6 = arguments[1];
                var7 = arguments[2];
                var _closure2_slot0 = var5;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun68815_ip = 23;
                    continue _fun68815
                }
            case 21:
                var6 = false;
            case 23:
                var _closure2_slot1 = var6;
                if (!(var7 === var4)) {
                    _fun68815_ip = 33;
                    continue _fun68815
                }
            case 31:
                var7 = true;
            case 33:
                var _closure2_slot2 = var7;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 2;
                var0 = var8[var0];
                var8 = var3.bind(var4)(var0);
                var4 = var8.useStateFromStores;
                var0 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    _fun68816: for (var _fun68816_ip = 0;;) switch (_fun68816_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var2 = var3.canShowTooltip;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            if (!var0) {
                                _fun68816_ip = 32;
                                continue _fun68816
                            }
                        case 28:
                            var0 = _closure2_slot2;
                        case 32:
                            return var0;
                    }
                };
                var0 = var4.bind(var8)(var3, var0);
                var4 = _closure1_slot3;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    _fun68817: for (var _fun68817_ip = 0;;) switch (_fun68817_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun68817_ip = 55;
                                continue _fun68817
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.attemptToShowTooltip;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useCanShowTooltip = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8578, 566, 8579, 2]);