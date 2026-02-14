// modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun105169: for (var _fun105169_ip = 0;;) switch (_fun105169_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.value;
                var11 = var0.countA11yLabel;
                var1 = var0.unread;
                var9 = var0.lowPriority;
                var5 = var0.unreadA11yLabel;
                var0 = _closure1_slot16;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var0 = null;
                if (!(var0 == var11)) {
                    _fun105169_ip = 84;
                    continue _fun105169
                }
            case 51:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 15;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.t;
                var11 = var2.XNn2u2;
            case 84:
                var2 = 0;
                if (!(!(var12 > var2))) {
                    _fun105169_ip = 173;
                    continue _fun105169
                }
            case 90:
                var0 = null;
                if (!var1) {
                    _fun105169_ip = 168;
                    continue _fun105169
                }
            case 95:
                var3 = _closure1_slot12;
                var2 = _closure1_slot4;
                var1 = {};
                var1.accessibilityLabel = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 17;
                var5 = var13[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var13 = 12;
                var5.size = var13;
                var13 = var10.unread;
                var5.style = var13;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 168:
                _fun105169_ip = 309;
                continue _fun105169;
            case 173:
                var3 = _closure1_slot12;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = {};
                var6 = 3;
                var5.margin = var6;
                var1.style = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 16;
                var5 = var13[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                if (!var9) {
                    _fun105169_ip = 232;
                    continue _fun105169
                }
            case 226:
                var9 = var10.lowPriorityBadge;
            case 232:
                var5.style = var9;
                var5.value = var12;
                var9 = false;
                var5.accessible = var9;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 15;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var10 = var8.intl;
                var9 = var10.formatToPlainString;
                var8 = {};
                var8.count = var12;
                var8 = var9.bind(var10)(var11, var8);
                var5.accessibilityLabel = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 309:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun105170: for (var _fun105170_ip = 0;;) switch (_fun105170_ip) {
            case 0:
                var2 = arg0;
                var6 = var2.iconSize;
                var _closure2_slot0 = var6;
                var5 = var2.offset;
                var1 = undefined;
                if (!(var5 === var1)) {
                    _fun105170_ip = 29;
                    continue _fun105170
                }
            case 27:
                var5 = 0;
            case 29:
                var _closure2_slot1 = var5;
                var4 = var2.adjustForYouTab;
                if (!(var4 === var1)) {
                    _fun105170_ip = 45;
                    continue _fun105170
                }
            case 43:
                var4 = false;
            case 45:
                var _closure2_slot2 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun105171: for (var _fun105171_ip = 0;;) switch (_fun105171_ip) {
                        case 0:
                            var0 = {};
                            var1 = 8;
                            var0.borderRadius = var1;
                            var2 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            if (var2) {
                                _fun105171_ip = 32;
                                continue _fun105171
                            }
                        case 23:
                            var2 = 3;
                            var3 = var4 / var2;
                            _fun105171_ip = 46;
                            continue _fun105171;
                        case 32:
                            var2 = 0.55;
                            var3 = var2 * var4;
                        case 46:
                            var2 = _closure2_slot1;
                            var2 = var3 + var2;
                            var0.top = var2;
                            var2 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            if (var2) {
                                _fun105171_ip = 85;
                                continue _fun105171
                            }
                        case 69:
                            var2 = 0.625;
                            var2 = var2 * var4;
                            _fun105171_ip = 99;
                            continue _fun105171;
                        case 85:
                            var3 = 0.65;
                            var2 = var3 * var4;
                        case 99:
                            var1 = _closure2_slot1;
                            var1 = var2 + var1;
                            var0.left = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun105172: for (var _fun105172_ip = 0;;) switch (_fun105172_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.iconSize;
                var _closure2_slot0 = var8;
                var7 = var1.offset;
                var2 = undefined;
                if (!(var7 === var2)) {
                    _fun105172_ip = 29;
                    continue _fun105172
                }
            case 27:
                var7 = 0;
            case 29:
                var _closure2_slot1 = var7;
                var6 = var1.cutoutRadius;
                var _closure2_slot2 = var6;
                var5 = var1.badgeCount;
                var _closure2_slot3 = var5;
                var4 = var1.isWindowLarge;
                var _closure2_slot4 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    _fun105173: for (var _fun105173_ip = 0;;) switch (_fun105173_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = 0;
                            if (!(!(var1 > var0))) {
                                _fun105173_ip = 29;
                                continue _fun105173
                            }
                        case 13:
                            var1 = {
                                'x': 2,
                                'y': 2,
                                'size': 4294967292
                            };
                            _fun105173_ip = 43;
                            continue _fun105173;
                        case 29:
                            var1 = {
                                'x': 0,
                                'y': 0,
                                'size': 0
                            };
                        case 43:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 18;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var3 = var3.CutoutShape;
                            var3 = var3.Circle;
                            var0.shape = var3;
                            var3 = _closure2_slot4;
                            var5 = _closure2_slot0;
                            if (var3) {
                                _fun105173_ip = 123;
                                continue _fun105173
                            }
                        case 98:
                            var3 = 0.625;
                            var4 = var3 * var5;
                            var3 = var1.x;
                            var4 = var4 + var3;
                            _fun105173_ip = 137;
                            continue _fun105173;
                        case 123:
                            var3 = 0.67;
                            var4 = var3 * var5;
                        case 137:
                            var3 = _closure2_slot1;
                            var3 = var4 + var3;
                            var0.x = var3;
                            var3 = _closure2_slot4;
                            var5 = _closure2_slot0;
                            if (var3) {
                                _fun105173_ip = 178;
                                continue _fun105173
                            }
                        case 160:
                            var3 = 3;
                            var4 = var5 / var3;
                            var3 = var1.y;
                            var4 = var4 + var3;
                            _fun105173_ip = 192;
                            continue _fun105173;
                        case 178:
                            var3 = 0.57;
                            var4 = var3 * var5;
                        case 192:
                            var3 = _closure2_slot1;
                            var3 = var4 + var3;
                            var0.y = var3;
                            var3 = _closure2_slot4;
                            var4 = _closure2_slot2;
                            var2 = 2;
                            var2 = var2 * var4;
                            if (var3) {
                                _fun105173_ip = 233;
                                continue _fun105173
                            }
                        case 222:
                            var1 = var1.size;
                            var1 = var2 + var1;
                            _fun105173_ip = 236;
                            continue _fun105173;
                        case 233:
                            var1 = var2;
                        case 236:
                            var0.size = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var14 = 2;
    var3 = var5[var14];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.BADGE_SIZE;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusSizes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AVATAR_SIZE_MAP;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AvatarSizes;
    var3 = var3.NORMAL;
    var12 = var6[var3];
    var _closure1_slot14 = var12;
    var15 = 12;
    var3 = var5[var15];
    var3 = var16.bind(var0)(var3);
    var3 = var3.spacing;
    var10 = var3.PX_4;
    var _closure1_slot15 = var10;
    var3 = 13;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var17 = 'relative';
    var9.position = var17;
    var6.container = var9;
    var9 = {};
    var17 = 'absolute';
    var9.position = var17;
    var6.content = var9;
    var9 = {};
    var15 = var5[var15];
    var15 = var16.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PRIMARY_400;
    var9.backgroundColor = var15;
    var6.lowPriorityBadge = var9;
    var9 = {
        'height': 22,
        'width': 22
    };
    var13 = var13 / var14;
    var9.borderRadius = var13;
    var6.unread = var9;
    var9 = {};
    var9.width = var12;
    var9.height = var12;
    var6.avatarTablet = var9;
    var9 = {};
    var9.padding = var10;
    var6.avatarCutoutWrapper = var9;
    var9 = {};
    var10 = 14;
    var12 = var5[var10];
    var12 = var4.bind(var0)(var12);
    var12 = var12.ICON_SIZE;
    var12 = var12.md;
    var9.width = var12;
    var12 = var5[var10];
    var12 = var4.bind(var0)(var12);
    var12 = var12.ICON_SIZE;
    var12 = var12.md;
    var9.height = var12;
    var9.opacity = var11;
    var6.tabBarIconSelected = var9;
    var9 = {};
    var11 = var5[var10];
    var11 = var4.bind(var0)(var11);
    var11 = var11.ICON_SIZE;
    var11 = var11.md;
    var9.width = var11;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.ICON_SIZE;
    var10 = var10.md;
    var9.height = var10;
    var10 = 0.5;
    var9.opacity = var10;
    var6.tabBarIconUnselected = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot16 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        var7 = arg0;
        var0 = {};
        var1 = {};
        var2 = _closure1_slot14;
        var4 = var7 - var2;
        var5 = -var4;
        var4 = 2;
        var9 = var5 / var4;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 12;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var8 = var9 + var8;
        var1.left = var8;
        var0.containerTablet = var1;
        var1 = {
            'width': null,
            'left': null,
            'height': null,
            'justifyContent': 'center',
            'position': 'absolute',
            'bottom': 0,
            'top': 0
        };
        var8 = var7 - var2;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_24;
        var7 = var8 - var7;
        var1.width = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var3 = var2 + var3;
        var1.left = var3;
        var1.height = var2;
        var0.usernameTablet = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function BadgableTabBarIconTsx1(){const{scaleDownAnimation,rotationAnimation,wobbleAnimationX,wobbleAnimationY}=this.__closure;return{transform:[{scale:scaleDownAnimation.get()},{rotate:rotationAnimation.get()+"deg"},{scaleX:wobbleAnimationX.get()},{scaleY:wobbleAnimationY.get()}]};}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun105175: for (var _fun105175_ip = 0;;) switch (_fun105175_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.badgeA11yLabel;
                var12 = var0.color;
                var19 = var0.icon;
                var2 = var0.iconAnimated;
                var13 = var0.focused;
                var7 = var0.navigation;
                var _closure2_slot0 = var7;
                var0 = var0.useBadgeCount;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var4 = _closure1_slot16;
                var5 = var4.bind(var3)();
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 19;
                var4 = var10[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var8 = _closure1_slot0;
                var6 = 14;
                var6 = var10[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.ICON_SIZE;
                var10 = var6.md;
                if (var13) {
                    _fun105175_ip = 142;
                    continue _fun105175
                }
            case 131:
                if (var4) {
                    _fun105175_ip = 142;
                    continue _fun105175
                }
            case 134:
                var20 = var5.tabBarIconUnselected;
                _fun105175_ip = 148;
                continue _fun105175;
            case 142:
                var20 = var5.tabBarIconSelected;
            case 148:
                var8 = _closure1_slot20;
                var6 = {};
                var6.iconSize = var10;
                var8 = var8.bind(var3)(var6);
                var0 = var0.bind(var3)();
                var22 = var0.value;
                var18 = var0.showDot;
                var17 = var0.lowPriority;
                var6 = _closure1_slot21;
                var0 = {};
                var0.iconSize = var10;
                var10 = 11;
                var0.cutoutRadius = var10;
                var0.badgeCount = var22;
                var0.isWindowLarge = var4;
                var16 = var6.bind(var3)(var0);
                var10 = _closure1_slot3;
                var6 = var10.useRef;
                var0 = null;
                var14 = var6.bind(var10)(var0);
                _closure2_slot1 = var14;
                var11 = undefined;
                if (var4) {
                    _fun105175_ip = 247;
                    continue _fun105175
                }
            case 244:
                var11 = var2;
            case 247:
                _closure2_slot2 = var11;
                var2 = 0;
                var10 = var22 > var2;
                if (var10) {
                    _fun105175_ip = 263;
                    continue _fun105175
                }
            case 260:
                var10 = var18;
            case 263:
                var6 = _closure1_slot3;
                var4 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var11;
                var1 = function() { // Environment: var1
                    _fun105176: for (var _fun105176_ip = 0;;) switch (_fun105176_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun105176_ip = 17;
                                continue _fun105176
                            }
                        case 13:
                            var1 = undefined;
                            return var1;
                        case 17:
                            var3 = _closure2_slot0;
                            var2 = var3.addListener;
                            var1 = 'tabPress';
                            var0 = function() { // Environment: var0
                                _fun105177: for (var _fun105177_ip = 0;;) switch (_fun105177_ip) {
                                    case 0:
                                        var0 = _closure2_slot1;
                                        var4 = null;
                                        var1 = var4 == var0;
                                        var0 = undefined;
                                        var2 = undefined;
                                        if (var1) {
                                            _fun105177_ip = 36;
                                            continue _fun105177
                                        }
                                    case 20:
                                        var3 = _closure2_slot1;
                                        var3 = var3.current;
                                        var1 = var4 == var3;
                                        var2 = var3;
                                    case 36:
                                        if (var1) {
                                            _fun105177_ip = 49;
                                            continue _fun105177
                                        }
                                    case 39:
                                        var1 = var2.play;
                                        var1 = var1.bind(var2)();
                                    case 49:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var2);
                var6 = null;
                if (!var10) {
                    _fun105175_ip = 443;
                    continue _fun105175
                }
            case 305:
                var4 = _closure1_slot12;
                var2 = _closure1_slot4;
                var1 = {};
                var15 = var5.content;
                var7 = new Array(2);
                var7[0] = var15;
                var7[1] = var8;
                var1.style = var7;
                var15 = _closure1_slot12;
                var8 = _closure1_slot19;
                var7 = {};
                var7.value = var22;
                var7.countA11yLabel = var21;
                var7.unread = var18;
                var7.lowPriority = var17;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var17 = 15;
                var18 = var23[var17];
                var18 = var22.bind(var3)(var18);
                var21 = var18.intl;
                var18 = var21.string;
                var17 = var23[var17];
                var17 = var22.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.sRUdB8;
                var17 = var18.bind(var21)(var17);
                var7.unreadA11yLabel = var17;
                var7 = var15.bind(var3)(var8, var7);
                var1.children = var7;
                var6 = var4.bind(var3)(var2, var1);
            case 443:
                var2 = _closure1_slot13;
                var1 = _closure1_slot4;
                if (!(var0 == var11)) {
                    _fun105175_ip = 594;
                    continue _fun105175
                }
            case 458:
                var0 = {};
                var4 = var5.container;
                var0.style = var4;
                var8 = _closure1_slot12;
                var7 = _closure1_slot1;
                var15 = _closure1_slot2;
                var4 = 18;
                var4 = var15[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                if (var10) {
                    _fun105175_ip = 504;
                    continue _fun105175
                }
            case 498:
                var15 = new Array(0);
                _fun105175_ip = 515;
                continue _fun105175;
            case 504:
                var17 = new Array(1);
                var17[0] = var16;
                var15 = var17;
            case 515:
                var4.cutouts = var15;
                var18 = _closure1_slot12;
                var17 = _closure1_slot5;
                var15 = {};
                var15.source = var19;
                var21 = {};
                var21.tintColor = var12;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var15.style = var19;
                var15 = var18.bind(var3)(var17, var15);
                var4.children = var15;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.children = var4;
                _fun105175_ip = 733;
                continue _fun105175;
            case 594:
                var4 = {};
                var5 = var5.container;
                var4.style = var5;
                var8 = _closure1_slot12;
                var7 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 18;
                var5 = var15[var5];
                var7 = var7.bind(var3)(var5);
                var5 = {};
                if (var10) {
                    _fun105175_ip = 640;
                    continue _fun105175
                }
            case 634:
                var10 = new Array(0);
                _fun105175_ip = 651;
                continue _fun105175;
            case 640:
                var15 = new Array(1);
                var15[0] = var16;
                var10 = var15;
            case 651:
                var5.cutouts = var10;
                var10 = _closure1_slot12;
                var9 = {};
                var9.ref = var14;
                var14 = 'md';
                var9.size = var14;
                var9.color = var12;
                var12 = 0.5;
                if (!var13) {
                    _fun105175_ip = 694;
                    continue _fun105175
                }
            case 691:
                var12 = 1;
            case 694:
                var9.opacity = var12;
                var9 = var10.bind(var3)(var11, var9);
                var5.children = var9;
                var7 = var8.bind(var3)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 733:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.BadgableTabBarIcon = var3;
    var1 = function arg0() {
        _fun105178: for (var _fun105178_ip = 0;;) switch (_fun105178_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.focused;
                var30 = var1.tintColor;
                var22 = var1.navigation;
                var _closure2_slot0 = var22;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 20;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useTabletIconYouWidth;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot16;
                var18 = var1.bind(var3)();
                var1 = _closure1_slot17;
                var10 = var1.bind(var3)(var2);
                var2 = _closure1_slot1;
                var1 = 19;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var5 = var1.bind(var3)();
                var34 = var5;
                if (var5) {
                    _fun105178_ip = 148;
                    continue _fun105178
                }
            case 145:
                var34 = var0;
            case 148:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 21;
                var2 = var0[var7];
                var11 = var1.bind(var3)(var2);
                var8 = var11.useStateFromStores;
                var2 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var4
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var8.bind(var11)(var6, var2);
                var6 = _closure1_slot1;
                var2 = 22;
                var2 = var0[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.useName;
                var12 = var2.bind(var6)(var13);
                var0 = var0[var7];
                var6 = var1.bind(var3)(var0);
                var2 = var6.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var4
                    var1 = _closure1_slot8;
                    var0 = var1.getStatus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var21 = var2.bind(var6)(var1, var0);
                var6 = null;
                var0 = var6 != var21;
                if (!var0) {
                    _fun105178_ip = 287;
                    continue _fun105178
                }
            case 273:
                var1 = _closure1_slot11;
                var1 = var1.UNKNOWN;
                var0 = var21 !== var1;
            case 287:
                var2 = var6 == var13;
                var1 = undefined;
                if (var2) {
                    _fun105178_ip = 302;
                    continue _fun105178
                }
            case 296:
                var1 = var13.avatar;
            case 302:
                var35 = var6 == var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var15 = var2.bind(var3)(var8);
                var14 = var15.useStateFromStores;
                var8 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var8;
                var8 = function() { // Environment: var4
                    var1 = _closure1_slot7;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var15 = var14.bind(var15)(var11, var8);
                var11 = _closure1_slot3;
                var8 = var11.useRef;
                var11 = var8.bind(var11)(var6);
                var8 = 23;
                var1 = var1[var8];
                var14 = var2.bind(var3)(var1);
                var2 = var14.useGuildTagAvailableCoachmark;
                var16 = var6 != var15;
                var1 = null;
                if (!var16) {
                    _fun105178_ip = 397;
                    continue _fun105178
                }
            case 394:
                var1 = var15;
            case 397:
                var1 = var2.bind(var14)(var11, var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var8 = var2.bind(var3)(var1);
                var2 = var8.useGuildTagUpdatedCoachmark;
                var14 = var6 != var13;
                var1 = null;
                if (!var14) {
                    _fun105178_ip = 438;
                    continue _fun105178
                }
            case 435:
                var1 = var13;
            case 438:
                var1 = var2.bind(var8)(var11, var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var8 = var2.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var4
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var32 = var7.bind(var8)(var2, var1);
                _closure2_slot1 = var32;
                var20 = 0.5;
                if (!var34) {
                    _fun105178_ip = 511;
                    continue _fun105178
                }
            case 508:
                var20 = 1;
            case 511:
                if (var5) {
                    _fun105178_ip = 548;
                    continue _fun105178
                }
            case 514:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ICON_SIZE;
                var7 = var1.md;
                _fun105178_ip = 552;
                continue _fun105178;
            case 548:
                var7 = _closure1_slot14;
            case 552:
                var2 = _closure1_slot3;
                var1 = var2.useRef;
                var31 = var1.bind(var2)(var6);
                _closure2_slot2 = var31;
                var2 = _closure1_slot20;
                var1 = {};
                var1.iconSize = var7;
                var8 = _closure1_slot15;
                var1.offset = var8;
                var1.adjustForYouTab = var5;
                var19 = var2.bind(var3)(var1);
                var2 = _closure1_slot21;
                var1 = {
                    'iconSize': null,
                    'cutoutRadius': 11,
                    'badgeCount': 0
                };
                var1.iconSize = var7;
                var37 = 11;
                var15 = 0;
                var1.isWindowLarge = var5;
                var1 = var2.bind(var3)(var1);
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var26 = 24;
                var7 = var2[var26];
                var14 = var8.bind(var3)(var7);
                var7 = var14.useSharedValue;
                var16 = 1;
                var28 = var7.bind(var14)(var16);
                _closure2_slot3 = var28;
                var7 = var2[var26];
                var14 = var8.bind(var3)(var7);
                var7 = var14.useSharedValue;
                var27 = var7.bind(var14)(var15);
                _closure2_slot4 = var27;
                var7 = var2[var26];
                var14 = var8.bind(var3)(var7);
                var7 = var14.useSharedValue;
                var25 = var7.bind(var14)(var16);
                _closure2_slot5 = var25;
                var7 = var2[var26];
                var14 = var8.bind(var3)(var7);
                var7 = var14.useSharedValue;
                var24 = var7.bind(var14)(var16);
                _closure2_slot6 = var24;
                var17 = _closure1_slot3;
                var16 = var17.useCallback;
                var14 = new Array(1);
                var14[0] = var28;
                var7 = function() { // Environment: var4
                    var9 = {};
                    var0 = 0.13;
                    var9.mass = var0;
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 24;
                    var1 = var8[var0];
                    var0 = undefined;
                    var6 = var7.bind(var0)(var1);
                    var5 = var6.withSequence;
                    var1 = 25;
                    var4 = var8[var1];
                    var11 = var7.bind(var0)(var4);
                    var10 = var11.withSpring;
                    var4 = 0.7;
                    var4 = var10.bind(var11)(var4, var9);
                    var1 = var8[var1];
                    var8 = var7.bind(var0)(var1);
                    var7 = var8.withSpring;
                    var1 = 1;
                    var1 = var7.bind(var8)(var1, var9);
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var29 = var16.bind(var17)(var7, var14);
                _closure2_slot7 = var29;
                var17 = _closure1_slot3;
                var16 = var17.useCallback;
                var14 = new Array(1);
                var14[0] = var27;
                var7 = function() { // Environment: var4
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 24;
                    var4 = var14[var1];
                    var0 = undefined;
                    var6 = var11.bind(var0)(var4);
                    var5 = var6.withDelay;
                    var1 = var14[var1];
                    var10 = var11.bind(var0)(var1);
                    var9 = var10.withSequence;
                    var12 = 25;
                    var1 = var14[var12];
                    var13 = var11.bind(var0)(var1);
                    var8 = var13.withSpring;
                    var1 = 26;
                    var4 = var14[var1];
                    var4 = var11.bind(var0)(var4);
                    var7 = var4.springStandard;
                    var4 = -4;
                    var8 = var8.bind(var13)(var4, var7);
                    var4 = var14[var12];
                    var15 = var11.bind(var0)(var4);
                    var13 = var15.withSpring;
                    var4 = var14[var1];
                    var4 = var11.bind(var0)(var4);
                    var7 = var4.springStandard;
                    var4 = 3;
                    var7 = var13.bind(var15)(var4, var7);
                    var4 = var14[var12];
                    var16 = var11.bind(var0)(var4);
                    var15 = var16.withSpring;
                    var4 = var14[var1];
                    var4 = var11.bind(var0)(var4);
                    var13 = var4.springStandard;
                    var4 = -2;
                    var18 = var15.bind(var16)(var4, var13);
                    var12 = var14[var12];
                    var13 = var11.bind(var0)(var12);
                    var12 = var13.withSpring;
                    var1 = var14[var1];
                    var1 = var11.bind(var0)(var1);
                    var11 = var1.springStandard;
                    var1 = 0;
                    var17 = var12.bind(var13)(var1, var11);
                    var21 = var10;
                    var20 = var8;
                    var19 = var7;
                    var4 = var21[var9](var20, var19, var18, var17, var16);
                    var1 = 30;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var23 = var16.bind(var17)(var7, var14);
                _closure2_slot8 = var23;
                var17 = _closure1_slot3;
                var16 = var17.useCallback;
                var14 = new Array(2);
                var14[0] = var25;
                var14[1] = var24;
                var7 = function() { // Environment: var4
                    var5 = _closure2_slot5;
                    var4 = var5.set;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var7 = 24;
                    var1 = var19[var7];
                    var0 = undefined;
                    var9 = var18.bind(var0)(var1);
                    var8 = var9.withDelay;
                    var1 = var19[var7];
                    var21 = var18.bind(var0)(var1);
                    var20 = var21.withSequence;
                    var15 = 25;
                    var1 = var19[var15];
                    var11 = var18.bind(var0)(var1);
                    var10 = var11.withSpring;
                    var1 = 26;
                    var3 = var19[var1];
                    var3 = var18.bind(var0)(var3);
                    var6 = var3.springStandard;
                    var3 = 1.09;
                    var14 = var10.bind(var11)(var3, var6);
                    var3 = var19[var15];
                    var11 = var18.bind(var0)(var3);
                    var10 = var11.withSpring;
                    var3 = var19[var1];
                    var3 = var18.bind(var0)(var3);
                    var6 = var3.springStandard;
                    var3 = 0.9;
                    var13 = var10.bind(var11)(var3, var6);
                    var3 = var19[var15];
                    var10 = var18.bind(var0)(var3);
                    var6 = var10.withSpring;
                    var3 = var19[var1];
                    var3 = var18.bind(var0)(var3);
                    var3 = var3.springStandard;
                    var16 = 1.04;
                    var28 = var6.bind(var10)(var16, var3);
                    var3 = var19[var15];
                    var11 = var18.bind(var0)(var3);
                    var10 = var11.withSpring;
                    var3 = var19[var1];
                    var3 = var18.bind(var0)(var3);
                    var6 = var3.springStandard;
                    var3 = 0.96;
                    var27 = var10.bind(var11)(var3, var6);
                    var3 = var19[var15];
                    var17 = var18.bind(var0)(var3);
                    var10 = var17.withSpring;
                    var3 = var19[var1];
                    var3 = var18.bind(var0)(var3);
                    var6 = var3.springStandard;
                    var3 = 1.02;
                    var26 = var10.bind(var17)(var3, var6);
                    var3 = var19[var15];
                    var22 = var18.bind(var0)(var3);
                    var17 = var22.withSpring;
                    var3 = var19[var1];
                    var3 = var18.bind(var0)(var3);
                    var6 = var3.springStandard;
                    var3 = 0.99;
                    var25 = var17.bind(var22)(var3, var6);
                    var3 = var19[var15];
                    var23 = var18.bind(var0)(var3);
                    var22 = var23.withSpring;
                    var3 = var19[var1];
                    var3 = var18.bind(var0)(var3);
                    var3 = var3.springStandard;
                    var17 = 1;
                    var24 = var22.bind(var23)(var17, var3);
                    var31 = var21;
                    var30 = var14;
                    var29 = var13;
                    var3 = var31[var20](var30, var29, var28, var27, var26, var25, var24, var23);
                    var6 = 8;
                    var3 = var8.bind(var9)(var6, var3);
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot6;
                    var2 = var3.set;
                    var4 = var19[var7];
                    var5 = var18.bind(var0)(var4);
                    var4 = var5.withDelay;
                    var7 = var19[var7];
                    var14 = var18.bind(var0)(var7);
                    var13 = var14.withSequence;
                    var7 = var19[var15];
                    var10 = var18.bind(var0)(var7);
                    var9 = var10.withSpring;
                    var7 = var19[var1];
                    var7 = var18.bind(var0)(var7);
                    var8 = var7.springStandard;
                    var7 = 0.87;
                    var12 = var9.bind(var10)(var7, var8);
                    var7 = var19[var15];
                    var10 = var18.bind(var0)(var7);
                    var9 = var10.withSpring;
                    var7 = var19[var1];
                    var7 = var18.bind(var0)(var7);
                    var8 = var7.springStandard;
                    var7 = 1.06;
                    var11 = var9.bind(var10)(var7, var8);
                    var7 = var19[var15];
                    var10 = var18.bind(var0)(var7);
                    var9 = var10.withSpring;
                    var7 = var19[var1];
                    var7 = var18.bind(var0)(var7);
                    var8 = var7.springStandard;
                    var7 = 0.95;
                    var28 = var9.bind(var10)(var7, var8);
                    var7 = var19[var15];
                    var9 = var18.bind(var0)(var7);
                    var8 = var9.withSpring;
                    var7 = var19[var1];
                    var7 = var18.bind(var0)(var7);
                    var7 = var7.springStandard;
                    var27 = var8.bind(var9)(var16, var7);
                    var7 = var19[var15];
                    var20 = var18.bind(var0)(var7);
                    var16 = var20.withSpring;
                    var7 = var19[var1];
                    var7 = var18.bind(var0)(var7);
                    var8 = var7.springStandard;
                    var7 = 0.97;
                    var26 = var16.bind(var20)(var7, var8);
                    var7 = var19[var15];
                    var21 = var18.bind(var0)(var7);
                    var20 = var21.withSpring;
                    var7 = var19[var1];
                    var7 = var18.bind(var0)(var7);
                    var16 = var7.springStandard;
                    var7 = 1.01;
                    var25 = var20.bind(var21)(var7, var16);
                    var15 = var19[var15];
                    var16 = var18.bind(var0)(var15);
                    var15 = var16.withSpring;
                    var1 = var19[var1];
                    var1 = var18.bind(var0)(var1);
                    var1 = var1.springStandard;
                    var24 = var15.bind(var16)(var17, var1);
                    var31 = var14;
                    var30 = var12;
                    var29 = var11;
                    var1 = var31[var13](var30, var29, var28, var27, var26, var25, var24, var23);
                    var1 = var4.bind(var5)(var6, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var16.bind(var17)(var7, var14);
                _closure2_slot9 = var7;
                var17 = _closure1_slot3;
                var16 = var17.useCallback;
                var14 = new Array(4);
                var14[0] = var32;
                var14[1] = var29;
                var14[2] = var23;
                var14[3] = var7;
                var7 = function() { // Environment: var4
                    _fun105186: for (var _fun105186_ip = 0;;) switch (_fun105186_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun105186_ip = 36;
                                continue _fun105186
                            }
                        case 10:
                            var2 = _closure2_slot7;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            var2 = _closure2_slot8;
                            var2 = var2.bind(var1)();
                            var0 = _closure2_slot9;
                            var0 = var0.bind(var1)();
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = var16.bind(var17)(var7, var14);
                _closure2_slot10 = var17;
                var7 = var2[var26];
                var16 = var8.bind(var3)(var7);
                var14 = var16.useAnimatedStyle;
                var7 = function() {
                    var0 = {};
                    var2 = {};
                    var4 = _closure2_slot3;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var2.scale = var1;
                    var1 = new Array(4);
                    var1[0] = var2;
                    var2 = {};
                    var5 = _closure2_slot4;
                    var4 = var5.get;
                    var7 = var4.bind(var5)();
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var6 = var4.concat;
                    var5 = '';
                    var4 = 'deg';
                    var4 = var6.bind(var5)(var7, var4);
                    var2.rotate = var4;
                    var1[1] = var2;
                    var2 = {};
                    var5 = _closure2_slot5;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var2.scaleX = var4;
                    var1[2] = var2;
                    var2 = {};
                    var4 = _closure2_slot6;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2.scaleY = var3;
                    var1[3] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var23 = {};
                var23.scaleDownAnimation = var28;
                var23.rotationAnimation = var27;
                var23.wobbleAnimationX = var25;
                var23.wobbleAnimationY = var24;
                var7.__closure = var23;
                var23 = 3024112617373.0;
                var7.__workletHash = var23;
                var23 = _closure1_slot18;
                var7.__initData = var23;
                var36 = var14.bind(var16)(var7);
                var16 = _closure1_slot3;
                var14 = var16.useEffect;
                var7 = new Array(2);
                var7[0] = var22;
                var7[1] = var17;
                var4 = function() { // Environment: var4
                    var3 = _closure2_slot0;
                    var2 = var3.addListener;
                    var1 = 'tabPress';
                    var0 = function() { // Environment: var0
                        _fun105189: for (var _fun105189_ip = 0;;) switch (_fun105189_ip) {
                            case 0:
                                var0 = _closure2_slot2;
                                var5 = null;
                                var2 = var5 == var0;
                                var0 = undefined;
                                var3 = undefined;
                                if (var2) {
                                    _fun105189_ip = 36;
                                    continue _fun105189
                                }
                            case 20:
                                var4 = _closure2_slot2;
                                var4 = var4.current;
                                var2 = var5 == var4;
                                var3 = var4;
                            case 36:
                                if (var2) {
                                    _fun105189_ip = 49;
                                    continue _fun105189
                                }
                            case 39:
                                var2 = var3.play;
                                var2 = var2.bind(var3)();
                            case 49:
                                var1 = _closure2_slot10;
                                var1 = var1.bind(var0)();
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var14.bind(var16)(var4, var7);
                var14 = new Array(0);
                var4 = var2[var37];
                var7 = var8.bind(var3)(var4);
                var4 = var7.getStatusSize;
                var2 = var2[var37];
                var2 = var8.bind(var3)(var2);
                var2 = var2.AvatarSizes;
                var2 = var2.TABS_22;
                var22 = var4.bind(var7)(var2);
                if (!var0) {
                    _fun105178_ip = 1082;
                    continue _fun105178
                }
            case 1072:
                var0 = var14.push;
                var0 = var0.bind(var14)(var1);
            case 1082:
                var2 = _closure1_slot13;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = undefined;
                if (!var5) {
                    _fun105178_ip = 1103;
                    continue _fun105178
                }
            case 1097:
                var4 = var10.containerTablet;
            case 1103:
                var0.style = var4;
                var8 = _closure1_slot13;
                var7 = _closure1_slot4;
                var4 = {};
                var16 = var18.container;
                var4.style = var16;
                var4.ref = var11;
                var17 = _closure1_slot12;
                var16 = _closure1_slot4;
                var11 = {};
                var23 = var18.avatarCutoutWrapper;
                var11.style = var23;
                var25 = _closure1_slot12;
                var24 = _closure1_slot1;
                var27 = _closure1_slot2;
                var23 = 18;
                var23 = var27[var23];
                var24 = var24.bind(var3)(var23);
                var23 = {};
                var23.cutouts = var14;
                var29 = _closure1_slot12;
                if (var35) {
                    _fun105178_ip = 1430;
                    continue _fun105178
                }
            case 1191:
                var32 = _closure1_slot1;
                var28 = _closure1_slot2;
                var26 = var28[var26];
                var26 = var32.bind(var3)(var26);
                var27 = var26.View;
                var26 = {};
                var33 = new Array(1);
                var33[0] = var36;
                var26.style = var33;
                var33 = _closure1_slot12;
                var28 = var28[var37];
                var32 = var32.bind(var3)(var28);
                var28 = {};
                var28.user = var13;
                var28.guildId = var3;
                if (var34) {
                    _fun105178_ip = 1261;
                    continue _fun105178
                }
            case 1253:
                var34 = var18.tabBarIconUnselected;
                _fun105178_ip = 1281;
                continue _fun105178;
            case 1261:
                if (var5) {
                    _fun105178_ip = 1272;
                    continue _fun105178
                }
            case 1264:
                var36 = var18.tabBarIconSelected;
                _fun105178_ip = 1278;
                continue _fun105178;
            case 1272:
                var36 = var18.avatarTablet;
            case 1278:
                var34 = var36;
            case 1281:
                var28.style = var34;
                var34 = undefined;
                if (!var35) {
                    _fun105178_ip = 1300;
                    continue _fun105178
                }
            case 1290:
                var36 = {};
                var36.tintColor = var30;
                var34 = var36;
            case 1300:
                var28.avatarStyle = var34;
                var36 = _closure1_slot0;
                var34 = _closure1_slot2;
                var34 = var34[var37];
                var34 = var36.bind(var3)(var34);
                var36 = var34.AvatarSizes;
                if (var5) {
                    _fun105178_ip = 1339;
                    continue _fun105178
                }
            case 1331:
                var34 = var36.TABS_22;
                _fun105178_ip = 1345;
                continue _fun105178;
            case 1339:
                var34 = var36.NORMAL;
            case 1345:
                var28.size = var34;
                var34 = false;
                var28.animate = var34;
                var34 = null;
                if (!var35) {
                    _fun105178_ip = 1381;
                    continue _fun105178
                }
            case 1361:
                var36 = _closure1_slot1;
                var37 = _closure1_slot2;
                var35 = 28;
                var35 = var37[var35];
                var34 = var36.bind(var3)(var35);
            case 1381:
                var28.source = var34;
                var34 = true;
                var28.needsOffscreenAlphaCompositing = var34;
                var35 = var6 == var13;
                var34 = undefined;
                if (var35) {
                    _fun105178_ip = 1407;
                    continue _fun105178
                }
            case 1401:
                var34 = var13.avatarDecoration;
            case 1407:
                var28.avatarDecoration = var34;
                var28 = var33.bind(var3)(var32, var28);
                var26.children = var28;
                var26 = var29.bind(var3)(var27, var26);
                _fun105178_ip = 1491;
                continue _fun105178;
            case 1430:
                var28 = _closure1_slot0;
                var32 = _closure1_slot2;
                var27 = 27;
                var27 = var32[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.YouTabLottie;
                var27 = {};
                var27.ref = var31;
                var31 = 'lg';
                if (var5) {
                    _fun105178_ip = 1473;
                    continue _fun105178
                }
            case 1469:
                var31 = 'md';
            case 1473:
                var27.size = var31;
                var27.color = var30;
                var27.opacity = var20;
                var26 = var29.bind(var3)(var28, var27);
            case 1491:
                var23.children = var26;
                var23 = var25.bind(var3)(var24, var23);
                var11.children = var23;
                var16 = var17.bind(var3)(var16, var11);
                var11 = new Array(2);
                var11[0] = var16;
                var14 = var14.length;
                var14 = var14 > var15;
                if (!var14) {
                    _fun105178_ip = 1650;
                    continue _fun105178
                }
            case 1531:
                var17 = _closure1_slot12;
                var16 = _closure1_slot4;
                var15 = {};
                var23 = var18.content;
                var18 = new Array(3);
                var18[0] = var23;
                var18[1] = var19;
                var19 = {};
                var19.opacity = var20;
                var18[2] = var19;
                var15.style = var18;
                var20 = _closure1_slot12;
                var19 = _closure1_slot1;
                var23 = _closure1_slot2;
                var18 = 29;
                var18 = var23[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                if (!(var6 == var22)) {
                    _fun105178_ip = 1612;
                    continue _fun105178
                }
            case 1602:
                var23 = _closure1_slot10;
                var22 = var23.MEDIUM;
            case 1612:
                var18.size = var22;
                var18.status = var21;
                var21 = {};
                var22 = 2;
                var21.margin = var22;
                var18.style = var21;
                var18 = var20.bind(var3)(var19, var18);
                var15.children = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 1650:
                var11[1] = var14;
                var4.children = var11;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                var11 = _closure1_slot12;
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 30;
                var7 = var14[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.MobileTrialUserSettingsAvatarBadge;
                var7 = {};
                var7 = var11.bind(var3)(var8, var7);
                var4[1] = var7;
                if (!var5) {
                    _fun105178_ip = 1721;
                    continue _fun105178
                }
            case 1717:
                var5 = var6 != var13;
            case 1721:
                if (!var5) {
                    _fun105178_ip = 1728;
                    continue _fun105178
                }
            case 1724:
                var5 = var6 != var12;
            case 1728:
                if (!var5) {
                    _fun105178_ip = 1822;
                    continue _fun105178
                }
            case 1731:
                var8 = _closure1_slot12;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.usernameTablet;
                var6.style = var10;
                var11 = _closure1_slot12;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 31;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {
                    'userId': null,
                    'userName': null,
                    'defaultColor': 'interactive-text-active',
                    'variant': 'text-md/semibold',
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 2
                };
                var13 = var13.id;
                var9.userId = var13;
                var9.userName = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1822:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.YouIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3219, 5718, 1621, 8676, 5515, 483, 33, 5516, 5514, 671, 1297, 5467, 1235, 8675, 8941, 5519, 7714, 13674, 632, 3242, 13678, 3719, 4089, 4095, 12221, 7705, 5816, 13682, 7009, 2]);