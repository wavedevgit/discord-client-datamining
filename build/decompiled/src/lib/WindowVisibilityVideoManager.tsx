// lib/WindowVisibilityVideoManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun64484: for (var _fun64484_ip = 0;;) switch (_fun64484_ip) {
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
            case 70: // try_end0
                _fun64484_ip = 74;
                continue _fun64484;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = 'window-visibility-changed';
    var3.WindowVisibilityChanged = var4;
    var4 = 'incoming-video-enabled-changed';
    var3.IncomingVideoEnabledChanged = var4;
    var _closure1_slot8 = var3;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun64488: for (var _fun64488_ip = 0;;) switch (_fun64488_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var5, var4);
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var3)(var4);
                    var4 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun64488_ip = 64;
                        continue _fun64488
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var3);
                    _fun64488_ip = 102;
                    continue _fun64488;
                case 64:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 102:
                    var0 = var4.bind(var3)(var5, var0);
                    var _closure3_slot0 = var0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 5;
                    var5 = var4[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.Timeout;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var14 = var6;
                    var5 = new var14[var5](var13);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var0.disableVideoTimer = var5;
                    var5 = true;
                    var0.discordVisible = var5;
                    var0.incomingVideoEnabled = var5;
                    var5 = global;
                    var6 = var5.performance;
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var0.lastEnabledChange = var5;
                    var2 = _closure1_slot1;
                    var5 = 6;
                    var5 = var4[var5];
                    var7 = var2.bind(var3)(var5);
                    var5 = var7.prototype;
                    var6 = Object.create(var5, {
                        constructor: {
                            value: var7
                        }
                    });
                    var13 = 'WindowVisibilityVideoManager';
                    var14 = var6;
                    var5 = new var14[var7](var13, var12);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var0.logger = var5;
                    var5 = 7;
                    var5 = var4[var5];
                    var5 = var2.bind(var3)(var5);
                    var5 = var5.Millis;
                    var6 = var5.SECOND;
                    var5 = 30;
                    var5 = var5 * var6;
                    var0.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = var5;
                    var1 = function() { // Environment: var1
                        _fun64489: for (var _fun64489_ip = 0;;) switch (_fun64489_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var4 = var0.discordVisible;
                                var5 = _closure1_slot1;
                                var0 = _closure1_slot2;
                                var6 = 8;
                                var1 = var0[var6];
                                var0 = undefined;
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.bind(var0)();
                                if (!(var4 !== var1)) {
                                    _fun64489_ip = 176;
                                    continue _fun64489
                                }
                            case 49:
                                var1 = _closure3_slot0;
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var4 = var4[var6];
                                var4 = var5.bind(var0)(var4);
                                var4 = var4.bind(var0)();
                                var1.discordVisible = var4;
                                var5 = var1.emit;
                                var3 = _closure1_slot8;
                                var4 = var3.WindowVisibilityChanged;
                                var3 = var1.discordVisible;
                                var3 = var5.bind(var1)(var4, var3);
                                var1 = var1.discordVisible;
                                var3 = _closure3_slot0;
                                var2 = var3.disableVideoTimer;
                                if (var1) {
                                    _fun64489_ip = 153;
                                    continue _fun64489
                                }
                            case 127:
                                var5 = var2.start;
                                var4 = var3.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS;
                                var1 = function() { // Environment: var1
                                    var2 = _closure3_slot0;
                                    var1 = var2.setIncomingVideoEnabled;
                                    var0 = false;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var5.bind(var2)(var4, var1);
                                _fun64489_ip = 176;
                                continue _fun64489;
                            case 153:
                                var1 = var2.stop;
                                var1 = var1.bind(var2)();
                                var2 = var3.setIncomingVideoEnabled;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
                            case 176:
                                return var0;
                        }
                    };
                    var0.update = var1;
                    var1 = 9;
                    var5 = var4[var1];
                    var8 = var2.bind(var3)(var5);
                    var7 = var8.subscribe;
                    var6 = var0.update;
                    var5 = 'WINDOW_VISIBILITY_CHANGE';
                    var5 = var7.bind(var8)(var5, var6);
                    var1 = var4[var1];
                    var7 = var2.bind(var3)(var1);
                    var6 = var7.subscribe;
                    var5 = var0.update;
                    var1 = 'APP_STATE_UPDATE';
                    var1 = var6.bind(var7)(var1, var5);
                    var1 = 10;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.addOnPipModeChangedListener;
                    var1 = var0.update;
                    var1 = var2.bind(var3)(var1);
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
        var0 = 'isIncomingVideoEnabled';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0.incomingVideoEnabled;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'lastIncomingVideoEnabledChangeTime';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.lastEnabledChange;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'setIncomingVideoEnabled';
        var4.key = var6;
        var5 = function arg0() {
            _fun64493: for (var _fun64493_ip = 0;;) switch (_fun64493_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = var3.incomingVideoEnabled;
                    var3.incomingVideoEnabled = var1;
                    if (!(var0 !== var1)) {
                        _fun64493_ip = 121;
                        continue _fun64493
                    }
                case 22:
                    var4 = var3.logger;
                    var2 = var4.info;
                    var6 = var3.incomingVideoEnabled;
                    var0 = global;
                    var1 = var0.HermesInternal;
                    var5 = var1.concat;
                    var1 = 'Incoming video enabled changed, incomingVideoEnabled = ';
                    var1 = var5.bind(var1)(var6);
                    var1 = var2.bind(var4)(var1);
                    var1 = var0.performance;
                    var0 = var1.now;
                    var0 = var0.bind(var1)();
                    var3.lastEnabledChange = var0;
                    var2 = var3.emit;
                    var0 = _closure1_slot8;
                    var1 = var0.IncomingVideoEnabledChanged;
                    var0 = var3.incomingVideoEnabled;
                    var0 = var2.bind(var3)(var1, var0);
                case 121:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var4);
    var4 = var1.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var1
        }
    });
    var12 = var4;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/WindowVisibilityVideoManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.WindowVisibilityEvent = var3;
    var2.WindowVisibilityVideoManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3591, 3, 667, 7997, 806, 7998, 3668, 2]);