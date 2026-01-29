// modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CreatorMonetizationApplicationState;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useCreatorMonetizationEligibility, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot5;
        var3 = var4.useState;
        var0 = null;
        var0 = var0 != var6;
        var0 = var3.bind(var4)(var0);
        var10 = _closure1_slot4;
        var5 = undefined;
        var9 = 2;
        var0 = var10.bind(var5)(var0, var9);
        var2 = 0;
        var3 = var0[var2];
        var8 = 1;
        var0 = var0[var8];
        var _closure2_slot1 = var0;
        var0 = var4.useState;
        var0 = var0.bind(var4)();
        var0 = var10.bind(var5)(var0, var9);
        var7 = var0[var2];
        var0 = var0[var8];
        var _closure2_slot2 = var0;
        var0 = var4.useState;
        var0 = var0.bind(var4)();
        var0 = var10.bind(var5)(var0, var9);
        var2 = var0[var2];
        var0 = var0[var8];
        var _closure2_slot3 = var0;
        var8 = var4.useCallback;
        var0 = function() { // Environment: var1
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun116863: for (var _fun116863_ip = 0;;) switch (_fun116863_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun116863_ip = 620;
                                continue _fun116863
                            }
                        case 10:
                            var1 = arg0;
                            var4 = undefined;
                            var12 = undefined;
                            var13 = undefined;
                            var11 = undefined;
                            var10 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var5 = _closure2_slot1;
                            var3 = true;
                            var3 = var5.bind(var4)(var3);
                            var3 = _closure2_slot2;
                            var3 = var3.bind(var4)(var4);
                        case 50: // try_start_0 // try_start_1
                            var5 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 4;
                            var3 = var8[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.getCreatorMonetizationEligibility;
                            var1 = var3.bind(var5)(var1);
                            SaveGenerator(address = 88);
                        case 86:
                            return var1;
                        case 88:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun116863_ip = 520;
                                continue _fun116863
                            }
                        case 97:
                            var6 = var1;
                            var5 = _closure2_slot3;
                            var3 = {};
                            var8 = var1.sufficient;
                            var3.isEligibleForMonetization = var8;
                            var8 = var1.size;
                            var3.hasSufficientMembers = var8;
                            var8 = var1.mfa;
                            var3.hasEnabled2FA = var8;
                            var8 = var1.age;
                            var3.meetsServerAgeRequirement = var8;
                            var8 = var1.owner_age;
                            var3.meetsOwnerAgeRequirement = var8;
                            var8 = var1.safe_environment;
                            var3.noRecentViolations = var8;
                            var8 = var1.engagement_healthy;
                            var3.weeklyCommunicators = var8;
                            var8 = var1.retention_healthy;
                            var3.hasMemberRetention = var8;
                            var8 = global;
                            var15 = var8.Object;
                            var14 = var15.keys;
                            var8 = var1.nsfw_properties;
                            var8 = var14.bind(var15)(var8);
                            var14 = var8.length;
                            var8 = 0;
                            var8 = var8 === var14;
                            var3.notNSFW = var8;
                            var8 = var1.can_apply;
                            var3.canApply = var8;
                            var14 = var1.latest_request;
                            var12 = var14;
                            var8 = null;
                            var15 = var8 == var14;
                            var14 = undefined;
                            if (var15) {
                                _fun116863_ip = 285;
                                continue _fun116863
                            }
                        case 280:
                            var14 = var12.state;
                        case 285:
                            var12 = _closure1_slot6;
                            var12 = var12.OPEN;
                            var12 = var14 === var12;
                            var3.isApplicationPending = var12;
                            var12 = var6;
                            var12 = var12.latest_request;
                            var13 = var12;
                            var14 = var8 == var12;
                            var12 = undefined;
                            if (var14) {
                                _fun116863_ip = 330;
                                continue _fun116863
                            }
                        case 325:
                            var12 = var13.state;
                        case 330:
                            var9 = _closure1_slot6;
                            var9 = var9.ACTION_REQUIRED;
                            var9 = var12 === var9;
                            var3.actionRequired = var9;
                            var9 = var6;
                            var12 = var9.minimum_age_in_days;
                            var3.minimumAgeInDays = var12;
                            var12 = var9.minimum_owner_age_in_years;
                            var3.minimumOwnerAgeInYears = var12;
                            var12 = var9.minimum_size;
                            var3.minimumSize = var12;
                            var12 = var9.latest_request;
                            var3.latestRequest = var12;
                            var12 = var9.rejection;
                            var3.rejection = var12;
                            var9 = var9.health_score;
                            var11 = var9;
                            var12 = var8 == var9;
                            var9 = undefined;
                            if (var12) {
                                _fun116863_ip = 439;
                                continue _fun116863
                            }
                        case 433:
                            var9 = var11.guild_size;
                        case 439:
                            var3.guildMemberCount = var9;
                            var9 = var6;
                            var9 = var9.health_score;
                            var10 = var9;
                            var11 = var8 == var9;
                            var9 = undefined;
                            if (var11) {
                                _fun116863_ip = 473;
                                continue _fun116863
                            }
                        case 465:
                            var9 = var10.communicators;
                        case 473:
                            var3.communicatorCount = var9;
                            var6 = var6.health_score;
                            var7 = var6;
                            var8 = var8 == var6;
                            var6 = undefined;
                            if (var8) {
                                _fun116863_ip = 506;
                                continue _fun116863
                            }
                        case 498:
                            var6 = var7.perc_ret_w1;
                        case 506:
                            var3.retentionScore = var6;
                            var3 = var5.bind(var4)(var3);
                        case 518: // try_end0
                            _fun116863_ip = 591;
                            continue _fun116863;
                        case 520: // try_end1
                            var5 = _closure2_slot1;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 534: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 6);
                            var3 = _closure2_slot2;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 5;
                            var1 = var7[var1];
                            var1 = var5.bind(var4)(var1);
                            var5 = var1.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var17 = var5;
                            var16 = var6;
                            var1 = new var17[var1](var16, var15);
                            var1 = var1 instanceof Object ? var1 : var5;
                            var1 = var3.bind(var4)(var1);
                        case 591: // try_end2
                            var3 = _closure2_slot1;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            return var4;
                        case 605: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot1;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 620:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var5 = var0.bind(var5)();
        var0 = new Array(0);
        var5 = var8.bind(var4)(var5, var0);
        var _closure2_slot4 = var5;
        var0 = {};
        var0.error = var7;
        var0.loading = var3;
        var0.eligibility = var2;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun116865: for (var _fun116865_ip = 0;;) switch (_fun116865_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun116865_ip = 28;
                        continue _fun116865
                    }
                case 13:
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 28:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.refresh = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 14824, 14827, 3311, 2]);