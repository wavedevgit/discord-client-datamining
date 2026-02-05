// modules/premium/powerups/GuildPowerupsNotificationStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun102306: for (var _fun102306_ip = 0;;) switch (_fun102306_ip) {
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
                _fun102306_ip = 76;
                continue _fun102306;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun102310: for (var _fun102310_ip = 0;;) switch (_fun102310_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun102310_ip = 69;
                        continue _fun102310
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun102310_ip = 105;
                    continue _fun102310;
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
        var0 = 'getState';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'initialize';
        var4.key = var6;
        var6 = function arg0() {
            _fun102312: for (var _fun102312_ip = 0;;) switch (_fun102312_ip) {
                case 0:
                    var1 = arg0;
                    var6 = this;
                    var5 = var6.waitFor;
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun102312_ip = 44;
                        continue _fun102312
                    }
                case 40:
                    _closure1_slot10 = var1;
                case 44:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getNotificationStateForGuild';
        var4.key = var6;
        var5 = function arg0() {
            var1 = _closure1_slot10;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildPowerupsNotificationStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = new Array(1);
    var8 = function(arg0) { // Environment: var3
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = global;
        var3 = var2.Object;
        var2 = var3.entries;
        var3 = var2.bind(var3)(var0);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun102315: for (var _fun102315_ip = 0;;) switch (_fun102315_ip) {
                case 0:
                    var5 = arg0;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var2 = var5().value;
                    var3 = var1;
                    var0 = undefined;
                    var4 = var3 === var0;
                    var3 = undefined;
                    if (var4) {
                        _fun102315_ip = 27;
                        continue _fun102315
                    }
                case 24:
                    var3 = var2;
                case 27:
                    var2 = undefined;
                    if (var4) {
                        _fun102315_ip = 57;
                        continue _fun102315
                    }
                case 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var0;
                    var2 = undefined;
                    var4 = var5;
                    if (var5) {
                        _fun102315_ip = 57;
                        continue _fun102315
                    }
                case 51:
                    var2 = var6;
                    var4 = var5;
                case 57:
                    if (var4) {
                        _fun102315_ip = 63;
                        continue _fun102315
                    }
                case 60:
                    var1.return();
                case 63:
                    var1 = _closure2_slot0;
                    var1[var3] = var2;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1[0] = var8;
    var7.migrations = var1;
    var1 = 10;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun102316: for (var _fun102316_ip = 0;;) switch (_fun102316_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var1 = _closure1_slot7;
                var0 = var1.getGuild;
                var3 = var0.bind(var1)(var4);
                var9 = null;
                var5 = var9 == var3;
                var0 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun102316_ip = 44;
                    continue _fun102316
                }
            case 38:
                var1 = var3.premiumSubscriberCount;
            case 44:
                var3 = var9 != var1;
                var5 = 0;
                if (!var3) {
                    _fun102316_ip = 56;
                    continue _fun102316
                }
            case 53:
                var5 = var1;
            case 56:
                var3 = _closure1_slot9;
                var1 = var3.getStateForGuild;
                var12 = var1.bind(var3)(var4);
                var3 = _closure1_slot8;
                var1 = var3.getStateForGuild;
                var13 = var1.bind(var3)(var4);
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 8;
                var1 = var6[var1];
                var6 = var3.bind(var0)(var1);
                var3 = var6.getExpiringGuildEntitlements;
                var7 = global;
                var11 = var7.Object;
                var8 = var11.values;
                var14 = var9 == var12;
                var1 = undefined;
                if (var14) {
                    _fun102316_ip = 140;
                    continue _fun102316
                }
            case 134:
                var1 = var12.unlockedPowerups;
            case 140:
                if (!(var9 == var1)) {
                    _fun102316_ip = 146;
                    continue _fun102316
                }
            case 144:
                var1 = {};
            case 146:
                var16 = var8.bind(var11)(var1);
                var1 = new Array(0);
                var17 = var1;
                var15 = 0;
                var10 = arraySpread(var17, var16, var15);
                var12 = var7.Object;
                var11 = var12.values;
                var14 = var9 == var13;
                var8 = undefined;
                if (var14) {
                    _fun102316_ip = 190;
                    continue _fun102316
                }
            case 184:
                var8 = var13.entitlements;
            case 190:
                if (!(var9 == var8)) {
                    _fun102316_ip = 196;
                    continue _fun102316
                }
            case 194:
                var8 = {};
            case 196:
                var16 = var11.bind(var12)(var8);
                var17 = var1;
                var15 = var10;
                var8 = arraySpread(var17, var16, var15);
                var10 = var3.bind(var6)(var1);
                var1 = {};
                var16 = _closure1_slot10;
                var17 = var1;
                var3 = copyDataProperties(var17, var16);
                var3 = {};
                var8 = var7.Date;
                var11 = var10.length;
                var6 = 1;
                var6 = var11 - var6;
                var10 = var10[var6];
                var11 = var9 == var10;
                var6 = undefined;
                if (var11) {
                    _fun102316_ip = 268;
                    continue _fun102316
                }
            case 262:
                var6 = var10.ends_at;
            case 268:
                if (!(var9 == var6)) {
                    _fun102316_ip = 287;
                    continue _fun102316
                }
            case 272:
                var9 = var7.Date;
                var7 = var9.now;
                var6 = var7.bind(var9)();
            case 287:
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var18 = var7;
                var17 = var6;
                var6 = new var18[var8](var17, var16);
                var7 = var6 instanceof Object ? var6 : var7;
                var6 = var7.getTime;
                var6 = var6.bind(var7)();
                var3.lastSeenWarningNotification = var6;
                var3.lastBoostCount = var5;
                var1[var4] = var3;
                _closure1_slot10 = var1;
                return var0;
        }
    };
    var1.GUILD_POWERUPS_ACK_NOTIFICATION = var8;
    var3 = function() {
        var0 = {};
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_POWERUPS_RESET_NOTIFICATIONS = var3;
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/GuildPowerupsNotificationStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1410, 6734, 6736, 13354, 566, 806, 2]);