// modules/app_database/modules/KvCacheVersion.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.HELLO_KEY;
    var _closure1_slot5 = var7;
    var7 = var3.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
    var _closure1_slot6 = var7;
    var7 = var3.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY;
    var _closure1_slot7 = var7;
    var7 = var3.VERSION_TO_SKIP_READING_THE_DATABASE;
    var _closure1_slot8 = var7;
    var3 = var3.VERSION_TO_SKIP_READING_THE_DATABASE_KEY;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'KvCacheVersion';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot10 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot3;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = false;
            var2.hasSuccessfullyConnected = var1;
            var1 = {};
            var4 = function arg0, arg1() {
                var2 = _closure3_slot0;
                var1 = var2.handleWrite;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1.BACKGROUND_SYNC = var4;
            var4 = function() {
                var1 = _closure3_slot0;
                var0 = var1.handleConnectionOpen;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.CONNECTION_OPEN = var4;
            var3 = function arg0, arg1() {
                var2 = _closure3_slot0;
                var1 = var2.handleWrite;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1.WRITE_CACHES = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot2 = var2;
        var4 = {};
        var1 = 'okAsync';
        var4.key = var1;
        var7 = _closure1_slot2;
        var1 = undefined;
        var0 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun93843: for (var _fun93843_ip = 0;;) switch (_fun93843_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93843_ip = 93;
                            continue _fun93843
                        }
                    case 7:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.cache;
                        var1 = arg0;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.get;
                        var1 = _closure1_slot9;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 64);
                    case 62:
                        return var1;
                    case 64:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93843_ip = 90;
                            continue _fun93843
                        }
                    case 70:
                        var2 = null;
                        var4 = var2 == var1;
                        if (var4) {
                            _fun93843_ip = 87;
                            continue _fun93843
                        }
                    case 79:
                        var3 = _closure1_slot8;
                        var2 = var1 === var3;
                    case 87:
                        return var2;
                    case 90:
                        return var1;
                    case 93:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var7.bind(var1)(var0);
        var _closure2_slot1 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'canUseGuildVersions';
        var4.key = var6;
        var6 = function() {
            _fun93845: for (var _fun93845_ip = 0;;) switch (_fun93845_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.hasSuccessfullyConnected;
                    if (var0) {
                        _fun93845_ip = 24;
                        continue _fun93845
                    }
                case 12:
                    var0 = var1.doesDatabaseVersionMatchJsConstants;
                    var0 = var0.bind(var1)();
                    _fun93845_ip = 45;
                    continue _fun93845;
                case 24:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.resolve;
                    var1 = true;
                    var0 = var2.bind(var3)(var1);
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'doesDatabaseVersionMatchJsConstants';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun93847: for (var _fun93847_ip = 0;;) switch (_fun93847_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93847_ip = 165;
                            continue _fun93847
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 5;
                        var1 = var4[var1];
                        var4 = undefined;
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.forceResyncVersion;
                        var6 = var1.bind(var2)();
                        var2 = null;
                        if (!(var2 != var6)) {
                            _fun93847_ip = 160;
                            continue _fun93847
                        }
                    case 51:
                        var5 = var6.get;
                        var1 = _closure1_slot7;
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 69);
                    case 67:
                        return var1;
                    case 69:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun93847_ip = 157;
                            continue _fun93847
                        }
                    case 75:
                        var2 = var2 == var1;
                        var9 = undefined;
                        if (var2) {
                            _fun93847_ip = 90;
                            continue _fun93847
                        }
                    case 84:
                        var9 = var1.version;
                    case 90:
                        var2 = _closure1_slot6;
                        var2 = var9 === var2;
                        if (var2) {
                            _fun93847_ip = 154;
                            continue _fun93847
                        }
                    case 101:
                        var5 = _closure1_slot10;
                        var4 = var5.info;
                        var8 = _closure1_slot6;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var6 = 'KVStore version mismatch: ';
                        var3 = ' vs ';
                        var3 = var7.bind(var6)(var9, var3, var8);
                        var3 = var4.bind(var5)(var3);
                        var2 = false;
                    case 154:
                        return var2;
                    case 157:
                        return var1;
                    case 160:
                        var1 = false;
                        return var1;
                    case 165:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var1)(var6);
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
        var0[2] = var4;
        var4 = {};
        var6 = 'handleClear';
        var4.key = var6;
        var6 = function() {
            var1 = false;
            var0 = this;
            var0.hasSuccessfullyConnected = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function() {
            var1 = true;
            var0 = this;
            var0.hasSuccessfullyConnected = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleWrite';
        var4.key = var6;
        var6 = function arg0() {
            var3 = arg0;
            var1 = true;
            var0 = this;
            var0.hasSuccessfullyConnected = var1;
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var6 = var4[var1];
            var0 = undefined;
            var7 = var2.bind(var0)(var6);
            var6 = var7.cacheTransaction;
            var9 = var6.bind(var7)(var3);
            var8 = var9.put;
            var7 = _closure1_slot5;
            var6 = '👋';
            var6 = var8.bind(var9)(var7, var6);
            var6 = var4[var1];
            var7 = var2.bind(var0)(var6);
            var6 = var7.cacheTransaction;
            var9 = var6.bind(var7)(var3);
            var8 = var9.put;
            var7 = _closure1_slot9;
            var6 = _closure1_slot8;
            var6 = var8.bind(var9)(var7, var6);
            var1 = var4[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.forceResyncVersionTransaction;
            var4 = var1.bind(var2)(var3);
            var3 = var4.put;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = _closure1_slot6;
            var1.version = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var5 = function() {
            var1 = false;
            var0 = this;
            var0.hasSuccessfullyConnected = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
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
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/KvCacheVersion.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 477, 3, 1648, 2]);