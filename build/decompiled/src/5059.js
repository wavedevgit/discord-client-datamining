// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45410: for (var _fun45410_ip = 0;;) switch (_fun45410_ip) {
        case 0:
            var8 = require;
            var10 = metroImportDefault;
            var14 = exports;
            var9 = dependencyMap;
            var6 = var8;
            var _closure1_slot0 = var10;
            var1 = var14;
            var5 = var9;
            var _closure1_slot1 = var9;
            var0 = undefined;
            var4 = undefined;
            var3 = undefined;
            var7 = ['focusHook', 'scrollEventsHandlersHook', 'enableFooterMarginAdjustment'];
            var _closure1_slot2 = var7;
            var7 = ['data'];
            var _closure1_slot3 = var7;
            var7 = global;
            var13 = var7.Object;
            var12 = var13.defineProperty;
            var11 = {};
            var7 = true;
            var11.value = var7;
            var7 = '__esModule';
            var7 = var12.bind(var13)(var14, var7, var11);
            var7 = 0;
            var7 = var9[var7];
            var7 = var10.bind(var0)(var7);
            var _closure1_slot5 = var7;
            var7 = 1;
            var11 = var9[var7];
            var11 = var8.bind(var0)(var11);
            var12 = var11.forwardRef;
            var4 = var12;
            var _closure1_slot6 = var12;
            var3 = var11.memo;
            var11 = var11.useMemo;
            var _closure1_slot7 = var11;
            var7 = var9[var7];
            var7 = var10.bind(var0)(var7);
            var7 = 2;
            var7 = var9[var7];
            var7 = var8.bind(var0)(var7);
            var7 = var7.jsx;
            var _closure1_slot8 = var7;
        case 181: // try_start_0
            var7 = var5;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot4 = var5;
        case 200: // try_end0
            _fun45410_ip = 204;
            continue _fun45410;
        case 202: // catch_target0
            CatchBlockStart(arg_register = 5);
        case 204:
            var2 = function(arg0, arg1) { // Environment: var2
                var6 = arg0;
                var8 = var6.focusHook;
                var _closure2_slot0 = var8;
                var7 = var6.scrollEventsHandlersHook;
                var _closure2_slot1 = var7;
                var5 = var6.enableFooterMarginAdjustment;
                var _closure2_slot2 = var5;
                var4 = _closure1_slot5;
                var2 = _closure1_slot2;
                var3 = undefined;
                var6 = var4.bind(var3)(var6, var2);
                var4 = _closure1_slot7;
                var9 = function() { // Environment: var1
                    _fun45412: for (var _fun45412_ip = 0;;) switch (_fun45412_ip) {
                        case 0:
                            var0 = _closure1_slot4;
                            if (var0) {
                                _fun45412_ip = 18;
                                continue _fun45412
                            }
                        case 10:
                            var0 = 'You need to install FlashList first, `yarn install @shopify/flash-list`';
                            throw var0;
                        case 18:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = new Array(0);
                var2 = var4.bind(var3)(var9, var2);
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot6;
                    var1 = undefined;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var4 = arg0;
                        var0 = var4.data;
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot3;
                        var3 = undefined;
                        var7 = var2.bind(var3)(var4, var1);
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 4;
                        var0 = var4[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = global;
                        var6 = var0.Object;
                        var5 = var6.assign;
                        var4 = {};
                        var0 = arg1;
                        var4.ref = var0;
                        var0 = {};
                        var9 = _closure2_slot0;
                        var0.focusHook = var9;
                        var9 = _closure2_slot1;
                        var0.scrollEventsHandlersHook = var9;
                        var8 = _closure2_slot2;
                        var0.enableFooterMarginAdjustment = var8;
                        var0 = var5.bind(var6)(var4, var7, var0);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var7 = var4.bind(var3)(var1, var2);
                var2 = _closure1_slot8;
                var0 = _closure1_slot4;
                var1 = var0.FlashList;
                var0 = global;
                var5 = var0.Object;
                var4 = var5.assign;
                var0 = {};
                var8 = arg1;
                var0.ref = var8;
                var0.renderScrollComponent = var7;
                var0 = var4.bind(var5)(var0, var6);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2 = var4.bind(var0)(var2);
            var2 = var3.bind(var0)(var2);
            var1.default = var2;
            var1.BottomSheetFlashList = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 5060, 5057]);