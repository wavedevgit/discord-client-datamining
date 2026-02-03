// modules/webauthn/WebAuthnStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun60692: for (var _fun60692_ip = 0;;) switch (_fun60692_ip) {
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
                _fun60692_ip = 74;
                continue _fun60692;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
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
    var1 = false;
    var _closure1_slot7 = var1;
    var7 = new Array(0);
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun60696: for (var _fun60696_ip = 0;;) switch (_fun60696_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun60696_ip = 69;
                        continue _fun60696
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun60696_ip = 105;
                    continue _fun60696;
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
        var0 = 'hasFetchedCredentials';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasCredentials';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCredentials';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasPendingRegisterTrigger';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'WebAuthnStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = new Array(0);
        _closure1_slot8 = var0;
        var0 = false;
        _closure1_slot7 = var0;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function arg0() {
        _fun60702: for (var _fun60702_ip = 0;;) switch (_fun60702_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.credentials;
                var3 = _closure1_slot8;
                var0 = false;
                if (!(var3 !== var1)) {
                    _fun60702_ip = 28;
                    continue _fun60702
                }
            case 22:
                _closure1_slot8 = var1;
                var0 = true;
            case 28:
                var1 = _closure1_slot7;
                if (var1) {
                    _fun60702_ip = 43;
                    continue _fun60702
                }
            case 35:
                var1 = true;
                _closure1_slot7 = var1;
                var0 = true;
            case 43:
                return var0;
        }
    };
    var1.MFA_WEBAUTHN_CREDENTIALS_LOADED = var8;
    var8 = function arg0() {
        _fun60703: for (var _fun60703_ip = 0;;) switch (_fun60703_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.credential;
                var _closure2_slot0 = var3;
                var5 = var3.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 5;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var6.bind(var0)(var4);
                var4 = var4.AuthenticatorType;
                var4 = var4.WEBAUTHN;
                if (!(var5 === var4)) {
                    _fun60703_ip = 119;
                    continue _fun60703
                }
            case 61:
                var5 = _closure1_slot8;
                var4 = var5.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                if (!(var0 === var1)) {
                    _fun60703_ip = 119;
                    continue _fun60703
                }
            case 84:
                var8 = _closure1_slot8;
                var1 = new Array(1);
                var7 = 0;
                var9 = var1;
                var4 = arraySpread(var9, var8, var7);
                var1[var4] = var3;
                var3 = 1;
                var3 = var4 + var3;
                _closure1_slot8 = var1;
                return var0;
            case 119:
                var0 = false;
                return var0;
        }
    };
    var1.AUTHENTICATOR_CREATE = var8;
    var8 = function arg0() {
        _fun60705: for (var _fun60705_ip = 0;;) switch (_fun60705_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.credential;
                var _closure2_slot0 = var0;
                var4 = var0.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 5;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = var3.AuthenticatorType;
                var3 = var3.WEBAUTHN;
                if (!(var4 === var3)) {
                    _fun60705_ip = 86;
                    continue _fun60705
                }
            case 61:
                var4 = _closure1_slot8;
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    _fun60706: for (var _fun60706_ip = 0;;) switch (_fun60706_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.id;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            if (!(var3 === var2)) {
                                _fun60706_ip = 28;
                                continue _fun60706
                            }
                        case 24:
                            var0 = _closure2_slot0;
                        case 28:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                _closure1_slot8 = var1;
                return var0;
            case 86:
                var0 = false;
                return var0;
        }
    };
    var1.AUTHENTICATOR_UPDATE = var8;
    var8 = function arg0() {
        _fun60707: for (var _fun60707_ip = 0;;) switch (_fun60707_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.credential;
                var _closure2_slot0 = var0;
                var4 = var0.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 5;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = var3.AuthenticatorType;
                var3 = var3.WEBAUTHN;
                if (!(var4 === var3)) {
                    _fun60707_ip = 86;
                    continue _fun60707
                }
            case 61:
                var4 = _closure1_slot8;
                var3 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 !== var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                _closure1_slot8 = var1;
                return var0;
            case 86:
                var0 = false;
                return var0;
        }
    };
    var1.AUTHENTICATOR_DELETE = var8;
    var8 = function() {
        _fun60709: for (var _fun60709_ip = 0;;) switch (_fun60709_ip) {
            case 0:
                var0 = _closure1_slot9;
                if (var0) {
                    _fun60709_ip = 20;
                    continue _fun60709
                }
            case 10:
                var0 = true;
                _closure1_slot9 = var0;
                var0 = undefined;
                return var0;
            case 20:
                var0 = false;
                return var0;
        }
    };
    var1.WEBAUTHN_TRIGGER_REGISTER = var8;
    var3 = function() {
        _fun60710: for (var _fun60710_ip = 0;;) switch (_fun60710_ip) {
            case 0:
                var2 = _closure1_slot9;
                var0 = false;
                if (var2) {
                    _fun60710_ip = 14;
                    continue _fun60710
                }
            case 12:
                return var0;
            case 14:
                _closure1_slot9 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.WEBAUTHN_CLEAR_REGISTER_TRIGGER = var3;
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/WebAuthnStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1636, 566, 806, 2]);