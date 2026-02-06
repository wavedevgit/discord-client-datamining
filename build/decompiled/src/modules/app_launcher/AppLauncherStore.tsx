// modules/app_launcher/AppLauncherStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun93045: for (var _fun93045_ip = 0;;) switch (_fun93045_ip) {
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
                _fun93045_ip = 76;
                continue _fun93045;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var9 = function arg0() {
        _fun93048: for (var _fun93048_ip = 0;;) switch (_fun93048_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.closeReason;
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun93048_ip = 50;
                    continue _fun93048
                }
            case 15:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 5;
                var0 = var4[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.AppLauncherCloseReason;
                var3 = var0.DISMISSED;
            case 50:
                var4 = _closure1_slot7;
                var1 = false;
                var4.show = var1;
                var4 = _closure1_slot7;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.AppLauncherEntrypoint;
                var1 = var1.NONE;
                var4.entrypoint = var1;
                var1 = _closure1_slot7;
                var1.closeReason = var3;
                var1 = _closure1_slot7;
                var1.initialState = var2;
                var1 = _closure1_slot7;
                var0 = null;
                var1.activeChannelId = var0;
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot9 = var9;
    var8 = function() {
        var2 = _closure1_slot9;
        var1 = {};
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 5;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = var3.AppLauncherCloseReason;
        var3 = var3.DISMISSED;
        var1.closeReason = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = function() {
        var2 = _closure1_slot9;
        var1 = {};
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 5;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = var3.AppLauncherCloseReason;
        var3 = var3.COMMAND;
        var1.closeReason = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var1);
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
    var1 = {
        'show': false,
        'entrypoint': null,
        'lastShownEntrypoint': null,
        'activeViewType': null,
        'activeChannelId': null
    };
    var7 = 5;
    var11 = var5[var7];
    var11 = var4.bind(var0)(var11);
    var11 = var11.AppLauncherEntrypoint;
    var11 = var11.NONE;
    var1.entrypoint = var11;
    var11 = var5[var7];
    var11 = var4.bind(var0)(var11);
    var11 = var11.AppLauncherEntrypoint;
    var11 = var11.NONE;
    var1.lastShownEntrypoint = var11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AppLauncherCloseReason;
    var7 = var7.DISMISSED;
    var1.closeReason = var7;
    var1.initialState = var0;
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var10
        var3 = function() {
            _fun93052: for (var _fun93052_ip = 0;;) switch (_fun93052_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun93052_ip = 69;
                        continue _fun93052
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun93052_ip = 105;
                    continue _fun93052;
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
        var0 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'shouldShowPopup';
        var4.key = var6;
        var6 = function() {
            _fun93054: for (var _fun93054_ip = 0;;) switch (_fun93054_ip) {
                case 0:
                    var0 = _closure1_slot7;
                    var0 = var0.show;
                    if (!var0) {
                        _fun93054_ip = 64;
                        continue _fun93054
                    }
                case 16:
                    var2 = _closure1_slot7;
                    var2 = var2.entrypoint;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.AppLauncherEntrypoint;
                    var1 = var1.TEXT;
                    var0 = var2 === var1;
                case 64:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'shouldShowModal';
        var4.key = var6;
        var6 = function() {
            _fun93055: for (var _fun93055_ip = 0;;) switch (_fun93055_ip) {
                case 0:
                    var0 = _closure1_slot7;
                    var0 = var0.show;
                    if (!var0) {
                        _fun93055_ip = 64;
                        continue _fun93055
                    }
                case 16:
                    var2 = _closure1_slot7;
                    var2 = var2.entrypoint;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.AppLauncherEntrypoint;
                    var1 = var1.VOICE;
                    var0 = var2 === var1;
                case 64:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'entrypoint';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            var0 = var0.entrypoint;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'lastShownEntrypoint';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            var0 = var0.lastShownEntrypoint;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'activeViewType';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            var0 = var0.activeViewType;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'activeChannelId';
        var4.key = var6;
        var6 = function() {
            _fun93059: for (var _fun93059_ip = 0;;) switch (_fun93059_ip) {
                case 0:
                    var0 = _closure1_slot7;
                    var1 = var0.activeChannelId;
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun93059_ip = 25;
                        continue _fun93059
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'closeReason';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            var0 = var0.closeReason;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'initialState';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot7;
            var0 = var0.initialState;
            return var0;
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'AppLauncherStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function arg0() {
        var0 = arg0;
        var6 = var0.entrypoint;
        var5 = var0.activeViewType;
        var2 = var0.initialState;
        var4 = var0.activeChannelId;
        var3 = _closure1_slot7;
        var0 = true;
        var3.show = var0;
        var3 = _closure1_slot7;
        var3.entrypoint = var6;
        var3 = _closure1_slot7;
        var3.lastShownEntrypoint = var6;
        var6 = _closure1_slot7;
        var8 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 5;
        var7 = var7[var3];
        var3 = undefined;
        var3 = var8.bind(var3)(var7);
        var3 = var3.AppLauncherCloseReason;
        var3 = var3.DISMISSED;
        var6.closeReason = var3;
        var3 = _closure1_slot7;
        var3.activeViewType = var5;
        var3 = _closure1_slot7;
        var3.activeChannelId = var4;
        var1 = _closure1_slot7;
        var1.initialState = var2;
        return var0;
    };
    var1.APP_LAUNCHER_SHOW = var10;
    var1.APP_LAUNCHER_DISMISS = var9;
    var1.CONNECTION_OPEN = var8;
    var1.LOGOUT = var8;
    var1.CHANNEL_SELECT = var8;
    var1.APPLICATION_COMMAND_SET_ACTIVE_COMMAND = var3;
    var1.APP_LAUNCHER_SET_ACTIVE_COMMAND = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/AppLauncherStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 7761, 566, 806, 2]);