// modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'paddingHorizontal': 0,
        'paddingVertical': 0,
        'backgroundColor': null,
        'flexDirection': 'column',
        'height': '100%'
    };
    var10 = 5;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.container = var9;
    var9 = {};
    var9.flex = var12;
    var3.flex = var9;
    var9 = {};
    var12 = 16;
    var9.paddingHorizontal = var12;
    var3.scroller = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'paddingHorizontal': 16,
        'paddingVertical': 16
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var3.buttonContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        var1 = arg0;
        var10 = var1.children;
        var7 = var1.action;
        var1 = _closure1_slot8;
        var3 = undefined;
        var9 = var1.bind(var3)();
        var5 = _closure1_slot3;
        var2 = var5.useState;
        var1 = 32;
        var6 = var2.bind(var5)(var1);
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2.bind(var3)(var6, var1);
        var1 = 0;
        var15 = var2[var1];
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot0 = var1;
        var2 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 6;
        var1 = var6[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var11 = var1.insets;
        var2 = var5.useCallback;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var2 = var0.height;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = new Array(0);
        var8 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var9.container;
        var0.style = var5;
        var6 = _closure1_slot6;
        var5 = _closure1_slot5;
        var4 = {
            'ref': null,
            'automaticallyAdjustContentInsets': false,
            'keyboardShouldPersistTaps': 'handled'
        };
        var12 = arg1;
        var4.ref = var12;
        var13 = var9.flex;
        var12 = new Array(2);
        var12[0] = var13;
        var13 = {};
        var14 = var11.bottom;
        var14 = var15 + var14;
        var13.marginBottom = var14;
        var12[1] = var13;
        var4.style = var12;
        var12 = var9.scroller;
        var4.contentContainerStyle = var12;
        var4.children = var10;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var10 = var9.buttonContainer;
        var9 = new Array(2);
        var9[0] = var10;
        var10 = {};
        var11 = var11.bottom;
        var10.paddingBottom = var11;
        var9[1] = var10;
        var5.style = var9;
        var5.onLayout = var8;
        var5.children = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 4858, 2]);