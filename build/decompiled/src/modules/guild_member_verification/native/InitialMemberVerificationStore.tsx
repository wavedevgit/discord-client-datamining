// modules/guild_member_verification/native/InitialMemberVerificationStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun60534: for (var _fun60534_ip = 0;;) switch (_fun60534_ip) {
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
                _fun60534_ip = 74;
                continue _fun60534;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var12 = var6;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Store;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun60538: for (var _fun60538_ip = 0;;) switch (_fun60538_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun60538_ip = 69;
                        continue _fun60538
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun60538_ip = 105;
                    continue _fun60538;
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
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'getInitialVerificationState';
        var4.key = var5;
        var0 = function arg0() {
            _fun60539: for (var _fun60539_ip = 0;;) switch (_fun60539_ip) {
                case 0:
                    var4 = arg0;
                    var1 = null;
                    var2 = var1 == var4;
                    var0 = null;
                    if (var2) {
                        _fun60539_ip = 46;
                        continue _fun60539
                    }
                case 14:
                    var3 = _closure1_slot7;
                    var2 = var3.get;
                    var2 = var2.bind(var3)(var4);
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun60539_ip = 43;
                        continue _fun60539
                    }
                case 40:
                    var1 = var2;
                case 43:
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var6);
    var3 = 'InitialMemberVerificationStore';
    var7.displayName = var3;
    var3 = 6;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var3 = {};
    var4 = function arg0() {
        _fun60540: for (var _fun60540_ip = 0;;) switch (_fun60540_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = var0.state;
                var4 = _closure1_slot7;
                var1 = var4.has;
                var1 = var1.bind(var4)(var3);
                if (var1) {
                    _fun60540_ip = 48;
                    continue _fun60540
                }
            case 33:
                var1 = _closure1_slot7;
                var0 = var1.set;
                var0 = var0.bind(var1)(var3, var2);
            case 48:
                var0 = undefined;
                return var0;
        }
    };
    var3.SET_INITIAL_MEMBER_VERIFICATION = var4;
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
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/InitialMemberVerificationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SET_INITIAL_MEMBER_VERIFICATION';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.state = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setInitialVerification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);