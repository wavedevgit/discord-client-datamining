// modules/pomelo/PomeloStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun80782: for (var _fun80782_ip = 0;;) switch (_fun80782_ip) {
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
                _fun80782_ip = 76;
                continue _fun80782;
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
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {
        'taken': null,
        'error': null,
        'rateLimited': true
    };
    var1.error = var0;
    var _closure1_slot7 = var1;
    var1 = {
        'validations': null,
        'currentUsernameInvalid': false,
        'retryAfterTime': null
    };
    var6 = 5;
    var6 = var4[var6];
    var8 = var5.bind(var0)(var6);
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var13 = {
        'max': 100,
        'maxAge': 60000
    };
    var14 = var7;
    var6 = new var14[var8](var13, var12);
    var6 = var6 instanceof Object ? var6 : var7;
    var1.validations = var6;
    var8 = false;
    var6 = {};
    var7 = {
        'suggestion': null,
        'fetched': false,
        'usernameSuggestionLoading': false
    };
    var9 = {};
    var9.username = var0;
    var7.suggestion = var9;
    var6.migration = var7;
    var7 = {};
    var9 = {};
    var9.username = var0;
    var7.suggestion = var9;
    var7.source = var0;
    var7.fetched = var8;
    var6.registration = var7;
    var1.suggestions = var6;
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: PomeloStore, environment: var5
            _fun80786: for (var _fun80786_ip = 0;;) switch (_fun80786_ip) {
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
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun80786_ip = 69;
                        continue _fun80786
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun80786_ip = 105;
                    continue _fun80786;
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
        var0 = 'isRateLimited';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun80787: for (var _fun80787_ip = 0;;) switch (_fun80787_ip) {
                case 0:
                    var0 = _closure1_slot8;
                    var2 = var0.retryAfterTime;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun80787_ip = 53;
                        continue _fun80787
                    }
                case 22:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var1 = _closure1_slot8;
                    var1 = var1.retryAfterTime;
                    var0 = var2 < var1;
                case 53:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'validate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun80788: for (var _fun80788_ip = 0;;) switch (_fun80788_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot8;
                    var4 = var0.validations;
                    var2 = var4.get;
                    var0 = arg0;
                    var2 = var2.bind(var4)(var0);
                    var0 = var3.isRateLimited;
                    var0 = var0.bind(var3)();
                    if (!var0) {
                        _fun80788_ip = 57;
                        continue _fun80788
                    }
                case 42:
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun80788_ip = 92;
                        continue _fun80788
                    }
                case 48:
                    var0 = var2.rateLimited;
                    if (var0) {
                        _fun80788_ip = 92;
                        continue _fun80788
                    }
                case 57:
                    var0 = var3.isRateLimited;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun80788_ip = 87;
                        continue _fun80788
                    }
                case 70:
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun80788_ip = 87;
                        continue _fun80788
                    }
                case 76:
                    var3 = var2.rateLimited;
                    var0 = undefined;
                    if (var3) {
                        _fun80788_ip = 90;
                        continue _fun80788
                    }
                case 87:
                    var0 = var2;
                case 90:
                    _fun80788_ip = 96;
                    continue _fun80788;
                case 92:
                    var0 = _closure1_slot7;
                case 96:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'registrationUsernameSuggestion';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.suggestions;
            var0 = var0.registration;
            var0 = var0.suggestion;
            var0 = var0.username;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'usernameSuggestion';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.suggestions;
            var0 = var0.migration;
            var0 = var0.suggestion;
            var0 = var0.username;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'usernameSuggestionLoading';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.suggestions;
            var0 = var0.migration;
            var0 = var0.usernameSuggestionLoading;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isCurrentUsernameInvalid';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.currentUsernameInvalid;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'wasRegistrationSuggestionFetched';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun80793: for (var _fun80793_ip = 0;;) switch (_fun80793_ip) {
                case 0:
                    var0 = _closure1_slot8;
                    var0 = var0.suggestions;
                    var0 = var0.registration;
                    var2 = var0.source;
                    var0 = arg0;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun80793_ip = 56;
                        continue _fun80793
                    }
                case 34:
                    var1 = _closure1_slot8;
                    var1 = var1.suggestions;
                    var1 = var1.registration;
                    var0 = var1.fetched;
                case 56:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'wasSuggestionsFetched';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.suggestions;
            var0 = var0.migration;
            var0 = var0.fetched;
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'PomeloStore';
    var6.displayName = var1;
    var1 = 8;
    var1 = var4[var1];
    var13 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function(arg0) { // Original name: handlePomeloAttemptSuccess, environment: var3
        var0 = arg0;
        var3 = var0.username;
        var4 = var0.taken;
        var0 = _closure1_slot8;
        var2 = var0.validations;
        var1 = var2.set;
        var0 = {};
        var0.taken = var4;
        var0 = var1.bind(var2)(var3, var0);
        var0 = undefined;
        return var0;
    };
    var1.POMELO_ATTEMPT_SUCCESS = var7;
    var7 = function(arg0) { // Original name: handlePomeloAttemptFailure, environment: var3
        _fun80796: for (var _fun80796_ip = 0;;) switch (_fun80796_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.username;
                var7 = var0.error;
                var1 = var0.statusCode;
                var3 = var0.retryAfter;
                var0 = 429;
                if (!(var0 !== var1)) {
                    _fun80796_ip = 74;
                    continue _fun80796
                }
            case 35:
                var0 = _closure1_slot8;
                var2 = var0.validations;
                var1 = var2.set;
                var0 = {};
                var4 = null;
                var0.taken = var4;
                var0.error = var7;
                var0 = var1.bind(var2)(var5, var0);
                _fun80796_ip = 172;
                continue _fun80796;
            case 74:
                var1 = _closure1_slot8;
                var4 = var1.validations;
                var2 = var4.set;
                var1 = {
                    'taken': null,
                    'error': null,
                    'rateLimited': true
                };
                var6 = null;
                var1.error = var7;
                var7 = var6 != var3;
                var6 = 7;
                if (!var7) {
                    _fun80796_ip = 127;
                    continue _fun80796
                }
            case 124:
                var6 = var3;
            case 127:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 6;
                var7 = var7[var0];
                var0 = undefined;
                var0 = var8.bind(var0)(var7);
                var0 = var0.Millis;
                var0 = var0.SECOND;
                var0 = var6 * var0;
                var0 = var2.bind(var4)(var5, var1, var0);
            case 172:
                var0 = null;
                if (!(var0 != var3)) {
                    _fun80796_ip = 250;
                    continue _fun80796
                }
            case 178:
                var1 = _closure1_slot8;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 6;
                var4 = var4[var0];
                var0 = undefined;
                var0 = var5.bind(var0)(var4);
                var0 = var0.Millis;
                var0 = var0.SECOND;
                var0 = var3 * var0;
                var0 = var2 + var0;
                var1.retryAfterTime = var0;
            case 250:
                var0 = undefined;
                return var0;
        }
    };
    var1.POMELO_ATTEMPT_FAILURE = var7;
    var7 = function() { // Original name: handlePomeloSuggestionsReset, environment: var3
        var1 = _closure1_slot8;
        var4 = var1.suggestions;
        var2 = {
            'suggestion': null,
            'fetched': false,
            'usernameSuggestionLoading': false
        };
        var3 = {};
        var0 = undefined;
        var3.username = var0;
        var2.suggestion = var3;
        var3 = false;
        var4.migration = var2;
        var2 = var1.suggestions;
        var1 = {};
        var4 = {};
        var4.username = var0;
        var1.suggestion = var4;
        var1.source = var0;
        var1.fetched = var3;
        var2.registration = var1;
        return var0;
    };
    var1.POMELO_SUGGESTIONS_RESET = var7;
    var7 = function(arg0) { // Original name: handlePomeloSuggestionsSuccess, environment: var3
        _fun80798: for (var _fun80798_ip = 0;;) switch (_fun80798_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.suggestion;
                var0 = _closure1_slot8;
                var3 = var0.suggestions;
                var0 = {
                    'suggestion': null,
                    'fetched': true,
                    'usernameSuggestionLoading': false
                };
                var0.suggestion = var4;
                var2 = true;
                var3.migration = var0;
                var0 = null;
                var5 = var0 == var4;
                var0 = undefined;
                var3 = undefined;
                if (var5) {
                    _fun80798_ip = 71;
                    continue _fun80798
                }
            case 63:
                var3 = var4.invalid_current_username;
            case 71:
                if (!(var2 === var3)) {
                    _fun80798_ip = 85;
                    continue _fun80798
                }
            case 75:
                var1 = _closure1_slot8;
                var1.currentUsernameInvalid = var2;
            case 85:
                return var0;
        }
    };
    var1.POMELO_SUGGESTIONS_SUCCESS = var7;
    var7 = function(arg0) { // Original name: handlePomeloSuggestionsFetch, environment: var3
        var0 = arg0;
        var1 = var0.usernameSuggestionLoading;
        var0 = _closure1_slot8;
        var0 = var0.suggestions;
        var0 = var0.migration;
        var0.usernameSuggestionLoading = var1;
        var0 = undefined;
        return var0;
    };
    var1.POMELO_SUGGESTIONS_FETCH = var7;
    var3 = function(arg0) { // Original name: handlePomeloRegistrationSuggestionsSuccess, environment: var3
        _fun80800: for (var _fun80800_ip = 0;;) switch (_fun80800_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.suggestion;
                var4 = var0.source;
                var0 = _closure1_slot8;
                var3 = var0.suggestions;
                var0 = {};
                var0.suggestion = var1;
                var0.source = var4;
                var4 = true;
                var0.fetched = var4;
                var3.registration = var0;
                var4 = null;
                var5 = var4 == var1;
                var0 = undefined;
                var3 = undefined;
                if (var5) {
                    _fun80800_ip = 69;
                    continue _fun80800
                }
            case 64:
                var3 = var1.username;
            case 69:
                if (!(var4 != var3)) {
                    _fun80800_ip = 108;
                    continue _fun80800
                }
            case 73:
                var2 = _closure1_slot8;
                var4 = var2.validations;
                var3 = var4.set;
                var2 = var1.username;
                var1 = {};
                var5 = false;
                var1.taken = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 108:
                return var0;
        }
    };
    var1.POMELO_REGISTRATION_SUGGESTIONS_SUCCESS = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var6](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/PomeloStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1386, 667, 566, 806, 2]);