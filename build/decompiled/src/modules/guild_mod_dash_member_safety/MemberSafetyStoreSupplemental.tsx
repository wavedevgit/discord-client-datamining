// modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0() {
        _fun40421: for (var _fun40421_ip = 0;;) switch (_fun40421_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot2;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 == var3)) {
                    _fun40421_ip = 30;
                    continue _fun40421
                }
            case 20:
                var3 = _closure1_slot2;
                var2 = {};
                var3[var1] = var2;
            case 30:
                var0 = _closure1_slot2;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = {};
    var _closure1_slot2 = var0;
    var0 = 1;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun40422: for (var _fun40422_ip = 0;;) switch (_fun40422_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun40422_ip = 42;
                    continue _fun40422
                }
            case 23:
                var1 = _closure1_slot2;
                var3 = var1[var3];
                var1 = arg1;
                var1 = var3[var1];
                var0 = var2 != var1;
            case 42:
                return var0;
        }
    };
    var2.hasMemberSupplemental = var4;
    var2.getMemberSupplementalByGuildId = var3;
    var1 = function arg0, arg1() {
        _fun40423: for (var _fun40423_ip = 0;;) switch (_fun40423_ip) {
            case 0:
                var2 = arg1;
                var3 = var2.length;
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun40423_ip = 56;
                    continue _fun40423
                }
            case 16:
                var4 = _closure1_slot3;
                var3 = undefined;
                var1 = arg0;
                var1 = var4.bind(var3)(var1);
                var _closure2_slot0 = var1;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun40424: for (var _fun40424_ip = 0;;) switch (_fun40424_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot0;
                            var1 = var4.userId;
                            var6 = var2[var1];
                            var1 = var4.joinSourceType;
                            var3 = null;
                            if (!(var3 == var1)) {
                                _fun40424_ip = 49;
                                continue _fun40424
                            }
                        case 31:
                            var5 = var3 == var6;
                            var2 = undefined;
                            if (var5) {
                                _fun40424_ip = 46;
                                continue _fun40424
                            }
                        case 40:
                            var2 = var6.joinSourceType;
                        case 46:
                            var1 = var2;
                        case 49:
                            var2 = var3 != var1;
                            var5 = null;
                            if (!var2) {
                                _fun40424_ip = 61;
                                continue _fun40424
                            }
                        case 58:
                            var5 = var1;
                        case 61:
                            var1 = var3 != var5;
                            if (!var1) {
                                _fun40424_ip = 108;
                                continue _fun40424
                            }
                        case 68:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = 0;
                            var7 = var7[var2];
                            var2 = undefined;
                            var2 = var8.bind(var2)(var7);
                            var2 = var2.JoinSourceType;
                            var2 = var2.UNSPECIFIED;
                            var1 = var5 !== var2;
                        case 108:
                            if (var1) {
                                _fun40424_ip = 121;
                                continue _fun40424
                            }
                        case 111:
                            var2 = var4.sourceInviteCode;
                            var1 = var3 == var2;
                        case 121:
                            if (var1) {
                                _fun40424_ip = 160;
                                continue _fun40424
                            }
                        case 124:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 0;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var7.bind(var1)(var2);
                            var1 = var1.JoinSourceType;
                            var5 = var1.INVITE;
                        case 160:
                            var2 = _closure2_slot0;
                            var1 = var4.userId;
                            var0 = {};
                            var7 = var4.userId;
                            var0.userId = var7;
                            var8 = var4.sourceInviteCode;
                            if (!(var3 == var8)) {
                                _fun40424_ip = 208;
                                continue _fun40424
                            }
                        case 190:
                            var9 = var3 == var6;
                            var7 = undefined;
                            if (var9) {
                                _fun40424_ip = 205;
                                continue _fun40424
                            }
                        case 199:
                            var7 = var6.sourceInviteCode;
                        case 205:
                            var8 = var7;
                        case 208:
                            var9 = var3 != var8;
                            var7 = null;
                            if (!var9) {
                                _fun40424_ip = 220;
                                continue _fun40424
                            }
                        case 217:
                            var7 = var8;
                        case 220:
                            var0.sourceInviteCode = var7;
                            var0.joinSourceType = var5;
                            var7 = var4.inviterId;
                            if (!(var3 == var7)) {
                                _fun40424_ip = 258;
                                continue _fun40424
                            }
                        case 240:
                            var8 = var3 == var6;
                            var5 = undefined;
                            if (var8) {
                                _fun40424_ip = 255;
                                continue _fun40424
                            }
                        case 249:
                            var5 = var6.inviterId;
                        case 255:
                            var7 = var5;
                        case 258:
                            var8 = var3 != var7;
                            var5 = null;
                            if (!var8) {
                                _fun40424_ip = 270;
                                continue _fun40424
                            }
                        case 267:
                            var5 = var7;
                        case 270:
                            var0.inviterId = var5;
                            var7 = var4.integrationType;
                            if (!(var3 == var7)) {
                                _fun40424_ip = 303;
                                continue _fun40424
                            }
                        case 285:
                            var8 = var3 == var6;
                            var5 = undefined;
                            if (var8) {
                                _fun40424_ip = 300;
                                continue _fun40424
                            }
                        case 294:
                            var5 = var6.integrationType;
                        case 300:
                            var7 = var5;
                        case 303:
                            var8 = var3 != var7;
                            var5 = null;
                            if (!var8) {
                                _fun40424_ip = 315;
                                continue _fun40424
                            }
                        case 312:
                            var5 = var7;
                        case 315:
                            var0.integrationType = var5;
                            var7 = var4.joinSourceApplicationId;
                            if (!(var3 == var7)) {
                                _fun40424_ip = 348;
                                continue _fun40424
                            }
                        case 330:
                            var8 = var3 == var6;
                            var5 = undefined;
                            if (var8) {
                                _fun40424_ip = 345;
                                continue _fun40424
                            }
                        case 339:
                            var5 = var6.joinSourceApplicationId;
                        case 345:
                            var7 = var5;
                        case 348:
                            var8 = var3 != var7;
                            var5 = null;
                            if (!var8) {
                                _fun40424_ip = 360;
                                continue _fun40424
                            }
                        case 357:
                            var5 = var7;
                        case 360:
                            var0.joinSourceApplicationId = var5;
                            var4 = var4.joinSourceChannelId;
                            if (!(var3 == var4)) {
                                _fun40424_ip = 393;
                                continue _fun40424
                            }
                        case 375:
                            var7 = var3 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun40424_ip = 390;
                                continue _fun40424
                            }
                        case 384:
                            var5 = var6.joinSourceChannelId;
                        case 390:
                            var4 = var5;
                        case 393:
                            var5 = var3 != var4;
                            var3 = null;
                            if (!var5) {
                                _fun40424_ip = 405;
                                continue _fun40424
                            }
                        case 402:
                            var3 = var4;
                        case 405:
                            var0.joinSourceChannelId = var3;
                            var2[var1] = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
            case 56:
                var0 = false;
                return var0;
        }
    };
    var2.syncMemberSupplemental = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4360, 2]);