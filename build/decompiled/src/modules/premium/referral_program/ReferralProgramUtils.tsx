// modules/premium/referral_program/ReferralProgramUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 3;
        var0 = var5[var0];
        var3 = undefined;
        var2 = var4.bind(var3)(var0);
        var1 = var2.UNSAFE_isDismissibleContentDismissed;
        var0 = 4;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.DismissibleContent;
        var0 = var0.REFERRAL_PROGRAM_POPOVER;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var3;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/referral_program/ReferralProgramUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun55393: for (var _fun55393_ip = 0;;) switch (_fun55393_ip) {
            case 0:
                var6 = global;
                var1 = var6.Date;
                var0 = var1.now;
                var1 = var0.bind(var1)();
                var0 = arg0;
                var3 = var0 - var1;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var7 = undefined;
                var2 = var4.bind(var7)(var2);
                var2 = var2.Millis;
                var2 = var2.HOUR;
                var8 = var3 / var2;
                var5 = 24;
                if (!(!(var8 > var5))) {
                    _fun55393_ip = 254;
                    continue _fun55393
                }
            case 75:
                if (!(!(var8 >= var0))) {
                    _fun55393_ip = 170;
                    continue _fun55393
                }
            case 79:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 2;
                var3 = var9[var0];
                var3 = var2.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var9[var0];
                var0 = var2.bind(var7)(var0);
                var0 = var0.t;
                var2 = var0["/d0GmT"];
                var0 = {};
                var11 = var6.Math;
                var10 = var11.floor;
                var9 = 60;
                var9 = var9 * var8;
                var9 = var10.bind(var11)(var9);
                var0.numMinutes = var9;
                var0 = var3.bind(var4)(var2, var0);
                _fun55393_ip = 252;
                continue _fun55393;
            case 170:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 2;
                var4 = var10[var2];
                var4 = var3.bind(var7)(var4);
                var9 = var4.intl;
                var4 = var9.formatToPlainString;
                var2 = var10[var2];
                var2 = var3.bind(var7)(var2);
                var2 = var2.t;
                var3 = var2.k9v33y;
                var2 = {};
                var11 = var6.Math;
                var10 = var11.floor;
                var10 = var10.bind(var11)(var8);
                var2.numHours = var10;
                var0 = var4.bind(var9)(var3, var2);
            case 252:
                _fun55393_ip = 340;
                continue _fun55393;
            case 254:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 2;
                var3 = var9[var1];
                var3 = var2.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var9[var1];
                var1 = var2.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1["g9s+dA"];
                var1 = {};
                var7 = var6.Math;
                var6 = var7.floor;
                var5 = var8 / var5;
                var5 = var6.bind(var7)(var5);
                var1.numDays = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 340:
                return var0;
        }
    };
    var2.getReferralTrialOfferExpirationCopy = var4;
    var4 = function() { // Environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 3;
        var0 = var5[var0];
        var3 = undefined;
        var2 = var4.bind(var3)(var0);
        var1 = var2.UNSAFE_isDismissibleContentDismissed;
        var0 = 4;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.DismissibleContent;
        var0 = var0.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isReferralProgramBadgeAcknowledged = var4;
    var4 = function() { // Environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 3;
        var1 = var5[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var1);
        var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
        var1 = 4;
        var1 = var5[var1];
        var1 = var4.bind(var0)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.markReferralProgramBadgeAcknowledged = var4;
    var4 = function(arg0) { // Environment: var1
        _fun55396: for (var _fun55396_ip = 0;;) switch (_fun55396_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.trialOffer;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun55396_ip = 148;
                    continue _fun55396
                }
            case 18:
                var0 = var2.referrer_id;
                var7 = undefined;
                var0 = var7 !== var0;
                var1 = var2.redeemed_at;
                var3 = var7 === var1;
                var1 = global;
                var5 = var1.Date;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 5;
                var4 = var8[var4];
                var6 = var6.bind(var7)(var4);
                var4 = var6.extractTimestamp;
                var2 = var2.id;
                var9 = var4.bind(var6)(var2);
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = var4;
                var2 = new var10[var5](var9, var8);
                var2 = var2 instanceof Object ? var2 : var4;
                var1 = var1.Date;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var10 = var4;
                var1 = new var10[var1](var9);
                var1 = var1 instanceof Object ? var1 : var4;
                if (!var0) {
                    _fun55396_ip = 139;
                    continue _fun55396
                }
            case 136:
                var0 = var3;
            case 139:
                if (!var0) {
                    _fun55396_ip = 146;
                    continue _fun55396
                }
            case 142:
                var0 = var1 >= var2;
            case 146:
                return var0;
            case 148:
                var0 = false;
                return var0;
        }
    };
    var2.useIsReferralProgramBadgeShowable = var4;
    var4 = function() { // Environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 3;
        var1 = var5[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var1);
        var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
        var1 = 4;
        var1 = var5[var1];
        var1 = var4.bind(var0)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.REFERRAL_PROGRAM_POPOVER;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.markReferralProgramPopoverSeen = var4;
    var2.isReferralProgramPopoverSeen = var3;
    var1 = function() { // Environment: var1
        _fun55398: for (var _fun55398_ip = 0;;) switch (_fun55398_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 6;
                var0 = var7[var0];
                var5 = undefined;
                var1 = var6.bind(var5)(var0);
                var0 = var1.useIsEligibleSenderForReferralProgram;
                var3 = false;
                var0 = var0.bind(var1)(var3);
                var1 = _closure1_slot4;
                var1 = var1.bind(var5)();
                var4 = 7;
                var4 = var7[var4];
                var6 = var6.bind(var5)(var4);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot3;
                    var0 = var1.getReferralsRemaining;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var5.bind(var6)(var4, var2);
                if (!var0) {
                    _fun55398_ip = 95;
                    continue _fun55398
                }
            case 91:
                var0 = var3 === var1;
            case 95:
                if (!var0) {
                    _fun55398_ip = 104;
                    continue _fun55398
                }
            case 98:
                var1 = null;
                var0 = var1 !== var2;
            case 104:
                if (!var0) {
                    _fun55398_ip = 113;
                    continue _fun55398
                }
            case 107:
                var1 = 0;
                var0 = var2 > var1;
            case 113:
                return var0;
        }
    };
    var2.useIsReferralProgramPopoverShowable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6642, 667, 1234, 3212, 1358, 21, 6650, 566, 2]);