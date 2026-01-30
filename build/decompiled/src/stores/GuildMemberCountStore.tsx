// stores/GuildMemberCountStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun17789: for (var _fun17789_ip = 0;;) switch (_fun17789_ip) {
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
                _fun17789_ip = 74;
                continue _fun17789;
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
    var7 = function(arg0) { // Original name: handleInviteData, environment: var3
        _fun17792: for (var _fun17792_ip = 0;;) switch (_fun17792_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.invite;
                var1 = var0.guild;
                var3 = var0.approximate_presence_count;
                var2 = null;
                var5 = var2 == var1;
                var0 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun17792_ip = 38;
                    continue _fun17792
                }
            case 33:
                var4 = var1.id;
            case 38:
                if (!(var2 != var4)) {
                    _fun17792_ip = 64;
                    continue _fun17792
                }
            case 42:
                if (!(var2 != var3)) {
                    _fun17792_ip = 64;
                    continue _fun17792
                }
            case 46:
                var2 = _closure1_slot6;
                var1 = var1.id;
                var2[var1] = var3;
                return var0;
            case 64:
                var0 = false;
                return var0;
        }
    };
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
    var1 = {};
    var _closure1_slot5 = var1;
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GuildMemberCountStore, environment: var5
            _fun17794: for (var _fun17794_ip = 0;;) switch (_fun17794_ip) {
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
                        _fun17794_ip = 69;
                        continue _fun17794
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun17794_ip = 105;
                    continue _fun17794;
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
        var0 = 'getMemberCounts';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot5;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMemberCount';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun17796: for (var _fun17796_ip = 0;;) switch (_fun17796_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 != var2;
                    if (!var1) {
                        _fun17796_ip = 23;
                        continue _fun17796
                    }
                case 12:
                    var1 = _closure1_slot5;
                    var0 = var1[var2];
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getOnlineCount';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun17797: for (var _fun17797_ip = 0;;) switch (_fun17797_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 != var2;
                    if (!var1) {
                        _fun17797_ip = 23;
                        continue _fun17797
                    }
                case 12:
                    var1 = _closure1_slot6;
                    var0 = var1[var2];
                case 23:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GuildMemberCountStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleConnectionOpen, environment: var3
        var0 = arg0;
        var2 = var0.guilds;
        var0 = {};
        _closure1_slot5 = var0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = _closure1_slot5;
            var1 = var0.id;
            var0 = var0.member_count;
            var2[var1] = var0;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleOverlayInitialize, environment: var3
        var1 = {};
        var0 = arg0;
        var2 = var0.guildMemberCounts;
        var3 = var1;
        var0 = copyDataProperties(var3, var2);
        _closure1_slot5 = var1;
        var0 = undefined;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var8;
    var8 = function(arg0) { // Original name: handleGuildCreate, environment: var3
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot5;
        var1 = var0.id;
        var0 = var0.member_count;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_CREATE = var8;
    var8 = function(arg0) { // Original name: handleGuildDelete, environment: var3
        _fun17802: for (var _fun17802_ip = 0;;) switch (_fun17802_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var3 = _closure1_slot5;
                var2 = var0.id;
                var2 = var3[var2];
                var3 = null;
                if (!(var3 == var2)) {
                    _fun17802_ip = 47;
                    continue _fun17802
                }
            case 30:
                var4 = _closure1_slot6;
                var2 = var0.id;
                var2 = var4[var2];
                if (!(var3 != var2)) {
                    _fun17802_ip = 77;
                    continue _fun17802
                }
            case 47:
                var3 = _closure1_slot5;
                var2 = var0.id;
                var2 = delete var3[var2];
                var1 = _closure1_slot6;
                var0 = var0.id;
                var0 = delete var1[var0];
                var0 = undefined;
                return var0;
            case 77:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_DELETE = var8;
    var8 = function(arg0) { // Original name: handleGuildMemberListUpdate, environment: var3
        _fun17803: for (var _fun17803_ip = 0;;) switch (_fun17803_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var5 = var0.memberCount;
                var2 = var0.onlineCount;
                var0 = _closure1_slot5;
                var4 = var0[var3];
                var0 = false;
                if (!(var4 !== var5)) {
                    _fun17803_ip = 47;
                    continue _fun17803
                }
            case 37:
                var4 = _closure1_slot5;
                var4[var3] = var5;
                var0 = true;
            case 47:
                var4 = _closure1_slot6;
                var4 = var4[var3];
                if (!(var4 !== var2)) {
                    _fun17803_ip = 69;
                    continue _fun17803
                }
            case 59:
                var1 = _closure1_slot6;
                var1[var3] = var2;
                var0 = true;
            case 69:
                return var0;
        }
    };
    var1.GUILD_MEMBER_LIST_UPDATE = var8;
    var1.INVITE_ACCEPT_SUCCESS = var7;
    var1.INVITE_RESOLVE_SUCCESS = var7;
    var3 = function(arg0) { // Original name: handleOnlineCountUpdate, environment: var3
        _fun17804: for (var _fun17804_ip = 0;;) switch (_fun17804_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = var0.count;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun17804_ip = 39;
                    continue _fun17804
                }
            case 20:
                if (!(var0 != var1)) {
                    _fun17804_ip = 39;
                    continue _fun17804
                }
            case 24:
                var0 = _closure1_slot6;
                var0[var2] = var1;
                var0 = undefined;
                return var0;
            case 39:
                var0 = false;
                return var0;
        }
    };
    var1.ONLINE_GUILD_MEMBER_COUNT_UPDATE = var3;
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
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildMemberCountStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);