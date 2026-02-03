// modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        _fun69905: for (var _fun69905_ip = 0;;) switch (_fun69905_ip) {
            case 0:
                var4 = arg0;
                var2 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun69905_ip = 19;
                    continue _fun69905
                }
            case 12:
                var2 = _closure1_slot2;
            case 19:
                var3 = var2.can;
                var0 = _closure1_slot5;
                var0 = var0.BAN_MEMBERS;
                var0 = var3.bind(var2)(var0, var4);
                var3 = var2;
                if (var0) {
                    _fun69905_ip = 72;
                    continue _fun69905
                }
            case 50:
                var5 = var3.can;
                var2 = _closure1_slot5;
                var2 = var2.KICK_MEMBERS;
                var0 = var5.bind(var3)(var2, var4);
            case 72:
                if (var0) {
                    _fun69905_ip = 97;
                    continue _fun69905
                }
            case 75:
                var5 = var3.can;
                var2 = _closure1_slot5;
                var2 = var2.MODERATE_MEMBERS;
                var0 = var5.bind(var3)(var2, var4);
            case 97:
                if (var0) {
                    _fun69905_ip = 122;
                    continue _fun69905
                }
            case 100:
                var2 = var3.can;
                var1 = _closure1_slot5;
                var1 = var1.MANAGE_GUILD;
                var0 = var2.bind(var3)(var1, var4);
            case 122:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var3 = function arg0() {
        _fun69906: for (var _fun69906_ip = 0;;) switch (_fun69906_ip) {
            case 0:
                var3 = arguments[1];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun69906_ip = 16;
                    continue _fun69906
                }
            case 9:
                var3 = _closure1_slot2;
            case 16:
                var2 = var3.can;
                var0 = _closure1_slot5;
                var1 = var0.MANAGE_GUILD;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var8;
    var5 = var5.Permissions;
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.canReportRaid = var4;
    var4 = function arg0() {
        _fun69907: for (var _fun69907_ip = 0;;) switch (_fun69907_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var1 = var6[var3];
                var5 = undefined;
                var11 = var4.bind(var5)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot2;
                var9 = new Array(1);
                var9[0] = var1;
                var7 = new Array(1);
                var7[0] = var8;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot2;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var10.bind(var11)(var9, var1, var7);
                var3 = var6[var3];
                var7 = var4.bind(var5)(var3);
                var6 = var7.useStateFromStores;
                var3 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(1);
                var3[0] = var8;
                var0 = function() { // Environment: var0
                    _fun69909: for (var _fun69909_ip = 0;;) switch (_fun69909_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun69909_ip = 43;
                                continue _fun69909
                            }
                        case 16:
                            var3 = _closure1_slot3;
                            var2 = var3.getGuildIncident;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4, var0, var3);
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun69907_ip = 161;
                    continue _fun69907
                }
            case 130:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 4;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.hasDetectedActivity;
                var0 = var2.bind(var3)(var4);
            case 161:
                var0 = !var0;
                if (!var0) {
                    _fun69907_ip = 170;
                    continue _fun69907
                }
            case 167:
                var0 = var1;
            case 170:
                return var0;
        }
    };
    var2.useCanReportRaid = var4;
    var2.canEnableRaidAlerts = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = _closure1_slot2;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanEnableRaidAlerts = var3;
    var1 = function arg0() {
        _fun69912: for (var _fun69912_ip = 0;;) switch (_fun69912_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var3 = var5[var2];
                var2 = undefined;
                var9 = var4.bind(var2)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot2;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = new Array(1);
                var3[0] = var6;
                var1 = function() { // Environment: var1
                    _fun69913: for (var _fun69913_ip = 0;;) switch (_fun69913_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot2;
                            var1 = undefined;
                            if (!(var2 === var1)) {
                                _fun69913_ip = 24;
                                continue _fun69913
                            }
                        case 20:
                            var2 = _closure1_slot2;
                        case 24:
                            var1 = var2.can;
                            var0 = _closure1_slot5;
                            var0 = var0.MANAGE_GUILD;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var7, var1, var3);
                var3 = 5;
                var3 = var5[var3];
                var4 = var4.bind(var2)(var3);
                var3 = var4.useIsMentionRaidExperimentEnabled;
                var5 = null;
                var7 = var5 == var6;
                if (var7) {
                    _fun69912_ip = 105;
                    continue _fun69912
                }
            case 100:
                var2 = var6.id;
            case 105:
                if (!(var5 == var2)) {
                    _fun69912_ip = 113;
                    continue _fun69912
                }
            case 109:
                var2 = _closure1_slot4;
            case 113:
                var0 = false;
                var0 = var3.bind(var4)(var2, var0);
                if (!var0) {
                    _fun69912_ip = 127;
                    continue _fun69912
                }
            case 124:
                var0 = var1;
            case 127:
                return var0;
        }
    };
    var2.useShowMentionRaidLimitUpsell = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3091, 8730, 660, 566, 6729, 8744, 2]);