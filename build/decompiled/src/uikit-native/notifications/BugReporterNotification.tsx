// uikit-native/notifications/BugReporterNotification.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var7 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'padding': 8,
        'flexDirection': 'row',
        'paddingRight': 36,
        'justifyContent': 'flex-end'
    };
    var3.container = var8;
    var8 = {
        'flexDirection': 'column',
        'flexShrink': 2,
        'maxHeight': 120,
        'overflow': 'hidden'
    };
    var3.content = var8;
    var8 = {};
    var9 = 4;
    var8.marginBottom = var9;
    var3.text = var8;
    var8 = {
        'borderRadius': 20,
        'height': 40,
        'width': 40,
        'marginRight': 12
    };
    var3.clyde = var8;
    var8 = {
        'resizeMode': 'contain',
        'height': 75,
        'width': 40,
        'marginRight': 8
    };
    var3.preview = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/notifications/BugReporterNotification.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var0 = var0.notification;
        var10 = var0.imageUri;
        var3 = _closure1_slot6;
        var2 = _closure1_slot3;
        var1 = {};
        var8 = _closure1_slot7;
        var0 = var8.container;
        var1.style = var0;
        var7 = _closure1_slot5;
        var6 = _closure1_slot1;
        var13 = _closure1_slot2;
        var0 = 3;
        var4 = var13[var0];
        var0 = undefined;
        var6 = var6.bind(var0)(var4);
        var4 = {};
        var9 = var8.clyde;
        var4.style = var9;
        var9 = {};
        var11 = 'https://cdn.discordapp.com/attachments/1036754139352399934/1040387636818350181/clyde.png';
        var9.uri = var11;
        var4.source = var9;
        var9 = 'contain';
        var4.resizeMode = var9;
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var6 = {};
        var9 = var8.content;
        var6.style = var9;
        var12 = _closure1_slot0;
        var11 = 4;
        var9 = var13[var11];
        var9 = var12.bind(var0)(var9);
        var14 = var9.Text;
        var9 = {
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary',
            'style': null,
            'children': 'Bug Catcher Clyde'
        };
        var15 = var8.text;
        var9.style = var15;
        var14 = var7.bind(var0)(var14, var9);
        var9 = new Array(2);
        var9[0] = var14;
        var11 = var13[var11];
        var11 = var12.bind(var0)(var11);
        var12 = var11.Text;
        var11 = {
            'variant': 'text-md/medium',
            'color': 'text-default',
            'style': null,
            'children': "Bzzz! Found a bug? Tap to submit (don't just be a fly on the wall)"
        };
        var13 = var8.text;
        var11.style = var13;
        var11 = var7.bind(var0)(var12, var11);
        var9[1] = var11;
        var6.children = var9;
        var6 = var3.bind(var0)(var2, var6);
        var4[1] = var6;
        var6 = _closure1_slot4;
        var5 = {};
        var9 = {};
        var9.uri = var10;
        var5.source = var9;
        var8 = var8.preview;
        var5.style = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[2] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.BugReporterNotification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4705, 3943, 2]);