// design/components/Navigator/native/useFocusRefOnNavigation.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Navigator/native/useFocusRefOnNavigation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100418: for (var _fun100418_ip = 0;;) switch (_fun100418_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.inputRef;
                var _closure2_slot0 = var6;
                var7 = var0.enabled;
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun100418_ip = 28;
                    continue _fun100418
                }
            case 26:
                var7 = true;
            case 28:
                var _closure2_slot1 = var7;
                var _closure2_slot2 = var0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.useIsFocused;
                var5 = var3.bind(var4)();
                _closure2_slot2 = var5;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.runAfterInteractions;
                    var1 = function() { // Environment: var0
                        _fun100420: for (var _fun100420_ip = 0;;) switch (_fun100420_ip) {
                            case 0:
                                var1 = _closure2_slot1;
                                if (!var1) {
                                    _fun100420_ip = 14;
                                    continue _fun100420
                                }
                            case 10:
                                var1 = _closure2_slot2;
                            case 14:
                                if (!var1) {
                                    _fun100420_ip = 42;
                                    continue _fun100420
                                }
                            case 17:
                                var0 = _closure2_slot0;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun100420_ip = 42;
                                    continue _fun100420
                                }
                            case 32:
                                var0 = var1.focus;
                                var0 = var0.bind(var1)();
                            case 42:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.cancel;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1470, 5859, 2]);