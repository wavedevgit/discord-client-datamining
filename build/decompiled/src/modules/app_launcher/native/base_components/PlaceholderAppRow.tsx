// modules/app_launcher/native/base_components/PlaceholderAppRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
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
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 32,
        'height': 32
    };
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var9;
    var3.loadingAppIcon = var8;
    var8 = {
        'backgroundColor': null,
        'height': 16,
        'marginBottom': 4,
        'borderRadius': null,
        'alignSelf': 'flex-start'
    };
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var9;
    var12 = 16;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var9 = 'flex-start';
    var3.loadingTextPlaceholder = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var13;
    var8.height = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var8.borderRadius = var10;
    var8.alignSelf = var9;
    var3.loadingTextPlaceholderSmall = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/base_components/PlaceholderAppRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PlaceholderAppRow, environment: var1
        _fun108056: for (var _fun108056_ip = 0;;) switch (_fun108056_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.isFirstRow;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun108056_ip = 17;
                    continue _fun108056
                }
            case 15:
                var5 = false;
            case 17:
                var4 = var0.isLastRow;
                if (!(var4 === var3)) {
                    _fun108056_ip = 29;
                    continue _fun108056
                }
            case 27:
                var4 = false;
            case 29:
                var0 = _closure1_slot4;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 5;
                var2 = var7[var0];
                var11 = var1.bind(var3)(var2);
                var10 = var11.usePlaceholderWidth;
                var9 = 10;
                var2 = 50;
                var16 = var10.bind(var11)(var9, var2);
                var0 = var7[var0];
                var10 = var1.bind(var3)(var0);
                var9 = var10.usePlaceholderWidth;
                var2 = 30;
                var0 = 90;
                var13 = var9.bind(var10)(var2, var0);
                var2 = _closure1_slot3;
                var0 = 6;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var7 = _closure1_slot2;
                var6 = {};
                var9 = var8.loadingAppIcon;
                var6.style = var9;
                var6 = var2.bind(var3)(var7, var6);
                var0.icon = var6;
                var6 = {};
                var10 = var8.loadingTextPlaceholder;
                var9 = new Array(2);
                var9[0] = var10;
                var14 = {};
                var10 = global;
                var11 = var10.HermesInternal;
                var15 = var11.concat;
                var12 = '';
                var11 = '%';
                var15 = var15.bind(var12)(var16, var11);
                var14.width = var15;
                var9[1] = var14;
                var6.style = var9;
                var6 = var2.bind(var3)(var7, var6);
                var0.label = var6;
                var6 = {};
                var9 = var8.loadingTextPlaceholderSmall;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var10 = var10.HermesInternal;
                var10 = var10.concat;
                var10 = var10.bind(var12)(var13, var11);
                var9.width = var10;
                var8[1] = var9;
                var6.style = var8;
                var6 = var2.bind(var3)(var7, var6);
                var0.subLabel = var6;
                var6 = 1;
                var0.subLabelLineClamp = var6;
                var0.start = var5;
                var0.end = var4;
                var4 = function() { // Original name: onPress, environment: var4
                    var0 = undefined;
                    return var0;
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 13863, 4854, 2]);