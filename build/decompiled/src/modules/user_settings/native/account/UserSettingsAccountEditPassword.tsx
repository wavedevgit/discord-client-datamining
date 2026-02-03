// modules/user_settings/native/account/UserSettingsAccountEditPassword.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun81537: for (var _fun81537_ip = 0;;) switch (_fun81537_ip) {
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
                _fun81537_ip = 76;
                continue _fun81537;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.Image;
    var _closure1_slot8 = var7;
    var7 = var6.View;
    var _closure1_slot9 = var7;
    var6 = var6.ScrollView;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.AnalyticEvents;
    var _closure1_slot14 = var7;
    var6 = var6.LoginRequiredActions;
    var _closure1_slot15 = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot16 = var7;
    var6 = var6.jsxs;
    var _closure1_slot17 = var6;
    var6 = {};
    var6.newPassword = var0;
    var7 = '';
    var6.password = var7;
    var _closure1_slot18 = var6;
    var6 = 12;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createLegacyClassComponentStyles;
    var6 = {};
    var10 = 20;
    var9 = {
        'width': 20,
        'height': 20
    };
    var6.onePass = var9;
    var9 = {
        'overflow': 'hidden',
        'borderRadius': null,
        'marginVertical': 16
    };
    var11 = 13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var9.borderRadius = var11;
    var11 = 16;
    var6.unverifiedWrapper = var9;
    var9 = {};
    var9.padding = var11;
    var6.container = var9;
    var9 = {};
    var9.marginBottom = var10;
    var6.header = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 8
    };
    var6.requiredActionsSubtitle = var9;
    var9 = {
        'flex': 1,
        'textAlign': 'center'
    };
    var6.requiredActionsTitle = var9;
    var9 = {
        'marginTop': 12,
        'marginBottom': 16,
        'alignSelf': 'center'
    };
    var6.image = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot19 = var6;
    var6 = var3.Component;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun81541: for (var _fun81541_ip = 0;;) switch (_fun81541_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun81541_ip = 86;
                        continue _fun81541
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun81541_ip = 120;
                    continue _fun81541;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot18;
                    var0.state = var2;
                    var2 = null;
                    var0.newPasswordRef = var2;
                    var0.passwordManagerRef = var2;
                    var2 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var0.password = var4;
                        var0 = var1.bind(var2)(var0);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 14;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateAccount;
                        var1 = {};
                        var1.password = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handlePasswordChange = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1.newPasswordRef = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSetNewPasswordRef = var2;
                    var2 = function() { // Environment: var1
                        _fun81544: for (var _fun81544_ip = 0;;) switch (_fun81544_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0.newPasswordRef;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun81544_ip = 29;
                                    continue _fun81544
                                }
                            case 19:
                                var0 = var1.focus;
                                var0 = var0.bind(var1)();
                            case 29:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleFocusNewPassword = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun81545: for (var _fun81545_ip = 0;;) switch (_fun81545_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = '';
                                if (!(var0 === var4)) {
                                    _fun81545_ip = 13;
                                    continue _fun81545
                                }
                            case 11:
                                var4 = undefined;
                            case 13:
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var0.newPassword = var4;
                                var0 = var1.bind(var2)(var0);
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.updateAccount;
                                var1 = {};
                                var1.newPassword = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.handleNewPasswordChange = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var2 = var0.state;
                        var6 = var2.password;
                        var2 = var2.newPassword;
                        var0 = var0.props;
                        var0 = var0.showForcedPasswordUpdate;
                        var _closure4_slot0 = var0;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 14;
                        var3 = var3[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.saveAccountChanges;
                        var3 = {};
                        var3.password = var6;
                        var3.newPassword = var2;
                        var2 = {};
                        var6 = false;
                        var2.close = var6;
                        var3 = var4.bind(var5)(var3, var2);
                        var2 = var3.then;
                        var1 = function(arg0) { // Environment: var1
                            _fun81547: for (var _fun81547_ip = 0;;) switch (_fun81547_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = var1.ok;
                                    if (var0) {
                                        _fun81547_ip = 37;
                                        continue _fun81547
                                    }
                                case 12:
                                    var3 = var1.body;
                                    var2 = null;
                                    var4 = var2 == var3;
                                    var1 = undefined;
                                    if (var4) {
                                        _fun81547_ip = 33;
                                        continue _fun81547
                                    }
                                case 28:
                                    var1 = var3.username;
                                case 33:
                                    var0 = var2 == var1;
                                case 37:
                                    if (var0) {
                                        _fun81547_ip = 75;
                                        continue _fun81547
                                    }
                                case 40:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 15;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var0 = var1.showInvalidUsernameToast;
                                    var0 = var0.bind(var1)();
                                case 75:
                                    var2 = _closure1_slot12;
                                    var1 = var2.getErrors;
                                    var4 = var1.bind(var2)();
                                    var1 = null;
                                    var1 = var1 == var4;
                                    if (var1) {
                                        _fun81547_ip = 138;
                                        continue _fun81547
                                    }
                                case 101:
                                    var5 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 16;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var2 = var5.bind(var3)(var2);
                                    var3 = var2.bind(var3)(var4);
                                    var2 = var3.isEmpty;
                                    var1 = var2.bind(var3)();
                                case 138:
                                    if (!var1) {
                                        _fun81547_ip = 245;
                                        continue _fun81547
                                    }
                                case 141:
                                    var1 = _closure4_slot0;
                                    if (var1) {
                                        _fun81547_ip = 181;
                                        continue _fun81547
                                    }
                                case 151:
                                    var1 = _closure3_slot0;
                                    var1 = var1.props;
                                    var2 = var1.navigation;
                                    var1 = var2.pop;
                                    var1 = var1.bind(var2)();
                                    _fun81547_ip = 245;
                                    continue _fun81547;
                                case 181:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 17;
                                    var4 = var3[var1];
                                    var1 = undefined;
                                    var5 = var2.bind(var1)(var4);
                                    var4 = var5.track;
                                    var0 = _closure1_slot14;
                                    var0 = var0.FORCED_UPDATE_PASSWORD_SUCCEEDED;
                                    var0 = var4.bind(var5)(var0);
                                    var0 = 14;
                                    var0 = var3[var0];
                                    var1 = var2.bind(var1)(var0);
                                    var0 = var1.close;
                                    var0 = var0.bind(var1)();
                                case 245:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleSubmit = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1.passwordManagerRef = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSetPasswordManagerRef = var2;
                    var1 = function() { // Environment: var1
                        _fun81549: for (var _fun81549_ip = 0;;) switch (_fun81549_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.state;
                                var1 = var0.password;
                                var2 = var0.newPassword;
                                var3 = null;
                                var0 = var3 != var1;
                                if (!var0) {
                                    _fun81549_ip = 41;
                                    continue _fun81549
                                }
                            case 33:
                                var4 = '';
                                var0 = var4 !== var1;
                            case 41:
                                if (!var0) {
                                    _fun81549_ip = 48;
                                    continue _fun81549
                                }
                            case 44:
                                var0 = var3 != var2;
                            case 48:
                                if (!var0) {
                                    _fun81549_ip = 59;
                                    continue _fun81549
                                }
                            case 51:
                                var3 = '';
                                var0 = var3 !== var2;
                            case 59:
                                if (!var0) {
                                    _fun81549_ip = 88;
                                    continue _fun81549
                                }
                            case 62:
                                var1 = var1.length;
                                var3 = 0;
                                var1 = var1 > var3;
                                if (!var1) {
                                    _fun81549_ip = 85;
                                    continue _fun81549
                                }
                            case 76:
                                var2 = var2.length;
                                var1 = var2 > var3;
                            case 85:
                                var0 = var1;
                            case 88:
                                return var0;
                        }
                    };
                    var0.canSubmit = var1;
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
        var0 = 'componentWillUnmount';
        var4.key = var0;
        var0 = function() {
            _fun81550: for (var _fun81550_ip = 0;;) switch (_fun81550_ip) {
                case 0: // try_start_0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                case 35: // try_end0
                    _fun81550_ip = 39;
                    continue _fun81550;
                case 37: // catch_target0
                    CatchBlockStart(arg_register = 0);
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var6 = function arg0() {
            _fun81551: for (var _fun81551_ip = 0;;) switch (_fun81551_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.errors;
                    var5 = null;
                    var3 = var5 != var1;
                    var0 = undefined;
                    if (!var3) {
                        _fun81551_ip = 51;
                        continue _fun81551
                    }
                case 28:
                    var3 = var1[var2];
                    var3 = var5 != var3;
                    var0 = undefined;
                    if (!var3) {
                        _fun81551_ip = 51;
                        continue _fun81551
                    }
                case 41:
                    var2 = var1[var2];
                    var1 = 0;
                    var0 = var2[var1];
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun81552: for (var _fun81552_ip = 0;;) switch (_fun81552_ip) {
                case 0:
                    var16 = this;
                    var1 = _closure1_slot19;
                    var0 = var16.context;
                    var3 = undefined;
                    var24 = var1.bind(var3)(var0);
                    var0 = var16.state;
                    var18 = var0.password;
                    var17 = var0.newPassword;
                    var0 = var16.props;
                    var20 = var0.passwordLabel;
                    var22 = var0.newPasswordLabel;
                    var8 = var0.showForcedPasswordUpdate;
                    var15 = var0.submitting;
                    var9 = var0.hasBannerText;
                    var2 = _closure1_slot16;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var6 = _closure1_slot17;
                    var5 = _closure1_slot9;
                    var4 = {};
                    var7 = var24.container;
                    var4.style = var7;
                    if (!var9) {
                        _fun81552_ip = 164;
                        continue _fun81552
                    }
                case 106:
                    var11 = _closure1_slot16;
                    var10 = _closure1_slot9;
                    var7 = {};
                    var12 = var24.unverifiedWrapper;
                    var7.style = var12;
                    var14 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var12 = 18;
                    var12 = var19[var12];
                    var14 = var14.bind(var3)(var12);
                    var12 = {};
                    var12 = var11.bind(var3)(var14, var12);
                    var7.children = var12;
                    var9 = var11.bind(var3)(var10, var7);
                case 164:
                    var7 = new Array(4);
                    var7[0] = var9;
                    var9 = var8;
                    if (!var9) {
                        _fun81552_ip = 476;
                        continue _fun81552
                    }
                case 181:
                    var12 = _closure1_slot17;
                    var11 = _closure1_slot9;
                    var10 = {};
                    var14 = var24.header;
                    var10.style = var14;
                    var23 = _closure1_slot16;
                    var19 = _closure1_slot8;
                    var14 = {};
                    var25 = _closure1_slot1;
                    var29 = _closure1_slot2;
                    var21 = 19;
                    var21 = var29[var21];
                    var21 = var25.bind(var3)(var21);
                    var14.source = var21;
                    var21 = var24.image;
                    var14.style = var21;
                    var19 = var23.bind(var3)(var19, var14);
                    var14 = new Array(3);
                    var14[0] = var19;
                    var28 = _closure1_slot0;
                    var19 = 20;
                    var21 = var29[var19];
                    var21 = var28.bind(var3)(var21);
                    var26 = var21.Text;
                    var21 = {
                        'style': null,
                        'variant': 'heading-xl/extrabold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var25 = var24.requiredActionsTitle;
                    var21.style = var25;
                    var25 = 21;
                    var27 = var29[var25];
                    var27 = var28.bind(var3)(var27);
                    var31 = var27.intl;
                    var30 = var31.string;
                    var27 = var29[var25];
                    var27 = var28.bind(var3)(var27);
                    var27 = var27.t;
                    var27 = var27.geta79;
                    var27 = var30.bind(var31)(var27);
                    var21.children = var27;
                    var21 = var23.bind(var3)(var26, var21);
                    var14[1] = var21;
                    var19 = var29[var19];
                    var19 = var28.bind(var3)(var19);
                    var21 = var19.Text;
                    var19 = {
                        'style': null,
                        'variant': 'text-sm/medium',
                        'color': 'text-default'
                    };
                    var26 = var24.requiredActionsSubtitle;
                    var19.style = var26;
                    var26 = var29[var25];
                    var26 = var28.bind(var3)(var26);
                    var27 = var26.intl;
                    var26 = var27.string;
                    var25 = var29[var25];
                    var25 = var28.bind(var3)(var25);
                    var25 = var25.t;
                    var25 = var25["37iHbZ"];
                    var25 = var26.bind(var27)(var25);
                    var19.children = var25;
                    var19 = var23.bind(var3)(var21, var19);
                    var14[2] = var19;
                    var10.children = var14;
                    var9 = var12.bind(var3)(var11, var10);
                case 476:
                    var7[1] = var9;
                    var8 = !var8;
                    if (!var8) {
                        _fun81552_ip = 738;
                        continue _fun81552
                    }
                case 489:
                    var11 = _closure1_slot17;
                    var10 = _closure1_slot9;
                    var9 = {};
                    var12 = var24.header;
                    var9.style = var12;
                    var21 = _closure1_slot16;
                    var26 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var14 = 20;
                    var12 = var27[var14];
                    var12 = var26.bind(var3)(var12);
                    var19 = var12.Text;
                    var12 = {
                        'style': null,
                        'variant': 'heading-xl/extrabold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var23 = var24.requiredActionsTitle;
                    var12.style = var23;
                    var23 = 21;
                    var25 = var27[var23];
                    var25 = var26.bind(var3)(var25);
                    var29 = var25.intl;
                    var28 = var29.string;
                    var25 = var27[var23];
                    var25 = var26.bind(var3)(var25);
                    var25 = var25.t;
                    var25 = var25.geta79;
                    var25 = var28.bind(var29)(var25);
                    var12.children = var25;
                    var19 = var21.bind(var3)(var19, var12);
                    var12 = new Array(2);
                    var12[0] = var19;
                    var14 = var27[var14];
                    var14 = var26.bind(var3)(var14);
                    var19 = var14.Text;
                    var14 = {
                        'style': null,
                        'variant': 'text-sm/medium',
                        'color': 'text-default'
                    };
                    var24 = var24.requiredActionsSubtitle;
                    var14.style = var24;
                    var24 = var27[var23];
                    var24 = var26.bind(var3)(var24);
                    var25 = var24.intl;
                    var24 = var25.string;
                    var23 = var27[var23];
                    var23 = var26.bind(var3)(var23);
                    var23 = var23.t;
                    var23 = var23.x5tG4V;
                    var23 = var24.bind(var25)(var23);
                    var14.children = var23;
                    var14 = var21.bind(var3)(var19, var14);
                    var12[1] = var14;
                    var9.children = var12;
                    var8 = var11.bind(var3)(var10, var9);
                case 738:
                    var7[2] = var8;
                    var10 = _closure1_slot17;
                    var14 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 22;
                    var8 = var11[var8];
                    var8 = var14.bind(var3)(var8);
                    var9 = var8.Stack;
                    var8 = {};
                    var12 = 24;
                    var8.spacing = var12;
                    var19 = _closure1_slot16;
                    var23 = 23;
                    var11 = var11[var23];
                    var11 = var14.bind(var3)(var11);
                    var14 = var11.TextInput;
                    var11 = {};
                    var11.label = var20;
                    var21 = true;
                    var11.secureTextEntry = var21;
                    var24 = var16.getError;
                    var20 = 'password';
                    var20 = var24.bind(var16)(var20);
                    var11.errorMessage = var20;
                    var20 = var16.handlePasswordChange;
                    var11.onChange = var20;
                    var11.value = var18;
                    var20 = var16.canSubmit;
                    var20 = var20.bind(var16)();
                    if (var20) {
                        _fun81552_ip = 872;
                        continue _fun81552
                    }
                case 864:
                    var20 = var16.handleFocusNewPassword;
                    _fun81552_ip = 878;
                    continue _fun81552;
                case 872:
                    var20 = var16.handleSubmit;
                case 878:
                    var11.onSubmitEditing = var20;
                    var20 = 'next';
                    var11.returnKeyType = var20;
                    var20 = 'current-password';
                    var11.autoComplete = var20;
                    var11.required = var21;
                    var14 = var19.bind(var3)(var14, var11);
                    var11 = new Array(3);
                    var11[0] = var14;
                    var20 = _closure1_slot16;
                    var19 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var23];
                    var14 = var19.bind(var3)(var14);
                    var19 = var14.TextInput;
                    var14 = {};
                    var14.label = var22;
                    var22 = var16.handleSetNewPasswordRef;
                    var14.ref = var22;
                    var14.secureTextEntry = var21;
                    var23 = var16.getError;
                    var22 = 'new_password';
                    var22 = var23.bind(var16)(var22);
                    var14.errorMessage = var22;
                    var22 = var16.handleNewPasswordChange;
                    var14.onChange = var22;
                    var14.value = var17;
                    var22 = 'done';
                    var14.returnKeyType = var22;
                    var22 = 'new-password';
                    var14.autoComplete = var22;
                    var22 = var16.canSubmit;
                    var23 = var22.bind(var16)();
                    var22 = undefined;
                    if (!var23) {
                        _fun81552_ip = 1042;
                        continue _fun81552
                    }
                case 1036:
                    var22 = var16.handleSubmit;
                case 1042:
                    var14.onSubmitEditing = var22;
                    var14.required = var21;
                    var14 = var20.bind(var3)(var19, var14);
                    var11[1] = var14;
                    var14 = _closure1_slot16;
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var12 = var23[var12];
                    var12 = var22.bind(var3)(var12);
                    var13 = var12.Button;
                    var12 = {};
                    var19 = 21;
                    var20 = var23[var19];
                    var20 = var22.bind(var3)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var19 = var23[var19];
                    var19 = var22.bind(var3)(var19);
                    var19 = var19.t;
                    var19 = var19["FRep5/"];
                    var19 = var20.bind(var21)(var19);
                    var12.text = var19;
                    var16 = var16.handleSubmit;
                    var12.onPress = var16;
                    var12.loading = var15;
                    if (var15) {
                        _fun81552_ip = 1168;
                        continue _fun81552
                    }
                case 1162:
                    var16 = null;
                    var15 = var16 == var18;
                case 1168:
                    if (var15) {
                        _fun81552_ip = 1177;
                        continue _fun81552
                    }
                case 1171:
                    var16 = null;
                    var15 = var16 == var17;
                case 1177:
                    var12.disabled = var15;
                    var12 = var14.bind(var3)(var13, var12);
                    var11[2] = var12;
                    var8.children = var11;
                    var8 = var10.bind(var3)(var9, var8);
                    var7[3] = var8;
                    var4.children = var7;
                    var4 = var6.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot20 = var6;
    var3 = 25;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var6.contextType = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/UserSettingsAccountEditPassword.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun81553: for (var _fun81553_ip = 0;;) switch (_fun81553_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 26;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.useSettingNavigationRoute;
                var2 = var2.bind(var4)();
                var5 = var2.params;
                var2 = null;
                var6 = var2 == var5;
                var4 = undefined;
                if (var6) {
                    _fun81553_ip = 60;
                    continue _fun81553
                }
            case 54:
                var4 = var5.isLoginRequiredAction;
            case 60:
                var2 = var2 != var4;
                if (!var2) {
                    _fun81553_ip = 70;
                    continue _fun81553
                }
            case 67:
                var2 = var4;
            case 70:
                var _closure2_slot0 = var2;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 27;
                var4 = var5[var4];
                var7 = var2.bind(var3)(var4);
                var6 = var7.useStateFromStoresObject;
                var8 = _closure1_slot13;
                var4 = new Array(3);
                var4[0] = var8;
                var8 = _closure1_slot12;
                var4[1] = var8;
                var8 = _closure1_slot11;
                var4[2] = var8;
                var1 = function() { // Environment: var1
                    _fun81554: for (var _fun81554_ip = 0;;) switch (_fun81554_ip) {
                        case 0:
                            var1 = _closure1_slot13;
                            var0 = var1.getCurrentUser;
                            var7 = var0.bind(var1)();
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 18;
                            var0 = var2[var0];
                            var8 = undefined;
                            var1 = var1.bind(var8)(var0);
                            var0 = var1.getBannerText;
                            var0 = var0.bind(var1)(var7);
                            var5 = null;
                            var1 = var5 != var0;
                            var2 = _closure1_slot12;
                            var0 = var2.getErrors;
                            var10 = var0.bind(var2)();
                            var0 = var2.getSubmitting;
                            var9 = var0.bind(var2)();
                            var0 = var2.getSettings;
                            var6 = var0.bind(var2)();
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun81554_ip = 137;
                                continue _fun81554
                            }
                        case 101:
                            var2 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var0 = 28;
                            var0 = var11[var0];
                            var11 = var2.bind(var8)(var0);
                            var2 = var5 != var7;
                            var0 = 'EditPasswordWrapper: user cannot be undefined';
                            var0 = var11.bind(var8)(var2, var0);
                        case 137:
                            var0 = var5 == var7;
                            var13 = undefined;
                            if (var0) {
                                _fun81554_ip = 151;
                                continue _fun81554
                            }
                        case 146:
                            var13 = var7.id;
                        case 151:
                            var2 = var5 != var13;
                            if (!var2) {
                                _fun81554_ip = 192;
                                continue _fun81554
                            }
                        case 158:
                            var12 = _closure1_slot11;
                            var11 = var12.requiredActionsIncludes;
                            var0 = _closure1_slot15;
                            var14 = var0.UPDATE_PASSWORD;
                            var0 = new Array(1);
                            var0[0] = var14;
                            var2 = var11.bind(var12)(var13, var0);
                        case 192:
                            var0 = {};
                            var0.errors = var10;
                            var0.submitting = var9;
                            var0.settings = var6;
                            var0.user = var7;
                            var9 = var5 == var7;
                            var6 = undefined;
                            if (var9) {
                                _fun81554_ip = 228;
                                continue _fun81554
                            }
                        case 222:
                            var6 = var7.verified;
                        case 228:
                            var5 = var5 != var6;
                            if (!var5) {
                                _fun81554_ip = 238;
                                continue _fun81554
                            }
                        case 235:
                            var5 = var6;
                        case 238:
                            var0.verified = var5;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 21;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.WBqMRQ;
                            var5 = var6.bind(var10)(var5);
                            var0.passwordLabel = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4["8dM4FO"];
                            var4 = var5.bind(var6)(var4);
                            var0.newPasswordLabel = var4;
                            if (!var2) {
                                _fun81554_ip = 363;
                                continue _fun81554
                            }
                        case 359:
                            var2 = _closure2_slot0;
                        case 363:
                            var0.showForcedPasswordUpdate = var2;
                            var0.hasBannerText = var1;
                            return var0;
                    }
                };
                var9 = var6.bind(var7)(var4, var1);
                var1 = 29;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigation;
                var5 = var1.bind(var2)();
                var2 = _closure1_slot16;
                var1 = _closure1_slot20;
                var0 = {};
                var0.navigation = var5;
                var10 = var0;
                var4 = copyDataProperties(var10, var9);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1365, 5923, 1621, 660, 33, 1297, 671, 7224, 6946, 22, 795, 7550, 10386, 3941, 1234, 4080, 5401, 4084, 3159, 7549, 566, 44, 1469, 2]);