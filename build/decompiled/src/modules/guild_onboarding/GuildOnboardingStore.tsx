// modules/guild_onboarding/GuildOnboardingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = function() {
        _fun43307: for (var _fun43307_ip = 0;;) switch (_fun43307_ip) {
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
                _fun43307_ip = 74;
                continue _fun43307;
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
    var1 = function arg0() {
        _fun43310: for (var _fun43310_ip = 0;;) switch (_fun43310_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun43310_ip = 57;
                    continue _fun43310
                }
            case 12:
                var2 = _closure1_slot7;
                var4 = var2.STARTED;
                var2 = new Array(2);
                var2[0] = var4;
                var1 = _closure1_slot7;
                var1 = var1.READY;
                var2[1] = var1;
                var1 = var2.includes;
                var0 = var1.bind(var2)(var3);
            case 57:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = global;
    var9 = var0.Object;
    var4 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.ME;
    var _closure1_slot5 = var4;
    var3 = var3.FAVORITES;
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'started';
    var3.STARTED = var4;
    var4 = 'ready';
    var3.READY = var4;
    var4 = 'completed';
    var3.COMPLETED = var4;
    var4 = 'not_applicable';
    var3.NOT_APPLICABLE = var4;
    var _closure1_slot7 = var3;
    var4 = {};
    var _closure1_slot8 = var4;
    var4 = {};
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.Store;
    var4 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun43312: for (var _fun43312_ip = 0;;) switch (_fun43312_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun43312_ip = 69;
                        continue _fun43312
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun43312_ip = 105;
                    continue _fun43312;
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
        var0 = 'shouldShowOnboarding';
        var4.key = var0;
        var0 = function arg0() {
            _fun43313: for (var _fun43313_ip = 0;;) switch (_fun43313_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot5;
                    var0 = var2 !== var0;
                    if (!var0) {
                        _fun43313_ip = 25;
                        continue _fun43313
                    }
                case 17:
                    var3 = _closure1_slot6;
                    var0 = var2 !== var3;
                case 25:
                    if (!var0) {
                        _fun43313_ip = 53;
                        continue _fun43313
                    }
                case 28:
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot8;
                    var2 = var1[var2];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = !var1;
                    var0 = !var1;
                case 53:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getOnboardingStatus';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot8;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'resetOnboardingStatus';
        var4.key = var6;
        var6 = function arg0() {
            var2 = arg0;
            var3 = _closure1_slot8;
            var1 = _closure1_slot7;
            var1 = var1.STARTED;
            var3[var2] = var1;
            var1 = _closure1_slot9;
            var0 = 'cover';
            var1[var2] = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCurrentOnboardingStep';
        var4.key = var6;
        var5 = function arg0() {
            _fun43316: for (var _fun43316_ip = 0;;) switch (_fun43316_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 'cover';
                    if (!var2) {
                        _fun43316_ip = 30;
                        continue _fun43316
                    }
                case 27:
                    var0 = var1;
                case 30:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 'GuildOnboardingStore';
    var9.displayName = var4;
    var4 = 7;
    var4 = var7[var4];
    var13 = var8.bind(var0)(var4);
    var4 = {};
    var10 = function() {
        var0 = {};
        _closure1_slot8 = var0;
        var0 = {};
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var4.LOGOUT = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var3 = _closure1_slot8;
        var2 = var0.id;
        var2 = delete var3[var2];
        var1 = _closure1_slot9;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var4.GUILD_DELETE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot8;
        var0 = _closure1_slot7;
        var0 = var0.STARTED;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var4.GUILD_ONBOARDING_START = var10;
    var10 = function arg0() {
        _fun43320: for (var _fun43320_ip = 0;;) switch (_fun43320_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var0 = var0.enabled;
                var1 = _closure1_slot8;
                var4 = var1[var2];
                var1 = _closure1_slot7;
                var1 = var1.STARTED;
                if (!(var4 === var1)) {
                    _fun43320_ip = 71;
                    continue _fun43320
                }
            case 38:
                var1 = _closure1_slot8;
                var3 = _closure1_slot7;
                if (var0) {
                    _fun43320_ip = 57;
                    continue _fun43320
                }
            case 49:
                var0 = var3.NOT_APPLICABLE;
                _fun43320_ip = 63;
                continue _fun43320;
            case 57:
                var0 = var3.READY;
            case 63:
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            case 71:
                var0 = false;
                return var0;
        }
    };
    var4.GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot8;
        var0 = _closure1_slot7;
        var0 = var0.NOT_APPLICABLE;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var4.GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot8;
        var0 = _closure1_slot7;
        var0 = var0.COMPLETED;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var4.GUILD_ONBOARDING_COMPLETE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = var0.step;
        var0 = _closure1_slot9;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var4.GUILD_ONBOARDING_SET_STEP = var10;
    var5 = function() {
        var0 = {};
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var4.CONNECTION_OPEN = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_onboarding/GuildOnboardingStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.GuildOnboardingStatus = var3;
    var2.isOnboarding = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 566, 806, 2]);