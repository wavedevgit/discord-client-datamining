// modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var _closure1_slot3 = var3;
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'alignSelf': 'stretch',
        'alignItems': 'flex-start',
        'padding': 16
    };
    var10 = 4;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.container = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var13;
    var8.borderWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var8.borderColor = var12;
    var3.containerSelected = var8;
    var8 = {
        'position': 'absolute',
        'right': 18,
        'top': 18
    };
    var3.indicator = var8;
    var8 = {
        'height': 40,
        'width': 40,
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': 20,
        'justifyContent': 'center',
        'marginBottom': 16
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var3.iconContainer = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var3.iconContainerSelected = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.title = var8;
    var8 = {};
    var9 = 0.5;
    var8.opacity = var9;
    var3.disabled = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116604: for (var _fun116604_ip = 0;;) switch (_fun116604_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.description;
                var16 = var1.icon;
                var12 = var1.title;
                var9 = var1.selected;
                var _closure2_slot0 = var9;
                var11 = var1.style;
                var6 = var1.onPress;
                var7 = var1.disabled;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun116604_ip = 53;
                    continue _fun116604
                }
            case 51:
                var7 = false;
            case 53:
                var _closure2_slot1 = var7;
                var1 = _closure1_slot7;
                var13 = var1.bind(var3)();
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var9;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.selected = var2;
                    var1 = _closure2_slot1;
                    var0.disabled = var1;
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 5;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var14 = var13.container;
                var10 = new Array(4);
                var10[0] = var14;
                var14 = var9;
                if (!var9) {
                    _fun116604_ip = 153;
                    continue _fun116604
                }
            case 147:
                var14 = var13.containerSelected;
            case 153:
                var10[1] = var14;
                var14 = var7;
                if (!var14) {
                    _fun116604_ip = 168;
                    continue _fun116604
                }
            case 163:
                var14 = var13.disabled;
            case 168:
                var10[2] = var14;
                var10[3] = var11;
                var0.style = var10;
                var10 = 'radio';
                var0.accessibilityRole = var10;
                var0.accessibilityState = var4;
                var4 = undefined;
                if (var7) {
                    _fun116604_ip = 201;
                    continue _fun116604
                }
            case 198:
                var4 = var6;
            case 201:
                var0.onPress = var4;
                var11 = _closure1_slot5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.RadioIndicator;
                var4 = {};
                var7 = var13.indicator;
                var4.style = var7;
                var4.active = var9;
                var6 = var11.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var10 = _closure1_slot4;
                var6 = {};
                var14 = var13.iconContainer;
                var7 = new Array(2);
                var7[0] = var14;
                if (!var9) {
                    _fun116604_ip = 295;
                    continue _fun116604
                }
            case 289:
                var9 = var13.iconContainerSelected;
            case 295:
                var7[1] = var9;
                var6.style = var7;
                var7 = _closure1_slot5;
                var15 = _closure1_slot1;
                var9 = _closure1_slot2;
                var14 = 7;
                var14 = var9[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.source = var16;
                var14 = var7.bind(var3)(var15, var14);
                var6.children = var14;
                var6 = var11.bind(var3)(var10, var6);
                var4[1] = var6;
                var6 = _closure1_slot0;
                var5 = 8;
                var10 = var9[var5];
                var10 = var6.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-default'
                };
                var13 = var13.title;
                var10.style = var13;
                var10.children = var12;
                var10 = var7.bind(var3)(var11, var10);
                var4[2] = var10;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-default'
                };
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 6784, 7142, 4086, 3941, 2]);