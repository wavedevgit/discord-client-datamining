// modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'width': '100%',
        'backgroundColor': null,
        'borderRadius': null,
        'alignItems': 'center'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.style;
        var6 = var0.option;
        var1 = var0.initialValue;
        var _closure2_slot0 = var1;
        var1 = var0.onPress;
        var _closure2_slot1 = var1;
        var7 = var0.hasError;
        var1 = _closure1_slot5;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var5 = _closure1_slot3;
        var2 = var5.useState;
        var1 = function() { // Environment: var4
            _fun108171: for (var _fun108171_ip = 0;;) switch (_fun108171_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun108171_ip = 33;
                        continue _fun108171
                    }
                case 16:
                    var2 = _closure2_slot0;
                    var3 = var2.type;
                    var2 = 'text';
                    var0 = var2 === var3;
                case 33:
                    if (!var0) {
                        _fun108171_ip = 53;
                        continue _fun108171
                    }
                case 36:
                    var1 = _closure2_slot0;
                    var2 = var1.text;
                    var1 = 'true';
                    var0 = var1 === var2;
                case 53:
                    return var0;
            }
        };
        var5 = var2.bind(var5)(var1);
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2.bind(var3)(var5, var1);
        var1 = 0;
        var5 = var2[var1];
        var _closure2_slot2 = var5;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot3 = var1;
        var2 = _closure1_slot4;
        var1 = _closure1_slot0;
        var10 = _closure1_slot1;
        var0 = 5;
        var0 = var10[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.FormCheckboxRow;
        var0 = {
            'start': true,
            'end': true
        };
        var10 = var8.container;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var0.style = var8;
        var0.hasError = var7;
        var6 = var6.displayName;
        var0.label = var6;
        var0.selected = var5;
        var4 = function() {
            var4 = _closure2_slot3;
            var1 = _closure2_slot2;
            var3 = !var1;
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var2 = _closure2_slot1;
            var1 = !var1;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 1297, 671, 5342, 2]);