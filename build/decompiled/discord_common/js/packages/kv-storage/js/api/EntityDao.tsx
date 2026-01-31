// ../discord_common/js/packages/kv-storage/js/api/EntityDao.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = function() { // Environment: var4
        var4 = function(arg0, arg1, arg2) { // Original name: EntityDao, environment: var1
            _fun18580: for (var _fun18580_ip = 0;;) switch (_fun18580_ip) {
                case 0:
                    var1 = arg0;
                    var7 = arguments[3];
                    var2 = this;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun18580_ip = 17;
                        continue _fun18580
                    }
                case 15:
                    var7 = true;
                case 17:
                    var5 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var2.originalPrefix = var1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 2;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var6 = var3.Table;
                    var5 = new Array(1);
                    var5[0] = var1;
                    var1 = var6.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = arg1;
                    var9 = arg2;
                    var12 = var3;
                    var11 = var5;
                    var8 = var7;
                    var1 = new var12[var6](var11, var10, var9, var8, var7);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.table = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'prefix';
        var0.key = var2;
        var2 = function() { // Original name: get, environment: var1
            var0 = this;
            var0 = var0.table;
            var0 = var0.prefix;
            return var0;
        };
        var0.get = var2;
        var2 = new Array(17);
        var2[0] = var0;
        var0 = {};
        var5 = 'withoutLogging';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var1
            var0 = this;
            var5 = _closure2_slot0;
            var9 = var0.originalPrefix;
            var1 = var0.table;
            var8 = var1.tableId;
            var0 = var0.table;
            var7 = var0.database;
            var0 = var5.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var5
                }
            });
            var6 = false;
            var10 = var1;
            var0 = new var10[var5](var9, var8, var7, var6, var5);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            var0 = this;
            var2 = var0.table;
            var1 = var2.get;
            var0 = new Array(1);
            var3 = arg0;
            var0[0] = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'getMany';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            var0 = this;
            var3 = var0.table;
            var2 = var3.getMany;
            var1 = new Array(0);
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'getRange';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var1
            var0 = this;
            var4 = var0.table;
            var3 = var4.getRange;
            var2 = new Array(1);
            var0 = arg0;
            var2[0] = var0;
            var1 = new Array(1);
            var0 = arg1;
            var1[0] = var0;
            var0 = arg2;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'getKvEntries';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var1
            var0 = this;
            var1 = var0.table;
            var0 = var1.getKvEntries;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[5] = var0;
        var0 = {};
        var5 = 'getMapEntries';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var1
            var0 = this;
            var1 = var0.table;
            var0 = var1.getMapEntries;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[6] = var0;
        var0 = {};
        var5 = 'getIds';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var1
            var0 = this;
            var2 = var0.table;
            var1 = var2.getChildIds;
            var0 = new Array(0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[7] = var0;
        var0 = {};
        var5 = 'getParentId';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            var0 = this;
            var2 = var0.table;
            var1 = var2.getParentId;
            var0 = [null];
            var3 = arg0;
            var0[1] = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[8] = var0;
        var0 = {};
        var5 = 'put';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            _fun18590: for (var _fun18590_ip = 0;;) switch (_fun18590_ip) {
                case 0:
                    var1 = arguments[1];
                    var3 = this;
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var5 = undefined;
                    if (!(var1 === var5)) {
                        _fun18590_ip = 56;
                        continue _fun18590
                    }
                case 21:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.ConflictOptions;
                    var1 = var2.Replace;
                case 56:
                    var _closure3_slot1 = var1;
                    var2 = var3.transaction;
                    var6 = var3.prefix;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = '';
                    var1 = ' put';
                    var1 = var5.bind(var4)(var6, var1);
                    var0 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var2 = var3.put;
                        var1 = _closure3_slot0;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var0.value = var5;
        var2[9] = var0;
        var0 = {};
        var5 = 'putAll';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            _fun18592: for (var _fun18592_ip = 0;;) switch (_fun18592_ip) {
                case 0:
                    var1 = arguments[1];
                    var3 = this;
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var5 = undefined;
                    if (!(var1 === var5)) {
                        _fun18592_ip = 56;
                        continue _fun18592
                    }
                case 21:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.ConflictOptions;
                    var1 = var2.Replace;
                case 56:
                    var _closure3_slot1 = var1;
                    var2 = var3.transaction;
                    var6 = var3.prefix;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = '';
                    var1 = ' putAll';
                    var1 = var5.bind(var4)(var6, var1);
                    var0 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var2 = var3.putAll;
                        var1 = _closure3_slot0;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var0.value = var5;
        var2[10] = var0;
        var0 = {};
        var5 = 'replaceAll';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            var3 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = var3.transaction;
            var6 = var3.prefix;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '';
            var1 = ' replaceAll';
            var1 = var5.bind(var4)(var6, var1);
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.replaceAll;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var5;
        var2[11] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            var3 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = var3.transaction;
            var6 = var3.prefix;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '';
            var1 = ' delete';
            var1 = var5.bind(var4)(var6, var1);
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.delete;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var5;
        var2[12] = var0;
        var0 = {};
        var5 = 'transaction';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var3 = var1.table;
            var2 = var3.transaction;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var3 = _closure1_slot5;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = arg0;
                var5 = var1;
                var0 = new var5[var3](var4, var3);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var2[13] = var0;
        var0 = {};
        var5 = 'upgradeTransaction';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            var2 = _closure1_slot5;
            var0 = this;
            var3 = var0.table;
            var1 = var3.upgradeTransaction;
            var0 = arg0;
            var4 = var1.bind(var3)(var0);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var5 = var1;
            var0 = new var5[var2](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var2[14] = var0;
        var0 = {};
        var5 = 'getManySyncUnsafe';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            var0 = this;
            var3 = var0.table;
            var2 = var3.getManySyncUnsafe;
            var1 = new Array(0);
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var2[15] = var0;
        var0 = {};
        var5 = 'getMapEntriesSyncUnsafe';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var1
            var0 = this;
            var1 = var0.table;
            var0 = var1.getMapEntriesSyncUnsafe;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[16] = var0;
        var0 = {};
        var5 = 'cell';
        var0.key = var5;
        var1 = function(arg0, arg1) { // Original name: value, environment: var1
            var1 = arg0;
            var0 = {};
            var3 = var1.id;
            var2 = new Array(1);
            var2[0] = var3;
            var0.key = var2;
            var0.data = var1;
            var1 = arg1;
            var0.generation = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var3 = var1.bind(var0)();
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var4
        var4 = function(arg0) { // Original name: EntityDaoTransaction, environment: var1
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.transaction = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'put';
        var0.key = var2;
        var2 = function(arg0) { // Original name: value, environment: var1
            _fun18606: for (var _fun18606_ip = 0;;) switch (_fun18606_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun18606_ip = 44;
                        continue _fun18606
                    }
                case 9:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 3;
                    var0 = var4[var0];
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.ConflictOptions;
                    var3 = var0.Replace;
                case 44:
                    var0 = this;
                    var2 = var0.transaction;
                    var1 = var2.put;
                    var6 = _closure1_slot4;
                    var5 = var6.cell;
                    var4 = arg0;
                    var0 = null;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(4);
        var2[0] = var0;
        var0 = {};
        var5 = 'putAll';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            _fun18607: for (var _fun18607_ip = 0;;) switch (_fun18607_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arguments[1];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun18607_ip = 47;
                        continue _fun18607
                    }
                case 12:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 3;
                    var0 = var4[var0];
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.ConflictOptions;
                    var3 = var0.Replace;
                case 47:
                    var0 = this;
                    var2 = var0.transaction;
                    var1 = var2.putAll;
                    var4 = var5.map;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot4;
                        var2 = var3.cell;
                        var1 = arg0;
                        var0 = null;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var4.bind(var5)(var0);
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'replaceAll';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            var2 = this;
            var0 = var2.delete;
            var0 = var0.bind(var2)();
            var1 = var2.putAll;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            _fun18610: for (var _fun18610_ip = 0;;) switch (_fun18610_ip) {
                case 0:
                    var1 = this;
                    var0 = undefined;
                    var2 = arguments.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun18610_ip = 43;
                        continue _fun18610
                    }
                case 14:
                    var3 = var1.transaction;
                    var2 = var3.delete;
                    var0 = new Array(1);
                    var4 = arg0;
                    var0[0] = var4;
                    var0 = var2.bind(var3)(var0);
                    _fun18610_ip = 63;
                    continue _fun18610;
                case 43:
                    var3 = var1.transaction;
                    var2 = var3.delete;
                    var1 = new Array(0);
                    var0 = var2.bind(var3)(var1);
                case 63:
                    return var0;
            }
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'fromDatabaseTransaction';
        var0.key = var5;
        var1 = function(arg0, arg1, arg2) { // Original name: value, environment: var1
            var2 = _closure2_slot0;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var1);
            var5 = var0.TableTransaction;
            var0 = var5.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var5
                }
            });
            var8 = arg0;
            var7 = arg1;
            var6 = arg2;
            var9 = var1;
            var0 = new var9[var5](var8, var7, var6, var5);
            var8 = var0 instanceof Object ? var0 : var1;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var9 = var1;
            var0 = new var9[var2](var8, var7);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot5 = var1;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/kv-storage/js/api/EntityDao.tsx';
    var4 = var5.bind(var6)(var4);
    var2.EntityDao = var3;
    var2.EntityDaoTransaction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1642, 1644, 2]);