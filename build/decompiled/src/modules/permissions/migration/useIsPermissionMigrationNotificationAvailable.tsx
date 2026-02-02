// modules/permissions/migration/useIsPermissionMigrationNotificationAvailable.tsx
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
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot6 = var6;
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/permissions/migration/useIsPermissionMigrationNotificationAvailable.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96589: for (var _fun96589_ip = 0;;) switch (_fun96589_ip) {
            case 0:
                var12 = arg0;
                var _closure2_slot0 = var12;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var5 = var4[var1];
                var2 = undefined;
                var8 = var3.bind(var2)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var3 = _closure1_slot4;
                    var2 = var3.can;
                    var0 = _closure1_slot7;
                    var1 = var0.ADMINISTRATOR;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var7.bind(var8)(var6, var5);
                var1 = var4[var1];
                var5 = var3.bind(var2)(var1);
                var3 = var5.useStateFromStores;
                var7 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    _fun96591: for (var _fun96591_ip = 0;;) switch (_fun96591_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun96591_ip = 50;
                                continue _fun96591
                            }
                        case 16:
                            var3 = _closure1_slot3;
                            var2 = var3.getNumRoles;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var2 = var2.bind(var3)(var1);
                            var1 = 1;
                            var0 = var2 > var1;
                        case 50:
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var1, var0);
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var4 = var3.bind(var2)(var1);
                var3 = var4.useExperiment;
                var1 = {};
                var11 = null;
                var7 = var11 == var12;
                var5 = undefined;
                if (var7) {
                    _fun96589_ip = 143;
                    continue _fun96589
                }
            case 138:
                var5 = var12.id;
            case 143:
                var1.guildId = var5;
                var7 = 'useIsPermissionMigrationNotificationAvailable';
                var1.location = var7;
                var1 = var3.bind(var4)(var1);
                var1 = var1.enabled;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var5 = var4.bind(var2)(var3);
                var4 = var5.useExperiment;
                var3 = {};
                var9 = var11 == var12;
                var8 = undefined;
                if (var9) {
                    _fun96589_ip = 209;
                    continue _fun96589
                }
            case 204:
                var8 = var12.id;
            case 209:
                var3.guildId = var8;
                var3.location = var7;
                var3 = var4.bind(var5)(var3);
                var5 = var3.enabled;
                var3 = var11 == var12;
                var4 = undefined;
                if (var3) {
                    _fun96589_ip = 262;
                    continue _fun96589
                }
            case 236:
                var8 = var12.features;
                var7 = var8.has;
                var3 = _closure1_slot6;
                var3 = var3.PIN_PERMISSION_MIGRATION_COMPLETE;
                var4 = var7.bind(var8)(var3);
            case 262:
                var3 = var11 != var4;
                if (!var3) {
                    _fun96589_ip = 272;
                    continue _fun96589
                }
            case 269:
                var3 = var4;
            case 272:
                var4 = var11 == var12;
                var7 = undefined;
                if (var4) {
                    _fun96589_ip = 307;
                    continue _fun96589
                }
            case 281:
                var9 = var12.features;
                var8 = var9.has;
                var4 = _closure1_slot6;
                var4 = var4.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
                var7 = var8.bind(var9)(var4);
            case 307:
                var4 = var11 != var7;
                if (!var4) {
                    _fun96589_ip = 317;
                    continue _fun96589
                }
            case 314:
                var4 = var7;
            case 317:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 6;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.DismissibleContent;
                if (var5) {
                    _fun96589_ip = 354;
                    continue _fun96589
                }
            case 346:
                var9 = var7.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION;
                _fun96589_ip = 360;
                continue _fun96589;
            case 354:
                var9 = var7.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION;
            case 360:
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 7;
                var7 = var13[var7];
                var8 = var8.bind(var2)(var7);
                var7 = var8.useIsSingleUseGuildDismissibleContentDismissed;
                var13 = var11 == var12;
                var2 = undefined;
                if (var13) {
                    _fun96589_ip = 400;
                    continue _fun96589
                }
            case 395:
                var2 = var12.id;
            case 400:
                if (!(var11 == var2)) {
                    _fun96589_ip = 408;
                    continue _fun96589
                }
            case 404:
                var2 = _closure1_slot5;
            case 408:
                var2 = var7.bind(var8)(var9, var2);
                if (!var0) {
                    _fun96589_ip = 420;
                    continue _fun96589
                }
            case 417:
                var0 = var6;
            case 420:
                if (!var0) {
                    _fun96589_ip = 444;
                    continue _fun96589
                }
            case 423:
                var3 = !var3;
                if (var3) {
                    _fun96589_ip = 441;
                    continue _fun96589
                }
            case 429:
                var4 = !var4;
                if (!var4) {
                    _fun96589_ip = 438;
                    continue _fun96589
                }
            case 435:
                var4 = var5;
            case 438:
                var3 = var4;
            case 441:
                var0 = var3;
            case 444:
                if (!var0) {
                    _fun96589_ip = 450;
                    continue _fun96589
                }
            case 447:
                var0 = !var2;
            case 450:
                if (!var0) {
                    _fun96589_ip = 456;
                    continue _fun96589
                }
            case 453:
                var0 = !var1;
            case 456:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1665, 3052, 660, 566, 6501, 12546, 1358, 1360, 2]);