// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45292: for (var _fun45292_ip = 0;;) switch (_fun45292_ip) {
        case 0:
            var5 = require;
            var3 = metroImportDefault;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var9;
            var0 = function() {
                _fun45293: for (var _fun45293_ip = 0;;) switch (_fun45293_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun45293_ip = 74;
                        continue _fun45293;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot12 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var8 = global;
            var7 = var8.Object;
            var6 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var1);
            var0 = 0;
            var1 = var9[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var _closure1_slot2 = var1;
            var1 = 1;
            var1 = var9[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 2;
            var1 = var9[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 3;
            var1 = var9[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 4;
            var1 = var9[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 5;
            var6 = var9[var1];
            var3 = arg3;
            var3 = var3.bind(var0)(var6);
            var1 = var9[var1];
            var1 = var5.bind(var0)(var1);
            var3 = var1.Component;
            var1 = 6;
            var1 = var9[var1];
            var1 = var5.bind(var0)(var1);
            var6 = var1.Animated;
            var _closure1_slot7 = var6;
            var6 = var1.StyleSheet;
            var7 = var1.View;
            var _closure1_slot8 = var7;
            var7 = var1.I18nManager;
            var1 = 7;
            var1 = var9[var1];
            var1 = var5.bind(var0)(var1);
            var5 = var1.jsx;
            var _closure1_slot9 = var5;
            var1 = var1.jsxs;
            var _closure1_slot10 = var1;
            var1 = function(arg0) { // Environment: var4
                var3 = function arg0() {
                    _fun45297: for (var _fun45297_ip = 0;;) switch (_fun45297_ip) {
                        case 0:
                            var5 = arg0;
                            var6 = this;
                            var0 = _closure1_slot2;
                            var4 = _closure2_slot0;
                            var2 = undefined;
                            var0 = var0.bind(var2)(var6, var4);
                            var11 = new Array(1);
                            var11[0] = var5;
                            var0 = _closure1_slot5;
                            var10 = var0.bind(var2)(var4);
                            var4 = _closure1_slot4;
                            var0 = _closure1_slot12;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun45297_ip = 75;
                                continue _fun45297
                            }
                        case 62:
                            var0 = var10.apply;
                            var0 = var0.bind(var10)(var6, var11);
                            _fun45297_ip = 109;
                            continue _fun45297;
                        case 75:
                            var7 = global;
                            var9 = var7.Reflect;
                            var8 = var9.construct;
                            var7 = _closure1_slot5;
                            var7 = var7.bind(var2)(var6);
                            var7 = var7.constructor;
                            var0 = var8.bind(var9)(var10, var11, var7);
                        case 109:
                            var0 = var4.bind(var2)(var6, var0);
                            var _closure3_slot0 = var0;
                            var4 = function(arg0, arg1) { // Environment: var3
                                _fun45298: for (var _fun45298_ip = 0;;) switch (_fun45298_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = arg1;
                                        var16 = var1.friction;
                                        var9 = var1.overshootFriction;
                                        var12 = var2.dragX;
                                        var5 = var2.rowTranslation;
                                        var3 = var2.leftWidth;
                                        var7 = 0;
                                        var0 = undefined;
                                        var13 = 0;
                                        if (!(var0 !== var3)) {
                                            _fun45298_ip = 49;
                                            continue _fun45298
                                        }
                                    case 46:
                                        var13 = var3;
                                    case 49:
                                        var3 = var2.rowWidth;
                                        var8 = 0;
                                        if (!(var0 !== var3)) {
                                            _fun45298_ip = 64;
                                            continue _fun45298
                                        }
                                    case 61:
                                        var8 = var3;
                                    case 64:
                                        var2 = var2.rightOffset;
                                        if (!(var0 === var2)) {
                                            _fun45298_ip = 77;
                                            continue _fun45298
                                        }
                                    case 74:
                                        var2 = var8;
                                    case 77:
                                        var6 = global;
                                        var4 = var6.Math;
                                        var3 = var4.max;
                                        var2 = var8 - var2;
                                        var11 = var3.bind(var4)(var7, var2);
                                        var10 = var1.overshootLeft;
                                        if (!(var0 === var10)) {
                                            _fun45298_ip = 114;
                                            continue _fun45298
                                        }
                                    case 110:
                                        var10 = var13 > var7;
                                    case 114:
                                        var14 = var1.overshootRight;
                                        if (!(var0 === var14)) {
                                            _fun45298_ip = 128;
                                            continue _fun45298
                                        }
                                    case 124:
                                        var14 = var11 > var7;
                                    case 128:
                                        var4 = _closure1_slot7;
                                        var3 = var4.add;
                                        var8 = var12.interpolate;
                                        var1 = {};
                                        var15 = [0];
                                        var15[1] = var16;
                                        var1.inputRange = var15;
                                        var15 = [0, 1];
                                        var1.outputRange = var15;
                                        var1 = var8.bind(var12)(var1);
                                        var4 = var3.bind(var4)(var5, var1);
                                        var3 = var4.interpolate;
                                        var1 = {};
                                        var5 = -var11;
                                        var12 = 1;
                                        var8 = var5 - var12;
                                        var5 = new Array(4);
                                        var5[0] = var8;
                                        var8 = -var11;
                                        var5[1] = var8;
                                        var5[2] = var13;
                                        var8 = var13 + var12;
                                        var5[3] = var8;
                                        var1.inputRange = var5;
                                        var8 = -var11;
                                        var5 = 0;
                                        if (!var14) {
                                            _fun45298_ip = 255;
                                            continue _fun45298
                                        }
                                    case 251:
                                        var5 = var12 / var9;
                                    case 255:
                                        var8 = var8 - var5;
                                        var5 = new Array(4);
                                        var5[0] = var8;
                                        var8 = -var11;
                                        var5[1] = var8;
                                        var5[2] = var13;
                                        var8 = 0;
                                        if (!var10) {
                                            _fun45298_ip = 287;
                                            continue _fun45298
                                        }
                                    case 283:
                                        var8 = var12 / var9;
                                    case 287:
                                        var8 = var13 + var8;
                                        var5[3] = var8;
                                        var1.outputRange = var5;
                                        var10 = var3.bind(var4)(var1);
                                        var4 = _closure3_slot0;
                                        var4.transX = var10;
                                        if (!(!(var13 > var7))) {
                                            _fun45298_ip = 356;
                                            continue _fun45298
                                        }
                                    case 322:
                                        var3 = _closure1_slot7;
                                        var3 = var3.Value;
                                        var5 = var3.prototype;
                                        var5 = Object.create(var5, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var19 = var5;
                                        var18 = 0;
                                        var3 = new var19[var3](var18, var17);
                                        var3 = var3 instanceof Object ? var3 : var5;
                                        _fun45298_ip = 411;
                                        continue _fun45298;
                                    case 356:
                                        var8 = var10.interpolate;
                                        var5 = {};
                                        var9 = new Array(3);
                                        var14 = -1;
                                        var9[0] = var14;
                                        var9[1] = var7;
                                        var9[2] = var13;
                                        var5.inputRange = var9;
                                        var9 = [0, 0, 1];
                                        var5.outputRange = var9;
                                        var3 = var8.bind(var10)(var5);
                                    case 411:
                                        var4.showLeftAction = var3;
                                        var3 = _closure3_slot0;
                                        var13 = var3.showLeftAction;
                                        var9 = var13.interpolate;
                                        var4 = {};
                                        var5 = var6.Number;
                                        var8 = var5.MIN_VALUE;
                                        var5 = [0];
                                        var5[1] = var8;
                                        var4.inputRange = var5;
                                        var5 = new Array(2);
                                        var8 = -10000;
                                        var5[0] = var8;
                                        var5[1] = var7;
                                        var4.outputRange = var5;
                                        var5 = 'clamp';
                                        var4.extrapolate = var5;
                                        var4 = var9.bind(var13)(var4);
                                        var3.leftActionTranslate = var4;
                                        if (!(!(var11 > var7))) {
                                            _fun45298_ip = 547;
                                            continue _fun45298
                                        }
                                    case 513:
                                        var2 = _closure1_slot7;
                                        var2 = var2.Value;
                                        var4 = var2.prototype;
                                        var4 = Object.create(var4, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var19 = var4;
                                        var18 = 0;
                                        var2 = new var19[var2](var18, var17);
                                        var2 = var2 instanceof Object ? var2 : var4;
                                        _fun45298_ip = 599;
                                        continue _fun45298;
                                    case 547:
                                        var9 = var10.interpolate;
                                        var4 = {};
                                        var13 = -var11;
                                        var11 = new Array(3);
                                        var11[0] = var13;
                                        var11[1] = var7;
                                        var11[2] = var12;
                                        var4.inputRange = var11;
                                        var11 = [1, 0, 0];
                                        var4.outputRange = var11;
                                        var2 = var9.bind(var10)(var4);
                                    case 599:
                                        var3.showRightAction = var2;
                                        var2 = _closure3_slot0;
                                        var4 = var2.showRightAction;
                                        var3 = var4.interpolate;
                                        var1 = {};
                                        var6 = var6.Number;
                                        var9 = var6.MIN_VALUE;
                                        var6 = [0];
                                        var6[1] = var9;
                                        var1.inputRange = var6;
                                        var6 = new Array(2);
                                        var6[0] = var8;
                                        var6[1] = var7;
                                        var1.outputRange = var6;
                                        var1.extrapolate = var5;
                                        var1 = var3.bind(var4)(var1);
                                        var2.rightActionTranslate = var1;
                                        return var0;
                                }
                            };
                            var0.updateAnimatedEvent = var4;
                            var4 = function(arg0) { // Environment: var3
                                _fun45299: for (var _fun45299_ip = 0;;) switch (_fun45299_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.nativeEvent;
                                        var2 = var0.oldState;
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 8;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var1);
                                        var1 = var1.State;
                                        var1 = var1.ACTIVE;
                                        if (!(var2 === var1)) {
                                            _fun45299_ip = 73;
                                            continue _fun45299
                                        }
                                    case 56:
                                        var2 = _closure3_slot0;
                                        var1 = var2.close;
                                        var1 = var1.bind(var2)();
                                    case 73:
                                        return var0;
                                }
                            };
                            var0.onTapHandlerStateChange = var4;
                            var4 = function(arg0) { // Environment: var3
                                _fun45300: for (var _fun45300_ip = 0;;) switch (_fun45300_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.nativeEvent;
                                        var4 = var0.oldState;
                                        var6 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var5 = 8;
                                        var3 = var0[var5];
                                        var0 = undefined;
                                        var3 = var6.bind(var0)(var3);
                                        var3 = var3.State;
                                        var3 = var3.ACTIVE;
                                        if (!(var4 === var3)) {
                                            _fun45300_ip = 74;
                                            continue _fun45300
                                        }
                                    case 56:
                                        var4 = _closure3_slot0;
                                        var3 = var4.handleRelease;
                                        var3 = var3.bind(var4)(var1);
                                    case 74:
                                        var3 = var1.nativeEvent;
                                        var3 = var3.state;
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var2 = var2[var5];
                                        var2 = var4.bind(var0)(var2);
                                        var2 = var2.State;
                                        var2 = var2.ACTIVE;
                                        if (!(var3 === var2)) {
                                            _fun45300_ip = 317;
                                            continue _fun45300
                                        }
                                    case 121:
                                        var1 = var1.nativeEvent;
                                        var8 = var1.velocityX;
                                        var7 = var1.translationX;
                                        var2 = _closure3_slot0;
                                        var3 = var2.state;
                                        var4 = var3.rowState;
                                        var2 = var2.props;
                                        var6 = var2.friction;
                                        var2 = 'right';
                                        var5 = -1;
                                        var3 = var2;
                                        if (!(var5 !== var4)) {
                                            _fun45300_ip = 227;
                                            continue _fun45300
                                        }
                                    case 185:
                                        var5 = 1;
                                        if (!(var5 !== var4)) {
                                            _fun45300_ip = 220;
                                            continue _fun45300
                                        }
                                    case 192:
                                        var5 = 0.05;
                                        var5 = var5 * var8;
                                        var5 = var7 + var5;
                                        var6 = var5 / var6;
                                        var5 = 0;
                                        if (!(var6 > var5)) {
                                            _fun45300_ip = 224;
                                            continue _fun45300
                                        }
                                    case 220:
                                        var2 = 'left';
                                    case 224:
                                        var3 = var2;
                                    case 227:
                                        var2 = 0;
                                        if (!(var2 !== var4)) {
                                            _fun45300_ip = 276;
                                            continue _fun45300
                                        }
                                    case 233:
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var4 = var2.onSwipeableCloseStartDrag;
                                        var2 = null;
                                        if (!(var2 != var4)) {
                                            _fun45300_ip = 317;
                                            continue _fun45300
                                        }
                                    case 254:
                                        var2 = _closure3_slot0;
                                        var4 = var2.props;
                                        var2 = var4.onSwipeableCloseStartDrag;
                                        var2 = var2.bind(var4)(var3);
                                        _fun45300_ip = 317;
                                        continue _fun45300;
                                    case 276:
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var4 = var2.onSwipeableOpenStartDrag;
                                        var2 = null;
                                        if (!(var2 != var4)) {
                                            _fun45300_ip = 317;
                                            continue _fun45300
                                        }
                                    case 297:
                                        var1 = _closure3_slot0;
                                        var2 = var1.props;
                                        var1 = var2.onSwipeableOpenStartDrag;
                                        var1 = var1.bind(var2)(var3);
                                    case 317:
                                        return var0;
                                }
                            };
                            var0.onHandlerStateChange = var4;
                            var4 = function(arg0) { // Environment: var3
                                _fun45301: for (var _fun45301_ip = 0;;) switch (_fun45301_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.nativeEvent;
                                        var6 = var0.velocityX;
                                        var8 = var0.translationX;
                                        var0 = _closure3_slot0;
                                        var1 = var0.state;
                                        var3 = var1.leftWidth;
                                        var9 = 0;
                                        var0 = undefined;
                                        var11 = 0;
                                        if (!(var0 !== var3)) {
                                            _fun45301_ip = 52;
                                            continue _fun45301
                                        }
                                    case 49:
                                        var11 = var3;
                                    case 52:
                                        var4 = var1.rowWidth;
                                        var3 = 0;
                                        if (!(var0 !== var4)) {
                                            _fun45301_ip = 67;
                                            continue _fun45301
                                        }
                                    case 64:
                                        var3 = var4;
                                    case 67:
                                        var12 = var1.rowState;
                                        var1 = _closure3_slot0;
                                        var1 = var1.state;
                                        var1 = var1.rightOffset;
                                        if (!(var0 === var1)) {
                                            _fun45301_ip = 95;
                                            continue _fun45301
                                        }
                                    case 92:
                                        var1 = var3;
                                    case 95:
                                        var3 = var3 - var1;
                                        var1 = _closure3_slot0;
                                        var4 = var1.props;
                                        var1 = var4.friction;
                                        var10 = var4.leftThreshold;
                                        if (!(var0 === var10)) {
                                            _fun45301_ip = 133;
                                            continue _fun45301
                                        }
                                    case 126:
                                        var5 = 2;
                                        var10 = var11 / var5;
                                    case 133:
                                        var7 = var4.rightThreshold;
                                        if (!(var0 === var7)) {
                                            _fun45301_ip = 152;
                                            continue _fun45301
                                        }
                                    case 145:
                                        var4 = 2;
                                        var7 = var3 / var4;
                                    case 152:
                                        var5 = _closure3_slot0;
                                        var4 = var5.currentOffset;
                                        var5 = var4.bind(var5)();
                                        var4 = var8 / var1;
                                        var5 = var5 + var4;
                                        var4 = 0.05;
                                        var4 = var4 * var6;
                                        var4 = var8 + var4;
                                        var8 = var4 / var1;
                                        if (!(var9 !== var12)) {
                                            _fun45301_ip = 235;
                                            continue _fun45301
                                        }
                                    case 200:
                                        var4 = 1;
                                        if (!(var4 !== var12)) {
                                            _fun45301_ip = 221;
                                            continue _fun45301
                                        }
                                    case 207:
                                        var12 = var8 < var7;
                                        var4 = 0;
                                        if (!var12) {
                                            _fun45301_ip = 254;
                                            continue _fun45301
                                        }
                                    case 216:
                                        var4 = -var3;
                                        _fun45301_ip = 254;
                                        continue _fun45301;
                                    case 221:
                                        var12 = -var10;
                                        var4 = 0;
                                        if (!(var8 > var12)) {
                                            _fun45301_ip = 254;
                                            continue _fun45301
                                        }
                                    case 230:
                                        var4 = var11;
                                        _fun45301_ip = 254;
                                        continue _fun45301;
                                    case 235:
                                        var4 = var11;
                                        if (!(!(var8 > var10))) {
                                            _fun45301_ip = 254;
                                            continue _fun45301
                                        }
                                    case 242:
                                        var7 = -var7;
                                        var4 = 0;
                                        if (!(var8 < var7)) {
                                            _fun45301_ip = 254;
                                            continue _fun45301
                                        }
                                    case 251:
                                        var4 = -var3;
                                    case 254:
                                        var3 = _closure3_slot0;
                                        var2 = var3.animateRow;
                                        var1 = var6 / var1;
                                        var1 = var2.bind(var3)(var5, var4, var1);
                                        return var0;
                                }
                            };
                            var0.handleRelease = var4;
                            var4 = function(arg0, arg1, arg2) { // Environment: var3
                                _fun45302: for (var _fun45302_ip = 0;;) switch (_fun45302_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = arg1;
                                        var _closure4_slot0 = var2;
                                        var _closure4_slot1 = var3;
                                        var5 = _closure3_slot0;
                                        var1 = var5.state;
                                        var7 = var1.dragX;
                                        var8 = var1.rowTranslation;
                                        var6 = var7.setValue;
                                        var1 = 0;
                                        var6 = var6.bind(var7)(var1);
                                        var6 = var8.setValue;
                                        var6 = var6.bind(var8)(var2);
                                        var7 = var5.setState;
                                        var6 = {};
                                        var9 = global;
                                        var11 = var9.Math;
                                        var10 = var11.sign;
                                        var10 = var10.bind(var11)(var3);
                                        var6.rowState = var10;
                                        var6 = var7.bind(var5)(var6);
                                        var7 = _closure1_slot7;
                                        var6 = var7.spring;
                                        var11 = var9.Object;
                                        var10 = var11.assign;
                                        var9 = {
                                            'restSpeedThreshold': 1.7,
                                            'restDisplacementThreshold': 0.4,
                                            'velocity': null,
                                            'bounciness': 0
                                        };
                                        var12 = arg2;
                                        var9.velocity = var12;
                                        var9.toValue = var3;
                                        var12 = var5.props;
                                        var12 = var12.useNativeAnimations;
                                        var9.useNativeDriver = var12;
                                        var5 = var5.props;
                                        var5 = var5.animationOptions;
                                        var5 = var10.bind(var11)(var9, var5);
                                        var6 = var6.bind(var7)(var8, var5);
                                        var5 = var6.start;
                                        var4 = function(arg0) { // Environment: var4
                                            _fun45303: for (var _fun45303_ip = 0;;) switch (_fun45303_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var0 = var0.finished;
                                                    if (!var0) {
                                                        _fun45303_ip = 287;
                                                        continue _fun45303
                                                    }
                                                case 15:
                                                    var2 = _closure4_slot1;
                                                    var1 = 0;
                                                    if (!(!(var2 > var1))) {
                                                        _fun45303_ip = 200;
                                                        continue _fun45303
                                                    }
                                                case 31:
                                                    var2 = _closure4_slot1;
                                                    if (!(!(var2 < var1))) {
                                                        _fun45303_ip = 111;
                                                        continue _fun45303
                                                    }
                                                case 39:
                                                    var0 = _closure4_slot0;
                                                    var0 = var0 > var1;
                                                    var3 = 'right';
                                                    if (!var0) {
                                                        _fun45303_ip = 58;
                                                        continue _fun45303
                                                    }
                                                case 54:
                                                    var3 = 'left';
                                                case 58:
                                                    var1 = _closure3_slot0;
                                                    var1 = var1.props;
                                                    var2 = var1.onSwipeableClose;
                                                    var1 = null;
                                                    if (!(var1 != var2)) {
                                                        _fun45303_ip = 287;
                                                        continue _fun45303
                                                    }
                                                case 85:
                                                    var2 = _closure3_slot0;
                                                    var1 = var2.props;
                                                    var0 = var1.onSwipeableClose;
                                                    var0 = var0.bind(var1)(var3, var2);
                                                    _fun45303_ip = 287;
                                                    continue _fun45303;
                                                case 111:
                                                    var1 = _closure3_slot0;
                                                    var1 = var1.props;
                                                    var1 = var1.onSwipeableRightOpen;
                                                    var2 = null;
                                                    if (!(var2 != var1)) {
                                                        _fun45303_ip = 154;
                                                        continue _fun45303
                                                    }
                                                case 135:
                                                    var1 = _closure3_slot0;
                                                    var3 = var1.props;
                                                    var1 = var3.onSwipeableRightOpen;
                                                    var1 = var1.bind(var3)();
                                                case 154:
                                                    var1 = _closure3_slot0;
                                                    var1 = var1.props;
                                                    var1 = var1.onSwipeableOpen;
                                                    if (!(var2 != var1)) {
                                                        _fun45303_ip = 287;
                                                        continue _fun45303
                                                    }
                                                case 173:
                                                    var3 = _closure3_slot0;
                                                    var2 = var3.props;
                                                    var1 = var2.onSwipeableOpen;
                                                    var0 = 'right';
                                                    var0 = var1.bind(var2)(var0, var3);
                                                    _fun45303_ip = 287;
                                                    continue _fun45303;
                                                case 200:
                                                    var1 = _closure3_slot0;
                                                    var1 = var1.props;
                                                    var1 = var1.onSwipeableLeftOpen;
                                                    var2 = null;
                                                    if (!(var2 != var1)) {
                                                        _fun45303_ip = 243;
                                                        continue _fun45303
                                                    }
                                                case 224:
                                                    var1 = _closure3_slot0;
                                                    var3 = var1.props;
                                                    var1 = var3.onSwipeableLeftOpen;
                                                    var1 = var1.bind(var3)();
                                                case 243:
                                                    var1 = _closure3_slot0;
                                                    var1 = var1.props;
                                                    var1 = var1.onSwipeableOpen;
                                                    if (!(var2 != var1)) {
                                                        _fun45303_ip = 287;
                                                        continue _fun45303
                                                    }
                                                case 262:
                                                    var3 = _closure3_slot0;
                                                    var2 = var3.props;
                                                    var1 = var2.onSwipeableOpen;
                                                    var0 = 'left';
                                                    var0 = var1.bind(var2)(var0, var3);
                                                case 287:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var4 = var5.bind(var6)(var4);
                                        if (!(!(var3 > var1))) {
                                            _fun45302_ip = 369;
                                            continue _fun45302
                                        }
                                    case 216:
                                        if (!(!(var3 < var1))) {
                                            _fun45302_ip = 284;
                                            continue _fun45302
                                        }
                                    case 220:
                                        var1 = var2 > var1;
                                        var3 = 'right';
                                        if (!var1) {
                                            _fun45302_ip = 235;
                                            continue _fun45302
                                        }
                                    case 231:
                                        var3 = 'left';
                                    case 235:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var2 = var1.onSwipeableWillClose;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun45302_ip = 452;
                                            continue _fun45302
                                        }
                                    case 259:
                                        var1 = _closure3_slot0;
                                        var2 = var1.props;
                                        var1 = var2.onSwipeableWillClose;
                                        var1 = var1.bind(var2)(var3);
                                        _fun45302_ip = 452;
                                        continue _fun45302;
                                    case 284:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.onSwipeableRightWillOpen;
                                        var2 = null;
                                        if (!(var2 != var1)) {
                                            _fun45302_ip = 324;
                                            continue _fun45302
                                        }
                                    case 305:
                                        var1 = _closure3_slot0;
                                        var3 = var1.props;
                                        var1 = var3.onSwipeableRightWillOpen;
                                        var1 = var1.bind(var3)();
                                    case 324:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.onSwipeableWillOpen;
                                        if (!(var2 != var1)) {
                                            _fun45302_ip = 452;
                                            continue _fun45302
                                        }
                                    case 343:
                                        var1 = _closure3_slot0;
                                        var3 = var1.props;
                                        var2 = var3.onSwipeableWillOpen;
                                        var1 = 'right';
                                        var1 = var2.bind(var3)(var1);
                                        _fun45302_ip = 452;
                                        continue _fun45302;
                                    case 369:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.onSwipeableLeftWillOpen;
                                        var2 = null;
                                        if (!(var2 != var1)) {
                                            _fun45302_ip = 409;
                                            continue _fun45302
                                        }
                                    case 390:
                                        var1 = _closure3_slot0;
                                        var3 = var1.props;
                                        var1 = var3.onSwipeableLeftWillOpen;
                                        var1 = var1.bind(var3)();
                                    case 409:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.onSwipeableWillOpen;
                                        if (!(var2 != var1)) {
                                            _fun45302_ip = 452;
                                            continue _fun45302
                                        }
                                    case 428:
                                        var0 = _closure3_slot0;
                                        var2 = var0.props;
                                        var1 = var2.onSwipeableWillOpen;
                                        var0 = 'left';
                                        var0 = var1.bind(var2)(var0);
                                    case 452:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.animateRow = var4;
                            var4 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var3 = var0.nativeEvent;
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var3 = var3.layout;
                                var3 = var3.width;
                                var0.rowWidth = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0.onRowLayout = var4;
                            var4 = function() { // Environment: var3
                                _fun45305: for (var _fun45305_ip = 0;;) switch (_fun45305_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var5 = var0.state;
                                        var3 = var5.leftWidth;
                                        var4 = undefined;
                                        var0 = 0;
                                        if (!(var4 !== var3)) {
                                            _fun45305_ip = 29;
                                            continue _fun45305
                                        }
                                    case 26:
                                        var0 = var3;
                                    case 29:
                                        var6 = var5.rowWidth;
                                        var3 = 0;
                                        if (!(var4 !== var6)) {
                                            _fun45305_ip = 44;
                                            continue _fun45305
                                        }
                                    case 41:
                                        var3 = var6;
                                    case 44:
                                        var6 = var5.rowState;
                                        var2 = _closure3_slot0;
                                        var2 = var2.state;
                                        var2 = var2.rightOffset;
                                        var5 = 1;
                                        if (!(var5 !== var6)) {
                                            _fun45305_ip = 101;
                                            continue _fun45305
                                        }
                                    case 72:
                                        var5 = -1;
                                        var1 = 0;
                                        if (!(var5 === var6)) {
                                            _fun45305_ip = 98;
                                            continue _fun45305
                                        }
                                    case 84:
                                        if (!(var4 === var2)) {
                                            _fun45305_ip = 91;
                                            continue _fun45305
                                        }
                                    case 88:
                                        var2 = var3;
                                    case 91:
                                        var2 = var3 - var2;
                                        var1 = -var2;
                                    case 98:
                                        var0 = var1;
                                    case 101:
                                        return var0;
                                }
                            };
                            var0.currentOffset = var4;
                            var4 = function() { // Environment: var3
                                var3 = _closure3_slot0;
                                var2 = var3.animateRow;
                                var0 = var3.currentOffset;
                                var1 = var0.bind(var3)();
                                var0 = 0;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0.close = var4;
                            var4 = function() { // Environment: var3
                                _fun45307: for (var _fun45307_ip = 0;;) switch (_fun45307_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var0 = var0.state;
                                        var2 = var0.leftWidth;
                                        var0 = undefined;
                                        var4 = 0;
                                        if (!(var0 !== var2)) {
                                            _fun45307_ip = 29;
                                            continue _fun45307
                                        }
                                    case 26:
                                        var4 = var2;
                                    case 29:
                                        var3 = _closure3_slot0;
                                        var2 = var3.animateRow;
                                        var1 = var3.currentOffset;
                                        var1 = var1.bind(var3)();
                                        var1 = var2.bind(var3)(var1, var4);
                                        return var0;
                                }
                            };
                            var0.openLeft = var4;
                            var4 = function() { // Environment: var3
                                _fun45308: for (var _fun45308_ip = 0;;) switch (_fun45308_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var0 = var0.state;
                                        var1 = var0.rowWidth;
                                        var0 = undefined;
                                        var3 = 0;
                                        if (!(var0 !== var1)) {
                                            _fun45308_ip = 29;
                                            continue _fun45308
                                        }
                                    case 26:
                                        var3 = var1;
                                    case 29:
                                        var1 = _closure3_slot0;
                                        var1 = var1.state;
                                        var1 = var1.rightOffset;
                                        if (!(var0 === var1)) {
                                            _fun45308_ip = 51;
                                            continue _fun45308
                                        }
                                    case 48:
                                        var1 = var3;
                                    case 51:
                                        var1 = var3 - var1;
                                        var4 = _closure3_slot0;
                                        var3 = var4.animateRow;
                                        var2 = var4.currentOffset;
                                        var2 = var2.bind(var4)();
                                        var1 = -var1;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var0.openRight = var4;
                            var3 = function() { // Environment: var3
                                var2 = _closure3_slot0;
                                var0 = var2.state;
                                var4 = var0.dragX;
                                var1 = var0.rowTranslation;
                                var0 = var4.setValue;
                                var3 = 0;
                                var0 = var0.bind(var4)(var3);
                                var0 = var1.setValue;
                                var0 = var0.bind(var1)(var3);
                                var1 = var2.setState;
                                var0 = {};
                                var0.rowState = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0.reset = var3;
                            var4 = _closure1_slot7;
                            var1 = var4.Value;
                            var3 = var1.prototype;
                            var6 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var3 = 0;
                            var15 = var6;
                            var14 = 0;
                            var1 = new var15[var1](var14, var13);
                            var6 = var1 instanceof Object ? var1 : var6;
                            var1 = {};
                            var1.dragX = var6;
                            var7 = var4.Value;
                            var8 = var7.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var15 = var8;
                            var7 = new var15[var7](var14, var13);
                            var7 = var7 instanceof Object ? var7 : var8;
                            var1.rowTranslation = var7;
                            var1.rowState = var3;
                            var1.leftWidth = var2;
                            var1.rightOffset = var2;
                            var1.rowWidth = var2;
                            var0.state = var1;
                            var2 = var0.updateAnimatedEvent;
                            var1 = var0.state;
                            var1 = var2.bind(var0)(var5, var1);
                            var3 = var4.event;
                            var1 = {};
                            var2 = {};
                            var2.translationX = var6;
                            var1.nativeEvent = var2;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var1 = {};
                            var5 = var5.useNativeAnimations;
                            var1.useNativeDriver = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.onGestureEvent = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot6;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot3;
                var4 = {};
                var0 = 'shouldComponentUpdate';
                var4.key = var0;
                var0 = function arg0, arg1() {
                    _fun45310: for (var _fun45310_ip = 0;;) switch (_fun45310_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var1 = this;
                            var0 = var1.props;
                            var4 = var0.friction;
                            var0 = var3.friction;
                            var0 = var4 === var0;
                            if (!var0) {
                                _fun45310_ip = 54;
                                continue _fun45310
                            }
                        case 33:
                            var4 = var1.props;
                            var5 = var4.overshootLeft;
                            var4 = var3.overshootLeft;
                            var0 = var5 === var4;
                        case 54:
                            if (!var0) {
                                _fun45310_ip = 78;
                                continue _fun45310
                            }
                        case 57:
                            var4 = var1.props;
                            var5 = var4.overshootRight;
                            var4 = var3.overshootRight;
                            var0 = var5 === var4;
                        case 78:
                            if (!var0) {
                                _fun45310_ip = 102;
                                continue _fun45310
                            }
                        case 81:
                            var4 = var1.props;
                            var5 = var4.overshootFriction;
                            var4 = var3.overshootFriction;
                            var0 = var5 === var4;
                        case 102:
                            if (!var0) {
                                _fun45310_ip = 126;
                                continue _fun45310
                            }
                        case 105:
                            var4 = var1.state;
                            var5 = var4.leftWidth;
                            var4 = var2.leftWidth;
                            var0 = var5 === var4;
                        case 126:
                            if (!var0) {
                                _fun45310_ip = 150;
                                continue _fun45310
                            }
                        case 129:
                            var4 = var1.state;
                            var5 = var4.rightOffset;
                            var4 = var2.rightOffset;
                            var0 = var5 === var4;
                        case 150:
                            if (!var0) {
                                _fun45310_ip = 174;
                                continue _fun45310
                            }
                        case 153:
                            var4 = var1.state;
                            var5 = var4.rowWidth;
                            var4 = var2.rowWidth;
                            var0 = var5 === var4;
                        case 174:
                            if (var0) {
                                _fun45310_ip = 189;
                                continue _fun45310
                            }
                        case 177:
                            var0 = var1.updateAnimatedEvent;
                            var0 = var0.bind(var1)(var3, var2);
                        case 189:
                            var0 = true;
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(2);
                var0[0] = var4;
                var4 = {};
                var6 = 'render';
                var4.key = var6;
                var5 = function() {
                    _fun45311: for (var _fun45311_ip = 0;;) switch (_fun45311_ip) {
                        case 0:
                            var18 = this;
                            var _closure3_slot0 = var18;
                            var0 = var18.state;
                            var20 = var0.rowState;
                            var0 = var18.props;
                            var16 = var0.children;
                            var11 = var0.renderLeftActions;
                            var9 = var0.renderRightActions;
                            var1 = var0.dragOffsetFromLeftEdge;
                            var17 = 10;
                            var3 = undefined;
                            var4 = var17;
                            if (!(var3 !== var1)) {
                                _fun45311_ip = 67;
                                continue _fun45311
                            }
                        case 64:
                            var4 = var1;
                        case 67:
                            var1 = var0.dragOffsetFromRightEdge;
                            var0 = var17;
                            if (!(var3 !== var1)) {
                                _fun45311_ip = 85;
                                continue _fun45311
                            }
                        case 82:
                            var0 = var1;
                        case 85:
                            var21 = var11;
                            if (!var21) {
                                _fun45311_ip = 232;
                                continue _fun45311
                            }
                        case 94:
                            var5 = _closure1_slot10;
                            var1 = _closure1_slot7;
                            var2 = var1.View;
                            var1 = {};
                            var6 = _closure1_slot11;
                            var8 = var6.leftActions;
                            var6 = new Array(2);
                            var6[0] = var8;
                            var8 = {};
                            var13 = {};
                            var12 = var18.leftActionTranslate;
                            var13.translateX = var12;
                            var12 = new Array(1);
                            var12[0] = var13;
                            var8.transform = var12;
                            var6[1] = var8;
                            var1.style = var6;
                            var8 = var18.showLeftAction;
                            var6 = var18.transX;
                            var8 = var11.bind(var3)(var8, var6, var18);
                            var6 = new Array(2);
                            var6[0] = var8;
                            var11 = _closure1_slot9;
                            var8 = _closure1_slot8;
                            var7 = {};
                            var12 = function arg0() {
                                var0 = arg0;
                                var3 = var0.nativeEvent;
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var3 = var3.layout;
                                var3 = var3.x;
                                var0.leftWidth = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var7.onLayout = var12;
                            var7 = var11.bind(var3)(var8, var7);
                            var6[1] = var7;
                            var1.children = var6;
                            var21 = var5.bind(var3)(var2, var1);
                        case 232:
                            var19 = var9;
                            if (!var19) {
                                _fun45311_ip = 379;
                                continue _fun45311
                            }
                        case 241:
                            var5 = _closure1_slot10;
                            var1 = _closure1_slot7;
                            var2 = var1.View;
                            var1 = {};
                            var6 = _closure1_slot11;
                            var8 = var6.rightActions;
                            var6 = new Array(2);
                            var6[0] = var8;
                            var8 = {};
                            var12 = {};
                            var11 = var18.rightActionTranslate;
                            var12.translateX = var11;
                            var11 = new Array(1);
                            var11[0] = var12;
                            var8.transform = var11;
                            var6[1] = var8;
                            var1.style = var6;
                            var8 = var18.showRightAction;
                            var6 = var18.transX;
                            var8 = var9.bind(var3)(var8, var6, var18);
                            var6 = new Array(2);
                            var6[0] = var8;
                            var9 = _closure1_slot9;
                            var8 = _closure1_slot8;
                            var7 = {};
                            var10 = function arg0() {
                                var0 = arg0;
                                var3 = var0.nativeEvent;
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var3 = var3.layout;
                                var3 = var3.x;
                                var0.rightOffset = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var7.onLayout = var10;
                            var7 = var9.bind(var3)(var8, var7);
                            var6[1] = var7;
                            var1.children = var6;
                            var19 = var5.bind(var3)(var2, var1);
                        case 379:
                            var2 = _closure1_slot9;
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var1 = 9;
                            var1 = var12[var1];
                            var1 = var13.bind(var3)(var1);
                            var1 = var1.PanGestureHandler;
                            var5 = global;
                            var7 = var5.Object;
                            var6 = var7.assign;
                            var5 = {};
                            var8 = -var0;
                            var0 = new Array(2);
                            var0[0] = var8;
                            var0[1] = var4;
                            var5.activeOffsetX = var0;
                            var15 = 'pan-y';
                            var5.touchAction = var15;
                            var4 = var18.props;
                            var0 = {};
                            var8 = var18.onGestureEvent;
                            var0.onGestureEvent = var8;
                            var8 = var18.onHandlerStateChange;
                            var0.onHandlerStateChange = var8;
                            var10 = _closure1_slot10;
                            var14 = _closure1_slot7;
                            var9 = var14.View;
                            var8 = {};
                            var22 = var18.onRowLayout;
                            var8.onLayout = var22;
                            var11 = _closure1_slot11;
                            var22 = var11.container;
                            var11 = new Array(2);
                            var11[0] = var22;
                            var22 = var18.props;
                            var22 = var22.containerStyle;
                            var11[1] = var22;
                            var8.style = var11;
                            var11 = new Array(3);
                            var11[0] = var21;
                            var11[1] = var19;
                            var12 = var12[var17];
                            var12 = var13.bind(var3)(var12);
                            var13 = var12.TapGestureHandler;
                            var12 = {};
                            var19 = 0;
                            var17 = var19 !== var20;
                            var12.enabled = var17;
                            var12.touchAction = var15;
                            var15 = var18.onTapHandlerStateChange;
                            var12.onHandlerStateChange = var15;
                            var15 = var14.View;
                            var14 = {};
                            var17 = 'box-only';
                            if (!(var19 === var20)) {
                                _fun45311_ip = 625;
                                continue _fun45311
                            }
                        case 621:
                            var17 = 'auto';
                        case 625:
                            var14.pointerEvents = var17;
                            var19 = {};
                            var20 = {};
                            var17 = var18.transX;
                            var20.translateX = var17;
                            var17 = new Array(1);
                            var17[0] = var20;
                            var19.transform = var17;
                            var17 = new Array(2);
                            var17[0] = var19;
                            var18 = var18.props;
                            var18 = var18.childrenContainerStyle;
                            var17[1] = var18;
                            var14.style = var17;
                            var14.children = var16;
                            var14 = var2.bind(var3)(var15, var14);
                            var12.children = var14;
                            var12 = var2.bind(var3)(var13, var12);
                            var11[2] = var12;
                            var8.children = var11;
                            var8 = var10.bind(var3)(var9, var8);
                            var0.children = var8;
                            var0 = var6.bind(var7)(var5, var4, var0);
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var4.value = var5;
                var0[1] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var3 = {
                'friction': 1,
                'overshootFriction': 1,
                'useNativeAnimations': true
            };
            var1.defaultProps = var3;
            var5 = var6.create;
            var3 = {};
            var9 = {};
            var10 = 'hidden';
            var9.overflow = var10;
            var3.container = var9;
            var14 = var8.Object;
            var13 = var14.assign;
            var11 = var6.absoluteFillObject;
            var10 = {};
            var15 = var7.isRTL;
            var12 = 'row';
            var9 = var12;
            if (!var15) {
                _fun45292_ip = 340;
                continue _fun45292
            }
        case 334:
            var9 = 'row-reverse';
        case 340:
            var10.flexDirection = var9;
            var9 = {};
            var9 = var13.bind(var14)(var9, var11, var10);
            var3.leftActions = var9;
            var11 = var8.Object;
            var10 = var11.assign;
            var9 = var6.absoluteFillObject;
            var8 = {};
            var13 = var7.isRTL;
            var7 = 'row-reverse';
            if (!var13) {
                _fun45292_ip = 395;
                continue _fun45292
            }
        case 392:
            var7 = var12;
        case 395:
            var8.flexDirection = var7;
            var7 = {};
            var7 = var10.bind(var11)(var7, var9, var8);
            var3.rightActions = var7;
            var3 = var5.bind(var6)(var3);
            var _closure1_slot11 = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 4969, 4994, 4982]);