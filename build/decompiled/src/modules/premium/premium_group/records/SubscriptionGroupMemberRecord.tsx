// modules/premium/premium_group/records/SubscriptionGroupMemberRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun59349: for (var _fun59349_ip = 0;;) switch (_fun59349_ip) {
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
                _fun59349_ip = 74;
                continue _fun59349;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var8 = 1;
    var1 = var5[var8];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var7 = 2;
    var1 = var5[var7];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var4 = var6.bind(var0)(var1);
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = {};
    var1.PRIMARY = var8;
    var6 = 'PRIMARY';
    var1[var8] = var6;
    var1.MEMBER = var7;
    var6 = 'MEMBER';
    var1[var7] = var6;
    var _closure1_slot6 = var1;
    var3 = function(arg0) { // Environment: var3
        var4 = function arg0() {
            _fun59353: for (var _fun59353_ip = 0;;) switch (_fun59353_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var0 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var0 = _closure1_slot3;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun59353_ip = 65;
                        continue _fun59353
                    }
                case 52:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var4);
                    _fun59353_ip = 103;
                    continue _fun59353;
                case 65:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var4)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 103:
                    var0 = var3.bind(var4)(var5, var0);
                    var4 = _closure1_slot5;
                    var13 = var1.user;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.user = var2;
                    var2 = var1.member_type;
                    var0.member_type = var2;
                    var1 = var1.accepted_at;
                    var0.accepted_at = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'isPrimary';
        var5.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.member_type;
            var0 = _closure1_slot6;
            var0 = var0.PRIMARY;
            var0 = var1 === var0;
            return var0;
        };
        var5.value = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var6 = 'isMember';
        var5.key = var6;
        var6 = function() {
            _fun59355: for (var _fun59355_ip = 0;;) switch (_fun59355_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.member_type;
                    var0 = _closure1_slot6;
                    var0 = var0.MEMBER;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun59355_ip = 41;
                        continue _fun59355
                    }
                case 29:
                    var2 = var1.accepted_at;
                    var1 = null;
                    var0 = var1 != var2;
                case 41:
                    return var0;
            }
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'isInvited';
        var5.key = var6;
        var6 = function() {
            _fun59356: for (var _fun59356_ip = 0;;) switch (_fun59356_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.member_type;
                    var0 = _closure1_slot6;
                    var0 = var0.MEMBER;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun59356_ip = 41;
                        continue _fun59356
                    }
                case 29:
                    var2 = var1.accepted_at;
                    var1 = null;
                    var0 = var1 == var2;
                case 41:
                    return var0;
            }
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0() {
            var2 = _closure2_slot0;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = arg0;
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/records/SubscriptionGroupMemberRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.SubscriptionMemberTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 1620, 2]);