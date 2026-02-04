// modules/auth/native/LoginRequiredActionManager.tsx
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
        _fun113574: for (var _fun113574_ip = 0;;) switch (_fun113574_ip) {
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
                _fun113574_ip = 76;
                continue _fun113574;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.LoginRequiredActions;
    var _closure1_slot10 = var7;
    var7 = var3.Routes;
    var _closure1_slot11 = var7;
    var3 = var3.UserSettingsSections;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113578: for (var _fun113578_ip = 0;;) switch (_fun113578_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun113578_ip = 84;
                        continue _fun113578
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun113578_ip = 118;
                    continue _fun113578;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handleConnectionOpen;
                    var1.POST_CONNECTION_OPEN = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'handleConnectionOpen';
        var4.key = var5;
        var0 = function() {
            _fun113579: for (var _fun113579_ip = 0;;) switch (_fun113579_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    var _closure3_slot0 = var0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun113579_ip = 226;
                        continue _fun113579
                    }
                case 31:
                    var6 = _closure1_slot9;
                    var2 = var6.wasLoginAttemptedInSession;
                    var1 = var0.id;
                    var1 = var2.bind(var6)(var1);
                    var5 = var6.requiredActionsIncludes;
                    var2 = var0.id;
                    var0 = _closure1_slot10;
                    var7 = var0.UPDATE_PASSWORD;
                    var0 = new Array(1);
                    var0[0] = var7;
                    var0 = var5.bind(var6)(var2, var0);
                    if (!var1) {
                        _fun113579_ip = 92;
                        continue _fun113579
                    }
                case 89:
                    if (var0) {
                        _fun113579_ip = 150;
                        continue _fun113579
                    }
                case 92:
                    if (!var0) {
                        _fun113579_ip = 226;
                        continue _fun113579
                    }
                case 98:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var2 = var5.logout;
                    var0 = _closure1_slot11;
                    var1 = var0.LOGIN;
                    var0 = 'login_required_account_manager';
                    var0 = var2.bind(var5)(var0, var1);
                    _fun113579_ip = 226;
                    continue _fun113579;
                case 150:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openUserSettings;
                    var0 = {};
                    var4 = _closure1_slot12;
                    var4 = var4.ACCOUNT_CHANGE_PASSWORD;
                    var0.screen = var4;
                    var4 = {};
                    var5 = true;
                    var4.isLoginRequiredAction = var5;
                    var0.params = var4;
                    var3 = function() {
                        _fun113580: for (var _fun113580_ip = 0;;) switch (_fun113580_ip) {
                            case 0:
                                var4 = _closure1_slot9;
                                var3 = var4.requiredActionsIncludes;
                                var1 = _closure3_slot0;
                                var2 = var1.id;
                                var1 = _closure1_slot10;
                                var5 = var1.UPDATE_PASSWORD;
                                var1 = new Array(1);
                                var1[0] = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                if (!var1) {
                                    _fun113580_ip = 102;
                                    continue _fun113580
                                }
                            case 52:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.logout;
                                var0 = _closure1_slot11;
                                var1 = var0.LOGIN;
                                var0 = 'login_required_account_manager';
                                var0 = var2.bind(var3)(var0, var1);
                            case 102:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onClose = var3;
                    var0 = var1.bind(var2)(var0);
                case 226:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/LoginRequiredActionManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 1365, 660, 5922, 4557, 4299, 2]);