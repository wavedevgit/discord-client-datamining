// modules/hang_status/HangStatusExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var4 = var3.CommonTriggerPoints;
    var3 = 1;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2025-07_hang_status',
        'label': 'Hang Statuses'
    };
    var9 = {
        'enableHangStatus': false,
        'setDefaultStatus': false,
        'showEmptyChannelTopic': true,
        'allowPermanentClear': false,
        'defaultStatusVariant': 'twemoji'
    };
    var3.defaultConfig = var9;
    var4 = var4.VOICE_CALL;
    var3.commonTriggerPoint = var4;
    var4 = {
        'id': 1,
        'label': 'Enable Hang Status with illocons - chilling default'
    };
    var9 = {
        'enableHangStatus': true,
        'setDefaultStatus': true,
        'showEmptyChannelTopic': false,
        'allowPermanentClear': false,
        'defaultStatusVariant': 'illocons'
    };
    var4.config = var9;
    var9 = new Array(4);
    var9[0] = var4;
    var10 = {
        'id': 2,
        'label': 'Enable Hang Status with Twemoji - chilling default'
    };
    var4 = 2;
    var11 = {
        'enableHangStatus': true,
        'setDefaultStatus': true,
        'showEmptyChannelTopic': false,
        'allowPermanentClear': false,
        'defaultStatusVariant': 'twemoji'
    };
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': 'Enable Hang Status with Twemoji - neutral default'
    };
    var11 = {
        'enableHangStatus': true,
        'setDefaultStatus': true,
        'showEmptyChannelTopic': false,
        'allowPermanentClear': false,
        'defaultStatusVariant': 'twemojimild'
    };
    var10.config = var11;
    var9[2] = var10;
    var10 = {
        'id': 4,
        'label': 'Enable Hang Status with Twemoji - neutral default, allow clearing statuses'
    };
    var11 = {
        'enableHangStatus': true,
        'setDefaultStatus': true,
        'showEmptyChannelTopic': false,
        'allowPermanentClear': true,
        'defaultStatusVariant': 'twemojimild'
    };
    var10.config = var11;
    var9[3] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/HangStatusExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.HangStatusExperiment = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.guildId;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var1.guildId = var4;
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useHangStatusExperiment = var3;
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.guildId;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var1.guildId = var4;
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getHangStatusExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3076, 2]);