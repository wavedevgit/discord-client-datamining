// modules/search/native/components/tabs/pages/ErrorScreen.tsx
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'top': '10%'
    };
    var3.container = var9;
    var9 = {};
    var9.flex = var10;
    var3.pressable = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 16,
        'width': '75%'
    };
    var3.text = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var8 = var1.text;
        var _closure2_slot0 = var8;
        var1 = _closure1_slot6;
        var3 = undefined;
        var9 = var1.bind(var3)();
        var5 = _closure1_slot2;
        var2 = var5.useEffect;
        var1 = new Array(1);
        var1[0] = var8;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var4 = var1.AccessibilityAnnouncer;
            var3 = var4.announce;
            var2 = _closure2_slot0;
            var1 = 'polite';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var9.container;
        var0.style = var5;
        var7 = _closure1_slot4;
        var6 = _closure1_slot0;
        var10 = _closure1_slot1;
        var4 = 5;
        var4 = var10[var4];
        var4 = var6.bind(var3)(var4);
        var5 = var4.NoResultsAlt;
        var4 = {};
        var11 = 'contain';
        var4.resizeMode = var11;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 6;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-sm/medium',
            'color': 'text-muted'
        };
        var9 = var9.text;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
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
    var3 = 'modules/search/native/components/tabs/pages/ErrorScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3119, 8105, 3895, 2]);