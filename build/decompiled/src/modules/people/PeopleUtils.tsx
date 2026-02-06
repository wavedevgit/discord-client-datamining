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
        _fun72331: for (var _fun72331_ip = 0;;) switch (_fun72331_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.userId;
                var4 = var0.applicationId;
                var7 = var0.location;
                var6 = var0.confirmStrangerRequest;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun72331_ip = 32;
                    continue _fun72331
                }
            case 30:
                var6 = false;
            case 32:
                var0 = null;
                if (!(var0 == var4)) {
                    _fun72331_ip = 95;
                    continue _fun72331
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
                _fun72331_ip = 139;
                continue _fun72331;
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
        _fun72332: for (var _fun72332_ip = 0;;) switch (_fun72332_ip) {
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
                    _fun72332_ip = 35;
                    continue _fun72332
                }
            case 30:
                var6 = var2.code;
            case 35:
                var3 = _closure1_slot4;
                var3 = var3.RELATIONSHIP_INVALID_NO_CONFIRMATION;
                if (!(var6 !== var3)) {
                    _fun72332_ip = 125;
                    continue _fun72332
                }
            case 52:
                var6 = var0.ok;
                var0 = false;
                if (!var6) {
                    _fun72332_ip = 235;
                    continue _fun72332
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
                _fun72332_ip = 235;
                continue _fun72332;
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
                    _fun72333: for (var _fun72333_ip = 0;;) switch (_fun72333_ip) {
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
                                _fun72333_ip = 70;
                                continue _fun72333
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
                    _fun72334: for (var _fun72334_ip = 0;;) switch (_fun72334_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.onCancel;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72334_ip = 33;
                                continue _fun72334
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
        _fun72335: for (var _fun72335_ip = 0;;) switch (_fun72335_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userId;
                var3 = var0.applicationId;
                var5 = var0.location;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun72335_ip = 69;
                    continue _fun72335
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
                _fun72335_ip = 115;
                continue _fun72335;
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
        _fun72336: for (var _fun72336_ip = 0;;) switch (_fun72336_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.userId;
                var4 = var0.applicationId;
                var3 = var0.location;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun72336_ip = 69;
                    continue _fun72336
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
                _fun72336_ip = 115;
                continue _fun72336;
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
        _fun72337: for (var _fun72337_ip = 0;;) switch (_fun72337_ip) {
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
                    _fun72337_ip = 145;
                    continue _fun72337
                }
            case 142:
                var2 = var7;
            case 145:
                var8 = _closure1_slot3;
                var7 = var8.isStranger;
                var7 = var7.bind(var8)(var6);
                var8 = null;
                if (!(var8 == var5)) {
                    _fun72337_ip = 312;
                    continue _fun72337
                }
            case 169:
                if (!var2) {
                    _fun72337_ip = 312;
                    continue _fun72337
                }
            case 175:
                var8 = false;
                if (!(var8 !== var7)) {
                    _fun72337_ip = 312;
                    continue _fun72337
                }
            case 184:
                if (!var7) {
                    _fun72337_ip = 190;
                    continue _fun72337
                }
            case 187:
                if (var2) {
                    _fun72337_ip = 253;
                    continue _fun72337
                }
            case 190:
                if (!var2) {
                    _fun72337_ip = 310;
                    continue _fun72337
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
                    _fun72341: for (var _fun72341_ip = 0;;) switch (_fun72341_ip) {
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
                                _fun72341_ip = 78;
                                continue _fun72341
                            }
                        case 68:
                            var4 = _closure2_slot3;
                            var3 = null;
                            var2 = var3 == var4;
                        case 78:
                            if (var2) {
                                _fun72341_ip = 89;
                                continue _fun72341
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
                _fun72337_ip = 310;
                continue _fun72337;
            case 253:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var8 = var7.bind(var3)(var2);
                var7 = var8.openAcceptFriendRequestConfirmModal;
                var2 = {};
                var9 = function() {
                    _fun72339: for (var _fun72339_ip = 0;;) switch (_fun72339_ip) {
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
                                _fun72339_ip = 68;
                                continue _fun72339
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
                    _fun72340: for (var _fun72340_ip = 0;;) switch (_fun72340_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72340_ip = 23;
                                continue _fun72340
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
                    _fun72338: for (var _fun72338_ip = 0;;) switch (_fun72338_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72338_ip = 23;
                                continue _fun72338
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3102, 660, 9047, 8047, 4279, 4280, 9048, 9049, 806, 2]);