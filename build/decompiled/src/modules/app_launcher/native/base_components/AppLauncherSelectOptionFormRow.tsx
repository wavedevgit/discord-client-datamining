// modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'backgroundColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'flex': 1
    };
    var9 = 3;
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
    var3.formRow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AppLauncherSelectOptionFormRow, environment: var1
        _fun108548: for (var _fun108548_ip = 0;;) switch (_fun108548_ip) {
            case 0:
                var2 = arg0;
                var13 = var2.style;
                var11 = var2.option;
                var7 = var2.selected;
                var0 = var2.selectedItemName;
                var _closure2_slot0 = var0;
                var14 = var2.autoFocus;
                var1 = {
                    'style': 0,
                    'option': 0,
                    'selected': 0,
                    'selectedItemName': 0,
                    'autoFocus': 0
                };
                var17 = var1;
                var16 = null;
                var0 = silentSetPrototypeOf(var17, var16);
                var17 = {};
                var16 = var2;
                var15 = var1;
                var4 = copyDataProperties(var17, var16, var15);
                var0 = _closure1_slot4;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = var4.onPress;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 4;
                var0 = var12[var0];
                var1 = var10.bind(var3)(var0);
                var0 = var1.useAnimationDelayedAutoFocus;
                var0 = var0.bind(var1)(var14, var2);
                var2 = _closure1_slot3;
                var0 = 5;
                var0 = var12[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {
                    'start': true,
                    'end': true
                };
                var14 = var8.formRow;
                var8 = new Array(2);
                var8[0] = var14;
                var8[1] = var13;
                var0.style = var8;
                var8 = 6;
                var8 = var12[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.Text;
                var8 = {};
                var12 = 'text-md/medium';
                if (!var7) {
                    _fun108548_ip = 207;
                    continue _fun108548
                }
            case 203:
                var12 = 'text-sm/medium';
            case 207:
                var8.variant = var12;
                var12 = 'text-default';
                if (!var7) {
                    _fun108548_ip = 226;
                    continue _fun108548
                }
            case 220:
                var12 = 'interactive-text-default';
            case 226:
                var8.color = var12;
                var12 = 1;
                var8.lineClamp = var12;
                var11 = var11.displayName;
                var8.children = var11;
                var8 = var2.bind(var3)(var10, var8);
                var0.label = var8;
                var5 = null;
                if (!var7) {
                    _fun108548_ip = 269;
                    continue _fun108548
                }
            case 262:
                var5 = function() { // Environment: var6
                    var3 = _closure1_slot3;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'variant': 'text-md/medium',
                        'color': 'text-default',
                        'lineClamp': 1
                    };
                    var4 = _closure2_slot0;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
            case 269:
                var0.subLabel = var5;
                var7 = _closure1_slot3;
                var12 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 7;
                var5 = var10[var8];
                var6 = var12.bind(var3)(var5);
                var5 = {};
                var11 = 8;
                var11 = var10[var11];
                var11 = var12.bind(var3)(var11);
                var5.source = var11;
                var9 = _closure1_slot0;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.IconSizes;
                var8 = var8.SMALL_20;
                var5.size = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.trailing = var5;
                var17 = var0;
                var16 = var4;
                var4 = copyDataProperties(var17, var16);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 13960, 5335, 3895, 4039, 4863, 2]);