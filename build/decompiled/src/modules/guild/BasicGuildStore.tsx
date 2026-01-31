// modules/guild/BasicGuildStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun55340: for (var _fun55340_ip = 0;;) switch (_fun55340_ip) {
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
                _fun55340_ip = 74;
                continue _fun55340;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var1 = 0;
    var6 = var4[var1];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var _closure1_slot5 = var1;
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: BasicGuildStore, environment: var5
            _fun55344: for (var _fun55344_ip = 0;;) switch (_fun55344_ip) {
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
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55344_ip = 69;
                        continue _fun55344
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun55344_ip = 105;
                    continue _fun55344;
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
        var0 = 'getGuild';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun55345: for (var _fun55345_ip = 0;;) switch (_fun55345_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun55345_ip = 33;
                        continue _fun55345
                    }
                case 20:
                    var1 = 'type';
                    var1 = var1 in var0;
                    if (var1) {
                        _fun55345_ip = 33;
                        continue _fun55345
                    }
                case 31:
                    return var0;
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'isGuildFetching';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun55346: for (var _fun55346_ip = 0;;) switch (_fun55346_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun55346_ip = 31;
                        continue _fun55346
                    }
                case 23:
                    var2 = 'type';
                    var0 = var2 in var1;
                case 31:
                    if (!var0) {
                        _fun55346_ip = 47;
                        continue _fun55346
                    }
                case 34:
                    var2 = var1.type;
                    var1 = 'loading';
                    var0 = var1 === var2;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildOrStatus';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot6;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getVersion';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot5;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'BasicGuildStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function(arg0) { // Original name: handleBasicGuildFetch, environment: var3
        var2 = _closure1_slot6;
        var0 = arg0;
        var1 = var0.guildId;
        var0 = {};
        var3 = 'loading';
        var0.type = var3;
        var2[var1] = var0;
        var0 = false;
        return var0;
    };
    var1.BASIC_GUILD_FETCH = var7;
    var7 = function(arg0) { // Original name: handleBasicGuildFetchSuccess, environment: var3
        var0 = arg0;
        var3 = _closure1_slot6;
        var2 = var0.guildId;
        var0 = var0.guildInfo;
        var3[var2] = var0;
        var0 = _closure1_slot5;
        var0 = var0 + 1;
        _closure1_slot5 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BASIC_GUILD_FETCH_SUCCESS = var7;
    var3 = function(arg0) { // Original name: handleBasicGuildFetchFailure, environment: var3
        var2 = _closure1_slot6;
        var0 = arg0;
        var1 = var0.guildId;
        var0 = {};
        var3 = 'failed';
        var0.type = var3;
        var2[var1] = var0;
        var0 = false;
        return var0;
    };
    var1.BASIC_GUILD_FETCH_FAILURE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild/BasicGuildStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);