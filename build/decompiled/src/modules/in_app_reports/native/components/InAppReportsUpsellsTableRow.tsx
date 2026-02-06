// modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx
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
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92662: for (var _fun92662_ip = 0;;) switch (_fun92662_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.title;
                var10 = var0.disabledTitle;
                var9 = var0.description;
                var4 = var0.variant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun92662_ip = 34;
                    continue _fun92662
                }
            case 30:
                var4 = 'default';
            case 34:
                var5 = var0.disabled;
                var7 = var0.onPress;
                var6 = var0.icon;
                var2 = _closure1_slot2;
                var1 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 2;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var8 = var12;
                if (!var5) {
                    _fun92662_ip = 102;
                    continue _fun92662
                }
            case 90:
                var11 = null;
                var8 = var12;
                if (!(var11 != var10)) {
                    _fun92662_ip = 102;
                    continue _fun92662
                }
            case 99:
                var8 = var10;
            case 102:
                var0.label = var8;
                var8 = null;
                if (var5) {
                    _fun92662_ip = 114;
                    continue _fun92662
                }
            case 111:
                var8 = var9;
            case 114:
                var0.subLabel = var8;
                var0.onPress = var7;
                var0.icon = var6;
                var0.disabled = var5;
                var0.variant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 4901, 2]);