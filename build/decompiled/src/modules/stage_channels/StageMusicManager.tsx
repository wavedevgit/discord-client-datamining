// modules/stage_channels/StageMusicManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun67809: for (var _fun67809_ip = 0;;) switch (_fun67809_ip) {
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
                _fun67809_ip = 76;
                continue _fun67809;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        _fun67812: for (var _fun67812_ip = 0;;) switch (_fun67812_ip) {
            case 0:
                var2 = _closure1_slot9;
                var0 = var2.getVoiceChannelId;
                var6 = var0.bind(var2)();
                var2 = null;
                if (!(var2 != var6)) {
                    _fun67812_ip = 449;
                    continue _fun67812
                }
            case 26:
                var3 = _closure1_slot7;
                var0 = var3.getChannel;
                var3 = var0.bind(var3)(var6);
                if (!(var2 != var3)) {
                    _fun67812_ip = 425;
                    continue _fun67812
                }
            case 47:
                var0 = var3.isGuildStageVoice;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun67812_ip = 425;
                    continue _fun67812
                }
            case 63:
                var3 = _closure1_slot8;
                var0 = var3.isSelfDeaf;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun67812_ip = 401;
                    continue _fun67812
                }
            case 83:
                var3 = _closure1_slot13;
                var0 = var3.shouldPlay;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun67812_ip = 344;
                    continue _fun67812
                }
            case 105:
                var3 = _closure1_slot12;
                var0 = var3.isLive;
                var0 = var0.bind(var3)(var6);
                if (var0) {
                    _fun67812_ip = 320;
                    continue _fun67812
                }
            case 126:
                var3 = _closure1_slot13;
                var0 = var3.isMuted;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun67812_ip = 296;
                    continue _fun67812
                }
            case 146:
                var0 = global;
                var4 = var0.Object;
                var3 = var4.values;
                var5 = _closure1_slot10;
                var0 = var5.getVoiceStatesForChannel;
                var0 = var0.bind(var5)(var6);
                var4 = var3.bind(var4)(var0);
                var3 = var4.find;
                var0 = function(arg0) { // Environment: var0
                    _fun67813: for (var _fun67813_ip = 0;;) switch (_fun67813_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.suppress;
                            var0 = !var0;
                            if (!var0) {
                                _fun67813_ip = 28;
                                continue _fun67813
                            }
                        case 15:
                            var1 = var2.isVoiceMuted;
                            var1 = var1.bind(var2)();
                            var0 = !var1;
                        case 28:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0);
                var0 = var2 != var0;
                if (var0) {
                    _fun67812_ip = 269;
                    continue _fun67812
                }
            case 205:
                var2 = _closure1_slot15;
                if (var2) {
                    _fun67812_ip = 269;
                    continue _fun67812
                }
            case 212:
                var3 = _closure1_slot16;
                var5 = _closure1_slot14;
                var4 = _closure1_slot8;
                var2 = var4.getOutputVolume;
                var4 = var2.bind(var4)();
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var3.volume = var2;
                var3 = _closure1_slot16;
                var2 = var3.loop;
                var2 = var2.bind(var3)();
                var2 = true;
                _closure1_slot15 = var2;
                _fun67812_ip = 292;
                continue _fun67812;
            case 269:
                if (!var0) {
                    _fun67812_ip = 292;
                    continue _fun67812
                }
            case 272:
                var2 = _closure1_slot16;
                var0 = var2.pause;
                var0 = var0.bind(var2)();
                var0 = false;
                _closure1_slot15 = var0;
            case 292:
                var0 = undefined;
                return var0;
            case 296:
                var2 = _closure1_slot16;
                var0 = var2.pause;
                var0 = var0.bind(var2)();
                var0 = false;
                _closure1_slot15 = var0;
                var0 = undefined;
                return var0;
            case 320:
                var2 = _closure1_slot16;
                var0 = var2.stop;
                var0 = var0.bind(var2)();
                var0 = false;
                _closure1_slot15 = var0;
                var0 = undefined;
                return var0;
            case 344:
                var3 = _closure1_slot16;
                var4 = _closure1_slot14;
                var2 = _closure1_slot8;
                var0 = var2.getOutputVolume;
                var2 = var0.bind(var2)();
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var3.volume = var2;
                var3 = _closure1_slot16;
                var2 = var3.loop;
                var2 = var2.bind(var3)();
                var2 = true;
                _closure1_slot15 = var2;
                return var0;
            case 401:
                var2 = _closure1_slot16;
                var0 = var2.stop;
                var0 = var0.bind(var2)();
                var0 = false;
                _closure1_slot15 = var0;
                var0 = undefined;
                return var0;
            case 425:
                var2 = _closure1_slot16;
                var0 = var2.stop;
                var0 = var0.bind(var2)();
                var0 = false;
                _closure1_slot15 = var0;
                var0 = undefined;
                return var0;
            case 449:
                var2 = _closure1_slot16;
                var0 = var2.stop;
                var0 = var0.bind(var2)();
                var0 = false;
                _closure1_slot15 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var6[var3];
    var10 = var4.bind(var0)(var3);
    var _closure1_slot8 = var10;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var7 = function arg0() {
        var1 = arg0;
        var0 = 400;
        var0 = var1 / var0;
        return var0;
    };
    var _closure1_slot14 = var7;
    var3 = false;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var6[var3];
    var9 = var5.bind(var0)(var3);
    var8 = var9.createSound;
    var3 = var10.getOutputVolume;
    var3 = var3.bind(var10)();
    var7 = var7.bind(var0)(var3);
    var3 = 'stage_waiting';
    var3 = var8.bind(var9)(var3, var3, var7);
    var _closure1_slot16 = var3;
    var3 = 16;
    var3 = var6[var3];
    var4 = var4.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun67816: for (var _fun67816_ip = 0;;) switch (_fun67816_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot5;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun67816_ip = 84;
                        continue _fun67816
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun67816_ip = 118;
                    continue _fun67816;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handleVoiceChannelSelect;
                    var1.VOICE_CHANNEL_SELECT = var2;
                    var2 = var0.handleLogout;
                    var1.LOGOUT = var2;
                    var2 = var0.handleMute;
                    var1.STAGE_MUSIC_MUTE = var2;
                    var2 = var0.handlePlay;
                    var1.STAGE_MUSIC_PLAY = var2;
                    var2 = var0.handleVoiceStateUpdates;
                    var1.VOICE_STATE_UPDATES = var2;
                    var2 = var0.handleSetOutputVolume;
                    var1.AUDIO_SET_OUTPUT_VOLUME = var2;
                    var2 = var0.handleToggleSelfDeaf;
                    var1.AUDIO_TOGGLE_SELF_DEAF = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'handleVoiceChannelSelect';
        var4.key = var0;
        var0 = function arg0() {
            _fun67817: for (var _fun67817_ip = 0;;) switch (_fun67817_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.channelId;
                    var1 = null;
                    if (!(var1 == var4)) {
                        _fun67817_ip = 39;
                        continue _fun67817
                    }
                case 14:
                    var3 = _closure1_slot16;
                    var0 = var3.stop;
                    var0 = var0.bind(var3)();
                    var0 = false;
                    _closure1_slot15 = var0;
                    _fun67817_ip = 105;
                    continue _fun67817;
                case 39:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var2 = var2.bind(var3)(var4);
                    if (!(var1 != var2)) {
                        _fun67817_ip = 73;
                        continue _fun67817
                    }
                case 60:
                    var1 = var2.isGuildStageVoice;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun67817_ip = 95;
                        continue _fun67817
                    }
                case 73:
                    var2 = _closure1_slot16;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var1 = false;
                    _closure1_slot15 = var1;
                    _fun67817_ip = 105;
                    continue _fun67817;
                case 95:
                    var1 = _closure1_slot18;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 105:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleLogout';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot16;
            var0 = var2.stop;
            var0 = var0.bind(var2)();
            var0 = false;
            _closure1_slot15 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handlePlay';
        var4.key = var6;
        var6 = function arg0() {
            _fun67819: for (var _fun67819_ip = 0;;) switch (_fun67819_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.play;
                    if (var1) {
                        _fun67819_ip = 37;
                        continue _fun67819
                    }
                case 15:
                    var2 = _closure1_slot16;
                    var1 = var2.pause;
                    var1 = var1.bind(var2)();
                    var1 = false;
                    _closure1_slot15 = var1;
                    _fun67819_ip = 47;
                    continue _fun67819;
                case 37:
                    var1 = _closure1_slot18;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleMute';
        var4.key = var6;
        var6 = function arg0() {
            _fun67820: for (var _fun67820_ip = 0;;) switch (_fun67820_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.muted;
                    if (var0) {
                        _fun67820_ip = 27;
                        continue _fun67820
                    }
                case 15:
                    var2 = _closure1_slot18;
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                    _fun67820_ip = 47;
                    continue _fun67820;
                case 27:
                    var2 = _closure1_slot16;
                    var0 = var2.pause;
                    var0 = var0.bind(var2)();
                    var0 = false;
                    _closure1_slot15 = var0;
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleVoiceStateUpdates';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleSetOutputVolume';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var3 = var0.volume;
            var2 = _closure1_slot16;
            var1 = _closure1_slot14;
            var0 = undefined;
            var1 = var1.bind(var0)(var3);
            var2.volume = var1;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleToggleSelfDeaf';
        var4.key = var6;
        var5 = function() {
            var1 = _closure1_slot18;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var14 = var4;
    var3 = new var14[var3](var13);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageMusicManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0() {
        _fun67824: for (var _fun67824_ip = 0;;) switch (_fun67824_ip) {
            case 0:
                var10 = arg0;
                var _closure2_slot0 = var10;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 13;
                var0 = var8[var5];
                var6 = undefined;
                var9 = var7.bind(var6)(var0);
                var3 = var9.useStateFromStores;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot9;
                    var0 = var1.getVoiceChannelId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var3.bind(var9)(var1, var0);
                var1 = 14;
                var1 = var8[var1];
                var9 = var7.bind(var6)(var1);
                var3 = var9.useStageParticipants;
                var1 = 15;
                var1 = var8[var1];
                var1 = var7.bind(var6)(var1);
                var1 = var1.StageChannelParticipantNamedIndex;
                var1 = var1.SPEAKER;
                var9 = var3.bind(var9)(var10, var1);
                var3 = var9.find;
                var1 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.voiceState;
                    var0 = var1.isVoiceMuted;
                    var0 = var0.bind(var1)();
                    var0 = !var0;
                    return var0;
                };
                var1 = var3.bind(var9)(var1);
                var3 = null;
                var1 = var3 != var1;
                var5 = var8[var5];
                var6 = var7.bind(var6)(var5);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot12;
                var4 = new Array(1);
                var4[0] = var7;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot12;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var5.bind(var6)(var4, var2);
                if (!var0) {
                    _fun67824_ip = 181;
                    continue _fun67824
                }
            case 177:
                var0 = var3 == var2;
            case 181:
                if (!var0) {
                    _fun67824_ip = 187;
                    continue _fun67824
                }
            case 184:
                var0 = !var1;
            case 187:
                return var0;
        }
    };
    var2.useShowStageMusicMuteButton = var3;
    var1 = function arg0() {
        _fun67828: for (var _fun67828_ip = 0;;) switch (_fun67828_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot9;
                var0 = var1.getVoiceChannelId;
                var0 = var0.bind(var1)();
                var0 = var0 === var5;
                var4 = _closure1_slot11;
                var3 = var4.getMutableParticipants;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 15;
                var6 = var6[var1];
                var1 = undefined;
                var1 = var7.bind(var1)(var6);
                var1 = var1.StageChannelParticipantNamedIndex;
                var1 = var1.SPEAKER;
                var4 = var3.bind(var4)(var5, var1);
                var3 = var4.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.voiceState;
                    var0 = var1.isVoiceMuted;
                    var0 = var0.bind(var1)();
                    var0 = !var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var3 = null;
                var1 = var3 != var1;
                var4 = _closure1_slot12;
                var2 = var4.getStageInstanceByChannel;
                var2 = var2.bind(var4)(var5);
                if (!var0) {
                    _fun67828_ip = 121;
                    continue _fun67828
                }
            case 117:
                var0 = var3 == var2;
            case 121:
                if (!var0) {
                    _fun67828_ip = 127;
                    continue _fun67828
                }
            case 124:
                var0 = !var1;
            case 127:
                return var0;
        }
    };
    var2.shouldShowStageMusicMuteButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 3476, 1670, 3521, 4245, 1377, 8405, 8408, 566, 8413, 5662, 4299, 2]);