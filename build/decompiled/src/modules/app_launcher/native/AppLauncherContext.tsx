// modules/app_launcher/native/AppLauncherContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.noop;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot2;
        var1 = var2.useRef;
        var0 = {};
        var4 = function() {
            _fun62445: for (var _fun62445_ip = 0;;) switch (_fun62445_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun62445_ip = 46;
                        continue _fun62445
                    }
                case 10:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'use useRequiredAppLauncherContext and provide a ChatInputRef';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 46:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.getApplicationCommandManager = var4;
        var4 = function() {
            _fun62446: for (var _fun62446_ip = 0;;) switch (_fun62446_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun62446_ip = 46;
                        continue _fun62446
                    }
                case 10:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'use useRequiredAppLauncherContext and provide a ChatInputRef';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 46:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.openCustomKeyboard = var4;
        var3 = function() {
            _fun62447: for (var _fun62447_ip = 0;;) switch (_fun62447_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun62447_ip = 46;
                        continue _fun62447
                    }
                case 10:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'use useRequiredAppLauncherContext and provide a ChatInputRef';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 46:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.closeCustomKeyboard = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var14 = 0;
    var5 = var9[var14];
    var4 = arg3;
    var0 = undefined;
    var10 = var4.bind(var0)(var5);
    var _closure1_slot2 = var10;
    var6 = {};
    var6.DISMISSED = var14;
    var4 = 'DISMISSED';
    var6[var14] = var4;
    var13 = 1;
    var6.COMMAND = var13;
    var4 = 'COMMAND';
    var6[var13] = var4;
    var12 = 2;
    var6.ACTIVITY = var12;
    var4 = 'ACTIVITY';
    var6[var12] = var4;
    var11 = 3;
    var6.BACK = var11;
    var4 = 'BACK';
    var6[var11] = var4;
    var7 = 4;
    var6.OAUTH_MODAL = var7;
    var4 = 'OAUTH_MODAL';
    var6[var7] = var4;
    var _closure1_slot3 = var6;
    var5 = {};
    var5.GESTURE = var14;
    var4 = 'GESTURE';
    var5[var14] = var4;
    var5.KEYBOARD = var13;
    var4 = 'KEYBOARD';
    var5[var13] = var4;
    var5.APP_VIEW = var12;
    var4 = 'APP_VIEW';
    var5[var12] = var4;
    var5.COMMAND_VIEW = var11;
    var4 = 'COMMAND_VIEW';
    var5[var11] = var4;
    var5.OTHER = var7;
    var4 = 'OTHER';
    var5[var7] = var4;
    var4 = var10.createContext;
    var4 = var4.bind(var10)(var0);
    var _closure1_slot4 = var4;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/app_launcher/native/AppLauncherContext.tsx';
    var7 = var8.bind(var9)(var7);
    var2.AppLauncherKeyboardCloseReason = var6;
    var2.AppLauncherBottomSheetExpandReason = var5;
    var2.AppLauncherContext = var4;
    var2.useAppLauncherChatInputRefDummy = var3;
    var3 = function() {
        _fun62448: for (var _fun62448_ip = 0;;) switch (_fun62448_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.useContext;
                var0 = _closure1_slot4;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun62448_ip = 30;
                    continue _fun62448
                }
            case 28:
                return var0;
            case 30:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'AppLauncherContext not found, must be used within AppLauncherNavigator';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.useRequiredAppLauncherContext = var3;
    var1 = function() {
        _fun62449: for (var _fun62449_ip = 0;;) switch (_fun62449_ip) {
            case 0:
                var4 = _closure1_slot2;
                var3 = var4.useRef;
                var2 = _closure1_slot3;
                var2 = var2.DISMISSED;
                var2 = var3.bind(var4)(var2);
                var _closure2_slot0 = var2;
                var3 = _closure1_slot2;
                var2 = var3.useRef;
                var4 = undefined;
                var2 = var2.bind(var3)(var4);
                var _closure2_slot1 = var2;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 1;
                var5 = var7[var2];
                var8 = var3.bind(var4)(var5);
                var6 = var8.useSharedValue;
                var5 = -1;
                var6 = var6.bind(var8)(var5);
                var _closure2_slot2 = var6;
                var2 = var7[var2];
                var8 = var3.bind(var4)(var2);
                var5 = var8.useSharedValue;
                var2 = 0;
                var5 = var5.bind(var8)(var2);
                var _closure2_slot3 = var5;
                var2 = 2;
                var2 = var7[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.AppLauncherEntrypoint;
                var8 = var2.TEXT;
                var _closure2_slot4 = var8;
                var2 = 3;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useDefaultAppLauncherWidth;
                var9 = var2.bind(var3)(var8);
                var _closure2_slot5 = var9;
                var3 = _closure1_slot5;
                var2 = {};
                var7 = false;
                var2.noop = var7;
                var7 = var3.bind(var4)(var2);
                var _closure2_slot6 = var7;
                var4 = _closure1_slot2;
                var3 = var4.useMemo;
                var2 = new Array(5);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var2[4] = var5;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.keyboardCloseReasonRef = var2;
                    var2 = _closure2_slot2;
                    var0.bottomSheetIndex = var2;
                    var2 = _closure2_slot3;
                    var0.bottomSheetPosition = var2;
                    var2 = _closure2_slot1;
                    var0.bottomSheetExpandReasonRef = var2;
                    var2 = _closure2_slot6;
                    var0.chatInputRef = var2;
                    var2 = _closure2_slot5;
                    var0.width = var2;
                    var1 = _closure2_slot4;
                    var0.entrypoint = var1;
                    var1 = undefined;
                    var0.onActivityItemSelected = var1;
                    return var0;
                };
                var0 = var3.bind(var4)(var0, var2);
                var3 = _closure1_slot2;
                var2 = var3.useContext;
                var1 = _closure1_slot4;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun62449_ip = 269;
                    continue _fun62449
                }
            case 266:
                var0 = var1;
            case 269:
                return var0;
        }
    };
    var2.useAppLauncherContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3721, 7805, 7806, 2]);