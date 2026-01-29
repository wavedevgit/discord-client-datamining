// modules/external_pip/ExternalPip.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NativeEventEmitter;
    var _closure1_slot2 = var6;
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = var3.ExternalPip;
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() { // Original name: ExternalPip, environment: var4
            var2 = this;
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = false;
            var2._enabled = var3;
            var2._isInPipMode = var3;
            var4 = _closure1_slot2;
            var1 = _closure1_slot3;
            var6 = var1.PipAndroid;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.eventEmitter = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addOnPipModeChangedListener';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = arg0;
            var _closure3_slot1 = var2;
            var3 = var1.eventEmitter;
            var2 = var3.addListener;
            var1 = 'onPipModeChanged';
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var2 = var0.isInPipMode;
                var1 = _closure3_slot0;
                var1._isInPipMode = var2;
                var1 = _closure3_slot1;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(12);
        var1[0] = var0;
        var0 = {};
        var5 = 'addOnPipModeWillChangeListener';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var3 = var0.eventEmitter;
            var2 = var3.addListener;
            var1 = 'onPipModeWillChange';
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setSelectedStream';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'setFocusedStream';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'setMirrored';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'setPipAspectRatio';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            var3 = _closure1_slot4;
            var2 = var3.setPipAspectRatio;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'updateSourceTrackingView';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'setEnabled';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var1 = arg0;
            var0._enabled = var1;
            var2 = _closure1_slot4;
            var1 = var2.setEnabled;
            var0 = var0._enabled;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'setActive';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var2 = _closure1_slot4;
            var1 = var2.setActive;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'isEnabled';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0._enabled;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'isSupported';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = _closure1_slot4;
            var1 = var0.isSupported;
            var0 = true;
            var0 = var0 === var1;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'isInPipMode';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0._isInPipMode;
            return var0;
        };
        var0.value = var4;
        var1[11] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/external_pip/ExternalPip.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 2]);