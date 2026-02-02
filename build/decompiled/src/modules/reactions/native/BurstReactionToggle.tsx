// modules/reactions/native/BurstReactionToggle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.Pressable;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 100;
    var3.duration = var6;
    var6 = 5;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var8 = var7.Easing;
    var7 = var8.out;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Easing;
    var6 = var6.quad;
    var6 = var7.bind(var8)(var6);
    var3.easing = var6;
    var _closure1_slot8 = var3;
    var3 = {
        'stiffness': 750,
        'mass': 2.5,
        'damping': 70
    };
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function BurstReactionToggleTsx1(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+"deg"}]};}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'borderRadius': null,
        'padding': 8,
        'marginLeft': 8,
        'width': 40,
        'height': 40
    };
    var9 = 8;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reactions/native/BurstReactionToggle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57310: for (var _fun57310_ip = 0;;) switch (_fun57310_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.onPress;
                var _closure2_slot0 = var1;
                var5 = var0.isActive;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var0 = _closure1_slot11;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.colors;
                if (var5) {
                    _fun57310_ip = 73;
                    continue _fun57310
                }
            case 65:
                var9 = var0.INTERACTIVE_TEXT_DEFAULT;
                _fun57310_ip = 79;
                continue _fun57310;
            case 73:
                var9 = var0.WHITE;
            case 79:
                var2 = _closure1_slot3;
                var1 = var2.useRef;
                var0 = null;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)(var8);
                _closure2_slot1 = var0;
                var0 = function(arg0) { // Environment: var4
                    _fun57311: for (var _fun57311_ip = 0;;) switch (_fun57311_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 6;
                            var3 = var6[var3];
                            var4 = undefined;
                            var9 = var5.bind(var4)(var3);
                            var8 = var9.useStateFromStores;
                            var3 = _closure1_slot5;
                            var7 = new Array(1);
                            var7[0] = var3;
                            var3 = function() { // Environment: var0
                                var0 = _closure1_slot5;
                                var0 = var0.useReducedMotion;
                                return var0;
                            };
                            var10 = var8.bind(var9)(var7, var3);
                            var _closure3_slot0 = var10;
                            var3 = 7;
                            var3 = var6[var3];
                            var6 = var5.bind(var4)(var3);
                            var5 = var6.useToken;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 8;
                            var3 = var8[var3];
                            var3 = var7.bind(var4)(var3);
                            var7 = var3.colors;
                            if (var1) {
                                _fun57311_ip = 116;
                                continue _fun57311
                            }
                        case 108:
                            var3 = var7.INPUT_BACKGROUND_DEFAULT;
                            _fun57311_ip = 122;
                            continue _fun57311;
                        case 116:
                            var3 = var7.BACKGROUND_BRAND;
                        case 122:
                            var3 = var5.bind(var6)(var3);
                            var5 = null;
                            var5 = var5 != var3;
                            var7 = '';
                            if (!var5) {
                                _fun57311_ip = 143;
                                continue _fun57311
                            }
                        case 140:
                            var7 = var3;
                        case 143:
                            var _closure3_slot1 = var7;
                            var5 = 0;
                            if (!var1) {
                                _fun57311_ip = 158;
                                continue _fun57311
                            }
                        case 152:
                            var5 = 360;
                        case 158:
                            var _closure3_slot2 = var5;
                            var3 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 5;
                            var6 = var9[var1];
                            var8 = var3.bind(var4)(var6);
                            var6 = var8.useSharedValue;
                            var8 = var6.bind(var8)(var7);
                            var _closure3_slot3 = var8;
                            var6 = var9[var1];
                            var11 = var3.bind(var4)(var6);
                            var6 = var11.useSharedValue;
                            var6 = var6.bind(var11)(var5);
                            var _closure3_slot4 = var6;
                            var1 = var9[var1];
                            var4 = var3.bind(var4)(var1);
                            var3 = var4.useAnimatedStyle;
                            var1 = function() {
                                _fun57313: for (var _fun57313_ip = 0;;) switch (_fun57313_ip) {
                                    case 0:
                                        var0 = {};
                                        var2 = _closure3_slot0;
                                        if (var2) {
                                            _fun57313_ip = 27;
                                            continue _fun57313
                                        }
                                    case 12:
                                        var3 = _closure3_slot3;
                                        var2 = var3.get;
                                        var2 = var2.bind(var3)();
                                        _fun57313_ip = 31;
                                        continue _fun57313;
                                    case 27:
                                        var2 = _closure3_slot1;
                                    case 31:
                                        var0.backgroundColor = var2;
                                        var2 = {};
                                        var3 = _closure3_slot0;
                                        var5 = 0;
                                        if (var3) {
                                            _fun57313_ip = 59;
                                            continue _fun57313
                                        }
                                    case 46:
                                        var3 = _closure3_slot4;
                                        var1 = var3.get;
                                        var5 = var1.bind(var3)();
                                    case 59:
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var4 = var1.concat;
                                        var3 = '';
                                        var1 = 'deg';
                                        var1 = var4.bind(var3)(var5, var1);
                                        var2.rotate = var1;
                                        var1 = new Array(1);
                                        var1[0] = var2;
                                        var0.transform = var1;
                                        return var0;
                                }
                            };
                            var9 = {};
                            var9.reducedMotion = var10;
                            var9.targetBackgroundColor = var7;
                            var9.backgroundColor = var8;
                            var9.rotation = var6;
                            var1.__closure = var9;
                            var9 = 1525758595013.0;
                            var1.__workletHash = var9;
                            var9 = _closure1_slot10;
                            var1.__initData = var9;
                            var1 = var3.bind(var4)(var1);
                            var4 = _closure1_slot3;
                            var3 = var4.useEffect;
                            var2 = new Array(4);
                            var2[0] = var8;
                            var2[1] = var7;
                            var2[2] = var6;
                            var2[3] = var5;
                            var0 = function() { // Environment: var0
                                var5 = _closure3_slot3;
                                var3 = var5.set;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 9;
                                var2 = var7[var0];
                                var0 = undefined;
                                var10 = var6.bind(var0)(var2);
                                var9 = var10.withTiming;
                                var8 = _closure3_slot1;
                                var2 = _closure1_slot8;
                                var2 = var9.bind(var10)(var8, var2);
                                var2 = var3.bind(var5)(var2);
                                var3 = _closure3_slot4;
                                var2 = var3.set;
                                var5 = 10;
                                var5 = var7[var5];
                                var6 = var6.bind(var0)(var5);
                                var5 = var6.withSpring;
                                var4 = _closure3_slot2;
                                var1 = _closure1_slot9;
                                var1 = var5.bind(var6)(var4, var1);
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0 = var3.bind(var4)(var0, var2);
                            var0 = {};
                            var0.containerStyle = var1;
                            return var0;
                    }
                };
                var0 = var0.bind(var3)(var5);
                var12 = var0.containerStyle;
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = function() {
                    var3 = _closure2_slot1;
                    var0 = _closure1_slot6;
                    var2 = var0.AUTO;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onPress = var4;
                var4 = true;
                var0.accessible = var4;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 13;
                var10 = var14[var4];
                var10 = var6.bind(var3)(var10);
                var13 = var10.intl;
                var10 = var13.string;
                var4 = var14[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.t;
                if (var5) {
                    _fun57310_ip = 227;
                    continue _fun57310
                }
            case 212:
                var4 = var6.buV4av;
                var4 = var10.bind(var13)(var4);
                _fun57310_ip = 240;
                continue _fun57310;
            case 227:
                var6 = var6["5cRA/b"];
                var4 = var10.bind(var13)(var6);
            case 240:
                var0.accessibilityLabel = var4;
                var4 = 'switch';
                var0.accessibilityRole = var4;
                var4 = {};
                var4.checked = var5;
                var0.accessibilityState = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 5;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var13 = var11.container;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var4.style = var11;
                var4.ref = var8;
                var8 = _closure1_slot0;
                var7 = 14;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.SuperReactionIcon;
                var7 = {};
                var7.color = var9;
                var7 = var6.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1369, 33, 3681, 566, 3112, 671, 4058, 4042, 1297, 6977, 1234, 6978, 2]);