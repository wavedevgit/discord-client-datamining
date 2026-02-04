// modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot3 = var6;
    var1 = var1.ME;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.userId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.startEditingRoles = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.stopEditingRoles = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE';
        var1.type = var4;
        var4 = arg0;
        var1.roleId = var4;
        var4 = arg1;
        var1.state = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.toggleRole = var6;
    var6 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 1;
        var1 = var4[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var6 = 'GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE';
        var1.type = var6;
        var1 = var2.bind(var3)(var1);
        var3 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE';
            var0.type = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = _closure1_slot0;
        var1 = 2;
        var1 = var4[var1];
        var1 = var2.bind(var0)(var1);
        var4 = var1.HTTP;
        var2 = var4.patch;
        var1 = {};
        var8 = _closure1_slot3;
        var7 = var8.GUILD_MEMBER;
        var6 = arg0;
        var5 = arg1;
        var5 = var7.bind(var8)(var6, var5);
        var1.url = var5;
        var5 = {};
        var6 = arg2;
        var5.roles = var6;
        var1.body = var5;
        var5 = true;
        var1.oldFormErrors = var5;
        var1.rejectWithError = var5;
        var2 = var2.bind(var4)(var1);
        var1 = var2.then;
        var1 = var1.bind(var2)(var3, var3);
        return var0;
    };
    var1.updateMemberRoles = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.startEditingNickname = var6;
    var3 = function arg0, arg1, arg2() {
        _fun79567: for (var _fun79567_ip = 0;;) switch (_fun79567_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun79567_ip = 39;
                    continue _fun79567
                }
            case 18:
                var2 = _closure1_slot3;
                var0 = var2.GUILD_MEMBER;
                var5 = var0.bind(var2)(var4, var3);
                _fun79567_ip = 62;
                continue _fun79567;
            case 39:
                var3 = _closure1_slot3;
                var2 = var3.GUILD_MEMBER_NICK;
                var0 = _closure1_slot4;
                var5 = var2.bind(var3)(var4, var0);
            case 62:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 1;
                var3 = var4[var0];
                var0 = undefined;
                var7 = var6.bind(var0)(var3);
                var6 = var7.dispatch;
                var3 = {};
                var8 = 'GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME';
                var3.type = var8;
                var3 = var6.bind(var7)(var3);
                var3 = _closure1_slot0;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.HTTP;
                var3 = var4.patch;
                var2 = {};
                var2.url = var5;
                var5 = {};
                var6 = arg2;
                var5.nick = var6;
                var2.body = var5;
                var5 = true;
                var2.oldFormErrors = var5;
                var5 = false;
                var2.rejectWithError = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS';
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = function(arg0) { // Environment: var1
                    _fun79569: for (var _fun79569_ip = 0;;) switch (_fun79569_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 3;
                            var3 = var2[var7];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var2[var7];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.t;
                            var2 = var2["5LO/Ss"];
                            var4 = var3.bind(var4)(var2);
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun79569_ip = 127;
                                continue _fun79569
                            }
                        case 73:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var7];
                            var3 = var6.bind(var0)(var3);
                            var5 = var3.intl;
                            var3 = var5.string;
                            var2 = var2[var7];
                            var2 = var6.bind(var0)(var2);
                            var2 = var2.t;
                            var2 = var2.rJfW6S;
                            var4 = var3.bind(var5)(var2);
                        case 127:
                            var2 = arg0;
                            var3 = var2.status;
                            var2 = 403;
                            if (!(var2 === var3)) {
                                _fun79569_ip = 201;
                                continue _fun79569
                            }
                        case 145:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = var2[var7];
                            var5 = var3.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToMarkdownString;
                            var2 = var2[var7];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.t;
                            var3 = var2.Izf9jO;
                            var2 = {};
                            var4 = var5.bind(var6)(var3, var2);
                        case 201:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 1;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE';
                            var1.type = var5;
                            var1.error = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.changeNickname = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 507, 1234, 2]);