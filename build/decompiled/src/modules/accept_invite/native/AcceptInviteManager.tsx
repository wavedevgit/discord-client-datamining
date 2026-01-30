// modules/accept_invite/native/AcceptInviteManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun113144: for (var _fun113144_ip = 0;;) switch (_fun113144_ip) {
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
            case 72: // try_end0
                _fun113144_ip = 76;
                continue _fun113144;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteStates;
    var _closure1_slot11 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: AcceptInviteManager, environment: var0
            _fun113148: for (var _fun113148_ip = 0;;) switch (_fun113148_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113148_ip = 86;
                        continue _fun113148
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113148_ip = 120;
                    continue _fun113148;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = false;
                    var0._isRegistration = var2;
                    var2 = {};
                    var3 = function(arg0) { // Original name: DISPLAYED_INVITE_SHOW, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2._handleShowInvite;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.DISPLAYED_INVITE_SHOW = var3;
                    var3 = function() { // Original name: DISPLAYED_INVITE_CLEAR, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1._handleClearInvite;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.DISPLAYED_INVITE_CLEAR = var3;
                    var3 = function() { // Original name: DEFERRED_INVITE_SHOW, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1._handleShowDeferredInvite;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.DEFERRED_INVITE_SHOW = var3;
                    var3 = function() { // Original name: REGISTER_SUCCESS, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1._handleRegisterSuccess;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.REGISTER_SUCCESS = var3;
                    var0.actions = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113153: for (var _fun113153_ip = 0;;) switch (_fun113153_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.code;
                                var2 = var0.deeplinkAttemptId;
                                var1 = _closure1_slot8;
                                var0 = var1.isAuthenticated;
                                var0 = var0.bind(var1)();
                                var1 = _closure3_slot0;
                                if (var0) {
                                    _fun113153_ip = 49;
                                    continue _fun113153
                                }
                            case 41:
                                var1._deferredCode = var3;
                                _fun113153_ip = 61;
                                continue _fun113153;
                            case 49:
                                var0 = var1._handleInvite;
                                var0 = var0.bind(var1)(var3, var2);
                            case 61:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleShowInvite = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = null;
                        var1._deferredCode = var0;
                        var0 = false;
                        var1._isRegistration = var0;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 10;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.popWithKey;
                        var1 = _closure1_slot10;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0._handleClearInvite = var2;
                    var2 = function() { // Environment: var1
                        _fun113155: for (var _fun113155_ip = 0;;) switch (_fun113155_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1._deferredCode;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun113155_ip = 46;
                                    continue _fun113155
                                }
                            case 19:
                                var0 = _closure3_slot0;
                                var3 = var0._handleInvite;
                                var2 = var0._deferredCode;
                                var2 = var3.bind(var0)(var2);
                                var0._deferredCode = var1;
                            case 46:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleShowDeferredInvite = var2;
                    var2 = function(arg0, arg1) { // Environment: var1
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = arg1;
                        var _closure4_slot1 = var1;
                        var2 = _closure1_slot9;
                        var1 = var2.addConditionalChangeListener;
                        var0 = function() { // Environment: var0
                            _fun113157: for (var _fun113157_ip = 0;;) switch (_fun113157_ip) {
                                case 0:
                                    var3 = _closure1_slot9;
                                    var2 = var3.getInvite;
                                    var0 = _closure4_slot0;
                                    var6 = var2.bind(var3)(var0);
                                    var8 = null;
                                    var0 = var8 == var6;
                                    if (var0) {
                                        _fun113157_ip = 122;
                                        continue _fun113157
                                    }
                                case 34:
                                    var3 = var6.state;
                                    var2 = _closure1_slot11;
                                    var2 = var2.RESOLVED;
                                    var2 = var3 !== var2;
                                    if (!var2) {
                                        _fun113157_ip = 75;
                                        continue _fun113157
                                    }
                                case 56:
                                    var4 = var6.state;
                                    var3 = _closure1_slot11;
                                    var3 = var3.EXPIRED;
                                    var2 = var4 !== var3;
                                case 75:
                                    if (!var2) {
                                        _fun113157_ip = 97;
                                        continue _fun113157
                                    }
                                case 78:
                                    var4 = var6.state;
                                    var3 = _closure1_slot11;
                                    var3 = var3.BANNED;
                                    var2 = var4 !== var3;
                                case 97:
                                    if (!var2) {
                                        _fun113157_ip = 119;
                                        continue _fun113157
                                    }
                                case 100:
                                    var4 = var6.state;
                                    var3 = _closure1_slot11;
                                    var3 = var3.ERROR;
                                    var2 = var4 !== var3;
                                case 119:
                                    var0 = var2;
                                case 122:
                                    if (var0) {
                                        _fun113157_ip = 400;
                                        continue _fun113157
                                    }
                                case 128:
                                    var2 = var6.channel;
                                    if (!(var8 == var2)) {
                                        _fun113157_ip = 159;
                                        continue _fun113157
                                    }
                                case 137:
                                    var2 = var6.guild;
                                    if (!(var8 == var2)) {
                                        _fun113157_ip = 159;
                                        continue _fun113157
                                    }
                                case 146:
                                    var2 = var6.inviter;
                                    if (!(var8 == var2)) {
                                        _fun113157_ip = 295;
                                        continue _fun113157
                                    }
                                case 159:
                                    var11 = _closure4_slot0;
                                    var2 = _closure3_slot0;
                                    var10 = var2._isRegistration;
                                    var2 = _closure4_slot1;
                                    var5 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var4 = 9;
                                    var4 = var3[var4];
                                    var13 = undefined;
                                    var9 = var5.bind(var13)(var4);
                                    var4 = var9.hideActionSheet;
                                    var4 = var4.bind(var9)();
                                    var4 = 10;
                                    var4 = var3[var4];
                                    var9 = var5.bind(var13)(var4);
                                    var5 = var9.pushLazy;
                                    var12 = _closure1_slot0;
                                    var4 = 12;
                                    var4 = var3[var4];
                                    var12 = var12.bind(var13)(var4);
                                    var4 = 11;
                                    var4 = var3[var4];
                                    var3 = var3.paths;
                                    var4 = var12.bind(var13)(var4, var3);
                                    var3 = {};
                                    var3.code = var11;
                                    var3.isRegistration = var10;
                                    var3.deeplinkAttemptId = var2;
                                    var2 = _closure1_slot10;
                                    var2 = var5.bind(var9)(var4, var3, var2);
                                    var0 = false;
                                    _fun113157_ip = 400;
                                    continue _fun113157;
                                case 295:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 13;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var5 = var4.bind(var3)(var2);
                                    var4 = var5.acceptFriendInvite;
                                    var2 = {};
                                    var7 = _closure4_slot1;
                                    var8 = var8 != var7;
                                    var7 = 'Accept Invite';
                                    if (!var8) {
                                        _fun113157_ip = 348;
                                        continue _fun113157
                                    }
                                case 342:
                                    var7 = 'Deep Link';
                                case 348:
                                    var2.location = var7;
                                    var2 = var4.bind(var5)(var6, var2);
                                    var2 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var1 = 14;
                                    var1 = var4[var1];
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.wait;
                                    var1 = function() { // Environment: var1
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 15;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        var0 = var1.clearDisplayedInvite;
                                        var0 = var0.bind(var1)();
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var0 = false;
                                case 400:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleInvite = var2;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = true;
                        var1._isRegistration = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleRegisterSuccess = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/accept_invite/native/AcceptInviteManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1216, 3282, 12236, 660, 3237, 4524, 14481, 1307, 14482, 806, 12548, 4262, 2]);