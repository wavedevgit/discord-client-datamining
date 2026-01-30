// modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function(arg0) { // Original name: getGuildMemberSecondaryIndexes, environment: var1
        _fun40369: for (var _fun40369_ip = 0;;) switch (_fun40369_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.isCurrentGuildMemberByTimestamp;
                var0 = _closure1_slot7;
                if (var3) {
                    _fun40369_ip = 27;
                    continue _fun40369
                }
            case 19:
                var3 = var0.NEW_GUILD_MEMBER;
                _fun40369_ip = 33;
                continue _fun40369;
            case 27:
                var3 = var0.CURRENT_GUILD_MEMBER;
            case 33:
                var0 = new Array(1);
                var0[0] = var3;
                var2 = var2.isIncludedInSearchResults;
                if (!var2) {
                    _fun40369_ip = 70;
                    continue _fun40369
                }
            case 50:
                var2 = var0.push;
                var1 = _closure1_slot7;
                var1 = var1.INCLUDED_IN_SEARCH_RESULTS;
                var1 = var2.bind(var0)(var1);
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0) { // Original name: getGuildMemberSecondarySortBy, environment: var1
        var0 = arg0;
        var0 = var0.sort;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() { // Original name: createMembersMap, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.SecondaryIndexMap;
        var5 = _closure1_slot8;
        var4 = _closure1_slot9;
        var1 = var3.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var3
            }
        });
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot10 = var0;
    var3 = function(arg0) { // Original name: hasUnusualDmActivity, environment: var1
        _fun40372: for (var _fun40372_ip = 0;;) switch (_fun40372_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun40372_ip = 96;
                    continue _fun40372
                }
            case 12:
                var1 = global;
                var1 = var1.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var2;
                var6 = var3;
                var1 = new var7[var1](var6, var5);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var2.getTime;
                var2 = var1.bind(var2)();
                var3 = _closure1_slot6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 4;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.UNUSUAL_DM_COMPARISON_DELTA;
                var1 = var3 - var1;
                var0 = var2 >= var1;
            case 96:
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = var4.Date;
    var4 = var5.now;
    var4 = var4.bind(var5)();
    var _closure1_slot6 = var4;
    var4 = {};
    var5 = 'NEW_GUILD_MEMBER';
    var4.NEW_GUILD_MEMBER = var5;
    var5 = 'CURRENT_GUILD_MEMBER';
    var4.CURRENT_GUILD_MEMBER = var5;
    var5 = 'INCLUDED_IN_SEARCH_RESULTS';
    var4.INCLUDED_IN_SEARCH_RESULTS = var5;
    var _closure1_slot7 = var4;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0) { // Original name: GuildMemberSafetyMembers, environment: var4
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            var2.newMemberTimestamp = var3;
            var3 = arg0;
            var2.guildId = var3;
            var1 = _closure1_slot10;
            var1 = var1.bind(var0)();
            var2._membersMap = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var2 = this;
            var1 = var2._membersMap;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var1 = _closure1_slot10;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2._membersMap = var1;
            var1 = var2.resetNewMemberTimestamp;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var1;
        var1 = new Array(11);
        var1[0] = var0;
        var0 = {};
        var5 = 'resetNewMemberTimestamp';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = global;
            var1 = var0.Date;
            var0 = var1.now;
            var1 = var0.bind(var1)();
            var0 = this;
            var0.newMemberTimestamp = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'enhanceNewMember';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun40377: for (var _fun40377_ip = 0;;) switch (_fun40377_ip) {
                case 0:
                    var6 = arg0;
                    var1 = arguments[2];
                    var2 = this;
                    var9 = undefined;
                    if (!(var1 === var9)) {
                        _fun40377_ip = 17;
                        continue _fun40377
                    }
                case 15:
                    var1 = {};
                case 17:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 5;
                    var0 = var5[var0];
                    var8 = var4.bind(var9)(var0);
                    var3 = var8.getJoinedAtTimestamp;
                    var0 = var6.joinedAt;
                    var3 = var3.bind(var8)(var0);
                    var10 = var2._computeMemberSupplementals;
                    var8 = var6.userId;
                    var0 = var6.unusualDMActivityUntil;
                    var0 = var10.bind(var2)(var8, var0);
                    var17 = var0.hasUnusualDmActivity;
                    var16 = var0.hasUnusualAccountActivity;
                    var15 = var0.sourceInviteCode;
                    var14 = var0.joinSourceType;
                    var13 = var0.inviterId;
                    var12 = var0.integrationType;
                    var11 = var0.joinSourceApplicationId;
                    var10 = var0.joinSourceChannelId;
                    var18 = _closure1_slot5;
                    var8 = var18.getUser;
                    var0 = var6.userId;
                    var8 = var8.bind(var18)(var0);
                    var0 = {};
                    var0.hasUnusualDmActivity = var17;
                    var0.hasUnusualAccountActivity = var16;
                    var0.sourceInviteCode = var15;
                    var0.joinSourceType = var14;
                    var0.inviterId = var13;
                    var0.integrationType = var12;
                    var0.joinSourceApplicationId = var11;
                    var0.joinSourceChannelId = var10;
                    var20 = var0;
                    var19 = var6;
                    var10 = copyDataProperties(var20, var19);
                    var2 = var2.newMemberTimestamp;
                    var10 = var3 <= var2;
                    var2 = 'isCurrentGuildMemberByTimestamp';
                    var0[var2] = var10;
                    var10 = false;
                    var2 = 'isIncludedInSearchResults';
                    var0[var2] = var10;
                    var2 = 'user';
                    var0[var2] = var8;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = var4.bind(var9)(var2);
                    var4 = var5.getSortValueForMember;
                    var2 = arg1;
                    var2 = var2.selectedSort;
                    var8 = null;
                    if (!(var8 == var2)) {
                        _fun40377_ip = 304;
                        continue _fun40377
                    }
                case 272:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 4;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.OrderBy;
                    var2 = var7.ORDER_BY_UNSPECIFIED;
                case 304:
                    var4 = var4.bind(var5)(var6, var2);
                    var2 = 'sort';
                    var0[var2] = var4;
                    var2 = 'joinedAtTimestamp';
                    var0[var2] = var3;
                    var20 = var0;
                    var19 = var1;
                    var1 = copyDataProperties(var20, var19);
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_computeMemberSupplementals';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun40378: for (var _fun40378_ip = 0;;) switch (_fun40378_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var0 = var4[var0];
                    var4 = undefined;
                    var5 = var2.bind(var4)(var0);
                    var2 = var5.getMemberSupplementalByGuildId;
                    var0 = this;
                    var0 = var0.guildId;
                    var0 = var2.bind(var5)(var0);
                    var0 = var0[var3];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun40378_ip = 59;
                        continue _fun40378
                    }
                case 57:
                    var0 = {};
                case 59:
                    var11 = var0.sourceInviteCode;
                    var10 = var0.joinSourceType;
                    var9 = var0.inviterId;
                    var8 = var0.integrationType;
                    var7 = var0.joinSourceApplicationId;
                    var5 = var0.joinSourceChannelId;
                    var0 = {};
                    var12 = var2 != var11;
                    var6 = null;
                    if (!var12) {
                        _fun40378_ip = 109;
                        continue _fun40378
                    }
                case 106:
                    var6 = var11;
                case 109:
                    var0.sourceInviteCode = var6;
                    var11 = var2 != var10;
                    var6 = null;
                    if (!var11) {
                        _fun40378_ip = 126;
                        continue _fun40378
                    }
                case 123:
                    var6 = var10;
                case 126:
                    var0.joinSourceType = var6;
                    var10 = var2 != var9;
                    var6 = null;
                    if (!var10) {
                        _fun40378_ip = 143;
                        continue _fun40378
                    }
                case 140:
                    var6 = var9;
                case 143:
                    var0.inviterId = var6;
                    var9 = var2 != var8;
                    var6 = null;
                    if (!var9) {
                        _fun40378_ip = 160;
                        continue _fun40378
                    }
                case 157:
                    var6 = var8;
                case 160:
                    var0.integrationType = var6;
                    var8 = var2 != var7;
                    var6 = null;
                    if (!var8) {
                        _fun40378_ip = 177;
                        continue _fun40378
                    }
                case 174:
                    var6 = var7;
                case 177:
                    var0.joinSourceApplicationId = var6;
                    var6 = var2 != var5;
                    var2 = null;
                    if (!var6) {
                        _fun40378_ip = 194;
                        continue _fun40378
                    }
                case 191:
                    var2 = var5;
                case 194:
                    var0.joinSourceChannelId = var2;
                    var5 = _closure1_slot11;
                    var2 = arg1;
                    var2 = var5.bind(var4)(var2);
                    var0.hasUnusualDmActivity = var2;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 8;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.isSpammer;
                    var1 = var1.bind(var2)(var3);
                    var0.hasUnusualAccountActivity = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'createMember';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var3 = arg0;
            var0 = this;
            var2 = var0._membersMap;
            var1 = var2.set;
            var0 = var3.userId;
            var0 = var1.bind(var2)(var0, var3);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'updateMember';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun40380: for (var _fun40380_ip = 0;;) switch (_fun40380_ip) {
                case 0:
                    var3 = arg0;
                    var1 = arg1;
                    var0 = this;
                    var5 = null;
                    if (!(var5 != var1)) {
                        _fun40380_ip = 361;
                        continue _fun40380
                    }
                case 18:
                    var6 = {};
                    var21 = var6;
                    var20 = var3;
                    var2 = copyDataProperties(var21, var20);
                    var14 = {};
                    var21 = var14;
                    var20 = var1;
                    var1 = copyDataProperties(var21, var20);
                    var4 = var0._computeMemberSupplementals;
                    var2 = var6.userId;
                    var1 = var14.unusualDMActivityUntil;
                    if (!(var5 == var1)) {
                        _fun40380_ip = 69;
                        continue _fun40380
                    }
                case 63:
                    var1 = var6.unusualDMActivityUntil;
                case 69:
                    var4 = var4.bind(var0)(var2, var1);
                    var15 = var4.sourceInviteCode;
                    var9 = var4.hasUnusualDmActivity;
                    var8 = var4.hasUnusualAccountActivity;
                    var7 = var4.joinSourceType;
                    var2 = var4.inviterId;
                    var1 = var4.integrationType;
                    var5 = var4.joinSourceApplicationId;
                    var4 = var4.joinSourceChannelId;
                    var16 = var6.sourceInviteCode;
                    if (!(var16 !== var15)) {
                        _fun40380_ip = 139;
                        continue _fun40380
                    }
                case 133:
                    var14.sourceInviteCode = var15;
                case 139:
                    var15 = var6.hasUnusualDmActivity;
                    if (!(var15 !== var9)) {
                        _fun40380_ip = 155;
                        continue _fun40380
                    }
                case 149:
                    var14.hasUnusualDmActivity = var9;
                case 155:
                    var9 = var6.hasUnusualAccountActivity;
                    if (!(var9 !== var8)) {
                        _fun40380_ip = 171;
                        continue _fun40380
                    }
                case 165:
                    var14.hasUnusualAccountActivity = var8;
                case 171:
                    var8 = var6.joinSourceType;
                    if (!(var8 !== var7)) {
                        _fun40380_ip = 187;
                        continue _fun40380
                    }
                case 181:
                    var14.joinSourceType = var7;
                case 187:
                    var7 = var6.joinSourceApplicationId;
                    if (!(var7 !== var5)) {
                        _fun40380_ip = 203;
                        continue _fun40380
                    }
                case 197:
                    var14.joinSourceApplicationId = var5;
                case 203:
                    var5 = var6.joinSourceChannelId;
                    if (!(var5 !== var4)) {
                        _fun40380_ip = 219;
                        continue _fun40380
                    }
                case 213:
                    var14.joinSourceChannelId = var4;
                case 219:
                    var4 = var6.inviterId;
                    if (!(var4 !== var2)) {
                        _fun40380_ip = 235;
                        continue _fun40380
                    }
                case 229:
                    var14.inviterId = var2;
                case 235:
                    var2 = var6.integrationType;
                    if (!(var2 !== var1)) {
                        _fun40380_ip = 251;
                        continue _fun40380
                    }
                case 245:
                    var14.integrationType = var1;
                case 251:
                    var12 = var14;
                    var1 = false;
                    var5 = 9;
                    var4 = undefined;
                    var2 = false;
                    for (var9 in var12)
                        case 274: {
                            var2 = var1;
                            case 286: var16 = var9;
                            var15 = var14[var16];
                            var18 = var6[var16];
                            var19 = _closure1_slot1;
                            var17 = _closure1_slot2;
                            var17 = var17[var5];
                            var17 = var19.bind(var4)(var17);
                            var17 = var17.bind(var4)(var15, var18);
                            if (var17) {
                                _fun40380_ip = 274;
                                continue _fun40380
                            }
                            case 323: var6[var16] = var15;
                            var1 = true;
                            _fun40380_ip = 274;
                            continue _fun40380;
                        }
                case 331:
                    var5 = var0._membersMap;
                    var4 = var5.set;
                    var1 = var6.userId;
                    var1 = var4.bind(var5)(var1, var6);
                    if (var1) {
                        _fun40380_ip = 359;
                        continue _fun40380
                    }
                case 356:
                    var1 = var2;
                case 359:
                    return var1;
                case 361:
                    var2 = var0._membersMap;
                    var1 = var2.set;
                    var0 = var3.userId;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'removeMember';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0._membersMap;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getMemberByUserId';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0._membersMap;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'values';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var3 = var0._membersMap;
            var2 = var3.values;
            var1 = arg0;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'count';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0._membersMap;
            var1 = var2.size;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'version';
        var0.key = var5;
        var4 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._membersMap;
            var0 = var0.version;
            return var0;
        };
        var0.get = var4;
        var1[10] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx';
    var5 = var6.bind(var7)(var5);
    var2.MemberSafetySecondaryIndex = var4;
    var2.hasUnusualDmActivity = var3;
    var2.GuildMemberSafetyMembers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1613, 3046, 4352, 4353, 4355, 4356, 4492, 4504, 2]);