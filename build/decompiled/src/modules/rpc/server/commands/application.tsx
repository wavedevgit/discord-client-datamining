// modules/rpc/server/commands/application.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.RPC_LOCAL_SCOPE;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.ApplicationFlags;
    var _closure1_slot6 = var3;
    var3 = var1.Endpoints;
    var _closure1_slot7 = var3;
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot8 = var1;
    var1 = {};
    var9 = var3.SEND_ANALYTICS_EVENT;
    var6 = {};
    var10 = function arg0() {
        var5 = arg0;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 5;
        var0 = var7[var3];
        var4 = undefined;
        var0 = var6.bind(var4)(var0);
        var1 = var0.bind(var4)(var5);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var8 = var5.string;
        var9 = var8.bind(var5)();
        var8 = var9.required;
        var8 = var8.bind(var9)();
        var0.event_name = var8;
        var3 = var7[var3];
        var3 = var6.bind(var4)(var3);
        var4 = var3.bind(var4)(var5);
        var3 = var4.required;
        var3 = var3.bind(var4)();
        var0.event_properties = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var10;
    var10 = function arg0() {
        _fun97953: for (var _fun97953_ip = 0;;) switch (_fun97953_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.socket;
                var0 = var0.args;
                var4 = var0.event_name;
                var5 = var0.event_properties;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 6;
                var8 = var6[var3];
                var0 = undefined;
                var10 = var7.bind(var0)(var8);
                var9 = var10.validatePostMessageTransport;
                var8 = var2.transport;
                var8 = var9.bind(var10)(var8);
                var3 = var6[var3];
                var8 = var7.bind(var0)(var3);
                var7 = var8.validateApplication;
                var3 = var2.application;
                var3 = var7.bind(var8)(var3);
                var2 = var2.application;
                var8 = var2.id;
                var3 = _closure1_slot1;
                var2 = 7;
                var2 = var6[var2];
                var2 = var3.bind(var0)(var2);
                var9 = var2.bind(var0)();
                var2 = null;
                var3 = var2 == var9;
                var7 = undefined;
                if (var3) {
                    _fun97953_ip = 145;
                    continue _fun97953
                }
            case 135:
                var3 = var9.getGuildId;
                var7 = var3.bind(var9)();
            case 145:
                var6 = _closure1_slot4;
                var3 = var6.getApplication;
                var6 = var3.bind(var6)(var8);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 8;
                var3 = var11[var3];
                var11 = var10.bind(var0)(var3);
                var10 = var11.hasFlag;
                var12 = var2 == var6;
                var3 = undefined;
                if (var12) {
                    _fun97953_ip = 200;
                    continue _fun97953
                }
            case 195:
                var3 = var6.flags;
            case 200:
                var12 = var2 != var3;
                var6 = 0;
                if (!var12) {
                    _fun97953_ip = 212;
                    continue _fun97953
                }
            case 209:
                var6 = var3;
            case 212:
                var3 = _closure1_slot6;
                var3 = var3.EMBEDDED_FIRST_PARTY;
                var3 = var10.bind(var11)(var6, var3);
                if (var3) {
                    _fun97953_ip = 299;
                    continue _fun97953
                }
            case 231:
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 9;
                var3 = var10[var3];
                var11 = var6.bind(var0)(var3);
                var10 = {};
                var3 = _closure1_slot8;
                var3 = var3.INVALID_COMMAND;
                var10.errorCode = var3;
                var3 = var11.prototype;
                var6 = Object.create(var3, {
                    constructor: {
                        value: var11
                    }
                });
                var13 = 'This application cannot access this API';
                var15 = var6;
                var14 = var10;
                var3 = new var15[var11](var14, var13, var12);
                var3 = var3 instanceof Object ? var3 : var6;
                throw var3;
            case 299:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var6 = var6.bind(var0)(var3);
                var3 = var6.getActiveAnalyticsSessionIDs;
                var3 = var3.bind(var6)(var8);
                var6 = {};
                var6.activity_application_id = var8;
                var10 = var2 == var9;
                var8 = undefined;
                if (var10) {
                    _fun97953_ip = 353;
                    continue _fun97953
                }
            case 348:
                var8 = var9.type;
            case 353:
                var6.activity_channel_type = var8;
                var6.activity_guild_id = var7;
                var7 = var2 == var3;
                var2 = undefined;
                if (var7) {
                    _fun97953_ip = 382;
                    continue _fun97953
                }
            case 376:
                var2 = var3.activityUserSessionId;
            case 382:
                var6.activity_user_session_id = var2;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.track;
                var1 = {};
                var14 = var1;
                var13 = var6;
                var6 = copyDataProperties(var14, var13);
                var14 = var1;
                var13 = var5;
                var5 = copyDataProperties(var14, var13);
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var6.handler = var10;
    var1[var9] = var6;
    var6 = var3.GET_APPLICATION_TICKET;
    var3 = {};
    var3.scope = var8;
    var7 = function arg0() {
        _fun97954: for (var _fun97954_ip = 0;;) switch (_fun97954_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.socket;
                var0 = var0.application;
                var7 = var0.id;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun97954_ip = 171;
                    continue _fun97954
                }
            case 28:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.HTTP;
                var1 = var2.post;
                var0 = {
                    'url': null,
                    'body': null,
                    'retries': 3,
                    'oldFormErrors': true,
                    'rejectWithError': false
                };
                var4 = _closure1_slot7;
                var3 = var4.APPLICATION_TICKET;
                var3 = var3.bind(var4)(var7);
                var0.url = var3;
                var3 = {};
                var6 = _closure1_slot5;
                var4 = var6.inTestModeForApplication;
                var4 = var4.bind(var6)(var7);
                if (var4) {
                    _fun97954_ip = 134;
                    continue _fun97954
                }
            case 119:
                var6 = _closure1_slot3;
                var5 = var6.inDevModeForApplication;
                var4 = var5.bind(var6)(var7);
            case 134:
                var3.test_mode = var4;
                var0.body = var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.body;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 171:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot8;
                var0 = var0.INVALID_COMMAND;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = 'No application.';
                var10 = var1;
                var9 = var2;
                var0 = new var10[var3](var9, var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/application.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7183, 3413, 7184, 3315, 660, 7892, 7894, 12743, 1384, 7889, 7910, 795, 507, 2]);