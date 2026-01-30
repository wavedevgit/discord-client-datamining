// modules/threads/native/components/redesign/ThreadListEmpty.tsx
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
    var6 = var3.bind(var0)(var6);
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
    var9 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var9;
    var9 = {};
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var10 = 12;
    var9.padding = var10;
    var3.iconWrapper = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 16,
        'marginHorizontal': 16
    };
    var3.title = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 4,
        'marginHorizontal': 16,
        'marginBottom': 16
    };
    var3.subtext = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun106609: for (var _fun106609_ip = 0;;) switch (_fun106609_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.onCreateThreadPress;
                var0 = _closure1_slot6;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var11.container;
                var0.style = var4;
                var8 = _closure1_slot4;
                var4 = {};
                var5 = var11.iconWrapper;
                var4.style = var5;
                var13 = _closure1_slot1;
                var9 = _closure1_slot2;
                var12 = 5;
                var5 = var9[var12];
                var7 = var13.bind(var3)(var5);
                var5 = {};
                var14 = 6;
                var14 = var9[var14];
                var14 = var13.bind(var3)(var14);
                var5.source = var14;
                var12 = var9[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Sizes;
                var12 = var12.MEDIUM;
                var5.size = var12;
                var5 = var8.bind(var3)(var7, var5);
                var4.children = var5;
                var5 = var8.bind(var3)(var1, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var14 = _closure1_slot0;
                var5 = 7;
                var7 = var9[var5];
                var7 = var14.bind(var3)(var7);
                var12 = var7.Text;
                var7 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'maxFontSizeMultiplier': 2,
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var11.title;
                var7.style = var13;
                var13 = 8;
                var15 = var9[var13];
                var15 = var14.bind(var3)(var15);
                var17 = var15.intl;
                var16 = var17.string;
                var15 = var9[var13];
                var15 = var14.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.HgTQ8p;
                var15 = var16.bind(var17)(var15);
                var7.children = var15;
                var7 = var8.bind(var3)(var12, var7);
                var4[1] = var7;
                var5 = var9[var5];
                var5 = var14.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'maxFontSizeMultiplier': 2,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var11 = var11.subtext;
                var5.style = var11;
                var11 = var9[var13];
                var11 = var14.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var13];
                var9 = var14.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.jmq9GC;
                var9 = var11.bind(var12)(var9);
                var5.children = var9;
                var5 = var8.bind(var3)(var7, var5);
                var4[2] = var5;
                var5 = null;
                var5 = var5 != var10;
                if (!var5) {
                    _fun106609_ip = 452;
                    continue _fun106609
                }
            case 362:
                var8 = _closure1_slot4;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 9;
                var6 = var9[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.Button;
                var6 = {};
                var6.onPress = var10;
                var10 = var9[var13];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.rBIGBL;
                var9 = var10.bind(var11)(var9);
                var6.text = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 452:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/redesign/ThreadListEmpty.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4045, 11764, 3901, 1234, 4043, 2]);