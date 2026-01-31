// modules/interaction_components/native/SelectMenuNativeComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun86801: for (var _fun86801_ip = 0;;) switch (_fun86801_ip) {
        case 0:
            var4 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var5;
            var0 = global;
            var8 = var0.Object;
            var6 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var8)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var7.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var6 = var5[var3];
            var3 = metroImportAll;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.requireNativeComponent;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot5 = var3;
            var3 = 4;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var3 = var8.isAndroid;
            var3 = var3.bind(var8)();
            if (var3) {
                _fun86801_ip = 171;
                continue _fun86801
            }
        case 158:
            var3 = 'DCDSelectActionComponentView';
            var3 = var6.bind(var0)(var3);
            _fun86801_ip = 183;
            continue _fun86801;
        case 171:
            var6 = 5;
            var6 = var5[var6];
            var3 = var7.bind(var0)(var6);
        case 183:
            var _closure1_slot6 = var3;
            var3 = 7;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/interaction_components/native/SelectMenuNativeComponent.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun86802: for (var _fun86802_ip = 0;;) switch (_fun86802_ip) {
                    case 0:
                        var6 = _closure1_slot4;
                        var2 = var6.useState;
                        var5 = var2.bind(var6)();
                        var3 = _closure1_slot3;
                        var4 = undefined;
                        var2 = 2;
                        var3 = var3.bind(var4)(var5, var2);
                        var2 = 0;
                        var5 = var3[var2];
                        var2 = 1;
                        var2 = var3[var2];
                        var _closure2_slot0 = var2;
                        var3 = var6.useCallback;
                        var2 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var2 = _closure2_slot0;
                            var0 = var0.layout;
                            var1 = var0.height;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = new Array(0);
                        var6 = var3.bind(var6)(var2, var0);
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot6;
                        var0 = {};
                        var9 = arg0;
                        var10 = var0;
                        var7 = copyDataProperties(var10, var9);
                        var7 = {};
                        var8 = '100%';
                        var7.width = var8;
                        var7.height = var5;
                        var5 = 'style';
                        var0[var5] = var7;
                        var5 = var3.bind(var4)(var2, var0);
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 4;
                        var0 = var3[var0];
                        var2 = var2.bind(var4)(var0);
                        var0 = var2.isAndroid;
                        var2 = var0.bind(var2)();
                        var0 = var5;
                        if (!var2) {
                            _fun86802_ip = 200;
                            continue _fun86802
                        }
                    case 159:
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 6;
                        var1 = var7[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var1.onLayout = var6;
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 200:
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 478, 11186, 8764, 2]);