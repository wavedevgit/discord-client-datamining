// modules/rtc/VerifiedKeyStore.tsx
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
        _fun66514: for (var _fun66514_ip = 0;;) switch (_fun66514_ip) {
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
                _fun66514_ip = 76;
                continue _fun66514;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: VerifiedKeyStore, environment: var5
            _fun66518: for (var _fun66518_ip = 0;;) switch (_fun66518_ip) {
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
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun66518_ip = 69;
                        continue _fun66518
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun66518_ip = 105;
                    continue _fun66518;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun66519: for (var _fun66519_ip = 0;;) switch (_fun66519_ip) {
                case 0:
                    var3 = arg0;
                    var1 = null;
                    var4 = var1 == var3;
                    var0 = undefined;
                    var2 = undefined;
                    if (var4) {
                        _fun66519_ip = 22;
                        continue _fun66519
                    }
                case 16:
                    var2 = var3.users;
                case 22:
                    if (!(var1 == var2)) {
                        _fun66519_ip = 28;
                        continue _fun66519
                    }
                case 26:
                    var2 = {};
                case 28:
                    _closure1_slot8 = var2;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure1_slot8;
            var0.users = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getKeyTrustedAt';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun66521: for (var _fun66521_ip = 0;;) switch (_fun66521_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.serializeKey;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot8;
                    var1 = arg0;
                    var1 = var3[var1];
                    var3 = null;
                    var3 = var3 == var1;
                    if (var3) {
                        _fun66521_ip = 63;
                        continue _fun66521
                    }
                case 59:
                    var0 = var1[var2];
                case 63:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isKeyVerified';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.getKeyTrustedAt;
            var1 = arg0;
            var0 = arg1;
            var1 = var2.bind(var3)(var1, var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUserIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.keys;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getUserVerifiedKeys';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot8;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'VerifiedKeyStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleSecureFramesVerifiedKeyCreate, environment: var3
        _fun66525: for (var _fun66525_ip = 0;;) switch (_fun66525_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var5 = var0.key;
                var1 = _closure1_slot8;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun66525_ip = 32;
                    continue _fun66525
                }
            case 30:
                var3 = {};
            case 32:
                var1 = _closure1_slot8;
                var1[var2] = var3;
                var1 = global;
                var2 = var1.Uint8Array;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var4;
                var6 = var5;
                var2 = new var7[var2](var6, var5);
                var5 = var2 instanceof Object ? var2 : var4;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.serializeKey;
                var2 = var2.bind(var4)(var5);
                var4 = var1.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var3[var2] = var1;
                return var0;
        }
    };
    var1.SECURE_FRAMES_VERIFIED_KEY_CREATE = var8;
    var8 = function(arg0) { // Original name: handleSecureFramesVerifiedKeyDelete, environment: var3
        _fun66526: for (var _fun66526_ip = 0;;) switch (_fun66526_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userId;
                var0 = var0.serializedKey;
                var1 = _closure1_slot8;
                var5 = var1[var3];
                var1 = null;
                if (!(var1 != var5)) {
                    _fun66526_ip = 84;
                    continue _fun66526
                }
            case 31:
                var0 = delete var5[var0];
                var1 = global;
                var4 = var1.Object;
                var1 = var4.keys;
                var1 = var1.bind(var4)(var5);
                var5 = var1.length;
                var4 = 0;
                var1 = false;
                if (!(var4 === var5)) {
                    _fun66526_ip = 76;
                    continue _fun66526
                }
            case 66:
                var2 = _closure1_slot8;
                var2 = delete var2[var3];
                var1 = true;
            case 76:
                if (var0) {
                    _fun66526_ip = 82;
                    continue _fun66526
                }
            case 79:
                var0 = var1;
            case 82:
                return var0;
            case 84:
                var0 = false;
                return var0;
        }
    };
    var1.SECURE_FRAMES_VERIFIED_KEY_DELETE = var8;
    var3 = function(arg0) { // Original name: handleSecureFramesUserVerifiedKeysDelete, environment: var3
        _fun66527: for (var _fun66527_ip = 0;;) switch (_fun66527_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var0 = _closure1_slot8;
                var3 = var0[var2];
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun66527_ip = 36;
                    continue _fun66527
                }
            case 28:
                var1 = _closure1_slot8;
                var0 = delete var1[var2];
            case 36:
                return var0;
        }
    };
    var1.SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE = var3;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/VerifiedKeyStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8208, 21, 566, 806, 2]);