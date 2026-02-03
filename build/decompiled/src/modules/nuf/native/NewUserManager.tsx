// modules/nuf/native/NewUserManager.tsx
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
        _fun113820: for (var _fun113820_ip = 0;;) switch (_fun113820_ip) {
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
                _fun113820_ip = 76;
                continue _fun113820;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NewUserTypes;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HUBS_IN_ONBOARDING_COUNTRIES;
    var _closure1_slot15 = var3;
    var8 = {};
    var3 = 'Registration';
    var8.REGISTRATION = var3;
    var3 = 'Add Avatar';
    var8.ADD_AVATAR = var3;
    var3 = 'Contact Sync';
    var8.CONTACT_SYNC = var3;
    var3 = 'Guild Template';
    var8.GUILD_TEMPLATE = var3;
    var3 = 'Student Hub';
    var8.STUDENT_HUB = var3;
    var3 = 'New User Intent';
    var8.NEW_USER_INTENT = var3;
    var3 = 'Accept Invite';
    var8.ACCEPT_INVITE = var3;
    var3 = 'Discoverability';
    var8.DISCOVERABILITY = var3;
    var3 = 'In App Education';
    var8.IN_APP_EDUCATION = var3;
    var9 = {};
    var3 = var8.ADD_AVATAR;
    var9.key = var3;
    var3 = function() {
        _fun113823: for (var _fun113823_ip = 0;;) switch (_fun113823_ip) {
            case 0:
                var1 = _closure1_slot11;
                var0 = var1.getCurrentUser;
                var2 = var0.bind(var1)();
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun113823_ip = 33;
                    continue _fun113823
                }
            case 27:
                var0 = var2.avatar;
            case 33:
                var0 = var1 == var0;
                return var0;
        }
    };
    var9.shouldShowStep = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.openAddAvatarModal;
    var9.transitionToStep = var3;
    var7 = {};
    var3 = var8.CONTACT_SYNC;
    var7.key = var3;
    var3 = function() {
        _fun113824: for (var _fun113824_ip = 0;;) switch (_fun113824_ip) {
            case 0:
                var3 = _closure1_slot10;
                var2 = var3.getLocalAccount;
                var0 = _closure1_slot14;
                var0 = var0.CONTACTS;
                var3 = var2.bind(var3)(var0);
                var2 = null;
                var0 = var2 == var3;
                if (var0) {
                    _fun113824_ip = 46;
                    continue _fun113824
                }
            case 37:
                var3 = var3.friendSync;
                var0 = !var3;
            case 46:
                if (!var0) {
                    _fun113824_ip = 81;
                    continue _fun113824
                }
            case 49:
                var3 = _closure1_slot11;
                var1 = var3.getCurrentUser;
                var3 = var1.bind(var3)();
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun113824_ip = 77;
                    continue _fun113824
                }
            case 71:
                var1 = var3.phone;
            case 77:
                var0 = var2 != var1;
            case 81:
                return var0;
        }
    };
    var7.shouldShowStep = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.openContactSyncModalOnboarding;
    var7.transitionToStep = var3;
    var3 = new Array(7);
    var3[0] = var9;
    var9 = {};
    var10 = var8.DISCOVERABILITY;
    var9.key = var10;
    var10 = function() {
        var2 = _closure1_slot10;
        var1 = var2.getLocalAccount;
        var0 = _closure1_slot14;
        var0 = var0.CONTACTS;
        var1 = var1.bind(var2)(var0);
        var0 = null;
        var0 = var0 == var1;
        return var0;
    };
    var9.shouldShowStep = var10;
    var10 = 15;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.openDiscoverabilityModal;
    var9.transitionToStep = var10;
    var3[1] = var9;
    var3[2] = var7;
    var7 = {};
    var9 = var8.STUDENT_HUB;
    var7.key = var9;
    var9 = function() {
        _fun113826: for (var _fun113826_ip = 0;;) switch (_fun113826_ip) {
            case 0:
                var2 = _closure1_slot12;
                var1 = var2.getType;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot13;
                var1 = var1.ORGANIC_REGISTERED;
                if (!(var2 === var1)) {
                    _fun113826_ip = 78;
                    continue _fun113826
                }
            case 31:
                var2 = _closure1_slot9;
                var1 = var2.getCountryCode;
                var3 = var1.bind(var2)();
                var2 = _closure1_slot15;
                var1 = var2.includes;
                var0 = null;
                var4 = var0 == var3;
                var0 = undefined;
                if (var4) {
                    _fun113826_ip = 71;
                    continue _fun113826
                }
            case 65:
                var0 = var3.alpha2;
            case 71:
                var0 = var1.bind(var2)(var0);
                return var0;
            case 78:
                var0 = false;
                return var0;
        }
    };
    var7.shouldShowStep = var9;
    var9 = function() {
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 15;
        var1 = var5[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.transitionToHubEmailConnectionModal;
        var1 = 16;
        var1 = var5[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.ModalAnimation;
        var2 = var1.SLIDE_IN;
        var1 = true;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var7.transitionToStep = var9;
    var3[3] = var7;
    var7 = {};
    var9 = var8.GUILD_TEMPLATE;
    var7.key = var9;
    var9 = function() {
        var2 = _closure1_slot12;
        var1 = var2.getType;
        var1 = var1.bind(var2)();
        var0 = _closure1_slot13;
        var0 = var0.ORGANIC_REGISTERED;
        var0 = var1 === var0;
        return var0;
    };
    var7.shouldShowStep = var9;
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 15;
        var0 = var5[var0];
        var3 = undefined;
        var2 = var4.bind(var3)(var0);
        var1 = var2.transitionToNUFGuildTemplatesModal;
        var0 = 16;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.ModalAnimation;
        var0 = var0.SLIDE_IN;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.transitionToStep = var9;
    var3[4] = var7;
    var7 = {};
    var9 = var8.ACCEPT_INVITE;
    var7.key = var9;
    var9 = 17;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.hasDeferredInvite;
    var7.shouldShowStep = var9;
    var9 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 18;
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
    var7.transitionToStep = var9;
    var3[5] = var7;
    var7 = {};
    var8 = var8.IN_APP_EDUCATION;
    var7.key = var8;
    var8 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 19;
        var4 = var3[var0];
        var1 = undefined;
        var4 = var2.bind(var1)(var4);
        var6 = var4.IOSInAppEducationExperiment;
        var5 = var6.trackExposure;
        var4 = {};
        var7 = 'NUF';
        var4.location = var7;
        var4 = var5.bind(var6)(var4);
        var0 = var3[var0];
        var0 = var2.bind(var1)(var0);
        var3 = var0.IOSInAppEducationExperiment;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = '900c10_3';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabled;
        return var0;
    };
    var7.shouldShowStep = var8;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.openInAppEducationActionSheet;
        var1 = var1.bind(var2)();
        return var0;
    };
    var7.transitionToStep = var8;
    var3[6] = var7;
    var _closure1_slot16 = var3;
    var3 = 22;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun113834: for (var _fun113834_ip = 0;;) switch (_fun113834_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var7 = var7.bind(var2)(var4, var3);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var3);
                    var3 = _closure1_slot6;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun113834_ip = 86;
                        continue _fun113834
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113834_ip = 120;
                    continue _fun113834;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var3.bind(var2)(var4, var0);
                    var _closure3_slot0 = var0;
                    var3 = -1;
                    var0._onboardingStepIndex = var3;
                    var3 = null;
                    var0._lastStep = var3;
                    var3 = {};
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleOnboardingStep;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var3.ONBOARDING_STEP = var4;
                    var0.actions = var3;
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun113838: for (var _fun113838_ip = 0;;) switch (_fun113838_ip) {
                                    case 0:
                                        StartGenerator();
                                        var1 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun113838_ip = 553;
                                            continue _fun113838
                                        }
                                    case 13:
                                        var16 = var1.skip;
                                        var3 = undefined;
                                        if (!(var16 === var3)) {
                                            _fun113838_ip = 27;
                                            continue _fun113838
                                        }
                                    case 25:
                                        var16 = false;
                                    case 27:
                                        var4 = var1.skipAttempt;
                                        if (!(var4 === var3)) {
                                            _fun113838_ip = 39;
                                            continue _fun113838
                                        }
                                    case 37:
                                        var4 = false;
                                    case 39:
                                        var5 = var1.back;
                                        if (!(var5 === var3)) {
                                            _fun113838_ip = 51;
                                            continue _fun113838
                                        }
                                    case 49:
                                        var5 = false;
                                    case 51:
                                        SaveGenerator(address = 55);
                                    case 53:
                                        return var3;
                                    case 55:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun113838_ip = 550;
                                            continue _fun113838
                                        }
                                    case 64:
                                        var6 = _closure3_slot0;
                                        var7 = var6._onboardingStepIndex;
                                        var6 = _closure3_slot0;
                                        if (var5) {
                                            _fun113838_ip = 400;
                                            continue _fun113838
                                        }
                                    case 87:
                                        var8 = var6._onboardingStepIndex;
                                        var5 = 1;
                                        var5 = var8 + var5;
                                        var6._onboardingStepIndex = var5;
                                        var9 = var6._onboardingStepIndex;
                                        var5 = _closure1_slot16;
                                        var5 = var5.length;
                                        if (!(!(var9 >= var5))) {
                                            _fun113838_ip = 317;
                                            continue _fun113838
                                        }
                                    case 131:
                                        var9 = _closure1_slot16;
                                        var5 = _closure3_slot0;
                                        var5 = var5._onboardingStepIndex;
                                        var9 = var9[var5];
                                        var15 = var9.key;
                                        var5 = var9.shouldShowStep;
                                        var9 = var9.transitionToStep;
                                        var5 = var5.bind(var3)();
                                        SaveGenerator(address = 174);
                                    case 172:
                                        return var5;
                                    case 174:
                                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 10);
                                        if (var10) {
                                            _fun113838_ip = 314;
                                            continue _fun113838
                                        }
                                    case 183:
                                        if (var5) {
                                            _fun113838_ip = 210;
                                            continue _fun113838
                                        }
                                    case 186:
                                        var12 = _closure3_slot0;
                                        var11 = var12.handleOnboardingStep;
                                        var10 = {};
                                        var10.skip = var16;
                                        var10 = var11.bind(var12)(var10);
                                        _fun113838_ip = 311;
                                        continue _fun113838;
                                    case 210:
                                        var11 = _closure1_slot0;
                                        var12 = _closure1_slot2;
                                        var10 = 20;
                                        var10 = var12[var10];
                                        var14 = var11.bind(var3)(var10);
                                        var13 = var14.trackNUFStep;
                                        var11 = _closure3_slot0;
                                        var12 = var11._lastStep;
                                        var10 = {};
                                        var10.skip = var16;
                                        var10.skip_attempt = var4;
                                        var10 = var13.bind(var14)(var12, var15, var10);
                                        var10 = _closure1_slot16;
                                        var13 = var10[var7];
                                        var10 = null;
                                        var14 = var10 == var13;
                                        var12 = undefined;
                                        if (var14) {
                                            _fun113838_ip = 289;
                                            continue _fun113838
                                        }
                                    case 284:
                                        var12 = var13.key;
                                    case 289:
                                        var13 = var10 != var12;
                                        var10 = null;
                                        if (!var13) {
                                            _fun113838_ip = 301;
                                            continue _fun113838
                                        }
                                    case 298:
                                        var10 = var12;
                                    case 301:
                                        var11._lastStep = var10;
                                        var9 = var9.bind(var3)();
                                    case 311:
                                        return var3;
                                    case 314:
                                        return var5;
                                    case 317:
                                        var5 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var9 = 20;
                                        var9 = var8[var9];
                                        var12 = var5.bind(var3)(var9);
                                        var11 = var12.trackNUFStep;
                                        var9 = _closure3_slot0;
                                        var10 = var9._lastStep;
                                        var9 = {};
                                        var9.skip_attempt = var4;
                                        var4 = 'NUF Complete';
                                        var4 = var11.bind(var12)(var10, var4, var9);
                                        var4 = 21;
                                        var4 = var8[var4];
                                        var5 = var5.bind(var3)(var4);
                                        var4 = var5.setNewUserFlowCompleted;
                                        var4 = var4.bind(var5)();
                                        var4 = undefined;
                                        return var4;
                                    case 400:
                                        var4 = _closure1_slot16;
                                        var8 = var4[var7];
                                        var4 = null;
                                        var9 = var4 == var8;
                                        var7 = undefined;
                                        if (var9) {
                                            _fun113838_ip = 427;
                                            continue _fun113838
                                        }
                                    case 422:
                                        var7 = var8.key;
                                    case 427:
                                        var8 = var4 != var7;
                                        var4 = null;
                                        if (!var8) {
                                            _fun113838_ip = 439;
                                            continue _fun113838
                                        }
                                    case 436:
                                        var4 = var7;
                                    case 439:
                                        var6._lastStep = var4;
                                        var4 = _closure3_slot0;
                                        var6 = var4._onboardingStepIndex;
                                        var2 = 1;
                                        var2 = var6 - var2;
                                        var4._onboardingStepIndex = var2;
                                        var6 = _closure1_slot16;
                                        var2 = var4._onboardingStepIndex;
                                        var2 = var6[var2];
                                        var8 = var2.key;
                                        var2 = var2.transitionToStep;
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var5 = 20;
                                        var5 = var7[var5];
                                        var7 = var6.bind(var3)(var5);
                                        var6 = var7.trackNUFStep;
                                        var5 = var4._lastStep;
                                        var4 = {};
                                        var9 = true;
                                        var4.back = var9;
                                        var4 = var6.bind(var7)(var5, var8, var4);
                                        var2 = var2.bind(var3)();
                                        var2 = undefined;
                                        return var2;
                                    case 550:
                                        return var1;
                                    case 553:
                                        return var0;
                                }
                            };
                            var1 = var0.next;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var1 = var1.bind(var2)();
                    var0.handleOnboardingStep = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot8;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot4;
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
    var14 = var3;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/NewUserManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7, 6, 15, 17, 18, 7478, 4519, 1621, 3473, 10314, 660, 10275, 14588, 10451, 10311, 670, 8328, 806, 13193, 10265, 10318, 4299, 2]);