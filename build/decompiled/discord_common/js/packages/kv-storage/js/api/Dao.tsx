// ../discord_common/js/packages/kv-storage/js/api/Dao.tsx
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
        var3 = function arg0, arg1, arg2() {
            _fun18539: for (var _fun18539_ip = 0;;) switch (_fun18539_ip) {
                case 0:
                    var1 = arg0;
                    var7 = arguments[3];
                    var2 = this;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun18539_ip = 17;
                        continue _fun18539
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
        var _closure2_slot0 = var3;
        var2 = _closure1_slot3;
        var0 = {};
        var1 = 'prefix';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.table;
            var0 = var0.prefix;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(15);
        var1[0] = var0;
        var0 = {};
        var5 = 'withoutLogging';
        var0.key = var5;
        var5 = function() {
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
        var1[1] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
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
        var1[2] = var0;
        var0 = {};
        var5 = 'getMany';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var3 = var0.table;
            var2 = var3.getMany;
            var1 = new Array(0);
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getRange';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
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
        var1[4] = var0;
        var0 = {};
        var5 = 'getKvEntries';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.table;
            var0 = var1.getKvEntries;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getMapEntries';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.table;
            var0 = var1.getMapEntries;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getIds';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.table;
            var1 = var2.getChildIds;
            var0 = new Array(0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getParentId';
        var0.key = var5;
        var5 = function arg0() {
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
        var1[8] = var0;
        var0 = {};
        var5 = 'put';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun18549: for (var _fun18549_ip = 0;;) switch (_fun18549_ip) {
                case 0:
                    var3 = arguments[2];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun18549_ip = 44;
                        continue _fun18549
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
                    var2 = var0.table;
                    var1 = var2.put;
                    var0 = {};
                    var4 = new Array(1);
                    var5 = arg0;
                    var4[0] = var5;
                    var0.key = var4;
                    var4 = arg1;
                    var0.data = var4;
                    var4 = null;
                    var0.generation = var4;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            _fun18550: for (var _fun18550_ip = 0;;) switch (_fun18550_ip) {
                case 0:
                    var1 = this;
                    var0 = undefined;
                    var2 = arguments.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun18550_ip = 43;
                        continue _fun18550
                    }
                case 14:
                    var3 = var1.table;
                    var2 = var3.delete;
                    var0 = new Array(1);
                    var4 = arg0;
                    var0[0] = var4;
                    var0 = var2.bind(var3)(var0);
                    _fun18550_ip = 58;
                    continue _fun18550;
                case 43:
                    var2 = var1.table;
                    var1 = var2.delete;
                    var0 = var1.bind(var2)();
                case 58:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'transaction';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var3 = var1.table;
            var2 = var3.transaction;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var3 = _closure1_slot4;
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
        var1[11] = var0;
        var0 = {};
        var5 = 'upgradeTransaction';
        var0.key = var5;
        var5 = function arg0() {
            var2 = _closure1_slot4;
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
        var1[12] = var0;
        var0 = {};
        var5 = 'getManySyncUnsafe';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var3 = var0.table;
            var2 = var3.getManySyncUnsafe;
            var1 = new Array(0);
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'getMapEntriesSyncUnsafe';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = var0.table;
            var0 = var1.getMapEntriesSyncUnsafe;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var4;
        var1[14] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3 = var1.bind(var0)();
    var1 = function() { // Environment: var4
        var4 = function arg0() {
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
        var2 = function arg0, arg1() {
            _fun18558: for (var _fun18558_ip = 0;;) switch (_fun18558_ip) {
                case 0:
                    var4 = arguments[2];
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun18558_ip = 44;
                        continue _fun18558
                    }
                case 9:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 3;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.ConflictOptions;
                    var4 = var1.Replace;
                case 44:
                    var1 = this;
                    var3 = var1.transaction;
                    var2 = var3.put;
                    var1 = {};
                    var5 = new Array(1);
                    var6 = arg0;
                    var5[0] = var6;
                    var1.key = var5;
                    var5 = arg1;
                    var1.data = var5;
                    var5 = null;
                    var1.generation = var5;
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            _fun18559: for (var _fun18559_ip = 0;;) switch (_fun18559_ip) {
                case 0:
                    var1 = this;
                    var0 = undefined;
                    var2 = arguments.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun18559_ip = 43;
                        continue _fun18559
                    }
                case 14:
                    var3 = var1.transaction;
                    var2 = var3.delete;
                    var0 = new Array(1);
                    var4 = arg0;
                    var0[0] = var4;
                    var0 = var2.bind(var3)(var0);
                    _fun18559_ip = 58;
                    continue _fun18559;
                case 43:
                    var2 = var1.transaction;
                    var1 = var2.delete;
                    var0 = var1.bind(var2)();
                case 58:
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'fromDatabaseTransaction';
        var0.key = var5;
        var1 = function arg0, arg1, arg2() {
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
    var _closure1_slot4 = var1;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/kv-storage/js/api/Dao.tsx';
    var4 = var5.bind(var6)(var4);
    var2.Dao = var3;
    var2.DaoTransaction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1653, 1655, 2]);