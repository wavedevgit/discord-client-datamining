// modules/auth/native/components/RegisterDisplayName.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.updateRegistrationOptions;
    var _closure1_slot8 = var6;
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.RegisterTransitionSteps;
    var _closure1_slot10 = var6;
    var3 = var3.RegistrationTransitionActionTypes;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.marginTop = var12;
    var3.globalName = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_24;
    var8.marginTop = var10;
    var3.button = var8;
    var8 = {};
    var8.flex = var9;
    var3.page = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = ['discord', 'hypesquad', 'snowsgiving', 'system message', 'system mesage', 'sustem mesage', 'sustem message'];
    var _closure1_slot15 = var3;
    var3 = ['everyone', 'here'];
    var _closure1_slot16 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/RegisterDisplayName.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: _default, environment: var1
        _fun100723: for (var _fun100723_ip = 0;;) switch (_fun100723_ip) {
            case 0:
                var0 = _closure1_slot14;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var1 = var8.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var7 = _closure1_slot5;
                var2 = var7.useState;
                var1 = false;
                var1 = var2.bind(var7)(var1);
                var10 = _closure1_slot4;
                var9 = 2;
                var1 = var10.bind(var3)(var1, var9);
                var6 = 0;
                var18 = var1[var6];
                var5 = 1;
                var1 = var1[var5];
                var _closure2_slot1 = var1;
                var2 = _closure1_slot9;
                var1 = function(arg0) { // Environment: var16
                    var0 = arg0;
                    var0 = var0.errors;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var13 = var7.useState;
                var1 = function() { // Environment: var16
                    _fun100725: for (var _fun100725_ip = 0;;) switch (_fun100725_ip) {
                        case 0:
                            var1 = _closure1_slot9;
                            var0 = var1.getState;
                            var0 = var0.bind(var1)();
                            var0 = var0.registrationOptions;
                            var1 = var0.globalName;
                            var0 = null;
                            var2 = var0 != var1;
                            var0 = '';
                            if (!var2) {
                                _fun100725_ip = 45;
                                continue _fun100725
                            }
                        case 42:
                            var0 = var1;
                        case 45:
                            return var0;
                    }
                };
                var1 = var13.bind(var7)(var1);
                var1 = var10.bind(var3)(var1, var9);
                var15 = var1[var6];
                var _closure2_slot2 = var15;
                var1 = var1[var5];
                var _closure2_slot3 = var1;
                var5 = _closure1_slot16;
                var1 = var5.includes;
                var1 = var1.bind(var5)(var15);
                if (var1) {
                    _fun100723_ip = 296;
                    continue _fun100723
                }
            case 170:
                var5 = _closure1_slot15;
                var1 = var5.length;
                var1 = var6 < var1;
                var6 = 0;
                var14 = undefined;
                if (!var1) {
                    _fun100723_ip = 351;
                    continue _fun100723
                }
            case 193:
                var10 = var5[var6];
                var1 = var15.toLowerCase;
                var9 = var1.bind(var15)();
                var1 = var9.includes;
                var1 = var1.bind(var9)(var10);
                if (var1) {
                    _fun100723_ip = 239;
                    continue _fun100723
                }
            case 220:
                var6 = var6 + 1;
                var1 = var5.length;
                var1 = var6 < var1;
                var14 = undefined;
                if (var1) {
                    _fun100723_ip = 193;
                    continue _fun100723
                }
            case 237:
                _fun100723_ip = 351;
                continue _fun100723;
            case 239:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 10;
                var5 = var10[var1];
                var5 = var9.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var1 = var10[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.WeJZyy;
                var14 = var5.bind(var6)(var1);
                _fun100723_ip = 351;
                continue _fun100723;
            case 296:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 10;
                var5 = var10[var1];
                var5 = var9.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var1 = var10[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.WeJZyy;
                var14 = var5.bind(var6)(var1);
            case 351:
                var5 = var7.useContext;
                var1 = 12;
                var1 = var4[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.TrackRegistrationContext;
                var9 = var5.bind(var7)(var1);
                var _closure2_slot4 = var9;
                var1 = _closure1_slot1;
                var5 = 13;
                var5 = var4[var5];
                var10 = var1.bind(var3)(var5);
                var5 = 14;
                var5 = var4[var5];
                var17 = var8.bind(var3)(var5);
                var13 = var17.getPreviousRegistrationTransitionStep;
                var5 = 15;
                var6 = var4[var5];
                var6 = var8.bind(var3)(var6);
                var6 = var6.AuthStates;
                var6 = var6.REGISTER_DISPLAY_NAME;
                var6 = var13.bind(var17)(var6);
                var6 = var10.bind(var3)(var6);
                var6 = 16;
                var6 = var4[var6];
                var6 = var1.bind(var3)(var6);
                var5 = var4[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.AuthStates;
                var5 = var5.REGISTER_DISPLAY_NAME;
                var5 = var6.bind(var3)(var5);
                var8 = var7.useEffect;
                var6 = new Array(1);
                var6[0] = var9;
                var5 = function() { // Environment: var16
                    var2 = _closure2_slot4;
                    var1 = {};
                    var3 = _closure1_slot10;
                    var3 = var3.ACCOUNT_DISPLAY_NAME;
                    var1.step = var3;
                    var0 = _closure1_slot11;
                    var0 = var0.VIEWED;
                    var1.actionType = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var8.bind(var7)(var5, var6);
                var5 = var7.useRef;
                var13 = null;
                var20 = var5.bind(var7)(var13);
                var5 = 17;
                var5 = var4[var5];
                var6 = var1.bind(var3)(var5);
                var5 = {};
                var5.inputRef = var20;
                var5 = var6.bind(var3)(var5);
                var8 = var7.useCallback;
                var5 = function() { // Environment: var16
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun100729: for (var _fun100729_ip = 0;;) switch (_fun100729_ip) {
                                case 0:
                                    StartGenerator();
                                    var6 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun100729_ip = 282;
                                        continue _fun100729
                                    }
                                case 13:
                                    var4 = _closure1_slot8;
                                    var2 = {};
                                    var2.globalName = var6;
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var2);
                                    var4 = _closure1_slot9;
                                    var2 = var4.getState;
                                    var2 = var2.bind(var4)();
                                    var5 = var2.registrationOptions;
                                    var7 = _closure2_slot4;
                                    var4 = {};
                                    var8 = _closure1_slot10;
                                    var8 = var8.ACCOUNT_DISPLAY_NAME;
                                    var4.step = var8;
                                    var8 = _closure1_slot11;
                                    var8 = var8.SUBMITTED;
                                    var4.actionType = var8;
                                    var4 = var7.bind(var1)(var4);
                                    var7 = var5.username;
                                    var4 = null;
                                    var4 = var4 != var7;
                                    if (!var4) {
                                        _fun100729_ip = 125;
                                        continue _fun100729
                                    }
                                case 112:
                                    var7 = var5.username;
                                    var5 = '';
                                    var4 = var5 !== var7;
                                case 125:
                                    if (var4) {
                                        _fun100729_ip = 214;
                                        continue _fun100729
                                    }
                                case 128:
                                    var5 = _closure2_slot1;
                                    var4 = true;
                                    var4 = var5.bind(var1)(var4);
                                    var5 = _closure1_slot7;
                                    var4 = var5.wasRegistrationSuggestionFetched;
                                    var4 = var4.bind(var5)(var6);
                                    if (var4) {
                                        _fun100729_ip = 203;
                                        continue _fun100729
                                    }
                                case 159:
                                    var5 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var4 = 18;
                                    var4 = var7[var4];
                                    var5 = var5.bind(var1)(var4);
                                    var4 = var5.fetchSuggestionsRegistration;
                                    var4 = var4.bind(var5)(var6);
                                    SaveGenerator(address = 194);
                                case 192:
                                    return var4;
                                case 194:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                    if (!var5) {
                                        _fun100729_ip = 203;
                                        continue _fun100729
                                    }
                                case 200:
                                    return var4;
                                case 203:
                                    var5 = _closure2_slot1;
                                    var4 = false;
                                    var4 = var5.bind(var1)(var4);
                                case 214:
                                    var4 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var3 = 14;
                                    var3 = var7[var3];
                                    var6 = var4.bind(var1)(var3);
                                    var5 = var6.handleNextOrSubmitRegistration;
                                    var3 = 15;
                                    var3 = var7[var3];
                                    var3 = var4.bind(var1)(var3);
                                    var3 = var3.AuthStates;
                                    var4 = var3.REGISTER_DISPLAY_NAME;
                                    var3 = _closure2_slot0;
                                    var2 = _closure2_slot4;
                                    var2 = var5.bind(var6)(var4, var3, var2);
                                    return var1;
                                case 282:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var6 = var5.bind(var3)();
                var5 = new Array(2);
                var5[0] = var0;
                var5[1] = var9;
                var8 = var8.bind(var7)(var6, var5);
                var _closure2_slot5 = var8;
                var6 = var7.useLayoutEffect;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var0;
                var0 = function() { // Environment: var16
                    var2 = _closure2_slot0;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() { // Original name: headerRight, environment: var3
                        var3 = _closure1_slot12;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 19;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var4 = 10;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4["5Wxrcd"];
                        var4 = var5.bind(var6)(var4);
                        var0.text = var4;
                        var4 = function() { // Original name: onPress, environment: var4
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var0 = null;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var0.onPress = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var6.bind(var7)(var0, var5);
                var0 = 20;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = 'global_name';
                var0 = var1.bind(var3)(var0, var2);
                var17 = var14;
                if (!(var13 != var0)) {
                    _fun100723_ip = 653;
                    continue _fun100723
                }
            case 650:
                var17 = var0;
            case 653:
                var2 = _closure1_slot12;
                var5 = _closure1_slot1;
                var19 = _closure1_slot2;
                var0 = 21;
                var0 = var19[var0];
                var1 = var5.bind(var3)(var0);
                var0 = {};
                var4 = var12.page;
                var0.style = var4;
                var6 = _closure1_slot13;
                var4 = 22;
                var4 = var19[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var23 = _closure1_slot0;
                var21 = 10;
                var7 = var19[var21];
                var7 = var23.bind(var3)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = var19[var21];
                var7 = var23.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.LYIh7j;
                var7 = var8.bind(var9)(var7);
                var4.headerText = var7;
                var8 = _closure1_slot6;
                var7 = {};
                var9 = var12.globalName;
                var7.style = var9;
                var9 = 23;
                var9 = var19[var9];
                var9 = var23.bind(var3)(var9);
                var10 = var9.TextInput;
                var9 = {};
                var9.ref = var20;
                var9.value = var15;
                var20 = function(arg0) { // Original name: onChange, environment: var16
                    _fun100734: for (var _fun100734_ip = 0;;) switch (_fun100734_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot3;
                            var1 = var0.trim;
                            var3 = var1.bind(var0)();
                            var1 = '';
                            if (!(var1 !== var3)) {
                                _fun100734_ip = 31;
                                continue _fun100734
                            }
                        case 28:
                            var1 = var0;
                        case 31:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var9.onChange = var20;
                var20 = 'next';
                var9.returnKeyType = var20;
                var20 = function() { // Original name: onSubmitEditing, environment: var16
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var9.onSubmitEditing = var20;
                var20 = 'nickname';
                var9.textContentType = var20;
                var9.errorMessage = var17;
                var20 = var19[var21];
                var20 = var23.bind(var3)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var19 = var19[var21];
                var19 = var23.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["9AjdkD"];
                var19 = var20.bind(var22)(var19);
                var9.label = var19;
                var19 = var13 == var17;
                var17 = undefined;
                if (!var19) {
                    _fun100723_ip = 967;
                    continue _fun100723
                }
            case 913:
                var23 = _closure1_slot0;
                var19 = _closure1_slot2;
                var20 = var19[var21];
                var20 = var23.bind(var3)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var19 = var19[var21];
                var19 = var23.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.fbKwSs;
                var17 = var20.bind(var22)(var19);
            case 967:
                var9.description = var17;
                var17 = true;
                var9.isClearable = var17;
                var9 = var2.bind(var3)(var10, var9);
                var7.children = var9;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot12;
                var9 = _closure1_slot6;
                var8 = {};
                var12 = var12.button;
                var8.style = var12;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 24;
                var11 = var17[var11];
                var11 = var20.bind(var3)(var11);
                var12 = var11.Button;
                var11 = {};
                var19 = 'lg';
                var11.size = var19;
                var11.loading = var18;
                var18 = var17[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.PDTjLN;
                var17 = var18.bind(var19)(var17);
                var11.text = var17;
                var16 = function() { // Original name: onPress, environment: var16
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onPress = var16;
                var13 = var13 != var14;
                if (var13) {
                    _fun100723_ip = 1147;
                    continue _fun100723
                }
            case 1129:
                var14 = var15.trim;
                var15 = var14.bind(var15)();
                var14 = '';
                var13 = var14 === var15;
            case 1147:
                var11.disabled = var13;
                var11 = var10.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 10248, 13043, 13044, 33, 1297, 671, 1234, 1469, 13041, 13059, 13042, 670, 13058, 13061, 10253, 5279, 7449, 5730, 7488, 5358, 4037, 2]);