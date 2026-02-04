// design/components/Menu/native/MenuItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'width': 20,
        'height': 20
    };
    var3.formIcon = var9;
    var9 = {
        'fontSize': 14,
        'fontWeight': '500'
    };
    var3.formLabel = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun44535: for (var _fun44535_ip = 0;;) switch (_fun44535_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.label;
                var2 = var0.IconComponent;
                var5 = var0.iconSource;
                var8 = var0.showIconFirst;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun44535_ip = 35;
                    continue _fun44535
                }
            case 33:
                var8 = false;
            case 35:
                var13 = var0.style;
                var12 = var0.disabled;
                if (!(var12 === var3)) {
                    _fun44535_ip = 51;
                    continue _fun44535
                }
            case 49:
                var12 = false;
            case 51:
                var0 = var0.action;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var3;
                var0 = _closure1_slot5;
                var9 = var0.bind(var3)();
                var7 = _closure1_slot3;
                var1 = var7.useContext;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 3;
                var0 = var14[var0];
                var0 = var11.bind(var3)(var0);
                var0 = var0.MenuContext;
                var0 = var1.bind(var7)(var0);
                var0 = var0.menuClose;
                _closure2_slot1 = var0;
                var11 = null;
                if (!(var11 == var2)) {
                    _fun44535_ip = 189;
                    continue _fun44535
                }
            case 132:
                var0 = var11 != var5;
                var7 = null;
                if (!var0) {
                    _fun44535_ip = 187;
                    continue _fun44535
                }
            case 141:
                var14 = _closure1_slot4;
                var1 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 4;
                var0 = var15[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.source = var5;
                var15 = var9.formIcon;
                var0.style = var15;
                var7 = var14.bind(var3)(var1, var0);
            case 187:
                _fun44535_ip = 209;
                continue _fun44535;
            case 189:
                var1 = _closure1_slot4;
                var0 = {};
                var14 = 'sm';
                var0.size = var14;
                var7 = var1.bind(var3)(var2, var0);
            case 209:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 5;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var14 = arg1;
                var0.ref = var14;
                var0.style = var13;
                var13 = 'menuitem';
                var0.accessibilityRole = var13;
                var0.disabled = var12;
                var13 = var11 != var5;
                var12 = null;
                if (!var13) {
                    _fun44535_ip = 277;
                    continue _fun44535
                }
            case 269:
                var12 = null;
                if (!var8) {
                    _fun44535_ip = 277;
                    continue _fun44535
                }
            case 274:
                var12 = var7;
            case 277:
                var0.leading = var12;
                var12 = var11 == var5;
                var5 = null;
                if (var12) {
                    _fun44535_ip = 299;
                    continue _fun44535
                }
            case 291:
                var5 = null;
                if (var8) {
                    _fun44535_ip = 299;
                    continue _fun44535
                }
            case 296:
                var5 = var7;
            case 299:
                var0.trailing = var5;
                var8 = 'string';
                var7 = typeof var10;
                var5 = var10;
                if (!(var8 === var7)) {
                    _fun44535_ip = 364;
                    continue _fun44535
                }
            case 318:
                var8 = _closure1_slot4;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 6;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.text = var10;
                var9 = var9.formLabel;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 364:
                var0.label = var5;
                var4 = function() {
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Menu/native/MenuItem.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MenuItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 4883, 4086, 4891, 4911, 2]);