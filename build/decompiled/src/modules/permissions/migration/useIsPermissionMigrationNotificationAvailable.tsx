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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/permissions/migration/useIsPermissionMigrationNotificationAvailable.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96641: for (var _fun96641_ip = 0;;) switch (_fun96641_ip) {
            case 0:
                var11 = arg0;
                var _closure2_slot0 = var11;
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
                var5 = var7.bind(var8)(var6, var5);
                var1 = var4[var1];
                var6 = var3.bind(var2)(var1);
                var3 = var6.useStateFromStores;
                var7 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    _fun96643: for (var _fun96643_ip = 0;;) switch (_fun96643_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun96643_ip = 50;
                                continue _fun96643
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
                var0 = var3.bind(var6)(var1, var0);
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var4 = var3.bind(var2)(var1);
                var3 = var4.useExperiment;
                var1 = {};
                var10 = null;
                var7 = var10 == var11;
                var6 = undefined;
                if (var7) {
                    _fun96641_ip = 143;
                    continue _fun96641
                }
            case 138:
                var6 = var11.id;
            case 143:
                var1.guildId = var6;
                var6 = 'useIsPermissionMigrationNotificationAvailable';
                var1.location = var6;
                var1 = var3.bind(var4)(var1);
                var1 = var1.enabled;
                var3 = var10 == var11;
                var4 = undefined;
                if (var3) {
                    _fun96641_ip = 202;
                    continue _fun96641
                }
            case 176:
                var7 = var11.features;
                var6 = var7.has;
                var3 = _closure1_slot6;
                var3 = var3.PIN_PERMISSION_MIGRATION_COMPLETE;
                var4 = var6.bind(var7)(var3);
            case 202:
                var3 = var10 != var4;
                if (!var3) {
                    _fun96641_ip = 212;
                    continue _fun96641
                }
            case 209:
                var3 = var4;
            case 212:
                var4 = var10 == var11;
                var6 = undefined;
                if (var4) {
                    _fun96641_ip = 247;
                    continue _fun96641
                }
            case 221:
                var8 = var11.features;
                var7 = var8.has;
                var4 = _closure1_slot6;
                var4 = var4.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
                var6 = var7.bind(var8)(var4);
            case 247:
                var4 = var10 != var6;
                if (!var4) {
                    _fun96641_ip = 257;
                    continue _fun96641
                }
            case 254:
                var4 = var6;
            case 257:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 5;
                var6 = var13[var6];
                var8 = var12.bind(var2)(var6);
                var7 = var8.useIsSingleUseGuildDismissibleContentDismissed;
                var6 = 6;
                var6 = var13[var6];
                var6 = var12.bind(var2)(var6);
                var6 = var6.DismissibleContent;
                var6 = var6.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION;
                var12 = var10 == var11;
                var2 = undefined;
                if (var12) {
                    _fun96641_ip = 321;
                    continue _fun96641
                }
            case 316:
                var2 = var11.id;
            case 321:
                if (!(var10 == var2)) {
                    _fun96641_ip = 329;
                    continue _fun96641
                }
            case 325:
                var2 = _closure1_slot5;
            case 329:
                var2 = var7.bind(var8)(var6, var2);
                if (!var0) {
                    _fun96641_ip = 341;
                    continue _fun96641
                }
            case 338:
                var0 = var5;
            case 341:
                if (!var0) {
                    _fun96641_ip = 356;
                    continue _fun96641
                }
            case 344:
                var3 = !var3;
                if (var3) {
                    _fun96641_ip = 353;
                    continue _fun96641
                }
            case 350:
                var3 = !var4;
            case 353:
                var0 = var3;
            case 356:
                if (!var0) {
                    _fun96641_ip = 362;
                    continue _fun96641
                }
            case 359:
                var0 = !var2;
            case 362:
                if (!var0) {
                    _fun96641_ip = 368;
                    continue _fun96641
                }
            case 365:
                var0 = !var1;
            case 368:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1674, 3091, 660, 566, 6537, 1360, 1358, 2]);