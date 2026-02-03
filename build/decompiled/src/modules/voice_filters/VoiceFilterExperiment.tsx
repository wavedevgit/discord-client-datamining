// modules/voice_filters/VoiceFilterExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var5 = var3.Set;
    var3 = var5.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var14 = ['943265993613008967'];
    var15 = var4;
    var3 = new var15[var5](var14, var13);
    var4 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot4 = var4;
    var3 = 2;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2024-10_flamingo',
        'label': 'Flamingo'
    };
    var9 = {
        'enabled': false,
        'isTester': false
    };
    var3.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Enabled - Treatment 1'
    };
    var9 = {
        'enabled': true,
        'isTester': false
    };
    var10.config = var9;
    var9 = new Array(4);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Enabled - Treatment 2'
    };
    var11 = {
        'enabled': true,
        'isTester': false
    };
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': 'Enabled - Treatment 3'
    };
    var11 = {
        'enabled': true,
        'isTester': false
    };
    var10.config = var11;
    var9[2] = var10;
    var10 = {
        'id': 4,
        'label': 'Enabled - Tester'
    };
    var11 = {
        'enabled': true,
        'isTester': true
    };
    var10.config = var11;
    var9[3] = var10;
    var3.treatments = var9;
    var3 = var5.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var5 = function() {
        _fun94444: for (var _fun94444_ip = 0;;) switch (_fun94444_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 3;
                var0 = var0[var4];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isWindows;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun94444_ip = 65;
                    continue _fun94444
                }
            case 38:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isMac;
                var0 = var1.bind(var2)();
            case 65:
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_filters/VoiceFilterExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var2.voiceFilterTestGuilds = var4;
    var2.VoiceFilterExperiment = var3;
    var3 = function arg0() {
        _fun94445: for (var _fun94445_ip = 0;;) switch (_fun94445_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.location;
                var5 = var0.autoTrackExposure;
                var3 = _closure1_slot6;
                var0 = undefined;
                var0 = var3.bind(var0)();
                var3 = !var0;
                var0 = !var3;
                if (var3) {
                    _fun94445_ip = 70;
                    continue _fun94445
                }
            case 36:
                var4 = _closure1_slot5;
                var3 = var4.getCurrentConfig;
                var2 = {};
                var2.location = var1;
                var1 = {};
                var1.autoTrackExposure = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0 = var1.enabled;
            case 70:
                return var0;
        }
    };
    var2.isVoiceFiltersEnabled = var3;
    var3 = function arg0() {
        _fun94446: for (var _fun94446_ip = 0;;) switch (_fun94446_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.location;
                var4 = var1.guildId;
                var5 = _closure1_slot5;
                var3 = var5.getCurrentConfig;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var6 = false;
                var0.autoTrackExposure = var6;
                var0 = var3.bind(var5)(var1, var0);
                var0 = var0.isTester;
                if (!var0) {
                    _fun94446_ip = 85;
                    continue _fun94446
                }
            case 56:
                var1 = null;
                var1 = var1 == var4;
                if (var1) {
                    _fun94446_ip = 82;
                    continue _fun94446
                }
            case 65:
                var3 = _closure1_slot4;
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
            case 82:
                var0 = var1;
            case 85:
                return var0;
        }
    };
    var2.isVoiceFiltersTestingDisabled = var3;
    var1 = function arg0() {
        _fun94447: for (var _fun94447_ip = 0;;) switch (_fun94447_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.location;
                var5 = var1.autoTrackExposure;
                var4 = _closure1_slot5;
                var3 = var4.useExperiment;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var5;
                var1 = var3.bind(var4)(var1, var0);
                var0 = var1.enabled;
                var1 = var1.isTester;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var5.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot3;
                var5 = new Array(2);
                var5[0] = var4;
                var4 = _closure1_slot2;
                var5[1] = var4;
                var4 = function() { // Environment: var4
                    var2 = _closure1_slot2;
                    var1 = var2.getChannel;
                    var3 = _closure1_slot3;
                    var0 = var3.getVoiceChannelId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var4);
                var1 = !var1;
                if (var1) {
                    _fun94447_ip = 156;
                    continue _fun94447
                }
            case 125:
                var4 = null;
                var4 = var4 != var5;
                if (!var4) {
                    _fun94447_ip = 153;
                    continue _fun94447
                }
            case 134:
                var7 = _closure1_slot4;
                var6 = var7.has;
                var5 = var5.guild_id;
                var4 = var6.bind(var7)(var5);
            case 153:
                var1 = var4;
            case 156:
                if (!var0) {
                    _fun94447_ip = 167;
                    continue _fun94447
                }
            case 159:
                var2 = _closure1_slot6;
                var0 = var2.bind(var3)();
            case 167:
                if (!var0) {
                    _fun94447_ip = 173;
                    continue _fun94447
                }
            case 170:
                var0 = var1;
            case 173:
                return var0;
        }
    };
    var2.useAreVoiceFiltersEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1670, 3115, 478, 566, 2]);