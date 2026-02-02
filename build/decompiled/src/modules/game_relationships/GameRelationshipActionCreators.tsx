// modules/game_relationships/GameRelationshipActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun72066: for (var _fun72066_ip = 0;;) switch (_fun72066_ip) {
            case 0:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 2;
                var1 = var6[var0];
                var0 = undefined;
                var1 = var10.bind(var0)(var1);
                var3 = var1.APIError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = arg0;
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var2.getAnyErrorMessage;
                var4 = var1.bind(var2)();
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var9 = 4;
                var7 = var6[var9];
                var7 = var10.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var9];
                var6 = var10.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6["328j/I"];
                var6 = var7.bind(var8)(var6);
                var1.title = var6;
                var6 = null;
                if (!(var6 == var4)) {
                    _fun72066_ip = 199;
                    continue _fun72066
                }
            case 147:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = var5[var9];
                var6 = var8.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var5[var9];
                var5 = var8.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.fEptJP;
                var4 = var6.bind(var7)(var5);
            case 199:
                var1.body = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun72070: for (var _fun72070_ip = 0;;) switch (_fun72070_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun72070_ip = 151;
                            continue _fun72070
                        }
                    case 13:
                        var8 = var1.userId;
                        var7 = var1.applicationId;
                        var4 = var1.onSuccess;
                        var2 = undefined;
                        SaveGenerator(address = 35);
                    case 33:
                        return var2;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun72070_ip = 148;
                            continue _fun72070
                        }
                    case 41: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var3 = var5.bind(var2)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.del;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var10 = _closure1_slot4;
                        var9 = var10.USER_GAME_RELATIONSHIP;
                        var7 = var9.bind(var10)(var8, var7);
                        var3.url = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 116);
                    case 114:
                        return var3;
                    case 116:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun72070_ip = 128;
                            continue _fun72070
                        }
                    case 122:
                        var4 = var4.bind(var2)();
                    case 126: // try_end0
                        _fun72070_ip = 145;
                        continue _fun72070;
                    case 128:
                        return var3;
                    case 131: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot6;
                        var3 = var3.bind(var2)(var4);
                    case 145:
                        return var2;
                    case 148:
                        return var1;
                    case 151:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun72073: for (var _fun72073_ip = 0;;) switch (_fun72073_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun72073_ip = 87;
                            continue _fun72073
                        }
                    case 10:
                        var6 = var1.userId;
                        var5 = var1.applicationId;
                        var3 = undefined;
                        SaveGenerator(address = 26);
                    case 24:
                        return var3;
                    case 26:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun72073_ip = 84;
                            continue _fun72073
                        }
                    case 32:
                        var4 = _closure1_slot7;
                        var2 = {};
                        var2.userId = var6;
                        var2.applicationId = var5;
                        var5 = function() {
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 6;
                            var1 = var7[var0];
                            var0 = undefined;
                            var1 = var6.bind(var0)(var1);
                            var3 = var1.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = 4;
                            var4 = var7[var1];
                            var4 = var6.bind(var0)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.zRf8cO;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var2.onSuccess = var5;
                        var2 = var4.bind(var3)(var2);
                        SaveGenerator(address = 72);
                    case 70:
                        return var2;
                    case 72:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun72073_ip = 81;
                            continue _fun72073
                        }
                    case 78:
                        return var3;
                    case 81:
                        return var2;
                    case 84:
                        return var1;
                    case 87:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun72077: for (var _fun72077_ip = 0;;) switch (_fun72077_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun72077_ip = 87;
                            continue _fun72077
                        }
                    case 10:
                        var6 = var1.userId;
                        var5 = var1.applicationId;
                        var3 = undefined;
                        SaveGenerator(address = 26);
                    case 24:
                        return var3;
                    case 26:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun72077_ip = 84;
                            continue _fun72077
                        }
                    case 32:
                        var4 = _closure1_slot7;
                        var2 = {};
                        var2.userId = var6;
                        var2.applicationId = var5;
                        var5 = function() {
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 6;
                            var1 = var7[var0];
                            var0 = undefined;
                            var1 = var6.bind(var0)(var1);
                            var3 = var1.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = 4;
                            var4 = var7[var1];
                            var4 = var6.bind(var0)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.XMf21q;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var2.onSuccess = var5;
                        var2 = var4.bind(var3)(var2);
                        SaveGenerator(address = 72);
                    case 70:
                        return var2;
                    case 72:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun72077_ip = 81;
                            continue _fun72077
                        }
                    case 78:
                        return var3;
                    case 81:
                        return var2;
                    case 84:
                        return var1;
                    case 87:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot4 = var6;
    var1 = var1.RelationshipTypes;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.removeGameFriend = var6;
    var6 = function arg0() {
        var1 = arg0;
        var3 = var1.userId;
        var1 = var1.applicationId;
        var2 = {};
        var2.userId = var3;
        var2.applicationId = var1;
        var1 = _closure1_slot5;
        var1 = var1.FRIEND;
        var2.type = var1;
        var1 = function() {
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var0 = 6;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 4;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.taJiuc;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2.onSuccess = var1;
        var1 = function arg0() {
            var1 = arg0;
            var8 = var1.userId;
            var7 = var1.applicationId;
            var2 = var1.onSuccess;
            var _closure3_slot0 = var2;
            var5 = var1.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.HTTP;
            var2 = var3.put;
            var1 = {};
            var6 = _closure1_slot4;
            var4 = var6.USER_GAME_RELATIONSHIP;
            var4 = var4.bind(var6)(var8, var7);
            var1.url = var4;
            var4 = {};
            var4.type = var5;
            var1.body = var4;
            var4 = true;
            var1.oldFormErrors = var4;
            var4 = false;
            var1.rejectWithError = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.catch;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = _closure1_slot6;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.reject;
                var0 = var0.bind(var1)(var2);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.acceptGameFriendRequest = var6;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.cancelGameFriendRequest = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_relationships/GameRelationshipActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 3311, 3964, 1234, 507, 3167, 2]);