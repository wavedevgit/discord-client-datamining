// modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useWindowDimensions;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function useBottomSheetFlashListBottomViewabilityInsetTsx1(){const{bottomSheetPosition}=this.__closure;var _bottomSheetPosition$,_bottomSheetPosition;return(_bottomSheetPosition$=(_bottomSheetPosition=bottomSheetPosition)===null||_bottomSheetPosition===void 0?void 0:_bottomSheetPosition.get())!==null&&_bottomSheetPosition$!==void 0?_bottomSheetPosition$:0;}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){const{distanceBetweenExpandedScreenTopAndSheetTop,runOnJS,handleBottomViewabilityInsetDebounced}=this.__closure;const bottomViewabilityInset=sheetPosition-distanceBetweenExpandedScreenTopAndSheetTop;runOnJS(handleBottomViewabilityInsetDebounced)(bottomViewabilityInset);}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun107716: for (var _fun107716_ip = 0;;) switch (_fun107716_ip) {
            case 0:
                var1 = _closure1_slot4;
                var11 = undefined;
                var1 = var1.bind(var11)();
                var4 = _closure1_slot3;
                var3 = var4.useContext;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var2 = var7[var2];
                var2 = var5.bind(var11)(var2);
                var2 = var2.AppLauncherContext;
                var2 = var3.bind(var4)(var2);
                var4 = null;
                var3 = var4 == var2;
                var14 = undefined;
                if (var3) {
                    _fun107716_ip = 73;
                    continue _fun107716
                }
            case 67:
                var14 = var2.bottomSheetPosition;
            case 73:
                var _closure2_slot0 = var14;
                var3 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 3;
                var2 = var12[var2];
                var2 = var3.bind(var11)(var2);
                var2 = var2.bind(var11)();
                var3 = var2.maximum;
                var7 = _closure1_slot3;
                var2 = var7.useRef;
                var2 = var2.bind(var7)(var4);
                var _closure2_slot1 = var2;
                var1 = var1.height;
                var13 = var1 - var3;
                var _closure2_slot2 = var13;
                var3 = var7.useRef;
                var1 = 9999;
                var1 = var3.bind(var7)(var1);
                var _closure2_slot3 = var1;
                var5 = var7.useMemo;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.debounce;
                    var1 = function(arg0) { // Environment: var0
                        _fun107718: for (var _fun107718_ip = 0;;) switch (_fun107718_ip) {
                            case 0:
                                var2 = _closure2_slot3;
                                var1 = arg0;
                                var2.current = var1;
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun107718_ip = 41;
                                    continue _fun107718
                                }
                            case 31:
                                var0 = var1.updateViewableItems;
                                var0 = var0.bind(var1)();
                            case 41:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = 200;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var3 = new Array(0);
                var8 = var5.bind(var7)(var4, var3);
                var _closure2_slot4 = var8;
                var10 = _closure1_slot0;
                var9 = 5;
                var3 = var12[var9];
                var5 = var10.bind(var11)(var3);
                var4 = var5.useAnimatedReaction;
                var3 = function() {
                    _fun107719: for (var _fun107719_ip = 0;;) switch (_fun107719_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var3 = var0 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun107719_ip = 31;
                                continue _fun107719
                            }
                        case 18:
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var1 = var2.bind(var3)();
                        case 31:
                            var2 = var0 != var1;
                            var0 = 0;
                            if (!var2) {
                                _fun107719_ip = 43;
                                continue _fun107719
                            }
                        case 40:
                            var0 = var1;
                        case 43:
                            return var0;
                    }
                };
                var7 = {};
                var7.bottomSheetPosition = var14;
                var3.__closure = var7;
                var7 = 3750973667946.0;
                var3.__workletHash = var7;
                var7 = _closure1_slot5;
                var3.__initData = var7;
                var0 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot4;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot2;
                    var1 = arg0;
                    var1 = var1 - var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = {};
                var7.distanceBetweenExpandedScreenTopAndSheetTop = var13;
                var9 = var12[var9];
                var9 = var10.bind(var11)(var9);
                var9 = var9.runOnJS;
                var7.runOnJS = var9;
                var7.handleBottomViewabilityInsetDebounced = var8;
                var0.__closure = var7;
                var7 = 6025307858098.0;
                var0.__workletHash = var7;
                var6 = _closure1_slot6;
                var0.__initData = var6;
                var0 = var4.bind(var5)(var3, var0);
                var0 = {};
                var0.flashListRef = var2;
                var0.bottomVisibilityInsetRef = var1;
                return var0;
        }
    };
    var2.useBottomSheetFlashListBottomViewabilityInset = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7736, 11356, 22, 3720, 2]);