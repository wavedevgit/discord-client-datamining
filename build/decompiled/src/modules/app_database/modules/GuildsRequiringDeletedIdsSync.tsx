// modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot3;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = {};
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleBackgroundSync;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.BACKGROUND_SYNC = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleConnectionOpen;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CONNECTION_OPEN = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildCreate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_CREATE = var4;
            var3 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleDeletedEntityIds;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.DELETED_ENTITY_IDS = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'getAll';
        var4.key = var1;
        var6 = _closure1_slot2;
        var1 = undefined;
        var0 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun93218: for (var _fun93218_ip = 0;;) switch (_fun93218_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93218_ip = 155;
                            continue _fun93218
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.guildsRequiringDeletedIdsSync;
                        var2 = var1.bind(var2)();
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun93218_ip = 124;
                            continue _fun93218
                        }
                    case 51:
                        var1 = var2.getMany;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 65);
                    case 63:
                        return var1;
                    case 65:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93218_ip = 121;
                            continue _fun93218
                        }
                    case 71:
                        var2 = global;
                        var4 = var2.Set;
                        var3 = var1.map;
                        var2 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var5 = var3.bind(var1)(var2);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var6 = var3;
                        var2 = new var6[var4](var5, var4);
                        var2 = var2 instanceof Object ? var2 : var3;
                        return var2;
                    case 121:
                        return var1;
                    case 124:
                        var1 = global;
                        var1 = var1.Set;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var6 = var2;
                        var1 = new var6[var1](var5);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    case 155:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var6.bind(var1)(var0);
        var _closure2_slot0 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93221: for (var _fun93221_ip = 0;;) switch (_fun93221_ip) {
                case 0:
                    var1 = arg0;
                    var3 = var1.guilds;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.unableToSyncDeletes;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var1 = arg0;
                        var1 = var1.id;
                        var0.id = var1;
                        return var0;
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.length;
                    var0 = 0;
                    if (!(var1 > var0)) {
                        _fun93221_ip = 106;
                        continue _fun93221
                    }
                case 56:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.guildsRequiringDeletedIdsSyncTransaction;
                    var0 = arg1;
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.putAll;
                    var0 = var0.bind(var1)(var2);
                case 106:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleBackgroundSync';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93224: for (var _fun93224_ip = 0;;) switch (_fun93224_ip) {
                case 0:
                    var1 = arg0;
                    var3 = var1.guilds;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun93225: for (var _fun93225_ip = 0;;) switch (_fun93225_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.data_mode;
                                var0 = 'partial';
                                var0 = var0 === var2;
                                if (!var0) {
                                    _fun93225_ip = 26;
                                    continue _fun93225
                                }
                            case 20:
                                var0 = var1.unable_to_sync_deletes;
                            case 26:
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var1 = arg0;
                        var1 = var1.id;
                        var0.id = var1;
                        return var0;
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.length;
                    var0 = 0;
                    if (!(var1 > var0)) {
                        _fun93224_ip = 106;
                        continue _fun93224
                    }
                case 56:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.guildsRequiringDeletedIdsSyncTransaction;
                    var0 = arg1;
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.putAll;
                    var0 = var0.bind(var1)(var2);
                case 106:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleGuildCreate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93227: for (var _fun93227_ip = 0;;) switch (_fun93227_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.guild;
                    var0 = var3.unableToSyncDeletes;
                    if (!var0) {
                        _fun93227_ip = 78;
                        continue _fun93227
                    }
                case 17:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.guildsRequiringDeletedIdsSyncTransaction;
                    var0 = arg1;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.put;
                    var0 = {};
                    var3 = var3.id;
                    var0.id = var3;
                    var0 = var1.bind(var2)(var0);
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleDeletedEntityIds';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.guildsRequiringDeletedIdsSyncTransaction;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.delete;
            var1 = arg0;
            var1 = var1.guild_id;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1646, 2]);