// ../discord_common/js/packages/kv-storage/js/api/MessageDao.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1, arg2() {
        var2 = arg2;
        var3 = _closure1_slot6;
        var1 = var2.id;
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var0 = {};
        var3 = new Array(3);
        var4 = arg0;
        var3[0] = var4;
        var4 = arg1;
        var3[1] = var4;
        var3[2] = var1;
        var0.key = var3;
        var0.data = var2;
        var0.generation = var1;
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function arg0() {
        var3 = arg0;
        var2 = var3.padStart;
        var1 = 19;
        var0 = '0';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot6 = var0;
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
            _fun18778: for (var _fun18778_ip = 0;;) switch (_fun18778_ip) {
                case 0:
                    var1 = arg0;
                    var7 = arguments[3];
                    var2 = this;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun18778_ip = 17;
                        continue _fun18778
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
        var1 = new Array(14);
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
        var5 = function arg0, arg1, arg2() {
            var0 = this;
            var2 = var0.table;
            var1 = var2.get;
            var0 = new Array(3);
            var3 = arg0;
            var0[0] = var3;
            var3 = arg1;
            var0[1] = var3;
            var5 = _closure1_slot6;
            var4 = undefined;
            var3 = arg2;
            var3 = var5.bind(var4)(var3);
            var0[2] = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getLatest';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var0 = this;
            var3 = var0.table;
            var2 = var3.getMany;
            var1 = new Array(2);
            var0 = arg0;
            var1[0] = var0;
            var0 = arg1;
            var1[1] = var0;
            var0 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 3;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.Ordering;
            var4 = var4.Descending;
            var0.ordering = var4;
            var4 = arg2;
            var0.limit = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getRange';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3, arg4() {
            var7 = arg0;
            var0 = arg1;
            var1 = this;
            var4 = var1.table;
            var3 = var4.getRange;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var0;
            var6 = _closure1_slot6;
            var5 = undefined;
            var1 = arg2;
            var1 = var6.bind(var5)(var1);
            var2[2] = var1;
            var1 = new Array(3);
            var1[0] = var7;
            var1[1] = var0;
            var0 = arg3;
            var0 = var6.bind(var5)(var0);
            var1[2] = var0;
            var0 = arg4;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getMostRecents';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var0 = var0.table;
            var2 = var0.messages;
            var1 = var2.getLatest;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'put';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun18785: for (var _fun18785_ip = 0;;) switch (_fun18785_ip) {
                case 0:
                    var3 = arguments[3];
                    var7 = undefined;
                    if (!(var3 === var7)) {
                        _fun18785_ip = 44;
                        continue _fun18785
                    }
                case 9:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var0 = var2[var0];
                    var0 = var1.bind(var7)(var0);
                    var0 = var0.ConflictOptions;
                    var3 = var0.Replace;
                case 44:
                    var0 = this;
                    var2 = var0.table;
                    var1 = var2.put;
                    var6 = _closure1_slot5;
                    var5 = arg0;
                    var4 = arg1;
                    var0 = arg2;
                    var0 = var6.bind(var7)(var5, var4, var0);
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'putAll';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun18786: for (var _fun18786_ip = 0;;) switch (_fun18786_ip) {
                case 0:
                    var2 = arg2;
                    var3 = arguments[3];
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var5 = undefined;
                    if (!(var3 === var5)) {
                        _fun18786_ip = 63;
                        continue _fun18786
                    }
                case 28:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 3;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.ConflictOptions;
                    var3 = var1.Replace;
                case 63:
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var4 = _closure1_slot5;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var3, var2, var0);
                        return var0;
                    };
                    var2 = var1.bind(var2)(var0);
                    var0 = this;
                    var1 = var0.table;
                    var0 = var1.putAll;
                    var0 = var0.bind(var1)(var2, var3);
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'deleteAll';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.table;
            var0 = var1.delete;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'deleteGuild';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.table;
            var1 = var2.delete;
            var0 = new Array(1);
            var3 = arg0;
            var0[0] = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'deleteChannel';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            var2 = var0.table;
            var1 = var2.delete;
            var0 = new Array(2);
            var3 = arg0;
            var0[0] = var3;
            var3 = arg1;
            var0[1] = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'deleteMessage';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var0 = this;
            var2 = var0.table;
            var1 = var2.delete;
            var0 = new Array(3);
            var3 = arg0;
            var0[0] = var3;
            var3 = arg1;
            var0[1] = var3;
            var5 = _closure1_slot6;
            var4 = undefined;
            var3 = arg2;
            var3 = var5.bind(var4)(var3);
            var0[2] = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
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
        var1[12] = var0;
        var0 = {};
        var5 = 'upgradeTransaction';
        var0.key = var5;
        var4 = function arg0() {
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
        var0.value = var4;
        var1[13] = var0;
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
        var1 = 'put';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun18797: for (var _fun18797_ip = 0;;) switch (_fun18797_ip) {
                case 0:
                    var4 = arguments[3];
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun18797_ip = 44;
                        continue _fun18797
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
                    var7 = _closure1_slot5;
                    var6 = arg0;
                    var5 = arg1;
                    var1 = arg2;
                    var1 = var7.bind(var0)(var6, var5, var1);
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(11);
        var2[0] = var0;
        var0 = {};
        var1 = 'putAll';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun18798: for (var _fun18798_ip = 0;;) switch (_fun18798_ip) {
                case 0:
                    var3 = arg2;
                    var4 = arguments[3];
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun18798_ip = 63;
                        continue _fun18798
                    }
                case 28:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.ConflictOptions;
                    var4 = var2.Replace;
                case 63:
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var4 = _closure1_slot5;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var3, var2, var0);
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var1 = this;
                    var2 = var1.transaction;
                    var1 = var2.putAll;
                    var1 = var1.bind(var2)(var3, var4);
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'replaceChannel';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            var4 = arg0;
            var3 = arg1;
            var2 = this;
            var0 = var2.deleteChannel;
            var0 = var0.bind(var2)(var4, var3);
            var1 = var2.putAll;
            var0 = arg2;
            var0 = var1.bind(var2)(var4, var3, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[2] = var0;
        var0 = {};
        var1 = 'deleteAll';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.transaction;
            var0 = var1.delete;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[3] = var0;
        var0 = {};
        var1 = 'deleteGuild';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var2 = var0.transaction;
            var1 = var2.delete;
            var0 = new Array(1);
            var3 = arg0;
            var0[0] = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[4] = var0;
        var0 = {};
        var1 = 'deleteChannel';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var0 = this;
            var2 = var0.transaction;
            var1 = var2.delete;
            var0 = new Array(2);
            var3 = arg0;
            var0[0] = var3;
            var3 = arg1;
            var0[1] = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[5] = var0;
        var0 = {};
        var1 = 'deleteMessage';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            var0 = this;
            var3 = var0.transaction;
            var2 = var3.delete;
            var1 = new Array(3);
            var0 = arg0;
            var1[0] = var0;
            var0 = arg1;
            var1[1] = var0;
            var5 = _closure1_slot6;
            var0 = undefined;
            var4 = arg2;
            var4 = var5.bind(var0)(var4);
            var1[2] = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var1;
        var2[6] = var0;
        var0 = {};
        var1 = 'trimOrphans';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var0 = var0.transaction;
            var2 = var0.messages;
            var1 = var2.trimOrphans;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[7] = var0;
        var0 = {};
        var1 = 'trimChannel';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            var0 = this;
            var0 = var0.transaction;
            var3 = var0.messages;
            var2 = var3.trimChannel;
            var1 = new Array(2);
            var0 = arg0;
            var1[0] = var0;
            var0 = arg1;
            var1[1] = var0;
            var0 = arg2;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[8] = var0;
        var0 = {};
        var1 = 'trimChannelsIn';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var0 = this;
            var0 = var0.transaction;
            var3 = var0.messages;
            var2 = var3.trimChannelsIn;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[9] = var0;
        var0 = {};
        var1 = 'trimChannelsNotIn';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var0 = this;
            var0 = var0.transaction;
            var3 = var0.messages;
            var2 = var3.trimChannelsNotIn;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[10] = var0;
        var0 = {};
        var1 = 'fromTableTransaction';
        var0.key = var1;
        var1 = function arg0() {
            var2 = _closure2_slot0;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = arg0;
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var6 = 'fromDatabaseTransaction';
        var0.key = var6;
        var5 = function arg0, arg1, arg2() {
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
        var0.value = var5;
        var1[1] = var0;
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
    var4 = '../discord_common/js/packages/kv-storage/js/api/MessageDao.tsx';
    var4 = var5.bind(var6)(var4);
    var2.MessageDao = var3;
    var2.MessageDaoTransaction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1651, 1653, 2]);