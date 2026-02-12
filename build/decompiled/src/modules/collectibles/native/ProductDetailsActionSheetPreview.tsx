// modules/collectibles/native/ProductDetailsActionSheetPreview.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun71279: for (var _fun71279_ip = 0;;) switch (_fun71279_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var1 = {};
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 5;
                var8 = var4[var6];
                var5 = undefined;
                var8 = var7.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_MOD_SUBTLE;
                var1.borderBottomColor = var8;
                var8 = 1;
                var1.borderBottomWidth = var8;
                var8 = var4[var6];
                var8 = var7.bind(var5)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_24;
                var1.paddingBottom = var8;
                var6 = var4[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_24;
                var1.marginTop = var6;
                var7 = _closure1_slot0;
                var6 = 6;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.CollectiblesItemType;
                var4 = var4.NAMEPLATE;
                var4 = var3 === var4;
                if (!var4) {
                    _fun71279_ip = 152;
                    continue _fun71279
                }
            case 140:
                var7 = {};
                var8 = 8;
                var7.marginTop = var8;
                var4 = var7;
            case 152:
                var10 = var1;
                var9 = var4;
                var4 = copyDataProperties(var10, var9);
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.PROFILE_EFFECT;
                var2 = var3 === var2;
                if (!var2) {
                    _fun71279_ip = 224;
                    continue _fun71279
                }
            case 198:
                var3 = {};
                var5 = 0.48;
                var4 = arg1;
                var4 = var5 * var4;
                var3.height = var4;
                var2 = var3;
            case 224:
                var10 = var1;
                var9 = var2;
                var2 = copyDataProperties(var10, var9);
                var0.preview = var1;
                return var0;
        }
    };
    var3 = var6.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.FractionalNitroPreview;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.OrbBadgePreview;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        var1 = arg0;
        var12 = var1.product;
        var7 = var1.width;
        var10 = var1.handlePreviewPress;
        var _closure2_slot0 = var10;
        var3 = _closure1_slot7;
        var13 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 10;
        var1 = var11[var1];
        var2 = undefined;
        var5 = var13.bind(var2)(var1);
        var1 = {};
        var1.product = var12;
        var1 = var3.bind(var2)(var5, var1);
        var _closure2_slot1 = var1;
        var1 = 12;
        var1 = var11[var1];
        var5 = var13.bind(var2)(var1);
        var1 = {};
        var1.product = var12;
        var1 = var3.bind(var2)(var5, var1);
        var _closure2_slot2 = var1;
        var1 = 11;
        var1 = var11[var1];
        var5 = var13.bind(var2)(var1);
        var1 = {};
        var1.product = var12;
        var1.width = var7;
        var1 = var3.bind(var2)(var5, var1);
        var _closure2_slot3 = var1;
        var1 = 9;
        var1 = var11[var1];
        var1 = var13.bind(var2)(var1);
        var1 = var1.bind(var2)();
        var6 = var1.height;
        var5 = _closure1_slot9;
        var9 = _closure1_slot0;
        var1 = 6;
        var1 = var11[var1];
        var1 = var9.bind(var2)(var1);
        var1 = var1.CollectiblesItemType;
        var1 = var1.BUNDLE;
        var5 = var5.bind(var2)(var1, var6);
        var1 = 13;
        var1 = var11[var1];
        var6 = var9.bind(var2)(var1);
        var1 = var6.bundleContainsNameplates;
        var8 = var1.bind(var6)(var12);
        var _closure2_slot4 = var8;
        var6 = _closure1_slot3;
        var1 = new Array(4);
        var1[0] = var12;
        var1[1] = var7;
        var1[2] = var10;
        var1[3] = var8;
        var0 = function() { // Environment: var0
            _fun71281: for (var _fun71281_ip = 0;;) switch (_fun71281_ip) {
                case 0:
                    var2 = {};
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 14;
                    var0 = var3[var9];
                    var8 = undefined;
                    var0 = var12.bind(var8)(var0);
                    var5 = var0.intl;
                    var1 = var5.string;
                    var0 = var3[var9];
                    var0 = var12.bind(var8)(var0);
                    var0 = var0.t;
                    var0 = var0["s+YSgo"];
                    var0 = var1.bind(var5)(var0);
                    var2.label = var0;
                    var0 = 'profile';
                    var2.id = var0;
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot4;
                    var0 = {};
                    var7 = _closure2_slot0;
                    var0.onPress = var7;
                    var10 = {};
                    var11 = 1;
                    var10.flex = var11;
                    var0.style = var10;
                    var10 = _closure2_slot3;
                    var0.children = var10;
                    var0 = var6.bind(var8)(var5, var0);
                    var2.page = var0;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = {};
                    var10 = var3[var9];
                    var10 = var12.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var3 = var3[var9];
                    var3 = var12.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.aVCcr8;
                    var3 = var10.bind(var11)(var3);
                    var2.label = var3;
                    var3 = 'decoration';
                    var2.id = var3;
                    var3 = {};
                    var3.onPress = var7;
                    var7 = {
                        'flex': 1,
                        'justifyContent': 'center'
                    };
                    var3.style = var7;
                    var7 = _closure2_slot2;
                    var3.children = var7;
                    var3 = var6.bind(var8)(var5, var3);
                    var2.page = var3;
                    var0[1] = var2;
                    var2 = _closure2_slot4;
                    if (var2) {
                        _fun71281_ip = 253;
                        continue _fun71281
                    }
                case 247:
                    var2 = new Array(0);
                    _fun71281_ip = 339;
                    continue _fun71281;
                case 253:
                    var3 = {};
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = var4[var9];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var4[var9];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.HNnSVZ;
                    var4 = var5.bind(var6)(var4);
                    var3.label = var4;
                    var4 = 'nameplate';
                    var3.id = var4;
                    var1 = _closure2_slot1;
                    var3.page = var1;
                    var1 = new Array(1);
                    var1[0] = var3;
                    var2 = var1;
                case 339:
                    var13 = 2;
                    var15 = var0;
                    var14 = var2;
                    var1 = arraySpread(var15, var14, var13);
                    return var0;
            }
        };
        var8 = var6.bind(var2)(var0, var1);
        var0 = 15;
        var0 = var11[var0];
        var6 = var9.bind(var2)(var0);
        var1 = var6.useSegmentedControlState;
        var0 = {};
        var0.items = var8;
        var0.pageWidth = var7;
        var7 = 0;
        var0.defaultIndex = var7;
        var10 = var1.bind(var6)(var0);
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var5.preview;
        var0.style = var5;
        var5 = _closure1_slot8;
        var4 = {};
        var6 = {};
        var7 = 1;
        var6.flex = var7;
        var4.style = var6;
        var6 = 16;
        var6 = var11[var6];
        var6 = var9.bind(var2)(var6);
        var7 = var6.SegmentedControlPages;
        var6 = {};
        var6.state = var10;
        var8 = {};
        var12 = 435;
        var8.minHeight = var12;
        var6.style = var8;
        var7 = var3.bind(var2)(var7, var6);
        var6 = new Array(2);
        var6[0] = var7;
        var7 = {};
        var8 = {};
        var12 = 5;
        var14 = var11[var12];
        var14 = var13.bind(var2)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_16;
        var8.paddingHorizontal = var14;
        var12 = var11[var12];
        var12 = var13.bind(var2)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_16;
        var8.paddingTop = var12;
        var7.style = var8;
        var8 = 17;
        var8 = var11[var8];
        var8 = var9.bind(var2)(var8);
        var9 = var8.SegmentedControl;
        var8 = {};
        var8.state = var10;
        var10 = 'default';
        var8.variant = var10;
        var8 = var3.bind(var2)(var9, var8);
        var7.children = var8;
        var7 = var3.bind(var2)(var1, var7);
        var6[1] = var7;
        var4.children = var6;
        var4 = var5.bind(var2)(var1, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ProductDetailsActionSheetPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun71282: for (var _fun71282_ip = 0;;) switch (_fun71282_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.product;
                var6 = var0.handlePreviewPress;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var9 = var1.width;
                var3 = var1.height;
                var2 = _closure1_slot9;
                var1 = var7.type;
                var5 = var2.bind(var4)(var1, var3);
                var2 = var7.skuId;
                var1 = _closure1_slot6;
                var1 = var1.FRACTIONAL_PREMIUM;
                if (!(var2 !== var1)) {
                    _fun71282_ip = 510;
                    continue _fun71282
                }
            case 92:
                var2 = var7.skuId;
                var1 = _closure1_slot6;
                var1 = var1.ORB_PROFILE_BADGE;
                if (!(var2 !== var1)) {
                    _fun71282_ip = 504;
                    continue _fun71282
                }
            case 115:
                var2 = var7.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 6;
                var1 = var1[var8];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var1 !== var2)) {
                    _fun71282_ip = 439;
                    continue _fun71282
                }
            case 159:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var1 !== var2)) {
                    _fun71282_ip = 366;
                    continue _fun71282
                }
            case 195:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                if (!(var1 !== var2)) {
                    _fun71282_ip = 297;
                    continue _fun71282
                }
            case 228:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.BUNDLE;
                if (!(var1 !== var2)) {
                    _fun71282_ip = 265;
                    continue _fun71282
                }
            case 261:
                var1 = null;
                return var1;
            case 265:
                var3 = _closure1_slot7;
                var2 = _closure1_slot12;
                var1 = {};
                var1.product = var7;
                var1.width = var9;
                var1.handlePreviewPress = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 297:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var1.onPress = var6;
                var8 = var5.preview;
                var1.style = var8;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 12;
                var8 = var11[var8];
                var10 = var10.bind(var4)(var8);
                var8 = {};
                var8.product = var7;
                var8 = var3.bind(var4)(var10, var8);
                var1.children = var8;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 366:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var1.onPress = var6;
                var6 = var5.preview;
                var1.style = var6;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 11;
                var6 = var10[var6];
                var8 = var8.bind(var4)(var6);
                var6 = {};
                var6.product = var7;
                var6.width = var9;
                var6 = var3.bind(var4)(var8, var6);
                var1.children = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 439:
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var5.preview;
                var1.style = var5;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 10;
                var5 = var8[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.product = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 504:
                var1 = _closure1_slot11;
                return var1;
            case 510:
                var0 = _closure1_slot10;
                return var0;
        }
    };
    var2.ProductDetailsActionSheetPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3284, 33, 1297, 671, 3490, 8868, 8871, 1464, 8866, 8864, 8865, 8826, 1234, 8321, 8494, 8322, 2]);