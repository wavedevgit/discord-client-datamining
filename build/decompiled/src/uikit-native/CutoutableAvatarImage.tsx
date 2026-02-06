// uikit-native/CutoutableAvatarImage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var10;
    var0 = function arg0() {
        _fun48369: for (var _fun48369_ip = 0;;) switch (_fun48369_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.animate;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun48369_ip = 19;
                    continue _fun48369
                }
            case 17:
                var11 = false;
            case 19:
                var _closure2_slot0 = var11;
                var6 = var1.cutout;
                var _closure2_slot1 = var6;
                var8 = var1.source;
                var5 = var1.style;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 7;
                var1 = var10[var1];
                var2 = var9.bind(var3)(var1);
                var1 = var2.useAnimatedProps;
                var0 = function() {
                    _fun48370: for (var _fun48370_ip = 0;;) switch (_fun48370_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var7 = 'animate-never';
                            if (!var0) {
                                _fun48370_ip = 18;
                                continue _fun48370
                            }
                        case 16:
                            var7 = undefined;
                        case 18:
                            var0 = {};
                            var1 = _closure2_slot1;
                            var2 = var1.shape;
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 8;
                            var1 = var1[var5];
                            var8 = undefined;
                            var1 = var6.bind(var8)(var1);
                            var1 = var1.CutoutShape;
                            var1 = var1.RoundedRect;
                            if (!(var2 !== var1)) {
                                _fun48370_ip = 224;
                                continue _fun48370
                            }
                        case 74:
                            var2 = {};
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = var10[var5];
                            var1 = var9.bind(var8)(var1);
                            var1 = var1.CutoutShape;
                            var1 = var1.Circle;
                            var2.shape = var1;
                            var6 = 9;
                            var1 = var10[var6];
                            var14 = var9.bind(var8)(var1);
                            var13 = var14.withSpring;
                            var1 = _closure2_slot1;
                            var12 = var1.x;
                            var11 = _closure1_slot5;
                            var11 = var13.bind(var14)(var12, var11, var7);
                            var2.x = var11;
                            var11 = var10[var6];
                            var14 = var9.bind(var8)(var11);
                            var13 = var14.withSpring;
                            var12 = var1.y;
                            var11 = _closure1_slot5;
                            var11 = var13.bind(var14)(var12, var11, var7);
                            var2.y = var11;
                            var6 = var10[var6];
                            var10 = var9.bind(var8)(var6);
                            var9 = var10.withSpring;
                            var6 = var1.size;
                            var1 = _closure1_slot5;
                            var1 = var9.bind(var10)(var6, var1, var7);
                            var2.size = var1;
                            _fun48370_ip = 442;
                            continue _fun48370;
                        case 224:
                            var1 = {};
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = var9[var5];
                            var5 = var6.bind(var8)(var5);
                            var5 = var5.CutoutShape;
                            var5 = var5.RoundedRect;
                            var1.shape = var5;
                            var5 = 9;
                            var10 = var9[var5];
                            var13 = var6.bind(var8)(var10);
                            var12 = var13.withSpring;
                            var4 = _closure2_slot1;
                            var11 = var4.x;
                            var10 = _closure1_slot5;
                            var10 = var12.bind(var13)(var11, var10, var7);
                            var1.x = var10;
                            var10 = var9[var5];
                            var13 = var6.bind(var8)(var10);
                            var12 = var13.withSpring;
                            var11 = var4.y;
                            var10 = _closure1_slot5;
                            var10 = var12.bind(var13)(var11, var10, var7);
                            var1.y = var10;
                            var10 = var9[var5];
                            var13 = var6.bind(var8)(var10);
                            var12 = var13.withSpring;
                            var11 = var4.width;
                            var10 = _closure1_slot5;
                            var10 = var12.bind(var13)(var11, var10, var7);
                            var1.width = var10;
                            var10 = var9[var5];
                            var13 = var6.bind(var8)(var10);
                            var12 = var13.withSpring;
                            var11 = var4.height;
                            var10 = _closure1_slot5;
                            var10 = var12.bind(var13)(var11, var10, var7);
                            var1.height = var10;
                            var5 = var9[var5];
                            var6 = var6.bind(var8)(var5);
                            var5 = var6.withSpring;
                            var4 = var4.cornerRadius;
                            var3 = _closure1_slot5;
                            var3 = var5.bind(var6)(var4, var3, var7);
                            var1.cornerRadius = var3;
                            var2 = var1;
                        case 442:
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.cutouts = var1;
                            return var0;
                    }
                };
                var4 = {};
                var4.animate = var11;
                var4.cutout = var6;
                var6 = 8;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.CutoutShape;
                var4.CutoutShape = var6;
                var6 = 9;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.withSpring;
                var4.withSpring = var6;
                var6 = _closure1_slot5;
                var4.CHANNEL_SPRING_CONFIG = var6;
                var0.__closure = var4;
                var4 = 11368409055559.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot14;
                var0.__initData = var4;
                var4 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot13;
                var0 = {};
                var0.style = var5;
                var0.animatedProps = var4;
                var6 = _closure1_slot6;
                var9 = _closure1_slot1;
                var4 = 10;
                var4 = var10[var4];
                var5 = var9.bind(var3)(var4);
                var4 = {};
                var7 = _closure1_slot10;
                var7 = var7.image;
                var4.style = var7;
                var7 = 11;
                var7 = var10[var7];
                var7 = var9.bind(var3)(var7);
                var7 = var7.bind(var3)(var8);
                var4.source = var7;
                var7 = true;
                var4.usesSmallCache = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun48371: for (var _fun48371_ip = 0;;) switch (_fun48371_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.cutout;
                var16 = var0.size;
                var15 = var0.source;
                var4 = var0.style;
                var0 = 2;
                var14 = var16 / var0;
                var0 = var13.radius;
                var8 = null;
                var26 = var14;
                if (!(var8 != var0)) {
                    _fun48371_ip = 49;
                    continue _fun48371
                }
            case 46:
                var26 = var0;
            case 49:
                var0 = var13.inset;
                var1 = var8 != var0;
                var2 = 0;
                if (!var1) {
                    _fun48371_ip = 67;
                    continue _fun48371
                }
            case 64:
                var2 = var0;
            case 67:
                var11 = var13.imageType;
                if (!(var8 == var11)) {
                    _fun48371_ip = 90;
                    continue _fun48371
                }
            case 77:
                var0 = _closure1_slot12;
                var11 = var0.CIRCULAR;
            case 90:
                var28 = var16 - var2;
                var0 = _closure1_slot12;
                var0 = var0.CIRCULAR;
                var27 = var16;
                if (!(var11 === var0)) {
                    _fun48371_ip = 117;
                    continue _fun48371
                }
            case 114:
                var27 = var14;
            case 117:
                var1 = var13.direction;
                var0 = _closure1_slot11;
                var0 = var0.BOTTOM_RIGHT;
                if (!(var0 !== var1)) {
                    _fun48371_ip = 165;
                    continue _fun48371
                }
            case 137:
                var0 = _closure1_slot11;
                var0 = var0.BOTTOM_LEFT;
                if (!(var0 === var1)) {
                    _fun48371_ip = 181;
                    continue _fun48371
                }
            case 151:
                var28 = var26 + var2;
                var0 = var16 - var26;
                var27 = var0 - var2;
                _fun48371_ip = 181;
                continue _fun48371;
            case 165:
                var0 = var16 - var26;
                var28 = var0 - var2;
                var0 = var16 - var26;
                var27 = var0 - var2;
            case 181:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.v4;
                var17 = var0.bind(var1)();
                var1 = _closure1_slot3;
                var0 = var1.flatten;
                var0 = var0.bind(var1)(var4);
                var20 = var0.tintColor;
                if (!(var8 != var15)) {
                    _fun48371_ip = 242;
                    continue _fun48371
                }
            case 238:
                if (!(var8 == var20)) {
                    _fun48371_ip = 357;
                    continue _fun48371
                }
            case 242:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 13;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Image;
                var0 = {
                    'x': '0',
                    'y': '0',
                    'height': '100%',
                    'width': '100%'
                };
                var6 = _closure1_slot1;
                var5 = 11;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.bind(var3)(var15);
                var0.href = var5;
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var6 = 'url(#';
                var5 = ')';
                var5 = var7.bind(var6)(var17, var5);
                var0.mask = var5;
                var9 = var2.bind(var3)(var1, var0);
                _fun48371_ip = 512;
                continue _fun48371;
            case 357:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var19 = _closure1_slot2;
                var0 = 13;
                var0 = var19[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ForeignObject;
                var0 = {
                    'x': '0',
                    'y': '0',
                    'height': '100%',
                    'width': '100%'
                };
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var6 = 'url(#';
                var5 = ')';
                var5 = var7.bind(var6)(var17, var5);
                var0.mask = var5;
                var7 = _closure1_slot6;
                var18 = _closure1_slot1;
                var5 = 10;
                var5 = var19[var5];
                var6 = var18.bind(var3)(var5);
                var5 = {};
                var12 = {};
                var12.tintColor = var20;
                var5.style = var12;
                var12 = 11;
                var12 = var19[var12];
                var12 = var18.bind(var3)(var12);
                var12 = var12.bind(var3)(var15);
                var5.source = var12;
                var12 = true;
                var5.usesSmallCache = var12;
                var5 = var7.bind(var3)(var6, var5);
                var0.children = var5;
                var9 = var2.bind(var3)(var1, var0);
            case 512:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var19 = _closure1_slot2;
                var15 = 13;
                var4 = var19[var15];
                var5 = var5.bind(var3)(var4);
                var4 = {
                    'height': '100%',
                    'width': '100%'
                };
                var18 = _closure1_slot6;
                var20 = _closure1_slot0;
                var7 = var19[var15];
                var7 = var20.bind(var3)(var7);
                var12 = var7.Defs;
                var7 = {};
                var21 = _closure1_slot7;
                var19 = var19[var15];
                var19 = var20.bind(var3)(var19);
                var20 = var19.Mask;
                var19 = {};
                var19.width = var16;
                var19.height = var16;
                var19.id = var17;
                var22 = _closure1_slot12;
                var22 = var22.CIRCULAR;
                if (!(var11 !== var22)) {
                    _fun48371_ip = 697;
                    continue _fun48371
                }
            case 636:
                var24 = _closure1_slot6;
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var15];
                var22 = var23.bind(var3)(var22);
                var23 = var22.Rect;
                var22 = {
                    'x': 0,
                    'y': 0,
                    'height': null,
                    'width': null,
                    'fill': 'white'
                };
                var22.height = var16;
                var22.width = var16;
                var23 = var24.bind(var3)(var23, var22);
                _fun48371_ip = 755;
                continue _fun48371;
            case 697:
                var25 = _closure1_slot6;
                var24 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var15];
                var22 = var24.bind(var3)(var22);
                var24 = var22.Circle;
                var22 = {};
                var22.cx = var14;
                var22.cy = var14;
                var22.r = var14;
                var29 = 'white';
                var22.fill = var29;
                var23 = var25.bind(var3)(var24, var22);
            case 755:
                var22 = new Array(2);
                var22[0] = var23;
                var25 = _closure1_slot6;
                var24 = _closure1_slot0;
                var23 = _closure1_slot2;
                var23 = var23[var15];
                var23 = var24.bind(var3)(var23);
                var24 = var23.Circle;
                var23 = {};
                var23.cx = var28;
                var23.cy = var27;
                var23.r = var26;
                var26 = 'black';
                var23.fill = var26;
                var23 = var25.bind(var3)(var24, var23);
                var22[1] = var23;
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var7.children = var19;
                var12 = var18.bind(var3)(var12, var7);
                var7 = new Array(3);
                var7[0] = var12;
                var7[1] = var9;
                var9 = var13.border;
                var9 = var8 != var9;
                var8 = null;
                if (!var9) {
                    _fun48371_ip = 1149;
                    continue _fun48371
                }
            case 875:
                var9 = _closure1_slot12;
                var9 = var9.CIRCULAR;
                if (!(var11 !== var9)) {
                    _fun48371_ip = 1022;
                    continue _fun48371
                }
            case 892:
                var12 = _closure1_slot6;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var15];
                var9 = var11.bind(var3)(var9);
                var11 = var9.Rect;
                var9 = {
                    'x': 0,
                    'y': 0,
                    'height': null,
                    'width': null,
                    'fill': 'none'
                };
                var9.height = var16;
                var9.width = var16;
                var16 = global;
                var16 = var16.HermesInternal;
                var19 = var16.concat;
                var18 = 'url(#';
                var16 = ')';
                var16 = var19.bind(var18)(var17, var16);
                var9.mask = var16;
                var16 = var13.border;
                var16 = var16.color;
                var9.stroke = var16;
                var16 = var13.border;
                var16 = var16.width;
                var9.strokeWidth = var16;
                var9 = var12.bind(var3)(var11, var9);
                _fun48371_ip = 1146;
                continue _fun48371;
            case 1022:
                var12 = _closure1_slot6;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var15];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Circle;
                var10 = {};
                var10.cx = var14;
                var10.cy = var14;
                var10.r = var14;
                var14 = 'none';
                var10.fill = var14;
                var14 = global;
                var14 = var14.HermesInternal;
                var16 = var14.concat;
                var15 = 'url(#';
                var14 = ')';
                var14 = var16.bind(var15)(var17, var14);
                var10.mask = var14;
                var14 = var13.border;
                var14 = var14.color;
                var10.stroke = var14;
                var13 = var13.border;
                var13 = var13.width;
                var10.strokeWidth = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1146:
                var8 = var9;
            case 1149:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var13 = 0;
    var4 = var10[var13];
    var3 = arg3;
    var0 = undefined;
    var12 = var3.bind(var0)(var4);
    var11 = 1;
    var3 = var10[var11];
    var3 = var9.bind(var0)(var3);
    var4 = var3.StyleSheet;
    var _closure1_slot3 = var4;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var8 = 2;
    var3 = var10[var8];
    var3 = var9.bind(var0)(var3);
    var3 = var3.CHANNEL_SPRING_CONFIG;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var5 = var3.jsx;
    var _closure1_slot6 = var5;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var10[var3];
    var6 = var14.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var19 = 'UIKit - AvatarImage';
    var20 = var5;
    var3 = new var20[var6](var19, var18);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot8 = var3;
    var6 = {};
    var3 = 'xxsmall';
    var6.XXSMALL = var3;
    var3 = 'xsmall';
    var6.XSMALL = var3;
    var3 = 'small';
    var6.SMALL = var3;
    var3 = 'normal';
    var6.NORMAL = var3;
    var3 = 'large';
    var6.LARGE = var3;
    var3 = 'xlarge';
    var6.XLARGE = var3;
    var3 = 'xlarge72';
    var6.XLARGE_72 = var3;
    var3 = 'xxlarge';
    var6.XXLARGE = var3;
    var3 = 'profile';
    var6.PROFILE = var3;
    var3 = 'refreshMedium32';
    var6.REFRESH_MEDIUM_32 = var3;
    var3 = 'xsmall10';
    var6.XXSMALL_10 = var3;
    var3 = 'xsmall20';
    var6.XSMALL_20 = var3;
    var3 = 'size16';
    var6.SIZE_16 = var3;
    var3 = 'large48';
    var6.LARGE_48 = var3;
    var3 = 'editAvatarDecoration';
    var6.EDIT_AVATAR_DECORATION = var3;
    var3 = 'giftStart';
    var6.GIFT_START = var3;
    var3 = 'giftSuccess';
    var6.GIFT_SUCCESS = var3;
    var3 = 'tabs22';
    var6.TABS_22 = var3;
    var5 = var1.Object;
    var3 = var5.freeze;
    var1 = {};
    var16 = var6.XXSMALL_10;
    var15 = 10;
    var1[var16] = var15;
    var16 = var6.SIZE_16;
    var15 = 16;
    var1[var16] = var15;
    var16 = var6.XXSMALL;
    var15 = 18;
    var1[var16] = var15;
    var16 = var6.XSMALL_20;
    var15 = 20;
    var1[var16] = var15;
    var16 = var6.XSMALL;
    var15 = 24;
    var1[var16] = var15;
    var16 = var6.SMALL;
    var15 = 30;
    var1[var16] = var15;
    var16 = var6.NORMAL;
    var15 = 40;
    var1[var16] = var15;
    var16 = var6.LARGE_48;
    var15 = 48;
    var1[var16] = var15;
    var16 = var6.LARGE;
    var15 = 50;
    var1[var16] = var15;
    var16 = var6.XLARGE;
    var15 = 64;
    var1[var16] = var15;
    var16 = var6.XLARGE_72;
    var15 = 72;
    var1[var16] = var15;
    var16 = var6.XXLARGE;
    var15 = 80;
    var1[var16] = var15;
    var16 = var6.PROFILE;
    var15 = 128;
    var1[var16] = var15;
    var16 = var6.EDIT_AVATAR_DECORATION;
    var15 = 144;
    var1[var16] = var15;
    var16 = var6.GIFT_START;
    var15 = 184;
    var1[var16] = var15;
    var16 = var6.GIFT_SUCCESS;
    var15 = 236;
    var1[var16] = var15;
    var16 = var6.REFRESH_MEDIUM_32;
    var15 = 32;
    var1[var16] = var15;
    var16 = var6.TABS_22;
    var15 = 22;
    var1[var16] = var15;
    var5 = var3.bind(var5)(var1);
    var _closure1_slot9 = var5;
    var3 = var4.create;
    var1 = {};
    var15 = {
        'width': '100%',
        'height': '100%'
    };
    var1.image = var15;
    var15 = {};
    var16 = var6.XXSMALL;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.XXSMALL;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.XXSMALL;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.xxsmall = var15;
    var15 = {};
    var16 = var6.XXSMALL_10;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.XXSMALL_10;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.XXSMALL_10;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.xsmall10 = var15;
    var15 = {};
    var16 = var6.XSMALL_20;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.XSMALL_20;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.XSMALL_20;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.xsmall20 = var15;
    var15 = {};
    var16 = var6.XSMALL;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.XSMALL;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.XSMALL;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.xsmall = var15;
    var15 = {};
    var16 = var6.SMALL;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.SMALL;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.SMALL;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.small = var15;
    var15 = {};
    var16 = var6.NORMAL;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.NORMAL;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.NORMAL;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.normal = var15;
    var15 = {};
    var16 = var6.LARGE;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.LARGE;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.LARGE;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.large = var15;
    var15 = {};
    var16 = var6.XLARGE;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.XLARGE;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.XLARGE;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.xlarge = var15;
    var15 = {};
    var16 = var6.XLARGE_72;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.XLARGE_72;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.XLARGE_72;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.xlarge72 = var15;
    var15 = {};
    var16 = var6.XXLARGE;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.XXLARGE;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.XXLARGE;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.xxlarge = var15;
    var15 = {};
    var16 = var6.REFRESH_MEDIUM_32;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.REFRESH_MEDIUM_32;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.REFRESH_MEDIUM_32;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.refreshMedium32 = var15;
    var15 = {};
    var16 = var6.PROFILE;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.PROFILE;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.PROFILE;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.profile = var15;
    var15 = {};
    var16 = var6.SIZE_16;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.SIZE_16;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.SIZE_16;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.size16 = var15;
    var15 = {};
    var16 = var6.LARGE_48;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.LARGE_48;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.LARGE_48;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.large48 = var15;
    var15 = {};
    var16 = var6.EDIT_AVATAR_DECORATION;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.EDIT_AVATAR_DECORATION;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.EDIT_AVATAR_DECORATION;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.editAvatarDecoration = var15;
    var15 = {};
    var16 = var6.GIFT_START;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.GIFT_START;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.GIFT_START;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.giftStart = var15;
    var15 = {};
    var16 = var6.GIFT_SUCCESS;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.GIFT_SUCCESS;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.GIFT_SUCCESS;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.giftSuccess = var15;
    var15 = {};
    var16 = var6.TABS_22;
    var16 = var5[var16];
    var15.width = var16;
    var16 = var6.TABS_22;
    var16 = var5[var16];
    var15.height = var16;
    var16 = var6.TABS_22;
    var16 = var5[var16];
    var16 = var16 / var8;
    var15.borderRadius = var16;
    var1.tabs22 = var15;
    var4 = var3.bind(var4)(var1);
    var _closure1_slot10 = var4;
    var3 = {};
    var3.RIGHT = var13;
    var1 = 'RIGHT';
    var3[var13] = var1;
    var3.BOTTOM_RIGHT = var11;
    var1 = 'BOTTOM_RIGHT';
    var3[var11] = var1;
    var3.BOTTOM_LEFT = var8;
    var1 = 'BOTTOM_LEFT';
    var3[var8] = var1;
    var _closure1_slot11 = var3;
    var1 = {};
    var1.RECTANGULAR = var13;
    var8 = 'RECTANGULAR';
    var1[var13] = var8;
    var1.CIRCULAR = var11;
    var8 = 'CIRCULAR';
    var1[var11] = var8;
    var _closure1_slot12 = var1;
    var8 = 7;
    var8 = var10[var8];
    var13 = var14.bind(var0)(var8);
    var11 = var13.createAnimatedComponent;
    var8 = 8;
    var8 = var10[var8];
    var8 = var14.bind(var0)(var8);
    var8 = var11.bind(var13)(var8);
    var _closure1_slot13 = var8;
    var8 = {};
    var11 = "function CutoutableAvatarImageTsx1(){const{animate,cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animated=!animate?'animate-never':undefined;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG,animated),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG,animated),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG,animated),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG,animated),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG,animated)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG,animated),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG,animated),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG,animated)};return{cutouts:[animatedCutout]};}";
    var8.code = var11;
    var _closure1_slot14 = var8;
    var11 = var12.memo;
    var8 = function(arg0) { // Environment: var7
        _fun48372: for (var _fun48372_ip = 0;;) switch (_fun48372_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.animate;
                var9 = var0.cutout;
                var1 = var0.size;
                var2 = var0.style;
                var14 = 'number';
                var3 = typeof var1;
                var3 = var14 === var3;
                var5 = var1;
                if (var3) {
                    _fun48372_ip = 53;
                    continue _fun48372
                }
            case 42:
                var4 = _closure1_slot9;
                var5 = var4[var1];
            case 53:
                if (var3) {
                    _fun48372_ip = 81;
                    continue _fun48372
                }
            case 56:
                var3 = _closure1_slot10;
                var3 = var3[var1];
                var7 = new Array(2);
                var7[0] = var3;
                var7[1] = var2;
                _fun48372_ip = 106;
                continue _fun48372;
            case 81:
                var3 = {};
                var3.width = var1;
                var3.height = var1;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                var7 = var1;
            case 106:
                var3 = {};
                var20 = var3;
                var19 = var0;
                var0 = copyDataProperties(var20, var19);
                var1 = true;
                var2 = var1 === var10;
                if (!var2) {
                    _fun48372_ip = 133;
                    continue _fun48372
                }
            case 127:
                var0 = null;
                var2 = var0 == var9;
            case 133:
                var0 = 'animate';
                var3[var0] = var2;
                var0 = 'size';
                var3[var0] = var5;
                var11 = var3.source;
                var13 = var3.user;
                var16 = var3.channel;
                var12 = var3.guildId;
                var6 = var3.animate;
                var4 = var3.size;
                var0 = null;
                if (!(var0 == var11)) {
                    _fun48372_ip = 306;
                    continue _fun48372
                }
            case 188:
                if (!(var0 == var13)) {
                    _fun48372_ip = 291;
                    continue _fun48372
                }
            case 192:
                if (!(var0 == var16)) {
                    _fun48372_ip = 223;
                    continue _fun48372
                }
            case 196:
                var15 = _closure1_slot8;
                var8 = var15.warn;
                var2 = 'No image found from provided data';
                var2 = var8.bind(var15)(var2);
                var8 = undefined;
                _fun48372_ip = 330;
                continue _fun48372;
            case 223:
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 6;
                var15 = var15[var2];
                var2 = undefined;
                var15 = var17.bind(var2)(var15);
                var2 = var15.getChannelIconURL;
                var16 = var2.bind(var15)(var16, var4);
                var15 = typeof var16;
                var2 = var16;
                if (!(var14 !== var15)) {
                    _fun48372_ip = 286;
                    continue _fun48372
                }
            case 270:
                var2 = var16;
                if (!(var0 != var2)) {
                    _fun48372_ip = 286;
                    continue _fun48372
                }
            case 277:
                var15 = {};
                var15.uri = var16;
                var2 = var15;
            case 286:
                var8 = var2;
                _fun48372_ip = 330;
                continue _fun48372;
            case 291:
                var2 = var13.getAvatarSource;
                var8 = var2.bind(var13)(var12, var6, var4);
                _fun48372_ip = 330;
                continue _fun48372;
            case 306:
                var12 = 'function';
                var4 = typeof var11;
                var2 = var11;
                if (!(var12 === var4)) {
                    _fun48372_ip = 327;
                    continue _fun48372
                }
            case 320:
                var4 = undefined;
                var2 = var11.bind(var4)(var6);
            case 327:
                var8 = var2;
            case 330:
                if (!(var0 != var8)) {
                    _fun48372_ip = 630;
                    continue _fun48372
                }
            case 337:
                var2 = var3.user;
                var3 = var3.disablePlaceholder;
                var4 = var0 == var2;
                var6 = undefined;
                var12 = undefined;
                if (var4) {
                    _fun48372_ip = 430;
                    continue _fun48372
                }
            case 359:
                var12 = undefined;
                if (var3) {
                    _fun48372_ip = 430;
                    continue _fun48372
                }
            case 364:
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 5;
                var3 = var15[var11];
                var4 = var13.bind(var6)(var3);
                var3 = var4.makeSource;
                var11 = var15[var11];
                var15 = var13.bind(var6)(var11);
                var13 = var15.getDefaultAvatarURL;
                var11 = var2.id;
                var2 = var2.discriminator;
                var2 = var13.bind(var15)(var11, var2);
                var12 = var3.bind(var4)(var2);
            case 430:
                if (!(var0 == var9)) {
                    _fun48372_ip = 506;
                    continue _fun48372
                }
            case 434:
                var4 = _closure1_slot6;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 10;
                var2 = var11[var2];
                var3 = var3.bind(var6)(var2);
                var2 = {};
                var2.style = var7;
                var2.source = var8;
                var13 = typeof var12;
                var11 = undefined;
                if (!(var14 === var13)) {
                    _fun48372_ip = 483;
                    continue _fun48372
                }
            case 480:
                var11 = var12;
            case 483:
                var2.placeholder = var11;
                var2.usesSmallCache = var1;
                var1 = 'image';
                var1 = var4.bind(var6)(var3, var2, var1);
                _fun48372_ip = 628;
                continue _fun48372;
            case 506:
                var2 = var9.nativeCutouts;
                var4 = var0 == var2;
                var3 = undefined;
                if (var4) {
                    _fun48372_ip = 526;
                    continue _fun48372
                }
            case 521:
                var3 = var2.length;
            case 526:
                var2 = 1;
                if (!(var2 !== var3)) {
                    _fun48372_ip = 576;
                    continue _fun48372
                }
            case 533:
                var4 = _closure1_slot6;
                var3 = _closure1_slot16;
                var2 = {};
                var2.style = var7;
                var2.size = var5;
                var2.animate = var10;
                var2.cutout = var9;
                var2.source = var8;
                var2 = var4.bind(var6)(var3, var2);
                _fun48372_ip = 625;
                continue _fun48372;
            case 576:
                var5 = _closure1_slot6;
                var4 = _closure1_slot15;
                var3 = {};
                var3.animate = var10;
                var10 = var9.nativeCutouts;
                var9 = 0;
                var9 = var10[var9];
                var3.cutout = var9;
                var3.source = var8;
                var3.style = var7;
                var2 = var5.bind(var6)(var4, var3);
            case 625:
                var1 = var2;
            case 628:
                return var1;
            case 630:
                return var0;
        }
    };
    var7 = function arg0, arg1() {
        _fun48373: for (var _fun48373_ip = 0;;) switch (_fun48373_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var5 = 14;
                var2 = var2[var5];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = ['source'];
                var2 = var3.bind(var4)(var1, var0, var2);
                if (var2) {
                    _fun48373_ip = 55;
                    continue _fun48373
                }
            case 51:
                var2 = false;
                return var2;
            case 55:
                var3 = var1.source;
                var2 = var0.source;
                if (!(var3 !== var2)) {
                    _fun48373_ip = 276;
                    continue _fun48373
                }
            case 72:
                var0 = typeof var2;
                var7 = 'number';
                if (!(var7 === var0)) {
                    _fun48373_ip = 93;
                    continue _fun48373
                }
            case 83:
                var1 = typeof var3;
                if (!(var7 !== var1)) {
                    _fun48373_ip = 272;
                    continue _fun48373
                }
            case 93:
                var7 = typeof var3;
                if (!(var0 === var7)) {
                    _fun48373_ip = 272;
                    continue _fun48373
                }
            case 103:
                var1 = global;
                var9 = var1.Array;
                var8 = var9.isArray;
                var8 = var8.bind(var9)(var2);
                if (!var8) {
                    _fun48373_ip = 143;
                    continue _fun48373
                }
            case 124:
                var8 = var1.Array;
                var1 = var8.isArray;
                var1 = var1.bind(var8)(var3);
                if (var1) {
                    _fun48373_ip = 186;
                    continue _fun48373
                }
            case 143:
                var1 = 'object';
                var0 = var1 !== var0;
                if (var0) {
                    _fun48373_ip = 158;
                    continue _fun48373
                }
            case 154:
                var0 = var1 !== var7;
            case 158:
                if (var0) {
                    _fun48373_ip = 184;
                    continue _fun48373
                }
            case 161:
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var7.bind(var4)(var1);
                var0 = var1.bind(var4)(var2, var3);
            case 184:
                return var0;
            case 186:
                var1 = var3.length;
                var0 = var2.length;
                if (!(var1 === var0)) {
                    _fun48373_ip = 268;
                    continue _fun48373
                }
            case 200:
                var0 = var3.length;
                var1 = 0;
                var0 = var1 < var0;
                if (!var0) {
                    _fun48373_ip = 264;
                    continue _fun48373
                }
            case 214:
                var7 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var8 = var7.bind(var4)(var0);
                var7 = var3[var1];
                var0 = var2[var1];
                var0 = var8.bind(var4)(var7, var0);
                if (var0) {
                    _fun48373_ip = 252;
                    continue _fun48373
                }
            case 248:
                var0 = false;
                return var0;
            case 252:
                var1 = var1 + 1;
                var0 = var3.length;
                if (var1 < var0) {
                    _fun48373_ip = 214;
                    continue _fun48373
                }
            case 264:
                var0 = true;
                return var0;
            case 268:
                var0 = false;
                return var0;
            case 272:
                var0 = false;
                return var0;
            case 276:
                var0 = true;
                return var0;
        }
    };
    var7 = var11.bind(var12)(var8, var7);
    var8 = 15;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'uikit-native/CutoutableAvatarImage.tsx';
    var8 = var9.bind(var10)(var8);
    var2.default = var7;
    var2.AvatarSizes = var6;
    var2.AVATAR_SIZE_MAP = var5;
    var2.styles = var4;
    var2.CutoutDirection = var3;
    var2.CutoutType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5460, 33, 3, 1417, 5461, 3722, 5462, 4082, 4705, 5464, 491, 5465, 628, 2]);