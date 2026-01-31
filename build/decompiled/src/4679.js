// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = ['height', 'minHeight', 'maxHeight', 'backgroundColor', 'borderBottomColor', 'borderBottomEndRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomStartRadius', 'borderBottomWidth', 'borderColor', 'borderEndColor', 'borderEndWidth', 'borderLeftColor', 'borderLeftWidth', 'borderRadius', 'borderRightColor', 'borderRightWidth', 'borderStartColor', 'borderStartWidth', 'borderStyle', 'borderTopColor', 'borderTopEndRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopStartRadius', 'borderTopWidth', 'borderWidth', 'boxShadow', 'elevation', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'opacity', 'transform'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var5 = var6[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Animated;
    var _closure1_slot6 = var5;
    var5 = var3.Platform;
    var5 = var3.StyleSheet;
    var _closure1_slot7 = var5;
    var3 = var3.View;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot9 = var4;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'stretch'
    };
    var3.content = var6;
    var6 = {
        'marginHorizontal': 16,
        'justifyContent': 'center'
    };
    var3.title = var6;
    var6 = {
        'justifyContent': 'center',
        'alignItems': 'flex-start'
    };
    var3.left = var6;
    var6 = {
        'justifyContent': 'center',
        'alignItems': 'flex-end'
    };
    var3.right = var6;
    var6 = {
        'flexGrow': 1,
        'flexBasis': 0
    };
    var3.expand = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot11 = var3;
    var1 = function arg0() {
        _fun43533: for (var _fun43533_ip = 0;;) switch (_fun43533_ip) {
            case 0:
                var6 = arg0;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var2 = var7[var0];
                var3 = undefined;
                var4 = var1.bind(var3)(var2);
                var2 = var4.useSafeAreaInsets;
                var19 = var2.bind(var4)();
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useSafeAreaFrame;
                var0 = var0.bind(var1)();
                var4 = _closure1_slot5;
                var2 = var4.useContext;
                var5 = _closure1_slot1;
                var1 = 5;
                var1 = var7[var1];
                var1 = var5.bind(var3)(var1);
                var13 = var2.bind(var4)(var1);
                var8 = var19.top;
                var30 = var6.layout;
                if (!(var3 === var30)) {
                    _fun43533_ip = 106;
                    continue _fun43533
                }
            case 103:
                var30 = var0;
            case 106:
                var0 = var6.modal;
                var7 = var3 !== var0;
                if (!var7) {
                    _fun43533_ip = 122;
                    continue _fun43533
                }
            case 119:
                var7 = var0;
            case 122:
                var25 = var6.title;
                var21 = var6.headerTitle;
                var0 = var6.headerTitleAlign;
                var28 = 'left';
                if (!(var3 !== var0)) {
                    _fun43533_ip = 150;
                    continue _fun43533
                }
            case 147:
                var28 = var0;
            case 150:
                var5 = var6.headerLeft;
                var33 = var6.headerLeftLabelVisible;
                var9 = var6.headerTransparent;
                var23 = var6.headerTintColor;
                var11 = var6.headerBackground;
                var1 = var6.headerRight;
                var24 = var6.headerTitleAllowFontScaling;
                var22 = var6.headerTitleStyle;
                var20 = var6.headerLeftContainerStyle;
                var17 = var6.headerRightContainerStyle;
                var26 = var6.headerTitleContainerStyle;
                var35 = var6.headerBackgroundContainerStyle;
                var10 = var6.headerStyle;
                var0 = var6.headerShadowVisible;
                var4 = var6.headerPressColor;
                var2 = var6.headerPressOpacity;
                var12 = var6.headerStatusBarHeight;
                if (!(var3 === var12)) {
                    _fun43533_ip = 267;
                    continue _fun43533
                }
            case 256:
                var6 = 0;
                if (var13) {
                    _fun43533_ip = 264;
                    continue _fun43533
                }
            case 261:
                var6 = var8;
            case 264:
                var12 = var6;
            case 267:
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 6;
                var6 = var13[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.bind(var3)(var30, var7, var12);
                var8 = _closure1_slot7;
                var7 = var8.flatten;
                if (var10) {
                    _fun43533_ip = 309;
                    continue _fun43533
                }
            case 307:
                var10 = {};
            case 309:
                var61 = var7.bind(var8)(var10);
                var27 = var61.height;
                if (!(var3 === var27)) {
                    _fun43533_ip = 326;
                    continue _fun43533
                }
            case 323:
                var27 = var6;
            case 326:
                var14 = var61.minHeight;
                var13 = var61.maxHeight;
                var59 = var61.backgroundColor;
                var58 = var61.borderBottomColor;
                var57 = var61.borderBottomEndRadius;
                var56 = var61.borderBottomLeftRadius;
                var55 = var61.borderBottomRightRadius;
                var54 = var61.borderBottomStartRadius;
                var53 = var61.borderBottomWidth;
                var52 = var61.borderColor;
                var51 = var61.borderEndColor;
                var50 = var61.borderEndWidth;
                var49 = var61.borderLeftColor;
                var48 = var61.borderLeftWidth;
                var47 = var61.borderRadius;
                var46 = var61.borderRightColor;
                var45 = var61.borderRightWidth;
                var44 = var61.borderStartColor;
                var43 = var61.borderStartWidth;
                var42 = var61.borderStyle;
                var41 = var61.borderTopColor;
                var40 = var61.borderTopEndRadius;
                var39 = var61.borderTopLeftRadius;
                var38 = var61.borderTopRightRadius;
                var37 = var61.borderTopStartRadius;
                var36 = var61.borderTopWidth;
                var34 = var61.borderWidth;
                var32 = var61.boxShadow;
                var31 = var61.elevation;
                var29 = var61.shadowColor;
                var18 = var61.shadowOffset;
                var15 = var61.shadowOpacity;
                var7 = var61.shadowRadius;
                var10 = var61.opacity;
                var8 = var61.transform;
                var60 = _closure1_slot4;
                var6 = _closure1_slot3;
                var6 = var60.bind(var3)(var61, var6);
                var6 = {};
                var6.backgroundColor = var59;
                var6.borderBottomColor = var58;
                var6.borderBottomEndRadius = var57;
                var6.borderBottomLeftRadius = var56;
                var6.borderBottomRightRadius = var55;
                var6.borderBottomStartRadius = var54;
                var6.borderBottomWidth = var53;
                var6.borderColor = var52;
                var6.borderEndColor = var51;
                var6.borderEndWidth = var50;
                var6.borderLeftColor = var49;
                var6.borderLeftWidth = var48;
                var6.borderRadius = var47;
                var6.borderRightColor = var46;
                var6.borderRightWidth = var45;
                var6.borderStartColor = var44;
                var6.borderStartWidth = var43;
                var6.borderStyle = var42;
                var6.borderTopColor = var41;
                var6.borderTopEndRadius = var40;
                var6.borderTopLeftRadius = var39;
                var6.borderTopRightRadius = var38;
                var6.borderTopStartRadius = var37;
                var6.borderTopWidth = var36;
                var6.borderWidth = var34;
                var6.boxShadow = var32;
                var6.elevation = var31;
                var6.shadowColor = var29;
                var6.shadowOffset = var18;
                var6.shadowOpacity = var15;
                var6.shadowRadius = var7;
                var6.opacity = var10;
                var6.transform = var8;
                var29 = var6;
                for (var7 in var29)
                    case 720: {
                        case 729: var32 = var7;
                        var34 = var6[var32];
                        if (var3 !== var34) {
                            _fun43533_ip = 720;
                            continue _fun43533
                        }
                        case 740: var32 = delete var6[var32];
                        _fun43533_ip = 720;
                        continue _fun43533;
                    }
            case 746:
                var31 = new Array(2);
                var31[0] = var6;
                var32 = false;
                var0 = var32 === var0;
                if (!var0) {
                    _fun43533_ip = 777;
                    continue _fun43533
                }
            case 763:
                var0 = {
                    'elevation': 0,
                    'shadowOpacity': 0,
                    'borderBottomWidth': 0
                };
            case 777:
                var31[1] = var0;
                var29 = null;
                if (!var5) {
                    _fun43533_ip = 813;
                    continue _fun43533
                }
            case 786:
                var0 = {};
                var0.tintColor = var23;
                var0.pressColor = var4;
                var0.pressOpacity = var2;
                var0.labelVisible = var33;
                var29 = var5.bind(var3)(var0);
            case 813:
                var15 = null;
                if (!var1) {
                    _fun43533_ip = 840;
                    continue _fun43533
                }
            case 818:
                var0 = {};
                var0.tintColor = var23;
                var0.pressColor = var4;
                var0.pressOpacity = var2;
                var15 = var1.bind(var3)(var0);
            case 840:
                var1 = 'function';
                var0 = typeof var21;
                if (!(var1 !== var0)) {
                    _fun43533_ip = 858;
                    continue _fun43533
                }
            case 851:
                var21 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot9;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = global;
                    var6 = var0.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var0 = arg0;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
            case 858:
                var2 = _closure1_slot10;
                var0 = _closure1_slot5;
                var1 = var0.Fragment;
                var0 = {};
                var6 = _closure1_slot9;
                var4 = _closure1_slot6;
                var5 = var4.View;
                var4 = {};
                var18 = 'box-none';
                var4.pointerEvents = var18;
                var34 = _closure1_slot7;
                var36 = var34.absoluteFill;
                var34 = new Array(3);
                var34[0] = var36;
                var36 = {};
                var37 = 0;
                var36.zIndex = var37;
                var34[1] = var36;
                var34[2] = var35;
                var4.style = var34;
                if (var11) {
                    _fun43533_ip = 985;
                    continue _fun43533
                }
            case 942:
                var7 = null;
                if (var9) {
                    _fun43533_ip = 983;
                    continue _fun43533
                }
            case 947:
                var35 = _closure1_slot9;
                var34 = _closure1_slot1;
                var36 = _closure1_slot2;
                var9 = 8;
                var9 = var36[var9];
                var34 = var34.bind(var3)(var9);
                var9 = {};
                var9.style = var31;
                var7 = var35.bind(var3)(var34, var9);
            case 983:
                _fun43533_ip = 996;
                continue _fun43533;
            case 985:
                var9 = {};
                var9.style = var31;
                var7 = var11.bind(var3)(var9);
            case 996:
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var11 = _closure1_slot6;
                var6 = var11.View;
                var5 = {};
                var5.pointerEvents = var18;
                var9 = {};
                var9.height = var27;
                var9.minHeight = var14;
                var9.maxHeight = var13;
                var9.opacity = var10;
                var9.transform = var8;
                var8 = new Array(1);
                var8[0] = var9;
                var5.style = var8;
                var13 = _closure1_slot9;
                var10 = _closure1_slot8;
                var8 = {};
                var9 = 'none';
                var8.pointerEvents = var9;
                var9 = {};
                var9.height = var12;
                var8.style = var9;
                var9 = var13.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var9.pointerEvents = var18;
                var14 = _closure1_slot11;
                var12 = var14.content;
                var9.style = var12;
                var12 = var11.View;
                var11 = {};
                var11.pointerEvents = var18;
                var27 = var14.left;
                var14 = new Array(4);
                var14[0] = var27;
                var27 = 'center';
                var28 = var27 === var28;
                var27 = var28;
                if (!var27) {
                    _fun43533_ip = 1182;
                    continue _fun43533
                }
            case 1172:
                var31 = _closure1_slot11;
                var27 = var31.expand;
            case 1182:
                var14[1] = var27;
                var27 = {};
                var31 = var19.left;
                var27.marginStart = var31;
                var14[2] = var27;
                var14[3] = var20;
                var11.style = var14;
                var11.children = var29;
                var12 = var13.bind(var3)(var12, var11);
                var11 = new Array(3);
                var11[0] = var12;
                var14 = _closure1_slot9;
                var12 = _closure1_slot6;
                var13 = var12.View;
                var12 = {};
                var12.pointerEvents = var18;
                var20 = _closure1_slot11;
                var27 = var20.title;
                var20 = new Array(3);
                var20[0] = var27;
                var27 = {};
                var30 = var30.width;
                var31 = 16;
                if (var28) {
                    _fun43533_ip = 1324;
                    continue _fun43533
                }
            case 1278:
                var35 = var31;
                if (!var29) {
                    _fun43533_ip = 1287;
                    continue _fun43533
                }
            case 1284:
                var35 = 72;
            case 1287:
                var28 = var31;
                if (!var15) {
                    _fun43533_ip = 1296;
                    continue _fun43533
                }
            case 1293:
                var28 = 72;
            case 1296:
                var34 = var19.left;
                var28 = var35 + var28;
                var34 = var28 + var34;
                var28 = var19.right;
                var28 = var34 - var28;
                var28 = var30 - var28;
                _fun43533_ip = 1384;
                continue _fun43533;
            case 1324:
                if (!var29) {
                    _fun43533_ip = 1340;
                    continue _fun43533
                }
            case 1327:
                var29 = 32;
                if (!(var32 !== var33)) {
                    _fun43533_ip = 1337;
                    continue _fun43533
                }
            case 1334:
                var29 = 80;
            case 1337:
                var31 = var29;
            case 1340:
                var29 = global;
                var34 = var29.Math;
                var33 = var34.max;
                var32 = var19.left;
                var29 = var19.right;
                var29 = var33.bind(var34)(var32, var29);
                var31 = var31 + var29;
                var29 = 2;
                var29 = var29 * var31;
                var28 = var30 - var29;
            case 1384:
                var27.maxWidth = var28;
                var20[1] = var27;
                var20[2] = var26;
                var12.style = var20;
                var20 = {};
                var20.children = var25;
                var20.allowFontScaling = var24;
                var20.tintColor = var23;
                var20.style = var22;
                var20 = var21.bind(var3)(var20);
                var12.children = var20;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var14 = _closure1_slot9;
                var12 = _closure1_slot6;
                var13 = var12.View;
                var12 = {};
                var12.pointerEvents = var18;
                var18 = _closure1_slot11;
                var20 = var18.right;
                var16 = new Array(4);
                var16[0] = var20;
                var18 = var18.expand;
                var16[1] = var18;
                var18 = {};
                var19 = var19.right;
                var18.marginEnd = var19;
                var16[2] = var18;
                var16[3] = var17;
                var12.style = var16;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var9.children = var11;
                var9 = var7.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 1571, 4680, 4677, 4682, 4683]);