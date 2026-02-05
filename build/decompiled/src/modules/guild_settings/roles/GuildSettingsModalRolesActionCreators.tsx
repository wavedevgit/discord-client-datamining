// modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun116051: for (var _fun116051_ip = 0;;) switch (_fun116051_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun116051_ip = 234;
                            continue _fun116051
                        }
                    case 13:
                        var5 = var1.guildId;
                        var15 = var1.roleId;
                        var13 = var1.name;
                        var11 = var1.permissions;
                        var12 = var1.color;
                        var10 = var1.hoist;
                        var9 = var1.mentionable;
                        var6 = undefined;
                        SaveGenerator(address = 58);
                    case 56:
                        return var6;
                    case 58:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun116051_ip = 231;
                            continue _fun116051
                        }
                    case 67:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 2;
                        var2 = var7[var2];
                        var2 = var4.bind(var6)(var2);
                        var7 = var2.HTTP;
                        var4 = var7.patch;
                        var2 = {};
                        var14 = _closure1_slot4;
                        var8 = var14.GUILD_ROLE;
                        var8 = var8.bind(var14)(var5, var15);
                        var2.url = var8;
                        var8 = {};
                        var8.name = var13;
                        var8.permissions = var11;
                        var11 = null;
                        var13 = var11 != var12;
                        var11 = 0;
                        if (!var13) {
                            _fun116051_ip = 148;
                            continue _fun116051
                        }
                    case 145:
                        var11 = var12;
                    case 148:
                        var8.color = var11;
                        var8.hoist = var10;
                        var8.mentionable = var9;
                        var2.body = var8;
                        var8 = true;
                        var2.oldFormErrors = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address = 188);
                    case 186:
                        return var2;
                    case 188:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun116051_ip = 228;
                            continue _fun116051
                        }
                    case 194:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 3;
                        var3 = var7[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.checkGuildTemplateDirty;
                        var3 = var3.bind(var4)(var5);
                        return var2;
                    case 228:
                        return var2;
                    case 231:
                        return var1;
                    case 234:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_ROLES_START_REORDER';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.startReordering = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER';
            var0.type = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.stopReordering = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER';
        var1.type = var4;
        var4 = arg0;
        var1.from = var4;
        var4 = arg1;
        var1.to = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateRoleOrder = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        var0 = arg1;
        var2 = _closure1_slot5;
        var1 = {};
        var3 = arg0;
        var1.guildId = var3;
        var3 = var0.id;
        var1.roleId = var3;
        var3 = var0.name;
        var1.name = var3;
        var3 = var0.permissions;
        var1.permissions = var3;
        var0 = var0.color;
        var1.color = var0;
        var0 = arg2;
        var1.hoist = var0;
        var0 = arg3;
        var1.mentionable = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1.toggleRoleSetting = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.roleId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.startEditingPermissions = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.stopEditingPermissions = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW';
        var1.type = var4;
        var4 = arg0;
        var1.permission = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.allowPermission = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY';
        var1.type = var4;
        var4 = arg0;
        var1.permission = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.denyPermission = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.cancelPermissionChanges = var6;
    var3 = function arg0() {
        var0 = arg0;
        var10 = var0.guildId;
        var9 = var0.roleId;
        var8 = var0.name;
        var7 = var0.permissions;
        var6 = var0.color;
        var5 = var0.hoist;
        var4 = var0.mentionable;
        var11 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 4;
        var3 = var3[var0];
        var0 = undefined;
        var12 = var11.bind(var0)(var3);
        var11 = var12.dispatch;
        var3 = {};
        var13 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING';
        var3.type = var13;
        var3 = var11.bind(var12)(var3);
        var3 = _closure1_slot5;
        var2 = {};
        var2.guildId = var10;
        var2.roleId = var9;
        var2.name = var8;
        var2.permissions = var7;
        var2.color = var6;
        var2.hoist = var5;
        var2.mentionable = var4;
        var4 = var3.bind(var0)(var2);
        var3 = var4.then;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS';
            var0.type = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE';
            var0.type = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.savePermissionChanges = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 6507, 806, 2]);