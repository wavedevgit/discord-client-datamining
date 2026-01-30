// modules/guild_onboarding/GuildOnboardingActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var9 = function(arg0) { // Original name: _updateOnboardingResponses, environment: var3
        _fun43237: for (var _fun43237_ip = 0;;) switch (_fun43237_ip) {
            case 0:
                var10 = arg0;
                var1 = arguments[1];
                var _closure2_slot0 = var10;
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun43237_ip = 20;
                    continue _fun43237
                }
            case 18:
                var1 = false;
            case 20:
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var0;
                var4 = _closure1_slot5;
                var3 = var4.isFullServerPreview;
                var3 = var3.bind(var4)(var10);
                if (var3) {
                    _fun43237_ip = 400;
                    continue _fun43237
                }
            case 56:
                var4 = _closure1_slot9;
                if (var1) {
                    _fun43237_ip = 76;
                    continue _fun43237
                }
            case 63:
                var3 = var4.getOnboardingPrompts;
                var5 = var3.bind(var4)(var10);
                _fun43237_ip = 87;
                continue _fun43237;
            case 76:
                var3 = var4.getOnboardingPromptsForOnboarding;
                var5 = var3.bind(var4)(var10);
            case 87:
                var4 = _closure1_slot9;
                var3 = var4.getOnboardingResponses;
                var3 = var3.bind(var4)(var10);
                _closure2_slot1 = var3;
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var2 = var0.options;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot1;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.flat;
                var11 = var3.bind(var4)();
                var8 = {};
                _closure2_slot2 = var8;
                var7 = {};
                _closure2_slot3 = var7;
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var3 = _closure2_slot2;
                    var2 = var0.id;
                    var1 = global;
                    var4 = var1.Date;
                    var1 = var4.now;
                    var1 = var1.bind(var4)();
                    var3[var2] = var1;
                    var2 = var0.options;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot3;
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = global;
                        var3 = var0.Date;
                        var0 = var3.now;
                        var0 = var0.bind(var3)();
                        var2[var1] = var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.HTTP;
                if (var1) {
                    _fun43237_ip = 293;
                    continue _fun43237
                }
            case 186:
                var3 = var5.put;
                var1 = {};
                var9 = _closure1_slot12;
                var4 = var9.GUILD_ONBOARDING_RESPONSES;
                var4 = var4.bind(var9)(var10);
                var1.url = var4;
                var4 = {};
                var12 = var11.map;
                var9 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var9 = var12.bind(var11)(var9);
                var4.onboarding_responses = var9;
                var4.onboarding_prompts_seen = var8;
                var4.onboarding_responses_seen = var7;
                var1.body = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var4 = var3.bind(var5)(var1);
                var3 = var4.then;
                var1 = function(arg0) { // Environment: var2
                    _fun43246: for (var _fun43246_ip = 0;;) switch (_fun43246_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.body;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun43246_ip = 119;
                                continue _fun43246
                            }
                        case 14:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var4 = 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS';
                            var0.type = var4;
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var4 = var3.body;
                            var4 = var4.onboarding_responses;
                            var0.options = var4;
                            var4 = var3.body;
                            var4 = var4.onboarding_prompts_seen;
                            var0.prompts_seen = var4;
                            var3 = var3.body;
                            var3 = var3.onboarding_responses_seen;
                            var0.options_seen = var3;
                            var0 = var1.bind(var2)(var0);
                        case 119:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var3.bind(var4)(var1);
                var3 = var4.catch;
                var1 = function(arg0) { // Environment: var2
                    var4 = arg0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.captureException;
                    var1 = global;
                    var6 = var1.Error;
                    var9 = _closure2_slot0;
                    var8 = var4.statusCode;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var5 = 'Failed to update onboarding responses for guild ';
                    var1 = ': ';
                    var12 = var7.bind(var5)(var9, var1, var8);
                    var1 = {};
                    var1.cause = var4;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var6
                        }
                    });
                    var13 = var4;
                    var11 = var1;
                    var1 = new var13[var6](var12, var11, var10);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                _fun43237_ip = 398;
                continue _fun43237;
            case 293:
                var4 = var5.post;
                var3 = {};
                var9 = _closure1_slot12;
                var6 = var9.GUILD_ONBOARDING_RESPONSES;
                var6 = var6.bind(var9)(var10);
                var3.url = var6;
                var6 = {};
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var6.onboarding_responses = var9;
                var6.onboarding_prompts_seen = var8;
                var6.onboarding_responses_seen = var7;
                var3.body = var6;
                var6 = true;
                var3.rejectWithError = var6;
                var5 = var4.bind(var5)(var3);
                var4 = var5.then;
                var3 = function(arg0) { // Environment: var2
                    _fun43243: for (var _fun43243_ip = 0;;) switch (_fun43243_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.body;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun43243_ip = 119;
                                continue _fun43243
                            }
                        case 14:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var4 = 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS';
                            var0.type = var4;
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var4 = var3.body;
                            var4 = var4.onboarding_responses;
                            var0.options = var4;
                            var4 = var3.body;
                            var4 = var4.onboarding_prompts_seen;
                            var0.prompts_seen = var4;
                            var3 = var3.body;
                            var3 = var3.onboarding_responses_seen;
                            var0.options_seen = var3;
                            var0 = var1.bind(var2)(var0);
                        case 119:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.captureException;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var2);
            case 398:
                return var1;
            case 400:
                return var0;
        }
    };
    var _closure1_slot15 = var9;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.AnalyticEvents;
    var _closure1_slot10 = var6;
    var6 = var1.AnalyticsPages;
    var _closure1_slot11 = var6;
    var1 = var1.Endpoints;
    var _closure1_slot12 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildMemberFlags;
    var _closure1_slot13 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ReadStateTypes;
    var _closure1_slot14 = var1;
    var1 = {};
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: selectOption, environment: var3
        _fun43248: for (var _fun43248_ip = 0;;) switch (_fun43248_ip) {
            case 0:
                var5 = arg1;
                var4 = arg2;
                var2 = _closure1_slot9;
                var1 = var2.getOnboardingPrompt;
                var1 = var1.bind(var2)(var5);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun43248_ip = 183;
                    continue _fun43248
                }
            case 33:
                var2 = var1.singleSelect;
                if (var2) {
                    _fun43248_ip = 48;
                    continue _fun43248
                }
            case 42:
                var3 = new Array(0);
                _fun43248_ip = 111;
                continue _fun43248;
            case 48:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 14;
                var2 = var10[var7];
                var8 = undefined;
                var6 = var9.bind(var8)(var2);
                var2 = var6.without;
                var7 = var10[var7];
                var9 = var9.bind(var8)(var7);
                var8 = var9.map;
                var7 = var1.options;
                var1 = 'id';
                var1 = var8.bind(var9)(var7, var1);
                var3 = var2.bind(var6)(var1, var4);
            case 111:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var6 = 'GUILD_ONBOARDING_SELECT_OPTION';
                var0.type = var6;
                var6 = arg0;
                var0.guildId = var6;
                var0.promptId = var5;
                var0.optionId = var4;
                var4 = arg3;
                var0.selected = var4;
                var0.removedOptionIds = var3;
                var0 = var1.bind(var2)(var0);
            case 183:
                var0 = undefined;
                return var0;
        }
    };
    var1.selectOption = var6;
    var6 = 14;
    var6 = var5[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.debounce;
    var6 = 1000;
    var6 = var7.bind(var8)(var9, var6);
    var1.updateOnboardingResponses = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: updateRolesLocal, environment: var3
        _fun43249: for (var _fun43249_ip = 0;;) switch (_fun43249_ip) {
            case 0:
                var4 = arg0;
                var10 = arg1;
                var7 = arg2;
                var2 = _closure1_slot7;
                var0 = var2.getSelfMember;
                var3 = var0.bind(var2)(var4);
                var2 = null;
                var5 = var2 == var3;
                var0 = undefined;
                var9 = undefined;
                if (var5) {
                    _fun43249_ip = 46;
                    continue _fun43249
                }
            case 40:
                var9 = var3.roles;
            case 46:
                if (!(var2 == var9)) {
                    _fun43249_ip = 54;
                    continue _fun43249
                }
            case 50:
                var9 = new Array(0);
            case 54:
                var3 = _closure1_slot5;
                var2 = var3.isViewingRoles;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun43249_ip = 210;
                    continue _fun43249
                }
            case 75:
                var2 = var10.length;
                var5 = 0;
                var2 = var2 > var5;
                if (var2) {
                    _fun43249_ip = 98;
                    continue _fun43249
                }
            case 89:
                var3 = var7.length;
                var2 = var3 > var5;
            case 98:
                if (!var2) {
                    _fun43249_ip = 291;
                    continue _fun43249
                }
            case 104:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var2 = 11;
                var2 = var13[var2];
                var5 = var12.bind(var0)(var2);
                var3 = var5.dispatch;
                var2 = {};
                var6 = 'GUILD_MEMBER_UPDATE_LOCAL';
                var2.type = var6;
                var2.guildId = var4;
                var6 = 14;
                var8 = var13[var6];
                var11 = var12.bind(var0)(var8);
                var8 = var11.difference;
                var6 = var13[var6];
                var12 = var12.bind(var0)(var6);
                var6 = var12.union;
                var6 = var6.bind(var12)(var9, var10);
                var6 = var8.bind(var11)(var6, var7);
                var2.roles = var6;
                var2.addedRoleIds = var10;
                var2.removedRoleIds = var7;
                var2 = var3.bind(var5)(var2);
                _fun43249_ip = 291;
                continue _fun43249;
            case 210:
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 13;
                var2 = var11[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.updateImpersonatedRoles;
                var8 = _closure1_slot1;
                var1 = 14;
                var5 = var11[var1];
                var6 = var8.bind(var0)(var5);
                var5 = var6.difference;
                var1 = var11[var1];
                var8 = var8.bind(var0)(var1);
                var1 = var8.union;
                var1 = var1.bind(var8)(var9, var10);
                var1 = var5.bind(var6)(var1, var7);
                var1 = var2.bind(var3)(var4, var1);
            case 291:
                return var0;
        }
    };
    var1.updateRolesLocal = var6;
    var6 = function(arg0, arg1) { // Original name: completeOnboarding, environment: var3
        _fun43250: for (var _fun43250_ip = 0;;) switch (_fun43250_ip) {
            case 0:
                var4 = arg0;
                var21 = arg1;
                var0 = var21.length;
                var5 = 0;
                var0 = var0 > var5;
                var3 = null;
                var20 = null;
                if (!var0) {
                    _fun43250_ip = 42;
                    continue _fun43250
                }
            case 26:
                var1 = var21.length;
                var0 = 1;
                var0 = var1 - var0;
                var20 = var21[var0];
            case 42:
                var1 = _closure1_slot9;
                var0 = var1.getSelectedOptions;
                var23 = var0.bind(var1)(var4);
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var8 = var2[var1];
                var0 = undefined;
                var9 = var7.bind(var0)(var8);
                var8 = var9.getSelectedRoleIds;
                var11 = var8.bind(var9)(var23);
                var2 = var2[var1];
                var7 = var7.bind(var0)(var2);
                var2 = var7.getSelectedChannelIds;
                var2 = var2.bind(var7)(var23);
                var8 = _closure1_slot9;
                var7 = var8.getEnabled;
                var7 = var7.bind(var8)(var4);
                if (var7) {
                    _fun43250_ip = 139;
                    continue _fun43250
                }
            case 133:
                var9 = new Array(0);
                _fun43250_ip = 154;
                continue _fun43250;
            case 139:
                var8 = _closure1_slot9;
                var7 = var8.getDefaultChannelIds;
                var9 = var7.bind(var8)(var4);
            case 154:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = var8[var1];
                var12 = var7.bind(var0)(var10);
                var10 = var12.getChannelCoverageForOnboarding;
                var13 = var10.bind(var12)(var4, var21, var9);
                var12 = _closure1_slot4;
                var10 = 2;
                var10 = var12.bind(var0)(var13, var10);
                var19 = var10[var5];
                var22 = 1;
                var17 = var10[var22];
                var14 = new Array(0);
                var30 = var14;
                var29 = var2;
                var28 = 0;
                var28 = arraySpread(var30, var29, var28);
                var30 = var14;
                var29 = var9;
                var2 = arraySpread(var30, var29, var28);
                var9 = var14.map;
                var2 = function(arg0) { // Environment: var15
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var9.bind(var14)(var2);
                var9 = var10.filter;
                var2 = 16;
                var2 = var8[var2];
                var2 = var7.bind(var0)(var2);
                var2 = var2.isNotNullish;
                var28 = var9.bind(var10)(var2);
                var2 = 17;
                var2 = var8[var2];
                var9 = var7.bind(var0)(var2);
                var8 = var9.getFlattenedChannels;
                var2 = global;
                var7 = var2.Set;
                var10 = var7.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var7
                    }
                });
                var31 = var10;
                var30 = var14;
                var7 = new var31[var7](var30, var29);
                var29 = var7 instanceof Object ? var7 : var10;
                var10 = true;
                var31 = var9;
                var30 = var4;
                var27 = true;
                var7 = var31[var8](var30, var29, var28, var27, var26);
                var18 = var7.length;
                if (!(var3 != var20)) {
                    _fun43250_ip = 371;
                    continue _fun43250
                }
            case 349:
                var9 = var20.options;
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var16 = var8.bind(var9)(var7);
                _fun43250_ip = 375;
                continue _fun43250;
            case 371:
                var16 = new Array(0);
            case 375:
                var _closure2_slot0 = var16;
                var8 = _closure1_slot9;
                var7 = var8.getConnections;
                var8 = var7.bind(var8)(var4);
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var7 = var26[var1];
                var9 = var25.bind(var0)(var7);
                var7 = var9.getProviderConnectionState;
                var13 = var7.bind(var9)(var8);
                var1 = var26[var1];
                var7 = var25.bind(var0)(var1);
                var1 = var7.getApplicationConnectionState;
                var12 = var1.bind(var7)(var8);
                var7 = _closure1_slot1;
                var1 = 18;
                var1 = var26[var1];
                var9 = var7.bind(var0)(var1);
                var8 = var9.track;
                var1 = _closure1_slot10;
                var7 = var1.GUILD_ONBOARDING_STEP_COMPLETED;
                var1 = {};
                var24 = 19;
                var24 = var26[var24];
                var25 = var25.bind(var0)(var24);
                var24 = var25.collectGuildAnalyticsMetadata;
                var29 = var24.bind(var25)(var4);
                var30 = var1;
                var24 = copyDataProperties(var30, var29);
                var21 = var21.length;
                var22 = var21 - var22;
                var21 = 'step';
                var1[var21] = var22;
                var20 = var3 == var20;
                var21 = 0;
                if (var20) {
                    _fun43250_ip = 552;
                    continue _fun43250
                }
            case 532:
                var22 = var23.filter;
                var20 = function(arg0) { // Environment: var15
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var22.bind(var23)(var20);
                var21 = var20.length;
            case 552:
                var20 = 'options_selected';
                var1[var20] = var21;
                var16 = var16.length;
                var20 = var16 > var5;
                var16 = 'skipped';
                var1[var16] = var20;
                var20 = false;
                var16 = 'back';
                var1[var16] = var20;
                var16 = 'in_onboarding';
                var1[var16] = var10;
                var16 = 'is_final_step';
                var1[var16] = var10;
                var20 = var11.size;
                var16 = 'roles_granted';
                var1[var16] = var20;
                var16 = 'channels_granted';
                var1[var16] = var18;
                var18 = var19.map;
                var16 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var18 = var18.bind(var19)(var16);
                var16 = 'guild_onboarding_covered_channel_ids';
                var1[var16] = var18;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var16 = var16.bind(var17)(var15);
                var15 = 'guild_onboarding_uncovered_channel_ids';
                var1[var15] = var16;
                var16 = var13.connected;
                var15 = 'provider_connections_connected';
                var1[var15] = var16;
                var15 = var13.notConnected;
                var13 = 'provider_connections_not_connected';
                var1[var13] = var15;
                var15 = var12.connected;
                var13 = 'application_connections_connected';
                var1[var13] = var15;
                var13 = var12.notConnected;
                var12 = 'application_connections_not_connected';
                var1[var12] = var13;
                var1 = var8.bind(var9)(var7, var1);
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 20;
                var1 = var13[var1];
                var9 = var7.bind(var0)(var1);
                var8 = var9.ackGuildFeature;
                var1 = _closure1_slot14;
                var7 = var1.GUILD_ONBOARDING_QUESTION;
                var12 = _closure1_slot1;
                var1 = 21;
                var1 = var13[var1];
                var13 = var12.bind(var0)(var1);
                var12 = var13.fromTimestamp;
                var15 = var2.Date;
                var1 = var15.now;
                var1 = var1.bind(var15)();
                var1 = var12.bind(var13)(var1);
                var1 = var8.bind(var9)(var4, var7, var1);
                var1 = _closure1_slot15;
                var1 = var1.bind(var0)(var4, var10);
                var7 = _closure1_slot5;
                var1 = var7.isFullServerPreview;
                var1 = var1.bind(var7)(var4);
                if (!var1) {
                    _fun43250_ip = 1127;
                    continue _fun43250
                }
            case 881:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 13;
                var9 = var7[var1];
                var13 = var8.bind(var0)(var9);
                var12 = var13.updateImpersonatedChannels;
                var9 = new Array(0);
                var9 = var12.bind(var13)(var4, var14, var9);
                var9 = var7[var1];
                var13 = var8.bind(var0)(var9);
                var12 = var13.updateImpersonatedData;
                var9 = {};
                var9.optInEnabled = var10;
                var9 = var12.bind(var13)(var4, var9);
                var7 = var7[var1];
                var8 = var8.bind(var0)(var7);
                var7 = var8.updateImpersonatedRoles;
                var9 = var2.Array;
                var2 = var9.from;
                var2 = var2.bind(var9)(var11);
                var2 = var7.bind(var8)(var4, var2);
                var7 = _closure1_slot8;
                var2 = var7.getCurrentUser;
                var2 = var2.bind(var7)();
                if (!(var3 != var2)) {
                    _fun43250_ip = 1127;
                    continue _fun43250
                }
            case 1003:
                var8 = _closure1_slot7;
                var7 = var8.getMember;
                var2 = var2.id;
                var7 = var7.bind(var8)(var4, var2);
                var8 = var3 == var7;
                var2 = undefined;
                if (var8) {
                    _fun43250_ip = 1038;
                    continue _fun43250
                }
            case 1033:
                var2 = var7.flags;
            case 1038:
                var3 = var3 != var2;
                var9 = 0;
                if (!var3) {
                    _fun43250_ip = 1050;
                    continue _fun43250
                }
            case 1047:
                var9 = var2;
            case 1050:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = var11[var1];
                var3 = var8.bind(var0)(var1);
                var2 = var3.updateImpersonatedData;
                var1 = {};
                var5 = {};
                var7 = 22;
                var7 = var11[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.setFlag;
                var6 = _closure1_slot13;
                var6 = var6.COMPLETED_ONBOARDING;
                var6 = var7.bind(var8)(var9, var6, var10);
                var5.flags = var6;
                var1.memberOptions = var5;
                var1 = var2.bind(var3)(var4, var1);
            case 1127:
                return var0;
        }
    };
    var1.completeOnboarding = var6;
    var6 = function(arg0, arg1) { // Original name: onboardExistingMember, environment: var3
        _fun43256: for (var _fun43256_ip = 0;;) switch (_fun43256_ip) {
            case 0:
                var5 = arg0;
                var1 = global;
                var4 = var1.Set;
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = arg1;
                var12 = var3;
                var0 = new var12[var4](var11, var10);
                var6 = var0 instanceof Object ? var0 : var3;
                var _closure2_slot0 = var6;
                var4 = _closure1_slot9;
                var3 = var4.getEnabled;
                var3 = var3.bind(var4)(var5);
                if (var3) {
                    _fun43256_ip = 67;
                    continue _fun43256
                }
            case 61:
                var4 = new Array(0);
                _fun43256_ip = 82;
                continue _fun43256;
            case 67:
                var7 = _closure1_slot9;
                var3 = var7.getDefaultChannelIds;
                var4 = var3.bind(var7)(var5);
            case 82:
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = var2.add;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var6.size;
                var2 = 0;
                if (!(var3 > var2)) {
                    _fun43256_ip = 184;
                    continue _fun43256
                }
            case 108:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 23;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.bulkOptInChannels;
                var2 = var1.Array;
                var1 = var2.from;
                var10 = var1.bind(var2)(var6);
                var1 = {};
                var0 = _closure1_slot11;
                var0 = var0.GUILD_ONBOARDING;
                var1.page = var0;
                var9 = true;
                var12 = var4;
                var11 = var5;
                var8 = var1;
                var0 = var12[var3](var11, var10, var9, var8, var7);
            case 184:
                var0 = undefined;
                return var0;
        }
    };
    var1.onboardExistingMember = var6;
    var6 = function(arg0) { // Original name: finishOnboarding, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_ONBOARDING_COMPLETE';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.finishOnboarding = var6;
    var6 = function(arg0, arg1) { // Original name: setUserOnboardingStep, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_ONBOARDING_SET_STEP';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.step = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setUserOnboardingStep = var6;
    var3 = function(arg0) { // Original name: resetOnboarding, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43262: for (var _fun43262_ip = 0;;) switch (_fun43262_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43262_ip = 188;
                            continue _fun43262
                        }
                    case 10:
                        var2 = _closure1_slot8;
                        var1 = var2.getCurrentUser;
                        var2 = var1.bind(var2)();
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun43262_ip = 180;
                            continue _fun43262
                        }
                    case 35:
                        var7 = _closure1_slot7;
                        var6 = var7.getMember;
                        var4 = _closure2_slot0;
                        var2 = var2.id;
                        var4 = var6.bind(var7)(var4, var2);
                        var6 = var3 == var4;
                        var8 = undefined;
                        var2 = undefined;
                        if (var6) {
                            _fun43262_ip = 79;
                            continue _fun43262
                        }
                    case 74:
                        var2 = var4.flags;
                    case 79:
                        var3 = var3 != var2;
                        var9 = 0;
                        if (!var3) {
                            _fun43262_ip = 91;
                            continue _fun43262
                        }
                    case 88:
                        var9 = var2;
                    case 91:
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 24;
                        var2 = var10[var2];
                        var4 = var7.bind(var8)(var2);
                        var3 = var4.updateGuildSelfMember;
                        var2 = _closure2_slot0;
                        var1 = {};
                        var6 = 22;
                        var6 = var10[var6];
                        var8 = var7.bind(var8)(var6);
                        var7 = var8.setFlag;
                        var5 = _closure1_slot13;
                        var6 = var5.COMPLETED_ONBOARDING;
                        var5 = false;
                        var5 = var7.bind(var8)(var9, var6, var5);
                        var1.flags = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        SaveGenerator(address = 174);
                    case 172:
                        return var1;
                    case 174:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun43262_ip = 185;
                            continue _fun43262
                        }
                    case 180:
                        var2 = undefined;
                        return var2;
                    case 185:
                        return var1;
                    case 188:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.resetOnboarding = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/GuildOnboardingActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 1664, 1372, 1672, 1613, 4650, 660, 3038, 4267, 507, 806, 1207, 4654, 22, 4545, 1304, 4655, 795, 4265, 4537, 21, 1384, 4656, 4661, 2]);