// modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun104453: for (var _fun104453_ip = 0;;) switch (_fun104453_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.value;
                var11 = var0.countA11yLabel;
                var1 = var0.unread;
                var9 = var0.lowPriority;
                var5 = var0.unreadA11yLabel;
                var0 = _closure1_slot15;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var0 = null;
                if (!(var0 == var11)) {
                    _fun104453_ip = 84;
                    continue _fun104453
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
                    _fun104453_ip = 173;
                    continue _fun104453
                }
            case 90:
                var0 = null;
                if (!var1) {
                    _fun104453_ip = 168;
                    continue _fun104453
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
                _fun104453_ip = 309;
                continue _fun104453;
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
                    _fun104453_ip = 232;
                    continue _fun104453
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
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun104454: for (var _fun104454_ip = 0;;) switch (_fun104454_ip) {
            case 0:
                var2 = arg0;
                var6 = var2.iconSize;
                var _closure2_slot0 = var6;
                var5 = var2.offset;
                var1 = undefined;
                if (!(var5 === var1)) {
                    _fun104454_ip = 29;
                    continue _fun104454
                }
            case 27:
                var5 = 0;
            case 29:
                var _closure2_slot1 = var5;
                var4 = var2.adjustForYouTab;
                if (!(var4 === var1)) {
                    _fun104454_ip = 45;
                    continue _fun104454
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
                    _fun104455: for (var _fun104455_ip = 0;;) switch (_fun104455_ip) {
                        case 0:
                            var0 = {};
                            var1 = 8;
                            var0.borderRadius = var1;
                            var2 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            if (var2) {
                                _fun104455_ip = 32;
                                continue _fun104455
                            }
                        case 23:
                            var2 = 3;
                            var3 = var4 / var2;
                            _fun104455_ip = 46;
                            continue _fun104455;
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
                                _fun104455_ip = 85;
                                continue _fun104455
                            }
                        case 69:
                            var2 = 0.625;
                            var2 = var2 * var4;
                            _fun104455_ip = 99;
                            continue _fun104455;
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
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun104456: for (var _fun104456_ip = 0;;) switch (_fun104456_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.iconSize;
                var _closure2_slot0 = var8;
                var7 = var1.offset;
                var2 = undefined;
                if (!(var7 === var2)) {
                    _fun104456_ip = 29;
                    continue _fun104456
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
                    _fun104457: for (var _fun104457_ip = 0;;) switch (_fun104457_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = 0;
                            if (!(!(var1 > var0))) {
                                _fun104457_ip = 29;
                                continue _fun104457
                            }
                        case 13:
                            var1 = {
                                'x': 2,
                                'y': 2,
                                'size': 4294967292
                            };
                            _fun104457_ip = 43;
                            continue _fun104457;
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
                                _fun104457_ip = 123;
                                continue _fun104457
                            }
                        case 98:
                            var3 = 0.625;
                            var4 = var3 * var5;
                            var3 = var1.x;
                            var4 = var4 + var3;
                            _fun104457_ip = 137;
                            continue _fun104457;
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
                                _fun104457_ip = 178;
                                continue _fun104457
                            }
                        case 160:
                            var3 = 3;
                            var4 = var5 / var3;
                            var3 = var1.y;
                            var4 = var4 + var3;
                            _fun104457_ip = 192;
                            continue _fun104457;
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
                                _fun104457_ip = 233;
                                continue _fun104457
                            }
                        case 222:
                            var1 = var1.size;
                            var1 = var2 + var1;
                            _fun104457_ip = 236;
                            continue _fun104457;
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
    var _closure1_slot20 = var0;
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
    var15 = 2;
    var3 = var5[var15];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var14 = var3.BADGE_SIZE;
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
    var13 = var6[var3];
    var _closure1_slot14 = var13;
    var3 = 12;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var10 = 'relative';
    var9.position = var10;
    var6.container = var9;
    var9 = {};
    var10 = 'absolute';
    var9.position = var10;
    var6.content = var9;
    var9 = {};
    var10 = 13;
    var16 = var5[var10];
    var16 = var12.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_400;
    var9.backgroundColor = var16;
    var6.lowPriorityBadge = var9;
    var9 = {
        'height': 22,
        'width': 22
    };
    var14 = var14 / var15;
    var9.borderRadius = var14;
    var6.unread = var9;
    var9 = {};
    var9.width = var13;
    var9.height = var13;
    var6.avatarTablet = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9.padding = var10;
    var6.avatarCutout = var9;
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
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'backgroundColor': 'rgba(0, 0, 0, 0.33)',
        'zIndex': 4294967286
    };
    var6.dimOverlay = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot15 = var6;
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
        var3 = 13;
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
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function BadgableTabBarIconTsx1(){const{scaleDownAnimation,rotationAnimation,wobbleAnimationX,wobbleAnimationY}=this.__closure;return{transform:[{scale:scaleDownAnimation.get()},{rotate:rotationAnimation.get()+"deg"},{scaleX:wobbleAnimationX.get()},{scaleY:wobbleAnimationY.get()}]};}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun104459: for (var _fun104459_ip = 0;;) switch (_fun104459_ip) {
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
                var4 = _closure1_slot15;
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
                    _fun104459_ip = 142;
                    continue _fun104459
                }
            case 131:
                if (var4) {
                    _fun104459_ip = 142;
                    continue _fun104459
                }
            case 134:
                var20 = var5.tabBarIconUnselected;
                _fun104459_ip = 148;
                continue _fun104459;
            case 142:
                var20 = var5.tabBarIconSelected;
            case 148:
                var8 = _closure1_slot19;
                var6 = {};
                var6.iconSize = var10;
                var8 = var8.bind(var3)(var6);
                var0 = var0.bind(var3)();
                var22 = var0.value;
                var18 = var0.showDot;
                var17 = var0.lowPriority;
                var6 = _closure1_slot20;
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
                    _fun104459_ip = 247;
                    continue _fun104459
                }
            case 244:
                var11 = var2;
            case 247:
                _closure2_slot2 = var11;
                var2 = 0;
                var10 = var22 > var2;
                if (var10) {
                    _fun104459_ip = 263;
                    continue _fun104459
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
                    _fun104460: for (var _fun104460_ip = 0;;) switch (_fun104460_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun104460_ip = 17;
                                continue _fun104460
                            }
                        case 13:
                            var1 = undefined;
                            return var1;
                        case 17:
                            var3 = _closure2_slot0;
                            var2 = var3.addListener;
                            var1 = 'tabPress';
                            var0 = function() { // Environment: var0
                                _fun104461: for (var _fun104461_ip = 0;;) switch (_fun104461_ip) {
                                    case 0:
                                        var0 = _closure2_slot1;
                                        var4 = null;
                                        var1 = var4 == var0;
                                        var0 = undefined;
                                        var2 = undefined;
                                        if (var1) {
                                            _fun104461_ip = 36;
                                            continue _fun104461
                                        }
                                    case 20:
                                        var3 = _closure2_slot1;
                                        var3 = var3.current;
                                        var1 = var4 == var3;
                                        var2 = var3;
                                    case 36:
                                        if (var1) {
                                            _fun104461_ip = 49;
                                            continue _fun104461
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
                    _fun104459_ip = 443;
                    continue _fun104459
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
                var8 = _closure1_slot18;
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
                    _fun104459_ip = 594;
                    continue _fun104459
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
                    _fun104459_ip = 504;
                    continue _fun104459
                }
            case 498:
                var15 = new Array(0);
                _fun104459_ip = 515;
                continue _fun104459;
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
                _fun104459_ip = 733;
                continue _fun104459;
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
                    _fun104459_ip = 640;
                    continue _fun104459
                }
            case 634:
                var10 = new Array(0);
                _fun104459_ip = 651;
                continue _fun104459;
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
                    _fun104459_ip = 694;
                    continue _fun104459
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
        _fun104462: for (var _fun104462_ip = 0;;) switch (_fun104462_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.focused;
                var28 = var1.tintColor;
                var23 = var1.navigation;
                var _closure2_slot0 = var23;
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
                var1 = _closure1_slot15;
                var19 = var1.bind(var3)();
                var1 = _closure1_slot16;
                var10 = var1.bind(var3)(var2);
                var2 = _closure1_slot1;
                var1 = 19;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var5 = var1.bind(var3)();
                var32 = var5;
                if (var5) {
                    _fun104462_ip = 148;
                    continue _fun104462
                }
            case 145:
                var32 = var0;
            case 148:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 21;
                var2 = var0[var8];
                var11 = var1.bind(var3)(var2);
                var7 = var11.useStateFromStores;
                var2 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var4
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var7.bind(var11)(var6, var2);
                var6 = _closure1_slot1;
                var2 = 22;
                var2 = var0[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.useName;
                var12 = var2.bind(var6)(var13);
                var0 = var0[var8];
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
                var22 = var2.bind(var6)(var1, var0);
                var6 = null;
                var0 = var6 != var22;
                if (!var0) {
                    _fun104462_ip = 287;
                    continue _fun104462
                }
            case 273:
                var1 = _closure1_slot11;
                var1 = var1.UNKNOWN;
                var0 = var22 !== var1;
            case 287:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 23;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useIsEligibleForPomelo;
                var7 = var1.bind(var2)();
                var2 = var6 == var13;
                var1 = undefined;
                if (var2) {
                    _fun104462_ip = 332;
                    continue _fun104462
                }
            case 326:
                var1 = var13.avatar;
            case 332:
                var33 = var6 == var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = var1[var8];
                var16 = var2.bind(var3)(var11);
                var15 = var16.useStateFromStores;
                var11 = _closure1_slot7;
                var14 = new Array(1);
                var14[0] = var11;
                var11 = function() { // Environment: var4
                    var1 = _closure1_slot7;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var15.bind(var16)(var14, var11);
                var14 = _closure1_slot3;
                var11 = var14.useRef;
                var14 = var11.bind(var14)(var6);
                var11 = 24;
                var1 = var1[var11];
                var15 = var2.bind(var3)(var1);
                var2 = var15.useGuildTagAvailableCoachmark;
                var17 = var6 != var16;
                var1 = null;
                if (!var17) {
                    _fun104462_ip = 427;
                    continue _fun104462
                }
            case 424:
                var1 = var16;
            case 427:
                var1 = var2.bind(var15)(var14, var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var11 = var2.bind(var3)(var1);
                var2 = var11.useGuildTagUpdatedCoachmark;
                var15 = var6 != var13;
                var1 = null;
                if (!var15) {
                    _fun104462_ip = 468;
                    continue _fun104462
                }
            case 465:
                var1 = var13;
            case 468:
                var1 = var2.bind(var11)(var14, var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var11 = var2.bind(var3)(var1);
                var8 = var11.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var4
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var36 = var8.bind(var11)(var2, var1);
                _closure2_slot1 = var36;
                var21 = 0.5;
                if (!var32) {
                    _fun104462_ip = 541;
                    continue _fun104462
                }
            case 538:
                var21 = 1;
            case 541:
                if (var5) {
                    _fun104462_ip = 578;
                    continue _fun104462
                }
            case 544:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 14;
                var1 = var8[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ICON_SIZE;
                var8 = var1.md;
                _fun104462_ip = 582;
                continue _fun104462;
            case 578:
                var8 = _closure1_slot14;
            case 582:
                var2 = _closure1_slot3;
                var1 = var2.useRef;
                var29 = var1.bind(var2)(var6);
                _closure2_slot2 = var29;
                var2 = _closure1_slot19;
                var1 = {};
                var1.iconSize = var8;
                var11 = var19.avatarCutout;
                var11 = var11.padding;
                var1.offset = var11;
                var1.adjustForYouTab = var5;
                var20 = var2.bind(var3)(var1);
                var2 = _closure1_slot20;
                var1 = {};
                var1.iconSize = var8;
                var8 = var19.avatarCutout;
                var8 = var8.padding;
                var1.offset = var8;
                var35 = 11;
                var1.cutoutRadius = var35;
                var16 = 0;
                var1.badgeCount = var16;
                var1.isWindowLarge = var5;
                var1 = var2.bind(var3)(var1);
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var24 = 25;
                var8 = var2[var24];
                var15 = var11.bind(var3)(var8);
                var8 = var15.useSharedValue;
                var17 = 1;
                var31 = var8.bind(var15)(var17);
                _closure2_slot3 = var31;
                var8 = var2[var24];
                var15 = var11.bind(var3)(var8);
                var8 = var15.useSharedValue;
                var30 = var8.bind(var15)(var16);
                _closure2_slot4 = var30;
                var8 = var2[var24];
                var15 = var11.bind(var3)(var8);
                var8 = var15.useSharedValue;
                var27 = var8.bind(var15)(var17);
                _closure2_slot5 = var27;
                var8 = var2[var24];
                var15 = var11.bind(var3)(var8);
                var8 = var15.useSharedValue;
                var26 = var8.bind(var15)(var17);
                _closure2_slot6 = var26;
                var18 = _closure1_slot3;
                var17 = var18.useCallback;
                var15 = new Array(1);
                var15[0] = var31;
                var8 = function() { // Environment: var4
                    var9 = {};
                    var0 = 0.13;
                    var9.mass = var0;
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 25;
                    var1 = var8[var0];
                    var0 = undefined;
                    var6 = var7.bind(var0)(var1);
                    var5 = var6.withSequence;
                    var1 = 26;
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
                var34 = var17.bind(var18)(var8, var15);
                _closure2_slot7 = var34;
                var18 = _closure1_slot3;
                var17 = var18.useCallback;
                var15 = new Array(1);
                var15[0] = var30;
                var8 = function() { // Environment: var4
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 25;
                    var4 = var14[var1];
                    var0 = undefined;
                    var6 = var11.bind(var0)(var4);
                    var5 = var6.withDelay;
                    var1 = var14[var1];
                    var10 = var11.bind(var0)(var1);
                    var9 = var10.withSequence;
                    var12 = 26;
                    var1 = var14[var12];
                    var13 = var11.bind(var0)(var1);
                    var8 = var13.withSpring;
                    var1 = 27;
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
                var25 = var17.bind(var18)(var8, var15);
                _closure2_slot8 = var25;
                var18 = _closure1_slot3;
                var17 = var18.useCallback;
                var15 = new Array(2);
                var15[0] = var27;
                var15[1] = var26;
                var8 = function() { // Environment: var4
                    var5 = _closure2_slot5;
                    var4 = var5.set;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var7 = 25;
                    var1 = var19[var7];
                    var0 = undefined;
                    var9 = var18.bind(var0)(var1);
                    var8 = var9.withDelay;
                    var1 = var19[var7];
                    var21 = var18.bind(var0)(var1);
                    var20 = var21.withSequence;
                    var15 = 26;
                    var1 = var19[var15];
                    var11 = var18.bind(var0)(var1);
                    var10 = var11.withSpring;
                    var1 = 27;
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
                var8 = var17.bind(var18)(var8, var15);
                _closure2_slot9 = var8;
                var18 = _closure1_slot3;
                var17 = var18.useCallback;
                var15 = new Array(4);
                var15[0] = var36;
                var15[1] = var34;
                var15[2] = var25;
                var15[3] = var8;
                var8 = function() { // Environment: var4
                    _fun104470: for (var _fun104470_ip = 0;;) switch (_fun104470_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun104470_ip = 36;
                                continue _fun104470
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
                var18 = var17.bind(var18)(var8, var15);
                _closure2_slot10 = var18;
                var8 = var2[var24];
                var17 = var11.bind(var3)(var8);
                var15 = var17.useAnimatedStyle;
                var8 = function() {
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
                var25 = {};
                var25.scaleDownAnimation = var31;
                var25.rotationAnimation = var30;
                var25.wobbleAnimationX = var27;
                var25.wobbleAnimationY = var26;
                var8.__closure = var25;
                var25 = 3024112617373.0;
                var8.__workletHash = var25;
                var25 = _closure1_slot17;
                var8.__initData = var25;
                var34 = var15.bind(var17)(var8);
                var17 = _closure1_slot3;
                var15 = var17.useEffect;
                var8 = new Array(2);
                var8[0] = var23;
                var8[1] = var18;
                var4 = function() { // Environment: var4
                    var3 = _closure2_slot0;
                    var2 = var3.addListener;
                    var1 = 'tabPress';
                    var0 = function() { // Environment: var0
                        _fun104473: for (var _fun104473_ip = 0;;) switch (_fun104473_ip) {
                            case 0:
                                var0 = _closure2_slot2;
                                var5 = null;
                                var2 = var5 == var0;
                                var0 = undefined;
                                var3 = undefined;
                                if (var2) {
                                    _fun104473_ip = 36;
                                    continue _fun104473
                                }
                            case 20:
                                var4 = _closure2_slot2;
                                var4 = var4.current;
                                var2 = var5 == var4;
                                var3 = var4;
                            case 36:
                                if (var2) {
                                    _fun104473_ip = 49;
                                    continue _fun104473
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
                var4 = var15.bind(var17)(var4, var8);
                var15 = new Array(0);
                var4 = var2[var35];
                var8 = var11.bind(var3)(var4);
                var4 = var8.getStatusSize;
                var2 = var2[var35];
                var2 = var11.bind(var3)(var2);
                var2 = var2.AvatarSizes;
                var2 = var2.TABS_22;
                var23 = var4.bind(var8)(var2);
                if (!var0) {
                    _fun104462_ip = 1125;
                    continue _fun104462
                }
            case 1122:
                var0 = !var7;
            case 1125:
                if (!var0) {
                    _fun104462_ip = 1138;
                    continue _fun104462
                }
            case 1128:
                var0 = var15.push;
                var0 = var0.bind(var15)(var1);
            case 1138:
                var2 = _closure1_slot13;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = undefined;
                if (!var5) {
                    _fun104462_ip = 1159;
                    continue _fun104462
                }
            case 1153:
                var4 = var10.containerTablet;
            case 1159:
                var0.style = var4;
                var11 = _closure1_slot13;
                var8 = _closure1_slot4;
                var4 = {};
                var17 = var19.container;
                var4.style = var17;
                var4.ref = var14;
                var18 = _closure1_slot12;
                var17 = _closure1_slot1;
                var25 = _closure1_slot2;
                var14 = 18;
                var14 = var25[var14];
                var17 = var17.bind(var3)(var14);
                var14 = {};
                var14.cutouts = var15;
                var25 = var19.avatarCutout;
                var14.style = var25;
                var27 = _closure1_slot12;
                if (var33) {
                    _fun104462_ip = 1476;
                    continue _fun104462
                }
            case 1237:
                var30 = _closure1_slot1;
                var26 = _closure1_slot2;
                var24 = var26[var24];
                var24 = var30.bind(var3)(var24);
                var25 = var24.View;
                var24 = {};
                var31 = new Array(1);
                var31[0] = var34;
                var24.style = var31;
                var31 = _closure1_slot12;
                var26 = var26[var35];
                var30 = var30.bind(var3)(var26);
                var26 = {};
                var26.user = var13;
                var26.guildId = var3;
                if (var32) {
                    _fun104462_ip = 1307;
                    continue _fun104462
                }
            case 1299:
                var32 = var19.tabBarIconUnselected;
                _fun104462_ip = 1327;
                continue _fun104462;
            case 1307:
                if (var5) {
                    _fun104462_ip = 1318;
                    continue _fun104462
                }
            case 1310:
                var34 = var19.tabBarIconSelected;
                _fun104462_ip = 1324;
                continue _fun104462;
            case 1318:
                var34 = var19.avatarTablet;
            case 1324:
                var32 = var34;
            case 1327:
                var26.style = var32;
                var32 = undefined;
                if (!var33) {
                    _fun104462_ip = 1346;
                    continue _fun104462
                }
            case 1336:
                var34 = {};
                var34.tintColor = var28;
                var32 = var34;
            case 1346:
                var26.avatarStyle = var32;
                var34 = _closure1_slot0;
                var32 = _closure1_slot2;
                var32 = var32[var35];
                var32 = var34.bind(var3)(var32);
                var34 = var32.AvatarSizes;
                if (var5) {
                    _fun104462_ip = 1385;
                    continue _fun104462
                }
            case 1377:
                var32 = var34.TABS_22;
                _fun104462_ip = 1391;
                continue _fun104462;
            case 1385:
                var32 = var34.NORMAL;
            case 1391:
                var26.size = var32;
                var32 = false;
                var26.animate = var32;
                var32 = null;
                if (!var33) {
                    _fun104462_ip = 1427;
                    continue _fun104462
                }
            case 1407:
                var34 = _closure1_slot1;
                var35 = _closure1_slot2;
                var33 = 29;
                var33 = var35[var33];
                var32 = var34.bind(var3)(var33);
            case 1427:
                var26.source = var32;
                var32 = true;
                var26.needsOffscreenAlphaCompositing = var32;
                var33 = var6 == var13;
                var32 = undefined;
                if (var33) {
                    _fun104462_ip = 1453;
                    continue _fun104462
                }
            case 1447:
                var32 = var13.avatarDecoration;
            case 1453:
                var26.avatarDecoration = var32;
                var26 = var31.bind(var3)(var30, var26);
                var24.children = var26;
                var24 = var27.bind(var3)(var25, var24);
                _fun104462_ip = 1537;
                continue _fun104462;
            case 1476:
                var26 = _closure1_slot0;
                var30 = _closure1_slot2;
                var25 = 28;
                var25 = var30[var25];
                var25 = var26.bind(var3)(var25);
                var26 = var25.YouTabLottie;
                var25 = {};
                var25.ref = var29;
                var29 = 'lg';
                if (var5) {
                    _fun104462_ip = 1519;
                    continue _fun104462
                }
            case 1515:
                var29 = 'md';
            case 1519:
                var25.size = var29;
                var25.color = var28;
                var25.opacity = var21;
                var24 = var27.bind(var3)(var26, var25);
            case 1537:
                var14.children = var24;
                var17 = var18.bind(var3)(var17, var14);
                var14 = new Array(2);
                var14[0] = var17;
                var15 = var15.length;
                var15 = var15 > var16;
                if (!var15) {
                    _fun104462_ip = 1686;
                    continue _fun104462
                }
            case 1567:
                var18 = _closure1_slot12;
                var17 = _closure1_slot4;
                var16 = {};
                var24 = var19.content;
                var19 = new Array(3);
                var19[0] = var24;
                var19[1] = var20;
                var20 = {};
                var20.opacity = var21;
                var19[2] = var20;
                var16.style = var19;
                var21 = _closure1_slot12;
                var20 = _closure1_slot1;
                var24 = _closure1_slot2;
                var19 = 30;
                var19 = var24[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                if (!(var6 == var23)) {
                    _fun104462_ip = 1648;
                    continue _fun104462
                }
            case 1638:
                var24 = _closure1_slot10;
                var23 = var24.MEDIUM;
            case 1648:
                var19.size = var23;
                var19.status = var22;
                var22 = {};
                var23 = 2;
                var22.margin = var23;
                var19.style = var22;
                var19 = var21.bind(var3)(var20, var19);
                var16.children = var19;
                var15 = var18.bind(var3)(var17, var16);
            case 1686:
                var14[1] = var15;
                var4.children = var14;
                var8 = var11.bind(var3)(var8, var4);
                var4 = new Array(4);
                var4[0] = var8;
                if (!var7) {
                    _fun104462_ip = 1787;
                    continue _fun104462
                }
            case 1711:
                var14 = _closure1_slot12;
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 31;
                var8 = var17[var8];
                var11 = var16.bind(var3)(var8);
                var8 = {};
                var15 = 13;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.colors;
                var15 = var15.STATUS_WARNING;
                var8.themedColor = var15;
                var15 = 32;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var8.source = var15;
                var7 = var14.bind(var3)(var11, var8);
            case 1787:
                var4[1] = var7;
                var11 = _closure1_slot12;
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 33;
                var7 = var14[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.MobileTrialUserSettingsAvatarBadge;
                var7 = {};
                var7 = var11.bind(var3)(var8, var7);
                var4[2] = var7;
                if (!var5) {
                    _fun104462_ip = 1840;
                    continue _fun104462
                }
            case 1836:
                var5 = var6 != var13;
            case 1840:
                if (!var5) {
                    _fun104462_ip = 1847;
                    continue _fun104462
                }
            case 1843:
                var5 = var6 != var12;
            case 1847:
                if (!var5) {
                    _fun104462_ip = 1941;
                    continue _fun104462
                }
            case 1850:
                var8 = _closure1_slot12;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.usernameTablet;
                var6.style = var10;
                var11 = _closure1_slot12;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 34;
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
            case 1941:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.YouIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3204, 5652, 1613, 8624, 5448, 483, 33, 5449, 5447, 1297, 671, 5400, 1234, 8623, 8888, 5452, 7680, 13607, 632, 3227, 10321, 13611, 3711, 4072, 4078, 12151, 7672, 5750, 13615, 7507, 13616, 6913, 2]);