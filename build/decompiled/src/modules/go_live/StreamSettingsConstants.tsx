// modules/go_live/StreamSettingsConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var15 = require;
    var2 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var16;
    var19 = function(arg0, arg1, arg2) { // Original name: makeButton, environment: var10
        var2 = arg0;
        var _closure2_slot0 = var2;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var0.value = var2;
        var4 = function() { // Original name: get label, environment: var1
            _fun30783: for (var _fun30783_ip = 0;;) switch (_fun30783_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun30783_ip = 34;
                        continue _fun30783
                    }
                case 13:
                    var0 = global;
                    var3 = var0.String;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    _fun30783_ip = 44;
                    continue _fun30783;
                case 34:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = var2.bind(var1)();
                case 44:
                    return var0;
            }
        };
        var3 = undefined;
        var2 = 'label';
        Object.defineProperty(var0, var2, {
            get: var4,
            set: var3,
            enumerable: true
        });
        var2 = function() { // Original name: get subtext, environment: var1
            _fun30784: for (var _fun30784_ip = 0;;) switch (_fun30784_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = null;
                    var3 = var0 != var2;
                    var2 = undefined;
                    var0 = undefined;
                    if (!var3) {
                        _fun30784_ip = 28;
                        continue _fun30784
                    }
                case 20:
                    var1 = _closure2_slot2;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var1 = 'subtext';
        Object.defineProperty(var0, var1, {
            get: var2,
            set: var3,
            enumerable: true
        });
        return var0;
    };
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var6 = 0;
    var1 = var16[var6];
    var0 = undefined;
    var1 = var15.bind(var0)(var1);
    var4 = var1.BoostedGuildTiers;
    var5 = 1;
    var1 = var16[var5];
    var1 = var15.bind(var0)(var1);
    var3 = var1.StreamQualities;
    var13 = {};
    var7 = 480;
    var13.RESOLUTION_480 = var7;
    var1 = 'RESOLUTION_480';
    var13[var7] = var1;
    var7 = 720;
    var13.RESOLUTION_720 = var7;
    var1 = 'RESOLUTION_720';
    var13[var7] = var1;
    var7 = 1080;
    var13.RESOLUTION_1080 = var7;
    var1 = 'RESOLUTION_1080';
    var13[var7] = var1;
    var7 = 1440;
    var13.RESOLUTION_1440 = var7;
    var1 = 'RESOLUTION_1440';
    var13[var7] = var1;
    var13.RESOLUTION_SOURCE = var6;
    var1 = 'RESOLUTION_SOURCE';
    var13[var6] = var1;
    var _closure1_slot2 = var13;
    var12 = {};
    var6 = 5;
    var12.FPS_5 = var6;
    var1 = 'FPS_5';
    var12[var6] = var1;
    var6 = 15;
    var12.FPS_15 = var6;
    var1 = 'FPS_15';
    var12[var6] = var1;
    var6 = 30;
    var12.FPS_30 = var6;
    var1 = 'FPS_30';
    var12[var6] = var1;
    var6 = 60;
    var12.FPS_60 = var6;
    var1 = 'FPS_60';
    var12[var6] = var1;
    var _closure1_slot3 = var12;
    var11 = {};
    var11.PRESET_VIDEO = var5;
    var1 = 'PRESET_VIDEO';
    var11[var5] = var1;
    var5 = 2;
    var11.PRESET_DOCUMENTS = var5;
    var1 = 'PRESET_DOCUMENTS';
    var11[var5] = var1;
    var14 = 3;
    var11.PRESET_CUSTOM = var14;
    var1 = 'PRESET_CUSTOM';
    var11[var14] = var1;
    var5 = 4;
    var11.PRESET_AUTO = var5;
    var1 = 'PRESET_AUTO';
    var11[var5] = var1;
    var9 = {};
    var5 = var11.PRESET_DOCUMENTS;
    var6 = {};
    var1 = var13.RESOLUTION_SOURCE;
    var6.resolution = var1;
    var1 = var12.FPS_15;
    var6.fps = var1;
    var1 = new Array(2);
    var1[0] = var6;
    var6 = {};
    var7 = var13.RESOLUTION_SOURCE;
    var6.resolution = var7;
    var7 = var12.FPS_5;
    var6.fps = var7;
    var1[1] = var6;
    var9[var5] = var1;
    var5 = var11.PRESET_VIDEO;
    var6 = {};
    var1 = var13.RESOLUTION_1440;
    var6.resolution = var1;
    var1 = var12.FPS_60;
    var6.fps = var1;
    var1 = new Array(4);
    var1[0] = var6;
    var6 = {};
    var7 = var13.RESOLUTION_1080;
    var6.resolution = var7;
    var7 = var12.FPS_60;
    var6.fps = var7;
    var1[1] = var6;
    var6 = {};
    var7 = var13.RESOLUTION_720;
    var6.resolution = var7;
    var7 = var12.FPS_60;
    var6.fps = var7;
    var1[2] = var6;
    var6 = {};
    var7 = var13.RESOLUTION_720;
    var6.resolution = var7;
    var7 = var12.FPS_30;
    var6.fps = var7;
    var1[3] = var6;
    var9[var5] = var1;
    var5 = var11.PRESET_AUTO;
    var1 = new Array(0);
    var9[var5] = var1;
    var5 = var11.PRESET_CUSTOM;
    var1 = new Array(0);
    var9[var5] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_SOURCE;
    var1.resolution = var5;
    var5 = var12.FPS_60;
    var1.fps = var5;
    var5 = var3.HIGH_STREAMING_QUALITY;
    var1.quality = var5;
    var8 = new Array(18);
    var8[0] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_SOURCE;
    var1.resolution = var5;
    var5 = var12.FPS_30;
    var1.fps = var5;
    var5 = var3.HIGH_STREAMING_QUALITY;
    var1.quality = var5;
    var8[1] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_SOURCE;
    var1.resolution = var5;
    var5 = var12.FPS_15;
    var1.fps = var5;
    var5 = var3.HIGH_STREAMING_QUALITY;
    var1.quality = var5;
    var8[2] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_SOURCE;
    var1.resolution = var5;
    var5 = var12.FPS_5;
    var1.fps = var5;
    var5 = var11.PRESET_DOCUMENTS;
    var1.preset = var5;
    var8[3] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_1440;
    var1.resolution = var5;
    var5 = var12.FPS_60;
    var1.fps = var5;
    var5 = var4.TIER_2;
    var1.guildPremiumTier = var5;
    var5 = var3.MID_STREAMING_QUALITY;
    var1.quality = var5;
    var8[4] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_1440;
    var1.resolution = var5;
    var5 = var12.FPS_30;
    var1.fps = var5;
    var5 = var4.TIER_2;
    var1.guildPremiumTier = var5;
    var5 = var3.MID_STREAMING_QUALITY;
    var1.quality = var5;
    var8[5] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_1440;
    var1.resolution = var5;
    var5 = var12.FPS_15;
    var1.fps = var5;
    var5 = var4.TIER_2;
    var1.guildPremiumTier = var5;
    var5 = var3.MID_STREAMING_QUALITY;
    var1.quality = var5;
    var8[6] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_1080;
    var1.resolution = var5;
    var5 = var12.FPS_60;
    var1.fps = var5;
    var5 = var4.TIER_2;
    var1.guildPremiumTier = var5;
    var5 = var3.MID_STREAMING_QUALITY;
    var1.quality = var5;
    var8[7] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_1080;
    var1.resolution = var5;
    var5 = var12.FPS_30;
    var1.fps = var5;
    var5 = var4.TIER_2;
    var1.guildPremiumTier = var5;
    var5 = var3.MID_STREAMING_QUALITY;
    var1.quality = var5;
    var8[8] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_1080;
    var1.resolution = var5;
    var5 = var12.FPS_15;
    var1.fps = var5;
    var5 = var4.TIER_2;
    var1.guildPremiumTier = var5;
    var5 = var3.MID_STREAMING_QUALITY;
    var1.quality = var5;
    var8[9] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_720;
    var1.resolution = var5;
    var5 = var12.FPS_60;
    var1.fps = var5;
    var5 = var4.TIER_1;
    var1.guildPremiumTier = var5;
    var5 = var3.MID_STREAMING_QUALITY;
    var1.quality = var5;
    var8[10] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_720;
    var1.resolution = var5;
    var5 = var12.FPS_30;
    var1.fps = var5;
    var8[11] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_720;
    var1.resolution = var5;
    var5 = var12.FPS_15;
    var1.fps = var5;
    var8[12] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_720;
    var1.resolution = var5;
    var5 = var12.FPS_5;
    var1.fps = var5;
    var8[13] = var1;
    var1 = {};
    var5 = var13.RESOLUTION_480;
    var1.resolution = var5;
    var5 = var12.FPS_60;
    var1.fps = var5;
    var4 = var4.TIER_1;
    var1.guildPremiumTier = var4;
    var3 = var3.MID_STREAMING_QUALITY;
    var1.quality = var3;
    var8[14] = var1;
    var1 = {};
    var3 = var13.RESOLUTION_480;
    var1.resolution = var3;
    var3 = var12.FPS_30;
    var1.fps = var3;
    var8[15] = var1;
    var1 = {};
    var3 = var13.RESOLUTION_480;
    var1.resolution = var3;
    var3 = var12.FPS_15;
    var1.fps = var3;
    var8[16] = var1;
    var1 = {};
    var3 = var13.RESOLUTION_480;
    var1.resolution = var3;
    var3 = var12.FPS_5;
    var1.fps = var3;
    var8[17] = var1;
    var1 = var13.RESOLUTION_720;
    var1 = var19.bind(var0)(var1);
    var7 = new Array(4);
    var7[0] = var1;
    var1 = var13.RESOLUTION_1080;
    var1 = var19.bind(var0)(var1);
    var7[1] = var1;
    var1 = var13.RESOLUTION_1440;
    var1 = var19.bind(var0)(var1);
    var7[2] = var1;
    var3 = var13.RESOLUTION_SOURCE;
    var1 = function() { // Environment: var10
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.XjXqzh;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1 = var19.bind(var0)(var3, var1);
    var7[3] = var1;
    var1 = var13.RESOLUTION_720;
    var1 = var19.bind(var0)(var1);
    var6 = new Array(3);
    var6[0] = var1;
    var1 = var13.RESOLUTION_1080;
    var1 = var19.bind(var0)(var1);
    var6[1] = var1;
    var1 = var13.RESOLUTION_1440;
    var1 = var19.bind(var0)(var1);
    var6[2] = var1;
    var5 = function(arg0) { // Original name: makeResolutionLabel, environment: var10
        _fun30786: for (var _fun30786_ip = 0;;) switch (_fun30786_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot2;
                var0 = var0.RESOLUTION_SOURCE;
                if (!(var5 !== var0)) {
                    _fun30786_ip = 87;
                    continue _fun30786
                }
            case 20:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 2;
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
                var0.resolution = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun30786_ip = 144;
                continue _fun30786;
            case 87:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
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
            case 144:
                return var0;
        }
    };
    var _closure1_slot4 = var5;
    var3 = var13.RESOLUTION_480;
    var1 = function() { // Environment: var10
        var2 = _closure1_slot4;
        var0 = _closure1_slot2;
        var1 = var0.RESOLUTION_480;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1 = var19.bind(var0)(var3, var1);
    var4 = new Array(5);
    var4[0] = var1;
    var3 = var13.RESOLUTION_720;
    var1 = function() { // Environment: var10
        var2 = _closure1_slot4;
        var0 = _closure1_slot2;
        var1 = var0.RESOLUTION_720;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1 = var19.bind(var0)(var3, var1);
    var4[1] = var1;
    var3 = var13.RESOLUTION_1080;
    var1 = function() { // Environment: var10
        var2 = _closure1_slot4;
        var0 = _closure1_slot2;
        var1 = var0.RESOLUTION_1080;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1 = var19.bind(var0)(var3, var1);
    var4[2] = var1;
    var3 = var13.RESOLUTION_1440;
    var1 = function() { // Environment: var10
        var2 = _closure1_slot4;
        var0 = _closure1_slot2;
        var1 = var0.RESOLUTION_1440;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1 = var19.bind(var0)(var3, var1);
    var4[3] = var1;
    var3 = var13.RESOLUTION_SOURCE;
    var1 = function() { // Environment: var10
        var2 = _closure1_slot4;
        var0 = _closure1_slot2;
        var1 = var0.RESOLUTION_SOURCE;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1 = var19.bind(var0)(var3, var1);
    var4[4] = var1;
    var1 = var12.FPS_15;
    var1 = var19.bind(var0)(var1);
    var3 = new Array(3);
    var3[0] = var1;
    var1 = var12.FPS_30;
    var1 = var19.bind(var0)(var1);
    var3[1] = var1;
    var1 = var12.FPS_60;
    var1 = var19.bind(var0)(var1);
    var3[2] = var1;
    var17 = var12.FPS_15;
    var1 = function() { // Environment: var10
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 2;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0["bW+JCW"];
        var0 = {};
        var4 = _closure1_slot3;
        var4 = var4.FPS_15;
        var0.value = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var17 = var19.bind(var0)(var17, var1);
    var1 = new Array(3);
    var1[0] = var17;
    var18 = var12.FPS_30;
    var17 = function() { // Environment: var10
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 2;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0["bW+JCW"];
        var0 = {};
        var4 = _closure1_slot3;
        var4 = var4.FPS_30;
        var0.value = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var17 = var19.bind(var0)(var18, var17);
    var1[1] = var17;
    var18 = var12.FPS_60;
    var17 = function() { // Environment: var10
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 2;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0["bW+JCW"];
        var0 = {};
        var4 = _closure1_slot3;
        var4 = var4.FPS_60;
        var0.value = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var17 = var19.bind(var0)(var18, var17);
    var1[2] = var17;
    var14 = var16[var14];
    var16 = var15.bind(var0)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/go_live/StreamSettingsConstants.tsx';
    var14 = var15.bind(var16)(var14);
    var2.ApplicationStreamResolutions = var13;
    var13 = function(arg0) { // Original name: getApplicationResolution, environment: var10
        _fun30795: for (var _fun30795_ip = 0;;) switch (_fun30795_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot2;
                var1 = var1.RESOLUTION_480;
                if (!(var1 !== var4)) {
                    _fun30795_ip = 182;
                    continue _fun30795
                }
            case 23:
                var1 = _closure1_slot2;
                var1 = var1.RESOLUTION_720;
                if (!(var1 !== var4)) {
                    _fun30795_ip = 170;
                    continue _fun30795
                }
            case 40:
                var1 = _closure1_slot2;
                var1 = var1.RESOLUTION_1080;
                if (!(var1 !== var4)) {
                    _fun30795_ip = 158;
                    continue _fun30795
                }
            case 54:
                var1 = _closure1_slot2;
                var1 = var1.RESOLUTION_1440;
                if (!(var1 !== var4)) {
                    _fun30795_ip = 146;
                    continue _fun30795
                }
            case 68:
                var1 = _closure1_slot2;
                var1 = var1.RESOLUTION_SOURCE;
                if (!(var1 !== var4)) {
                    _fun30795_ip = 134;
                    continue _fun30795
                }
            case 82:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Unknown resolution: ';
                var5 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 134:
                var1 = _closure1_slot2;
                var1 = var1.RESOLUTION_SOURCE;
                return var1;
            case 146:
                var1 = _closure1_slot2;
                var1 = var1.RESOLUTION_1440;
                return var1;
            case 158:
                var1 = _closure1_slot2;
                var1 = var1.RESOLUTION_1080;
                return var1;
            case 170:
                var1 = _closure1_slot2;
                var1 = var1.RESOLUTION_720;
                return var1;
            case 182:
                var0 = _closure1_slot2;
                var0 = var0.RESOLUTION_480;
                return var0;
        }
    };
    var2.getApplicationResolution = var13;
    var2.ApplicationStreamFPS = var12;
    var2.ApplicationStreamPresets = var11;
    var10 = function(arg0) { // Original name: getApplicationFramerate, environment: var10
        _fun30796: for (var _fun30796_ip = 0;;) switch (_fun30796_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot3;
                var1 = var1.FPS_5;
                if (!(var1 !== var4)) {
                    _fun30796_ip = 153;
                    continue _fun30796
                }
            case 23:
                var1 = _closure1_slot3;
                var1 = var1.FPS_15;
                if (!(var1 !== var4)) {
                    _fun30796_ip = 141;
                    continue _fun30796
                }
            case 37:
                var1 = _closure1_slot3;
                var1 = var1.FPS_30;
                if (!(var1 !== var4)) {
                    _fun30796_ip = 129;
                    continue _fun30796
                }
            case 51:
                var1 = _closure1_slot3;
                var1 = var1.FPS_60;
                if (!(var1 !== var4)) {
                    _fun30796_ip = 117;
                    continue _fun30796
                }
            case 65:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Unknown frame rate: ';
                var5 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 117:
                var1 = _closure1_slot3;
                var1 = var1.FPS_60;
                return var1;
            case 129:
                var1 = _closure1_slot3;
                var1 = var1.FPS_30;
                return var1;
            case 141:
                var1 = _closure1_slot3;
                var1 = var1.FPS_15;
                return var1;
            case 153:
                var0 = _closure1_slot3;
                var0 = var0.FPS_5;
                return var0;
        }
    };
    var2.getApplicationFramerate = var10;
    var2.ApplicationStreamPresetValues = var9;
    var2.ApplicationStreamSettingRequirements = var8;
    var2.ApplicationStreamResolutionButtons = var7;
    var2.GoLiveDeviceResolutionButtons = var6;
    var2.makeResolutionLabel = var5;
    var2.ApplicationStreamResolutionButtonsWithSuffixLabel = var4;
    var2.ApplicationStreamFPSButtons = var3;
    var2.ApplicationStreamFPSButtonsWithSuffixLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1615, 1234, 2]);