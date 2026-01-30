// modules/stage_channels/StageInstanceStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun16149: for (var _fun16149_ip = 0;;) switch (_fun16149_ip) {
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
                _fun16149_ip = 74;
                continue _fun16149;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function(arg0, arg1) { // Original name: addStageInstancesForGuild, environment: var3
        _fun16152: for (var _fun16152_ip = 0;;) switch (_fun16152_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var1 = {};
                var4 = _closure1_slot6;
                var6 = var4[var2];
                var4 = null;
                if (!(var4 == var6)) {
                    _fun16152_ip = 29;
                    continue _fun16152
                }
            case 27:
                var6 = {};
            case 29:
                var9 = var1;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var _closure2_slot0 = var1;
                if (!(var4 != var5)) {
                    _fun16152_ip = 62;
                    continue _fun16152
                }
            case 47:
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var3
                    var2 = arg0;
                    var1 = _closure1_slot7;
                    var0 = var2.channel_id;
                    var1[var0] = var2;
                    var1 = _closure2_slot0;
                    var0 = var2.channel_id;
                    var1[var0] = var2;
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
            case 62:
                var0 = _closure1_slot6;
                var0[var2] = var1;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var8 = function(arg0) { // Original name: handleStageInstanceCreateOrUpdate, environment: var3
        var0 = arg0;
        var0 = var0.instance;
        var3 = _closure1_slot9;
        var2 = var0.guild_id;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var0 = function(arg0, arg1) { // Original name: doDelete, environment: var3
        _fun16155: for (var _fun16155_ip = 0;;) switch (_fun16155_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = _closure1_slot7;
                var1 = delete var1[var3];
                var5 = null;
                if (!(var5 != var2)) {
                    _fun16155_ip = 61;
                    continue _fun16155
                }
            case 23:
                var1 = {};
                var4 = _closure1_slot6;
                var4 = var4[var2];
                if (!(var5 == var4)) {
                    _fun16155_ip = 39;
                    continue _fun16155
                }
            case 37:
                var4 = {};
            case 39:
                var7 = var1;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var3 = delete var1[var3];
                var0 = _closure1_slot6;
                var0[var2] = var1;
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildScheduledEventPrivacyLevel;
    var _closure1_slot5 = var1;
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: StageInstanceStore, environment: var5
            _fun16157: for (var _fun16157_ip = 0;;) switch (_fun16157_ip) {
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
                        _fun16157_ip = 69;
                        continue _fun16157
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun16157_ip = 105;
                    continue _fun16157;
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
        var0 = 'getStageInstanceByChannel';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun16158: for (var _fun16158_ip = 0;;) switch (_fun16158_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun16158_ip = 13;
                        continue _fun16158
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot7;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'isLive';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.getStageInstanceByChannel;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isPublic';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun16160: for (var _fun16160_ip = 0;;) switch (_fun16160_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    var2 = var1 == var0;
                    var1 = undefined;
                    if (var2) {
                        _fun16160_ip = 34;
                        continue _fun16160
                    }
                case 28:
                    var1 = var0.privacy_level;
                case 34:
                    var0 = _closure1_slot5;
                    var0 = var0.PUBLIC;
                    var0 = var1 === var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getStageInstancesByGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun16161: for (var _fun16161_ip = 0;;) switch (_fun16161_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun16161_ip = 28;
                        continue _fun16161
                    }
                case 9:
                    var0 = _closure1_slot6;
                    var0 = var0[var2];
                    if (!(var1 == var0)) {
                        _fun16161_ip = 26;
                        continue _fun16161
                    }
                case 24:
                    var0 = {};
                case 26:
                    _fun16161_ip = 30;
                    continue _fun16161;
                case 28:
                    var0 = {};
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAllStageInstances';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'StageInstanceStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function(arg0) { // Original name: handleConnectionOpen, environment: var3
        var0 = arg0;
        var2 = var0.guilds;
        var0 = {};
        _closure1_slot6 = var0;
        var0 = {};
        _closure1_slot7 = var0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = _closure1_slot9;
            var2 = var0.id;
            var1 = var0.stage_instances;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var9;
    var9 = function(arg0) { // Original name: handleGuildCreate, environment: var3
        var0 = arg0;
        var0 = var0.guild;
        var3 = _closure1_slot9;
        var2 = var0.id;
        var1 = var0.stage_instances;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.GUILD_CREATE = var9;
    var9 = function(arg0) { // Original name: handleGuildDelete, environment: var3
        _fun16166: for (var _fun16166_ip = 0;;) switch (_fun16166_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var3 = _closure1_slot6;
                var2 = var0.id;
                var2 = var3[var2];
                var3 = null;
                if (!(var3 == var2)) {
                    _fun16166_ip = 32;
                    continue _fun16166
                }
            case 30:
                var2 = {};
            case 32:
                var1 = _closure1_slot6;
                var0 = var0.id;
                var0 = delete var1[var0];
                var0 = global;
                var1 = var0.Object;
                var0 = var1.keys;
                var2 = var0.bind(var1)(var2);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = arg0;
                    var0 = delete var1[var0];
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_DELETE = var9;
    var1.STAGE_INSTANCE_CREATE = var8;
    var1.STAGE_INSTANCE_UPDATE = var8;
    var8 = function(arg0) { // Original name: handleStageInstanceDelete, environment: var3
        var0 = arg0;
        var0 = var0.instance;
        var3 = _closure1_slot10;
        var2 = var0.guild_id;
        var1 = var0.channel_id;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.STAGE_INSTANCE_DELETE = var8;
    var8 = function(arg0) { // Original name: handleChannelDelete, environment: var3
        var0 = arg0;
        var0 = var0.channel;
        var3 = _closure1_slot10;
        var2 = var0.guild_id;
        var1 = var0.id;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.CHANNEL_DELETE = var8;
    var3 = function() { // Original name: handleLogout, environment: var3
        var0 = {};
        _closure1_slot7 = var0;
        var0 = {};
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/StageInstanceStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1378, 566, 806, 2]);