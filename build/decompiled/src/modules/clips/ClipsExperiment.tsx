// modules/clips/ClipsExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot3 = var3;
    var3 = 2;
    var4 = var7[var3];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2022-11_clips_experiment',
        'label': 'Clips Experiment'
    };
    var9 = {
        'enableClips': false,
        'ignorePlatformRestriction': false,
        'showClipsHeaderEntrypoint': false,
        'enableScreenshotKeybind': false,
        'enableVoiceOnlyClips': false,
        'enableAdvancedSignals': false
    };
    var4.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Clips without upsells'
    };
    var9 = {
        'enableClips': true,
        'ignorePlatformRestriction': false,
        'showClipsHeaderEntrypoint': true,
        'enableScreenshotKeybind': false,
        'enableVoiceOnlyClips': false,
        'enableAdvancedSignals': false
    };
    var10.config = var9;
    var9 = new Array(3);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Clips with upsells'
    };
    var11 = {
        'enableClips': true,
        'ignorePlatformRestriction': false,
        'showClipsHeaderEntrypoint': true,
        'enableScreenshotKeybind': false,
        'enableVoiceOnlyClips': false,
        'enableAdvancedSignals': false
    };
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 99,
        'label': 'Clips 4 da Developerz'
    };
    var11 = {
        'enableClips': true,
        'ignorePlatformRestriction': true,
        'showClipsHeaderEntrypoint': true,
        'enableScreenshotKeybind': true,
        'enableVoiceOnlyClips': true,
        'enableAdvancedSignals': true
    };
    var10.config = var11;
    var9[2] = var10;
    var4.treatments = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2023-09_clips_nitro_early_access',
        'label': 'Clips (Nitro EA)'
    };
    var9 = {
        'enableClips': false,
        'enablePremiumEarlyAccessAnnouncementCoachmark': false,
        'enablePremiumEarlyAccessGoLiveRoadblock': false,
        'enableScreenshotKeybind': false,
        'enableVoiceOnlyClips': false,
        'enableAdvancedSignals': false
    };
    var3.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Clips Nitro EA Upsells Visible'
    };
    var9 = {
        'enableClips': false,
        'enablePremiumEarlyAccessAnnouncementCoachmark': true,
        'enablePremiumEarlyAccessGoLiveRoadblock': true,
        'enableScreenshotKeybind': false,
        'enableVoiceOnlyClips': false,
        'enableAdvancedSignals': false
    };
    var10.config = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Clips Enabled (Nitro)'
    };
    var11 = {
        'enableClips': true,
        'enablePremiumEarlyAccessAnnouncementCoachmark': true,
        'enablePremiumEarlyAccessGoLiveRoadblock': false,
        'enableScreenshotKeybind': false,
        'enableVoiceOnlyClips': false,
        'enableAdvancedSignals': false
    };
    var10.config = var11;
    var9[1] = var10;
    var3.treatments = var9;
    var3 = var5.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/clips/ClipsExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ClipsExperiment = var4;
    var2.ClipsPremiumEarlyAccessExperiment = var3;
    var3 = function() {
        _fun31007: for (var _fun31007_ip = 0;;) switch (_fun31007_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var2[var0];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = _closure1_slot2;
                var0 = var1.bind(var5)(var0);
                if (var0) {
                    _fun31007_ip = 41;
                    continue _fun31007
                }
            case 37:
                var0 = false;
                return var0;
            case 41:
                var7 = _closure1_slot5;
                var4 = var7.getCurrentConfig;
                var2 = {};
                var1 = 'areClipsEnabled';
                var2.location = var1;
                var0 = {};
                var6 = false;
                var0.autoTrackExposure = var6;
                var0 = var4.bind(var7)(var2, var0);
                var0 = var0.enableClips;
                var8 = _closure1_slot4;
                var7 = var8.getCurrentConfig;
                var4 = {};
                var4.location = var1;
                var2 = {};
                var2.autoTrackExposure = var6;
                var2 = var7.bind(var8)(var4, var2);
                var2 = var2.enableClips;
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 4;
                var3 = var7[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.getCurrentConfig;
                var3 = {};
                var3.location = var1;
                var1 = {};
                var1.autoTrackExposure = var6;
                var1 = var4.bind(var5)(var3, var1);
                var1 = var1.enableViewerClipping;
                if (var0) {
                    _fun31007_ip = 176;
                    continue _fun31007
                }
            case 173:
                var0 = var2;
            case 176:
                if (var0) {
                    _fun31007_ip = 182;
                    continue _fun31007
                }
            case 179:
                var0 = var1;
            case 182:
                return var0;
        }
    };
    var2.areClipsAvailable = var3;
    var3 = function() {
        _fun31008: for (var _fun31008_ip = 0;;) switch (_fun31008_ip) {
            case 0:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 3;
                var1 = var8[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var1);
                var1 = _closure1_slot2;
                var1 = var2.bind(var5)(var1);
                var10 = _closure1_slot5;
                var9 = var10.useExperiment;
                var4 = {};
                var2 = 'useEnableClips';
                var4.location = var2;
                var3 = {};
                var7 = false;
                var3.autoTrackExposure = var7;
                var3 = var9.bind(var10)(var4, var3);
                var3 = var3.enableClips;
                var10 = _closure1_slot4;
                var9 = var10.useExperiment;
                var4 = {};
                var4.location = var2;
                var0 = {};
                var0.autoTrackExposure = var7;
                var0 = var9.bind(var10)(var4, var0);
                var0 = var0.enableClips;
                var4 = 4;
                var4 = var8[var4];
                var6 = var6.bind(var5)(var4);
                var5 = var6.useExperiment;
                var4 = {};
                var4.location = var2;
                var2 = {};
                var2.autoTrackExposure = var7;
                var2 = var5.bind(var6)(var4, var2);
                var2 = var2.enableViewerClipping;
                if (var0) {
                    _fun31008_ip = 161;
                    continue _fun31008
                }
            case 158:
                var0 = var3;
            case 161:
                if (var0) {
                    _fun31008_ip = 167;
                    continue _fun31008
                }
            case 164:
                var0 = var2;
            case 167:
                if (!var0) {
                    _fun31008_ip = 173;
                    continue _fun31008
                }
            case 170:
                var0 = var1;
            case 173:
                return var0;
        }
    };
    var2.useIsClipsAvailable = var3;
    var3 = function(arg0) { // Environment: var1
        _fun31009: for (var _fun31009_ip = 0;;) switch (_fun31009_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.autoTrackExposure;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = _closure1_slot2;
                var0 = var2.bind(var3)(var0);
                var4 = _closure1_slot5;
                var3 = var4.useExperiment;
                var2 = {};
                var1 = 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock';
                var2.location = var1;
                var1 = {};
                if (!var5) {
                    _fun31009_ip = 73;
                    continue _fun31009
                }
            case 70:
                var5 = var0;
            case 73:
                var1.autoTrackExposure = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = var1.enablePremiumEarlyAccessGoLiveRoadblock;
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun31009_ip = 102;
                    continue _fun31009
                }
            case 99:
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var2.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock = var3;
    var3 = function(arg0) { // Environment: var1
        _fun31010: for (var _fun31010_ip = 0;;) switch (_fun31010_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.autoTrackExposure;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = _closure1_slot2;
                var0 = var2.bind(var3)(var0);
                var4 = _closure1_slot5;
                var3 = var4.useExperiment;
                var2 = {};
                var1 = 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock';
                var2.location = var1;
                var1 = {};
                if (!var5) {
                    _fun31010_ip = 73;
                    continue _fun31010
                }
            case 70:
                var5 = var0;
            case 73:
                var1.autoTrackExposure = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = var1.enablePremiumEarlyAccessAnnouncementCoachmark;
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun31010_ip = 102;
                    continue _fun31010
                }
            case 99:
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var2.useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark = var3;
    var3 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.isPremiumAtLeast;
        var1 = arg0;
        var1 = var1.premiumType;
        var0 = _closure1_slot3;
        var0 = var0.TIER_2;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.isUserPremiumTypeForClipsEarlyAccess = var3;
    var3 = function() {
        var3 = _closure1_slot4;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'isScreenshotKeybindEnabled';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enableScreenshotKeybind;
        return var0;
    };
    var2.isScreenshotKeybindEnabled = var3;
    var3 = function() {
        var3 = _closure1_slot4;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = 'useScreenshotKeybindEnabled';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enableScreenshotKeybind;
        return var0;
    };
    var2.useScreenshotKeybindEnabled = var3;
    var3 = function() {
        var3 = _closure1_slot4;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'areVoiceOnlyClipsEnabled';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enableVoiceOnlyClips;
        return var0;
    };
    var2.areVoiceOnlyClipsEnabled = var3;
    var1 = function() {
        var3 = _closure1_slot4;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'areAdvancedSignalsEnabled';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enableAdvancedSignals;
        return var0;
    };
    var2.areAdvancedSignalsEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3478, 1623, 3117, 3511, 3514, 3111, 2]);