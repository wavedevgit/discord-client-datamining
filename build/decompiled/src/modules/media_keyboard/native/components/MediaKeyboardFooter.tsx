// modules/media_keyboard/native/components/MediaKeyboardFooter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var9 = var1.Image;
    var1 = var1.ActivityIndicator;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.jsx;
    var _closure1_slot5 = var8;
    var1 = var1.jsxs;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var12 = var5.bind(var0)(var1);
    var10 = var12.createStyles;
    var4 = {};
    var13 = {
        'padding': null,
        'height': 280,
        'alignItems': 'center'
    };
    var14 = 4;
    var1 = var6[var14];
    var1 = var11.bind(var0)(var1);
    var1 = var1.spacing;
    var1 = var1.PX_16;
    var13.padding = var1;
    var1 = 280;
    var4.container = var13;
    var13 = {
        'textAlign': 'center',
        'marginBottom': 16
    };
    var4.label = var13;
    var13 = {};
    var15 = var6[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_32;
    var13.marginBottom = var15;
    var15 = var6[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_48;
    var13.height = var15;
    var4.buttonWrapper = var13;
    var13 = {};
    var15 = var6[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGHEST;
    var13.color = var15;
    var14 = var6[var14];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var13.margin = var14;
    var4.loadingSpinner = var13;
    var4 = var10.bind(var12)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var4.source = var10;
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun70632: for (var _fun70632_ip = 0;;) switch (_fun70632_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.disabled;
                var13 = var0.onViewAll;
                var0 = _closure1_slot7;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useHasReachedEnd;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun70632_ip = 114;
                    continue _fun70632
                }
            case 60:
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var3 = var9.loadingSpinner;
                var0.style = var3;
                var3 = 'large';
                var0.size = var3;
                var3 = var9.loadingSpinner;
                var3 = var3.color;
                var0.color = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun70632_ip = 388;
                continue _fun70632;
            case 114:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var9.container;
                var1.style = var5;
                var8 = _closure1_slot5;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 7;
                var5 = var16[var5];
                var5 = var15.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {};
                var10 = 'text-sm/normal';
                var5.variant = var10;
                var10 = var9.label;
                var5.style = var10;
                var12 = 8;
                var10 = var16[var12];
                var10 = var15.bind(var4)(var10);
                var17 = var10.intl;
                var14 = var17.string;
                var10 = var16[var12];
                var10 = var15.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.mKSwAW;
                var10 = var14.bind(var17)(var10);
                var5.children = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var7 = {};
                var9 = var9.buttonWrapper;
                var7.style = var9;
                var9 = 9;
                var9 = var16[var9];
                var9 = var15.bind(var4)(var9);
                var10 = var9.Button;
                var9 = {
                    'variant': 'primary',
                    'size': 'sm'
                };
                var9.onPress = var13;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.ZT24In;
                var12 = var13.bind(var14)(var12);
                var9.text = var12;
                var9.disabled = var11;
                var9 = var8.bind(var4)(var10, var9);
                var7.children = var9;
                var7 = var8.bind(var4)(var2, var7);
                var5[1] = var7;
                var6 = _closure1_slot8;
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 388:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8784, 8785, 3938, 1234, 4090, 2]);