// design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = {};
    var6 = 'function CollapsibleFloatingActionButtonStateNativeTsx1({nativeEvent:nativeEvent}){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}';
    var3.code = var6;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useCollapsibleFloatingActionButtonState, environment: var1
        var0 = {};
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useSharedValue;
        var1 = 0;
        var1 = var2.bind(var3)(var1);
        var0.collapseText = var1;
        return var0;
    };
    var2.useCollapsibleFloatingActionButtonState = var3;
    var1 = function(arg0) { // Original name: useCollapsibleFloatingActionButtonScroll, environment: var1
        _fun57405: for (var _fun57405_ip = 0;;) switch (_fun57405_ip) {
            case 0:
                var6 = arguments[1];
                var0 = arg0;
                var4 = var0.collapseText;
                var _closure2_slot0 = var4;
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun57405_ip = 26;
                    continue _fun57405
                }
            case 24:
                var6 = 0;
            case 26:
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var5;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 1;
                var2 = var7[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.useSharedValue;
                var5 = var2.bind(var3)(var6);
                _closure2_slot2 = var5;
                var3 = _closure1_slot2;
                var2 = var3.useCallback;
                var1 = function(arg0) { // Original name: s, environment: var1
                    _fun57406: for (var _fun57406_ip = 0;;) switch (_fun57406_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun57406_ip = 174;
                                continue _fun57406
                            }
                        case 18:
                            var1 = var0.contentOffset;
                            var2 = var1.y;
                            var1 = var0.contentSize;
                            var3 = var1.height;
                            var0 = var0.layoutMeasurement;
                            var1 = var0.height;
                            var4 = _closure2_slot1;
                            if (!(!(var2 < var4))) {
                                _fun57406_ip = 174;
                                continue _fun57406
                            }
                        case 62:
                            var1 = var2 + var1;
                            if (!(!(var1 > var3))) {
                                _fun57406_ip = 174;
                                continue _fun57406
                            }
                        case 70:
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var6 = var2 - var1;
                            var3 = 10;
                            if (!(!(var2 < var3))) {
                                _fun57406_ip = 144;
                                continue _fun57406
                            }
                        case 94:
                            var1 = global;
                            var4 = var1.Math;
                            var1 = var4.abs;
                            var1 = var1.bind(var4)(var6);
                            if (!(var1 > var3)) {
                                _fun57406_ip = 160;
                                continue _fun57406
                            }
                        case 117:
                            var4 = _closure2_slot0;
                            var3 = var4.set;
                            var1 = 1;
                            var5 = 0;
                            if (!(var6 < var5)) {
                                _fun57406_ip = 137;
                                continue _fun57406
                            }
                        case 135:
                            var1 = 0;
                        case 137:
                            var1 = var3.bind(var4)(var1);
                            _fun57406_ip = 160;
                            continue _fun57406;
                        case 144:
                            var4 = _closure2_slot0;
                            var3 = var4.set;
                            var1 = 0;
                            var1 = var3.bind(var4)(var1);
                        case 160:
                            var1 = _closure2_slot2;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 174:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = {};
                var7.initialScrollStart = var6;
                var7.previousOffset = var5;
                var8 = 10;
                var7.MINIMUM_SCROLL_DISTANCE_TO_CLOSE = var8;
                var7.collapseText = var4;
                var7.SCROLL_OFFSET_THRESHOLD = var8;
                var1.__closure = var7;
                var7 = 10435259247914.0;
                var1.__workletHash = var7;
                var0 = _closure1_slot3;
                var1.__initData = var0;
                var0 = new Array(3);
                var0[0] = var6;
                var0[1] = var5;
                var0[2] = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useCollapsibleFloatingActionButtonScroll = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3679, 2]);