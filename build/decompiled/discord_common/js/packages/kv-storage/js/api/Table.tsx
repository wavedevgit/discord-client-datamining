// ../discord_common/js/packages/kv-storage/js/api/Table.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun18460: for (var _fun18460_ip = 0;;) switch (_fun18460_ip) {
            case 0:
                var2 = arg0;
                var6 = arg1;
                var3 = var6.length;
                var1 = 0;
                var0 = var2;
                if (!(var1 !== var3)) {
                    _fun18460_ip = 91;
                    continue _fun18460
                }
            case 20:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.combineKey;
                var3 = var2.key;
                var3 = var4.bind(var5)(var6, var3);
                var1.key = var3;
                var3 = var2.data;
                var1.data = var3;
                var2 = var2.generation;
                var1.generation = var2;
                var0 = var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun18461: for (var _fun18461_ip = 0;;) switch (_fun18461_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var4 = var0.length;
                var2 = 0;
                var0 = var3;
                if (!(var2 !== var4)) {
                    _fun18461_ip = 41;
                    continue _fun18461
                }
            case 26:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot6;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 41:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var1 = 2;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = function() { // Environment: var4
        var3 = _closure1_slot4;
        var2 = function arg0, arg1, arg2, arg3() {
            _fun18464: for (var _fun18464_ip = 0;;) switch (_fun18464_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot3;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var2, var1);
                    var1 = {};
                    var3 = function arg0() {
                        var0 = _closure3_slot0;
                        var3 = var0.database;
                        var2 = var3.execute;
                        var1 = {};
                        var4 = 'messages.get_latest';
                        var1.type = var4;
                        var4 = var0.tableId;
                        var1.table = var4;
                        var4 = arg0;
                        var1.guildId = var4;
                        var0 = var0.defaultDebugTag;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.getLatest = var3;
                    var2.messages = var1;
                    var1 = arg0;
                    var2.prefix = var1;
                    var1 = arg1;
                    var2.tableId = var1;
                    var1 = arg2;
                    var2.database = var1;
                    var3 = arg3;
                    var1 = null;
                    if (!var3) {
                        _fun18464_ip = 86;
                        continue _fun18464
                    }
                case 84:
                    var1 = undefined;
                case 86:
                    var2.defaultDebugTag = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'close';
        var4.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.database;
            var0 = var1.close;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var1;
        var1 = new Array(18);
        var1[0] = var4;
        var4 = {};
        var6 = 'get';
        var4.key = var6;
        var7 = _closure1_slot2;
        var0 = undefined;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun18468: for (var _fun18468_ip = 0;;) switch (_fun18468_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun18468_ip = 68;
                            continue _fun18468
                        }
                    case 10:
                        var3 = var4.getMany;
                        var2 = {};
                        var1 = 1;
                        var2.limit = var1;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1, var2);
                        SaveGenerator(address = 38);
                    case 36:
                        return var1;
                    case 38:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun18468_ip = 65;
                            continue _fun18468
                        }
                    case 44:
                        var2 = 0;
                        var3 = var1[var2];
                        var2 = null;
                        var4 = var2 != var3;
                        if (!var4) {
                            _fun18468_ip = 62;
                            continue _fun18468
                        }
                    case 59:
                        var2 = var3;
                    case 62:
                        return var2;
                    case 65:
                        return var1;
                    case 68:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[1] = var4;
        var4 = {};
        var6 = 'getMany';
        var4.key = var6;
        var6 = function() {
            _fun18470: for (var _fun18470_ip = 0;;) switch (_fun18470_ip) {
                case 0:
                    var9 = arguments[0];
                    var5 = arguments[1];
                    var0 = this;
                    var4 = undefined;
                    if (!(var9 === var4)) {
                        _fun18470_ip = 19;
                        continue _fun18470
                    }
                case 15:
                    var9 = new Array(0);
                case 19:
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var6 = 'kv.get_many';
                    var1.type = var6;
                    var6 = var0.tableId;
                    var1.table = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 3;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.combineKeyPrefix;
                    var6 = var0.prefix;
                    var6 = var7.bind(var8)(var6, var9);
                    var1.key = var6;
                    var6 = null;
                    var8 = var6 == var5;
                    var7 = undefined;
                    if (var8) {
                        _fun18470_ip = 116;
                        continue _fun18470
                    }
                case 110:
                    var7 = var5.ordering;
                case 116:
                    var1.ordering = var7;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun18470_ip = 135;
                        continue _fun18470
                    }
                case 130:
                    var4 = var5.limit;
                case 135:
                    var1.limit = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[2] = var4;
        var4 = {};
        var6 = 'getRange';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun18471: for (var _fun18471_ip = 0;;) switch (_fun18471_ip) {
                case 0:
                    var5 = arg2;
                    var0 = this;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 3;
                    var6 = var3[var1];
                    var4 = undefined;
                    var9 = var2.bind(var4)(var6);
                    var8 = var9.combineKey;
                    var7 = var0.prefix;
                    var6 = arg0;
                    var8 = var8.bind(var9)(var7, var6);
                    var1 = var3[var1];
                    var6 = var2.bind(var4)(var1);
                    var3 = var6.combineKey;
                    var2 = var0.prefix;
                    var1 = arg1;
                    var7 = var3.bind(var6)(var2, var1);
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var6 = 'kv.get_range';
                    var1.type = var6;
                    var6 = var0.tableId;
                    var1.table = var6;
                    var6 = new Array(2);
                    var6[0] = var8;
                    var6[1] = var7;
                    var1.range = var6;
                    var6 = null;
                    var8 = var6 == var5;
                    var7 = undefined;
                    if (var8) {
                        _fun18471_ip = 151;
                        continue _fun18471
                    }
                case 145:
                    var7 = var5.ordering;
                case 151:
                    var1.ordering = var7;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun18471_ip = 170;
                        continue _fun18471
                    }
                case 165:
                    var4 = var5.limit;
                case 170:
                    var1.limit = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[3] = var4;
        var4 = {};
        var6 = 'getKvEntries';
        var4.key = var6;
        var6 = function() {
            _fun18472: for (var _fun18472_ip = 0;;) switch (_fun18472_ip) {
                case 0:
                    var7 = arguments[0];
                    var0 = this;
                    var6 = undefined;
                    if (!(var7 === var6)) {
                        _fun18472_ip = 16;
                        continue _fun18472
                    }
                case 12:
                    var7 = new Array(0);
                case 16:
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var4 = 'kv.get_kv_entries';
                    var1.type = var4;
                    var4 = var0.tableId;
                    var1.table = var4;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.combineKeyPrefix;
                    var4 = var0.prefix;
                    var4 = var5.bind(var6)(var4, var7);
                    var1.key = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[4] = var4;
        var4 = {};
        var6 = 'getMapEntries';
        var4.key = var6;
        var6 = function() {
            _fun18473: for (var _fun18473_ip = 0;;) switch (_fun18473_ip) {
                case 0:
                    var7 = arguments[0];
                    var0 = this;
                    var6 = undefined;
                    if (!(var7 === var6)) {
                        _fun18473_ip = 16;
                        continue _fun18473
                    }
                case 12:
                    var7 = new Array(0);
                case 16:
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var4 = 'kv.get_map_entries';
                    var1.type = var4;
                    var4 = var0.tableId;
                    var1.table = var4;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.combineKeyPrefix;
                    var4 = var0.prefix;
                    var4 = var5.bind(var6)(var4, var7);
                    var1.key = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[5] = var4;
        var4 = {};
        var6 = 'getChildIds';
        var4.key = var6;
        var6 = function() {
            _fun18474: for (var _fun18474_ip = 0;;) switch (_fun18474_ip) {
                case 0:
                    var7 = arguments[0];
                    var0 = this;
                    var6 = undefined;
                    if (!(var7 === var6)) {
                        _fun18474_ip = 16;
                        continue _fun18474
                    }
                case 12:
                    var7 = new Array(0);
                case 16:
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var4 = 'kv.get_child_ids';
                    var1.type = var4;
                    var4 = var0.tableId;
                    var1.table = var4;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.combineKeyPrefix;
                    var4 = var0.prefix;
                    var4 = var5.bind(var6)(var4, var7);
                    var1.key = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[6] = var4;
        var4 = {};
        var6 = 'getParentId';
        var4.key = var6;
        var6 = function() {
            _fun18475: for (var _fun18475_ip = 0;;) switch (_fun18475_ip) {
                case 0:
                    var7 = arguments[0];
                    var0 = this;
                    var6 = undefined;
                    if (!(var7 === var6)) {
                        _fun18475_ip = 16;
                        continue _fun18475
                    }
                case 12:
                    var7 = new Array(0);
                case 16:
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var4 = 'kv.get_parent_id';
                    var1.type = var4;
                    var4 = var0.tableId;
                    var1.table = var4;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.combineKey;
                    var4 = var0.prefix;
                    var4 = var5.bind(var6)(var4, var7);
                    var1.key = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[7] = var4;
        var4 = {};
        var6 = 'put';
        var4.key = var6;
        var6 = function arg0() {
            _fun18476: for (var _fun18476_ip = 0;;) switch (_fun18476_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = this;
                    var7 = undefined;
                    if (!(var5 === var7)) {
                        _fun18476_ip = 47;
                        continue _fun18476
                    }
                case 12:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 4;
                    var1 = var3[var1];
                    var1 = var2.bind(var7)(var1);
                    var1 = var1.ConflictOptions;
                    var5 = var1.Replace;
                case 47:
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var4 = 'kv.put_one';
                    var1.type = var4;
                    var4 = var0.tableId;
                    var1.table = var4;
                    var9 = _closure1_slot6;
                    var8 = var0.prefix;
                    var6 = arg0;
                    var6 = var9.bind(var7)(var6, var8);
                    var1.cell = var6;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 4;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.ConflictOptions;
                    var4 = var4.Replace;
                    var4 = var5 === var4;
                    var1.overwrite = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[8] = var4;
        var4 = {};
        var6 = 'putAll';
        var4.key = var6;
        var6 = function arg0() {
            _fun18477: for (var _fun18477_ip = 0;;) switch (_fun18477_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = this;
                    var7 = undefined;
                    if (!(var5 === var7)) {
                        _fun18477_ip = 47;
                        continue _fun18477
                    }
                case 12:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 4;
                    var1 = var3[var1];
                    var1 = var2.bind(var7)(var1);
                    var1 = var1.ConflictOptions;
                    var5 = var1.Replace;
                case 47:
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var4 = 'kv.put_many';
                    var1.type = var4;
                    var4 = var0.tableId;
                    var1.table = var4;
                    var9 = _closure1_slot7;
                    var8 = var0.prefix;
                    var6 = arg0;
                    var6 = var9.bind(var7)(var6, var8);
                    var1.cells = var6;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 4;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.ConflictOptions;
                    var4 = var4.Replace;
                    var4 = var5 === var4;
                    var1.overwrite = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[9] = var4;
        var4 = {};
        var6 = 'replaceAll';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = var3.transaction;
            var1 = var3.defaultDebugTag;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var0 = var2.delete;
                var0 = var0.bind(var2)();
                var1 = var2.putAll;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[10] = var4;
        var4 = {};
        var6 = 'delete';
        var4.key = var6;
        var6 = function() {
            _fun18480: for (var _fun18480_ip = 0;;) switch (_fun18480_ip) {
                case 0:
                    var7 = arguments[0];
                    var0 = this;
                    var6 = undefined;
                    if (!(var7 === var6)) {
                        _fun18480_ip = 16;
                        continue _fun18480
                    }
                case 12:
                    var7 = new Array(0);
                case 16:
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var4 = 'kv.delete_many';
                    var1.type = var4;
                    var4 = var0.tableId;
                    var1.table = var4;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.combineKeyPrefix;
                    var4 = var0.prefix;
                    var4 = var5.bind(var6)(var4, var7);
                    var1.key = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[11] = var4;
        var4 = {};
        var6 = 'deleteRange';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = this;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var5 = var4[var1];
            var2 = undefined;
            var8 = var3.bind(var2)(var5);
            var7 = var8.combineKey;
            var6 = var0.prefix;
            var5 = arg0;
            var6 = var7.bind(var8)(var6, var5);
            var1 = var4[var1];
            var4 = var3.bind(var2)(var1);
            var3 = var4.combineKey;
            var2 = var0.prefix;
            var1 = arg1;
            var5 = var3.bind(var4)(var2, var1);
            var3 = var0.database;
            var2 = var3.execute;
            var1 = {};
            var4 = 'kv.delete_range';
            var1.type = var4;
            var4 = var0.tableId;
            var1.table = var4;
            var4 = new Array(2);
            var4[0] = var6;
            var4[1] = var5;
            var1.range = var4;
            var0 = var0.defaultDebugTag;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var1[12] = var4;
        var4 = {};
        var6 = 'deleteGeneration';
        var4.key = var6;
        var6 = function() {
            _fun18482: for (var _fun18482_ip = 0;;) switch (_fun18482_ip) {
                case 0:
                    var7 = arguments[0];
                    var0 = this;
                    var6 = undefined;
                    if (!(var7 === var6)) {
                        _fun18482_ip = 16;
                        continue _fun18482
                    }
                case 12:
                    var7 = new Array(0);
                case 16:
                    var3 = var0.database;
                    var2 = var3.execute;
                    var1 = {};
                    var4 = 'kv.delete_generation';
                    var1.type = var4;
                    var4 = var0.tableId;
                    var1.table = var4;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.combineKeyPrefix;
                    var4 = var0.prefix;
                    var4 = var5.bind(var6)(var4, var7);
                    var1.key = var4;
                    var4 = arguments[2];
                    var1.generation = var4;
                    var4 = arguments[1];
                    var1.comparer = var4;
                    var0 = var0.defaultDebugTag;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[13] = var4;
        var4 = {};
        var6 = 'transaction';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = arg0;
            var _closure3_slot1 = var2;
            var3 = var1.database;
            var2 = var3.transaction;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure3_slot1;
                var5 = _closure1_slot5;
                var0 = _closure3_slot0;
                var8 = var0.prefix;
                var7 = var0.tableId;
                var0 = var5.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var6 = arg0;
                var9 = var1;
                var0 = new var9[var5](var8, var7, var6, var5);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var1[14] = var4;
        var4 = {};
        var6 = 'upgradeTransaction';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var4 = _closure1_slot5;
            var7 = var0.prefix;
            var6 = var0.tableId;
            var0 = var4.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = arg0;
            var8 = var1;
            var0 = new var8[var4](var7, var6, var5, var4);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var4.value = var6;
        var1[15] = var4;
        var4 = {};
        var6 = 'getManySyncUnsafe';
        var4.key = var6;
        var6 = function() {
            _fun18486: for (var _fun18486_ip = 0;;) switch (_fun18486_ip) {
                case 0:
                    var8 = arguments[0];
                    var4 = arguments[1];
                    var5 = this;
                    var3 = undefined;
                    if (!(var8 === var3)) {
                        _fun18486_ip = 19;
                        continue _fun18486
                    }
                case 15:
                    var8 = new Array(0);
                case 19:
                    var2 = var5.database;
                    var1 = var2.executeSync;
                    var0 = {};
                    var6 = 'kv.get_many';
                    var0.type = var6;
                    var6 = var5.tableId;
                    var0.table = var6;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 3;
                    var6 = var9[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.combineKeyPrefix;
                    var5 = var5.prefix;
                    var5 = var6.bind(var7)(var5, var8);
                    var0.key = var5;
                    var5 = null;
                    var7 = var5 == var4;
                    var6 = undefined;
                    if (var7) {
                        _fun18486_ip = 116;
                        continue _fun18486
                    }
                case 110:
                    var6 = var4.ordering;
                case 116:
                    var0.ordering = var6;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun18486_ip = 135;
                        continue _fun18486
                    }
                case 130:
                    var3 = var4.limit;
                case 135:
                    var0.limit = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var1[16] = var4;
        var4 = {};
        var6 = 'getMapEntriesSyncUnsafe';
        var4.key = var6;
        var5 = function() {
            _fun18487: for (var _fun18487_ip = 0;;) switch (_fun18487_ip) {
                case 0:
                    var6 = arguments[0];
                    var3 = this;
                    var7 = undefined;
                    if (!(var6 === var7)) {
                        _fun18487_ip = 16;
                        continue _fun18487
                    }
                case 12:
                    var6 = new Array(0);
                case 16:
                    var2 = var3.database;
                    var1 = var2.executeSync;
                    var0 = {};
                    var4 = 'kv.get_map_entries';
                    var0.type = var4;
                    var4 = var3.tableId;
                    var0.table = var4;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 3;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.combineKeyPrefix;
                    var3 = var3.prefix;
                    var3 = var4.bind(var5)(var3, var6);
                    var0.key = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var5;
        var1[17] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var1.bind(var0)();
    var1 = function() { // Environment: var4
        var4 = function arg0, arg1, arg2() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = {};
            var4 = function arg0() {
                _fun18490: for (var _fun18490_ip = 0;;) switch (_fun18490_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure3_slot0;
                        var1 = var1.prefix;
                        var1 = var1.length;
                        var2 = 1;
                        if (!(var2 === var1)) {
                            _fun18490_ip = 110;
                            continue _fun18490
                        }
                    case 28:
                        var1 = var5.length;
                        if (!(var2 === var1)) {
                            _fun18490_ip = 110;
                            continue _fun18490
                        }
                    case 37:
                        var3 = _closure3_slot0;
                        var2 = var3.transaction;
                        var1 = var2.add;
                        var0 = {};
                        var4 = 'messages.trim_orphans';
                        var0.type = var4;
                        var4 = var3.tableId;
                        var0.table = var4;
                        var4 = 0;
                        var5 = var5[var4];
                        var0.channelKey = var5;
                        var3 = var3.prefix;
                        var3 = var3[var4];
                        var0.messageKey = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    case 110:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = 'trimOrphans: only one prefix component is supported at this time';
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var1.trimOrphans = var4;
            var4 = function arg0, arg1() {
                var4 = _closure3_slot0;
                var3 = var4.transaction;
                var2 = var3.add;
                var1 = {};
                var0 = 'messages.trim_channel';
                var1.type = var0;
                var0 = var4.tableId;
                var1.table = var0;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var5 = var5[var0];
                var0 = undefined;
                var7 = var6.bind(var0)(var5);
                var6 = var7.combineKey;
                var5 = var4.prefix;
                var4 = arg0;
                var4 = var6.bind(var7)(var5, var4);
                var1.key = var4;
                var4 = arg1;
                var1.limit = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1.trimChannel = var4;
            var4 = function arg0, arg1() {
                _fun18492: for (var _fun18492_ip = 0;;) switch (_fun18492_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure3_slot0;
                        var1 = var1.prefix;
                        var1 = var1.length;
                        var2 = 1;
                        if (!(var2 === var1)) {
                            _fun18492_ip = 117;
                            continue _fun18492
                        }
                    case 28:
                        var1 = var5.length;
                        if (!(var2 === var1)) {
                            _fun18492_ip = 117;
                            continue _fun18492
                        }
                    case 37:
                        var3 = _closure3_slot0;
                        var2 = var3.transaction;
                        var1 = var2.add;
                        var0 = {};
                        var4 = 'messages.trim_channels_in';
                        var0.type = var4;
                        var4 = var3.tableId;
                        var0.table = var4;
                        var4 = 0;
                        var5 = var5[var4];
                        var0.channelKey = var5;
                        var3 = var3.prefix;
                        var3 = var3[var4];
                        var0.messageKey = var3;
                        var3 = arg1;
                        var0.limit = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    case 117:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = 'trimChannelsIn: only one prefix component is supported at this time';
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var1.trimChannelsIn = var4;
            var3 = function arg0, arg1() {
                _fun18493: for (var _fun18493_ip = 0;;) switch (_fun18493_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure3_slot0;
                        var1 = var1.prefix;
                        var1 = var1.length;
                        var2 = 1;
                        if (!(var2 === var1)) {
                            _fun18493_ip = 117;
                            continue _fun18493
                        }
                    case 28:
                        var1 = var5.length;
                        if (!(var2 === var1)) {
                            _fun18493_ip = 117;
                            continue _fun18493
                        }
                    case 37:
                        var3 = _closure3_slot0;
                        var2 = var3.transaction;
                        var1 = var2.add;
                        var0 = {};
                        var4 = 'messages.trim_channels_not_in';
                        var0.type = var4;
                        var4 = var3.tableId;
                        var0.table = var4;
                        var4 = 0;
                        var5 = var5[var4];
                        var0.channelKey = var5;
                        var3 = var3.prefix;
                        var3 = var3[var4];
                        var0.messageKey = var3;
                        var3 = arg1;
                        var0.limit = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    case 117:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = 'trimChannelsNotIn: only one prefix component is supported at this time';
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var1.trimChannelsNotIn = var3;
            var2.messages = var1;
            var1 = arg0;
            var2.prefix = var1;
            var1 = arg1;
            var2.tableId = var1;
            var1 = arg2;
            var2.transaction = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var0 = {};
        var2 = 'put';
        var0.key = var2;
        var2 = function arg0() {
            _fun18494: for (var _fun18494_ip = 0;;) switch (_fun18494_ip) {
                case 0:
                    var5 = arguments[1];
                    var6 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun18494_ip = 47;
                        continue _fun18494
                    }
                case 12:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 4;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.ConflictOptions;
                    var5 = var1.Replace;
                case 47:
                    var3 = var6.transaction;
                    var2 = var3.add;
                    var1 = {};
                    var4 = 'kv.put_one';
                    var1.type = var4;
                    var4 = var6.tableId;
                    var1.table = var4;
                    var8 = _closure1_slot6;
                    var7 = var6.prefix;
                    var6 = arg0;
                    var6 = var8.bind(var0)(var6, var7);
                    var1.cell = var6;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 4;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.ConflictOptions;
                    var4 = var4.Replace;
                    var4 = var5 === var4;
                    var1.overwrite = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(5);
        var2[0] = var0;
        var0 = {};
        var5 = 'putAll';
        var0.key = var5;
        var5 = function arg0() {
            _fun18495: for (var _fun18495_ip = 0;;) switch (_fun18495_ip) {
                case 0:
                    var5 = arguments[1];
                    var6 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun18495_ip = 47;
                        continue _fun18495
                    }
                case 12:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 4;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.ConflictOptions;
                    var5 = var1.Replace;
                case 47:
                    var3 = var6.transaction;
                    var2 = var3.add;
                    var1 = {};
                    var4 = 'kv.put_many';
                    var1.type = var4;
                    var4 = var6.tableId;
                    var1.table = var4;
                    var8 = _closure1_slot7;
                    var7 = var6.prefix;
                    var6 = arg0;
                    var6 = var8.bind(var0)(var6, var7);
                    var1.cells = var6;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 4;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.ConflictOptions;
                    var4 = var4.Replace;
                    var4 = var5 === var4;
                    var1.overwrite = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function() {
            _fun18496: for (var _fun18496_ip = 0;;) switch (_fun18496_ip) {
                case 0:
                    var7 = arguments[0];
                    var4 = this;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun18496_ip = 16;
                        continue _fun18496
                    }
                case 12:
                    var7 = new Array(0);
                case 16:
                    var3 = var4.transaction;
                    var2 = var3.add;
                    var1 = {};
                    var5 = 'kv.delete_many';
                    var1.type = var5;
                    var5 = var4.tableId;
                    var1.table = var5;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.combineKeyPrefix;
                    var4 = var4.prefix;
                    var4 = var5.bind(var6)(var4, var7);
                    var1.key = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'deleteRange';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var4 = this;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var5 = var3[var1];
            var0 = undefined;
            var8 = var2.bind(var0)(var5);
            var7 = var8.combineKey;
            var6 = var4.prefix;
            var5 = arg0;
            var6 = var7.bind(var8)(var6, var5);
            var1 = var3[var1];
            var5 = var2.bind(var0)(var1);
            var3 = var5.combineKey;
            var2 = var4.prefix;
            var1 = arg1;
            var5 = var3.bind(var5)(var2, var1);
            var3 = var4.transaction;
            var2 = var3.add;
            var1 = {};
            var7 = 'kv.delete_range';
            var1.type = var7;
            var4 = var4.tableId;
            var1.table = var4;
            var4 = new Array(2);
            var4[0] = var6;
            var4[1] = var5;
            var1.range = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'deleteGeneration';
        var0.key = var5;
        var5 = function() {
            _fun18498: for (var _fun18498_ip = 0;;) switch (_fun18498_ip) {
                case 0:
                    var7 = arguments[0];
                    var4 = this;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun18498_ip = 16;
                        continue _fun18498
                    }
                case 12:
                    var7 = new Array(0);
                case 16:
                    var3 = var4.transaction;
                    var2 = var3.add;
                    var1 = {};
                    var5 = 'kv.delete_generation';
                    var1.type = var5;
                    var5 = var4.tableId;
                    var1.table = var5;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.combineKeyPrefix;
                    var4 = var4.prefix;
                    var4 = var5.bind(var6)(var4, var7);
                    var1.key = var4;
                    var4 = arguments[2];
                    var1.generation = var4;
                    var4 = arguments[1];
                    var1.comparer = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'fromDatabaseTransaction';
        var0.key = var5;
        var1 = function arg0, arg1, arg2() {
            var4 = _closure2_slot0;
            var0 = var4.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var7 = arg0;
            var6 = arg1;
            var5 = arg2;
            var8 = var1;
            var0 = new var8[var4](var7, var6, var5, var4);
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/kv-storage/js/api/Table.tsx';
    var4 = var5.bind(var6)(var4);
    var2.Table = var3;
    var2.TableTransaction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1643, 1644, 2]);