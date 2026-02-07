// modules/display_name_styles/native/UsernameWithEffects.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        var1 = 0.04;
        var0 = arg1;
        var1 = var1 * var0;
        var0 = arg0;
        var0 = var0 + var1;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.processColor;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
        _fun57471: for (var _fun57471_ip = 0;;) switch (_fun57471_ip) {
            case 0:
                var3 = arg0;
                var8 = arg2;
                var9 = arg4;
                var0 = {};
                var1 = {};
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 4;
                var2 = var10[var7];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var2 = var2.colors;
                var2 = var2.WHITE;
                var1.color = var2;
                var1.textShadowColor = var3;
                var1.textShadowRadius = var8;
                var6 = {
                    'width': 0,
                    'height': 0
                };
                var1.textShadowOffset = var6;
                var1.padding = var8;
                var11 = -var8;
                var12 = _closure1_slot0;
                var6 = 5;
                var10 = var10[var6];
                var12 = var12.bind(var5)(var10);
                var10 = var12.isIOS;
                var12 = var10.bind(var12)();
                var10 = 0;
                if (!var12) {
                    _fun57471_ip = 119;
                    continue _fun57471
                }
            case 116:
                var10 = 1;
            case 119:
                var10 = var11 - var10;
                var1.marginVertical = var10;
                var10 = -var8;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var6];
                var11 = var11.bind(var5)(var8);
                var8 = var11.isIOS;
                var11 = var8.bind(var11)();
                var8 = 1.5;
                if (!var11) {
                    _fun57471_ip = 173;
                    continue _fun57471
                }
            case 171:
                var8 = 0;
            case 173:
                var8 = var10 - var8;
                var1.marginHorizontal = var8;
                var0.neon = var1;
                var1 = {};
                var8 = 'relative';
                var1.position = var8;
                var8 = 2;
                var10 = var9 / var8;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var6];
                var11 = var11.bind(var5)(var8);
                var8 = var11.isIOS;
                var11 = var8.bind(var11)();
                var8 = 0;
                if (!var11) {
                    _fun57471_ip = 239;
                    continue _fun57471
                }
            case 236:
                var8 = 1;
            case 239:
                var8 = var10 - var8;
                var1.marginVertical = var8;
                var0.popContainer = var1;
                var1 = {};
                var1.color = var3;
                var3 = 'absolute';
                var1.position = var3;
                var3 = -var9;
                var1.top = var3;
                var3 = -var9;
                var1.left = var3;
                var3 = -var9;
                var1.right = var3;
                var1.paddingHorizontal = var9;
                var8 = {};
                var10 = 1.2;
                var3 = arg1;
                var3 = var10 + var3;
                var8.translateY = var3;
                var3 = new Array(1);
                var3[0] = var8;
                var1.transform = var3;
                var0.popBackLayer = var1;
                var1 = {};
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var10 = var3[var7];
                var10 = var8.bind(var5)(var10);
                var10 = var10.colors;
                var10 = var10.WHITE;
                var1.color = var10;
                var1.paddingHorizontal = var9;
                var10 = -var9;
                var1.marginHorizontal = var10;
                var9 = -var9;
                var1.marginTop = var9;
                var0.popFrontLayer = var1;
                var1 = {};
                var7 = var3[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.colors;
                var7 = var7.WHITE;
                var1.color = var7;
                var4 = _closure1_slot0;
                var3 = var3[var6];
                var4 = var4.bind(var5)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                var2 = 0;
                if (!var3) {
                    _fun57471_ip = 455;
                    continue _fun57471
                }
            case 445:
                var2 = -1.5;
            case 455:
                var1.marginVertical = var2;
                var0.toon = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun57472: for (var _fun57472_ip = 0;;) switch (_fun57472_ip) {
            case 0:
                var4 = arg0;
                var13 = var4.userId;
                var12 = var4.guildId;
                var5 = var4.userName;
                var _closure2_slot0 = var5;
                var8 = var4.effectDisplayType;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun57472_ip = 72;
                    continue _fun57472
                }
            case 37:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.EffectDisplayType;
                var8 = var0.STATIC;
            case 72:
                var11 = var4.pendingDisplayNameStyles;
                var6 = var4.defaultColor;
                var1 = {
                    'userId': 0,
                    'guildId': 0,
                    'userName': 0,
                    'effectDisplayType': 0,
                    'pendingDisplayNameStyles': 0,
                    'defaultColor': 0
                };
                var9 = null;
                var39 = var1;
                var38 = null;
                var0 = silentSetPrototypeOf(var39, var38);
                var7 = 0;
                var39 = {};
                var38 = var4;
                var37 = var1;
                var4 = copyDataProperties(var39, var38, var37);
                var _closure2_slot1 = var3;
                var18 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 7;
                var1 = var14[var1];
                var10 = var18.bind(var3)(var1);
                var1 = {};
                var1.userId = var13;
                var1.guildId = var12;
                var1.pendingDisplayNameStyles = var11;
                var1 = var10.bind(var3)(var1);
                var11 = _closure1_slot0;
                var10 = 8;
                var10 = var14[var10];
                var13 = var11.bind(var3)(var10);
                var12 = var13.useDisplayNameStylesEnabled;
                var10 = {};
                var15 = 'UsernameWithEffects';
                var10.location = var15;
                var13 = var12.bind(var13)(var10);
                var10 = 9;
                var10 = var14[var10];
                var15 = var11.bind(var3)(var10);
                var12 = var15.useDisplayNameStylesFont;
                var10 = {};
                var10.displayNameStyles = var1;
                var12 = var12.bind(var15)(var10);
                var10 = 10;
                var15 = var14[var10];
                var17 = var11.bind(var3)(var15);
                var16 = var17.useToken;
                var25 = 4;
                var15 = var14[var25];
                var15 = var18.bind(var3)(var15);
                var15 = var15.colors;
                var15 = var15.BACKGROUND_BASE_LOW;
                var15 = var16.bind(var17)(var15);
                var10 = var14[var10];
                var17 = var11.bind(var3)(var10);
                var16 = var17.useToken;
                var10 = var14[var25];
                var10 = var18.bind(var3)(var10);
                var10 = var10.colors;
                var10 = var10.WHITE;
                var18 = var16.bind(var17)(var10);
                var10 = 11;
                var10 = var14[var10];
                var14 = var11.bind(var3)(var10);
                var11 = var14.useDisplayNameStylesAccessibleColors;
                var10 = {};
                var10.displayNameStyles = var1;
                var10.backgroundColor = var15;
                var15 = var11.bind(var14)(var10);
                var10 = var15.length;
                var10 = var10 > var7;
                var11 = undefined;
                if (!var10) {
                    _fun57472_ip = 377;
                    continue _fun57472
                }
            case 373:
                var11 = var15[var7];
            case 377:
                var7 = var9 == var1;
                var10 = undefined;
                if (var7) {
                    _fun57472_ip = 392;
                    continue _fun57472
                }
            case 386:
                var10 = var1.effectId;
            case 392:
                if (!(var9 == var10)) {
                    _fun57472_ip = 428;
                    continue _fun57472
                }
            case 396:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 12;
                var7 = var16[var7];
                var7 = var14.bind(var3)(var7);
                var7 = var7.DisplayNameEffect;
                var10 = var7.SOLID;
            case 428:
                var7 = var9 != var11;
                var22 = null;
                if (!var7) {
                    _fun57472_ip = 468;
                    continue _fun57472
                }
            case 437:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 13;
                var7 = var16[var7];
                var14 = var14.bind(var3)(var7);
                var7 = var14.generateColorVariants;
                var22 = var7.bind(var14)(var11);
            case 468:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 14;
                var14 = var14[var7];
                var14 = var16.bind(var3)(var14);
                var16 = var14.TextStyleSheet;
                var14 = var4.variant;
                var14 = var16[var14];
                var17 = var9 == var14;
                var16 = undefined;
                if (var17) {
                    _fun57472_ip = 518;
                    continue _fun57472
                }
            case 512:
                var16 = var14.fontSize;
            case 518:
                var17 = var9 != var16;
                var19 = 16;
                var14 = var19;
                if (!var17) {
                    _fun57472_ip = 534;
                    continue _fun57472
                }
            case 531:
                var14 = var16;
            case 534:
                _closure2_slot1 = var14;
                var17 = _closure1_slot9;
                var16 = 1;
                var20 = var17.bind(var3)(var16, var14);
                var16 = 1.6;
                var23 = var17.bind(var3)(var16, var14);
                var16 = 1.2;
                var33 = var17.bind(var3)(var16, var14);
                var24 = _closure1_slot8;
                var17 = var9 == var22;
                var16 = undefined;
                if (var17) {
                    _fun57472_ip = 602;
                    continue _fun57472
                }
            case 596:
                var16 = var22.main;
            case 602:
                var17 = var9 != var16;
                var21 = '';
                if (!var17) {
                    _fun57472_ip = 616;
                    continue _fun57472
                }
            case 613:
                var21 = var16;
            case 616:
                var16 = 0.04;
                var38 = var16 * var14;
                var16 = 0.12;
                var16 = var16 * var14;
                var37 = var25 + var16;
                var40 = undefined;
                var39 = var21;
                var36 = var23;
                var35 = var33;
                var21 = var40[var24](var39, var38, var37, var36, var35, var34);
                var24 = _closure1_slot3;
                var17 = var24.useMemo;
                var16 = new Array(2);
                var16[0] = var5;
                var16[1] = var14;
                var14 = function() { // Environment: var2
                    _fun57473: for (var _fun57473_ip = 0;;) switch (_fun57473_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 15;
                            var0 = var2[var0];
                            var2 = undefined;
                            var4 = var1.bind(var2)(var0);
                            var3 = var4.getNodeText;
                            var1 = _closure2_slot0;
                            var3 = var3.bind(var4)(var1);
                            var1 = null;
                            var4 = var1 == var3;
                            if (var4) {
                                _fun57473_ip = 57;
                                continue _fun57473
                            }
                        case 52:
                            var2 = var3.length;
                        case 57:
                            var3 = var1 != var2;
                            var1 = 10;
                            if (!var3) {
                                _fun57473_ip = 70;
                                continue _fun57473
                            }
                        case 67:
                            var1 = var2;
                        case 70:
                            var0 = _closure2_slot1;
                            var1 = var1 * var0;
                            var0 = 0.6;
                            var0 = var1 * var0;
                            return var0;
                    }
                };
                var16 = var17.bind(var24)(var14, var16);
                if (!var13) {
                    _fun57472_ip = 1826;
                    continue _fun57472
                }
            case 701:
                if (!(var9 != var1)) {
                    _fun57472_ip = 1826;
                    continue _fun57472
                }
            case 708:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 6;
                var1 = var14[var1];
                var1 = var13.bind(var3)(var1);
                var1 = var1.EffectDisplayType;
                var1 = var1.PLAIN;
                if (!(var8 !== var1)) {
                    _fun57472_ip = 1719;
                    continue _fun57472
                }
            case 747:
                if (!(var9 != var22)) {
                    _fun57472_ip = 1719;
                    continue _fun57472
                }
            case 754:
                var8 = var4.style;
                var1 = new Array(2);
                var1[0] = var8;
                var8 = var9 != var12;
                if (!var8) {
                    _fun57472_ip = 784;
                    continue _fun57472
                }
            case 774:
                var13 = {};
                var13.fontFamily = var12;
                var8 = var13;
            case 784:
                var1[1] = var8;
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var13 = 12;
                var8 = var8[var13];
                var8 = var14.bind(var3)(var8);
                var8 = var8.DisplayNameEffect;
                var8 = var8.GRADIENT;
                if (!(var8 !== var10)) {
                    _fun57472_ip = 1531;
                    continue _fun57472
                }
            case 827:
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var13];
                var8 = var14.bind(var3)(var8);
                var8 = var8.DisplayNameEffect;
                var8 = var8.NEON;
                if (!(var8 !== var10)) {
                    _fun57472_ip = 1462;
                    continue _fun57472
                }
            case 863:
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var13];
                var8 = var14.bind(var3)(var8);
                var8 = var8.DisplayNameEffect;
                var8 = var8.POP;
                if (!(var8 !== var10)) {
                    _fun57472_ip = 1145;
                    continue _fun57472
                }
            case 899:
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var13];
                var8 = var14.bind(var3)(var8);
                var8 = var8.DisplayNameEffect;
                var8 = var8.TOON;
                if (!(var8 !== var10)) {
                    _fun57472_ip = 992;
                    continue _fun57472
                }
            case 932:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var13];
                var8 = var10.bind(var3)(var8);
                var8 = var8.DisplayNameEffect;
                var8 = var8.SOLID;
                var10 = new Array(2);
                var10[0] = var1;
                var8 = {};
                var8.color = var11;
                var10[1] = var8;
                var17 = undefined;
                var14 = undefined;
                var13 = undefined;
                var11 = undefined;
                _fun57472_ip = 1589;
                continue _fun57472;
            case 992:
                var8 = new Array(2);
                var8[0] = var1;
                var24 = var21.toon;
                var8[1] = var24;
                var24 = _closure1_slot5;
                var18 = var24.bind(var3)(var18);
                var25 = new Array(6);
                var25[0] = var18;
                var18 = var22.light2;
                var18 = var24.bind(var3)(var18);
                var25[1] = var18;
                var18 = var22.light2;
                var18 = var24.bind(var3)(var18);
                var25[2] = var18;
                var18 = var22.light1;
                var18 = var24.bind(var3)(var18);
                var25[3] = var18;
                var18 = var22.light1;
                var18 = var24.bind(var3)(var18);
                var25[4] = var18;
                var18 = var22.main;
                var18 = var24.bind(var3)(var18);
                var25[5] = var18;
                var18 = var22.toonStroke;
                var24 = var24.bind(var3)(var18);
                var26 = var9 != var24;
                var18 = undefined;
                if (!var26) {
                    _fun57472_ip = 1125;
                    continue _fun57472
                }
            case 1122:
                var18 = var24;
            case 1125:
                var14 = 90;
                var11 = var18;
                var17 = var25;
                var13 = var23;
                var10 = var8;
                _fun57472_ip = 1589;
                continue _fun57472;
            case 1145:
                var18 = _closure1_slot5;
                var23 = var9 == var22;
                var8 = undefined;
                if (var23) {
                    _fun57472_ip = 1164;
                    continue _fun57472
                }
            case 1158:
                var8 = var22.dark2;
            case 1164:
                var32 = var18.bind(var3)(var8);
                var18 = _closure1_slot5;
                var23 = var9 == var22;
                var8 = undefined;
                if (var23) {
                    _fun57472_ip = 1188;
                    continue _fun57472
                }
            case 1182:
                var8 = var22.main;
            case 1188:
                var28 = var18.bind(var3)(var8);
                var8 = var9 != var22;
                var17 = undefined;
                var14 = undefined;
                var13 = undefined;
                var11 = undefined;
                var10 = var1;
                if (!var8) {
                    _fun57472_ip = 1589;
                    continue _fun57472
                }
            case 1214:
                var23 = _closure1_slot7;
                var18 = _closure1_slot4;
                var8 = {};
                var24 = var21.popContainer;
                var8.style = var24;
                var26 = _closure1_slot6;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var7];
                var24 = var25.bind(var3)(var24);
                var25 = var24.Text;
                var24 = {};
                var39 = var24;
                var38 = var4;
                var27 = copyDataProperties(var39, var38);
                var29 = 'textStrokeWidth';
                var24[var29] = var33;
                var30 = var9 != var28;
                var27 = undefined;
                if (!var30) {
                    _fun57472_ip = 1293;
                    continue _fun57472
                }
            case 1290:
                var27 = var28;
            case 1293:
                var31 = 'textStrokeColor';
                var24[var31] = var27;
                var27 = new Array(2);
                var27[0] = var1;
                var28 = var21.popBackLayer;
                var27[1] = var28;
                var30 = 'style';
                var24[var30] = var27;
                var28 = 'children';
                var24[var28] = var5;
                var25 = var26.bind(var3)(var25, var24);
                var24 = new Array(2);
                var24[0] = var25;
                var27 = _closure1_slot6;
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var25 = var25[var7];
                var25 = var26.bind(var3)(var25);
                var26 = var25.Text;
                var25 = {};
                var39 = var25;
                var38 = var4;
                var34 = copyDataProperties(var39, var38);
                var25[var29] = var33;
                var33 = var9 != var32;
                var29 = undefined;
                if (!var33) {
                    _fun57472_ip = 1407;
                    continue _fun57472
                }
            case 1404:
                var29 = var32;
            case 1407:
                var25[var31] = var29;
                var29 = new Array(2);
                var29[0] = var1;
                var31 = var21.popFrontLayer;
                var29[1] = var31;
                var25[var30] = var29;
                var25[var28] = var5;
                var25 = var27.bind(var3)(var26, var25);
                var24[1] = var25;
                var8.children = var24;
                var8 = var23.bind(var3)(var18, var8);
                return var8;
            case 1462:
                var18 = _closure1_slot5;
                var23 = var9 == var22;
                var8 = undefined;
                if (var23) {
                    _fun57472_ip = 1481;
                    continue _fun57472
                }
            case 1475:
                var8 = var22.neonStroke;
            case 1481:
                var8 = var18.bind(var3)(var8);
                var22 = var9 != var8;
                var18 = undefined;
                if (!var22) {
                    _fun57472_ip = 1498;
                    continue _fun57472
                }
            case 1495:
                var18 = var8;
            case 1498:
                var8 = new Array(2);
                var8[0] = var1;
                var21 = var21.neon;
                var8[1] = var21;
                var11 = var18;
                var17 = undefined;
                var14 = undefined;
                var13 = var20;
                var10 = var8;
                _fun57472_ip = 1589;
                continue _fun57472;
            case 1531:
                var8 = var15.map;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot5;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var15 = var8.bind(var15)(var2);
                var8 = var15.filter;
                var18 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var19];
                var2 = var18.bind(var3)(var2);
                var2 = var2.isNotNullish;
                var17 = var8.bind(var15)(var2);
                var14 = 45;
                var13 = undefined;
                var11 = undefined;
                var10 = var1;
            case 1589:
                var8 = _closure1_slot6;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {};
                var39 = var1;
                var38 = var4;
                var15 = copyDataProperties(var39, var38);
                var15 = 'gradientColors';
                var1[var15] = var17;
                var15 = 'gradientWidth';
                var1[var15] = var16;
                var16 = 'clamp';
                var15 = 'gradientMode';
                var1[var15] = var16;
                var15 = new Array(1);
                var15[0] = var10;
                var10 = 'style';
                var1[var10] = var15;
                var10 = 'gradientAngle';
                var1[var10] = var14;
                var10 = 'textStrokeWidth';
                var1[var10] = var13;
                var10 = 'textStrokeColor';
                var1[var10] = var11;
                var10 = 'children';
                var1[var10] = var5;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 1719:
                var8 = _closure1_slot6;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {};
                var39 = var1;
                var38 = var4;
                var10 = copyDataProperties(var39, var38);
                var11 = var4.style;
                var10 = new Array(2);
                var10[0] = var11;
                var9 = var9 != var12;
                if (!var9) {
                    _fun57472_ip = 1787;
                    continue _fun57472
                }
            case 1777:
                var11 = {};
                var11.fontFamily = var12;
                var9 = var11;
            case 1787:
                var10[1] = var9;
                var9 = 'style';
                var1[var9] = var10;
                var9 = 'color';
                var1[var9] = var6;
                var9 = 'children';
                var1[var9] = var5;
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 1826:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var39 = var0;
                var38 = var4;
                var4 = copyDataProperties(var39, var38);
                var4 = 'color';
                var0[var4] = var6;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/native/UsernameWithEffects.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = 0.6;
    var2.AVERAGE_FONT_WIDTH_RATIO = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 479, 6993, 3983, 3984, 6994, 3153, 6995, 1633, 1631, 3942, 3156, 1304, 2]);