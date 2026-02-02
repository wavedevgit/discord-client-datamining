// modules/user_settings/MFAUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot5 = var6;
    var6 = var3.UserFlags;
    var _closure1_slot6 = var6;
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/MFAUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun81110: for (var _fun81110_ip = 0;;) switch (_fun81110_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.hasAnyStaffLevel;
                var1 = var1.bind(var0)();
                if (var1) {
                    _fun81110_ip = 119;
                    continue _fun81110
                }
            case 16:
                var3 = var0.hasFlag;
                var2 = _closure1_slot6;
                var2 = var2.PARTNER;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun81110_ip = 119;
                    continue _fun81110
                }
            case 43:
                var2 = var0.email;
                var0 = null;
                var2 = var0 == var2;
                if (!var2) {
                    _fun81110_ip = 117;
                    continue _fun81110
                }
            case 58:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.LfCBZG;
                var0 = var2.bind(var3)(var1);
            case 117:
                _fun81110_ip = 181;
                continue _fun81110;
            case 119:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Sq6Q1u;
                var0 = var2.bind(var3)(var1);
            case 181:
                return var0;
        }
    };
    var2.getSMSBackupDisabledMessage = var3;
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(3);
        var1[0] = var4;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = _closure1_slot4;
        var1[2] = var0;
        var0 = function() { // Environment: var0
            _fun81112: for (var _fun81112_ip = 0;;) switch (_fun81112_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var0 = var2.getCurrentUser;
                    var3 = var0.bind(var2)();
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun81112_ip = 35;
                        continue _fun81112
                    }
                case 22:
                    var2 = var3.hasAnyStaffLevel;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun81112_ip = 135;
                        continue _fun81112
                    }
                case 35:
                    var3 = _closure1_slot2;
                    var2 = var3.getGuildsArray;
                    var4 = var2.bind(var3)();
                    var3 = var4.some;
                    var2 = function(arg0) { // Environment: var2
                        _fun81113: for (var _fun81113_ip = 0;;) switch (_fun81113_ip) {
                            case 0:
                                var4 = arg0;
                                var3 = var4.features;
                                var2 = var3.has;
                                var0 = _closure1_slot5;
                                var0 = var0.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                                var0 = var2.bind(var3)(var0);
                                if (!var0) {
                                    _fun81113_ip = 61;
                                    continue _fun81113
                                }
                            case 35:
                                var3 = _closure1_slot3;
                                var2 = var3.can;
                                var1 = _closure1_slot7;
                                var1 = var1.ADMINISTRATOR;
                                var0 = var2.bind(var3)(var1, var4);
                            case 61:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var0 = null;
                    if (!var2) {
                        _fun81112_ip = 133;
                        continue _fun81112
                    }
                case 74:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 4;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.HC8uSZ;
                    var0 = var3.bind(var4)(var2);
                case 133:
                    _fun81112_ip = 194;
                    continue _fun81112;
                case 135:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 4;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1["3iKih7"];
                    var0 = var2.bind(var3)(var1);
                case 194:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.use2FARemoveDisableReason = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3052, 1613, 660, 1234, 632, 2]);