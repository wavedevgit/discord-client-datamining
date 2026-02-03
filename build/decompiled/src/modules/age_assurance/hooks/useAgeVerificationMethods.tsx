// modules/age_assurance/hooks/useAgeVerificationMethods.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VERIFICATION_METHOD_TITLE_MAP;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_assurance/hooks/useAgeVerificationMethods.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun53015: for (var _fun53015_ip = 0;;) switch (_fun53015_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.onClose;
                var2 = var1.onMethodClick;
                var _closure2_slot0 = var2;
                var8 = var1.classificationId;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 4;
                var1 = var11[var1];
                var2 = undefined;
                var6 = var10.bind(var2)(var1);
                var5 = var6.useStateFromStoresObject;
                var1 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure1_slot4;
                    var2 = var1.methods;
                    var0.methods = var2;
                    var1 = var1.loading;
                    var0.loading = var1;
                    return var0;
                };
                var1 = var5.bind(var6)(var4, var1);
                var5 = var1.methods;
                var _closure2_slot1 = var5;
                var1 = var1.loading;
                var4 = 5;
                var4 = var11[var4];
                var7 = var10.bind(var2)(var4);
                var6 = var7.useInitiateAgeVerification;
                var4 = {};
                var4.onComplete = var9;
                var9 = 6;
                var9 = var11[var9];
                var9 = var10.bind(var2)(var9);
                var9 = var9.AgeVerificationModalEntryPoint;
                var9 = var9.EXPRESSIVE_GET_STARTED;
                var4.entryPoint = var9;
                var9 = true;
                var4.shouldShowExpressiveModal = var9;
                var4.classificationId = var8;
                var4 = var6.bind(var7)(var4);
                var4 = var4.initiateAgeVerification;
                var _closure2_slot2 = var4;
                var7 = _closure1_slot3;
                var6 = var7.useEffect;
                var4 = new Array(1);
                var4[0] = var5;
                var3 = function() { // Environment: var0
                    _fun53017: for (var _fun53017_ip = 0;;) switch (_fun53017_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun53017_ip = 48;
                                continue _fun53017
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.getAgeVerificationMethods;
                            var0 = var0.bind(var1)();
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var3, var4);
                var3 = null;
                var3 = var3 == var5;
                if (var3) {
                    _fun53015_ip = 247;
                    continue _fun53015
                }
            case 217:
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var0
                    _fun53018: for (var _fun53018_ip = 0;;) switch (_fun53018_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var0 = _closure1_slot5;
                            var1 = var0[var4];
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun53018_ip = 141;
                                continue _fun53018
                            }
                        case 26:
                            var11 = var1.title;
                            var7 = var1.description;
                            var1 = {};
                            var1.id = var4;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var4 = 8;
                            var9 = var8[var4];
                            var5 = undefined;
                            var9 = var6.bind(var5)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var9 = var9.bind(var10)(var11);
                            var1.title = var9;
                            var4 = var8[var4];
                            var4 = var6.bind(var5)(var4);
                            var6 = var4.intl;
                            var4 = var6.string;
                            var4 = var4.bind(var6)(var7);
                            var1.description = var4;
                            var4 = _closure1_slot2;
                            var3 = function*(arg0) { // Environment: var2
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun53020: for (var _fun53020_ip = 0;;) switch (_fun53020_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun53020_ip = 150;
                                                continue _fun53020
                                            }
                                        case 10:
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var1 = 6;
                                            var5 = var4[var1];
                                            var2 = undefined;
                                            var8 = var3.bind(var2)(var5);
                                            var7 = var8.trackAgeVerificationModalClicked;
                                            var5 = var4[var1];
                                            var5 = var3.bind(var2)(var5);
                                            var5 = var5.AgeVerificationModalVersion;
                                            var11 = var5.EXPRESSIVE_PRIMARY;
                                            var1 = var4[var1];
                                            var1 = var3.bind(var2)(var1);
                                            var1 = var1.AgeVerificationModalCta;
                                            var10 = var1.METHOD_SELECT;
                                            var9 = _closure3_slot0;
                                            var12 = arg0;
                                            var13 = var8;
                                            var3 = var13[var7](var12, var11, var10, var9, var8);
                                            var5 = _closure2_slot0;
                                            var4 = null;
                                            if (!(var4 != var5)) {
                                                _fun53020_ip = 121;
                                                continue _fun53020
                                            }
                                        case 113:
                                            var4 = _closure2_slot0;
                                            var4 = var4.bind(var2)();
                                        case 121:
                                            var3 = _closure2_slot2;
                                            var1 = _closure3_slot0;
                                            var1 = var3.bind(var2)(var1);
                                            SaveGenerator(address = 138);
                                        case 136:
                                            return var1;
                                        case 138:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                            if (var3) {
                                                _fun53020_ip = 147;
                                                continue _fun53020
                                            }
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
                            var3 = var4.bind(var5)(var3);
                            var _closure3_slot1 = var3;
                            var2 = function() { // Environment: var2
                                var0 = undefined;
                                var3 = _closure3_slot1;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var1.onClick = var2;
                            return var1;
                        case 141:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var0);
            case 247:
                var0 = {};
                var0.ageVerificationMethods = var2;
                var0.loading = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 6432, 5928, 566, 4244, 4551, 6433, 1234, 2]);