// modules/permissions/useManageResourcePermissions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    var _closure1_slot7 = var4;
    var4 = var3.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS;
    var _closure1_slot8 = var4;
    var3 = var3.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot10 = var3;
    var3 = {
        'canCreateExpressions': false,
        'canCreateGuildEvent': false,
        'canManageAllExpressions': false,
        'canManageAllEvents': false
    };
    var4 = function() { // Original name: canManageGuildExpression, environment: var1
        var0 = false;
        return var0;
    };
    var3.canManageGuildExpression = var4;
    var4 = function() { // Original name: canManageGuildEvent, environment: var1
        var0 = false;
        return var0;
    };
    var3.canManageGuildEvent = var4;
    var _closure1_slot11 = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: canManageResource, environment: var1
        _fun65126: for (var _fun65126_ip = 0;;) switch (_fun65126_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg3;
                var6 = null;
                var0 = var6 != var5;
                if (!var0) {
                    _fun65126_ip = 181;
                    continue _fun65126
                }
            case 21:
                var1 = arg2;
                var2 = !var1;
                var1 = !var2;
                if (!var2) {
                    _fun65126_ip = 178;
                    continue _fun65126
                }
            case 36:
                var2 = 'creator_id';
                var2 = var2 in var5;
                if (var2) {
                    _fun65126_ip = 147;
                    continue _fun65126
                }
            case 47:
                var2 = 'userId';
                var2 = var2 in var5;
                if (var2) {
                    _fun65126_ip = 115;
                    continue _fun65126
                }
            case 58:
                var2 = 'user';
                var2 = var2 in var5;
                if (!var2) {
                    _fun65126_ip = 113;
                    continue _fun65126
                }
            case 69:
                var7 = var3;
                if (!var3) {
                    _fun65126_ip = 79;
                    continue _fun65126
                }
            case 75:
                var7 = var6 != var4;
            case 79:
                if (!var7) {
                    _fun65126_ip = 110;
                    continue _fun65126
                }
            case 82:
                var8 = var5.user;
                var10 = var6 == var8;
                var9 = undefined;
                if (var10) {
                    _fun65126_ip = 101;
                    continue _fun65126
                }
            case 96:
                var9 = var8.id;
            case 101:
                var8 = var4.id;
                var7 = var9 === var8;
            case 110:
                var2 = var7;
            case 113:
                _fun65126_ip = 145;
                continue _fun65126;
            case 115:
                var7 = var3;
                if (!var3) {
                    _fun65126_ip = 125;
                    continue _fun65126
                }
            case 121:
                var7 = var6 != var4;
            case 125:
                if (!var7) {
                    _fun65126_ip = 142;
                    continue _fun65126
                }
            case 128:
                var9 = var5.userId;
                var8 = var4.id;
                var7 = var9 === var8;
            case 142:
                var2 = var7;
            case 145:
                _fun65126_ip = 175;
                continue _fun65126;
            case 147:
                if (!var3) {
                    _fun65126_ip = 154;
                    continue _fun65126
                }
            case 150:
                var3 = var6 != var4;
            case 154:
                if (!var3) {
                    _fun65126_ip = 172;
                    continue _fun65126
                }
            case 157:
                var5 = var5.creator_id;
                var4 = var4.id;
                var3 = var5 === var4;
            case 172:
                var2 = var3;
            case 175:
                var1 = var2;
            case 178:
                var0 = var1;
            case 181:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = function(arg0) { // Original name: attachChannelPermissions, environment: var1
        _fun65127: for (var _fun65127_ip = 0;;) switch (_fun65127_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun65127_ip = 140;
                    continue _fun65127
                }
            case 12:
                var4 = _closure1_slot7;
                var1 = var2.isGuildStageVoice;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun65127_ip = 51;
                    continue _fun65127
                }
            case 32:
                var1 = var2.isGuildVoice;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun65127_ip = 55;
                    continue _fun65127
                }
            case 45:
                var4 = _closure1_slot9;
                _fun65127_ip = 55;
                continue _fun65127;
            case 51:
                var4 = _closure1_slot8;
            case 55:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 6;
                var1 = var6[var2];
                var3 = undefined;
                var8 = var5.bind(var3)(var1);
                var7 = var8.combine;
                var1 = _closure1_slot10;
                var0 = var1.CREATE_EVENTS;
                var7 = var7.bind(var8)(var4, var0);
                var0 = new Array(2);
                var0[0] = var7;
                var2 = var6[var2];
                var3 = var5.bind(var3)(var2);
                var2 = var3.combine;
                var1 = var1.MANAGE_EVENTS;
                var1 = var2.bind(var3)(var4, var1);
                var0[1] = var1;
                return var0;
            case 140:
                var1 = _closure1_slot10;
                var2 = var1.CREATE_EVENTS;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.MANAGE_EVENTS;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/permissions/useManageResourcePermissions.tsx';
    var4 = var5.bind(var6)(var4);
    var2.attachChannelPermissions = var3;
    var3 = function(arg0) { // Environment: var1
        _fun65128: for (var _fun65128_ip = 0;;) switch (_fun65128_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var9 = undefined;
                var3 = var3.bind(var9)(var2);
                var2 = var3.isGuildRecord;
                var2 = var2.bind(var3)(var8);
                if (var2) {
                    _fun65128_ip = 59;
                    continue _fun65128
                }
            case 48:
                var2 = _closure1_slot13;
                var2 = var2.bind(var9)(var8);
                _fun65128_ip = 90;
                continue _fun65128;
            case 59:
                var4 = _closure1_slot10;
                var5 = var4.CREATE_EVENTS;
                var3 = new Array(2);
                var3[0] = var5;
                var4 = var4.MANAGE_EVENTS;
                var3[1] = var4;
                var2 = var3;
            case 90:
                var12 = _closure1_slot3;
                var4 = 2;
                var2 = var12.bind(var9)(var2, var4);
                var6 = 0;
                var3 = var2[var6];
                var _closure2_slot1 = var3;
                var5 = 1;
                var2 = var2[var5];
                var _closure2_slot2 = var2;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 8;
                var7 = var10[var2];
                var14 = var3.bind(var9)(var7);
                var13 = var14.useStateFromStoresArray;
                var7 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() { // Environment: var0
                    var4 = _closure1_slot5;
                    var5 = var4.can;
                    var2 = _closure1_slot10;
                    var0 = var2.CREATE_GUILD_EXPRESSIONS;
                    var3 = _closure2_slot0;
                    var5 = var5.bind(var4)(var0, var3);
                    var0 = new Array(4);
                    var0[0] = var5;
                    var5 = var4.can;
                    var2 = var2.MANAGE_GUILD_EXPRESSIONS;
                    var2 = var5.bind(var4)(var2, var3);
                    var0[1] = var2;
                    var5 = var4.can;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var4)(var2, var3);
                    var0[2] = var2;
                    var2 = var4.can;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var4)(var1, var3);
                    var0[3] = var1;
                    return var0;
                };
                var11 = var13.bind(var14)(var11, var7);
                var7 = 4;
                var11 = var12.bind(var9)(var11, var7);
                var7 = var11[var6];
                var _closure2_slot3 = var7;
                var5 = var11[var5];
                var _closure2_slot4 = var5;
                var6 = var11[var4];
                var _closure2_slot5 = var6;
                var4 = 3;
                var4 = var11[var4];
                var _closure2_slot6 = var4;
                var2 = var10[var2];
                var10 = var3.bind(var9)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var9.bind(var10)(var3, var2);
                var _closure2_slot7 = var11;
                var10 = _closure1_slot4;
                var9 = var10.useCallback;
                var3 = new Array(3);
                var3[0] = var7;
                var3[1] = var5;
                var3[2] = var11;
                var2 = function(arg0) { // Environment: var0
                    var5 = _closure1_slot12;
                    var8 = _closure2_slot7;
                    var7 = _closure2_slot4;
                    var6 = _closure2_slot3;
                    var10 = undefined;
                    var9 = arg0;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var3 = var9.bind(var10)(var2, var3);
                var9 = var10.useCallback;
                var2 = new Array(3);
                var2[0] = var4;
                var2[1] = var6;
                var2[2] = var11;
                var0 = function(arg0) { // Environment: var0
                    var5 = _closure1_slot12;
                    var8 = _closure2_slot7;
                    var7 = _closure2_slot6;
                    var6 = _closure2_slot5;
                    var10 = undefined;
                    var9 = arg0;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var2 = var9.bind(var10)(var0, var2);
                var0 = null;
                if (!(var0 != var8)) {
                    _fun65128_ip = 366;
                    continue _fun65128
                }
            case 332:
                var0 = {};
                var0.canCreateExpressions = var7;
                var0.canCreateGuildEvent = var6;
                var0.canManageAllExpressions = var5;
                var0.canManageAllEvents = var4;
                var0.canManageGuildExpression = var3;
                var0.canManageGuildEvent = var2;
                _fun65128_ip = 370;
                continue _fun65128;
            case 366:
                var0 = _closure1_slot11;
            case 370:
                return var0;
        }
    };
    var2.useManageResourcePermissions = var3;
    var1 = function(arg0) { // Environment: var1
        _fun65133: for (var _fun65133_ip = 0;;) switch (_fun65133_ip) {
            case 0:
                var7 = arg0;
                var9 = arguments[1];
                var8 = arguments[2];
                var5 = undefined;
                if (!(var9 === var5)) {
                    _fun65133_ip = 24;
                    continue _fun65133
                }
            case 17:
                var9 = _closure1_slot5;
            case 24:
                if (!(var8 === var5)) {
                    _fun65133_ip = 35;
                    continue _fun65133
                }
            case 28:
                var8 = _closure1_slot6;
            case 35:
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var5;
                var _closure2_slot4 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var3 = var3.bind(var5)(var0);
                var0 = var3.isGuildRecord;
                var0 = var0.bind(var3)(var7);
                if (var0) {
                    _fun65133_ip = 103;
                    continue _fun65133
                }
            case 92:
                var0 = _closure1_slot13;
                var4 = var0.bind(var5)(var7);
                _fun65133_ip = 134;
                continue _fun65133;
            case 103:
                var3 = _closure1_slot10;
                var6 = var3.CREATE_EVENTS;
                var0 = new Array(2);
                var0[0] = var6;
                var3 = var3.MANAGE_EVENTS;
                var0[1] = var3;
                var4 = var0;
            case 134:
                var3 = _closure1_slot3;
                var0 = 2;
                var3 = var3.bind(var5)(var4, var0);
                var0 = 0;
                var5 = var3[var0];
                var0 = 1;
                var3 = var3[var0];
                var6 = var9.can;
                var0 = _closure1_slot10;
                var4 = var0.CREATE_GUILD_EXPRESSIONS;
                var6 = var6.bind(var9)(var4, var7);
                _closure2_slot0 = var6;
                var4 = var9.can;
                var0 = var0.MANAGE_GUILD_EXPRESSIONS;
                var4 = var4.bind(var9)(var0, var7);
                _closure2_slot1 = var4;
                var0 = var9.can;
                var5 = var0.bind(var9)(var5, var7);
                _closure2_slot2 = var5;
                var0 = var9.can;
                var3 = var0.bind(var9)(var3, var7);
                _closure2_slot3 = var3;
                var0 = var8.getCurrentUser;
                var0 = var0.bind(var8)();
                _closure2_slot4 = var0;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun65133_ip = 303;
                    continue _fun65133
                }
            case 259:
                var0 = {};
                var0.canCreateExpressions = var6;
                var0.canCreateGuildEvent = var5;
                var0.canManageAllExpressions = var4;
                var0.canManageAllEvents = var3;
                var3 = function(arg0) { // Original name: canManageGuildExpression, environment: var2
                    var5 = _closure1_slot12;
                    var8 = _closure2_slot4;
                    var7 = _closure2_slot1;
                    var6 = _closure2_slot0;
                    var10 = undefined;
                    var9 = arg0;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0.canManageGuildExpression = var3;
                var2 = function(arg0) { // Original name: canManageGuildEvent, environment: var2
                    var5 = _closure1_slot12;
                    var8 = _closure2_slot4;
                    var7 = _closure2_slot3;
                    var6 = _closure2_slot2;
                    var10 = undefined;
                    var9 = arg0;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0.canManageGuildEvent = var2;
                _fun65133_ip = 307;
                continue _fun65133;
            case 303:
                var0 = _closure1_slot11;
            case 307:
                return var0;
        }
    };
    var2.getManageResourcePermissions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3050, 1613, 8050, 483, 484, 1598, 566, 2]);