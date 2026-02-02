// modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun55807: for (var _fun55807_ip = 0;;) switch (_fun55807_ip) {
            case 0:
                var2 = arg0;
                var6 = arg1;
                var5 = arg2;
                var0 = _closure1_slot7;
                var0 = var0.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
                if (!(var0 !== var2)) {
                    _fun55807_ip = 356;
                    continue _fun55807
                }
            case 29:
                var0 = _closure1_slot7;
                var0 = var0.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
                if (!(var0 !== var2)) {
                    _fun55807_ip = 211;
                    continue _fun55807
                }
            case 46:
                var0 = _closure1_slot7;
                var0 = var0.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
                if (!(var0 !== var2)) {
                    _fun55807_ip = 66;
                    continue _fun55807
                }
            case 60:
                var0 = '';
                return var0;
            case 66:
                var0 = null;
                if (!(var0 != var6)) {
                    _fun55807_ip = 76;
                    continue _fun55807
                }
            case 72:
                if (!(var0 == var5)) {
                    _fun55807_ip = 137;
                    continue _fun55807
                }
            case 76:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var2 = var8[var0];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.BMlbE7;
                var0 = var2.bind(var3)(var0);
                _fun55807_ip = 209;
                continue _fun55807;
            case 137:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 5;
                var4 = var9[var2];
                var3 = undefined;
                var4 = var8.bind(var3)(var4);
                var7 = var4.intl;
                var4 = var7.formatToParts;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.u4movT;
                var2 = {};
                var2.username = var6;
                var2.guildName = var5;
                var0 = var4.bind(var7)(var3, var2);
            case 209:
                return var0;
            case 211:
                var0 = null;
                if (!(var0 != var6)) {
                    _fun55807_ip = 221;
                    continue _fun55807
                }
            case 217:
                if (!(var0 == var5)) {
                    _fun55807_ip = 282;
                    continue _fun55807
                }
            case 221:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var2 = var8[var0];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.FVF6qU;
                var0 = var2.bind(var3)(var0);
                _fun55807_ip = 354;
                continue _fun55807;
            case 282:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 5;
                var4 = var9[var2];
                var3 = undefined;
                var4 = var8.bind(var3)(var4);
                var7 = var4.intl;
                var4 = var7.formatToParts;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2["UGN/Yy"];
                var2 = {};
                var2.username = var6;
                var2.guildName = var5;
                var0 = var4.bind(var7)(var3, var2);
            case 354:
                return var0;
            case 356:
                var0 = null;
                if (!(var0 != var6)) {
                    _fun55807_ip = 366;
                    continue _fun55807
                }
            case 362:
                if (!(var0 == var5)) {
                    _fun55807_ip = 427;
                    continue _fun55807
                }
            case 366:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var2 = var8[var0];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["2VLV0d"];
                var0 = var2.bind(var3)(var0);
                _fun55807_ip = 499;
                continue _fun55807;
            case 427:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 5;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToParts;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.EloBG4;
                var1 = {};
                var1.username = var6;
                var1.guildName = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 499:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageTypes;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55808: for (var _fun55808_ip = 0;;) switch (_fun55808_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.message;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var2 = undefined;
                var6 = var4.bind(var2)(var0);
                var4 = var6.cast;
                var0 = var5.channel_id;
                var6 = var4.bind(var6)(var0);
                var4 = _closure1_slot3;
                var0 = var4.getRequest;
                var6 = var0.bind(var4)(var6);
                var4 = null;
                var0 = var4 == var6;
                var8 = undefined;
                if (var0) {
                    _fun55808_ip = 121;
                    continue _fun55808
                }
            case 75:
                var9 = _closure1_slot5;
                var7 = var9.getGuild;
                var0 = var6.guildId;
                var0 = var7.bind(var9)(var0);
                if (!(var4 == var0)) {
                    _fun55808_ip = 118;
                    continue _fun55808
                }
            case 98:
                var10 = _closure1_slot4;
                var9 = var10.getJoinRequestGuild;
                var7 = var6.guildId;
                var0 = var9.bind(var10)(var7);
            case 118:
                var8 = var0;
            case 121:
                var9 = _closure1_slot6;
                var7 = var9.getUser;
                var10 = var4 == var6;
                var0 = undefined;
                if (var10) {
                    _fun55808_ip = 145;
                    continue _fun55808
                }
            case 140:
                var0 = var6.userId;
            case 145:
                var0 = var7.bind(var9)(var0);
                var9 = var4 == var0;
                var7 = undefined;
                if (var9) {
                    _fun55808_ip = 164;
                    continue _fun55808
                }
            case 159:
                var7 = var0.username;
            case 164:
                if (!(var4 == var7)) {
                    _fun55808_ip = 199;
                    continue _fun55808
                }
            case 168:
                var9 = var4 == var6;
                var0 = undefined;
                if (var9) {
                    _fun55808_ip = 196;
                    continue _fun55808
                }
            case 177:
                var6 = var6.user;
                var9 = var4 == var6;
                var0 = undefined;
                if (var9) {
                    _fun55808_ip = 196;
                    continue _fun55808
                }
            case 191:
                var0 = var6.username;
            case 196:
                var7 = var0;
            case 199:
                var0 = {};
                var6 = _closure1_slot8;
                var5 = var5.type;
                var9 = var4 == var8;
                var4 = undefined;
                if (var9) {
                    _fun55808_ip = 224;
                    continue _fun55808
                }
            case 219:
                var4 = var8.name;
            case 224:
                var4 = var6.bind(var2)(var5, var7, var4);
                var0.content = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var12 = var1.bind(var2)(var3);
                var13 = var0;
                var1 = copyDataProperties(var13, var12);
                return var0;
        }
    };
    var2.createJoinRequestNotificationSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6491, 3175, 1410, 1613, 660, 1234, 21, 6642, 2]);