// modules/hangouts/VoiceLockscreenWidgetExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = 0;
    var4 = var7[var3];
    var0 = undefined;
    var9 = var6.bind(var0)(var4);
    var8 = var9.createExperiment;
    var4 = {
        'kind': 'guild',
        'id': '2023-12_voice_lockscreen_widget',
        'label': 'Voice live activity (guild)'
    };
    var5 = {
        'showWidget': false,
        'voiceChannelActivityNotifsEnabled': false
    };
    var4.defaultConfig = var5;
    var5 = {
        'id': 1,
        'label': 'Off (notif only)'
    };
    var10 = {
        'showWidget': false,
        'voiceChannelActivityNotifsEnabled': false
    };
    var5.config = var10;
    var10 = new Array(3);
    var10[0] = var5;
    var5 = {
        'id': 2,
        'label': 'On (widget + notif)'
    };
    var11 = {
        'showWidget': true,
        'voiceChannelActivityNotifsEnabled': false
    };
    var5.config = var11;
    var10[1] = var5;
    var11 = {
        'id': 3,
        'label': 'On (widget + notifs++)'
    };
    var5 = 3;
    var12 = {
        'showWidget': true,
        'voiceChannelActivityNotifsEnabled': true
    };
    var11.config = var12;
    var10[2] = var11;
    var4.treatments = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot2 = var4;
    var3 = var7[var3];
    var9 = var6.bind(var0)(var3);
    var8 = var9.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2024-01_voice_lockscreen_widget_user',
        'label': 'Voice live activity (user)'
    };
    var10 = {
        'showWidget': false,
        'showStaticWidget': false
    };
    var3.defaultConfig = var10;
    var11 = {
        'id': 1,
        'label': 'Widget on'
    };
    var10 = {
        'showWidget': true,
        'showStaticWidget': false
    };
    var11.config = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var3.treatments = var10;
    var3 = var8.bind(var9)(var3);
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/hangouts/VoiceLockscreenWidgetExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.VoiceLockscreenWidgetUserExperiment = var3;
    var1 = function arg0, arg1() {
        var0 = arg0;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 1;
        var2 = var6[var2];
        var4 = undefined;
        var3 = var5.bind(var4)(var2);
        var2 = var3.age;
        var3 = var2.bind(var3)(var0);
        var2 = 2;
        var2 = var6[var2];
        var2 = var5.bind(var4)(var2);
        var2 = var2.Millis;
        var4 = var2.DAY;
        var2 = 30;
        var2 = var2 * var4;
        var4 = var3 >= var2;
        var3 = _closure1_slot2;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var5 = arg1;
        var1.location = var5;
        var1.guildId = var0;
        var0 = {};
        var0.disable = var4;
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getLockscreenWidgetConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3117, 21, 667, 2]);