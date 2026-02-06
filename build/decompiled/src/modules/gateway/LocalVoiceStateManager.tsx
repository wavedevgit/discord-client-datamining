// modules/gateway/LocalVoiceStateManager.tsx
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
        _fun94982: for (var _fun94982_ip = 0;;) switch (_fun94982_ip) {
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
                _fun94982_ip = 76;
                continue _fun94982;
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
    var7 = var3.ApplicationStreamStates;
    var _closure1_slot14 = var7;
    var7 = var3.ChannelTypes;
    var _closure1_slot15 = var7;
    var3 = var3.VoiceFlags;
    var _closure1_slot16 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun94986: for (var _fun94986_ip = 0;;) switch (_fun94986_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun94986_ip = 62;
                        continue _fun94986
                    }
                case 49:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var2);
                    _fun94986_ip = 100;
                    continue _fun94986;
                case 62:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var5 = var4.constructor;
                    var4 = new Array(0);
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 100:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = arg0;
                    var0.socket = var1;
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
        var0 = 'guildId';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var0 = var1.getState;
            var0 = var0.bind(var1)();
            var0 = var0.guildId;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'channelId';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.getState;
            var0 = var0.bind(var1)();
            var0 = var0.channelId;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'computeVoiceFlags';
        var4.key = var6;
        var6 = function() {
            _fun94989: for (var _fun94989_ip = 0;;) switch (_fun94989_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var1 = var2[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var4 = var1.ClipsAllowVoiceRecording;
                    var1 = var4.getSetting;
                    var9 = var1.bind(var4)();
                    var6 = 13;
                    var1 = var2[var6];
                    var8 = var3.bind(var5)(var1);
                    var7 = var8.setFlag;
                    var1 = _closure1_slot16;
                    var4 = var1.ALLOW_VOICE_RECORDING;
                    var1 = 0;
                    var8 = var7.bind(var8)(var1, var4, var9);
                    var4 = _closure1_slot1;
                    var1 = 14;
                    var1 = var2[var1];
                    var4 = var4.bind(var5)(var1);
                    var1 = _closure1_slot12;
                    var1 = var4.bind(var5)(var1);
                    var4 = 15;
                    var2 = var2[var4];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isClipsEnabled;
                    var7 = var2.bind(var3)();
                    if (!var7) {
                        _fun94989_ip = 220;
                        continue _fun94989
                    }
                case 128:
                    var3 = _closure1_slot10;
                    var2 = var3.getCurrentUserActiveStream;
                    var2 = var2.bind(var3)();
                    var9 = null;
                    var10 = var9 == var2;
                    var3 = undefined;
                    if (var10) {
                        _fun94989_ip = 158;
                        continue _fun94989
                    }
                case 153:
                    var3 = var2.state;
                case 158:
                    var2 = _closure1_slot14;
                    var2 = var2.ACTIVE;
                    var2 = var3 === var2;
                    if (var2) {
                        _fun94989_ip = 217;
                        continue _fun94989
                    }
                case 175:
                    var10 = _closure1_slot10;
                    var3 = var10.getCurrentUserActiveStream;
                    var3 = var3.bind(var10)();
                    var10 = var9 == var3;
                    var9 = undefined;
                    if (var10) {
                        _fun94989_ip = 203;
                        continue _fun94989
                    }
                case 198:
                    var9 = var3.state;
                case 203:
                    var3 = _closure1_slot14;
                    var3 = var3.PAUSED;
                    var2 = var9 === var3;
                case 217:
                    var7 = var2;
                case 220:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isDecoupledClipsEnabled;
                    var9 = var2.bind(var3)();
                    if (!var9) {
                        _fun94989_ip = 285;
                        continue _fun94989
                    }
                case 250:
                    var3 = _closure1_slot9;
                    var2 = var3.getVisibleGame;
                    var4 = var2.bind(var3)();
                    var3 = null;
                    var10 = var3 == var4;
                    var2 = undefined;
                    if (var10) {
                        _fun94989_ip = 281;
                        continue _fun94989
                    }
                case 275:
                    var2 = var4.windowHandle;
                case 281:
                    var9 = var3 != var2;
                case 285:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.setFlag;
                    var2 = _closure1_slot16;
                    var2 = var2.CLIPS_ENABLED;
                    if (var7) {
                        _fun94989_ip = 324;
                        continue _fun94989
                    }
                case 321:
                    var7 = var9;
                case 324:
                    var4 = var3.bind(var4)(var8, var2, var7);
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var2 = var7[var2];
                    var8 = var3.bind(var5)(var2);
                    var7 = var8.getCurrentConfig;
                    var3 = {};
                    var2 = 'computeVoiceFlags';
                    var3.location = var2;
                    var2 = {};
                    var9 = false;
                    var2.autoTrackExposure = var9;
                    var2 = var7.bind(var8)(var3, var2);
                    var3 = var2.enableViewerClipping;
                    if (!var3) {
                        _fun94989_ip = 396;
                        continue _fun94989
                    }
                case 393:
                    var3 = var1;
                case 396:
                    if (!var3) {
                        _fun94989_ip = 419;
                        continue _fun94989
                    }
                case 399:
                    var2 = _closure1_slot8;
                    var1 = var2.getSettings;
                    var1 = var1.bind(var2)();
                    var3 = var1.viewerClipsEnabled;
                case 419:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.setFlag;
                    var0 = _closure1_slot16;
                    var0 = var0.ALLOW_ANY_VIEWER_CLIPS;
                    var0 = var1.bind(var2)(var4, var0, var3);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getInitialState';
        var4.key = var6;
        var6 = function() {
            var0 = {
                'guildId': null,
                'channelId': null,
                'selfMute': null,
                'selfDeaf': null,
                'selfVideo': null,
                'preferredRegion': null,
                'preferredRegions': null,
                'videoStreamParameters': null,
                'flags': 0
            };
            var2 = _closure1_slot12;
            var1 = var2.isSelfMute;
            var1 = var1.bind(var2)();
            var0.selfMute = var1;
            var1 = var2.isSelfDeaf;
            var1 = var1.bind(var2)();
            var0.selfDeaf = var1;
            var1 = var2.isVideoEnabled;
            var1 = var1.bind(var2)();
            var0.selfVideo = var1;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getNextState';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var2 = this;
            var3 = var0.guildId;
            var1 = var0.channelId;
            var0 = {};
            var0.guildId = var3;
            var0.channelId = var1;
            var3 = _closure1_slot12;
            var4 = var3.isSelfMute;
            var4 = var4.bind(var3)();
            var0.selfMute = var4;
            var4 = var3.isSelfDeaf;
            var4 = var4.bind(var3)();
            var0.selfDeaf = var4;
            var4 = var3.isVideoEnabled;
            var4 = var4.bind(var3)();
            var0.selfVideo = var4;
            var4 = _closure1_slot13;
            var1 = var4.getPreferredRegion;
            var1 = var1.bind(var4)();
            var0.preferredRegion = var1;
            var1 = var4.getPreferredRegions;
            var1 = var1.bind(var4)();
            var0.preferredRegions = var1;
            var1 = var3.getVideoStreamParameters;
            var1 = var1.bind(var3)();
            var0.videoStreamParameters = var1;
            var1 = var2.computeVoiceFlags;
            var1 = var1.bind(var2)();
            var0.flags = var1;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'shouldCommit';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.socket;
            var0 = var1.isSessionEstablished;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'didCommit';
        var4.key = var6;
        var5 = function arg0() {
            _fun94993: for (var _fun94993_ip = 0;;) switch (_fun94993_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var12 = var0.guildId;
                    var11 = var0.channelId;
                    var10 = var0.selfMute;
                    var9 = var0.selfDeaf;
                    var8 = var0.selfVideo;
                    var7 = var0.preferredRegion;
                    var6 = var0.preferredRegions;
                    var5 = var0.videoStreamParameters;
                    var4 = var0.flags;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun94993_ip = 65;
                        continue _fun94993
                    }
                case 63:
                    var4 = 0;
                case 65:
                    if (!var8) {
                        _fun94993_ip = 115;
                        continue _fun94993
                    }
                case 68:
                    var13 = _closure1_slot11;
                    var3 = var13.getChannel;
                    var13 = var3.bind(var13)(var11);
                    var3 = null;
                    var14 = var3 == var13;
                    var3 = undefined;
                    if (var14) {
                        _fun94993_ip = 101;
                        continue _fun94993
                    }
                case 96:
                    var3 = var13.type;
                case 101:
                    var2 = _closure1_slot15;
                    var2 = var2.GUILD_STAGE_VOICE;
                    if (!(var3 !== var2)) {
                        _fun94993_ip = 173;
                        continue _fun94993
                    }
                case 115:
                    var13 = var1.socket;
                    var3 = var13.voiceStateUpdate;
                    var2 = {};
                    var2.guildId = var12;
                    var2.channelId = var11;
                    var2.selfMute = var10;
                    var2.selfDeaf = var9;
                    var2.selfVideo = var8;
                    var2.preferredRegion = var7;
                    var2.preferredRegions = var6;
                    var2.flags = var4;
                    var2 = var3.bind(var13)(var2);
                    _fun94993_ip = 234;
                    continue _fun94993;
                case 173:
                    var3 = var1.socket;
                    var2 = var3.voiceStateUpdate;
                    var1 = {};
                    var1.guildId = var12;
                    var1.channelId = var11;
                    var1.selfMute = var10;
                    var1.selfDeaf = var9;
                    var1.selfVideo = var8;
                    var1.preferredRegion = var7;
                    var1.preferredRegions = var6;
                    var1.videoStreamParameters = var5;
                    var1.flags = var4;
                    var1 = var2.bind(var3)(var1);
                case 234:
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/LocalVoiceStateManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3484, 3485, 3716, 1372, 3478, 3629, 660, 1348, 1384, 3511, 12259, 3514, 12459, 2]);