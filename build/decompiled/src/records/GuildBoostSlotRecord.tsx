// records/GuildBoostSlotRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun56278: for (var _fun56278_ip = 0;;) switch (_fun56278_ip) {
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
                _fun56278_ip = 74;
                continue _fun56278;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun56282: for (var _fun56282_ip = 0;;) switch (_fun56282_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun56282_ip = 65;
                        continue _fun56282
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun56282_ip = 103;
                    continue _fun56282;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.subscriptionId;
                    var0.subscriptionId = var2;
                    var2 = var1.premiumGuildSubscription;
                    var0.premiumGuildSubscription = var2;
                    var2 = var1.canceled;
                    var0.canceled = var2;
                    var2 = var1.cooldownEndsAt;
                    var0.cooldownEndsAt = var2;
                    var1 = var1.subscription;
                    var0.subscription = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'isOnCooldown';
        var5.key = var1;
        var1 = function() {
            _fun56283: for (var _fun56283_ip = 0;;) switch (_fun56283_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.cooldownEndsAt;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun56283_ip = 81;
                        continue _fun56283
                    }
                case 18:
                    var1 = global;
                    var4 = var1.Date;
                    var5 = var2.cooldownEndsAt;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var6 = var3;
                    var2 = new var6[var4](var5, var4);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = var3.getTime;
                    var2 = var2.bind(var3)();
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var0 = var2 >= var1;
                case 81:
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var6 = 'isAvailable';
        var5.key = var6;
        var6 = function() {
            _fun56284: for (var _fun56284_ip = 0;;) switch (_fun56284_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.premiumGuildSubscription;
                    var0 = null;
                    var0 = var0 == var1;
                    if (!var0) {
                        _fun56284_ip = 31;
                        continue _fun56284
                    }
                case 18:
                    var1 = var2.isOnCooldown;
                    var1 = var1.bind(var2)();
                    var0 = !var1;
                case 31:
                    return var0;
            }
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0, arg1() {
            _fun56285: for (var _fun56285_ip = 0;;) switch (_fun56285_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var3 = var1.id;
                    var0.id = var3;
                    var3 = var1.subscription_id;
                    var0.subscriptionId = var3;
                    var4 = var1.premium_guild_subscription;
                    var3 = null;
                    var4 = var3 != var4;
                    if (!var4) {
                        _fun56285_ip = 82;
                        continue _fun56285
                    }
                case 47:
                    var4 = {};
                    var5 = var1.premium_guild_subscription;
                    var5 = var5.id;
                    var4.id = var5;
                    var5 = var1.premium_guild_subscription;
                    var5 = var5.guild_id;
                    var4.guildId = var5;
                    var3 = var4;
                case 82:
                    var0.premiumGuildSubscription = var3;
                    var3 = var1.canceled;
                    var0.canceled = var3;
                    var1 = var1.cooldown_ends_at;
                    var0.cooldownEndsAt = var1;
                    var1 = arg1;
                    var0.subscription = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var1;
                    var6 = var0;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 6;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/GuildBoostSlotRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 2]);