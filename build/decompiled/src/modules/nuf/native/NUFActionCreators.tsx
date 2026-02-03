// modules/nuf/native/NUFActionCreators.tsx
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
                _fun80868: for (var _fun80868_ip = 0;;) switch (_fun80868_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun80868_ip = 260;
                            continue _fun80868
                        }
                    case 13:
                        var3 = _closure1_slot9;
                        var1 = var3.getCurrentUser;
                        var5 = var1.bind(var3)();
                        var4 = null;
                        var6 = var4 == var5;
                        var3 = undefined;
                        var1 = undefined;
                        if (var6) {
                            _fun80868_ip = 48;
                            continue _fun80868
                        }
                    case 42:
                        var1 = var5.phone;
                    case 48:
                        var8 = _closure1_slot8;
                        var6 = var8.getLocalAccount;
                        var5 = _closure1_slot12;
                        var5 = var5.CONTACTS;
                        var9 = var6.bind(var8)(var5);
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var5 = 17;
                        var6 = var6[var5];
                        var8 = var8.bind(var3)(var6);
                        var6 = var8.isContactSyncEnabled;
                        var8 = var6.bind(var8)(var9);
                        if (!(var4 != var1)) {
                            _fun80868_ip = 224;
                            continue _fun80868
                        }
                    case 108:
                        var1 = _closure1_slot6;
                        var1 = var1.bind(var3)(var7);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 18;
                        var1 = var6[var1];
                        var6 = var4.bind(var3)(var1);
                        var4 = var6.updateContactSyncEnabled;
                        var1 = {};
                        var1.enabled = var8;
                        var1.name = var7;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 162);
                    case 160:
                        return var1;
                    case 162:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun80868_ip = 221;
                            continue _fun80868
                        }
                    case 168:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var6 = var4.bind(var3)(var2);
                        var5 = var6.uploadContacts;
                        var4 = '[]';
                        var2 = true;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address = 209);
                    case 207:
                        return var2;
                    case 209:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun80868_ip = 218;
                            continue _fun80868
                        }
                    case 215:
                        return var3;
                    case 218:
                        return var2;
                    case 221:
                        return var1;
                    case 224:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var11 = 'Cannot start contact sync without a phone number';
                        var12 = var2;
                        var1 = new var12[var3](var11, var10);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 260:
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.setAllowEmail;
    var _closure1_slot4 = var7;
    var7 = var3.setAllowSync;
    var _closure1_slot5 = var7;
    var7 = var3.setName;
    var _closure1_slot6 = var7;
    var3 = var3.useContactSyncModalStore;
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NUF_DISCOVERABILITY_MODAL_KEY;
    var _closure1_slot10 = var6;
    var3 = var3.NUF_IN_APP_EDUCATION_KEY;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IN_APP_GUILD_TEMPLATES_MODAL_KEY;
    var _closure1_slot13 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/NUFActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ONBOARDING_START';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.startOnboarding = var3;
    var3 = function(arg0) { // Environment: var1
        _fun80870: for (var _fun80870_ip = 0;;) switch (_fun80870_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.skip;
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun80870_ip = 17;
                    continue _fun80870
                }
            case 15:
                var5 = false;
            case 17:
                var4 = var1.skipAttempt;
                if (!(var4 === var0)) {
                    _fun80870_ip = 29;
                    continue _fun80870
                }
            case 27:
                var4 = false;
            case 29:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'ONBOARDING_STEP';
                var1.type = var6;
                var1.skip = var5;
                var1.skipAttempt = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.nextOnboardingStep = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {
            'type': 'ONBOARDING_STEP',
            'back': true
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.previousOnboardingStep = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 8;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun80874: for (var _fun80874_ip = 0;;) switch (_fun80874_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun80874_ip = 91;
                            continue _fun80874
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 10;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 9;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var3.bind(var4)(var2, var1);
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun80874_ip = 88;
                            continue _fun80874
                        }
                    case 60:
                        var2 = var1.default;
                        var3 = {};
                        var4 = _closure2_slot0;
                        var3.animation = var4;
                        var2.modalConfig = var3;
                        return var2;
                    case 88:
                        return var1;
                    case 91:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var0)(var2);
        var2 = _closure1_slot13;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.transitionToNUFGuildTemplatesModal = var3;
    var3 = function arg0() {
        _fun80875: for (var _fun80875_ip = 0;;) switch (_fun80875_ip) {
            case 0:
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun80875_ip = 11;
                    continue _fun80875
                }
            case 9:
                var1 = false;
            case 11:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.open;
                var2 = {};
                var5 = function arg0() {
                    _fun80876: for (var _fun80876_ip = 0;;) switch (_fun80876_ip) {
                        case 0:
                            var1 = arg0;
                            if (var1) {
                                _fun80876_ip = 55;
                                continue _fun80876
                            }
                        case 9:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'ONBOARDING_STEP';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun80876_ip = 87;
                            continue _fun80876;
                        case 55:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.setNewUserFlowCompleted;
                            var0 = var0.bind(var1)();
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.onCloseExtra = var5;
                var2.displayStudentPrompt = var1;
                var1 = arg0;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.transitionToHubEmailConnectionModal = var3;
    var3 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var4 = var5.pushLazy;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun80879: for (var _fun80879_ip = 0;;) switch (_fun80879_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun80879_ip = 116;
                            continue _fun80879
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 10;
                        var2 = var1[var2];
                        var6 = undefined;
                        var3 = var3.bind(var6)(var2);
                        var2 = 13;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var3.bind(var6)(var2, var1);
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun80879_ip = 113;
                            continue _fun80879
                        }
                    case 60:
                        var2 = var1.default;
                        var3 = {};
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 14;
                        var4 = var7[var4];
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.ModalAnimation;
                        var4 = var4.SLIDE_IN_OUT;
                        var3.animation = var4;
                        var2.modalConfig = var3;
                        return var2;
                    case 113:
                        return var1;
                    case 116:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var0)(var2);
        var2 = _closure1_slot10;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.openDiscoverabilityModal = var3;
    var3 = function() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 15;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 10;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 16;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot11;
        var1 = {};
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openInAppEducationActionSheet = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 8;
        var4 = var3[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var4);
        var4 = var5.popWithKey;
        var1 = _closure1_slot10;
        var1 = var4.bind(var5)(var1);
        var1 = 7;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ONBOARDING_STEP';
        var1.type = var4;
        var4 = arg0;
        var1.skip = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.closeDiscoverabilityModal = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.startContactSyncForDiscoverability = var3;
    var1 = function() {
        _fun80883: for (var _fun80883_ip = 0;;) switch (_fun80883_ip) {
            case 0:
                var1 = _closure1_slot9;
                var0 = var1.getCurrentUser;
                var1 = var0.bind(var1)();
                var4 = null;
                var5 = var4 == var1;
                var0 = undefined;
                var3 = undefined;
                if (var5) {
                    _fun80883_ip = 35;
                    continue _fun80883
                }
            case 29:
                var3 = var1.phone;
            case 35:
                var5 = _closure1_slot7;
                var1 = var5.getState;
                var5 = var1.bind(var5)();
                var1 = var5.allowPhone;
                var5 = var5.allowEmail;
                if (var1) {
                    _fun80883_ip = 67;
                    continue _fun80883
                }
            case 64:
                var1 = var5;
            case 67:
                if (!(var4 == var3)) {
                    _fun80883_ip = 100;
                    continue _fun80883
                }
            case 71:
                var4 = _closure1_slot5;
                var3 = false;
                var3 = var4.bind(var0)(var3);
                if (var1) {
                    _fun80883_ip = 98;
                    continue _fun80883
                }
            case 85:
                var4 = _closure1_slot4;
                var3 = true;
                var3 = var4.bind(var0)(var3);
                _fun80883_ip = 112;
                continue _fun80883;
            case 98:
                _fun80883_ip = 112;
                continue _fun80883;
            case 100:
                var2 = _closure1_slot5;
                var1 = !var1;
                var1 = var2.bind(var0)(var1);
            case 112:
                return var0;
        }
    };
    var2.toggleDiscoverabilityForUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 10293, 4515, 1613, 10295, 660, 7538, 806, 4557, 10296, 1307, 10291, 10299, 10300, 670, 3269, 10310, 10302, 10301, 2]);