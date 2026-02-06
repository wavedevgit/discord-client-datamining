// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34090: for (var _fun34090_ip = 0;;) switch (_fun34090_ip) {
        case 0:
            var5 = global;
            var4 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var4;
            var _closure1_slot2 = var6;
            var7 = global;
            var10 = var7.Object;
            var9 = var10.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var10)(var2, var0, var1);
            var0 = 0;
            var1 = var6[var0];
            var0 = undefined;
            var1 = var8.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var8.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var4.bind(var0)(var1);
            var8 = var1.NativeEventEmitter;
            var _closure1_slot5 = var8;
            var1 = var1.Platform;
            var1 = 3;
            var1 = var6[var1];
            var4 = var4.bind(var0)(var1);
            var1 = var4.shouldBeUseWeb;
            var6 = var1.bind(var4)();
            var1 = function() { // Environment: var3
                var3 = function() {
                    var2 = this;
                    var4 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var1 = _closure1_slot5;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var7 = var3;
                    var6 = undefined;
                    var1 = new var7[var1](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2._reanimatedEventEmitter = var1;
                    return var0;
                };
                var _closure2_slot0 = var3;
                var2 = _closure1_slot4;
                var0 = {};
                var1 = 'addOnJSPropsChangeListener';
                var0.key = var1;
                var1 = function arg0() {
                    _fun34093: for (var _fun34093_ip = 0;;) switch (_fun34093_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.getComponentViewTag;
                            var3 = var0.bind(var4)();
                            var0 = _closure2_slot0;
                            var2 = var0._tagToComponentMapping;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3, var4);
                            var0 = var0._tagToComponentMapping;
                            var1 = var0.size;
                            var0 = 1;
                            if (!(var0 === var1)) {
                                _fun34093_ip = 89;
                                continue _fun34093
                            }
                        case 55:
                            var0 = this;
                            var3 = var0._reanimatedEventEmitter;
                            var2 = var3.addListener;
                            var1 = 'onReanimatedPropsChange';
                            var0 = function arg0() {
                                _fun34094: for (var _fun34094_ip = 0;;) switch (_fun34094_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = _closure2_slot0;
                                        var3 = var1._tagToComponentMapping;
                                        var2 = var3.get;
                                        var1 = var0.viewTag;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun34094_ip = 54;
                                            continue _fun34094
                                        }
                                    case 38:
                                        var1 = var2._updateFromNative;
                                        var0 = var0.props;
                                        var0 = var1.bind(var2)(var0);
                                    case 54:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                        case 89:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var1;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = {};
                var5 = 'removeOnJSPropsChangeListener';
                var0.key = var5;
                var4 = function arg0() {
                    _fun34095: for (var _fun34095_ip = 0;;) switch (_fun34095_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.getComponentViewTag;
                            var3 = var0.bind(var1)();
                            var0 = _closure2_slot0;
                            var2 = var0._tagToComponentMapping;
                            var1 = var2.delete;
                            var1 = var1.bind(var2)(var3);
                            var0 = var0._tagToComponentMapping;
                            var1 = var0.size;
                            var0 = 0;
                            if (!(var0 === var1)) {
                                _fun34095_ip = 79;
                                continue _fun34095
                            }
                        case 53:
                            var0 = this;
                            var2 = var0._reanimatedEventEmitter;
                            var1 = var2.removeAllListeners;
                            var0 = 'onReanimatedPropsChange';
                            var0 = var1.bind(var2)(var0);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var4;
                var1[1] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
            };
            var1 = var1.bind(var0)();
            var4 = var7.Map;
            var8 = var4.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var4
                }
            });
            var14 = var8;
            var4 = new var14[var4](var13);
            var4 = var4 instanceof Object ? var4 : var8;
            var1._tagToComponentMapping = var4;
            var4 = {};
            var8 = 'function pnpm_JSPropsUpdaterTs1(){const{runOnJS,updater}=this.__closure;global.updateJSProps=function(viewTag,props){runOnJS(updater)(viewTag,props);};}';
            var4.code = var8;
            var _closure1_slot6 = var4;
            var4 = function() { // Environment: var3
                var3 = function() {
                    _fun34097: for (var _fun34097_ip = 0;;) switch (_fun34097_ip) {
                        case 0:
                            var6 = _closure1_slot3;
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var4 = this;
                            var4 = var6.bind(var0)(var4, var3);
                            var3 = var3.isInitialized;
                            if (var3) {
                                _fun34097_ip = 154;
                                continue _fun34097
                            }
                        case 36:
                            var7 = function arg0, arg1() {
                                _fun34098: for (var _fun34098_ip = 0;;) switch (_fun34098_ip) {
                                    case 0:
                                        var0 = _closure2_slot0;
                                        var2 = var0._tagToComponentMapping;
                                        var1 = var2.get;
                                        var0 = arg0;
                                        var2 = var1.bind(var2)(var0);
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun34098_ip = 46;
                                            continue _fun34098
                                        }
                                    case 32:
                                        var1 = var2._updateFromNative;
                                        var0 = arg1;
                                        var0 = var1.bind(var2)(var0);
                                    case 46:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot0 = var7;
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var8 = 4;
                            var3 = var10[var8];
                            var4 = var9.bind(var0)(var3);
                            var3 = var4.runOnUIImmediately;
                            var2 = function() {
                                var1 = _closure1_slot0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 4;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.runOnJS;
                                    var1 = _closure3_slot0;
                                    var3 = var2.bind(var3)(var1);
                                    var2 = arg0;
                                    var1 = arg1;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var1.updateJSProps = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var6 = {};
                            var8 = var10[var8];
                            var8 = var9.bind(var0)(var8);
                            var8 = var8.runOnJS;
                            var6.runOnJS = var8;
                            var6.updater = var7;
                            var2.__closure = var6;
                            var6 = 2068327241111.0;
                            var2.__workletHash = var6;
                            var5 = _closure1_slot6;
                            var2.__initData = var5;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var0)();
                            var2 = _closure2_slot0;
                            var1 = true;
                            var2.isInitialized = var1;
                        case 154:
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var2 = _closure1_slot4;
                var0 = {};
                var1 = 'addOnJSPropsChangeListener';
                var0.key = var1;
                var1 = function arg0() {
                    _fun34101: for (var _fun34101_ip = 0;;) switch (_fun34101_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot0;
                            var1 = var1.isInitialized;
                            if (!var1) {
                                _fun34101_ip = 50;
                                continue _fun34101
                            }
                        case 19:
                            var1 = var3.getComponentViewTag;
                            var2 = var1.bind(var3)();
                            var0 = _closure2_slot0;
                            var1 = var0._tagToComponentMapping;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2, var3);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var1;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = {};
                var5 = 'removeOnJSPropsChangeListener';
                var0.key = var5;
                var4 = function arg0() {
                    _fun34102: for (var _fun34102_ip = 0;;) switch (_fun34102_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            var1 = var1.isInitialized;
                            if (!var1) {
                                _fun34102_ip = 49;
                                continue _fun34102
                            }
                        case 19:
                            var1 = var2.getComponentViewTag;
                            var2 = var1.bind(var2)();
                            var0 = _closure2_slot0;
                            var1 = var0._tagToComponentMapping;
                            var0 = var1.delete;
                            var0 = var0.bind(var1)(var2);
                        case 49:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var4;
                var1[1] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
            };
            var4 = var4.bind(var0)();
            var7 = var7.Map;
            var8 = var7.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var7
                }
            });
            var14 = var8;
            var7 = new var14[var7](var13);
            var7 = var7 instanceof Object ? var7 : var8;
            var4._tagToComponentMapping = var7;
            var7 = false;
            var4.isInitialized = var7;
            if (var6) {
                _fun34090_ip = 267;
                continue _fun34090
            }
        case 253:
            var5 = var5._IS_FABRIC;
            if (!var5) {
                _fun34090_ip = 265;
                continue _fun34090
            }
        case 262:
            var1 = var4;
        case 265:
            _fun34090_ip = 276;
            continue _fun34090;
        case 267:
            var3 = function() { // Environment: var3
                var3 = _closure1_slot4;
                var2 = function() {
                    var3 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = this;
                    var1 = var3.bind(var0)(var1, var2);
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'addOnJSPropsChangeListener';
                var0.key = var1;
                var1 = function arg0() {
                    var0 = undefined;
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = {};
                var5 = 'removeOnJSPropsChangeListener';
                var0.key = var5;
                var4 = function arg0() {
                    var0 = undefined;
                    return var0;
                };
                var0.value = var4;
                var1[1] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1 = var3.bind(var0)();
        case 276:
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 3726, 3730]);