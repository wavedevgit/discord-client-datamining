// modules/guild_profile/hooks/useGuildProfileCTA.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var13 = 0;
    var5 = var7[var13];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var12 = 1;
    var3 = var7[var12];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var11 = 2;
    var3 = var7[var11];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var10 = 3;
    var3 = var7[var10];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var7[var9];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var8 = 5;
    var3 = var7[var8];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var5 = 6;
    var3 = var7[var5];
    var3 = var6.bind(var0)(var3);
    var4 = var3.InviteStates;
    var _closure1_slot9 = var4;
    var3 = var3.GuildFeatures;
    var _closure1_slot10 = var3;
    var4 = {};
    var4.IS_MEMBER = var13;
    var3 = 'IS_MEMBER';
    var4[var13] = var3;
    var4.ADOPT_TAG = var12;
    var3 = 'ADOPT_TAG';
    var4[var12] = var3;
    var4.HAS_APPLICATION = var11;
    var3 = 'HAS_APPLICATION';
    var4[var11] = var3;
    var4.APPLY_TO_JOIN = var10;
    var3 = 'APPLY_TO_JOIN';
    var4[var10] = var3;
    var4.LURK_DISCOVERABLE = var9;
    var3 = 'LURK_DISCOVERABLE';
    var4[var9] = var3;
    var4.JOIN_VIA_INVITE = var8;
    var3 = 'JOIN_VIA_INVITE';
    var4[var8] = var3;
    var4.ACCEPT_ROLES = var5;
    var3 = 'ACCEPT_ROLES';
    var4[var5] = var3;
    var _closure1_slot11 = var4;
    var3 = {};
    var5 = 'INVITE';
    var3.INVITE = var5;
    var _closure1_slot12 = var3;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_profile/hooks/useGuildProfileCTA.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0, arg1, arg2() {
        var11 = arg0;
        var9 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var9;
        var _closure2_slot2 = var1;
        var3 = var11.id;
        var _closure2_slot3 = var3;
        var12 = var11.features;
        var _closure2_slot4 = var12;
        var7 = _closure1_slot0;
        var15 = _closure1_slot2;
        var4 = 7;
        var6 = var15[var4];
        var5 = undefined;
        var13 = var7.bind(var5)(var6);
        var10 = var13.useStateFromStores;
        var6 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() { // Environment: var0
            var1 = _closure1_slot4;
            var0 = var1.getId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var10 = var10.bind(var13)(var8, var6);
        var _closure2_slot5 = var10;
        var6 = var15[var4];
        var14 = var7.bind(var5)(var6);
        var13 = var14.useStateFromStores;
        var6 = _closure1_slot6;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = var2.getGuild;
            var0 = _closure2_slot3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var13.bind(var14)(var8, var6);
        var _closure2_slot6 = var8;
        var6 = var15[var4];
        var17 = var7.bind(var5)(var6);
        var16 = var17.useStateFromStores;
        var6 = _closure1_slot8;
        var14 = new Array(1);
        var14[0] = var6;
        var13 = new Array(1);
        var13[0] = var10;
        var6 = function() { // Environment: var0
            var2 = _closure1_slot8;
            var1 = var2.getUser;
            var0 = _closure2_slot5;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var16.bind(var17)(var14, var6, var13);
        var _closure2_slot7 = var6;
        var13 = var15[var4];
        var17 = var7.bind(var5)(var13);
        var16 = var17.useStateFromStores;
        var13 = _closure1_slot5;
        var14 = new Array(1);
        var14[0] = var13;
        var13 = new Array(2);
        var13[0] = var3;
        var13[1] = var10;
        var10 = function() { // Environment: var0
            _fun59897: for (var _fun59897_ip = 0;;) switch (_fun59897_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var2;
                    var2 = null;
                    if (!var3) {
                        _fun59897_ip = 45;
                        continue _fun59897
                    }
                case 18:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot3;
                    var0 = _closure2_slot5;
                    var2 = var4.bind(var5)(var3, var0);
                case 45:
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun59897_ip = 60;
                        continue _fun59897
                    }
                case 54:
                    var0 = var2.joinedAt;
                case 60:
                    var0 = var1 != var0;
                    return var0;
            }
        };
        var14 = var16.bind(var17)(var14, var10, var13);
        var _closure2_slot8 = var14;
        var4 = var15[var4];
        var13 = var7.bind(var5)(var4);
        var10 = var13.useStateFromStoresObject;
        var4 = _closure1_slot7;
        var7 = new Array(1);
        var7[0] = var4;
        var4 = new Array(2);
        var4[0] = var3;
        var4[1] = var1;
        var1 = function() { // Environment: var0
            _fun59898: for (var _fun59898_ip = 0;;) switch (_fun59898_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun59898_ip = 37;
                        continue _fun59898
                    }
                case 13:
                    var4 = _closure1_slot7;
                    var2 = var4.getInviteKeyForGuildId;
                    var1 = _closure2_slot3;
                    var4 = var2.bind(var4)(var1);
                    _fun59898_ip = 41;
                    continue _fun59898;
                case 37:
                    var4 = _closure2_slot2;
                case 41:
                    var0 = var3 != var4;
                    var1 = null;
                    if (!var0) {
                        _fun59898_ip = 68;
                        continue _fun59898
                    }
                case 50:
                    var2 = _closure1_slot7;
                    var0 = var2.getInvite;
                    var1 = var0.bind(var2)(var4);
                case 68:
                    if (!(var3 != var1)) {
                        _fun59898_ip = 227;
                        continue _fun59898
                    }
                case 75:
                    var5 = var1.state;
                    var0 = _closure1_slot9;
                    var0 = var0.BANNED;
                    if (!(var5 !== var0)) {
                        _fun59898_ip = 227;
                        continue _fun59898
                    }
                case 100:
                    var5 = var1.state;
                    var0 = _closure1_slot9;
                    var0 = var0.EXPIRED;
                    if (!(var5 !== var0)) {
                        _fun59898_ip = 227;
                        continue _fun59898
                    }
                case 119:
                    var0 = {};
                    var0.validInviteKey = var4;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.hasFlag;
                    var6 = var1.flags;
                    var8 = var3 != var6;
                    var3 = 0;
                    if (!var8) {
                        _fun59898_ip = 171;
                        continue _fun59898
                    }
                case 168:
                    var3 = var6;
                case 171:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.GuildInviteFlags;
                    var2 = var2.IS_APPLICATION_BYPASS;
                    var2 = var4.bind(var5)(var3, var2);
                    var0.isBypassInvite = var2;
                    var1 = var1.roles;
                    var0.inviteRoles = var1;
                    _fun59898_ip = 241;
                    continue _fun59898;
                case 227:
                    var0 = {
                        'validInviteKey': null,
                        'isBypassInvite': false,
                        'inviteRoles': null
                    };
                case 241:
                    return var0;
            }
        };
        var4 = var10.bind(var13)(var7, var1, var4);
        var1 = var4.validInviteKey;
        var _closure2_slot9 = var1;
        var10 = var4.isBypassInvite;
        var _closure2_slot10 = var10;
        var7 = var4.inviteRoles;
        var _closure2_slot11 = var7;
        var13 = _closure1_slot1;
        var4 = 10;
        var4 = var15[var4];
        var4 = var13.bind(var5)(var4);
        var13 = var4.bind(var5)();
        var _closure2_slot12 = var13;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var2 = new Array(12);
        var2[0] = var14;
        var2[1] = var13;
        var2[2] = var3;
        var2[3] = var12;
        var2[4] = var1;
        var12 = var11.visibility;
        var2[5] = var12;
        var11 = var11.tag;
        var2[6] = var11;
        var2[7] = var10;
        var2[8] = var9;
        var2[9] = var8;
        var2[10] = var7;
        var2[11] = var6;
        var0 = function() { // Environment: var0
            _fun59899: for (var _fun59899_ip = 0;;) switch (_fun59899_ip) {
                case 0:
                    var0 = _closure2_slot8;
                    if (var0) {
                        _fun59899_ip = 290;
                        continue _fun59899
                    }
                case 15:
                    var4 = _closure2_slot12;
                    var3 = var4.includes;
                    var0 = _closure2_slot3;
                    var0 = var3.bind(var4)(var0);
                    if (var0) {
                        _fun59899_ip = 275;
                        continue _fun59899
                    }
                case 39:
                    var0 = _closure2_slot4;
                    var6 = null;
                    if (!(var6 != var0)) {
                        _fun59899_ip = 192;
                        continue _fun59899
                    }
                case 52:
                    var5 = _closure2_slot4;
                    var4 = var5.includes;
                    var3 = _closure1_slot10;
                    var3 = var3.MEMBER_VERIFICATION_GATE_ENABLED;
                    var3 = var4.bind(var5)(var3);
                    if (!var3) {
                        _fun59899_ip = 192;
                        continue _fun59899
                    }
                case 82:
                    var3 = _closure2_slot4;
                    if (!(var6 != var3)) {
                        _fun59899_ip = 192;
                        continue _fun59899
                    }
                case 90:
                    var5 = _closure2_slot4;
                    var4 = var5.includes;
                    var3 = _closure1_slot10;
                    var3 = var3.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                    var3 = var4.bind(var5)(var3);
                    if (!var3) {
                        _fun59899_ip = 192;
                        continue _fun59899
                    }
                case 117:
                    var3 = _closure2_slot9;
                    if (!(var6 == var3)) {
                        _fun59899_ip = 173;
                        continue _fun59899
                    }
                case 125:
                    var3 = _closure2_slot0;
                    var4 = var3.visibility;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var5);
                    var3 = var3.GuildProfileVisibility;
                    var3 = var3.PUBLIC_WITH_RECRUITMENT;
                    if (!(var4 === var3)) {
                        _fun59899_ip = 192;
                        continue _fun59899
                    }
                case 173:
                    var3 = _closure2_slot10;
                    if (var3) {
                        _fun59899_ip = 192;
                        continue _fun59899
                    }
                case 180:
                    var0 = _closure1_slot11;
                    var0 = var0.APPLY_TO_JOIN;
                    _fun59899_ip = 273;
                    continue _fun59899;
                case 192:
                    var3 = _closure2_slot9;
                    if (!(var6 == var3)) {
                        _fun59899_ip = 257;
                        continue _fun59899
                    }
                case 200:
                    var3 = _closure2_slot4;
                    var4 = var6 != var3;
                    var3 = null;
                    if (!var4) {
                        _fun59899_ip = 255;
                        continue _fun59899
                    }
                case 213:
                    var8 = _closure2_slot4;
                    var7 = var8.includes;
                    var5 = _closure1_slot10;
                    var5 = var5.DISCOVERABLE;
                    var5 = var7.bind(var8)(var5);
                    var3 = null;
                    if (!var5) {
                        _fun59899_ip = 255;
                        continue _fun59899
                    }
                case 245:
                    var4 = _closure1_slot11;
                    var3 = var4.LURK_DISCOVERABLE;
                case 255:
                    _fun59899_ip = 270;
                    continue _fun59899;
                case 257:
                    var4 = _closure1_slot11;
                    var3 = var4.JOIN_VIA_INVITE;
                case 270:
                    var0 = var3;
                case 273:
                    _fun59899_ip = 288;
                    continue _fun59899;
                case 275:
                    var3 = _closure1_slot11;
                    var0 = var3.HAS_APPLICATION;
                case 288:
                    return var0;
                case 290:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot12;
                    var3 = var3.INVITE;
                    if (!(var4 === var3)) {
                        _fun59899_ip = 466;
                        continue _fun59899
                    }
                case 314:
                    var3 = _closure2_slot11;
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun59899_ip = 466;
                        continue _fun59899
                    }
                case 327:
                    var3 = _closure2_slot11;
                    var5 = var3.length;
                    var3 = 0;
                    if (!(var5 > var3)) {
                        _fun59899_ip = 466;
                        continue _fun59899
                    }
                case 345:
                    var3 = _closure2_slot7;
                    if (!(var4 != var3)) {
                        _fun59899_ip = 466;
                        continue _fun59899
                    }
                case 353:
                    var7 = _closure1_slot5;
                    var6 = var7.getMember;
                    var5 = _closure2_slot3;
                    var3 = _closure2_slot7;
                    var3 = var3.id;
                    var6 = var6.bind(var7)(var5, var3);
                    var3 = global;
                    var5 = var3.Set;
                    var7 = var4 == var6;
                    var3 = undefined;
                    if (var7) {
                        _fun59899_ip = 405;
                        continue _fun59899
                    }
                case 399:
                    var3 = var6.roles;
                case 405:
                    if (!(var4 == var3)) {
                        _fun59899_ip = 413;
                        continue _fun59899
                    }
                case 409:
                    var3 = new Array(0);
                case 413:
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var11 = var4;
                    var10 = var3;
                    var3 = new var11[var5](var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot11;
                    var3 = var4.some;
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    if (var2) {
                        _fun59899_ip = 644;
                        continue _fun59899
                    }
                case 466:
                    var2 = _closure2_slot7;
                    var3 = null;
                    var2 = var3 == var2;
                    var4 = undefined;
                    var5 = undefined;
                    if (var2) {
                        _fun59899_ip = 493;
                        continue _fun59899
                    }
                case 483:
                    var2 = _closure2_slot7;
                    var5 = var2.primaryGuild;
                case 493:
                    var2 = var3 == var5;
                    var6 = undefined;
                    if (var2) {
                        _fun59899_ip = 508;
                        continue _fun59899
                    }
                case 502:
                    var6 = var5.identityGuildId;
                case 508:
                    var2 = _closure2_slot3;
                    var2 = var6 === var2;
                    if (!var2) {
                        _fun59899_ip = 540;
                        continue _fun59899
                    }
                case 519:
                    var7 = var3 == var5;
                    var6 = undefined;
                    if (var7) {
                        _fun59899_ip = 534;
                        continue _fun59899
                    }
                case 528:
                    var6 = var5.identityEnabled;
                case 534:
                    var5 = true;
                    var2 = var5 === var6;
                case 540:
                    var6 = _closure2_slot1;
                    var5 = _closure1_slot12;
                    var5 = var5.INVITE;
                    if (!(var6 !== var5)) {
                        _fun59899_ip = 632;
                        continue _fun59899
                    }
                case 558:
                    var5 = _closure2_slot0;
                    var5 = var5.tag;
                    if (!(var3 != var5)) {
                        _fun59899_ip = 632;
                        continue _fun59899
                    }
                case 571:
                    if (var2) {
                        _fun59899_ip = 632;
                        continue _fun59899
                    }
                case 574:
                    var2 = _closure2_slot6;
                    if (!(var3 != var2)) {
                        _fun59899_ip = 632;
                        continue _fun59899
                    }
                case 582:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.guildSupportsTags;
                    var1 = _closure2_slot6;
                    var1 = var2.bind(var3)(var1);
                    if (!var1) {
                        _fun59899_ip = 632;
                        continue _fun59899
                    }
                case 620:
                    var1 = _closure1_slot11;
                    var1 = var1.ADOPT_TAG;
                    _fun59899_ip = 642;
                    continue _fun59899;
                case 632:
                    var2 = _closure1_slot11;
                    var1 = var2.IS_MEMBER;
                case 642:
                    return var1;
                case 644:
                    var0 = _closure1_slot11;
                    var0 = var0.ACCEPT_ROLES;
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var0, var2);
        var0 = {};
        var0.guildId = var3;
        var0.ctaType = var2;
        var0.validInviteKey = var1;
        return var0;
    };
    var2.default = var5;
    var2.CTATypes = var4;
    var2.GuildProfileCTAContext = var3;
    var1 = function arg0, arg1() {
        _fun59901: for (var _fun59901_ip = 0;;) switch (_fun59901_ip) {
            case 0:
                var9 = arg0;
                var13 = arg1;
                var8 = var9.id;
                var11 = var9.features;
                var3 = _closure1_slot4;
                var2 = var3.getId;
                var7 = var2.bind(var3)();
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var5 = var2.bind(var3)(var7);
                var4 = null;
                var2 = var4 != var8;
                var6 = null;
                if (!var2) {
                    _fun59901_ip = 78;
                    continue _fun59901
                }
            case 62:
                var3 = _closure1_slot5;
                var2 = var3.getMember;
                var6 = var2.bind(var3)(var8, var7);
            case 78:
                var7 = var4 == var6;
                var3 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun59901_ip = 95;
                    continue _fun59901
                }
            case 89:
                var2 = var6.joinedAt;
            case 95:
                var10 = var4 != var2;
                if (!(var4 == var13)) {
                    _fun59901_ip = 118;
                    continue _fun59901
                }
            case 103:
                var6 = _closure1_slot7;
                var2 = var6.getInviteKeyForGuildId;
                var13 = var2.bind(var6)(var8);
            case 118:
                var6 = var4 != var13;
                var2 = null;
                if (!var6) {
                    _fun59901_ip = 142;
                    continue _fun59901
                }
            case 127:
                var7 = _closure1_slot7;
                var6 = var7.getInvite;
                var2 = var6.bind(var7)(var13);
            case 142:
                var12 = var4 == var2;
                var7 = null;
                var6 = false;
                if (var12) {
                    _fun59901_ip = 286;
                    continue _fun59901
                }
            case 156:
                var14 = var2.state;
                var12 = _closure1_slot9;
                var12 = var12.BANNED;
                var7 = null;
                var6 = false;
                if (!(var14 !== var12)) {
                    _fun59901_ip = 286;
                    continue _fun59901
                }
            case 179:
                var14 = var2.state;
                var12 = _closure1_slot9;
                var12 = var12.EXPIRED;
                var7 = null;
                var6 = false;
                if (!(var14 !== var12)) {
                    _fun59901_ip = 286;
                    continue _fun59901
                }
            case 202:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 8;
                var12 = var15[var12];
                var16 = var14.bind(var3)(var12);
                var15 = var16.hasFlag;
                var12 = var2.flags;
                var17 = var4 != var12;
                var14 = 0;
                if (!var17) {
                    _fun59901_ip = 245;
                    continue _fun59901
                }
            case 242:
                var14 = var12;
            case 245:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 9;
                var12 = var18[var12];
                var12 = var17.bind(var3)(var12);
                var12 = var12.GuildInviteFlags;
                var12 = var12.IS_APPLICATION_BYPASS;
                var6 = var15.bind(var16)(var14, var12);
                var7 = var13;
            case 286:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 10;
                var12 = var14[var12];
                var13 = var13.bind(var3)(var12);
                var12 = var13.getPendingFolderGuildIds;
                var12 = var12.bind(var13)();
                if (var10) {
                    _fun59901_ip = 530;
                    continue _fun59901
                }
            case 322:
                var10 = var12.includes;
                var10 = var10.bind(var12)(var8);
                if (var10) {
                    _fun59901_ip = 518;
                    continue _fun59901
                }
            case 338:
                if (!(var4 != var11)) {
                    _fun59901_ip = 453;
                    continue _fun59901
                }
            case 342:
                var12 = var11.includes;
                var10 = _closure1_slot10;
                var10 = var10.MEMBER_VERIFICATION_GATE_ENABLED;
                var10 = var12.bind(var11)(var10);
                if (!var10) {
                    _fun59901_ip = 453;
                    continue _fun59901
                }
            case 365:
                if (!(var4 != var11)) {
                    _fun59901_ip = 453;
                    continue _fun59901
                }
            case 369:
                var12 = var11.includes;
                var10 = _closure1_slot10;
                var10 = var10.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var10 = var12.bind(var11)(var10);
                if (!var10) {
                    _fun59901_ip = 453;
                    continue _fun59901
                }
            case 392:
                if (!(var4 == var7)) {
                    _fun59901_ip = 438;
                    continue _fun59901
                }
            case 396:
                var10 = var9.visibility;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 12;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.GuildProfileVisibility;
                var9 = var9.PUBLIC_WITH_RECRUITMENT;
                if (!(var10 === var9)) {
                    _fun59901_ip = 453;
                    continue _fun59901
                }
            case 438:
                if (var6) {
                    _fun59901_ip = 453;
                    continue _fun59901
                }
            case 441:
                var6 = _closure1_slot11;
                var6 = var6.APPLY_TO_JOIN;
                _fun59901_ip = 516;
                continue _fun59901;
            case 453:
                if (!(var4 == var7)) {
                    _fun59901_ip = 503;
                    continue _fun59901
                }
            case 457:
                var9 = var4 != var11;
                var7 = null;
                if (!var9) {
                    _fun59901_ip = 501;
                    continue _fun59901
                }
            case 466:
                var10 = var11.includes;
                var9 = _closure1_slot10;
                var9 = var9.DISCOVERABLE;
                var9 = var10.bind(var11)(var9);
                var7 = null;
                if (!var9) {
                    _fun59901_ip = 501;
                    continue _fun59901
                }
            case 491:
                var9 = _closure1_slot11;
                var7 = var9.LURK_DISCOVERABLE;
            case 501:
                _fun59901_ip = 513;
                continue _fun59901;
            case 503:
                var9 = _closure1_slot11;
                var7 = var9.JOIN_VIA_INVITE;
            case 513:
                var6 = var7;
            case 516:
                _fun59901_ip = 528;
                continue _fun59901;
            case 518:
                var7 = _closure1_slot11;
                var6 = var7.HAS_APPLICATION;
            case 528:
                return var6;
            case 530:
                var7 = var4 == var2;
                var6 = undefined;
                if (var7) {
                    _fun59901_ip = 545;
                    continue _fun59901
                }
            case 539:
                var6 = var2.roles;
            case 545:
                if (!(var4 != var6)) {
                    _fun59901_ip = 677;
                    continue _fun59901
                }
            case 552:
                var6 = var2.roles;
                var7 = var6.length;
                var6 = 0;
                if (!(var7 > var6)) {
                    _fun59901_ip = 677;
                    continue _fun59901
                }
            case 569:
                if (!(var4 != var5)) {
                    _fun59901_ip = 677;
                    continue _fun59901
                }
            case 573:
                var7 = _closure1_slot5;
                var6 = var7.getMember;
                var5 = var5.id;
                var6 = var6.bind(var7)(var8, var5);
                var5 = global;
                var5 = var5.Set;
                var7 = var4 == var6;
                var3 = undefined;
                if (var7) {
                    _fun59901_ip = 617;
                    continue _fun59901
                }
            case 611:
                var3 = var6.roles;
            case 617:
                if (!(var4 == var3)) {
                    _fun59901_ip = 625;
                    continue _fun59901
                }
            case 621:
                var3 = new Array(0);
            case 625:
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var21 = var4;
                var20 = var3;
                var3 = new var21[var5](var20, var19);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure2_slot0 = var3;
                var3 = var2.roles;
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                if (var1) {
                    _fun59901_ip = 689;
                    continue _fun59901
                }
            case 677:
                var1 = _closure1_slot11;
                var1 = var1.IS_MEMBER;
                return var1;
            case 689:
                var0 = _closure1_slot11;
                var0 = var0.ACCEPT_ROLES;
                return var0;
        }
    };
    var2.getGuildProfileCTAType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 1672, 1410, 3314, 1613, 660, 566, 1384, 5905, 7411, 6804, 7376, 2]);