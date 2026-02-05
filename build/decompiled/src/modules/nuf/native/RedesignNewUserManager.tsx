// modules/nuf/native/RedesignNewUserManager.tsx
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
        _fun113981: for (var _fun113981_ip = 0;;) switch (_fun113981_ip) {
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
            case 72: // try_end0
                _fun113981_ip = 76;
                continue _fun113981;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
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
    var7 = var3.initialize;
    var _closure1_slot8 = var7;
    var3 = var3.ContactSyncModes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun113985: for (var _fun113985_ip = 0;;) switch (_fun113985_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113985_ip = 86;
                        continue _fun113985
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113985_ip = 120;
                    continue _fun113985;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = -1;
                    var0._onboardingStepIndex = var2;
                    var0._lastShownStepIndex = var2;
                    var2 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleOnboardingStart;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.ONBOARDING_START = var3;
                    var0.actions = var2;
                    var2 = function() { // Environment: var1
                        _fun113988: for (var _fun113988_ip = 0;;) switch (_fun113988_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 7;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.hasDeferredInvite;
                                var2 = var2.bind(var3)();
                                var3 = _closure1_slot8;
                                var4 = _closure1_slot9;
                                if (var2) {
                                    _fun113988_ip = 54;
                                    continue _fun113988
                                }
                            case 46:
                                var2 = var4.ONBOARDING;
                                _fun113988_ip = 60;
                                continue _fun113988;
                            case 54:
                                var2 = var4.ONBOARDING_INVITE;
                            case 60:
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 8;
                                var1 = var3[var1];
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.getNextOnboardingStep;
                                var2 = false;
                                var1 = -1;
                                var3 = var3.bind(var4)(var2, var1, var1);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var1
                                    _fun113989: for (var _fun113989_ip = 0;;) switch (_fun113989_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0.lastShownStepIndex;
                                            var1 = var0.onboardingStepIndex;
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var0 = 8;
                                            var2 = var2[var0];
                                            var0 = undefined;
                                            var4 = var4.bind(var0)(var2);
                                            var2 = var4.getKeyForOnboardingStep;
                                            var2 = var2.bind(var4)(var1);
                                            var4 = null;
                                            if (!(var4 != var2)) {
                                                _fun113989_ip = 224;
                                                continue _fun113989
                                            }
                                        case 60:
                                            var5 = _closure1_slot1;
                                            var9 = _closure1_slot2;
                                            var4 = 9;
                                            var4 = var9[var4];
                                            var6 = var5.bind(var0)(var4);
                                            var5 = var6.pushLazy;
                                            var8 = _closure1_slot0;
                                            var3 = 11;
                                            var3 = var9[var3];
                                            var7 = var8.bind(var0)(var3);
                                            var3 = 10;
                                            var4 = var9[var3];
                                            var3 = var9.paths;
                                            var4 = var7.bind(var0)(var4, var3);
                                            var3 = {};
                                            var3.initialRouteName = var2;
                                            var3.initialOnboardingStepIndex = var1;
                                            var1 = 12;
                                            var1 = var9[var1];
                                            var1 = var8.bind(var0)(var1);
                                            var2 = var1.NEW_USER_MODAL_KEY;
                                            var1 = {
                                                'fullScreenGestureEnabled': false,
                                                'presentation': null,
                                                'animation': 'slide_from_bottom'
                                            };
                                            var7 = 13;
                                            var7 = var9[var7];
                                            var8 = var8.bind(var0)(var7);
                                            var7 = var8.isAndroid;
                                            var8 = var7.bind(var8)();
                                            var7 = 'card';
                                            if (!var8) {
                                                _fun113989_ip = 199;
                                                continue _fun113989
                                            }
                                        case 193:
                                            var7 = 'transparentModal';
                                        case 199:
                                            var1.presentation = var7;
                                            var14 = var6;
                                            var13 = var4;
                                            var12 = var3;
                                            var11 = var2;
                                            var10 = var1;
                                            var1 = var14[var5](var13, var12, var11, var10, var9);
                                        case 224:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.startOnboarding = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.startOnboarding;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleOnboardingStart = var2;
                    var1 = function() { // Environment: var1
                        _fun113991: for (var _fun113991_ip = 0;;) switch (_fun113991_ip) {
                            case 0:
                                var2 = _closure1_slot10;
                                var1 = var2.getType;
                                var2 = var1.bind(var2)();
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun113991_ip = 75;
                                    continue _fun113991
                                }
                            case 23:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.isModalOpen;
                                var0 = var0.bind(var1)();
                                if (var0) {
                                    _fun113991_ip = 75;
                                    continue _fun113991
                                }
                            case 58:
                                var1 = _closure3_slot0;
                                var0 = var1.startOnboarding;
                                var0 = var0.bind(var1)();
                            case 75:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleConnectionOpen = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/RedesignNewUserManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 10333, 3473, 8350, 14627, 4561, 14629, 1307, 14628, 478, 3919, 4299, 2]);