// modules/user_settings/native/notifications/UserSettingsHighlightNotifications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun85308: for (var _fun85308_ip = 0;;) switch (_fun85308_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.guildId;
                var _closure2_slot0 = var10;
                var6 = var1.isStart;
                var5 = var1.isEnd;
                var7 = _closure1_slot3;
                var4 = var7.useCallback;
                var3 = new Array(1);
                var3[0] = var10;
                var2 = function(arg0) { // Environment: var0
                    _fun85309: for (var _fun85309_ip = 0;;) switch (_fun85309_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.updateGuildNotificationSettings;
                            var3 = _closure2_slot0;
                            var2 = {};
                            var8 = _closure1_slot7;
                            if (var1) {
                                _fun85309_ip = 58;
                                continue _fun85309
                            }
                        case 50:
                            var7 = var8.DISABLED;
                            _fun85309_ip = 64;
                            continue _fun85309;
                        case 58:
                            var7 = var8.ENABLED;
                        case 64:
                            var2.notify_highlights = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 7;
                            var6 = var8[var6];
                            var6 = var7.bind(var0)(var6);
                            var7 = var6.NotificationLabel;
                            var6 = var7.highlights;
                            var1 = !var1;
                            var1 = var6.bind(var7)(var1);
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var7 = var4.bind(var7)(var2, var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var4 = undefined;
                var9 = var3.bind(var4)(var2);
                var8 = var9.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = _closure1_slot4;
                var3[1] = var2;
                var2 = new Array(1);
                var2[0] = var10;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var4 = _closure1_slot4;
                    var2 = var4.getGuild;
                    var3 = _closure2_slot0;
                    var2 = var2.bind(var4)(var3);
                    var0.guild = var2;
                    var4 = _closure1_slot6;
                    var2 = var4.isMuted;
                    var2 = var2.bind(var4)(var3);
                    var0.muted = var2;
                    var2 = _closure1_slot6;
                    var1 = var2.getNotifyHighlights;
                    var1 = var1.bind(var2)(var3);
                    var0.notifyHighlights = var1;
                    return var0;
                };
                var0 = var8.bind(var9)(var3, var0, var2);
                var12 = var0.guild;
                var2 = var0.muted;
                var8 = var0.notifyHighlights;
                var0 = null;
                var9 = var0 == var12;
                var3 = undefined;
                if (var9) {
                    _fun85308_ip = 162;
                    continue _fun85308
                }
            case 157:
                var3 = var12.name;
            case 162:
                if (!(var0 != var3)) {
                    _fun85308_ip = 291;
                    continue _fun85308
                }
            case 169:
                var10 = var12.name;
                if (var2) {
                    _fun85308_ip = 191;
                    continue _fun85308
                }
            case 177:
                var3 = _closure1_slot7;
                var3 = var3.DISABLED;
                var2 = var8 === var3;
            case 191:
                var8 = !var2;
                var9 = _closure1_slot8;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 9;
                var2 = var11[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.guild = var12;
                var9 = var9.bind(var4)(var3, var2);
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = 10;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableSwitchRow;
                var1 = {};
                var1.label = var10;
                var1.icon = var9;
                var1.value = var8;
                var1.onValueChange = var7;
                var1.start = var6;
                var1.end = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 291:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HighlightSettings;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/notifications/UserSettingsHighlightNotifications.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun85311: for (var _fun85311_ip = 0;;) switch (_fun85311_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var4 = undefined;
                var6 = var3.bind(var4)(var0);
                var5 = var6.useStateFromStoresArray;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot5;
                    var0 = var1.getFlattenedGuildIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var5.bind(var6)(var3, var0);
                var _closure2_slot0 = var0;
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var0;
                var2 = function() { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = var2.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var4 = arg0;
                        var5 = arg1;
                        var3 = _closure1_slot8;
                        var2 = _closure1_slot9;
                        var1 = {};
                        var1.guildId = var4;
                        var0 = 0;
                        var0 = var0 === var5;
                        var1.isStart = var0;
                        var0 = _closure2_slot0;
                        var6 = var0.length;
                        var0 = 1;
                        var0 = var6 - var0;
                        var0 = var5 === var0;
                        var1.isEnd = var0;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1, var4);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var2, var3);
                var3 = var0.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun85311_ip = 147;
                    continue _fun85311
                }
            case 105:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Form;
                var1 = {};
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 147:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 4342, 4269, 660, 33, 4663, 4660, 566, 7357, 5380, 5342, 2]);