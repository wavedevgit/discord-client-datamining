// modules/nameplates/native/NameplateProductPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var10.bind(var0)(var3);
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
    var8 = {
        'position': 'relative',
        'flex': 1,
        'justifyContent': 'center',
        'overflow': 'hidden'
    };
    var3.container = var8;
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.memberListContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingVertical = var11;
    var3.memberListTitle = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.memberListUser = var8;
    var8 = {
        'position': 'absolute',
        'right': 0,
        'left': 0,
        'top': 0,
        'bottom': 0
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.color = var9;
    var3.memberListGradient = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun87578: for (var _fun87578_ip = 0;;) switch (_fun87578_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.previewNameplate;
                var5 = var0.previewAvatarDecoration;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var4 = var7.bind(var3)(var2);
                var2 = var4.useCurrentUser;
                var10 = var2.bind(var4)();
                var _closure2_slot0 = var10;
                var4 = _closure1_slot1;
                var2 = 13;
                var2 = var8[var2];
                var4 = var4.bind(var3)(var2);
                var2 = 14;
                var2 = var8[var2];
                var8 = var7.bind(var3)(var2);
                var7 = var8.getProfilePreviewValue;
                var2 = {};
                var2.pendingValue = var5;
                var5 = null;
                var11 = var5 == var10;
                var9 = undefined;
                if (var11) {
                    _fun87578_ip = 122;
                    continue _fun87578
                }
            case 116:
                var9 = var10.avatarDecoration;
            case 122:
                var2.userValue = var9;
                var2 = var7.bind(var8)(var2);
                var9 = var4.bind(var3)(var2);
                _closure2_slot1 = var9;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 15;
                var2 = var7[var2];
                var11 = var4.bind(var3)(var2);
                var8 = var11.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var8.bind(var11)(var4, var2);
                _closure2_slot2 = var8;
                var4 = _closure1_slot1;
                var2 = 16;
                var2 = var7[var2];
                var11 = var4.bind(var3)(var2);
                var2 = var11.getName;
                var11 = var2.bind(var11)(var10);
                var2 = 17;
                var2 = var7[var2];
                var4 = var4.bind(var3)(var2);
                var2 = {};
                var7 = var10.id;
                var2.userId = var7;
                var2 = var4.bind(var3)(var2);
                var4 = var11;
                if (!(var5 != var2)) {
                    _fun87578_ip = 352;
                    continue _fun87578
                }
            case 257:
                var7 = _closure1_slot6;
                var5 = _closure1_slot1;
                var13 = _closure1_slot2;
                var2 = 18;
                var2 = var13[var2];
                var5 = var5.bind(var3)(var2);
                var2 = {};
                var12 = var10.id;
                var2.userId = var12;
                var2.userName = var11;
                var12 = _closure1_slot0;
                var11 = 19;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.EffectDisplayType;
                var11 = var11.STATIC;
                var2.effectDisplayType = var11;
                var11 = 1;
                var2.lineClamp = var11;
                var11 = 'text-md/semibold';
                var2.variant = var11;
                var4 = var7.bind(var3)(var5, var2);
            case 352:
                var7 = _closure1_slot3;
                var5 = var7.useMemo;
                var2 = new Array(3);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 20;
                    var0 = var7[var5];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var8 = _closure2_slot0;
                    var0.user = var8;
                    var0.guildId = var2;
                    var6 = _closure1_slot0;
                    var5 = var7[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.AvatarSizes;
                    var5 = var5.NORMAL;
                    var0.size = var5;
                    var5 = _closure2_slot1;
                    var0.avatarDecoration = var5;
                    var4 = _closure2_slot2;
                    var4 = !var4;
                    var0.animate = var4;
                    var4 = true;
                    var0.autoStatusCutout = var4;
                    var0['aria-hidden'] = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5 = var5.bind(var7)(var1, var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 21;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.UserNameplateRow;
                var0 = {};
                var0.nameplate = var6;
                var0.icon = var5;
                var0.label = var4;
                var4 = true;
                var0.isPreviewRow = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun87581: for (var _fun87581_ip = 0;;) switch (_fun87581_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.user;
                var5 = var0.start;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun87581_ip = 21;
                    continue _fun87581
                }
            case 19:
                var5 = false;
            case 21:
                var4 = var0.end;
                if (!(var4 === var3)) {
                    _fun87581_ip = 32;
                    continue _fun87581
                }
            case 30:
                var4 = false;
            case 32:
                var2 = _closure1_slot6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 22;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var8 = _closure1_slot1;
                var9 = 20;
                var7 = var11[var9];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var12 = {};
                var13 = var6.avatarSrc;
                var12.uri = var13;
                var7.source = var12;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.NORMAL;
                var7.size = var9;
                var9 = true;
                var7['aria-hidden'] = var9;
                var7 = var2.bind(var3)(var8, var7);
                var0.icon = var7;
                var6 = var6.name;
                var0.label = var6;
                var0.start = var5;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nameplates/native/NameplateProductPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87582: for (var _fun87582_ip = 0;;) switch (_fun87582_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.product;
                var0 = _closure1_slot8;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useShopProductItems;
                var0 = var0.bind(var1)(var2);
                var12 = var0.firstNameplate;
                var18 = var0.firstAvatarDecoration;
                var2 = null;
                var0 = var2 != var12;
                var20 = undefined;
                if (!var0) {
                    _fun87582_ip = 107;
                    continue _fun87582
                }
            case 76:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getNameplateDataFromRecord;
                var20 = var0.bind(var1)(var12);
            case 107:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getNameplateSampleUsers;
                var14 = var0.bind(var1)();
                var1 = var2 == var20;
                var0 = null;
                if (var1) {
                    _fun87582_ip = 945;
                    continue _fun87582
                }
            case 149:
                var1 = var2 == var12;
                var0 = null;
                if (var1) {
                    _fun87582_ip = 945;
                    continue _fun87582
                }
            case 161:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var10.container;
                var1.style = var5;
                var5 = 'box-none';
                var1.pointerEvents = var5;
                var19 = _closure1_slot0;
                var11 = _closure1_slot2;
                var16 = 9;
                var5 = var11[var16];
                var5 = var19.bind(var4)(var5);
                var9 = var5.intl;
                var8 = var9.formatToPlainString;
                var5 = var11[var16];
                var5 = var19.bind(var4)(var5);
                var5 = var5.t;
                var7 = var5.YJig7C;
                var5 = {};
                var12 = var12.label;
                var5.a11y_text = var12;
                var5 = var8.bind(var9)(var7, var5);
                var1.accessibilityLabel = var5;
                var5 = 'image';
                var1.accessibilityRole = var5;
                var5 = {};
                var7 = var10.memberListContainer;
                var5.style = var7;
                var8 = _closure1_slot6;
                var12 = _closure1_slot10;
                var7 = {};
                var9 = var14.mallow;
                var7.user = var9;
                var13 = true;
                var7.end = var13;
                var9 = var8.bind(var4)(var12, var7);
                var7 = new Array(7);
                var7[0] = var9;
                var9 = 10;
                var15 = var11[var9];
                var15 = var19.bind(var4)(var15);
                var17 = var15.Text;
                var15 = {
                    'maxFontSizeMultiplier': 2,
                    'variant': 'text-sm/semibold',
                    'accessibilityRole': 'header',
                    'color': 'interactive-text-default'
                };
                var21 = var10.memberListTitle;
                var15.style = var21;
                var21 = var11[var16];
                var21 = var19.bind(var4)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var11[var16];
                var21 = var19.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21["yzW/fZ"];
                var22 = var22.bind(var23)(var21);
                var21 = new Array(2);
                var21[0] = var22;
                var22 = ' — 3';
                var21[1] = var22;
                var15.children = var21;
                var15 = var3.bind(var4)(var17, var15);
                var7[1] = var15;
                var15 = {};
                var17 = var14.phibi;
                var15.user = var17;
                var15.start = var13;
                var15 = var8.bind(var4)(var12, var15);
                var7[2] = var15;
                var17 = _closure1_slot9;
                var15 = {};
                var15.previewNameplate = var20;
                var15.previewAvatarDecoration = var18;
                var15 = var8.bind(var4)(var17, var15);
                var7[3] = var15;
                var15 = {};
                var17 = var14.locke;
                var15.user = var17;
                var15.end = var13;
                var15 = var8.bind(var4)(var12, var15);
                var7[4] = var15;
                var9 = var11[var9];
                var9 = var19.bind(var4)(var9);
                var15 = var9.Text;
                var9 = {
                    'maxFontSizeMultiplier': 2,
                    'variant': 'text-sm/semibold',
                    'accessibilityRole': 'header',
                    'color': 'interactive-text-default'
                };
                var17 = var10.memberListTitle;
                var9.style = var17;
                var17 = var11[var16];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var11[var16];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16["NG43/6"];
                var17 = var17.bind(var18)(var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = ' — 12';
                var16[1] = var17;
                var9.children = var16;
                var9 = var3.bind(var4)(var15, var9);
                var7[5] = var9;
                var9 = {};
                var14 = var14.boom;
                var9.user = var14;
                var9.start = var13;
                var9 = var8.bind(var4)(var12, var9);
                var7[6] = var9;
                var5.children = var7;
                var7 = var3.bind(var4)(var2, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var7 = _closure1_slot1;
                var6 = 11;
                var9 = var11[var6];
                var15 = var7.bind(var4)(var9);
                var14 = {};
                var9 = var10.memberListGradient;
                var14.style = var9;
                var9 = {
                    'x': 0,
                    'y': 0
                };
                var14.start = var9;
                var9 = {
                    'x': 0,
                    'y': 0.4
                };
                var14.end = var9;
                var9 = var10.memberListGradient;
                var9 = var9.color;
                var16 = new Array(2);
                var16[0] = var9;
                var9 = var10.memberListGradient;
                var18 = var9.color;
                var9 = global;
                var12 = var9.HermesInternal;
                var17 = var12.concat;
                var13 = '';
                var12 = '00';
                var17 = var17.bind(var13)(var18, var12);
                var16[1] = var17;
                var14.colors = var16;
                var14 = var8.bind(var4)(var15, var14);
                var5[1] = var14;
                var6 = var11[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var11 = var10.memberListGradient;
                var6.style = var11;
                var11 = {
                    'x': 0,
                    'y': 0.6
                };
                var6.start = var11;
                var11 = {
                    'x': 0,
                    'y': 1
                };
                var6.end = var11;
                var11 = var10.memberListGradient;
                var11 = var11.color;
                var9 = var9.HermesInternal;
                var9 = var9.concat;
                var11 = var9.bind(var13)(var11, var12);
                var9 = new Array(2);
                var9[0] = var11;
                var10 = var10.memberListGradient;
                var10 = var10.color;
                var9[1] = var10;
                var6.colors = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 945:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 1297, 671, 6881, 1643, 1639, 1234, 3941, 4098, 9497, 5735, 5585, 566, 3236, 3984, 6918, 6919, 5452, 9106, 4898, 2]);