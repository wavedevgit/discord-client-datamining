// modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var13 = 1;
    var3 = var6[var13];
    var3 = var5.bind(var0)(var3);
    var14 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.SearchTypes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot6 = var8;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var12 = 4;
    var3 = var6[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.spacing;
    var16 = var3.PX_16;
    var _closure1_slot8 = var16;
    var3 = var6[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.spacing;
    var15 = var3.PX_8;
    var _closure1_slot9 = var15;
    var3 = 7;
    var3 = var6[var3];
    var10 = var5.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var11 = {};
    var17 = 'relative';
    var11.position = var17;
    var11.padding = var16;
    var3.headerPanel = var11;
    var11 = {};
    var11.paddingBottom = var15;
    var15 = 'row';
    var11.flexDirection = var15;
    var16 = var6[var12];
    var16 = var4.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var11.gap = var16;
    var16 = 'space-between';
    var11.justifyContent = var16;
    var3.headerPanelTitle = var11;
    var11 = {};
    var16 = 6;
    var16 = var6[var16];
    var16 = var5.bind(var0)(var16);
    var16 = var16.SMALL_BUTTON_HEIGHT;
    var11.height = var16;
    var16 = var6[var12];
    var16 = var4.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var11.gap = var16;
    var11.flexDirection = var15;
    var15 = 'center';
    var11.alignItems = var15;
    var3.headerPanelButtons = var11;
    var11 = {};
    var19 = var14.absoluteFillObject;
    var20 = var11;
    var14 = copyDataProperties(var20, var19);
    var12 = var6[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.colors;
    var14 = var12.BORDER_SUBTLE;
    var12 = 'backgroundColor';
    var11[var12] = var14;
    var12 = 'top';
    var11[var12] = var0;
    var12 = 'height';
    var11[var12] = var13;
    var3.headerBorder = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var9 = 'function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}';
    var3.code = var9;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var6[var3];
    var4 = var4.bind(var0)(var3);
    var3 = {};
    var3 = var8.bind(var0)(var4, var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.MagnifyingGlassIcon;
    var3 = {};
    var9 = 'sm';
    var3.size = var9;
    var3 = var8.bind(var0)(var4, var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.UserPlusIcon;
    var3 = {};
    var3.size = var9;
    var3 = var8.bind(var0)(var4, var3);
    var _closure1_slot14 = var3;
    var4 = var7.memo;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.height;
        var _closure2_slot0 = var1;
        var11 = var2.scrollPosition;
        var _closure2_slot1 = var11;
        var2 = _closure1_slot10;
        var3 = undefined;
        var8 = var2.bind(var3)();
        var _closure2_slot2 = var8;
        var6 = _closure1_slot3;
        var4 = var6.useMemo;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure2_slot2;
            var1 = var0.headerPanel;
            var0 = new Array(2);
            var0[0] = var1;
            var1 = {};
            var2 = _closure2_slot0;
            var1.height = var2;
            var0[1] = var1;
            return var0;
        };
        var4 = var4.bind(var6)(var1, var2);
        var18 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 11;
        var1 = var10[var5];
        var7 = var18.bind(var3)(var1);
        var2 = var7.useAnimatedStyle;
        var1 = function() {
            _fun101848: for (var _fun101848_ip = 0;;) switch (_fun101848_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.withSpring;
                    var4 = _closure2_slot1;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = 0;
                    var4 = var4 > var1;
                    if (!var4) {
                        _fun101848_ip = 60;
                        continue _fun101848
                    }
                case 57:
                    var1 = 1;
                case 60:
                    var1 = var2.bind(var3)(var1);
                    var0.opacity = var1;
                    return var0;
            }
        };
        var9 = {};
        var12 = 12;
        var12 = var10[var12];
        var12 = var18.bind(var3)(var12);
        var12 = var12.withSpring;
        var9.withSpring = var12;
        var9.scrollPosition = var11;
        var1.__closure = var9;
        var9 = 17233409273245.0;
        var1.__workletHash = var9;
        var9 = _closure1_slot11;
        var1.__initData = var9;
        var9 = var2.bind(var7)(var1);
        var7 = var6.useCallback;
        var2 = function() { // Environment: var0
            _fun101849: for (var _fun101849_ip = 0;;) switch (_fun101849_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun101849_ip = 58;
                        continue _fun101849
                    }
                case 41:
                    var2 = var3.navigate;
                    var1 = 'message-requests';
                    var1 = var2.bind(var3)(var1);
                case 58:
                    return var0;
            }
        };
        var1 = new Array(0);
        var19 = var7.bind(var6)(var2, var1);
        var7 = var6.useCallback;
        var2 = function() { // Environment: var0
            _fun101850: for (var _fun101850_ip = 0;;) switch (_fun101850_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun101850_ip = 89;
                        continue _fun101850
                    }
                case 41:
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = 'add-friends';
                    var2.screen = var1;
                    var1 = {
                        'sourcePage': 'Messages Tab',
                        'presentation': 'card'
                    };
                    var2.params = var1;
                    var1 = 'friends';
                    var1 = var3.bind(var4)(var1, var2);
                case 89:
                    return var0;
            }
        };
        var1 = new Array(0);
        var16 = var7.bind(var6)(var2, var1);
        var2 = var6.useCallback;
        var1 = function() { // Environment: var0
            _fun101851: for (var _fun101851_ip = 0;;) switch (_fun101851_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun101851_ip = 89;
                        continue _fun101851
                    }
                case 41:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.navigateToSearchWithPrefetch;
                    var1 = {};
                    var5 = _closure1_slot5;
                    var5 = var5.DMS;
                    var1.type = var5;
                    var1 = var2.bind(var3)(var4, var1);
                case 89:
                    return var0;
            }
        };
        var0 = new Array(0);
        var13 = var2.bind(var6)(var1, var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var0.style = var4;
        var4 = {};
        var6 = var8.headerPanelTitle;
        var4.style = var6;
        var7 = _closure1_slot6;
        var6 = 15;
        var6 = var10[var6];
        var6 = var18.bind(var3)(var6);
        var11 = var6.Text;
        var6 = {
            'color': 'mobile-text-heading-primary',
            'variant': 'redesign/heading-18/bold',
            'maxFontSizeMultiplier': 1.75,
            'accessibilityRole': 'header'
        };
        var15 = 16;
        var12 = var10[var15];
        var12 = var18.bind(var3)(var12);
        var20 = var12.intl;
        var14 = var20.string;
        var12 = var10[var15];
        var12 = var18.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.OIgYlQ;
        var12 = var14.bind(var20)(var12);
        var6.children = var12;
        var11 = var7.bind(var3)(var11, var6);
        var6 = new Array(2);
        var6[0] = var11;
        var11 = _closure1_slot12;
        var6[1] = var11;
        var4.children = var6;
        var6 = var2.bind(var3)(var1, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var11 = {};
        var6 = var8.headerPanelButtons;
        var11.style = var6;
        var6 = 17;
        var6 = var10[var6];
        var6 = var18.bind(var3)(var6);
        var12 = var6.IconButton;
        var6 = {
            'onPress': null,
            'variant': 'secondary',
            'size': 'sm'
        };
        var6.onPress = var13;
        var13 = _closure1_slot13;
        var6.icon = var13;
        var13 = var10[var15];
        var13 = var18.bind(var3)(var13);
        var20 = var13.intl;
        var14 = var20.string;
        var13 = var10[var15];
        var13 = var18.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["5h0QOP"];
        var13 = var14.bind(var20)(var13);
        var6.accessibilityLabel = var13;
        var6 = var7.bind(var3)(var12, var6);
        var12 = new Array(3);
        var12[0] = var6;
        var6 = _closure1_slot1;
        var13 = 18;
        var13 = var10[var13];
        var14 = var6.bind(var3)(var13);
        var13 = {
            'noMargin': true,
            'onPress': null,
            'alternateVariant': true
        };
        var13.onPress = var19;
        var13 = var7.bind(var3)(var14, var13);
        var12[1] = var13;
        var13 = 19;
        var13 = var10[var13];
        var13 = var18.bind(var3)(var13);
        var14 = var13.Button;
        var13 = {
            'variant': 'secondary',
            'grow': true,
            'size': 'sm',
            'icon': null,
            'onPress': null,
            'maxFontSizeMultiplier': 1
        };
        var17 = _closure1_slot14;
        var13.icon = var17;
        var13.onPress = var16;
        var16 = var10[var15];
        var16 = var18.bind(var3)(var16);
        var17 = var16.intl;
        var16 = var17.string;
        var15 = var10[var15];
        var15 = var18.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.zIJnA6;
        var15 = var16.bind(var17)(var15);
        var13.text = var15;
        var13 = var7.bind(var3)(var14, var13);
        var12[2] = var13;
        var11.children = var12;
        var11 = var2.bind(var3)(var1, var11);
        var4[1] = var11;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.View;
        var5 = {};
        var10 = var8.headerBorder;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var0 = global;
        var3 = var0.Math;
        var2 = var3.min;
        var1 = arg0;
        var0 = 1.75;
        var7 = var2.bind(var3)(var1, var0);
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 5;
        var1 = var5[var1];
        var3 = undefined;
        var6 = var4.bind(var3)(var1);
        var2 = var6.scaleTextLineHeight;
        var1 = 'redesign/heading-18/bold';
        var2 = var2.bind(var6)(var1, var7);
        var1 = _closure1_slot9;
        var2 = var2 + var1;
        var1 = 6;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.SMALL_BUTTON_HEIGHT;
        var1 = var2 + var1;
        var2 = _closure1_slot8;
        var0 = 2;
        var0 = var0 * var2;
        var0 = var1 + var0;
        return var0;
    };
    var2.getMessagesHeaderHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 671, 7075, 4094, 1297, 13247, 7108, 3249, 3717, 4087, 3917, 11422, 3938, 1234, 7585, 13250, 4090, 2]);