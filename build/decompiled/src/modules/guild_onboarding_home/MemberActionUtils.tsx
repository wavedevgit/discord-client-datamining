// modules/guild_onboarding_home/MemberActionUtils.tsx
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
    var3 = var3.GuildMemberFlags;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/MemberActionUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun89799: for (var _fun89799_ip = 0;;) switch (_fun89799_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = arg1;
                var _closure2_slot1 = var2;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var1);
                var6 = _closure1_slot0;
                var5 = 5;
                var8 = var7[var5];
                var11 = var6.bind(var3)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = new Array(1);
                var8[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getNewMemberActions;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var10.bind(var11)(var9, var1, var8);
                var5 = var7[var5];
                var7 = var6.bind(var3)(var5);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getCompletedActions;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var6.bind(var7)(var5, var4);
                if (var2) {
                    _fun89799_ip = 147;
                    continue _fun89799
                }
            case 143:
                var2 = {};
                return var2;
            case 147:
                var5 = null;
                var2 = var5 == var1;
                var6 = undefined;
                if (var2) {
                    _fun89799_ip = 176;
                    continue _fun89799
                }
            case 158:
                var2 = var1.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.channelId;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var6 = var2.bind(var1)(var0);
            case 176:
                var7 = var5 != var6;
                var2 = 0;
                var0 = 0;
                if (!var7) {
                    _fun89799_ip = 190;
                    continue _fun89799
                }
            case 187:
                var0 = var6;
            case 190:
                var6 = var0 >= var2;
                var2 = null;
                if (!var6) {
                    _fun89799_ip = 212;
                    continue _fun89799
                }
            case 199:
                var6 = var5 != var1;
                var2 = null;
                if (!var6) {
                    _fun89799_ip = 212;
                    continue _fun89799
                }
            case 208:
                var2 = var1[var0];
            case 212:
                var0 = {};
                var0.channelAction = var2;
                var1 = var5 != var2;
                if (!var1) {
                    _fun89799_ip = 250;
                    continue _fun89799
                }
            case 226:
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun89799_ip = 244;
                    continue _fun89799
                }
            case 235:
                var2 = var2.channelId;
                var3 = var4[var2];
            case 244:
                var2 = true;
                var1 = var2 === var3;
            case 250:
                var0.completed = var1;
                return var0;
        }
    };
    var2.useMemberActionsForChannel = var3;
    var3 = function arg0, arg1() {
        _fun89803: for (var _fun89803_ip = 0;;) switch (_fun89803_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 5;
                var3 = var6[var4];
                var0 = undefined;
                var9 = var5.bind(var0)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getNewMemberActions;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var8.bind(var9)(var7, var3);
                var4 = var6[var4];
                var6 = var5.bind(var0)(var4);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getCompletedActions;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var5.bind(var6)(var4, var2);
                var _closure2_slot2 = var2;
                var2 = null;
                var2 = var2 == var3;
                if (var2) {
                    _fun89803_ip = 140;
                    continue _fun89803
                }
            case 123:
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    _fun89806: for (var _fun89806_ip = 0;;) switch (_fun89806_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 == var3;
                            var3 = undefined;
                            if (var0) {
                                _fun89806_ip = 34;
                                continue _fun89806
                            }
                        case 21:
                            var4 = _closure2_slot2;
                            var0 = var2.channelId;
                            var3 = var4[var0];
                        case 34:
                            var0 = true;
                            var0 = var0 !== var3;
                            if (!var0) {
                                _fun89806_ip = 56;
                                continue _fun89806
                            }
                        case 43:
                            var2 = var2.channelId;
                            var1 = _closure2_slot1;
                            var0 = var2 !== var1;
                        case 56:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 140:
                return var0;
        }
    };
    var2.useNextMemberAction = var3;
    var1 = function arg0() {
        _fun89807: for (var _fun89807_ip = 0;;) switch (_fun89807_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 5;
                var5 = var3[var4];
                var4 = undefined;
                var7 = var2.bind(var4)(var5);
                var6 = var7.useStateFromStores;
                var8 = _closure1_slot3;
                var5 = new Array(1);
                var5[0] = var8;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getSelfMember;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var1);
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.hasFlag;
                var1 = null;
                var6 = var1 == var5;
                if (var6) {
                    _fun89807_ip = 96;
                    continue _fun89807
                }
            case 91:
                var4 = var5.flags;
            case 96:
                var5 = var1 != var4;
                var1 = 0;
                if (!var5) {
                    _fun89807_ip = 108;
                    continue _fun89807
                }
            case 105:
                var1 = var4;
            case 108:
                var0 = _closure1_slot6;
                var0 = var0.COMPLETED_HOME_ACTIONS;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useAllActionsCompleted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1681, 4309, 4310, 3081, 4582, 632, 1384, 2]);