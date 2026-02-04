// modules/guild_onboarding/doGuildOnboarding.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun43294: for (var _fun43294_ip = 0;;) switch (_fun43294_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43294_ip = 317;
                            continue _fun43294
                        }
                    case 10:
                        var1 = arg0;
                        var8 = var1.guildId;
                        var6 = undefined;
                        SaveGenerator(address = 24);
                    case 22:
                        return var6;
                    case 24:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun43294_ip = 314;
                            continue _fun43294
                        }
                    case 33:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 7;
                        var2 = var4[var2];
                        var7 = var3.bind(var6)(var2);
                        var2 = var7.hideActionSheet;
                        var2 = var2.bind(var7)();
                        var2 = 8;
                        var2 = var4[var2];
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 9;
                        var2 = var4[var2];
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.waitForGuild;
                        var2 = var2.bind(var3)(var8);
                        SaveGenerator(address = 119);
                    case 117:
                        return var2;
                    case 119:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun43294_ip = 311;
                            continue _fun43294
                        }
                    case 128:
                        var7 = var2.features;
                        var4 = var7.has;
                        var3 = _closure1_slot8;
                        var3 = var3.GUILD_ONBOARDING;
                        var3 = var4.bind(var7)(var3);
                        if (!var3) {
                            _fun43294_ip = 183;
                            continue _fun43294
                        }
                    case 157:
                        var9 = var2.features;
                        var7 = var9.has;
                        var4 = _closure1_slot8;
                        var4 = var4.COMMUNITY;
                        var3 = var7.bind(var9)(var4);
                    case 183:
                        if (!var3) {
                            _fun43294_ip = 299;
                            continue _fun43294
                        }
                    case 186:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 10;
                        var3 = var7[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.maybeFetchOnboardingPrompts;
                        var3 = var3.bind(var4)(var8);
                        SaveGenerator(address = 221);
                    case 219:
                        return var3;
                    case 221:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun43294_ip = 308;
                            continue _fun43294
                        }
                    case 227:
                        var7 = _closure1_slot6;
                        var4 = var7.shouldShowOnboarding;
                        var4 = var4.bind(var7)(var8);
                        if (!var4) {
                            _fun43294_ip = 299;
                            continue _fun43294
                        }
                    case 245:
                        var7 = _closure1_slot12;
                        var4 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot14;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var4 = var4.bind(var6)(var2);
                        SaveGenerator(address = 265);
                    case 263:
                        return var4;
                    case 265:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 9);
                        if (var9) {
                            _fun43294_ip = 305;
                            continue _fun43294
                        }
                    case 271:
                        var7[var8] = var4;
                        var7 = _closure1_slot15;
                        var5 = var2.id;
                        var5 = var7.bind(var6)(var5);
                        SaveGenerator(address = 293);
                    case 291:
                        return var5;
                    case 293:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun43294_ip = 302;
                            continue _fun43294
                        }
                    case 299:
                        return var6;
                    case 302:
                        return var5;
                    case 305:
                        return var4;
                    case 308:
                        return var3;
                    case 311:
                        return var2;
                    case 314:
                        return var1;
                    case 317:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun43298: for (var _fun43298_ip = 0;;) switch (_fun43298_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43298_ip = 265;
                            continue _fun43298
                        }
                    case 13:
                        var2 = undefined;
                        var4 = undefined;
                        var5 = undefined;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 11;
                        var3 = var10[var3];
                        var7 = var9.bind(var2)(var3);
                        var6 = var7.getGuildIconSource;
                        var3 = {};
                        var11 = var8.id;
                        var3.id = var11;
                        var8 = var8.icon;
                        var3.icon = var8;
                        var8 = false;
                        var3.canAnimate = var8;
                        var8 = 12;
                        var8 = var10[var8];
                        var8 = var9.bind(var2)(var8);
                        var9 = var8.bind(var2)();
                        var8 = 96;
                        var8 = var8 / var9;
                        var3.size = var8;
                        var4 = var6.bind(var7)(var3);
                    case 107: // try_start_0
                        var3 = _closure1_slot4;
                        var7 = var3.ImageManager;
                        var6 = var7.getAvatarBase64;
                        var3 = var4;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 135);
                    case 133:
                        return var3;
                    case 135:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun43298_ip = 249;
                            continue _fun43298
                        }
                    case 141:
                        var5 = var3;
                        var6 = _closure1_slot4;
                        var7 = var6.ImageManager;
                        var6 = var7.getDominantColors;
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address = 169);
                    case 167:
                        return var4;
                    case 169:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun43298_ip = 246;
                            continue _fun43298
                        }
                    case 175:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 13;
                        var6 = var8[var6];
                        var8 = var7.bind(var2)(var6);
                        var6 = _closure1_slot10;
                        var7 = var6.bind(var2)();
                        var9 = var5;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var6 = var5.concat;
                        var5 = 'data:image/png;base64,';
                        var6 = var6.bind(var5)(var9);
                        var5 = 0;
                        var5 = var4[var5];
                        var5 = var8.bind(var2)(var7, var6, var5);
                    case 243: // try_end0
                        return var5;
                    case 246:
                        return var4;
                    case 249:
                        return var3;
                    case 252: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var1 = _closure1_slot10;
                        var1 = var1.bind(var2)();
                        return var1;
                    case 265:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = function arg0() {
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 14;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.waitForOnboardingCompletion;
            var3 = var2.bind(var3)(var4);
            var2 = var3.then;
            var1 = function() { // Environment: var1
                _fun43301: for (var _fun43301_ip = 0;;) switch (_fun43301_ip) {
                    case 0:
                        var3 = _closure1_slot11;
                        var1 = _closure3_slot0;
                        var3 = var3[var1];
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun43301_ip = 30;
                            continue _fun43301
                        }
                    case 24:
                        var1 = undefined;
                        var1 = var3.bind(var1)();
                    case 30:
                        var1 = _closure1_slot11;
                        var3 = _closure3_slot0;
                        var1 = delete var1[var3];
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.finishOnboarding;
                        var1 = var1.bind(var2)(var3);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = function(arg0) { // Environment: var0
            _fun43302: for (var _fun43302_ip = 0;;) switch (_fun43302_ip) {
                case 0:
                    var3 = _closure1_slot11;
                    var0 = _closure2_slot0;
                    var3 = var3[var0];
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun43302_ip = 41;
                        continue _fun43302
                    }
                case 26:
                    var4 = _closure1_slot11;
                    var3 = _closure2_slot0;
                    var0 = arg0;
                    var4[var3] = var0;
                case 41:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 8;
                    var4 = var3[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.pushLazy;
                    var8 = _closure1_slot0;
                    var4 = 17;
                    var4 = var3[var4];
                    var8 = var8.bind(var0)(var4);
                    var4 = 16;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var8.bind(var0)(var4, var3);
                    var3 = {};
                    var9 = _closure2_slot0;
                    var3.guildId = var9;
                    var7 = true;
                    var3.backShouldLeaveGuild = var7;
                    var8 = function() {
                        var0 = undefined;
                        return var0;
                    };
                    var3.onFinish = var8;
                    var8 = _closure1_slot12;
                    var8 = var8[var9];
                    var3.landingAnimation = var8;
                    var3.isFirstOpen = var7;
                    var2 = _closure1_slot7;
                    var3 = var5.bind(var6)(var4, var3, var2);
                    var2 = var3.then;
                    var1 = function() { // Environment: var1
                        _fun43304: for (var _fun43304_ip = 0;;) switch (_fun43304_ip) {
                            case 0:
                                var1 = _closure1_slot5;
                                var0 = var1.getGuildId;
                                var2 = var0.bind(var1)();
                                var1 = _closure2_slot0;
                                if (!(var2 !== var1)) {
                                    _fun43304_ip = 80;
                                    continue _fun43304
                                }
                            case 28:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 18;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.transitionTo;
                                var4 = _closure1_slot9;
                                var3 = var4.CHANNEL;
                                var0 = _closure2_slot0;
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                            case 80:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot15 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GUILD_ONBOARDING_MODAL_KEY;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot8 = var7;
    var4 = var4.Routes;
    var _closure1_slot9 = var4;
    var4 = function() {
        var0 = global;
        var2 = var0.JSON;
        var1 = var2.parse;
        var4 = var0.JSON;
        var3 = var4.stringify;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var5 = var5[var0];
        var0 = undefined;
        var0 = var6.bind(var0)(var5);
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot10 = var4;
    var4 = {};
    var _closure1_slot11 = var4;
    var4 = {};
    var _closure1_slot12 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/doGuildOnboarding.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var4;
    var2.openAndWaitForOnboarding = var3;
    var3 = function arg0() {
        var1 = _closure1_slot11;
        var0 = arg0;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var2.discardOnboardingPromise = var3;
    var1 = function arg0() {
        var1 = _closure1_slot11;
        var0 = arg0;
        var1 = var1[var0];
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.isOnboardingActiveForGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 3213, 4684, 4685, 660, 4686, 3278, 4561, 4679, 4687, 1417, 1586, 4689, 4690, 4691, 4700, 1307, 1220, 2]);