// modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 16;
    var8.paddingHorizontal = var10;
    var3.headerContainer = var8;
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'paddingHorizontal': 16,
        'paddingBottom': 16,
        'paddingTop': 32
    };
    var3.container = var8;
    var8 = {};
    var10 = 12;
    var8.marginBottom = var10;
    var3.image = var8;
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.textContainer = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 4
    };
    var3.text = var8;
    var8 = {
        'paddingBottom': 0,
        'paddingTop': 0
    };
    var3.fullHeightContentContainer = var8;
    var8 = {};
    var8.flexGrow = var9;
    var3.fullHeightScrollContent = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: NoResults, environment: var1
        _fun72798: for (var _fun72798_ip = 0;;) switch (_fun72798_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.title;
                var17 = var0.subtitle;
                var11 = var0.image;
                var5 = var0.children;
                var9 = var0.containerStyle;
                var10 = var0.fullHeight;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun72798_ip = 45;
                    continue _fun72798
                }
            case 43:
                var10 = false;
            case 45:
                var0 = _closure1_slot8;
                var18 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var18.headerContainer;
                var4 = new Array(1);
                var4[0] = var6;
                var0.style = var4;
                var4 = false;
                var0.alwaysBounceVertical = var4;
                var4 = var10;
                if (!var10) {
                    _fun72798_ip = 103;
                    continue _fun72798
                }
            case 97:
                var4 = var18.fullHeightScrollContent;
            case 103:
                var0.contentContainerStyle = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot3;
                var4 = {};
                var12 = var18.container;
                var8 = new Array(3);
                var8[0] = var12;
                if (!var10) {
                    _fun72798_ip = 140;
                    continue _fun72798
                }
            case 134:
                var10 = var18.fullHeightContentContainer;
            case 140:
                var8[1] = var10;
                var8[2] = var9;
                var4.style = var8;
                var10 = _closure1_slot6;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var18.image;
                var8.style = var12;
                var13 = null;
                if (!(var13 == var11)) {
                    _fun72798_ip = 198;
                    continue _fun72798
                }
            case 178:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var12 = 4;
                var12 = var16[var12];
                var11 = var15.bind(var3)(var12);
            case 198:
                var8.source = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot3;
                var9 = {};
                var12 = var18.textContainer;
                var9.style = var12;
                var16 = _closure1_slot6;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var19 = 5;
                var12 = var12[var19];
                var12 = var15.bind(var3)(var12);
                var15 = var12.Text;
                var12 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var18.text;
                var12.style = var21;
                var12.children = var20;
                var15 = var16.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                var15 = var13 != var17;
                var13 = null;
                if (!var15) {
                    _fun72798_ip = 374;
                    continue _fun72798
                }
            case 315:
                var16 = _closure1_slot6;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var19];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-xs/medium',
                    'color': 'interactive-text-default'
                };
                var18 = var18.text;
                var14.style = var18;
                var14.children = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 374:
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 9112, 3895, 2]);