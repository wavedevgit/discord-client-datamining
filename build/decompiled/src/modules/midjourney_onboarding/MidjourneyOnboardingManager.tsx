// modules/midjourney_onboarding/MidjourneyOnboardingManager.tsx
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
        _fun117246: for (var _fun117246_ip = 0;;) switch (_fun117246_ip) {
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
                _fun117246_ip = 76;
                continue _fun117246;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.MIDJOURNEY_GUILD_ID;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot10 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun117250: for (var _fun117250_ip = 0;;) switch (_fun117250_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot4;
                    var1 = _closure2_slot1;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot7;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun117250_ip = 84;
                        continue _fun117250
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun117250_ip = 118;
                    continue _fun117250;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot7;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handleChannelCreate;
                    var1.CHANNEL_CREATE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var6 = 'handleChannelCreate';
        var4.key = var6;
        var6 = _closure1_slot3;
        var5 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun117252: for (var _fun117252_ip = 0;;) switch (_fun117252_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117252_ip = 169;
                            continue _fun117252
                        }
                    case 10:
                        var1 = arg0;
                        var4 = var1.channel;
                        var3 = undefined;
                        SaveGenerator(address = 24);
                    case 22:
                        return var3;
                    case 24:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun117252_ip = 166;
                            continue _fun117252
                        }
                    case 33:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var7 = 8;
                        var2 = var2[var7];
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.isEligibleForMidjourneyRedirect;
                        var2 = var2.bind(var5)(var4);
                        if (!var2) {
                            _fun117252_ip = 160;
                            continue _fun117252
                        }
                    case 70:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var7 = var5.bind(var3)(var2);
                        var5 = var7.hasRedirectedToGuild;
                        var2 = _closure1_slot9;
                        var2 = var5.bind(var7)(var2);
                        SaveGenerator(address = 106);
                    case 104:
                        return var2;
                    case 106:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun117252_ip = 163;
                            continue _fun117252
                        }
                    case 112:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 9;
                        var5 = var8[var5];
                        var5 = var7.bind(var3)(var5);
                        var8 = _closure1_slot10;
                        var7 = var8.CHANNEL;
                        var6 = var4.id;
                        var4 = null;
                        var4 = var7.bind(var8)(var4, var6);
                        var4 = var5.bind(var3)(var4);
                    case 160:
                        return var3;
                    case 163:
                        return var2;
                    case 166:
                        return var1;
                    case 169:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var5 = var6.bind(var2)(var5);
        var _closure2_slot0 = var5;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/midjourney_onboarding/MidjourneyOnboardingManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 12534, 660, 12533, 5617, 4299, 2]);