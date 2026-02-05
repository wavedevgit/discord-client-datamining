// modules/in_app_notifications/InAppNotificationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.REACTION_MILESTONE_COUNTS;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_notifications/InAppNotificationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2, arg3() {
        _fun69956: for (var _fun69956_ip = 0;;) switch (_fun69956_ip) {
            case 0:
                var4 = arg0;
                var3 = arg2;
                var1 = arg3;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var9 = 4;
                var2 = var2[var9];
                var8 = undefined;
                var10 = var5.bind(var8)(var2);
                var7 = var10.computeChannelName;
                var17 = _closure1_slot3;
                var16 = _closure1_slot2;
                var15 = true;
                var19 = var10;
                var18 = var4;
                var6 = var19[var7](var18, var17, var16, var15, var14);
                var2 = null;
                var5 = var2 != var3;
                var11 = null;
                if (!var5) {
                    _fun69956_ip = 109;
                    continue _fun69956
                }
            case 71:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var9];
                var9 = var7.bind(var8)(var5);
                var8 = var9.computeChannelName;
                var7 = _closure1_slot3;
                var5 = _closure1_slot2;
                var11 = var8.bind(var9)(var3, var7, var5);
            case 109:
                var5 = arg1;
                var5 = var5.nick;
                var7 = var4.type;
                var4 = _closure1_slot5;
                var4 = var4.GROUP_DM;
                if (!(var4 !== var7)) {
                    _fun69956_ip = 427;
                    continue _fun69956
                }
            case 140:
                var4 = _closure1_slot5;
                var4 = var4.GUILD_TEXT;
                if (!(var4 !== var7)) {
                    _fun69956_ip = 370;
                    continue _fun69956
                }
            case 157:
                var4 = _closure1_slot5;
                var4 = var4.GUILD_ANNOUNCEMENT;
                if (!(var4 !== var7)) {
                    _fun69956_ip = 370;
                    continue _fun69956
                }
            case 174:
                var4 = _closure1_slot5;
                var4 = var4.ANNOUNCEMENT_THREAD;
                if (!(var4 !== var7)) {
                    _fun69956_ip = 222;
                    continue _fun69956
                }
            case 188:
                var4 = _closure1_slot5;
                var4 = var4.PUBLIC_THREAD;
                if (!(var4 !== var7)) {
                    _fun69956_ip = 222;
                    continue _fun69956
                }
            case 202:
                var0 = _closure1_slot5;
                var4 = var0.PRIVATE_THREAD;
                var0 = var5;
                if (!(var4 === var7)) {
                    _fun69956_ip = 464;
                    continue _fun69956
                }
            case 222:
                if (!(var2 == var3)) {
                    _fun69956_ip = 319;
                    continue _fun69956
                }
            case 226:
                if (!(var2 == var1)) {
                    _fun69956_ip = 269;
                    continue _fun69956
                }
            case 230:
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var19 = '';
                var17 = ' (';
                var15 = ')';
                var18 = var5;
                var16 = var6;
                var3 = var19[var8](var18, var17, var16, var15, var14);
                _fun69956_ip = 317;
                continue _fun69956;
            case 269:
                var14 = var1.name;
                var4 = global;
                var4 = var4.HermesInternal;
                var10 = var4.concat;
                var19 = '';
                var17 = ' (';
                var15 = ', ';
                var13 = ')';
                var18 = var5;
                var16 = var6;
                var3 = var19[var10](var18, var17, var16, var15, var14, var13, var12);
            case 317:
                _fun69956_ip = 365;
                continue _fun69956;
            case 319:
                var4 = global;
                var4 = var4.HermesInternal;
                var10 = var4.concat;
                var19 = '';
                var17 = ' (';
                var15 = ', ';
                var13 = ')';
                var18 = var5;
                var16 = var6;
                var14 = var11;
                var3 = var19[var10](var18, var17, var16, var15, var14, var13, var12);
            case 365:
                var0 = var3;
                _fun69956_ip = 464;
                continue _fun69956;
            case 370:
                var0 = var5;
                if (!(var2 != var1)) {
                    _fun69956_ip = 464;
                    continue _fun69956
                }
            case 377:
                var14 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var19 = '';
                var17 = ' (';
                var15 = ', ';
                var13 = ')';
                var18 = var5;
                var16 = var6;
                var0 = var19[var7](var18, var17, var16, var15, var14, var13, var12);
                _fun69956_ip = 464;
                continue _fun69956;
            case 427:
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var19 = '';
                var17 = ' (';
                var15 = ')';
                var18 = var5;
                var16 = var6;
                var0 = var19[var4](var18, var17, var16, var15, var14);
            case 464:
                return var0;
        }
    };
    var2.getNotificationTitle = var3;
    var1 = function arg0, arg1() {
        _fun69957: for (var _fun69957_ip = 0;;) switch (_fun69957_ip) {
            case 0:
                var2 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun69957_ip = 88;
                    continue _fun69957
                }
            case 9:
                var1 = _closure1_slot5;
                var1 = var1.GUILD_ANNOUNCEMENT;
                if (!(var2 !== var1)) {
                    _fun69957_ip = 88;
                    continue _fun69957
                }
            case 26:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.sumBy;
                var2 = arg0;
                var1 = function(arg0) { // Environment: var1
                    _fun69958: for (var _fun69958_ip = 0;;) switch (_fun69958_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.count_details;
                            var3 = null;
                            var0 = var3 == var4;
                            var5 = undefined;
                            if (var0) {
                                _fun69958_ip = 26;
                                continue _fun69958
                            }
                        case 20:
                            var5 = var4.burst;
                        case 26:
                            var6 = var3 != var5;
                            var0 = 0;
                            if (!var6) {
                                _fun69958_ip = 38;
                                continue _fun69958
                            }
                        case 35:
                            var0 = var5;
                        case 38:
                            var5 = var3 == var4;
                            var2 = undefined;
                            if (var5) {
                                _fun69958_ip = 53;
                                continue _fun69958
                            }
                        case 47:
                            var2 = var4.normal;
                        case 53:
                            var3 = var3 != var2;
                            var1 = 0;
                            if (!var3) {
                                _fun69958_ip = 65;
                                continue _fun69958
                            }
                        case 62:
                            var1 = var2;
                        case 65:
                            var0 = var0 + var1;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2, var1);
                var1 = _closure1_slot4;
                var0 = var1.has;
                var0 = var0.bind(var1)(var2);
                return var0;
            case 88:
                var0 = false;
                return var0;
        }
    };
    var2.isReactionMilestoneNotification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3100, 1621, 8769, 660, 4794, 22, 2]);