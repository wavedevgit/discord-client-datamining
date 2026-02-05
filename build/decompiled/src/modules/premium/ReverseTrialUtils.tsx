// modules/premium/ReverseTrialUtils.tsx
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
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun55501: for (var _fun55501_ip = 0;;) switch (_fun55501_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55501_ip = 386;
                            continue _fun55501
                        }
                    case 10:
                        var2 = _closure1_slot4;
                        var1 = var2.getCurrentUser;
                        var1 = var1.bind(var2)();
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var2);
                        var2 = var4.isPremium;
                        var5 = var2.bind(var4)(var1);
                        var4 = null;
                        var1 = var4 == var1;
                        if (var1) {
                            _fun55501_ip = 71;
                            continue _fun55501
                        }
                    case 68:
                        var1 = var5;
                    case 71:
                        if (var1) {
                            _fun55501_ip = 86;
                            continue _fun55501
                        }
                    case 74:
                        var2 = _closure1_slot7;
                        var1 = var2.fetchedEndedEntitlements;
                    case 86:
                        if (var1) {
                            _fun55501_ip = 157;
                            continue _fun55501
                        }
                    case 89:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 8;
                        var1 = var7[var1];
                        var7 = var2.bind(var6)(var1);
                        var2 = var7.fetchUserEntitlements;
                        var1 = {};
                        var8 = _closure1_slot10;
                        var8 = var8.FRACTIONAL_REDEMPTION;
                        var1.entitlementType = var8;
                        var8 = false;
                        var1.excludeEnded = var8;
                        var1 = var2.bind(var7)(var1);
                        SaveGenerator(address = 148);
                    case 146:
                        return var1;
                    case 148:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (!var2) {
                            _fun55501_ip = 157;
                            continue _fun55501
                        }
                    case 154:
                        return var1;
                    case 157:
                        var7 = _closure1_slot7;
                        var1 = var7.getReverseTrialEntitlement;
                        var2 = true;
                        var1 = var1.bind(var7)(var2);
                        if (var5) {
                            _fun55501_ip = 381;
                            continue _fun55501
                        }
                    case 180:
                        if (!(var4 != var1)) {
                            _fun55501_ip = 381;
                            continue _fun55501
                        }
                    case 187:
                        var5 = var1.endsAt;
                        if (!(var4 != var5)) {
                            _fun55501_ip = 381;
                            continue _fun55501
                        }
                    case 200:
                        var7 = var1.endsAt;
                        var5 = var7.getTime;
                        var8 = var5.bind(var7)();
                        var5 = global;
                        var9 = var5.Date;
                        var7 = var9.now;
                        var7 = var7.bind(var9)();
                        if (!(var8 < var7)) {
                            _fun55501_ip = 381;
                            continue _fun55501
                        }
                    case 240:
                        var8 = var1.endsAt;
                        var7 = var8.getTime;
                        var7 = var7.bind(var8)();
                        var8 = var5.Date;
                        var5 = var8.now;
                        var8 = var5.bind(var8)();
                        var5 = 259200000;
                        var5 = var8 - var5;
                        if (!(!(var7 < var5))) {
                            _fun55501_ip = 381;
                            continue _fun55501
                        }
                    case 285:
                        var5 = var1.sourceType;
                        var1 = _closure1_slot9;
                        var1 = var1.REVERSE_TRIAL;
                        if (!(var5 === var1)) {
                            _fun55501_ip = 381;
                            continue _fun55501
                        }
                    case 305:
                        var1 = arg0;
                        if (!(var4 == var1)) {
                            _fun55501_ip = 352;
                            continue _fun55501
                        }
                    case 312:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 9;
                        var1 = var7[var1];
                        var5 = var5.bind(var6)(var1);
                        var1 = var5.fetchUserOffer;
                        var1 = var1.bind(var5)();
                        SaveGenerator(address = 346);
                    case 344:
                        return var1;
                    case 346:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun55501_ip = 378;
                            continue _fun55501
                        }
                    case 352:
                        var6 = _closure1_slot6;
                        var5 = var6.getUserTrialOffer;
                        var3 = _closure1_slot8;
                        var3 = var5.bind(var6)(var3);
                        if (!(var4 != var3)) {
                            _fun55501_ip = 381;
                            continue _fun55501
                        }
                    case 375:
                        return var2;
                    case 378:
                        return var1;
                    case 381:
                        var1 = false;
                        return var1;
                    case 386:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EntitlementSourceTypes;
    var _closure1_slot9 = var6;
    var3 = var3.EntitlementTypes;
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/ReverseTrialUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.shouldShowReverseTrialFollowUpUpsell = var3;
    var1 = function() {
        var1 = function() {
            _fun55504: for (var _fun55504_ip = 0;;) switch (_fun55504_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var1 = 10;
                    var0 = var0[var1];
                    var5 = undefined;
                    var7 = var2.bind(var5)(var0);
                    var6 = var7.useStateFromStores;
                    var0 = _closure1_slot4;
                    var2 = new Array(1);
                    var2[0] = var0;
                    var0 = function() { // Environment: var3
                        var1 = _closure1_slot4;
                        var0 = var1.getCurrentUser;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var6.bind(var7)(var2, var0);
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot5;
                    var0 = var2.getPremiumTypeSubscription;
                    var6 = var0.bind(var2)();
                    var0 = null;
                    var2 = var0 != var6;
                    if (!var2) {
                        _fun55504_ip = 91;
                        continue _fun55504
                    }
                case 82:
                    var6 = var6.isBoostOnly;
                    var2 = !var6;
                case 91:
                    var _closure3_slot1 = var2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = var7[var1];
                    var9 = var6.bind(var5)(var1);
                    var8 = var9.useStateFromStores;
                    var1 = _closure1_slot7;
                    var6 = new Array(1);
                    var6[0] = var1;
                    var1 = function() { // Environment: var3
                        var2 = _closure1_slot7;
                        var1 = var2.getReverseTrialEntitlement;
                        var0 = false;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var8.bind(var9)(var6, var1);
                    var6 = _closure1_slot1;
                    var4 = 11;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var3 = function() { // Environment: var3
                        _fun55507: for (var _fun55507_ip = 0;;) switch (_fun55507_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var0 = null;
                                var0 = var0 != var2;
                                if (!var0) {
                                    _fun55507_ip = 56;
                                    continue _fun55507
                                }
                            case 16:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 7;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.isPremium;
                                var2 = _closure3_slot0;
                                var0 = var3.bind(var4)(var2);
                            case 56:
                                if (!var0) {
                                    _fun55507_ip = 66;
                                    continue _fun55507
                                }
                            case 59:
                                var1 = _closure3_slot1;
                                var0 = !var1;
                            case 66:
                                if (!var0) {
                                    _fun55507_ip = 148;
                                    continue _fun55507
                                }
                            case 69:
                                var0 = _closure1_slot7;
                                var0 = var0.fetchedAllEntitlements;
                                if (var0) {
                                    _fun55507_ip = 95;
                                    continue _fun55507
                                }
                            case 85:
                                var1 = _closure1_slot7;
                                var0 = var1.fetchingAllEntitlements;
                            case 95:
                                if (var0) {
                                    _fun55507_ip = 148;
                                    continue _fun55507
                                }
                            case 98:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 8;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.fetchUserEntitlements;
                                var0 = {};
                                var3 = _closure1_slot10;
                                var3 = var3.FRACTIONAL_REDEMPTION;
                                var0.entitlementType = var3;
                                var0 = var1.bind(var2)(var0);
                            case 148:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var0 = null;
                    if (var2) {
                        _fun55504_ip = 174;
                        continue _fun55504
                    }
                case 171:
                    var0 = var1;
                case 174:
                    return var0;
            }
        };
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.useIsInReverseTrial = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1621, 3117, 6664, 4652, 1623, 660, 1638, 4653, 6679, 566, 4103, 2]);