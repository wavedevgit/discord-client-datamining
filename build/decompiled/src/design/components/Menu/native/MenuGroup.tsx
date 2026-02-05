// design/components/Menu/native/MenuGroup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var6 = var5[var11];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot2 = var7;
    var3 = var3.jsxs;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.marginLeft = var11;
    var11 = var10.hairlineWidth;
    var9.height = var11;
    var11 = 4;
    var12 = var5[var11];
    var11 = metroImportDefault;
    var11 = var11.bind(var0)(var12);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var9.backgroundColor = var11;
    var11 = var10.hairlineWidth;
    var10 = -1;
    var10 = var10 * var11;
    var9.marginTop = var10;
    var3.divider = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun44535: for (var _fun44535_ip = 0;;) switch (_fun44535_ip) {
            case 0:
                var0 = arg0;
                var7 = arg1;
                var4 = var0.style;
                var8 = var0.children;
                var _closure2_slot0 = var7;
                var0 = _closure1_slot4;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot3;
                var1 = _closure1_slot1;
                var0 = {};
                var0.style = var4;
                var4 = null;
                var4 = var4 !== var7;
                var7 = !var4;
                if (var4) {
                    _fun44535_ip = 87;
                    continue _fun44535
                }
            case 61:
                var10 = _closure1_slot2;
                var9 = _closure1_slot1;
                var4 = {};
                var11 = var11.divider;
                var4.style = var11;
                var7 = var10.bind(var3)(var9, var4);
            case 87:
                var4 = new Array(2);
                var4[0] = var7;
                var6 = _closure1_slot0;
                var7 = var6.Children;
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    _fun44536: for (var _fun44536_ip = 0;;) switch (_fun44536_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = 0;
                            var1 = arg1;
                            var0 = var4;
                            if (!(var2 === var1)) {
                                _fun44536_ip = 68;
                                continue _fun44536
                            }
                        case 15:
                            var3 = _closure1_slot0;
                            var2 = var3.isValidElement;
                            var2 = var2.bind(var3)(var4);
                            var0 = var4;
                            if (!var2) {
                                _fun44536_ip = 68;
                                continue _fun44536
                            }
                        case 39:
                            var3 = _closure1_slot0;
                            var2 = var3.cloneElement;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.ref = var5;
                            var0 = var2.bind(var3)(var4, var1);
                        case 68:
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var8, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Menu/native/MenuGroup.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MenuGroup = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 2]);