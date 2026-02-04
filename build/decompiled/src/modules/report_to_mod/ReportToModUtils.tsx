// modules/report_to_mod/ReportToModUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var9;
    var6 = function arg0() {
        var2 = _closure1_slot13;
        var3 = _closure1_slot5;
        var1 = var3.getChannel;
        var0 = arg0;
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot10 = var6;
    var5 = function arg0() {
        _fun50062: for (var _fun50062_ip = 0;;) switch (_fun50062_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun50062_ip = 38;
                    continue _fun50062
                }
            case 12:
                var1 = var3.isModeratorReportChannel;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun50062_ip = 35;
                    continue _fun50062
                }
            case 25:
                var2 = var3.isForumChannel;
                var1 = var2.bind(var3)();
            case 35:
                var0 = var1;
            case 38:
                return var0;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function arg0() {
        _fun50063: for (var _fun50063_ip = 0;;) switch (_fun50063_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun50063_ip = 38;
                    continue _fun50063
                }
            case 12:
                var1 = var3.isModeratorReportChannel;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun50063_ip = 35;
                    continue _fun50063
                }
            case 25:
                var2 = var3.isForumPost;
                var1 = var2.bind(var3)();
            case 35:
                var0 = var1;
            case 38:
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var3 = function arg0() {
        _fun50064: for (var _fun50064_ip = 0;;) switch (_fun50064_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun50064_ip = 41;
                    continue _fun50064
                }
            case 12:
                var1 = _closure1_slot11;
                var3 = undefined;
                var1 = var1.bind(var3)(var4);
                if (var1) {
                    _fun50064_ip = 38;
                    continue _fun50064
                }
            case 29:
                var2 = _closure1_slot12;
                var1 = var2.bind(var3)(var4);
            case 38:
                var0 = var1;
            case 41:
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.ReportToModPermissions;
    var _closure1_slot9 = var7;
    var7 = 16;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/report_to_mod/ReportToModUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function arg0() {
        _fun50065: for (var _fun50065_ip = 0;;) switch (_fun50065_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.canReportUser;
                var2 = var1.author;
                var2 = var3.bind(var5)(var2);
                if (var2) {
                    _fun50065_ip = 52;
                    continue _fun50065
                }
            case 48:
                var2 = false;
                return var2;
            case 52:
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = var1.channel_id;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun50065_ip = 155;
                    continue _fun50065
                }
            case 77:
                var5 = _closure1_slot6;
                var3 = var5.getGuild;
                var1 = var1.guild_id;
                var3 = var3.bind(var5)(var1);
                if (!(var2 != var3)) {
                    _fun50065_ip = 151;
                    continue _fun50065
                }
            case 100:
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 7;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.bind(var4)(var3);
                var1 = 8;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)(var3);
                if (!var0) {
                    _fun50065_ip = 149;
                    continue _fun50065
                }
            case 145:
                var0 = var2 != var1;
            case 149:
                return var0;
            case 151:
                var0 = false;
                return var0;
            case 155:
                var0 = false;
                return var0;
        }
    };
    var2.canReportMessageToMods = var7;
    var7 = function(arg0) { // Environment: var1
        _fun50066: for (var _fun50066_ip = 0;;) switch (_fun50066_ip) {
            case 0:
                var4 = arguments[1];
                var6 = undefined;
                if (!(var4 === var6)) {
                    _fun50066_ip = 35;
                    continue _fun50066
                }
            case 9:
                var2 = _closure1_slot6;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = _closure1_slot8;
                var0[1] = var1;
                var4 = var0;
            case 35:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 9;
                var0 = var3[var0];
                var3 = var2.bind(var6)(var0);
                var2 = var3.getContextForPermission;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var4);
                var3 = null;
                if (!(var3 != var0)) {
                    _fun50066_ip = 243;
                    continue _fun50066
                }
            case 82:
                var8 = var0.user;
                var7 = var0.guild;
                var2 = var3 == var7;
                if (var2) {
                    _fun50066_ip = 127;
                    continue _fun50066
                }
            case 99:
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 7;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.bind(var6)(var7);
                var2 = !var0;
            case 127:
                if (var2) {
                    _fun50066_ip = 159;
                    continue _fun50066
                }
            case 130:
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 8;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.bind(var6)(var7);
                var2 = var3 == var0;
            case 159:
                var0 = !var2;
                if (var2) {
                    _fun50066_ip = 241;
                    continue _fun50066
                }
            case 165:
                var5 = _closure1_slot2;
                var9 = _closure1_slot3;
                var2 = 10;
                var2 = var9[var2];
                var4 = var5.bind(var6)(var2);
                var3 = var4.hasAny;
                var2 = 11;
                var2 = var9[var2];
                var6 = var5.bind(var6)(var2);
                var5 = var6.computePermissions;
                var2 = {};
                var2.user = var8;
                var2.context = var7;
                var7 = false;
                var2.checkElevated = var7;
                var2 = var5.bind(var6)(var2);
                var1 = _closure1_slot9;
                var0 = var3.bind(var4)(var2, var1);
            case 241:
                return var0;
            case 243:
                var0 = false;
                return var0;
        }
    };
    var2.canAccessReportsChannel = var7;
    var7 = function arg0() {
        _fun50067: for (var _fun50067_ip = 0;;) switch (_fun50067_ip) {
            case 0:
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var0 = arg0;
                var3 = var2.bind(var3)(var0);
                var0 = null;
                var2 = var0 == var3;
                if (var2) {
                    _fun50067_ip = 56;
                    continue _fun50067
                }
            case 29:
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 8;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var0 = var1.bind(var2)(var3);
            case 56:
                return var0;
        }
    };
    var2.getReportToModChannelId = var7;
    var2.isModeratorReportOrPostChannelId = var6;
    var6 = function arg0() {
        var2 = _closure1_slot11;
        var3 = _closure1_slot5;
        var1 = var3.getChannel;
        var0 = arg0;
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.isModeratorReportChannelId = var6;
    var2.isModeratorReportChannel = var5;
    var5 = function arg0() {
        var2 = _closure1_slot12;
        var3 = _closure1_slot5;
        var1 = var3.getChannel;
        var0 = arg0;
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.isModeratorReportPostChannelId = var5;
    var2.isModeratorReportPostChannel = var4;
    var2.isModeratorReportOrPostChannel = var3;
    var3 = function arg0() {
        _fun50070: for (var _fun50070_ip = 0;;) switch (_fun50070_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun50070_ip = 171;
                    continue _fun50070
                }
            case 12:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 12;
                var0 = var5[var0];
                var6 = undefined;
                var3 = var3.bind(var6)(var0);
                var0 = var3.isCurrentUserTeen;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun50070_ip = 54;
                    continue _fun50070
                }
            case 50:
                var0 = true;
                return var0;
            case 54:
                var0 = _closure1_slot10;
                var0 = var0.bind(var6)(var4);
                if (var0) {
                    _fun50070_ip = 70;
                    continue _fun50070
                }
            case 66:
                var0 = true;
                return var0;
            case 70:
                var3 = _closure1_slot4;
                var0 = var3.getMessage;
                var3 = var0.bind(var3)(var4);
                var0 = var3.loaded;
                var4 = var3.firstMessage;
                var0 = !var0;
                if (var0) {
                    _fun50070_ip = 107;
                    continue _fun50070
                }
            case 103:
                var0 = var2 == var4;
            case 107:
                if (var0) {
                    _fun50070_ip = 169;
                    continue _fun50070
                }
            case 110:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 13;
                var1 = var7[var1];
                var3 = var5.bind(var6)(var1);
                var2 = var3.messageHasObscurableMediaForBitmask;
                var1 = 14;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ContentHarmTypeBitMask;
                var1 = var1.EXPLICIT;
                var1 = var2.bind(var3)(var4, var1);
                var0 = !var1;
            case 169:
                return var0;
            case 171:
                var0 = true;
                return var0;
        }
    };
    var2.isSafeToTransitionToReportForCurrentUser = var3;
    var3 = function arg0, arg1() {
        _fun50071: for (var _fun50071_ip = 0;;) switch (_fun50071_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = var2.isFirstMessageInForumPost;
                var0 = var0.bind(var2)(var3);
                var1 = !var0;
                if (var1) {
                    _fun50071_ip = 36;
                    continue _fun50071
                }
            case 23:
                var0 = var2.isSystemDM;
                var0 = var0.bind(var2)();
                var1 = !var0;
            case 36:
                var0 = !var1;
                if (var1) {
                    _fun50071_ip = 56;
                    continue _fun50071
                }
            case 42:
                var2 = _closure1_slot12;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 56:
                return var0;
        }
    };
    var2.isModeratorReportThreadStarterMessage = var3;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun50073: for (var _fun50073_ip = 0;;) switch (_fun50073_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.id;
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var5 = 15;
                    var0 = var0[var5];
                    var4 = undefined;
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.ReservedTagIds;
                    var0 = var0.MULTIPLE_REPORTS;
                    var2 = var2 == var0;
                    var0 = -1;
                    if (var2) {
                        _fun50073_ip = 110;
                        continue _fun50073
                    }
                case 58:
                    var2 = arg1;
                    var2 = var2.id;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.ReservedTagIds;
                    var1 = var1.MULTIPLE_REPORTS;
                    var2 = var2 == var1;
                    var1 = 0;
                    if (!var2) {
                        _fun50073_ip = 107;
                        continue _fun50073
                    }
                case 104:
                    var1 = 1;
                case 107:
                    var0 = var1;
                case 110:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.sortedModeratorReportTags = var3;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.messageSnapshots;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.moderatorReport;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isModeratorReportMessage = var3;
    var1 = function arg0, arg1() {
        _fun50076: for (var _fun50076_ip = 0;;) switch (_fun50076_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot5;
                var1 = var2.getChannel;
                var4 = var1.bind(var2)(var3);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun50076_ip = 133;
                    continue _fun50076
                }
            case 26:
                var1 = var4.isModeratorReportChannel;
                var1 = var1.bind(var4)();
                if (!var1) {
                    _fun50076_ip = 133;
                    continue _fun50076
                }
            case 39:
                var1 = _closure1_slot7;
                var0 = var1.getMessages;
                var1 = var0.bind(var1)(var3);
                var0 = var1.first;
                var0 = var0.bind(var1)();
                var4 = var2 == var0;
                var1 = undefined;
                if (var4) {
                    _fun50076_ip = 124;
                    continue _fun50076
                }
            case 73:
                var4 = var0.messageSnapshots;
                var0 = var2 == var4;
                var1 = undefined;
                if (var0) {
                    _fun50076_ip = 124;
                    continue _fun50076
                }
            case 88:
                var0 = 0;
                var0 = var4[var0];
                var4 = var2 == var0;
                var1 = undefined;
                if (var4) {
                    _fun50076_ip = 124;
                    continue _fun50076
                }
            case 103:
                var0 = var0.moderatorReport;
                var2 = var2 == var0;
                var1 = undefined;
                if (var2) {
                    _fun50076_ip = 124;
                    continue _fun50076
                }
            case 118:
                var1 = var0.reported_user_id;
            case 124:
                var0 = arg1;
                var0 = var1 === var0;
                return var0;
            case 133:
                var0 = false;
                return var0;
        }
    };
    var2.isUserAuthorOfReportedMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5646, 1372, 1410, 4249, 1621, 5677, 5678, 4589, 4588, 5641, 484, 3096, 4260, 4270, 4271, 5679, 2]);