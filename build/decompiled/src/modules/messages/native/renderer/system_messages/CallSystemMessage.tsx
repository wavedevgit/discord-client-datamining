// modules/messages/native/renderer/system_messages/CallSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.ME;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/CallSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55388: for (var _fun55388_ip = 0;;) switch (_fun55388_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.message;
                var2 = _closure1_slot4;
                var0 = var2.getId;
                var8 = var0.bind(var2)();
                var0 = var4.getChannelId;
                var13 = var0.bind(var4)();
                var0 = var4.call;
                var6 = _closure1_slot5;
                var5 = var6.getUserVoiceChannelId;
                var2 = _closure1_slot6;
                var12 = var5.bind(var6)(var2, var8);
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 5;
                var5 = var7[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var20 = var5.bind(var2)(var4);
                var6 = _closure1_slot3;
                var5 = var6.getParticipants;
                var14 = var5.bind(var6)(var13);
                var6 = _closure1_slot0;
                var5 = 6;
                var5 = var7[var5];
                var7 = var6.bind(var2)(var5);
                var6 = var7.checkIsCallActive;
                var5 = var4.id;
                var7 = var6.bind(var7)(var13, var5);
                var6 = !var7;
                if (!var6) {
                    _fun55388_ip = 149;
                    continue _fun55388
                }
            case 143:
                var5 = null;
                var6 = var5 != var0;
            case 149:
                if (!var6) {
                    _fun55388_ip = 179;
                    continue _fun55388
                }
            case 152:
                var5 = var0.participants;
                var0 = var5.indexOf;
                var5 = var0.bind(var5)(var8);
                var0 = -1;
                var6 = var0 === var5;
            case 179:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var17 = 7;
                var8 = var0[var17];
                var8 = var5.bind(var2)(var8);
                var15 = var8.intl;
                var10 = var15.string;
                var0 = var0[var17];
                var0 = var5.bind(var2)(var0);
                var0 = var0.t;
                if (var7) {
                    _fun55388_ip = 462;
                    continue _fun55388
                }
            case 229:
                if (var6) {
                    _fun55388_ip = 245;
                    continue _fun55388
                }
            case 232:
                var5 = var0.v05Xd6;
                var9 = var10.bind(var15)(var5);
                _fun55388_ip = 256;
                continue _fun55388;
            case 245:
                var5 = var0["2CnhoI"];
                var9 = var10.bind(var15)(var5);
            case 256:
                var5 = null;
                if (!(var5 == var20)) {
                    _fun55388_ip = 301;
                    continue _fun55388
                }
            case 262:
                var8 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 9;
                var5 = var16[var5];
                var16 = var8.bind(var2)(var5);
                var8 = var16.calendarFormat;
                var5 = var4.timestamp;
                var8 = var8.bind(var16)(var5);
                _fun55388_ip = 396;
                continue _fun55388;
            case 301:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var5 = var22[var17];
                var5 = var21.bind(var2)(var5);
                var19 = var5.intl;
                var18 = var19.formatToPlainString;
                var5 = var22[var17];
                var5 = var21.bind(var2)(var5);
                var5 = var5.t;
                var16 = var5.SBDnp1;
                var5 = {};
                var5.duration = var20;
                var20 = 9;
                var20 = var22[var20];
                var22 = var21.bind(var2)(var20);
                var21 = var22.calendarFormat;
                var20 = var4.timestamp;
                var20 = var21.bind(var22)(var20);
                var5.timestamp = var20;
                var8 = var18.bind(var19)(var16, var5);
            case 396:
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var5 = 8;
                var5 = var18[var5];
                var18 = var16.bind(var2)(var5);
                var16 = var18.ensureAvatarSource;
                var19 = var4.author;
                var5 = var19.getAvatarSource;
                var5 = var5.bind(var19)(var2);
                var5 = var16.bind(var18)(var5);
                var16 = var5.uri;
                var5 = new Array(1);
                var5[0] = var16;
                _fun55388_ip = 586;
                continue _fun55388;
            case 462:
                var0 = var0["NGg/fm"];
                var10 = var10.bind(var15)(var0);
                var15 = '';
                var0 = var15;
                if (!var7) {
                    _fun55388_ip = 550;
                    continue _fun55388
                }
            case 483:
                var16 = null;
                if (!(var16 != var12)) {
                    _fun55388_ip = 496;
                    continue _fun55388
                }
            case 489:
                var0 = var15;
                if (!(var12 !== var13)) {
                    _fun55388_ip = 550;
                    continue _fun55388
                }
            case 496:
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var17];
                var13 = var16.bind(var2)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var12 = var12[var17];
                var12 = var16.bind(var2)(var12);
                var12 = var12.t;
                var12 = var12.DqA3mi;
                var0 = var13.bind(var15)(var12);
            case 550:
                var13 = var14.filter;
                var12 = function(arg0) { // Environment: var11
                    _fun55389: for (var _fun55389_ip = 0;;) switch (_fun55389_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = _closure1_slot7;
                            var0 = var0.USER;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun55389_ip = 37;
                                continue _fun55389
                            }
                        case 28:
                            var1 = var1.ringing;
                            var0 = !var1;
                        case 37:
                            return var0;
                    }
                };
                var13 = var13.bind(var14)(var12);
                var12 = var13.map;
                var11 = function(arg0) { // Environment: var11
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var4 = undefined;
                    var2 = var1.bind(var4)(var0);
                    var1 = var2.ensureAvatarSource;
                    var0 = arg0;
                    var3 = var0.user;
                    var0 = var3.getAvatarSource;
                    var0 = var0.bind(var3)(var4);
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.uri;
                    return var0;
                };
                var5 = var12.bind(var13)(var11);
                var8 = var0;
                var9 = var10;
            case 586:
                var0 = {};
                var0.title = var9;
                var0.description = var8;
                var0.isCallActive = var7;
                var0.missed = var6;
                var0.avatarURLs = var5;
                var5 = var4.timestamp;
                var4 = var5.valueOf;
                var4 = var4.bind(var5)();
                var0.rawMilliseconds = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var23 = var1.bind(var2)(var3);
                var24 = var0;
                var1 = copyDataProperties(var24, var23);
                return var0;
        }
    };
    var2.createCallSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3909, 1216, 3482, 660, 3484, 6647, 6648, 1234, 1418, 3093, 6642, 2]);