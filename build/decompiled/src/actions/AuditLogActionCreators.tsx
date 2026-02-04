// actions/AuditLogActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun115161: for (var _fun115161_ip = 0;;) switch (_fun115161_ip) {
            case 0:
                var0 = _closure1_slot3;
                var0 = var0.isLoading;
                if (var0) {
                    _fun115161_ip = 26;
                    continue _fun115161
                }
            case 16:
                var1 = _closure1_slot3;
                var0 = var1.isLoadingNextPage;
            case 26:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun115162: for (var _fun115162_ip = 0;;) switch (_fun115162_ip) {
            case 0:
                var1 = arg1;
                var6 = var1.before;
                var5 = var1.userId;
                var0 = var1.targetId;
                var2 = var1.action;
                var1 = null;
                if (!(var1 == var5)) {
                    _fun115162_ip = 44;
                    continue _fun115162
                }
            case 31:
                var3 = _closure1_slot3;
                var5 = var3.userIdFilter;
            case 44:
                if (!(var1 == var2)) {
                    _fun115162_ip = 61;
                    continue _fun115162
                }
            case 48:
                var3 = _closure1_slot3;
                var2 = var3.actionFilter;
            case 61:
                if (!(var1 == var0)) {
                    _fun115162_ip = 80;
                    continue _fun115162
                }
            case 65:
                var3 = _closure1_slot3;
                var0 = var3.targetIdFilter;
            case 80:
                var3 = {};
                var7 = _closure1_slot5;
                var3.limit = var7;
                if (!(var1 != var6)) {
                    _fun115162_ip = 103;
                    continue _fun115162
                }
            case 97:
                var3.before = var6;
            case 103:
                if (!(var1 != var5)) {
                    _fun115162_ip = 113;
                    continue _fun115162
                }
            case 107:
                var3.user_id = var5;
            case 113:
                if (!(var1 != var2)) {
                    _fun115162_ip = 123;
                    continue _fun115162
                }
            case 117:
                var3.action_type = var2;
            case 123:
                if (!(var1 != var0)) {
                    _fun115162_ip = 133;
                    continue _fun115162
                }
            case 127:
                var3.target_id = var0;
            case 133:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.HTTP;
                var1 = var2.get;
                var0 = {};
                var6 = _closure1_slot4;
                var5 = var6.GUILD_AUDIT_LOG;
                var4 = arg0;
                var4 = var5.bind(var6)(var4);
                var0.url = var4;
                var0.query = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun115163: for (var _fun115163_ip = 0;;) switch (_fun115163_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot6;
                var0 = undefined;
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun115163_ip = 130;
                    continue _fun115163
                }
            case 21:
                var3 = null;
                if (!(var3 != var4)) {
                    _fun115163_ip = 130;
                    continue _fun115163
                }
            case 27:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 3;
                var3 = var6[var3];
                var6 = var5.bind(var0)(var3);
                var5 = var6.dispatch;
                var3 = {};
                var7 = 'AUDIT_LOG_FETCH_START';
                var3.type = var7;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot7;
                var2 = {};
                var5 = arg1;
                var2.userId = var5;
                var5 = arg3;
                var2.action = var5;
                var5 = arg2;
                var2.targetId = var5;
                var4 = var3.bind(var0)(var4, var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.body;
                    var11 = var0.audit_log_entries;
                    var10 = var0.integrations;
                    var9 = var0.users;
                    var8 = var0.webhooks;
                    var7 = var0.guild_scheduled_events;
                    var6 = var0.auto_moderation_rules;
                    var5 = var0.threads;
                    var4 = var0.application_commands;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var12 = 'AUDIT_LOG_FETCH_SUCCESS';
                    var1.type = var12;
                    var1.logs = var11;
                    var1.integrations = var10;
                    var1.users = var9;
                    var1.webhooks = var8;
                    var1.guildScheduledEvents = var7;
                    var1.automodRules = var6;
                    var1.threads = var5;
                    var1.applicationCommands = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'AUDIT_LOG_FETCH_FAIL';
                    var0.type = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 130:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Endpoints;
    var _closure1_slot4 = var7;
    var4 = var4.AUDIT_LOG_PAGE_LIMIT;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/AuditLogActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.fetchLogs = var3;
    var3 = function arg0() {
        _fun115166: for (var _fun115166_ip = 0;;) switch (_fun115166_ip) {
            case 0:
                var4 = arg0;
                var8 = arguments[1];
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun115166_ip = 16;
                    continue _fun115166
                }
            case 14:
                var8 = false;
            case 16:
                var3 = _closure1_slot3;
                var3 = var3.hasOlderLogs;
                if (!var3) {
                    _fun115166_ip = 194;
                    continue _fun115166
                }
            case 35:
                var3 = _closure1_slot6;
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun115166_ip = 194;
                    continue _fun115166
                }
            case 49:
                var5 = null;
                if (!(var5 != var4)) {
                    _fun115166_ip = 194;
                    continue _fun115166
                }
            case 58:
                var3 = _closure1_slot3;
                var6 = var3.logs;
                var7 = var6.length;
                var3 = 1;
                var3 = var7 - var3;
                var3 = var6[var3];
                var6 = var5 != var3;
                var5 = null;
                if (!var6) {
                    _fun115166_ip = 98;
                    continue _fun115166
                }
            case 93:
                var5 = var3.id;
            case 98:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 3;
                var3 = var7[var3];
                var7 = var6.bind(var0)(var3);
                var6 = var7.dispatch;
                var3 = {};
                var9 = 'AUDIT_LOG_FETCH_NEXT_PAGE_START';
                var3.type = var9;
                var3.before = var5;
                var3.isGroupedFetch = var8;
                var3 = var6.bind(var7)(var3);
                var3 = _closure1_slot7;
                var2 = {};
                var2.before = var5;
                var4 = var3.bind(var0)(var4, var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.body;
                    var11 = var0.audit_log_entries;
                    var10 = var0.integrations;
                    var9 = var0.users;
                    var8 = var0.webhooks;
                    var7 = var0.guild_scheduled_events;
                    var6 = var0.auto_moderation_rules;
                    var5 = var0.threads;
                    var4 = var0.application_commands;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var12 = 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS';
                    var1.type = var12;
                    var1.logs = var11;
                    var1.integrations = var10;
                    var1.users = var9;
                    var1.webhooks = var8;
                    var1.guildScheduledEvents = var7;
                    var1.automodRules = var6;
                    var1.threads = var5;
                    var1.applicationCommands = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL';
                    var0.type = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 194:
                return var0;
        }
    };
    var2.fetchNextLogPage = var3;
    var3 = function arg0, arg1() {
        _fun115169: for (var _fun115169_ip = 0;;) switch (_fun115169_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = _closure1_slot6;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun115169_ip = 96;
                    continue _fun115169
                }
            case 22:
                var2 = null;
                if (!(var2 != var3)) {
                    _fun115169_ip = 96;
                    continue _fun115169
                }
            case 28:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 3;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.dispatch;
                var5 = {};
                var8 = 'AUDIT_LOG_FILTER_BY_ACTION';
                var5.type = var8;
                var5.action = var4;
                var5 = var6.bind(var7)(var5);
                var1 = _closure1_slot8;
                var13 = undefined;
                var12 = var3;
                var11 = null;
                var10 = null;
                var9 = var4;
                var1 = var13[var1](var12, var11, var10, var9, var8);
                return var1;
            case 96:
                return var0;
        }
    };
    var2.filterByAction = var3;
    var3 = function arg0, arg1() {
        _fun115170: for (var _fun115170_ip = 0;;) switch (_fun115170_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = _closure1_slot6;
                var0 = undefined;
                var4 = var4.bind(var0)();
                if (var4) {
                    _fun115170_ip = 86;
                    continue _fun115170
                }
            case 22:
                var4 = null;
                if (!(var4 != var2)) {
                    _fun115170_ip = 86;
                    continue _fun115170
                }
            case 28:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var6 = var5.bind(var0)(var4);
                var5 = var6.dispatch;
                var4 = {};
                var7 = 'AUDIT_LOG_FILTER_BY_USER';
                var4.type = var7;
                var4.userId = var3;
                var4 = var5.bind(var6)(var4);
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var2, var3);
                return var1;
            case 86:
                return var0;
        }
    };
    var2.filterByUserId = var3;
    var1 = function arg0, arg1() {
        _fun115171: for (var _fun115171_ip = 0;;) switch (_fun115171_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = _closure1_slot6;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun115171_ip = 88;
                    continue _fun115171
                }
            case 22:
                var2 = null;
                if (!(var2 != var3)) {
                    _fun115171_ip = 88;
                    continue _fun115171
                }
            case 28:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 3;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.dispatch;
                var5 = {};
                var8 = 'AUDIT_LOG_FILTER_BY_TARGET';
                var5.type = var8;
                var5.targetId = var4;
                var5 = var6.bind(var7)(var5);
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var3, var2, var4);
                return var1;
            case 88:
                return var0;
        }
    };
    var2.filterByTargetId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [14684, 660, 507, 806, 2]);