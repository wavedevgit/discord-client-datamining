// stores/StreamerModeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun28080: for (var _fun28080_ip = 0;;) switch (_fun28080_ip) {
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
                _fun28080_ip = 74;
                continue _fun28080;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 7;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.STREAMER_MODE_TOGGLE;
        var1 = {};
        var5 = arg0;
        var1.enabled = var5;
        var5 = arg1;
        var1.automatic = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot8 = var1;
    var7 = {
        'enabled': false,
        'autoToggle': true,
        'hideInstantInvites': true,
        'hidePersonalInformation': true,
        'disableSounds': true,
        'disableNotifications': true,
        'enableContentProtection': false
    };
    var _closure1_slot9 = var7;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = {};
    var11 = var1;
    var10 = var7;
    var7 = copyDataProperties(var11, var10);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun28085: for (var _fun28085_ip = 0;;) switch (_fun28085_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun28085_ip = 69;
                        continue _fun28085
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun28085_ip = 105;
                    continue _fun28085;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            var3 = this;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.assign;
            var2 = _closure1_slot10;
            var1 = arg0;
            var1 = var4.bind(var5)(var2, var1);
            var2 = var3.syncWith;
            var0 = _closure1_slot7;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = function() { // Environment: var0
                _fun28087: for (var _fun28087_ip = 0;;) switch (_fun28087_ip) {
                    case 0:
                        var2 = _closure1_slot7;
                        var0 = var2.getId;
                        var5 = var0.bind(var2)();
                        var3 = null;
                        if (!(var3 == var5)) {
                            _fun28087_ip = 38;
                            continue _fun28087
                        }
                    case 23:
                        var0 = {};
                        var7 = _closure1_slot9;
                        var8 = var0;
                        var2 = copyDataProperties(var8, var7);
                        _fun28087_ip = 77;
                        continue _fun28087;
                    case 38:
                        var2 = _closure1_slot10;
                        var2 = var2[var5];
                        if (!(var3 == var2)) {
                            _fun28087_ip = 74;
                            continue _fun28087
                        }
                    case 50:
                        var4 = _closure1_slot10;
                        var3 = {};
                        var7 = _closure1_slot9;
                        var8 = var3;
                        var6 = copyDataProperties(var8, var7);
                        var4[var5] = var3;
                        var2 = var3;
                    case 74:
                        var0 = var2;
                    case 77:
                        _closure1_slot11 = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSettings';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'enabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.enabled;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'autoToggle';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.autoToggle;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hideInstantInvites';
        var4.key = var6;
        var6 = function() {
            _fun28092: for (var _fun28092_ip = 0;;) switch (_fun28092_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.enabled;
                    if (!var0) {
                        _fun28092_ip = 24;
                        continue _fun28092
                    }
                case 11:
                    var1 = _closure1_slot11;
                    var0 = var1.hideInstantInvites;
                case 24:
                    return var0;
            }
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hidePersonalInformation';
        var4.key = var6;
        var6 = function() {
            _fun28093: for (var _fun28093_ip = 0;;) switch (_fun28093_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.enabled;
                    if (!var0) {
                        _fun28093_ip = 24;
                        continue _fun28093
                    }
                case 11:
                    var1 = _closure1_slot11;
                    var0 = var1.hidePersonalInformation;
                case 24:
                    return var0;
            }
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'disableSounds';
        var4.key = var6;
        var6 = function() {
            _fun28094: for (var _fun28094_ip = 0;;) switch (_fun28094_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.enabled;
                    if (!var0) {
                        _fun28094_ip = 24;
                        continue _fun28094
                    }
                case 11:
                    var1 = _closure1_slot11;
                    var0 = var1.disableSounds;
                case 24:
                    return var0;
            }
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'disableNotifications';
        var4.key = var6;
        var6 = function() {
            _fun28095: for (var _fun28095_ip = 0;;) switch (_fun28095_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.enabled;
                    if (!var0) {
                        _fun28095_ip = 24;
                        continue _fun28095
                    }
                case 11:
                    var1 = _closure1_slot11;
                    var0 = var1.disableNotifications;
                case 24:
                    return var0;
            }
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'enableContentProtection';
        var4.key = var6;
        var5 = function() {
            _fun28096: for (var _fun28096_ip = 0;;) switch (_fun28096_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.enabled;
                    if (!var0) {
                        _fun28096_ip = 24;
                        continue _fun28096
                    }
                case 11:
                    var1 = _closure1_slot11;
                    var0 = var1.enableContentProtection;
                case 24:
                    return var0;
            }
        };
        var4.get = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'StreamerModeStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = new Array(1);
    var8 = function(arg0) { // Environment: var3
        _fun28097: for (var _fun28097_ip = 0;;) switch (_fun28097_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot7;
                var0 = var1.getId;
                var2 = var0.bind(var1)();
                var0 = null;
                if (!(var0 != var3)) {
                    _fun28097_ip = 51;
                    continue _fun28097
                }
            case 26:
                if (!(var0 != var2)) {
                    _fun28097_ip = 51;
                    continue _fun28097
                }
            case 30:
                var0 = {};
                var1 = {};
                var5 = var1;
                var4 = var3;
                var3 = copyDataProperties(var5, var4);
                var0[var2] = var1;
                _fun28097_ip = 53;
                continue _fun28097;
            case 51:
                var0 = {};
            case 53:
                return var0;
        }
    };
    var1[0] = var8;
    var7.migrations = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun28098: for (var _fun28098_ip = 0;;) switch (_fun28098_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.isSwitchingAccount;
                if (var0) {
                    _fun28098_ip = 21;
                    continue _fun28098
                }
            case 12:
                var0 = {};
                _closure1_slot10 = var0;
            case 21:
                var0 = undefined;
                return var0;
        }
    };
    var1.LOGOUT = var8;
    var8 = function arg0() {
        _fun28099: for (var _fun28099_ip = 0;;) switch (_fun28099_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userId;
                var2 = _closure1_slot10;
                var2 = var3 in var2;
                if (!var2) {
                    _fun28099_ip = 35;
                    continue _fun28099
                }
            case 22:
                var1 = _closure1_slot10;
                var0 = var0.userId;
                var0 = delete var1[var0];
            case 35:
                var0 = undefined;
                return var0;
        }
    };
    var1.MULTI_ACCOUNT_REMOVE_ACCOUNT = var8;
    var8 = function arg0() {
        _fun28100: for (var _fun28100_ip = 0;;) switch (_fun28100_ip) {
            case 0:
                var0 = arg0;
                var6 = {};
                var8 = _closure1_slot11;
                var9 = var6;
                var2 = copyDataProperties(var9, var8);
                var4 = _closure1_slot11;
                var3 = var0.key;
                var2 = var0.value;
                var4[var3] = var2;
                var3 = var0.key;
                var2 = 'enabled';
                if (!(var2 !== var3)) {
                    _fun28100_ip = 303;
                    continue _fun28100
                }
            case 53:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.track;
                var2 = _closure1_slot8;
                var3 = var2.UPDATE_STREAMER_MODE_SETTINGS;
                var2 = {};
                var7 = _closure1_slot11;
                var7 = var7.enabled;
                var2.enabled = var7;
                var7 = _closure1_slot11;
                var7 = var7.autoToggle;
                var2.automatic = var7;
                var7 = _closure1_slot11;
                var7 = var7.disableNotifications;
                var2.disable_notifications = var7;
                var7 = _closure1_slot11;
                var7 = var7.disableSounds;
                var2.disable_sounds = var7;
                var7 = _closure1_slot11;
                var7 = var7.hideInstantInvites;
                var2.hide_instant_invites = var7;
                var7 = _closure1_slot11;
                var7 = var7.hidePersonalInformation;
                var2.hide_personal_info = var7;
                var7 = _closure1_slot11;
                var7 = var7.enableContentProtection;
                var2.enable_content_protection = var7;
                var7 = var6.enabled;
                var2.old_enabled = var7;
                var7 = var6.autoToggle;
                var2.old_automatic = var7;
                var7 = var6.disableNotifications;
                var2.old_disable_notifications = var7;
                var7 = var6.disableSounds;
                var2.old_disable_sounds = var7;
                var7 = var6.hideInstantInvites;
                var2.old_hide_instant_invites = var7;
                var7 = var6.hidePersonalInformation;
                var2.old_hide_personal_info = var7;
                var6 = var6.enableContentProtection;
                var2.old_enable_content_protection = var6;
                var2 = var4.bind(var5)(var3, var2);
                _fun28100_ip = 322;
                continue _fun28100;
            case 303:
                var3 = _closure1_slot13;
                var2 = var0.value;
                var1 = undefined;
                var0 = false;
                var0 = var3.bind(var1)(var2, var0);
            case 322:
                var0 = true;
                return var0;
        }
    };
    var1.STREAMER_MODE_UPDATE = var8;
    var3 = function arg0() {
        _fun28101: for (var _fun28101_ip = 0;;) switch (_fun28101_ip) {
            case 0:
                var1 = _closure1_slot11;
                var1 = var1.autoToggle;
                if (var1) {
                    _fun28101_ip = 20;
                    continue _fun28101
                }
            case 16:
                var1 = false;
                return var1;
            case 20:
                var1 = arg0;
                var2 = var1.count;
                var1 = 0;
                var3 = var2 > var1;
                var1 = _closure1_slot11;
                var1.enabled = var3;
                var2 = _closure1_slot13;
                var1 = undefined;
                var0 = true;
                var1 = var2.bind(var1)(var3, var0);
                return var0;
        }
    };
    var1.RUNNING_STREAMER_TOOLS_CHANGE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/StreamerModeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 660, 795, 566, 806, 2]);