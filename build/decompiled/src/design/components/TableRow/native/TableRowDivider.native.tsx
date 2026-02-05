// design/components/TableRow/native/TableRowDivider.native.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.StyleSheet;
    var _closure1_slot2 = var6;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TABLE_DIVIDER_WIDTH;
    var _closure1_slot4 = var6;
    var3 = var3.TABLE_ROW_DIVIDER_PADDING;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun44406: for (var _fun44406_ip = 0;;) switch (_fun44406_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 5;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.CARD_PRIMARY_BG;
                var1.backgroundColor = var3;
                var3 = _closure1_slot4;
                var1.height = var3;
                var3 = 12;
                var5 = arg0;
                if (!var5) {
                    _fun44406_ip = 60;
                    continue _fun44406
                }
            case 56:
                var3 = _closure1_slot5;
            case 60:
                var1.paddingStart = var3;
                var5 = _closure1_slot4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 6;
                var3 = var7[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.isAndroid;
                var6 = var3.bind(var6)();
                var3 = 0;
                if (!var6) {
                    _fun44406_ip = 114;
                    continue _fun44406
                }
            case 104:
                var6 = _closure1_slot2;
                var3 = var6.hairlineWidth;
            case 114:
                var3 = var5 + var3;
                var3 = -var3;
                var1.marginTop = var3;
                var0.container = var1;
                var1 = {};
                var3 = _closure1_slot4;
                var1.height = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.DIVIDER_BACKGROUND;
                var1.backgroundColor = var2;
                var0.divider = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TableRow/native/TableRowDivider.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun44407: for (var _fun44407_ip = 0;;) switch (_fun44407_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.adjustSpacingForIcon;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun44407_ip = 17;
                    continue _fun44407
                }
            case 15:
                var2 = false;
            case 17:
                var1 = _closure1_slot7;
                var5 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var5.container;
                var0.style = var4;
                var4 = {};
                var5 = var5.divider;
                var4.style = var5;
                var4 = var2.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TableRowDivider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4872, 33, 1297, 4873, 478, 4874, 2]);