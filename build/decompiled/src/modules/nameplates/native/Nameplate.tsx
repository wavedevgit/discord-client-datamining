// modules/nameplates/native/Nameplate.tsx
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
    var3 = var6.bind(var0)(var3);
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
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
        _fun56728: for (var _fun56728_ip = 0;;) switch (_fun56728_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var5 = arg2;
                var3 = arg3;
                var6 = arg4;
                var0 = {};
                var1 = {
                    'position': 'absolute',
                    'overflow': 'hidden',
                    'top': 0,
                    'bottom': 0,
                    'left': 0,
                    'right': 0
                };
                var0.container = var1;
                var1 = {
                    'position': 'absolute',
                    'width': '100%',
                    'height': '100%'
                };
                var2 = 1;
                var8 = var2;
                if (var7) {
                    _fun56728_ip = 126;
                    continue _fun56728
                }
            case 58:
                if (!var3) {
                    _fun56728_ip = 66;
                    continue _fun56728
                }
            case 61:
                var9 = 0;
                if (!var5) {
                    _fun56728_ip = 123;
                    continue _fun56728
                }
            case 66:
                if (var4) {
                    _fun56728_ip = 94;
                    continue _fun56728
                }
            case 69:
                var10 = 0.4;
                if (!var5) {
                    _fun56728_ip = 92;
                    continue _fun56728
                }
            case 82:
                var10 = 0.8;
            case 92:
                _fun56728_ip = 120;
                continue _fun56728;
            case 94:
                var11 = 0.6;
                if (!var6) {
                    _fun56728_ip = 117;
                    continue _fun56728
                }
            case 107:
                var11 = 0.3;
            case 117:
                var10 = var11;
            case 120:
                var9 = var10;
            case 123:
                var8 = var9;
            case 126:
                var1.opacity = var8;
                var0.gradient = var1;
                var1 = {
                    'position': 'absolute',
                    'height': '100%',
                    'right': 0,
                    'aspectRatio': 5.333333333333333
                };
                if (var7) {
                    _fun56728_ip = 228;
                    continue _fun56728
                }
            case 152:
                if (!var3) {
                    _fun56728_ip = 168;
                    continue _fun56728
                }
            case 155:
                var3 = 0.1;
                if (!var5) {
                    _fun56728_ip = 225;
                    continue _fun56728
                }
            case 168:
                if (var4) {
                    _fun56728_ip = 196;
                    continue _fun56728
                }
            case 171:
                var4 = 0.6;
                if (!var5) {
                    _fun56728_ip = 194;
                    continue _fun56728
                }
            case 184:
                var4 = 0.8;
            case 194:
                _fun56728_ip = 222;
                continue _fun56728;
            case 196:
                var5 = 0.5;
                if (!var6) {
                    _fun56728_ip = 219;
                    continue _fun56728
                }
            case 209:
                var5 = 0.4;
            case 219:
                var4 = var5;
            case 222:
                var3 = var4;
            case 225:
                var2 = var3;
            case 228:
                var1.opacity = var2;
                var0.img = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function NameplateTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = function(arg0) { // Original name: NameplateInner, environment: var1
        _fun56729: for (var _fun56729_ip = 0;;) switch (_fun56729_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.nameplate;
                var15 = var2.isPressed;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun56729_ip = 25;
                    continue _fun56729
                }
            case 23:
                var15 = false;
            case 25:
                var14 = var2.isFocused;
                if (!(var14 === var3)) {
                    _fun56729_ip = 37;
                    continue _fun56729
                }
            case 35:
                var14 = false;
            case 37:
                var13 = var2.isMuted;
                if (!(var13 === var3)) {
                    _fun56729_ip = 49;
                    continue _fun56729
                }
            case 47:
                var13 = false;
            case 49:
                var12 = var2.fullOpacity;
                if (!(var12 === var3)) {
                    _fun56729_ip = 61;
                    continue _fun56729
                }
            case 59:
                var12 = false;
            case 61:
                var18 = var2.isSquarePreview;
                if (!(var18 === var3)) {
                    _fun56729_ip = 73;
                    continue _fun56729
                }
            case 71:
                var18 = false;
            case 73:
                var10 = var2.invertPressOpacity;
                if (!(var10 === var3)) {
                    _fun56729_ip = 85;
                    continue _fun56729
                }
            case 83:
                var10 = false;
            case 85:
                var1 = var2.fadeIn;
                if (!(var1 === var3)) {
                    _fun56729_ip = 97;
                    continue _fun56729
                }
            case 95:
                var1 = false;
            case 97:
                var _closure2_slot0 = var1;
                var7 = var2.animate;
                if (!(var7 === var3)) {
                    _fun56729_ip = 113;
                    continue _fun56729
                }
            case 111:
                var7 = false;
            case 113:
                var11 = var2.style;
                var _closure2_slot1 = var3;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 4;
                var4 = var2[var4];
                var17 = var8.bind(var3)(var4);
                var16 = var17.useStateFromStores;
                var4 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var5 = var16.bind(var17)(var5, var4);
                var4 = _closure1_slot7;
                var24 = undefined;
                var23 = var12;
                var22 = var15;
                var21 = var14;
                var20 = var13;
                var19 = var10;
                var10 = var24[var4](var23, var22, var21, var20, var19, var18);
                var12 = _closure1_slot1;
                var4 = 5;
                var4 = var2[var4];
                var4 = var12.bind(var3)(var4);
                var12 = var4.bind(var3)();
                var4 = 6;
                var2 = var2[var4];
                var13 = var8.bind(var3)(var2);
                var8 = var13.useSharedValue;
                var2 = 1;
                if (!var1) {
                    _fun56729_ip = 244;
                    continue _fun56729
                }
            case 242:
                var2 = 0;
            case 244:
                var15 = var8.bind(var13)(var2);
                _closure2_slot1 = var15;
                var13 = _closure1_slot3;
                var8 = var13.useEffect;
                var2 = new Array(2);
                var2[0] = var15;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun56731: for (var _fun56731_ip = 0;;) switch (_fun56731_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun56731_ip = 127;
                                continue _fun56731
                            }
                        case 10:
                            var2 = _closure2_slot1;
                            var1 = var2.set;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var0 = 7;
                            var0 = var10[var0];
                            var8 = undefined;
                            var5 = var9.bind(var8)(var0);
                            var4 = var5.withTiming;
                            var3 = {};
                            var0 = 100;
                            var3.duration = var0;
                            var0 = 6;
                            var6 = var10[var0];
                            var6 = var9.bind(var8)(var6);
                            var7 = var6.Easing;
                            var6 = var7.in;
                            var0 = var10[var0];
                            var0 = var9.bind(var8)(var0);
                            var0 = var0.Easing;
                            var0 = var0.ease;
                            var0 = var6.bind(var7)(var0);
                            var3.easing = var0;
                            var0 = 1;
                            var0 = var4.bind(var5)(var0, var3);
                            var0 = var1.bind(var2)(var0);
                        case 127:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var8.bind(var13)(var1, var2);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = var2[var4];
                var13 = var1.bind(var3)(var8);
                var8 = var13.useAnimatedStyle;
                var0 = function() { // Original name: j, environment: var0
                    var0 = {};
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var14 = {};
                var14.opacity = var15;
                var0.__closure = var14;
                var14 = 15588901070870.0;
                var0.__workletHash = var14;
                var14 = _closure1_slot8;
                var0.__initData = var14;
                var8 = var8.bind(var13)(var0);
                var0 = 8;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getBackgroundGradientColors;
                var0 = var9.palette;
                var15 = var1.bind(var2)(var0, var12);
                if (!var7) {
                    _fun56729_ip = 462;
                    continue _fun56729
                }
            case 389:
                if (var5) {
                    _fun56729_ip = 462;
                    continue _fun56729
                }
            case 392:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getAssetCDNUrl;
                var14 = var9.src;
                var0 = global;
                var0 = var0.HermesInternal;
                var13 = var0.concat;
                var12 = 'collectibles/';
                var0 = 'img.png';
                var0 = var13.bind(var12)(var14, var0);
                var12 = var1.bind(var2)(var0);
                _fun56729_ip = 530;
                continue _fun56729;
            case 462:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getAssetCDNUrl;
                var16 = var9.src;
                var0 = global;
                var0 = var0.HermesInternal;
                var14 = var0.concat;
                var13 = 'collectibles/';
                var0 = 'static.png';
                var0 = var14.bind(var13)(var16, var0);
                var12 = var1.bind(var2)(var0);
            case 530:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var13 = var10.container;
                var4 = new Array(3);
                var4[0] = var13;
                var4[1] = var11;
                var4[2] = var8;
                var0.style = var4;
                var8 = null;
                var4 = var8 != var15;
                if (!var4) {
                    _fun56729_ip = 701;
                    continue _fun56729
                }
            case 592:
                var13 = _closure1_slot5;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 10;
                var4 = var14[var4];
                var11 = var11.bind(var3)(var4);
                var4 = {};
                var14 = var10.gradient;
                var4.style = var14;
                var14 = {};
                var16 = 0;
                var17 = 0;
                if (!var18) {
                    _fun56729_ip = 643;
                    continue _fun56729
                }
            case 637:
                var17 = -2;
            case 643:
                var14.x = var17;
                var14.y = var16;
                var4.start = var14;
                var14 = {
                    'x': 1,
                    'y': 0
                };
                var4.end = var14;
                var16 = var15.left;
                var14 = new Array(2);
                var14[0] = var16;
                var15 = var15.right;
                var14[1] = var15;
                var4.colors = var14;
                var8 = var13.bind(var3)(var11, var4);
            case 701:
                var4 = new Array(2);
                var4[0] = var8;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 11;
                var8 = var13[var8];
                var11 = var11.bind(var3)(var8);
                var8 = var11.isAndroid;
                var8 = var8.bind(var11)();
                if (!var8) {
                    _fun56729_ip = 820;
                    continue _fun56729
                }
            case 742:
                if (!var7) {
                    _fun56729_ip = 820;
                    continue _fun56729
                }
            case 745:
                if (var5) {
                    _fun56729_ip = 820;
                    continue _fun56729
                }
            case 748:
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 12;
                var5 = var11[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.APNGPlayer;
                var5 = {};
                var5.url = var12;
                var11 = var10.img;
                var5.style = var11;
                var11 = true;
                var5.autoplay = var11;
                var11 = var9.imgAlt;
                var5.ariaLabel = var11;
                var5 = var8.bind(var3)(var7, var5);
                _fun56729_ip = 890;
                continue _fun56729;
            case 820:
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 13;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var11 = {};
                var11.uri = var12;
                var6.source = var11;
                var10 = var10.img;
                var6.style = var10;
                var10 = 'image';
                var6.accessibilityRole = var10;
                var9 = var9.imgAlt;
                var6.accessibilityLabel = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 890:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nameplates/native/Nameplate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun56733: for (var _fun56733_ip = 0;;) switch (_fun56733_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.nameplate;
                var0 = null;
                var2 = Object.create(var0);
                var1 = 0;
                var2.nameplate = var1;
                var8 = {};
                var7 = var3;
                var6 = var2;
                var1 = copyDataProperties(var8, var7, var6);
                var2 = var0 == var5;
                if (var2) {
                    _fun56733_ip = 87;
                    continue _fun56733
                }
            case 40:
                var4 = _closure1_slot5;
                var3 = _closure1_slot9;
                var2 = {};
                var2.nameplate = var5;
                var8 = var2;
                var7 = var1;
                var1 = copyDataProperties(var8, var7);
                var5 = true;
                var1 = 'aria-hidden';
                var2[var1] = var5;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 87:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 33, 1297, 566, 3205, 3679, 4056, 1630, 4613, 4057, 478, 6871, 4666, 2]);