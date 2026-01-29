// modules/chat_input/native/useChatInputMaxHeight.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function() { // Original name: getChatInputMaxHeight, environment: var1
        _fun89696: for (var _fun89696_ip = 0;;) switch (_fun89696_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = var2.getSystemKeyboardHeight;
                var1 = var1.bind(var2)();
                var2 = 4;
                var2 = var7[var2];
                var4 = var6.bind(var3)(var2);
                var2 = var4.getCustomKeyboardHeight;
                var2 = var2.bind(var4)();
                var4 = 5;
                var4 = var7[var4];
                var5 = var6.bind(var3)(var4);
                var4 = var5.getKeyboardType;
                var5 = var4.bind(var5)();
                var4 = 6;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.KeyboardTypes;
                var4 = var4.SYSTEM;
                if (!(var5 !== var4)) {
                    _fun89696_ip = 110;
                    continue _fun89696
                }
            case 107:
                var1 = var2;
            case 110:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var3 = var2.bind(var3)(var0);
                var2 = var3.getWindowDimensions;
                var0 = {};
                var4 = true;
                var0.ignoreKeyboard = var4;
                var0 = var2.bind(var3)(var0);
                var0 = var0.height;
                var0 = var0 - var1;
                var1 = global;
                var3 = var1.Math;
                var2 = var3.min;
                var6 = var1.Math;
                var5 = var6.max;
                var1 = 200;
                var4 = var0 - var1;
                var0 = 76;
                var0 = var5.bind(var6)(var0, var4);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/useChatInputMaxHeight.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: useChatInputMaxHeight, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var2 = _closure1_slot6;
        var6 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var6, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot1 = var2;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var3 = function() { // Original name: maybeUpdateMaxHeight, environment: var0
                var2 = _closure2_slot1;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun89700: for (var _fun89700_ip = 0;;) switch (_fun89700_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = _closure1_slot6;
                            var3 = undefined;
                            var1 = var1.bind(var3)();
                            if (!(var0 !== var1)) {
                                _fun89700_ip = 47;
                                continue _fun89700
                            }
                        case 20:
                            var5 = _closure2_slot0;
                            var4 = null;
                            var0 = var1;
                            if (!(var4 != var5)) {
                                _fun89700_ip = 47;
                                continue _fun89700
                            }
                        case 36:
                            var2 = _closure2_slot0;
                            var2 = var2.bind(var3)();
                            var0 = var1;
                        case 47:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var4 = var4.bind(var2)(var3);
            var _closure3_slot0 = var4;
            var1 = _closure1_slot5;
            var1 = var1.bind(var2)(var3);
            var _closure3_slot1 = var1;
            var0 = function() { // Environment: var0
                var2 = _closure3_slot0;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var1 = _closure3_slot1;
                var1 = var1.bind(var0)();
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var4;
    var4 = function() { // Original name: getChatInputMinHeight, environment: var1
        var0 = 38;
        return var0;
    };
    var2.getChatInputMinHeight = var4;
    var2.getChatInputMaxHeight = var3;
    var1 = function(arg0) { // Original name: getChatInputHeightAnimationTiming, environment: var1
        var0 = global;
        var4 = var0.Math;
        var3 = var4.min;
        var1 = _closure1_slot6;
        var6 = undefined;
        var2 = var1.bind(var6)();
        var1 = arg0;
        var3 = var3.bind(var4)(var1, var2);
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 9;
        var0 = var7[var0];
        var2 = var5.bind(var6)(var0);
        var1 = var2.withTiming;
        var0 = {};
        var4 = 10;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.timingFastDuration;
        var0.duration = var4;
        var4 = 11;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.Easing;
        var4 = var4.linear;
        var0.easing = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.getChatInputHeightAnimationTiming = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1466, 1585, 4852, 3867, 1567, 1464, 5212, 4050, 4837, 3677, 2]);