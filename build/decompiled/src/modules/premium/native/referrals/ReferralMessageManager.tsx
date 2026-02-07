// modules/premium/native/referrals/ReferralMessageManager.tsx
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
        _fun118211: for (var _fun118211_ip = 0;;) switch (_fun118211_ip) {
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
                _fun118211_ip = 76;
                continue _fun118211;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var0 = function arg0() {
        _fun118214: for (var _fun118214_ip = 0;;) switch (_fun118214_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.type;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var5.bind(var0)(var2);
                var2 = var2.MessageTypes;
                var2 = var2.PREMIUM_REFERRAL;
                if (!(var4 === var2)) {
                    _fun118214_ip = 212;
                    continue _fun118214
                }
            case 52:
                var2 = var3.content;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun118214_ip = 212;
                    continue _fun118214
                }
            case 66:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var7 = 8;
                var2 = var2[var7];
                var6 = var5.bind(var0)(var2);
                var5 = var6.isProbablyAValidSnowflake;
                var2 = var3.content;
                var2 = var5.bind(var6)(var2);
                if (!var2) {
                    _fun118214_ip = 212;
                    continue _fun118214
                }
            case 105:
                var5 = _closure1_slot8;
                var2 = var5.getPremiumTypeSubscription;
                var2 = var2.bind(var5)();
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var6 = var6.bind(var0)(var5);
                var5 = var6.extractTimestamp;
                var3 = var3.content;
                var6 = var5.bind(var6)(var3);
                var5 = _closure1_slot9;
                var3 = var5.shouldFetchReferralOffer;
                var3 = var3.bind(var5)(var6);
                var2 = var4 == var2;
                if (!var2) {
                    _fun118214_ip = 179;
                    continue _fun118214
                }
            case 176:
                var2 = var3;
            case 179:
                if (!var2) {
                    _fun118214_ip = 212;
                    continue _fun118214
                }
            case 182:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.fetchUserTrialOffer;
                var1 = var1.bind(var2)();
            case 212:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function() {
            _fun118216: for (var _fun118216_ip = 0;;) switch (_fun118216_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun118216_ip = 62;
                        continue _fun118216
                    }
                case 49:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun118216_ip = 100;
                    continue _fun118216;
                case 62:
                    var5 = global;
                    var8 = var5.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 100:
                    var0 = var2.bind(var3)(var4, var0);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure1_slot11;
                    var1 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/referrals/ReferralMessageManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 3119, 6711, 666, 21, 7294, 14649, 4299, 2]);