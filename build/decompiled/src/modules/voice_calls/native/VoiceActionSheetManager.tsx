// modules/voice_calls/native/VoiceActionSheetManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun91504: for (var _fun91504_ip = 0;;) switch (_fun91504_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun91504_ip = 76;
                continue _fun91504;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun91508: for (var _fun91508_ip = 0;;) switch (_fun91508_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun91508_ip = 86;
                        continue _fun91508
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun91508_ip = 120;
                    continue _fun91508;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = null;
                    var0.channel = var2;
                    var1 = function() { // Environment: var1
                        _fun91509: for (var _fun91509_ip = 0;;) switch (_fun91509_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var3 = var2.channel;
                                var _closure4_slot0 = var3;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun91509_ip = 81;
                                    continue _fun91509
                                }
                            case 24:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 7;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var3);
                                var2 = var3.wait;
                                var1 = function() { // Environment: var1
                                    var2 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 8;
                                    var3 = var4[var1];
                                    var0 = undefined;
                                    var6 = var2.bind(var0)(var3);
                                    var5 = var6.dismissVoiceChannelScreens;
                                    var3 = _closure4_slot0;
                                    var5 = var5.bind(var6)(var3);
                                    var1 = var4[var1];
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.openChannelCallModal;
                                    var1 = var1.bind(var2)(var3);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot0;
                                var0 = var1.terminate;
                                var0 = var0.bind(var1)();
                            case 81:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleOpenChannelCallModal = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0.channel = var1;
            var4 = _closure1_slot9;
            var3 = var4.addChangeListener;
            var2 = var0.handleOpenChannelCallModal;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot8;
            var1 = var2.addChangeListener;
            var0 = var0.handleOpenChannelCallModal;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            var4 = _closure1_slot9;
            var3 = var4.removeChangeListener;
            var2 = var0.handleOpenChannelCallModal;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot8;
            var1 = var2.removeChangeListener;
            var0 = var0.handleOpenChannelCallModal;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/VoiceActionSheetManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3437, 3482, 806, 7840, 3979, 2]);