// stores/InstantInviteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun51846: for (var _fun51846_ip = 0;;) switch (_fun51846_ip) {
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
                _fun51846_ip = 74;
                continue _fun51846;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.InviteTargetTypes;
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = {};
    var _closure1_slot13 = var1;
    var1 = false;
    var _closure1_slot14 = var1;
    var _closure1_slot15 = var1;
    var _closure1_slot16 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun51850: for (var _fun51850_ip = 0;;) switch (_fun51850_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun51850_ip = 69;
                        continue _fun51850
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun51850_ip = 105;
                    continue _fun51850;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'getInvite';
        var4.key = var0;
        var0 = function arg0() {
            _fun51851: for (var _fun51851_ip = 0;;) switch (_fun51851_ip) {
                case 0:
                    var5 = arg0;
                    var0 = arguments[1];
                    var1 = undefined;
                    if (!(var0 === var1)) {
                        _fun51851_ip = 14;
                        continue _fun51851
                    }
                case 12:
                    var0 = {};
                case 14:
                    var6 = var0.targetType;
                    var3 = var0.targetUserId;
                    var8 = var0.targetApplicationId;
                    var0 = _closure1_slot8;
                    var0 = var0.STREAM;
                    if (!(var6 === var0)) {
                        _fun51851_ip = 55;
                        continue _fun51851
                    }
                case 49:
                    var4 = null;
                    if (!(var4 == var3)) {
                        _fun51851_ip = 111;
                        continue _fun51851
                    }
                case 55:
                    var0 = _closure1_slot8;
                    var0 = var0.EMBEDDED_APPLICATION;
                    if (!(var6 === var0)) {
                        _fun51851_ip = 75;
                        continue _fun51851
                    }
                case 69:
                    var6 = null;
                    if (!(var6 == var8)) {
                        _fun51851_ip = 85;
                        continue _fun51851
                    }
                case 75:
                    var0 = _closure1_slot10;
                    var0 = var0[var5];
                    _fun51851_ip = 109;
                    continue _fun51851;
                case 85:
                    var7 = _closure1_slot12;
                    var7 = var7[var5];
                    var9 = var6 == var7;
                    var6 = undefined;
                    if (var9) {
                        _fun51851_ip = 106;
                        continue _fun51851
                    }
                case 102:
                    var6 = var7[var8];
                case 106:
                    var0 = var6;
                case 109:
                    _fun51851_ip = 135;
                    continue _fun51851;
                case 111:
                    var2 = _closure1_slot11;
                    var2 = var2[var5];
                    var4 = var4 == var2;
                    var1 = undefined;
                    if (var4) {
                        _fun51851_ip = 132;
                        continue _fun51851
                    }
                case 128:
                    var1 = var2[var3];
                case 132:
                    var0 = var1;
                case 135:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFriendInvite';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getFriendInvitesFetching';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'canRevokeFriendInvite';
        var4.key = var6;
        var5 = function() {
            _fun51854: for (var _fun51854_ip = 0;;) switch (_fun51854_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun51854_ip = 23;
                        continue _fun51854
                    }
                case 16:
                    var2 = _closure1_slot15;
                    var0 = !var2;
                case 23:
                    if (!var0) {
                        _fun51854_ip = 33;
                        continue _fun51854
                    }
                case 26:
                    var1 = _closure1_slot16;
                    var0 = !var1;
                case 33:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'InstantInviteStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = {};
        _closure1_slot10 = var0;
        var0 = {};
        _closure1_slot11 = var0;
        var0 = {};
        _closure1_slot12 = var0;
        var0 = {};
        _closure1_slot13 = var0;
        var0 = null;
        var _closure1_slot9 = var0;
        var0 = false;
        _closure1_slot15 = var0;
        _closure1_slot16 = var0;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var3 = _closure1_slot10;
        var2 = var0.id;
        var2 = delete var3[var2];
        var3 = _closure1_slot11;
        var2 = var0.id;
        var2 = delete var3[var2];
        var1 = _closure1_slot12;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.CHANNEL_DELETE = var8;
    var8 = function arg0() {
        _fun51857: for (var _fun51857_ip = 0;;) switch (_fun51857_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot13;
                var1 = var0.invite;
                var1 = var1.code;
                var5 = _closure1_slot7;
                var4 = var5.createFromServer;
                var0 = var0.invite;
                var0 = var4.bind(var5)(var0);
                var3[var1] = var0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 7;
                var1 = var6[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var1);
                var1 = 8;
                var1 = var6[var1];
                var4 = var5.bind(var0)(var1);
                var1 = 9;
                var1 = var6[var1];
                var6 = var5.bind(var0)(var1);
                var1 = global;
                var7 = var1.Object;
                var5 = var7.values;
                var1 = _closure1_slot13;
                var5 = var5.bind(var7)(var1);
                var1 = 'createdAt';
                var1 = var6.bind(var0)(var5, var1);
                var1 = var4.bind(var0)(var1);
                var3 = var3.bind(var0)(var1);
                var1 = null;
                var4 = var1 != var3;
                if (!var4) {
                    _fun51857_ip = 146;
                    continue _fun51857
                }
            case 143:
                var1 = var3;
            case 146:
                _closure1_slot9 = var1;
                var1 = false;
                _closure1_slot16 = var1;
                return var0;
        }
    };
    var1.FRIEND_INVITE_CREATE_SUCCESS = var8;
    var8 = function() {
        var0 = false;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var1.FRIEND_INVITE_CREATE_FAILURE = var8;
    var8 = function arg0() {
        _fun51859: for (var _fun51859_ip = 0;;) switch (_fun51859_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.invites;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun51859_ip = 38;
                    continue _fun51859
                }
            case 15:
                var3 = var0.invites;
                var2 = var3.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun51860: for (var _fun51860_ip = 0;;) switch (_fun51860_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure1_slot13;
                            var2 = var0.code;
                            var3 = var3[var2];
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun51860_ip = 38;
                                continue _fun51860
                            }
                        case 25:
                            var1 = _closure1_slot13;
                            var0 = var0.code;
                            var0 = delete var1[var0];
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
            case 38:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 7;
                var3 = var7[var0];
                var0 = undefined;
                var4 = var6.bind(var0)(var3);
                var3 = 8;
                var3 = var7[var3];
                var5 = var6.bind(var0)(var3);
                var3 = 9;
                var3 = var7[var3];
                var7 = var6.bind(var0)(var3);
                var3 = global;
                var8 = var3.Object;
                var6 = var8.values;
                var3 = _closure1_slot13;
                var6 = var6.bind(var8)(var3);
                var3 = 'createdAt';
                var3 = var7.bind(var0)(var6, var3);
                var3 = var5.bind(var0)(var3);
                var3 = var4.bind(var0)(var3);
                var4 = var1 != var3;
                var1 = null;
                if (!var4) {
                    _fun51859_ip = 141;
                    continue _fun51859
                }
            case 138:
                var1 = var3;
            case 141:
                _closure1_slot9 = var1;
                var1 = false;
                _closure1_slot15 = var1;
                return var0;
        }
    };
    var1.FRIEND_INVITE_REVOKE_SUCCESS = var8;
    var8 = function arg0() {
        _fun51861: for (var _fun51861_ip = 0;;) switch (_fun51861_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var4 = var0.invite;
                var3 = _closure1_slot7;
                var2 = var3.createFromServer;
                var2 = var2.bind(var3)(var4);
                var4 = var2.targetType;
                var3 = _closure1_slot8;
                var3 = var3.STREAM;
                if (!(var4 === var3)) {
                    _fun51861_ip = 64;
                    continue _fun51861
                }
            case 52:
                var3 = var2.targetUser;
                var4 = null;
                if (!(var4 == var3)) {
                    _fun51861_ip = 153;
                    continue _fun51861
                }
            case 64:
                var5 = var2.targetType;
                var3 = _closure1_slot8;
                var3 = var3.EMBEDDED_APPLICATION;
                if (!(var5 === var3)) {
                    _fun51861_ip = 96;
                    continue _fun51861
                }
            case 84:
                var3 = var2.targetApplication;
                var5 = null;
                if (!(var5 == var3)) {
                    _fun51861_ip = 106;
                    continue _fun51861
                }
            case 96:
                var3 = _closure1_slot10;
                var3[var1] = var2;
                _fun51861_ip = 213;
                continue _fun51861;
            case 106:
                var3 = _closure1_slot12;
                var3 = var3[var1];
                if (!(var5 == var3)) {
                    _fun51861_ip = 128;
                    continue _fun51861
                }
            case 118:
                var5 = _closure1_slot12;
                var3 = {};
                var5[var1] = var3;
            case 128:
                var3 = _closure1_slot12;
                var5 = var3[var1];
                var3 = var2.targetApplication;
                var3 = var3.id;
                var5[var3] = var2;
                _fun51861_ip = 213;
                continue _fun51861;
            case 153:
                var3 = _closure1_slot11;
                var3 = var3[var1];
                if (!(var4 == var3)) {
                    _fun51861_ip = 175;
                    continue _fun51861
                }
            case 165:
                var4 = _closure1_slot11;
                var3 = {};
                var4[var1] = var3;
            case 175:
                var0 = _closure1_slot11;
                var1 = var0[var1];
                var0 = global;
                var4 = var0.String;
                var0 = var2.targetUser;
                var3 = var0.id;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var1[var0] = var2;
            case 213:
                var0 = undefined;
                return var0;
        }
    };
    var1.INSTANT_INVITE_CREATE_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot10;
        var0 = null;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.INSTANT_INVITE_CREATE_FAILURE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot10;
        var0 = null;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.INSTANT_INVITE_REVOKE_SUCCESS = var8;
    var8 = function() {
        var0 = true;
        _closure1_slot15 = var0;
        var0 = undefined;
        return var0;
    };
    var1.FRIEND_INVITE_REVOKE_REQUEST = var8;
    var8 = function() {
        var0 = true;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var1.FRIEND_INVITE_CREATE_REQUEST = var8;
    var8 = function() {
        var0 = true;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var1.FRIEND_INVITES_FETCH_REQUEST = var8;
    var8 = function arg0() {
        _fun51867: for (var _fun51867_ip = 0;;) switch (_fun51867_ip) {
            case 0:
                var0 = {};
                _closure1_slot13 = var0;
                var0 = arg0;
                var3 = var0.invites;
                var1 = var3.forEach;
                var0 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var2 = _closure1_slot13;
                    var1 = var4.code;
                    var3 = _closure1_slot7;
                    var0 = var3.createFromServer;
                    var0 = var0.bind(var3)(var4);
                    var2[var1] = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var3)(var0);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 7;
                var1 = var6[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var1);
                var1 = 8;
                var1 = var6[var1];
                var4 = var5.bind(var0)(var1);
                var1 = 9;
                var1 = var6[var1];
                var6 = var5.bind(var0)(var1);
                var1 = global;
                var7 = var1.Object;
                var5 = var7.values;
                var1 = _closure1_slot13;
                var5 = var5.bind(var7)(var1);
                var1 = 'createdAt';
                var1 = var6.bind(var0)(var5, var1);
                var1 = var4.bind(var0)(var1);
                var3 = var3.bind(var0)(var1);
                var1 = null;
                var4 = var1 != var3;
                if (!var4) {
                    _fun51867_ip = 135;
                    continue _fun51867
                }
            case 132:
                var1 = var3;
            case 135:
                _closure1_slot9 = var1;
                var1 = false;
                _closure1_slot14 = var1;
                return var0;
        }
    };
    var1.FRIEND_INVITES_FETCH_RESPONSE = var8;
    var3 = function arg0() {
        var1 = _closure1_slot10;
        var0 = arg0;
        var0 = var0.channelId;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.INSTANT_INVITE_CLEAR = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/InstantInviteStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5900, 3335, 5901, 5903, 5904, 566, 806, 2]);