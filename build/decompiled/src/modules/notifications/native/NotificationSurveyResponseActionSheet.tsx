// modules/notifications/native/NotificationSurveyResponseActionSheet.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.Fonts;
    var6 = var6.HelpdeskArticles;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot6 = var7;
    var6 = var6.jsxs;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var10 = 5;
    var10 = var5[var10];
    var14 = var11.bind(var0)(var10);
    var13 = var3.DISPLAY_EXTRABOLD;
    var10 = 6;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var3 = var3.colors;
    var12 = var3.INTERACTIVE_TEXT_ACTIVE;
    var3 = 16;
    var16 = var14.bind(var0)(var13, var12, var3);
    var17 = var9;
    var12 = copyDataProperties(var17, var16);
    var13 = 8;
    var12 = 'marginTop';
    var9[var12] = var13;
    var12 = 'marginBottom';
    var9[var12] = var13;
    var6.title = var9;
    var9 = {
        'color': null,
        'textAlign': 'center',
        'width': 343
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_ACTIVE;
    var9.color = var10;
    var6.subtitle = var9;
    var9 = {
        'paddingTop': 50,
        'paddingBottom': 100,
        'alignItems': 'center'
    };
    var6.view = var9;
    var9 = {
        'width': 116,
        'height': 93
    };
    var6.rating = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.hideActionSheet;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/native/NotificationSurveyResponseActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77057: for (var _fun77057_ip = 0;;) switch (_fun77057_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.header;
                var0 = _closure1_slot8;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = null;
                var5 = var4 != var8;
                if (!var5) {
                    _fun77057_ip = 143;
                    continue _fun77057
                }
            case 62:
                var7 = _closure1_slot6;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 9;
                var4 = var10[var4];
                var4 = var9.bind(var3)(var4);
                var6 = var4.BottomSheetTitleHeader;
                var4 = {};
                var4.title = var8;
                var8 = 10;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.ActionSheetCloseButton;
                var8 = {};
                var10 = _closure1_slot9;
                var8.onPress = var10;
                var8 = var7.bind(var3)(var9, var8);
                var4.trailing = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 143:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var14.view;
                var5.style = var8;
                var11 = _closure1_slot6;
                var9 = _closure1_slot4;
                var8 = {};
                var10 = var14.rating;
                var8.style = var10;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var10 = 11;
                var10 = var19[var10];
                var10 = var18.bind(var3)(var10);
                var8.source = var10;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var13 = _closure1_slot0;
                var9 = 12;
                var9 = var19[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {};
                var12 = var14.title;
                var9.style = var12;
                var12 = 'heading-md/bold';
                var9.variant = var12;
                var12 = 13;
                var15 = var19[var12];
                var15 = var13.bind(var3)(var15);
                var20 = var15.intl;
                var17 = var20.string;
                var15 = var19[var12];
                var15 = var13.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["d9+vQ8"];
                var15 = var17.bind(var20)(var15);
                var9.children = var15;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var9 = 14;
                var9 = var19[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.TextWithIOSLinkWorkaround;
                var9 = {};
                var14 = var14.subtitle;
                var9.style = var14;
                var14 = 'text-md/normal';
                var9.variant = var14;
                var14 = var19[var12];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.format;
                var12 = var19[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.WxD5QY;
                var12 = {};
                var17 = 15;
                var17 = var19[var17];
                var18 = var18.bind(var3)(var17);
                var17 = var18.getArticleURL;
                var16 = _closure1_slot5;
                var16 = var16.HIGHLIGHTS_NOTIFICATIONS;
                var16 = var17.bind(var18)(var16);
                var12.helpUrl = var16;
                var12 = var14.bind(var15)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 4682, 671, 3279, 4933, 5261, 5259, 9822, 3942, 1234, 5384, 1686, 2]);