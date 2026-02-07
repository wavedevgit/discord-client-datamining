// modules/game_console/native/GameConsoleAlertUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var7 = var5[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var7);
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GAME_CONSOLE_ALERT_MODAL_LOCATION;
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.InputModes;
    var _closure1_slot5 = var6;
    var1 = var1.PlatformTypes;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot7 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun67600: for (var _fun67600_ip = 0;;) switch (_fun67600_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = var3.getMode;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot5;
                var2 = var2.PUSH_TO_TALK;
                if (!(var3 === var2)) {
                    _fun67600_ip = 357;
                    continue _fun67600
                }
            case 36:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var7 = undefined;
                var4 = var5.bind(var7)(var2);
                var3 = var4.UNSAFE_isDismissibleContentDismissed;
                var2 = 6;
                var2 = var6[var2];
                var2 = var5.bind(var7)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.CONSOLE_PTT_DISABLE_ALERT;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun67600_ip = 357;
                    continue _fun67600
                }
            case 99:
                var2 = {};
                var3 = _closure1_slot6;
                var5 = var3.XBOX;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var4 = var8[var1];
                var4 = var6.bind(var7)(var4);
                var10 = var4.intl;
                var9 = var10.string;
                var4 = var8[var1];
                var4 = var6.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.bVZ7vy;
                var4 = var9.bind(var10)(var4);
                var2[var5] = var4;
                var5 = var3.PLAYSTATION;
                var4 = var8[var1];
                var4 = var6.bind(var7)(var4);
                var10 = var4.intl;
                var9 = var10.string;
                var4 = var8[var1];
                var4 = var6.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4["6iqUsf"];
                var4 = var9.bind(var10)(var4);
                var2[var5] = var4;
                var3 = var3.PLAYSTATION_STAGING;
                var4 = var8[var1];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var1 = var8[var1];
                var1 = var6.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1["6iqUsf"];
                var1 = var4.bind(var5)(var1);
                var2[var3] = var1;
                var1 = arg0;
                var2 = var2[var1];
                var _closure2_slot0 = var2;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun67600_ip = 337;
                    continue _fun67600
                }
            case 300:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var0 = 8;
                    var1 = var9[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1.title = var6;
                    var8 = _closure1_slot0;
                    var5 = 7;
                    var6 = var9[var5];
                    var6 = var8.bind(var0)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.bL21zs;
                    var5 = var6.bind(var7)(var5);
                    var1.body = var5;
                    var4 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 5;
                        var1 = var5[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var1);
                        var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                        var1 = 6;
                        var1 = var5[var1];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.DismissibleContent;
                        var1 = var1.CONSOLE_PTT_DISABLE_ALERT;
                        var1 = var2.bind(var3)(var1);
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1.onConfirm = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = var1;
                var0 = new var12[var2](var11, var10);
                var0 = var0 instanceof Object ? var0 : var1;
                _fun67600_ip = 355;
                continue _fun67600;
            case 337:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)();
            case 355:
                return var0;
            case 357:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.maybeShowPTTAlert = var6;
    var3 = function arg0() {
        var0 = arg0;
        var6 = var0.title;
        var12 = var0.body;
        var11 = var0.errorCodeMessage;
        var0 = var0.reconnectPlatformType;
        var _closure2_slot0 = var0;
        var9 = _closure1_slot1;
        var10 = _closure1_slot2;
        var8 = 8;
        var1 = var10[var8];
        var0 = undefined;
        var3 = var9.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var1.title = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot0;
        var5 = 9;
        var5 = var10[var5];
        var5 = var6.bind(var0)(var5);
        var6 = var5.SelfDismissibleAlertBody;
        var5 = {};
        var5.body = var12;
        var5.errorCodeMessage = var11;
        var8 = var10[var8];
        var8 = var9.bind(var0)(var8);
        var8 = var8.close;
        var5.dismissCallback = var8;
        var5 = var7.bind(var0)(var6, var5);
        var1.body = var5;
        var4 = function() {
            _fun67604: for (var _fun67604_ip = 0;;) switch (_fun67604_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun67604_ip = 62;
                        continue _fun67604
                    }
                case 13:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.platformType = var4;
                    var3 = _closure1_slot4;
                    var0.location = var3;
                    var0 = var1.bind(var2)(var0);
                case 62:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.onConfirm = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.showSelfDismissableAlert = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/native/GameConsoleAlertUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3477, 5391, 660, 33, 3213, 1358, 1234, 3937, 8371, 5370, 2]);