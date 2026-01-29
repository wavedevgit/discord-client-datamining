// modules/people/PeopleUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var6 = function(arg0) { // Original name: acceptFriendRequest, environment: var3
        _fun71979: for (var _fun71979_ip = 0;;) switch (_fun71979_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.userId;
                var4 = var0.applicationId;
                var7 = var0.location;
                var6 = var0.confirmStrangerRequest;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun71979_ip = 32;
                    continue _fun71979
                }
            case 30:
                var6 = false;
            case 32:
                var0 = null;
                if (!(var0 == var4)) {
                    _fun71979_ip = 95;
                    continue _fun71979
                }
            case 38:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.acceptFriendRequest;
                var0 = {};
                var0.userId = var5;
                var0.confirmStrangerRequest = var6;
                var6 = {};
                var6.location = var7;
                var0.context = var6;
                var0 = var1.bind(var2)(var0);
                _fun71979_ip = 139;
                continue _fun71979;
            case 95:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.acceptGameFriendRequest;
                var1 = {};
                var1.userId = var5;
                var1.applicationId = var4;
                var0 = var2.bind(var3)(var1);
            case 139:
                return var0;
        }
    };
    var _closure1_slot5 = var6;
    var0 = function(arg0, arg1) { // Original name: handleFriendRequestAcceptError, environment: var3
        _fun71980: for (var _fun71980_ip = 0;;) switch (_fun71980_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var2 = var0.body;
                var3 = null;
                var3 = var3 == var2;
                var4 = undefined;
                var6 = undefined;
                if (var3) {
                    _fun71980_ip = 35;
                    continue _fun71980
                }
            case 30:
                var6 = var2.code;
            case 35:
                var3 = _closure1_slot4;
                var3 = var3.RELATIONSHIP_INVALID_NO_CONFIRMATION;
                if (!(var6 !== var3)) {
                    _fun71980_ip = 125;
                    continue _fun71980
                }
            case 52:
                var6 = var0.ok;
                var0 = false;
                if (!var6) {
                    _fun71980_ip = 235;
                    continue _fun71980
                }
            case 66:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 8;
                var6 = var8[var6];
                var8 = var7.bind(var4)(var6);
                var7 = var8.dispatch;
                var6 = {
                    'type': 'UPDATE_STRANGER_STATUS',
                    'userId': null,
                    'isStranger': false
                };
                var9 = var1.userId;
                var6.userId = var9;
                var6 = var7.bind(var8)(var6);
                var0 = false;
                _fun71980_ip = 235;
                continue _fun71980;
            case 125:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 8;
                var3 = var6[var3];
                var8 = var7.bind(var4)(var3);
                var7 = var8.dispatch;
                var3 = {
                    'type': 'UPDATE_STRANGER_STATUS',
                    'userId': null,
                    'isStranger': true
                };
                var1 = var1.userId;
                var3.userId = var1;
                var0 = true;
                var3 = var7.bind(var8)(var3);
                var3 = _closure1_slot0;
                var2 = 7;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.openAcceptFriendRequestConfirmModal;
                var2 = {};
                var6 = function() { // Original name: onConfirm, environment: var5
                    _fun71981: for (var _fun71981_ip = 0;;) switch (_fun71981_ip) {
                        case 0:
                            var4 = _closure1_slot5;
                            var3 = {};
                            var2 = _closure2_slot0;
                            var7 = var3;
                            var6 = var2;
                            var0 = copyDataProperties(var7, var6);
                            var5 = true;
                            var0 = 'confirmStrangerRequest';
                            var3[var0] = var5;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var3 = var2.onConfirm;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun71981_ip = 70;
                                continue _fun71981
                            }
                        case 56:
                            var2 = _closure2_slot0;
                            var1 = var2.onConfirm;
                            var1 = var1.bind(var2)();
                        case 70:
                            return var0;
                    }
                };
                var2.onConfirm = var6;
                var5 = function() { // Original name: onCancel, environment: var5
                    _fun71982: for (var _fun71982_ip = 0;;) switch (_fun71982_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.onCancel;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun71982_ip = 33;
                                continue _fun71982
                            }
                        case 19:
                            var1 = _closure2_slot0;
                            var0 = var1.onCancel;
                            var0 = var0.bind(var1)();
                        case 33:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.onCancel = var5;
                var2 = var3.bind(var4)(var2);
            case 235:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AbortCodes;
    var _closure1_slot4 = var1;
    var1 = {};
    var7 = function(arg0) { // Original name: removeFriend, environment: var3
        _fun71983: for (var _fun71983_ip = 0;;) switch (_fun71983_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userId;
                var3 = var0.applicationId;
                var5 = var0.location;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun71983_ip = 69;
                    continue _fun71983
                }
            case 24:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.removeFriend;
                var0 = {};
                var0.location = var5;
                var0 = var1.bind(var2)(var4, var0);
                _fun71983_ip = 115;
                continue _fun71983;
            case 69:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.removeGameFriend;
                var0 = {};
                var0.userId = var4;
                var0.applicationId = var3;
                var0 = var1.bind(var2)(var0);
            case 115:
                var0 = undefined;
                return var0;
        }
    };
    var1.removeFriend = var7;
    var7 = function(arg0) { // Original name: cancelFriendRequest, environment: var3
        _fun71984: for (var _fun71984_ip = 0;;) switch (_fun71984_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.userId;
                var4 = var0.applicationId;
                var3 = var0.location;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun71984_ip = 69;
                    continue _fun71984
                }
            case 24:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.cancelFriendRequest;
                var0 = {};
                var0.location = var3;
                var0 = var1.bind(var2)(var5, var0);
                _fun71984_ip = 115;
                continue _fun71984;
            case 69:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.cancelGameFriendRequest;
                var1 = {};
                var1.userId = var5;
                var1.applicationId = var4;
                var0 = var2.bind(var3)(var1);
            case 115:
                return var0;
        }
    };
    var1.cancelFriendRequest = var7;
    var1.acceptFriendRequest = var6;
    var3 = function(arg0) { // Original name: maybeConfirmFriendRequestAccept, environment: var3
        _fun71985: for (var _fun71985_ip = 0;;) switch (_fun71985_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.userId;
                var _closure2_slot0 = var6;
                var5 = var1.applicationId;
                var _closure2_slot1 = var5;
                var4 = var1.location;
                var _closure2_slot2 = var4;
                var2 = var1.onConfirm;
                var _closure2_slot3 = var2;
                var1 = var1.onCancel;
                var _closure2_slot4 = var1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var3 = undefined;
                var10 = var8.bind(var3)(var2);
                var7 = var10.isSettingTeenByDefault;
                var2 = 5;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.SettingsDefaultFeature;
                var2 = var2.FRIEND_REQUEST_STRANGER_CONFIRMATION;
                var2 = var7.bind(var10)(var2);
                var7 = 6;
                var7 = var9[var7];
                var9 = var8.bind(var3)(var7);
                var8 = var9.isFriendRequestAlertsV2Enabled;
                var7 = 'maybeConfirmFriendRequestAccept';
                var7 = var8.bind(var9)(var7);
                if (var2) {
                    _fun71985_ip = 145;
                    continue _fun71985
                }
            case 142:
                var2 = var7;
            case 145:
                var8 = _closure1_slot3;
                var7 = var8.isStranger;
                var7 = var7.bind(var8)(var6);
                var8 = null;
                if (!(var8 == var5)) {
                    _fun71985_ip = 312;
                    continue _fun71985
                }
            case 169:
                if (!var2) {
                    _fun71985_ip = 312;
                    continue _fun71985
                }
            case 175:
                var8 = false;
                if (!(var8 !== var7)) {
                    _fun71985_ip = 312;
                    continue _fun71985
                }
            case 184:
                if (!var7) {
                    _fun71985_ip = 190;
                    continue _fun71985
                }
            case 187:
                if (var2) {
                    _fun71985_ip = 253;
                    continue _fun71985
                }
            case 190:
                if (!var2) {
                    _fun71985_ip = 310;
                    continue _fun71985
                }
            case 193:
                var7 = _closure1_slot5;
                var2 = {};
                var2.userId = var6;
                var2.applicationId = var5;
                var2.location = var4;
                var8 = var7.bind(var3)(var2);
                var7 = var8.then;
                var2 = function(arg0) { // Environment: var0
                    _fun71989: for (var _fun71989_ip = 0;;) switch (_fun71989_ip) {
                        case 0:
                            var4 = _closure1_slot6;
                            var3 = {};
                            var0 = _closure2_slot0;
                            var3.userId = var0;
                            var0 = _closure2_slot1;
                            var3.applicationId = var0;
                            var0 = _closure2_slot2;
                            var3.location = var0;
                            var0 = _closure2_slot3;
                            var3.onConfirm = var0;
                            var0 = _closure2_slot4;
                            var3.onCancel = var0;
                            var0 = undefined;
                            var2 = arg0;
                            var2 = var4.bind(var0)(var2, var3);
                            if (var2) {
                                _fun71989_ip = 78;
                                continue _fun71989
                            }
                        case 68:
                            var4 = _closure2_slot3;
                            var3 = null;
                            var2 = var3 == var4;
                        case 78:
                            if (var2) {
                                _fun71989_ip = 89;
                                continue _fun71989
                            }
                        case 81:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)();
                        case 89:
                            return var0;
                    }
                };
                var8 = var7.bind(var8)(var2);
                var7 = var8.catch;
                var2 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.userId = var1;
                    var1 = _closure2_slot1;
                    var2.applicationId = var1;
                    var1 = _closure2_slot2;
                    var2.location = var1;
                    var1 = _closure2_slot3;
                    var2.onConfirm = var1;
                    var0 = _closure2_slot4;
                    var2.onCancel = var0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var1, var2);
                    return var0;
                };
                var2 = var7.bind(var8)(var2);
                _fun71985_ip = 310;
                continue _fun71985;
            case 253:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var8 = var7.bind(var3)(var2);
                var7 = var8.openAcceptFriendRequestConfirmModal;
                var2 = {};
                var9 = function() { // Original name: onConfirm, environment: var0
                    _fun71987: for (var _fun71987_ip = 0;;) switch (_fun71987_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = {};
                            var0 = _closure2_slot0;
                            var2.userId = var0;
                            var0 = _closure2_slot1;
                            var2.applicationId = var0;
                            var0 = _closure2_slot2;
                            var2.location = var0;
                            var0 = true;
                            var2.confirmStrangerRequest = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun71987_ip = 68;
                                continue _fun71987
                            }
                        case 60:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)();
                        case 68:
                            return var0;
                    }
                };
                var2.onConfirm = var9;
                var9 = function() { // Original name: onCancel, environment: var0
                    _fun71988: for (var _fun71988_ip = 0;;) switch (_fun71988_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun71988_ip = 23;
                                continue _fun71988
                            }
                        case 13:
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.onCancel = var9;
                var2 = var7.bind(var8)(var2);
            case 310:
                return var3;
            case 312:
                var2 = _closure1_slot5;
                var1 = {};
                var1.userId = var6;
                var1.applicationId = var5;
                var1.location = var4;
                var4 = true;
                var1.confirmStrangerRequest = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    _fun71986: for (var _fun71986_ip = 0;;) switch (_fun71986_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun71986_ip = 23;
                                continue _fun71986
                            }
                        case 13:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.maybeConfirmFriendRequestAccept = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/people/PeopleUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3059, 660, 8963, 7979, 4233, 4236, 8964, 8965, 806, 2]);