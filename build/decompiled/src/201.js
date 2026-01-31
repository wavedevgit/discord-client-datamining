// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            _fun2853: for (var _fun2853_ip = 0;;) switch (_fun2853_ip) {
                case 0:
                    var5 = arg1;
                    var3 = this;
                    var1 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var9 = _closure2_slot0;
                    var0 = var0.bind(var1)(var3, var9);
                    var10 = false;
                    var3._defaultPrevented = var10;
                    var0 = global;
                    var7 = var0.performance;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var3._timeStamp = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 2;
                    var2 = var8[var6];
                    var2 = var7.bind(var1)(var2);
                    var11 = var2.COMPOSED_PATH_KEY;
                    var2 = new Array(0);
                    var3[var11] = var2;
                    var2 = var8[var6];
                    var2 = var7.bind(var1)(var2);
                    var11 = var2.CURRENT_TARGET_KEY;
                    var2 = null;
                    var3[var11] = var2;
                    var11 = var8[var6];
                    var11 = var7.bind(var1)(var11);
                    var11 = var11.EVENT_PHASE_KEY;
                    var9 = var9.NONE;
                    var3[var11] = var9;
                    var9 = var8[var6];
                    var9 = var7.bind(var1)(var9);
                    var9 = var9.IN_PASSIVE_LISTENER_FLAG_KEY;
                    var3[var9] = var10;
                    var9 = var8[var6];
                    var9 = var7.bind(var1)(var9);
                    var9 = var9.IS_TRUSTED_KEY;
                    var3[var9] = var10;
                    var9 = var8[var6];
                    var9 = var7.bind(var1)(var9);
                    var9 = var9.STOP_IMMEDIATE_PROPAGATION_FLAG_KEY;
                    var3[var9] = var10;
                    var9 = var8[var6];
                    var9 = var7.bind(var1)(var9);
                    var9 = var9.STOP_PROPAGATION_FLAG_KEY;
                    var3[var9] = var10;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.TARGET_KEY;
                    var3[var6] = var2;
                    var6 = arguments.length;
                    var4 = 1;
                    if (!(!(var6 < var4))) {
                        _fun2853_ip = 424;
                        continue _fun2853
                    }
                case 249:
                    var6 = typeof var5;
                    if (!(var2 != var5)) {
                        _fun2853_ip = 272;
                        continue _fun2853
                    }
                case 256:
                    var4 = 'object';
                    if (!(var4 !== var6)) {
                        _fun2853_ip = 272;
                        continue _fun2853
                    }
                case 264:
                    var4 = 'function';
                    if (!(var4 === var6)) {
                        _fun2853_ip = 390;
                        continue _fun2853
                    }
                case 272:
                    var6 = var0.String;
                    var4 = arg0;
                    var4 = var6.bind(var1)(var4);
                    var3._type = var4;
                    var6 = var0.Boolean;
                    var7 = var2 == var5;
                    var4 = undefined;
                    if (var7) {
                        _fun2853_ip = 313;
                        continue _fun2853
                    }
                case 307:
                    var4 = var5.bubbles;
                case 313:
                    var4 = var6.bind(var1)(var4);
                    var3._bubbles = var4;
                    var6 = var0.Boolean;
                    var7 = var2 == var5;
                    var4 = undefined;
                    if (var7) {
                        _fun2853_ip = 345;
                        continue _fun2853
                    }
                case 339:
                    var4 = var5.cancelable;
                case 345:
                    var4 = var6.bind(var1)(var4);
                    var3._cancelable = var4;
                    var4 = var0.Boolean;
                    var6 = var2 == var5;
                    var2 = undefined;
                    if (var6) {
                        _fun2853_ip = 377;
                        continue _fun2853
                    }
                case 371:
                    var2 = var5.composed;
                case 377:
                    var2 = var4.bind(var1)(var2);
                    var3._composed = var2;
                    return var1;
                case 390:
                    var3 = var0.TypeError;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = "Failed to construct 'Event': The provided value is not of type 'EventInit'.";
                    var14 = var2;
                    var1 = new var14[var3](var13, var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 424:
                    var2 = var0.TypeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = "Failed to construct 'Event': 1 argument required, but only 0 present.";
                    var14 = var1;
                    var0 = new var14[var2](var13, var12);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'bubbles';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._bubbles;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(14);
        var1[0] = var0;
        var0 = {};
        var5 = 'cancelable';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._cancelable;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'composed';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._composed;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'currentTarget';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getCurrentTarget;
            var0 = this;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'defaultPrevented';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._defaultPrevented;
            return var0;
        };
        var0.get = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'eventPhase';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getEventPhase;
            var0 = this;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'isTrusted';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getIsTrusted;
            var0 = this;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'target';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getTarget;
            var0 = this;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'timeStamp';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._timeStamp;
            return var0;
        };
        var0.get = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'type';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._type;
            return var0;
        };
        var0.get = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'composedPath';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getComposedPath;
            var0 = this;
            var1 = var1.bind(var2)(var0);
            var0 = var1.slice;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'preventDefault';
        var0.key = var5;
        var5 = function() {
            _fun2865: for (var _fun2865_ip = 0;;) switch (_fun2865_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._cancelable;
                    if (!var0) {
                        _fun2865_ip = 111;
                        continue _fun2865
                    }
                case 12:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.getInPassiveListenerFlag;
                    var0 = var0.bind(var2)(var1);
                    if (var0) {
                        _fun2865_ip = 61;
                        continue _fun2865
                    }
                case 51:
                    var0 = true;
                    var1._defaultPrevented = var0;
                    _fun2865_ip = 111;
                    continue _fun2865;
                case 61:
                    var0 = global;
                    var2 = var0.console;
                    var1 = var2.error;
                    var4 = var0.Error;
                    var0 = var4.prototype;
                    var3 = Object.create(var0, {
                        constructor: {
                            value: var4
                        }
                    });
                    var5 = 'Unable to preventDefault inside passive event listener invocation.';
                    var6 = var3;
                    var0 = new var6[var4](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var0 = var1.bind(var2)(var0);
                case 111:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'stopImmediatePropagation';
        var0.key = var5;
        var5 = function() {
            var4 = this;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var3 = var5[var1];
            var0 = undefined;
            var7 = var2.bind(var0)(var3);
            var6 = var7.setStopPropagationFlag;
            var3 = true;
            var6 = var6.bind(var7)(var4, var3);
            var1 = var5[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.setStopImmediatePropagationFlag;
            var1 = var1.bind(var2)(var4, var3);
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'stopPropagation';
        var0.key = var5;
        var4 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.setStopPropagationFlag;
            var2 = this;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var4;
        var1[13] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var8 = var6.Object;
    var7 = var8.defineProperty;
    var10 = 'NONE';
    var3 = {
        'enumerable': true,
        'value': 0
    };
    var3 = var7.bind(var8)(var1, var10, var3);
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var7 = var1.prototype;
    var3 = {
        'enumerable': true,
        'value': 0
    };
    var3 = var8.bind(var9)(var7, var10, var3);
    var8 = var6.Object;
    var7 = var8.defineProperty;
    var10 = 'CAPTURING_PHASE';
    var3 = {
        'enumerable': true,
        'value': 1
    };
    var3 = var7.bind(var8)(var1, var10, var3);
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var7 = var1.prototype;
    var3 = {
        'enumerable': true,
        'value': 1
    };
    var3 = var8.bind(var9)(var7, var10, var3);
    var8 = var6.Object;
    var7 = var8.defineProperty;
    var10 = 'AT_TARGET';
    var3 = {
        'enumerable': true,
        'value': 2
    };
    var3 = var7.bind(var8)(var1, var10, var3);
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var7 = var1.prototype;
    var3 = {
        'enumerable': true,
        'value': 2
    };
    var3 = var8.bind(var9)(var7, var10, var3);
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var3 = 3;
    var10 = 'BUBBLING_PHASE';
    var7 = {
        'enumerable': true,
        'value': 3
    };
    var7 = var8.bind(var9)(var1, var10, var7);
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var7 = var1.prototype;
    var6 = {
        'enumerable': true,
        'value': 3
    };
    var6 = var8.bind(var9)(var7, var10, var6);
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.setPlatformObject;
    var3 = var3.bind(var4)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 202, 129]);