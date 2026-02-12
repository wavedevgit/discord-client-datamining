// modules/parent_tools/native/FamilyCenterLinkingBanner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun81687: for (var _fun81687_ip = 0;;) switch (_fun81687_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.header;
                var12 = var0.description;
                var15 = var0.index;
                var14 = var0.isLast;
                var0 = _closure1_slot13;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var10.row;
                var0.style = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var10.circle;
                var4.style = var7;
                var9 = _closure1_slot5;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var13 = 10;
                var7 = var7[var13];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'heading-md/semibold',
                    'color': 'text-brand'
                };
                var7.children = var15;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var9 = var10.rowContent;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                if (var14) {
                    _fun81687_ip = 182;
                    continue _fun81687
                }
            case 177:
                var9 = var10.gap;
            case 182:
                var8[1] = var9;
                var5.style = var8;
                var15 = _closure1_slot5;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var8 = var9[var13];
                var8 = var10.bind(var3)(var8);
                var14 = var8.Text;
                var8 = {};
                var17 = 'heading-sm/bold';
                var8.variant = var17;
                var8.children = var16;
                var14 = var15.bind(var3)(var14, var8);
                var8 = new Array(2);
                var8[0] = var14;
                var11 = _closure1_slot5;
                var9 = var9[var13];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
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
    var8 = var3.jsx;
    var _closure1_slot5 = var8;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var6 = var5[var3];
    var12 = var4.bind(var0)(var6);
    var11 = var12.createStyles;
    var6 = {};
    var13 = {
        'backgroundColor': null,
        'marginVertical': null,
        'paddingTop': 0,
        'alignItems': 'center',
        'borderRadius': null,
        'elevation': 2,
        'overflow': 'hidden'
    };
    var9 = 4;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var13.backgroundColor = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var13.marginVertical = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var13.borderRadius = var14;
    var6.container = var13;
    var13 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var13.padding = var14;
    var6.content = var13;
    var13 = {
        'width': '100%',
        'height': 175
    };
    var14 = '100%';
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var13.marginBottom = var15;
    var6.art = var13;
    var13 = {};
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var13.marginBottom = var15;
    var6.header = var13;
    var6 = var11.bind(var12)(var6);
    var _closure1_slot7 = var6;
    var6 = var5[var3];
    var12 = var4.bind(var0)(var6);
    var11 = var12.createStyles;
    var6 = {};
    var13 = {};
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var13.marginTop = var15;
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var13.paddingHorizontal = var15;
    var13.width = var14;
    var6.container = var13;
    var6 = var11.bind(var12)(var6);
    var _closure1_slot8 = var6;
    var11 = 12;
    var6 = var5[var11];
    var6 = var4.bind(var0)(var6);
    var12 = var6.FamilyCenterParentQRCodeButton;
    var6 = {};
    var6 = var8.bind(var0)(var12, var6);
    var _closure1_slot9 = var6;
    var12 = function() {
        var0 = _closure1_slot8;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var4.container;
        var0.style = var4;
        var6 = _closure1_slot5;
        var8 = _closure1_slot14;
        var4 = {};
        var7 = 1;
        var4.index = var7;
        var11 = _closure1_slot0;
        var13 = _closure1_slot2;
        var10 = 7;
        var7 = var13[var10];
        var7 = var11.bind(var3)(var7);
        var15 = var7.intl;
        var14 = var15.string;
        var12 = _closure1_slot1;
        var9 = 8;
        var7 = var13[var9];
        var7 = var12.bind(var3)(var7);
        var7 = var7["7xxAni"];
        var7 = var14.bind(var15)(var7);
        var4.header = var7;
        var7 = var13[var10];
        var7 = var11.bind(var3)(var7);
        var15 = var7.intl;
        var14 = var15.string;
        var7 = var13[var9];
        var7 = var12.bind(var3)(var7);
        var7 = var7["1M9So2"];
        var7 = var14.bind(var15)(var7);
        var4.description = var7;
        var6 = var6.bind(var3)(var8, var4);
        var4 = new Array(4);
        var4[0] = var6;
        var7 = _closure1_slot5;
        var6 = {};
        var14 = 2;
        var6.index = var14;
        var14 = var13[var10];
        var14 = var11.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var13[var9];
        var14 = var12.bind(var3)(var14);
        var14 = var14["AXgx+a"];
        var14 = var15.bind(var16)(var14);
        var6.header = var14;
        var14 = var13[var10];
        var14 = var11.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var13[var9];
        var14 = var12.bind(var3)(var14);
        var14 = var14.GzMFnb;
        var14 = var15.bind(var16)(var14);
        var6.description = var14;
        var6 = var7.bind(var3)(var8, var6);
        var4[1] = var6;
        var7 = _closure1_slot5;
        var6 = {};
        var14 = 3;
        var6.index = var14;
        var14 = var13[var10];
        var14 = var11.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var13[var9];
        var14 = var12.bind(var3)(var14);
        var14 = var14.MZn1tG;
        var14 = var15.bind(var16)(var14);
        var6.header = var14;
        var10 = var13[var10];
        var10 = var11.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9["8rLBxD"];
        var9 = var10.bind(var11)(var9);
        var6.description = var9;
        var9 = true;
        var6.isLast = var9;
        var6 = var7.bind(var3)(var8, var6);
        var4[2] = var6;
        var5 = _closure1_slot9;
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var6 = {};
    var6 = var8.bind(var0)(var12, var6);
    var _closure1_slot10 = var6;
    var6 = {};
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var13 = var12.FamilyCenterTeenQRCodeButton;
    var12 = {};
    var12 = var8.bind(var0)(var13, var12);
    var6.children = var12;
    var6 = var8.bind(var0)(var7, var6);
    var _closure1_slot11 = var6;
    var7 = function() {
        var0 = _closure1_slot11;
        return var0;
    };
    var6 = {};
    var6 = var8.bind(var0)(var7, var6);
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'flex-start'
    };
    var3.row = var8;
    var8 = {};
    var8.marginBottom = var11;
    var3.gap = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden',
        'width': 32,
        'height': 32
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var9;
    var3.circle = var8;
    var8 = {
        'marginLeft': 12,
        'flex': 1
    };
    var3.rowContent = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterLinkingBanner.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun81688: for (var _fun81688_ip = 0;;) switch (_fun81688_ip) {
            case 0:
                var0 = _closure1_slot7;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var10 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 5;
                var0 = var15[var0];
                var0 = var10.bind(var3)(var0);
                var5 = var0.bind(var3)();
                var12 = _closure1_slot0;
                var1 = 6;
                var0 = var15[var1];
                var9 = var12.bind(var3)(var0);
                var8 = var9.useAgeSpecificText;
                var7 = 7;
                var0 = var15[var7];
                var0 = var12.bind(var3)(var0);
                var11 = var0.intl;
                var4 = var11.string;
                var0 = 8;
                var2 = var15[var0];
                var2 = var10.bind(var3)(var2);
                var2 = var2.zUCWEL;
                var4 = var4.bind(var11)(var2);
                var2 = var15[var7];
                var2 = var12.bind(var3)(var2);
                var13 = var2.intl;
                var11 = var13.string;
                var2 = var15[var0];
                var2 = var10.bind(var3)(var2);
                var2 = var2.B0NPbp;
                var2 = var11.bind(var13)(var2);
                var16 = var8.bind(var9)(var4, var2);
                var1 = var15[var1];
                var4 = var12.bind(var3)(var1);
                var2 = var4.useAgeSpecificText;
                var1 = var15[var7];
                var1 = var12.bind(var3)(var1);
                var11 = var1.intl;
                var9 = var11.format;
                var1 = var15[var0];
                var1 = var10.bind(var3)(var1);
                var8 = var1.yMnoDl;
                var1 = {};
                var13 = 'https://support.discord.com/hc/articles/14155060633623';
                var1.link = var13;
                var1 = var9.bind(var11)(var8, var1);
                var7 = var15[var7];
                var7 = var12.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var0 = var15[var0];
                var0 = var10.bind(var3)(var0);
                var0 = var0.JsAEDi;
                var0 = var7.bind(var8)(var0);
                var14 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var17.container;
                var0.style = var4;
                var8 = _closure1_slot5;
                var7 = _closure1_slot4;
                var4 = {};
                var9 = 9;
                var9 = var15[var9];
                var9 = var10.bind(var3)(var9);
                var4.source = var9;
                var9 = var17.art;
                var4.style = var9;
                var9 = 'resize';
                var4.resizeMethod = var9;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                var9 = _closure1_slot6;
                var8 = _closure1_slot3;
                var7 = {};
                var10 = var17.content;
                var7.style = var10;
                var13 = _closure1_slot5;
                var10 = 10;
                var10 = var15[var10];
                var10 = var12.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var17 = var17.header;
                var10.style = var17;
                var17 = 'heading-lg/semibold';
                var10.variant = var17;
                var10.children = var16;
                var11 = var13.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot5;
                var11 = 11;
                var11 = var15[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.TextWithIOSLinkWorkaround;
                var11 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4[1] = var7;
                if (var5) {
                    _fun81688_ip = 502;
                    continue _fun81688
                }
            case 496:
                var5 = _closure1_slot12;
                _fun81688_ip = 506;
                continue _fun81688;
            case 502:
                var5 = _closure1_slot10;
            case 506:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 6603, 10322, 1234, 1860, 10369, 3938, 5384, 10314, 2]);