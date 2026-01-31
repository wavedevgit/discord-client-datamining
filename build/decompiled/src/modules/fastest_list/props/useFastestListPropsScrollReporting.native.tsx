// modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = {};
    var5 = 'function useFastestListPropsScrollReportingNativeTsx1(event){const{scrollPosition,horizontal}=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}}';
    var0.code = var5;
    var _closure1_slot2 = var0;
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun60988: for (var _fun60988_ip = 0;;) switch (_fun60988_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var _closure2_slot0 = var8;
                var1 = var2.scrollReporting;
                var4 = undefined;
                var0 = 'animatedScrollPosition';
                var9 = undefined;
                if (!(var0 === var1)) {
                    _fun60988_ip = 38;
                    continue _fun60988
                }
            case 32:
                var9 = var2.scrollPosition;
            case 38:
                var _closure2_slot1 = var9;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 0;
                var1 = var7[var1];
                var4 = var3.bind(var4)(var1);
                var3 = var4.useAnimatedScrollHandler;
                var1 = {};
                var5 = function arg0() {
                    _fun60989: for (var _fun60989_ip = 0;;) switch (_fun60989_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun60989_ip = 55;
                                continue _fun60989
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = var2.set;
                            var0 = _closure2_slot0;
                            var3 = arg0;
                            var3 = var3.contentOffset;
                            if (var0) {
                                _fun60989_ip = 45;
                                continue _fun60989
                            }
                        case 38:
                            var0 = var3.y;
                            _fun60989_ip = 50;
                            continue _fun60989;
                        case 45:
                            var0 = var3.x;
                        case 50:
                            var0 = var1.bind(var2)(var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = {};
                var7.scrollPosition = var9;
                var7.horizontal = var8;
                var5.__closure = var7;
                var7 = 14196294214838.0;
                var5.__workletHash = var7;
                var6 = _closure1_slot2;
                var5.__initData = var6;
                var1.onScroll = var5;
                var1 = var3.bind(var4)(var1);
                var3 = var2.scrollReporting;
                if (!(var0 !== var3)) {
                    _fun60988_ip = 203;
                    continue _fun60988
                }
            case 141:
                var0 = 'animatedCallbacks';
                if (!(var0 !== var3)) {
                    _fun60988_ip = 188;
                    continue _fun60988
                }
            case 151:
                var0 = {};
                var3 = var2.onScroll;
                var0.onScroll = var3;
                var3 = var2.onScrollBeginDrag;
                var0.onScrollBeginDrag = var3;
                var3 = var2.onScrollEndDrag;
                var0.onScrollEndDrag = var3;
                return var0;
            case 188:
                var0 = {};
                var2 = var2.scrollHandlerAnimated;
                var0.onScroll = var2;
                return var0;
            case 203:
                var0 = {};
                var0.onScroll = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3679, 2]);