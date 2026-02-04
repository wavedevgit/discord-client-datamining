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
    var6 = function arg0() {
        _fun72289: for (var _fun72289_ip = 0;;) switch (_fun72289_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.userId;
                var4 = var0.applicationId;
                var7 = var0.location;
                var6 = var0.confirmStrangerRequest;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun72289_ip = 32;
                    continue _fun72289
                }
            case 30:
                var6 = false;
            case 32:
                var0 = null;
                if (!(var0 == var4)) {
                    _fun72289_ip = 95;
                    continue _fun72289
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
                _fun72289_ip = 139;
                continue _fun72289;
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
    var0 = function arg0, arg1() {
        _fun72290: for (var _fun72290_ip = 0;;) switch (_fun72290_ip) {
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
                    _fun72290_ip = 35;
                    continue _fun72290
                }
            case 30:
                var6 = var2.code;
            case 35:
                var3 = _closure1_slot4;
                var3 = var3.RELATIONSHIP_INVALID_NO_CONFIRMATION;
                if (!(var6 !== var3)) {
                    _fun72290_ip = 125;
                    continue _fun72290
                }
            case 52:
                var6 = var0.ok;
                var0 = false;
                if (!var6) {
                    _fun72290_ip = 235;
                    continue _fun72290
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
                _fun72290_ip = 235;
                continue _fun72290;
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
                var6 = function() {
                    _fun72291: for (var _fun72291_ip = 0;;) switch (_fun72291_ip) {
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
                                _fun72291_ip = 70;
                                continue _fun72291
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
                var5 = function() {
                    _fun72292: for (var _fun72292_ip = 0;;) switch (_fun72292_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.onCancel;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72292_ip = 33;
                                continue _fun72292
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
    var7 = function arg0() {
        _fun72293: for (var _fun72293_ip = 0;;) switch (_fun72293_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userId;
                var3 = var0.applicationId;
                var5 = var0.location;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun72293_ip = 69;
                    continue _fun72293
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
                _fun72293_ip = 115;
                continue _fun72293;
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
    var7 = function arg0() {
        _fun72294: for (var _fun72294_ip = 0;;) switch (_fun72294_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.userId;
                var4 = var0.applicationId;
                var3 = var0.location;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun72294_ip = 69;
                    continue _fun72294
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
                _fun72294_ip = 115;
                continue _fun72294;
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
    var3 = function arg0() {
        _fun72295: for (var _fun72295_ip = 0;;) switch (_fun72295_ip) {
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
                    _fun72295_ip = 145;
                    continue _fun72295
                }
            case 142:
                var2 = var7;
            case 145:
                var8 = _closure1_slot3;
                var7 = var8.isStranger;
                var7 = var7.bind(var8)(var6);
                var8 = null;
                if (!(var8 == var5)) {
                    _fun72295_ip = 312;
                    continue _fun72295
                }
            case 169:
                if (!var2) {
                    _fun72295_ip = 312;
                    continue _fun72295
                }
            case 175:
                var8 = false;
                if (!(var8 !== var7)) {
                    _fun72295_ip = 312;
                    continue _fun72295
                }
            case 184:
                if (!var7) {
                    _fun72295_ip = 190;
                    continue _fun72295
                }
            case 187:
                if (var2) {
                    _fun72295_ip = 253;
                    continue _fun72295
                }
            case 190:
                if (!var2) {
                    _fun72295_ip = 310;
                    continue _fun72295
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
                    _fun72299: for (var _fun72299_ip = 0;;) switch (_fun72299_ip) {
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
                                _fun72299_ip = 78;
                                continue _fun72299
                            }
                        case 68:
                            var4 = _closure2_slot3;
                            var3 = null;
                            var2 = var3 == var4;
                        case 78:
                            if (var2) {
                                _fun72299_ip = 89;
                                continue _fun72299
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
                _fun72295_ip = 310;
                continue _fun72295;
            case 253:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var8 = var7.bind(var3)(var2);
                var7 = var8.openAcceptFriendRequestConfirmModal;
                var2 = {};
                var9 = function() {
                    _fun72297: for (var _fun72297_ip = 0;;) switch (_fun72297_ip) {
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
                                _fun72297_ip = 68;
                                continue _fun72297
                            }
                        case 60:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)();
                        case 68:
                            return var0;
                    }
                };
                var2.onConfirm = var9;
                var9 = function() {
                    _fun72298: for (var _fun72298_ip = 0;;) switch (_fun72298_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72298_ip = 23;
                                continue _fun72298
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
                    _fun72296: for (var _fun72296_ip = 0;;) switch (_fun72296_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72296_ip = 23;
                                continue _fun72296
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3100, 660, 9023, 8022, 4276, 4279, 9024, 9025, 806, 2]);