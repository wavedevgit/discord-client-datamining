// modules/pomelo/native/components/PomeloModalDetailsStep.tsx
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
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PomeloScreens;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var9 = 'center';
    var3.textAlign = var9;
    var6.centerAlign = var3;
    var3 = {};
    var10 = 6;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xxl;
    var3.borderRadius = var9;
    var6.actionButton = var3;
    var3 = {};
    var9 = 16;
    var3.marginBottom = var9;
    var6.marginBottom16 = var3;
    var3 = {};
    var9 = 8;
    var3.marginBottom = var9;
    var6.marginBottom8 = var3;
    var3 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 20
    };
    var6.infoItem = var3;
    var3 = {
        'width': 40,
        'height': 40,
        'backgroundColor': null,
        'borderRadius': 20,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var3.backgroundColor = var9;
    var6.infoItemIconContainer = var3;
    var3 = {
        'width': 20,
        'height': 20
    };
    var6.infoItemIcon = var3;
    var3 = {
        'flex': 1,
        'marginLeft': 16
    };
    var6.infoItemText = var3;
    var3 = {};
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_TEXT_DEFAULT;
    var3.color = var9;
    var6.iconColor = var3;
    var3 = {
        'width': '100%',
        'height': 200,
        'marginTop': 32
    };
    var6.headerImage = var3;
    var3 = 21;
    var9 = {
        'paddingTop': 24,
        'paddingBottom': 21
    };
    var6.header = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_BRAND;
    var9.color = var10;
    var6.brandColor = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var6 = function arg0() {
        var0 = arg0;
        var12 = var0.icon;
        var8 = var0.text;
        var0 = _closure1_slot9;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var9.infoItem;
        var0.style = var4;
        var7 = _closure1_slot7;
        var4 = {};
        var6 = var9.infoItemIconContainer;
        var4.style = var6;
        var11 = _closure1_slot1;
        var10 = _closure1_slot2;
        var6 = 7;
        var6 = var10[var6];
        var11 = var11.bind(var3)(var6);
        var6 = {};
        var13 = var9.infoItemIcon;
        var6.style = var13;
        var6.source = var12;
        var12 = var9.iconColor;
        var12 = var12.color;
        var6.color = var12;
        var6 = var7.bind(var3)(var11, var6);
        var4.children = var6;
        var6 = var7.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot0;
        var5 = 8;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var9 = var9.infoItemText;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/native/components/PomeloModalDetailsStep.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var12 = var0.user;
        var0 = _closure1_slot9;
        var3 = undefined;
        var15 = var0.bind(var3)();
        var11 = _closure1_slot1;
        var13 = _closure1_slot2;
        var0 = 9;
        var0 = var13[var0];
        var1 = var11.bind(var3)(var0);
        var0 = var1.useName;
        var19 = var0.bind(var1)(var12);
        var9 = _closure1_slot0;
        var0 = 10;
        var0 = var13[var0];
        var1 = var9.bind(var3)(var0);
        var0 = var1.useNavigation;
        var0 = var0.bind(var1)();
        var _closure2_slot0 = var0;
        var7 = _closure1_slot7;
        var4 = 11;
        var0 = var13[var4];
        var1 = var11.bind(var3)(var0);
        var0 = {};
        var6 = var15.actionButton;
        var0.style = var6;
        var6 = var13[var4];
        var6 = var11.bind(var3)(var6);
        var6 = var6.Sizes;
        var6 = var6.MEDIUM;
        var0.size = var6;
        var8 = 12;
        var6 = var13[var8];
        var6 = var9.bind(var3)(var6);
        var14 = var6.intl;
        var10 = var14.string;
        var6 = var13[var8];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.LhlgY9;
        var6 = var10.bind(var14)(var6);
        var0.text = var6;
        var6 = function() {
            var2 = _closure2_slot0;
            var1 = var2.push;
            var0 = _closure1_slot5;
            var0 = var0.EDIT;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.onPress = var6;
        var6 = var7.bind(var3)(var1, var0);
        var0 = var13[var4];
        var1 = var11.bind(var3)(var0);
        var0 = {};
        var10 = var13[var4];
        var10 = var11.bind(var3)(var10);
        var10 = var10.Sizes;
        var10 = var10.MEDIUM;
        var0.size = var10;
        var10 = var13[var4];
        var10 = var11.bind(var3)(var10);
        var10 = var10.Looks;
        var10 = var10.LINK;
        var0.look = var10;
        var4 = var13[var4];
        var4 = var11.bind(var3)(var4);
        var4 = var4.Colors;
        var4 = var4.LINK;
        var0.color = var4;
        var4 = var15.brandColor;
        var0.textStyle = var4;
        var4 = var13[var8];
        var4 = var9.bind(var3)(var4);
        var14 = var4.intl;
        var10 = var14.string;
        var4 = var13[var8];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["1mGbXA"];
        var4 = var10.bind(var14)(var4);
        var0.text = var4;
        var2 = function() {
            var2 = _closure2_slot0;
            var1 = var2.push;
            var0 = _closure1_slot5;
            var0 = var0.REMINDER;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.onPress = var2;
        var4 = var7.bind(var3)(var1, var0);
        var2 = _closure1_slot8;
        var0 = 13;
        var0 = var13[var0];
        var1 = var11.bind(var3)(var0);
        var0 = {
            'absoluteBottom': true,
            'fixActionButtonsToBottom': true,
            'hasNavbar': false
        };
        var0.action = var6;
        var0.secondaryAction = var4;
        var6 = _closure1_slot3;
        var4 = {};
        var10 = var15.headerImage;
        var4.style = var10;
        var10 = 'contain';
        var4.resizeMode = var10;
        var10 = 14;
        var10 = var13[var10];
        var10 = var11.bind(var3)(var10);
        var4.source = var10;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(7);
        var4[0] = var6;
        var6 = 15;
        var6 = var13[var6];
        var10 = var11.bind(var3)(var6);
        var6 = {};
        var14 = var15.header;
        var6.style = var14;
        var14 = var13[var8];
        var14 = var9.bind(var3)(var14);
        var18 = var14.intl;
        var17 = var18.formatToPlainString;
        var14 = var13[var8];
        var14 = var9.bind(var3)(var14);
        var14 = var14.t;
        var16 = var14["au+lPv"];
        var14 = {};
        var14.n = var19;
        var14 = var17.bind(var18)(var16, var14);
        var6.title = var14;
        var6 = var7.bind(var3)(var10, var6);
        var4[1] = var6;
        var6 = 8;
        var6 = var13[var6];
        var6 = var9.bind(var3)(var6);
        var10 = var6.Text;
        var6 = {
            'variant': 'text-md/medium',
            'color': 'text-default'
        };
        var16 = var15.centerAlign;
        var14 = new Array(2);
        var14[0] = var16;
        var16 = var15.marginBottom16;
        var14[1] = var16;
        var6.style = var14;
        var14 = var13[var8];
        var14 = var9.bind(var3)(var14);
        var18 = var14.intl;
        var17 = var18.format;
        var14 = var13[var8];
        var14 = var9.bind(var3)(var14);
        var14 = var14.t;
        var16 = var14["5fwX56"];
        var14 = {};
        var14 = var17.bind(var18)(var16, var14);
        var6.children = var14;
        var6 = var7.bind(var3)(var10, var6);
        var4[2] = var6;
        var6 = 16;
        var6 = var13[var6];
        var6 = var9.bind(var3)(var6);
        var10 = var6.TextWithIOSLinkWorkaround;
        var6 = {
            'variant': 'text-md/medium',
            'color': 'text-default'
        };
        var16 = var15.centerAlign;
        var14 = new Array(2);
        var14[0] = var16;
        var15 = var15.marginBottom16;
        var14[1] = var15;
        var6.style = var14;
        var14 = var13[var8];
        var14 = var9.bind(var3)(var14);
        var17 = var14.intl;
        var16 = var17.format;
        var14 = var13[var8];
        var14 = var9.bind(var3)(var14);
        var14 = var14.t;
        var15 = var14.i2vB8z;
        var14 = {};
        var18 = 17;
        var18 = var13[var18];
        var20 = var11.bind(var3)(var18);
        var19 = var20.getArticleURL;
        var18 = _closure1_slot6;
        var18 = var18.POMELO_FAQ;
        var18 = var19.bind(var20)(var18);
        var14.helpdeskArticle = var18;
        var14 = var16.bind(var17)(var15, var14);
        var6.children = var14;
        var6 = var7.bind(var3)(var10, var6);
        var4[3] = var6;
        var6 = _closure1_slot10;
        var5 = {};
        var10 = 18;
        var10 = var13[var10];
        var10 = var11.bind(var3)(var10);
        var5.icon = var10;
        var10 = var13[var8];
        var10 = var9.bind(var3)(var10);
        var16 = var10.intl;
        var15 = var16.format;
        var10 = var13[var8];
        var10 = var9.bind(var3)(var10);
        var10 = var10.t;
        var14 = var10.SzUaZ1;
        var10 = {};
        var10 = var15.bind(var16)(var14, var10);
        var5.text = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[4] = var5;
        var5 = {};
        var10 = 19;
        var10 = var13[var10];
        var10 = var11.bind(var3)(var10);
        var5.icon = var10;
        var10 = var13[var8];
        var10 = var9.bind(var3)(var10);
        var16 = var10.intl;
        var15 = var16.format;
        var10 = var13[var8];
        var10 = var9.bind(var3)(var10);
        var10 = var10.t;
        var14 = var10["UwPc+G"];
        var10 = {};
        var10 = var15.bind(var16)(var14, var10);
        var5.text = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[5] = var5;
        var5 = {};
        var10 = 20;
        var10 = var13[var10];
        var10 = var11.bind(var3)(var10);
        var5.icon = var10;
        var10 = var13[var8];
        var10 = var9.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.formatToPlainString;
        var8 = var13[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.t;
        var9 = var8.okLjju;
        var8 = {};
        var12 = var12.tag;
        var8.username = var12;
        var8 = var10.bind(var11)(var9, var8);
        var5.text = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[6] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10326, 660, 33, 1297, 671, 4077, 3932, 3227, 1469, 4868, 1234, 10329, 10330, 10331, 5327, 1675, 10332, 10333, 10334, 2]);