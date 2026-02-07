// modules/report_to_mod/hooks/useReportToModHooks.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/report_to_mod/hooks/useReportToModHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun78892: for (var _fun78892_ip = 0;;) switch (_fun78892_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun78892_ip = 105;
                        continue _fun78892
                    }
                case 13:
                    var4 = _closure1_slot4;
                    var1 = var4.getGuild;
                    var0 = _closure2_slot0;
                    var5 = var1.bind(var4)(var0);
                    var0 = var3 != var5;
                    if (!var0) {
                        _fun78892_ip = 103;
                        continue _fun78892
                    }
                case 41:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 4;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.bind(var4)(var5);
                    if (!var1) {
                        _fun78892_ip = 100;
                        continue _fun78892
                    }
                case 71:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.bind(var4)(var5);
                    var1 = var3 != var2;
                case 100:
                    var0 = var1;
                case 103:
                    return var0;
                case 105:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsReportToModEnabled = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun78894: for (var _fun78894_ip = 0;;) switch (_fun78894_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 != var2;
                    var4 = null;
                    if (!var2) {
                        _fun78894_ip = 39;
                        continue _fun78894
                    }
                case 18:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var3)(var0);
                case 39:
                    var2 = var1 == var4;
                    var0 = null;
                    if (var2) {
                        _fun78894_ip = 93;
                        continue _fun78894
                    }
                case 48:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.bind(var3)(var4);
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun78894_ip = 90;
                        continue _fun78894
                    }
                case 87:
                    var1 = var2;
                case 90:
                    var0 = var1;
                case 93:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useReportToModChannelId = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.isModeratorReportOrPostChannel;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useIsModeratorReportOrPostChannel = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.isModeratorReportPostChannel;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useIsModeratorReportPostChannel = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.messageReference;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 3;
        var3 = var3[var0];
        var0 = undefined;
        var7 = var5.bind(var0)(var3);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() { // Environment: var1
            _fun78898: for (var _fun78898_ip = 0;;) switch (_fun78898_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun78898_ip = 50;
                        continue _fun78898
                    }
                case 16:
                    var4 = _closure1_slot5;
                    var3 = var4.getMessage;
                    var1 = _closure2_slot0;
                    var2 = var1.channel_id;
                    var1 = var1.message_id;
                    var0 = var3.bind(var4)(var2, var1);
                case 50:
                    return var0;
            }
        };
        var5 = var6.bind(var7)(var5, var3);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var4;
        var1 = function() { // Environment: var1
            _fun78899: for (var _fun78899_ip = 0;;) switch (_fun78899_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var2 = null;
                    var0 = var2 == var0;
                    if (!var0) {
                        _fun78899_ip = 24;
                        continue _fun78899
                    }
                case 16:
                    var1 = _closure2_slot0;
                    var0 = var2 != var1;
                case 24:
                    if (!var0) {
                        _fun78899_ip = 102;
                        continue _fun78899
                    }
                case 27:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchMessages;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var3 = var4.channel_id;
                    var0.channelId = var3;
                    var3 = {};
                    var4 = var4.message_id;
                    var3.messageId = var4;
                    var0.jump = var3;
                    var3 = 10;
                    var0.limit = var3;
                    var0 = var1.bind(var2)(var0);
                case 102:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.useLoadReportedMessage = var3;
    var1 = function arg0() {
        _fun78900: for (var _fun78900_ip = 0;;) switch (_fun78900_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var4 = var1 == var2;
                var0 = undefined;
                var3 = undefined;
                if (var4) {
                    _fun78900_ip = 58;
                    continue _fun78900
                }
            case 16:
                var4 = var2.messageSnapshots;
                var2 = 0;
                var2 = var4[var2];
                var4 = var1 == var2;
                var3 = undefined;
                if (var4) {
                    _fun78900_ip = 58;
                    continue _fun78900
                }
            case 37:
                var2 = var2.moderatorReport;
                var4 = var1 == var2;
                var3 = undefined;
                if (var4) {
                    _fun78900_ip = 58;
                    continue _fun78900
                }
            case 52:
                var3 = var2.reported_user_id;
            case 58:
                if (!(var1 != var3)) {
                    _fun78900_ip = 96;
                    continue _fun78900
                }
            case 62:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.getUser;
                var1 = var1.bind(var2)(var3);
            case 96:
                return var0;
        }
    };
    var2.loadOriginalAuthorFromSnapshot = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 4251, 566, 4589, 4588, 5696, 6593, 7027, 2]);