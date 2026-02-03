// modules/video_backgrounds/VideoBackgroundUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function arg0() {
        _fun66474: for (var _fun66474_ip = 0;;) switch (_fun66474_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun66474_ip = 23;
                    continue _fun66474
                }
            case 12:
                var3 = 'object';
                var2 = typeof var1;
                var0 = var3 === var2;
            case 23:
                if (!var0) {
                    _fun66474_ip = 34;
                    continue _fun66474
                }
            case 26:
                var2 = 'id';
                var0 = var2 in var1;
            case 34:
                if (!var0) {
                    _fun66474_ip = 59;
                    continue _fun66474
                }
            case 37:
                var2 = var1.type;
                var1 = _closure1_slot6;
                var1 = var1.BACKGROUND;
                var0 = var2 === var1;
            case 59:
                return var0;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function arg0() {
        _fun66475: for (var _fun66475_ip = 0;;) switch (_fun66475_ip) {
            case 0:
                var2 = arg0;
                var1 = 'number';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun66475_ip = 28;
                    continue _fun66475
                }
            case 17:
                var1 = _closure1_slot5;
                var0 = var2 in var1;
            case 28:
                return var0;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function arg0() {
        _fun66476: for (var _fun66476_ip = 0;;) switch (_fun66476_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot10;
                var6 = undefined;
                var0 = var0.bind(var6)(var3);
                if (var0) {
                    _fun66476_ip = 117;
                    continue _fun66476
                }
            case 20:
                var0 = _closure1_slot9;
                var2 = var0.bind(var6)(var3);
                var0 = !var2;
                var0 = !var0;
                if (!var2) {
                    _fun66476_ip = 115;
                    continue _fun66476
                }
            case 38:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 4;
                var2 = var2[var7];
                var5 = var4.bind(var6)(var2);
                var4 = var5.isAnimatedIconHash;
                var2 = var3.asset;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun66476_ip = 112;
                    continue _fun66476
                }
            case 78:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var6 = var5.bind(var6)(var4);
                var5 = var6.isVideoAssetHash;
                var4 = var3.asset;
                var2 = var5.bind(var6)(var4);
            case 112:
                var0 = var2;
            case 115:
                _fun66476_ip = 131;
                continue _fun66476;
            case 117:
                var2 = _closure1_slot7;
                var1 = var2.includes;
                var0 = var1.bind(var2)(var3);
            case 131:
                return var0;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function arg0() {
        _fun66477: for (var _fun66477_ip = 0;;) switch (_fun66477_ip) {
            case 0:
                var1 = null;
                var0 = arg0;
                var1 = var1 != var0;
                var0 = 'None';
                if (!var1) {
                    _fun66477_ip = 22;
                    continue _fun66477
                }
            case 16:
                var0 = 'Video Background';
            case 22:
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var3 = function arg0() {
        _fun66478: for (var _fun66478_ip = 0;;) switch (_fun66478_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var1 = var0 == var4;
                var0 = 'None';
                if (var1) {
                    _fun66478_ip = 256;
                    continue _fun66478
                }
            case 19:
                var1 = _closure1_slot9;
                var6 = undefined;
                var2 = var1.bind(var6)(var4);
                var1 = 'Custom';
                if (var2) {
                    _fun66478_ip = 253;
                    continue _fun66478
                }
            case 43:
                var2 = 'Blur';
                var5 = 'blur';
                if (!(var5 !== var4)) {
                    _fun66478_ip = 250;
                    continue _fun66478
                }
            case 58:
                var5 = _closure1_slot5;
                var7 = var5.OPTION_1;
                var5 = 'Cybercity';
                if (!(var7 !== var4)) {
                    _fun66478_ip = 226;
                    continue _fun66478
                }
            case 81:
                var7 = _closure1_slot5;
                var7 = var7.OPTION_2;
                var5 = 'Discord the Movie';
                if (!(var7 !== var4)) {
                    _fun66478_ip = 226;
                    continue _fun66478
                }
            case 104:
                var7 = _closure1_slot5;
                var7 = var7.OPTION_3;
                var5 = 'Wumpus Vacation';
                if (!(var7 !== var4)) {
                    _fun66478_ip = 226;
                    continue _fun66478
                }
            case 124:
                var7 = _closure1_slot5;
                var7 = var7.OPTION_4;
                var5 = 'Vaporwave';
                if (!(var7 !== var4)) {
                    _fun66478_ip = 226;
                    continue _fun66478
                }
            case 144:
                var7 = _closure1_slot5;
                var7 = var7.OPTION_7;
                var5 = 'Capernite Day';
                if (!(var7 !== var4)) {
                    _fun66478_ip = 226;
                    continue _fun66478
                }
            case 164:
                var7 = _closure1_slot5;
                var7 = var7.OPTION_8;
                var5 = 'Capernite Night';
                if (!(var7 !== var4)) {
                    _fun66478_ip = 226;
                    continue _fun66478
                }
            case 184:
                var7 = _closure1_slot5;
                var7 = var7.OPTION_9;
                var5 = 'Hacker Den';
                if (!(var7 !== var4)) {
                    _fun66478_ip = 226;
                    continue _fun66478
                }
            case 204:
                var3 = _closure1_slot5;
                var3 = var3.OPTION_10;
                var5 = undefined;
                if (!(var3 === var4)) {
                    _fun66478_ip = 226;
                    continue _fun66478
                }
            case 220:
                var5 = 'Wumpice';
            case 226:
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = 'Preset - ';
                var2 = var4.bind(var3)(var5);
            case 250:
                var1 = var2;
            case 253:
                var0 = var1;
            case 256:
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var10[var0];
    var0 = undefined;
    var8 = var11.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.DefaultVideoBackground;
    var _closure1_slot5 = var11;
    var11 = var8.VideoFilterType;
    var _closure1_slot6 = var11;
    var8 = var8.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS;
    var _closure1_slot7 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/video_backgrounds/VideoBackgroundUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.isCustomBackgroundOption = var7;
    var2.isDefaultBackgroundOption = var6;
    var2.isAnimatedBackgroundOption = var5;
    var2.getEffectAnalyticsType = var4;
    var2.getEffectDetailAnalyticsName = var3;
    var3 = function arg0, arg1, arg2() {
        _fun66479: for (var _fun66479_ip = 0;;) switch (_fun66479_ip) {
            case 0:
                var6 = arg0;
                var1 = _closure1_slot4;
                var0 = var1.getGuildId;
                var8 = var0.bind(var1)();
                var0 = var1.getChannelId;
                var9 = var0.bind(var1)();
                var1 = _closure1_slot3;
                var0 = var1.getChannel;
                var10 = var0.bind(var1)(var9);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var1 = var3[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var2 = var4.getVoiceStateMetadata;
                var1 = true;
                var7 = var2.bind(var4)(var8, var9, var1);
                var2 = _closure1_slot1;
                var1 = 6;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot8;
                var2 = var1.VIDEO_EFFECT_UPDATED;
                var1 = {};
                var11 = arg1;
                var1.location = var11;
                var11 = _closure1_slot12;
                var11 = var11.bind(var0)(var6);
                var1.effect_type = var11;
                var11 = _closure1_slot13;
                var11 = var11.bind(var0)(var6);
                var1.effect_detail = var11;
                var11 = arg2;
                var1.effect_state = var11;
                var1.channel_id = var9;
                var9 = null;
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun66479_ip = 183;
                    continue _fun66479
                }
            case 178:
                var9 = var10.type;
            case 183:
                var1.channel_type = var9;
                var1.guild_id = var8;
                var8 = var7.voice_state_count;
                var1.voice_state_count = var8;
                var7 = var7.video_stream_count;
                var1.video_stream_count = var7;
                var8 = _closure1_slot4;
                var7 = var8.getMediaSessionId;
                var7 = var7.bind(var8)();
                var1.media_session_id = var7;
                var7 = var8.getRTCConnectionId;
                var7 = var7.bind(var8)();
                var1.rtc_connection_id = var7;
                var5 = _closure1_slot11;
                var5 = var5.bind(var0)(var6);
                var1.is_animated = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackBackgroundOptionUpdated = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.VIDEO_BACKGROUND_ADDED;
        var1 = {};
        var6 = _closure1_slot11;
        var5 = arg0;
        var5 = var6.bind(var0)(var5);
        var1.is_animated = var5;
        var5 = arg1;
        var1.is_video = var5;
        var5 = arg2;
        var1.is_from_tenor = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackBackgroundOptionAdded = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.VIDEO_BACKGROUND_DELETED;
        var1 = {};
        var6 = _closure1_slot11;
        var5 = arg0;
        var5 = var6.bind(var0)(var5);
        var1.is_animated = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackBackgroundOptionDeleted = var3;
    var3 = function arg0() {
        _fun66482: for (var _fun66482_ip = 0;;) switch (_fun66482_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun66482_ip = 121;
                    continue _fun66482
                }
            case 9:
                var1 = _closure1_slot9;
                var0 = undefined;
                var0 = var1.bind(var0)(var3);
                if (var0) {
                    _fun66482_ip = 78;
                    continue _fun66482
                }
            case 26:
                var2 = 'blur';
                if (!(var2 !== var3)) {
                    _fun66482_ip = 52;
                    continue _fun66482
                }
            case 34:
                var0 = {};
                var1 = 'presetOption';
                var0.oneofKind = var1;
                var0.presetOption = var3;
                _fun66482_ip = 76;
                continue _fun66482;
            case 52:
                var1 = {};
                var1.oneofKind = var2;
                var2 = {};
                var4 = true;
                var2.useBlur = var4;
                var1.blur = var2;
                var0 = var1;
            case 76:
                _fun66482_ip = 119;
                continue _fun66482;
            case 78:
                var1 = {};
                var2 = 'customAsset';
                var1.oneofKind = var2;
                var2 = {};
                var4 = var3.id;
                var2.id = var4;
                var3 = var3.asset;
                var2.assetHash = var3;
                var1.customAsset = var2;
                var0 = var1;
            case 119:
                _fun66482_ip = 133;
                continue _fun66482;
            case 121:
                var1 = {};
                var2 = undefined;
                var1.oneofKind = var2;
                var0 = var1;
            case 133:
                return var0;
        }
    };
    var2.getVideoBackgroundProtoFromOption = var3;
    var1 = function arg0, arg1() {
        _fun66483: for (var _fun66483_ip = 0;;) switch (_fun66483_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun66483_ip = 150;
                    continue _fun66483
                }
            case 12:
                var3 = var2.oneofKind;
                var1 = undefined;
                if (!(var1 !== var3)) {
                    _fun66483_ip = 150;
                    continue _fun66483
                }
            case 27:
                var5 = var2.oneofKind;
                var3 = 'customAsset';
                if (!(var3 !== var5)) {
                    _fun66483_ip = 89;
                    continue _fun66483
                }
            case 41:
                var3 = 'blur';
                if (!(var3 !== var5)) {
                    _fun66483_ip = 67;
                    continue _fun66483
                }
            case 49:
                var4 = 'presetOption';
                if (!(var4 !== var5)) {
                    _fun66483_ip = 59;
                    continue _fun66483
                }
            case 57:
                return var1;
            case 59:
                var1 = var2.presetOption;
                return var1;
            case 67:
                var1 = var2.blur;
                var4 = var1.useBlur;
                var1 = null;
                if (!var4) {
                    _fun66483_ip = 87;
                    continue _fun66483
                }
            case 84:
                var1 = var3;
            case 87:
                return var1;
            case 89:
                var1 = {};
                var3 = _closure1_slot6;
                var3 = var3.BACKGROUND;
                var1.type = var3;
                var3 = var2.customAsset;
                var3 = var3.id;
                var1.id = var3;
                var3 = arg1;
                var1.user_id = var3;
                var2 = var2.customAsset;
                var2 = var2.assetHash;
                var1.asset = var2;
                return var1;
            case 150:
                return var0;
        }
    };
    var2.getVideoBackgroundOptionFromProto = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3509, 8211, 660, 1417, 4298, 795, 2]);