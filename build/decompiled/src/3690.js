// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = global;
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.ReanimatedError;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = '`_makeShareableClone` should never be called from React runtime.';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var6._makeShareableClone = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.ReanimatedError;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = '`_scheduleOnJS` should never be called from React runtime.';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var6._scheduleHostFunctionOnJS = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.ReanimatedError;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = '`_scheduleOnRuntime` should never be called from React runtime.';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var6._scheduleOnRuntime = var3;
    var3 = function arg0, arg1, arg2() {
        _fun33073: for (var _fun33073_ip = 0;;) switch (_fun33073_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var0 = arg2;
                if (!var0) {
                    _fun33073_ip = 114;
                    continue _fun33073
                }
            case 12:
                var1 = {};
                var9 = var5;
                var3 = 4;
                var0 = undefined;
                for (var6 in var9)
                    case 33: {
                        case 42: var12 = var6;
                        var13 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var3];
                        var11 = var13.bind(var0)(var11);
                        var11 = var11.PropsAllowlists;
                        var11 = var11.NATIVE_THREAD_PROPS_WHITELIST;
                        var11 = var11[var12];
                        if (!var11) {
                            _fun33073_ip = 33;
                            continue _fun33073
                        }
                        case 81: var11 = var5[var12];
                        var1[var12] = var11;
                        _fun33073_ip = 33;
                        continue _fun33073;
                    }
            case 91:
                var3 = var2.setNativeProps;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun33073_ip = 114;
                    continue _fun33073
                }
            case 103:
                var0 = var2.setNativeProps;
                var0 = var0.bind(var2)(var1);
            case 114:
                var0 = var2.previousStyle;
                if (var0) {
                    _fun33073_ip = 127;
                    continue _fun33073
                }
            case 123:
                var4 = {};
                _fun33073_ip = 133;
                continue _fun33073;
            case 127:
                var4 = var2.previousStyle;
            case 133:
                var0 = global;
                var3 = var0.Object;
                var1 = var3.assign;
                var0 = {};
                var3 = var1.bind(var3)(var0, var4, var5);
                var2.previousStyle = var3;
                var1 = var2.setNativeProps;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun33073_ip = 190;
                    continue _fun33073
                }
            case 173:
                var1 = var2.setNativeProps;
                var0 = {};
                var0.style = var3;
                var0 = var1.bind(var2)(var0);
            case 190:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var3 = function arg0, arg1, arg2() {
        _fun33074: for (var _fun33074_ip = 0;;) switch (_fun33074_ip) {
            case 0:
                var10 = arg0;
                var9 = arg2;
                var0 = var10.previousStyle;
                if (var0) {
                    _fun33074_ip = 19;
                    continue _fun33074
                }
            case 15:
                var5 = {};
                _fun33074_ip = 25;
                continue _fun33074;
            case 19:
                var5 = var10.previousStyle;
            case 25:
                var2 = global;
                var4 = var2.Object;
                var3 = var4.assign;
                var1 = {};
                var0 = arg1;
                var6 = var3.bind(var4)(var1, var5, var0);
                var10.previousStyle = var6;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 2;
                var4 = var0[var3];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.createReactDOMStyle;
                var8 = var4.bind(var5)(var6);
                var12 = var2.Array;
                var11 = var12.isArray;
                var2 = var8.transform;
                var2 = var11.bind(var12)(var2);
                if (!var2) {
                    _fun33074_ip = 143;
                    continue _fun33074
                }
            case 116:
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var3];
                var11 = var12.bind(var0)(var11);
                var11 = var11.createTransformValue;
                var2 = var0 !== var11;
            case 143:
                if (!var2) {
                    _fun33074_ip = 185;
                    continue _fun33074
                }
            case 146:
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var3];
                var12 = var11.bind(var0)(var2);
                var11 = var12.createTransformValue;
                var2 = var8.transform;
                var2 = var11.bind(var12)(var2);
                var8.transform = var2;
            case 185:
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var3];
                var2 = var11.bind(var0)(var2);
                var2 = var2.createTextShadowValue;
                var2 = var0 !== var2;
                if (!var2) {
                    _fun33074_ip = 242;
                    continue _fun33074
                }
            case 215:
                var11 = var8.textShadowColor;
                if (var11) {
                    _fun33074_ip = 230;
                    continue _fun33074
                }
            case 224:
                var11 = var8.textShadowRadius;
            case 230:
                if (var11) {
                    _fun33074_ip = 239;
                    continue _fun33074
                }
            case 233:
                var11 = var8.textShadowOffset;
            case 239:
                var2 = var11;
            case 242:
                if (!var2) {
                    _fun33074_ip = 314;
                    continue _fun33074
                }
            case 245:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.createTextShadowValue;
                var1 = {};
                var11 = var8.textShadowColor;
                var1.textShadowColor = var11;
                var11 = var8.textShadowOffset;
                var1.textShadowOffset = var11;
                var11 = var8.textShadowRadius;
                var1.textShadowRadius = var11;
                var1 = var2.bind(var3)(var1);
                var8.textShadow = var1;
            case 314:
                var6 = var8;
                var2 = 'text';
                var1 = 'INPUT';
                for (var3 in var6)
                    case 335: {
                        case 344: var11 = var3;
                        if (var9) {
                            _fun33074_ip = 365;
                            continue _fun33074
                        }
                        case 350: var13 = var10.style;
                        var12 = var8[var11];
                        var13[var11] = var12;
                        _fun33074_ip = 335;
                        continue _fun33074;
                        case 365: var12 = var10.nodeName;
                        if (!(var1 === var12)) {
                            _fun33074_ip = 379;
                            continue _fun33074
                        }
                        case 375: if (!(var2 !== var11)) {
                            _fun33074_ip = 397;
                            continue _fun33074
                        }
                        case 379: var13 = var10.setAttribute;
                        var12 = var8[var11];
                        var12 = var13.bind(var10)(var11, var12);
                        _fun33074_ip = 335;
                        continue _fun33074;
                        case 397: var11 = var8[var11];
                        var10.value = var11;
                        _fun33074_ip = 335;
                        continue _fun33074;
                    }
            case 409:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createJSReanimatedModule;
    var2.createJSReanimatedModule = var3;
    var1 = function arg0, arg1, arg2() {
        _fun33075: for (var _fun33075_ip = 0;;) switch (_fun33075_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var4 = arg2;
                var _closure2_slot0 = var2;
                if (!var1) {
                    _fun33075_ip = 375;
                    continue _fun33075
                }
            case 21:
                var0 = var1.getAnimatableRef;
                var3 = var1;
                if (!var0) {
                    _fun33075_ip = 43;
                    continue _fun33075
                }
            case 33:
                var0 = var1.getAnimatableRef;
                var3 = var0.bind(var1)();
            case 43:
                var _closure2_slot1 = var3;
                var6 = global;
                var1 = var6.Object;
                var0 = var1.keys;
                var7 = var0.bind(var1)(var2);
                var2 = var7.reduce;
                var1 = new Array(2);
                var0 = {};
                var1[0] = var0;
                var0 = {};
                var1[1] = var0;
                var0 = function(arg0, arg1) { // Environment: var5
                    _fun33076: for (var _fun33076_ip = 0;;) switch (_fun33076_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = arg1;
                            var1 = _closure2_slot0;
                            var2 = var1[var3];
                            var5 = 'function';
                            var4 = typeof var2;
                            var1 = 0;
                            if (!(var5 === var4)) {
                                _fun33076_ip = 33;
                                continue _fun33076
                            }
                        case 30:
                            var1 = 1;
                        case 33:
                            var1 = var0[var1];
                            var1[var3] = var2;
                            return var0;
                    }
                };
                var8 = var2.bind(var7)(var0, var1);
                var7 = _closure1_slot2;
                var2 = undefined;
                var1 = 1;
                var1 = var7.bind(var2)(var8, var1);
                var8 = 0;
                var1 = var1[var8];
                var _closure2_slot2 = var1;
                var7 = var3.setNativeProps;
                var9 = 'function';
                var7 = typeof var7;
                if (!(var9 !== var7)) {
                    _fun33075_ip = 364;
                    continue _fun33075
                }
            case 146:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 2;
                var7 = var10[var7];
                var7 = var9.bind(var2)(var7);
                var7 = var7.createReactDOMStyle;
                if (!(var2 !== var7)) {
                    _fun33075_ip = 188;
                    continue _fun33075
                }
            case 176:
                var7 = var3.style;
                if (!(var2 === var7)) {
                    _fun33075_ip = 351;
                    continue _fun33075
                }
            case 188:
                var10 = var6.Object;
                var9 = var10.keys;
                var7 = var3.props;
                var7 = var9.bind(var10)(var7);
                var7 = var7.length;
                if (!(!(var7 > var8))) {
                    _fun33075_ip = 313;
                    continue _fun33075
                }
            case 218:
                var7 = 'className';
                var7 = var7 in var3;
                var11 = '';
                if (!var7) {
                    _fun33075_ip = 253;
                    continue _fun33075
                }
            case 233:
                var7 = null;
                var8 = var7 == var3;
                var7 = undefined;
                if (var8) {
                    _fun33075_ip = 250;
                    continue _fun33075
                }
            case 244:
                var7 = var3.className;
            case 250:
                var11 = var7;
            case 253:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 3;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var9 = var7.logger;
                var8 = var9.warn;
                var7 = var6.HermesInternal;
                var10 = var7.concat;
                var7 = "It's not possible to manipulate the component ";
                var7 = var10.bind(var7)(var11);
                var7 = var8.bind(var9)(var7);
                _fun33075_ip = 375;
                continue _fun33075;
            case 313:
                var8 = var6.Object;
                var7 = var8.keys;
                var6 = var3.props;
                var7 = var7.bind(var8)(var6);
                var6 = var7.forEach;
                var5 = function(arg0) { // Environment: var5
                    _fun33077: for (var _fun33077_ip = 0;;) switch (_fun33077_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot2;
                            var1 = var1[var4];
                            if (!var1) {
                                _fun33077_ip = 81;
                                continue _fun33077
                            }
                        case 17:
                            var3 = var4.replace;
                            var2 = /[A-Z]/g;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = var1.toLowerCase;
                                var1 = var0.bind(var1)();
                                var0 = '-';
                                var0 = var0 + var1;
                                return var0;
                            };
                            var3 = var3.bind(var4)(var2, var1);
                            var1 = _closure2_slot1;
                            var2 = var1._touchableNode;
                            var1 = var2.setAttribute;
                            var0 = _closure2_slot2;
                            var0 = var0[var4];
                            var0 = var1.bind(var2)(var3, var0);
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                _fun33075_ip = 375;
                continue _fun33075;
            case 351:
                var5 = _closure1_slot4;
                var5 = var5.bind(var2)(var3, var1, var4);
                _fun33075_ip = 375;
                continue _fun33075;
            case 364:
                var0 = _closure1_slot3;
                var0 = var0.bind(var2)(var3, var1, var4);
            case 375:
                var0 = undefined;
                return var0;
        }
    };
    var2._updatePropsJS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3691, 3692, 3684, 3693, 3694]);