// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = require;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = 'workletsModule';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 'reanimatedModuleProxy';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            _fun33152: for (var _fun33152_ip = 0;;) switch (_fun33152_ip) {
                case 0:
                    var3 = this;
                    var4 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3, var1);
                    var1 = global;
                    var6 = var1.Object;
                    var5 = var6.defineProperty;
                    var7 = _closure1_slot6;
                    var4 = {};
                    var8 = true;
                    var4.writable = var8;
                    var4.value = var2;
                    var4 = var5.bind(var6)(var3, var7, var4);
                    var6 = var1.Object;
                    var5 = var6.defineProperty;
                    var4 = _closure1_slot7;
                    var1 = {};
                    var1.writable = var8;
                    var1.value = var2;
                    var1 = var5.bind(var6)(var3, var4, var1);
                    var1 = _closure1_slot5;
                    var4 = var1.bind(var2)(var3, var7);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 4;
                    var1 = var6[var1];
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.WorkletsModule;
                    var4[var7] = var1;
                    var1 = _closure1_slot0;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.jsVersion;
                    var1._REANIMATED_VERSION_JS = var4;
                    var1 = var1.__reanimatedModuleProxy;
                    if (!(var2 === var1)) {
                        _fun33152_ip = 284;
                        continue _fun33152
                    }
                case 175:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var5 = 6;
                    var1 = var1[var5];
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.ReanimatedTurboModule;
                    if (!var1) {
                        _fun33152_ip = 284;
                        continue _fun33152
                    }
                case 204:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var4.bind(var2)(var1);
                    var4 = var1.ReanimatedTurboModule;
                    var1 = var4.installTurboModule;
                    var1 = var1.bind(var4)();
                    if (var1) {
                        _fun33152_ip = 284;
                        continue _fun33152
                    }
                case 240:
                    var1 = _closure1_slot5;
                    var5 = _closure1_slot7;
                    var4 = var1.bind(var2)(var3, var5);
                    var1 = _closure1_slot9;
                    var6 = var1.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var6;
                    var1 = new var13[var1](var12);
                    var1 = var1 instanceof Object ? var1 : var6;
                    var4[var5] = var1;
                    _fun33152_ip = 326;
                    continue _fun33152;
                case 284:
                    var1 = _closure1_slot0;
                    var1 = var1.__reanimatedModuleProxy;
                    if (!(var2 !== var1)) {
                        _fun33152_ip = 328;
                        continue _fun33152
                    }
                case 298:
                    var1 = _closure1_slot5;
                    var4 = _closure1_slot7;
                    var3 = var1.bind(var2)(var3, var4);
                    var1 = _closure1_slot0;
                    var1 = var1.__reanimatedModuleProxy;
                    var3[var4] = var1;
                case 326:
                    return var2;
                case 328:
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var0 = var3[var0];
                    var0 = var1.bind(var2)(var0);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = "Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'scheduleOnUI';
        var0.key = var1;
        var1 = function arg0() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var2 = var0[var1];
            var1 = var2.scheduleOnUI;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(19);
        var1[0] = var0;
        var0 = {};
        var5 = 'executeOnUIRuntimeSync';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var2 = var0[var1];
            var1 = var2.executeOnUIRuntimeSync;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'createWorkletRuntime';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var3 = var0[var1];
            var2 = var3.createWorkletRuntime;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'scheduleOnRuntime';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var3 = var0[var1];
            var2 = var3.scheduleOnRuntime;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'registerSensor';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var5 = var0[var1];
            var4 = var5.registerSensor;
            var9 = arg0;
            var8 = arg1;
            var7 = arg2;
            var6 = arg3;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'unregisterSensor';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var2 = var0[var1];
            var1 = var2.unregisterSensor;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'registerEventHandler';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var4 = var0[var1];
            var3 = var4.registerEventHandler;
            var2 = arg0;
            var1 = arg1;
            var0 = arg2;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'unregisterEventHandler';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var2 = var0[var1];
            var1 = var2.unregisterEventHandler;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getViewProp';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun33161: for (var _fun33161_ip = 0;;) switch (_fun33161_ip) {
                case 0:
                    var5 = arg1;
                    var4 = arg3;
                    var7 = this;
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 8;
                    var0 = var3[var0];
                    var6 = undefined;
                    var1 = var1.bind(var6)(var0);
                    var0 = var1.isFabric;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun33161_ip = 83;
                        continue _fun33161
                    }
                case 47:
                    var0 = _closure1_slot5;
                    var1 = _closure1_slot7;
                    var0 = var0.bind(var6)(var7, var1);
                    var3 = var0[var1];
                    var1 = var3.getViewProp;
                    var0 = arg0;
                    var0 = var1.bind(var3)(var0, var5, var4);
                    _fun33161_ip = 148;
                    continue _fun33161;
                case 83:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 9;
                    var1 = var8[var1];
                    var8 = var3.bind(var6)(var1);
                    var3 = var8.getShadowNodeWrapperFromRef;
                    var1 = arg2;
                    var3 = var3.bind(var8)(var1);
                    var1 = _closure1_slot5;
                    var2 = _closure1_slot7;
                    var1 = var1.bind(var6)(var7, var2);
                    var2 = var1[var2];
                    var1 = var2.getViewProp;
                    var0 = var1.bind(var2)(var3, var5, var4);
                case 148:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'configureLayoutAnimationBatch';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            var3 = var1[var2];
            var2 = var3.configureLayoutAnimationBatch;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'setShouldAnimateExitingForTag';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            var4 = var1[var2];
            var3 = var4.setShouldAnimateExitingForTag;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'enableLayoutAnimations';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            var3 = var1[var2];
            var2 = var3.enableLayoutAnimations;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'configureProps';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            var4 = var1[var2];
            var3 = var4.configureProps;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'subscribeForKeyboardEvents';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var4 = var0[var1];
            var3 = var4.subscribeForKeyboardEvents;
            var2 = arg0;
            var1 = arg1;
            var0 = arg2;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'unsubscribeFromKeyboardEvents';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            var3 = var1[var2];
            var2 = var3.unsubscribeFromKeyboardEvents;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'markNodeAsRemovable';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            var3 = var1[var2];
            var2 = var3.markNodeAsRemovable;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'unmarkNodeAsRemovable';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            var3 = var1[var2];
            var2 = var3.unmarkNodeAsRemovable;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'setNodeRemovalCallback';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            var3 = var1[var2];
            var2 = var3.setNodeRemovalCallback;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'getSettledUpdates';
        var0.key = var5;
        var4 = function() {
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var1 = var0[var1];
            var0 = var1.getSettledUpdates;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var4;
        var1[18] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot8 = var3;
    var3 = function() { // Environment: var1
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
        var1 = 'scheduleOnUI';
        var0.key = var1;
        var1 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(19);
        var1[0] = var0;
        var0 = {};
        var5 = 'executeOnUIRuntimeSync';
        var0.key = var5;
        var5 = function() {
            var0 = null;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'createWorkletRuntime';
        var0.key = var5;
        var5 = function() {
            var0 = null;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'scheduleOnRuntime';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'configureLayoutAnimationBatch';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'setShouldAnimateExitingForTag';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'enableLayoutAnimations';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'configureProps';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'subscribeForKeyboardEvents';
        var0.key = var5;
        var5 = function() {
            var0 = -1;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'unsubscribeFromKeyboardEvents';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'markNodeAsRemovable';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'unmarkNodeAsRemovable';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'setNodeRemovalCallback';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'registerSensor';
        var0.key = var5;
        var5 = function() {
            var0 = -1;
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'unregisterSensor';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'registerEventHandler';
        var0.key = var5;
        var5 = function() {
            var0 = -1;
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'unregisterEventHandler';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'getViewProp';
        var0.key = var5;
        var5 = function() {
            var0 = null;
            return var0;
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'getSettledUpdates';
        var0.key = var5;
        var4 = function() {
            var0 = new Array(0);
            return var0;
        };
        var0.value = var4;
        var1[18] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot9 = var3;
    var1 = function() {
        var0 = _closure1_slot8;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var2 = var1;
        var0 = new var2[var0](var1);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.createNativeReanimatedModule = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 99, 100, 3698, 3709, 3704, 3693, 3685, 3710]);