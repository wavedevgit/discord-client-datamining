// modules/forums/native/ForumChannelEmptyState.tsx
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
    var7 = var3.View;
    var _closure1_slot3 = var7;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var7 = var3.jsxs;
    var _closure1_slot6 = var7;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var9;
    var9 = {
        'height': 480,
        'width': 480,
        'borderRadius': 240,
        'position': 'absolute',
        'backgroundColor': null,
        'opacity': 0.5,
        'zIndex': 0
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var3.outerCircle = var9;
    var9 = {
        'height': 400,
        'width': 400,
        'borderRadius': 200,
        'position': 'absolute',
        'backgroundColor': null,
        'zIndex': 1
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var3.innerCircle = var9;
    var9 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'justifyContent': 'center',
        'alignItems': 'center',
        'zIndex': 2,
        'position': 'relative'
    };
    var3.content = var9;
    var9 = {
        'width': 120,
        'height': 80
    };
    var3.image = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 16,
        'marginHorizontal': 20
    };
    var3.title = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 4,
        'marginHorizontal': 20
    };
    var3.subtext = var9;
    var9 = {
        'width': 32,
        'height': 32
    };
    var3.spinner = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun91455: for (var _fun91455_ip = 0;;) switch (_fun91455_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.loading;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun91455_ip = 17;
                    continue _fun91455
                }
            case 15:
                var4 = true;
            case 17:
                var10 = var0.topViewHeight;
                if (!(var10 === var3)) {
                    _fun91455_ip = 29;
                    continue _fun91455
                }
            case 27:
                var10 = 0;
            case 29:
                var21 = var0.channelName;
                var20 = var0.tagFilter;
                var0 = _closure1_slot8;
                var12 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var18 = 5;
                var0 = var2[var18];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useThemeContext;
                var0 = var0.bind(var1)();
                var17 = var0.theme;
                var1 = _closure1_slot1;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var11 = var0.bottom;
                var9 = var0.top;
                var0 = var20.size;
                var8 = 0;
                var15 = var0 > var8;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var12.container;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                if (var4) {
                    _fun91455_ip = 165;
                    continue _fun91455
                }
            case 157:
                var9 = var11 + var9;
                var8 = var9 + var10;
            case 165:
                var7.marginBottom = var8;
                var6[1] = var7;
                var0.style = var6;
                if (var4) {
                    _fun91455_ip = 727;
                    continue _fun91455
                }
            case 183:
                var7 = _closure1_slot6;
                var6 = _closure1_slot7;
                var4 = {};
                var9 = _closure1_slot3;
                var8 = {};
                var10 = var12.content;
                var8.style = var10;
                var13 = _closure1_slot5;
                var11 = _closure1_slot4;
                var10 = {};
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var18];
                var16 = var16.bind(var3)(var14);
                var14 = var16.isThemeLight;
                var14 = var14.bind(var16)(var17);
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                if (var14) {
                    _fun91455_ip = 271;
                    continue _fun91455
                }
            case 257:
                var14 = 9;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                _fun91455_ip = 283;
                continue _fun91455;
            case 271:
                var16 = 8;
                var16 = var18[var16];
                var14 = var17.bind(var3)(var16);
            case 283:
                var10.source = var14;
                var14 = var12.image;
                var10.style = var14;
                var11 = var13.bind(var3)(var11, var10);
                var10 = new Array(3);
                var10[0] = var11;
                var14 = _closure1_slot5;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var16 = 10;
                var11 = var11[var16];
                var11 = var13.bind(var3)(var11);
                var13 = var11.Text;
                var11 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var12.title;
                var11.style = var17;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var22 = 11;
                var17 = var18[var22];
                var17 = var19.bind(var3)(var17);
                var24 = var17.intl;
                if (var15) {
                    _fun91455_ip = 427;
                    continue _fun91455
                }
            case 393:
                var23 = var24.string;
                var17 = var18[var22];
                var17 = var19.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.PwTMG0;
                var17 = var23.bind(var24)(var17);
                _fun91455_ip = 472;
                continue _fun91455;
            case 427:
                var23 = var24.formatToPlainString;
                var18 = var18[var22];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18.lvPci0;
                var18 = {};
                var25 = var20.size;
                var18.numTags = var25;
                var17 = var23.bind(var24)(var19, var18);
            case 472:
                var11.children = var17;
                var11 = var14.bind(var3)(var13, var11);
                var10[1] = var11;
                var14 = _closure1_slot5;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var16];
                var11 = var13.bind(var3)(var11);
                var13 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var16 = var12.subtext;
                var11.style = var16;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var18 = var16[var22];
                var18 = var17.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.formatToPlainString;
                var16 = var16[var22];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                if (var15) {
                    _fun91455_ip = 605;
                    continue _fun91455
                }
            case 582:
                var17 = var16.YtsXFD;
                var15 = {};
                var15.channelName = var21;
                var15 = var18.bind(var19)(var17, var15);
                _fun91455_ip = 631;
                continue _fun91455;
            case 605:
                var17 = var16.AAeye1;
                var16 = {};
                var20 = var20.size;
                var16.numTags = var20;
                var15 = var18.bind(var19)(var17, var16);
            case 631:
                var11.children = var15;
                var11 = var14.bind(var3)(var13, var11);
                var10[2] = var11;
                var8.children = var10;
                var9 = var7.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var11 = _closure1_slot5;
                var10 = _closure1_slot3;
                var9 = {};
                var13 = var12.innerCircle;
                var9.style = var13;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var9 = {};
                var12 = var12.outerCircle;
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var4.children = var8;
                var4 = var7.bind(var3)(var6, var4);
                _fun91455_ip = 759;
                continue _fun91455;
            case 727:
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 7;
                var5 = var8[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var4 = var7.bind(var3)(var6, var5);
            case 759:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/ForumChannelEmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3206, 1568, 11879, 11881, 11882, 3941, 1234, 2]);