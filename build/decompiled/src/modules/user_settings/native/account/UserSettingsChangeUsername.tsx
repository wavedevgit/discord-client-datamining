// modules/user_settings/native/account/UserSettingsChangeUsername.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var12 = 2;
    var6 = var5[var12];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.background = var8;
    var8 = {};
    var13 = 16;
    var8.padding = var13;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'marginTop': 8
    };
    var3.inputs = var8;
    var8 = {};
    var8.flex = var12;
    var3.username = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var8.borderBottomRightRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var8.borderTopRightRadius = var12;
    var3.usernameInput = var8;
    var8 = {};
    var8.flex = var11;
    var3.discriminator = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.none;
    var8.borderBottomLeftRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.none;
    var8.borderTopLeftRadius = var11;
    var3.discriminatorInput = var8;
    var8 = {
        'width': 1,
        'backgroundColor': null,
        'marginBottom': 8
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var3.divider = var8;
    var8 = {
        'flex': 1,
        'marginVertical': 12
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_BACKGROUND_SELECTED;
    var8.backgroundColor = var9;
    var3.dividerInner = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = function arg0() {
        var1 = arg0;
        var4 = var1.usernameStatus;
        var1 = var1.showHint;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 9;
        var2 = var7[var1];
        var5 = undefined;
        var3 = var6.bind(var5)(var2);
        var2 = var3.match;
        var9 = var2.bind(var3)(var4);
        var4 = var9.with;
        var3 = {};
        var8 = 10;
        var2 = var7[var8];
        var2 = var6.bind(var5)(var2);
        var2 = var2.NameValidationState;
        var2 = var2.ERROR;
        var3.type = var2;
        var2 = var7[var1];
        var2 = var6.bind(var5)(var2);
        var10 = var2.P;
        var2 = var10.select;
        var2 = var2.bind(var10)();
        var3.message = var2;
        var2 = function(arg0) { // Environment: var0
            var3 = _closure1_slot10;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 11;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.Text;
            var0 = {
                'variant': 'text-xs/medium',
                'color': 'text-feedback-critical'
            };
            var4 = arg0;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4 = var4.bind(var9)(var3, var2);
        var3 = var4.with;
        var2 = {};
        var8 = var7[var8];
        var8 = var6.bind(var5)(var8);
        var8 = var8.NameValidationState;
        var8 = var8.AVAILABLE;
        var2.type = var8;
        var1 = var7[var1];
        var1 = var6.bind(var5)(var1);
        var5 = var1.P;
        var1 = var5.select;
        var1 = var1.bind(var5)();
        var2.message = var1;
        var1 = function(arg0) { // Environment: var0
            var3 = _closure1_slot10;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 11;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.Text;
            var0 = {
                'variant': 'text-xs/medium',
                'color': 'text-feedback-positive'
            };
            var4 = arg0;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.otherwise;
        var0 = function() { // Environment: var0
            _fun81691: for (var _fun81691_ip = 0;;) switch (_fun81691_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!var1) {
                        _fun81691_ip = 117;
                        continue _fun81691
                    }
                case 12:
                    var4 = _closure1_slot10;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 11;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {
                        'variant': 'text-xs/medium',
                        'color': 'text-default'
                    };
                    var5 = 12;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.z7c4bP;
                    var5 = var6.bind(var7)(var5);
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 117:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot13 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/UserSettingsChangeUsername.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun81692: for (var _fun81692_ip = 0;;) switch (_fun81692_ip) {
            case 0:
                var0 = _closure1_slot12;
                var4 = undefined;
                var23 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 13;
                var0 = var3[var0];
                var2 = var1.bind(var4)(var0);
                var0 = var2.useNavigation;
                var2 = var0.bind(var2)();
                var _closure2_slot0 = var2;
                var0 = 14;
                var0 = var3[var0];
                var6 = var1.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var22
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var5.bind(var6)(var1, var0);
                var _closure2_slot1 = var16;
                var1 = _closure1_slot1;
                var0 = 15;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.canEditDiscriminator;
                var20 = var0.bind(var1)(var16);
                if (!var20) {
                    _fun81692_ip = 147;
                    continue _fun81692
                }
            case 125:
                var0 = null;
                var0 = var0 != var16;
                if (!var0) {
                    _fun81692_ip = 144;
                    continue _fun81692
                }
            case 134:
                var1 = var16.hasUniqueUsername;
                var0 = var1.bind(var16)();
            case 144:
                var20 = !var0;
            case 147:
                var _closure2_slot2 = var20;
                var5 = _closure1_slot5;
                var3 = var5.useState;
                var0 = null;
                var1 = var0 == var16;
                var6 = undefined;
                if (var1) {
                    _fun81692_ip = 177;
                    continue _fun81692
                }
            case 171:
                var6 = var16.username;
            case 177:
                var8 = var0 != var6;
                var7 = '';
                var1 = var7;
                if (!var8) {
                    _fun81692_ip = 194;
                    continue _fun81692
                }
            case 191:
                var1 = var6;
            case 194:
                var3 = var3.bind(var5)(var1);
                var1 = _closure1_slot4;
                var6 = 2;
                var1 = var1.bind(var4)(var3, var6);
                var11 = 0;
                var26 = var1[var11];
                var _closure2_slot3 = var26;
                var3 = 1;
                var1 = var1[var3];
                var _closure2_slot4 = var1;
                var5 = _closure1_slot5;
                var1 = var5.useState;
                var9 = var0 == var16;
                var8 = undefined;
                if (var9) {
                    _fun81692_ip = 257;
                    continue _fun81692
                }
            case 251:
                var8 = var16.discriminator;
            case 257:
                var9 = var0 != var8;
                if (!var9) {
                    _fun81692_ip = 267;
                    continue _fun81692
                }
            case 264:
                var7 = var8;
            case 267:
                var1 = var1.bind(var5)(var7);
                var5 = _closure1_slot4;
                var1 = var5.bind(var4)(var1, var6);
                var8 = var1[var11];
                var _closure2_slot5 = var8;
                var7 = var1[var3];
                var9 = _closure1_slot5;
                var1 = var9.useState;
                var1 = var1.bind(var9)(var0);
                var1 = var5.bind(var4)(var1, var6);
                var13 = var1[var11];
                var1 = var1[var3];
                var _closure2_slot6 = var1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 16;
                var1 = var5[var1];
                var9 = var3.bind(var4)(var1);
                var6 = var9.useUsernameStatus;
                var1 = var0 == var16;
                if (var1) {
                    _fun81692_ip = 372;
                    continue _fun81692
                }
            case 359:
                var3 = var16.hasUniqueUsername;
                var3 = var3.bind(var16)();
                var1 = !var3;
            case 372:
                var5 = var0 == var16;
                var3 = undefined;
                if (var5) {
                    _fun81692_ip = 387;
                    continue _fun81692
                }
            case 381:
                var3 = var16.username;
            case 387:
                var32 = !var1;
                var5 = false;
                var34 = var9;
                var33 = var26;
                var31 = false;
                var30 = var3;
                var1 = var34[var6](var33, var32, var31, var30, var29);
                var6 = _closure1_slot5;
                var3 = var6.useRef;
                var9 = var3.bind(var6)(var0);
                var _closure2_slot7 = var9;
                var6 = var0 == var16;
                var3 = undefined;
                if (var6) {
                    _fun81692_ip = 440;
                    continue _fun81692
                }
            case 434:
                var3 = var16.username;
            case 440:
                var14 = var26 !== var3;
                if (var14) {
                    _fun81692_ip = 466;
                    continue _fun81692
                }
            case 447:
                var6 = var0 == var16;
                var3 = undefined;
                if (var6) {
                    _fun81692_ip = 462;
                    continue _fun81692
                }
            case 456:
                var3 = var16.discriminator;
            case 462:
                var14 = var8 !== var3;
            case 466:
                if (!var14) {
                    _fun81692_ip = 525;
                    continue _fun81692
                }
            case 469:
                var3 = !var20;
                if (var3) {
                    _fun81692_ip = 522;
                    continue _fun81692
                }
            case 475:
                var10 = /^\d+$/;
                var6 = var10.test;
                var6 = var6.bind(var10)(var8);
                if (!var6) {
                    _fun81692_ip = 519;
                    continue _fun81692
                }
            case 502:
                var10 = global;
                var10 = var10.parseInt;
                var10 = var10.bind(var4)(var8);
                var6 = var10 > var11;
            case 519:
                var3 = var6;
            case 522:
                var14 = var3;
            case 525:
                var _closure2_slot8 = var14;
                var11 = _closure1_slot5;
                var10 = var11.useCallback;
                var6 = new Array(6);
                var6[0] = var14;
                var6[1] = var20;
                var6[2] = var8;
                var6[3] = var2;
                var6[4] = var16;
                var6[5] = var26;
                var3 = function() { // Environment: var22
                    _fun81694: for (var _fun81694_ip = 0;;) switch (_fun81694_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            if (!var0) {
                                _fun81694_ip = 125;
                                continue _fun81694
                            }
                        case 12:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 17;
                            var0 = var3[var0];
                            var7 = undefined;
                            var6 = var2.bind(var7)(var0);
                            var3 = var6.setSection;
                            var0 = _closure1_slot9;
                            var2 = var0.ACCOUNT_CONFIRM_PASSWORD;
                            var2 = var3.bind(var6)(var2);
                            var3 = _closure2_slot0;
                            var2 = var3.push;
                            var1 = var0.ACCOUNT_CONFIRM_PASSWORD;
                            var0 = {};
                            var6 = _closure1_slot3;
                            var5 = function*(arg0) { // Environment: var4
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun81696: for (var _fun81696_ip = 0;;) switch (_fun81696_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun81696_ip = 318;
                                                continue _fun81696
                                            }
                                        case 10:
                                            var2 = _closure2_slot1;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun81696_ip = 315;
                                                continue _fun81696
                                            }
                                        case 26:
                                            var2 = _closure2_slot6;
                                            var5 = undefined;
                                            var2 = var2.bind(var5)(var1);
                                            var7 = {};
                                            var2 = _closure2_slot3;
                                            var7.username = var2;
                                            var2 = arg0;
                                            var7.password = var2;
                                            var4 = _closure2_slot2;
                                            var2 = undefined;
                                            if (!var4) {
                                                _fun81696_ip = 69;
                                                continue _fun81696
                                            }
                                        case 65:
                                            var2 = _closure2_slot5;
                                        case 69:
                                            var7.discriminator = var2;
                                            var4 = _closure1_slot1;
                                            var6 = _closure1_slot2;
                                            var2 = 17;
                                            var2 = var6[var2];
                                            var6 = var4.bind(var5)(var2);
                                            var4 = var6.saveAccountChanges;
                                            var2 = {};
                                            var8 = false;
                                            var2.close = var8;
                                            var2 = var4.bind(var6)(var7, var2);
                                            SaveGenerator(address = 122);
                                        case 120:
                                            return var2;
                                        case 122:
                                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                            if (var4) {
                                                _fun81696_ip = 312;
                                                continue _fun81696
                                            }
                                        case 131:
                                            var4 = var2.ok;
                                            if (var4) {
                                                _fun81696_ip = 309;
                                                continue _fun81696
                                            }
                                        case 143:
                                            var6 = _closure1_slot0;
                                            var7 = _closure1_slot2;
                                            var4 = 18;
                                            var4 = var7[var4];
                                            var4 = var6.bind(var5)(var4);
                                            var4 = var4.V6OrEarlierAPIError;
                                            var6 = var4.prototype;
                                            var6 = Object.create(var6, {
                                                constructor: {
                                                    value: var4
                                                }
                                            });
                                            var14 = var6;
                                            var13 = var2;
                                            var4 = new var14[var4](var13, var12);
                                            var4 = var4 instanceof Object ? var4 : var6;
                                            var7 = var4.getFieldMessage;
                                            var6 = 'username';
                                            var6 = var7.bind(var4)(var6);
                                            if (!(var1 == var6)) {
                                                _fun81696_ip = 230;
                                                continue _fun81696
                                            }
                                        case 211:
                                            var7 = var4.getFieldMessage;
                                            var6 = 'discriminator';
                                            var6 = var7.bind(var4)(var6);
                                            if (!(var1 != var6)) {
                                                _fun81696_ip = 309;
                                                continue _fun81696
                                            }
                                        case 230:
                                            var8 = _closure2_slot0;
                                            var7 = var8.dispatch;
                                            var9 = _closure1_slot0;
                                            var10 = _closure1_slot2;
                                            var6 = 19;
                                            var6 = var10[var6];
                                            var6 = var9.bind(var5)(var6);
                                            var10 = var6.CommonActions;
                                            var9 = var10.navigate;
                                            var6 = {};
                                            var11 = _closure1_slot9;
                                            var11 = var11.ACCOUNT_CHANGE_USERNAME;
                                            var6.name = var11;
                                            var6 = var9.bind(var10)(var6);
                                            var6 = var7.bind(var8)(var6);
                                            var3 = _closure2_slot6;
                                            var3 = var3.bind(var5)(var4);
                                            return var1;
                                        case 309:
                                            return var2;
                                        case 312:
                                            return var2;
                                        case 315:
                                            return var1;
                                        case 318:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var5 = var6.bind(var7)(var5);
                            var _closure3_slot0 = var5;
                            var5 = function() { // Environment: var4
                                var0 = undefined;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0.onSubmit = var5;
                            var4 = function() {
                                var3 = _closure2_slot0;
                                var2 = var3.dispatch;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 19;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var5 = var1.CommonActions;
                                var4 = var5.navigate;
                                var1 = {};
                                var6 = _closure1_slot9;
                                var6 = var6.ACCOUNT;
                                var1.name = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.onSuccess = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 125:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var10.bind(var11)(var3, var6);
                var _closure2_slot9 = var6;
                var10 = var11.useLayoutEffect;
                var3 = new Array(3);
                var3[0] = var14;
                var3[1] = var6;
                var3[2] = var2;
                var2 = function() { // Environment: var22
                    var2 = _closure2_slot0;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function arg0() {
                        _fun81700: for (var _fun81700_ip = 0;;) switch (_fun81700_ip) {
                            case 0:
                                var1 = _closure2_slot8;
                                var0 = null;
                                if (!var1) {
                                    _fun81700_ip = 137;
                                    continue _fun81700
                                }
                            case 15:
                                var4 = _closure1_slot10;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var1 = 20;
                                var1 = var9[var1];
                                var3 = undefined;
                                var1 = var8.bind(var3)(var1);
                                var2 = var1.HeaderTextButton;
                                var1 = {};
                                var10 = arg0;
                                var11 = var1;
                                var6 = copyDataProperties(var11, var10);
                                var6 = _closure2_slot9;
                                var5 = 'onPress';
                                var1[var5] = var6;
                                var5 = 12;
                                var6 = var9[var5];
                                var6 = var8.bind(var3)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var9[var5];
                                var5 = var8.bind(var3)(var5);
                                var5 = var5.t;
                                var5 = var5["R3BPH+"];
                                var6 = var6.bind(var7)(var5);
                                var5 = 'label';
                                var1[var5] = var6;
                                var0 = var4.bind(var3)(var2, var1);
                            case 137:
                                return var0;
                        }
                    };
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var10.bind(var11)(var2, var3);
                var10 = var11.useCallback;
                var3 = new Array(2);
                var3[0] = var20;
                var3[1] = var6;
                var2 = function() { // Environment: var22
                    _fun81701: for (var _fun81701_ip = 0;;) switch (_fun81701_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun81701_ip = 22;
                                continue _fun81701
                            }
                        case 10:
                            var2 = _closure2_slot9;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun81701_ip = 47;
                            continue _fun81701;
                        case 22:
                            var0 = _closure2_slot7;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun81701_ip = 47;
                                continue _fun81701
                            }
                        case 37:
                            var0 = var1.focus;
                            var0 = var0.bind(var1)();
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var21 = var10.bind(var11)(var2, var3);
                if (!(var0 != var16)) {
                    _fun81692_ip = 1586;
                    continue _fun81692
                }
            case 655:
                var3 = var0 == var13;
                var2 = undefined;
                if (var3) {
                    _fun81692_ip = 679;
                    continue _fun81692
                }
            case 664:
                var10 = var13.getFieldMessage;
                var3 = 'username';
                var2 = var10.bind(var13)(var3);
            case 679:
                if (!(var0 == var2)) {
                    _fun81692_ip = 710;
                    continue _fun81692
                }
            case 683:
                var10 = var0 == var13;
                var3 = undefined;
                if (var10) {
                    _fun81692_ip = 707;
                    continue _fun81692
                }
            case 692:
                var11 = var13.getFieldMessage;
                var10 = 'discriminator';
                var3 = var11.bind(var13)(var10);
            case 707:
                var2 = var3;
            case 710:
                var15 = var1;
                if (!(var0 != var2)) {
                    _fun81692_ip = 762;
                    continue _fun81692
                }
            case 717:
                var1 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 10;
                var3 = var11[var3];
                var3 = var10.bind(var4)(var3);
                var3 = var3.NameValidationState;
                var3 = var3.ERROR;
                var1.type = var3;
                var1.message = var2;
                var15 = var1;
            case 762:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var14 = 21;
                var1 = var1[var14];
                var2 = var2.bind(var4)(var1);
                if (var20) {
                    _fun81692_ip = 875;
                    continue _fun81692
                }
            case 789:
                var1 = {};
                var1.ref = var9;
                var10 = var23.discriminator;
                var1.style = var10;
                var10 = var23.discriminatorInput;
                var1.textStyle = var10;
                var10 = '#';
                var10 = var10 + var8;
                var1.value = var10;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 22;
                var10 = var13[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.ClearButtonVisibility;
                var10 = var10.NEVER;
                var1.clearButtonVisibility = var10;
                var1.editable = var5;
                _fun81692_ip = 1014;
                continue _fun81692;
            case 875:
                var5 = {};
                var5.ref = var9;
                var9 = var23.discriminator;
                var5.style = var9;
                var9 = var23.discriminatorInput;
                var5.textStyle = var9;
                var9 = 'numeric';
                var5.keyboardType = var9;
                var5.value = var8;
                var5.onChangeText = var7;
                var5.onSubmitEditing = var6;
                var6 = '1337';
                var5.placeholder = var6;
                var6 = 'done';
                var5.returnKeyType = var6;
                var6 = 'none';
                var5.autoCapitalize = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 22;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.ClearButtonVisibility;
                var6 = var6.WITH_CONTENT;
                var5.clearButtonVisibility = var6;
                var6 = function() {
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'variant': 'text-md/medium',
                        'children': '#'
                    };
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.renderLeadingComponent = var6;
                var6 = 4;
                var5.maxLength = var6;
                var1 = var5;
            case 1014:
                var18 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot10;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var1 = 23;
                var1 = var25[var1];
                var1 = var24.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var7 = _closure1_slot11;
                var6 = _closure1_slot7;
                var5 = {
                    'style': null,
                    'keyboardShouldPersistTaps': 'handled',
                    'alwaysBounceVertical': false
                };
                var8 = var23.background;
                var5.style = var8;
                var17 = _closure1_slot1;
                var8 = 24;
                var8 = var25[var8];
                var9 = var17.bind(var4)(var8);
                var8 = {};
                var9 = var3.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var10 = _closure1_slot6;
                var9 = {};
                var11 = var23.container;
                var9.style = var11;
                var11 = 25;
                var11 = var25[var11];
                var13 = var17.bind(var4)(var11);
                var11 = {};
                var19 = 12;
                var27 = var25[var19];
                var27 = var24.bind(var4)(var27);
                var29 = var27.intl;
                var28 = var29.string;
                var27 = var25[var19];
                var27 = var24.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.IEpCBQ;
                var27 = var28.bind(var29)(var27);
                var11.children = var27;
                var13 = var3.bind(var4)(var13, var11);
                var11 = new Array(3);
                var11[0] = var13;
                var13 = {};
                var27 = var23.inputs;
                var13.style = var27;
                var14 = var25[var14];
                var17 = var17.bind(var4)(var14);
                var14 = {};
                var27 = var23.username;
                var14.style = var27;
                var27 = var23.usernameInput;
                var14.textStyle = var27;
                var27 = 'username';
                var14.textContentType = var27;
                var27 = 'default';
                var14.keyboardType = var27;
                var14.value = var26;
                var26 = var16.hasUniqueUsername;
                var26 = var26.bind(var16)();
                var14.enableAndroidSanitizedInputWorkaround = var26;
                var22 = function arg0() {
                    _fun81703: for (var _fun81703_ip = 0;;) switch (_fun81703_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot1;
                            var2 = null;
                            var4 = var3;
                            if (!(var2 != var0)) {
                                _fun81703_ip = 49;
                                continue _fun81703
                            }
                        case 19:
                            var5 = _closure2_slot1;
                            var0 = var5.hasUniqueUsername;
                            var0 = var0.bind(var5)();
                            var4 = var3;
                            if (!var0) {
                                _fun81703_ip = 49;
                                continue _fun81703
                            }
                        case 39:
                            var0 = var3.toLowerCase;
                            var4 = var0.bind(var3)();
                        case 49:
                            var3 = _closure2_slot4;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var4);
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var14.onChangeText = var22;
                var14.onSubmitEditing = var21;
                var21 = var25[var19];
                var21 = var24.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var19 = var25[var19];
                var19 = var24.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.IEpCBQ;
                var19 = var21.bind(var22)(var19);
                var14.placeholder = var19;
                var19 = 'done';
                if (!var20) {
                    _fun81692_ip = 1370;
                    continue _fun81692
                }
            case 1366:
                var19 = 'next';
            case 1370:
                var14.returnKeyType = var19;
                var19 = 'none';
                var14.autoCapitalize = var19;
                var19 = true;
                var14.autoFocus = var19;
                var17 = var3.bind(var4)(var17, var14);
                var14 = new Array(3);
                var14[0] = var17;
                var17 = var16.hasUniqueUsername;
                var17 = var17.bind(var16)();
                var17 = !var17;
                if (!var17) {
                    _fun81692_ip = 1469;
                    continue _fun81692
                }
            case 1421:
                var21 = _closure1_slot10;
                var20 = _closure1_slot6;
                var19 = {};
                var22 = var23.divider;
                var19.style = var22;
                var22 = {};
                var23 = var23.dividerInner;
                var22.style = var23;
                var22 = var21.bind(var4)(var20, var22);
                var19.children = var22;
                var17 = var21.bind(var4)(var20, var19);
            case 1469:
                var14[1] = var17;
                var17 = var16.hasUniqueUsername;
                var17 = var17.bind(var16)();
                var17 = !var17;
                if (!var17) {
                    _fun81692_ip = 1492;
                    continue _fun81692
                }
            case 1489:
                var17 = var18;
            case 1492:
                var14[2] = var17;
                var13.children = var14;
                var13 = var7.bind(var4)(var10, var13);
                var11[1] = var13;
                var14 = _closure1_slot10;
                var13 = _closure1_slot13;
                var12 = {};
                var12.usernameStatus = var15;
                var15 = var16.hasUniqueUsername;
                var15 = var15.bind(var16)();
                var12.showHint = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[2] = var12;
                var9.children = var11;
                var9 = var7.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1586:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1621, 660, 33, 1297, 671, 3461, 10370, 3940, 1235, 1469, 566, 3116, 10371, 7313, 507, 1470, 8935, 5943, 5469, 4906, 7580, 5944, 2]);