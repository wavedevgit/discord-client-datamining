// modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun89888: for (var _fun89888_ip = 0;;) switch (_fun89888_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun89888_ip = 49;
                        continue _fun89888
                    }
                case 16:
                    var4 = _closure1_slot3;
                    var3 = var4.can;
                    var2 = _closure1_slot5;
                    var2 = var2.MANAGE_GUILD;
                    var1 = _closure2_slot0;
                    var0 = var3.bind(var4)(var2, var1);
                case 49:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot6 = var4;
    var3 = function arg0() {
        _fun89889: for (var _fun89889_ip = 0;;) switch (_fun89889_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var3 = var6.useStateFromStores;
                var7 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    _fun89890: for (var _fun89890_ip = 0;;) switch (_fun89890_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun89890_ip = 43;
                                continue _fun89890
                            }
                        case 16:
                            var3 = _closure1_slot2;
                            var2 = var3.getGuildIncident;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var3 = var3.bind(var6)(var2, var0);
                var2 = null;
                var6 = var2 == var5;
                var0 = undefined;
                if (var6) {
                    _fun89889_ip = 101;
                    continue _fun89889
                }
            case 75:
                var6 = var5.features;
                var5 = var6.has;
                var4 = _closure1_slot4;
                var4 = var4.INVITES_DISABLED;
                var0 = var5.bind(var6)(var4);
            case 101:
                if (var0) {
                    _fun89889_ip = 193;
                    continue _fun89889
                }
            case 104:
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun89889_ip = 119;
                    continue _fun89889
                }
            case 113:
                var1 = var3.invitesDisabledUntil;
            case 119:
                var1 = var2 != var1;
                if (!var1) {
                    _fun89889_ip = 190;
                    continue _fun89889
                }
            case 126:
                var2 = global;
                var5 = var2.Date;
                var9 = var3.invitesDisabledUntil;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = var4;
                var3 = new var10[var5](var9, var8);
                var3 = var3 instanceof Object ? var3 : var4;
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var4;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var4;
                var1 = var3 > var2;
            case 190:
                var0 = var1;
            case 193:
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
    var8 = var5.GuildFeatures;
    var _closure1_slot4 = var8;
    var5 = var5.Permissions;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.useInvitesDisabledPermission = var4;
    var2.useInvitesDisabled = var3;
    var1 = function arg0() {
        _fun89891: for (var _fun89891_ip = 0;;) switch (_fun89891_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot6;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                var1 = _closure1_slot7;
                var1 = var1.bind(var2)(var3);
                if (!var0) {
                    _fun89891_ip = 32;
                    continue _fun89891
                }
            case 29:
                var0 = var1;
            case 32:
                return var0;
        }
    };
    var2.useShouldShowInvitesDisabledNotif = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8730, 3091, 660, 566, 2]);