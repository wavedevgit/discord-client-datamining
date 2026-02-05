// modules/nuf/native/NewUserUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun113995: for (var _fun113995_ip = 0;;) switch (_fun113995_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113995_ip = 150;
                            continue _fun113995
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var6 = undefined;
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.isMetaQuest;
                        var1 = var1.bind(var2)();
                        var1 = !var1;
                        var2 = !var1;
                        if (!var1) {
                            _fun113995_ip = 144;
                            continue _fun113995
                        }
                    case 54:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 8;
                        var1 = var5[var1];
                        var3 = var3.bind(var6)(var1);
                        var1 = var3.checkContactPermissions;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun113995_ip = 147;
                            continue _fun113995
                        }
                    case 94:
                        var3 = _closure1_slot9;
                        var3 = var3.UNAUTHORIZED;
                        var3 = var1 === var3;
                        if (!var3) {
                            _fun113995_ip = 141;
                            continue _fun113995
                        }
                    case 111:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.isIOS;
                        var3 = var4.bind(var5)();
                    case 141:
                        var2 = var3;
                    case 144:
                        return var2;
                    case 147:
                        return var1;
                    case 150:
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
    var0 = function arg0() {
        _fun113996: for (var _fun113996_ip = 0;;) switch (_fun113996_ip) {
            case 0:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var3 = var2[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var3);
                var6 = var7.trackNUFStep;
                var4 = arg0;
                var3 = 'NUF Complete';
                var3 = var6.bind(var7)(var4, var3);
                var3 = 14;
                var3 = var2[var3];
                var4 = var5.bind(var0)(var3);
                var3 = var4.isModalOpen;
                var6 = 15;
                var2 = var2[var6];
                var2 = var5.bind(var0)(var2);
                var2 = var2.NEW_USER_MODAL_KEY;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun113996_ip = 140;
                    continue _fun113996
                }
            case 90:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 16;
                var3 = var2[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.popWithKey;
                var5 = _closure1_slot0;
                var2 = var2[var6];
                var2 = var5.bind(var0)(var2);
                var2 = var2.NEW_USER_MODAL_KEY;
                var2 = var3.bind(var4)(var2);
            case 140:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 17;
                var4 = var3[var4];
                var6 = var2.bind(var0)(var4);
                var5 = var6.transitionTo;
                var1 = _closure1_slot8;
                var4 = var1.ME;
                var1 = {};
                var7 = true;
                var1.navigationReplace = var7;
                var1 = var5.bind(var6)(var4, var1);
                var1 = 18;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setNewUserFlowCompleted;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var1;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun114000: for (var _fun114000_ip = 0;;) switch (_fun114000_ip) {
                    case 0:
                        StartGenerator();
                        var15 = arguments[0];
                        var4 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun114000_ip = 377;
                            continue _fun114000
                        }
                    case 16:
                        var6 = undefined;
                        if (!(var15 === var6)) {
                            _fun114000_ip = 24;
                            continue _fun114000
                        }
                    case 22:
                        var15 = false;
                    case 24:
                        SaveGenerator(address = 28);
                    case 26:
                        return var6;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun114000_ip = 374;
                            continue _fun114000
                        }
                    case 37:
                        var3 = _closure1_slot13;
                        var5 = var3[var4];
                        var13 = null;
                        var7 = var13 == var5;
                        var3 = undefined;
                        if (var7) {
                            _fun114000_ip = 64;
                            continue _fun114000
                        }
                    case 59:
                        var3 = var5.key;
                    case 64:
                        var7 = var13 != var3;
                        var5 = 'registration';
                        if (!var7) {
                            _fun114000_ip = 78;
                            continue _fun114000
                        }
                    case 75:
                        var5 = var3;
                    case 78:
                        var7 = arguments[2];
                        var3 = 1;
                        var3 = var7 + var3;
                        var7 = _closure1_slot13;
                        var7 = var7.length;
                        if (!(!(var3 >= var7))) {
                            _fun114000_ip = 343;
                            continue _fun114000
                        }
                    case 104:
                        var7 = _closure1_slot13;
                        var8 = var7[var3];
                        var11 = var8.key;
                        var7 = var8.shouldShowStep;
                        var12 = var8.transitionStep;
                        var7 = var7.bind(var6)();
                        SaveGenerator(address = 137);
                    case 135:
                        return var7;
                    case 137:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun114000_ip = 340;
                            continue _fun114000
                        }
                    case 146:
                        if (var7) {
                            _fun114000_ip = 182;
                            continue _fun114000
                        }
                    case 149:
                        var8 = _closure1_slot16;
                        var9 = var8.bind(var6)(var15, var4, var3);
                        SaveGenerator(address = 164);
                    case 162:
                        return var9;
                    case 164:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 8);
                        var10 = var8;
                        var8 = var9;
                        if (!var10) {
                            _fun114000_ip = 337;
                            continue _fun114000
                        }
                    case 179:
                        return var9;
                    case 182:
                        var10 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var9 = 13;
                        var9 = var14[var9];
                        var14 = var10.bind(var6)(var9);
                        var10 = var14.trackNUFStep;
                        var9 = {};
                        var9.skip = var15;
                        var9 = var10.bind(var14)(var5, var11, var9);
                        if (!(var13 == var12)) {
                            _fun114000_ip = 272;
                            continue _fun114000
                        }
                    case 226:
                        var9 = {};
                        var9.lastShownStepIndex = var3;
                        var9.onboardingStepIndex = var3;
                        var10 = _closure1_slot13;
                        var14 = var10[var3];
                        var15 = var13 == var14;
                        var10 = undefined;
                        if (var15) {
                            _fun114000_ip = 261;
                            continue _fun114000
                        }
                    case 255:
                        var10 = var14.transitionStep;
                    case 261:
                        var10 = var13 == var10;
                        var9.continueNavigation = var10;
                        _fun114000_ip = 334;
                        continue _fun114000;
                    case 272:
                        var10 = _closure1_slot15;
                        var10 = var10.bind(var6)(var11);
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var10 = 11;
                        var10 = var13[var10];
                        var11 = var11.bind(var6)(var10);
                        var10 = var11.wait;
                        var10 = var10.bind(var11)(var12);
                        var10 = {};
                        var10.lastShownStepIndex = var3;
                        var10.onboardingStepIndex = var3;
                        var11 = false;
                        var10.continueNavigation = var11;
                        var9 = var10;
                    case 334:
                        var8 = var9;
                    case 337:
                        return var8;
                    case 340:
                        return var7;
                    case 343:
                        var2 = _closure1_slot15;
                        var2 = var2.bind(var6)(var5);
                        var2 = {};
                        var2.lastShownStepIndex = var4;
                        var2.onboardingStepIndex = var3;
                        var3 = false;
                        var2.continueNavigation = var3;
                        return var2;
                    case 374:
                        return var1;
                    case 377:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var10 = var7.bind(var0)(var4);
    var _closure1_slot3 = var10;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.PlatformTypes;
    var _closure1_slot7 = var7;
    var4 = var4.Routes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ContactPermissions;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NotificationAuthorizationStatus;
    var _closure1_slot10 = var4;
    var7 = {};
    var4 = 'choose-avatar';
    var7.key = var4;
    var4 = function() {
        _fun114001: for (var _fun114001_ip = 0;;) switch (_fun114001_ip) {
            case 0:
                var1 = _closure1_slot6;
                var0 = var1.getCurrentUser;
                var2 = var0.bind(var1)();
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun114001_ip = 33;
                    continue _fun114001
                }
            case 27:
                var0 = var2.avatar;
            case 33:
                var0 = var1 == var0;
                return var0;
        }
    };
    var7.shouldShowStep = var4;
    var9 = {};
    var4 = 'enable-notification';
    var9.key = var4;
    var4 = function*() { // Environment: var3
        var0 = function*() { // Original name: ?anon_0_, environment: var0
            _fun114003: for (var _fun114003_ip = 0;;) switch (_fun114003_ip) {
                case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun114003_ip = 103;
                        continue _fun114003
                    }
                case 7:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.isIOS;
                    var1 = var1.bind(var2)();
                    var2 = !var1;
                    var1 = !var2;
                    if (var2) {
                        _fun114003_ip = 100;
                        continue _fun114003
                    }
                case 51:
                    var2 = _closure1_slot4;
                    var4 = var2.NativePermissionManager;
                    var2 = var4.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address = 75);
                case 73:
                    return var2;
                case 75:
                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                    if (var4) {
                        _fun114003_ip = 97;
                        continue _fun114003
                    }
                case 81:
                    var3 = _closure1_slot10;
                    var3 = var3.AUTHORIZED;
                    var1 = var2 !== var3;
                    _fun114003_ip = 100;
                    continue _fun114003;
                case 97:
                    return var2;
                case 100:
                    return var1;
                case 103:
                    return var0;
            }
        };
        return var0;
    };
    var4 = var10.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = function() { // Environment: var3
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var9.shouldShowStep = var4;
    var8 = {};
    var4 = 'contact-sync';
    var8.key = var4;
    var4 = function*() { // Environment: var3
        var0 = function*() { // Original name: ?anon_0_, environment: var0
            _fun114006: for (var _fun114006_ip = 0;;) switch (_fun114006_ip) {
                case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun114006_ip = 90;
                        continue _fun114006
                    }
                case 7:
                    var3 = _closure1_slot5;
                    var2 = var3.getLocalAccount;
                    var1 = _closure1_slot7;
                    var1 = var1.CONTACTS;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun114006_ip = 50;
                        continue _fun114006
                    }
                case 44:
                    var1 = var2.friendSync;
                case 50:
                    if (var1) {
                        _fun114006_ip = 84;
                        continue _fun114006
                    }
                case 53:
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
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    SaveGenerator(address = 72);
                case 70:
                    return var2;
                case 72:
                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                    var1 = var2;
                    if (!var3) {
                        _fun114006_ip = 84;
                        continue _fun114006
                    }
                case 81:
                    return var2;
                case 84:
                    var1 = !var1;
                    return var1;
                case 90:
                    return var0;
            }
        };
        return var0;
    };
    var4 = var10.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = function() { // Environment: var3
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var8.shouldShowStep = var4;
    var4 = new Array(5);
    var4[0] = var9;
    var4[1] = var8;
    var8 = {};
    var9 = 'discoverability';
    var8.key = var9;
    var9 = function() {
        var0 = true;
        return var0;
    };
    var8.shouldShowStep = var9;
    var4[2] = var8;
    var4[3] = var7;
    var7 = {};
    var8 = 'accept-invite';
    var7.key = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.hasDeferredInvite;
    var7.shouldShowStep = var8;
    var8 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'DEFERRED_INVITE_SHOW';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var7.transitionStep = var8;
    var4[4] = var7;
    var _closure1_slot13 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/NewUserUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun114011: for (var _fun114011_ip = 0;;) switch (_fun114011_ip) {
            case 0:
                var1 = _closure1_slot13;
                var0 = arg0;
                var1 = var1[var0];
                var0 = null;
                var2 = var0 == var1;
                var0 = undefined;
                if (var2) {
                    _fun114011_ip = 30;
                    continue _fun114011
                }
            case 25:
                var0 = var1.key;
            case 30:
                return var0;
        }
    };
    var2.getKeyForOnboardingStep = var4;
    var3 = function arg0, arg1() {
        _fun114012: for (var _fun114012_ip = 0;;) switch (_fun114012_ip) {
            case 0:
                var5 = arg1;
                var _closure2_slot0 = var5;
                var2 = _closure1_slot13;
                var0 = arg0;
                var3 = var2[var0];
                var2 = null;
                var6 = var2 == var3;
                var0 = undefined;
                var4 = undefined;
                if (var6) {
                    _fun114012_ip = 41;
                    continue _fun114012
                }
            case 36:
                var4 = var3.key;
            case 41:
                if (!(var2 !== var4)) {
                    _fun114012_ip = 86;
                    continue _fun114012
                }
            case 45:
                var3 = var5.navigate;
                var2 = {};
                var2 = var3.bind(var5)(var4, var2);
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() { // Environment: var1
                    _fun114013: for (var _fun114013_ip = 0;;) switch (_fun114013_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.getState;
                            var5 = var1.bind(var2)();
                            var2 = var5.routes;
                            var3 = var2.length;
                            var1 = 2;
                            if (!(var1 === var3)) {
                                _fun114013_ip = 138;
                                continue _fun114013
                            }
                        case 35:
                            var1 = 1;
                            var1 = var2[var1];
                            var6 = new Array(1);
                            var6[0] = var1;
                            var2 = _closure2_slot0;
                            var1 = var2.dispatch;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 12;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var4 = var0.CommonActions;
                            var3 = var4.reset;
                            var0 = {};
                            var8 = var0;
                            var7 = var5;
                            var5 = copyDataProperties(var8, var7);
                            var5 = 'routes';
                            var0[var5] = var6;
                            var6 = 0;
                            var5 = 'index';
                            var0[var5] = var6;
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                        case 138:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = 500;
                var1 = var3.bind(var0)(var2, var1);
            case 86:
                return var0;
        }
    };
    var2.continueToNextStep = var3;
    var2.getNextOnboardingStep = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 4519, 1621, 660, 10334, 4013, 4106, 10342, 478, 8350, 806, 1470, 10286, 3919, 14628, 4561, 1220, 10339, 2]);