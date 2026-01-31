// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun75002: for (var _fun75002_ip = 0;;) switch (_fun75002_ip) {
        case 0:
            var9 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var9;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var7;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
                _fun75003: for (var _fun75003_ip = 0;;) switch (_fun75003_ip) {
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
                    case 72: // try_end0
                        _fun75003_ip = 76;
                        continue _fun75003;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 76:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot17 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot17 = var0;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = 0;
            var3 = var7[var0];
            var0 = undefined;
            var3 = var6.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var7[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var7[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var7[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var7[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var7[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var7[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 7;
            var4 = var7[var3];
            var4 = var6.bind(var0)(var4);
            var3 = var7[var3];
            var3 = var9.bind(var0)(var3);
            var3 = var3.Component;
            var4 = 8;
            var4 = var7[var4];
            var5 = var9.bind(var0)(var4);
            var11 = var5.Animated;
            var _closure1_slot10 = var11;
            var4 = var5.Easing;
            var _closure1_slot11 = var4;
            var12 = var5.FlatList;
            var4 = var5.I18nManager;
            var8 = var5.Platform;
            var10 = var5.ScrollView;
            var5 = var5.View;
            var _closure1_slot12 = var5;
            var5 = 9;
            var5 = var7[var5];
            var5 = var9.bind(var0)(var5);
            var5 = var5.jsx;
            var _closure1_slot13 = var5;
            var5 = null;
            if (!var12) {
                _fun75002_ip = 311;
                continue _fun75002
            }
        case 300:
            var8 = var11.createAnimatedComponent;
            var5 = var8.bind(var11)(var12);
        case 311:
            var _closure1_slot14 = var5;
            var8 = var11.createAnimatedComponent;
            var8 = var8.bind(var11)(var10);
            var _closure1_slot15 = var8;
            var4 = var4.isRTL;
            var _closure1_slot16 = var4;
            var1 = function(arg0) { // Environment: var1
                var3 = function(arg0) { // Original name: Carousel, environment: var5
                    _fun75007: for (var _fun75007_ip = 0;;) switch (_fun75007_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = this;
                            var0 = _closure1_slot5;
                            var3 = _closure2_slot0;
                            var4 = undefined;
                            var0 = var0.bind(var4)(var5, var3);
                            var10 = new Array(1);
                            var10[0] = var1;
                            var0 = _closure1_slot8;
                            var9 = var0.bind(var4)(var3);
                            var3 = _closure1_slot7;
                            var0 = _closure1_slot17;
                            var0 = var0.bind(var4)();
                            if (var0) {
                                _fun75007_ip = 73;
                                continue _fun75007
                            }
                        case 60:
                            var0 = var9.apply;
                            var0 = var0.bind(var9)(var5, var10);
                            _fun75007_ip = 107;
                            continue _fun75007;
                        case 73:
                            var6 = global;
                            var8 = var6.Reflect;
                            var7 = var8.construct;
                            var6 = _closure1_slot8;
                            var6 = var6.bind(var4)(var5);
                            var6 = var6.constructor;
                            var0 = var7.bind(var8)(var9, var10, var6);
                        case 107:
                            var0 = var3.bind(var4)(var5, var0);
                            var3 = {};
                            var6 = true;
                            var3.hideCarousel = var6;
                            var5 = new Array(0);
                            var3.interpolators = var5;
                            var0.state = var3;
                            var5 = var0._getFirstItem;
                            var3 = var1.firstItem;
                            var3 = var5.bind(var0)(var3);
                            var0._activeItem = var3;
                            var0._previousActiveItem = var3;
                            var0._previousFirstItem = var3;
                            var0._previousItemsLength = var3;
                            var3 = false;
                            var0._mounted = var3;
                            var5 = new Array(0);
                            var0._positions = var5;
                            var5 = 0;
                            var0._currentContentOffset = var5;
                            var0._canFireBeforeCallback = var3;
                            var0._canFireCallback = var3;
                            var7 = null;
                            var0._scrollOffsetRef = var7;
                            var0._onScrollTriggered = var6;
                            var0._lastScrollDate = var5;
                            var5 = var1.scrollEnabled;
                            var5 = var3 !== var5;
                            var0._scrollEnabled = var5;
                            var6 = var0._initPositionsAndInterpolators;
                            var5 = var6.bind;
                            var5 = var5.bind(var6)(var0);
                            var0._initPositionsAndInterpolators = var5;
                            var6 = var0._renderItem;
                            var5 = var6.bind;
                            var5 = var5.bind(var6)(var0);
                            var0._renderItem = var5;
                            var6 = var0._onSnap;
                            var5 = var6.bind;
                            var5 = var5.bind(var6)(var0);
                            var0._onSnap = var5;
                            var6 = var0._onLayout;
                            var5 = var6.bind;
                            var5 = var5.bind(var6)(var0);
                            var0._onLayout = var5;
                            var6 = var0._onScroll;
                            var5 = var6.bind;
                            var5 = var5.bind(var6)(var0);
                            var0._onScroll = var5;
                            var6 = var1.enableSnap;
                            var5 = undefined;
                            if (!var6) {
                                _fun75007_ip = 389;
                                continue _fun75007
                            }
                        case 373:
                            var7 = var0._onScrollBeginDrag;
                            var6 = var7.bind;
                            var5 = var6.bind(var7)(var0);
                        case 389:
                            var0._onScrollBeginDrag = var5;
                            var5 = var1.enableSnap;
                            if (var5) {
                                _fun75007_ip = 415;
                                continue _fun75007
                            }
                        case 404:
                            var6 = var1.autoplay;
                            var5 = undefined;
                            if (!var6) {
                                _fun75007_ip = 431;
                                continue _fun75007
                            }
                        case 415:
                            var7 = var0._onScrollEnd;
                            var6 = var7.bind;
                            var5 = var6.bind(var7)(var0);
                        case 431:
                            var0._onScrollEnd = var5;
                            var6 = var1.enableMomentum;
                            var5 = undefined;
                            if (var6) {
                                _fun75007_ip = 464;
                                continue _fun75007
                            }
                        case 448:
                            var7 = var0._onScrollEndDrag;
                            var6 = var7.bind;
                            var5 = var6.bind(var7)(var0);
                        case 464:
                            var0._onScrollEndDrag = var5;
                            var6 = var1.enableMomentum;
                            var5 = undefined;
                            if (!var6) {
                                _fun75007_ip = 497;
                                continue _fun75007
                            }
                        case 481:
                            var7 = var0._onMomentumScrollEnd;
                            var6 = var7.bind;
                            var5 = var6.bind(var7)(var0);
                        case 497:
                            var0._onMomentumScrollEnd = var5;
                            var6 = var0._onTouchStart;
                            var5 = var6.bind;
                            var5 = var5.bind(var6)(var0);
                            var0._onTouchStart = var5;
                            var6 = var0._onTouchEnd;
                            var5 = var6.bind;
                            var5 = var5.bind(var6)(var0);
                            var0._onTouchEnd = var5;
                            var6 = var0._onTouchRelease;
                            var5 = var6.bind;
                            var5 = var5.bind(var6)(var0);
                            var0._onTouchRelease = var5;
                            var6 = var0._getKeyExtractor;
                            var5 = var6.bind;
                            var5 = var5.bind(var6)(var0);
                            var0._getKeyExtractor = var5;
                            var5 = var0._setScrollHandler;
                            var5 = var5.bind(var0)(var1);
                            var0._ignoreNextMomentum = var3;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 10;
                            var2 = var5[var2];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.ViewPropTypes;
                            if (var2) {
                                _fun75007_ip = 661;
                                continue _fun75007
                            }
                        case 637:
                            var2 = global;
                            var4 = var2.console;
                            var3 = var4.warn;
                            var2 = 'react-native-snap-carousel: It is recommended to use at least version 0.44 of React Native with the plugin';
                            var2 = var3.bind(var4)(var2);
                        case 661:
                            var2 = var1.vertical;
                            if (var2) {
                                _fun75007_ip = 688;
                                continue _fun75007
                            }
                        case 670:
                            var3 = var1.sliderWidth;
                            if (!var3) {
                                _fun75007_ip = 685;
                                continue _fun75007
                            }
                        case 679:
                            var3 = var1.itemWidth;
                        case 685:
                            var2 = var3;
                        case 688:
                            if (var2) {
                                _fun75007_ip = 715;
                                continue _fun75007
                            }
                        case 691:
                            var2 = global;
                            var4 = var2.console;
                            var3 = var4.error;
                            var2 = 'react-native-snap-carousel: You need to specify both `sliderWidth` and `itemWidth` for horizontal carousels';
                            var2 = var3.bind(var4)(var2);
                        case 715:
                            var2 = var1.vertical;
                            var2 = !var2;
                            if (var2) {
                                _fun75007_ip = 745;
                                continue _fun75007
                            }
                        case 727:
                            var3 = var1.sliderHeight;
                            if (!var3) {
                                _fun75007_ip = 742;
                                continue _fun75007
                            }
                        case 736:
                            var3 = var1.itemHeight;
                        case 742:
                            var2 = var3;
                        case 745:
                            if (var2) {
                                _fun75007_ip = 772;
                                continue _fun75007
                            }
                        case 748:
                            var2 = global;
                            var4 = var2.console;
                            var3 = var4.error;
                            var2 = 'react-native-snap-carousel: You need to specify both `sliderHeight` and `itemHeight` for vertical carousels';
                            var2 = var3.bind(var4)(var2);
                        case 772:
                            var2 = var1.apparitionDelay;
                            if (!var2) {
                                _fun75007_ip = 790;
                                continue _fun75007
                            }
                        case 781:
                            var3 = var1.useScrollView;
                            var2 = !var3;
                        case 790:
                            if (!var2) {
                                _fun75007_ip = 817;
                                continue _fun75007
                            }
                        case 793:
                            var2 = global;
                            var4 = var2.console;
                            var3 = var4.warn;
                            var2 = 'react-native-snap-carousel: Using `apparitionDelay` on Android is not recommended since it can lead to rendering issues';
                            var2 = var3.bind(var4)(var2);
                        case 817:
                            var2 = var1.customAnimationType;
                            if (var2) {
                                _fun75007_ip = 836;
                                continue _fun75007
                            }
                        case 828:
                            var2 = var1.customAnimationOptions;
                        case 836:
                            if (!var2) {
                                _fun75007_ip = 863;
                                continue _fun75007
                            }
                        case 839:
                            var2 = global;
                            var4 = var2.console;
                            var3 = var4.warn;
                            var2 = 'react-native-snap-carousel: Props `customAnimationType` and `customAnimationOptions` have been renamed to `activeAnimationType` and `activeAnimationOptions`';
                            var2 = var3.bind(var4)(var2);
                        case 863:
                            var1 = var1.onScrollViewScroll;
                            if (!var1) {
                                _fun75007_ip = 898;
                                continue _fun75007
                            }
                        case 874:
                            var1 = global;
                            var3 = var1.console;
                            var2 = var3.error;
                            var1 = 'react-native-snap-carousel: Prop `onScrollViewScroll` has been removed. Use `onScroll` instead';
                            var1 = var2.bind(var3)(var1);
                        case 898:
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot9;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot6;
                var4 = {};
                var0 = 'componentDidMount';
                var4.key = var0;
                var0 = function() { // Original name: componentDidMount, environment: var5
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = var2.props;
                    var3 = var0.apparitionDelay;
                    var _closure3_slot1 = var3;
                    var3 = var0.autoplay;
                    var _closure3_slot2 = var3;
                    var3 = var0.firstItem;
                    var0 = var2._getFirstItem;
                    var0 = var0.bind(var2)(var3);
                    var _closure3_slot3 = var0;
                    var0 = function() { // Original name: apparitionCallback, environment: var1
                        _fun75009: for (var _fun75009_ip = 0;;) switch (_fun75009_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var2 = var3.setState;
                                var1 = {};
                                var4 = false;
                                var1.hideCarousel = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot2;
                                if (!var1) {
                                    _fun75009_ip = 48;
                                    continue _fun75009
                                }
                            case 34:
                                var1 = _closure3_slot0;
                                var0 = var1.startAutoplay;
                                var0 = var0.bind(var1)();
                            case 48:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot4 = var0;
                    var0 = true;
                    var2._mounted = var0;
                    var0 = var2._initPositionsAndInterpolators;
                    var0 = var0.bind(var2)();
                    var0 = global;
                    var2 = var0.requestAnimationFrame;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        _fun75010: for (var _fun75010_ip = 0;;) switch (_fun75010_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1._mounted;
                                if (!var1) {
                                    _fun75010_ip = 125;
                                    continue _fun75010
                                }
                            case 16:
                                var5 = _closure3_slot0;
                                var2 = var5._snapToItem;
                                var4 = _closure3_slot3;
                                var3 = true;
                                var11 = var5;
                                var10 = var4;
                                var9 = false;
                                var8 = false;
                                var7 = true;
                                var6 = false;
                                var1 = var11[var2](var10, var9, var8, var7, var6, var5);
                                var2 = var5._hackActiveSlideAnimation;
                                var1 = 'start';
                                var1 = var2.bind(var5)(var4, var1, var3);
                                var1 = _closure3_slot1;
                                if (var1) {
                                    _fun75010_ip = 86;
                                    continue _fun75010
                                }
                            case 74:
                                var2 = _closure3_slot4;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                _fun75010_ip = 125;
                                continue _fun75010;
                            case 86:
                                var1 = _closure3_slot0;
                                var2 = global;
                                var4 = var2.setTimeout;
                                var3 = _closure3_slot1;
                                var2 = undefined;
                                var0 = function() { // Environment: var0
                                    var1 = _closure3_slot4;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var0 = var4.bind(var2)(var0, var3);
                                var1._apparitionTimeout = var0;
                            case 125:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(66);
                var0[0] = var4;
                var4 = {};
                var6 = 'shouldComponentUpdate';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: shouldComponentUpdate, environment: var5
                    _fun75012: for (var _fun75012_ip = 0;;) switch (_fun75012_ip) {
                        case 0:
                            var5 = this;
                            var0 = var5.props;
                            var1 = var0.shouldOptimizeUpdates;
                            var0 = false;
                            var0 = var0 === var1;
                            if (var0) {
                                _fun75012_ip = 61;
                                continue _fun75012
                            }
                        case 23:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = arg0;
                            var1 = arg1;
                            var0 = var3.bind(var4)(var5, var2, var1);
                        case 61:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'componentDidUpdate';
                var4.key = var6;
                var6 = function(arg0) { // Original name: componentDidUpdate, environment: var5
                    _fun75013: for (var _fun75013_ip = 0;;) switch (_fun75013_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = this;
                            var1 = var2.state;
                            var7 = var1.interpolators;
                            var1 = var2.props;
                            var4 = var1.firstItem;
                            var12 = var1.itemHeight;
                            var9 = var1.itemWidth;
                            var10 = var1.scrollEnabled;
                            var5 = var1.sliderHeight;
                            var6 = var1.sliderWidth;
                            var3 = var2._getCustomDataLength;
                            var1 = var2.props;
                            var8 = var3.bind(var2)(var1);
                            if (!var8) {
                                _fun75013_ip = 452;
                                continue _fun75013
                            }
                        case 80:
                            var3 = var2._getFirstItem;
                            var1 = var2.props;
                            var11 = var3.bind(var2)(var4, var1);
                            var1 = var2._activeItem;
                            if (var1) {
                                _fun75013_ip = 121;
                                continue _fun75013
                            }
                        case 106:
                            var3 = var2._activeItem;
                            var1 = 0;
                            var4 = var11;
                            if (!(var1 === var3)) {
                                _fun75013_ip = 127;
                                continue _fun75013
                            }
                        case 121:
                            var4 = var2._activeItem;
                        case 127:
                            var1 = var6;
                            if (!var1) {
                                _fun75013_ip = 143;
                                continue _fun75013
                            }
                        case 133:
                            var3 = var0.sliderWidth;
                            var1 = var6 !== var3;
                        case 143:
                            var6 = var5;
                            if (!var6) {
                                _fun75013_ip = 159;
                                continue _fun75013
                            }
                        case 149:
                            var3 = var0.sliderHeight;
                            var6 = var5 !== var3;
                        case 159:
                            var5 = var9;
                            if (!var5) {
                                _fun75013_ip = 175;
                                continue _fun75013
                            }
                        case 165:
                            var3 = var0.itemWidth;
                            var5 = var9 !== var3;
                        case 175:
                            var3 = var12;
                            if (!var3) {
                                _fun75013_ip = 191;
                                continue _fun75013
                            }
                        case 181:
                            var9 = var0.itemHeight;
                            var3 = var12 !== var9;
                        case 191:
                            var9 = 1;
                            var12 = var8 - var9;
                            if (!(var4 > var12)) {
                                _fun75013_ip = 206;
                                continue _fun75013
                            }
                        case 202:
                            var4 = var8 - var9;
                        case 206:
                            var9 = var0.scrollEnabled;
                            if (!(var10 !== var9)) {
                                _fun75013_ip = 227;
                                continue _fun75013
                            }
                        case 216:
                            var9 = var2._setScrollEnabled;
                            var9 = var9.bind(var2)(var10);
                        case 227:
                            var7 = var7.length;
                            if (!(var7 === var8)) {
                                _fun75013_ip = 315;
                                continue _fun75013
                            }
                        case 236:
                            if (var1) {
                                _fun75013_ip = 315;
                                continue _fun75013
                            }
                        case 239:
                            if (var6) {
                                _fun75013_ip = 315;
                                continue _fun75013
                            }
                        case 242:
                            if (var5) {
                                _fun75013_ip = 315;
                                continue _fun75013
                            }
                        case 245:
                            if (var3) {
                                _fun75013_ip = 315;
                                continue _fun75013
                            }
                        case 248:
                            var7 = var2._previousFirstItem;
                            var7 = var11 !== var7;
                            if (!var7) {
                                _fun75013_ip = 271;
                                continue _fun75013
                            }
                        case 261:
                            var9 = var2._activeItem;
                            var7 = var11 !== var9;
                        case 271:
                            if (!var7) {
                                _fun75013_ip = 415;
                                continue _fun75013
                            }
                        case 277:
                            var2._activeItem = var11;
                            var2._previousFirstItem = var11;
                            var10 = var2._snapToItem;
                            var15 = true;
                            var18 = var2;
                            var17 = var11;
                            var16 = false;
                            var14 = false;
                            var13 = false;
                            var7 = var18[var10](var17, var16, var15, var14, var13, var12);
                            _fun75013_ip = 415;
                            continue _fun75013;
                        case 315:
                            var2._activeItem = var4;
                            var2._previousItemsLength = var8;
                            var9 = var2._initPositionsAndInterpolators;
                            var7 = var2.props;
                            var7 = var9.bind(var2)(var7);
                            var7 = var2._previousItemsLength;
                            if (!(var7 > var8)) {
                                _fun75013_ip = 370;
                                continue _fun75013
                            }
                        case 353:
                            var9 = var2._hackActiveSlideAnimation;
                            var8 = null;
                            var7 = true;
                            var7 = var9.bind(var2)(var4, var8, var7);
                        case 370:
                            if (var1) {
                                _fun75013_ip = 376;
                                continue _fun75013
                            }
                        case 373:
                            var1 = var6;
                        case 376:
                            if (var1) {
                                _fun75013_ip = 382;
                                continue _fun75013
                            }
                        case 379:
                            var1 = var5;
                        case 382:
                            if (var1) {
                                _fun75013_ip = 388;
                                continue _fun75013
                            }
                        case 385:
                            var1 = var3;
                        case 388:
                            if (!var1) {
                                _fun75013_ip = 415;
                                continue _fun75013
                            }
                        case 391:
                            var3 = var2._snapToItem;
                            var18 = var2;
                            var17 = var4;
                            var16 = false;
                            var15 = false;
                            var14 = false;
                            var13 = false;
                            var1 = var18[var3](var17, var16, var15, var14, var13, var12);
                        case 415:
                            var1 = var2.props;
                            var1 = var1.onScroll;
                            var0 = var0.onScroll;
                            if (!(var1 !== var0)) {
                                _fun75013_ip = 452;
                                continue _fun75013
                            }
                        case 436:
                            var1 = var2._setScrollHandler;
                            var0 = var2.props;
                            var0 = var1.bind(var2)(var0);
                        case 452:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'componentWillUnmount';
                var4.key = var6;
                var6 = function() { // Original name: componentWillUnmount, environment: var5
                    var1 = this;
                    var0 = false;
                    var1._mounted = var0;
                    var0 = var1.stopAutoplay;
                    var0 = var0.bind(var1)();
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._apparitionTimeout;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var4 = var2.clearTimeout;
                    var3 = var1._hackSlideAnimationTimeout;
                    var3 = var4.bind(var0)(var3);
                    var4 = var2.clearTimeout;
                    var3 = var1._enableAutoplayTimeout;
                    var3 = var4.bind(var0)(var3);
                    var4 = var2.clearTimeout;
                    var3 = var1._autoplayTimeout;
                    var3 = var4.bind(var0)(var3);
                    var4 = var2.clearTimeout;
                    var3 = var1._snapNoMomentumTimeout;
                    var3 = var4.bind(var0)(var3);
                    var4 = var2.clearTimeout;
                    var3 = var1._edgeItemTimeout;
                    var3 = var4.bind(var0)(var3);
                    var2 = var2.clearTimeout;
                    var1 = var1._lockScrollTimeout;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'realIndex';
                var4.key = var6;
                var6 = function() { // Original name: get, environment: var5
                    var0 = this;
                    var0 = var0._activeItem;
                    return var0;
                };
                var4.get = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'currentIndex';
                var4.key = var6;
                var6 = function() { // Original name: get, environment: var5
                    var2 = this;
                    var1 = var2._getDataIndex;
                    var0 = var2._activeItem;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.get = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'currentScrollPosition';
                var4.key = var6;
                var6 = function() { // Original name: get, environment: var5
                    var0 = this;
                    var0 = var0._currentContentOffset;
                    return var0;
                };
                var4.get = var6;
                var0[6] = var4;
                var4 = {};
                var6 = '_setScrollHandler';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _setScrollHandler, environment: var5
                    _fun75018: for (var _fun75018_ip = 0;;) switch (_fun75018_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var4 = {};
                            var0 = var1._onScroll;
                            var4.listener = var0;
                            var0 = true;
                            var4.useNativeDriver = var0;
                            var3 = _closure1_slot10;
                            var3 = var3.Value;
                            var5 = var3.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var6 = 0;
                            var13 = var5;
                            var12 = 0;
                            var3 = new var13[var3](var12, var11);
                            var3 = var3 instanceof Object ? var3 : var5;
                            var1._scrollPos = var3;
                            var3 = var2.vertical;
                            var7 = {};
                            var5 = {};
                            var8 = {};
                            var9 = var1._scrollPos;
                            if (var3) {
                                _fun75018_ip = 114;
                                continue _fun75018
                            }
                        case 90:
                            var8.x = var9;
                            var5.contentOffset = var8;
                            var7.nativeEvent = var5;
                            var3 = new Array(1);
                            var3[0] = var7;
                            _fun75018_ip = 139;
                            continue _fun75018;
                        case 114:
                            var8.y = var9;
                            var5.contentOffset = var8;
                            var7.nativeEvent = var5;
                            var5 = new Array(1);
                            var5[0] = var7;
                            var3 = var5;
                        case 139:
                            var5 = var2.onScroll;
                            if (!var5) {
                                _fun75018_ip = 347;
                                continue _fun75018
                            }
                        case 151:
                            var5 = global;
                            var8 = var5.Array;
                            var7 = var8.isArray;
                            var5 = var2.onScroll;
                            var5 = var5._argMapping;
                            var5 = var7.bind(var8)(var5);
                            if (!var5) {
                                _fun75018_ip = 347;
                                continue _fun75018
                            }
                        case 187:
                            var5 = var3.pop;
                            var5 = var5.bind(var3)();
                            var9 = _closure1_slot4;
                            var5 = var2.onScroll;
                            var7 = var5._argMapping;
                            var8 = undefined;
                            var5 = 1;
                            var5 = var9.bind(var8)(var7, var5);
                            var6 = var5[var6];
                            var5 = var6;
                            if (!var5) {
                                _fun75018_ip = 240;
                                continue _fun75018
                            }
                        case 234:
                            var5 = var6.nativeEvent;
                        case 240:
                            if (!var5) {
                                _fun75018_ip = 255;
                                continue _fun75018
                            }
                        case 243:
                            var7 = var6.nativeEvent;
                            var5 = var7.contentOffset;
                        case 255:
                            if (!var5) {
                                _fun75018_ip = 310;
                                continue _fun75018
                            }
                        case 258:
                            var5 = var6.nativeEvent;
                            var5 = var5.contentOffset;
                            var5 = var5.x;
                            if (var5) {
                                _fun75018_ip = 295;
                                continue _fun75018
                            }
                        case 278:
                            var6 = var6.nativeEvent;
                            var6 = var6.contentOffset;
                            var5 = var6.y;
                        case 295:
                            if (var5) {
                                _fun75018_ip = 304;
                                continue _fun75018
                            }
                        case 298:
                            var5 = var1._scrollPos;
                        case 304:
                            var1._scrollPos = var5;
                        case 310:
                            var6 = var3.push;
                            var5 = var6.apply;
                            var7 = _closure1_slot3;
                            var2 = var2.onScroll;
                            var2 = var2._argMapping;
                            var2 = var7.bind(var8)(var2);
                            var2 = var5.bind(var6)(var3, var2);
                        case 347:
                            var2 = _closure1_slot10;
                            var0 = var2.event;
                            var0 = var0.bind(var2)(var3, var4);
                            var1._onScrollHandler = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = '_needsScrollView';
                var4.key = var6;
                var6 = function() { // Original name: _needsScrollView, environment: var5
                    _fun75019: for (var _fun75019_ip = 0;;) switch (_fun75019_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.props;
                            var0 = var0.useScrollView;
                            if (var0) {
                                _fun75019_ip = 27;
                                continue _fun75019
                            }
                        case 17:
                            var1 = _closure1_slot14;
                            var0 = !var1;
                        case 27:
                            if (var0) {
                                _fun75019_ip = 40;
                                continue _fun75019
                            }
                        case 30:
                            var1 = var2._shouldUseStackLayout;
                            var0 = var1.bind(var2)();
                        case 40:
                            if (var0) {
                                _fun75019_ip = 53;
                                continue _fun75019
                            }
                        case 43:
                            var1 = var2._shouldUseTinderLayout;
                            var0 = var1.bind(var2)();
                        case 53:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[8] = var4;
                var4 = {};
                var6 = '_needsRTLAdaptations';
                var4.key = var6;
                var6 = function() { // Original name: _needsRTLAdaptations, environment: var5
                    _fun75020: for (var _fun75020_ip = 0;;) switch (_fun75020_ip) {
                        case 0:
                            var0 = this;
                            var0 = var0.props;
                            var1 = var0.vertical;
                            var0 = _closure1_slot16;
                            if (!var0) {
                                _fun75020_ip = 27;
                                continue _fun75020
                            }
                        case 24:
                            var0 = !var1;
                        case 27:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[9] = var4;
                var4 = {};
                var6 = '_canLockScroll';
                var4.key = var6;
                var6 = function() { // Original name: _canLockScroll, environment: var5
                    _fun75021: for (var _fun75021_ip = 0;;) switch (_fun75021_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0.props;
                            var0 = var1.scrollEnabled;
                            var2 = var1.enableMomentum;
                            var1 = var1.lockScrollWhileSnapping;
                            if (!var0) {
                                _fun75021_ip = 32;
                                continue _fun75021
                            }
                        case 29:
                            var0 = !var2;
                        case 32:
                            if (!var0) {
                                _fun75021_ip = 38;
                                continue _fun75021
                            }
                        case 35:
                            var0 = var1;
                        case 38:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[10] = var4;
                var4 = {};
                var6 = '_enableLoop';
                var4.key = var6;
                var6 = function() { // Original name: _enableLoop, environment: var5
                    _fun75022: for (var _fun75022_ip = 0;;) switch (_fun75022_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0.props;
                            var1 = var2.data;
                            var0 = var2.enableSnap;
                            var2 = var2.loop;
                            if (!var0) {
                                _fun75022_ip = 31;
                                continue _fun75022
                            }
                        case 28:
                            var0 = var2;
                        case 31:
                            if (!var0) {
                                _fun75022_ip = 37;
                                continue _fun75022
                            }
                        case 34:
                            var0 = var1;
                        case 37:
                            if (!var0) {
                                _fun75022_ip = 45;
                                continue _fun75022
                            }
                        case 40:
                            var0 = var1.length;
                        case 45:
                            if (!var0) {
                                _fun75022_ip = 60;
                                continue _fun75022
                            }
                        case 48:
                            var2 = var1.length;
                            var1 = 1;
                            var0 = var2 > var1;
                        case 60:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[11] = var4;
                var4 = {};
                var6 = '_shouldAnimateSlides';
                var4.key = var6;
                var6 = function() { // Original name: _shouldAnimateSlides, environment: var5
                    _fun75023: for (var _fun75023_ip = 0;;) switch (_fun75023_ip) {
                        case 0:
                            var2 = this;
                            var4 = undefined;
                            var3 = undefined;
                            var1 = arguments.length;
                            var0 = 0;
                            if (!(var1 > var0)) {
                                _fun75023_ip = 24;
                                continue _fun75023
                            }
                        case 16:
                            var1 = arguments[var0];
                            if (!(var4 === var1)) {
                                _fun75023_ip = 31;
                                continue _fun75023
                            }
                        case 24:
                            var1 = var2.props;
                            _fun75023_ip = 35;
                            continue _fun75023;
                        case 31:
                            var1 = arguments[var0];
                        case 35:
                            var0 = var1.inactiveSlideOpacity;
                            var5 = var1.inactiveSlideScale;
                            var3 = var1.scrollInterpolator;
                            var1 = var1.slideInterpolatedStyle;
                            var4 = 1;
                            var0 = var0 < var4;
                            if (var0) {
                                _fun75023_ip = 73;
                                continue _fun75023
                            }
                        case 69:
                            var0 = var5 < var4;
                        case 73:
                            if (var0) {
                                _fun75023_ip = 82;
                                continue _fun75023
                            }
                        case 76:
                            var3 = !var3;
                            var0 = !var3;
                        case 82:
                            if (var0) {
                                _fun75023_ip = 91;
                                continue _fun75023
                            }
                        case 85:
                            var1 = !var1;
                            var0 = !var1;
                        case 91:
                            if (var0) {
                                _fun75023_ip = 104;
                                continue _fun75023
                            }
                        case 94:
                            var1 = var2._shouldUseShiftLayout;
                            var0 = var1.bind(var2)();
                        case 104:
                            if (var0) {
                                _fun75023_ip = 117;
                                continue _fun75023
                            }
                        case 107:
                            var1 = var2._shouldUseStackLayout;
                            var0 = var1.bind(var2)();
                        case 117:
                            if (var0) {
                                _fun75023_ip = 130;
                                continue _fun75023
                            }
                        case 120:
                            var1 = var2._shouldUseTinderLayout;
                            var0 = var1.bind(var2)();
                        case 130:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[12] = var4;
                var4 = {};
                var6 = '_shouldUseCustomAnimation';
                var4.key = var6;
                var6 = function() { // Original name: _shouldUseCustomAnimation, environment: var5
                    _fun75024: for (var _fun75024_ip = 0;;) switch (_fun75024_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.props;
                            var0 = var0.activeAnimationOptions;
                            var1 = !var0;
                            var0 = !var1;
                            if (var1) {
                                _fun75024_ip = 36;
                                continue _fun75024
                            }
                        case 23:
                            var1 = var2._shouldUseStackLayout;
                            var1 = var1.bind(var2)();
                            var0 = !var1;
                        case 36:
                            if (!var0) {
                                _fun75024_ip = 52;
                                continue _fun75024
                            }
                        case 39:
                            var1 = var2._shouldUseTinderLayout;
                            var1 = var1.bind(var2)();
                            var0 = !var1;
                        case 52:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[13] = var4;
                var4 = {};
                var6 = '_shouldUseShiftLayout';
                var4.key = var6;
                var6 = function() { // Original name: _shouldUseShiftLayout, environment: var5
                    _fun75025: for (var _fun75025_ip = 0;;) switch (_fun75025_ip) {
                        case 0:
                            var0 = this;
                            var0 = var0.props;
                            var2 = var0.inactiveSlideShift;
                            var1 = var0.layout;
                            var0 = 'default';
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun75025_ip = 37;
                                continue _fun75025
                            }
                        case 31:
                            var1 = 0;
                            var0 = var1 !== var2;
                        case 37:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[14] = var4;
                var4 = {};
                var6 = '_shouldUseStackLayout';
                var4.key = var6;
                var6 = function() { // Original name: _shouldUseStackLayout, environment: var5
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.layout;
                    var0 = 'stack';
                    var0 = var0 === var1;
                    return var0;
                };
                var4.value = var6;
                var0[15] = var4;
                var4 = {};
                var6 = '_shouldUseTinderLayout';
                var4.key = var6;
                var6 = function() { // Original name: _shouldUseTinderLayout, environment: var5
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.layout;
                    var0 = 'tinder';
                    var0 = var0 === var1;
                    return var0;
                };
                var4.value = var6;
                var0[16] = var4;
                var4 = {};
                var6 = '_getCustomData';
                var4.key = var6;
                var6 = function() { // Original name: _getCustomData, environment: var5
                    _fun75028: for (var _fun75028_ip = 0;;) switch (_fun75028_ip) {
                        case 0:
                            var1 = this;
                            var9 = undefined;
                            var2 = undefined;
                            var0 = arguments.length;
                            var11 = 0;
                            if (!(var0 > var11)) {
                                _fun75028_ip = 24;
                                continue _fun75028
                            }
                        case 16:
                            var0 = arguments[var11];
                            if (!(var9 === var0)) {
                                _fun75028_ip = 31;
                                continue _fun75028
                            }
                        case 24:
                            var0 = var1.props;
                            _fun75028_ip = 35;
                            continue _fun75028;
                        case 31:
                            var0 = arguments[var11];
                        case 35:
                            var3 = var0.data;
                            var6 = var0.loopClonesPerSide;
                            var5 = var3;
                            if (!var5) {
                                _fun75028_ip = 57;
                                continue _fun75028
                            }
                        case 52:
                            var5 = var3.length;
                        case 57:
                            if (var5) {
                                _fun75028_ip = 66;
                                continue _fun75028
                            }
                        case 60:
                            var0 = new Array(0);
                            return var0;
                        case 66:
                            var0 = var1._enableLoop;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun75028_ip = 81;
                                continue _fun75028
                            }
                        case 79:
                            return var3;
                        case 81:
                            var4 = new Array(0);
                            var0 = new Array(0);
                            if (!(!(var6 > var5))) {
                                _fun75028_ip = 122;
                                continue _fun75028
                            }
                        case 93:
                            var2 = var3.slice;
                            var1 = -var6;
                            var2 = var2.bind(var3)(var1);
                            var1 = var3.slice;
                            var1 = var1.bind(var3)(var11, var6);
                            _fun75028_ip = 291;
                            continue _fun75028;
                        case 122:
                            var7 = global;
                            var10 = var7.Math;
                            var8 = var10.floor;
                            var7 = var6 / var5;
                            var7 = var8.bind(var10)(var7);
                            var10 = var6 % var5;
                            var8 = var11 < var7;
                            var6 = 0;
                            if (!var8) {
                                _fun75028_ip = 214;
                                continue _fun75028
                            }
                        case 161:
                            var14 = var4.push;
                            var13 = var14.apply;
                            var8 = _closure1_slot3;
                            var12 = var8.bind(var9)(var3);
                            var12 = var13.bind(var14)(var4, var12);
                            var13 = var0.push;
                            var12 = var13.apply;
                            var8 = var8.bind(var9)(var3);
                            var8 = var12.bind(var13)(var0, var8);
                            var6 = var6 + 1;
                            if (var6 < var7) {
                                _fun75028_ip = 161;
                                continue _fun75028
                            }
                        case 214:
                            var7 = var4.unshift;
                            var6 = var7.apply;
                            var8 = _closure1_slot3;
                            var12 = var3.slice;
                            var5 = -var10;
                            var5 = var12.bind(var3)(var5);
                            var5 = var8.bind(var9)(var5);
                            var5 = var6.bind(var7)(var4, var5);
                            var7 = var0.push;
                            var6 = var7.apply;
                            var5 = var3.slice;
                            var5 = var5.bind(var3)(var11, var10);
                            var5 = var8.bind(var9)(var5);
                            var5 = var6.bind(var7)(var0, var5);
                            var2 = var4;
                            var1 = var0;
                        case 291:
                            var0 = var2.concat;
                            var0 = var0.bind(var2)(var3, var1);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[17] = var4;
                var4 = {};
                var6 = '_getCustomDataLength';
                var4.key = var6;
                var6 = function() { // Original name: _getCustomDataLength, environment: var5
                    _fun75029: for (var _fun75029_ip = 0;;) switch (_fun75029_ip) {
                        case 0:
                            var2 = this;
                            var4 = undefined;
                            var1 = undefined;
                            var3 = arguments.length;
                            var0 = 0;
                            if (!(var3 > var0)) {
                                _fun75029_ip = 24;
                                continue _fun75029
                            }
                        case 16:
                            var3 = arguments[var0];
                            if (!(var4 === var3)) {
                                _fun75029_ip = 31;
                                continue _fun75029
                            }
                        case 24:
                            var3 = var2.props;
                            _fun75029_ip = 35;
                            continue _fun75029;
                        case 31:
                            var3 = arguments[var0];
                        case 35:
                            var1 = var3.data;
                            var4 = var3.loopClonesPerSide;
                            var3 = var1;
                            if (!var3) {
                                _fun75029_ip = 57;
                                continue _fun75029
                            }
                        case 52:
                            var3 = var1.length;
                        case 57:
                            var0 = 0;
                            if (!var3) {
                                _fun75029_ip = 92;
                                continue _fun75029
                            }
                        case 62:
                            var1 = var2._enableLoop;
                            var2 = var1.bind(var2)();
                            var1 = var3;
                            if (!var2) {
                                _fun75029_ip = 89;
                                continue _fun75029
                            }
                        case 78:
                            var2 = 2;
                            var2 = var2 * var4;
                            var1 = var3 + var2;
                        case 89:
                            var0 = var1;
                        case 92:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[18] = var4;
                var4 = {};
                var6 = '_getCustomIndex';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _getCustomIndex, environment: var5
                    _fun75030: for (var _fun75030_ip = 0;;) switch (_fun75030_ip) {
                        case 0:
                            var4 = arg0;
                            var5 = this;
                            var2 = undefined;
                            var0 = undefined;
                            var1 = arguments.length;
                            var3 = 1;
                            if (!(var1 > var3)) {
                                _fun75030_ip = 28;
                                continue _fun75030
                            }
                        case 20:
                            var1 = arguments[var3];
                            if (!(var2 === var1)) {
                                _fun75030_ip = 35;
                                continue _fun75030
                            }
                        case 28:
                            var1 = var5.props;
                            _fun75030_ip = 39;
                            continue _fun75030;
                        case 35:
                            var1 = arguments[var3];
                        case 39:
                            var0 = var5._getCustomDataLength;
                            var2 = var0.bind(var5)(var1);
                            var0 = 0;
                            if (!var2) {
                                _fun75030_ip = 91;
                                continue _fun75030
                            }
                        case 55:
                            if (var4) {
                                _fun75030_ip = 64;
                                continue _fun75030
                            }
                        case 58:
                            var0 = 0;
                            if (!(var0 === var4)) {
                                _fun75030_ip = 91;
                                continue _fun75030
                            }
                        case 64:
                            var1 = var5._needsRTLAdaptations;
                            var5 = var1.bind(var5)();
                            var1 = var4;
                            if (!var5) {
                                _fun75030_ip = 88;
                                continue _fun75030
                            }
                        case 80:
                            var2 = var2 - var4;
                            var1 = var2 - var3;
                        case 88:
                            var0 = var1;
                        case 91:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[19] = var4;
                var4 = {};
                var6 = '_getDataIndex';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _getDataIndex, environment: var5
                    _fun75031: for (var _fun75031_ip = 0;;) switch (_fun75031_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = this;
                            var1 = var4.props;
                            var0 = var1.data;
                            var1 = var1.loopClonesPerSide;
                            var2 = var0;
                            if (!var2) {
                                _fun75031_ip = 33;
                                continue _fun75031
                            }
                        case 28:
                            var2 = var0.length;
                        case 33:
                            var0 = var4._enableLoop;
                            var0 = var0.bind(var4)();
                            if (!var0) {
                                _fun75031_ip = 49;
                                continue _fun75031
                            }
                        case 46:
                            if (var2) {
                                _fun75031_ip = 51;
                                continue _fun75031
                            }
                        case 49:
                            return var3;
                        case 51:
                            var0 = var2 + var1;
                            if (!(!(var3 >= var0))) {
                                _fun75031_ip = 231;
                                continue _fun75031
                            }
                        case 62:
                            if (!(!(var3 < var1))) {
                                _fun75031_ip = 72;
                                continue _fun75031
                            }
                        case 66:
                            var0 = var3 - var1;
                            return var0;
                        case 72:
                            if (!(!(var1 > var2))) {
                                _fun75031_ip = 86;
                                continue _fun75031
                            }
                        case 76:
                            var0 = var3 + var2;
                            var0 = var0 - var1;
                            return var0;
                        case 86:
                            var9 = new Array(0);
                            var0 = new Array(0);
                            var4 = global;
                            var6 = var4.Math;
                            var5 = var6.floor;
                            var4 = var1 / var2;
                            var6 = var5.bind(var6)(var4);
                            var4 = var1 % var2;
                            var5 = 0;
                            var8 = var5 < var2;
                            var7 = 0;
                            if (!var8) {
                                _fun75031_ip = 149;
                                continue _fun75031
                            }
                        case 132:
                            var8 = var9.push;
                            var8 = var8.bind(var9)(var7);
                            var7 = var7 + 1;
                            if (var7 < var2) {
                                _fun75031_ip = 132;
                                continue _fun75031
                            }
                        case 149:
                            var7 = var5 < var6;
                            var5 = 0;
                            if (!var7) {
                                _fun75031_ip = 181;
                                continue _fun75031
                            }
                        case 158:
                            var8 = var0.push;
                            var7 = var8.apply;
                            var7 = var7.bind(var8)(var0, var9);
                            var5 = var5 + 1;
                            if (var5 < var6) {
                                _fun75031_ip = 158;
                                continue _fun75031
                            }
                        case 181:
                            var6 = var0.unshift;
                            var5 = var6.apply;
                            var8 = _closure1_slot3;
                            var7 = var9.slice;
                            var4 = -var4;
                            var7 = var7.bind(var9)(var4);
                            var4 = undefined;
                            var4 = var8.bind(var4)(var7);
                            var4 = var5.bind(var6)(var0, var4);
                            var0 = var0[var3];
                            return var0;
                        case 231:
                            if (!(!(var1 > var2))) {
                                _fun75031_ip = 245;
                                continue _fun75031
                            }
                        case 235:
                            var0 = var3 - var2;
                            var0 = var0 - var1;
                            _fun75031_ip = 253;
                            continue _fun75031;
                        case 245:
                            var1 = var3 - var1;
                            var0 = var1 % var2;
                        case 253:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[20] = var4;
                var4 = {};
                var6 = '_getPositionIndex';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _getPositionIndex, environment: var5
                    _fun75032: for (var _fun75032_ip = 0;;) switch (_fun75032_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = this;
                            var0 = var0.props;
                            var3 = var0.loop;
                            var1 = var0.loopClonesPerSide;
                            var0 = var2;
                            if (!var3) {
                                _fun75032_ip = 33;
                                continue _fun75032
                            }
                        case 29:
                            var0 = var2 + var1;
                        case 33:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[21] = var4;
                var4 = {};
                var6 = '_getFirstItem';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _getFirstItem, environment: var5
                    _fun75033: for (var _fun75033_ip = 0;;) switch (_fun75033_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = this;
                            var2 = undefined;
                            var0 = undefined;
                            var1 = arguments.length;
                            var6 = 1;
                            if (!(var1 > var6)) {
                                _fun75033_ip = 28;
                                continue _fun75033
                            }
                        case 20:
                            var1 = arguments[var6];
                            if (!(var2 === var1)) {
                                _fun75033_ip = 35;
                                continue _fun75033
                            }
                        case 28:
                            var1 = var4.props;
                            _fun75033_ip = 39;
                            continue _fun75033;
                        case 35:
                            var1 = arguments[var6];
                        case 39:
                            var2 = var1.loopClonesPerSide;
                            var0 = var4._getCustomDataLength;
                            var1 = var0.bind(var4)(var1);
                            var5 = 0;
                            var0 = 0;
                            if (!var1) {
                                _fun75033_ip = 108;
                                continue _fun75033
                            }
                        case 63:
                            var1 = var1 - var6;
                            var1 = var3 > var1;
                            var0 = 0;
                            if (var1) {
                                _fun75033_ip = 108;
                                continue _fun75033
                            }
                        case 76:
                            var1 = var3 < var5;
                            var0 = 0;
                            if (var1) {
                                _fun75033_ip = 108;
                                continue _fun75033
                            }
                        case 85:
                            var1 = var4._enableLoop;
                            var4 = var1.bind(var4)();
                            var1 = var3;
                            if (!var4) {
                                _fun75033_ip = 105;
                                continue _fun75033
                            }
                        case 101:
                            var1 = var3 + var2;
                        case 105:
                            var0 = var1;
                        case 108:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[22] = var4;
                var4 = {};
                var6 = '_getWrappedRef';
                var4.key = var6;
                var6 = function() { // Original name: _getWrappedRef, environment: var5
                    _fun75034: for (var _fun75034_ip = 0;;) switch (_fun75034_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1._carouselRef;
                            if (!var0) {
                                _fun75034_ip = 68;
                                continue _fun75034
                            }
                        case 12:
                            var0 = var1._needsScrollView;
                            var0 = var0.bind(var1)();
                            if (!var0) {
                                _fun75034_ip = 40;
                                continue _fun75034
                            }
                        case 25:
                            var0 = var1._carouselRef;
                            var0 = var0.scrollTo;
                            if (var0) {
                                _fun75034_ip = 110;
                                continue _fun75034
                            }
                        case 40:
                            var0 = var1._needsScrollView;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun75034_ip = 68;
                                continue _fun75034
                            }
                        case 53:
                            var0 = var1._carouselRef;
                            var0 = var0.scrollToOffset;
                            if (var0) {
                                _fun75034_ip = 110;
                                continue _fun75034
                            }
                        case 68:
                            var0 = var1._carouselRef;
                            if (!var0) {
                                _fun75034_ip = 89;
                                continue _fun75034
                            }
                        case 77:
                            var2 = var1._carouselRef;
                            var0 = var2.getNode;
                        case 89:
                            if (!var0) {
                                _fun75034_ip = 108;
                                continue _fun75034
                            }
                        case 92:
                            var3 = var1._carouselRef;
                            var2 = var3.getNode;
                            var0 = var2.bind(var3)();
                        case 108:
                            _fun75034_ip = 116;
                            continue _fun75034;
                        case 110:
                            var0 = var1._carouselRef;
                        case 116:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[23] = var4;
                var4 = {};
                var6 = '_getScrollEnabled';
                var4.key = var6;
                var6 = function() { // Original name: _getScrollEnabled, environment: var5
                    var0 = this;
                    var0 = var0._scrollEnabled;
                    return var0;
                };
                var4.value = var6;
                var0[24] = var4;
                var4 = {};
                var6 = '_setScrollEnabled';
                var4.key = var6;
                var6 = function() { // Original name: _setScrollEnabled, environment: var5
                    _fun75036: for (var _fun75036_ip = 0;;) switch (_fun75036_ip) {
                        case 0:
                            var2 = this;
                            var0 = undefined;
                            var4 = undefined;
                            var1 = arguments.length;
                            var3 = 0;
                            var5 = var1 > var3;
                            if (!var5) {
                                _fun75036_ip = 27;
                                continue _fun75036
                            }
                        case 19:
                            var1 = arguments[var3];
                            var5 = var0 !== var1;
                        case 27:
                            var1 = !var5;
                            if (!var5) {
                                _fun75036_ip = 37;
                                continue _fun75036
                            }
                        case 33:
                            var1 = arguments[var3];
                        case 37:
                            var3 = var2._getWrappedRef;
                            var5 = var3.bind(var2)();
                            var3 = var5;
                            if (!var3) {
                                _fun75036_ip = 59;
                                continue _fun75036
                            }
                        case 53:
                            var3 = var5.setNativeProps;
                        case 59:
                            if (!var3) {
                                _fun75036_ip = 86;
                                continue _fun75036
                            }
                        case 62:
                            var4 = var5.setNativeProps;
                            var3 = {};
                            var3.scrollEnabled = var1;
                            var3 = var4.bind(var5)(var3);
                            var2._scrollEnabled = var1;
                        case 86:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[25] = var4;
                var4 = {};
                var6 = '_getKeyExtractor';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: _getKeyExtractor, environment: var5
                    _fun75037: for (var _fun75037_ip = 0;;) switch (_fun75037_ip) {
                        case 0:
                            var3 = arg1;
                            var1 = this;
                            var0 = var1._needsScrollView;
                            var0 = var0.bind(var1)();
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            if (var0) {
                                _fun75037_ip = 45;
                                continue _fun75037
                            }
                        case 32:
                            var0 = 'flatlist-item-';
                            var0 = var2.bind(var0)(var3);
                            _fun75037_ip = 56;
                            continue _fun75037;
                        case 45:
                            var1 = 'scrollview-item-';
                            var0 = var2.bind(var1)(var3);
                        case 56:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[26] = var4;
                var4 = {};
                var6 = '_getScrollOffset';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _getScrollOffset, environment: var5
                    _fun75038: for (var _fun75038_ip = 0;;) switch (_fun75038_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = this;
                            var0 = var0.props;
                            var3 = var0.vertical;
                            var0 = var1;
                            if (!var0) {
                                _fun75038_ip = 29;
                                continue _fun75038
                            }
                        case 23:
                            var0 = var1.nativeEvent;
                        case 29:
                            if (!var0) {
                                _fun75038_ip = 44;
                                continue _fun75038
                            }
                        case 32:
                            var2 = var1.nativeEvent;
                            var0 = var2.contentOffset;
                        case 44:
                            if (!var0) {
                                _fun75038_ip = 74;
                                continue _fun75038
                            }
                        case 47:
                            var1 = var1.nativeEvent;
                            var2 = var1.contentOffset;
                            var1 = 'x';
                            if (!var3) {
                                _fun75038_ip = 70;
                                continue _fun75038
                            }
                        case 66:
                            var1 = 'y';
                        case 70:
                            var0 = var2[var1];
                        case 74:
                            if (var0) {
                                _fun75038_ip = 79;
                                continue _fun75038
                            }
                        case 77:
                            var0 = 0;
                        case 79:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[27] = var4;
                var4 = {};
                var6 = '_getContainerInnerMargin';
                var4.key = var6;
                var6 = function() { // Original name: _getContainerInnerMargin, environment: var5
                    _fun75039: for (var _fun75039_ip = 0;;) switch (_fun75039_ip) {
                        case 0:
                            var3 = undefined;
                            var0 = undefined;
                            var1 = arguments.length;
                            var9 = 0;
                            var1 = var1 > var9;
                            if (!var1) {
                                _fun75039_ip = 24;
                                continue _fun75039
                            }
                        case 16:
                            var2 = arguments[var9];
                            var1 = var3 !== var2;
                        case 24:
                            if (!var1) {
                                _fun75039_ip = 31;
                                continue _fun75039
                            }
                        case 27:
                            var1 = arguments[var9];
                        case 31:
                            var0 = this;
                            var0 = var0.props;
                            var5 = var0.sliderWidth;
                            var4 = var0.sliderHeight;
                            var2 = var0.itemWidth;
                            var3 = var0.itemHeight;
                            var6 = var0.vertical;
                            var10 = var0.activeSlideAlignment;
                            var0 = 'start';
                            var7 = var0 === var10;
                            if (!var7) {
                                _fun75039_ip = 91;
                                continue _fun75039
                            }
                        case 86:
                            var0 = 0;
                            if (!var1) {
                                _fun75039_ip = 167;
                                continue _fun75039
                            }
                        case 91:
                            var8 = 'end';
                            var8 = var8 === var10;
                            if (!var8) {
                                _fun75039_ip = 107;
                                continue _fun75039
                            }
                        case 102:
                            var0 = 0;
                            if (var1) {
                                _fun75039_ip = 167;
                                continue _fun75039
                            }
                        case 107:
                            if (!var8) {
                                _fun75039_ip = 113;
                                continue _fun75039
                            }
                        case 110:
                            if (!var1) {
                                _fun75039_ip = 148;
                                continue _fun75039
                            }
                        case 113:
                            if (!var7) {
                                _fun75039_ip = 119;
                                continue _fun75039
                            }
                        case 116:
                            if (var1) {
                                _fun75039_ip = 148;
                                continue _fun75039
                            }
                        case 119:
                            if (var6) {
                                _fun75039_ip = 135;
                                continue _fun75039
                            }
                        case 122:
                            var7 = var5 - var2;
                            var1 = 2;
                            var1 = var7 / var1;
                            _fun75039_ip = 146;
                            continue _fun75039;
                        case 135:
                            var8 = var4 - var3;
                            var7 = 2;
                            var1 = var8 / var7;
                        case 146:
                            _fun75039_ip = 164;
                            continue _fun75039;
                        case 148:
                            if (var6) {
                                _fun75039_ip = 157;
                                continue _fun75039
                            }
                        case 151:
                            var2 = var5 - var2;
                            _fun75039_ip = 161;
                            continue _fun75039;
                        case 157:
                            var2 = var4 - var3;
                        case 161:
                            var1 = var2;
                        case 164:
                            var0 = var1;
                        case 167:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[28] = var4;
                var4 = {};
                var6 = '_getViewportOffset';
                var4.key = var6;
                var6 = function() { // Original name: _getViewportOffset, environment: var5
                    _fun75040: for (var _fun75040_ip = 0;;) switch (_fun75040_ip) {
                        case 0:
                            var0 = this;
                            var0 = var0.props;
                            var7 = var0.sliderWidth;
                            var6 = var0.sliderHeight;
                            var1 = var0.itemWidth;
                            var3 = var0.itemHeight;
                            var4 = var0.vertical;
                            var2 = var0.activeSlideAlignment;
                            var0 = 'start';
                            if (!(var0 !== var2)) {
                                _fun75040_ip = 107;
                                continue _fun75040
                            }
                        case 52:
                            var0 = 'end';
                            if (!(var0 !== var2)) {
                                _fun75040_ip = 78;
                                continue _fun75040
                            }
                        case 60:
                            var2 = 2;
                            if (var4) {
                                _fun75040_ip = 72;
                                continue _fun75040
                            }
                        case 66:
                            var0 = var7 / var2;
                            _fun75040_ip = 76;
                            continue _fun75040;
                        case 72:
                            var0 = var6 / var2;
                        case 76:
                            _fun75040_ip = 105;
                            continue _fun75040;
                        case 78:
                            var5 = 2;
                            if (var4) {
                                _fun75040_ip = 94;
                                continue _fun75040
                            }
                        case 84:
                            var2 = var1 / var5;
                            var2 = var7 - var2;
                            _fun75040_ip = 102;
                            continue _fun75040;
                        case 94:
                            var5 = var3 / var5;
                            var2 = var6 - var5;
                        case 102:
                            var0 = var2;
                        case 105:
                            _fun75040_ip = 126;
                            continue _fun75040;
                        case 107:
                            var2 = 2;
                            if (var4) {
                                _fun75040_ip = 119;
                                continue _fun75040
                            }
                        case 113:
                            var1 = var1 / var2;
                            _fun75040_ip = 123;
                            continue _fun75040;
                        case 119:
                            var1 = var3 / var2;
                        case 123:
                            var0 = var1;
                        case 126:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[29] = var4;
                var4 = {};
                var6 = '_getCenter';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _getCenter, environment: var5
                    var2 = this;
                    var0 = var2._getViewportOffset;
                    var1 = var0.bind(var2)();
                    var0 = arg0;
                    var1 = var0 + var1;
                    var0 = var2._getContainerInnerMargin;
                    var0 = var0.bind(var2)();
                    var0 = var1 - var0;
                    return var0;
                };
                var4.value = var6;
                var0[30] = var4;
                var4 = {};
                var6 = '_getActiveItem';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _getActiveItem, environment: var5
                    _fun75042: for (var _fun75042_ip = 0;;) switch (_fun75042_ip) {
                        case 0:
                            var3 = this;
                            var0 = var3.props;
                            var6 = var0.activeSlideOffset;
                            var0 = var0.swipeThreshold;
                            var2 = var3._getCenter;
                            var1 = arg0;
                            var5 = var2.bind(var3)(var1);
                            if (var6) {
                                _fun75042_ip = 42;
                                continue _fun75042
                            }
                        case 39:
                            var6 = var0;
                        case 42:
                            var0 = var3._positions;
                            var0 = var0.length;
                            var4 = 0;
                            var0 = var4 < var0;
                            var2 = 0;
                            if (!var0) {
                                _fun75042_ip = 121;
                                continue _fun75042
                            }
                        case 64:
                            var0 = var3._positions;
                            var0 = var0[var2];
                            var8 = var0.start;
                            var7 = var0.end;
                            var1 = var5 + var6;
                            var0 = var2;
                            if (!(var1 >= var8)) {
                                _fun75042_ip = 103;
                                continue _fun75042
                            }
                        case 95:
                            var1 = var5 - var6;
                            if (!(!(var1 <= var7))) {
                                _fun75042_ip = 187;
                                continue _fun75042
                            }
                        case 103:
                            var2 = var0 + 1;
                            var1 = var3._positions;
                            var1 = var1.length;
                            if (var2 < var1) {
                                _fun75042_ip = 64;
                                continue _fun75042
                            }
                        case 121:
                            var1 = var3._positions;
                            var2 = var1.length;
                            var1 = 1;
                            var2 = var2 - var1;
                            var1 = var3._positions;
                            var7 = var1[var2];
                            var1 = 0;
                            if (!var7) {
                                _fun75042_ip = 185;
                                continue _fun75042
                            }
                        case 154:
                            var5 = var5 - var6;
                            var3 = var3._positions;
                            var3 = var3[var2];
                            var3 = var3.end;
                            var3 = var5 > var3;
                            var1 = 0;
                            if (!var3) {
                                _fun75042_ip = 185;
                                continue _fun75042
                            }
                        case 182:
                            var1 = var2;
                        case 185:
                            return var1;
                        case 187:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[31] = var4;
                var4 = {};
                var6 = '_initPositionsAndInterpolators';
                var4.key = var6;
                var6 = function() { // Original name: _initPositionsAndInterpolators, environment: var5
                    _fun75043: for (var _fun75043_ip = 0;;) switch (_fun75043_ip) {
                        case 0:
                            var3 = this;
                            var0 = undefined;
                            var4 = undefined;
                            var _closure3_slot0 = var3;
                            var5 = arguments.length;
                            var2 = 0;
                            if (!(var5 > var2)) {
                                _fun75043_ip = 30;
                                continue _fun75043
                            }
                        case 22:
                            var5 = arguments[var2];
                            if (!(var0 === var5)) {
                                _fun75043_ip = 37;
                                continue _fun75043
                            }
                        case 30:
                            var5 = var3.props;
                            _fun75043_ip = 41;
                            continue _fun75043;
                        case 37:
                            var5 = arguments[var2];
                        case 41:
                            var _closure3_slot1 = var5;
                            var2 = var5.data;
                            var4 = var5.itemWidth;
                            var6 = var5.itemHeight;
                            var7 = var5.scrollInterpolator;
                            var _closure3_slot2 = var7;
                            var7 = var5.vertical;
                            if (!var7) {
                                _fun75043_ip = 84;
                                continue _fun75043
                            }
                        case 81:
                            var4 = var6;
                        case 84:
                            var _closure3_slot3 = var4;
                            if (!var2) {
                                _fun75043_ip = 163;
                                continue _fun75043
                            }
                        case 91:
                            var2 = var2.length;
                            if (!var2) {
                                _fun75043_ip = 163;
                                continue _fun75043
                            }
                        case 99:
                            var4 = new Array(0);
                            var _closure3_slot4 = var4;
                            var2 = new Array(0);
                            var3._positions = var2;
                            var2 = var3._getCustomData;
                            var5 = var2.bind(var3)(var5);
                            var2 = var5.forEach;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun75044: for (var _fun75044_ip = 0;;) switch (_fun75044_ip) {
                                    case 0:
                                        var4 = arg1;
                                        var3 = _closure3_slot0;
                                        var2 = var3._getCustomIndex;
                                        var1 = _closure3_slot1;
                                        var5 = var2.bind(var3)(var4, var1);
                                        var2 = var3._positions;
                                        var1 = {};
                                        var6 = _closure3_slot3;
                                        var6 = var4 * var6;
                                        var1.start = var6;
                                        var6 = _closure3_slot3;
                                        var7 = var4 * var6;
                                        var6 = _closure3_slot3;
                                        var6 = var7 + var6;
                                        var1.end = var6;
                                        var2[var4] = var1;
                                        var2 = var3._shouldAnimateSlides;
                                        var1 = _closure3_slot1;
                                        var1 = var2.bind(var3)(var1);
                                        if (var1) {
                                            _fun75044_ip = 129;
                                            continue _fun75044
                                        }
                                    case 88:
                                        var1 = _closure1_slot10;
                                        var3 = var1.Value;
                                        var1 = var3.prototype;
                                        var2 = Object.create(var1, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var12 = 1;
                                        var13 = var2;
                                        var1 = new var13[var3](var12, var11);
                                        var2 = var1 instanceof Object ? var1 : var2;
                                        _fun75044_ip = 473;
                                        continue _fun75044;
                                    case 129:
                                        var3 = _closure3_slot0;
                                        var1 = var3._shouldUseCustomAnimation;
                                        var1 = var1.bind(var3)();
                                        if (var1) {
                                            _fun75044_ip = 418;
                                            continue _fun75044
                                        }
                                    case 149:
                                        var1 = _closure3_slot2;
                                        if (var1) {
                                            _fun75044_ip = 281;
                                            continue _fun75044
                                        }
                                    case 159:
                                        var3 = _closure3_slot0;
                                        var1 = var3._shouldUseStackLayout;
                                        var1 = var1.bind(var3)();
                                        if (var1) {
                                            _fun75044_ip = 238;
                                            continue _fun75044
                                        }
                                    case 176:
                                        var3 = _closure3_slot0;
                                        var1 = var3._shouldUseTinderLayout;
                                        var1 = var1.bind(var3)();
                                        var4 = undefined;
                                        var9 = undefined;
                                        if (!var1) {
                                            _fun75044_ip = 297;
                                            continue _fun75044
                                        }
                                    case 197:
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var1 = 12;
                                        var1 = var6[var1];
                                        var4 = var3.bind(var4)(var1);
                                        var3 = var4.tinderScrollInterpolator;
                                        var1 = _closure3_slot1;
                                        var9 = var3.bind(var4)(var5, var1);
                                        _fun75044_ip = 297;
                                        continue _fun75044;
                                    case 238:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 12;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var4.stackScrollInterpolator;
                                        var1 = _closure3_slot1;
                                        var9 = var3.bind(var4)(var5, var1);
                                        _fun75044_ip = 297;
                                        continue _fun75044;
                                    case 281:
                                        var4 = _closure3_slot2;
                                        var3 = _closure3_slot1;
                                        var1 = undefined;
                                        var9 = var4.bind(var1)(var5, var3);
                                    case 297:
                                        var1 = var9;
                                        if (!var9) {
                                            _fun75044_ip = 309;
                                            continue _fun75044
                                        }
                                    case 303:
                                        var1 = var9.inputRange;
                                    case 309:
                                        if (!var1) {
                                            _fun75044_ip = 318;
                                            continue _fun75044
                                        }
                                    case 312:
                                        var1 = var9.outputRange;
                                    case 318:
                                        if (var1) {
                                            _fun75044_ip = 362;
                                            continue _fun75044
                                        }
                                    case 321:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 12;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var4.defaultScrollInterpolator;
                                        var1 = _closure3_slot1;
                                        var9 = var3.bind(var4)(var5, var1);
                                    case 362:
                                        var1 = _closure3_slot0;
                                        var4 = var1._scrollPos;
                                        var3 = var4.interpolate;
                                        var1 = global;
                                        var8 = var1.Object;
                                        var7 = var8.assign;
                                        var6 = {};
                                        var1 = 'clamp';
                                        var6.extrapolate = var1;
                                        var1 = {};
                                        var1 = var7.bind(var8)(var1, var9, var6);
                                        var2 = var3.bind(var4)(var1);
                                        _fun75044_ip = 473;
                                        continue _fun75044;
                                    case 418:
                                        var1 = _closure1_slot10;
                                        var4 = var1.Value;
                                        var1 = _closure3_slot0;
                                        var3 = var1._activeItem;
                                        var1 = 0;
                                        if (!(var5 === var3)) {
                                            _fun75044_ip = 450;
                                            continue _fun75044
                                        }
                                    case 447:
                                        var1 = 1;
                                    case 450:
                                        var3 = var4.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var13 = var3;
                                        var12 = var1;
                                        var1 = new var13[var4](var12, var11);
                                        var2 = var1 instanceof Object ? var1 : var3;
                                    case 473:
                                        var1 = _closure3_slot4;
                                        var0 = var1.push;
                                        var0 = var0.bind(var1)(var2);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var5)(var1);
                            var2 = var3.setState;
                            var1 = {};
                            var1.interpolators = var4;
                            var1 = var2.bind(var3)(var1);
                        case 163:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[32] = var4;
                var4 = {};
                var6 = '_getSlideAnimation';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: _getSlideAnimation, environment: var5
                    _fun75045: for (var _fun75045_ip = 0;;) switch (_fun75045_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0.state;
                            var1 = var1.interpolators;
                            var0 = var0.props;
                            var4 = var0.activeAnimationType;
                            var7 = var0.activeAnimationOptions;
                            var5 = var1;
                            if (!var5) {
                                _fun75045_ip = 44;
                                continue _fun75045
                            }
                        case 37:
                            var0 = arg0;
                            var5 = var1[var0];
                        case 44:
                            if (var5) {
                                _fun75045_ip = 57;
                                continue _fun75045
                            }
                        case 47:
                            var0 = 0;
                            if (!(var0 !== var5)) {
                                _fun75045_ip = 57;
                                continue _fun75045
                            }
                        case 53:
                            var0 = null;
                            return var0;
                        case 57:
                            var3 = global;
                            var6 = var3.Object;
                            var2 = var6.assign;
                            var1 = {};
                            var0 = arg1;
                            var1.toValue = var0;
                            var0 = {
                                'isInteraction': false,
                                'useNativeDriver': true
                            };
                            var8 = var2.bind(var6)(var0, var7, var1);
                            var2 = _closure1_slot10;
                            var1 = var2.parallel;
                            var6 = var2.timing;
                            var10 = var3.Object;
                            var9 = var10.assign;
                            var7 = {};
                            var0 = _closure1_slot11;
                            var0 = var0.linear;
                            var7.easing = var0;
                            var0 = {};
                            var0 = var9.bind(var10)(var0, var8, var7);
                            var6 = var6.bind(var2)(var5, var0);
                            var0 = new Array(2);
                            var0[0] = var6;
                            var4 = var2[var4];
                            var7 = var3.Object;
                            var6 = var7.assign;
                            var3 = {};
                            var3 = var6.bind(var7)(var3, var8);
                            var3 = var4.bind(var2)(var5, var3);
                            var0[1] = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[33] = var4;
                var4 = {};
                var6 = '_playCustomSlideAnimation';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: _playCustomSlideAnimation, environment: var5
                    _fun75046: for (var _fun75046_ip = 0;;) switch (_fun75046_ip) {
                        case 0:
                            var10 = arg0;
                            var9 = arg1;
                            var8 = this;
                            var0 = var8.state;
                            var7 = var0.interpolators;
                            var0 = var8._getCustomDataLength;
                            var6 = var0.bind(var8)();
                            var0 = var8._getCustomIndex;
                            var1 = var0.bind(var8)(var10);
                            var0 = var8._getDataIndex;
                            var5 = var0.bind(var8)(var1);
                            var0 = var8._getCustomIndex;
                            var1 = var0.bind(var8)(var9);
                            var0 = var8._getDataIndex;
                            var4 = var0.bind(var8)(var1);
                            var3 = new Array(0);
                            var0 = var8._enableLoop;
                            var0 = var0.bind(var8)();
                            if (var0) {
                                _fun75046_ip = 159;
                                continue _fun75046
                            }
                        case 91:
                            var0 = var7[var10];
                            if (!var0) {
                                _fun75046_ip = 122;
                                continue _fun75046
                            }
                        case 98:
                            var1 = var3.push;
                            var2 = var8._getSlideAnimation;
                            var0 = 0;
                            var0 = var2.bind(var8)(var10, var0);
                            var0 = var1.bind(var3)(var0);
                        case 122:
                            var0 = var7[var9];
                            if (!var0) {
                                _fun75046_ip = 276;
                                continue _fun75046
                            }
                        case 132:
                            var1 = var3.push;
                            var2 = var8._getSlideAnimation;
                            var0 = 1;
                            var0 = var2.bind(var8)(var9, var0);
                            var0 = var1.bind(var3)(var0);
                            _fun75046_ip = 276;
                            continue _fun75046;
                        case 159:
                            var2 = 0;
                            var9 = var2 < var6;
                            var1 = 1;
                            var0 = 0;
                            if (!var9) {
                                _fun75046_ip = 276;
                                continue _fun75046
                            }
                        case 173:
                            var9 = var8._getDataIndex;
                            var10 = var9.bind(var8)(var0);
                            var9 = var0;
                            if (!(var10 === var5)) {
                                _fun75046_ip = 198;
                                continue _fun75046
                            }
                        case 191:
                            var10 = var7[var9];
                            if (var10) {
                                _fun75046_ip = 247;
                                continue _fun75046
                            }
                        case 198:
                            var10 = var8._getDataIndex;
                            var10 = var10.bind(var8)(var9);
                            var10 = var10 === var4;
                            if (!var10) {
                                _fun75046_ip = 220;
                                continue _fun75046
                            }
                        case 216:
                            var10 = var7[var9];
                        case 220:
                            if (!var10) {
                                _fun75046_ip = 269;
                                continue _fun75046
                            }
                        case 223:
                            var11 = var3.push;
                            var10 = var8._getSlideAnimation;
                            var10 = var10.bind(var8)(var9, var1);
                            var10 = var11.bind(var3)(var10);
                            _fun75046_ip = 269;
                            continue _fun75046;
                        case 247:
                            var11 = var3.push;
                            var10 = var8._getSlideAnimation;
                            var10 = var10.bind(var8)(var9, var2);
                            var10 = var11.bind(var3)(var10);
                        case 269:
                            var0 = var9 + 1;
                            if (var0 < var6) {
                                _fun75046_ip = 173;
                                continue _fun75046
                            }
                        case 276:
                            var2 = _closure1_slot10;
                            var1 = var2.parallel;
                            var0 = {};
                            var4 = false;
                            var0.stopTogether = var4;
                            var1 = var1.bind(var2)(var3, var0);
                            var0 = var1.start;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[34] = var4;
                var4 = {};
                var6 = '_hackActiveSlideAnimation';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: _hackActiveSlideAnimation, environment: var5
                    _fun75047: for (var _fun75047_ip = 0;;) switch (_fun75047_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = this;
                            var0 = undefined;
                            var5 = undefined;
                            var _closure3_slot0 = var2;
                            var4 = arguments.length;
                            var3 = 2;
                            var4 = var4 > var3;
                            if (!var4) {
                                _fun75047_ip = 37;
                                continue _fun75047
                            }
                        case 29:
                            var7 = arguments[var3];
                            var4 = var0 !== var7;
                        case 37:
                            if (!var4) {
                                _fun75047_ip = 44;
                                continue _fun75047
                            }
                        case 40:
                            var4 = arguments[var3];
                        case 44:
                            var3 = var2.props;
                            var3 = var3.data;
                            var5 = var2._mounted;
                            if (!var5) {
                                _fun75047_ip = 268;
                                continue _fun75047
                            }
                        case 66:
                            var5 = var2._carouselRef;
                            if (!var5) {
                                _fun75047_ip = 268;
                                continue _fun75047
                            }
                        case 78:
                            var5 = var2._positions;
                            var5 = var5[var6];
                            if (!var5) {
                                _fun75047_ip = 268;
                                continue _fun75047
                            }
                        case 94:
                            if (var4) {
                                _fun75047_ip = 113;
                                continue _fun75047
                            }
                        case 97:
                            var4 = var2._enableLoop;
                            var4 = var4.bind(var2)();
                            if (var4) {
                                _fun75047_ip = 268;
                                continue _fun75047
                            }
                        case 113:
                            var4 = var2._positions;
                            var4 = var4[var6];
                            if (!var4) {
                                _fun75047_ip = 141;
                                continue _fun75047
                            }
                        case 126:
                            var5 = var2._positions;
                            var5 = var5[var6];
                            var4 = var5.start;
                        case 141:
                            var _closure3_slot1 = var4;
                            if (var4) {
                                _fun75047_ip = 154;
                                continue _fun75047
                            }
                        case 148:
                            var5 = 0;
                            if (!(var5 === var4)) {
                                _fun75047_ip = 268;
                                continue _fun75047
                            }
                        case 154:
                            var5 = var3;
                            if (!var5) {
                                _fun75047_ip = 165;
                                continue _fun75047
                            }
                        case 160:
                            var5 = var3.length;
                        case 165:
                            var3 = arg1;
                            if (var3) {
                                _fun75047_ip = 182;
                                continue _fun75047
                            }
                        case 171:
                            var7 = 'end';
                            var3 = 1;
                            if (!(var3 === var5)) {
                                _fun75047_ip = 186;
                                continue _fun75047
                            }
                        case 182:
                            var7 = 'start';
                        case 186:
                            var5 = var2._scrollTo;
                            var3 = 1;
                            var6 = 'start';
                            if (!(var6 === var7)) {
                                _fun75047_ip = 209;
                                continue _fun75047
                            }
                        case 203:
                            var3 = -1;
                        case 209:
                            var4 = var4 + var3;
                            var3 = false;
                            var3 = var5.bind(var2)(var4, var3);
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var4 = var2._hackSlideAnimationTimeout;
                            var4 = var5.bind(var0)(var4);
                            var4 = var3.setTimeout;
                            var3 = function() { // Environment: var1
                                var3 = _closure3_slot0;
                                var2 = var3._scrollTo;
                                var1 = _closure3_slot1;
                                var0 = false;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var1 = 50;
                            var1 = var4.bind(var0)(var3, var1);
                            var2._hackSlideAnimationTimeout = var1;
                        case 268:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[35] = var4;
                var4 = {};
                var6 = '_lockScroll';
                var4.key = var6;
                var6 = function() { // Original name: _lockScroll, environment: var5
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = var3.props;
                    var4 = var0.lockScrollTimeoutDuration;
                    var2 = global;
                    var6 = var2.clearTimeout;
                    var5 = var3._lockScrollTimeout;
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var2 = var2.setTimeout;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1._releaseScroll;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1, var4);
                    var3._lockScrollTimeout = var1;
                    var2 = var3._setScrollEnabled;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[36] = var4;
                var4 = {};
                var6 = '_releaseScroll';
                var4.key = var6;
                var6 = function() { // Original name: _releaseScroll, environment: var5
                    var3 = this;
                    var0 = global;
                    var2 = var0.clearTimeout;
                    var1 = var3._lockScrollTimeout;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = var3._setScrollEnabled;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[37] = var4;
                var4 = {};
                var6 = '_repositionScroll';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _repositionScroll, environment: var5
                    _fun75052: for (var _fun75052_ip = 0;;) switch (_fun75052_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = this;
                            var0 = var3.props;
                            var2 = var0.data;
                            var4 = var0.loopClonesPerSide;
                            var0 = var2;
                            if (!var0) {
                                _fun75052_ip = 33;
                                continue _fun75052
                            }
                        case 28:
                            var0 = var2.length;
                        case 33:
                            var2 = var3._enableLoop;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun75052_ip = 110;
                                continue _fun75052
                            }
                        case 46:
                            if (!var0) {
                                _fun75052_ip = 110;
                                continue _fun75052
                            }
                        case 49:
                            if (!(var1 >= var4)) {
                                _fun75052_ip = 61;
                                continue _fun75052
                            }
                        case 53:
                            var2 = var0 + var4;
                            if (!(!(var1 < var2))) {
                                _fun75052_ip = 110;
                                continue _fun75052
                            }
                        case 61:
                            var2 = var0 + var4;
                            if (!(!(var1 >= var2))) {
                                _fun75052_ip = 82;
                                continue _fun75052
                            }
                        case 69:
                            var2 = var1;
                            if (!(var2 < var4)) {
                                _fun75052_ip = 86;
                                continue _fun75052
                            }
                        case 76:
                            var2 = var1 + var0;
                            _fun75052_ip = 86;
                            continue _fun75052;
                        case 82:
                            var2 = var1 - var0;
                        case 86:
                            var1 = var3._snapToItem;
                            var11 = var3;
                            var10 = var2;
                            var9 = false;
                            var8 = false;
                            var7 = false;
                            var6 = false;
                            var0 = var11[var1](var10, var9, var8, var7, var6, var5);
                        case 110:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[38] = var4;
                var4 = {};
                var6 = '_scrollTo';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _scrollTo, environment: var5
                    _fun75053: for (var _fun75053_ip = 0;;) switch (_fun75053_ip) {
                        case 0:
                            var6 = arg0;
                            var4 = this;
                            var0 = undefined;
                            var3 = undefined;
                            var1 = arguments.length;
                            var2 = 1;
                            var5 = var1 > var2;
                            if (!var5) {
                                _fun75053_ip = 31;
                                continue _fun75053
                            }
                        case 23:
                            var1 = arguments[var2];
                            var5 = var0 !== var1;
                        case 31:
                            var1 = !var5;
                            if (!var5) {
                                _fun75053_ip = 41;
                                continue _fun75053
                            }
                        case 37:
                            var1 = arguments[var2];
                        case 41:
                            var2 = var4.props;
                            var8 = var2.vertical;
                            var2 = var4._getWrappedRef;
                            var3 = var2.bind(var4)();
                            var2 = var4._mounted;
                            if (!var2) {
                                _fun75053_ip = 191;
                                continue _fun75053
                            }
                        case 71:
                            if (!var3) {
                                _fun75053_ip = 191;
                                continue _fun75053
                            }
                        case 74:
                            var2 = var4._needsScrollView;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun75053_ip = 96;
                                continue _fun75053
                            }
                        case 87:
                            var7 = {};
                            var7.offset = var6;
                            _fun75053_ip = 125;
                            continue _fun75053;
                        case 96:
                            var2 = {};
                            var9 = 0;
                            if (var8) {
                                _fun75053_ip = 106;
                                continue _fun75053
                            }
                        case 103:
                            var9 = var6;
                        case 106:
                            var2.x = var9;
                            var5 = 0;
                            if (!var8) {
                                _fun75053_ip = 118;
                                continue _fun75053
                            }
                        case 115:
                            var5 = var6;
                        case 118:
                            var2.y = var5;
                            var7 = var2;
                        case 125:
                            var2 = global;
                            var6 = var2.Object;
                            var5 = var6.assign;
                            var2 = {};
                            var2.animated = var1;
                            var1 = {};
                            var2 = var5.bind(var6)(var1, var7, var2);
                            var1 = var4._needsScrollView;
                            var1 = var1.bind(var4)();
                            if (var1) {
                                _fun75053_ip = 180;
                                continue _fun75053
                            }
                        case 167:
                            var1 = var3.scrollToOffset;
                            var1 = var1.bind(var3)(var2);
                            _fun75053_ip = 191;
                            continue _fun75053;
                        case 180:
                            var1 = var3.scrollTo;
                            var1 = var1.bind(var3)(var2);
                        case 191:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[39] = var4;
                var4 = {};
                var6 = '_onScroll';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onScroll, environment: var5
                    _fun75054: for (var _fun75054_ip = 0;;) switch (_fun75054_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = this;
                            var0 = var4.props;
                            var9 = var0.callbackOffsetMargin;
                            var8 = var0.enableMomentum;
                            var1 = var0.onScroll;
                            if (var2) {
                                _fun75054_ip = 40;
                                continue _fun75054
                            }
                        case 32:
                            var6 = var4._currentContentOffset;
                            _fun75054_ip = 51;
                            continue _fun75054;
                        case 40:
                            var0 = var4._getScrollOffset;
                            var6 = var0.bind(var4)(var2);
                        case 51:
                            var0 = var4._getActiveItem;
                            var3 = var0.bind(var4)(var6);
                            var0 = var4._itemToSnapTo;
                            var5 = var3 === var0;
                            var0 = var4._scrollOffsetRef;
                            var0 = var0 - var9;
                            var0 = var6 >= var0;
                            if (!var0) {
                                _fun75054_ip = 103;
                                continue _fun75054
                            }
                        case 89:
                            var7 = var4._scrollOffsetRef;
                            var7 = var7 + var9;
                            var0 = var6 <= var7;
                        case 103:
                            var4._currentContentOffset = var6;
                            var7 = true;
                            var4._onScrollTriggered = var7;
                            var7 = global;
                            var10 = var7.Date;
                            var9 = var10.now;
                            var9 = var9.bind(var10)();
                            var4._lastScrollDate = var9;
                            var9 = var4._activeItem;
                            var9 = var9 !== var3;
                            if (!var9) {
                                _fun75054_ip = 163;
                                continue _fun75054
                            }
                        case 153:
                            var10 = var4._shouldUseCustomAnimation;
                            var9 = var10.bind(var4)();
                        case 163:
                            if (!var9) {
                                _fun75054_ip = 186;
                                continue _fun75054
                            }
                        case 166:
                            var10 = var4._playCustomSlideAnimation;
                            var9 = var4._activeItem;
                            var9 = var10.bind(var4)(var9, var3);
                        case 186:
                            if (var8) {
                                _fun75054_ip = 316;
                                continue _fun75054
                            }
                        case 192:
                            var8 = var4._activeItem;
                            var8 = var8 !== var3;
                            if (!var8) {
                                _fun75054_ip = 208;
                                continue _fun75054
                            }
                        case 205:
                            var8 = var5;
                        case 208:
                            if (!var8) {
                                _fun75054_ip = 419;
                                continue _fun75054
                            }
                        case 214:
                            var8 = var4._canFireBeforeCallback;
                            if (!var8) {
                                _fun75054_ip = 245;
                                continue _fun75054
                            }
                        case 223:
                            var9 = var4._onBeforeSnap;
                            var8 = var4._getDataIndex;
                            var8 = var8.bind(var4)(var3);
                            var8 = var9.bind(var4)(var8);
                        case 245:
                            if (!var0) {
                                _fun75054_ip = 419;
                                continue _fun75054
                            }
                        case 251:
                            var4._activeItem = var3;
                            var8 = var4._canLockScroll;
                            var8 = var8.bind(var4)();
                            if (!var8) {
                                _fun75054_ip = 280;
                                continue _fun75054
                            }
                        case 270:
                            var8 = var4._releaseScroll;
                            var8 = var8.bind(var4)();
                        case 280:
                            var8 = var4._canFireCallback;
                            if (!var8) {
                                _fun75054_ip = 419;
                                continue _fun75054
                            }
                        case 292:
                            var9 = var4._onSnap;
                            var8 = var4._getDataIndex;
                            var8 = var8.bind(var4)(var3);
                            var8 = var9.bind(var4)(var8);
                            _fun75054_ip = 419;
                            continue _fun75054;
                        case 316:
                            var9 = var7.clearTimeout;
                            var8 = var4._snapNoMomentumTimeout;
                            var7 = undefined;
                            var7 = var9.bind(var7)(var8);
                            var7 = var4._activeItem;
                            if (!(var7 !== var3)) {
                                _fun75054_ip = 351;
                                continue _fun75054
                            }
                        case 345:
                            var4._activeItem = var3;
                        case 351:
                            if (!var5) {
                                _fun75054_ip = 419;
                                continue _fun75054
                            }
                        case 354:
                            var5 = var4._canFireBeforeCallback;
                            if (!var5) {
                                _fun75054_ip = 385;
                                continue _fun75054
                            }
                        case 363:
                            var7 = var4._onBeforeSnap;
                            var5 = var4._getDataIndex;
                            var5 = var5.bind(var4)(var3);
                            var5 = var7.bind(var4)(var5);
                        case 385:
                            if (!var0) {
                                _fun75054_ip = 394;
                                continue _fun75054
                            }
                        case 388:
                            var0 = var4._canFireCallback;
                        case 394:
                            if (!var0) {
                                _fun75054_ip = 419;
                                continue _fun75054
                            }
                        case 397:
                            var5 = var4._onSnap;
                            var0 = var4._getDataIndex;
                            var0 = var0.bind(var4)(var3);
                            var0 = var5.bind(var4)(var0);
                        case 419:
                            var0 = var4._itemToSnapTo;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun75054_ip = 442;
                                continue _fun75054
                            }
                        case 432:
                            var5 = var4._scrollOffsetRef;
                            var0 = var6 === var5;
                        case 442:
                            if (!var0) {
                                _fun75054_ip = 458;
                                continue _fun75054
                            }
                        case 445:
                            var0 = var4._repositionScroll;
                            var0 = var0.bind(var4)(var3);
                        case 458:
                            var3 = 'function';
                            var0 = typeof var1;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun75054_ip = 475;
                                continue _fun75054
                            }
                        case 472:
                            var0 = var2;
                        case 475:
                            if (!var0) {
                                _fun75054_ip = 485;
                                continue _fun75054
                            }
                        case 478:
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 485:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[40] = var4;
                var4 = {};
                var6 = '_onStartShouldSetResponderCapture';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onStartShouldSetResponderCapture, environment: var5
                    _fun75055: for (var _fun75055_ip = 0;;) switch (_fun75055_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.props;
                            var3 = var0.onStartShouldSetResponderCapture;
                            if (!var3) {
                                _fun75055_ip = 27;
                                continue _fun75055
                            }
                        case 17:
                            var2 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var2)(var0);
                        case 27:
                            var0 = var1._getScrollEnabled;
                            var0 = var0.bind(var1)();
                            return var0;
                    }
                };
                var4.value = var6;
                var0[41] = var4;
                var4 = {};
                var6 = '_onTouchStart';
                var4.key = var6;
                var6 = function() { // Original name: _onTouchStart, environment: var5
                    _fun75056: for (var _fun75056_ip = 0;;) switch (_fun75056_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.props;
                            var1 = var0.onTouchStart;
                            var0 = var2._getScrollEnabled;
                            var3 = var0.bind(var2)();
                            var0 = false;
                            var0 = var0 !== var3;
                            if (!var0) {
                                _fun75056_ip = 39;
                                continue _fun75056
                            }
                        case 33:
                            var0 = var2._autoplaying;
                        case 39:
                            if (!var0) {
                                _fun75056_ip = 52;
                                continue _fun75056
                            }
                        case 42:
                            var0 = var2.pauseAutoPlay;
                            var0 = var0.bind(var2)();
                        case 52:
                            if (!var1) {
                                _fun75056_ip = 61;
                                continue _fun75056
                            }
                        case 55:
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[42] = var4;
                var4 = {};
                var6 = '_onTouchEnd';
                var4.key = var6;
                var6 = function() { // Original name: _onTouchEnd, environment: var5
                    _fun75057: for (var _fun75057_ip = 0;;) switch (_fun75057_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.props;
                            var1 = var0.onTouchEnd;
                            var0 = var2._getScrollEnabled;
                            var3 = var0.bind(var2)();
                            var0 = false;
                            var0 = var0 !== var3;
                            if (!var0) {
                                _fun75057_ip = 39;
                                continue _fun75057
                            }
                        case 33:
                            var0 = var2._autoplay;
                        case 39:
                            if (!var0) {
                                _fun75057_ip = 51;
                                continue _fun75057
                            }
                        case 42:
                            var3 = var2._autoplaying;
                            var0 = !var3;
                        case 51:
                            if (!var0) {
                                _fun75057_ip = 64;
                                continue _fun75057
                            }
                        case 54:
                            var0 = var2.startAutoplay;
                            var0 = var0.bind(var2)();
                        case 64:
                            if (!var1) {
                                _fun75057_ip = 73;
                                continue _fun75057
                            }
                        case 67:
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 73:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[43] = var4;
                var4 = {};
                var6 = '_onScrollBeginDrag';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onScrollBeginDrag, environment: var5
                    _fun75058: for (var _fun75058_ip = 0;;) switch (_fun75058_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = this;
                            var0 = var3.props;
                            var1 = var0.onScrollBeginDrag;
                            var0 = var3._getScrollEnabled;
                            var0 = var0.bind(var3)();
                            if (!var0) {
                                _fun75058_ip = 88;
                                continue _fun75058
                            }
                        case 30:
                            var0 = var3._getScrollOffset;
                            var0 = var0.bind(var3)(var2);
                            var3._scrollStartOffset = var0;
                            var4 = var3._getActiveItem;
                            var0 = var3._scrollStartOffset;
                            var0 = var4.bind(var3)(var0);
                            var3._scrollStartActive = var0;
                            var0 = false;
                            var3._ignoreNextMomentum = var0;
                            if (!var1) {
                                _fun75058_ip = 88;
                                continue _fun75058
                            }
                        case 81:
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[44] = var4;
                var4 = {};
                var6 = '_onScrollEndDrag';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onScrollEndDrag, environment: var5
                    _fun75059: for (var _fun75059_ip = 0;;) switch (_fun75059_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.props;
                            var2 = var0.onScrollEndDrag;
                            var0 = var1._carouselRef;
                            if (!var0) {
                                _fun75059_ip = 29;
                                continue _fun75059
                            }
                        case 23:
                            var0 = var1._onScrollEnd;
                        case 29:
                            if (!var0) {
                                _fun75059_ip = 42;
                                continue _fun75059
                            }
                        case 32:
                            var0 = var1._onScrollEnd;
                            var0 = var0.bind(var1)();
                        case 42:
                            if (!var2) {
                                _fun75059_ip = 55;
                                continue _fun75059
                            }
                        case 45:
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[45] = var4;
                var4 = {};
                var6 = '_onMomentumScrollEnd';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onMomentumScrollEnd, environment: var5
                    _fun75060: for (var _fun75060_ip = 0;;) switch (_fun75060_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.props;
                            var2 = var0.onMomentumScrollEnd;
                            var0 = var1._carouselRef;
                            if (!var0) {
                                _fun75060_ip = 29;
                                continue _fun75060
                            }
                        case 23:
                            var0 = var1._onScrollEnd;
                        case 29:
                            if (!var0) {
                                _fun75060_ip = 42;
                                continue _fun75060
                            }
                        case 32:
                            var0 = var1._onScrollEnd;
                            var0 = var0.bind(var1)();
                        case 42:
                            if (!var2) {
                                _fun75060_ip = 55;
                                continue _fun75060
                            }
                        case 45:
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[46] = var4;
                var4 = {};
                var6 = '_onScrollEnd';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onScrollEnd, environment: var5
                    _fun75061: for (var _fun75061_ip = 0;;) switch (_fun75061_ip) {
                        case 0:
                            var1 = this;
                            var _closure3_slot0 = var1;
                            var2 = var1.props;
                            var5 = var2.autoplayDelay;
                            var2 = var2.enableSnap;
                            var3 = var1._ignoreNextMomentum;
                            if (var3) {
                                _fun75061_ip = 200;
                                continue _fun75061
                            }
                        case 38:
                            var4 = var1._currentContentOffset;
                            var3 = var1._scrollEndOffset;
                            if (!(var4 !== var3)) {
                                _fun75061_ip = 208;
                                continue _fun75061
                            }
                        case 57:
                            var3 = var1._currentContentOffset;
                            var1._scrollEndOffset = var3;
                            var4 = var1._getActiveItem;
                            var3 = var1._scrollEndOffset;
                            var3 = var4.bind(var1)(var3);
                            var1._scrollEndActive = var3;
                            if (!var2) {
                                _fun75061_ip = 124;
                                continue _fun75061
                            }
                        case 95:
                            var3 = var1._snapScroll;
                            var4 = var1._scrollEndOffset;
                            var2 = var1._scrollStartOffset;
                            var2 = var4 - var2;
                            var2 = var3.bind(var1)(var2);
                        case 124:
                            var2 = var1._autoplay;
                            if (!var2) {
                                _fun75061_ip = 142;
                                continue _fun75061
                            }
                        case 133:
                            var3 = var1._autoplaying;
                            var2 = !var3;
                        case 142:
                            if (!var2) {
                                _fun75061_ip = 208;
                                continue _fun75061
                            }
                        case 145:
                            var2 = global;
                            var6 = var2.clearTimeout;
                            var3 = var1._enableAutoplayTimeout;
                            var4 = undefined;
                            var3 = var6.bind(var4)(var3);
                            var3 = var2.setTimeout;
                            var2 = 50;
                            var2 = var5 + var2;
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = var1.startAutoplay;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var3.bind(var4)(var0, var2);
                            var1._enableAutoplayTimeout = var0;
                            _fun75061_ip = 208;
                            continue _fun75061;
                        case 200:
                            var0 = false;
                            var1._ignoreNextMomentum = var0;
                        case 208:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[47] = var4;
                var4 = {};
                var6 = '_onTouchRelease';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onTouchRelease, environment: var5
                    var0 = this;
                    var0 = var0.props;
                    var0 = var0.enableMomentum;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[48] = var4;
                var4 = {};
                var6 = '_onLayout';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onLayout, environment: var5
                    _fun75064: for (var _fun75064_ip = 0;;) switch (_fun75064_ip) {
                        case 0:
                            var4 = this;
                            var0 = var4.props;
                            var2 = var0.onLayout;
                            var0 = var4._onLayoutInitDone;
                            if (var0) {
                                _fun75064_ip = 33;
                                continue _fun75064
                            }
                        case 23:
                            var0 = true;
                            var4._onLayoutInitDone = var0;
                            _fun75064_ip = 70;
                            continue _fun75064;
                        case 33:
                            var0 = var4._initPositionsAndInterpolators;
                            var0 = var0.bind(var4)();
                            var3 = var4._snapToItem;
                            var9 = var4._activeItem;
                            var10 = var4;
                            var8 = false;
                            var7 = false;
                            var6 = false;
                            var5 = false;
                            var0 = var10[var3](var9, var8, var7, var6, var5, var4);
                        case 70:
                            if (!var2) {
                                _fun75064_ip = 83;
                                continue _fun75064
                            }
                        case 73:
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 83:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[49] = var4;
                var4 = {};
                var6 = '_snapScroll';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _snapScroll, environment: var5
                    _fun75065: for (var _fun75065_ip = 0;;) switch (_fun75065_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = this;
                            var0 = var2.props;
                            var0 = var0.swipeThreshold;
                            var3 = var2._scrollEndActive;
                            var3 = !var3;
                            if (!var3) {
                                _fun75065_ip = 35;
                                continue _fun75065
                            }
                        case 29:
                            var3 = var2._scrollEndActive;
                        case 35:
                            var4 = var2._scrollStartActive;
                            var3 = var2._scrollEndActive;
                            if (!(var4 === var3)) {
                                _fun75065_ip = 162;
                                continue _fun75065
                            }
                        case 51:
                            var3 = 0;
                            if (!(!(var1 > var3))) {
                                _fun75065_ip = 113;
                                continue _fun75065
                            }
                        case 57:
                            if (!(var1 < var3)) {
                                _fun75065_ip = 68;
                                continue _fun75065
                            }
                        case 61:
                            var3 = -var0;
                            if (!(!(var1 < var3))) {
                                _fun75065_ip = 87;
                                continue _fun75065
                            }
                        case 68:
                            var4 = var2._snapToItem;
                            var3 = var2._scrollEndActive;
                            var3 = var4.bind(var2)(var3);
                            _fun75065_ip = 179;
                            continue _fun75065;
                        case 87:
                            var4 = var2._snapToItem;
                            var5 = var2._scrollStartActive;
                            var3 = 1;
                            var3 = var5 - var3;
                            var3 = var4.bind(var2)(var3);
                            _fun75065_ip = 179;
                            continue _fun75065;
                        case 113:
                            if (!(!(var1 > var0))) {
                                _fun75065_ip = 136;
                                continue _fun75065
                            }
                        case 117:
                            var1 = var2._snapToItem;
                            var0 = var2._scrollEndActive;
                            var0 = var1.bind(var2)(var0);
                            _fun75065_ip = 179;
                            continue _fun75065;
                        case 136:
                            var1 = var2._snapToItem;
                            var3 = var2._scrollStartActive;
                            var0 = 1;
                            var0 = var3 + var0;
                            var0 = var1.bind(var2)(var0);
                            _fun75065_ip = 179;
                            continue _fun75065;
                        case 162:
                            var1 = var2._snapToItem;
                            var0 = var2._scrollEndActive;
                            var0 = var1.bind(var2)(var0);
                        case 179:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[50] = var4;
                var4 = {};
                var6 = '_snapToItem';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _snapToItem, environment: var5
                    _fun75066: for (var _fun75066_ip = 0;;) switch (_fun75066_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = this;
                            var0 = undefined;
                            var7 = undefined;
                            var _closure3_slot0 = var5;
                            var _closure3_slot1 = var2;
                            var3 = arguments.length;
                            var6 = 1;
                            var3 = var3 > var6;
                            if (!var3) {
                                _fun75066_ip = 41;
                                continue _fun75066
                            }
                        case 33:
                            var4 = arguments[var6];
                            var3 = var0 !== var4;
                        case 41:
                            var10 = !var3;
                            if (!var3) {
                                _fun75066_ip = 51;
                                continue _fun75066
                            }
                        case 47:
                            var10 = arguments[var6];
                        case 51:
                            var4 = arguments.length;
                            var3 = 2;
                            var4 = var4 > var3;
                            if (!var4) {
                                _fun75066_ip = 72;
                                continue _fun75066
                            }
                        case 64:
                            var8 = arguments[var3];
                            var4 = var0 !== var8;
                        case 72:
                            var11 = !var4;
                            if (!var4) {
                                _fun75066_ip = 82;
                                continue _fun75066
                            }
                        case 78:
                            var11 = arguments[var3];
                        case 82:
                            var3 = arguments.length;
                            var4 = 3;
                            var3 = var3 > var4;
                            if (!var3) {
                                _fun75066_ip = 103;
                                continue _fun75066
                            }
                        case 95:
                            var8 = arguments[var4];
                            var3 = var0 !== var8;
                        case 103:
                            if (!var3) {
                                _fun75066_ip = 110;
                                continue _fun75066
                            }
                        case 106:
                            var3 = arguments[var4];
                        case 110:
                            var _closure3_slot2 = var3;
                            var8 = arguments.length;
                            var4 = 4;
                            var8 = var8 > var4;
                            if (!var8) {
                                _fun75066_ip = 135;
                                continue _fun75066
                            }
                        case 127:
                            var9 = arguments[var4];
                            var8 = var0 !== var9;
                        case 135:
                            var12 = !var8;
                            if (!var8) {
                                _fun75066_ip = 145;
                                continue _fun75066
                            }
                        case 141:
                            var12 = arguments[var4];
                        case 145:
                            var4 = var2.props;
                            var7 = var4.enableMomentum;
                            var8 = var4.onSnapToItem;
                            var9 = var4.onBeforeSnapToItem;
                            var4 = var2._getCustomDataLength;
                            var4 = var4.bind(var2)();
                            var13 = var2._getWrappedRef;
                            var14 = var13.bind(var2)();
                            var13 = var4;
                            if (!var13) {
                                _fun75066_ip = 197;
                                continue _fun75066
                            }
                        case 194:
                            var13 = var14;
                        case 197:
                            if (!var13) {
                                _fun75066_ip = 499;
                                continue _fun75066
                            }
                        case 203:
                            if (!var5) {
                                _fun75066_ip = 239;
                                continue _fun75066
                            }
                        case 206:
                            var13 = 0;
                            if (!(!(var5 < var13))) {
                                _fun75066_ip = 239;
                                continue _fun75066
                            }
                        case 212:
                            var13 = var4 > var13;
                            if (!var13) {
                                _fun75066_ip = 223;
                                continue _fun75066
                            }
                        case 219:
                            var13 = var5 >= var4;
                        case 223:
                            if (!var13) {
                                _fun75066_ip = 247;
                                continue _fun75066
                            }
                        case 226:
                            var13 = var4 - var6;
                            _closure3_slot0 = var13;
                            var5 = var13;
                            _fun75066_ip = 247;
                            continue _fun75066;
                        case 239:
                            var13 = 0;
                            _closure3_slot0 = var13;
                            var5 = 0;
                        case 247:
                            var13 = var2._previousActiveItem;
                            if (!(var5 !== var13)) {
                                _fun75066_ip = 316;
                                continue _fun75066
                            }
                        case 257:
                            var2._previousActiveItem = var5;
                            if (!var12) {
                                _fun75066_ip = 276;
                                continue _fun75066
                            }
                        case 266:
                            var13 = var2._canLockScroll;
                            var12 = var13.bind(var2)();
                        case 276:
                            if (!var12) {
                                _fun75066_ip = 291;
                                continue _fun75066
                            }
                        case 279:
                            var12 = var2._lockScroll;
                            var12 = var12.bind(var2)();
                        case 291:
                            if (!var11) {
                                _fun75066_ip = 316;
                                continue _fun75066
                            }
                        case 294:
                            if (!var9) {
                                _fun75066_ip = 305;
                                continue _fun75066
                            }
                        case 297:
                            var9 = true;
                            var2._canFireBeforeCallback = var9;
                        case 305:
                            if (!var8) {
                                _fun75066_ip = 316;
                                continue _fun75066
                            }
                        case 308:
                            var8 = true;
                            var2._canFireCallback = var8;
                        case 316:
                            var2._itemToSnapTo = var5;
                            var8 = var2._positions;
                            var8 = var8[var5];
                            if (!var8) {
                                _fun75066_ip = 350;
                                continue _fun75066
                            }
                        case 335:
                            var9 = var2._positions;
                            var9 = var9[var5];
                            var8 = var9.start;
                        case 350:
                            var2._scrollOffsetRef = var8;
                            var8 = false;
                            var2._onScrollTriggered = var8;
                            var8 = var2._scrollOffsetRef;
                            if (var8) {
                                _fun75066_ip = 385;
                                continue _fun75066
                            }
                        case 373:
                            var11 = var2._scrollOffsetRef;
                            var9 = 0;
                            var8 = var9 === var11;
                        case 385:
                            if (!var8) {
                                _fun75066_ip = 499;
                                continue _fun75066
                            }
                        case 388:
                            var9 = var2._scrollTo;
                            var8 = var2._scrollOffsetRef;
                            var8 = var9.bind(var2)(var8, var10);
                            var8 = var2._currentContentOffset;
                            var2._scrollEndOffset = var8;
                            if (!var7) {
                                _fun75066_ip = 499;
                                continue _fun75066
                            }
                        case 421:
                            if (var3) {
                                _fun75066_ip = 432;
                                continue _fun75066
                            }
                        case 424:
                            var3 = true;
                            var2._ignoreNextMomentum = var3;
                        case 432:
                            var3 = 0;
                            var3 = var3 !== var5;
                            if (!var3) {
                                _fun75066_ip = 449;
                                continue _fun75066
                            }
                        case 441:
                            var4 = var4 - var6;
                            var3 = var5 !== var4;
                        case 449:
                            if (var3) {
                                _fun75066_ip = 499;
                                continue _fun75066
                            }
                        case 452:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var4 = var2._edgeItemTimeout;
                            var4 = var5.bind(var0)(var4);
                            var4 = var3.setTimeout;
                            var3 = function() { // Environment: var1
                                _fun75067: for (var _fun75067_ip = 0;;) switch (_fun75067_ip) {
                                    case 0:
                                        var1 = _closure3_slot2;
                                        if (var1) {
                                            _fun75067_ip = 28;
                                            continue _fun75067
                                        }
                                    case 10:
                                        var3 = _closure3_slot0;
                                        var2 = _closure3_slot1;
                                        var2 = var2._activeItem;
                                        var1 = var3 !== var2;
                                    case 28:
                                        if (var1) {
                                            _fun75067_ip = 41;
                                            continue _fun75067
                                        }
                                    case 31:
                                        var2 = _closure3_slot1;
                                        var1 = var2._onScrollTriggered;
                                    case 41:
                                        if (var1) {
                                            _fun75067_ip = 58;
                                            continue _fun75067
                                        }
                                    case 44:
                                        var1 = _closure3_slot1;
                                        var0 = var1._onScroll;
                                        var0 = var0.bind(var1)();
                                    case 58:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = 250;
                            var1 = var4.bind(var0)(var3, var1);
                            var2._edgeItemTimeout = var1;
                        case 499:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[51] = var4;
                var4 = {};
                var6 = '_onBeforeSnap';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onBeforeSnap, environment: var5
                    _fun75068: for (var _fun75068_ip = 0;;) switch (_fun75068_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.props;
                            var2 = var0.onBeforeSnapToItem;
                            var0 = var1._carouselRef;
                            if (!var0) {
                                _fun75068_ip = 44;
                                continue _fun75068
                            }
                        case 23:
                            var0 = false;
                            var1._canFireBeforeCallback = var0;
                            if (!var2) {
                                _fun75068_ip = 44;
                                continue _fun75068
                            }
                        case 34:
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[52] = var4;
                var4 = {};
                var6 = '_onSnap';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _onSnap, environment: var5
                    _fun75069: for (var _fun75069_ip = 0;;) switch (_fun75069_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.props;
                            var2 = var0.onSnapToItem;
                            var0 = var1._carouselRef;
                            if (!var0) {
                                _fun75069_ip = 44;
                                continue _fun75069
                            }
                        case 23:
                            var0 = false;
                            var1._canFireCallback = var0;
                            if (!var2) {
                                _fun75069_ip = 44;
                                continue _fun75069
                            }
                        case 34:
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[53] = var4;
                var4 = {};
                var6 = 'startAutoplay';
                var4.key = var6;
                var6 = function() { // Original name: startAutoplay, environment: var5
                    _fun75070: for (var _fun75070_ip = 0;;) switch (_fun75070_ip) {
                        case 0:
                            var1 = this;
                            var _closure3_slot0 = var1;
                            var2 = var1.props;
                            var3 = var2.autoplayInterval;
                            var _closure3_slot1 = var3;
                            var4 = var2.autoplayDelay;
                            var2 = true;
                            var1._autoplay = var2;
                            var2 = var1._autoplaying;
                            if (var2) {
                                _fun75070_ip = 93;
                                continue _fun75070
                            }
                        case 47:
                            var2 = global;
                            var6 = var2.clearTimeout;
                            var5 = var1._autoplayTimeout;
                            var3 = undefined;
                            var5 = var6.bind(var3)(var5);
                            var2 = var2.setTimeout;
                            var0 = function() { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = true;
                                var2._autoplaying = var1;
                                var1 = global;
                                var4 = var1.setInterval;
                                var3 = _closure3_slot1;
                                var0 = undefined;
                                var1 = function() { // Environment: var1
                                    _fun75072: for (var _fun75072_ip = 0;;) switch (_fun75072_ip) {
                                        case 0:
                                            var1 = _closure3_slot0;
                                            var1 = var1._autoplaying;
                                            if (!var1) {
                                                _fun75072_ip = 30;
                                                continue _fun75072
                                            }
                                        case 16:
                                            var1 = _closure3_slot0;
                                            var0 = var1.snapToNext;
                                            var0 = var0.bind(var1)();
                                        case 30:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var4.bind(var0)(var1, var3);
                                var2._autoplayInterval = var1;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var0, var4);
                            var1._autoplayTimeout = var0;
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[54] = var4;
                var4 = {};
                var6 = 'pauseAutoPlay';
                var4.key = var6;
                var6 = function() { // Original name: pauseAutoPlay, environment: var5
                    var1 = this;
                    var0 = false;
                    var1._autoplaying = var0;
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._autoplayTimeout;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var4 = var2.clearTimeout;
                    var3 = var1._enableAutoplayTimeout;
                    var3 = var4.bind(var0)(var3);
                    var2 = var2.clearInterval;
                    var1 = var1._autoplayInterval;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[55] = var4;
                var4 = {};
                var6 = 'stopAutoplay';
                var4.key = var6;
                var6 = function() { // Original name: stopAutoplay, environment: var5
                    var1 = this;
                    var0 = false;
                    var1._autoplay = var0;
                    var0 = var1.pauseAutoPlay;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[56] = var4;
                var4 = {};
                var6 = 'snapToItem';
                var4.key = var6;
                var6 = function(arg0) { // Original name: snapToItem, environment: var5
                    _fun75075: for (var _fun75075_ip = 0;;) switch (_fun75075_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = this;
                            var0 = undefined;
                            var6 = undefined;
                            var3 = arguments.length;
                            var1 = 1;
                            var3 = var3 > var1;
                            if (!var3) {
                                _fun75075_ip = 31;
                                continue _fun75075
                            }
                        case 23:
                            var4 = arguments[var1];
                            var3 = var0 !== var4;
                        case 31:
                            var4 = !var3;
                            if (!var3) {
                                _fun75075_ip = 41;
                                continue _fun75075
                            }
                        case 37:
                            var4 = arguments[var1];
                        case 41:
                            var3 = arguments.length;
                            var1 = 2;
                            var7 = var3 > var1;
                            if (!var7) {
                                _fun75075_ip = 62;
                                continue _fun75075
                            }
                        case 54:
                            var3 = arguments[var1];
                            var7 = var0 !== var3;
                        case 62:
                            var3 = !var7;
                            if (!var7) {
                                _fun75075_ip = 72;
                                continue _fun75075
                            }
                        case 68:
                            var3 = arguments[var1];
                        case 72:
                            var1 = !var2;
                            if (var1) {
                                _fun75075_ip = 84;
                                continue _fun75075
                            }
                        case 78:
                            var6 = 0;
                            var1 = var2 < var6;
                        case 84:
                            if (!var1) {
                                _fun75075_ip = 89;
                                continue _fun75075
                            }
                        case 87:
                            var2 = 0;
                        case 89:
                            var1 = var5._getPositionIndex;
                            var2 = var1.bind(var5)(var2);
                            var1 = var5._activeItem;
                            if (!(var2 !== var1)) {
                                _fun75075_ip = 123;
                                continue _fun75075
                            }
                        case 110:
                            var1 = var5._snapToItem;
                            var1 = var1.bind(var5)(var2, var4, var3);
                        case 123:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[57] = var4;
                var4 = {};
                var6 = 'snapToNext';
                var4.key = var6;
                var6 = function() { // Original name: snapToNext, environment: var5
                    _fun75076: for (var _fun75076_ip = 0;;) switch (_fun75076_ip) {
                        case 0:
                            var5 = this;
                            var0 = undefined;
                            var1 = undefined;
                            var2 = arguments.length;
                            var6 = 0;
                            var2 = var2 > var6;
                            if (!var2) {
                                _fun75076_ip = 27;
                                continue _fun75076
                            }
                        case 19:
                            var3 = arguments[var6];
                            var2 = var0 !== var3;
                        case 27:
                            var4 = !var2;
                            if (!var2) {
                                _fun75076_ip = 37;
                                continue _fun75076
                            }
                        case 33:
                            var4 = arguments[var6];
                        case 37:
                            var2 = arguments.length;
                            var7 = 1;
                            var2 = var2 > var7;
                            if (!var2) {
                                _fun75076_ip = 58;
                                continue _fun75076
                            }
                        case 50:
                            var3 = arguments[var7];
                            var2 = var0 !== var3;
                        case 58:
                            var3 = !var2;
                            if (!var2) {
                                _fun75076_ip = 68;
                                continue _fun75076
                            }
                        case 64:
                            var3 = arguments[var7];
                        case 68:
                            var1 = var5._getCustomDataLength;
                            var1 = var1.bind(var5)();
                            var2 = var5._activeItem;
                            var2 = var2 + var7;
                            var1 = var1 - var7;
                            if (!(var2 > var1)) {
                                _fun75076_ip = 113;
                                continue _fun75076
                            }
                        case 96:
                            var1 = var5._enableLoop;
                            var1 = var1.bind(var5)();
                            var2 = 0;
                            if (var1) {
                                _fun75076_ip = 113;
                                continue _fun75076
                            }
                        case 111:
                            return var0;
                        case 113:
                            var1 = var5._snapToItem;
                            var1 = var1.bind(var5)(var2, var4, var3);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[58] = var4;
                var4 = {};
                var6 = 'snapToPrev';
                var4.key = var6;
                var6 = function() { // Original name: snapToPrev, environment: var5
                    _fun75077: for (var _fun75077_ip = 0;;) switch (_fun75077_ip) {
                        case 0:
                            var5 = this;
                            var0 = undefined;
                            var1 = undefined;
                            var2 = arguments.length;
                            var7 = 0;
                            var2 = var2 > var7;
                            if (!var2) {
                                _fun75077_ip = 27;
                                continue _fun75077
                            }
                        case 19:
                            var3 = arguments[var7];
                            var2 = var0 !== var3;
                        case 27:
                            var4 = !var2;
                            if (!var2) {
                                _fun75077_ip = 37;
                                continue _fun75077
                            }
                        case 33:
                            var4 = arguments[var7];
                        case 37:
                            var2 = arguments.length;
                            var6 = 1;
                            var2 = var2 > var6;
                            if (!var2) {
                                _fun75077_ip = 58;
                                continue _fun75077
                            }
                        case 50:
                            var3 = arguments[var6];
                            var2 = var0 !== var3;
                        case 58:
                            var3 = !var2;
                            if (!var2) {
                                _fun75077_ip = 68;
                                continue _fun75077
                            }
                        case 64:
                            var3 = arguments[var6];
                        case 68:
                            var1 = var5._getCustomDataLength;
                            var1 = var1.bind(var5)();
                            var2 = var5._activeItem;
                            var2 = var2 - var6;
                            if (!(var2 < var7)) {
                                _fun75077_ip = 111;
                                continue _fun75077
                            }
                        case 92:
                            var7 = var5._enableLoop;
                            var7 = var7.bind(var5)();
                            if (var7) {
                                _fun75077_ip = 107;
                                continue _fun75077
                            }
                        case 105:
                            return var0;
                        case 107:
                            var2 = var1 - var6;
                        case 111:
                            var1 = var5._snapToItem;
                            var1 = var1.bind(var5)(var2, var4, var3);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[59] = var4;
                var4 = {};
                var6 = 'triggerRenderingHack';
                var4.key = var6;
                var6 = function(arg0) { // Original name: triggerRenderingHack, environment: var5
                    _fun75078: for (var _fun75078_ip = 0;;) switch (_fun75078_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = this;
                            var0 = global;
                            var2 = var0.Date;
                            var0 = var2.now;
                            var2 = var0.bind(var2)();
                            var0 = var3._lastScrollDate;
                            var2 = var2 - var0;
                            var0 = 500;
                            if (!(!(var2 < var0))) {
                                _fun75078_ip = 97;
                                continue _fun75078
                            }
                        case 43:
                            var0 = var3._currentContentOffset;
                            if (var0) {
                                _fun75078_ip = 58;
                                continue _fun75078
                            }
                        case 52:
                            var2 = 0;
                            if (!(var2 === var0)) {
                                _fun75078_ip = 97;
                                continue _fun75078
                            }
                        case 58:
                            if (var1) {
                                _fun75078_ip = 79;
                                continue _fun75078
                            }
                        case 61:
                            var2 = -1;
                            var4 = 0;
                            if (!(var4 === var0)) {
                                _fun75078_ip = 76;
                                continue _fun75078
                            }
                        case 73:
                            var2 = 1;
                        case 76:
                            var1 = var2;
                        case 79:
                            var2 = var3._scrollTo;
                            var1 = var0 + var1;
                            var0 = false;
                            var0 = var2.bind(var3)(var1, var0);
                        case 97:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[60] = var4;
                var4 = {};
                var6 = '_getSlideInterpolatedStyle';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: _getSlideInterpolatedStyle, environment: var5
                    _fun75079: for (var _fun75079_ip = 0;;) switch (_fun75079_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var1 = this;
                            var0 = var1.props;
                            var8 = var0.layoutCardOffset;
                            var3 = var0.slideInterpolatedStyle;
                            if (var3) {
                                _fun75079_ip = 241;
                                continue _fun75079
                            }
                        case 32:
                            var0 = var1._shouldUseTinderLayout;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun75079_ip = 190;
                                continue _fun75079
                            }
                        case 51:
                            var0 = var1._shouldUseStackLayout;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun75079_ip = 139;
                                continue _fun75079
                            }
                        case 64:
                            var0 = var1._shouldUseShiftLayout;
                            var0 = var0.bind(var1)();
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 12;
                            var7 = var7[var6];
                            var6 = undefined;
                            var9 = var9.bind(var6)(var7);
                            if (var0) {
                                _fun75079_ip = 119;
                                continue _fun75079
                            }
                        case 99:
                            var6 = var9.defaultAnimatedStyles;
                            var0 = var1.props;
                            var0 = var6.bind(var9)(var5, var4, var0);
                            _fun75079_ip = 137;
                            continue _fun75079;
                        case 119:
                            var7 = var9.shiftAnimatedStyles;
                            var6 = var1.props;
                            var0 = var7.bind(var9)(var5, var4, var6);
                        case 137:
                            _fun75079_ip = 188;
                            continue _fun75079;
                        case 139:
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 12;
                            var7 = var7[var6];
                            var6 = undefined;
                            var9 = var9.bind(var6)(var7);
                            var7 = var9.stackAnimatedStyles;
                            var11 = var1.props;
                            var14 = var9;
                            var13 = var5;
                            var12 = var4;
                            var10 = var8;
                            var0 = var14[var7](var13, var12, var11, var10, var9);
                        case 188:
                            _fun75079_ip = 239;
                            continue _fun75079;
                        case 190:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 12;
                            var6 = var6[var2];
                            var2 = undefined;
                            var7 = var7.bind(var2)(var6);
                            var6 = var7.tinderAnimatedStyles;
                            var11 = var1.props;
                            var14 = var7;
                            var13 = var5;
                            var12 = var4;
                            var10 = var8;
                            var0 = var14[var6](var13, var12, var11, var10, var9);
                        case 239:
                            _fun75079_ip = 255;
                            continue _fun75079;
                        case 241:
                            var2 = var1.props;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var5, var4, var2);
                        case 255:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[61] = var4;
                var4 = {};
                var6 = '_renderItem';
                var4.key = var6;
                var6 = function(arg0) { // Original name: _renderItem, environment: var5
                    _fun75080: for (var _fun75080_ip = 0;;) switch (_fun75080_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = this;
                            var12 = var0.item;
                            var11 = var0.index;
                            var0 = var6.state;
                            var0 = var0.interpolators;
                            var2 = var6.props;
                            var1 = var2.hasParallaxImages;
                            var7 = var2.itemWidth;
                            var4 = var2.itemHeight;
                            var5 = var2.keyExtractor;
                            var10 = var2.renderItem;
                            var15 = var2.sliderHeight;
                            var16 = var2.sliderWidth;
                            var13 = var2.slideStyle;
                            var14 = var2.vertical;
                            var9 = var0;
                            if (!var9) {
                                _fun75080_ip = 96;
                                continue _fun75080
                            }
                        case 92:
                            var9 = var0[var11];
                        case 96:
                            if (var9) {
                                _fun75080_ip = 109;
                                continue _fun75080
                            }
                        case 99:
                            var0 = 0;
                            if (!(var0 !== var9)) {
                                _fun75080_ip = 109;
                                continue _fun75080
                            }
                        case 105:
                            var0 = null;
                            return var0;
                        case 109:
                            var0 = var6._shouldAnimateSlides;
                            var2 = var0.bind(var6)();
                            if (var2) {
                                _fun75080_ip = 131;
                                continue _fun75080
                            }
                        case 125:
                            var3 = _closure1_slot12;
                            _fun75080_ip = 140;
                            continue _fun75080;
                        case 131:
                            var8 = _closure1_slot10;
                            var3 = var8.View;
                        case 140:
                            if (var2) {
                                _fun75080_ip = 147;
                                continue _fun75080
                            }
                        case 143:
                            var8 = {};
                            _fun75080_ip = 161;
                            continue _fun75080;
                        case 147:
                            var2 = var6._getSlideInterpolatedStyle;
                            var8 = var2.bind(var6)(var11, var9);
                        case 161:
                            var2 = undefined;
                            var9 = undefined;
                            if (!var1) {
                                _fun75080_ip = 220;
                                continue _fun75080
                            }
                        case 168:
                            var1 = {};
                            var17 = var6._scrollPos;
                            var1.scrollPosition = var17;
                            var17 = var6._carouselRef;
                            var1.carouselRef = var17;
                            var1.vertical = var14;
                            var1.sliderWidth = var16;
                            var1.sliderHeight = var15;
                            var1.itemWidth = var7;
                            var1.itemHeight = var4;
                            var9 = var1;
                        case 220:
                            var1 = {};
                            if (var14) {
                                _fun75080_ip = 234;
                                continue _fun75080
                            }
                        case 225:
                            var1.width = var7;
                            var14 = var1;
                            _fun75080_ip = 241;
                            continue _fun75080;
                        case 234:
                            var1.height = var4;
                            var14 = var1;
                        case 241:
                            var1 = var6._needsScrollView;
                            var1 = var1.bind(var6)();
                            if (var1) {
                                _fun75080_ip = 258;
                                continue _fun75080
                            }
                        case 254:
                            var7 = {};
                            _fun75080_ip = 290;
                            continue _fun75080;
                        case 258:
                            var1 = {};
                            if (var5) {
                                _fun75080_ip = 277;
                                continue _fun75080
                            }
                        case 263:
                            var4 = var6._getKeyExtractor;
                            var4 = var4.bind(var6)(var12, var11);
                            _fun75080_ip = 283;
                            continue _fun75080;
                        case 277:
                            var4 = var5.bind(var2)(var12, var11);
                        case 283:
                            var1.key = var4;
                            var7 = var1;
                        case 290:
                            var1 = _closure1_slot13;
                            var0 = global;
                            var6 = var0.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var0 = new Array(3);
                            var0[0] = var14;
                            var0[1] = var13;
                            var0[2] = var8;
                            var4.style = var0;
                            var0 = 'box-none';
                            var4.pointerEvents = var0;
                            var0 = {};
                            var8 = {};
                            var8.item = var12;
                            var8.index = var11;
                            var8 = var10.bind(var2)(var8, var9);
                            var0.children = var8;
                            var0 = var5.bind(var6)(var4, var7, var0);
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[62] = var4;
                var4 = {};
                var6 = '_getComponentOverridableProps';
                var4.key = var6;
                var6 = function() { // Original name: _getComponentOverridableProps, environment: var5
                    _fun75081: for (var _fun75081_ip = 0;;) switch (_fun75081_ip) {
                        case 0:
                            var5 = this;
                            var0 = var5.props;
                            var6 = var0.enableMomentum;
                            var9 = var0.itemWidth;
                            var8 = var0.itemHeight;
                            var7 = var0.loopClonesPerSide;
                            var1 = var0.sliderWidth;
                            var4 = var0.sliderHeight;
                            var10 = var0.vertical;
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.ceil;
                            if (var10) {
                                _fun75081_ip = 73;
                                continue _fun75081
                            }
                        case 67:
                            var1 = var1 / var9;
                            _fun75081_ip = 77;
                            continue _fun75081;
                        case 73:
                            var1 = var4 / var8;
                        case 77:
                            var1 = var2.bind(var3)(var1);
                            var3 = 1;
                            var4 = var1 + var3;
                            var1 = var5._enableLoop;
                            var8 = var1.bind(var5)();
                            var1 = 2;
                            var2 = var1;
                            if (!var8) {
                                _fun75081_ip = 111;
                                continue _fun75081
                            }
                        case 108:
                            var2 = var7;
                        case 111:
                            var2 = var1 * var2;
                            var2 = var4 + var2;
                            var1 = var1 * var2;
                            var1 = var3 + var1;
                            var3 = var5._needsScrollView;
                            var3 = var3.bind(var5)();
                            if (var3) {
                                _fun75081_ip = 159;
                                continue _fun75081
                            }
                        case 140:
                            var3 = {};
                            var3.initialNumToRender = var2;
                            var3.maxToRenderPerBatch = var1;
                            var3.windowSize = var1;
                            _fun75081_ip = 161;
                            continue _fun75081;
                        case 159:
                            var3 = {};
                        case 161:
                            var2 = var0.Object;
                            var1 = var2.assign;
                            var0 = {
                                'decelerationRate': null,
                                'showsHorizontalScrollIndicator': false,
                                'showsVerticalScrollIndicator': false,
                                'overScrollMode': 'never',
                                'automaticallyAdjustContentInsets': false,
                                'directionalLockEnabled': true,
                                'pinchGestureEnabled': false,
                                'scrollsToTop': false
                            };
                            var4 = 'fast';
                            if (!var6) {
                                _fun75081_ip = 205;
                                continue _fun75081
                            }
                        case 195:
                            var4 = 0.9;
                        case 205:
                            var0.decelerationRate = var4;
                            var4 = var5._needsScrollView;
                            var4 = var4.bind(var5)();
                            var4 = !var4;
                            var0.removeClippedSubviews = var4;
                            var4 = var5._needsRTLAdaptations;
                            var4 = var4.bind(var5)();
                            var0.inverted = var4;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[63] = var4;
                var4 = {};
                var6 = '_getComponentStaticProps';
                var4.key = var6;
                var6 = function() { // Original name: _getComponentStaticProps, environment: var5
                    _fun75082: for (var _fun75082_ip = 0;;) switch (_fun75082_ip) {
                        case 0:
                            var4 = this;
                            var _closure3_slot0 = var4;
                            var0 = var4.state;
                            var3 = var0.hideCarousel;
                            var5 = var4.props;
                            var9 = var5.containerCustomStyle;
                            var1 = var5.contentContainerCustomStyle;
                            var0 = var5.keyExtractor;
                            var2 = var5.sliderWidth;
                            var6 = var5.sliderHeight;
                            var7 = var5.style;
                            var5 = var5.vertical;
                            if (var9) {
                                _fun75082_ip = 72;
                                continue _fun75082
                            }
                        case 69:
                            var9 = var7;
                        case 72:
                            if (var9) {
                                _fun75082_ip = 77;
                                continue _fun75082
                            }
                        case 75:
                            var9 = {};
                        case 77:
                            var7 = new Array(3);
                            var7[0] = var9;
                            if (var3) {
                                _fun75082_ip = 92;
                                continue _fun75082
                            }
                        case 88:
                            var3 = {};
                            _fun75082_ip = 103;
                            continue _fun75082;
                        case 92:
                            var9 = {};
                            var10 = 0;
                            var9.opacity = var10;
                            var3 = var9;
                        case 103:
                            var7[1] = var3;
                            var3 = {};
                            if (var5) {
                                _fun75082_ip = 148;
                                continue _fun75082
                            }
                        case 112:
                            var3.width = var2;
                            var2 = var4._needsRTLAdaptations;
                            var9 = var2.bind(var4)();
                            var2 = 'row';
                            if (!var9) {
                                _fun75082_ip = 139;
                                continue _fun75082
                            }
                        case 133:
                            var2 = 'row-reverse';
                        case 139:
                            var3.flexDirection = var2;
                            var2 = var3;
                            _fun75082_ip = 163;
                            continue _fun75082;
                        case 148:
                            var3.height = var6;
                            var6 = 'column';
                            var3.flexDirection = var6;
                            var2 = var3;
                        case 163:
                            var7[2] = var2;
                            var3 = {};
                            var2 = var4._getContainerInnerMargin;
                            var6 = var2.bind(var4)();
                            if (var5) {
                                _fun75082_ip = 210;
                                continue _fun75082
                            }
                        case 182:
                            var3.paddingLeft = var6;
                            var9 = var4._getContainerInnerMargin;
                            var2 = true;
                            var2 = var9.bind(var4)(var2);
                            var3.paddingRight = var2;
                            var2 = var3;
                            _fun75082_ip = 236;
                            continue _fun75082;
                        case 210:
                            var3.paddingTop = var6;
                            var9 = var4._getContainerInnerMargin;
                            var6 = true;
                            var6 = var9.bind(var4)(var6);
                            var3.paddingBottom = var6;
                            var2 = var3;
                        case 236:
                            var6 = new Array(2);
                            var6[0] = var2;
                            if (var1) {
                                _fun75082_ip = 249;
                                continue _fun75082
                            }
                        case 247:
                            var1 = {};
                        case 249:
                            var6[1] = var1;
                            var1 = var4._needsScrollView;
                            var1 = var1.bind(var4)();
                            if (var1) {
                                _fun75082_ip = 303;
                                continue _fun75082
                            }
                        case 266:
                            var3 = {};
                            var1 = var4._renderItem;
                            var3.renderItem = var1;
                            var1 = 1;
                            var3.numColumns = var1;
                            if (var0) {
                                _fun75082_ip = 296;
                                continue _fun75082
                            }
                        case 290:
                            var0 = var4._getKeyExtractor;
                        case 296:
                            var3.keyExtractor = var0;
                            _fun75082_ip = 305;
                            continue _fun75082;
                        case 303:
                            var3 = {};
                        case 305:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.assign;
                            var0 = {};
                            var8 = function(arg0) { // Original name: ref, environment: var8
                                var0 = arg0;
                                var1 = _closure3_slot0;
                                var1._carouselRef = var0;
                                return var0;
                            };
                            var0.ref = var8;
                            var8 = var4._getCustomData;
                            var8 = var8.bind(var4)();
                            var0.data = var8;
                            var0.style = var7;
                            var0.contentContainerStyle = var6;
                            var5 = !var5;
                            var0.horizontal = var5;
                            var5 = 1;
                            var0.scrollEventThrottle = var5;
                            var5 = var4._onScrollHandler;
                            var0.onScroll = var5;
                            var5 = var4._onScrollBeginDrag;
                            var0.onScrollBeginDrag = var5;
                            var5 = var4._onScrollEndDrag;
                            var0.onScrollEndDrag = var5;
                            var5 = var4._onMomentumScrollEnd;
                            var0.onMomentumScrollEnd = var5;
                            var5 = var4._onTouchRelease;
                            var0.onResponderRelease = var5;
                            var5 = var4._onStartShouldSetResponderCapture;
                            var0.onStartShouldSetResponderCapture = var5;
                            var5 = var4._onTouchStart;
                            var0.onTouchStart = var5;
                            var5 = var4._onScrollEnd;
                            var0.onTouchEnd = var5;
                            var4 = var4._onLayout;
                            var0.onLayout = var4;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[64] = var4;
                var4 = {};
                var6 = 'render';
                var4.key = var6;
                var5 = function() { // Original name: render, environment: var5
                    _fun75084: for (var _fun75084_ip = 0;;) switch (_fun75084_ip) {
                        case 0:
                            var9 = this;
                            var _closure3_slot0 = var9;
                            var3 = var9.props;
                            var2 = var3.data;
                            var0 = var3.renderItem;
                            var4 = var3.useScrollView;
                            if (!var2) {
                                _fun75084_ip = 37;
                                continue _fun75084
                            }
                        case 34:
                            if (var0) {
                                _fun75084_ip = 41;
                                continue _fun75084
                            }
                        case 37:
                            var0 = null;
                            return var0;
                        case 41:
                            var2 = global;
                            var8 = var2.Object;
                            var7 = var8.assign;
                            var0 = var9._getComponentOverridableProps;
                            var12 = var0.bind(var9)();
                            var11 = var9.props;
                            var0 = var9._getComponentStaticProps;
                            var10 = var0.bind(var9)();
                            var13 = {};
                            var14 = var8;
                            var7 = var14[var7](var13, var12, var11, var10, var9);
                            var3 = 'function';
                            var0 = typeof var4;
                            if (!(var3 !== var0)) {
                                _fun75084_ip = 110;
                                continue _fun75084
                            }
                        case 103:
                            var4 = _closure1_slot15;
                        case 110:
                            var0 = var9._needsScrollView;
                            var5 = var0.bind(var9)();
                            var3 = _closure1_slot13;
                            if (var5) {
                                _fun75084_ip = 163;
                                continue _fun75084
                            }
                        case 130:
                            var6 = _closure1_slot14;
                            var8 = var2.Object;
                            var5 = var8.assign;
                            var0 = {};
                            var5 = var5.bind(var8)(var0, var7);
                            var0 = undefined;
                            var0 = var3.bind(var0)(var6, var5);
                            _fun75084_ip = 224;
                            continue _fun75084;
                        case 163:
                            var6 = var2.Object;
                            var5 = var6.assign;
                            var2 = {};
                            var8 = var9._getCustomData;
                            var9 = var8.bind(var9)();
                            var8 = var9.map;
                            var1 = function(arg0, arg1) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = var2._renderItem;
                                var0 = {};
                                var3 = arg0;
                                var0.item = var3;
                                var3 = arg1;
                                var0.index = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var8.bind(var9)(var1);
                            var2.children = var1;
                            var1 = {};
                            var2 = var5.bind(var6)(var1, var7, var2);
                            var1 = undefined;
                            var0 = var3.bind(var1)(var4, var2);
                        case 224:
                            return var0;
                    }
                };
                var4.value = var5;
                var0[65] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var3 = {};
            var4 = 13;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.array;
            var8 = var8.isRequired;
            var3.data = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.func;
            var8 = var8.isRequired;
            var3.renderItem = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.itemWidth = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.itemHeight = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.sliderWidth = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.sliderHeight = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.string;
            var3.activeAnimationType = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.object;
            var3.activeAnimationOptions = var8;
            var8 = var7[var4];
            var11 = var6.bind(var0)(var8);
            var10 = var11.oneOf;
            var8 = ['center', 'end', 'start'];
            var8 = var10.bind(var11)(var8);
            var3.activeSlideAlignment = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.activeSlideOffset = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.apparitionDelay = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.bool;
            var3.autoplay = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.autoplayDelay = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.autoplayInterval = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.callbackOffsetMargin = var8;
            var8 = 10;
            var10 = var7[var8];
            var10 = var9.bind(var0)(var10);
            var10 = var10.ViewPropTypes;
            var10 = var10.style;
            var3.containerCustomStyle = var10;
            var10 = var7[var8];
            var10 = var9.bind(var0)(var10);
            var10 = var10.ViewPropTypes;
            var10 = var10.style;
            var3.contentContainerCustomStyle = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.bool;
            var3.enableMomentum = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.bool;
            var3.enableSnap = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.number;
            var3.firstItem = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.bool;
            var3.hasParallaxImages = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.number;
            var3.inactiveSlideOpacity = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.number;
            var3.inactiveSlideScale = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.number;
            var3.inactiveSlideShift = var10;
            var10 = var7[var4];
            var12 = var6.bind(var0)(var10);
            var11 = var12.oneOf;
            var10 = ['default', 'stack', 'tinder'];
            var10 = var11.bind(var12)(var10);
            var3.layout = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.number;
            var3.layoutCardOffset = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.number;
            var3.lockScrollTimeoutDuration = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.bool;
            var3.lockScrollWhileSnapping = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.bool;
            var3.loop = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.number;
            var3.loopClonesPerSide = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.bool;
            var3.scrollEnabled = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.func;
            var3.scrollInterpolator = var10;
            var10 = var7[var4];
            var10 = var6.bind(var0)(var10);
            var10 = var10.func;
            var3.slideInterpolatedStyle = var10;
            var8 = var7[var8];
            var8 = var9.bind(var0)(var8);
            var8 = var8.ViewPropTypes;
            var8 = var8.style;
            var3.slideStyle = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.bool;
            var3.shouldOptimizeUpdates = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.number;
            var3.swipeThreshold = var8;
            var8 = var7[var4];
            var10 = var6.bind(var0)(var8);
            var9 = var10.oneOfType;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var11 = var8.bool;
            var8 = new Array(2);
            var8[0] = var11;
            var11 = var7[var4];
            var11 = var6.bind(var0)(var11);
            var11 = var11.func;
            var8[1] = var11;
            var8 = var9.bind(var10)(var8);
            var3.useScrollView = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.bool;
            var3.vertical = var8;
            var8 = var7[var4];
            var8 = var6.bind(var0)(var8);
            var8 = var8.func;
            var3.onBeforeSnapToItem = var8;
            var4 = var7[var4];
            var4 = var6.bind(var0)(var4);
            var4 = var4.func;
            var3.onSnapToItem = var4;
            var1.propTypes = var3;
            var3 = {
                'activeAnimationType': 'timing',
                'activeAnimationOptions': null,
                'activeSlideAlignment': 'center',
                'activeSlideOffset': 20,
                'apparitionDelay': 0,
                'autoplay': false,
                'autoplayDelay': 1000,
                'autoplayInterval': 3000,
                'callbackOffsetMargin': 5,
                'containerCustomStyle': null,
                'contentContainerCustomStyle': null,
                'enableMomentum': false,
                'enableSnap': true,
                'firstItem': 0,
                'hasParallaxImages': false,
                'inactiveSlideOpacity': 0.7,
                'inactiveSlideScale': 0.9,
                'inactiveSlideShift': 0,
                'layout': 'default',
                'lockScrollTimeoutDuration': 1000,
                'lockScrollWhileSnapping': false,
                'loop': false,
                'loopClonesPerSide': 3,
                'scrollEnabled': true,
                'slideStyle': null,
                'shouldOptimizeUpdates': true,
                'swipeThreshold': 20
            };
            var4 = false;
            var6 = {};
            var3.containerCustomStyle = var6;
            var6 = {};
            var3.contentContainerCustomStyle = var6;
            var6 = {};
            var3.slideStyle = var6;
            var5 = !var5;
            var3.useScrollView = var5;
            var3.vertical = var4;
            var1.defaultProps = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 6, 7, 15, 17, 18, 31, 27, 33, 7665, 9434, 9436, 3179]);