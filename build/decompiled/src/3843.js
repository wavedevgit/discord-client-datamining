// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34822: for (var _fun34822_ip = 0;;) switch (_fun34822_ip) {
        case 0:
            var3 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var5;
            var0 = function(arg0) { // Original name: getWebScrollableElement, environment: var4
                _fun34823: for (var _fun34823_ip = 0;;) switch (_fun34823_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = null;
                        var3 = var2 == var0;
                        var1 = undefined;
                        if (var3) {
                            _fun34823_ip = 24;
                            continue _fun34823
                        }
                    case 14:
                        var3 = var0.getScrollableNode;
                        var1 = var3.bind(var0)();
                    case 24:
                        if (!(var2 != var1)) {
                            _fun34823_ip = 31;
                            continue _fun34823
                        }
                    case 28:
                        var0 = var1;
                    case 31:
                        return var0;
                }
            };
            var _closure1_slot8 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var6 = var1.useCallback;
            var _closure1_slot2 = var6;
            var6 = var1.useEffect;
            var _closure1_slot3 = var6;
            var1 = var1.useRef;
            var _closure1_slot4 = var1;
            var1 = 1;
            var1 = var5[var1];
            var3 = var3.bind(var0)(var1);
            var1 = var3.isWeb;
            var1 = var1.bind(var3)();
            if (var1) {
                _fun34822_ip = 132;
                continue _fun34822
            }
        case 125:
            var1 = function(arg0, arg1) { // Original name: useScrollViewOffsetNative, environment: var4
                _fun34829: for (var _fun34829_ip = 0;;) switch (_fun34829_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var _closure2_slot0 = var6;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 2;
                        var0 = var4[var0];
                        var4 = undefined;
                        var7 = var3.bind(var4)(var0);
                        var3 = var7.useSharedValue;
                        var0 = 0;
                        var0 = var3.bind(var7)(var0);
                        var3 = _closure1_slot4;
                        var7 = null;
                        if (!(var7 != var5)) {
                            _fun34829_ip = 63;
                            continue _fun34829
                        }
                    case 60:
                        var0 = var5;
                    case 63:
                        var0 = var3.bind(var4)(var0);
                        var0 = var0.current;
                        var _closure2_slot1 = var0;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 4;
                        var3 = var7[var3];
                        var8 = var5.bind(var4)(var3);
                        var7 = var8.useEvent;
                        var5 = function(arg0) { // Original name: pnpm_useScrollViewOffsetTs2, environment: var1
                            _fun34830: for (var _fun34830_ip = 0;;) switch (_fun34830_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure2_slot1;
                                    var0 = var2.contentOffset;
                                    var3 = var0.x;
                                    var0 = 0;
                                    if (!(var0 !== var3)) {
                                        _fun34830_ip = 40;
                                        continue _fun34830
                                    }
                                case 27:
                                    var0 = var2.contentOffset;
                                    var0 = var0.x;
                                    _fun34830_ip = 51;
                                    continue _fun34830;
                                case 40:
                                    var2 = var2.contentOffset;
                                    var0 = var2.y;
                                case 51:
                                    var1.value = var0;
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = {};
                        var3.offset = var0;
                        var5.__closure = var3;
                        var3 = 17316000082767.0;
                        var5.__workletHash = var3;
                        var3 = _closure1_slot6;
                        var5.__initData = var3;
                        var3 = _closure1_slot7;
                        var5 = var7.bind(var8)(var5, var3);
                        var _closure2_slot2 = var5;
                        var3 = _closure1_slot3;
                        var2 = new Array(2);
                        var2[0] = var6;
                        var2[1] = var5;
                        var1 = function() { // Environment: var1
                            _fun34831: for (var _fun34831_ip = 0;;) switch (_fun34831_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    if (var1) {
                                        _fun34831_ip = 14;
                                        continue _fun34831
                                    }
                                case 10:
                                    var1 = undefined;
                                    return var1;
                                case 14:
                                    var2 = _closure2_slot0;
                                    var1 = var2.observe;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun34832: for (var _fun34832_ip = 0;;) switch (_fun34832_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var _closure4_slot0 = var3;
                                                if (var3) {
                                                    _fun34832_ip = 61;
                                                    continue _fun34832
                                                }
                                            case 12:
                                                var4 = _closure1_slot0;
                                                var2 = _closure1_slot1;
                                                var1 = 3;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var2 = var4.bind(var1)(var2);
                                                var5 = var2.logger;
                                                var4 = var5.warn;
                                                var2 = 'animatedRef is not initialized in useScrollViewOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.';
                                                var2 = var4.bind(var5)(var2);
                                                return var1;
                                            case 61:
                                                var1 = _closure2_slot2;
                                                var2 = var1.workletEventHandler;
                                                var1 = var2.registerForEvents;
                                                var1 = var1.bind(var2)(var3);
                                                var0 = function() { // Environment: var0
                                                    var0 = _closure2_slot2;
                                                    var2 = var0.workletEventHandler;
                                                    var1 = var2.unregisterFromEvents;
                                                    var0 = _closure4_slot0;
                                                    var0 = var1.bind(var2)(var0);
                                                    var0 = undefined;
                                                    return var0;
                                                };
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                }
            };
            _fun34822_ip = 137;
            continue _fun34822;
        case 132:
            var1 = function(arg0, arg1) { // Original name: useScrollViewOffsetWeb, environment: var4
                _fun34824: for (var _fun34824_ip = 0;;) switch (_fun34824_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var _closure2_slot0 = var6;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 2;
                        var0 = var4[var0];
                        var4 = undefined;
                        var7 = var3.bind(var4)(var0);
                        var3 = var7.useSharedValue;
                        var0 = 0;
                        var0 = var3.bind(var7)(var0);
                        var3 = _closure1_slot4;
                        var7 = null;
                        if (!(var7 != var5)) {
                            _fun34824_ip = 63;
                            continue _fun34824
                        }
                    case 60:
                        var0 = var5;
                    case 63:
                        var0 = var3.bind(var4)(var0);
                        var0 = var0.current;
                        var _closure2_slot1 = var0;
                        var7 = _closure1_slot2;
                        var5 = function() { // Original name: pnpm_useScrollViewOffsetTs1, environment: var1
                            _fun34825: for (var _fun34825_ip = 0;;) switch (_fun34825_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    if (!var1) {
                                        _fun34825_ip = 69;
                                        continue _fun34825
                                    }
                                case 10:
                                    var3 = _closure1_slot8;
                                    var1 = _closure2_slot0;
                                    var2 = var1.current;
                                    var1 = undefined;
                                    var2 = var3.bind(var1)(var2);
                                    var1 = _closure2_slot1;
                                    var3 = var2.scrollLeft;
                                    var0 = 0;
                                    if (!(var0 !== var3)) {
                                        _fun34825_ip = 57;
                                        continue _fun34825
                                    }
                                case 49:
                                    var0 = var2.scrollLeft;
                                    _fun34825_ip = 63;
                                    continue _fun34825;
                                case 57:
                                    var0 = var2.scrollTop;
                                case 63:
                                    var1.value = var0;
                                case 69:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = {};
                        var3.animatedRef = var6;
                        var8 = _closure1_slot8;
                        var3.getWebScrollableElement = var8;
                        var3.offset = var0;
                        var5.__closure = var3;
                        var3 = 2244034762234.0;
                        var5.__workletHash = var3;
                        var3 = _closure1_slot5;
                        var5.__initData = var3;
                        var3 = new Array(2);
                        var3[0] = var6;
                        var3[1] = var0;
                        var5 = var7.bind(var4)(var5, var3);
                        var _closure2_slot2 = var5;
                        var3 = _closure1_slot3;
                        var2 = new Array(2);
                        var2[0] = var6;
                        var2[1] = var5;
                        var1 = function() { // Environment: var1
                            _fun34826: for (var _fun34826_ip = 0;;) switch (_fun34826_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    if (var1) {
                                        _fun34826_ip = 14;
                                        continue _fun34826
                                    }
                                case 10:
                                    var1 = undefined;
                                    return var1;
                                case 14:
                                    var2 = _closure2_slot0;
                                    var1 = var2.observe;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun34827: for (var _fun34827_ip = 0;;) switch (_fun34827_ip) {
                                            case 0:
                                                var2 = arg0;
                                                if (var2) {
                                                    _fun34827_ip = 57;
                                                    continue _fun34827
                                                }
                                            case 11:
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot1;
                                                var2 = 3;
                                                var3 = var3[var2];
                                                var2 = undefined;
                                                var3 = var4.bind(var2)(var3);
                                                var5 = var3.logger;
                                                var4 = var5.warn;
                                                var3 = 'animatedRef is not initialized in useScrollViewOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.';
                                                var3 = var4.bind(var5)(var3);
                                                return var2;
                                            case 57:
                                                var4 = _closure1_slot8;
                                                var2 = _closure2_slot0;
                                                var3 = var2.current;
                                                var2 = undefined;
                                                var4 = var4.bind(var2)(var3);
                                                var _closure4_slot0 = var4;
                                                var3 = var4.addEventListener;
                                                var2 = _closure2_slot2;
                                                var1 = 'scroll';
                                                var1 = var3.bind(var4)(var1, var2);
                                                var0 = function() { // Environment: var0
                                                    var3 = _closure4_slot0;
                                                    var2 = var3.removeEventListener;
                                                    var1 = _closure2_slot2;
                                                    var0 = 'scroll';
                                                    var0 = var2.bind(var3)(var0, var1);
                                                    var0 = undefined;
                                                    return var0;
                                                };
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                }
            };
        case 137:
            var3 = {};
            var5 = 'function pnpm_useScrollViewOffsetTs1(){const{animatedRef,getWebScrollableElement,offset}=this.__closure;if(animatedRef){const element=getWebScrollableElement(animatedRef.current);offset.value=element.scrollLeft===0?element.scrollTop:element.scrollLeft;}}';
            var3.code = var5;
            var _closure1_slot5 = var3;
            var3 = {};
            var5 = 'function pnpm_useScrollViewOffsetTs2(event){const{offset}=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;}';
            var3.code = var5;
            var _closure1_slot6 = var3;
            var3 = ['onScroll', 'onScrollBeginDrag', 'onScrollEndDrag', 'onMomentumScrollBegin', 'onMomentumScrollEnd'];
            var _closure1_slot7 = var3;
            var2.useScrollViewOffset = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3683, 3832, 3684, 3827]);