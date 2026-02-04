// lib/guild/GuildMemberSubscriptions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var6 = 1;
    var3 = var5[var6];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.MINUTE;
    var3 = var6 * var3;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = {};
            var2._subscriptions = var4;
            var4 = {};
            var2._unsubscriptions = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 3;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var5 = var4.DelayedCall;
            var8 = _closure1_slot5;
            var3 = var5.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var5
                }
            });
            var7 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.flushUnsubscriptions;
                var0 = var0.bind(var1)();
                return var0;
            };
            var9 = var3;
            var1 = new var9[var5](var8, var7, var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._unsubscribe = var1;
            var1 = arg0;
            var2._onChange = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var1 = {};
            var0._subscriptions = var1;
            var1 = {};
            var0._unsubscriptions = var1;
            var1 = var0._unsubscribe;
            var0 = var1.cancel;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            _fun50647: for (var _fun50647_ip = 0;;) switch (_fun50647_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._subscriptions;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun50647_ip = 24;
                        continue _fun50647
                    }
                case 22:
                    var2 = {};
                case 24:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var0 = var1.keys;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var2 = var0._subscriptions;
            var2 = delete var2[var1];
            var0 = var0._unsubscriptions;
            var0 = delete var0[var1];
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'subscribe';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50649: for (var _fun50649_ip = 0;;) switch (_fun50649_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = var1._subscriptions;
                    var0 = var0[var3];
                    var5 = null;
                    if (!(var5 == var0)) {
                        _fun50649_ip = 27;
                        continue _fun50649
                    }
                case 25:
                    var0 = {};
                case 27:
                    var4 = var0[var2];
                    var6 = var5 != var4;
                    var5 = 0;
                    if (!var6) {
                        _fun50649_ip = 43;
                        continue _fun50649
                    }
                case 40:
                    var5 = var4;
                case 43:
                    var4 = 1;
                    var5 = var5 + var4;
                    var0[var2] = var5;
                    var5 = var1._subscriptions;
                    var5[var3] = var0;
                    var0 = var0[var2];
                    if (!(var4 === var0)) {
                        _fun50649_ip = 94;
                        continue _fun50649
                    }
                case 72:
                    var4 = var1._onChange;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var3);
                    var0 = var4.bind(var1)(var3, var0);
                case 94:
                    var0 = var1.checkForLeaks;
                    var0 = var0.bind(var1)(var3, var2);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'isSubscribed';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50650: for (var _fun50650_ip = 0;;) switch (_fun50650_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = var1._subscriptions;
                    var0 = var0[var3];
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun50650_ip = 46;
                        continue _fun50650
                    }
                case 25:
                    var1 = var1._subscriptions;
                    var3 = var1[var3];
                    var1 = arg1;
                    var1 = var3[var1];
                    var0 = var2 != var1;
                case 46:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'isSubscribedToAnyMember';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'unsubscribe';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50652: for (var _fun50652_ip = 0;;) switch (_fun50652_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var1 = var0.isSubscribed;
                    var1 = var1.bind(var0)(var5, var3);
                    if (!var1) {
                        _fun50652_ip = 106;
                        continue _fun50652
                    }
                case 24:
                    var1 = var0._unsubscriptions;
                    var1 = var1[var5];
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun50652_ip = 42;
                        continue _fun50652
                    }
                case 40:
                    var1 = {};
                case 42:
                    var2 = var1[var3];
                    var6 = var4 != var2;
                    var4 = 0;
                    if (!var6) {
                        _fun50652_ip = 58;
                        continue _fun50652
                    }
                case 55:
                    var4 = var2;
                case 58:
                    var2 = 1;
                    var4 = var4 + var2;
                    var1[var3] = var4;
                    var4 = var0._unsubscriptions;
                    var4[var5] = var1;
                    var1 = var1[var3];
                    if (!(var2 === var1)) {
                        _fun50652_ip = 106;
                        continue _fun50652
                    }
                case 87:
                    var2 = var0._unsubscribe;
                    var1 = var2.delay;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                case 106:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'checkForLeaks';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50653: for (var _fun50653_ip = 0;;) switch (_fun50653_ip) {
                case 0:
                    var5 = arg0;
                    var6 = arg1;
                    var3 = this;
                    var0 = var3._subscriptions;
                    var1 = var0[var5];
                    var4 = null;
                    var2 = var4 == var1;
                    var0 = undefined;
                    var7 = undefined;
                    if (var2) {
                        _fun50653_ip = 36;
                        continue _fun50653
                    }
                case 32:
                    var7 = var1[var6];
                case 36:
                    var8 = var4 != var7;
                    var1 = 0;
                    if (!var8) {
                        _fun50653_ip = 48;
                        continue _fun50653
                    }
                case 45:
                    var1 = var7;
                case 48:
                    var3 = var3._unsubscriptions;
                    var5 = var3[var5];
                    var7 = var4 == var5;
                    var3 = undefined;
                    if (var7) {
                        _fun50653_ip = 71;
                        continue _fun50653
                    }
                case 67:
                    var3 = var5[var6];
                case 71:
                    var4 = var4 != var3;
                    var2 = 0;
                    if (!var4) {
                        _fun50653_ip = 83;
                        continue _fun50653
                    }
                case 80:
                    var2 = var3;
                case 83:
                    var6 = var1 - var2;
                    var3 = 5;
                    if (!(var6 > var3)) {
                        _fun50653_ip = 181;
                        continue _fun50653
                    }
                case 94:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var10 = 'GuildMemberSubscriptions';
                    var11 = var2;
                    var1 = new var11[var3](var10, var9);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var2 = var3.warn;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = 'GuildMemberSubscriptions.subscribe(...): Potential reference leak! (';
                    var1 = ' subscriptions)';
                    var1 = var5.bind(var4)(var6, var1);
                    var1 = var2.bind(var3)(var1);
                case 181:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'flushUnsubscriptions';
        var0.key = var5;
        var4 = function() {
            _fun50654: for (var _fun50654_ip = 0;;) switch (_fun50654_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var6 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var5 = 6;
                    var4 = var0[var5];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var4);
                    var6 = var7.isEmpty;
                    var4 = var2._unsubscriptions;
                    var4 = var6.bind(var7)(var4);
                    if (var4) {
                        _fun50654_ip = 101;
                        continue _fun50654
                    }
                case 54:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.forEach;
                    var3 = var2._unsubscriptions;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun50655: for (var _fun50655_ip = 0;;) switch (_fun50655_ip) {
                            case 0:
                                var4 = arg1;
                                var0 = _closure3_slot0;
                                var0 = var0._subscriptions;
                                var5 = var0[var4];
                                var _closure4_slot0 = var5;
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 6;
                                var8 = var6[var2];
                                var0 = undefined;
                                var10 = var3.bind(var0)(var8);
                                var9 = var10.forEach;
                                var8 = arg0;
                                var7 = function(arg0, arg1) { // Environment: var7
                                    _fun50656: for (var _fun50656_ip = 0;;) switch (_fun50656_ip) {
                                        case 0:
                                            var1 = arg1;
                                            var4 = _closure4_slot0;
                                            var2 = var4[var1];
                                            var3 = null;
                                            var6 = var3 != var2;
                                            var3 = 0;
                                            var5 = 0;
                                            if (!var6) {
                                                _fun50656_ip = 30;
                                                continue _fun50656
                                            }
                                        case 27:
                                            var5 = var2;
                                        case 30:
                                            var2 = arg0;
                                            var2 = var5 - var2;
                                            var4[var1] = var2;
                                            var2 = _closure4_slot0;
                                            var2 = var2[var1];
                                            if (!(var2 <= var3)) {
                                                _fun50656_ip = 61;
                                                continue _fun50656
                                            }
                                        case 53:
                                            var0 = _closure4_slot0;
                                            var0 = delete var0[var1];
                                        case 61:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var7 = var9.bind(var10)(var8, var7);
                                var2 = var6[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.isEmpty;
                                var2 = var2.bind(var3)(var5);
                                if (!var2) {
                                    _fun50655_ip = 107;
                                    continue _fun50655
                                }
                            case 93:
                                var2 = _closure3_slot0;
                                var2 = var2._subscriptions;
                                var2 = delete var2[var4];
                            case 107:
                                var3 = _closure3_slot0;
                                var2 = var3._onChange;
                                var1 = var3.get;
                                var1 = var1.bind(var3)(var4);
                                var1 = var2.bind(var3)(var4, var1);
                                return var0;
                        }
                    };
                    var1 = var4.bind(var5)(var3, var1);
                    var1 = {};
                    var2._unsubscriptions = var1;
                case 101:
                    return var0;
            }
        };
        var0.value = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/guild/GuildMemberSubscriptions.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 667, 3630, 21, 3, 22, 2]);