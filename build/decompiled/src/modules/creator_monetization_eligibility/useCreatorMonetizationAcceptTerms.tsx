// modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwner;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var12 = _closure1_slot0;
        var13 = _closure1_slot3;
        var11 = 6;
        var0 = var13[var11];
        var8 = undefined;
        var5 = var12.bind(var8)(var0);
        var4 = var5.useStateFromStores;
        var0 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var1
            var2 = _closure1_slot8;
            var1 = var2.getGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var10 = var4.bind(var5)(var3, var0);
        var _closure2_slot2 = var10;
        var4 = _closure1_slot6;
        var0 = var4.useState;
        var0 = var0.bind(var4)();
        var15 = _closure1_slot5;
        var14 = 2;
        var0 = var15.bind(var8)(var0, var14);
        var3 = 0;
        var9 = var0[var3];
        var5 = 1;
        var0 = var0[var5];
        var _closure2_slot3 = var0;
        var16 = var4.useState;
        var0 = false;
        var0 = var16.bind(var4)(var0);
        var0 = var15.bind(var8)(var0, var14);
        var3 = var0[var3];
        var0 = var0[var5];
        var _closure2_slot4 = var0;
        var0 = 7;
        var0 = var13[var0];
        var5 = var12.bind(var8)(var0);
        var0 = var5.useIsExpeditedOnboardingGuild;
        var5 = var0.bind(var5)(var10);
        var _closure2_slot5 = var5;
        var0 = {};
        var11 = var13[var11];
        var14 = var12.bind(var8)(var11);
        var13 = var14.useStateFromStores;
        var11 = _closure1_slot9;
        var12 = new Array(1);
        var12[0] = var11;
        var11 = new Array(1);
        var11[0] = var10;
        var10 = function() { // Environment: var1
            _fun116543: for (var _fun116543_ip = 0;;) switch (_fun116543_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var4 = var0.bind(var1)();
                    var3 = _closure2_slot2;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun116543_ip = 48;
                        continue _fun116543
                    }
                case 32:
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2, var4);
                case 48:
                    return var0;
            }
        };
        var10 = var13.bind(var14)(var12, var10, var11);
        var0.canSubmitAcceptance = var10;
        var0.error = var9;
        var0.loading = var3;
        var3 = var4.useCallback;
        var2 = _closure1_slot4;
        var1 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun116545: for (var _fun116545_ip = 0;;) switch (_fun116545_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun116545_ip = 293;
                            continue _fun116545
                        }
                    case 10:
                        var1 = _closure2_slot0;
                        var3 = null;
                        if (!(var3 != var1)) {
                            _fun116545_ip = 273;
                            continue _fun116545
                        }
                    case 26:
                        var1 = _closure2_slot5;
                        if (var1) {
                            _fun116545_ip = 44;
                            continue _fun116545
                        }
                    case 33:
                        var1 = _closure2_slot1;
                        if (!(var3 != var1)) {
                            _fun116545_ip = 273;
                            continue _fun116545
                        }
                    case 44:
                        var5 = _closure2_slot4;
                        var4 = undefined;
                        var1 = true;
                        var1 = var5.bind(var4)(var1);
                        var1 = _closure2_slot3;
                        var1 = var1.bind(var4)(var4);
                    case 66: // try_start_0 // try_start_2
                        var1 = _closure2_slot1;
                        if (!(var3 == var1)) {
                            _fun116545_ip = 136;
                            continue _fun116545
                        }
                    case 74:
                        var3 = _closure1_slot2;
                        var5 = _closure1_slot3;
                        var1 = 8;
                        var1 = var5[var1];
                        var5 = var3.bind(var4)(var1);
                        var3 = var5.acceptCreatorMonetizationTermsV2;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 116);
                    case 114:
                        return var1;
                    case 116:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (!var3) {
                            _fun116545_ip = 189;
                            continue _fun116545
                        }
                    case 122: // try_end0 // try_end2
                        var5 = _closure2_slot4;
                        var3 = false;
                        var3 = var5.bind(var4)(var3);
                        return var1;
                    case 136: // try_start_1 // try_start_3
                        var3 = _closure1_slot2;
                        var5 = _closure1_slot3;
                        var1 = 8;
                        var1 = var5[var1];
                        var6 = var3.bind(var4)(var1);
                        var5 = var6.acceptCreatorMonetizationTerms;
                        var3 = _closure2_slot0;
                        var1 = _closure2_slot1;
                        var1 = var5.bind(var6)(var3, var1);
                        SaveGenerator(address = 183);
                    case 181:
                        return var1;
                    case 183:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun116545_ip = 191;
                            continue _fun116545
                        }
                    case 189: // try_end1
                        _fun116545_ip = 262;
                        continue _fun116545;
                    case 191: // try_end3
                        var5 = _closure2_slot4;
                        var3 = false;
                        var3 = var5.bind(var4)(var3);
                        return var1;
                    case 205: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 6);
                        var3 = _closure2_slot3;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 9;
                        var1 = var7[var1];
                        var1 = var5.bind(var4)(var1);
                        var5 = var1.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var1
                            }
                        });
                        var10 = var5;
                        var9 = var6;
                        var1 = new var10[var1](var9, var8);
                        var1 = var1 instanceof Object ? var1 : var5;
                        var1 = var3.bind(var4)(var1);
                    case 262: // try_end4
                        var3 = _closure2_slot4;
                        var1 = false;
                        var1 = var3.bind(var4)(var1);
                    case 273:
                        var1 = undefined;
                        return var1;
                    case 278: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure2_slot4;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 293:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var2.bind(var8)(var1);
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var0.submitAcceptTermsRequest = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1416, 1410, 1621, 566, 5640, 14874, 3352, 2]);