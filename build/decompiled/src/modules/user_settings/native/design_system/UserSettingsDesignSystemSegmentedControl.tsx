// modules/user_settings/native/design_system/UserSettingsDesignSystemSegmentedControl.tsx
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
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'margin': 16,
        'flex': 1,
        'alignItems': 'center',
        'padding': 40
    };
    var3.container = var8;
    var8 = {
        'backgroundColor': null,
        'borderWidth': 2,
        'borderColor': null,
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': 400
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_STRONG;
    var8.borderColor = var9;
    var3.item = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemSegmentedControl.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: UserSettingsDesignSystemSegmentedControl, environment: var1
        var4 = _closure1_slot3;
        var0 = var4.useState;
        var1 = 0;
        var0 = var0.bind(var4)(var1);
        var2 = _closure1_slot2;
        var3 = undefined;
        var17 = 2;
        var0 = var2.bind(var3)(var0, var17);
        var7 = var0[var1];
        var5 = 1;
        var0 = var0[var5];
        var _closure2_slot0 = var0;
        var8 = var4.useState;
        var0 = 3;
        var0 = var8.bind(var4)(var0);
        var0 = var2.bind(var3)(var0, var17);
        var16 = var0[var1];
        var _closure2_slot1 = var16;
        var0 = var0[var5];
        var _closure2_slot2 = var0;
        var0 = _closure1_slot8;
        var8 = var0.bind(var3)();
        var0 = function(arg0) { // Original name: useSegmentedControlItems, environment: var15
            var5 = arg0;
            var _closure3_slot0 = var5;
            var3 = _closure1_slot8;
            var2 = undefined;
            var4 = var3.bind(var2)();
            var _closure3_slot1 = var4;
            var3 = _closure1_slot3;
            var2 = var3.useMemo;
            var1 = new Array(2);
            var1[0] = var5;
            var4 = var4.item;
            var1[1] = var4;
            var0 = function() { // Environment: var0
                _fun87756: for (var _fun87756_ip = 0;;) switch (_fun87756_ip) {
                    case 0:
                        var0 = new Array(0);
                        var1 = _closure3_slot0;
                        var10 = 0;
                        var1 = var10 < var1;
                        var9 = 1;
                        var8 = global;
                        var7 = 'Item ';
                        var6 = 'item-';
                        var4 = 6;
                        var3 = undefined;
                        var2 = 'heading-xxl/bold';
                        if (!var1) {
                            _fun87756_ip = 226;
                            continue _fun87756
                        }
                    case 54:
                        var12 = var0.push;
                        var1 = {};
                        var14 = var10 + var9;
                        var13 = var8.HermesInternal;
                        var13 = var13.concat;
                        var13 = var13.bind(var7)(var14);
                        var1.label = var13;
                        var14 = var10 + var9;
                        var13 = var8.HermesInternal;
                        var13 = var13.concat;
                        var13 = var13.bind(var6)(var14);
                        var1.id = var13;
                        var15 = _closure1_slot7;
                        var14 = _closure1_slot4;
                        var13 = {};
                        var16 = _closure3_slot1;
                        var16 = var16.item;
                        var13.style = var16;
                        var18 = _closure1_slot6;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var4];
                        var16 = var17.bind(var3)(var16);
                        var17 = var16.Text;
                        var16 = {};
                        var16.variant = var2;
                        var20 = var10 + var9;
                        var19 = ['Item '];
                        var19[1] = var20;
                        var16.children = var19;
                        var16 = var18.bind(var3)(var17, var16);
                        var13.children = var16;
                        var13 = var15.bind(var3)(var14, var13);
                        var1.page = var13;
                        var1 = var12.bind(var0)(var1);
                        var10 = var10 + 1;
                        var1 = _closure3_slot0;
                        if (var10 < var1) {
                            _fun87756_ip = 54;
                            continue _fun87756
                        }
                    case 226:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var9 = var0.bind(var3)(var16);
        var14 = _closure1_slot0;
        var18 = _closure1_slot1;
        var0 = 7;
        var0 = var18[var0];
        var2 = var14.bind(var3)(var0);
        var1 = var2.useSegmentedControlState;
        var0 = {};
        var0.items = var9;
        var0.pageWidth = var7;
        var0.defaultIndex = var5;
        var13 = var1.bind(var2)(var0);
        var2 = var4.useCallback;
        var1 = function(arg0) { // Environment: var15
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var2 = var0.width;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = new Array(0);
        var7 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = _closure1_slot4;
        var4 = {};
        var8 = var8.container;
        var4.style = var8;
        var4.onLayout = var7;
        var8 = _closure1_slot6;
        var10 = 8;
        var6 = var18[var10];
        var6 = var14.bind(var3)(var6);
        var7 = var6.Stack;
        var6 = {};
        var9 = 24;
        var6.spacing = var9;
        var9 = 9;
        var9 = var18[var9];
        var9 = var14.bind(var3)(var9);
        var11 = var9.SegmentedControl;
        var9 = {};
        var9.state = var13;
        var11 = var2.bind(var3)(var11, var9);
        var9 = new Array(3);
        var9[0] = var11;
        var11 = 10;
        var11 = var18[var11];
        var11 = var14.bind(var3)(var11);
        var12 = var11.SegmentedControlPages;
        var11 = {};
        var11.state = var13;
        var11 = var2.bind(var3)(var12, var11);
        var9[1] = var11;
        var10 = var18[var10];
        var10 = var14.bind(var3)(var10);
        var11 = var10.Stack;
        var10 = {
            'spacing': 8,
            'direction': 'horizontal'
        };
        var13 = 11;
        var12 = var18[var13];
        var12 = var14.bind(var3)(var12);
        var19 = var12.Button;
        var12 = {
            'text': 'Add Tab',
            'variant': 'active',
            'size': 'sm'
        };
        var20 = 5;
        var20 = var16 >= var20;
        var12.disabled = var20;
        var20 = function() { // Original name: onPress, environment: var15
            var2 = _closure2_slot2;
            var1 = _closure2_slot1;
            var0 = 1;
            var1 = var1 + var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var12.onPress = var20;
        var19 = var2.bind(var3)(var19, var12);
        var12 = new Array(2);
        var12[0] = var19;
        var13 = var18[var13];
        var13 = var14.bind(var3)(var13);
        var14 = var13.Button;
        var13 = {
            'text': 'Remove Tab',
            'variant': 'destructive',
            'size': 'sm'
        };
        var16 = var17 === var16;
        var13.disabled = var16;
        var15 = function() { // Original name: onPress, environment: var15
            var2 = _closure2_slot2;
            var1 = _closure2_slot1;
            var0 = 1;
            var1 = var1 - var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var13.onPress = var15;
        var13 = var2.bind(var3)(var14, var13);
        var12[1] = var13;
        var10.children = var12;
        var10 = var8.bind(var3)(var11, var10);
        var9[2] = var10;
        var6.children = var9;
        var6 = var8.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 3900, 7757, 4039, 8149, 7765, 4043, 2]);