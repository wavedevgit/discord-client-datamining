// modules/guild_settings/GuildRoleMemberCountStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun77476: for (var _fun77476_ip = 0;;) switch (_fun77476_ip) {
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
                _fun77476_ip = 76;
                continue _fun77476;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
        var3 = function() { // Original name: GuildRoleMemberCountStore, environment: var5
            _fun77480: for (var _fun77480_ip = 0;;) switch (_fun77480_ip) {
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
                        _fun77480_ip = 69;
                        continue _fun77480
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun77480_ip = 105;
                    continue _fun77480;
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
        var0 = 'getRoleMemberCount';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun77481: for (var _fun77481_ip = 0;;) switch (_fun77481_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 != var2;
                    if (!var1) {
                        _fun77481_ip = 23;
                        continue _fun77481
                    }
                case 12:
                    var1 = _closure1_slot5;
                    var0 = var1[var2];
                case 23:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'shouldFetch';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun77482: for (var _fun77482_ip = 0;;) switch (_fun77482_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun77482_ip = 60;
                        continue _fun77482
                    }
                case 9:
                    var1 = _closure1_slot6;
                    var2 = var1[var2];
                    var0 = var0 == var2;
                    if (var0) {
                        _fun77482_ip = 58;
                        continue _fun77482
                    }
                case 27:
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2 = var1 - var2;
                    var1 = 120000;
                    var0 = var2 > var1;
                case 58:
                    return var0;
                case 60:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GuildRoleMemberCountStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function(arg0) { // Original name: handleGuildRoleMemberCountFetchSuccess, environment: var3
        var0 = arg0;
        var2 = var0.guildId;
        var3 = var0.roleMemberCount;
        var1 = _closure1_slot5;
        var1[var2] = var3;
        var1 = _closure1_slot6;
        var0 = global;
        var3 = var0.Date;
        var0 = var3.now;
        var0 = var0.bind(var3)();
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS = var7;
    var7 = function(arg0) { // Original name: handleGuildRoleMemberCountUpdate, environment: var3
        _fun77484: for (var _fun77484_ip = 0;;) switch (_fun77484_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = var0.roleId;
                var1 = var0.count;
                var0 = _closure1_slot5;
                var0 = var0[var3];
                var3 = null;
                if (!(var3 != var0)) {
                    _fun77484_ip = 45;
                    continue _fun77484
                }
            case 37:
                var0[var2] = var1;
                var0 = undefined;
                return var0;
            case 45:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_ROLE_MEMBER_COUNT_UPDATE = var7;
    var7 = function(arg0) { // Original name: handleGuildRoleMemberBulkAdd, environment: var3
        _fun77485: for (var _fun77485_ip = 0;;) switch (_fun77485_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var2 = var0.roleId;
                var4 = var0.added;
                var0 = _closure1_slot5;
                var1 = var0[var1];
                var3 = null;
                if (!(var3 != var1)) {
                    _fun77485_ip = 88;
                    continue _fun77485
                }
            case 37:
                var0 = var1[var2];
                if (!(var3 != var0)) {
                    _fun77485_ip = 84;
                    continue _fun77485
                }
            case 45:
                var0 = global;
                var3 = var0.Object;
                var0 = var3.keys;
                var0 = var0.bind(var3)(var4);
                var3 = var0.length;
                var0 = var1[var2];
                var0 = var0 + var3;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            case 84:
                var0 = false;
                return var0;
            case 88:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_ROLE_MEMBER_BULK_ADD = var7;
    var7 = function(arg0) { // Original name: handleGuildRoleMemberAdd, environment: var3
        _fun77486: for (var _fun77486_ip = 0;;) switch (_fun77486_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var4 = var0.roleId;
                var0 = _closure1_slot5;
                var3 = var0[var1];
                var2 = null;
                var0 = var2 != var3;
                if (!var0) {
                    _fun77486_ip = 65;
                    continue _fun77486
                }
            case 34:
                var1 = var3[var4];
                var1 = var2 != var1;
                if (!var1) {
                    _fun77486_ip = 62;
                    continue _fun77486
                }
            case 45:
                var5 = var3[var4];
                var2 = 1;
                var2 = var5 + var2;
                var3[var4] = var2;
                var1 = undefined;
            case 62:
                var0 = var1;
            case 65:
                return var0;
        }
    };
    var1.GUILD_ROLE_MEMBER_ADD = var7;
    var7 = function(arg0) { // Original name: handleGuildRoleMemberRemove, environment: var3
        _fun77487: for (var _fun77487_ip = 0;;) switch (_fun77487_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var4 = var0.roleId;
                var0 = _closure1_slot5;
                var3 = var0[var1];
                var2 = null;
                var0 = var2 != var3;
                if (!var0) {
                    _fun77487_ip = 86;
                    continue _fun77487
                }
            case 34:
                var1 = var3[var4];
                var1 = var2 != var1;
                if (!var1) {
                    _fun77487_ip = 83;
                    continue _fun77487
                }
            case 45:
                var2 = global;
                var7 = var2.Math;
                var6 = var7.max;
                var5 = var3[var4];
                var2 = 1;
                var5 = var5 - var2;
                var2 = 0;
                var2 = var6.bind(var7)(var5, var2);
                var3[var4] = var2;
                var1 = undefined;
            case 83:
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var1.GUILD_ROLE_MEMBER_REMOVE = var7;
    var7 = function(arg0) { // Original name: handleGuildRoleCreate, environment: var3
        _fun77488: for (var _fun77488_ip = 0;;) switch (_fun77488_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var0 = var0.role;
                var3 = _closure1_slot5;
                var4 = var3[var2];
                var3 = null;
                if (!(var3 == var4)) {
                    _fun77488_ip = 41;
                    continue _fun77488
                }
            case 31:
                var4 = _closure1_slot5;
                var3 = {};
                var4[var2] = var3;
            case 41:
                var1 = _closure1_slot5;
                var2 = var1[var2];
                var1 = var0.id;
                var0 = 0;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_ROLE_CREATE = var7;
    var3 = function(arg0) { // Original name: handleGuildDelete, environment: var3
        var0 = arg0;
        var0 = var0.guild;
        var3 = _closure1_slot5;
        var2 = var0.id;
        var2 = delete var3[var2];
        var1 = _closure1_slot6;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DELETE = var3;
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
    var3 = 'modules/guild_settings/GuildRoleMemberCountStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);