// modules/stage_channels/useStageSpeakingForCurrentUser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/useStageSpeakingForCurrentUser.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useIsStageSpeakingDisabledForCurrentUser, environment: var1
        _fun38698: for (var _fun38698_ip = 0;;) switch (_fun38698_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 4;
                var0 = var4[var0];
                var2 = undefined;
                var1 = var3.bind(var2)(var0);
                var0 = var1.useIsVerifiedTeen;
                var1 = var0.bind(var1)();
                var0 = 5;
                var0 = var4[var0];
                var3 = var3.bind(var2)(var0);
                var2 = var3.useIsStagePawtectEnabled;
                var0 = 'useIsStageSpeakingDisabledForCurrentUser';
                var0 = var2.bind(var3)(var0);
                if (!var0) {
                    _fun38698_ip = 68;
                    continue _fun38698
                }
            case 65:
                var0 = var1;
            case 68:
                return var0;
        }
    };
    var2.useIsStageSpeakingDisabledForCurrentUser = var3;
    var3 = function() { // Original name: isStageSpeakingDisabledForCurrentUser, environment: var1
        _fun38699: for (var _fun38699_ip = 0;;) switch (_fun38699_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 4;
                var0 = var4[var0];
                var2 = undefined;
                var1 = var3.bind(var2)(var0);
                var0 = var1.isVerifiedTeen;
                var1 = var0.bind(var1)();
                var0 = 5;
                var0 = var4[var0];
                var3 = var3.bind(var2)(var0);
                var2 = var3.getIsStagePawtectEnabled;
                var0 = 'isStageSpeakingDisabledForCurrentUser';
                var0 = var2.bind(var3)(var0);
                if (!var0) {
                    _fun38699_ip = 68;
                    continue _fun38699
                }
            case 65:
                var0 = var1;
            case 68:
                return var0;
        }
    };
    var2.isStageSpeakingDisabledForCurrentUser = var3;
    var3 = function(arg0) { // Original name: shouldAgeVerifyToSpeakForCurrentUser, environment: var1
        _fun38700: for (var _fun38700_ip = 0;;) switch (_fun38700_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.isVerifiedAdult;
                var2 = var1.bind(var2)();
                var1 = null;
                if (!(var1 == var6)) {
                    _fun38700_ip = 58;
                    continue _fun38700
                }
            case 44:
                var5 = _closure1_slot4;
                var3 = var5.getChannelId;
                var6 = var3.bind(var5)();
            case 58:
                var3 = var1 != var6;
                var7 = null;
                if (!var3) {
                    _fun38700_ip = 81;
                    continue _fun38700
                }
            case 67:
                var5 = _closure1_slot2;
                var3 = var5.getChannel;
                var7 = var3.bind(var5)(var6);
            case 81:
                var1 = var1 != var7;
                if (!var1) {
                    _fun38700_ip = 114;
                    continue _fun38700
                }
            case 88:
                var6 = _closure1_slot3;
                var5 = var6.can;
                var3 = _closure1_slot5;
                var3 = var3.REQUEST_TO_SPEAK;
                var1 = var5.bind(var6)(var3, var7);
            case 114:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var0 = var5[var0];
                var4 = var3.bind(var4)(var0);
                var3 = var4.getIsStagePawtectEnabled;
                var0 = 'shouldAgeVerifyToSpeakForCurrentUser';
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun38700_ip = 155;
                    continue _fun38700
                }
            case 152:
                var0 = !var2;
            case 155:
                if (!var0) {
                    _fun38700_ip = 161;
                    continue _fun38700
                }
            case 158:
                var0 = var1;
            case 161:
                return var0;
        }
    };
    var2.shouldAgeVerifyToSpeakForCurrentUser = var3;
    var3 = function(arg0) { // Original name: useShouldAgeVerifyToSpeakForCurrentUser, environment: var1
        _fun38701: for (var _fun38701_ip = 0;;) switch (_fun38701_ip) {
            case 0:
                var8 = arg0;
                var1 = null;
                if (!(var1 == var8)) {
                    _fun38701_ip = 28;
                    continue _fun38701
                }
            case 11:
                var2 = _closure1_slot4;
                var1 = var2.getChannelId;
                var8 = var1.bind(var2)();
            case 28:
                var _closure2_slot0 = var8;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 6;
                var2 = var5[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var9 = _closure1_slot3;
                var2 = new Array(2);
                var2[0] = var9;
                var1 = _closure1_slot2;
                var2[1] = var1;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    _fun38702: for (var _fun38702_ip = 0;;) switch (_fun38702_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            var4 = null;
                            if (!var2) {
                                _fun38702_ip = 39;
                                continue _fun38702
                            }
                        case 18:
                            var3 = _closure1_slot2;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot0;
                            var4 = var2.bind(var3)(var1);
                        case 39:
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun38702_ip = 75;
                                continue _fun38702
                            }
                        case 46:
                            var3 = _closure1_slot3;
                            var2 = var3.can;
                            var1 = _closure1_slot5;
                            var1 = var1.REQUEST_TO_SPEAK;
                            var0 = var2.bind(var3)(var1, var4);
                        case 75:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var2, var0, var1);
                var0 = 4;
                var0 = var5[var0];
                var2 = var4.bind(var3)(var0);
                var0 = var2.useIsVerifiedAdult;
                var2 = var0.bind(var2)();
                var0 = 5;
                var0 = var5[var0];
                var4 = var4.bind(var3)(var0);
                var3 = var4.useIsStagePawtectEnabled;
                var0 = 'useShouldAgeVerifyToSpeakForCurrentUser';
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun38701_ip = 157;
                    continue _fun38701
                }
            case 154:
                var0 = !var2;
            case 157:
                if (!var0) {
                    _fun38701_ip = 163;
                    continue _fun38701
                }
            case 160:
                var0 = var1;
            case 163:
                return var0;
        }
    };
    var2.useShouldAgeVerifyToSpeakForCurrentUser = var3;
    var3 = function(arg0) { // Original name: useShouldShowAgeVerificationPopover, environment: var1
        _fun38703: for (var _fun38703_ip = 0;;) switch (_fun38703_ip) {
            case 0:
                var8 = arg0;
                var1 = null;
                if (!(var1 == var8)) {
                    _fun38703_ip = 28;
                    continue _fun38703
                }
            case 11:
                var2 = _closure1_slot4;
                var1 = var2.getChannelId;
                var8 = var1.bind(var2)();
            case 28:
                var _closure2_slot0 = var8;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 6;
                var2 = var5[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var9 = _closure1_slot3;
                var2 = new Array(2);
                var2[0] = var9;
                var1 = _closure1_slot2;
                var2[1] = var1;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    _fun38704: for (var _fun38704_ip = 0;;) switch (_fun38704_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            var4 = null;
                            if (!var2) {
                                _fun38704_ip = 39;
                                continue _fun38704
                            }
                        case 18:
                            var3 = _closure1_slot2;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot0;
                            var4 = var2.bind(var3)(var1);
                        case 39:
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun38704_ip = 75;
                                continue _fun38704
                            }
                        case 46:
                            var3 = _closure1_slot3;
                            var2 = var3.can;
                            var1 = _closure1_slot5;
                            var1 = var1.REQUEST_TO_SPEAK;
                            var0 = var2.bind(var3)(var1, var4);
                        case 75:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var2, var0, var1);
                var0 = 4;
                var0 = var5[var0];
                var2 = var4.bind(var3)(var0);
                var0 = var2.useIsAgeVerified;
                var2 = var0.bind(var2)();
                var0 = 5;
                var0 = var5[var0];
                var4 = var4.bind(var3)(var0);
                var3 = var4.useIsStagePawtectEnabled;
                var0 = 'useShouldShowAgeVerificationPopover';
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun38703_ip = 157;
                    continue _fun38703
                }
            case 154:
                var0 = !var2;
            case 157:
                if (!var0) {
                    _fun38703_ip = 163;
                    continue _fun38703
                }
            case 160:
                var0 = var1;
            case 163:
                return var0;
        }
    };
    var2.useShouldShowAgeVerificationPopover = var3;
    var1 = function() { // Original name: useShouldShowAgeVerificationForEvent, environment: var1
        _fun38705: for (var _fun38705_ip = 0;;) switch (_fun38705_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 4;
                var0 = var4[var0];
                var2 = undefined;
                var1 = var3.bind(var2)(var0);
                var0 = var1.useIsVerifiedAdult;
                var1 = var0.bind(var1)();
                var0 = 5;
                var0 = var4[var0];
                var3 = var3.bind(var2)(var0);
                var2 = var3.useIsStagePawtectEnabled;
                var0 = 'useShouldShowAgeVerificationForEvent';
                var0 = var2.bind(var3)(var0);
                if (!var0) {
                    _fun38705_ip = 68;
                    continue _fun38705
                }
            case 65:
                var0 = !var1;
            case 68:
                return var0;
        }
    };
    var2.useShouldShowAgeVerificationForEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3050, 1661, 483, 4206, 12222, 566, 2]);