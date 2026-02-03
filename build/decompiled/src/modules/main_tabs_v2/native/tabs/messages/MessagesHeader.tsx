// modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var11 = 1;
    var3 = var6[var11];
    var3 = var5.bind(var0)(var3);
    var13 = var3.StyleSheet;
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
    var4 = var3.jsx;
    var _closure1_slot6 = var4;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var10 = 4;
    var3 = var6[var10];
    var3 = var12.bind(var0)(var3);
    var3 = var3.spacing;
    var15 = var3.PX_16;
    var _closure1_slot8 = var15;
    var3 = var6[var10];
    var3 = var12.bind(var0)(var3);
    var3 = var3.spacing;
    var14 = var3.PX_8;
    var _closure1_slot9 = var14;
    var3 = 7;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {};
    var16 = 'relative';
    var9.position = var16;
    var9.padding = var15;
    var3.headerPanel = var9;
    var9 = {};
    var9.paddingBottom = var14;
    var14 = 'row';
    var9.flexDirection = var14;
    var15 = var6[var10];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9.gap = var15;
    var15 = 'space-between';
    var9.justifyContent = var15;
    var3.headerPanelTitle = var9;
    var9 = {};
    var15 = 6;
    var15 = var6[var15];
    var15 = var5.bind(var0)(var15);
    var15 = var15.SMALL_BUTTON_HEIGHT;
    var9.height = var15;
    var15 = var6[var10];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9.gap = var15;
    var9.flexDirection = var14;
    var14 = 'center';
    var9.alignItems = var14;
    var3.headerPanelButtons = var9;
    var9 = {};
    var18 = var13.absoluteFillObject;
    var19 = var9;
    var13 = copyDataProperties(var19, var18);
    var10 = var6[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var12 = var10.BORDER_SUBTLE;
    var10 = 'backgroundColor';
    var9[var10] = var12;
    var10 = 'top';
    var9[var10] = var0;
    var10 = 'height';
    var9[var10] = var11;
    var3.headerBorder = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var4 = 'function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}';
    var3.code = var4;
    var _closure1_slot11 = var3;
    var4 = var7.memo;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.height;
        var _closure2_slot0 = var1;
        var12 = var2.scrollPosition;
        var _closure2_slot1 = var12;
        var2 = _closure1_slot10;
        var3 = undefined;
        var8 = var2.bind(var3)();
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var4 = var7.useMemo;
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
        var4 = var4.bind(var7)(var1, var2);
        var18 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 8;
        var1 = var10[var5];
        var9 = var18.bind(var3)(var1);
        var2 = var9.useAnimatedStyle;
        var1 = function() {
            _fun101236: for (var _fun101236_ip = 0;;) switch (_fun101236_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
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
                        _fun101236_ip = 60;
                        continue _fun101236
                    }
                case 57:
                    var1 = 1;
                case 60:
                    var1 = var2.bind(var3)(var1);
                    var0.opacity = var1;
                    return var0;
            }
        };
        var11 = {};
        var13 = 9;
        var13 = var10[var13];
        var13 = var18.bind(var3)(var13);
        var13 = var13.withSpring;
        var11.withSpring = var13;
        var11.scrollPosition = var12;
        var1.__closure = var11;
        var11 = 17233409273245.0;
        var1.__workletHash = var11;
        var11 = _closure1_slot11;
        var1.__initData = var11;
        var9 = var2.bind(var9)(var1);
        var11 = var7.useCallback;
        var2 = function() { // Environment: var0
            _fun101237: for (var _fun101237_ip = 0;;) switch (_fun101237_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun101237_ip = 58;
                        continue _fun101237
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
        var17 = var11.bind(var7)(var2, var1);
        var11 = var7.useCallback;
        var2 = function() { // Environment: var0
            _fun101238: for (var _fun101238_ip = 0;;) switch (_fun101238_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun101238_ip = 89;
                        continue _fun101238
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
        var16 = var11.bind(var7)(var2, var1);
        var2 = var7.useCallback;
        var1 = function() { // Environment: var0
            _fun101239: for (var _fun101239_ip = 0;;) switch (_fun101239_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun101239_ip = 89;
                        continue _fun101239
                    }
                case 41:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
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
        var14 = var2.bind(var7)(var1, var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var0.style = var4;
        var4 = {};
        var7 = var8.headerPanelTitle;
        var4.style = var7;
        var7 = _closure1_slot6;
        var11 = 12;
        var11 = var10[var11];
        var11 = var18.bind(var3)(var11);
        var12 = var11.Text;
        var11 = {
            'color': 'mobile-text-heading-primary',
            'variant': 'redesign/heading-18/bold',
            'maxFontSizeMultiplier': 1.75,
            'accessibilityRole': 'header'
        };
        var15 = 13;
        var13 = var10[var15];
        var13 = var18.bind(var3)(var13);
        var20 = var13.intl;
        var19 = var20.string;
        var13 = var10[var15];
        var13 = var18.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.OIgYlQ;
        var13 = var19.bind(var20)(var13);
        var11.children = var13;
        var12 = var7.bind(var3)(var12, var11);
        var11 = new Array(2);
        var11[0] = var12;
        var6 = _closure1_slot1;
        var12 = 14;
        var12 = var10[var12];
        var13 = var6.bind(var3)(var12);
        var12 = {};
        var12 = var7.bind(var3)(var13, var12);
        var11[1] = var12;
        var4.children = var11;
        var11 = var2.bind(var3)(var1, var4);
        var4 = new Array(3);
        var4[0] = var11;
        var11 = {};
        var12 = var8.headerPanelButtons;
        var11.style = var12;
        var12 = 15;
        var12 = var10[var12];
        var12 = var18.bind(var3)(var12);
        var13 = var12.IconButton;
        var12 = {
            'onPress': null,
            'variant': 'secondary',
            'size': 'sm'
        };
        var12.onPress = var14;
        var20 = 'sm';
        var14 = 16;
        var14 = var10[var14];
        var14 = var18.bind(var3)(var14);
        var19 = var14.MagnifyingGlassIcon;
        var14 = {};
        var14.size = var20;
        var14 = var7.bind(var3)(var19, var14);
        var12.icon = var14;
        var14 = var10[var15];
        var14 = var18.bind(var3)(var14);
        var21 = var14.intl;
        var19 = var21.string;
        var14 = var10[var15];
        var14 = var18.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14["5h0QOP"];
        var14 = var19.bind(var21)(var14);
        var12.accessibilityLabel = var14;
        var13 = var7.bind(var3)(var13, var12);
        var12 = new Array(3);
        var12[0] = var13;
        var13 = 17;
        var13 = var10[var13];
        var14 = var6.bind(var3)(var13);
        var13 = {
            'noMargin': true,
            'onPress': null,
            'alternateVariant': true
        };
        var13.onPress = var17;
        var13 = var7.bind(var3)(var14, var13);
        var12[1] = var13;
        var13 = 18;
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
        var17 = 19;
        var17 = var10[var17];
        var17 = var18.bind(var3)(var17);
        var19 = var17.UserPlusIcon;
        var17 = {};
        var17.size = var20;
        var17 = var7.bind(var3)(var19, var17);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 671, 6972, 4079, 1297, 3711, 4072, 3911, 11660, 3932, 1234, 13193, 7503, 7005, 13195, 4075, 3239, 2]);