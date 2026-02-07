// design/components/Sheet/native/BottomSheetHandle.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/BottomSheetHandle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = var4.useImperativeHandle;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = arg0;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = function() {
                _fun46918: for (var _fun46918_ip = 0;;) switch (_fun46918_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        var1 = var0.current;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun46918_ip = 28;
                            continue _fun46918
                        }
                    case 18:
                        var0 = var1.expand;
                        var0 = var0.bind(var1)();
                    case 28:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.expandActionSheet = var2;
            var2 = function arg0() {
                _fun46919: for (var _fun46919_ip = 0;;) switch (_fun46919_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = null;
                        var4 = var1 == var2;
                        var0 = undefined;
                        var3 = undefined;
                        if (var4) {
                            _fun46919_ip = 22;
                            continue _fun46919
                        }
                    case 16:
                        var3 = var2.force;
                    case 22:
                        var2 = true;
                        if (!(var2 !== var3)) {
                            _fun46919_ip = 56;
                            continue _fun46919
                        }
                    case 28:
                        var2 = _closure2_slot0;
                        var3 = var2.current;
                        if (!(var1 != var3)) {
                            _fun46919_ip = 82;
                            continue _fun46919
                        }
                    case 44:
                        var2 = var3.close;
                        var2 = var2.bind(var3)();
                        _fun46919_ip = 82;
                        continue _fun46919;
                    case 56:
                        var2 = _closure2_slot0;
                        var2 = var2.current;
                        if (!(var1 != var2)) {
                            _fun46919_ip = 82;
                            continue _fun46919
                        }
                    case 72:
                        var1 = var2.forceClose;
                        var1 = var1.bind(var2)();
                    case 82:
                        return var0;
                }
            };
            var0.closeActionSheet = var2;
            var2 = function() {
                _fun46920: for (var _fun46920_ip = 0;;) switch (_fun46920_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        var1 = var0.current;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun46920_ip = 28;
                            continue _fun46920
                        }
                    case 18:
                        var0 = var1.collapse;
                        var0 = var0.bind(var1)();
                    case 28:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.collapseActionSheet = var2;
            var1 = function arg0() {
                _fun46921: for (var _fun46921_ip = 0;;) switch (_fun46921_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        var2 = var0.current;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun46921_ip = 32;
                            continue _fun46921
                        }
                    case 18:
                        var1 = var2.snapToIndex;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 32:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.snapToIndex = var1;
            return var0;
        };
        var0 = var3.bind(var4)(var1, var0, var2);
        var0 = undefined;
        return var0;
    };
    var2.useBottomSheetImperativeHandle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);