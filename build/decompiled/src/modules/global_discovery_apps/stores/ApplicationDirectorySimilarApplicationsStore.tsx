// modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun107501: for (var _fun107501_ip = 0;;) switch (_fun107501_ip) {
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
                _fun107501_ip = 76;
                continue _fun107501;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var11 = var0.applicationId;
        var9 = var0.guildId;
        var7 = var0.page;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var12 = 'applicationId:';
        var10 = ' guildId:';
        var8 = ' page:';
        var0 = var12[var3](var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var10 = 0;
    var1 = var5[var10];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var9 = 1;
    var1 = var5[var9];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var8 = 2;
    var1 = var5[var8];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var7 = 3;
    var1 = var5[var7];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var1.NOT_FETCHED = var10;
    var3 = 'NOT_FETCHED';
    var1[var10] = var3;
    var1.FETCHING = var9;
    var3 = 'FETCHING';
    var1[var9] = var3;
    var1.FETCHED = var8;
    var3 = 'FETCHED';
    var1[var8] = var3;
    var1.ERROR = var7;
    var3 = 'ERROR';
    var1[var7] = var3;
    var _closure1_slot5 = var1;
    var3 = 5;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = {};
    var7 = 20;
    var3.max = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var14 = var7;
    var13 = var3;
    var3 = new var14[var8](var13, var12);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot6 = var3;
    var3 = {};
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun107506: for (var _fun107506_ip = 0;;) switch (_fun107506_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun107506_ip = 69;
                        continue _fun107506
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun107506_ip = 105;
                    continue _fun107506;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getSimilarApplications';
        var4.key = var0;
        var0 = function arg0() {
            _fun107507: for (var _fun107507_ip = 0;;) switch (_fun107507_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.applicationId;
                    var4 = var0.guildId;
                    var1 = var0.page;
                    var0 = null;
                    if (!(var0 == var5)) {
                        _fun107507_ip = 29;
                        continue _fun107507
                    }
                case 25:
                    var0 = undefined;
                    return var0;
                case 29:
                    var3 = _closure1_slot9;
                    var2 = {};
                    var2.applicationId = var5;
                    var2.guildId = var4;
                    var2.page = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = _closure1_slot6;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFetchState';
        var4.key = var6;
        var5 = function arg0() {
            _fun107508: for (var _fun107508_ip = 0;;) switch (_fun107508_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.applicationId;
                    var4 = var0.guildId;
                    var1 = var0.page;
                    var0 = null;
                    if (!(var0 == var5)) {
                        _fun107508_ip = 29;
                        continue _fun107508
                    }
                case 25:
                    var0 = undefined;
                    return var0;
                case 29:
                    var3 = _closure1_slot9;
                    var2 = {};
                    var2.applicationId = var5;
                    var2.guildId = var4;
                    var2.page = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var0 = _closure1_slot7;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'ApplicationDirectorySimilarApplicationsStore';
    var7.displayName = var3;
    var3 = 7;
    var3 = var5[var3];
    var13 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function arg0() {
        var0 = arg0;
        var5 = var0.applicationId;
        var4 = var0.guildId;
        var0 = var0.page;
        var3 = _closure1_slot9;
        var1 = {};
        var1.applicationId = var5;
        var1.guildId = var4;
        var1.page = var0;
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var1 = {};
        var6 = _closure1_slot7;
        var7 = var1;
        var3 = copyDataProperties(var7, var6);
        var3 = _closure1_slot5;
        var3 = var3.FETCHING;
        var1[var4] = var3;
        _closure1_slot7 = var1;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS = var8;
    var8 = function arg0() {
        var1 = arg0;
        var4 = var1.applicationId;
        var0 = var1.guildId;
        var9 = var1.similarApplications;
        var8 = var1.loadId;
        var7 = var1.page;
        var6 = var1.totalPages;
        var3 = _closure1_slot9;
        var1 = {};
        var1.applicationId = var4;
        var1.guildId = var0;
        var1.page = var7;
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var5 = _closure1_slot6;
        var3 = var5.set;
        var1 = {};
        var10 = global;
        var11 = var10.Date;
        var10 = var11.now;
        var10 = var10.bind(var11)();
        var1.lastFetchTimeMs = var10;
        var1.applications = var9;
        var1.loadId = var8;
        var1.page = var7;
        var1.totalPages = var6;
        var1 = var3.bind(var5)(var4, var1);
        var1 = {};
        var12 = _closure1_slot7;
        var13 = var1;
        var3 = copyDataProperties(var13, var12);
        var3 = _closure1_slot5;
        var3 = var3.FETCHED;
        var1[var4] = var3;
        _closure1_slot7 = var1;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS = var8;
    var4 = function arg0() {
        var0 = arg0;
        var5 = var0.applicationId;
        var4 = var0.guildId;
        var0 = var0.page;
        var3 = _closure1_slot9;
        var1 = {};
        var1.applicationId = var5;
        var1.guildId = var4;
        var1.page = var0;
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var1 = {};
        var6 = _closure1_slot7;
        var7 = var1;
        var3 = copyDataProperties(var7, var6);
        var3 = _closure1_slot5;
        var3 = var3.ERROR;
        var1[var4] = var3;
        _closure1_slot7 = var1;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var7](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1386, 566, 806, 2]);