// utils/StreamQualityUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function arg0() {
        _fun64568: for (var _fun64568_ip = 0;;) switch (_fun64568_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.quality;
                var2 = null;
                var0 = var2 != var0;
                if (var0) {
                    _fun64568_ip = 28;
                    continue _fun64568
                }
            case 18:
                var1 = var1.guildPremiumTier;
                var0 = var2 != var1;
            case 28:
                return var0;
        }
    };
    var _closure1_slot17 = var5;
    var4 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot12;
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            _fun64570: for (var _fun64570_ip = 0;;) switch (_fun64570_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.preset;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun64570_ip = 35;
                        continue _fun64570
                    }
                case 18:
                    var3 = var1.preset;
                    var2 = _closure2_slot0;
                    var0 = var3 === var2;
                case 35:
                    if (!var0) {
                        _fun64570_ip = 55;
                        continue _fun64570
                    }
                case 38:
                    var3 = var1.resolution;
                    var2 = _closure2_slot1;
                    var0 = var3 === var2;
                case 55:
                    if (!var0) {
                        _fun64570_ip = 75;
                        continue _fun64570
                    }
                case 58:
                    var2 = var1.fps;
                    var1 = _closure2_slot2;
                    var0 = var2 === var1;
                case 75:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot18 = var4;
    var3 = function arg0() {
        _fun64571: for (var _fun64571_ip = 0;;) switch (_fun64571_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.maxResolution;
                var3 = null;
                var1 = var3 == var0;
                var0 = null;
                if (var1) {
                    _fun64571_ip = 62;
                    continue _fun64571
                }
            case 20:
                var1 = var2.maxFrameRate;
                var1 = var3 == var1;
                var0 = null;
                if (var1) {
                    _fun64571_ip = 62;
                    continue _fun64571
                }
            case 35:
                var1 = {};
                var3 = var2.maxFrameRate;
                var1.maxFrameRate = var3;
                var2 = var2.maxResolution;
                var1.maxResolution = var2;
                var0 = var1;
            case 62:
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var10 = var8[var0];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var10);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.ApplicationStreamFPS;
    var _closure1_slot10 = var9;
    var9 = var6.ApplicationStreamResolutions;
    var _closure1_slot11 = var9;
    var9 = var6.ApplicationStreamSettingRequirements;
    var _closure1_slot12 = var9;
    var9 = var6.getApplicationFramerate;
    var _closure1_slot13 = var9;
    var6 = var6.getApplicationResolution;
    var _closure1_slot14 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.StreamQualitiesToPremiumType;
    var _closure1_slot15 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ResolutionTypes;
    var _closure1_slot16 = var6;
    var6 = 13;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/StreamQualityUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function arg0() {
        _fun64572: for (var _fun64572_ip = 0;;) switch (_fun64572_ip) {
            case 0:
                var0 = arg0;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun64572_ip = 15;
                    continue _fun64572
                }
            case 11:
                var3 = undefined;
                return var3;
            case 15:
                var3 = var0.maxResolution;
                var5 = var3.type;
                var4 = _closure1_slot16;
                var4 = var4.SOURCE;
                if (!(var5 !== var4)) {
                    _fun64572_ip = 56;
                    continue _fun64572
                }
            case 43:
                var4 = var0.maxResolution;
                var6 = var4.height;
                _fun64572_ip = 66;
                continue _fun64572;
            case 56:
                var4 = _closure1_slot11;
                var6 = var4.RESOLUTION_SOURCE;
            case 66:
                var4 = _closure1_slot14;
                var5 = undefined;
                var4 = var4.bind(var5)(var6);
                var _closure2_slot0 = var4;
                var4 = _closure1_slot13;
                var0 = var0.maxFrameRate;
                var4 = var4.bind(var5)(var0);
                var0 = _closure1_slot10;
                var0 = var0.FPS_5;
                var0 = var4 !== var0;
                if (!var0) {
                    _fun64572_ip = 136;
                    continue _fun64572
                }
            case 113:
                var4 = _closure1_slot12;
                var3 = var4.find;
                var1 = function(arg0) { // Environment: var1
                    _fun64573: for (var _fun64573_ip = 0;;) switch (_fun64573_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.resolution;
                            var0 = _closure2_slot0;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun64573_ip = 46;
                                continue _fun64573
                            }
                        case 23:
                            var2 = var3.fps;
                            var1 = _closure1_slot10;
                            var1 = var1.FPS_5;
                            var0 = var2 !== var1;
                        case 46:
                            if (!var0) {
                                _fun64573_ip = 66;
                                continue _fun64573
                            }
                        case 49:
                            var2 = _closure1_slot17;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var0 = !var1;
                        case 66:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var0 = var2 == var1;
            case 136:
                return var0;
        }
    };
    var2.isPremiumResolution = var6;
    var6 = function arg0() {
        _fun64574: for (var _fun64574_ip = 0;;) switch (_fun64574_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun64574_ip = 15;
                    continue _fun64574
                }
            case 11:
                var2 = undefined;
                return var2;
            case 15:
                var5 = _closure1_slot13;
                var4 = var3.maxFrameRate;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var _closure2_slot0 = var3;
                var3 = _closure1_slot12;
                var2 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    _fun64575: for (var _fun64575_ip = 0;;) switch (_fun64575_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.fps;
                            var0 = _closure2_slot0;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun64575_ip = 40;
                                continue _fun64575
                            }
                        case 23:
                            var2 = _closure1_slot17;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var0 = !var1;
                        case 40:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                var0 = var1 == var0;
                return var0;
        }
    };
    var2.isPremiumFPS = var6;
    var2.isPremiumRequirement = var5;
    var2.getPremiumRequirement = var4;
    var4 = function arg0() {
        _fun64576: for (var _fun64576_ip = 0;;) switch (_fun64576_ip) {
            case 0:
                var5 = arg0;
                var2 = var5.type;
                var0 = _closure1_slot16;
                var0 = var0.SOURCE;
                if (!(var2 !== var0)) {
                    _fun64576_ip = 97;
                    continue _fun64576
                }
            case 25:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var3 = var7[var0];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var7[var0];
                var0 = var6.bind(var2)(var0);
                var0 = var0.t;
                var2 = var0.TEOC0I;
                var0 = {};
                var5 = var5.height;
                var0.resolution = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun64576_ip = 154;
                continue _fun64576;
            case 97:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.XjXqzh;
                var0 = var2.bind(var3)(var1);
            case 154:
                return var0;
        }
    };
    var2.getResolutionText = var4;
    var4 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 10;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Qb44XH;
        var0 = {};
        var4 = arg0;
        var0.fps = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getFPSText = var4;
    var2.getMaxQuality = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 11;
        var4 = var7[var2];
        var3 = undefined;
        var10 = var6.bind(var3)(var4);
        var9 = var10.useStateFromStoresObject;
        var4 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var4;
        var4 = function() { // Environment: var0
            var1 = _closure1_slot4;
            var0 = var1.getState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = var9.bind(var10)(var8, var4);
        var _closure2_slot1 = var4;
        var2 = var7[var2];
        var7 = var6.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var6.bind(var7)(var3, var2);
        var _closure2_slot2 = var6;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun64581: for (var _fun64581_ip = 0;;) switch (_fun64581_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot0;
                    var0 = var0.user;
                    var0 = var0.id;
                    if (!(var1 !== var0)) {
                        _fun64581_ip = 45;
                        continue _fun64581
                    }
                case 25:
                    var3 = _closure1_slot19;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                    _fun64581_ip = 130;
                    continue _fun64581;
                case 45:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.fps;
                    var1.maxFrameRate = var2;
                    var2 = {};
                    var4 = var3.resolution;
                    var2.height = var4;
                    var4 = 0;
                    var2.width = var4;
                    var3 = var3.resolution;
                    if (!(var4 !== var3)) {
                        _fun64581_ip = 105;
                        continue _fun64581
                    }
                case 90:
                    var3 = _closure1_slot16;
                    var3 = var3.FIXED;
                    _fun64581_ip = 118;
                    continue _fun64581;
                case 105:
                    var4 = _closure1_slot16;
                    var3 = var4.SOURCE;
                case 118:
                    var2.type = var3;
                    var1.maxResolution = var2;
                    var0 = var1;
                case 130:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useMaxQuality = var3;
    var1 = function arg0, arg1, arg2() {
        _fun64582: for (var _fun64582_ip = 0;;) switch (_fun64582_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var5 = arg2;
                var1 = _closure1_slot18;
                var0 = undefined;
                var9 = var1.bind(var0)(var7, var6, var5);
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var13 = var1.bind(var2)();
                var2 = _closure1_slot7;
                var1 = var2.getGuildId;
                var3 = var1.bind(var2)();
                var8 = null;
                var1 = var8 != var3;
                var12 = null;
                if (!var1) {
                    _fun64582_ip = 77;
                    continue _fun64582
                }
            case 63:
                var2 = _closure1_slot6;
                var1 = var2.getGuild;
                var12 = var1.bind(var2)(var3);
            case 77:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot9;
                var2 = var1.STREAM_SETTINGS_UPDATE;
                var1 = {};
                var14 = var8 == var13;
                var10 = undefined;
                if (var14) {
                    _fun64582_ip = 129;
                    continue _fun64582
                }
            case 123:
                var10 = var13.premiumType;
            case 129:
                var1.user_premium_tier = var10;
                var13 = var8 == var12;
                var10 = undefined;
                if (var13) {
                    _fun64582_ip = 149;
                    continue _fun64582
                }
            case 143:
                var10 = var12.premiumTier;
            case 149:
                var1.guild_premium_tier = var10;
                var12 = var8 == var9;
                var10 = undefined;
                if (var12) {
                    _fun64582_ip = 171;
                    continue _fun64582
                }
            case 165:
                var10 = var9.quality;
            case 171:
                var12 = var8 != var10;
                var10 = null;
                if (!var12) {
                    _fun64582_ip = 194;
                    continue _fun64582
                }
            case 180:
                var12 = _closure1_slot15;
                var11 = var9.quality;
                var10 = var12[var11];
            case 194:
                var1.stream_quality_user_premium_tier = var10;
                var10 = var8 == var9;
                var8 = undefined;
                if (var10) {
                    _fun64582_ip = 216;
                    continue _fun64582
                }
            case 210:
                var8 = var9.guildPremiumTier;
            case 216:
                var1.stream_quality_guild_premium_tier = var8;
                var1.stream_quality_preset = var7;
                var1.stream_quality_resolution = var6;
                var1.stream_quality_frame_rate = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackStreamSettingsUpdate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3624, 1216, 1410, 3518, 1621, 660, 3502, 1623, 3510, 1234, 566, 795, 2]);