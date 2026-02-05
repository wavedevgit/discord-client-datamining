// modules/game_community_upsell/native/GameCommunityUpsellStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun86456: for (var _fun86456_ip = 0;;) switch (_fun86456_ip) {
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
                _fun86456_ip = 76;
                continue _fun86456;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var6 = global;
    var8 = var6.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {
        'shownGameIds': null,
        'debugMode': false,
        'currentGame': null
    };
    var6 = var6.Set;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var12 = var7;
    var6 = new var12[var6](var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var1.shownGameIds = var6;
    var _closure1_slot5 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun86460: for (var _fun86460_ip = 0;;) switch (_fun86460_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun86460_ip = 69;
                        continue _fun86460
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun86460_ip = 105;
                    continue _fun86460;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun86461: for (var _fun86461_ip = 0;;) switch (_fun86461_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun86461_ip = 83;
                        continue _fun86461
                    }
                case 9:
                    var1 = {};
                    var3 = global;
                    var5 = var3.Set;
                    var6 = var2.shownGameIds;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var1.shownGameIds = var3;
                    var3 = var2.debugMode;
                    var2 = var0 != var3;
                    if (!var2) {
                        _fun86461_ip = 66;
                        continue _fun86461
                    }
                case 63:
                    var2 = var3;
                case 66:
                    var1.debugMode = var2;
                    var1.currentGame = var0;
                    _closure1_slot5 = var1;
                case 83:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = global;
            var4 = var1.Array;
            var3 = var4.from;
            var2 = _closure1_slot5;
            var2 = var2.shownGameIds;
            var2 = var3.bind(var4)(var2);
            var0.shownGameIds = var2;
            var1 = _closure1_slot5;
            var1 = var1.debugMode;
            var0.debugMode = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasShownGame';
        var4.key = var6;
        var6 = function arg0() {
            var0 = _closure1_slot5;
            var2 = var0.shownGameIds;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getShownGameIds';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Set;
            var0 = _closure1_slot5;
            var3 = var0.shownGameIds;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'markGameAsShown';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var0 = global;
            var4 = var0.Set;
            var0 = _closure1_slot5;
            var6 = var0.shownGameIds;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var7 = var3;
            var0 = new var7[var4](var6, var5);
            var4 = var0 instanceof Object ? var0 : var3;
            var3 = var4.add;
            var0 = arg0;
            var0 = var3.bind(var4)(var0);
            var0 = {};
            var5 = _closure1_slot5;
            var6 = var0;
            var3 = copyDataProperties(var6, var5);
            var3 = 'shownGameIds';
            var0[var3] = var4;
            _closure1_slot5 = var0;
            var0 = var1.emitChange;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'resetState';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var2 = {};
            var5 = _closure1_slot5;
            var6 = var2;
            var3 = copyDataProperties(var6, var5);
            var3 = global;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = 'shownGameIds';
            var2[var3] = var4;
            _closure1_slot5 = var2;
            var0 = var1.emitChange;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isDebugMode';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot5;
            var0 = var0.debugMode;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'setDebugMode';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var2 = {};
            var5 = _closure1_slot5;
            var6 = var2;
            var3 = copyDataProperties(var6, var5);
            var4 = arg0;
            var3 = 'debugMode';
            var2[var3] = var4;
            _closure1_slot5 = var2;
            var0 = var1.emitChange;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'setCurrentGame';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var2 = {};
            var5 = _closure1_slot5;
            var6 = var2;
            var3 = copyDataProperties(var6, var5);
            var4 = arg0;
            var3 = 'currentGame';
            var2[var3] = var4;
            _closure1_slot5 = var2;
            var0 = var1.emitChange;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getCurrentGame';
        var4.key = var6;
        var5 = function() {
            _fun86470: for (var _fun86470_ip = 0;;) switch (_fun86470_ip) {
                case 0:
                    var0 = _closure1_slot5;
                    var1 = var0.currentGame;
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun86470_ip = 25;
                        continue _fun86470
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GameCommunityUpsellStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 6;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var3 = function() {
        var1 = {};
        var4 = _closure1_slot5;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var6 = var3;
        var2 = new var6[var2](var5);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = 'shownGameIds';
        var1[var2] = var3;
        var3 = null;
        var2 = 'currentGame';
        var1[var2] = var3;
        _closure1_slot5 = var1;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_community_upsell/native/GameCommunityUpsellStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);