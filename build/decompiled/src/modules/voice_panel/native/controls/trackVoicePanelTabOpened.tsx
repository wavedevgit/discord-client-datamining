// modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot3 = var1;
    var1 = {};
    var4 = 'store';
    var1.STORE = var4;
    var4 = 'gesture';
    var1.GESTURE = var4;
    var4 = 'prejoin button';
    var1.PREJOIN_BUTTON = var4;
    var4 = 'connected button';
    var1.CONNECTED_BUTTON = var4;
    var4 = 'voice controls';
    var1.VOICE_CONTROLS = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0, arg1, arg2) { // Original name: trackVoicePanelTabOpened, environment: var3
        _fun111859: for (var _fun111859_ip = 0;;) switch (_fun111859_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot2;
                var0 = var2.hasUnread;
                var5 = var0.bind(var2)(var3);
                if (var5) {
                    _fun111859_ip = 45;
                    continue _fun111859
                }
            case 24:
                var2 = _closure1_slot2;
                var0 = var2.getMentionCount;
                var2 = var0.bind(var2)(var3);
                var0 = 0;
                var5 = var2 > var0;
            case 45:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot3;
                var2 = var1.VOICE_PANEL_TAB_OPENED;
                var1 = {};
                var6 = arg1;
                var1.tab = var6;
                var6 = arg2;
                var1.source = var6;
                var1.is_chat_badged = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var3;
    var2.VoicePanelTabAnalyticsSources = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3901, 660, 795, 2]);