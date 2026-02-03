// modules/accept_invite/InviteFriendMembersExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function arg0() {
        _fun80610: for (var _fun80610_ip = 0;;) switch (_fun80610_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun80610_ip = 108;
                    continue _fun80610
                }
            case 9:
                var3 = var0.features;
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun80610_ip = 80;
                    continue _fun80610
                }
            case 36:
                var0 = var0.Set;
                var1 = var3 instanceof var0;
                var0 = !var1;
                if (!var1) {
                    _fun80610_ip = 78;
                    continue _fun80610
                }
            case 52:
                var2 = var3.has;
                var1 = _closure1_slot7;
                var1 = var1.MEMBER_VERIFICATION_GATE_ENABLED;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 78:
                _fun80610_ip = 106;
                continue _fun80610;
            case 80:
                var2 = var3.includes;
                var1 = _closure1_slot7;
                var1 = var1.MEMBER_VERIFICATION_GATE_ENABLED;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 106:
                return var0;
            case 108:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = ['guild'];
    var _closure1_slot2 = var0;
    var0 = ['guild'];
    var _closure1_slot3 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2025-11_invite_friend_members',
        'label': 'Show Friends in Server on Invite Modal'
    };
    var9 = {
        'showFriendsInServer': false,
        'showInviter': false
    };
    var4.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Show Friends in Server'
    };
    var9 = {
        'showFriendsInServer': true,
        'showInviter': false
    };
    var10.config = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Show Friends in Server and Inviter'
    };
    var11 = {
        'showFriendsInServer': true,
        'showInviter': true
    };
    var10.config = var11;
    var9[1] = var10;
    var4.treatments = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var5 = {
        'showFriendsInServer': false,
        'showInviter': false
    };
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/accept_invite/InviteFriendMembersExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var2.InviteFriendMembersExperiment = var4;
    var4 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useAccessExperiment;
        var1 = _closure1_slot8;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useInviteFriendMembersExperiment = var4;
    var4 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getAccessExperiment;
        var1 = _closure1_slot8;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getInviteFriendMembersExperiment = var4;
    var2.isGuildEligibleForFriendsInServer = var3;
    var3 = function arg0() {
        _fun80613: for (var _fun80613_ip = 0;;) switch (_fun80613_ip) {
            case 0:
                var6 = arg0;
                var5 = var6.guild;
                var3 = _closure1_slot4;
                var2 = _closure1_slot2;
                var4 = undefined;
                var6 = var3.bind(var4)(var6, var2);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var2 = var8[var3];
                var11 = var7.bind(var4)(var2);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.isAuthenticated;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var10.bind(var11)(var9, var2);
                var3 = var8[var3];
                var8 = var7.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var9;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getFriendCount;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var3 = var7.bind(var8)(var3, var0);
                var0 = _closure1_slot10;
                var0 = var0.bind(var4)(var5);
                if (!var2) {
                    _fun80613_ip = 133;
                    continue _fun80613
                }
            case 130:
                var2 = var3;
            case 133:
                if (!var2) {
                    _fun80613_ip = 139;
                    continue _fun80613
                }
            case 136:
                var2 = var0;
            case 139:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var0 = var5[var0];
                var5 = var3.bind(var4)(var0);
                var4 = var5.useAccessExperiment;
                var3 = _closure1_slot8;
                var0 = {};
                var13 = var0;
                var12 = var6;
                var6 = copyDataProperties(var13, var12);
                var7 = !var2;
                var6 = 'disable';
                var0[var6] = var7;
                var0 = var4.bind(var5)(var3, var0);
                if (var2) {
                    _fun80613_ip = 206;
                    continue _fun80613
                }
            case 202:
                var0 = _closure1_slot9;
            case 206:
                return var0;
        }
    };
    var2.useEligibleInviteFriendMembersExperiment = var3;
    var1 = function arg0() {
        _fun80616: for (var _fun80616_ip = 0;;) switch (_fun80616_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.guild;
                var3 = _closure1_slot4;
                var0 = _closure1_slot3;
                var5 = undefined;
                var4 = var3.bind(var5)(var4, var0);
                var3 = _closure1_slot5;
                var0 = var3.isAuthenticated;
                var3 = var0.bind(var3)();
                var6 = _closure1_slot6;
                var0 = var6.getFriendCount;
                var6 = var0.bind(var6)();
                var0 = 0;
                var0 = var6 > var0;
                if (!var3) {
                    _fun80616_ip = 79;
                    continue _fun80616
                }
            case 64:
                if (!var0) {
                    _fun80616_ip = 79;
                    continue _fun80616
                }
            case 67:
                var0 = _closure1_slot10;
                var0 = var0.bind(var5)(var2);
                if (var0) {
                    _fun80616_ip = 85;
                    continue _fun80616
                }
            case 79:
                var0 = _closure1_slot9;
                _fun80616_ip = 121;
                continue _fun80616;
            case 85:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 5;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getAccessExperiment;
                var1 = _closure1_slot8;
                var0 = var2.bind(var3)(var1, var4);
            case 121:
                return var0;
        }
    };
    var2.getEligibleInviteFriendMembersExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 1216, 3091, 660, 3106, 7475, 566, 2]);