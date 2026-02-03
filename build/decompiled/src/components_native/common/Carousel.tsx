// components_native/common/Carousel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun61690: for (var _fun61690_ip = 0;;) switch (_fun61690_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot5;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = _closure1_slot14;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun61690_ip = 51;
                    continue _fun61690
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun61690_ip = 92;
                continue _fun61690;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun61690_ip = 71;
                    continue _fun61690
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot5;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        _fun61691: for (var _fun61691_ip = 0;;) switch (_fun61691_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun61691_ip = 74;
                continue _fun61691;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot7 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createLegacyClassComponentStyles;
    var3 = {};
    var9 = {};
    var10 = 'center';
    var9.alignItems = var10;
    var3.container = var9;
    var9 = {};
    var10 = 'row';
    var9.flexDirection = var10;
    var3.carouselContentWrapper = var9;
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'alignItems': 'center'
    };
    var3.pageIndicator = var9;
    var9 = {};
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.ICON_STRONG;
    var9.color = var12;
    var3.activeIndicator = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.ICON_SUBTLE;
    var9.color = var10;
    var3.inactiveIndicator = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var7 = var6.Component;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot2;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot13;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            _fun61696: for (var _fun61696_ip = 0;;) switch (_fun61696_ip) {
                case 0:
                    var1 = this;
                    var4 = _closure1_slot11;
                    var2 = var1.context;
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var1 = var1.props;
                    var9 = var1.count;
                    var11 = var1.activeIndex;
                    var8 = var1.indicatorSpace;
                    var10 = var1.indicatorSize;
                    var6 = var1.pageIndicatorStyle;
                    var4 = new Array(0);
                    var7 = 0;
                    var12 = var7 < var9;
                    var2 = '•';
                    var1 = 10;
                    if (!var12) {
                        _fun61696_ip = 175;
                        continue _fun61696
                    }
                case 77:
                    var13 = var4.push;
                    var15 = _closure1_slot9;
                    var14 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var12 = var12[var1];
                    var12 = var14.bind(var3)(var12);
                    var14 = var12.LegacyText;
                    var12 = {};
                    var17 = {};
                    var17.fontSize = var10;
                    var16 = new Array(2);
                    var16[0] = var17;
                    if (!(var7 !== var11)) {
                        _fun61696_ip = 138;
                        continue _fun61696
                    }
                case 130:
                    var17 = var5.inactiveIndicator;
                    _fun61696_ip = 144;
                    continue _fun61696;
                case 138:
                    var17 = var5.activeIndicator;
                case 144:
                    var16[1] = var17;
                    var12.style = var16;
                    var12.children = var2;
                    var12 = var15.bind(var3)(var14, var12, var7);
                    var12 = var13.bind(var4)(var12);
                    var7 = var7 + 1;
                    if (var7 < var9) {
                        _fun61696_ip = 77;
                        continue _fun61696
                    }
                case 175:
                    var2 = _closure1_slot9;
                    var1 = _closure1_slot7;
                    var0 = {};
                    var7 = var5.pageIndicator;
                    var5 = new Array(3);
                    var5[0] = var7;
                    var7 = {};
                    var8 = var9 * var8;
                    var7.width = var8;
                    var5[1] = var7;
                    var5[2] = var6;
                    var0.style = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var7);
    var _closure1_slot12 = var8;
    var3 = 11;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ThemeContext;
    var8.contextType = var7;
    var7 = {
        'indicatorSpace': 10,
        'indicatorSize': 20
    };
    var8.defaultProps = var7;
    var6 = var6.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            var6 = this;
            var3 = 0;
            var10 = 0;
            var7 = copyRestArgs(var10);
            var2 = _closure1_slot2;
            var5 = _closure2_slot0;
            var4 = undefined;
            var2 = var2.bind(var4)(var6, var5);
            var2 = _closure1_slot13;
            var0 = new Array(0);
            var10 = var0;
            var9 = var7;
            var8 = 0;
            var7 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var4)(var6, var5, var0);
            var _closure3_slot0 = var0;
            var2 = {};
            var2.activeIndex = var3;
            var0.state = var2;
            var1 = function(arg0) { // Environment: var1
                _fun61699: for (var _fun61699_ip = 0;;) switch (_fun61699_ip) {
                    case 0:
                        var0 = global;
                        var4 = var0.Math;
                        var3 = var4.round;
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var0 = var0.contentOffset;
                        var5 = var0.x;
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var2 = var2.width;
                        var2 = var5 / var2;
                        var2 = var3.bind(var4)(var2);
                        var4 = var1.setState;
                        var3 = {};
                        var3.activeIndex = var2;
                        var3 = var4.bind(var1)(var3);
                        var1 = var1.props;
                        var3 = var1.onPageChange;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun61699_ip = 114;
                            continue _fun61699
                        }
                    case 94:
                        var0 = _closure3_slot0;
                        var1 = var0.props;
                        var0 = var1.onPageChange;
                        var0 = var0.bind(var1)(var2);
                    case 114:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onAnimationEnd = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            _fun61700: for (var _fun61700_ip = 0;;) switch (_fun61700_ip) {
                case 0:
                    var9 = this;
                    var1 = _closure1_slot11;
                    var0 = var9.context;
                    var3 = undefined;
                    var10 = var1.bind(var3)(var0);
                    var0 = var9.props;
                    var6 = var0.pageIndicatorStyle;
                    var0 = var9.props;
                    var0 = var0.children;
                    var12 = var0.length;
                    var0 = var9.props;
                    var1 = var0.pageIndictor;
                    var0 = true;
                    var0 = var0 === var1;
                    if (!var0) {
                        _fun61700_ip = 75;
                        continue _fun61700
                    }
                case 68:
                    var1 = 1;
                    var0 = var12 > var1;
                case 75:
                    var5 = undefined;
                    if (!var0) {
                        _fun61700_ip = 122;
                        continue _fun61700
                    }
                case 80:
                    var2 = _closure1_slot9;
                    var1 = _closure1_slot12;
                    var0 = {};
                    var0.count = var12;
                    var7 = var9.state;
                    var7 = var7.activeIndex;
                    var0.activeIndex = var7;
                    var0.pageIndicatorStyle = var6;
                    var5 = var2.bind(var3)(var1, var0);
                case 122:
                    var0 = var9.props;
                    var8 = var0.scrollViewProps;
                    var0 = null;
                    if (!(var0 == var8)) {
                        _fun61700_ip = 141;
                        continue _fun61700
                    }
                case 139:
                    var8 = {};
                case 141:
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot7;
                    var0 = {};
                    var7 = var10.container;
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = var9.props;
                    var7 = var7.style;
                    var6[1] = var7;
                    var0.style = var6;
                    var7 = _closure1_slot9;
                    var6 = _closure1_slot8;
                    var4 = {
                        'automaticallyAdjustContentInsets': false,
                        'horizontal': true,
                        'pagingEnabled': true,
                        'scrollEnabled': null,
                        'nestedScrollEnabled': true,
                        'showsHorizontalScrollIndicator': false
                    };
                    var11 = 1;
                    var11 = var12 > var11;
                    var4.scrollEnabled = var11;
                    var11 = var9.onAnimationEnd;
                    var4.onMomentumScrollEnd = var11;
                    var14 = var4;
                    var13 = var8;
                    var8 = copyDataProperties(var14, var13);
                    var8 = {};
                    var10 = var10.carouselContentWrapper;
                    var8.style = var10;
                    var10 = function() {
                        var0 = true;
                        return var0;
                    };
                    var8.onStartShouldSetResponder = var10;
                    var9 = var9.props;
                    var9 = var9.children;
                    var8.children = var9;
                    var9 = var7.bind(var3)(var1, var8);
                    var8 = 'children';
                    var4[var8] = var9;
                    var6 = var7.bind(var3)(var6, var4);
                    var4 = new Array(2);
                    var4[0] = var6;
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var6);
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var1.contextType = var3;
    var3 = {
        'pageIndictor': true,
        'width': 375
    };
    var1.defaultProps = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/Carousel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 1297, 671, 4876, 3159, 2]);