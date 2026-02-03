// modules/media_keyboard/native/components/MediaKeyboardFooter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot3 = var4;
    var4 = var1.Image;
    var _closure1_slot4 = var4;
    var1 = var1.ActivityIndicator;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot6 = var4;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var6[var1];
    var9 = var5.bind(var0)(var1);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {
        'padding': null,
        'height': 280,
        'alignItems': 'center'
    };
    var11 = 4;
    var1 = var6[var11];
    var1 = var12.bind(var0)(var1);
    var1 = var1.spacing;
    var1 = var1.PX_16;
    var10.padding = var1;
    var1 = 280;
    var4.container = var10;
    var10 = {
        'textAlign': 'center',
        'marginBottom': 16
    };
    var4.label = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var10.marginBottom = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_48;
    var10.height = var13;
    var4.buttonWrapper = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGHEST;
    var10.color = var13;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10.margin = var11;
    var4.loadingSpinner = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun75713: for (var _fun75713_ip = 0;;) switch (_fun75713_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.disabled;
                var14 = var0.onViewAll;
                var0 = _closure1_slot8;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useHasReachedEnd;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun75713_ip = 114;
                    continue _fun75713
                }
            case 60:
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var0 = {};
                var3 = var7.loadingSpinner;
                var0.style = var3;
                var3 = 'large';
                var0.size = var3;
                var3 = var7.loadingSpinner;
                var3 = var3.color;
                var0.color = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun75713_ip = 416;
                continue _fun75713;
            case 114:
                var3 = _closure1_slot7;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var7.container;
                var1.style = var5;
                var8 = _closure1_slot6;
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 6;
                var5 = var11[var5];
                var5 = var16.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {};
                var10 = 'text-sm/normal';
                var5.variant = var10;
                var10 = var7.label;
                var5.style = var10;
                var13 = 7;
                var10 = var11[var13];
                var10 = var16.bind(var4)(var10);
                var17 = var10.intl;
                var15 = var17.string;
                var10 = var11[var13];
                var10 = var16.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.mKSwAW;
                var10 = var15.bind(var17)(var10);
                var5.children = var10;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = {};
                var7 = var7.buttonWrapper;
                var6.style = var7;
                var7 = 8;
                var7 = var11[var7];
                var7 = var16.bind(var4)(var7);
                var10 = var7.Button;
                var7 = {
                    'variant': 'primary',
                    'size': 'sm'
                };
                var7.onPress = var14;
                var14 = var11[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var11[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.ZT24In;
                var13 = var14.bind(var15)(var13);
                var7.text = var13;
                var7.disabled = var12;
                var7 = var8.bind(var4)(var10, var7);
                var6.children = var7;
                var6 = var8.bind(var4)(var2, var6);
                var5[1] = var6;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = _closure1_slot1;
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var6.source = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 416:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardFooter.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FOOTER_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 9576, 3932, 1234, 4075, 9582, 2]);