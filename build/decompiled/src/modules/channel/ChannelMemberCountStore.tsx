// modules/channel/ChannelMemberCountStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun72171: for (var _fun72171_ip = 0;;) switch (_fun72171_ip) {
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
                _fun72171_ip = 76;
                continue _fun72171;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var8 = var1.Object;
    var7 = var8.freeze;
    var1 = null;
    var6 = {
        'online': null,
        'total': null
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var6 = {};
    var _closure1_slot10 = var6;
    var6 = {};
    var _closure1_slot11 = var6;
    var _closure1_slot12 = var1;
    var1 = 8;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ChannelMemberCountStore, environment: var5
            _fun72175: for (var _fun72175_ip = 0;;) switch (_fun72175_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun72175_ip = 69;
                        continue _fun72175
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun72175_ip = 105;
                    continue _fun72175;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun72176: for (var _fun72176_ip = 0;;) switch (_fun72176_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var4 = var5.waitFor;
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun72176_ip = 39;
                        continue _fun72176
                    }
                case 35:
                    var1 = _closure1_slot10;
                case 39:
                    _closure1_slot11 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMemberCount';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun72178: for (var _fun72178_ip = 0;;) switch (_fun72178_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun72178_ip = 24;
                        continue _fun72178
                    }
                case 20:
                    var0 = _closure1_slot9;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'requestCount';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            var3 = arg0;
            var2 = arg1;
            var1 = {};
            var1.guildId = var3;
            var1.channelId = var2;
            _closure1_slot12 = var1;
            var1 = _closure1_slot7;
            var0 = var1.getSocket;
            var1 = var0.bind(var1)();
            var0 = var1.requestChannelMemberCount;
            var0 = var0.bind(var1)(var3, var2);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ChannelMemberCountStore';
    var6.displayName = var1;
    var1 = 'channelMemberCounts';
    var6.persistKey = var1;
    var1 = 9;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() { // Original name: handleConnectionOpen, environment: var3
        _fun72180: for (var _fun72180_ip = 0;;) switch (_fun72180_ip) {
            case 0:
                var2 = _closure1_slot12;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun72180_ip = 57;
                    continue _fun72180
                }
            case 13:
                var2 = _closure1_slot7;
                var0 = var2.getSocket;
                var4 = var0.bind(var2)();
                var3 = var4.requestChannelMemberCount;
                var0 = _closure1_slot12;
                var2 = var0.guildId;
                var0 = _closure1_slot12;
                var0 = var0.channelId;
                var0 = var3.bind(var4)(var2, var0);
            case 57:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.keys;
                var1 = _closure1_slot11;
                var3 = var2.bind(var3)(var1);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun72181: for (var _fun72181_ip = 0;;) switch (_fun72181_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot8;
                            var2 = var3.getChannel;
                            var3 = var2.bind(var3)(var1);
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun72181_ip = 34;
                                continue _fun72181
                            }
                        case 26:
                            var0 = _closure1_slot11;
                            var0 = delete var0[var1];
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var7;
    var3 = function(arg0) { // Original name: handleMemberCountUpdate, environment: var3
        _fun72182: for (var _fun72182_ip = 0;;) switch (_fun72182_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var4 = var0.online;
                var3 = var0.total;
                var1 = null;
                var0 = var1 == var4;
                if (!var0) {
                    _fun72182_ip = 33;
                    continue _fun72182
                }
            case 29:
                var0 = var1 == var3;
            case 33:
                if (var0) {
                    _fun72182_ip = 59;
                    continue _fun72182
                }
            case 36:
                var1 = _closure1_slot11;
                var0 = {};
                var0.online = var4;
                var0.total = var3;
                var1[var2] = var0;
            case 59:
                var0 = true;
                return var0;
        }
    };
    var1.CHANNEL_MEMBER_COUNT_UPDATE = var3;
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
    var3 = 10;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/ChannelMemberCountStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3433, 1372, 21, 566, 806, 2]);