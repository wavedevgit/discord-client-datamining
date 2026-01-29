// modules/age_assurance/AgeVerificationURLActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var0 = function() { // Original name: _requestAgeVerification, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun52865: for (var _fun52865_ip = 0;;) switch (_fun52865_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun52865_ip = 144;
                            continue _fun52865
                        }
                    case 13:
                        var6 = var1.method;
                        var7 = var1.classificationId;
                        var5 = undefined;
                        SaveGenerator(address = 31);
                    case 29:
                        return var5;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun52865_ip = 141;
                            continue _fun52865
                        }
                    case 37:
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 3;
                        var3 = var8[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.isCurrentUserSuspended;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun52865_ip = 101;
                            continue _fun52865
                        }
                    case 73:
                        var3 = _closure1_slot7;
                        var4 = var3.bind(var5)(var6);
                        SaveGenerator(address = 86);
                    case 84:
                        return var4;
                    case 86:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 3);
                        var8 = var3;
                        var3 = var4;
                        if (!var8) {
                            _fun52865_ip = 135;
                            continue _fun52865
                        }
                    case 98:
                        return var4;
                    case 101:
                        var4 = _closure1_slot9;
                        var2 = {};
                        var2.classificationId = var7;
                        var2.method = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 126);
                    case 124:
                        return var2;
                    case 126:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        var3 = var2;
                        if (var4) {
                            _fun52865_ip = 138;
                            continue _fun52865
                        }
                    case 135:
                        return var3;
                    case 138:
                        return var2;
                    case 141:
                        return var1;
                    case 144:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var6 = function() { // Original name: initiateAgeVerification, environment: var4
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var6;
    var0 = function() { // Original name: _initiateAgeVerification, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun52869: for (var _fun52869_ip = 0;;) switch (_fun52869_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun52869_ip = 105;
                            continue _fun52869
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot5;
                        var4 = var4.VERIFY_AGE;
                        var1.url = var4;
                        var4 = {};
                        var5 = arg0;
                        var4.method = var5;
                        var1.body = var4;
                        var4 = true;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun52869_ip = 102;
                            continue _fun52869
                        }
                    case 94:
                        var2 = var1.body;
                        return var2;
                    case 102:
                        return var1;
                    case 105:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var5 = function() { // Original name: initiateSuspendedUserAgeVerification, environment: var4
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var5;
    var0 = function() { // Original name: _initiateSuspendedUserAgeVerification, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun52873: for (var _fun52873_ip = 0;;) switch (_fun52873_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun52873_ip = 157;
                            continue _fun52873
                        }
                    case 13:
                        var7 = var1.classificationId;
                        var6 = var1.method;
                        var4 = undefined;
                        SaveGenerator(address = 31);
                    case 29:
                        return var4;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun52873_ip = 154;
                            continue _fun52873
                        }
                    case 37:
                        var3 = _closure1_slot4;
                        var2 = var3.getSuspendedUserToken;
                        var8 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 4;
                        var2 = var9[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {};
                        var5 = _closure1_slot5;
                        var5 = var5.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION;
                        var2.url = var5;
                        var5 = {};
                        var5.token = var8;
                        var5.from_classification_id = var7;
                        var5.method = var6;
                        var2.body = var5;
                        var5 = true;
                        var2.rejectWithError = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 137);
                    case 135:
                        return var2;
                    case 137:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun52873_ip = 151;
                            continue _fun52873
                        }
                    case 143:
                        var3 = var2.body;
                        return var3;
                    case 151:
                        return var2;
                    case 154:
                        return var1;
                    case 157:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: _getAgeVerificationMethods, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun52876: for (var _fun52876_ip = 0;;) switch (_fun52876_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun52876_ip = 164;
                            continue _fun52876
                        }
                    case 12:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var4 = var6[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var4);
                        var5 = var7.dispatch;
                        var4 = {};
                        var8 = 'AGE_VERIFICATION_METHODS_LOAD_START';
                        var4.type = var8;
                        var4 = var5.bind(var7)(var4);
                        var5 = _closure1_slot0;
                        var4 = 3;
                        var4 = var6[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.isCurrentUserSuspended;
                        var4 = var4.bind(var5)();
                        if (var4) {
                            _fun52876_ip = 98;
                            continue _fun52876
                        }
                    case 88:
                        var4 = _closure1_slot12;
                        var5 = var4.bind(var1)();
                        _fun52876_ip = 106;
                        continue _fun52876;
                    case 98:
                        var3 = _closure1_slot13;
                        var5 = var3.bind(var1)();
                    case 106:
                        var3 = null;
                        var3 = var3 == var5;
                        var1 = undefined;
                        if (var3) {
                            _fun52876_ip = 148;
                            continue _fun52876
                        }
                    case 117:
                        var4 = var5.then;
                        var3 = function(arg0) { // Environment: var2
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'AGE_VERIFICATION_METHODS_LOAD_SUCCESS';
                            var1.type = var4;
                            var4 = arg0;
                            var4 = var4.body;
                            var4 = var4.methods;
                            var1.methods = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.catch;
                        var2 = function() { // Environment: var2
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'AGE_VERIFICATION_METHODS_LOAD_FAILURE';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var2);
                    case 148:
                        SaveGenerator(address = 152);
                    case 150:
                        return var1;
                    case 152:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun52876_ip = 161;
                            continue _fun52876
                        }
                    case 158:
                        return var1;
                    case 161:
                        return var1;
                    case 164:
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
    var3 = function() { // Original name: fetchAgeVerificationMethods, environment: var4
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.get;
        var0 = {};
        var3 = _closure1_slot5;
        var3 = var3.AGE_VERIFICATION_METHODS;
        var0.url = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var3;
    var1 = function() { // Original name: fetchAgeVerificationMethodsSuspendedUser, environment: var4
        var1 = _closure1_slot4;
        var0 = var1.getSuspendedUserToken;
        var4 = var0.bind(var1)();
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot5;
        var3 = var3.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS;
        var0.url = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var3 = {};
        var3.token = var4;
        var0.body = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot13 = var1;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot5 = var7;
    var7 = 6;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/age_assurance/AgeVerificationURLActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function() { // Original name: requestAgeVerification, environment: var4
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.requestAgeVerification = var7;
    var2.initiateAgeVerification = var6;
    var2.initiateSuspendedUserAgeVerification = var5;
    var4 = function() { // Original name: getAgeVerificationMethods, environment: var4
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getAgeVerificationMethods = var4;
    var2.fetchAgeVerificationMethods = var3;
    var2.fetchAgeVerificationMethodsSuspendedUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 660, 5898, 507, 806, 2]);