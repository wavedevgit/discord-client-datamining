// modules/video_calls/native/components/CallBarAction.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var4 = global;
    var8 = var4.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var5 = var7[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.Image;
    var _closure1_slot4 = var5;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var9 = 2;
    var3 = var7[var9];
    var3 = var6.bind(var0)(var3);
    var3 = var3.resetFocusTimer;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.jsx;
    var _closure1_slot7 = var5;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var7[var3];
    var12 = var6.bind(var0)(var3);
    var8 = var12.hexWithOpacity;
    var10 = 5;
    var3 = var7[var10];
    var3 = var11.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var5 = var3.WHITE;
    var3 = 0.24;
    var3 = var8.bind(var12)(var5, var3);
    var _closure1_slot9 = var3;
    var12 = var4.Object;
    var8 = var12.freeze;
    var3 = 6;
    var5 = {
        'buttonRadius': 28,
        'badgeRadius': 6,
        'cutoutInset': 3
    };
    var5 = var8.bind(var12)(var5);
    var _closure1_slot10 = var5;
    var12 = var4.Object;
    var5 = var12.freeze;
    var8 = 24;
    var4 = {
        'buttonRadius': 24,
        'badgeRadius': 4,
        'cutoutInset': 2
    };
    var4 = var5.bind(var12)(var4);
    var _closure1_slot11 = var4;
    var5 = var4.buttonRadius;
    var5 = var9 * var5;
    var5 = var5 * var10;
    var8 = var8 + var5;
    var5 = 96;
    var5 = var8 + var5;
    var _closure1_slot12 = var5;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.createStyles;
    var3 = {};
    var9 = {};
    var12 = 'absolute';
    var9.position = var12;
    var3.buttonContainer = var9;
    var9 = {
        'position': 'absolute',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.iconContainer = var9;
    var9 = {
        'backgroundColor': 'white',
        'position': 'absolute'
    };
    var3.badge = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967292,
        'right': 4294967292,
        'height': 24,
        'minWidth': 24,
        'paddingHorizontal': 4,
        'borderRadius': 12,
        'borderWidth': 4,
        'borderColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.PRIMARY_760;
    var9.borderColor = var12;
    var3.notificationArea = var9;
    var9 = {};
    var12 = 16;
    var9.lineHeight = var12;
    var3.notificationText = var9;
    var9 = {};
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
    var9.backgroundColor = var12;
    var3.notificationAreaMentioned = var9;
    var9 = {};
    var10 = var7[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PRIMARY_600;
    var9.backgroundColor = var10;
    var3.notificationAreaUnread = var9;
    var3 = var5.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = function arg0() {
        _fun63066: for (var _fun63066_ip = 0;;) switch (_fun63066_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.appearsDisabled;
                var3 = undefined;
                if (!(var18 === var3)) {
                    _fun63066_ip = 19;
                    continue _fun63066
                }
            case 17:
                var18 = false;
            case 19:
                var14 = var1.backgroundColor;
                var26 = var1.imageStyle;
                var0 = var1.onPress;
                var _closure2_slot0 = var0;
                var7 = var1.accessibilityLabel;
                var6 = var1.accessibilityState;
                var27 = var1.source;
                var10 = var1.showBadge;
                if (!(var10 === var3)) {
                    _fun63066_ip = 67;
                    continue _fun63066
                }
            case 65:
                var10 = false;
            case 67:
                var0 = var1.isSmallSize;
                if (!(var0 === var3)) {
                    _fun63066_ip = 79;
                    continue _fun63066
                }
            case 77:
                var0 = false;
            case 79:
                var8 = var1.children;
                var24 = var1.lottieComponent;
                var25 = var1.lottieComponentColor;
                var23 = var1.IconComponent;
                var1 = _closure1_slot13;
                var13 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var9 = var1.bind(var3)();
                var2 = 12;
                var5 = var2;
                if (!var0) {
                    _fun63066_ip = 164;
                    continue _fun63066
                }
            case 147:
                var1 = _closure1_slot12;
                var1 = var9 < var1;
                var5 = var2;
                if (!var1) {
                    _fun63066_ip = 164;
                    continue _fun63066
                }
            case 161:
                var5 = 6;
            case 164:
                if (var0) {
                    _fun63066_ip = 173;
                    continue _fun63066
                }
            case 167:
                var15 = _closure1_slot10;
                _fun63066_ip = 177;
                continue _fun63066;
            case 173:
                var15 = _closure1_slot11;
            case 177:
                var0 = var15.buttonRadius;
                var1 = 2;
                var22 = var1 * var0;
                var0 = var15.badgeRadius;
                var17 = var1 * var0;
                var1 = var15.badgeRadius;
                var0 = var15.cutoutInset;
                var9 = var1 + var0;
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 8;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.accessibilityLabel = var7;
                var7 = 'button';
                var0.accessibilityRole = var7;
                var0.accessibilityState = var6;
                var4 = function() {
                    var1 = _closure1_slot6;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onPress = var4;
                var4 = false;
                var0.disabled = var4;
                var4 = {};
                var4.width = var22;
                var4.height = var22;
                var6 = var15.buttonRadius;
                var4.borderRadius = var6;
                var4.marginHorizontal = var5;
                var0.style = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot5;
                var4 = {};
                var11 = var13.buttonContainer;
                var7 = new Array(3);
                var7[0] = var11;
                var11 = {};
                var11.width = var22;
                var11.height = var22;
                var12 = var15.buttonRadius;
                var11.borderRadius = var12;
                var7[1] = var11;
                var11 = {};
                var12 = 1;
                if (!var18) {
                    _fun63066_ip = 375;
                    continue _fun63066
                }
            case 365:
                var12 = 0.25;
            case 375:
                var11.opacity = var12;
                var7[2] = var11;
                var4.style = var7;
                var12 = _closure1_slot7;
                var11 = _closure1_slot1;
                var7 = _closure1_slot2;
                var18 = 9;
                var7 = var7[var18];
                var11 = var11.bind(var3)(var7);
                var7 = {};
                var19 = var15.buttonRadius;
                var7.circleRadius = var19;
                var7.cutoutRadius = var9;
                var7.enableCutout = var10;
                var19 = 45;
                var7.cutoutPositionInDegrees = var19;
                var9 = null;
                if (!(var9 == var14)) {
                    _fun63066_ip = 452;
                    continue _fun63066
                }
            case 448:
                var14 = _closure1_slot9;
            case 452:
                var7.circleFillColor = var14;
                var11 = var12.bind(var3)(var11, var7);
                var7 = new Array(4);
                var7[0] = var11;
                var14 = _closure1_slot7;
                var12 = _closure1_slot5;
                var11 = {};
                var21 = var13.iconContainer;
                var20 = new Array(2);
                var20[0] = var21;
                var21 = {};
                var21.width = var22;
                var21.height = var22;
                var20[1] = var21;
                var11.style = var20;
                if (!(var9 == var24)) {
                    _fun63066_ip = 565;
                    continue _fun63066
                }
            case 517:
                if (!(var9 == var23)) {
                    _fun63066_ip = 547;
                    continue _fun63066
                }
            case 521:
                var22 = _closure1_slot7;
                var21 = _closure1_slot4;
                var20 = {};
                var20.source = var27;
                var20.style = var26;
                var20 = var22.bind(var3)(var21, var20);
                _fun63066_ip = 563;
                continue _fun63066;
            case 547:
                var22 = _closure1_slot7;
                var21 = {};
                var21.style = var26;
                var20 = var22.bind(var3)(var23, var21);
            case 563:
                _fun63066_ip = 587;
                continue _fun63066;
            case 565:
                var23 = _closure1_slot3;
                var22 = var23.cloneElement;
                var21 = {};
                var21.color = var25;
                var20 = var22.bind(var23)(var24, var21);
            case 587:
                var11.children = var20;
                var11 = var14.bind(var3)(var12, var11);
                var7[1] = var11;
                var9 = null;
                if (!var10) {
                    _fun63066_ip = 751;
                    continue _fun63066
                }
            case 609:
                var12 = _closure1_slot7;
                var11 = _closure1_slot5;
                var10 = {};
                var14 = var13.badge;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = {};
                var14.width = var17;
                var14.height = var17;
                var17 = var15.badgeRadius;
                var14.borderRadius = var17;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var20 = var16[var18];
                var23 = var17.bind(var3)(var20);
                var22 = var23.getBadgeTop;
                var21 = var15.badgeRadius;
                var20 = var15.buttonRadius;
                var20 = var22.bind(var23)(var21, var20, var19);
                var14.top = var20;
                var16 = var16[var18];
                var18 = var17.bind(var3)(var16);
                var17 = var18.getBadgeLeft;
                var16 = var15.badgeRadius;
                var15 = var15.buttonRadius;
                var15 = var17.bind(var18)(var16, var15, var19);
                var14.left = var15;
                var13[1] = var14;
                var10.style = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 751:
                var7[2] = var9;
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/CallBarAction.tsx';
    var5 = var6.bind(var7)(var5);
    var2.SMALL_ACTION_BUTTON_DIMENSIONS = var4;
    var2.ActionButton = var3;
    var3 = function(arg0) { // Environment: var1
        _fun63068: for (var _fun63068_ip = 0;;) switch (_fun63068_ip) {
            case 0:
                var5 = arg0;
                var11 = var5.isActive;
                var2 = var5.disableTint;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun63068_ip = 23;
                    continue _fun63068
                }
            case 21:
                var2 = false;
            case 23:
                var8 = var5.showBadge;
                if (!(var8 === var3)) {
                    _fun63068_ip = 35;
                    continue _fun63068
                }
            case 33:
                var8 = false;
            case 35:
                var9 = var5.isSmallSize;
                if (!(var9 === var3)) {
                    _fun63068_ip = 47;
                    continue _fun63068
                }
            case 45:
                var9 = false;
            case 47:
                var12 = var5.backgroundColor;
                var4 = var5.tintColor;
                var1 = {
                    'isActive': 0,
                    'disableTint': 0,
                    'showBadge': 0,
                    'isSmallSize': 0,
                    'backgroundColor': 0,
                    'tintColor': 0
                };
                var6 = null;
                var16 = var1;
                var15 = null;
                var0 = silentSetPrototypeOf(var16, var15);
                var16 = {};
                var15 = var5;
                var14 = var1;
                var7 = copyDataProperties(var16, var15, var14);
                var10 = null;
                if (!var11) {
                    _fun63068_ip = 134;
                    continue _fun63068
                }
            case 100:
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                var10 = var0.WHITE;
            case 134:
                var5 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 5;
                var1 = var13[var1];
                var1 = var5.bind(var3)(var1);
                var5 = var1.unsafe_rawColors;
                if (var11) {
                    _fun63068_ip = 173;
                    continue _fun63068
                }
            case 165:
                var1 = var5.WHITE;
                _fun63068_ip = 179;
                continue _fun63068;
            case 173:
                var1 = var5.PRIMARY_900;
            case 179:
                var5 = undefined;
                if (var2) {
                    _fun63068_ip = 187;
                    continue _fun63068
                }
            case 184:
                var5 = var1;
            case 187:
                var2 = _closure1_slot7;
                var1 = _closure1_slot14;
                var0 = {};
                if (!(var6 != var12)) {
                    _fun63068_ip = 204;
                    continue _fun63068
                }
            case 201:
                var10 = var12;
            case 204:
                var0.backgroundColor = var10;
                var10 = {};
                var12 = var5;
                if (!(var6 != var4)) {
                    _fun63068_ip = 220;
                    continue _fun63068
                }
            case 217:
                var12 = var4;
            case 220:
                var10.tintColor = var12;
                var0.imageStyle = var10;
                var10 = {};
                var10.selected = var11;
                var0.accessibilityState = var10;
                var0.isSmallSize = var9;
                var16 = var0;
                var15 = var7;
                var7 = copyDataProperties(var16, var15);
                var7 = 'showBadge';
                var0[var7] = var8;
                if (!(var6 != var4)) {
                    _fun63068_ip = 273;
                    continue _fun63068
                }
            case 270:
                var5 = var4;
            case 273:
                var4 = 'lottieComponentColor';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ToggledActionButton = var3;
    var3 = function(arg0) { // Environment: var1
        _fun63069: for (var _fun63069_ip = 0;;) switch (_fun63069_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.isSmallSize;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun63069_ip = 17;
                    continue _fun63069
                }
            case 15:
                var5 = false;
            case 17:
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.isSmallSize = var0;
                var10 = {};
                var9 = var2;
                var8 = var1;
                var9 = copyDataProperties(var10, var9, var8);
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 5;
                var6 = var7[var1];
                var6 = var2.bind(var3)(var6);
                var6 = var6.unsafe_rawColors;
                var6 = var6.RED_400;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var7 = var1.WHITE;
                var2 = _closure1_slot7;
                var1 = _closure1_slot14;
                var0 = {};
                var0.backgroundColor = var6;
                var6 = {};
                var6.tintColor = var7;
                var0.imageStyle = var6;
                var0.isSmallSize = var5;
                var10 = var0;
                var4 = copyDataProperties(var10, var9);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PrimaryActionButton = var3;
    var1 = function(arg0) { // Environment: var1
        _fun63070: for (var _fun63070_ip = 0;;) switch (_fun63070_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.notifications;
                var9 = var2.isMentioned;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.notifications = var0;
                var1.isMentioned = var0;
                var15 = {};
                var14 = var2;
                var13 = var1;
                var14 = copyDataProperties(var15, var14, var13);
                var0 = _closure1_slot13;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = _closure1_slot14;
                var4 = {};
                var15 = var4;
                var6 = copyDataProperties(var15, var14);
                var6 = {};
                var12 = var11.notificationArea;
                var8 = new Array(2);
                var8[0] = var12;
                var12 = true;
                if (!(var12 !== var9)) {
                    _fun63070_ip = 114;
                    continue _fun63070
                }
            case 102:
                if (!(var3 !== var9)) {
                    _fun63070_ip = 114;
                    continue _fun63070
                }
            case 106:
                var9 = var11.notificationAreaUnread;
                _fun63070_ip = 120;
                continue _fun63070;
            case 114:
                var9 = var11.notificationAreaMentioned;
            case 120:
                var8[1] = var9;
                var6.style = var8;
                var9 = _closure1_slot7;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 10;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'always-white'
                };
                var11 = var11.notificationText;
                var7.style = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6.children = var7;
                var7 = var2.bind(var3)(var1, var6);
                var6 = 'children';
                var4[var6] = var7;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.NotifiedActionButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7904, 33, 3240, 671, 1297, 7928, 4904, 7929, 3941, 2]);