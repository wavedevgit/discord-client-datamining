// modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun47632: for (var _fun47632_ip = 0;;) switch (_fun47632_ip) {
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
            case 70: // try_end0
                _fun47632_ip = 74;
                continue _fun47632;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
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
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = {};
    var1.FETCHING = var10;
    var7 = 'FETCHING';
    var1[var10] = var7;
    var1.FETCHED = var9;
    var7 = 'FETCHED';
    var1[var9] = var7;
    var1.ERROR = var8;
    var7 = 'ERROR';
    var1[var8] = var7;
    var _closure1_slot6 = var1;
    var7 = {};
    var _closure1_slot7 = var7;
    var7 = {};
    var _closure1_slot8 = var7;
    var3 = var3.Set;
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var14 = var7;
    var3 = new var14[var3](var13);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot9 = var3;
    var3 = {};
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun47636: for (var _fun47636_ip = 0;;) switch (_fun47636_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun47636_ip = 69;
                        continue _fun47636
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun47636_ip = 105;
                    continue _fun47636;
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
        var0 = 'getApplication';
        var4.key = var0;
        var0 = function arg0() {
            _fun47637: for (var _fun47637_ip = 0;;) switch (_fun47637_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun47637_ip = 13;
                        continue _fun47637
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot7;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getApplicationRecord';
        var4.key = var6;
        var6 = function arg0() {
            _fun47638: for (var _fun47638_ip = 0;;) switch (_fun47638_ip) {
                case 0:
                    var3 = arg0;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun47638_ip = 24;
                        continue _fun47638
                    }
                case 9:
                    var2 = _closure1_slot7;
                    var2 = var2[var3];
                    if (!(var1 == var2)) {
                        _fun47638_ip = 28;
                        continue _fun47638
                    }
                case 24:
                    var1 = undefined;
                    return var1;
                case 28:
                    var1 = _closure1_slot5;
                    var0 = var1.createFromServer;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getApplications';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getApplicationFetchState';
        var4.key = var6;
        var6 = function arg0() {
            _fun47640: for (var _fun47640_ip = 0;;) switch (_fun47640_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun47640_ip = 13;
                        continue _fun47640
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot8;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getApplicationFetchStates';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isInvalidApplication';
        var4.key = var6;
        var6 = function arg0() {
            _fun47642: for (var _fun47642_ip = 0;;) switch (_fun47642_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun47642_ip = 29;
                        continue _fun47642
                    }
                case 12:
                    var2 = _closure1_slot9;
                    var1 = var2.has;
                    var0 = var1.bind(var2)(var3);
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getInvalidApplicationIds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.getApplicationFetchState;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = _closure1_slot6;
            var0 = var0.FETCHING;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getApplicationLastFetchTime';
        var4.key = var6;
        var5 = function arg0() {
            _fun47645: for (var _fun47645_ip = 0;;) switch (_fun47645_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun47645_ip = 13;
                        continue _fun47645
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot10;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'ApplicationDirectoryApplicationsStore';
    var7.displayName = var3;
    var3 = 7;
    var3 = var5[var3];
    var13 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.applicationId;
        var1 = {};
        var4 = _closure1_slot8;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = _closure1_slot6;
        var2 = var2.FETCHING;
        var1[var3] = var2;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var3.APPLICATION_DIRECTORY_FETCH_APPLICATION = var8;
    var8 = function arg0() {
        _fun47647: for (var _fun47647_ip = 0;;) switch (_fun47647_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.application;
                var0 = {};
                var6 = _closure1_slot7;
                var7 = var0;
                var3 = copyDataProperties(var7, var6);
                var3 = var2.id;
                var0[var3] = var2;
                _closure1_slot7 = var0;
                var0 = {};
                var6 = _closure1_slot8;
                var7 = var0;
                var3 = copyDataProperties(var7, var6);
                var4 = var2.id;
                var3 = _closure1_slot6;
                var3 = var3.FETCHED;
                var0[var4] = var3;
                _closure1_slot8 = var0;
                var0 = global;
                var4 = var0.Date;
                var3 = var4.now;
                var5 = var3.bind(var4)();
                var3 = {};
                var6 = _closure1_slot10;
                var7 = var3;
                var4 = copyDataProperties(var7, var6);
                var4 = var2.id;
                var3[var4] = var5;
                _closure1_slot10 = var3;
                var5 = _closure1_slot9;
                var4 = var5.has;
                var3 = var2.id;
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun47647_ip = 194;
                    continue _fun47647
                }
            case 141:
                var4 = _closure1_slot9;
                var3 = var4.delete;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var3 = var0.Set;
                var7 = _closure1_slot9;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var0 = new var8[var3](var7, var6);
                var0 = var0 instanceof Object ? var0 : var2;
                _closure1_slot9 = var0;
            case 194:
                var0 = undefined;
                return var0;
        }
    };
    var3.APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS = var8;
    var4 = function arg0() {
        _fun47648: for (var _fun47648_ip = 0;;) switch (_fun47648_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationId;
                var0 = var0.isInvalidApplication;
                var2 = {};
                var5 = _closure1_slot8;
                var6 = var2;
                var4 = copyDataProperties(var6, var5);
                var4 = _closure1_slot6;
                var4 = var4.ERROR;
                var2[var3] = var4;
                _closure1_slot8 = var2;
                if (!var0) {
                    _fun47648_ip = 102;
                    continue _fun47648
                }
            case 52:
                var2 = _closure1_slot9;
                var0 = var2.add;
                var0 = var0.bind(var2)(var3);
                var0 = global;
                var3 = var0.Set;
                var6 = _closure1_slot9;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var2;
                var0 = new var7[var3](var6, var5);
                var0 = var0 instanceof Object ? var0 : var2;
                _closure1_slot9 = var0;
            case 102:
                var0 = undefined;
                return var0;
        }
    };
    var3.APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE = var4;
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
    var4 = 'modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3416, 566, 806, 2]);