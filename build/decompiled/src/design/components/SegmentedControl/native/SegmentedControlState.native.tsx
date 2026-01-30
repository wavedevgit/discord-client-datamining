// design/components/SegmentedControl/native/SegmentedControlState.native.tsx
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
    var3 = {};
    var6 = 'function SegmentedControlStateNativeTsx1(index,dimensions){const{itemDimensions,itemCount}=this.__closure;itemDimensions.get()[index]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));}';
    var3.code = var6;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/SegmentedControl/native/SegmentedControlState.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useSegmentedControlState, environment: var1
        _fun61968: for (var _fun61968_ip = 0;;) switch (_fun61968_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.items;
                var _closure2_slot0 = var11;
                var8 = var1.pageWidth;
                var _closure2_slot1 = var8;
                var21 = var1.defaultIndex;
                var19 = undefined;
                if (!(var21 === var19)) {
                    _fun61968_ip = 39;
                    continue _fun61968
                }
            case 37:
                var21 = 0;
            case 39:
                var9 = var1.itemSpacing;
                if (!(var9 === var19)) {
                    _fun61968_ip = 83;
                    continue _fun61968
                }
            case 49:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 1;
                var2 = var4[var2];
                var2 = var3.bind(var19)(var2);
                var2 = var2.spacing;
                var9 = var2.PX_24;
            case 83:
                var _closure2_slot2 = var9;
                var5 = var1.onPageChange;
                var _closure2_slot3 = var5;
                var17 = var1.onPageChangeStart;
                var _closure2_slot4 = var17;
                var2 = var1.onSetActiveIndex;
                var _closure2_slot5 = var2;
                var _closure2_slot6 = var19;
                var _closure2_slot7 = var19;
                var _closure2_slot8 = var19;
                var _closure2_slot9 = var19;
                var _closure2_slot10 = var19;
                var _closure2_slot11 = var19;
                var _closure2_slot12 = var19;
                var _closure2_slot13 = var19;
                var _closure2_slot14 = var19;
                var _closure2_slot15 = var19;
                var _closure2_slot16 = var19;
                var _closure2_slot17 = var19;
                var3 = _closure1_slot3;
                var6 = var3.useContext;
                var7 = _closure1_slot0;
                var20 = _closure1_slot2;
                var4 = 2;
                var4 = var20[var4];
                var4 = var7.bind(var19)(var4);
                var4 = var4.AccessibilityPreferencesContext;
                var4 = var6.bind(var3)(var4);
                var4 = var4.reducedMotion;
                var4 = var4.enabled;
                _closure2_slot6 = var4;
                var6 = 3;
                var10 = var20[var6];
                var13 = var7.bind(var19)(var10);
                var12 = var13.useSharedValue;
                var10 = new Array(0);
                var10 = var12.bind(var13)(var10);
                _closure2_slot7 = var10;
                var12 = var20[var6];
                var13 = var7.bind(var19)(var12);
                var12 = var13.useSharedValue;
                var18 = -1;
                var14 = var12.bind(var13)(var18);
                _closure2_slot8 = var14;
                var12 = var20[var6];
                var13 = var7.bind(var19)(var12);
                var12 = var13.useSharedValue;
                var16 = 0;
                var13 = var12.bind(var13)(var16);
                _closure2_slot9 = var13;
                var12 = var20[var6];
                var15 = var7.bind(var19)(var12);
                var12 = var15.useSharedValue;
                var12 = var12.bind(var15)(var16);
                _closure2_slot10 = var12;
                var15 = var20[var6];
                var16 = var7.bind(var19)(var15);
                var15 = var16.useSharedValue;
                var16 = var15.bind(var16)(var21);
                _closure2_slot11 = var16;
                var15 = var20[var6];
                var21 = var7.bind(var19)(var15);
                var15 = var21.useAnimatedRef;
                var15 = var15.bind(var21)();
                _closure2_slot12 = var15;
                var6 = var20[var6];
                var7 = var7.bind(var19)(var6);
                var6 = var7.useSharedValue;
                var7 = var6.bind(var7)(var18);
                _closure2_slot13 = var7;
                var6 = var3.useRef;
                var6 = var6.bind(var3)(var5);
                _closure2_slot14 = var6;
                var18 = var3.useLayoutEffect;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure2_slot14;
                    var0 = _closure2_slot3;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var5 = var18.bind(var3)(var5, var6);
                var6 = var3.useCallback;
                var5 = new Array(7);
                var5[0] = var16;
                var5[1] = var17;
                var5[2] = var8;
                var5[3] = var14;
                var5[4] = var15;
                var5[5] = var4;
                var5[6] = var2;
                var2 = function(arg0) { // Environment: var0
                    _fun61970: for (var _fun61970_ip = 0;;) switch (_fun61970_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arguments[1];
                            var4 = arguments[2];
                            var _closure3_slot0 = var3;
                            var0 = undefined;
                            if (!(var2 === var0)) {
                                _fun61970_ip = 23;
                                continue _fun61970
                            }
                        case 21:
                            var2 = true;
                        case 23:
                            if (!(var4 === var0)) {
                                _fun61970_ip = 29;
                                continue _fun61970
                            }
                        case 27:
                            var4 = false;
                        case 29:
                            var _closure3_slot1 = var4;
                            var4 = function(arg0) { // Original name: updateIndex, environment: var1
                                _fun61971: for (var _fun61971_ip = 0;;) switch (_fun61971_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = _closure2_slot11;
                                        var0 = var3.set;
                                        var0 = var0.bind(var3)(var2);
                                        var0 = _closure2_slot1;
                                        var7 = var2 * var0;
                                        var3 = _closure2_slot8;
                                        var0 = var3.set;
                                        var0 = var0.bind(var3)(var7);
                                        var0 = _closure2_slot12;
                                        var4 = null;
                                        var3 = var4 == var0;
                                        var0 = undefined;
                                        var6 = undefined;
                                        if (var3) {
                                            _fun61971_ip = 75;
                                            continue _fun61971
                                        }
                                    case 59:
                                        var5 = _closure2_slot12;
                                        var5 = var5.current;
                                        var3 = var4 == var5;
                                        var6 = var5;
                                    case 75:
                                        if (var3) {
                                            _fun61971_ip = 120;
                                            continue _fun61971
                                        }
                                    case 78:
                                        var5 = var6.scrollTo;
                                        var3 = {};
                                        var3.x = var7;
                                        var7 = _closure3_slot1;
                                        var7 = !var7;
                                        if (!var7) {
                                            _fun61971_ip = 110;
                                            continue _fun61971
                                        }
                                    case 103:
                                        var8 = _closure2_slot6;
                                        var7 = !var8;
                                    case 110:
                                        var3.animated = var7;
                                        var3 = var5.bind(var6)(var3);
                                    case 120:
                                        var3 = _closure2_slot5;
                                        if (!(var4 != var3)) {
                                            _fun61971_ip = 137;
                                            continue _fun61971
                                        }
                                    case 128:
                                        var1 = _closure2_slot5;
                                        var1 = var1.bind(var0)(var2);
                                    case 137:
                                        return var0;
                                }
                            };
                            var _closure3_slot2 = var4;
                            if (!var2) {
                                _fun61970_ip = 65;
                                continue _fun61970
                            }
                        case 45:
                            var6 = _closure2_slot11;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var2 = var5 !== var3;
                        case 65:
                            if (!var2) {
                                _fun61970_ip = 123;
                                continue _fun61970
                            }
                        case 68:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 4;
                            var5 = var8[var2];
                            var6 = var7.bind(var0)(var5);
                            var5 = var6.triggerHapticFeedback;
                            var2 = var8[var2];
                            var2 = var7.bind(var0)(var2);
                            var2 = var2.HapticFeedbackTypes;
                            var2 = var2.IMPACT_MEDIUM;
                            var2 = var5.bind(var6)(var2);
                        case 123:
                            var6 = _closure2_slot11;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            if (!(var3 !== var5)) {
                                _fun61970_ip = 175;
                                continue _fun61970
                            }
                        case 143:
                            var6 = _closure2_slot4;
                            var5 = null;
                            if (!(var5 == var6)) {
                                _fun61970_ip = 160;
                                continue _fun61970
                            }
                        case 153:
                            var4 = var4.bind(var0)(var3);
                            _fun61970_ip = 175;
                            continue _fun61970;
                        case 160:
                            var2 = _closure2_slot4;
                            var1 = function() { // Environment: var1
                                var2 = _closure3_slot2;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var0)(var3, var1);
                        case 175:
                            return var0;
                    }
                };
                var6 = var6.bind(var3)(var2, var5);
                _closure2_slot15 = var6;
                var17 = var11.length;
                _closure2_slot16 = var17;
                var5 = var3.useCallback;
                var2 = function(arg0, arg1) { // Original name: M, environment: var0
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
                    var2 = arg1;
                    var1 = arg0;
                    var3[var1] = var2;
                    var2 = _closure2_slot7;
                    var1 = var2.set;
                    var4 = _closure2_slot7;
                    var3 = var4.get;
                    var7 = var3.bind(var4)();
                    var5 = new Array(0);
                    var4 = 0;
                    var8 = var5;
                    var6 = 0;
                    var3 = arraySpread(var8, var7, var6);
                    var3 = var5.slice;
                    var0 = _closure2_slot16;
                    var0 = var3.bind(var5)(var4, var0);
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var18 = {};
                var18.itemDimensions = var10;
                var18.itemCount = var17;
                var2.__closure = var18;
                var18 = 9501406272062.0;
                var2.__workletHash = var18;
                var1 = _closure1_slot4;
                var2.__initData = var1;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var17;
                var5 = var5.bind(var3)(var2, var1);
                _closure2_slot17 = var5;
                var2 = var3.useMemo;
                var1 = new Array(13);
                var1[0] = var16;
                var1[1] = var15;
                var1[2] = var14;
                var1[3] = var13;
                var1[4] = var12;
                var1[5] = var11;
                var1[6] = var10;
                var1[7] = var9;
                var1[8] = var8;
                var1[9] = var7;
                var1[10] = var6;
                var1[11] = var5;
                var1[12] = var4;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot11;
                    var0.activeIndex = var2;
                    var2 = _closure2_slot12;
                    var0.pagerRef = var2;
                    var2 = _closure2_slot8;
                    var0.scrollTarget = var2;
                    var2 = _closure2_slot9;
                    var0.scrollOverflow = var2;
                    var2 = _closure2_slot10;
                    var0.scrollOffset = var2;
                    var2 = _closure2_slot0;
                    var0.items = var2;
                    var2 = _closure2_slot7;
                    var0.itemDimensions = var2;
                    var2 = _closure2_slot2;
                    var0.itemSpacing = var2;
                    var2 = _closure2_slot1;
                    var0.pageWidth = var2;
                    var2 = _closure2_slot13;
                    var0.pressedIndex = var2;
                    var2 = _closure2_slot14;
                    var0.onPageChangeRef = var2;
                    var2 = _closure2_slot15;
                    var0.setActiveIndex = var2;
                    var2 = _closure2_slot17;
                    var0.setItemDimensions = var2;
                    var1 = _closure2_slot6;
                    var0.useReducedMotion = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useSegmentedControlState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 671, 3124, 3679, 3238, 2]);