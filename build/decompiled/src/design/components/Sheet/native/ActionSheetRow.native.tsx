// design/components/Sheet/native/ActionSheetRow.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun61921: for (var _fun61921_ip = 0;;) switch (_fun61921_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.label;
                var11 = var2.variant;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun61921_ip = 23;
                    continue _fun61921
                }
            case 19:
                var11 = 'default';
            case 23:
                var9 = var2.arrow;
                var8 = var2.icon;
                var1 = {
                    'label': 0,
                    'variant': 0,
                    'arrow': 0,
                    'icon': 0
                };
                var14 = null;
                var15 = var1;
                var0 = silentSetPrototypeOf(var15, var14);
                var15 = {};
                var14 = var2;
                var13 = var1;
                var14 = copyDataProperties(var15, var14, var13);
                var2 = _closure1_slot4;
                var0 = _closure1_slot5;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var11;
                var6 = _closure1_slot4;
                var5 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 3;
                var4 = var12[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TableRow;
                var4 = {};
                var4.variant = var11;
                var4.label = var10;
                var4.arrow = var9;
                var4.icon = var8;
                var15 = var4;
                var7 = copyDataProperties(var15, var14);
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var8 = var4.bind(var0)(var7);
    var _closure1_slot2 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var7 = var8.createContext;
    var4 = 'default';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = function arg0() {
        _fun61922: for (var _fun61922_ip = 0;;) switch (_fun61922_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.source;
                var6 = var0.IconComponent;
                var3 = _closure1_slot2;
                var2 = var3.useContext;
                var1 = _closure1_slot5;
                var4 = var2.bind(var3)(var1);
                var3 = _closure1_slot4;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.TableRowIcon;
                var0 = {};
                var0.source = var5;
                var5 = null;
                var7 = var5 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun61922_ip = 87;
                    continue _fun61922
                }
            case 84:
                var5 = var6;
            case 87:
                var0.IconComponent = var5;
                var0.variant = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var3.Icon = var4;
    var4 = function arg0() {
        var0 = arg0;
        var6 = var0.children;
        var7 = var0.title;
        var8 = var0.hasIcons;
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 5;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var5 = var4.TableRowGroup;
        var4 = {};
        var4.hasIcons = var8;
        var4.title = var7;
        var4.children = var6;
        var4 = var3.bind(var0)(var5, var4);
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3.Group = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/ActionSheetRow.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ActionSheetRow = var3;
    var1 = function arg0() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 6;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var5 = arg0;
        var6 = var0;
        var4 = copyDataProperties(var6, var5);
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.ActionSheetSwitchRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4898, 4905, 5363, 5416, 2]);