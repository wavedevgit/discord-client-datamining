// modules/voice_calls/CallIdleManager.tsx
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
        _fun112770: for (var _fun112770_ip = 0;;) switch (_fun112770_ip) {
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
                _fun112770_ip = 76;
                continue _fun112770;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        _fun112773: for (var _fun112773_ip = 0;;) switch (_fun112773_ip) {
            case 0:
                var1 = _closure1_slot10;
                var0 = var1.getCurrentClientVoiceChannelId;
                var4 = null;
                var6 = var0.bind(var1)(var4);
                if (!(var4 != var6)) {
                    _fun112773_ip = 140;
                    continue _fun112773
                }
            case 24:
                var1 = _closure1_slot9;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var6);
                var2 = var4 == var1;
                if (var2) {
                    _fun112773_ip = 58;
                    continue _fun112773
                }
            case 45:
                var0 = var1.isPrivate;
                var0 = var0.bind(var1)();
                var2 = !var0;
            case 58:
                var0 = !var2;
                if (var2) {
                    _fun112773_ip = 138;
                    continue _fun112773
                }
            case 64:
                var1 = var1.recipients;
                var1 = var1.length;
                var5 = 1;
                var2 = var1 > var5;
                var1 = !var2;
                if (var2) {
                    _fun112773_ip = 135;
                    continue _fun112773
                }
            case 88:
                var7 = _closure1_slot11;
                var2 = var7.countVoiceStatesForChannel;
                var2 = var2.bind(var7)(var6);
                var5 = var2 > var5;
                var2 = !var5;
                if (var5) {
                    _fun112773_ip = 132;
                    continue _fun112773
                }
            case 113:
                var5 = _closure1_slot8;
                var3 = var5.getSelfEmbeddedActivityForChannel;
                var3 = var3.bind(var5)(var6);
                var2 = var4 == var3;
            case 132:
                var1 = var2;
            case 135:
                var0 = var1;
            case 138:
                return var0;
            case 140:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        _fun112774: for (var _fun112774_ip = 0;;) switch (_fun112774_ip) {
            case 0:
                var2 = _closure1_slot13;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun112774_ip = 159;
                    continue _fun112774
                }
            case 19:
                var4 = _closure1_slot10;
                var2 = var4.getCurrentClientVoiceChannelId;
                var3 = null;
                var7 = var2.bind(var4)(var3);
                if (!(var3 != var7)) {
                    _fun112774_ip = 159;
                    continue _fun112774
                }
            case 40:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var5 = 9;
                var5 = var4[var5];
                var6 = var2.bind(var0)(var5);
                var5 = var6.sendBotMessage;
                var8 = _closure1_slot0;
                var1 = 10;
                var9 = var4[var1];
                var9 = var8.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.formatToPlainString;
                var1 = var4[var1];
                var1 = var8.bind(var0)(var1);
                var1 = var1.t;
                var8 = var1.XYof5G;
                var1 = {};
                var11 = 3;
                var1.number = var11;
                var1 = var9.bind(var10)(var8, var1);
                var1 = var5.bind(var6)(var7, var1);
                var1 = 11;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.selectVoiceChannel;
                var1 = var1.bind(var2)(var3);
            case 159:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun112776: for (var _fun112776_ip = 0;;) switch (_fun112776_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun112776_ip = 86;
                        continue _fun112776
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun112776_ip = 120;
                    continue _fun112776;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 12;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.Timeout;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var2](var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.idleTimeout = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.idleTimeout;
                        var0 = var1.stop;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleConnectionClosed = var2;
                    var2 = function() { // Environment: var1
                        _fun112778: for (var _fun112778_ip = 0;;) switch (_fun112778_ip) {
                            case 0:
                                var2 = _closure1_slot13;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                if (!var2) {
                                    _fun112778_ip = 53;
                                    continue _fun112778
                                }
                            case 16:
                                var2 = _closure3_slot0;
                                var5 = var2.idleTimeout;
                                var4 = var5.start;
                                var3 = _closure1_slot14;
                                var2 = 180000;
                                var1 = true;
                                var1 = var4.bind(var5)(var2, var3, var1);
                            case 53:
                                return var0;
                        }
                    };
                    var0.handleEmbeddedActivityDisconnect = var2;
                    var1 = function() { // Environment: var1
                        _fun112779: for (var _fun112779_ip = 0;;) switch (_fun112779_ip) {
                            case 0:
                                var2 = _closure1_slot13;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                var3 = _closure3_slot0;
                                var5 = var3.idleTimeout;
                                if (var2) {
                                    _fun112779_ip = 41;
                                    continue _fun112779
                                }
                            case 29:
                                var2 = var5.stop;
                                var2 = var2.bind(var5)();
                                _fun112779_ip = 65;
                                continue _fun112779;
                            case 41:
                                var4 = var5.start;
                                var3 = _closure1_slot14;
                                var2 = 180000;
                                var1 = false;
                                var1 = var4.bind(var5)(var2, var3, var1);
                            case 65:
                                return var0;
                        }
                    };
                    var0.handleVoiceStateUpdates = var1;
                    var1 = {};
                    var2 = var0.handleVoiceStateUpdates;
                    var1.VOICE_STATE_UPDATES = var2;
                    var2 = var0.handleConnectionClosed;
                    var1.CONNECTION_CLOSED = var2;
                    var2 = var0.handleEmbeddedActivityDisconnect;
                    var1.EMBEDDED_ACTIVITY_CLOSE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
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
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/CallIdleManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1371, 1372, 3521, 3526, 6526, 1234, 4231, 3630, 4299, 2]);