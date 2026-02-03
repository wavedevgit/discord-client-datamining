// modules/safety_hub/SafetyHubStore.tsx
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
        _fun79720: for (var _fun79720_ip = 0;;) switch (_fun79720_ip) {
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
                _fun79720_ip = 76;
                continue _fun79720;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot32 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var8 = function arg0() {
        _fun79723: for (var _fun79723_ip = 0;;) switch (_fun79723_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun79723_ip = 34;
                    continue _fun79723
                }
            case 9:
                var3 = '';
                _closure1_slot26 = var3;
                _closure1_slot28 = var0;
                var0 = false;
                _closure1_slot29 = var0;
                var0 = undefined;
                return var0;
            case 34:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var1;
                var0 = throwTypeError(var5, var4);
                var0 = undefined;
                throw var0;
        }
    };
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var10 = 0;
    var1 = var5[var10];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.AgeCheckStatus;
    var _closure1_slot8 = var7;
    var11 = var1.AppealIngestionSignal;
    var _closure1_slot9 = var11;
    var1 = var1.AGE_CHECK_MAX_POLL_ATTEMPTS;
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = {};
    var9 = 6;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.AccountStandingState;
    var9 = var9.ALL_GOOD;
    var1.state = var9;
    var _closure1_slot13 = var1;
    var9 = false;
    var _closure1_slot14 = var9;
    var _closure1_slot15 = var9;
    var1 = null;
    var _closure1_slot16 = var1;
    var _closure1_slot17 = var1;
    var _closure1_slot18 = var9;
    var _closure1_slot19 = var9;
    var12 = new Array(0);
    var _closure1_slot20 = var12;
    var _closure1_slot21 = var9;
    var _closure1_slot22 = var1;
    var11 = var11.DIDNT_VIOLATE_POLICY;
    var _closure1_slot23 = var11;
    var11 = '';
    var _closure1_slot24 = var11;
    var _closure1_slot25 = var11;
    var _closure1_slot26 = var11;
    var _closure1_slot27 = var10;
    var _closure1_slot28 = var1;
    var _closure1_slot29 = var9;
    var7 = var7.NONE;
    var _closure1_slot30 = var7;
    var _closure1_slot31 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun79725: for (var _fun79725_ip = 0;;) switch (_fun79725_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot32;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun79725_ip = 69;
                        continue _fun79725
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun79725_ip = 105;
                    continue _fun79725;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'isFetching';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(22);
        var0[0] = var4;
        var4 = {};
        var6 = 'getClassifications';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot11;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getClassification';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot11;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getAccountStanding';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getFetchError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isInitialized';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getClassificationRequestState';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot12;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getAppealClassificationId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getIsDsaEligible';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getIsAppealEligible';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getAppealEligibility';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getAppealSignal';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getFreeTextAppealReason';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot24;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getIsSubmitting';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getSubmitError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getUsername';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getAgeVerificationWebviewUrl';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot26;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getAgeVerificationError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot28;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getIsLoadingAgeVerification';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot29;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getAgeCheckStatus';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot30;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getAgeCheckError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot31;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getAgeCheckAttempts';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.value = var5;
        var0[21] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SafetyHubStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var15 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() {
        var0 = true;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_FETCH_START = var9;
    var9 = function arg0() {
        var0 = arg0;
        var9 = var0.classifications;
        var6 = var0.accountStanding;
        var5 = var0.isDsaEligible;
        var4 = var0.isAppealEligible;
        var3 = var0.username;
        var2 = var0.appealEligibility;
        var8 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 7;
        var7 = var7[var0];
        var0 = undefined;
        var8 = var8.bind(var0)(var7);
        var7 = 'id';
        var7 = var8.bind(var0)(var9, var7);
        _closure1_slot11 = var7;
        _closure1_slot13 = var6;
        _closure1_slot18 = var5;
        _closure1_slot19 = var4;
        var4 = false;
        _closure1_slot14 = var4;
        var4 = true;
        _closure1_slot15 = var4;
        var4 = null;
        _closure1_slot16 = var4;
        _closure1_slot25 = var3;
        _closure1_slot20 = var2;
        return var0;
    };
    var1.SAFETY_HUB_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.error;
        var2 = false;
        _closure1_slot14 = var2;
        _closure1_slot15 = var2;
        _closure1_slot16 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_FETCH_FAILURE = var9;
    var9 = function arg0() {
        var4 = _closure1_slot12;
        var0 = arg0;
        var3 = var0.classificationId;
        var5 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var5.bind(var0)(var1);
        var1 = var1.ClassificationRequestState;
        var1 = var1.PENDING;
        var4[var3] = var1;
        var1 = true;
        _closure1_slot14 = var1;
        return var0;
    };
    var1.SAFETY_HUB_FETCH_CLASSIFICATION_START = var9;
    var9 = function arg0() {
        var1 = arg0;
        var0 = var1.classification;
        var5 = var1.accountStanding;
        var4 = var1.isDsaEligible;
        var2 = var1.username;
        var3 = var1.isAppealEligible;
        var7 = _closure1_slot11;
        var6 = var0.id;
        var7[var6] = var0;
        var8 = _closure1_slot12;
        var7 = var0.id;
        var9 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 6;
        var6 = var6[var0];
        var0 = undefined;
        var6 = var9.bind(var0)(var6);
        var6 = var6.ClassificationRequestState;
        var6 = var6.SUCCESS;
        var8[var7] = var6;
        _closure1_slot13 = var5;
        var5 = false;
        _closure1_slot14 = var5;
        var5 = null;
        _closure1_slot16 = var5;
        _closure1_slot18 = var4;
        _closure1_slot19 = var3;
        var3 = true;
        _closure1_slot15 = var3;
        _closure1_slot25 = var2;
        return var0;
    };
    var1.SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS = var9;
    var9 = function arg0() {
        var1 = arg0;
        var0 = var1.error;
        var5 = var1.classificationId;
        var1 = false;
        _closure1_slot14 = var1;
        _closure1_slot16 = var0;
        var4 = _closure1_slot12;
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 6;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ClassificationRequestState;
        var3 = var3.FAILED;
        var4[var5] = var3;
        _closure1_slot15 = var1;
        return var0;
    };
    var1.SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.classificationId;
        _closure1_slot17 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_APPEAL_OPEN = var9;
    var9 = function() {
        var0 = null;
        _closure1_slot17 = var0;
        var0 = _closure1_slot9;
        var0 = var0.DIDNT_VIOLATE_POLICY;
        _closure1_slot23 = var0;
        var0 = '';
        _closure1_slot24 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_APPEAL_CLOSE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.signal;
        _closure1_slot23 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_APPEAL_SIGNAL_SELECT = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.userInput;
        _closure1_slot24 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE = var9;
    var9 = function arg0() {
        _fun79758: for (var _fun79758_ip = 0;;) switch (_fun79758_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                if (!(var1 != var2)) {
                    _fun79758_ip = 26;
                    continue _fun79758
                }
            case 9:
                var3 = true;
                _closure1_slot21 = var3;
                _closure1_slot22 = var2;
                var0 = undefined;
                return var0;
            case 26:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var1;
                var0 = throwTypeError(var5, var4);
                var0 = undefined;
                throw var0;
        }
    };
    var1.SAFETY_HUB_REQUEST_REVIEW_START = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.classificationId;
        var1 = false;
        _closure1_slot21 = var1;
        var1 = null;
        _closure1_slot22 = var1;
        var1 = _closure1_slot11;
        var2 = var1[var2];
        var1 = {};
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 6;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = var3.AppealStatusType;
        var3 = var3.REVIEW_PENDING;
        var1.status = var3;
        var2.appeal_status = var1;
        return var0;
    };
    var1.SAFETY_HUB_REQUEST_REVIEW_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.error;
        var2 = false;
        _closure1_slot21 = var2;
        _closure1_slot22 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_REQUEST_REVIEW_FAILURE = var9;
    var9 = function arg0() {
        _fun79761: for (var _fun79761_ip = 0;;) switch (_fun79761_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun79761_ip = 34;
                    continue _fun79761
                }
            case 9:
                var3 = '';
                _closure1_slot26 = var3;
                _closure1_slot28 = var0;
                var0 = true;
                _closure1_slot29 = var0;
                var0 = undefined;
                return var0;
            case 34:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var1;
                var0 = throwTypeError(var5, var4);
                var0 = undefined;
                throw var0;
        }
    };
    var1.SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START = var9;
    var9 = function arg0() {
        var0 = arg0;
        var0 = var0.verificationWebviewUrl;
        _closure1_slot26 = var0;
        var0 = null;
        _closure1_slot28 = var0;
        var0 = false;
        _closure1_slot29 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var0 = var0.error;
        var2 = '';
        _closure1_slot26 = var2;
        _closure1_slot28 = var0;
        var0 = false;
        _closure1_slot29 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE = var9;
    var1.SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN = var8;
    var1.SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE = var8;
    var8 = function arg0() {
        _fun79764: for (var _fun79764_ip = 0;;) switch (_fun79764_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun79764_ip = 125;
                    continue _fun79764
                }
            case 9:
                var0 = _closure1_slot8;
                var0 = var0.LOADING;
                _closure1_slot30 = var0;
                var7 = _closure1_slot11;
                var2 = 6;
                var0 = undefined;
                for (var3 in var7)
                    case 43: {
                        case 52: var10 = var3;
                        var9 = _closure1_slot11;
                        var9 = var9[var10];
                        var9 = var9.is_coppa;
                        if (!var9) {
                            _fun79764_ip = 43;
                            continue _fun79764
                        }
                        case 72: var9 = _closure1_slot11;
                        var10 = var9[var10];
                        var9 = {};
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var2];
                        var11 = var12.bind(var0)(var11);
                        var11 = var11.AppealStatusType;
                        var11 = var11.REVIEW_PENDING;
                        var9.status = var11;
                        var10.appeal_status = var9;
                        _fun79764_ip = 43;
                        continue _fun79764;
                    }
            case 123:
                return var0;
            case 125:
                var13 = "Cannot destructure 'undefined' or 'null'.";
                var14 = var1;
                var0 = throwTypeError(var14, var13);
                var0 = undefined;
                throw var0;
        }
    };
    var1.SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS = var8;
    var8 = function arg0() {
        _fun79765: for (var _fun79765_ip = 0;;) switch (_fun79765_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                if (!(var1 != var2)) {
                    _fun79765_ip = 34;
                    continue _fun79765
                }
            case 9:
                var3 = _closure1_slot8;
                var3 = var3.LOADING;
                _closure1_slot30 = var3;
                _closure1_slot31 = var2;
                var0 = undefined;
                return var0;
            case 34:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var1;
                var0 = throwTypeError(var5, var4);
                var0 = undefined;
                throw var0;
        }
    };
    var1.SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL = var8;
    var8 = function arg0() {
        _fun79766: for (var _fun79766_ip = 0;;) switch (_fun79766_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun79766_ip = 49;
                    continue _fun79766
                }
            case 9:
                var3 = _closure1_slot8;
                var3 = var3.LOADING;
                _closure1_slot30 = var3;
                _closure1_slot31 = var0;
                var3 = _closure1_slot27;
                var0 = 1;
                var0 = var3 + var0;
                _closure1_slot27 = var0;
                var0 = undefined;
                return var0;
            case 49:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var1;
                var0 = throwTypeError(var5, var4);
                var0 = undefined;
                throw var0;
        }
    };
    var1.SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START = var8;
    var8 = function arg0() {
        _fun79767: for (var _fun79767_ip = 0;;) switch (_fun79767_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.success;
                if (var0) {
                    _fun79767_ip = 51;
                    continue _fun79767
                }
            case 15:
                var2 = _closure1_slot27;
                var0 = _closure1_slot10;
                if (!(!(var2 < var0))) {
                    _fun79767_ip = 39;
                    continue _fun79767
                }
            case 27:
                var0 = _closure1_slot8;
                var0 = var0.FAILURE;
                _fun79767_ip = 49;
                continue _fun79767;
            case 39:
                var2 = _closure1_slot8;
                var0 = var2.LOADING;
            case 49:
                _fun79767_ip = 61;
                continue _fun79767;
            case 51:
                var2 = _closure1_slot8;
                var0 = var2.SUCCESS;
            case 61:
                _closure1_slot30 = var0;
                var0 = null;
                _closure1_slot31 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.error;
        var2 = _closure1_slot8;
        var2 = var2.ERROR;
        _closure1_slot30 = var2;
        _closure1_slot31 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE = var8;
    var3 = function() {
        var0 = false;
        _closure1_slot14 = var0;
        var0 = {};
        _closure1_slot11 = var0;
        var1 = {};
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 6;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = var3.AccountStandingState;
        var3 = var3.ALL_GOOD;
        var1.state = var3;
        _closure1_slot13 = var1;
        var1 = null;
        _closure1_slot17 = var1;
        var1 = _closure1_slot9;
        var1 = var1.DIDNT_VIOLATE_POLICY;
        _closure1_slot23 = var1;
        var1 = '';
        _closure1_slot24 = var1;
        var1 = new Array(0);
        _closure1_slot20 = var1;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var16 = var3;
    var14 = var1;
    var1 = new var16[var7](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/SafetyHubStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5936, 5937, 10134, 566, 806, 2]);