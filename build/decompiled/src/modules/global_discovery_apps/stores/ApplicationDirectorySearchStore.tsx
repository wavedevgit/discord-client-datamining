// modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun107799: for (var _fun107799_ip = 0;;) switch (_fun107799_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun107799_ip = 76;
                continue _fun107799;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: getCacheKey, environment: var4
        _fun107802: for (var _fun107802_ip = 0;;) switch (_fun107802_ip) {
            case 0:
                var0 = arg0;
                var22 = var0.query;
                var21 = var0.guildId;
                var20 = var0.page;
                var19 = var0.pageSize;
                var18 = var0.categoryId;
                var17 = var0.integrationType;
                var16 = var0.minUserInstallCommandCount;
                var15 = var0.excludeAppsWithCustomInstallUrl;
                var14 = var0.excludeNonEmbeddedApps;
                var13 = var0.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
                var12 = var0.source;
                var2 = undefined;
                if (!(var12 === var2)) {
                    _fun107802_ip = 108;
                    continue _fun107802
                }
            case 73:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 5;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.SearchAppsRequestSource;
                var12 = var0.APP_DIRECTORY;
            case 108:
                var0 = global;
                var0 = var0.HermesInternal;
                var11 = var0.concat;
                var44 = "query:'";
                var42 = "' guildId:";
                var40 = ' page:';
                var38 = ' pageSize:';
                var36 = ' categoryId:';
                var34 = ' integrationType:';
                var32 = ' minUserInstallCommandCount:';
                var30 = ' excludeAppsWithCustomInstallUrl:';
                var28 = ' excludeNonEmbeddedApps:';
                var26 = ' excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:';
                var24 = ' source:';
                var43 = var22;
                var41 = var21;
                var39 = var20;
                var37 = var19;
                var35 = var18;
                var33 = var17;
                var31 = var16;
                var29 = var15;
                var27 = var14;
                var25 = var13;
                var23 = var12;
                var0 = var44[var11](var43, var42, var41, var40, var39, var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var10 = 0;
    var1 = var6[var10];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var9 = 1;
    var1 = var6[var9];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 2;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var1.FETCHING = var10;
    var3 = 'FETCHING';
    var1[var10] = var3;
    var1.FETCHED = var9;
    var3 = 'FETCHED';
    var1[var9] = var3;
    var1.ERROR = var8;
    var3 = 'ERROR';
    var1[var8] = var3;
    var _closure1_slot7 = var1;
    var3 = 6;
    var3 = var6[var3];
    var9 = var7.bind(var0)(var3);
    var3 = {};
    var8 = 20;
    var3.max = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var14 = var8;
    var13 = var3;
    var3 = new var14[var9](var13, var12);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot8 = var3;
    var3 = {};
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: ApplicationDirectorySearchStore, environment: var5
            _fun107804: for (var _fun107804_ip = 0;;) switch (_fun107804_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun107804_ip = 69;
                        continue _fun107804
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun107804_ip = 105;
                    continue _fun107804;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'getSearchResults';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var13 = var0.query;
            var12 = var0.guildId;
            var11 = var0.page;
            var10 = var0.pageSize;
            var9 = var0.categoryId;
            var8 = var0.integrationType;
            var7 = var0.minUserInstallCommandCount;
            var6 = var0.excludeAppsWithCustomInstallUrl;
            var5 = var0.excludeNonEmbeddedApps;
            var4 = var0.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
            var1 = var0.source;
            var3 = _closure1_slot11;
            var2 = {};
            var2.query = var13;
            var2.guildId = var12;
            var2.page = var11;
            var2.pageSize = var10;
            var2.categoryId = var9;
            var2.integrationType = var8;
            var2.minUserInstallCommandCount = var7;
            var2.excludeAppsWithCustomInstallUrl = var6;
            var2.excludeNonEmbeddedApps = var5;
            var2.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var4;
            var2.source = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = _closure1_slot8;
            var0 = var1.get;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFetchState';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var13 = var0.query;
            var12 = var0.guildId;
            var11 = var0.page;
            var10 = var0.pageSize;
            var9 = var0.categoryId;
            var8 = var0.integrationType;
            var7 = var0.minUserInstallCommandCount;
            var6 = var0.excludeAppsWithCustomInstallUrl;
            var5 = var0.excludeNonEmbeddedApps;
            var4 = var0.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
            var1 = var0.source;
            var3 = _closure1_slot11;
            var2 = {};
            var2.query = var13;
            var2.guildId = var12;
            var2.page = var11;
            var2.pageSize = var10;
            var2.categoryId = var9;
            var2.integrationType = var8;
            var2.minUserInstallCommandCount = var7;
            var2.excludeAppsWithCustomInstallUrl = var6;
            var2.excludeNonEmbeddedApps = var5;
            var2.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var4;
            var2.source = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var0 = _closure1_slot9;
            var0 = var0[var1];
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'ApplicationDirectorySearchStore';
    var8.displayName = var3;
    var3 = 8;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function(arg0) { // Original name: handleSearchFetch, environment: var4
        var0 = arg0;
        var13 = var0.query;
        var12 = var0.guildId;
        var11 = var0.page;
        var10 = var0.pageSize;
        var9 = var0.categoryId;
        var8 = var0.integrationType;
        var7 = var0.minUserInstallCommandCount;
        var6 = var0.excludeAppsWithCustomInstallUrl;
        var5 = var0.excludeNonEmbeddedApps;
        var4 = var0.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
        var0 = var0.source;
        var3 = _closure1_slot11;
        var1 = {};
        var1.query = var13;
        var1.guildId = var12;
        var1.page = var11;
        var1.pageSize = var10;
        var1.categoryId = var9;
        var1.integrationType = var8;
        var1.minUserInstallCommandCount = var7;
        var1.excludeAppsWithCustomInstallUrl = var6;
        var1.excludeNonEmbeddedApps = var5;
        var1.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var4;
        var1.source = var0;
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var1 = {};
        var14 = _closure1_slot9;
        var15 = var1;
        var3 = copyDataProperties(var15, var14);
        var3 = _closure1_slot7;
        var3 = var3.FETCHING;
        var1[var4] = var3;
        _closure1_slot9 = var1;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_SEARCH = var9;
    var9 = function(arg0) { // Original name: handleSearchFetchSuccess, environment: var4
        var0 = arg0;
        var14 = var0.query;
        var13 = var0.guildId;
        var12 = var0.page;
        var11 = var0.pageSize;
        var10 = var0.categoryId;
        var15 = var0.result;
        var9 = var0.integrationType;
        var8 = var0.minUserInstallCommandCount;
        var7 = var0.excludeAppsWithCustomInstallUrl;
        var5 = var0.excludeNonEmbeddedApps;
        var4 = var0.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
        var0 = var0.source;
        var3 = _closure1_slot11;
        var1 = {};
        var1.query = var14;
        var1.guildId = var13;
        var1.page = var12;
        var1.pageSize = var11;
        var1.categoryId = var10;
        var1.integrationType = var9;
        var1.minUserInstallCommandCount = var8;
        var1.excludeAppsWithCustomInstallUrl = var7;
        var1.excludeNonEmbeddedApps = var5;
        var1.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var4;
        var1.source = var0;
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var5 = _closure1_slot8;
        var3 = var5.set;
        var1 = {};
        var7 = global;
        var8 = var7.Date;
        var7 = var8.now;
        var7 = var7.bind(var8)();
        var1.lastFetchTimeMs = var7;
        var16 = var1;
        var6 = copyDataProperties(var16, var15);
        var1 = var3.bind(var5)(var4, var1);
        var1 = {};
        var15 = _closure1_slot9;
        var16 = var1;
        var3 = copyDataProperties(var16, var15);
        var3 = _closure1_slot7;
        var3 = var3.FETCHED;
        var1[var4] = var3;
        _closure1_slot9 = var1;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS = var9;
    var4 = function(arg0) { // Original name: handleSearchFetchFailure, environment: var4
        var0 = arg0;
        var13 = var0.query;
        var12 = var0.guildId;
        var11 = var0.page;
        var10 = var0.pageSize;
        var9 = var0.categoryId;
        var8 = var0.integrationType;
        var7 = var0.minUserInstallCommandCount;
        var6 = var0.excludeAppsWithCustomInstallUrl;
        var5 = var0.excludeNonEmbeddedApps;
        var4 = var0.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
        var0 = var0.source;
        var3 = _closure1_slot11;
        var1 = {};
        var1.query = var13;
        var1.guildId = var12;
        var1.page = var11;
        var1.pageSize = var10;
        var1.categoryId = var9;
        var1.integrationType = var8;
        var1.minUserInstallCommandCount = var7;
        var1.excludeAppsWithCustomInstallUrl = var6;
        var1.excludeNonEmbeddedApps = var5;
        var1.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var4;
        var1.source = var0;
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var1 = {};
        var14 = _closure1_slot9;
        var15 = var1;
        var3 = copyDataProperties(var15, var14);
        var3 = _closure1_slot7;
        var3 = var3.ERROR;
        var1[var4] = var3;
        _closure1_slot9 = var1;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 13875, 1386, 566, 806, 2]);