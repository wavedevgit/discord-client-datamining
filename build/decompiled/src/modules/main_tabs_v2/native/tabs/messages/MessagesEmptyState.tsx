// modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useYouBarTotalHeight;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var3.container = var8;
    var8 = {};
    var8.flexGrow = var9;
    var3.scrollViewContentContainer = var8;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.innerContainer = var8;
    var8 = {
        'alignItems': 'center',
        'marginBottom': 24
    };
    var3.imageContainer = var8;
    var8 = {};
    var9 = 48;
    var8.paddingHorizontal = var9;
    var3.textWrapper = var8;
    var8 = {
        'marginBottom': 24,
        'textAlign': 'center'
    };
    var3.body = var8;
    var8 = {
        'textAlign': 'center',
        'fontSize': 18,
        'marginBottom': 8
    };
    var3.title = var8;
    var8 = {
        'paddingHorizontal': 16,
        'paddingBottom': 16
    };
    var3.buttonWrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: MessagesEmptyState, environment: var1
        _fun102418: for (var _fun102418_ip = 0;;) switch (_fun102418_ip) {
            case 0:
                var1 = _closure1_slot10;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var1 = var1.width;
                var2 = _closure1_slot0;
                var6 = 6;
                var6 = var4[var6];
                var7 = var2.bind(var3)(var6);
                var6 = var7.useNavigation;
                var9 = var6.bind(var7)();
                var _closure2_slot0 = var9;
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var6 = new Array(1);
                var6[0] = var9;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.navigate;
                    var1 = {};
                    var0 = 'add-friends';
                    var1.screen = var0;
                    var0 = {
                        'sourcePage': 'Messages Empty State',
                        'presentation': 'card'
                    };
                    var1.params = var0;
                    var0 = 'friends';
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var13 = var7.bind(var8)(var0, var6);
                var0 = 7;
                var0 = var4[var0];
                var5 = var5.bind(var3)(var0);
                var0 = {};
                var6 = 8;
                var7 = var4[var6];
                var7 = var2.bind(var3)(var7);
                var7 = var7.ImpressionTypes;
                var7 = var7.VIEW;
                var0.type = var7;
                var6 = var4[var6];
                var6 = var2.bind(var3)(var6);
                var6 = var6.ImpressionNames;
                var6 = var6.MESSAGES_EMPTY_NUX;
                var0.name = var6;
                var0 = var5.bind(var3)(var0);
                var0 = 1.05;
                var19 = var0 * var1;
                var0 = 9;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useIsScreenLandscape;
                var0 = var0.bind(var1)();
                var1 = 10;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useYouBarEnabled;
                var1 = 'messages-empty';
                var6 = var2.bind(var4)(var1);
                if (!var6) {
                    _fun102418_ip = 247;
                    continue _fun102418
                }
            case 244:
                var6 = var0;
            case 247:
                var0 = _closure1_slot7;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var1 = _closure1_slot6;
                var0 = {
                    'alwaysBounceVertical': false,
                    'bounces': false
                };
                var5 = var11.scrollViewContentContainer;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = undefined;
                if (!var6) {
                    _fun102418_ip = 306;
                    continue _fun102418
                }
            case 296:
                var6 = {};
                var6.paddingBottom = var7;
                var5 = var6;
            case 306:
                var4[1] = var5;
                var0.contentContainerStyle = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var11.container;
                var4.style = var7;
                var7 = {};
                var8 = var11.innerContainer;
                var7.style = var8;
                var9 = _closure1_slot8;
                var8 = {};
                var10 = var11.imageContainer;
                var8.style = var10;
                var12 = _closure1_slot5;
                var10 = {};
                var15 = 'contain';
                var10.resizeMode = var15;
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var15 = 11;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var10.source = var15;
                var15 = {};
                var20 = 350;
                var18 = 622;
                var16 = var20;
                if (!(var19 < var18)) {
                    _fun102418_ip = 429;
                    continue _fun102418
                }
            case 421:
                var17 = var19 / var18;
                var16 = var17 * var20;
            case 429:
                var15.height = var16;
                var16 = global;
                var17 = var16.Math;
                var16 = var17.min;
                var16 = var16.bind(var17)(var19, var18);
                var15.width = var16;
                var10.style = var15;
                var10 = var9.bind(var3)(var12, var10);
                var8.children = var10;
                var9 = var9.bind(var3)(var5, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var15 = _closure1_slot9;
                var10 = _closure1_slot4;
                var12 = {};
                var9 = var11.textWrapper;
                var12.style = var9;
                var9 = _closure1_slot8;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = 12;
                var14 = var18[var19];
                var14 = var17.bind(var3)(var14);
                var20 = var14.Text;
                var16 = {
                    'color': 'mobile-text-heading-primary',
                    'variant': 'heading-md/bold'
                };
                var14 = var11.title;
                var16.style = var14;
                var14 = 13;
                var21 = var18[var14];
                var21 = var17.bind(var3)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var18[var14];
                var21 = var17.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["8JZof8"];
                var21 = var22.bind(var23)(var21);
                var16.children = var21;
                var20 = var9.bind(var3)(var20, var16);
                var16 = new Array(2);
                var16[0] = var20;
                var19 = var18[var19];
                var19 = var17.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'color': 'text-default',
                    'variant': 'text-md/medium'
                };
                var21 = var11.body;
                var19.style = var21;
                var21 = var18[var14];
                var21 = var17.bind(var3)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var18[var14];
                var21 = var17.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["qm+H7x"];
                var21 = var22.bind(var23)(var21);
                var19.children = var21;
                var19 = var9.bind(var3)(var20, var19);
                var16[1] = var19;
                var12.children = var16;
                var12 = var15.bind(var3)(var10, var12);
                var8[1] = var12;
                var7.children = var8;
                var8 = var6.bind(var3)(var5, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var11 = var11.buttonWrapper;
                var8.style = var11;
                var11 = 14;
                var11 = var18[var11];
                var11 = var17.bind(var3)(var11);
                var12 = var11.Button;
                var11 = {};
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.zIJnA6;
                var14 = var15.bind(var16)(var14);
                var11.text = var14;
                var11.onPress = var13;
                var13 = 'lg';
                var11.size = var13;
                var11 = var9.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var9.bind(var3)(var10, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 13146, 33, 1297, 1464, 1469, 5176, 481, 5323, 12173, 13292, 3901, 1234, 4043, 2]);