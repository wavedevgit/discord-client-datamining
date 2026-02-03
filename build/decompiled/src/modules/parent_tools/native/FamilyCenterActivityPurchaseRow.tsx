// modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'borderBottomColor': null,
        'borderBottomWidth': 1,
        'paddingVertical': 12
    };
    var14 = 'flex';
    var13 = 'center';
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.borderBottomColor = var9;
    var12 = 12;
    var3.container = var8;
    var8 = {};
    var9 = 5;
    var15 = var5[var9];
    var15 = var4.bind(var0)(var15);
    var15 = var15.PREVIEW_SIZE;
    var8.width = var15;
    var15 = var5[var9];
    var15 = var4.bind(var0)(var15);
    var15 = var15.PREVIEW_SIZE;
    var8.height = var15;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var8.borderRadius = var15;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var15;
    var8.display = var14;
    var8.alignItems = var13;
    var8.justifyContent = var13;
    var8.marginRight = var12;
    var3.purchasePlaceholder = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var4.bind(var0)(var13);
    var13 = var13.PREVIEW_SIZE;
    var8.width = var13;
    var13 = var5[var9];
    var13 = var4.bind(var0)(var13);
    var13 = var13.PREVIEW_SIZE;
    var8.height = var13;
    var8.marginRight = var12;
    var3.previewImage = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var4.bind(var0)(var13);
    var13 = var13.PREVIEW_SIZE;
    var8.width = var13;
    var13 = var5[var9];
    var13 = var4.bind(var0)(var13);
    var13 = var13.PREVIEW_SIZE;
    var8.height = var13;
    var8.marginRight = var12;
    var3.avatarDecorationPreview = var8;
    var8 = {
        'width': null,
        'height': null,
        'marginRight': 12,
        'borderRadius': null,
        'overflow': 'hidden',
        'position': 'relative'
    };
    var12 = var5[var9];
    var12 = var4.bind(var0)(var12);
    var12 = var12.PREVIEW_SIZE;
    var8.width = var12;
    var12 = var5[var9];
    var12 = var4.bind(var0)(var12);
    var12 = var12.PREVIEW_SIZE;
    var8.height = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var8.borderRadius = var10;
    var3.nameplateContainer = var8;
    var8 = {
        'position': 'absolute',
        'right': 0
    };
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var11 = var10.PREVIEW_SIZE;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.NAMEPLATE_ASPECT_RATIO;
    var10 = var11 * var10;
    var8.width = var10;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.PREVIEW_SIZE;
    var8.height = var9;
    var3.nameplatePreview = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'flexShrink': 1
    };
    var3.textContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        _fun82458: for (var _fun82458_ip = 0;;) switch (_fun82458_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.product;
                var5 = var0.styles;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.getAvatarDecorationPreviewUrl;
                var7 = var0.bind(var2)(var3);
                var0 = null;
                var2 = var0 == var7;
                if (var2) {
                    _fun82458_ip = 103;
                    continue _fun82458
                }
            case 60:
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = {};
                var6.uri = var7;
                var1.source = var6;
                var5 = var5.avatarDecorationPreview;
                var1.style = var5;
                var5 = 0;
                var1.fadeDuration = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 103:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun82459: for (var _fun82459_ip = 0;;) switch (_fun82459_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.product;
                var7 = var0.styles;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.getNameplatePreviewUrl;
                var9 = var0.bind(var1)(var2);
                var0 = null;
                var1 = var0 == var9;
                if (var1) {
                    _fun82459_ip = 137;
                    continue _fun82459
                }
            case 60:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var7.nameplateContainer;
                var1.style = var6;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = {};
                var8.uri = var9;
                var5.source = var8;
                var7 = var7.nameplatePreview;
                var5.style = var7;
                var7 = 'cover';
                var5.resizeMode = var7;
                var7 = 0;
                var5.fadeDuration = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 137:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun82460: for (var _fun82460_ip = 0;;) switch (_fun82460_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.product;
                var5 = var0.styles;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.getProfileEffectPreviewUrl;
                var7 = var0.bind(var2)(var3);
                var0 = null;
                var2 = var0 == var7;
                if (var2) {
                    _fun82460_ip = 103;
                    continue _fun82460
                }
            case 60:
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = {};
                var6.uri = var7;
                var1.source = var6;
                var5 = var5.avatarDecorationPreview;
                var1.style = var5;
                var5 = 0;
                var1.fadeDuration = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 103:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = function arg0() {
        _fun82461: for (var _fun82461_ip = 0;;) switch (_fun82461_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.subscriptionPlanId;
                var4 = var0.styles;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun82461_ip = 171;
                    continue _fun82461
                }
            case 24:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.isGuildBoostSubscription;
                var5 = var0.bind(var1)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var4.purchasePlaceholder;
                var0.style = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                if (var5) {
                    _fun82461_ip = 111;
                    continue _fun82461
                }
            case 91:
                var5 = 8;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var6 = var5.NitroWheelIcon;
                _fun82461_ip = 129;
                continue _fun82461;
            case 111:
                var5 = 7;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var6 = var5.BoostGemIcon;
            case 129:
                var5 = {};
                var7 = 'custom';
                var5.size = var7;
                var7 = {
                    'width': 20,
                    'height': 20
                };
                var5.style = var7;
                var5 = var2.bind(var3)(var6, var5);
                var0.children = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 171:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var4 = var4.purchasePlaceholder;
                var1.style = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                var5 = var4.ShopIcon;
                var4 = {};
                var6 = 'custom';
                var4.size = var6;
                var6 = {
                    'width': 20,
                    'height': 20
                };
                var4.style = var6;
                var4 = var3.bind(var0)(var5, var4);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        _fun82462: for (var _fun82462_ip = 0;;) switch (_fun82462_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.product;
                var4 = var0.styles;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun82462_ip = 314;
                    continue _fun82462
                }
            case 24:
                var2 = var5.type;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 9;
                var1 = var1[var7];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                if (!(var1 !== var2)) {
                    _fun82462_ip = 286;
                    continue _fun82462
                }
            case 73:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var1 !== var2)) {
                    _fun82462_ip = 258;
                    continue _fun82462
                }
            case 109:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var1 !== var2)) {
                    _fun82462_ip = 230;
                    continue _fun82462
                }
            case 142:
                var6 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var7 = var4.purchasePlaceholder;
                var1.style = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 6;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.ShopIcon;
                var7 = {};
                var9 = 'custom';
                var7.size = var9;
                var9 = {
                    'width': 20,
                    'height': 20
                };
                var7.style = var9;
                var7 = var6.bind(var3)(var8, var7);
                var1.children = var7;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 230:
                var6 = _closure1_slot5;
                var2 = _closure1_slot10;
                var1 = {};
                var1.product = var5;
                var1.styles = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 258:
                var6 = _closure1_slot5;
                var2 = _closure1_slot9;
                var1 = {};
                var1.product = var5;
                var1.styles = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 286:
                var2 = _closure1_slot5;
                var1 = _closure1_slot8;
                var0 = {};
                var0.product = var5;
                var0.styles = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 314:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var4 = var4.purchasePlaceholder;
                var1.style = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                var5 = var4.ShopIcon;
                var4 = {};
                var6 = 'custom';
                var4.size = var6;
                var6 = {
                    'width': 20,
                    'height': 20
                };
                var4.style = var6;
                var4 = var3.bind(var0)(var5, var4);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun82463: for (var _fun82463_ip = 0;;) switch (_fun82463_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.skuId;
                var11 = var0.subscriptionPlanId;
                var8 = var0.total;
                var3 = var0.currency;
                var0 = _closure1_slot7;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 10;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)(var1);
                var12 = var0.product;
                var2 = _closure1_slot0;
                var0 = 5;
                var0 = var5[var0];
                var6 = var2.bind(var4)(var0);
                var5 = var6.getPurchaseDisplayInfo;
                var0 = null;
                var7 = var0 != var12;
                var2 = null;
                if (!var7) {
                    _fun82463_ip = 107;
                    continue _fun82463
                }
            case 104:
                var2 = var12;
            case 107:
                var2 = var5.bind(var6)(var2, var11);
                var7 = var2.displayName;
                var6 = var2.typeName;
                var5 = var2.isSubscription;
                if (!(var0 != var1)) {
                    _fun82463_ip = 143;
                    continue _fun82463
                }
            case 134:
                if (var5) {
                    _fun82463_ip = 143;
                    continue _fun82463
                }
            case 137:
                if (!(var0 == var12)) {
                    _fun82463_ip = 143;
                    continue _fun82463
                }
            case 141:
                return var0;
            case 143:
                if (!(var0 != var7)) {
                    _fun82463_ip = 460;
                    continue _fun82463
                }
            case 150:
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 11;
                var1 = var13[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.formatPrice;
                var13 = var1.bind(var2)(var8, var3);
                var16 = var7;
                if (!(var0 != var6)) {
                    _fun82463_ip = 219;
                    continue _fun82463
                }
            case 189:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ' • ';
                var16 = var3.bind(var2)(var7, var1, var6);
            case 219:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var10.container;
                var1.style = var6;
                var8 = _closure1_slot5;
                if (var5) {
                    _fun82463_ip = 281;
                    continue _fun82463
                }
            case 245:
                var6 = _closure1_slot12;
                var5 = {};
                var14 = var0 != var12;
                var7 = null;
                if (!var14) {
                    _fun82463_ip = 263;
                    continue _fun82463
                }
            case 260:
                var7 = var12;
            case 263:
                var5.product = var7;
                var5.styles = var10;
                var6 = var8.bind(var4)(var6, var5);
                _fun82463_ip = 303;
                continue _fun82463;
            case 281:
                var7 = _closure1_slot11;
                var5 = {};
                var5.subscriptionPlanId = var11;
                var5.styles = var10;
                var6 = var8.bind(var4)(var7, var5);
            case 303:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot6;
                var7 = _closure1_slot3;
                var6 = {};
                var10 = var10.textContainer;
                var6.style = var10;
                var12 = _closure1_slot5;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 12;
                var9 = var14[var10];
                var9 = var11.bind(var4)(var9);
                var15 = var9.Text;
                var9 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active',
                    'ellipsizeMode': 'tail',
                    'lineClamp': 1
                };
                var9.children = var16;
                var15 = var12.bind(var4)(var15, var9);
                var9 = new Array(2);
                var9[0] = var15;
                var10 = var14[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 460:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 10534, 10535, 7678, 5749, 3493, 5578, 4606, 3941, 2]);