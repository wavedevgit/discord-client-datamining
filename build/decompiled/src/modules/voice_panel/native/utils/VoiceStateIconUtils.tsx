// modules/voice_panel/native/utils/VoiceStateIconUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var9;
    var0 = function arg0, arg1() {
        _fun66640: for (var _fun66640_ip = 0;;) switch (_fun66640_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = var5 === var4;
                if (var0) {
                    _fun66640_ip = 63;
                    continue _fun66640
                }
            case 13:
                var2 = null;
                var1 = var2 != var5;
                if (!var1) {
                    _fun66640_ip = 26;
                    continue _fun66640
                }
            case 22:
                var1 = var2 != var4;
            case 26:
                if (!var1) {
                    _fun66640_ip = 60;
                    continue _fun66640
                }
            case 29:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var6.bind(var3)(var2);
                var1 = var2.bind(var3)(var5, var4);
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var4 = function arg0, arg1() {
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var2;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var8 = _closure1_slot7;
        var10 = function() { // Environment: var0
            _fun66642: for (var _fun66642_ip = 0;;) switch (_fun66642_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun66642_ip = 44;
                        continue _fun66642
                    }
                case 13:
                    var5 = _closure1_slot4;
                    var4 = var5.getVoiceState;
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    if (!(var0 == var1)) {
                        _fun66642_ip = 48;
                        continue _fun66642
                    }
                case 44:
                    var0 = undefined;
                    return var0;
                case 48:
                    var0 = {};
                    var3 = var1.deaf;
                    var0.deaf = var3;
                    var3 = var1.selfDeaf;
                    var0.selfDeaf = var3;
                    var3 = var1.mute;
                    var0.mute = var3;
                    var4 = _closure1_slot3;
                    var3 = var4.isLocalMute;
                    var2 = var1.userId;
                    var2 = var3.bind(var4)(var2);
                    var0.isLocalMute = var2;
                    var1 = var1.selfMute;
                    var0.selfMute = var1;
                    return var0;
            }
        };
        var12 = var5;
        var11 = var3;
        var9 = var2;
        var0 = var12[var4](var11, var10, var9, var8, var7);
        return var0;
    };
    var _closure1_slot8 = var4;
    var3 = function arg0, arg1() {
        var5 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var7 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var7;
        var1 = _closure1_slot4;
        var2[1] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun66644: for (var _fun66644_ip = 0;;) switch (_fun66644_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var2;
                    var2 = undefined;
                    if (!var3) {
                        _fun66644_ip = 45;
                        continue _fun66644
                    }
                case 18:
                    var6 = _closure1_slot4;
                    var5 = var6.getVoiceState;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var2 = var5.bind(var6)(var4, var3);
                case 45:
                    var0 = _closure2_slot0;
                    if (!(var1 != var0)) {
                        _fun66644_ip = 139;
                        continue _fun66644
                    }
                case 53:
                    if (!(var1 != var2)) {
                        _fun66644_ip = 139;
                        continue _fun66644
                    }
                case 57:
                    var5 = _closure1_slot3;
                    var4 = var5.isLocalVideoDisabled;
                    var0 = var2.userId;
                    var4 = var4.bind(var5)(var0);
                    var0 = {};
                    var5 = var2.selfVideo;
                    var0.selfVideo = var5;
                    var1 = null;
                    if (!var4) {
                        _fun66644_ip = 132;
                        continue _fun66644
                    }
                case 98:
                    var4 = _closure1_slot3;
                    var3 = var4.isLocalVideoAutoDisabled;
                    var2 = var2.userId;
                    var3 = var3.bind(var4)(var2);
                    var2 = 'manual';
                    if (!var3) {
                        _fun66644_ip = 129;
                        continue _fun66644
                    }
                case 125:
                    var2 = 'auto';
                case 129:
                    var1 = var2;
                case 132:
                    var0.localVideoDisabledState = var1;
                    return var0;
                case 139:
                    var0 = {
                        'selfVideo': false,
                        'localVideoDisabledState': null
                    };
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var5);
    var13 = 0;
    var5 = var9[var13];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var12 = 1;
    var5 = var9[var12];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var6 = {};
    var6.DEAFENED_SERVER = var13;
    var5 = 'DEAFENED_SERVER';
    var6[var13] = var5;
    var6.DEAFENED = var12;
    var5 = 'DEAFENED';
    var6[var12] = var5;
    var11 = 2;
    var6.MUTED_SERVER = var11;
    var5 = 'MUTED_SERVER';
    var6[var11] = var5;
    var7 = 3;
    var6.MUTED_LOCAL = var7;
    var5 = 'MUTED_LOCAL';
    var6[var7] = var5;
    var7 = 4;
    var6.MUTED = var7;
    var5 = 'MUTED';
    var6[var7] = var5;
    var _closure1_slot5 = var6;
    var5 = {};
    var5.VIDEO_DISABLED_LOCAL_AUTO = var13;
    var10 = 'VIDEO_DISABLED_LOCAL_AUTO';
    var5[var13] = var10;
    var5.VIDEO_DISABLED_LOCAL = var12;
    var10 = 'VIDEO_DISABLED_LOCAL';
    var5[var12] = var10;
    var5.VIDEO_ACTIVE = var11;
    var10 = 'VIDEO_ACTIVE';
    var5[var11] = var10;
    var _closure1_slot6 = var5;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/voice_panel/native/utils/VoiceStateIconUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.MuteDeafenIconState = var6;
    var2.VideoIconState = var5;
    var2.useStableVoiceParticipant = var4;
    var4 = function arg0, arg1() {
        _fun66645: for (var _fun66645_ip = 0;;) switch (_fun66645_ip) {
            case 0:
                var4 = _closure1_slot8;
                var3 = undefined;
                var1 = arg0;
                var0 = arg1;
                var3 = var4.bind(var3)(var1, var0);
                var1 = null;
                var4 = var1 == var3;
                var0 = null;
                if (var4) {
                    _fun66645_ip = 140;
                    continue _fun66645
                }
            case 32:
                var4 = var3.deaf;
                if (var4) {
                    _fun66645_ip = 127;
                    continue _fun66645
                }
            case 41:
                var4 = var3.selfDeaf;
                if (var4) {
                    _fun66645_ip = 115;
                    continue _fun66645
                }
            case 50:
                var4 = var3.mute;
                if (var4) {
                    _fun66645_ip = 103;
                    continue _fun66645
                }
            case 59:
                var4 = var3.isLocalMute;
                if (var4) {
                    _fun66645_ip = 91;
                    continue _fun66645
                }
            case 68:
                var3 = var3.selfMute;
                var1 = null;
                if (!var3) {
                    _fun66645_ip = 89;
                    continue _fun66645
                }
            case 79:
                var3 = _closure1_slot5;
                var1 = var3.MUTED;
            case 89:
                _fun66645_ip = 101;
                continue _fun66645;
            case 91:
                var3 = _closure1_slot5;
                var1 = var3.MUTED_LOCAL;
            case 101:
                _fun66645_ip = 113;
                continue _fun66645;
            case 103:
                var3 = _closure1_slot5;
                var1 = var3.MUTED_SERVER;
            case 113:
                _fun66645_ip = 125;
                continue _fun66645;
            case 115:
                var3 = _closure1_slot5;
                var1 = var3.DEAFENED;
            case 125:
                _fun66645_ip = 137;
                continue _fun66645;
            case 127:
                var2 = _closure1_slot5;
                var1 = var2.DEAFENED_SERVER;
            case 137:
                var0 = var1;
            case 140:
                return var0;
        }
    };
    var2.useMuteDeafenIconState = var4;
    var2.useStableVideoState = var3;
    var1 = function arg0, arg1() {
        _fun66646: for (var _fun66646_ip = 0;;) switch (_fun66646_ip) {
            case 0:
                var4 = _closure1_slot9;
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var2 = var4.bind(var2)(var1, var0);
                var1 = null;
                var4 = var1 == var2;
                var0 = null;
                if (var4) {
                    _fun66646_ip = 111;
                    continue _fun66646
                }
            case 32:
                var4 = var2.selfVideo;
                var1 = null;
                if (!var4) {
                    _fun66646_ip = 108;
                    continue _fun66646
                }
            case 43:
                var5 = var2.localVideoDisabledState;
                var4 = 'auto';
                if (!(var4 !== var5)) {
                    _fun66646_ip = 95;
                    continue _fun66646
                }
            case 57:
                var4 = var2.localVideoDisabledState;
                var2 = 'manual';
                if (!(var2 !== var4)) {
                    _fun66646_ip = 83;
                    continue _fun66646
                }
            case 71:
                var2 = _closure1_slot6;
                var2 = var2.VIDEO_ACTIVE;
                _fun66646_ip = 93;
                continue _fun66646;
            case 83:
                var4 = _closure1_slot6;
                var2 = var4.VIDEO_DISABLED_LOCAL;
            case 93:
                _fun66646_ip = 105;
                continue _fun66646;
            case 95:
                var3 = _closure1_slot6;
                var2 = var3.VIDEO_DISABLED_LOCAL_AUTO;
            case 105:
                var1 = var2;
            case 108:
                var0 = var1;
            case 111:
                return var0;
        }
    };
    var2.useVideoIconState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3476, 3521, 628, 566, 2]);