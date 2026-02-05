// modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
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
        'alignSelf': 'stretch',
        'marginHorizontal': 16,
        'marginBottom': 16
    };
    var3.container = var9;
    var9 = {};
    var10 = 4;
    var11 = var5[var10];
    var11 = var6.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var11;
    var3.borderColor = var9;
    var9 = {
        'lineHeight': 16,
        'marginBottom': 8
    };
    var3.title = var9;
    var9 = {
        'minHeight': 40,
        'borderRadius': null,
        'borderWidth': 1,
        'padding': 8
    };
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var3.chatItemContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var15 = var6;
    var3 = new var15[var3](var14);
    var7 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var7;
    var6 = var7.setOptions;
    var3 = {
        'renderCodedLinks': false,
        'renderGiftCode': false,
        'renderActivityInstanceEmbed': false,
        'renderActivityInviteEmbed': false,
        'renderEmbeds': true,
        'ignoreMentioned': true,
        'inlineAttachmentMedia': false,
        'inlineEmbedMedia': true,
        'renderReactions': false
    };
    var3 = var6.bind(var7)(var3);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.message;
        var0 = _closure1_slot6;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var15 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 6;
        var0 = var11[var0];
        var4 = var15.bind(var3)(var0);
        var2 = var4.hexWithOpacity;
        var0 = var7.borderColor;
        var1 = var0.color;
        var0 = 0.08;
        var12 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var7.container;
        var0.style = var4;
        var6 = _closure1_slot4;
        var4 = 7;
        var4 = var11[var4];
        var4 = var15.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'text-xs/bold'
        };
        var8 = var7.title;
        var4.style = var8;
        var8 = 8;
        var13 = var11[var8];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var8 = var11[var8];
        var8 = var15.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.iouM3a;
        var8 = var13.bind(var14)(var8);
        var4.children = var8;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var8 = var7.chatItemContainer;
        var7 = new Array(2);
        var7[0] = var8;
        var8 = {};
        var8.borderColor = var12;
        var7[1] = var8;
        var5.style = var7;
        var8 = _closure1_slot1;
        var7 = 9;
        var7 = var11[var7];
        var8 = var8.bind(var3)(var7);
        var7 = {};
        var10 = _closure1_slot7;
        var7.rowGenerator = var10;
        var10 = 120;
        var7.maxHeight = var10;
        var7.message = var9;
        var9 = true;
        var7.useDarkGradient = var9;
        var7 = var6.bind(var3)(var8, var7);
        var5.children = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 6536, 3240, 3941, 1234, 8834, 2]);