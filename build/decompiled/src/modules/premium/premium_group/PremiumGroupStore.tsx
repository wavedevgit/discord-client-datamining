// modules/premium/premium_group/PremiumGroupStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun59161: for (var _fun59161_ip = 0;;) switch (_fun59161_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun59161_ip = 74;
                continue _fun59161;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var9 = function() { // Original name: handleMutationStart, environment: var3
        var0 = _closure1_slot12;
        var1 = var0.membersData;
        var0 = true;
        var1.isUpdating = var0;
        var0 = undefined;
        return var0;
    };
    var8 = function(arg0) { // Original name: handleMutationSuccess, environment: var3
        var0 = arg0;
        var0 = var0.subscriptionId;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 8;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.wait;
        var2 = function() { // Environment: var2
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchSubscriptionGroupMembers;
            var1 = _closure2_slot0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.catch;
            var0 = _closure1_slot11;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot12;
        var2 = var1.membersData;
        var1 = false;
        var2.isUpdating = var1;
        return var0;
    };
    var10 = function() { // Original name: handleMutationFailure, environment: var3
        var0 = _closure1_slot12;
        var1 = var0.membersData;
        var0 = false;
        var1.isUpdating = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot14 = var10;
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.PremiumGroupAPIErrorCodes;
    var _closure1_slot9 = var7;
    var1 = var1.TOTAL_PREMIUM_GROUP_MEMBER_SEATS;
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NOOP_NULL;
    var _closure1_slot11 = var1;
    var1 = {};
    var7 = {
        'data': null,
        'isFetching': false,
        'isUpdating': false
    };
    var1.membersData = var7;
    var7 = {
        'data': null,
        'isFetching': false,
        'hasFetched': false
    };
    var1.membershipData = var7;
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: PremiumGroupStore, environment: var5
            _fun59169: for (var _fun59169_ip = 0;;) switch (_fun59169_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun59169_ip = 69;
                        continue _fun59169
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun59169_ip = 105;
                    continue _fun59169;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMembers';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var0 = var0.membersData;
            var0 = var0.data;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isFetchingMembers';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var0 = var0.membersData;
            var0 = var0.isFetching;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isUpdatingMembers';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var0 = var0.membersData;
            var0 = var0.isUpdating;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasFetchedMembers';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var0 = var0.membersData;
            var1 = var0.data;
            var0 = null;
            var0 = var0 !== var1;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getMembership';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var0 = var0.membershipData;
            var0 = var0.data;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isFetchingMembership';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var0 = var0.membershipData;
            var0 = var0.isFetching;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'hasFetchedMembership';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var0 = var0.membershipData;
            var1 = var0.data;
            var0 = null;
            var0 = var0 !== var1;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getNumUsedSeats';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun59178: for (var _fun59178_ip = 0;;) switch (_fun59178_ip) {
                case 0:
                    var0 = _closure1_slot12;
                    var0 = var0.membersData;
                    var2 = var0.data;
                    var0 = null;
                    var2 = var0 == var2;
                    var0 = 0;
                    if (var2) {
                        _fun59178_ip = 55;
                        continue _fun59178
                    }
                case 29:
                    var1 = _closure1_slot12;
                    var1 = var1.membersData;
                    var1 = var1.data;
                    var1 = var1.members;
                    var0 = var1.length;
                case 55:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getNumAvailableInvites';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun59179: for (var _fun59179_ip = 0;;) switch (_fun59179_ip) {
                case 0:
                    var1 = _closure1_slot12;
                    var1 = var1.membersData;
                    var2 = var1.data;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun59179_ip = 111;
                        continue _fun59179
                    }
                case 24:
                    var1 = _closure1_slot12;
                    var1 = var1.membersData;
                    var1 = var1.data;
                    var1 = var1.members;
                    var2 = var1.length;
                    var1 = _closure1_slot12;
                    var1 = var1.membersData;
                    var1 = var1.data;
                    var1 = var1.invitedUsers;
                    var1 = var1.length;
                    var2 = var2 + var1;
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.max;
                    var1 = _closure1_slot10;
                    var2 = var1 - var2;
                    var1 = 0;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                case 111:
                    var0 = _closure1_slot10;
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getNumTotalSeats';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'PremiumGroupStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var11 = function(arg0) { // Original name: handleMembersRequest, environment: var3
        _fun59181: for (var _fun59181_ip = 0;;) switch (_fun59181_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.subscriptionId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot12;
                var0 = var0.membersData;
                var0 = var0.isFetching;
                var0 = !var0;
                if (!var0) {
                    _fun59181_ip = 80;
                    continue _fun59181
                }
            case 40:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.wait;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchSubscriptionGroupMembers;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.catch;
                    var0 = _closure1_slot11;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 80:
                return var0;
        }
    };
    var1.PREMIUM_GROUP_MEMBERS_REQUEST = var11;
    var11 = function() { // Original name: handleMembersFetchStart, environment: var3
        var0 = _closure1_slot12;
        var1 = var0.membersData;
        var0 = true;
        var1.isFetching = var0;
        var0 = undefined;
        return var0;
    };
    var1.PREMIUM_GROUP_MEMBERS_FETCH_START = var11;
    var11 = function(arg0) { // Original name: handleMembersFetchSuccess, environment: var3
        var0 = arg0;
        var2 = var0.members;
        var1 = _closure1_slot12;
        var1 = var1.membersData;
        var1.data = var2;
        var0 = _closure1_slot12;
        var1 = var0.membersData;
        var0 = false;
        var1.isFetching = var0;
        var0 = undefined;
        return var0;
    };
    var1.PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS = var11;
    var11 = function() { // Original name: handleMembersFetchFailure, environment: var3
        var0 = _closure1_slot12;
        var1 = var0.membersData;
        var0 = false;
        var1.isFetching = var0;
        var0 = undefined;
        return var0;
    };
    var1.PREMIUM_GROUP_MEMBERS_FETCH_FAILURE = var11;
    var11 = function() { // Original name: handleMembershipRequest, environment: var3
        _fun59186: for (var _fun59186_ip = 0;;) switch (_fun59186_ip) {
            case 0:
                var0 = _closure1_slot12;
                var0 = var0.membershipData;
                var0 = var0.isFetching;
                var0 = !var0;
                if (!var0) {
                    _fun59186_ip = 67;
                    continue _fun59186
                }
            case 25:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.wait;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPremiumGroupMembership;
                    var2 = var1.bind(var2)();
                    var1 = var2.catch;
                    var0 = _closure1_slot11;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 67:
                return var0;
        }
    };
    var1.PREMIUM_GROUP_MEMBERSHIP_REQUEST = var11;
    var11 = function() { // Original name: handleMembershipFetchStart, environment: var3
        var0 = _closure1_slot12;
        var1 = var0.membershipData;
        var0 = true;
        var1.isFetching = var0;
        var0 = undefined;
        return var0;
    };
    var1.PREMIUM_GROUP_MEMBERSHIP_FETCH_START = var11;
    var11 = function(arg0) { // Original name: handleMembershipFetchSuccess, environment: var3
        var0 = arg0;
        var2 = var0.membership;
        var1 = _closure1_slot12;
        var1 = var1.membershipData;
        var1.data = var2;
        var1 = _closure1_slot12;
        var2 = var1.membershipData;
        var1 = false;
        var2.isFetching = var1;
        var0 = _closure1_slot12;
        var1 = var0.membershipData;
        var0 = true;
        var1.hasFetched = var0;
        var0 = undefined;
        return var0;
    };
    var1.PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS = var11;
    var11 = function() { // Original name: handleMembershipNotFound, environment: var3
        var1 = _closure1_slot12;
        var2 = var1.membershipData;
        var1 = false;
        var2.isFetching = var1;
        var0 = _closure1_slot12;
        var1 = var0.membershipData;
        var0 = true;
        var1.hasFetched = var0;
        var0 = undefined;
        return var0;
    };
    var1.PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND = var11;
    var11 = function() { // Original name: handleMembershipFetchFailure, environment: var3
        var1 = _closure1_slot12;
        var2 = var1.membershipData;
        var1 = false;
        var2.isFetching = var1;
        var0 = _closure1_slot12;
        var1 = var0.membershipData;
        var0 = true;
        var1.hasFetched = var0;
        var0 = undefined;
        return var0;
    };
    var1.PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE = var11;
    var1.PREMIUM_GROUP_INVITE_USERS_START = var9;
    var1.PREMIUM_GROUP_INVITE_USERS_SUCCESS = var8;
    var1.PREMIUM_GROUP_INVITE_USERS_FAILURE = var10;
    var1.PREMIUM_GROUP_REMOVE_MEMBER_START = var9;
    var1.PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS = var8;
    var1.PREMIUM_GROUP_REMOVE_MEMBER_FAILURE = var10;
    var1.PREMIUM_GROUP_REMOVE_INVITE_START = var9;
    var1.PREMIUM_GROUP_REMOVE_INVITE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleRemoveInviteFailure, environment: var3
        _fun59192: for (var _fun59192_ip = 0;;) switch (_fun59192_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.errorCode;
                var0 = var0.subscriptionId;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot9;
                var2 = var2.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED;
                if (!(var3 !== var2)) {
                    _fun59192_ip = 50;
                    continue _fun59192
                }
            case 38:
                var3 = _closure1_slot14;
                var2 = undefined;
                var3 = var3.bind(var2)();
                return var2;
            case 50:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.wait;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchSubscriptionGroupMembers;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.catch;
                    var0 = _closure1_slot11;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = _closure1_slot12;
                var1 = var0.membersData;
                var0 = false;
                var1.isUpdating = var0;
                var0 = true;
                return var0;
        }
    };
    var1.PREMIUM_GROUP_REMOVE_INVITE_FAILURE = var8;
    var3 = function() { // Original name: reset, environment: var3
        var1 = {};
        var0 = {
            'data': null,
            'isFetching': false,
            'isUpdating': false
        };
        var1.membersData = var0;
        var0 = {
            'data': null,
            'isFetching': false,
            'hasFetched': false
        };
        var1.membershipData = var0;
        _closure1_slot12 = var1;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/premium_group/PremiumGroupStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3076, 3083, 660, 806, 7243, 566, 2]);