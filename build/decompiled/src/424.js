// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = ['onBlur', 'onFocus'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var6 = metroImportAll;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot4 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.cloneElement;
    var _closure1_slot5 = var6;
    var3 = var3.useMemo;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var3 = ['accessibilityActions', 'accessibilityElementsHidden', 'accessibilityHint', 'accessibilityLanguage', 'accessibilityIgnoresInvertColors', 'accessibilityLabel', 'accessibilityLiveRegion', 'accessibilityRole', 'accessibilityValue', 'aria-valuemax', 'aria-valuemin', 'aria-valuenow', 'aria-valuetext', 'accessibilityViewIsModal', 'aria-modal', 'hitSlop', 'importantForAccessibility', 'nativeID', 'onAccessibilityAction', 'onBlur', 'onFocus', 'onLayout', 'testID'];
    var _closure1_slot7 = var3;
    var1 = function(arg0) { // Original name: TouchableWithoutFeedback, environment: var1
        _fun5937: for (var _fun5937_ip = 0;;) switch (_fun5937_ip) {
            case 0:
                var1 = arg0;
                var7 = var1;
                var3 = undefined;
                var0 = undefined;
                var8 = undefined;
                var21 = var1.disabled;
                var _closure2_slot0 = var21;
                var23 = var1.rejectResponderTermination;
                var _closure2_slot1 = var23;
                var12 = var1["aria-disabled"];
                var _closure2_slot2 = var12;
                var22 = var1.accessibilityState;
                var _closure2_slot3 = var22;
                var20 = var1.hitSlop;
                var _closure2_slot4 = var20;
                var19 = var1.delayLongPress;
                var _closure2_slot5 = var19;
                var18 = var1.delayPressIn;
                var _closure2_slot6 = var18;
                var17 = var1.delayPressOut;
                var _closure2_slot7 = var17;
                var16 = var1.pressRetentionOffset;
                var _closure2_slot8 = var16;
                var15 = var1.touchSoundDisabled;
                var _closure2_slot9 = var15;
                var14 = var1.onBlur;
                var _closure2_slot10 = var14;
                var13 = var1.onFocus;
                var _closure2_slot11 = var13;
                var11 = var1.onLongPress;
                var _closure2_slot12 = var11;
                var10 = var1.onPress;
                var _closure2_slot13 = var10;
                var9 = var1.onPressIn;
                var _closure2_slot14 = var9;
                var6 = var1.onPressOut;
                var _closure2_slot15 = var6;
                var5 = _closure1_slot6;
                var4 = new Array(16);
                var4[0] = var23;
                var4[1] = var21;
                var4[2] = var12;
                var12 = null;
                var23 = var12 == var22;
                var21 = undefined;
                if (var23) {
                    _fun5937_ip = 211;
                    continue _fun5937
                }
            case 206:
                var21 = var22.disabled;
            case 211:
                var4[3] = var21;
                var4[4] = var20;
                var4[5] = var19;
                var4[6] = var18;
                var4[7] = var17;
                var4[8] = var16;
                var4[9] = var15;
                var4[10] = var14;
                var4[11] = var13;
                var4[12] = var11;
                var4[13] = var10;
                var4[14] = var9;
                var4[15] = var6;
                var2 = function() { // Environment: var2
                    _fun5938: for (var _fun5938_ip = 0;;) switch (_fun5938_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot1;
                            var2 = !var2;
                            var0.cancelable = var2;
                            var2 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 === var2)) {
                                _fun5938_ip = 65;
                                continue _fun5938
                            }
                        case 27:
                            var2 = _closure2_slot2;
                            if (!(var3 == var2)) {
                                _fun5938_ip = 59;
                                continue _fun5938
                            }
                        case 35:
                            var2 = _closure2_slot3;
                            var3 = var3 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun5938_ip = 57;
                                continue _fun5938
                            }
                        case 48:
                            var3 = _closure2_slot3;
                            var2 = var3.disabled;
                        case 57:
                            _fun5938_ip = 63;
                            continue _fun5938;
                        case 59:
                            var2 = _closure2_slot2;
                        case 63:
                            _fun5938_ip = 69;
                            continue _fun5938;
                        case 65:
                            var2 = _closure2_slot0;
                        case 69:
                            var0.disabled = var2;
                            var2 = _closure2_slot4;
                            var0.hitSlop = var2;
                            var2 = _closure2_slot5;
                            var0.delayLongPress = var2;
                            var2 = _closure2_slot6;
                            var0.delayPressIn = var2;
                            var2 = _closure2_slot7;
                            var0.delayPressOut = var2;
                            var2 = 0;
                            var0.minPressDuration = var2;
                            var2 = _closure2_slot8;
                            var0.pressRectOffset = var2;
                            var2 = _closure2_slot9;
                            var0.android_disableSound = var2;
                            var2 = _closure2_slot10;
                            var0.onBlur = var2;
                            var2 = _closure2_slot11;
                            var0.onFocus = var2;
                            var2 = _closure2_slot12;
                            var0.onLongPress = var2;
                            var2 = _closure2_slot13;
                            var0.onPress = var2;
                            var2 = _closure2_slot14;
                            var0.onPressIn = var2;
                            var1 = _closure2_slot15;
                            var0.onPressOut = var1;
                            return var0;
                    }
                };
                var4 = var5.bind(var3)(var2, var4);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var9 = var2.bind(var3)(var4);
                var2 = _closure1_slot4;
                var6 = var2.Children;
                var5 = var6.only;
                var2 = var7;
                var4 = var2.children;
                var6 = var5.bind(var6)(var4);
                var4 = var6.props;
                var4 = var4.children;
                var5 = new Array(1);
                var5[0] = var4;
                var13 = var2["aria-live"];
                var19 = {};
                var2 = var2["aria-busy"];
                if (!(var12 == var2)) {
                    _fun5937_ip = 391;
                    continue _fun5937
                }
            case 364:
                var4 = var7;
                var10 = var4.accessibilityState;
                var11 = var12 == var10;
                var4 = undefined;
                if (var11) {
                    _fun5937_ip = 388;
                    continue _fun5937
                }
            case 382:
                var4 = var10.busy;
            case 388:
                var2 = var4;
            case 391:
                var19.busy = var2;
                var2 = var7;
                var2 = var2["aria-checked"];
                if (!(var12 == var2)) {
                    _fun5937_ip = 436;
                    continue _fun5937
                }
            case 409:
                var4 = var7;
                var10 = var4.accessibilityState;
                var11 = var12 == var10;
                var4 = undefined;
                if (var11) {
                    _fun5937_ip = 433;
                    continue _fun5937
                }
            case 427:
                var4 = var10.checked;
            case 433:
                var2 = var4;
            case 436:
                var19.checked = var2;
                var2 = var7;
                var2 = var2["aria-disabled"];
                if (!(var12 == var2)) {
                    _fun5937_ip = 480;
                    continue _fun5937
                }
            case 454:
                var4 = var7;
                var10 = var4.accessibilityState;
                var11 = var12 == var10;
                var4 = undefined;
                if (var11) {
                    _fun5937_ip = 477;
                    continue _fun5937
                }
            case 472:
                var4 = var10.disabled;
            case 477:
                var2 = var4;
            case 480:
                var19.disabled = var2;
                var2 = var7;
                var2 = var2["aria-expanded"];
                if (!(var12 == var2)) {
                    _fun5937_ip = 524;
                    continue _fun5937
                }
            case 497:
                var4 = var7;
                var10 = var4.accessibilityState;
                var11 = var12 == var10;
                var4 = undefined;
                if (var11) {
                    _fun5937_ip = 521;
                    continue _fun5937
                }
            case 515:
                var4 = var10.expanded;
            case 521:
                var2 = var4;
            case 524:
                var19.expanded = var2;
                var2 = var7;
                var2 = var2["aria-selected"];
                if (!(var12 == var2)) {
                    _fun5937_ip = 569;
                    continue _fun5937
                }
            case 542:
                var4 = var7;
                var10 = var4.accessibilityState;
                var11 = var12 == var10;
                var4 = undefined;
                if (var11) {
                    _fun5937_ip = 566;
                    continue _fun5937
                }
            case 560:
                var4 = var10.selected;
            case 566:
                var2 = var4;
            case 569:
                var19.selected = var2;
                var2 = var9.onBlur;
                var2 = var9.onFocus;
                var4 = _closure1_slot3;
                var2 = _closure1_slot2;
                var11 = var4.bind(var3)(var9, var2);
                var15 = global;
                var10 = var15.Object;
                var9 = var10.assign;
                var4 = {};
                var2 = var7;
                var16 = var2.accessible;
                var14 = false;
                var16 = var14 !== var16;
                var4.accessible = var16;
                var16 = var2.disabled;
                var2 = var19;
                if (!(var12 != var16)) {
                    _fun5937_ip = 679;
                    continue _fun5937
                }
            case 645:
                var18 = var15.Object;
                var17 = var18.assign;
                var16 = {};
                var15 = var7;
                var15 = var15.disabled;
                var16.disabled = var15;
                var15 = {};
                var2 = var17.bind(var18)(var15, var19, var16);
            case 679:
                var4.accessibilityState = var2;
                var2 = var7;
                var2 = var2.focusable;
                var2 = var14 !== var2;
                if (!var2) {
                    _fun5937_ip = 712;
                    continue _fun5937
                }
            case 700:
                var14 = var7;
                var14 = var14.onPress;
                var2 = var3 !== var14;
            case 712:
                if (!var2) {
                    _fun5937_ip = 726;
                    continue _fun5937
                }
            case 715:
                var14 = var7;
                var14 = var14.disabled;
                var2 = !var14;
            case 726:
                var4.focusable = var2;
                var2 = var7;
                var2 = var2["aria-hidden"];
                if (!(var12 == var2)) {
                    _fun5937_ip = 753;
                    continue _fun5937
                }
            case 744:
                var14 = var7;
                var2 = var14.accessibilityElementsHidden;
            case 753:
                var4.accessibilityElementsHidden = var2;
                var2 = var7;
                var15 = var2["aria-hidden"];
                var2 = 'no-hide-descendants';
                var14 = true;
                if (!(var14 !== var15)) {
                    _fun5937_ip = 788;
                    continue _fun5937
                }
            case 779:
                var14 = var7;
                var2 = var14.importantForAccessibility;
            case 788:
                var4.importantForAccessibility = var2;
                var2 = 'none';
                var14 = 'off';
                if (!(var14 !== var13)) {
                    _fun5937_ip = 821;
                    continue _fun5937
                }
            case 805:
                if (!(var12 == var13)) {
                    _fun5937_ip = 818;
                    continue _fun5937
                }
            case 809:
                var14 = var7;
                var13 = var14.accessibilityLiveRegion;
            case 818:
                var2 = var13;
            case 821:
                var4.accessibilityLiveRegion = var2;
                var2 = var7;
                var2 = var2.id;
                if (!(var12 == var2)) {
                    _fun5937_ip = 847;
                    continue _fun5937
                }
            case 838:
                var12 = var7;
                var2 = var12.nativeID;
            case 847:
                var4.nativeID = var2;
                var2 = {};
                var0 = var9.bind(var10)(var2, var11, var4);
                var9 = _closure1_slot7;
                var2 = var9;
                var4 = var2[Symbol.iterator];
                var2 = var4().next;
            case 871:
                var10 = var2().value;
                var9 = var4;
                if (!(var9 !== var3)) {
                    _fun5937_ip = 922;
                    continue _fun5937
                }
            case 882: // try_start_0
                var8 = var10;
                var9 = var7;
                var9 = var9[var10];
                if (!(var3 !== var9)) {
                    _fun5937_ip = 913;
                    continue _fun5937
                }
            case 896:
                var11 = var0;
                var10 = var8;
                var9 = var7;
                var9 = var9[var10];
                var11[var10] = var9;
            case 913: // try_end0
                _fun5937_ip = 871;
                continue _fun5937;
            case 915: // catch_target0
                CatchBlockStart(arg_register = 2);
                var4.return();
                throw var2;
            case 922:
                var2 = _closure1_slot5;
                var1 = var2.apply;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var0;
                var0 = var4.concat;
                var0 = var0.bind(var4)(var5);
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 292]);