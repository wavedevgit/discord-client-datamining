// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var4 = var3.useCallback;
    var _closure1_slot2 = var4;
    var3 = var3.useEffect;
    var _closure1_slot3 = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun44790: for (var _fun44790_ip = 0;;) switch (_fun44790_ip) {
            case 0:
                var14 = arg0;
                var13 = arg1;
                var9 = arg2;
                var12 = arg3;
                var0 = undefined;
                var4 = undefined;
                var _closure2_slot0 = var14;
                var _closure2_slot1 = var13;
                var _closure2_slot2 = var9;
                var _closure2_slot3 = var12;
                var2 = arguments.length;
                var3 = 4;
                if (!(var2 > var3)) {
                    _fun44790_ip = 52;
                    continue _fun44790
                }
            case 44:
                var2 = arguments[var3];
                if (!(var0 === var2)) {
                    _fun44790_ip = 61;
                    continue _fun44790
                }
            case 52:
                var2 = _closure1_slot3;
                _fun44790_ip = 65;
                continue _fun44790;
            case 61:
                var2 = arguments[var3];
            case 65:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 1;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.useBottomSheetInternal;
                var4 = var4.bind(var5)();
                var11 = var4.animatedScrollableType;
                var _closure2_slot4 = var11;
                var10 = var4.animatedScrollableContentOffsetY;
                var _closure2_slot5 = var10;
                var7 = var4.isContentHeightFixed;
                var _closure2_slot6 = var7;
                var8 = var4.isScrollableRefreshable;
                var _closure2_slot7 = var8;
                var6 = var4.setScrollableRef;
                var _closure2_slot8 = var6;
                var5 = var4.removeScrollableRef;
                var _closure2_slot9 = var5;
                var4 = _closure1_slot2;
                var3 = new Array(10);
                var3[0] = var14;
                var3[1] = var13;
                var3[2] = var12;
                var3[3] = var11;
                var3[4] = var10;
                var3[5] = var9;
                var3[6] = var8;
                var3[7] = var7;
                var3[8] = var6;
                var3[9] = var5;
                var1 = function() { // Environment: var1
                    _fun44791: for (var _fun44791_ip = 0;;) switch (_fun44791_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = _closure2_slot2;
                            var0 = var0.value;
                            var1.value = var0;
                            var1 = _closure2_slot4;
                            var0 = _closure2_slot1;
                            var1.value = var0;
                            var1 = _closure2_slot7;
                            var0 = _closure2_slot3;
                            var1.value = var0;
                            var1 = _closure2_slot6;
                            var0 = false;
                            var1.value = var0;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 2;
                            var0 = var2[var0];
                            var2 = undefined;
                            var4 = var1.bind(var2)(var0);
                            var1 = var4.findNodeHandle;
                            var0 = _closure2_slot0;
                            var0 = var0.current;
                            var4 = var1.bind(var4)(var0);
                            if (var4) {
                                _fun44791_ip = 136;
                                continue _fun44791
                            }
                        case 110:
                            var0 = global;
                            var5 = var0.console;
                            var1 = var5.warn;
                            var0 = "Couldn't find the scrollable node handle id!";
                            var0 = var1.bind(var5)(var0);
                            _fun44791_ip = 160;
                            continue _fun44791;
                        case 136:
                            var1 = _closure2_slot8;
                            var0 = {};
                            var0.id = var4;
                            var3 = _closure2_slot0;
                            var0.node = var3;
                            var0 = var1.bind(var2)(var0);
                        case 160:
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot9;
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var4.bind(var0)(var1, var3);
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.useScrollableSetter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4943, 4952]);