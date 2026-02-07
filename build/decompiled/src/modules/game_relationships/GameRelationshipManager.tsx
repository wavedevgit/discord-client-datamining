// modules/game_relationships/GameRelationshipManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun99148: for (var _fun99148_ip = 0;;) switch (_fun99148_ip) {
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
                _fun99148_ip = 76;
                continue _fun99148;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RelationshipTypes;
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun99152: for (var _fun99152_ip = 0;;) switch (_fun99152_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot5;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun99152_ip = 84;
                        continue _fun99152
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun99152_ip = 118;
                    continue _fun99152;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot7;
                        var1 = var3.getGameRelationships;
                        var4 = var1.bind(var3)();
                        var1 = global;
                        var3 = var1.Set;
                        var5 = var3.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var3
                            }
                        });
                        var7 = var5;
                        var3 = new var7[var3](var6);
                        var5 = var3 instanceof Object ? var3 : var5;
                        var _closure4_slot0 = var5;
                        var3 = var4.values;
                        var4 = var3.bind(var4)();
                        var3 = var4.forEach;
                        var2 = function(arg0) { // Environment: var2
                            _fun99154: for (var _fun99154_ip = 0;;) switch (_fun99154_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.type;
                                    var1 = _closure1_slot8;
                                    var1 = var1.PENDING_INCOMING;
                                    if (!(var2 === var1)) {
                                        _fun99154_ip = 47;
                                        continue _fun99154
                                    }
                                case 25:
                                    var2 = _closure4_slot0;
                                    var1 = var2.add;
                                    var0 = var0.applicationId;
                                    var0 = var1.bind(var2)(var0);
                                case 47:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 7;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.fetchApplications;
                        var4 = var1.Array;
                        var1 = var4.from;
                        var1 = var1.bind(var4)(var5);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handlePostConnectionOpen = var1;
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
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.subscribe;
            var1 = this;
            var2 = var1.handlePostConnectionOpen;
            var1 = 'POST_CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.unsubscribe;
            var1 = this;
            var2 = var1.handlePostConnectionOpen;
            var1 = 'POST_CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'destroy';
        var4.key = var6;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.unsubscribe;
            var1 = this;
            var2 = var1.handlePostConnectionOpen;
            var1 = 'POST_CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_relationships/GameRelationshipManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 11411, 660, 5396, 806, 4017, 2]);