// modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx
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
    var _closure1_slot3 = var7;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.Image;
    var _closure1_slot4 = var4;
    var1 = var1.View;
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
        'flex': 1,
        'height': 325
    };
    var11 = 4;
    var1 = var6[var11];
    var1 = var12.bind(var0)(var1);
    var1 = var1.spacing;
    var1 = var1.PX_16;
    var10.padding = var1;
    var1 = 325;
    var4.container = var10;
    var10 = {
        'marginBottom': null,
        'flexShrink': 1,
        'flexGrow': 1
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.marginBottom = var13;
    var4.containerImage = var10;
    var10 = {
        'height': '100%',
        'width': '100%'
    };
    var4.image = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.marginBottom = var13;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10.marginTop = var11;
    var11 = 'center';
    var10.textAlign = var11;
    var4.body = var10;
    var10 = {};
    var10.textAlign = var11;
    var4.title = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var3 = function() {
        var0 = _closure1_slot8;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = function() { // Environment: var0
            _fun101797: for (var _fun101797_ip = 0;;) switch (_fun101797_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var2 = var1.bind(var2)();
                    var3 = null;
                    var1 = var3 == var2;
                    var4 = var2;
                    if (var1) {
                        _fun101797_ip = 59;
                        continue _fun101797
                    }
                case 47:
                    var2 = var2.current;
                    var1 = var3 == var2;
                    var4 = var2;
                case 59:
                    if (var1) {
                        _fun101797_ip = 110;
                        continue _fun101797
                    }
                case 62:
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = 'add-friends';
                    var2.screen = var1;
                    var1 = {
                        'sourcePage': 'Messages Empty State',
                        'presentation': 'card'
                    };
                    var2.params = var1;
                    var1 = 'friends';
                    var1 = var3.bind(var4)(var1, var2);
                case 110:
                    return var0;
            }
        };
        var0 = new Array(0);
        var8 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var10.container;
        var0.style = var4;
        var4 = false;
        var0.collapsable = var4;
        var7 = _closure1_slot6;
        var4 = {};
        var6 = var10.containerImage;
        var4.style = var6;
        var9 = _closure1_slot4;
        var6 = {};
        var11 = 'contain';
        var6.resizeMode = var11;
        var12 = _closure1_slot1;
        var13 = _closure1_slot2;
        var11 = 6;
        var11 = var13[var11];
        var11 = var12.bind(var3)(var11);
        var6.source = var11;
        var11 = var10.image;
        var6.style = var11;
        var6 = var7.bind(var3)(var9, var6);
        var4.children = var6;
        var6 = var7.bind(var3)(var1, var4);
        var4 = new Array(4);
        var4[0] = var6;
        var12 = _closure1_slot0;
        var5 = 7;
        var6 = var13[var5];
        var6 = var12.bind(var3)(var6);
        var11 = var6.Text;
        var6 = {
            'color': 'mobile-text-heading-primary',
            'variant': 'heading-lg/bold',
            'style': null,
            'maxFontSizeMultiplier': 2
        };
        var9 = var10.title;
        var6.style = var9;
        var9 = 8;
        var14 = var13[var9];
        var14 = var12.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var13[var9];
        var14 = var12.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14["8JZof8"];
        var14 = var15.bind(var16)(var14);
        var6.children = var14;
        var6 = var7.bind(var3)(var11, var6);
        var4[1] = var6;
        var5 = var13[var5];
        var5 = var12.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'color': 'text-default',
            'variant': 'text-md/medium',
            'style': null,
            'maxFontSizeMultiplier': 2
        };
        var10 = var10.body;
        var5.style = var10;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var14 = var10.intl;
        var11 = var14.string;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10["qm+H7x"];
        var10 = var11.bind(var14)(var10);
        var5.children = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var5 = 9;
        var5 = var13[var5];
        var5 = var12.bind(var3)(var5);
        var6 = var5.Button;
        var5 = {};
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.zIJnA6;
        var9 = var10.bind(var11)(var9);
        var5.text = var9;
        var5.onPress = var8;
        var8 = 'lg';
        var5.size = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MESSAGES_ITEM_EMPTY_STATE_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3920, 13285, 3941, 1234, 4084, 2]);