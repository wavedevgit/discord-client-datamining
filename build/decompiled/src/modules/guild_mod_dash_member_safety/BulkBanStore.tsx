// modules/guild_mod_dash_member_safety/BulkBanStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun43357: for (var _fun43357_ip = 0;;) switch (_fun43357_ip) {
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
                _fun43357_ip = 74;
                continue _fun43357;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
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
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = var1.Set;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var12 = var7;
    var6 = new var12[var6](var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot6 = var6;
    var1 = var1.Set;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var12 = var6;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun43361: for (var _fun43361_ip = 0;;) switch (_fun43361_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun43361_ip = 69;
                        continue _fun43361
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun43361_ip = 105;
                    continue _fun43361;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasPendingBulkBan';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot6;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'consumeCompletedBeforeStarted';
        var4.key = var6;
        var5 = function arg0, arg1() {
            var2 = _closure1_slot7;
            var1 = var2.delete;
            var0 = global;
            var0 = var0.HermesInternal;
            var6 = var0.concat;
            var5 = '';
            var4 = arg0;
            var3 = ':';
            var0 = arg1;
            var0 = var6.bind(var5)(var4, var3, var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'BulkBanStore';
    var6.displayName = var1;
    var1 = 7;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        var2 = _closure1_slot6;
        var1 = var2.add;
        var0 = arg0;
        var0 = var0.guildId;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.GUILD_BULK_BAN_STARTED = var7;
    var7 = function arg0() {
        _fun43366: for (var _fun43366_ip = 0;;) switch (_fun43366_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot6;
                var3 = var4.has;
                var2 = var0.guildId;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun43366_ip = 32;
                    continue _fun43366
                }
            case 28:
                var2 = false;
                return var2;
            case 32:
                var2 = _closure1_slot6;
                var1 = var2.delete;
                var0 = var0.guildId;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_BULK_BAN_FAILED = var7;
    var7 = function arg0() {
        _fun43367: for (var _fun43367_ip = 0;;) switch (_fun43367_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot6;
                var3 = var4.has;
                var2 = var0.guildId;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun43367_ip = 93;
                    continue _fun43367
                }
            case 28:
                var3 = _closure1_slot5;
                var2 = var3.getId;
                var8 = var2.bind(var3)();
                var4 = _closure1_slot7;
                var3 = var4.add;
                var7 = var0.guildId;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = '';
                var2 = ':';
                var2 = var6.bind(var5)(var7, var2, var8);
                var2 = var3.bind(var4)(var2);
                var2 = false;
                return var2;
            case 93:
                var2 = _closure1_slot6;
                var1 = var2.delete;
                var0 = var0.guildId;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_BULK_BAN_UPDATE = var7;
    var3 = function() {
        var2 = _closure1_slot6;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot7;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_mod_dash_member_safety/BulkBanStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1217, 566, 807, 2]);