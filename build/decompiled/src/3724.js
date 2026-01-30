// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: getSensorContainer, environment: var1
        _fun33476: for (var _fun33476_ip = 0;;) switch (_fun33476_ip) {
            case 0:
                var1 = _closure1_slot0;
                var1 = var1.__sensorContainer;
                if (var1) {
                    _fun33476_ip = 74;
                    continue _fun33476
                }
            case 16:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.SensorContainer;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var3;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var2.__sensorContainer = var1;
            case 74:
                var0 = _closure1_slot0;
                var0 = var0.__sensorContainer;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var3);
    var3 = var4.isEdgeToEdge;
    var3 = var3.bind(var4)();
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = var4.shouldBeUseWeb;
    var3 = var3.bind(var4)();
    var _closure1_slot4 = var3;
    var3 = function() { // Original name: isReanimated3, environment: var1
        var0 = true;
        return var0;
    };
    var4 = {};
    var7 = 'function handleAndFlushAnimationFrame_Pnpm_coreTs1(eventTimestamp,event){const{eventHandler}=this.__closure;global.__frameTimestamp=eventTimestamp;eventHandler(event);global.__flushAnimationFrame(eventTimestamp);global.__frameTimestamp=undefined;}';
    var4.code = var7;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function handleAndFlushAnimationFrame_Pnpm_coreTs2(state,height){const{eventHandler}=this.__closure;const now=global._getAnimationTimestamp();global.__frameTimestamp=now;eventHandler(state,height);global.__flushAnimationFrame(now);global.__frameTimestamp=undefined;}';
    var4.code = var7;
    var _closure1_slot6 = var4;
    var4 = {
        'enableLayoutAnimations': false,
        'setByUser': false
    };
    var _closure1_slot7 = var4;
    var4 = 6;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.startMapper;
    var2.startMapper = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.stopMapper;
    var2.stopMapper = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.makeMutable;
    var2.makeMutable = var4;
    var4 = 8;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.createWorkletRuntime;
    var2.createWorkletRuntime = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.runOnRuntime;
    var2.runOnRuntime = var4;
    var4 = 5;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.makeShareable;
    var2.makeShareable = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.makeShareableCloneRecursive;
    var2.makeShareableCloneRecursive = var4;
    var4 = 9;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.executeOnUIRuntimeSync;
    var2.executeOnUIRuntimeSync = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.runOnJS;
    var2.runOnJS = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.runOnUI;
    var2.runOnUI = var4;
    var2.isReanimated3 = var3;
    var2.isConfigured = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: getViewProp, environment: var1
        _fun33478: for (var _fun33478_ip = 0;;) switch (_fun33478_ip) {
            case 0:
                var2 = arg2;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var2;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.isFabric;
                var4 = var4.bind(var5)();
                if (!var4) {
                    _fun33478_ip = 118;
                    continue _fun33478
                }
            case 61:
                if (var2) {
                    _fun33478_ip = 118;
                    continue _fun33478
                }
            case 64:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.ReanimatedError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = 'Function `getViewProp` requires a component to be passed as an argument on Fabric.';
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 118:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = function(arg0, arg1) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var5 = var1.ReanimatedModule;
                    var4 = var5.getViewProp;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var7 = _closure2_slot2;
                    var6 = function(arg0) { // Environment: var0
                        _fun33480: for (var _fun33480_ip = 0;;) switch (_fun33480_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = 'string';
                                var0 = typeof var2;
                                if (!(var1 === var0)) {
                                    _fun33480_ip = 41;
                                    continue _fun33480
                                }
                            case 14:
                                var3 = var2.substr;
                                var1 = 0;
                                var0 = 6;
                                var1 = var3.bind(var2)(var1, var0);
                                var0 = 'error:';
                                if (!(var0 !== var1)) {
                                    _fun33480_ip = 57;
                                    continue _fun33480
                                }
                            case 41:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                                _fun33480_ip = 71;
                                continue _fun33480;
                            case 57:
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 71:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getViewProp = var3;
    var3 = function(arg0, arg1) { // Original name: registerEventHandler, environment: var1
        _fun33481: for (var _fun33481_ip = 0;;) switch (_fun33481_ip) {
            case 0:
                var6 = undefined;
                var2 = undefined;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = arguments.length;
                var1 = 2;
                var3 = var3 > var1;
                var5 = -1;
                var4 = var5;
                if (!var3) {
                    _fun33481_ip = 50;
                    continue _fun33481
                }
            case 35:
                var3 = arguments[var1];
                var4 = var5;
                if (!(var6 !== var3)) {
                    _fun33481_ip = 50;
                    continue _fun33481
                }
            case 46:
                var4 = arguments[var1];
            case 50:
                var0 = function() { // Environment: var0
                    var0 = function(arg0, arg1) { // Original name: handleAndFlushAnimationFrame, environment: var0
                        var3 = arg0;
                        var1 = _closure1_slot0;
                        var1.__frameTimestamp = var3;
                        var4 = _closure2_slot0;
                        var0 = undefined;
                        var2 = arg1;
                        var2 = var4.bind(var0)(var2);
                        var2 = var1.__flushAnimationFrame;
                        var2 = var2.bind(var1)(var3);
                        var1.__frameTimestamp = var0;
                        return var0;
                    };
                    var1 = {};
                    var2 = _closure2_slot0;
                    var1.eventHandler = var2;
                    var0.__closure = var1;
                    var1 = 6793284645440.0;
                    var0.__workletHash = var1;
                    var1 = _closure1_slot5;
                    var0.__initData = var1;
                    return var0;
                };
                var5 = var0.bind(var6)();
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 3;
                var0 = var7[var0];
                var0 = var1.bind(var6)(var0);
                var3 = var0.ReanimatedModule;
                var2 = var3.registerEventHandler;
                var0 = 5;
                var0 = var7[var0];
                var1 = var1.bind(var6)(var0);
                var0 = var1.makeShareableCloneRecursive;
                var1 = var0.bind(var1)(var5);
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var2.registerEventHandler = var3;
    var3 = function(arg0) { // Original name: unregisterEventHandler, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.ReanimatedModule;
        var1 = var2.unregisterEventHandler;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.unregisterEventHandler = var3;
    var3 = function(arg0, arg1) { // Original name: subscribeForKeyboardEvents, environment: var1
        _fun33485: for (var _fun33485_ip = 0;;) switch (_fun33485_ip) {
            case 0:
                var5 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = function(arg0, arg1) { // Original name: handleAndFlushAnimationFrame, environment: var0
                        var1 = _closure1_slot0;
                        var0 = var1._getAnimationTimestamp;
                        var3 = var0.bind(var1)();
                        var1.__frameTimestamp = var3;
                        var5 = _closure2_slot0;
                        var0 = undefined;
                        var4 = arg0;
                        var2 = arg1;
                        var2 = var5.bind(var0)(var4, var2);
                        var2 = var1.__flushAnimationFrame;
                        var2 = var2.bind(var1)(var3);
                        var1.__frameTimestamp = var0;
                        return var0;
                    };
                    var1 = {};
                    var2 = _closure2_slot0;
                    var1.eventHandler = var2;
                    var0.__closure = var1;
                    var1 = 11642615284685.0;
                    var0.__workletHash = var1;
                    var1 = _closure1_slot6;
                    var0.__initData = var1;
                    return var0;
                };
                var7 = undefined;
                var6 = var0.bind(var7)();
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 3;
                var1 = var8[var1];
                var1 = var2.bind(var7)(var1);
                var4 = var1.ReanimatedModule;
                var3 = var4.subscribeForKeyboardEvents;
                var1 = 5;
                var1 = var8[var1];
                var2 = var2.bind(var7)(var1);
                var1 = var2.makeShareableCloneRecursive;
                var2 = var1.bind(var2)(var6);
                var1 = _closure1_slot3;
                if (var1) {
                    _fun33485_ip = 109;
                    continue _fun33485
                }
            case 88:
                var7 = var5.isStatusBarTranslucentAndroid;
                var6 = null;
                var6 = var6 != var7;
                if (!var6) {
                    _fun33485_ip = 106;
                    continue _fun33485
                }
            case 103:
                var6 = var7;
            case 106:
                var1 = var6;
            case 109:
                var0 = _closure1_slot3;
                if (var0) {
                    _fun33485_ip = 137;
                    continue _fun33485
                }
            case 116:
                var6 = var5.isNavigationBarTranslucentAndroid;
                var5 = null;
                var5 = var5 != var6;
                if (!var5) {
                    _fun33485_ip = 134;
                    continue _fun33485
                }
            case 131:
                var5 = var6;
            case 134:
                var0 = var5;
            case 137:
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.subscribeForKeyboardEvents = var3;
    var3 = function(arg0) { // Original name: unsubscribeFromKeyboardEvents, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.ReanimatedModule;
        var1 = var2.unsubscribeFromKeyboardEvents;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.unsubscribeFromKeyboardEvents = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: registerSensor, environment: var1
        var1 = _closure1_slot8;
        var2 = undefined;
        var4 = var1.bind(var2)();
        var3 = var4.registerSensor;
        var1 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 5;
        var0 = var5[var0];
        var2 = var1.bind(var2)(var0);
        var1 = var2.makeShareableCloneRecursive;
        var0 = arg2;
        var2 = var1.bind(var2)(var0);
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var2.registerSensor = var3;
    var3 = function(arg0, arg1) { // Original name: initializeSensor, environment: var1
        var1 = _closure1_slot8;
        var0 = undefined;
        var3 = var1.bind(var0)();
        var2 = var3.initializeSensor;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.initializeSensor = var3;
    var3 = function(arg0) { // Original name: unregisterSensor, environment: var1
        var1 = _closure1_slot8;
        var0 = undefined;
        var2 = var1.bind(var0)();
        var1 = var2.unregisterSensor;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.unregisterSensor = var3;
    var3 = function(arg0) { // Original name: enableLayoutAnimations, environment: var1
        _fun33492: for (var _fun33492_ip = 0;;) switch (_fun33492_ip) {
            case 0:
                var3 = arg0;
                var0 = undefined;
                var2 = undefined;
                var4 = arguments.length;
                var1 = 1;
                if (!(var4 > var1)) {
                    _fun33492_ip = 114;
                    continue _fun33492
                }
            case 17:
                var4 = arguments[var1];
                if (!(var0 !== var4)) {
                    _fun33492_ip = 114;
                    continue _fun33492
                }
            case 25:
                var1 = arguments[var1];
                if (var1) {
                    _fun33492_ip = 114;
                    continue _fun33492
                }
            case 32:
                var2 = _closure1_slot7;
                var2 = var2.setByUser;
                if (var2) {
                    _fun33492_ip = 62;
                    continue _fun33492
                }
            case 48:
                var4 = _closure1_slot7;
                var4 = var4.enableLayoutAnimations;
                var2 = var4 === var3;
            case 62:
                if (var2) {
                    _fun33492_ip = 172;
                    continue _fun33492
                }
            case 65:
                var2 = _closure1_slot7;
                var2.enableLayoutAnimations = var3;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.ReanimatedModule;
                var1 = var2.enableLayoutAnimations;
                var1 = var1.bind(var2)(var3);
                _fun33492_ip = 172;
                continue _fun33492;
            case 114:
                var2 = {};
                var2.enableLayoutAnimations = var3;
                var1 = true;
                var2.setByUser = var1;
                _closure1_slot7 = var2;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.ReanimatedModule;
                var1 = var2.enableLayoutAnimations;
                var1 = var1.bind(var2)(var3);
            case 172:
                return var0;
        }
    };
    var2.enableLayoutAnimations = var3;
    var3 = function(arg0) { // Original name: configureLayoutAnimationBatch, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.ReanimatedModule;
        var2 = var3.configureLayoutAnimationBatch;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.configureLayoutAnimationBatch = var3;
    var3 = function(arg0, arg1) { // Original name: setShouldAnimateExitingForTag, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var4 = var1.ReanimatedModule;
        var3 = var4.setShouldAnimateExitingForTag;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.setShouldAnimateExitingForTag = var3;
    var3 = function(arg0, arg1) { // Original name: jsiConfigureProps, environment: var1
        _fun33495: for (var _fun33495_ip = 0;;) switch (_fun33495_ip) {
            case 0:
                var1 = _closure1_slot4;
                if (var1) {
                    _fun33495_ip = 56;
                    continue _fun33495
                }
            case 10:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var3 = var0.ReanimatedModule;
                var2 = var3.configureProps;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
            case 56:
                var0 = undefined;
                return var0;
        }
    };
    var2.jsiConfigureProps = var3;
    var3 = function(arg0) { // Original name: markNodeAsRemovable, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.ReanimatedModule;
        var2 = var3.markNodeAsRemovable;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.markNodeAsRemovable = var3;
    var3 = function(arg0) { // Original name: unmarkNodeAsRemovable, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.ReanimatedModule;
        var2 = var3.unmarkNodeAsRemovable;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.unmarkNodeAsRemovable = var3;
    var1 = function(arg0) { // Original name: setNodeRemovalCallback, environment: var1
        _fun33498: for (var _fun33498_ip = 0;;) switch (_fun33498_ip) {
            case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isFabric;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun33498_ip = 78;
                    continue _fun33498
                }
            case 38:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.ReanimatedModule;
                var2 = var3.setNodeRemovalCallback;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
            case 78:
                return var0;
        }
    };
    var2.setNodeRemovalCallback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3725, 3683, 3691, 3688, 3726, 3710, 3728, 3717, 3730, 3687]);