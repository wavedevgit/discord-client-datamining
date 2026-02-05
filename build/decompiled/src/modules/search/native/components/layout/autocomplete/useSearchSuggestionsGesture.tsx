// modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function inBoundingBox_useSearchSuggestionsGestureTsx1(e,coordinates,safeAreaTop){const touch=e.allTouches[0];if(touch==null)return false;return coordinates.left<touch.absoluteX&&touch.absoluteX<coordinates.right&&coordinates.top<touch.absoluteY+safeAreaTop&&touch.absoluteY+safeAreaTop<coordinates.bottom;}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun105131: for (var _fun105131_ip = 0;;) switch (_fun105131_ip) {
                case 0:
                    var2 = arg1;
                    var4 = arg2;
                    var0 = arg0;
                    var1 = var0.allTouches;
                    var0 = 0;
                    var3 = var1[var0];
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun105131_ip = 110;
                        continue _fun105131
                    }
                case 30:
                    var5 = var2.left;
                    var1 = var3.absoluteX;
                    var1 = var5 < var1;
                    if (!var1) {
                        _fun105131_ip = 63;
                        continue _fun105131
                    }
                case 48:
                    var6 = var3.absoluteX;
                    var5 = var2.right;
                    var1 = var6 < var5;
                case 63:
                    if (!var1) {
                        _fun105131_ip = 85;
                        continue _fun105131
                    }
                case 66:
                    var6 = var2.top;
                    var5 = var3.absoluteY;
                    var5 = var5 + var4;
                    var1 = var6 < var5;
                case 85:
                    if (!var1) {
                        _fun105131_ip = 107;
                        continue _fun105131
                    }
                case 88:
                    var3 = var3.absoluteY;
                    var3 = var3 + var4;
                    var2 = var2.bottom;
                    var1 = var3 < var2;
                case 107:
                    var0 = var1;
                case 110:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 14606221606756.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function useSearchSuggestionsGestureTsx2(e,manager){const{coordinates,inBoundingBox,safeAreaTop,dismissed}=this.__closure;manager.fail();const _coordinates=coordinates.get();if(_coordinates==null||inBoundingBox(e,_coordinates,safeAreaTop))return;dismissed.set(true);}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun105132: for (var _fun105132_ip = 0;;) switch (_fun105132_ip) {
            case 0:
                var11 = arg0;
                var _closure2_slot0 = var11;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 2;
                var2 = var8[var1];
                var5 = undefined;
                var7 = var6.bind(var5)(var2);
                var4 = var7.useSharedValue;
                var2 = false;
                var7 = var4.bind(var7)(var2);
                var _closure2_slot1 = var7;
                var1 = var8[var1];
                var4 = var6.bind(var5)(var1);
                var2 = var4.useSharedValue;
                var1 = null;
                var1 = var2.bind(var4)(var1);
                var _closure2_slot2 = var1;
                var10 = _closure1_slot3;
                var9 = var10.useCallback;
                var4 = new Array(1);
                var4[0] = var7;
                var2 = function(arg0, arg1) { // Environment: var0
                    _fun105133: for (var _fun105133_ip = 0;;) switch (_fun105133_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg1;
                            if (!(var1 !== var0)) {
                                _fun105133_ip = 29;
                                continue _fun105133
                            }
                        case 10:
                            var2 = _closure2_slot1;
                            var1 = var2.set;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 29:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var2, var4);
                var _closure2_slot3 = var2;
                var9 = var10.useEffect;
                var4 = new Array(3);
                var4[0] = var7;
                var4[1] = var11;
                var4[2] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot4;
                    var2 = var3.subscribeTextInputValue;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var9.bind(var10)(var2, var4);
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var8[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.bind(var5)();
                var4 = var2.top;
                var2 = 4;
                var2 = var8[var2];
                var5 = var6.bind(var5)(var2);
                var2 = var5.isAndroid;
                var5 = var2.bind(var5)();
                var2 = 0;
                if (!var5) {
                    _fun105132_ip = 200;
                    continue _fun105132
                }
            case 197:
                var2 = var4;
            case 200:
                var _closure2_slot4 = var2;
                var3 = _closure1_slot3;
                var5 = var3.useMemo;
                var4 = new Array(3);
                var4[0] = var1;
                var4[1] = var2;
                var4[2] = var7;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.Gesture;
                    var0 = var1.Manual;
                    var2 = var0.bind(var1)();
                    var1 = var2.manualActivation;
                    var0 = true;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.onTouchesDown;
                    var0 = function arg0, arg1() {
                        _fun105136: for (var _fun105136_ip = 0;;) switch (_fun105136_ip) {
                            case 0:
                                var1 = arg1;
                                var0 = var1.fail;
                                var0 = var0.bind(var1)();
                                var2 = _closure2_slot2;
                                var1 = var2.get;
                                var6 = var1.bind(var2)();
                                var1 = null;
                                var1 = var1 == var6;
                                if (var1) {
                                    _fun105136_ip = 61;
                                    continue _fun105136
                                }
                            case 38:
                                var5 = _closure1_slot6;
                                var4 = _closure2_slot4;
                                var3 = undefined;
                                var2 = arg0;
                                var1 = var5.bind(var3)(var2, var6, var4);
                            case 61:
                                if (var1) {
                                    _fun105136_ip = 80;
                                    continue _fun105136
                                }
                            case 64:
                                var2 = _closure2_slot1;
                                var1 = var2.set;
                                var0 = true;
                                var0 = var1.bind(var2)(var0);
                            case 80:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = {};
                    var6 = _closure2_slot2;
                    var4.coordinates = var6;
                    var6 = _closure1_slot6;
                    var4.inBoundingBox = var6;
                    var6 = _closure2_slot4;
                    var4.safeAreaTop = var6;
                    var5 = _closure2_slot1;
                    var4.dismissed = var5;
                    var0.__closure = var4;
                    var4 = 2369649298113.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot7;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var3)(var2, var4);
                var _closure2_slot5 = var5;
                var4 = var3.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4 = var4.bind(var3)(var1, var2);
                var _closure2_slot6 = var4;
                var6 = var3.useCallback;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var6 = var6.bind(var3)(var1, var2);
                var _closure2_slot7 = var6;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot5;
                    var0.gesture = var2;
                    var2 = _closure2_slot1;
                    var0.dismissed = var2;
                    var2 = _closure2_slot6;
                    var0.onLayoutMeasure = var2;
                    var1 = _closure2_slot7;
                    var0.setDismissed = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useSearchSuggestionsGesture = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8999, 3720, 1568, 478, 4963, 2]);