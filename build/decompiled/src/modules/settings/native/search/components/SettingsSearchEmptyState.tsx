// modules/settings/native/search/components/SettingsSearchEmptyState.tsx
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
    var3 = 1;
    var3 = var5[var3];
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
    var10 = 24;
    var9 = {
        'paddingTop': 24,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var9;
    var9 = {};
    var9.marginTop = var10;
    var3.textContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function() {
        var0 = _closure1_slot6;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var5 = _closure1_slot2;
        var2 = var5.useEffect;
        var1 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var0 = 4;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var4 = var1.AccessibilityAnnouncer;
            var3 = var4.announce;
            var1 = 5;
            var2 = var7[var1];
            var2 = var6.bind(var0)(var2);
            var5 = var2.intl;
            var2 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.zihbmv;
            var2 = var2.bind(var5)(var1);
            var1 = 'polite';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var7.container;
        var0.style = var5;
        var10 = _closure1_slot4;
        var14 = _closure1_slot0;
        var15 = _closure1_slot1;
        var4 = 6;
        var4 = var15[var4];
        var4 = var14.bind(var3)(var4);
        var5 = var4.NoResultsAlt;
        var4 = {};
        var6 = 'contain';
        var4.resizeMode = var6;
        var5 = var10.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 7;
        var5 = var15[var5];
        var5 = var14.bind(var3)(var5);
        var6 = var5.Stack;
        var5 = {
            'style': null,
            'align': 'center',
            'justify': 'center'
        };
        var7 = var7.textContainer;
        var5.style = var7;
        var8 = 8;
        var7 = var15[var8];
        var7 = var14.bind(var3)(var7);
        var9 = var7.Text;
        var7 = {
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var11 = 5;
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var16 = var12.intl;
        var13 = var16.string;
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.zihbmv;
        var12 = var13.bind(var16)(var12);
        var7.children = var12;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var8 = var15[var8];
        var8 = var14.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'variant': 'text-xs/medium',
            'color': 'text-muted'
        };
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.XclvsB;
        var11 = var12.bind(var13)(var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var5.children = var7;
        var5 = var2.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/settings/native/search/components/SettingsSearchEmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3162, 1234, 8173, 4081, 3943, 2]);