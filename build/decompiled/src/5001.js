// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() { // Original name: PressableStateMachine, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = null;
            var2.states = var1;
            var3 = 0;
            var2.currentStepIndex = var3;
            var2.eventPayload = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setStates';
        var0.key = var1;
        var1 = function(arg0) { // Original name: setStates, environment: var4
            var1 = arg0;
            var0 = this;
            var0.states = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() { // Original name: reset, environment: var4
            var1 = this;
            var0 = 0;
            var1.currentStepIndex = var0;
            var0 = null;
            var1.eventPayload = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleEvent';
        var0.key = var5;
        var4 = function(arg0, arg1) { // Original name: handleEvent, environment: var4
            _fun45204: for (var _fun45204_ip = 0;;) switch (_fun45204_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = var1.states;
                    if (!var0) {
                        _fun45204_ip = 182;
                        continue _fun45204
                    }
                case 21:
                    var3 = var1.states;
                    var0 = var1.currentStepIndex;
                    var3 = var3[var0];
                    var0 = var2;
                    if (var0) {
                        _fun45204_ip = 49;
                        continue _fun45204
                    }
                case 43:
                    var0 = var1.eventPayload;
                case 49:
                    var1.eventPayload = var0;
                    var0 = var3.eventName;
                    if (!(var0 !== var4)) {
                        _fun45204_ip = 101;
                        continue _fun45204
                    }
                case 65:
                    var5 = var1.currentStepIndex;
                    var0 = 0;
                    if (!(var5 > var0)) {
                        _fun45204_ip = 182;
                        continue _fun45204
                    }
                case 77:
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                    var0 = var1.handleEvent;
                    var0 = var0.bind(var1)(var4, var2);
                    _fun45204_ip = 182;
                    continue _fun45204;
                case 101:
                    var0 = var1.eventPayload;
                    if (!var0) {
                        _fun45204_ip = 116;
                        continue _fun45204
                    }
                case 110:
                    var0 = var3.callback;
                case 116:
                    if (!var0) {
                        _fun45204_ip = 136;
                        continue _fun45204
                    }
                case 119:
                    var2 = var3.callback;
                    var0 = var1.eventPayload;
                    var0 = var2.bind(var3)(var0);
                case 136:
                    var0 = var1.currentStepIndex;
                    var0 = var0 + 1;
                    var1.currentStepIndex = var0;
                    var2 = var1.currentStepIndex;
                    var0 = var1.states;
                    var0 = var0.length;
                    if (!(var2 === var0)) {
                        _fun45204_ip = 182;
                        continue _fun45204
                    }
                case 172:
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                case 182:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.PressableStateMachine = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7]);