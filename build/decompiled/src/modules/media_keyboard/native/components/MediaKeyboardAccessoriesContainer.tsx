// modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx
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
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.isAndroid;
    var3 = var3.bind(var6)();
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'zIndex': 10
    };
    var3.androidContainer = var8;
    var8 = {};
    var11 = var9.absoluteFillObject;
    var12 = var8;
    var9 = copyDataProperties(var12, var11);
    var3.iosContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function MediaKeyboardAccessoriesContainerTsx1(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108458: for (var _fun108458_ip = 0;;) switch (_fun108458_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.animatedIndex;
                var _closure2_slot0 = var15;
                var13 = var0.animatedPosition;
                var _closure2_slot1 = var13;
                var17 = var0.animateOnMount;
                var _closure2_slot2 = var17;
                var4 = var0.children;
                var14 = var0.initialPosition;
                var _closure2_slot3 = var14;
                var0 = _closure1_slot7;
                var3 = undefined;
                var0 = var0.bind(var3)();
                var _closure2_slot4 = var0;
                var11 = _closure1_slot3;
                var6 = var11.useMemo;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var2
                    _fun108459: for (var _fun108459_ip = 0;;) switch (_fun108459_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure1_slot6;
                            var2 = _closure2_slot4;
                            if (var1) {
                                _fun108459_ip = 27;
                                continue _fun108459
                            }
                        case 19:
                            var1 = var2.iosContainer;
                            _fun108459_ip = 33;
                            continue _fun108459;
                        case 27:
                            var1 = var2.androidContainer;
                        case 33:
                            var5 = var0;
                            var4 = var1;
                            var1 = copyDataProperties(var5, var4);
                            var2 = 'hidden';
                            var1 = 'overflow';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var8 = var6.bind(var11)(var0, var5);
                var0 = var11.useRef;
                var9 = false;
                var0 = var0.bind(var11)(var9);
                var _closure2_slot5 = var0;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var5 = var6[var0];
                var7 = var10.bind(var3)(var5);
                var5 = var7.useSharedValue;
                var16 = var5.bind(var7)(var9);
                var _closure2_slot6 = var16;
                var9 = var11.useCallback;
                var7 = new Array(1);
                var7[0] = var16;
                var5 = function() { // Environment: var2
                    _fun108460: for (var _fun108460_ip = 0;;) switch (_fun108460_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            if (var1) {
                                _fun108460_ip = 41;
                                continue _fun108460
                            }
                        case 15:
                            var1 = _closure2_slot5;
                            var2 = true;
                            var1.current = var2;
                            var1 = _closure2_slot6;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var9.bind(var11)(var5, var7);
                var7 = var6[var0];
                var11 = var10.bind(var3)(var7);
                var9 = var11.useAnimatedStyle;
                var7 = function() {
                    _fun108461: for (var _fun108461_ip = 0;;) switch (_fun108461_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var1 = !var1;
                            if (!var1) {
                                _fun108461_ip = 29;
                                continue _fun108461
                            }
                        case 13:
                            var3 = _closure2_slot6;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1 = !var2;
                        case 29:
                            var2 = 0;
                            var7 = 0;
                            if (var1) {
                                _fun108461_ip = 68;
                                continue _fun108461
                            }
                        case 36:
                            var3 = global;
                            var5 = var3.Math;
                            var4 = var5.min;
                            var6 = _closure2_slot0;
                            var3 = var6.get;
                            var3 = var3.bind(var6)();
                            var7 = var4.bind(var5)(var3, var2);
                        case 68:
                            if (var1) {
                                _fun108461_ip = 86;
                                continue _fun108461
                            }
                        case 71:
                            var3 = _closure2_slot1;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            _fun108461_ip = 90;
                            continue _fun108461;
                        case 86:
                            var3 = _closure2_slot3;
                        case 90:
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 6;
                            var5 = var5[var4];
                            var4 = undefined;
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.interpolate;
                            var4 = new Array(2);
                            var8 = -1;
                            var4[0] = var8;
                            var4[1] = var2;
                            var2 = [100, 0];
                            var2 = var5.bind(var6)(var7, var4, var2);
                            var1.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var0 = _closure1_slot6;
                            var1 = {};
                            if (var0) {
                                _fun108461_ip = 193;
                                continue _fun108461
                            }
                        case 180:
                            var1.top = var3;
                            var1.transform = var2;
                            var0 = var1;
                            _fun108461_ip = 204;
                            continue _fun108461;
                        case 193:
                            var1.marginTop = var3;
                            var1.transform = var2;
                            var0 = var1;
                        case 204:
                            return var0;
                    }
                };
                var12 = {};
                var12.animateOnMount = var17;
                var12.initialLayout = var16;
                var12.animatedIndex = var15;
                var12.initialPosition = var14;
                var12.animatedPosition = var13;
                var13 = var6[var0];
                var13 = var10.bind(var3)(var13);
                var13 = var13.interpolate;
                var12.interpolate = var13;
                var13 = _closure1_slot6;
                var12.IS_ANDROID = var13;
                var7.__closure = var12;
                var12 = 10575537164844.0;
                var7.__workletHash = var12;
                var12 = _closure1_slot8;
                var7.__initData = var12;
                var7 = var9.bind(var11)(var7);
                var9 = 7;
                var9 = var6[var9];
                var11 = var10.bind(var3)(var9);
                var10 = var11.useStateFromStores;
                var12 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var12;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot4;
                    var0 = var1.isOpen;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var10.bind(var11)(var9, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var6 = undefined;
                if (!var9) {
                    _fun108458_ip = 366;
                    continue _fun108458
                }
            case 360:
                var6 = 'no-hide-descendants';
            case 366:
                var0.importantForAccessibility = var6;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var0.style = var6;
                var0.onLayout = var5;
                var5 = 'box-none';
                var0.pointerEvents = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8571, 33, 478, 1297, 3681, 566, 2]);