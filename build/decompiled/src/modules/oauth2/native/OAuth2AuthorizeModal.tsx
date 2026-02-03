// modules/oauth2/native/OAuth2AuthorizeModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = {
        'overshootClamping': true,
        'stiffness': 20,
        'damping': 15,
        'mass': 0.03
    };
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var3.flex = var9;
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var3.backgroundColor = var12;
    var6.container = var3;
    var3 = {};
    var3.flex = var9;
    var6.contentContainer = var3;
    var3 = 16;
    var9 = {
        'padding': 16,
        'flexDirection': 'row',
        'gap': 16
    };
    var6.titleContainer = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'bottom': 0,
        'height': 1
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.backgroundColor = var12;
    var6.titleContainerBorder = var9;
    var9 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': null,
        'marginEnd': 40
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var6.title = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var6 = {};
    var7 = 'function OAuth2AuthorizeModalTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}';
    var6.code = var7;
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/native/OAuth2AuthorizeModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62271: for (var _fun62271_ip = 0;;) switch (_fun62271_ip) {
            case 0:
                var0 = _closure1_slot8;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 5;
                var0 = var14[var0];
                var2 = var1.bind(var3)(var0);
                var0 = arg0;
                var10 = var2.bind(var3)(var0);
                var _closure2_slot0 = var10;
                var0 = 6;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var17 = var0.top;
                var6 = _closure1_slot0;
                var11 = 7;
                var0 = var14[var11];
                var2 = var6.bind(var3)(var0);
                var1 = var2.useSharedValue;
                var0 = 0;
                var0 = var1.bind(var2)(var0);
                var _closure2_slot1 = var0;
                var1 = var14[var11];
                var4 = var6.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun62272: for (var _fun62272_ip = 0;;) switch (_fun62272_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = null;
                            var3 = var1 != var2;
                            var1 = 1;
                            if (!var3) {
                                _fun62272_ip = 33;
                                continue _fun62272
                            }
                        case 30:
                            var1 = var2;
                        case 33:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var5 = {};
                var5.borderOpacity = var0;
                var1.__closure = var5;
                var5 = 5916964482569.0;
                var1.__workletHash = var5;
                var5 = _closure1_slot9;
                var1.__initData = var5;
                var16 = var2.bind(var4)(var1);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function(arg0) { // Environment: var13
                    _fun62273: for (var _fun62273_ip = 0;;) switch (_fun62273_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 8;
                            var4 = var4[var0];
                            var0 = undefined;
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.withSpring;
                            var4 = arg0;
                            var4 = var4.nativeEvent;
                            var4 = var4.contentOffset;
                            var7 = var4.y;
                            var4 = 16;
                            var7 = var7 > var4;
                            var4 = 0;
                            if (!var7) {
                                _fun62273_ip = 77;
                                continue _fun62273
                            }
                        case 74:
                            var4 = 1;
                        case 77:
                            var1 = _closure1_slot7;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var8.container;
                var0.style = var4;
                var4 = {};
                var7 = var8.titleContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var7 = {};
                var15 = 16;
                var15 = var17 + var15;
                var7.paddingTop = var15;
                var5[1] = var7;
                var4.style = var5;
                var7 = _closure1_slot5;
                var5 = 9;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var14 = var10.backStep;
                var20 = _closure1_slot0;
                var15 = _closure1_slot2;
                var19 = 10;
                var17 = var15[var19];
                var17 = var20.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var15[var19];
                var15 = var20.bind(var3)(var15);
                var15 = var15.t;
                if (var14) {
                    _fun62271_ip = 340;
                    continue _fun62271
                }
            case 327:
                var14 = var15.cpT0Cq;
                var14 = var17.bind(var18)(var14);
                _fun62271_ip = 351;
                continue _fun62271;
            case 340:
                var15 = var15["13/7kX"];
                var14 = var17.bind(var18)(var15);
            case 351:
                var5.accessibilityLabel = var14;
                var13 = function() {
                    _fun62274: for (var _fun62274_ip = 0;;) switch (_fun62274_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.goBackOrCancel;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun62274_ip = 38;
                                continue _fun62274
                            }
                        case 24:
                            var2 = _closure2_slot0;
                            var1 = var2.goBackOrCancel;
                            var0 = var1.bind(var2)();
                        case 38:
                            return var0;
                    }
                };
                var5.onPress = var13;
                var13 = var10.backStep;
                var17 = _closure1_slot5;
                var15 = _closure1_slot0;
                var21 = _closure1_slot2;
                if (var13) {
                    _fun62271_ip = 444;
                    continue _fun62271
                }
            case 385:
                var13 = 12;
                var13 = var21[var13];
                var13 = var15.bind(var3)(var13);
                var14 = var13.XSmallIcon;
                var13 = {};
                var20 = _closure1_slot1;
                var18 = 4;
                var18 = var21[var18];
                var18 = var20.bind(var3)(var18);
                var18 = var18.colors;
                var18 = var18.INTERACTIVE_TEXT_DEFAULT;
                var13.color = var18;
                var13 = var17.bind(var3)(var14, var13);
                _fun62271_ip = 501;
                continue _fun62271;
            case 444:
                var14 = 11;
                var14 = var21[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.ArrowSmallLeftIcon;
                var14 = {};
                var20 = _closure1_slot1;
                var18 = 4;
                var18 = var21[var18];
                var18 = var20.bind(var3)(var18);
                var18 = var18.colors;
                var18 = var18.INTERACTIVE_TEXT_DEFAULT;
                var14.color = var18;
                var13 = var17.bind(var3)(var15, var14);
            case 501:
                var5.children = var13;
                var6 = var7.bind(var3)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var7 = _closure1_slot5;
                var15 = _closure1_slot4;
                var14 = {};
                var6 = var8.title;
                var14.style = var6;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var17 = 13;
                var17 = var13[var17];
                var17 = var6.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {};
                var20 = 'redesign/heading-18/bold';
                var17.variant = var20;
                var20 = var13[var19];
                var20 = var6.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var13[var19];
                var19 = var6.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["y+/PE9"];
                var19 = var20.bind(var21)(var19);
                var17.children = var19;
                var17 = var7.bind(var3)(var18, var17);
                var14.children = var17;
                var14 = var7.bind(var3)(var15, var14);
                var5[1] = var14;
                var9 = _closure1_slot1;
                var11 = var13[var11];
                var11 = var9.bind(var3)(var11);
                var14 = var11.View;
                var11 = {};
                var17 = var8.titleContainerBorder;
                var15 = new Array(2);
                var15[0] = var17;
                var15[1] = var16;
                var11.style = var15;
                var11 = var7.bind(var3)(var14, var11);
                var5[2] = var11;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 14;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.SafeAreaPaddingView;
                var5 = {};
                var11 = true;
                var5.bottom = var11;
                var8 = var8.contentContainer;
                var5.style = var8;
                var8 = 15;
                var8 = var13[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var23 = var8;
                var22 = var10;
                var10 = copyDataProperties(var23, var22);
                var10 = 'onScroll';
                var8[var10] = var12;
                var10 = 'centerContent';
                var8[var10] = var11;
                var8 = var7.bind(var3)(var9, var8);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5336, 1568, 3711, 4072, 4897, 1234, 7816, 4727, 3932, 4729, 7818, 2]);