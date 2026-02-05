// modules/profile_effects/native/EditProfileEffectSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isProfileEffectRecord;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var8 = {
        'marginBottom': 10,
        'gap': 5
    };
    var3.profileEffectSection = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var9 = 7;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.GUTTER_SIZE;
    var8.paddingHorizontal = var9;
    var3.row = var8;
    var8 = {
        'overflow': 'hidden',
        'width': '100%',
        'height': '100%'
    };
    var3.profileEffect = var8;
    var8 = {
        'width': '100%',
        'height': '100%'
    };
    var3.sampleProfile = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = function arg0() {
        _fun92363: for (var _fun92363_ip = 0;;) switch (_fun92363_ip) {
            case 0:
                var3 = arg0;
                var9 = var3.isSelected;
                var8 = var3.isTryItOut;
                var12 = var3.profileEffect;
                var2 = {
                    'isSelected': 0,
                    'isTryItOut': 0,
                    'profileEffect': 0
                };
                var5 = null;
                var18 = var2;
                var17 = null;
                var1 = silentSetPrototypeOf(var18, var17);
                var18 = {};
                var17 = var3;
                var16 = var2;
                var4 = copyDataProperties(var18, var17, var16);
                var3 = undefined;
                var _closure2_slot0 = var3;
                var1 = _closure1_slot10;
                var14 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 18;
                var1 = var6[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.useProfileEffectPreset;
                var1 = var12.skuId;
                var1 = var2.bind(var6)(var1);
                var2 = var5 == var1;
                var6 = undefined;
                if (var2) {
                    _fun92363_ip = 124;
                    continue _fun92363
                }
            case 119:
                var6 = var1.config;
            case 124:
                _closure2_slot0 = var6;
                var10 = _closure1_slot3;
                var2 = var10.useMemo;
                var1 = var5 == var6;
                var11 = undefined;
                if (var1) {
                    _fun92363_ip = 152;
                    continue _fun92363
                }
            case 146:
                var11 = var6.thumbnailPreviewSrc;
            case 152:
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    _fun92364: for (var _fun92364_ip = 0;;) switch (_fun92364_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var4 = null;
                            var3 = var4 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun92364_ip = 28;
                                continue _fun92364
                            }
                        case 18:
                            var3 = _closure2_slot0;
                            var0 = var3.thumbnailPreviewSrc;
                        case 28:
                            if (!(var4 != var0)) {
                                _fun92364_ip = 73;
                                continue _fun92364
                            }
                        case 32:
                            var0 = _closure2_slot0;
                            var6 = var0.thumbnailPreviewSrc;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var3 = '';
                            var0 = '?width=100&height=195';
                            var0 = var5.bind(var3)(var6, var0);
                            _fun92364_ip = 99;
                            continue _fun92364;
                        case 73:
                            var3 = _closure2_slot0;
                            var3 = var4 == var3;
                            var1 = undefined;
                            if (var3) {
                                _fun92364_ip = 96;
                                continue _fun92364
                            }
                        case 86:
                            var2 = _closure2_slot0;
                            var1 = var2.thumbnailPreviewSrc;
                        case 96:
                            var0 = var1;
                        case 99:
                            return var0;
                    }
                };
                var11 = var2.bind(var10)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 13;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.EditCollectiblesListItemProduct;
                var0 = {};
                var0.isSelected = var9;
                var0.isTryItOut = var8;
                var8 = var5 == var6;
                var5 = undefined;
                if (var8) {
                    _fun92363_ip = 229;
                    continue _fun92363
                }
            case 224:
                var5 = var6.accessibilityLabel;
            case 229:
                var0.accessibilityLabel = var5;
                var5 = var12.skuId;
                var0.skuId = var5;
                var18 = var0;
                var17 = var4;
                var4 = copyDataProperties(var18, var17);
                var6 = _closure1_slot9;
                var5 = _closure1_slot4;
                var4 = {};
                var9 = var14.profileEffect;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var10 = 6;
                var9.borderRadius = var10;
                var8[1] = var9;
                var4.style = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 19;
                var7 = var13[var7];
                var8 = var9.bind(var3)(var7);
                var7 = {};
                var15 = 20;
                var15 = var13[var15];
                var15 = var9.bind(var3)(var15);
                var7.source = var15;
                var14 = var14.sampleProfile;
                var7.style = var14;
                var14 = true;
                var7.disableColor = var14;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = 21;
                var8 = var13[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {
                    'skuId': null,
                    'bannerAdjustment': 0,
                    'useThumbnail': true
                };
                var12 = var12.skuId;
                var8.skuId = var12;
                var8.thumbnailUrlOverride = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_effects/native/EditProfileEffectSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92365: for (var _fun92365_ip = 0;;) switch (_fun92365_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.selectedProfileEffect;
                var _closure2_slot0 = var15;
                var12 = var0.setSelectedProfileEffect;
                var _closure2_slot1 = var12;
                var6 = var0.section;
                var _closure2_slot2 = var6;
                var17 = var0.guildId;
                var _closure2_slot3 = var17;
                var0 = var0.isTryItOut;
                var _closure2_slot4 = var0;
                var1 = _closure1_slot10;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var _closure2_slot5 = var5;
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var13 = 7;
                var2 = var1[var13];
                var2 = var7.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var11 = var2.size;
                var _closure2_slot6 = var11;
                var9 = var2.onLayout;
                var16 = _closure1_slot0;
                var2 = 8;
                var7 = var1[var2];
                var18 = var16.bind(var3)(var7);
                var14 = var18.useStateFromStores;
                var7 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var8
                    var0 = _closure1_slot5;
                    var0 = var0.purchases;
                    return var0;
                };
                var18 = var14.bind(var18)(var10, var7);
                var _closure2_slot7 = var18;
                var2 = var1[var2];
                var14 = var16.bind(var3)(var2);
                var10 = var14.useStateFromStores;
                var2 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var8
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var10.bind(var14)(var7, var2);
                var _closure2_slot8 = var2;
                var7 = _closure1_slot3;
                var14 = var7.useMemo;
                var19 = var6.items;
                var10 = new Array(3);
                var10[0] = var19;
                var10[1] = var18;
                var10[2] = var2;
                var2 = function() { // Environment: var8
                    _fun92368: for (var _fun92368_ip = 0;;) switch (_fun92368_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.canUseCollectibles;
                            var0 = _closure2_slot8;
                            var0 = var2.bind(var3)(var0);
                            var1 = _closure2_slot2;
                            var1 = var1.items;
                            if (var0) {
                                _fun92368_ip = 76;
                                continue _fun92368
                            }
                        case 55:
                            var2 = var1.filter;
                            var0 = function(arg0) { // Environment: var0
                                _fun92369: for (var _fun92369_ip = 0;;) switch (_fun92369_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var6 = 10;
                                        var0 = var0[var6];
                                        var5 = undefined;
                                        var0 = var1.bind(var5)(var0);
                                        var0 = var0.NONE_ITEM;
                                        var0 = var2 === var0;
                                        if (var0) {
                                            _fun92369_ip = 68;
                                            continue _fun92369
                                        }
                                    case 41:
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var6];
                                        var1 = var4.bind(var5)(var1);
                                        var1 = var1.SHOP_ITEM;
                                        var0 = var2 === var1;
                                    case 68:
                                        if (var0) {
                                            _fun92369_ip = 143;
                                            continue _fun92369
                                        }
                                    case 71:
                                        var1 = _closure1_slot6;
                                        var1 = var1.bind(var5)(var2);
                                        var1 = !var1;
                                        if (var1) {
                                            _fun92369_ip = 140;
                                            continue _fun92369
                                        }
                                    case 86:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var3 = 11;
                                        var3 = var6[var3];
                                        var4 = var4.bind(var5)(var3);
                                        var3 = var4.isPremiumCollectiblesPurchase;
                                        var6 = _closure2_slot7;
                                        var5 = var6.get;
                                        var2 = var2.skuId;
                                        var2 = var5.bind(var6)(var2);
                                        var1 = var3.bind(var4)(var2);
                                    case 140:
                                        var0 = !var1;
                                    case 143:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var1)(var0);
                            _fun92368_ip = 79;
                            continue _fun92368;
                        case 76:
                            var0 = var1;
                        case 79:
                            return var0;
                    }
                };
                var14 = var14.bind(var7)(var2, var10);
                var2 = 12;
                var2 = var1[var2];
                var10 = var16.bind(var3)(var2);
                var2 = var10.chunk;
                var1 = var1[var13];
                var1 = var16.bind(var3)(var1);
                var1 = var1.ROW_SIZE;
                var10 = var2.bind(var10)(var14, var1);
                var14 = null;
                var16 = var14 != var15;
                var _closure2_slot9 = var16;
                var2 = var7.useCallback;
                var1 = new Array(7);
                var1[0] = var17;
                var1[1] = var16;
                var16 = var14 == var15;
                var14 = undefined;
                if (var16) {
                    _fun92365_ip = 326;
                    continue _fun92365
                }
            case 320:
                var14 = var15.skuId;
            case 326:
                var1[2] = var14;
                var1[3] = var12;
                var1[4] = var11;
                var11 = var5.row;
                var1[5] = var11;
                var1[6] = var0;
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var10 = var0.item;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var5 = _closure2_slot5;
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
                    var0 = 7;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var8.bind(var0)(var4);
                    var4 = var4.ROW_SIZE;
                    var6 = var5.bind(var7)(var6, var4);
                    var5 = var6.map;
                    var4 = function(arg0, arg1) { // Environment: var4
                        _fun92371: for (var _fun92371_ip = 0;;) switch (_fun92371_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var6 = 10;
                                var2 = var2[var6];
                                var4 = undefined;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.NONE_ITEM;
                                if (!(var1 !== var2)) {
                                    _fun92371_ip = 318;
                                    continue _fun92371
                                }
                            case 47:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var6];
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.SHOP_ITEM;
                                if (!(var1 !== var2)) {
                                    _fun92371_ip = 233;
                                    continue _fun92371
                                }
                            case 77:
                                var2 = _closure1_slot6;
                                var2 = var2.bind(var4)(var1);
                                if (var2) {
                                    _fun92371_ip = 132;
                                    continue _fun92371
                                }
                            case 89:
                                var7 = _closure1_slot8;
                                var6 = _closure1_slot4;
                                var3 = {};
                                var2 = {};
                                var8 = _closure2_slot6;
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
                                var9 = undefined;
                                if (var2) {
                                    _fun92371_ip = 160;
                                    continue _fun92371
                                }
                            case 150:
                                var2 = _closure2_slot0;
                                var9 = var2.skuId;
                            case 160:
                                var8 = var1.skuId;
                                var6 = _closure1_slot8;
                                var3 = _closure1_slot11;
                                var2 = {};
                                var2.profileEffect = var1;
                                var10 = _closure2_slot6;
                                var2.size = var10;
                                var10 = function() {
                                    var2 = _closure2_slot1;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var2.onPress = var10;
                                var8 = var9 === var8;
                                var2.isSelected = var8;
                                var7 = _closure2_slot4;
                                var2.isTryItOut = var7;
                                var1 = var1.skuId;
                                var1 = var6.bind(var4)(var3, var2, var1);
                                return var1;
                            case 233:
                                var6 = _closure1_slot8;
                                var2 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 13;
                                var1 = var8[var1];
                                var1 = var2.bind(var4)(var1);
                                var3 = var1.EditCollectiblesListItemShop;
                                var2 = {};
                                var1 = _closure2_slot6;
                                var2.size = var1;
                                var7 = _closure1_slot1;
                                var1 = 14;
                                var1 = var8[var1];
                                var1 = var7.bind(var4)(var1);
                                var1 = var1.EDIT_PROFILE_EFFECT_SHEET;
                                var2.analyticsSource = var1;
                                var1 = 'shop';
                                var1 = var6.bind(var4)(var3, var2, var1);
                                return var1;
                            case 318:
                                var3 = _closure1_slot8;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 13;
                                var0 = var2[var0];
                                var0 = var1.bind(var4)(var0);
                                var2 = var0.EditCollectiblesListItemNone;
                                var1 = {};
                                var6 = _closure2_slot6;
                                var1.size = var6;
                                var5 = function() {
                                    var2 = _closure2_slot1;
                                    var1 = undefined;
                                    var0 = null;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var1.onPress = var5;
                                var5 = _closure2_slot9;
                                var5 = !var5;
                                var1.isSelected = var5;
                                var5 = _closure2_slot3;
                                var0 = null;
                                var0 = var0 != var5;
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
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var5.profileEffectSection;
                var0.style = var5;
                var7 = _closure1_slot8;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var4 = 15;
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
                var5 = 16;
                var5 = var16[var5];
                var5 = var15.bind(var3)(var5);
                var6 = var5.FlashList;
                var5 = {};
                var12 = 17;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.t8CdeV;
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
                var8 = function() {
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var4 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
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
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4616, 4604, 1621, 33, 1297, 5747, 566, 3109, 6981, 4599, 22, 5748, 5583, 3941, 5757, 1234, 6934, 4086, 10249, 6926, 2]);