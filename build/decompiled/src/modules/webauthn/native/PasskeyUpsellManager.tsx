// modules/webauthn/native/PasskeyUpsellManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun80395: for (var _fun80395_ip = 0;;) switch (_fun80395_ip) {
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
                _fun80395_ip = 76;
                continue _fun80395;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.LoginStates;
    var _closure1_slot11 = var3;
    var3 = false;
    var _closure1_slot12 = var3;
    var _closure1_slot13 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun80399: for (var _fun80399_ip = 0;;) switch (_fun80399_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun80399_ip = 84;
                        continue _fun80399
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun80399_ip = 118;
                    continue _fun80399;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = {};
                    var3 = var0.handlePasskeyUpsellShow;
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = var0.handleLogout;
                    var2.LOGIN_RESET = var3;
                    var3 = var0.handleLoginSuccess;
                    var2.LOGIN_SUCCESS = var3;
                    var3 = var0.handleLogout;
                    var2.LOGOUT = var3;
                    var0.actions = var2;
                    var2 = global;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var5 = var2 instanceof Object ? var2 : var3;
                    var4 = var5.set;
                    var3 = _closure1_slot8;
                    var2 = var0.handlePasskeyUpsellShow;
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.set;
                    var3 = _closure1_slot9;
                    var2 = var0.handlePasskeyUpsellShow;
                    var4 = var4.bind(var5)(var3, var2);
                    var3 = var4.set;
                    var2 = _closure1_slot10;
                    var1 = var0.handlePasskeyUpsellShow;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.stores = var1;
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
        var0 = 'handlePasskeyUpsellShow';
        var4.key = var0;
        var0 = function() {
            _fun80400: for (var _fun80400_ip = 0;;) switch (_fun80400_ip) {
                case 0:
                    var1 = _closure1_slot13;
                    if (!var1) {
                        _fun80400_ip = 346;
                        continue _fun80400
                    }
                case 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.hasWebAuthn;
                    if (!var1) {
                        _fun80400_ip = 346;
                        continue _fun80400
                    }
                case 47:
                    var3 = _closure1_slot8;
                    var1 = var3.getLoginStatus;
                    var3 = var1.bind(var3)();
                    var1 = _closure1_slot11;
                    var1 = var1.NONE;
                    if (!(var3 === var1)) {
                        _fun80400_ip = 346;
                        continue _fun80400
                    }
                case 78:
                    var3 = _closure1_slot8;
                    var1 = var3.attemptedPasswordLogin;
                    var1 = var1.bind(var3)();
                    if (!var1) {
                        _fun80400_ip = 346;
                        continue _fun80400
                    }
                case 98:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 10;
                    var1 = var6[var1];
                    var4 = var5.bind(var2)(var1);
                    var3 = var4.UNSAFE_isDismissibleContentDismissed;
                    var1 = 11;
                    var1 = var6[var1];
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.PASSWORDLESS_UPSELL;
                    var1 = var3.bind(var4)(var1);
                    if (var1) {
                        _fun80400_ip = 346;
                        continue _fun80400
                    }
                case 159:
                    var3 = _closure1_slot10;
                    var1 = var3.hasFetchedCredentials;
                    var1 = var1.bind(var3)();
                    if (!var1) {
                        _fun80400_ip = 192;
                        continue _fun80400
                    }
                case 176:
                    var1 = _closure1_slot10;
                    var1 = var1.hasCredentials;
                    if (var1) {
                        _fun80400_ip = 346;
                        continue _fun80400
                    }
                case 192:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var1 = var4[var1];
                    var3 = var3.bind(var2)(var1);
                    var1 = var3.isModalOpen;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun80400_ip = 346;
                        continue _fun80400
                    }
                case 225:
                    var3 = _closure1_slot9;
                    var1 = var3.getCurrentUser;
                    var3 = var1.bind(var3)();
                    var1 = var2 !== var3;
                    if (!var1) {
                        _fun80400_ip = 251;
                        continue _fun80400
                    }
                case 245:
                    var1 = var3.verified;
                case 251:
                    if (!var1) {
                        _fun80400_ip = 346;
                        continue _fun80400
                    }
                case 254:
                    var3 = _closure1_slot10;
                    var1 = var3.hasFetchedCredentials;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun80400_ip = 316;
                        continue _fun80400
                    }
                case 271:
                    var1 = _closure1_slot12;
                    if (var1) {
                        _fun80400_ip = 346;
                        continue _fun80400
                    }
                case 278:
                    var1 = true;
                    _closure1_slot12 = var1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var1 = var4[var1];
                    var3 = var3.bind(var2)(var1);
                    var1 = var3.fetchWebAuthnCredentials;
                    var1 = var1.bind(var3)();
                    _fun80400_ip = 346;
                    continue _fun80400;
                case 316:
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 14;
                    var0 = var3[var0];
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.openPasskeyUpsell;
                    var0 = var0.bind(var1)();
                case 346:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleLoginSuccess';
        var4.key = var6;
        var6 = function() {
            var0 = true;
            _closure1_slot13 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleLogout';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            _closure1_slot12 = var0;
            _closure1_slot13 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'markDismissed';
        var4.key = var6;
        var5 = function arg0() {
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var0 = 10;
            var0 = var5[var0];
            var1 = undefined;
            var3 = var4.bind(var1)(var0);
            var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
            var0 = 11;
            var0 = var5[var0];
            var0 = var4.bind(var1)(var0);
            var0 = var0.DismissibleContent;
            var1 = var0.PASSWORDLESS_UPSELL;
            var0 = {};
            var4 = arg0;
            var0.dismissAction = var4;
            var4 = true;
            var0.forceTrack = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
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
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/native/PasskeyUpsellManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1217, 1621, 10191, 660, 10198, 3218, 1358, 3918, 4573, 10201, 4307, 2]);