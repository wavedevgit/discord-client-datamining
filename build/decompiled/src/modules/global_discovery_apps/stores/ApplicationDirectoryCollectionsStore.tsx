// modules/global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun107490: for (var _fun107490_ip = 0;;) switch (_fun107490_ip) {
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
                _fun107490_ip = 76;
                continue _fun107490;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.surface;
        var3 = var0.activeState;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'surface:';
        var0 = ' activeState:';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var9 = 0;
    var1 = var5[var9];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var8 = 1;
    var1 = var5[var8];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var7 = 2;
    var1 = var5[var7];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var1.FETCHING = var9;
    var3 = 'FETCHING';
    var1[var9] = var3;
    var1.FETCHED = var8;
    var3 = 'FETCHED';
    var1[var8] = var3;
    var1.ERROR = var7;
    var3 = 'ERROR';
    var1[var7] = var3;
    var _closure1_slot7 = var1;
    var3 = new Array(0);
    var _closure1_slot8 = var3;
    var3 = {};
    var _closure1_slot9 = var3;
    var3 = {};
    var _closure1_slot10 = var3;
    var3 = {};
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun107495: for (var _fun107495_ip = 0;;) switch (_fun107495_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun107495_ip = 69;
                        continue _fun107495
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun107495_ip = 105;
                    continue _fun107495;
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
        var0 = 'getLastFetchTimeMs';
        var4.key = var0;
        var0 = function arg0() {
            var0 = arg0;
            var4 = var0.surface;
            var0 = var0.activeState;
            var1 = _closure1_slot11;
            var3 = _closure1_slot13;
            var2 = {};
            var2.surface = var4;
            var2.activeState = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var1[var0];
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFetchState';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var4 = var0.surface;
            var0 = var0.activeState;
            var1 = _closure1_slot10;
            var3 = _closure1_slot13;
            var2 = {};
            var2.surface = var4;
            var2.activeState = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCollections';
        var4.key = var6;
        var5 = function arg0() {
            _fun107498: for (var _fun107498_ip = 0;;) switch (_fun107498_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.surface;
                    var0 = var0.activeState;
                    var2 = _closure1_slot9;
                    var4 = _closure1_slot13;
                    var3 = {};
                    var3.surface = var5;
                    var3.activeState = var0;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun107498_ip = 59;
                        continue _fun107498
                    }
                case 55:
                    var0 = _closure1_slot8;
                case 59:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 7;
    var3 = var5[var3];
    var12 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function arg0() {
        var0 = arg0;
        var5 = var0.surface;
        var0 = var0.activeState;
        var2 = {};
        var6 = _closure1_slot10;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var4 = _closure1_slot13;
        var3 = {};
        var3.surface = var5;
        var3.activeState = var0;
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = _closure1_slot7;
        var3 = var3.FETCHING;
        var2[var4] = var3;
        _closure1_slot10 = var2;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_COLLECTIONS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var5 = var0.collections;
        var4 = var0.surface;
        var0 = var0.activeState;
        var3 = _closure1_slot13;
        var1 = {};
        var1.surface = var4;
        var1.activeState = var0;
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var3 = var5.map;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var4 = var0.application_directory_collection_items;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.sortBy;
            var1 = ['position', 'id'];
            var1 = var2.bind(var3)(var4, var1);
            var0.application_directory_collection_items = var1;
            return var0;
        };
        var6 = var3.bind(var5)(var1);
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 5;
        var1 = var5[var1];
        var5 = var3.bind(var0)(var1);
        var3 = var5.sortBy;
        var1 = ['position', 'id'];
        var3 = var3.bind(var5)(var6, var1);
        var1 = {};
        var7 = _closure1_slot9;
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var1[var4] = var3;
        _closure1_slot9 = var1;
        var1 = {};
        var7 = _closure1_slot10;
        var8 = var1;
        var3 = copyDataProperties(var8, var7);
        var3 = _closure1_slot7;
        var3 = var3.FETCHED;
        var1[var4] = var3;
        _closure1_slot10 = var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var3 = var1.bind(var3)();
        var1 = {};
        var7 = _closure1_slot11;
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var1[var4] = var3;
        _closure1_slot11 = var1;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS = var8;
    var4 = function arg0() {
        var0 = arg0;
        var5 = var0.surface;
        var0 = var0.activeState;
        var2 = {};
        var6 = _closure1_slot10;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var4 = _closure1_slot13;
        var3 = {};
        var3.surface = var5;
        var3.activeState = var0;
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = _closure1_slot7;
        var3 = var3.ERROR;
        var2[var4] = var3;
        _closure1_slot10 = var2;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var7](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 22, 566, 806, 2]);