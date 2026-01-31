// modules/welcome_screen/WelcomeScreenStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun91095: for (var _fun91095_ip = 0;;) switch (_fun91095_ip) {
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
                _fun91095_ip = 76;
                continue _fun91095;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var9 = function arg0() {
        _fun91098: for (var _fun91098_ip = 0;;) switch (_fun91098_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.invite;
                var1 = var0.guild;
                var2 = null;
                var3 = var2 == var1;
                var0 = undefined;
                if (var3) {
                    _fun91098_ip = 31;
                    continue _fun91098
                }
            case 25:
                var0 = var1.welcome_screen;
            case 31:
                var0 = var2 != var0;
                if (!var0) {
                    _fun91098_ip = 62;
                    continue _fun91098
                }
            case 38:
                var3 = _closure1_slot6;
                var2 = var1.id;
                var1 = var1.welcome_screen;
                var3[var2] = var1;
                var0 = true;
            case 62:
                return var0;
        }
    };
    var8 = function arg0() {
        _fun91099: for (var _fun91099_ip = 0;;) switch (_fun91099_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.welcomeScreen;
                var1 = var0.guildId;
                var0 = _closure1_slot6;
                var4 = null;
                if (!(var4 == var2)) {
                    _fun91099_ip = 31;
                    continue _fun91099
                }
            case 27:
                var2 = _closure1_slot5;
            case 31:
                var0[var1] = var2;
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var _closure1_slot5 = var1;
    var3 = {};
    var _closure1_slot6 = var3;
    var3 = {};
    var _closure1_slot7 = var3;
    var3 = false;
    var _closure1_slot8 = var3;
    var _closure1_slot9 = var3;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun91101: for (var _fun91101_ip = 0;;) switch (_fun91101_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun91101_ip = 69;
                        continue _fun91101
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun91101_ip = 105;
                    continue _fun91101;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'get';
        var4.key = var0;
        var0 = function arg0() {
            _fun91102: for (var _fun91102_ip = 0;;) switch (_fun91102_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun91102_ip = 13;
                        continue _fun91102
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot6;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasSeen';
        var4.key = var6;
        var6 = function arg0() {
            _fun91105: for (var _fun91105_ip = 0;;) switch (_fun91105_ip) {
                case 0:
                    var3 = arg0;
                    var1 = arguments[1];
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun91105_ip = 14;
                        continue _fun91105
                    }
                case 12:
                    var1 = false;
                case 14:
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun91105_ip = 51;
                        continue _fun91105
                    }
                case 23:
                    if (var1) {
                        _fun91105_ip = 44;
                        continue _fun91105
                    }
                case 29:
                    var1 = _closure1_slot7;
                    var1 = var1[var3];
                    if (var1) {
                        _fun91105_ip = 42;
                        continue _fun91105
                    }
                case 40:
                    var1 = false;
                case 42:
                    _fun91105_ip = 48;
                    continue _fun91105;
                case 44:
                    var1 = _closure1_slot8;
                case 48:
                    var0 = var1;
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isEmpty';
        var4.key = var6;
        var5 = function arg0() {
            _fun91106: for (var _fun91106_ip = 0;;) switch (_fun91106_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun91106_ip = 46;
                        continue _fun91106
                    }
                case 9:
                    var1 = _closure1_slot6;
                    var1 = var1[var2];
                    var0 = var0 == var1;
                    if (var0) {
                        _fun91106_ip = 44;
                        continue _fun91106
                    }
                case 27:
                    var1 = var1.welcome_channels;
                    var2 = var1.length;
                    var1 = 0;
                    var0 = var1 === var2;
                case 44:
                    return var0;
                case 46:
                    var0 = true;
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'WelcomeScreenStore';
    var7.displayName = var3;
    var3 = 6;
    var3 = var5[var3];
    var13 = var6.bind(var0)(var3);
    var3 = {};
    var3.INVITE_RESOLVE_SUCCESS = var9;
    var3.INVITE_ACCEPT_SUCCESS = var9;
    var3.WELCOME_SCREEN_SUBMIT_SUCCESS = var8;
    var3.WELCOME_SCREEN_UPDATE = var8;
    var8 = function arg0() {
        _fun91107: for (var _fun91107_ip = 0;;) switch (_fun91107_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var2 = var0.isLurking;
                var3 = _closure1_slot7;
                var0 = true;
                var3[var4] = var0;
                if (!var2) {
                    _fun91107_ip = 34;
                    continue _fun91107
                }
            case 30:
                _closure1_slot8 = var0;
            case 34:
                var0 = undefined;
                return var0;
        }
    };
    var3.WELCOME_SCREEN_VIEW = var8;
    var8 = function() {
        var0 = false;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_STOP_LURKING = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = var0.id;
        var1 = _closure1_slot7;
        var0 = false;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_DELETE = var8;
    var8 = function() {
        var0 = true;
        _closure1_slot9 = var0;
        var0 = false;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var3.WELCOME_SCREEN_FETCH_START = var8;
    var8 = function arg0() {
        _fun91111: for (var _fun91111_ip = 0;;) switch (_fun91111_ip) {
            case 0:
                var0 = arg0;
                var1 = false;
                _closure1_slot9 = var1;
                _closure1_slot10 = var1;
                var2 = var0.welcomeScreen;
                var1 = var0.guildId;
                var0 = _closure1_slot6;
                var4 = null;
                if (!(var4 == var2)) {
                    _fun91111_ip = 41;
                    continue _fun91111
                }
            case 37:
                var2 = _closure1_slot5;
            case 41:
                var0[var1] = var2;
                var0 = undefined;
                return var0;
        }
    };
    var3.WELCOME_SCREEN_FETCH_SUCCESS = var8;
    var4 = function() {
        var0 = false;
        _closure1_slot9 = var0;
        var0 = true;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var3.WELCOME_SCREEN_FETCH_FAIL = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var7](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/welcome_screen/WelcomeScreenStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.NO_WELCOME_SCREEN = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);