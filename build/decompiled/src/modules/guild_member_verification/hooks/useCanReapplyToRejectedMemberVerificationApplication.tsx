// modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60075: for (var _fun60075_ip = 0;;) switch (_fun60075_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var6 = _closure1_slot5;
                var2 = var6.useState;
                var1 = true;
                var4 = var2.bind(var6)(var1);
                var2 = _closure1_slot4;
                var5 = undefined;
                var1 = 2;
                var4 = var2.bind(var5)(var4, var1);
                var1 = 0;
                var1 = var4[var1];
                var2 = 1;
                var2 = var4[var2];
                var _closure2_slot1 = var2;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var9 = var4.bind(var5)(var2);
                var7 = var9.useStateFromStores;
                var2 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun60076: for (var _fun60076_ip = 0;;) switch (_fun60076_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun60076_ip = 40;
                                continue _fun60076
                            }
                        case 18:
                            var3 = _closure1_slot7;
                            var2 = var3.getJoinRequestGuild;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 40:
                            return var0;
                    }
                };
                var4 = var7.bind(var9)(var4, var2);
                var7 = var6.useCallback;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun60079: for (var _fun60079_ip = 0;;) switch (_fun60079_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun60079_ip = 141;
                                        continue _fun60079
                                    }
                                case 10:
                                    var2 = arg0;
                                    var4 = undefined;
                                    var1 = undefined;
                                case 17: // try_start_0
                                    var7 = _closure1_slot6;
                                    var6 = var7.getInviteKeyForGuildId;
                                    var5 = var2;
                                    var6 = var6.bind(var7)(var5);
                                    var1 = var6;
                                    var5 = null;
                                    if (!(var5 != var6)) {
                                        _fun60079_ip = 89;
                                        continue _fun60079
                                    }
                                case 47:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 7;
                                    var3 = var6[var3];
                                    var5 = var5.bind(var4)(var3);
                                    var3 = var5.fetchVerificationForm;
                                    var1 = var3.bind(var5)(var2, var1);
                                    SaveGenerator(address = 83);
                                case 81:
                                    return var1;
                                case 83:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun60079_ip = 106;
                                        continue _fun60079
                                    }
                                case 89: // try_end0
                                    var3 = _closure2_slot1;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    return var4;
                                case 106:
                                    var3 = _closure2_slot1;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                case 123: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot1;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 141:
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
                var5 = var2.bind(var5)();
                var2 = new Array(0);
                var7 = var7.bind(var6)(var5, var2);
                var _closure2_slot2 = var7;
                var5 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var7;
                var0 = function() { // Environment: var0
                    _fun60081: for (var _fun60081_ip = 0;;) switch (_fun60081_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun60081_ip = 41;
                                continue _fun60081
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var3 = undefined;
                            var1 = true;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            _fun60081_ip = 54;
                            continue _fun60081;
                        case 41:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var2);
                var0 = {};
                var2 = null;
                var2 = var2 != var4;
                if (!var2) {
                    _fun60075_ip = 201;
                    continue _fun60075
                }
            case 175:
                var5 = var4.features;
                var4 = var5.has;
                var3 = _closure1_slot8;
                var3 = var3.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var2 = var4.bind(var5)(var3);
            case 201:
                var0.canReapply = var2;
                var0.isLoading = var1;
                return var0;
        }
    };
    var2.useCanReapplyToRejectedMemberVerificationApplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3323, 3214, 660, 566, 7431, 2]);