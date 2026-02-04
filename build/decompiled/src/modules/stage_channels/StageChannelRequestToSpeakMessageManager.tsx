// modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx
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
        _fun114199: for (var _fun114199_ip = 0;;) switch (_fun114199_ip) {
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
                _fun114199_ip = 76;
                continue _fun114199;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageFlags;
    var _closure1_slot14 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114203: for (var _fun114203_ip = 0;;) switch (_fun114203_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun114203_ip = 84;
                        continue _fun114203
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun114203_ip = 118;
                    continue _fun114203;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handleVoiceStateUpdates;
                    var1.VOICE_STATE_UPDATES = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'handleVoiceStateUpdates';
        var4.key = var5;
        var0 = function arg0() {
            var0 = arg0;
            var2 = var0.voiceStates;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun114205: for (var _fun114205_ip = 0;;) switch (_fun114205_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.channelId;
                        var7 = var0.userId;
                        var _closure4_slot0 = var7;
                        var1 = var0.suppress;
                        var3 = var0.requestToSpeakTimestamp;
                        var6 = _closure1_slot12;
                        var5 = var6.getVoiceChannelId;
                        var5 = var5.bind(var6)();
                        if (!(var5 === var4)) {
                            _fun114205_ip = 290;
                            continue _fun114205
                        }
                    case 55:
                        if (!var1) {
                            _fun114205_ip = 290;
                            continue _fun114205
                        }
                    case 61:
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun114205_ip = 290;
                            continue _fun114205
                        }
                    case 70:
                        var6 = _closure1_slot8;
                        var5 = var6.getId;
                        var5 = var5.bind(var6)();
                        if (!(var7 !== var5)) {
                            _fun114205_ip = 290;
                            continue _fun114205
                        }
                    case 91:
                        var10 = _closure1_slot11;
                        var9 = var10.can;
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var5 = 12;
                        var6 = var6[var5];
                        var5 = undefined;
                        var6 = var8.bind(var5)(var6);
                        var8 = var6.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                        var11 = _closure1_slot9;
                        var6 = var11.getChannel;
                        var6 = var6.bind(var11)(var4);
                        var6 = var9.bind(var10)(var8, var6);
                        if (!var6) {
                            _fun114205_ip = 290;
                            continue _fun114205
                        }
                    case 155:
                        if (!(var1 == var3)) {
                            _fun114205_ip = 238;
                            continue _fun114205
                        }
                    case 159:
                        var8 = _closure1_slot10;
                        var6 = var8.getMessages;
                        var8 = var6.bind(var8)(var4);
                        var6 = var8.findNewest;
                        var2 = function(arg0) { // Environment: var2
                            _fun114206: for (var _fun114206_ip = 0;;) switch (_fun114206_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = var1.type;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 14;
                                    var4 = var4[var0];
                                    var0 = undefined;
                                    var0 = var5.bind(var0)(var4);
                                    var0 = var0.MessageTypes;
                                    var0 = var0.STAGE_RAISE_HAND;
                                    var0 = var3 === var0;
                                    if (!var0) {
                                        _fun114206_ip = 73;
                                        continue _fun114206
                                    }
                                case 52:
                                    var3 = var1.hasFlag;
                                    var2 = _closure1_slot14;
                                    var2 = var2.EPHEMERAL;
                                    var0 = var3.bind(var1)(var2);
                                case 73:
                                    if (!var0) {
                                        _fun114206_ip = 98;
                                        continue _fun114206
                                    }
                                case 76:
                                    var1 = var1.author;
                                    var2 = var1.id;
                                    var1 = _closure4_slot0;
                                    var0 = var2 === var1;
                                case 98:
                                    return var0;
                            }
                        };
                        var2 = var6.bind(var8)(var2);
                        if (!(var1 != var2)) {
                            _fun114205_ip = 290;
                            continue _fun114205
                        }
                    case 196:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 15;
                        var6 = var9[var6];
                        var9 = var8.bind(var5)(var6);
                        var8 = var9.deleteMessage;
                        var6 = var2.id;
                        var2 = true;
                        var2 = var8.bind(var9)(var4, var6, var2);
                        _fun114205_ip = 290;
                        continue _fun114205;
                    case 238:
                        var6 = _closure1_slot13;
                        var2 = var6.getUser;
                        var2 = var2.bind(var6)(var7);
                        if (!(var1 != var2)) {
                            _fun114205_ip = 290;
                            continue _fun114205
                        }
                    case 257:
                        var1 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 13;
                        var0 = var6[var0];
                        var1 = var1.bind(var5)(var0);
                        var0 = var1.sendStageRequestToSpeakEphemeralMessage;
                        var0 = var0.bind(var1)(var4, var2, var3);
                    case 290:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
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
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1372, 4249, 3091, 1670, 1621, 660, 1380, 14633, 666, 6526, 4299, 2]);