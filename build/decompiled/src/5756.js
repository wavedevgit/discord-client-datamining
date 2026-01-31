// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var3);
    var0 = 0;
    var5 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Animated;
    var _closure1_slot4 = var5;
    var5 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0
    };
    var3.header = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot7 = var3;
    var1 = function(arg0) { // Original name: HeaderContainer, environment: var1
        var1 = arg0;
        var0 = var1.mode;
        var _closure2_slot0 = var0;
        var7 = var1.scenes;
        var0 = var1.layout;
        var _closure2_slot1 = var0;
        var0 = var1.getPreviousScene;
        var _closure2_slot2 = var0;
        var0 = var1.getFocusedRoute;
        var2 = var1.onContentHeightChange;
        var _closure2_slot3 = var2;
        var5 = var1.style;
        var3 = undefined;
        var0 = var0.bind(var3)();
        var _closure2_slot4 = var0;
        var6 = _closure1_slot3;
        var2 = var6.useContext;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 3;
        var1 = var9[var1];
        var1 = var8.bind(var3)(var1);
        var1 = var1.HeaderBackContext;
        var1 = var2.bind(var6)(var1);
        var _closure2_slot5 = var1;
        var2 = _closure1_slot6;
        var0 = _closure1_slot4;
        var1 = var0.View;
        var0 = {};
        var6 = 'box-none';
        var0.pointerEvents = var6;
        var0.style = var5;
        var6 = var7.slice;
        var5 = -3;
        var6 = var6.bind(var7)(var5);
        var5 = var6.map;
        var4 = function(arg0, arg1, arg2) { // Environment: var4
            _fun51065: for (var _fun51065_ip = 0;;) switch (_fun51065_ip) {
                case 0:
                    var0 = arg0;
                    var16 = arg1;
                    var6 = arg2;
                    var _closure3_slot0 = var0;
                    var1 = _closure2_slot0;
                    var9 = 'screen';
                    if (!(var9 === var1)) {
                        _fun51065_ip = 49;
                        continue _fun51065
                    }
                case 30:
                    var2 = var6.length;
                    var1 = 1;
                    var1 = var2 - var1;
                    if (!(var16 === var1)) {
                        _fun51065_ip = 1012;
                        continue _fun51065
                    }
                case 49:
                    if (!var0) {
                        _fun51065_ip = 1012;
                        continue _fun51065
                    }
                case 55:
                    var1 = var0.descriptor;
                    var2 = var1.options;
                    var11 = var2.header;
                    var5 = var2.headerMode;
                    var3 = var2.headerShown;
                    var4 = undefined;
                    var1 = var4 === var3;
                    if (var1) {
                        _fun51065_ip = 95;
                        continue _fun51065
                    }
                case 92:
                    var1 = var3;
                case 95:
                    var13 = var2.headerTransparent;
                    var2 = var2.headerStyleInterpolator;
                    var3 = _closure2_slot0;
                    if (!(var5 === var3)) {
                        _fun51065_ip = 1008;
                        continue _fun51065
                    }
                case 118:
                    if (!var1) {
                        _fun51065_ip = 1008;
                        continue _fun51065
                    }
                case 124:
                    var1 = _closure2_slot4;
                    var3 = var1.key;
                    var1 = var0.descriptor;
                    var1 = var1.route;
                    var1 = var1.key;
                    var14 = var3 === var1;
                    var3 = _closure2_slot2;
                    var1 = {};
                    var5 = var0.descriptor;
                    var5 = var5.route;
                    var1.route = var5;
                    var3 = var3.bind(var4)(var1);
                    var1 = _closure2_slot5;
                    if (!var3) {
                        _fun51065_ip = 267;
                        continue _fun51065
                    }
                case 189:
                    var5 = var3.descriptor;
                    var12 = var5.options;
                    var7 = var5.route;
                    if (var3) {
                        _fun51065_ip = 215;
                        continue _fun51065
                    }
                case 209:
                    var3 = _closure2_slot5;
                    _fun51065_ip = 264;
                    continue _fun51065;
                case 215:
                    var5 = {};
                    var10 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var8 = 3;
                    var8 = var17[var8];
                    var10 = var10.bind(var4)(var8);
                    var8 = var10.getHeaderTitle;
                    var7 = var7.name;
                    var7 = var8.bind(var10)(var12, var7);
                    var5.title = var7;
                    var3 = var5;
                case 264:
                    var1 = var3;
                case 267:
                    var3 = 1;
                    var5 = var16 - var3;
                    var5 = var6[var5];
                    var12 = null;
                    var7 = var12 == var5;
                    var8 = undefined;
                    if (var7) {
                        _fun51065_ip = 295;
                        continue _fun51065
                    }
                case 289:
                    var8 = var5.descriptor;
                case 295:
                    var5 = var16 + var3;
                    var5 = var6[var5];
                    var10 = var12 == var5;
                    var7 = undefined;
                    if (var10) {
                        _fun51065_ip = 318;
                        continue _fun51065
                    }
                case 312:
                    var7 = var5.descriptor;
                case 318:
                    var10 = var12 == var8;
                    var5 = undefined;
                    if (var10) {
                        _fun51065_ip = 332;
                        continue _fun51065
                    }
                case 327:
                    var5 = var8.options;
                case 332:
                    if (var5) {
                        _fun51065_ip = 337;
                        continue _fun51065
                    }
                case 335:
                    var5 = {};
                case 337:
                    var8 = var5.headerShown;
                    var10 = var4 === var8;
                    if (var10) {
                        _fun51065_ip = 353;
                        continue _fun51065
                    }
                case 350:
                    var10 = var8;
                case 353:
                    var8 = var5.headerMode;
                    var5 = var6.slice;
                    var3 = var16 + var3;
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.find;
                    var3 = function(arg0) { // Environment: var18
                        _fun51066: for (var _fun51066_ip = 0;;) switch (_fun51066_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                var3 = var0 == var2;
                                var1 = undefined;
                                var0 = undefined;
                                if (var3) {
                                    _fun51066_ip = 27;
                                    continue _fun51066
                                }
                            case 16:
                                var2 = var2.descriptor;
                                var0 = var2.options;
                            case 27:
                                if (var0) {
                                    _fun51066_ip = 32;
                                    continue _fun51066
                                }
                            case 30:
                                var0 = {};
                            case 32:
                                var2 = var0.headerShown;
                                var1 = var1 === var2;
                                if (var1) {
                                    _fun51066_ip = 48;
                                    continue _fun51066
                                }
                            case 45:
                                var1 = var2;
                            case 48:
                                var2 = var0.headerMode;
                                var0 = false;
                                var0 = var0 === var1;
                                if (var0) {
                                    _fun51066_ip = 71;
                                    continue _fun51066
                                }
                            case 63:
                                var1 = 'screen';
                                var0 = var1 === var2;
                            case 71:
                                return var0;
                        }
                    };
                    var6 = var5.bind(var6)(var3);
                    var5 = var12 == var6;
                    var3 = undefined;
                    if (var5) {
                        _fun51065_ip = 408;
                        continue _fun51065
                    }
                case 397:
                    var5 = var6.descriptor;
                    var3 = var5.options;
                case 408:
                    if (var3) {
                        _fun51065_ip = 413;
                        continue _fun51065
                    }
                case 411:
                    var3 = {};
                case 413:
                    var5 = var3.gestureDirection;
                    var3 = false;
                    var3 = var3 === var10;
                    if (var3) {
                        _fun51065_ip = 432;
                        continue _fun51065
                    }
                case 428:
                    var3 = var9 === var8;
                case 432:
                    if (!var3) {
                        _fun51065_ip = 438;
                        continue _fun51065
                    }
                case 435:
                    var3 = !var7;
                case 438:
                    if (var3) {
                        _fun51065_ip = 444;
                        continue _fun51065
                    }
                case 441:
                    var3 = var6;
                case 444:
                    var10 = {};
                    var6 = _closure2_slot1;
                    var10.layout = var6;
                    var10.back = var1;
                    var1 = var0.progress;
                    var10.progress = var1;
                    var1 = var0.descriptor;
                    var1 = var1.options;
                    var10.options = var1;
                    var1 = var0.descriptor;
                    var1 = var1.route;
                    var10.route = var1;
                    var1 = var0.descriptor;
                    var1 = var1.navigation;
                    var10.navigation = var1;
                    var1 = _closure2_slot0;
                    var16 = 'float';
                    if (!(var16 !== var1)) {
                        _fun51065_ip = 566;
                        continue _fun51065
                    }
                case 532:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 4;
                    var1 = var7[var1];
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.forNoAnimation;
                    _fun51065_ip = 697;
                    continue _fun51065;
                case 566:
                    if (!var3) {
                        _fun51065_ip = 694;
                        continue _fun51065
                    }
                case 572:
                    var3 = 'vertical';
                    if (!(var3 !== var5)) {
                        _fun51065_ip = 662;
                        continue _fun51065
                    }
                case 580:
                    var3 = 'vertical-inverted';
                    if (!(var3 !== var5)) {
                        _fun51065_ip = 662;
                        continue _fun51065
                    }
                case 590:
                    var3 = 'horizontal-inverted';
                    if (!(var3 !== var5)) {
                        _fun51065_ip = 631;
                        continue _fun51065
                    }
                case 600:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.forSlideLeft;
                    _fun51065_ip = 660;
                    continue _fun51065;
                case 631:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var3 = var5.forSlideRight;
                case 660:
                    _fun51065_ip = 691;
                    continue _fun51065;
                case 662:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var3 = var5.forSlideUp;
                case 691:
                    var2 = var3;
                case 694:
                    var1 = var2;
                case 697:
                    var10.styleInterpolator = var1;
                    var3 = _closure1_slot6;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var1 = var7[var5];
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.NavigationContext;
                    var2 = var1.Provider;
                    var1 = {};
                    var8 = var0.descriptor;
                    var8 = var8.navigation;
                    var1.value = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.NavigationRouteContext;
                    var6 = var5.Provider;
                    var5 = {};
                    var7 = var0.descriptor;
                    var7 = var7.route;
                    var5.value = var7;
                    var8 = _closure1_slot5;
                    var7 = {};
                    var19 = _closure2_slot3;
                    var17 = undefined;
                    if (!var19) {
                        _fun51065_ip = 818;
                        continue _fun51065
                    }
                case 813:
                    var17 = function(arg0) { // Environment: var18
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var0 = var0.layout;
                        var0 = var0.height;
                        var2 = _closure2_slot3;
                        var1 = {};
                        var3 = _closure3_slot0;
                        var3 = var3.descriptor;
                        var3 = var3.route;
                        var1.route = var3;
                        var1.height = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                case 818:
                    var7.onLayout = var17;
                    var17 = 'none';
                    if (!var14) {
                        _fun51065_ip = 836;
                        continue _fun51065
                    }
                case 830:
                    var17 = 'box-none';
                case 836:
                    var7.pointerEvents = var17;
                    var17 = !var14;
                    var7.accessibilityElementsHidden = var17;
                    var17 = 'no-hide-descendants';
                    if (!var14) {
                        _fun51065_ip = 862;
                        continue _fun51065
                    }
                case 858:
                    var17 = 'auto';
                case 862:
                    var7.importantForAccessibility = var17;
                    var15 = _closure2_slot0;
                    if (!(var16 === var15)) {
                        _fun51065_ip = 878;
                        continue _fun51065
                    }
                case 875:
                    if (!var14) {
                        _fun51065_ip = 883;
                        continue _fun51065
                    }
                case 878:
                    var12 = null;
                    if (!var13) {
                        _fun51065_ip = 892;
                        continue _fun51065
                    }
                case 883:
                    var13 = _closure1_slot7;
                    var12 = var13.header;
                case 892:
                    var7.style = var12;
                    if (!(var4 === var11)) {
                        _fun51065_ip = 953;
                        continue _fun51065
                    }
                case 900:
                    var13 = _closure1_slot6;
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 6;
                    var9 = var14[var9];
                    var12 = var12.bind(var4)(var9);
                    var9 = global;
                    var15 = var9.Object;
                    var14 = var15.assign;
                    var9 = {};
                    var9 = var14.bind(var15)(var9, var10);
                    var9 = var13.bind(var4)(var12, var9);
                    _fun51065_ip = 958;
                    continue _fun51065;
                case 953:
                    var9 = var11.bind(var4)(var10);
                case 958:
                    var7.children = var9;
                    var7 = var3.bind(var4)(var8, var7);
                    var5.children = var7;
                    var5 = var3.bind(var4)(var6, var5);
                    var1.children = var5;
                    var0 = var0.descriptor;
                    var0 = var0.route;
                    var0 = var0.key;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                case 1008:
                    var0 = null;
                    return var0;
                case 1012:
                    var0 = null;
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5757, 5780, 1470, 5781]);