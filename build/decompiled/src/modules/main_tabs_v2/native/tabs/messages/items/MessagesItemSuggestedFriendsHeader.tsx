// modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx
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
    var13 = var1.StyleSheet;
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot5 = var4;
    var4 = var1.Fragment;
    var _closure1_slot6 = var4;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.TextStyleSheet;
    var1 = var1["text-md/semibold"];
    var4 = var1.lineHeight;
    var11 = 4;
    var1 = var6[var11];
    var1 = var12.bind(var0)(var1);
    var1 = var1.spacing;
    var1 = var1.PX_24;
    var1 = var4 + var1;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {
        'height': null,
        'justifyContent': 'center',
        'overflow': 'hidden'
    };
    var10.height = var1;
    var4.headerContainer = var10;
    var10 = {};
    var16 = var13.absoluteFillObject;
    var17 = var10;
    var13 = copyDataProperties(var17, var16);
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var14 = var13.PANEL_BG;
    var13 = 'backgroundColor';
    var10[var13] = var14;
    var4.stickyOverlay = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10.marginHorizontal = var11;
    var4.headerText = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = 'function MessagesItemSuggestedFriendsHeaderTsx1(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}';
    var4.code = var8;
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun101436: for (var _fun101436_ip = 0;;) switch (_fun101436_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.stickyAt;
                var _closure2_slot0 = var12;
                var11 = var1.scrollPosition;
                var _closure2_slot1 = var11;
                var9 = var1.stickyLeft;
                var _closure2_slot2 = var9;
                var7 = var1.stickyTop;
                var _closure2_slot3 = var7;
                var1 = _closure1_slot8;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var1 = var6[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useDerivedValue;
                var1 = function() {
                    _fun101437: for (var _fun101437_ip = 0;;) switch (_fun101437_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun101437_ip = 37;
                                continue _fun101437
                            }
                        case 16:
                            var3 = _closure2_slot1;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1 = _closure2_slot0;
                            var0 = var2 >= var1;
                        case 37:
                            return var0;
                    }
                };
                var10 = {};
                var10.stickyAt = var12;
                var10.scrollPosition = var11;
                var1.__closure = var10;
                var10 = 895751186732.0;
                var1.__workletHash = var10;
                var10 = _closure1_slot9;
                var1.__initData = var10;
                var2 = var2.bind(var4)(var1);
                var4 = _closure1_slot1;
                var1 = 7;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var4 = var1.bind(var3)(var2);
                var6 = _closure1_slot3;
                var2 = var6.useMemo;
                var1 = new Array(2);
                var1[0] = var9;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot2;
                    var2 = -var2;
                    var0.left = var2;
                    var1 = _closure2_slot3;
                    var1 = -var1;
                    var0.top = var1;
                    return var0;
                };
                var12 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var8.headerContainer;
                var0.style = var6;
                var6 = false;
                var0.collapsable = var6;
                var6 = null;
                if (!var4) {
                    _fun101436_ip = 331;
                    continue _fun101436
                }
            case 227:
                var9 = _closure1_slot7;
                var7 = _closure1_slot6;
                var4 = {};
                var13 = _closure1_slot5;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 8;
                var10 = var14[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {
                    'absolute': true,
                    'wide': true,
                    'componentStyles': null,
                    'tall': true,
                    'mix': true
                };
                var10.componentStyles = var12;
                var11 = var13.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var12 = _closure1_slot4;
                var11 = {};
                var14 = var8.stickyOverlay;
                var11.style = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var4.children = var10;
                var6 = var9.bind(var3)(var7, var4);
            case 331:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 3;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'maxFontSizeMultiplier': 2,
                    'lineClamp': 1,
                    'accessibilityRole': 'header',
                    'variant': 'text-md/semibold',
                    'color': 'text-default'
                };
                var8 = var8.headerText;
                var5.style = var8;
                var8 = 9;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["1uAmCw"];
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3941, 671, 1297, 3720, 8190, 8724, 1234, 2]);