// modules/friend_suggestions/FriendSuggestionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun72710: for (var _fun72710_ip = 0;;) switch (_fun72710_ip) {
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
                _fun72710_ip = 76;
                continue _fun72710;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var0 = function arg0() {
        _fun72713: for (var _fun72713_ip = 0;;) switch (_fun72713_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.contact_names;
                var6 = null;
                if (!(var6 != var0)) {
                    _fun72713_ip = 33;
                    continue _fun72713
                }
            case 15:
                var0 = var2.contact_names;
                var0 = var0.length;
                var5 = 2;
                if (!(!(var0 >= var5))) {
                    _fun72713_ip = 39;
                    continue _fun72713
                }
            case 33:
                var1 = new Array(0);
                _fun72713_ip = 58;
                continue _fun72713;
            case 39:
                var4 = var2.contact_names;
                var3 = var4.slice;
                var0 = 0;
                var1 = var3.bind(var4)(var0, var5);
            case 58:
                var0 = {};
                var3 = var2.suggested_user;
                var3 = var3.id;
                var0.key = var3;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 7;
                var5 = var5[var4];
                var4 = undefined;
                var8 = var7.bind(var4)(var5);
                var7 = var8.first;
                var5 = var2.reasons;
                var5 = var7.bind(var8)(var5);
                var6 = var6 == var5;
                if (var6) {
                    _fun72713_ip = 129;
                    continue _fun72713
                }
            case 124:
                var4 = var5.name;
            case 129:
                var0.name = var4;
                var5 = _closure1_slot7;
                var10 = var2.suggested_user;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var4;
                var3 = new var11[var5](var10, var9);
                var3 = var3 instanceof Object ? var3 : var4;
                var0.user = var3;
                var2 = var2.mutual_friends_count;
                var0.mutualFriendsCount = var2;
                var0.contactNames = var1;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.chain;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot14;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.keyBy;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.key;
            return var0;
        };
        var1 = var1.bind(var2)(var0);
        var0 = var1.value;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot15 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = {};
    var _closure1_slot9 = var7;
    var _closure1_slot10 = var3;
    var3 = false;
    var _closure1_slot11 = var3;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun72718: for (var _fun72718_ip = 0;;) switch (_fun72718_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun72718_ip = 69;
                        continue _fun72718
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun72718_ip = 105;
                    continue _fun72718;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSuggestionCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSuggestions';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.entries;
            var0 = _closure1_slot9;
            var2 = var1.bind(var2)(var0);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun72722: for (var _fun72722_ip = 0;;) switch (_fun72722_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var0 = var3().value;
                        var0 = var1;
                        var5 = undefined;
                        var2 = var0 === var5;
                        var0 = undefined;
                        if (var2) {
                            _fun72722_ip = 49;
                            continue _fun72722
                        }
                    case 24:
                        var4 = var3().value;
                        var3 = var1;
                        var3 = var3 === var5;
                        var0 = undefined;
                        var2 = var3;
                        if (var3) {
                            _fun72722_ip = 49;
                            continue _fun72722
                        }
                    case 43:
                        var0 = var4;
                        var2 = var3;
                    case 49:
                        if (var2) {
                            _fun72722_ip = 55;
                            continue _fun72722
                        }
                    case 52:
                        var1.return();
                    case 55:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSuggestion';
        var4.key = var6;
        var5 = function arg0() {
            var1 = _closure1_slot9;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'FriendSuggestionStore';
    var7.displayName = var3;
    var3 = 11;
    var3 = var5[var3];
    var11 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function arg0() {
        _fun72724: for (var _fun72724_ip = 0;;) switch (_fun72724_ip) {
            case 0:
                var1 = {};
                _closure1_slot9 = var1;
                var1 = arg0;
                var2 = var1.friendSuggestionCount;
                _closure1_slot10 = var2;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun72724_ip = 56;
                    continue _fun72724
                }
            case 28:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)();
                _fun72724_ip = 121;
                continue _fun72724;
            case 56:
                var1 = true;
                _closure1_slot12 = var1;
                var3 = _closure1_slot11;
                var2 = !var3;
                if (var3) {
                    _fun72724_ip = 76;
                    continue _fun72724
                }
            case 72:
                var2 = _closure1_slot12;
            case 76:
                if (!var2) {
                    _fun72724_ip = 121;
                    continue _fun72724
                }
            case 79:
                _closure1_slot11 = var1;
                var1 = false;
                _closure1_slot12 = var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.fetch;
                var0 = var0.bind(var1)();
            case 121:
                var0 = undefined;
                return var0;
        }
    };
    var3.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun72725: for (var _fun72725_ip = 0;;) switch (_fun72725_ip) {
            case 0:
                var3 = _closure1_slot14;
                var0 = arg0;
                var1 = var0.suggestion;
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var3 = _closure1_slot9;
                var1 = var4.key;
                var3 = var3[var1];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun72725_ip = 82;
                    continue _fun72725
                }
            case 42:
                var1 = _closure1_slot10;
                var1 = var1 + 1;
                _closure1_slot10 = var1;
                var1 = {};
                var5 = _closure1_slot9;
                var6 = var1;
                var3 = copyDataProperties(var6, var5);
                var3 = var4.key;
                var1[var3] = var4;
                _closure1_slot9 = var1;
                return var0;
            case 82:
                var0 = false;
                return var0;
        }
    };
    var3.FRIEND_SUGGESTION_CREATE = var8;
    var8 = function arg0() {
        var0 = global;
        var4 = var0.Math;
        var3 = var4.max;
        var1 = _closure1_slot10;
        var2 = var1 - 1;
        _closure1_slot10 = var2;
        var1 = 0;
        var1 = var3.bind(var4)(var1, var2);
        _closure1_slot10 = var1;
        var1 = _closure1_slot9;
        var0 = arg0;
        var0 = var0.suggestedUserId;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var3.FRIEND_SUGGESTION_DELETE = var8;
    var8 = function arg0() {
        var0 = false;
        _closure1_slot11 = var0;
        var3 = _closure1_slot15;
        var0 = arg0;
        var1 = var0.suggestions;
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        _closure1_slot9 = var1;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 7;
        var1 = var4[var1];
        var4 = var3.bind(var0)(var1);
        var3 = var4.keys;
        var1 = _closure1_slot9;
        var1 = var3.bind(var4)(var1);
        var1 = var1.length;
        _closure1_slot10 = var1;
        return var0;
    };
    var3.LOAD_FRIEND_SUGGESTIONS_SUCCESS = var8;
    var4 = function() {
        var0 = false;
        _closure1_slot11 = var0;
        var0 = {};
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var3.LOAD_FRIEND_SUGGESTIONS_FAILURE = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var12 = var4;
    var10 = var3;
    var3 = new var12[var7](var11, var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 12;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/friend_suggestions/FriendSuggestionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.transformFriendSuggestions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1628, 1621, 22, 9097, 9098, 566, 806, 2]);