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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
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
    var9 = 6;
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
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun87128: for (var _fun87128_ip = 0;;) switch (_fun87128_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.nameplate;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 14;
                var2 = var9[var2];
                var4 = var8.bind(var3)(var2);
                var2 = var4.useCurrentUser;
                var10 = var2.bind(var4)();
                var _closure2_slot0 = var10;
                var2 = 15;
                var2 = var9[var2];
                var4 = var8.bind(var3)(var2);
                var2 = var4.useAvatarDecoration;
                var5 = var2.bind(var4)(var10);
                var7 = _closure1_slot1;
                var2 = 16;
                var2 = var9[var2];
                var4 = var7.bind(var3)(var2);
                var2 = {};
                var2 = var4.bind(var3)(var2);
                var2 = var2.pendingAvatarDecoration;
                var4 = 7;
                var4 = var9[var4];
                var12 = var8.bind(var3)(var4);
                var11 = var12.useStateFromStores;
                var4 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = function() { // Environment: var1
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var11.bind(var12)(var8, var4);
                var _closure2_slot1 = var8;
                var4 = 17;
                var4 = var9[var4];
                var11 = var7.bind(var3)(var4);
                var4 = var11.getName;
                var12 = var4.bind(var11)(var10);
                var4 = 18;
                var4 = var9[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var9 = var10.id;
                var4.userId = var9;
                var9 = var7.bind(var3)(var4);
                var7 = null;
                var4 = var12;
                if (!(var7 != var9)) {
                    _fun87128_ip = 307;
                    continue _fun87128
                }
            case 212:
                var11 = _closure1_slot7;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 19;
                var7 = var14[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var13 = var10.id;
                var7.userId = var13;
                var7.userName = var12;
                var13 = _closure1_slot0;
                var12 = 20;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.EffectDisplayType;
                var12 = var12.STATIC;
                var7.effectDisplayType = var12;
                var12 = 1;
                var7.lineClamp = var12;
                var12 = 'text-md/semibold';
                var7.variant = var12;
                var4 = var11.bind(var3)(var9, var7);
            case 307:
                var9 = var5;
                if (!(var3 !== var2)) {
                    _fun87128_ip = 317;
                    continue _fun87128
                }
            case 314:
                var9 = var2;
            case 317:
                _closure2_slot2 = var9;
                var7 = _closure1_slot3;
                var5 = var7.useMemo;
                var2 = new Array(3);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 21;
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
                    var5 = _closure2_slot2;
                    var0.avatarDecoration = var5;
                    var4 = _closure2_slot1;
                    var4 = !var4;
                    var0.animate = var4;
                    var4 = true;
                    var0.autoStatusCutout = var4;
                    var0['aria-hidden'] = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5 = var5.bind(var7)(var1, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 22;
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
    var _closure1_slot10 = var3;
    var3 = function arg0() {
        _fun87131: for (var _fun87131_ip = 0;;) switch (_fun87131_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.user;
                var5 = var0.start;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun87131_ip = 21;
                    continue _fun87131
                }
            case 19:
                var5 = false;
            case 21:
                var4 = var0.end;
                if (!(var4 === var3)) {
                    _fun87131_ip = 32;
                    continue _fun87131
                }
            case 30:
                var4 = false;
            case 32:
                var2 = _closure1_slot7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 23;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var8 = _closure1_slot1;
                var9 = 21;
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
    var _closure1_slot11 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nameplates/native/NameplateProductPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun87132: for (var _fun87132_ip = 0;;) switch (_fun87132_ip) {
            case 0:
                var0 = _closure1_slot9;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var5 = var1.bind(var4)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getPendingChanges;
                    var0 = var0.bind(var1)();
                    var0 = var0.pendingNameplate;
                    return var0;
                };
                var2 = var2.bind(var5)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 8;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var11 = null;
                var3 = var11 == var2;
                var0 = undefined;
                if (var3) {
                    _fun87132_ip = 98;
                    continue _fun87132
                }
            case 92:
                var0 = var2.skuId;
            case 98:
                var0 = var1.bind(var4)(var0);
                var12 = var0.product;
                var0 = var11 != var2;
                var20 = undefined;
                if (!var0) {
                    _fun87132_ip = 149;
                    continue _fun87132
                }
            case 118:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getNameplateDataFromRecord;
                var20 = var0.bind(var1)(var2);
            case 149:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getNameplateSampleUsers;
                var16 = var0.bind(var1)();
                var1 = var11 == var20;
                var0 = null;
                if (var1) {
                    _fun87132_ip = 995;
                    continue _fun87132
                }
            case 191:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var10.container;
                var1.style = var5;
                var5 = 'box-none';
                var1.pointerEvents = var5;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var18 = 11;
                var8 = var5[var18];
                var8 = var7.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var5 = var5[var18];
                var5 = var7.bind(var4)(var5);
                var5 = var5.t;
                var7 = var5.D6zVpv;
                var5 = {};
                var13 = var11 == var12;
                var11 = undefined;
                if (var13) {
                    _fun87132_ip = 289;
                    continue _fun87132
                }
            case 284:
                var11 = var12.name;
            case 289:
                var5.nameplate = var11;
                var5 = var8.bind(var9)(var7, var5);
                var1.accessibilityLabel = var5;
                var5 = 'image';
                var1.accessibilityRole = var5;
                var9 = _closure1_slot8;
                var7 = _closure1_slot4;
                var5 = {};
                var8 = var10.memberListContainer;
                var5.style = var8;
                var8 = _closure1_slot7;
                var14 = _closure1_slot11;
                var11 = {};
                var12 = var16.mallow;
                var11.user = var12;
                var15 = true;
                var11.end = var15;
                var11 = var8.bind(var4)(var14, var11);
                var12 = new Array(7);
                var12[0] = var11;
                var21 = _closure1_slot0;
                var11 = _closure1_slot2;
                var13 = 12;
                var17 = var11[var13];
                var17 = var21.bind(var4)(var17);
                var19 = var17.Text;
                var17 = {
                    'maxFontSizeMultiplier': 2,
                    'variant': 'text-sm/semibold',
                    'accessibilityRole': 'header',
                    'color': 'interactive-text-default'
                };
                var22 = var10.memberListTitle;
                var17.style = var22;
                var22 = var11[var18];
                var22 = var21.bind(var4)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var11[var18];
                var22 = var21.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22["yzW/fZ"];
                var23 = var23.bind(var24)(var22);
                var22 = new Array(2);
                var22[0] = var23;
                var23 = ' — 3';
                var22[1] = var23;
                var17.children = var22;
                var17 = var9.bind(var4)(var19, var17);
                var12[1] = var17;
                var17 = {};
                var19 = var16.phibi;
                var17.user = var19;
                var17.start = var15;
                var17 = var8.bind(var4)(var14, var17);
                var12[2] = var17;
                var19 = _closure1_slot10;
                var17 = {};
                var17.nameplate = var20;
                var17 = var8.bind(var4)(var19, var17);
                var12[3] = var17;
                var17 = {};
                var19 = var16.locke;
                var17.user = var19;
                var17.end = var15;
                var17 = var8.bind(var4)(var14, var17);
                var12[4] = var17;
                var13 = var11[var13];
                var13 = var21.bind(var4)(var13);
                var17 = var13.Text;
                var13 = {
                    'maxFontSizeMultiplier': 2,
                    'variant': 'text-sm/semibold',
                    'accessibilityRole': 'header',
                    'color': 'interactive-text-default'
                };
                var19 = var10.memberListTitle;
                var13.style = var19;
                var19 = var11[var18];
                var19 = var21.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var11[var18];
                var18 = var21.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18["NG43/6"];
                var19 = var19.bind(var20)(var18);
                var18 = new Array(2);
                var18[0] = var19;
                var19 = ' — 12';
                var18[1] = var19;
                var13.children = var18;
                var13 = var9.bind(var4)(var17, var13);
                var12[5] = var13;
                var13 = {};
                var16 = var16.boom;
                var13.user = var16;
                var13.start = var15;
                var13 = var8.bind(var4)(var14, var13);
                var12[6] = var13;
                var5.children = var12;
                var7 = var9.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var7 = _closure1_slot1;
                var6 = 13;
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
            case 995:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 5547, 33, 1297, 671, 566, 5542, 1634, 1630, 1234, 3902, 4059, 9446, 3923, 5545, 3197, 3945, 6882, 6883, 5416, 9055, 4863, 2]);