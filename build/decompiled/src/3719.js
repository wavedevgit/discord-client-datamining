// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33289: for (var _fun33289_ip = 0;;) switch (_fun33289_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = function() {
                var0 = undefined;
                return var0;
            };
            var _closure1_slot13 = var0;
            var0 = function() {
                var0 = undefined;
                return var0;
            };
            var _closure1_slot14 = var0;
            var0 = global;
            var7 = var0.Object;
            var3 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var7)(var2, var0, var1);
            var3 = 0;
            var1 = var6[var3];
            var0 = undefined;
            var7 = var5.bind(var0)(var1);
            var1 = var7.shouldBeUseWeb;
            var1 = var1.bind(var7)();
            var3 = var6[var3];
            var5 = var5.bind(var0)(var3);
            var3 = var5.isJest;
            var3 = var3.bind(var5)();
            var _closure1_slot2 = var3;
            var3 = {};
            var5 = "function addCompilerSafeGetAndSet_Pnpm_mutablesTs1(mutable){Object.defineProperties(mutable,{get:{value:function(){return mutable.value;},configurable:false,enumerable:false},set:{value:function(newValue){if(typeof newValue==='function'&&!newValue.__isAnimationDefinition){mutable.value=newValue(mutable.value);}else{mutable.value=newValue;}},configurable:false,enumerable:false}});}";
            var3.code = var5;
            var _closure1_slot3 = var3;
            var3 = function() { // Environment: var4
                var0 = function arg0() {
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var0 = global;
                    var3 = var0.Object;
                    var2 = var3.defineProperties;
                    var1 = {};
                    var0 = {
                        'value': null,
                        'configurable': false,
                        'enumerable': false
                    };
                    var5 = function() {
                        var0 = _closure3_slot0;
                        var0 = var0.value;
                        return var0;
                    };
                    var0.value = var5;
                    var1.get = var0;
                    var5 = {
                        'value': null,
                        'configurable': false,
                        'enumerable': false
                    };
                    var7 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = function arg0() {
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var1 = function() { // Environment: var1
                            var1 = _closure4_slot0;
                            var0 = var1.toString;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var0.toString = var1;
                        return var0;
                    };
                    var0 = undefined;
                    var6 = function(arg0) { // Environment: var6
                        _fun33298: for (var _fun33298_ip = 0;;) switch (_fun33298_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = 'function';
                                var0 = typeof var1;
                                if (!(var2 === var0)) {
                                    _fun33298_ip = 50;
                                    continue _fun33298
                                }
                            case 14:
                                var0 = var1.__isAnimationDefinition;
                                if (var0) {
                                    _fun33298_ip = 50;
                                    continue _fun33298
                                }
                            case 23:
                                var2 = _closure3_slot0;
                                var3 = var2.value;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var3);
                                var2.value = var0;
                                _fun33298_ip = 63;
                                continue _fun33298;
                            case 50:
                                var0 = _closure3_slot0;
                                var0.value = var1;
                            case 63:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var6 = var7.bind(var0)(var6);
                    var5.value = var6;
                    var1.set = var5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
                var1 = {};
                var0.__closure = var1;
                var1 = 14094096506039.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot3;
                var0.__initData = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var _closure1_slot4 = var3;
            var3 = {};
            var5 = "function hideInternalValueProp_Pnpm_mutablesTs2(mutable){Object.defineProperty(mutable,'_value',{configurable:false,enumerable:false});}";
            var3.code = var5;
            var _closure1_slot5 = var3;
            var3 = function() { // Environment: var4
                var0 = function arg0() {
                    var0 = global;
                    var4 = var0.Object;
                    var3 = var4.defineProperty;
                    var2 = arg0;
                    var1 = '_value';
                    var0 = {
                        'configurable': false,
                        'enumerable': false
                    };
                    var0 = var3.bind(var4)(var2, var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = {};
                var0.__closure = var1;
                var1 = 3380393180484.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot5;
                var0.__initData = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var _closure1_slot6 = var3;
            var3 = {};
            var5 = 'function makeMutableUI_Pnpm_mutablesTs3(initial){const{valueSetter,hideInternalValueProp,addCompilerSafeGetAndSet}=this.__closure;const listeners=new Map();let value=initial;const mutable={get value(){return value;},set value(newValue){valueSetter(mutable,newValue);},get _value(){return value;},set _value(newValue){value=newValue;listeners.forEach(function(listener){listener(newValue);});},modify:function(modifier,forceUpdate=true){valueSetter(mutable,modifier!==undefined?modifier(value):value,forceUpdate);},addListener:function(id,listener){listeners.set(id,listener);},removeListener:function(id){listeners.delete(id);},_animation:null,_isReanimatedSharedValue:true};hideInternalValueProp(mutable);addCompilerSafeGetAndSet(mutable);return mutable;}';
            var3.code = var5;
            var _closure1_slot7 = var3;
            var3 = function() { // Environment: var4
                var0 = function arg0() {
                    var0 = global;
                    var0 = var0.Map;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var6 = var2;
                    var0 = new var6[var0](var5);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var _closure3_slot0 = var0;
                    var0 = arg0;
                    var _closure3_slot1 = var0;
                    var0 = {};
                    var4 = function() {
                        var0 = _closure3_slot1;
                        return var0;
                    };
                    var3 = function arg0() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.valueSetter;
                        var2 = _closure3_slot2;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var2 = 'value';
                    Object.defineProperty(var0, var2, {
                        get: var4,
                        set: var3,
                        enumerable: true
                    });
                    var4 = function() {
                        var0 = _closure3_slot1;
                        return var0;
                    };
                    var3 = function arg0() {
                        var2 = arg0;
                        var _closure4_slot0 = var2;
                        _closure3_slot1 = var2;
                        var2 = _closure3_slot0;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure4_slot0;
                            var1 = arg0;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = '_value';
                    Object.defineProperty(var0, var2, {
                        get: var4,
                        set: var3,
                        enumerable: true
                    });
                    var2 = function arg0() {
                        _fun33308: for (var _fun33308_ip = 0;;) switch (_fun33308_ip) {
                            case 0:
                                var7 = arg0;
                                var0 = undefined;
                                var2 = undefined;
                                var3 = arguments.length;
                                var1 = 1;
                                var3 = var3 > var1;
                                if (!var3) {
                                    _fun33308_ip = 28;
                                    continue _fun33308
                                }
                            case 20:
                                var4 = arguments[var1];
                                var3 = var0 !== var4;
                            case 28:
                                var5 = !var3;
                                if (!var3) {
                                    _fun33308_ip = 38;
                                    continue _fun33308
                                }
                            case 34:
                                var5 = arguments[var1];
                            case 38:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 2;
                                var1 = var3[var1];
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.valueSetter;
                                var2 = _closure3_slot2;
                                if (!(var0 === var7)) {
                                    _fun33308_ip = 84;
                                    continue _fun33308
                                }
                            case 78:
                                var1 = _closure3_slot1;
                                _fun33308_ip = 93;
                                continue _fun33308;
                            case 84:
                                var6 = _closure3_slot1;
                                var1 = var7.bind(var0)(var6);
                            case 93:
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var0;
                        }
                    };
                    var0.modify = var2;
                    var2 = function arg0, arg1() {
                        var3 = _closure3_slot0;
                        var2 = var3.set;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.addListener = var2;
                    var2 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.delete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.removeListener = var2;
                    var2 = null;
                    var0._animation = var2;
                    var2 = true;
                    var0._isReanimatedSharedValue = var2;
                    var _closure3_slot2 = var0;
                    var3 = _closure1_slot6;
                    var2 = undefined;
                    var3 = var3.bind(var2)(var0);
                    var1 = _closure1_slot4;
                    var1 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.valueSetter;
                var2.valueSetter = var3;
                var3 = _closure1_slot6;
                var2.hideInternalValueProp = var3;
                var3 = _closure1_slot4;
                var2.addCompilerSafeGetAndSet = var3;
                var0.__closure = var2;
                var2 = 8132940328790.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot7;
                var0.__initData = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var _closure1_slot8 = var3;
            var5 = {};
            var6 = 'function pnpm_mutablesTs4(){const{makeMutableUI,initial}=this.__closure;return makeMutableUI(initial);}';
            var5.code = var6;
            var _closure1_slot9 = var5;
            var5 = {};
            var6 = 'function pnpm_mutablesTs5(sv){return sv.value;}';
            var5.code = var6;
            var _closure1_slot10 = var5;
            var5 = {};
            var6 = 'function pnpm_mutablesTs6(){const{mutable,newValue}=this.__closure;mutable.value=newValue;}';
            var5.code = var6;
            var _closure1_slot11 = var5;
            var5 = {};
            var6 = 'function pnpm_mutablesTs7(){const{mutable,modifier,forceUpdate}=this.__closure;mutable.modify(modifier,forceUpdate);}';
            var5.code = var6;
            var _closure1_slot12 = var5;
            if (var1) {
                _fun33289_ip = 276;
                continue _fun33289
            }
        case 269:
            var1 = function arg0() {
                var10 = arg0;
                var _closure2_slot0 = var10;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var2 = undefined;
                var7 = var4.bind(var2)(var0);
                var3 = var7.makeShareableCloneRecursive;
                var0 = {};
                var8 = function() {
                    var2 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var9 = {};
                var11 = _closure1_slot8;
                var9.makeMutableUI = var11;
                var9.initial = var10;
                var8.__closure = var9;
                var9 = 38746935544.0;
                var8.__workletHash = var9;
                var9 = _closure1_slot9;
                var8.__initData = var9;
                var0.__init = var8;
                var3 = var3.bind(var7)(var0);
                var0 = {};
                var9 = function() {
                    var0 = _closure1_slot13;
                    var2 = undefined;
                    var0 = var0.bind(var2)();
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 4;
                    var0 = var3[var0];
                    var3 = var1.bind(var2)(var0);
                    var1 = var3.executeOnUIRuntimeSync;
                    var0 = function arg0() {
                        var0 = arg0;
                        var0 = var0.value;
                        return var0;
                    };
                    var5 = {};
                    var0.__closure = var5;
                    var5 = 5375306386445.0;
                    var0.__workletHash = var5;
                    var4 = _closure1_slot10;
                    var0.__initData = var4;
                    var1 = var1.bind(var3)(var0);
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = function arg0() {
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var2 = _closure1_slot14;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.runOnUI;
                    var1 = function() {
                        var1 = _closure2_slot1;
                        var0 = _closure3_slot0;
                        var1.value = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var5 = {};
                    var7 = _closure2_slot1;
                    var5.mutable = var7;
                    var5.newValue = var6;
                    var1.__closure = var5;
                    var5 = 11269088169577.0;
                    var1.__workletHash = var5;
                    var4 = _closure1_slot11;
                    var1.__initData = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7 = 'value';
                Object.defineProperty(var0, var7, {
                    get: var9,
                    set: var8,
                    enumerable: true
                });
                var9 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
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
                    var3 = 'Reading from `_value` directly is only possible on the UI runtime. Perhaps you passed an Animated Style to a non-animated component?';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var8 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
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
                    var3 = 'Setting `_value` directly is only possible on the UI runtime. Perhaps you want to assign to `value` instead?';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var7 = '_value';
                Object.defineProperty(var0, var7, {
                    get: var9,
                    set: var8,
                    enumerable: true
                });
                var7 = function arg0() {
                    _fun33329: for (var _fun33329_ip = 0;;) switch (_fun33329_ip) {
                        case 0:
                            var7 = arg0;
                            var0 = undefined;
                            var3 = undefined;
                            var _closure3_slot0 = var7;
                            var4 = arguments.length;
                            var2 = 1;
                            var4 = var4 > var2;
                            if (!var4) {
                                _fun33329_ip = 34;
                                continue _fun33329
                            }
                        case 26:
                            var5 = arguments[var2];
                            var4 = var0 !== var5;
                        case 34:
                            var6 = !var4;
                            if (!var4) {
                                _fun33329_ip = 44;
                                continue _fun33329
                            }
                        case 40:
                            var6 = arguments[var2];
                        case 44:
                            var _closure3_slot1 = var6;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 4;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runOnUI;
                            var1 = function() {
                                var3 = _closure2_slot1;
                                var2 = var3.modify;
                                var1 = _closure3_slot0;
                                var0 = _closure3_slot1;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var5 = {};
                            var8 = _closure2_slot1;
                            var5.mutable = var8;
                            var5.modifier = var7;
                            var5.forceUpdate = var6;
                            var1.__closure = var5;
                            var5 = 15983399508815.0;
                            var1.__workletHash = var5;
                            var4 = _closure1_slot12;
                            var1.__initData = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var0.modify = var7;
                var7 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
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
                    var3 = 'Adding listeners is only possible on the UI runtime.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.addListener = var7;
                var7 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
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
                    var3 = 'Removing listeners is only possible on the UI runtime.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.removeListener = var7;
                var7 = true;
                var0._isReanimatedSharedValue = var7;
                var _closure2_slot1 = var0;
                var6 = _closure1_slot6;
                var6 = var6.bind(var2)(var0);
                var1 = _closure1_slot4;
                var1 = var1.bind(var2)(var0);
                var1 = 6;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var2 = var1.shareableMappingCache;
                var1 = var2.set;
                var1 = var1.bind(var2)(var0, var3);
                return var0;
            };
            _fun33289_ip = 281;
            continue _fun33289;
        case 276:
            var1 = function arg0() {
                _fun33311: for (var _fun33311_ip = 0;;) switch (_fun33311_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure2_slot0 = var0;
                        var0 = global;
                        var0 = var0.Map;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var6 = var2;
                        var0 = new var6[var0](var5);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var _closure2_slot1 = var0;
                        var0 = {};
                        var4 = function() {
                            var1 = _closure1_slot13;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            var0 = _closure2_slot0;
                            return var0;
                        };
                        var3 = function arg0() {
                            var2 = _closure1_slot14;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 2;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.valueSetter;
                            var2 = _closure2_slot2;
                            var1 = arg0;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var2 = 'value';
                        Object.defineProperty(var0, var2, {
                            get: var4,
                            set: var3,
                            enumerable: true
                        });
                        var4 = function() {
                            var0 = _closure2_slot0;
                            return var0;
                        };
                        var3 = function arg0() {
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            _closure2_slot0 = var2;
                            var2 = _closure2_slot1;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = arg0;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var2 = '_value';
                        Object.defineProperty(var0, var2, {
                            get: var4,
                            set: var3,
                            enumerable: true
                        });
                        var2 = function arg0() {
                            _fun33317: for (var _fun33317_ip = 0;;) switch (_fun33317_ip) {
                                case 0:
                                    var7 = arg0;
                                    var0 = undefined;
                                    var2 = undefined;
                                    var3 = arguments.length;
                                    var1 = 1;
                                    var3 = var3 > var1;
                                    if (!var3) {
                                        _fun33317_ip = 28;
                                        continue _fun33317
                                    }
                                case 20:
                                    var4 = arguments[var1];
                                    var3 = var0 !== var4;
                                case 28:
                                    var5 = !var3;
                                    if (!var3) {
                                        _fun33317_ip = 38;
                                        continue _fun33317
                                    }
                                case 34:
                                    var5 = arguments[var1];
                                case 38:
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var1 = 2;
                                    var1 = var3[var1];
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.valueSetter;
                                    var2 = _closure2_slot2;
                                    if (!(var0 === var7)) {
                                        _fun33317_ip = 89;
                                        continue _fun33317
                                    }
                                case 78:
                                    var1 = _closure2_slot2;
                                    var1 = var1.value;
                                    _fun33317_ip = 103;
                                    continue _fun33317;
                                case 89:
                                    var6 = _closure2_slot2;
                                    var6 = var6.value;
                                    var1 = var7.bind(var0)(var6);
                                case 103:
                                    var1 = var3.bind(var4)(var2, var1, var5);
                                    return var0;
                            }
                        };
                        var0.modify = var2;
                        var2 = function arg0, arg1() {
                            var3 = _closure2_slot1;
                            var2 = var3.set;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0.addListener = var2;
                        var2 = function arg0() {
                            var2 = _closure2_slot1;
                            var1 = var2.delete;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0.removeListener = var2;
                        var2 = true;
                        var0._isReanimatedSharedValue = var2;
                        var _closure2_slot2 = var0;
                        var3 = _closure1_slot6;
                        var4 = undefined;
                        var3 = var3.bind(var4)(var0);
                        var3 = _closure1_slot4;
                        var3 = var3.bind(var4)(var0);
                        var2 = _closure1_slot2;
                        if (!var2) {
                            _fun33311_ip = 165;
                            continue _fun33311
                        }
                    case 154:
                        var1 = function() { // Environment: var1
                            var2 = _closure2_slot0;
                            var0 = global;
                            var1 = var0.JSON;
                            var0 = var1.stringify;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                        };
                        var0.toJSON = var1;
                    case 165:
                        return var0;
                }
            };
        case 281:
            var2.makeMutableUI = var3;
            var2.makeMutable = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3685, 3686, 3720, 3712, 3689, 3693, 3713]);