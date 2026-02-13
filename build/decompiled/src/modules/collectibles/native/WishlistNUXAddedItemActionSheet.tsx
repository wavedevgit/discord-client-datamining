// modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserProfileSections;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'center';
    var8.alignItems = var9;
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.padding = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.gap = var12;
    var3.container = var8;
    var8 = {};
    var8.alignItems = var9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingHorizontal = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.gap = var10;
    var3.textContainer = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.subtitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var2 = var1.product;
        var _closure2_slot0 = var2;
        var1 = _closure1_slot10;
        var3 = undefined;
        var12 = var1.bind(var3)();
        var17 = _closure1_slot0;
        var18 = _closure1_slot2;
        var1 = 8;
        var1 = var18[var1];
        var6 = var17.bind(var3)(var1);
        var5 = var6.useToken;
        var8 = _closure1_slot1;
        var1 = 7;
        var1 = var18[var1];
        var1 = var8.bind(var3)(var1);
        var1 = var1.colors;
        var1 = var1.BG_SURFACE_RAISED;
        var9 = var5.bind(var6)(var1);
        var1 = 9;
        var1 = var18[var1];
        var10 = var17.bind(var3)(var1);
        var7 = var10.useStateFromStores;
        var1 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var1;
        var5 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = new Array(0);
        var1 = var7.bind(var10)(var6, var5, var1);
        var _closure2_slot1 = var1;
        var5 = _closure1_slot4;
        var7 = var5.useMemo;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() { // Environment: var0
            _fun87785: for (var _fun87785_ip = 0;;) switch (_fun87785_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var4 = var0.type;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.BUNDLE;
                    if (!(var4 !== var3)) {
                        _fun87785_ip = 111;
                        continue _fun87785
                    }
                case 53:
                    var4 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = var2.items;
                    var2 = 1;
                    var3 = var4.bind(var0)(var3, var2);
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = null;
                    var2 = var2 == var3;
                    var0 = undefined;
                    if (var2) {
                        _fun87785_ip = 109;
                        continue _fun87785
                    }
                case 92:
                    var2 = {};
                    var4 = 'single';
                    var2.type = var4;
                    var2.item = var3;
                    var0 = var2;
                case 109:
                    return var0;
                case 111:
                    var0 = {};
                    var2 = 'bundle';
                    var0.type = var2;
                    var1 = _closure2_slot0;
                    var1 = var1.items;
                    var0.items = var1;
                    return var0;
            }
        };
        var6 = var7.bind(var5)(var2, var6);
        var _closure2_slot2 = var6;
        var10 = var5.useCallback;
        var7 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var15 = var10.bind(var5)(var7, var2);
        var7 = var5.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            _fun87787: for (var _fun87787_ip = 0;;) switch (_fun87787_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideAllActionSheets;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun87787_ip = 134;
                        continue _fun87787
                    }
                case 48:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 12;
                    var1 = var6[var1];
                    var2 = var5.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var1.userId = var4;
                    var4 = 13;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var5 = var4.COLLECTIBLES_SHOP;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.sourceAnalyticsLocations = var4;
                    var3 = _closure1_slot7;
                    var3 = var3.WISHLIST;
                    var1.initialSection = var3;
                    var1 = var2.bind(var0)(var1);
                case 134:
                    return var0;
            }
        };
        var13 = var7.bind(var5)(var1, var2);
        var2 = var5.useCallback;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            _fun87788: for (var _fun87788_ip = 0;;) switch (_fun87788_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var0 = null;
                    var1 = var0 == var1;
                    if (var1) {
                        _fun87788_ip = 68;
                        continue _fun87788
                    }
                case 16:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CollectiblesPreview;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1.collectiblesItemData = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 68:
                    return var0;
            }
        };
        var10 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot8;
        var0 = 15;
        var0 = var18[var0];
        var0 = var17.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var6 = _closure1_slot9;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var12.container;
        var4.style = var7;
        var7 = 16;
        var7 = var18[var7];
        var8 = var8.bind(var3)(var7);
        var7 = {};
        var7.onPress = var15;
        var7.renderPreview = var10;
        var7.backgroundColor = var9;
        var8 = var2.bind(var3)(var8, var7);
        var7 = new Array(3);
        var7[0] = var8;
        var8 = {};
        var9 = var12.textContainer;
        var8.style = var9;
        var10 = 17;
        var9 = var18[var10];
        var9 = var17.bind(var3)(var9);
        var11 = var9.Text;
        var9 = {
            'variant': 'heading-lg/extrabold',
            'color': 'text-strong'
        };
        var14 = 18;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var20 = var16.intl;
        var19 = var20.string;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16["3T2jbf"];
        var16 = var19.bind(var20)(var16);
        var9.children = var16;
        var11 = var2.bind(var3)(var11, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var10 = var18[var10];
        var10 = var17.bind(var3)(var10);
        var11 = var10.Text;
        var10 = {
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var12 = var12.subtitle;
        var10.style = var12;
        var12 = var18[var14];
        var12 = var17.bind(var3)(var12);
        var19 = var12.intl;
        var16 = var19.string;
        var12 = var18[var14];
        var12 = var17.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.SXb73A;
        var12 = var16.bind(var19)(var12);
        var10.children = var12;
        var10 = var2.bind(var3)(var11, var10);
        var9[1] = var10;
        var8.children = var9;
        var8 = var6.bind(var3)(var5, var8);
        var7[1] = var8;
        var8 = 19;
        var8 = var18[var8];
        var8 = var17.bind(var3)(var8);
        var9 = var8.ButtonGroup;
        var8 = {};
        var10 = 'horizontal';
        var8.direction = var10;
        var11 = 20;
        var10 = var18[var11];
        var10 = var17.bind(var3)(var10);
        var12 = var10.Button;
        var10 = {
            'text': null,
            'onPress': null,
            'size': 'lg',
            'variant': 'primary',
            'grow': true
        };
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var20 = var16.intl;
        var19 = var20.string;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.tM4PUv;
        var16 = var19.bind(var20)(var16);
        var10.text = var16;
        var10.onPress = var15;
        var12 = var2.bind(var3)(var12, var10);
        var10 = new Array(2);
        var10[0] = var12;
        var11 = var18[var11];
        var11 = var17.bind(var3)(var11);
        var12 = var11.Button;
        var11 = {
            'text': null,
            'onPress': null,
            'variant': 'secondary',
            'size': 'lg',
            'grow': true
        };
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var18[var14];
        var14 = var17.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.TxBQzD;
        var14 = var15.bind(var16)(var14);
        var11.text = var14;
        var11.onPress = var13;
        var11 = var2.bind(var3)(var12, var11);
        var10[1] = var11;
        var8.children = var10;
        var8 = var6.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1621, 7063, 33, 1297, 671, 3156, 566, 1644, 3282, 7412, 5639, 11335, 4938, 11337, 3938, 1235, 6518, 4090, 2]);