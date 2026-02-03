// modules/auth/native/components/RegisterAgeGate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var10 = 1;
    var7 = var5[var10];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.updateRegistrationOptions;
    var _closure1_slot7 = var7;
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.RegisterTransitionSteps;
    var _closure1_slot9 = var7;
    var3 = var3.RegistrationTransitionActionTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AuthStates;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var7 = var3.jsxs;
    var _closure1_slot13 = var7;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginTop': 24,
        'marginBottom': 24
    };
    var3.inputGroup = var9;
    var9 = {};
    var9.flexGrow = var10;
    var3.flexGrow = var9;
    var9 = {
        'flexGrow': 0,
        'marginBottom': 4,
        'marginTop': 16,
        'flexDirection': 'column'
    };
    var3.button = var9;
    var9 = {};
    var11 = 9;
    var11 = var5[var11];
    var11 = var6.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var9.color = var11;
    var3.datePickerButton = var9;
    var9 = {};
    var9.flex = var10;
    var3.page = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 100,
        'paddingLeft': 16,
        'paddingRight': 16
    };
    var3.bottom = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = var6.utc;
    var6 = var3.bind(var6)();
    var _closure1_slot16 = var6;
    var3 = var6.toDate;
    var3 = var3.bind(var6)();
    var _closure1_slot17 = var3;
    var3 = var6.clone;
    var7 = var3.bind(var6)();
    var6 = var7.endOf;
    var3 = 'year';
    var6 = var6.bind(var7)(var3);
    var3 = var6.toDate;
    var3 = var3.bind(var6)();
    var _closure1_slot18 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/RegisterAgeGate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun100435: for (var _fun100435_ip = 0;;) switch (_fun100435_ip) {
            case 0:
                var0 = _closure1_slot15;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var1 = var4.bind(var3)(var0);
                var0 = var1.useThemeContext;
                var0 = var0.bind(var1)();
                var15 = var0.theme;
                var0 = 13;
                var0 = var5[var0];
                var1 = var4.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var16 = _closure1_slot4;
                var1 = var16.useContext;
                var0 = 14;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.TrackRegistrationContext;
                var0 = var1.bind(var16)(var0);
                var _closure2_slot1 = var0;
                var2 = var16.useState;
                var6 = _closure1_slot8;
                var1 = var6.getState;
                var1 = var1.bind(var6)();
                var1 = var1.registrationOptions;
                var6 = var1.birthday;
                var12 = null;
                var7 = var12 != var6;
                var1 = null;
                if (!var7) {
                    _fun100435_ip = 189;
                    continue _fun100435
                }
            case 156:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 11;
                var7 = var13[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.bind(var3)(var6);
                var1 = null;
                if (!var7) {
                    _fun100435_ip = 189;
                    continue _fun100435
                }
            case 186:
                var1 = var6;
            case 189:
                var1 = var2.bind(var16)(var1);
                var13 = _closure1_slot3;
                var7 = 2;
                var1 = var13.bind(var3)(var1, var7);
                var6 = 0;
                var31 = var1[var6];
                var _closure2_slot2 = var31;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot3 = var1;
                var11 = var16.useState;
                var14 = _closure1_slot8;
                var1 = var14.getState;
                var1 = var1.bind(var14)();
                var1 = var1.registrationOptions;
                var14 = var1.consent;
                var1 = var12 != var14;
                if (!var1) {
                    _fun100435_ip = 269;
                    continue _fun100435
                }
            case 266:
                var1 = var14;
            case 269:
                var1 = var11.bind(var16)(var1);
                var1 = var13.bind(var3)(var1, var7);
                var21 = var1[var6];
                var _closure2_slot4 = var21;
                var1 = var1[var2];
                var _closure2_slot5 = var1;
                var14 = var16.useMemo;
                var11 = new Array(1);
                var11[0] = var31;
                var1 = function() { // Environment: var9
                    _fun100436: for (var _fun100436_ip = 0;;) switch (_fun100436_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun100436_ip = 32;
                                continue _fun100436
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var1 = var2.toDate;
                            var0 = var1.bind(var2)();
                        case 32:
                            return var0;
                    }
                };
                var11 = var14.bind(var16)(var1, var11);
                var14 = var16.useState;
                var1 = false;
                var1 = var14.bind(var16)(var1);
                var1 = var13.bind(var3)(var1, var7);
                var14 = var1[var6];
                var1 = var1[var2];
                var _closure2_slot6 = var1;
                var2 = _closure1_slot8;
                var1 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var0 = var0.submitting;
                    return var0;
                };
                var26 = var2.bind(var3)(var1);
                var1 = 15;
                var1 = var5[var1];
                var7 = var4.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var9
                    var1 = _closure1_slot6;
                    var0 = var1.getAuthenticationConsentRequired;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var28 = var6.bind(var7)(var4, var1);
                var _closure2_slot7 = var28;
                var1 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var0 = var0.errors;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var4 = _closure1_slot1;
                var2 = 16;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = 'consent';
                var22 = var4.bind(var3)(var2, var1);
                if (!(var12 == var22)) {
                    _fun100435_ip = 461;
                    continue _fun100435
                }
            case 456:
                var22 = var1.message;
            case 461:
                var13 = _closure1_slot1;
                var20 = _closure1_slot2;
                var1 = 17;
                var1 = var20[var1];
                var2 = var13.bind(var3)(var1);
                var27 = _closure1_slot0;
                var1 = 18;
                var1 = var20[var1];
                var5 = var27.bind(var3)(var1);
                var4 = var5.getPreviousRegistrationTransitionStep;
                var1 = _closure1_slot11;
                var1 = var1.AGE_GATE;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure2_slot1;
                    var1 = {};
                    var3 = _closure1_slot9;
                    var3 = var3.AGE_GATE;
                    var1.step = var3;
                    var0 = _closure1_slot10;
                    var0 = var0.VIEWED;
                    var1.actionType = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var0 = 11;
                var0 = var20[var0];
                var0 = var13.bind(var3)(var0);
                var0 = var0.bind(var3)(var31);
                var25 = !var0;
                var2 = _closure1_slot13;
                var1 = _closure1_slot14;
                var0 = {};
                var6 = _closure1_slot12;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var8.page;
                var4.style = var7;
                var7 = 20;
                var7 = var20[var7];
                var16 = var13.bind(var3)(var7);
                var7 = {};
                var13 = 21;
                var17 = var20[var13];
                var17 = var27.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var20[var13];
                var17 = var27.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.NgL2GX;
                var17 = var18.bind(var19)(var17);
                var7.headerText = var17;
                var17 = var8.flexGrow;
                var7.contentStyle = var17;
                var17 = {};
                var18 = var8.inputGroup;
                var17.style = var18;
                var18 = 22;
                var18 = var20[var18];
                var18 = var27.bind(var3)(var18);
                var19 = var18.Input;
                var18 = {};
                var23 = var20[var13];
                var23 = var27.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var20 = var20[var13];
                var20 = var27.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.xNpFJ6;
                var20 = var23.bind(var24)(var20);
                var18.label = var20;
                var20 = null;
                if (!var25) {
                    _fun100435_ip = 828;
                    continue _fun100435
                }
            case 767:
                var23 = var12 != var31;
                var20 = null;
                if (!var23) {
                    _fun100435_ip = 828;
                    continue _fun100435
                }
            case 776:
                var29 = _closure1_slot0;
                var23 = _closure1_slot2;
                var24 = var23[var13];
                var24 = var29.bind(var3)(var24);
                var27 = var24.intl;
                var24 = var27.string;
                var23 = var23[var13];
                var23 = var29.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.udnqh6;
                var20 = var24.bind(var27)(var23);
            case 828:
                var18.errorMessage = var20;
                var29 = _closure1_slot12;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var20 = 23;
                var20 = var24[var20];
                var20 = var23.bind(var3)(var20);
                var23 = var20.InputButton;
                var20 = {};
                var27 = var12 == var31;
                var24 = undefined;
                if (var27) {
                    _fun100435_ip = 888;
                    continue _fun100435
                }
            case 874:
                var30 = var31.format;
                var27 = 'L';
                var24 = var30.bind(var31)(var27);
            case 888:
                var20.value = var24;
                var30 = _closure1_slot16;
                var27 = var30.format;
                var24 = 'L';
                var24 = var27.bind(var30)(var24);
                var20.text = var24;
                var24 = function() {
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var20.onPress = var24;
                var27 = _closure1_slot0;
                var24 = _closure1_slot2;
                var30 = var24[var13];
                var30 = var27.bind(var3)(var30);
                var32 = var30.intl;
                var31 = var32.string;
                var30 = var24[var13];
                var30 = var27.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30.xNpFJ6;
                var30 = var31.bind(var32)(var30);
                var20.accessibilityLabel = var30;
                var30 = var24[var13];
                var30 = var27.bind(var3)(var30);
                var32 = var30.intl;
                var31 = var32.string;
                var30 = var24[var13];
                var30 = var27.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30["hZaF/O"];
                var30 = var31.bind(var32)(var30);
                var20.accessibilityHint = var30;
                var20 = var29.bind(var3)(var23, var20);
                var18.children = var20;
                var18 = var6.bind(var3)(var19, var18);
                var17.children = var18;
                var18 = var6.bind(var3)(var5, var17);
                var17 = new Array(4);
                var17[0] = var18;
                var20 = _closure1_slot12;
                var19 = _closure1_slot1;
                var18 = 24;
                var18 = var24[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var23 = global;
                var23 = var23.Boolean;
                var23 = var23.bind(var3)(var28);
                var18.consentRequired = var23;
                var18.consent = var21;
                var21 = function() {
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var18.onToggleConsent = var21;
                var18 = var20.bind(var3)(var19, var18);
                var17[1] = var18;
                var19 = _closure1_slot5;
                var18 = {};
                var21 = var8.button;
                var18.style = var21;
                var21 = 25;
                var21 = var24[var21];
                var21 = var27.bind(var3)(var21);
                var23 = var21.Button;
                var21 = {};
                var28 = 'lg';
                var21.size = var28;
                var21.loading = var26;
                var21.disabled = var25;
                var25 = function() {
                    _fun100444: for (var _fun100444_ip = 0;;) switch (_fun100444_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var1);
                            var5 = _closure2_slot2;
                            var3 = null;
                            var4 = var3 != var5;
                            var3 = 'birthday was not null';
                            var3 = var6.bind(var0)(var4, var3);
                            var4 = _closure1_slot7;
                            var3 = {};
                            var3.birthday = var5;
                            var5 = _closure2_slot4;
                            if (var5) {
                                _fun100444_ip = 75;
                                continue _fun100444
                            }
                        case 68:
                            var6 = _closure2_slot7;
                            var5 = !var6;
                        case 75:
                            var3.consent = var5;
                            var3 = var4.bind(var0)(var3);
                            var5 = _closure2_slot1;
                            var3 = {};
                            var4 = _closure1_slot9;
                            var4 = var4.AGE_GATE;
                            var3.step = var4;
                            var4 = _closure1_slot10;
                            var4 = var4.SUBMITTED;
                            var3.actionType = var4;
                            var3 = var5.bind(var0)(var3);
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 18;
                            var3 = var6[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.handleRegistrationSubmit;
                            var2 = _closure1_slot11;
                            var2 = var2.AGE_GATE;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2, var1, var5);
                            return var0;
                    }
                };
                var21.onPress = var25;
                var25 = var24[var13];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var13];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["825cFy"];
                var24 = var25.bind(var26)(var24);
                var21.text = var24;
                var21 = var20.bind(var3)(var23, var21);
                var18.children = var21;
                var18 = var20.bind(var3)(var19, var18);
                var17[2] = var18;
                var19 = var12 != var22;
                var18 = null;
                if (!var19) {
                    _fun100435_ip = 1320;
                    continue _fun100435
                }
            case 1274:
                var19 = '';
                var18 = null;
                if (!(var19 !== var22)) {
                    _fun100435_ip = 1320;
                    continue _fun100435
                }
            case 1284:
                var21 = _closure1_slot12;
                var20 = _closure1_slot1;
                var23 = _closure1_slot2;
                var19 = 26;
                var19 = var23[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var19.children = var22;
                var18 = var21.bind(var3)(var20, var19);
            case 1320:
                var17[3] = var18;
                var7.children = var17;
                var7 = var2.bind(var3)(var16, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 27;
                var5 = var16[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var17 = true;
                var5.modal = var17;
                var5.open = var14;
                var14 = _closure1_slot0;
                var17 = var16[var13];
                var17 = var14.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.xNpFJ6;
                var13 = var17.bind(var18)(var13);
                var5.title = var13;
                var13 = 'date';
                var5.mode = var13;
                var13 = 28;
                var13 = var16[var13];
                var14 = var14.bind(var3)(var13);
                var13 = var14.isThemeLight;
                var14 = var13.bind(var14)(var15);
                var13 = 'dark';
                if (!var14) {
                    _fun100435_ip = 1484;
                    continue _fun100435
                }
            case 1480:
                var13 = 'light';
            case 1484:
                var5.theme = var13;
                if (!(var12 == var11)) {
                    _fun100435_ip = 1497;
                    continue _fun100435
                }
            case 1493:
                var11 = _closure1_slot17;
            case 1497:
                var5.date = var11;
                var10 = _closure1_slot18;
                var5.maximumDate = var10;
                var10 = function arg0() {
                    var3 = _closure2_slot6;
                    var0 = undefined;
                    var2 = false;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot3;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = arg0;
                    var1 = var3.bind(var0)(var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onConfirm = var10;
                var10 = function arg0() {
                    var2 = _closure2_slot3;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = arg0;
                    var1 = var3.bind(var0)(var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onDateChange = var10;
                var9 = function() {
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5.onCancel = var9;
                var8 = var8.datePickerButton;
                var8 = var8.color;
                var5.buttonColor = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4555, 13039, 13040, 660, 33, 1297, 671, 3036, 13075, 3150, 1469, 13037, 566, 7484, 13055, 13038, 44, 7523, 1234, 5384, 7020, 13076, 4075, 5881, 8110, 3197, 2]);