// lib/TapSequencer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.useState;
    var _closure1_slot3 = var4;
    var3 = var3.useEffect;
    var _closure1_slot4 = var3;
    var4 = {};
    var3 = 'short';
    var4.SHORT = var3;
    var3 = 'long';
    var4.LONG = var3;
    var _closure1_slot5 = var4;
    var3 = {
        'long': 1250,
        'short': 500
    };
    var _closure1_slot6 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot1;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = arg0;
            var2.tapSequenceHandlers = var3;
            var3 = null;
            var2._state = var3;
            var3 = function() { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.handlePress;
                var0 = _closure1_slot5;
                var0 = var0.SHORT;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.handleShortPress = var3;
            var1 = function() { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.handlePress;
                var0 = _closure1_slot5;
                var0 = var0.LONG;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.handleLongPress = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setTapSequenceHandlers';
        var0.key = var1;
        var1 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.tapSequenceHandlers = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'getState';
        var0.key = var5;
        var5 = function arg0() {
            _fun105206: for (var _fun105206_ip = 0;;) switch (_fun105206_ip) {
                case 0:
                    var0 = this;
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var3 = _closure1_slot6;
                    var1 = arg0;
                    var4 = var3[var1];
                    var3 = var0._state;
                    var1 = null;
                    var1 = var1 === var3;
                    if (var1) {
                        _fun105206_ip = 69;
                        continue _fun105206
                    }
                case 49:
                    var3 = var0._state;
                    var3 = var3.timestamp;
                    var3 = var3 + var4;
                    var1 = var3 < var2;
                case 69:
                    if (!var1) {
                        _fun105206_ip = 96;
                        continue _fun105206
                    }
                case 72:
                    var1 = {};
                    var3 = var0.tapSequenceHandlers;
                    var1.handlers = var3;
                    var1.timestamp = var2;
                    var0._state = var1;
                case 96:
                    var0 = var0._state;
                    var0 = var0.handlers;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'progressState';
        var0.key = var5;
        var5 = function arg0() {
            _fun105207: for (var _fun105207_ip = 0;;) switch (_fun105207_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    var0 = var1 == var2;
                    if (var0) {
                        _fun105207_ip = 44;
                        continue _fun105207
                    }
                case 12:
                    var0 = {};
                    var0.handlers = var2;
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var0.timestamp = var2;
                    var1 = var0;
                case 44:
                    var0 = this;
                    var0._state = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'handlePress';
        var0.key = var5;
        var4 = function arg0() {
            _fun105208: for (var _fun105208_ip = 0;;) switch (_fun105208_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = var3.getState;
                    var7 = var1.bind(var3)(var0);
                    var2 = var3.progressState;
                    var6 = var7[var0];
                    var1 = null;
                    var5 = var1 == var6;
                    var0 = undefined;
                    var4 = undefined;
                    if (var5) {
                        _fun105208_ip = 52;
                        continue _fun105208
                    }
                case 42:
                    var5 = var6.call;
                    var4 = var5.bind(var6)(var7);
                case 52:
                    var5 = var1 != var4;
                    var1 = undefined;
                    if (!var5) {
                        _fun105208_ip = 64;
                        continue _fun105208
                    }
                case 61:
                    var1 = var4;
                case 64:
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot7 = var3;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/TapSequencer.tsx';
    var5 = var6.bind(var7)(var5);
    var2.TapSequencerPressType = var4;
    var2.TapSequencer = var3;
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot3;
        var3 = undefined;
        var0 = function() { // Environment: var1
            _fun105210: for (var _fun105210_ip = 0;;) switch (_fun105210_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var0 = _closure2_slot0;
                    var3 = 'function';
                    var0 = typeof var0;
                    if (!(var3 !== var0)) {
                        _fun105210_ip = 31;
                        continue _fun105210
                    }
                case 25:
                    var0 = _closure2_slot0;
                    _fun105210_ip = 41;
                    continue _fun105210;
                case 31:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var0 = var3.bind(var1)();
                case 41:
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var4 = var0;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5 = var4.bind(var3)(var0);
        var4 = _closure1_slot0;
        var0 = 1;
        var4 = var4.bind(var3)(var5, var0);
        var0 = 0;
        var0 = var4[var0];
        var _closure2_slot1 = var0;
        var2 = _closure1_slot4;
        var1 = function() { // Environment: var1
            _fun105211: for (var _fun105211_ip = 0;;) switch (_fun105211_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = var2.setTapSequenceHandlers;
                    var0 = _closure2_slot0;
                    var4 = 'function';
                    var0 = typeof var0;
                    if (!(var4 !== var0)) {
                        _fun105211_ip = 36;
                        continue _fun105211
                    }
                case 30:
                    var0 = _closure2_slot0;
                    _fun105211_ip = 46;
                    continue _fun105211;
                case 36:
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var4.bind(var3)();
                case 46:
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.useTapSequencer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 31, 2]);