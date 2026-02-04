// modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx
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
        _fun114352: for (var _fun114352_ip = 0;;) switch (_fun114352_ip) {
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
                _fun114352_ip = 76;
                continue _fun114352;
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
    var0 = function arg0() {
        _fun114355: for (var _fun114355_ip = 0;;) switch (_fun114355_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getRootNavigationRef;
                var3 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var3)) {
                    _fun114355_ip = 86;
                    continue _fun114355
                }
            case 44:
                var2 = var3.navigate;
                var1 = {};
                var4 = 'modal';
                var1.name = var4;
                var4 = var5.key;
                var1.key = var4;
                var4 = {};
                var4.modal = var5;
                var1.params = var4;
                var1 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.popModal;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var2 = 0;
        var1 = copyRestArgs(var2);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            _fun114358: for (var _fun114358_ip = 0;;) switch (_fun114358_ip) {
                case 0:
                    var5 = _closure2_slot0;
                    var0 = var5.length;
                    var4 = 0;
                    var3 = var4 < var0;
                    var2 = null;
                    var0 = undefined;
                    if (!var3) {
                        _fun114358_ip = 90;
                        continue _fun114358
                    }
                case 28:
                    var6 = var5[var4];
                    var7 = var2 == var6;
                    var3 = undefined;
                    if (var7) {
                        _fun114358_ip = 71;
                        continue _fun114358
                    }
                case 41:
                    var7 = var6.isOpen;
                    var7 = var2 == var7;
                    var3 = undefined;
                    if (var7) {
                        _fun114358_ip = 71;
                        continue _fun114358
                    }
                case 56:
                    var8 = var6.isOpen;
                    var7 = _closure1_slot14;
                    var3 = var8.bind(var6)(var7);
                case 71:
                    if (!(var2 != var3)) {
                        _fun114358_ip = 92;
                        continue _fun114358
                    }
                case 75:
                    if (var3) {
                        _fun114358_ip = 92;
                        continue _fun114358
                    }
                case 78:
                    var4 = var4 + 1;
                    var3 = var5.length;
                    if (var4 < var3) {
                        _fun114358_ip = 28;
                        continue _fun114358
                    }
                case 90:
                    return var0;
                case 92:
                    var3 = var6.getComponent;
                    var5 = var3.bind(var6)();
                    var3 = var6.store;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun114358_ip = 123;
                        continue _fun114358
                    }
                case 117:
                    var2 = var3.getProps;
                case 123:
                    var3 = 'function';
                    var2 = typeof var2;
                    if (!(var3 !== var2)) {
                        _fun114358_ip = 138;
                        continue _fun114358
                    }
                case 134:
                    var4 = {};
                    _fun114358_ip = 154;
                    continue _fun114358;
                case 138:
                    var3 = var6.store;
                    var2 = var3.getProps;
                    var4 = var2.bind(var3)();
                case 154:
                    var2 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 13;
                    var1 = var7[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = {};
                    var6 = var6.key;
                    var1.key = var6;
                    var1 = var3.bind(var0)(var5, var1, var4);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot20 = var0;
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
    var7 = var6.bind(var0)(var3);
    var _closure1_slot12 = var7;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.UserRequiredActions;
    var _closure1_slot13 = var8;
    var3 = var3.AppContext;
    var3 = var3.APP;
    var _closure1_slot14 = var3;
    var3 = {
        'key': 'EMAIL_VERIFICATION_MODAL_OPEN',
        'store': null,
        'closable': false,
        'center': true
    };
    var3.store = var7;
    var8 = function() {
        _fun114359: for (var _fun114359_ip = 0;;) switch (_fun114359_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 14;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var2.bind(var3)(var0);
                var2 = var4.isFullScreenVerification;
                var5 = _closure1_slot12;
                var0 = var5.getAction;
                var0 = var0.bind(var5)();
                var0 = var2.bind(var4)(var0);
                if (!var0) {
                    _fun114359_ip = 73;
                    continue _fun114359
                }
            case 53:
                var4 = _closure1_slot9;
                var2 = var4.getToken;
                var4 = var2.bind(var4)();
                var2 = null;
                var0 = var2 != var4;
            case 73:
                if (!var0) {
                    _fun114359_ip = 122;
                    continue _fun114359
                }
            case 76:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.isEligibleForSafetyFlowsExperiment;
                var1 = {};
                var4 = 'modal-manager-verification';
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 122:
                return var0;
        }
    };
    var3.isOpen = var8;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 16;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var3.getComponent = var8;
    var _closure1_slot15 = var3;
    var3 = {
        'key': 'USER_REQUIRED_ACTION_UPDATE',
        'store': null,
        'center': true
    };
    var3.store = var7;
    var7 = function() {
        var2 = _closure1_slot12;
        var1 = var2.getAction;
        var1 = var1.bind(var2)();
        var0 = _closure1_slot13;
        var0 = var0.AGREEMENTS;
        var0 = var1 === var0;
        return var0;
    };
    var3.isOpen = var7;
    var7 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 17;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var3.getComponent = var7;
    var _closure1_slot16 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun114364: for (var _fun114364_ip = 0;;) switch (_fun114364_ip) {
                case 0:
                    var3 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var5 = undefined;
                    var7 = var7.bind(var5)(var3, var1);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var5)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun114364_ip = 86;
                        continue _fun114364
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var3, var10);
                    _fun114364_ip = 120;
                    continue _fun114364;
                case 86:
                    var4 = global;
                    var8 = var4.Reflect;
                    var7 = var8.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var5)(var3);
                    var4 = var4.constructor;
                    var0 = var7.bind(var8)(var9, var10, var4);
                case 120:
                    var0 = var1.bind(var5)(var3, var0);
                    var1 = {};
                    var4 = _closure1_slot20;
                    var7 = _closure1_slot16;
                    var3 = _closure1_slot15;
                    var7 = var4.bind(var5)(var7, var3);
                    var1.CONNECTION_OPEN_SUPPLEMENTAL = var7;
                    var3 = var4.bind(var5)(var3);
                    var1.EMAIL_VERIFICATION_MODAL_OPEN = var3;
                    var3 = function arg0() {
                        _fun114365: for (var _fun114365_ip = 0;;) switch (_fun114365_ip) {
                            case 0:
                                var3 = arg0;
                                var5 = _closure1_slot20;
                                var4 = _closure1_slot16;
                                var2 = _closure1_slot15;
                                var0 = undefined;
                                var2 = var5.bind(var0)(var4, var2);
                                var5 = var3.requiredAction;
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun114365_ip = 60;
                                    continue _fun114365
                                }
                            case 38:
                                var3 = var3.requiredAction;
                                if (!(var4 != var3)) {
                                    _fun114365_ip = 191;
                                    continue _fun114365
                                }
                            case 51:
                                var2 = var2.bind(var0)();
                                _fun114365_ip = 191;
                                continue _fun114365;
                            case 60:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var4 = 12;
                                var2 = var2[var4];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.isModalOpen;
                                var5 = 'USER_REQUIRED_ACTION_UPDATE';
                                var2 = var2.bind(var3)(var5);
                                if (!var2) {
                                    _fun114365_ip = 126;
                                    continue _fun114365
                                }
                            case 98:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var4];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.popModal;
                                var2 = var2.bind(var3)(var5);
                            case 126:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var4];
                                var5 = var3.bind(var0)(var2);
                                var2 = var5.isModalOpen;
                                var3 = 'EMAIL_VERIFICATION_MODAL_OPEN';
                                var2 = var2.bind(var5)(var3);
                                if (!var2) {
                                    _fun114365_ip = 191;
                                    continue _fun114365
                                }
                            case 163:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var4];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.popModal;
                                var1 = var1.bind(var2)(var3);
                            case 191:
                                return var0;
                        }
                    };
                    var1.USER_REQUIRED_ACTION_UPDATE = var3;
                    var3 = {
                        'key': 'GUILD_SETTINGS_OPEN',
                        'store': null,
                        'closable': false
                    };
                    var7 = _closure1_slot8;
                    var3.store = var7;
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.default;
                        return var0;
                    };
                    var3.getComponent = var7;
                    var3 = var4.bind(var5)(var3);
                    var1.GUILD_SETTINGS_OPEN = var3;
                    var3 = {
                        'key': 'NOTIFICATION_SETTINGS_MODAL_OPEN',
                        'store': null,
                        'closable': false
                    };
                    var7 = _closure1_slot11;
                    var3.store = var7;
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 19;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.default;
                        return var0;
                    };
                    var3.getComponent = var7;
                    var3 = var4.bind(var5)(var3);
                    var1.NOTIFICATION_SETTINGS_MODAL_OPEN = var3;
                    var3 = {
                        'key': 'CREATE_INVITE_MODAL_OPEN',
                        'store': null,
                        'closable': false
                    };
                    var7 = _closure1_slot10;
                    var3.store = var7;
                    var6 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 20;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.default;
                        return var0;
                    };
                    var3.getComponent = var6;
                    var3 = var4.bind(var5)(var3);
                    var1.CREATE_INVITE_MODAL_OPEN = var3;
                    var2 = _closure1_slot19;
                    var1.GUILD_SETTINGS_CLOSE = var2;
                    var1.USER_SETTINGS_MODAL_CLOSE = var2;
                    var1.NOTIFICATION_SETTINGS_MODAL_CLOSE = var2;
                    var1.PREMIUM_PAYMENT_MODAL_CLOSE = var2;
                    var1.EMAIL_VERIFICATION_MODAL_CLOSE = var2;
                    var1.CREATE_INVITE_MODAL_CLOSE = var2;
                    var1.QUICKSWITCHER_HIDE = var2;
                    var1.IFE_EXPERIMENT_SEARCH_MODAL_CLOSE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
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
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 8156, 1216, 8332, 14651, 1366, 660, 3920, 3919, 4563, 7474, 14652, 14653, 14661, 14662, 14938, 14940, 4299, 2]);