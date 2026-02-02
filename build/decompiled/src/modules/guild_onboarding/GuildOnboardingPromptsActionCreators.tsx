// modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 10;
        var1 = var5[var1];
        var3 = undefined;
        var7 = var2.bind(var3)(var1);
        var2 = var7.dispatch;
        var1 = {};
        var8 = 'GUILD_ONBOARDING_PROMPTS_FETCH_START';
        var1.type = var8;
        var1.guildId = var6;
        var1 = var2.bind(var7)(var1);
        var2 = _closure1_slot0;
        var1 = 11;
        var1 = var5[var1];
        var1 = var2.bind(var3)(var1);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var5 = _closure1_slot10;
        var4 = var5.GUILD_ONBOARDING;
        var4 = var4.bind(var5)(var6);
        var1.url = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            var1 = arg0;
            var4 = var1.body;
            var2 = _closure1_slot8;
            var3 = undefined;
            var4 = var2.bind(var3)(var4);
            var _closure3_slot0 = var4;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS';
            var1.type = var5;
            var5 = _closure2_slot0;
            var1.guildId = var5;
            var7 = var1;
            var6 = var4;
            var4 = copyDataProperties(var7, var6);
            var2 = var2.bind(var3)(var1);
            var1 = var2.then;
            var0 = function() { // Environment: var0
                var0 = _closure3_slot0;
                var0 = var0.prompts;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE';
            var0.type = var3;
            var3 = _closure2_slot0;
            var0.guildId = var3;
            var0 = var1.bind(var2)(var0);
            var0 = arg0;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun43188: for (var _fun43188_ip = 0;;) switch (_fun43188_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43188_ip = 429;
                            continue _fun43188
                        }
                    case 15:
                        var3 = _closure1_slot4;
                        var1 = var3.getId;
                        var7 = var1.bind(var3)();
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var1 = var5[var1];
                        var5 = undefined;
                        var10 = var3.bind(var5)(var1);
                        var9 = var10.hasFlag;
                        var3 = _closure1_slot5;
                        var1 = var3.getMember;
                        var3 = var1.bind(var3)(var6, var7);
                        var8 = null;
                        var7 = var8 == var3;
                        var1 = undefined;
                        if (var7) {
                            _fun43188_ip = 92;
                            continue _fun43188
                        }
                    case 87:
                        var1 = var3.flags;
                    case 92:
                        var11 = var8 != var1;
                        var3 = 0;
                        var7 = 0;
                        if (!var11) {
                            _fun43188_ip = 106;
                            continue _fun43188
                        }
                    case 103:
                        var7 = var1;
                    case 106:
                        var1 = _closure1_slot12;
                        var1 = var1.COMPLETED_ONBOARDING;
                        var7 = var9.bind(var10)(var7, var1);
                        var9 = _closure1_slot6;
                        var1 = var9.getGuild;
                        var1 = var1.bind(var9)(var6);
                        if (!(var8 != var1)) {
                            _fun43188_ip = 408;
                            continue _fun43188
                        }
                    case 143:
                        var9 = var1.features;
                        var8 = var9.has;
                        var1 = _closure1_slot11;
                        var1 = var1.GUILD_ONBOARDING;
                        var1 = var8.bind(var9)(var1);
                        if (!var1) {
                            _fun43188_ip = 408;
                            continue _fun43188
                        }
                    case 175:
                        var8 = _closure1_slot7;
                        var1 = var8.shouldFetchPrompts;
                        var1 = var1.bind(var8)(var6);
                        var9 = _closure1_slot7;
                        var8 = var9.getOnboardingPrompts;
                        var8 = var8.bind(var9)(var6);
                        if (var1) {
                            _fun43188_ip = 298;
                            continue _fun43188
                        }
                    case 208:
                        var1 = var8.length;
                        if (!(var1 > var3)) {
                            _fun43188_ip = 298;
                            continue _fun43188
                        }
                    case 217:
                        var3 = var8.every;
                        var1 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var0 = var0.inOnboarding;
                            var0 = !var0;
                            return var0;
                        };
                        var1 = var3.bind(var8)(var1);
                        if (var1) {
                            _fun43188_ip = 268;
                            continue _fun43188
                        }
                    case 236:
                        if (var7) {
                            _fun43188_ip = 248;
                            continue _fun43188
                        }
                    case 239:
                        var1 = _closure1_slot16;
                        var1 = var1.bind(var5)(var6);
                    case 248:
                        var1 = global;
                        var3 = var1.Promise;
                        var1 = var3.resolve;
                        var1 = var1.bind(var3)();
                        _fun43188_ip = 295;
                        continue _fun43188;
                    case 268:
                        var3 = _closure1_slot17;
                        var3 = var3.bind(var5)(var6);
                        var3 = global;
                        var8 = var3.Promise;
                        var3 = var8.resolve;
                        var1 = var3.bind(var8)();
                    case 295:
                        return var1;
                    case 298:
                        var1 = _closure1_slot14;
                        var1 = var1.bind(var5)(var6);
                        SaveGenerator(address = 311);
                    case 309:
                        return var1;
                    case 311:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun43188_ip = 405;
                            continue _fun43188
                        }
                    case 317:
                        var3 = global;
                        var9 = var3.Array;
                        var8 = var9.isArray;
                        var8 = var8.bind(var9)(var1);
                        if (!var8) {
                            _fun43188_ip = 357;
                            continue _fun43188
                        }
                    case 338:
                        var8 = var1.every;
                        var2 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var0 = var0.inOnboarding;
                            var0 = !var0;
                            return var0;
                        };
                        var2 = var8.bind(var1)(var2);
                        if (var2) {
                            _fun43188_ip = 377;
                            continue _fun43188
                        }
                    case 357:
                        var2 = var1;
                        if (var7) {
                            _fun43188_ip = 402;
                            continue _fun43188
                        }
                    case 363:
                        var7 = _closure1_slot16;
                        var7 = var7.bind(var5)(var6);
                        var2 = var1;
                        _fun43188_ip = 402;
                        continue _fun43188;
                    case 377:
                        var4 = _closure1_slot17;
                        var4 = var4.bind(var5)(var6);
                        var4 = var3.Promise;
                        var3 = var4.resolve;
                        var2 = var3.bind(var4)();
                    case 402:
                        return var2;
                    case 405:
                        return var1;
                    case 408:
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.resolve;
                        var1 = var1.bind(var2)();
                        return var1;
                    case 429:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_ONBOARDING_START';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot16 = var1;
    var0 = function arg0() {
        var10 = arg0;
        var2 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 8;
        var3 = var11[var1];
        var0 = undefined;
        var13 = var2.bind(var0)(var3);
        var12 = var13.track;
        var3 = _closure1_slot9;
        var4 = var3.GUILD_ONBOARDING_STEP_VIEWED;
        var3 = {};
        var9 = _closure1_slot0;
        var8 = 9;
        var6 = var11[var8];
        var7 = var9.bind(var0)(var6);
        var6 = var7.collectGuildAnalyticsMetadata;
        var15 = var6.bind(var7)(var10);
        var16 = var3;
        var6 = copyDataProperties(var16, var15);
        var6 = _closure1_slot13;
        var7 = 'step';
        var3[var7] = var6;
        var6 = true;
        var14 = 'required';
        var3[var14] = var6;
        var3 = var12.bind(var13)(var4, var3);
        var1 = var11[var1];
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot9;
        var2 = var1.GUILD_ONBOARDING_STEP_COMPLETED;
        var1 = {};
        var8 = var11[var8];
        var9 = var9.bind(var0)(var8);
        var8 = var9.collectGuildAnalyticsMetadata;
        var15 = var8.bind(var9)(var10);
        var16 = var1;
        var8 = copyDataProperties(var16, var15);
        var5 = _closure1_slot13;
        var1[var7] = var5;
        var7 = false;
        var5 = 'skipped';
        var1[var5] = var7;
        var5 = 'is_final_step';
        var1[var5] = var6;
        var5 = 'in_onboarding';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.serverApiResponseToClientState;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot9 = var8;
    var8 = var5.Endpoints;
    var _closure1_slot10 = var8;
    var5 = var5.GuildFeatures;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.GuildMemberFlags;
    var _closure1_slot12 = var5;
    var5 = -2;
    var _closure1_slot13 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 8;
        var1 = var7[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot9;
        var2 = var1.GUILD_ONBOARDING_LOADED;
        var1 = {};
        var6 = _closure1_slot0;
        var5 = 9;
        var5 = var7[var5];
        var7 = var6.bind(var0)(var5);
        var6 = var7.collectGuildAnalyticsMetadata;
        var5 = arg0;
        var8 = var6.bind(var7)(var5);
        var9 = var1;
        var5 = copyDataProperties(var9, var8);
        var6 = false;
        var5 = 'has_new_prompts';
        var1[var5] = var6;
        var6 = 0;
        var5 = 'number_of_prompts';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.loadOnboardingPrompts = var5;
    var2.fetchOnboardingPrompts = var4;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.maybeFetchOnboardingPrompts = var3;
    var2.startOnboarding = var1;
    var1 = -3;
    var2.CONNECTIONS_STEP = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 1672, 1410, 4653, 4549, 660, 3040, 795, 4268, 806, 507, 1384, 2]);