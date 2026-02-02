// modules/collectibles/native/CollectiblesShopCardsGridSimple.tsx
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
        var0 = arg0;
        var6 = var0.itemGroup;
        var1 = var0.position;
        var _closure2_slot0 = var1;
        var0 = var0.preferVCPrice;
        var _closure2_slot1 = var0;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 7;
        var1 = var11[var1];
        var3 = undefined;
        var2 = var10.bind(var3)(var1);
        var1 = var2.useCardLayout;
        var1 = var1.bind(var2)();
        var2 = var1.cardWidth;
        var _closure2_slot2 = var2;
        var8 = var1.rowWidth;
        var1 = _closure1_slot8;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var7 = var5.rowContainer;
        var5 = new Array(2);
        var5[0] = var7;
        var7 = {};
        var9 = 5;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.COLLECTIBLES_SHOP_CARD_GAP;
        var7.gap = var9;
        var7.width = var8;
        var5[1] = var7;
        var0.style = var5;
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            _fun88169: for (var _fun88169_ip = 0;;) switch (_fun88169_ip) {
                case 0:
                    var10 = arg0;
                    var2 = _closure1_slot6;
                    var1 = var2.getCategoryForProduct;
                    var0 = var10.skuId;
                    var9 = var1.bind(var2)(var0);
                    var4 = undefined;
                    if (!(var4 !== var9)) {
                        _fun88169_ip = 209;
                        continue _fun88169
                    }
                case 36:
                    var0 = var10.items;
                    var0 = var0.length;
                    var1 = 0;
                    if (!(!(var0 > var1))) {
                        _fun88169_ip = 60;
                        continue _fun88169
                    }
                case 52:
                    var3 = var10.skuId;
                    _fun88169_ip = 75;
                    continue _fun88169;
                case 60:
                    var0 = var10.items;
                    var0 = var0[var1];
                    var3 = var0.skuId;
                case 75:
                    var2 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var0 = 8;
                    var0 = var11[var0];
                    var0 = var1.bind(var4)(var0);
                    var1 = var0.CollectiblesAnalyticsProvider;
                    var0 = {};
                    var6 = {};
                    var12 = _closure2_slot0;
                    var7 = arg1;
                    var7 = var12 + var7;
                    var6.tilePosition = var7;
                    var0.newValue = var6;
                    var7 = _closure1_slot7;
                    var6 = _closure1_slot1;
                    var5 = 5;
                    var5 = var11[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = {};
                    var5.product = var10;
                    var9 = var9.unpublishedAt;
                    var5.unpublishedAt = var9;
                    var9 = _closure2_slot1;
                    var5.preferVCPrice = var9;
                    var8 = _closure2_slot2;
                    var5.cardWidth = var8;
                    var5 = var7.bind(var4)(var6, var5, var3);
                    var0.children = var5;
                    var0 = var2.bind(var4)(var1, var0, var3);
                    return var0;
                case 209:
                    var0 = null;
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'alignItems': 'center'
    };
    var3.rootContainer = var8;
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var9 = 5;
    var11 = var5[var9];
    var11 = var4.bind(var0)(var11);
    var11 = var11.COLLECTIBLES_SHOP_CARD_GAP;
    var8.paddingBottom = var11;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.COLLECTIBLES_SHOP_CARD_GAP;
    var8.paddingHorizontal = var9;
    var3.rowContainer = var8;
    var8 = {};
    var9 = '100%';
    var8.width = var9;
    var3.cardGrid = var8;
    var8 = {
        'width': '100%',
        'alignItems': 'center'
    };
    var3.cardGridContentContainer = var8;
    var8 = {
        'width': '100%',
        'alignItems': 'center'
    };
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingTop = var9;
    var3.scrollViewContent = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/CollectiblesShopCardsGridSimple.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var6 = var1.products;
        var _closure2_slot0 = var6;
        var0 = var1.column;
        var _closure2_slot1 = var0;
        var8 = var1.onScroll;
        var1 = var1.preferVCPrice;
        var _closure2_slot2 = var1;
        var1 = _closure1_slot8;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var5 = _closure1_slot3;
        var2 = var5.useMemo;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var0;
        var0 = function() { // Environment: var7
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.chunk;
            var1 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var5)(var0, var1);
        var _closure2_slot3 = var0;
        var2 = var5.useMemo;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var7
            var3 = _closure2_slot3;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getCategoryForProduct;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.length;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var9 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = var10.rootContainer;
        var5 = new Array(1);
        var5[0] = var6;
        var0.style = var5;
        var6 = _closure1_slot7;
        var5 = _closure1_slot5;
        var4 = {};
        var11 = var10.cardGrid;
        var4.style = var11;
        var10 = var10.scrollViewContent;
        var4.contentContainerStyle = var10;
        var10 = false;
        var4.showsVerticalScrollIndicator = var10;
        var4.onScroll = var8;
        var8 = 16;
        var4.scrollEventThrottle = var8;
        var8 = var9.map;
        var7 = function(arg0, arg1) { // Environment: var7
            var4 = arg1;
            var3 = _closure1_slot7;
            var2 = _closure1_slot9;
            var1 = {};
            var0 = arg0;
            var1.itemGroup = var0;
            var5 = _closure2_slot1;
            var5 = var4 * var5;
            var1.position = var5;
            var0 = _closure2_slot2;
            var1.preferVCPrice = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var7 = var8.bind(var9)(var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4564, 33, 1297, 11193, 671, 11388, 11268, 22, 2]);