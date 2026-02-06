// stores/billing/GuildBoostSlotStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun55772: for (var _fun55772_ip = 0;;) switch (_fun55772_ip) {
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
                _fun55772_ip = 74;
                continue _fun55772;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.guildBoostSlot;
        var1 = {};
        var4 = _closure1_slot8;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = var3.id;
        var1[var2] = var3;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var0 = function() {
        _fun55776: for (var _fun55776_ip = 0;;) switch (_fun55776_ip) {
            case 0:
                var1 = {};
                var0 = global;
                var4 = var0.Object;
                var3 = var4.values;
                var2 = _closure1_slot8;
                var4 = var3.bind(var4)(var2);
                var2 = var4.length;
                var3 = 0;
                var2 = var3 < var2;
                if (!var2) {
                    _fun55776_ip = 93;
                    continue _fun55776
                }
            case 41:
                var5 = var4[var3];
                var2 = var5.id;
                var1[var2] = var5;
                var7 = _closure1_slot5;
                var6 = var7.getSubscriptionById;
                var2 = var5.subscriptionId;
                var2 = var6.bind(var7)(var2);
                var5.subscription = var2;
                var3 = var3 + 1;
                var2 = var4.length;
                if (var3 < var2) {
                    _fun55776_ip = 41;
                    continue _fun55776
                }
            case 93:
                _closure1_slot8 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = false;
    var _closure1_slot6 = var1;
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun55778: for (var _fun55778_ip = 0;;) switch (_fun55778_ip) {
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
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55778_ip = 69;
                        continue _fun55778
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun55778_ip = 105;
                    continue _fun55778;
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
            var3 = this;
            var2 = var3.syncWith;
            var4 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot10;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasFetched';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'boostSlots';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getGuildBoostSlot';
        var4.key = var6;
        var5 = function arg0() {
            var1 = _closure1_slot8;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GuildBoostSlotStore';
    var6.displayName = var1;
    var1 = 7;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = true;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_BOOST_SLOTS_FETCH = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.guildBoostSlots;
        var0 = {};
        _closure1_slot8 = var0;
        var2 = var3.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = _closure1_slot8;
            var0 = var2.id;
            var1[var0] = var2;
            var0 = undefined;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        var0 = false;
        _closure1_slot7 = var0;
        var0 = true;
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_BOOST_SLOTS_FETCH_SUCCESS = var8;
    var1.GUILD_BOOST_SLOT_UPDATE_SUCCESS = var7;
    var1.GUILD_BOOST_SLOT_CREATE = var7;
    var1.GUILD_BOOST_SLOT_UPDATE = var7;
    var3 = function() {
        var0 = {};
        _closure1_slot8 = var0;
        var0 = false;
        _closure1_slot6 = var0;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
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
    var3 = 'stores/billing/GuildBoostSlotStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3119, 566, 806, 2]);