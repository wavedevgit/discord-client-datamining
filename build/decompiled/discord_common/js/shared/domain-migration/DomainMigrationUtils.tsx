// ../discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var4 = {};
    var5 = 0;
    var4.SKIP_MIGRATION = var5;
    var0 = 'SKIP_MIGRATION';
    var4[var5] = var0;
    var6 = 1;
    var4.SEND_DATA = var6;
    var0 = 'SEND_DATA';
    var4[var6] = var0;
    var3 = 2;
    var4.DATA_MIGRATED = var3;
    var0 = 'DATA_MIGRATED';
    var4[var3] = var0;
    var3 = 3;
    var4.DATA_MIGRATED_CONFIRMED = var3;
    var0 = 'DATA_MIGRATED_CONFIRMED';
    var4[var3] = var0;
    var3 = {};
    var3.MIGRATION_SOURCE_DOMAIN = var5;
    var0 = 'MIGRATION_SOURCE_DOMAIN';
    var3[var5] = var0;
    var3.MIGRATION_DESTINATION_DOMAIN = var6;
    var0 = 'MIGRATION_DESTINATION_DOMAIN';
    var3[var6] = var0;
    var _closure1_slot0 = var3;
    var0 = dependencyMap;
    var6 = var0[var5];
    var5 = require;
    var0 = undefined;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.DomainMigrationEventType = var4;
    var2.DomainMigrationMessageFrom = var3;
    var3 = 'domainMigrationSuccess';
    var2.DOMAIN_MIGRATION_SUCCESS_KEY = var3;
    var3 = 'domainMigrationFailed';
    var2.DOMAIN_MIGRATION_FAILED_KEY = var3;
    var3 = function arg0, arg1, arg2() {
        _fun60475: for (var _fun60475_ip = 0;;) switch (_fun60475_ip) {
            case 0:
                var3 = arg1;
                var0 = _closure1_slot0;
                var1 = var0.MIGRATION_SOURCE_DOMAIN;
                var0 = arg2;
                if (!(var0 !== var1)) {
                    _fun60475_ip = 45;
                    continue _fun60475
                }
            case 23:
                var0 = global;
                var0 = var0.window;
                var0 = var0.GLOBAL_ENV;
                var2 = var0.MIGRATION_SOURCE_ORIGIN;
                _fun60475_ip = 65;
                continue _fun60475;
            case 45:
                var0 = global;
                var0 = var0.window;
                var0 = var0.GLOBAL_ENV;
                var2 = var0.MIGRATION_DESTINATION_ORIGIN;
            case 65:
                var1 = var3.postMessage;
                var0 = {};
                var4 = arg0;
                var0.domainMigrationEvent = var4;
                var0 = var1.bind(var3)(var0, var2);
                var0 = undefined;
                return var0;
        }
    };
    var2.sendPostMessage = var3;
    var1 = function arg0, arg1() {
        _fun60476: for (var _fun60476_ip = 0;;) switch (_fun60476_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot0;
                var1 = var0.MIGRATION_SOURCE_DOMAIN;
                var0 = arg1;
                if (!(var0 !== var1)) {
                    _fun60476_ip = 45;
                    continue _fun60476
                }
            case 23:
                var0 = global;
                var0 = var0.window;
                var0 = var0.GLOBAL_ENV;
                var1 = var0.MIGRATION_SOURCE_ORIGIN;
                _fun60476_ip = 65;
                continue _fun60476;
            case 45:
                var0 = global;
                var0 = var0.window;
                var0 = var0.GLOBAL_ENV;
                var1 = var0.MIGRATION_DESTINATION_ORIGIN;
            case 65:
                var0 = var2.origin;
                var3 = var0 === var1;
                if (!var3) {
                    _fun60476_ip = 95;
                    continue _fun60476
                }
            case 78:
                var0 = var2.data;
                var1 = var0.domainMigrationEvent;
                var0 = null;
                var3 = var0 != var1;
            case 95:
                var1 = null;
                var0 = null;
                if (!var3) {
                    _fun60476_ip = 125;
                    continue _fun60476
                }
            case 102:
                var2 = var2.data;
                var3 = var1 == var2;
                var1 = undefined;
                if (var3) {
                    _fun60476_ip = 122;
                    continue _fun60476
                }
            case 116:
                var1 = var2.domainMigrationEvent;
            case 122:
                var0 = var1;
            case 125:
                return var0;
        }
    };
    var2.extractMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);