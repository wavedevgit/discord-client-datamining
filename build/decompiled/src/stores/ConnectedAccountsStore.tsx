// stores/ConnectedAccountsStore.tsx
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
        _fun40708: for (var _fun40708_ip = 0;;) switch (_fun40708_ip) {
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
            case 70: // try_end0
                _fun40708_ip = 74;
                continue _fun40708;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var7 = true;
    var8.value = var7;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var8 = var5[var0];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.PlatformTypes;
    var10 = var1.Set;
    var9 = var8.CONTACTS;
    var8 = new Array(1);
    var8[0] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var14 = var9;
    var13 = var8;
    var8 = new var14[var10](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot9 = var8;
    var _closure1_slot10 = var7;
    var7 = new Array(0);
    var _closure1_slot11 = var7;
    var7 = new Array(0);
    var _closure1_slot12 = var7;
    var7 = {};
    var _closure1_slot13 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot14 = var1;
    var1 = {};
    var _closure1_slot15 = var1;
    var1 = {};
    var _closure1_slot16 = var1;
    var1 = function arg0() {
        var3 = arg0;
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun40712: for (var _fun40712_ip = 0;;) switch (_fun40712_ip) {
                case 0:
                    var1 = arg0;
                    var4 = _closure1_slot9;
                    var3 = var4.has;
                    var0 = var1.type;
                    var0 = var3.bind(var4)(var0);
                    var0 = !var0;
                    if (!var0) {
                        _fun40712_ip = 69;
                        continue _fun40712
                    }
                case 31:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.isSupported;
                    var1 = var1.type;
                    var0 = var2.bind(var3)(var1);
                case 69:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        _closure1_slot11 = var2;
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot9;
            var1 = var2.has;
            var0 = arg0;
            var0 = var0.type;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot12 = var0;
        var0 = false;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot17 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun40715: for (var _fun40715_ip = 0;;) switch (_fun40715_ip) {
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
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun40715_ip = 69;
                        continue _fun40715
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun40715_ip = 105;
                    continue _fun40715;
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
        var0 = 'isJoining';
        var4.key = var0;
        var0 = function arg0() {
            _fun40716: for (var _fun40716_ip = 0;;) switch (_fun40716_ip) {
                case 0:
                    var1 = _closure1_slot13;
                    var0 = arg0;
                    var0 = var1[var0];
                    if (var0) {
                        _fun40716_ip = 19;
                        continue _fun40716
                    }
                case 17:
                    var0 = false;
                case 19:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'joinErrorMessage';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot16;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getAccounts';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getLocalAccounts';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getAccount';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var2 = _closure1_slot11;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                _fun40722: for (var _fun40722_ip = 0;;) switch (_fun40722_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var0 = null;
                        var0 = var0 == var3;
                        if (var0) {
                            _fun40722_ip = 32;
                            continue _fun40722
                        }
                    case 19:
                        var4 = var2.id;
                        var3 = _closure3_slot0;
                        var0 = var4 === var3;
                    case 32:
                        if (!var0) {
                            _fun40722_ip = 48;
                            continue _fun40722
                        }
                    case 35:
                        var2 = var2.type;
                        var1 = _closure3_slot1;
                        var0 = var2 === var1;
                    case 48:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getLocalAccount';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot12;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isSuggestedAccountType';
        var4.key = var6;
        var6 = function arg0() {
            _fun40725: for (var _fun40725_ip = 0;;) switch (_fun40725_ip) {
                case 0:
                    var1 = _closure1_slot15;
                    var0 = arg0;
                    var0 = var1[var0];
                    if (var0) {
                        _fun40725_ip = 19;
                        continue _fun40725
                    }
                case 17:
                    var0 = false;
                case 19:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'addPendingAuthorizedState';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot14;
            var1 = var2.add;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'deletePendingAuthorizedState';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot14;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'hasPendingAuthorizedState';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot14;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ConnectedAccountsStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.connectedAccounts;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot8;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = arg0;
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = _closure1_slot17;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun40731: for (var _fun40731_ip = 0;;) switch (_fun40731_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.local;
                if (!var1) {
                    _fun40731_ip = 24;
                    continue _fun40731
                }
            case 12:
                var2 = var0.accounts;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun40731_ip = 61;
                    continue _fun40731
                }
            case 24:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetch;
                var1 = var1.bind(var2)();
                _fun40731_ip = 98;
                continue _fun40731;
            case 61:
                var2 = var0.accounts;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = _closure1_slot8;
                    var0 = {};
                    var6 = var0;
                    var5 = var1;
                    var3 = copyDataProperties(var6, var5);
                    var4 = var1.integrations;
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var0 = {};
                        var7 = var0;
                        var6 = var4;
                        var1 = copyDataProperties(var7, var6);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fromGuildBasic;
                        var1 = {};
                        var6 = var4.guild;
                        var7 = var1;
                        var4 = copyDataProperties(var7, var6);
                        var5 = new Array(0);
                        var4 = 'features';
                        var1[var4] = var5;
                        var2 = var2.bind(var3)(var1);
                        var1 = 'guild';
                        var0[var1] = var2;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = 'integrations';
                    var0[var1] = var3;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var1;
                    var6 = var0;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot17;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
            case 98:
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_CONNECTIONS_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = _closure1_slot13;
        var1 = var0.integrationId;
        var0 = var0.joining;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var1.USER_CONNECTIONS_INTEGRATION_JOINING = var8;
    var8 = function arg0() {
        _fun40735: for (var _fun40735_ip = 0;;) switch (_fun40735_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.platformType;
                var _closure2_slot0 = var2;
                var2 = var1.id;
                var _closure2_slot1 = var2;
                var3 = var1.revoked;
                var1 = var1.accessToken;
                var4 = _closure1_slot11;
                var2 = var4.find;
                var0 = function(arg0) { // Environment: var0
                    _fun40736: for (var _fun40736_ip = 0;;) switch (_fun40736_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.id;
                            var0 = _closure2_slot1;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun40736_ip = 35;
                                continue _fun40736
                            }
                        case 22:
                            var2 = var2.type;
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 35:
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun40735_ip = 88;
                    continue _fun40735
                }
            case 64:
                if (!(var2 != var3)) {
                    _fun40735_ip = 74;
                    continue _fun40735
                }
            case 68:
                var0.revoked = var3;
            case 74:
                if (!(var2 != var1)) {
                    _fun40735_ip = 84;
                    continue _fun40735
                }
            case 78:
                var0.accessToken = var1;
            case 84:
                var0 = undefined;
                return var0;
            case 88:
                var0 = false;
                return var0;
        }
    };
    var1.USER_CONNECTION_UPDATE = var8;
    var8 = function arg0() {
        _fun40737: for (var _fun40737_ip = 0;;) switch (_fun40737_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot16;
                var2 = var4.integrationId;
                var5 = var4.error;
                var1 = '';
                var0 = undefined;
                if (!(var0 !== var5)) {
                    _fun40737_ip = 36;
                    continue _fun40737
                }
            case 31:
                var1 = var4.error;
            case 36:
                var3[var2] = var1;
                return var0;
        }
    };
    var1.USER_CONNECTIONS_INTEGRATION_JOINING_ERROR = var8;
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.code;
        var6 = var0.state;
        var5 = var0.openid_params;
        var4 = var0.provider;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.callback;
        var1 = {};
        var1.code = var7;
        var1.state = var6;
        var1.openid_params = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var1.USER_CONNECTIONS_CALLBACK = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/ConnectedAccountsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4516, 660, 4391, 1598, 4517, 566, 806, 2]);