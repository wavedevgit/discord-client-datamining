// modules/messages/useAllowedChatOverlays.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var8 = var3.ChatOverlays;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityPanelModes;
    var3 = {};
    var7 = var8.NEW_MESSAGES;
    var9 = new Array(3);
    var9[0] = var7;
    var7 = var8.OPT_IN_CHANNEL;
    var9[1] = var7;
    var7 = var8.SUMMARIES;
    var9[2] = var7;
    var7 = 'no_text_activity';
    var3[var7] = var9;
    var9 = var6.DISCONNECTED;
    var10 = var8.NEW_MESSAGES;
    var7 = new Array(3);
    var7[0] = var10;
    var10 = var8.OPT_IN_CHANNEL;
    var7[1] = var10;
    var10 = var8.SUMMARIES;
    var7[2] = var10;
    var3[var9] = var7;
    var9 = var6.LAUNCHING_WITH_ORIENTATION_CHANGE;
    var10 = var8.NEW_MESSAGES;
    var7 = new Array(3);
    var7[0] = var10;
    var10 = var8.OPT_IN_CHANNEL;
    var7[1] = var10;
    var10 = var8.SUMMARIES;
    var7[2] = var10;
    var3[var9] = var7;
    var9 = var6.PANEL;
    var7 = new Array(0);
    var3[var9] = var7;
    var9 = var6.PIP;
    var10 = var8.NEW_MESSAGES;
    var7 = new Array(3);
    var7[0] = var10;
    var10 = var8.OPT_IN_CHANNEL;
    var7[1] = var10;
    var10 = var8.SUMMARIES;
    var7[2] = var10;
    var3[var9] = var7;
    var7 = var6.ACTIVITY_POPOUT_WINDOW;
    var9 = var8.NEW_MESSAGES;
    var6 = new Array(3);
    var6[0] = var9;
    var9 = var8.OPT_IN_CHANNEL;
    var6[1] = var9;
    var8 = var8.SUMMARIES;
    var6[2] = var8;
    var3[var7] = var6;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/useAllowedChatOverlays.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useAllowedChatOverlays, environment: var1
        _fun89842: for (var _fun89842_ip = 0;;) switch (_fun89842_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var0 = var6[var3];
                var5 = undefined;
                var10 = var4.bind(var5)(var0);
                var8 = var10.useStateFromStores;
                var9 = _closure1_slot3;
                var7 = new Array(1);
                var7[0] = var9;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentEmbeddedActivity;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var8.bind(var10)(var7, var0);
                var3 = var6[var3];
                var8 = var4.bind(var5)(var3);
                var7 = var8.useStateFromStores;
                var3 = new Array(1);
                var3[0] = var9;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot3;
                    var0 = var1.getActivityPanelMode;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var7.bind(var8)(var3, var2);
                var3 = 5;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var4 = var6.getEmbeddedActivityLocationChannelId;
                var3 = null;
                var7 = var3 == var0;
                var3 = undefined;
                if (var7) {
                    _fun89842_ip = 126;
                    continue _fun89842
                }
            case 121:
                var3 = var0.location;
            case 126:
                var4 = var4.bind(var6)(var3);
                if (!(var5 !== var0)) {
                    _fun89842_ip = 178;
                    continue _fun89842
                }
            case 135:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var3 = var3.bind(var5)(var0);
                var0 = _closure1_slot4;
                var0 = var3.bind(var5)(var4, var0);
                if (var0) {
                    _fun89842_ip = 178;
                    continue _fun89842
                }
            case 168:
                var0 = _closure1_slot5;
                var0 = var0[var2];
                _fun89842_ip = 190;
                continue _fun89842;
            case 178:
                var1 = _closure1_slot5;
                var0 = var1.no_text_activity;
            case 190:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 1372, 11614, 7877, 632, 3040, 7919, 2]);