// lib/guild/subscribeGuildMembers.tsx
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
        _fun62001: for (var _fun62001_ip = 0;;) switch (_fun62001_ip) {
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
                _fun62001_ip = 74;
                continue _fun62001;
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
    var0 = ['forwardedRef'];
    var _closure1_slot3 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = false;
    var _closure1_slot12 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/guild/subscribeGuildMembers.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun62005: for (var _fun62005_ip = 0;;) switch (_fun62005_ip) {
                case 0:
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var1 = var3.displayName;
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun62005_ip = 25;
                        continue _fun62005
                    }
                case 20:
                    var1 = var3.name;
                case 25:
                    var2 = var2 != var1;
                    var5 = 'Component';
                    if (!var2) {
                        _fun62005_ip = 39;
                        continue _fun62005
                    }
                case 36:
                    var5 = var1;
                case 39:
                    var1 = global;
                    var2 = var1.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'SubscribeGuildMembersContainer(';
                    var4 = ')';
                    var3 = var3.bind(var2)(var5, var4);
                    var5 = _closure1_slot10;
                    var7 = var5.Component;
                    var6 = function(arg0) { // Environment: var0
                        var3 = function arg0() {
                            _fun62007: for (var _fun62007_ip = 0;;) switch (_fun62007_ip) {
                                case 0:
                                    var3 = arg0;
                                    var5 = this;
                                    var0 = _closure1_slot5;
                                    var1 = _closure4_slot0;
                                    var4 = undefined;
                                    var0 = var0.bind(var4)(var5, var1);
                                    var10 = new Array(1);
                                    var10[0] = var3;
                                    var0 = _closure1_slot8;
                                    var9 = var0.bind(var4)(var1);
                                    var1 = _closure1_slot7;
                                    var0 = _closure1_slot13;
                                    var0 = var0.bind(var4)();
                                    if (var0) {
                                        _fun62007_ip = 73;
                                        continue _fun62007
                                    }
                                case 60:
                                    var0 = var9.apply;
                                    var0 = var0.bind(var9)(var5, var10);
                                    _fun62007_ip = 107;
                                    continue _fun62007;
                                case 73:
                                    var6 = global;
                                    var8 = var6.Reflect;
                                    var7 = var8.construct;
                                    var6 = _closure1_slot8;
                                    var6 = var6.bind(var4)(var5);
                                    var6 = var6.constructor;
                                    var0 = var7.bind(var8)(var9, var10, var6);
                                case 107:
                                    var0 = var1.bind(var4)(var5, var0);
                                    var1 = _closure2_slot0;
                                    var1 = var1.bind(var4)(var3);
                                    var3 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 8;
                                    var2 = var5[var2];
                                    var4 = var3.bind(var4)(var2);
                                    var3 = var4.forEach;
                                    var2 = function(arg0, arg1) { // Environment: var2
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 9;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.subscribeMembers;
                                        var1 = arg1;
                                        var0 = arg0;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var2 = var3.bind(var4)(var1, var2);
                                    var0._subscriptions = var1;
                                    return var0;
                            }
                        };
                        var _closure4_slot0 = var3;
                        var4 = _closure1_slot9;
                        var2 = undefined;
                        var1 = arg0;
                        var1 = var4.bind(var2)(var3, var1);
                        var1 = _closure1_slot6;
                        var4 = {};
                        var0 = 'componentDidUpdate';
                        var4.key = var0;
                        var0 = function arg0() {
                            _fun62009: for (var _fun62009_ip = 0;;) switch (_fun62009_ip) {
                                case 0:
                                    var2 = this;
                                    var5 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 10;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var6 = var5.bind(var0)(var1);
                                    var5 = var2.props;
                                    var1 = arg0;
                                    var1 = var6.bind(var0)(var5, var1);
                                    if (var1) {
                                        _fun62009_ip = 217;
                                        continue _fun62009
                                    }
                                case 50:
                                    var5 = _closure2_slot0;
                                    var1 = var2.props;
                                    var1 = var5.bind(var0)(var1);
                                    var5 = var2._subscriptions;
                                    var6 = null;
                                    var5 = var6 != var5;
                                    if (!var5) {
                                        _fun62009_ip = 120;
                                        continue _fun62009
                                    }
                                case 82:
                                    var8 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var7 = 8;
                                    var7 = var9[var7];
                                    var9 = var8.bind(var0)(var7);
                                    var8 = var9.isEqual;
                                    var7 = var2._subscriptions;
                                    var5 = var8.bind(var9)(var7, var1);
                                case 120:
                                    if (var5) {
                                        _fun62009_ip = 217;
                                        continue _fun62009
                                    }
                                case 123:
                                    var5 = var2._subscriptions;
                                    if (!(var6 != var5)) {
                                        _fun62009_ip = 175;
                                        continue _fun62009
                                    }
                                case 133:
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var5 = 8;
                                    var5 = var7[var5];
                                    var8 = var6.bind(var0)(var5);
                                    var7 = var8.forEach;
                                    var6 = var2._subscriptions;
                                    var5 = function(arg0, arg1) { // Environment: var3
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 9;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.unsubscribeMembers;
                                        var1 = arg1;
                                        var0 = arg0;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var5 = var7.bind(var8)(var6, var5);
                                case 175:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 8;
                                    var4 = var6[var4];
                                    var5 = var5.bind(var0)(var4);
                                    var4 = var5.forEach;
                                    var3 = function(arg0, arg1) { // Environment: var3
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 9;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.subscribeMembers;
                                        var1 = arg1;
                                        var0 = arg0;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var3 = var4.bind(var5)(var1, var3);
                                    var2._subscriptions = var1;
                                case 217:
                                    return var0;
                            }
                        };
                        var4.value = var0;
                        var0 = new Array(3);
                        var0[0] = var4;
                        var4 = {};
                        var6 = 'componentWillUnmount';
                        var4.key = var6;
                        var6 = function() {
                            _fun62012: for (var _fun62012_ip = 0;;) switch (_fun62012_ip) {
                                case 0:
                                    var0 = this;
                                    var2 = var0._subscriptions;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun62012_ip = 64;
                                        continue _fun62012
                                    }
                                case 15:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.forEach;
                                    var1 = var0._subscriptions;
                                    var0 = function(arg0, arg1) { // Environment: var0
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 9;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.unsubscribeMembers;
                                        var1 = arg1;
                                        var0 = arg0;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var0 = var2.bind(var3)(var1, var0);
                                case 64:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.value = var6;
                        var0[1] = var4;
                        var4 = {};
                        var6 = 'render';
                        var4.key = var6;
                        var5 = function() {
                            var0 = this;
                            var4 = var0.props;
                            var5 = var4.forwardedRef;
                            var2 = _closure1_slot4;
                            var1 = _closure1_slot3;
                            var3 = undefined;
                            var6 = var2.bind(var3)(var4, var1);
                            var2 = _closure1_slot11;
                            var1 = _closure3_slot0;
                            var0 = {};
                            var0.ref = var5;
                            var7 = var0;
                            var4 = copyDataProperties(var7, var6);
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var4.value = var5;
                        var0[2] = var4;
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    };
                    var2 = undefined;
                    var2 = var6.bind(var2)(var7);
                    var _closure3_slot1 = var2;
                    var2.displayName = var3;
                    var2 = var5.forwardRef;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure1_slot11;
                        var2 = _closure3_slot1;
                        var1 = {};
                        var5 = arg0;
                        var6 = var1;
                        var0 = copyDataProperties(var6, var5);
                        var4 = arg1;
                        var0 = 'forwardedRef';
                        var1[var0] = var4;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0 = var2.bind(var5)(var0);
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'ForwardRef(';
                    var1 = var2.bind(var1)(var3, var4);
                    var0.displayName = var1;
                    return var0;
            }
        };
        return var0;
    };
    var2.default = var3;
    var1 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot10;
        var2 = var3.useEffect;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.forEach;
            var2 = _closure2_slot0;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun62018: for (var _fun62018_ip = 0;;) switch (_fun62018_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = arg1;
                        var2 = _closure1_slot12;
                        var1 = !var2;
                        if (var2) {
                            _fun62018_ip = 31;
                            continue _fun62018
                        }
                    case 19:
                        var5 = var4.length;
                        var2 = 50;
                        var1 = var5 > var2;
                    case 31:
                        if (!var1) {
                            _fun62018_ip = 117;
                            continue _fun62018
                        }
                    case 34:
                        var1 = true;
                        _closure1_slot12 = var1;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.captureMessage;
                        var2 = {};
                        var1 = {};
                        var7 = var4.length;
                        var1.userIdsCount = var7;
                        var1.guildId = var3;
                        var7 = _closure2_slot1;
                        var1.reason = var7;
                        var2.extra = var1;
                        var1 = 'SubscribeGuildMembers called with more than 50 userIds.';
                        var1 = var5.bind(var6)(var1, var2);
                    case 117:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.subscribeMembers;
                        var1 = var1.bind(var2)(var3, var4);
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.forEach;
                var2 = _closure2_slot0;
                var1 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.unsubscribeMembers;
                    var1 = arg1;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useSubscribeGuildMembers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 33, 22, 7766, 628, 1207, 2]);