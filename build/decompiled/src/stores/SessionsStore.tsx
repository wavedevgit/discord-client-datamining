// stores/SessionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun31096: for (var _fun31096_ip = 0;;) switch (_fun31096_ip) {
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
                _fun31096_ip = 74;
                continue _fun31096;
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
    var3 = function arg0() {
        var0 = {};
        _closure1_slot9 = var0;
        var0 = arg0;
        var2 = var0.sessions;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = _closure1_slot9;
            var0 = var2.sessionId;
            var1[var0] = var2;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var4[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var4[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var4[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var4[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var4[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var4[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var8 = var6.Object;
    var7 = var8.freeze;
    var6 = new Array(0);
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var6 = {};
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var6 = var6.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun31102: for (var _fun31102_ip = 0;;) switch (_fun31102_ip) {
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
                        _fun31102_ip = 69;
                        continue _fun31102
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31102_ip = 105;
                    continue _fun31102;
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
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSessions';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSession';
        var4.key = var6;
        var6 = function() {
            _fun31105: for (var _fun31105_ip = 0;;) switch (_fun31105_ip) {
                case 0:
                    var3 = this;
                    var1 = _closure1_slot7;
                    var0 = var1.getSessionId;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    var1 = var0 != var2;
                    if (!var1) {
                        _fun31105_ip = 40;
                        continue _fun31105
                    }
                case 29:
                    var1 = var3.getSessionById;
                    var0 = var1.bind(var3)(var2);
                case 40:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getRemoteActivities';
        var4.key = var6;
        var6 = function() {
            _fun31106: for (var _fun31106_ip = 0;;) switch (_fun31106_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getSessionId;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.find;
                    var2 = _closure1_slot9;
                    var1 = function(arg0) { // Environment: var1
                        _fun31107: for (var _fun31107_ip = 0;;) switch (_fun31107_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.active;
                                if (!var0) {
                                    _fun31107_ip = 29;
                                    continue _fun31107
                                }
                            case 12:
                                var2 = var1.sessionId;
                                var1 = _closure3_slot0;
                                var0 = var2 !== var1;
                            case 29:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun31106_ip = 77;
                        continue _fun31106
                    }
                case 71:
                    var0 = _closure1_slot8;
                    _fun31106_ip = 83;
                    continue _fun31106;
                case 77:
                    var0 = var1.activities;
                case 83:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getHiddenActivities';
        var4.key = var6;
        var6 = function() {
            _fun31108: for (var _fun31108_ip = 0;;) switch (_fun31108_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getSessionId;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.find;
                    var2 = _closure1_slot9;
                    var1 = function(arg0) { // Environment: var1
                        _fun31109: for (var _fun31109_ip = 0;;) switch (_fun31109_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.active;
                                if (!var0) {
                                    _fun31109_ip = 29;
                                    continue _fun31109
                                }
                            case 12:
                                var2 = var1.sessionId;
                                var1 = _closure3_slot0;
                                var0 = var2 !== var1;
                            case 29:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun31108_ip = 81;
                        continue _fun31108
                    }
                case 71:
                    var2 = var1.hiddenActivities;
                    if (!(var3 == var2)) {
                        _fun31108_ip = 87;
                        continue _fun31108
                    }
                case 81:
                    var0 = _closure1_slot8;
                    _fun31108_ip = 93;
                    continue _fun31108;
                case 87:
                    var0 = var1.hiddenActivities;
                case 93:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getSessionById';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot9;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getActiveSession';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.find;
            var1 = _closure1_slot9;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.active;
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getRemoteApplicationActivity';
        var4.key = var6;
        var5 = function arg0() {
            _fun31113: for (var _fun31113_ip = 0;;) switch (_fun31113_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun31113_ip = 147;
                        continue _fun31113
                    }
                case 18:
                    var4 = _closure1_slot7;
                    var2 = var4.getSessionId;
                    var2 = var2.bind(var4)();
                    var _closure3_slot1 = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.find;
                    var4 = _closure1_slot9;
                    var1 = function(arg0) { // Environment: var3
                        _fun31114: for (var _fun31114_ip = 0;;) switch (_fun31114_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.active;
                                if (!var0) {
                                    _fun31114_ip = 29;
                                    continue _fun31114
                                }
                            case 12:
                                var2 = var1.sessionId;
                                var1 = _closure3_slot1;
                                var0 = var2 !== var1;
                            case 29:
                                return var0;
                        }
                    };
                    var4 = var5.bind(var6)(var4, var1);
                    if (!(var0 != var4)) {
                        _fun31113_ip = 145;
                        continue _fun31113
                    }
                case 85:
                    var6 = var4.activities;
                    var5 = var6.find;
                    var1 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var1 = var0.application_id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var5.bind(var6)(var1);
                    if (!(var0 == var1)) {
                        _fun31113_ip = 143;
                        continue _fun31113
                    }
                case 110:
                    var5 = var4.hiddenActivities;
                    var4 = var0 == var5;
                    var2 = undefined;
                    if (var4) {
                        _fun31113_ip = 140;
                        continue _fun31113
                    }
                case 125:
                    var4 = var5.find;
                    var3 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var1 = var0.application_id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var4.bind(var5)(var3);
                case 140:
                    var1 = var2;
                case 143:
                    return var1;
                case 145:
                    return var0;
                case 147:
                    return var0;
            }
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'SessionsStore';
    var6.displayName = var1;
    var1 = 8;
    var1 = var4[var1];
    var12 = var5.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var3;
    var1.SESSIONS_REPLACE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var6](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/SessionsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 22, 566, 806, 2]);