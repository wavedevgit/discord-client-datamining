// modules/guild_profile/GuildPopoutStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun96532: for (var _fun96532_ip = 0;;) switch (_fun96532_ip) {
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
                _fun96532_ip = 76;
                continue _fun96532;
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
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
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var7 = 'unset';
    var1.UNSET = var7;
    var7 = 'fetching';
    var1.FETCHING = var7;
    var7 = 'failed';
    var1.FAILED = var7;
    var7 = 'succeeded';
    var1.SUCCEEDED = var7;
    var _closure1_slot8 = var1;
    var1 = {};
    var7 = {};
    var1.guilds = var7;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GuildPopoutStore, environment: var5
            _fun96536: for (var _fun96536_ip = 0;;) switch (_fun96536_ip) {
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
                        _fun96536_ip = 69;
                        continue _fun96536
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96536_ip = 105;
                    continue _fun96536;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'isFetchingGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun96538: for (var _fun96538_ip = 0;;) switch (_fun96538_ip) {
                case 0:
                    var0 = _closure1_slot9;
                    var2 = var0.guilds;
                    var0 = arg0;
                    var2 = var2[var0];
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun96538_ip = 49;
                        continue _fun96538
                    }
                case 29:
                    var2 = var2.fetchState;
                    var1 = _closure1_slot8;
                    var1 = var1.FETCHING;
                    var0 = var2 === var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun96539: for (var _fun96539_ip = 0;;) switch (_fun96539_ip) {
                case 0:
                    var0 = _closure1_slot9;
                    var1 = var0.guilds;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun96539_ip = 34;
                        continue _fun96539
                    }
                case 29:
                    var0 = var1.guild;
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasFetchFailed';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun96540: for (var _fun96540_ip = 0;;) switch (_fun96540_ip) {
                case 0:
                    var0 = _closure1_slot9;
                    var2 = var0.guilds;
                    var0 = arg0;
                    var2 = var2[var0];
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun96540_ip = 49;
                        continue _fun96540
                    }
                case 29:
                    var2 = var2.fetchState;
                    var1 = _closure1_slot8;
                    var1 = var1.FAILED;
                    var0 = var2 === var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildPopoutStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleFetchStart, environment: var3
        var0 = arg0;
        var2 = var0.guildId;
        var4 = _closure1_slot9;
        var1 = var4.guilds;
        var0 = {};
        var4 = var4.guilds;
        var5 = var4[var2];
        var6 = var0;
        var4 = copyDataProperties(var6, var5);
        var3 = _closure1_slot8;
        var4 = var3.FETCHING;
        var3 = 'fetchState';
        var0[var3] = var4;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_POPOUT_FETCH_START = var8;
    var8 = function(arg0) { // Original name: handleFetchSuccess, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var5 = var0.guild;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.makeDiscoverableGuild;
        var6 = var1.bind(var2)(var5);
        var5 = _closure1_slot9;
        var2 = var5.guilds;
        var1 = {};
        var5 = var5.guilds;
        var7 = var5[var3];
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var5 = 'guild';
        var1[var5] = var6;
        var4 = _closure1_slot8;
        var5 = var4.SUCCEEDED;
        var4 = 'fetchState';
        var1[var4] = var5;
        var2[var3] = var1;
        return var0;
    };
    var1.GUILD_POPOUT_FETCH_SUCCESS = var8;
    var3 = function(arg0) { // Original name: handleFetchFailure, environment: var3
        var0 = arg0;
        var2 = var0.guildId;
        var4 = _closure1_slot9;
        var1 = var4.guilds;
        var0 = {};
        var4 = var4.guilds;
        var5 = var4[var2];
        var6 = var0;
        var4 = copyDataProperties(var6, var5);
        var3 = _closure1_slot8;
        var4 = var3.FAILED;
        var3 = 'fetchState';
        var0[var3] = var4;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_POPOUT_FETCH_FAILURE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_profile/GuildPopoutStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 5576, 566, 806, 2]);