// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun46014: for (var _fun46014_ip = 0;;) switch (_fun46014_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var3 = this;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = var3;
            if (!var3) {
                _fun46014_ip = 34;
                continue _fun46014
            }
        case 28:
            var0 = var3.__extends;
        case 34:
            if (var0) {
                _fun46014_ip = 51;
                continue _fun46014
            }
        case 37:
            var6 = function(arg0, arg1) { // Original name: extendStatics, environment: var1
                _fun46015: for (var _fun46015_ip = 0;;) switch (_fun46015_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun46015_ip = 47;
                            continue _fun46015
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun46015_ip = 44;
                            continue _fun46015
                        }
                    case 39:
                        var1 = function(arg0, arg1) { // Environment: var0
                            var1 = arg1;
                            var0 = arg0;
                            var0.__proto__ = var1;
                            var0 = undefined;
                            return var0;
                        };
                    case 44:
                        var3 = var1;
                    case 47:
                        if (var3) {
                            _fun46015_ip = 55;
                            continue _fun46015
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun46017: for (var _fun46017_ip = 0;;) switch (_fun46017_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var4 = var6;
                                    var0 = global;
                                    for (var1 in var4)
                                        case 19: {
                                            case 28: var9 = var1;
                                            var8 = var0.Object;
                                            var8 = var8.prototype;
                                            var10 = var8.hasOwnProperty;
                                            var8 = var10.call;
                                            var8 = var8.bind(var10)(var6, var9);
                                            if (!var8) {
                                                _fun46017_ip = 19;
                                                continue _fun46017
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun46017_ip = 19;
                                            continue _fun46017;
                                        }
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                    case 55:
                        _closure1_slot2 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot2 = var6;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun46018: for (var _fun46018_ip = 0;;) switch (_fun46018_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var2;
                        var1 = function() { // Original name: __, environment: var0
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0.constructor = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var4 = 'function';
                        var0 = typeof var3;
                        if (!(var4 !== var0)) {
                            _fun46018_ip = 34;
                            continue _fun46018
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun46018_ip = 114;
                            continue _fun46018
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun46018_ip = 88;
                            continue _fun46018
                        }
                    case 55:
                        var4 = var3.prototype;
                        var1.prototype = var4;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var4;
                        var1 = new var8[var1](var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        _fun46018_ip = 106;
                        continue _fun46018;
                    case 88:
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.create;
                        var1 = var4.bind(var5)(var3);
                    case 106:
                        var2.prototype = var1;
                        return var0;
                    case 114:
                        var0 = global;
                        var2 = var0.TypeError;
                        var1 = var0.String;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var3);
                        var0 = 'Class extends value ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ' is not a constructor or null';
                        var7 = var3 + var0;
                        var8 = var1;
                        var0 = new var8[var2](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 51:
            var _closure1_slot3 = var0;
            var0 = var3;
            if (!var0) {
                _fun46014_ip = 67;
                continue _fun46014
            }
        case 61:
            var0 = var3.__assign;
        case 67:
            if (var0) {
                _fun46014_ip = 75;
                continue _fun46014
            }
        case 70:
            var0 = function() { // Environment: var1
                _fun46020: for (var _fun46020_ip = 0;;) switch (_fun46020_ip) {
                    case 0:
                        var0 = undefined;
                        var1 = global;
                        var1 = var1.Object;
                        var3 = var1.assign;
                        if (var3) {
                            _fun46020_ip = 25;
                            continue _fun46020
                        }
                    case 18:
                        var3 = function(arg0) { // Environment: var1
                            _fun46021: for (var _fun46021_ip = 0;;) switch (_fun46021_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = undefined;
                                    var3 = arguments.length;
                                    var2 = 1;
                                    var6 = var2 < var3;
                                    var1 = global;
                                    var4 = undefined;
                                    if (!var6) {
                                        _fun46021_ip = 112;
                                        continue _fun46021
                                    }
                                case 22:
                                    var8 = arguments[var2];
                                    var11 = var8;
                                    var6 = var4;
                                    var4 = var6;
                                    for (var7 in var11)
                                        case 43: {
                                            var4 = var6;
                                            case 55: var13 = var7;
                                            var14 = var1.Object;
                                            var14 = var14.prototype;
                                            var15 = var14.hasOwnProperty;
                                            var14 = var15.call;
                                            var14 = var14.bind(var15)(var8, var13);
                                            var6 = var13;
                                            if (!var14) {
                                                _fun46021_ip = 43;
                                                continue _fun46021
                                            }
                                            case 92: var14 = var8[var13];
                                            var0[var13] = var14;
                                            var6 = var13;
                                            _fun46021_ip = 43;
                                            continue _fun46021;
                                        }
                                case 105:
                                    var2 = var2 + 1;
                                    if (var2 < var3) {
                                        _fun46021_ip = 22;
                                        continue _fun46021
                                    }
                                case 112:
                                    return var0;
                            }
                        };
                    case 25:
                        _closure1_slot4 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
        case 75:
            var _closure1_slot4 = var0;
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
            var3 = var4.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.default;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function(arg0) { // Original name: ScrollComponent, environment: var1
                    _fun46023: for (var _fun46023_ip = 0;;) switch (_fun46023_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = this;
                            var4 = _closure2_slot0;
                            var0 = var4.call;
                            var0 = var0.bind(var4)(var3, var2);
                            if (var0) {
                                _fun46023_ip = 32;
                                continue _fun46023
                            }
                        case 29:
                            var0 = var3;
                        case 32:
                            var _closure3_slot0 = var0;
                            var3 = null;
                            var0._scrollViewRef = var3;
                            var3 = function(arg0) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var1._scrollViewRef = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0._getScrollViewRef = var3;
                            var3 = function(arg0) { // Environment: var1
                                _fun46025: for (var _fun46025_ip = 0;;) switch (_fun46025_ip) {
                                    case 0:
                                        var4 = arg0;
                                        if (!var4) {
                                            _fun46025_ip = 89;
                                            continue _fun46025
                                        }
                                    case 6:
                                        var0 = var4.nativeEvent;
                                        var0 = var0.contentOffset;
                                        var3 = _closure3_slot0;
                                        var2 = var3.props;
                                        var2 = var2.isHorizontal;
                                        if (var2) {
                                            _fun46025_ip = 46;
                                            continue _fun46025
                                        }
                                    case 39:
                                        var2 = var0.y;
                                        _fun46025_ip = 51;
                                        continue _fun46025;
                                    case 46:
                                        var2 = var0.x;
                                    case 51:
                                        var3._offset = var2;
                                        var1 = _closure3_slot0;
                                        var3 = var1.props;
                                        var2 = var3.onScroll;
                                        var1 = var0.x;
                                        var0 = var0.y;
                                        var0 = var2.bind(var3)(var1, var0, var4);
                                    case 89:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._onScroll = var3;
                            var1 = function(arg0) { // Environment: var1
                                _fun46026: for (var _fun46026_ip = 0;;) switch (_fun46026_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var3 = var1._height;
                                        var1 = var2.nativeEvent;
                                        var1 = var1.layout;
                                        var1 = var1.height;
                                        var1 = var3 === var1;
                                        if (!var1) {
                                            _fun46026_ip = 71;
                                            continue _fun46026
                                        }
                                    case 40:
                                        var3 = _closure3_slot0;
                                        var4 = var3._width;
                                        var3 = var2.nativeEvent;
                                        var3 = var3.layout;
                                        var3 = var3.width;
                                        var1 = var4 === var3;
                                    case 71:
                                        if (var1) {
                                            _fun46026_ip = 190;
                                            continue _fun46026
                                        }
                                    case 74:
                                        var3 = _closure3_slot0;
                                        var1 = var2.nativeEvent;
                                        var1 = var1.layout;
                                        var1 = var1.height;
                                        var3._height = var1;
                                        var3 = _closure3_slot0;
                                        var1 = var2.nativeEvent;
                                        var1 = var1.layout;
                                        var1 = var1.width;
                                        var3._width = var1;
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.onSizeChanged;
                                        if (!var1) {
                                            _fun46026_ip = 190;
                                            continue _fun46026
                                        }
                                    case 146:
                                        var3 = _closure3_slot0;
                                        var1 = true;
                                        var3._isSizeChangedCalledOnce = var1;
                                        var1 = _closure3_slot0;
                                        var4 = var1.props;
                                        var3 = var4.onSizeChanged;
                                        var1 = var2.nativeEvent;
                                        var1 = var1.layout;
                                        var1 = var3.bind(var4)(var1);
                                    case 190:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.onLayout;
                                        if (!var1) {
                                            _fun46026_ip = 228;
                                            continue _fun46026
                                        }
                                    case 208:
                                        var0 = _closure3_slot0;
                                        var1 = var0.props;
                                        var0 = var1.onLayout;
                                        var0 = var0.bind(var1)(var2);
                                    case 228:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._onLayout = var1;
                            var1 = var2.layoutSize;
                            if (!var1) {
                                _fun46023_ip = 97;
                                continue _fun46023
                            }
                        case 86:
                            var3 = var2.layoutSize;
                            var1 = var3.height;
                        case 97:
                            if (var1) {
                                _fun46023_ip = 102;
                                continue _fun46023
                            }
                        case 100:
                            var1 = 0;
                        case 102:
                            var0._height = var1;
                            var1 = var2.layoutSize;
                            if (!var1) {
                                _fun46023_ip = 128;
                                continue _fun46023
                            }
                        case 117:
                            var2 = var2.layoutSize;
                            var1 = var2.width;
                        case 128:
                            if (var1) {
                                _fun46023_ip = 133;
                                continue _fun46023
                            }
                        case 131:
                            var1 = 0;
                        case 133:
                            var0._width = var1;
                            var1 = 0;
                            var0._offset = var1;
                            var1 = false;
                            var0._isSizeChangedCalledOnce = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot3;
                var5 = undefined;
                var3 = var3.bind(var5)(var0, var4);
                var4 = var0.prototype;
                var3 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun46027: for (var _fun46027_ip = 0;;) switch (_fun46027_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._scrollViewRef;
                            if (!var1) {
                                _fun46027_ip = 53;
                                continue _fun46027
                            }
                        case 12:
                            var2 = var0._scrollViewRef;
                            var1 = var2.scrollTo;
                            var0 = {};
                            var3 = arg0;
                            var0.x = var3;
                            var3 = arg1;
                            var0.y = var3;
                            var3 = arg2;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.scrollTo = var3;
                var4 = var0.prototype;
                var3 = function() { // Environment: var1
                    _fun46028: for (var _fun46028_ip = 0;;) switch (_fun46028_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1._scrollViewRef;
                            var0 = null;
                            if (!var2) {
                                _fun46028_ip = 47;
                                continue _fun46028
                            }
                        case 14:
                            var2 = var1._scrollViewRef;
                            var2 = var2.getScrollableNode;
                            var0 = null;
                            if (!var2) {
                                _fun46028_ip = 47;
                                continue _fun46028
                            }
                        case 31:
                            var2 = var1._scrollViewRef;
                            var1 = var2.getScrollableNode;
                            var0 = var1.bind(var2)();
                        case 47:
                            return var0;
                    }
                };
                var4.getScrollableNode = var3;
                var4 = var0.prototype;
                var3 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._scrollViewRef;
                    return var0;
                };
                var4.getNativeScrollRef = var3;
                var4 = var0.prototype;
                var3 = function() { // Environment: var1
                    _fun46030: for (var _fun46030_ip = 0;;) switch (_fun46030_ip) {
                        case 0:
                            var10 = this;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 2;
                            var1 = var3[var1];
                            var12 = undefined;
                            var1 = var2.bind(var12)(var1);
                            var3 = var1.default;
                            var2 = var3.cast;
                            var1 = var10.props;
                            var1 = var1.externalScrollView;
                            var4 = var2.bind(var3)(var1);
                            var1 = var10.props;
                            var1 = var1.renderContentContainer;
                            if (var1) {
                                _fun46030_ip = 77;
                                continue _fun46030
                            }
                        case 69:
                            var11 = var10._defaultContainer;
                            _fun46030_ip = 88;
                            continue _fun46030;
                        case 77:
                            var1 = var10.props;
                            var11 = var1.renderContentContainer;
                        case 88:
                            var5 = {};
                            var1 = {};
                            var2 = var10.props;
                            var2 = var2.contentHeight;
                            var1.height = var2;
                            var2 = var10.props;
                            var2 = var2.contentWidth;
                            var1.width = var2;
                            var5.style = var1;
                            var1 = var10.props;
                            var1 = var1.isHorizontal;
                            var5.horizontal = var1;
                            var1 = var10._offset;
                            var5.scrollOffset = var1;
                            var1 = var10.props;
                            var1 = var1.renderAheadOffset;
                            var5.renderAheadOffset = var1;
                            var1 = var10.props;
                            var1 = var1.isHorizontal;
                            if (var1) {
                                _fun46030_ip = 191;
                                continue _fun46030
                            }
                        case 183:
                            var2 = var10._height;
                            _fun46030_ip = 197;
                            continue _fun46030;
                        case 191:
                            var2 = var10._width;
                        case 197:
                            var1 = var10.props;
                            var1 = var1.renderAheadOffset;
                            var1 = var2 + var1;
                            var5.windowSize = var1;
                            var3 = _closure1_slot5;
                            var2 = var3.createElement;
                            var8 = _closure1_slot4;
                            var7 = {};
                            var1 = var10._getScrollViewRef;
                            var7.ref = var1;
                            var1 = false;
                            var7.removeClippedSubviews = var1;
                            var1 = var10.props;
                            var1 = var1.scrollThrottle;
                            var7.scrollEventThrottle = var1;
                            var6 = var10.props;
                            var1 = {};
                            var9 = var10.props;
                            var9 = var9.isHorizontal;
                            var1.horizontal = var9;
                            var9 = var10._onScroll;
                            var1.onScroll = var9;
                            var9 = var10._isSizeChangedCalledOnce;
                            if (!var9) {
                                _fun46030_ip = 336;
                                continue _fun46030
                            }
                        case 309:
                            var9 = var10.props;
                            var9 = var9.canChangeSize;
                            if (var9) {
                                _fun46030_ip = 336;
                                continue _fun46030
                            }
                        case 323:
                            var9 = var10.props;
                            var9 = var9.onLayout;
                            _fun46030_ip = 342;
                            continue _fun46030;
                        case 336:
                            var9 = var10._onLayout;
                        case 342:
                            var1.onLayout = var9;
                            var1 = var8.bind(var12)(var7, var6, var1);
                            var9 = _closure1_slot5;
                            var8 = var9.createElement;
                            var0 = _closure1_slot6;
                            var7 = var0.View;
                            var6 = {};
                            var0 = {};
                            var13 = var10.props;
                            var14 = var13.isHorizontal;
                            var13 = 'column';
                            if (!var14) {
                                _fun46030_ip = 399;
                                continue _fun46030
                            }
                        case 395:
                            var13 = 'row';
                        case 399:
                            var0.flexDirection = var13;
                            var6.style = var0;
                            var0 = var10.props;
                            var0 = var0.children;
                            var5 = var11.bind(var12)(var5, var0);
                            var0 = var10.props;
                            var11 = var0.renderFooter;
                            var0 = null;
                            if (!var11) {
                                _fun46030_ip = 454;
                                continue _fun46030
                            }
                        case 439:
                            var11 = var10.props;
                            var10 = var11.renderFooter;
                            var0 = var10.bind(var11)();
                        case 454:
                            var19 = var9;
                            var18 = var7;
                            var17 = var6;
                            var16 = var5;
                            var15 = var0;
                            var0 = var19[var8](var18, var17, var16, var15, var14);
                            var0 = var2.bind(var3)(var4, var1, var0);
                            return var0;
                    }
                };
                var4.render = var3;
                var3 = var0.prototype;
                var1 = function(arg0, arg1) { // Environment: var1
                    var4 = _closure1_slot5;
                    var3 = var4.createElement;
                    var1 = _closure1_slot6;
                    var2 = var1.View;
                    var6 = _closure1_slot4;
                    var5 = undefined;
                    var1 = {};
                    var0 = arg0;
                    var1 = var6.bind(var5)(var1, var0);
                    var0 = arg1;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var3._defaultContainer = var1;
                var1 = {
                    'contentHeight': 0,
                    'contentWidth': 0,
                    'externalScrollView': null,
                    'isHorizontal': false,
                    'scrollThrottle': 16
                };
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var4 = var3.default;
                var3 = var4.cast;
                var2 = _closure1_slot6;
                var2 = var2.ScrollView;
                var2 = var3.bind(var4)(var2);
                var1.externalScrollView = var2;
                var0.defaultProps = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5123, 5128]);