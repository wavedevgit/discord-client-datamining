// modules/multi_account/MultiAccountManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113731: for (var _fun113731_ip = 0;;) switch (_fun113731_ip) {
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
                _fun113731_ip = 76;
                continue _fun113731;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot12 = var3;
    var3 = false;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113735: for (var _fun113735_ip = 0;;) switch (_fun113735_ip) {
                case 0:
                    var0 = arg0;
                    var8 = this;
                    var4 = var0.onSwitchStart;
                    var3 = var0.onSwitchSuccess;
                    var2 = var0.onSwitchError;
                    var1 = var0.onTokenSet;
                    var0 = _closure1_slot5;
                    var6 = _closure2_slot0;
                    var7 = undefined;
                    var0 = var0.bind(var7)(var8, var6);
                    var0 = _closure1_slot8;
                    var13 = var0.bind(var7)(var6);
                    var6 = _closure1_slot7;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var7)();
                    if (var0) {
                        _fun113735_ip = 91;
                        continue _fun113735
                    }
                case 78:
                    var0 = var13.apply;
                    var0 = var0.bind(var13)(var8, var7);
                    _fun113735_ip = 129;
                    continue _fun113735;
                case 91:
                    var10 = global;
                    var12 = var10.Reflect;
                    var11 = var12.construct;
                    var9 = _closure1_slot8;
                    var9 = var9.bind(var7)(var8);
                    var10 = var9.constructor;
                    var9 = new Array(0);
                    var0 = var11.bind(var12)(var13, var9, var10);
                case 129:
                    var0 = var6.bind(var7)(var8, var0);
                    var _closure3_slot0 = var0;
                    var6 = {};
                    var7 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleLogout;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.LOGOUT = var7;
                    var0.actions = var6;
                    var6 = function() { // Environment: var5
                        _fun113737: for (var _fun113737_ip = 0;;) switch (_fun113737_ip) {
                            case 0:
                                var2 = _closure1_slot10;
                                var1 = var2.getCurrentUser;
                                var2 = var1.bind(var2)();
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun113737_ip = 392;
                                    continue _fun113737
                                }
                            case 25:
                                var1 = _closure1_slot4;
                                if (!(var3 != var1)) {
                                    _fun113737_ip = 267;
                                    continue _fun113737
                                }
                            case 36:
                                var4 = _closure1_slot4;
                                var1 = _closure1_slot3;
                                if (!(var4 === var1)) {
                                    _fun113737_ip = 130;
                                    continue _fun113737
                                }
                            case 48:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 8;
                                var4 = var4[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.track;
                                var1 = _closure1_slot12;
                                var1 = var1.MULTI_ACCOUNT_SWITCH_FAILURE;
                                var1 = var4.bind(var5)(var1);
                                var4 = _closure3_slot0;
                                var4 = var4.onSwitchError;
                                if (!(var3 != var4)) {
                                    _fun113737_ip = 263;
                                    continue _fun113737
                                }
                            case 110:
                                var4 = _closure3_slot0;
                                var1 = var4.onSwitchError;
                                var1 = var1.bind(var4)(var2);
                                _fun113737_ip = 263;
                                continue _fun113737;
                            case 130:
                                var4 = _closure1_slot11;
                                var1 = var4.getUsers;
                                var5 = var1.bind(var4)();
                                var4 = var5.map;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var7 = var4.bind(var5)(var1);
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 8;
                                var4 = var4[var1];
                                var1 = undefined;
                                var6 = var5.bind(var1)(var4);
                                var5 = var6.track;
                                var1 = _closure1_slot12;
                                var4 = var1.MULTI_ACCOUNT_SWITCH_SUCCESS;
                                var1 = {};
                                var8 = _closure1_slot4;
                                var1.from_user_id = var8;
                                var1.linked_user_ids = var7;
                                var1 = var5.bind(var6)(var4, var1);
                                var4 = _closure3_slot0;
                                var4 = var4.onSwitchSuccess;
                                if (!(var3 != var4)) {
                                    _fun113737_ip = 263;
                                    continue _fun113737
                                }
                            case 243:
                                var5 = _closure3_slot0;
                                var4 = var5.onSwitchSuccess;
                                var1 = _closure1_slot13;
                                var1 = var4.bind(var5)(var2, var1);
                            case 263:
                                var _closure1_slot4 = var3;
                            case 267:
                                var1 = var2.id;
                                var _closure1_slot3 = var1;
                                var5 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var6 = 9;
                                var1 = var1[var6];
                                var4 = undefined;
                                var5 = var5.bind(var4)(var1);
                                var1 = var5.getToken;
                                var5 = var1.bind(var5)();
                                var1 = var3 != var5;
                                if (!var1) {
                                    _fun113737_ip = 323;
                                    continue _fun113737
                                }
                            case 315:
                                var7 = '';
                                var1 = var7 !== var5;
                            case 323:
                                if (!var1) {
                                    _fun113737_ip = 360;
                                    continue _fun113737
                                }
                            case 326:
                                var1 = _closure1_slot1;
                                var0 = _closure1_slot2;
                                var0 = var0[var6];
                                var4 = var1.bind(var4)(var0);
                                var1 = var4.setToken;
                                var0 = var2.id;
                                var0 = var1.bind(var4)(var5, var0);
                            case 360:
                                var1 = _closure3_slot0;
                                var1 = var1.onTokenSet;
                                if (!(var3 != var1)) {
                                    _fun113737_ip = 392;
                                    continue _fun113737
                                }
                            case 377:
                                var1 = _closure3_slot0;
                                var0 = var1.onTokenSet;
                                var0 = var0.bind(var1)(var2);
                            case 392:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleConnectionOpen = var6;
                    var5 = function(arg0) { // Environment: var5
                        _fun113739: for (var _fun113739_ip = 0;;) switch (_fun113739_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.isSwitchingAccount;
                                if (var2) {
                                    _fun113739_ip = 60;
                                    continue _fun113739
                                }
                            case 15:
                                var2 = false;
                                _closure1_slot13 = var2;
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 9;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.removeToken;
                                var2 = _closure1_slot3;
                                var2 = var3.bind(var4)(var2);
                                _fun113739_ip = 117;
                                continue _fun113739;
                            case 60:
                                var2 = _closure1_slot3;
                                _closure1_slot4 = var2;
                                var3 = _closure3_slot0;
                                var4 = var3.onSwitchStart;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun113739_ip = 101;
                                    continue _fun113739
                                }
                            case 87:
                                var3 = _closure3_slot0;
                                var2 = var3.onSwitchStart;
                                var2 = var2.bind(var3)();
                            case 101:
                                var0 = var0.goHomeAfterSwitching;
                                var0 = !var0;
                                var0 = !var0;
                                _closure1_slot13 = var0;
                            case 117:
                                var0 = null;
                                _closure1_slot3 = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleLogout = var5;
                    var0.onSwitchStart = var4;
                    var0.onSwitchSuccess = var3;
                    var0.onSwitchError = var2;
                    var0.onTokenSet = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 10;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.subscribe;
            var3 = 'CONNECTION_OPEN';
            var1 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.handleConnectionOpen;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2.handleConnectionOpen;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = 'CONNECTION_OPEN';
            var1 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.handleConnectionOpen;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/multi_account/MultiAccountManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 10278, 660, 795, 804, 806, 4299, 2]);