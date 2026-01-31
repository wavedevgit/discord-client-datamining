// modules/nameplates/native/EditNameplateSection.tsx
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isNameplateRecord;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 5;
    var8 = {
        'marginBottom': 10,
        'gap': 5
    };
    var3.nameplateSection = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.GUTTER_SIZE;
    var8.paddingHorizontal = var9;
    var3.row = var8;
    var8 = {};
    var9 = 'hidden';
    var8.overflow = var9;
    var3.nameplate = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nameplates/native/EditNameplateSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        var0 = arg0;
        var14 = var0.selectedNameplate;
        var _closure2_slot0 = var14;
        var12 = var0.setSelectedNameplate;
        var _closure2_slot1 = var12;
        var6 = var0.section;
        var0 = var0.guildId;
        var _closure2_slot2 = var0;
        var1 = _closure1_slot8;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var _closure2_slot3 = var5;
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var13 = 5;
        var1 = var16[var13];
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var11 = var1.size;
        var _closure2_slot4 = var11;
        var9 = var1.onLayout;
        var10 = var6.items;
        var15 = _closure1_slot0;
        var1 = 6;
        var1 = var16[var1];
        var7 = var15.bind(var3)(var1);
        var2 = var7.chunk;
        var1 = var16[var13];
        var1 = var15.bind(var3)(var1);
        var1 = var1.ROW_SIZE;
        var10 = var2.bind(var7)(var10, var1);
        var7 = _closure1_slot3;
        var2 = var7.useCallback;
        var1 = new Array(6);
        var1[0] = var14;
        var1[1] = var12;
        var1[2] = var11;
        var11 = var5.row;
        var1[3] = var11;
        var11 = var5.nameplate;
        var1[4] = var11;
        var1[5] = var0;
        var0 = function(arg0) { // Environment: var8
            var0 = arg0;
            var10 = var0.item;
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = _closure2_slot3;
            var5 = var5.row;
            var1.style = var5;
            var7 = new Array(2);
            var6 = 0;
            var11 = var7;
            var9 = 0;
            var8 = arraySpread(var11, var10, var9);
            var5 = null;
            var7[var8] = var5;
            var4 = 1;
            var4 = var8 + var4;
            var7[var4] = var5;
            var5 = var7.slice;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 5;
            var4 = var4[var0];
            var0 = undefined;
            var4 = var8.bind(var0)(var4);
            var4 = var4.ROW_SIZE;
            var6 = var5.bind(var7)(var6, var4);
            var5 = var6.map;
            var4 = function(arg0, arg1) { // Environment: var4
                _fun79932: for (var _fun79932_ip = 0;;) switch (_fun79932_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var6 = 7;
                        var2 = var2[var6];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.NONE_ITEM;
                        if (!(var1 !== var2)) {
                            _fun79932_ip = 450;
                            continue _fun79932
                        }
                    case 47:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.SHOP_ITEM;
                        if (!(var1 !== var2)) {
                            _fun79932_ip = 365;
                            continue _fun79932
                        }
                    case 77:
                        var2 = _closure1_slot5;
                        var2 = var2.bind(var4)(var1);
                        if (var2) {
                            _fun79932_ip = 132;
                            continue _fun79932
                        }
                    case 89:
                        var7 = _closure1_slot6;
                        var6 = _closure1_slot4;
                        var3 = {};
                        var2 = {};
                        var8 = _closure2_slot4;
                        var2.height = var8;
                        var2.width = var8;
                        var3.style = var2;
                        var2 = arg1;
                        var2 = var7.bind(var4)(var6, var3, var2);
                        return var2;
                    case 132:
                        var3 = _closure2_slot0;
                        var2 = null;
                        var2 = var2 == var3;
                        var8 = undefined;
                        if (var2) {
                            _fun79932_ip = 160;
                            continue _fun79932
                        }
                    case 150:
                        var2 = _closure2_slot0;
                        var8 = var2.skuId;
                    case 160:
                        var7 = var1.skuId;
                        var6 = _closure1_slot6;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 8;
                        var2 = var12[var2];
                        var2 = var11.bind(var4)(var2);
                        var3 = var2.EditCollectiblesListItemProduct;
                        var2 = {};
                        var10 = var1.skuId;
                        var2.skuId = var10;
                        var10 = var1.label;
                        var2.accessibilityLabel = var10;
                        var10 = _closure2_slot4;
                        var2.size = var10;
                        var10 = function() { // Original name: onPress, environment: var5
                            var2 = _closure2_slot1;
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.onPress = var10;
                        var7 = var8 === var7;
                        var2.isSelected = var7;
                        var8 = _closure1_slot1;
                        var7 = 10;
                        var7 = var12[var7];
                        var8 = var8.bind(var4)(var7);
                        var7 = {
                            'nameplate': null,
                            'fullOpacity': true,
                            'isSquarePreview': true
                        };
                        var10 = 11;
                        var10 = var12[var10];
                        var11 = var11.bind(var4)(var10);
                        var10 = var11.getNameplateDataFromRecord;
                        var10 = var10.bind(var11)(var1);
                        var7.nameplate = var10;
                        var9 = _closure2_slot3;
                        var10 = var9.nameplate;
                        var9 = new Array(2);
                        var9[0] = var10;
                        var10 = {};
                        var11 = 6;
                        var10.borderRadius = var11;
                        var9[1] = var10;
                        var7.style = var9;
                        var7 = var6.bind(var4)(var8, var7);
                        var2.children = var7;
                        var1 = var1.skuId;
                        var1 = var6.bind(var4)(var3, var2, var1);
                        return var1;
                    case 365:
                        var6 = _closure1_slot6;
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 8;
                        var1 = var8[var1];
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.EditCollectiblesListItemShop;
                        var2 = {};
                        var1 = _closure2_slot4;
                        var2.size = var1;
                        var7 = _closure1_slot1;
                        var1 = 9;
                        var1 = var8[var1];
                        var1 = var7.bind(var4)(var1);
                        var1 = var1.EDIT_NAMEPLATE_SHEET;
                        var2.analyticsSource = var1;
                        var1 = 'shop';
                        var1 = var6.bind(var4)(var3, var2, var1);
                        return var1;
                    case 450:
                        var3 = _closure1_slot6;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 8;
                        var0 = var2[var0];
                        var0 = var1.bind(var4)(var0);
                        var2 = var0.EditCollectiblesListItemNone;
                        var1 = {};
                        var6 = _closure2_slot4;
                        var1.size = var6;
                        var5 = function() { // Original name: onPress, environment: var5
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = null;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var1.onPress = var5;
                        var6 = _closure2_slot0;
                        var5 = null;
                        var6 = var5 == var6;
                        var1.isSelected = var6;
                        var0 = _closure2_slot2;
                        var0 = var5 != var0;
                        var1.asDefault = var0;
                        var0 = 'none';
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                }
            };
            var4 = var5.bind(var6)(var4);
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var11 = var2.bind(var7)(var0, var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.nameplateSection;
        var0.style = var5;
        var7 = _closure1_slot6;
        var4 = 12;
        var4 = var16[var4];
        var4 = var15.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'heading-sm/medium',
            'color': 'mobile-text-heading-primary'
        };
        var12 = {};
        var13 = var16[var13];
        var13 = var15.bind(var3)(var13);
        var13 = var13.GUTTER_SIZE;
        var12.paddingHorizontal = var13;
        var4.style = var12;
        var6 = var6.header;
        var4.children = var6;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 13;
        var5 = var16[var5];
        var5 = var15.bind(var3)(var5);
        var6 = var5.FlashList;
        var5 = {};
        var12 = 14;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.TV7tWN;
        var12 = var13.bind(var14)(var12);
        var5.accessibilityLabel = var12;
        var5.renderItem = var11;
        var5.data = var10;
        var5.onLayout = var9;
        var9 = 'always';
        var5.keyboardShouldPersistTaps = var9;
        var9 = {};
        var10 = 4;
        var9.paddingHorizontal = var10;
        var5.contentContainerStyle = var9;
        var9 = 98;
        var5.estimatedItemSize = var9;
        var8 = function() { // Original name: ItemSeparatorComponent, environment: var8
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var4 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var0 = 5;
            var5 = var5[var0];
            var0 = undefined;
            var5 = var6.bind(var0)(var5);
            var5 = var5.GUTTER_SIZE;
            var4.height = var5;
            var1.style = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var5.ItemSeparatorComponent = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4567, 33, 1297, 5705, 22, 10134, 5706, 5541, 6875, 1634, 3900, 5715, 1234, 2]);