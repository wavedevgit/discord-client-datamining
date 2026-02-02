// stores/MFAStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var0 = function() {
        _fun60733: for (var _fun60733_ip = 0;;) switch (_fun60733_ip) {
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
                _fun60733_ip = 74;
                continue _fun60733;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = false;
    var _closure1_slot8 = var1;
    var6 = new Array(0);
    var _closure1_slot9 = var6;
    var6 = '';
    var _closure1_slot10 = var6;
    var _closure1_slot11 = var1;
    var1 = {
        'viewNonce': '',
        'regenerateNonce': ''
    };
    var _closure1_slot12 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun60737: for (var _fun60737_ip = 0;;) switch (_fun60737_ip) {
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
                        _fun60737_ip = 69;
                        continue _fun60737
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun60737_ip = 105;
                    continue _fun60737;
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
        var0 = 'getVerificationKey';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getBackupCodes';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'togglingSMS';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getNonces';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasSeenBackupPrompt';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'MFAStore';
    var6.displayName = var1;
    var1 = 8;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        _fun60743: for (var _fun60743_ip = 0;;) switch (_fun60743_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.token;
                var2 = var0.codes;
                var0 = undefined;
                if (!(var0 !== var4)) {
                    _fun60743_ip = 55;
                    continue _fun60743
                }
            case 21:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.setToken;
                var1 = var1.bind(var3)(var4);
            case 55:
                _closure1_slot9 = var2;
                return var0;
        }
    };
    var1.MFA_ENABLE_SUCCESS = var7;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.token;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.setToken;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.MFA_DISABLE_SUCCESS = var7;
    var7 = function() {
        var0 = true;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.MFA_SMS_TOGGLE = var7;
    var7 = function() {
        var0 = false;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.MFA_SMS_TOGGLE_COMPLETE = var7;
    var7 = function() {
        var0 = new Array(0);
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.MFA_CLEAR_BACKUP_CODES = var7;
    var7 = function arg0() {
        var0 = arg0;
        var6 = var0.codes;
        var2 = var0.key;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 6;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.sortBy;
        var3 = 'code';
        var3 = var4.bind(var5)(var6, var3);
        _closure1_slot9 = var3;
        _closure1_slot10 = var2;
        return var0;
    };
    var1.MFA_VIEW_BACKUP_CODES = var7;
    var7 = function arg0() {
        var0 = arg0;
        var1 = var0.nonces;
        _closure1_slot12 = var1;
        var0 = undefined;
        return var0;
    };
    var1.MFA_SEND_VERIFICATION_KEY = var7;
    var7 = function() {
        var0 = true;
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var1.MFA_SEEN_BACKUP_CODE_PROMPT = var7;
    var3 = function() {
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/MFAStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 804, 22, 566, 806, 2]);